"use client";

import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  return (
    <>
      <Hero
        subtitle="Our Products"
        title="Your Complete Privacy Toolkit"
        description="8 powerful tools to protect every aspect of your digital privacy. From device audits to encrypted file sharing, we've got you covered."
      />

      {/* Live Products */}
      <Section>
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Available Now
          </h2>
          <p className="text-center text-gray-600">
            Start using these tools today to protect your privacy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
              href={product.href}
              isExternal={product.isExternal}
              features={product.features.slice(0, 3)}
              ai={product.ai}
            />
          ))}
        </div>
      </Section>

      {/* AI Enhancement Timeline Section */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold mb-4">
              🤖 Development Starting Q4 2025 • First Features Q1 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              AI-Enhanced Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Privacy Gecko tool will gain AI capabilities that adapt to new threats in real-time—without ever compromising your privacy. All AI processing happens on YOUR device, not our servers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phase 1: February 2026 - First AI Integration */}
            <div className="bg-white rounded-xl border-2 border-blue-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 1: First AI Integration</h3>
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">Feb 2026</span>
              </div>
              <div className="space-y-4">
                <div>
                  <strong className="text-blue-600 text-sm">GeckoAdvisor</strong>
                  <span className="text-xs text-gray-500"> (First to get AI)</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• AI-powered policy analysis in plain language</li>
                    <li>• Intelligent risk scoring & pattern detection</li>
                    <li>• Automated compliance gap identification</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-600 text-sm">GeckoGuard</strong>
                  <span className="text-xs text-gray-500"> (AI added to existing extension)</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Learns new tracking patterns in real-time</li>
                    <li>• Adapts blocking to your browsing style</li>
                    <li>• Self-updating without manual filter lists</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2: Q2 2026 - AI Expansion */}
            <div className="bg-white rounded-xl border-2 border-purple-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 2: AI Expansion</h3>
                <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">Q2 2026</span>
              </div>
              <div className="space-y-4">
                <div>
                  <strong className="text-purple-600 text-sm">GeckoShare</strong>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• AI scans files for hidden metadata/trackers</li>
                    <li>• Detects suspicious file patterns</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-purple-600 text-sm">GeckoLock</strong>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• AI evaluates password strength vs. breaches</li>
                    <li>• Phishing detection on login pages</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-purple-600 text-sm">GeckoWatch</strong>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Continuous AI-powered compliance monitoring</li>
                    <li>• Intelligent change detection</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-purple-600 text-sm">GeckoView</strong>
                  <span className="text-xs text-gray-500"> (AI-Native Launch)</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Launches WITH AI built-in from day one</li>
                    <li>• AI content summarization & extraction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3: Q3-Q4 2026+ - Full AI Ecosystem */}
            <div className="bg-white rounded-xl border-2 border-pink-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 3: Full AI Ecosystem</h3>
                <span className="px-3 py-1 bg-pink-600 text-white text-sm font-semibold rounded-full">Q3-Q4 2026+</span>
              </div>
              <div className="space-y-4">
                <div>
                  <strong className="text-pink-600 text-sm">GeckoShell</strong>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Adaptive content blocking</li>
                    <li>• Intelligent cache management</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-pink-600 text-sm">Gecko VPN</strong>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Smart server selection (2027)</li>
                    <li>• Threat-based routing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/ai-roadmap"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              View Complete AI Development Roadmap →
            </a>
          </div>
        </div>
      </Section>

      {/* Coming Soon Products */}
      <Section className="bg-neutral-100">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Coming Soon
          </h2>
          <p className="text-center text-gray-600">
            Exciting privacy tools launching throughout 2025
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {comingProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
              comingDate={product.comingDate}
              href={product.href}
              features={product.features.slice(0, 3)}
              progress={product.progress}
              ai={product.ai}
            />
          ))}
        </div>
      </Section>

      {/* AI-Focused CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Be First to Access AI-Enhanced Privacy Tools
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join 10,000+ early adopters preparing for the future of privacy protection
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">Early access to AI beta (Q4 2025)</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">20% lifetime discount on all tools</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">First to access new AI features</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?subject=AI%20Waitlist"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
            >
              Join AI Waitlist
            </a>
            <a
              href="/ai-roadmap"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
            >
              View AI Roadmap
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
