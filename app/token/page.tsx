import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Coins, TrendingUp, Users, Zap, Shield, Gift, Key, ShieldCheck, Grid3x3 } from "lucide-react";

export default function TokenPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Pro Discounts",
      description: "Hold $PRICKO to get discounts on all Pro subscriptions",
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get exclusive early access to new tools before public launch",
    },
    {
      icon: Gift,
      title: "Premium Features",
      description: "Unlock exclusive features not available in standard Pro tiers through GeckoCore Protocol",
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Vote on feature priorities and product roadmap decisions through GeckoCore Protocol",
    },
    {
      icon: Shield,
      title: "Lifetime Benefits",
      description: "Token holders receive lifetime discounts and special perks",
    },
    {
      icon: Coins,
      title: "Ecosystem Access",
      description: "Seamless access across all 8 Privacy Gecko products through GeckoCore Protocol",
    },
  ];

  const tiers = [
    {
      amount: "1,000 $PRICKO",
      discount: "Starter Benefits",
      benefits: ["Pro plan discounts on live products", "Early access notifications", "Community badge"],
    },
    {
      amount: "5,000 $PRICKO",
      discount: "Enhanced Benefits",
      benefits: ["Larger Pro plan discounts", "Priority support", "Beta feature access", "Governance voting rights via GeckoCore"],
    },
    {
      amount: "10,000+ $PRICKO",
      discount: "Premium Benefits",
      benefits: ["Maximum Pro plan discounts", "Lifetime discount guarantee", "VIP support channel", "Full governance rights via GeckoCore", "Exclusive features"],
    },
  ];

  return (
    <>
      <Hero
        subtitle="$PRICKO Token"
        title="Hold Tokens, Unlock Premium Benefits"
        description="Join the Privacy Gecko ecosystem with $PRICKO tokens (launching November 2025) and get exclusive discounts, early access, and community benefits."
      />

      {/* Coming Soon Banner */}
      <Section className="bg-yellow-50 border-y border-yellow-200 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold text-yellow-900 mb-2">
            🚀 Launching November 2025
          </p>
          <p className="text-gray-700">
            Token benefits program is currently in development. Join our waitlist to be notified at launch.
          </p>
          <Button href="/contact?subject=PRICKO%20Token%20Waitlist" variant="primary" size="md" className="mt-4">
            Join Waitlist
          </Button>
        </div>
      </Section>

      {/* What is $PRICKO */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="What is $PRICKO?"
            description="The utility token powering the Privacy Gecko ecosystem"
          />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              $PRICKO is the official utility token of the Privacy Gecko ecosystem, launching November 2025. By holding $PRICKO tokens,
              you will unlock significant benefits including discounts on Pro subscriptions, early access to new tools,
              and the ability to participate in community governance through the GeckoCore Protocol.
            </p>
            <p>
              Unlike traditional subscription models, $PRICKO creates a sustainable ecosystem where early supporters
              and community members are rewarded with lifetime benefits. Token holders gain access to premium features
              and help shape the project's direction through governance.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/20">
        <SectionHeader
          subtitle="Benefits"
          title="Why Hold $PRICKO?"
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

      {/* Token Tiers */}
      <Section className="bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <SectionHeader
          title="Token Holder Tiers"
          description="The more tokens you hold, the more benefits you unlock"
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
                  <p className="text-sm font-semibold text-gecko-green mb-2">Hold</p>
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

      {/* GeckoCore Protocol Utility */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <SectionHeader
          title="GeckoCore Protocol: Unified Token Utility"
          subtitle="Stake once. Unlock premium features across all 8 products."
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Feature Card 1 */}
          <Card className="p-6">
            <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
              <Key className="w-6 h-6 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Universal Authentication</h3>
            <p className="text-gray-600">
              Connect your Solana wallet once to access all Privacy Gecko products. No passwords, no multiple accounts—just cryptographic proof of ownership.
            </p>
          </Card>

          {/* Feature Card 2 */}
          <Card className="p-6">
            <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
              <Coins className="w-6 h-6 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Token-Gated Features</h3>
            <p className="text-gray-600">
              Staking $PRICKO unlocks premium capabilities: unlimited AI summaries (GeckoView), extended file storage (GeckoShare), priority VPN servers, and more.
            </p>
          </Card>

          {/* Feature Card 3 */}
          <Card className="p-6">
            <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Zero-Knowledge Privacy</h3>
            <p className="text-gray-600">
              Products communicate through encrypted channels. We verify your authorization without seeing your data—privacy by design.
            </p>
          </Card>

          {/* Feature Card 4 */}
          <Card className="p-6">
            <div className="w-12 h-12 bg-gecko-green/10 rounded-lg p-3 mb-4">
              <Grid3x3 className="w-6 h-6 text-gecko-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seamless Ecosystem</h3>
            <p className="text-gray-600">
              Switch between GeckoAdvisor, GeckoShare, GeckoGuard, GeckoLock, and 4 more tools without breaking your flow. One ecosystem, complete privacy.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button href="/geckocore" variant="primary" size="lg">
            Explore GeckoCore Protocol →
          </Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-white">
        <SectionHeader
          title="How It Works"
          description="Simple steps to start unlocking benefits with $PRICKO"
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
            <h3 className="font-bold mb-2">Connect to GeckoCore</h3>
            <p className="text-sm text-gray-600">
              Connect your wallet to GeckoCore Protocol to activate benefits
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gecko-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="font-bold mb-2">Enjoy Benefits</h3>
            <p className="text-sm text-gray-600">
              Your benefits are automatically applied to all subscriptions
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <SectionHeader
          title="Token FAQ"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "When will $PRICKO launch?",
              a: "The $PRICKO token is scheduled to launch in November 2025. Join our waitlist to be notified when it's live.",
            },
            {
              q: "What blockchain is $PRICKO on?",
              a: "$PRICKO is a Solana-based token (SPL token), chosen for fast transactions and low fees.",
            },
            {
              q: "How do I activate my benefits?",
              a: "Simply hold $PRICKO tokens in your wallet and connect to GeckoCore Protocol. Your benefits activate automatically based on your token balance.",
            },
            {
              q: "Do benefits apply to existing subscriptions?",
              a: "Yes! Hold tokens and connect to GeckoCore, and your benefits will be applied starting from your next billing cycle.",
            },
            {
              q: "Do I need to lock my tokens?",
              a: "No. Token benefits are based on your current holdings in your connected wallet. You maintain full custody and can transfer tokens anytime.",
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
      <Section className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Join the Ecosystem?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the waitlist and be the first to know when the token launches
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
