"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Lock, Eye, CheckCircle, Sparkles } from "lucide-react";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
  variant?: "default" | "home";
}

export function Hero({
  title,
  subtitle,
  description,
  children,
  centered = true,
  className,
  variant = "default",
}: HeroProps) {
  // Use premium home hero for homepage
  if (variant === "home") {
    return (
      <HomeHero
        title={title}
        subtitle={subtitle}
        description={description}
      >
        {children}
      </HomeHero>
    );
  }

  return (
    <section
      className={cn(
        "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-slate-50" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(centered && "text-center")}
        >
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {subtitle}
              </span>
            </motion.div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 text-balance leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

// Premium Home Page Hero - World-class design with floating elements
function HomeHero({
  title,
  subtitle,
  description,
  children,
}: {
  title: React.ReactNode;
  subtitle?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />

        {/* Radial glow from top */}
        <div className="absolute inset-0 bg-hero-radial" />

        {/* Decorative gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-[5%] w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/20 to-transparent rounded-full" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pattern-dots opacity-[0.15]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white shadow-soft border border-slate-100 text-sm font-medium text-slate-700">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  {subtitle}
                </span>
              </motion.div>
            )}

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-display font-bold text-slate-900 mb-8 leading-[1.08] tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
              >
                {description}
              </motion.div>
            )}

            {/* CTA Buttons */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {children}
              </motion.div>
            )}

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium">No tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium">Free tier always</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium">Open source</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Premium Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              {/* Central Shield - Main Visual */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl scale-110" />
                  {/* Main shield container */}
                  <div className="relative w-36 h-36 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-blue-lg flex items-center justify-center">
                    <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Floating Feature Card 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 right-0 z-10"
              >
                <div className="bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-green">
                      <Lock className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-[15px]">End-to-End Encrypted</p>
                      <p className="text-sm text-slate-500">256-bit AES protection</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Feature Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-12 left-0 z-10"
              >
                <div className="bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-blue">
                      <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-[15px]">Zero Knowledge</p>
                      <p className="text-sm text-slate-500">We can't see your data</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Feature Card 3 - Top Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                className="absolute top-24 left-4 z-10"
              >
                <div className="bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-[15px]">8 Privacy Tools</p>
                      <p className="text-sm text-slate-500">Complete protection</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border-2 border-dashed border-slate-200/60 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[22rem] h-[22rem] rounded-full border border-slate-100/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[26rem] h-[26rem] rounded-full border border-slate-100/20" />
              </div>

              {/* Small floating dots */}
              <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 right-20 w-3 h-3 rounded-full bg-blue-400"
              />
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 right-16 w-2 h-2 rounded-full bg-emerald-400"
              />
              <motion.div
                animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-32 left-20 w-2.5 h-2.5 rounded-full bg-violet-400"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
