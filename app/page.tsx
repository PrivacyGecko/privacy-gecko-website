"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { ProductCard } from "@/components/product/ProductCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
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
        description="3 live privacy tools you can use today, plus 5 more launching Q4 2025. Open source roadmap. No tracking. No data selling. Take back control of your digital privacy."
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

      {/* Early Adopter Discount Banner */}
      <Section className="bg-gradient-to-r from-gecko-green to-gecko-blue text-white py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl font-semibold mb-4">
            🎉 Early Adopter Special: Lock in 20% off for life on all upcoming privacy tools
          </p>
          <Button href="/roadmap" variant="outline" className="bg-white text-gecko-green hover:bg-gray-100 border-white">
            View Roadmap & Join Waitlist →
          </Button>
        </motion.div>
      </Section>

      {/* Product Showcase */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Our Ecosystem"
          title="Complete Privacy Toolkit"
          description="8 powerful tools to protect your privacy across all aspects of your digital life. 3 available today, 5 launching Q4 2025."
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
              progress={product.progress}
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
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
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
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
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
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Code className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Open Development</CardTitle>
                <CardDescription>
                  Committed to transparency. Website is open source, product code coming Q4 2025
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
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

      {/* Trust Section - Replaced unverified stats with honest messaging */}
      <Section>
        <SectionHeader
          title="Join Us in Building Better Privacy Tools"
          description="Privacy Gecko launched in January 2025. We're an early-stage project building privacy tools the right way—transparent, honest, and community-driven. No fake stats. No inflated user counts. Just solid tools and straight talk."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4 mx-auto">
              <Shield className="w-8 h-8 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Tracking</h3>
            <p className="text-gray-600">Privacy-first analytics via Plausible. We practice what we preach.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4 mx-auto">
              <Lock className="w-8 h-8 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Data Selling</h3>
            <p className="text-gray-600">Your data is never sold. Our business model is subscriptions, not surveillance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4 mx-auto">
              <CheckCircle className="w-8 h-8 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transparent</h3>
            <p className="text-gray-600">Clear privacy policies. No hidden clauses. Working toward full open source.</p>
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
              Powered by $PRICKO (Optional)
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Stake tokens for discounts and governance rights. All tools work fully without any token requirement.
            </p>
            <ExternalLink
              href="https://pricko.com"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2 bg-white text-gecko-green hover:bg-gray-100 border-white focus:ring-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
              showIcon={false}
            >
              Learn About $PRICKO <ArrowRight className="ml-2 w-4 h-4" />
            </ExternalLink>
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
