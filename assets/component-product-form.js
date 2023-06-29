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


class ProductForm extends HTMLElement {
  constructor() {
    super();

    if(!this.getAttribute('product')) return;

    this.sectionId = this.getAttribute('section-id');
    this.setButton = this.setButton.bind(this);
  }

  connectedCallback() {
    (0,_weareeight_armada_dist_utils_isArmadaLoaded__WEBPACK_IMPORTED_MODULE_0__.isArmadaLoaded)(this.init.bind(this));
    document.addEventListener('ARMADA:TRANSLATION:SYNC', this.setButton(false, true));
  }

  init() {
    if(this.isQuickAdd || !this.product) return;

    this.templateContent = this.querySelector(`template#product-form-${this.sectionId}-${this.product.id}`).content;

    this.loadingButtonHtml = this.templateContent.querySelector('[data-button-loading]').outerHTML;

    this.setInitialVariant();

    this.optionInputs = [];

    if(this.optionType === 'dropdowns') {
      this.optionInputs = this.querySelectorAll('[data-name="product-option-select"]');
    }
    else if(this.optionType === 'buttons') {
      this.optionInputs = this.querySelectorAll('[data-name="product-option-radio"]');
    }

    this.buttons = this.querySelectorAll('[data-name="product-submit"][data-product-form-block="true"]');
    this.buttonWraps = this.querySelectorAll('[data-name="product-submit-wrapper"][data-product-form-block="true"]');

    this.setInitialValues();
    this.setEventListeners();
    this.initScrollAnimations();

    window.eight.armada.elementRegistry.register({key: 'product-form', assetPath: '/assets/component-product-form.min.js'});
  }

  setInitialVariant() {
    //Get querystring to check for a variant ID
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    
    const variantId = params.variant;
    
    if (variantId && !this.forceSelection) {
      const productVariants = this.product.variants;
      const matchingId = productVariants.find(variant => variant.id == variantId);

      //Set the current variant equal to the selected variant on reload
      this.currentVariant = this.forceSelection ? null : matchingId;

      //Update the image on reload
      if(window.eight.eventsEngine) {
        window.eight.eventsEngine.namedEvents.changeVariant(this.product.id, this.currentVariant.id, this.currentVariant, this.scopeId);
      }
    } else {
      //Default to the first available variant
      this.currentVariant = this.forceSelection ? null : window.eight.productEngine.firstAvailableVariant(this.product);
    }
  }

  setPrice() {
    this.priceElem = document.querySelectorAll(`product-price[section-id="${this.sectionId}"][use-variant="true"]`);
    this.priceElem.forEach(priceEl => {
      let discountVal = priceEl.getAttribute('discount-value');
      let discountAmt = 0;

      if (discountVal && discountVal != 'hide' && this.currentVariant.compare_at_price) {
        discountVal == 'value' ?
        discountAmt = this.currentVariant.compare_at_price - this.currentVariant.price :
        discountAmt = Math.round((this.currentVariant.compare_at_price - this.currentVariant.price) * 100 / this.currentVariant.compare_at_price / 1) + '%';
      }

      if(priceEl && this.currentVariant) {
        priceEl.setAttribute('price', this.currentVariant.price);
        priceEl.setAttribute('compare-at', this.currentVariant.compare_at_price);
        priceEl.setAttribute('discount', `${discountAmt}`);
        priceEl.setAttribute('unit-price', this.currentVariant.unit_price);
        priceEl.setAttribute('unit-price-measurement', JSON.stringify(this.currentVariant.unit_price_measurement));
      }

      if(priceEl.classList.contains('hidden')) {
        priceEl.classList.remove('hidden')
      }
    });

    this.hideSummaryPrice();
  }

  hideSummaryPrice() {
    if (this.summaryPriceIsHidden) return;

    this.summaryPrices = document.querySelectorAll('[data-armada-selector="product-form-summary-price"]');
    if (this.summaryPrices.length) {
      this.summaryPrices.forEach(summaryPrice => {
        summaryPrice.classList.add('hidden');
      });
      this.setAttribute('summary-price-hidden', true);
    }
  }

  setPickup() {
    const pickupElem = document.querySelector(`pickup-availability[section-id="${this.sectionId}"]`);
    if (!pickupElem) return;

    const id = this.currentVariant ? this.currentVariant.id : null;
    pickupElem.setAttribute('data-variant-id', id);
  }

  setValues() {
    if(!this.currentVariant || !this.optionInputs) return;

    this.currentVariant.options.forEach((option, index) => {
      if(this.optionType === 'dropdowns') {
        if(this.optionInputs?.length > 0) {
          this.optionInputs[index].value = option;
        }
      }
      else {
        // Radio buttons.
        this.optionInputs.forEach((input) => {
          // Case insensitive.
          if(input.value.localeCompare(option, undefined, { sensitivity: 'base' }) === 0) {
            input.checked = true;
          }
        });
      }
    });
  }

  setBasicSelectValue() {
    // Note that the basic select could be hidden.
    if(!this.basicSelect) return;

    if(!this.currentVariant) {
      // Set to 'unavailable' state - 'Choose' button text.
      this.basicSelect.value = '';
    }
    else {
      this.basicSelect.value = this.currentVariant.id;
    }
  }

  setInstallmentsSelectValue() {
    if(!this.installmentsSelect) return;

    if(!this.currentVariant) {
      this.installmentsSelect.value = '';
    }
    else {
      this.installmentsSelect.value = this.currentVariant.id;
    }

    // Emit the change event on the installments form to trigger the banner update
    const event = new Event('change', { bubbles: true });
    this.installmentsSelect.dispatchEvent(event);

    // Unhide installments form
    const installmentsForm = this.installmentsSelect.closest('form');
    if (installmentsForm && installmentsForm.classList.contains('hidden')) {
      installmentsForm.classList.remove('hidden');
    }
  }

  get dynamicButtonsForm() {
    return this.querySelector('#dynamic-buttons-form') ? this.querySelector('#dynamic-buttons-form') : null;
  }

  checkDynamicButtons() {
    if(!this.dynamicButtonsForm) return;

    let variantAvailable;
    if(this.currentVariant) {
      if(!this.currentVariant.available) {
        variantAvailable = false; //soldout variant
      } else {
        variantAvailable = true;
      }
    } else {
      variantAvailable = false; //non-existent/unavailable variant
    };

    // hide DynBtns if variant is sold-out or if it doesn't exist
    if(!variantAvailable) {
      this.dynamicButtonsForm.classList.add('hidden');
    } else {
      this.dynamicButtonsForm.classList.remove('hidden');

      this.setDynamicFormVariantId();
    }
  }

  setDynamicFormVariantId() {
    const dynamicFormIds = this.querySelectorAll('input[data-name="dynamic_buttons_variant_id"]');
    if(!dynamicFormIds || !this.currentVariant) return;

    dynamicFormIds.forEach((IdInput) => {
      IdInput.value = this.currentVariant.id;
    });
  }

  setInitialValues() {
    if(this.forceSelection) return;
    this.setValues();
    this.setBasicSelectValue();
  }

  setEventListeners() {
    document.addEventListener(`${window.eight.constants.events["ARMADA:VARIANT:CHANGE"]}`, this.handleVariantChangeEvent.bind(this));

    if(this.basicSelect) {
      this.basicSelect.addEventListener('change', this.handleOptionChange.bind(this));
    }

    this.optionInputs.forEach((select) => {
      select.addEventListener('change', this.handleOptionChange.bind(this));
    });

    if(this.buttons) {
      this.buttons.forEach((btn) => {
        btn.addEventListener('click', this.handleButtonClick.bind(this));
      });
    }
  }

  initScrollAnimations() {
    const animationElements = this.querySelectorAll('[data-armada-animation$="-on-scroll"]');
    if (!animationElements) return;
    animationElements.forEach(animationElement => {
      window.eight.animationEngine.initAnimation({
        items: [ animationElement ],
        elementToObserve: animationElement
      });
    });
  }

  handleOptionChange(e) {
    // Do we have a selection in all options?
    if (!this.allOptionsChosen) return;

    const prevTitle = this.currentVariant ? this.currentVariant.title : '';

    // Basic product select has changed.
    if(e.target.getAttribute('name') === 'id') {
      const varId = parseInt(e.target.options[e.target.selectedIndex].value);
      this.currentVariant = this.product.variants.find((variant) => variant.id === varId);
    }
    else {
      // One of the multiple options has changed.
      this.currentVariant = window.eight.productEngine.findVariant(this.product, this.optionIndexes);
    }

    this.setButton();

    if(window.eight.eventsEngine && this.currentVariant.title !== prevTitle) {
      window.eight.eventsEngine.namedEvents.changeVariant(this.product.id, this.currentVariant.id, this.currentVariant, this.scopeId);
    }
  }

  handleButtonClick(e) {
    // This will never fire for sold out / unavailable as those buttons are disabled.
    e.preventDefault();

    //Get all custom properties on the product template
    const productProperties = this.querySelectorAll('[name^=properties]:not([type="checkbox"]):not([type="radio"]):not([disabled]), [name^=properties][type="checkbox"]:not([disabled]):checked, [name^=properties][type="radio"]:not([disabled]):checked');
    const properties = {};

    productProperties.forEach(property => {
      //Construct entry name
      let propertyKey = property.name.substring(
        property.name.lastIndexOf("[") + 1, 
        property.name.lastIndexOf("]")
      );

      //Handleize property key (remove spaces between words)
      propertyKey = propertyKey.replace(/\s+/g, '-').toLowerCase();

      //Get entry value
      const propertyValue = property.value;

      //Construct object
      if (!propertyValue) return;
      properties[propertyKey] = propertyValue;
    });

    this.setButton('loading');

    // Add to cart.
    const formData = {
      items: [
        {
          id: this.currentVariant.id,
          quantity: this.quantity,
          selling_plan: this.sellingPlanId,
          properties: {
            ...properties
          }
        },
      ],
    };

    window.eight.cartEngine.addToCart(
      formData,
      'items',
      this.atcSuccess.bind(this),
      this.atcError.bind(this),
    );
  }

  handleVariantChangeEvent(e) {
    const { variantId, productId, scopeId } = e.detail;

    if(productId !== this.product.id) return;
    if (scopeId != this.scopeId) return;

    this.currentVariant = this.product.variants.find((v) => v.id === variantId);
    this.setPrice();
    this.setPickup();
    this.setValues();
    this.setBasicSelectValue();
    this.setInstallmentsSelectValue();
    this.checkDynamicButtons();
    this.setButton();
  }

  atcSuccess(data) {
    this.setButton('added');

    // Go to the cart page if the "Add to cart" action is "page"
    if (this.cartTypePage) {
      window.location = this.cartPageUrl;
    }

    // Change button back to 'add'.
    setTimeout(() => {
      this.setButton(false, true);
    }, window.eight.product.addedTimeout);
  }

  atcError(data) {
    console.warn('Error adding to cart: ', data);
    this.setButton(false, true);
  }

  setButton(mode = false, reset = false) {
    if(!this.buttons) return;

    if(!mode) {
      let buttonText = window.eight.translationEngine.strings.addToCart;
      let disabled = false;

      // Add to cart
      // Choose
      //    = Variant not pre-selected, cannot add to cart until all options chosen.
      // Sold out
      //    = variant exists but has no stock
      // Unavailable
      //    = Variant does not exist at all
      //      e.g. these ARE available:
      //      M / Blue
      //      L / Red
      //      + User selects L / Blue from dropdowns == unavailable.
      // Preorder
      //    = Preorder setting is selected and (inventory policy is set to continue or there is no inventory management system)
      //      Works as Add to cart, different button naming

      if(this.forceSelection && !this.allOptionsChosen) {
        buttonText = window.eight.translationEngine.strings.choose;
        disabled = true;

        this.buttons.forEach((btn) => {
          btn.ariaLabel = window.eight.translationEngine.strings.chooseVariant;
          btn.classList.add('opacity-20');
        });
      }
      else if(!this.currentVariant) {
        buttonText = window.eight.translationEngine.strings.unavailable;
        disabled = true;
        this.buttons.forEach((btn) => {
          btn.ariaLabel = window.eight.translationEngine.strings.isUnavailable;
        });
      }
      else if(!this.currentVariant.available) {
        buttonText = window.eight.translationEngine.strings.soldOut;
        disabled = true;
        this.buttons.forEach((btn) => {
          btn.ariaLabel = `'${this.currentVariant.title}' ${window.eight.translationEngine.strings.isSoldOut}`;
        });
      }
      else if(this.preorder && (inventory_policy[this.currentVariant.id] == 'continue' || this.currentVariant.inventory_management == null)) {
        buttonText = window.eight.translationEngine.strings.preorder;
        this.buttons.forEach((btn) => {
          btn.ariaLabel = `'${this.currentVariant.title}' ${window.eight.translationEngine.strings.preorder}`;
        });
      }
      else {
        this.buttons.forEach((btn) => {
          btn.classList.remove('opacity-20');
        });
      }

      this.buttons.forEach((btn) => {
        const btnTextContainer = btn.querySelector('[data-armada-button-text]') ? btn.querySelector('[data-armada-button-text]') : btn; 
        btnTextContainer.textContent = buttonText;
        btn.disabled = disabled;
      });

      if(reset) {
        this.buttonWraps.forEach((btnWrap, index) => {
          btnWrap.innerHTML = this.buttons[index].outerHTML;
        });

        this.buttons = this.querySelectorAll('[data-name="product-submit"][data-product-form-block="true"]');
        this.buttons.forEach((btn) => {
          btn.addEventListener('click', this.handleButtonClick.bind(this));
        });
      }
    }
    else if(mode === 'loading') {
      this._buttons = this.buttons;
      this.buttonWraps.forEach((btnWrap) => {
        btnWrap.innerHTML = this.loadingButtonHtml;
      });
    }
    else if(mode === 'added') {
      this._buttons.forEach((_btn) => {
        const _btnTextContainer = _btn.querySelector('[data-armada-button-text]') ? _btn.querySelector('[data-armada-button-text]') : _btn;
        if (_btnTextContainer) _btnTextContainer.textContent = window.eight.translationEngine.strings.added;
        _btn.ariaLabel = window.eight.translationEngine.strings.successfully;
        _btn.disabled = true;
        _btn.classList.add('opacity-20');
      });

      this.buttonWraps.forEach((btnWrap, index) => {
        btnWrap.innerHTML = this._buttons[index].outerHTML;
      });
    }
  }

  get product() {
    return window.eight.safeJSONParse(this.getAttribute('product'));
  }

  get scopeId() {
    return this.getAttribute('scope-id');
  }

  get isQuickAdd() {
    return this.getAttribute('quick-add') === 'true';
  }

  get quantity() {
    return this.querySelector('input[name="quantity"]:not(.quantity-no-js-quantity)') ? this.querySelector('input[name="quantity"]:not(.quantity-no-js-quantity)').value : 1;
  }

  get sellingPlanId() {
    return new FormData(this.querySelector('form')).get('selling_plan');
  }

  get forceSelection() {
    return this.getAttribute('force-selection') === 'true';
  }

  get cartTypePage() {
    return document.querySelector('body').getAttribute('data-armada-cart-type-page');
  }

  get cartPageUrl() {
    return document.querySelector('body').getAttribute('data-cart-url');
  }

  get preorder() {
    return this.getAttribute('preorder') === 'true';
  }

  get basicSelect() {
    return this.querySelector('select[data-armada-selector^="basic-product-select-"]')
  }

  get installmentsSelect() {
    return this.querySelector('[data-armada-selector="installments-select"]');
  }

  get summaryPriceIsHidden() {
    return this.getAttribute('summary-price-hidden') === 'true';
  }

  get radioGroups() {
    let groups = [];

    for (let index = 1; index <= this.product.options.length; index++) {
      const elems = this.querySelectorAll(`[name="${this.sectionId}-product-${this.product.id}-option-${index}"]`);
      if(elems.length > 0) groups.push(elems);
    }

    return groups;
  }

  get optionType() {
    return this.getAttribute('option-type') ? this.getAttribute('option-type') : 'dropdowns';
  }

  get optionIndexes() {
    if(!this.optionInputs) return false;

    let indexes = [];

    if(this.optionType === 'dropdowns') {
      Array.from(this.optionInputs).forEach((s) => {
        // Disregard disabled option, that is the 'label inside select' feature.
        const selIndex = s.options[0].disabled === true ? s.selectedIndex-1 : s.selectedIndex;
        indexes.push(selIndex);
      });
    }
    else if (this.optionType === 'buttons') {
      this.radioGroups.forEach((group) => {
        Array.from(group).forEach((s, radioIndex) => {
          if(s.checked) {
            indexes.push(radioIndex);
          }
        });
      });
    }

    return indexes;
  }

  get optionVals() {
    if(!this.optionInputs) return false;

    if(this.optionType === 'dropdowns') {
      return Array.from(this.optionInputs).map((s) => s.value);
    }
    else if (this.optionType === 'buttons') {
      let radioVals = [];

      this.radioGroups.forEach((group, index) => {
        const checkedVal = Array.from(group).filter(s => s.checked).map((s) => s.value);
        radioVals[index] = checkedVal[0] ? checkedVal[0] : '';
      });

      return radioVals;
    }
  }

  get allOptionsChosen() {
    if(this.optionVals.length > 0) {
      return this.optionVals ? !this.optionVals.some((v) => v === '') : false;
    }
    else if (this.basicSelect) {
      return this.basicSelect.value > '' ? true : false;
    }

    return false;
  }
}

window.customElements.define('product-form', ProductForm);

})();

/******/ })()
;