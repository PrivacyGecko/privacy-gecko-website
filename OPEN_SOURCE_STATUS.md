# Open Source Status & Roadmap

## Current Status (January 2025)

### What's Open Source NOW
- ✅ **This Website**: [github.com/pothamsetty/privacy-gecko-website](https://github.com/pothamsetty/privacy-gecko-website)
  - Full source code available
  - Issues and contributions welcome

### What's Coming Q2 2025
- ⏳ **GeckoAdvisor** - Privacy scanning tool (security audit in progress)
- ⏳ **GeckoShare** - End-to-end encrypted file sharing (security audit in progress)
- ⏳ **GeckoGuard** - Privacy-first browser extension (security audit in progress)

## Why the Delay?

Before open-sourcing privacy/security tools, we're conducting comprehensive security audits to ensure:
1. No vulnerabilities that could harm users
2. Encryption implementations meet industry standards
3. No accidental API key/credential exposure
4. Code quality meets our standards

## Messaging Guidelines

### ✅ DO SAY:
- "We're committed to open source transparency"
- "Working toward full code transparency by Q2 2025"
- "Website is open source, product code coming Q2 2025"
- "Open development roadmap"

### ❌ DON'T SAY:
- "All our tools are open source" (not yet true)
- "Audit our code on GitHub" (without providing links)
- "Completely open source" (misleading until repos are public)

## Implementation Notes

**Privacy Review - January 2025**:
We identified that making "open source" claims without providing repository links is a critical credibility issue for privacy-focused users. Rather than link to non-existent repos, we've chosen honest messaging about our timeline and commitment.

**Decision**: Use "open development" language and provide specific Q2 2025 timeline for full transparency.

**Updated Files** (FIX #2):
- `/app/resources/faq/page.tsx` - Honest FAQ answer about open source status
- `/app/page.tsx` - Changed "Open Source" to "Open Development"
- `/app/about/page.tsx` - Qualified transparency claims with timeline
- `/app/products/advisor/page.tsx` - Softened "audit our code" claim
- `/app/products/guard/page.tsx` - Removed unverifiable "completely open source" claim

## When Repos Go Public

When product repositories are ready:

1. **Add GitHub Links**:
   - Footer: GitHub icon + organization link
   - About page: "View Our Code" section
   - FAQ: Direct repo links
   - Product pages: "View Source" buttons

2. **Update Messaging**:
   - Restore stronger "open source" language
   - Add actual audit instructions
   - Update this document

3. **Example Footer Addition**:
```tsx
<a
  href="https://github.com/privacygecko"
  className="text-gray-400 hover:text-gecko-green transition-colors"
  aria-label="GitHub"
>
  <Github size={20} />
</a>
```

## Contact

Questions about open source timeline? Email opensource@privacygecko.com

---

**Last Updated**: January 2025
**Next Review**: March 2025 (pre-Q2 launch)
