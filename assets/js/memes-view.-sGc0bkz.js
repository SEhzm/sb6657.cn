import{b as E,n as le,d as oe,c as ne,f as ae,j as me,e as fe,g as _e,h as ge,F as be,x as ye,v as he}from"./element-plus.C0xebxLf.js";import{b as p,ay as we,ag as O,o as i,G as w,H as o,P as n,L as c,a,c as _,O as I,a4 as A,K as U,M as $,d as Ce,k as ke,e as xe,u as Z,I as Te,V as Ve}from"./@vue.BqJqC78G.js";import{u as Ee,b as Ue}from"./vue-router.PTNpl1pN.js";import{_ as se,h as H,A as re,M as $e}from"./index.JU8DVUUU.js";import{b as ee,c as te,p as Me}from"./setMeme.6lXgGlk3.js";import{f as ze,c as Se,t as De,l as Le,a as Fe}from"./flip-num.DZRt436l.js";/* empty css                                                                 */import"./lodash-es.C-zDejYo.js";import"./@vueuse.C-35htfh.js";import"./@element-plus.Du5FBV_q.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.D6RD0Zoz.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./js-cookie.Cz0CWeBA.js";const Pe={class:"preset-tags-container"},Be={class:"preset-tags"},je=["src"],Ie={style:{"vertical-align":"middle"}},Ae={class:"added-tags"},Re={__name:"submission-dialog",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(J){const v=p(""),C=p([]),k=p([]),m=p([]);function M(){H.get("/machine/dictList").then(r=>{r.code===200&&(C.value=r.data.map(t=>({iconUrl:t.iconUrl,label:t.dictLabel,value:t.dictValue})))})}M();const D=r=>{k.value=k.value.filter(t=>t.value!==r.value),m.value=m.value.filter(t=>t!==r.value),C.value.push(r)},b=r=>{if(m.value.length>=5){E.info("最多5个标签");return}k.value.some(t=>t.value===r.value)||(k.value.push(r),m.value.push(r.value),C.value=C.value.filter(t=>t.value!==r.value))},z=()=>{if(m.value.length===0||v.value===""||v.value===null)E.error("请选择标签或输入弹幕");else{if(m.value.length>5){E.error("最少一个标签，最多五个标签。");return}H.post(re.SUBMIT_MEME,{tags:m.value.join(","),barrage:v.value}).then(r=>{v.value="",r.code===200?E.success("投稿成功，待审核(一天内)"):r.code===500?E.error("烂梗已经有了，勿重复提交"):E.error("请求失败")}).catch(r=>{console.error("投稿失败",r),E.error("请求失败")})}},x=we(J,"modelValue");return(r,t)=>{const f=O("Warning"),y=le,T=oe,K=O("QuestionFilled"),L=ne,R=ae,N=me,F=fe;return i(),w(F,{modelValue:x.value,"onUpdate:modelValue":t[2]||(t[2]=d=>x.value=d),draggable:"",title:"投稿烂梗",width:"82%"},{footer:o(()=>[n(L,{type:"plain",onClick:t[1]||(t[1]=d=>x.value=!1)},{default:o(()=>t[13]||(t[13]=[c("关闭")])),_:1}),n(L,{type:"primary",onClick:z},{default:o(()=>t[14]||(t[14]=[c("投稿")])),_:1})]),default:o(()=>[a("h4",null,[t[10]||(t[10]=c("可选标签")),n(T,{width:300},{reference:o(()=>[n(y,{size:"16"},{default:o(()=>[n(f)]),_:1})]),default:o(()=>[t[3]||(t[3]=c(" 为解决烂梗分栏不足和分类不清晰问题。")),t[4]||(t[4]=a("br",null,null,-1)),t[5]||(t[5]=a("b",null,"点击标签即可添加",-1))]),_:1}),n(L,{link:"",type:"success",style:{"margin-left":"50%"}},{default:o(()=>[t[9]||(t[9]=c("投稿标签 ")),n(T,{width:300},{reference:o(()=>[n(y,{size:"16"},{default:o(()=>[n(K)]),_:1})]),default:o(()=>[t[6]||(t[6]=a("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),t[7]||(t[7]=a("br",null,null,-1)),t[8]||(t[8]=a("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),a("div",Pe,[a("div",Be,[(i(!0),_(I,null,A(C.value,(d,S)=>(i(),w(R,{round:"",key:S,closable:"",onClose:P=>b(d),onClick:P=>b(d),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:o(()=>[d.iconUrl?(i(),_("img",{key:0,src:d.iconUrl,style:{width:"22px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,je)):U("",!0),a("span",Ie,$(d.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),a("h4",null,[t[12]||(t[12]=c("已选标签 ")),n(T,{width:300},{reference:o(()=>[n(y,{size:"16"},{default:o(()=>[n(f)]),_:1})]),default:o(()=>[t[11]||(t[11]=a("b",null,"最少一个标签，最多五个标签。",-1))]),_:1})]),a("div",Ae,[(i(!0),_(I,null,A(k.value,(d,S)=>(i(),w(R,{round:"",key:S,closable:"",onClick:P=>D(d),onClose:P=>D(d),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:o(()=>[c($(d.label),1)]),_:2},1032,["onClick","onClose"]))),128))]),n(N,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=d=>v.value=d),maxlength:"255",autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea",placeholder:" 烂梗...."},null,8,["modelValue"])]),_:1},8,["modelValue"])}}},Ne=se(Re,[["__scopeId","data-v-093bb159"]]),Qe={class:"memes-view"},We={class:"card-table"},Ge={key:0,class:"card"},Oe={class:"preset-tags-container"},He={class:"preset-tags"},Ke=["src"],qe={style:{"vertical-align":"middle"}},Je={class:"added-tags"},Xe=["src"],Ye={style:{"vertical-align":"middle"}},Ze={class:"top"},et=["onTouchstart","onTouchend"],tt={class:"barrage-text"},lt={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},ot=["src"],nt={style:{"vertical-align":"middle"}},at={class:"pagination-wrapper"},G=50,st=Ce({__name:"memes-view",setup(J){const v=Ee(),C=Ue(),k=ke(()=>(f.value=[],$e.find(l=>l.path===v.path))),m=p(!0),M=p([]),D=p(0),b=p(1),z=p(!1),x=p([]),r=p([]),t=p([]),f=p([]);async function y(l){var V;const e=(V=k.value)==null?void 0:V.category;if(!e){C.push("/404");return}let u;console.log(f.value.join(",")),f.value.length==0?u=await ee(e,l,G):u=await ee(e,l,G,f.value.join(",")),M.value=u.memeArr,D.value=u.total,m.value=!1}y(1);async function T(l){S(),H.get(re.GET_SORTED_ALL_MEME,{params:{pageNum:l,pageSize:G,tags:`${f.value}`}}).then(e=>{z.value=!0,M.value=e.data.list.map(u=>({total:u.total,content:u.barrage,id:u.id,copyCount:+u.cnt,tags:u.tags}))}).catch(e=>{M.value=[]})}xe(()=>v.path,()=>{console.log("当前页面path:",v.path),z.value=!1,b.value=1,m.value=!0,y(1)});const K=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=l=>{b.value=l,K(),z.value==!1?y(l):T(l)},R=De(Fe,Le,2e3);async function N(l){const e=l.content,u=R(e);if(!(!u||u==="limitedSuccess")){if(Se(),z.value==!0){if(await te("allbarrage",l.id,b.value)){await T(b.value);return}}else if(await te(l.category,l.id,b.value)){await y(b.value);return}Me()}}const F=p(!1),d=()=>{F.value=!0},S=()=>{H.get("/machine/dictList").then(l=>{l.code===200&&(x.value=l.data,r.value=l.data.map(e=>({iconUrl:e.iconUrl,label:e.dictLabel,value:e.dictValue})))}).catch(l=>{console.error("获取字典数据失败",l)})},P=l=>{if(!l||l.trim()==="")return[];const e=Array.from(new Set(l.split(",").map(g=>g.trim())));if(!x.value)return e.map(()=>({label:"",iconUrl:""}));const u=new Map(x.value.map(g=>[String(g.dictValue).trim(),g]));return e.map(g=>{const B=u.get(g);return B?{label:B.dictLabel,iconUrl:B.iconUrl}:{label:"",iconUrl:""}})};S();const X=l=>{t.value=t.value.filter(e=>e.value!==l.value),f.value=f.value.filter(e=>e!==l.value),r.value.push(l),y(1)},Y=l=>{t.value.some(e=>e.value===l.value)||(t.value.push(l),f.value.push(l.value),r.value=r.value.filter(e=>e.value!==l.value)),console.log(f.value),y(1)},ie=l=>{l.touchStartTime=Date.now()},ue=l=>{Date.now()-l.touchStartTime>100&&(l.popoverVisible=!0,setTimeout(()=>{l.popoverVisible=!1},1500))};return(l,e)=>{const u=O("Warning"),V=le,g=oe,B=O("QuestionFilled"),Q=ne,W=ae,q=_e,de=ge,ce=be,pe=ye,ve=he;return i(),_("div",Qe,[a("div",We,[Z(v).path==="/memes/AllBarrage"?(i(),_("div",Ge,[a("h4",null,[e[9]||(e[9]=c("按标签查看烂梗")),n(g,{width:300},{reference:o(()=>[n(V,{size:"16"},{default:o(()=>[n(u)]),_:1})]),default:o(()=>[e[2]||(e[2]=c(" 为解决烂梗分栏不足和分类不清晰问题。")),e[3]||(e[3]=a("br",null,null,-1)),e[4]||(e[4]=a("b",null,"点击标签即可添加",-1))]),_:1}),n(Q,{link:"",type:"success",style:{"margin-left":"50%"}},{default:o(()=>[e[8]||(e[8]=c("投稿标签 ")),n(g,{width:300},{reference:o(()=>[n(V,{size:"16"},{default:o(()=>[n(B)]),_:1})]),default:o(()=>[e[5]||(e[5]=a("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),e[6]||(e[6]=a("br",null,null,-1)),e[7]||(e[7]=a("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),a("div",Oe,[a("div",He,[(i(!0),_(I,null,A(r.value,(s,h)=>(i(),w(W,{round:"",key:h,closable:"",onClose:j=>Y(s),onClick:j=>Y(s),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:o(()=>[s.iconUrl?(i(),_("img",{key:0,src:s.iconUrl,style:{width:"22px",height:"25px","object-fit":"cover","vertical-align":"middle"}},null,8,Ke)):U("",!0),a("span",qe,$(s.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),a("h4",null,[e[11]||(e[11]=c("包含标签 ")),n(g,null,{reference:o(()=>[n(V,{size:"16"},{default:o(()=>[n(u)]),_:1})]),default:o(()=>[e[10]||(e[10]=a("b",null,"烂梗包含该标签",-1))]),_:1})]),a("div",Je,[(i(!0),_(I,null,A(t.value,(s,h)=>(i(),w(W,{round:"",key:h,closable:"",onClick:j=>X(s),onClose:j=>X(s),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:o(()=>[s.iconUrl?(i(),_("img",{key:0,src:s.iconUrl,style:{width:"22px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,Xe)):U("",!0),a("span",Ye,$(s.label),1)]),_:2},1032,["onClick","onClose"]))),128))])])):U("",!0),a("div",Ze,[e[14]||(e[14]=a("div",{class:"submit-tips"},"想要补充更多烂梗？点击这里投稿→",-1)),n(Q,{type:"primary",onClick:d},{default:o(()=>e[12]||(e[12]=[c("烂梗投稿")])),_:1}),Z(v).path==="/memes/AllBarrage"?(i(),w(Q,{key:0,class:"btn-animate btn-animate__ball-collision",color:"#66CCFF",onClick:e[0]||(e[0]=s=>T(1))},{default:o(()=>e[13]||(e[13]=[c("按复制次数排序")])),_:1})):U("",!0)]),Te((i(),w(de,{class:"main-table",data:M.value,stripe:"","cell-class-name":"hover-pointer","empty-text":"该标签组合为空，期待投稿！",onRowClick:N},{default:o(()=>[n(q,{align:"center",width:"60"},{default:o(s=>[n(W,{round:"",effect:"plain"},{default:o(()=>[c($(s.row.id),1)]),_:2},1024)]),_:1}),n(q,{prop:"content"},{default:o(s=>[n(g,{placement:"top",width:"auto",trigger:"hover",visible:s.row.popoverVisible},{reference:o(()=>[a("div",{style:{cursor:"pointer"},onTouchstart:h=>ie(s.row),onTouchend:h=>ue(s.row)},[a("span",tt,$(s.row.content),1)],40,et)]),default:o(()=>[a("div",lt,[(i(!0),_(I,null,A(P(s.row.tags),(h,j)=>(i(),_("div",{key:j,style:{"margin-right":"8px"}},[n(W,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:o(()=>[h.iconUrl?(i(),_("img",{key:0,src:h.iconUrl,style:{width:"16px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,ot)):U("",!0),a("span",nt,$(h.label),1)]),_:2},1024)]))),128))])]),_:2},1032,["visible"])]),_:1}),n(q,{align:"center",width:"100"},{default:o(s=>[n(Q,{type:"primary",class:"copy-btn",onClick:Ve(h=>N(s.row),["stop"])},{default:o(()=>[e[15]||(e[15]=c("复制 🌈")),n(ze,{num:s.row.copyCount},null,8,["num"])]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ve,m.value]]),a("div",at,[m.value?U("",!0):(i(),w(ce,{key:0,background:"red",layout:"prev, pager, next, jumper","current-page":b.value,total:D.value,"pager-count":4,"page-size":G,onCurrentChange:L},null,8,["current-page","total"]))])]),n(Ne,{modelValue:F.value,"onUpdate:modelValue":e[1]||(e[1]=s=>F.value=s)},null,8,["modelValue"]),n(pe,{right:50,bottom:50},{default:o(()=>e[16]||(e[16]=[c("UP")])),_:1})])}}}),Vt=se(st,[["__scopeId","data-v-99312946"]]);export{Vt as default};
