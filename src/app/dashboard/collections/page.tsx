import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, ExternalLink, MessageSquareQuote } from "lucide-react";
import type { Collection } from "@/lib/types";

export default async function CollectionsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: collections } = await supabase
    .from("collections")
    .select("*")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Collections</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your testimonial collection pages
          </p>
        </div>
        <Link
          href="/dashboard/collections/new"
          className="flex items-center gap-2 bg-violet-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition"
        >
          <Plus className="w-4 h-4" />
          New Collection
        </Link>
      </div>

      {!collections || collections.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <MessageSquareQuote className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Create your first collection
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            A collection is a branded page where clients can leave testimonials.
          </p>
          <Link
            href="/dashboard/collections/new"
            className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-violet-700 transition"
          >
            <Plus className="w-4 h-4" />
            Create Collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {(collections as Collection[]).map((collection) => (
            <Link
              key={collection.id}
              href={`/dashboard/collections/${collection.id}`}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: collection.brand_color }}
                >
                  {collection.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    /{collection.slug}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
