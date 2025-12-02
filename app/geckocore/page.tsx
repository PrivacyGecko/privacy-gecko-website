"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Key,
  Coins,
  ShieldCheck,
  Grid3x3,
  Database,
  CheckCircle,
  Code2,
  Crown,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  Check,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function GeckoCorePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Key,
      title: "Five Privacy Feeds",
      description: "PrivacyFeed, ThreatFeed, MetaProof, AccessProof, and ReputationFeed—apps query verified proofs without rebuilding privacy infrastructure.",
    },
    {
      icon: Coins,
      title: "$PRICKO Token Utility",
      description: "Developers pay for API queries. Validators stake to verify proofs. Users stake for premium features. Quarterly burns reduce supply.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Knowledge Proofs",
      description: "Analysis happens on-device, proofs verified on-chain. Your data never exposed—not even to the apps querying results.",
    },
    {
      icon: Grid3x3,
      title: "Open to All Applications",
      description: "DeFi protocols, wallets, browsers, dApps—any application can integrate GeckoCore feeds to make privacy-informed decisions.",
    },
  ];

  const timeline = [
    { quarter: "Q1 2026", title: "Foundation", desc: "Architecture finalization, whitepaper v2, community feedback" },
    { quarter: "Q2 2026", title: "SDK Launch", desc: "Developer Preview, SDK v1.0, first external integrations" },
    { quarter: "Q3 2026", title: "Beta Testing", desc: "1,000 early adopters, validator program, security audits" },
    { quarter: "Q4 2026", title: "Public Launch", desc: "Mainnet live, 8 reference products unified, open infrastructure" },
  ];

  const guarantees = [
    { icon: Database, title: "Zero Data Collection", desc: "We verify wallet ownership—that's it. No profiles, no tracking." },
    { icon: CheckCircle, title: "On-Chain Verification", desc: "Smart contracts are publicly auditable. Everything provable." },
    { icon: Code2, title: "Open Source", desc: "Authentication libraries and APIs open-sourced for audit." },
    { icon: Crown, title: "User Sovereignty", desc: "Disconnect anytime. Your data, your keys, your control." },
  ];

  const benefits = [
    { category: "API Queries", free: "100/month (developers)", token: "Unlimited + priority" },
    { category: "Privacy Feeds", free: "Basic PrivacyFeed only", token: "All 5 feeds + historical data" },
    { category: "Proof Verification", free: "Standard queue", token: "Sub-second priority" },
    { category: "SDK Features", free: "Core functionality", token: "Enterprise + white-label" },
  ];

  const faqs = [
    {
      q: "What is GeckoCore Protocol?",
      a: "GeckoCore is open privacy infrastructure on Solana that enables any application to verify privacy, security, and trust through zero-knowledge proofs. Think of it like Pyth for price feeds, but for privacy verification."
    },
    {
      q: "Who can use GeckoCore?",
      a: "Any developer building applications. DeFi protocols for compliance checks, wallets for transaction safety, browsers for privacy scores, dApps for access control—the SDK is open to all."
    },
    {
      q: "What are the Five Privacy Feeds?",
      a: "PrivacyFeed (website analysis), ThreatFeed (security threats), MetaProof (file integrity), AccessProof (identity verification), and ReputationFeed (privacy-preserving reputation). Apps query these for verified privacy data."
    },
    {
      q: "What role do Privacy Gecko products play?",
      a: "Our 8 products (GeckoAdvisor, GeckoShare, etc.) serve as Phase 1 reference implementations—proving the protocol works at scale before opening to external developers in Q2 2026."
    },
    {
      q: "Do I need $PRICKO tokens?",
      a: "Developers pay $PRICKO for API queries. Validators stake 100K+ tokens to verify proofs. Users can stake for premium features. Core protocol functionality is always accessible."
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                Coming 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6"
              style={{ lineHeight: '1.05' }}
            >
              The Privacy Proof Layer
              <br />
              <span className="text-blue-600">for Solana.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Open privacy infrastructure enabling any application to verify privacy, security, and trust
              through zero-knowledge proofs—without exposing user data.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact?subject=GeckoCore%20Waitlist"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] group shadow-lg shadow-blue-600/25"
              >
                Join waitlist
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/whitepaper"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg border-2 border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-[1.02]"
              >
                Read whitepaper
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Key Features
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                What makes GeckoCore different
              </h2>
              <p className="text-xl text-slate-600">
                Four foundational capabilities making privacy verification accessible to any application.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Visual */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Shared infrastructure, exponential value
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">1</span>
                      The Problem
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      Every app rebuilds privacy verification from scratch. Duplicate work, siloed intelligence,
                      and "trust us" claims you can't verify. Privacy doesn't scale this way.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                      The Solution
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      Apps query GeckoCore's five feeds instead of building alone. One analysis serves many consumers.
                      Zero-knowledge proofs verify claims cryptographically—not "trust us," but "prove it."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                {/* Architecture Visual */}
                <div className="relative bg-slate-900 rounded-3xl p-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

                  {/* Central hub */}
                  <div className="relative flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <p className="text-center text-white font-display font-bold text-lg mb-8">GeckoCore Protocol</p>

                  {/* Three layers */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4">
                      <Layers className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-300 text-sm">Application Layer — Any App (DeFi, wallets, browsers, dApps)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300 text-sm">Protocol Layer — 5 Privacy Feeds + ZK Verification</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <span className="text-slate-300 text-sm">Blockchain Layer — Solana Infrastructure</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Development Roadmap
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Building GeckoCore in 2026
              </h2>
              <p className="text-xl text-slate-600">
                Transparent timeline from architecture to public launch.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.quarter}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Connection line */}
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 -z-10" />
                  )}

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                      {phase.quarter}
                    </span>
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {phase.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                We are here — Pre-Q1 2026
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Developer Access Tiers
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Build with GeckoCore
              </h2>
              <p className="text-xl text-slate-600">
                Free tier for prototyping. $PRICKO staking unlocks production-grade access and priority verification.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                  <div className="p-4 font-display font-bold text-slate-900">Feature</div>
                  <div className="p-4 font-display font-bold text-slate-500">Free Tier</div>
                  <div className="p-4 font-display font-bold text-blue-600 bg-blue-50">$PRICKO Stakers</div>
                </div>
                {/* Rows */}
                {benefits.map((row, index) => (
                  <div key={row.category} className={`grid grid-cols-3 ${index < benefits.length - 1 ? 'border-b border-slate-100' : ''}`}>
                    <div className="p-4 font-medium text-slate-900">{row.category}</div>
                    <div className="p-4 text-sm text-slate-500">{row.free}</div>
                    <div className="p-4 text-sm bg-blue-50/50 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-900 font-medium">{row.token}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Guarantees */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-400 mb-4">
                Our Commitments
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Privacy guarantees built into GeckoCore
              </h2>
              <p className="text-xl text-slate-400">
                These aren't marketing promises. They're architectural requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Common questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-slate-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left p-6 focus:outline-none"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="text-lg font-display font-bold text-slate-900 pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-12 text-center">
              <Link
                href="/whitepaper"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Read the full whitepaper
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Build on the Privacy Proof Layer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
            >
              Join developers, validators, and early adopters building privacy-first applications. SDK launches Q2 2026.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact?subject=GeckoCore%20Waitlist"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02] group"
              >
                Join the waitlist
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?subject=GeckoCore%20Newsletter"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-[1.02]"
              >
                Subscribe for updates
              </Link>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm text-blue-200 mt-6"
            >
              Developer Preview limited to 1,000 early integrations
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
