"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { products } from "@/lib/products";
import { CheckCircle, HelpCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const bundlePricing = {
    monthly: { price: 24.99, total: 58.93, savings: 33.94 },
    yearly: { price: 19.99, total: 47.14, savings: 27.15, yearlyTotal: 239.88 }
  };

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll pro-rate any billing differences.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) through Stripe. Coming soon: $PRICKO token payments with exclusive discounts.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all Pro plans. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time. You'll retain access until the end of your billing period, and your data won't be deleted.",
    },
    {
      question: "What happens with the $PRICKO token integration?",
      answer: "Coming Q2 2025: Stake $PRICKO tokens to get 20-50% discounts on Pro plans, plus early access to new tools and exclusive features.",
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer: "Yes! Contact us for custom team pricing with centralized billing, admin controls, and dedicated support.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Pricing"
        title="Choose Your Privacy Level"
        description="Every tool has a generous free tier. Upgrade to Pro for unlimited access and advanced features."
      />

      {/* Jump Links */}
      <Section className="bg-neutral-100 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 mb-3 font-semibold">Jump to:</p>
          <div className="flex flex-wrap gap-3">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gecko-green hover:bg-gecko-green hover:text-white transition-all border border-gecko-green"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(product.id)?.scrollIntoView({ behavior: 'smooth' });
                  // Track event
                  if (typeof window !== 'undefined' && (window as any).plausible) {
                    (window as any).plausible('Jump Link Click', { props: { product: product.name } });
                  }
                }}
              >
                {product.name}
              </a>
            ))}
            <a
              href="#bundle"
              className="px-4 py-2 bg-gecko-green text-white rounded-lg text-sm font-medium hover:bg-gecko-green/90 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('bundle')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pro Bundle
            </a>
          </div>
        </div>
      </Section>

      {/* Currency & Tax Notice */}
      <Section className="py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-2 text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Pricing Information</p>
              <p>All prices shown in USD. Taxes may apply based on your location. We also accept INR payments - contact sales for INR pricing.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Pricing Grid */}
      <Section>
        <SectionHeader
          title="Pricing by Product"
          description="Compare Free vs Pro for each privacy tool"
        />
        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="scroll-mt-24"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <product.icon className="w-6 h-6 text-gecko-green" />
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <Badge variant={product.status}>
                          {product.status === "live" ? "Live" : product.comingDate}
                        </Badge>
                      </div>
                      <CardDescription>{product.tagline}</CardDescription>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Free Tier */}
                    <div className="border-2 border-gray-200 rounded-lg p-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-1">Free</h4>
                        <p className="text-2xl font-bold">$0<span className="text-sm text-gray-500 font-normal">/month</span></p>
                        <p className="text-sm text-gray-600 mt-2">{product.pricing.free.limit}</p>
                        <p className="text-xs text-gecko-green mt-2 font-semibold">✓ No credit card required</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        {product.pricing.free.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {product.status === "live" && (
                        <Button href={product.href} variant="outline" className="w-full">
                          Get Started Free
                        </Button>
                      )}
                    </div>

                    {/* Pro Tier */}
                    <div className="border-2 border-gecko-green rounded-lg p-6 bg-gecko-green/5 relative">
                      <div className="absolute -top-3 right-4">
                        <Badge variant="live">Popular</Badge>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-1">Pro</h4>
                        <p className="text-2xl font-bold">
                          {product.pricing.pro.price.split('/')[0]}
                          <span className="text-sm text-gray-500 font-normal">/month</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">Unlimited access + advanced features</p>
                        <p className="text-xs text-gray-500 mt-2">✓ Cancel anytime • 30-day money-back guarantee</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        {product.pricing.pro.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {product.status === "live" ? (
                        <CheckoutButton
                          priceId={`price_${product.id}_pro_monthly`}
                          productName={`${product.name} Pro`}
                          variant="primary"
                          className="w-full"
                        >
                          Start Pro
                        </CheckoutButton>
                      ) : (
                        <Button variant="ghost" className="w-full" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>

                  {product.status === "live" && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Button href={product.href} variant="ghost" className="w-full">
                        View {product.name} Full Details →
                      </Button>
                    </div>
                  )}
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bundle Pricing */}
      <Section id="bundle" className="bg-gradient-to-r from-gecko-green to-gecko-blue text-white scroll-mt-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Privacy Gecko Pro Bundle
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Get Pro access to all 8 tools and save big
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-1 mb-6">
              <button
                onClick={() => {
                  setBillingCycle("monthly");
                  if (typeof window !== 'undefined' && (window as any).plausible) {
                    (window as any).plausible('Billing Toggle', { props: { cycle: 'monthly' } });
                  }
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-gecko-green"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  setBillingCycle("yearly");
                  if (typeof window !== 'undefined' && (window as any).plausible) {
                    (window as any).plausible('Billing Toggle', { props: { cycle: 'yearly' } });
                  }
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-white text-gecko-green"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Pricing Display */}
            <div className="text-5xl font-bold mb-2">
              ${billingCycle === "monthly" ? bundlePricing.monthly.price : bundlePricing.yearly.price}
              <span className="text-2xl font-normal">/month</span>
            </div>
            {billingCycle === "yearly" && (
              <p className="text-sm opacity-90 mb-4">
                ${bundlePricing.yearly.yearlyTotal}/year billed annually
              </p>
            )}
            <p className="text-lg mb-2">
              Individual plans total ${billingCycle === "monthly" ? bundlePricing.monthly.total : bundlePricing.yearly.total}/month
            </p>
            <p className="text-sm opacity-90 mb-8">
              Bundle saves you ${billingCycle === "monthly" ? bundlePricing.monthly.savings : bundlePricing.yearly.savings}/month
              {billingCycle === "yearly" && " (30% off)"}
            </p>

            {/* Bundle Includes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold mb-4 text-center">Bundle Includes:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {products.slice(0, 8).map((product) => (
                  <div key={product.id} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <CheckoutButton
              priceId={billingCycle === "monthly" ? "price_bundle_monthly" : "price_bundle_yearly"}
              productName="Privacy Gecko Pro Bundle"
              variant="outline"
              size="lg"
              className="bg-white text-gecko-green hover:bg-gray-100 border-white"
            >
              Get Pro Bundle {billingCycle === "yearly" && "- Save 30%"}
            </CheckoutButton>

            <p className="text-xs mt-4 opacity-75">
              ✓ Cancel anytime • 30-day money-back guarantee • No credit card required for free tier
            </p>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm opacity-90 mb-2">
                💎 Coming Q2 2025: <a href="https://pricko.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-semibold">Stake $PRICKO tokens</a> for an additional 20% discount
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card hover={false}>
                <CardHeader>
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-gecko-green mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <CardDescription className="mt-2">{faq.answer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-neutral-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Contact our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact?subject=Pricing%20Question"
              variant="primary"
              size="lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).plausible) {
                  (window as any).plausible('Contact Sales', { props: { source: 'pricing' } });
                }
              }}
            >
              Contact Sales
            </Button>
            <Button href="/products" variant="ghost" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
