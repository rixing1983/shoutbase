import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient as createServiceClient } from "@supabase/supabase-js";

function getAdminClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.metadata?.supabase_user_id;
      if (!userId) break;

      // Handle one-time payment (Pro lifetime)
      if (session.mode === "payment") {
        await supabase.from("profiles").update({ plan: "pro" }).eq("id", userId);
        break;
      }

      // Handle subscription (Business monthly)
      if (session.subscription) {
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );
        const priceId = subscription.items.data[0]?.price.id;

        let plan = "pro";
        if (priceId === process.env.STRIPE_BUSINESS_PRICE_ID) {
          plan = "business";
        }

        await supabase.from("profiles").update({ plan }).eq("id", userId);
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      const customerId = subscription.customer as string;

      const { data: profiles } = await supabase
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .limit(1);

      // Only downgrade to free if they don't have a lifetime pro purchase
      // Business subscribers downgrade to pro (if they had lifetime) or free
      if (profiles && profiles.length > 0) {
        await supabase
          .from("profiles")
          .update({ plan: "free" })
          .eq("id", profiles[0].id);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
