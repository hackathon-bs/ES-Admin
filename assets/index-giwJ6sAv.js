import{B as y,Z as f,al as g,L as C,at as L,au as B,av as D,h as S,V as E,aj as R,H as I,y as m,J as K,o as i,p,w as h,c as s,C as o,a as x,W as A,K as $,G as l,f as O,e as w,n as V,t as Z,E as d,D as P}from"./index-D20LDPsR.js";var z=function(n){var t=n.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(t("drawer.background"),`;
    color: `).concat(t("drawer.color"),`;
    border: 1px solid `).concat(t("drawer.border.color"),`;
    box-shadow: `).concat(t("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(t("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(t("drawer.title.font.weight"),`;
    font-size: `).concat(t("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}
`)},M={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},T={mask:function(n){var t=n.instance,c=n.props,a=["left","right","top","bottom"],r=a.find(function(u){return u===c.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":c.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?"p-drawer-".concat(r):""]},root:function(n){var t=n.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},j=y.extend({name:"drawer",theme:z,classes:T,inlineStyles:M}),F={name:"BaseDrawer",extends:I,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:j,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},N={name:"Drawer",extends:F,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(n){n?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&f.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&f.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&g(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&f.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(a){return a&&a.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.$slots.footer&&n(this.footerContainer),t||(t=this.closeButton))),t&&C(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&L()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&B()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},footerContainerRef:function(n){this.footerContainer=n},closeButtonRef:function(n){this.closeButton=n?n.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:D},components:{Button:S,Portal:E,TimesIcon:R}},U=["aria-modal"];function X(e,n,t,c,a,r){var u=m("Button"),v=m("Portal"),b=K("focustrap");return i(),p(v,null,{default:h(function(){return[a.containerVisible?(i(),s("div",o({key:0,ref:r.maskRef,onMousedown:n[0]||(n[0]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[x(A,o({name:"p-drawer",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:h(function(){return[e.visible?$((i(),s("div",o({key:0,ref:r.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?l(e.$slots,"container",{key:0,closeCallback:r.hide}):(i(),s(O,{key:1},[w("div",o({ref:r.headerContainerRef,class:e.cx("header")},e.ptm("header")),[l(e.$slots,"header",{class:V(e.cx("title"))},function(){return[e.header?(i(),s("div",o({key:0,class:e.cx("title")},e.ptm("title")),Z(e.header),17)):d("",!0)]}),e.showCloseIcon?(i(),p(u,o({key:0,ref:r.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":r.closeAriaLabel,unstyled:e.unstyled,onClick:r.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:h(function(k){return[l(e.$slots,"closeicon",{},function(){return[(i(),p(P(e.closeIcon?"span":"TimesIcon"),o({class:[e.closeIcon,k.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):d("",!0)],16),w("div",o({ref:r.contentRef,class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(i(),s("div",o({key:0,ref:r.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):d("",!0)],64))],16,U)),[[b]]):d("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):d("",!0)]}),_:3})}N.render=X;export{N as s};
