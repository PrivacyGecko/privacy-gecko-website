"use client";

import { motion } from "framer-motion";
import { ConnectionLineProps } from "./types";

export function ConnectionLine({
  start,
  end,
  color,
  isActive,
  showParticles,
  animationsEnabled = true,
}: ConnectionLineProps) {
  const lineId = `line-${start.x}-${start.y}-${end.x}-${end.y}`;

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={animationsEnabled ? { opacity: 0 } : {}}
      animate={animationsEnabled ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
    >
      <defs>
        {/* Gradient for the line */}
        <linearGradient id={`gradient-${lineId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Connection line */}
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={`url(#gradient-${lineId})`}
        strokeWidth={isActive ? 3 : 2}
        className="transition-all duration-300"
      />

      {/* Animated particles */}
      {showParticles && animationsEnabled && (
        <>
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              r="4"
              fill={color}
              opacity="0.8"
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 1}s`}
              >
                <mpath xlinkHref={`#path-${lineId}`} />
              </animateMotion>
            </circle>
          ))}
        </>
      )}

      {/* Hidden path for particle animation */}
      <path
        id={`path-${lineId}`}
        d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
        fill="none"
        stroke="none"
      />
    </motion.svg>
  );
}
