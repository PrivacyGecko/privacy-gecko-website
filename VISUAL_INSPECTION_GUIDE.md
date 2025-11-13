# Visual Inspection Guide - Product Card Simplification

**Dev Server:** http://localhost:3003  
**Page to Test:** Homepage (/) - Product Showcase Section

---

## Quick Reference: Expected Product Card Behavior

| Product | Status | AI-Powered Badge? | AI Indicator? | AI Indicator Text |
|---------|--------|-------------------|---------------|-------------------|
| Gecko Advisor | Live | ❌ NO | ❌ NO | (none) |
| Gecko Share | Live | ❌ NO | ❌ NO | (none) |
| Gecko Guard | Live | ❌ NO | ❌ NO | (none) |
| Gecko Lock | Live | ❌ NO | ❌ NO | (none) |
| Gecko View | Coming | ✅ YES | ✅ YES | "✨ AI-powered at launch (Q2 2026)" |
| GeckoShell | Coming | ❌ NO | ✅ YES | "✨ AI features coming Q3-Q4 2026" |
| Gecko VPN | Coming | ❌ NO | ✅ YES | "✨ AI features coming 2027" |
| Gecko Watch | Coming | ❌ NO | ✅ YES | "✨ AI features coming Q2 2026" |

---

## Test 1: Live Products - NO AI Messaging

### Products to Check
1. Gecko Advisor (top-left)
2. Gecko Share (top row, second card)
3. Gecko Guard (top row, third card)
4. Gecko Lock (top row, fourth card)

### Expected Visual Structure (Each Card)
```
┌─────────────────────────────────────┐
│ [Icon]              [Live Now Badge]│
│                                     │
│ Product Name                        │
│ Description text here...            │
│                                     │
│ ✓ Feature 1                         │
│ ✓ Feature 2                         │
│ ✓ Feature 3                         │
│ ✓ Feature 4                         │
│                                     │
│                                     │
│    [Visit Site →] or [Learn More]  │
└─────────────────────────────────────┘
```

### Checklist
- [ ] Status badge shows "Live Now" (green)
- [ ] NO purple "AI-Powered" badge visible
- [ ] 4 features displayed with green checkmarks (✓)
- [ ] CTA button has good spacing (pt-4 padding visible)
- [ ] NO text below CTA button (no AI indicator)
- [ ] External products (Advisor, Share, Guard, Lock) show "Visit Site →"

### Visual Inspection Points
- **Spacing:** Extra padding above CTA button should be noticeable
- **Cleanliness:** No AI section, no gradient boxes, no robot emoji
- **Focus:** Core features are the main content

---

## Test 2: Coming Products - AI-Native (GeckoView Only)

### Product to Check
- Gecko View (coming, ai-native)

### Expected Visual Structure
```
┌─────────────────────────────────────┐
│ [Icon]   [In Development] [AI-Pwrd] │
│                                     │
│ Gecko View                          │
│ Save and Summarize Without...      │
│                                     │
│ Development Progress        45%     │
│ [██████████░░░░░░░░░░░░░░]         │
│                                     │
│ ✓ One-click AI summaries            │
│ ✓ End-to-end encrypted vault        │
│ ✓ Browser extension integration     │
│ ✓ Mobile apps for iOS and Android   │
│                                     │
│                                     │
│       [Join Waitlist]               │
│  Includes 20% lifetime discount     │
│                                     │
│ ✨ AI-powered at launch (Q2 2026)   │
└─────────────────────────────────────┘
```

### Checklist
- [ ] Two badges visible: "In Development" + "AI-Powered"
- [ ] "AI-Powered" badge is MUTED purple (purple-100 bg, purple-700 text)
- [ ] NOT bold purple-600 (should be subtle, not attention-grabbing)
- [ ] Progress bar shows 45%
- [ ] 4 features displayed (including AI-related features)
- [ ] "Join Waitlist" button present
- [ ] "Includes 20% lifetime discount" text below button
- [ ] AI indicator: "✨ AI-powered at launch (Q2 2026)"
- [ ] Sparkle emoji (✨), not robot emoji (🤖)

### Visual Inspection Points
- **Badge Color:** Purple should be muted/pastel, not vibrant
- **Badge Size:** Small font size (text-[10px])
- **AI Indicator:** Subtle gray text (text-gray-500), centered
- **Overall Feel:** Professional, not overwhelming

---

## Test 3: Coming Products - Post-Launch AI

### Product to Check
- Gecko Watch (coming, post-launch AI)

### Expected Visual Structure
```
┌─────────────────────────────────────┐
│ [Icon]       [In Development Badge] │
│                                     │
│ Gecko Watch                         │
│ Website Privacy Scanner             │
│                                     │
│ Development Progress        55%     │
│ [███████████████░░░░░░░░░]         │
│                                     │
│ ✓ GDPR compliance checking          │
│ ✓ Cookie & tracker analysis         │
│ ✓ Privacy policy scanning           │
│ ✓ Continuous monitoring             │
│                                     │
│                                     │
│       [Join Waitlist]               │
│  Includes 20% lifetime discount     │
│                                     │
│ ✨ AI features coming Q2 2026       │
└─────────────────────────────────────┘
```

### Checklist
- [ ] ONE badge only: "In Development" (NOT AI-Powered)
- [ ] NO purple AI-Powered badge (AI comes after launch)
- [ ] Progress bar shows 55%
- [ ] 4 core features (NOT AI features - those come later)
- [ ] "Join Waitlist" button
- [ ] "Includes 20% lifetime discount" text
- [ ] AI indicator: "✨ AI features coming Q2 2026"
- [ ] Text says "coming" not "at launch" (key difference from AI-native)

### Visual Inspection Points
- **No AI Badge:** Top-right should only have development status
- **Core Features Focus:** Features list should be non-AI capabilities
- **Indicator Text:** "coming" vs "at launch" signals post-launch AI

---

## Test 4: Coming Products - Future AI

### Products to Check
1. GeckoShell (coming, future AI - Q3-Q4 2026)
2. Gecko VPN (coming, future AI - 2027)

### Expected Visual Structure (GeckoShell Example)
```
┌─────────────────────────────────────┐
│ [Icon]       [In Development Badge] │
│                                     │
│ GeckoShell                          │
│ Private Mobile Browser              │
│                                     │
│ Development Progress        30%     │
│ [███████░░░░░░░░░░░░░░░░░]         │
│                                     │
│ ✓ Blocks trackers automatically     │
│ ✓ Available on iOS and Android      │
│ ✓ Built-in Solana wallet (optional) │
│ ✓ Privacy-focused browsing          │
│                                     │
│                                     │
│       [Join Waitlist]               │
│  Includes 20% lifetime discount     │
│                                     │
│ ✨ AI features coming Q3-Q4 2026    │
└─────────────────────────────────────┘
```

### Checklist - GeckoShell
- [ ] ONE badge: "In Development"
- [ ] NO AI-Powered badge
- [ ] Progress bar shows 30%
- [ ] 4 core features (non-AI)
- [ ] AI indicator: "✨ AI features coming Q3-Q4 2026"

### Checklist - Gecko VPN
- [ ] ONE badge: "In Development"
- [ ] NO AI-Powered badge
- [ ] Progress bar shows 20%
- [ ] 4 core features (non-AI)
- [ ] AI indicator: "✨ AI features coming 2027"

### Visual Inspection Points
- **Distant Timeline:** "2027" or "Q3-Q4 2026" sets realistic expectations
- **Core Features First:** VPN features, browser features (not AI promises)
- **No Hype:** Subtle indicator, not prominent AI marketing

---

## Test 5: Responsive Breakpoints

### Mobile (375px width)
Open DevTools > Toggle Device Toolbar > iPhone SE

**Expected Layout:**
```
[Product Card 1]
[Product Card 2]
[Product Card 3]
[Product Card 4]
[Product Card 5]
[Product Card 6]
[Product Card 7]
[Product Card 8]
```

**Checklist:**
- [ ] Cards stack vertically (1 column)
- [ ] All content visible (no truncation)
- [ ] AI indicators visible on mobile
- [ ] CTA buttons full-width
- [ ] Progress bars render correctly
- [ ] No horizontal scrolling

### Tablet (768px width)
Open DevTools > iPad Air

**Expected Layout:**
```
[Card 1] [Card 2]
[Card 3] [Card 4]
[Card 5] [Card 6]
[Card 7] [Card 8]
```

**Checklist:**
- [ ] 2-column grid
- [ ] Proper spacing between cards
- [ ] All badges visible
- [ ] Cards have equal height

### Desktop (1440px width)
Open DevTools > Responsive > 1440x900

**Expected Layout:**
```
[Card 1] [Card 2] [Card 3] [Card 4]
[Card 5] [Card 6] [Card 7] [Card 8]
```

**Checklist:**
- [ ] 4-column grid
- [ ] Cards aligned horizontally
- [ ] No overflow or wrapping
- [ ] Balanced visual weight across all cards

---

## Test 6: Feature Count Verification

### For Each Product Card
Count the number of features (green checkmarks) displayed.

**Expected:** 4 features per card (changed from 3)

| Product | Expected Feature Count | ✓ Verified |
|---------|----------------------|-----------|
| Gecko Advisor | 4 | [ ] |
| Gecko Share | 4 | [ ] |
| Gecko Guard | 4 | [ ] |
| Gecko Lock | 4 | [ ] |
| Gecko View | 4 | [ ] |
| GeckoShell | 4 | [ ] |
| Gecko VPN | 4 | [ ] |
| Gecko Watch | 4 | [ ] |

**If Not 4:**
- Check that page.tsx has `slice(0, 4)` not `slice(0, 3)`
- Verify product data in lib/products.ts has at least 4 features

---

## Test 7: AI Indicator Styling Details

### Text Styling Check (Inspect Element)
Open DevTools > Inspect the AI indicator on GeckoView

**Expected CSS Classes:**
```css
text-xs         /* Small text size */
text-gray-500   /* Muted gray color */
text-center     /* Centered text */
mt-3           /* Margin-top spacing from CTA */
flex           /* Flexbox layout */
items-center   /* Vertical alignment */
justify-center /* Horizontal alignment */
gap-1.5        /* Small gap between emoji and text */
```

**Emoji Span:**
```css
text-[10px]    /* Very small emoji size */
```

**Visual Check:**
- [ ] Text is NOT bold (should be regular weight)
- [ ] Color is light gray (not attention-grabbing)
- [ ] Emoji is smaller than main text
- [ ] Indicator is centered below CTA button
- [ ] Has appropriate spacing (mt-3 = 0.75rem = 12px)

---

## Test 8: CTA Button Prominence

### Before/After Comparison

**Old Implementation (mt-auto only):**
- CTA section directly adjacent to features
- Less visual separation

**New Implementation (mt-auto pt-4):**
- Extra padding-top (pt-4 = 1rem = 16px)
- More breathing room around CTA

### Visual Inspection
- [ ] CTA button appears more prominent
- [ ] Clear visual separation from features section
- [ ] Button is easier to identify as primary action
- [ ] Spacing feels balanced (not too cramped, not too spacious)

---

## Test 9: Badge Visual Regression Check

### AI-Powered Badge (GeckoView)
**OLD:** `bg-purple-600 text-white border-purple-600` (bold, vibrant)  
**NEW:** `bg-purple-100 text-purple-700 border-purple-300` (muted, subtle)

**Visual Comparison:**
- [ ] Background is light purple (almost pastel)
- [ ] Text is darker purple (readable but not bold)
- [ ] Border is visible but subtle
- [ ] Overall appearance is professional, not "screaming for attention"

**Color Values to Verify (DevTools Computed Styles):**
- Background: Should be light (purple-100 = #F3E8FF or similar)
- Text: Should be readable purple (purple-700 = #6B21A8 or similar)
- Border: Should be medium purple (purple-300 = #D8B4FE or similar)

---

## Test 10: No Regressions on Live Products

### Critical Check: Live Product Cards Should Look EXACTLY Like Before
(Except for 4 features instead of 3 and increased CTA spacing)

**What Should NOT Change:**
- [ ] Icon and icon background color
- [ ] "Live Now" badge color (green)
- [ ] Product title and description
- [ ] Feature checkmark color (gecko-green)
- [ ] CTA button styling (except spacing)
- [ ] External link behavior ("Visit Site →" opens new tab)

**What SHOULD Change:**
- [x] 4 features instead of 3
- [x] More padding above CTA button

**Verify for Each Live Product:**
1. Gecko Advisor
   - [ ] No visual regression
   - [ ] 4 features displayed
   - [ ] "Visit Site →" button works
   
2. Gecko Share
   - [ ] No visual regression
   - [ ] 4 features displayed
   - [ ] "Visit Site →" button works
   
3. Gecko Guard
   - [ ] No visual regression
   - [ ] 4 features displayed
   - [ ] "Visit Site →" button works
   
4. Gecko Lock
   - [ ] No visual regression
   - [ ] 4 features displayed
   - [ ] "Visit Site →" button works

---

## Test 11: Accessibility Checks

### Keyboard Navigation
1. Tab through product cards
   - [ ] CTA buttons are focusable
   - [ ] Focus indicator is visible
   - [ ] Tab order is logical (left-to-right, top-to-bottom)

2. Press Enter on focused CTA button
   - [ ] Live products: Opens external site
   - [ ] Coming products: Navigates to waitlist

### Screen Reader Testing (Optional)
- [ ] Product name is read correctly
- [ ] Status badges are announced
- [ ] AI-Powered badge is read as "AI-Powered" (not "A-I Native")
- [ ] Features are read as a list
- [ ] AI indicator text is accessible

### Color Contrast
- [ ] AI-Powered badge text (purple-700) on light background meets WCAG AA
- [ ] AI indicator text (gray-500) is readable
- [ ] All text maintains minimum contrast ratios

---

## Common Issues to Watch For

### Issue 1: AI Indicator on Live Products
**Problem:** AI indicator appears on live products  
**Root Cause:** Conditional logic missing `status === "coming"` check  
**How to Verify:** Check Gecko Advisor - should have NO AI indicator

### Issue 2: AI-Powered Badge on All Coming Products
**Problem:** Purple badge on products with post-launch AI  
**Root Cause:** `isAINative` logic incorrect  
**How to Verify:** Gecko Watch should NOT have AI-Powered badge

### Issue 3: Old AI Features Section Still Visible
**Problem:** Large gradient box with robot emoji still shows  
**Root Cause:** Lines 120-151 not removed  
**How to Verify:** No card should have a gradient box with 🤖

### Issue 4: Only 3 Features Displayed
**Problem:** Cards still showing 3 features instead of 4  
**Root Cause:** page.tsx still has `slice(0, 3)`  
**How to Verify:** Count features - should be 4 for all products

### Issue 5: CTA Button Too Close to Features
**Problem:** No visual separation between features and CTA  
**Root Cause:** `pt-4` not added to CardContent  
**How to Verify:** Inspect element - should see `padding-top: 1rem`

---

## Screenshot Documentation

For deployment approval, capture these screenshots:

### Before/After Comparison
1. **Full Product Grid (Desktop)**
   - Before: Old design with AI sections
   - After: New design with subtle indicators

2. **Live Product Card (Close-up)**
   - Show Gecko Advisor card - no AI messaging

3. **AI-Native Product Card (Close-up)**
   - Show GeckoView card - muted purple badge + indicator

4. **Post-Launch AI Product Card (Close-up)**
   - Show Gecko Watch card - no badge, but has indicator

5. **Mobile View**
   - Show vertical stack on 375px width

### Screenshot Tools
- macOS: Cmd+Shift+4
- Chrome DevTools: Capture node screenshot (right-click element)
- Full page: Cmd+Shift+P > "Capture full size screenshot"

---

## Final Approval Checklist

Before marking implementation as complete:

- [ ] All 8 product cards render correctly
- [ ] Live products have NO AI messaging
- [ ] GeckoView (AI-native) shows muted purple badge + indicator
- [ ] Coming products show appropriate AI indicators
- [ ] 4 features displayed on all cards
- [ ] CTA buttons have increased prominence
- [ ] Responsive breakpoints work correctly
- [ ] No console errors in DevTools
- [ ] No TypeScript errors in build
- [ ] No visual regressions on live product cards

---

## Reporting Issues

If any test fails, document:

1. **Which product card?**
2. **What's wrong?** (expected vs actual)
3. **Screenshot?** (if visual issue)
4. **Browser/device?** (if responsive issue)
5. **Console errors?** (if JavaScript issue)

Report to: Project Orchestrator for immediate fix

---

**Visual Inspection Started:** ___________  
**Visual Inspection Completed:** ___________  
**Issues Found:** ___________  
**Approved for Staging:** [ ] YES [ ] NO

**Tester Name:** ___________  
**Date:** ___________
