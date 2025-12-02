# Security Policy

## 🔐 Reporting a Vulnerability

Privacy Gecko takes security seriously. If you discover a security vulnerability, please report it responsibly.

### **Please DO NOT:**
- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before we've had time to address it
- Exploit the vulnerability beyond what's necessary to demonstrate it

### **Please DO:**
1. **Email us privately**: security@privacygecko.com
2. **Include details**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if you have one)
3. **Give us time**: We aim to respond within 48 hours
4. **Coordinate disclosure**: We'll work with you on responsible disclosure timing

## 🛡️ What We Consider Security Issues

**In scope:**
- Authentication/authorization bypasses
- Data exposure (user data, API keys, secrets)
- Cross-site scripting (XSS)
- SQL injection or code injection
- Insecure configurations
- Privacy leaks (unintended tracking, data collection)
- CSRF vulnerabilities
- Sensitive information in client-side code

**Out of scope:**
- Issues already publicly known
- Theoretical vulnerabilities without proof of concept
- Social engineering attacks
- Denial of service (DoS) attacks
- Issues in third-party dependencies (report to them directly)

## 🔄 Security Update Process

When we receive a security report:

1. **Acknowledgment** (within 48 hours)
   - We'll confirm receipt and begin investigation

2. **Investigation** (1-7 days)
   - Assess severity and impact
   - Develop and test a fix

3. **Fix Deployment** (urgent issues: same day; others: within 2 weeks)
   - Deploy patch to production
   - Update dependencies if needed

4. **Disclosure** (after fix is deployed)
   - Credit reporter (if desired)
   - Publish security advisory
   - Document in CHANGELOG

## 📊 Severity Levels

We assess vulnerabilities using these severity levels:

**Critical**: Immediate action required
- Full system compromise
- Exposure of all user data
- Remote code execution

**High**: Fix within 7 days
- Authentication bypass
- Exposure of sensitive user data
- Privilege escalation

**Medium**: Fix within 30 days
- Limited data exposure
- CSRF vulnerabilities
- XSS on non-sensitive pages

**Low**: Fix in next release cycle
- Information disclosure (non-sensitive)
- Minor configuration issues

## 🏆 Recognition

We appreciate security researchers who help us keep Privacy Gecko secure:

- We'll publicly credit you (unless you prefer to remain anonymous)
- Your name in our Security Hall of Fame
- Swag and bounties for significant findings (when budget allows)

## 🔒 Our Security Practices

**Current protections:**
- Environment variables for all secrets
- HTTPS enforced
- Privacy-friendly analytics only
- No tracking cookies
- Regular dependency updates
- Secure headers configuration
- Input validation and sanitization

**Ongoing commitments:**
- Regular security audits
- Dependency vulnerability scanning
- Security-focused code reviews
- Prompt patching of known vulnerabilities

## 📋 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| Older   | ❌ Update required |

We only support the latest version deployed to production. Please update to the latest version before reporting issues.

## 📞 Contact

- **Security email**: security@privacygecko.com
- **PGP Key**: Available on request
- **Response time**: Within 48 hours

## 🙏 Thank You

Thank you for helping keep Privacy Gecko and our users safe!

---

**Privacy Gecko Security Team**
