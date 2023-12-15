(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{829:function(e,t,i){e.exports=i.p+"images/extension.9c1d873.png"},830:function(e,t,i){e.exports=i.p+"images/not_support.b1f9155.png"},841:function(e,t,i){"use strict";i.r(t),i.d(t,"SideExtension",(function(){return k}));i(11),i(14),i(41),i(21);var n=i(1),o=i(197),s=i(2),a=i(621),r=i(17),d=n.b`.container {
  height: calc(100% - var(--side-header-height));
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.container .list {
  flex: 1;
  padding-bottom: 20px;
}
.search {
  padding: var(--padding-length);
}
.t {
  margin: 0;
  margin-bottom: 5px;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
.t.app-t {
  margin: 5px 0;
}
/* <extension-item> */
.extension-item {
  transition: background 300ms;
}
.extension-item:focus-within {
  background: #f6f6f6;
}
.extension-item:hover {
  background: #f6f6f6;
}
.extension-item:hover i-dot-expanded {
  opacity: 1 !important;
}
.extension-item.close .body-panel {
  height: 0;
}
.extension-item.open {
  background: #f6f6f6;
}
.extension-item.extension-disabled .header-panel img {
  filter: grayscale(1);
  opacity: 0.5;
}
.extension-item.extension-disabled .header-panel img + div {
  opacity: 0.5;
}
.extension-item.app-item .header-panel .name:hover {
  color: #000;
}
.extension-item .header-panel {
  padding: 15px 30px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.extension-item .header-panel img {
  width: 30px;
  height: 30px;
}
.extension-item .header-panel img + div {
  flex: 1;
  margin: 0 10px;
}
.extension-item .header-panel .name {
  display: inline;
  margin: 0;
  font-size: 14px;
  color: #333;
  font-weight: 400;
}
.extension-item .header-panel .meta {
  font-size: 12px;
  color: #999;
  font-weight: 400;
}
.extension-item .body-panel {
  height: 0;
  overflow: hidden;
  padding-left: 40px;
}
.extension-item .body-panel.transition {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.extension-item .body-panel .body-item {
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 20px 0;
  color: #333;
  font-size: 12px;
}
.extension-item .body-panel .body-item:not(:last-child) {
  border-bottom: 1px solid #eaeaea;
}
.extension-item .body-panel .body-item.uninstall {
  padding: 11px 0;
  align-items: center;
}
.extension-item .body-panel .body-item > span {
  width: 80px;
  max-width: 80px;
  min-width: 80px;
  margin-right: 20px;
  word-break: break-all;
}
.extension-item .body-panel .body-item .icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #eee;
}
.extension-item .body-panel .body-item i-svg {
  width: 18px;
  height: 18px;
  margin: 0 auto;
  margin-top: 8px;
}
.extension-item .body-panel .body-item p {
  margin: 0;
  word-break: break-word;
}
.extension-item .body-panel .body-item .download-link {
  max-width: 100%;
  overflow: hidden;
  margin: 0;
  color: #0F7CFF;
  cursor: pointer;
  text-decoration: underline;
  transition: opacity 0.3 ease-in-out;
  word-break: break-word;
}
.extension-item .body-panel .body-item .download-link:hover {
  opacity: 0.8;
}
.extension-item .body-panel .authority div {
  display: flex;
}
.extension-item .body-panel .authority .desc {
  margin-left: 4px;
  color: #999;
}
.extension-item i-dot-expanded {
  --dot-hover: rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.3s;
  outline: none;
}
.extension-item i-dot-expanded:focus {
  opacity: 1;
  background: var(--dot-hover);
}
.extension-item i-dot-expanded.disabled:focus {
  background: none;
  opacity: 0;
}
:host(.active) .item {
  background: #f6f6f6;
}
`,l=i(630),p=i(264),c=i(0),h=i(36),m=i.n(h),x=(i(8),i(93)),g=i(385),b=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.a{constructor(){super(...arguments),this.store=l.a,this.data={},this.isTransition=!1}handleChange(e){const t=window.chrome.runtime.id;this.data.id!==t&&this.store.setEnabled(this.data.id,e)}uninstall(e){const t=window.chrome.runtime.id;this.data.id!==t&&this.store.uninstall(this.data.id)}downloadCrx(e){e.preventDefault(),e.stopPropagation();const{name:t,id:i,version:n,installType:o,updateUrl:s=""}=this.data;if("normal"!==o||!s)return x.message.error(i18n("cannot_download"));const a=navigator.userAgent.split("Chrome/")[1].split(" ")[0];let r=null;c.i&&(r=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${i}%26uc&prodversion=${a}`),c.n&&(r=`https://addons.mozilla.org/firefox/downloads/file/3455515/${t}-${n}-fx.xpi`),c.k&&(r=`https://edge.microsoft.com/extensionwebstorebase/v1/crx?response=redirect&os=mac&arch=x64&os_arch=x86_64&nacl_arch=x86-64&prod=chromiumcrx&prodchannel=&prodversion=86.0.622.51&lang=en-US&acceptformat=crx3&x=id%3D${i}%26installsource%3Dondemand%26uc`);const d=document.createElement("a");d.style.display="none",d.href=r,d.download=t+".crx",document.body.appendChild(d),d.click(),d.remove(),m.a.revokeObjectURL(r)}async handleToggle(e){await this.store.getPermissionWarningsById(e),await this.updateComplete,this.store.toggleOpen(e)}render(){const{name:e,version:t,icons:i,enabled:o,hostPermissions:s,id:a,isApp:r,open:d}=this.data,{permissionList:l}=this.store,p={"extension-item":!0,"extension-disabled":!o,"app-item":r,close:!1===d,open:!0===d};return n.e`
      <div class=${Object(g.a)(p)}>
        <div class="header-panel" @click=${()=>this.handleToggle(a)}>
          ${r?n.e`<img .src=${(null==i?void 0:i.length)?i[i.length-1].url:""} @click=${this.openApp} />`:n.e`<img .src=${(null==i?void 0:i.length)?i[i.length-1].url:""} />`}
          <div>
            ${r?n.e`<p class="name" @click=${this.openApp}>${e}</p>`:n.e`<p class="name">${e}</p>`}
            <div>
              <span class="meta">${t}</span>
            </div>
          </div>
          ${a===window.chrome.runtime.id?null:n.e`
                <i-dot-expanded tabindex="0">
                  ${r?n.e`
                        <li @click="${()=>this.handleChange(o)}">
                          ${o?i18n("disable_chrome_app"):i18n("open_chrome_app")}
                        </li>
                      `:n.e`
                        <li @click="${()=>this.handleChange(o)}">
                          ${o?i18n("disable_extension"):i18n("open_extension")}
                        </li>
                      `}
                  <li @click="${this.uninstall}">
                    ${r?i18n("uninstall_chrome_app"):i18n("uninstall_extension")}
                  </li>
                </i-dot-expanded>
              `}
        </div>
        <div class="body-panel" @click=${()=>this.handleToggle(a)}>
          <div class="body-item">
            <span>${i18n("download_crx")}</span>
            <p class="download-link" @click="${this.downloadCrx}">${e}.crx</p>
          </div>
          ${s.length?n.e`
                <div class="body-item">
                  <span>${i18n("host_permission")}</span>
                  <div>${s.map(e=>n.e`<p>${e}</p>`)}</div>
                </div>
              `:null}
          ${l.length?n.e`
                <div class="body-item">
                  <span>${i18n("permisson_label")}</span>
                  <div class="authority">${l.map(e=>n.e`<div><p>${e}</p></div> `)}</div>
                </div>
              `:null}
        </div>
      </div>
    `}openApp(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("on-open",{detail:{data:this.data},bubbles:!0,composed:!0}))}};u.styles=d,b([Object(n.g)({type:Object})],u.prototype,"data",void 0),b([Object(n.g)({type:Boolean})],u.prototype,"isTransition",void 0),b([Object(n.h)(".body-panel")],u.prototype,"bodyPanel",void 0),u=b([Object(n.c)("extension-item")],u);var v=i(829),f=i.n(v),y=i(830),w=i.n(y),$=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let k=class extends o.a{constructor(){super(...arguments),this.store=l.a,this.searchText=""}firstUpdated(){this.store.getAll(),window.chrome.management.onDisabled.addListener(()=>this.reset()),window.chrome.management.onEnabled.addListener(()=>this.reset()),window.chrome.management.onUninstalled.addListener(()=>this.reset()),window.chrome.management.onUninstalled.addListener(()=>this.reset())}updated(){const{compuList:e}=this.store;e.forEach((e,t)=>{const i=this.$lists[t].shadowRoot.querySelector(".body-panel");e.open?this.open(i):this.close(i)})}open(e){if(!e)return;e.classList.add("transition");e.addEventListener("transitionend",()=>{e.classList.remove("transition")},{once:!0}),e.style.height=e.scrollHeight+"px"}close(e){if(!e)return;e.classList.add("transition");e.addEventListener("transitionend",()=>{e.classList.remove("transition")},{once:!0}),e.style.height="0px"}reset(){this.searchText&&this.clear(),this.searchEle.clear(),this.store.getAll()}handleSearch(e){const t=e.detail.text;this.searchText=t,this.store.search(t)}clear(){this.searchText="",this.store.search("")}handleTabClose(){this.store.searchTxt&&(this.searchEle.clear(),this.clear()),this.store.toggleOpen()}handleTabOpen(){this.searchEle.focus()}afterShow(){this.handleTabOpen()}afterHide(){this.handleTabClose()}render(){const{searchTxt:e}=this.store;return n.e`
      <i-side2-header .title="${Object(s.i18n)("extension_mananger")}"></i-side2-header>
      <div class="container">
        ${c.n?n.e`
              <div class="empty">
                <img .src=${w.a} />
                <p>${Object(s.i18n)("current_browser_not_support")}</p>
              </div>
            `:n.e`
              <div class="search">
                <i-search
                  placeholder="${Object(s.i18n)("search_extension")}"
                  @i-search="${r.a.debounce(this.handleSearch,200)}"
                  @i-clear=${this.clear}
                >
                </i-search>
              </div>
              <div class="global-scrollbar list">
                ${e?this.renderSearch():n.e` ${this.renderExtension()} ${this.renderApp()} `}
              </div>
            `}
      </div>
    `}renderList(e){return n.e` ${e.map(e=>n.e` <extension-item .data=${e} data-id=${e.id}></extension-item> `)} `}renderSearch(){const e=this.store.searchList;return e.length?this.renderList(e):n.e`
        <div class="empty">
          <img .src=${f.a} />
          <p>${Object(s.i18n)("no_search_result")}</p>
        </div>
      `}renderExtension(){const{extensionList:e}=this.store;return e.length?n.e`
      <div>
        <h3 class="t">${Object(s.i18n)("extension_app")}</h3>
        <div class="main-list">${this.renderList(e)}</div>
      </div>
    `:null}renderApp(){const{appList:e}=this.store;return e.length?n.e`
      <div>
        <h3 class="t app-t">${Object(s.i18n)("app")}</h3>
        <div class="main-list">
          ${e.map(e=>n.e`<extension-item @on-open=${this.openApp} .data=${e}></extension-item>`)}
        </div>
      </div>
    `:null}openApp(e){const{type:t,appLaunchUrl:i,enabled:n,launchType:o,id:s}=e.detail.data;"hosted_app"===t&&"OPEN_AS_REGULAR_TAB"===o?n&&r.a.openUrl(i,a.settingStore.setting.link.icon,e):window.chrome.management.launchApp(s)}};k.styles=[p.a,d,n.b`
      :host {
        --padding-length: 30px;
        display: block;
        height: 100%;
        background-color: #fff;
      }
      .empty {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 126px;
      }
      img {
        width: 86px;
        height: 86px;
      }
      p {
        margin: 0;
        color: #999999;
        font-weight: 300;
      }
    `],$([Object(n.g)({type:String})],k.prototype,"searchText",void 0),$([Object(n.h)("i-search")],k.prototype,"searchEle",void 0),$([Object(n.i)("extension-item")],k.prototype,"$lists",void 0),k=$([Object(n.c)("side-extension")],k)}}]);