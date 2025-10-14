/**
 * Centralized metrics constants for PrivacyGecko Website
 *
 * IMPORTANT: Update these values to reflect actual metrics
 * All numbers must be consistent across the entire site
 *
 * Last Updated: 2025-10-14
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
  geckoGuard: {
    testers: 850,
    formatted: "850+",
    label: "Beta Testers"
  },
  geckoShell: {
    waitlist: 1800,
    formatted: "1,800+",
    label: "Waitlist"
  }
} as const;

export const TOOLS_COUNT = {
  live: 2,  // GeckoAdvisor, GeckoShare
  beta: 0,  // None currently
  inDevelopment: 6, // GeckoGuard (90%), GeckoLock (65%), GeckoView (45%), GeckoShell (30%), GeckoVPN (20%), GeckoWatch (55%)
  total: 8
} as const;

export const FOUNDED_YEAR = 2024;

export const RATING = {
  geckoShare: "4.8",
  geckoGuard: "4.6" // Historical rating, tool now in store review
} as const;
