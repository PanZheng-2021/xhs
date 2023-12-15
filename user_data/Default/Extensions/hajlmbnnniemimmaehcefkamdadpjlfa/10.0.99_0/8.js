(window.webpackJsonp=window.webpackJsonp||[]).push([[8,37,40],{163:function(t,e,n){"use strict";n.r(e),n.d(e,"slave",(function(){return r}));n(8),n(11),n(14),n(41);var i=n(6),s=n.n(i),a=n(276),o=n(59);const r=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new a.a,this.initChannel=()=>{"serviceworker"===o.b?this.initServiceworker():"background"===o.b&&this.initBackground()},this.awaitChannel=()=>new s.a(async(t,e)=>{"serviceworker"===o.b?this.channel?(await this.channel.active,await this.channel.controlling,t(null)):(this.initResolve.push(t),this.initReject.push(e)):"background"===o.b&&t(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:t}=await n.e(11).then(n.bind(null,615)),e=await t();if(!e)return;e.addEventListener("message",t=>{const{type:e,payload:n={}}=t.data;"master:bordcast-message"===e&&this.messageScheduler.execTask(n.type,n.payload)}),await e.active,await e.controlling,this.channel=e,this.initResolve.forEach(t=>{t()}),this.channel.postTask=this.channel.messageSW}catch(t){console.log("slave初始化错误：",t),this.initReject.forEach(t=>{t()})}},this.initBackground=()=>{this.channel={postTask:t=>new s.a((e,n)=>{chrome.runtime.sendMessage(t,t=>{chrome.runtime.lastError&&n(chrome.runtime.lastError),e(t)})})},chrome.runtime.onMessage.addListener(({type:t,payload:e,ignoreId:n})=>{"master:bordcast-message"===t?chrome.tabs.getCurrent(t=>{n!==t.id&&this.messageScheduler.execTask(e.type,e.payload)}):"slave:bordcast-message"===t&&this.messageScheduler.execTask(e.data.type,e.data.payload)})},o.a)throw new Error("it's not page");this.initChannel()}postTask(t,e,n){return new s.a(async(i,s)=>{let a=!1;await this.awaitChannel();const r=Object.assign(Object.assign(Object.assign({},o.d),{taskId:Object(o.c)()}),n);r.timeout&&setTimeout(()=>{a||i({error:"timeout"})},r.timeout);try{const n=await this.channel.postTask({type:t,payload:Object.assign({data:e},r)});a=!0,i(n)}catch(t){i({error:t})}})}listenMessage(t,e){this.messageScheduler.listenTask(t,e)}sendMessage(t,e=""){this.postTask("slave:bordcast-message",{type:t,payload:e})}}},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(11),n(14);class i{constructor(){this._events=new Map}listenTask(t,e){if("function"!=typeof e)return;this._events.has(t)||this._events.set(t,new Set);this._events.get(t).add(e)}execTask(t,e,...n){if(this._events.has(t)){const i=this._events.get(t);for(const t of i)t(e,...n)}}}},486:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(95),s=n(116);
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
const a=new WeakMap,o=Object(s.e)(t=>e=>{if(!(e instanceof s.b))throw new Error("unsafeHTML can only be used in text bindings");const n=a.get(e);if(void 0!==n&&Object(i.h)(t)&&t===n.value&&e.value===n.fragment)return;const o=document.createElement("template");o.innerHTML=t;const r=document.importNode(o.content,!0);e.setValue(r),a.set(e,{value:t,fragment:r})})},834:function(t,e,n){"use strict";n.r(e),n.d(e,"Imodal",(function(){return c}));n(11),n(14),n(8);var i=n(1),s=n(486),a=(n(522),n(17)),o=n(163),r=function(t,e,n,i){var s,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(a<3?s(o):a>3?s(e,n,o):s(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};let c=class extends i.a{constructor(){super(...arguments),this.step="loading"}showError(){this.step="error"}async reUpdate(){localStorage.removeItem("user-checkout-old-data"),localStorage.setItem("bg-updating",""+Date.now()),o.slave.sendMessage("tabs-reload"),a.a.send({key:"bg-update",data:"9.9.9"}),setTimeout(()=>{location.reload()},0)}async showRepair(){if(this.step=null,document.querySelector("i-updating").classList.add("hide"),localStorage.setItem("user-checkout-old-data","true"),localStorage.getItem("updating-manual"))return;const{pluginStore:t}=await n.e(35).then(n.bind(null,484));t.showRepair()}render(){return"loading"===this.step?i.e`
        <div class="step-loading">
          <img
            src="https://infinityicon.infinitynewtab.com/assets/updating.png?imageView2/2/w/490/format/webp/interlace/1"
            alt=""
          />
          <p>${i18n("bg_updating")}</p>
        </div>
      `:"error"===this.step?i.e`
        <div class="step-error">
          <infinito-modal style="--modal-padding:0;" .open=${!0} .closeable="${!1}">
            <div slot="body">
              <div class="content">
                <div class="tips">
                  <span> ${i18n("update_error_desc1")} </span>
                  <span>
                    ${Object(s.a)(i18n("update_error_desc2",'<img style="width:18px;height:18px;vertical-align: middle;" src="https://infinityicon.infinitynewtab.com/assets/btn-setting.png" alt="">'))}
                  </span>
                </div>
                <div class="btns">
                  <infinito-button @click="${this.reUpdate}" primary>${i18n("re_update")}</infinito-button>
                  <infinito-button @click="${this.showRepair}">${i18n("do_later")}</infinito-button>
                </div>
              </div>
            </div>
          </infinito-modal>
        </div>
      `:void 0}};c.styles=i.b`
    .step-loading,
    .step-error {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .step-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2b2b2c;
      z-index: 11111111;
    }

    .step-loading img {
      width: 245px;
      margin-bottom: 34px;
    }
    .step-loading p {
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .step-error infinito-modal {
      --modal-top: 50vh;
    }
    .step-error .content {
      width: 478px;
      box-sizing: border-box;
      padding: 28px 48px 30px;
    }
    .step-error .tips {
      font-size: 13px;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 20px;
    }
    .tips span {
      display: block;
    }
    .step-error .btns {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    infinito-button {
      min-width: 128px;
      height: 42px;
    }
    .step-error infinito-button:first-child {
      margin-right: 18px;
    }
  `,r([Object(i.g)({type:String})],c.prototype,"step",void 0),c=r([Object(i.c)("i-updating")],c)}}]);