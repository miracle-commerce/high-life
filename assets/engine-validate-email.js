/*!
 * 
 * ------
 * Note: customizing files reduces the store's ability to auto-update the theme.
 *
 * Disclaimer:
 * This is a non minified version of a core js file, you can swap out the liquid / HTML link from the minified file if you choose to utilize this one. Any usage of these files is at the merchant/app/expert/agency's own risk, we take no responsibility for custom code changes. Support offerings from We Are Eight will be limited to rolling back to the latest theme version if these are utilized.
 *
 * License and acceptance of usage:
 *
 * Copyright (C) We Are Eight LTD  - All Rights Reserved
 * This file is part of Momentum theme provided for usage on Shopify online stores only.
 * Unauthorized usage and or modification of this file outside of this Momentum utilized on a Shopify store without a valid license, is strictly prohibited.
 * Unauthorized copying or distribution of this file, via any medium is strictly prohibited.
 * Proprietary and confidential
 *
 * More information and official contact details: weareeight.com
 * ------
 *
 */
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
class ValidateEmail extends HTMLElement {
  constructor() {
    super()
    
    this.form = this.closest('form');
    this.submitBtn = this.form.querySelector('[type="submit"]');
    this.emailInput = this.querySelector('input[type=email]');
    this.validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Prevent submit action initially
    this.submitBtn.setAttribute('type', 'button');
  }

  connectedCallback() {
    document.addEventListener('ARMADA:TRANSLATION:SYNC', this.init.bind(this));
  }

  init() {
    if (!this.form || !this.emailInput || !this.submitBtn) return;
    this.form.addEventListener('keypress', this.handleKeyPress.bind(this));
    this.submitBtn.addEventListener('click', this.handleValidation.bind(this));
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      this.handleValidation();
    }
  }

  handleValidation() {
    if (this.emailInput.value.match(this.validRegex)) {
      this.form.submit();
    } else {
      window.eight.eventsEngine.emit(`${eight.constants.events["ARMADA:FORM:SUBMIT"]}`);
      this.emailInput.focus();
    }
  }
}

customElements.define('validate-email', ValidateEmail);

/******/ })()
;