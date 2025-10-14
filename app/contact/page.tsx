import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Mail, Send, HelpCircle } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import dynamic from "next/dynamic";

// Import ContactForm with SSR disabled to prevent hydration errors
const ContactForm = dynamic(() => import("@/components/ContactForm").then((mod) => ({ default: mod.ContactForm })), {
  ssr: false,
  loading: () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl mb-6">Loading contact form...</CardTitle>
      </CardHeader>
    </Card>
  ),
});

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Have questions? Want to collaborate? We'd love to hear from you."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Mail className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a href="mailto:support@privacygecko.com" className="text-gecko-green hover:underline">
                    support@privacygecko.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Send className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Social</CardTitle>
                <CardDescription className="space-y-2">
                  <div>
                    <ExternalLink
                      href="https://twitter.com/privacygecko"
                      className="text-gecko-green hover:underline"
                    >
                      Twitter
                    </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      href="https://t.me/privacygecko"
                      className="text-gecko-green hover:underline"
                    >
                      Telegram
                    </ExternalLink>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <HelpCircle className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  Check our{" "}
                  <a href="/resources/faq" className="text-gecko-green hover:underline">
                    FAQ page
                  </a>{" "}
                  for quick answers to common questions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
