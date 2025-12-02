
"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
      title: "GeckoCore Protocol Whitepaper v1.0: The Privacy Proof Layer for Solana",
      excerpt: "The GeckoCore Protocol Whitepaper v1.0 is officially live. Discover the Privacy Proof Layer for Solana with zero-knowledge proofs, 5 Privacy Feeds, and token economics.",
      author: "@0xAnonA",
      date: "November 15, 2025",
      category: "Product Updates",
      slug: "geckocore-protocol-whitepaper-v1-launch",
      image: "/images/og-whitepaper.png",
    },
    {
      title: "Introducing GeckoCore Protocol: The Hub for Privacy Tools",
      excerpt: "GeckoCore Protocol unifies 8 privacy tools with one wallet login powered by $PRICKO. Open-source, zero-knowledge, launching Q4 2026. Learn how it works.",
      author: "@0xAnonA",
      date: "November 14, 2025",
      category: "Product Updates",
      slug: "introducing-geckocore-protocol",
      image: "/images/og-geckocore-protocol.png",
    },
    {
      title: "Open Source Privacy Tools: Why It Matters",
      excerpt: "Why open source matters for privacy tools. Learn how transparency, community audits, and verifiable security make open source the gold standard.",
      author: "@0xAnonA",
      date: "October 31, 2025",
      category: "Privacy Tips",
      slug: "open-source-privacy-tools",
      image: "/images/og-shell.png",
    },
    {
      title: "How Local AI Protects Your Privacy (vs Cloud AI)",
      excerpt: "Local AI vs cloud AI for privacy. Learn how on-device AI processing protects your data with federated learning and edge computing in 2025.",
      author: "@0xAnonA",
      date: "October 3, 2025",
      category: "AI & Privacy",
      slug: "local-ai-privacy-protection",
      image: "/images/og-advisor.png",
    },
    {
      title: "Privacy Memecoins: Memes with a Mission Explained",
      excerpt: "What are privacy memecoins? Learn how $PRICKO and other privacy-focused tokens combine community fun with real privacy utility and sustainable funding.",
      author: "@0xAnonA",
      date: "September 12, 2025",
      category: "Token & Community",
      slug: "privacy-memecoins-explained",
      image: "/images/og-token.png",
    },
    {
      title: "Privacy Tools Every Crypto Trader Needs",
      excerpt: "Essential privacy tools for crypto traders in 2025. Learn how to protect your wallet, transactions, and identity with VPNs, browsers, and privacy-focused tools.",
      author: "@0xAnonA",
      date: "August 8, 2025",
      category: "Crypto Privacy",
      slug: "crypto-trader-privacy-tools",
      image: "/images/og-guard.png",
    },
    {
      title: "The Complete Guide to Privacy Tools in 2025",
      excerpt: "Discover the best privacy tools in 2025. Complete guide covering VPNs, password managers, ad blockers, encrypted messaging, and more to protect your digital privacy.",
      author: "@0xAnonA",
      date: "July 15, 2025",
      category: "Privacy Guide",
      slug: "complete-guide-privacy-tools-2025",
      image: "/images/og-products.png",
    },
    {
      title: "Why Privacy Tools Matter in 2025",
      excerpt: "Exploring the growing importance of digital privacy and why accessible privacy tools are more critical than ever.",
      author: "@0xAnonA",
      date: "January 15, 2025",
      category: "Privacy Tips",
      slug: "why-privacy-tools-matter-2025",
      image: "/images/og-lock.png",
    },
    {
      title: "Getting Started with GeckoAdvisor",
      excerpt: "A complete guide to using GeckoAdvisor to scan website privacy policies and detect hidden trackers.",
      author: "@0xAnonA",
      date: "January 10, 2025",
      category: "Tutorials",
      slug: "getting-started-geckoadvisor",
      image: "/images/og-advisor.png",
    },
    {
      title: "Introducing Privacy Gecko: Our Story",
      excerpt: "Learn about the mission behind Privacy Gecko and why we're building the privacy tools we wished existed.",
      author: "@0xAnonA",
      date: "January 5, 2025",
      category: "Product Updates",
      slug: "introducing-privacy-gecko",
      image: "/images/og-products.png",
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
              <a href={`/blog/${post.slug}`} className="block">
                <Card>
                  <div className="md:flex md:gap-6">
                    {/* Image Section */}
                    <div className="md:w-80 md:flex-shrink-0">
                      <div className="relative w-full h-48 md:h-full md:min-h-[200px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-gecko-green mb-2">
                          <span className="font-semibold">{post.category}</span>
                        </div>
                        <CardTitle className="text-2xl mb-3 hover:text-gecko-green transition-colors">
                          {post.title}
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
                          <span className="text-gecko-green flex items-center gap-1 text-sm font-medium">
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardHeader>
                    </div>
                  </div>
                </Card>
              </a>
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
