# Open Graph Images - Quick Reference

## Status: READY FOR PRODUCTION ✓

All 10 Open Graph images created, optimized, and ready for deployment.

---

## File Inventory

| Priority | File | Size | Purpose |
|----------|------|------|---------|
| **CRITICAL** | **og-token.png** | **86 KB** | **$PRICKO Token (Nov 2025 launch)** |
| HIGH | og-share.png | 60 KB | GeckoShare (live) |
| HIGH | og-guard.png | 93 KB | GeckoGuard (live) |
| HIGH | og-lock.png | 79 KB | GeckoLock (live) |
| HIGH | og-advisor.png | 62 KB | GeckoAdvisor (live) |
| MEDIUM | og-view.png | 57 KB | GeckoView (coming soon) |
| MEDIUM | og-shell.png | 59 KB | GeckoShell (coming soon) |
| MEDIUM | og-vpn.png | 57 KB | Gecko VPN (coming soon) |
| MEDIUM | og-watch.png | 63 KB | GeckoWatch (coming soon) |
| MEDIUM | og-products.png | 72 KB | Products hub page |

**Total**: 10 images, 688 KB total, 68.8 KB average
**Location**: `/public/images/`
**Specifications**: 1200x630px PNG, <100KB each ✓

---

## Quick Specs

- **Dimensions**: 1200x630px (exact)
- **Format**: PNG (optimized, compression level 9)
- **File Size**: All <100KB ✓
- **Brand Color**: gecko-green (#00D98A)
- **Typography**: Inter font family
- **Safe Zones**: 80px text margin, 40px logo margin

---

## Testing URLs

**Facebook**: https://developers.facebook.com/tools/debug/
**Twitter**: https://cards-dev.twitter.com/validator
**LinkedIn**: https://www.linkedin.com/post-inspector/

---

## Regeneration Commands

```bash
# Install dependencies (one-time)
npm install canvas

# Generate all images
node scripts/generate-og-images.js

# Optimize large images
node scripts/recreate-large-images.js

# Check file sizes
node scripts/optimize-og-images.js
```

---

## Design System Reference

**Colors**:
- gecko-green: #00D98A (primary)
- dark-slate: #1A1D29 (background)
- pricko-gold: #FFD700 (token)
- white: #FFFFFF (headings)

**Typography**:
- Headings: bold 68-72px Inter
- Body: 32-42px Inter
- Badges: bold 24px Inter

**Status Badges**:
- LIVE NOW: green (#10B981)
- COMING SOON: blue (#3B82F6)

---

## Maintenance Checklist

### Immediate (November 2025)
- [ ] Deploy to production
- [ ] Test on social platforms
- [ ] Monitor SEO score (target: 95/100)

### Short-Term (Post-launch)
- [ ] Update og-token.png (remove "Fair Launch" text)
- [ ] Change badges to "LIVE NOW" as products launch

### Long-Term
- [ ] Annual design refresh
- [ ] Create images for new products
- [ ] Update if brand changes

---

## Key Documents

1. **OG_IMAGES_REQUIREMENTS.md** - Original requirements
2. **OG_IMAGES_COMPLETE.md** - Detailed specifications
3. **OG_IMAGES_SUMMARY.md** - Full delivery documentation
4. **OG_IMAGES_QUICK_REFERENCE.md** - This document

---

## Contact

Questions? Refer to design system documentation or regeneration scripts in `/scripts/`.

**Status**: ✓ COMPLETE - READY FOR PRODUCTION
**Quality**: EXCEEDS REQUIREMENTS
**Next Action**: DEPLOY

---

Privacy Gecko - Privacy First. Always. 🦎
