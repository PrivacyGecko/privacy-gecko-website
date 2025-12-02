"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Circle,
  ArrowRight,
  Eye,
  Share2,
  Shield,
  Lock,
  Bookmark,
  Globe,
  Wifi,
  FileSearch,
  Cpu,
  Sparkles
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function RoadmapPage() {
  const timeline = [
    {
      phase: "Foundation",
      date: "2024–2025",
      status: "completed",
      items: [
        "Core architecture designed",
        "4 products launched live",
        "Security audits completed",
        "Privacy-preserving infrastructure",
      ],
    },
    {
      phase: "Token Launch",
      date: "December 2025",
      status: "current",
      items: [
        "$PRICKO token on Solana",
        "Staking infrastructure live",
        "Community treasury established",
        "Early adopter rewards begin",
      ],
    },
    {
      phase: "AI Beta",
      date: "Q1 2026",
      status: "upcoming",
      items: [
        "1,000 beta testers",
        "AI privacy scanning in GeckoAdvisor",
        "Adaptive blocking in GeckoGuard",
        "On-device AI inference",
      ],
    },
    {
      phase: "AI Launch",
      date: "Q2 2026",
      status: "upcoming",
      items: [
        "AI features go public",
        "Federated learning network live",
        "4 remaining products launch",
        "GeckoCore Protocol beta",
      ],
    },
    {
      phase: "Full Ecosystem",
      date: "Q3–Q4 2026",
      status: "upcoming",
      items: [
        "All 8 products with AI",
        "Open source code release",
        "Community governance live",
        "Developer API access",
      ],
    },
  ];

  const liveProducts = [
    { name: "GeckoAdvisor", tagline: "Privacy policy scanner", icon: Eye, href: "https://geckoadvisor.com" },
    { name: "GeckoShare", tagline: "Encrypted file sharing", icon: Share2, href: "https://geckoshare.com" },
    { name: "GeckoGuard", tagline: "Tracker blocker", icon: Shield, href: "https://geckoguard.app" },
    { name: "GeckoLock", tagline: "Password manager", icon: Lock, href: "https://geckolock.com" },
  ];

  const comingProducts = [
    { name: "GeckoView", tagline: "Private bookmarks", icon: Bookmark, date: "Q2 2026" },
    { name: "GeckoShell", tagline: "Mobile browser", icon: Globe, date: "Q2 2026" },
    { name: "GeckoVPN", tagline: "Secure VPN", icon: Wifi, date: "Q3 2026" },
    { name: "GeckoWatch", tagline: "Compliance monitor", icon: FileSearch, date: "Q2 2026" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4"
            >
              Development Roadmap
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Building privacy
              <br />
              <span className="text-blue-600">in public</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              8 privacy products. Transparent timeline. AI-enhanced protection launching 2026.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "4", label: "Products Live" },
              { value: "4", label: "In Development" },
              { value: "Q1 2026", label: "AI Beta Launch" },
              { value: "Nov 2025", label: "Token Launch" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
                Timeline
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                From foundation to full ecosystem
              </h2>
              <p className="text-xl text-slate-600">
                Five phases of development, each building on the last.
              </p>
            </motion.div>

            {/* Timeline Cards */}
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  variants={fadeUp}
                  className={`
                    bg-white rounded-2xl p-8 lg:p-10 border
                    ${phase.status === "current"
                      ? "border-blue-200 ring-2 ring-blue-100"
                      : "border-slate-200"
                    }
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                    {/* Phase Info */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        {phase.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : phase.status === "current" ? (
                          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                        <span className={`
                          text-xs font-semibold uppercase tracking-wider
                          ${phase.status === "completed" ? "text-emerald-600" : ""}
                          ${phase.status === "current" ? "text-blue-600" : ""}
                          ${phase.status === "upcoming" ? "text-slate-400" : ""}
                        `}>
                          {phase.status === "current" ? "In Progress" : phase.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
                        {phase.phase}
                      </h3>
                      <p className="text-slate-500">{phase.date}</p>
                    </div>

                    {/* Items */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className={`
                              w-4 h-4 mt-0.5 flex-shrink-0
                              ${phase.status === "completed" ? "text-emerald-500" : "text-slate-300"}
                            `} />
                            <span className={`
                              text-sm
                              ${phase.status === "completed" ? "text-slate-600" : "text-slate-500"}
                            `}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Status */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Live Products */}
            <motion.div variants={fadeUp} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h2 className="text-2xl font-display font-bold text-slate-900">
                  Live Now
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {liveProducts.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <product.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="font-display font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm text-slate-500">{product.tagline}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Coming Soon */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <h2 className="text-2xl font-display font-bold text-slate-900">
                  Coming Soon
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {comingProducts.map((product) => (
                  <div
                    key={product.name}
                    className="bg-slate-50 rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                      <product.icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <p className="font-display font-bold text-slate-700 mb-1">
                      {product.name}
                    </p>
                    <p className="text-sm text-slate-400 mb-2">{product.tagline}</p>
                    <p className="text-xs text-blue-600 font-medium">{product.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Development */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                  Q2 2026
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Privacy-first AI
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                AI that protects your privacy instead of invading it. All processing happens on your device.
                Models improve collectively through federated learning—without sharing individual data.
              </p>

              <div className="space-y-4">
                {[
                  "On-device processing—your data never leaves",
                  "Federated learning for collective improvement",
                  "Open source AI models after maturity",
                  "Zero-knowledge architecture enforced",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                  AI Rollout Timeline
                </p>
                <div className="space-y-6">
                  {[
                    { phase: "Beta Testing", date: "Q1 2026", desc: "1,000 users test AI in GeckoAdvisor" },
                    { phase: "Public Launch", date: "Q2 2026", desc: "AI features available to all users" },
                    { phase: "Full Integration", date: "Q3-Q4 2026", desc: "AI across all 8 products" },
                  ].map((item, index) => (
                    <div key={item.phase} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        {index < 2 && <div className="w-px h-full bg-slate-700 my-2" />}
                      </div>
                      <div className="pb-4">
                        <p className="text-xs text-blue-400 font-medium mb-1">{item.date}</p>
                        <p className="font-display font-bold text-white mb-1">{item.phase}</p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GeckoCore Protocol */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp} className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                <Cpu className="w-4 h-4" />
                Coming Q4 2026
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                GeckoCore Protocol
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The infrastructure that connects all 8 products. One account, unified privacy,
                token-gated features.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { title: "Unified Auth", desc: "One account across all products" },
                { title: "Token Gating", desc: "$PRICKO unlocks premium AI features" },
                { title: "Privacy Analytics", desc: "Usage insights without tracking" },
              ].map((feature) => (
                <div key={feature.title} className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12">
              <Link
                href="/geckocore"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Learn about GeckoCore
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Why we build this way
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "Security first",
                  desc: "Every product undergoes independent security audits before launch. We won't compromise security to ship faster.",
                },
                {
                  title: "Community feedback",
                  desc: "Beta testing with privacy advocates ensures we build what you need, not what we assume you want.",
                },
                {
                  title: "Sustainable development",
                  desc: "We're building for the long-term. Quality over speed, always. No VC pressure to monetize your data.",
                },
                {
                  title: "Open source commitment",
                  desc: "All product code will be published after security audits. Transparency requires preparation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-display font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
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
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6"
            >
              Join the journey
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
            >
              Be part of building the privacy tools you wish existed.
              Early adopters help shape what we build.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] group shadow-lg shadow-blue-600/25"
              >
                Try live products
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-slate-900 rounded-full font-semibold text-lg border-2 border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-[1.02]"
              >
                Join waitlist
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
