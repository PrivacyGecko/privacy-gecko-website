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

    // TODO: Integrate with email service (Resend, SendGrid, or similar)
    // For now, log the submission for server-side tracking
    console.log('Contact form submission received:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      messageLength: sanitizedData.message.length,
      timestamp: new Date().toISOString(),
    });

    // In a production environment with email service, you would do:
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'contact@privacygecko.com',
        to: 'support@privacygecko.com',
        subject: `Contact Form: ${sanitizedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${sanitizedData.name} (${sanitizedData.email})</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        `,
      });
    }
    */

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
