"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Premium blue - main CTA
        primary:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 focus:ring-blue-500 active:translate-y-0",
        // Green accent
        secondary:
          "bg-gradient-to-r from-gecko-green to-gecko-dark text-white rounded-xl shadow-green hover:shadow-lg hover:-translate-y-0.5 focus:ring-gecko-green active:translate-y-0",
        // White/outline
        outline:
          "border-2 border-slate-200 text-slate-700 bg-white rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 hover:-translate-y-0.5 focus:ring-blue-500 active:translate-y-0 shadow-soft",
        // Ghost/minimal
        ghost:
          "text-slate-600 rounded-xl hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300",
        // White button (for dark backgrounds)
        white:
          "bg-white text-blue-600 rounded-xl shadow-soft hover:shadow-lg hover:-translate-y-0.5 focus:ring-white active:translate-y-0",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
        xl: "px-10 py-4 text-lg",
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

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };
