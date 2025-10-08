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
