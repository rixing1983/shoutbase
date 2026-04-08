import Link from "next/link";
import { MessageSquareQuote, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/blog-posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | ShoutBase Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://shoutbase.vercel.app/blog/${post.slug}`,
    },
  };
}

// Simple markdown-like renderer for our blog content
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="text-gray-600 leading-relaxed ml-4 list-disc">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>'),
            }}
          />
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-gray-600 leading-relaxed ml-4 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith("[") && line.includes("](")) {
      const match = line.match(/\[(.+?)\]\((.+?)\)/);
      if (match) {
        elements.push(
          <p key={i} className="my-4">
            <Link
              href={match[2]}
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
            >
              {match[1]}
            </Link>
          </p>
        );
      }
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: line.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-gray-900">$1</strong>'
            ),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
              href="/blog"
              className="text-sm text-gray-600 hover:text-violet-600 transition px-4 py-2"
            >
              Blog
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
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-800 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-gray max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-violet-50 rounded-2xl p-8 border border-violet-200/50 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to collect testimonials?
            </h3>
            <p className="text-gray-500 mb-6">
              Start for free. No credit card required.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
            >
              Get Started Free
            </Link>
          </div>
        </article>
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
