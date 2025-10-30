"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Eye, Activity, Filter, Cookie, Fingerprint, RefreshCw, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoGuardPage() {
  const product = getProductById("guard");

  if (!product) return null;

  const features = [
    {
      icon: Eye,
      title: "Real-Time Blocking",
      description: "Block trackers and ads in real-time as you browse with zero performance impact",
    },
    {
      icon: Activity,
      title: "Privacy Dashboard",
      description: "See detailed statistics about blocked trackers, ads, and cookies across all sites",
    },
    {
      icon: Filter,
      title: "Custom Filters",
      description: "Create your own filter lists or import community-maintained blocking rules",
    },
    {
      icon: Cookie,
      title: "Cookie Management",
      description: "Automatically block third-party cookies and manage cookie permissions per site",
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Protection",
      description: "Prevent browser fingerprinting techniques used to track you across the web",
    },
    {
      icon: RefreshCw,
      title: "Cross-Device Sync",
      description: "Sync your settings, whitelist, and filters across all your devices with Pro",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Install Extension",
      description: "Add GeckoGuard to Chrome, Firefox, Safari, or Edge in seconds",
    },
    {
      step: 2,
      title: "Start Browsing",
      description: "GeckoGuard automatically blocks trackers and ads without any setup",
    },
    {
      step: 3,
      title: "Customize Rules",
      description: "Fine-tune your protection with custom filters and whitelisting",
    },
    {
      step: 4,
      title: "Monitor Stats",
      description: "Check your privacy dashboard to see what's being blocked",
    },
  ];

  const faqs = [
    {
      question: "Which browsers does GeckoGuard support?",
      answer: "GeckoGuard is available for Chrome, Firefox, Safari, Edge, and all Chromium-based browsers. It works on desktop and mobile where browser extensions are supported.",
    },
    {
      question: "Will GeckoGuard slow down my browsing?",
      answer: "No! GeckoGuard is optimized for performance. By blocking ads and trackers, most users actually experience faster page loads and reduced data usage.",
    },
    {
      question: "How does GeckoGuard use AI?",
      answer: "GeckoGuard browser extension launches soon with traditional blocking (currently 90% complete). AI features will be added in Q4 2025 via automatic update. AI will learn new tracking patterns in real-time and adapt blocking to your browsing style without needing constant filter list updates. All AI processing happens locally in your browser—no data sent to the cloud. AI features are included in both free and Pro tiers. GeckoGuard works fully with traditional filter lists if you prefer to disable AI.",
    },
    {
      question: "How is GeckoGuard different from other ad blockers?",
      answer: "GeckoGuard focuses on privacy-first blocking with AI-adaptive protection (AI coming Q4 2025). We block trackers even if they don't show ads, protect against fingerprinting, and have no acceptable ads program. Our AI will learn new threats automatically without waiting for filter list updates. We're committed to transparency.",
    },
    {
      question: "Can I whitelist certain websites?",
      answer: "Absolutely! You can whitelist trusted sites with one click, and Pro users get advanced whitelisting options including temporary bypasses and category-specific exceptions.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="GeckoGuard"
        title="Block Trackers Before They See You - AI-Adaptive Protection (Coming Q4 2025)"
        description="Stop websites from following you across the internet with AI-powered, self-learning tracker blocking that will adapt to new threats in real-time (AI launching Q4 2025)"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contact?subject=GeckoGuard%20Waitlist" variant="primary" size="lg">
            Join Waitlist
          </Button>
          <Badge variant="coming">In Web Store Review (90% Complete)</Badge>
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
          <TimelineIndicator timeline="In Web Store Review" format="banner" />
          <p className="text-lg mt-4 text-gray-700">Development Progress: <strong>90%</strong></p>
          <p className="text-sm mt-2 text-gray-600">AI-powered tracker blocking available at launch</p>
        </motion.div>
      </Section>

      {/* Features Grid */}
      <Section>
        <SectionHeader
          subtitle="Features"
          title="Complete Privacy Protection While Browsing"
          description="Block trackers, ads, and fingerprinting with AI-adaptive, self-learning protection"
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

        {/* AI Features Section - Launch Feature */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50/50 to-blue-50/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🤖</span>
                  <CardTitle className="text-2xl">AI-Powered from Day One</CardTitle>
                </div>
                <p className="text-gray-700 mb-4">
                  GeckoGuard launches with AI capabilities built-in. This is what makes it different from traditional ad blockers.
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "Real-time tracker & ad blocking",
                      "Privacy dashboard & statistics",
                      "Custom filter lists"
                    ]}
                    aiFeatures={product.ai.aiFeatures}
                    aiTimeline="Q4 2025"
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
          title="Browse Privately in 4 Simple Steps"
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

      {/* Benefits Section - Replaced unverified stats with real benefits */}
      <Section>
        <SectionHeader
          title="Making the Web Faster and More Private"
          description="Real benefits of privacy-first browsing"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Eye className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Block Trackers</CardTitle>
                <CardDescription>
                  Automatically blocks third-party trackers, analytics scripts, and invisible pixels that follow you across the web
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Faster Browsing</CardTitle>
                <CardDescription>
                  Pages load faster when ads and trackers are blocked. Less data downloaded means better performance and lower bandwidth usage
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Privacy Protection</CardTitle>
                <CardDescription>
                  Prevents fingerprinting, blocks malicious scripts, and protects against common web-based tracking techniques
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-neutral-100">
        <SectionHeader
          subtitle="Pricing"
          title="Choose Your Plan"
          description="Start free, upgrade when you need more"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <div className="text-3xl font-bold mb-4">$0<span className="text-lg text-gray-500 font-normal">/month</span></div>
                <CardDescription className="mb-6">{product.pricing.free.limit}</CardDescription>
                <Button href="/contact?subject=GeckoGuard%20Waitlist" variant="outline" className="w-full mb-6">
                  Join Waitlist (Free)
                </Button>
                <div className="space-y-3">
                  {product.pricing.free.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-gecko-green border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <Badge variant="live">Popular</Badge>
                </div>
                <div className="text-3xl font-bold mb-4">
                  {product.pricing.pro.price.split('/')[0]}
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <CardDescription className="mb-6">Advanced features and device sync</CardDescription>
                <Button href="/contact?subject=GeckoGuard%20Pro%20Waitlist" variant="primary" className="w-full mb-6">
                  Join Waitlist (Pro)
                </Button>
                <div className="space-y-3">
                  {product.pricing.pro.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
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
      <Section className="bg-neutral-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Browse Without Being Tracked?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            GeckoGuard is currently in Chrome/Firefox web store review. Be among the first to protect your privacy when it launches soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?subject=GeckoGuard%20Waitlist" variant="primary" size="lg">
              Join Waitlist
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
