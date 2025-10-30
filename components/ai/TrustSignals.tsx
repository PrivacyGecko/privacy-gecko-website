import { cn } from "@/lib/utils";
import { Lock, Globe, BookOpen, Zap, type LucideIcon } from "lucide-react";

/**
 * TrustSignals Component
 *
 * Displays trust icons with labels to build confidence in AI privacy features.
 * Emphasizes key trust factors: Local Processing, Federated Learning, Open Source, Real-time.
 * Used across homepage, product pages, and AI roadmap to communicate privacy guarantees.
 *
 * @example
 * ```tsx
 * <TrustSignals
 *   signals={[
 *     {
 *       icon: "lock",
 *       label: "Local Processing",
 *       description: "AI runs on YOUR device, not our servers"
 *     },
 *     {
 *       icon: "globe",
 *       label: "Federated Learning",
 *       description: "Collective intelligence without sharing your data"
 *     }
 *   ]}
 * />
 * ```
 */

export type TrustSignalIcon = "lock" | "globe" | "book-open" | "zap" | LucideIcon;

export interface TrustSignal {
  /**
   * Icon to display - can be a string key or Lucide icon component
   * Built-in icons: "lock", "globe", "book-open", "zap"
   */
  icon: TrustSignalIcon;

  /**
   * Main label for the trust signal
   */
  label: string;

  /**
   * Optional description text (can be expanded)
   */
  description?: string;
}

export interface TrustSignalsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of trust signals to display
   */
  signals: TrustSignal[];

  /**
   * Enable expandable descriptions on hover/click
   * @default false
   */
  expandable?: boolean;

  /**
   * Layout variant
   * - grid: 2x2 on mobile, 4x1 on desktop
   * - stack: Vertical stack on all screen sizes
   * @default "grid"
   */
  layout?: "grid" | "stack";
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  lock: Lock,
  globe: Globe,
  "book-open": BookOpen,
  zap: Zap,
};

function getIconComponent(icon: TrustSignalIcon): LucideIcon {
  if (typeof icon === "string") {
    return iconMap[icon] || Lock;
  }
  return icon;
}

export function TrustSignals({
  signals,
  expandable = false,
  layout = "grid",
  className,
  ...props
}: TrustSignalsProps) {
  return (
    <div
      className={cn(
        "gap-4",
        layout === "grid"
          ? "grid grid-cols-2 lg:grid-cols-4"
          : "flex flex-col",
        className
      )}
      role="list"
      {...props}
    >
      {signals.map((signal, index) => {
        const IconComponent = getIconComponent(signal.icon);

        return (
          <div
            key={`signal-${index}`}
            className={cn(
              "group flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 bg-white transition-all duration-200",
              expandable && "cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1"
            )}
            role="listitem"
          >
            {/* Icon */}
            <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-blue-100 to-green-100 border border-blue-200 transition-transform duration-200 group-hover:scale-110">
              <IconComponent
                className="h-6 w-6 text-blue-800"
                aria-hidden="true"
              />
            </div>

            {/* Label */}
            <h4 className="text-sm font-bold text-neutral-900 mb-1">
              {signal.label}
            </h4>

            {/* Description */}
            {signal.description && (
              <p
                className={cn(
                  "text-xs text-gray-600 leading-relaxed transition-all duration-200",
                  expandable
                    ? "max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2"
                    : "mt-1"
                )}
              >
                {signal.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Pre-configured default trust signals for AI privacy
 */
export const DEFAULT_AI_TRUST_SIGNALS: TrustSignal[] = [
  {
    icon: "lock",
    label: "Local Processing",
    description: "AI runs on YOUR device, not our servers - your data never leaves your computer",
  },
  {
    icon: "globe",
    label: "Federated Learning",
    description: "Collective intelligence without sharing your data - only patterns are shared, never your personal information",
  },
  {
    icon: "book-open",
    label: "Open Source",
    description: "Transparent AI models you can inspect and verify - no black boxes, no hidden data collection",
  },
  {
    icon: "zap",
    label: "Real-time Protection",
    description: "Instant threat detection and blocking - no waiting for filter list updates",
  },
];
