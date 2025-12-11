"use client";

import { motion } from "framer-motion";
import { CentralHubProps } from "./types";

export function CentralHub({ size, animationsEnabled = true }: CentralHubProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      initial={animationsEnabled ? { scale: 0, opacity: 0 } : {}}
      animate={animationsEnabled ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
    >
      <div
        className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-gecko-green to-emerald-600 border-4 border-white shadow-2xl"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Pulse glow animation */}
        {animationsEnabled && (
          <div className="absolute inset-0 rounded-full bg-gecko-green/40 animate-pulse-glow" />
        )}

        {/* Inner content */}
        <div className="relative z-10 text-center text-white">
          <div className="font-display font-bold text-lg md:text-xl lg:text-2xl">
            GeckoCore
          </div>
          <div className="text-xs md:text-sm opacity-90 mt-1">
            Protocol
          </div>
        </div>
      </div>
    </motion.div>
  );
}
