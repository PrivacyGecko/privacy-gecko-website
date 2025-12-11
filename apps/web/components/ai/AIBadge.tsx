import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * AIBadge Component
 *
 * Displays AI feature status with consistent styling and timeline information.
 * Used across product pages, homepage, and AI-focused pages to indicate AI capabilities.
 *
 * @example
 * ```tsx
 * <AIBadge status="coming-soon" timeline="Q4 2025" />
 * <AIBadge status="beta" size="lg" />
 * <AIBadge status="live" size="sm" />
 * ```
 */

const aiBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-200",
  {
    variants: {
      status: {
        "coming-soon": "bg-amber-100 text-amber-800 border border-amber-300",
        beta: "bg-blue-100 text-blue-800 border border-blue-300",
        live: "bg-green-100 text-green-800 border border-green-300",
      },
      size: {
        sm: "px-2.5 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      status: "coming-soon",
      size: "md",
    },
  }
);

export interface AIBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof aiBadgeVariants> {
  /**
   * AI feature status
   * - coming-soon: Shows amber/yellow styling with "Coming Q4 2025"
   * - beta: Shows blue styling for beta features
   * - live: Shows green styling for launched features
   */
  status?: "coming-soon" | "beta" | "live";

  /**
   * Timeline text to display (e.g., "Q4 2025", "Beta", "Live")
   * If not provided, defaults based on status
   */
  timeline?: string;

  /**
   * Badge size variant
   */
  size?: "sm" | "md" | "lg";

  /**
   * Custom aria-label for accessibility
   */
  ariaLabel?: string;
}

export function AIBadge({
  status = "coming-soon",
  timeline,
  size = "md",
  className,
  ariaLabel,
  ...props
}: AIBadgeProps) {
  // Default timeline text based on status
  const getDefaultTimeline = () => {
    if (timeline) return timeline;
    if (status === "coming-soon") return "Coming Q4 2025";
    if (status === "beta") return "Beta";
    if (status === "live") return "Live";
    return "Coming Soon";
  };

  // Default aria-label for accessibility
  const getDefaultAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    const timelineText = getDefaultTimeline();
    return `AI feature status: ${timelineText}`;
  };

  const displayTimeline = getDefaultTimeline();

  return (
    <span
      className={cn(aiBadgeVariants({ status, size }), className)}
      role="status"
      aria-label={getDefaultAriaLabel()}
      {...props}
    >
      <span aria-hidden="true">🤖</span>
      <span className="uppercase tracking-wide">{displayTimeline}</span>
    </span>
  );
}
