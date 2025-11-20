DOCUMENTATION SCREENSHOTS FOLDER
=================================

This folder should contain demonstration screenshots for your README.md,
implementation report, and project documentation.

RECOMMENDED SCREENSHOTS:
------------------------

1. homepage-demo.png
   - Full homepage view showing hero section and navigation
   - Recommended size: 1920x1080px (full desktop screenshot)
   - Shows: Header, hero section, beginning of projects section
   - Purpose: README.md header image, documentation

2. projects-demo.png
   - Projects section with filter active
   - Recommended size: 1920x1080px or 1200x800px
   - Shows: Project cards, filter buttons, one project selected
   - Purpose: Demonstrate interactive features

OPTIONAL ADDITIONAL SCREENSHOTS:
---------------------------------

3. mobile-demo.png
   - Mobile view with hamburger menu open
   - Recommended size: 375x667px (iPhone) or 360x800px
   - Shows: Responsive design on mobile devices

4. modal-demo.png
   - Project modal dialog open
   - Shows: Detailed project information overlay

5. contact-demo.png
   - Contact form section
   - Shows: Form validation in action

6. lighthouse-score.png
   - Lighthouse performance report
   - Shows: Scores for Performance, Accessibility, Best Practices, SEO

7. security-headers.png
   - SecurityHeaders.com grade
   - Shows: A+ rating for security headers

HOW TO CAPTURE:
---------------

METHOD 1: Browser DevTools (Recommended)
1. Open your deployed site in Chrome/Edge
2. Press F12 to open DevTools
3. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
4. Type "screenshot"
5. Select "Capture full size screenshot"
6. Save to this folder

METHOD 2: Browser Extensions
- Awesome Screenshot (Chrome/Firefox)
- Nimbus Screenshot (Chrome/Firefox)
- Full Page Screen Capture (Chrome)

METHOD 3: Desktop Tools
- Snagit (Windows/Mac) - scrolling capture
- Greenshot (Windows)
- macOS Screenshot (Cmd+Shift+4)

USAGE IN README:
----------------

Add screenshots to your README.md like this:

```markdown
## Screenshots

### Homepage
![Homepage](docs/screenshots/homepage-demo.png)

### Projects Section
![Projects](docs/screenshots/projects-demo.png)

### Mobile View
![Mobile](docs/screenshots/mobile-demo.png)
```

GITHUB DISPLAY:
---------------
Screenshots in this docs/ folder will be accessible via GitHub
and will display in your README when viewed on GitHub.

Example URL format:
https://github.com/USERNAME/REPO/blob/main/docs/screenshots/homepage-demo.png

FILE NAMING:
------------
Use descriptive, lowercase names with hyphens:
✓ homepage-demo.png
✓ projects-section.png
✓ security-headers-score.png

✗ Screenshot1.png
✗ IMG_001.png
✗ demo screenshot.png (spaces)

COMPRESSION:
------------
Compress screenshots to reduce repository size:
- Target: <300KB per screenshot
- Tools: TinyPNG, ImageOptim, Squoosh
- Format: PNG for UI screenshots (better text clarity)

DEMO SCRIPT SCREENSHOTS:
------------------------

Screenshot 1: "Welcome to the Portfolio"
- Capture: Full homepage with hero section
- Duration reference: 0-5 seconds of demo
- Shows: Name, tagline, call-to-action buttons

Screenshot 2: "Interactive Project Filter"
- Capture: Projects section with filter active
- Duration reference: 10-15 seconds of demo  
- Shows: Filter buttons highlighted, projects filtered

CURRENT STATE:
--------------
This folder is currently empty. Add your screenshots after deploying
the site and testing all features.

CHECKLIST BEFORE SUBMISSION:
-----------------------------
[ ] homepage-demo.png added
[ ] projects-demo.png added
[ ] Screenshots compressed (<300KB each)
[ ] Screenshots referenced in README.md
[ ] Screenshots show actual deployed site (not localhost)
[ ] Screenshots are clear and high-quality
[ ] No sensitive information visible in screenshots
