# Contributing to Privacy Gecko Website

First off, thank you for considering contributing to Privacy Gecko! We're building privacy tools that actually work, and every contribution helps make digital privacy more accessible.

## 🦎 Code of Conduct

This project follows a simple principle: **Be respectful, be constructive, be privacy-focused.**

We're here to build great privacy tools together. Harassment, spam, or malicious behavior won't be tolerated.

## 🚀 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**Good bug reports include:**
- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS information
- Console errors (if any)

### Suggesting Enhancements

We love new ideas! Enhancement suggestions are tracked as GitHub issues.

**Good enhancement suggestions include:**
- Clear use case or problem being solved
- Proposed solution or implementation approach
- Why this benefits Privacy Gecko users
- Any privacy/security considerations

### Pull Requests

**Before submitting a PR:**
1. Check existing issues and PRs to avoid duplicates
2. Fork the repo and create a feature branch
3. Follow the existing code style
4. Test your changes thoroughly
5. Update documentation if needed

**PR Guidelines:**
- One feature/fix per PR
- Write clear commit messages
- Include screenshots for UI changes
- Reference related issues (e.g., "Fixes #123")
- Ensure builds pass (`npm run build`)
- Test on multiple screen sizes

## 💻 Development Setup

1. **Fork and clone the repo:**
```bash
git clone https://github.com/YOUR-USERNAME/privacy-gecko-website.git
cd privacy-gecko-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your development keys (see `.env.example` for details).

4. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes.

## 📝 Code Style

- **TypeScript**: Use TypeScript for all new files
- **Components**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Formatting**: Run `npm run lint` before committing
- **CSS**: Use Tailwind utility classes (avoid custom CSS when possible)

## 🔐 Privacy & Security Guidelines

**This is a privacy-focused project. Always consider:**
- Never track users without explicit consent
- Minimize data collection
- Use privacy-preserving analytics only
- No third-party tracking scripts
- Document any external services used
- Report security issues privately (see SECURITY.md)

## 🌳 Git Workflow

We use a simple branch-based workflow:

```
main (production) ← PR from feature branches
```

**Branch naming:**
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

**Commit messages:**
- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- Keep first line under 72 characters
- Be descriptive but concise

Examples:
```
feat: add email breach checker to GeckoAdvisor
fix: resolve mobile menu not closing on route change
docs: update README with deployment instructions
```

## 📋 Issue Labels

We use labels to organize issues:
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation updates
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `privacy` - Privacy-related issue
- `security` - Security-related issue

## ✅ Pull Request Checklist

Before submitting your PR, verify:
- [ ] Code builds successfully (`npm run build`)
- [ ] No console errors or warnings
- [ ] Tested on desktop and mobile
- [ ] Follows existing code style
- [ ] Updated documentation if needed
- [ ] No hardcoded secrets or API keys
- [ ] Privacy considerations documented

## 🎯 Areas We Need Help With

- **UI/UX improvements** - Better mobile experience, accessibility
- **Performance** - Bundle size optimization, image optimization
- **Documentation** - Setup guides, architecture docs
- **Testing** - E2E tests, accessibility testing
- **Translations** - Multi-language support (future)
- **Blog content** - Privacy guides, tutorials

## 💬 Questions?

- **GitHub Discussions**: For general questions and ideas
- **Twitter**: [@privacygecko](https://twitter.com/privacygecko)
- **Telegram**: [t.me/privacygecko](https://t.me/privacygecko)
- **Email**: support@privacygecko.com

## 📜 License

By contributing to Privacy Gecko, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to digital privacy! 🦎**
