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


class ProductThumbnailGallery extends HTMLElement {
  constructor() {
    super();
    this.thumbnailSlider = this.querySelector('[data-armada-selector="product-thumbnail-slider"]');
    this.sliderContainer = this.querySelector('[data-armada-selector="product-thumbnail-slider-container"]');
    this.mediaContainer = this.querySelector('[data-armada-selector="product-media-container"]');
    this.galleryProductId = +this.dataset.productId;
    this.scopeId = this.dataset.scopeId;
    this.featuredImageId = +this.dataset.featuredImageId;
    this.sliderAnimiationElement = this.querySelector('[data-armada-selector="product-thumbnail-animate-target"]');
    this.downArrow = this.querySelector('[data-armada-selector="product-thumbnail-down-arrow"]');
    this.activeThumbnailClasses = ['theme-active-thumbnail'];
  }

  connectedCallback() {
    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init.bind(this));
  }

  init() {
    this.thumbnailSlider.addEventListener('click', (e) => this.setMedia(this.mediaContainer, this.getMediaId(e.target)));
    this.thumbnailSlider.addEventListener('click', (e) => this.setActiveThumbnail(this.getMediaId(e.target), this.thumbnailSlider, this.activeThumbnailClasses));
    this.thumbnailSlider.addEventListener('keyup', (e) => this.keyUpHandler(e));
    this.sliderContainer.addEventListener('scroll', this.handleArrow.bind(this));

    document.addEventListener("ARMADA:VARIANT:CHANGE", (e) => this.handleVariantChange(e));
    window.eight.armada.elementRegistry.register({key: 'product-thumbnail-gallery', assetPath: '/assets/component-product-thumbnail-gallery.min.js'});

    this.animateSlider();
    this.setCursorStyle();
    this.handleArrow();
  }

  handleVariantChange(e) {
    if (this.scopeId != e.detail.scopeId) return;

    this.setMediaOnVariantChange(this.mediaContainer, e.detail, this.galleryProductId, this.featuredImageId);
    this.setActiveThumbnail(this.getMediaIdFromVariant(e.detail.variant, this.featuredImageId), this.thumbnailSlider, this.activeThumbnailClasses);

  }

  setMediaOnVariantChange(mediaContainer, { productId, variant }, galleryProductId, featuredImageId, thumbnails, activeThumbnailClasses) {
    if (galleryProductId != productId || !variant) return;
    this.setMedia(mediaContainer, this.getMediaIdFromVariant(variant, featuredImageId), thumbnails, activeThumbnailClasses);
  }

  getMediaId(element) {
    return element.dataset.mediaId;
  }

  getMediaIdFromVariant(variant, featuredImageId) {
    return variant.featured_media ? variant.featured_media.id : featuredImageId;
  }

  setMedia(mediaContainer, mediaId) {
    if (!mediaId || window.eight.getCurrentBreakpoint() == 'sm') return;

    this.hideDeselectedMedia(mediaContainer);

    const media = mediaContainer.querySelector(`[data-media-id="${mediaId}"]`);
    if (media) {
      this.displayMedia(media);
    }
  }

  hideDeselectedMedia(mediaContainer) {
    const deselectedMedia = mediaContainer.querySelector('[data-media-selected="true"]');
    deselectedMedia.setAttribute('data-media-selected', false);
    deselectedMedia.classList.add('hidden');
  }

  displayMedia(element) {
    element.setAttribute('data-media-selected', true);
    element.classList.remove('hidden');
  }

  setActiveThumbnail(mediaId, thumbnails, activeThumbnailClasses) {
    const deselectedThumbnail = thumbnails.querySelector('[data-thumbnail-selected="true"]');
    const selectedThumbnail = thumbnails.querySelector(`[data-media-id="${mediaId}"]`);

    if(!deselectedThumbnail || !selectedThumbnail || this.getMediaId(deselectedThumbnail) == mediaId || !mediaId) return;

    deselectedThumbnail.setAttribute('data-thumbnail-selected', false);
    deselectedThumbnail.classList.remove(...activeThumbnailClasses);

    selectedThumbnail.setAttribute('data-thumbnail-selected', true);
    selectedThumbnail.classList.add(...activeThumbnailClasses);
  }

  keyUpHandler(e) {
    if (e.keyCode === 13) {
      // Update main media with selected thumbnail
      e.target.parentElement.click();
    }
  }

  animateSlider() {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!this.sliderIsScrollable() || !this.sliderAnimiationElement || isReducedMotion) return;
    this.sliderAnimiationElement.animate(
      [
        { transform: `translateY(0)` },
        { transform: `translateY(-60px)` }
      ],
      {
        delay: 1500,
        duration: 800,
        direction: 'alternate',
        iterations: 2,
        easing: 'ease'
      }
    );
  }

  setCursorStyle() {
    if (!this.sliderIsScrollable()) return;
    this.thumbnailSlider.classList.remove('lg:cursor-pointer');
    this.thumbnailSlider.classList.add('lg:cursor-ns-resize');
  }

  handleArrow() {
    if (!this.sliderIsScrollable()) return;
    if (this.sliderContainer.scrollTop > 0) {
      this.hideArrow(this.downArrow);
    } else {
      this.showArrow(this.downArrow);
    }
  }

  showArrow(arrow) {
    arrow.classList.remove('opacity-0');
    arrow.classList.add('opacity-40');
  }

  hideArrow(arrow) {
    arrow.classList.add('opacity-0');
    arrow.classList.remove('opacity-40');
  }

  sliderIsScrollable() {
    return this.thumbnailSlider.offsetHeight > this.sliderContainer.offsetHeight;
  }
}

customElements.define('product-thumbnail-gallery', ProductThumbnailGallery);

})();

/******/ })()
;