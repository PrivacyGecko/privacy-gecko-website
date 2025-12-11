# Favicon.ico Instructions

## Why This is Needed

While Next.js 14 provides modern icon generation via `/app/icon.tsx` and `/app/apple-icon.tsx`, older browsers and some tools still look for `/public/favicon.ico`.

## How to Create favicon.ico

### Option 1: Use Online Generator (Easiest)
1. Visit https://favicon.io/favicon-generator/
2. Design: Green background (#10B981), gecko emoji 🦎
3. Download the generated `favicon.ico`
4. Place it at `/public/favicon.ico`

### Option 2: Use Existing Icon (Recommended)
1. Build the project: `npm run build`
2. Next.js generates icons at `.next/static/media/`
3. Convert the generated PNG to ICO format using ImageMagick:
   ```bash
   convert icon.png -define icon:auto-resize=16,32,48,64,256 favicon.ico
   ```
4. Copy to `/public/favicon.ico`

### Option 3: Use favicon-generator npm package
```bash
npx favicon-generator -i public/logo.png -o public/
```

## Verification

After adding favicon.ico:
1. Visit http://localhost:3000/favicon.ico (should not 404)
2. Check browser tab for favicon display
3. Check browser console for no 404 errors

## File Location

Place the file at:
```
/public/favicon.ico
```

NOT at:
```
/app/favicon.ico  ❌
/favicon.ico      ❌
```

## Alternative: SVG Favicon (Modern Browsers)

You can also create `/public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#10B981" rx="15"/>
  <text x="50" y="75" font-size="60" text-anchor="middle">🦎</text>
</svg>
```

Then add to `layout.tsx`:
```tsx
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```
