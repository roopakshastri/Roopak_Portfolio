# Security Implementation Guide

This document provides detailed information about the security features implemented in this portfolio website and how to verify them.

## 🔒 Security Features Overview

This portfolio implements multiple layers of security following OWASP and industry best practices:

1. **Content Security Policy (CSP)** - Prevents XSS and injection attacks
2. **HTTPS Enforcement** - Encrypted communications
3. **Security Headers** - Additional HTTP security controls
4. **Input Validation** - Client-side form validation
5. **Minimal Dependencies** - Reduced attack surface

---

## 📋 Content Security Policy (CSP)

### CSP Meta Tag (Copy-Paste Ready)

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;">
```

### CSP Directives Explained

| Directive | Value | Purpose |
|-----------|-------|---------|
| `default-src` | `'self'` | Only load resources from same origin by default |
| `script-src` | `'self'` | JavaScript only from same origin (blocks inline scripts) |
| `style-src` | `'self' 'unsafe-inline' https://fonts.googleapis.com` | Styles from self, inline styles (for dynamic CSS), and Google Fonts |
| `font-src` | `'self' https://fonts.gstatic.com` | Fonts from self and Google Fonts CDN |
| `img-src` | `'self' data:` | Images from self and data URIs (base64 encoded) |
| `connect-src` | `'self'` | AJAX/fetch requests only to same origin |
| `frame-ancestors` | `'none'` | Prevent embedding in iframes (anti-clickjacking) |
| `base-uri` | `'self'` | Restrict `<base>` tag usage |
| `form-action` | `'self' mailto:` | Forms can only submit to self or email |

### Why `'unsafe-inline'` for styles?

While `'unsafe-inline'` reduces CSP strictness, it's necessary for:
- Dynamic styling via JavaScript (modal animations, filter effects)
- Inline style attributes in HTML (minimal use in this project)

**Production recommendation**: Move all inline styles to external CSS and remove `'unsafe-inline'`.

### Verifying CSP

**Method 1: Browser Console**
1. Open your deployed site
2. Press F12 to open DevTools
3. Go to Console tab
4. Look for CSP violations (should be none)
5. Any blocked resource will show: "Refused to load ... because it violates the following Content Security Policy directive"

**Method 2: Network Tab**
1. Open DevTools → Network tab
2. Reload page
3. Click on the main document (first request)
4. Check Response Headers for `Content-Security-Policy` header

**Method 3: CSP Evaluator**
- Use Google's CSP Evaluator: https://csp-evaluator.withgoogle.com/
- Paste your CSP and check for issues

---

## 🌐 Netlify Security Headers

### _headers File (Copy-Paste Ready)

Create a file named `_headers` in your project root:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

### Apache .htaccess (For Custom Servers)

```apache
<IfModule mod_headers.c>
    # Content Security Policy
    Header set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;"
    
    # Prevent clickjacking
    Header set X-Frame-Options "DENY"
    
    # Prevent MIME sniffing
    Header set X-Content-Type-Options "nosniff"
    
    # XSS Protection (legacy browsers)
    Header set X-XSS-Protection "1; mode=block"
    
    # Referrer Policy
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    
    # HSTS (HTTPS only)
    Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    
    # Permissions Policy
    Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"
</IfModule>
```

### Nginx Configuration

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;
```

---

## 🔐 HTTPS & HSTS Configuration

### GitHub Pages

HTTPS is **automatic** on GitHub Pages:

1. Go to repository Settings
2. Navigate to Pages section
3. Check "Enforce HTTPS" checkbox
4. GitHub automatically provisions SSL certificate via Let's Encrypt

**Verification:**
- URL should begin with `https://`
- Click padlock icon in browser → "Connection is secure"
- Certificate issued by: Let's Encrypt Authority X3

### Netlify

HTTPS is **enabled by default**:

1. Netlify automatically provisions SSL certificate on first deploy
2. HTTP requests automatically redirect to HTTPS
3. HSTS header added via `_headers` file

**Custom Domain:**
- Add custom domain in Netlify dashboard
- Netlify provisions SSL automatically (usually within 1 minute)
- DNS propagation may take 24-48 hours

### Cloudflare (Additional Layer)

For enhanced security and performance:

1. Sign up for Cloudflare (free tier)
2. Add your domain
3. Update nameservers at domain registrar
4. Enable "Always Use HTTPS" in SSL/TLS settings
5. Set SSL/TLS encryption mode to "Full (strict)"
6. Enable HSTS in SSL/TLS → Edge Certificates
   - Max Age: 12 months
   - Include subdomains: Yes
   - Preload: Yes (optional)

### HSTS Preload (Advanced)

To get your domain on the HSTS preload list:

1. Visit https://hstspreload.org/
2. Enter your domain
3. Check eligibility
4. Submit for inclusion
5. Add `preload` directive to HSTS header:
   ```
   Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
   ```

**Warning:** HSTS preload is permanent and difficult to reverse. Only submit if you're certain your site will always use HTTPS.

---

## ✅ Security Verification Checklist

### 1. Test HTTPS

```bash
# Check certificate
curl -I https://yourdomain.com | grep -i strict-transport-security

# Expected output:
# strict-transport-security: max-age=63072000; includeSubDomains; preload
```

**Browser test:**
- [ ] URL starts with `https://`
- [ ] Padlock icon visible in address bar
- [ ] No "Not Secure" warnings
- [ ] Certificate valid and not expired

### 2. Test Security Headers

**Online tools:**
- https://securityheaders.com (target: A or A+ grade)
- https://observatory.mozilla.org (target: A or A+ grade)

**Command line:**
```bash
curl -I https://yourdomain.com

# Look for these headers:
# Content-Security-Policy
# X-Frame-Options
# X-Content-Type-Options
# Strict-Transport-Security
# Referrer-Policy
```

### 3. Test CSP

**Browser DevTools:**
1. Open site with DevTools open (F12)
2. Go to Console tab
3. Reload page
4. Check for CSP violations (should be zero)
5. Try injecting script in console: `document.body.innerHTML = '<script>alert("XSS")</script>'`
6. CSP should block execution

**CSP Tester:**
- https://csp-evaluator.withgoogle.com/

### 4. SSL/TLS Test

**SSL Labs:**
- https://www.ssllabs.com/ssltest/
- Enter your domain
- Target grade: A or A+

**Check for:**
- [ ] TLS 1.2 or 1.3 enabled
- [ ] TLS 1.0 and 1.1 disabled
- [ ] Strong cipher suites
- [ ] No vulnerabilities (Heartbleed, POODLE, etc.)

### 5. Accessibility + Security

Run Lighthouse audit:
1. Open Chrome DevTools
2. Click "Lighthouse" tab
3. Check all categories
4. Click "Generate report"

**Target scores:**
- Performance: >90
- Accessibility: 100
- Best Practices: 100
- SEO: >90

---

## 🛡️ Form Security

### Current Implementation

The contact form uses **client-side validation only**:

```javascript
// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input sanitization via HTML5 input types
<input type="email" required>
```

### Security Notes

⚠️ **Current limitations:**
- Client-side validation can be bypassed
- No server-side processing
- Uses `mailto:` which requires email client
- No CSRF protection (not needed for mailto)
- No rate limiting

### Production Recommendations

**Option 1: Server-side endpoint**

```javascript
// Replace mailto with API endpoint
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken
  },
  body: JSON.stringify({
    name: sanitize(name),
    email: sanitize(email),
    message: sanitize(message)
  })
});
```

**Server-side validation (Node.js example):**

```javascript
const validator = require('validator');
const sanitizeHtml = require('sanitize-html');

// Validate
if (!validator.isEmail(email)) {
  return res.status(400).json({ error: 'Invalid email' });
}

// Sanitize
const cleanMessage = sanitizeHtml(message, {
  allowedTags: [],
  allowedAttributes: {}
});

// Rate limit (express-rate-limit)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requests per window
});
```

**Option 2: Third-party service**

- **Formspree**: https://formspree.io (free tier: 50/month)
- **Netlify Forms**: Built into Netlify hosting
- **EmailJS**: https://www.emailjs.com (free tier: 200/month)

### Where to Store Secrets

**Never store in frontend:**
- ❌ API keys in JavaScript
- ❌ Database credentials
- ❌ Email passwords
- ❌ Private keys

**Proper secret storage:**
- ✅ Environment variables on server
- ✅ GitHub Secrets (for CI/CD)
- ✅ Netlify Environment Variables
- ✅ AWS Secrets Manager / Azure Key Vault

**Example (Netlify):**
1. Go to Site Settings → Build & Deploy → Environment
2. Add variable: `SENDGRID_API_KEY=your_key_here`
3. Access in serverless function:
   ```javascript
   const apiKey = process.env.SENDGRID_API_KEY;
   ```

---

## 🔍 Penetration Testing

### Safe Testing on Your Own Site

**Allowed:**
- ✅ SQL injection testing on your own forms
- ✅ XSS testing in your own inputs
- ✅ CSP bypass attempts
- ✅ CSRF testing
- ✅ Authentication bypass attempts

**Tools:**
- Burp Suite Community Edition
- OWASP ZAP
- Browser DevTools

### Automated Scanners

**Free tools:**
```bash
# Nikto web scanner
nikto -h https://yourdomain.com

# OWASP ZAP baseline scan
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://yourdomain.com

# Nuclei vulnerability scanner
nuclei -u https://yourdomain.com
```

**Responsible disclosure:**
- Never test sites you don't own
- Get written permission before testing
- Report vulnerabilities to site owners
- Follow responsible disclosure timelines

---

## 📚 Security Resources

### Standards & Guidelines

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **OWASP ASVS**: https://owasp.org/www-project-application-security-verification-standard/
- **NIST Cybersecurity Framework**: https://www.nist.gov/cyberframework
- **CIS Controls**: https://www.cisecurity.org/controls/

### Testing Tools

- **SecurityHeaders.com**: https://securityheaders.com
- **Mozilla Observatory**: https://observatory.mozilla.org
- **SSL Labs**: https://www.ssllabs.com/ssltest/
- **CSP Evaluator**: https://csp-evaluator.withgoogle.com/
- **OWASP ZAP**: https://www.zaproxy.org/

### Learning Resources

- **PortSwigger Web Security Academy**: https://portswigger.net/web-security (free)
- **OWASP Juice Shop**: https://owasp.org/www-project-juice-shop/ (practice app)
- **HackTheBox**: https://www.hackthebox.com/ (hands-on labs)
- **TryHackMe**: https://tryhackme.com/ (beginner-friendly)

---

## 🚨 Security Incident Response

If you discover a vulnerability:

1. **Assess severity** (CVSS scoring)
2. **Contain the issue** (take site offline if critical)
3. **Fix the vulnerability**
4. **Test the fix**
5. **Redeploy** (git commit + push)
6. **Document** (post-mortem)
7. **Notify users** (if data breach)

### Example Git Workflow

```bash
# Create security patch branch
git checkout -b security/fix-xss-vulnerability

# Make fix
# Edit files...

# Commit with clear message
git commit -m "security: Fix XSS vulnerability in contact form

- Added input sanitization
- Implemented CSP nonce for inline scripts
- Updated validation regex

References: CVE-XXXX-XXXXX"

# Push and merge immediately
git push origin security/fix-xss-vulnerability
# Merge to main and deploy ASAP
```

---

## 📞 Reporting Security Issues

If you find a security vulnerability in this template:

**Do:**
- ✅ Report privately via GitHub Security Advisories
- ✅ Provide detailed reproduction steps
- ✅ Include severity assessment
- ✅ Allow reasonable time for fix (90 days)

**Don't:**
- ❌ Publicly disclose before fix
- ❌ Exploit the vulnerability
- ❌ Test on other people's deployed sites

---

## 🎓 Educational Use Statement

This portfolio template is designed for **educational and professional purposes**:

- ✅ Demonstrates secure coding practices
- ✅ Shows defense-in-depth approach
- ✅ Implements industry-standard security headers
- ❌ Not designed for PII collection or sensitive data
- ❌ Not suitable for e-commerce or financial applications
- ❌ Not audited by third-party security firm

**For production use with sensitive data:**
- Conduct professional security audit
- Implement server-side validation
- Add WAF (Web Application Firewall)
- Set up monitoring and alerting
- Obtain appropriate certifications (SOC 2, ISO 27001)

---

## ✨ Security Best Practices Summary

1. **Always use HTTPS** - No exceptions
2. **Implement CSP** - Defense against XSS
3. **Validate server-side** - Never trust client input
4. **Keep dependencies updated** - Minimize attack surface
5. **Use security headers** - Defense-in-depth
6. **Test regularly** - Automated scans + manual testing
7. **Monitor continuously** - Detect incidents early
8. **Document everything** - Facilitate audits and response

---

**Last updated:** November 2025  
**Security contact:** See LICENSE file for repository owner
