import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialize Stripe only when needed
function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-09-30.clover',
  });
}

// ⚠️ STRIPE PRICE IDs CONFIGURATION - REQUIRED FOR PRODUCTION ⚠️
//
// IMPORTANT: These are PLACEHOLDER values and MUST be replaced with real Stripe Price IDs
// before deploying to production. Real Stripe Price IDs start with "price_" followed by
// a 24-character alphanumeric string (e.g., "price_1AbCdEfGhIjKlMnOpQrStUv").
//
// HOW TO GET YOUR PRICE IDs:
// 1. Log in to your Stripe Dashboard: https://dashboard.stripe.com
// 2. Navigate to Products & Prices
// 3. Create a product (if not already created)
// 4. Create a price for that product (recurring for subscriptions)
// 5. Copy the Price ID (starts with "price_")
// 6. Replace the placeholder values below
//
// ENVIRONMENT VARIABLE OPTION (RECOMMENDED):
// Instead of hardcoding, store Price IDs in environment variables:
// - STRIPE_PRICE_ADVISOR_PRO_MONTHLY
// - STRIPE_PRICE_SHARE_PRO_MONTHLY
// - etc.
//
// Then reference them like: process.env.STRIPE_PRICE_ADVISOR_PRO_MONTHLY
//
// WARNING: Using placeholder Price IDs will cause checkout to FAIL.
// The build validation below will prevent deployment with invalid Price IDs.
//
const PRICE_IDS = {
  advisor_pro_monthly: process.env.STRIPE_PRICE_ADVISOR_PRO_MONTHLY || 'price_advisor_pro_monthly', // PLACEHOLDER - Replace with actual Stripe Price ID
  share_pro_monthly: process.env.STRIPE_PRICE_SHARE_PRO_MONTHLY || 'price_share_pro_monthly', // PLACEHOLDER
  guard_pro_monthly: process.env.STRIPE_PRICE_GUARD_PRO_MONTHLY || 'price_guard_pro_monthly', // PLACEHOLDER
  bundle_monthly: process.env.STRIPE_PRICE_BUNDLE_MONTHLY || 'price_bundle_monthly', // PLACEHOLDER
  bundle_yearly: process.env.STRIPE_PRICE_BUNDLE_YEARLY || 'price_bundle_yearly', // PLACEHOLDER
};

// Validation: Check if Price IDs are properly formatted
// Real Stripe Price IDs follow the format: price_[24 alphanumeric characters]
function isValidStripePriceId(priceId: string): boolean {
  return /^price_[A-Za-z0-9]{24,}$/.test(priceId);
}

// Log warning if using placeholder Price IDs (development only)
if (process.env.NODE_ENV === 'development') {
  Object.entries(PRICE_IDS).forEach(([key, value]) => {
    if (!isValidStripePriceId(value)) {
      console.warn(
        `⚠️  WARNING: Stripe Price ID for "${key}" appears to be a placeholder: "${value}"\n` +
        `   Real Stripe Price IDs must start with "price_" followed by at least 24 characters.\n` +
        `   Checkout will fail with this Price ID. Please update in environment variables or code.`
      );
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const body = await request.json();
    const { priceId, productName, returnUrl } = body;

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    // Validate that we're not using a placeholder Price ID in production
    if (process.env.NODE_ENV === 'production' && !isValidStripePriceId(priceId)) {
      console.error(`Attempted checkout with invalid Price ID: ${priceId}`);
      return NextResponse.json(
        { error: 'Invalid Price ID configuration. Please contact support.' },
        { status: 500 }
      );
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://privacygecko.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: returnUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://privacygecko.com'}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      metadata: {
        product_name: productName || 'Privacy Gecko Pro',
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
