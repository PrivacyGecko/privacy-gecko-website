import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Coins, TrendingUp, Users, Zap, Shield, Gift } from "lucide-react";

export default function TokenPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Pro Discounts",
      description: "Stake $PRICKO to get 20-50% off all Pro subscriptions",
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get exclusive early access to new tools before public launch",
    },
    {
      icon: Gift,
      title: "Premium Features",
      description: "Unlock exclusive features not available in standard Pro tiers",
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Vote on feature priorities and product roadmap decisions",
    },
    {
      icon: Shield,
      title: "Lifetime Benefits",
      description: "Token holders receive lifetime discounts and special perks",
    },
    {
      icon: Coins,
      title: "Staking Rewards",
      description: "Earn rewards by staking tokens and supporting the ecosystem",
    },
  ];

  const tiers = [
    {
      amount: "1,000 $PRICKO",
      discount: "20% off",
      benefits: ["20% discount on all Pro plans", "Early access notifications", "Community badge"],
    },
    {
      amount: "5,000 $PRICKO",
      discount: "35% off",
      benefits: ["35% discount on all Pro plans", "Priority support", "Beta feature access", "Governance voting rights"],
    },
    {
      amount: "10,000+ $PRICKO",
      discount: "50% off",
      benefits: ["50% discount on all Pro plans", "Lifetime discount guarantee", "VIP support channel", "Full governance rights", "Exclusive features"],
    },
  ];

  return (
    <>
      <Hero
        subtitle="$PRICKO Token"
        title="Stake Tokens, Unlock Premium Benefits"
        description="Join the Privacy Gecko ecosystem with $PRICKO tokens and get exclusive discounts, early access, and governance rights."
      />

      {/* Coming Soon Banner */}
      <Section className="bg-yellow-50 border-y border-yellow-200 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold text-yellow-900 mb-2">
            🚀 Launching Q4 2025
          </p>
          <p className="text-gray-700">
            Token staking and benefits program is currently in development. Join our waitlist to be notified at launch.
          </p>
          <Button href="/contact?subject=PRICKO%20Token%20Waitlist" variant="primary" size="md" className="mt-4">
            Join Waitlist
          </Button>
        </div>
      </Section>

      {/* What is $PRICKO */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="What is $PRICKO?"
            description="The utility token powering the Privacy Gecko ecosystem"
          />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              $PRICKO is the official utility token of the Privacy Gecko ecosystem. By holding and staking $PRICKO tokens,
              you unlock significant benefits including discounts on Pro subscriptions, early access to new tools,
              and the ability to participate in community governance.
            </p>
            <p>
              Unlike traditional subscription models, $PRICKO creates a sustainable ecosystem where early supporters
              and community members are rewarded with lifetime benefits. The more you stake, the more you save—and
              the more influence you have over the project's direction.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-neutral-100">
        <SectionHeader
          subtitle="Benefits"
          title="Why Stake $PRICKO?"
          description="Unlock exclusive perks and savings by joining the Privacy Gecko token ecosystem"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="p-3 bg-gecko-green/10 rounded-lg w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-gecko-green" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Staking Tiers */}
      <Section>
        <SectionHeader
          title="Staking Tiers"
          description="The more you stake, the more you save"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card key={index} className={index === 1 ? "border-gecko-green border-2" : ""}>
              <CardHeader>
                {index === 1 && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-gecko-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gecko-green mb-2">Stake</p>
                  <p className="text-2xl font-bold mb-2">{tier.amount}</p>
                  <div className="inline-block bg-gecko-green text-white px-4 py-1 rounded-full">
                    {tier.discount}
                  </div>
                </div>
                <div className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <span className="text-gecko-green mr-2">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-neutral-100">
        <SectionHeader
          title="How It Works"
          description="Simple steps to start saving with $PRICKO"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-gecko-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold mb-2">Acquire $PRICKO</h3>
            <p className="text-sm text-gray-600">
              Purchase $PRICKO tokens from supported exchanges or via our platform
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gecko-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold mb-2">Connect Wallet</h3>
            <p className="text-sm text-gray-600">
              Link your Solana wallet to your Privacy Gecko account
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gecko-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold mb-2">Stake Tokens</h3>
            <p className="text-sm text-gray-600">
              Stake your tokens to unlock your discount tier and benefits
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gecko-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="font-bold mb-2">Enjoy Benefits</h3>
            <p className="text-sm text-gray-600">
              Your discounts and perks are automatically applied to all subscriptions
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          title="Token FAQ"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "When will $PRICKO launch?",
              a: "Token staking is scheduled to launch in Q4 2025. Join our waitlist to be notified when it's live.",
            },
            {
              q: "What blockchain is $PRICKO on?",
              a: "$PRICKO is a Solana-based token (SPL token), chosen for fast transactions and low fees.",
            },
            {
              q: "Can I unstake my tokens?",
              a: "Yes, you can unstake at any time. Note that discounts will only apply while tokens are actively staked.",
            },
            {
              q: "Do discounts apply to existing subscriptions?",
              a: "Yes! Stake tokens and your discount will be applied starting from your next billing cycle.",
            },
            {
              q: "Is there a minimum staking period?",
              a: "No minimum. Stake and unstake freely. However, longer staking may unlock bonus rewards in the future.",
            },
          ].map((faq, index) => (
            <Card key={index} hover={false}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
                <CardDescription className="mt-2">{faq.a}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-gecko-green to-gecko-blue text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Save with $PRICKO?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the waitlist and be the first to know when token staking launches
          </p>
          <Button
            href="/contact?subject=PRICKO%20Token%20Waitlist"
            variant="outline"
            size="lg"
            className="bg-white text-gecko-green hover:bg-gray-100 border-white"
          >
            Join Waitlist
          </Button>
        </div>
      </Section>
    </>
  );
}
