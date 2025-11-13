# Unified Roadmap QA Testing Checklist

**Page URL:** `/roadmap`  
**Testing Date:** _____________  
**Tester:** _____________

---

## 1. Visual & Layout Testing

### Desktop (1440px+)
- [ ] Timeline displays horizontally
- [ ] All 5 milestone circles visible
- [ ] Cards layout in 3 columns (products section)
- [ ] Navigation menu fully visible
- [ ] No horizontal scrolling
- [ ] Images load correctly
- [ ] Logo displays properly

### Tablet (768px-1439px)
- [ ] Timeline displays horizontally (may wrap)
- [ ] Cards layout in 2 columns
- [ ] Navigation menu visible
- [ ] Spacing appropriate
- [ ] Touch targets adequate size

### Mobile (375px-767px)
- [ ] Timeline displays vertically
- [ ] Cards stack in 1 column
- [ ] Hamburger menu appears
- [ ] No content cut off
- [ ] Touch targets min 44px
- [ ] Text readable without zoom

---

## 2. Interactive Elements

### Timeline Milestones
- [ ] Clicking "Foundation Built" scrolls to #foundation section
- [ ] Clicking "Token Launch" scrolls to #token-launch section
- [ ] Clicking "AI Beta Testing" scrolls to #ai-beta section
- [ ] Clicking "AI Public Launch" scrolls to #ai-launch section
- [ ] Clicking "Full Ecosystem" scrolls to #ecosystem section
- [ ] Smooth scroll animation works
- [ ] Hover states visible on desktop
- [ ] Active/in-progress milestone pulses

### Tab Navigation (AI Section)
- [ ] "Overview" tab loads by default
- [ ] Clicking "Technical Details" switches content
- [ ] Clicking "Privacy & Security" switches content
- [ ] Active tab indicator animates smoothly
- [ ] Content fades in/out correctly
- [ ] Keyboard navigation works (arrow keys)

### Buttons & CTAs
- [ ] "Join Waitlist" buttons work
- [ ] "Learn More" buttons work
- [ ] External product links open in new tab
- [ ] "Visit Site →" buttons work
- [ ] Token whitelist links work
- [ ] Hover states visible

---

## 3. Redirect Testing

### 301 Redirect
- [ ] Navigate to `/ai-roadmap`
- [ ] Browser redirects to `/roadmap#ai-development`
- [ ] Page scrolls to AI section automatically
- [ ] No console errors
- [ ] Redirect is permanent (check browser network tab: 301 status)

### Anchor Links
- [ ] `/roadmap#ai-development` scrolls to AI section
- [ ] `/roadmap#products` scrolls to products section
- [ ] `/roadmap#token` scrolls to token section
- [ ] `/roadmap#participate` scrolls to participation section

---

## 4. Content Verification

### Timeline Dates
- [ ] Token Launch shows "November 2025" (not Dec 2025)
- [ ] AI Beta shows "Q1 2026"
- [ ] AI Public Launch shows "Q1-Q2 2026"
- [ ] Foundation shows "Q2-Q3 2025"
- [ ] Full Ecosystem shows "Q2-Q4 2026"

### Product Statuses
- [ ] 4 products show "Live" status
- [ ] 4 products show "In Development" status
- [ ] Progress bars display correctly for coming products:
  - GeckoView: 45%
  - GeckoShell: 30%
  - Gecko VPN: 20%
  - Gecko Watch: 55%

### Phase Statuses
- [ ] Phase 1 (Foundation): Completed ✅
- [ ] Phase 2 (Token Launch): In Progress 🟢
- [ ] Phase 3 (AI Beta): Upcoming ⭕
- [ ] Phase 4+ (Future): Upcoming ⭕

---

## 5. Keyboard Navigation

### Tab Order
- [ ] Press Tab: Focus moves to skip link
- [ ] Continue Tab: Focus moves to logo
- [ ] Continue Tab: Focus moves through nav items
- [ ] Continue Tab: Focus moves to CTA button
- [ ] Continue Tab: Focus moves to milestone buttons
- [ ] Focus indicators visible on all elements
- [ ] Tab order makes logical sense

### Keyboard Shortcuts
- [ ] Enter/Space activates focused button
- [ ] Arrow keys switch tabs in AI section
- [ ] Escape closes mobile menu (if open)

---

## 6. Accessibility

### Screen Reader Testing (VoiceOver/NVDA)
- [ ] Page title announced correctly
- [ ] Headings hierarchy correct (H1 → H2 → H3)
- [ ] Milestone buttons have descriptive labels
- [ ] Status indicators announced ("Completed", "In Progress", "Upcoming")
- [ ] Progress bars have aria-valuenow attributes
- [ ] Links describe destination clearly
- [ ] Images have alt text (or aria-hidden for decorative)

### Color Contrast
- [ ] Text readable on all backgrounds
- [ ] Focus indicators high contrast
- [ ] Status colors distinguishable

### Motion & Animation
- [ ] Animations not jarring
- [ ] Prefers-reduced-motion respected (check browser settings)

---

## 7. Performance

### Load Time
- [ ] Initial page load < 2 seconds (fast connection)
- [ ] Initial page load < 5 seconds (slow 3G)
- [ ] No layout shift (CLS)
- [ ] Images load progressively

### Browser Console
- [ ] No JavaScript errors
- [ ] No console warnings
- [ ] No 404 errors for resources

### Lighthouse Audit
- [ ] Performance: ≥ 90
- [ ] Accessibility: 100
- [ ] Best Practices: ≥ 95
- [ ] SEO: 100

---

## 8. SEO & Metadata

### Meta Tags
- [ ] Page title: "Privacy Gecko Development Roadmap | Product & AI Timeline"
- [ ] Meta description present and accurate
- [ ] Keywords meta tag present
- [ ] Canonical URL: https://privacygecko.com/roadmap
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter Card tags present

### Structured Data
- [ ] View page source
- [ ] Find `<script type="application/ld+json">`
- [ ] Verify JSON-LD contains Event schema
- [ ] Token Launch event present
- [ ] AI Beta event present
- [ ] AI Public Launch event present

### Sitemap
- [ ] `/roadmap` listed in sitemap
- [ ] `/ai-roadmap` NOT listed in sitemap (removed)

---

## 9. Cross-Browser Testing

### Chrome (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

### Firefox (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

### Safari (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

### Edge (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

### Mobile Safari (iOS)
- [ ] Touch interactions work
- [ ] Vertical timeline displays
- [ ] No layout issues

### Mobile Chrome (Android)
- [ ] Touch interactions work
- [ ] Vertical timeline displays
- [ ] No layout issues

---

## 10. Link Validation

### Internal Links Updated
- [ ] Navigation "AI Roadmap" → `/roadmap#ai-development`
- [ ] Footer "AI Roadmap" → `/roadmap#ai-development`
- [ ] Products page AI link → `/roadmap#ai-development`
- [ ] About page AI link → `/roadmap#ai-development`
- [ ] Resources page AI link → `/roadmap#ai-development`
- [ ] JoinAIRevolution component link → `/roadmap#ai-development`

### External Links
- [ ] GeckoAdvisor link → https://geckoadvisor.com
- [ ] GeckoShare link → https://geckoshare.com
- [ ] GeckoGuard link → https://geckoguard.app
- [ ] GeckoLock link → https://geckolock.com
- [ ] $PRICKO token link → https://pricko.com
- [ ] Token whitelist link → https://pricko.com#whitelist
- [ ] All external links open in new tab

---

## 11. Edge Cases

### Empty States
- [ ] Page loads without JavaScript (graceful degradation)
- [ ] Page loads with slow connection
- [ ] Page loads with ad blockers enabled

### Error Handling
- [ ] Invalid anchor links don't break page
- [ ] Missing images don't break layout
- [ ] Network errors handled gracefully

---

## Issues Found

| Issue # | Severity | Description | Status |
|---------|----------|-------------|--------|
| 1       |          |             |        |
| 2       |          |             |        |
| 3       |          |             |        |

**Severity Levels:**
- 🔴 Critical: Blocks deployment
- 🟡 High: Should fix before deployment
- 🟢 Low: Can fix post-deployment
- ⚪ Enhancement: Future improvement

---

## Sign-Off

### Developer
- [ ] All features implemented
- [ ] Build passes
- [ ] Local testing complete

**Signature:** _____________  **Date:** _____________

### QA Tester
- [ ] All tests passed
- [ ] Issues documented
- [ ] Ready for deployment

**Signature:** _____________  **Date:** _____________

### Founder Approval
- [ ] Design approved
- [ ] Content approved
- [ ] Ready for production

**Signature:** _____________  **Date:** _____________

---

**Testing Notes:**

_Use this space for additional observations, suggestions, or concerns:_

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

---

**QA Completion Date:** _____________  
**Deployment Date:** _____________  
**Production URL:** https://privacygecko.com/roadmap
