(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[function(n,t,e){"use strict";e.d(t,"t",(function(){return a})),e.d(t,"j",(function(){return u})),e.d(t,"q",(function(){return c})),e.d(t,"s",(function(){return s})),e.d(t,"h",(function(){return f})),e.d(t,"i",(function(){return d})),e.d(t,"n",(function(){return g})),e.d(t,"k",(function(){return l})),e.d(t,"r",(function(){return m})),e.d(t,"e",(function(){return h})),e.d(t,"c",(function(){return p})),e.d(t,"z",(function(){return w})),e.d(t,"d",(function(){return b})),e.d(t,"l",(function(){return v})),e.d(t,"m",(function(){return y})),e.d(t,"o",(function(){return I})),e.d(t,"p",(function(){return k})),e.d(t,"w",(function(){return C})),e.d(t,"a",(function(){return x})),e.d(t,"v",(function(){return L})),e.d(t,"y",(function(){return A})),e.d(t,"u",(function(){return S})),e.d(t,"x",(function(){return U})),e.d(t,"B",(function(){return z})),e.d(t,"A",(function(){return j})),e.d(t,"f",(function(){return P})),e.d(t,"b",(function(){return O})),e.d(t,"g",(function(){return E})),e.d(t,"G",(function(){return B})),e.d(t,"C",(function(){return T})),e.d(t,"E",(function(){return $})),e.d(t,"D",(function(){return N})),e.d(t,"F",(function(){return D}));e(21),e(64);var r,i=e(117),o=e.n(i);const a="object"!=typeof window,u=!1,c=!0,s=!1,f=!1,d=f,g=!1,l=!0,m=!1,h="pro",p="edge",w="10.0.99",b="1676460789084",v=d||g||l||f||m,y=(d||g||l||m)&&!f,I=navigator.platform.indexOf("Mac")>=0,k=!1,C=c?"jiaocheng.inftab.com":"qzeuoq1yf.hn-bkt.clouddn.com",x="https://infinityicon.infinitynewtab.com/assets",L=c?"https://ws.infinitynewtab.com":"https://test-ws.infinitynewtab.com",A=c?"https://api.infinitynewtab.com/v2":"https://api-infinitynewtab-com.test690.com/v2",S=c?"https://api.infinitynewtab.com/privacy":"https://test-api.infinitynewtab.com/privacy",U="https://infinity-api.infinitynewtab.com",z=s?location.origin:c?"https://inftab.com":"https://test.inftab.com",j="https://weather-api.extfans.com",P="https://mail.google.com",O="https://suggestion.baidu.com",E="https://google.com",M=["cs","da","de","el","en","en-GB","en-US","es","es-419","fi","fr","hi","hu","id","it","ja","ko","ms","nl","no","pl","pt-BR","pt-PT","ro","ru","sk","sv","th","tr","uk","vi","zh-CN","zh-TW"],B=!!(null===(r=o.a.chrome)||void 0===r?void 0:r.abp),T=function(){if(s)return{baiduLabel:"Infinity新标签页web版",trackingId:"UA-202382853-4"};if(f)return{baiduLabel:"Infinity新标签页app版",trackingId:"UA-202382853-3"};if(v){if("pro"===h)return{baiduLabel:"Infinity新标签页pro版",trackingId:"UA-202382853-1"};if("basic"===h)return{baiduLabel:"Infinity新标签页basic版",trackingId:"UA-202382853-2"}}throw new Error("no ga info")}();function $(n="",t="_"){const e=n.split(t);return 2===e.length?(e[0]=e[0].toLowerCase(),e[1]=e[1].toUpperCase(),e.join(t)):n}function _(n){const t=$(n.replace("_","-"),"-");return M.includes(t)?t:"zh"===n||0===t.indexOf("zh-")?"zh-CN":"en-US"}const N={get lang(){return s?function(){if(!a){const n=localStorage.getItem("langCode");if(null!==localStorage.getItem("setLangCode")&&null!==n)return n}return _(navigator.language||"en-us")}():_(chrome.i18n.getUILanguage())},get extVersion(){return s?"web":chrome.runtime.getManifest().version},get extId(){return s?"web":chrome.runtime.id},get platform(){return s?"web":"edge"},get supportCookie(){return!m&&"safari"!==this.runtimePlatform},get runtimePlatform(){return B?"360":q().broswer},get platformVersion(){return q().version},get isZh(){return"zh-CN"===N.lang},get isEn(){return/^(en|en-GB|en-US)$/.test(N.lang)},get isWindows(){return/windows|win32/i.test(navigator.userAgent)},get isMac(){return-1!==navigator.platform.toLowerCase().indexOf("mac")},get vendor(){let n=p;return"web"===p&&(n=q().broswer),n.charAt(0).toUpperCase()+n.slice(1)}};function q(){const n={},t=navigator.userAgent.toLowerCase();let e;return(e=t.match(/edg\/([\d.]+)/i))?n.edge=e[1]:(e=t.match(/rv:([\d.]+)\) like gecko/))||(e=t.match(/msie ([\d.]+)/))?n.ie=e[1]:(e=t.match(/firefox\/([\d.]+)/))?n.firefox=e[1]:(e=t.match(/chrome\/([\d.]+)/))?n.chrome=e[1]:(e=t.match(/opera.([\d.]+)/))?n.opera=e[1]:(e=t.match(/version\/([\d.]+).*safari/))&&(n.safari=e[1]),n.edge?{broswer:"edge",version:n.edge}:n.ie?{broswer:"ie",version:n.ie}:n.firefox?{broswer:"firefox",version:n.firefox}:n.chrome?{broswer:"chrome",version:n.chrome}:n.opera?{broswer:"opera",version:n.opera}:n.safari?{broswer:"safari",version:n.safari}:{broswer:"none",version:"0"}}const D=()=>{const n=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];let e=!1;for(let r=0;r<t.length;r++)if(n.indexOf(t[r])>0){e=!0;break}try{document.createEvent("TouchEvent"),e=!0}catch(n){}return!e}},,function(n,t,e){"use strict";e.r(t),e.d(t,"i18n",(function(){return d})),e.d(t,"IS_ZH",(function(){return g})),e.d(t,"initMasterI18n",(function(){return l})),e.d(t,"initI18n",(function(){return m})),e.d(t,"setLangToLocal",(function(){return p})),e.d(t,"getLangFromLocal",(function(){return w}));var r=e(117),i=e.n(r),o=(e(11),e(14),e(21),e(64),e(8),e(0)),a=e(77),u=e.n(a),c=e(22),s=e.n(c);let f={};const d=function(n,t){var e;if(o.l&&!o.r)return chrome.i18n.getMessage(n,t)||n;if(o.s||o.r){if(o.r&&void 0===t)return chrome.i18n.getMessage(n,t)||n;const r=null===(e=f[n])||void 0===e?void 0:e.message,i=[];"string"==typeof t?i.push(t):Array.isArray(t)&&i.push(...t);const a=/(\$.+?\$)/g;let u=a.exec(r),c=r;for(;u;){let[n]=i.splice(0,1);void 0===n&&(n=""),c=c.replace(u[1],n),u=a.exec(r)}return c||n}return n};o.t?i.a.i18n=d:window.i18n=d;const g="zh-CN"===o.D.lang;async function l(){const n=await w();f=n}async function m(){if(!o.s&&!o.r)return;const{slave:n}=await Promise.all([e.e(27),e.e(33)]).then(e.bind(null,163)),t=o.D.lang;try{const e=await w(),r=localStorage.getItem("setLangCode"),i=localStorage.getItem("langCode");null!==r&&null!==e||i===t&&null!==e?(f=e,h(r?i:t)):await h(r?i:t),n.postTask("slave:master-init-i18n",f)}catch(n){}}async function h(n){const t=n.replace("-","_"),e=(await u.a.get(`${o.B}/_locales/${Object(o.E)(t)}/messages.json?v=1648693770916`)).data;Object.keys(e).length>50&&(f=e,localStorage.setItem("langCode",n),p(e))}function p(n){return s.a.setItem("current-language",n)}function w(){return s.a.getItem("current-language")}}]]);