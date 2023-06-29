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
/******/ 	var __webpack_modules__ = ({

/***/ 845:
/***/ ((module) => {

!function(e,d){ true?module.exports=d():0}(self,(function(){return(()=>{"use strict";var e={};return((e,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.isArmadaLoaded=void 0,d.isArmadaLoaded=e=>{var d,o;const a=!0===(null===(o=null===(d=window.eight)||void 0===d?void 0:d.armada)||void 0===o?void 0:o.loaded);if(!e)return a;a?e():document.addEventListener("ARMADA:LOADED",e)},d.default=d.isArmadaLoaded})(0,e),e})()}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(845);
/* harmony import */ var _weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__);


class ProductCardVariantImage extends HTMLElement {
  constructor () {
    super();

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleVariantChange = this.handleVariantChange.bind(this);
    this.returnToFeaturedImg = this.returnToFeaturedImg.bind(this);
    this.init = this.init.bind(this);
  }

  connectedCallback() {
    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init);
  }

  init() {
    this.attachEvents();
    window.eight.armada.elementRegistry.register({key: 'simple-product-card-image', assetPath: '/assets/component-product-card-image-variant-switcher.min.js'});
  }

  attachEvents() {
    if (!this.product) return;
    document.addEventListener(`${window.eight.constants.events["ARMADA:VARIANT:CHANGE"]}`, this.handleVariantChange);
    document.addEventListener('click', this.returnToFeaturedImg);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.returnToFeaturedImg(e);
    }
  }

  handleVariantChange(e) {
    const { productId, variantId, scopeId } = e.detail;

    if (this.product.id != productId) return;
    if (this.scopeId != scopeId) return;

    this.productFeaturedMedia = this.querySelector(`[data-armada-media-id="${this.product.media[0].id}"]`);
    this.currentVariant = this.product.variants.find((variant) => variant.id === variantId);
    this.selectedImg = this.currentVariant.featured_media ? this.querySelector(`[data-armada-media-id="${this.currentVariant.featured_media.id}"]`) : null;
    this.variantImages = this.querySelectorAll('[data-armada-product-card-images]');
    this.productId = productId;

    if (!this.productFeaturedMedia) return;
    this.variantImages.forEach(img => img.classList.add('hidden'));
    !this.selectedImg || !this.currentVariant.featured_media ? this.productFeaturedMedia.classList.remove('hidden') : this.selectedImg.classList.remove('hidden');
  }

  returnToFeaturedImg(e) {
    if (this.isCrossSell || !this.productId) return;
    const isInput = e.target.tagName.toLowerCase() === 'input';
    const nearestInput = e.target.parentElement.querySelector('input');
    const targetEl = isInput ? e.target : nearestInput;

    if (!targetEl || targetEl.dataset.swatchProductId == this.productId) return;

    // Hide active image and reveal featured image
    this.variantImages.forEach(img => img.classList.add('hidden'));
    this.productFeaturedMedia.classList.remove('hidden');

    // Remove checked state from inputs when clicking away
    const checkedInputs = document.querySelectorAll(`input[data-swatch-product-id="${this.productId}"]:checked`);
    checkedInputs.forEach(checkedInput => checkedInput.checked = false);
  }

  get product() {
    return window.eight.safeJSONParse(this.dataset.armadaProduct);
  }

  get isCrossSell() {
    return this.closest('div[data-aid="cross-sells"]');
  }

  get scopeId() {
    const scope = this.getAttribute('scope-id');
    return typeof scope === 'string' ? scope : '';
  }

  detachEvents() {
    if (!this.product) return;
    document.removeEventListener(`${window.eight.constants.events["ARMADA:VARIANT:CHANGE"]}`, this.handleVariantChange);
    document.removeEventListener('click', this.returnToFeaturedImg);
    document.removeEventListener('keyup', this.returnToFeaturedImg);
  }

  disconnectedCallback() {
    this.detachEvents();
  }
}

window.customElements.define('simple-product-card-image', ProductCardVariantImage);

})();

/******/ })()
;