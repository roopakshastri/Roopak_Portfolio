# Netlify Security Headers Configuration
# Place this file in the root of your project to enable HTTP security headers
# These headers are automatically applied by Netlify on all pages

/*
  # Content Security Policy - Restricts resource loading
  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;
  
  # Prevent clickjacking attacks
  X-Frame-Options: DENY
  
  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff
  
  # Control referrer information
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Disable browser features that could be exploited
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=()
  
  # Enforce HTTPS for 1 year (including subdomains)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  
  # Prevent XSS attacks (legacy, but still useful)
  X-XSS-Protection: 1; mode=block

# Cache static assets for better performance
/css/*
  Cache-Control: public, max-age=31536000, immutable

/js/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable
