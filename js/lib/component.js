/* =========================================================
   Component — lightweight base class for custom elements
   ---------------------------------------------------------
   Every UI block on the site extends this class. A subclass
   only has to implement render() (returns an HTML string) and,
   optionally, afterRender() to wire up behaviour or inject
   nested components.

   Components render into their own light DOM so the global
   stylesheet keeps applying unchanged. They are declared as
   `display: contents` in styles.css, which means the wrapper
   element adds no box of its own: the rendered markup behaves
   exactly as if it were written directly in the page.
   ========================================================= */

export class Component extends HTMLElement {
  connectedCallback() {
    if (this._mounted) return; // guard against re-entry on re-insertion
    this._mounted = true;
    this.innerHTML = this.render();
    this.afterRender();
  }

  /** Return the component's HTML as a string. Override in subclasses. */
  render() {
    return "";
  }

  /** Run imperative setup after the markup is in the DOM. Optional. */
  afterRender() {}
}

/**
 * Register a custom element once. Calling define twice for the
 * same tag throws, so we guard against accidental double imports.
 */
export function define(tagName, ComponentClass) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, ComponentClass);
  }
}
