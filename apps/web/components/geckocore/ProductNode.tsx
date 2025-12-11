"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProductNodeProps } from "./types";

export function ProductNode({
  product,
  position,
  size,
  onHover,
  onClick,
  isActive = false,
  animationsEnabled = true,
}: ProductNodeProps) {
  const Icon = product.icon;
  const isLive = product.status === "live";

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(product.id);
    }
  };

  const nodeContent = (
    <motion.div
      className={`absolute z-10 flex flex-col items-center cursor-pointer group`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      initial={animationsEnabled ? { scale: 0, opacity: 0 } : {}}
      animate={animationsEnabled ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 2.2 + (parseInt(product.id) * 0.1), ease: "easeOut" }}
      onMouseEnter={() => onHover?.(product.id)}
      onMouseLeave={() => onHover?.(null)}
      onClick={handleClick}
    >
      {/* Product circle */}
      <div
        className={`relative flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
          isActive
            ? "border-white shadow-2xl scale-110"
            : "border-white/50 shadow-lg group-hover:border-white group-hover:shadow-2xl group-hover:scale-110"
        }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: product.color,
        }}
      >
        {/* Icon */}
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />

        {/* Status badge */}
        {!isLive && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white rounded-full text-xs font-semibold whitespace-nowrap shadow-md">
            {product.launchQuarter}
          </div>
        )}
      </div>

      {/* Product name */}
      <div className="mt-3 text-center">
        <div className="font-semibold text-sm md:text-base text-gray-900">
          {product.name}
        </div>
        {isLive && (
          <div className="text-xs text-gecko-green font-semibold mt-0.5">
            LIVE
          </div>
        )}
      </div>
    </motion.div>
  );

  // Wrap in Link if product is live
  if (isLive && product.href) {
    return (
      <Link href={product.href} target="_blank" rel="noopener noreferrer">
        {nodeContent}
      </Link>
    );
  }

  return nodeContent;
}
