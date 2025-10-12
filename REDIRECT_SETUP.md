# WWW to Non-WWW Redirect Setup

This document explains how the redirect from `www.exptek.com` to `exptek.com` is configured.

## Overview

All traffic from `www.exptek.com` should be redirected to `exptek.com` (non-www version) with a 301 permanent redirect. This ensures:
- Consistent branding
- Better SEO (no duplicate content)
- Canonical URL compliance

## Configuration Files

### 1. _redirects (Netlify, Vercel, etc.)
**File:** `/frontend/public/_redirects`

This file handles redirects on modern hosting platforms like Netlify, Vercel, and similar services.

```
https://www.exptek.com/* https://exptek.com/:splat 301!
http://www.exptek.com/* https://exptek.com/:splat 301!
http://exptek.com/* https://exptek.com/:splat 301!
```

### 2. .htaccess (Apache)
**File:** `/frontend/public/.htaccess`

For Apache-based hosting, this file handles:
- www to non-www redirect
- HTTP to HTTPS redirect
- React Router support

### 3. nginx-redirect.conf (Nginx)
**File:** `/frontend/nginx-redirect.conf`

Complete Nginx configuration for:
- www to non-www redirect
- HTTP to HTTPS redirect
- React Router support
- Security headers
- Static asset caching

## Platform-Specific Instructions

### Netlify
1. The `_redirects` file is automatically detected
2. No additional configuration needed
3. Redirects are applied at the CDN level

### Vercel
1. The `_redirects` file works automatically
2. Alternatively, add to `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "https://www.exptek.com/:path*",
      "destination": "https://exptek.com/:path*",
      "permanent": true
    }
  ]
}
```

### Nginx (Self-hosted)
1. Copy `nginx-redirect.conf` to `/etc/nginx/sites-available/exptek.com`
2. Create symlink: `ln -s /etc/nginx/sites-available/exptek.com /etc/nginx/sites-enabled/`
3. Test config: `nginx -t`
4. Reload: `systemctl reload nginx`

### Apache (Self-hosted)
1. Ensure `.htaccess` is in the public root directory
2. Ensure `mod_rewrite` is enabled: `a2enmod rewrite`
3. Restart Apache: `systemctl restart apache2`

### Cloudflare (CDN)
1. Go to Cloudflare Dashboard > Rules > Page Rules
2. Create new rule:
   - URL: `www.exptek.com/*`
   - Setting: Forwarding URL
   - Status Code: 301 - Permanent Redirect
   - Destination: `https://exptek.com/$1`

### AWS CloudFront
1. Create Lambda@Edge function for origin request
2. Add redirect logic in Lambda function
3. Associate with CloudFront distribution

## DNS Configuration

To make www redirect work, you need proper DNS records:

### Option 1: A Records (Recommended)
```
Type    Name    Value           TTL
A       @       YOUR_IP         300
A       www     YOUR_IP         300
```

### Option 2: CNAME (If using CDN)
```
Type    Name    Value                   TTL
A       @       YOUR_IP                 300
CNAME   www     exptek.com              300
```

### Option 3: ALIAS/ANAME (Cloudflare, Route53)
```
Type    Name    Value                   TTL
ALIAS   @       your-cdn.domain.com     Auto
ALIAS   www     your-cdn.domain.com     Auto
```

## SEO Benefits

✅ **Prevents Duplicate Content**
- Search engines won't index both www and non-www versions
- All link equity goes to one version

✅ **Consistent Branding**
- Users always see exptek.com (not www.exptek.com)
- Professional appearance

✅ **Canonical URL**
- Already set in meta tags: `<link rel="canonical" href="https://exptek.com">`
- 301 redirect reinforces this

## Testing the Redirect

### Using curl:
```bash
# Test www redirect
curl -I https://www.exptek.com

# Expected response:
# HTTP/1.1 301 Moved Permanently
# Location: https://exptek.com/
```

### Using browser:
1. Visit https://www.exptek.com
2. URL should automatically change to https://exptek.com
3. Check browser developer tools > Network tab to see 301 redirect

### Using online tools:
- https://httpstatus.io/
- https://www.redirect-checker.org/
- https://www.internetmarketingninjas.com/tools/redirect-check/

## Kubernetes/Emergent Deployment

For deployment on Kubernetes/Emergent platform:

1. The redirect configuration will be handled at the ingress level
2. Contact your platform admin to configure ingress rules
3. Provide the `nginx-redirect.conf` file as reference

Example Kubernetes Ingress:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: exptek-redirect
  annotations:
    nginx.ingress.kubernetes.io/permanent-redirect: https://exptek.com$request_uri
spec:
  rules:
  - host: www.exptek.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: exptek-frontend
            port:
              number: 3000
```

## Troubleshooting

### Redirect not working?
1. Check DNS propagation: `dig www.exptek.com`
2. Clear browser cache
3. Test with curl to bypass cache
4. Check server logs for errors

### Redirect loop?
1. Check that only www → non-www redirect exists
2. Don't have conflicting redirects
3. Check for mixed HTTP/HTTPS redirects

### SSL certificate issues?
1. Ensure SSL cert covers both exptek.com and www.exptek.com
2. Use wildcard cert: *.exptek.com
3. Or get separate certs for each domain

## Next Steps

After deployment:
1. Test redirect with curl and browser
2. Update Google Search Console to prefer non-www version
3. Monitor for any redirect errors in Search Console
4. Update any hardcoded www URLs in marketing materials

## Support

For questions about redirect configuration on the Emergent platform, contact support or refer to platform documentation.
