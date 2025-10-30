"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { AIPreviewBanner } from "@/components/sections/AIPreviewBanner";
import { AIDifference } from "@/components/sections/AIDifference";
import { ProductCard } from "@/components/product/ProductCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { products } from "@/lib/products";
import { Shield, Zap, Code, Lock, ArrowRight, CheckCircle, Users, Star, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Privacy Tools That Evolve With You"
        title="8 Privacy Tools (AI Coming Q4 2025). Zero Data Collection. Always Free Tier."
        description="Intelligent privacy protection that adapts to new threats—running on your device, not our servers—without ever compromising your data. 2 live tools today, AI superpowers coming Q4 2025."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/products" variant="primary" size="lg">
            Explore Products
          </Button>
          <Button href="#ai-preview" variant="outline" size="lg">
            Learn About AI Features →
          </Button>
        </div>
      </Hero>

      {/* AI Preview Banner */}
      <AIPreviewBanner />

      {/* Early Adopter Discount Banner */}
      <Section className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white py-8">
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
          description="8 powerful tools to protect your privacy across all aspects of your digital life. 2 available now, 6 in active development."
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

      {/* The AI Difference */}
      <AIDifference />

      {/* Why Privacy Gecko */}
      <Section>
        <SectionHeader
          subtitle="Why Choose Us"
          title="We Practice What We Preach"
          description="Building privacy tools the right way: AI-enhanced. Open source. No tracking. No data selling."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-purple-200 hover:border-purple-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  AI-Enhanced (Coming Q4 2025)
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-normal">Q4 2025</span>
                </CardTitle>
                <CardDescription>
                  Privacy-first AI that will learn and adapt WITHOUT compromising your data. Local processing, federated learning, open-source models coming Q4 2025.
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
                  <Shield className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Complete Ecosystem</CardTitle>
                <CardDescription>
                  8 integrated tools covering every aspect of your digital privacy needs. One account, one token, unified protection with AI enhancement.
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
                  <Zap className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Free Tier Always</CardTitle>
                <CardDescription>
                  Every tool has a generous free tier. No credit card required to start. AI features available to free users with monthly limits.
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
                  <Code className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Open Development</CardTitle>
                <CardDescription>
                  Committed to transparency. Website is open source, product code in development. Core AI models will be open-sourced after maturity.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <Lock className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>Always Improving</CardTitle>
                <CardDescription>
                  Static blocklists become outdated. Our AI evolves with the threat landscape. Continuous protection that gets smarter every day.
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

      {/* Social Proof Section */}
      <Section className="bg-neutral-100">
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
              <p className="text-gray-600">Beta Testers</p>
              <p className="text-sm text-gray-500 mt-1">Helping shape our tools</p>
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
              <div className="text-4xl font-bold text-gecko-green mb-2">2</div>
              <p className="text-gray-600">Live Privacy Tools</p>
              <p className="text-sm text-gray-500 mt-1">Available now for free</p>
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
              Coming Q4 2025: The token that funds AI-enhanced privacy for everyone.
            </p>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              All tools work fully without any token requirement.
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
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto">
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
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        100%. $PRICKO tokens are optional for additional discounts only. All tools work fully without crypto.
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
                      <CardTitle className="text-lg mb-2">What if Privacy Gecko shuts down?</CardTitle>
                      <CardDescription>
                        All product code will be open-source after launch. You can self-host and continue using the tools.
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Do you collect any data?</CardTitle>
                      <CardDescription>
                        We only collect anonymized usage statistics to improve our products. We never sell your data or track your personal information.
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
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">Are your tools really free?</CardTitle>
                      <CardDescription>
                        Yes! Every tool has a generous free tier with no credit card required. You can upgrade to Pro for advanced features when needed.
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
              Join the GeckoAdvisor beta or explore our other privacy tools. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://geckoadvisor.com" variant="primary" size="lg">
                Try Your First Scan Free →
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                Browse All Privacy Tools
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
