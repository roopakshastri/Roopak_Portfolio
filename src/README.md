# Cybersecurity Portfolio - REPLACE_NAME

A minimal, professional portfolio website showcasing cybersecurity projects, skills, certifications, and blog posts. Built with pure HTML, CSS, and vanilla JavaScript—no build tools or frameworks required.

---

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Replace all placeholders** (see `sample-input-output.txt`)
3. **Add your images** to the `images/` folder
4. **Open `index.html`** in a browser to preview locally
5. **Deploy** to GitHub Pages or Netlify (see instructions below)

---

## 📁 Project Structure

```
portfolio-REPLACE_NAME/
├── index.html                  # Main HTML file
├── css/
│   └── style.css              # All styles (mobile-first, responsive)
├── js/
│   └── main.js                # Vanilla JavaScript for interactivity
├── images/
│   ├── desktop.png            # Placeholder project screenshot (desktop)
│   └── mobile.png             # Placeholder project screenshot (mobile)
├── README.md                  # This file
├── deploy-instructions.txt    # Step-by-step deployment commands
├── implementation_report_template.txt  # Academic report template
├── sample-input-output.txt    # Content replacement guide
└── LICENSE                    # MIT License
```

---

## ✅ Features

### Sections
- **Home**: Introduction with name, title, and bio
- **Projects**: 3 sample projects with tag filtering and modal detail view
- **Skills**: Categorized technical skills (Penetration Testing, Tools, Programming, Concepts)
- **Certifications**: 3 sample certifications with issuer and date
- **Blog**: 2 educational posts (~120-150 words each) on phishing and payload mitigation
- **Contact**: Form with front-end validation and mailto: fallback

### Interactivity (Vanilla JavaScript)
- **Mobile hamburger menu** (toggle navigation)
- **Project tag filter** (All, Penetration Testing, Network Security, Web App Security)
- **Project detail modal** (click "View Details" to open, close with button/Escape/background click)
- **Contact form validation** (name, email, message) with mailto: link generation
- **Smooth scrolling** for anchor links
- **Active nav link highlighting** on scroll

### Accessibility
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA attributes (`aria-label`, `aria-expanded`, `aria-modal`, `aria-invalid`)
- Keyboard navigation support (focus states, Escape key to close modal)
- Color contrast meets WCAG AA standards
- Responsive typography and mobile-first design
- Support for `prefers-reduced-motion` and `prefers-contrast: high`

### Security
- **Content Security Policy (CSP)** meta tag in `<head>` restricting scripts, styles, and resources
- **HTTPS enforcement** notes in deployment instructions
- **No external dependencies** except Google Fonts (whitelisted in CSP)
- **No credential capture** or malicious scripts (educational demo only)

---

## 🛠️ Deployment

### Option 1: GitHub Pages

1. Create a new GitHub repository named `portfolio` (or any name)
2. Push this folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/REPLACE_USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings** → **Pages** → **Source**: `main` branch, `/` (root)
4. Save and wait ~1 minute
5. Visit `https://REPLACE_USERNAME.github.io/portfolio/`

### Option 2: Netlify

**Drag & Drop (easiest):**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio-REPLACE_NAME/` folder
3. Netlify auto-deploys and gives you a URL (e.g., `https://random-name.netlify.app`)

**CLI (recommended for headers):**
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify deploy --prod` from the project folder
3. Follow prompts (create new site or link existing)
4. Deployment URL will be shown

**For CSP headers on Netlify**, create a `_headers` file in the project root:
```
/*
  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

See `deploy-instructions.txt` for complete commands.

---

## 🔒 How to Verify Security Features

1. **CSP Meta Tag**: Open `index.html` → View Source → Check `<meta http-equiv="Content-Security-Policy" ...>` is present in `<head>`
2. **HTTPS**: After deployment, ensure URL starts with `https://` (GitHub Pages and Netlify enforce HTTPS automatically)
3. **Security Headers** (Netlify only): Use [securityheaders.com](https://securityheaders.com) to scan your deployed URL
4. **No External Scripts**: Verify no `<script src="https://...">` tags except for inline JavaScript in `js/main.js`
5. **No Secrets in Code**: Search for API keys, passwords, or tokens in all files (none should exist)

---

## ♿ Accessibility Checklist

- [ ] All images have `alt` attributes
- [ ] Form inputs have associated `<label>` elements
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Color contrast ratio ≥ 4.5:1 (text vs. background)
- [ ] Headings follow logical hierarchy (h1 → h2 → h3)
- [ ] ARIA labels on interactive elements (hamburger, modal)
- [ ] Focus indicators visible on all interactive elements
- [ ] Responsive design works on mobile (320px+) and desktop (1920px+)
- [ ] No autoplay audio/video
- [ ] Tested with screen reader (e.g., NVDA, VoiceOver)

---

## 🧪 Acceptance Tests

Open `index.html` locally in a browser and verify:

1. **Mobile Nav**: Resize to <768px → hamburger appears → click to expand/collapse menu
2. **Project Filter**: Click "Penetration Testing" → only matching projects show → click "All" → all projects reappear
3. **Project Modal**: Click "View Details" on any project → modal opens with full description → close with ✕, Escape, or background click
4. **Contact Form**: Submit empty form → validation errors appear → fill correctly → opens email client (or shows mailto link)
5. **CSP**: View page source → `<meta http-equiv="Content-Security-Policy" ...>` exists
6. **Responsive**: Test on desktop (1920px), tablet (768px), mobile (375px) → layout adapts correctly
7. **Accessibility**: Tab through page → all links/buttons focusable and highlighted

---

## 📝 Customization Guide

Replace all `REPLACE_*` placeholders in `index.html` and `js/main.js` with your personal details. See `sample-input-output.txt` for a complete list.

**Key files to edit:**
- `index.html`: Replace name, bio, project titles/descriptions, certifications, blog dates
- `js/main.js`: Update project data (titles, descriptions, links)
- `images/`: Add your own project screenshots (keep ≤200KB each)

---

## 🛡️ Security Notes

- **HTTPS Only**: Never deploy to HTTP. GitHub Pages and Netlify enforce HTTPS automatically.
- **No Client-Side Secrets**: Never store API keys, passwords, or tokens in HTML/CSS/JS.
- **CSP Enforcement**: The CSP meta tag blocks inline scripts and external resources (except whitelisted domains).
- **Educational Use**: This portfolio is for demonstration purposes. Do not include real vulnerability exploits or malicious code.

---

## 📄 License

MIT License - see `LICENSE` file for details.

---

## 🤝 Support

For questions about cybersecurity topics discussed in this portfolio, refer to:
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [SANS Cyber Security Resources](https://www.sans.org/security-resources/)

---

**Built by REPLACE_NAME** | [GitHub](https://github.com/REPLACE_USERNAME) | [Email](mailto:REPLACE_EMAIL)
