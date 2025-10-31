"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AIBadge } from "@/components/ai";
import { motion } from "framer-motion";
import { ProductAIFeatures } from "@/lib/products";

interface ProductCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "beta" | "coming";
  comingDate?: string;
  href: string;
  isExternal?: boolean;
  features?: string[];
  progress?: number;
  hasAI?: boolean;
  ai?: ProductAIFeatures;
}

export function ProductCard({
  name,
  description,
  icon: Icon,
  status,
  comingDate,
  href,
  isExternal = false,
  features,
  progress,
  hasAI = true,
  ai,
}: ProductCardProps) {
  // Helper function to get AI timeline display text
  const getAITimeline = () => {
    if (!ai) return "Q4 2025";
    switch (ai.aiTiming) {
      case "launch-feature":
        return "Q4 2025";
      case "ai-native":
        return "Core Feature";
      case "post-launch":
        return "Q1 2026";
      case "future":
        return "2026+";
      default:
        return "Q4 2025";
    }
  };

  // Helper function to determine if AI is native (launches with product)
  const isAINative = ai?.aiTiming === "ai-native" || ai?.aiTiming === "launch-feature";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gecko-green/10 rounded-lg">
              <Icon className="w-6 h-6 text-gecko-green" />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Badge variant={status}>
                {status === "live" ? "Live Now" : status === "beta" ? "Beta" : comingDate || "Coming Soon"}
              </Badge>
              {isAINative && status === "coming" && (
                <Badge variant="info" className="bg-purple-600 text-white border-purple-600">
                  AI-Native
                </Badge>
              )}
            </div>
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {progress !== undefined && (
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-semibold text-gray-700">Development Progress</p>
                <p className="text-xs font-bold text-gecko-green">{progress}%</p>
              </div>
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-2.5 shadow-inner overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 h-2.5 rounded-full shadow-sm"
                  style={{
                    boxShadow: '0 0 8px rgba(21, 128, 61, 0.4)'
                  }}
                />
              </div>
            </div>
          </CardContent>
        )}
        {features && features.length > 0 && (
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm text-gray-600">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gecko-green mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        )}

        {/* AI Features Section */}
        {ai && ai.aiFeatures && ai.aiFeatures.length > 0 && (
          <CardContent>
            <div className={`rounded-lg p-4 ${
              isAINative
                ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🤖</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  isAINative
                    ? 'bg-purple-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  {isAINative ? `AI-Powered (${getAITimeline()})` : `AI Features (${getAITimeline()})`}
                </span>
              </div>
              <p className="text-xs font-semibold text-gray-700 mb-2">
                {isAINative ? 'AI capabilities at launch:' : 'Coming AI features:'}
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {ai.aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-1.5 flex-shrink-0">{isAINative ? '★' : '•'}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        )}

        <CardContent className="mt-auto pt-4">
          {status === "live" ? (
            isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2 border-gecko-green text-gecko-green hover:bg-gecko-green hover:text-white focus:ring-gecko-green px-6 py-2.5 text-sm w-full"
              >
                Visit Site →
              </a>
            ) : (
              <Button href={href} variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            )
          ) : status === "beta" ? (
            <Button href={href} variant="primary" size="sm" className="w-full">
              Join Beta →
            </Button>
          ) : (
            <div>
              <Button href="/contact?subject=Early%20Adopter%20Waitlist" variant="outline" size="sm" className="w-full">
                Join Waitlist
              </Button>
              <p className="text-xs text-gray-600 text-center mt-2">
                Includes 20% lifetime discount
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
