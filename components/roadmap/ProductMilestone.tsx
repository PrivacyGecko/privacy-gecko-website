"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressIndicator } from "./ProgressIndicator";
import { cn } from "@/lib/utils";

export interface ProductMilestoneProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "beta" | "coming";
  badge?: string;
  comingDate?: string;
  progress?: number;
  features: string[];
  href: string;
  isExternal?: boolean;
  pricing: {
    free: string;
    pro: string;
  };
  index?: number;
}

export function ProductMilestone({
  name,
  description,
  icon: Icon,
  status,
  badge,
  comingDate,
  progress,
  features,
  href,
  isExternal,
  pricing,
  index = 0,
}: ProductMilestoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gecko-green/10 rounded-lg">
              <Icon className="w-6 h-6 text-gecko-green" />
            </div>
            {status === "live" && <Badge variant="live">{badge || "Live"}</Badge>}
            {status === "beta" && <Badge variant="beta">Beta</Badge>}
            {status === "coming" && comingDate && <Badge variant="coming">{comingDate}</Badge>}
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Progress Indicator for Coming Soon Products */}
          {status === "coming" && progress !== undefined && (
            <ProgressIndicator progress={progress} label="Development Progress" />
          )}

          {/* Features */}
          <ul className="space-y-2 text-sm text-gray-600">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-gecko-green mr-2 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Pricing */}
          {status === "live" && (
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-700">Free Tier:</p>
                <p className="text-sm text-gray-600">{pricing.free}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Pro Tier:</p>
                <p className="text-sm text-gray-600">{pricing.pro}</p>
              </div>
            </div>
          )}

          {status === "coming" && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-600 mb-1">Pricing TBA</p>
              <p className="text-sm font-semibold text-gecko-green">
                Early adopters: Lock in launch pricing
              </p>
            </div>
          )}

          {/* CTA */}
          <Button
            href={status === "coming" ? "/contact?subject=Early%20Adopter%20Waitlist" : href}
            variant={status === "live" ? "primary" : "outline"}
            size="sm"
            className="w-full"
          >
            {status === "live"
              ? isExternal
                ? "Visit Site →"
                : "Learn More"
              : "Join Waitlist"}
          </Button>

          {status === "coming" && (
            <p className="text-sm font-medium text-gecko-green text-center">
              Early adopter benefits
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
