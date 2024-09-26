import{b8 as de,b9 as ot,bc as me}from"./index-D5KG-ND6.js";var S="top",T="bottom",$="right",z="left",jt="auto",lt=[S,T,$,z],Q="start",st="end",ue="clippingParents",Qt="viewport",it="popper",ve="reference",Ft=lt.reduce(function(t,e){return t.concat([e+"-"+Q,e+"-"+st])},[]),Zt=[].concat(lt,[jt]).reduce(function(t,e){return t.concat([e,e+"-"+Q,e+"-"+st])},[]),be="beforeRead",ge="read",he="afterRead",ye="beforeMain",xe="main",we="afterMain",Oe="beforeWrite",ke="write",Ee="afterWrite",Ae=[be,ge,he,ye,xe,we,Oe,ke,Ee];function H(t){return t?(t.nodeName||"").toLowerCase():null}function B(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=B(t).Element;return t instanceof e||t instanceof Element}function R(t){var e=B(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var e=B(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function je(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},i=e.attributes[r]||{},a=e.elements[r];!R(a)||!H(a)||(Object.assign(a.style,o),Object.keys(i).forEach(function(l){var s=i[l];s===!1?a.removeAttribute(l):a.setAttribute(l,s===!0?"":s)}))})}function Pe(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var i=e.elements[o],a=e.attributes[o]||{},l=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),s=l.reduce(function(n,c){return n[c]="",n},{});!R(i)||!H(i)||(Object.assign(i.style,s),Object.keys(a).forEach(function(n){i.removeAttribute(n)}))})}}const De={name:"applyStyles",enabled:!0,phase:"write",fn:je,effect:Pe,requires:["computeStyles"]};function W(t){return t.split("-")[0]}var G=Math.max,ht=Math.min,Z=Math.round;function Et(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function _t(){return!/^((?!chrome|android).)*safari/i.test(Et())}function _(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),i=1,a=1;e&&R(t)&&(i=t.offsetWidth>0&&Z(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&Z(o.height)/t.offsetHeight||1);var l=J(t)?B(t):window,s=l.visualViewport,n=!_t()&&r,c=(o.left+(n&&s?s.offsetLeft:0))/i,p=(o.top+(n&&s?s.offsetTop:0))/a,v=o.width/i,h=o.height/a;return{width:v,height:h,top:p,right:c+v,bottom:p+h,left:c,x:c,y:p}}function Dt(t){var e=_(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function te(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Pt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function N(t){return B(t).getComputedStyle(t)}function Se(t){return["table","td","th"].indexOf(H(t))>=0}function F(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function yt(t){return H(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||F(t)}function It(t){return!R(t)||N(t).position==="fixed"?null:t.offsetParent}function ze(t){var e=/firefox/i.test(Et()),r=/Trident/i.test(Et());if(r&&R(t)){var o=N(t);if(o.position==="fixed")return null}var i=yt(t);for(Pt(i)&&(i=i.host);R(i)&&["html","body"].indexOf(H(i))<0;){var a=N(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function ct(t){for(var e=B(t),r=It(t);r&&Se(r)&&N(r).position==="static";)r=It(r);return r&&(H(r)==="html"||H(r)==="body"&&N(r).position==="static")?e:r||ze(t)||e}function St(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function at(t,e,r){return G(t,ht(e,r))}function Ce(t,e,r){var o=at(t,e,r);return o>r?r:o}function ee(){return{top:0,right:0,bottom:0,left:0}}function re(t){return Object.assign({},ee(),t)}function oe(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Be=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,re(typeof e!="number"?e:oe(e,lt))};function Re(t){var e,r=t.state,o=t.name,i=t.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,s=W(r.placement),n=St(s),c=[z,$].indexOf(s)>=0,p=c?"height":"width";if(!(!a||!l)){var v=Be(i.padding,r),h=Dt(a),f=n==="y"?S:z,x=n==="y"?T:$,u=r.rects.reference[p]+r.rects.reference[n]-l[n]-r.rects.popper[p],m=l[n]-r.rects.reference[n],y=ct(a),O=y?n==="y"?y.clientHeight||0:y.clientWidth||0:0,k=u/2-m/2,d=v[f],b=O-h[p]-v[x],g=O/2-h[p]/2+k,w=at(d,g,b),j=n;r.modifiersData[o]=(e={},e[j]=w,e.centerOffset=w-g,e)}}function Te(t){var e=t.state,r=t.options,o=r.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||te(e.elements.popper,i)&&(e.elements.arrow=i))}const $e={name:"arrow",enabled:!0,phase:"main",fn:Re,effect:Te,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(t){return t.split("-")[1]}var Le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Me(t,e){var r=t.x,o=t.y,i=e.devicePixelRatio||1;return{x:Z(r*i)/i||0,y:Z(o*i)/i||0}}function Xt(t){var e,r=t.popper,o=t.popperRect,i=t.placement,a=t.variation,l=t.offsets,s=t.position,n=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,v=t.isFixed,h=l.x,f=h===void 0?0:h,x=l.y,u=x===void 0?0:x,m=typeof p=="function"?p({x:f,y:u}):{x:f,y:u};f=m.x,u=m.y;var y=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),k=z,d=S,b=window;if(c){var g=ct(r),w="clientHeight",j="clientWidth";if(g===B(r)&&(g=F(r),N(g).position!=="static"&&s==="absolute"&&(w="scrollHeight",j="scrollWidth")),g=g,i===S||(i===z||i===$)&&a===st){d=T;var A=v&&g===b&&b.visualViewport?b.visualViewport.height:g[w];u-=A-o.height,u*=n?1:-1}if(i===z||(i===S||i===T)&&a===st){k=$;var E=v&&g===b&&b.visualViewport?b.visualViewport.width:g[j];f-=E-o.width,f*=n?1:-1}}var P=Object.assign({position:s},c&&Le),L=p===!0?Me({x:f,y:u},B(r)):{x:f,y:u};if(f=L.x,u=L.y,n){var D;return Object.assign({},P,(D={},D[d]=O?"0":"",D[k]=y?"0":"",D.transform=(b.devicePixelRatio||1)<=1?"translate("+f+"px, "+u+"px)":"translate3d("+f+"px, "+u+"px, 0)",D))}return Object.assign({},P,(e={},e[d]=O?u+"px":"",e[k]=y?f+"px":"",e.transform="",e))}function We(t){var e=t.state,r=t.options,o=r.gpuAcceleration,i=o===void 0?!0:o,a=r.adaptive,l=a===void 0?!0:a,s=r.roundOffsets,n=s===void 0?!0:s,c={placement:W(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Xt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:n})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Xt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const He={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:We,data:{}};var bt={passive:!0};function Ne(t){var e=t.state,r=t.instance,o=t.options,i=o.scroll,a=i===void 0?!0:i,l=o.resize,s=l===void 0?!0:l,n=B(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&c.forEach(function(p){p.addEventListener("scroll",r.update,bt)}),s&&n.addEventListener("resize",r.update,bt),function(){a&&c.forEach(function(p){p.removeEventListener("scroll",r.update,bt)}),s&&n.removeEventListener("resize",r.update,bt)}}const Ve={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ne,data:{}};var Fe={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(e){return Fe[e]})}var Ie={start:"end",end:"start"};function Yt(t){return t.replace(/start|end/g,function(e){return Ie[e]})}function zt(t){var e=B(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Ct(t){return _(F(t)).left+zt(t).scrollLeft}function Xe(t,e){var r=B(t),o=F(t),i=r.visualViewport,a=o.clientWidth,l=o.clientHeight,s=0,n=0;if(i){a=i.width,l=i.height;var c=_t();(c||!c&&e==="fixed")&&(s=i.offsetLeft,n=i.offsetTop)}return{width:a,height:l,x:s+Ct(t),y:n}}function Ye(t){var e,r=F(t),o=zt(t),i=(e=t.ownerDocument)==null?void 0:e.body,a=G(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=G(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-o.scrollLeft+Ct(t),n=-o.scrollTop;return N(i||r).direction==="rtl"&&(s+=G(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:l,x:s,y:n}}function Bt(t){var e=N(t),r=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+o)}function ie(t){return["html","body","#document"].indexOf(H(t))>=0?t.ownerDocument.body:R(t)&&Bt(t)?t:ie(yt(t))}function nt(t,e){var r;e===void 0&&(e=[]);var o=ie(t),i=o===((r=t.ownerDocument)==null?void 0:r.body),a=B(o),l=i?[a].concat(a.visualViewport||[],Bt(o)?o:[]):o,s=e.concat(l);return i?s:s.concat(nt(yt(l)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function qe(t,e){var r=_(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function qt(t,e,r){return e===Qt?At(Xe(t,r)):J(e)?qe(e,r):At(Ye(F(t)))}function Ue(t){var e=nt(yt(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,o=r&&R(t)?ct(t):t;return J(o)?e.filter(function(i){return J(i)&&te(i,o)&&H(i)!=="body"}):[]}function Ge(t,e,r,o){var i=e==="clippingParents"?Ue(t):[].concat(e),a=[].concat(i,[r]),l=a[0],s=a.reduce(function(n,c){var p=qt(t,c,o);return n.top=G(p.top,n.top),n.right=ht(p.right,n.right),n.bottom=ht(p.bottom,n.bottom),n.left=G(p.left,n.left),n},qt(t,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ae(t){var e=t.reference,r=t.element,o=t.placement,i=o?W(o):null,a=o?tt(o):null,l=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,n;switch(i){case S:n={x:l,y:e.y-r.height};break;case T:n={x:l,y:e.y+e.height};break;case $:n={x:e.x+e.width,y:s};break;case z:n={x:e.x-r.width,y:s};break;default:n={x:e.x,y:e.y}}var c=i?St(i):null;if(c!=null){var p=c==="y"?"height":"width";switch(a){case Q:n[c]=n[c]-(e[p]/2-r[p]/2);break;case st:n[c]=n[c]+(e[p]/2-r[p]/2);break}}return n}function pt(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=o===void 0?t.placement:o,a=r.strategy,l=a===void 0?t.strategy:a,s=r.boundary,n=s===void 0?ue:s,c=r.rootBoundary,p=c===void 0?Qt:c,v=r.elementContext,h=v===void 0?it:v,f=r.altBoundary,x=f===void 0?!1:f,u=r.padding,m=u===void 0?0:u,y=re(typeof m!="number"?m:oe(m,lt)),O=h===it?ve:it,k=t.rects.popper,d=t.elements[x?O:h],b=Ge(J(d)?d:d.contextElement||F(t.elements.popper),n,p,l),g=_(t.elements.reference),w=ae({reference:g,element:k,strategy:"absolute",placement:i}),j=At(Object.assign({},k,w)),A=h===it?j:g,E={top:b.top-A.top+y.top,bottom:A.bottom-b.bottom+y.bottom,left:b.left-A.left+y.left,right:A.right-b.right+y.right},P=t.modifiersData.offset;if(h===it&&P){var L=P[i];Object.keys(E).forEach(function(D){var I=[$,T].indexOf(D)>=0?1:-1,X=[S,T].indexOf(D)>=0?"y":"x";E[D]+=L[X]*I})}return E}function Je(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=r.boundary,a=r.rootBoundary,l=r.padding,s=r.flipVariations,n=r.allowedAutoPlacements,c=n===void 0?Zt:n,p=tt(o),v=p?s?Ft:Ft.filter(function(x){return tt(x)===p}):lt,h=v.filter(function(x){return c.indexOf(x)>=0});h.length===0&&(h=v);var f=h.reduce(function(x,u){return x[u]=pt(t,{placement:u,boundary:i,rootBoundary:a,padding:l})[W(u)],x},{});return Object.keys(f).sort(function(x,u){return f[x]-f[u]})}function Ke(t){if(W(t)===jt)return[];var e=gt(t);return[Yt(t),e,Yt(e)]}function Qe(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=r.mainAxis,a=i===void 0?!0:i,l=r.altAxis,s=l===void 0?!0:l,n=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,h=r.altBoundary,f=r.flipVariations,x=f===void 0?!0:f,u=r.allowedAutoPlacements,m=e.options.placement,y=W(m),O=y===m,k=n||(O||!x?[gt(m)]:Ke(m)),d=[m].concat(k).reduce(function(K,V){return K.concat(W(V)===jt?Je(e,{placement:V,boundary:p,rootBoundary:v,padding:c,flipVariations:x,allowedAutoPlacements:u}):V)},[]),b=e.rects.reference,g=e.rects.popper,w=new Map,j=!0,A=d[0],E=0;E<d.length;E++){var P=d[E],L=W(P),D=tt(P)===Q,I=[S,T].indexOf(L)>=0,X=I?"width":"height",C=pt(e,{placement:P,boundary:p,rootBoundary:v,altBoundary:h,padding:c}),M=I?D?$:z:D?T:S;b[X]>g[X]&&(M=gt(M));var ft=gt(M),Y=[];if(a&&Y.push(C[L]<=0),s&&Y.push(C[M]<=0,C[ft]<=0),Y.every(function(K){return K})){A=P,j=!1;break}w.set(P,Y)}if(j)for(var dt=x?3:1,xt=function(V){var rt=d.find(function(ut){var q=w.get(ut);if(q)return q.slice(0,V).every(function(wt){return wt})});if(rt)return A=rt,"break"},et=dt;et>0;et--){var mt=xt(et);if(mt==="break")break}e.placement!==A&&(e.modifiersData[o]._skip=!0,e.placement=A,e.reset=!0)}}const Ze={name:"flip",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Gt(t){return[S,$,T,z].some(function(e){return t[e]>=0})}function _e(t){var e=t.state,r=t.name,o=e.rects.reference,i=e.rects.popper,a=e.modifiersData.preventOverflow,l=pt(e,{elementContext:"reference"}),s=pt(e,{altBoundary:!0}),n=Ut(l,o),c=Ut(s,i,a),p=Gt(n),v=Gt(c);e.modifiersData[r]={referenceClippingOffsets:n,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const tr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_e};function er(t,e,r){var o=W(t),i=[z,S].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,l=a[0],s=a[1];return l=l||0,s=(s||0)*i,[z,$].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function rr(t){var e=t.state,r=t.options,o=t.name,i=r.offset,a=i===void 0?[0,0]:i,l=Zt.reduce(function(p,v){return p[v]=er(v,e.rects,a),p},{}),s=l[e.placement],n=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=n,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=l}const or={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:rr};function ir(t){var e=t.state,r=t.name;e.modifiersData[r]=ae({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const ar={name:"popperOffsets",enabled:!0,phase:"read",fn:ir,data:{}};function nr(t){return t==="x"?"y":"x"}function sr(t){var e=t.state,r=t.options,o=t.name,i=r.mainAxis,a=i===void 0?!0:i,l=r.altAxis,s=l===void 0?!1:l,n=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,h=r.tether,f=h===void 0?!0:h,x=r.tetherOffset,u=x===void 0?0:x,m=pt(e,{boundary:n,rootBoundary:c,padding:v,altBoundary:p}),y=W(e.placement),O=tt(e.placement),k=!O,d=St(y),b=nr(d),g=e.modifiersData.popperOffsets,w=e.rects.reference,j=e.rects.popper,A=typeof u=="function"?u(Object.assign({},e.rects,{placement:e.placement})):u,E=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(g){if(a){var D,I=d==="y"?S:z,X=d==="y"?T:$,C=d==="y"?"height":"width",M=g[d],ft=M+m[I],Y=M-m[X],dt=f?-j[C]/2:0,xt=O===Q?w[C]:j[C],et=O===Q?-j[C]:-w[C],mt=e.elements.arrow,K=f&&mt?Dt(mt):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ee(),rt=V[I],ut=V[X],q=at(0,w[C],K[C]),wt=k?w[C]/2-dt-q-rt-E.mainAxis:xt-q-rt-E.mainAxis,ne=k?-w[C]/2+dt+q+ut+E.mainAxis:et+q+ut+E.mainAxis,Ot=e.elements.arrow&&ct(e.elements.arrow),se=Ot?d==="y"?Ot.clientTop||0:Ot.clientLeft||0:0,Rt=(D=P==null?void 0:P[d])!=null?D:0,pe=M+wt-Rt-se,le=M+ne-Rt,Tt=at(f?ht(ft,pe):ft,M,f?G(Y,le):Y);g[d]=Tt,L[d]=Tt-M}if(s){var $t,ce=d==="x"?S:z,fe=d==="x"?T:$,U=g[b],vt=b==="y"?"height":"width",Lt=U+m[ce],Mt=U-m[fe],kt=[S,z].indexOf(y)!==-1,Wt=($t=P==null?void 0:P[b])!=null?$t:0,Ht=kt?Lt:U-w[vt]-j[vt]-Wt+E.altAxis,Nt=kt?U+w[vt]+j[vt]-Wt-E.altAxis:Mt,Vt=f&&kt?Ce(Ht,U,Nt):at(f?Ht:Lt,U,f?Nt:Mt);g[b]=Vt,L[b]=Vt-U}e.modifiersData[o]=L}}const pr={name:"preventOverflow",enabled:!0,phase:"main",fn:sr,requiresIfExists:["offset"]};function lr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function cr(t){return t===B(t)||!R(t)?zt(t):lr(t)}function fr(t){var e=t.getBoundingClientRect(),r=Z(e.width)/t.offsetWidth||1,o=Z(e.height)/t.offsetHeight||1;return r!==1||o!==1}function dr(t,e,r){r===void 0&&(r=!1);var o=R(e),i=R(e)&&fr(e),a=F(e),l=_(t,i,r),s={scrollLeft:0,scrollTop:0},n={x:0,y:0};return(o||!o&&!r)&&((H(e)!=="body"||Bt(a))&&(s=cr(e)),R(e)?(n=_(e,!0),n.x+=e.clientLeft,n.y+=e.clientTop):a&&(n.x=Ct(a))),{x:l.left+s.scrollLeft-n.x,y:l.top+s.scrollTop-n.y,width:l.width,height:l.height}}function mr(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function i(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var n=e.get(s);n&&i(n)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||i(a)}),o}function ur(t){var e=mr(t);return Ae.reduce(function(r,o){return r.concat(e.filter(function(i){return i.phase===o}))},[])}function vr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function br(t){var e=t.reduce(function(r,o){var i=r[o.name];return r[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var Jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Kt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function gr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,i=e.defaultOptions,a=i===void 0?Jt:i;return function(s,n,c){c===void 0&&(c=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jt,a),modifiersData:{},elements:{reference:s,popper:n},attributes:{},styles:{}},v=[],h=!1,f={state:p,setOptions:function(y){var O=typeof y=="function"?y(p.options):y;u(),p.options=Object.assign({},a,p.options,O),p.scrollParents={reference:J(s)?nt(s):s.contextElement?nt(s.contextElement):[],popper:nt(n)};var k=ur(br([].concat(o,p.options.modifiers)));return p.orderedModifiers=k.filter(function(d){return d.enabled}),x(),f.update()},forceUpdate:function(){if(!h){var y=p.elements,O=y.reference,k=y.popper;if(Kt(O,k)){p.rects={reference:dr(O,ct(k),p.options.strategy==="fixed"),popper:Dt(k)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var d=0;d<p.orderedModifiers.length;d++){if(p.reset===!0){p.reset=!1,d=-1;continue}var b=p.orderedModifiers[d],g=b.fn,w=b.options,j=w===void 0?{}:w,A=b.name;typeof g=="function"&&(p=g({state:p,options:j,name:A,instance:f})||p)}}}},update:vr(function(){return new Promise(function(m){f.forceUpdate(),m(p)})}),destroy:function(){u(),h=!0}};if(!Kt(s,n))return f;f.setOptions(c).then(function(m){!h&&c.onFirstUpdate&&c.onFirstUpdate(m)});function x(){p.orderedModifiers.forEach(function(m){var y=m.name,O=m.options,k=O===void 0?{}:O,d=m.effect;if(typeof d=="function"){var b=d({state:p,name:y,instance:f,options:k}),g=function(){};v.push(b||g)}})}function u(){v.forEach(function(m){return m()}),v=[]}return f}}var hr=[Ve,ar,He,De,or,Ze,pr,$e,tr],yr=gr({defaultModifiers:hr});const xr='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}a{background-color:transparent}b,strong{font-weight:bolder}code{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub{bottom:-.25em;font-size:75%;line-height:0;position:relative;vertical-align:baseline}img{border-style:none}button,input,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}dd,h1,hr,p{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}ul{list-style:none;margin:0;padding:0}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{border:0 solid;box-sizing:border-box}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select,textarea{color:inherit;line-height:inherit;padding:0}code{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}canvas,img,object,svg{display:block;vertical-align:middle}img{height:auto;max-width:100%}.container{width:100%}@media (min-width:600px){.container{max-width:600px}}@media (min-width:960px){.container{max-width:960px}}@media (min-width:1264px){.container{max-width:1264px}}.bg-br-black{--bg-opacity:1!important;background-color:#000!important;background-color:rgba(0,0,0,var(--bg-opacity))!important}.bg-br-gray30{--bg-opacity:1!important;background-color:#e6e6e6!important;background-color:rgba(230,230,230,var(--bg-opacity))!important}.bg-br-white{--bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--bg-opacity))!important}.bg-br-primary{--bg-opacity:1!important;background-color:#017d80!important;background-color:rgba(1,125,128,var(--bg-opacity))!important}.bg-br-secondary{--bg-opacity:1!important;background-color:#002743!important;background-color:rgba(0,39,67,var(--bg-opacity))!important}.bg-br-green{--bg-opacity:1!important;background-color:#48fe9b!important;background-color:rgba(72,254,155,var(--bg-opacity))!important}.bg-br-error{--bg-opacity:1!important;background-color:#b40909!important;background-color:rgba(180,9,9,var(--bg-opacity))!important}.hover\\:bg-br-gray10:hover{--bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--bg-opacity))!important}.border-transparent{border-color:transparent!important}.border-br-gray50{--border-opacity:1!important;border-color:#bcbcbc!important;border-color:rgba(188,188,188,var(--border-opacity))!important}.border-br-gray40{--border-opacity:1!important;border-color:#d9d9d9!important;border-color:rgba(217,217,217,var(--border-opacity))!important}.border-br-gray30{--border-opacity:1!important;border-color:#e6e6e6!important;border-color:rgba(230,230,230,var(--border-opacity))!important}.border-br-error{--border-opacity:1!important;border-color:#b40909!important;border-color:rgba(180,9,9,var(--border-opacity))!important}.rounded{border-radius:.25rem!important}.rounded-round{border-radius:50%!important}.rounded-full{border-radius:9999px!important}.border-solid{border-style:solid!important}.border-none{border-style:none!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border{border-width:1px!important}.border-t-0{border-top-width:0!important}.border-r-0{border-right-width:0!important}.border-b-0{border-bottom-width:0!important}.border-l-0{border-left-width:0!important}.border-l-1{border-left-width:1px!important}.box-border{box-sizing:border-box!important}.cursor-default{cursor:default!important}.cursor-pointer{cursor:pointer!important}.cursor-not-allowed{cursor:not-allowed!important}.block{display:block!important}.inline-block{display:inline-block!important}.inline{display:inline!important}.flex{display:flex!important}.inline-flex{display:inline-flex!important}.grid{display:grid!important}.hidden{display:none!important}.flex-row{flex-direction:row!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-start{align-items:flex-start!important}.items-center{align-items:center!important}.self-center{align-self:center!important}.justify-start{justify-content:flex-start!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.justify-around{justify-content:space-around!important}.justify-evenly{justify-content:space-evenly!important}.flex-1{flex:1 1 0%!important}.flex-none{flex:none!important}.font-primary{font-family:Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important}.font-normal{font-weight:400!important}.font-medium{font-weight:500!important}.font-semibold{font-weight:600!important}.font-bold{font-weight:700!important}.h-0{height:0!important}.h-100{height:100%!important}.h-auto{height:auto!important}.text-xs{font-size:.75rem!important}.text-sm{font-size:.875rem!important}.text-md{font-size:1rem!important}.text-lg{font-size:1.125rem!important}.text-xl{font-size:1.25rem!important}.m-0{margin:0!important}.m-auto{margin:auto!important}.m-xs{margin:.5rem!important}.m-md{margin:1.25rem!important}.my-xs{margin-bottom:.5rem!important;margin-top:.5rem!important}.mx-xs{margin-left:.5rem!important;margin-right:.5rem!important}.my-sm{margin-bottom:.625rem!important;margin-top:.625rem!important}.mx-sm{margin-left:.625rem!important;margin-right:.625rem!important}.my-md{margin-bottom:1.25rem!important;margin-top:1.25rem!important}.mx-xl{margin-left:2rem!important;margin-right:2rem!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.mt-xs{margin-top:.5rem!important}.ml-xs{margin-left:.5rem!important}.mt-sm{margin-top:.625rem!important}.mr-md{margin-right:1.25rem!important}.ml-md{margin-left:1.25rem!important}.ml-lg{margin-left:1.5rem!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.opacity-0{opacity:0!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.outline-none{outline:2px solid transparent!important;outline-offset:2px!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-y-auto{overflow-y:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.p-xs{padding:.5rem!important}.p-sm{padding:.625rem!important}.p-md{padding:1.25rem!important}.p-xl{padding:2rem!important}.py-xs{padding-bottom:.5rem!important;padding-top:.5rem!important}.px-xs{padding-left:.5rem!important;padding-right:.5rem!important}.py-sm{padding-bottom:.625rem!important;padding-top:.625rem!important}.px-sm{padding-left:.625rem!important;padding-right:.625rem!important}.py-md{padding-bottom:1.25rem!important;padding-top:1.25rem!important}.px-md{padding-left:1.25rem!important;padding-right:1.25rem!important}.px-lg{padding-left:1.5rem!important;padding-right:1.5rem!important}.pt-xs{padding-top:.5rem!important}.pr-xs{padding-right:.5rem!important}.pl-xs{padding-left:.5rem!important}.pt-sm{padding-top:.625rem!important}.pl-sm{padding-left:.625rem!important}.pb-md{padding-bottom:1.25rem!important}.pl-md{padding-left:1.25rem!important}.pointer-events-none{pointer-events:none!important}.static{position:static!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.inset-0{bottom:0!important;left:0!important;right:0!important}.inset-0,.top-0{top:0!important}.right-0{right:0!important}.bottom-0{bottom:0!important}.left-0{left:0!important}.resize{resize:both!important}.shadow{box-shadow:2px 2px 4px 0 rgba(0,0,0,.3)!important}.shadow-modal{box-shadow:2px 2px 6px 0 rgba(0,0,0,.3)!important}.shadow-none{box-shadow:none!important}.text-left{text-align:left!important}.text-center{text-align:center!important}.text-br-gray90{--text-opacity:1!important;color:#575656!important;color:rgba(87,86,86,var(--text-opacity))!important}.text-br-gray80{--text-opacity:1!important;color:#666!important;color:rgba(102,102,102,var(--text-opacity))!important}.text-br-gray70{--text-opacity:1!important;color:#ababab!important;color:rgba(171,171,171,var(--text-opacity))!important}.text-br-white{--text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--text-opacity))!important}.text-br-secondary{--text-opacity:1!important;color:#002743!important;color:rgba(0,39,67,var(--text-opacity))!important}.text-br-error{--text-opacity:1!important;color:#b40909!important;color:rgba(180,9,9,var(--text-opacity))!important}.uppercase{text-transform:uppercase!important}.capitalize{text-transform:capitalize!important}.align-middle{vertical-align:middle!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.whitespace-no-wrap{white-space:nowrap!important}.w-0{width:0!important}.w-100{width:100%!important}.transform{--transform-translate-x:0!important;--transform-translate-y:0!important;--transform-rotate:0!important;--transform-skew-x:0!important;--transform-skew-y:0!important;--transform-scale-x:1!important;--transform-scale-y:1!important;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))!important}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform!important}@keyframes spin{to{transform:rotate(1turn)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.br-tooltip{border-radius:5px;box-shadow:1px 2px 10px rgba(0,0,0,.36);display:none;font-size:.65rem;padding:5px 10px;z-index:999}.br-tooltip,.br-tooltip.br-tooltip-variant-white{background:#fff;color:#002743}.br-tooltip.br-tooltip-variant-primary{background:#002743;color:#fff}.br-tooltip .br-tooltip-arrow,.br-tooltip .br-tooltip-arrow:before{background:inherit;height:8px;position:absolute;width:8px}.br-tooltip .br-tooltip-arrow{visibility:hidden}.br-tooltip .br-tooltip-arrow:before{content:"";transform:rotate(45deg);visibility:visible}.br-tooltip[data-popper-placement^=top]>.br-tooltip-arrow{bottom:-4px}.br-tooltip[data-popper-placement^=bottom]>.br-tooltip-arrow{top:-4px}.br-tooltip[data-popper-placement^=left]>.br-tooltip-arrow{right:-4px}.br-tooltip[data-popper-placement^=right]>.br-tooltip-arrow{left:-4px}.br-tooltip[data-show]{display:block}@media (min-width:960px){.md\\:w-33{width:33.33333%!important}.md\\:w-80{width:80%!important}}',wr=class{constructor(t){de(this,t),this.tooltipActivator=void 0,this.tooltipText=void 0,this.tooltipPlacement="right",this.offsetSkid=0,this.offsetDistance=0,this.disabled=!1,this.variant="white",this.containerStyles={},this.styles={},this.arrowEnabled=!1}componentWillLoad(){this.hasTooltipSlot=!!this.tooltip.querySelector('[slot="tooltip-content"]')}componentDidLoad(){const t=this.tooltip.getElementsByClassName(`${this.tooltipActivator}`)[0],e=this.tooltip.getElementsByClassName("br-tooltip-wrapper")[0].children.length,r=this.tooltip.getElementsByClassName("br-tooltip-wrapper")[0].children[e-1],o={name:"offset",options:{offset:[this.offsetSkid,this.offsetDistance]}},i=yr(t,r,{modifiers:[o],placement:this.tooltipPlacement,strategy:"fixed"});function a(){this.disabled||!this.tooltipText&&!this.hasTooltipSlot||(r.setAttribute("data-show",""),i.setOptions(()=>({modifiers:[{name:"eventListeners",enabled:!0},o]})),i.update())}function l(){r.removeAttribute("data-show"),i.setOptions(()=>({modifiers:[{name:"eventListeners",enabled:!1},o]}))}const s=["mouseenter","focus"],n=["mouseleave","blur"];s.forEach(c=>{t==null||t.addEventListener(c,a.bind(this))}),n.forEach(c=>{t==null||t.addEventListener(c,l.bind(this))})}render(){return ot("div",{class:"br-tooltip-wrapper",style:this.containerStyles?this.containerStyles:{}},ot("slot",null),ot("div",{class:{"br-tooltip font-primary":!0,"br-tooltip-variant-white":this.variant==="white","br-tooltip-variant-primary":this.variant==="primary"},style:this.styles?this.styles:{}},this.arrowEnabled&&ot("div",{class:"br-tooltip-arrow","data-popper-arrow":!0}),ot("slot",{name:"tooltip-content"}),!this.hasTooltipSlot&&this.tooltipText))}get tooltip(){return me(this)}};wr.style=xr;export{wr as br_tooltip};
