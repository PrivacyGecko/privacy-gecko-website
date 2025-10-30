"use client";

import { motion } from "framer-motion";
import { Lock, Globe, Zap, BookOpen, X, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ComparisonTable } from "@/components/ai";

export function AIDifference() {
  return (
    <Section>
      <SectionHeader
        subtitle="The AI Difference"
        title="Privacy Tools Are Reactive. Ours Learn."
        description="Traditional privacy tools block KNOWN threats from static lists. Privacy Gecko will use AI (launching Q4 2025) to detect and adapt to NEW threats in real-time."
      />

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <ComparisonTable
          oldWay={{
            title: "The Old Way (Most Privacy Tools)",
            steps: [
              "Threat discovered",
              "Researcher adds to blocklist",
              "User downloads update",
              "Threat blocked",
            ],
            problem: "You're vulnerable during steps 1-3 (days or weeks)",
          }}
          newWay={{
            title: "The Privacy Gecko Way (AI-Enhanced - Coming Q4 2025)",
            steps: [
              "Threat appears",
              "AI detects anomaly",
              "Instant local blocking",
              "Learning shared to network",
            ],
            advantage: "Protected in real-time, privacy stays local",
          }}
        />
      </motion.div>

      {/* How Our AI Works - 4 Cards */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-3">
            How Our AI Works
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Four core principles that make AI-enhanced privacy possible without compromising your data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Privacy-First Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-blue-200 hover:border-blue-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <Lock className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle>Privacy-First Architecture</CardTitle>
                <CardDescription>
                  <ul className="text-sm space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>All AI processing happens on YOUR device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>No data sent to our servers or cloud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Models trained on anonymized, opt-in datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>You control what the AI learns</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 2: Federated Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-green-200 hover:border-green-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>Federated Learning</CardTitle>
                <CardDescription>
                  <ul className="text-sm space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Your device learns locally from your browsing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Updates shared as encrypted patterns only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Community benefits without privacy loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No central data collection</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 3: Adaptive Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-purple-200 hover:border-purple-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle>Adaptive Protection</CardTitle>
                <CardDescription>
                  <ul className="text-sm space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Recognizes new tracking techniques automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Adjusts to emerging privacy threats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Personalizes to your usage patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Evolves faster than manual filter lists</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 4: Open Source AI Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border-amber-200 hover:border-amber-400 transition-colors duration-200">
              <CardHeader className="flex-grow">
                <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle>Open Source AI Models</CardTitle>
                <CardDescription>
                  <ul className="text-sm space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Core AI models will be open-sourced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Community can audit and verify</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>No black boxes or secret algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Transparent and trustworthy</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* What AI DOESN'T Do */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-3">
            What AI DOESN&apos;T Do
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Privacy-first AI means clear boundaries on what we will never do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column - What AI Doesn't Do (Red X) */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" aria-hidden="true" />
              What We DON&apos;T Do
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Send your data to the cloud</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Create user profiles for ads</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Share browsing history</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Require internet for basic features</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Make decisions without you</span>
              </li>
            </ul>
          </div>

          {/* Right Column - What AI Does (Green Check) */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              What We DO
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Works offline</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Respects privacy</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Enhances protection</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Stays transparent</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>User always in control</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Button href="/ai-whitepaper" variant="outline" size="lg">
          Read Our AI Architecture Whitepaper →
        </Button>
        <p className="text-sm text-gray-500 mt-2">Coming soon</p>
      </motion.div>
    </Section>
  );
}
