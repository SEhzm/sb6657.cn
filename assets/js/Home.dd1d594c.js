import{k as b,a as J,e as $,b as G,l as K,v as Z,j as S,d as A,E as X,m as Y,n as ee,o as te,p as ae}from"./element-plus.2a983ad3.js";import{r as u}from"./request.39193e0d.js";import{M as oe}from"./@element-plus.b9e6ff10.js";import{_ as le}from"./favicon.9ef6f040.js";import{_ as U}from"./index.0340890f.js";import{o as f,c as P,r as _,_ as se,j as re,a,V as e,P as s,Q,O as B,u as D,S as ne,T as n,U as ie,F as ce,aw as de,ax as pe,ay as me}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const ue={},_e={src:le,alt:"",style:{width:"30px"}};function ge(d,p){return f(),P("img",_e)}const be=U(ue,[["render",ge]]);const h=d=>(pe("data-v-6d3fe597"),d=d(),me(),d),fe=h(()=>a("div",{class:"boomouder"},[a("img",{src:"https://pic.imgdb.cn/item/66f7a491f21886ccc022f12a.png",alt:"6657boom",class:"boom6657"})],-1)),he={class:"home"},ve=de('<div class="card" style="line-height:30px;margin-top:40px;" data-v-6d3fe597><div data-v-6d3fe597><b data-v-6d3fe597><em style="font-size:17px;color:red;" data-v-6d3fe597>新增时光相册2015年-2024年(可评论)，新增在线投稿弹幕。2024-10-7流量激增，可能出现卡顿或不可用</em></b></div></div><div class="card" style="line-height:30px;margin-top:8px;" data-v-6d3fe597><p data-v-6d3fe597>你好 <br data-v-6d3fe597> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-6d3fe597><a href="https://sb6657.cn" style="color:red;" data-v-6d3fe597>sb6657.cn </a></span>尽情欣赏你们的烂梗吧。 <br data-v-6d3fe597></p></div>',2),ye={class:"card",style:{"line-height":"0px","margin-top":"8px"}},xe={class:"card",style:{"line-height":"50px","margin-top":"10px","margin-bottom":"10px","min-height":"80px"}},we=h(()=>a("span",{style:{position:"absolute","font-size":"22px","margin-top":"-20px",color:"blue"}}," --------需点击右侧搜索按钮--------- ",-1)),Ce={class:"card",style:{"margin-top":"8px","text-align":"center"}},Ie=h(()=>a("div",{class:"card",style:{"line-height":"30px","margin-top":"10px"}},[n(" 友情链接 "),a("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1)),Ve={class:"el-footer"},Ee={style:{"font-size":"11px"}},ke=h(()=>a("text",null,[n(" 域名所有："),a("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何")],-1)),Se={__name:"Home",setup(d){const p=_(!0),v=_(!1),t=se({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{u.get("https://api.vvhan.com/api/visitor.info").then(o=>{const l=o;localStorage.setItem("ip",o.ip),b({icon:be,dangerouslyUseHTMLString:!0,title:"你好",message:"<p>欢迎来自<b>"+l.location+"</b>的朋友<br/> "+l.system+l.browser+" <br>IP: "+l.ip+"</p>",offset:50,customClass:"myClass",duration:2e3})})})();const g=_(""),T=new Date("2025-02-20"),y=_(0),q={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},z=()=>{t.table===""||t.barrage===""?b.error("请选择分栏或输入烂梗"):u.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:t.table,barrage:t.barrage}).then(o=>{t.dialogFormVisible=!1,t.barrage="",o.code==="200"?b.success("投稿成功，待审核(一天内)"):b.error("请求失败")})},M=()=>{console.log(g.value),u.post("/machine/Query",{QueryBarrage:g.value}).then(o=>{v.value=!0,p.value=!1,t.filteredItems=o.data||[]})};var N=_("搜索烂梗...");const x=()=>{u.get("/machine/getRandOne").then(o=>{t.tableData=[o.data],p.value=!1}).catch(o=>{console.error("随机失败")})};x();const F=()=>{S({message:"复制成功",type:"success"})},H=()=>{S({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})},w=o=>{const l=o.barrage;let r=document.createElement("input");r.value=l,document.body.appendChild(r),r.select();try{document.execCommand("Copy"),F(),console.log("内容已复制到剪贴板"),u.post("/machine/addCnt",{PageNum:t.currentPage,table:"allbarrage",id:o.id}).then(()=>{console.log("复制成功")})}catch(i){console.error("复制失败:",i),H()}document.body.removeChild(r)},C=()=>{const l=T-new Date;y.value=Math.ceil(l/(1e3*60*60*24))},O=()=>{t.filteredItems=[],v.value=!1};return re(()=>{C(),setInterval(C,1e3*60*60*24)}),(o,l)=>{const r=J,i=A,I=$,R=X,V=G,c=Y,L=ee,E=te,j=K,W=ae,k=Z;return f(),P(ce,null,[fe,a("div",he,[ve,a("div",ye,[a("div",null,[e(r,{type:"primary",onClick:x},{default:s(()=>[n("点我随机一条弹幕")]),_:1}),Q((f(),B(I,{data:t.tableData,style:{"font-family":"微软雅黑","font-size":"20px"},"header-cell-style":{fontSize:"14px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:w},{default:s(()=>[e(i,{prop:"barrage",label:"弹幕"}),e(i,{label:"",align:"center",width:"85"},{default:s(()=>[e(r,{type:"primary"},{default:s(()=>[n("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[k,p.value]])])]),a("div",xe,[a("div",null,[we,e(V,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=m=>g.value=m),placeholder:D(N),clearable:"",style:{"background-color":"yellow","font-size":"16px","margin-top":"30px"},onInput:O},{append:s(()=>[e(r,{type:"primary",onClick:M},{default:s(()=>[e(R,null,{default:s(()=>[e(D(oe))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),v.value?Q((f(),B(I,{key:0,data:t.filteredItems,stripe:"",onRowClick:w,style:{"font-size":"19px"},"cell-style":{cursor:"Pointer"}},{default:s(()=>[e(i,{prop:"barrage",label:"弹幕"}),e(i,{label:"",align:"center",width:"85"},{default:s(()=>[e(r,{type:"primary"},{default:s(()=>[n("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[k,p.value]]):ne("",!0)])]),a("div",Ce,[a("div",null,[e(j,{model:t,"label-width":"100px",rules:q,"label-position":"right"},{default:s(()=>[e(E,{label:"分栏","label-width":o.auto,prop:"table"},{default:s(()=>[e(L,{modelValue:t.table,"onUpdate:modelValue":l[1]||(l[1]=m=>t.table=m),placeholder:"选择上传的分栏"},{default:s(()=>[e(c,{label:"喷玩机器篇",value:"machine_penWJQ"}),e(c,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),e(c,{label:"喷选手篇",value:"machine_penPlayer"}),e(c,{label:"+1",value:"machine_p1"}),e(c,{label:"群魔乱舞篇",value:"machine_QMLW"}),e(c,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),e(E,{label:"烂梗内容",prop:"barrage"},{default:s(()=>[e(V,{maxlength:"255",modelValue:t.barrage,"onUpdate:modelValue":l[2]||(l[2]=m=>t.barrage=m),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(r,{type:"primary",onClick:z,style:{"font-size":"20px"}},{default:s(()=>[n(" 投稿 ")]),_:1})]),_:1},8,["model"])]),e(W,{right:50,bottom:50})]),Ie]),a("div",Ve,[n(" 基于腾讯云服务器搭建"),a("text",Ee,"(离服务器到期还有"+ie(y.value)+"天)",1),ke])],64)}}},$e=U(Se,[["__scopeId","data-v-6d3fe597"]]);export{$e as default};
