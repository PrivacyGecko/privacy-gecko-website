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
        "bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/40",
        "overflow-hidden",
        className
      )}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-gecko-green/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-privacy-blue/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto text-balance">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
