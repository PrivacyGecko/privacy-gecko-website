"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Privacy Gecko?",
          a: "Privacy Gecko offers two focused privacy tools: GeckoAdvisor (privacy policy scanner) and GeckoShare (encrypted file sharing), designed to protect your digital privacy.",
        },
        {
          q: "Are your tools really free?",
          a: "Yes! Every tool has a generous free tier with no credit card required. You can upgrade to Pro for advanced features when needed.",
        },
        {
          q: "Is Privacy Gecko open source?",
          a: "We're committed to open source transparency. Our website is already open source. Product code is released after security audits. Sign up for our newsletter to be notified when product repositories go public.",
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
      category: "Products",
      questions: [
        {
          q: "What does GeckoAdvisor do?",
          a: "GeckoAdvisor scans any website's privacy policy and gives you a clear risk score. It detects hidden trackers, checks GDPR/CCPA compliance, and provides actionable recommendations—all in plain language.",
        },
        {
          q: "Is GeckoShare really encrypted?",
          a: "Yes. GeckoShare uses 256-bit AES end-to-end encryption. Files are encrypted in your browser before upload. We never see or store unencrypted content.",
        },
        {
          q: "Can I use products without creating an account?",
          a: "GeckoShare works without any account. GeckoAdvisor's free tier requires a simple email signup to track your scan history. No credit card needed.",
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
          q: "Who funds Privacy Gecko? Any investors?",
          a: "Privacy Gecko is currently bootstrapped. We have taken no venture capital and have no external investors. Our business model: free tiers supported by optional Pro subscriptions. We will never take funding from companies that sell user data, accept acquisition offers from data brokers, or compromise privacy to satisfy investor growth demands.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards through Stripe. Your payment information is processed securely and we never store your full card details.",
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

      <Section className="bg-gradient-to-b from-white via-gray-50 to-white">
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

      <FAQSchema
        faqs={faqs.flatMap(category =>
          category.questions.map(q => ({ question: q.q, answer: q.a }))
        )}
      />
    </>
  );
}
