"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AIBadge } from "@/components/ai";
import { motion } from "framer-motion";

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
}: ProductCardProps) {
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
                {status === "live" ? "Live" : status === "beta" ? "Beta" : comingDate || "Coming Soon"}
              </Badge>
              {hasAI && <AIBadge status="coming-soon" timeline="Q4 2025" size="sm" />}
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
