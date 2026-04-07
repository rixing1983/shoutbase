import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ collectionId: string }> }
) {
  const { collectionId } = await params;
  const supabase = await createClient();

  const { data: collection } = await supabase
    .from("collections")
    .select("name, brand_color")
    .eq("id", collectionId)
    .single();

  if (!collection) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select(
      "id, author_name, author_title, author_company, content, rating, created_at"
    )
    .eq("collection_id", collectionId)
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(20);

  return NextResponse.json(
    {
      collection: {
        name: collection.name,
        brandColor: collection.brand_color,
      },
      testimonials: testimonials || [],
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
