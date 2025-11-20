# Quick Start Guide

Get your cybersecurity portfolio live in **under 15 minutes**. This guide covers the absolute essentials to go from download to deployed.

## ⚡ 5-Minute Local Setup

### Step 1: Download & Extract (1 minute)

Download this folder to your computer and extract it to a location like:
- Windows: `C:\Users\YourName\Documents\portfolio-yourname\`
- Mac/Linux: `~/Documents/portfolio-yourname/`

### Step 2: Customize Essential Info (3 minutes)

Open `index.html` in a text editor (VS Code, Sublime Text, Notepad++) and replace:

1. **Your Name** (Find & Replace All):
   - Find: `REPLACE_NAME`
   - Replace: `Your Full Name`

2. **Your Email** (Find & Replace All):
   - Find: `REPLACE_EMAIL`
   - Replace: `your.email@example.com`

3. **Social Media** (Find each one individually):
   - Find: `REPLACE_LINKEDIN` → Replace: `your-linkedin-username`
   - Find: `REPLACE_GITHUB` → Replace: `your-github-username`
   - Find: `REPLACE_TWITTER` → Replace: `your-twitter-handle`

4. **Certification Years** (Find & Replace):
   - Find: `REPLACE_YEAR` → Replace: `2024` (or your actual year)

**💡 Pro Tip:** Use Find & Replace (Ctrl+H or Cmd+H) to do all replacements at once.

### Step 3: Test Locally (1 minute)

**Option A - Direct:** Just double-click `index.html` to open in your browser

**Option B - Local Server (recommended):**
```bash
# If you have Python installed:
python -m http.server 8000

# Then open browser to:
http://localhost:8000
```

**✅ What to check:**
- [ ] Your name appears in header
- [ ] Navigation links scroll to sections
- [ ] Project filter buttons work
- [ ] Click a project card to open modal
- [ ] Modal closes with X button or Esc key

---

## 🚀 10-Minute GitHub Pages Deployment

### Step 1: Create GitHub Account (if needed)

1. Go to https://github.com/signup
2. Follow signup process
3. Verify your email

### Step 2: Create New Repository

1. Click "+" icon (top-right) → "New repository"
2. Settings:
   - **Name:** `portfolio` (or `your-name-portfolio`)
   - **Visibility:** Public (required for free GitHub Pages)
   - **Initialize:** Leave all checkboxes unchecked
3. Click "Create repository"

### Step 3: Upload Your Files

**Via Web Interface (Easiest):**

1. On your new repository page, click "uploading an existing file"
2. Drag ALL files and folders from your portfolio folder
3. Add commit message: "Initial portfolio commit"
4. Click "Commit changes"

**Via Command Line (Alternative):**

```bash
# Open terminal in your portfolio folder
cd path/to/portfolio-yourname

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository **Settings** (gear icon)
2. Click **Pages** in left sidebar
3. Under "Source":
   - **Branch:** main
   - **Folder:** / (root)
4. Click **Save**
5. Wait 1-2 minutes

### Step 5: Get Your Live URL

After ~2 minutes, refresh the Pages settings page. You'll see:

```
✅ Your site is live at https://USERNAME.github.io/REPO/
```

**Click the link** to see your live portfolio!

### Step 6: Enable HTTPS

In the same Pages settings:
- [x] Check "Enforce HTTPS"
- Wait 1-2 minutes for SSL certificate

### Step 7: Update Site URL

Now that you know your live URL, update it in your portfolio:

1. Edit `index.html` on GitHub (click the file, then pencil icon)
2. Find & Replace: `REPLACE_SITE_URL` → `https://USERNAME.github.io/REPO`
3. Scroll down and click "Commit changes"
4. Wait 1 minute for redeployment

---

## 🎯 Next Steps (Do Later)

### Immediate Priorities

1. **Add Your Images:**
   - Replace `images/desktop.png` with your project screenshots
   - Replace `images/mobile.png` with mobile screenshots
   - Compress images to <200KB each

2. **Customize Projects:**
   - Edit project titles and descriptions in `index.html`
   - Update technology tags to match your projects
   - Update project details in `js/main.js`

3. **Personalize Content:**
   - Update skills in the Skills section
   - Modify blog posts or write your own
   - Adjust certifications to match yours

4. **Add Favicon:**
   - Create a favicon at https://favicon.io
   - Replace `favicon.ico` in root folder

### Within 24 Hours

1. **Take Screenshots:**
   - Capture homepage for `docs/screenshots/homepage-demo.png`
   - Capture projects section for `docs/screenshots/projects-demo.png`

2. **Verify Security:**
   - Test at https://securityheaders.com (target: A grade)
   - Test at https://www.ssllabs.com/ssltest/ (target: A grade)
   - Check HTTPS padlock in browser

3. **Test Everything:**
   - Test on mobile phone
   - Try keyboard navigation (Tab key)
   - Validate HTML at https://validator.w3.org
   - Run Lighthouse audit (DevTools → Lighthouse)

### Within 1 Week

1. **Create Real Projects:**
   - Add links to your actual GitHub projects
   - Create live demos if applicable
   - Update project descriptions with real details

2. **Write Blog Posts:**
   - Replace placeholder blog content
   - Write 2-3 security-related articles
   - Share on LinkedIn/Twitter

3. **Optimize SEO:**
   - Add more descriptive meta descriptions
   - Create rich Open Graph images
   - Submit to Google Search Console

4. **Share Your Portfolio:**
   - Add to LinkedIn profile
   - Include in resume
   - Share with cybersecurity community

---

## 📝 Common Customizations

### Change Color Scheme

Edit `css/style.css`, lines 11-16:

```css
:root {
    --color-primary: #0a192f;      /* Dark navy background */
    --color-secondary: #112240;     /* Secondary background */
    --color-accent: #00d9ff;        /* Cyan accent - CHANGE THIS */
    --color-text-primary: #e6f1ff;  /* Light text */
    --color-text-secondary: #8892b0; /* Muted text */
}
```

**Popular alternatives:**
- Green: `#00ff41` (Matrix style)
- Purple: `#bd93f9` (Dracula theme)
- Orange: `#ff6e40` (Material orange)

### Add a 4th Project

1. In `index.html`, duplicate a `<article class="project-card">` block
2. Update the title, description, tags, and `data-category`
3. In `js/main.js`, add entry to `projectData` object:

```javascript
'Your New Project Title': {
    image: 'images/new-project.png',
    description: 'Project description...',
    tags: ['Tag1', 'Tag2'],
    techDetails: `<ul><li>Detail 1</li></ul>`,
    security: `<ul><li>Security note 1</li></ul>`
}
```

### Remove PGP Section (If You Don't Have a Key)

In `index.html`, find and delete lines ~338-344:

```html
<!-- DELETE THIS SECTION if you don't have PGP key -->
<div class="pgp-info">
    <h4>PGP Public Key</h4>
    <p>For encrypted communications:</p>
    <code class="pgp-fingerprint">REPLACE_PGP_FINGERPRINT</code>
    <a href="#" class="btn-link">Download Public Key</a>
</div>
```

### Add Google Analytics (Optional)

**Privacy note:** Only add analytics if needed. Cybersecurity professionals should be privacy-conscious.

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your tracking ID from Google Analytics.

**Update CSP:** Add to `script-src`:
```
script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
```

---

## 🐛 Troubleshooting

### Images Not Showing

**Problem:** Placeholder images appear as broken icons

**Solutions:**
1. Verify images exist: `images/desktop.png` and `images/mobile.png`
2. Check file names match exactly (case-sensitive on Linux/Mac)
3. Ensure images are committed to GitHub repository
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Styles Not Loading

**Problem:** Page appears unstyled (plain HTML)

**Solutions:**
1. Check `css/style.css` exists in repository
2. Verify folder structure: `/css/style.css` not `/style.css`
3. Check for typos in `<link>` tag in index.html
4. Clear browser cache

### JavaScript Not Working

**Problem:** Filter buttons don't work, modal doesn't open

**Solutions:**
1. Open browser DevTools (F12) → Console tab
2. Look for error messages (red text)
3. Verify `js/main.js` exists in repository
4. Check for syntax errors in main.js
5. Ensure `<script src="js/main.js"></script>` is before `</body>`

### GitHub Pages 404 Error

**Problem:** Site shows "404 - Page not found"

**Solutions:**
1. Wait 5-10 minutes after enabling Pages
2. Verify `index.html` exists in repository root (not in subfolder)
3. Check Pages settings show "Your site is live" message
4. Try accessing with trailing slash: `https://username.github.io/repo/`
5. Check repository is Public (not Private)

### HTTPS Not Working

**Problem:** Browser shows "Not Secure" warning

**Solutions:**
1. Enable "Enforce HTTPS" in Pages settings
2. Wait 5-10 minutes for SSL certificate provisioning
3. Access site with `https://` (not `http://`)
4. Check for mixed content (DevTools → Console)

### Form Not Sending

**Problem:** Contact form doesn't send email

**This is expected!** The form uses `mailto:` which:
- Requires an email client installed (Outlook, Mail app)
- May not work on mobile devices
- Is blocked by some browsers

**Solutions:**
1. Update `REPLACE_EMAIL` in `index.html` and `js/main.js`
2. For production, use Netlify Forms or Formspree
3. Or implement server-side endpoint

---

## 💡 Pro Tips

1. **Use Git Branches for Experiments:**
   ```bash
   git checkout -b feature/new-design
   # Make changes
   git checkout main  # Return to main if you don't like changes
   ```

2. **Preview Changes Locally First:**
   - Always test in local browser before pushing to GitHub
   - Saves time vs. waiting for GitHub Pages redeploy

3. **Keep Commit Messages Clear:**
   ```bash
   git commit -m "Update project descriptions with real content"
   git commit -m "Add screenshots for all projects"
   git commit -m "Fix mobile navigation menu styling"
   ```

4. **Back Up Your Work:**
   - GitHub is your backup
   - Additionally, zip your folder periodically
   - Consider private repository for drafts

5. **Optimize Images Before Upload:**
   - Use https://tinypng.com to compress
   - Target <200KB per screenshot
   - Keeps page load fast

---

## 📚 Essential Resources

### Learning
- **HTML/CSS/JS:** https://developer.mozilla.org/
- **Git Tutorial:** https://try.github.io/
- **GitHub Pages Docs:** https://docs.github.com/en/pages

### Testing
- **HTML Validator:** https://validator.w3.org/
- **Security Headers:** https://securityheaders.com/
- **SSL Test:** https://www.ssllabs.com/ssltest/
- **Lighthouse:** Built into Chrome DevTools

### Tools
- **VS Code:** https://code.visualstudio.com/ (code editor)
- **GitHub Desktop:** https://desktop.github.com/ (Git GUI)
- **TinyPNG:** https://tinypng.com/ (image compression)
- **Favicon Generator:** https://favicon.io/

---

## ✅ Launch Checklist

Before sharing your portfolio:

**Content:**
- [ ] Name, email, social links updated
- [ ] Projects reflect your actual work
- [ ] Skills match your expertise
- [ ] Blog posts (if keeping them) are relevant
- [ ] Certifications are accurate

**Visual:**
- [ ] Images replaced with real screenshots
- [ ] Favicon updated (optional but recommended)
- [ ] Color scheme matches your brand (optional)
- [ ] Tested on mobile phone

**Technical:**
- [ ] Site loads via HTTPS
- [ ] No console errors (F12 → Console)
- [ ] All links work
- [ ] Form validation works
- [ ] Keyboard navigation functional

**Security:**
- [ ] HTTPS enforced
- [ ] Security headers verified (securityheaders.com)
- [ ] No sensitive data in code
- [ ] CSP header present

**SEO:**
- [ ] Site URL updated in meta tags
- [ ] Descriptive title and meta description
- [ ] Open Graph image set

**Professional:**
- [ ] No placeholder text (REPLACE_*)
- [ ] No broken links
- [ ] No spelling/grammar errors
- [ ] Professional email address used

---

## 🚀 You're Done!

Your portfolio is now live at:
```
https://your-username.github.io/your-repo/
```

**Next steps:**
1. Add URL to your resume
2. Update LinkedIn profile with portfolio link
3. Share with cybersecurity community
4. Keep updating with new projects

**Need more help?**
- Read `README.md` for comprehensive documentation
- Check `deploy-instructions.txt` for detailed deployment steps
- Review `sample-input-output.txt` for customization examples

---

**Built with security in mind. Now go showcase your skills! 🔐**
