"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Share2, ArrowRight, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function PricingPage() {
  const plans = [
    {
      product: "GeckoAdvisor",
      icon: Shield,
      tagline: "Privacy policy scanner for compliance teams",
      href: "https://geckoadvisor.com",
      tiers: [
        {
          name: "Free",
          price: "$0",
          period: "forever",
          highlight: false,
          limit: "3 scans per month",
          features: [
            "Basic privacy report",
            "Website policy scanning",
            "Privacy score",
            "GDPR flag detection",
          ],
          cta: "Start free",
        },
        {
          name: "Pro",
          price: "$4.99",
          period: "/month",
          highlight: true,
          limit: "Unlimited scans",
          features: [
            "Everything in Free",
            "Detailed compliance reports",
            "Priority alerts",
            "Advanced recommendations",
            "Historical tracking",
            "Export reports (PDF/CSV)",
          ],
          cta: "Start free trial",
        },
      ],
    },
    {
      product: "GeckoShare",
      icon: Share2,
      tagline: "Encrypted file sharing for sensitive documents",
      href: "https://geckoshare.com",
      tiers: [
        {
          name: "Free",
          price: "$0",
          period: "forever",
          highlight: false,
          limit: "100MB per file, 24hr expiry",
          features: [
            "End-to-end encryption",
            "Basic sharing links",
            "Password protection",
            "No registration required",
          ],
          cta: "Start free",
        },
        {
          name: "Pro",
          price: "$7.99",
          period: "/month",
          highlight: true,
          limit: "5GB per file, custom expiry",
          features: [
            "Everything in Free",
            "Custom expiration times",
            "Branded sharing links",
            "Advanced analytics",
            "Audit logs & access tracking",
            "Priority support",
          ],
          cta: "Start free trial",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-[#00D98A] mb-4"
            >
              Pricing
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Simple, transparent
              <br />
              <span className="text-[#00D98A]">pricing</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Both products have generous free tiers. No credit card required.
              Upgrade when you need more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      {plans.map((plan, planIndex) => (
        <section
          key={plan.product}
          className={`py-16 md:py-20 ${planIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {/* Product Header */}
              <motion.div variants={fadeUp} className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#00D98A]/10 rounded-xl flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-[#00D98A]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                    {plan.product}
                  </h2>
                </div>
                <p className="text-slate-600">{plan.tagline}</p>
              </motion.div>

              {/* Tier Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plan.tiers.map((tier) => (
                  <motion.div
                    key={tier.name}
                    variants={fadeUp}
                    className={`relative rounded-2xl p-8 border transition-all ${
                      tier.highlight
                        ? "bg-white border-[#00D98A] shadow-lg shadow-emerald-100/50"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00D98A] text-white text-xs font-semibold">
                          <Zap className="w-3 h-3" />
                          Most popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-display font-bold text-slate-900">
                          {tier.price}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {tier.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">{tier.limit}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00D98A] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={plan.href}
                      className={`block w-full text-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                        tier.highlight
                          ? "bg-[#00D98A] text-white hover:bg-[#00B876] shadow-md shadow-emerald-200/50 hover:shadow-lg"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* FAQ-style section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 text-center mb-12"
            >
              Common questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do I need a credit card to start?",
                  a: "No. Both products have free tiers that require no payment information. You can use them immediately.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. Cancel your Pro subscription at any time. You'll retain access until the end of your billing period, then revert to the free tier.",
                },
                {
                  q: "Is there a team or enterprise plan?",
                  a: "We're building enterprise plans with volume pricing, SSO, and dedicated support. Contact us for early access.",
                },
                {
                  q: "What happens to my data if I downgrade?",
                  a: "Your data stays safe. On the free tier you'll have limited scans or file sizes, but nothing is deleted.",
                },
              ].map((item) => (
                <motion.div
                  key={item.q}
                  variants={fadeUp}
                  className="bg-slate-50 rounded-2xl p-6 border border-transparent hover:border-slate-200 transition-colors"
                >
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-slate-600">{item.a}</p>
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
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6"
            >
              Start protecting your privacy today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            >
              No credit card required. Free tier available on both products.
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
                href="https://geckoshare.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-slate-600 transition-all duration-300 hover:border-[#00D98A] hover:text-[#00D98A] hover:scale-[1.02]"
              >
                Try GeckoShare free
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
