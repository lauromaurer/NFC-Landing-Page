# NFC Landing Page

A personal contact-card landing page, built to be opened by tapping an NFC
tag (e.g. on a physical business card) rather than typed into a browser.

## Overview

Tapping the tag opens this single page: a name, a one-line greeting, and a
short list of actions — save the contact directly to your phone as a
`.vcf`, or jump to LinkedIn, GitHub, or email. It's intentionally minimal:
one HTML file, no build step, no backend, so it loads instantly over an NFC
tap and stays trivial to update.

## How it works

- The vCard isn't a static file — `index.html` builds it client-side from a
  small `contact` object and generates a `Blob` URL, so the "Save Contact"
  button downloads a `.vcf` with no server involved.
- Styling is a single self-contained `<style>` block; icons come from Font
  Awesome via CDN.
- Hosted on GitHub Pages, served from `main` at the repo root, with a
  custom domain (`lauromaurer.com`) configured through the `CNAME` file and
  GitHub's managed HTTPS certificate.

## Project structure

```
NFC-Landing-Page/
├── index.html      # the entire page: markup, styles, and vCard script
├── lrm-logo.svg     # logo shown on the card
├── CNAME            # custom domain for GitHub Pages
└── README.md
```

Flat on purpose — GitHub Pages serves straight from the repo root, and a
one-page static site doesn't need more structure than this.

## Status

Live and in use at [lauromaurer.com](https://lauromaurer.com).

## License

No license — this is a personal contact page, not code meant for reuse.
