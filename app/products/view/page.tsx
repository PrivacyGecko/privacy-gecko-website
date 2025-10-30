"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Sparkles, Lock, Smartphone, MessageSquare, FileText, Tags, Zap, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoViewPage() {
  const product = getProductById("view");

  if (!product) return null;

  const features = [
    {
      icon: Sparkles,
      title: "One-Click AI Summaries",
      description: "Instant insights from articles and blogs using GPT-3.5 (free) or GPT-4 (pro). Right-click any article to summarize.",
    },
    {
      icon: Lock,
      title: "Encrypted Bookmark Vault",
      description: "Your reading history stays private with end-to-end encryption. We can't read your vault—only you hold the keys.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Access",
      description: "Browser extension, mobile apps for iOS/Android, and web dashboard at view.privacygecko.com. Your vault syncs everywhere.",
    },
    {
      icon: MessageSquare,
      title: "Gecko Digest AI Assistant",
      description: "Chat with your saved content using AI. Search your knowledge base and get insights from everything you've saved.",
    },
    {
      icon: FileText,
      title: "Export & Share via IPFS",
      description: "Export summaries to PDF or share via decentralized IPFS storage. Pro users get self-sovereign data ownership.",
    },
    {
      icon: Tags,
      title: "Smart Organization",
      description: "Automatic tone analysis, smart tagging, and context-based categorization. Find content when you need it.",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Install & Browse",
      description: "Add the extension or download mobile app. Browse the web as usual.",
    },
    {
      step: 2,
      title: "Summarize Instantly",
      description: "Right-click any article or tap the icon for instant AI summaries. GPT processes securely.",
    },
    {
      step: 3,
      title: "Save to Encrypted Vault",
      description: "Summaries automatically save encrypted. Smart tags and tone analysis organize everything.",
    },
    {
      step: 4,
      title: "Access Anywhere",
      description: "Open your vault on any device. Chat with content using Gecko Digest AI assistant.",
    },
  ];

  const faqs = [
    {
      question: "How does AI summarization work with privacy?",
      answer: "Gecko View uses OpenAI's GPT-3.5 (free tier) and GPT-4 (Pro tier) APIs to generate summaries. When you summarize content, the article text is sent to OpenAI's secure API for processing. OpenAI does not train models on API data per their policy. Once summarized, your content is encrypted in your private vault using end-to-end encryption. We never sell your reading data, and your vault contents are encrypted so even we cannot read them.",
    },
    {
      question: "How does Gecko View use AI?",
      answer: "GeckoView is an AI-native product where AI is core to functionality from day 1 (launching Q4 2025). One-click AI summaries, intelligent content extraction, and privacy-preserving recommendations all run locally where possible. While summaries require OpenAI API calls, your vault stays encrypted end-to-end. This proves AI and privacy can coexist. AI features are included in both free tier (with limits) and Pro tier (unlimited).",
    },
    {
      question: "What's the difference between free and Pro tiers?",
      answer: "Free tier includes 10 summaries per day using GPT-3.5, local storage in your browser, and basic features. Pro tier ($9.99/mo OR free with 100K+ $PRICKO tokens) unlocks unlimited summaries, GPT-4 access for higher-quality insights, IPFS sync for decentralized storage, PDF exports, priority support, and cross-device sync via encrypted cloud storage. Both tiers include end-to-end encryption and full privacy protection.",
    },
    {
      question: "Why use Gecko View instead of regular bookmarks?",
      answer: "Browser bookmarks are just URLs—you save the link but forget why it mattered. Gecko View creates AI-generated summaries of the content, capturing the key insights so you can actually remember and find information later. Plus, it adds searchable text, tone analysis, smart tags, and cross-device sync. You're building a searchable knowledge base, not just a messy list of links. And unlike browser sync, your vault is end-to-end encrypted.",
    },
    {
      question: "How does the $PRICKO token benefit work?",
      answer: "Hold 100,000+ $PRICKO tokens in your wallet and get Pro tier features completely free—no monthly subscription needed. Token integration is 100% optional. All features work perfectly without any tokens. If you already hold $PRICKO for other Privacy Gecko tools, you get Gecko View Pro as a bonus. No staking required, just wallet verification.",
    },
    {
      question: "What happens to my data?",
      answer: "Your summaries and bookmarks are encrypted using end-to-end encryption (AES-256-GCM) before storage. Encryption keys are derived from your account credentials and never touch our servers. We can see metadata (number of summaries, storage size) but cannot read your actual content. For Pro users using IPFS sync, your encrypted vault is stored on IPFS (decentralized storage), meaning your data isn't controlled by any single company. We never sell reading data, browsing history, or AI-generated summaries to third parties.",
    },
    {
      question: "Which platforms does Gecko View support?",
      answer: "Gecko View works on Chrome, Firefox, and Edge browser extensions (right-click any article to summarize), iOS and Android mobile apps (share any article from any app to Gecko View), and web dashboard at view.privacygecko.com (access your vault from anywhere). All platforms sync via your encrypted vault (Pro tier) or work independently (free tier stores locally).",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Gecko View"
        title="Save and Summarize Without Being Tracked - Private AI-Powered Reading"
        description="Turn hours of reading into minutes with privacy-preserving AI summaries. This is an AI-native product where AI powers core functionality while maintaining end-to-end encryption. Save to your encrypted vault and access across all devices."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#pricing" variant="primary" size="lg">
            Coming Soon
          </Button>
          <Badge variant="coming">Coming Q4 2025</Badge>
        </div>
      </Hero>

      {/* Development Status Banner */}
      <Section className="bg-gradient-to-r from-purple-100 to-blue-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TimelineIndicator timeline="In Development" format="banner" />
          <p className="text-lg mt-4 text-gray-700">Development Progress: <strong>45%</strong></p>
          <div className="mt-4 bg-white/50 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-800 font-semibold mb-2">🤖 AI-Native Product</p>
            <p className="text-sm text-gray-700">
              This is an AI-powered product from day 1—AI is core to functionality. Privacy is NOT compromised: all AI features use end-to-end encryption and run through privacy-preserving architecture.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section>
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
                  <Clock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Save Time</CardTitle>
                <CardDescription>
                  Read 10 articles in the time it takes to read one. Get the insights without the fluff. AI extracts key points instantly.
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
                  <Shield className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Stay Private</CardTitle>
                <CardDescription>
                  Unlike Pocket or Instapaper, Gecko View encrypts everything end-to-end. Your reading habits stay private.
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
                  <Zap className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Find Anything</CardTitle>
                <CardDescription>
                  Smart organization with tone analysis and auto-tags. Chat with your content using AI. Build a searchable knowledge base.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid with AI-Native Badge */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Planned Features"
          title="Privacy-Preserving AI Reading Assistant"
          description="AI-powered from launch while maintaining end-to-end encryption"
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

        {/* AI-Native Features Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🤖</span>
                  <CardTitle className="text-2xl">AI-Native Product</CardTitle>
                  <span className="ml-auto text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded-full border border-purple-300">
                    AI is CORE
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  GeckoView is designed around AI from the start. AI powers the core summarization and organization features while your reading history stays encrypted and private. This proves AI and privacy can coexist.
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "Browser extension with right-click integration",
                      "Mobile apps for iOS and Android",
                      "Export to PDF and IPFS sharing"
                    ]}
                    aiFeatures={product.ai.aiFeatures}
                    aiTimeline="Q4 2025"
                    highlightAISection={false}
                  />
                )}
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader
          subtitle="How It Works"
          title="Summarize Anything in 4 Simple Steps"
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

      {/* Privacy & Security */}
      <Section className="bg-neutral-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Privacy & Security"
            title="How We Protect Your Reading Privacy"
            description="Transparency about AI processing and encryption"
          />
          <Card>
            <CardHeader>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">🔐 End-to-End Encryption</h4>
                  <p className="text-gray-600">
                    Your summaries are encrypted using AES-256-GCM before storage. Encryption keys are derived from your password and never touch our servers. We cannot read your vault contents—only you hold the keys.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🤖 AI Processing</h4>
                  <p className="text-gray-600">
                    AI summarization requires sending article text to OpenAI's API. OpenAI does not train models on API data (verified in their policy). Article content is processed securely via HTTPS and is not stored by OpenAI after summarization.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🚫 No Tracking</h4>
                  <p className="text-gray-600">
                    We don't track which articles you read or create behavioral profiles for advertising. Your reading history is private. Business model: subscriptions, not selling your data.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🌐 IPFS Option (Pro)</h4>
                  <p className="text-gray-600">
                    Pro users can enable IPFS sync for decentralized storage. Your encrypted vault is stored on IPFS instead of centralized servers—giving you full control and self-sovereign data ownership.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <SectionHeader
          subtitle="Pricing"
          title="Choose Your Plan"
          description="Start free, upgrade when you need unlimited summaries"
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
                <Button href="#install" variant="outline" className="w-full mb-6">
                  Get Started Free
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
                <CardDescription className="mb-6">Unlimited summaries with GPT-4</CardDescription>
                <Button href="#checkout" variant="primary" className="w-full mb-6">
                  Start Pro Trial
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

        <div className="text-center mt-8">
          <p className="text-gray-600">
            💎 <strong>Token Holders:</strong> Hold 100K+ $PRICKO tokens to get Pro features free forever. Token integration is 100% optional.
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
            Ready to Read Smarter?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gecko View launches Q4 2025. Be among the first to experience AI-powered summarization with true privacy protection.
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
