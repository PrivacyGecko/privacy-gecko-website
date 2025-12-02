import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gecko-green text-white hover:bg-gecko-green/90 focus:ring-gecko-green shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-gecko-blue text-white hover:bg-gecko-blue/90 focus:ring-gecko-blue shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-gecko-green text-gecko-green hover:bg-gecko-green hover:text-white focus:ring-gecko-green hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "text-neutral-900 hover:bg-gray-100 focus:ring-gray-300 hover:shadow-sm",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    // Check if external link (starts with http:// or https://)
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
