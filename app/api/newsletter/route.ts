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

    // Integrate with Resend for newsletter subscriptions
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Add contact to audience if audience ID is configured
        if (process.env.RESEND_AUDIENCE_ID) {
          await resend.contacts.create({
            email: sanitizedEmail,
            audienceId: process.env.RESEND_AUDIENCE_ID,
          });
        }

        // Send welcome email
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'newsletter@privacygecko.com',
          to: sanitizedEmail,
          subject: 'Welcome to Privacy Gecko Newsletter',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                  .container { max-width: 600px; margin: 0 auto; }
                  .header { background: #10B981; color: white; padding: 40px 20px; text-align: center; }
                  .logo { font-size: 48px; margin-bottom: 10px; }
                  .content { padding: 40px 20px; background: #ffffff; }
                  .footer { background: #f9fafb; padding: 30px 20px; text-align: center; font-size: 14px; color: #6B7280; }
                  .button { display: inline-block; background: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: 600; }
                  .feature { background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10B981; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <div class="logo">🦎</div>
                    <h1 style="margin: 0; font-size: 28px;">Welcome to Privacy Gecko!</h1>
                  </div>
                  <div class="content">
                    <h2>Thank you for subscribing!</h2>
                    <p>You're now part of a growing community of privacy-conscious individuals who believe that digital privacy should be accessible to everyone.</p>

                    <div class="feature">
                      <strong>What to expect:</strong>
                      <ul style="margin: 10px 0;">
                        <li>Privacy tips and best practices</li>
                        <li>Updates on our privacy tools</li>
                        <li>Product launch announcements</li>
                        <li>No spam, no tracking, no data selling</li>
                      </ul>
                    </div>

                    <p>In the meantime, check out our suite of privacy tools:</p>
                    <div style="text-align: center;">
                      <a href="https://privacygecko.com/products" class="button">Explore Privacy Tools</a>
                    </div>

                    <p style="margin-top: 30px;">Questions or feedback? Just reply to this email - we'd love to hear from you!</p>

                    <p style="margin-top: 20px; color: #6B7280;">
                      <strong>Privacy Promise:</strong> We respect your inbox and your privacy. We'll never share your email with third parties or send you spam.
                    </p>
                  </div>
                  <div class="footer">
                    <p><strong>Privacy Gecko</strong> - Privacy Tools That Actually Work</p>
                    <p style="margin: 10px 0;">
                      <a href="https://privacygecko.com" style="color: #10B981; text-decoration: none;">Website</a> |
                      <a href="https://twitter.com/privacygecko" style="color: #10B981; text-decoration: none;">Twitter</a> |
                      <a href="https://privacygecko.com/legal/privacy" style="color: #10B981; text-decoration: none;">Privacy Policy</a>
                    </p>
                    <p style="font-size: 12px; color: #9CA3AF;">
                      You received this email because you subscribed to our newsletter at privacygecko.com
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        // Also notify admin about new subscription
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'newsletter@privacygecko.com',
          to: process.env.RESEND_TO_EMAIL || 'support@privacygecko.com',
          subject: 'New Newsletter Subscription',
          html: `
            <p><strong>New subscriber:</strong> ${sanitizedEmail}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Website newsletter form</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to process newsletter subscription via Resend:', emailError);
        // Log for server-side tracking as fallback
        console.log('Newsletter subscription (email failed):', {
          email: sanitizedEmail,
          timestamp: new Date().toISOString(),
          source: 'website',
          error: emailError instanceof Error ? emailError.message : 'Unknown error',
        });
      }
    } else {
      // Log the subscription for server-side tracking when API key not configured
      console.log('Newsletter subscription received (no email service):', {
        email: sanitizedEmail,
        timestamp: new Date().toISOString(),
        source: 'website',
      });
    }

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
