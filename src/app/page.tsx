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
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MessageSquareQuote className="w-7 h-7 text-violet-600" />
          <span className="text-xl font-bold text-gray-900">ShoutBase</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-900 transition">
            Pricing
          </a>
          <a href="#how-it-works" className="hover:text-gray-900 transition">
            How It Works
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-gray-900 transition px-4 py-2"
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
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Star className="w-4 h-4 fill-violet-500 text-violet-500" />
          Trusted by 500+ businesses
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Collect testimonials that{" "}
          <span className="text-violet-600">actually convert</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing sales because of missing social proof. ShoutBase makes it
          dead simple to collect, manage, and showcase customer love on your
          website.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-violet-700 transition shadow-lg shadow-violet-200"
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
    },
    {
      name: "Marcus Johnson",
      title: "Freelance Designer",
      content:
        "I used to chase clients for testimonials over email. Now I just send a ShoutBase link and they fill it out in 30 seconds.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Bloom Studio",
      content:
        "The best $9/month I spend on my business. It literally pays for itself with every new client who sees my testimonials wall.",
      rating: 5,
    },
  ];

  return (
    <section className="pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-violet-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-violet-100">
          <p className="text-center text-sm text-violet-600 font-medium mb-6">
            Live Preview - This is what your widget looks like
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
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
                  <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold text-sm">
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
    },
    {
      icon: Code,
      title: "Embed Anywhere",
      desc: "Copy one line of code and display testimonials on any website. Works with all platforms.",
    },
    {
      icon: Star,
      title: "Rich Testimonials",
      desc: "Collect star ratings, photos, titles, and rich text. Everything you need for social proof.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "Create your first collection page in 60 seconds. No technical knowledge needed.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Track how your testimonials perform. See impressions, clicks, and conversion impact.",
    },
    {
      icon: MessageSquareQuote,
      title: "Custom Branding",
      desc: "Match your brand colors and logo. Your testimonial pages look like they belong to you.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to collect social proof
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
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-violet-600" />
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
    },
    {
      num: "2",
      title: "Share the Link",
      desc: "Send your collection link to happy clients via email or share it directly. They submit in 30 seconds.",
    },
    {
      num: "3",
      title: "Embed & Convert",
      desc: "Approve the best testimonials and embed a beautiful widget on your website with one line of code.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three steps to more conversions
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
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
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "bg-violet-600 text-white border-violet-600 shadow-xl shadow-violet-200 scale-105"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold bg-amber-400 text-gray-900 px-3 py-1 rounded-full inline-block mb-4">
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
                    ? "bg-white text-violet-600 hover:bg-gray-100"
                    : "bg-violet-600 text-white hover:bg-violet-700"
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

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MessageSquareQuote className="w-5 h-5 text-violet-600" />
          <span className="font-bold text-gray-900">ShoutBase</span>
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
      <Footer />
    </>
  );
}
