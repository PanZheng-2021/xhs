(window.saladictEntry=window.saladictEntry||[]).push([[55],{120:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0),o=r(30);function i(t,e){var r=Object(o.e)(o.a),i=Object(o.e)((function(){return t(r.current)}));return[Object(n.useRef)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r.current.next(e?e(t):t[0])})).current,i.current]}},184:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(30),o=r(0);function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object(o.useRef)(t);r.current=t;var i=Object(n.d)(),a=Object(o.useRef)(),c=Object(o.useRef)();if(Object(o.useEffect)((function(){c.current=null;var t=r.current[0],e=t.subscribe({next:function(e){if(t===r.current[0])return r.current[1]?r.current[1](e):void 0},error:function(e){if(t===r.current[0]){if(r.current[2])return c.current=null,r.current[2](e);c.current=e,i()}},complete:function(){if(t===r.current[0])return r.current[3]?r.current[3]():void 0}});return a.current=e,function(){e.unsubscribe()}}),[t[0]]),c.current)throw c.current;return a}},30:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"e",(function(){return s})),r.d(e,"d",(function(){return l}));var n=r(0),o=r(95),i=r(162);function a(t){return t}function c(t){return Object(i.a)(0)(t)}function u(){return new o.a}function s(t){var e=Object(n.useRef)(!0),r=Object(n.useRef)(null);return e.current&&(e.current=!1,r.current=t()),r}function l(){var t=Object(n.useState)(0)[1];return Object(n.useRef)((function(){return t(f)})).current}function f(t){return(t+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},43:function(t,e,r){"use strict";function n(t,e){return(t.tagName||"").toLowerCase()===e.toLowerCase()}r.d(e,"a",(function(){return n}))},5:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"g",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"f",(function(){return l})),r.d(e,"d",(function(){return p})),r.d(e,"e",(function(){return m})),r.d(e,"i",(function(){return h})),r.d(e,"j",(function(){return y})),r.d(e,"a",(function(){return g})),r.d(e,"c",(function(){return b}));var n=r(536),o=r.n(n),i=(r(0),r(120),r(184),r(10),r(388),r(646),r(43)),a=r(2);function c(){return Promise.reject(new Error("NO_RESULT"))}function u(){return Promise.reject(new Error("NETWORK_ERROR"))}async function s(t){return null==t||/zh-TW|zh-HK/i.test(t)?(await r.e(132).then(r.bind(null,1347))).chsToChz:null}function l(t,...e){if(!t)return"";let r="",n=null;for(let t=e.length-1;t>=0;t--)"string"==typeof e[t]?r=e[t]:"function"==typeof e[t]&&(n=e[t]);const o=r?t.querySelector(r):t;if(!o)return"";const i=o.textContent||"";return n?n(i):i}const f={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function d(t,{mode:e="innerHTML",selector:r,transform:n,host:c,config:u=f}={}){const s=r?t.querySelector(r):t;if(!s)return"";if(c){const t=t=>{t.getAttribute("href")&&t.setAttribute("href",b(c,t,"href")),t.getAttribute("src")&&t.setAttribute("src",b(c,t,"src")),Object(a.g)()&&t.getAttribute("srcset")&&t.setAttribute("srcset",t.getAttribute("srcset").replace(/(,| |^)\/\//g,(t,e)=>e+"https://"))};(Object(i.a)(s,"a")||Object(i.a)(s,"img"))&&t(s),s.querySelectorAll("a").forEach(t),s.querySelectorAll("img").forEach(t)}const l=o.a.sanitize(s,{...u,RETURN_DOM_FRAGMENT:!0}),d=l.firstChild?l.firstChild[e]:"";return n?n(d):d}function p(t,e,r={}){return d(e,"string"==typeof r?{selector:r,host:t,mode:"innerHTML"}:{...r,host:t,mode:"innerHTML"})}function m(t,e,r={}){return d(e,"string"==typeof r?{selector:r,host:t,mode:"outerHTML"}:{...r,host:t,mode:"outerHTML"})}function h(t,e){const r=t.querySelector(e);r&&r.remove()}function y(t,e){t.querySelectorAll(e).forEach(t=>t.remove())}function g(t){t.setAttribute("target","_blank"),t.setAttribute("rel","nofollow noopener noreferrer")}function b(t,e,r){t.endsWith("/")&&(t=t.slice(0,-1));const n=t.startsWith("https")?"https:":"http:",o=e.getAttribute(r);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?n+o:/^.?\/+/.test(o)?t+"/"+o.replace(/^.?\/+/,""):t+"/"+o:""}},536:function(t,e,r){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
t.exports=function(){"use strict";var t=Object.hasOwnProperty,e=Object.setPrototypeOf,r=Object.isFrozen,n=Object.keys,o=Object.freeze,i=Object.seal,a=Object.create,c="undefined"!=typeof Reflect&&Reflect,u=c.apply,s=c.construct;u||(u=function(t,e,r){return t.apply(e,r)}),o||(o=function(t){return t}),i||(i=function(t){return t}),s||(s=function(t,e){return new(Function.prototype.bind.apply(t,[null].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(e))))});var l=S(Array.prototype.forEach),f=S(Array.prototype.indexOf),d=S(Array.prototype.join),p=S(Array.prototype.pop),m=S(Array.prototype.push),h=S(Array.prototype.slice),y=S(String.prototype.toLowerCase),g=S(String.prototype.match),b=S(String.prototype.replace),v=S(String.prototype.indexOf),T=S(String.prototype.trim),A=S(RegExp.prototype.test),x=_(RegExp),O=_(TypeError);function S(t){return function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return u(t,e,n)}}function _(t){return function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return s(t,r)}}function w(t,n){e&&e(t,null);for(var o=n.length;o--;){var i=n[o];if("string"==typeof i){var a=y(i);a!==i&&(r(n)||(n[o]=a),i=a)}t[i]=!0}return t}function E(e){var r=a(null),n=void 0;for(n in e)u(t,e,[n])&&(r[n]=e[n]);return r}var R=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),M=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),N=o(["#text"]),D=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),j=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),C=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),H=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),F=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),z=i(/<%[\s\S]*|[\s\S]*%>/gm),I=i(/^data-[\-\w.\u00B7-\uFFFF]/),U=i(/^aria-[\-\w]+$/),q=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=i(/^(?:\w+script|data):/i),W=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function G(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var K=function(){return"undefined"==typeof window?null:window},V=function(t,e){if("object"!==(void 0===t?"undefined":B(t))||"function"!=typeof t.createPolicy)return null;var r=null;e.currentScript&&e.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=e.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return t.createPolicy(n,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),r=function(e){return t(e)};if(r.version="2.0.17",r.removed=[],!e||!e.document||9!==e.document.nodeType)return r.isSupported=!1,r;var i=e.document,a=!1,c=e.document,u=e.DocumentFragment,s=e.HTMLTemplateElement,S=e.Node,_=e.NodeFilter,Y=e.NamedNodeMap,$=void 0===Y?e.NamedNodeMap||e.MozNamedAttrMap:Y,X=e.Text,Z=e.Comment,J=e.DOMParser,Q=e.trustedTypes;if("function"==typeof s){var tt=c.createElement("template");tt.content&&tt.content.ownerDocument&&(c=tt.content.ownerDocument)}var et=V(Q,i),rt=et&&Ct?et.createHTML(""):"",nt=c,ot=nt.implementation,it=nt.createNodeIterator,at=nt.getElementsByTagName,ct=nt.createDocumentFragment,ut=i.importNode,st={};try{st=E(c).documentMode?c.documentMode:{}}catch(t){}var lt={};r.isSupported=ot&&void 0!==ot.createHTMLDocument&&9!==st;var ft=F,dt=z,pt=I,mt=U,ht=P,yt=W,gt=q,bt=null,vt=w({},[].concat(G(R),G(L),G(M),G(k),G(N))),Tt=null,At=w({},[].concat(G(D),G(j),G(C),G(H))),xt=null,Ot=null,St=!0,_t=!0,wt=!1,Et=!1,Rt=!1,Lt=!1,Mt=!1,kt=!1,Nt=!1,Dt=!1,jt=!1,Ct=!1,Ht=!0,Ft=!0,zt=!1,It={},Ut=w({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),qt=null,Pt=w({},["audio","video","img","source","image","track"]),Wt=null,Bt=w({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Gt=null,Kt=c.createElement("form"),Vt=function(t){Gt&&Gt===t||(t&&"object"===(void 0===t?"undefined":B(t))||(t={}),t=E(t),bt="ALLOWED_TAGS"in t?w({},t.ALLOWED_TAGS):vt,Tt="ALLOWED_ATTR"in t?w({},t.ALLOWED_ATTR):At,Wt="ADD_URI_SAFE_ATTR"in t?w(E(Bt),t.ADD_URI_SAFE_ATTR):Bt,qt="ADD_DATA_URI_TAGS"in t?w(E(Pt),t.ADD_DATA_URI_TAGS):Pt,xt="FORBID_TAGS"in t?w({},t.FORBID_TAGS):{},Ot="FORBID_ATTR"in t?w({},t.FORBID_ATTR):{},It="USE_PROFILES"in t&&t.USE_PROFILES,St=!1!==t.ALLOW_ARIA_ATTR,_t=!1!==t.ALLOW_DATA_ATTR,wt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Et=t.SAFE_FOR_JQUERY||!1,Rt=t.SAFE_FOR_TEMPLATES||!1,Lt=t.WHOLE_DOCUMENT||!1,Nt=t.RETURN_DOM||!1,Dt=t.RETURN_DOM_FRAGMENT||!1,jt=t.RETURN_DOM_IMPORT||!1,Ct=t.RETURN_TRUSTED_TYPE||!1,kt=t.FORCE_BODY||!1,Ht=!1!==t.SANITIZE_DOM,Ft=!1!==t.KEEP_CONTENT,zt=t.IN_PLACE||!1,gt=t.ALLOWED_URI_REGEXP||gt,Rt&&(_t=!1),Dt&&(Nt=!0),It&&(bt=w({},[].concat(G(N))),Tt=[],!0===It.html&&(w(bt,R),w(Tt,D)),!0===It.svg&&(w(bt,L),w(Tt,j),w(Tt,H)),!0===It.svgFilters&&(w(bt,M),w(Tt,j),w(Tt,H)),!0===It.mathMl&&(w(bt,k),w(Tt,C),w(Tt,H))),t.ADD_TAGS&&(bt===vt&&(bt=E(bt)),w(bt,t.ADD_TAGS)),t.ADD_ATTR&&(Tt===At&&(Tt=E(Tt)),w(Tt,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&w(Wt,t.ADD_URI_SAFE_ATTR),Ft&&(bt["#text"]=!0),Lt&&w(bt,["html","head","body"]),bt.table&&(w(bt,["tbody"]),delete xt.tbody),o&&o(t),Gt=t)},Yt=function(t){m(r.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){t.outerHTML=rt}},$t=function(t,e){try{m(r.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){m(r.removed,{attribute:null,from:e})}e.removeAttribute(t)},Xt=function(t){var e=void 0,r=void 0;if(kt)t="<remove></remove>"+t;else{var n=g(t,/^[\r\n\t ]+/);r=n&&n[0]}var o=et?et.createHTML(t):t;try{e=(new J).parseFromString(o,"text/html")}catch(t){}if(a&&w(xt,["title"]),!e||!e.documentElement){var i=(e=ot.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return t&&r&&e.body.insertBefore(c.createTextNode(r),e.body.childNodes[0]||null),at.call(e,Lt?"html":"body")[0]};r.isSupported&&function(){try{var t=Xt("<x/><title>&lt;/title&gt;&lt;img&gt;");A(/<\/title/,t.querySelector("title").innerHTML)&&(a=!0)}catch(t){}}();var Zt=function(t){return it.call(t.ownerDocument||t,t,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT,(function(){return _.FILTER_ACCEPT}),!1)},Jt=function(t){return!(t instanceof X||t instanceof Z||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof $&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI)},Qt=function(t){return"object"===(void 0===S?"undefined":B(S))?t instanceof S:t&&"object"===(void 0===t?"undefined":B(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},te=function(t,e,n){lt[t]&&l(lt[t],(function(t){t.call(r,e,n,Gt)}))},ee=function(t){var e=void 0;if(te("beforeSanitizeElements",t,null),Jt(t))return Yt(t),!0;if(g(t.nodeName,/[\u0080-\uFFFF]/))return Yt(t),!0;var n=y(t.nodeName);if(te("uponSanitizeElement",t,{tagName:n,allowedTags:bt}),("svg"===n||"math"===n)&&0!==t.querySelectorAll("p, br, form, table").length)return Yt(t),!0;if(!bt[n]||xt[n]){if(Ft&&!Ut[n]&&"function"==typeof t.insertAdjacentHTML)try{var o=t.innerHTML;t.insertAdjacentHTML("AfterEnd",et?et.createHTML(o):o)}catch(t){}return Yt(t),!0}return"noscript"===n&&A(/<\/noscript/i,t.innerHTML)||"noembed"===n&&A(/<\/noembed/i,t.innerHTML)?(Yt(t),!0):(!Et||Qt(t.firstElementChild)||Qt(t.content)&&Qt(t.content.firstElementChild)||!A(/</g,t.textContent)||(m(r.removed,{element:t.cloneNode()}),t.innerHTML?t.innerHTML=b(t.innerHTML,/</g,"&lt;"):t.innerHTML=b(t.textContent,/</g,"&lt;")),Rt&&3===t.nodeType&&(e=t.textContent,e=b(e,ft," "),e=b(e,dt," "),t.textContent!==e&&(m(r.removed,{element:t.cloneNode()}),t.textContent=e)),te("afterSanitizeElements",t,null),!1)},re=function(t,e,r){if(Ht&&("id"===e||"name"===e)&&(r in c||r in Kt))return!1;if(_t&&A(pt,e));else if(St&&A(mt,e));else{if(!Tt[e]||Ot[e])return!1;if(Wt[e]);else if(A(gt,b(r,yt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==v(r,"data:")||!qt[t])if(wt&&!A(ht,b(r,yt,"")));else if(r)return!1}return!0},ne=function(t){var e=void 0,o=void 0,i=void 0,a=void 0,c=void 0;te("beforeSanitizeAttributes",t,null);var u=t.attributes;if(u){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Tt};for(c=u.length;c--;){var l=e=u[c],m=l.name,g=l.namespaceURI;if(o=T(e.value),i=y(m),s.attrName=i,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,te("uponSanitizeAttribute",t,s),o=s.attrValue,!s.forceKeepAttr){if("name"===i&&"IMG"===t.nodeName&&u.id)a=u.id,u=h(u,[]),$t("id",t),$t(m,t),f(u,a)>c&&t.setAttribute("id",a.value);else{if("INPUT"===t.nodeName&&"type"===i&&"file"===o&&s.keepAttr&&(Tt[i]||!Ot[i]))continue;"id"===m&&t.setAttribute(m,""),$t(m,t)}if(s.keepAttr)if(Et&&A(/\/>/i,o))$t(m,t);else if(A(/svg|math/i,t.namespaceURI)&&A(x("</("+d(n(Ut),"|")+")","i"),o))$t(m,t);else{Rt&&(o=b(o,ft," "),o=b(o,dt," "));var v=t.nodeName.toLowerCase();if(re(v,i,o))try{g?t.setAttributeNS(g,m,o):t.setAttribute(m,o),p(r.removed)}catch(t){}}}}te("afterSanitizeAttributes",t,null)}},oe=function t(e){var r=void 0,n=Zt(e);for(te("beforeSanitizeShadowDOM",e,null);r=n.nextNode();)te("uponSanitizeShadowNode",r,null),ee(r)||(r.content instanceof u&&t(r.content),ne(r));te("afterSanitizeShadowDOM",e,null)};return r.sanitize=function(t,n){var o=void 0,a=void 0,c=void 0,s=void 0,l=void 0;if(t||(t="\x3c!--\x3e"),"string"!=typeof t&&!Qt(t)){if("function"!=typeof t.toString)throw O("toString is not a function");if("string"!=typeof(t=t.toString()))throw O("dirty is not a string, aborting")}if(!r.isSupported){if("object"===B(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof t)return e.toStaticHTML(t);if(Qt(t))return e.toStaticHTML(t.outerHTML)}return t}if(Mt||Vt(n),r.removed=[],"string"==typeof t&&(zt=!1),zt);else if(t instanceof S)1===(a=(o=Xt("\x3c!--\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Nt&&!Rt&&!Lt&&-1===t.indexOf("<"))return et&&Ct?et.createHTML(t):t;if(!(o=Xt(t)))return Nt?null:rt}o&&kt&&Yt(o.firstChild);for(var f=Zt(zt?t:o);c=f.nextNode();)3===c.nodeType&&c===s||ee(c)||(c.content instanceof u&&oe(c.content),ne(c),s=c);if(s=null,zt)return t;if(Nt){if(Dt)for(l=ct.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return jt&&(l=ut.call(i,l,!0)),l}var d=Lt?o.outerHTML:o.innerHTML;return Rt&&(d=b(d,ft," "),d=b(d,dt," ")),et&&Ct?et.createHTML(d):d},r.setConfig=function(t){Vt(t),Mt=!0},r.clearConfig=function(){Gt=null,Mt=!1},r.isValidAttribute=function(t,e,r){Gt||Vt({});var n=y(t),o=y(e);return re(n,o,r)},r.addHook=function(t,e){"function"==typeof e&&(lt[t]=lt[t]||[],m(lt[t],e))},r.removeHook=function(t){lt[t]&&p(lt[t])},r.removeHooks=function(t){lt[t]&&(lt[t]=[])},r.removeAllHooks=function(){lt={}},r}()}()},58:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a}));r(536);var n=r(87),o=r.n(n);function i(t,e={}){return o()(t,{withCredentials:!1,...e,transformResponse:[t=>t],responseType:"document"}).then(({data:t})=>t)}function a(t,e={}){return o()(t,{withCredentials:!1,...e,transformResponse:[t=>t],responseType:"text"}).then(({data:t})=>t)}},646:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(3),o=r(7);function i(){}var a=r(46);function c(t,e,r){return function(n){return n.lift(new u(t,e,r))}}var u=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.nextOrObserver,this.error,this.complete))},t}(),s=function(t){function e(e,r,n,o){var c=t.call(this,e)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=n||i,c._tapComplete=o||i,Object(a.a)(r)?(c._context=c,c._tapNext=r):r&&(c._context=r,c._tapNext=r.next||i,c._tapError=r.error||i,c._tapComplete=r.complete||i),c}return n.__extends(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(o.a)},877:function(t,e,r){"use strict";r.r(e),r.d(e,"getSrcPage",(function(){return i})),r.d(e,"search",(function(){return c}));var n=r(58),o=r(5);const i=t=>"https://dict.youdao.com/w/"+encodeURIComponent(t.replace(/\s+/g," ")),a="http://www.youdao.com",c=async(t,e,r,i)=>{const c=r.dicts.all.youdao.options,u=await Object(o.b)(e.langCode);return Object(n.a)("https://dict.youdao.com/w/"+encodeURIComponent(t.replace(/\s+/g," "))).catch(o.g).then(t=>function(t,e,r){const n=t.querySelector(".error-typo");if(!n)return function(t,e,r){const n={type:"lex",title:Object(o.f)(t,".keyword",r),stars:0,rank:Object(o.f)(t,".rank"),pattern:Object(o.f)(t,".pattern",r),prons:[],collins:[]},i={},c=t.querySelector(".star");c&&(n.stars=Number((c.className.match(/\d+/)||[0])[0]));t.querySelectorAll(".baav .pronounce").forEach(t=>{const e=t.textContent||"",r=t.querySelector(".dictvoice");if(r&&r.dataset.rel){const t="https://dict.youdao.com/dictvoice?audio="+r.dataset.rel;n.prons.push({phsym:e,url:t}),e.includes("英")?i.uk=t:e.includes("美")&&(i.us=t)}}),e.basic&&(n.basic=Object(o.d)(a,t,{selector:"#phrsListTab .trans-container",transform:r}));e.collins&&t.querySelectorAll("#collinsResult .wt-container").forEach(t=>{const e={title:"",content:""},i=t.querySelector(":scope > .title.trans-tip");i&&(Object(o.i)(i,".do-detail"),e.title=Object(o.f)(i),i.remove());const c=t.querySelector(".star");if(c){const t=/star(\d+)/.exec(String(c.className));if(t){const e=+t[1];let r="";for(let t=0;t<5;t++)r+=`<svg\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 426.67 426.67"\n              width="1em"\n              height="1em"\n              style="${4===t?"":"margin-right: 1px"}"\n            >\n              <path\n                fill=${t<e?"#FAC917":"#d1d8de"}\n                d="M213.33 10.44l65.92 133.58 147.42 21.42L320 269.4l25.17 146.83-131.84-69.32-131.85 69.34 25.2-146.82L0 165.45l147.4-21.42"\n              />\n            </svg>`;c.innerHTML=r}}e.content=Object(o.d)(a,t,{transform:r}),e.content&&n.collins.push(e)});e.discrimination&&(n.discrimination=Object(o.d)(a,t,{selector:"#discriminate",transform:r}));e.sentence&&(n.sentence=Object(o.d)(a,t,{selector:"#authority .ol",transform:r}));e.translation&&(n.translation=Object(o.d)(a,t,{selector:"#fanyiToggle .trans-container",transform:r}));if(n.title||n.translation)return{result:n,audio:i};return Object(o.h)()}(t,e,r);if(e.related)return{result:{type:"related",list:Object(o.d)(a,n,{transform:r})}};return Object(o.h)()}(t,c,u))}}}]);