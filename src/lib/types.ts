export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  plan: "free" | "pro" | "business";
  stripe_customer_id: string | null;
  created_at: string;
}

export interface Collection {
  id: string;
  user_id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  brand_color: string;
  headline: string;
  description: string;
  thank_you_message: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  collection_id: string;
  author_name: string;
  author_email: string;
  author_title: string | null;
  author_company: string | null;
  author_avatar_url: string | null;
  content: string;
  rating: number;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}
