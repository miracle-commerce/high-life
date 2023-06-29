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

/***/ 483:
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={};return(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.animationEngine=void 0;class s{constructor(){this.thresholds={0:0,10:.1,15:.15,25:.25,50:.5,100:1},this.list=[]}initAnimation(t){const{items:e,elementToObserve:s,threshold:i,delay:a}=t;e.forEach((e=>this.addToList(e,t))),s?this.initObserver(e,s,i,a):this.animateItems(e,a)}initObserver(t,e,s,i){const a=s?s.replace(/\s+/g,""):"",r=this.thresholds[10],o=a?this.setThresholdValues(a):r;new IntersectionObserver(((s,a)=>this.observerCallback(s,a,t,e,i)),{root:null,threshold:o}).observe(e)}observerCallback(t,e,s,i,a){t[0].isIntersecting&&(this.animateItems(s,a),e.unobserve(i),s.forEach((t=>this.removeFromList(t))))}setThresholdValues(t){if(!t)return;let e=t.split(",").filter((t=>this.thresholds.hasOwnProperty(t)));return e=e.length>0?e:["0"],e.map((t=>this.thresholds[t]))}animateItems(t,e){t&&t.forEach(((t,s)=>{this.setDelay(t,s,e),t.dataset.animated=!0}))}resetAnimations(t){t&&t.forEach((t=>{t.dataset.animated=!1,t.style.animationDelay="",this.removeFromList(t)}))}setDelay(t,e,s){s&&(t.style.animationDelay=e*s+"ms")}addToList(t,e){const s=`${Date.now()+this.list.length}`;return t.dataset.armadaAnimationId=s,this.list.push(Object.assign({},{id:s},e)),this.list}removeFromList(t){const e=`${t.dataset.armadaAnimationId}`,s=this.list.filter((t=>t.id!==e));return this.list=[...s],this.list}}e.animationEngine=s,e.default=s})(),t})()}));

/***/ }),

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
/* harmony import */ var _weareeight_armada_dist_utils_animationEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(483);
/* harmony import */ var _weareeight_armada_dist_utils_animationEngine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weareeight_armada_dist_utils_animationEngine__WEBPACK_IMPORTED_MODULE_1__);



class ArmadaAnimation extends HTMLElement {
	constructor() {
    super();
  }

  connectedCallback() {
    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init.bind(this));
  }

  init() {
    window.eight.animationEngine = new _weareeight_armada_dist_utils_animationEngine__WEBPACK_IMPORTED_MODULE_1__.animationEngine();

    // On scroll animations
    this.initScrollAnimations(this.onScrollElements);

    // Manual animations
    document.addEventListener('ARMADA:ANIMATION:ANIMATE', e => this.animateElement(e.detail));
    document.addEventListener('ARMADA:ANIMATION:RESET', e => this.resetAnimation(e.detail));

    // Editor events
    if(window.Shopify.designMode) {
      document.addEventListener('shopify:section:load', e => this.sectionLoadHandler(e));
    }
  }

  initScrollAnimations(elements) {
    if (!elements.length) return;
    elements.forEach(element => {
      this.initScrollAnimation(element);
    })
  }

  initScrollAnimation(element) {
    // Initiates an intersection observer for section/grid animations
    if (this.isGrid(element)) {
      window.eight.animationEngine.initAnimation({
        items: this.getGridItems(element),
        elementToObserve: element,
        threshold: this.getThreshold(element),
        delay: this.delay
      });
    } else {
      window.eight.animationEngine.initAnimation({
        items: [ element ],
        elementToObserve: element,
        threshold: this.getThreshold(element)
      });
    }
  }

  animateElement(element) {
    if (!element) return;
    if (this.isGrid(element)) {
      window.eight.animationEngine.initAnimation({
        items: this.getGridItems(element),
        delay: this.delay
      });
    } else {
      window.eight.animationEngine.initAnimation({
        items: [ element ]
      });
    }
  }

  resetAnimation(element) {
    if (!element) return;
    if (this.isGrid(element)) {
      window.eight.animationEngine.resetAnimations(this.getGridItems(element));
    } else {
      window.eight.animationEngine.resetAnimations([ element ]);
    }
  }

  sectionLoadHandler(e) {
    // Manually animate elements when section reloads
    const elementsToAnimate = e.target.querySelectorAll('[data-armada-animation]');
    if (!elementsToAnimate.length) return;
    elementsToAnimate.forEach(element => {
      this.animateElement(element);
    });
  }

  isGrid(element) {
    return element.dataset.armadaAnimation == "grid" || element.dataset.armadaAnimation == "grid-on-scroll";
  }

  getGridItems(element) {
    return element.querySelectorAll('[data-armada-animation^="grid-item"]');
  }

  getThreshold(element) {
    return element.getAttribute('data-armada-animation-threshold');
  }

  get onScrollElements() {
    return document.querySelectorAll('[data-armada-animation$="-on-scroll"]');
  }

  get delay() {
    return this.getAttribute('data-armada-animation-delay');
  }
}

customElements.define('armada-animation', ArmadaAnimation);

})();

/******/ })()
;