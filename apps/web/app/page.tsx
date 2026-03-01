"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Share2, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function HomePage() {
  const products = [
    {
      name: "GeckoAdvisor",
      tagline: "Privacy policy scanner",
      description: "Analyze any website's privacy practices in seconds",
      icon: Eye,
      href: "https://geckoadvisor.com",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GeckoShare",
      tagline: "Encrypted file sharing",
      description: "Send files that self-destruct after viewing",
      icon: Share2,
      href: "https://geckoshare.com",
      color: "from-emerald-600 to-emerald-700",
    },
  ];

  const values = [
    { label: "No tracking", detail: "Privacy-first analytics only" },
    { label: "No data selling", detail: "Your data stays yours" },
    { label: "Open source", detail: "Transparent & auditable" },
    { label: "Free tier always", detail: "No credit card required" },
  ];

  return (
    <>
      {/* Hero Section - Editorial Typography */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-emerald-600 mb-6"
            >
              Privacy Tools for Business
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-slate-900 mb-8"
              style={{ lineHeight: '1.02' }}
            >
              Your data.
              <br />
              <span className="text-[#00D98A]">Your control.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Scan privacy policies for compliance risks with GeckoAdvisor.
              Share files securely with GeckoShare. Built for teams that take privacy seriously.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://geckoadvisor.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00D98A] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#00B876] hover:scale-[1.02] group shadow-lg shadow-emerald-600/25"
              >
                Try GeckoAdvisor free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg border-2 border-slate-200 transition-all duration-300 hover:border-[#00D98A] hover:text-emerald-700 hover:scale-[1.02]"
              >
                Explore products
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-20 right-8 lg:right-16 hidden lg:block"
          >
            <div className="text-right">
              <p className="text-6xl font-display font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Products live</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section - Clean Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section Header */}
            <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
              <p className="text-sm font-medium tracking-widest uppercase text-emerald-600 mb-4">
                Our Products
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
                Privacy products that work
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Each product is free to start, with no credit card required.
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {products.map((product) => (
                <motion.a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  className="group relative bg-slate-50 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-slate-100 border border-transparent hover:border-slate-200"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <product.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1 font-medium">{product.tagline}</p>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#00D98A] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center text-slate-400 group-hover:text-[#00D98A] transition-colors mt-6">
                    <span className="text-sm font-semibold mr-2">Try free</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Editorial Strip */}
      <section className="py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {values.map((value) => (
              <motion.div key={value.label} variants={fadeUp} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <Check className="w-5 h-5 text-[#00D98A] mr-2" strokeWidth={2.5} />
                  <span className="text-lg font-display font-bold text-slate-900">{value.label}</span>
                </div>
                <p className="text-sm text-slate-500">{value.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Large Typography */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-medium tracking-widest uppercase text-emerald-600 mb-4">
                Why Privacy Gecko
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
                We practice what we preach
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Most privacy companies track you while claiming to protect you.
                We use privacy-friendly analytics, never sell data, and build everything open source.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#00D98A] hover:text-[#00B876] font-semibold transition-colors"
              >
                Learn about our mission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              {/* Large quote */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200">
                <blockquote className="text-2xl md:text-3xl font-display font-medium text-slate-900 leading-snug mb-6">
                  "Privacy isn't about hiding. It's about control over your own information."
                </blockquote>
                <p className="text-slate-500">
                  — The Privacy Gecko team
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold & Simple */}
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
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6"
            >
              Start protecting your privacy
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            >
              No credit card. No tracking. Just privacy tools that work.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://geckoadvisor.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00D98A] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#00B876] hover:scale-[1.02] group shadow-lg shadow-emerald-600/30"
              >
                Try GeckoAdvisor free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-slate-600 transition-all duration-300 hover:border-[#00D98A] hover:text-[#00D98A] hover:scale-[1.02]"
              >
                Explore products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <OrganizationSchema />
    </>
  );
}
