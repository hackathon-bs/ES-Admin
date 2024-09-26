import{_ as u}from"./NoResult.vue_vue_type_script_setup_true_lang-CdQj1l0u.js";import{d,o as c,c as r,e,t as i,G as m,n as f,_ as v,a as s,w as a,h as g}from"./index-CxjdIz8e.js";const h={class:"dashboard-card border rounded-lg p-4 h-80"},b={class:"font-semibold text-lg mb-5"},x=d({__name:"DashboardCard",props:{title:{}},setup(l){return(t,o)=>(c(),r("div",h,[e("div",b,i(t.title),1),m(t.$slots,"default")]))}}),C={class:"count-card border rounded-lg p-4 flex items-center gap-4"},k={class:"icon w-14 h-14 rounded-full bg-slate-100 flex"},w={class:"flex flex-col"},$={class:"font-semibold text-lg"},D={class:"font-bold text-2xl"},E=d({__name:"CountCard",props:{title:{},value:{},icon:{}},setup(l){return(t,o)=>(c(),r("div",C,[e("div",k,[e("i",{class:f(["m-auto",t.icon]),style:{"font-size":"1.5rem"}},null,2)]),e("div",w,[e("div",$,i(t.title),1),e("div",D,i(t.value),1)])]))}}),N={},V={class:"container mx-auto p-4"},R={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"};function S(l,t){const o=E,n=x,p=g,_=u;return c(),r("div",V,[e("div",R,[s(o,{title:"Ticket Sales",value:"50",icon:"pi pi-ticket"}),s(o,{title:"Registrations",value:"50",icon:"pi pi-list-check"}),s(o,{title:"Days to Event",value:"0",icon:"pi pi-calendar"}),s(n,{title:"Registration Trend"},{default:a(()=>t[0]||(t[0]=[e("div",{class:"trend"},[e("img",{src:"https://media.istockphoto.com/id/1345793778/vector/bar-graph-growth-and-up-arrow.jpg?s=612x612&w=0&k=20&c=s3MbVY25Vrb8YcOpdwaRNYIzVR6aI35aY9dnMKQS46Q="})],-1)])),_:1}),s(n,{title:"Carbon Footprint"},{default:a(()=>t[1]||(t[1]=[e("div",{class:"carbon"},[e("img",{src:"https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png"})],-1)])),_:1}),s(n,{title:"Attendance"},{default:a(()=>t[2]||(t[2]=[e("div",{class:"attendance"},[e("img",{src:"https://techreport.com/wp-content/uploads/2024/04/Statistics-of-Virtual-Event-Audience-Engagement.png"})],-1)])),_:1}),s(n,{title:"Event Numbers"},{default:a(()=>[s(_,{title:"Data Not Available",info:"",icon:"pi pi-receipt"},{action:a(()=>[s(p,{label:"Link Events"})]),_:1})]),_:1})])])}const j=v(N,[["render",S],["__scopeId","data-v-e38d2422"]]);export{j as default};
