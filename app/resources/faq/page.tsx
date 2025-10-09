"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Privacy Gecko?",
          a: "Privacy Gecko is an ecosystem of 8 privacy-focused tools designed to protect your digital privacy across all aspects of your online life.",
        },
        {
          q: "Are your tools really free?",
          a: "Yes! Every tool has a generous free tier with no credit card required. You can upgrade to Pro for advanced features when needed.",
        },
        {
          q: "Is Privacy Gecko open source?",
          a: "We're committed to open source transparency. Core privacy features are currently in security audit before public release (Q4 2025). Our website is already open source. Sign up for our newsletter to be notified when product repositories go public.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Do you collect any data?",
          a: "We only collect anonymized usage statistics to improve our products. We never sell your data or track your personal information.",
        },
        {
          q: "How do you make money if it's free?",
          a: "We offer Pro tiers with advanced features. Those who can afford to pay help subsidize free access for everyone else.",
        },
        {
          q: "Is my data encrypted?",
          a: "Yes. Tools like GeckoShare use end-to-end encryption. We can't access your data even if we wanted to.",
        },
      ],
    },
    {
      category: "Billing & Subscriptions",
      questions: [
        {
          q: "Can I cancel anytime?",
          a: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.",
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, we offer a 30-day money-back guarantee on all Pro plans. No questions asked.",
        },
        {
          q: "What's the $PRICKO token integration?",
          a: "Coming Q4 2025, you'll be able to stake $PRICKO tokens to get discounts on Pro plans and early access to new features.",
        },
      ],
    },
  ];

  return (
    <>
      <Hero
        subtitle="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about Privacy Gecko"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={category.category}>
              <h2 className="text-2xl font-display font-bold mb-6 text-gecko-green">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
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
                            <CardTitle className="text-lg mb-2">{faq.q}</CardTitle>
                            <CardDescription>{faq.a}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
