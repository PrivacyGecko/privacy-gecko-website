import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        subtitle="Legal"
        title="Privacy Policy"
        description="Last updated: January 2025"
      />
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            Privacy Gecko ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and protect your information when you use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            When you use our services, we may collect:
          </p>
          <ul>
            <li>Email address (for account creation and communication)</li>
            <li>Name (optional, for personalization)</li>
            <li>Payment information (processed securely through Stripe)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            We collect minimal anonymized usage statistics through Plausible Analytics, a privacy-friendly analytics service:
          </p>
          <ul>
            <li>Page views and navigation patterns (no personal identifiers)</li>
            <li>Device type and browser (aggregated, not linked to you)</li>
            <li>Geographic location (country-level only)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send important service updates</li>
            <li>Respond to support requests</li>
          </ul>

          <h2>Data Retention & Deletion</h2>
          <h3>Account Data</h3>
          <ul>
            <li><strong>Email addresses:</strong> Retained while account is active + 30 days after deletion request</li>
            <li><strong>Payment information:</strong> Never stored by us (processed by Stripe per their retention policy)</li>
            <li><strong>Usage statistics:</strong> Anonymized via Plausible, retained 24 months maximum</li>
          </ul>

          <h3>Contact Form Submissions</h3>
          <ul>
            <li><strong>Contact messages:</strong> Retained for 90 days to provide support, then permanently deleted</li>
            <li><strong>Email addresses from contact form:</strong> Deleted with message after 90 days</li>
          </ul>

          <h3>Product-Specific Retention</h3>

          <h4>GeckoShare Files</h4>
          <ul>
            <li><strong>Encrypted files:</strong> Deleted immediately upon expiration (24hr free tier, custom for Pro)</li>
            <li><strong>Access logs:</strong> Retained 7 days for abuse prevention, then permanently deleted</li>
            <li><strong>File metadata:</strong> Deleted with file</li>
          </ul>

          <h4>GeckoAdvisor Scans</h4>
          <ul>
            <li><strong>Scan results:</strong> Stored locally on your device only</li>
            <li><strong>Anonymized scan metadata:</strong> Retained 90 days to improve recommendations</li>
            <li><strong>Raw scan data:</strong> Never uploaded to our servers</li>
          </ul>

          <h3>Data Deletion Requests</h3>
          <p>
            Request deletion at <a href="mailto:privacy@privacygecko.com">privacy@privacygecko.com</a>. We will:
          </p>
          <ol>
            <li>Confirm your identity (to prevent abuse)</li>
            <li>Delete all associated data within 30 days</li>
            <li>Provide confirmation email upon completion</li>
          </ol>

          <h3>Data Storage Location</h3>
          <ul>
            <li><strong>Primary servers:</strong> Hosted by Vercel (US-based, GDPR-compliant)</li>
            <li><strong>Analytics:</strong> Plausible Analytics (EU-based)</li>
            <li><strong>Payments:</strong> Stripe (US-based, Privacy Shield certified)</li>
          </ul>

          <h2>What We Don't Do</h2>
          <p>We will never:</p>
          <ul>
            <li>Sell your personal data to third parties</li>
            <li>Use tracking cookies or fingerprinting</li>
            <li>Share your data with advertisers</li>
            <li>Use your data for purposes beyond providing our services</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. All sensitive data is encrypted in transit and at rest.
            Products like GeckoShare use end-to-end encryption, meaning we cannot access your files even if we wanted to.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at:{" "}
            <a href="mailto:privacy@privacygecko.com">privacy@privacygecko.com</a>
          </p>
        </div>
      </Section>
    </>
  );
}
