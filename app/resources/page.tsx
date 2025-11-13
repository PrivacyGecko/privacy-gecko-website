"use client";

import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  return (
    <>
      <Hero
        subtitle="Resources"
        title="Resources"
        description="Everything you need to maximize your privacy protection and get the most out of Privacy Gecko"
      />

      {/* Quick Links Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/roadmap#ai-development" className="block h-full">
              <Card className="h-full bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">🤖</div>
                  <CardTitle>AI Development Roadmap</CardTitle>
                  <CardDescription>See how we're building privacy-first AI</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/roadmap" className="block h-full">
              <Card className="h-full bg-gradient-to-br from-green-50 to-blue-50 border-green-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">📦</div>
                  <CardTitle>Product Roadmap</CardTitle>
                  <CardDescription>Track our 8-product ecosystem development</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://pricko.com" target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">💎</div>
                  <CardTitle>$PRICKO Token</CardTitle>
                  <CardDescription>Learn about our community token economy</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Documentation Category */}
      <Section className="bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">📖</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Documentation</h2>
              <p className="text-gray-600">Comprehensive guides for all Privacy Gecko products</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  GeckoGuard
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>AI-adaptive ad blocker docs</CardDescription>
              </CardHeader>
            </Card>

            <Link href="https://geckolock.com" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">GeckoLock</CardTitle>
                  <CardDescription>Password manager documentation</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  GeckoView
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>AI reading assistant guide</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  GeckoWatch
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Privacy compliance monitor docs</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  GeckoShell
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Private browser documentation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  Gecko VPN
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>VPN setup and usage guide</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* AI Resources Category */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">🤖</div>
            <div>
              <h2 className="text-3xl font-display font-bold">AI Resources</h2>
              <p className="text-gray-600">Learn about our privacy-first AI development</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roadmap#ai-development">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">AI Development Roadmap</CardTitle>
                  <CardDescription>Transparent timeline from foundation to community AI</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  How Our AI Works
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Technical deep dive into local processing & federated learning</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  AI Architecture Whitepaper
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Detailed technical documentation of our AI systems</CardDescription>
              </CardHeader>
            </Card>

            <Link href="/contact?subject=AI%20Beta">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Join AI Beta Program</CardTitle>
                  <CardDescription>Get early access to AI features before public launch</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </Section>

      {/* Token & Ecosystem Category */}
      <Section className="bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">💎</div>
            <div>
              <h2 className="text-3xl font-display font-bold">Token & Ecosystem</h2>
              <p className="text-gray-600">Understanding the $PRICKO token economy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://pricko.com" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">$PRICKO Token Website</CardTitle>
                  <CardDescription>Complete token information and whitelist signup</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="https://pricko.com#tokenomics" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Tokenomics</CardTitle>
                  <CardDescription>Distribution, utility, and deflationary mechanics</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="https://pricko.com#benefits" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Token Holder Benefits</CardTitle>
                  <CardDescription>Unlock Pro features, staking rewards, and governance</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <Link href="/roadmap">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Ecosystem Roadmap</CardTitle>
                  <CardDescription>8-product development timeline and milestones</CardDescription>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/blog">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Why Privacy Tools Matter</CardTitle>
                  <CardDescription>Understanding digital privacy in 2025</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  Understanding Tracker Blocking
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>How web tracking works and how to stop it</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  Zero-Knowledge Encryption
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>What it means when we say we can't see your data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  Reading Privacy Policies
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Red flags to watch for in privacy policies</CardDescription>
              </CardHeader>
            </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://discord.gg/privacygecko" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Discord Community</CardTitle>
                  <CardDescription>Chat with the team and other privacy advocates</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="https://t.me/privacygecko" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Telegram Channel</CardTitle>
                  <CardDescription>Get updates and join discussions</CardDescription>
                </CardHeader>
              </Card>
            </a>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

            <Card className="h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  System Status
                  <Badge variant="coming" className="text-xs">Coming Soon</Badge>
                </CardTitle>
                <CardDescription>Check if all services are operational</CardDescription>
              </CardHeader>
            </Card>

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
