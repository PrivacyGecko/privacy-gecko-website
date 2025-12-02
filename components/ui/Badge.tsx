import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide border",
  {
    variants: {
      variant: {
        live: "bg-emerald-50 text-emerald-700 border-emerald-200",
        beta: "bg-amber-50 text-amber-700 border-amber-200",
        coming: "bg-blue-50 text-blue-700 border-blue-200",
        info: "bg-slate-100 text-slate-700 border-slate-200",
        ai: "bg-violet-50 text-violet-700 border-violet-200",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  ariaLabel?: string;
}

export function Badge({ className, variant, ariaLabel, ...props }: BadgeProps) {
  const getDefaultAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    if (variant === "live") return "Product status: Available now";
    if (variant === "beta") return "Product status: Beta testing";
    if (variant === "coming") return "Product status: In development";
    if (variant === "ai") return "AI-powered feature";
    return "Product status";
  };

  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      role="status"
      aria-label={getDefaultAriaLabel()}
      {...props}
    />
  );
}
