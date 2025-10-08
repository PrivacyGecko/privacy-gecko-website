"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpen, HelpCircle, Headphones, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation for all Privacy Gecko tools",
      href: "/resources/docs",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to common questions about our products and services",
      href: "/resources/faq",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Get help from our support team or browse community discussions",
      href: "/resources/support",
    },
    {
      icon: Activity,
      title: "Status",
      description: "Check the current status and uptime of all Privacy Gecko services",
      href: "/resources/status",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Resources"
        title="Everything You Need"
        description="Documentation, guides, support, and tools to help you get the most out of Privacy Gecko"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                    <resource.icon className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{resource.title}</CardTitle>
                  <CardDescription className="mb-4">{resource.description}</CardDescription>
                  <Button href={resource.href} variant="outline" className="w-full">
                    View {resource.title}
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-neutral-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/blog" className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <h3 className="font-semibold mb-1">Blog</h3>
              <p className="text-sm text-gray-600">Privacy tips and product updates</p>
            </a>
            <a href="/contact" className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <h3 className="font-semibold mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </a>
            <a href="/products" className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <h3 className="font-semibold mb-1">All Products</h3>
              <p className="text-sm text-gray-600">Browse our privacy toolkit</p>
            </a>
            <a href="/pricing" className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <h3 className="font-semibold mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Compare plans and pricing</p>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
