"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CentralHub } from "./CentralHub";
import { ProductNode } from "./ProductNode";
import { ConnectionLine } from "./ConnectionLine";
import { PRODUCTS } from "./products";
import { EcosystemCanvasProps, Position } from "./types";

export function EcosystemCanvas({
  animationsEnabled = true,
  onProductClick,
}: EcosystemCanvasProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const shouldAnimate = animationsEnabled && !reducedMotion;

  // Responsive sizing
  const [dimensions, setDimensions] = useState({
    orbitRadius: 320,
    hubSize: 160,
    nodeSize: 120,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setDimensions({
          orbitRadius: 240,
          hubSize: 100,
          nodeSize: 80,
        });
      } else if (width < 1024) {
        // Tablet
        setDimensions({
          orbitRadius: 280,
          hubSize: 120,
          nodeSize: 100,
        });
      } else {
        // Desktop
        setDimensions({
          orbitRadius: 320,
          hubSize: 160,
          nodeSize: 120,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate positions for products in a circle
  const calculatePositions = (): Position[] => {
    const centerX = 400; // Canvas center X
    const centerY = 400; // Canvas center Y
    const angleStep = (2 * Math.PI) / PRODUCTS.length;

    return PRODUCTS.map((_, index) => {
      const angle = angleStep * index - Math.PI / 2; // Start from top
      return {
        x: centerX + dimensions.orbitRadius * Math.cos(angle),
        y: centerY + dimensions.orbitRadius * Math.sin(angle),
      };
    });
  };

  const positions = calculatePositions();
  const hubPosition = { x: 400, y: 400 };

  return (
    <motion.div
      className="relative w-full h-[800px] bg-gradient-to-br from-gray-50 via-white to-emerald-50/20 rounded-2xl overflow-hidden"
      initial={shouldAnimate ? { opacity: 0 } : {}}
      animate={shouldAnimate ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Canvas container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[800px]">
          {/* Connection lines */}
          {PRODUCTS.map((product, index) => (
            <ConnectionLine
              key={`line-${product.id}`}
              start={hubPosition}
              end={positions[index]}
              color={product.color}
              isActive={hoveredProduct === product.id}
              showParticles={product.status === "live"}
              animationsEnabled={shouldAnimate}
            />
          ))}

          {/* Central hub */}
          <CentralHub size={dimensions.hubSize} animationsEnabled={shouldAnimate} />

          {/* Product nodes */}
          {PRODUCTS.map((product, index) => (
            <ProductNode
              key={product.id}
              product={product}
              position={positions[index]}
              size={dimensions.nodeSize}
              onHover={setHoveredProduct}
              onClick={onProductClick}
              isActive={hoveredProduct === product.id}
              animationsEnabled={shouldAnimate}
            />
          ))}
        </div>
      </div>

      {/* Accessibility label */}
      <div className="sr-only" role="region" aria-label="GeckoCore Protocol Ecosystem">
        GeckoCore Protocol connects {PRODUCTS.length} privacy tools: {PRODUCTS.map(p => p.name).join(", ")}
      </div>
    </motion.div>
  );
}
