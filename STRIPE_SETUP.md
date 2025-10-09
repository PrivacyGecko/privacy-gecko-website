# Stripe Integration Setup Guide

This document explains how to configure Stripe Price IDs for the Privacy Gecko checkout system.

## Overview

The checkout system uses Stripe Price IDs to create subscription checkout sessions. Currently, the codebase contains **placeholder Price IDs** that will cause checkout to fail in production.

## Current Status

⚠️ **ACTION REQUIRED**: Placeholder Price IDs are currently in use. These must be replaced with real Stripe Price IDs before deploying to production.

### Placeholder Price IDs (MUST BE REPLACED)

```
advisor_pro_monthly: 'price_advisor_pro_monthly'
share_pro_monthly: 'price_share_pro_monthly'
guard_pro_monthly: 'price_guard_pro_monthly'
bundle_monthly: 'price_bundle_monthly'
bundle_yearly: 'price_bundle_yearly'
```

## How to Get Stripe Price IDs

### Step 1: Create Products in Stripe Dashboard

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Products** (or **Product Catalog**)
3. Click **+ Add product**

### Step 2: Configure Each Product

For each Privacy Gecko product, create:

#### GeckoAdvisor Pro (Monthly)
- **Product Name**: GeckoAdvisor Pro
- **Description**: Privacy audit tool with advanced features
- **Pricing Model**: Recurring
- **Price**: $9.99/month (or your chosen price)
- **Billing Period**: Monthly
- Copy the **Price ID** (starts with `price_`)

#### GeckoShare Pro (Monthly)
- **Product Name**: GeckoShare Pro
- **Description**: Secure file sharing with encryption
- **Pricing Model**: Recurring
- **Price**: $7.99/month (or your chosen price)
- **Billing Period**: Monthly
- Copy the **Price ID**

#### GeckoGuard Pro (Monthly)
- **Product Name**: GeckoGuard Pro
- **Description**: Advanced browser protection
- **Pricing Model**: Recurring
- **Price**: $5.99/month (or your chosen price)
- **Billing Period**: Monthly
- Copy the **Price ID**

#### Privacy Bundle (Monthly)
- **Product Name**: Privacy Gecko Bundle
- **Description**: All three products at a discounted rate
- **Pricing Model**: Recurring
- **Price**: $19.99/month (or your chosen price)
- **Billing Period**: Monthly
- Copy the **Price ID**

#### Privacy Bundle (Yearly)
- **Product Name**: Privacy Gecko Bundle (Annual)
- **Description**: All three products - save 20% with annual billing
- **Pricing Model**: Recurring
- **Price**: $199.99/year (or your chosen price)
- **Billing Period**: Yearly
- Copy the **Price ID**

### Step 3: Format Check

Real Stripe Price IDs follow this format:
```
price_[24+ alphanumeric characters]
```

Examples:
```
price_1AbCdEfGhIjKlMnOpQrStUv
price_1QRstUvWxYz0123456789AB
```

## Configuration Methods

### Method 1: Environment Variables (RECOMMENDED)

Add these to your `.env.local` file:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... # or sk_live_... for production

# Stripe Price IDs
STRIPE_PRICE_ADVISOR_PRO_MONTHLY=price_1AbCdEfGhIjKlMnOpQrStUv
STRIPE_PRICE_SHARE_PRO_MONTHLY=price_1QRstUvWxYz0123456789AB
STRIPE_PRICE_GUARD_PRO_MONTHLY=price_1CdEfGhIjKlMnOpQrStUvWx
STRIPE_PRICE_BUNDLE_MONTHLY=price_1YzAbCdEfGhIjKlMnOpQrS
STRIPE_PRICE_BUNDLE_YEARLY=price_1TuVwXyZaBcDeFgHiJkLmNo
```

**Benefits:**
- Secure (not committed to version control)
- Easy to update without code changes
- Different values for dev/staging/production

### Method 2: Direct Code Update

Edit `app/api/checkout/route.ts` and replace placeholder values:

```typescript
const PRICE_IDS = {
  advisor_pro_monthly: 'price_1AbCdEfGhIjKlMnOpQrStUv', // Your actual Price ID
  share_pro_monthly: 'price_1QRstUvWxYz0123456789AB',   // Your actual Price ID
  guard_pro_monthly: 'price_1CdEfGhIjKlMnOpQrStUvWx',   // Your actual Price ID
  bundle_monthly: 'price_1YzAbCdEfGhIjKlMnOpQrS',       // Your actual Price ID
  bundle_yearly: 'price_1TuVwXyZaBcDeFgHiJkLmNo',       // Your actual Price ID
};
```

**Note:** This method is less secure as Price IDs will be in version control.

## Testing

### Development Testing

1. Use Stripe **test mode** Price IDs (from test mode dashboard)
2. Set `STRIPE_SECRET_KEY=sk_test_...` in `.env.local`
3. Use [Stripe test card numbers](https://stripe.com/docs/testing) for testing:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

### Production Deployment

1. Switch to Stripe **live mode** Price IDs
2. Set `STRIPE_SECRET_KEY=sk_live_...` in production environment
3. Verify all Price IDs are valid before deploying

## Validation

The codebase includes automatic validation:

### Development Warnings

When running `npm run dev`, you'll see console warnings if placeholder Price IDs are detected:

```
⚠️  WARNING: Stripe Price ID for "advisor_pro_monthly" appears to be a placeholder
   Real Stripe Price IDs must start with "price_" followed by at least 24 characters.
   Checkout will fail with this Price ID.
```

### Production Protection

In production, the API will reject checkout attempts with invalid Price IDs:

```json
{
  "error": "Invalid Price ID configuration. Please contact support."
}
```

## Deployment Checklist

Before deploying to production:

- [ ] All Stripe products created in Stripe Dashboard
- [ ] All Price IDs copied from Stripe Dashboard
- [ ] Environment variables set in production environment
- [ ] `STRIPE_SECRET_KEY` is set to **live mode** key (`sk_live_...`)
- [ ] Test checkout flow in staging environment
- [ ] Verify no console warnings about placeholder Price IDs
- [ ] Confirm successful test transaction

## Troubleshooting

### "Invalid Price ID" Error

**Cause**: Price ID format is incorrect or doesn't exist in Stripe account.

**Solution**:
1. Verify Price ID in Stripe Dashboard
2. Check for typos
3. Ensure using correct Stripe account (test vs. live)

### Checkout Fails with "No such price"

**Cause**: Price ID doesn't exist in the Stripe account being used.

**Solution**:
1. Verify you're using the correct Stripe secret key (test vs. live)
2. Confirm Price ID was copied from the same Stripe account
3. Check if price was created in a different Stripe mode

### Environment Variables Not Loading

**Cause**: `.env.local` not being read by the application.

**Solution**:
1. Restart the Next.js development server
2. Verify file is named exactly `.env.local`
3. Check file is in the project root directory
4. Ensure no syntax errors in `.env.local`

## Security Best Practices

1. **Never commit** `.env.local` or `.env.production` to version control
2. Use **environment variables** for all sensitive data
3. Use **test mode** Price IDs during development
4. Rotate **Stripe secret keys** periodically
5. Monitor **Stripe Dashboard** for suspicious activity

## Support

If you encounter issues:

1. Check [Stripe API Docs](https://stripe.com/docs/api)
2. Review [Stripe Testing Guide](https://stripe.com/docs/testing)
3. Contact Privacy Gecko support at support@privacygecko.com

## Related Files

- `app/api/checkout/route.ts` - Checkout API endpoint
- `.env.local` - Local environment variables (not in repo)
- `.env.example` - Template for environment variables

---

**Last Updated**: January 2025
**Maintained By**: Privacy Gecko Development Team
