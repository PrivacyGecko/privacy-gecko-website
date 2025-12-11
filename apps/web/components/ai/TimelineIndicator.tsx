import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

/**
 * TimelineIndicator Component
 *
 * Reusable timeline badge component for displaying AI feature launch timelines.
 * Supports multiple display formats for different contexts (banners, inline text, badges).
 *
 * @example
 * ```tsx
 * <TimelineIndicator timeline="Q4 2025" format="banner" />
 * <TimelineIndicator timeline="Coming Q4 2025" format="inline" />
 * <TimelineIndicator timeline="Launching Q4 2025" format="badge" />
 * ```
 */

const timelineVariants = cva(
  "inline-flex items-center font-semibold transition-all duration-200",
  {
    variants: {
      format: {
        banner:
          "w-full justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-100 to-blue-100 px-6 py-3 text-base border border-amber-300 shadow-sm",
        inline: "gap-1.5 text-sm text-amber-800",
        badge:
          "gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs border border-amber-300",
      },
    },
    defaultVariants: {
      format: "badge",
    },
  }
);

export interface TimelineIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {
  /**
   * Timeline text to display (e.g., "Q4 2025", "Coming Q4 2025", "Launching Q4 2025")
   */
  timeline: string;

  /**
   * Display format variant
   * - banner: Full-width banner with gradient background (for page headers)
   * - inline: Minimal inline text (for body content)
   * - badge: Small rounded badge (for cards and compact spaces)
   */
  format?: "banner" | "inline" | "badge";

  /**
   * Show calendar icon
   * @default true for banner format, false for others
   */
  showIcon?: boolean;

  /**
   * Custom aria-label for accessibility
   */
  ariaLabel?: string;
}

export function TimelineIndicator({
  timeline,
  format = "badge",
  showIcon,
  className,
  ariaLabel,
  ...props
}: TimelineIndicatorProps) {
  // Default icon visibility based on format
  const displayIcon = showIcon !== undefined ? showIcon : format === "banner";

  // Default aria-label for accessibility
  const getDefaultAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    return `AI feature launch timeline: ${timeline}`;
  };

  return (
    <div
      className={cn(timelineVariants({ format }), className)}
      role="status"
      aria-label={getDefaultAriaLabel()}
      {...props}
    >
      {displayIcon && (
        <Calendar
          className={cn(
            "flex-shrink-0",
            format === "banner" ? "h-5 w-5" : "h-4 w-4"
          )}
          aria-hidden="true"
        />
      )}
      <span
        className={cn(
          "uppercase tracking-wide",
          format === "banner" && "text-amber-900",
          format === "inline" && "text-amber-800",
          format === "badge" && "text-amber-800"
        )}
      >
        {timeline}
      </span>
    </div>
  );
}
