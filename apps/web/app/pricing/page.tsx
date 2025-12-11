"use client";

import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/products";
import { CheckCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {

  return (
    <>
      <Hero
        subtitle="Products"
        title="Your Complete Privacy Toolkit"
        description="Explore our suite of privacy tools designed to protect every aspect of your digital life."
      />

      {/* Product Status Notice */}
      <Section className="py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-2 text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Product Availability</p>
              <p>We're launching our privacy toolkit throughout 2025. Products marked "Live" are available now. Pricing will be announced as each product launches.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Features Grid */}
      <Section>
        <SectionHeader
          title="Privacy Tools Overview"
          description="Discover what each tool can do for your digital privacy"
        />
        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="scroll-mt-24"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <product.icon className="w-6 h-6 text-gecko-green" />
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <Badge variant={product.status}>
                          {product.status === "live" ? "Live" : product.comingDate}
                        </Badge>
                      </div>
                      <CardDescription>{product.tagline}</CardDescription>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-gecko-green mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    {product.status === "live" ? (
                      <Button href={product.href} variant="primary" className="w-full">
                        Learn More About {product.name} →
                      </Button>
                    ) : (
                      <Button variant="ghost" className="w-full" disabled>
                        {product.comingDate}
                      </Button>
                    )}
                  </div>
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
            Interested in Privacy Gecko?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated on product launches and be the first to know when pricing is announced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact?subject=Product%20Updates"
              variant="primary"
              size="lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).plausible) {
                  (window as any).plausible('Contact Interest', { props: { source: 'products' } });
                }
              }}
            >
              Get Updates
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
