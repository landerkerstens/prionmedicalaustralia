/* =========================================================
   <contact-form> — enquiry form with client-side validation
   ---------------------------------------------------------
   Renders the form markup and encapsulates its validation.
   The form is front-end only: on a valid submission it shows
   a placeholder confirmation. Wire submit() to an email
   service or backend endpoint to make it live.
   ========================================================= */

import { Component, define } from "../lib/component.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class ContactForm extends Component {
  render() {
    return `
      <form class="contact__form" novalidate>
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" autocomplete="email" required />
        </div>
        <div class="field">
          <label for="org">Organisation</label>
          <input type="text" id="org" name="org" autocomplete="organization" />
        </div>
        <div class="field">
          <label for="message">How can we help?</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn--solid btn--full">Send enquiry</button>
        <p class="form__status" role="status" aria-live="polite"></p>
      </form>
    `;
  }

  afterRender() {
    const form = this.querySelector("form");
    const status = this.querySelector(".form__status");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const validEmail = EMAIL_PATTERN.test(email);

      if (!name || !validEmail || !message) {
        status.textContent =
          "Please complete your name, a valid email and a message.";
        status.className = "form__status err";
        return;
      }

      // Placeholder success — connect this to your email service or backend.
      status.textContent =
        "Thank you. This demo form is not yet connected to a backend.";
      status.className = "form__status ok";
      form.reset();
    });
  }
}

define("contact-form", ContactForm);
