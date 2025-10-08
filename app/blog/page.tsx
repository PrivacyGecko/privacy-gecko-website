"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
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
      excerpt: "A complete guide to using GeckoAdvisor to audit your device's privacy and security posture.",
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

      <Section>
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
      <Section className="bg-neutral-100">
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
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
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
