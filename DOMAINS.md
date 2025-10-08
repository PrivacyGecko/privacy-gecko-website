# Privacy Gecko Domain Structure

## Domain Portfolio

| Product | Domain | TLD | Status | Purpose |
|---------|--------|-----|--------|---------|
| **Main Hub** | privacygecko.com | .com | ✅ Live | Landing & Hub |
| **Token Site** | pricko.com | .com | ✅ Live | $PRICKO Info |
| **GeckoAdvisor** | geckoadvisor.com | .com | 🧪 Staging | SaaS Scanner (Stripe pending) |
| **GeckoShare** | geckoshare.com | .com | ✅ Live | File Sharing |
| **GeckoGuard** | geckoguard.app | .app | 📝 Review | Browser Extension (Web store) |
| **GeckoPass** | geckopass.com | .com | 💤 Future | Password Manager |
| **GeckoShell** | geckoshell.app | .app | 💤 Future | Secure Terminal |
| **GeckoView** | geckoview.app | .app | 💤 Future | Privacy Browser |
| **VPN MVP** | prickovpn.com | .com | 🧪 Testing | VPN Testing Environment |

## Domain Configuration

### Current Setup (Main Hub)
- Primary: `www.privacygecko.com`
- Redirects: `privacygecko.com` → `www.privacygecko.com`

### Future Integration Points

When individual product sites go live, update these links in the main hub:

#### Navigation (components/layout/Navigation.tsx)
```typescript
// Products dropdown should link to:
- GeckoAdvisor → https://geckoadvisor.com
- GeckoShare → https://geckoshare.com
- GeckoGuard → https://geckoguard.app
```

#### Product Cards (lib/products.ts)
```typescript
// Update product links:
{
  id: 'advisor',
  link: 'https://geckoadvisor.com',  // instead of /products/advisor
},
{
  id: 'share',
  link: 'https://geckoshare.com',  // instead of /products/share
},
{
  id: 'guard',
  link: 'https://geckoguard.app',  // instead of /products/guard
}
```

#### Token Page
- Current: `/token` on main hub
- Future: Redirect to `https://pricko.com` or keep on main hub

## DNS Configuration Checklist

When deploying each product domain:

### Vercel Setup
1. Add domain to Vercel project
2. Configure DNS:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```
3. Set environment variables per project
4. Enable HTTPS/SSL

### Domain Settings
- Enable DNSSEC (security)
- Configure WWW redirect preference
- Set up email forwarding if needed
- Configure SPF/DKIM for transactional emails

## Cross-Domain Considerations

### SSO / Authentication
- Consider unified auth across all gecko*.com domains
- Use privacygecko.com as identity provider
- JWT tokens should work across subdomains

### Analytics
- Plausible can track multiple domains
- Create separate projects or use `domain` property
- Consolidated dashboard for ecosystem metrics

### Branding Consistency
- All products use shared color palette (Gecko Green #10B981)
- Consistent navigation pattern
- "Part of Privacy Gecko" badge on product sites

## Staging Environments

Consider staging domains for testing:
- `staging.privacygecko.com`
- `staging.geckoadvisor.com`
- etc.

## SSL Certificates

All domains should have:
- Valid SSL certificates (auto via Vercel)
- HTTPS redirect enforced
- HSTS headers enabled
