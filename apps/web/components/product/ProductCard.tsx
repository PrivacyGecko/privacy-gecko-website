"use client";

import Link from "next/link";
import { LucideIcon, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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

  const isAINative = ai?.aiTiming === "ai-native" || ai?.aiTiming === "launch-feature";

  // Status-based styling
  const statusStyles = {
    live: {
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      iconShadow: "shadow-green",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "emerald",
    },
    beta: {
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      iconShadow: "shadow-soft",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "amber",
    },
    coming: {
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconShadow: "shadow-blue",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "blue",
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full group"
    >
      <div className={cn(
        "h-full flex flex-col",
        "bg-white rounded-2xl",
        "border border-slate-100",
        "shadow-card",
        "transition-all duration-300 ease-out",
        "hover:shadow-card-hover hover:-translate-y-2",
        "hover:border-slate-200",
        "relative overflow-hidden"
      )}>
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-emerald-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Header */}
        <div className="p-6 pb-4 relative">
          <div className="flex items-start justify-between mb-5">
            {/* Icon */}
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center",
              currentStyle.iconBg,
              currentStyle.iconShadow,
              "transition-transform duration-300 group-hover:scale-105"
            )}>
              <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-2 items-end">
              <span className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border",
                currentStyle.badge
              )}>
                {status === "live" ? "Live Now" : status === "beta" ? "Beta" : comingDate || "Coming Soon"}
              </span>
              {isAINative && status === "coming" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-violet-50 text-violet-700 border border-violet-200">
                  <Sparkles className="w-3 h-3" />
                  AI-Powered
                </span>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
            {name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="px-6 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-slate-500">Development Progress</span>
              <span className="text-xs font-bold text-blue-600">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="px-6 pb-4 flex-grow">
            <ul className="space-y-2.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer / CTA */}
        <div className="p-6 pt-4 mt-auto border-t border-slate-100">
          {status === "live" ? (
            <Button
              href={href}
              variant={isExternal ? "primary" : "outline"}
              size="sm"
              className="w-full group/btn"
            >
              {isExternal ? "Try Free" : "Learn More"}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          ) : status === "beta" ? (
            <Button href={href} variant="primary" size="sm" className="w-full group/btn">
              Join Beta
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          ) : (
            <div>
              <Button
                href="/contact?subject=Early%20Adopter%20Waitlist"
                variant="outline"
                size="sm"
                className="w-full group/btn"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Early adopter benefits included
              </p>
            </div>
          )}

          {/* AI Indicator */}
          {status === "coming" && ai && ai.aiFeatures && ai.aiFeatures.length > 0 && (
            <p className="text-xs text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-violet-500" />
              <span>
                {isAINative
                  ? `AI-powered at launch (${ai.aiLaunchDate || getAITimeline()})`
                  : `AI features coming ${ai.aiLaunchDate || "2026"}`
                }
              </span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
