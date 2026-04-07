import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  MessageSquareQuote,
  LayoutDashboard,
  FolderOpen,
  Settings,
  LogOut,
} from "lucide-react";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
        <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-100">
          <MessageSquareQuote className="w-6 h-6 text-violet-600" />
          <span className="text-lg font-bold text-gray-900">ShoutBase</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/collections"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition"
          >
            <FolderOpen className="w-4 h-4" />
            Collections
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </nav>
        <div className="p-3 border-t border-gray-100">
          <div className="px-3 py-2 text-xs text-gray-400 truncate mb-1">
            {user.email}
          </div>
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
