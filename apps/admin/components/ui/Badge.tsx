import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "draft" | "queued" | "published" | "rejected";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  draft: "badge-draft",
  queued: "badge-queued",
  published: "badge-published",
  rejected: "badge-rejected",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span className={cn("badge", variantClasses[variant], className)}>
      {children}
    </span>
  );
}
