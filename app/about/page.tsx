"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Users, Target, Heart, Github, ArrowRight, Check, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Open source code, clear privacy policies, honest communication. No hidden agendas.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Privacy tools for everyone—not just tech experts or those who can afford premium subscriptions.",
    },
    {
      icon: Target,
      title: "Community",
      description: "Built with our users. We listen, iterate, and improve based on real feedback.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "We earn trust through actions. No data selling, no tracking, no compromises.",
    },
  ];

  const principles = [
    "Your data stays on your device whenever possible",
    "We can't access what we don't have",
    "Open source for public audit",
    "Free tiers without hidden catches",
    "No tracking, no ads, no data selling",
    "Privacy-first analytics only",
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
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Privacy should be
              <br />
              <span className="text-blue-600">simple</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              We build privacy tools that actually work—without requiring a PhD to use
              or a premium subscription to access.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  In 2024, we noticed a troubling pattern: privacy tools were either too complex,
                  too expensive, or secretly collecting the same data they promised to protect.
                </p>
                <p>
                  Privacy Gecko started with a simple question: <em>"What if privacy tools were
                  actually private, genuinely useful, and free to start?"</em>
                </p>
                <p>
                  Today, we're building an ecosystem of eight products—four live, four coming—all
                  designed around the principle that you should control your digital life.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-slate-50 rounded-3xl p-8 lg:p-10">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                  Our Principles
                </p>
                <div className="space-y-4">
                  {principles.map((principle) => (
                    <div key={principle} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                What we stand for
              </h2>
              <p className="text-xl text-slate-600">
                The principles that guide everything we build.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-6"
            >
              Our Mission
            </motion.p>
            <motion.blockquote
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight mb-8"
            >
              "To empower everyone with simple, effective privacy tools that protect their digital lives."
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-xl text-slate-500">
              No technical expertise required. No premium subscription needed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Open Source */}
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                  Open Source
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Transparency by default
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Our website is fully open source. Product code releases throughout 2025-2026
                after security audits. Anyone can review, audit, and contribute.
              </p>

              <a
                href="https://github.com/privacygecko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors group shadow-lg shadow-blue-600/30"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                  Why Open Source?
                </p>
                <div className="space-y-4">
                  {[
                    "Trust through verification, not promises",
                    "Community can audit our security claims",
                    "Catch vulnerabilities faster together",
                    "Build confidence in our privacy practices",
                  ].map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              Join our mission
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
            >
              Help us make privacy accessible to everyone. Use our products, provide feedback,
              or spread the word.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] group shadow-lg shadow-blue-600/25"
              >
                Explore products
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-slate-900 rounded-full font-semibold text-lg border-2 border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-[1.02]"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
