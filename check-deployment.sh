#!/bin/bash

echo "🔍 Checking deployment status..."
echo ""

# Check if token page exists
echo "1. Token page (/token):"
TOKEN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.privacygecko.com/token)
if [ "$TOKEN_STATUS" = "200" ]; then
  echo "   ✅ EXISTS (HTTP $TOKEN_STATUS)"
else
  echo "   ❌ NOT FOUND (HTTP $TOKEN_STATUS)"
fi

# Check if success page exists
echo "2. Success page (/success):"
SUCCESS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.privacygecko.com/success)
if [ "$SUCCESS_STATUS" = "200" ]; then
  echo "   ✅ EXISTS (HTTP $SUCCESS_STATUS)"
else
  echo "   ❌ NOT FOUND (HTTP $SUCCESS_STATUS)"
fi

# Check for jump links on pricing
echo "3. Jump links on pricing page:"
JUMP_LINKS=$(curl -s https://www.privacygecko.com/pricing | grep -o "Jump to:" | head -1)
if [ -n "$JUMP_LINKS" ]; then
  echo "   ✅ FOUND"
else
  echo "   ❌ NOT FOUND"
fi

# Check for Monthly/Yearly toggle
echo "4. Monthly/Yearly toggle:"
TOGGLE=$(curl -s https://www.privacygecko.com/pricing | grep -o "Yearly.*Save" | head -1)
if [ -n "$TOGGLE" ]; then
  echo "   ✅ FOUND"
else
  echo "   ❌ NOT FOUND"
fi

echo ""
if [ "$TOKEN_STATUS" = "200" ] && [ "$SUCCESS_STATUS" = "200" ] && [ -n "$JUMP_LINKS" ] && [ -n "$TOGGLE" ]; then
  echo "✅ All new features are deployed!"
else
  echo "⚠️  New features NOT deployed yet. Check Vercel dashboard."
fi
