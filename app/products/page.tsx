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
            />
          ))}
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
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay Updated on New Releases
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be the first to know when new privacy tools launch throughout 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?subject=Product%20Updates"
              className="px-8 py-3 bg-gecko-green text-white rounded-lg font-medium hover:bg-gecko-green/90 transition-all duration-200"
            >
              Get Product Updates
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
