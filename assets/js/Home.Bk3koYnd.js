import{b as d,a as K,g as W,s as j,x as X,v as z,p as P,E as G,e as J,r as Y,y as Z,A as ee,B as te,C as ae}from"./element-plus.CxvSu1tc.js";import{o as C,c as U,r as y,X as oe,a as r,P as t,aw as le,H as l,I as S,G as T,u as Q,a5 as re,K as se,L as p,O as ne}from"./@vue.BkZGu_Ap.js";import{_ as H,h as _,A as ie,C as ce}from"./index.BET8SP_O.js";import{M as de}from"./@element-plus.imH8POSc.js";import{_ as me}from"./favicon.CJfgpdIL.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.CJ_8Ucol.js";import"./fireworks-js.1hhxDOOS.js";const pe={},ue={src:me,alt:"",style:{width:"30px"}};function be(M,u){return C(),U("img",ue)}const ge=H(pe,[["render",be]]),fe={class:"home"},_e={class:"card third-card"},ve={class:"card fourth-card"},he={class:"card fifth-card"},ye={__name:"Home",setup(M){const u=y(!0),x=y(!1),a=oe({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{sessionStorage.getItem("firstOpening")||_.get("https://api.vvhan.com/api/visitor.info").then(o=>{const e=o;localStorage.setItem("ip",o.ip),d({icon:ge,dangerouslyUseHTMLString:!0,title:"你好",message:`
            <p>
                欢迎来自<b>${e.location||"地球"}</b>的朋友<br/>  
                ${e.system||"外星操作系统"} ${e.browser||"牛逼浏览器"}<br/>
                IP: ${e.ip||"地球"} 
            </p>
            `,offset:50,customClass:"myClass",duration:1e3}),sessionStorage.setItem("firstOpening",1)})})();const v=y(""),N={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},O=()=>{a.table===""||a.barrage===""?d.error("请选择分栏或输入烂梗"):_.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:a.table,barrage:a.barrage}).then(o=>{a.dialogFormVisible=!1,a.barrage="",o.code==="200"?d.success("投稿成功，待审核(一天内)"):d.error("请求失败")})},E=()=>{console.log(v.value),_.post("/machine/Query",{QueryBarrage:v.value}).then(o=>{x.value=!0,u.value=!1,a.filteredItems=o.data||[]})};var R=y("搜索烂梗...");const w=()=>{_.get("/machine/getRandOne").then(o=>{a.tableData=[o.data],u.value=!1}).catch(o=>{console.error("随机失败")})};w();const q=()=>{P({message:"复制成功",type:"success"})},D=()=>{P({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let I=0,b=null,h=0;const V=o=>{const e=new Date().getTime(),s={x:event.clientX,y:event.clientY};if(b&&b.x===s.x&&b.y===s.y?(h++,console.log(h),h>4&&G.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):h=0,e-I<1500){d({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const g=o.barrage;let c=document.createElement("input");c.value=g,document.body.appendChild(c),c.select();try{document.execCommand("Copy")}catch(n){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",n)}document.body.removeChild(c),I=e,b=s;return}b=s,I=e;const m=o.barrage;let i=document.createElement("input");i.value=m,document.body.appendChild(i),i.select();try{document.execCommand("Copy"),q(),console.log("内容已复制到剪贴板"),_.post("/machine/addCnt",{PageNum:a.currentPage,table:"allbarrage",id:o.id}).then(()=>{setTimeout(()=>load(a.currentPage),50)})}catch(g){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",g),D()}document.body.removeChild(i)},L=()=>{a.filteredItems=[],x.value=!1};return(o,e)=>{const s=K,m=J,i=W,g=Y,c=j,n=Z,$=ee,k=te,A=X,F=ae,B=z;return C(),U(ne,null,[e[9]||(e[9]=r("div",{class:"boomouder"},[r("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"})],-1)),t(ie,{class:"AnnualHotList"}),r("div",fe,[e[7]||(e[7]=le('<div class="card first-card" data-v-ee35f98b><div data-v-ee35f98b><b data-v-ee35f98b><p class="announcement" data-v-ee35f98b> 新增时光相册(可评论)，新增在线投稿弹幕。玩神照片可以在上方上传照片上传至相册 </p></b></div></div><div class="card second-card" data-v-ee35f98b><p data-v-ee35f98b> 你好  🎉🎉🎉🎉🎉🎉祝大家新年快乐，身体健康，开开心心，长生不老，永远不死！！！！🎉🎉🎉🎉🎉🎉<br data-v-ee35f98b> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-ee35f98b><a href="https://sb6657.cn" data-v-ee35f98b>sb6657.cn</a></span> 尽情欣赏你们的烂梗吧。 另寻几位玩神老观众(21级牌子或3000h观看时长)，获得后台审核和记录的资格！！ </p></div>',2)),r("div",_e,[r("div",null,[t(s,{type:"primary",onClick:w},{default:l(()=>e[3]||(e[3]=[p("点我随机一条弹幕")])),_:1}),S((C(),T(i,{data:a.tableData,class:"barrage-table",onRowClick:V},{default:l(()=>[t(m,{prop:"barrage"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[4]||(e[4]=[p("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[B,u.value]])])]),r("div",ve,[r("div",null,[t(c,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=f=>v.value=f),placeholder:Q(R),onKeydown:re(E,["enter"]),clearable:"",class:"search-input",onInput:L},{append:l(()=>[t(s,{type:"primary",onClick:E},{default:l(()=>[t(g,null,{default:l(()=>[t(Q(de))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),x.value?S((C(),T(i,{key:0,data:a.filteredItems,stripe:"",onRowClick:V,"cell-style":{cursor:"Pointer",fontSize:"large"}},{default:l(()=>[t(m,{prop:"barrage",label:"弹幕"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[5]||(e[5]=[p("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[B,u.value]]):se("",!0)])]),r("div",he,[r("div",null,[t(A,{model:a,"label-width":"100px",rules:N,"label-position":"right"},{default:l(()=>[t(k,{label:"分栏","label-width":o.auto,prop:"table"},{default:l(()=>[t($,{modelValue:a.table,"onUpdate:modelValue":e[1]||(e[1]=f=>a.table=f),placeholder:"选择上传的分栏"},{default:l(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(k,{label:"烂梗内容",prop:"barrage"},{default:l(()=>[t(c,{maxlength:"255",modelValue:a.barrage,"onUpdate:modelValue":e[2]||(e[2]=f=>a.barrage=f),autocomplete:"off","show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1}),t(s,{type:"primary",onClick:O,class:"submit-button"},{default:l(()=>e[6]||(e[6]=[p(" 投稿 ")])),_:1})]),_:1},8,["model"])]),t(F,{right:50,bottom:50})]),t(ce,{class:"ChatRoom card"}),e[8]||(e[8]=r("div",{class:"card sixth-card"},[p(" 友情链接 "),r("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu"),p("    "),r("a",{href:"https://sb6657.cn/#/Starrysky",target:"_blank"},"星空背景")],-1))])],64)}}},qe=H(ye,[["__scopeId","data-v-ee35f98b"]]);export{qe as default};
