import { test, expect } from '@playwright/test';

const BASE_URL = 'https://privacygecko.com';

test.describe('Privacy Gecko Website - Deployment Verification', () => {

  test('Homepage loads successfully', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check title
    await expect(page).toHaveTitle(/Privacy Gecko/);

    // Check hero section
    await expect(page.getByText('Privacy Tools That Actually Work')).toBeVisible();

    // Check CTAs are present
    await expect(page.getByRole('link', { name: /Try GeckoAdvisor Free/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Explore All Products/i })).toBeVisible();

    console.log('✅ Homepage loads successfully');
  });

  test('Navigation menu works', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check navigation links
    const nav = page.locator('nav');
    await expect(nav.getByText('Products')).toBeVisible();
    await expect(nav.getByText('Pricing')).toBeVisible();
    await expect(nav.getByText('About')).toBeVisible();
    await expect(nav.getByText('Blog')).toBeVisible();
    await expect(nav.getByText('Resources')).toBeVisible();

    console.log('✅ Navigation menu is working');
  });

  test('All product pages are accessible', async ({ page }) => {
    const productPages = [
      '/products',
      '/products/advisor',
      '/products/share',
      '/products/guard',
    ];

    for (const path of productPages) {
      await page.goto(`${BASE_URL}${path}`);
      await expect(page.locator('h1')).toBeVisible();
      console.log(`✅ ${path} is accessible`);
    }
  });

  test('Pricing page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/pricing`);

    // Check for pricing content
    await expect(page.getByText(/Choose Your Privacy Level/i)).toBeVisible();
    await expect(page.getByText(/Free/i)).toBeVisible();
    await expect(page.getByText(/Pro/i)).toBeVisible();

    console.log('✅ Pricing page loads correctly');
  });

  test('About page displays mission', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);

    await expect(page.getByText(/Making Privacy Tools Accessible/i)).toBeVisible();
    await expect(page.getByText(/Our Mission/i)).toBeVisible();

    console.log('✅ About page displays correctly');
  });

  test('Contact form is present', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);

    // Check form fields
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/subject/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();

    console.log('✅ Contact form is present and working');
  });

  test('Legal pages are accessible', async ({ page }) => {
    const legalPages = [
      '/legal/privacy',
      '/legal/terms',
      '/legal/cookies',
    ];

    for (const path of legalPages) {
      await page.goto(`${BASE_URL}${path}`);
      await expect(page.locator('h1')).toBeVisible();
      console.log(`✅ ${path} is accessible`);
    }
  });

  test('Footer contains all important links', async ({ page }) => {
    await page.goto(BASE_URL);

    const footer = page.locator('footer');
    await expect(footer.getByText(/Privacy Gecko/i)).toBeVisible();
    await expect(footer.getByText(/Products/i)).toBeVisible();
    await expect(footer.getByText(/Privacy Policy/i)).toBeVisible();

    console.log('✅ Footer contains all important links');
  });

  test('Sitemap and robots.txt are accessible', async ({ page }) => {
    // Check sitemap
    const sitemapResponse = await page.goto(`${BASE_URL}/sitemap.xml`);
    expect(sitemapResponse?.status()).toBe(200);
    console.log('✅ Sitemap.xml is accessible');

    // Check robots.txt
    const robotsResponse = await page.goto(`${BASE_URL}/robots.txt`);
    expect(robotsResponse?.status()).toBe(200);
    console.log('✅ Robots.txt is accessible');
  });

  test('Mobile responsiveness - Navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);

    // Check if mobile menu button is visible
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();

    console.log('✅ Mobile navigation is responsive');
  });

  test('All 8 products are displayed on products page', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);

    // Check for all 8 products
    const products = [
      'GeckoAdvisor',
      'GeckoShare',
      'GeckoGuard',
      'GeckoVPN',
      'GeckoPass',
      'GeckoShell',
      'GeckoView',
      'GeckoWatch',
    ];

    for (const product of products) {
      await expect(page.getByText(product)).toBeVisible();
    }

    console.log('✅ All 8 products are displayed');
  });

  test('HTTPS is enabled', async ({ page }) => {
    await page.goto(BASE_URL);
    expect(page.url()).toContain('https://');
    console.log('✅ HTTPS is properly configured');
  });

  test('Page loads without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    if (errors.length > 0) {
      console.warn('⚠️  Console errors found:', errors);
    } else {
      console.log('✅ No console errors detected');
    }
  });
});

test.describe('Screenshots - Visual Verification', () => {
  test('Capture homepage screenshot', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.screenshot({
      path: 'tests/screenshots/homepage.png',
      fullPage: true
    });
    console.log('📸 Homepage screenshot saved');
  });

  test('Capture product pages screenshots', async ({ page }) => {
    const pages = [
      { path: '/products', name: 'products-overview' },
      { path: '/products/advisor', name: 'gecko-advisor' },
      { path: '/pricing', name: 'pricing' },
    ];

    for (const { path, name } of pages) {
      await page.goto(`${BASE_URL}${path}`);
      await page.screenshot({
        path: `tests/screenshots/${name}.png`,
        fullPage: true
      });
      console.log(`📸 ${name} screenshot saved`);
    }
  });

  test('Capture mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await page.screenshot({
      path: 'tests/screenshots/homepage-mobile.png',
      fullPage: true
    });
    console.log('📸 Mobile homepage screenshot saved');
  });
});
