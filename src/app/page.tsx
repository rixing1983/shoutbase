import Link from "next/link";
import {
  MessageSquareQuote,
  Star,
  Zap,
  Code,
  Mail,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <MessageSquareQuote className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">
            ShoutBase
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-violet-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-violet-600 transition">
            Pricing
          </a>
          <a href="#how-it-works" className="hover:text-violet-600 transition">
            How It Works
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-violet-600 transition px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg hover:from-violet-700 hover:to-indigo-700 transition font-medium shadow-md shadow-violet-200"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-violet-200">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Launch Special — $49 Lifetime Deal
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-gray-900">Collect testimonials</span>
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            that actually convert
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing sales because of missing social proof. ShoutBase makes it
          dead simple to collect, manage, and showcase customer love on your
          website.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-violet-700 hover:to-indigo-700 transition shadow-xl shadow-violet-300/50"
          >
            Start Collecting Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400">
            No credit card required. 5 free testimonials.
          </p>
        </div>
      </div>
    </section>
  );
}

function MockWidget() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, GrowthLab",
      content:
        "ShoutBase increased our conversion rate by 34%. The embed widget looks absolutely stunning on our site.",
      rating: 5,
      color: "from-violet-500 to-indigo-500",
    },
    {
      name: "Marcus Johnson",
      title: "Freelance Designer",
      content:
        "I used to chase clients for testimonials over email. Now I just send a ShoutBase link and they fill it out in 30 seconds.",
      rating: 5,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Bloom Studio",
      content:
        "The best investment I made for my business. It literally pays for itself with every new client who sees my testimonials wall.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-violet-100 via-indigo-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-violet-200/50 shadow-lg">
          <p className="text-center text-sm text-violet-600 font-semibold mb-8 uppercase tracking-wide">
            Live Preview — Your Widget Looks Like This
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Mail,
      title: "Email Collection",
      desc: "Send beautiful email requests to your clients. One click for them to leave a testimonial.",
      gradient: "from-violet-500 to-indigo-500",
      bg: "from-violet-50 to-indigo-50",
    },
    {
      icon: Code,
      title: "Embed Anywhere",
      desc: "Copy one line of code and display testimonials on any website. Works with all platforms.",
      gradient: "from-indigo-500 to-blue-500",
      bg: "from-indigo-50 to-blue-50",
    },
    {
      icon: Star,
      title: "Rich Testimonials",
      desc: "Collect star ratings, photos, titles, and rich text. Everything you need for social proof.",
      gradient: "from-amber-500 to-orange-500",
      bg: "from-amber-50 to-orange-50",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "Create your first collection page in 60 seconds. No technical knowledge needed.",
      gradient: "from-emerald-500 to-teal-500",
      bg: "from-emerald-50 to-teal-50",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Track how your testimonials perform. See impressions, clicks, and conversion impact.",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
    },
    {
      icon: MessageSquareQuote,
      title: "Custom Branding",
      desc: "Match your brand colors and logo. Your testimonial pages look like they belong to you.",
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to collect{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              social proof
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From collection to display, ShoutBase handles the entire testimonial
            workflow so you can focus on your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <f.icon
                  className={`w-6 h-6 bg-gradient-to-br ${f.gradient} bg-clip-text`}
                  style={{ color: f.gradient.includes("amber") ? "#f59e0b" : f.gradient.includes("emerald") ? "#10b981" : f.gradient.includes("blue") ? "#3b82f6" : f.gradient.includes("purple") ? "#a855f7" : "#7c3aed" }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Create a Collection",
      desc: "Set up your branded testimonial page in 60 seconds. Add your logo, colors, and a custom message.",
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      num: "2",
      title: "Share the Link",
      desc: "Send your collection link to happy clients via email or share it directly. They submit in 30 seconds.",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      num: "3",
      title: "Embed & Convert",
      desc: "Approve the best testimonials and embed a beautiful widget on your website with one line of code.",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Three steps to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              more conversions
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center group">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for getting started",
      features: [
        "5 testimonials",
        "1 collection page",
        "Basic embed widget",
        "ShoutBase branding",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "one-time",
      desc: "Pay once, use forever",
      features: [
        "Unlimited testimonials",
        "3 collection pages",
        "Custom branding",
        "Remove ShoutBase branding",
        "Email collection requests",
        "Lifetime updates",
      ],
      cta: "Buy Pro — $49",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$19",
      period: "/month",
      desc: "For teams & agencies",
      features: [
        "Everything in Pro",
        "Unlimited collection pages",
        "Team members",
        "API access",
        "Advanced analytics",
        "Custom CSS for widgets",
      ],
      cta: "Start Business Trial",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-white via-violet-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-gray-500">
            Start free. Upgrade when you need more.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 text-white border-transparent shadow-2xl shadow-violet-300/50 scale-105"
                  : "bg-white border-gray-200 hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-1 ${plan.highlighted ? "" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-4 ${plan.highlighted ? "text-violet-200" : "text-gray-500"}`}
              >
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${plan.highlighted ? "text-violet-200" : "text-gray-500"}`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-amber-400" : "text-violet-600"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition ${
                  plan.highlighted
                    ? "bg-white text-violet-600 hover:bg-gray-100 shadow-lg"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to collect your first testimonial?
            </h2>
            <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of businesses using ShoutBase to turn happy customers
              into powerful social proof.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <MessageSquareQuote className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">
            ShoutBase
          </span>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ShoutBase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MockWidget />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
