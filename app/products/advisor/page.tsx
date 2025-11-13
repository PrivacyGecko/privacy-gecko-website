"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList } from "@/components/ai";
import { CheckCircle, Shield, Activity, AlertTriangle, FileText, Bell, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoAdvisorPage() {
  const product = getProductById("advisor");

  if (!product) return null;

  const features = [
    {
      icon: Shield,
      title: "Privacy Policy Analysis",
      description: "Comprehensive scan of website privacy policies to identify hidden trackers and compliance issues",
    },
    {
      icon: Activity,
      title: "Privacy Score",
      description: "Get a clear privacy score from 0-100 with detailed breakdown of your privacy posture",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Detection",
      description: "Identify outdated software, weak configurations, and potential security holes",
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Receive comprehensive reports with actionable recommendations to improve your privacy",
    },
    {
      icon: Bell,
      title: "Priority Alerts",
      description: "Get notified about critical privacy threats and emerging security issues",
    },
    {
      icon: TrendingUp,
      title: "Historical Tracking",
      description: "Monitor your privacy improvements over time with historical trend analysis",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Enter URL",
      description: "Enter any website URL and GeckoAdvisor will analyze its privacy policy in under 60 seconds",
    },
    {
      step: 2,
      title: "Review Score",
      description: "See the website's privacy score and understand which tracking practices they use",
    },
    {
      step: 3,
      title: "Take Action",
      description: "Follow our step-by-step recommendations to protect yourself from tracking",
    },
    {
      step: 4,
      title: "Stay Protected",
      description: "Regular scans ensure you know how websites track you as policies change",
    },
  ];

  const faqs = [
    {
      question: "How does GeckoAdvisor scan websites?",
      answer: "GeckoAdvisor analyzes website privacy policies, terms of service, and cookie declarations to identify hidden trackers, data collection practices, and compliance issues. We never access your personal data - we only scan public website documents.",
    },
    {
      question: "What's included in the free tier?",
      answer: "The free tier includes 3 website scans per month with basic privacy reports, tracker detection, and a privacy score. You'll get fundamental recommendations about what each website tracks.",
    },
    {
      question: "How does GeckoAdvisor use AI?",
      answer: "GeckoAdvisor will gain AI capabilities in Q4 2025 that analyze privacy policies in plain language, detect patterns across policies, and provide intelligent risk scoring. All AI processing happens on our secure servers with no personal data involved. AI features will be available to free tier users with monthly limits, or unlimited for Pro subscribers. The core privacy scanning works fully without any AI requirement.",
    },
    {
      question: "How is my data protected?",
      answer: "GeckoAdvisor only scans public website privacy policies - we never access your personal data. We store anonymized scan results to improve our recommendations. Working toward full code transparency after comprehensive security audits.",
    },
    {
      question: "Can I scan multiple websites?",
      answer: "Yes! Pro users can scan unlimited websites and track privacy policy changes over time for their favorite sites.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="GeckoAdvisor"
        title="Scan Website Privacy Policies for Hidden Trackers - AI-Powered Analysis Coming Q4 2025"
        description={product.description}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="https://geckoadvisor.com" variant="primary" size="lg">
            Join Beta →
          </Button>
          <Badge variant="beta">Beta Testing</Badge>
        </div>
      </Hero>

      {/* Beta Status Banner */}
      <Section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Bell className="w-5 h-5" />
            <h3 className="text-xl font-bold">Currently in Beta Testing</h3>
          </div>
          <p className="text-blue-100 mb-4">
            GeckoAdvisor is in active beta with limited spots available. Early beta users get lifetime discounted pricing and help shape the product.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free forever tier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Beta pricing: $4.99/mo (vs $9.99 at launch)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No payment required during beta</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Features Grid with AI */}
      <Section>
        <SectionHeader
          subtitle="Features"
          title="Everything You Need to Know Your Privacy Score"
          description="Comprehensive privacy auditing with actionable insights"
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

        {/* AI Features Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Current & AI-Enhanced Features</CardTitle>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "Website privacy policy analysis & tracker detection",
                      "Privacy score & compliance checking",
                      "GDPR/CCPA compliance & actionable recommendations"
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
          title="Get Your Privacy Score in 4 Simple Steps"
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

      {/* Pricing */}
      <Section id="pricing">
        <SectionHeader
          subtitle="Beta Pricing"
          title="Limited Time Beta Pricing"
          description="Lock in discounted pricing as an early adopter. No payment required during beta."
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
                <Button href="https://geckoadvisor.com" variant="outline" className="w-full mb-6">
                  Try Beta →
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
                <CardDescription className="mb-6">Unlimited scans, advanced features</CardDescription>
                <Button href="https://geckoadvisor.com" variant="primary" className="w-full mb-6">
                  Join Beta →
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
            Ready to Join the Beta?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Limited beta access available. Start with 3 free scans per month. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://geckoadvisor.com" variant="primary" size="lg">
              Join Beta →
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
