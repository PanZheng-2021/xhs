(window.saladictEntry=window.saladictEntry||[]).push([[39],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(30);function i(e,t){var n=Object(o.e)(o.a),i=Object(o.e)((function(){return e(n.current)}));return[Object(r.useRef)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.current.next(t?t(e):e[0])})).current,i.current]}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(30),o=n(0);function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object(o.useRef)(e);n.current=e;var i=Object(r.d)(),c=Object(o.useRef)(),a=Object(o.useRef)();if(Object(o.useEffect)((function(){a.current=null;var e=n.current[0],t=e.subscribe({next:function(t){if(e===n.current[0])return n.current[1]?n.current[1](t):void 0},error:function(t){if(e===n.current[0]){if(n.current[2])return a.current=null,n.current[2](t);a.current=t,i()}},complete:function(){if(e===n.current[0])return n.current[3]?n.current[3]():void 0}});return c.current=t,function(){t.unsubscribe()}}),[e[0]]),a.current)throw a.current;return c}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(0),o=n(95),i=n(162);function c(e){return e}function a(e){return Object(i.a)(0)(e)}function l(){return new o.a}function u(e){var t=Object(r.useRef)(!0),n=Object(r.useRef)(null);return t.current&&(t.current=!1,n.current=e()),n}function s(){var e=Object(r.useState)(0)[1];return Object(r.useRef)((function(){return e(f)})).current}function f(e){return(e+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect},43:function(e,t,n){"use strict";function r(e,t){return(e.tagName||"").toLowerCase()===t.toLowerCase()}n.d(t,"a",(function(){return r}))},5:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return y})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return b}));var r=n(536),o=n.n(r),i=(n(0),n(120),n(184),n(10),n(388),n(646),n(43)),c=n(2);function a(){return Promise.reject(new Error("NO_RESULT"))}function l(){return Promise.reject(new Error("NETWORK_ERROR"))}async function u(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await n.e(132).then(n.bind(null,1347))).chsToChz:null}function s(e,...t){if(!e)return"";let n="",r=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?n=t[e]:"function"==typeof t[e]&&(r=t[e]);const o=n?e.querySelector(n):e;if(!o)return"";const i=o.textContent||"";return r?r(i):i}const f={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function d(e,{mode:t="innerHTML",selector:n,transform:r,host:a,config:l=f}={}){const u=n?e.querySelector(n):e;if(!u)return"";if(a){const e=e=>{e.getAttribute("href")&&e.setAttribute("href",b(a,e,"href")),e.getAttribute("src")&&e.setAttribute("src",b(a,e,"src")),Object(c.g)()&&e.getAttribute("srcset")&&e.setAttribute("srcset",e.getAttribute("srcset").replace(/(,| |^)\/\//g,(e,t)=>t+"https://"))};(Object(i.a)(u,"a")||Object(i.a)(u,"img"))&&e(u),u.querySelectorAll("a").forEach(e),u.querySelectorAll("img").forEach(e)}const s=o.a.sanitize(u,{...l,RETURN_DOM_FRAGMENT:!0}),d=s.firstChild?s.firstChild[t]:"";return r?r(d):d}function p(e,t,n={}){return d(t,"string"==typeof n?{selector:n,host:e,mode:"innerHTML"}:{...n,host:e,mode:"innerHTML"})}function m(e,t,n={}){return d(t,"string"==typeof n?{selector:n,host:e,mode:"outerHTML"}:{...n,host:e,mode:"outerHTML"})}function h(e,t){const n=e.querySelector(t);n&&n.remove()}function y(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function g(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function b(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1));const r=e.startsWith("https")?"https:":"http:",o=t.getAttribute(n);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?r+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}},536:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.keys,o=Object.freeze,i=Object.seal,c=Object.create,a="undefined"!=typeof Reflect&&Reflect,l=a.apply,u=a.construct;l||(l=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var s=S(Array.prototype.forEach),f=S(Array.prototype.indexOf),d=S(Array.prototype.join),p=S(Array.prototype.pop),m=S(Array.prototype.push),h=S(Array.prototype.slice),y=S(String.prototype.toLowerCase),g=S(String.prototype.match),b=S(String.prototype.replace),_=S(String.prototype.indexOf),v=S(String.prototype.trim),A=S(RegExp.prototype.test),T=x(RegExp),O=x(TypeError);function S(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function x(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return u(e,n)}}function E(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var c=y(i);c!==i&&(n(r)||(r[o]=c),i=c)}e[i]=!0}return e}function w(t){var n=c(null),r=void 0;for(r in t)l(e,t,[r])&&(n[r]=t[r]);return n}var L=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),k=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),N=o(["#text"]),j=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),D=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),C=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),H=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),F=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),z=i(/<%[\s\S]*|[\s\S]*%>/gm),q=i(/^data-[\-\w.\u00B7-\uFFFF]/),I=i(/^aria-[\-\w]+$/),U=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=i(/^(?:\w+script|data):/i),W=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function G(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var V=function(){return"undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":B(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),n=function(t){return e(t)};if(n.version="2.0.17",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,c=!1,a=t.document,l=t.DocumentFragment,u=t.HTMLTemplateElement,S=t.Node,x=t.NodeFilter,Y=t.NamedNodeMap,$=void 0===Y?t.NamedNodeMap||t.MozNamedAttrMap:Y,X=t.Text,Z=t.Comment,J=t.DOMParser,Q=t.trustedTypes;if("function"==typeof u){var ee=a.createElement("template");ee.content&&ee.content.ownerDocument&&(a=ee.content.ownerDocument)}var te=K(Q,i),ne=te&&Ce?te.createHTML(""):"",re=a,oe=re.implementation,ie=re.createNodeIterator,ce=re.getElementsByTagName,ae=re.createDocumentFragment,le=i.importNode,ue={};try{ue=w(a).documentMode?a.documentMode:{}}catch(e){}var se={};n.isSupported=oe&&void 0!==oe.createHTMLDocument&&9!==ue;var fe=F,de=z,pe=q,me=I,he=P,ye=W,ge=U,be=null,_e=E({},[].concat(G(L),G(R),G(k),G(M),G(N))),ve=null,Ae=E({},[].concat(G(j),G(D),G(C),G(H))),Te=null,Oe=null,Se=!0,xe=!0,Ee=!1,we=!1,Le=!1,Re=!1,ke=!1,Me=!1,Ne=!1,je=!1,De=!1,Ce=!1,He=!0,Fe=!0,ze=!1,qe={},Ie=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ue=null,Pe=E({},["audio","video","img","source","image","track"]),We=null,Be=E({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ge=null,Ve=a.createElement("form"),Ke=function(e){Ge&&Ge===e||(e&&"object"===(void 0===e?"undefined":B(e))||(e={}),e=w(e),be="ALLOWED_TAGS"in e?E({},e.ALLOWED_TAGS):_e,ve="ALLOWED_ATTR"in e?E({},e.ALLOWED_ATTR):Ae,We="ADD_URI_SAFE_ATTR"in e?E(w(Be),e.ADD_URI_SAFE_ATTR):Be,Ue="ADD_DATA_URI_TAGS"in e?E(w(Pe),e.ADD_DATA_URI_TAGS):Pe,Te="FORBID_TAGS"in e?E({},e.FORBID_TAGS):{},Oe="FORBID_ATTR"in e?E({},e.FORBID_ATTR):{},qe="USE_PROFILES"in e&&e.USE_PROFILES,Se=!1!==e.ALLOW_ARIA_ATTR,xe=!1!==e.ALLOW_DATA_ATTR,Ee=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=e.SAFE_FOR_JQUERY||!1,Le=e.SAFE_FOR_TEMPLATES||!1,Re=e.WHOLE_DOCUMENT||!1,Ne=e.RETURN_DOM||!1,je=e.RETURN_DOM_FRAGMENT||!1,De=e.RETURN_DOM_IMPORT||!1,Ce=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Fe=!1!==e.KEEP_CONTENT,ze=e.IN_PLACE||!1,ge=e.ALLOWED_URI_REGEXP||ge,Le&&(xe=!1),je&&(Ne=!0),qe&&(be=E({},[].concat(G(N))),ve=[],!0===qe.html&&(E(be,L),E(ve,j)),!0===qe.svg&&(E(be,R),E(ve,D),E(ve,H)),!0===qe.svgFilters&&(E(be,k),E(ve,D),E(ve,H)),!0===qe.mathMl&&(E(be,M),E(ve,C),E(ve,H))),e.ADD_TAGS&&(be===_e&&(be=w(be)),E(be,e.ADD_TAGS)),e.ADD_ATTR&&(ve===Ae&&(ve=w(ve)),E(ve,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&E(We,e.ADD_URI_SAFE_ATTR),Fe&&(be["#text"]=!0),Re&&E(be,["html","head","body"]),be.table&&(E(be,["tbody"]),delete Te.tbody),o&&o(e),Ge=e)},Ye=function(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},$e=function(e,t){try{m(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Xe=function(e){var t=void 0,n=void 0;if(Me)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=te?te.createHTML(e):e;try{t=(new J).parseFromString(o,"text/html")}catch(e){}if(c&&E(Te,["title"]),!t||!t.documentElement){var i=(t=oe.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&n&&t.body.insertBefore(a.createTextNode(n),t.body.childNodes[0]||null),ce.call(t,Re?"html":"body")[0]};n.isSupported&&function(){try{var e=Xe("<x/><title>&lt;/title&gt;&lt;img&gt;");A(/<\/title/,e.querySelector("title").innerHTML)&&(c=!0)}catch(e){}}();var Ze=function(e){return ie.call(e.ownerDocument||e,e,x.SHOW_ELEMENT|x.SHOW_COMMENT|x.SHOW_TEXT,(function(){return x.FILTER_ACCEPT}),!1)},Je=function(e){return!(e instanceof X||e instanceof Z||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof $&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Qe=function(e){return"object"===(void 0===S?"undefined":B(S))?e instanceof S:e&&"object"===(void 0===e?"undefined":B(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},et=function(e,t,r){se[e]&&s(se[e],(function(e){e.call(n,t,r,Ge)}))},tt=function(e){var t=void 0;if(et("beforeSanitizeElements",e,null),Je(e))return Ye(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return Ye(e),!0;var r=y(e.nodeName);if(et("uponSanitizeElement",e,{tagName:r,allowedTags:be}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br, form, table").length)return Ye(e),!0;if(!be[r]||Te[r]){if(Fe&&!Ie[r]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(e){}return Ye(e),!0}return"noscript"===r&&A(/<\/noscript/i,e.innerHTML)||"noembed"===r&&A(/<\/noembed/i,e.innerHTML)?(Ye(e),!0):(!we||Qe(e.firstElementChild)||Qe(e.content)&&Qe(e.content.firstElementChild)||!A(/</g,e.textContent)||(m(n.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=b(e.innerHTML,/</g,"&lt;"):e.innerHTML=b(e.textContent,/</g,"&lt;")),Le&&3===e.nodeType&&(t=e.textContent,t=b(t,fe," "),t=b(t,de," "),e.textContent!==t&&(m(n.removed,{element:e.cloneNode()}),e.textContent=t)),et("afterSanitizeElements",e,null),!1)},nt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in a||n in Ve))return!1;if(xe&&A(pe,t));else if(Se&&A(me,t));else{if(!ve[t]||Oe[t])return!1;if(We[t]);else if(A(ge,b(n,ye,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!Ue[e])if(Ee&&!A(he,b(n,ye,"")));else if(n)return!1}return!0},rt=function(e){var t=void 0,o=void 0,i=void 0,c=void 0,a=void 0;et("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve};for(a=l.length;a--;){var s=t=l[a],m=s.name,g=s.namespaceURI;if(o=v(t.value),i=y(m),u.attrName=i,u.attrValue=o,u.keepAttr=!0,u.forceKeepAttr=void 0,et("uponSanitizeAttribute",e,u),o=u.attrValue,!u.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&l.id)c=l.id,l=h(l,[]),$e("id",e),$e(m,e),f(l,c)>a&&e.setAttribute("id",c.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&u.keepAttr&&(ve[i]||!Oe[i]))continue;"id"===m&&e.setAttribute(m,""),$e(m,e)}if(u.keepAttr)if(we&&A(/\/>/i,o))$e(m,e);else if(A(/svg|math/i,e.namespaceURI)&&A(T("</("+d(r(Ie),"|")+")","i"),o))$e(m,e);else{Le&&(o=b(o,fe," "),o=b(o,de," "));var _=e.nodeName.toLowerCase();if(nt(_,i,o))try{g?e.setAttributeNS(g,m,o):e.setAttribute(m,o),p(n.removed)}catch(e){}}}}et("afterSanitizeAttributes",e,null)}},ot=function e(t){var n=void 0,r=Ze(t);for(et("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)et("uponSanitizeShadowNode",n,null),tt(n)||(n.content instanceof l&&e(n.content),rt(n));et("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var o=void 0,c=void 0,a=void 0,u=void 0,s=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Qe(e)){if("function"!=typeof e.toString)throw O("toString is not a function");if("string"!=typeof(e=e.toString()))throw O("dirty is not a string, aborting")}if(!n.isSupported){if("object"===B(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Qe(e))return t.toStaticHTML(e.outerHTML)}return e}if(ke||Ke(r),n.removed=[],"string"==typeof e&&(ze=!1),ze);else if(e instanceof S)1===(c=(o=Xe("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?o=c:o.appendChild(c);else{if(!Ne&&!Le&&!Re&&-1===e.indexOf("<"))return te&&Ce?te.createHTML(e):e;if(!(o=Xe(e)))return Ne?null:ne}o&&Me&&Ye(o.firstChild);for(var f=Ze(ze?e:o);a=f.nextNode();)3===a.nodeType&&a===u||tt(a)||(a.content instanceof l&&ot(a.content),rt(a),u=a);if(u=null,ze)return e;if(Ne){if(je)for(s=ae.call(o.ownerDocument);o.firstChild;)s.appendChild(o.firstChild);else s=o;return De&&(s=le.call(i,s,!0)),s}var d=Re?o.outerHTML:o.innerHTML;return Le&&(d=b(d,fe," "),d=b(d,de," ")),te&&Ce?te.createHTML(d):d},n.setConfig=function(e){Ke(e),ke=!0},n.clearConfig=function(){Ge=null,ke=!1},n.isValidAttribute=function(e,t,n){Ge||Ke({});var r=y(e),o=y(t);return nt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(se[e]=se[e]||[],m(se[e],t))},n.removeHook=function(e){se[e]&&p(se[e])},n.removeHooks=function(e){se[e]&&(se[e]=[])},n.removeAllHooks=function(){se={}},n}()}()},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));n(536);var r=n(87),o=n.n(r);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function c(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),o=n(7);function i(){}var c=n(46);function a(e,t,n){return function(r){return r.lift(new l(e,t,n))}}var l=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.nextOrObserver,this.error,this.complete))},e}(),u=function(e){function t(t,n,r,o){var a=e.call(this,t)||this;return a._tapNext=i,a._tapError=i,a._tapComplete=i,a._tapError=r||i,a._tapComplete=o||i,Object(c.a)(n)?(a._context=a,a._tapNext=n):n&&(a._context=n,a._tapNext=n.next||i,a._tapError=n.error||i,a._tapComplete=n.complete||i),a}return r.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},843:function(e,t,n){"use strict";n.r(t),n.d(t,"getSrcPage",(function(){return i})),n.d(t,"search",(function(){return a}));var r=n(58),o=n(5);const i=e=>"https://cn.bing.com/dict/search?q="+encodeURIComponent(e.replace(/\s+/g," ")),c="https://cn.bing.com",a=(e,t,n,i)=>{const a=n.dicts.all.bing;return Object(r.a)("https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q="+encodeURIComponent(e.replace(/\s+/g," "))).catch(o.g).then(async e=>{const n=await Object(o.b)(t.langCode);return e.querySelector(".client_def_hd_hd")?function(e,t,n){const r={result:{type:"lex",title:Object(o.f)(e,".client_def_hd_hd",n)}};if(t.phsym){const t=Array.from(e.querySelectorAll(".client_def_hd_pn_list"));t.length>0&&(r.result.phsym=t.map(e=>{let t="";const n=e.querySelector(".client_aud_o");return n&&(t=((n.getAttribute("onclick")||"").match(/https.*\.mp3/)||[""])[0]),{lang:Object(o.f)(e,".client_def_hd_pn"),pron:t}}),r.audio=r.result.phsym.reduce((e,{lang:t,pron:n})=>(/us|美/i.test(t)?e.us=n:/uk|英/i.test(t)&&(e.uk=n),e),{}))}if(t.cdef){const t=e.querySelector(".client_def_container");if(t){const e=Array.from(t.querySelectorAll(".client_def_bar"));e.length>0&&(r.result.cdef=e.map(e=>({pos:Object(o.f)(e,".client_def_title_bar",n),def:Object(o.f)(e,".client_def_list",n)})))}}if(t.tense){const t=Array.from(e.querySelectorAll(".client_word_change_word"));t.length>0&&(r.result.infs=t.map(e=>(e.textContent||"").trim()))}if(t.sentence>0){const i=e.querySelectorAll(".client_sentence_list"),a=[];for(let e=0;e<i.length&&a.length<t.sentence;e++){const t=i[e];let r="";const l=t.querySelector(".client_aud_o");l&&(r=((l.getAttribute("onclick")||"").match(/https.*\.mp3/)||[""])[0]),t.querySelectorAll(".client_sen_en_word").forEach(e=>{e.outerHTML=Object(o.f)(e)}),t.querySelectorAll(".client_sen_cn_word").forEach(e=>{e.outerHTML=Object(o.f)(e,n)}),t.querySelectorAll(".client_sentence_search").forEach(e=>{e.outerHTML=`<span class="dictBing-SentenceItem_HL">${Object(o.f)(e)}</span>`}),a.push({en:Object(o.d)(c,t,".client_sen_en"),chs:Object(o.d)(c,t,{selector:".client_sen_cn",transform:n}),source:Object(o.f)(t,".client_sentence_list_link"),mp3:r})}r.result.sentences=a}if(Object.keys(r.result).length>2)return r;return Object(o.h)()}(e,a.options,n):e.querySelector(".client_trans_head")?function(e,t){const n=Object(o.f)(e,".client_sen_cn",t);if(n)return{result:{type:"machine",mt:n}};return Object(o.h)()}(e,n):a.options.related&&e.querySelector(".client_do_you_mean_title_bar")?function(e,t,n){const r={result:{type:"related",title:Object(o.f)(e,".client_do_you_mean_title_bar",n),defs:[]}};if(e.querySelectorAll(".client_do_you_mean_area").forEach(e=>{const t=e.querySelectorAll(".client_do_you_mean_list");t.length>0&&r.result.defs.push({title:Object(o.f)(e,".client_do_you_mean_title",n),meanings:Array.from(t).map(e=>{const t=Object(o.f)(e,".client_do_you_mean_list_word",n);return{href:"https://cn.bing.com/dict/search?q="+t,word:t,def:Object(o.f)(e,".client_do_you_mean_list_def",n)}})})}),r.result.defs.length>0)return r;return Object(o.h)()}(e,0,n):Object(o.h)()})}}}]);