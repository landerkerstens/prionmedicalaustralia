/* =========================================================
   scroll-reveal.js — fade-and-rise on scroll
   ---------------------------------------------------------
   Tags eligible elements with the `reveal` class and uses a
   single IntersectionObserver to add `in` as they enter the
   viewport. Falls back to showing everything immediately when
   IntersectionObserver is unavailable. CSS handles the actual
   animation and the prefers-reduced-motion opt-out.
   ========================================================= */

const REVEAL_SELECTOR = [
  ".reveal",
  ".section__head",
  ".card",
  ".crow",
  ".about__values li",
  ".partner__list li",
].join(", ");

export function initScrollReveal() {
  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  elements.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".reveal:not(.in)")
    .forEach((el) => observer.observe(el));
}
