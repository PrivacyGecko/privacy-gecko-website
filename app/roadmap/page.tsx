"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TimelineVisual, PhaseCard, TabNavigation, ProductMilestone } from "@/components/roadmap";
import { products } from "@/lib/products";
import {
  CheckCircle,
  Clock,
  Code,
  Rocket,
  Shield,
  Zap,
  Target,
  Users,
  GraduationCap,
  Coins,
  FileText,
  Sparkles,
  Lock,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function UnifiedRoadmapPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const comingProducts = products.filter((p) => p.status === "coming");

  // Scroll to section if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  // Timeline milestones for visual timeline
  const timelineMilestones = [
    {
      id: "foundation",
      title: "Foundation Built",
      quarter: "Q2-Q3 2025",
      status: "completed" as const,
      description: "Core architecture & prototypes",
    },
    {
      id: "token-launch",
      title: "Token Launch",
      quarter: "November 2025",
      status: "in-progress" as const,
      description: "$PRICKO on Solana",
    },
    {
      id: "ai-beta",
      title: "AI Beta Testing",
      quarter: "Q1 2026",
      status: "upcoming" as const,
      description: "1,000 beta users",
    },
    {
      id: "ai-launch",
      title: "AI Public Launch",
      quarter: "Q2 2026",
      status: "upcoming" as const,
      description: "AI features go live",
    },
    {
      id: "ecosystem",
      title: "Full Ecosystem",
      quarter: "Q2-Q4 2026",
      status: "upcoming" as const,
      description: "8 products with AI",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // AI Development Phases
  const aiPhases = [
    {
      phase: "Phase 1: Foundation Building",
      timeline: "Q2-Q3 2025",
      status: "completed" as const,
      statusLabel: "Completed",
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
      phase: "Phase 2: Token Launch & Funding",
      timeline: "November 2025",
      status: "in-progress" as const,
      statusLabel: "In Progress",
      deliverables: [
        "$PRICKO token launches on Solana in November 2025",
        "Token staking infrastructure goes live",
        "Community treasury established",
        "Early adopter rewards program begins",
        "AI funding mechanism activated",
      ],
      output: "$PRICKO token live, Staking active, AI development funding secured",
    },
    {
      phase: "Phase 3: AI Beta Testing",
      timeline: "Q1 2026",
      status: "upcoming" as const,
      statusLabel: "Upcoming",
      deliverables: [
        "AI Beta program launches (1,000 users)",
        "Select users test AI features in GeckoAdvisor & GeckoGuard",
        "Model fine-tuning based on real-world feedback",
        "Performance optimization and bug fixes",
        "Privacy verification and security audits",
      ],
      output: "Beta tested AI models, Performance benchmarks, User feedback integrated",
    },
    {
      phase: "Phase 4: AI Public Launch",
      timeline: "Q2 2026",
      status: "upcoming" as const,
      statusLabel: "Upcoming",
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
      ],
    },
    {
      phase: "Phase 5: AI Ecosystem Expansion",
      timeline: "Q2-Q4 2026",
      status: "upcoming" as const,
      statusLabel: "Upcoming",
      products: [
        "GeckoView: AI-native launch with summarization (Q2 2026)",
        "GeckoWatch: Predictive compliance monitoring (Q2 2026)",
        "GeckoShell: Private mobile browser launch (Q2 2026)",
        "GeckoLock & GeckoShare: AI features added (Q2 2026)",
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
      status: "upcoming" as const,
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

  // Participation ways
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
        "Exclusive beta tester benefits",
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

  return (
    <>
      <Hero
        subtitle="Building in Public"
        title={
          <>
            Privacy Gecko <span className="text-gecko-green">Development Roadmap</span>
          </>
        }
        description="8 integrated privacy tools, transparent timeline, AI-enhanced protection. Building thoughtfully with community transparency."
      />

      {/* Quick Stats Banner */}
      <Section className="bg-gradient-to-r from-gecko-green/5 to-emerald-50 border-y border-gecko-green/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-gecko-green mb-1">4</div>
              <div className="text-sm text-gray-600">Products Live</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-gecko-green mb-1">4</div>
              <div className="text-sm text-gray-600">In Development</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-gecko-green mb-1">Q1 2026</div>
              <div className="text-sm text-gray-600">AI Beta Launch</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-gecko-green mb-1">Nov 2025</div>
              <div className="text-sm text-gray-600">Token Launch</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive Timeline */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <SectionHeader
          subtitle="DEVELOPMENT TIMELINE"
          title="Our Journey: From Foundation to Full Ecosystem"
          description="Click on milestones to jump to detailed information"
        />
        <TimelineVisual milestones={timelineMilestones} onMilestoneClick={scrollToSection} />
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Our Development Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We're building 8 integrated privacy tools the right way - with security audits,
            community feedback, and transparent development.
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

      {/* Products Section */}
      <Section id="products" className="bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <SectionHeader
          title="Available Today"
          description="Start using these privacy tools now"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProducts.map((product, index) => (
            <ProductMilestone
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
              badge={product.badge}
              features={product.features}
              href={product.href}
              isExternal={product.isExternal}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Coming Soon Products */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/20">
        <SectionHeader
          title="In Active Development"
          description="4 privacy tools being built in public - join waitlist for early adopter benefits"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingProducts.map((product, index) => (
            <ProductMilestone
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
              comingDate={product.comingDate}
              progress={product.progress}
              features={product.features}
              href={product.href}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* AI Development Section with Tabs */}
      <Section id="ai-development">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              AI Development Roadmap
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Privacy-First AI: How We're Building It
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most AI tools require sending your data to the cloud. We're building something different:
              intelligent privacy protection that runs locally, learns collectively, and respects individual privacy.
            </p>
          </div>

          <TabNavigation
            tabs={[
              {
                id: "overview",
                label: "Overview",
                icon: "🌟",
                content: (
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                      <CardHeader>
                        <CardTitle className="text-2xl mb-4">
                          AI That Protects Your Privacy, Not Invades It
                        </CardTitle>
                        <CardDescription className="text-base text-gray-700">
                          Every Privacy Gecko tool will gain AI capabilities that adapt to new threats in real-time—without
                          ever compromising your privacy. All AI processing happens on YOUR device, not our servers.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">Learns new tracking patterns automatically</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">Adapts to emerging privacy threats</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">Runs locally - your data stays private</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">Open source AI models after maturity</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-purple-200">
                          <h4 className="font-semibold mb-2">Timeline Snapshot:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              Foundation: Q2-Q3 2025 (Completed)
                            </li>
                            <li className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gecko-green" />
                              Token Launch: November 2025 (This Month!)
                            </li>
                            <li className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-gray-500" />
                              AI Beta: Q1 2026 (1,000 users)
                            </li>
                            <li className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-gray-500" />
                              Public Launch: Q1-Q2 2026
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <Brain className="w-8 h-8 text-gecko-green mb-3" />
                          <CardTitle>Local Processing</CardTitle>
                          <CardDescription>
                            AI runs on your device. Your privacy data never leaves your control.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <Shield className="w-8 h-8 text-gecko-green mb-3" />
                          <CardTitle>Federated Learning</CardTitle>
                          <CardDescription>
                            Models improve collectively without sharing individual data.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <Lock className="w-8 h-8 text-gecko-green mb-3" />
                          <CardTitle>Zero Knowledge</CardTitle>
                          <CardDescription>
                            We can't see your data even if we wanted to. Architecture enforced.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                ),
              },
              {
                id: "technical",
                label: "Technical Details",
                icon: "🔧",
                content: (
                  <div className="space-y-6">
                    {aiPhases.map((phase, index) => (
                      <PhaseCard key={index} {...phase} index={index} />
                    ))}

                    <Card className="bg-gradient-to-br from-gecko-green/5 to-blue-50 border-gecko-green/30">
                      <CardHeader>
                        <CardTitle className="text-2xl">Long-term Vision (2027+)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Industry-leading privacy AI platform</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Full decentralization of AI network</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Self-sustaining community development</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Global privacy AI standard</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ),
              },
              {
                id: "privacy",
                label: "Privacy & Security",
                icon: "🔒",
                content: (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl mb-4">Our Privacy-First AI Architecture</CardTitle>
                        <CardDescription className="text-base">
                          We're committed to building AI that genuinely protects privacy, not just claims to.
                          Here's how we ensure your data stays yours.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Federated Learning</h4>
                          <p className="text-gray-700 mb-2">
                            Models train on aggregated insights, never raw user data. Your individual usage patterns
                            remain completely private while the collective model improves for everyone.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              No raw data sent to servers
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Models updated with encrypted gradients only
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Differential privacy guarantees applied
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">On-Device Processing</h4>
                          <p className="text-gray-700 mb-2">
                            AI inference happens entirely on your device using optimized local models.
                            Nothing leaves your computer, phone, or browser.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              TensorFlow Lite & ONNX Runtime for efficiency
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Works offline after initial model download
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Optimized for low resource usage
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Zero Data Collection</h4>
                          <p className="text-gray-700 mb-2">
                            We literally cannot access your data. Our architecture makes it impossible,
                            not just a policy promise.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              End-to-end encryption for sync
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Zero-knowledge architecture
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              Open source for verification
                            </li>
                          </ul>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Independent Security Audits
                          </h4>
                          <p className="text-sm text-amber-800">
                            Before any AI feature launches, we'll conduct independent security audits to verify
                            our privacy claims. Audit reports will be published publicly.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

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
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Development milestones achieved</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Performance benchmarks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Privacy audits completed</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Community contributions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Challenges and learnings</span>
                          </li>
                        </ul>
                        <div className="p-4 bg-white rounded-lg border border-amber-200">
                          <p className="text-sm font-semibold text-neutral-900">
                            Next Report: <span className="text-amber-700">Q4 2025</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ),
              },
            ]}
            defaultTab="overview"
          />
        </div>
      </Section>

      {/* Token Connection */}
      <Section id="token" className="bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
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
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">🔓</div>
                <CardTitle>Unlock AI Features</CardTitle>
                <CardDescription>
                  Hold $PRICKO tokens to get unlimited AI queries across all 8 products.
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
                Token launches THIS MONTH (November 2025). Join the $PRICKO whitelist and be part of the AI revolution.
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
        </div>
      </Section>

      {/* How You Can Participate */}
      <Section id="participate">
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
                          Opportunities:
                        </h4>
                        <ul className="space-y-2">
                          {way.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        href={way.ctaLink}
                        variant="primary"
                        size="md"
                        className="w-full"
                      >
                        {way.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Early Adopter Benefits */}
      <Section className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-white">
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
                  <CardTitle>Early Access Benefits</CardTitle>
                </div>
                <CardDescription>
                  Join the waitlist to get exclusive early access and benefits.
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
      <Section className="bg-gradient-to-b from-white to-gray-50">
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
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
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
                  Yes. $PRICKO tokens are optional. All tools work fully without crypto.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How does AI respect my privacy?</CardTitle>
                <CardDescription>
                  All AI processing happens on your device. We use federated learning to improve models collectively without accessing individual data. Zero-knowledge architecture enforced.
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

      {/* Beyond Phase 1: Infrastructure Vision (v1.3) */}
      <Section className="bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="coming" className="mb-4">Infrastructure Vision</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Beyond Phase 1: Continuous Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment: <strong className="text-gray-900">8 products by end of 2026.</strong>{" "}
              But GeckoCore Protocol is designed for continuous evolution as privacy threats change.
            </p>
          </div>

          {/* Two Columns: Why Evolve / How GeckoCore Enables */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Why Privacy Tools Must Evolve */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Why Privacy Tools Must Evolve</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gecko-green text-xl font-bold">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">New Threats Emerge</div>
                      <div className="text-sm text-gray-600">
                        Trackers evolve, regulations change, attack vectors shift
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gecko-green text-xl font-bold">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">User Needs Expand</div>
                      <div className="text-sm text-gray-600">
                        Web3 adoption, AI tools, IoT devices create new challenges
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gecko-green text-xl font-bold">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Technology Advances</div>
                      <div className="text-sm text-gray-600">
                        New cryptographic techniques unlock new capabilities
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600 italic">
                  Static tools become obsolete. Extensible infrastructure adapts.
                </p>
              </CardHeader>
            </Card>

            {/* How GeckoCore Enables This */}
            <Card className="border-2 border-gecko-green/30 bg-gradient-to-br from-gecko-green/5 to-blue-50/30">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">How GeckoCore Enables This</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Modular Architecture</div>
                      <div className="text-sm text-gray-600">
                        New feeds can be added without breaking existing tools
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Designed for Extensibility</div>
                      <div className="text-sm text-gray-600">
                        Protocol built to support future tools (SDK launching Q2 2026)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">AI-Native</div>
                      <div className="text-sm text-gray-600">
                        Models improve with federated learning from network
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Community Governance</div>
                      <div className="text-sm text-gray-600">
                        GeckoDAO decides future direction (launching 2027+)
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

          </div>

          {/* Potential Future Additions (Concepts) */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-4">
              Potential Future Additions (Concepts)
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              These are explorations, not commitments. Community governance will help decide what to build after Phase 1.
            </p>

            <div className="grid md:grid-cols-4 gap-6">

              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">Privacy DNS</CardTitle>
                  <CardDescription className="mb-3">
                    Encrypted DNS with tracker blocking
                  </CardDescription>
                  <Badge variant="coming" className="bg-gray-100 text-gray-600">Concept</Badge>
                </CardHeader>
              </Card>

              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">Identity Layer</CardTitle>
                  <CardDescription className="mb-3">
                    Zero-knowledge identity for Web3
                  </CardDescription>
                  <Badge variant="coming" className="bg-gray-100 text-gray-600">Concept</Badge>
                </CardHeader>
              </Card>

              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">Privacy AI</CardTitle>
                  <CardDescription className="mb-3">
                    AI assistant running locally
                  </CardDescription>
                  <Badge variant="coming" className="bg-gray-100 text-gray-600">Concept</Badge>
                </CardHeader>
              </Card>

              <Card className="border-2 border-gecko-green/30 bg-gradient-to-br from-gecko-green/5 to-green-50">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">Your Idea?</CardTitle>
                  <CardDescription className="mb-3">
                    Community proposals via governance
                  </CardDescription>
                  <Badge variant="coming" className="bg-gecko-green/20 text-gecko-green font-semibold">Vote 2027+</Badge>
                </CardHeader>
              </Card>

            </div>
          </div>

          {/* Key Message Callout */}
          <Card className="bg-gradient-to-r from-gecko-green/10 to-blue-50 border-2 border-gecko-green/30">
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">
                Phase 1: 8 products by end of 2026 (our commitment)
              </CardTitle>
              <CardDescription className="text-base">
                Phase 2+: GeckoCore Protocol designed to enable continuous innovation as the privacy landscape evolves
              </CardDescription>
            </CardHeader>
          </Card>

        </div>
      </Section>

      {/* GeckoCore Protocol Timeline */}
      <Section className="bg-gradient-to-br from-emerald-50 to-blue-50/40">
        <SectionHeader
          title="GeckoCore Protocol: 2026 Development Timeline"
          subtitle="Transparent development. Public progress. Proven delivery."
        />

        <div className="mt-12 max-w-6xl mx-auto">
          {/* Timeline Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Q1 2026 */}
            <Card className="p-6 border-2 border-gray-200 hover:border-gecko-green hover:shadow-md transition-all">
              <Badge variant="coming" className="bg-gecko-green/10 text-gecko-green mb-3">
                Q1 2026
              </Badge>
              <h4 className="text-lg font-bold mb-2">Foundation & Community Input</h4>
              <p className="text-sm text-gray-600">
                Whitepaper publication, architecture finalization, community feedback period opens for early adopters.
              </p>
            </Card>

            {/* Q2 2026 */}
            <Card className="p-6 border-2 border-gray-200 hover:border-gecko-green hover:shadow-md transition-all">
              <Badge variant="coming" className="bg-gecko-green/10 text-gecko-green mb-3">
                Q2 2026
              </Badge>
              <h4 className="text-lg font-bold mb-2">Core Services Development</h4>
              <p className="text-sm text-gray-600">
                Building authentication engine, token-gating mechanisms, and privacy-preserving analytics infrastructure.
              </p>
            </Card>

            {/* Q3 2026 */}
            <Card className="p-6 border-2 border-gray-200 hover:border-gecko-green hover:shadow-md transition-all">
              <Badge variant="coming" className="bg-gecko-green/10 text-gecko-green mb-3">
                Q3 2026
              </Badge>
              <h4 className="text-lg font-bold mb-2">Beta Testing & Integration</h4>
              <p className="text-sm text-gray-600">
                Private beta with 1,000 early adopters. First product integrations go live (GeckoAdvisor, GeckoShare, GeckoGuard).
              </p>
            </Card>

            {/* Q4 2026 */}
            <Card className="p-6 border-2 border-gecko-green border-opacity-50 hover:border-gecko-green hover:shadow-md transition-all bg-gecko-green/5">
              <Badge variant="live" className="bg-gecko-green text-white mb-3">
                Q4 2026
              </Badge>
              <h4 className="text-lg font-bold mb-2">Public Launch</h4>
              <p className="text-sm text-gray-600">
                GeckoCore Protocol launches publicly. All 8 products unified under one authentication system.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want to be among the first 1,000 beta testers in Q3 2026?
            </p>
            <Button href="/contact?subject=GeckoCore%20Waitlist" variant="primary" size="lg">
              Join the Waitlist →
            </Button>
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
            <Button
              href="/contact?subject=Early%20Adopter%20Waitlist"
              variant="outline"
              size="lg"
              className="bg-white text-gecko-green hover:bg-gray-100 border-white"
            >
              Join Waitlist
            </Button>
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
