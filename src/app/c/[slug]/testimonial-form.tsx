"use client";

import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function TestimonialForm({
  collectionId,
  brandColor,
  thankYouMessage,
}: {
  collectionId: string;
  brandColor: string;
  thankYouMessage: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: insertError } = await supabase
      .from("testimonials")
      .insert({
        collection_id: collectionId,
        author_name: name,
        author_email: email,
        author_title: title || null,
        author_company: company || null,
        content,
        rating,
        status: "pending",
      });

    if (insertError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
        <CheckCircle
          className="w-16 h-16 mx-auto mb-4"
          style={{ color: brandColor }}
        />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h2>
        <p className="text-gray-500">{thankYouMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-100 p-8 space-y-5"
    >
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Star Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-0.5"
            >
              <Star
                className={`w-8 h-8 transition ${
                  star <= (hoveredRating || rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Testimonial Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Testimonial *
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm resize-none"
          style={
            {
              "--tw-ring-color": brandColor,
            } as React.CSSProperties
          }
          placeholder="Share your experience..."
          required
        />
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="Jane Smith"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="jane@example.com"
            required
          />
        </div>
      </div>

      {/* Title & Company (optional) */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="CEO"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="Acme Inc"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full text-white py-3.5 rounded-xl font-semibold text-sm transition disabled:opacity-50"
        style={{ backgroundColor: brandColor }}
      >
        {loading ? "Submitting..." : "Submit Testimonial"}
      </button>
    </form>
  );
}
