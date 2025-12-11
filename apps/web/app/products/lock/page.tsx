"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Lock, Shield, Smartphone, Key, Users, AlertCircle, Zap, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoLockPage() {
  const product = getProductById("lock");

  if (!product) return null;

  const features = [
    {
      icon: Lock,
      title: "Zero-Knowledge Encryption",
      description: "Your vault is encrypted locally before upload. We mathematically cannot access your passwords—only you hold the keys.",
    },
    {
      icon: Shield,
      title: "Military-Grade AES-256",
      description: "Same encryption standard used by governments and banks worldwide. Your passwords are secured with unbreakable encryption.",
    },
    {
      icon: Eye,
      title: "Open-Source Transparency",
      description: "Our code is publicly auditable on GitHub. Don't trust, verify—see exactly how we protect your data.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Sync",
      description: "Access your passwords on web, mobile (iOS & Android), and desktop. Seamless encrypted synchronization everywhere.",
    },
    {
      icon: Key,
      title: "Smart Password Generator",
      description: "Create uncrackable passwords with customizable complexity. Let Gecko Lock generate strong, unique passwords for every account.",
    },
    {
      icon: AlertCircle,
      title: "Built-In 2FA Authenticator",
      description: "No need for separate authenticator apps. Gecko Lock includes encrypted TOTP backup for two-factor authentication.",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Create Your Vault",
      description: "Sign up with email and master password. Your master password never leaves your device.",
    },
    {
      step: 2,
      title: "Import or Create",
      description: "Import existing passwords from LastPass, 1Password, or Bitwarden—or start fresh with our generator.",
    },
    {
      step: 3,
      title: "Auto-Fill Everywhere",
      description: "Install browser extensions and mobile apps. Gecko Lock securely auto-fills passwords across all devices.",
    },
    {
      step: 4,
      title: "Access Anywhere",
      description: "Your encrypted vault syncs automatically. Access passwords on any device, even offline.",
    },
  ];

  const faqs = [
    {
      question: "What does 'zero-knowledge encryption' actually mean?",
      answer: "Zero-knowledge means your passwords are encrypted on your device before they're sent to our servers. We use AES-256 encryption with a key derived from your master password—which only you know. We never see your master password, never store it, and mathematically cannot decrypt your vault. Even if our servers were compromised, attackers would only get encrypted data they cannot read.",
    },
    {
      question: "How easy is it to import from LastPass, 1Password, or Bitwarden?",
      answer: "Extremely easy. Export your passwords from your current manager (usually a CSV file), then use Gecko Lock's import tool. We'll automatically detect the format, encrypt your passwords, and set up your vault—typically in under 2 minutes. No manual re-entry required.",
    },
    {
      question: "What's included in the free tier?",
      answer: "The free tier includes unlimited password storage, password generator, basic auto-fill, 2FA authenticator, cross-platform sync (2 devices), and mobile/desktop apps. It's a complete password manager, free forever. Pro adds unlimited devices, priority support, advanced sharing, breach monitoring, and emergency access.",
    },
    {
      question: "How does Gecko Lock use AI?",
      answer: "Gecko Lock will gain AI capabilities post-launch that evaluate password strength against latest breaches and detect phishing attempts on login pages. All AI processing happens locally on your device—no passwords sent to the cloud. AI features will be available to free tier users with monthly limits, or unlimited for Pro subscribers. Core password management works fully without any AI requirement.",
    },
    {
      question: "How does Gecko Lock integrate with $PRICKO tokens?",
      answer: "$PRICKO token holders will get optional benefits once staking launches (Q4 2025): discounts on Pro subscriptions, early access to new features, and future voting rights on product roadmap decisions. Tokens are completely optional—Gecko Lock works fully without any cryptocurrency requirement.",
    },
    {
      question: "Can I self-host Gecko Lock on my own servers?",
      answer: "Yes. Gecko Lock is open-source and supports self-hosting. You can deploy it on your own infrastructure using our Docker container or manual installation guide. Self-hosted instances give you complete control over data location and server infrastructure while maintaining compatibility with our mobile apps (just point them to your server URL).",
    },
    {
      question: "What happens if I forget my master password?",
      answer: "Due to zero-knowledge encryption, we cannot reset your master password or recover your vault. This is a security feature, not a limitation—it proves we truly cannot access your data. We strongly recommend setting up account recovery options: security questions, recovery code export, or emergency access contacts.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Gecko Lock"
        title="Your Passwords, Locked Away From Everyone"
        description="Never forget another password—and never worry about who can see them. Zero-knowledge encryption means only you can access your vault. Newly launched and securing passwords today."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="https://geckolock.com" variant="primary" size="lg">
            Get Started Free
          </Button>
          <Badge variant="live">Live Now - Newly Launched</Badge>
        </div>
      </Hero>

      {/* Trust Indicators */}
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
                  <Lock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Zero Access</CardTitle>
                <CardDescription>
                  We can't see your passwords. Zero-knowledge encryption means your vault is encrypted locally—only you hold the keys.
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
                  <Eye className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Our code is public on GitHub. Don't trust marketing claims—audit our security yourself. True transparency.
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
                <CardTitle>Self-Hostable</CardTitle>
                <CardDescription>
                  Run Gecko Lock on your own servers. Ultimate control over your data location and infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid with AI */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Features"
          title="Password Security You Can Actually Trust"
          description="Complete password management with AI security insights coming Q2 2026"
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

        {/* AI Features Section - Post-Launch */}
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
                  AI security features will be added after initial launch to enhance password protection
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "Military-grade AES-256 encryption",
                      "Zero-knowledge architecture",
                      "Cross-platform sync"
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
      <Section>
        <SectionHeader
          subtitle="How It Works"
          title="Secure Your Passwords in 4 Simple Steps"
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

      {/* Privacy & Security Deep Dive */}
      <Section className="bg-neutral-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Privacy & Security"
            title="How Gecko Lock Protects Your Passwords"
            description="Transparency about encryption, security, and limitations"
          />
          <Card>
            <CardHeader>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">🔐 Zero-Knowledge Architecture</h4>
                  <p className="text-gray-600">
                    Your passwords are encrypted using AES-256-GCM before storage. Encryption keys are derived from your master password using PBKDF2 with 100,000 iterations and never touch our servers. We cannot read your vault contents—only you hold the keys.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🔓 Open-Source Code</h4>
                  <p className="text-gray-600">
                    Gecko Lock's codebase is publicly available on GitHub for community auditing. We use battle-tested encryption libraries (libsodium, WebCrypto API) rather than custom cryptography. Don't trust our claims—verify them yourself.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🚫 No Tracking or Data Selling</h4>
                  <p className="text-gray-600">
                    We don't track your usage, sell your data, or profit from surveillance. Our business model is simple: you pay for premium features, we build better privacy tools. No ads. No data mining. No compromises.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🏠 Self-Hosting Option</h4>
                  <p className="text-gray-600">
                    Deploy Gecko Lock on your own infrastructure using our Docker container. Self-hosted instances give you complete control—your server, your data, your rules. Mobile apps remain compatible by pointing to your server URL.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚠️ Honest Limitations</h4>
                  <p className="text-gray-600">
                    If you forget your master password, we cannot recover your vault (by design—we don't have the keys). We're scheduling our first independent security audit for Q2 2025 and will publish results publicly. We're committed to transparency about what we can and cannot do.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
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
            Ready to Take Control of Your Passwords?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join users securing their passwords with zero-knowledge encryption. Newly launched with a generous free tier and AI security features coming Q2 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://geckolock.com" variant="primary" size="lg">
              Try Free
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
