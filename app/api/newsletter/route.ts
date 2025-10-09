import { NextRequest, NextResponse } from 'next/server';

interface NewsletterData {
  email: string;
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Input sanitization helper
function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as NewsletterData;

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedEmail = sanitizeEmail(email);

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate email length
    if (sanitizedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Email address is too long' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email marketing service (Mailchimp, ConvertKit, Resend, etc.)
    // For now, log the subscription for server-side tracking
    console.log('Newsletter subscription received:', {
      email: sanitizedEmail,
      timestamp: new Date().toISOString(),
      source: 'blog_page',
    });

    // In a production environment with email service, you would do:
    /*
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: sanitizedEmail,
        status: 'subscribed',
        tags: ['website_signup'],
      });
    }

    // OR with ConvertKit:
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email: sanitizedEmail,
        }),
      });
    }

    // OR with Resend:
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.contacts.create({
        email: sanitizedEmail,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    }
    */

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
    });
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
