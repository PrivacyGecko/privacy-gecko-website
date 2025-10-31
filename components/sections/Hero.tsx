"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  children,
  centered = true,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(centered && "text-center")}
        >
          {subtitle && (
            <p className="text-gecko-green font-semibold mb-4 uppercase tracking-wide text-sm">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
