"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Share2, Shield, Lock, Bookmark, Globe, Wifi, FileSearch, ArrowRight, ArrowUpRight, Check, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function ProductsPage() {
  const liveProducts = [
    {
      name: "GeckoAdvisor",
      tagline: "Privacy policy scanner",
      description: "Analyze any website's privacy practices in seconds. Get instant insights into trackers, cookies, and compliance issues.",
      icon: Eye,
      href: "https://geckoadvisor.com",
      color: "blue",
      features: ["Policy analysis", "Tracker detection", "GDPR checking", "Privacy scores"],
    },
    {
      name: "GeckoShare",
      tagline: "Encrypted file sharing",
      description: "Send files that self-destruct after viewing. End-to-end encryption means only the recipient sees your files.",
      icon: Share2,
      href: "https://geckoshare.com",
      color: "emerald",
      features: ["E2E encryption", "Expiring links", "Password protection", "No registration"],
    },
    {
      name: "GeckoGuard",
      tagline: "Tracker blocker",
      description: "Stop websites from following you across the web. Block ads, trackers, and fingerprinting automatically.",
      icon: Shield,
      href: "https://geckoguard.app",
      color: "violet",
      features: ["Ad blocking", "Tracker blocking", "Fingerprint protection", "Privacy dashboard"],
    },
    {
      name: "GeckoLock",
      tagline: "Password manager",
      description: "Zero-knowledge password vault you control. We can't see your passwords—only you can.",
      icon: Lock,
      href: "https://geckolock.com",
      color: "amber",
      features: ["Zero-knowledge", "Cross-platform", "2FA built-in", "Secure sharing"],
    },
  ];

  const comingProducts = [
    {
      name: "GeckoView",
      tagline: "Private bookmarks",
      description: "Save and organize content with AI summaries. Your reading history stays completely private.",
      icon: Bookmark,
      href: "/products/view",
      timeline: "Q2 2026",
      progress: 45,
    },
    {
      name: "GeckoShell",
      tagline: "Mobile browser",
      description: "Private mobile browser with built-in tracker blocking for iOS and Android.",
      icon: Globe,
      href: "/products/shell",
      timeline: "Q2 2026",
      progress: 30,
    },
    {
      name: "GeckoVPN",
      tagline: "Secure VPN",
      description: "Privacy-first VPN with no-logs policy and global server network.",
      icon: Wifi,
      href: "/products/vpn",
      timeline: "Q3 2026",
      progress: 20,
    },
    {
      name: "GeckoWatch",
      tagline: "Compliance monitor",
      description: "Continuous website privacy monitoring and compliance tracking for businesses.",
      icon: FileSearch,
      href: "/products/watch",
      timeline: "Q1 2026",
      progress: 55,
    },
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", icon: "bg-blue-600", text: "text-blue-600", border: "border-blue-100" },
    emerald: { bg: "bg-emerald-50", icon: "bg-emerald-600", text: "text-emerald-600", border: "border-emerald-100" },
    violet: { bg: "bg-violet-50", icon: "bg-violet-600", text: "text-violet-600", border: "border-violet-100" },
    amber: { bg: "bg-amber-50", icon: "bg-amber-600", text: "text-amber-600", border: "border-amber-100" },
  };

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
              Products
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Privacy products
              <br />
              <span className="text-blue-600">that actually work</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Eight products designed to protect every aspect of your digital life.
              Four live today, four more coming. All free to start.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Live Products */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Available Now</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {liveProducts.map((product) => {
                const colors = colorClasses[product.color as keyof typeof colorClasses];
                return (
                  <motion.a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    className={`group relative rounded-3xl p-8 lg:p-10 border ${colors.border} ${colors.bg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}>
                      <product.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <p className="text-sm text-slate-500 mb-1">{product.tagline}</p>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-slate-600"
                        >
                          <Check className="w-3 h-3 text-emerald-500" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center ${colors.text} font-semibold group-hover:gap-3 gap-2 transition-all`}>
                      <span>Try free</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Coming Soon</h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 mb-12 max-w-xl">
              Four more products launching through 2026. Join the waitlist to get early access.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingProducts.map((product) => (
                <motion.div
                  key={product.name}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <product.icon className="w-6 h-6 text-slate-500" strokeWidth={1.5} />
                  </div>

                  {/* Timeline badge */}
                  <span className="inline-block px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    {product.timeline}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">{product.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Development progress</span>
                      <span>{product.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${product.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Link */}
                  <Link
                    href={product.href}
                    className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 lg:p-16"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                    Coming 2026
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  GeckoCore Protocol
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  The AI-powered infrastructure connecting all Privacy Gecko products.
                  Local AI processing means your data never leaves your device.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "On-device AI processing",
                    "Cross-product intelligence",
                    "Real-time threat detection",
                    "Privacy-first architecture",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/geckocore"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors group shadow-lg shadow-blue-600/30"
                >
                  Learn about GeckoCore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="hidden lg:block">
                <div className="relative">
                  {/* Central hub */}
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>

                  {/* Orbiting products */}
                  {[Eye, Share2, Shield, Lock].map((Icon, i) => (
                    <div
                      key={i}
                      className="absolute w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"
                      style={{
                        top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                        left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Icon className="w-6 h-6 text-slate-400" />
                    </div>
                  ))}

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={50 + 35 * Math.cos((i * Math.PI) / 2)}
                        y2={50 + 35 * Math.sin((i * Math.PI) / 2)}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
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
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6"
            >
              Start protecting your privacy today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            >
              Every product has a free tier. No credit card required.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://geckoshare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] group shadow-lg shadow-blue-600/30"
              >
                Try GeckoShare free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-slate-600 transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:scale-[1.02]"
              >
                View roadmap
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
