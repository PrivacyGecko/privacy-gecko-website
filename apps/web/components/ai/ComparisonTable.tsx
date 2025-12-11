import { cn } from "@/lib/utils";
import { AlertTriangle, Sparkles } from "lucide-react";

/**
 * ComparisonTable Component
 *
 * Displays "Old Way vs Privacy Gecko Way" comparisons to highlight the advantage
 * of AI-powered privacy protection. Shows visual timeline of protection gaps
 * and color-coding to emphasize vulnerabilities vs protection.
 *
 * @example
 * ```tsx
 * <ComparisonTable
 *   oldWay={{
 *     title: "Traditional Blocklists",
 *     steps: [
 *       "Threat discovered",
 *       "Researcher adds to blocklist",
 *       "User downloads update",
 *       "Threat blocked"
 *     ],
 *     problem: "Days or weeks of delay - you're vulnerable while waiting"
 *   }}
 *   newWay={{
 *     title: "Privacy Gecko AI",
 *     steps: [
 *       "Threat appears",
 *       "AI detects anomaly",
 *       "Instant local blocking",
 *       "Learning shared to network"
 *     ],
 *     advantage: "Real-time protection - no waiting, no vulnerability window"
 *   }}
 * />
 * ```
 */

export interface ComparisonWay {
  /**
   * Title of this approach (e.g., "Traditional Blocklists", "Privacy Gecko AI")
   */
  title: string;

  /**
   * Sequential steps in the process
   */
  steps: string[];

  /**
   * Problem description (for old way) or advantage (for new way)
   */
  problem?: string;
  advantage?: string;
}

export interface ComparisonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Description of the traditional/old approach
   */
  oldWay: ComparisonWay;

  /**
   * Description of the Privacy Gecko AI approach
   */
  newWay: ComparisonWay;

  /**
   * Optional heading for the comparison
   */
  heading?: string;
}

export function ComparisonTable({
  oldWay,
  newWay,
  heading,
  className,
  ...props
}: ComparisonTableProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {/* Optional Heading */}
      {heading && (
        <h3 className="text-xl font-bold text-neutral-900 text-center">
          {heading}
        </h3>
      )}

      {/* Comparison Grid - Side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Old Way Column */}
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b-2 border-red-300">
            <AlertTriangle
              className="h-5 w-5 text-red-600 flex-shrink-0"
              aria-hidden="true"
            />
            <h4 className="text-lg font-bold text-red-900">{oldWay.title}</h4>
          </div>

          {/* Steps */}
          <ol className="space-y-3" role="list">
            {oldWay.steps.map((step, index) => (
              <li key={`old-${index}`} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-800 text-sm font-bold border border-red-300"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </span>
                <span className="text-sm text-gray-700 pt-1 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          {/* Problem Callout */}
          {oldWay.problem && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-900 font-medium flex items-start gap-2">
                <AlertTriangle
                  className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  <strong className="block text-xs uppercase tracking-wide mb-1">
                    Problem:
                  </strong>
                  {oldWay.problem}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* New Way Column */}
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b-2 border-green-300">
            <Sparkles
              className="h-5 w-5 text-green-600 flex-shrink-0"
              aria-hidden="true"
            />
            <h4 className="text-lg font-bold text-green-900">{newWay.title}</h4>
          </div>

          {/* Steps */}
          <ol className="space-y-3" role="list">
            {newWay.steps.map((step, index) => (
              <li key={`new-${index}`} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-800 text-sm font-bold border border-green-300"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </span>
                <span className="text-sm text-gray-700 pt-1 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          {/* Advantage Callout */}
          {newWay.advantage && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900 font-medium flex items-start gap-2">
                <Sparkles
                  className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  <strong className="block text-xs uppercase tracking-wide mb-1">
                    Advantage:
                  </strong>
                  {newWay.advantage}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
        <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
          Protection Timeline
        </h5>
        <div className="space-y-2">
          {/* Old Way Timeline */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 w-32 flex-shrink-0">
              {oldWay.title}:
            </span>
            <div className="flex-1 h-2 rounded-full overflow-hidden bg-gray-200 flex">
              <div
                className="bg-red-500"
                style={{ width: "70%" }}
                aria-label="Vulnerable period"
              />
              <div
                className="bg-green-500"
                style={{ width: "30%" }}
                aria-label="Protected period"
              />
            </div>
            <span className="text-xs text-red-600 font-medium w-24 text-right">
              70% Vulnerable
            </span>
          </div>

          {/* New Way Timeline */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 w-32 flex-shrink-0">
              {newWay.title}:
            </span>
            <div className="flex-1 h-2 rounded-full overflow-hidden bg-gray-200">
              <div
                className="bg-green-500 h-full"
                style={{ width: "100%" }}
                aria-label="Always protected"
              />
            </div>
            <span className="text-xs text-green-600 font-medium w-24 text-right">
              100% Protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
