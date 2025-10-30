"use client";

import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { CheckCircle2, Rocket, Code, GraduationCap, Newspaper, Video } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function JoinAIRevolution() {
  const betaRequirements = [
    "Active user of 2+ Privacy Gecko products",
    "Willing to provide structured feedback",
    "Basic understanding of privacy concepts",
  ];

  const betaBenefits = [
    "Test cutting-edge privacy AI",
    "Influence feature development",
    "Earn $PRICKO token rewards",
    "Direct feedback to dev team",
    "Exclusive beta tester NFT",
  ];

  const contributionTracks = [
    {
      title: "For AI Researchers",
      benefits: [
        "Access anonymized training datasets",
        "Contribute to model improvements",
        "Publish research using our platform",
        "Developer grants available",
      ],
    },
    {
      title: "For Privacy Experts",
      benefits: [
        "Review AI privacy claims",
        "Audit model architectures",
        "Suggest improvements",
        "Bounties for vulnerability findings",
      ],
    },
    {
      title: "For Developers",
      benefits: [
        "Integrate AI into your apps",
        "Build on our AI APIs",
        "Create privacy AI tools",
        "Share in ecosystem success",
      ],
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gecko-green/5 via-blue-50 to-purple-50">
      <SectionHeader
        subtitle="GET INVOLVED"
        title="Join the AI Revolution"
        description="Be part of building the future of privacy-first AI"
      />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Join the AI Beta Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white border-2 border-gecko-green/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gecko-green/10 rounded-lg">
                  <Rocket className="w-8 h-8 text-gecko-green" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Join the AI Beta (Q3 2025)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Get early access to AI features before public release
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">What You'll Get:</h4>
                  <ul className="space-y-2">
                    {betaBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {betaRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact?subject=AI Beta Application"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gecko-green text-white font-semibold rounded-lg hover:bg-gecko-green/90 transition-colors"
                  >
                    Apply for AI Beta
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contribute to AI Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
              Contribute to AI Development
            </h3>
            <p className="text-gray-600">
              Multiple ways to shape the future of privacy-first AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {contributionTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {track.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <Code className="w-5 h-5" />
              Explore Developer Programs
            </Link>
          </div>
        </motion.div>

        {/* Stay Updated Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
              Stay Updated on AI Progress
            </h3>
            <p className="text-gray-600">
              Follow our AI development journey in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Newsletter Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Newspaper className="w-6 h-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl">Subscribe to AI Updates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Receive monthly updates on AI development:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Monthly AI development reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Feature release announcements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Research paper publications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Community showcases</span>
                  </li>
                </ul>
                <Link
                  href="/contact?subject=AI Newsletter"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe to Newsletter
                </Link>
              </CardContent>
            </Card>

            {/* Office Hours Card */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Video className="w-6 h-6 text-purple-700" />
                  </div>
                  <CardTitle className="text-xl">Monthly AI Office Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Join live sessions with the AI team:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Live Q&A with AI team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Demo new capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Community feedback sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Technical deep dives</span>
                  </li>
                </ul>
                <Link
                  href="/contact?subject=AI Office Hours"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Register for Next Office Hours
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-gecko-green to-blue-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-3">
                Privacy-First AI Starts With You
              </h3>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Whether you're a user, developer, researcher, or privacy advocate—your voice shapes
                how we build AI that respects privacy. Join us.
              </p>
              <Link
                href="/ai-roadmap"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gecko-green font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                View Full AI Roadmap
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
