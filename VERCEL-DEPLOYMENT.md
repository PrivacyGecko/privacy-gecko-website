# Vercel Deployment Instructions

## Current Situation

✅ **Code Status**: All commits are pushed to GitHub
- Latest commit: `5e8fd69 Fix Vercel deployment issues`
- All improvements included: Stripe integration, token page, pricing enhancements

❌ **Deployment Status**: New features NOT live on privacygecko.com
- Currently serving old version from commit `568560e`
- Missing: /token page, /success page, jump links, monthly/yearly toggle, etc.

## Why Didn't Vercel Auto-Deploy?

Possible reasons:
1. **Auto-deploy disabled** in Vercel project settings
2. **Deployment in progress** (check Vercel dashboard)
3. **Silent failure** (check deployment logs)
4. **Branch mismatch** (Vercel watching different branch)

## Steps to Deploy

### Option 1: Manual Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Find your `privacy-gecko-website` project
3. Click on the project
4. Look at the "Deployments" tab:
   - If you see a deployment in progress → wait for it to complete
   - If you see a failed deployment → click it to view error logs
   - If you see no recent deployment → proceed to next step
5. Click **"Deploy"** button (or go to the Deployments tab and click "Redeploy")
6. Select the `master` branch
7. Click **"Deploy"**
8. Wait 2-3 minutes for build to complete

### Option 2: Force Deploy via Git (Alternative)

If manual deploy doesn't work, force a new commit:

```bash
# Make an empty commit to trigger deployment
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin master
```

Then check Vercel dashboard to see if deployment starts.

### Option 3: Vercel CLI (Advanced)

If you have Vercel CLI installed:

```bash
# Deploy from local directory
vercel --prod

# Or pull and redeploy
vercel pull
vercel build --prod
vercel deploy --prebuilt --prod
```

## Verify Deployment

### Quick Check

Run the verification script:

```bash
./check-deployment.sh
```

### Full Test Suite

Run the Playwright tests:

```bash
npx playwright test tests/deployment-check.spec.ts
```

You should see **13/13 tests passing** when deployment is complete.

### Manual Verification

Visit these URLs and verify:
- https://privacygecko.com/token (should load, not redirect)
- https://privacygecko.com/success (should load)
- https://privacygecko.com/pricing (should have "Jump to:" section at top)

## Troubleshooting

### Check Current Deployment

```bash
# Check what's currently deployed
curl -I https://privacygecko.com/token
# Should return: HTTP/2 200 (not 307 or 404)
```

### Check Vercel Project Settings

1. Go to Project Settings → Git
2. Verify:
   - ✅ Connected to correct GitHub repo
   - ✅ Production branch is `master` (or `main`)
   - ✅ Auto-deploy is enabled

### Check Build Logs

If deployment fails:
1. Go to failed deployment in Vercel dashboard
2. Click "View Build Logs"
3. Look for errors (we've fixed all known issues, but check for new ones)

### Environment Variables

Verify these are set in Vercel → Project Settings → Environment Variables:
- `STRIPE_SECRET_KEY` (starts with `sk_test_...` or `sk_live_...`)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (starts with `pk_test_...` or `pk_live_...`)
- `NEXT_PUBLIC_SITE_URL` = `https://privacygecko.com`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `privacygecko.com`

**Note**: These should be set as "Production" environment variables.

## Expected Build Output

Successful build should show:

```
○  (Static)  prerendered as static content
✓ Generating static pages (24/24)
```

24 pages total including:
- Homepage
- Pricing (with new features)
- Token page (new)
- Success page (new)
- Product pages
- Legal pages
- etc.

## After Deployment

1. Run `./check-deployment.sh` - should show ✅ for all 4 checks
2. Run `npx playwright test tests/deployment-check.spec.ts` - should pass 13/13 tests
3. Test Stripe checkout flow manually (it's in test mode, use test card `4242 4242 4242 4242`)

## Need Help?

If deployment still fails after these steps:
1. Check Vercel deployment logs for specific errors
2. Verify all environment variables are set correctly
3. Try deploying from a fresh clone of the repo
4. Check Vercel status page: https://www.vercel-status.com/
