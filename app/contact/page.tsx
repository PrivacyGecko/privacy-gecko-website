"use client";

import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Mail, Send, HelpCircle } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Have questions? Want to collaborate? We'd love to hear from you."
      />

      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="text-center p-8">Loading form...</div>}>
              <ContactForm />
            </Suspense>
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
              </CardHeader>
              <CardContent className="space-y-2 -mt-2 text-sm text-gray-600">
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
              </CardContent>
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
