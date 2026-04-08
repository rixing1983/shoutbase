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
    console.error("Webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getAdminClient();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.supabase_user_id;
        if (!userId) {
          console.error("No supabase_user_id in session metadata");
          break;
        }

        // Handle one-time payment (Pro lifetime)
        if (session.mode === "payment") {
          await supabase
            .from("profiles")
            .update({ plan: "pro" })
            .eq("id", userId);
          console.log(`User ${userId} upgraded to Pro (lifetime)`);
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

          await supabase
            .from("profiles")
            .update({ plan })
            .eq("id", userId);
          console.log(`User ${userId} upgraded to ${plan} (subscription)`);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const customerId = subscription.customer as string;

        const { data: profiles } = await supabase
          .from("profiles")
          .select("id, plan")
          .eq("stripe_customer_id", customerId)
          .limit(1);

        if (profiles && profiles.length > 0) {
          const profile = profiles[0];

          // Check if user has any successful one-time payments (lifetime pro)
          // If so, downgrade to pro instead of free
          let newPlan = "free";
          try {
            const sessions = await stripe.checkout.sessions.list({
              customer: customerId,
              limit: 10,
            });
            const hasLifetimePurchase = sessions.data.some(
              (s) =>
                s.mode === "payment" &&
                s.payment_status === "paid"
            );
            if (hasLifetimePurchase) {
              newPlan = "pro";
            }
          } catch {
            // If we can't check, default to free
            console.warn("Could not check for lifetime purchase");
          }

          await supabase
            .from("profiles")
            .update({ plan: newPlan })
            .eq("id", profile.id);
          console.log(
            `Subscription cancelled for user ${profile.id}, set plan to ${newPlan}`
          );
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        const customerId = invoice.customer as string;
        console.warn(
          `Payment failed for customer ${customerId}, invoice ${invoice.id}`
        );
        break;
      }
    }
  } catch (err) {
    console.error("Error processing webhook:", err);
    return NextResponse.json({ received: true, error: "Processing error" });
  }

  return NextResponse.json({ received: true });
}
