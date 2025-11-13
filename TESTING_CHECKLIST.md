# Week 1 Timeline Fixes - Testing Checklist

## Manual QA Testing on localhost:3003

### Homepage (/)
- [ ] Hero section shows accurate product counts (4 live, 4 in development)
- [ ] "AI-Enhanced" card (Why Choose Us section) shows "Token launching **November 2025**"
- [ ] Token Bridge section header shows "Launching **November 2025**"
- [ ] FAQ section AI launch question shows "$PRICKO token launches **November 2025**"
- [ ] Final CTA section shows "Early access to AI beta (**Q1 2026**)"

### AI Roadmap (/ai-roadmap)
- [ ] Phase 1 (Q2-Q3 2025) displays **purple "Completed"** badge
- [ ] Phase 2 (Q4 2025) displays **green "In Progress"** badge  
- [ ] Phase 3 (Q4 2025 - AI Beta) displays "Planned" badge
- [ ] Phase 4 (Q1 2026 - AI Public Launch) displays "Planned" badge
- [ ] Transparency Report section shows "Next Report: **Q4 2025**" (not Q2 2025)
- [ ] Visual styling for completed phase is distinct (purple)

### About Page (/about)
- [ ] "Our Story" section shows "**4 live, 4 in development**" (not 2 live)
- [ ] Open source commitment shows "**Q4 2025 - Q1 2026**" timeline
- [ ] Second open source reference also shows "**Q4 2025 - Q1 2026**"

### Products Page (/products)
- [ ] AI Enhancement banner shows "**Development Q4 2025 - Q1 2026**" (not "Starting Q4 2025")
- [ ] AI timeline section shows "First Features **Q1 2026**"
- [ ] Phase 1 shows "Feb 2026" or "Q1 2026" consistently
- [ ] Final CTA shows "Early access to AI beta (**Q1 2026**)" (not Q4 2025)
- [ ] All 4 live products show "Live Now" badges
- [ ] All 4 coming products show development progress bars

### FAQ Page (/resources/faq)
- [ ] Open source question shows "**Q4 2025 - Q1 2026**" timeline
- [ ] Token integration question shows "Launching **November 2025**" (not Q4/December)

### Cross-Page Consistency Checks
- [ ] Token launch consistently shown as **November 2025** across all pages
- [ ] AI beta consistently shown as **Q1 2026** across all pages
- [ ] AI public launch consistently shown as **Q2 2026** across all pages
- [ ] Product count (4 live) consistent where mentioned
- [ ] No references to "Starting Q4 2025" anywhere

### Build & Technical Checks
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` starts successfully on localhost:3003
- [ ] No console errors in browser developer tools
- [ ] All pages load without 404 errors
- [ ] TypeScript compilation successful
- [ ] No broken links

### Visual/UX Checks
- [ ] Purple "Completed" badge visually distinct from green "In Progress"
- [ ] All timeline references are clear and unambiguous
- [ ] No conflicting dates visible on any page
- [ ] Mobile responsive design intact after changes
- [ ] All animations and transitions working

## Critical Issues to Escalate

If any of these are found during testing:
- References to "December 2025" for token launch
- References to "Q4 2025" for AI beta (should be Q1 2026)
- Phase 1 still showing as "In Development" instead of "Completed"
- Transparency report still showing "Q2 2025"
- About page still showing "2 live" tools
- Build failures or TypeScript errors

## Sign-Off

- [ ] QA Tester: _______________ Date: ___________
- [ ] Content Reviewer: _______________ Date: ___________
- [ ] Founder Review: _______________ Date: ___________
- [ ] Deployment Approved: YES / NO

## Notes

_Use this space to document any issues found during testing:_

---

**Testing Environment:** localhost:3003  
**Expected Completion:** Before token launch (November 2025)  
**Priority:** CRITICAL
