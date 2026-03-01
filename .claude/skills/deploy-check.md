---
name: deploy-check
description: Pre-deployment validation checklist. Run this before deploying to staging or production to verify build, lint, security headers, and critical functionality.
user_invocable: true
---

# Pre-Deployment Check Skill

Run comprehensive pre-deployment validation for Privacy Gecko's monorepo before deploying to staging or production.

## What This Skill Does

1. **Build Validation** - Verify all apps build successfully
2. **Lint Check** - Run linting across the monorepo
3. **Security Headers** - Verify CSP, HSTS, and other security headers are configured
4. **Environment Variables** - Check required env vars are present
5. **Privacy Check** - Verify no tracking scripts beyond Plausible
6. **Dependency Audit** - Check for known vulnerabilities

## Steps to Execute

### Step 1: Build Check
```bash
cd /Users/pothamsettyk/Projects/privacy-gecko-website
pnpm build
```
All three apps (web, blog, admin) and packages (ui, database) must build without errors.

### Step 2: Lint Check
```bash
pnpm lint
```

### Step 3: Security Headers Check
Verify `apps/web/next.config.mjs` contains proper security headers:
- `Strict-Transport-Security` (HSTS)
- `Content-Security-Policy` (CSP)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (restrictive)

### Step 4: Environment Variables
Check `.env.local` or Vercel dashboard has:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`
- `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `DATABASE_URL` (for blog/admin)
- `ADMIN_API_KEY` (for admin)

### Step 5: Privacy Compliance Check
Search for any unauthorized tracking scripts:
```bash
# Check for Google Analytics, Facebook Pixel, or other trackers
grep -r "google-analytics\|gtag\|fbq\|facebook.*pixel\|hotjar\|mixpanel\|segment\|amplitude" apps/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"
```
Result should be empty. Only Plausible Analytics is allowed.

### Step 6: Dependency Audit
```bash
pnpm audit
```
Check for critical or high severity vulnerabilities.

### Step 7: TypeScript Check
```bash
cd apps/web && npx tsc --noEmit
cd ../blog && npx tsc --noEmit
cd ../admin && npx tsc --noEmit
```

## Deployment Process

Deployment is **manual**, handled by the founder via Vercel:
1. Push code to appropriate branch
2. Founder reviews changes
3. Founder triggers deployment via Vercel dashboard
4. Verify on staging first: stage.privacygecko.com
5. Then promote to production: privacygecko.com

## Report Format

```
PRE-DEPLOYMENT CHECK REPORT
Date: [Date]
Branch: [Branch name]

BUILD: [PASS/FAIL]
LINT: [PASS/FAIL]
SECURITY HEADERS: [PASS/FAIL]
ENV VARIABLES: [PASS/FAIL]
PRIVACY COMPLIANCE: [PASS/FAIL]
DEPENDENCIES: [PASS/FAIL]
TYPESCRIPT: [PASS/FAIL]

OVERALL: [READY TO DEPLOY / NOT READY]

ISSUES FOUND:
[List any issues]

RECOMMENDATION:
[Deploy to staging / Fix issues first / etc.]
```
