"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { AIDifference } from "@/components/sections/AIDifference";
import { ProductCard } from "@/components/product/ProductCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { products } from "@/lib/products";
import { Shield, Zap, Code, Lock, ArrowRight, CheckCircle, Users, Star, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  return (
    <>

      {/* Hero Section - v1.3: Infrastructure Vision with Honest Timelines */}
      <Hero
        subtitle="Privacy Protection for the Modern Internet"
        title={
          <>
            Growing Privacy Ecosystem.
            <br />
            AI-Enhancement Coming 2026.
          </>
        }
        description={
          <>
            A growing ecosystem of privacy tools built on the{" "}
            <span className="text-gecko-green font-semibold">GeckoCore Protocol</span> —{" "}
            <strong>4 products live today, 4 more launching through 2026</strong>, with
            continuous innovation as new privacy threats emerge. Start with generous{" "}
            <span className="text-gecko-green font-semibold">free tiers</span>, upgrade when ready.
          </>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/products" variant="primary" size="lg">
            Explore Privacy Tools
          </Button>
          <Button href="/contact?subject=Early%20Adopter%20Waitlist" variant="outline" size="lg">
            Join Early Access
          </Button>
        </div>
      </Hero>

      {/* GeckoCore Protocol Teaser */}
      <Section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden pt-24 md:pt-32">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gecko-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-privacy-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="coming" className="mb-4">Coming 2026</Badge>
          <SectionHeader
            title="Introducing GeckoCore Protocol"
            subtitle="Extensible Privacy Infrastructure for Web3"
          />
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            GeckoCore is an open privacy protocol layer built on Solana, providing <strong className="text-gray-900">Five Privacy Feeds</strong> (PrivacyFeed, ThreatFeed, MetaProof, AccessProof, ReputationFeed) that any application can integrate. <strong className="text-gray-900">Phase 1:</strong> Privacy Gecko builds 8 products as proof-of-concept. <strong className="text-gray-900">Phase 2+:</strong> SDK launches Q2 2026 for DeFi protocols, wallets, browsers, and dApps to build privacy-first features on GeckoCore infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/geckocore" variant="primary" size="lg">
              Learn About GeckoCore →
            </Button>
            <Button href="/whitepaper" variant="outline" size="lg">
              Read Technical Whitepaper
            </Button>
            <Button href="/roadmap" variant="outline" size="lg">
              View Development Roadmap
            </Button>
          </div>
        </div>
      </Section>







      {/* Product Showcase */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <SectionHeader
          subtitle="Phase 1: Our Commitment"
          title="The Privacy Gecko Ecosystem"
          description="8 products by end of 2026. 4 live now, 4 launching through 2026. Each product built on the GeckoCore Protocol — infrastructure designed to evolve as privacy threats change."
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
              features={product.features.slice(0, 4)}
              progress={product.progress}
              ai={product.ai}
            />
          ))}
        </div>
      </Section>

      {/* The AI Difference */}
      <AIDifference />

      {/* Why Privacy Gecko */}
      <Section>
        <SectionHeader
          subtitle="Why Choose Us"
          title="We Practice What We Preach"
          description="Building privacy tools the right way: AI-enhanced. Open source. Privacy-friendly analytics only. No invasive tracking. No data selling."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FIRST ROW: Most Important Cards */}
          
          {/* Card 1: Privacy-First (Core Value) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-gecko-green hover:border-green-500 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Lock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Privacy-First</CardTitle>
                <CardDescription>
                  We don't use invasive tracking, sell data, or monetize your information. We use privacy-friendly Plausible Analytics (no cookies, no personal data collection). That's our promise. Our AI will learn without seeing your personal information.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 2: Free Tier Always (Removes Friction) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Free Tier Always</CardTitle>
                <CardDescription>
                  Every tool has a generous free tier. No credit card required to start. AI features available to free users with monthly limits.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 3: Complete Ecosystem (Differentiator) */}
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
                  <Shield className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Complete Ecosystem</CardTitle>
                <CardDescription>
                  8 integrated tools covering every aspect of your digital privacy needs. One account, one token, unified protection with AI enhancement.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* SECOND ROW: Important Cards */}

          {/* Card 4: AI-Enhanced (Future Value) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-purple-200 hover:border-purple-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  AI-Enhanced
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-normal">Q2 2026</span>
                </CardTitle>
                <CardDescription>
                  Privacy-first AI that learns and adapts WITHOUT compromising your data. Token launching November 2025, AI beta Q1 2026 (1,000 users), public launch Q2 2026. Local processing, federated learning, open-source models.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 5: Always Improving (Ongoing Benefit) */}
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
                  <Lock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Always Improving</CardTitle>
                <CardDescription>
                  Static blocklists become outdated. When AI launches (Q2 2026), it will evolve with the threat landscape, learning from new threats automatically. Protection that gets smarter every day.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 6: Open Development (Trust Signal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Code className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Open Development</CardTitle>
                <CardDescription>
                  Committed to transparency. Website is open source, product code in development. Core AI models will be open-sourced after maturity.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
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

      {/* Social Proof Section */}
      <Section className="bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted by Privacy Advocates
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Join our growing community of users taking back control of their digital privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gecko-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gecko-green" />
              </div>
              <div className="text-4xl font-bold text-gecko-green mb-2">500+</div>
              <p className="text-gray-600">Active Beta Testers</p>
              <p className="text-sm text-gray-500 mt-1">Testing products daily (as of Jan 2025)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gecko-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gecko-green" />
              </div>
              <div className="text-4xl font-bold text-gecko-green mb-2">4</div>
              <p className="text-gray-600">Live Privacy Tools</p>
              <p className="text-sm text-gray-500 mt-1">Available now with free tiers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gecko-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gecko-green" />
              </div>
              <div className="text-4xl font-bold text-gecko-green mb-2">100%</div>
              <p className="text-gray-600">No Tracking</p>
              <p className="text-sm text-gray-500 mt-1">Privacy-first analytics only</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="max-w-2xl mx-auto border-gecko-green/20">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-gecko-green text-4xl leading-none">"</div>
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      Finally, privacy tools that are actually private. No hidden tracking, no data selling, just honest tools that work. The transparency around development and funding is refreshing.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gecko-green/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-gecko-green">JM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">John M.</p>
                        <p className="text-xs text-gray-500">GeckoAdvisor Beta Tester</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Token Bridge Section */}
      <Section className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Powered by $PRICKO (Optional)
            </h2>
            <p className="text-lg mb-2 max-w-2xl mx-auto">
              Launching November 2025: The token that funds AI-enhanced privacy for everyone.
            </p>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              All tools work fully without any token requirement. AI public launch Q2 2026.
            </p>
          </motion.div>

          {/* How $PRICKO Enables AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              How $PRICKO Enables AI
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Problem Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-red-300">⚠️</span> Problem: Privacy-First AI is Expensive
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>GPU compute for local inference: High cost per 1000 users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>Model training and updates: Ongoing development costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>No ads, no data selling = no revenue to fund it</span>
                  </li>
                </ul>
              </div>

              {/* Solution Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-green-300">✓</span> Solution: Token-Funded AI Infrastructure
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>Token holders stake to provide/subsidize compute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>30% of Pro revenue funds AI development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>Community-owned models and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>Sustainable without compromising privacy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Token Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Free Tier Users */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3">Free Tier Users</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                    <span>Limited AI queries per month (e.g., 50 scans)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                    <span>Basic AI features included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                    <span>Community-subsidized through staking</span>
                  </li>
                </ul>
              </div>

              {/* Token Holders (Pro) */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3">Token Holders (Pro)</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-300" />
                    <span>Unlimited AI queries across all products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-300" />
                    <span>Early access to new AI features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-300" />
                    <span>Vote on AI model training priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-300" />
                    <span>Contribute to federated learning network</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Token-Funded AI Works */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-center">Why Token-Funded AI Works</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                  <span>Aligns incentives (token grows = better AI = more users)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                  <span>Community ownership of AI models</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                  <span>No need to sell data for revenue</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                  <span>Sustainable long-term funding</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                  <span>Transparent use of funds</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
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

      {/* FAQ Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers about Privacy Gecko and our AI features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing General Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Can I use the ecosystem without crypto?</CardTitle>
                      <CardDescription>
                        100%. $PRICKO tokens are optional for additional discounts and Pro features. All tools work fully without crypto, and free tiers will always be available.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">What if Privacy Gecko shuts down?</CardTitle>
                      <CardDescription>
                        All product code will be open-source after launch. You can self-host and continue using the tools. Your data stays yours, not ours.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Do you collect any data?</CardTitle>
                      <CardDescription>
                        We only collect anonymized usage statistics via Plausible to improve our products. We never sell your data or track your personal information. That's our core promise.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Are your tools really free?</CardTitle>
                      <CardDescription>
                        Yes! Every tool has a generous free tier with no credit card required. You can upgrade to Pro for advanced features and unlimited AI queries when you're ready.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* NEW: AI-Focused Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">How is your AI different from ChatGPT or other cloud AI?</CardTitle>
                      <CardDescription>
                        Our AI runs <strong>locally on your device</strong>. ChatGPT and similar tools send your data to the cloud for processing. Ours processes everything on your computer, so your data never leaves your control. This is privacy-first AI done right.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Will AI features cost extra?</CardTitle>
                      <CardDescription>
                        Free tier users get <strong>50 AI queries per month</strong> across all products. Token holders (Pro tier) get <strong>unlimited AI queries</strong>. The token subsidizes AI compute costs, making it sustainable without selling your data.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Can I use products without AI enabled?</CardTitle>
                      <CardDescription>
                        Absolutely! AI enhances existing features but isn't required. All core privacy protection works with AI disabled. You're always in complete control of what features you use.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">When exactly does AI launch?</CardTitle>
                      <CardDescription>
                        <strong>$PRICKO token launches November 2025.</strong> AI beta opens <strong>Q1 2026</strong> (1,000 users). <strong>AI public launch Q2 2026</strong> (GeckoAdvisor and GeckoGuard). Other products follow in Q2-Q4 2026.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Does your AI learn from my personal data?</CardTitle>
                      <CardDescription>
                        Only if you <strong>opt in to federated learning</strong>. Your raw data never leaves your device. Only encrypted, anonymized patterns are shared to improve community protection. You can disable this at any time.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">What AI models do you use?</CardTitle>
                      <CardDescription>
                        We use custom-trained transformer models for privacy scanning, ensemble classifiers for threat detection, and fine-tuned GPT-style models for summarization. All models are optimized for on-device performance (50-200MB) and will be open-sourced after maturity.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Can I join the AI beta testing?</CardTitle>
                      <CardDescription>
                        Yes! AI beta opens <strong>Q1 2026</strong> (limited to 1,000 users) before public launch in <strong>Q2 2026</strong>. Active users of 2+ Privacy Gecko products can apply. Beta testers get early access, earn $PRICKO token rewards, and influence feature development.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 relative">
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Will AI work offline?</CardTitle>
                      <CardDescription>
                        Yes! Basic AI features work completely offline since all processing happens on your device. Some features (like federated learning updates) require occasional internet connection, but core privacy protection never requires cloud access.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Button href="/resources/faq" variant="outline">
              View All FAQs →
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA - AI-Focused */}
      <Section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Be Part of the AI-Enhanced Privacy Revolution
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Join <strong className="underline decoration-2 underline-offset-4">10,000+ community members</strong> (email subscribers, beta testers, and waitlist) preparing for the future of privacy protection
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">Early access to AI beta (Q1 2026)</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">Priority support and onboarding</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">Exclusive development updates</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">First to access AI features at launch</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                href="/contact?subject=Early%20Adopter%20Waitlist"
                variant="outline"
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 border-white font-bold text-lg px-8 py-4"
              >
                🚀 Join AI Waitlist (Free)
              </Button>
              <Button
                href="https://geckoadvisor.com"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-700 font-bold text-lg px-8 py-4"
              >
                Try Our Tools Now
              </Button>
            </div>

            {/* Alternative Links */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-sm opacity-90 mb-4 font-medium">Or explore our ecosystem:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="https://geckoadvisor.com" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  → Scan Website Privacy Policies
                </a>
                <a href="https://geckoshare.com" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  → Send Encrypted Files
                </a>
                <a href="/roadmap" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  → View AI Development Roadmap
                </a>

              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <OrganizationSchema />
    </>
  );
}
