
"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus({
          type: "success",
          message: data.message || "Successfully subscribed!",
        });
        setNewsletterEmail("");
      } else {
        setSubscribeStatus({
          type: "error",
          message: data.error || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      setSubscribeStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  // All blog posts in reverse chronological order (newest first)
  const posts = [
    {
      title: "Open Source Privacy Tools: Why It Matters",
      excerpt: "Why open source matters for privacy tools. Learn how transparency, community audits, and verifiable security make open source the gold standard.",
      author: "@0xAnonA",
      date: "October 31, 2025",
      category: "Privacy Tips",
      slug: "open-source-privacy-tools",
    },
    {
      title: "How Local AI Protects Your Privacy (vs Cloud AI)",
      excerpt: "Local AI vs cloud AI for privacy. Learn how on-device AI processing protects your data with federated learning and edge computing in 2025.",
      author: "@0xAnonA",
      date: "October 3, 2025",
      category: "AI & Privacy",
      slug: "local-ai-privacy-protection",
    },
    {
      title: "Privacy Memecoins: Memes with a Mission Explained",
      excerpt: "What are privacy memecoins? Learn how $PRICKO and other privacy-focused tokens combine community fun with real privacy utility and sustainable funding.",
      author: "@0xAnonA",
      date: "September 12, 2025",
      category: "Token & Community",
      slug: "privacy-memecoins-explained",
    },
    {
      title: "Privacy Tools Every Crypto Trader Needs",
      excerpt: "Essential privacy tools for crypto traders in 2025. Learn how to protect your wallet, transactions, and identity with VPNs, browsers, and privacy-focused tools.",
      author: "@0xAnonA",
      date: "August 8, 2025",
      category: "Crypto Privacy",
      slug: "crypto-trader-privacy-tools",
    },
    {
      title: "The Complete Guide to Privacy Tools in 2025",
      excerpt: "Discover the best privacy tools in 2025. Complete guide covering VPNs, password managers, ad blockers, encrypted messaging, and more to protect your digital privacy.",
      author: "@0xAnonA",
      date: "July 15, 2025",
      category: "Privacy Guide",
      slug: "complete-guide-privacy-tools-2025",
    },
    {
      title: "Why Privacy Tools Matter in 2025",
      excerpt: "Exploring the growing importance of digital privacy and why accessible privacy tools are more critical than ever.",
      author: "@0xAnonA",
      date: "January 15, 2025",
      category: "Privacy Tips",
      slug: "why-privacy-tools-matter-2025",
    },
    {
      title: "Getting Started with GeckoAdvisor",
      excerpt: "A complete guide to using GeckoAdvisor to scan website privacy policies and detect hidden trackers.",
      author: "@0xAnonA",
      date: "January 10, 2025",
      category: "Tutorials",
      slug: "getting-started-geckoadvisor",
    },
    {
      title: "Introducing Privacy Gecko: Our Story",
      excerpt: "Learn about the mission behind Privacy Gecko and why we're building the privacy tools we wished existed.",
      author: "@0xAnonA",
      date: "January 5, 2025",
      category: "Product Updates",
      slug: "introducing-privacy-gecko",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Blog"
        title="Privacy Insights & Updates"
        description="Tips, tutorials, and news about digital privacy and our products"
      />

      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gecko-green mb-2">
                    <span className="font-semibold">{post.category}</span>
                  </div>
                  <CardTitle className="text-2xl mb-3">
                    <a href={`/blog/${post.slug}`} className="hover:text-gecko-green transition-colors">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-gecko-green hover:underline flex items-center gap-1 text-sm font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Get privacy tips, product updates, and exclusive insights delivered to your inbox
            </p>

            {subscribeStatus.type && (
              <div
                className={`p-4 rounded-lg mb-4 max-w-md mx-auto ${
                  subscribeStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {subscribeStatus.message}
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubscribing}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all disabled:opacity-50"
              />
              <Button type="submit" variant="primary" size="md" disabled={isSubscribing}>
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
