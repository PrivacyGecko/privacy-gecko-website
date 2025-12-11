"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Coins, TrendingUp, Users, Zap, Shield, Gift, Key, ShieldCheck, Grid3x3, ArrowRight, Check, Clock, Wallet, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function TokenPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Pro Discounts",
      description: "Hold $PRICKO to get discounts on all Pro subscriptions across all 8 products.",
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get exclusive early access to new products before public launch.",
    },
    {
      icon: Gift,
      title: "Premium Features",
      description: "Unlock exclusive features not available in standard Pro tiers.",
    },
    {
      icon: Users,
      title: "Governance Rights",
      description: "Vote on feature priorities and protocol decisions (launching 2027+).",
    },
    {
      icon: Shield,
      title: "Lifetime Benefits",
      description: "Token holders receive lifetime discounts and special perks.",
    },
    {
      icon: Coins,
      title: "Ecosystem Access",
      description: "Seamless access across all 8 Privacy Gecko products via GeckoCore.",
    },
  ];

  const tiers = [
    {
      amount: "1,000",
      name: "Starter",
      benefits: ["Pro plan discounts", "Early access notifications", "Community badge"],
      popular: false,
    },
    {
      amount: "5,000",
      name: "Enhanced",
      benefits: ["Larger Pro discounts", "Priority support", "Beta feature access", "Governance voting (2027+)"],
      popular: true,
    },
    {
      amount: "10,000+",
      name: "Premium",
      benefits: ["Maximum discounts", "Lifetime guarantee", "VIP support", "Full governance rights", "Exclusive features"],
      popular: false,
    },
  ];

  const steps = [
    { num: "01", title: "Acquire $PRICKO", desc: "Purchase tokens from supported exchanges" },
    { num: "02", title: "Connect Wallet", desc: "Link your Solana wallet to your account" },
    { num: "03", title: "Verify Holdings", desc: "GeckoCore verifies your token balance" },
    { num: "04", title: "Enjoy Benefits", desc: "Benefits apply automatically" },
  ];

  const faqs = [
    {
      q: "When will $PRICKO launch?",
      a: "The $PRICKO token is scheduled to launch in December 2025. Join our waitlist to be notified.",
    },
    {
      q: "What blockchain is $PRICKO on?",
      a: "$PRICKO is a Solana-based SPL token, chosen for fast transactions and low fees.",
    },
    {
      q: "How do I activate my benefits?",
      a: "Simply hold tokens in your wallet and connect to GeckoCore. Benefits activate automatically.",
    },
    {
      q: "Do benefits apply to existing subscriptions?",
      a: "Yes! Benefits apply starting from your next billing cycle after connecting.",
    },
    {
      q: "Do I need to lock my tokens?",
      a: "No. Benefits are based on current holdings. You maintain full custody and can transfer anytime.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">$PRICKO Token</span>
            </motion.div>

            {/* Launch badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Launching December 2025
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
              style={{ lineHeight: '1.1' }}
            >
              The utility token
              <br />
              <span className="text-blue-600">powering privacy.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Hold $PRICKO to unlock discounts, early access, and governance rights across
              the entire Privacy Gecko ecosystem.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?subject=PRICKO%20Token%20Waitlist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-600/25"
              >
                <Wallet className="w-4 h-4" />
                Join Token Waitlist
              </Link>
              <Link
                href="/geckocore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Learn about GeckoCore
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Stats Strip */}
      <section className="py-8 border-y border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">1B</p>
              <p className="text-sm text-slate-500 mt-1">Total Supply</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">SOL</p>
              <p className="text-sm text-slate-500 mt-1">Blockchain</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">8</p>
              <p className="text-sm text-slate-500 mt-1">Products</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-blue-600">Dec '25</p>
              <p className="text-sm text-slate-500 mt-1">Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is $PRICKO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                About the Token
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-6">
                What is $PRICKO?
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  $PRICKO is the official utility token of the Privacy Gecko ecosystem. By holding tokens,
                  you unlock significant benefits including discounts on Pro subscriptions, early access
                  to new products, and governance rights through GeckoCore Protocol.
                </p>
                <p>
                  Unlike traditional subscription models, $PRICKO creates a sustainable ecosystem where
                  early supporters are rewarded with lifetime benefits. Token holders help shape the
                  project's direction through decentralized governance.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Token Utility</h3>
              <div className="space-y-4">
                {[
                  { label: "Product Access", desc: "Premium features across all 8 products" },
                  { label: "Protocol Fees", desc: "Developers pay $PRICKO for API queries" },
                  { label: "Validator Staking", desc: "Stake 100K+ to verify proofs and earn" },
                  { label: "Governance", desc: "Vote on protocol parameters and upgrades" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Token Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-6">
                Why hold $PRICKO?
              </h2>
              <p className="text-xl text-slate-600">
                Unlock exclusive perks and savings across the entire ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Token Tiers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Holder Tiers
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-6">
                More tokens, more benefits
              </h2>
              <p className="text-xl text-slate-600">
                Choose your tier based on how much you want to participate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`relative rounded-2xl p-8 ${
                    tier.popular
                      ? "bg-blue-600 text-white ring-4 ring-blue-600/20"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <p className={`text-sm font-medium mb-2 ${tier.popular ? "text-blue-200" : "text-slate-500"}`}>
                      Hold
                    </p>
                    <p className={`text-4xl font-display font-bold mb-1 ${tier.popular ? "text-white" : "text-slate-900"}`}>
                      {tier.amount}
                    </p>
                    <p className={`text-sm ${tier.popular ? "text-blue-200" : "text-slate-500"}`}>
                      $PRICKO
                    </p>
                  </div>

                  <div className={`text-center py-3 rounded-lg mb-6 ${
                    tier.popular ? "bg-white/10" : "bg-blue-50"
                  }`}>
                    <p className={`font-semibold ${tier.popular ? "text-white" : "text-blue-600"}`}>
                      {tier.name} Benefits
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-blue-200" : "text-blue-600"}`} />
                        <span className={`text-sm ${tier.popular ? "text-blue-100" : "text-slate-600"}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
                Getting Started
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-6">
                How it works
              </h2>
              <p className="text-xl text-slate-600">
                Four simple steps to start unlocking benefits.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Common questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <h3 className="font-display font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-700">
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
              Ready to join the ecosystem?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
            >
              Get early access to $PRICKO and be the first to unlock premium benefits.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact?subject=PRICKO%20Token%20Waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02]"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/geckocore"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white"
              >
                Learn about GeckoCore
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
