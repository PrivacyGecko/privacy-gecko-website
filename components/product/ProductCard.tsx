"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming";
  comingDate?: string;
  href: string;
  isExternal?: boolean;
  features?: string[];
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
            <Badge variant={status}>
              {status === "live" ? "Live" : comingDate || "Coming Soon"}
            </Badge>
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
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
          ) : (
            <Button href="/contact?subject=Early%20Adopter%20Waitlist" variant="outline" size="sm" className="w-full">
              Join Waitlist
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
