"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Share2, ArrowRight, ArrowUpRight, Check } from "lucide-react";

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
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", icon: "bg-blue-600", text: "text-blue-600", border: "border-blue-100" },
    emerald: { bg: "bg-emerald-50", icon: "bg-emerald-600", text: "text-emerald-600", border: "border-emerald-100" },
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
              className="text-sm font-medium tracking-widest uppercase text-emerald-600 mb-4"
            >
              Products
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Privacy tools
              <br />
              <span className="text-[#00D98A]">that actually work</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Two focused products designed to protect your business and personal privacy.
              Both free to start, no credit card required.
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
                href="https://geckoadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00D98A] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#00B876] hover:scale-[1.02] group shadow-lg shadow-emerald-600/30"
              >
                Try GeckoAdvisor free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-slate-600 transition-all duration-300 hover:border-[#00D98A] hover:text-[#00D98A] hover:scale-[1.02]"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
