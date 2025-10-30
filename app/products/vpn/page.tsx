"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/lib/products";
import { AIFeatureList, TimelineIndicator } from "@/components/ai";
import { CheckCircle, Wifi, Shield, Zap, Globe, Lock, Server, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function GeckoVPNPage() {
  const product = getProductById("vpn");

  if (!product) return null;

  const features = [
    {
      icon: Eye,
      title: "No-Logs Policy",
      description: "We don't log your browsing activity, connection times, or IP addresses. Independently audited.",
    },
    {
      icon: Globe,
      title: "Global Server Network",
      description: "Access servers in 50+ countries for fast, reliable connections anywhere in the world",
    },
    {
      icon: Shield,
      title: "Kill Switch Protection",
      description: "Automatically disconnect internet if VPN drops to prevent accidental data leaks",
    },
    {
      icon: Zap,
      title: "Split Tunneling",
      description: "Choose which apps use the VPN and which connect directly for optimal performance",
    },
    {
      icon: Wifi,
      title: "WireGuard Protocol",
      description: "Modern, fast, and secure VPN protocol with better performance than OpenVPN",
    },
    {
      icon: Server,
      title: "Multi-Device Support",
      description: "Connect up to 5 devices simultaneously with one Pro subscription",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Download & Install",
      description: "Get Gecko VPN for Windows, Mac, iOS, Android, or Linux",
    },
    {
      step: 2,
      title: "Choose Server",
      description: "Select from 50+ countries or let AI choose the optimal server automatically",
    },
    {
      step: 3,
      title: "Connect Securely",
      description: "One-click connection to encrypt your internet traffic and hide your IP",
    },
    {
      step: 4,
      title: "Browse Privately",
      description: "Enjoy fast, private browsing with AI-optimized routing (coming Q4 2025)",
    },
  ];

  const faqs = [
    {
      question: "What is a VPN and why do I need one?",
      answer: "A VPN (Virtual Private Network) encrypts your internet connection and routes it through our servers, hiding your real IP address. This protects you from ISP tracking, prevents websites from seeing your location, and secures your data on public WiFi. Gecko VPN focuses on privacy—not circumventing geo-restrictions (though that works too).",
    },
    {
      question: "Does Gecko VPN keep logs?",
      answer: "No. We have a strict no-logs policy: we don't log your browsing activity, connection timestamps, IP addresses, or DNS queries. The only data we collect is payment information (for Pro users) and aggregated bandwidth stats to maintain server performance. Our no-logs policy will be independently audited in 2025.",
    },
    {
      question: "How does Gecko VPN use AI?",
      answer: "Gecko VPN will gain AI capabilities in the future for smart server selection and intelligent split tunneling based on your usage patterns. All AI processing happens locally on your device—no browsing data sent to the cloud. AI features will be available to Pro tier users. The core VPN works fully without any AI requirement.",
    },
    {
      question: "Which countries have servers?",
      answer: "Gecko VPN will launch with servers in 50+ countries across North America, Europe, Asia, and South America. Pro users get access to all servers; free tier users get select servers with bandwidth limits.",
    },
    {
      question: "How fast is Gecko VPN?",
      answer: "We use WireGuard protocol, which is significantly faster than OpenVPN while maintaining strong encryption. Most users experience minimal speed reduction (10-20%) compared to their normal connection. Speed depends on server load and your distance from the server.",
    },
    {
      question: "Can I use Gecko VPN for torrenting?",
      answer: "Yes! Pro tier supports P2P file sharing on dedicated servers optimized for torrenting. We don't log your activity, so your downloads stay private. Free tier does not support P2P due to bandwidth costs.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Gecko VPN"
        title="Private Browsing, Global Access - With Intelligent Routing"
        description="Privacy-first VPN with global server network and WireGuard protocol. No-logs policy, kill switch protection, and AI-optimized routing coming Q4 2025. Fast, secure, and private."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#pricing" variant="primary" size="lg">
            Coming Soon
          </Button>
          <Badge variant="coming">Coming Q4 2025</Badge>
        </div>
      </Hero>

      {/* Development Status Banner */}
      <Section className="bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TimelineIndicator timeline="In Development" format="banner" />
          <p className="text-lg mt-4 text-gray-700">Development Progress: <strong>20%</strong></p>
          <p className="text-sm mt-2 text-gray-600">AI routing features planned for future release</p>
        </motion.div>
      </Section>

      {/* Features Grid */}
      <Section>
        <SectionHeader
          subtitle="Planned Features"
          title="Fast, Secure, Private VPN"
          description="Everything you need for privacy-first internet access"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Features Section - Future */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Core & AI-Enhanced Features</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  AI routing features planned for future release to optimize VPN performance
                </p>
                {product.ai && (
                  <AIFeatureList
                    currentFeatures={[
                      "No-logs policy",
                      "Global server network",
                      "Kill switch protection"
                    ]}
                    aiFeatures={product.ai.aiFeatures}
                    aiTimeline="Future Release"
                  />
                )}
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="How It Works"
          title="Private Browsing in 4 Simple Steps"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gecko-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Trust Signals */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Privacy & Security"
            title="How Gecko VPN Protects Your Privacy"
            description="Transparency about our VPN service and limitations"
          />
          <Card>
            <CardHeader>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">🔐 No-Logs Policy</h4>
                  <p className="text-gray-600">
                    We don't log your browsing activity, connection times, IP addresses, or DNS queries. The only data we collect is payment info (for Pro users) and aggregated bandwidth stats for server maintenance. No-logs policy will be independently audited in 2025.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🛡️ Encryption Standards</h4>
                  <p className="text-gray-600">
                    Gecko VPN uses WireGuard protocol with ChaCha20 encryption and Poly1305 authentication. This is faster than OpenVPN while maintaining military-grade security. All traffic encrypted end-to-end.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🚫 What We Can't Protect</h4>
                  <p className="text-gray-600">
                    VPNs hide your IP address but don't make you anonymous. Websites can still track you via cookies, browser fingerprinting, and login sessions. For maximum privacy, combine Gecko VPN with GeckoGuard (tracker blocker) and private browsing mode.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚖️ Legal Compliance</h4>
                  <p className="text-gray-600">
                    Gecko VPN is registered in privacy-friendly jurisdiction. We comply with local laws but have no data to hand over due to our no-logs policy. Use responsibly—VPNs for privacy, not for illegal activity.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-neutral-100">
        <SectionHeader
          subtitle="Pricing"
          title="Choose Your Plan"
          description="Start free, upgrade when you need more bandwidth"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <div className="text-3xl font-bold mb-4">$0<span className="text-lg text-gray-500 font-normal">/month</span></div>
                <CardDescription className="mb-6">{product.pricing.free.limit}</CardDescription>
                <Button href="#install" variant="outline" className="w-full mb-6">
                  Download Free
                </Button>
                <div className="space-y-3">
                  {product.pricing.free.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
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
            <Card className="h-full border-gecko-green border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <Badge variant="live">Popular</Badge>
                </div>
                <div className="text-3xl font-bold mb-4">
                  {product.pricing.pro.price.split('/')[0]}
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <CardDescription className="mb-6">Unlimited bandwidth & all servers</CardDescription>
                <Button href="#checkout" variant="primary" className="w-full mb-6">
                  Start Pro Trial
                </Button>
                <div className="space-y-3">
                  {product.pricing.pro.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription className="mt-2">{faq.answer}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-neutral-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready for Private Internet Access?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gecko VPN launches Q4 2025 with WireGuard protocol and no-logs policy. Be among the first to browse privately with AI-optimized routing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pricing" variant="primary" size="lg">
              Coming Soon
            </Button>
            <Button href="/products" variant="ghost" size="lg">
              Explore Other Tools
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
