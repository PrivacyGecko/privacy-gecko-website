"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export function Section({ children, container = true, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  badge,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  badge?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14", centered && "text-center")}
    >
      {badge && <div className="mb-4">{badge}</div>}
      {subtitle && (
        <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wider text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-slate-900 mb-5 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
