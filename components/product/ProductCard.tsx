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
  features?: string[];
}

export function ProductCard({
  name,
  description,
  icon: Icon,
  status,
  comingDate,
  href,
  features,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card>
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
          <CardContent>
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
        <CardContent className="mt-4">
          {status === "live" ? (
            <Button href={href} variant="outline" size="sm" className="w-full">
              Learn More
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="w-full" disabled>
              Coming Soon
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
