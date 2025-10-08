import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";

export default function TermsPage() {
  return (
    <>
      <Hero
        subtitle="Legal"
        title="Terms of Service"
        description="Last updated: January 2025"
      />
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Privacy Gecko services, you accept and agree to be bound by these Terms of Service.
            If you do not agree, please do not use our services.
          </p>

          <h2>Description of Service</h2>
          <p>
            Privacy Gecko provides a suite of privacy-focused tools including device auditing, encrypted file sharing,
            tracker blocking, and other privacy protection services. We offer both free and paid (Pro) tiers.
          </p>

          <h2>User Accounts</h2>
          <p>When creating an account, you agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain the security of your account</li>
            <li>Notify us of any unauthorized access</li>
            <li>Be responsible for all activities under your account</li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for illegal activities</li>
            <li>Attempt to breach our security measures</li>
            <li>Share copyrighted content without authorization through GeckoShare</li>
            <li>Abuse or spam our services</li>
            <li>Reverse engineer our software</li>
          </ul>

          <h2>Paid Services</h2>
          <p>For Pro subscriptions:</p>
          <ul>
            <li>Billing is monthly or annual as selected</li>
            <li>Subscriptions auto-renew unless cancelled</li>
            <li>Refunds are available within 30 days</li>
            <li>We may change pricing with 30 days notice</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            While our software is open source, our branding, trademarks, and content remain our property.
            You may use our open source code according to the license terms in each repository.
          </p>

          <h2>Disclaimers</h2>
          <p>
            Our services are provided "as is" without warranties. While we strive for reliability,
            we cannot guarantee uninterrupted service or complete protection from all privacy threats.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Privacy Gecko is not liable for indirect, incidental, or consequential damages arising from
            your use of our services.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms.
            You may cancel your account at any time.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these terms. Continued use of our services after changes constitutes acceptance
            of the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at:{" "}
            <a href="mailto:legal@privacygecko.com">legal@privacygecko.com</a>
          </p>
        </div>
      </Section>
    </>
  );
}
