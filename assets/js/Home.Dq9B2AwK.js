import{m as p,a as se,d as ne,e as ie,h as de,v as ce,n as F,E as ue,b as pe,c as me,g as ve,o as fe}from"./element-plus.DVYLd97e.js";import{o as i,c as m,r as v,X as ge,a as o,aw as be,P as l,H as a,I as K,G as M,u as W,a5 as _e,K as z,L as n,O as S,a4 as U,M as x,ag as X}from"./@vue.BkZGu_Ap.js";import{_ as G,h as C,A as ye,C as he}from"./index.DdO95VHm.js";import{M as xe}from"./@element-plus.imH8POSc.js";import{_ as Ce}from"./favicon.CJfgpdIL.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.CJ_8Ucol.js";const we={},ke={src:Ce,alt:"",style:{width:"30px"}};function Ie(Y,w){return i(),m("img",ke)}const Ee=G(we,[["render",Ie]]),Te={class:"home"},Se={class:"card third-card"},Ve={style:{cursor:"pointer"}},Be={class:"barrage-text"},Me={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},Ue=["src"],De={class:"card fourth-card"},Pe={style:{cursor:"pointer"}},$e={class:"barrage-text"},ze={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},Le=["src"],Re={class:"card fifth-card"},Ne={class:"preset-tags-container"},Oe={class:"preset-tags"},He={class:"added-tags"},Qe="custom-popover",je={__name:"Home",setup(Y){const w=v(!0),D=v(!1),k=ge({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{sessionStorage.getItem("firstOpening")||C.get("https://api.vvhan.com/api/visitor.info").then(t=>{const e=t;localStorage.setItem("ip",t.ip),p({icon:Ee,dangerouslyUseHTMLString:!0,title:"你好",message:`
            <p>
                欢迎来自<b>${e.location||"地球"}</b>的朋友<br/>  
                ${e.system||"外星操作系统"} ${e.browser||"牛逼浏览器"}<br/>
                IP: ${e.ip||"地球"} 
            </p>
            `,offset:50,customClass:"myClass",duration:1e3}),sessionStorage.setItem("firstOpening",1)})})();const P=v([]),J=()=>{C.get("/machine/dictList").then(t=>{t.code==="200"&&(P.value=t.data,I.value=t.data.map(e=>({label:e.dictLabel,value:e.dictValue})))}).catch(t=>{console.error("获取字典数据失败",t)})},L=t=>{if(!t||t.trim()==="")return[];const e=Array.from(new Set(t.split(",").map(r=>r.trim())));if(!P.value)return e.map(()=>({label:"",iconUrl:""}));const d=new Map(P.value.map(r=>[String(r.dictValue).trim(),r]));return e.map(r=>{const c=d.get(r);return c?{label:c.dictLabel,iconUrl:c.iconUrl}:{label:"",iconUrl:""}})};J();const V=v(""),y=v(""),I=v([]),E=v([]),f=v([]),R=t=>{E.value=E.value.filter(e=>e.value!==t.value),f.value=f.value.filter(e=>e!==t.value),I.value.push(t)},N=t=>{if(f.value.length>=5){p.info("最多5个标签");return}E.value.some(e=>e.value===t.value)||(E.value.push(t),f.value.push(t.value),I.value=I.value.filter(e=>e.value!==t.value))},Z=()=>{if(f.value.length===0||y.value===""||y.value===null)p.error("请选择标签或输入弹幕");else{if(f.value.length>5){p.error("最少一个标签，最多五个标签。");return}C.post(ye.SUBMIT_MEME,{tags:f.value.join(","),barrage:y.value}).then(t=>{y.value="",t.code==="200"?p.success("投稿成功，待审核(一天内)"):t.code==="500"?p.error("烂梗已经有了，勿重复提交"):p.error("请求失败")}).catch(t=>{console.error("投稿失败",t),p.error("请求失败")})}},O=()=>{console.log(V.value),C.post("/machine/Query",{barrage:V.value}).then(t=>{D.value=!0,w.value=!1,k.filteredItems=t.data||[]})};var ee=v("搜索烂梗...");const H=()=>{C.get("/machine/getRandOne").then(t=>{k.tableData=[t.data],w.value=!1}).catch(t=>{console.error("随机失败")})};H();const te=()=>{F({message:"复制成功",type:"success"})},ae=()=>{F({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let $=0,T=null,B=0;const Q=t=>{const e=new Date().getTime(),d={x:event.clientX,y:event.clientY};if(T&&T.x===d.x&&T.y===d.y?(B++,console.log(B),B>4&&ue.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):B=0,e-$<1500){p({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const c=t.barrage;let b=document.createElement("input");b.value=c,document.body.appendChild(b),b.select();try{document.execCommand("Copy")}catch(h){p({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",h)}document.body.removeChild(b),$=e,T=d;return}T=d,$=e;const g=t.barrage;let r=document.createElement("input");r.value=g,document.body.appendChild(r),r.select();try{document.execCommand("Copy"),te(),console.log("内容已复制到剪贴板"),C.get(`/machine/addCnt/${t.id}`).then(()=>{})}catch(c){p({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",c),ae()}document.body.removeChild(r)},oe=()=>{k.filteredItems=[],D.value=!1};return(t,e)=>{const d=se,g=pe,r=ne,c=me,b=ie,h=ve,j=de,q=X("Warning"),le=X("QuestionFilled"),re=fe,A=ce;return i(),m(S,null,[e[18]||(e[18]=o("div",{class:"boomouder"},[o("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"})],-1)),o("div",Te,[e[16]||(e[16]=be('<div class="card first-card" data-v-494ef80b><div data-v-494ef80b><b data-v-494ef80b><p class="announcement" data-v-494ef80b> 新增时光相册(可评论)，新增在线投稿弹幕。玩神照片可以在上方上传照片上传至相册 </p></b></div></div><div class="card second-card" data-v-494ef80b><p data-v-494ef80b> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-494ef80b><a href="https://sb6657.cn" data-v-494ef80b>sb6657.cn</a></span> 尽情欣赏你们的烂梗吧。 另寻几位玩神老观众(21级牌子或3000h观看时长)，获得后台审核和记录的资格！！ </p></div>',2)),o("div",Se,[o("div",null,[l(d,{type:"primary",onClick:H},{default:a(()=>e[2]||(e[2]=[n("点我随机一条弹幕")])),_:1}),K((i(),M(b,{data:k.tableData,class:"barrage-table",onRowClick:Q},{default:a(()=>[l(c,{prop:"barrage"},{default:a(s=>[l(r,{placement:"top",width:"auto",trigger:"hover"},{reference:a(()=>[o("div",Ve,[o("span",Be,x(s.row.barrage),1)])]),default:a(()=>[o("div",Me,[(i(!0),m(S,null,U(L(s.row.tags),(u,_)=>(i(),m("div",{key:_,style:{"margin-right":"8px"}},[l(g,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:a(()=>[u.iconUrl?(i(),m("img",{key:0,src:u.iconUrl,style:{width:"16px",height:"16px","object-fit":"cover","vertical-align":"middle"}},null,8,Ue)):z("",!0),n(" "+x(u.label),1)]),_:2},1024)]))),128))])]),_:2},1024)]),_:1}),l(c,{label:"",align:"center",width:"85"},{default:a(()=>[l(d,{type:"primary"},{default:a(()=>e[3]||(e[3]=[n("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[A,w.value]])])]),o("div",De,[o("div",null,[l(j,{modelValue:V.value,"onUpdate:modelValue":e[0]||(e[0]=s=>V.value=s),placeholder:W(ee),onKeydown:_e(O,["enter"]),clearable:"",class:"search-input",onInput:oe},{append:a(()=>[l(d,{type:"primary",onClick:O},{default:a(()=>[l(h,null,{default:a(()=>[l(W(xe))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),D.value?K((i(),M(b,{key:0,data:k.filteredItems,stripe:"",onRowClick:Q,"cell-style":{cursor:"Pointer",fontSize:"large"}},{default:a(()=>[l(c,{prop:"barrage"},{default:a(s=>[l(r,{placement:"top",width:"auto",trigger:"hover","popper-class":Qe},{reference:a(()=>[o("div",Pe,[o("span",$e,x(s.row.barrage),1)])]),default:a(()=>[o("div",ze,[(i(!0),m(S,null,U(L(s.row.tags),(u,_)=>(i(),m("div",{key:_,style:{"margin-right":"8px"}},[l(g,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:a(()=>[u.iconUrl?(i(),m("img",{key:0,src:u.iconUrl,style:{width:"16px",height:"16px","object-fit":"cover","vertical-align":"middle"}},null,8,Le)):z("",!0),n(" "+x(u.label),1)]),_:2},1024)]))),128))])]),_:2},1024)]),_:1}),l(c,{label:"",align:"center",width:"85"},{default:a(()=>[l(d,{type:"primary"},{default:a(()=>e[4]||(e[4]=[n("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[A,w.value]]):z("",!0)])]),o("div",Re,[o("div",null,[o("span",null,[e[12]||(e[12]=n("可选标签")),l(r,{width:300},{reference:a(()=>[l(h,{size:"16"},{default:a(()=>[l(q)]),_:1})]),default:a(()=>[e[5]||(e[5]=n(" 为解决烂梗分栏不足和分类不清晰问题。")),e[6]||(e[6]=o("br",null,null,-1)),e[7]||(e[7]=o("b",null,"点击标签即可添加",-1))]),_:1}),l(d,{link:"",type:"success",style:{"margin-left":"50%"}},{default:a(()=>[e[11]||(e[11]=n("投稿标签 ")),l(r,{width:300},{reference:a(()=>[l(h,{size:"16"},{default:a(()=>[l(le)]),_:1})]),default:a(()=>[e[8]||(e[8]=o("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),e[9]||(e[9]=o("br",null,null,-1)),e[10]||(e[10]=o("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),o("div",Ne,[o("div",Oe,[(i(!0),m(S,null,U(I.value,(s,u)=>(i(),M(g,{round:"",key:u,closable:"",onClose:_=>N(s),onClick:_=>N(s),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:a(()=>[n(x(s.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),o("span",null,[e[14]||(e[14]=n("已选标签 ")),l(r,{width:250},{reference:a(()=>[l(h,{size:"16"},{default:a(()=>[l(q)]),_:1})]),default:a(()=>[e[13]||(e[13]=o("b",null,"最少一个标签，最多五个标签。",-1))]),_:1})]),o("div",He,[(i(!0),m(S,null,U(E.value,(s,u)=>(i(),M(g,{round:"",key:u,closable:"",onClick:_=>R(s),onClose:_=>R(s),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:a(()=>[n(x(s.label),1)]),_:2},1032,["onClick","onClose"]))),128))]),l(j,{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=s=>y.value=s),maxlength:"255",autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea",placeholder:" 烂梗...."},null,8,["modelValue"]),l(d,{class:"saveBnt",type:"primary",onClick:Z},{default:a(()=>e[15]||(e[15]=[n("投稿")])),_:1})]),l(re,{right:50,bottom:50})]),l(he,{class:"ChatRoom card"}),e[17]||(e[17]=o("div",{class:"card sixth-card"},[n(" 友情链接 "),o("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu"),n("    "),o("a",{href:"https://sb6657.cn/#/Starrysky",target:"_blank"},"星空背景")],-1))])],64)}}},nt=G(je,[["__scopeId","data-v-494ef80b"]]);export{nt as default};
