import Link from "next/link";
import { MessageSquareQuote, ArrowRight } from "lucide-react";
import { blogPosts } from "@/content/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ShoutBase | Testimonial Collection Tips & Guides",
  description:
    "Learn how to collect, manage, and display customer testimonials. Tips, strategies, and guides to boost your social proof and increase conversions.",
};

export default function BlogIndex() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <MessageSquareQuote className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-violet-600">ShoutBase</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-violet-600 transition px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-violet-600 text-white px-5 py-2.5 rounded-lg hover:bg-violet-700 transition font-medium"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Tips and strategies for collecting testimonials and building social
            proof that converts.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-800 transition"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
              <MessageSquareQuote className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-violet-600">ShoutBase</span>
          </Link>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ShoutBase. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
