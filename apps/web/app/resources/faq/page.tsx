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
          a: "Privacy Gecko is an ecosystem of 8 privacy-focused tools designed to protect your digital privacy across all aspects of your online life.",
        },
        {
          q: "Are your tools really free?",
          a: "Yes! Every tool has a generous free tier with no credit card required. You can upgrade to Pro for advanced features when needed.",
        },
        {
          q: "Is Privacy Gecko open source?",
          a: "We're committed to open source transparency. Core privacy features are currently in security audit before public release (Q4 2025 - Q1 2026). Our website is already open source. Sign up for our newsletter to be notified when product repositories go public.",
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
      category: "AI Features",
      questions: [
        {
          q: "How is Privacy Gecko's AI different from other AI tools?",
          a: "Most AI tools send your data to the cloud for processing. Ours runs locally on your device. Your data never leaves your computer. It's privacy-first AI—something that's rarely done right.",
        },
        {
          q: "Will AI features cost extra?",
          a: "Free tier gets limited AI queries per month (e.g., 50 scans). Pro subscribers get unlimited AI access across all products.",
        },
        {
          q: "Can I use products without AI?",
          a: "Absolutely! AI is an enhancement, not a requirement. All core privacy features work with AI disabled. You're always in control.",
        },
        {
          q: "Does the AI learn from my data?",
          a: "Only if you opt in, and only through privacy-preserving federated learning. Your raw data never leaves your device. Only encrypted, anonymized patterns are shared to improve community protection.",
        },
        {
          q: "What if I don't trust AI?",
          a: "Good! Skepticism is healthy. That's why we're open-sourcing our AI models, publishing audits, and giving you complete control. You can verify everything we claim.",
        },
        {
          q: "How do you prevent AI bias?",
          a: "We train on diverse, public datasets. Community governance reviews training data. Open source models allow external bias auditing.",
        },
        {
          q: "Can AI make mistakes?",
          a: "Yes. That's why AI suggests, you decide. We never automatically block or unblock based purely on AI. Human override always available.",
        },
        {
          q: "Will AI replace human privacy experts?",
          a: "No. AI enhances human judgment, doesn't replace it. Think of it as a very fast research assistant, not a decision-maker.",
        },
        {
          q: "What AI models do you use?",
          a: "Privacy scanning: Custom transformer models (similar to BERT). Threat detection: Ensemble classifiers + anomaly detection. Summarization: Fine-tuned GPT-style models (local inference). All models optimized for on-device performance.",
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
