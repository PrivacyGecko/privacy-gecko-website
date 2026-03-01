---
name: privacy-audit
description: Run a quick privacy compliance audit on the codebase. Checks for unauthorized tracking, PII exposure, insecure data handling, and privacy policy accuracy.
user_invocable: true
---

# Privacy Audit Skill

Run a quick privacy compliance audit on the Privacy Gecko codebase to verify the site meets its privacy-first promises.

## Audit Checklist

### 1. No Unauthorized Tracking
Search for any tracking scripts that violate Privacy Gecko's "no tracking" promise:

```bash
# Check for Google Analytics, Facebook Pixel, or other trackers
grep -r "google-analytics\|gtag\|fbq\|facebook.*pixel\|hotjar\|mixpanel\|segment\|amplitude\|intercom\|drift\|hubspot" apps/ packages/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" -l
```

**Expected**: Empty result. Only Plausible Analytics is allowed.

### 2. No PII in Logs
Check for console.log statements that might leak PII:

```bash
# Find console.log/warn/error that might include user data
grep -rn "console\.\(log\|warn\|error\).*\(email\|password\|name\|address\|phone\|ip\)" apps/ --include="*.tsx" --include="*.ts" -l
```

### 3. Input Sanitization
Verify contact form and other inputs sanitize HTML:

```bash
# Check for sanitization in API routes
grep -rn "sanitize\|strip.*tag\|html.*escape\|replace.*<" apps/web/app/api/ --include="*.ts"
```

### 4. Security Headers Present
Verify security headers in Next.js config:

```bash
# Check for security headers
grep -A 2 "Strict-Transport-Security\|Content-Security-Policy\|X-Frame-Options\|X-Content-Type-Options\|Referrer-Policy\|Permissions-Policy" apps/web/next.config.mjs
```

### 5. HTTPS Enforcement
Check that all external links use HTTPS:

```bash
# Find any http:// links (excluding localhost)
grep -rn "http://" apps/ --include="*.tsx" --include="*.ts" | grep -v "localhost\|127\.0\.0\.1\|http://schemas"
```

### 6. Environment Variable Security
Verify sensitive data is in environment variables, not hardcoded:

```bash
# Check for hardcoded API keys or secrets
grep -rn "sk_live\|sk_test\|pk_live\|pk_test\|api_key.*=.*['\"]" apps/ packages/ --include="*.tsx" --include="*.ts" --include="*.js" | grep -v ".env\|node_modules"
```

### 7. Third-Party Script Audit
List all external domains referenced:

```bash
# Find external URLs in source
grep -roh "https://[a-zA-Z0-9.-]*\.[a-zA-Z]*" apps/ --include="*.tsx" --include="*.ts" | sort -u
```

Review each domain for privacy implications.

### 8. Privacy Policy Accuracy
Cross-reference claims in `/legal/privacy` with actual code behavior:
- "No tracking" → Verify only Plausible
- "No data selling" → Verify no third-party data sharing
- "Contact form data" → Verify Resend handling only
- "Newsletter" → Verify Resend audience management

## Report Format

```
PRIVACY AUDIT REPORT
Date: [Date]
Auditor: Privacy Audit Skill

1. UNAUTHORIZED TRACKING: [PASS/FAIL]
   [Details]

2. PII IN LOGS: [PASS/FAIL]
   [Details]

3. INPUT SANITIZATION: [PASS/FAIL]
   [Details]

4. SECURITY HEADERS: [PASS/FAIL]
   [Details]

5. HTTPS ENFORCEMENT: [PASS/FAIL]
   [Details]

6. ENV VARIABLE SECURITY: [PASS/FAIL]
   [Details]

7. THIRD-PARTY SCRIPTS: [PASS/FAIL]
   [Domains found and assessment]

8. PRIVACY POLICY ACCURACY: [PASS/FAIL]
   [Claims vs reality]

OVERALL: [PASS / ISSUES FOUND]

RECOMMENDATIONS:
[List any fixes needed]
```
