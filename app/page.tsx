"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { ProductCard } from "@/components/product/ProductCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { Shield, Zap, Code, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Privacy Tools That Actually Work."
        description="8 open-source tools. No tracking. No data selling. Take back control of your digital privacy."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/products/advisor" variant="primary" size="lg">
            Try GeckoAdvisor Free
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Explore All Products
          </Button>
        </div>
      </Hero>

      {/* Product Showcase */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Our Ecosystem"
          title="Complete Privacy Toolkit"
          description="8 powerful tools to protect your privacy across all aspects of your digital life"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
              comingDate={product.comingDate}
              href={product.href}
              isExternal={product.isExternal}
              features={product.features.slice(0, 3)}
            />
          ))}
        </div>
      </Section>

      {/* Why Privacy Gecko */}
      <Section>
        <SectionHeader
          subtitle="Why Choose Us"
          title="Privacy-First, Always"
          description="We're building the tools we wished existed. Open, transparent, and actually private."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Complete Ecosystem</CardTitle>
                <CardDescription>
                  8 integrated tools covering every aspect of your digital privacy needs
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Free Tier Always</CardTitle>
                <CardDescription>
                  Every tool has a generous free tier. No credit card required to start
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Code className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Transparent code you can audit. No hidden trackers or backdoors
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Lock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Privacy-First</CardTitle>
                <CardDescription>
                  We don't track, sell, or monetize your data. Ever. That's our promise
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Getting Started"
          title="How It Works"
          description="Start protecting your privacy in three simple steps"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gecko-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Choose Your Tool</h3>
            <p className="text-gray-600">
              Browse our ecosystem and pick the privacy tool that fits your needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gecko-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Use Free or Pro</h3>
            <p className="text-gray-600">
              Start with our generous free tier or unlock premium features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gecko-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Upgrade When Ready</h3>
            <p className="text-gray-600">
              Scale up as your privacy needs grow with flexible pricing
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <SectionHeader
          title="Trusted by Privacy-Conscious Users Worldwide"
          description="Join thousands who have taken back control of their digital privacy"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-gecko-green mb-2">500+</div>
            <p className="text-gray-600">Users Protected</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-gecko-green mb-2">10,000+</div>
            <p className="text-gray-600">Files Shared Securely</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-gecko-green mb-2">99.9%</div>
            <p className="text-gray-600">Uptime</p>
          </motion.div>
        </div>
      </Section>

      {/* Token Bridge Section */}
      <Section className="bg-gradient-to-r from-gecko-green to-gecko-blue text-white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Powered by $PRICKO
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Stake $PRICKO tokens to unlock discounts, premium features, and early access to new tools
            </p>
            <a
              href="https://pricko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2 bg-white text-gecko-green hover:bg-gray-100 border-white focus:ring-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
            >
              Learn About $PRICKO <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Take Back Your Privacy?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start with any of our tools today. No credit card required for free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products/advisor" variant="primary" size="lg">
                Try GeckoAdvisor Free
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                View All Products
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
