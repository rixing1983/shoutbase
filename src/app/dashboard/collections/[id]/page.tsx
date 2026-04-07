import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Copy,
  Star,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import type { Collection, Testimonial } from "@/lib/types";
import { TestimonialActions } from "./testimonial-actions";
import { CopyButton } from "./copy-button";

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: collection } = await supabase
    .from("collections")
    .select("*")
    .eq("id", id)
    .single();

  if (!collection) {
    notFound();
  }

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("collection_id", id)
    .order("created_at", { ascending: false });

  const col = collection as Collection;
  const items = (testimonials || []) as Testimonial[];

  const collectUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/c/${col.slug}`;
  const embedCode = `<script src="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/embed.js" data-collection="${col.id}"></script>`;

  return (
    <div className="p-8">
      <Link
        href="/dashboard/collections"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Collections
      </Link>

      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: col.brand_color }}
          >
            {col.name[0]}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{col.name}</h1>
            <p className="text-sm text-gray-500">
              {items.length} testimonial{items.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <a
          href={collectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 font-medium"
        >
          View Collection Page
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Share & Embed */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Collection Link
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Share this link with clients to collect testimonials
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs bg-gray-50 px-3 py-2 rounded-lg text-gray-700 truncate">
              {collectUrl}
            </code>
            <CopyButton text={collectUrl} />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Embed Code
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Add this to your website to display approved testimonials
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs bg-gray-50 px-3 py-2 rounded-lg text-gray-700 truncate">
              {embedCode}
            </code>
            <CopyButton text={embedCode} />
          </div>
        </div>
      </div>

      {/* Testimonials List */}
      <h2 className="text-lg font-bold text-gray-900 mb-4">Testimonials</h2>
      {items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <p className="text-gray-500 text-sm">
            No testimonials yet. Share your collection link to start
            collecting!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold text-sm">
                    {t.author_name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.author_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {[t.author_title, t.author_company]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${
                      t.status === "approved"
                        ? "bg-green-50 text-green-700"
                        : t.status === "pending"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                    }`}
                  >
                    {t.status === "approved" && (
                      <CheckCircle className="w-3 h-3" />
                    )}
                    {t.status === "pending" && <Clock className="w-3 h-3" />}
                    {t.status === "rejected" && (
                      <XCircle className="w-3 h-3" />
                    )}
                    {t.status}
                  </span>
                  <TestimonialActions
                    testimonialId={t.id}
                    currentStatus={t.status}
                  />
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
