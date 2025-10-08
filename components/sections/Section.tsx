import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export function Section({ children, container = true, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-20", className)} {...props}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {subtitle && (
        <p className="text-gecko-green font-semibold mb-2 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
