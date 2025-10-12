# EMERGENCY FIX: WWW to Non-WWW Redirect Not Working

## 🚨 CRITICAL ISSUE

The www.exptek.com domain is showing the OLD website instead of redirecting to exptek.com. This means:
- Users see outdated content on www version
- Search engines may index duplicate content
- Brand inconsistency between www and non-www versions

---

## 🔍 ROOT CAUSE ANALYSIS

The problem is occurring because www.exptek.com and exptek.com are pointing to DIFFERENT deployments or servers:

### Scenario 1: Two Separate Deployments
- **exptek.com** → Points to NEW updated website (this codebase)
- **www.exptek.com** → Points to OLD website (previous deployment)

### Scenario 2: DNS Misconfiguration
- **exptek.com** → Correct IP/CNAME
- **www.exptek.com** → Different IP/CNAME pointing to old server

### Scenario 3: Hosting Platform Issue
- Two separate projects/deployments on hosting platform
- www subdomain not properly aliased to main domain

---

## ⚡ IMMEDIATE FIX (Choose Based on Your Hosting)

### Option 1: If Using Netlify

**Step 1: Check Domain Settings**
```
1. Go to Netlify Dashboard
2. Select your site
3. Go to Domain Settings → Domain Management
4. Check custom domains list
```

**Step 2: Remove Old www Deployment**
```
1. If you see TWO separate sites (one for www, one for non-www)
2. Delete the www site
3. Keep only the main exptek.com site
```

**Step 3: Add www as Domain Alias**
```
1. In your main exptek.com site
2. Domain Settings → Add domain alias
3. Add: www.exptek.com
4. Netlify will automatically redirect www → non-www
```

**Step 4: Verify netlify.toml is deployed**
```
File: /frontend/netlify.toml
Must include redirect rules (already created in this codebase)
```

---

### Option 2: If Using Vercel

**Step 1: Check Projects**
```
1. Go to Vercel Dashboard
2. Check if you have TWO projects:
   - One for exptek.com
   - One for www.exptek.com
```

**Step 2: Consolidate to One Project**
```
1. Keep the exptek.com project (latest)
2. Delete the www.exptek.com project if it exists
```

**Step 3: Add www Domain to Main Project**
```
1. Go to Project Settings → Domains
2. Add both:
   - exptek.com (primary)
   - www.exptek.com (redirect)
3. Vercel automatically redirects www → non-www
```

**Step 4: Verify vercel.json**
```
File: /frontend/vercel.json
Must include redirect rules (already created in this codebase)
```

---

### Option 3: If Using Cloudflare

**Step 1: Check DNS Records**
```
1. Go to Cloudflare Dashboard → DNS
2. Check both records:
   - A/CNAME for @ (root domain)
   - A/CNAME for www
```

**Step 2: Verify Both Point to Same Server**
```
Current DNS should be:
Type    Name    Value               Proxy
A       @       YOUR_IP             Proxied
A       www     YOUR_IP             Proxied

Or if using CNAME:
Type    Name    Value               Proxy
CNAME   @       target.domain.com   Proxied
CNAME   www     target.domain.com   Proxied
```

**Step 3: Add Page Rule for Redirect**
```
1. Go to Rules → Page Rules
2. Create new rule:
   - URL: www.exptek.com/*
   - Setting: Forwarding URL
   - Status: 301 - Permanent Redirect
   - Destination: https://exptek.com/$1
3. Save and Deploy
```

**Step 4: Purge Cache**
```
1. Go to Caching → Configuration
2. Click "Purge Everything"
3. Confirm purge
4. Wait 5 minutes
```

---

### Option 4: If Self-Hosted (Nginx)

**Step 1: SSH to Your Server**
```bash
ssh user@your-server-ip
```

**Step 2: Check if There Are Two Nginx Configs**
```bash
ls /etc/nginx/sites-enabled/
# Check if there are separate configs for www and non-www
```

**Step 3: Remove Separate www Config (if exists)**
```bash
sudo rm /etc/nginx/sites-enabled/www.exptek.com
```

**Step 4: Update Main Config with Redirect**
```bash
sudo nano /etc/nginx/sites-enabled/exptek.com
```

Add this server block BEFORE the main server block:
```nginx
# WWW to Non-WWW Redirect
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    server_name www.exptek.com;
    
    # SSL certificate (same as main site)
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Redirect all www traffic to non-www
    return 301 https://exptek.com$request_uri;
}
```

**Step 5: Test and Reload**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

### Option 5: If Using Apache

**Step 1: SSH to Server**
```bash
ssh user@your-server-ip
```

**Step 2: Check Virtual Hosts**
```bash
ls /etc/apache2/sites-enabled/
# Check if there are separate configs
```

**Step 3: Update .htaccess**
```bash
cd /var/www/exptek.com/public
nano .htaccess
```

Ensure this is at the TOP:
```apache
RewriteEngine On

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.exptek\.com$ [NC]
RewriteRule ^(.*)$ https://exptek.com/$1 [R=301,L]
```

**Step 4: Restart Apache**
```bash
sudo systemctl restart apache2
```

---

### Option 6: If Using AWS (Route53 + CloudFront)

**Step 1: Check CloudFront Distributions**
```
1. AWS Console → CloudFront
2. Check if there are TWO distributions:
   - One for exptek.com
   - One for www.exptek.com
```

**Step 2: Consolidate to One Distribution**
```
1. Keep the main exptek.com distribution
2. Update Alternate Domain Names (CNAMEs):
   - Add both: exptek.com AND www.exptek.com
3. Delete separate www distribution if it exists
```

**Step 3: Configure S3 Redirect Bucket**
```
1. Create S3 bucket: www.exptek.com
2. Properties → Static Website Hosting
3. Enable redirect:
   - Redirect requests to: exptek.com
   - Protocol: https
```

**Step 4: Update Route53**
```
1. Go to Route53 → Hosted Zones
2. Ensure both records point correctly:
   - @ (root) → Main CloudFront
   - www → Redirect CloudFront (or redirect bucket)
```

---

## 🧪 VERIFICATION STEPS

After implementing the fix, test thoroughly:

### Test 1: Browser Test
```
1. Clear browser cache (Ctrl+Shift+Delete)
2. Visit: https://www.exptek.com
3. URL should immediately change to: https://exptek.com
4. Content should be the NEW website
```

### Test 2: Curl Test
```bash
curl -I https://www.exptek.com

# Expected output:
HTTP/2 301 
location: https://exptek.com/
```

### Test 3: Multiple Paths Test
```bash
curl -I https://www.exptek.com/services
curl -I https://www.exptek.com/about
curl -I https://www.exptek.com/contact

# All should redirect to non-www version with 301
```

### Test 4: Check DNS Propagation
```
Go to: https://www.whatsmydns.net/
Check: www.exptek.com
Ensure: Resolves to correct IP globally
```

### Test 5: SSL Certificate Check
```
Go to: https://www.ssllabs.com/ssltest/
Test: www.exptek.com
Ensure: Certificate covers both domains
```

---

## 🔥 NUCLEAR OPTION (If Nothing Else Works)

If you can't figure out the hosting configuration, create a MINIMAL redirect-only website:

### Step 1: Create Redirect-Only HTML
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0;url=https://exptek.com">
    <script>window.location.replace("https://exptek.com" + window.location.pathname + window.location.search);</script>
</head>
<body>
    <p>Redirecting to <a href="https://exptek.com">exptek.com</a>...</p>
</body>
</html>
```

### Step 2: Deploy ONLY This File to www Subdomain
```
1. Create new deployment ONLY for www.exptek.com
2. Deploy only this single HTML file
3. This ensures ANY visit to www will redirect
```

---

## 📊 COMMON CAUSES & FIXES

| Issue | Cause | Fix |
|-------|-------|-----|
| Different content on www | Two separate deployments | Consolidate to one deployment |
| www shows old site | DNS points to old server | Update DNS to point to new server |
| No redirect happens | Missing redirect rule | Add 301 redirect at server level |
| Redirect not working | Cached old response | Purge CDN cache |
| SSL error on www | Certificate doesn't cover www | Get cert for both domains |

---

## 🆘 EMERGENCY CONTACT CHECKLIST

If you're still stuck, gather this information:

1. **Hosting Platform:** (Netlify/Vercel/AWS/Self-hosted/?)
2. **DNS Provider:** (Cloudflare/Route53/GoDaddy/?)
3. **Current DNS Records:**
   ```bash
   dig exptek.com
   dig www.exptek.com
   ```
4. **What shows on www:** (Screenshot of old site)
5. **What shows on non-www:** (Screenshot of new site)
6. **Deployment URLs:** (If using hosting platform)

---

## ✅ POST-FIX VERIFICATION

After fixing, confirm:

- [ ] https://www.exptek.com redirects to https://exptek.com
- [ ] Redirect is 301 (permanent), not 302
- [ ] All paths redirect correctly (/services, /about, etc.)
- [ ] New website appears on both URLs
- [ ] No SSL certificate errors
- [ ] Google Search Console recognizes redirect
- [ ] No more duplicate content indexed

---

## 🎯 PREVENTION

To prevent this in the future:

1. **Always use one primary domain** (exptek.com)
2. **Add www as alias/redirect**, not separate deployment
3. **Test redirects** before changing DNS
4. **Monitor with uptime service** (UptimeRobot, Pingdom)
5. **Set up alerts** for domain changes

---

## Contact Support

If the above doesn't work, contact your hosting provider support with:
- "I need www.exptek.com to 301 redirect to exptek.com"
- Show them the redirect config files in this codebase
- Request they consolidate to one deployment with www redirect
