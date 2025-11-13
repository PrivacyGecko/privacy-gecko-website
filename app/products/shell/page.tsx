"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Smartphone, Shield, Zap, Wallet, Eye, Globe, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoShellPage() {
  const product = getProductById("shell");

  if (!product) return null;

  const features = [
    {
      icon: Shield,
      title: "Automatic Tracker Blocking",
      description: "Browse privately with built-in tracker and ad blocking on both iOS and Android",
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Native apps for iOS and Android with seamless sync between devices",
    },
    {
      icon: Eye,
      title: "No Browsing History",
      description: "Your browsing history never leaves your device. We don't collect or store what you browse",
    },
    {
      icon: Wallet,
      title: "Built-In Solana Wallet",
      description: "Optional crypto wallet integration for Web3 browsing (completely optional feature)",
    },
    {
      icon: Zap,
      title: "Fast & Lightweight",
      description: "Optimized for mobile performance with minimal battery and data usage",
    },
    {
      icon: Lock,
      title: "Privacy-First Design",
      description: "No analytics, no data collection, no surveillance. Your privacy is the product",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Download App",
      description: "Install GeckoShell from App Store or Google Play",
    },
    {
      step: 2,
      title: "Browse Privately",
      description: "Start browsing immediately with automatic tracker blocking enabled",
    },
    {
      step: 3,
      title: "Optional Wallet",
      description: "Enable Solana wallet if you want Web3 features (completely optional)",
    },
    {
      step: 4,
      title: "Stay Protected",
      description: "Enjoy fast, private browsing on the go with AI-adaptive protection coming Q4 2025",
    },
  ];

  const faqs = [
    {
      question: "What makes GeckoShell different from Safari or Chrome?",
      answer: "GeckoShell is built privacy-first from the ground up. Unlike Safari and Chrome, we don't collect your browsing history, don't sync to cloud servers, and block trackers by default. No analytics, no data harvesting, no surveillance capitalism. Plus, optional Solana wallet integration for Web3 browsing.",
    },
    {
      question: "Is the Solana wallet required?",
      answer: "No! The built-in Solana wallet is 100% optional. GeckoShell works perfectly as a privacy browser without any crypto features. Enable the wallet only if you want to interact with Web3 dApps or manage crypto assets.",
    },
    {
      question: "How does GeckoShell use AI?",
      answer: "GeckoShell will gain AI capabilities in the future (post-Q4 2025) for adaptive content blocking and intelligent cache management. All AI processing happens locally on your device—no browsing data sent to the cloud. AI features will be available to free tier users with monthly limits, or unlimited for Pro subscribers. The browser works fully without any AI requirement.",
    },
    {
      question: "Which platforms does GeckoShell support?",
      answer: "GeckoShell is available for iOS (iPhone and iPad) and Android devices. We're focusing on mobile-first privacy since that's where most people browse today.",
    },
    {
      question: "Does GeckoShell slow down browsing?",
      answer: "No! By blocking ads and trackers, GeckoShell actually makes browsing faster and uses less data. Pages load quicker when you're not downloading tracking scripts and ad networks.",
    },
    {
      question: "Can I import bookmarks from other browsers?",
      answer: "Yes! You can import bookmarks from Safari, Chrome, Firefox, and other major browsers. Your bookmarks stay local on your device—we don't sync them to our servers unless you enable Pro tier cloud sync (encrypted).",
    },
  ];

  return (
    <>
      <Hero
        subtitle="GeckoShell"
        title="Private Mobile Browser with AI Protection"
        description="Browse privately on iOS and Android with automatic tracker blocking and built-in Solana wallet (optional). Fast, lightweight, and no browsing history collection."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#pricing" variant="primary" size="lg">
            Coming Soon
          </Button>
          <Badge variant="coming">Coming Q4 2025</Badge>
        </div>
      </Hero>

      {/* Development Status Banner */}
      <Section className="bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TimelineIndicator timeline="In Development" format="banner" />
          <p className="text-lg mt-4 text-gray-700">Development Progress: <strong>30%</strong></p>
          <p className="text-sm mt-2 text-gray-600">AI protection features planned for future release</p>
        </motion.div>
      </Section>

      {/* Features Grid */}
      <Section>
        <SectionHeader
          subtitle="Planned Features"
          title="Privacy-First Mobile Browsing"
          description="Everything you need for private browsing on iOS and Android"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Features Section - Future */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Core & AI-Enhanced Features</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  AI features planned for future release to enhance mobile privacy protection
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "Blocks trackers automatically",
                      "Available on iOS and Android",
                      "Built-in Solana wallet (optional)"
                    ]}
                    aiFeatures={product.ai.aiFeatures}
                    aiTimeline="Future Release"
                  />
                )}
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="How It Works"
          title="Private Mobile Browsing in 4 Simple Steps"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gecko-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing & Waitlist */}
      <Section id="pricing">
        <SectionHeader
          subtitle="Pricing"
          title="Join the Waitlist"
          description="Pricing will be announced at launch. Be first to know and secure early access."
        />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-gecko-green border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">Get Early Access</CardTitle>
                <CardDescription className="text-base mb-6">
                  GeckoShell launches Q4 2025 for iOS and Android. Join the waitlist to:
                </CardDescription>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Be notified when pricing is announced</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Get early access to beta testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lock in launch pricing for life</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access to exclusive founder updates</span>
                  </div>
                </div>
                <Button href="/waitlist" variant="primary" size="lg" className="w-full md:w-auto">
                  Join Waitlist (Free)
                </Button>
                <p className="text-xs text-gray-500 mt-4">
                  No credit card required. Just your email for launch notifications.
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-8 max-w-2xl mx-auto">
          <p className="text-sm text-gray-600">
            <strong>What we know:</strong> GeckoShell will have a free version (tracker blocking, private browsing) 
            and a Pro tier (advanced features, encrypted cloud sync, unlimited protection). Pricing details coming soon.
          </p>
          <p className="text-sm text-gray-600 mt-3">
            💎 <strong>Token Holders:</strong> $PRICKO holders will receive Pro tier benefits. Token integration is 100% optional.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription className="mt-2">{faq.answer}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready for Private Mobile Browsing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            GeckoShell launches Q4 2025 for iOS and Android. Be among the first to browse privately on mobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pricing" variant="primary" size="lg">
              Coming Soon
            </Button>
            <Button href="/products" variant="ghost" size="lg">
              Explore Other Tools
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
