import{n as E,g as le,b as oe,a as ne,d as ae,h as me,c as fe,e as ge,f as _e,w as be,p as ye,v as we}from"./element-plus.BOB1eDCd.js";import{r as c,ay as Ce,ag as O,o as d,G as C,H as o,P as n,L as u,a,c as w,O as I,a4 as A,M,d as ke,k as Te,w as he,u as Z,K as W,I as Ve,V as xe}from"./@vue.BkZGu_Ap.js";import{u as Ee,b as Me}from"./vue-router.CJ_8Ucol.js";import{_ as se,h as H,A as re,M as $e}from"./index.C6vAuIoQ.js";import{b as ee,c as te,p as ze}from"./setMeme.Czo-pxr3.js";import{f as Se,c as De,t as Le,l as Fe,a as Pe}from"./like-num.vue_vue_type_style_index_0_scoped_e71cc133_lang.DivT58zc.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@element-plus.imH8POSc.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";const Ue={class:"preset-tags-container"},Be={class:"preset-tags"},Ie={class:"added-tags"},Ae={__name:"submission-dialog",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(J){const v=c(""),k=c([]),T=c([]),m=c([]);function $(){H.get("/machine/dictList").then(s=>{s.code==="200"&&(k.value=s.data.map(t=>({label:t.dictLabel,value:t.dictValue})))})}$();const D=s=>{T.value=T.value.filter(t=>t.value!==s.value),m.value=m.value.filter(t=>t!==s.value),k.value.push(s)},_=s=>{if(m.value.length>=5){E.info("最多5个标签");return}T.value.some(t=>t.value===s.value)||(T.value.push(s),m.value.push(s.value),k.value=k.value.filter(t=>t.value!==s.value))},z=()=>{if(m.value.length===0||v.value===""||v.value===null)E.error("请选择标签或输入弹幕");else{if(m.value.length>5){E.error("最少一个标签，最多五个标签。");return}H.post(re.SUBMIT_MEME,{tags:m.value.join(","),barrage:v.value}).then(s=>{v.value="",s.code==="200"?E.success("投稿成功，待审核(一天内)"):s.code==="500"?E.error("烂梗已经有了，勿重复提交"):E.error("请求失败")}).catch(s=>{console.error("投稿失败",s),E.error("请求失败")})}},h=Ce(J,"modelValue");return(s,t)=>{const f=O("Warning"),b=le,V=oe,K=O("QuestionFilled"),L=ne,R=ae,j=me,F=fe;return d(),C(F,{modelValue:h.value,"onUpdate:modelValue":t[2]||(t[2]=p=>h.value=p),draggable:"",title:"投稿烂梗",width:"82%"},{footer:o(()=>[n(L,{type:"plain",onClick:t[1]||(t[1]=p=>h.value=!1)},{default:o(()=>t[13]||(t[13]=[u("关闭")])),_:1}),n(L,{type:"primary",onClick:z},{default:o(()=>t[14]||(t[14]=[u("投稿")])),_:1})]),default:o(()=>[a("h4",null,[t[10]||(t[10]=u("可选标签")),n(V,{width:300},{reference:o(()=>[n(b,{size:"16"},{default:o(()=>[n(f)]),_:1})]),default:o(()=>[t[3]||(t[3]=u(" 为解决烂梗分栏不足和分类不清晰问题。")),t[4]||(t[4]=a("br",null,null,-1)),t[5]||(t[5]=a("b",null,"点击标签即可添加",-1))]),_:1}),n(L,{link:"",type:"success",style:{"margin-left":"50%"}},{default:o(()=>[t[9]||(t[9]=u("投稿标签 ")),n(V,{width:300},{reference:o(()=>[n(b,{size:"16"},{default:o(()=>[n(K)]),_:1})]),default:o(()=>[t[6]||(t[6]=a("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),t[7]||(t[7]=a("br",null,null,-1)),t[8]||(t[8]=a("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),a("div",Ue,[a("div",Be,[(d(!0),w(I,null,A(k.value,(p,S)=>(d(),C(R,{round:"",key:S,closable:"",onClose:P=>_(p),onClick:P=>_(p),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:o(()=>[u(M(p.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),a("h4",null,[t[12]||(t[12]=u("已选标签 ")),n(V,{width:300},{reference:o(()=>[n(b,{size:"16"},{default:o(()=>[n(f)]),_:1})]),default:o(()=>[t[11]||(t[11]=a("b",null,"最少一个标签，最多五个标签。",-1))]),_:1})]),a("div",Ie,[(d(!0),w(I,null,A(T.value,(p,S)=>(d(),C(R,{round:"",key:S,closable:"",onClick:P=>D(p),onClose:P=>D(p),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:o(()=>[u(M(p.label),1)]),_:2},1032,["onClick","onClose"]))),128))]),n(j,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=p=>v.value=p),maxlength:"255",autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea",placeholder:" 烂梗...."},null,8,["modelValue"])]),_:1},8,["modelValue"])}}},Re=se(Ae,[["__scopeId","data-v-9a6ee391"]]),je={class:"memes-view"},Ne={class:"card-table"},Qe={key:0,class:"card"},We={class:"preset-tags-container"},Ge={class:"preset-tags"},Oe={class:"added-tags"},He={class:"top"},Ke=["onTouchstart","onTouchend"],qe={class:"barrage-text"},Je={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},Xe=["src"],Ye={class:"pagination-wrapper"},G=50,Ze=ke({__name:"memes-view",setup(J){const v=Ee(),k=Me(),T=Te(()=>(f.value=[],$e.find(l=>l.path===v.path))),m=c(!0),$=c([]),D=c(0),_=c(1),z=c(!1),h=c([]),s=c([]),t=c([]),f=c([]);async function b(l){var x;const e=(x=T.value)==null?void 0:x.category;if(!e){k.push("/404");return}let i;console.log(f.value.join(",")),f.value.length==0?i=await ee(e,l,G):i=await ee(e,l,G,f.value.join(",")),$.value=i.memeArr,D.value=i.total,m.value=!1}b(1);async function V(l){S(),H.get(re.GET_SORTED_ALL_MEME,{params:{pageNum:l,pageSize:G,tags:`${f.value}`}}).then(e=>{z.value=!0,$.value=e.data.list.map(i=>({total:i.total,content:i.barrage,id:i.id,copyCount:+i.cnt,tags:i.tags}))}).catch(e=>{$.value=[]})}he(()=>v.path,()=>{console.log("当前页面path:",v.path),z.value=!1,_.value=1,m.value=!0,b(1)});const K=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=l=>{_.value=l,K(),z.value==!1?b(l):V(l)},R=Le(Pe,Fe,2e3);async function j(l){const e=l.content,i=R(e);if(!(!i||i==="limitedSuccess")){if(De(),z.value==!0){if(await te("allbarrage",l.id,_.value)){await V(_.value);return}}else if(await te(l.category,l.id,_.value)){await b(_.value);return}ze()}}const F=c(!1),p=()=>{F.value=!0},S=()=>{H.get("/machine/dictList").then(l=>{l.code==="200"&&(h.value=l.data,s.value=l.data.map(e=>({label:e.dictLabel,value:e.dictValue})))}).catch(l=>{console.error("获取字典数据失败",l)})},P=l=>{if(!l||l.trim()==="")return[];const e=Array.from(new Set(l.split(",").map(g=>g.trim())));if(!h.value)return e.map(()=>({label:"",iconUrl:""}));const i=new Map(h.value.map(g=>[String(g.dictValue).trim(),g]));return e.map(g=>{const U=i.get(g);return U?{label:U.dictLabel,iconUrl:U.iconUrl}:{label:"",iconUrl:""}})};S();const X=l=>{t.value=t.value.filter(e=>e.value!==l.value),f.value=f.value.filter(e=>e!==l.value),s.value.push(l),b(1)},Y=l=>{t.value.some(e=>e.value===l.value)||(t.value.push(l),f.value.push(l.value),s.value=s.value.filter(e=>e.value!==l.value)),console.log(f.value),b(1)},ue=l=>{l.touchStartTime=Date.now()},ie=l=>{Date.now()-l.touchStartTime>200&&(l.popoverVisible=!0,setTimeout(()=>{l.popoverVisible=!1},1500))};return(l,e)=>{const i=O("Warning"),x=le,g=oe,U=O("QuestionFilled"),N=ne,Q=ae,q=ge,de=_e,pe=be,ce=ye,ve=we;return d(),w("div",je,[a("div",Ne,[Z(v).path==="/memes/AllBarrage"?(d(),w("div",Qe,[a("h4",null,[e[9]||(e[9]=u("按标签查看烂梗")),n(g,{width:300},{reference:o(()=>[n(x,{size:"16"},{default:o(()=>[n(i)]),_:1})]),default:o(()=>[e[2]||(e[2]=u(" 为解决烂梗分栏不足和分类不清晰问题。")),e[3]||(e[3]=a("br",null,null,-1)),e[4]||(e[4]=a("b",null,"点击标签即可添加",-1))]),_:1}),n(N,{link:"",type:"success",style:{"margin-left":"50%"}},{default:o(()=>[e[8]||(e[8]=u("投稿标签 ")),n(g,{width:300},{reference:o(()=>[n(x,{size:"16"},{default:o(()=>[n(U)]),_:1})]),default:o(()=>[e[5]||(e[5]=a("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),e[6]||(e[6]=a("br",null,null,-1)),e[7]||(e[7]=a("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),a("div",We,[a("div",Ge,[(d(!0),w(I,null,A(s.value,(r,y)=>(d(),C(Q,{round:"",key:y,closable:"",onClose:B=>Y(r),onClick:B=>Y(r),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:o(()=>[u(M(r.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),a("h4",null,[e[11]||(e[11]=u("包含标签 ")),n(g,null,{reference:o(()=>[n(x,{size:"16"},{default:o(()=>[n(i)]),_:1})]),default:o(()=>[e[10]||(e[10]=a("b",null,"烂梗包含该标签",-1))]),_:1})]),a("div",Oe,[(d(!0),w(I,null,A(t.value,(r,y)=>(d(),C(Q,{round:"",key:y,closable:"",onClick:B=>X(r),onClose:B=>X(r),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:o(()=>[u(M(r.label),1)]),_:2},1032,["onClick","onClose"]))),128))])])):W("",!0),a("div",He,[e[14]||(e[14]=a("div",{class:"submit-tips"},"想要补充更多烂梗？点击这里投稿→",-1)),n(N,{type:"primary",onClick:p},{default:o(()=>e[12]||(e[12]=[u("烂梗投稿")])),_:1}),Z(v).path==="/memes/AllBarrage"?(d(),C(N,{key:0,class:"btn-animate btn-animate__ball-collision",color:"#66CCFF",onClick:e[0]||(e[0]=r=>V(1))},{default:o(()=>e[13]||(e[13]=[u("按复制次数排序")])),_:1})):W("",!0)]),Ve((d(),C(de,{class:"main-table",data:$.value,stripe:"","cell-class-name":"hover-pointer","empty-text":"该标签组合为空，期待投稿！",onRowClick:j},{default:o(()=>[n(q,{align:"center",width:"60"},{default:o(r=>[n(Q,{round:"",effect:"plain"},{default:o(()=>[u(M(r.row.id),1)]),_:2},1024)]),_:1}),n(q,{prop:"content"},{default:o(r=>[n(g,{placement:"top",width:"auto",trigger:"hover",visible:r.row.popoverVisible},{reference:o(()=>[a("div",{style:{cursor:"pointer"},onTouchstart:y=>ue(r.row),onTouchend:y=>ie(r.row)},[a("span",qe,M(r.row.content),1)],40,Ke)]),default:o(()=>[a("div",Je,[(d(!0),w(I,null,A(P(r.row.tags),(y,B)=>(d(),w("div",{key:B,style:{"margin-right":"8px"}},[n(Q,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:o(()=>[y.iconUrl?(d(),w("img",{key:0,src:y.iconUrl,style:{width:"16px",height:"16px","object-fit":"cover","vertical-align":"middle"}},null,8,Xe)):W("",!0),u(" "+M(y.label),1)]),_:2},1024)]))),128))])]),_:2},1032,["visible"])]),_:1}),n(q,{align:"center",width:"100"},{default:o(r=>[n(N,{type:"primary",class:"copy-btn",onClick:xe(y=>j(r.row),["stop"])},{default:o(()=>[e[15]||(e[15]=u("复制 🎈")),n(Se,{num:r.row.copyCount},null,8,["num"])]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ve,m.value]]),a("div",Ye,[m.value?W("",!0):(d(),C(pe,{key:0,background:"red",layout:"prev, pager, next, jumper","current-page":_.value,total:D.value,"pager-count":4,"page-size":G,onCurrentChange:L},null,8,["current-page","total"]))])]),n(Re,{modelValue:F.value,"onUpdate:modelValue":e[1]||(e[1]=r=>F.value=r)},null,8,["modelValue"]),n(ce,{right:50,bottom:50},{default:o(()=>e[16]||(e[16]=[u("UP")])),_:1})])}}}),_t=se(Ze,[["__scopeId","data-v-a00a2bcf"]]);export{_t as default};
