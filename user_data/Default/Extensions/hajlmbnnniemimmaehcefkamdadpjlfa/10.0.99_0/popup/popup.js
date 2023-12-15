!function(t){function e(e){for(var r,o,i=e[0],a=e[1],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(c&&c(e);u.length;)u.shift()()}var r={},n={18:0,0:0,1:0,2:0,3:0,4:0,5:0,27:0,33:0,35:0,37:0,40:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(t){return o.p+""+t+".js"}(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}n[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=a;o(o.s=613)}([function(t,e,r){"use strict";r.d(e,"t",(function(){return a})),r.d(e,"j",(function(){return s})),r.d(e,"q",(function(){return c})),r.d(e,"s",(function(){return u})),r.d(e,"h",(function(){return l})),r.d(e,"i",(function(){return p})),r.d(e,"n",(function(){return h})),r.d(e,"k",(function(){return d})),r.d(e,"r",(function(){return f})),r.d(e,"e",(function(){return g})),r.d(e,"c",(function(){return v})),r.d(e,"z",(function(){return m})),r.d(e,"d",(function(){return y})),r.d(e,"l",(function(){return b})),r.d(e,"m",(function(){return w})),r.d(e,"o",(function(){return x})),r.d(e,"p",(function(){return _})),r.d(e,"w",(function(){return S})),r.d(e,"a",(function(){return k})),r.d(e,"v",(function(){return j})),r.d(e,"y",(function(){return O})),r.d(e,"u",(function(){return T})),r.d(e,"x",(function(){return A})),r.d(e,"B",(function(){return E})),r.d(e,"A",(function(){return C})),r.d(e,"f",(function(){return R})),r.d(e,"b",(function(){return I})),r.d(e,"g",(function(){return P})),r.d(e,"G",(function(){return M})),r.d(e,"C",(function(){return N})),r.d(e,"E",(function(){return B})),r.d(e,"D",(function(){return U})),r.d(e,"F",(function(){return z}));r(21),r(64);var n,o=r(117),i=r.n(o);const a="object"!=typeof window,s=!1,c=!0,u=!1,l=!1,p=l,h=!1,d=!0,f=!1,g="pro",v="edge",m="10.0.99",y="1676460789084",b=p||h||d||l||f,w=(p||h||d||f)&&!l,x=navigator.platform.indexOf("Mac")>=0,_=!1,S=c?"jiaocheng.inftab.com":"qzeuoq1yf.hn-bkt.clouddn.com",k="https://infinityicon.infinitynewtab.com/assets",j=c?"https://ws.infinitynewtab.com":"https://test-ws.infinitynewtab.com",O=c?"https://api.infinitynewtab.com/v2":"https://api-infinitynewtab-com.test690.com/v2",T=c?"https://api.infinitynewtab.com/privacy":"https://test-api.infinitynewtab.com/privacy",A="https://infinity-api.infinitynewtab.com",E=u?location.origin:c?"https://inftab.com":"https://test.inftab.com",C="https://weather-api.extfans.com",R="https://mail.google.com",I="https://suggestion.baidu.com",P="https://google.com",L=["cs","da","de","el","en","en-GB","en-US","es","es-419","fi","fr","hi","hu","id","it","ja","ko","ms","nl","no","pl","pt-BR","pt-PT","ro","ru","sk","sv","th","tr","uk","vi","zh-CN","zh-TW"],M=!!(null===(n=i.a.chrome)||void 0===n?void 0:n.abp),N=function(){if(u)return{baiduLabel:"Infinity新标签页web版",trackingId:"UA-202382853-4"};if(l)return{baiduLabel:"Infinity新标签页app版",trackingId:"UA-202382853-3"};if(b){if("pro"===g)return{baiduLabel:"Infinity新标签页pro版",trackingId:"UA-202382853-1"};if("basic"===g)return{baiduLabel:"Infinity新标签页basic版",trackingId:"UA-202382853-2"}}throw new Error("no ga info")}();function B(t="",e="_"){const r=t.split(e);return 2===r.length?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),r.join(e)):t}function D(t){const e=B(t.replace("_","-"),"-");return L.includes(e)?e:"zh"===t||0===e.indexOf("zh-")?"zh-CN":"en-US"}const U={get lang(){return u?function(){if(!a){const t=localStorage.getItem("langCode");if(null!==localStorage.getItem("setLangCode")&&null!==t)return t}return D(navigator.language||"en-us")}():D(chrome.i18n.getUILanguage())},get extVersion(){return u?"web":chrome.runtime.getManifest().version},get extId(){return u?"web":chrome.runtime.id},get platform(){return u?"web":"edge"},get supportCookie(){return!f&&"safari"!==this.runtimePlatform},get runtimePlatform(){return M?"360":$().broswer},get platformVersion(){return $().version},get isZh(){return"zh-CN"===U.lang},get isEn(){return/^(en|en-GB|en-US)$/.test(U.lang)},get isWindows(){return/windows|win32/i.test(navigator.userAgent)},get isMac(){return-1!==navigator.platform.toLowerCase().indexOf("mac")},get vendor(){let t=v;return"web"===v&&(t=$().broswer),t.charAt(0).toUpperCase()+t.slice(1)}};function $(){const t={},e=navigator.userAgent.toLowerCase();let r;return(r=e.match(/edg\/([\d.]+)/i))?t.edge=r[1]:(r=e.match(/rv:([\d.]+)\) like gecko/))||(r=e.match(/msie ([\d.]+)/))?t.ie=r[1]:(r=e.match(/firefox\/([\d.]+)/))?t.firefox=r[1]:(r=e.match(/chrome\/([\d.]+)/))?t.chrome=r[1]:(r=e.match(/opera.([\d.]+)/))?t.opera=r[1]:(r=e.match(/version\/([\d.]+).*safari/))&&(t.safari=r[1]),t.edge?{broswer:"edge",version:t.edge}:t.ie?{broswer:"ie",version:t.ie}:t.firefox?{broswer:"firefox",version:t.firefox}:t.chrome?{broswer:"chrome",version:t.chrome}:t.opera?{broswer:"opera",version:t.opera}:t.safari?{broswer:"safari",version:t.safari}:{broswer:"none",version:"0"}}const z=()=>{const t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];let r=!1;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>0){r=!0;break}try{document.createEvent("TouchEvent"),r=!0}catch(t){}return!r}},function(t,e,r){"use strict";r.d(e,"c",(function(){return A})),r.d(e,"g",(function(){return C})),r.d(e,"f",(function(){return R})),r.d(e,"h",(function(){return I})),r.d(e,"j",(function(){return P})),r.d(e,"i",(function(){return L})),r.d(e,"d",(function(){return B})),r.d(e,"e",(function(){return g.f})),r.d(e,"b",(function(){return V})),r.d(e,"a",(function(){return F}));r(11),r(14),r(41);var n=r(497),o=r.n(n),i=r(99),a=r.n(i),s=r(161),c=r(73);function u(t,e){const{element:{content:r},parts:n}=t,o=document.createTreeWalker(r,133,null,!1);let i=p(n),a=n[i],s=-1,c=0;const u=[];let l=null;for(;o.nextNode();){s++;const t=o.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(u.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==a&&a.index===s;)a.index=null!==l?-1:a.index-c,i=p(n,i),a=n[i]}u.forEach(t=>t.parentNode.removeChild(t))}const l=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},p=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(Object(c.d)(e))return r}return-1};var h=r(195),d=r(194),f=r(262),g=r(116);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),m=!1);const y=t=>e=>{const r=v(e.type,t);let n=d.a.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},d.a.set(r,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(c.f);if(o=n.keyString.get(i),void 0===o){const r=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(r,t),o=new c.a(e,r),n.keyString.set(i,o)}return n.stringsArray.set(e.strings,o),o},b=["html","svg"],w=new Set,x=(t,e,r)=>{w.add(t);const n=r?r.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<i;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{b.forEach(e=>{const r=d.a.get(v(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),u(t,r)})})})(t);const s=n.content;r?function(t,e,r=null){const{element:{content:n},parts:o}=t;if(null==r)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let a=p(o),s=0,c=-1;for(;i.nextNode();){c++;for(i.currentNode===r&&(s=l(e),r.parentNode.insertBefore(e,r));-1!==a&&o[a].index===c;){if(s>0){for(;-1!==a;)o[a].index+=s,a=p(o,a);return}a=p(o,a)}}}(r,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(r){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),u(r,t)}};var _=r(6),S=r.n(_);r(266),r(8);window.JSCompiler_renameProperty=(t,e)=>t;const k={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},j=(t,e)=>e!==t&&(e==e||t==t),O={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:j};class T extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=O){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdateInternal(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||O}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=j){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||k,o="function"==typeof n?n:n.fromAttribute;return o?o(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||k.toAttribute)(t,r)}initialize(){this._updateState=0,this._updatePromise=new S.a(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=O){const n=this.constructor,o=n._attributeNameForProperty(t,r);if(void 0!==o){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,r){let n=!0;if(void 0!==t){const o=this.constructor;r=r||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}T.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),E=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function C(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):E(t,e)}function R(t){return C({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function I(t,e){return(r,n)=>{const o={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e=void 0!==n?n:r.key,i="symbol"==typeof e?Symbol():"__"+e;o.get=function(){return void 0===this[i]&&(this[i]=this.renderRoot.querySelector(t)),this[i]}}return void 0!==n?M(o,r,n):N(o,r)}}function P(t){return(e,r)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==r?M(n,e,r):N(n,e)}}function L(t){return(e,r)=>{const n={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==r?M(n,e,r):N(n,e)}}const M=(t,e,r)=>{Object.defineProperty(e,r,t)},N=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function B(t){return(e,r)=>void 0!==r?((t,e,r)=>{Object.assign(e[r],t)})(t,e,r):((t,e)=>Object.assign(Object.assign({},e),{finisher(r){Object.assign(r.prototype[e.key],t)}}))(t,e)}const D=Element.prototype;D.msMatchesSelector||D.webkitMatchesSelector;r(21);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const U=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol();class z{constructor(t,e){if(e!==$)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(U?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const V=(t,...e)=>{const r=a()(e).call(e,(e,r,n)=>e+(t=>{if(t instanceof z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1],t[0]);return new z(r,$)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const q={};class F extends T{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,r)=>o()(t).call(t,(t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),n=[];r.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!U){var e;const r=a()(e=Array.prototype.slice.call(t.cssRules)).call(e,(t,e)=>t+e.cssText,"");return new z(String(r),$)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?U?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return q}}F.finalized=!0,F.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=h.a.has(e),i=m&&11===e.nodeType&&!!e.host,a=i&&!w.has(n),c=a?document.createDocumentFragment():e;if(Object(h.b)(t,c,Object.assign({templateFactory:y(n)},r)),a){const t=h.a.get(c);h.a.delete(c);const r=t.value instanceof f.a?t.value.template:void 0;x(n,c,r),Object(s.b)(e,e.firstChild),e.appendChild(c),h.a.set(e,t)}!o&&i&&window.ShadyCSS.styleElement(e.host)},F.shadowRootOptions={mode:"open"}},function(t,e,r){"use strict";r.r(e),r.d(e,"i18n",(function(){return p})),r.d(e,"IS_ZH",(function(){return h})),r.d(e,"initMasterI18n",(function(){return d})),r.d(e,"initI18n",(function(){return f})),r.d(e,"setLangToLocal",(function(){return v})),r.d(e,"getLangFromLocal",(function(){return m}));var n=r(117),o=r.n(n),i=(r(11),r(14),r(21),r(64),r(8),r(0)),a=r(77),s=r.n(a),c=r(22),u=r.n(c);let l={};const p=function(t,e){var r;if(i.l&&!i.r)return chrome.i18n.getMessage(t,e)||t;if(i.s||i.r){if(i.r&&void 0===e)return chrome.i18n.getMessage(t,e)||t;const n=null===(r=l[t])||void 0===r?void 0:r.message,o=[];"string"==typeof e?o.push(e):Array.isArray(e)&&o.push(...e);const a=/(\$.+?\$)/g;let s=a.exec(n),c=n;for(;s;){let[t]=o.splice(0,1);void 0===t&&(t=""),c=c.replace(s[1],t),s=a.exec(n)}return c||t}return t};i.t?o.a.i18n=p:window.i18n=p;const h="zh-CN"===i.D.lang;async function d(){const t=await m();l=t}async function f(){if(!i.s&&!i.r)return;const{slave:t}=await Promise.all([r.e(27),r.e(33)]).then(r.bind(null,163)),e=i.D.lang;try{const r=await m(),n=localStorage.getItem("setLangCode"),o=localStorage.getItem("langCode");null!==n&&null!==r||o===e&&null!==r?(l=r,g(n?o:e)):await g(n?o:e),t.postTask("slave:master-init-i18n",l)}catch(t){}}async function g(t){const e=t.replace("-","_"),r=(await s.a.get(`${i.B}/_locales/${Object(i.E)(e)}/messages.json?v=1648693770916`)).data;Object.keys(r).length>50&&(l=r,localStorage.setItem("langCode",t),v(r))}function v(t){return u.a.setItem("current-language",t)}function m(){return u.a.getItem("current-language")}},function(t,e,r){"use strict";r.d(e,"b",(function(){return x})),r.d(e,"a",(function(){return _}));r(21),r(8),r(11),r(14);var n=r(6),o=r.n(n),i=r(77),a=r.n(i),s=r(0),c=r(4),u=r(59),l=r(9);const p=a.a.create({timeout:3e4});let h=!1;const d=[],f=()=>new o.a(async(t,e)=>{if(d.push({resolve:t,reject:e}),!h){h=!0;try{let t;if(u.a){const e=s.l&&window.updateFromThirtyFiveStatus,{data:r}=await l.k.read(e?"localstorage":null);t=r}else{const e=await Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,482));t=e.userStore}const{refreshToken:e}=t;if(!e)return t.setOutdated(),h=!1,void d.forEach(t=>{t.reject(new Error("no refreshtoken"))});const{status:n,data:o}=await p.post(s.y+"/refresh_token",{refresh_token:e},{headers:{"i-lang":s.D.lang}});if(200===n&&0===o.code){const{token:e,refreshToken:r}=o.data;Object(c.i)(()=>{t.token=e,t.refreshToken=r}),h=!1,d.forEach(t=>{t.resolve(e)})}else{if(200!==n||3010!==o.code&&3012!==o.code)throw new Error(null==o?void 0:o.message);t.setOutdated(),h=!1,d.forEach(t=>{t.reject(o.message)})}}catch(t){h=!1,d.forEach(e=>{e.reject(t)})}}});var g=r(17);r(41);const v=["params","data","_auth"],m=async t=>{const{slave:e}=await r.e(37).then(r.bind(null,163)),n=((t,e={})=>{const r=Object.keys(e).map(t=>`${t}=${encodeURIComponent(e[t])}`);return r.length?t.includes("?")?t+r.join("&"):t+"?"+r.join("&"):t})(t.url,t.params),{request:o,option:i}=(t=>{const e={},r={};return t.data&&!e.body&&(e.body=JSON.stringify(t.data)),Object.keys(t).forEach(n=>{v.includes(n)||(n.startsWith("_")?r[n]=t[n]:e[n]=t[n])}),{request:e,option:r}})(t);return e.postTask("slave:fetch",{url:n,request:o,option:i})},y=a.a.CancelToken,b=a.a.create({timeout:6e4});b.interceptors.response.use(null,t=>(t.message=i18n("network_error"),o.a.reject(t)));const w=Object.create(null),x=t=>{w[t]&&w[t]()},_=async t=>{if(t._single){const e=(t=>{let e;return e=!0===t._single?t.method+"-"+t.url.split("?")[0]:t._single,e})(t);w[e]&&w[e](),t.cancelToken=new y(t=>{w[e]=t})}var e;t._delay&&await(e=t._delay,new o.a(t=>{setTimeout(t,e)}));const n={};if(t._auth){let e=null;if(u.a){const t=s.l&&window.updateFromThirtyFiveStatus,{data:r}=await l.k.read(t?"localstorage":null);e=r}else{const{userStore:t}=await Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,482));e=t}if(!e||!e.token)throw new Error("error token");{const r=g.a.parseJwt(e.token),o=await g.a.getTimestamp();if(t._Authorization)n.Authorization=t._Authorization,n["i-token"]=t._Authorization;else if(Math.floor(o/1e3)>r.exp-60){const t=await f();n.Authorization="Bearer "+t,n["i-token"]="Bearer "+t}else n.Authorization="Bearer "+e.token,n["i-token"]="Bearer "+e.token}}let i;if(t.url.includes(s.y)&&(n["i-lang"]=s.D.lang,n["i-edition"]=s.e,n["i-version"]=s.D.extVersion),t.headers=Object.assign(Object.assign({},n),t.headers),i=t._proxy?await m(t):await b(t),t._responseAll)return i;let{data:a}=i;if(!t._Authorization&&3010===(null==a?void 0:a.code)){const e=await f();t._Authorization="Bearer "+e,delete t.headers.Authorization,delete t.headers["i-token"],a=await _(t)}return a};["get","delete"].forEach(t=>{_[t]=(e,r,n={})=>_(Object.assign({url:e,params:r,method:t},n))}),["post","patch","put"].forEach(t=>{_[t]=(e,r,n={})=>_(Object.assign({url:e,data:r,method:t},n))}),_.jsonp=(t,e,r={})=>_(Object.assign({url:t,params:e},r))},function(t,e,r){"use strict";(function(t,n){r.d(e,"a",(function(){return Ut})),r.d(e,"b",(function(){return Xt})),r.d(e,"c",(function(){return Jt})),r.d(e,"d",(function(){return j})),r.d(e,"e",(function(){return rt})),r.d(e,"f",(function(){return ne})),r.d(e,"g",(function(){return K})),r.d(e,"h",(function(){return te})),r.d(e,"i",(function(){return Yt})),r.d(e,"j",(function(){return fe}));var o=[];Object.freeze(o);var i={};function a(){return++Rt.mobxGuid}function s(t){throw c(!1,t),"X"}function c(t,e){if(!t)throw new Error("[mobx] "+(e||"An invariant failed, however the error is obfuscated because this is a production build."))}Object.freeze(i);function u(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var l=function(){};function p(t){return null!==t&&"object"==typeof t}function h(t){if(null===t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return e===Object.prototype||null===e}function d(t,e,r){Object.defineProperty(t,e,{enumerable:!1,writable:!0,configurable:!0,value:r})}function f(t,e){var r="isMobX"+t;return e.prototype[r]=!0,function(t){return p(t)&&!0===t[r]}}function g(t){return t instanceof Map}function v(t){return t instanceof Set}function m(t){var e=new Set;for(var r in t)e.add(r);return Object.getOwnPropertySymbols(t).forEach((function(r){Object.getOwnPropertyDescriptor(t,r).enumerable&&e.add(r)})),Array.from(e)}function y(t){return t&&t.toString?t.toString():new String(t).toString()}function b(t){return null===t?null:"object"==typeof t?""+t:t}var w="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,x=Symbol("mobx administration"),_=function(){function t(t){void 0===t&&(t="Atom@"+a()),this.name=t,this.isPendingUnobservation=!1,this.isBeingObserved=!1,this.observers=new Set,this.diffValue=0,this.lastAccessedBy=0,this.lowestObserverState=Q.NOT_TRACKING}return t.prototype.onBecomeObserved=function(){this.onBecomeObservedListeners&&this.onBecomeObservedListeners.forEach((function(t){return t()}))},t.prototype.onBecomeUnobserved=function(){this.onBecomeUnobservedListeners&&this.onBecomeUnobservedListeners.forEach((function(t){return t()}))},t.prototype.reportObserved=function(){return Bt(this)},t.prototype.reportChanged=function(){Mt(),function(t){if(t.lowestObserverState===Q.STALE)return;t.lowestObserverState=Q.STALE,t.observers.forEach((function(e){e.dependenciesState===Q.UP_TO_DATE&&(e.isTracing!==Z.NONE&&Dt(e,t),e.onBecomeStale()),e.dependenciesState=Q.STALE}))}(this),Nt()},t.prototype.toString=function(){return this.name},t}(),S=f("Atom",_);function k(t,e,r){void 0===e&&(e=l),void 0===r&&(r=l);var n,o=new _(t);return e!==l&&re("onBecomeObserved",o,e,n),r!==l&&ee(o,r),o}var j={identity:function(t,e){return t===e},structural:function(t,e){return Je(t,e)},default:function(t,e){return Object.is(t,e)},shallow:function(t,e){return Je(t,e,1)}},O=function(t,e){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var T=function(){return(T=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function A(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function E(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function C(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(E(arguments[e]));return t}var R=Symbol("mobx did run lazy initializers"),I=Symbol("mobx pending decorators"),P={},L={};function M(t,e){var r=e?P:L;return r[t]||(r[t]={configurable:!0,enumerable:e,get:function(){return N(this),this[t]},set:function(e){N(this),this[t]=e}})}function N(t){var e,r;if(!0!==t[R]){var n=t[I];if(n){d(t,R,!0);var o=C(Object.getOwnPropertySymbols(n),Object.keys(n));try{for(var i=A(o),a=i.next();!a.done;a=i.next()){var s=n[a.value];s.propertyCreator(t,s.prop,s.descriptor,s.decoratorTarget,s.decoratorArguments)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}}}}function B(t,e){return function(){var r,n=function(n,o,i,a){if(!0===a)return e(n,o,i,n,r),null;if(!Object.prototype.hasOwnProperty.call(n,I)){var s=n[I];d(n,I,T({},s))}return n[I][o]={prop:o,propertyCreator:e,descriptor:i,decoratorTarget:n,decoratorArguments:r},M(o,t)};return D(arguments)?(r=o,n.apply(null,arguments)):(r=Array.prototype.slice.call(arguments),n)}}function D(t){return(2===t.length||3===t.length)&&("string"==typeof t[1]||"symbol"==typeof t[1])||4===t.length&&!0===t[3]}function U(t,e,r){return le(t)?t:Array.isArray(t)?K.array(t,{name:r}):h(t)?K.object(t,void 0,{name:r}):g(t)?K.map(t,{name:r}):v(t)?K.set(t,{name:r}):t}function $(t){return t}function z(e){c(e);var r=B(!0,(function(t,r,n,o,i){var a=n?n.initializer?n.initializer.call(t):n.value:void 0;Ve(t).addObservableProp(r,a,e)})),n=(void 0!==t&&t.env,r);return n.enhancer=e,n}var V={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};function q(t){return null==t?V:"string"==typeof t?{name:t,deep:!0,proxy:!0}:t}Object.freeze(V);var F=z(U),W=z((function(t,e,r){return null==t||Ge(t)||Pe(t)||Be(t)||$e(t)?t:Array.isArray(t)?K.array(t,{name:r,deep:!1}):h(t)?K.object(t,void 0,{name:r,deep:!1}):g(t)?K.map(t,{name:r,deep:!1}):v(t)?K.set(t,{name:r,deep:!1}):s(!1)})),H=z($),G=z((function(t,e,r){return Je(t,e)?e:t}));function X(t){return t.defaultDecorator?t.defaultDecorator.enhancer:!1===t.deep?$:U}var Y={box:function(t,e){arguments.length>2&&J("box");var r=q(e);return new _t(t,X(r),r.name,!0,r.equals)},array:function(t,e){arguments.length>2&&J("array");var r=q(e);return Ae(t,X(r),r.name)},map:function(t,e){arguments.length>2&&J("map");var r=q(e);return new Ne(t,X(r),r.name)},set:function(t,e){arguments.length>2&&J("set");var r=q(e);return new Ue(t,X(r),r.name)},object:function(t,e,r){"string"==typeof arguments[1]&&J("object");var n=q(r);if(!1===n.proxy)return oe({},t,e,n);var o=ie(n),i=oe({},void 0,void 0,n),a=we(i);return ae(a,t,e,o),a},ref:H,shallow:W,deep:F,struct:G},K=function(t,e,r){if("string"==typeof arguments[1]||"symbol"==typeof arguments[1])return F.apply(null,arguments);if(le(t))return t;var n=h(t)?K.object(t,e,r):Array.isArray(t)?K.array(t,e):g(t)?K.map(t,e):v(t)?K.set(t,e):t;if(n!==t)return n;s(!1)};function J(t){s("Expected one or two arguments to observable."+t+". Did you accidentally try to use observable."+t+" as decorator?")}Object.keys(Y).forEach((function(t){return K[t]=Y[t]}));var Q,Z,tt=B(!1,(function(t,e,r,n,o){var i=r.get,a=r.set,s=o[0]||{};Ve(t).addComputedProp(t,e,T({get:i,set:a,context:t},s))})),et=tt({equals:j.structural}),rt=function(t,e,r){if("string"==typeof e)return tt.apply(null,arguments);if(null!==t&&"object"==typeof t&&1===arguments.length)return tt.apply(null,arguments);var n="object"==typeof e?e:{};return n.get=t,n.set="function"==typeof e?e:n.set,n.name=n.name||t.name||"",new kt(n)};rt.struct=et,function(t){t[t.NOT_TRACKING=-1]="NOT_TRACKING",t[t.UP_TO_DATE=0]="UP_TO_DATE",t[t.POSSIBLY_STALE=1]="POSSIBLY_STALE",t[t.STALE=2]="STALE"}(Q||(Q={})),function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"}(Z||(Z={}));var nt=function(t){this.cause=t};function ot(t){return t instanceof nt}function it(t){switch(t.dependenciesState){case Q.UP_TO_DATE:return!1;case Q.NOT_TRACKING:case Q.STALE:return!0;case Q.POSSIBLY_STALE:for(var e=ht(!0),r=lt(),n=t.observing,o=n.length,i=0;i<o;i++){var a=n[i];if(jt(a)){if(Rt.disableErrorBoundaries)a.get();else try{a.get()}catch(t){return pt(r),dt(e),!0}if(t.dependenciesState===Q.STALE)return pt(r),dt(e),!0}}return ft(t),pt(r),dt(e),!1}}function at(t){var e=t.observers.size>0;Rt.computationDepth>0&&e&&s(!1),Rt.allowStateChanges||!e&&"strict"!==Rt.enforceActions||s(!1)}function st(t,e,r){var n=ht(!0);ft(t),t.newObserving=new Array(t.observing.length+100),t.unboundDepsCount=0,t.runId=++Rt.runId;var o,i=Rt.trackingDerivation;if(Rt.trackingDerivation=t,!0===Rt.disableErrorBoundaries)o=e.call(r);else try{o=e.call(r)}catch(t){o=new nt(t)}return Rt.trackingDerivation=i,function(t){for(var e=t.observing,r=t.observing=t.newObserving,n=Q.UP_TO_DATE,o=0,i=t.unboundDepsCount,a=0;a<i;a++){0===(s=r[a]).diffValue&&(s.diffValue=1,o!==a&&(r[o]=s),o++),s.dependenciesState>n&&(n=s.dependenciesState)}r.length=o,t.newObserving=null,i=e.length;for(;i--;){0===(s=e[i]).diffValue&&Pt(s,t),s.diffValue=0}for(;o--;){var s;1===(s=r[o]).diffValue&&(s.diffValue=0,It(s,t))}n!==Q.UP_TO_DATE&&(t.dependenciesState=n,t.onBecomeStale())}(t),dt(n),o}function ct(t){var e=t.observing;t.observing=[];for(var r=e.length;r--;)Pt(e[r],t);t.dependenciesState=Q.NOT_TRACKING}function ut(t){var e=lt();try{return t()}finally{pt(e)}}function lt(){var t=Rt.trackingDerivation;return Rt.trackingDerivation=null,t}function pt(t){Rt.trackingDerivation=t}function ht(t){var e=Rt.allowStateReads;return Rt.allowStateReads=t,e}function dt(t){Rt.allowStateReads=t}function ft(t){if(t.dependenciesState!==Q.UP_TO_DATE){t.dependenciesState=Q.UP_TO_DATE;for(var e=t.observing,r=e.length;r--;)e[r].lowestObserverState=Q.UP_TO_DATE}}var gt=0,vt=1,mt=Object.getOwnPropertyDescriptor((function(){}),"name");mt&&mt.configurable;function yt(t,e,r){var n=function(){return bt(t,e,r||this,arguments)};return n.isMobxAction=!0,n}function bt(t,e,r,n){var o=function(t,e,r){var n=0;var o=lt();Mt();var i=wt(!0),a=ht(!0),s={prevDerivation:o,prevAllowStateChanges:i,prevAllowStateReads:a,notifySpy:!1,startTime:n,actionId:vt++,parentActionId:gt};return gt=s.actionId,s}();try{return e.apply(r,n)}catch(t){throw o.error=t,t}finally{!function(t){gt!==t.actionId&&s("invalid action stack. did you forget to finish an action?");gt=t.parentActionId,void 0!==t.error&&(Rt.suppressReactionErrors=!0);xt(t.prevAllowStateChanges),dt(t.prevAllowStateReads),Nt(),pt(t.prevDerivation),t.notifySpy&&!1;Rt.suppressReactionErrors=!1}(o)}}function wt(t){var e=Rt.allowStateChanges;return Rt.allowStateChanges=t,e}function xt(t){Rt.allowStateChanges=t}var _t=function(t){function e(e,r,n,o,i){void 0===n&&(n="ObservableValue@"+a()),void 0===o&&(o=!0),void 0===i&&(i=j.default);var s=t.call(this,n)||this;return s.enhancer=r,s.name=n,s.equals=i,s.hasUnreportedChange=!1,s.value=r(e,void 0,n),s}return function(t,e){function r(){this.constructor=t}O(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.dehanceValue=function(t){return void 0!==this.dehancer?this.dehancer(t):t},e.prototype.set=function(t){this.value;if((t=this.prepareNewValue(t))!==Rt.UNCHANGED){0,this.setNewValue(t)}},e.prototype.prepareNewValue=function(t){if(at(this),xe(this)){var e=Se(this,{object:this,type:"update",newValue:t});if(!e)return Rt.UNCHANGED;t=e.newValue}return t=this.enhancer(t,this.value,this.name),this.equals(this.value,t)?Rt.UNCHANGED:t},e.prototype.setNewValue=function(t){var e=this.value;this.value=t,this.reportChanged(),ke(this)&&Oe(this,{type:"update",object:this,newValue:t,oldValue:e})},e.prototype.get=function(){return this.reportObserved(),this.dehanceValue(this.value)},e.prototype.intercept=function(t){return _e(this,t)},e.prototype.observe=function(t,e){return e&&t({object:this,type:"update",newValue:this.value,oldValue:void 0}),je(this,t)},e.prototype.toJSON=function(){return this.get()},e.prototype.toString=function(){return this.name+"["+this.value+"]"},e.prototype.valueOf=function(){return b(this.get())},e.prototype[Symbol.toPrimitive]=function(){return this.valueOf()},e}(_),St=f("ObservableValue",_t),kt=function(){function t(t){this.dependenciesState=Q.NOT_TRACKING,this.observing=[],this.newObserving=null,this.isBeingObserved=!1,this.isPendingUnobservation=!1,this.observers=new Set,this.diffValue=0,this.runId=0,this.lastAccessedBy=0,this.lowestObserverState=Q.UP_TO_DATE,this.unboundDepsCount=0,this.__mapid="#"+a(),this.value=new nt(null),this.isComputing=!1,this.isRunningSetter=!1,this.isTracing=Z.NONE,c(t.get,"missing option for computed: get"),this.derivation=t.get,this.name=t.name||"ComputedValue@"+a(),t.set&&(this.setter=yt(this.name+"-setter",t.set)),this.equals=t.equals||(t.compareStructural||t.struct?j.structural:j.default),this.scope=t.context,this.requiresReaction=!!t.requiresReaction,this.keepAlive=!!t.keepAlive}return t.prototype.onBecomeStale=function(){!function(t){if(t.lowestObserverState!==Q.UP_TO_DATE)return;t.lowestObserverState=Q.POSSIBLY_STALE,t.observers.forEach((function(e){e.dependenciesState===Q.UP_TO_DATE&&(e.dependenciesState=Q.POSSIBLY_STALE,e.isTracing!==Z.NONE&&Dt(e,t),e.onBecomeStale())}))}(this)},t.prototype.onBecomeObserved=function(){this.onBecomeObservedListeners&&this.onBecomeObservedListeners.forEach((function(t){return t()}))},t.prototype.onBecomeUnobserved=function(){this.onBecomeUnobservedListeners&&this.onBecomeUnobservedListeners.forEach((function(t){return t()}))},t.prototype.get=function(){this.isComputing&&s("Cycle detected in computation "+this.name+": "+this.derivation),0!==Rt.inBatch||0!==this.observers.size||this.keepAlive?(Bt(this),it(this)&&this.trackAndCompute()&&function(t){if(t.lowestObserverState===Q.STALE)return;t.lowestObserverState=Q.STALE,t.observers.forEach((function(e){e.dependenciesState===Q.POSSIBLY_STALE?e.dependenciesState=Q.STALE:e.dependenciesState===Q.UP_TO_DATE&&(t.lowestObserverState=Q.UP_TO_DATE)}))}(this)):it(this)&&(this.warnAboutUntrackedRead(),Mt(),this.value=this.computeValue(!1),Nt());var t=this.value;if(ot(t))throw t.cause;return t},t.prototype.peek=function(){var t=this.computeValue(!1);if(ot(t))throw t.cause;return t},t.prototype.set=function(t){if(this.setter){c(!this.isRunningSetter,"The setter of computed value '"+this.name+"' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),this.isRunningSetter=!0;try{this.setter.call(this.scope,t)}finally{this.isRunningSetter=!1}}else c(!1,!1)},t.prototype.trackAndCompute=function(){var t=this.value,e=this.dependenciesState===Q.NOT_TRACKING,r=this.computeValue(!0),n=e||ot(t)||ot(r)||!this.equals(t,r);return n&&(this.value=r),n},t.prototype.computeValue=function(t){var e;if(this.isComputing=!0,Rt.computationDepth++,t)e=st(this,this.derivation,this.scope);else if(!0===Rt.disableErrorBoundaries)e=this.derivation.call(this.scope);else try{e=this.derivation.call(this.scope)}catch(t){e=new nt(t)}return Rt.computationDepth--,this.isComputing=!1,e},t.prototype.suspend=function(){this.keepAlive||(ct(this),this.value=void 0)},t.prototype.observe=function(t,e){var r=this,n=!0,o=void 0;return Jt((function(){var i=r.get();if(!n||e){var a=lt();t({type:"update",object:r,newValue:i,oldValue:o}),pt(a)}n=!1,o=i}))},t.prototype.warnAboutUntrackedRead=function(){},t.prototype.toJSON=function(){return this.get()},t.prototype.toString=function(){return this.name+"["+this.derivation.toString()+"]"},t.prototype.valueOf=function(){return b(this.get())},t.prototype[Symbol.toPrimitive]=function(){return this.valueOf()},t}(),jt=f("ComputedValue",kt),Ot=function(){this.version=5,this.UNCHANGED={},this.trackingDerivation=null,this.computationDepth=0,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!0,this.allowStateReads=!0,this.enforceActions=!1,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.computedConfigurable=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1},Tt={};function At(){return"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:Tt}var Et=!0,Ct=!1,Rt=function(){var t=At();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&(Et=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==(new Ot).version&&(Et=!1),Et?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new Ot):(setTimeout((function(){Ct||s("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")}),1),new Ot)}();function It(t,e){t.observers.add(e),t.lowestObserverState>e.dependenciesState&&(t.lowestObserverState=e.dependenciesState)}function Pt(t,e){t.observers.delete(e),0===t.observers.size&&Lt(t)}function Lt(t){!1===t.isPendingUnobservation&&(t.isPendingUnobservation=!0,Rt.pendingUnobservations.push(t))}function Mt(){Rt.inBatch++}function Nt(){if(0==--Rt.inBatch){zt();for(var t=Rt.pendingUnobservations,e=0;e<t.length;e++){var r=t[e];r.isPendingUnobservation=!1,0===r.observers.size&&(r.isBeingObserved&&(r.isBeingObserved=!1,r.onBecomeUnobserved()),r instanceof kt&&r.suspend())}Rt.pendingUnobservations=[]}}function Bt(t){var e=Rt.trackingDerivation;return null!==e?(e.runId!==t.lastAccessedBy&&(t.lastAccessedBy=e.runId,e.newObserving[e.unboundDepsCount++]=t,t.isBeingObserved||(t.isBeingObserved=!0,t.onBecomeObserved())),!0):(0===t.observers.size&&Rt.inBatch>0&&Lt(t),!1)}function Dt(t,e){if(console.log("[mobx.trace] '"+t.name+"' is invalidated due to a change in: '"+e.name+"'"),t.isTracing===Z.BREAK){var r=[];!function t(e,r,n){if(r.length>=1e3)return void r.push("(and many more)");r.push(""+new Array(n).join("\t")+e.name),e.dependencies&&e.dependencies.forEach((function(e){return t(e,r,n+1)}))}((n=t,se(Xe(n,o))),r,1),new Function("debugger;\n/*\nTracing '"+t.name+"'\n\nYou are entering this break point because derivation '"+t.name+"' is being traced and '"+e.name+"' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n"+(t instanceof kt?t.derivation.toString().replace(/[*]\//g,"/"):"")+"\n\nThe dependencies for this derivation are:\n\n"+r.join("\n")+"\n*/\n    ")()}var n,o}var Ut=function(){function t(t,e,r,n){void 0===t&&(t="Reaction@"+a()),void 0===n&&(n=!1),this.name=t,this.onInvalidate=e,this.errorHandler=r,this.requiresObservable=n,this.observing=[],this.newObserving=[],this.dependenciesState=Q.NOT_TRACKING,this.diffValue=0,this.runId=0,this.unboundDepsCount=0,this.__mapid="#"+a(),this.isDisposed=!1,this._isScheduled=!1,this._isTrackPending=!1,this._isRunning=!1,this.isTracing=Z.NONE}return t.prototype.onBecomeStale=function(){this.schedule()},t.prototype.schedule=function(){this._isScheduled||(this._isScheduled=!0,Rt.pendingReactions.push(this),zt())},t.prototype.isScheduled=function(){return this._isScheduled},t.prototype.runReaction=function(){if(!this.isDisposed){if(Mt(),this._isScheduled=!1,it(this)){this._isTrackPending=!0;try{this.onInvalidate(),this._isTrackPending}catch(t){this.reportExceptionInDerivation(t)}}Nt()}},t.prototype.track=function(t){if(!this.isDisposed){Mt();0,this._isRunning=!0;var e=st(this,t,void 0);this._isRunning=!1,this._isTrackPending=!1,this.isDisposed&&ct(this),ot(e)&&this.reportExceptionInDerivation(e.cause),Nt()}},t.prototype.reportExceptionInDerivation=function(t){var e=this;if(this.errorHandler)this.errorHandler(t,this);else{if(Rt.disableErrorBoundaries)throw t;var r="[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '"+this+"'";Rt.suppressReactionErrors?console.warn("[mobx] (error in reaction '"+this.name+"' suppressed, fix error of causing action below)"):console.error(r,t),Rt.globalReactionErrorHandlers.forEach((function(r){return r(t,e)}))}},t.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._isRunning||(Mt(),ct(this),Nt()))},t.prototype.getDisposer=function(){var t=this.dispose.bind(this);return t[x]=this,t},t.prototype.toString=function(){return"Reaction["+this.name+"]"},t.prototype.trace=function(t){void 0===t&&(t=!1),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=!1;"boolean"==typeof t[t.length-1]&&(r=t.pop());var n=ge(t);if(!n)return s(!1);n.isTracing===Z.NONE&&console.log("[mobx.trace] '"+n.name+"' tracing enabled");n.isTracing=r?Z.BREAK:Z.LOG}(this,t)},t}();var $t=function(t){return t()};function zt(){Rt.inBatch>0||Rt.isRunningReactions||$t(Vt)}function Vt(){Rt.isRunningReactions=!0;for(var t=Rt.pendingReactions,e=0;t.length>0;){100==++e&&(console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: "+t[0]),t.splice(0));for(var r=t.splice(0),n=0,o=r.length;n<o;n++)r[n].runReaction()}Rt.isRunningReactions=!1}var qt=f("Reaction",Ut);function Ft(t){var e=$t;$t=function(r){return t((function(){return e(r)}))}}function Wt(){s(!1)}function Ht(t){return function(e,r,n){if(n){if(n.value)return{value:yt(t,n.value),enumerable:!1,configurable:!0,writable:!0};var o=n.initializer;return{enumerable:!1,configurable:!0,writable:!0,initializer:function(){return yt(t,o.call(this))}}}return Gt(t).apply(this,arguments)}}function Gt(t){return function(e,r,n){Object.defineProperty(e,r,{configurable:!0,enumerable:!1,get:function(){},set:function(e){d(this,r,Xt(t,e))}})}}var Xt=function(t,e,r,n){return 1===arguments.length&&"function"==typeof t?yt(t.name||"<unnamed action>",t):2===arguments.length&&"function"==typeof e?yt(t,e):1===arguments.length&&"string"==typeof t?Ht(t):!0!==n?Ht(e).apply(null,arguments):void d(t,e,yt(t.name||e,r.value,this))};function Yt(t,e){"string"==typeof t||t.name;return bt(0,"function"==typeof t?t:e,this,void 0)}function Kt(t,e,r){d(t,e,yt(e,r.bind(t)))}function Jt(t,e){void 0===e&&(e=i);var r,n=e&&e.name||t.name||"Autorun@"+a();if(!e.scheduler&&!e.delay)r=new Ut(n,(function(){this.track(c)}),e.onError,e.requiresObservable);else{var o=Zt(e),s=!1;r=new Ut(n,(function(){s||(s=!0,o((function(){s=!1,r.isDisposed||r.track(c)})))}),e.onError,e.requiresObservable)}function c(){t(r)}return r.schedule(),r.getDisposer()}Xt.bound=function(t,e,r,n){return!0===n?(Kt(t,e,r.value),null):r?{configurable:!0,enumerable:!1,get:function(){return Kt(this,e,r.value||r.initializer.call(this)),this[e]},set:Wt}:{enumerable:!1,configurable:!0,set:function(t){Kt(this,e,t)},get:function(){}}};var Qt=function(t){return t()};function Zt(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:Qt}function te(t,e,r){void 0===r&&(r=i);var n,o,s,c=r.name||"Reaction@"+a(),u=Xt(c,r.onError?(n=r.onError,o=e,function(){try{return o.apply(this,arguments)}catch(t){n.call(this,t)}}):e),l=!r.scheduler&&!r.delay,p=Zt(r),h=!0,d=!1,f=r.compareStructural?j.structural:r.equals||j.default,g=new Ut(c,(function(){h||l?v():d||(d=!0,p(v))}),r.onError,r.requiresObservable);function v(){if(d=!1,!g.isDisposed){var e=!1;g.track((function(){var r=t(g);e=h||!f(s,r),s=r})),h&&r.fireImmediately&&u(s,g),h||!0!==e||u(s,g),h&&(h=!1)}}return g.schedule(),g.getDisposer()}function ee(t,e,r){return re("onBecomeUnobserved",t,e,r)}function re(t,e,r,n){var o="function"==typeof n?Xe(e,r):Xe(e),i="function"==typeof n?n:r,a=t+"Listeners";return o[a]?o[a].add(i):o[a]=new Set([i]),"function"!=typeof o[t]?s(!1):function(){var t=o[a];t&&(t.delete(i),0===t.size&&delete o[a])}}function ne(t){var e=t.enforceActions,r=t.computedRequiresReaction,n=t.computedConfigurable,o=t.disableErrorBoundaries,i=t.reactionScheduler,a=t.reactionRequiresObservable,c=t.observableRequiresReaction;if(!0===t.isolateGlobalState&&((Rt.pendingReactions.length||Rt.inBatch||Rt.isRunningReactions)&&s("isolateGlobalState should be called before MobX is running any reactions"),Ct=!0,Et&&(0==--At().__mobxInstanceCount&&(At().__mobxGlobals=void 0),Rt=new Ot)),void 0!==e){var u=void 0;switch(e){case!0:case"observed":u=!0;break;case!1:case"never":u=!1;break;case"strict":case"always":u="strict";break;default:s("Invalid value for 'enforceActions': '"+e+"', expected 'never', 'always' or 'observed'")}Rt.enforceActions=u,Rt.allowStateChanges=!0!==u&&"strict"!==u}void 0!==r&&(Rt.computedRequiresReaction=!!r),void 0!==a&&(Rt.reactionRequiresObservable=!!a),void 0!==c&&(Rt.observableRequiresReaction=!!c,Rt.allowStateReads=!Rt.observableRequiresReaction),void 0!==n&&(Rt.computedConfigurable=!!n),void 0!==o&&(!0===o&&console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."),Rt.disableErrorBoundaries=!!o),i&&Ft(i)}function oe(t,e,r,n){var o=ie(n=q(n));return N(t),Ve(t,n.name,o.enhancer),e&&ae(t,e,r,o),t}function ie(t){return t.defaultDecorator||(!1===t.deep?H:F)}function ae(t,e,r,n){var o,i;Mt();try{var a=w(e);try{for(var s=A(a),c=s.next();!c.done;c=s.next()){var u=c.value,l=Object.getOwnPropertyDescriptor(e,u);0;var p=(r&&u in r?r[u]:l.get?tt:n)(t,u,l,!0);p&&Object.defineProperty(t,u,p)}}catch(t){o={error:t}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}finally{Nt()}}function se(t){var e,r,n={name:t.name};return t.observing&&t.observing.length>0&&(n.dependencies=(e=t.observing,r=[],e.forEach((function(t){-1===r.indexOf(t)&&r.push(t)})),r).map(se)),n}function ce(){this.message="FLOW_CANCELLED"}function ue(t,e){return null!=t&&(void 0!==e?!!Ge(t)&&t[x].values.has(e):Ge(t)||!!t[x]||S(t)||qt(t)||jt(t))}function le(t){return 1!==arguments.length&&s(!1),ue(t)}function pe(t){return Ge(t)?t[x].getKeys():Be(t)||$e(t)?Array.from(t.keys()):Pe(t)?t.map((function(t,e){return e})):s(!1)}ce.prototype=Object.create(Error.prototype);var he={detectCycles:!0,exportMapsAsObjects:!0,recurseEverything:!1};function de(t,e,r,n){return n.detectCycles&&t.set(e,r),r}function fe(t,e){var r;return"boolean"==typeof e&&(e={detectCycles:e}),e||(e=he),e.detectCycles=void 0===e.detectCycles?!0===e.recurseEverything:!0===e.detectCycles,e.detectCycles&&(r=new Map),function t(e,r,n){if(!r.recurseEverything&&!le(e))return e;if("object"!=typeof e)return e;if(null===e)return null;if(e instanceof Date)return e;if(St(e))return t(e.get(),r,n);if(le(e)&&pe(e),!0===r.detectCycles&&null!==e&&n.has(e))return n.get(e);if(Pe(e)||Array.isArray(e)){var o=de(n,e,[],r),i=e.map((function(e){return t(e,r,n)}));o.length=i.length;for(var a=0,s=i.length;a<s;a++)o[a]=i[a];return o}if($e(e)||Object.getPrototypeOf(e)===Set.prototype){if(!1===r.exportMapsAsObjects){var c=de(n,e,new Set,r);return e.forEach((function(e){c.add(t(e,r,n))})),c}var u=de(n,e,[],r);return e.forEach((function(e){u.push(t(e,r,n))})),u}if(Be(e)||Object.getPrototypeOf(e)===Map.prototype){if(!1===r.exportMapsAsObjects){var l=de(n,e,new Map,r);return e.forEach((function(e,o){l.set(o,t(e,r,n))})),l}var p=de(n,e,{},r);return e.forEach((function(e,o){p[o]=t(e,r,n)})),p}var h=de(n,e,{},r);return m(e).forEach((function(o){h[o]=t(e[o],r,n)})),h}(t,e,r)}function ge(t){switch(t.length){case 0:return Rt.trackingDerivation;case 1:return Xe(t[0]);case 2:return Xe(t[0],t[1])}}function ve(t,e){void 0===e&&(e=void 0),Mt();try{return t.apply(e)}finally{Nt()}}function me(t){return t[x]}function ye(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t}var be={has:function(t,e){if(e===x||"constructor"===e||e===R)return!0;var r=me(t);return ye(e)?r.has(e):e in t},get:function(t,e){if(e===x||"constructor"===e||e===R)return t[e];var r=me(t),n=r.values.get(e);if(n instanceof _){var o=n.get();return void 0===o&&r.has(e),o}return ye(e)&&r.has(e),t[e]},set:function(t,e,r){return!!ye(e)&&(function t(e,r,n){if(2!==arguments.length||$e(e))if(Ge(e)){var o=e[x],i=o.values.get(r);i?o.write(r,n):o.addObservableProp(r,n,o.defaultEnhancer)}else if(Be(e))e.set(r,n);else if($e(e))e.add(r);else{if(!Pe(e))return s(!1);"number"!=typeof r&&(r=parseInt(r,10)),c(r>=0,"Not a valid index: '"+r+"'"),Mt(),r>=e.length&&(e.length=r+1),e[r]=n,Nt()}else{Mt();var a=r;try{for(var u in a)t(e,u,a[u])}finally{Nt()}}}(t,e,r),!0)},deleteProperty:function(t,e){return!!ye(e)&&(me(t).remove(e),!0)},ownKeys:function(t){return me(t).keysAtom.reportObserved(),Reflect.ownKeys(t)},preventExtensions:function(t){return s("Dynamic observable objects cannot be frozen"),!1}};function we(t){var e=new Proxy(t,be);return t[x].proxy=e,e}function xe(t){return void 0!==t.interceptors&&t.interceptors.length>0}function _e(t,e){var r=t.interceptors||(t.interceptors=[]);return r.push(e),u((function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}))}function Se(t,e){var r=lt();try{for(var n=C(t.interceptors||[]),o=0,i=n.length;o<i&&(c(!(e=n[o](e))||e.type,"Intercept handlers should return nothing or a change object"),e);o++);return e}finally{pt(r)}}function ke(t){return void 0!==t.changeListeners&&t.changeListeners.length>0}function je(t,e){var r=t.changeListeners||(t.changeListeners=[]);return r.push(e),u((function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}))}function Oe(t,e){var r=lt(),n=t.changeListeners;if(n){for(var o=0,i=(n=n.slice()).length;o<i;o++)n[o](e);pt(r)}}var Te={get:function(t,e){return e===x?t[x]:"length"===e?t[x].getArrayLength():"number"==typeof e?Ce.get.call(t,e):"string"!=typeof e||isNaN(e)?Ce.hasOwnProperty(e)?Ce[e]:t[e]:Ce.get.call(t,parseInt(e))},set:function(t,e,r){return"length"===e&&t[x].setArrayLength(r),"number"==typeof e&&Ce.set.call(t,e,r),"symbol"==typeof e||isNaN(e)?t[e]=r:Ce.set.call(t,parseInt(e),r),!0},preventExtensions:function(t){return s("Observable arrays cannot be frozen"),!1}};function Ae(t,e,r,n){void 0===r&&(r="ObservableArray@"+a()),void 0===n&&(n=!1);var o,i,s,c=new Ee(r,e,n);o=c.values,i=x,s=c,Object.defineProperty(o,i,{enumerable:!1,writable:!1,configurable:!0,value:s});var u=new Proxy(c.values,Te);if(c.proxy=u,t&&t.length){var l=wt(!0);c.spliceWithArray(0,0,t),xt(l)}return u}var Ee=function(){function t(t,e,r){this.owned=r,this.values=[],this.proxy=void 0,this.lastKnownLength=0,this.atom=new _(t||"ObservableArray@"+a()),this.enhancer=function(r,n){return e(r,n,t+"[..]")}}return t.prototype.dehanceValue=function(t){return void 0!==this.dehancer?this.dehancer(t):t},t.prototype.dehanceValues=function(t){return void 0!==this.dehancer&&t.length>0?t.map(this.dehancer):t},t.prototype.intercept=function(t){return _e(this,t)},t.prototype.observe=function(t,e){return void 0===e&&(e=!1),e&&t({object:this.proxy,type:"splice",index:0,added:this.values.slice(),addedCount:this.values.length,removed:[],removedCount:0}),je(this,t)},t.prototype.getArrayLength=function(){return this.atom.reportObserved(),this.values.length},t.prototype.setArrayLength=function(t){if("number"!=typeof t||t<0)throw new Error("[mobx.array] Out of range: "+t);var e=this.values.length;if(t!==e)if(t>e){for(var r=new Array(t-e),n=0;n<t-e;n++)r[n]=void 0;this.spliceWithArray(e,0,r)}else this.spliceWithArray(t,e-t)},t.prototype.updateArrayLength=function(t,e){if(t!==this.lastKnownLength)throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");this.lastKnownLength+=e},t.prototype.spliceWithArray=function(t,e,r){var n=this;at(this.atom);var i=this.values.length;if(void 0===t?t=0:t>i?t=i:t<0&&(t=Math.max(0,i+t)),e=1===arguments.length?i-t:null==e?0:Math.max(0,Math.min(e,i-t)),void 0===r&&(r=o),xe(this)){var a=Se(this,{object:this.proxy,type:"splice",index:t,removedCount:e,added:r});if(!a)return o;e=a.removedCount,r=a.added}r=0===r.length?r:r.map((function(t){return n.enhancer(t,void 0)}));var s=this.spliceItemsIntoValues(t,e,r);return 0===e&&0===r.length||this.notifyArraySplice(t,r,s),this.dehanceValues(s)},t.prototype.spliceItemsIntoValues=function(t,e,r){var n;if(r.length<1e4)return(n=this.values).splice.apply(n,C([t,e],r));var o=this.values.slice(t,t+e);return this.values=this.values.slice(0,t).concat(r,this.values.slice(t+e)),o},t.prototype.notifyArrayChildUpdate=function(t,e,r){var n=!this.owned&&!1,o=ke(this),i=o||n?{object:this.proxy,type:"update",index:t,newValue:e,oldValue:r}:null;this.atom.reportChanged(),o&&Oe(this,i)},t.prototype.notifyArraySplice=function(t,e,r){var n=!this.owned&&!1,o=ke(this),i=o||n?{object:this.proxy,type:"splice",index:t,removed:r,added:e,removedCount:r.length,addedCount:e.length}:null;this.atom.reportChanged(),o&&Oe(this,i)},t}(),Ce={intercept:function(t){return this[x].intercept(t)},observe:function(t,e){return void 0===e&&(e=!1),this[x].observe(t,e)},clear:function(){return this.splice(0)},replace:function(t){var e=this[x];return e.spliceWithArray(0,e.values.length,t)},toJS:function(){return this.slice()},toJSON:function(){return this.toJS()},splice:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=this[x];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray(t);case 2:return o.spliceWithArray(t,e)}return o.spliceWithArray(t,e,r)},spliceWithArray:function(t,e,r){return this[x].spliceWithArray(t,e,r)},push:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=this[x];return r.spliceWithArray(r.values.length,0,t),r.values.length},pop:function(){return this.splice(Math.max(this[x].values.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=this[x];return r.spliceWithArray(0,0,t),r.values.length},reverse:function(){var t=this.slice();return t.reverse.apply(t,arguments)},sort:function(t){var e=this.slice();return e.sort.apply(e,arguments)},remove:function(t){var e=this[x],r=e.dehanceValues(e.values).indexOf(t);return r>-1&&(this.splice(r,1),!0)},get:function(t){var e=this[x];if(e){if(t<e.values.length)return e.atom.reportObserved(),e.dehanceValue(e.values[t]);console.warn("[mobx.array] Attempt to read an array index ("+t+") that is out of bounds ("+e.values.length+"). Please check length first. Out of bound indices will not be tracked by MobX")}},set:function(t,e){var r=this[x],n=r.values;if(t<n.length){at(r.atom);var o=n[t];if(xe(r)){var i=Se(r,{type:"update",object:r.proxy,index:t,newValue:e});if(!i)return;e=i.newValue}(e=r.enhancer(e,o))!==o&&(n[t]=e,r.notifyArrayChildUpdate(t,e,o))}else{if(t!==n.length)throw new Error("[mobx.array] Index out of bounds, "+t+" is larger than "+n.length);r.spliceWithArray(t,0,[e])}}};["concat","flat","includes","indexOf","join","lastIndexOf","slice","toString","toLocaleString"].forEach((function(t){"function"==typeof Array.prototype[t]&&(Ce[t]=function(){var e=this[x];e.atom.reportObserved();var r=e.dehanceValues(e.values);return r[t].apply(r,arguments)})})),["every","filter","find","findIndex","flatMap","forEach","map","some"].forEach((function(t){"function"==typeof Array.prototype[t]&&(Ce[t]=function(e,r){var n=this,o=this[x];return o.atom.reportObserved(),o.dehanceValues(o.values)[t]((function(t,o){return e.call(r,t,o,n)}),r)})})),["reduce","reduceRight"].forEach((function(t){Ce[t]=function(){var e=this,r=this[x];r.atom.reportObserved();var n=arguments[0];return arguments[0]=function(t,o,i){return o=r.dehanceValue(o),n(t,o,i,e)},r.values[t].apply(r.values,arguments)}}));var Re,Ie=f("ObservableArrayAdministration",Ee);function Pe(t){return p(t)&&Ie(t[x])}var Le,Me={},Ne=function(){function t(t,e,r){if(void 0===e&&(e=U),void 0===r&&(r="ObservableMap@"+a()),this.enhancer=e,this.name=r,this[Re]=Me,this._keysAtom=k(this.name+".keys()"),this[Symbol.toStringTag]="Map","function"!=typeof Map)throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");this._data=new Map,this._hasMap=new Map,this.merge(t)}return t.prototype._has=function(t){return this._data.has(t)},t.prototype.has=function(t){var e=this;if(!Rt.trackingDerivation)return this._has(t);var r=this._hasMap.get(t);if(!r){var n=r=new _t(this._has(t),$,this.name+"."+y(t)+"?",!1);this._hasMap.set(t,n),ee(n,(function(){return e._hasMap.delete(t)}))}return r.get()},t.prototype.set=function(t,e){var r=this._has(t);if(xe(this)){var n=Se(this,{type:r?"update":"add",object:this,newValue:e,name:t});if(!n)return this;e=n.newValue}return r?this._updateValue(t,e):this._addValue(t,e),this},t.prototype.delete=function(t){var e=this;if((at(this._keysAtom),xe(this))&&!(n=Se(this,{type:"delete",object:this,name:t})))return!1;if(this._has(t)){var r=ke(this),n=r?{type:"delete",object:this,oldValue:this._data.get(t).value,name:t}:null;return ve((function(){e._keysAtom.reportChanged(),e._updateHasMapEntry(t,!1),e._data.get(t).setNewValue(void 0),e._data.delete(t)})),r&&Oe(this,n),!0}return!1},t.prototype._updateHasMapEntry=function(t,e){var r=this._hasMap.get(t);r&&r.setNewValue(e)},t.prototype._updateValue=function(t,e){var r=this._data.get(t);if((e=r.prepareNewValue(e))!==Rt.UNCHANGED){var n=ke(this),o=n?{type:"update",object:this,oldValue:r.value,name:t,newValue:e}:null;0,r.setNewValue(e),n&&Oe(this,o)}},t.prototype._addValue=function(t,e){var r=this;at(this._keysAtom),ve((function(){var n=new _t(e,r.enhancer,r.name+"."+y(t),!1);r._data.set(t,n),e=n.value,r._updateHasMapEntry(t,!0),r._keysAtom.reportChanged()}));var n=ke(this),o=n?{type:"add",object:this,name:t,newValue:e}:null;n&&Oe(this,o)},t.prototype.get=function(t){return this.has(t)?this.dehanceValue(this._data.get(t).get()):this.dehanceValue(void 0)},t.prototype.dehanceValue=function(t){return void 0!==this.dehancer?this.dehancer(t):t},t.prototype.keys=function(){return this._keysAtom.reportObserved(),this._data.keys()},t.prototype.values=function(){var t=this,e=this.keys();return tr({next:function(){var r=e.next(),n=r.done,o=r.value;return{done:n,value:n?void 0:t.get(o)}}})},t.prototype.entries=function(){var t=this,e=this.keys();return tr({next:function(){var r=e.next(),n=r.done,o=r.value;return{done:n,value:n?void 0:[o,t.get(o)]}}})},t.prototype[(Re=x,Symbol.iterator)]=function(){return this.entries()},t.prototype.forEach=function(t,e){var r,n;try{for(var o=A(this),i=o.next();!i.done;i=o.next()){var a=E(i.value,2),s=a[0],c=a[1];t.call(e,c,s,this)}}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},t.prototype.merge=function(t){var e=this;return Be(t)&&(t=t.toJS()),ve((function(){var r=wt(!0);try{h(t)?m(t).forEach((function(r){return e.set(r,t[r])})):Array.isArray(t)?t.forEach((function(t){var r=E(t,2),n=r[0],o=r[1];return e.set(n,o)})):g(t)?(t.constructor!==Map&&s("Cannot initialize from classes that inherit from Map: "+t.constructor.name),t.forEach((function(t,r){return e.set(r,t)}))):null!=t&&s("Cannot initialize map from "+t)}finally{xt(r)}})),this},t.prototype.clear=function(){var t=this;ve((function(){ut((function(){var e,r;try{for(var n=A(t.keys()),o=n.next();!o.done;o=n.next()){var i=o.value;t.delete(i)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}}))}))},t.prototype.replace=function(t){var e=this;return ve((function(){var r,n,o,i,a=function(t){if(g(t)||Be(t))return t;if(Array.isArray(t))return new Map(t);if(h(t)){var e=new Map;for(var r in t)e.set(r,t[r]);return e}return s("Cannot convert to map from '"+t+"'")}(t),c=new Map,u=!1;try{for(var l=A(e._data.keys()),p=l.next();!p.done;p=l.next()){var d=p.value;if(!a.has(d))if(e.delete(d))u=!0;else{var f=e._data.get(d);c.set(d,f)}}}catch(t){r={error:t}}finally{try{p&&!p.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}try{for(var v=A(a.entries()),m=v.next();!m.done;m=v.next()){var y=E(m.value,2),b=(d=y[0],f=y[1],e._data.has(d));if(e.set(d,f),e._data.has(d)){var w=e._data.get(d);c.set(d,w),b||(u=!0)}}}catch(t){o={error:t}}finally{try{m&&!m.done&&(i=v.return)&&i.call(v)}finally{if(o)throw o.error}}if(!u)if(e._data.size!==c.size)e._keysAtom.reportChanged();else for(var x=e._data.keys(),_=c.keys(),S=x.next(),k=_.next();!S.done;){if(S.value!==k.value){e._keysAtom.reportChanged();break}S=x.next(),k=_.next()}e._data=c})),this},Object.defineProperty(t.prototype,"size",{get:function(){return this._keysAtom.reportObserved(),this._data.size},enumerable:!0,configurable:!0}),t.prototype.toPOJO=function(){var t,e,r={};try{for(var n=A(this),o=n.next();!o.done;o=n.next()){var i=E(o.value,2),a=i[0],s=i[1];r["symbol"==typeof a?a:y(a)]=s}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return r},t.prototype.toJS=function(){return new Map(this)},t.prototype.toJSON=function(){return this.toPOJO()},t.prototype.toString=function(){var t=this;return this.name+"[{ "+Array.from(this.keys()).map((function(e){return y(e)+": "+t.get(e)})).join(", ")+" }]"},t.prototype.observe=function(t,e){return je(this,t)},t.prototype.intercept=function(t){return _e(this,t)},t}(),Be=f("ObservableMap",Ne),De={},Ue=function(){function t(t,e,r){if(void 0===e&&(e=U),void 0===r&&(r="ObservableSet@"+a()),this.name=r,this[Le]=De,this._data=new Set,this._atom=k(this.name),this[Symbol.toStringTag]="Set","function"!=typeof Set)throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");this.enhancer=function(t,n){return e(t,n,r)},t&&this.replace(t)}return t.prototype.dehanceValue=function(t){return void 0!==this.dehancer?this.dehancer(t):t},t.prototype.clear=function(){var t=this;ve((function(){ut((function(){var e,r;try{for(var n=A(t._data.values()),o=n.next();!o.done;o=n.next()){var i=o.value;t.delete(i)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}}))}))},t.prototype.forEach=function(t,e){var r,n;try{for(var o=A(this),i=o.next();!i.done;i=o.next()){var a=i.value;t.call(e,a,a,this)}}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},Object.defineProperty(t.prototype,"size",{get:function(){return this._atom.reportObserved(),this._data.size},enumerable:!0,configurable:!0}),t.prototype.add=function(t){var e=this;if((at(this._atom),xe(this))&&!(n=Se(this,{type:"add",object:this,newValue:t})))return this;if(!this.has(t)){ve((function(){e._data.add(e.enhancer(t,void 0)),e._atom.reportChanged()}));var r=ke(this),n=r?{type:"add",object:this,newValue:t}:null;0,r&&Oe(this,n)}return this},t.prototype.delete=function(t){var e=this;if(xe(this)&&!(n=Se(this,{type:"delete",object:this,oldValue:t})))return!1;if(this.has(t)){var r=ke(this),n=r?{type:"delete",object:this,oldValue:t}:null;return ve((function(){e._atom.reportChanged(),e._data.delete(t)})),r&&Oe(this,n),!0}return!1},t.prototype.has=function(t){return this._atom.reportObserved(),this._data.has(this.dehanceValue(t))},t.prototype.entries=function(){var t=0,e=Array.from(this.keys()),r=Array.from(this.values());return tr({next:function(){var n=t;return t+=1,n<r.length?{value:[e[n],r[n]],done:!1}:{done:!0}}})},t.prototype.keys=function(){return this.values()},t.prototype.values=function(){this._atom.reportObserved();var t=this,e=0,r=Array.from(this._data.values());return tr({next:function(){return e<r.length?{value:t.dehanceValue(r[e++]),done:!1}:{done:!0}}})},t.prototype.replace=function(t){var e=this;return $e(t)&&(t=t.toJS()),ve((function(){var r=wt(!0);try{Array.isArray(t)||v(t)?(e.clear(),t.forEach((function(t){return e.add(t)}))):null!=t&&s("Cannot initialize set from "+t)}finally{xt(r)}})),this},t.prototype.observe=function(t,e){return je(this,t)},t.prototype.intercept=function(t){return _e(this,t)},t.prototype.toJS=function(){return new Set(this)},t.prototype.toString=function(){return this.name+"[ "+Array.from(this).join(", ")+" ]"},t.prototype[(Le=x,Symbol.iterator)]=function(){return this.values()},t}(),$e=f("ObservableSet",Ue),ze=function(){function t(t,e,r,n){void 0===e&&(e=new Map),this.target=t,this.values=e,this.name=r,this.defaultEnhancer=n,this.keysAtom=new _(r+".keys")}return t.prototype.read=function(t){return this.values.get(t).get()},t.prototype.write=function(t,e){var r=this.target,n=this.values.get(t);if(n instanceof kt)n.set(e);else{if(xe(this)){if(!(i=Se(this,{type:"update",object:this.proxy||r,name:t,newValue:e})))return;e=i.newValue}if((e=n.prepareNewValue(e))!==Rt.UNCHANGED){var o=ke(this),i=o?{type:"update",object:this.proxy||r,oldValue:n.value,name:t,newValue:e}:null;0,n.setNewValue(e),o&&Oe(this,i)}}},t.prototype.has=function(t){var e=this.pendingKeys||(this.pendingKeys=new Map),r=e.get(t);if(r)return r.get();var n=!!this.values.get(t);return r=new _t(n,$,this.name+"."+y(t)+"?",!1),e.set(t,r),r.get()},t.prototype.addObservableProp=function(t,e,r){void 0===r&&(r=this.defaultEnhancer);var n=this.target;if(xe(this)){var o=Se(this,{object:this.proxy||n,name:t,type:"add",newValue:e});if(!o)return;e=o.newValue}var i=new _t(e,r,this.name+"."+y(t),!1);this.values.set(t,i),e=i.value,Object.defineProperty(n,t,function(t){return qe[t]||(qe[t]={configurable:!0,enumerable:!0,get:function(){return this[x].read(t)},set:function(e){this[x].write(t,e)}})}(t)),this.notifyPropertyAddition(t,e)},t.prototype.addComputedProp=function(t,e,r){var n,o,i,a=this.target;r.name=r.name||this.name+"."+y(e),this.values.set(e,new kt(r)),(t===a||(n=t,o=e,!(i=Object.getOwnPropertyDescriptor(n,o))||!1!==i.configurable&&!1!==i.writable))&&Object.defineProperty(t,e,function(t){return Fe[t]||(Fe[t]={configurable:Rt.computedConfigurable,enumerable:!1,get:function(){return We(this).read(t)},set:function(e){We(this).write(t,e)}})}(e))},t.prototype.remove=function(t){if(this.values.has(t)){var e=this.target;if(xe(this))if(!(a=Se(this,{object:this.proxy||e,name:t,type:"remove"})))return;try{Mt();var r=ke(this),n=this.values.get(t),o=n&&n.get();if(n&&n.set(void 0),this.keysAtom.reportChanged(),this.values.delete(t),this.pendingKeys){var i=this.pendingKeys.get(t);i&&i.set(!1)}delete this.target[t];var a=r?{type:"remove",object:this.proxy||e,oldValue:o,name:t}:null;0,r&&Oe(this,a)}finally{Nt()}}},t.prototype.illegalAccess=function(t,e){console.warn("Property '"+e+"' of '"+t+"' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")},t.prototype.observe=function(t,e){return je(this,t)},t.prototype.intercept=function(t){return _e(this,t)},t.prototype.notifyPropertyAddition=function(t,e){var r=ke(this),n=r?{type:"add",object:this.proxy||this.target,name:t,newValue:e}:null;if(r&&Oe(this,n),this.pendingKeys){var o=this.pendingKeys.get(t);o&&o.set(!0)}this.keysAtom.reportChanged()},t.prototype.getKeys=function(){var t,e;this.keysAtom.reportObserved();var r=[];try{for(var n=A(this.values),o=n.next();!o.done;o=n.next()){var i=E(o.value,2),a=i[0];i[1]instanceof _t&&r.push(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return r},t}();function Ve(t,e,r){if(void 0===e&&(e=""),void 0===r&&(r=U),Object.prototype.hasOwnProperty.call(t,x))return t[x];h(t)||(e=(t.constructor.name||"ObservableObject")+"@"+a()),e||(e="ObservableObject@"+a());var n=new ze(t,new Map,y(e),r);return d(t,x,n),n}var qe=Object.create(null),Fe=Object.create(null);function We(t){var e=t[x];return e||(N(t),t[x])}var He=f("ObservableObjectAdministration",ze);function Ge(t){return!!p(t)&&(N(t),He(t[x]))}function Xe(t,e){if("object"==typeof t&&null!==t){if(Pe(t))return void 0!==e&&s(!1),t[x].atom;if($e(t))return t[x];if(Be(t)){var r=t;return void 0===e?r._keysAtom:((n=r._data.get(e)||r._hasMap.get(e))||s(!1),n)}var n;if(N(t),e&&!t[x]&&t[e],Ge(t))return e?((n=t[x].values.get(e))||s(!1),n):s(!1);if(S(t)||jt(t)||qt(t))return t}else if("function"==typeof t&&qt(t[x]))return t[x];return s(!1)}function Ye(t,e){return t||s("Expecting some object"),void 0!==e?Ye(Xe(t,e)):S(t)||jt(t)||qt(t)||Be(t)||$e(t)?t:(N(t),t[x]?t[x]:void s(!1))}var Ke=Object.prototype.toString;function Je(t,e,r){return void 0===r&&(r=-1),function t(e,r,n,o,i){if(e===r)return 0!==e||1/e==1/r;if(null==e||null==r)return!1;if(e!=e)return r!=r;var a=typeof e;if("function"!==a&&"object"!==a&&"object"!=typeof r)return!1;var s=Ke.call(e);if(s!==Ke.call(r))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+e==""+r;case"[object Number]":return+e!=+e?+r!=+r:0==+e?1/+e==1/r:+e==+r;case"[object Date]":case"[object Boolean]":return+e==+r;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(r);case"[object Map]":case"[object Set]":n>=0&&n++}e=Qe(e),r=Qe(r);var c="[object Array]"===s;if(!c){if("object"!=typeof e||"object"!=typeof r)return!1;var u=e.constructor,l=r.constructor;if(u!==l&&!("function"==typeof u&&u instanceof u&&"function"==typeof l&&l instanceof l)&&"constructor"in e&&"constructor"in r)return!1}if(0===n)return!1;n<0&&(n=-1);i=i||[];var p=(o=o||[]).length;for(;p--;)if(o[p]===e)return i[p]===r;if(o.push(e),i.push(r),c){if((p=e.length)!==r.length)return!1;for(;p--;)if(!t(e[p],r[p],n-1,o,i))return!1}else{var h=Object.keys(e),d=void 0;if(p=h.length,Object.keys(r).length!==p)return!1;for(;p--;)if(d=h[p],!Ze(r,d)||!t(e[d],r[d],n-1,o,i))return!1}return o.pop(),i.pop(),!0}(t,e,r)}function Qe(t){return Pe(t)?t.slice():g(t)||Be(t)||v(t)||$e(t)?Array.from(t.entries()):t}function Ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tr(t){return t[Symbol.iterator]=er,t}function er(){return this}if("undefined"==typeof Proxy||"undefined"==typeof Symbol)throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:function(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}},extras:{getDebugName:function(t,e){return(void 0!==e?Xe(t,e):Ge(t)||Be(t)||$e(t)?Ye(t):Xe(t)).name}},$mobx:x})}).call(this,r(181),r(58))},function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,r(58))},function(t,e,r){t.exports=r(283)},function(t,e,r){var n=r(5),o=r(71),i=r(12),a=r(67),s=r(81),c=r(136),u=o("wks"),l=n.Symbol,p=c?l:l&&l.withoutSetter||a;t.exports=function(t){return i(u,t)&&(s||"string"==typeof u[t])||(s&&i(l,t)?u[t]=l[t]:u[t]=p("Symbol."+t)),u[t]}},function(t,e,r){"use strict";var n,o,i,a,s=r(45),c=r(37),u=r(5),l=r(25),p=r(124),h=r(24),d=r(134),f=r(60),g=r(55),v=r(103),m=r(15),y=r(31),b=r(137),w=r(50),x=r(138),_=r(143),S=r(125),k=r(82).set,j=r(144),O=r(126),T=r(146),A=r(85),E=r(147),C=r(40),R=r(68),I=r(7),P=r(148),L=r(56),M=r(69),N=I("species"),B="Promise",D=C.get,U=C.set,$=C.getterFor(B),z=p&&p.prototype,V=p,q=z,F=u.TypeError,W=u.document,H=u.process,G=A.f,X=G,Y=!!(W&&W.createEvent&&u.dispatchEvent),K="function"==typeof PromiseRejectionEvent,J=!1,Q=R(B,(function(){var t=w(V),e=t!==String(V);if(!e&&66===M)return!0;if(c&&!q.finally)return!0;if(M>=51&&/native code/.test(t))return!1;var r=new V((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[N]=n,!(J=r.then((function(){}))instanceof n)||!e&&P&&!K})),Z=Q||!_((function(t){V.all(t).catch((function(){}))})),tt=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},et=function(t,e){if(!t.notified){t.notified=!0;var r=t.reactions;j((function(){for(var n=t.value,o=1==t.state,i=0;r.length>i;){var a,s,c,u=r[i++],l=o?u.ok:u.fail,p=u.resolve,h=u.reject,d=u.domain;try{l?(o||(2===t.rejection&&it(t),t.rejection=1),!0===l?a=n:(d&&d.enter(),a=l(n),d&&(d.exit(),c=!0)),a===u.promise?h(F("Promise-chain cycle")):(s=tt(a))?s.call(a,p,h):p(a)):h(n)}catch(t){d&&!c&&d.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&nt(t)}))}},rt=function(t,e,r){var n,o;Y?((n=W.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),u.dispatchEvent(n)):n={promise:e,reason:r},!K&&(o=u["on"+t])?o(n):"unhandledrejection"===t&&T("Unhandled promise rejection",r)},nt=function(t){k.call(u,(function(){var e,r=t.facade,n=t.value;if(ot(t)&&(e=E((function(){L?H.emit("unhandledRejection",n,r):rt("unhandledrejection",r,n)})),t.rejection=L||ot(t)?2:1,e.error))throw e.value}))},ot=function(t){return 1!==t.rejection&&!t.parent},it=function(t){k.call(u,(function(){var e=t.facade;L?H.emit("rejectionHandled",e):rt("rejectionhandled",e,t.value)}))},at=function(t,e,r){return function(n){t(e,n,r)}},st=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,et(t,!0))},ct=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw F("Promise can't be resolved itself");var n=tt(e);n?j((function(){var r={done:!1};try{n.call(e,at(ct,r,t),at(st,r,t))}catch(e){st(r,e,t)}})):(t.value=e,t.state=1,et(t,!1))}catch(e){st({done:!1},e,t)}}};if(Q&&(q=(V=function(t){b(this,V,B),y(t),n.call(this);var e=D(this);try{t(at(ct,e),at(st,e))}catch(t){st(e,t)}}).prototype,(n=function(t){U(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q,{then:function(t,e){var r=$(this),n=G(S(this,V));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=L?H.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&et(r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=D(t);this.promise=t,this.resolve=at(ct,e),this.reject=at(st,e)},A.f=G=function(t){return t===V||t===i?new o(t):X(t)},!c&&"function"==typeof p&&z!==Object.prototype)){a=z.then,J||(h(z,"then",(function(t,e){var r=this;return new V((function(t,e){a.call(r,t,e)})).then(t,e)}),{unsafe:!0}),h(z,"catch",q.catch,{unsafe:!0}));try{delete z.constructor}catch(t){}f&&f(z,q)}s({global:!0,wrap:!0,forced:Q},{Promise:V}),g(V,B,!1,!0),v(B),i=l(B),s({target:B,stat:!0,forced:Q},{reject:function(t){var e=G(this);return e.reject.call(void 0,t),e.promise}}),s({target:B,stat:!0,forced:c||Q},{resolve:function(t){return O(c&&this===i?V:this,t)}}),s({target:B,stat:!0,forced:Z},{all:function(t){var e=this,r=G(e),n=r.resolve,o=r.reject,i=E((function(){var r=y(e.resolve),i=[],a=0,s=1;x(t,(function(t){var c=a++,u=!1;i.push(void 0),s++,r.call(e,t).then((function(t){u||(u=!0,i[c]=t,--s||n(i))}),o)})),--s||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=G(e),n=r.reject,o=E((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return f})),r.d(e,"f",(function(){return g})),r.d(e,"g",(function(){return v})),r.d(e,"h",(function(){return m})),r.d(e,"i",(function(){return y})),r.d(e,"j",(function(){return b})),r.d(e,"k",(function(){return w})),r.d(e,"m",(function(){return x})),r.d(e,"n",(function(){return _})),r.d(e,"l",(function(){return S})),r.d(e,"b",(function(){return k})),r.d(e,"c",(function(){return j})),r.d(e,"e",(function(){return O}));var n,o=r(231),i=r.n(o),a=r(6),s=r.n(a),c=(r(8),r(11),r(14),r(41),r(22)),u=r.n(c);async function l(t,e,r,n=!1){try{if("idb"===r)await u.a.setItem(t,e);else if("localstorage"===r){let r=e;n||(r=JSON.stringify(e)),localStorage.setItem(t,r)}else"storage.local"===r&&await new s.a((r,n)=>chrome.storage.local.set({[t]:e},()=>{const t=chrome.runtime.lastError;t&&n(t),r(!0)}));return{data:!0}}catch(t){return console.error("setStorage -> error",t),{error:t}}}async function p(t,e){try{return"idb"===e?await u.a.removeItem(t):"localstorage"===e?localStorage.removeItem(t):"storage.local"===e&&await new s.a((e,r)=>chrome.storage.local.remove(t,()=>{const t=chrome.runtime.lastError;t&&r(t),e(null)})),{data:!0}}catch(t){return console.error("clearStorage -> error",t),{error:t}}}!function(t){t.storeNote="store-notes",t.storeSearch="store-search",t.storeSetting="store-setting",t.storeSite="store-site",t.storeSync="store-sync",t.storeTodo="store-todo",t.storeUser="store-user",t.storeWallpaper="store-wallpaper",t.storeWeather="store-weather",t.storeBookmarks="store-bookmarks",t.storeGmail="store-gmail",t.storePrivacy="store-privacy",t.storeWallpaperAutoData="store-wallpaper-auto-data"}(n||(n={}));class h{constructor(t,e,r){this.options={ensureStringValue:!1,keepWithLogout:!1},this.key=t,this.type=e,this.options=Object.assign(Object.assign({},this.options),r),this.setInstanceMapper()}static getInstanceFromKey(t){return this.instanceKeyMapper.has(t)?this.instanceKeyMapper.get(t):null}static async deleteAllForLogout(){var t;const e=Array.from(i()(t=this.instanceKeyMapper).call(t));let r;return(await s.a.all(e.map(async t=>await t.deleteForLogout()))).some(t=>!!t.error&&(r=t.error,!0))?{error:r}:{data:!0}}setInstanceMapper(){h.instanceKeyMapper.set(this.key,this)}async create(t){return await l(this.key,t,this.type)}async read(t){return await async function(t,e,r=!1){try{if("idb"===e){return{data:await u.a.getItem(t)}}if("localstorage"===e){const e=localStorage.getItem(t);return!r&&e?"undefined"===e?{data:void 0}:{data:JSON.parse(e)}:{data:e}}if("storage.local"===e){return{data:await new s.a((e,r)=>chrome.storage.local.get(t,n=>{const o=chrome.runtime.lastError;o&&r(o),e(null==n?void 0:n[t])}))}}}catch(t){return console.error("getStorage -> error",t),{error:t}}}(this.key,t||this.type)}async update(t){const{data:e,error:r}=await this.read();if(r)return{error:r};if(e&&"object"==typeof e){const r=Object.assign(Object.assign({},e),t);return await this.create(r)}return{error:{data:e}}}async delete(t){return await p(this.key,t||this.type)}async deleteWithRetain(...t){if(0===t.length)return{error:{keys:t}};const{data:e,error:r}=await this.read();if(r)return{error:r};if(e&&"object"==typeof e){const r={};return t.forEach(t=>{r[t]=e[t]}),await this.create(r)}return{error:{data:e}}}async deleteForLogout(){return this.options.keepWithLogout?{data:!0}:await this.delete()}}h.instanceKeyMapper=new Map;var d=r(0);const f=new h(n.storeNote,"idb"),g=new class extends h{async create(t){return"localstorage"!==this.type&&setTimeout(()=>{l(this.key,t,"localstorage")},0),super.create(t)}async delete(){return"localstorage"!==this.type&&requestAnimationFrame(()=>{p(this.key,"localstorage")}),super.delete()}async deleteForLogout(){return await super.deleteWithRetain("ignoreSuggest")}}(n.storeSearch,d.i?"localstorage":"idb"),v=new class extends h{async create(t){return"localstorage"!==this.type&&setTimeout(()=>{l(this.key,t,"localstorage")},0),super.create(t)}async delete(){return"localstorage"!==this.type&&requestAnimationFrame(()=>{p(this.key,"localstorage")}),super.delete()}async deleteForLogout(){return await super.deleteWithRetain("permission")}}(n.storeSetting,d.i?"localstorage":"idb"),m=new class extends h{async create(t){return"localstorage"!==this.type&&setTimeout(()=>{l(this.key,t,"localstorage")},0),super.create(t)}async delete(){return"localstorage"!==this.type&&requestAnimationFrame(()=>{p(this.key,"localstorage")}),super.delete()}}(n.storeSite,d.i?"localstorage":"idb"),y=new class extends h{constructor(){super(...arguments),this.userStore=null,this.sendTabsSync=t=>{console.warn("SyncStorageManager ~ sync: need inject sendTabsSync",t)}}injectUserStore(t){this.userStore=t}injectSendTabsSync(t){this.sendTabsSync=t}async updateSyncPipe(t,e){var r;if(!(null===(r=this.userStore)||void 0===r?void 0:r.isLogin))return{error:"isLogin false"};const{data:n,error:o}=await this.read();if(o||!n)return{error:"read error"};if(!n.isOpenSync)return{error:"isOpenSync false"};const{autoBackupPipe:i}=n;i.data[t]=e,i.timestamp=Date.now(),i.websocketKeys.includes(t)||i.websocketKeys.push(t);const a=await this.update({autoBackupPipe:i});return this.sendTabsSync(this.key),a}}(n.storeSync,"idb"),b=new h(n.storeTodo,"idb"),w=new h(n.storeUser,d.i?"localstorage":"idb"),x=new h(n.storeWallpaper,"idb"),_=new h(n.storeWeather,"idb"),S=new h(n.storeWallpaperAutoData,"idb"),k=new h(n.storeBookmarks,"localstorage",{keepWithLogout:!0}),j=new h(n.storeGmail,"localstorage",{keepWithLogout:!0}),O=new h(n.storePrivacy,"localstorage",{keepWithLogout:!0})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";var n=r(38),o=r(149),i=r(26),a=r(40),s=r(152),c=a.set,u=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,r){var n=r(61),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},function(t,e,r){var n=r(15);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n=r(5),o=r(101),i=r(11),a=r(16),s=r(7),c=s("iterator"),u=s("toStringTag"),l=i.values;for(var p in o){var h=n[p],d=h&&h.prototype;if(d){if(d[c]!==l)try{a(d,c,l)}catch(t){d[c]=l}if(d[u]||a(d,u,p),o[p])for(var f in i)if(d[f]!==i[f])try{a(d,f,i[f])}catch(t){d[f]=i[f]}}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(18),o=r(19),i=r(47);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";var n=r(6),o=r.n(n),i=r(36),a=r.n(i),s=(r(8),r(11),r(14),r(21),r(64),r(41),r(221),r(0)),c=r(2),u=r(75),l=r(232),p=r(123);const h=t=>{t&&(s.s?window.open(t,"_self"):window.chrome.tabs.getCurrent(e=>window.chrome.tabs.update(e.id,{url:t},()=>{chrome.runtime.lastError&&(t.startsWith("http")?window.open(t,"_self"):window.chrome.tabs.create({url:t}))})))},d={randomId:p.c,group:(t,e)=>{const r=[],n=Math.ceil(t.length/e);for(let o=0;o<n;o++)o===n-1?r.push(t.slice(o*e,t.length)):r.push(t.slice(o*e,(o+1)*e));return r},openUrl:(t,e=!0,r)=>{!r||1!==r.button&&!d.ctrlKeyStatus(r)?e?s.s?window.open(t,"_blank").focus():window.chrome.tabs.create({url:t,active:!0}):h(t):s.s?window.open(t,"_blank"):window.chrome.tabs.create({url:t,active:!1})},openChromeApp:async(t,e=!0,n)=>{if(!await u.a.has(["management"]))try{await u.a.request(["management"])}catch(t){const{message:e}=await Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,93));return void e.error(i18n("no_permission_to_open_app",s.D.vendor))}chrome.management.get(t,async({type:o,launchType:i,enabled:a,appLaunchUrl:c}={})=>{if(chrome.runtime.lastError){const{message:t}=await Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,93));t.error(i18n("target_chrome_app_not_installed",s.D.vendor))}else{const s=()=>{!n||1!==n.button&&!d.ctrlKeyStatus(n)?e||"hosted_app"!==o||"OPEN_AS_REGULAR_TAB"!==i?chrome.management.launchApp(t):h(c):chrome.management.launchApp(t)};if(a)s();else{const{IConfirm:e}=await Promise.all([r.e(0),r.e(38)]).then(r.bind(null,485));e.create().toShow({text:i18n("app_disabled_enable_first"),onConfirm:()=>{window.chrome.management.setEnabled(t,!0,()=>{s()})}})}}})},send:async function({key:t,data:e}){s.s||window.chrome.runtime.sendMessage({key:t,data:e})},downloadImg:function(t,e,r){if(!e)if(e="infinity-"+Math.ceil(Date.now()*Math.random()/(555555*Math.random())),t.startsWith("blob:"))e=`${e}.${r||"png"}`;else{const r=t.indexOf("?");let n=t;~r&&(n=t.slice(0,r));e=`${e}.${n.split("/").reverse()[0].split(".").reverse()[0]}`}const n=e,o=document.createElement("a");let i=t;t.startsWith("blob:")||(i=t.includes("?")?`${t}&attname=${n}`:`${t}?attname=${n}`),s.r?window.open(i,"_blank"):(s.n&&o.setAttribute("target","_blank"),o.setAttribute("download",n),o.setAttribute("href",i),document.body.appendChild(o),o.click(),document.body.removeChild(o))},fmtTime:(t,e)=>new Date(t).toLocaleString(s.D.lang,e||{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}),getTimestamp:async function(){return Date.now()},parseJwt:t=>{const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(e).split("").map(t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(r)},compress:(t,e=10,r)=>new o.a(n=>{const o=new Image,i=document.createElement("canvas"),a=i.getContext("2d");o.onload=()=>{r=r||o.height*e/o.width,i.width=e,i.height=r,a.fillRect(0,0,e,r),a.drawImage(o,0,0,e,r),i.toBlob(n,"image/jpeg")},o.src=t}),mergeArray:function(t=[],e=[],r="id",n="updatetime"){if(!t||0===t.length)return{result:e||[],isLocalEffective:!1};const o=e.filter(t=>!!t),i=Object.create(null);e.forEach((t,e)=>{if(t[r]){const n=t[r];i[n]=e}});let a=!1;return t.filter(t=>0!==t[n]).forEach(t=>{const e=t[r],s=i[e];if(void 0!==s){(o[s][n]||0)<(t[n]||0)&&(o[s]=t,a=!0)}else a=!0,o.push(t)}),{result:o.filter(t=>!!t),isLocalEffective:a}},throttle:function(t,e){let r;return function(...n){const o=this;r||(r=setTimeout(()=>{t.apply(o,n),r=null},e))}},debounce:function(t,e){let r=null;return function(){const n=this,o=arguments;r&&(clearTimeout(r),r=null),r=setTimeout(()=>{t.apply(n,o)},e)}},setStyle:function(t,e=document.body){Object.keys(t).forEach(r=>{e.style.setProperty(r,t[r])})},isInputType:t=>!!t&&(!("INPUT"!==t.tagName||t.getAttribute("type")&&"text"!==t.getAttribute("type")&&"search"!==t.getAttribute("type"))||("TEXTAREA"===t.tagName||(!!t.getAttribute("contenteditable")||void 0))),convertBase64ToBlob:t=>{const e=t.split(",");let r="",n="";e.length>1&&(n=e[1],r=e[0].substring(e[0].indexOf(":")+1,e[0].indexOf(";")));const o=atob(n),i=new ArrayBuffer(o.length),a=new Uint8Array(i);for(let t=0;t<o.length;t++)a[t]=o.charCodeAt(t);return new Blob([i],{type:r})},isTouchScreendevice:()=>!(!("ontouchstart"in window)&&!navigator.maxTouchPoints),stopBubble(t){t.stopPropagation()},hexColorDelta(t,e){let r,n,o,i,a,s;Array.isArray(t)?[r,n,o]=t:(r=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16)),Array.isArray(e)?[i,a,s]=e:(i=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16));let c=255-Math.abs(r-i),u=255-Math.abs(n-a),l=255-Math.abs(o-s);return c/=255,u/=255,l/=255,(c+u+l)/3},async getSimilarColor(t){const e=a.a.createObjectURL(t),r=await new o.a(t=>{const r=new Image;r.onload=()=>t(r),r.src=e}),n=(new ColorThief).getColor(r),i=window.__INFINITY__.color_list,s=i.map(t=>d.hexColorDelta(n,t)),c=Math.max.apply(null,s),u=i[s.indexOf(c)];return a.a.revokeObjectURL(e),u},getPrivacyUrl(){const t=c.IS_ZH?"zh":"en";return s.n?`/privacy/${t}/privacy.html`:`${s.u}/${s.e}/${s.c}/${t}/privacy.html`},sleep:(t=0)=>new o.a(e=>{setTimeout(()=>{e(null)},t)}),checkImage(){let t;return[e=>new o.a((r,n)=>{t=new Image,t.onload=r,t.onerror=n,t.src=e}),()=>{t&&(t.src="")}]},requestFirefoxThrottle(t,e,r=!1){if(s.n||r){const r="throttle-"+t;if("boolean"==typeof e&&localStorage.setItem(r,Date.now()+""),"number"==typeof e){const t=localStorage.getItem(r),n=Date.now();if(t&&Number(t)<n&&Number(t)+e>n)return!1}}return!0},chooseFile:(t,e)=>(t=t||"image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg",e=e||"readAsDataURL",new o.a(r=>{try{document.querySelectorAll(".choose-file").forEach(t=>{document.body.removeChild(t)})}catch(t){}const n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("class","choose-file"),n.setAttribute("accept",t),n.style.opacity="0",n.style.width="0",n.style.height="0",n.value="",n.addEventListener("change",t=>{const o=t.target.files[0],i=new FileReader;i[e](o),i.onload=function(t){const e=t.target.result;r(e);try{document.body.removeChild(n)}catch(t){}}},{once:!0}),document.body.appendChild(n),n.click()})),exportJsonFile(t,e){const r=JSON.stringify(t);let n="text/infinity";s.r&&(n="custom/infinity");const o=new Blob([r],{type:n}),i=a.a.createObjectURL(o);if(s.r)window.open(i,"_blank");else{const t=new Date,r=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),n=document.createElement("a");n.href=i,n.download=e+r+".infinity",document.body.appendChild(n),n.click(),document.body.removeChild(n)}a.a.revokeObjectURL(i)},stopShowMenu(t){if(!d.isInputType(t.target))return t.stopPropagation(),t.preventDefault(),document.querySelector("i-menu").toHide(),!1},ctrlKeyStatus:t=>s.o?t.metaKey:t.ctrlKey,getFavIconSrc:t=>g(t)?t:function(t){try{return new l.a(t).host}catch(e){return t}}(function(t){if(function(t){return/^(.+?):\/\//.test(t)}(t)||g(t))return t;return"http://"+t}(t)).replace("^www.",""),getLastReqValue(t){const e=[],r=this;return async function(n,o,i){const a=r.randomId("req");e.push(a);const s=await t(n,o,i),c=e.findIndex(t=>t===a),u=e.length;return e.splice(0,c+1),c===u-1?s:null}},isFirstDate(t){const e=new Date("2013/11/30").toLocaleDateString(t);let r="";if(e.replace(/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/,(t,e)=>(r=e,"")),"2013"===r)return!0;const n=String(new Date("2013/11/30").getDate());return r===n},internaDateToStan:p.a,getTargetLogDomain(t){if(!t)return"";try{if(t.startsWith("http://")||t.startsWith("https://")){const e=new a.a(t);if(e.host)return e.host}return t.split("?")[0]}catch(e){return t}}};const f=/^\w+:\w/;function g(t){return f.test(t)}e.a=d;const v=document.createElement("script");v.src="/vendor/color-thief.min.js",document.head.appendChild(v),v.onload=()=>{v.remove()}},function(t,e,r){var n=r(10);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(18),o=r(79),i=r(13),a=r(78),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,r(58))},function(t,e,r){"use strict";var n=r(45),o=r(182);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,r){(function(e){t.exports=function t(e,r,n){function o(a,s){if(!r[a]){if(!e[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};e[a][0].call(u.exports,(function(t){var r=e[a][1][t];return o(r||t)}),u,u.exports,t,e,r,n)}return r[a].exports}for(var i=!1,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(t,r,n){(function(t){"use strict";var e,n,o=t.MutationObserver||t.WebKitMutationObserver;if(o){var i=0,a=new o(l),s=t.document.createTextNode("");a.observe(s,{characterData:!0}),e=function(){s.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)e="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){l(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(l,0)};else{var c=new t.MessageChannel;c.port1.onmessage=l,e=function(){c.port2.postMessage(0)}}var u=[];function l(){var t,e;n=!0;for(var r=u.length;r;){for(e=u,u=[],t=-1;++t<r;)e[t]();r=u.length}n=!1}r.exports=function(t){1!==u.push(t)||n||e()}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e,r){"use strict";var n=t(1);function o(){}var i={},a=["REJECTED"],s=["FULFILLED"],c=["PENDING"];function u(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,t!==o&&d(this,t)}function l(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function p(t,e,r){n((function(){var n;try{n=e(r)}catch(e){return i.reject(t,e)}n===t?i.reject(t,new TypeError("Cannot resolve promise with itself")):i.resolve(t,n)}))}function h(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,i.reject(t,e))}function o(e){r||(r=!0,i.resolve(t,e))}var a=f((function(){e(o,n)}));"error"===a.status&&n(a.value)}function f(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}e.exports=u,u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){if("function"!=typeof t&&this.state===s||"function"!=typeof e&&this.state===a)return this;var r=new this.constructor(o);return this.state!==c?p(r,this.state===s?t:e,this.outcome):this.queue.push(new l(r,t,e)),r},l.prototype.callFulfilled=function(t){i.resolve(this.promise,t)},l.prototype.otherCallFulfilled=function(t){p(this.promise,this.onFulfilled,t)},l.prototype.callRejected=function(t){i.reject(this.promise,t)},l.prototype.otherCallRejected=function(t){p(this.promise,this.onRejected,t)},i.resolve=function(t,e){var r=f(h,e);if("error"===r.status)return i.reject(t,r.value);var n=r.value;if(n)d(t,n);else{t.state=s,t.outcome=e;for(var o=-1,a=t.queue.length;++o<a;)t.queue[o].callFulfilled(e)}return t},i.reject=function(t,e){t.state=a,t.outcome=e;for(var r=-1,n=t.queue.length;++r<n;)t.queue[r].callRejected(e);return t},u.resolve=function(t){return t instanceof this?t:i.resolve(new this(o),t)},u.reject=function(t){var e=new this(o);return i.reject(e,t)},u.all=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,n=!1;if(!r)return this.resolve([]);for(var a=new Array(r),s=0,c=-1,u=new this(o);++c<r;)l(t[c],c);return u;function l(t,o){e.resolve(t).then((function(t){a[o]=t,++s!==r||n||(n=!0,i.resolve(u,a))}),(function(t){n||(n=!0,i.reject(u,t))}))}},u.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,n=!1;if(!r)return this.resolve([]);for(var a,s=-1,c=new this(o);++s<r;)a=t[s],e.resolve(a).then((function(t){n||(n=!0,i.resolve(c,t))}),(function(t){n||(n=!0,i.reject(c,t))}));return c}},{1:1}],3:[function(t,r,n){(function(e){"use strict";"function"!=typeof e.Promise&&(e.Promise=t(2))}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(t){return}}();function i(t,e){t=t||[],e=e||{};try{return new Blob(t,e)}catch(o){if("TypeError"!==o.name)throw o;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),n=0;n<t.length;n+=1)r.append(t[n]);return r.getBlob(e.type)}}"undefined"==typeof Promise&&t(3);var a=Promise;function s(t,e){e&&t.then((function(t){e(null,t)}),(function(t){e(t)}))}function c(t,e,r){"function"==typeof e&&t.then(e),"function"==typeof r&&t.catch(r)}function u(t){return"string"!=typeof t&&(console.warn(t+" used as a key, but it is not a string."),t=String(t)),t}function l(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var p=void 0,h={},d=Object.prototype.toString;function f(t){return"boolean"==typeof p?a.resolve(p):function(t){return new a((function(e){var r=t.transaction("local-forage-detect-blob-support","readwrite"),n=i([""]);r.objectStore("local-forage-detect-blob-support").put(n,"key"),r.onabort=function(t){t.preventDefault(),t.stopPropagation(),e(!1)},r.oncomplete=function(){var t=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);e(r||!t||parseInt(t[1],10)>=43)}})).catch((function(){return!1}))}(t).then((function(t){return p=t}))}function g(t){var e=h[t.name],r={};r.promise=new a((function(t,e){r.resolve=t,r.reject=e})),e.deferredOperations.push(r),e.dbReady?e.dbReady=e.dbReady.then((function(){return r.promise})):e.dbReady=r.promise}function v(t){var e=h[t.name].deferredOperations.pop();if(e)return e.resolve(),e.promise}function m(t,e){var r=h[t.name].deferredOperations.pop();if(r)return r.reject(e),r.promise}function y(t,e){return new a((function(r,n){if(h[t.name]=h[t.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},t.db){if(!e)return r(t.db);g(t),t.db.close()}var i=[t.name];e&&i.push(t.version);var a=o.open.apply(o,i);e&&(a.onupgradeneeded=function(e){var r=a.result;try{r.createObjectStore(t.storeName),e.oldVersion<=1&&r.createObjectStore("local-forage-detect-blob-support")}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+t.name+'" has been upgraded from version '+e.oldVersion+" to version "+e.newVersion+', but the storage "'+t.storeName+'" already exists.')}}),a.onerror=function(t){t.preventDefault(),n(a.error)},a.onsuccess=function(){r(a.result),v(t)}}))}function b(t){return y(t,!1)}function w(t){return y(t,!0)}function x(t,e){if(!t.db)return!0;var r=!t.db.objectStoreNames.contains(t.storeName),n=t.version<t.db.version,o=t.version>t.db.version;if(n&&(t.version!==e&&console.warn('The database "'+t.name+"\" can't be downgraded from version "+t.db.version+" to version "+t.version+"."),t.version=t.db.version),o||r){if(r){var i=t.db.version+1;i>t.version&&(t.version=i)}return!0}return!1}function _(t){return i([function(t){for(var e=t.length,r=new ArrayBuffer(e),n=new Uint8Array(r),o=0;o<e;o++)n[o]=t.charCodeAt(o);return r}(atob(t.data))],{type:t.type})}function S(t){return t&&t.__local_forage_encoded_blob}function k(t){var e=this,r=e._initReady().then((function(){var t=h[e._dbInfo.name];if(t&&t.dbReady)return t.dbReady}));return c(r,t,t),r}function j(t,e,r,n){void 0===n&&(n=1);try{var o=t.db.transaction(t.storeName,e);r(null,o)}catch(o){if(n>0&&(!t.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then((function(){if(!t.db||"NotFoundError"===o.name&&!t.db.objectStoreNames.contains(t.storeName)&&t.version<=t.db.version)return t.db&&(t.version=t.db.version+1),w(t)})).then((function(){return function(t){g(t);for(var e=h[t.name],r=e.forages,n=0;n<r.length;n++){var o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return t.db=null,b(t).then((function(e){return t.db=e,x(t)?w(t):e})).then((function(n){t.db=e.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n})).catch((function(e){throw m(t,e),e}))}(t).then((function(){j(t,e,r,n-1)}))})).catch(r);r(o)}}var O={_driver:"asyncStorage",_initStorage:function(t){var e=this,r={db:null};if(t)for(var n in t)r[n]=t[n];var o=h[r.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},h[r.name]=o),o.forages.push(e),e._initReady||(e._initReady=e.ready,e.ready=k);var i=[];function s(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var u=o.forages[c];u!==e&&i.push(u._initReady().catch(s))}var l=o.forages.slice(0);return a.all(i).then((function(){return r.db=o.db,b(r)})).then((function(t){return r.db=t,x(r,e._defaultConfig.version)?w(r):t})).then((function(t){r.db=o.db=t,e._dbInfo=r;for(var n=0;n<l.length;n++){var i=l[n];i!==e&&(i._dbInfo.db=r.db,i._dbInfo.version=r.version)}}))},_support:function(){try{if(!o||!o.open)return!1;var t="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),e="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!t||e)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(t){return!1}}(),iterate:function(t,e){var r=this,n=new a((function(e,n){r.ready().then((function(){j(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).openCursor(),s=1;a.onsuccess=function(){var r=a.result;if(r){var n=r.value;S(n)&&(n=_(n));var o=t(n,r.key,s++);void 0!==o?e(o):r.continue()}else e()},a.onerror=function(){n(a.error)}}catch(t){n(t)}}))})).catch(n)}));return s(n,e),n},getItem:function(t,e){var r=this;t=u(t);var n=new a((function(e,n){r.ready().then((function(){j(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).get(t);a.onsuccess=function(){var t=a.result;void 0===t&&(t=null),S(t)&&(t=_(t)),e(t)},a.onerror=function(){n(a.error)}}catch(t){n(t)}}))})).catch(n)}));return s(n,e),n},setItem:function(t,e,r){var n=this;t=u(t);var o=new a((function(r,o){var i;n.ready().then((function(){return i=n._dbInfo,"[object Blob]"===d.call(e)?f(i.db).then((function(t){return t?e:(r=e,new a((function(t,e){var n=new FileReader;n.onerror=e,n.onloadend=function(e){var n=btoa(e.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:r.type})},n.readAsBinaryString(r)})));var r})):e})).then((function(e){j(n._dbInfo,"readwrite",(function(i,a){if(i)return o(i);try{var s=a.objectStore(n._dbInfo.storeName);null===e&&(e=void 0);var c=s.put(e,t);a.oncomplete=function(){void 0===e&&(e=null),r(e)},a.onabort=a.onerror=function(){var t=c.error?c.error:c.transaction.error;o(t)}}catch(t){o(t)}}))})).catch(o)}));return s(o,r),o},removeItem:function(t,e){var r=this;t=u(t);var n=new a((function(e,n){r.ready().then((function(){j(r._dbInfo,"readwrite",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).delete(t);i.oncomplete=function(){e()},i.onerror=function(){n(a.error)},i.onabort=function(){var t=a.error?a.error:a.transaction.error;n(t)}}catch(t){n(t)}}))})).catch(n)}));return s(n,e),n},clear:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){j(e._dbInfo,"readwrite",(function(n,o){if(n)return r(n);try{var i=o.objectStore(e._dbInfo.storeName).clear();o.oncomplete=function(){t()},o.onabort=o.onerror=function(){var t=i.error?i.error:i.transaction.error;r(t)}}catch(t){r(t)}}))})).catch(r)}));return s(r,t),r},length:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){j(e._dbInfo,"readonly",(function(n,o){if(n)return r(n);try{var i=o.objectStore(e._dbInfo.storeName).count();i.onsuccess=function(){t(i.result)},i.onerror=function(){r(i.error)}}catch(t){r(t)}}))})).catch(r)}));return s(r,t),r},key:function(t,e){var r=this,n=new a((function(e,n){t<0?e(null):r.ready().then((function(){j(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName),s=!1,c=a.openKeyCursor();c.onsuccess=function(){var r=c.result;r?0===t||s?e(r.key):(s=!0,r.advance(t)):e(null)},c.onerror=function(){n(c.error)}}catch(t){n(t)}}))})).catch(n)}));return s(n,e),n},keys:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){j(e._dbInfo,"readonly",(function(n,o){if(n)return r(n);try{var i=o.objectStore(e._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var e=i.result;e?(a.push(e.key),e.continue()):t(a)},i.onerror=function(){r(i.error)}}catch(t){r(t)}}))})).catch(r)}));return s(r,t),r},dropInstance:function(t,e){e=l.apply(this,arguments);var r=this.config();(t="function"!=typeof t&&t||{}).name||(t.name=t.name||r.name,t.storeName=t.storeName||r.storeName);var n,i=this;if(t.name){var c=t.name===r.name&&i._dbInfo.db,u=c?a.resolve(i._dbInfo.db):b(t).then((function(e){var r=h[t.name],n=r.forages;r.db=e;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=e;return e}));n=t.storeName?u.then((function(e){if(e.objectStoreNames.contains(t.storeName)){var r=e.version+1;g(t);var n=h[t.name],i=n.forages;e.close();for(var s=0;s<i.length;s++){var c=i[s];c._dbInfo.db=null,c._dbInfo.version=r}return new a((function(e,n){var i=o.open(t.name,r);i.onerror=function(t){i.result.close(),n(t)},i.onupgradeneeded=function(){i.result.deleteObjectStore(t.storeName)},i.onsuccess=function(){var t=i.result;t.close(),e(t)}})).then((function(t){n.db=t;for(var e=0;e<i.length;e++){var r=i[e];r._dbInfo.db=t,v(r._dbInfo)}})).catch((function(e){throw(m(t,e)||a.resolve()).catch((function(){})),e}))}})):u.then((function(e){g(t);var r=h[t.name],n=r.forages;e.close();for(var i=0;i<n.length;i++)n[i]._dbInfo.db=null;return new a((function(e,r){var n=o.deleteDatabase(t.name);n.onerror=n.onblocked=function(t){var e=n.result;e&&e.close(),r(t)},n.onsuccess=function(){var t=n.result;t&&t.close(),e(t)}})).then((function(t){r.db=t;for(var e=0;e<n.length;e++)v(n[e]._dbInfo)})).catch((function(e){throw(m(t,e)||a.resolve()).catch((function(){})),e}))}))}else n=a.reject("Invalid arguments");return s(n,e),n}},T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",A=/^~~local_forage_type~([^~]+)~/,E="__lfsc__:".length,C=E+"arbf".length,R=Object.prototype.toString;function I(t){var e,r,n,o,i,a=.75*t.length,s=t.length,c=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),l=new Uint8Array(u);for(e=0;e<s;e+=4)r=T.indexOf(t[e]),n=T.indexOf(t[e+1]),o=T.indexOf(t[e+2]),i=T.indexOf(t[e+3]),l[c++]=r<<2|n>>4,l[c++]=(15&n)<<4|o>>2,l[c++]=(3&o)<<6|63&i;return u}function P(t){var e,r=new Uint8Array(t),n="";for(e=0;e<r.length;e+=3)n+=T[r[e]>>2],n+=T[(3&r[e])<<4|r[e+1]>>4],n+=T[(15&r[e+1])<<2|r[e+2]>>6],n+=T[63&r[e+2]];return r.length%3==2?n=n.substring(0,n.length-1)+"=":r.length%3==1&&(n=n.substring(0,n.length-2)+"=="),n}var L={serialize:function(t,e){var r="";if(t&&(r=R.call(t)),t&&("[object ArrayBuffer]"===r||t.buffer&&"[object ArrayBuffer]"===R.call(t.buffer))){var n,o="__lfsc__:";t instanceof ArrayBuffer?(n=t,o+="arbf"):(n=t.buffer,"[object Int8Array]"===r?o+="si08":"[object Uint8Array]"===r?o+="ui08":"[object Uint8ClampedArray]"===r?o+="uic8":"[object Int16Array]"===r?o+="si16":"[object Uint16Array]"===r?o+="ur16":"[object Int32Array]"===r?o+="si32":"[object Uint32Array]"===r?o+="ui32":"[object Float32Array]"===r?o+="fl32":"[object Float64Array]"===r?o+="fl64":e(new Error("Failed to get type for BinaryArray"))),e(o+P(n))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r="~~local_forage_type~"+t.type+"~"+P(this.result);e("__lfsc__:blob"+r)},i.readAsArrayBuffer(t)}else try{e(JSON.stringify(t))}catch(r){console.error("Couldn't convert value into a JSON string: ",t),e(null,r)}},deserialize:function(t){if("__lfsc__:"!==t.substring(0,E))return JSON.parse(t);var e,r=t.substring(C),n=t.substring(E,C);if("blob"===n&&A.test(r)){var o=r.match(A);e=o[1],r=r.substring(o[0].length)}var a=I(r);switch(n){case"arbf":return a;case"blob":return i([a],{type:e});case"si08":return new Int8Array(a);case"ui08":return new Uint8Array(a);case"uic8":return new Uint8ClampedArray(a);case"si16":return new Int16Array(a);case"ur16":return new Uint16Array(a);case"si32":return new Int32Array(a);case"ui32":return new Uint32Array(a);case"fl32":return new Float32Array(a);case"fl64":return new Float64Array(a);default:throw new Error("Unkown type: "+n)}},stringToBuffer:I,bufferToString:P};function M(t,e,r,n){t.executeSql("CREATE TABLE IF NOT EXISTS "+e.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,n)}function N(t,e,r,n,o,i){t.executeSql(r,n,o,(function(t,a){a.code===a.SYNTAX_ERR?t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[e.storeName],(function(t,s){s.rows.length?i(t,a):M(t,e,(function(){t.executeSql(r,n,o,i)}),i)}),i):i(t,a)}),i)}function B(t,e,r,n){var o=this;t=u(t);var i=new a((function(i,a){o.ready().then((function(){void 0===e&&(e=null);var s=e,c=o._dbInfo;c.serializer.serialize(e,(function(e,u){u?a(u):c.db.transaction((function(r){N(r,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[t,e],(function(){i(s)}),(function(t,e){a(e)}))}),(function(e){if(e.code===e.QUOTA_ERR){if(n>0)return void i(B.apply(o,[t,s,r,n-1]));a(e)}}))}))})).catch(a)}));return s(i,r),i}function D(t){return new a((function(e,r){t.transaction((function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(r,n){for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i).name);e({db:t,storeNames:o})}),(function(t,e){r(e)}))}),(function(t){r(t)}))}))}var U={_driver:"webSQLStorage",_initStorage:function(t){var e=this,r={db:null};if(t)for(var n in t)r[n]="string"!=typeof t[n]?t[n].toString():t[n];var o=new a((function(t,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(t){return n(t)}r.db.transaction((function(o){M(o,r,(function(){e._dbInfo=r,t()}),(function(t,e){n(e)}))}),n)}));return r.serializer=L,o},_support:"function"==typeof openDatabase,iterate:function(t,e){var r=this,n=new a((function(e,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){N(r,o,"SELECT * FROM "+o.storeName,[],(function(r,n){for(var i=n.rows,a=i.length,s=0;s<a;s++){var c=i.item(s),u=c.value;if(u&&(u=o.serializer.deserialize(u)),void 0!==(u=t(u,c.key,s+1)))return void e(u)}e()}),(function(t,e){n(e)}))}))})).catch(n)}));return s(n,e),n},getItem:function(t,e){var r=this;t=u(t);var n=new a((function(e,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){N(r,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[t],(function(t,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),e(n)}),(function(t,e){n(e)}))}))})).catch(n)}));return s(n,e),n},setItem:function(t,e,r){return B.apply(this,[t,e,r,1])},removeItem:function(t,e){var r=this;t=u(t);var n=new a((function(e,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){N(r,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[t],(function(){e()}),(function(t,e){n(e)}))}))})).catch(n)}));return s(n,e),n},clear:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){var n=e._dbInfo;n.db.transaction((function(e){N(e,n,"DELETE FROM "+n.storeName,[],(function(){t()}),(function(t,e){r(e)}))}))})).catch(r)}));return s(r,t),r},length:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){var n=e._dbInfo;n.db.transaction((function(e){N(e,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],(function(e,r){var n=r.rows.item(0).c;t(n)}),(function(t,e){r(e)}))}))})).catch(r)}));return s(r,t),r},key:function(t,e){var r=this,n=new a((function(e,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){N(r,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[t+1],(function(t,r){var n=r.rows.length?r.rows.item(0).key:null;e(n)}),(function(t,e){n(e)}))}))})).catch(n)}));return s(n,e),n},keys:function(t){var e=this,r=new a((function(t,r){e.ready().then((function(){var n=e._dbInfo;n.db.transaction((function(e){N(e,n,"SELECT key FROM "+n.storeName,[],(function(e,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);t(n)}),(function(t,e){r(e)}))}))})).catch(r)}));return s(r,t),r},dropInstance:function(t,e){e=l.apply(this,arguments);var r=this.config();(t="function"!=typeof t&&t||{}).name||(t.name=t.name||r.name,t.storeName=t.storeName||r.storeName);var n,o=this;return s(n=t.name?new a((function(e){var n;n=t.name===r.name?o._dbInfo.db:openDatabase(t.name,"","",0),t.storeName?e({db:n,storeNames:[t.storeName]}):e(D(n))})).then((function(t){return new a((function(e,r){t.db.transaction((function(n){function o(t){return new a((function(e,r){n.executeSql("DROP TABLE IF EXISTS "+t,[],(function(){e()}),(function(t,e){r(e)}))}))}for(var i=[],s=0,c=t.storeNames.length;s<c;s++)i.push(o(t.storeNames[s]));a.all(i).then((function(){e()})).catch((function(t){r(t)}))}),(function(t){r(t)}))}))})):a.reject("Invalid arguments"),e),n}};function $(t,e){var r=t.name+"/";return t.storeName!==e.storeName&&(r+=t.storeName+"/"),r}function z(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(t){return!0}}()||localStorage.length>0}var V={_driver:"localStorageWrapper",_initStorage:function(t){var e={};if(t)for(var r in t)e[r]=t[r];return e.keyPrefix=$(t,this._defaultConfig),z()?(this._dbInfo=e,e.serializer=L,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(t){return!1}}(),iterate:function(t,e){var r=this,n=r.ready().then((function(){for(var e=r._dbInfo,n=e.keyPrefix,o=n.length,i=localStorage.length,a=1,s=0;s<i;s++){var c=localStorage.key(s);if(0===c.indexOf(n)){var u=localStorage.getItem(c);if(u&&(u=e.serializer.deserialize(u)),void 0!==(u=t(u,c.substring(o),a++)))return u}}}));return s(n,e),n},getItem:function(t,e){var r=this;t=u(t);var n=r.ready().then((function(){var e=r._dbInfo,n=localStorage.getItem(e.keyPrefix+t);return n&&(n=e.serializer.deserialize(n)),n}));return s(n,e),n},setItem:function(t,e,r){var n=this;t=u(t);var o=n.ready().then((function(){void 0===e&&(e=null);var r=e;return new a((function(o,i){var a=n._dbInfo;a.serializer.serialize(e,(function(e,n){if(n)i(n);else try{localStorage.setItem(a.keyPrefix+t,e),o(r)}catch(t){"QuotaExceededError"!==t.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==t.name||i(t),i(t)}}))}))}));return s(o,r),o},removeItem:function(t,e){var r=this;t=u(t);var n=r.ready().then((function(){var e=r._dbInfo;localStorage.removeItem(e.keyPrefix+t)}));return s(n,e),n},clear:function(t){var e=this,r=e.ready().then((function(){for(var t=e._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(t)&&localStorage.removeItem(n)}}));return s(r,t),r},length:function(t){var e=this.keys().then((function(t){return t.length}));return s(e,t),e},key:function(t,e){var r=this,n=r.ready().then((function(){var e,n=r._dbInfo;try{e=localStorage.key(t)}catch(t){e=null}return e&&(e=e.substring(n.keyPrefix.length)),e}));return s(n,e),n},keys:function(t){var e=this,r=e.ready().then((function(){for(var t=e._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++){var i=localStorage.key(o);0===i.indexOf(t.keyPrefix)&&n.push(i.substring(t.keyPrefix.length))}return n}));return s(r,t),r},dropInstance:function(t,e){if(e=l.apply(this,arguments),!(t="function"!=typeof t&&t||{}).name){var r=this.config();t.name=t.name||r.name,t.storeName=t.storeName||r.storeName}var n,o=this;return s(n=t.name?new a((function(e){t.storeName?e($(t,o._defaultConfig)):e(t.name+"/")})).then((function(t){for(var e=localStorage.length-1;e>=0;e--){var r=localStorage.key(e);0===r.indexOf(t)&&localStorage.removeItem(r)}})):a.reject("Invalid arguments"),e),n}},q=function(t,e){for(var r,n,o=t.length,i=0;i<o;){if((r=t[i])===(n=e)||"number"==typeof r&&"number"==typeof n&&isNaN(r)&&isNaN(n))return!0;i++}return!1},F=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},W={},H={},G={INDEXEDDB:O,WEBSQL:U,LOCALSTORAGE:V},X=[G.INDEXEDDB._driver,G.WEBSQL._driver,G.LOCALSTORAGE._driver],Y=["dropInstance"],K=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Y),J={description:"",driver:X.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Q(t,e){t[e]=function(){var r=arguments;return t.ready().then((function(){return t[e].apply(t,r)}))}}function Z(){for(var t=1;t<arguments.length;t++){var e=arguments[t];if(e)for(var r in e)e.hasOwnProperty(r)&&(F(e[r])?arguments[0][r]=e[r].slice():arguments[0][r]=e[r])}return arguments[0]}var tt=new(function(){function t(e){for(var r in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),G)if(G.hasOwnProperty(r)){var n=G[r],o=n._driver;this[r]=o,W[o]||this.defineDriver(n)}this._defaultConfig=Z({},J),this._config=Z({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return t.prototype.config=function(t){if("object"===(void 0===t?"undefined":n(t))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var e in t){if("storeName"===e&&(t[e]=t[e].replace(/\W/g,"_")),"version"===e&&"number"!=typeof t[e])return new Error("Database version must be a number.");this._config[e]=t[e]}return!("driver"in t)||!t.driver||this.setDriver(this._config.driver)}return"string"==typeof t?this._config[t]:this._config},t.prototype.defineDriver=function(t,e,r){var n=new a((function(e,r){try{var n=t._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver)return void r(o);for(var i=K.concat("_initStorage"),c=0,u=i.length;c<u;c++){var l=i[c];if((!q(Y,l)||t[l])&&"function"!=typeof t[l])return void r(o)}!function(){for(var e=function(t){return function(){var e=new Error("Method "+t+" is not implemented by the current driver"),r=a.reject(e);return s(r,arguments[arguments.length-1]),r}},r=0,n=Y.length;r<n;r++){var o=Y[r];t[o]||(t[o]=e(o))}}();var p=function(r){W[n]&&console.info("Redefining LocalForage driver: "+n),W[n]=t,H[n]=r,e()};"_support"in t?t._support&&"function"==typeof t._support?t._support().then(p,r):p(!!t._support):p(!0)}catch(t){r(t)}}));return c(n,e,r),n},t.prototype.driver=function(){return this._driver||null},t.prototype.getDriver=function(t,e,r){var n=W[t]?a.resolve(W[t]):a.reject(new Error("Driver not found."));return c(n,e,r),n},t.prototype.getSerializer=function(t){var e=a.resolve(L);return c(e,t),e},t.prototype.ready=function(t){var e=this,r=e._driverSet.then((function(){return null===e._ready&&(e._ready=e._initDriver()),e._ready}));return c(r,t,t),r},t.prototype.setDriver=function(t,e,r){var n=this;F(t)||(t=[t]);var o=this._getSupportedDrivers(t);function i(){n._config.driver=n.driver()}function s(t){return n._extend(t),i(),n._ready=n._initStorage(n._config),n._ready}var u=null!==this._driverSet?this._driverSet.catch((function(){return a.resolve()})):a.resolve();return this._driverSet=u.then((function(){var t=o[0];return n._dbInfo=null,n._ready=null,n.getDriver(t).then((function(t){n._driver=t._driver,i(),n._wrapLibraryMethodsWithReady(),n._initDriver=function(t){return function(){var e=0;return function r(){for(;e<t.length;){var o=t[e];return e++,n._dbInfo=null,n._ready=null,n.getDriver(o).then(s).catch(r)}i();var c=new Error("No available storage method found.");return n._driverSet=a.reject(c),n._driverSet}()}}(o)}))})).catch((function(){i();var t=new Error("No available storage method found.");return n._driverSet=a.reject(t),n._driverSet})),c(this._driverSet,e,r),this._driverSet},t.prototype.supports=function(t){return!!H[t]},t.prototype._extend=function(t){Z(this,t)},t.prototype._getSupportedDrivers=function(t){for(var e=[],r=0,n=t.length;r<n;r++){var o=t[r];this.supports(o)&&e.push(o)}return e},t.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,e=K.length;t<e;t++)Q(this,K[t])},t.prototype.createInstance=function(e){return new t(e)},t}());e.exports=tt},{3:3}]},{},[4])(4)}).call(this,r(58))},function(t,e,r){"use strict";r.d(e,"i",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"h",(function(){return T})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"g",(function(){return s})),r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return Ut})),r.d(e,"c",(function(){return c}));var n={};r.r(n),r.d(n,"getLocalCity",(function(){return h})),r.d(n,"getForecastWeather",(function(){return d})),r.d(n,"getCityList",(function(){return f}));var o={};r.r(o),r.d(o,"getSearchSuggest",(function(){return w})),r.d(o,"getEnginesList",(function(){return x}));var i={};r.r(i),r.d(i,"getIcon",(function(){return M})),r.d(i,"getUrlInfoWithPermission",(function(){return D})),r.d(i,"getUrlIcon",(function(){return V})),r.d(i,"getFetchiconUrls",(function(){return q})),r.d(i,"getLogoList",(function(){return F})),r.d(i,"getRedirectTargets",(function(){return W}));var a={};r.r(a),r.d(a,"getUnreadEmails",(function(){return G}));var s={};r.r(s),r.d(s,"register",(function(){return J})),r.d(s,"login",(function(){return Q})),r.d(s,"updateProfile",(function(){return Z})),r.d(s,"getUserProfile",(function(){return tt})),r.d(s,"uploadAvatar",(function(){return et})),r.d(s,"modifyPassword",(function(){return rt})),r.d(s,"forgetPassword",(function(){return nt})),r.d(s,"resetPassword",(function(){return ot})),r.d(s,"getEmailCode",(function(){return it})),r.d(s,"getRegisterCode",(function(){return at})),r.d(s,"inspceCode",(function(){return st})),r.d(s,"checkTokenIsExpired",(function(){return ct})),r.d(s,"deleteAccount",(function(){return ut})),r.d(s,"loginWithUid",(function(){return lt})),r.d(s,"v1BasicLogin",(function(){return pt})),r.d(s,"getMobileUid",(function(){return ht})),r.d(s,"getMobileloginUrl",(function(){return dt})),r.d(s,"checkMobileloginUrl",(function(){return ft})),r.d(s,"sendPhoneCode",(function(){return gt})),r.d(s,"sendEmailCode",(function(){return vt})),r.d(s,"bindEmail",(function(){return mt})),r.d(s,"bindPhoneNumber",(function(){return yt})),r.d(s,"unbindEmail",(function(){return bt})),r.d(s,"unbindPhoneNumber",(function(){return wt})),r.d(s,"verifyPhoneVCode",(function(){return xt})),r.d(s,"ThirdLoginType",(function(){return _t})),r.d(s,"bindThird",(function(){return St})),r.d(s,"unbindThird",(function(){return kt})),r.d(s,"getAreaCodeList",(function(){return jt})),r.d(s,"verifyPassword",(function(){return Ot})),r.d(s,"geVerifyTokenImg",(function(){return Tt}));var c={};r.r(c),r.d(c,"getRepairConcat",(function(){return At})),r.d(c,"postErrorCollect",(function(){return Et})),r.d(c,"sendLog",(function(){return Ct}));var u={};r.r(u),r.d(u,"getSyncList",(function(){return Lt})),r.d(u,"getSyncDetail",(function(){return Mt})),r.d(u,"autoBackup",(function(){return Nt})),r.d(u,"manualBackup",(function(){return Bt})),r.d(u,"getV2DataFromV1",(function(){return Dt}));r(8);var l=r(0),p=r(3);const h=async()=>{try{const t=await p.a.get(l.A+"/city/locate",{lang:l.D.lang},{timeout:1e4});if(t&&t.city)return{data:t.city}}catch(t){return{error:t}}},d=async t=>{try{return{data:(await p.a.get(l.A+"/weather/forecast",{lang:l.D.lang,cid:t},{timeout:1e4})).forecast}}catch(t){return{error:t}}},f=async t=>{try{return{data:await p.a.get(l.A+"/city/list",{lang:l.D.lang,searchkey:t},{timeout:1e4})}}catch(t){return{error:t}}};r(21);var g=r(17),v=r(87),m=r.n(v),y=r(252),b=r.n(y);const w=async t=>l.D.isZh?l.h||l.s?S(t):j(t):l.h||l.s?k(t):O(t),x=async t=>{let e=l.q?36e5:6e4;t||(e=0);try{if(!g.a.requestFirefoxThrottle("/search/list",e,!0))return{error:"request throttle error"};const r=await p.a.get(l.y+"/search/list",{lang:l.D.lang,platform:l.D.platform,platformVersion:l.D.platformVersion,edition:l.e,maybe360:l.G,version:t||""+Date.now()});if(0===r.code){const t=r.data.map(t=>{const e={};return e.name=t.name,e.uuid=t.seId,e.logo=t.logo,e.desc=t.desc,e.types=t.types,e.hide=t.hide,e});return g.a.requestFirefoxThrottle("/search/list",!0,!0),{data:{list:t,hash:m()(JSON.stringify(t)),meta:r.meta}}}if(2005===r.code)return g.a.requestFirefoxThrottle("/search/list",!0,!0),{error:r};throw r}catch(t){return{error:t}}},_=g.a.getLastReqValue(p.a.jsonp),S=async t=>{var e;try{const r=await _(l.b+"/su?ie=utf-8&p=3",{wd:t},{adapter:b.a,callbackParamName:"cb"});return{data:(null===(e=null==r?void 0:r.s)||void 0===e?void 0:e.map(t=>({text:t})))||[]}}catch(t){return{error:t}}},k=async t=>{var e;try{const r=await _(l.g+"/complete/search?client=chrome",{q:t},{adapter:b.a,callbackParamName:"jsonp"});return{data:(null==r?void 0:r.length)&&(null===(e=r[1])||void 0===e?void 0:e.length)?r[1].map(t=>({text:t})):[]}}catch(t){return{error:t}}},j=async t=>{try{const e=await p.a.get(l.b+"/su?p=3&ie=UTF-8&cb=",{wd:t},{_single:!0,_delay:0}),r=/s:(\[[\w\W]*\])/.exec(e),n=JSON.parse(r[1]);return{data:n.map(t=>({text:t}))}}catch(t){return{error:t}}},O=async t=>{try{const e=await p.a.get(l.g+"/complete/search?client=chrome",{q:t},{_single:!0,_delay:200});return{data:e[2].map((t,r)=>(t||(t=e[1][r]),{text:t}))}}catch(t){return{error:t}}};var T=r(119),A=r(6),E=r.n(A),C=r(99),R=r.n(C),I=r(36),P=r.n(I);r(41),r(266),r(11),r(14),r(64);const L=l.D.lang,M=async({page:t=0,type:e,keyword:r,source:n}={})=>{try{const o=await p.a.get(l.x+"/get-icons",{lang:L,page:t,type:e,source:n,keyword:r},{_single:!0,_delay:200});if(o.success)return o.icons.forEach(t=>{if("infinity"===t.source)switch("infinity://wallpaper"===t.url&&(t.name="wallpaper_library"),t.url){case"infinity://wallpaper":case"infinity://weather":case"infinity://todos":case"infinity://notes":case"infinity://history":case"infinity://bookmarks":case"infinity://settings":t.name=i18n(t.name),t.description=i18n(t.description);break;case"infinity://extension":t.name=i18n(t.name),t.description=i18n(t.description,l.D.vendor)}t._footer=t.description||i18n("no_description")}),{data:o};throw o}catch(t){return{error:t}}},N=async t=>{try{const e=await p.a.get(l.y+"/icon/title",{url:t},{_single:!0,_delay:0,timeout:3e3});if(0===e.code)return{data:{name:e.data.title}};throw e}catch(t){return{error:t}}},B=/<title[^>]*>\s*(.*)\s*<\/title>/,D=t=>window.__INFINITY__.hasAllUrlPermission?new E.a(async e=>{let r=0;N(t).then(t=>{r+=1,t.error&&2!==r||e(t)}),(async t=>{try{const e=await p.a.get(t,{},{_single:"getUrlInfoFromFE",timeout:3e3,responseType:"text",_responseAll:!0}),r=e.data;if(r&&e.status>=200&&e.status<300){const t=r.indexOf("<title");if(t>0){const e=r.slice(t,t+200),n=B.exec(e),o=null==n?void 0:n[1];if(o)return{data:{name:o}}}}return{error:"error"}}catch(t){return{error:t}}})(t).then(t=>{r+=1,t.error&&2!==r||e(t)})}):new E.a(async e=>{e(await N(t))}),U=(t,e)=>{if(0===e.length)return e;const r=new Map,n=[];return t.forEach((t,e)=>{r.set(t,e)}),e.forEach(t=>{const e=r.get(t);n[e]=t}),n.filter(t=>!!t)},$=t=>new E.a(e=>{const r=()=>{const e=U(t,i),r=U(t,a),n=U(t,s);return e.concat(r,n)},n=t.length;let o=0;const i=[],a=[],s=[];t.forEach(t=>{const c=new Image;c.onload=function(){o+=1;const{width:c,height:u}=this,l=Math.max(c,u),p=Math.min(c,u);l/p<5?p>50&&l>100?i.push(t):p>50||l>100?a.push(t):s.push(t):s.push(t),o===n&&e(r())},c.onerror=()=>{o+=1,o===n&&e(r())},c.src=t}),setTimeout(()=>{e(r())},3e3)}),z=/\.(ico|png|jpg|jpeg|svg|webp)$/,V=async t=>{var e;try{const r=await p.a.get(t,{},{_single:"getUrlIcon",_delay:100,timeout:3e3,responseType:"text",_responseAll:!0}),n=r.data;if(n&&r.status>=200&&r.status<300){const o=(null===(e=r.request)||void 0===e?void 0:e.responseURL)||t;let i=((t,e)=>{const r=[];return e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi,(t,e)=>{r.push(e)}),R()(r).call(r,(e,r)=>{if(r&&z.test(r)){const n=new P.a(r,t);e.push(n.href)}return e},[])})(o,n);if(i.length<6){const t=((t,e)=>{const r=[];return e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi,(t,e)=>{r.push(e)}),R()(r).call(r,(e,r)=>{if(r&&z.test(r)){const n=new P.a(r,t);e.push(n.href)}return e},[])})(o,n);i=i.concat(t)}i.length>4&&(i.length=4);let a=await $(i);return a=Array.from(new Set(a)),a.length>2&&(a.length=2),{data:a}}return{error:""}}catch(t){return{error:t}}},q=async t=>{try{const{host:e}=new P.a(t),r=await p.a.get(l.y+"/icon/get_icon_urls",{host:e});return 0!==r.code?{error:r}:{data:r.data.map(t=>t.url)}}catch(t){return{error:t}}},F=async t=>{try{const{host:e}=new P.a(t);if(!e.includes("."))return{data:[]};const r=await p.a.get(l.y+"/icon/get_logo_list",{host:e,limit:2},{_single:!0,_delay:100});return 0!==r.code?{error:r}:{data:r.data.map(t=>t.src)}}catch(t){return{error:t}}},W=async t=>{var e;let r=l.q?36e5:6e4;t||(r=0);try{if(!g.a.requestFirefoxThrottle("/icon/rt",r,!0))return{error:"request throttle error"};const n=await p.a.post(l.y+"/icon/rt",{version:t||""+Date.now()});return 0===n.code&&g.a.requestFirefoxThrottle("/icon/rt",!0,!0),0===n.code&&n.data?{data:{list:n.data,version:null===(e=n.meta)||void 0===e?void 0:e.version}}:{error:n}}catch(t){return{error:t}}};function H(t){return t?t.textContent:null}function G(t){return new E.a((e,r)=>{const n=new XMLHttpRequest;n.onreadystatechange=function(){var t,o;if(4==n.readyState)if(n.responseXML){const r=n.responseXML;let i=H(r.querySelector("title"));if(i)try{i=/(\w+)@(\w+\.\w+)/.exec(i)[0]}catch(t){}const a=parseInt(H(r.querySelector("fullcount")),10),s=r.querySelectorAll("entry"),c=[];let u=-1;for(let e=0,r=s.length;e<r;e++){const r=s[e],n={id:H(r.querySelector("id")),issued:H(r.querySelector("issued")),title:H(r.querySelector("title")),summary:H(r.querySelector("summary")),link:(t=r.querySelector("link"),o="href",t?t.getAttribute(o):null),authorName:H(r.querySelector("author name")),authorEmail:H(r.querySelector("author email"))};n.issued&&(n.issued=new Date(n.issued).valueOf(),u=Math.max(u,n.issued)),c.push(n)}e({account:i,lastIssuedTime:u,count:a,emails:c})}else r()},n.onerror=r,n.open("GET",function(t){return l.f+"/mail/feed/atom?zx="+encodeURIComponent(t)}(t),!0),n.send(null)})}var X=r(89),Y=r.n(X),K=r(9);const J=async({email:t,password:e,repeatPassword:r,code:n})=>{const o={email:Y()(t).call(t),password:m()(e),repeatPassword:m()(r),code:Y()(n).call(n)};try{return await p.a.post(l.y+"/user/register",o)}catch(t){return t}},Q=async({email:t,password:e,phone_number:r})=>{const n={email:t?Y()(t).call(t):void 0,phone_number:r?Y()(r).call(r):void 0,password:m()(e)};try{return await p.a.post(l.y+"/user/login",n)}catch(t){return t}};async function Z(t){const{data:e}=await K.k.read(),r=e.userInfo.uid;try{return await p.a.post(l.y+"/user/update_profile/"+r,t,{_auth:!0})}catch(t){throw new Error(t.message)}}async function tt(){try{return await p.a.get(l.y+"/user/get_user_profile",{},{_auth:!0,_proxy:!0})}catch(t){return t}}async function et(t){const e=new FormData;e.append("file",t);try{const t=await p.a.post(l.y+"/upload/avatar",e,{_auth:!0,headers:{"Content-Type":"multipart/form-data"}});if(0===(null==t?void 0:t.code))return t;throw new Error(i18n("upload_avatar_failure"))}catch(t){throw new Error(t)}}async function rt({originPassword:t,newPassword:e}){const{data:r}=await K.k.read(),n=r.userInfo.uid,{token:o}=r;if(!o)throw new Error(i18n("unknown_mistake"));const i={originPassword:m()(t),newPassword:m()(e)};try{return await p.a.post(l.y+"/user/modify_password/"+n,i,{_auth:!0})}catch(t){return t}}async function nt(t){try{const e=await p.a.post(l.y+"/user/forget_password",t);return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function ot({password:t,repeatPassword:e,email:r,code:n,phone_number:o}){const i={password:m()(t),repeatPassword:m()(e),email:r?Y()(r).call(r):void 0,code:Y()(n).call(n),phone_number:o?Y()(o).call(o):void 0};try{return await p.a.post(l.y+"/user/reset_password",i)}catch(t){return t}}async function it(t){try{const e=await p.a.post(`${l.y}/get_code2?lang=${l.D.lang}`,t,{withCredentials:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function at(t){try{return await p.a.post(`${l.y}/get_register_code2?lang=${l.D.lang}`,t,{withCredentials:!0})}catch(t){return t}}async function st(t){try{return await p.a.post(l.y+"/inspce_code",t)}catch(t){return t}}async function ct(){try{return await p.a.get(l.y+"/check_token",{},{_auth:!0})}catch(t){return t}}async function ut(){const{data:t}=await K.k.read(),e=t.userInfo.uid;try{return await p.a.post(l.y+"/user/delete/"+e,{},{_auth:!0})}catch(t){return t}}const lt=async t=>{try{return await p.a.post(l.y+"/user/login_uid",t,{timeout:1e4})}catch(t){return t}},pt=async t=>{try{return await p.a.post(l.y+"/user/v1_basic_login",t,{timeout:1e4})}catch(t){return t}},ht=async(t,e)=>{try{return await p.a.get(`${l.y}/user/user_hash?uid=${t}&secret=${e}`)}catch(t){return t}},dt=async()=>{try{const t=await p.a.get(l.y+"/login_code/mobile_code",{},{_auth:!0});return 0===t.code?{data:t.data}:{error:t}}catch(t){return{error:t}}},ft=async(t,e)=>{try{const r=await p.a.post(l.y+"/login_code/check",{code:t,type:e},{_auth:!0});return 0===r.code?{data:r.data}:{error:r}}catch(t){return{error:t}}};async function gt(t){try{const e=await p.a.post(l.y+"/phone/send_code",t,{withCredentials:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function vt(t){try{const e=await p.a.post(l.y+"/get_email_bind_code",t,{_auth:!0,withCredentials:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function mt(t){try{const e=await p.a.post(l.y+"/bind/email",t,{_auth:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function yt(t){try{const e=await p.a.post(l.y+"/bind/phone",t,{_auth:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function bt(){try{const t=await p.a.post(l.y+"/unbind/email",{},{_auth:!0});return 0===t.code?{data:t.data}:{error:t}}catch(t){return{error:t}}}async function wt(){try{const t=await p.a.post(l.y+"/unbind/phone",{},{_auth:!0});return 0===t.code?{data:t.data}:{error:t}}catch(t){return{error:t}}}async function xt(t,e){try{const r=await p.a.post(l.y+"/phone/verify_code",{phone_number:t,code:e});return 0===r.code?{data:r.data}:{error:r}}catch(t){return{error:t}}}var _t;async function St(t,e){try{const r=await p.a.post(`${l.y}/bind/${t}`,{access_code:e},{_auth:!0});return 0===r.code?{data:r.data}:{error:r}}catch(t){return{error:t}}}async function kt(t){try{const e=await p.a.post(`${l.y}/unbind/${t}`,{},{_auth:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function jt(){try{const t=await(await p.a.get(l.y+"/phone/area_list"));return 0===t.code?{data:t.data}:{error:t}}catch(t){return{error:t}}}async function Ot(t){try{const e=await p.a.post(l.y+"/user/verify_password",{password:m()(t)},{_auth:!0});return 0===e.code?{data:e.data}:{error:e}}catch(t){return{error:t}}}async function Tt(){try{const t=await p.a.get(l.y+"/verify/get_token_img");return 0===t.code?{data:t.data}:{error:t}}catch(t){return{error:t}}}!function(t){t.weibo="weibo",t.facebook="facebook",t.google="google",t.wechat="wechat",t.qq="qq"}(_t||(_t={}));const At=async()=>{try{const t=await p.a.get(l.y+"/get_concat_info");if(0===t.code)return{data:t.data};throw t}catch(t){return{error:t}}},Et=async(t,e)=>{try{const{response:r,stack:n,config:o}=e;let i=r||o;i&&(i=JSON.stringify(i,(t,e)=>{if(e instanceof FormData){const t={};for(const[r,n]of e)t[r]=n;return t}if(e instanceof File){return{lastModified:e.lastModified,name:e.name,size:e.size,type:e.type}}return e}));let{data:a,error:s}=await K.k.read();if(!s&&a){const t=["mobileuid","avatar","refreshToken","secret","gender","name"];a=JSON.stringify(a,(e,r)=>{if(!t.includes(e))return r})}const c=await p.a.post(l.y+"/collect",{type:t,user:a,stack:n,info:i,env:Object.assign({},l.D)});if(0===c.code)return{data:c.data};throw c}catch(t){return{error:t}}},Ct=async t=>{await p.a.get(t,void 0,{_proxy:!0,_proxyIgnoreRes:!0})},Rt=t=>{const e=JSON.stringify(t),r=(new TextEncoder).encode(e);return new Blob([r],{type:"application/json;charset=utf-8"})},It=t=>{const e={};return t.forEach(t=>{const{platform:r}=t;e[r]?e[r].push(t):e[r]=[t]}),e},Pt=t=>{const{_id:e,_platform:r="pc"}=t;return{id:e,time:g.a.fmtTime(Number(e)),platform:r}},Lt=async()=>{try{const t=await p.a.get(l.y+"/sync/list",void 0,{_auth:!0,_proxy:!0});if(0!==t.code)return{error:t};const e={};return e.auto=t.meta.auto.map(Pt),e.manual=It(t.meta.manual.map(Pt)),{data:e}}catch(t){return{error:t}}},Mt=async(t,e,r="all")=>{try{const n=await p.a.get(l.y+"/sync/download_url",{id:t,type:e,keys:r},{_auth:!0});if(0!==n.code)return{error:n};const o=n.data;let i={};const a=await E.a.all(o.map(e=>p.a.get(e.url+"&timestampid="+("latest"===t?Date.now():t),{},{timeout:18e4})));return o.forEach((t,r)=>{const n=t.fileKey;"manual"===e?i=Object.assign(Object.assign({},i),a[r]):"auto"===e&&(i[n]=a[r])}),{data:i}}catch(t){return Et("getSyncDetail",t),{error:t}}},Nt=async(t,e="")=>{const r=Object.keys(t).join(",");try{const n=await p.a.get(l.y+"/sync/token",{type:"auto",keys:r},{_auth:!0});if(0!==n.code||!n.data.length)return{error:n};const o=n.data;await E.a.all(o.map(e=>{const{url:r,key:n,token:o,host:i}=e,a=new FormData;return a.append("token",o),a.append("key",r),a.append("file",Rt(t[n])),p.a.post(i,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4})})),localStorage.setItem("pre-sync-id",o[0].timestamp+"");const i=await p.a.post(l.y+"/sync/done",{type:"auto",websocketkeys:e,keys:r,record_time:o[0].timestamp},{_auth:!0});return 0!==i.code?{error:i}:{data:i.meta.map(Pt)}}catch(t){return Et("autoBackup",t),{error:t}}},Bt=async t=>{try{const e=await p.a.get(l.y+"/sync/token",{type:"manual",keys:"data"},{_auth:!0});if(0!==e.code||!e.data.length)return{error:e};const{token:r,url:n,timestamp:o,host:i}=e.data[0],a=new FormData;a.append("token",r),a.append("key",n),a.append("file",Rt(t)),await p.a.post(i,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4});const s=await p.a.post(l.y+"/sync/done",{type:"manual",keys:"data",record_time:o},{_auth:!0});return 0!==s.code?{error:s}:{data:It(s.meta.map(Pt))}}catch(t){return Et("manualBackup",t),{error:t}}},Dt=t=>"pro"===t?async function(){try{const{data:{userInfo:t}}=await K.k.read(),{uid:e,secret:r}=t,n=await p.a.get(l.x+"/user/recovery-pro",{uid:e,secret:r},{timeout:2e5});if(n.success)return{data:n.data};throw n}catch(t){return Et("getProV1Data",t),{error:t}}}():"basic"===t?async function(){try{const t=await p.a.get(l.y+"/sync/recover_basic",{},{_auth:!0,timeout:2e5});return 0!==t.code?{error:t}:{data:t.data}}catch(t){return Et("getBasicV1Data",t),{error:t}}}():void 0;var Ut=r(275)},function(t,e,r){var n=r(5),o=r(16),i=r(12),a=r(49),s=r(50),c=r(40),u=c.get,l=c.enforce,p=String(String).split("String");(t.exports=function(t,e,r,s){var c,u=!!s&&!!s.unsafe,h=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(c=l(r)).source||(c.source=p.join("string"==typeof e?e:""))),t!==n?(u?!d&&t[e]&&(h=!0):delete t[e],h?t[e]=r:o(t,e,r)):h?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},function(t,e,r){var n=r(130),o=r(5),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports={}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return c}));var n=r(29);const o=/^http[s]?:\/\//;function i(t){return o.test(t)}const a=(t,e)=>{const r="https://infinityicon.infinitynewtab.com/assets/images/"+t;return!0===e?s(r):!1===e?r:/\.(png|jpg|jpeg)$/.test(t)?s(r):r};function s(t){return i(t)?t.includes("?")?t:n.e?t+"?imageView2/0/q/100":t+"?imageView2/0/format/webp/q/100":t}function c(t){return i(t)?t.includes("?")?t:n.e?t+"?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim":t+"?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim":t}},function(t,e,r){var n=r(20),o=r(199),i=r(42),a=r(200),s=r(203),c=r(291),u=o("wks"),l=n.Symbol,p=c?l:l&&l.withoutSetter||a;t.exports=function(t){return i(u,t)&&(s||"string"==typeof u[t])||(s&&i(l,t)?u[t]=l[t]:u[t]=p("Symbol."+t)),u[t]}},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"f",(function(){return a})),r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c}));r(21);const n="store-wallpaper-cache",o="infinity-image-base64",i=navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/),a="format/webp/",s="https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png",c=`${s}?imageView2/2/w/${screen.width}/${i?"":a}interlace/1`},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){"use strict";var n=r(20),o=r(224).f,i=r(225),a=r(109),s=r(111),c=r(57),u=r(42),l=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var r,p,h,d,f,g,v,m,y=t.target,b=t.global,w=t.stat,x=t.proto,_=b?n:w?n[y]:(n[y]||{}).prototype,S=b?a:a[y]||(a[y]={}),k=S.prototype;for(h in e)r=!i(b?h:y+(w?".":"#")+h,t.forced)&&_&&u(_,h),f=S[h],r&&(g=t.noTargetGet?(m=o(_,h))&&m.value:_[h]),d=r&&g?g:e[h],r&&typeof f==typeof d||(v=t.bind&&r?s(d,n):t.wrap&&r?l(d):x&&"function"==typeof d?s(Function.call,d):d,(t.sham||d&&d.sham||f&&f.sham)&&c(v,"sham",!0),S[h]=v,x&&(u(a,p=y+"Prototype")||c(a,p,{}),a[p][h]=d,t.real&&k&&!k[h]&&c(k,h,d)))}},function(t,e,r){"use strict";var n=r(239),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function a(t){return void 0===t}function s(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===o.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:a,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return s(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return e},deepMerge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]="object"==typeof r?t({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return e},extend:function(t,e,r){return u(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,r){var n=r(25);t.exports=n("navigator","userAgent")||""},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){t.exports=r(313)},function(t,e){t.exports=!1},function(t,e,r){var n=r(100),o=r(44);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(63);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n,o,i,a=r(128),s=r(5),c=r(15),u=r(16),l=r(12),p=r(51),h=r(52),d=r(53),f=s.WeakMap;if(a||p.state){var g=p.state||(p.state=new f),v=g.get,m=g.has,y=g.set;n=function(t,e){if(m.call(g,t))throw new TypeError("Object already initialized");return e.facade=t,y.call(g,t,e),e},o=function(t){return v.call(g,t)||{}},i=function(t){return m.call(g,t)}}else{var b=h("state");d[b]=!0,n=function(t,e){if(l(t,b))throw new TypeError("Object already initialized");return e.facade=t,u(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(5),o=r(101),i=r(278),a=r(16);for(var s in o){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e,r){var n=r(98),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},function(t,e,r){var n=r(62),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(5),o=r(46).f,i=r(16),a=r(24),s=r(49),c=r(112),u=r(68);t.exports=function(t,e){var r,l,p,h,d,f=t.target,g=t.global,v=t.stat;if(r=g?n:v?n[f]||s(f,{}):(n[f]||{}).prototype)for(l in e){if(h=e[l],p=t.noTargetGet?(d=o(r,l))&&d.value:r[l],!u(g?l:f+(v?".":"#")+l,t.forced)&&void 0!==p){if(typeof h==typeof p)continue;c(h,p)}(t.sham||p&&p.sham)&&i(h,"sham",!0),a(r,l,h,t)}}},function(t,e,r){var n=r(18),o=r(127),i=r(47),a=r(38),s=r(78),c=r(12),u=r(79),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=s(e,!0),u)try{return l(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(5),o=r(15),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,r){var n=r(5),o=r(16);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(51),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(5),o=r(49),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(71),o=r(67),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(19).f,o=r(12),i=r(7)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(35),o=r(5);t.exports="process"==n(o.process)},function(t,e,r){var n=r(65),o=r(110),i=r(94);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"c",(function(){return a}));r(21);const n=r(0).s?"serviceworker":"background";let o=!1;"background"===n?o="undefined"==typeof ServiceWorkerGlobalScope&&chrome.extension.getBackgroundPage()===window:"serviceworker"===n&&(o="undefined"!=typeof ServiceWorkerGlobalScope);const i={timeout:0,taskId:""},a=()=>(""+Date.now()/1e3/1e5).split(".")[1].substr(0,8)+(""+Math.random()).split(".")[1].substr(0,8).padEnd(8,"0")},function(t,e,r){var n=r(13),o=r(135);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e,r){var n=r(44);t.exports=function(t){return Object(n(t))}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";var n=r(361),o=r(10),i=r(13),a=r(43),s=r(62),c=r(44),u=r(362),l=r(364),p=r(365),h=r(7)("replace"),d=Math.max,f=Math.min,g="$0"==="a".replace(/./,"$0"),v=!!/./[h]&&""===/./[h]("a","$0");n("replace",(function(t,e,r){var n=v?"$":"$0";return[function(t,r){var n=c(this),o=null==t?void 0:t[h];return void 0!==o?o.call(t,n,r):e.call(String(n),t,r)},function(t,o){if("string"==typeof o&&-1===o.indexOf(n)&&-1===o.indexOf("$<")){var c=r(e,this,t,o);if(c.done)return c.value}var h=i(this),g=String(t),v="function"==typeof o;v||(o=String(o));var m=h.global;if(m){var y=h.unicode;h.lastIndex=0}for(var b=[];;){var w=p(h,g);if(null===w)break;if(b.push(w),!m)break;""===String(w[0])&&(h.lastIndex=u(g,a(h.lastIndex),y))}for(var x,_="",S=0,k=0;k<b.length;k++){w=b[k];for(var j=String(w[0]),O=d(f(s(w.index),g.length),0),T=[],A=1;A<w.length;A++)T.push(void 0===(x=w[A])?x:String(x));var E=w.groups;if(v){var C=[j].concat(T,O,g);void 0!==E&&C.push(E);var R=String(o.apply(void 0,C))}else R=l(j,g,O,T,E,o);O>=S&&(_+=g.slice(S,O)+R,S=O+j.length)}return _+g.slice(S)}]}),!!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!g||v)},function(t,e,r){var n=r(30);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(31);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(10),o=/#|\.prototype\./,i=function(t,e){var r=s[a(t)];return r==u||r!=c&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,r){var n,o,i=r(5),a=r(34),s=i.process,c=s&&s.versions,u=c&&c.v8;u?o=(n=u.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(12),o=r(61),i=r(52),a=r(154),s=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,r){var n=r(37),o=r(51);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n,o=r(13),i=r(150),a=r(54),s=r(53),c=r(83),u=r(48),l=r(52),p=l("IE_PROTO"),h=function(){},d=function(t){return"<script>"+t+"<\/script>"},f=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;f=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete f.prototype[a[r]];return f()};s[p]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(h.prototype=o(t),r=new h,h.prototype=null,r[p]=t):r=f(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";r.d(e,"f",(function(){return n})),r.d(e,"g",(function(){return o})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return p}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${o}`),a="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const r=[],o=[],s=document.createTreeWalker(e.content,133,null,!1);let u=0,h=-1,d=0;const{strings:f,values:{length:g}}=t;for(;d<g;){const t=s.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)c(e[t].name,a)&&n++;for(;n-- >0;){const e=f[d],r=p.exec(e)[2],n=r.toLowerCase()+a,o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(i);this.parts.push({type:"attribute",index:h,name:r,strings:s}),d+=s.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,o=e.split(i),s=o.length-1;for(let e=0;e<s;e++){let r,i=o[e];if(""===i)r=l();else{const t=p.exec(i);null!==t&&c(t[2],a)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-a.length)+t[3]),r=document.createTextNode(i)}n.insertBefore(r,t),this.parts.push({type:"node",index:++h})}""===o[s]?(n.insertBefore(l(),t),r.push(t)):t.data=o[s],d+=s}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&h!==u||(h++,e.insertBefore(l(),t)),u=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(r.push(t),h--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),d++}}else s.currentNode=o.pop()}for(const t of r)t.parentNode.removeChild(t)}}const c=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},u=t=>-1!==t.index,l=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(6),o=r.n(n),i=(r(11),r(14),r(0));const a={};const s=new class{constructor(){this.request=(t,e)=>((i.n||i.k||i.h)&&e&&e.includes("chrome://favicon/")&&(e=Array.from(new Set(e))).splice(e.findIndex(t=>"chrome://favicon/"===t),1),new o.a((r,n)=>{if(i.s)return void n();let o="";if(i.n){if(o=t.join(",")+(null==e?void 0:e.join(",")),a[o])return void n(new Error("repeat"));a[o]=!0}chrome.permissions.request({permissions:t,origins:e},t=>{i.n&&a[o]&&delete a[o],chrome.runtime.lastError?n(chrome.runtime.lastError):t?r(!0):n(new Error("REJECT"))})})),this.has=(t,e)=>((i.n||i.k||i.h)&&e&&e.includes("chrome://favicon/")&&(e=Array.from(new Set(e))).splice(e.findIndex(t=>"chrome://favicon/"===t),1),new o.a(r=>{i.s?r(!1):chrome.permissions.contains({permissions:t,origins:e},t=>{r(t)})}))}}},function(t,e,r){var n=r(109),o=r(20),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){t.exports=r(369)},function(t,e,r){var n=r(15);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(18),o=r(10),i=r(48);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(12),o=r(38),i=r(131).indexOf,a=r(53);t.exports=function(t,e){var r,s=o(t),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(u,r)||u.push(r));return u}},function(t,e,r){var n=r(69),o=r(10);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(t,e,r){var n,o,i,a=r(5),s=r(10),c=r(66),u=r(83),l=r(48),p=r(84),h=r(56),d=a.location,f=a.setImmediate,g=a.clearImmediate,v=a.process,m=a.MessageChannel,y=a.Dispatch,b=0,w={},x=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},_=function(t){return function(){x(t)}},S=function(t){x(t.data)},k=function(t){a.postMessage(t+"",d.protocol+"//"+d.host)};f&&g||(f=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},n(b),b},g=function(t){delete w[t]},h?n=function(t){v.nextTick(_(t))}:y&&y.now?n=function(t){y.now(_(t))}:m&&!p?(i=(o=new m).port2,o.port1.onmessage=S,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&d&&"file:"!==d.protocol&&!s(k)?(n=k,a.addEventListener("message",S,!1)):n="onreadystatechange"in l("script")?function(t){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),x(t)}}:function(t){setTimeout(_(t),0)}),t.exports={set:f,clear:g}},function(t,e,r){var n=r(25);t.exports=n("document","documentElement")},function(t,e,r){var n=r(34);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(n)},function(t,e,r){"use strict";var n=r(31),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},function(t,e,r){"use strict";var n,o,i,a=r(10),s=r(70),c=r(16),u=r(12),l=r(7),p=r(37),h=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(n=o):d=!0);var f=null==n||a((function(){var t={};return n[h].call(t)!==t}));f&&(n={}),p&&!f||u(n,h)||c(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},function(t,e,r){var n,o,i,a,s;n=r(404),o=r(346).utf8,i=r(405),a=r(346).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var r=n.bytesToWords(t),c=8*t.length,u=1732584193,l=-271733879,p=-1732584194,h=271733878,d=0;d<r.length;d++)r[d]=16711935&(r[d]<<8|r[d]>>>24)|4278255360&(r[d]<<24|r[d]>>>8);r[c>>>5]|=128<<c%32,r[14+(c+64>>>9<<4)]=c;var f=s._ff,g=s._gg,v=s._hh,m=s._ii;for(d=0;d<r.length;d+=16){var y=u,b=l,w=p,x=h;u=f(u,l,p,h,r[d+0],7,-680876936),h=f(h,u,l,p,r[d+1],12,-389564586),p=f(p,h,u,l,r[d+2],17,606105819),l=f(l,p,h,u,r[d+3],22,-1044525330),u=f(u,l,p,h,r[d+4],7,-176418897),h=f(h,u,l,p,r[d+5],12,1200080426),p=f(p,h,u,l,r[d+6],17,-1473231341),l=f(l,p,h,u,r[d+7],22,-45705983),u=f(u,l,p,h,r[d+8],7,1770035416),h=f(h,u,l,p,r[d+9],12,-1958414417),p=f(p,h,u,l,r[d+10],17,-42063),l=f(l,p,h,u,r[d+11],22,-1990404162),u=f(u,l,p,h,r[d+12],7,1804603682),h=f(h,u,l,p,r[d+13],12,-40341101),p=f(p,h,u,l,r[d+14],17,-1502002290),u=g(u,l=f(l,p,h,u,r[d+15],22,1236535329),p,h,r[d+1],5,-165796510),h=g(h,u,l,p,r[d+6],9,-1069501632),p=g(p,h,u,l,r[d+11],14,643717713),l=g(l,p,h,u,r[d+0],20,-373897302),u=g(u,l,p,h,r[d+5],5,-701558691),h=g(h,u,l,p,r[d+10],9,38016083),p=g(p,h,u,l,r[d+15],14,-660478335),l=g(l,p,h,u,r[d+4],20,-405537848),u=g(u,l,p,h,r[d+9],5,568446438),h=g(h,u,l,p,r[d+14],9,-1019803690),p=g(p,h,u,l,r[d+3],14,-187363961),l=g(l,p,h,u,r[d+8],20,1163531501),u=g(u,l,p,h,r[d+13],5,-1444681467),h=g(h,u,l,p,r[d+2],9,-51403784),p=g(p,h,u,l,r[d+7],14,1735328473),u=v(u,l=g(l,p,h,u,r[d+12],20,-1926607734),p,h,r[d+5],4,-378558),h=v(h,u,l,p,r[d+8],11,-2022574463),p=v(p,h,u,l,r[d+11],16,1839030562),l=v(l,p,h,u,r[d+14],23,-35309556),u=v(u,l,p,h,r[d+1],4,-1530992060),h=v(h,u,l,p,r[d+4],11,1272893353),p=v(p,h,u,l,r[d+7],16,-155497632),l=v(l,p,h,u,r[d+10],23,-1094730640),u=v(u,l,p,h,r[d+13],4,681279174),h=v(h,u,l,p,r[d+0],11,-358537222),p=v(p,h,u,l,r[d+3],16,-722521979),l=v(l,p,h,u,r[d+6],23,76029189),u=v(u,l,p,h,r[d+9],4,-640364487),h=v(h,u,l,p,r[d+12],11,-421815835),p=v(p,h,u,l,r[d+15],16,530742520),u=m(u,l=v(l,p,h,u,r[d+2],23,-995338651),p,h,r[d+0],6,-198630844),h=m(h,u,l,p,r[d+7],10,1126891415),p=m(p,h,u,l,r[d+14],15,-1416354905),l=m(l,p,h,u,r[d+5],21,-57434055),u=m(u,l,p,h,r[d+12],6,1700485571),h=m(h,u,l,p,r[d+3],10,-1894986606),p=m(p,h,u,l,r[d+10],15,-1051523),l=m(l,p,h,u,r[d+1],21,-2054922799),u=m(u,l,p,h,r[d+8],6,1873313359),h=m(h,u,l,p,r[d+15],10,-30611744),p=m(p,h,u,l,r[d+6],15,-1560198380),l=m(l,p,h,u,r[d+13],21,1309151649),u=m(u,l,p,h,r[d+4],6,-145523070),h=m(h,u,l,p,r[d+11],10,-1120210379),p=m(p,h,u,l,r[d+2],15,718787259),l=m(l,p,h,u,r[d+9],21,-343485551),u=u+y>>>0,l=l+b>>>0,p=p+w>>>0,h=h+x>>>0}return n.endian([u,l,p,h])})._ff=function(t,e,r,n,o,i,a){var s=t+(e&r|~e&n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._gg=function(t,e,r,n,o,i,a){var s=t+(e&n|r&~n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._hh=function(t,e,r,n,o,i,a){var s=t+(e^r^n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._ii=function(t,e,r,n,o,i,a){var s=t+(r^(e|~n))+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(s(t,e));return e&&e.asBytes?r:e&&e.asString?a.bytesToString(r):n.bytesToHex(r)}},function(t,e,r){var n=r(347),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){t.exports=r(340)},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,r){var n=r(57);t.exports=function(t,e,r,o){o&&o.enumerable?t[e]=r:n(t,e,r)}},function(t,e,r){"use strict";r.r(e),r.d(e,"iMessage",(function(){return p})),r.d(e,"message",(function(){return h}));r(11),r(14);var n=r(398),o=r(1),i=r(385),a=r(487),s=r.n(a),c=r(488),u=r.n(c),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let p=class extends o.a{constructor(){super(...arguments),this.content="",this.type="error"}render(){const t={"infinity-message":!0,"position-top":"top"===this.type};return o.e`
      <div class=${Object(i.a)(t)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `}renderImg(){return"error"===this.type?o.e`<img .src=${s.a} />`:"warn"===this.type?o.e`<img .src=${u.a} />`:void 0}};p.styles=o.b`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      min-width: 330px;
      padding: 0 20px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 48px 0px rgba(0, 0, 0, 0.24);
      border-radius: 6px;
      z-index: 99999999999;
    }
    :host([type='top']) {
      width: 100%;
      margin: 0;
      left: 0;
      top: var(--top-bar-height);
      height: auto;
      padding: 5px;
      border-radius: 0;
      background: rgba(95, 92, 92, 0.6);
      color: #fff;
      transform: none;
      transition: all 300ms;
      opacity: 0;
      pointer-events: none;
    }
    :host(.anim[type='top']) {
      opacity: 1;
    }

    .infinity-message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `,l([Object(o.g)({type:String})],p.prototype,"content",void 0),l([Object(o.g)({type:String})],p.prototype,"type",void 0),p=l([Object(o.c)("i-message")],p);const h={newInstance:function(t,e=2,r,n){let o;if(document.querySelector("i-message"))return void clearInterval(o);const i=document.createElement("i-message");return i.setAttribute("content",t),i.setAttribute("type",r),document.body.appendChild(i),0!==e&&(o=setTimeout(()=>{document.body.removeChild(i),n&&n()},1e3*e)),i},error:function(t,e,r){n.default.error(t,e),r&&setTimeout(r,e)},success:function(t,e,r){n.default.success(t,e),r&&setTimeout(r,e)},top:function(t,e,r){const n=this.newInstance(t,e,"top",r);setTimeout(()=>null==n?void 0:n.classList.add("anim"))},warn:function(t,e,r){this.newInstance(t,e,"warn",r)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";r.d(e,"h",(function(){return u})),r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return h})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"f",(function(){return g})),r.d(e,"g",(function(){return v})),r.d(e,"d",(function(){return y}));var n=r(196),o=r(161),i=r(113),a=r(262),s=r(247),c=r(73);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=t=>null===t||!("object"==typeof t||"function"==typeof t),l=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new h(this)}_getValue(){const t=this.strings,e=t.length-1,r=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=r[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!l(t))return t}let n="";for(let o=0;o<e;o++){n+=t[o];const e=r[o];if(void 0!==e){const t=e.value;if(u(t)||!l(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i.a||u(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=i.a,t(this)}this.value!==i.a&&this.committer.commit()}}class d{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}const t=this.__pendingValue;t!==i.a&&(u(t)?t!==this.value&&this.__commitText(t):t instanceof s.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):l(t)?this.__commitIterable(t):t===i.b?(this.value=i.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof a.a&&this.value.template===e)this.value.update(t.values);else{const r=new a.a(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const o of t)r=e[n],void 0===r&&(r=new d(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(o),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){Object(o.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i.a}}class g extends p{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new v(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class v extends h{}let m=!1;(()=>{try{const t={get capture(){return m=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class y{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=b(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const b=t=>t&&(m?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,r){var n=r(175),o=r(166),i=r(28)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},function(t,e,r){var n,o,i,a=r(300),s=r(20),c=r(63),u=r(57),l=r(42),p=r(171),h=r(170),d=r(174),f=s.WeakMap;if(a||p.state){var g=p.state||(p.state=new f),v=g.get,m=g.has,y=g.set;n=function(t,e){if(m.call(g,t))throw new TypeError("Object already initialized");return e.facade=t,y.call(g,t,e),e},o=function(t){return v.call(g,t)||{}},i=function(t){return m.call(g,t)}}else{var b=h("state");d[b]=!0,n=function(t,e){if(l(t,b))throw new TypeError("Object already initialized");return e.facade=t,u(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(121);t.exports=function(t){return Object(n(t))}},function(t,e,r){t.exports=r(336)},function(t,e,r){var n=r(10),o=r(35),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){var n=r(80),o=r(54).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(25),o=r(19),i=r(7),a=r(18),s=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[s]&&r(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(141),o=r(35),i=r(7)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},,function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r(120);const o={notice:{gmail:!1,gmailVoice:!1,gmailNumber:!1,todoNumber:!0},link:{icon:!!r(0).s,search:!0,bookmark:!1,history:!1},view:{topBookmark:!1,topUseful:!1,windmill:!0,pagin:!1,isShowHomepageBtn:!0,isHideIcp:!1,scaleSide:1,scaleMain:1},layout:{row:2,col:5,rowGap:.2,colGap:.3,custom:!1,customItem:[3,4]},animation:{easing:"linear"},icon:{miniMode:!1,shadow:!1,startAnimation:!1,opacity:1,radius:.5,scale:.5,isHideIconName:!1},search:{hide:!1,searchSuggest:!0,keepSearchInput:!1,hideCategory:!1,hideButton:!0,shadow:!0,scale:.82,radius:n.j,opacity:1},font:{shadow:!0,size:15,color:"rgb(221, 221, 221)"}},i=function(t,e){let r=null;switch(t+"*"+e){case"2*4":case"2*5":r={iconScale:.5,colGap:.3,rowGap:.2,searchScale:.82};break;case"2*6":r={iconScale:.6,colGap:.3,rowGap:.3,searchScale:.9};break;case"2*7":r={iconScale:.7,colGap:.3,rowGap:.3,searchScale:.9};break;case"3*3":r={iconScale:.7,colGap:.24,rowGap:.2,searchScale:.82}}return r}},function(t,e,r){"use strict";var n=r(74),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},function(t,e,r){var n=r(175),o=r(110).f,i=r(57),a=r(42),s=r(294),c=r(28)("toStringTag");t.exports=function(t,e,r,u){if(t){var l=r?t:t.prototype;a(l,c)||o(l,c,{configurable:!0,value:e}),u&&!n&&i(l,"toString",s)}}},function(t,e){t.exports={}},function(t,e,r){var n=r(65),o=r(238),i=r(39),a=r(180),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(74);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(12),o=r(129),i=r(46),a=r(19);t.exports=function(t,e){for(var r=o(e),s=a.f,c=i.f,u=0;u<r.length;u++){var l=r[u];n(t,l)||s(t,l,c(e,l))}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},o={}},function(t,e,r){var n=r(173),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(109);t.exports=function(t){return n[t+"Prototype"]}},function(t,e,r){"use strict";r.d(e,"e",(function(){return a.a})),r.d(e,"g",(function(){return s.c})),r.d(e,"a",(function(){return n.b})),r.d(e,"b",(function(){return n.e})),r.d(e,"c",(function(){return n.g})),r.d(e,"d",(function(){return i.b})),r.d(e,"f",(function(){return c}));var n=r(95);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new class{handleAttributeExpressions(t,e,r,o){const i=e[0];if("."===i){return new n.f(t,e.slice(1),r).parts}if("@"===i)return[new n.d(t,e.slice(1),o.eventContext)];if("?"===i)return[new n.c(t,e.slice(1),r)];return new n.a(t,e,r).parts}handleTextExpression(t){return new n.e(t)}};var i=r(247),a=r(196),s=r(161);r(113),r(195),r(194),r(262),r(73);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const c=(t,...e)=>new i.b(t,e,"html",o)},function(t,e,r){t.exports=r(366)},function(t,e,r){var n=r(166),o=r(20);t.exports="process"==n(o.process)},function(t,e,r){"use strict";r.r(e),r.d(e,"imgConfig",(function(){return c})),r.d(e,"getRandomWallpaper",(function(){return u})),r.d(e,"getBingWallpaper",(function(){return l})),r.d(e,"getWallpapers",(function(){return p})),r.d(e,"getWallpaperListByType",(function(){return h})),r.d(e,"likeWallpaper",(function(){return d})),r.d(e,"collectionWallpaper",(function(){return f})),r.d(e,"addCustomColor",(function(){return g})),r.d(e,"setCustomColorItems",(function(){return v})),r.d(e,"getCustomColor",(function(){return m})),r.d(e,"removeCustomColor",(function(){return y})),r.d(e,"uploadWallpaper",(function(){return b})),r.d(e,"getWallpapersById",(function(){return w})),r.d(e,"createWallpaperLibrary",(function(){return x})),r.d(e,"getUserWallpaperLibrary",(function(){return _})),r.d(e,"hasWallpaperLibrary",(function(){return S})),r.d(e,"getLikedWallpaper",(function(){return k})),r.d(e,"getCollectionWallpaper",(function(){return j})),r.d(e,"getWallpaperLibraryItems",(function(){return O})),r.d(e,"getUserWallpaperLibraryItemsById",(function(){return T})),r.d(e,"removeWallpaperLibraryItem",(function(){return A})),r.d(e,"removeWallpaperLibrary",(function(){return E})),r.d(e,"addImagesToLibrary",(function(){return C})),r.d(e,"renameWallpaperLibrary",(function(){return R})),r.d(e,"getNextWallpaper",(function(){return I})),r.d(e,"convertURL",(function(){return P}));r(8),r(41);var n=r(0),o=r(3),i=r(29);const a=Math.floor(screen.width*window.devicePixelRatio),s=Math.floor(203*window.devicePixelRatio),c={smallWidth:s>3840?3840:s,normalWidth:a>3840?3840:a,format:i.e?"":i.f},u=async()=>{try{const t=await o.a.get(n.x+"/random-wallpaper",{_:(new Date).getTime()});if(!t.success)throw t;const{src:e,_id:r,source:i}=t.data[0],{url:a,rawUrl:s}=P(e.rawSrc);return{data:{url:a,rawUrl:s,id:r,source:i}}}catch(t){return{error:t}}},l=async()=>{try{const t=await o.a.get(n.y+"/get_bing_wallpaper",null,{_single:"getBingWallpaper"});if(t.error)throw t.error;const{data:e}=t,{content:r,url:i,rawUrl:a}=P(e.src.rawSrc);return e.thumbnail=r,e.url=i,e.rawUrl=a,t}catch(t){return{error:t}}},p=async t=>{const{source:e}=t;t.source="all"===e?"":e;try{const e=await o.a.get(n.x+"/get-wallpaper",t,{_single:"getWallpapers"}),{data:r}=e;return r.forEach(t=>{const{content:e,url:r,rawUrl:n}=P(t.src.rawSrc);t.thumbnail=e,t.url=r,t.rawUrl=n}),{result:e}}catch(t){return{error:t}}};async function h(t){"1"===t.order?t.order="like":"2"===t.order&&(t.order="_id");try{const e=await o.a.get(n.y+"/get_wallpaper_list",Object.assign({client:"pc"},t),{_single:"getWallpaperListByType"});if(0!==e.code)throw new Error(e.message);const{data:r}=e;return r.list.forEach(t=>{const{content:e,url:r,rawUrl:n}=P(t.src.rawSrc);t.thumbnail=e,t.url=r,t.rawUrl=n}),r.data=r.list,r.success=1,{result:r}}catch(t){return{error:t}}}const d=async(t,e)=>{try{const r=await o.a.post(n.y+"/like_wallpaper",{id:t,state:e},{_auth:!0});if(0!==r.code)throw r;return r}catch(t){return{error:t}}},f=async(t,e)=>{try{const r=await o.a.post(n.y+"/collection_wallpaper",{id:t,state:e},{_auth:!0});if(0!==r.code)throw r;return r}catch(t){return{error:t}}},g=async t=>{try{const e=await o.a.post(n.y+"/add_custom_color",Object.assign(Object.assign({},t),{newVer:!0}),{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},v=async t=>{try{const e=await o.a.post(n.y+"/set_custom_color_items",t,{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},m=async()=>{try{const t=await o.a.get(n.y+"/get_custom_color",null,{_auth:!0});if(0!==t.code)throw t;return t}catch(t){return{error:t}}},y=async t=>{try{const e=await o.a.post(n.y+"/remove_custom_color",{id:t,newVer:!0},{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},b=async t=>{try{const e=await o.a.post(n.y+"/upload_wallpaper",t,{headers:{"Content-Type":"multipart/form-data"}});if(0!==e.code)throw e;return{data:e.data}}catch(t){return{error:t}}},w=async t=>{try{const e=await o.a.get(n.y+"/get_wallpapers_by_id",{id:t});if(0!==e.code)throw e;const{data:r}=e;return r.forEach(t=>{const{content:e,url:r,rawUrl:n}=P(t.src.rawSrc);t.thumbnail=e,t.url=r,t.rawUrl=n}),{data:r}}catch(t){return{error:t}}},x=async({libraryName:t,libraryId:e,wallpapers:r})=>{try{return await o.a.post(n.y+"/create_wallpaper_library",{libraryName:t,libraryId:e,wallpapers:r},{_auth:!0})}catch(t){return{error:t}}},_=async()=>await o.a.get(n.y+"/get_user_wallpaper_library",null,{_auth:!0}),S=async t=>{try{return await o.a.get(n.y+"/has_wallpaper_library",{libraryId:t},{_auth:!0,_proxy:!0})}catch(t){return{error:t}}},k=async()=>{try{return await o.a.get(n.y+"/get_liked_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},j=async()=>{try{return await o.a.get(n.y+"/get_collection_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},O=async t=>{const e=await o.a.get(n.y+"/get_user_wallpaper_library_items",{libraryId:t});e.data.map(t=>{const{content:e,url:r,rawUrl:n}=P(t.url);return t.content=e,t.url=r,t.rawUrl=n,t});const{data:r}=e;return e.data={items:r,count:r.length},e.data},T=async t=>{try{const e=await o.a.get(n.y+"/get_user_wallpaper_library_items_by_id",{libraryItemsId:t}),{data:r}=e;return e.data={items:r,count:r.length},e.data}catch(t){return{error:t}}},A=async(t,e,r)=>{try{return await o.a.post(n.y+"/remove_wallpaper_library_item",{libraryId:t,libraryItemId:e,ext:r},{_auth:!0})}catch(t){return{error:t}}},E=async t=>{try{return await o.a.post(n.y+"/remove_wallpaper_library",{libraryId:t},{_auth:!0})}catch(t){return{error:t}}},C=async(t,e)=>{try{return await o.a.post(n.y+"/add_images_to_library",{libraryId:t,wallpapers:e},{_auth:!0})}catch(t){return{error:t}}},R=async(t,e)=>{try{return await o.a.post(n.y+"/rename_wallpaper_library",{libraryId:t,libraryName:e},{_auth:!0})}catch(t){return{error:t}}},I=async(t,e,r="library")=>{const i={source:t,type:r};e&&(i._id=e);const a=await o.a.get(n.y+"/get_next_wallpaper",i,{_single:"getNextWallpaper"});if(0!==a.code)throw new Error;const{data:s}=a,{content:c,url:u,rawUrl:l}=P(s.rawUrl);return s.thumbnail=c,s.url=u,s.rawUrl=l,a},P=t=>({rawUrl:t,url:`${t}?imageView2/2/w/${c.normalWidth}/${c.format}interlace/1`,content:`${t}?imageView2/2/w/${c.smallWidth}/${c.format}interlace/1`})},function(t,e,r){"use strict";r.d(e,"j",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"d",(function(){return s})),r.d(e,"i",(function(){return c})),r.d(e,"h",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return p})),r.d(e,"b",(function(){return h})),r.d(e,"g",(function(){return d}));var n=r(0);const o=.1;function i(t){return`https://chrome.google.com/webstore/detail/infinity-new-tab-pro/${t}/reviews?utm_source=infinity-rate`}const a="https://addons.mozilla.org/"+n.D.lang+"/firefox/addon/infinity-new-tab-pro-firefox/";function s(t){return"https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-pro/"+t}const c="privacy_data_uninstall_title_pro",u="privacy_data_uninstall_confirm_pro",l=!0,p=()=>{},h=()=>{n.D.isZh?chrome.runtime.setUninstallURL("https://hello.wetab.link/"):chrome.runtime.setUninstallURL("")},d="https://infinityicon.infinitynewtab.com/assets/logo-pro.png"},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(419),o=r(422);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return u}));var n=r(6),o=r.n(n),i=(r(11),r(221),r(21),r(64),r(0));function a(t){return function(e){const r=new Uint8Array((e||40)/2);return window.crypto.getRandomValues(r),t+(new Date).getTime().toString(32)+function(t){let e="";const r="abcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}(18)}()}function s(t,e=i.D.lang){const r=this,n=/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;let o,a,s;return n.test(t)?(t.replace(n,(t,n,i,c)=>{4===n.length?(o=n,a=i,s=c):r.isFirstDate(e)?(s=n,a=i,o=c):(s=i,a=n,o=c),"th"===e&&(o=Number(o)-543)}),new Date(`${o}/${a}/${s}`)):null}function c(t){return t.slice(0,1).toUpperCase()+t.slice(1)}function u(t,e,r){return new o.a((n,o)=>{const i=new Image(e,r);i.onload=()=>n(i),i.onerror=o,i.crossOrigin="anonymous",i.src=t})}},function(t,e,r){var n=r(5);t.exports=n.Promise},function(t,e,r){var n=r(13),o=r(31),i=r(7)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},function(t,e,r){var n=r(13),o=r(15),i=r(85);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(5),o=r(50),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(25),o=r(102),i=r(133),a=r(13);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(5);t.exports=n},function(t,e,r){var n=r(38),o=r(43),i=r(132),a=function(t){return function(e,r,a){var s,c=n(e),u=o(c.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(62),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(24);t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},function(t,e,r){var n=r(15);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){var n=r(81);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,e,r){var n=r(13),o=r(139),i=r(43),a=r(66),s=r(140),c=r(142),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var l,p,h,d,f,g,v,m=r&&r.that,y=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=a(e,m,1+y+w),_=function(t){return l&&c(l),new u(!0,t)},S=function(t){return y?(n(t),w?x(t[0],t[1],_):x(t[0],t[1])):w?x(t,_):x(t)};if(b)l=t;else{if("function"!=typeof(p=s(t)))throw TypeError("Target is not iterable");if(o(p)){for(h=0,d=i(t.length);d>h;h++)if((f=S(t[h]))&&f instanceof u)return f;return new u(!1)}l=p.call(t)}for(g=l.next;!(v=g.call(l)).done;){try{f=S(v.value)}catch(t){throw c(l),t}if("object"==typeof f&&f&&f instanceof u)return f}return new u(!1)}},function(t,e,r){var n=r(7),o=r(26),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,r){var n=r(104),o=r(26),i=r(7)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n={};n[r(7)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,r){var n=r(13);t.exports=function(t){var e=t.return;if(void 0!==e)return n(e.call(t)).value}},function(t,e,r){var n=r(7)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){var n,o,i,a,s,c,u,l,p=r(5),h=r(46).f,d=r(82).set,f=r(84),g=r(145),v=r(56),m=p.MutationObserver||p.WebKitMutationObserver,y=p.document,b=p.process,w=p.Promise,x=h(p,"queueMicrotask"),_=x&&x.value;_||(n=function(){var t,e;for(v&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},f||v||g||!m||!y?w&&w.resolve?((u=w.resolve(void 0)).constructor=w,l=u.then,a=function(){l.call(u,n)}):a=v?function(){b.nextTick(n)}:function(){d.call(p,n)}:(s=!0,c=y.createTextNode(""),new m(n).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),t.exports=_||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},function(t,e,r){var n=r(34);t.exports=/web0s(?!.*chrome)/i.test(n)},function(t,e,r){var n=r(5);t.exports=function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e){t.exports="object"==typeof window},function(t,e,r){var n=r(7),o=r(72),i=r(19),a=n("unscopables"),s=Array.prototype;null==s[a]&&i.f(s,a,{configurable:!0,value:o(null)}),t.exports=function(t){s[a][t]=!0}},function(t,e,r){var n=r(18),o=r(19),i=r(13),a=r(151);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),s=n.length,c=0;s>c;)o.f(t,r=n[c++],e[r]);return t}},function(t,e,r){var n=r(80),o=r(54);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(45),o=r(153),i=r(70),a=r(60),s=r(55),c=r(16),u=r(24),l=r(7),p=r(37),h=r(26),d=r(86),f=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,v=l("iterator"),m=function(){return this};t.exports=function(t,e,r,l,d,y,b){o(r,e,l);var w,x,_,S=function(t){if(t===d&&A)return A;if(!g&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},k=e+" Iterator",j=!1,O=t.prototype,T=O[v]||O["@@iterator"]||d&&O[d],A=!g&&T||S(d),E="Array"==e&&O.entries||T;if(E&&(w=i(E.call(new t)),f!==Object.prototype&&w.next&&(p||i(w)===f||(a?a(w,f):"function"!=typeof w[v]&&c(w,v,m)),s(w,k,!0,!0),p&&(h[k]=m))),"values"==d&&T&&"values"!==T.name&&(j=!0,A=function(){return T.call(this)}),p&&!b||O[v]===A||c(O,v,A),h[e]=A,d)if(x={values:S("values"),keys:y?A:S("keys"),entries:S("entries")},b)for(_ in x)(g||j||!(_ in O))&&u(O,_,x[_]);else n({target:e,proto:!0,forced:g||j},x);return x}},function(t,e,r){"use strict";var n=r(86).IteratorPrototype,o=r(72),i=r(47),a=r(55),s=r(26),c=function(){return this};t.exports=function(t,e,r){var u=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,u,!1,!0),s[u]=c,t}},function(t,e,r){var n=r(10);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(39),o=r(215),i=r(114),a=r(111),s=r(158),c=r(216),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var l,p,h,d,f,g,v,m=r&&r.that,y=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=a(e,m,1+y+w),_=function(t){return l&&c(l),new u(!0,t)},S=function(t){return y?(n(t),w?x(t[0],t[1],_):x(t[0],t[1])):w?x(t,_):x(t)};if(b)l=t;else{if("function"!=typeof(p=s(t)))throw TypeError("Target is not iterable");if(o(p)){for(h=0,d=i(t.length);d>h;h++)if((f=S(t[h]))&&f instanceof u)return f;return new u(!1)}l=p.call(t)}for(g=l.next;!(v=g.call(l)).done;){try{f=S(v.value)}catch(t){throw c(l),t}if("object"==typeof f&&f&&f instanceof u)return f}return new u(!1)}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,r){var n=r(76);t.exports=n("navigator","userAgent")||""},function(t,e,r){var n=r(96),o=r(91),i=r(28)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(179),o=r(121);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,r=null,n=null)=>{for(;e!==r;){const r=e.nextSibling;t.insertBefore(e,n),e=r}},i=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}}},,function(t,e,r){"use strict";r.r(e),r.d(e,"slave",(function(){return s}));r(8),r(11),r(14),r(41);var n=r(6),o=r.n(n),i=r(276),a=r(59);const s=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new i.a,this.initChannel=()=>{"serviceworker"===a.b?this.initServiceworker():"background"===a.b&&this.initBackground()},this.awaitChannel=()=>new o.a(async(t,e)=>{"serviceworker"===a.b?this.channel?(await this.channel.active,await this.channel.controlling,t(null)):(this.initResolve.push(t),this.initReject.push(e)):"background"===a.b&&t(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:t}=await r.e(11).then(r.bind(null,615)),e=await t();if(!e)return;e.addEventListener("message",t=>{const{type:e,payload:r={}}=t.data;"master:bordcast-message"===e&&this.messageScheduler.execTask(r.type,r.payload)}),await e.active,await e.controlling,this.channel=e,this.initResolve.forEach(t=>{t()}),this.channel.postTask=this.channel.messageSW}catch(t){console.log("slave初始化错误：",t),this.initReject.forEach(t=>{t()})}},this.initBackground=()=>{this.channel={postTask:t=>new o.a((e,r)=>{chrome.runtime.sendMessage(t,t=>{chrome.runtime.lastError&&r(chrome.runtime.lastError),e(t)})})},chrome.runtime.onMessage.addListener(({type:t,payload:e,ignoreId:r})=>{"master:bordcast-message"===t?chrome.tabs.getCurrent(t=>{r!==t.id&&this.messageScheduler.execTask(e.type,e.payload)}):"slave:bordcast-message"===t&&this.messageScheduler.execTask(e.data.type,e.data.payload)})},a.a)throw new Error("it's not page");this.initChannel()}postTask(t,e,r){return new o.a(async(n,o)=>{let i=!1;await this.awaitChannel();const s=Object.assign(Object.assign(Object.assign({},a.d),{taskId:Object(a.c)()}),r);s.timeout&&setTimeout(()=>{i||n({error:"timeout"})},s.timeout);try{const r=await this.channel.postTask({type:t,payload:Object.assign({data:e},s)});i=!0,n(r)}catch(t){n({error:t})}})}listenMessage(t,e){this.messageScheduler.listenTask(t,e)}sendMessage(t,e=""){this.postTask("slave:bordcast-message",{type:t,payload:e})}}},function(t,e,r){var n,o,i=r(20),a=r(157),s=i.process,c=s&&s.versions,u=c&&c.v8;u?o=(n=u.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){"use strict";var n=r(159),o=r(303),i=r(91),a=r(97),s=r(211),c=a.set,u=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},,function(t,e,r){var n=r(42),o=r(98),i=r(170),a=r(286),s=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,r){var n=r(199),o=r(200),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,r){var n=r(20),o=r(285),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(39),o=r(287);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports={}},function(t,e,r){var n={};n[r(28)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,r){var n,o=r(39),i=r(213),a=r(201),s=r(174),c=r(202),u=r(178),l=r(170),p=l("IE_PROTO"),h=function(){},d=function(t){return"<script>"+t+"<\/script>"},f=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;f=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete f.prototype[a[r]];return f()};s[p]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(h.prototype=o(t),r=new h,h.prototype=null,r[p]=t):r=f(),void 0===e?r:i(r,e)}},function(t,e){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,e,r){var n=r(20),o=r(63),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,r){var n=r(30),o=r(166),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(63);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],l=!1,p=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&d())}function d(){if(!l){var t=s(h);l=!0;for(var e=u.length;e;){for(c=u,u=[];++p<e;)c&&c[p].run();p=-1,e=u.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new f(t,e)),1!==u.length||l||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n,o,i=r(226),a=r(227),s=r(71),c=r(72),u=r(40).get,l=r(228),p=r(229),h=RegExp.prototype.exec,d=s("native-string-replace",String.prototype.replace),f=h,g=(n=/a/,o=/b*/g,h.call(n,"a"),h.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(g||m||v||l||p)&&(f=function(t){var e,r,n,o,a,s,l,p=this,y=u(p),b=y.raw;if(b)return b.lastIndex=p.lastIndex,e=f.call(b,t),p.lastIndex=b.lastIndex,e;var w=y.groups,x=v&&p.sticky,_=i.call(p),S=p.source,k=0,j=t;if(x&&(-1===(_=_.replace("y","")).indexOf("g")&&(_+="g"),j=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(S="(?: "+S+")",j=" "+j,k++),r=new RegExp("^(?:"+S+")",_)),m&&(r=new RegExp("^"+S+"$(?!\\s)",_)),g&&(n=p.lastIndex),o=h.call(x?r:p,j),x?o?(o.input=o.input.slice(k),o[0]=o[0].slice(k),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:g&&o&&(p.lastIndex=p.global?o.index+o[0].length:n),m&&o&&o.length>1&&d.call(o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&w)for(o.groups=s=c(null),a=0;a<w.length;a++)s[(l=w[a])[0]]=o[l[1]];return o}),t.exports=f},function(t,e,r){r(165);var n=r(304),o=r(20),i=r(96),a=r(57),s=r(91),c=r(28)("toStringTag");for(var u in n){var l=o[u],p=l&&l.prototype;p&&i(p)!==c&&a(p,c,u),s[u]=s.Array}},function(t,e,r){var n=r(234),o=r(406),i=r(407),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(39),o=r(74),i=r(28)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},function(t,e,r){var n=r(173),o=r(121),i=function(t){return function(e,r){var i,a,s=String(o(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){"use strict";var n=r(212).IteratorPrototype,o=r(176),i=r(94),a=r(108),s=r(91),c=function(){return this};t.exports=function(t,e,r){var u=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,u,!1,!0),s[u]=c,t}},function(t,e,r){var n=r(409),o=r(410),i=r(411),a=r(412),s=r(413);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,r){var n=r(270);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(122)(Object,"create");t.exports=n},function(t,e,r){var n=r(431);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(350),o=r(351);t.exports=function(t,e,r,i){var a=!r;r||(r={});for(var s=-1,c=e.length;++s<c;){var u=e[s],l=i?i(r[u],t[u],u,r,t):void 0;void 0===l&&(l=t[u]),a?o(r,u,l):n(r,u,l)}return r}},,function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r(73);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function o(t){let e=i.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},i.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(n.f);return r=e.keyString.get(o),void 0===r&&(r=new n.a(t,t.getTemplateElement()),e.keyString.set(o,r)),e.stringsArray.set(t.strings,r),r}const i=new Map},function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var n=r(161),o=r(95),i=r(194);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,s=(t,e,r)=>{let s=a.get(e);void 0===s&&(Object(n.b)(e,e.firstChild),a.set(e,s=new o.e(Object.assign({templateFactory:i.b},r))),s.appendInto(e)),s.setValue(t),s.commit()}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=t=>(...e)=>{const r=t(...e);return n.set(r,!0),r},i=t=>"function"==typeof t&&n.has(t)},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(4);const o=Symbol("LitMobxRenderReaction"),i=Symbol("LitMobxRequestUpdate");var a=r(1);class s extends(function(t){var e,r;return r=class extends t{constructor(){super(...arguments),this[e]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const t=this.constructor.name||this.nodeName;this[o]=new n.a(t+".update()",this[i]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[o]&&(this[o].dispose(),this[o]=void 0)}update(t){this[o]?this[o].track(super.update.bind(this,t)):super.update(t)}},e=i,r}(a.a)){}},function(t,e,r){"use strict";var n=r(32),o=r(169),i=r(172),a=r(176),s=r(57),c=r(94),u=r(155),l=function(t,e){var r=this;if(!(r instanceof l))return new l(t,e);i&&(r=i(new Error(void 0),o(r))),void 0!==e&&s(r,"message",String(e));var n=[];return u(t,n.push,{that:n}),s(r,"errors",n),r};l.prototype=a(Error.prototype,{constructor:c(5,l),message:c(5,""),name:c(5,"AggregateError")}),n({global:!0},{AggregateError:l})},function(t,e,r){var n=r(90),o=r(171);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(76);t.exports=n("document","documentElement")},function(t,e,r){var n=r(164),o=r(30);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(t,e,r){var n=r(20);t.exports=n.Promise},function(t,e,r){var n=r(171),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n,o,i,a=r(20),s=r(30),c=r(111),u=r(202),l=r(178),p=r(207),h=r(118),d=a.location,f=a.setImmediate,g=a.clearImmediate,v=a.process,m=a.MessageChannel,y=a.Dispatch,b=0,w={},x=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},_=function(t){return function(){x(t)}},S=function(t){x(t.data)},k=function(t){a.postMessage(t+"",d.protocol+"//"+d.host)};f&&g||(f=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},n(b),b},g=function(t){delete w[t]},h?n=function(t){v.nextTick(_(t))}:y&&y.now?n=function(t){y.now(_(t))}:m&&!p?(i=(o=new m).port2,o.port1.onmessage=S,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&d&&"file:"!==d.protocol&&!s(k)?(n=k,a.addEventListener("message",S,!1)):n="onreadystatechange"in l("script")?function(t){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),x(t)}}:function(t){setTimeout(_(t),0)}),t.exports={set:f,clear:g}},function(t,e,r){var n=r(157);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(n)},function(t,e,r){var n=r(39),o=r(63),i=r(107);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){"use strict";var n=r(32),o=r(74),i=r(107),a=r(156),s=r(155);n({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=i.f(e),n=r.resolve,c=r.reject,u=a((function(){var r=o(e.resolve),i=[],a=0,c=1;s(t,(function(t){var o=a++,s=!1;i.push(void 0),c++,r.call(e,t).then((function(t){s||(s=!0,i[o]={status:"fulfilled",value:t},--c||n(i))}),(function(t){s||(s=!0,i[o]={status:"rejected",reason:t},--c||n(i))}))})),--c||n(i)}));return u.error&&c(u.value),r.promise}})},function(t,e,r){"use strict";var n=r(32),o=r(74),i=r(76),a=r(107),s=r(156),c=r(155);n({target:"Promise",stat:!0},{any:function(t){var e=this,r=a.f(e),n=r.resolve,u=r.reject,l=s((function(){var r=o(e.resolve),a=[],s=0,l=1,p=!1;c(t,(function(t){var o=s++,c=!1;a.push(void 0),l++,r.call(e,t).then((function(t){c||p||(p=!0,n(t))}),(function(t){c||p||(c=!0,a[o]=t,--l||u(new(i("AggregateError"))(a,"No one promise resolved")))}))})),--l||u(new(i("AggregateError"))(a,"No one promise resolved"))}));return l.error&&u(l.value),r.promise}})},function(t,e,r){"use strict";var n=r(32),o=r(187),i=r(169),a=r(172),s=r(108),c=r(57),u=r(92),l=r(28),p=r(90),h=r(91),d=r(212),f=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,v=l("iterator"),m=function(){return this};t.exports=function(t,e,r,l,d,y,b){o(r,e,l);var w,x,_,S=function(t){if(t===d&&A)return A;if(!g&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},k=e+" Iterator",j=!1,O=t.prototype,T=O[v]||O["@@iterator"]||d&&O[d],A=!g&&T||S(d),E="Array"==e&&O.entries||T;if(E&&(w=i(E.call(new t)),f!==Object.prototype&&w.next&&(p||i(w)===f||(a?a(w,f):"function"!=typeof w[v]&&c(w,v,m)),s(w,k,!0,!0),p&&(h[k]=m))),"values"==d&&T&&"values"!==T.name&&(j=!0,A=function(){return T.call(this)}),p&&!b||O[v]===A||c(O,v,A),h[e]=A,d)if(x={values:S("values"),keys:y?A:S("keys"),entries:S("entries")},b)for(_ in x)(g||j||!(_ in O))&&u(O,_,x[_]);else n({target:e,proto:!0,forced:g||j},x);return x}},function(t,e,r){"use strict";var n,o,i,a=r(30),s=r(169),c=r(57),u=r(42),l=r(28),p=r(90),h=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(n=o):d=!0);var f=null==n||a((function(){var t={};return n[h].call(t)!==t}));f&&(n={}),p&&!f||u(n,h)||c(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},function(t,e,r){var n=r(65),o=r(110),i=r(39),a=r(214);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),s=n.length,c=0;s>c;)o.f(t,r=n[c++],e[r]);return t}},function(t,e,r){var n=r(288),o=r(201);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(28),o=r(91),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,r){var n=r(39);t.exports=function(t){var e=t.return;if(void 0!==e)return n(e.call(t)).value}},function(t,e,r){var n=r(92);t.exports=function(t,e,r){for(var o in e)r&&r.unsafe&&t[o]?t[o]=e[o]:n(t,o,e[o],r);return t}},function(t,e,r){"use strict";var n=r(186).charAt,o=r(97),i=r(211),a=o.set,s=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,r){"use strict";r(165);var n=r(32),o=r(76),i=r(220),a=r(92),s=r(217),c=r(108),u=r(187),l=r(97),p=r(177),h=r(42),d=r(111),f=r(96),g=r(39),v=r(63),m=r(176),y=r(94),b=r(323),w=r(158),x=r(28),_=o("fetch"),S=o("Headers"),k=x("iterator"),j=l.set,O=l.getterFor("URLSearchParams"),T=l.getterFor("URLSearchParamsIterator"),A=/\+/g,E=Array(4),C=function(t){return E[t-1]||(E[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},R=function(t){try{return decodeURIComponent(t)}catch(e){return t}},I=function(t){var e=t.replace(A," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(C(r--),R);return e}},P=/[!'()~]|%20/g,L={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},M=function(t){return L[t]},N=function(t){return encodeURIComponent(t).replace(P,M)},B=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:I(n.shift()),value:I(n.join("="))}))},D=function(t){this.entries.length=0,B(this.entries,t)},U=function(t,e){if(t<e)throw TypeError("Not enough arguments")},$=u((function(t,e){j(this,{type:"URLSearchParamsIterator",iterator:b(O(t).entries),kind:e})}),"Iterator",(function(){var t=T(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r})),z=function(){p(this,z,"URLSearchParams");var t,e,r,n,o,i,a,s,c,u=arguments.length>0?arguments[0]:void 0,l=this,d=[];if(j(l,{type:"URLSearchParams",entries:d,updateURL:function(){},updateSearchParams:D}),void 0!==u)if(v(u))if("function"==typeof(t=w(u)))for(r=(e=t.call(u)).next;!(n=r.call(e)).done;){if((a=(i=(o=b(g(n.value))).next).call(o)).done||(s=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");d.push({key:a.value+"",value:s.value+""})}else for(c in u)h(u,c)&&d.push({key:c,value:u[c]+""});else B(d,"string"==typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},V=z.prototype;s(V,{append:function(t,e){U(arguments.length,2);var r=O(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},delete:function(t){U(arguments.length,1);for(var e=O(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){U(arguments.length,1);for(var e=O(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){U(arguments.length,1);for(var e=O(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){U(arguments.length,1);for(var e=O(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){U(arguments.length,1);for(var r,n=O(this),o=n.entries,i=!1,a=t+"",s=e+"",c=0;c<o.length;c++)(r=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,r.value=s));i||o.push({key:a,value:s}),n.updateURL()},sort:function(){var t,e,r,n=O(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=O(this).entries,n=d(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new $(this,"keys")},values:function(){return new $(this,"values")},entries:function(){return new $(this,"entries")}},{enumerable:!0}),a(V,k,V.entries),a(V,"toString",(function(){for(var t,e=O(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(N(t.key)+"="+N(t.value));return r.join("&")}),{enumerable:!0}),c(z,"URLSearchParams"),n({global:!0,forced:!i},{URLSearchParams:z}),i||"function"!=typeof _||"function"!=typeof S||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,r,n,o=[t];return arguments.length>1&&(v(e=arguments[1])&&(r=e.body,"URLSearchParams"===f(r)&&((n=e.headers?new S(e.headers):new S).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=m(e,{body:y(0,String(r)),headers:y(0,n)}))),o.push(e)),_.apply(this,o)}}),t.exports={URLSearchParams:z,getState:O}},function(t,e,r){var n=r(30),o=r(28),i=r(90),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),i&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},function(t,e,r){"use strict";var n=r(325),o=r(5),i=r(10),a=r(31),s=r(43),c=r(327),u=r(328),l=r(329),p=r(69),h=r(330),d=n.aTypedArray,f=n.exportTypedArrayMethod,g=o.Uint16Array,v=g&&g.prototype.sort,m=!!v&&!i((function(){var t=new g(2);t.sort(null),t.sort({})})),y=!!v&&!i((function(){if(p)return p<74;if(u)return u<67;if(l)return!0;if(h)return h<602;var t,e,r=new g(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(r.sort((function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));f("sort",(function(t){if(void 0!==t&&a(t),y)return v.call(this,t);d(this);var e,r=s(this.length),n=Array(r);for(e=0;e<r;e++)n[e]=this[e];for(n=c(this,function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t)),e=0;e<r;e++)this[e]=n[e];return this}),!y||m)},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,r){var n=r(65),o=r(230),i=r(94),a=r(159),s=r(180),c=r(42),u=r(238),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=s(e,!0),u)try{return l(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,r){var n=r(30),o=/#|\.prototype\./,i=function(t,e){var r=s[a(t)];return r==u||r!=c&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,r){"use strict";var n=r(13);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(10),o=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,r){var n=r(10);t.exports=n((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},function(t,e,r){var n=r(10);t.exports=n((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){t.exports=r(309)},function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return d}));r(277),r(21),r(64),r(333);var n=r(233),o=r.n(n),i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,s=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function c(t){return(t||"").toString().replace(s,"")}var u=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function p(e){var r,n=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},o={},a=typeof(e=e||n);if("blob:"===e.protocol)o=new d(unescape(e.pathname),{});else if("string"===a)for(r in o=new d(e,{}),l)delete o[r];else if("object"===a){for(r in e)r in l||(o[r]=e[r]);void 0===o.slashes&&(o.slashes=i.test(e.href))}return o}function h(t){t=c(t);var e=a.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function d(t,e){t=c(t);var r,n,i,a,s,l,d=u.slice(),f=this,g=0;for(e=p(e),r=!(n=h(t||"")).protocol&&!n.slashes,f.slashes=n.slashes||r&&e.slashes,f.protocol=n.protocol||e.protocol||"",t=n.rest,n.slashes||(d[3]=[/(.*)/,"pathname"]);g<d.length;g++)"function"!=typeof(a=d[g])?(i=a[0],l=a[1],i!=i?f[l]=t:"string"==typeof i?~(s=t.indexOf(i))&&("number"==typeof a[2]?(f[l]=t.slice(0,s),t=t.slice(s+a[2])):(f[l]=t.slice(s),t=t.slice(0,s))):(s=i.exec(t))&&(f[l]=s[1],t=t.slice(0,s.index)),f[l]=f[l]||r&&a[3]&&e[l]||"",a[4]&&(f[l]=f[l].toLowerCase())):t=a(t);r&&e.slashes&&"/"!==f.pathname.charAt(0)&&(""!==f.pathname||""!==e.pathname)&&(f.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),n=r.length,o=r[n-1],i=!1,a=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),a++):a&&(0===n&&(i=!0),r.splice(n,1),a--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(f.pathname,e.pathname)),o()(f.port,f.protocol)||(f.host=f.hostname,f.port=""),f.username=f.password="",f.auth&&(a=f.auth.split(":"),f.username=a[0]||"",f.password=a[1]||""),f.origin=f.protocol&&f.host&&"file:"!==f.protocol?f.protocol+"//"+f.host:"null",f.href=f.toString()}d.prototype={toString:function(){var t,e=this,r=e.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var n=r+(e.slashes?"//":"");return e.username&&(n+=e.username,e.password&&(n+=":"+e.password),n+="@"),n+=e.host+e.pathname,(t=e.query)&&(n+="?"!==t.charAt(0)?"?"+t:t),e.hash&&(n+=e.hash),n}},d.extractProtocol=h,d.location=p,d.trimLeft=c}).call(this,r(58))},function(t,e,r){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,r){var n=r(88).Symbol;t.exports=n},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(455),o=r(253),i=r(456),a=r(457),s=r(458),c=r(184),u=r(349),l=u(n),p=u(o),h=u(i),d=u(a),f=u(s),g=c;(n&&"[object DataView]"!=g(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=g(new o)||i&&"[object Promise]"!=g(i.resolve())||a&&"[object Set]"!=g(new a)||s&&"[object WeakMap]"!=g(new s))&&(g=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case l:return"[object DataView]";case p:return"[object Map]";case h:return"[object Promise]";case d:return"[object Set]";case f:return"[object WeakMap]"}return e}),t.exports=g},function(t,e,r){r(32)({global:!0},{globalThis:r(20)})},function(t,e,r){var n=r(65),o=r(30),i=r(178);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(33);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";(function(e){var n=r(33),o=r(374),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(s=r(243)),s),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(i)})),t.exports=c}).call(this,r(181))},function(t,e,r){"use strict";var n=r(33),o=r(375),i=r(240),a=r(377),s=r(380),c=r(381),u=r(244);t.exports=function(t){return new Promise((function(e,l){var p=t.data,h=t.headers;n.isFormData(p)&&delete h["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var f=t.auth.username||"",g=t.auth.password||"";h.Authorization="Basic "+btoa(f+":"+g)}var v=a(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),i(v,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,l,n),d=null}},d.onabort=function(){d&&(l(u("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),l(u(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r(382),y=(t.withCredentials||c(v))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;y&&(h[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(h,(function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),l(t),d=null)})),void 0===p&&(p=null),d.send(p)}))}},function(t,e,r){"use strict";var n=r(376);t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},function(t,e,r){"use strict";var n=r(33);t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(t){void 0!==e[t]&&(r[t]=e[t])})),n.forEach(i,(function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):void 0!==e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):void 0!==t[o]&&(r[o]=t[o])})),n.forEach(a,(function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])}));var s=o.concat(i).concat(a),c=Object.keys(e).filter((function(t){return-1===s.indexOf(t)}));return n.forEach(c,(function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])})),r}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return c}));var n=r(161),o=r(73);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),a=` ${o.f} `;class s{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===t.indexOf("--\x3e",i+1);const s=o.e.exec(t);e+=null===s?t+(r?a:o.g):t.substr(0,s.index)+s[1]+s[2]+o.b+s[3]+o.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==i&&(e=i.createHTML(e)),t.innerHTML=e,t}}class c extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,r=e.firstChild;return e.removeChild(r),Object(n.c)(e,r.firstChild),t}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(21);var n=r(250),o=r(0);const i=(t,e=null)=>`<svg\n      class="icon-svg"\n      preserveAspectRatio="xMinYMin meet"\n      viewBox="0,0,90,90"\n      style="${o.r?"will-change:transform;":""}background-color:${t.bgColor||"transparent"};${null===e?"border-radius: var(--svg-radius);":`border-radius: ${e};`} display: block;width: 100%;height: 100%;"\n    >\n      <foreignObject width="100%" height="100%">\n          <div\n            style="width:90px;height:90px;display:flex;flex-direction: column;align-items: center;justify-content: center;"\n          >\n            ${t.bgText.split("\n").map(e=>`<p\n                style="line-height:1.1;margin:0;font-size:${t.bgFont}px;color:#ffffff;text-align:center;white-space: nowrap;min-height:4px;flex-shrink: 0;"\n              >\n              ${Object(n.a)(e)}\n              </p>`).join("")}\n        </div>\n      </foreignObject>\n    </svg> `},,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(21),r(64);const n=function(t){return(t=""+t).replace(/</g,"&lt;").replace(/>/g,"&gt;")}},function(t,e,r){"use strict";var n=r(30);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e){var r=1;function n(t){var e=[];for(var r in t)e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}t.exports=function(t){return new Promise((function(e,o){var i=document.createElement("script"),a=t.url;if(t.params){var s=n(t.params);s&&(a+=(a.indexOf("?")>=0?"&":"?")+s)}function c(){i&&(i.onload=i.onreadystatechange=i.onerror=null,i.parentNode&&i.parentNode.removeChild(i),i=null)}i.async=!0;var u="axiosJsonpCallback"+r++,l=window[u],p=!1;window[u]=function(t){(window[u]=l,p)||e({data:t,status:200})};var h={_:(new Date).getTime()};h[t.callbackParamName||"callback"]=u,a+=(a.indexOf("?")>=0?"&":"?")+n(h),i.onload=i.onreadystatechange=function(){i.readyState&&!/loaded|complete/.test(i.readyState)||c()},i.onerror=function(){c(),o(new Error("Network Error"))},t.cancelToken&&t.cancelToken.promise.then((function(t){i&&(p=!0,o(t))})),i.src=a,document.head.appendChild(i)}))}},function(t,e,r){var n=r(122)(r(88),"Map");t.exports=n},function(t,e,r){var n=r(352),o=r(444),i=r(355);t.exports=function(t){return i(t)?n(t):o(t)}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(347),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.process,s=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=s}).call(this,r(255)(t))},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(352),o=r(447),i=r(355);t.exports=function(t){return i(t)?n(t,!0):o(t)}},function(t,e,r){var n=r(452),o=r(356),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(t){return null==t?[]:(t=Object(t),n(a(t),(function(e){return i.call(t,e)})))}:o;t.exports=s},function(t,e,r){var n=r(392);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(161),o=r(73);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let a,s=0,c=0,u=i.nextNode();for(;s<r.length;)if(a=r[s],Object(o.d)(a)){for(;c<a.index;)c++,"TEMPLATE"===u.nodeName&&(e.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=e.pop(),u=i.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(u.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u}));r(11),r(14),r(8),r(41);var n=r(4),o=r(163),i=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const a={},s=new Set;class c{constructor(){this.firstSync=!1,this.syncTabTime=0,this._lockRollback=!1,this.isRollbackFromStorage=!1,this.backupFileKey="",this.backupValueKeys=[],this.rollbackFromStorage=()=>null,this.stopToStorageReaction=()=>{},this.stopAutoBackupReaction=()=>{},this.convertBackupEquals=t=>t}async initSyncStore(t,e,r={},i=20){const s=t.key;if(a[s])throw new Error("storage key 重复");a[s]=this,0!==e.length&&(this.rollbackFromStorage=async()=>{let o=!1;const a=Object.create(null);Object.keys(r).forEach(t=>{e.includes(t)&&(a[t]=r[t])});try{const{data:r,error:n}=await t.read();if(n)throw n;const i=r?Object.keys(r):[];r&&i.forEach(t=>{e.includes(t)&&(a[t]=r[t])}),this.firstSync||r&&!e.some(t=>!i.includes(t))||(o=!0)}catch(t){console.error("storageSync",t)}this.isRollbackFromStorage=!0,this.stopToStorageReaction(),this.stopAutoBackupReaction(),Object(n.i)(()=>{for(const t in a)this[t]=a[t];this.firstSync||(this.firstSync=!0)}),this.restartAutoBackupReaction(),this.stopToStorageReaction=Object(n.h)(()=>{const t={};return e.forEach(e=>{t[e]=Object(n.j)(this[e])}),t},e=>{this.isRollbackFromStorage=!1,t.create(e).then(()=>{Object(n.i)(()=>{this.syncTabTime=Date.now()})})},{equals:n.d.structural,delay:i,fireImmediately:o})},await this.rollbackFromStorage(),Object(n.h)(()=>this.syncTabTime,t=>{t&&o.slave.sendMessage("tabs-sync",s)},{delay:60}))}restartAutoBackupReaction(t=!1){this.stopAutoBackupReaction(),this.stopAutoBackupReaction=Object(n.h)(()=>{const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(n.j)(this[e])}),t},t=>{(async(t,e)=>{try{const{syncStore:n}=await Promise.all([r.e(6),r.e(7),r.e(30)]).then(r.bind(null,614));n.pushAutoBackupPipe({[t]:e})}catch(t){}})(this.backupFileKey,t).catch()},{fireImmediately:t,equals:(t,e)=>{const r=this.convertBackupEquals(t),o=this.convertBackupEquals(e);return n.d.structural(r,o)},delay:40})}initAutoBackup(t,e){if(s.has(t))throw new Error("file key 重复");s.add(t),0!==e.length&&(this.backupFileKey=t,this.backupValueKeys=[...e])}async getBackupData(){const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(n.j)(this[e])}),t}}i([n.g],c.prototype,"firstSync",void 0),i([n.g],c.prototype,"syncTabTime",void 0),i([n.b],c.prototype,"initSyncStore",null);const u=t=>{const e=a[t];(null==e?void 0:e._lockRollback)||e.rollbackFromStorage()}},function(t,e,r){"use strict";var n=r(1);e.a=n.b`.global-scrollbar {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ddd #f2f2f2;
}
.global-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.global-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: transparent;
  border: 1px dashed transparent;
  background-clip: padding-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.global-scrollbar::-webkit-scrollbar-thumb:hover,
.global-scrollbar:hover::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
  background-clip: border-box;
}
.global-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
.global-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
@media only screen and (hover: none) {
  .global-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
}
`},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(8),r(11),r(14),r(41);var n=r(0),o=r(491),i=r(36),a=r.n(i),s=r(3);const c=Object(n.F)()?"pc":"mobile";var u=r(23);const l=new class{constructor(){this.ga=null,this.localKey="analytics-status-time",this.gap=432e5,this.getPermission=async()=>{let t=!0;if(n.n)try{const{privacyStore:e}=await Promise.all([r.e(6),r.e(7),r.e(29)]).then(r.bind(null,621));1!==e.collectData&&(t=!1)}catch(e){t=!1}return t},this.trySendStatus=t=>{const e=localStorage.getItem(this.localKey);e?(Date.now()-Number(e)>this.gap||Number(e)>Date.now())&&this.sendStatus(t):this.sendStatus(t)},this.sendPageView=async t=>{if(!await this.getPermission())return;const e=this.ga.getPageviewUrl(t);u.c.sendLog(e)},this.sendEvent=async(t,e=!1)=>{await this.getPermission()&&Object.keys(t).forEach(r=>{const n=t[r];if("object"==typeof n)Object.keys(n).forEach(t=>{const o=n[t],i=this.ga.getEventUrl({category:r,action:t,label:String(o),nonInteraction:e});u.c.sendLog(i)});else{const t=this.ga.getEventUrl({category:r,action:String(n),nonInteraction:e});u.c.sendLog(t)}})},this.sendBaidu=async t=>{await this.getPermission()&&(async(t="")=>{const e=n.D.runtimePlatform,r=c+"-"+e;if(null==t?void 0:t.includes("baidu.com")){const e=new a.a(t).searchParams.get("tn"),o=`https://manage-api.infinitytab.com/analysis-manager/send/60efd763a741942ac60374e1?label=${n.C.baiduLabel}&action=${e}&event=${r}`;n.s?navigator.sendBeacon(o):s.a.post(o,null,{_proxy:!0})}})(t)},this.ga=new o.a({trackingId:n.C.trackingId})}async sendStatus(t){try{this.sendEvent(t,!0),localStorage.setItem(this.localKey,""+Date.now())}catch(t){}}}},function(t,e,r){"use strict";var n=r(45),o=r(18),i=r(5),a=r(12),s=r(15),c=r(19).f,u=r(112),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(h,l);var d=h.prototype=l.prototype;d.constructor=h;var f=d.toString,g="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=f.call(t);if(a(p,t))return"";var r=g?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},function(t,e,r){var n=r(74),o=r(98),i=r(179),a=r(114),s=function(t){return function(e,r,s,c){n(r);var u=o(e),l=i(u),p=a(u.length),h=t?p-1:0,d=t?-1:1;if(s<2)for(;;){if(h in l){c=l[h],h+=d;break}if(h+=d,t?h<0:p<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:p>h;h+=d)h in l&&(c=r(c,l[h],h,u));return c}};t.exports={left:s(!1),right:s(!0)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=t=>{const e=o(t),r=i(t,e);return{searchWidth:e.width,searchHeight:e.height,searchMarginTop:e.marginTop,searchMarginBottom:e.marginBottom,searchRatio:e.searchRatio,iconBoxWidth:r.boxWidth,iconBoxHeight:r.boxHeight,iconOneHeight:r.iconOneHeight,iconWidth:r.width,miniIconPadding:r.miniIconPadding,iconRatio:r.iconRatio,iconsMargin:r.iconsMargin}},o=t=>{const{searchScale:e,innerHeight:r,innerWidth:n,miniMode:o,topBookmark:i,topUseful:a,mainRatio:s}=t;let c=0;a&&(c+=36),i&&(c+=36);const u=r-c,l=n-.2*n;let p=n,h=9*p/16;h>u&&(h=u,p=16*h/9);const d=p*(.575-.1818*Math.max(Math.min(720,p-1200),0)/720),f={width:d*e,height:h*(.0963-.0296*Math.max(Math.min(405,h-675),0)/405)*e};f.width>l&&(f.height=l/f.width*f.height,f.width=l);const g={width:f.width*s,height:f.height*s};let v=null;v=o?-.3:-.06;const m=f.width/d*s,y=Math.floor(v*u*m)+"px",b=Math.floor(.775*g.height)+"px";return{width:Math.floor(g.width)+"px",height:Math.floor(g.height)+"px",searchRatio:Number((g.width/625).toFixed(2)),marginTop:y,marginBottom:b,appContentWidth:l,appContentHeight:u,searcherSizeWithRatio:f}},i=(t,e)=>{const{row:r,col:n,rowGap:o,colGap:i,iconScale:a,innerWidth:s,mainRatio:c,fontSize:u}=t;let l=s;l<1200?l=1200:l>1920&&(l=1920);const{appContentHeight:p,appContentWidth:h,searcherSizeWithRatio:d}=e,f=h,g=.8*p-2.451*d.height,v=1+.5*(1920-l)/720,m=f/n,y=g/r,b=Math.min(Math.min(m,y)*a*v,m,y),w=(g-r*b)/r*o/2,x=n*(b+2*((f-n*b)/n*i/2));let _=Math.min(Math.ceil(x*c),s);let S=r*(b+2*w)*c;const k=b*c,j=1.3*Math.max(u*c,12)+.9*k*.08,O=1.2*(25+j);_<n*O&&(_=n*O),S<r*O&&(S=r*O);let T=.9*k-j-1;T<25&&(T=25);const A=.1*s*c;return{width:Math.floor(T)+"px",miniIconPadding:Math.floor(T/7+4)+"px",boxWidth:Math.ceil(_)+"px",boxHeight:Math.floor(S)+"px",iconOneHeight:Math.floor(S/r)+"px",iconRatio:Number((T/106).toFixed(2)),iconsMargin:Math.floor(A)+"px"}}},function(t,e,r){t.exports=r(471)},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){(function(t){var n=r(88),o=r(441),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?n.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;t.exports=c}).call(this,r(255)(t))},,,,function(t,e,r){"use strict";r.r(e),r.d(e,"uploadFile",(function(){return s}));r(8);var n=r(0),o=r(3);const i=["infinity-notes-img","custom-wallpaper-library"],a={},s=async(t,e,r)=>{let s;try{if(a[r]&&a[r].endTime>Date.now())s=a[r];else{let t=null;if(t=i.includes(r)?await o.a.get(n.y+"/upload/public_private_token",{type:r},{_auth:!0}):await o.a.get(n.y+"/upload/token",{type:r}),0!==t.code||!t.data.token)return{error:t};s=t.data,s.endTime=Date.now()+1e3*(s.expires-600),a[r]=s}const{token:c,prefix:u}=s,l=new FormData;l.append("token",c),l.append("key",u+e),l.append("file",t,e);const{key:p,url:h}=await o.a.post(s.host,l,{timeout:18e4,headers:{"Content-Type":"multipart/form-data"}});return{data:{url:h,key:p}}}catch(t){return{error:t}}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(11),r(14);class n{constructor(){this._events=new Map}listenTask(t,e){if("function"!=typeof e)return;this._events.has(t)||this._events.set(t,new Set);this._events.get(t).add(e)}execTask(t,e,...r){if(this._events.has(t)){const n=this._events.get(t);for(const t of n)t(e,...r)}}}},function(t,e,r){var n=r(18),o=r(5),i=r(68),a=r(331),s=r(16),c=r(19).f,u=r(102).f,l=r(332),p=r(226),h=r(227),d=r(24),f=r(10),g=r(12),v=r(40).enforce,m=r(103),y=r(7),b=r(228),w=r(229),x=y("match"),_=o.RegExp,S=_.prototype,k=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,O=/a/g,T=new _(j)!==j,A=h.UNSUPPORTED_Y,E=n&&(!T||A||b||w||f((function(){return O[x]=!1,_(j)!=j||_(O)==O||"/a/i"!=_(j,"i")})));if(i("RegExp",E)){for(var C=function(t,e){var r,n,o,i,c,u,h=this instanceof C,d=l(t),f=void 0===e,m=[],y=t;if(!h&&d&&f&&t.constructor===C)return t;if((d||t instanceof C)&&(t=t.source,f&&(e="flags"in y?y.flags:p.call(y))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),y=t,b&&"dotAll"in j&&(n=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),r=e,A&&"sticky"in j&&(o=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),w&&(t=(i=function(t){for(var e,r=t.length,n=0,o="",i=[],a={},s=!1,c=!1,u=0,l="";n<=r;n++){if("\\"===(e=t.charAt(n)))e+=t.charAt(++n);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:k.test(t.slice(n+1))&&(n+=2,c=!0),o+=e,u++;continue;case">"===e&&c:if(""===l||g(a,l))throw new SyntaxError("Invalid capture group name");a[l]=!0,i.push([l,u]),c=!1,l="";continue}c?l+=e:o+=e}return[o,i]}(t))[0],m=i[1]),c=a(_(t,e),h?this:S,C),(n||o||m.length)&&(u=v(c),n&&(u.dotAll=!0,u.raw=C(function(t){for(var e,r=t.length,n=0,o="",i=!1;n<=r;n++)"\\"!==(e=t.charAt(n))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+t.charAt(++n);return o}(t),r)),o&&(u.sticky=!0),m.length&&(u.groups=m)),t!==y)try{s(c,"source",""===y?"(?:)":y)}catch(t){}return c},R=function(t){t in C||c(C,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},I=u(_),P=0;I.length>P;)R(I[P++]);S.constructor=C,C.prototype=S,d(o,"RegExp",C)}m("RegExp")},function(t,e,r){"use strict";var n=r(279).forEach,o=r(282)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(66),o=r(100),i=r(61),a=r(43),s=r(280),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,p=6==t,h=7==t,d=5==t||p;return function(f,g,v,m){for(var y,b,w=i(f),x=o(w),_=n(g,v,3),S=a(x.length),k=0,j=m||s,O=e?j(f,S):r||h?j(f,0):void 0;S>k;k++)if((d||k in x)&&(b=_(y=x[k],k,w),t))if(e)O[k]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return k;case 2:c.call(O,y)}else switch(t){case 4:return!1;case 7:c.call(O,y)}return p?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},function(t,e,r){var n=r(15),o=r(281),i=r(7)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){var n=r(35);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){var n=r(284);r(305),r(306),r(307),r(308),t.exports=n},function(t,e,r){r(198),r(292),r(293),r(209),r(210),r(302),r(218),r(183);var n=r(109);t.exports=n.Promise},function(t,e,r){var n=r(20),o=r(57);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(30);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(63);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){var n=r(42),o=r(159),i=r(289).indexOf,a=r(174);t.exports=function(t,e){var r,s=o(t),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(u,r)||u.push(r));return u}},function(t,e,r){var n=r(159),o=r(114),i=r(290),a=function(t){return function(e,r,a){var s,c=n(e),u=o(c.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(173),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(203);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e){},function(t,e,r){"use strict";var n,o,i,a,s=r(32),c=r(90),u=r(20),l=r(76),p=r(204),h=r(92),d=r(217),f=r(172),g=r(108),v=r(295),m=r(63),y=r(74),b=r(177),w=r(205),x=r(155),_=r(296),S=r(185),k=r(206).set,j=r(297),O=r(208),T=r(299),A=r(107),E=r(156),C=r(97),R=r(225),I=r(28),P=r(301),L=r(118),M=r(164),N=I("species"),B="Promise",D=C.get,U=C.set,$=C.getterFor(B),z=p&&p.prototype,V=p,q=z,F=u.TypeError,W=u.document,H=u.process,G=A.f,X=G,Y=!!(W&&W.createEvent&&u.dispatchEvent),K="function"==typeof PromiseRejectionEvent,J=!1,Q=R(B,(function(){var t=w(V),e=t!==String(V);if(!e&&66===M)return!0;if(c&&!q.finally)return!0;if(M>=51&&/native code/.test(t))return!1;var r=new V((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[N]=n,!(J=r.then((function(){}))instanceof n)||!e&&P&&!K})),Z=Q||!_((function(t){V.all(t).catch((function(){}))})),tt=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},et=function(t,e){if(!t.notified){t.notified=!0;var r=t.reactions;j((function(){for(var n=t.value,o=1==t.state,i=0;r.length>i;){var a,s,c,u=r[i++],l=o?u.ok:u.fail,p=u.resolve,h=u.reject,d=u.domain;try{l?(o||(2===t.rejection&&it(t),t.rejection=1),!0===l?a=n:(d&&d.enter(),a=l(n),d&&(d.exit(),c=!0)),a===u.promise?h(F("Promise-chain cycle")):(s=tt(a))?s.call(a,p,h):p(a)):h(n)}catch(t){d&&!c&&d.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&nt(t)}))}},rt=function(t,e,r){var n,o;Y?((n=W.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),u.dispatchEvent(n)):n={promise:e,reason:r},!K&&(o=u["on"+t])?o(n):"unhandledrejection"===t&&T("Unhandled promise rejection",r)},nt=function(t){k.call(u,(function(){var e,r=t.facade,n=t.value;if(ot(t)&&(e=E((function(){L?H.emit("unhandledRejection",n,r):rt("unhandledrejection",r,n)})),t.rejection=L||ot(t)?2:1,e.error))throw e.value}))},ot=function(t){return 1!==t.rejection&&!t.parent},it=function(t){k.call(u,(function(){var e=t.facade;L?H.emit("rejectionHandled",e):rt("rejectionhandled",e,t.value)}))},at=function(t,e,r){return function(n){t(e,n,r)}},st=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,et(t,!0))},ct=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw F("Promise can't be resolved itself");var n=tt(e);n?j((function(){var r={done:!1};try{n.call(e,at(ct,r,t),at(st,r,t))}catch(e){st(r,e,t)}})):(t.value=e,t.state=1,et(t,!1))}catch(e){st({done:!1},e,t)}}};if(Q&&(q=(V=function(t){b(this,V,B),y(t),n.call(this);var e=D(this);try{t(at(ct,e),at(st,e))}catch(t){st(e,t)}}).prototype,(n=function(t){U(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q,{then:function(t,e){var r=$(this),n=G(S(this,V));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=L?H.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&et(r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=D(t);this.promise=t,this.resolve=at(ct,e),this.reject=at(st,e)},A.f=G=function(t){return t===V||t===i?new o(t):X(t)},!c&&"function"==typeof p&&z!==Object.prototype)){a=z.then,J||(h(z,"then",(function(t,e){var r=this;return new V((function(t,e){a.call(r,t,e)})).then(t,e)}),{unsafe:!0}),h(z,"catch",q.catch,{unsafe:!0}));try{delete z.constructor}catch(t){}f&&f(z,q)}s({global:!0,wrap:!0,forced:Q},{Promise:V}),g(V,B,!1,!0),v(B),i=l(B),s({target:B,stat:!0,forced:Q},{reject:function(t){var e=G(this);return e.reject.call(void 0,t),e.promise}}),s({target:B,stat:!0,forced:c||Q},{resolve:function(t){return O(c&&this===i?V:this,t)}}),s({target:B,stat:!0,forced:Z},{all:function(t){var e=this,r=G(e),n=r.resolve,o=r.reject,i=E((function(){var r=y(e.resolve),i=[],a=0,s=1;x(t,(function(t){var c=a++,u=!1;i.push(void 0),s++,r.call(e,t).then((function(t){u||(u=!0,i[c]=t,--s||n(i))}),o)})),--s||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=G(e),n=r.reject,o=E((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},function(t,e,r){"use strict";var n=r(175),o=r(96);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,r){"use strict";var n=r(76),o=r(110),i=r(28),a=r(65),s=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[s]&&r(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(28)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){var n,o,i,a,s,c,u,l,p=r(20),h=r(224).f,d=r(206).set,f=r(207),g=r(298),v=r(118),m=p.MutationObserver||p.WebKitMutationObserver,y=p.document,b=p.process,w=p.Promise,x=h(p,"queueMicrotask"),_=x&&x.value;_||(n=function(){var t,e;for(v&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},f||v||g||!m||!y?w&&w.resolve?((u=w.resolve(void 0)).constructor=w,l=u.then,a=function(){l.call(u,n)}):a=v?function(){b.nextTick(n)}:function(){d.call(p,n)}:(s=!0,c=y.createTextNode(""),new m(n).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),t.exports=_||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},function(t,e,r){var n=r(157);t.exports=/web0s(?!.*chrome)/i.test(n)},function(t,e,r){var n=r(20);t.exports=function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}},function(t,e,r){var n=r(20),o=r(205),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports="object"==typeof window},function(t,e,r){"use strict";var n=r(32),o=r(90),i=r(204),a=r(30),s=r(76),c=r(185),u=r(208),l=r(92);if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,s("Promise")),r="function"==typeof t;return this.then(r?function(r){return u(e,t()).then((function(){return r}))}:t,r?function(r){return u(e,t()).then((function(){throw r}))}:t)}}),!o&&"function"==typeof i){var p=s("Promise").prototype.finally;i.prototype.finally!==p&&l(i.prototype,"finally",p,{unsafe:!0})}},function(t,e){t.exports=function(){}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){r(198)},function(t,e,r){r(209)},function(t,e,r){"use strict";var n=r(32),o=r(107),i=r(156);n({target:"Promise",stat:!0},{try:function(t){var e=o.f(this),r=i(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}})},function(t,e,r){r(210)},function(t,e,r){var n=r(310);t.exports=n},function(t,e,r){r(183);var n=r(311),o=r(96),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.values;return t===i||t instanceof Array&&e===i.values||a.hasOwnProperty(o(t))?n:e}},function(t,e,r){var n=r(312);t.exports=n},function(t,e,r){r(165);var n=r(115);t.exports=n("Array").values},function(t,e,r){var n=r(314);t.exports=n},function(t,e,r){var n=r(315);t.exports=n},function(t,e,r){r(316),r(324),r(219);var n=r(109);t.exports=n.URL},function(t,e,r){"use strict";r(218);var n,o=r(32),i=r(65),a=r(220),s=r(20),c=r(213),u=r(92),l=r(177),p=r(42),h=r(317),d=r(319),f=r(186).codeAt,g=r(322),v=r(108),m=r(219),y=r(97),b=s.URL,w=m.URLSearchParams,x=m.getState,_=y.set,S=y.getterFor("URL"),k=Math.floor,j=Math.pow,O=/[A-Za-z]/,T=/[\d+-.A-Za-z]/,A=/\d/,E=/^0x/i,C=/^[0-7]+$/,R=/^\d+$/,I=/^[\dA-Fa-f]+$/,P=/[\0\t\n\r #%/:<>?@[\\\]^|]/,L=/[\0\t\n\r #/:<>?@[\\\]^|]/,M=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,N=/[\t\n\r]/g,B=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return"Invalid host";if(!(r=U(e.slice(1,-1))))return"Invalid host";t.host=r}else if(G(t)){if(e=g(e),P.test(e))return"Invalid host";if(null===(r=D(e)))return"Invalid host";t.host=r}else{if(L.test(e))return"Invalid host";for(r="",n=d(e),o=0;o<n.length;o++)r+=W(n[o],z);t.host=r}},D=function(t){var e,r,n,o,i,a,s,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(e=c.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=c[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=E.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?R:8==i?C:I).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=j(256,5-e))return null}else if(a>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*j(256,3-n);return s},U=function(t){var e,r,n,o,i,a,s,c=[0,0,0,0,0,0,0,0],u=0,l=null,p=0,h=function(){return t.charAt(p)};if(":"==h()){if(":"!=t.charAt(1))return;p+=2,l=++u}for(;h();){if(8==u)return;if(":"!=h()){for(e=r=0;r<4&&I.test(h());)e=16*e+parseInt(h(),16),p++,r++;if("."==h()){if(0==r)return;if(p-=r,u>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;p++}if(!A.test(h()))return;for(;A.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;p++}c[u]=256*c[u]+o,2!=++n&&4!=n||u++}if(4!=n)return;break}if(":"==h()){if(p++,!h())return}else if(h())return;c[u++]=e}else{if(null!==l)return;p++,l=++u}}if(null!==l)for(a=u-l,u=7;0!=u&&a>0;)s=c[u],c[u--]=c[l+a-1],c[l+--a]=s;else if(8!=u)return;return c},$=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=k(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},z={},V=h({},z,{" ":1,'"':1,"<":1,">":1,"`":1}),q=h({},V,{"#":1,"?":1,"{":1,"}":1}),F=h({},q,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),W=function(t,e){var r=f(t,0);return r>32&&r<127&&!p(e,t)?t:encodeURIComponent(t)},H={ftp:21,file:null,http:80,https:443,ws:80,wss:443},G=function(t){return p(H,t.scheme)},X=function(t){return""!=t.username||""!=t.password},Y=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},K=function(t,e){var r;return 2==t.length&&O.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},J=function(t){var e;return t.length>1&&K(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},Q=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&K(e[0],!0)||e.pop()},Z=function(t){return"."===t||"%2e"===t.toLowerCase()},tt={},et={},rt={},nt={},ot={},it={},at={},st={},ct={},ut={},lt={},pt={},ht={},dt={},ft={},gt={},vt={},mt={},yt={},bt={},wt={},xt=function(t,e,r,o){var i,a,s,c,u,l=r||tt,h=0,f="",g=!1,v=!1,m=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(M,"")),e=e.replace(N,""),i=d(e);h<=i.length;){switch(a=i[h],l){case tt:if(!a||!O.test(a)){if(r)return"Invalid scheme";l=rt;continue}f+=a.toLowerCase(),l=et;break;case et:if(a&&(T.test(a)||"+"==a||"-"==a||"."==a))f+=a.toLowerCase();else{if(":"!=a){if(r)return"Invalid scheme";f="",l=rt,h=0;continue}if(r&&(G(t)!=p(H,f)||"file"==f&&(X(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=f,r)return void(G(t)&&H[t.scheme]==t.port&&(t.port=null));f="","file"==t.scheme?l=dt:G(t)&&o&&o.scheme==t.scheme?l=nt:G(t)?l=st:"/"==i[h+1]?(l=ot,h++):(t.cannotBeABaseURL=!0,t.path.push(""),l=yt)}break;case rt:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,l=wt;break}l="file"==o.scheme?dt:it;continue;case nt:if("/"!=a||"/"!=i[h+1]){l=it;continue}l=ct,h++;break;case ot:if("/"==a){l=ut;break}l=mt;continue;case it:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&G(t))l=at;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",l=bt;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),l=mt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",l=wt}break;case at:if(!G(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,l=mt;continue}l=ut}else l=ct;break;case st:if(l=ct,"/"!=a||"/"!=f.charAt(h+1))continue;h++;break;case ct:if("/"!=a&&"\\"!=a){l=ut;continue}break;case ut:if("@"==a){g&&(f="%40"+f),g=!0,s=d(f);for(var y=0;y<s.length;y++){var b=s[y];if(":"!=b||m){var w=W(b,F);m?t.password+=w:t.username+=w}else m=!0}f=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(t)){if(g&&""==f)return"Invalid authority";h-=d(f).length+1,f="",l=lt}else f+=a;break;case lt:case pt:if(r&&"file"==t.scheme){l=gt;continue}if(":"!=a||v){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(t)){if(G(t)&&""==f)return"Invalid host";if(r&&""==f&&(X(t)||null!==t.port))return;if(c=B(t,f))return c;if(f="",l=vt,r)return;continue}"["==a?v=!0:"]"==a&&(v=!1),f+=a}else{if(""==f)return"Invalid host";if(c=B(t,f))return c;if(f="",l=ht,r==pt)return}break;case ht:if(!A.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(t)||r){if(""!=f){var x=parseInt(f,10);if(x>65535)return"Invalid port";t.port=G(t)&&x===H[t.scheme]?null:x,f=""}if(r)return;l=vt;continue}return"Invalid port"}f+=a;break;case dt:if(t.scheme="file","/"==a||"\\"==a)l=ft;else{if(!o||"file"!=o.scheme){l=mt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",l=bt;else{if("#"!=a){J(i.slice(h).join(""))||(t.host=o.host,t.path=o.path.slice(),Q(t)),l=mt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",l=wt}}break;case ft:if("/"==a||"\\"==a){l=gt;break}o&&"file"==o.scheme&&!J(i.slice(h).join(""))&&(K(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),l=mt;continue;case gt:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!r&&K(f))l=mt;else if(""==f){if(t.host="",r)return;l=vt}else{if(c=B(t,f))return c;if("localhost"==t.host&&(t.host=""),r)return;f="",l=vt}continue}f+=a;break;case vt:if(G(t)){if(l=mt,"/"!=a&&"\\"!=a)continue}else if(r||"?"!=a)if(r||"#"!=a){if(a!=n&&(l=mt,"/"!=a))continue}else t.fragment="",l=wt;else t.query="",l=bt;break;case mt:if(a==n||"/"==a||"\\"==a&&G(t)||!r&&("?"==a||"#"==a)){if(".."===(u=(u=f).toLowerCase())||"%2e."===u||".%2e"===u||"%2e%2e"===u?(Q(t),"/"==a||"\\"==a&&G(t)||t.path.push("")):Z(f)?"/"==a||"\\"==a&&G(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&K(f)&&(t.host&&(t.host=""),f=f.charAt(0)+":"),t.path.push(f)),f="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",l=bt):"#"==a&&(t.fragment="",l=wt)}else f+=W(a,q);break;case yt:"?"==a?(t.query="",l=bt):"#"==a?(t.fragment="",l=wt):a!=n&&(t.path[0]+=W(a,z));break;case bt:r||"#"!=a?a!=n&&("'"==a&&G(t)?t.query+="%27":t.query+="#"==a?"%23":W(a,z)):(t.fragment="",l=wt);break;case wt:a!=n&&(t.fragment+=W(a,V))}h++}},_t=function(t){var e,r,n=l(this,_t,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),s=_(n,{type:"URL"});if(void 0!==o)if(o instanceof _t)e=S(o);else if(r=xt(e={},String(o)))throw TypeError(r);if(r=xt(s,a,null,e))throw TypeError(r);var c=s.searchParams=new w,u=x(c);u.updateSearchParams(s.query),u.updateURL=function(){s.query=String(c)||null},i||(n.href=kt.call(n),n.origin=jt.call(n),n.protocol=Ot.call(n),n.username=Tt.call(n),n.password=At.call(n),n.host=Et.call(n),n.hostname=Ct.call(n),n.port=Rt.call(n),n.pathname=It.call(n),n.search=Pt.call(n),n.searchParams=Lt.call(n),n.hash=Mt.call(n))},St=_t.prototype,kt=function(){var t=S(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,s=t.query,c=t.fragment,u=e+":";return null!==o?(u+="//",X(t)&&(u+=r+(n?":"+n:"")+"@"),u+=$(o),null!==i&&(u+=":"+i)):"file"==e&&(u+="//"),u+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==s&&(u+="?"+s),null!==c&&(u+="#"+c),u},jt=function(){var t=S(this),e=t.scheme,r=t.port;if("blob"==e)try{return new _t(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&G(t)?e+"://"+$(t.host)+(null!==r?":"+r:""):"null"},Ot=function(){return S(this).scheme+":"},Tt=function(){return S(this).username},At=function(){return S(this).password},Et=function(){var t=S(this),e=t.host,r=t.port;return null===e?"":null===r?$(e):$(e)+":"+r},Ct=function(){var t=S(this).host;return null===t?"":$(t)},Rt=function(){var t=S(this).port;return null===t?"":String(t)},It=function(){var t=S(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},Pt=function(){var t=S(this).query;return t?"?"+t:""},Lt=function(){return S(this).searchParams},Mt=function(){var t=S(this).fragment;return t?"#"+t:""},Nt=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&c(St,{href:Nt(kt,(function(t){var e=S(this),r=String(t),n=xt(e,r);if(n)throw TypeError(n);x(e.searchParams).updateSearchParams(e.query)})),origin:Nt(jt),protocol:Nt(Ot,(function(t){var e=S(this);xt(e,String(t)+":",tt)})),username:Nt(Tt,(function(t){var e=S(this),r=d(String(t));if(!Y(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=W(r[n],F)}})),password:Nt(At,(function(t){var e=S(this),r=d(String(t));if(!Y(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=W(r[n],F)}})),host:Nt(Et,(function(t){var e=S(this);e.cannotBeABaseURL||xt(e,String(t),lt)})),hostname:Nt(Ct,(function(t){var e=S(this);e.cannotBeABaseURL||xt(e,String(t),pt)})),port:Nt(Rt,(function(t){var e=S(this);Y(e)||(""==(t=String(t))?e.port=null:xt(e,t,ht))})),pathname:Nt(It,(function(t){var e=S(this);e.cannotBeABaseURL||(e.path=[],xt(e,t+"",vt))})),search:Nt(Pt,(function(t){var e=S(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",xt(e,t,bt)),x(e.searchParams).updateSearchParams(e.query)})),searchParams:Nt(Lt),hash:Nt(Mt,(function(t){var e=S(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",xt(e,t,wt)):e.fragment=null}))}),u(St,"toJSON",(function(){return kt.call(this)}),{enumerable:!0}),u(St,"toString",(function(){return kt.call(this)}),{enumerable:!0}),b){var Bt=b.createObjectURL,Dt=b.revokeObjectURL;Bt&&u(_t,"createObjectURL",(function(t){return Bt.apply(b,arguments)})),Dt&&u(_t,"revokeObjectURL",(function(t){return Dt.apply(b,arguments)}))}v(_t,"URL"),o({global:!0,forced:!a,sham:!i},{URL:_t})},function(t,e,r){"use strict";var n=r(65),o=r(30),i=r(214),a=r(318),s=r(230),c=r(98),u=r(179),l=Object.assign,p=Object.defineProperty;t.exports=!l||o((function(){if(n&&1!==l({b:1},l(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=l({},t)[r]||"abcdefghijklmnopqrst"!=i(l({},e)).join("")}))?function(t,e){for(var r=c(t),o=arguments.length,l=1,p=a.f,h=s.f;o>l;)for(var d,f=u(arguments[l++]),g=p?i(f).concat(p(f)):i(f),v=g.length,m=0;v>m;)d=g[m++],n&&!h.call(f,d)||(r[d]=f[d]);return r}:l},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){"use strict";var n=r(111),o=r(98),i=r(320),a=r(215),s=r(114),c=r(321),u=r(158);t.exports=function(t){var e,r,l,p,h,d,f=o(t),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,b=u(f),w=0;if(y&&(m=n(m,v>2?arguments[2]:void 0,2)),null==b||g==Array&&a(b))for(r=new g(e=s(f.length));e>w;w++)d=y?m(f[w],w):f[w],c(r,w,d);else for(h=(p=b.call(f)).next,r=new g;!(l=h.call(p)).done;w++)d=y?i(p,m,[l.value,w],!0):l.value,c(r,w,d);return r.length=w,r}},function(t,e,r){var n=r(39),o=r(216);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){throw o(t),e}}},function(t,e,r){"use strict";var n=r(180),o=r(110),i=r(94);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},function(t,e,r){"use strict";var n=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,s=String.fromCharCode,c=function(t){return t+22+75*(t<26)},u=function(t,e,r){var n=0;for(t=r?a(t/700):t>>1,t+=a(t/e);t>455;n+=36)t=a(t/35);return a(n+36*t/(t+38))},l=function(t){var e,r,n=[],o=(t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t)).length,l=128,p=0,h=72;for(e=0;e<t.length;e++)(r=t[e])<128&&n.push(s(r));var d=n.length,f=d;for(d&&n.push("-");f<o;){var g=2147483647;for(e=0;e<t.length;e++)(r=t[e])>=l&&r<g&&(g=r);var v=f+1;if(g-l>a((2147483647-p)/v))throw RangeError(i);for(p+=(g-l)*v,l=g,e=0;e<t.length;e++){if((r=t[e])<l&&++p>2147483647)throw RangeError(i);if(r==l){for(var m=p,y=36;;y+=36){var b=y<=h?1:y>=h+26?26:y-h;if(m<b)break;var w=m-b,x=36-b;n.push(s(c(b+w%x))),m=a(w/x)}n.push(s(c(m))),h=u(p,v,f==d),p=0,++f}}++p,++l}return n.join("")};t.exports=function(t){var e,r,i=[],a=t.toLowerCase().replace(o,".").split(".");for(e=0;e<a.length;e++)r=a[e],i.push(n.test(r)?"xn--"+l(r):r);return i.join(".")}},function(t,e,r){var n=r(39),o=r(158);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},function(t,e){},function(t,e,r){"use strict";var n,o=r(326),i=r(18),a=r(5),s=r(15),c=r(12),u=r(104),l=r(16),p=r(24),h=r(19).f,d=r(70),f=r(60),g=r(7),v=r(67),m=a.Int8Array,y=m&&m.prototype,b=a.Uint8ClampedArray,w=b&&b.prototype,x=m&&d(m),_=y&&d(y),S=Object.prototype,k=S.isPrototypeOf,j=g("toStringTag"),O=v("TYPED_ARRAY_TAG"),T=o&&!!f&&"Opera"!==u(a.opera),A=!1,E={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},C={BigInt64Array:8,BigUint64Array:8},R=function(t){if(!s(t))return!1;var e=u(t);return c(E,e)||c(C,e)};for(n in E)a[n]||(T=!1);if((!T||"function"!=typeof x||x===Function.prototype)&&(x=function(){throw TypeError("Incorrect invocation")},T))for(n in E)a[n]&&f(a[n],x);if((!T||!_||_===S)&&(_=x.prototype,T))for(n in E)a[n]&&f(a[n].prototype,_);if(T&&d(w)!==_&&f(w,_),i&&!c(_,j))for(n in A=!0,h(_,j,{get:function(){return s(this)?this[O]:void 0}}),E)a[n]&&l(a[n],O,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:A&&O,aTypedArray:function(t){if(R(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(f){if(k.call(x,t))return t}else for(var e in E)if(c(E,n)){var r=a[e];if(r&&(t===r||k.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r){if(i){if(r)for(var n in E){var o=a[n];if(o&&c(o.prototype,t))try{delete o.prototype[t]}catch(t){}}_[t]&&!r||p(_,t,r?e:T&&y[t]||e)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(i){if(f){if(r)for(n in E)if((o=a[n])&&c(o,t))try{delete o[t]}catch(t){}if(x[t]&&!r)return;try{return p(x,t,r?e:T&&x[t]||e)}catch(t){}}for(n in E)!(o=a[n])||o[t]&&!r||p(o,t,e)}},isView:function(t){if(!s(t))return!1;var e=u(t);return"DataView"===e||c(E,e)||c(C,e)},isTypedArray:R,TypedArray:x,TypedArrayPrototype:_}},function(t,e){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,e){var r=Math.floor,n=function(t,e){var a=t.length,s=r(a/2);return a<8?o(t,e):i(n(t.slice(0,s),e),n(t.slice(s),e),e)},o=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},i=function(t,e,r){for(var n=t.length,o=e.length,i=0,a=0,s=[];i<n||a<o;)i<n&&a<o?s.push(r(t[i],e[a])<=0?t[i++]:e[a++]):s.push(i<n?t[i++]:e[a++]);return s};t.exports=n},function(t,e,r){var n=r(34).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},function(t,e,r){var n=r(34);t.exports=/MSIE|Trident/.test(n)},function(t,e,r){var n=r(34).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},function(t,e,r){var n=r(15),o=r(60);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},function(t,e,r){var n=r(15),o=r(35),i=r(7)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,r){"use strict";var n=r(45),o=r(334).start,i=r(335)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},function(t,e,r){var n=r(44),o="["+r(222)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,r){var n=r(10),o=r(222);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,r){var n=r(337);t.exports=n},function(t,e,r){var n=r(338),o=Array.prototype;t.exports=function(t){var e=t.reduce;return t===o||t instanceof Array&&e===o.reduce?n:e}},function(t,e,r){r(339);var n=r(115);t.exports=n("Array").reduce},function(t,e,r){"use strict";var n=r(32),o=r(267).left,i=r(251),a=r(164),s=r(118);n({target:"Array",proto:!0,forced:!i("reduce")||!s&&a>79&&a<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(341);t.exports=n},function(t,e,r){var n=r(342),o=String.prototype;t.exports=function(t){var e=t.trim;return"string"==typeof t||t===o||t instanceof String&&e===o.trim?n:e}},function(t,e,r){r(343);var n=r(115);t.exports=n("String").trim},function(t,e,r){"use strict";var n=r(32),o=r(344).trim;n({target:"String",proto:!0,forced:r(345)("trim")},{trim:function(){return o(this)}})},function(t,e,r){var n=r(121),o="["+r(223)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,r){var n=r(30),o=r(223);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(58))},function(t,e,r){var n=r(184),o=r(160);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(351),o=r(270),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];i.call(t,e)&&o(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},function(t,e,r){var n=r(436);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},function(t,e,r){var n=r(438),o=r(439),i=r(235),a=r(271),s=r(442),c=r(390),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),l=!r&&o(t),p=!r&&!l&&a(t),h=!r&&!l&&!p&&c(t),d=r||l||p||h,f=d?n(t.length,String):[],g=f.length;for(var v in t)!e&&!u.call(t,v)||d&&("length"==v||p&&("offset"==v||"parent"==v)||h&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,g))||f.push(v);return f}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(348),o=r(353);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(358),o=r(359),i=r(260),a=r(356),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,i(t)),t=o(t);return e}:a;t.exports=s},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(354)(Object.getPrototypeOf,Object);t.exports=n},function(t,e,r){var n=r(358),o=r(235);t.exports=function(t,e,r){var i=e(t);return o(t)?i:n(i,r(t))}},function(t,e,r){"use strict";r(21);var n=r(24),o=r(182),i=r(10),a=r(7),s=r(16),c=a("species"),u=RegExp.prototype;t.exports=function(t,e,r,l){var p=a(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!h||!d||r){var f=/./[p],g=e(p,""[t],(function(t,e,r,n,i){var a=e.exec;return a===o||a===u.exec?h&&!i?{done:!0,value:f.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}));n(String.prototype,t,g[0]),n(u,p,g[1])}l&&s(u[p],"sham",!0)}},function(t,e,r){"use strict";var n=r(363).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},function(t,e,r){var n=r(62),o=r(44),i=function(t){return function(e,r){var i,a,s=String(o(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){var n=r(61),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,c,u,l){var p=r+t.length,h=c.length,d=s;return void 0!==u&&(u=n(u),d=a),i.call(l,d,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(p);case"<":a=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>h){var l=o(s/10);return 0===l?n:l<=h?void 0===c[l-1]?i.charAt(1):c[l-1]+i.charAt(1):n}a=c[s-1]}return void 0===a?"":a}))}},function(t,e,r){var n=r(35),o=r(182);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,r){r(367);var n=r(368);t.exports=n},function(t,e,r){r(237)},function(t,e,r){r(237),t.exports=r(20)},function(t,e,r){"use strict";var n=r(33),o=r(239),i=r(370),a=r(245);function s(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var c=s(r(242));c.Axios=i,c.create=function(t){return s(a(c.defaults,t))},c.Cancel=r(246),c.CancelToken=r(383),c.isCancel=r(241),c.all=function(t){return Promise.all(t)},c.spread=r(384),t.exports=c,t.exports.default=c},function(t,e,r){"use strict";var n=r(33),o=r(240),i=r(371),a=r(372),s=r(245);function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(n.merge(r||{},{method:t,url:e}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,o){return this.request(n.merge(o||{},{method:t,url:e,data:r}))}})),t.exports=c},function(t,e,r){"use strict";var n=r(33);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},function(t,e,r){"use strict";var n=r(33),o=r(373),i=r(241),a=r(242);function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,r){"use strict";var n=r(33);t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},function(t,e,r){"use strict";var n=r(33);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},function(t,e,r){"use strict";var n=r(244);t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,r){"use strict";var n=r(378),o=r(379);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";var n=r(33),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},function(t,e,r){"use strict";var n=r(33);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},function(t,e,r){"use strict";var n=r(33);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,r){"use strict";var n=r(246);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(116);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class o{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const i=new WeakMap,a=Object(n.e)(t=>e=>{if(!(e instanceof n.a)||e instanceof n.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=e,{element:a}=r;let s=i.get(e);void 0===s&&(a.setAttribute("class",r.strings.join(" ")),i.set(e,s=new Set));const c=a.classList||new o(a);s.forEach(e=>{e in t||(c.remove(e),s.delete(e))});for(const e in t){const r=t[e];r!=s.has(e)&&(r?(c.add(e),s.add(e)):(c.remove(e),s.delete(e)))}"function"==typeof c.commit&&c.commit()})},function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r(89),o=r.n(n),i=(r(11),r(14),r(8),r(4)),a=r(401),s=r.n(a),c=r(263),u=r(17),l=r(9),p=r(163),h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const d=[{text:i18n("todo_welcome"),todoId:"todo-id1dtkk87it2iepal6dv4hr2uig0c",time:Date.now(),updatetime:0,done:!1}];class f extends c.a{constructor(){super(...arguments),this.todoList=d,this.currenetState="done",this.listLength=localStorage.getItem("todo-length")||0}toggleState(t){this.currenetState=t}get needNotificationPermission(){return this.todoList.some(t=>!!t.dueDate)}diffRemote(t){const e=t=>{if(null==t?void 0:t.updatetime){const e={updatetime:void 0};return t.done=!!t.done,Object.assign(Object.assign({},t),e)}},r=s()(t.todoList||[],e),n=s()(Object(i.j)(this.todoList),e);return!i.d.structural(r,n)}mergeRemote(t,e){if(t.todoList)if(e)this.todoList=t.todoList;else{const e=this.todoList,r=t.todoList,{result:n}=u.a.mergeArray(e,r,"todoId");this.todoList=n}}edit(t){this.todoList=this.todoList.map(e=>e.todoId===t?Object.assign(Object.assign({},e),{edit:!e.edit}):e)}get hasDoneTodo(){return this.todoList.filter(t=>t.done).length}async addTodo(t){if(!o()(t).call(t).length)return;const e={done:!1,time:+new Date,todoId:u.a.randomId("todo-"),updatetime:await u.a.getTimestamp(),text:t};Object(i.i)(()=>{this.todoList=[e,...this.todoList]})}removeTodo(){this.todoList=this.todoList.filter(t=>!t.done)}deleteTodo(t){this.todoList=this.todoList.filter(e=>e.todoId!==t)}async toggleTodo(t){const e=await u.a.getTimestamp();Object(i.i)(()=>{this.todoList=this.todoList.map(r=>r.todoId===t?Object.assign(Object.assign({},r),{done:!r.done,updatetime:e}):Object.assign({},r))})}async updateTodo(t,e){const r=await u.a.getTimestamp();Object(i.i)(()=>{this.todoList=this.todoList.map(n=>n.todoId===t?Object.assign(Object.assign(Object.assign({},n),e),{updatetime:r,edit:!1}):Object.assign({},n))})}removeTime(t){this.todoList=this.todoList.map(e=>e.todoId===t?Object.assign(Object.assign({},e),{dueDate:"",dueTime:"",dueTimestamp:null}):e)}}h([i.g],f.prototype,"todoList",void 0),h([i.g],f.prototype,"currenetState",void 0),h([i.b],f.prototype,"toggleState",null),h([i.e],f.prototype,"needNotificationPermission",null),h([i.b],f.prototype,"mergeRemote",null),h([i.b],f.prototype,"edit",null),h([i.g],f.prototype,"listLength",void 0),h([i.e],f.prototype,"hasDoneTodo",null),h([i.b],f.prototype,"addTodo",null),h([i.b],f.prototype,"removeTodo",null),h([i.b],f.prototype,"deleteTodo",null),h([i.b],f.prototype,"toggleTodo",null),h([i.b],f.prototype,"updateTodo",null),h([i.b],f.prototype,"removeTime",null);const g=new f;g.initSyncStore(l.j,["todoList","listLength"],{}),g.initAutoBackup("todo",["todoList"]),Object(i.c)(()=>{if(g.firstSync){const t=g.todoList.filter(t=>!t.done).length;Object(i.i)(()=>{g.listLength=t}),localStorage.setItem("todo-length",t+"")}});let v=!1;Object(i.c)(()=>{if(g.firstSync){const t=g.todoList.filter(t=>!t.done&&t.dueTimestamp>Date.now()).map(t=>Object(i.j)(t));if(!v)return void(v=!0);p.slave.postTask("slave:change-todo",t)}}),Object(i.c)(()=>{let t=!1;const{todoList:e}=g;for(let r=0;r<e.length-1;r++){const{done:n}=e[r],o=e[r+1].done;if(n&&!o){t=!0;break}}t&&(Object(i.i)(()=>{const t=e.filter(t=>t.done),r=e.filter(t=>!t.done);g.todoList=[...r,...t]}),t=!1)},{delay:300})},,function(t,e,r){var n=r(188),o=r(414),i=r(415),a=r(416),s=r(417),c=r(418);function u(t){var e=this.__data__=new n(t);this.size=e.size}u.prototype.clear=o,u.prototype.delete=i,u.prototype.get=a,u.prototype.has=s,u.prototype.set=c,t.exports=u},function(t,e,r){var n=r(423),o=r(430),i=r(432),a=r(433),s=r(434);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,r){var n=r(443),o=r(256),i=r(257),a=i&&i.isTypedArray,s=a?o(a):n;t.exports=s},function(t,e,r){var n=r(360),o=r(260),i=r(254);t.exports=function(t){return n(t,i,o)}},function(t,e,r){var n=r(88).Uint8Array;t.exports=n},,,,,,function(t,e,r){"use strict";r.r(e);var n=r(6),o=r.n(n),i=(r(11),r(14),r(197)),a=r(482),s=r(1),c=r(4),u=s.b`.i-bubble {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
}
.i-bubble.network-error .i-bubble-wrap,
.i-bubble.error .i-bubble-wrap,
.i-bubble.success .i-bubble-wrap {
  padding-left: 30px;
  padding-right: 32px;
}
.i-bubble + .i-bubble-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-in 0s;
}
.i-bubble.loading + .i-bubble-mask {
  display: block;
}
.i-bubble.loading.popup + .i-bubble-mask {
  opacity: 1;
}
.i-bubble .i-bubble-wrap {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color: #333;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 14px;
  line-height: 1.4em;
  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  max-width: 600px;
}
.i-bubble.popup .i-bubble-wrap {
  transform: scale(1);
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.i-bubble .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 12px;
  display: none;
}
.i-bubble .icon.icon-loading {
  animation: spin 700ms linear infinite;
}
.i-bubble .i-bubble-text {
  color: #e4e4e4;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  word-break: break-all;
}
.i-bubble .i-bubble-button {
  width: 70px;
  height: 28px;
  color: #4caf50;
  background-color: initial;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color, background-color 200ms;
  border-radius: 4px;
  outline: none;
  max-width: 180px;
  margin-left: 46px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.i-bubble .i-bubble-button:hover {
  background-color: rgba(76, 175, 80, 0.14);
}
`,l=r(17),p=r(27),h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const d=Object(p.a)("network-error.png",!1),f=Object(p.a)("error.png",!1),g=Object(p.a)("success.png",!1),v=Object(p.a)("loading.png",!1);class m extends i.a{constructor(){super(...arguments),this.popup=!1,this.showButton=!1}static _timeToHideHandler(t){if(t.showButton){const e=t.shadowRoot.querySelector(".i-bubble .i-bubble-button");e.onclick&&(e.onclick=null)}const e=t.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");let r=!1;const n=()=>{t.onmouseenter=null,t.onmouseleave=null,document.body.contains(t)&&document.body.removeChild(t),r=!0};e.addEventListener("transitionend",n,{once:!0}),e.addEventListener("transitioncancel",n,{once:!0}),setTimeout(()=>{r||n()},150),t.setPopup(!1)}static _setTimerToHide(t,e){this._clearTimerToHide(t),t.hideTimer=setTimeout(()=>this._timeToHideHandler(t),e)}static _clearTimerToHide(t){t.hideTimer&&(clearTimeout(t.hideTimer),t.hideTimer=null)}static _messageMisc(t,e,r){this.setText(t),document.body.appendChild(this),window.customElements.whenDefined("i-bubble").then(()=>(this.offsetWidth,this.setPopup(!0),new o.a(t=>requestAnimationFrame(t)))).then(()=>{r&&r(this)}),e>0&&m._setTimerToHide(this,e)}static message(t,e){const r=document.createElement("i-bubble");r.setType("message"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static networkError(t,e){const r=document.createElement("i-bubble");r.setType("network-error"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static success(t,e){const r=document.createElement("i-bubble");r.setType("success"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static error(t,e){const r=document.createElement("i-bubble");r.setType("error"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static popupLogin(t){const e=this.popup(i18n("reqeust_login_message"),{showButton:!0,btnValue:i18n("to_login"),type:"message",onBtnClick:null!=t?t:()=>{a.userStore.openModal()}}),r=Date.now();let n=this.duration2;e.onmouseenter=()=>{n=Date.now()-r,m._clearTimerToHide(e)},e.onmouseleave=()=>{m._setTimerToHide(e,n)}}static popupLoading(t){const e=this.popup(i18n("wallpaper_loading"),{duration:0,showButton:!0,btnValue:i18n("cancel"),type:"loading",onBtnClick:t});return()=>setTimeout(()=>this._timeToHideHandler(e),m.waitForReady)}static loading(t){const e=this.popup(t,{type:"loading",duration:0});return()=>setTimeout(()=>this._timeToHideHandler(e),m.waitForReady)}static popup(t,e){const{duration:r=this.duration2,btnValue:n,onBtnClick:o,type:i,showButton:a}=e,s=document.createElement("i-bubble");return s.setType(i),n&&s.setBtnValue(n),a&&s.setShowButton(a),this._messageMisc.call(s,t,r,()=>{if(s.showButton){s.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick=t=>{o&&o(t),this._timeToHideHandler(s)}}}),s}firstUpdated(){const t="\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ",e=document.createElement("style");e.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${d});${t}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${g});${t}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${f});${t}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${v});${t}\n      }\n      `)),this.shadowRoot.appendChild(e)}render(){return s.e`
      <section class="i-bubble ${this.type}${this.popup?" popup":""}">
        <section class="i-bubble-wrap">
          <i class="icon icon-${this.type}"></i>
          <span class="i-bubble-text">${this.text}</span>
          <input
            class="i-bubble-button"
            type="button"
            .value=${this.btnValue}
            style="${this.showButton?"":"display: none;"}"
          />
        </section>
      </section>
      <section class="i-bubble-mask" @click=${l.a.stopBubble}></section>
    `}setType(t){this.type=t}setText(t){this.text=t}setBtnValue(t){this.btnValue=t}setPopup(t){this.popup=t}setShowButton(t){this.showButton=t}}m.duration=3e3,m.duration2=5e3,m.waitForReady=1e3/60,m.styles=u,h([c.g],m.prototype,"type",void 0),h([c.g],m.prototype,"text",void 0),h([c.g],m.prototype,"btnValue",void 0),h([c.g],m.prototype,"popup",void 0),h([c.g],m.prototype,"showButton",void 0),h([c.b],m.prototype,"setType",null),h([c.b],m.prototype,"setText",null),h([c.b],m.prototype,"setBtnValue",null),h([c.b],m.prototype,"setPopup",null),h([c.b],m.prototype,"setShowButton",null),window.customElements.define("i-bubble",m);e.default=m},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));r(11),r(14);class n{constructor(){this._caches={},this._setCaches=t=>(...e)=>{this._caches[t]=e}}}const o=[],i=t=>new Proxy(t,{set:(t,e,r)=>null===r?(t[e]=r,!0):"function"==typeof t[e]?(console.warn("失败：重复注册"),!0):(t[e]=r,o.includes(e)&&delete t._caches[e],t._caches.hasOwnProperty(e)&&(t[e](...t._caches[e]),delete t._caches[e]),!0),get:(t,e)=>"function"==typeof t[e]?t[e]:t._setCaches(e)})},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(6),o=r.n(n),i=(r(8),r(0)),a=r(75);async function s(){if(i.s||i.r){if("granted"!==await new o.a(t=>{!function(){try{Notification.requestPermission().then()}catch(t){return!1}return!0}()?Notification.requestPermission(t):Notification.requestPermission().then(t)}))throw new Error}else await a.a.request(["notifications"])}},function(t,e,r){var n=r(408);t.exports=function(t,e){return n(t,5,e="function"==typeof e?e:void 0)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));r(21),r(64),r(8);var n=r(1),o=r(197),i=n.b`:host {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 20px 60px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
textarea,
input {
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.box-dynamic {
  padding-bottom: 30px;
}
.item-icon {
  height: 70px;
}
.img-item-box:not([hidden]) {
  display: flex;
  align-items: flex-end;
}
.img-item {
  width: 60px;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.item {
  position: relative;
  margin-bottom: 20px;
}
.item .label-box {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.item .label-box .label {
  font-weight: 500;
  color: #333333;
}
.item .label-box .tip-question {
  margin-left: 2px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.item #icon-preview {
  border: 4px solid #f6f6f6;
  transform: scale(0.25);
  transform-origin: left top;
  position: relative;
  border-radius: 30px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;
}
.item .img-dropper {
  position: relative;
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 6px;
  cursor: pointer;
}
.item .img-dropper[hidden] {
  display: none;
}
.item .img-preview {
  background-size: cover;
  border: 1px solid #dadce0;
  box-sizing: border-box;
}
.item .img-preview .editing:hover {
  opacity: 1;
}
.item .img-preview .editing {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
}
.item .img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.item .img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.item .img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
}
.item input::placeholder,
.item .input::placeholder,
.item textarea::placeholder {
  color: #999999;
}
.item input[type='text'],
.item .input {
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
}
.item .input {
  height: auto;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
}
.item input:-moz-read-only {
  cursor: not-allowed;
}
.item input:read-only {
  cursor: not-allowed;
}
.item textarea.target {
  outline: none;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  resize: none;
  word-break: break-all;
  color: #333333;
}
.item input[type='file'] {
  width: 100px;
}
.item.btn-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item.btn-box infinito-button {
  width: 220px;
  height: 38px;
  background: #333333;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #ffffff;
}
.item.btn-box infinito-button:disabled {
  background: rgba(51, 51, 51, 0.7);
}
.item.btn-box .btn-cancel {
  margin-top: 14px;
  background: #eeeeee;
  border-radius: 6px;
  font-size: 14px;
  color: #333333;
}
.item.btn-box .btn-cancel:hover {
  background: #c8c8c8;
}
.del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  cursor: pointer;
  transition: transform 0.2s;
}
.del:hover {
  transform: scale(1.1);
}
.svg-box {
  width: 70px;
  height: 70px;
  border: 1px solid #f6f6f6;
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  overflow: hidden;
}
`,a=(r(11),r(14),r(528),r(529),r(530),r(531),n.b`.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
i-input {
  display: block;
  margin-top: 20px;
}
.label-box {
  max-width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.label-box .label {
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
}
.imgs-box {
  display: flex;
}
.img-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
}
.img-item-box .name {
  margin-top: 8px;
  max-width: 80px;
  height: 16px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  color: #b3b3b3;
}
.active .img-item {
  box-shadow: 0px 4px 8px 0px rgba(59, 62, 64, 0.73);
}
.active .name {
  font-weight: 500;
  color: #4d4d4d;
}
.img-item {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s box-shadow;
}
.color-img {
  overflow: hidden;
}
.cloud-imgs-box {
  display: flex;
}
.cloud-imgs-box .cloud-img-box:not(:last-of-type) {
  margin-right: 10px;
}
.color-img-box {
  margin-right: 17px;
  position: relative;
}
.color-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  right: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.local-img-box {
  position: relative;
  margin-left: 17px;
}
.cloud-imgs-box + .local-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  left: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.cloud-imgs-box {
  margin: 0 17px;
}
.color-type-box {
  position: relative;
  margin-top: 18px;
  padding: 20px;
  padding-top: 1px;
  background: #f5f8fa;
}
.color-type-box:after {
  position: absolute;
  content: '';
  top: -19px;
  left: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #f5f8fa;
}
.permission-img {
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  display: flex;
  align-items: center;
  justify-content: center;
}
.permission-img img {
  width: 28px;
  height: 28px;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
`),s=r(23),c=r(93),u=r(75),l=r(0),p=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let h=class extends o.a{constructor(){super(...arguments),this.hasPermission=!1,this.imgType="local",this.imgIndex=0,this.localImageError=!1,this.localImagePreViewUrl="",this.cloudImgs=[],this.offsetRight=0,this.modalBorderRadius="3px",this.isAutoBgText=!0,this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(109,9,255,1)","rgba(255,36,160,1)"],this.handleValue=async()=>{try{await this.saveImage()}catch(t){return!!this.localImagePreViewUrl&&(t&&t.message?c.message.error(t.message):c.message.error(t||"upload error"),!1)}return!0},this.getPermissionUrl=()=>{let t=[];return t=l.k?["http://*/","https://*/"]:l.r?"<all_urls>":["<all_urls>"],t}}changeValue(t){const e=new CustomEvent("on-change",{detail:{value:t}});this.dispatchEvent(e)}getAutoBgText(){if(!this.isAutoBgText)return;const{name:t}=this.value;let e="";e=t.length>3?t.substr(0,2):t,this.changeValue({bgText:e})}choosetextImg(){this.changeValue({bgType:"color"})}chooseCloudImg(t){this.changeValue({bgType:"image"}),this.imgType="cloud",this.imgIndex=t}chooseLocalImg(){this.changeValue({bgType:"image"}),this.imgType="local"}async saveImage(){if("color"===this.value.bgType)this.value.bgColor||this.changeValue({bgColor:this.colors[0]});else if("image"===this.value.bgType){let t={};if("cloud"===this.imgType){const e=this.$cloudIcons.querySelectorAll("i-imgicon")[this.imgIndex];t=await e.getImg()}else if("local"===this.imgType)if(this.localImagePreViewUrl)t=await this.$localicon.getImg();else{if(!this.value.bgImage)throw this.localImageError=!0,new Error("none img");t={url:this.value.bgImage,bgColor:this.value.bgColor}}this.changeValue({bgImage:t.url,bgColor:t.bgColor})}}getFormateUrl(t){return t.includes(":")?t:"http://"+this.value.target}renderCloudImgs(){return n.e`
      <div class="cloud-imgs-box">
        ${this.cloudImgs.map((t,e)=>n.e`<div
            class="img-item-box cloud-img-box ${"image"===this.value.bgType&&"cloud"===this.imgType&&this.imgIndex===e?"active":""}"
          >
            <div class="img-item cloud-img">
              <i-imgicon
                .preViewImgUrl="${t.url}"
                .bgColor="${"transparent"}"
                .canDelete="${!1}"
                .modalBorderRadius="${this.modalBorderRadius}"
                .active="${"image"===this.value.bgType&&"cloud"===this.imgType&&this.imgIndex===e}"
                @on-change="${()=>{this.chooseCloudImg(e)}}"
                .iconType="${this.iconType}"
              ></i-imgicon>
            </div>
            <div class="name ellipsis">${i18n("icon")}${"0"+(e+1)}</div>
          </div>`)}
      </div>
    `}async getUrlIcon(){if(await this.checkPermission(),this.hasPermission||l.s){const t=this.getFormateUrl(this.value.target),e=await s.b.getLogoList(t);if(e.error&&e.error.__CANCEL__)return;const r=e.data||[];if(r.length<2&&l.l){const e=await s.b.getUrlIcon(t.split("?")[0]);e.data&&e.data.length>0&&(r.push(...e.data),r.length=2)}this.cloudImgs=r.map(t=>({url:t}))}}async getPermission(){try{await u.a.request([],this.getPermissionUrl()),this.hasPermission=!0,window.__INFINITY__.hasAllUrlPermission=this.hasPermission,this.getUrlIcon()}catch(t){console.log("getPermission ~ error",t)}}async checkPermission(){try{const t=await u.a.has([],this.getPermissionUrl());this.hasPermission=!!t,window.__INFINITY__.hasAllUrlPermission=this.hasPermission}catch(t){console.log("checkPermission ~ error",t)}}renderPermissionIcon(){return n.e`
      <div class="cloud-imgs-box">
        <div class="img-item-box cloud-img-box ">
          <div @click="${this.getPermission}" class="img-item permission-img">
            <img src="${r(556)}" alt="" />
          </div>
          <div class="name ellipsis">${i18n("get_cloud_icon")}</div>
        </div>
      </div>
    `}firstUpdated(t){this.checkPermission(),t.has("value")&&(this.value.name&&this.getAutoBgText(),this.value.target&&this.getUrlIcon())}updated(t){const e=e=>{const r=t.get("value");return!r||("target"===e?r[e].split("?")[0]!==this.value[e].split("?")[0]:r[e]!==this.value[e])};t.has("value")&&(e("name")&&this.getAutoBgText(),e("target")&&this.getUrlIcon())}render(){return n.e`
      <section class="i-edit-img">
        <div class="item">
          <div class="label-box">
            <span class="label">${i18n("select_icon")}</span>
            <span
              .hidden="${"image"!==this.value.bgType||"local"!==this.imgType||!this.localImageError}"
              class="error ellipsis"
              >* ${i18n("please_upload_photos")}</span
            >
          </div>
          <div class="imgs-box">
            <div class="img-item-box color-img-box ${"color"===this.value.bgType?"active":""}">
              <div class="img-item color-img" @click="${this.choosetextImg}">
                <i-texticon
                  .bgColor="${this.value.bgColor||this.colors[0]}"
                  .bgFont="${this.value.bgFont}"
                  .bgText="${this.value.bgText}"
                ></i-texticon>
              </div>
              <div class="name ellipsis">${i18n("color_icon")}</div>
            </div>
            ${this.cloudImgs.length?this.renderCloudImgs():!1===this.hasPermission&&l.l&&!l.h?this.renderPermissionIcon():null}
            <div
              class="img-item-box local-img-box ${"image"===this.value.bgType&&"local"===this.imgType?"active":""}"
            >
              <div class="img-item local-img">
                <i-imgicon
                  class="local-img-icon"
                  .qiniu="${!0}"
                  .preViewImgUrl="${this.value.bgImage}"
                  .bgColor="${this.value.bgColor||"transparent"}"
                  .canDelete="${!0}"
                  .modalBorderRadius="${this.modalBorderRadius}"
                  .active=${"image"===this.value.bgType&&"local"===this.imgType}
                  @on-change="${t=>{this.localImagePreViewUrl=t.detail.preViewImgUrl,this.localImagePreViewUrl&&this.chooseLocalImg()}}"
                ></i-imgicon>
              </div>
              <div class="name ellipsis">${i18n("local_icon")}</div>
            </div>
          </div>
        </div>
        <div .hidden="${"color"!==this.value.bgType}" class="color-type-box">
          <i-input name="displayname" .label=${i18n("icon_bg_text")} .placeholder=${i18n("please_input_bg_text")}>
            <div class="bg-text" slot="input">
              <i-textarea
                .value="${this.value.bgText}"
                .placeholder="${i18n("show_name")}"
                @on-change="${t=>{this.changeValue({bgText:t.detail.value}),this.isAutoBgText=!1}}"
              ></i-textarea>
            </div>
          </i-input>
          <i-input name="displayfont" .label=${i18n("font_size")}>
            <div class="slider" style="margin-top: -2px;" slot="input">
              <infinito-slider
                style="--bg-color: #f5f8fa;"
                @on-change="${t=>{this.changeValue({bgFont:t.detail.value})}}"
                .value=${this.value.bgFont}
                .min=${14}
                .max=${74}
              ></infinito-slider>
            </div>
          </i-input>
          <i-input name="displaycolor" style="margin-top: 16px;" .label=${i18n("color")}>
            <div class="color" style="margin-top:14px;" slot="input">
              <i-colorpicker
                .side="${!0}"
                .value="${this.value.bgColor||this.colors[0]}"
                .colors="${this.colors}"
                .offsetRight="${this.offsetRight}"
                @on-change="${t=>{this.changeValue({bgColor:t.detail.value})}}"
              ></i-colorpicker>
            </div>
          </i-input>
        </div>
      </section>
    `}};h.styles=[a],p([Object(n.f)()],h.prototype,"hasPermission",void 0),p([Object(n.f)()],h.prototype,"imgType",void 0),p([Object(n.f)()],h.prototype,"imgIndex",void 0),p([Object(n.f)()],h.prototype,"localImageError",void 0),p([Object(n.f)()],h.prototype,"localImagePreViewUrl",void 0),p([Object(n.f)()],h.prototype,"cloudImgs",void 0),p([Object(n.g)({type:Object})],h.prototype,"value",void 0),p([Object(n.g)({type:Number})],h.prototype,"offsetRight",void 0),p([Object(n.g)({type:String})],h.prototype,"iconType",void 0),p([Object(n.g)({type:String})],h.prototype,"modalBorderRadius",void 0),p([Object(n.h)(".cloud-imgs-box")],h.prototype,"$cloudIcons",void 0),p([Object(n.h)("i-texticon")],h.prototype,"$texticon",void 0),p([Object(n.h)(".local-img-icon")],h.prototype,"$localicon",void 0),h=p([Object(n.c)("i-edit-img")],h);var d=r(4),f=r(17),g=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class v{async getTargetInfo(t,e){const{data:r,error:n}=await s.b.getUrlInfoWithPermission(t.split("?")[0]);if(null==n?void 0:n.__CANCEL__)return;if(n)return e?{name:"",bgText:""}:null;return{name:function(t){const e={lt:"<",gt:">",nbsp:" ",lrm:"",amp:"&",quot:'"'};return t.replace(/&(lt|gt|nbsp|amp|quot|lrm);/gi,(t,r)=>e[r])}(r.name),bgText:""}}async uploadIcon(t,e){var r,n;const{data:o,error:i}=await s.f.uploadFile(t,f.a.randomId("icon-")+".png",e);if(i){return{error:(null===(n=null===(r=i.response)||void 0===r?void 0:r.data)||void 0===n?void 0:n.error)?i.response.data.error:i.message,url:""}}return{url:o.url,error:""}}}g([d.b],v.prototype,"getTargetInfo",null),g([d.b],v.prototype,"uploadIcon",null);const m=new v;var y=r(2),b=r(264),w=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let x=class extends n.a{constructor(){super(...arguments),this.show=!1,this.closeModal=()=>{this.show=!1;const t=new CustomEvent("on-close",{});this.dispatchEvent(t)}}render(){return n.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.show} .onCancel="${this.closeModal}">
        <div slot="body">
          <div class="container">
            <h2 class="title">${i18n("tip_question_title")}</h2>
            <span class="gap-line"></span>
            <div class="global-scrollbar" style="height: calc(100% - 81px);">
              <div class="content">
                <div class="card">
                  <div class="label">${i18n("tip_question_1")}</div>
                  <div class="img-box">
                    <img class="item-img" src="${r(557)}" alt="" />
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_2")}</div>
                  <div class="img-box img-box-2">
                    <img class="item-img" src="${r(558)}" alt="" />
                    <div class="item-tip">${i18n("copy")}</div>
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_3")}</div>
                  <div class="img-box img-box-3">
                    <img class="item-img" src="${r(559)}" alt="" />
                    <div class="item-tip tip3-box">
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("search_engine")}</span>
                        </div>
                        <span class="input">${i18n("placeholder_name")}</span>
                      </div>
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("website_search_replace_char")}</span
                          ><img class="tip-question" src="${r(494)}" alt="" />
                        </div>
                        <span class="input">https://www.google.com/search?sxsrf=ALeKk02...</span>
                        <img class="tip3-arrow" src="${r(560)}" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </infinito-modal>
    `}};x.styles=[b.a,n.b`
      .container {
        width: 800px;
        height: 70vh;
        min-height: 400px;
        max-height: 1000px;
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
      }
      .title {
        margin: 26px auto;
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
      }
      .gap-line {
        margin: auto;
        display: block;
        width: 720px;
        height: 1px;
        background: #ebebeb;
      }
      .content {
        padding: 33px 114px 50px;
        padding-right: 0;
        width: 572px;
        box-sizing: content-box;
        text-align: left;
      }
      .card {
        padding-bottom: 50px;
      }
      .label {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
      .img-box {
        position: relative;
        margin-top: 20px;
      }
      .img-box .item-img {
        width: 572px;
        height: 235px;
      }
      .item-tip {
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
      .img-box-2 .item-tip {
        top: 86px;
        left: 396px;
      }
      .tip3-box {
        top: 64px;
        left: 138px;
      }
      .tip3-item {
        position: relative;
        margin-bottom: 20px;
        width: 320px;
      }
      .tip3-label-box {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
      }
      .tip3-label {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #333333;
        line-height: 20px;
      }
      .tip3-item .input {
        display: block;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        word-break: keep-all;
        border-bottom: 1px solid #eeeeee;
        box-sizing: content-box;
        padding-bottom: 6px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #656565;
        opacity: 0.8;
        width: 319px;
        height: 20px;
        line-height: 20px;
      }
      .tip-question {
        margin-left: 2px;
        width: 16px;
        height: 16px;
      }
      .tip3-arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        left: -34px;
        bottom: 10px;
      }
    `],w([Object(n.g)({type:Boolean})],x.prototype,"show",void 0),x=w([Object(n.c)("tip-question")],x);var _,S=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let k=_=class extends o.a{constructor(){super(),this.sideRatio=1,this.popup=!1,this.iconType="custom-icon",this.readonlyTarget=!1,this.subSpin=!1,this.isAutoName=!0,this.validate={name:null,target:null},this.tipQuestion=!1,this.value=Object.assign({},_.defaultValue)}_changeTarget(t,e=!1){e?this.changeValue({target:t.currentTarget.value.replace(/%25s/g,"%s")}):this.changeValue({target:t.currentTarget.value}),this._validateTarget(),this.isAutoName&&this.getTargetInfo()}async getTargetInfo(){let t=this.value.target;if(!t)return;t.includes(":")||(t="http://"+t);if(!/^https?:\/\/(.+\.)+.+/.test(t))return;const e=await m.getTargetInfo(t,this.isAutoName);e&&this.changeValue({name:e.name})}_validateTarget(){const t=this.value.target;let e=!0;return t&&("search-engine-custom"!==this.iconType&&"search-engnie-add"!==this.iconType||t.includes("%s"))||(e=!1),this.changeValidate({target:e}),e}_validateName(t){return t||"custom-icon"===this.iconType?this.changeValidate({name:!0}):this.changeValidate({name:!1}),t}_validateAll(){this.changeValue({name:this.$name.value,target:this.$target.value}),this._validateName(this.value.name),this._validateTarget();for(const t in this.validate)if(Object.prototype.hasOwnProperty.call(this.validate,t)){if(!1===this.validate[t])return!1}return!0}changeValidate(t){this.validate=Object.assign(Object.assign({},this.validate),t)}async _submit(){if(!this._validateAll())return;this.subSpin=!0;const t=await this.$imgs.handleValue();if(this.subSpin=!1,!t)return;this.changeValue({bgColorImage:null});const e={value:Object.assign({},this.value)};e.value.target.includes(":")||(e.value.target="http://"+this.value.target);const r=Object.assign({},e.value);"color"===r.bgType?delete r.bgImage:"image"===r.bgType&&(delete r.bgFont,delete r.bgText,delete r.bgColorImage,"transparent"===r.bgColor&&(r.bgColor=void 0));const n=new CustomEvent("on-submit",{detail:{value:r}});this.dispatchEvent(n)}_cancel(){const t=new CustomEvent("on-cancel");this.dispatchEvent(t)}changeValue(t){this.value=Object.assign(Object.assign({},this.value),t)}reset(){this.validate={name:null,target:null},this.value=Object.assign({},_.defaultValue)}openTipQuestion(){this.tipQuestion=!0}_renderBasic(){const{value:t}=this;return"custom-icon"===this.iconType?n.e`<div .hidden="${this.popup}" class="item">
          <div class="label-box">
            <span class="label">${Object(y.i18n)("website_address")}</span
            ><span .hidden="${!1!==this.validate.target}" class="error">*${Object(y.i18n)("please_enter_url")}</span>
          </div>
          <input
            class="target"
            autocomplete="off"
            type="text"
            .value="${t.target||""}"
            .placeholder="${Object(y.i18n)("website_address")}"
            .readOnly="${this.readonlyTarget}"
            @input=${t=>{this._changeTarget(t)}}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(y.i18n)("website_name")}</span
            ><span .hidden="${!1!==this.validate.name}" class="error">*${Object(y.i18n)("name_error")}</span>
          </div>
          <input
            autocomplete="off"
            type="text"
            class="name"
            .value="${t.name||""}"
            .placeholder="${Object(y.i18n)("website_name")}"
            @input=${t=>{this.isAutoName=!1;const e=t.currentTarget.value;this.changeValue({name:e}),this._validateName(e)}}
          />
        </div>`:n.e` <div class="item">
          <div class="label-box">
            <span class="label">${Object(y.i18n)("search_engine")}</span
            ><span .hidden="${!1!==this.validate.name}" class="error">*${Object(y.i18n)("search_engine_error")}</span>
          </div>
          <input
            autocomplete="off"
            .value="${t.name||""}"
            type="text"
            class="name"
            .placeholder="${Object(y.i18n)("placeholder_name")}"
            @input=${t=>{const e=t.currentTarget.value;this.isAutoName=!1,this.changeValue({name:e}),this._validateName(e)}}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(y.i18n)("website_search_replace_char")}</span
            ><img
              @click="${this.openTipQuestion}"
              class="tip-question"
              src="${r(494)}"
              alt=""
            /><span .hidden="${!1!==this.validate.target}" class="error">*${Object(y.i18n)("format_error")}</span>
          </div>
          <textarea
            class="target global-scrollbar"
            rows="1"
            @input="${t=>this._changeTarget(t,!0)}"
            autocomplete="off"
            .value="${t.target||""}"
            .placeholder="${Object(y.i18n)("website_address")}"
          ></textarea>
        </div>`}_renderImgs(t,e){return n.e`<i-edit-img
      class="item"
      @on-change="${t=>this.changeValue(t.detail.value)}"
      .value=${t}
      .offsetRight=${e}
      .iconType="${this.iconType}"
      .modalBorderRadius="${this.popup?"0px":"3px"}"
    ></i-edit-img> `}render(){const t=this.sideRatio>.7?0:300*(this.sideRatio-.7);return n.e`
      ${this._renderBasic()} ${this._renderImgs(this.value,t)}
      <div class="item btn-box">
        <infinito-button primary .loading="${this.subSpin}" @click="${this._submit}"
          >${Object(y.i18n)("confirm")}</infinito-button
        >
        ${this.popup?"":n.e`<infinito-button class="btn-cancel" @click="${this._cancel}">${Object(y.i18n)("cancel")}</infinito-button>`}
      </div>
      <infinito-portal-entrance destination="tip-question">
        <tip-question
          @on-close="${()=>{this.tipQuestion=!1}}"
          .show="${this.tipQuestion}"
        ></tip-question>
      </infinito-portal-entrance>
    `}};k.styles=[b.a,i],k.defaultValue={bgType:"color",bgColor:"",bgFont:30,bgText:"",bgImage:"",target:"",name:"",bgColorImage:""},S([Object(n.g)({type:Number})],k.prototype,"sideRatio",void 0),S([Object(n.g)({type:Boolean})],k.prototype,"popup",void 0),S([Object(n.g)({type:String})],k.prototype,"iconType",void 0),S([Object(n.g)({type:Boolean})],k.prototype,"readonlyTarget",void 0),S([Object(n.g)({type:Object})],k.prototype,"value",void 0),S([Object(n.f)()],k.prototype,"subSpin",void 0),S([Object(n.f)()],k.prototype,"isAutoName",void 0),S([Object(n.f)()],k.prototype,"validate",void 0),S([Object(n.f)()],k.prototype,"tipQuestion",void 0),S([Object(n.h)(".target")],k.prototype,"$target",void 0),S([Object(n.h)(".name")],k.prototype,"$name",void 0),S([Object(n.h)("i-edit-img")],k.prototype,"$imgs",void 0),k=_=S([Object(n.c)("i-editicon")],k)},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(11),r(14),r(21),r(64);var n=r(1),o=r(492),i=r.n(o),a=(r(523),r(521),n.b`/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:11.623Z
 */
.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}
.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}
.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}
.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}
.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}
.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}
.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}
.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}
.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}
.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}
.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}
.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}
.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}
.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}
.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}
.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}
.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}
.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}
.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}
.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}
.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}
.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}
.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}
.cropper-invisible {
  opacity: 0;
}
.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}
.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
`),s=n.b`:host {
  display: block;
  position: relative;
  z-index: 99999999;
}
.img-modal {
  position: fixed;
  z-index: 111;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.img-modal.hide {
  display: none;
}
.img-modal .img-modal-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.img-modal .img-modal-content {
  width: 640px;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.img-modal .modal-header .close {
  margin-top: 18px;
  text-align: right;
}
.img-modal .modal-header .close i-usesvg {
  color: #d9d6d7;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.img-modal .modal-header .title {
  margin-top: 8px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.img-modal .modal-body {
  display: flex;
  padding-bottom: 20px;
}
.img-modal .cropper {
  position: relative;
  width: 260px;
  height: 260px;
  margin-right: 24px;
  flex-shrink: 0;
  margin-bottom: 32px;
}
.img-modal .float-option {
  position: absolute;
  bottom: -32px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.img-modal .float-option i-usesvg {
  cursor: pointer;
  width: 18px;
  height: 18px;
  color: #333;
  opacity: 0.3;
  transition: opacity 0.2s;
}
.img-modal .float-option i-usesvg:hover {
  opacity: 1;
}
.img-modal .float-option-left > i-usesvg {
  margin-right: 16px;
}
.img-modal .float-option-right > i-usesvg {
  margin-left: 16px;
}
.img-modal .option {
  position: relative;
  flex-grow: 1;
}
.img-modal .option .title {
  display: block;
  margin-bottom: 14px;
  line-height: 1;
  font-weight: 500;
  color: #333333;
}
.img-modal .preview-box .preview {
  border: 1px solid #DADCE0;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
          mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
}
.img-modal .color-box {
  position: relative;
}
.img-modal .color-box i-colorpicker {
  margin-right: 28px;
}
.modal-footer {
  margin-top: 20px;
  margin-bottom: 40px;
}
.modal-footer .btn-box {
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
}
.modal-footer .btn-box infinito-button {
  outline: none;
  border: none;
  width: 120px;
  height: 42px;
  background: #efefef;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #333333;
  cursor: pointer;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper img {
  max-width: 100%;
  max-height: 100%;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper .cropper-crop-box {
  background-color: currentColor;
}
.cropper .cropper-point.point-se {
  height: 5px;
  width: 5px;
}
`,c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let u=class extends n.a{constructor(){super(...arguments),this.modalStatus=!1,this.rgba="",this.needBackground=!1,this.initRgba="",this.title="",this.borderRadius="3px",this.showImg=!1,this.changed=!1,this.cropper=null}static create(t){const e=null==t?void 0:t.title,r=null==t?void 0:t.needBackground,n=(null==t?void 0:t.borderRadius)||"3px",o=document.body,i=document.createElement("i-cropper");return i.borderRadius=n,e&&i.setAttribute("title",e),r&&i.setAttribute("needBackground",""+r),o.appendChild(i),this.instance=i,i}static destroy(){var t,e;null===(e=null===(t=this.instance)||void 0===t?void 0:t.parentNode)||void 0===e||e.removeChild(this.instance),this.instance=null}init(t,e){this.showImg=!1,this.rgba=e||"transparent",this.initRgba=e||"transparent",this.cropper?(this.cropper.replace(t),this.cropper.reset()):(this.$img.src=t,this.cropper=new i.a(this.$img,{aspectRatio:1,zoomOnWheel:!0,autoCropArea:.9999,preview:this.$preview,checkCrossOrigin:!1,dragMode:"move",ready:()=>{this.showImg=!0},zoom:()=>{this.changed=!0},cropend:()=>{this.changed=!0}}))}close(t=!0){this.modalStatus=!1,this.showImg=!1,t&&(this.rgba=""),this.changed=!1;const e=new CustomEvent("on-close-cropper",{bubbles:!0,composed:!0});this.dispatchEvent(e)}show(){this.modalStatus=!0;const t=new CustomEvent("on-show-cropper",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_rotateCropper(t){this.cropper.rotate(t),this.changed=!0}_scaleCropper(t){this.cropper.zoom(t),this.changed=!0}_resetCropper(){this.rgba=this.initRgba,this.cropper.reset(),this.changed=!1,requestAnimationFrame(()=>{this.$colorPicker.resetActiveIndex()})}_onSubmitImg(){const t={minWidth:512,minHeight:512,maxWidth:600,maxHeight:600};this.needBackground&&(t.fillColor=this.rgba||"transparent"),this.cropper.getCroppedCanvas(t).toBlob(t=>{const e=new CustomEvent("on-change",{detail:{data:t,color:this.rgba,changed:this.changed}});this.dispatchEvent(e),this.close()},"image/png")}_pickColor(t){const{value:e}=t.detail;this.rgba=e,this.changed=!0}render(){return n.e` <div class="img-modal ${this.modalStatus?"show":"hide"}">
      <div class="img-modal-mask"></div>
      <div class="img-modal-content" style="border-radius:${this.borderRadius}">
        <section class="modal-header">
          <div class="close">
            <i-usesvg @click="${this.close}" type="icon-guanbi1" iconfont></i-usesvg>
          </div>
          <div class="title">${this.title||i18n("custom_icon")}</div>
        </section>
        <section class="modal-body">
          <div
            style="${this.rgba?`color:${this.rgba};`:"color:transparent;"}${this.showImg?"opacity:1;":"opacity:0;"}"
            class="cropper"
          >
            <img class="file-img" crossorigin="anonymous" src="" alt="" />
            <div class="float-option">
              <div class="float-option-left">
                <i-usesvg @click="${()=>this._rotateCropper(90)}" type="infinity-pro-pure-icon-redo"></i-usesvg>
                <i-usesvg @click="${()=>this._rotateCropper(-90)}" type="infinity-pro-pure-icon-undo"></i-usesvg>
              </div>
              <div class="float-option-right">
                <i-usesvg @click="${()=>this._scaleCropper(-.1)}" type="infinity-pro-pure-icon-zoom-out"></i-usesvg>
                <i-usesvg @click="${()=>this._scaleCropper(.1)}" type="infinity-pro-pure-icon-zoom-in"></i-usesvg>
              </div>
            </div>
          </div>
          <div class="option">
            <div class="preview-box">
              <span class="title">${i18n("preview")}</span>
              <div
                style="${this.rgba?`background-color:${this.rgba};`:"background-color:transparent;"}"
                class="preview"
              ></div>
            </div>
            <div class="color-box">
              <span class="title">${i18n("bg_color")}</span>
              <i-colorpicker .value="${this.rgba||"transparent"}" @on-change="${this._pickColor}"></i-colorpicker>
            </div>
          </div>
        </section>
        <section class="modal-footer">
          <div class="btn-box">
            <infinito-button @click="${this.close}">${i18n("cancel")}</infinito-button>
            <infinito-button @click="${this._resetCropper}">${i18n("reset")}</infinito-button>
            <infinito-button primary @click="${this._onSubmitImg}">${i18n("confirm")}</infinito-button>
          </div>
        </section>
      </div>
    </div>`}};u.styles=[s,a],u.instance=null,c([Object(n.h)(".file-img")],u.prototype,"$img",void 0),c([Object(n.h)(".preview")],u.prototype,"$preview",void 0),c([Object(n.h)("i-colorpicker")],u.prototype,"$colorPicker",void 0),c([Object(n.g)({type:Boolean})],u.prototype,"modalStatus",void 0),c([Object(n.g)({type:String})],u.prototype,"rgba",void 0),c([Object(n.g)({type:Boolean})],u.prototype,"needBackground",void 0),c([Object(n.g)({type:String})],u.prototype,"title",void 0),c([Object(n.g)({type:String})],u.prototype,"borderRadius",void 0),c([Object(n.f)()],u.prototype,"showImg",void 0),u=c([Object(n.c)("i-cropper")],u)},function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?e.push(r.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=n},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){var n=r(234),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[s]=r:delete t[s]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(388),o=r(435),i=r(350),a=r(437),s=r(446),c=r(449),u=r(450),l=r(451),p=r(453),h=r(391),d=r(454),f=r(236),g=r(459),v=r(460),m=r(465),y=r(235),b=r(271),w=r(467),x=r(160),_=r(469),S=r(254),k=r(259),j={};j["[object Arguments]"]=j["[object Array]"]=j["[object ArrayBuffer]"]=j["[object DataView]"]=j["[object Boolean]"]=j["[object Date]"]=j["[object Float32Array]"]=j["[object Float64Array]"]=j["[object Int8Array]"]=j["[object Int16Array]"]=j["[object Int32Array]"]=j["[object Map]"]=j["[object Number]"]=j["[object Object]"]=j["[object RegExp]"]=j["[object Set]"]=j["[object String]"]=j["[object Symbol]"]=j["[object Uint8Array]"]=j["[object Uint8ClampedArray]"]=j["[object Uint16Array]"]=j["[object Uint32Array]"]=!0,j["[object Error]"]=j["[object Function]"]=j["[object WeakMap]"]=!1,t.exports=function t(e,r,O,T,A,E){var C,R=1&r,I=2&r,P=4&r;if(O&&(C=A?O(e,T,A,E):O(e)),void 0!==C)return C;if(!x(e))return e;var L=y(e);if(L){if(C=g(e),!R)return u(e,C)}else{var M=f(e),N="[object Function]"==M||"[object GeneratorFunction]"==M;if(b(e))return c(e,R);if("[object Object]"==M||"[object Arguments]"==M||N&&!A){if(C=I||N?{}:m(e),!R)return I?p(e,s(C,e)):l(e,a(C,e))}else{if(!j[M])return A?e:{};C=v(e,M,R)}}E||(E=new n);var B=E.get(e);if(B)return B;E.set(e,C),_(e)?e.forEach((function(n){C.add(t(n,r,O,n,e,E))})):w(e)&&e.forEach((function(n,o){C.set(o,t(n,r,O,o,e,E))}));var D=L?void 0:(P?I?d:h:I?k:S)(e);return o(D||e,(function(n,o){D&&(n=e[o=n]),i(C,o,t(n,r,O,o,e,E))})),C}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(189),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},function(t,e,r){var n=r(189);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(189);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(189);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(188);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(188),o=r(253),i=r(389);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!o||a.length<199)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new i(a)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(348),o=r(420),i=r(160),a=r(349),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,l=c.toString,p=u.hasOwnProperty,h=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?h:s).test(a(t))}},function(t,e,r){var n,o=r(421),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var n=r(88)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(424),o=r(188),i=r(253);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e,r){var n=r(425),o=r(426),i=r(427),a=r(428),s=r(429);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,r){var n=r(190);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(190),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(190),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(190);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(191);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(191);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(191);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(191);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}},function(t,e,r){var n=r(122),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,r){var n=r(192),o=r(254);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(440),o=r(167),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=c},function(t,e,r){var n=r(184),o=r(167);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e){t.exports=function(){return!1}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){var n=r(184),o=r(353),i=r(167),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[n(t)]}},function(t,e,r){var n=r(258),o=r(445),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e,r){var n=r(354)(Object.keys,Object);t.exports=n},function(t,e,r){var n=r(192),o=r(259);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e,r){var n=r(160),o=r(258),i=r(448),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=o(t),r=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&r.push(s);return r}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){(function(t){var n=r(88),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.Buffer:void 0,s=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(255)(t))},function(t,e){t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},function(t,e,r){var n=r(192),o=r(260);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}},function(t,e,r){var n=r(192),o=r(357);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e,r){var n=r(360),o=r(357),i=r(259);t.exports=function(t){return n(t,i,o)}},function(t,e,r){var n=r(122)(r(88),"DataView");t.exports=n},function(t,e,r){var n=r(122)(r(88),"Promise");t.exports=n},function(t,e,r){var n=r(122)(r(88),"Set");t.exports=n},function(t,e,r){var n=r(122)(r(88),"WeakMap");t.exports=n},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},function(t,e,r){var n=r(261),o=r(461),i=r(462),a=r(463),s=r(464);t.exports=function(t,e,r){var c=t.constructor;switch(e){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return o(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(t,r);case"[object Map]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return i(t);case"[object Set]":return new c;case"[object Symbol]":return a(t)}}},function(t,e,r){var n=r(261);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},function(t,e){var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},function(t,e,r){var n=r(234),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},function(t,e,r){var n=r(261);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},function(t,e,r){var n=r(466),o=r(359),i=r(258);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},function(t,e,r){var n=r(160),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i},function(t,e,r){var n=r(468),o=r(256),i=r(257),a=i&&i.isMap,s=a?o(a):n;t.exports=s},function(t,e,r){var n=r(236),o=r(167);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},function(t,e,r){var n=r(470),o=r(256),i=r(257),a=i&&i.isSet,s=a?o(a):n;t.exports=s},function(t,e,r){var n=r(236),o=r(167);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},function(t,e,r){var n=r(472);t.exports=n},function(t,e,r){r(183);var n=r(473),o=r(96),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.keys;return t===i||t instanceof Array&&e===i.keys||a.hasOwnProperty(o(t))?n:e}},function(t,e,r){var n=r(474);t.exports=n},function(t,e,r){r(165);var n=r(115);t.exports=n("Array").keys},,,,,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"userStore",(function(){return k}));r(8),r(41),r(11),r(14),r(21);var n=r(6),o=r.n(n),i=r(269),a=r.n(i),s=r(99),c=r.n(s),u=r(4),l=r(263),p=r(23),h=r(0),d=r(93),f=r(22),g=r.n(f),v=r(120),m=r(163),y=r(484),b=r(483),w=r(9),x=r(29),_=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class S extends l.a{constructor(){super(),this.isExpired=!1,this.isLogin=!1,this.token="",this.userInfo={},this.refreshToken="",this.mobileloginExpire=0,this.mobileloginUrl="",this.areaCodeList=[],this.thirdList=[{type:p.g.ThirdLoginType.wechat,title:i18n("wechat"),bindStatus:!1,nick_name:""},{type:p.g.ThirdLoginType.qq,title:"QQ",bindStatus:!1,nick_name:""},{type:p.g.ThirdLoginType.google,title:"Google",bindStatus:!1,nick_name:""},{type:p.g.ThirdLoginType.facebook,title:"Facebook",bindStatus:!1,abondon:!0,nick_name:""},{type:p.g.ThirdLoginType.weibo,title:i18n("xin_lang_weibo"),bindStatus:!1,abondon:!0,nick_name:""}],this.userProfilePromise=o.a.resolve(),this.wpColorUpdate=0,this.logining=!1,this.modalOpen=!1,this.removeAccountDisableSec=10,this.removeAccountDisableTimer=null,this.showLoginTipModal=!1,this.profileModal=!1,this.syncListModal=!1,this.isModify=!1,this.openMiniWindow=t=>{const e=Math.floor(window.screenY+200),r=Math.floor(window.screenX+window.innerWidth/3);return window.open(t,"_blank",`top=${e},left=${r},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`)},this.binding=!1,this.bindListener=t=>{let e;const r=()=>{e=setTimeout(()=>{t.postMessage({from:"origin_login"},"*"),t.closed?(window.removeEventListener("message",n),this.binding=!1):r()},500)};r();const n=async t=>{try{if(!t.data&&!t.data.key&&"login"!==t.data.key)return;clearTimeout(e),window.removeEventListener("message",n,!1);const{message:r}=t.data;let o;switch(r.type){case p.g.ThirdLoginType.weibo:case p.g.ThirdLoginType.google:case p.g.ThirdLoginType.facebook:case p.g.ThirdLoginType.wechat:case p.g.ThirdLoginType.qq:o=await p.g.bindThird(r.type,r.code)}if(o.error)return void d.message.error(o.error.message);this.bindSuccess("third",o.data),d.message.success(i18n("bind_success"))}catch(t){d.message.error(i18n("network_error"))}finally{this.binding=!1}};window.addEventListener("message",n,!1)},this.countdownTimer=null,this.checkMobileUrlTimer=null,this.isShowLogoutConfirm=!1,this.showConfirmOpt="",this.isShowSecondProfileModal=!1,this.secondProfileModalType=null,this.clearAllData=!1,this.loading=!1,this.URL=h.y}get thirdAccountList(){const t={};return this.userInfo.third_account&&this.userInfo.third_account.forEach(e=>{t[e.platform]=e}),this.thirdList.map(e=>t[e.type]?Object.assign(Object.assign({},e),{bindStatus:!0,nick_name:t[e.type].nick_name}):e)}setWpColorUpdate(t){this.wpColorUpdate=t}closeModal(){this.modalOpen=!1}openModal(){this.modalOpen=!0}toggleLoginTipModal(){this.showLoginTipModal=!this.showLoginTipModal}closeLoginTipModal(){this.showLoginTipModal=!1}closeProfileModal(){this.profileModal=!1}openProfileModal(){this.profileModal=!0,this.openModify()}closeSyncListModal(){this.syncListModal=!1}openSyncListModal(){this.syncListModal=!0}openModify(){this.isModify=!0}async modifyProfile(t){try{const e=await p.g.updateProfile(t);Object(u.i)(()=>{if(e&&0===e.code){const{user:{name:t,gender:r,avatar:n}}=e.data;this.userInfo.name=t,this.userInfo.gender=r,this.userInfo.avatar=n}else d.message.error(i18n("update_data_failure"))})}catch(t){d.message.error(t.message)}}async getUserProfile(){const t=await p.g.getUserProfile();Object(u.i)(()=>{if(t)if(0===t.code&&this.isLogin){const{gender:e,name:r,avatar:n}=t.data;this.userInfo.name=r,this.userInfo.gender=e,this.userInfo.avatar=n,this.userInfo["auto-backup"]=t.data["auto-backup"],this.userInfo["wp-color-update"]=t.data["wp-color-update"],this.userInfo["backup-version-v2"]=t.data["backup-version-v2"],this.userInfo.email=t.data.email,this.userInfo.phone_number=t.data.phone_number,this.userInfo.third_account=t.data.third_account}else 3012===t.code&&(d.message.error(t.message),this.exitAccount())})}async getAreaCodeList(){const{data:t,error:e}=await p.g.getAreaCodeList();e||(null==t?void 0:t.length)&&Object(u.i)(()=>{this.areaCodeList=t})}async updateAvatar(t){try{return await p.g.uploadAvatar(t)}catch(t){d.message.error(i18n("upload_avatar_failure"))}}closeModify(){this.isModify=!1}thirdPartyLogin(t){let e;switch(this.logining=!0,t){case"facebook":e=this.URL+"/login/facebook";break;case"google":e=this.URL+"/login/google";break;case"qq":e=this.URL+"/login/qq";break;case"sina":e=this.URL+"/login/weibo";break;case"wechat":e=this.URL+"/login/wechat"}setTimeout(async()=>{const t=this.openMiniWindow(e);if(this.opener=t,h.n)return;const r=setInterval(()=>{t.postMessage({from:"origin_login"},"*")},300),n=t=>{if(!t.data&&!t.data.key&&"login"!==t.data.key)return;clearInterval(r),window.removeEventListener("message",n,!1);const{message:e}=t.data;this.login3rdSuccess(e)};window.addEventListener("message",n,!1)},300)}get isLastId(){const t=this.userInfo||{},e=t.third_account||[];let r=0;return t.email&&++r,t.phone_number&&++r,r+=e.length,r<=1}thirdPartyBind(t){if(this.binding)return;let e;switch(this.binding=!0,t){case p.g.ThirdLoginType.weibo:case p.g.ThirdLoginType.google:case p.g.ThirdLoginType.facebook:case p.g.ThirdLoginType.wechat:case p.g.ThirdLoginType.qq:e=this.openMiniWindow(`${h.y}/bind/to?type=${t}`),this.bindListener(e)}}async thirdPartyUnbind(t){let e;switch(t){case p.g.ThirdLoginType.weibo:case p.g.ThirdLoginType.google:case p.g.ThirdLoginType.facebook:case p.g.ThirdLoginType.qq:case p.g.ThirdLoginType.wechat:e=await p.g.unbindThird(t)}return e}bindSuccess(t,e){if("email"===t)this.userInfo.email=e;else if("phone"===t)this.userInfo.phone_number=e;else if("third"===t){const t=this.userInfo.third_account||[];t.push(e),this.userInfo.third_account=t}}unbindSuccess(t,e){if("email"===t)this.userInfo.email=null;else if("phone"===t)this.userInfo.phone_number=null;else if("third"===t){const t=this.userInfo.third_account||[],r=t.findIndex(t=>t.platform===e);if(-1===r)return;t.splice(r,1),this.userInfo.third_account=t}}async login(t){const e={};if(e.password=t.password,"email"===t.type)e.email=t.account;else{if("phone"!==t.type)return;e.phone_number=t.account}const r=await p.g.login(e);Object(u.i)(()=>{if(!r||0!==r.code)throw d.message.error(r.message),new Error(r.code);this.loginEmailSuccess(r.data.user),this.setToken(r.data),this.setRefreshToken(r.data.refreshToken)})}async getMobileloginUrl(t=!1){if(t&&(this.mobileloginUrl="",this.mobileloginExpire=0),v.f){const{data:t,error:e}=await p.g.getMobileloginUrl();if(e)return void Object(u.i)(()=>{this.mobileloginExpire=0});Object(u.i)(()=>{this.mobileloginUrl=t.url,this.mobileloginExpire=Math.floor(t.expire/1e3)}),this.checkMobileloginUrl(t.code,t.type),0!==this.mobileloginExpire&&(this.countdownTimer=setInterval(()=>{Object(u.i)(()=>{this.mobileloginExpire-=1}),this.mobileloginExpire<=0&&clearInterval(this.countdownTimer)},1e3))}}async checkMobileloginUrl(t,e,r=5e3){v.f&&this.mobileloginExpire>3&&(clearTimeout(this.checkMobileUrlTimer),this.checkMobileUrlTimer=setTimeout(async()=>{const{data:n}=await p.g.checkMobileloginUrl(t,e);if(n&&n.expired)return clearInterval(this.countdownTimer),void Object(u.i)(()=>{this.mobileloginExpire=0});this.checkMobileloginUrl(t,e,r)},r))}async loginEmailSuccess(t){this.logining=!1,this.closeModal(),this.isLogin=!0,this.userInfo=t,this.isExpired=!1,this.settingLoginSuccess()}setUserData(t){this.logining=!1,this.closeModal(),this.isLogin=t.isLogin,this.userInfo=t,this.isExpired=!1;["token","refreshToken","isLogin"].forEach(t=>delete this.userInfo[t])}async login3rdSuccess(t){if(!t||!Object.keys(t).length)return void this.cancelLogin();const e=t["login-type"];if(["qq","wechat"].includes(e)){const e=await p.g.loginWithUid(t);0===e.code?Object(u.i)(()=>{this.setUserData(t),this.setToken(e.data),this.setRefreshToken(e.data.refreshToken)}):3006===e.code&&d.message.error("获取token失败")}else this.setUserData(t),this.setToken(t),this.setRefreshToken(t.refreshToken);this.settingLoginSuccess()}settingLoginSuccess(){b.b.changeSetting("view","isHideIcp",!0)}cancelLogin(){var t;this.logining=!1,null===(t=this.opener)||void 0===t||t.close()}toggleClear(t){this.clearAllData=t}logout(t){this.isShowLogoutConfirm=!0,this.showConfirmOpt=t,"remove"===t&&(this.removeAccountDisableSec=10,clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=setInterval(()=>{Object(u.i)(()=>{this.removeAccountDisableSec-=1,0===this.removeAccountDisableSec&&(clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=null)})},1e3))}showSecondProfileModal(t){this.isShowSecondProfileModal=!0,this.secondProfileModalType=t}closeSecondProfileModal(){this.isShowSecondProfileModal=!1,this.secondProfileModalType=null}async exitAccount(){this.loading=!0,await new o.a(t=>{setTimeout(()=>{this.clearAllData?this.clearAllStore().then(t):t(null)},200)}),Object(u.i)(()=>{this.isLogin=!1,this.userInfo={},this.clearToken()}),this.clearAllData?window.location.reload():(Object(u.i)(()=>this.loading=!1),this.closeLogoutConfirm(),this.closeProfileModal(),h.s&&y.pluginStore.hideLast())}async deleteAccount(){this.loading=!0;const t=await p.g.deleteAccount();Object(u.i)(()=>{t&&0===t.code?this.exitAccount():(3012===t.code&&this.exitAccount(),d.message.error(t.message)),this.loading=!1})}restoreKeysToStorage(t){t.forEach(({data:t,key:e})=>localStorage.setItem(e,t))}async clearAllStore(){this.stopAutoBackupReaction(),this.stopToStorageReaction(),await w.a.deleteAllForLogout();const t=[x.c,x.d];await this._deleteIdb(t),m.slave.sendMessage("tabs-reload")}async _deleteIdb(t){const e=await new o.a(t=>a()(g.a).call(g.a,(e,r)=>t(r)));await o.a.all(t.map(t=>new o.a(r=>{const n=t.split("->");if(1===n.length)return e.includes(t)?void g.a.removeItem(t,r):void r(null);r(null),e.includes(n[0])&&g.a.getItem(n[0],t=>{c()(n).call(n,(t,e,r)=>(r===n.length-1&&Reflect.deleteProperty(t,e),t[e]),t),g.a.setItem(n[0],r)})})))}_clearLocalStorage(t){const e=new Map;t.filter(Boolean).forEach(t=>{const r=t.split("->");if(1===r.length)return void e.set(t,localStorage.getItem(t));const n=JSON.parse(localStorage.getItem(r[0]));r.slice(1).forEach((t,e)=>{const o=0===e?n:n[r[e]];for(const e in o)t!==e&&Reflect.deleteProperty(o,e)}),e.set(r[0],JSON.stringify(n))}),localStorage.clear();for(const t of a()(e).call(e))localStorage.setItem(t,e.get(t))}closeLogoutConfirm(){this.isShowLogoutConfirm=!1}setToken(t){this.token=t.token}setRefreshToken(t){this.refreshToken=t}clearToken(){this.token="",this.refreshToken=""}setOutdated(){this.isExpired=!0,this.isLogin=!1}toggleReLogin(){this.isExpired=!1}getPhoneNumber(){if(this.userInfo.phone_number){const t=this.userInfo.phone_number+"";return`${t.slice(0,3)}****${t.slice(-4)}`}return""}}_([u.g],S.prototype,"isExpired",void 0),_([u.g],S.prototype,"isLogin",void 0),_([u.g],S.prototype,"token",void 0),_([u.g],S.prototype,"userInfo",void 0),_([u.g],S.prototype,"refreshToken",void 0),_([u.g],S.prototype,"mobileloginExpire",void 0),_([u.g],S.prototype,"mobileloginUrl",void 0),_([u.g],S.prototype,"areaCodeList",void 0),_([u.e],S.prototype,"thirdAccountList",null),_([u.g],S.prototype,"wpColorUpdate",void 0),_([u.b],S.prototype,"setWpColorUpdate",null),_([u.g],S.prototype,"opener",void 0),_([u.g],S.prototype,"logining",void 0),_([u.g],S.prototype,"modalOpen",void 0),_([u.g],S.prototype,"removeAccountDisableSec",void 0),_([u.g],S.prototype,"removeAccountDisableTimer",void 0),_([u.b],S.prototype,"closeModal",null),_([u.b],S.prototype,"openModal",null),_([u.g],S.prototype,"showLoginTipModal",void 0),_([u.b],S.prototype,"toggleLoginTipModal",null),_([u.b],S.prototype,"closeLoginTipModal",null),_([u.g],S.prototype,"profileModal",void 0),_([u.g],S.prototype,"syncListModal",void 0),_([u.b],S.prototype,"closeProfileModal",null),_([u.b],S.prototype,"openProfileModal",null),_([u.b],S.prototype,"closeSyncListModal",null),_([u.b],S.prototype,"openSyncListModal",null),_([u.g],S.prototype,"isModify",void 0),_([u.b],S.prototype,"openModify",null),_([u.b],S.prototype,"modifyProfile",null),_([u.b],S.prototype,"getUserProfile",null),_([u.b],S.prototype,"getAreaCodeList",null),_([u.b],S.prototype,"updateAvatar",null),_([u.b],S.prototype,"closeModify",null),_([u.b],S.prototype,"thirdPartyLogin",null),_([u.g],S.prototype,"binding",void 0),_([u.e],S.prototype,"isLastId",null),_([u.b],S.prototype,"thirdPartyBind",null),_([u.b],S.prototype,"thirdPartyUnbind",null),_([u.b],S.prototype,"bindSuccess",null),_([u.b],S.prototype,"unbindSuccess",null),_([u.b],S.prototype,"login",null),_([u.b],S.prototype,"getMobileloginUrl",null),_([u.b],S.prototype,"checkMobileloginUrl",null),_([u.b],S.prototype,"loginEmailSuccess",null),_([u.b],S.prototype,"setUserData",null),_([u.b],S.prototype,"login3rdSuccess",null),_([u.b],S.prototype,"cancelLogin",null),_([u.g],S.prototype,"isShowLogoutConfirm",void 0),_([u.g],S.prototype,"showConfirmOpt",void 0),_([u.g],S.prototype,"isShowSecondProfileModal",void 0),_([u.g],S.prototype,"secondProfileModalType",void 0),_([u.g],S.prototype,"clearAllData",void 0),_([u.b],S.prototype,"toggleClear",null),_([u.b],S.prototype,"logout",null),_([u.b],S.prototype,"showSecondProfileModal",null),_([u.b],S.prototype,"closeSecondProfileModal",null),_([u.g],S.prototype,"loading",void 0),_([u.b],S.prototype,"exitAccount",null),_([u.b],S.prototype,"deleteAccount",null),_([u.b],S.prototype,"clearAllStore",null),_([u.b],S.prototype,"closeLogoutConfirm",null),_([u.b],S.prototype,"setToken",null),_([u.b],S.prototype,"setRefreshToken",null),_([u.b],S.prototype,"clearToken",null),_([u.b],S.prototype,"setOutdated",null),_([u.b],S.prototype,"toggleReLogin",null);const k=new S;Object(u.c)(()=>{k.firstSync&&(k.isLogin?(k.closeModal(),k.toggleReLogin(),k.userProfilePromise=k.getUserProfile()):(k.closeProfileModal(),k.closeSecondProfileModal()))}),k.initSyncStore(w.k,["userInfo","isLogin","token","refreshToken","wpColorUpdate"]),w.i.injectUserStore(k),w.i.injectSendTabsSync(t=>{m.slave.sendMessage("tabs-sync",t)})},function(t,e,r){"use strict";r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return y}));r(11),r(14),r(21),r(8),r(41);var n=r(4),o=r(263),i=r(17),a=r(75),s=r(106),c=r(268),u=r(0),l=r(386),p=r(400),h=r(265),d=r(9),f=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class g extends o.a{constructor(){super(...arguments),this.localSettings={},this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,this.iconSpaceWidth=0,this.iconSpaceHeight=0,this.setting=this.init(),this.updatetime=0,this.permission={topUseful:-1,topBookmark:-1,searchSuggest:-1,gmailNotice:-1,gmailCount:-1,todoNotice:-1},this.logs=new Map,this.permissionMapper={topBookmark:[["bookmarks"],["chrome://favicon/"]],topUseful:[["topSites"],["chrome://favicon/"]],searchSuggest:[[],["https://suggestion.baidu.com/","https://google.com/"]],gmailNotice:[["notifications"],["https://mail.google.com/"]],gmailCount:[[],["https://mail.google.com/"]],todoNotice:[["notifications"],[]]},this.showSettingHomeModal=!1,this.webClickName=""}init(t={}){return{notice:Object.assign({},s.b.notice),link:Object.assign({},s.b.link),view:Object.assign({},s.b.view),layout:Object.assign({},s.b.layout),animation:Object.assign({},s.b.animation),icon:Object.assign({},s.b.icon),search:Object.assign({},s.b.search),font:Object.assign({},s.b.font),_v1Setting:t}}get withPermissionTopUseful(){return this.setting.view.topUseful&&1===this.permission.topUseful}get withPermissionTopBookmark(){return this.setting.view.topBookmark&&1===this.permission.topBookmark}get withPermissionSearchSuggest(){return this.setting.search.searchSuggest&&1===this.permission.searchSuggest}get needPermissionList(){const t=[],{view:e,notice:r,search:n}=this.setting,{topUseful:o,topBookmark:i,searchSuggest:a,gmailNotice:s,gmailCount:c,todoNotice:p}=this.permission;return u.m&&n.searchSuggest&&1!==a&&t.push({key:"searchSuggest",title:i18n("permission_serch_suggest_title"),content:i18n("permission_serch_suggest_content")}),u.m&&r.gmail&&1!==s&&t.push({key:"gmailNotice",title:i18n("permission_gmail_notice_title"),content:i18n("permission_gmail_notice_content")}),u.m&&r.gmailNumber&&1!==c&&t.push({key:"gmailCount",title:i18n("permission_gmail_num_title"),content:i18n("permission_gmail_num_content")}),u.s||u.r||!e.topBookmark||1===i||t.push({key:"topBookmark",title:i18n("permission_top_bookmark_title"),content:i18n("permission_top_bookmark_content")}),u.s||u.r||!e.topUseful||1===o||t.push({key:"topUseful",title:i18n("permission_top_useful_title"),content:i18n("permission_top_useful_content")}),l.a.needNotificationPermission&&1!==p&&((u.s||u.r)&&"denied"===Notification.permission||t.push({key:"todoNotice",title:i18n("permission_todo_notice_title"),content:i18n("permission_todo_notice_content")})),t}get sideRatio(){return this.setting.view.scaleSide}reset(){this.setting=this.init(this.setting._v1Setting),this.changeLayoutCb(this.setting.layout.col,this.setting.layout.row)}diffRemote(t){return!n.d.structural(t.setting||{},this.setting)}sendSettingValue(){Object.keys(this.localSettings).length&&(h.a.sendEvent({settingValue:this.localSettings}),this.localSettings={})}async mergeRemote(t){const e=t.setting;if(!t.setting)return;const r=this.setting;this.setting={notice:Object.assign(Object.assign({},r.notice),e.notice),link:Object.assign(Object.assign({},r.link),e.link),view:Object.assign(Object.assign({},r.view),e.view),layout:Object.assign(Object.assign({},r.layout),e.layout),animation:Object.assign(Object.assign({},r.animation),e.animation),icon:Object.assign(Object.assign({},r.icon),e.icon),search:Object.assign(Object.assign({},r.search),e.search),font:Object.assign(Object.assign({},r.font),e.font),_v1Setting:e._v1Setting};const o=await i.a.getTimestamp();Object(n.i)(()=>{this.updatetime=o})}sendSettingLog(t,e){this.logs.has(t)&&clearTimeout(this.logs.get(t)),this.logs.set(t,setTimeout(()=>{h.a.sendEvent({settingAction:{[t]:e}}),this.logs.delete(t)},2e3))}async changeSetting(t,e,r){if(this.setting[t][e]===r)return;this.setting[t][e]=r,"layout"===t&&("custom"===e&&!0===r||"customItem"===e)&&(this.setting.layout.row=this.setting.layout.customItem[0],this.setting.layout.col=this.setting.layout.customItem[1],this.changeLayoutCb(this.setting.layout.col,this.setting.layout.row));let o=`${t}_${e}`,a=r;"layout"!==t||"col"!==e&&"row"!==e||(this.changeLayoutCb(this.setting.layout.col,this.setting.layout.row),o="layout",a=this.setting.layout.row+"*"+this.setting.layout.col),this.sendSettingLog(o,a),this.localSettings[o]=a;const s=await i.a.getTimestamp();Object(n.i)(()=>{this.updatetime=s}),this.changeSettingEffect(t,e,r)}changeLayoutCb(t,e){console.log("col, row",t,e),console.log("changeLayoutCb 未注册")}changeLayout(t){this.changeLayoutCb=t}changeSettingEffect(t,e,r){switch(!0){case"topBookmark"===e:r&&this.requestPermission("topBookmark",!0);break;case"topUseful"===e:r&&this.requestPermission("topUseful",!0);break;case"notice"===t&&"gmail"===e:r&&this.requestPermission("gmailNotice",!0);break;case"notice"===t&&"gmailNumber"===e:r&&this.requestPermission("gmailCount",!0);break;case"searchSuggest"===e:r&&this.requestPermission("searchSuggest",!0)}}async checkPermission(t){if(u.s||u.r){switch(t){case"todoNotice":case"gmailNotice":return void("granted"===Notification.permission?this.permission[t]=1:"default"===Notification.permission?this.permission[t]=-1:this.permission[t]=0)}if(u.s)return}if(1===this.permission[t]){const e=this.permissionMapper[t];try{if(await a.a.has(e[0],e[1]))return}catch(t){console.log(t)}Object(n.i)(()=>{this.permission[t]=-1})}const e=this.permissionMapper[t];try{await a.a.has(e[0],e[1])&&Object(n.i)(()=>{this.permission[t]=1})}catch(t){}}async requestPermission(t,e=!1){if((u.s||u.r)&&["todoNotice","gmailNotice"].includes(t))return await Object(p.a)(),void Object(n.i)(()=>{this.permission.todoNotice=1,this.permission.gmailNotice=1});const r=this.permissionMapper[t];if(e||0!==this.permission[t]&&1!==this.permission[t])try{await a.a.request(r[0],r[1]),Object(n.i)(()=>{this.permission[t]=1}),"gmailNotice"===t&&this.checkPermission("todoNotice")}catch(e){e&&"REJECT"===e.message&&Object(n.i)(()=>{this.permission[t]=0})}}async requestAllPermission(){if(u.s||u.r)return await Object(p.a)(),void Object(n.i)(()=>{this.permission.todoNotice=1,this.permission.gmailNotice=1});const t=[[],[]];this.needPermissionList.forEach(e=>{const r=this.permissionMapper[e.key];t[0].push(...r[0]),r&&t[1].push(...r[1])});try{await a.a.request(t[0],t[1]),Object(n.i)(()=>{this.needPermissionList.forEach(t=>{this.permission[t.key]=1})})}catch(t){Object(n.i)(()=>{this.needPermissionList.forEach(t=>{this.permission[t.key]=0})})}}resetPermission(t){this.permission[t]=-1}setIconSpace(t){this.setting.icon.scale=t.iconScale,this.setting.layout.colGap=t.colGap,this.setting.layout.rowGap=t.rowGap,this.setting.search.scale=t.searchScale}openSearchSuggest(){this.setting.search.searchSuggest?this.requestPermission("searchSuggest",!0):this.setting.search.searchSuggest=!0}get sideScaleRatio(){return this.setting.view.scaleSide}toggleShowSettingHome(t){this.setting.view.isShowHomepageBtn=!t}toggleSettingHomeModal(){this.webClickName="",this.showSettingHomeModal=!this.showSettingHomeModal}closeSettingHomeModal(){this.showSettingHomeModal=!1}setWebClickName(t){this.webClickName=t}}f([n.g],g.prototype,"innerWidth",void 0),f([n.g],g.prototype,"innerHeight",void 0),f([n.g],g.prototype,"iconSpaceWidth",void 0),f([n.g],g.prototype,"iconSpaceHeight",void 0),f([n.g],g.prototype,"setting",void 0),f([n.g],g.prototype,"updatetime",void 0),f([n.g],g.prototype,"permission",void 0),f([n.e],g.prototype,"withPermissionTopUseful",null),f([n.e],g.prototype,"withPermissionTopBookmark",null),f([n.e],g.prototype,"withPermissionSearchSuggest",null),f([n.e],g.prototype,"needPermissionList",null),f([n.e],g.prototype,"sideRatio",null),f([n.b],g.prototype,"reset",null),f([n.b],g.prototype,"mergeRemote",null),f([n.b],g.prototype,"changeSetting",null),f([n.b],g.prototype,"checkPermission",null),f([n.b],g.prototype,"requestPermission",null),f([n.b],g.prototype,"requestAllPermission",null),f([n.b],g.prototype,"resetPermission",null),f([n.b],g.prototype,"setIconSpace",null),f([n.b],g.prototype,"openSearchSuggest",null),f([n.e],g.prototype,"sideScaleRatio",null),f([n.b],g.prototype,"toggleShowSettingHome",null),f([n.g],g.prototype,"showSettingHomeModal",void 0),f([n.b],g.prototype,"toggleSettingHomeModal",null),f([n.b],g.prototype,"closeSettingHomeModal",null),f([n.g],g.prototype,"webClickName",void 0),f([n.b],g.prototype,"setWebClickName",null);const v=new g;v.initSyncStore(d.g,["setting","permission","updatetime"],s.b),v.initAutoBackup("setting",["setting"]),Object(n.c)(()=>{v.firstSync&&v.setting.view.topBookmark&&v.checkPermission("topBookmark")},{delay:50}),Object(n.c)(()=>{v.firstSync&&v.setting.view.topUseful&&v.checkPermission("topUseful")},{delay:50}),Object(n.c)(()=>{v.firstSync&&v.setting.notice.gmail&&v.checkPermission("gmailNotice")},{delay:50}),Object(n.c)(()=>{l.a.firstSync&&l.a.needNotificationPermission&&v.checkPermission("todoNotice")},{delay:50}),Object(n.c)(()=>{v.firstSync&&v.setting.notice.gmailNumber&&v.checkPermission("gmailCount")},{delay:50}),Object(n.c)(()=>{v.firstSync&&v.setting.search.searchSuggest&&v.checkPermission("searchSuggest")},{delay:50}),Object(n.c)(()=>{v.firstSync&&1===v.permission.gmailNotice&&i.a.send({key:"bg-notice-gmail-permission",data:!0})}),Object(n.c)(()=>{if(v.firstSync){const{gmail:t,gmailVoice:e,gmailNumber:r}=v.setting.notice,{gmailCount:n,gmailNotice:o}=v.permission;i.a.send({key:"bg-notice-gmail-updated",data:{gmail:t&&1===o,gmailVoice:e,gmailNumber:r&&(1===o||1===n)}})}},{delay:100}),Object(n.c)(()=>{if(v.firstSync){const t={"--side-ratio":v.sideRatio,"--main-ratio":v.setting.view.scaleMain,"--icon-radius":Math.round(100*v.setting.icon.radius)+"%","--icon-font-color":v.setting.font.color,"--icon-font-size":Math.ceil(Math.max(v.setting.font.size*v.setting.view.scaleMain,12))+"px","--icon-opacity":v.setting.icon.opacity,"--icon-visible":v.setting.icon.isHideIconName?"hidden":"visible","--search-radius":""+v.setting.search.radius,"--search-opacity":v.setting.search.opacity};i.a.setStyle(t)}},{delay:50}),Object(n.c)(()=>{if(v.firstSync){let t=0,e=20;v.withPermissionTopBookmark&&(t+=36),v.withPermissionTopUseful&&(e+=26);const r={"--top-bar-height":t+"px","--settings-icon-top-offset":e+"px"};i.a.setStyle(r)}});const m=t=>{const e={"--search-height":t.searchHeight,"--search-width":t.searchWidth,"--search-margin-top":t.searchMarginTop,"--search-margin-bottom":t.searchMarginBottom,"--search-ratio":t.searchRatio,"--icon-box-width":t.iconBoxWidth,"--icon-box-height":t.iconBoxHeight,"--icon-one-height":t.iconOneHeight,"--icon-width":t.iconWidth,"--mini-icon-padding":t.miniIconPadding,"--icon-ratio":t.iconRatio,"--icon-row":v.setting.layout.row,"--icon-col":v.setting.layout.col,"--main-icons-margin":t.iconsMargin};i.a.setStyle(e)},y=(t=!0)=>{const e={row:v.setting.layout.row,col:v.setting.layout.col,rowGap:v.setting.layout.rowGap,colGap:v.setting.layout.colGap,iconScale:v.setting.icon.scale,searchScale:v.setting.search.scale,innerHeight:innerHeight,innerWidth:innerWidth,miniMode:v.setting.icon.miniMode,fontSize:v.setting.font.size,topUseful:v.withPermissionTopUseful,topBookmark:v.withPermissionTopBookmark,mainRatio:v.setting.view.scaleMain};if(t)requestIdleCallback(()=>{const t=Object(c.a)(e);m(t)});else{const t=Object(c.a)(e);m(t)}};Object(n.c)(()=>{v.firstSync&&y(!1)},{delay:40}),window.addEventListener("resize",i.a.throttle(()=>{y(!1)},56))},function(t,e,r){"use strict";r.r(e),r.d(e,"pluginStore",(function(){return l}));r(11),r(14),r(8);var n=r(4),o=r(75),i=r(399);class a extends i.a{opened(t){}}const s=Object(i.b)(new a);var c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class u{constructor(){this.pluginsMap={"infinity://weather":"side-weather","infinity://todos":"side-todos","infinity://notes":"side-notes","infinity://history":"side-history","infinity://bookmarks":"side-bookmarks","infinity://extension":"side-extension","infinity://chrome-apps":"chrome-apps","infinity://wallpaper":"wallpaper","infinity://settings":"side-profile",search:"side-search",profile:"side-profile",editIcon:"side-editicon","side-tutorial":"side-tutorial"},this.pluginsTags={"side-weather":!1,"side-todos":!1,"side-notes":!1,"side-history":!1,"side-bookmarks":!1,"side-extension":!1,"chrome-apps":!1,"side-profile":!1,"side-search":!1,"side-editicon":!1,"side-tutorial":!1,wallpaper:!1},this.pluginViews=[],this.focusRepair=!1,Object(n.h)(()=>this.pluginViews.map(t=>t),([t])=>{s.opened(t)})}initDom(t){this.pluginsTags[t]=!0}async show(t){if(this.pluginViews.includes(t))return;const e=this.pluginsMap[t];if(!1===this.pluginsTags[e])try{await this.requestPermission(e),Object(n.i)(()=>{this.pluginsTags[e]=!0,this.pluginViews.push(t)})}catch(t){}else this.pluginViews.push(t)}async showRepair(){this.focusRepair=!0,this.show("profile"),localStorage.setItem("user-checkout-old-data","true")}blurRepair(){this.focusRepair=!1}requestPermission(t){switch(t){case"side-bookmarks":return o.a.request(["bookmarks"],["chrome://favicon/"]);case"side-extension":case"chrome-apps":return o.a.request(["management"]);case"side-history":return o.a.request(["history"],["chrome://favicon/"])}}hideLast(){const t=this.pluginViews.pop();return 0===this.pluginViews.length&&document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform","none"),t}}c([n.g],u.prototype,"pluginsTags",void 0),c([n.b],u.prototype,"initDom",null),c([n.g],u.prototype,"pluginViews",void 0),c([n.g],u.prototype,"focusRepair",void 0),c([n.b],u.prototype,"show",null),c([n.b],u.prototype,"showRepair",null),c([n.b],u.prototype,"blurRepair",null),c([n.b],u.prototype,"hideLast",null);const l=new u},,function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(95),o=r(116);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,a=Object(o.e)(t=>e=>{if(!(e instanceof o.b))throw new Error("unsafeHTML can only be used in text bindings");const r=i.get(e);if(void 0!==r&&Object(n.h)(t)&&t===r.value&&e.value===r.fragment)return;const a=document.createElement("template");a.innerHTML=t;const s=document.importNode(a.content,!0);e.setValue(s),i.set(e,{value:t,fragment:s})})},function(t,e,r){t.exports=r.p+"images/error.f782e7c.png"},function(t,e,r){t.exports=r.p+"images/remind.896ff6f.png"},function(t,e,r){"use strict";r(11),r(14);var n=r(1),o=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let i=class extends n.a{constructor(){super(...arguments),this.src=""}render(){return n.e`
      <div class="svg" style="-webkit-mask-image: url(${this.src})"></div>
    `}};i.styles=n.b`
    :host{
      display: block;
      width: 30px;
      height: 30px;
      --size: 100%;
      -webkit-mask-size: var(--size);
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      color: black;
    }
    .svg{
      width: inherit;
      height: inherit;
      -webkit-mask-size: inherit;
      -webkit-mask-position: inherit;
      color: inherit;
      background-color: currentcolor;
      -webkit-mask-repeat: inherit;
    }
  `,o([Object(n.g)({type:String})],i.prototype,"src",void 0),i=o([Object(n.c)("i-svg")],i)},,function(t,e,r){"use strict";var n=(new Date).valueOf();function o(){return n++}var i=function(t){return localStorage.getItem(t)},a=function(t,e){localStorage.setItem(t,e)};function s(t){var e=[];for(var r in t){var n=t[r];null!=n&&!1!==n&&(!0===n&&(n=1),e.push(encodeURIComponent(r)+"="+encodeURIComponent(n)))}return e.join("&")}var c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r,n=this.baseInfo={v:1,tid:e.trackingId,uid:e.userId},o=i("ga:clientId");o||(r=Date.now()+performance.now(),o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?e:3&e|8).toString(16)})),a("ga:clientId",o)),n.cid=o,this.systemInfo={sr:screen.width+"x"+window.screen.height,sd:screen.colorDepth+"-bits",ul:navigator.language},this.extraInfo={dl:location.href.split("#")[0]}}return c(t,[{key:"getEventUrl",value:function(t){return this.getSendUrl("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"event",value:function(t){return this.send("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"getPageviewUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.getSendUrl("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"pageview",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.send("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"send",value:function(t,e){var r=u({_t:o(),t:t},this.baseInfo,this.systemInfo,e),n=this.extraInfo;for(var i in n)null==r[i]&&(r[i]=n[i]);var a=new XMLHttpRequest,c="https://www.google-analytics.com/collect?"+s(r);return a.open("GET",c,!0),a.send(null),c}},{key:"getSendUrl",value:function(t,e){var r=u({_t:o(),t:t},this.baseInfo,this.systemInfo,e),n=this.extraInfo;for(var i in n)null==r[i]&&(r[i]=n[i]);return"https://www.google-analytics.com/collect?"+s(r)}}]),t}();l.version="1.0.2",e.a=l},function(t,e,r){
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
t.exports=function(){"use strict";function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c="undefined"!=typeof window&&void 0!==window.document,u=c?window:{},l=!(!c||!u.document.documentElement)&&"ontouchstart"in u.document.documentElement,p=!!c&&"PointerEvent"in u,h="".concat("cropper","-crop"),d="".concat("cropper","-disabled"),f="".concat("cropper","-hidden"),g="".concat("cropper","-hide"),v="".concat("cropper","-invisible"),m="".concat("cropper","-modal"),y="".concat("cropper","-move"),b="".concat("cropper","Action"),w="".concat("cropper","Preview"),x=l?"touchstart":"mousedown",_=l?"touchmove":"mousemove",S=l?"touchend touchcancel":"mouseup",k=p?"pointerdown":x,j=p?"pointermove":_,O=p?"pointerup pointercancel":S,T=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,A=/^data:/,E=/^data:image\/jpeg;base64,/,C=/^img|canvas$/i,R={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},I=Number.isNaN||u.isNaN;function P(t){return"number"==typeof t&&!I(t)}var L=function(t){return t>0&&t<1/0};function M(t){return void 0===t}function N(t){return"object"===r(t)&&null!==t}var B=Object.prototype.hasOwnProperty;function D(t){if(!N(t))return!1;try{var e=t.constructor,r=e.prototype;return e&&r&&B.call(r,"isPrototypeOf")}catch(t){return!1}}function U(t){return"function"==typeof t}var $=Array.prototype.slice;function z(t){return Array.from?Array.from(t):$.call(t)}function V(t,e){return t&&U(e)&&(Array.isArray(t)||P(t.length)?z(t).forEach((function(r,n){e.call(t,r,n,t)})):N(t)&&Object.keys(t).forEach((function(r){e.call(t,t[r],r,t)}))),t}var q=Object.assign||function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return N(t)&&r.length>0&&r.forEach((function(e){N(e)&&Object.keys(e).forEach((function(r){t[r]=e[r]}))})),t},F=/\.\d*(?:0|9){12}\d*$/;function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return F.test(t)?Math.round(t*e)/e:t}var H=/^width|height|left|top|marginLeft|marginTop$/;function G(t,e){var r=t.style;V(e,(function(t,e){H.test(e)&&P(t)&&(t="".concat(t,"px")),r[e]=t}))}function X(t,e){if(e)if(P(t.length))V(t,(function(t){X(t,e)}));else if(t.classList)t.classList.add(e);else{var r=t.className.trim();r?r.indexOf(e)<0&&(t.className="".concat(r," ").concat(e)):t.className=e}}function Y(t,e){e&&(P(t.length)?V(t,(function(t){Y(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function K(t,e,r){e&&(P(t.length)?V(t,(function(t){K(t,e,r)})):r?X(t,e):Y(t,e))}var J=/([a-z\d])([A-Z])/g;function Q(t){return t.replace(J,"$1-$2").toLowerCase()}function Z(t,e){return N(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(Q(e)))}function tt(t,e,r){N(r)?t[e]=r:t.dataset?t.dataset[e]=r:t.setAttribute("data-".concat(Q(e)),r)}var et=/\s\s*/,rt=function(){var t=!1;if(c){var e=!1,r=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});u.addEventListener("test",r,n),u.removeEventListener("test",r,n)}return t}();function nt(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r;e.trim().split(et).forEach((function(e){if(!rt){var i=t.listeners;i&&i[e]&&i[e][r]&&(o=i[e][r],delete i[e][r],0===Object.keys(i[e]).length&&delete i[e],0===Object.keys(i).length&&delete t.listeners)}t.removeEventListener(e,o,n)}))}function ot(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r;e.trim().split(et).forEach((function(e){if(n.once&&!rt){var i=t.listeners,a=void 0===i?{}:i;o=function(){delete a[e][r],t.removeEventListener(e,o,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];r.apply(t,s)},a[e]||(a[e]={}),a[e][r]&&t.removeEventListener(e,a[e][r],n),a[e][r]=o,t.listeners=a}t.addEventListener(e,o,n)}))}function it(t,e,r){var n;return U(Event)&&U(CustomEvent)?n=new CustomEvent(e,{detail:r,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,r),t.dispatchEvent(n)}function at(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var st=u.location,ct=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ut(t){var e=t.match(ct);return null!==e&&(e[1]!==st.protocol||e[2]!==st.hostname||e[3]!==st.port)}function lt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function pt(t){var e=t.rotate,r=t.scaleX,n=t.scaleY,o=t.translateX,i=t.translateY,a=[];P(o)&&0!==o&&a.push("translateX(".concat(o,"px)")),P(i)&&0!==i&&a.push("translateY(".concat(i,"px)")),P(e)&&0!==e&&a.push("rotate(".concat(e,"deg)")),P(r)&&1!==r&&a.push("scaleX(".concat(r,")")),P(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var s=a.length?a.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function ht(t,r){var n=t.pageX,o=t.pageY,i={endX:n,endY:o};return r?i:e({startX:n,startY:o},i)}function dt(t){var e=t.aspectRatio,r=t.height,n=t.width,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",i=L(n),a=L(r);if(i&&a){var s=r*e;"contain"===o&&s>n||"cover"===o&&s<n?r=n/e:n=r*e}else i?r=n/e:a&&(n=r*e);return{width:n,height:r}}function ft(t,e,r,n){var o=e.aspectRatio,i=e.naturalWidth,s=e.naturalHeight,c=e.rotate,u=void 0===c?0:c,l=e.scaleX,p=void 0===l?1:l,h=e.scaleY,d=void 0===h?1:h,f=r.aspectRatio,g=r.naturalWidth,v=r.naturalHeight,m=n.fillColor,y=void 0===m?"transparent":m,b=n.imageSmoothingEnabled,w=void 0===b||b,x=n.imageSmoothingQuality,_=void 0===x?"low":x,S=n.maxWidth,k=void 0===S?1/0:S,j=n.maxHeight,O=void 0===j?1/0:j,T=n.minWidth,A=void 0===T?0:T,E=n.minHeight,C=void 0===E?0:E,R=document.createElement("canvas"),I=R.getContext("2d"),P=dt({aspectRatio:f,width:k,height:O}),L=dt({aspectRatio:f,width:A,height:C},"cover"),M=Math.min(P.width,Math.max(L.width,g)),N=Math.min(P.height,Math.max(L.height,v)),B=dt({aspectRatio:o,width:k,height:O}),D=dt({aspectRatio:o,width:A,height:C},"cover"),U=Math.min(B.width,Math.max(D.width,i)),$=Math.min(B.height,Math.max(D.height,s)),z=[-U/2,-$/2,U,$];return R.width=W(M),R.height=W(N),I.fillStyle=y,I.fillRect(0,0,M,N),I.save(),I.translate(M/2,N/2),I.rotate(u*Math.PI/180),I.scale(p,d),I.imageSmoothingEnabled=w,I.imageSmoothingQuality=_,I.drawImage.apply(I,[t].concat(a(z.map((function(t){return Math.floor(W(t))}))))),I.restore(),R}var gt=String.fromCharCode,vt=/^data:.*,/;function mt(t){var e,r=new DataView(t);try{var n,o,i;if(255===r.getUint8(0)&&216===r.getUint8(1))for(var a=r.byteLength,s=2;s+1<a;){if(255===r.getUint8(s)&&225===r.getUint8(s+1)){o=s;break}s+=1}if(o){var c=o+10;if("Exif"===function(t,e,r){var n="";r+=e;for(var o=e;o<r;o+=1)n+=gt(t.getUint8(o));return n}(r,o+4,4)){var u=r.getUint16(c);if(((n=18761===u)||19789===u)&&42===r.getUint16(c+2,n)){var l=r.getUint32(c+4,n);l>=8&&(i=c+l)}}}if(i){var p,h,d=r.getUint16(i,n);for(h=0;h<d;h+=1)if(p=i+12*h+2,274===r.getUint16(p,n)){p+=8,e=r.getUint16(p,n),r.setUint16(p,1,n);break}}}catch(t){e=1}return e}var yt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,r=this.container,n=this.cropper,o=Number(e.minContainerWidth),i=Number(e.minContainerHeight);X(n,f),Y(t,f);var a={width:Math.max(r.offsetWidth,o>=0?o:200),height:Math.max(r.offsetHeight,i>=0?i:100)};this.containerData=a,G(n,{width:a.width,height:a.height}),X(t,f),Y(n,f)},initCanvas:function(){var t=this.containerData,e=this.imageData,r=this.options.viewMode,n=Math.abs(e.rotate)%180==90,o=n?e.naturalHeight:e.naturalWidth,i=n?e.naturalWidth:e.naturalHeight,a=o/i,s=t.width,c=t.height;t.height*a>t.width?3===r?s=t.height*a:c=t.width/a:3===r?c=t.width/a:s=t.height*a;var u={aspectRatio:a,naturalWidth:o,naturalHeight:i,width:s,height:c};this.canvasData=u,this.limited=1===r||2===r,this.limitCanvas(!0,!0),u.width=Math.min(Math.max(u.width,u.minWidth),u.maxWidth),u.height=Math.min(Math.max(u.height,u.minHeight),u.maxHeight),u.left=(t.width-u.width)/2,u.top=(t.height-u.height)/2,u.oldLeft=u.left,u.oldTop=u.top,this.initialCanvasData=q({},u)},limitCanvas:function(t,e){var r=this.options,n=this.containerData,o=this.canvasData,i=this.cropBoxData,a=r.viewMode,s=o.aspectRatio,c=this.cropped&&i;if(t){var u=Number(r.minCanvasWidth)||0,l=Number(r.minCanvasHeight)||0;a>1?(u=Math.max(u,n.width),l=Math.max(l,n.height),3===a&&(l*s>u?u=l*s:l=u/s)):a>0&&(u?u=Math.max(u,c?i.width:0):l?l=Math.max(l,c?i.height:0):c&&(u=i.width,(l=i.height)*s>u?u=l*s:l=u/s));var p=dt({aspectRatio:s,width:u,height:l});u=p.width,l=p.height,o.minWidth=u,o.minHeight=l,o.maxWidth=1/0,o.maxHeight=1/0}if(e)if(a>(c?0:1)){var h=n.width-o.width,d=n.height-o.height;o.minLeft=Math.min(0,h),o.minTop=Math.min(0,d),o.maxLeft=Math.max(0,h),o.maxTop=Math.max(0,d),c&&this.limited&&(o.minLeft=Math.min(i.left,i.left+(i.width-o.width)),o.minTop=Math.min(i.top,i.top+(i.height-o.height)),o.maxLeft=i.left,o.maxTop=i.top,2===a&&(o.width>=n.width&&(o.minLeft=Math.min(0,h),o.maxLeft=Math.max(0,h)),o.height>=n.height&&(o.minTop=Math.min(0,d),o.maxTop=Math.max(0,d))))}else o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height},renderCanvas:function(t,e){var r=this.canvasData,n=this.imageData;if(e){var o=function(t){var e=t.width,r=t.height,n=t.degree;if(90==(n=Math.abs(n)%180))return{width:r,height:e};var o=n%90*Math.PI/180,i=Math.sin(o),a=Math.cos(o),s=e*a+r*i,c=e*i+r*a;return n>90?{width:c,height:s}:{width:s,height:c}}({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),i=o.width,a=o.height,s=r.width*(i/r.naturalWidth),c=r.height*(a/r.naturalHeight);r.left-=(s-r.width)/2,r.top-=(c-r.height)/2,r.width=s,r.height=c,r.aspectRatio=i/a,r.naturalWidth=i,r.naturalHeight=a,this.limitCanvas(!0,!1)}(r.width>r.maxWidth||r.width<r.minWidth)&&(r.left=r.oldLeft),(r.height>r.maxHeight||r.height<r.minHeight)&&(r.top=r.oldTop),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),this.limitCanvas(!1,!0),r.left=Math.min(Math.max(r.left,r.minLeft),r.maxLeft),r.top=Math.min(Math.max(r.top,r.minTop),r.maxTop),r.oldLeft=r.left,r.oldTop=r.top,G(this.canvas,q({width:r.width,height:r.height},pt({translateX:r.left,translateY:r.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,r=this.imageData,n=r.naturalWidth*(e.width/e.naturalWidth),o=r.naturalHeight*(e.height/e.naturalHeight);q(r,{width:n,height:o,left:(e.width-n)/2,top:(e.height-o)/2}),G(this.image,q({width:r.width,height:r.height},pt(q({translateX:r.left,translateY:r.top},r)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,r=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,o={width:e.width,height:e.height};r&&(e.height*r>e.width?o.height=o.width/r:o.width=o.height*r),this.cropBoxData=o,this.limitCropBox(!0,!0),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),o.width=Math.max(o.minWidth,o.width*n),o.height=Math.max(o.minHeight,o.height*n),o.left=e.left+(e.width-o.width)/2,o.top=e.top+(e.height-o.height)/2,o.oldLeft=o.left,o.oldTop=o.top,this.initialCropBoxData=q({},o)},limitCropBox:function(t,e){var r=this.options,n=this.containerData,o=this.canvasData,i=this.cropBoxData,a=this.limited,s=r.aspectRatio;if(t){var c=Number(r.minCropBoxWidth)||0,u=Number(r.minCropBoxHeight)||0,l=a?Math.min(n.width,o.width,o.width+o.left,n.width-o.left):n.width,p=a?Math.min(n.height,o.height,o.height+o.top,n.height-o.top):n.height;c=Math.min(c,n.width),u=Math.min(u,n.height),s&&(c&&u?u*s>c?u=c/s:c=u*s:c?u=c/s:u&&(c=u*s),p*s>l?p=l/s:l=p*s),i.minWidth=Math.min(c,l),i.minHeight=Math.min(u,p),i.maxWidth=l,i.maxHeight=p}e&&(a?(i.minLeft=Math.max(0,o.left),i.minTop=Math.max(0,o.top),i.maxLeft=Math.min(n.width,o.left+o.width)-i.width,i.maxTop=Math.min(n.height,o.top+o.height)-i.height):(i.minLeft=0,i.minTop=0,i.maxLeft=n.width-i.width,i.maxTop=n.height-i.height))},renderCropBox:function(){var t=this.options,e=this.containerData,r=this.cropBoxData;(r.width>r.maxWidth||r.width<r.minWidth)&&(r.left=r.oldLeft),(r.height>r.maxHeight||r.height<r.minHeight)&&(r.top=r.oldTop),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),this.limitCropBox(!1,!0),r.left=Math.min(Math.max(r.left,r.minLeft),r.maxLeft),r.top=Math.min(Math.max(r.top,r.minTop),r.maxTop),r.oldLeft=r.left,r.oldTop=r.top,t.movable&&t.cropBoxMovable&&tt(this.face,b,r.width>=e.width&&r.height>=e.height?"move":"all"),G(this.cropBox,q({width:r.width,height:r.height},pt({translateX:r.left,translateY:r.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),it(this.element,"crop",this.getData())}},bt={initPreview:function(){var t=this.element,e=this.crossOrigin,r=this.options.preview,n=e?this.crossOriginUrl:this.url,o=t.alt||"The image to preview",i=document.createElement("img");if(e&&(i.crossOrigin=e),i.src=n,i.alt=o,this.viewBox.appendChild(i),this.viewBoxImage=i,r){var a=r;"string"==typeof r?a=t.ownerDocument.querySelectorAll(r):r.querySelector&&(a=[r]),this.previews=a,V(a,(function(t){var r=document.createElement("img");tt(t,w,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(r.crossOrigin=e),r.src=n,r.alt=o,r.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(r)}))}},resetPreview:function(){V(this.previews,(function(t){var e=Z(t,w);G(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(N(t[e]))try{delete t[e]}catch(r){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(r){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(Q(e)))}(t,w)}))},preview:function(){var t=this.imageData,e=this.canvasData,r=this.cropBoxData,n=r.width,o=r.height,i=t.width,a=t.height,s=r.left-e.left-t.left,c=r.top-e.top-t.top;this.cropped&&!this.disabled&&(G(this.viewBoxImage,q({width:i,height:a},pt(q({translateX:-s,translateY:-c},t)))),V(this.previews,(function(e){var r=Z(e,w),u=r.width,l=r.height,p=u,h=l,d=1;n&&(h=o*(d=u/n)),o&&h>l&&(p=n*(d=l/o),h=l),G(e,{width:p,height:h}),G(e.getElementsByTagName("img")[0],q({width:i*d,height:a*d},pt(q({translateX:-s*d,translateY:-c*d},t))))})))}},wt={bind:function(){var t=this.element,e=this.options,r=this.cropper;U(e.cropstart)&&ot(t,"cropstart",e.cropstart),U(e.cropmove)&&ot(t,"cropmove",e.cropmove),U(e.cropend)&&ot(t,"cropend",e.cropend),U(e.crop)&&ot(t,"crop",e.crop),U(e.zoom)&&ot(t,"zoom",e.zoom),ot(r,k,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&ot(r,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&ot(r,"dblclick",this.onDblclick=this.dblclick.bind(this)),ot(t.ownerDocument,j,this.onCropMove=this.cropMove.bind(this)),ot(t.ownerDocument,O,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&ot(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,r=this.cropper;U(e.cropstart)&&nt(t,"cropstart",e.cropstart),U(e.cropmove)&&nt(t,"cropmove",e.cropmove),U(e.cropend)&&nt(t,"cropend",e.cropend),U(e.crop)&&nt(t,"crop",e.crop),U(e.zoom)&&nt(t,"zoom",e.zoom),nt(r,k,this.onCropStart),e.zoomable&&e.zoomOnWheel&&nt(r,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&nt(r,"dblclick",this.onDblclick),nt(t.ownerDocument,j,this.onCropMove),nt(t.ownerDocument,O,this.onCropEnd),e.responsive&&nt(window,"resize",this.onResize)}},xt={resize:function(){if(!this.disabled){var t,e,r=this.options,n=this.container,o=this.containerData,i=n.offsetWidth/o.width,a=n.offsetHeight/o.height,s=Math.abs(i-1)>Math.abs(a-1)?i:a;1!==s&&(r.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),r.restore&&(this.setCanvasData(V(t,(function(e,r){t[r]=e*s}))),this.setCropBoxData(V(e,(function(t,r){e[r]=t*s})))))}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e=h,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,r=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*r,t)))},cropStart:function(t){var e=t.buttons,r=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(P(e)&&1!==e||P(r)&&0!==r||t.ctrlKey))){var n,o=this.options,i=this.pointers;t.changedTouches?V(t.changedTouches,(function(t){i[t.identifier]=ht(t)})):i[t.pointerId||0]=ht(t),n=Object.keys(i).length>1&&o.zoomable&&o.zoomOnTouch?"zoom":Z(t.target,b),T.test(n)&&!1!==it(this.element,"cropstart",{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,"crop"===n&&(this.cropping=!0,X(this.dragBox,m)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var r=this.pointers;t.preventDefault(),!1!==it(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?V(t.changedTouches,(function(t){q(r[t.identifier]||{},ht(t,!0))})):q(r[t.pointerId||0]||{},ht(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,r=this.pointers;t.changedTouches?V(t.changedTouches,(function(t){delete r[t.identifier]})):delete r[t.pointerId||0],e&&(t.preventDefault(),Object.keys(r).length||(this.action=""),this.cropping&&(this.cropping=!1,K(this.dragBox,m,this.cropped&&this.options.modal)),it(this.element,"cropend",{originalEvent:t,action:e}))}}},_t={change:function(t){var r,n=this.options,o=this.canvasData,i=this.containerData,a=this.cropBoxData,s=this.pointers,c=this.action,u=n.aspectRatio,l=a.left,p=a.top,h=a.width,d=a.height,g=l+h,v=p+d,m=0,y=0,b=i.width,w=i.height,x=!0;!u&&t.shiftKey&&(u=h&&d?h/d:1),this.limited&&(m=a.minLeft,y=a.minTop,b=m+Math.min(i.width,o.width,o.left+o.width),w=y+Math.min(i.height,o.height,o.top+o.height));var _=s[Object.keys(s)[0]],S={x:_.endX-_.startX,y:_.endY-_.startY},k=function(t){switch(t){case"e":g+S.x>b&&(S.x=b-g);break;case"w":l+S.x<m&&(S.x=m-l);break;case"n":p+S.y<y&&(S.y=y-p);break;case"s":v+S.y>w&&(S.y=w-v)}};switch(c){case"all":l+=S.x,p+=S.y;break;case"e":if(S.x>=0&&(g>=b||u&&(p<=y||v>=w))){x=!1;break}k("e"),(h+=S.x)<0&&(c="w",l-=h=-h),u&&(d=h/u,p+=(a.height-d)/2);break;case"n":if(S.y<=0&&(p<=y||u&&(l<=m||g>=b))){x=!1;break}k("n"),d-=S.y,p+=S.y,d<0&&(c="s",p-=d=-d),u&&(h=d*u,l+=(a.width-h)/2);break;case"w":if(S.x<=0&&(l<=m||u&&(p<=y||v>=w))){x=!1;break}k("w"),h-=S.x,l+=S.x,h<0&&(c="e",l-=h=-h),u&&(d=h/u,p+=(a.height-d)/2);break;case"s":if(S.y>=0&&(v>=w||u&&(l<=m||g>=b))){x=!1;break}k("s"),(d+=S.y)<0&&(c="n",p-=d=-d),u&&(h=d*u,l+=(a.width-h)/2);break;case"ne":if(u){if(S.y<=0&&(p<=y||g>=b)){x=!1;break}k("n"),d-=S.y,p+=S.y,h=d*u}else k("n"),k("e"),S.x>=0?g<b?h+=S.x:S.y<=0&&p<=y&&(x=!1):h+=S.x,S.y<=0?p>y&&(d-=S.y,p+=S.y):(d-=S.y,p+=S.y);h<0&&d<0?(c="sw",p-=d=-d,l-=h=-h):h<0?(c="nw",l-=h=-h):d<0&&(c="se",p-=d=-d);break;case"nw":if(u){if(S.y<=0&&(p<=y||l<=m)){x=!1;break}k("n"),d-=S.y,p+=S.y,h=d*u,l+=a.width-h}else k("n"),k("w"),S.x<=0?l>m?(h-=S.x,l+=S.x):S.y<=0&&p<=y&&(x=!1):(h-=S.x,l+=S.x),S.y<=0?p>y&&(d-=S.y,p+=S.y):(d-=S.y,p+=S.y);h<0&&d<0?(c="se",p-=d=-d,l-=h=-h):h<0?(c="ne",l-=h=-h):d<0&&(c="sw",p-=d=-d);break;case"sw":if(u){if(S.x<=0&&(l<=m||v>=w)){x=!1;break}k("w"),h-=S.x,l+=S.x,d=h/u}else k("s"),k("w"),S.x<=0?l>m?(h-=S.x,l+=S.x):S.y>=0&&v>=w&&(x=!1):(h-=S.x,l+=S.x),S.y>=0?v<w&&(d+=S.y):d+=S.y;h<0&&d<0?(c="ne",p-=d=-d,l-=h=-h):h<0?(c="se",l-=h=-h):d<0&&(c="nw",p-=d=-d);break;case"se":if(u){if(S.x>=0&&(g>=b||v>=w)){x=!1;break}k("e"),d=(h+=S.x)/u}else k("s"),k("e"),S.x>=0?g<b?h+=S.x:S.y>=0&&v>=w&&(x=!1):h+=S.x,S.y>=0?v<w&&(d+=S.y):d+=S.y;h<0&&d<0?(c="nw",p-=d=-d,l-=h=-h):h<0?(c="sw",l-=h=-h):d<0&&(c="ne",p-=d=-d);break;case"move":this.move(S.x,S.y),x=!1;break;case"zoom":this.zoom(function(t){var r=e({},t),n=0;return V(t,(function(t,e){delete r[e],V(r,(function(e){var r=Math.abs(t.startX-e.startX),o=Math.abs(t.startY-e.startY),i=Math.abs(t.endX-e.endX),a=Math.abs(t.endY-e.endY),s=Math.sqrt(r*r+o*o),c=(Math.sqrt(i*i+a*a)-s)/s;Math.abs(c)>Math.abs(n)&&(n=c)}))})),n}(s),t),x=!1;break;case"crop":if(!S.x||!S.y){x=!1;break}r=at(this.cropper),l=_.startX-r.left,p=_.startY-r.top,h=a.minWidth,d=a.minHeight,S.x>0?c=S.y>0?"se":"ne":S.x<0&&(l-=h,c=S.y>0?"sw":"nw"),S.y<0&&(p-=d),this.cropped||(Y(this.cropBox,f),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(a.width=h,a.height=d,a.left=l,a.top=p,this.action=c,this.renderCropBox()),V(s,(function(t){t.startX=t.endX,t.startY=t.endY}))}},St={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&X(this.dragBox,m),Y(this.cropBox,f),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=q({},this.initialImageData),this.canvasData=q({},this.initialCanvasData),this.cropBoxData=q({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(q(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Y(this.dragBox,m),X(this.cropBox,f)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,V(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Y(this.cropper,d)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,X(this.cropper,d)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.canvasData,n=r.left,o=r.top;return this.moveTo(M(t)?t:n+Number(t),M(e)?e:o+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.canvasData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(P(t)&&(r.left=t,n=!0),P(e)&&(r.top=e,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var r=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(r.width*t/r.naturalWidth,null,e)},zoomTo:function(t,e,r){var n=this.options,o=this.canvasData,i=o.width,a=o.height,s=o.naturalWidth,c=o.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&n.zoomable){var u=s*t,l=c*t;if(!1===it(this.element,"zoom",{ratio:t,oldRatio:i/s,originalEvent:r}))return this;if(r){var p=this.pointers,h=at(this.cropper),d=p&&Object.keys(p).length?function(t){var e=0,r=0,n=0;return V(t,(function(t){var o=t.startX,i=t.startY;e+=o,r+=i,n+=1})),{pageX:e/=n,pageY:r/=n}}(p):{pageX:r.pageX,pageY:r.pageY};o.left-=(u-i)*((d.pageX-h.left-o.left)/i),o.top-=(l-a)*((d.pageY-h.top-o.top)/a)}else D(e)&&P(e.x)&&P(e.y)?(o.left-=(u-i)*((e.x-o.left)/i),o.top-=(l-a)*((e.y-o.top)/a)):(o.left-=(u-i)/2,o.top-=(l-a)/2);o.width=u,o.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return P(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,P(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(P(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.imageData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(P(t)&&(r.scaleX=t,n=!0),P(e)&&(r.scaleY=e,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.options,n=this.imageData,o=this.canvasData,i=this.cropBoxData;if(this.ready&&this.cropped){t={x:i.left-o.left,y:i.top-o.top,width:i.width,height:i.height};var a=n.width/n.naturalWidth;if(V(t,(function(e,r){t[r]=e/a})),e){var s=Math.round(t.y+t.height),c=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=c-t.x,t.height=s-t.y}}else t={x:0,y:0,width:0,height:0};return r.rotatable&&(t.rotate=n.rotate||0),r.scalable&&(t.scaleX=n.scaleX||1,t.scaleY=n.scaleY||1),t},setData:function(t){var e=this.options,r=this.imageData,n=this.canvasData,o={};if(this.ready&&!this.disabled&&D(t)){var i=!1;e.rotatable&&P(t.rotate)&&t.rotate!==r.rotate&&(r.rotate=t.rotate,i=!0),e.scalable&&(P(t.scaleX)&&t.scaleX!==r.scaleX&&(r.scaleX=t.scaleX,i=!0),P(t.scaleY)&&t.scaleY!==r.scaleY&&(r.scaleY=t.scaleY,i=!0)),i&&this.renderCanvas(!0,!0);var a=r.width/r.naturalWidth;P(t.x)&&(o.left=t.x*a+n.left),P(t.y)&&(o.top=t.y*a+n.top),P(t.width)&&(o.width=t.width*a),P(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?q({},this.containerData):{}},getImageData:function(){return this.sized?q({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&V(["left","top","width","height","naturalWidth","naturalHeight"],(function(r){e[r]=t[r]})),e},setCanvasData:function(t){var e=this.canvasData,r=e.aspectRatio;return this.ready&&!this.disabled&&D(t)&&(P(t.left)&&(e.left=t.left),P(t.top)&&(e.top=t.top),P(t.width)?(e.width=t.width,e.height=t.width/r):P(t.height)&&(e.height=t.height,e.width=t.height*r),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,r,n=this.cropBoxData,o=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&D(t)&&(P(t.left)&&(n.left=t.left),P(t.top)&&(n.top=t.top),P(t.width)&&t.width!==n.width&&(e=!0,n.width=t.width),P(t.height)&&t.height!==n.height&&(r=!0,n.height=t.height),o&&(e?n.height=n.width/o:r&&(n.width=n.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,r=ft(this.image,this.imageData,e,t);if(!this.cropped)return r;var n=this.getData(),o=n.x,i=n.y,s=n.width,c=n.height,u=r.width/Math.floor(e.naturalWidth);1!==u&&(o*=u,i*=u,s*=u,c*=u);var l=s/c,p=dt({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),h=dt({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),d=dt({aspectRatio:l,width:t.width||(1!==u?r.width:s),height:t.height||(1!==u?r.height:c)}),f=d.width,g=d.height;f=Math.min(p.width,Math.max(h.width,f)),g=Math.min(p.height,Math.max(h.height,g));var v=document.createElement("canvas"),m=v.getContext("2d");v.width=W(f),v.height=W(g),m.fillStyle=t.fillColor||"transparent",m.fillRect(0,0,f,g);var y=t.imageSmoothingEnabled,b=void 0===y||y,w=t.imageSmoothingQuality;m.imageSmoothingEnabled=b,w&&(m.imageSmoothingQuality=w);var x,_,S,k,j,O,T=r.width,A=r.height,E=o,C=i;E<=-s||E>T?(E=0,x=0,S=0,j=0):E<=0?(S=-E,E=0,j=x=Math.min(T,s+E)):E<=T&&(S=0,j=x=Math.min(s,T-E)),x<=0||C<=-c||C>A?(C=0,_=0,k=0,O=0):C<=0?(k=-C,C=0,O=_=Math.min(A,c+C)):C<=A&&(k=0,O=_=Math.min(c,A-C));var R=[E,C,x,_];if(j>0&&O>0){var I=f/s;R.push(S*I,k*I,j*I,O*I)}return m.drawImage.apply(m,[r].concat(a(R.map((function(t){return Math.floor(W(t))}))))),v},setAspectRatio:function(t){var e=this.options;return this.disabled||M(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,r=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var o="crop"===t,i=e.movable&&"move"===t;t=o||i?t:"none",e.dragMode=t,tt(r,b,t),K(r,h,o),K(r,y,i),e.cropBoxMovable||(tt(n,b,t),K(n,h,o),K(n,y,i))}return this}},kt=u.Cropper,jt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!e||!C.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=q({},R,D(r)&&r),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var e,r,i;return e=t,i=[{key:"noConflict",value:function(){return window.Cropper=kt,t}},{key:"setDefaults",value:function(t){q(R,D(t)&&t)}}],(r=[{key:"init",value:function(){var t,e=this.element,r=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===r){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===r&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var r=this.element,n=this.options;if(n.rotatable||n.scalable||(n.checkOrientation=!1),n.checkOrientation&&window.ArrayBuffer)if(A.test(t))E.test(t)?this.read((o=t.replace(vt,""),i=atob(o),a=new ArrayBuffer(i.length),V(s=new Uint8Array(a),(function(t,e){s[e]=i.charCodeAt(e)})),a)):this.clone();else{var o,i,a,s,c=new XMLHttpRequest,u=this.clone.bind(this);this.reloading=!0,this.xhr=c,c.onabort=u,c.onerror=u,c.ontimeout=u,c.onprogress=function(){"image/jpeg"!==c.getResponseHeader("content-type")&&c.abort()},c.onload=function(){e.read(c.response)},c.onloadend=function(){e.reloading=!1,e.xhr=null},n.checkCrossOrigin&&ut(t)&&r.crossOrigin&&(t=lt(t)),c.open("GET",t,!0),c.responseType="arraybuffer",c.withCredentials="use-credentials"===r.crossOrigin,c.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,r=this.imageData,n=mt(t),o=0,i=1,a=1;if(n>1){this.url=function(t,e){for(var r=[],n=new Uint8Array(t);n.length>0;)r.push(gt.apply(null,z(n.subarray(0,8192)))),n=n.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(r.join("")))}(t,"image/jpeg");var s=function(t){var e=0,r=1,n=1;switch(t){case 2:r=-1;break;case 3:e=-180;break;case 4:n=-1;break;case 5:e=90,n=-1;break;case 6:e=90;break;case 7:e=90,r=-1;break;case 8:e=-90}return{rotate:e,scaleX:r,scaleY:n}}(n);o=s.rotate,i=s.scaleX,a=s.scaleY}e.rotatable&&(r.rotate=o),e.scalable&&(r.scaleX=i,r.scaleY=a),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,r=t.crossOrigin,n=e;this.options.checkCrossOrigin&&ut(e)&&(r||(r="anonymous"),n=lt(e)),this.crossOrigin=r,this.crossOriginUrl=n;var o=document.createElement("img");r&&(o.crossOrigin=r),o.src=n||e,o.alt=t.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),X(o,g),t.parentNode.insertBefore(o,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var r=u.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(u.navigator.userAgent),n=function(e,r){q(t.imageData,{naturalWidth:e,naturalHeight:r,aspectRatio:e/r}),t.initialImageData=q({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||r){var o=document.createElement("img"),i=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){n(o.width,o.height),r||i.removeChild(o)},o.src=e.src,r||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",i.appendChild(o))}else n(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,r=this.image,n=t.parentNode,o=document.createElement("div");o.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var i=o.querySelector(".".concat("cropper","-container")),a=i.querySelector(".".concat("cropper","-canvas")),s=i.querySelector(".".concat("cropper","-drag-box")),c=i.querySelector(".".concat("cropper","-crop-box")),u=c.querySelector(".".concat("cropper","-face"));this.container=n,this.cropper=i,this.canvas=a,this.dragBox=s,this.cropBox=c,this.viewBox=i.querySelector(".".concat("cropper","-view-box")),this.face=u,a.appendChild(r),X(t,f),n.insertBefore(i,t.nextSibling),this.isImg||Y(r,g),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,X(c,f),e.guides||X(c.getElementsByClassName("".concat("cropper","-dashed")),f),e.center||X(c.getElementsByClassName("".concat("cropper","-center")),f),e.background&&X(i,"".concat("cropper","-bg")),e.highlight||X(u,v),e.cropBoxMovable&&(X(u,y),tt(u,b,"all")),e.cropBoxResizable||(X(c.getElementsByClassName("".concat("cropper","-line")),f),X(c.getElementsByClassName("".concat("cropper","-point")),f)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),U(e.ready)&&ot(t,"ready",e.ready,{once:!0}),it(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Y(this.element,f))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&o(e.prototype,r),i&&o(e,i),t}();return q(jt.prototype,yt,bt,wt,xt,_t,St),jt}()},function(t,e,r){t.exports=r.p+"images/color.321ebce.jpg"},function(t,e,r){t.exports=r.p+"images/question.b0f36f5.svg"},,,function(t,e,r){t.exports=r(550)},function(t,e,r){t.exports=r.p+"images/spinner.86352cb.svg"},function(t,e,r){t.exports=r.p+"images/spinner.c9f85c6.gif"},function(t,e,r){t.exports=r.p+"images/pwd-show.df8adfc.svg"},function(t,e,r){t.exports=r.p+"images/pwd-hide.a8bf451.svg"},,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r(11),r(14);var n=r(1),o=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let i=class extends n.a{constructor(){super(...arguments),this.type="",this.iconfont=!1}render(){return this.iconfont?n.e`
        <svg part="svg">
          <use href="${r(525)}#${this.type}" style=${this.color?`fill: ${this.color};`:""}></use>
        </svg>
      `:n.e`
        <svg part="svg">
          <use href="${r(526)}#${this.type}"></use>
        </svg>
      `}};i.styles=n.b`
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      color: #333;
    }
    svg {
      width: inherit;
      height: inherit;
      color: inherit;
      fill: currentColor;
    }
  `,o([Object(n.g)({type:String})],i.prototype,"type",void 0),o([Object(n.g)({type:Boolean})],i.prototype,"iconfont",void 0),o([Object(n.g)({type:String})],i.prototype,"color",void 0),i=o([Object(n.c)("i-usesvg")],i)},function(t,e,r){"use strict";var n=r(1),o=n.b`:host{--button-padding: 0 10px;--border-color: transparent;--border-raduis: 6px;--font-color: #333;--font-size: 14px;--hover-color: #333;--hover-font-color: #fff;display:block}:host ::-moz-focus-inner{border:0}:host([primary]){--font-color: #fff}:host([primary]) button{background:#5b5b5b}:host([primary]) button:hover{background:#333}:host([white]){--border-color: #ebebeb}:host([white]) button{background:#fff}:host([white]:not([disabled])) button:hover{background:#efefef}:host([white][disabled]){--font-color: #999;cursor:not-allowed}:host([white][disabled]) button{cursor:not-allowed}:host([disabled]:not([white])) button{opacity:.5;cursor:not-allowed}:host([loading]) button{opacity:.5;cursor:not-allowed;display:flex;align-items:center}:host([loading]) .loading{width:36px;vertical-align:middle;margin-left:3px}:host([loading]) button>span{flex:1;width:0}button{display:inline-block;width:100%;height:100%;min-height:28px;border:1px solid var(--border-color);outline:none;border-radius:var(--border-raduis);color:var(--font-color);padding:var(--button-padding);background:#efefef;font-size:var(--font-size);transition:all .3s;cursor:pointer;overflow:hidden;position:relative}button>span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:14px;width:100%;display:block}button:hover{background:#dfdfdf}`,i=r(498),a=r.n(i),s=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let u=class extends n.a{constructor(){super(...arguments),this.disabled=!1,this.scaleRatio=1,this.loading=!1}firstUpdated(){this.addEventListener("mousedown",t=>{const{left:e,top:r,width:n}=this.getBoundingClientRect(),o=n/this.offsetWidth;this.style.setProperty("--x",(t.clientX-e)/o+"px"),this.style.setProperty("--y",(t.clientY-r)/o+"px")}),this.addEventListener("click",t=>{this.loading&&t.stopPropagation()},!0)}render(){return n.e`
      <button ?disabled="${this.disabled}">
        <span><slot></slot></span>
        ${this.renderSpin()}
      </button>
    `}renderSpin(){return this.loading?n.e` <img class="loading" src=${a.a} /> `:n.e``}};u.styles=o,s([Object(n.g)({type:Boolean,reflect:!0}),c("design:type",Object)],u.prototype,"disabled",void 0),s([Object(n.g)({type:Number}),c("design:type",Object)],u.prototype,"scaleRatio",void 0),s([Object(n.g)({type:Boolean,reflect:!0}),c("design:type",Object)],u.prototype,"loading",void 0),u=s([Object(n.c)("infinito-button")],u);function l(t,e,r,n=!0,o=!0){const i=new CustomEvent(e,{detail:r,bubbles:n,composed:o});t.dispatchEvent(i)}const p=(t,e)=>{let r=!1;const n=e+5,o=()=>{r=!0,t.removeEventListener("transitionend",o)};t.addEventListener("transitionend",o),setTimeout(()=>{r||(t=>{t.dispatchEvent(new Event("transitionend"))})(t)},n)};var h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},d=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let f=class extends n.a{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}_changeHandler(){this.checked=this.formElement.checked,l(this,"change",{checked:this.checked})}render(){return n.e`
      <div class="switch-wrapper">
        <input
          hidden
          id="switch"
          type="checkbox"
          role="switch"
          .disabled="${this.disabled}"
          .checked=${this.checked}
          @change="${this._changeHandler}"
        >
        <label class="switch" for="switch"></label>
      </div>
    `}};f.styles=n.b`
    :host {
      --switch-color: #333;
    }
    .switch {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      width: 24px;
      height: 16px;
      border-radius: 20px;
      border: 2px solid var(--switch-color);
      transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      vertical-align: middle;
      cursor: pointer;
      opacity: .2;
    }
    .switch::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 10px;
      height: 10px;
      background: var(--switch-color);
      border-radius: 50%;
      transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
        background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    /* .switch:active::before {
      box-shadow: 0 2px 8px rgba(0,0,0,0.28), 0 0 0 20px rgba(128,128,128,0.1);
    } */
    input:checked + .switch {
      border: 2px solid var(--switch-color);
      opacity: 1;
    }
    input:checked + .switch::before {
      left: 9px;
      background: var(--switch-color);
    }
    /* input:checked + .switch:active::before {
      box-shadow: 0 2px 8px rgba(0,0,0,0.28), 0 0 0 20px rgba(128,128,128,0.1);
    } */
    :host([disabled]) .switch {
      cursor: not-allowed;
    }
    input:disabled + .switch {
      cursor: not-allowed
    }
  `,h([Object(n.g)({type:Boolean}),d("design:type",Object)],f.prototype,"checked",void 0),h([Object(n.g)({type:Boolean}),d("design:type",Object)],f.prototype,"disabled",void 0),h([Object(n.h)("input"),d("design:type",HTMLInputElement)],f.prototype,"formElement",void 0),f=h([Object(n.c)("infinito-switch")],f);var g=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},v=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let m=class extends n.a{constructor(){super(...arguments),this.value=0,this.text="",this.min=0,this.max=10,this.step=1,this.readonly=!1}stepChangeValue(t){var e;let r=this.value;"up"===t?this.value+this.step<this.max?r+=this.step:r=this.max:"down"===t&&(this.value-this.step>this.min?r-=this.step:r=this.min);const n=null===(e=this.step.toString().split(".")[1])||void 0===e?void 0:e.length;r=Number(r.toFixed(n)),this.value=r,l(this,"on-change",{value:this.value})}render(){return n.e`
      <div class="i-input-number">
        <div class="input-wrap">
          ${this.readonly?n.e`<span class="input">${this.text}</span>`:n.e`<input class="input" value=${this.value} />`}
        </div>
        <div class="input-handler-wrap">
          <span @click="${()=>this.stepChangeValue("up")}" class="input-handler input-handler-up">
            <svg
              width="7px"
              height="5px"
              viewBox="0 0 7 5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>加@2x</title>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="设置" transform="translate(-368.000000, -892.000000)" fill="#999999">
                  <g id="编组-12" transform="translate(319.000000, 887.000000)">
                    <polygon
                      id="加"
                      transform="translate(52.500000, 7.500000) scale(1, -1) translate(-52.500000, -7.500000) "
                      points="49 5 56 5 52.5 10"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span
            @click="${()=>this.stepChangeValue("down")}"
            class="input-handler input-handler-down"
          >
            <svg
              width="7px"
              height="5px"
              viewBox="0 0 7 5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>减@2x</title>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="设置" transform="translate(-368.000000, -906.000000)" fill="#999999">
                  <g id="编组-12" transform="translate(319.000000, 887.000000)">
                    <polygon id="减" points="49 19 56 19 52.5 24"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
    `}};m.styles=n.b`
    :host {
      --border-color: #fff;
      --bg-input-color:#fff
    }
    .i-input-number {
      height: 28px;
      min-width: 60px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: var(--bg-input-color, #fff);
      border-radius: 6px;
      border: 1px solid var(--border-color, #fff);
      transition: border-color 0.3s;
      overflow: hidden;
    }
    .i-input-number:hover {
      border-color: rgba(220, 220, 220, 1);
    }
    .i-input-number:hover .input-handler-wrap {
      opacity: 1;
    }
    .input-wrap {
      flex-grow: 1;
    }
    .input-wrap > .input {
      display: block;
      width: 100%;
      height: 100%;
      padding: 4px;
      box-sizing: border-box;
      outline: 0;
      border: 0;
    }
    .input-handler-wrap {
      opacity: 0;
      flex-grow: 0;
      flex-shrink: 0;
      width: 15px;
      box-sizing: border-box;
      border-left: 1px solid #dcdcdc;
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: opacity 0.3s;
    }
    .input-handler {
      flex-grow: 0;
      flex-shrink: 0;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      transition: background-color 0.3s;
    }
    .input-handler-down{
      border-top: 1px solid #dcdcdc;
    }
    .input-handler:hover {
      background-color: #EFEFEF;
    }
  `,g([Object(n.g)({type:Number}),v("design:type",Object)],m.prototype,"value",void 0),g([Object(n.g)({type:String}),v("design:type",Object)],m.prototype,"text",void 0),g([Object(n.g)({type:Number}),v("design:type",Object)],m.prototype,"min",void 0),g([Object(n.g)({type:Number}),v("design:type",Object)],m.prototype,"max",void 0),g([Object(n.g)({type:Number}),v("design:type",Object)],m.prototype,"step",void 0),g([Object(n.g)({type:Boolean}),v("design:type",Object)],m.prototype,"readonly",void 0),m=g([Object(n.c)("infinito-inputnumber")],m);var y=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},b=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let w=class extends n.a{constructor(){super(...arguments),this.name="",this.value=0,this.min=0,this.max=10,this.step=1,this.suffix="",this.sliderX=0,this.sliderWidth=0,this._touchDown=!1,this._mouseMove=t=>{let{clientX:e}=t;window.TouchEvent&&t instanceof TouchEvent&&(e=t.touches[0].clientX),this.moveBall(e)},this._mouseUp=t=>{this._touchDown=!1,t.target.removeEventListener("touchmove",this._mouseMove),t.target.removeEventListener("touchend",this._mouseUp),document.body.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp),l(this,"on-end",{value:this.value})},this.emitChange=((t,e=16)=>{let r;return(...n)=>{r||(r=setTimeout(()=>{t(...n),r=null},e))}})(()=>{l(this,"on-change",{value:this.value})},20)}firstUpdated(){this.addEventListener("click",t=>{const{clientX:e}=t,{left:r,width:n}=this.$slider.getBoundingClientRect();this.sliderX=r,this.sliderWidth=n,this.moveBall(e)})}moveBall(t){var e;const{sliderX:r,sliderWidth:n}=this;let o=(n-(r+n-t))/n;o>1?o=1:o<0&&(o=0);const i=(this.max-this.min)*o+this.min,a=(null===(e=this.step.toString().split(".")[1])||void 0===e?void 0:e.length)||0,s=Number(i.toFixed(a));this.value!==s&&(this.value=s,this.emitChange())}pickBall(t){if(!0!==this._touchDown)if(this._touchDown=!0,window.TouchEvent&&t instanceof TouchEvent){const{left:e,width:r}=this.$slider.getBoundingClientRect();this.sliderX=e,this.sliderWidth=r,t.target.addEventListener("touchmove",this._mouseMove),t.target.addEventListener("touchend",this._mouseUp),l(this,"on-start",{value:this.value})}else{const{button:e}=t;if(0!==e)return;const{left:r,width:n}=this.$slider.getBoundingClientRect();this.sliderX=r,this.sliderWidth=n,document.body.addEventListener("mousemove",this._mouseMove),window.addEventListener("mouseup",this._mouseUp),l(this,"on-start",{value:this.value})}}render(){let t=0;return this.value!==this.min&&(t=(this.value-this.min)/(this.max-this.min)),n.e`
      <div class="i-slider">
        <div class="i-slider-picked" style="width:${Math.round(100*t)}%">
          <div
            @click="${t=>t.stopPropagation()}"
            @mousedown="${this.pickBall}"
            @touchstart="${this.pickBall}"
            class="ball"
          ></div>
        </div>
      </div>
      <div
        @click="${t=>{t.stopPropagation()}}"
        class="i-picker-tips"
      >
        <infinito-inputnumber
          readonly
          .step=${this.step}
          .min=${this.min}
          .max=${this.max}
          .text="${this.translator?n.e`${this.translator(this.value)+this.suffix}`:n.e`${this.value+this.suffix}`}"
          .value="${this.value}"
          @on-change="${t=>{this.value=t.detail.value}}"
        ></infinito-inputnumber>
      </div>
    `}};w.styles=n.b`
    :host {
      display: flex;
      align-items: center;
      padding: 0;
      width: 100%;
      cursor: pointer;
      --bg-color:#fff;
    }
    .i-slider {
      flex-grow: 1;
      display: flex;
      height: 2px;
      background-color: #eeeeee;
      margin-right: 10px;
    }
    .i-slider-picked {
      position: relative;
      height: 2px;
      background-color: #333;
    }
    .ball {
      position: absolute;
      right: 0;
      transform: translate(50%, -50%);
      width: 14px;
      height: 14px;
      background: rgba(255, 255, 255, 1);
      border-radius: 50%;
      border: 2px solid rgba(51, 51, 51, 1);
      transition-timing-function: ease;
      transition-duration: 0.3s;
      transition-property: box-shadow;
    }
    .ball:active {
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
    }
    .i-picker-tips {
      padding: 4px 0;
      width: 60px;
      text-align: right;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    infinito-inputnumber{
      --border-color:var(--bg-color);
      --bg-input-color:var(--bg-color);
    }
  `,y([Object(n.h)(".i-slider"),b("design:type",HTMLDivElement)],w.prototype,"$slider",void 0),y([Object(n.g)({type:String}),b("design:type",Object)],w.prototype,"name",void 0),y([Object(n.g)({type:Number}),b("design:type",Object)],w.prototype,"value",void 0),y([Object(n.g)({type:Number}),b("design:type",Object)],w.prototype,"min",void 0),y([Object(n.g)({type:Number}),b("design:type",Object)],w.prototype,"max",void 0),y([Object(n.g)({type:Number}),b("design:type",Object)],w.prototype,"step",void 0),y([Object(n.g)({type:String}),b("design:type",Object)],w.prototype,"suffix",void 0),y([Object(n.g)({attribute:!1}),b("design:type",Function)],w.prototype,"translator",void 0),w=y([Object(n.c)("infinito-slider")],w);var x=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},_=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let S=class extends n.a{constructor(){super(...arguments),this.cTitle="",this.close=!1,this.isTransition=!1}handleChange(){this.close?this.show():this.hide()}show(){if(this.isTransition||!this.close)return;this.$cardBody.style.height="0px",this.$cardBody.classList.add("transition"),this.isTransition=!0,this.close=!1;this.$cardBody.addEventListener("transitionend",()=>{this.$cardBody.style.height="",this.$cardBody.classList.remove("transition"),this.isTransition=!1},{once:!0}),p(this.$cardBody,300),this.$cardBody.style.height=this.$cardBody.scrollHeight+"px"}hide(){if(this.isTransition||this.close)return;this.$cardBody.style.height=this.$cardBody.getBoundingClientRect().height+"px",this.$cardBody.classList.add("transition"),this.$cardBody.offsetHeight,this.isTransition=!0,this.close=!0;this.$cardBody.addEventListener("transitionend",()=>{this.$cardBody.style.height="",this.$cardBody.classList.remove("transition"),this.isTransition=!1},{once:!0}),p(this.$cardBody,300),this.$cardBody.style.height="0px"}render(){let t=n.e``;return this.cTitle&&(t=this.renderHeading()),n.e`
      <div class="infinito-card-wrapper ${this.close?"close":"open"}">
        ${t}
        <div class="card-body">
          <div class="card-body-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    `}renderHeading(){const t=this.close?n.e`${n.e`
    <svg width="12px" height="13px" viewBox="0 0 12 13">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-358.000000, -214.000000)" stroke="#CCCCCC" stroke-width="2">
          <g transform="translate(30.000000, 188.000000)">
            <g transform="translate(20.000000, 20.000000)">
              <g transform="translate(308.000000, 6.000000)">
                <line x1="0" y1="6.5" x2="12" y2="6.5"></line>
                <line x1="6" y1="0.5" x2="6" y2="12.5"></line>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `}`:n.e`${n.e`
    <svg width="12px" height="13px" viewBox="0 0 12 13">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-358.000000, -147.000000)" stroke="#CCCCCC" stroke-width="2">
          <g transform="translate(50.000000, 141.000000)">
            <g transform="translate(308.000000, 6.000000)">
              <line x1="0" y1="6.5" x2="12" y2="6.5"></line>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `}`;return n.e`
      <div class="card-head" @click=${this.handleChange}>
        <div class="card-head-wrapper">
          <div class="card-head-title">${this.cTitle}</div>
            <div class="card-extra">
              ${t}
            </div>
          </div>
        </div>
      </div>
    `}};S.styles=n.b`
    :host {
      display: block;
      --padding-bottom: 30px;
      --card-color: #fff;
      --border-radius: 0px;
      --margin-left: 20px;
      --margin-right: 20px;
    }
    .infinito-card-wrapper {
      margin-bottom: 30px;
      padding-top: 20px;
      padding-bottom: var(--padding-bottom);
      background: var(--card-color);
      border-radius: var(--border-radius);
      border-bottom: 1px solid transparent;
      transition: margin-bottom 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
    }
    .infinito-card-wrapper.close {
      margin-bottom: 0;
      border-bottom-color: #f5f5f5;
      padding-bottom: 20px;
    }
    .close .card-body {
      height: 0;
    }
    .card-body {
      transition: height 0.3s ease-in-out;
    }
    .close .card-body,
    .transition.card-body {
      overflow: hidden;
    }
    .card-head {
      margin-left: 20px;
      margin-right: 20px;
    }
    .card-body-wrapper {
      margin-left: var(--margin-left);
      margin-right: var(--margin-right);
    }

    .card-head-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    .card-head-wrapper:after {
      content: '';
      position: absolute;
      inset: -20px;
      bottom: -10px;
    }

    .infinito-card-wrapper.close .card-head-wrapper:after {
      bottom: -20px;
    }

    .card-extra {
      transition: opacity 0.3s;
      cursor: pointer;
    }
    .card-extra:hover {
      opacity: 0.5;
    }
    .card-head-title {
      font-size: 18px;
      color: #333;
      font-weight: 700;
    }
  `,x([Object(n.g)({type:String}),_("design:type",Object)],S.prototype,"cTitle",void 0),x([Object(n.g)({type:Boolean,reflect:!0}),_("design:type",Object)],S.prototype,"close",void 0),x([Object(n.g)({type:Boolean}),_("design:type",Object)],S.prototype,"isTransition",void 0),x([Object(n.h)(".card-body"),_("design:type",HTMLDivElement)],S.prototype,"$cardBody",void 0),S=x([Object(n.c)("infinito-card")],S);var k=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},j=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let O=class extends n.a{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.value=""}render(){return n.e`
      <label class="radio-wrapper">
        <span class="radio">
          <input
            class="radio-input"
            type="radio"
            .value="${this.value}"
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            @change="${this._changeHandle}"
          />
          <span class="radio-inner"></span>
        </span>
        <span class="radio-content">
          <slot></slot>
        </span>
      </label>
    `}_changeHandle(){this.checked=this.input.checked,l(this,"change",{checked:this.checked})}};O.styles=n.b`
    :host {
      --border-color: #333;
      display: inline-flex;
    }
    :host([disabled]) {
      opacity: .6;
    }
    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      margin: 0;
      margin-right: 10px;
      padding: 0;
      color: #333;
      font-size: 14px;
      cursor: pointer;
    }
    :host([disabled]) .radio-wrapper {
      cursor: not-allowed;
    }
    .radio {
      position: relative;
      display: inline-block;
      margin-right: 8px;
    }
    .radio-input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 1;
      opacity: 0;
      cursor: pointer;
    }
    :host([disabled]) .radio-input {
      cursor: not-allowed;
    }
    .radio-inner {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 14px;
      height: 14px;
      border: 2px solid var(--border-color);
      border-radius: 50%;
      transition: all .3s;
    }
    .radio-inner::after {
      content: " ";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      opacity: 0;
      transition: all .3s;
    }
    .radio-input:checked + .radio-inner {
      background: var(--border-color);
    }
    .radio-input:checked + .radio-inner::after {
      background: #fff;
      opacity: 1;
    }
  `,k([Object(n.h)("input"),j("design:type",HTMLInputElement)],O.prototype,"input",void 0),k([Object(n.g)({type:Boolean}),j("design:type",Object)],O.prototype,"checked",void 0),k([Object(n.g)({type:Boolean,reflect:!0}),j("design:type",Object)],O.prototype,"disabled",void 0),k([Object(n.g)({type:String}),j("design:type",Object)],O.prototype,"value",void 0),O=k([Object(n.c)("infinito-radio")],O);var T=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},A=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let E=class extends n.a{constructor(){super(...arguments),this.radioNodes=[]}render(){return n.e`
      <div class="radio-group-wrapper">
        <slot id="slot" @slotchange="${this.slotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.handleChecked)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.handleChecked)}handleChecked(t){const e=t.target,r=t.detail.checked,n=e.value||"";r?this.selected=r&&n||"":e.checked=!0,this.radioNodes.forEach(t=>t.checked=t===e),l(this,"on-change",{selected:this.selected})}slotChange(){this.requestUpdate()}updated(){const t=this.radioSlot.assignedNodes();if(t&&t.length)for(let e=0;e<t.length;e++){const r=t[e];if("INFINITO-RADIO"===r.tagName){this.radioNodes.push(r);const t=r.value||"";this.selected&&t===this.selected?r.checked=!0:r.checked=!1}}}};T([Object(n.h)("#slot"),A("design:type",HTMLElement)],E.prototype,"radioSlot",void 0),T([Object(n.g)({type:String}),A("design:type",String)],E.prototype,"selected",void 0),E=T([Object(n.c)("infinito-radio-group")],E);var C=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},R=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let I=class extends n.a{constructor(){super(...arguments),this.closeable=!0,this.open=!1,this.duration=200,this.durationBg=200,this.bezierFn="ease-in",this.bezierBgFn="ease-in"}firstUpdated(){this.$modalMask.onwheel=()=>!1}updated(t){t.has("open")&&!0===this.open&&(this.$modal.animate([{opacity:"0"},{opacity:"1"}],{duration:this.durationBg,easing:this.bezierBgFn}),this.$modalContainer.animate([{opacity:"0",transform:"scale(0.8)"},{opacity:"1",transform:"none"}],{duration:this.duration,easing:this.bezierFn}))}render(){return n.e`
      <div class="modal ${this.open?"modal-open":""}">
        <div class="modal-mask" @click=${this.handleMaskClick}></div>
        <div class="model-holder-top"></div>
        <div class="modal-container">
          <span class="modal-close" @click="${this.close}">
            ${this.closeable?n.e`
    <svg width="14px" height="14px" viewBox="0 0 14 14">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="1">
        <g transform="translate(-1086.000000, -226.000000)" fill="#333333" fill-rule="nonzero">
          <g transform="translate(320.000000, 206.000000)">
            <g>
              <g transform="translate(766.000000, 20.000000)">
                <g>
                  <path d="M13.2303076,0.802251953 C12.8052342,0.377204963 12.1160812,0.377207829 11.6910113,0.802258354 L7.05672461,5.43633398 L7.05672461,5.43633398 L2.38977766,0.769621758 C1.96470002,0.344565503 1.27553537,0.344566517 0.850458984,0.769624023 C0.425408624,1.19465551 0.425393322,1.883783 0.850424806,2.30883336 C0.850436954,2.30884551 0.850449102,2.30885766 0.85046125,2.3088698 L5.5174082,6.97558203 L5.5174082,6.97558203 L0.866831437,11.6259476 C0.441760949,12.0509988 0.441745304,12.7401586 0.866796493,13.1652291 C0.866798899,13.1652315 0.866801305,13.1652339 0.866803711,13.1652363 C1.29186357,13.5903075 1.98103035,13.5903186 2.40610392,13.1652611 L7.05671094,8.51483008 L7.05671094,8.51483008 L11.6909746,13.1489765 C12.1160521,13.5740432 12.8052287,13.5740389 13.2303008,13.1489668 C13.6553632,12.7239044 13.6553632,12.034742 13.2303008,11.6096796 C13.2302959,11.6096747 13.230291,11.6096699 13.2302862,11.609665 L8.59602734,6.97558203 L8.59602734,6.97558203 L13.2303169,2.34146831 C13.6553572,1.91644415 13.6553703,1.22733077 13.2303461,0.802290481 C13.2303333,0.802277638 13.2303205,0.802264795 13.2303076,0.802251953 Z"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `:null}
          </span>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-foot">
            <slot name="foot"></slot>
          </div>
        </div>
        <div class="model-holder-bottom"></div>
      </div>
    `}close(){this.open=!1,this.onCancel&&this.onCancel()}handleMaskClick(){this.closeable&&(this.open=!1,this.onCancel&&this.onCancel())}};I.styles=n.b`
    :host {
      --top: 0;
      --right: 0;
      --bottom: 0;
      --left: 0;
      --modal-padding: 20px;
      --border-radius: 6px;
      --margin-top:0;
    }
    .modal {
      position: fixed;
      top: var(--top);
      right: var(--right);
      bottom: var(--bottom);
      left: var(--left);
      flex-direction: column;
      align-items: center;
      z-index: 100000;
      display: none;
      margin-top:var(--margin-top)
    }
    .modal.modal-open {
      display: flex;
    }
    .modal-mask {
      position: fixed;
      top: var(--top);
      right: var(--right);
      bottom: var(--bottom);
      left: var(--left);
      background: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }
    .modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      transition: opacity 0.3s;
      opacity: 0.2;
    }
    .modal-close:hover {
      opacity: 0.4;
    }
    .model-holder-top,
    .model-holder-bottom {
      flex-grow: 1;
    }
    .model-holder-bottom {
      height: var(--modal-top, 15vh);
    }
    .modal-container {
      box-sizing: border-box;
      position: relative;
      padding: var(--modal-padding);
      background: #fff;
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
      border-radius: var(--border-radius);
      pointer-events: auto;
    }
  `,C([Object(n.g)({type:Boolean,reflect:!0}),R("design:type",Object)],I.prototype,"closeable",void 0),C([Object(n.g)({type:Boolean,reflect:!0}),R("design:type",Object)],I.prototype,"open",void 0),C([Object(n.g)(),R("design:type",Object)],I.prototype,"onCancel",void 0),C([Object(n.g)({type:Number}),R("design:type",Object)],I.prototype,"duration",void 0),C([Object(n.g)({type:Number}),R("design:type",Object)],I.prototype,"durationBg",void 0),C([Object(n.g)({type:String}),R("design:type",Object)],I.prototype,"bezierFn",void 0),C([Object(n.g)({type:String}),R("design:type",Object)],I.prototype,"bezierBgFn",void 0),C([Object(n.h)(".modal"),R("design:type",HTMLDivElement)],I.prototype,"$modal",void 0),C([Object(n.h)(".modal-container"),R("design:type",HTMLDivElement)],I.prototype,"$modalContainer",void 0),C([Object(n.h)(".modal-mask"),R("design:type",HTMLDivElement)],I.prototype,"$modalMask",void 0),I=C([Object(n.c)("infinito-modal")],I);var P=r(499),L=r.n(P),M=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},N=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let B=class extends n.a{constructor(){super(...arguments),this.spinning=!1,this.tip="",this.delay=0,this.isSvg=!1}render(){let t=n.e``;return this.tip&&(t=this.renderTip()),n.e`
      <div class="spin-wrapper">
        ${this.spinning?n.e`
            <div class="spin-spinning">
              ${this.isSvg?n.e`
                    <svg style="margin: auto; display: block;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                      <path fill="none" stroke-width="9" stroke-dasharray="215.53469970703125 41.054228515625" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round">
                        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.5384615384615383s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                      </path>
                    </svg>
                  `:n.e`<img src=${L.a} />`}
              ${t}
            </div>
          `:null}
        <div class="spin-content spin-blur">
          <slot></slot>
        </div>
      </div>
    `}renderTip(){return n.e`
      <div class="spin-text">${this.tip}</div>
    `}};B.styles=n.b`
    :host {
      --spin-color: #e7e7e7;
      --tip-color: var(--spin-color);
      display: block;
      width: 110px;
      height: 55px;
    } 
    .spin-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .spin-spinning {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    img,
    svg {
      width: 100%;
      height: 100%;
    }
    svg path {
      stroke: var(--spin-color);
      transform: scale(2);
      transform-origin: center;
    }
    .spin-text {
      position: absolute;
      top: 50%;
      width: 100%;
      padding-top: 20px;
      font-size: 14px;
      text-align: center;
      color: var(--tip-color);
      text-shadow: 0 1px 2px #fff;
    }
    .spin-content {
      width: 100%;
      height: 100%;
      transition: opacity .3s;
    }
    .spin-blur {
      opacity: .3;
      user-select: none;
      pointer-events: none;
    }
  `,M([Object(n.g)({type:Boolean,reflect:!0}),N("design:type",Object)],B.prototype,"spinning",void 0),M([Object(n.g)({type:String}),N("design:type",Object)],B.prototype,"tip",void 0),M([Object(n.g)({type:Number}),N("design:type",Object)],B.prototype,"delay",void 0),M([Object(n.g)({type:Boolean}),N("design:type",Object)],B.prototype,"isSvg",void 0),B=M([Object(n.c)("infinito-spin")],B);var D=r(500),U=r.n(D),$=r(501),z=r.n($),V=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},q=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let F=class extends n.a{constructor(){super(...arguments),this.type="text",this.placeholder="",this.value="",this.name="",this.readonly=!1,this.disabled=!1,this.error="",this._show=!1,this.isShowEye=!0}firstUpdated(){"password"===this.type&&requestAnimationFrame(()=>{this.controlIcon&&this.controlIcon.addEventListener("click",()=>{this._show=!this._show})})}render(){let t=n.e``;return this.error&&(t=this.renderError()),n.e`
      <div
        class="input-control ${this.error?"input-error":""}  ${"password"===this.type&&this.isShowEye?"eye":""}"
      >
        <input
          autocomplete="off"
          .type="${this._show?"text":this.type}"
          .name="${this.name}"
          .value="${this.value}"
          .placeholder="${this.placeholder}"
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          @input="${this.handleInputChange}"
          @blur="${this.handleBlur}"
          @focus=${this.handleFocus}
        />
        ${"password"===this.type&&this.isShowEye?n.e`
                <i
                  class="input-pwd-eye"
                  style="background: url(${this._show?U.a:z.a}) no-repeat"
                ></i>
              `:null}
        ${t}
      </div>
    `}renderError(){return n.e`
      <div class="error">
        <span>${this.error}</span>
      </div>
    `}handleInputChange(){this.value=this.inputEle.value,l(this,"onchange",{value:this.value})}handleBlur(){this.inputEle.blur(),l(this,"onblur",{value:this.value})}handleFocus(){l(this,"onfocus",{value:this.value})}};F.styles=n.b`
    :host {
      --border-width: 1px;
      --border-style: solid;
      --border-color: #999;
      --border-hover-color: #333;
      --border-radius: 6px;
      --padding-all: 15px 20px 14px;
      --error-color: #ea4747;
      display: block;
      width: 330px;
      /* height: 52px; */
    }
    ::placeholder {
      color: #999;
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: #999;
    }
    ::-ms-input-placeholder {
      color: #999;
    }
    :host([readonly]) {
      opacity: 0.5;
    }
    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .input-control {
      box-sizing: border-box;
      position: relative;
      /* display: flex; */
      /* align-items: center; */
      width: 100%;
      height: 100%;
      /* border: var(--border-width) var(--border-style) var(--border-color); */
      /* border-radius: var(--border-radius); */
      transition: all 0.3s;
      /* padding-right: 20px; */
    }
    .input-control:focus-within,
    .input-control:hover {
      border-color: var(--border-hover-color);
    }

    .input-control:focus-within .input-pwd-eye,
    .input-control:hover .input-pwd-eye {
      opacity: 1;
    }

    .input-control .input-pwd-eye {
      position: absolute;
      right: 20px;
      top: 17px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      transition: opacity 200ms;
      opacity: 0;
    }

    :host([readonly]) .input-control:hover,
    :host([disabled]) .input-control:hover {
      border-width: var(--border-width);
    }
    input {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 52px;
      /* flex: 1; */
      /* height: 100%; */
      padding: var(--padding-all);
      background: none;
      border: none;
      outline: none;
      color: #333;
      border: var(--border-width) var(--border-style) var(--border-color);
      border-radius: var(--border-radius);
      font-family: PingFangSC-Regular, "PingFang SC";
    }
    .input-control.input-error input {
      border-color: var(--error-color);
      animation: shake 0.2s ease-in-out 0s 2;
    }
    .input-control.eye input {
      padding-right: 58px;
    }
    :host([disabled]) input {
      cursor: not-allowed;
    }
    .error {
      color: var(--error-color);
      font-size: 12px;
      font-weight: 500;
      word-break: break-all;
      text-align: right;
    }
    @keyframes shake {
      0% {
        margin-left: 0rem;
      }
      25% {
        margin-left: 0.5rem;
      }
      75% {
        margin-left: -0.5rem;
      }
      100% {
        margin-left: 0rem;
      }
    }
  `,V([Object(n.h)("input"),q("design:type",HTMLInputElement)],F.prototype,"inputEle",void 0),V([Object(n.h)(".input-pwd-eye"),q("design:type",HTMLElement)],F.prototype,"controlIcon",void 0),V([Object(n.g)({type:String}),q("design:type",String)],F.prototype,"type",void 0),V([Object(n.g)({type:String}),q("design:type",Object)],F.prototype,"placeholder",void 0),V([Object(n.g)({type:String,reflect:!0}),q("design:type",Object)],F.prototype,"value",void 0),V([Object(n.g)({type:String}),q("design:type",Object)],F.prototype,"name",void 0),V([Object(n.g)({type:Boolean}),q("design:type",Object)],F.prototype,"readonly",void 0),V([Object(n.g)({type:Boolean}),q("design:type",Object)],F.prototype,"disabled",void 0),V([Object(n.g)({type:String}),q("design:type",Object)],F.prototype,"error",void 0),V([Object(n.g)({type:Boolean}),q("design:type",Object)],F.prototype,"_show",void 0),V([Object(n.g)({type:Boolean,reflect:!0}),q("design:type",Object)],F.prototype,"isShowEye",void 0),V([Object(n.d)({passive:!0}),q("design:type",Function),q("design:paramtypes",[]),q("design:returntype",void 0)],F.prototype,"handleInputChange",null),F=V([Object(n.c)("infinito-input")],F);var W=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},H=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};function G(t,e){return new CustomEvent(t,{composed:!0,detail:e})}class X extends n.a{constructor(){super(...arguments),this.destination=""}render(){return n.e`
      <slot @slotchange="${this.slotChange}"></slot>
    `}disconnectedCallback(){document.dispatchEvent(G("portal-close",{destination:this.destination}))}slotChange(){this.requestUpdate()}updated(){const t=this.projectSlot.assignedNodes();t.length&&document.dispatchEvent(G("portal-open",{destination:this.destination,content:t}))}}X.styles=n.b`
    :host {
      display: none;
    }
  `,W([Object(n.h)("slot"),H("design:type",HTMLElement)],X.prototype,"projectSlot",void 0),W([Object(n.g)({type:String}),H("design:type",Object)],X.prototype,"destination",void 0);var Y=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},K=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class J extends n.a{constructor(){super(...arguments),this.name="",this.projected=[],this.updatePortalContent=t=>{this.confirmDestination(t)&&t.detail.content&&(this.projected=t.detail.content)}}render(){return n.e`${this.projected}`}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener("portal-open",this.updatePortalContent,!0),document.addEventListener("portal-close",this.updatePortalContent,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("portal-open",this.updatePortalContent,!0),document.removeEventListener("portal-close",this.updatePortalContent,!0)}confirmDestination(t){return this.name||console.warn("This destination has not been named."),t.detail.destination===this.name&&(t.stopPropagation(),!0)}}Y([Object(n.g)({type:String}),K("design:type",Object)],J.prototype,"name",void 0),Y([Object(n.g)({type:Array}),K("design:type",Object)],J.prototype,"projected",void 0);var Q=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let Z=class extends X{};Z=Q([Object(n.c)("infinito-portal-entrance")],Z);let tt=class extends J{};tt=Q([Object(n.c)("infinito-portal-destination")],tt);var et=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let nt=class extends n.a{constructor(){super(...arguments),this.src=""}render(){return n.e` <div class="svg" style="-webkit-mask-image: url(${this.src})"></div> `}};nt.styles=n.b`
    :host {
      display: block;
      width: 30px;
      height: 30px;
      --size: 100%;
      -webkit-mask-size: var(--size);
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      color: black;
    }
    .svg {
      width: inherit;
      height: inherit;
      -webkit-mask-size: inherit;
      -webkit-mask-position: inherit;
      color: inherit;
      background-color: currentcolor;
      -webkit-mask-repeat: inherit;
    }
  `,et([Object(n.g)({type:String}),rt("design:type",Object)],nt.prototype,"src",void 0),nt=et([Object(n.c)("infinito-svg")],nt);var ot=n.b`:host{display:block;height:100%;--point-height: 2px}.tabs{position:relative;width:100%;height:100%;display:flex}.tabs.vertically{align-items:center}.tabs.horizontally{flex-direction:column}.tabs[style]::after{content:''}.tabs.vertically::after{--width: 28;position:absolute;width:calc(var(--width) * 1px);left:calc((var(--target-left) + (var(--target-width) - var(--width)) / 2) * 1px);border-bottom:var(--point-height) solid #333;bottom:0;transition:left 0.2s, width 0.2s}.tabs.horizontally::after{position:absolute;width:100%;height:calc(var(--target-height, 0) * 1px);top:calc(var(--target-top, -500) * 1px);border-right:var(--point-height) solid #333;right:0;transition:top 0.2s, height 0.2s}
`,it=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},at=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let st=class extends n.a{constructor(){super(...arguments),this.type="vertically",this.active=0}setActiveStyle(){const t=this.$slot.assignedElements();if(t&&t.length>0){const e=t[this.active],r=this.$tabsbox.style,{offsetTop:n,offsetLeft:o,offsetWidth:i,offsetHeight:a}=e;r.setProperty("--target-width",i+""),r.setProperty("--target-height",a+""),r.setProperty("--target-left",o+""),r.setProperty("--target-top",n+"")}}updated(t){t.has("active")&&this.setActiveStyle()}render(){return n.e`
      <div class="tabs ${this.type}">
        <slot></slot>
      </div>
    `}};st.styles=ot,it([Object(n.g)({type:String}),at("design:type",String)],st.prototype,"type",void 0),it([Object(n.g)({type:Number}),at("design:type",Object)],st.prototype,"active",void 0),it([Object(n.h)(".tabs"),at("design:type",HTMLDivElement)],st.prototype,"$tabsbox",void 0),it([Object(n.h)("slot"),at("design:type",HTMLSlotElement)],st.prototype,"$slot",void 0),st=it([Object(n.c)("infinito-tabs")],st)},function(t,e,r){"use strict";r(11),r(14),r(8);var n=r(1),o=r(385),i=(r(489),n.b`:host {
  display: block;
  position: relative;
  z-index: 999;
}
.color-pick-list {
  width: 100%;
  box-sizing: border-box;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backface-visibility: hidden;
}
.color-item {
  position: relative;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  background-color: currentColor;
}
.color-item::before {
  content: "";
  display: none;
  width: 0px;
  height: 0px;
  color: #fff;
  border-width: 0px 0px 2px 2px;
  padding: 3px 3px 3px 6px;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -78%) rotate(-45deg);
}
.color-item.active::before {
  display: block;
}
.color-item.transparent {
  color: #ddd !important;
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
}
.color-item.transparent i-svg {
  color: #fff !important;
  background: #ddd !important;
}
.color-item.transparent.active {
  background: #ddd;
  background-image: none;
}
.color-picker {
  position: absolute;
  bottom: 30px;
  right: 0;
  transform-origin: bottom right;
}
.side {
  transform: scale(calc(1 / var(--side-ratio)));
}
`),a=r(493),s=r.n(a),c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let u=class extends n.a{constructor(){super(...arguments),this.value="",this.offsetRight=0,this.side=!1,this.name="",this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(138,49,255,1)","transparent"],this.pickerStatus=!1,this.activeIndex=-1,this._close_picker_lock=!1,this._preClosePicker=()=>{this._close_picker_lock&&(this._close_picker_lock=!1)},this._postClosePicker=()=>{this._close_picker_lock||this._closePicker()},this._closePicker=()=>{this.pickerStatus=!1}}firstUpdated(){this._importColor(),this.resetActiveIndex(),window.addEventListener("mousedown",this._preClosePicker),window.addEventListener("mouseup",this._postClosePicker)}disconnectedCallback(){this._closePicker(),window.removeEventListener("mousedown",this._preClosePicker),window.removeEventListener("mouseup",this._postClosePicker),super.disconnectedCallback()}resetActiveIndex(){this.activeIndex=this.colors.findIndex(t=>t===this.value)}_importColor(){const t=document.querySelector("#script-vue"),e=document.querySelector("#script-color");if(!t){const t=document.createElement("script");t.src="/vendor/vue.min.js",t.id="script-vue",t.onload=()=>{if(!e){const t=document.createElement("script");t.src="/vendor/color-picker.min.js",t.id="script-color",document.body.append(t)}},document.body.append(t)}}_showPicker(t){t.stopPropagation(),this.pickerStatus=!0,"transparent"===this.value&&(this.value="#ff4734",this.activeIndex=-1,this._emitChange())}_pickColor(t){if(t instanceof CustomEvent){const{rgba:e}=t.detail[0],{r:r,g:n,b:o,a:i}=e;this.value=`rgba(${[r,n,o,i].join(",")})`,this.activeIndex=-1,this._emitChange()}}_pickThisColor(t){this.value=this.colors[t],this.activeIndex=t,this._emitChange()}_emitChange(){const t=new CustomEvent("on-change",{detail:{value:this.value}});this.dispatchEvent(t)}async performUpdate(){this.resetActiveIndex(),super.performUpdate()}updated(t){if(t.has("pickerStatus")&&!0===this.pickerStatus)try{this.$colorPicker.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(t){}}render(){return n.e`
      <section class="color-pick-list">
        ${this.colors.map((t,e)=>n.e`<span
            @click="${()=>this._pickThisColor(e)}"
            class="${Object(o.a)({active:e===this.activeIndex,"color-item":!0,transparent:"transparent"===t})}"
            style="color:${t.includes("255,255,255")?"rgb(221,221,221)":t};"
          >
          </span>`)}
        <span
          @click="${this._showPicker}"
          class="color-item color-dropper ${-1===this.activeIndex&&this.value?"active":""}"
          style="background: url(${s.a}) no-repeat center; background-size: contain;"
        >
        </span>
      </section>
      <section
        @click="${t=>{t.stopPropagation()}}"
        class="color-picker ${this.side?"side":""}"
        .hidden=${!this.pickerStatus}
        style="margin-right:${this.offsetRight}px"
      >
        ${this.pickerStatus?n.e` <color-picker
              @mousedown=${t=>{t.stopPropagation(),this._close_picker_lock=!0}}
              value="${this.value}"
              @input="${this._pickColor}"
            ></color-picker>`:null}
      </section>
    `}};u.styles=i,c([Object(n.g)({type:String})],u.prototype,"value",void 0),c([Object(n.g)({type:Number})],u.prototype,"offsetRight",void 0),c([Object(n.g)({type:Boolean})],u.prototype,"side",void 0),c([Object(n.g)({type:String})],u.prototype,"name",void 0),c([Object(n.g)({type:Array})],u.prototype,"colors",void 0),c([Object(n.f)()],u.prototype,"pickerStatus",void 0),c([Object(n.f)()],u.prototype,"activeIndex",void 0),c([Object(n.h)(".color-picker")],u.prototype,"$colorPicker",void 0),u=c([Object(n.c)("i-colorpicker")],u)},,function(t,e,r){t.exports=r.p+"images/iconfont.919d651.svg"},function(t,e,r){t.exports=r.p+"images/icon.196b87f.svg"},,function(t,e,r){"use strict";r(8),r(11),r(14);var n=r(1),o=n.b`:host {
  display: block;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.label-box {
  max-width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.label-box .label {
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.input {
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 20px;
  box-sizing: content-box;
  padding-bottom: 10px;
  width: 100%;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.input::placeholder {
  color: #999999;
}
.input:-moz-read-only {
  cursor: not-allowed;
  color: #999999;
}
.input:read-only {
  cursor: not-allowed;
  color: #999999;
}
`,i=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const a=async t=>null;let s=class extends n.a{constructor(){super(...arguments),this.label="",this.defaultValue="",this.value="",this.validateMsg=i18n("format_error"),this.placeholder=i18n("please_enter_text"),this.readonly=!1,this.validate=a,this.validateStatus=null,this.onChange=t=>{const e=t.currentTarget.value;!1===this.validateStatus&&this.validate(e)&&(this.validateStatus=!0),this.value=e,this.emitChangeEvent(e)},this.emitChangeEvent=t=>{const e=new CustomEvent("on-change",{detail:{value:t}});this.dispatchEvent(e)},this.checkValidity=async()=>(this.validateStatus=await this.validate(this.value),this.validateStatus),this.reset=()=>{this.value=this.defaultValue,this.emitChangeEvent(this.defaultValue),this.validateStatus=null}}render(){return n.e`
      <div class="item">
        <div class="label-box">
          <span class="label">${this.label}</span
          ><span .hidden="${!1!==this.validateStatus}" class="error ellipsis">*${this.validateMsg}</span>
        </div>

        <slot name="input">
          <input
            class="input"
            autocomplete="off"
            type="text"
            .value="${this.value||""}"
            .placeholder="${this.placeholder}"
            .readOnly="${this.readonly}"
            @blur="${this.checkValidity}"
            @input=${t=>{this.onChange(t)}}
          />
        </slot>
      </div>
    `}};s.styles=o,i([Object(n.g)({type:String})],s.prototype,"label",void 0),i([Object(n.g)({type:String})],s.prototype,"defaultValue",void 0),i([Object(n.g)({type:String})],s.prototype,"value",void 0),i([Object(n.g)({type:String})],s.prototype,"validateMsg",void 0),i([Object(n.g)({type:String})],s.prototype,"placeholder",void 0),i([Object(n.g)({type:Boolean})],s.prototype,"readonly",void 0),i([Object(n.g)({attribute:!1})],s.prototype,"validate",void 0),i([Object(n.f)()],s.prototype,"validateStatus",void 0),s=i([Object(n.c)("i-input")],s)},function(t,e,r){"use strict";r(11),r(14),r(21);var n=r(1),o=n.b`.input {
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid #eeeeee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
  background-color: transparent;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
`,i=r(264),a=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let s=class extends n.a{constructor(){super(...arguments),this.textareaHeight="auto",this.value="",this.placeholder="",this.emitChangeEvent=t=>{const e=new CustomEvent("on-change",{detail:{value:t}});this.dispatchEvent(e)}}setTextareaHeight(t){const e=t.split("\n");if(1===e.length)this.textareaHeight="auto";else{const t=16*e.length;this.textareaHeight=t+2+"px"}}updated(t){t.has("value")&&this.setTextareaHeight(this.value)}render(){return n.e`
      <textarea
        class="input global-scrollbar"
        rows="1"
        style="height:${this.textareaHeight}"
        autocomplete="off"
        @input="${t=>{const e=t.currentTarget.value;this.value=e,this.emitChangeEvent(e),this.setTextareaHeight(e)}}"
        .value="${this.value}"
        .placeholder="${this.placeholder}"
      ></textarea>
    `}};s.styles=[i.a,o],a([Object(n.f)()],s.prototype,"textareaHeight",void 0),a([Object(n.g)({type:String})],s.prototype,"value",void 0),a([Object(n.g)({type:String})],s.prototype,"placeholder",void 0),s=a([Object(n.c)("i-textarea")],s)},function(t,e,r){"use strict";var n=r(6),o=r.n(n),i=(r(11),r(14),r(1)),a=i.b`.icon-preview {
  transform: scale(0.25);
  transform-origin: left top;
}
.svg-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  overflow: hidden;
}
`,s=r(486),c=r(248),u=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let l=class extends i.a{constructor(){super(...arguments),this.bgText="",this.bgFont=30,this.bgColor="",this.iconType="custom-icon",this.fontScale=18/7,this.getImg=()=>new o.a(t=>{t(null)})}get previewFont(){return this.bgFont*this.fontScale+"px 'PingFang SC', 'Microsoft Yahei', monospace, sans-serif"}render(){return i.e`<div class="svg-box">
      <div class="svg-text" style="">
        ${Object(s.a)(Object(c.a)({bgFont:this.bgFont,bgText:this.bgText,bgColor:this.bgColor},"6px"))}
      </div>
    </div>`}};l.styles=a,u([Object(i.g)({type:String})],l.prototype,"bgText",void 0),u([Object(i.g)({type:Number})],l.prototype,"bgFont",void 0),u([Object(i.g)({type:String})],l.prototype,"bgColor",void 0),u([Object(i.g)({type:String})],l.prototype,"iconType",void 0),u([Object(i.h)(".icon-preview")],l.prototype,"$preview",void 0),l=u([Object(i.c)("i-texticon")],l)},function(t,e,r){"use strict";var n=r(36),o=r.n(n),i=(r(11),r(14),r(8),r(17)),a=r(23),s=r(1),c=s.b`.item {
  position: relative;
  width: 100%;
  height: 100%;
}
.img-item {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.img-dropper {
  position: relative;
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 6px;
  cursor: pointer;
}
.img-dropper[hidden] {
  display: none;
}
.active .preview {
  border-color: transparent;
}
.img-preview {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
}
.img-preview .editing:hover {
  opacity: 1;
}
.img-preview .editing {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
}
.img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
}
.del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  cursor: pointer;
  transition: transform 0.2s;
}
.del:hover {
  transform: scale(1.1);
}
#imgType {
  width: 1px;
  height: 1px;
}
`,u=r(403),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let p=class extends s.a{constructor(){super(...arguments),this.cropper=null,this.preViewImgData=null,this.preViewImgUrl="",this.active=!1,this.bgColor="",this.iconType="custom-icon",this.canDelete=!1,this.modalBorderRadius="3px",this.qiniu=!1,this.emitChangeEvent=()=>{const t=new CustomEvent("on-change",{detail:{bgColor:this.bgColor,preViewImgData:this.preViewImgData,preViewImgUrl:this.preViewImgUrl}});this.dispatchEvent(t)},this.initCropper=()=>{this.cropper=u.a.create({borderRadius:this.modalBorderRadius}),this.cropper.addEventListener("on-change",async t=>{const{data:e,color:r,changed:n}=t.detail;if(!this.qiniu||n||!this.preViewImgUrl.startsWith("http")){this.bgColor=r,this.preViewImgData=e;const t=this.preViewImgUrl;this.preViewImgUrl=o.a.createObjectURL(this.preViewImgData),o.a.revokeObjectURL(t)}this.emitChangeEvent()})},this.getImg=async()=>{var t,e;if(this.preViewImgUrl.startsWith("http"))return{url:this.preViewImgUrl,bgColor:this.bgColor};const{data:r,error:n}=await a.f.uploadFile(this.preViewImgData,i.a.randomId("icon-")+".png",this.iconType);if(n){const r=(null===(e=null===(t=n.response)||void 0===t?void 0:t.data)||void 0===e?void 0:e.error)?n.response.data.error:n.message;throw new Error(r)}return{url:r.url,bgColor:this.bgColor}},this._chooseImg=t=>{const e=(t.target.files||t.dataTransfer.files)[0],r=new FileReader;r.readAsDataURL(e),t.currentTarget.value=null,r.onload=()=>{this.cropper.init(r.result,this.bgColor),this.cropper.show()}},this.reset=()=>{this.preViewImgUrl&&o.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgData=null,this.preViewImgUrl="",this.bgColor="",this.emitChangeEvent()},this._delImg=t=>{t.stopPropagation(),this.preViewImgUrl&&o.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgData=null,this.preViewImgUrl="",this.emitChangeEvent()},this._editImg=()=>{this.cropper.init(this.preViewImgUrl,this.bgColor),this.cropper.show()}}firstUpdated(){this.initCropper()}disconnectedCallback(){u.a.destroy(),super.disconnectedCallback()}render(){return s.e`
      <div class="item img-item">
        <div class="img-item">
          <input
            @drop="${this._chooseImg}"
            accept="image/*"
            @change="${this._chooseImg}"
            type="file"
            id="imgType"
            style="position:absolute;clip:rect(0 0 0 0);"
          />
          <label
            .hidden="${!!this.preViewImgUrl}"
            class="img-dropper"
            style="${this.active?"background-image: none;":""}"
            for="imgType"
          >
            <i-usesvg style="color:#C3C3C3;width:22px;height:22px" type="icon-xingzhuangjiehe2x" iconfont></i-usesvg>
          </label>
          <div
            .hidden="${!this.preViewImgUrl}"
            class="img-dropper img-preview"
            style="border:${this.active?"none":"1px solid #DADCE0"};background-color:${this.bgColor||"transparent"}; background-image: url('${this.preViewImgUrl}')"
            @click="${this._editImg}"
          >
            <div class="editing">
              <img class="editing-icon" src="${r(554)}" alt="" />
            </div>
            <img
              .hidden="${!this.canDelete}"
              class="del"
              @click="${this._delImg}"
              src="${r(555)}"
              alt=""
            />
          </div>
        </div>
      </div>
    `}};p.styles=c,l([Object(s.g)({type:String})],p.prototype,"preViewImgUrl",void 0),l([Object(s.g)({type:Boolean})],p.prototype,"active",void 0),l([Object(s.g)({type:String})],p.prototype,"bgColor",void 0),l([Object(s.g)({type:String})],p.prototype,"iconType",void 0),l([Object(s.g)({type:Boolean})],p.prototype,"canDelete",void 0),l([Object(s.g)({type:String})],p.prototype,"modalBorderRadius",void 0),l([Object(s.g)({type:Boolean})],p.prototype,"qiniu",void 0),p=l([Object(s.c)("i-imgicon")],p)},,,,,,,,,,,,,,,,,,,function(t,e,r){var n=r(551);t.exports=n},function(t,e,r){var n=r(552),o=Array.prototype;t.exports=function(t){var e=t.reduceRight;return t===o||t instanceof Array&&e===o.reduceRight?n:e}},function(t,e,r){r(553);var n=r(115);t.exports=n("Array").reduceRight},function(t,e,r){"use strict";var n=r(32),o=r(267).right,i=r(251),a=r(164),s=r(118);n({target:"Array",proto:!0,forced:!i("reduceRight")||!s&&a>79&&a<83},{reduceRight:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){t.exports=r.p+"images/edit.064f8e9.svg"},function(t,e,r){t.exports=r.p+"images/del.20d8e3b.svg"},function(t,e,r){t.exports=r.p+"images/permission_img.1fa8fa6.svg"},function(t,e,r){t.exports=r.p+"images/item_1.8b1e737.png"},function(t,e,r){t.exports=r.p+"images/item_2.f6e1bf0.png"},function(t,e,r){t.exports=r.p+"images/item_3.d04a54a.png"},function(t,e,r){t.exports=r.p+"images/arrow.1799f5d.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r.p+"images/success.00a4a1f.svg"},,,,,,function(t,e,r){"use strict";r.r(e);r(2),r(522),r(489),r(11),r(14),r(8);var n=r(1),o=r(197),i=r(6),a=r.n(i),s=r(4),c=r(17),u=r(163),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class p{getTabInfo(){return new a.a(t=>{chrome.tabs.query({currentWindow:!0,active:!0},([e])=>{const r={};r.target=e.url,r.name=e.title,e.title.length>3?r.bgText=e.title.substr(0,2):r.bgText=e.title,t(r)})})}async submit(t){const e=Object.assign(Object.assign({},t),{uuid:c.a.randomId("site-"),id:c.a.randomId("siteId-"),type:"web",updatetime:Date.now()});u.slave.postTask("slave:add-icon",e)}}l([s.b],p.prototype,"getTabInfo",null),l([s.b],p.prototype,"submit",null);const h=new p;var d=r(402),f=r(265),g=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};window.__INFINITY__=window.__INFINITY__||{};let v=class extends o.a{constructor(){super(...arguments),this.initValue=Object.assign({},d.a.defaultValue),this.step=0}firstUpdated(){f.a.sendPageView({page:"popup"}),document.body.addEventListener("on-close-cropper",()=>this.zoomPopup(!1)),document.body.addEventListener("on-show-cropper",()=>this.zoomPopup(!0))}async performUpdate(){const t=await h.getTabInfo();this.initValue=Object.assign(Object.assign({},d.a.defaultValue),t),super.performUpdate()}createRenderRoot(){return this}async _submit(t){var e;await h.submit(t.detail.value),this.step=1,f.a.sendEvent({action:{addPopupIcon:c.a.getTargetLogDomain(null===(e=t.detail.value)||void 0===e?void 0:e.target)}}),setTimeout(()=>{window.close()},3e3)}zoomPopup(t){t?(document.body.style.setProperty("--popup-width","640px"),document.body.style.setProperty("--popup-height","538px"),document.body.style.setProperty("--popup-editicon-padding","0px"),document.body.style.setProperty("--popup-editicon-height","0px")):(document.body.style.removeProperty("--popup-width"),document.body.style.removeProperty("--popup-height"),document.body.style.removeProperty("--popup-editicon-padding"),document.body.style.removeProperty("--popup-editicon-height"))}render(){return 0===this.step?n.e`
        <i-editicon
          style="padding: var(--popup-editicon-padding);height:var(--popup-editicon-height)"
          .value="${this.initValue}"
          @on-submit="${this._submit}"
          iconType="custom-icon"
          .popup="${!0}"
        ></i-editicon>
      `:1===this.step?n.e` <popup-add-success></popup-add-success> `:void 0}};g([Object(n.f)()],v.prototype,"initValue",void 0),g([Object(n.f)()],v.prototype,"step",void 0),v=g([Object(n.c)("popup-add-icon")],v);var m=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let y=class extends n.a{render(){return n.e`
      <div class="add-success">
        <img class="img" src="${r(607)}" alt="" />
        <div class="text">${i18n("add_icon_success")}</div>
      </div>
    `}};y.styles=n.b`
    .add-success {
      height: 530px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img {
      margin-top: 184px;
      width: 60px;
      height: 60px;
    }
    .text {
      margin-top: 20px;
      height: 24px;
      font-size: 14px;
      font-weight: 300;
      color: #999999;
      line-height: 24px;
    }
  `,y=m([Object(n.c)("popup-add-success")],y)}]);