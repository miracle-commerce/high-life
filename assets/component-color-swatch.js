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


class ColorSwatch extends HTMLElement {
  constructor() {
    super();

    this.swatches = this.querySelectorAll('[data-name="swatch-option"] input[type="radio"]');
    this.colorSwatchWrapper = this.closest('[data-armada-selector="color-swatch-wrapper"]');
    this.colorSwatchContainers = this.querySelectorAll('[data-name="swatch-option"]');
    this.labels = this.querySelectorAll('[data-name="swatch-option"] label');
    this.prevVariant = null;

    const handlers = [
      'init',
      'attachEvents',
      'swatchClickHandler',
      'swatchMouseEnterHandler',
      'swatchMouseLeaveHandler',
      'variantChangeHandler',
      'updateHiddenSwatchCount'
    ];

    handlers.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  connectedCallback() {
    if(!this.swatches || this.swatches.length < 1 || !this.getAttribute('product-variants')) return;

    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init);
  }

  init() {
    this.attachEvents();
    this.updateHiddenSwatchCount();
    window.eight.armada.elementRegistry.register({key: 'color-swatch', assetPath: '/assets/component-color-swatch.min.js'});
  }

  attachEvents() {
    this.swatches.forEach(swatch => {
      swatch.addEventListener('click', this.swatchClickHandler);
      const swatchLabelEl = swatch.parentElement.querySelector('label');
      swatchLabelEl.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          this.swatchClickHandler(e);
        }
      });
    });

    if (this.changeOnHover) {
      this.labels.forEach(label => {
        label.addEventListener('mouseenter', this.swatchMouseEnterHandler);
        label.addEventListener('mouseleave', this.swatchMouseLeaveHandler);
      });
    }

    document.addEventListener(`${window.eight.constants.events["ARMADA:VARIANT:CHANGE"]}`, this.variantChangeHandler);
    window.addEventListener('resize', this.updateHiddenSwatchCount);
  }

  getVariant(e) {
    const targetEl = e.target;
    const isInput = targetEl.tagName.toLowerCase() === 'input';
    const closestInput = targetEl.parentElement.querySelector('input');

    if (!closestInput) return;

    const swatchValue = isInput ? targetEl.value : closestInput.value;
    const variant = this.identifyVariant(swatchValue);
    return variant;
  }

  swatchClickHandler(e) {
    const currentVariant = this.getVariant(e);

    if(this.imgAspectRatioIsNatural) {
      const currentVariantProductCardImage = document.querySelector(`[data-armada-product*="${currentVariant.id}"]`);
      if (currentVariantProductCardImage) {
        currentVariantProductCardImage.style.height = "auto";
      }
    }

    if(window.eight.eventsEngine) {
      window.eight.eventsEngine.namedEvents.changeVariant(this.productId, currentVariant.id, currentVariant, this.scopeId);
      this.prevVariant = currentVariant;
    }
  }

  swatchMouseEnterHandler(e) {
    this.prevVariant = this.currentlySelectedVariant;
    const currentVariant = this.getVariant(e);

    if(this.imgAspectRatioIsNatural) {
      const currentVariantProductCardImage = document.querySelector(`[data-armada-product*="${this.prevVariant.id}"]`);
      if (currentVariantProductCardImage) {
        currentVariantProductCardImage.style.height = currentVariantProductCardImage.offsetHeight + "px";
      }
    }

    if(window.eight.eventsEngine) {
      window.eight.eventsEngine.namedEvents.changeVariant(this.productId, currentVariant.id, currentVariant, this.scopeId);
    }
  }

  swatchMouseLeaveHandler() {
    window.eight.eventsEngine.namedEvents.changeVariant(this.productId, this.prevVariant.id, this.prevVariant, this.scopeId);
  }

  variantChangeHandler(e) {
    const { productId, variant, scopeId } = e.detail;

    if (this.productId != productId) return;
    if (this.scopeId != scopeId) return;

    const newColor = variant?.options[this.optionIndex];

    const matchingInput = Array.from(this.inputs).find(input => {
      return input.value.localeCompare(newColor, undefined, { sensitivity: 'base' }) === 0;
    });

    matchingInput.checked = true;
  }

  updateHiddenSwatchCount() {
    // Reset container max widths so that these update
    // when the screen is resized
    this.style.maxWidth = 'unset';
    this.parentElement.style.maxWidth = 'unset';

    if (!this.colorSwatchWrapper) return;

    // Create a new array containing only the swatches that aren't visible
    const hiddenSwatches = Array.from(this.colorSwatchContainers).filter(container => container.offsetHeight === 0);
    const swatchCountContainer = this.colorSwatchWrapper.querySelector('[data-armada-selector="hidden-swatch-count"]');
    const swatchNoWrap = this.dataset.armadaNoWrap;
    let hiddenSwatchCount = hiddenSwatches.length;

    // Get the amount of vislble swatches
    const visibleSwatches = this.colorSwatchContainers.length - hiddenSwatches.length;

    if (!swatchCountContainer || !swatchNoWrap) return;

    // Only the visible swatches should be navigable by keyboard
    hiddenSwatches.forEach(swatch => {
      const swatchLabel = swatch.querySelector('label');
      swatchLabel.removeAttribute('tabindex');
    });

    // Get a max-width value from the width of the swatches
    // times the amount of visible swatches
    const max_width = `calc((52px * ${visibleSwatches}) + 4px)`;

    // Set the text to indicate that there are still 'x' swatches that aren't visible
    hiddenSwatchCount <= 0 ? swatchCountContainer.textContent = '' : swatchCountContainer.textContent = `+ ${hiddenSwatchCount}`;

    // Remove the 'hidden' class from the container
    if (hiddenSwatchCount > 0) {
      swatchCountContainer.closest('a').classList.remove('hidden');
      swatchCountContainer.closest('a').classList.add('flex');
    }

    // Add a max-width to the swatch component and its parent container
    // This prevents the text count from being pushed to the edge
    hiddenSwatchCount <= 0 ? this.style.maxWidth = 'unset' : this.style.maxWidth = max_width;
    hiddenSwatchCount <= 0 ? this.parentElement.style.maxWidth = 'unset' : this.parentElement.style.maxWidth = `calc(${max_width} + 52px)`;
  }

  identifyVariant(swatchValue) {
    if(this.variants.length == 1) return this.variants[0];

    return this.variants.find(variant => {
      // Case insensitive matching.
      return variant.options[this.optionIndex].localeCompare(swatchValue, undefined, { sensitivity: 'base' }) === 0;
    });
  }

  get inputs() {
    return this.querySelector('[data-name="product-option-radio"]')
      ? this.querySelectorAll('[data-name="product-option-radio"]')
      : false;
  }

  get scopeId() {
    const scope = this.getAttribute('scope-id');
    return typeof scope === 'string' ? scope : '';
  }

  get optionIndex() {
    return this.getAttribute('option-index')
      ? this.getAttribute('option-index')
      : false;
  }

  get productId() {
    return this.getAttribute('product-id')
      ? Number(this.getAttribute('product-id'))
      : false;
  }

  get variants() {
    return window.eight.safeJSONParse(this.getAttribute('product-variants'));
  }

  get currentlySelectedVariant() {
    const variantInput = document.querySelector(`[data-swatch-product-id="${this.productId}"]:checked`);
    const swatchValue = variantInput.value;
    const variant = this.identifyVariant(swatchValue);
    return variant;
  }

  get changeOnHover() {
    return this.dataset.changeOnHover === 'true';
  }

  get imgAspectRatioIsNatural() {
    const imgAspectRatio = this.getAttribute('natural-img-aspect-ratio');
    if(imgAspectRatio == 'true')
      return imgAspectRatio;
    return false
  }
}

window.customElements.define('color-swatch', ColorSwatch);

})();

/******/ })()
;