# Netlify Security Headers Configuration
# This file is automatically processed by Netlify to set HTTP response headers
# for enhanced security. For other hosting platforms, configure these headers
# in your server configuration (.htaccess, nginx.conf, etc.)

/*
  # Content Security Policy
  # Prevents XSS attacks and unauthorized resource loading
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;
  
  # Prevent clickjacking attacks
  X-Frame-Options: DENY
  
  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff
  
  # Enable XSS protection in older browsers
  X-XSS-Protection: 1; mode=block
  
  # Control referrer information
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Enforce HTTPS (HSTS)
  # max-age: 2 years in seconds
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  
  # Disable unnecessary browser features
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  
  # Cache control for static assets
  Cache-Control: public, max-age=31536000, immutable

# Specific headers for HTML files
/*.html
  # Shorter cache for HTML to allow updates
  Cache-Control: public, max-age=0, must-revalidate

# Headers for CSS files
/css/*
  Cache-Control: public, max-age=31536000, immutable

# Headers for JavaScript files  
/js/*
  Cache-Control: public, max-age=31536000, immutable

# Headers for images
/images/*
  Cache-Control: public, max-age=31536000, immutable
