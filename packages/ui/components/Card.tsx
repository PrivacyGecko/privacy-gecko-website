import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "elevated" | "bordered" | "glass";
}

export function Card({
  className,
  hover = true,
  variant = "default",
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white rounded-2xl border border-slate-100 shadow-card",
    elevated: "bg-white rounded-2xl shadow-soft-lg",
    bordered: "bg-white rounded-2xl border-2 border-slate-200",
    glass: "bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-100/50 shadow-soft",
  };

  return (
    <div
      className={cn(
        "p-6",
        variants[variant],
        hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold text-slate-900 tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-slate-600 text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-4 pt-4 border-t border-slate-100",
        className
      )}
      {...props}
    />
  );
}
