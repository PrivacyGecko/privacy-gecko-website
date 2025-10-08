import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";

export default function CookiePolicyPage() {
  return (
    <>
      <Hero
        subtitle="Legal"
        title="Cookie Policy"
        description="Last updated: January 2025"
      />
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Our Approach to Cookies</h2>
          <p>
            Privacy Gecko is committed to minimal data collection. Unlike most websites, we do NOT use:
          </p>
          <ul>
            <li>Tracking cookies</li>
            <li>Advertising cookies</li>
            <li>Third-party analytics cookies (like Google Analytics)</li>
            <li>Social media tracking pixels</li>
          </ul>

          <h2>What We Do Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            We use strictly necessary cookies required for our website to function:
          </p>
          <ul>
            <li><strong>Session cookies</strong>: To keep you logged in</li>
            <li><strong>Security cookies</strong>: To protect against CSRF attacks</li>
            <li><strong>Preference cookies</strong>: To remember your settings (e.g., theme preference)</li>
          </ul>

          <h3>Privacy-Friendly Analytics</h3>
          <p>
            We use <a href="https://plausible.io" target="_blank" rel="noopener noreferrer">Plausible Analytics</a>,
            a privacy-focused, GDPR-compliant analytics service that:
          </p>
          <ul>
            <li>Does not use cookies</li>
            <li>Does not collect personal data</li>
            <li>Does not track you across websites</li>
            <li>Provides only aggregated, anonymous statistics</li>
          </ul>

          <h2>Payment Processing</h2>
          <p>
            When you make a payment, Stripe (our payment processor) may use cookies to process your transaction securely.
            These cookies are essential for payment processing and are governed by{" "}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>.
          </p>

          <h2>Your Choices</h2>
          <p>
            Since we don't use tracking cookies, there's nothing to opt out of! However, if you wish to disable
            even our essential cookies, you can do so in your browser settings. Note that this may affect
            site functionality (like staying logged in).
          </p>

          <h2>Third-Party Services</h2>
          <p>
            When you use certain features (like embedded videos or social sharing), those third-party services
            may set their own cookies. We minimize such integrations and clearly label them when present.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this policy if we introduce new features. Any changes will be posted on this page
            with an updated "Last updated" date.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have questions about our cookie policy, contact us at:{" "}
            <a href="mailto:privacy@privacygecko.com">privacy@privacygecko.com</a>
          </p>
        </div>
      </Section>
    </>
  );
}
