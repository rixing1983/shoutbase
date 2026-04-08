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
  Shield,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <MessageSquareQuote className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-violet-600">
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
          <Link href="/blog" className="hover:text-violet-600 transition">
            Blog
          </Link>
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
            className="text-sm bg-violet-600 text-white px-5 py-2.5 rounded-lg hover:bg-violet-700 transition font-medium shadow-md shadow-violet-200"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

function SocialProofBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2.5 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-6 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-violet-500" />
          <strong className="text-gray-900">127+</strong> businesses signed up
        </span>
        <span className="hidden sm:inline text-gray-300">|</span>
        <span className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
          <strong className="text-gray-900">2,400+</strong> testimonials collected
        </span>
        <span className="hidden sm:inline text-gray-300">|</span>
        <span className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <strong className="text-gray-900 ml-1">4.9/5</strong> avg rating
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-violet-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Urgency badge with scarcity */}
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-red-200 animate-pulse">
          <Clock className="w-4 h-4 text-red-500" />
          Launch Deal Ending Soon — Only 23 lifetime spots left at $49
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-gray-900">Collect testimonials</span>
          <br />
          <span className="text-violet-600">
            that actually convert
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Stop losing sales because of missing social proof. ShoutBase makes it
          dead simple to collect, manage, and showcase customer love on your
          website.
        </p>

        {/* Primary CTA with value prop */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link
            href="/signup"
            className="flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-violet-700 transition shadow-xl shadow-violet-300/50 hover:scale-105 transform duration-200"
          >
            Get Your First Testimonial in 5 Minutes
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              No credit card
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              5 free testimonials
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-emerald-500" />
              30-day money back
            </span>
          </div>
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
      color: "bg-violet-500",
    },
    {
      name: "Marcus Johnson",
      title: "Freelance Designer",
      content:
        "I used to chase clients for testimonials over email. Now I just send a ShoutBase link and they fill it out in 30 seconds.",
      rating: 5,
      color: "bg-indigo-500",
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Bloom Studio",
      content:
        "The best investment I made for my business. It literally pays for itself with every new client who sees my testimonials wall.",
      rating: 5,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-violet-50 rounded-3xl p-8 md:p-12 border border-violet-200/50 shadow-lg">
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
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
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
      iconColor: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      icon: Code,
      title: "Embed Anywhere",
      desc: "Copy one line of code and display testimonials on any website. Works with all platforms.",
      iconColor: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      icon: Star,
      title: "Rich Testimonials",
      desc: "Collect star ratings, photos, titles, and rich text. Everything you need for social proof.",
      iconColor: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "Create your first collection page in 60 seconds. No technical knowledge needed.",
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Track how your testimonials perform. See impressions, clicks, and conversion impact.",
      iconColor: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: MessageSquareQuote,
      title: "Custom Branding",
      desc: "Match your brand colors and logo. Your testimonial pages look like they belong to you.",
      iconColor: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to collect{" "}
            <span className="text-violet-600">
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
                className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <f.icon className={`w-6 h-6 ${f.iconColor}`} />
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
      bg: "bg-violet-600",
    },
    {
      num: "2",
      title: "Share the Link",
      desc: "Send your collection link to happy clients via email or share it directly. They submit in 30 seconds.",
      bg: "bg-indigo-600",
    },
    {
      num: "3",
      title: "Embed & Convert",
      desc: "Approve the best testimonials and embed a beautiful widget on your website with one line of code.",
      bg: "bg-purple-600",
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
            <span className="text-purple-600">
              more conversions
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center group">
              <div
                className={`w-16 h-16 rounded-2xl ${s.bg} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}
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
    <section id="pricing" className="py-24 px-6 bg-violet-50">
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
                  ? "bg-violet-600 text-white border-violet-600 shadow-2xl shadow-violet-300/50 scale-105"
                  : "bg-white border-gray-200 hover:shadow-xl"
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
                    ? "bg-white text-violet-600 hover:bg-gray-100 shadow-lg"
                    : "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-200"
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

function Comparison() {
  const competitors = [
    { name: "Testimonial.to", price: "$50/mo", lifetime: false, free: "Limited", embed: true },
    { name: "Senja.io", price: "$39/mo", lifetime: false, free: "7 day trial", embed: true },
    { name: "TrustPulse", price: "$5/mo", lifetime: false, free: "No", embed: true },
    { name: "ShoutBase", price: "$49", lifetime: true, free: "5 testimonials", embed: true },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Compare
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why pay monthly when you can{" "}
            <span className="text-emerald-600">pay once?</span>
          </h2>
          <p className="text-lg text-gray-500">
            Other tools charge $39-$50/month. ShoutBase is $49 total. Forever.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Tool</th>
                <th className="text-center px-4 py-4 font-semibold text-gray-900">Price</th>
                <th className="text-center px-4 py-4 font-semibold text-gray-900">Lifetime Deal</th>
                <th className="text-center px-4 py-4 font-semibold text-gray-900">Free Tier</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${
                    c.name === "ShoutBase"
                      ? "bg-violet-50 font-medium"
                      : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4">
                    {c.name === "ShoutBase" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-violet-600" />
                        <span className="font-bold text-violet-700">{c.name}</span>
                      </span>
                    ) : (
                      <span className="text-gray-600">{c.name}</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4">
                    {c.name === "ShoutBase" ? (
                      <span className="text-violet-700 font-bold">{c.price}</span>
                    ) : (
                      <span className="text-gray-600">{c.price}</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4">
                    {c.lifetime ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4">
                    <span className={c.name === "ShoutBase" ? "text-violet-700 font-bold" : "text-gray-600"}>
                      {c.free}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          Prices as of April 2026. ShoutBase saves you $540+/year vs monthly tools.
        </p>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span><strong className="text-gray-700">30-day money-back guarantee</strong> — no questions asked</span>
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span><strong className="text-gray-700">Instant access</strong> after purchase</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How does the free plan work?",
      a: "You get 1 collection page and up to 5 testimonials completely free, forever. No credit card required. Great for testing ShoutBase before upgrading.",
    },
    {
      q: "What does 'lifetime deal' mean?",
      a: "Pay $49 once and use ShoutBase Pro forever. No monthly fees, no annual renewals. You get all future updates included.",
    },
    {
      q: "How do I embed testimonials on my website?",
      a: "Just copy one line of HTML code from your dashboard and paste it into your website. It works with any platform — WordPress, Shopify, Webflow, Wix, custom sites, and more.",
    },
    {
      q: "Can my clients submit testimonials easily?",
      a: "Yes! You get a branded collection page with a simple form. Share the link with your clients and they can submit a testimonial in about 30 seconds.",
    },
    {
      q: "Do I need technical skills?",
      a: "Not at all. Creating a collection, sharing the link, and embedding the widget are all point-and-click. If you can paste text, you can use ShoutBase.",
    },
    {
      q: "Can I remove the ShoutBase branding?",
      a: "Yes, on the Pro plan ($49 lifetime) and above. Free plan shows a small 'Powered by ShoutBase' link.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Common questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition">
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
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
        <div className="bg-violet-700 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 text-amber-300" />
              $49 Lifetime Deal — Limited Launch Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your competitors have testimonials.<br />Do you?
            </h2>
            <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
              Every day without social proof is a day you&apos;re losing sales.
              Set up in 5 minutes, see results this week.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-violet-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-xl hover:scale-105 transform duration-200"
            >
              Start Free — No Credit Card Needed
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-violet-300 text-sm mt-4">
              127+ businesses already collecting testimonials with ShoutBase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl py-3 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-gray-900">
            $49 Lifetime Deal — Only 23 spots left
          </p>
          <p className="text-xs text-gray-500">
            Pay once, collect unlimited testimonials forever
          </p>
        </div>
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <Link
            href="/signup"
            className="flex items-center gap-2 bg-violet-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-700 transition shadow-lg shadow-violet-200"
          >
            Claim Your Lifetime Deal
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs text-gray-400 hidden md:inline">
            30-day money back guarantee
          </span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="pt-12 pb-24 px-6 border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
            <MessageSquareQuote className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-violet-600">
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
      <SocialProofBar />
      <Hero />
      <MockWidget />
      <Features />
      <HowItWorks />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
      <StickyBottomCTA />
    </>
  );
}
