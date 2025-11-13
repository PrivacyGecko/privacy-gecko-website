"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Search, Shield, FileText, TrendingUp, AlertTriangle, BarChart, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoWatchPage() {
  const product = getProductById("watch");

  if (!product) return null;

  const features = [
    {
      icon: Shield,
      title: "GDPR Compliance Checking",
      description: "Automatically scan websites for GDPR, CCPA, and privacy regulation compliance",
    },
    {
      icon: Search,
      title: "Cookie & Tracker Analysis",
      description: "Identify all cookies, trackers, and third-party scripts running on any website",
    },
    {
      icon: FileText,
      title: "Privacy Policy Scanning",
      description: "Analyze privacy policies for red flags, contradictions, and compliance issues",
    },
    {
      icon: TrendingUp,
      title: "Continuous Monitoring",
      description: "Get alerts when websites change their privacy practices or add new trackers",
    },
    {
      icon: BarChart,
      title: "Competitor Analysis",
      description: "Compare privacy practices across multiple websites and generate benchmark reports",
    },
    {
      icon: Eye,
      title: "Detailed Reports",
      description: "Export comprehensive privacy audit reports in PDF or JSON format",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Enter URL",
      description: "Submit any website URL you want to analyze for privacy compliance",
    },
    {
      step: 2,
      title: "AI Scans Site",
      description: "GeckoWatch scans cookies, trackers, and privacy policies with AI analysis",
    },
    {
      step: 3,
      title: "Get Instant Report",
      description: "Receive detailed compliance report with actionable recommendations",
    },
    {
      step: 4,
      title: "Monitor Changes",
      description: "Pro users get continuous monitoring with alerts for privacy practice changes",
    },
  ];

  const faqs = [
    {
      question: "Who is GeckoWatch designed for?",
      answer: "GeckoWatch is for website owners, privacy professionals, compliance officers, and anyone who wants to understand website privacy practices. Whether you're auditing your own site or researching competitors, GeckoWatch provides detailed privacy insights.",
    },
    {
      question: "What privacy regulations does GeckoWatch check?",
      answer: "GeckoWatch checks for GDPR (EU), CCPA (California), LGPD (Brazil), and other major privacy regulations. We analyze cookie consent banners, privacy policies, data collection practices, and third-party integrations.",
    },
    {
      question: "How does GeckoWatch use AI?",
      answer: "GeckoWatch launches with AI capabilities built-in (Q4 2025) for continuous compliance monitoring and intelligent change detection. AI analyzes privacy policy changes, detects new trackers automatically, and scores compliance risk using ML models. All AI processing happens on our servers—your scanned sites are not stored permanently. AI features are included in both free tier (with limits) and Pro tier (unlimited).",
    },
    {
      question: "Can I monitor multiple websites?",
      answer: "Yes! Free tier allows 3 scans per month. Pro tier ($14.99/mo) includes unlimited scans, continuous monitoring for up to 10 websites, and API access for automated scanning.",
    },
    {
      question: "How accurate are the compliance reports?",
      answer: "GeckoWatch provides high-accuracy technical analysis of cookies, trackers, and privacy policies. However, legal compliance is complex and context-dependent. We recommend using GeckoWatch as a starting point and consulting with legal professionals for official compliance certification.",
    },
    {
      question: "Can I white-label reports for clients?",
      answer: "Yes! Pro tier includes white-label PDF reports with your branding. Perfect for agencies, consultants, and privacy professionals who audit client websites.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Gecko Watch"
        title="AI-Powered Website Privacy Scanner"
        description="Analyze and monitor privacy compliance of any website. Detect cookies, trackers, and GDPR violations with AI-powered continuous monitoring and intelligent change detection."
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
          <p className="text-lg mt-4 text-gray-700">Development Progress: <strong>55%</strong></p>
          <p className="text-sm mt-2 text-gray-600">AI compliance monitoring available at launch</p>
        </motion.div>
      </Section>

      {/* Features Grid */}
      <Section>
        <SectionHeader
          subtitle="Planned Features"
          title="Comprehensive Website Privacy Analysis"
          description="AI-powered compliance monitoring and intelligent change detection"
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
                  GeckoWatch launches with AI-powered compliance monitoring built-in. This is what makes it different from manual website audits.
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "GDPR compliance checking",
                      "Cookie & tracker analysis",
                      "Privacy policy scanning"
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
          title="Analyze Website Privacy in 4 Simple Steps"
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
                  Gecko Watch launches Q1 2026. Join the waitlist to:
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
                <Button href="/contact?subject=Early%20Adopter%20Waitlist" variant="primary" size="lg" className="w-full md:w-auto">
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
            <strong>What we know:</strong> Gecko Watch will have a free tier (basic compliance scanning) 
            and a Pro tier (continuous monitoring, competitor analysis, advanced features). Pricing details coming soon.
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
            Ready to Analyze Website Privacy?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            GeckoWatch launches Q4 2025 with AI-powered compliance monitoring. Be among the first to audit website privacy practices.
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
