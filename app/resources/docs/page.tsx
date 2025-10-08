import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export default function DocsPage() {
  return (
    <>
      <Hero
        subtitle="Documentation"
        title="Privacy Gecko Docs"
        description="Comprehensive guides and API documentation"
      />
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Documentation is coming soon. In the meantime, check out our blog for tutorials and guides.
          </p>
          <Button href="/blog" variant="primary" size="lg">
            Read Blog
          </Button>
        </div>
      </Section>
    </>
  );
}
