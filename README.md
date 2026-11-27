# NFC Landing Page

A personal contact-card landing page, built to be opened by tapping an NFC
tag (e.g. on a physical business card) rather than typed into a browser.

## Overview

Tapping the tag opens this single page: a name, a one-line greeting, and a
short list of actions — save the contact directly to your phone as a
`.vcf`, book a meeting, call, email, or jump to LinkedIn or GitHub. It's intentionally minimal:
one HTML file, no build step, no backend, so it loads instantly over an NFC
tap and stays trivial to update.

## How it works

- "Save Contact" links to a static `lauro-maurer.vcf` (vCard 3.0, CRLF line
  endings enforced via `.gitattributes`). Edit that file when contact details
  change.
- No third-party resources: icons are inline SVGs (Lucide, ISC licence), and
  styles and script live in `style.css` / `script.js`. That lets a strict
  Content-Security-Policy (set via `<meta>`, since GitHub Pages can't send
  custom headers) block all inline and external code.
- `script.js` only reveals a "Share this page" button on devices that
  support the Web Share API.
- Visits are counted with [GoatCounter](https://www.goatcounter.com) (no
  cookies): `script.js` requests its pixel endpoint, so no third-party script
  runs. Only on `lauromaurer.com`, so local testing isn't counted.
- "Book a Meeting" links to a Google Calendar appointment schedule that adds
  a Google Meet link to each booking.
- Open Graph tags plus `og-image.png` give a proper preview when the link is
  forwarded; `apple-touch-icon.png` is used for home-screen bookmarks.
- Hosted on GitHub Pages, served from `main` at the repo root, with a
  custom domain (`lauromaurer.com`) configured through the `CNAME` file and
  GitHub's managed HTTPS certificate.

## Project structure

```
NFC-Landing-Page/
├── index.html           # markup, meta/OG tags, CSP, inline SVG icons
├── style.css            # all styling
├── script.js            # Web Share button
├── lauro-maurer.vcf     # contact card behind "Save Contact"
├── lrm-logo.svg         # logo, also the favicon
├── apple-touch-icon.png # 180×180 home-screen icon
├── og-image.png         # 1200×630 link-preview image
├── CNAME                # custom domain for GitHub Pages
└── README.md
```

Flat on purpose — GitHub Pages serves straight from the repo root, and a
one-page static site doesn't need more structure than this.

## Status

Live and in use at [lauromaurer.com](https://lauromaurer.com).

## License

No license — this is a personal contact page, not code meant for reuse.
