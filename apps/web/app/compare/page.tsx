"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, X, Shield, Zap, Lock, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function ComparePage() {
  const comparisonData = [
    { feature: "Free Tier", privacyGecko: true, competitor1: true, competitor2: "Limited" },
    { feature: "No Tracking", privacyGecko: true, competitor1: "Partial", competitor2: false },
    { feature: "Open Source", privacyGecko: "In Progress", competitor1: true, competitor2: false },
    { feature: "No VC Funding", privacyGecko: true, competitor1: false, competitor2: false },
    { feature: "Privacy-First Analytics", privacyGecko: true, competitor1: true, competitor2: false },
    { feature: "End-to-End Encryption", privacyGecko: true, competitor1: "N/A", competitor2: true },
    { feature: "Self-Destructing Files", privacyGecko: true, competitor1: "N/A", competitor2: false },
    { feature: "GDPR Compliance Scanning", privacyGecko: true, competitor1: false, competitor2: "N/A" },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="w-5 h-5 text-[#00D98A] mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-400 mx-auto" />;
    } else {
      return <span className="text-sm text-gray-600">{value}</span>;
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-[#00D98A] mb-4"
            >
              Comparison
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              How Privacy Gecko
              <br />
              <span className="text-[#00D98A]">compares</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              An honest comparison of features, pricing, and privacy practices
              against popular alternatives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 text-center">
              Why We Built Privacy Gecko
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              We build focused, best-in-class privacy tools. GeckoAdvisor for compliance risk analysis. GeckoShare for secure file transfer. Each does one thing exceptionally well.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Focused Tools", desc: "Two purpose-built products instead of a bloated suite that does everything poorly" },
                { icon: Zap, title: "Always Free Tier", desc: "Both products have generous free tiers. No credit card required to start." },
                { icon: Lock, title: "No VC Pressure", desc: "Bootstrapped with no investors. We answer to users, not shareholders." },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} className="bg-slate-50 rounded-2xl p-8 border border-transparent hover:border-slate-200 transition-colors">
                  <div className="w-12 h-12 bg-[#00D98A]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#00D98A]" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Feature Comparison
              </h2>
              <p className="text-lg text-slate-600">Privacy Gecko vs. popular alternatives</p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                    <th scope="col" className="px-6 py-4 text-center font-semibold text-[#00D98A]">Privacy Gecko</th>
                    <th scope="col" className="px-6 py-4 text-center font-semibold text-slate-600">Privacy Badger</th>
                    <th scope="col" className="px-6 py-4 text-center font-semibold text-slate-600">WeTransfer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-[#00D98A]/5">
                        {renderValue(row.privacyGecko)}
                      </td>
                      <td className="px-6 py-4 text-center">{renderValue(row.competitor1)}</td>
                      <td className="px-6 py-4 text-center">{renderValue(row.competitor2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-slate-500 text-center mt-6">
              We update this page regularly. Contact us if you spot an error.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-slate-900 text-center mb-12">
              What Makes Us Different
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  title: "Focused Products, Not a Bloated Suite",
                  desc: "Other companies spread thin across dozens of features. We build two products that do their jobs exceptionally well. GeckoAdvisor is the best privacy policy scanner. GeckoShare is the most private file sharing tool.",
                },
                {
                  title: "No Venture Capital, No Investor Pressure",
                  desc: "Privacy Gecko is bootstrapped. When investors demand growth, companies often compromise privacy. We answer to users, not shareholders.",
                },
                {
                  title: "Transparent Development & Pricing",
                  desc: "We build in public. Pricing is clear from day one. No hidden fees, no dark patterns, no \"enterprise contact us\" nonsense.",
                },
                {
                  title: "Free Tier Always Available",
                  desc: "Both products have generous free tiers. We believe privacy is a right, not a luxury. If you can pay for Pro, great — you help subsidize free users.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-slate-50 rounded-2xl p-8 border border-transparent hover:border-slate-200 transition-colors"
                >
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00D98A] flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-slate-600 ml-7">{item.desc}</p>
                </motion.div>
              ))}
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
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Ready to try Privacy Gecko?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Start with our free tier. No credit card required.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Explore our products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
