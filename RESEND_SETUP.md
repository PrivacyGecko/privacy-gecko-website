# Resend Email API Setup Guide

This guide will help you configure the Resend email service for the Privacy Gecko contact form and newsletter functionality.

## Why Resend?

- **Privacy-Friendly**: No tracking or data mining
- **Developer-First**: Simple, modern API
- **Free Tier**: 100 emails/day, 3,000 emails/month
- **Fast Setup**: Get started in minutes

## Step 1: Create a Resend Account

1. Visit [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Privacy Gecko Production")
5. Select permissions: **Full Access** or **Sending Access**
6. Click **Create**
7. Copy your API key (starts with `re_...`)
   - **Important**: Save this key securely - you won't be able to see it again!

## Step 3: Verify Your Domain (Production)

### For Production Use:

1. Go to **Domains** in the Resend dashboard
2. Click **Add Domain**
3. Enter your domain: `privacygecko.com`
4. Add the DNS records provided by Resend to your domain's DNS settings:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)
5. Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours)
6. Click **Verify Domain** in Resend

### For Testing/Development:

You can use Resend's test email address without domain verification:
- Use `onboarding@resend.dev` as the "from" address
- This is perfect for testing, but emails may go to spam

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and update the Resend variables:

   ```env
   # Required: Your Resend API key
   RESEND_API_KEY=re_your_actual_api_key_here

   # Required: Email to send FROM (must be verified domain)
   # For testing: onboarding@resend.dev
   # For production: contact@privacygecko.com
   RESEND_FROM_EMAIL=onboarding@resend.dev

   # Required: Email to RECEIVE contact form submissions
   RESEND_TO_EMAIL=your-email@example.com

   # Optional: Audience ID for newsletter (see Step 5)
   RESEND_AUDIENCE_ID=
   ```

3. Save the file

## Step 5: Create an Audience (Optional - For Newsletter)

If you want to manage newsletter subscribers in Resend:

1. Go to **Audiences** in the Resend dashboard
2. Click **Create Audience**
3. Give it a name: "Privacy Gecko Newsletter"
4. Click **Create**
5. Copy the Audience ID (starts with `aud_...`)
6. Add it to your `.env.local`:
   ```env
   RESEND_AUDIENCE_ID=aud_your_audience_id_here
   ```

**Note**: If you don't set an Audience ID, the newsletter subscription will still work - you'll just receive an email notification instead of having the subscriber added to a managed list.

## Step 6: Test Your Configuration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test the contact form at `http://localhost:3000/contact`
3. Check your email (the address in `RESEND_TO_EMAIL`) for the contact form submission
4. Test the newsletter signup on the blog page

## Step 7: Production Deployment

When deploying to production (e.g., Vercel):

1. Add the environment variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Add all `RESEND_*` variables from your `.env.local`

2. Make sure to use your verified domain email:
   ```env
   RESEND_FROM_EMAIL=contact@privacygecko.com
   ```

3. Deploy your application

## Troubleshooting

### Emails Not Sending

1. **Check API Key**: Ensure it's correct and starts with `re_`
2. **Check Domain**: Verify your domain is verified in Resend dashboard
3. **Check FROM Address**: Must be from your verified domain or `onboarding@resend.dev`
4. **Check Console**: Look for error messages in your server logs

### Emails Going to Spam

1. **Verify Domain**: Complete all DNS records (SPF, DKIM, DMARC)
2. **Warm Up**: Start with low volume and gradually increase
3. **Authentication**: Ensure SPF and DKIM are properly configured
4. **Content**: Avoid spam trigger words, use proper formatting

### API Rate Limits

Free tier limits:
- 100 emails per day
- 3,000 emails per month

If you exceed these, consider upgrading to a paid plan or implementing rate limiting in your application.

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore` by default
2. **Use different API keys** for development and production
3. **Rotate keys regularly** if they may have been exposed
4. **Monitor usage** in the Resend dashboard
5. **Implement rate limiting** on your API routes to prevent abuse

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Node.js SDK](https://resend.com/docs/send-with-nodejs)
- [Domain Verification Guide](https://resend.com/docs/dashboard/domains/introduction)
- [Resend Status Page](https://status.resend.com)

## Support

- **Resend Support**: support@resend.com
- **Privacy Gecko**: security@privacygecko.com

## Alternative Email Services

If you prefer not to use Resend, the codebase is designed to be email-service-agnostic. You can easily adapt the API routes to use:

- SendGrid
- Mailgun
- AWS SES
- Postmark
- Any SMTP service

Just modify `/app/api/contact/route.ts` and `/app/api/newsletter/route.ts` with your preferred service's SDK.
