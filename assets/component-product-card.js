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
class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.showDividers();
  }

  showDividers() {
    if (!this.productCardContent.length) return;

    // If product block has content, show divider
    this.productCardContent.forEach(content => {
      content.closest('.hr-hide')?.classList.remove('hr-hide');
    })
  }

  get productCardContent() {
    return this.querySelectorAll('[data-product-card-content]');
  }
}

window.customElements.define('product-card', ProductCard);

/******/ })()
;