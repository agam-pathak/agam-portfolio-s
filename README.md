# Agam Pathak Portfolio

Clean static portfolio built with plain HTML, CSS, and JavaScript.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
agam-portfolio's/
├─ index.html
├─ style.css
├─ script.js
├─ resume.pdf
├─ favicon.svg
├─ og-image.svg
├─ robots.txt
├─ site.webmanifest
├─ .nojekyll
├─ profile-optimized.jpg
├─ assets/
│  └─ screenshots/
│     ├─ rahi-planner-desktop.jpg
│     ├─ rahi-chat-mobile.jpg
│     ├─ sarthi-dashboard-desktop.png
│     └─ sarthi-dashboard-mobile.png
├─ case-studies/
│  ├─ rahi-ai.html
│  └─ sarthisync.html
└─ projects/
   └─ sarthisync.html
```

## Environment Structure

No runtime `.env` file is required for this portfolio.

- Build step: none
- Server requirement: none (static site)
- Required environment variables: none

Only third-party endpoint used:

- Contact form POST: `https://formsubmit.co/ajax/agamworkspace@gmail.com`  
  If needed, update this URL in `index.html`.

## Local Preview

Option 1:

- Open `index.html` directly in a browser.

Option 2 (recommended):

```bash
npx serve .
```

or

```bash
npx http-server .
```

## Deploy On Vercel

Project settings:

- Framework Preset: `Other`
- Root Directory: `agam-portfolio's`
- Build Command: empty
- Output Directory: empty
- Install Command: empty

This is a static deployment; Vercel will serve files directly.

## Live Links

- Portfolio: (your Vercel domain)
- Rahi.AI: `https://rahi-ai.vercel.app`
- SarthiSync Live: `https://sarthisync-live.vercel.app`
- SarthiSync Health: `https://sarthisync-live.vercel.app/api/health`

## Content Update Map

- Main content + project cards: `index.html`
- Visual design + theme system: `style.css`
- Interactions (navigation, reveal, contact, theme toggle): `script.js`
- Case studies:
  - `case-studies/rahi-ai.html`
  - `case-studies/sarthisync.html`

## Notes

- Repository was cleaned by removing unused/duplicate image assets and legacy source files not referenced by the portfolio pages.
