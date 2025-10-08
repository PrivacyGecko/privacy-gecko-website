# Deployment Guide - Privacy Gecko Website

This guide walks you through deploying the Privacy Gecko website to Vercel with the custom domain `privacygecko.com`.

## Prerequisites

- [x] Website code is complete and tested
- [ ] GitHub repository created
- [ ] Vercel account created (free tier works)
- [ ] Domain `privacygecko.com` registered
- [ ] Stripe account (for payment processing)
- [ ] Plausible Analytics account (optional, for analytics)

## Step 1: Push Code to GitHub

1. Create a new GitHub repository:
   ```bash
   # If you haven't already initialized git:
   git init
   git add .
   git commit -m "Initial commit: Privacy Gecko website"
   ```

2. Create a repository on GitHub (public or private)

3. Push your code:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

## Step 2: Set Up Stripe

1. Go to [stripe.com](https://stripe.com) and create an account

2. Get your API keys:
   - Navigate to **Developers** → **API keys**
   - Copy your **Publishable key** (starts with `pk_live_` for production)
   - Copy your **Secret key** (starts with `sk_live_` for production)
   - For testing, use test keys (`pk_test_` and `sk_test_`)

3. Set up webhook (for subscription management):
   - Go to **Developers** → **Webhooks**
   - Click **Add endpoint**
   - URL: `https://privacygecko.com/api/webhooks/stripe` (you'll create this endpoint later)
   - Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy the **Webhook signing secret** (starts with `whsec_`)

## Step 3: Set Up Plausible Analytics (Optional)

1. Go to [plausible.io](https://plausible.io) and create an account

2. Add your website:
   - Click **Add a website**
   - Enter domain: `privacygecko.com`
   - The script is already added to the site at `app/layout.tsx:40`

3. Verify it's working once deployed

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub

2. Click **Add New** → **Project**

3. Import your GitHub repository:
   - Select your `privacy-gecko-website` repository
   - Click **Import**

4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (leave default)
   - **Output Directory**: `.next` (leave default)
   - **Install Command**: `npm install` (leave default)

5. Add environment variables:
   Click **Environment Variables** and add:

   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_...
   STRIPE_SECRET_KEY = sk_live_...
   STRIPE_WEBHOOK_SECRET = whsec_...
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN = privacygecko.com
   NEXT_PUBLIC_SITE_URL = https://privacygecko.com
   ```

   **Important**: Mark `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` as **Sensitive**

6. Click **Deploy**

   The first deployment will take 2-3 minutes. Vercel will:
   - Install dependencies
   - Build your Next.js app
   - Deploy to a temporary `.vercel.app` URL

7. Once deployed, you'll see:
   ```
   ✅ Deployment successful!
   🔗 https://privacy-gecko-website-xxxx.vercel.app
   ```

## Step 5: Configure Custom Domain

1. In your Vercel project, go to **Settings** → **Domains**

2. Click **Add Domain**

3. Enter `privacygecko.com` and click **Add**

4. Vercel will show you DNS records to add. You'll see one of:

   **Option A: If using Vercel nameservers (recommended)**:
   - Type: `Nameservers`
   - Nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   - Go to your domain registrar and update nameservers

   **Option B: If using existing DNS provider (e.g., Cloudflare)**:
   - Type: `A Record`
   - Name: `@`
   - Value: `76.76.21.21`

   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

5. Add the DNS records at your registrar/DNS provider

6. Wait for DNS propagation (5 minutes to 48 hours, usually ~10 minutes)

7. Once propagated, Vercel will automatically:
   - Verify domain ownership
   - Issue SSL certificate (HTTPS)
   - Deploy to `privacygecko.com`

## Step 6: Verify Deployment

1. Visit `https://privacygecko.com` and check:
   - [x] Site loads without errors
   - [x] All pages are accessible
   - [x] Navigation works
   - [x] Forms display correctly
   - [x] Responsive design on mobile
   - [x] HTTPS is active (lock icon in browser)

2. Check your browser console for errors (F12 → Console tab)

3. Test key pages:
   - Homepage: `https://privacygecko.com`
   - Products: `https://privacygecko.com/products`
   - Product pages: `/products/advisor`, `/products/share`, `/products/guard`
   - Pricing: `https://privacygecko.com/pricing`
   - Legal pages: `/legal/privacy`, `/legal/terms`, `/legal/cookies`

4. Verify SEO:
   - View page source (Ctrl+U) and check `<title>` and `<meta>` tags
   - Test with: https://www.opengraph.xyz
   - Check sitemap: `https://privacygecko.com/sitemap.xml`
   - Check robots: `https://privacygecko.com/robots.txt`

5. Test analytics:
   - Visit a few pages
   - Check Plausible dashboard (data appears in ~5 minutes)

## Step 7: Performance Optimization (Optional)

1. Run Lighthouse audit:
   - Open Chrome DevTools (F12)
   - Go to **Lighthouse** tab
   - Click **Analyze page load**
   - Aim for scores > 90 in all categories

2. If needed, optimize:
   - Images: Convert to WebP, add proper sizes
   - Fonts: Ensure fonts are preloaded
   - JavaScript: Check for unused code

## Step 8: Ongoing Deployment

For future updates:

1. Make changes to your code locally

2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. Vercel automatically:
   - Detects the push
   - Runs a new build
   - Deploys if build succeeds
   - Updates `privacygecko.com` in ~2 minutes

4. Preview deployments:
   - Every push to a branch creates a preview URL
   - Test changes before merging to main
   - Preview URL: `https://privacy-gecko-website-git-branch-name.vercel.app`

## Troubleshooting

### Build Fails

**Error**: `Module not found`
- **Fix**: Ensure all dependencies are in `package.json`, run `npm install` locally

**Error**: `Type error in ...`
- **Fix**: Run `npm run build` locally to catch TypeScript errors

### Domain Not Working

**Issue**: Domain shows "This site can't be reached"
- **Fix**: Wait for DNS propagation (up to 48 hours)
- **Check**: Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation

**Issue**: "Your connection is not private" SSL error
- **Fix**: Wait for Vercel to issue SSL certificate (automatic, takes ~10 minutes)

### Environment Variables Not Working

**Issue**: Stripe keys not working
- **Fix**: Ensure variables start with `NEXT_PUBLIC_` for client-side access
- **Fix**: Redeploy after adding variables: **Deployments** → **...** → **Redeploy**

## Maintenance Checklist

### Weekly
- [ ] Check Plausible Analytics for traffic insights
- [ ] Monitor Vercel Analytics for performance

### Monthly
- [ ] Review and respond to user feedback
- [ ] Check for Next.js, React, and dependency updates
- [ ] Review legal pages for compliance

### Quarterly
- [ ] Audit accessibility (run axe DevTools)
- [ ] Review and update pricing if needed
- [ ] Backup customer data (if collecting any)

## Support

If you encounter issues:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: support@vercel.com

---

**Deployment Status**: ⚪ Not Deployed | 🟡 In Progress | 🟢 Live

**Last Updated**: January 2025
