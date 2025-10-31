"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustSignals } from "@/components/ai";
import type { TrustSignal } from "@/components/ai";

const AI_PREVIEW_SIGNALS: TrustSignal[] = [
  {
    icon: "zap",
    label: "Learns new tracking patterns in real-time",
  },
  {
    icon: "lock",
    label: "Adapts to your browsing behavior",
  },
  {
    icon: "globe",
    label: "Detects threats before they're widespread",
  },
  {
    icon: "book-open",
    label: "Runs on your device, not our servers",
  },
];

export function AIPreviewBanner() {
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const dismissed = localStorage.getItem("ai-banner-dismissed");
    setIsDismissed(dismissed === "true");
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("ai-banner-dismissed", "true");
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.section
          id="ai-preview"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-amber-50 via-blue-50 to-purple-50 border-y border-amber-200/50 overflow-hidden"
          role="region"
          aria-label="AI Preview Banner"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bTAgMTJjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDEyYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Dismiss AI preview banner"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-8"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-200 to-purple-200 rounded-full border-2 border-amber-300">
                  <Sparkles className="w-8 h-8 text-purple-700" aria-hidden="true" />
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
                AI Development Starting Q4 2025 • First Features Q1 2026
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Every Privacy Gecko tool will gain AI capabilities that adapt, learn, and protect better—while running locally on{" "}
                <span className="font-bold text-purple-700">YOUR device</span>. Development begins Q4 2025. First features launch Q1 2026. No cloud. No data sharing.
              </p>
            </motion.div>

            {/* 4-point summary using TrustSignals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-5xl mx-auto mb-8"
            >
              <TrustSignals signals={AI_PREVIEW_SIGNALS} layout="grid" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Button
                href="/contact?subject=AI Beta Waitlist"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl"
              >
                Join the AI Early Access Waitlist
              </Button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
