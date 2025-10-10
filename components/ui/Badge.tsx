import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        live: "bg-green-700 text-white shadow-sm",
        beta: "bg-orange-600 text-white shadow-sm",
        coming: "bg-blue-900 text-white shadow-sm",
        info: "bg-gray-200 text-gray-900",
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
