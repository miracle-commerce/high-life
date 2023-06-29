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
/*
Fade slider engine

<fade-slider> webcomponent which takes the following props:
  - arrows: {Boolean} Show next/previous arrows
  - mobile-indicator: {Boolean} Show progress bar
  - swipe: {Boolean} Allow swipe navigation
  - loop: {Boolean} Loop through slides continuously
  - rotate: {Boolean} Auto rotate slides
  - rotation-interval: {String} Rotation time interval in milliseconds
*/



class FadeSlider extends HTMLElement {
  constructor() {
    super();

    const handlers = [
      'keyupHandler',
      'touchstartHandler',
      'touchendHandler',
      'mousedownHandler',
      'mouseupHandler',
      'swipeHandler',
      'startRotation',
      'stopRotation',
      'blockSelectHandler',
      'blockDeselectHandler'
    ];

    handlers.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  connectedCallback() {
    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init.bind(this));
  }

  init() {
    window.eight.armada.elementRegistry.register({key: 'fade-slider', assetPath: '/assets/engine-fade-slider.min.js'});
    this.sliderFrame = this.querySelector('[data-name="fade-slider"]');
    this.templateContent = this.querySelector(':scope > template').content;
    this.slideElems = [].slice.call(this.querySelectorAll('[data-name="fade-slide"]'));
    this.totalSlides = this.slideElems.length;
    this.navCondensed = this.templateContent.querySelector('[data-name="prev_next_container"]');

    if (this.totalSlides < 2) return;

    this.render();
    this.attachEvents();

    if (this.rotate) {
      this.startRotation();
    }
  }

  render() {
    if (this.arrows) {
      if (this.navCondensed) {
        const navAlreadyRendered = this.querySelector('[data-name="prev_next_container"]');
        if (navAlreadyRendered) return;
        
        const arrowsCondensed = this.navCondensed.cloneNode(true);
        this.appendChild(arrowsCondensed);
      } else {
        const prevIcon = this.templateContent.querySelector('[data-icon-type="prev"]').cloneNode(true);
        const nextIcon = this.templateContent.querySelector('[data-icon-type="next"]').cloneNode(true);
        this.insertBefore(prevIcon, this.sliderFrame);
        this.appendChild(nextIcon);
      }
      if (!this.rotate && !this.loop) {
        this.setArrowOpacity();
      }
    }

    if (this.mobileIndicator) {
      const mobileIndicatorAlreadyRendered = this.querySelector('[data-name="mobile-indicator"]');
      if (mobileIndicatorAlreadyRendered) return;

      const mobileIndicator = this.templateContent.querySelector('[data-name="mobile-indicator"]');
      if(mobileIndicator) {
        const mobileBar = mobileIndicator.cloneNode(true);
        this.appendChild(mobileBar);
      }
    }

    const currentSlide = this.querySelector('[data-fade-slider-active]').dataset.fadeSliderIndex;
    this.setAttribute('current-slide', currentSlide);
    if (this.mobileIndicator) this.handleProgressClick();
  }

  attachEvents() {
    this.addEventListener('keyup', this.keyupHandler);

    if (this.swipe) {
      this.sliderFrame.addEventListener('touchstart', this.touchstartHandler, { passive: true });
      this.sliderFrame.addEventListener('touchend', this.touchendHandler, { passive: true });
      this.sliderFrame.addEventListener('mousedown', this.mousedownHandler);
      this.sliderFrame.addEventListener('mouseup', this.mouseupHandler);
    }

    if (this.arrows) {
      this.querySelector('[data-icon-type="next"]').addEventListener('click', this.next.bind(this));
      this.querySelector('[data-icon-type="prev"]').addEventListener('click', this.prev.bind(this));
    }

    if (this.rotate) {
      this.addEventListener('mouseover', this.stopRotation);
      this.addEventListener('focusin', this.stopRotation);
      this.addEventListener('mouseleave', this.startRotation);
      this.addEventListener('focusout', this.startRotation);
    }

    if (this.blocks && window.Shopify.designMode) {
      // Show slide when block selected in theme editor and stop rotation
      document.addEventListener('shopify:block:select', this.blockSelectHandler);
      // Start rotation when block deselected
      document.addEventListener('shopify:block:deselect', this.blockDeselectHandler);
    }
  }

  setActiveSlide(index) {
    const currentSlide = this.querySelector('[data-fade-slider-active]');
    const activeSlide = this.querySelector(`[data-fade-slider-index="${index}"]`);
    this.fadeOut(currentSlide);
    this.fadeIn(activeSlide);

    if(this.arrows && !this.rotate && !this.loop) {
      this.setArrowOpacity();
    }
  }

  fadeOut(slide) {
    slide.removeAttribute('data-fade-slider-active');
    slide.classList.add('opacity-0', 'z-0');
    slide.classList.remove('z-[1]');
    window.eight.eventsEngine.namedEvents.resetAnimation(slide);
    const linkEl = slide.querySelector('a');

    if (linkEl) {
      linkEl.setAttribute('tabindex', '-1');
    }
  }

  fadeIn(slide) {
    slide.setAttribute('data-fade-slider-active', '');
    slide.classList.remove('opacity-0', 'z-0');
    slide.classList.add('z-[1]');
    window.eight.eventsEngine.namedEvents.animate(slide);
    const linkEl = slide.querySelector('a');

    if (linkEl) {
      linkEl.setAttribute('tabindex', '0');
    }
  }

  mousedownHandler(e) {
    this.swipeStart = e.screenX;
  }

  mouseupHandler(e) {
    this.swipeEnd = e.screenX;
    this.swipeHandler();
  }

  touchstartHandler(e) {
    this.swipeStart = e.changedTouches[0].screenX;
  }

  touchendHandler(e) {
    this.swipeEnd = e.changedTouches[0].screenX;
    this.swipeHandler();
  }

  swipeHandler() {
    if (this.swipeEnd < this.swipeStart) {
      this.next();
    } else if (this.swipeEnd > this.swipeStart) {
      this.prev();
    }
  }

  keyupHandler(e) {
    switch (e.key) {
      case 'ArrowRight':
        this.next();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
    }
  }

  handleProgressClick() {
    this.scrollBarParts = this.querySelectorAll('[data-armada-selector="progress_clickable_part"]');
    this.scrollBarParts.forEach(part => {
      ['click', 'keypress'].forEach(ev => {
        part.addEventListener(ev, (e) => {
          if (ev === 'keypress' && e.key !== 'Enter') return;
          this.onProgressClick(part);
        });
      });
    });
  }

  onProgressClick(part) {
    const partIdx = parseInt(part.dataset.armadaSlideIndex);
    const slideIndex = this.slideElems.findIndex((slide) => partIdx == slide.getAttribute('data-fade-slider-index'));
    if (slideIndex == -1) return;
    this.setAttribute('current-slide', slideIndex);

    this.setActiveSlide(slideIndex);
    if (this.rotate) {
      this.stopRotation();
    }
  }

  next() {
    const currentSlide = +this.querySelector('[data-fade-slider-active]').dataset.fadeSliderIndex;
    const rotationNextSlide = currentSlide == this.totalSlides - 1 ? 0 : currentSlide + 1;
    const activeSlide = this.rotate || this.loop ? rotationNextSlide : Math.min(currentSlide + 1, this.totalSlides - 1);
    this.setActiveSlide(activeSlide);

    if (this.rotate && document.activeElement !== this) {
      this.stopRotation();
      this.startRotation();
    }

    this.setAttribute('current-slide', activeSlide);
  }

  prev() {
    const currentSlide = +this.querySelector('[data-fade-slider-active]').dataset.fadeSliderIndex;
    const rotationPreviousSlide = currentSlide == 0 ? this.totalSlides - 1 : currentSlide - 1;
    const activeSlide = this.rotate || this.loop ? rotationPreviousSlide : Math.max(currentSlide - 1, 0);
    this.setActiveSlide(activeSlide);

    if (this.rotate && document.activeElement !== this) {
      this.stopRotation();
      this.startRotation();
    }

    this.setAttribute('current-slide', activeSlide);
  }

  setArrowOpacity() {
    // Hide prev/next buttons when they have no function.
    const prevElem = this.querySelector('[data-icon-type="prev"]');
    const nextElem = this.querySelector('[data-icon-type="next"]');

    prevElem.style.opacity = '';
    nextElem.style.opacity = '';
    prevElem.ariaDisabled = 'false';
    nextElem.ariaDisabled = 'false';
    prevElem.setAttribute('tabindex', '0');
    nextElem.setAttribute('tabindex', '0');

    if(this.atStart()) {
      prevElem.style.opacity = 0;
      prevElem.ariaDisabled = 'true';
      prevElem.setAttribute('tabindex', '-1');
    }
    else if (this.atEnd()) {
      nextElem.style.opacity = 0;
      nextElem.ariaDisabled = 'true';
      nextElem.setAttribute('tabindex', '-1');
    }
  }

  atStart() {
    const currentSlide = this.querySelector('[data-fade-slider-active]').dataset.fadeSliderIndex;
    return currentSlide == 0;
  }

  atEnd() {
    const currentSlide = this.querySelector('[data-fade-slider-active]').dataset.fadeSliderIndex;
    return currentSlide == this.totalSlides - 1;
  }

  startRotation() {
    this.rotation = setTimeout(this.next.bind(this), this.rotationInterval);
  }

  stopRotation() {
    clearTimeout(this.rotation);
  }

  blockSelectHandler(e) {
    const activeSlide = e.target.dataset.fadeSliderIndex;
    const slideIndex = this.slideElems.findIndex((slide) => slide.dataset.blockId === e.detail.blockId);
    if (slideIndex == -1) return;
    this.setAttribute('current-slide', slideIndex);

    if (activeSlide) this.setActiveSlide(activeSlide);
    if (this.rotate) {
      this.stopRotation();
    }
  }

  blockDeselectHandler() {
    this.setActiveSlide(0);
    this.setAttribute('current-slide', 0);
    if (this.rotate) {
      this.startRotation();
    }
  }

  // Getters
  get arrows() {
    return this.getAttribute('arrows') === 'true';
  }

  get mobileIndicator() {
    return this.getAttribute('mobile-indicator') === 'true';
  }

  get swipe() {
    return this.getAttribute('swipe') === 'true';
  }

  get loop() {
    return this.getAttribute('loop') === 'true';
  }

  get rotate() {
    return this.getAttribute('rotate') === 'true';
  }

  get rotationInterval() {
    return this.getAttribute('rotation-interval') ? this.getAttribute('rotation-interval') : '5000';
  }

  get blocks() {
    return this.getAttribute('blocks') === 'true';
  }

  detachEvents() {
    this.removeEventListener('keyup', this.keyupHandler);

    if (this.swipe) {
      this.sliderFrame.removeEventListener('touchstart', this.touchstartHandler);
      this.sliderFrame.removeEventListener('touchend', this.touchendHandler);
      this.sliderFrame.removeEventListener('mousedown', this.mousedownHandler);
      this.sliderFrame.removeEventListener('mouseup', this.mouseupHandler);
    }

    if (this.arrows) {
      this.querySelector('[data-icon-type="next"]').removeEventListener('click', this.next.bind(this));
      this.querySelector('[data-icon-type="prev"]').removeEventListener('click', this.prev.bind(this));
    }

    if (this.rotate) {
      this.removeEventListener('mouseover', this.stopRotation);
      this.removeEventListener('focusin', this.stopRotation);
      this.removeEventListener('mouseleave', this.startRotation);
      this.removeEventListener('focusout', this.startRotation);
    }

    if (this.blocks && window.Shopify.designMode) {
      document.removeEventListener('shopify:block:select', this.blockSelectHandler);
      document.removeEventListener('shopify:block:deselect', this.blockDeselectHandler);
    }
  }

  disconnectedCallback() {
    if (this.totalSlides < 2) return;
    this.detachEvents();
  }
}

customElements.define('fade-slider', FadeSlider);

})();

/******/ })()
;