import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = '',
  showIcon = true
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 ${className}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-3 h-3 opacity-60" aria-label="(opens in new tab)" />}
    </Link>
  );
}
