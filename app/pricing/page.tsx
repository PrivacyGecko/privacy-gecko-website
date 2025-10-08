"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/products";
import { CheckCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                      </div>
                      <div className="space-y-2">
                        {product.pricing.free.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tier */}
                    <div className="border-2 border-gecko-green rounded-lg p-6 bg-gecko-green/5">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-1">Pro</h4>
                        <p className="text-2xl font-bold">
                          {product.pricing.pro.price.split('/')[0]}
                          <span className="text-sm text-gray-500 font-normal">/month</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">Unlimited access + advanced features</p>
                      </div>
                      <div className="space-y-2">
                        {product.pricing.pro.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {product.status === "live" && (
                    <div className="mt-6">
                      <Button href={product.href} variant="outline" className="w-full">
                        View {product.name} Details
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
      <Section className="bg-gradient-to-r from-gecko-green to-gecko-blue text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Privacy Gecko Pro Bundle
            </h2>
            <div className="text-5xl font-bold mb-4">
              $24.99<span className="text-2xl font-normal">/month</span>
            </div>
            <p className="text-lg mb-2">
              Get Pro access to all 8 tools and save 30%
            </p>
            <p className="text-sm opacity-90 mb-8">
              Individual plans total $58.93/month - Bundle saves you $33.94/month
            </p>
            <Button href="#checkout" variant="outline" size="lg" className="bg-white text-gecko-green hover:bg-gray-100 border-white">
              Get Pro Bundle
            </Button>
            <p className="text-sm mt-4 opacity-90">
              💎 Coming Q2 2025: Save an additional 20% by staking $PRICKO tokens
            </p>
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
            <Button href="/contact" variant="primary" size="lg">
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
