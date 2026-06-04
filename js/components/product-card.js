/* =========================================================
   <product-card> — a single device card
   ---------------------------------------------------------
   A reusable, data-driven card. The parent assigns a product
   object to the `.product` property before insertion, e.g.

       const card = document.createElement("product-card");
       card.product = { index, name, category, description, tags };
       grid.append(card);

   Because the element is `display: contents`, the rendered
   <article class="card"> becomes a direct child of the grid,
   inheriting the existing card layout and hover styles.
   ========================================================= */

import { Component, define } from "../lib/component.js";

class ProductCard extends Component {
  render() {
    const product = this.product;
    if (!product) return "";

    const tags = (product.tags || [])
      .map((tag) => `<li>${tag}</li>`)
      .join("");

    return `
      <article class="card">
        <div class="card__index">${product.index}</div>
        <h3>${product.name}</h3>
        <p class="card__cat">${product.category}</p>
        <p>${product.description}</p>
        <ul class="card__tags">${tags}</ul>
      </article>
    `;
  }
}

define("product-card", ProductCard);
