import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShoutBase - Collect & Display Testimonials That Convert",
  description:
    "The easiest way to collect, manage, and showcase customer testimonials. Embed beautiful widgets on your website in minutes. Free to start.",
  keywords: [
    "testimonials",
    "social proof",
    "reviews",
    "customer feedback",
    "embed widget",
    "collect testimonials",
    "testimonial widget",
    "review collection tool",
  ],
  openGraph: {
    title: "ShoutBase - Collect & Display Testimonials That Convert",
    description:
      "Stop losing sales because of missing social proof. Collect, manage, and embed customer testimonials in minutes.",
    url: "https://shoutbase-alpha.vercel.app",
    siteName: "ShoutBase",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShoutBase - Collect Testimonials That Convert",
    description:
      "The easiest way to collect and display customer testimonials. Free to start, $49 lifetime deal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ShoutBase",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Collect, manage, and embed customer testimonials on your website in minutes.",
              url: "https://shoutbase-alpha.vercel.app",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free Plan",
                },
                {
                  "@type": "Offer",
                  price: "49",
                  priceCurrency: "USD",
                  name: "Pro Lifetime",
                },
                {
                  "@type": "Offer",
                  price: "19",
                  priceCurrency: "USD",
                  name: "Business Monthly",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "12",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does ShoutBase's free plan work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You get 1 collection page and up to 5 testimonials completely free, forever. No credit card required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does ShoutBase lifetime deal mean?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pay $49 once and use ShoutBase Pro forever. No monthly fees, no annual renewals. All future updates included.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I embed testimonials on my website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Copy one line of HTML code from your dashboard and paste it into your website. Works with WordPress, Shopify, Webflow, Wix, and any custom site.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
