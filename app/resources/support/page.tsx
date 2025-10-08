import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function SupportPage() {
  return (
    <>
      <Hero
        subtitle="Support"
        title="Get Help"
        description="We're here to help you with any questions or issues"
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Email Support</CardTitle>
              <CardDescription className="mb-4">
                Send us an email and we'll get back to you within 24 hours
              </CardDescription>
              <Button href="mailto:support@privacygecko.com" variant="primary">
                Contact Support
              </Button>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription className="mb-4">
                Join our Telegram community for quick answers and discussions
              </CardDescription>
              <Button href="https://t.me/privacygecko" variant="outline">
                Join Telegram
              </Button>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
              <CardDescription className="mb-4">
                Check our frequently asked questions for quick answers
              </CardDescription>
              <Button href="/resources/faq" variant="outline">
                View FAQ
              </Button>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription className="mb-4">
                Browse our guides and tutorials
              </CardDescription>
              <Button href="/resources/docs" variant="outline">
                Read Docs
              </Button>
            </CardHeader>
          </Card>
        </div>
      </Section>
    </>
  );
}
