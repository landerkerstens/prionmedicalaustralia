/* =========================================================
   <news-list> — latest LinkedIn post
   ---------------------------------------------------------
   Embeds the latest post from the Prion Medical Australia
   LinkedIn page via LinkedIn's official embed iframe. The
   post shown is controlled by `linkedinEmbedUrl` in
   site-content.js. Used on news.html.
   ========================================================= */

import { Component, define } from "../lib/component.js";
import { linkedinEmbedUrl } from "../site-content.js";

class NewsList extends Component {
  render() {
    return `
      <div class="news__embed reveal">
        <iframe
          class="news__embed-frame"
          src="${linkedinEmbedUrl}"
          title="Latest LinkedIn post from Prion Medical Australia"
          frameborder="0"
          allowfullscreen
          loading="lazy"></iframe>
      </div>`;
  }
}

define("news-list", NewsList);
