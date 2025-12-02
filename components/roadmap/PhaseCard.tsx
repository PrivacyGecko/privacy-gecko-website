"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface PhaseCardProps {
  phase: string;
  timeline: string;
  status: "completed" | "in-progress" | "upcoming";
  statusLabel: string;
  deliverables?: string[];
  products?: string[];
  features?: string[];
  improvements?: string[];
  milestones?: string[];
  output?: string;
  index?: number;
}

const statusStyles = {
  completed: "bg-emerald-100 text-emerald-800 border-emerald-300",
  "in-progress": "bg-gecko-green/10 text-gecko-green border-gecko-green/30",
  upcoming: "bg-gray-100 text-gray-700 border-gray-300",
};

const statusIcons = {
  completed: CheckCircle2,
  "in-progress": Calendar,
  upcoming: Calendar,
};

export function PhaseCard({
  phase,
  timeline,
  status,
  statusLabel,
  deliverables,
  products,
  features,
  improvements,
  milestones,
  output,
  index = 0,
}: PhaseCardProps) {
  const StatusIcon = statusIcons[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <CardTitle className="text-2xl font-display">{phase}</CardTitle>
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border w-fit",
                statusStyles[status]
              )}
            >
              <StatusIcon className="w-4 h-4" />
              {statusLabel}
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{timeline}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {deliverables && deliverables.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Deliverables
              </h4>
              <ul className="space-y-2">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {products && products.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Products with AI
              </h4>
              <ul className="space-y-2">
                {products.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {features && features.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Features
              </h4>
              <ul className="space-y-2">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {improvements && improvements.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Infrastructure Improvements
              </h4>
              <ul className="space-y-2">
                {improvements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {milestones && milestones.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Open Source Milestones
              </h4>
              <ul className="space-y-2">
                {milestones.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gecko-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {output && (
            <div className="p-4 bg-gecko-green/5 rounded-lg border border-gecko-green/20">
              <p className="text-sm font-semibold text-gray-900 mb-1">Output:</p>
              <p className="text-sm text-gray-700">{output}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
