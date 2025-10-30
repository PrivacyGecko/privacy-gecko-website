"use client";

import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { CheckCircle2, ChevronDown, ChevronUp, Shield, Database, ToggleLeft, Github, Users, FileCheck, Unlock, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const guarantees = [
  {
    icon: Shield,
    title: "Local-First Processing",
    promise: "AI runs on your device, not our servers",
    how: "WebAssembly models, on-device inference, no cloud required",
    verify: "Open source code, reproducible builds, network monitoring shows zero data transfer",
  },
  {
    icon: Database,
    title: "Zero Personal Data Training",
    promise: "We never train models on your personal data",
    how: "Models trained on public datasets only, federated learning uses encrypted patterns",
    verify: "Published training datasets, transparent methodology, third-party audits",
  },
  {
    icon: ToggleLeft,
    title: "Opt-In Everything",
    promise: "AI features require explicit consent",
    how: "Clear prompts before any AI feature activates, granular controls, easy disable",
    verify: "Default-off AI, per-feature toggles, audit logs of what AI does",
  },
  {
    icon: Github,
    title: "Open Source Models",
    promise: "No black-box AI",
    how: "Core models will be open-sourced after security review",
    verify: "GitHub repositories, model cards, architecture documentation",
  },
  {
    icon: Users,
    title: "Community Governance",
    promise: "Token holders control AI direction",
    how: "Voting on training priorities, model updates, feature development",
    verify: "On-chain governance, public proposals, transparent decisions",
  },
  {
    icon: FileCheck,
    title: "Independent Audits",
    promise: "Third-party verification of privacy claims",
    how: "Annual privacy audits by reputable firms, penetration testing",
    verify: "Published audit reports, responsible disclosure program",
  },
  {
    icon: Unlock,
    title: "No Vendor Lock-In",
    promise: "Your AI-enhanced tools work without us",
    how: "Open source = you can self-host everything",
    verify: "Docker containers, deployment docs, community forks welcome",
  },
  {
    icon: Trash2,
    title: "Delete Anytime",
    promise: "You can erase all AI learning about you",
    how: "One-click purge, local model reset, federated learning opt-out",
    verify: "Verifiable deletion, no cloud backups, instant effect",
  },
];

export function AIPrivacyGuarantees() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section>
      <SectionHeader
        subtitle="OUR COMMITMENTS"
        title="AI Privacy Guarantees"
        description="Eight ironclad promises about how we build and deploy AI"
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {guarantees.map((guarantee, index) => {
          const IconComponent = guarantee.icon;
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-gecko-green/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gecko-green" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{guarantee.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0" />
                        <CardDescription className="text-sm font-medium text-neutral-900">
                          {guarantee.promise}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 mb-1">How:</p>
                      <p className="text-sm text-gray-700">{guarantee.how}</p>
                    </div>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 text-sm font-semibold text-gecko-green hover:text-gecko-green/80 transition-colors"
                      aria-expanded={isExpanded}
                      aria-controls={`verify-${index}`}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Hide Verification
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          How We Verify
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          id={`verify-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-sm font-semibold text-neutral-900 mb-2">Verification:</p>
                            <p className="text-sm text-gray-700 bg-gecko-green/5 p-3 rounded-lg border border-gecko-green/20">
                              {guarantee.verify}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <Card className="bg-gradient-to-br from-gecko-green/5 to-blue-50 border-gecko-green/30">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-semibold text-neutral-900 mb-2">
              Privacy First, AI Second
            </p>
            <p className="text-gray-700">
              If any AI feature ever conflicts with our privacy principles, we'll disable it immediately.
              No exceptions. Privacy is non-negotiable.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
