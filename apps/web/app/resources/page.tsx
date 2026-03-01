"use client";

import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  return (
    <>
      <Hero
        subtitle="Resources"
        title="Resources"
        description="Everything you need to maximize your privacy protection and get the most out of Privacy Gecko"
      />

      {/* Documentation Category */}
      <Section className="bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">📖</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Documentation</h2>
              <p className="text-gray-600">Comprehensive guides for Privacy Gecko products</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="https://geckoadvisor.com" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">GeckoAdvisor</CardTitle>
                  <CardDescription>Website privacy policy scanner documentation</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="https://geckoshare.com" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">GeckoShare</CardTitle>
                  <CardDescription>Encrypted file sharing guide</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </Section>

      {/* Privacy Guides Category */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">🔒</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Privacy Guides</h2>
              <p className="text-gray-600">Learn how to protect your digital privacy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Why Privacy Tools Matter</CardTitle>
                  <CardDescription>Understanding digital privacy and why it matters</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/security">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Security Practices</CardTitle>
                  <CardDescription>How we protect your data and maintain trust</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </Section>

      {/* Community Category */}
      <Section className="bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">👥</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Community</h2>
              <p className="text-gray-600">Join the Privacy Gecko community</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://twitter.com/privacygecko" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Twitter/X</CardTitle>
                  <CardDescription>Follow us for news and updates</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="https://github.com/privacygecko" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">GitHub</CardTitle>
                  <CardDescription>View our open source code and contribute</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </div>
      </Section>

      {/* Support Category */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">🛟</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Support</h2>
              <p className="text-gray-600">Get help when you need it</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/contact">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Support</CardTitle>
                  <CardDescription>Get in touch with our team</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/resources/faq">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">FAQ</CardTitle>
                  <CardDescription>Answers to common questions</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <a href="mailto:security@privacygecko.com">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Report Security Issue</CardTitle>
                  <CardDescription>Responsible disclosure program</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
