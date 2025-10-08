import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <>
      <Hero
        title="Welcome to Privacy Gecko Pro!"
        description="Your subscription is now active. Thank you for supporting privacy tools that actually work."
      >
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-gecko-green" />
        </div>
      </Hero>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold mb-4">What's Next?</h2>
          <p className="text-gray-600 mb-8">
            Check your email for your receipt and instructions to get started with your Pro features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products" variant="primary" size="lg">
              Browse Products
            </Button>
            <Button href="/resources/docs" variant="outline" size="lg">
              Read Documentation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
