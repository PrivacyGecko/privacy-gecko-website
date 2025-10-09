import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Input sanitization helper
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as ContactFormData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Validate length constraints
    if (sanitizedData.name.length < 2 || sanitizedData.name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      );
    }

    // Integrate with Resend email service
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'contact@privacygecko.com',
          to: process.env.RESEND_TO_EMAIL || 'support@privacygecko.com',
          replyTo: sanitizedData.email,
          subject: `Contact Form: ${sanitizedData.subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #10B981; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: 600; color: #1F2937; }
                  .value { color: #4B5563; }
                  .message-box { background: white; padding: 15px; border-radius: 6px; margin-top: 10px; white-space: pre-wrap; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2 style="margin: 0;">🦎 New Contact Form Submission</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">From:</div>
                      <div class="value">${sanitizedData.name}</div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                    </div>
                    <div class="field">
                      <div class="label">Subject:</div>
                      <div class="value">${sanitizedData.subject}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message:</div>
                      <div class="message-box">${sanitizedData.message}</div>
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6B7280;">
                      <p>Submitted: ${new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send contact email via Resend:', emailError);
        // Log for server-side tracking as fallback
        console.log('Contact form submission (email failed):', {
          name: sanitizedData.name,
          email: sanitizedData.email,
          subject: sanitizedData.subject,
          messageLength: sanitizedData.message.length,
          timestamp: new Date().toISOString(),
        });
      }
    } else {
      // Log the submission for server-side tracking when API key not configured
      console.log('Contact form submission received (no email service):', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        messageLength: sanitizedData.message.length,
        timestamp: new Date().toISOString(),
      });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We have received your inquiry and will respond within 24-48 hours.',
      // Provide mailto fallback for immediate contact if needed
      mailtoLink: `mailto:support@privacygecko.com?subject=${encodeURIComponent(sanitizedData.subject)}&body=${encodeURIComponent(`From: ${sanitizedData.name} (${sanitizedData.email})\n\n${sanitizedData.message}`)}`,
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again or email us directly at support@privacygecko.com' },
      { status: 500 }
    );
  }
}
