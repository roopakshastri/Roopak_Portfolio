# Roopak Shastri — Portfolio (Static)

This is a minimal static portfolio site (HTML/CSS/vanilla JS) prepared for the "Introduction to Cyber Security" assignment.

## Files
- `index.html` — main page
- `css/style.css` — styles
- `js/main.js` — interactive behaviour (nav, filters, modal)
- `images/` — placeholder images (desktop.png, mobile.png)
- `implementation_report_template.txt` — one-page template

## How to preview locally (no server required)
1. Extract the ZIP and open `index.html` in your browser (double-click).  
2. For better testing, host with a simple local server (optional):
   - Python 3: `python -m http.server 8000` then open `http://localhost:8000/`

## Deploy (GitHub Pages)
1. Create a new GitHub repository `portfolio-Roopak` (or your preferred name).  
2. Upload all files (Add file → Upload files) and commit.  
3. In repo → Settings → Pages: set Source to `main` branch `/ (root)` and Save.  
4. GitHub Pages URL will be: `https://<your-github-username>.github.io/<repo>/`

## Deploy (Netlify drag & drop)
1. Build folder is the project root (static files).  
2. Go to netlify.com → Sites → Add new site → Deploy manually → drag & drop the project folder.  
3. Netlify provides HTTPS automatically.

## How to verify security features
- **CSP**: Open `index.html` and confirm meta tag with `Content-Security-Policy` in `<head>`.  
- **HTTPS**: After deployment, confirm the site URL starts with `https://` and the browser shows secure padlock.  
- **No secrets**: Check there are no API keys in the code.

## Accessibility checklist
- Keyboard navigation: try Tab to move through links and buttons.  
- ARIA: modal uses `aria-hidden` and the nav toggle has `aria-expanded`.  
- Contrast: background is dark navy, text is white; colors chosen for legibility.

## Acceptance tests
- Open `index.html` locally — nav collapses/expands on mobile, project filter buttons work, project View button opens modal, contact form uses `mailto:` and basic validation, CSP meta tag present.

