-- ShoutBase Database Schema
-- Run this in your Supabase SQL Editor

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company TEXT,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'business')),
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Collections table
CREATE TABLE collections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  brand_color TEXT NOT NULL DEFAULT '#6d28d9',
  headline TEXT NOT NULL DEFAULT 'We''d love your feedback!',
  description TEXT NOT NULL DEFAULT 'Share your experience working with us.',
  thank_you_message TEXT NOT NULL DEFAULT 'Thank you for your testimonial!',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_collections_user_id ON collections(user_id);
CREATE INDEX idx_collections_slug ON collections(slug);

-- Testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_title TEXT,
  author_company TEXT,
  author_avatar_url TEXT,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_testimonials_collection_id ON testimonials(collection_id);
CREATE INDEX idx_testimonials_status ON testimonials(status);

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Collections: users can CRUD their own collections
CREATE POLICY "Users can view own collections"
  ON collections FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own collections"
  ON collections FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own collections"
  ON collections FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own collections"
  ON collections FOR DELETE USING (auth.uid() = user_id);

-- Collections: public can view collections by slug (for the testimonial form)
CREATE POLICY "Public can view collections by slug"
  ON collections FOR SELECT USING (true);

-- Testimonials: collection owners can manage testimonials
CREATE POLICY "Collection owners can view testimonials"
  ON testimonials FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM collections
      WHERE collections.id = testimonials.collection_id
      AND collections.user_id = auth.uid()
    )
  );

CREATE POLICY "Collection owners can update testimonials"
  ON testimonials FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM collections
      WHERE collections.id = testimonials.collection_id
      AND collections.user_id = auth.uid()
    )
  );

CREATE POLICY "Collection owners can delete testimonials"
  ON testimonials FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM collections
      WHERE collections.id = testimonials.collection_id
      AND collections.user_id = auth.uid()
    )
  );

-- Anyone can insert a testimonial (public form submission)
CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT WITH CHECK (true);

-- Public can view approved testimonials (for the embed widget)
CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  USING (status = 'approved');

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
