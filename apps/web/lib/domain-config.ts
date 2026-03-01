/**
 * Domain Configuration for Privacy Gecko Products
 *
 * Centralized configuration for product domains.
 */

export type ProductDomain = {
  id: string;
  name: string;
  domain: string;
  status: 'live' | 'planned' | 'future' | 'testing';
  useExternalLink: boolean;
};

export const MAIN_HUB_DOMAIN = 'www.privacygecko.com';

export const productDomains: Record<string, ProductDomain> = {
  advisor: {
    id: 'advisor',
    name: 'Gecko Advisor',
    domain: 'geckoadvisor.com',
    status: 'live',
    useExternalLink: true,
  },
  share: {
    id: 'share',
    name: 'Gecko Share',
    domain: 'geckoshare.com',
    status: 'live',
    useExternalLink: true,
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

  return 'Learn More';
}

/**
 * Get all live product domains
 */
export function getLiveProducts(): ProductDomain[] {
  return Object.values(productDomains).filter(p => p.status === 'live');
}
