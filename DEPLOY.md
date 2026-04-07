# ShoutBase - Deployment Guide

## Budget Breakdown ($99)
- Domain (.com): ~$10 via Cloudflare Registrar
- Hosting: $0 (Cloudflare Pages / Vercel free tier)
- Database + Auth: $0 (Supabase free tier)
- Payments: $0 (Stripe pay-as-you-go, 2.9% + $0.30 per txn)
- Email: $0 (Resend free tier, 3K/month)
- **Total: ~$10**
- **Remaining: ~$89 for future upgrades**

## Step 1: Set Up Supabase (Free)

1. Go to https://supabase.com and create a free account
2. Create a new project (name: shoutbase)
3. Go to SQL Editor and paste the contents of `supabase-schema.sql`
4. Click "Run" to create all tables and policies
5. Go to Settings > API to get your:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - anon public key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - service_role key (SUPABASE_SERVICE_ROLE_KEY) - for Stripe webhooks

## Step 2: Set Up Stripe (Free)

1. Go to https://stripe.com and create an account
2. Create two Products in the Stripe Dashboard:
   - **Pro Plan**: $9/month recurring
   - **Business Plan**: $19/month recurring
3. Copy the Price IDs for each plan
4. Go to Developers > API Keys to get your keys

## Step 3: Register Domain (~$10)

1. Go to https://dash.cloudflare.com
2. Domain Registration > Register Domain
3. Search for your desired .com domain
4. Purchase (~$10.44/year)

## Step 4: Deploy to Vercel (Free)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial ShoutBase build"
   gh repo create shoutbase --public --push
   ```

2. Go to https://vercel.com, sign in with GitHub
3. Import the shoutbase repository
4. Add environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - NEXT_PUBLIC_APP_URL (your domain, e.g. https://shoutbase.com)
   - STRIPE_SECRET_KEY
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - STRIPE_WEBHOOK_SECRET
   - STRIPE_PRO_PRICE_ID
   - STRIPE_BUSINESS_PRICE_ID

5. Deploy!

## Step 5: Set Up Stripe Webhook

1. In Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
4. Copy the webhook signing secret to your env vars

## Step 6: Connect Custom Domain

1. In Vercel, go to your project > Settings > Domains
2. Add your custom domain
3. Update DNS in Cloudflare to point to Vercel

## Launch Checklist

- [ ] Supabase project created and schema deployed
- [ ] Stripe account set up with products
- [ ] Domain registered
- [ ] App deployed to Vercel
- [ ] Environment variables configured
- [ ] Stripe webhook connected
- [ ] Custom domain configured
- [ ] Test signup flow
- [ ] Test collection creation
- [ ] Test testimonial submission
- [ ] Test embed widget
- [ ] Test Stripe checkout flow
