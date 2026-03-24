import{_ as E}from"./Dialog.vue_vue_type_style_index_0_lang-CWRTdO51.js";import{a as R,b as H,aI as L,V as M}from"./index-DnWiy9RZ.js";import{_ as T}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BOCxYi2i.js";import{u as $}from"./useFormCreateDesigner-BBl-Zme_.js";import{H as g}from"./index-B3LZLLky.js";import{j as q}from"./java-C14SeLGK.js";import{j as G}from"./json-D1vBrYzr.js";import{l as W,r as l,e as P,aa as U,ag as K,m as w,q as C,J as o,B as n,x as m,u as s,G as d,E as Q,H as X,C as Y,h as Z,I as ee,al as ae}from"./form-create-C-H5lI9G.js";import{h as oe,f as ne}from"./form-designer-BPt9i1AS.js";import"./index-Cw2vrfyz.js";import"./dict.type-ewbuKNIg.js";const se={class:"h-[calc(100vh-var(--top-tool-height)-var(--tags-view-height)-var(--app-content-padding)-var(--app-content-padding)-2px)]"},te={key:0,ref:"editor"},le={class:"hljs"},ie=W({name:"InfraBuild",__name:"index",setup(re){const{t:c}=R(),h=H(),_=l({switchType:[],autoActive:!0,useTemplate:!1,formOptions:{form:{labelWidth:"100px"}},fieldReadonly:!1,hiddenDragMenu:!1,hiddenDragBtn:!1,hiddenMenu:[],hiddenItem:[],hiddenItemConfig:{},disabledItemConfig:{},showSaveBtn:!1,showConfig:!0,showBaseForm:!0,showControl:!0,showPropsForm:!0,showEventForm:!0,showValidateForm:!0,showFormConfig:!0,showInputData:!0,showDevice:!0,appendConfigData:[]}),t=l(),i=l(!1),v=l(""),p=l(-1),r=l("");$(t);const f=a=>{i.value=!0,v.value=a},O=()=>{f("\u751F\u6210 JSON"),p.value=0,r.value=t.value.getRule()},S=()=>{f("\u751F\u6210 Options"),p.value=1,r.value=t.value.getOption()},b=()=>{f("\u751F\u6210\u7EC4\u4EF6"),p.value=2,r.value=x()},x=()=>{const a=t.value.getRule(),e=t.value.getOption();return`<template>
    <form-create
      v-model:api="fApi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${ae.toJson(a).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(e)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},J=a=>{let e="json";return p.value===2&&(e="xml"),M(a)||(a=JSON.stringify(a,null,2)),g.highlight(a,{language:e,ignoreIllegals:!0}).value||"&nbsp;"};return P(async()=>{g.registerLanguage("xml",q),g.registerLanguage("json",G)}),(a,e)=>{const u=oe,I=U("fc-designer"),k=T,D=ne,N=E,j=K("dompurify-html");return C(),w(ee,null,[o(k,{"body-style":{padding:"0px"},class:"!mb-0"},{default:n(()=>[m("div",se,[o(I,{class:"my-designer",ref_key:"designer",ref:t,config:s(_)},{handle:n(()=>[o(u,{size:"small",type:"primary",plain:"",onClick:O},{default:n(()=>e[2]||(e[2]=[d("\u751F\u6210JSON")])),_:1}),o(u,{size:"small",type:"success",plain:"",onClick:S},{default:n(()=>e[3]||(e[3]=[d("\u751F\u6210Options")])),_:1}),o(u,{size:"small",type:"danger",plain:"",onClick:b},{default:n(()=>e[4]||(e[4]=[d("\u751F\u6210\u7EC4\u4EF6")])),_:1})]),_:1},8,["config"])])]),_:1}),o(N,{modelValue:s(i),"onUpdate:modelValue":e[1]||(e[1]=y=>Z(i)?i.value=y:null),title:s(v),"max-height":"600"},{default:n(()=>[s(i)?(C(),w("div",te,[o(u,{style:{float:"right"},onClick:e[0]||(e[0]=y=>(async B=>{const F=JSON.stringify(B,null,2),{copy:V,copied:z,isSupported:A}=L({source:F});A?(await V(),s(z)&&h.success(c("common.copySuccess"))):h.error(c("common.copyError"))})(s(r)))},{default:n(()=>[d(X(s(c)("common.copy")),1)]),_:1}),o(D,{height:"580"},{default:n(()=>[m("div",null,[m("pre",null,[Y(m("code",le,null,512),[[j,J(s(r))]])])])]),_:1})],512)):Q("",!0)]),_:1},8,["modelValue","title"])],64)}}});export{ie as default};
