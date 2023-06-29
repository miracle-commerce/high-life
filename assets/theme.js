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

/***/ 877:
/***/ ((module) => {

module.exports = {
  'sm': '640px',
  // => @media (min-width: 640px) { ... }

  'md': '769px',
  // => @media (min-width: 769px) { ... }

  'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }

  'upto-sm': { 'max' : '639px' },
  // => @media (max-width: 639px) { ... }

  'upto-md': { 'max' : '768px' },
  // => @media (max-width: 768px) { ... }

  'upto-lg': { 'max' : '1023px' },
  // => @media (max-width: 1023px) { ... }

  'upto-xl': { 'max' : '1279px' },
  // => @media (max-width: 1279px) { ... }

  'upto-2xl': { 'max' : '1535px' },
  // => @media (max-width: 1535px) { ... }

  'no-touch-hover': { 'raw' : '(hover: hover)' },
  // => @media (hover: hover) { ... }
}


/***/ }),

/***/ 682:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={};return((e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentBreakpoint=t.getBreakpointValue=void 0,t.getBreakpointValue=e=>{var t,i;if(e&&(null===(i=null===(t=window.eight)||void 0===t?void 0:t.tailwind)||void 0===i?void 0:i.screens[e]))return parseInt(window.eight.tailwind.screens[e].slice(0,window.eight.tailwind.screens[e].indexOf("px")))},t.getCurrentBreakpoint=()=>{var e,i;if(!(null===(i=null===(e=window.eight)||void 0===e?void 0:e.tailwind)||void 0===i?void 0:i.screens))return;let[n]=Object.keys(window.eight.tailwind.screens),o=0;const r=Object.keys(window.eight.tailwind.screens).filter((e=>"string"==typeof window.eight.tailwind.screens[e]));for(const e of r){const i=t.getBreakpointValue(e);i>o&&window.innerWidth>=i&&(o=i,n=e)}return n}})(0,e),e})()}));

/***/ }),

/***/ 679:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={533:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EVENTS=void 0,t.EVENTS={"ARMADA:LOADED":"ARMADA:LOADED","ARMADA:NOTIFICATIONS:EVENT":"ARMADA:NOTIFICATIONS:EVENT","ARMADA:LOAD:SCRIPT":"ARMADA:LOAD:SCRIPT","ARMADA:LOAD:CART":"ARMADA:LOAD:CART","ARMADA:LOAD:PRODUCTS":"ARMADA:LOAD:PRODUCTS","ARMADA:ANALYTICS:DISPATCH":"ARMADA:ANALYTICS:DISPATCH","ARMADA:LAZY:CONTENT":"ARMADA:LAZY:CONTENT","ARMADA:LAZY:SECTION":"ARMADA:LAZY:SECTION","ARMADA:CART:ADD":"ARMADA:CART:ADD","ARMADA:CART:ERROR":"ARMADA:CART:ERROR","ARMADA:CART:GET":"ARMADA:CART:GET","ARMADA:CART:CHANGE":"ARMADA:CART:CHANGE","ARMADA:CART:CLEAR":"ARMADA:CART:CLEAR","ARMADA:CART:UPDATE":"ARMADA:CART:UPDATE","ARMADA:CART:COUNT:CHANGE":"ARMADA:CART:COUNT:CHANGE","ARMADA:VARIANT:CHANGE":"ARMADA:VARIANT:CHANGE","ARMADA:QUANTITY:CHANGE":"ARMADA:QUANTITY:CHANGE","ARMADA:SLIDER:CHANGE":"ARMADA:SLIDER:CHANGE","ARMADA:PRODUCTCARD:VARIANT:CHANGE":"ARMADA:PRODUCTCARD:VARIANT:CHANGE","ARMADA:NAVIGATION:DROPDOWN:CLOSE":"ARMADA:NAVIGATION:DROPDOWN:CLOSE","ARMADA:NAVIGATION:MOBILE:OPEN":"ARMADA:NAVIGATION:MOBILE:OPEN","ARMADA:NAVIGATION:MOBILE:CLOSE":"ARMADA:NAVIGATION:MOBILE:CLOSE","ARMADA:PROGRESSBAR:PAUSE":"ARMADA:PROGRESSBAR:PAUSE","ARMADA:PROGRESSBAR:PLAY":"ARMADA:PROGRESSBAR:PLAY","ARMADA:MODAL:OPEN":"ARMADA:MODAL:OPEN","ARMADA:MODAL:CLOSE:ALL":"ARMADA:MODAL:CLOSE:ALL","ARMADA:SECTION:FETCH":"ARMADA:SECTION:FETCH","ARMADA:SEARCH:TOGGLE":"ARMADA:SEARCH:TOGGLE","ARMADA:NOTIFICATIONS:LOADED":"ARMADA:NOTIFICATIONS:LOADED","ARMADA:ANIMATION:ANIMATE":"ARMADA:ANIMATION:ANIMATE","ARMADA:ANIMATION:RESET":"ARMADA:ANIMATION:RESET","ARMADA:TRANSLATION:SYNC":"ARMADA:TRANSLATION:SYNC","ARMADA:FORM:SUBMIT":"ARMADA:FORM:SUBMIT","ARMADA:MEDIA:LOADED":"ARMADA:MEDIA:LOADED","ARMADA:MEDIA:CHANGED":"ARMADA:MEDIA:CHANGED"},t.default=t.EVENTS},37:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CONSTANTS=void 0;const r=i(n(533));t.CONSTANTS={nameSpace:"eight",events:Object.assign({},r.default)},t.default=t.CONSTANTS},591:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.cartEngine=void 0;const r=i(n(293)),o=i(n(400)),a=i(n(139)),s=i(n(857)),u=i(n(425));t.cartEngine={addToCart:r.default,updateCart:u.default,changeCart:o.default,getCart:s.default,clearCart:a.default}},293:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.addToCart=void 0;const o=r(n(892)),a=r(n(857));t.addToCart=(e,t="items",n,r)=>i(void 0,void 0,void 0,(function*(){try{const i=yield fetch(`${window.Shopify.routes.root}cart/add.js`,{method:"POST",headers:"items"===t?{"Content-Type":"application/json"}:{},body:"items"===t?JSON.stringify(e):e});if(200===i.status){const r=yield i.json(),s="items"===t?e.items[0].quantity:"no quantity provided";return o.default("ARMADA:CART:ADD",{response:r,quantity:s}),a.default(),n&&n(r),r}{const e={error:!0,data:yield i.json()};return o.default("ARMADA:CART:ERROR",{error:e}),r&&r(e),e}}catch(e){console.error(e.message),o.default("ARMADA:CART:ERROR",{error:e}),r&&r({error:!0,status:500,message:e.message})}})),t.default=t.addToCart},400:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.changeCart=void 0;const o=r(n(892)),a=r(n(857));t.changeCart=(e,t,n,r)=>i(void 0,void 0,void 0,(function*(){try{const i=yield fetch(`${window.Shopify.routes.root}cart/change.js`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(200===i.status){const e=yield i.json();o.default("ARMADA:CART:CHANGE",{response:e}),a.default(),n&&n(e);const{sections:r}=e;if(r&&t)for(let e in r){const n=(new DOMParser).parseFromString(r[e],"text/html");t.map((e=>{const t=document.querySelector(e),i=n.querySelector(e);i&&(t.innerHTML=i.innerHTML)}))}return e}{const e={error:!0,data:yield i.json()};return o.default("ARMADA:CART:ERROR",{error:e}),r&&r(e),e}}catch(e){console.error(e.message),r&&r({error:!0,status:500,message:e.message})}})),t.default=t.changeCart},139:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.clearCart=void 0;const o=r(n(892)),a=r(n(857));t.clearCart=e=>i(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${window.Shopify.routes.root}cart/clear.js`);if(200===t.status){const n=yield t.json();return o.default("ARMADA:CART:CLEAR",{response:n}),a.default(),e&&e(n),n}{const e={error:!0,data:yield t.json()};return o.default("ARMADA:CART:ERROR",{error:e}),e}}catch(e){console.error(e.message)}})),t.default=t.clearCart},857:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getCart=void 0;const o=r(n(892));t.getCart=e=>i(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${window.Shopify.routes.root}cart.js`);if(200===t.status){const n=yield t.json();o.default("ARMADA:CART:GET",{response:n});const{item_count:i}=n;return o.default("ARMADA:CART:COUNT:CHANGE",{count:i}),e&&e(n),n}{const e={error:!0,data:yield t.json()};return o.default("ARMADA:CART:ERROR",{error:e}),e}}catch(e){console.error(e.message)}})),t.default=t.getCart},467:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.globalCart=void 0;const o=r(n(857)),a=r(n(892)),s=r(n(533));class u{constructor(){this.cart={},this.highest={},this.init=this.init.bind(this),this.init()}setListeners(){document.addEventListener("ARMADA:CART:GET",(e=>this.update(e)))}init(){var e,t,n,r;return i(this,void 0,void 0,(function*(){if(!((null===(n=null===(t=null===(e=window.eight)||void 0===e?void 0:e.cartEngine)||void 0===t?void 0:t.cart)||void 0===n?void 0:n.length)>0||(null===(r=window.eight.cartEngine)||void 0===r?void 0:r.globalCart)))try{const e=yield o.default();return this.cart=Object.assign({},e),this.setHighest(),a.default(s.default["ARMADA:LOAD:CART"]),this.setListeners(),this.cart}catch(e){console.log("Armada globalCart error:",e)}}))}update(e){var t;if(null===(t=e.detail)||void 0===t?void 0:t.response)return this.cart=Object.assign({},e.detail.response),this.setHighest(),this.cart}setHighest(){0===this.cart.items.length?this.highest={}:this.highest=this.cart.items.reduce(((e,t)=>e.price>t.price?e:t))}}t.globalCart=u,t.default=u},425:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.updateCart=void 0;const o=r(n(892)),a=r(n(857));t.updateCart=(e,t="updates",n,r)=>i(void 0,void 0,void 0,(function*(){try{const i=yield fetch(`${window.Shopify.routes.root}update.js`,{method:"POST",headers:"updates"===t?{"Content-Type":"application/json"}:{},body:"updates"===t?JSON.stringify(e):e});if(200===i.status){const e=yield i.json();return o.default("ARMADA:CART:UPDATE",{response:e}),a.default(),n&&n(e),e}{const e={error:!0,data:yield i.json()};return o.default("ARMADA:CART:ERROR",{error:e}),r&&r(e),e}}catch(e){console.error(e.message),r&&r({error:!0,status:500,message:e.message})}})),t.default=t.updateCart},892:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.emit=void 0,t.emit=(e,t)=>{try{const n=new CustomEvent(e,{detail:t});document.dispatchEvent(n)}catch(e){return console.error(e),!0}},t.default=t.emit},44:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.eventsEngine=void 0;const r=i(n(892)),o=n(803),a=n(945),s=n(223),u=n(97),d=n(79);t.eventsEngine={emit:r.default,namedEvents:{changeVariant:o.changeVariant,changeQuantity:a.changeQuantity,openModal:s.openModal,animate:u.animate,resetAnimation:d.resetAnimation}},t.default=t.eventsEngine},97:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.animate=void 0;const r=n(533),o=i(n(892));t.animate=e=>{if(!e)return console.error("Missing animation element");o.default(r.EVENTS["ARMADA:ANIMATION:ANIMATE"],e)},t.default=t.animate},945:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.changeQuantity=void 0;const r=n(533),o=i(n(892));t.changeQuantity=e=>{const{quantity:t}=e;if(void 0===t)return console.error("Missing quantity");o.default(r.EVENTS["ARMADA:QUANTITY:CHANGE"],Object.assign({},e))}},803:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.changeVariant=void 0;const r=n(533),o=i(n(892));t.changeVariant=(e,t,n,i)=>{if(!e||!t)return console.error("Missing product or variant id");if(o.default(r.EVENTS["ARMADA:VARIANT:CHANGE"],{productId:e,variantId:t,variant:n,scopeId:i}),"URLSearchParams"in window&&a()){let e=new URLSearchParams(window.location.search);e.set("variant",t);var s=window.location.pathname+"?"+e.toString();history.pushState(null,"",s)}};const a=()=>!!document.querySelector("body.template-product");t.default=t.changeVariant},223:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.openModal=void 0;const r=n(533),o=i(n(892));t.openModal=e=>{if(!e)return console.error("Missing modal id");o.default(r.EVENTS["ARMADA:MODAL:OPEN"],e)},t.default=t.openModal},79:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.resetAnimation=void 0;const r=n(533),o=i(n(892));t.resetAnimation=e=>{if(!e)return console.error("Missing animation element");o.default(r.EVENTS["ARMADA:ANIMATION:RESET"],e)},t.default=t.resetAnimation},967:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useNotifications=void 0;const r=i(n(924));function o(e){return new r.default(e)}t.useNotifications=o,t.default=o},924:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.listEngine=void 0;const r=i(n(892));class o{constructor(e){this.eventKey=e,this.list=[]}addToList(e){const t=e.id?e.id:""+(Date.now()-this.list.length);return this.list.push(Object.assign({},e,{id:t})),this.eventKey&&r.default(this.eventKey,{list:this.list,type:"add",id:t}),this.list}removeFromList(e){const t=this.list.filter((t=>t.id!==e));this.list=[...t],this.eventKey&&r.default(this.eventKey,{list:this.list,type:"remove",id:e})}clearErrors(){return this.list=this.list.filter((e=>!e.error)),this.eventKey&&r.default(this.eventKey,{list:this.list,type:"clear_errors"}),this.list}clearList(){return this.list=[],this.eventKey&&r.default(this.eventKey,{list:this.list,type:"clear"}),this.list}}t.listEngine=o,t.default=o},374:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productEngine=void 0;const i=n(754),r=n(821),o=n(11),a=n(497);t.productEngine={formatMoney:i.formatMoney,firstAvailableVariant:r.firstAvailableVariant,findVariant:o.findVariant,hasVariants:a.hasVariants}},11:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.findVariant=void 0,t.findVariant=(e,t)=>{if(!e)return;const n=(()=>{let t=[];for(const[n]of Object.entries(e.options)){t[n]={};let i=[];Array.from(e.variants).forEach((e=>{i.push(e[`option${parseInt(n)+1}`])}));const r=[...new Set(i)];t[n]=r}return t})();let i={};e.variants.forEach((e=>{i[e.id]=[],e.options.forEach(((t,r)=>{const o=n[r].findIndex((e=>e===t));i[e.id].push(o)}))}));const r=Object.keys(i).find((e=>JSON.stringify(i[e])===JSON.stringify(t)));return!!r&&e.variants.find((e=>e.id.toString()===r))}},821:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.firstAvailableVariant=void 0,t.firstAvailableVariant=e=>{if(!(null==e?void 0:e.variants))return;return e.variants.find((e=>e.available))||e.variants[0]}},754:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatMoney=void 0,t.formatMoney=(e,t)=>{"string"==typeof e&&(e=e.replace(".",""));let n="";const i=/\{\{\s*(\w+)\s*\}\}/,r=t||"${{amount}}";function o(e,t=2,n=",",i="."){if("number"==typeof e&&isNaN(e)||null==e)return"0";"string"==typeof e&&(e=Number(e));const r=(e=(e/100).toFixed(t)).split(".");return(r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${n}`)+(r[1]?i+r[1]:"")).toString()}switch(r.match(i)[1]){case"amount":n=o(e,2);break;case"amount_no_decimals":n=o(e,0);break;case"amount_with_comma_separator":n=o(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=o(e,0,".",",")}return r.replace(i,n)}},497:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hasVariants=void 0,t.hasVariants=e=>!!(null==e?void 0:e.variants)&&null!==e.variants[0].public_title},31:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.armadaElementRegistry=void 0;class n{constructor(){this.registry={}}checkScriptLoaded(e){return!!this.registry[e]}register(e){return this.checkScriptLoaded(e.key)?Object.assign({},Object.assign({},this.registry[e.key]),{duplicateRegister:!0}):(this.registry[e.key]=Object.assign({},Object.assign({},e),{loaded:!0,duplicateRegister:!1}),this.registry[e.key])}getElementDetails(e){return!!this.registry[e]&&this.registry[e]}}t.armadaElementRegistry=n,t.default=n},740:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(299));t.default=()=>{class e extends HTMLElement{constructor(){super(),this.style.display="none"}connectedCallback(){r.default(this.init.bind(this))}init(){this.querySelectorAll("[data-armada-load-key]").forEach((e=>{const t=e.dataset.armadaLoadKey;if(!window.eight.armada.elementRegistry.checkScriptLoaded(t)){const t=document.createElement("script"),{src:n,defer:i,async:r,type:o}=e;t.src=n,t.defer=i,t.async=r,t.type=o,this.appendChild(t)}}))}}return window.customElements.define("safe-load-scripts",e),!0}},219:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sectionRenderingEngine=void 0;const r=i(n(433)),o=i(n(498));t.sectionRenderingEngine={fetchSection:r.default,fetchRoute:o.default},t.default=t.sectionRenderingEngine},498:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fetchRoute=void 0,t.fetchRoute=(e,t,n)=>{e&&t?fetch(`${e}`).then((e=>{if(e.ok)return e.text();throw new Error("Something went wrong")})).then((e=>{t?(t.innerHTML=e,"function"==typeof n&&n(e)):console.error("FETCH ROUTE: No element provided.")})).catch((e=>{console.error(e)})):console.error("FETCH ROUTE: Missing url route path or target")},t.default=t.fetchRoute},433:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSection=void 0;const r=i(n(892));t.fetchSection=(e,t,n,i,o)=>{if(!e||!t)return void console.error("Please provide a valid url and section id.");const a=e.includes("?");e=a?`${e}&`:`${e}?`;const s=t.map((t=>fetch(`${e}section_id=${t}`)));Promise.all(s).then((e=>Promise.all(e.map((function(e){if(e.ok)return e.text();throw new Error("Something went wrong")}))))).then((a=>{n.forEach(((e,t)=>{if(e){const n=i[t]?(new DOMParser).parseFromString(`${a}`,"text/html").querySelector(i[t]).innerHTML:null;e.innerHTML=n||a}else console.warn("No element provided.")})),r.default("ARMADA:SECTION:FETCH",{url:e,section_ids:t,els:n,selectors:i}),"function"==typeof o&&o(a)})).catch((e=>{console.error(e)}))},t.default=t.fetchSection},447:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTranslations=void 0;const r=i(n(751));function o(){return new r.default}t.useTranslations=o,t.default=o},751:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.translationEngine=void 0;class n{constructor(){this.strings={}}storeLocaleJson(e){this.strings=e,window.eight.eventsEngine.emit(`${window.eight.constants.events["ARMADA:TRANSLATION:SYNC"]}`)}}t.translationEngine=n,t.default=n},313:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.initArmada=void 0;const r=n(591),o=i(n(467)),a=n(374),s=i(n(37)),u=n(44),d=i(n(967)),A=i(n(219)),c=i(n(447)),l=i(n(892)),f=i(n(533)),h=i(n(893)),R=n(412),M=n(31),v=i(n(740)),p=s.default.nameSpace,_={constants:Object.assign({},s.default),cartEngine:Object.assign(Object.assign({},r.cartEngine),{globalCart:new o.default}),productEngine:a.productEngine,eventsEngine:u.eventsEngine,notifications:d.default("ARMADA:NOTIFICATIONS:EVENT"),hooks:{useNotifications:d.default},sectionsEngine:{sectionRenderingEngine:A.default},translationEngine:c.default(),tailwind:{screens:{sm:"640px",md:"769px",lg:"1024px",xl:"1280px","2xl":"1536px"}},safeJSONParse:h.default};t.initArmada=(e,t)=>{let n=Object.assign({},_);t&&t.length>0&&Object.keys(_).forEach((e=>{if(t.includes(e))return delete n[e]}));const i={armada:{loaded:!0,version:R.ARMADA_VERSION,elementRegistry:new M.armadaElementRegistry,elementRegistryLoaded:v.default()}};return window[p]=window[p]?Object.assign({},Object.assign({},window[p]),Object.assign({},n),Object.assign({},e),Object.assign({},i)):Object.assign({},Object.assign({},n),Object.assign({},e),Object.assign({},i)),l.default(f.default["ARMADA:LOADED"])},t.default=t.initArmada},299:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isArmadaLoaded=void 0,t.isArmadaLoaded=e=>{var t,n;const i=!0===(null===(n=null===(t=window.eight)||void 0===t?void 0:t.armada)||void 0===n?void 0:n.loaded);if(!e)return i;i?e():document.addEventListener("ARMADA:LOADED",e)},t.default=t.isArmadaLoaded},893:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.safeJSONParse=void 0,t.safeJSONParse=e=>{if("string"!=typeof e)return!1;try{return JSON.parse(e)}catch(e){return!1}},t.default=t.safeJSONParse},412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ARMADA_VERSION=void 0,t.ARMADA_VERSION="0.1.245"}},t={};return function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}(313)})()}));

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

// EXTERNAL MODULE: ./node_modules/@weareeight/armada/dist/utils/initArmada.js
var initArmada = __webpack_require__(679);
// EXTERNAL MODULE: ./node_modules/@weareeight/armada/dist/utils/getCurrentBreakpoint.js
var getCurrentBreakpoint = __webpack_require__(682);
;// CONCATENATED MODULE: ./src/scripts/version.ts
const THEME_VERSION = "3.0.0";

// EXTERNAL MODULE: ./.tailwind/screens.js
var screens = __webpack_require__(877);
var screens_default = /*#__PURE__*/__webpack_require__.n(screens);
;// CONCATENATED MODULE: ./src/scripts/theme.js
// core imports





// Tailwind config to pass into Armada.
// There is a default for window.eight.tailwind but we're
// also able to override on a per-theme basis.


const tailwind = {
  screens: (screens_default())
}

const product = {
  addedTimeout: 3000 // The time to wait until button goes back to 'add to cart' after 'added'.
}

const theme = {
  version: THEME_VERSION
}

/**
 * Create Theme Object
 * These become available on window.eight
 * Use the below object to include any non global modules.
 * Check the docs for the latest update to core modules.
 */
const includes = {
  // check for core modules that may already be included
  tailwind,
  getBreakpointValue: getCurrentBreakpoint.getBreakpointValue,
  getCurrentBreakpoint: getCurrentBreakpoint.getCurrentBreakpoint,
  product,
  theme
}

// Fire up the blades, raise the black 🏴‍☠️
// ready the cannons, here comes the Armada.
;(0,initArmada.initArmada)(includes)

})();

/******/ })()
;