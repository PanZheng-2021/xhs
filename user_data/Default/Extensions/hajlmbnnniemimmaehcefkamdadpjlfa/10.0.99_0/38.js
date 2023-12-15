(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{485:function(t,o,e){"use strict";e.r(o),e.d(o,"IConfirm",(function(){return a}));e(11),e(14),e(8);var i=e(1),n=i.b`.container {
  height: 100%;
  z-index: 100001;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.container[hidden] {
  display: none;
}
.container .top,
.container .bottom {
  flex-grow: 1;
}
.container .bottom {
  height: var(--modal-top, 15vh);
}
.body {
  width: 360px;
  min-height: 200px;
  padding: 30px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.18);
  border-radius: 6px;
}
.title,
.text {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
.title {
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 30px;
}
.footer {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.footer infinito-button {
  width: 120px;
  height: 42px;
  --hover-color: #eee;
  --hover-font-color: #000;
}
.footer infinito-button[primary] {
  --hover-color: #000;
  --hover-font-color: #fff;
}
.footer infinito-button:not(:last-of-type) {
  margin-right: 20px;
}
`,r=function(t,o,e,i){var n,r=arguments.length,s=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(o,e,s):n(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};let s=null,a=class extends i.a{constructor(){super(...arguments),this.defaultData={title:i18n("info"),text:"",onCancel:()=>{},onConfirm:()=>{}},this.show=!1,this.title=this.defaultData.title,this.text=this.defaultData.text,this.onCancel=()=>{},this.onConfirm=()=>{}}static create(){if(s)return s;const t=document.body;return s=document.createElement("i-confirm"),t.appendChild(s),s}firstUpdated(){}async performUpdate(){super.performUpdate()}shouldUpdate(t){return!t.has("show")||!1!==this.show||(setTimeout(()=>{this.requestUpdate()},1),!1)}updated(t){t.has("show")&&this.show&&(this.$container.animate([{opacity:"0"},{opacity:"1"}],{duration:300,easing:"ease-in"}),this.$body.animate([{opacity:"0",transform:"scale(0.8)"},{opacity:"1",transform:"none"}],{duration:300,easing:"ease-in"}))}toShow(t){this.show=!0;const o=Object.assign(Object.assign({},this.defaultData),t);this.title=o.title,this.text=o.text,this.onCancel=o.onCancel,this.onConfirm=o.onConfirm}toHide(){this.show=!1}render(){return i.e`
      <div class="container" .hidden="${!this.show}">
        <div class="top"></div>
        <section class="body">
          <div class="title">${this.title}</div>
          <div class="text">${this.text}</div>
          <div class="footer">
            <infinito-button
              @click="${()=>{this.toHide(),this.onCancel()}}"
            >${i18n("cancel")}</infinito-button>
            <infinito-button
              @click="${()=>{this.toHide(),this.onConfirm()}}"
              primary
            >${i18n("confirm")}</infinito-button>
          </div>
        </section>
        <div class="bottom"></div>
      </div>
    `}};a.styles=n,r([Object(i.g)({type:Boolean})],a.prototype,"show",void 0),r([Object(i.g)({type:String})],a.prototype,"title",void 0),r([Object(i.g)({type:String})],a.prototype,"text",void 0),r([Object(i.g)({attribute:!1})],a.prototype,"onCancel",void 0),r([Object(i.g)({attribute:!1})],a.prototype,"onConfirm",void 0),r([Object(i.h)(".container")],a.prototype,"$container",void 0),r([Object(i.h)(".body")],a.prototype,"$body",void 0),a=r([Object(i.c)("i-confirm")],a)}}]);