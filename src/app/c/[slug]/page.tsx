import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import type { Collection } from "@/lib/types";
import { TestimonialForm } from "./testimonial-form";
import { MessageSquareQuote } from "lucide-react";

export default async function CollectionPublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: collection } = await supabase
    .from("collections")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!collection) {
    notFound();
  }

  const col = collection as Collection;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
            style={{ backgroundColor: col.brand_color }}
          >
            {col.name[0]}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {col.headline}
          </h1>
          <p className="text-gray-500">{col.description}</p>
        </div>

        {/* Form */}
        <TestimonialForm
          collectionId={col.id}
          brandColor={col.brand_color}
          thankYouMessage={col.thank_you_message}
        />

        {/* Footer */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-500"
          >
            Powered by{" "}
            <MessageSquareQuote className="w-3 h-3" />
            <span className="font-medium">ShoutBase</span>
          </a>
        </div>
      </div>
    </div>
  );
}
