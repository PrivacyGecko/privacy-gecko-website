"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shield, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear privacy policies and honest communication about our practices. Working toward fully open source by Q2 2025.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Privacy tools should be available to everyone, not just tech experts or those who can pay.",
    },
    {
      icon: Target,
      title: "Community",
      description: "Built with and for our users. We listen, iterate, and improve based on your feedback.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "We earn your trust through actions, not words. No data selling, ever.",
    },
  ];

  return (
    <>
      <Hero
        subtitle="About Us"
        title="Making Privacy Tools Accessible to Everyone"
        description="Privacy Gecko was founded with a simple mission: create privacy tools that actually work and don't require a PhD to use."
      />

      {/* Our Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                In 2024, privacy advocate @0xAnonA noticed a troubling trend: while privacy concerns were growing,
                the tools available were either too complex, too expensive, or worse—claiming to be private while
                secretly collecting user data.
              </p>
              <p>
                Privacy Gecko was born from a simple question: "What if we built privacy tools that were actually
                private, genuinely useful, and accessible to everyone?"
              </p>
              <p>
                We started with GeckoAdvisor, a tool to help people understand their privacy posture. The response
                was overwhelming. People wanted more. So we built GeckoShare for encrypted file sharing, GeckoGuard
                for tracking protection, and we're not stopping there.
              </p>
              <p>
                Today, Privacy Gecko is an ecosystem of 8 tools (3 live, 5 coming soon) serving hundreds of
                privacy-conscious users worldwide. We're committed to open source transparency, community-driven development,
                and our original mission: making privacy accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              "To empower individuals with simple, effective privacy tools that protect their digital lives
              without requiring technical expertise or breaking the bank."
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          subtitle="Our Values"
          title="What We Stand For"
          description="The principles that guide everything we build"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
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
                    <value.icon className="w-6 h-6 text-gecko-green" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Team"
          title="Built by Privacy Advocates"
        />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gecko-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🦎
                  </div>
                  <div>
                    <CardTitle>@0xAnonA</CardTitle>
                    <CardDescription>Founder & Privacy Advocate</CardDescription>
                  </div>
                </div>
                <p className="text-gray-600">
                  Privacy advocate since 2014. Built Privacy Gecko to democratize digital privacy.
                  Previously worked in cybersecurity and saw firsthand how difficult it was for regular
                  people to protect themselves online.
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Help us make privacy accessible to everyone. Use our tools, provide feedback,
            or spread the word about privacy-first software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products" variant="primary" size="lg">
              Explore Our Tools
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
