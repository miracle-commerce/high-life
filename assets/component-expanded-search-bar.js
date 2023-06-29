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

/***/ }),

/***/ 514:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.toggleSearch=void 0,t.toggleSearch=(e,t,s,i,o,c,n,a,l,d)=>{const r=document.querySelector(i),u=document.querySelector(o),y=document.querySelector(c),f=document.querySelector(n),p=document.querySelector(a),h=document.querySelector(l);if(!r||!f||"false"==t)return;const g=()=>{r.style.top="0"},m=()=>{"true"==s&&u&&y&&(y.style.height=u.offsetHeight+"px")},v=e=>{"hide"==e?(r.classList.add("h-0"),r.classList.add("opacity-0"),r.classList.add("invisible")):"show"==e?(r.classList.remove("h-0"),r.classList.remove("opacity-0"),r.classList.remove("invisible")):(r.classList.toggle("h-0"),r.classList.toggle("opacity-0"),r.classList.toggle("invisible"))},L=()=>{p&&f.value.length&&(p.classList.remove("hidden"),p.classList.add("grid"))},S=()=>{h&&!f.value.length&&(h.classList.remove("hidden"),window.eight.eventsEngine.namedEvents.animate(h))};"click"!==e.type&&13!==e.keyCode&&"focusin"!=e.type||(g(),m(),v(),r.classList.contains("h-0")&&r.classList.contains("opacity-0")&&r.classList.contains("invisible")?e.currentTarget.focus():r.addEventListener("transitionend",(()=>{f.focus()}),{once:!0}),L(),S()),window.Shopify.designMode&&e.detail.sectionId==d&&(g(),m(),"shopify:section:select"===e.type&&v("show"),"shopify:section:deselect"===e.type&&v("hide"),L(),S())}})(),e})()}));

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
/* harmony import */ var _weareeight_armada_dist_utils_toggleSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var _weareeight_armada_dist_utils_toggleSearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weareeight_armada_dist_utils_toggleSearch__WEBPACK_IMPORTED_MODULE_1__);


//Use Armada 'toggleSearch' to handle search toggling
//Params: event (event), predictiveSearchEnabled (boolean), searchOverlaysHeader (boolean), searchBar (element),
//mainHeader (element), searchForm (element), searchInput (element), searchResults (boolean), searchBlocks (element)


class ExpandedSearchBar extends HTMLElement {
  constructor() {
    super();
    this.searchInput = this.querySelector('input[type="search"]');
    this.searchBtn = this.querySelector('[data-armada-selector="expanded-search-bar-button"]');
    this.predictiveSearchEnabled = this.dataset.predictiveSearchEnabled;
    this.searchOverlaysHeader = this.dataset.searchOverlaysHeader;

    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init.bind(this));
  }

  init() {

    // As we're typing, check if the input has content or if it's empty and show/hide the clear icon
    this.handleSearchInput('input[type="search"]', '.close-icon');

    ['click', 'keypress', 'focusin'].forEach(ev => {
      this.searchInput.addEventListener(ev, (ev) => {
        (0,_weareeight_armada_dist_utils_toggleSearch__WEBPACK_IMPORTED_MODULE_1__.toggleSearch)(ev, this.predictiveSearchEnabled, this.searchOverlaysHeader, 'search-bar', 'header-basic', 'search-bar form', 'search-bar input[type="search"]', '[data-armada-selector="predictive-search-results"]', '[data-armada-selector="predictive-search-blocks"]');
      });
    });

    if (this.searchBtn) {
      ['click', 'keypress'].forEach(ev => {
        this.searchBtn.addEventListener(ev, (ev) => {
          ev.preventDefault();
          (0,_weareeight_armada_dist_utils_toggleSearch__WEBPACK_IMPORTED_MODULE_1__.toggleSearch)(ev, this.predictiveSearchEnabled, this.searchOverlaysHeader, 'search-bar', 'header-basic', 'search-bar form', 'search-bar input[type="search"]', '[data-armada-selector="predictive-search-results"]', '[data-armada-selector="predictive-search-blocks"]');
        });
      });
    }

    window.eight.armada.elementRegistry.register({key: 'expanded-search-bar', assetPath: '/assets/component-expanded-search-bar.min.js'});
  }

  handleSearchInput(inputSelector, closeIconSelector) {
    if (!inputSelector || !closeIconSelector) return;

    let input = this.querySelector(inputSelector);
    let closeIcon = this.querySelector(closeIconSelector);

    input.addEventListener('input', () => {
      if (input.value.length) {
        closeIcon.classList.remove('hidden');
        closeIcon.classList.add('flex');
      } else {
        closeIcon.classList.remove('flex');
        closeIcon.classList.add('hidden');
      }
    });

    ['click', 'keypress'].forEach(evt => {
      closeIcon.addEventListener(evt, () => {
        input.value = '';
        input.focus();
        closeIcon.classList.remove('flex');
        closeIcon.classList.add('hidden');
      });
    });

    // Prevents interaction with search bar input when predictive search is opened on click
    if (this.predictiveSearchEnabled == 'true') {
      input.addEventListener('mousedown', (e) => e.preventDefault());
    }
  }
}

customElements.define('expanded-search-bar', ExpandedSearchBar);

})();

/******/ })()
;