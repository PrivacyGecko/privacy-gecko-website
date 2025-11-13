"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/products";
import { CheckCircle, Clock, Code, Rocket, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function RoadmapPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  return (
    <>
      <Hero
        subtitle="Building in Public"
        title="Privacy Gecko Roadmap"
        description="8 integrated privacy tools, transparent timeline, early adopter benefits. We're building thoughtfully, not rushing to market."
      />

      {/* Roadmap Navigation */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg border-b-2 border-gray-200">
            <a
              href="/roadmap"
              className="flex items-center gap-3 px-6 py-3 bg-gecko-green text-white rounded-lg font-semibold border-b-3 border-gecko-green transition-all"
            >
              <span className="text-2xl">📦</span>
              <span>Product Roadmap</span>
            </a>
            <a
              href="/ai-roadmap"
              className="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-gecko-green hover:text-gecko-green transition-all"
            >
              <span className="text-2xl">🤖</span>
              <span>AI Development Roadmap</span>
            </a>
          </div>
          <p className="text-center text-gray-600 mt-4">
            View our product development timeline or explore our AI enhancement roadmap
          </p>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Our Development Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We're building 8 integrated privacy tools the right way - with security audits,
            community feedback, and transparent development. We won't rush pricing or features
            just to launch faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-gecko-green" />
              </div>
              <h3 className="font-bold mb-2">Security First</h3>
              <p className="text-sm text-gray-600">Independent audits before every launch</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-gecko-green" />
              </div>
              <h3 className="font-bold mb-2">Open Source</h3>
              <p className="text-sm text-gray-600">All code publishing after security audits</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-gecko-green" />
              </div>
              <h3 className="font-bold mb-2">Community Driven</h3>
              <p className="text-sm text-gray-600">Beta feedback shapes features</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Available Now */}
      <Section>
        <SectionHeader
          title="Available Today"
          description="Start using these privacy tools now - free tiers available for all"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveProducts.map((product, index) => {
            const Icon = product.icon;
            const pricing = product.id === "advisor"
              ? { free: "3 scans/month", pro: "$4.99/mo beta (reg $9.99)" }
              : product.id === "share"
              ? { free: "100MB, 24hr expiry", pro: "$7.99/mo 5GB" }
              : { free: "Basic blocking", pro: "$4.99/mo advanced" };

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gecko-green/10 rounded-lg">
                        <Icon className="w-6 h-6 text-gecko-green" />
                      </div>
                      <Badge variant="live">Live</Badge>
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Free Tier:</p>
                        <p className="text-sm text-gray-600">{pricing.free}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Pro Tier:</p>
                        <p className="text-sm text-gray-600">{pricing.pro}</p>
                      </div>
                    </div>
                    <Button
                      href={product.href}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      {product.isExternal ? "Visit Site →" : "Learn More"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* AI Announcement Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="text-6xl">🤖</div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-4">AI Development Ongoing Through Q4 2025 • First Features Q1 2026</CardTitle>
                  <CardDescription className="text-base text-gray-700 mb-6">
                    Every Privacy Gecko tool will gain AI capabilities that adapt to new threats in real-time—without
                    ever compromising your privacy. Token launches December 2025, AI beta Q1 2026 (1,000 users), public launch Q2 2026. All AI processing happens on YOUR device, not our servers.
                  </CardDescription>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-gecko-green text-lg">✓</span>
                      <span className="text-sm text-gray-700">Learns new tracking patterns automatically</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gecko-green text-lg">✓</span>
                      <span className="text-sm text-gray-700">Adapts to emerging privacy threats</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gecko-green text-lg">✓</span>
                      <span className="text-sm text-gray-700">Runs locally - your data stays private</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gecko-green text-lg">✓</span>
                      <span className="text-sm text-gray-700">Open source AI models after maturity</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/ai-roadmap" variant="primary" size="md">
                      View Complete AI Roadmap →
                    </Button>
                    <Button href="/contact?subject=AI%20Beta" variant="outline" size="md">
                      Join AI Beta
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Coming Soon Products */}
      <Section className="bg-neutral-100">
        <SectionHeader
          title="In Active Development"
          description="6 privacy tools being built in public - join waitlist for early adopter benefits"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gecko-green/10 rounded-lg">
                        <Icon className="w-6 h-6 text-gecko-green" />
                      </div>
                      <Badge variant="coming">{product.comingDate}</Badge>
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {product.progress !== undefined && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-xs font-semibold text-gray-700">Development Progress</p>
                          <p className="text-xs font-bold text-gecko-green">{product.progress}%</p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-2.5 shadow-inner overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${product.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="bg-gradient-to-r from-green-600 to-green-700 h-2.5 rounded-full shadow-sm"
                            style={{
                              boxShadow: '0 0 8px rgba(21, 128, 61, 0.4)'
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gecko-green mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-600 mb-1">Pricing TBA</p>
                      <p className="text-sm font-semibold text-gecko-green">
                        Early adopters: 20% lifetime discount
                      </p>
                    </div>
                    <div>
                      <Button
                        href="/contact?subject=Early%20Adopter%20Waitlist"
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Join Waitlist
                      </Button>
                      <p className="text-sm font-medium text-gecko-green text-center mt-2">
                        Includes 20% lifetime discount
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Early Adopter Benefits */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Early Adopter Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Join our waitlist for any coming-soon product and unlock exclusive benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-gecko-green" />
                  </div>
                  <CardTitle>20% Lifetime Discount</CardTitle>
                </div>
                <CardDescription>
                  Lock in launch pricing with 20% off forever. Your rate never increases.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-gecko-green" />
                  </div>
                  <CardTitle>Beta Access</CardTitle>
                </div>
                <CardDescription>
                  Test features early and shape the product with your feedback before public launch.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gecko-green" />
                  </div>
                  <CardTitle>Priority Support</CardTitle>
                </div>
                <CardDescription>
                  Get dedicated support for your first 6 months with faster response times.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-gecko-green" />
                  </div>
                  <CardTitle>Influence Roadmap</CardTitle>
                </div>
                <CardDescription>
                  Vote on features, suggest improvements, and help prioritize development.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why This Timeline */}
      <Section className="bg-neutral-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
            Why This Timeline?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-gecko-green" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Security First</h3>
                <p className="text-gray-600">
                  Every product undergoes independent security audits before launch. We won't compromise
                  on security to ship faster.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-gecko-green" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Community Feedback</h3>
                <p className="text-gray-600">
                  Beta testing with privacy advocates ensures we build what you actually need, not what
                  we think you want.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-gecko-green" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Sustainable Development</h3>
                <p className="text-gray-600">
                  We're building for the long-term, not rushing to market. Quality over speed, always.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-gecko-green" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Open Source Coming</h3>
                <p className="text-gray-600">
                  All product code will be published after security audits complete. Transparency
                  requires preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Will prices increase later?</CardTitle>
                <CardDescription>
                  Not for early adopters. Your launch price is locked in for life. We honor our commitments.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if a product gets delayed?</CardTitle>
                <CardDescription>
                  We'll extend your early adopter benefits and keep you updated. Transparency over deadlines.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I use the ecosystem without crypto?</CardTitle>
                <CardDescription>
                  100%. $PRICKO tokens are optional for additional discounts only. All tools work fully without crypto.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if Privacy Gecko shuts down?</CardTitle>
                <CardDescription>
                  All product code will be open-source after launch. You can self-host and continue using the tools.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I stay updated on progress?</CardTitle>
                <CardDescription>
                  Subscribe to our newsletter for weekly development updates, follow @privacygecko on Twitter,
                  or join our Telegram community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join the Privacy Revolution
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of building the privacy tools you wish existed. Early adopters help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <Button
                href="/contact?subject=Early%20Adopter%20Waitlist"
                variant="outline"
                size="lg"
                className="bg-white text-gecko-green hover:bg-gray-100 border-white"
              >
                Join Waitlist
              </Button>
              <p className="text-sm font-medium text-gecko-green text-center mt-2">
                Includes 20% lifetime discount
              </p>
            </div>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Try Live Products
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
