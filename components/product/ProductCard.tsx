"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AIBadge } from "@/components/ai";
import { motion } from "framer-motion";
import { ProductAIFeatures } from "@/lib/products";
import { cn } from "@/lib/utils";

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
    // Note: Q4 2025 represents products launching/in-development during Q4 2025
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
      <Card className={cn(
        "h-full flex flex-col group",
        "hover:shadow-2xl hover:shadow-gecko-green/10 transition-all duration-300",
        "relative",
        "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
        "before:bg-gradient-to-br before:from-gecko-green/20 before:via-transparent",
        "before:to-privacy-blue/20 before:-z-10 before:opacity-0",
        "hover:border-gecko-green/50 hover:before:opacity-100",
        "hover:-translate-y-1"
      )}>
        <CardHeader className="mb-3">
          <div className="flex items-start justify-between mb-3">
            <div className="p-3 bg-gecko-green/10 rounded-lg">
              <Icon className="w-6 h-6 text-gecko-green" />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Badge variant={status}>
                {status === "live" ? "Live Now" : status === "beta" ? "Beta" : comingDate || "Coming Soon"}
              </Badge>
              {isAINative && status === "coming" && (
                <Badge variant="info" className="bg-purple-100 text-purple-700 border-purple-300 font-medium text-[10px]">
                  AI-Powered
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="mb-2">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {progress !== undefined && (
          <CardContent className="mb-3">
            <div className="flex justify-between items-center mb-1.5">
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
          </CardContent>
        )}
        {features && features.length > 0 && (
          <CardContent className="flex-grow mb-3">
            <ul className="space-y-1.5 text-sm text-gray-600">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gecko-green mr-2 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}

        <CardContent className="mt-auto pt-4">
          {status === "live" ? (
            isExternal ? (
              <Button 
                href={href}
                variant="outline" 
                size="sm" 
                className="w-full"
                
              >
                Try Free →
              </Button>
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
              <p className="text-xs text-gray-600 text-center mt-1.5">
                Early adopter benefits
              </p>
            </div>
          )}
          
          {/* Subtle AI Indicator - ONLY for coming products with AI features */}
          {status === "coming" && ai && ai.aiFeatures && ai.aiFeatures.length > 0 && (
            <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1.5">
              <span className="text-[10px]">✨</span>
              <span>
                {isAINative 
                  ? `AI-powered at launch (${ai.aiLaunchDate || getAITimeline()})` 
                  : `AI features coming ${ai.aiLaunchDate || "2026"}`
                }
              </span>
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
