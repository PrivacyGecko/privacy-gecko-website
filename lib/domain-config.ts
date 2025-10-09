/**
 * Domain Configuration for Privacy Gecko Ecosystem
 *
 * Centralized configuration for all product domains.
 * Update when individual product sites go live.
 */

export type ProductDomain = {
  id: string;
  name: string;
  domain: string;
  status: 'live' | 'planned' | 'future' | 'testing';
  useExternalLink: boolean; // If true, link to domain instead of /products/[id]
};

export const MAIN_HUB_DOMAIN = 'www.privacygecko.com';
export const TOKEN_DOMAIN = 'pricko.com';
export const TOKEN_SITE_LIVE = true; // Token site is live

/**
 * Product domain mappings
 * When a product's domain goes live, set useExternalLink to true
 */
export const productDomains: Record<string, ProductDomain> = {
  advisor: {
    id: 'advisor',
    name: 'Gecko Advisor',
    domain: 'geckoadvisor.com',
    status: 'live', // ✅ LIVE
    useExternalLink: true, // Link to geckoadvisor.com
  },
  share: {
    id: 'share',
    name: 'Gecko Share',
    domain: 'geckoshare.com',
    status: 'live', // ✅ LIVE
    useExternalLink: true, // Link to geckoshare.com
  },
  guard: {
    id: 'guard',
    name: 'Gecko Guard',
    domain: 'geckoguard.app',
    status: 'planned', // In web store review
    useExternalLink: false,
  },
  pass: {
    id: 'pass',
    name: 'Gecko Pass',
    domain: 'geckopass.com',
    status: 'future',
    useExternalLink: false,
  },
  shell: {
    id: 'shell',
    name: 'Gecko Shell',
    domain: 'geckoshell.app',
    status: 'future',
    useExternalLink: false,
  },
  view: {
    id: 'view',
    name: 'Gecko View',
    domain: 'geckoview.app',
    status: 'future',
    useExternalLink: false,
  },
  vpn: {
    id: 'vpn',
    name: 'Gecko VPN',
    domain: 'prickovpn.com',
    status: 'testing',
    useExternalLink: false,
  },
  vault: {
    id: 'vault',
    name: 'Gecko Vault',
    domain: 'www.privacygecko.com', // Stays on main hub
    status: 'future',
    useExternalLink: false,
  },
};

/**
 * Get the link for a product
 * Returns external domain if live, otherwise internal route
 */
export function getProductLink(productId: string): string {
  const product = productDomains[productId];

  if (!product) {
    return `/products/${productId}`;
  }

  if (product.useExternalLink) {
    return `https://${product.domain}`;
  }

  return `/products/${productId}`;
}

/**
 * Get the token page link
 * Returns pricko.com when token site is live
 */
export function getTokenLink(): string {
  if (TOKEN_SITE_LIVE) {
    return `https://${TOKEN_DOMAIN}`;
  }

  return '/token';
}

/**
 * Check if we should show "Visit Site" vs "Learn More"
 */
export function getProductCTAText(productId: string): string {
  const product = productDomains[productId];

  if (!product) {
    return 'Learn More';
  }

  if (product.status === 'live' && product.useExternalLink) {
    return 'Visit Site';
  }

  if (product.status === 'planned') {
    return 'Learn More';
  }

  return 'Coming Soon';
}

/**
 * Get all live product domains
 */
export function getLiveProducts(): ProductDomain[] {
  return Object.values(productDomains).filter(p => p.status === 'live');
}

/**
 * Get all planned product domains
 */
export function getPlannedProducts(): ProductDomain[] {
  return Object.values(productDomains).filter(p => p.status === 'planned');
}
