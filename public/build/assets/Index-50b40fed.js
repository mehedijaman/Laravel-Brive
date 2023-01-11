import{Q as S,I,z as j,S as g,U as V,g as b,a as r,b as d,w as c,F as k,o as i,H as B,d as s,j as m,v as h,e as P,t as n,c as w,E as D,C as U,D as N}from"./app-cf831f77.js";import{_ as E,a as A}from"./AuthenticatedLayout-d4316697.js";import{a as F}from"./TextInput-e9f58cb6.js";import{_ as H}from"./PrimaryButton-9fb6dbca.js";import{_ as z}from"./SelectInput-32b1df8d.js";import{_ as x}from"./DangerButton-31c774ce.js";import{r as $,a as _,_ as G,b as L,c as M}from"./InfoButton-6f8f5afa.js";import Q from"./Create-24d3bb52.js";import T from"./Edit-4fd7accc.js";import q from"./Delete-79640f41.js";import J from"./DeleteBulk-44ac2fe1.js";import{_ as K}from"./Checkbox-011bd2bf.js";import"./index-9a87e084.js";import"./SecondaryButton-db9da4c3.js";const R={class:"space-y-4"},W={class:"px-4 sm:px-0"},X={class:"rounded-lg overflow-hidden w-fit"},Y={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},Z={class:"flex justify-between p-2"},ee={class:"flex space-x-2"},se={class:"overflow-x-auto scrollbar-table"},te={class:"w-full"},ae={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},le={class:"dark:bg-gray-900/50 text-left"},re={class:"px-2 py-4 text-center"},oe=s("th",{class:"px-2 py-4 text-center"},"#",-1),ne={class:"flex justify-between items-center"},de={class:"flex justify-between items-center"},ie=s("span",null,"Guard",-1),pe={class:"flex justify-between items-center"},ce={class:"flex justify-between items-center"},me=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),ue={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe=["value"],he={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"flex justify-center items-center"},ke={class:"rounded-md overflow-hidden"},xe={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Fe={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(u){const o=u,e=S({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permission:null,dataSet:I().props.value.app.perpage}),f=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>g.exports._.cloneDeep(e.params),g.exports.debounce(()=>{let l=g.exports.pickBy(e.params);V.Inertia.get(route("permission.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=l=>{var t;l.target.checked===!1?e.selectedId=[]:(t=o.permissions)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},O=()=>{var l;((l=o.permissions)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(l,t)=>{const p=U("tooltip");return i(),b(k,null,[r(d(B),{title:o.title},null,8,["title"]),r(E,null,{default:c(()=>[r(A,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",R,[s("div",W,[s("div",X,[m(r(H,{class:"rounded-none",onClick:t[0]||(t[0]=a=>e.createOpen=!0)},{default:c(()=>[P(n(l.lang().button.add),1)]),_:1},512),[[h,l.can(["create permission"])]]),r(Q,{show:e.createOpen,onClose:t[1]||(t[1]=a=>e.createOpen=!1),title:o.title},null,8,["show","title"]),r(T,{show:e.editOpen,onClose:t[2]||(t[2]=a=>e.editOpen=!1),permission:e.permission,title:o.title},null,8,["show","permission","title"]),r(q,{show:e.deleteOpen,onClose:t[3]||(t[3]=a=>e.deleteOpen=!1),permission:e.permission,title:o.title},null,8,["show","permission","title"]),r(J,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId,title:o.title},null,8,["show","selectedId","title"])])]),s("div",Y,[s("div",Z,[s("div",ee,[r(z,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),m((i(),w(x,{onClick:t[6]||(t[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d($),{class:"w-5 h-5"})]),_:1})),[[h,e.selectedId.length!=0&&l.can(["delete permission"])],[p,l.lang().tooltip.delete_selected]])]),r(F,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",se,[s("table",te,[s("thead",ae,[s("tr",le,[s("th",re,[r(K,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:C},null,8,["checked"])]),oe,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=a=>f("name"))},[s("div",ne,[s("span",null,n(l.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=a=>f("guard"))},[s("div",de,[ie,r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=a=>f("created_at"))},[s("div",pe,[s("span",null,n(l.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=a=>f("updated_at"))},[s("div",ce,[s("span",null,n(l.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),me])]),s("tbody",null,[(i(!0),b(k,null,D(u.permissions.data,(a,v)=>(i(),b("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",ue,[m(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:O,value:a.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,fe),[[N,e.selectedId]])]),s("td",he,n(++v),1),s("td",_e,n(a.name),1),s("td",ye,n(a.guard_name),1),s("td",ge,n(a.created_at),1),s("td",be,n(a.updated_at),1),s("td",we,[s("div",ve,[s("div",ke,[m((i(),w(L,{type:"button",onClick:y=>(e.editOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(M),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["update permission"])],[p,l.lang().tooltip.edit]]),m((i(),w(x,{type:"button",onClick:y=>(e.deleteOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["delete permission"])],[p,l.lang().tooltip.delete]])])])])]))),128))])])]),s("div",xe,[r(G,{links:o.permissions,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Fe as default};
