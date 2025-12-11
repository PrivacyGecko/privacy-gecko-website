"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

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
    } catch {
      setSubscribeStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const posts = [
    {
      title: "GeckoCore Protocol Whitepaper v1.0: The Privacy Proof Layer for Solana",
      excerpt: "The GeckoCore Protocol Whitepaper v1.0 is officially live. Discover the Privacy Proof Layer for Solana with zero-knowledge proofs, 5 Privacy Feeds, and token economics.",
      date: "November 15, 2025",
      category: "Product Updates",
      slug: "geckocore-protocol-whitepaper-v1-launch",
      image: "/images/og-whitepaper.png",
      featured: true,
    },
    {
      title: "Introducing GeckoCore Protocol: The Hub for Privacy Tools",
      excerpt: "GeckoCore Protocol unifies 8 privacy tools with one wallet login powered by $PRICKO. Open-source, zero-knowledge, launching Q4 2026.",
      date: "November 14, 2025",
      category: "Product Updates",
      slug: "introducing-geckocore-protocol",
      image: "/images/og-geckocore-protocol.png",
    },
    {
      title: "Open Source Privacy Tools: Why It Matters",
      excerpt: "Why open source matters for privacy tools. Learn how transparency, community audits, and verifiable security make open source the gold standard.",
      date: "October 31, 2025",
      category: "Privacy Tips",
      slug: "open-source-privacy-tools",
      image: "/images/og-shell.png",
    },
    {
      title: "How Local AI Protects Your Privacy (vs Cloud AI)",
      excerpt: "Local AI vs cloud AI for privacy. Learn how on-device AI processing protects your data with federated learning and edge computing.",
      date: "October 3, 2025",
      category: "AI & Privacy",
      slug: "local-ai-privacy-protection",
      image: "/images/og-advisor.png",
    },
    {
      title: "Privacy Memecoins: Memes with a Mission Explained",
      excerpt: "What are privacy memecoins? Learn how $PRICKO and other privacy-focused tokens combine community fun with real privacy utility.",
      date: "September 12, 2025",
      category: "Token & Community",
      slug: "privacy-memecoins-explained",
      image: "/images/og-token.png",
    },
    {
      title: "Privacy Tools Every Crypto Trader Needs",
      excerpt: "Essential privacy tools for crypto traders in 2025. Learn how to protect your wallet, transactions, and identity.",
      date: "August 8, 2025",
      category: "Crypto Privacy",
      slug: "crypto-trader-privacy-tools",
      image: "/images/og-guard.png",
    },
    {
      title: "The Complete Guide to Privacy Tools in 2025",
      excerpt: "Discover the best privacy tools in 2025. Complete guide covering VPNs, password managers, ad blockers, and more.",
      date: "July 15, 2025",
      category: "Privacy Guide",
      slug: "complete-guide-privacy-tools-2025",
      image: "/images/og-products.png",
    },
    {
      title: "Why Privacy Tools Matter in 2025",
      excerpt: "Exploring the growing importance of digital privacy and why accessible privacy tools are more critical than ever.",
      date: "January 15, 2025",
      category: "Privacy Tips",
      slug: "why-privacy-tools-matter-2025",
      image: "/images/og-lock.png",
    },
    {
      title: "Getting Started with GeckoAdvisor",
      excerpt: "A complete guide to using GeckoAdvisor to scan website privacy policies and detect hidden trackers.",
      date: "January 10, 2025",
      category: "Tutorials",
      slug: "getting-started-geckoadvisor",
      image: "/images/og-advisor.png",
    },
    {
      title: "Introducing Privacy Gecko: Our Story",
      excerpt: "Learn about the mission behind Privacy Gecko and why we're building the privacy tools we wished existed.",
      date: "January 5, 2025",
      category: "Product Updates",
      slug: "introducing-privacy-gecko",
      image: "/images/og-products.png",
    },
  ];

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

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
              className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4"
            >
              Blog
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Privacy insights
              <br />
              <span className="text-blue-600">& updates</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Tips, tutorials, and news about digital privacy and our products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-slate-50 rounded-3xl overflow-hidden hover:bg-slate-100 transition-colors"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[400px] bg-slate-100">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500">{featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-semibold">
                      Read article
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-display font-bold text-slate-900 mb-10"
            >
              All articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4"
            >
              Newsletter
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6"
            >
              Stay updated
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 mb-10"
            >
              Get privacy tips, product updates, and exclusive insights delivered to your inbox.
            </motion.p>

            {subscribeStatus.type && (
              <motion.div
                variants={fadeUp}
                className={`p-4 rounded-xl mb-6 ${
                  subscribeStatus.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {subscribeStatus.message}
              </motion.div>
            )}

            <motion.form
              variants={fadeUp}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubscribing}
                className="flex-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg shadow-blue-600/25"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-500 mt-4"
            >
              We respect your privacy. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
