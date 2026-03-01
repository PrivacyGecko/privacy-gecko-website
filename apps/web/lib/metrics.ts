/**
 * Centralized metrics constants for PrivacyGecko Website
 *
 * IMPORTANT: Update these values to reflect actual metrics
 * All numbers must be consistent across the entire site
 *
 * Last Updated: 2026-03-01
 */

export const METRICS = {
  community: {
    total: 1200,
    formatted: "1,200+",
    label: "privacy advocates"
  },
  geckoShare: {
    users: 2100,
    formatted: "2,100+",
    label: "Active Users"
  },
} as const;

export const TOOLS_COUNT = {
  live: 2,  // GeckoAdvisor, GeckoShare
  beta: 0,
  inDevelopment: 0,
  total: 2
} as const;

export const FOUNDED_YEAR = 2024;

export const RATING = {
  geckoShare: "4.8",
} as const;
