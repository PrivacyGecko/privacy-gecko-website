/**
 * AI Components - Barrel Export
 *
 * Foundational AI components for Privacy Gecko's AI integration (Q4 2025).
 * These components provide consistent UI patterns for displaying AI features,
 * timelines, comparisons, and trust signals across the website.
 *
 * @example
 * ```tsx
 * import { AIBadge, AIFeatureList, TrustSignals } from "@/components/ai";
 * ```
 */

// Component exports
export { AIBadge } from "./AIBadge";
export type { AIBadgeProps } from "./AIBadge";

export { AIFeatureList } from "./AIFeatureList";
export type { AIFeatureListProps } from "./AIFeatureList";

export { TimelineIndicator } from "./TimelineIndicator";
export type { TimelineIndicatorProps } from "./TimelineIndicator";

export { ComparisonTable } from "./ComparisonTable";
export type { ComparisonTableProps, ComparisonWay } from "./ComparisonTable";

export { TrustSignals, DEFAULT_AI_TRUST_SIGNALS } from "./TrustSignals";
export type { TrustSignalsProps, TrustSignal, TrustSignalIcon } from "./TrustSignals";
