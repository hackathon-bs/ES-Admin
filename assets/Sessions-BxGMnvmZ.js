import{_ as T}from"./MainPage.vue_vue_type_script_setup_true_lang-CgPqn8x-.js";import{s as b,a as D}from"./index-kT0zpHFN.js";import{_ as $}from"./NoResult.vue_vue_type_script_setup_true_lang-D8iqCSwK.js";import{d as g,s as x,k as M,X as C,o as n,p as r,w as o,b as a,a as t,v as i,t as p,x as N,h as B}from"./index-D5KG-ND6.js";import{a as d}from"./create-event.store-DKeLDruF.js";import{u as I}from"./session.store-DPZRWgaJ.js";import"./index-ENajtXdx.js";import"./index-CnEhIWck.js";import"./index-8S-lO8Ku.js";const q=g({__name:"Sessions",setup(R){const m=I(),{list:c}=x(m),l=N(),u=M(()=>l.params.eventId),{getList:f}=m;return C(()=>{f()}),(h,_)=>{const k=B,y=$,s=b,S=D,v=T;return n(),r(v,{title:"Sessions",class:"container mx-auto p-4"},{default:o(()=>[a(c).length===0?(n(),r(y,{key:0,title:"No Sessions",info:"Add sessions for your event",icon:"pi pi-clock"},{action:o(()=>[t(k,{label:"Add Session",icon:"pi pi-plus",onClick:_[0]||(_[0]=e=>h.$router.push({name:"agenda",params:{eventId:a(u)}}))})]),_:1})):(n(),r(S,{key:1,value:a(c)},{default:o(()=>[t(s,{field:"sessionType",header:"Type"}),t(s,{field:"title",header:"Title"}),t(s,{header:"Day"},{body:o(({data:e})=>[i(p(a(d)(e.startDate).format("DD MMM, YY")),1)]),_:1}),t(s,{header:"Start"},{body:o(({data:e})=>[i(p(a(d)(e.startTime,"HH:mm:ss").format("hh:mm a")),1)]),_:1}),t(s,{header:"Speaker"},{body:o(({data:e})=>[i(p(e.speaker?e.speaker.name:"-"),1)]),_:1})]),_:1},8,["value"]))]),_:1})}}});export{q as default};
