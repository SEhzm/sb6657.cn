import{l as d,a as j,e as z,b as Z,m as A,v as J,n as T,E as X,d as Y,g as G,o as K,p as ee,q as te,r as ae}from"./element-plus.Boxi6P7k.js";import{_ as M,h as f}from"./index.D6-wCplG.js";import{M as oe}from"./@element-plus.CQ2moJ0T.js";import{_ as le}from"./favicon.CJfgpdIL.js";import{o as x,c as Q,r as y,Z as re,a as r,ax as se,U as t,O as l,P as B,M as P,u as S,R as ne,S as _,F as ie}from"./@vue.kwc71ESp.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.Bmvu7DnR.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.DkBAQHKx.js";const ce={},de={src:le,alt:"",style:{width:"30px"}};function me(U,p){return x(),Q("img",de)}const pe=M(ce,[["render",me]]),ue={class:"home"},ge={class:"card third-card"},be={class:"card fourth-card"},fe={class:"card fifth-card"},_e={__name:"Home",setup(U){const p=y(!0),C=y(!1),a=re({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{sessionStorage.getItem("firstOpening")||f.get("https://api.vvhan.com/api/visitor.info").then(o=>{const e=o;localStorage.setItem("ip",o.ip),d({icon:pe,dangerouslyUseHTMLString:!0,title:"你好",message:`
            <p>
                欢迎来自<b>${e.location||"地球"}</b>的朋友<br/>  
                ${e.system||"外星操作系统"} ${e.browser||"牛逼浏览器"}<br/>
                IP: ${e.ip||"地球"} 
            </p>
            `,offset:50,customClass:"myClass",duration:1e3}),sessionStorage.setItem("firstOpening",1)})})();const v=y(""),q={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},N=()=>{a.table===""||a.barrage===""?d.error("请选择分栏或输入烂梗"):f.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:a.table,barrage:a.barrage}).then(o=>{a.dialogFormVisible=!1,a.barrage="",o.code==="200"?d.success("投稿成功，待审核(一天内)"):d.error("请求失败")})},O=()=>{console.log(v.value),f.post("/machine/Query",{QueryBarrage:v.value}).then(o=>{C.value=!0,p.value=!1,a.filteredItems=o.data||[]})};var D=y("搜索烂梗...");const I=()=>{f.get("/machine/getRandOne").then(o=>{a.tableData=[o.data],p.value=!1}).catch(o=>{console.error("随机失败")})};I();const R=()=>{T({message:"复制成功",type:"success"})},$=()=>{T({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let E=0,u=null,h=0;const k=o=>{const e=new Date().getTime(),s={x:event.clientX,y:event.clientY};if(u&&u.x===s.x&&u.y===s.y?(h++,console.log(h),h>4&&X.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):h=0,e-E<1500){d({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const g=o.barrage;let c=document.createElement("input");c.value=g,document.body.appendChild(c),c.select();try{document.execCommand("Copy")}catch(n){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",n)}document.body.removeChild(c),E=e,u=s;return}u=s,E=e;const m=o.barrage;let i=document.createElement("input");i.value=m,document.body.appendChild(i),i.select();try{document.execCommand("Copy"),R(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:a.currentPage,table:"allbarrage",id:o.id}).then(()=>{setTimeout(()=>load(a.currentPage),50)})}catch(g){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",g),$()}document.body.removeChild(i)},F=()=>{a.filteredItems=[],C.value=!1};return(o,e)=>{const s=j,m=Y,i=z,g=G,c=Z,n=K,H=ee,V=te,L=A,W=ae,w=J;return x(),Q(ie,null,[e[10]||(e[10]=r("div",{class:"boomouder"},[r("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"})],-1)),r("div",ue,[e[8]||(e[8]=se('<div class="card first-card" data-v-6ef02917><div data-v-6ef02917><b data-v-6ef02917><p class="announcement" data-v-6ef02917> 新增时光相册(可评论)，新增在线投稿弹幕。玩神照片可以在上方上传照片上传至相册 </p><p class="announcement-highlight" data-v-6ef02917> 最新推出了油猴TamperMonkey插件，可以在直播间直接搜索进行复制和一键发送， <a href="https://sb6657.cn/#/Tampermonkey" target="_blank" data-v-6ef02917>点我安装！</a></p></b></div></div><div class="card second-card" data-v-6ef02917><p data-v-6ef02917> 你好 <br data-v-6ef02917> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-6ef02917><a href="https://sb6657.cn" data-v-6ef02917>sb6657.cn</a></span> 尽情欣赏你们的烂梗吧。 </p></div>',2)),r("div",ge,[r("div",null,[t(s,{type:"primary",onClick:I},{default:l(()=>e[3]||(e[3]=[_("点我随机一条弹幕")])),_:1}),B((x(),P(i,{data:a.tableData,class:"barrage-table",onRowClick:k},{default:l(()=>[t(m,{prop:"barrage"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[4]||(e[4]=[_("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[w,p.value]])])]),r("div",be,[r("div",null,[e[6]||(e[6]=r("span",{style:{position:"absolute","font-size":"20px","margin-top":"-20px",color:"blue"}}," --------需点击右侧搜索按钮--------- ",-1)),t(c,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=b=>v.value=b),placeholder:S(D),clearable:"",class:"search-input",onInput:F},{append:l(()=>[t(s,{type:"primary",onClick:O},{default:l(()=>[t(g,null,{default:l(()=>[t(S(oe))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),C.value?B((x(),P(i,{key:0,data:a.filteredItems,stripe:"",onRowClick:k,"cell-style":{cursor:"Pointer",fontSize:"large"}},{default:l(()=>[t(m,{prop:"barrage",label:"弹幕"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[5]||(e[5]=[_("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[w,p.value]]):ne("",!0)])]),r("div",fe,[r("div",null,[t(L,{model:a,"label-width":"100px",rules:q,"label-position":"right"},{default:l(()=>[t(V,{label:"分栏","label-width":o.auto,prop:"table"},{default:l(()=>[t(H,{modelValue:a.table,"onUpdate:modelValue":e[1]||(e[1]=b=>a.table=b),placeholder:"选择上传的分栏"},{default:l(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(V,{label:"烂梗内容",prop:"barrage"},{default:l(()=>[t(c,{maxlength:"255",modelValue:a.barrage,"onUpdate:modelValue":e[2]||(e[2]=b=>a.barrage=b),autocomplete:"off","show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1}),t(s,{type:"primary",onClick:N,class:"submit-button"},{default:l(()=>e[7]||(e[7]=[_(" 投稿 ")])),_:1})]),_:1},8,["model"])]),t(W,{right:50,bottom:50})]),e[9]||(e[9]=r("div",{class:"card sixth-card"},[_(" 友情链接 "),r("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1))])],64)}}},qe=M(_e,[["__scopeId","data-v-6ef02917"]]);export{qe as default};
