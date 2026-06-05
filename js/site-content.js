/* =========================================================
   site-content.js — single source of truth for the website
   ---------------------------------------------------------
   All editable copy lives here. To change a menu item, add a
   product, or adjust the footer, edit this file only. The
   components read from these exports and render the markup.
   ========================================================= */

export const brand = {
  name: "Prion Medical Australia",
  logo: "logo.svg",
  tagline: "Specialist distributor of endoscopy and ablation technologies.",
};

/* Primary navigation links (header + footer share this list). */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clinical areas", href: "#clinical" },
  { label: "Why partner", href: "#partner" },
  { label: "Regulatory", href: "#compliance" },
  { label: "News", href: "news.html" },
];

/* Words shown in the scrolling marquee under the hero. */
export const marqueeWords = [
  "Gastroenterology",
  "Therapeutic endoscopy",
  "Interventional ablation",
  "Endoscopic surgery",
];

/* Product / device families shown in the Portfolio section. */
export const products = [
  {
    index: "01",
    name: "OTSC\u00aeneo System",
    category: "Over-the-scope clip",
    description:
      "An over-the-scope clip system for endoscopic closure and tissue approximation, designed for situations where reliable, full-thickness grip matters.",
    tags: ["Closure", "Haemostasis", "Fixation"],
  },
  {
    index: "02",
    name: "FTRD\u00ae System",
    category: "Full-thickness resection",
    description:
      "A device platform for endoscopic full-thickness resection of selected lesions in the lower and upper GI tract, performed in a single, controlled step.",
    tags: ["Resection", "EFTR", "Colorectal"],
  },
  {
    index: "03",
    name: "STARmed RFA Needles",
    category: "Radiofrequency ablation",
    description:
      "Radiofrequency ablation electrodes used in interventional procedures, including the ablation of benign thyroid nodules and other targeted indications.",
    tags: ["RFA", "Thyroid", "Interventional"],
  },
];

/* Clinical areas where the technologies are used. */
export const clinicalAreas = [
  {
    marker: "A",
    title: "Therapeutic gastroenterology",
    body: "Closure of perforations and fistulae, control of GI bleeding, and resection of lesions that are difficult to treat with conventional snare techniques.",
  },
  {
    marker: "B",
    title: "Endoscopic resection",
    body: "Full-thickness resection workflows that allow selected lesions to be removed and the defect closed within a single endoscopic procedure.",
  },
  {
    marker: "C",
    title: "Interventional ablation",
    body: "Image-guided radiofrequency ablation for indications including benign thyroid nodules, offering a minimally invasive alternative to surgery in suitable patients.",
  },
];

/* Reasons to partner, shown in the dark "Why partner" section. */
export const partnerPoints = [
  {
    title: "Procedural expertise.",
    body: "Our specialists understand the clinical workflow around every device we supply.",
  },
  {
    title: "Reimbursement know-how.",
    body: "Deep experience navigating funding and reimbursement frameworks for novel device indications.",
  },
  {
    title: "Responsive logistics.",
    body: "Reliable stock and rapid response so devices are available when the case is scheduled.",
  },
  {
    title: "Training and education.",
    body: "Structured onboarding and ongoing education for clinical and nursing teams.",
  },
];

/* LinkedIn embed shown on news.html.
   To show a different post: open the post on LinkedIn, click the "..."
   menu, choose "Embed this post", and copy the src URL from the iframe
   (it looks like the example below). Paste only that URL here. */
export const linkedinEmbedUrl =
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7441842275833233408";

/* News / announcements, newest first. Shown on news.html. */
export const newsItems = [
  {
    date: "2026-05-20",
    label: "Company",
    title: "Prion Medical Australia is now operating.",
    body: "Our Australian operation is live, extending the focused European model of clinician-led support to hospitals and specialists across the country. We are introducing our therapeutic endoscopy and ablation portfolio to gastroenterology, surgical and interventional teams.",
  },
  {
    date: "2026-04-08",
    label: "Portfolio",
    title: "STARmed RFA needles join our Australian range.",
    body: "We are adding radiofrequency ablation electrodes to the portfolio we represent locally, supporting interventional indications including the ablation of benign thyroid nodules. Availability and indications remain subject to Australian regulatory registration.",
  },
  {
    date: "2026-03-02",
    label: "Education",
    title: "Hands-on training programme in development.",
    body: "We are building a structured onboarding and case-support programme for clinical and nursing teams using over-the-scope closure and full-thickness resection devices. Express your interest through the contact form and a specialist will be in touch.",
  },
];

/* Footer link columns. */
export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Clinical areas", href: "#clinical" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why partner", href: "#partner" },
      { label: "Regulatory", href: "#compliance" },
      { label: "News", href: "news.html" },
      { label: "Contact", href: "#contact" },
    ],
  },
];
