"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function NewCollectionPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [headline, setHeadline] = useState("We'd love your feedback!");
  const [description, setDescription] = useState(
    "Share your experience working with us. Your testimonial helps others make informed decisions."
  );
  const [brandColor, setBrandColor] = useState("#6d28d9");
  const [thankYouMessage, setThankYouMessage] = useState(
    "Thank you for your testimonial! We really appreciate you taking the time."
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleNameChange(value: string) {
    setName(value);
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    const { data, error: insertError } = await supabase
      .from("collections")
      .insert({
        user_id: user.id,
        name,
        slug,
        headline,
        description,
        brand_color: brandColor,
        thank_you_message: thankYouMessage,
      })
      .select()
      .single();

    if (insertError) {
      if (insertError.code === "23505") {
        setError("This URL slug is already taken. Please choose another one.");
      } else {
        setError(insertError.message);
      }
      setLoading(false);
      return;
    }

    router.push(`/dashboard/collections/${data.id}`);
  }

  return (
    <div className="p-8 max-w-2xl">
      <Link
        href="/dashboard/collections"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Collections
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Create a Collection
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Set up a branded page where clients can leave testimonials.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Collection Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
            placeholder="e.g. My Agency Testimonials"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            URL Slug
          </label>
          <div className="flex items-center gap-0">
            <span className="px-4 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500">
              shoutbase.com/c/
            </span>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
              placeholder="my-agency"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={brandColor}
              onChange={(e) => setBrandColor(e.target.value)}
              className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={brandColor}
              onChange={(e) => setBrandColor(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm w-32"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Headline
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Thank You Message
          </label>
          <textarea
            value={thankYouMessage}
            onChange={(e) => setThankYouMessage(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-violet-700 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Collection"}
        </button>
      </form>
    </div>
  );
}
