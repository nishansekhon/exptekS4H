# Complete WWW to Non-WWW Redirect Deployment Guide

## Overview

This guide provides step-by-step instructions for implementing a permanent 301 redirect from `www.exptek.com` to `exptek.com` across different hosting platforms.

---

## ✅ What Has Been Configured

### 1. Client-Side Fallback (JavaScript)
**Location:** `/app/frontend/public/index.html`

A JavaScript redirect has been added to `index.html` that runs immediately when the page loads. This provides a client-side fallback for the redirect.

```javascript
if (host.indexOf('www.') === 0) {
    var newHost = host.substring(4);
    window.location.replace(newUrl);
}
```

**Note:** While this works for users, it's not ideal for SEO. Server-side redirects (below) are preferred.

### 2. Server Configuration Files Created

| File | Platform | Location |
|------|----------|----------|
| `_redirects` | Netlify, Render, Cloudflare Pages | `/frontend/public/_redirects` |
| `.htaccess` | Apache | `/frontend/public/.htaccess` |
| `nginx.conf` | Nginx | `/frontend/public/nginx.conf` |
| `vercel.json` | Vercel | `/frontend/vercel.json` |
| `netlify.toml` | Netlify | `/frontend/netlify.toml` |

---

## 🚀 Platform-Specific Setup Instructions

### Option 1: Netlify (Recommended for Easy Setup)

**Step 1: Deploy to Netlify**
```bash
# If not already deployed
netlify deploy --prod
```

**Step 2: Configure Custom Domain**
1. Go to Netlify Dashboard → Site Settings → Domain Management
2. Add custom domain: `exptek.com`
3. Add domain alias: `www.exptek.com`
4. Netlify will automatically handle the redirect using `netlify.toml`

**Step 3: Configure DNS**
```
Type    Name    Value                           TTL
A       @       Netlify's IP (provided)         Auto
CNAME   www     exptek.netlify.app             Auto
```

**Step 4: Enable HTTPS**
- Netlify automatically provisions SSL certificates
- HTTPS will be enabled within minutes

**Verification:**
```bash
curl -I https://www.exptek.com
# Should show: HTTP/1.1 301 Moved Permanently
# Location: https://exptek.com/
```

---

### Option 2: Vercel

**Step 1: Deploy to Vercel**
```bash
# If not already deployed
vercel --prod
```

**Step 2: Add Custom Domain**
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add: `exptek.com`
3. Add: `www.exptek.com`
4. Vercel will use `vercel.json` for redirects

**Step 3: Configure DNS**
```
Type    Name    Value                   TTL
A       @       76.76.21.21            Auto
CNAME   www     cname.vercel-dns.com   Auto
```

**Verification:**
```bash
curl -I https://www.exptek.com
# Should show: 301 redirect to https://exptek.com
```

---

### Option 3: Self-Hosted with Nginx

**Step 1: Copy Nginx Configuration**
```bash
sudo cp /app/frontend/public/nginx.conf /etc/nginx/sites-available/exptek.com
```

**Step 2: Update SSL Certificate Paths**
Edit `/etc/nginx/sites-available/exptek.com`:
```nginx
ssl_certificate /path/to/your/fullchain.pem;
ssl_certificate_key /path/to/your/privkey.pem;
```

**Step 3: Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/exptek.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Step 4: Configure DNS**
```
Type    Name    Value           TTL
A       @       YOUR_SERVER_IP  300
A       www     YOUR_SERVER_IP  300
```

**Step 5: Get SSL Certificate**
```bash
# Using Certbot (Let's Encrypt)
sudo certbot --nginx -d exptek.com -d www.exptek.com

# Certbot will automatically configure SSL in Nginx
```

**Verification:**
```bash
curl -I https://www.exptek.com
curl -I http://www.exptek.com
curl -I http://exptek.com
# All should redirect to https://exptek.com with 301
```

---

### Option 4: Self-Hosted with Apache

**Step 1: Ensure .htaccess is Active**
The `.htaccess` file is already in `/frontend/public/.htaccess`

**Step 2: Enable mod_rewrite**
```bash
sudo a2enmod rewrite
sudo a2enmod ssl
```

**Step 3: Configure Virtual Host**
Edit `/etc/apache2/sites-available/exptek.com.conf`:
```apache
<VirtualHost *:80>
    ServerName exptek.com
    ServerAlias www.exptek.com
    
    DocumentRoot /var/www/exptek/build
    
    <Directory /var/www/exptek/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # .htaccess will handle the redirects
</VirtualHost>
```

**Step 4: Enable Site and Get SSL**
```bash
sudo a2ensite exptek.com
sudo certbot --apache -d exptek.com -d www.exptek.com
sudo systemctl reload apache2
```

**Verification:**
```bash
curl -I https://www.exptek.com
# Should show 301 redirect
```

---

### Option 5: Cloudflare

**Step 1: Add Site to Cloudflare**
1. Go to Cloudflare Dashboard
2. Add Site: `exptek.com`
3. Update nameservers at your domain registrar

**Step 2: Configure DNS**
```
Type    Name    Value           Proxy
A       @       YOUR_IP         Proxied (Orange Cloud)
A       www     YOUR_IP         Proxied (Orange Cloud)
```

**Step 3: Create Page Rule**
1. Go to Rules → Page Rules
2. Create new rule:
   - **URL:** `www.exptek.com/*`
   - **Setting:** Forwarding URL
   - **Status Code:** 301 - Permanent Redirect
   - **Destination:** `https://exptek.com/$1`
3. Save and Deploy

**Step 4: Enable SSL**
1. Go to SSL/TLS → Overview
2. Select "Full (strict)" encryption mode
3. Enable "Always Use HTTPS"

**Verification:**
```bash
curl -I https://www.exptek.com
# Should show 301 redirect at CDN level
```

---

### Option 6: AWS (CloudFront + S3)

**Step 1: Create S3 Bucket for Redirect**
```bash
aws s3 mb s3://www.exptek.com
aws s3 website s3://www.exptek.com --index-document index.html
```

**Step 2: Configure Bucket for Redirect**
In S3 bucket properties, enable Static Website Hosting:
- Redirect requests to: `exptek.com`
- Protocol: `https`

**Step 3: Create CloudFront Distribution**
```bash
# For www subdomain
aws cloudfront create-distribution \
  --origin-domain-name www.exptek.com.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

**Step 4: Configure Route53**
```bash
# Create hosted zone
aws route53 create-hosted-zone --name exptek.com

# Add records
# A record for @ -> CloudFront (main site)
# A record for www -> CloudFront (redirect bucket)
```

---

### Option 7: Google Cloud Platform (Cloud Run)

**Step 1: Deploy to Cloud Run**
```bash
gcloud run deploy exptek \
  --source . \
  --platform managed \
  --region us-central1
```

**Step 2: Map Custom Domains**
```bash
gcloud run domain-mappings create \
  --service exptek \
  --domain exptek.com

gcloud run domain-mappings create \
  --service exptek \
  --domain www.exptek.com
```

**Step 3: Configure Cloud Load Balancer**
Create URL map to redirect www to non-www:
```bash
gcloud compute url-maps import exptek-redirect \
  --source redirect-config.yaml
```

---

## 🧪 Testing the Redirect

### Method 1: Using curl
```bash
# Test www redirect
curl -I https://www.exptek.com

# Expected output:
HTTP/2 301 
location: https://exptek.com/
```

### Method 2: Using curl with verbose output
```bash
curl -Lv https://www.exptek.com

# Look for:
# < HTTP/2 301 
# < location: https://exptek.com/
```

### Method 3: Browser DevTools
1. Open browser DevTools (F12)
2. Go to Network tab
3. Visit `https://www.exptek.com`
4. Check first request - should show 301 redirect
5. URL bar should show `https://exptek.com`

### Method 4: Online Tools
- **Redirect Checker:** https://www.redirect-checker.org/
- **HTTP Status:** https://httpstatus.io/
- **SEO Site Checkup:** https://seositecheckup.com/tools/redirect-check

### Method 5: Google Search Console
After deployment:
1. Add both properties to Search Console
2. Check Coverage report
3. Should see www URLs redirecting to non-www

---

## 📊 DNS Configuration Details

### Required DNS Records

**For most hosting platforms:**
```
Type    Name    Value                   TTL     Priority
A       @       YOUR_IP_OR_CNAME        300     -
A       www     YOUR_IP_OR_CNAME        300     -
```

**For CDN/Cloud platforms:**
```
Type    Name    Value                       TTL     Priority
A       @       CDN_IP                      Auto    -
CNAME   www     your-site.platform.com     Auto    -
```

**For Cloudflare:**
```
Type    Name    Value       Proxy Status
A       @       YOUR_IP     Proxied (Orange)
A       www     YOUR_IP     Proxied (Orange)
```

### DNS Propagation
- Changes take 0-48 hours to propagate globally
- Check propagation: https://www.whatsmydns.net/
- Test from multiple locations

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] `http://www.exptek.com` → redirects to `https://exptek.com`
- [ ] `https://www.exptek.com` → redirects to `https://exptek.com`
- [ ] `http://exptek.com` → redirects to `https://exptek.com`
- [ ] `https://exptek.com` → loads normally (no redirect)
- [ ] Redirect status code is 301 (permanent)
- [ ] SSL certificate covers both domains
- [ ] No redirect loops occur
- [ ] React Router paths work (e.g., `/services`)
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

---

## 🔧 Troubleshooting

### Issue: Redirect Loop
**Cause:** Conflicting redirect rules
**Solution:**
1. Check for multiple redirect rules
2. Ensure only www → non-www exists
3. Remove any non-www → www rules

### Issue: SSL Certificate Error
**Cause:** Certificate doesn't cover www subdomain
**Solution:**
1. Get certificate for both `exptek.com` and `www.exptek.com`
2. Or use wildcard certificate: `*.exptek.com`

### Issue: Redirect Not Working
**Cause:** DNS not configured or not propagated
**Solution:**
1. Check DNS records: `dig www.exptek.com`
2. Wait for propagation (up to 48 hours)
3. Clear browser cache
4. Test with curl (bypasses cache)

### Issue: 404 on Redirected URLs
**Cause:** React Router not configured
**Solution:**
1. Ensure server sends all routes to index.html
2. Check nginx `try_files` directive
3. Verify `.htaccess` rewrite rules

---

## 📈 SEO Impact

### Positive Effects
- ✅ Eliminates duplicate content
- ✅ Consolidates link equity to one domain
- ✅ Improves crawl efficiency
- ✅ Better site authority

### Timeline
- **Immediate:** Redirect works for users
- **1-2 weeks:** Google starts recognizing redirect
- **1-3 months:** Full consolidation in search results

### Google Search Console
After deployment:
1. Verify both domains in Search Console
2. Submit sitemap for `exptek.com`
3. Monitor Coverage report for redirect status
4. Check Core Web Vitals for both versions

---

## 📞 Support

If you encounter issues during deployment:

1. **Check Configuration Files:**
   - `/frontend/public/_redirects`
   - `/frontend/public/.htaccess`
   - `/frontend/public/nginx.conf`
   - `/frontend/vercel.json`
   - `/frontend/netlify.toml`

2. **Test Locally:**
   ```bash
   # Serve build locally and test
   npx serve -s build
   ```

3. **Contact Platform Support:**
   - Netlify: https://www.netlify.com/support/
   - Vercel: https://vercel.com/support
   - Others: Check platform documentation

---

## ✅ Summary

The www to non-www redirect has been configured at multiple levels:

1. **Client-side fallback** in index.html (works immediately)
2. **Platform-specific configs** for Netlify, Vercel, etc.
3. **Server configs** for Nginx and Apache
4. **Documentation** for all major platforms

Choose the deployment method that matches your hosting platform and follow the appropriate section above.
