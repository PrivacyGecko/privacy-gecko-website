"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TimelineIndicator } from "@/components/ai";
import { CheckCircle2, Target, Calendar, Users, Code, GraduationCap, Coins, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIRoadmapPage() {
  const phases = [
    {
      phase: "Phase 1: Foundation Building",
      timeline: "Now - Q2 2025",
      status: "in-development" as const,
      statusLabel: "In Development",
      deliverables: [
        "GeckoAI Core Service architecture designed",
        "Federated learning framework prototyped",
        "Local inference models in testing",
        "Privacy-preserving training pipeline",
        "Security audits underway",
      ],
      output: "Technical architecture whitepaper, Proof-of-concept demos",
    },
    {
      phase: "Phase 2: Beta Testing",
      timeline: "Q3 2025",
      status: "upcoming" as const,
      statusLabel: "Upcoming",
      deliverables: [
        "AI Beta program launches",
        "Select users test AI features",
        "Model fine-tuning based on feedback",
        "Performance optimization",
        "Privacy verification",
      ],
      output: "Beta access for 1,000 users, Performance benchmarks",
    },
    {
      phase: "Phase 3: Foundation Completion",
      timeline: "Q4 2025",
      status: "planned" as const,
      statusLabel: "Planned",
      deliverables: [
        "AI development infrastructure ready",
        "Models trained and optimized",
        "$PRICKO token launches",
        "Final security audits completed",
        "Beta program closed, feedback implemented",
      ],
      output: "Production-ready AI infrastructure, Token live, Ready for Q1 2026 launch",
    },
    {
      phase: "Phase 4: First AI Launch",
      timeline: "Q1 2026",
      status: "planned" as const,
      statusLabel: "Planned",
      products: [
        "GeckoAdvisor: AI privacy scanning goes live",
        "GeckoGuard: Adaptive blocking launches",
        "Infrastructure: Full GeckoAI Core Service operational",
      ],
      features: [
        "Local AI inference operational",
        "Federated learning network live",
        "Token-gated Pro AI features active",
        "Community governance begins",
        "Free tier: 50 AI queries/month",
      ],
    },
    {
      phase: "Phase 5: AI Ecosystem Expansion",
      timeline: "Q2 2026",
      status: "planned" as const,
      statusLabel: "Planned",
      products: [
        "GeckoShare: Threat detection AI",
        "GeckoLock: Phishing detection AI",
        "GeckoWatch: Predictive compliance monitoring",
        "GeckoView: AI-native launch with summarization",
      ],
      improvements: [
        "Lower resource usage across all products",
        "Mobile optimization for on-device AI",
        "Cross-product intelligence sharing",
      ],
    },
    {
      phase: "Phase 6: Full Ecosystem & Open Source",
      timeline: "Q3-Q4 2026+",
      status: "planned" as const,
      statusLabel: "Planned",
      products: [
        "GeckoShell: Mobile AI features (Q3-Q4 2026)",
        "Gecko VPN: Smart routing (2027)",
      ],
      milestones: [
        "Core AI models open-sourced",
        "Community training contributions",
        "Developer API access",
        "Research partnerships",
        "Full decentralized AI network",
      ],
    },
  ];

  const participationWays = [
    {
      title: "As a User",
      icon: Users,
      description: "Get early access to AI features before public release",
      benefits: [
        "Test cutting-edge privacy AI",
        "Influence feature development",
        "Earn $PRICKO token rewards",
        "Direct feedback to dev team",
        "Exclusive beta tester NFT",
      ],
      requirements: [
        "Active user of 2+ Privacy Gecko products",
        "Willing to provide structured feedback",
        "Basic understanding of privacy concepts",
      ],
      cta: "Join AI Beta Waitlist",
      ctaLink: "/contact?subject=AI%20Beta",
    },
    {
      title: "As a Developer",
      icon: Code,
      description: "Build on our AI platform and contribute to the ecosystem",
      benefits: [
        "Apply for developer grants",
        "Build on our AI APIs",
        "Contribute to open source models",
        "Create privacy AI tools",
      ],
      cta: "Developer Resources",
      ctaLink: "/resources#developers",
    },
    {
      title: "As a Researcher",
      icon: GraduationCap,
      description: "Access our platform for privacy AI research",
      benefits: [
        "Access training datasets",
        "Publish research using our platform",
        "Collaborate on privacy AI research",
        "Peer review our models",
      ],
      cta: "Research Partnerships",
      ctaLink: "mailto:research@privacygecko.com?subject=Research%20Partnership%20Inquiry",
    },
    {
      title: "As an Investor",
      icon: Coins,
      description: "Support the vision through token participation",
      benefits: [
        "Join $PRICKO whitelist",
        "Stake tokens for AI compute",
        "Vote on AI development priorities",
        "Fund community AI initiatives",
      ],
      cta: "Token Whitelist",
      ctaLink: "https://pricko.com#whitelist",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-development":
        return "bg-green-100 text-green-800 border-green-300";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "planned":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-development":
        return <CheckCircle2 className="w-5 h-5" />;
      case "upcoming":
        return <Target className="w-5 h-5" />;
      case "planned":
        return <Calendar className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Hero
        subtitle="AI ROADMAP"
        title="Privacy Gecko AI Roadmap"
        description="Our Vision: Privacy-First AI That Actually Works"
      />

      <Section>
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-600">
            Most AI tools require sending your data to the cloud. We're building something different:
            intelligent privacy protection that runs locally, learns collectively, and respects individual privacy.
          </p>
        </div>

        <SectionHeader
          subtitle="DEVELOPMENT TIMELINE"
          title="Our 6-Phase Journey to Privacy-First AI"
          description="Transparent roadmap from foundation to community-driven AI"
        />

        <div className="max-w-5xl mx-auto space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border ${getStatusColor(phase.status)}`}>
                      {getStatusIcon(phase.status)}
                      {phase.statusLabel}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{phase.timeline}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  {phase.deliverables && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.products && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Products with AI:</h4>
                      <ul className="space-y-2">
                        {phase.products.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.features && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {phase.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.improvements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Infrastructure Improvements:</h4>
                      <ul className="space-y-2">
                        {phase.improvements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.milestones && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Open Source Milestones:</h4>
                      <ul className="space-y-2">
                        {phase.milestones.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.output && (
                    <div className="mt-4 p-4 bg-gecko-green/5 rounded-lg border border-gecko-green/20">
                      <p className="text-sm font-semibold text-neutral-900 mb-1">Output:</p>
                      <p className="text-sm text-gray-700">{phase.output}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-gecko-green/5 to-blue-50 border-gecko-green/30">
            <CardHeader>
              <CardTitle className="text-2xl">Long-term Vision (2027+)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry-leading privacy AI platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full decentralization of AI network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Self-sustaining community development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Global privacy AI standard</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* Token Connection Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How $PRICKO Powers Our AI Development
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Privacy-first AI is expensive to build and maintain. We fund it through community tokens
                instead of selling your data or showing ads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">💰</div>
                  <CardTitle>Sustainable Funding</CardTitle>
                  <CardDescription>
                    Token holders and stakers fund AI development through a transparent community treasury.
                    30% of Pro revenue goes to AI infrastructure.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">🔓</div>
                  <CardTitle>Unlock AI Features</CardTitle>
                  <CardDescription>
                    Hold $PRICKO tokens to get unlimited AI queries across all 8 products.
                    Free tier users get 50 queries/month, token holders get unlimited.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">⚡</div>
                  <CardTitle>Stake & Earn</CardTitle>
                  <CardDescription>
                    Stake tokens to provide/subsidize AI compute power and earn rewards.
                    Help power the network while earning passive income.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">🗳️</div>
                  <CardTitle>Govern AI Development</CardTitle>
                  <CardDescription>
                    Vote on AI model training priorities, feature development, and community AI initiatives.
                    Shape the future of privacy AI.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-gecko-green/10 to-blue-50 border-gecko-green/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-3">Ready to Power Privacy-First AI?</CardTitle>
                <CardDescription className="text-base mb-6">
                  Join the $PRICKO whitelist and be part of the AI revolution
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="https://pricko.com"
                    variant="primary"
                    size="lg"
                  >
                    Learn About $PRICKO Token →
                  </Button>
                  <Button
                    href="https://pricko.com#whitelist"
                    variant="outline"
                    size="lg"
                  >
                    Join Token Waitlist
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeader
          subtitle="GET INVOLVED"
          title="How You Can Participate"
          description="Multiple ways to contribute to the privacy AI revolution"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {participationWays.map((way, index) => {
            const IconComponent = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gecko-green/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-gecko-green" />
                      </div>
                      <CardTitle>{way.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{way.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-neutral-900 mb-2">
                          {way.requirements ? "Requirements:" : "Opportunities:"}
                        </h4>
                        <ul className="space-y-2">
                          {(way.requirements || way.benefits).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={way.ctaLink}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gecko-green text-white font-semibold rounded-lg hover:bg-gecko-green/90 transition-colors"
                      >
                        {way.cta}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-amber-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-amber-700" />
                <CardTitle className="text-2xl">Transparency Commitments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We'll publish quarterly AI progress reports covering:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Development milestones achieved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Privacy audits completed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Community contributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Challenges and learnings</span>
                </li>
              </ul>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="text-sm font-semibold text-neutral-900">
                  Next Report: <span className="text-amber-700">Q2 2025</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
