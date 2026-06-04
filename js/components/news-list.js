/* =========================================================
   <news-list> — news / announcement entries
   ---------------------------------------------------------
   Renders the news items from the shared content data, newest
   first, as a list of dated entries. Used on news.html.
   ========================================================= */

import { Component, define } from "../lib/component.js";
import { newsItems } from "../site-content.js";

const dateFormat = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

class NewsList extends Component {
  render() {
    const items = newsItems
      .map(
        (item) => `
        <article class="news-item reveal">
          <div class="news-item__meta">
            <time datetime="${item.date}">${dateFormat.format(
          new Date(item.date)
        )}</time>
            <span class="news-item__tag">${item.label}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>`
      )
      .join("");

    return `<div class="news__list">${items}</div>`;
  }
}

define("news-list", NewsList);
