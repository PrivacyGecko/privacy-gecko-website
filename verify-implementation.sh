#!/bin/bash

# Product Card Simplification - Verification Script
# Run this script to verify all changes were implemented correctly

echo "=================================="
echo "Product Card Implementation Verification"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: AI Features Section Removed
echo "Check 1: Verifying AI features section was removed..."
if ! grep -q "AI Features Section" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: AI features section comment not found (removed)"
else
    echo -e "${RED}✗ FAIL${NC}: AI features section still exists"
fi
echo ""

# Check 2: AI-Powered Badge Updated
echo "Check 2: Verifying AI-Powered badge styling..."
if grep -q "bg-purple-100 text-purple-700 border-purple-300" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: Muted purple badge styling present"
else
    echo -e "${RED}✗ FAIL${NC}: Muted purple badge styling not found"
fi

if grep -q "AI-Powered" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: Badge text changed to 'AI-Powered'"
else
    echo -e "${RED}✗ FAIL${NC}: Badge text not updated"
fi
echo ""

# Check 3: Subtle AI Indicator Added
echo "Check 3: Verifying subtle AI indicator..."
if grep -q "Subtle AI Indicator" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: AI indicator comment found"
else
    echo -e "${RED}✗ FAIL${NC}: AI indicator not added"
fi

if grep -q "status === \"coming\" && ai && ai.aiFeatures" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: AI indicator conditional is correct (coming products only)"
else
    echo -e "${RED}✗ FAIL${NC}: AI indicator conditional missing or incorrect"
fi

if grep -q "text-\[10px\]\">✨</span>" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: Sparkle emoji (✨) present"
else
    echo -e "${RED}✗ FAIL${NC}: Sparkle emoji not found"
fi
echo ""

# Check 4: CTA Spacing Increased
echo "Check 4: Verifying CTA spacing..."
if grep -q "className=\"mt-auto pt-4\"" components/product/ProductCard.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: CTA spacing increased (pt-4 added)"
else
    echo -e "${RED}✗ FAIL${NC}: CTA spacing not updated"
fi
echo ""

# Check 5: Feature Count Updated
echo "Check 5: Verifying feature count..."
if grep -q "slice(0, 4)" app/page.tsx; then
    echo -e "${GREEN}✓ PASS${NC}: Feature count updated to 4"
else
    echo -e "${RED}✗ FAIL${NC}: Feature count still 3"
fi
echo ""

# Check 6: Backup File Created
echo "Check 6: Verifying backup file..."
if [ -f components/product/ProductCard.tsx.backup ]; then
    echo -e "${GREEN}✓ PASS${NC}: Backup file exists"
else
    echo -e "${YELLOW}⚠ WARNING${NC}: Backup file not found (optional)"
fi
echo ""

# Check 7: Build Status
echo "Check 7: Running TypeScript build check..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ PASS${NC}: Build successful (no TypeScript errors)"
else
    echo -e "${RED}✗ FAIL${NC}: Build failed (TypeScript errors present)"
fi
echo ""

# Summary
echo "=================================="
echo "Verification Complete"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Open http://localhost:3003 in browser"
echo "2. Follow VISUAL_INSPECTION_GUIDE.md for manual testing"
echo "3. Verify all 8 product cards render correctly"
echo ""
echo "Documentation:"
echo "- IMPLEMENTATION_SUMMARY_PRODUCT_CARD_SIMPLIFICATION.md"
echo "- VISUAL_INSPECTION_GUIDE.md"
echo "- IMPLEMENTATION_COMPLETE.md"
echo ""
