import{_ as h}from"./MainPage.vue_vue_type_script_setup_true_lang-BqA-Oh52.js";import{s as C}from"./index-Dw5UzwVJ.js";import{d as w,s as y,r as $,o as t,p as r,w as o,e as a,a as c,C as l,n as i,t as p,c as B,b as S,y as _}from"./index-BDS4vS0l.js";import{u as V}from"./create-event.store-CGYEzEVj.js";import"./index-3Xk4mkJn.js";const x={class:"sticky top-2"},E=["href","onClick"],N={class:"ml-2"},R=["href","target"],A={class:"ml-2"},G=w({__name:"CreateNew",setup(I){const{eventId:s}=y(V()),u=$([{label:"Event Info",icon:"pi pi-calendar-clock",route:`/event-manager/${s.value}/manage`},{label:"Speakers",icon:"pi pi-users",route:`/event-manager/${s.value}/manage/speakers`},{label:"Agenda",icon:"pi pi-objects-column",route:`/event-manager/${s.value}/manage/agenda`},{label:"Sessions",icon:"pi pi-clock",route:`/event-manager/${s.value}/manage/sessions`}]);return(M,P)=>{const m=_("router-link"),d=C,f=_("RouterView"),g=h;return t(),r(g,{sidebar:!0,class:"p-2"},{sidebar:o(()=>[a("div",x,[c(d,{model:S(u),class:"w-full"},{item:o(({item:e,props:n})=>[e.route?(t(),r(m,{key:0,to:e.route,custom:""},{default:o(({href:k,navigate:v,isActive:j,isExactActive:b})=>[a("a",l({href:k},n.action,{onClick:v,class:{"font-semibold":b}}),[a("span",{class:i(e.icon)},null,2),a("span",N,p(e.label),1)],16,E)]),_:2},1032,["to"])):(t(),B("a",l({key:1,href:e.url,target:e.target},n.action),[a("span",{class:i(e.icon)},null,2),a("span",A,p(e.label),1)],16,R))]),_:1},8,["model"])])]),default:o(()=>[c(f)]),_:1})}}});export{G as default};
