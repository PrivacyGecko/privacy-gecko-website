# Privacy Gecko Git Workflow

**Last Updated:** 2025-10-31
**Status:** ✅ ACTIVE

---

## 🌳 Branch Structure

```
feature/* (development) → stage (testing) → master (production)
```

### Branch Purposes

**master** (Production)
- Live production code
- Deployed to: https://www.privacygecko.com
- Protected branch - only accepts merges from stage
- Always production-ready
- Tagged releases

**stage** (Staging/Testing)
- Pre-production testing environment
- Deployed to: https://stage.privacygecko.com
- Integration testing branch
- QA and review testing
- Merge target for all feature branches

**feature/*** (Development)
- Individual feature development
- Short-lived branches
- Naming convention: `feature/descriptive-name`
- Examples:
  - `feature/blog-implementation`
  - `feature/ai-messaging-integration`
  - `feature/contact-form-fix`

---

## 🔄 Development Workflow

### 1. Start New Feature

```bash
# Always start from latest stage
git checkout stage
git pull origin stage

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Develop and Commit

```bash
# Make your changes
# Write clear, descriptive commit messages

git add .
git commit -m "feat: descriptive commit message"

# Push to remote for backup/collaboration
git push origin feature/your-feature-name
```

### 3. Ready for Testing → Merge to Stage

```bash
# Update stage with latest changes
git checkout stage
git pull origin stage

# Merge your feature
git merge feature/your-feature-name --no-ff

# Push to stage for testing
git push origin stage
```

**Testing on Stage:**
- Verify deployment: https://stage.privacygecko.com
- Run QA tests
- Get review approvals
- Verify all functionality works

### 4. Ready for Production → Merge to Master

```bash
# Only merge to master after stage testing passes
git checkout master
git pull origin master

# Merge from stage (not feature branch!)
git merge stage --no-ff

# Push to production
git push origin master
```

**Production Verification:**
- Verify deployment: https://www.privacygecko.com
- Monitor for errors
- Check critical functionality

### 5. Clean Up

```bash
# Delete feature branch (optional, after merge)
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## 📋 Commit Message Conventions

Use conventional commit format:

```
<type>: <description>

[optional body]

[optional footer]
```

### Types
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Test additions or fixes
- `chore:` - Build process or tooling changes

### Examples
```bash
git commit -m "feat: add blog post schema for SEO"
git commit -m "fix: resolve contact form CSP issue"
git commit -m "docs: update git workflow documentation"
git commit -m "refactor: simplify product description components"
```

---

## ⚠️ Important Rules

### DO
- ✅ Always start feature branches from `stage`
- ✅ Test thoroughly on `stage` before merging to `master`
- ✅ Keep `stage` and `master` in sync
- ✅ Write descriptive commit messages
- ✅ Use feature branches for all development
- ✅ Pull latest changes before creating branches
- ✅ Run local tests before pushing

### DON'T
- ❌ Never commit directly to `master`
- ❌ Never commit directly to `stage` (use feature branches)
- ❌ Never merge feature branches directly to `master`
- ❌ Never force push to `master` or `stage`
- ❌ Never skip testing on `stage`
- ❌ Never merge untested code

---

## 🚨 Emergency Hotfix Process

For critical production bugs that need immediate fixes:

```bash
# Create hotfix branch from master
git checkout master
git checkout -b hotfix/critical-bug-name

# Make minimal fix
git add .
git commit -m "fix: critical bug description"

# Merge to master immediately
git checkout master
git merge hotfix/critical-bug-name --no-ff
git push origin master

# Also merge to stage to keep in sync
git checkout stage
git merge hotfix/critical-bug-name --no-ff
git push origin stage

# Clean up
git branch -d hotfix/critical-bug-name
```

---

## 📊 Branch Status Check

Check current branch alignment:

```bash
# View all branches
git branch -a

# Check commits on stage not in master
git log master..stage --oneline

# Check commits on master not in stage
git log stage..master --oneline

# View differences between branches
git diff --stat stage master

# View commit graph
git log --oneline --graph --all -10
```

---

## 🔄 Keeping Branches in Sync

### Stage Behind Master (After Hotfix)

```bash
git checkout stage
git merge master --no-ff
git push origin stage
```

### Master Behind Stage (Normal Workflow)

```bash
git checkout master
git merge stage --no-ff
git push origin master
```

---

## 📁 Current Branch Status

**As of October 31, 2025:**

- ✅ **master** and **stage** are in sync (commit: 1c2bdc1)
- ✅ Both branches include all blog implementation changes
- ✅ Workflow established for future development
- ✅ All 5 blog posts deployed to both environments

**Latest Commit on Both:**
```
1c2bdc1 feat: implement 5 SEO-optimized blog posts for Privacy Gecko
```

---

## 🎯 Quick Reference

**Starting new work:**
```bash
git checkout stage && git pull origin stage
git checkout -b feature/my-feature
```

**Merge to stage for testing:**
```bash
git checkout stage && git pull origin stage
git merge feature/my-feature --no-ff && git push origin stage
```

**Deploy to production:**
```bash
git checkout master && git pull origin master
git merge stage --no-ff && git push origin master
```

---

## 📞 Deployment Process

### Stage Deployment
- **Trigger:** Push to `stage` branch
- **Auto-Deploy:** Vercel (automatic)
- **URL:** https://stage.privacygecko.com
- **Purpose:** Testing and QA

### Production Deployment
- **Trigger:** Push to `master` branch
- **Auto-Deploy:** Vercel (automatic)
- **URL:** https://www.privacygecko.com
- **Purpose:** Live production site

---

## ✅ Pre-Merge Checklist

Before merging to **stage**:
- [ ] Code compiles without errors
- [ ] All local tests pass
- [ ] No console errors in development
- [ ] Commit messages are clear
- [ ] Changes align with Privacy Gecko mission

Before merging to **master**:
- [ ] Stage deployment verified working
- [ ] QA testing completed on stage
- [ ] No critical errors in browser console
- [ ] Mobile responsive testing done
- [ ] Core functionality tested
- [ ] Review approvals obtained (if applicable)

---

## 🎓 Learning Resources

**Git Commands:**
- `git branch` - List branches
- `git checkout` - Switch branches
- `git merge` - Merge branches
- `git log` - View commit history
- `git diff` - View differences
- `git status` - Check working tree status

**Best Practices:**
- Keep commits atomic (one logical change per commit)
- Write descriptive commit messages
- Test before pushing
- Pull before starting new work
- Communicate breaking changes

---

**Workflow Status:** ✅ ACTIVE AND ENFORCED

All future development must follow this workflow to maintain code quality and prevent production issues.
