"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Share2, ArrowRight, ArrowUpRight, Check, Shield } from "lucide-react";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { HeroPlayer } from "@/components/remotion/HeroPlayer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const products = [
    {
      name: "GeckoAdvisor",
      tagline: "Domain intelligence for risk & compliance",
      description:
        "Screen vendor domains before onboarding. Detect trackers, assess privacy posture, and get compliance insights in seconds.",
      icon: Eye,
      href: "https://geckoadvisor.com",
    },
    {
      name: "GeckoShare",
      tagline: "Zero-knowledge file sharing",
      description:
        "Files encrypted in your browser before upload. Auto-delete in 24 hours. We never see your data.",
      icon: Share2,
      href: "https://geckoshare.com",
    },
  ];

  const values = [
    { label: "No tracking", detail: "Privacy-first analytics only" },
    { label: "No data selling", detail: "Your data stays yours" },
    { label: "Open source", detail: "Transparent & auditable" },
    { label: "GDPR ready", detail: "Built for compliance teams" },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden -mt-20 pt-20">
        {/* Subtle green ambient glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-xl"
            >
              <motion.div variants={fadeUp}>
                <span className="badge-green mb-8 inline-flex">
                  <Shield className="w-3 h-3 mr-1.5" />
                  Privacy Tools for Business
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-extrabold tracking-[-0.04em] text-slate-900 mb-7"
                style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", lineHeight: 1.02 }}
              >
                Your data.
                <br />
                <span className="text-[#00D98A]">Your control.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-lg"
              >
                Screen vendor domains for privacy risks. Share files with
                zero-knowledge encryption. Built for compliance teams.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="https://geckoadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base group"
                >
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link href="/products" className="btn-secondary text-base">
                  See our products
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                variants={fadeUp}
                className="mt-14 flex flex-wrap gap-6"
              >
                {["No tracking", "Open source", "GDPR ready"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00D98A]" strokeWidth={2.5} />
                    <span className="text-sm text-slate-400 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column — animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="w-full aspect-square max-w-[480px] mx-auto">
                <HeroPlayer />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14 max-w-xl">
              <p className="eyebrow mb-4">Our Products</p>
              <h2 className="text-slate-900 mb-5">
                Privacy products that work
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Built for teams that need compliance tools they can trust.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <motion.a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  className="card-product p-8 lg:p-10 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gecko-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-gecko-100">
                    <product.icon className="w-6 h-6 text-[#00D98A]" strokeWidth={1.5} />
                  </div>

                  <p className="text-sm text-slate-400 mb-1 font-medium">
                    {product.tagline}
                  </p>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#00B876] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center text-slate-400 group-hover:text-[#00D98A] transition-colors">
                    <span className="text-sm font-semibold mr-1.5">Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 md:py-24 px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {values.map((value) => (
              <motion.div
                key={value.label}
                variants={fadeUp}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <Check className="w-5 h-5 text-[#00D98A] mr-2" strokeWidth={2.5} />
                  <span className="text-base font-display font-extrabold text-slate-900 tracking-tight">
                    {value.label}
                  </span>
                </div>
                <p className="text-sm text-slate-400">{value.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="eyebrow mb-4">Why Privacy Gecko</p>
              <h2 className="text-slate-900 mb-6">
                We practice what we preach
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Most privacy companies track you while claiming to protect you.
                We use privacy-friendly analytics, never sell data, and build
                everything open source.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#00D98A] hover:text-[#00B876] font-semibold transition-colors group"
              >
                Learn about our mission
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-soft">
                <blockquote className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-snug mb-6 tracking-tight">
                  &ldquo;Privacy isn&apos;t about hiding. It&apos;s about control over your
                  own information.&rdquo;
                </blockquote>
                <p className="text-slate-400 font-medium">
                  — The Privacy Gecko team
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA — Dark bookend ─── */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6"
            >
              Privacy tools that just work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-400 max-w-xl mx-auto mb-10"
            >
              Scan vendor domains. Share files securely. No tracking, ever.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="https://geckoadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base group"
              >
                Get started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-full text-base text-white border border-slate-700 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800"
              >
                See our products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <OrganizationSchema />
    </>
  );
}
