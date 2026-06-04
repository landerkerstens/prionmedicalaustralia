# Prion Medical Australia — website

A static marketing site, refactored into a small component architecture.
No build step and no framework: it uses native Web Components and ES modules,
so it deploys to any static host as-is.

## Project structure

```
.
├── index.html        Page shell + unique prose (hero, about, compliance, contact copy)
├── styles.css        Design tokens + all styling
├── logo.svg          Brand mark (now displayed 25% larger)
└── js/
    ├── main.js              Entry point: registers components, starts behaviours
    ├── site-content.js      Single source of truth for all editable copy
    ├── lib/
    │   └── component.js      Base class shared by every component
    ├── components/
    │   ├── site-header.js    <site-header>   nav + mobile menu
    │   ├── site-marquee.js   <site-marquee>  scrolling keyword band
    │   ├── product-card.js   <product-card>  one device card
    │   ├── portfolio-grid.js <portfolio-grid> composes the product cards
    │   ├── clinical-list.js  <clinical-list> clinical-area rows
    │   ├── partner-list.js   <partner-list>  "why partner" bullet list
    │   ├── contact-form.js   <contact-form>  enquiry form + validation
    │   └── site-footer.js    <site-footer>   footer + auto year
    └── behaviours/
        └── scroll-reveal.js  fade-and-rise reveal on scroll
```

## Editing content

Most text changes happen in **one place**: `js/site-content.js`. Adding a
product is a single entry in the `products` array; the card renders itself.
Menu items, marquee words, clinical areas, partner points and footer links
work the same way. The longer prose blocks (hero, about, regulatory, contact)
live directly in `index.html`.

## Running it

Because it uses ES modules, browsers require the files to be served over HTTP
(opening `index.html` directly via `file://` will not load the modules).

Local preview from this folder:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

For production, upload the whole folder to any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or a standard web server).

## Notes

- The logo is displayed 25% larger than before (header 30 → 37.5px,
  footer 34 → 42.5px). The SVG inherits colour, so it stays crisp at any size.
- The contact form is front-end only. Connect `submit()` in
  `js/components/contact-form.js` to your email service or backend.
- Fill in the placeholders marked `[ ... ]` in `index.html`
  (phone, office address, ARTG details).
```
# website-prion-medicalAUS
# website-prion-medicalAUS
