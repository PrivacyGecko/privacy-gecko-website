"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList } from "@/components/ai";
import { CheckCircle, Lock, Clock, Shield, Link as LinkIcon, BarChart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoSharePage() {
  const product = getProductById("share");

  if (!product) return null;

  const features = [
    {
      icon: Lock,
      title: "Client-Side Encryption",
      description: "Files encrypted in your browser using AES-256-GCM before upload. Encryption keys never touch our servers.",
    },
    {
      icon: Clock,
      title: "Expiring Links",
      description: "Set custom expiration times for your shared files to automatically delete after a set period",
    },
    {
      icon: Shield,
      title: "Password Protection",
      description: "Add an extra layer of security with password-protected download links",
    },
    {
      icon: LinkIcon,
      title: "No Registration Required",
      description: "Share files instantly without requiring recipients to create an account",
    },
    {
      icon: BarChart,
      title: "Audit Logs",
      description: "Track who accessed your files and when with detailed access logs",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Pro users get team workspaces with shared access controls and permissions",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Upload Your File",
      description: "Drag and drop or select files up to 5GB (Pro users)",
    },
    {
      step: 2,
      title: "Set Security Options",
      description: "Choose expiration time, add password protection, and customize settings",
    },
    {
      step: 3,
      title: "Share the Link",
      description: "Copy the secure link and share it with your intended recipients",
    },
    {
      step: 4,
      title: "Auto-Delete",
      description: "Files are automatically deleted after expiration for maximum privacy",
    },
  ];

  const faqs = [
    {
      question: "How does encryption work technically?",
      answer: "GeckoShare uses AES-256-GCM encryption. Files are encrypted entirely in your browser before upload. The encryption key is generated client-side and transmitted via URL fragment (never sent to servers). Same encryption standard used by Signal and WhatsApp for end-to-end encryption.",
    },
    {
      question: "What file types can I share?",
      answer: "You can share any file type - documents, images, videos, archives, code files, and more. The only limitation is file size (100MB free, 5GB Pro).",
    },
    {
      question: "How does GeckoShare use AI?",
      answer: "GeckoShare will gain AI capabilities in Q4 2025 that scan files for hidden metadata and trackers before sharing, and detect suspicious file patterns. All AI processing happens locally on your device—no files sent to the cloud for analysis. AI features will be available to free tier users with monthly limits, or unlimited for Pro subscribers. File sharing works fully without any AI requirement.",
    },
    {
      question: "Can I track who downloaded my files?",
      answer: "Pro users get detailed audit logs showing download timestamps, IP addresses (anonymized for privacy), and access attempts.",
    },
    {
      question: "What happens after files expire?",
      answer: "Files are permanently deleted from our servers after expiration. This deletion is cryptographically secure and irreversible.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="GeckoShare"
        title="Share Files Securely Without Leaving a Trail - AI Threat Detection Coming Q4 2025"
        description={product.description}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#pricing" variant="primary" size="lg">
            Start Sharing Securely
          </Button>
          <Badge variant="live">Live Now</Badge>
        </div>
      </Hero>

      {/* Features Grid with AI */}
      <Section>
        <SectionHeader
          subtitle="Features"
          title="Share Files Without Compromising Privacy"
          description="Client-side encrypted file sharing - your files are encrypted before they leave your device"
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
                      "End-to-end encryption (256-bit AES)",
                      "Expiring links & password protection",
                      "No registration required"
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

      {/* Security Details */}
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Security Details"
            title="How Gecko Share Encryption Works"
            description="Technical transparency for privacy-conscious users"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="font-bold text-base mb-2">Encryption Process:</h3>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>File encrypted in your browser using Web Crypto API (AES-256-GCM)</li>
                      <li>Random 256-bit encryption key generated locally using crypto.getRandomValues()</li>
                      <li>Encrypted file uploaded to our servers (we never see plaintext)</li>
                      <li>Key included in URL fragment (the part after #, never sent to servers)</li>
                      <li>Recipient's browser decrypts locally using key from URL</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2">Technical Specifications:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Algorithm: AES-256-GCM with random 96-bit IV per file</li>
                      <li>Key generation: Cryptographically secure random number generator (CSPRNG)</li>
                      <li>No key derivation needed (random keys, not passwords)</li>
                      <li>Same encryption standard used by Signal and WhatsApp</li>
                      <li>Open source code releasing Q4 2025 after security audit</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2">Security Limitations (We're Honest):</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Anyone with the full link can decrypt the file</li>
                      <li>If you send the link over insecure channels (unencrypted messaging), encryption can be bypassed</li>
                      <li>Browser security vulnerabilities could potentially compromise encryption</li>
                      <li>We can see file sizes and upload timestamps (metadata), but not contents</li>
                      <li>We're transparent about what we can and cannot protect</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2">Third-Party Services:</h3>
                    <p className="text-gray-600">
                      File storage: Vercel Edge Network (US) • Analytics: Plausible (EU, cookieless) • Payments: Stripe (PCI compliant)
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader
          subtitle="How It Works"
          title="Secure File Sharing in 4 Simple Steps"
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
                <Button href="#upload" variant="outline" className="w-full mb-6">
                  Get Started
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
                <CardDescription className="mb-6">Up to 5GB per file, custom expiry</CardDescription>
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
            Ready to Share Files Securely?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start sharing with end-to-end encryption today. No account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#upload" variant="primary" size="lg">
              Start Sharing
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
