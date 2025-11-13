"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Key,
  Coins,
  ShieldCheck,
  Grid3x3,
  Database,
  CheckCircle2,
  Code2,
  Crown,
  ChevronDown,
  Rocket,
  Zap,
  Layers,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Timeline data
const timelineData = [
  {
    id: "q1",
    quarter: "Q1 2026",
    milestone: "Foundation & Community Input",
    description:
      "Architecture finalization and whitepaper publication. Community feedback period opens for early adopters to shape GeckoCore's design. Technical specifications released publicly on GitHub for developer review.",
  },
  {
    id: "q2",
    quarter: "Q2 2026",
    milestone: "Core Services Development",
    description:
      "Building the authentication engine, token-gating mechanisms, and privacy-preserving analytics infrastructure. Internal testing begins with the Privacy Gecko team using GeckoCore across live products.",
  },
  {
    id: "q3",
    quarter: "Q3 2026",
    milestone: "Beta Testing & Product Integration",
    description:
      "Private beta launches with 1,000 early adopters. First product integrations go live (GeckoAdvisor, GeckoShare, GeckoGuard, GeckoLock). Beta feedback drives rapid iteration and security hardening.",
  },
  {
    id: "q4",
    quarter: "Q4 2026",
    milestone: "Public Launch & Full Integration",
    description:
      "GeckoCore Protocol will launch publicly. All eight products—including newly launched GeckoView, GeckoShell, Gecko VPN, and Gecko Watch—unified under one authentication system. Token staking features activate across the ecosystem.",
  },
];

// Features data
const featuresData = [
  {
    id: "wallet-login",
    icon: Key,
    name: "Universal Wallet Login",
    headline: "One Wallet. Every Product. No Passwords Required.",
    description:
      "Connect your Solana wallet once to access (when launched) all eight Privacy Gecko products. No email addresses collected. No password databases to breach. Just cryptographic authentication that proves you're you—without revealing who you are. Disconnect anytime, and your session across all products ends instantly.",
  },
  {
    id: "token-utility",
    icon: Coins,
    name: "$PRICKO Token Utility",
    headline: "Stake Tokens to Unlock Enhanced Privacy Features",
    description:
      "Staking $PRICKO tokens will unlock premium capabilities across the entire ecosystem. GeckoAdvisor's advanced AI policy analysis. GeckoShare's extended file storage. GeckoView's unlimited summaries. Gecko VPN's priority servers. Token holders won't just access products—they will access the best versions of each tool, all with one stake.",
  },
  {
    id: "privacy-infrastructure",
    icon: ShieldCheck,
    name: "Privacy-Preserving Infrastructure",
    headline: "Services Communicate. Your Data Stays Encrypted.",
    description:
      "GeckoCore will enable products to work together without exposing your data. Cross-product features—like using GeckoLock to secure GeckoShare files—will happen with zero-knowledge proofs. We will be able to verify you're authorized without seeing what you're doing. Even our own systems won't be able to read your encrypted information. That's privacy by design.",
  },
  {
    id: "unified-navigation",
    icon: Grid3x3,
    name: "Unified Ecosystem Navigation",
    headline: "Switch Between Tools Without Breaking Your Flow",
    description:
      "Move from scanning a privacy policy in GeckoAdvisor to sharing the report via GeckoShare in one click. Access your GeckoLock passwords while browsing with GeckoShell. Monitor website changes with Gecko Watch while connected to Gecko VPN. GeckoCore will make all eight products feel like one cohesive privacy command center.",
  },
];

// Privacy guarantees data
const guaranteesData = [
  {
    id: "zero-data",
    icon: Database,
    headline: "We Don't Collect What We Don't Need",
    description:
      "GeckoCore authentication will use cryptographic wallet signatures, not email addresses or personal information. We won't build user profiles. We won't track your activity across products. When you use GeckoCore, we will verify your wallet ownership—that's it. Your usage patterns, preferences, and data remain yours.",
  },
  {
    id: "on-chain",
    icon: CheckCircle2,
    headline: "Trust Through Transparency",
    description:
      "Token staking and authentication will happen on Solana's blockchain, providing cryptographic proof of your access rights. Smart contracts will be publicly auditable—you will be able to verify exactly how GeckoCore handles your wallet interactions. No hidden backend logic. No secret data collection. Everything provable on-chain.",
  },
  {
    id: "open-source",
    icon: Code2,
    headline: "Code You Can Inspect",
    description:
      "GeckoCore's authentication libraries, zero-knowledge proof implementations, and integration APIs will be open-sourced under permissive licenses. Security researchers, developers, and privacy advocates can audit our code, report vulnerabilities, and contribute improvements. Trust is earned through transparency.",
  },
  {
    id: "user-sovereignty",
    icon: Crown,
    headline: "Your Wallet, Your Control",
    description:
      "Disconnect your wallet, and your GeckoCore access ends instantly across all products. We can't lock you in. We can't prevent you from leaving. Your data stays in your control—encrypted with keys only you possess. GeckoCore is a tool for user empowerment, not platform dependency.",
  },
];

// FAQ data
const faqData = [
  {
    id: "what-is",
    question: "What is GeckoCore Protocol?",
    answer:
      "GeckoCore Protocol will be the privacy-preserving infrastructure layer that unifies all eight Privacy Gecko products into one seamless ecosystem. Instead of managing separate logins and accounts across GeckoAdvisor, GeckoShare, GeckoGuard, GeckoLock, GeckoView, GeckoShell, Gecko VPN, and Gecko Watch, GeckoCore will let you authenticate once with your Solana wallet and access everything. It will also power token-gated features, cross-product functionality, and zero-knowledge data sharing between services—all while maintaining complete privacy.",
  },
  {
    id: "when-launch",
    question: "When will GeckoCore launch?",
    answer:
      "GeckoCore development begins Q1 2026 with architecture finalization and community feedback. Core services are built in Q2 2026, followed by beta testing and product integrations in Q3 2026. Public launch happens Q4 2026, with all eight Privacy Gecko products unified under GeckoCore authentication. We're publishing this timeline now—over a year in advance—to demonstrate our commitment to transparent, realistic roadmaps. No surprises, no delays hidden until the last minute.",
  },
  {
    id: "need-tokens",
    question: "Do I need $PRICKO tokens to use Privacy Gecko products?",
    answer:
      "No. Every Privacy Gecko product has a free tier accessible with email/password authentication, and that won't change with GeckoCore. You can use individual products without any wallet or tokens. GeckoCore's universal wallet login will enable seamless SSO across all 8 products—you can connect a wallet without staking for this convenience. Token holders who stake $PRICKO unlock premium features (unlimited AI summaries, extended file storage, priority VPN servers), but core functionality remains free for everyone. We build privacy tools for people, not just investors.",
  },
  {
    id: "token-benefits",
    question: "What are the benefits of staking $PRICKO with GeckoCore?",
    answer:
      "Staking $PRICKO tokens will unlock premium features across all eight products simultaneously. One stake gives you unlimited AI summaries (GeckoView), advanced privacy policy analysis (GeckoAdvisor), extended file storage (GeckoShare), premium tracker filters (GeckoGuard), unlimited device sync (GeckoLock), priority VPN servers (Gecko VPN), and more. Token holders also get priority support, early access to new features, and governance voting rights on ecosystem development. Think of it as a universal upgrade key for the entire Privacy Gecko ecosystem.",
  },
  {
    id: "data-migration",
    question: "Will my existing accounts/data migrate to GeckoCore?",
    answer:
      "Yes, with your explicit permission. When GeckoCore launches in Q4 2026, existing users of live products (GeckoAdvisor, GeckoShare, GeckoGuard, GeckoLock) will have seamless migration options. You will connect your Solana wallet and choose to link existing accounts—or start fresh. All encrypted data remains encrypted during migration, with keys you control. No forced migration, no data exposure. You decide when and how to transition to GeckoCore authentication.",
  },
  {
    id: "centralized-decentralized",
    question: "Is GeckoCore centralized or decentralized?",
    answer:
      "Hybrid architecture by design. Authentication happens on Solana's blockchain (decentralized, verifiable, censorship-resistant). Token staking and access verification use smart contracts (publicly auditable, no central authority). Product services run on Privacy Gecko infrastructure (optimized for speed and privacy, but centralized for efficiency). This balance delivers blockchain benefits—transparency, user control, token utility—without sacrificing the performance and privacy guarantees users expect from production-grade tools.",
  },
  {
    id: "wallets-supported",
    question: "What wallets are supported?",
    answer:
      "GeckoCore will support all major Solana wallets at launch: Phantom, Solflare, Backpack, Ledger hardware wallets, and more. We're building with the WalletAdapter standard, which means any Solana-compatible wallet works. No vendor lock-in. Use the wallet you trust. For users who prefer email/password authentication (free tier), that option remains available—though you won't access token-gated features without a wallet connection.",
  },
  {
    id: "privacy-communication",
    question: "How does GeckoCore maintain privacy if products communicate?",
    answer:
      "Zero-knowledge architecture. When GeckoCore enables (post-launch) cross-product features—like using GeckoLock to secure a GeckoShare file—services will exchange cryptographic proofs, not your actual data. Example: GeckoShare will be able to verify you're authorized to access a file without seeing your GeckoLock password database. All communication will happen through encrypted channels, and services will only receive the minimum information needed to function. We won't be able to read your data, even when products work together.",
  },
  {
    id: "without-wallet",
    question: "Can I use Privacy Gecko products without connecting a wallet?",
    answer:
      "Yes. Free tier users can authenticate with email/password on individual products, just like today. GeckoCore's wallet-based authentication is required for token-gated features and cross-product SSO, but it's not mandatory for basic access. If you want to use GeckoAdvisor's free plan without a wallet, you can. If you want to unlock premium features across all eight products with one wallet connection, GeckoCore will make that possible.",
  },
  {
    id: "whitepaper",
    question: "When will the GeckoCore whitepaper be available?",
    answer:
      "The GeckoCore technical whitepaper will be published in Q1 2026, coinciding with the community feedback period. It will include detailed architecture specifications, zero-knowledge proof implementations, token-gating mechanisms, security audits, and integration APIs. We'll release drafts for community review before finalization. Follow our blog and join the waitlist to receive notification when the whitepaper goes live.",
  },
];

// Benefits table data
const benefitsData = [
  {
    category: "Authentication",
    free: "Email/password login required per product",
    token: "One-wallet universal login across all 8 products",
  },
  {
    category: "AI Features",
    free: "Basic AI summaries (10/day with GeckoView)",
    token: "Unlimited AI summaries + advanced policy analysis",
  },
  {
    category: "File Sharing",
    free: "GeckoShare: 100MB files, 24hr expiry",
    token: "GeckoShare: 5GB files, custom expiry, branded links",
  },
  {
    category: "Product Access",
    free: "All 8 products with standard limits",
    token: "Enhanced limits + priority features across ecosystem",
  },
  {
    category: "Support",
    free: "Community forums and documentation",
    token: "Priority support (4hr response time) across all products",
  },
];

export default function GeckoCorePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <Hero
        title={
          <>
            One Wallet. Eight Privacy Tools.{" "}
            <span className="text-gecko-green">Complete Control.</span>
          </>
        }
        description={
          <>
            <Badge variant="coming" className="mb-6">
              Coming 2026
            </Badge>
            <br />
            GeckoCore Protocol will be the privacy-preserving backbone connecting all
            Privacy Gecko products into a unified ecosystem. When launched, connect your wallet
            once, access everything. Development begins Q1 2026, with full
            deployment by Q4 2026. No passwords. Privacy-friendly analytics only. Your data stays
            yours.
          </>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="#waitlist"
            size="lg"
            variant="primary"
            className="min-w-[200px]"
          >
            Join Waitlist
          </Button>
          <Button
            href="#timeline"
            size="lg"
            variant="outline"
            className="min-w-[200px]"
          >
            View Development Roadmap
          </Button>
        </div>
      </Hero>

      {/* Problem/Solution Section */}
      <Section className="bg-white">
        <SectionHeader
          title="Privacy Tools Shouldn't Feel Like Eight Different Apps"
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
              <span className="text-red-600">The Problem</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Currently, Privacy Gecko offers eight powerful privacy
              tools—GeckoAdvisor, GeckoShare, GeckoGuard, GeckoLock, and four
              more launching through 2026. Each product works independently,
              which means separate logins, disconnected experiences, and
              fragmented privacy management. You shouldn't need to remember
              eight different accounts to protect your digital life.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
              <span className="text-gecko-green">The Solution</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              GeckoCore Protocol will change everything. One Solana wallet will become
              your universal key to the entire Privacy Gecko ecosystem. Seamless
              navigation between tools. Enhanced features unlocked by staking
              $PRICKO tokens. Zero-knowledge architecture means even when
              services communicate, your data remains encrypted and private.
              GeckoCore will deliver the unified privacy experience you
              deserve—without compromising the security you demand.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Four Key Features Grid */}
      <Section id="features">
        <SectionHeader
          subtitle="Key Features"
          title="What Makes GeckoCore Different"
          description="Four foundational capabilities that transform how you experience privacy tools"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
                  <feature.icon className="w-6 h-6 text-gecko-green" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {feature.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Development Timeline */}
      <Section id="timeline" className="bg-white">
        <SectionHeader
          subtitle="Development Roadmap"
          title="Building GeckoCore in Four Quarters"
          description="Transparent timeline from architecture to public launch. We're committed to realistic milestones, not overpromises."
        />

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full w-0 bg-gecko-green transition-all duration-1000" />
            </div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-4 gap-6 relative">
              {timelineData.map((quarter, index) => (
                <motion.div
                  key={quarter.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-gecko-green rounded-full z-10" />

                  <Card className="mt-16 hover:border-gecko-green border-2">
                    <Badge
                      variant="coming"
                      className="bg-gecko-green/10 text-gecko-green mb-3"
                    >
                      {quarter.quarter}
                    </Badge>
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">
                      {quarter.milestone}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {quarter.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* "We are here" indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gecko-green/10 text-gecko-green px-4 py-2 rounded-full text-sm font-semibold">
                <Rocket className="w-4 h-4" />
                We are here - Pre-Q1 2026
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical */}
        <div className="lg:hidden space-y-6">
          {timelineData.map((quarter, index) => (
            <motion.div
              key={quarter.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Vertical Line */}
              {index < timelineData.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-200" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 w-6 h-6 bg-white border-4 border-gecko-green rounded-full" />

              <Card className="hover:border-gecko-green border-2">
                <Badge
                  variant="coming"
                  className="bg-gecko-green/10 text-gecko-green mb-3"
                >
                  {quarter.quarter}
                </Badge>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  {quarter.milestone}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {quarter.description}
                </p>
              </Card>
            </motion.div>
          ))}

          {/* "We are here" indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-4"
          >
            <div className="inline-flex items-center gap-2 bg-gecko-green/10 text-gecko-green px-4 py-2 rounded-full text-sm font-semibold">
              <Rocket className="w-4 h-4" />
              We are here - Pre-Q1 2026
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits Comparison Table */}
      <Section>
        <SectionHeader
          subtitle="Free vs Token Holders"
          title="What You Get at Each Tier"
          description="All products remain accessible for free. Token staking unlocks the enhanced privacy experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          {/* Table - Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-neutral-100">
                  <th className="text-left py-4 px-6 font-bold text-neutral-900">
                    Feature Category
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-neutral-900">
                    Free Users
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-gecko-green bg-gecko-green/5">
                    Token Holders (Staking $PRICKO)
                  </th>
                </tr>
              </thead>
              <tbody>
                {benefitsData.map((benefit, index) => (
                  <tr
                    key={benefit.category}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-neutral-50"
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-neutral-900">
                      {benefit.category}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-sm">
                      {benefit.free}
                    </td>
                    <td className="py-4 px-6 text-sm bg-gecko-green/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-900 font-medium">
                          {benefit.token}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table - Mobile (Card Layout) */}
          <div className="md:hidden divide-y divide-gray-200">
            {benefitsData.map((benefit, index) => (
              <div key={benefit.category} className="p-6">
                <h4 className="font-bold text-neutral-900 mb-4">
                  {benefit.category}
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Free Users
                    </p>
                    <p className="text-sm text-gray-600">{benefit.free}</p>
                  </div>
                  <div className="bg-gecko-green/5 -mx-6 px-6 py-4">
                    <p className="text-xs font-semibold text-gecko-green uppercase tracking-wide mb-1">
                      Token Holders
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-900 font-medium">
                        {benefit.token}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Privacy Guarantees Grid */}
      <Section className="bg-white">
        <SectionHeader
          subtitle="Our Commitments"
          title="Privacy Guarantees Built Into GeckoCore"
          description="These aren't marketing promises. They're architectural requirements we've designed from day one."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {guaranteesData.map((guarantee, index) => (
            <motion.div
              key={guarantee.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
                  <guarantee.icon className="w-6 h-6 text-gecko-green" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {guarantee.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {guarantee.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <SectionHeader
          subtitle="Frequently Asked Questions"
          title="Everything You Need to Know About GeckoCore"
          description="Transparent answers to common questions about architecture, timeline, tokens, and privacy."
        />

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gecko-green transition-colors">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left p-6 focus:outline-none focus:ring-2 focus:ring-gecko-green focus:ring-offset-2"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg font-bold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gecko-green flex-shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-2"
                  >
                    <p className="text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bottom CTA Section */}
      <Section
        id="waitlist"
        className="bg-gradient-to-br from-gecko-green to-gecko-green/90"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Be First to Experience Unified Privacy
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our growing community of early adopters building the future of privacy-first tools. Get early access to GeckoCore beta testing in Q3 2026 and exclusive updates throughout development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              href="/contact?subject=GeckoCore%20Waitlist"
              size="lg"
              className="bg-white text-gecko-green hover:bg-neutral-100 min-w-[240px]"
            >
              Join the Waitlist
            </Button>
            <Button
              href="/contact?subject=GeckoCore%20Newsletter"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[240px]"
            >
              Subscribe for Development Updates
            </Button>
          </div>

          <p className="text-sm text-white/80">
            Beta access limited to 1,000 early adopters in Q3 2026
          </p>
        </motion.div>
      </Section>
    </main>
  );
}
