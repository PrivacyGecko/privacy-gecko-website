import { cn } from "@/lib/utils";
import { Check, Plus } from "lucide-react";

/**
 * AIFeatureList Component
 *
 * Displays product features with visual separation between current features
 * and upcoming AI-powered features. Used on product pages to show the evolution
 * from current capabilities to AI-enhanced capabilities.
 *
 * @example
 * ```tsx
 * <AIFeatureList
 *   currentFeatures={[
 *     "Real-time tracker blocking",
 *     "Privacy dashboard",
 *     "Custom filter lists"
 *   ]}
 *   aiFeatures={[
 *     "Learns NEW tracking patterns in real-time",
 *     "Adapts blocking to your browsing style",
 *     "Predicts and blocks emerging threats"
 *   ]}
 *   aiTimeline="Q4 2025"
 * />
 * ```
 */

export interface AIFeatureListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of current features available today
   */
  currentFeatures: string[];

  /**
   * List of upcoming AI-powered features
   */
  aiFeatures: string[];

  /**
   * Timeline for AI features (e.g., "Q4 2025", "Coming Soon")
   */
  aiTimeline: string;

  /**
   * Apply subtle background tint to AI section
   * @default true
   */
  highlightAISection?: boolean;
}

export function AIFeatureList({
  currentFeatures,
  aiFeatures,
  aiTimeline,
  highlightAISection = true,
  className,
  ...props
}: AIFeatureListProps) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {/* Current Features Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
          Current Features
        </h4>
        <ul className="space-y-2" role="list">
          {currentFeatures.map((feature, index) => (
            <li
              key={`current-${index}`}
              className="flex items-start gap-2.5 text-gray-700"
            >
              <Check
                className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
            AI Enhancement
          </span>
        </div>
      </div>

      {/* AI Features Section */}
      <div
        className={cn(
          "space-y-3 rounded-lg p-4 transition-colors duration-200",
          highlightAISection && "bg-gradient-to-br from-amber-50/50 to-blue-50/50 border border-amber-200/30"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg" aria-hidden="true">
            🤖
          </span>
          <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
            Coming with AI
          </h4>
          <span className="ml-auto text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full border border-amber-300">
            {aiTimeline}
          </span>
        </div>
        <ul className="space-y-2" role="list">
          {aiFeatures.map((feature, index) => (
            <li
              key={`ai-${index}`}
              className="flex items-start gap-2.5 text-gray-800"
            >
              <Plus
                className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
