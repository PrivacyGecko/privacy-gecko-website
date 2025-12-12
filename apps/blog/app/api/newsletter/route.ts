import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = subscribeSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email } = validation.data

    // Check if Resend is configured
    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'Newsletter service is not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // If audience ID is configured, add to audience
    if (audienceId) {
      try {
        await resend.contacts.create({
          email,
          audienceId,
          unsubscribed: false,
        })
      } catch (error: unknown) {
        // If contact already exists, that's fine
        const resendError = error as { statusCode?: number; message?: string }
        if (resendError.statusCode !== 409) {
          console.error('Error adding contact to audience:', error)
          throw error
        }
      }
    }

    // Send confirmation email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    await resend.emails.send({
      from: `Privacy Gecko <${fromEmail}>`,
      to: email,
      subject: 'Welcome to the Privacy Journal Newsletter',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #10B981;">Welcome to the Privacy Journal!</h1>
          <p>Thanks for subscribing to our newsletter. You'll receive:</p>
          <ul>
            <li>Privacy tips and best practices</li>
            <li>Product updates and new features</li>
            <li>Exclusive insights on staying safe online</li>
          </ul>
          <p>Stay private,<br>The Privacy Gecko Team</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px;">
            You're receiving this because you subscribed at privacygecko.com.
            <a href="https://privacygecko.com/unsubscribe">Unsubscribe</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter!',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
