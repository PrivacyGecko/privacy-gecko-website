"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shield, Lock, Eye, FileCheck, AlertTriangle, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityPage() {
  const securityPractices = [
    {
      icon: Lock,
      title: "Encryption",
      description: "All data transmitted to and from our services uses industry-standard TLS 1.3 encryption.",
    },
    {
      icon: Shield,
      title: "Security Headers",
      description: "We implement comprehensive security headers including CSP, HSTS, and X-Frame-Options to protect against common attacks.",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "We collect minimal data and never share it with third parties. No tracking, no ads, no data selling.",
    },
    {
      icon: FileCheck,
      title: "Regular Audits",
      description: "Our codebase undergoes regular security reviews. Product code will be audited before Q4 2025 release.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Security"
        title="Security at Privacy Gecko"
        description="We take security seriously. Learn about our practices, report vulnerabilities, and help us keep everyone safe."
      />

      {/* Security Practices */}
      <Section>
        <SectionHeader
          subtitle="Our Approach"
          title="How We Protect You"
          description="Security and privacy are at the core of everything we build"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPractices.map((practice, index) => (
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
                    <practice.icon className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vulnerability Disclosure */}
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gecko-green rounded-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold">Responsible Disclosure</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 mb-8">
              <p>
                We appreciate the security research community and believe in responsible disclosure.
                If you discover a security vulnerability in our systems, please report it to us
                following these guidelines:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Report</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Email:</strong> Send a detailed report to{" "}
                  <a href="mailto:security@privacygecko.com" className="text-gecko-green hover:underline">
                    security@privacygecko.com
                  </a>
                </li>
                <li>
                  <strong>Encryption:</strong> You can encrypt your message using our PGP key (coming soon)
                </li>
                <li>
                  <strong>Details:</strong> Include steps to reproduce, potential impact, and any proof-of-concept code
                </li>
                <li>
                  <strong>Timeline:</strong> We aim to acknowledge reports within 48 hours and provide updates weekly
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What to Expect</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acknowledgment of your report within 48 hours</li>
                <li>Regular updates on our progress addressing the issue</li>
                <li>Credit for your discovery (if desired) after the issue is resolved</li>
                <li>No legal action for good-faith security research</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Out of Scope</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Social engineering or phishing attacks</li>
                <li>Denial of Service (DoS) attacks</li>
                <li>Physical security issues</li>
                <li>Issues in third-party services not under our control</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="mailto:security@privacygecko.com"
                variant="primary"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report a Vulnerability
              </Button>
              <Button
                href="https://github.com/privacygecko"
                variant="outline"
                size="lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Data Protection */}
      <Section>
        <SectionHeader
          subtitle="Data Protection"
          title="How We Handle Your Data"
        />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Data Collection</h3>
                    <p>
                      We collect only the essential data needed to provide our services. No tracking cookies,
                      no analytics beyond privacy-friendly Plausible, no third-party marketing tools.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Storage</h3>
                    <p>
                      User data is encrypted at rest and in transit. We use industry-standard practices
                      for secure data storage and never store sensitive information unnecessarily.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services</h3>
                    <p>
                      We carefully vet all third-party services. Currently, we only use:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Plausible Analytics (privacy-friendly, GDPR-compliant, no cookies)</li>
                      <li>Vercel (hosting infrastructure with strong security practices)</li>
                      <li>Stripe (payment processing with PCI DSS Level 1 compliance)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                    <p>
                      You have the right to access, correct, or delete your data at any time.
                      Contact us at{" "}
                      <a href="mailto:privacy@privacygecko.com" className="text-gecko-green hover:underline">
                        privacy@privacygecko.com
                      </a>{" "}
                      for data requests.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Security Timeline */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Roadmap"
          title="Security Milestones"
        />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gecko-green rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Q1 2025 - Website Launch</h3>
                  <p className="text-gray-600">
                    Open-sourced website code, implemented security headers, GDPR-compliant cookie consent
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                  Q4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Q4 2025 - Product Launches</h3>
                  <p className="text-gray-600">
                    Comprehensive security audit before product releases, open-source product code,
                    penetration testing completion
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                  2026
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">2026 - Ongoing Security</h3>
                  <p className="text-gray-600">
                    Annual security audits, bug bounty program launch, SOC 2 Type II certification pursuit
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Acknowledgments */}
      <Section id="acknowledgments">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">Security Acknowledgments</h2>
            <p className="text-lg text-gray-600 mb-6">
              We would like to thank the following researchers for responsibly disclosing security
              vulnerabilities and helping us improve Privacy Gecko:
            </p>
            <Card>
              <CardHeader>
                <p className="text-gray-600 italic">
                  No vulnerabilities have been reported yet. Be the first to help us make Privacy Gecko
                  more secure!
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gecko-green/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Questions About Security?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Contact our security team or learn more about our privacy practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:security@privacygecko.com" variant="primary" size="lg">
              Contact Security Team
            </Button>
            <Button href="/legal/privacy" variant="outline" size="lg">
              Read Privacy Policy
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
