import{b as c,a as W,g as j,s as z,x as Z,v as J,p as P,E as X,e as Y,r as G,y as K,A as ee,B as te,C as ae}from"./element-plus.DNqowOts.js";import{_ as Q,h as f,A as oe,C as le}from"./index.Cma3pEkB.js";import{M as re}from"./@element-plus.CQ2moJ0T.js";import{_ as se}from"./favicon.CJfgpdIL.js";import{o as C,c as U,r as y,Z as ne,a as r,U as t,ax as ie,O as l,P as T,M as k,u as S,R as de,S as _,F as ce}from"./@vue.kwc71ESp.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.Bmvu7DnR.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.DkBAQHKx.js";const me={},pe={src:se,alt:"",style:{width:"30px"}};function ue(M,p){return C(),U("img",pe)}const be=Q(me,[["render",ue]]),ge={class:"home"},fe={class:"card third-card"},_e={class:"card fourth-card"},ve={class:"card fifth-card"},he={__name:"Home",setup(M){const p=y(!0),x=y(!1),a=ne({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{sessionStorage.getItem("firstOpening")||f.get("https://api.vvhan.com/api/visitor.info").then(o=>{const e=o;localStorage.setItem("ip",o.ip),c({icon:be,dangerouslyUseHTMLString:!0,title:"你好",message:`
            <p>
                欢迎来自<b>${e.location||"地球"}</b>的朋友<br/>  
                ${e.system||"外星操作系统"} ${e.browser||"牛逼浏览器"}<br/>
                IP: ${e.ip||"地球"} 
            </p>
            `,offset:50,customClass:"myClass",duration:1e3}),sessionStorage.setItem("firstOpening",1)})})();const v=y(""),O={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},R=()=>{a.table===""||a.barrage===""?c.error("请选择分栏或输入烂梗"):f.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:a.table,barrage:a.barrage}).then(o=>{a.dialogFormVisible=!1,a.barrage="",o.code==="200"?c.success("投稿成功，待审核(一天内)"):c.error("请求失败")})},H=()=>{console.log(v.value),f.post("/machine/Query",{QueryBarrage:v.value}).then(o=>{x.value=!0,p.value=!1,a.filteredItems=o.data||[]})};var N=y("搜索烂梗...");const I=()=>{f.get("/machine/getRandOne").then(o=>{a.tableData=[o.data],p.value=!1}).catch(o=>{console.error("随机失败")})};I();const q=()=>{P({message:"复制成功",type:"success"})},D=()=>{P({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let E=0,u=null,h=0;const V=o=>{const e=new Date().getTime(),s={x:event.clientX,y:event.clientY};if(u&&u.x===s.x&&u.y===s.y?(h++,console.log(h),h>4&&X.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):h=0,e-E<1500){c({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const b=o.barrage;let d=document.createElement("input");d.value=b,document.body.appendChild(d),d.select();try{document.execCommand("Copy")}catch(n){c({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",n)}document.body.removeChild(d),E=e,u=s;return}u=s,E=e;const m=o.barrage;let i=document.createElement("input");i.value=m,document.body.appendChild(i),i.select();try{document.execCommand("Copy"),q(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:a.currentPage,table:"allbarrage",id:o.id}).then(()=>{setTimeout(()=>load(a.currentPage),50)})}catch(b){c({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",b),D()}document.body.removeChild(i)},$=()=>{a.filteredItems=[],x.value=!1};return(o,e)=>{const s=W,m=Y,i=j,b=G,d=z,n=K,A=ee,w=te,F=Z,L=ae,B=J;return C(),U(ce,null,[e[10]||(e[10]=r("div",{class:"boomouder"},[r("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"})],-1)),t(oe,{class:"AnnualHotList"}),r("div",ge,[e[8]||(e[8]=ie('<div class="card first-card" data-v-b30ee7fd><div data-v-b30ee7fd><b data-v-b30ee7fd><p class="announcement" data-v-b30ee7fd> 新增时光相册(可评论)，新增在线投稿弹幕。玩神照片可以在上方上传照片上传至相册 </p><p class="announcement-highlight" data-v-b30ee7fd>左上角新加2024年度TOP20烂梗评选，具体时间如弹框所示，每人每阶段有三票</p></b></div></div><div class="card second-card" data-v-b30ee7fd><p data-v-b30ee7fd> 你好 <br data-v-b30ee7fd> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-b30ee7fd><a href="https://sb6657.cn" data-v-b30ee7fd>sb6657.cn</a></span> 尽情欣赏你们的烂梗吧。 </p></div>',2)),r("div",fe,[r("div",null,[t(s,{type:"primary",onClick:I},{default:l(()=>e[3]||(e[3]=[_("点我随机一条弹幕")])),_:1}),T((C(),k(i,{data:a.tableData,class:"barrage-table",onRowClick:V},{default:l(()=>[t(m,{prop:"barrage"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[4]||(e[4]=[_("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[B,p.value]])])]),r("div",_e,[r("div",null,[e[6]||(e[6]=r("span",{style:{position:"absolute","font-size":"20px","margin-top":"-20px",color:"blue"}}," --------需点击右侧搜索按钮--------- ",-1)),t(d,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=g=>v.value=g),placeholder:S(N),clearable:"",class:"search-input",onInput:$},{append:l(()=>[t(s,{type:"primary",onClick:H},{default:l(()=>[t(b,null,{default:l(()=>[t(S(re))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),x.value?T((C(),k(i,{key:0,data:a.filteredItems,stripe:"",onRowClick:V,"cell-style":{cursor:"Pointer",fontSize:"large"}},{default:l(()=>[t(m,{prop:"barrage",label:"弹幕"}),t(m,{label:"",align:"center",width:"85"},{default:l(()=>[t(s,{type:"primary"},{default:l(()=>e[5]||(e[5]=[_("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[B,p.value]]):de("",!0)])]),r("div",ve,[r("div",null,[t(F,{model:a,"label-width":"100px",rules:O,"label-position":"right"},{default:l(()=>[t(w,{label:"分栏","label-width":o.auto,prop:"table"},{default:l(()=>[t(A,{modelValue:a.table,"onUpdate:modelValue":e[1]||(e[1]=g=>a.table=g),placeholder:"选择上传的分栏"},{default:l(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(w,{label:"烂梗内容",prop:"barrage"},{default:l(()=>[t(d,{maxlength:"255",modelValue:a.barrage,"onUpdate:modelValue":e[2]||(e[2]=g=>a.barrage=g),autocomplete:"off","show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1}),t(s,{type:"primary",onClick:R,class:"submit-button"},{default:l(()=>e[7]||(e[7]=[_(" 投稿 ")])),_:1})]),_:1},8,["model"])]),t(L,{right:50,bottom:50})]),t(le,{class:"ChatRoom"}),e[9]||(e[9]=r("div",{class:"card sixth-card"},[_(" 友情链接 "),r("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1))])],64)}}},He=Q(he,[["__scopeId","data-v-b30ee7fd"]]);export{He as default};