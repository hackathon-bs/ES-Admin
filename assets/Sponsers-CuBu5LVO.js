import{_ as U}from"./MainPage.vue_vue_type_script_setup_true_lang-CgPqn8x-.js";import{s as R,a as T}from"./index-kT0zpHFN.js";import{_ as A}from"./NoResult.vue_vue_type_script_setup_true_lang-D8iqCSwK.js";import{ad as D,r as b,s as g,ae as E,d as L,l as I,o as f,p as _,w as l,a as o,b as s,i as q,e as V,F as G,h as x,X as H}from"./index-D5KG-ND6.js";import{s as M}from"./index-CTDqqYq1.js";import{_ as P}from"./FileUploader.vue_vue_type_script_setup_true_lang-DpEWWdE3.js";import{a as j,_ as W}from"./BaseInputText.vue_vue_type_script_setup_true_lang-CfHD-sUJ.js";import{s as X}from"./index-YQxMbT7d.js";import{s as z}from"./index-ENajtXdx.js";import{u as J,h as $}from"./create-event.store-DKeLDruF.js";import"./index-CnEhIWck.js";import"./index-8S-lO8Ku.js";const F=D("sponsers",()=>{const u=b([]),{eventId:i}=g(J()),a=b({name:"",category:"",websiteLink:"",description:""});return{form:a,list:u,getList:async()=>{const m=await $.get(`/sponsors/${i.value}`);return u.value=m.data,m.data},resetForm:()=>{a.value={name:"",category:"",websiteLink:"",description:""}},add:async()=>(a.value.eventId=i.value,$.post("/sponsor",E(a.value)))}}),K={class:"flex flex-col gap-3"},O={class:"flex justify-between"},Q=L({__name:"SponserForm",setup(u,{expose:i}){const a=I(),r=b(!1),d=F(),{form:t}=g(d),{add:m,resetForm:k,getList:v}=d,y=async()=>(await m(),a.add({severity:"success",summary:"Success",detail:"Sponsor successfully added",life:3e3}),r.value=!1,await v(),!0);return i({visible:r}),(S,e)=>{const c=j,p=W,C=P,h=M,w=x;return f(),_(s(G),{onSubmit:y,id:"add-sponser-form"},{default:l(({isSubmitting:B,meta:N})=>[o(s(X),{visible:s(r),"onUpdate:visible":e[5]||(e[5]=n=>q(r)?r.value=n:null),header:"Add Sponsor",position:"right",class:"!w-full md:!w-80 lg:!w-[30rem]",onHide:s(k)},{footer:l(()=>[V("div",O,[o(w,{onClick:e[4]||(e[4]=n=>r.value=!1),severity:"secondary",label:"Close",outlined:""}),o(w,{label:"Done",type:"submit",form:"add-sponser-form",loading:B,disabled:!N.valid},null,8,["loading","disabled"])])]),default:l(()=>[V("div",K,[o(c,{label:"Name",name:"name",required:"",rules:"required",modelValue:s(t).name,"onUpdate:modelValue":e[0]||(e[0]=n=>s(t).name=n)},null,8,["modelValue"]),o(c,{label:"Website Link",name:"link",modelValue:s(t).websiteLink,"onUpdate:modelValue":e[1]||(e[1]=n=>s(t).websiteLink=n)},null,8,["modelValue"]),o(p,{label:"Status"},{default:l(()=>[o(s(z),{modelValue:s(t).category,"onUpdate:modelValue":e[2]||(e[2]=n=>s(t).category=n),options:["Siver","Gold","Platinum"],placeholder:"Category"},null,8,["modelValue"])]),_:1}),o(p,{label:"Logo"},{default:l(()=>[o(C)]),_:1}),o(p,{label:"Description"},{default:l(()=>[o(h,{ref:"editorRef",modelValue:s(t).description,"onUpdate:modelValue":e[3]||(e[3]=n=>s(t).description=n),editorStyle:"height: 200px"},null,8,["modelValue"])]),_:1})])]),_:2},1032,["visible","onHide"])]),_:1})}}}),me=L({__name:"Sponsers",setup(u){const i=F(),{list:a}=g(i),{getList:r}=i,d=b(null),t=()=>{d.value.visible=!0};return H(()=>{r()}),(m,k)=>{const v=x,y=Q,S=A,e=R,c=T,p=U;return f(),_(p,{title:"Sponsors",class:"container mx-auto p-4"},{action:l(()=>[o(v,{label:"Add Sponsor",icon:"pi pi-plus",onClick:t})]),default:l(()=>[o(y,{ref_key:"speakerForm",ref:d},null,512),s(a).length===0?(f(),_(S,{key:0,title:"No Sponsors",info:"Add a sponsor manually, if available, or set up sponsorship categories and related benefits to be displayed on the event website.",icon:"pi pi-money-bill"})):(f(),_(c,{key:1,value:s(a)},{default:l(()=>[o(e,{field:"name",header:"Name"}),o(e,{field:"category",header:"Category"}),o(e,{field:"websiteLink",header:"Link"})]),_:1},8,["value"]))]),_:1})}}});export{me as default};
