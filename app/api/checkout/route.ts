import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

// Stripe Price IDs - Replace with your actual Price IDs from Stripe Dashboard
const PRICE_IDS = {
  advisor_pro_monthly: 'price_advisor_pro_monthly', // Replace with actual Stripe Price ID
  share_pro_monthly: 'price_share_pro_monthly',
  guard_pro_monthly: 'price_guard_pro_monthly',
  bundle_monthly: 'price_bundle_monthly',
  bundle_yearly: 'price_bundle_yearly',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceId, productName, returnUrl } = body;

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
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
