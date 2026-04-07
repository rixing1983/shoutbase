"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle, Trash2 } from "lucide-react";

export function TestimonialActions({
  testimonialId,
  currentStatus,
}: {
  testimonialId: string;
  currentStatus: string;
}) {
  const router = useRouter();

  async function updateStatus(status: string) {
    const supabase = createClient();
    await supabase
      .from("testimonials")
      .update({ status })
      .eq("id", testimonialId);
    router.refresh();
  }

  async function deleteTestimonial() {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    const supabase = createClient();
    await supabase.from("testimonials").delete().eq("id", testimonialId);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1">
      {currentStatus !== "approved" && (
        <button
          onClick={() => updateStatus("approved")}
          className="p-1.5 rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition"
          title="Approve"
        >
          <CheckCircle className="w-4 h-4" />
        </button>
      )}
      {currentStatus !== "rejected" && (
        <button
          onClick={() => updateStatus("rejected")}
          className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition"
          title="Reject"
        >
          <XCircle className="w-4 h-4" />
        </button>
      )}
      <button
        onClick={deleteTestimonial}
        className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition"
        title="Delete"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
