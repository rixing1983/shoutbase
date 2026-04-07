import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, MessageSquareQuote, Eye, Star } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: collections } = await supabase
    .from("collections")
    .select("id")
    .eq("user_id", user!.id);

  const collectionIds = collections?.map((c) => c.id) || [];

  let totalTestimonials = 0;
  let approvedCount = 0;
  let pendingCount = 0;

  if (collectionIds.length > 0) {
    const { count: total } = await supabase
      .from("testimonials")
      .select("*", { count: "exact", head: true })
      .in("collection_id", collectionIds);

    const { count: approved } = await supabase
      .from("testimonials")
      .select("*", { count: "exact", head: true })
      .in("collection_id", collectionIds)
      .eq("status", "approved");

    const { count: pending } = await supabase
      .from("testimonials")
      .select("*", { count: "exact", head: true })
      .in("collection_id", collectionIds)
      .eq("status", "pending");

    totalTestimonials = total || 0;
    approvedCount = approved || 0;
    pendingCount = pending || 0;
  }

  const stats = [
    {
      label: "Collections",
      value: collectionIds.length,
      icon: MessageSquareQuote,
      color: "text-violet-600 bg-violet-100",
    },
    {
      label: "Total Testimonials",
      value: totalTestimonials,
      icon: Star,
      color: "text-amber-600 bg-amber-100",
    },
    {
      label: "Approved",
      value: approvedCount,
      icon: Eye,
      color: "text-green-600 bg-green-100",
    },
    {
      label: "Pending Review",
      value: pendingCount,
      icon: MessageSquareQuote,
      color: "text-blue-600 bg-blue-100",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back, {user?.user_metadata?.full_name || "there"}
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-5"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}
            >
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {collectionIds.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <MessageSquareQuote className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No collections yet
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Create your first collection to start gathering testimonials from
            your clients.
          </p>
          <Link
            href="/dashboard/collections/new"
            className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-violet-700 transition"
          >
            <Plus className="w-4 h-4" />
            Create Your First Collection
          </Link>
        </div>
      )}
    </div>
  );
}
