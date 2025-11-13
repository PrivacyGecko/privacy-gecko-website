# SEO Testing & Validation Checklist
**Privacy Gecko Website - Week 1 Implementation**

---

## Pre-Deployment Testing (Local - localhost:3003)

### 1. Metadata Verification
Test each page and verify meta tags in page source (View > Developer > View Source):

#### Token Page: `/token`
- [ ] Title: "$PRICKO Token - Powering Privacy-First AI | Launch November 2025"
- [ ] Meta description present and 150-160 characters
- [ ] `<meta name="keywords"` includes "$PRICKO token", "privacy token"
- [ ] `<meta property="og:title"` present
- [ ] `<meta property="og:description"` present
- [ ] `<meta property="og:image"` = "https://privacygecko.com/images/og-token.png"
- [ ] `<meta property="og:url"` = "https://privacygecko.com/token"
- [ ] `<meta name="twitter:card"` = "summary_large_image"
- [ ] `<link rel="canonical"` = "https://privacygecko.com/token"

#### Product Pages: Test each of these URLs
- [ ] `/products/share` - GeckoShare metadata
- [ ] `/products/guard` - GeckoGuard metadata
- [ ] `/products/lock` - GeckoLock metadata
- [ ] `/products/view` - GeckoView metadata
- [ ] `/products/shell` - GeckoShell metadata
- [ ] `/products/vpn` - Gecko VPN metadata
- [ ] `/products/watch` - GeckoWatch metadata

#### Products Hub: `/products`
- [ ] Updated meta description includes "2 live tools + 6 in development"
- [ ] OpenGraph image = og-products.png

---

## Post-OG-Images Testing

### 2. Image Verification
Once UI designer creates images:

- [ ] All 9 PNG files exist in `/public/images/`
- [ ] File sizes: Each <100KB
- [ ] Dimensions: Each 1200x630px exactly
- [ ] File naming: Exact match (og-token.png, og-share.png, etc.)

### 3. Social Media Validators

#### Facebook Sharing Debugger
URL: https://developers.facebook.com/tools/debug/

Test these URLs (replace with production domain):
- [ ] https://privacygecko.com/token
- [ ] https://privacygecko.com/products/share
- [ ] https://privacygecko.com/products/guard
- [ ] https://privacygecko.com/products/lock
- [ ] https://privacygecko.com/products

**Expected Results:**
- Image displays correctly (1200x630px)
- Title matches metadata
- Description displays (no truncation)
- No errors or warnings

**Common Issues:**
- Image not found = Check file path and accessibility
- Image wrong size = Verify 1200x630px dimensions
- Cache issue = Click "Scrape Again" button

#### Twitter Card Validator
URL: https://cards-dev.twitter.com/validator

Test same URLs as Facebook.

**Expected Results:**
- Card type: summary_large_image
- Image preview displays
- Title and description render correctly
- No validation errors

#### LinkedIn Post Inspector
URL: https://www.linkedin.com/post-inspector/

Test token page and key product pages.

**Expected Results:**
- Image displays in preview
- Professional appearance
- No errors

---

## Google Search Console Testing

### 4. Rich Results Test
URL: https://search.google.com/test/rich-results

- [ ] Test token page URL
- [ ] Verify no errors
- [ ] Check if Organization schema detected (if implemented)
- [ ] Verify page is eligible for rich results

### 5. Mobile-Friendly Test
URL: https://search.google.com/test/mobile-friendly

- [ ] Test all 8 product pages + token page
- [ ] Verify "Page is mobile-friendly" result
- [ ] Check for mobile usability issues

---

## Lighthouse SEO Audit

### 6. Chrome DevTools Lighthouse
Run for each critical page:

**How to Run:**
1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "SEO" category
4. Click "Analyze page load"

**Pages to Test:**
- [ ] Homepage (/)
- [ ] Token page (/token)
- [ ] Products hub (/products)
- [ ] GeckoShare (/products/share)
- [ ] GeckoGuard (/products/guard)

**Target Scores:**
- SEO: 95-100/100
- Performance: >80/100
- Accessibility: >90/100
- Best Practices: >90/100

**Common SEO Issues to Fix:**
- Links not crawlable
- Images missing alt text
- Font sizes too small
- Tap targets too small

---

## Manual SEO Checks

### 7. Title Tag Optimization
For each page, verify:
- [ ] Title <60 characters
- [ ] Includes primary keyword near beginning
- [ ] Includes brand name "Privacy Gecko"
- [ ] Unique across all pages (no duplicates)
- [ ] Compelling and click-worthy

### 8. Meta Description Optimization
For each page, verify:
- [ ] Description 150-160 characters (optimal length)
- [ ] Includes primary keyword naturally
- [ ] Includes call-to-action or benefit
- [ ] Unique across all pages
- [ ] Compelling for search users

### 9. Heading Structure
Check each page:
- [ ] Only one H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical heading hierarchy (H1 > H2 > H3)
- [ ] Headings describe content accurately

### 10. Internal Linking
Verify:
- [ ] Products hub links to all 8 product pages
- [ ] Product pages link back to hub
- [ ] Token page linked from navigation (if applicable)
- [ ] Links use descriptive anchor text
- [ ] No broken internal links

---

## Technical SEO Checks

### 11. Robots.txt
- [ ] File exists at `/robots.txt`
- [ ] Allows crawling of important pages
- [ ] Disallows admin/private areas (if any)
- [ ] Includes sitemap reference

### 12. Sitemap.xml
- [ ] File exists at `/sitemap.xml`
- [ ] Includes all 8 product pages
- [ ] Includes token page
- [ ] Valid XML format
- [ ] Submitted to Google Search Console

### 13. Canonical URLs
For each page, verify:
- [ ] Canonical URL is absolute (https://...)
- [ ] Points to correct production URL
- [ ] No www/non-www conflicts
- [ ] HTTPS (not HTTP)

### 14. Page Speed
Test with PageSpeed Insights:
- [ ] Mobile score >80
- [ ] Desktop score >90
- [ ] Largest Contentful Paint <2.5s
- [ ] First Input Delay <100ms
- [ ] Cumulative Layout Shift <0.1

---

## Token Launch Specific Testing

### 15. Token Page SEO (CRITICAL)
Before November 2025 launch:

- [ ] Title includes "November 2025" or "Q4 2025"
- [ ] Description mentions "launch" and "fair launch"
- [ ] Keywords include token-specific terms
- [ ] OpenGraph image (og-token.png) is compelling
- [ ] Page loads fast (<2s)
- [ ] No JavaScript errors in console
- [ ] Mobile-responsive
- [ ] Call-to-action clearly visible

### 16. Social Sharing Test (Pre-Launch)
Share token page on:
- [ ] Twitter - Preview displays correctly
- [ ] Telegram - Image and description render
- [ ] Discord - Embed looks professional
- [ ] Reddit - Preview works (if applicable)

**Test Method:**
1. Copy production URL: https://privacygecko.com/token
2. Paste in social platform (without posting)
3. Verify preview looks correct
4. Check image, title, description

---

## Post-Deployment Monitoring

### 17. Google Search Console (Weekly)
Monitor after deployment:
- [ ] Pages indexed (Coverage report)
- [ ] No indexing errors
- [ ] Mobile usability issues = 0
- [ ] Core Web Vitals - all green
- [ ] Security issues = 0

### 18. Search Rankings (Bi-Weekly)
Track keyword rankings for:
- "$PRICKO token"
- "privacy memecoin"
- "privacy tools"
- "encrypted file sharing"
- "privacy password manager"
- "privacy VPN"

**Tools:**
- Google Search Console (Performance)
- Manual Google searches
- Third-party rank trackers (optional)

### 19. Click-Through Rate Analysis
Monitor in Google Search Console:
- [ ] Token page CTR improving
- [ ] Product pages CTR >3%
- [ ] Homepage CTR competitive
- [ ] Adjust titles/descriptions if CTR low

---

## Staging Deployment Checklist

Before deploying to stage.privacygecko.com:

- [ ] All 12 files committed to git
- [ ] Production build successful (npm run build)
- [ ] No console errors on any page
- [ ] All links work correctly
- [ ] OG images uploaded (if available)
- [ ] Metadata reviewed for accuracy
- [ ] No typos in titles/descriptions

---

## Production Deployment Checklist

Before deploying to privacygecko.com:

- [ ] Staging fully tested and validated
- [ ] OG images created and uploaded
- [ ] Social sharing tested on staging
- [ ] Lighthouse SEO score ≥90
- [ ] All validators passing
- [ ] Backup of previous version
- [ ] Deploy at low-traffic time
- [ ] Monitor for errors post-deploy

---

## Quick Test Commands

### Test metadata with curl:
```bash
# Test token page
curl -s https://privacygecko.com/token | grep -E "(og:|twitter:|title>|description)"

# Test product page
curl -s https://privacygecko.com/products/share | grep -E "(og:|twitter:|title>|description)"
```

### Test OG images exist:
```bash
# Should return 200 OK
curl -I https://privacygecko.com/images/og-token.png
curl -I https://privacygecko.com/images/og-share.png
```

### Test sitemap:
```bash
curl -s https://privacygecko.com/sitemap.xml | grep -E "(token|products)"
```

---

## Issues & Troubleshooting

### Common Problems:

**1. OG image not showing:**
- Verify file exists and path is correct
- Check file size <100KB
- Clear social media cache (use validators)
- Verify image is 1200x630px exactly

**2. Metadata not updating:**
- Hard refresh browser (Cmd+Shift+R)
- Clear Next.js cache: `rm -rf .next/`
- Rebuild: `npm run build`
- Check if metadata export is correct

**3. Social preview shows old content:**
- Use Facebook Debugger "Scrape Again"
- Social platforms cache for 24-48 hours
- Update og:updated_time if available

**4. Page not indexing:**
- Check robots.txt allows crawling
- Verify canonical URL is correct
- Submit URL to Google Search Console
- Check for noindex tag (should not exist)

---

## Success Criteria

✅ **Week 1 Implementation Successful If:**
1. All 9 pages have unique, optimized metadata
2. Production build completes without errors
3. Lighthouse SEO score ≥90/100
4. All social validators pass (after OG images)
5. Token page ready for November 2025 launch
6. No broken links or 404 errors
7. Mobile-friendly across all pages

---

## Next Steps After Validation

1. **OG Images**: Coordinate with UI designer for 9 images
2. **Schema Markup**: Add ProductSchema (Week 2)
3. **Content Optimization**: Enhance product page copy
4. **Backlink Building**: Start outreach (Week 3+)
5. **Blog SEO**: Optimize existing blog posts
6. **Technical SEO**: Structured data, breadcrumbs

---

**Testing Owner**: Technical Team  
**Review Cadence**: Daily until OG images added, then weekly  
**Target Completion**: Before November 2025 token launch
