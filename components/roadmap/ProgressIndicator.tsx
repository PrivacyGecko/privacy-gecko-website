"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

export function ProgressIndicator({
  progress,
  label,
  showPercentage = true,
  size = "md",
  className,
}: ProgressIndicatorProps) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <p className="text-xs font-semibold text-gray-700">{label}</p>}
          {showPercentage && (
            <p className="text-xs font-bold text-gecko-green">{clampedProgress}%</p>
          )}
        </div>
      )}
      
      <div
        className={cn(
          "bg-gradient-to-r from-gray-100 to-gray-200 rounded-full shadow-inner overflow-hidden",
          sizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={cn(
            "bg-gradient-to-r from-green-600 to-green-700 rounded-full shadow-sm",
            sizeStyles[size]
          )}
          style={{
            boxShadow: '0 0 8px rgba(21, 128, 61, 0.4)'
          }}
        />
      </div>
    </div>
  );
}
