"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle, X, Shield, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparePage() {
  const comparisonData = [
    {
      feature: "Free Tier",
      privacyGecko: true,
      bitwarden: true,
      nordvpn: false,
      ublock: true,
    },
    {
      feature: "No Tracking",
      privacyGecko: true,
      bitwarden: true,
      nordvpn: "Partial",
      ublock: true,
    },
    {
      feature: "Open Source",
      privacyGecko: "Coming Q4 2025",
      bitwarden: true,
      nordvpn: false,
      ublock: true,
    },
    {
      feature: "No VC Funding",
      privacyGecko: true,
      bitwarden: false,
      nordvpn: false,
      ublock: true,
    },
    {
      feature: "Complete Ecosystem (8 tools)",
      privacyGecko: true,
      bitwarden: false,
      nordvpn: false,
      ublock: false,
    },
    {
      feature: "Privacy-First Analytics",
      privacyGecko: true,
      bitwarden: true,
      nordvpn: false,
      ublock: "N/A",
    },
    {
      feature: "Cryptocurrency Optional",
      privacyGecko: true,
      bitwarden: "N/A",
      nordvpn: false,
      ublock: "N/A",
    },
    {
      feature: "Self-Hosting Option",
      privacyGecko: "Coming",
      bitwarden: true,
      nordvpn: false,
      ublock: "N/A",
    },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="w-5 h-5 text-gecko-green mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-400 mx-auto" />;
    } else {
      return <span className="text-sm text-gray-600">{value}</span>;
    }
  };

  return (
    <>
      <Hero
        subtitle="Comparison"
        title="How Privacy Gecko Compares"
        description="See how we stack up against popular privacy tools. Honest comparison of features, pricing, and privacy practices."
      />

      {/* Why Compare Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              Why We Built Privacy Gecko
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Existing privacy tools are great at what they do, but they're all separate. We're building an integrated ecosystem where your privacy tools work together—password manager, VPN, ad blocker, encrypted file sharing, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>One Ecosystem</CardTitle>
                  <CardDescription>
                    8 integrated tools instead of juggling multiple apps from different companies
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
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>Always Free Tier</CardTitle>
                  <CardDescription>
                    Every single tool has a generous free tier. No credit card required to start.
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
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gecko-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>No VC Pressure</CardTitle>
                  <CardDescription>
                    Bootstrapped with no investors. We'll never sell your data to satisfy shareholders.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-neutral-100">
        <SectionHeader
          title="Feature Comparison"
          description="Privacy Gecko vs. popular alternatives"
        />

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-neutral-50 border-b-2 border-neutral-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-gecko-green">Privacy Gecko</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700">Bitwarden</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700">NordVPN</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700">uBlock Origin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-gecko-green/5">
                      {renderValue(row.privacyGecko)}
                    </td>
                    <td className="px-6 py-4 text-center">{renderValue(row.bitwarden)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(row.nordvpn)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(row.ublock)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-sm text-gray-500 text-center mt-6">
            * Comparison data accurate as of January 2025. Features and pricing may change.
          </p>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            What Makes Privacy Gecko Different
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green" />
                    Integrated Ecosystem, Not Fragmented Tools
                  </CardTitle>
                  <CardDescription>
                    Other tools focus on one thing (password manager, VPN, ad blocker). We're building 8 integrated tools that work together seamlessly. One account, one ecosystem, complete privacy protection.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green" />
                    No Venture Capital, No Investor Pressure
                  </CardTitle>
                  <CardDescription>
                    Privacy Gecko is bootstrapped. Bitwarden raised $100M from VC, NordVPN is owned by a large holding company. When investors demand growth, companies often compromise privacy. We answer to users, not shareholders.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green" />
                    Transparent Development & Pricing
                  </CardTitle>
                  <CardDescription>
                    We build in public. Our roadmap shows exactly what's live, what's in development, and progress percentages. Pricing is clear from day one. No hidden fees, no dark patterns, no "enterprise contact us" nonsense.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gecko-green" />
                    Free Tier Always Available
                  </CardTitle>
                  <CardDescription>
                    Every tool has a generous free tier. Many competitors make you pay for basic privacy features. We believe privacy is a right, not a luxury. If you can pay for Pro, great—you help subsidize free users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Try Privacy Gecko?
          </h2>
          <p className="text-lg mb-8">
            Start with our free tier. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://geckoadvisor.com" variant="outline" className="bg-white text-gecko-green hover:bg-gray-100 border-white" size="lg">
              Try GeckoAdvisor Free →
            </Button>
            <Button href="/products" variant="outline" className="border-2 border-white text-white hover:bg-white/10" size="lg">
              Explore All 8 Tools
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
