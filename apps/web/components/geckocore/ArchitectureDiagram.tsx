"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  FileCheck,
  UserCheck,
  Star,
  Layers,
  Plus,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function ArchitectureDiagram() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("applications");

  // The Five Privacy Feeds from whitepaper
  const privacyFeeds = [
    {
      id: "privacy-feed",
      name: "PrivacyFeed",
      icon: Shield,
      color: "#3B82F6",
      description: "Website privacy practices, trackers, cookies, compliance",
      usedBy: ["GeckoAdvisor", "GeckoGuard", "GeckoView"]
    },
    {
      id: "threat-feed",
      name: "ThreatFeed",
      icon: AlertTriangle,
      color: "#EF4444",
      description: "Phishing, malware, scams, smart contract risks",
      usedBy: ["GeckoGuard", "GeckoLock", "GeckoVPN"]
    },
    {
      id: "meta-proof",
      name: "MetaProof",
      icon: FileCheck,
      color: "#10B981",
      description: "File metadata removal, integrity verification",
      usedBy: ["GeckoShare"]
    },
    {
      id: "access-proof",
      name: "AccessProof",
      icon: UserCheck,
      color: "#8B5CF6",
      description: "Age verification, credentials, membership (zero-knowledge)",
      usedBy: ["GeckoLock", "Future dApps"]
    },
    {
      id: "reputation-feed",
      name: "ReputationFeed",
      icon: Star,
      color: "#F59E0B",
      description: "Privacy-preserving reputation aggregation",
      usedBy: ["GeckoLock", "GeckoWatch", "Future apps"]
    }
  ];

  const phase1Products = [
    { name: "GeckoAdvisor", status: "live", color: "#3B82F6" },
    { name: "GeckoShare", status: "live", color: "#10B981" },
    { name: "GeckoGuard", status: "live", color: "#F59E0B" },
    { name: "GeckoLock", status: "live", color: "#8B5CF6" },
    { name: "GeckoView", status: "Q2 2026", color: "#06B6D4" },
    { name: "GeckoWatch", status: "Q2 2026", color: "#F97316" },
    { name: "GeckoShell", status: "Q3 2026", color: "#1E3A8A" },
    { name: "GeckoVPN", status: "Q4 2026", color: "#14B8A6" },
  ];

  const futureApplications = [
    "DeFi Protocols",
    "Wallets",
    "Browsers",
    "dApps",
    "Community Tools"
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">
          GeckoCore Protocol Architecture
        </h3>
        <p className="text-gray-400 text-sm">
          From Whitepaper v1.0 - Extensible Privacy Infrastructure
        </p>
      </div>

      <div className="space-y-4">
        {/* Layer 1: Application Layer */}
        <motion.div
          className="border border-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => setExpandedLayer(expandedLayer === "applications" ? null : "applications")}
            className="w-full bg-gradient-to-r from-emerald-600/20 to-blue-600/20 p-4 flex items-center justify-between hover:from-emerald-600/30 hover:to-blue-600/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="font-bold">Application Layer</div>
                <div className="text-xs text-gray-400">
                  Phase 1: Privacy Gecko (8 products) + Future: Any app can integrate
                </div>
              </div>
            </div>
            {expandedLayer === "applications" ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {expandedLayer === "applications" && (
            <div className="p-6 bg-gray-800/50 space-y-6">
              {/* Phase 1: 8 Products */}
              <div>
                <div className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-500/20 px-2 py-1 rounded text-xs">Phase 1: Our Commitment</span>
                  8 Products by End of 2026
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {phase1Products.map((product) => (
                    <div
                      key={product.name}
                      className="bg-gray-700/50 rounded p-3 border border-gray-600"
                    >
                      <div
                        className="w-2 h-2 rounded-full mb-2"
                        style={{ backgroundColor: product.color }}
                      />
                      <div className="text-sm font-medium">{product.name}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {product.status === "live" ? "✅ Live" : `🔄 ${product.status}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 2+: External Integrations */}
              <div>
                <div className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <span className="bg-blue-500/20 px-2 py-1 rounded text-xs">Phase 2+: Open Infrastructure</span>
                  SDK Launching Q2 2026
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {futureApplications.map((app) => (
                    <div
                      key={app}
                      className="bg-blue-900/20 rounded p-3 border border-blue-700/50 border-dashed"
                    >
                      <Plus className="w-4 h-4 text-blue-400 mb-2" />
                      <div className="text-sm text-blue-300">{app}</div>
                      <div className="text-xs text-gray-500 mt-1">Coming 2026+</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Layer 2: GeckoCore Protocol - Five Privacy Feeds */}
        <motion.div
          className="border border-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setExpandedLayer(expandedLayer === "protocol" ? null : "protocol")}
            className="w-full bg-gradient-to-r from-gecko-green/20 to-emerald-600/20 p-4 flex items-center justify-between hover:from-gecko-green/30 hover:to-emerald-600/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gecko-green" />
              <div className="text-left">
                <div className="font-bold">GeckoCore Protocol Layer</div>
                <div className="text-xs text-gray-400">
                  Five Privacy Feeds - Modular, composable, extensible
                </div>
              </div>
            </div>
            {expandedLayer === "protocol" ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {expandedLayer === "protocol" && (
            <div className="p-6 bg-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {privacyFeeds.map((feed) => {
                  const Icon = feed.icon;
                  return (
                    <div
                      key={feed.id}
                      className="bg-gray-700/50 rounded-lg p-4 border border-gray-600"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${feed.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: feed.color }} />
                        </div>
                        <div className="font-bold text-sm">{feed.name}</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{feed.description}</p>
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold">Used by:</span>{" "}
                        {feed.usedBy.join(", ")}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>

        {/* Layer 3: Solana Blockchain */}
        <motion.div
          className="border border-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-xs">⛓️</span>
              </div>
              <div>
                <div className="font-bold">Solana Blockchain</div>
                <div className="text-xs text-gray-400">
                  Proof registry, validators, state management
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Message */}
      <div className="mt-6 bg-gradient-to-r from-gecko-green/10 to-emerald-600/10 border border-gecko-green/30 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-300">
          <strong className="text-gecko-green">Phase 1:</strong> 8 products by end of 2026 (our commitment)
          <span className="mx-2">•</span>
          <strong className="text-blue-400">Phase 2+:</strong> GeckoCore designed for continuous innovation as privacy threats evolve
        </p>
      </div>
    </div>
  );
}
