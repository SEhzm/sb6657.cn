import{E as d,a as K,c as X,b as Y,m as Z,v as A,f as D,g as ee,k as te,h as ae,n as oe,o as le,p as ne,q as se}from"./element-plus.fdfabbca.js";import{r as f}from"./request.39193e0d.js";import{M as re}from"./@element-plus.b6e46eba.js";import{_ as ie}from"./favicon.fceddeeb.js";import{_ as U}from"./index.e70f47ca.js";import{o as C,c as q,r as v,_ as ce,j as de,a as l,V as e,P as n,Q,O as z,u as M,S as pe,T as p,U as me,F as ue,aw as _e,ax as ge,ay as be}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.f6176e51.js";const he={},fe={src:ie,alt:"",style:{width:"30px"}};function ve(u,_){return C(),q("img",fe)}const ye=U(he,[["render",ve]]);const w=u=>(ge("data-v-79782d81"),u=u(),be(),u),xe=w(()=>l("div",{class:"boomouder"},[l("img",{src:"https://pic.imgdb.cn/item/66f7a491f21886ccc022f12a.png",alt:"6657boom",class:"boom6657"})],-1)),Ce={class:"home"},we=_e('<div class="card" style="line-height:30px;margin-top:40px;" data-v-79782d81><div data-v-79782d81><b data-v-79782d81><p style="font-size:14px;" data-v-79782d81>新增时光相册(可评论)，新增在线投稿弹幕。最近可能会出现卡顿，玩神照片可以在上方上传照片上传至相册</p><p style="font-size:18px;color:red;" data-v-79782d81>最新推出了油猴Tampermonkey插件，可以在直播间直接搜索进行复制和一键发送，<a href="https://sb6657.cn/#/Tampermonkey" target="_blank" data-v-79782d81>点我安装！</a></p></b></div></div><div class="card" style="line-height:30px;margin-top:8px;" data-v-79782d81><p data-v-79782d81>你好 <br data-v-79782d81> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-79782d81><a href="https://sb6657.cn" style="color:red;" data-v-79782d81>sb6657.cn </a></span>尽情欣赏你们的烂梗吧。 <br data-v-79782d81></p></div>',2),Ie={class:"card",style:{"line-height":"0px","margin-top":"8px"}},ke={class:"card",style:{"line-height":"50px","margin-top":"10px","margin-bottom":"10px","min-height":"80px"}},Ee=w(()=>l("span",{style:{position:"absolute","font-size":"22px","margin-top":"-20px",color:"blue"}}," --------需点击右侧搜索按钮--------- ",-1)),Ve={class:"card",style:{"margin-top":"8px","text-align":"center"}},Te=w(()=>l("div",{class:"card",style:{"line-height":"30px","margin-top":"10px","z-index":"300"}},[p(" 友情链接 "),l("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1)),Se={class:"el-footer"},Pe={style:{"font-size":"11px"}},Be=w(()=>l("text",null,[p(" 域名所有："),l("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何")],-1)),De={__name:"Home",setup(u){const _=v(!0),I=v(!1),t=ce({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{f.get("https://api.vvhan.com/api/visitor.info").then(o=>{const a=o;localStorage.setItem("ip",o.ip),d({icon:ye,dangerouslyUseHTMLString:!0,title:"你好",message:"<p>欢迎来自<b>"+a.location+"</b>的朋友<br/> "+a.system+a.browser+" <br>IP: "+a.ip+"</p>",offset:50,customClass:"myClass",duration:2e3})})})();const y=v(""),N=new Date("2025-02-20"),E=v(0),F={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},H=()=>{t.table===""||t.barrage===""?d.error("请选择分栏或输入烂梗"):f.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:t.table,barrage:t.barrage}).then(o=>{t.dialogFormVisible=!1,t.barrage="",o.code==="200"?d.success("投稿成功，待审核(一天内)"):d.error("请求失败")})},O=()=>{console.log(y.value),f.post("/machine/Query",{QueryBarrage:y.value}).then(o=>{I.value=!0,_.value=!1,t.filteredItems=o.data||[]})};var R=v("搜索烂梗...");const V=()=>{f.get("/machine/getRandOne").then(o=>{t.tableData=[o.data],_.value=!1}).catch(o=>{console.error("随机失败")})};V();const L=()=>{D({message:"复制成功",type:"success"})},W=()=>{D({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let k=0,g=null,x=0;const T=o=>{const a=new Date().getTime(),s={x:event.clientX,y:event.clientY};if(g&&g.x===s.x&&g.y===s.y?(x++,console.log(x),x>4&&ee.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):x=0,a-k<1500){d({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const b=o.barrage;let c=document.createElement("input");c.value=b,document.body.appendChild(c),c.select();try{document.execCommand("Copy")}catch(r){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",r)}document.body.removeChild(c),k=a,g=s;return}g=s,k=a;const m=o.barrage;let i=document.createElement("input");i.value=m,document.body.appendChild(i),i.select();try{document.execCommand("Copy"),L(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:t.currentPage,table:"allbarrage",id:o.id}).then(()=>{setTimeout(()=>load(t.currentPage),50)})}catch(b){d({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",b),W()}document.body.removeChild(i)},S=()=>{const a=N-new Date;E.value=Math.ceil(a/(1e3*60*60*24))},j=()=>{t.filteredItems=[],I.value=!1};return de(()=>{S(),setInterval(S,1e3*60*60*24)}),(o,a)=>{const s=K,m=te,i=X,b=ae,c=Y,r=oe,J=le,P=ne,$=Z,G=se,B=A;return C(),q(ue,null,[xe,l("div",Ce,[we,l("div",Ie,[l("div",null,[e(s,{type:"primary",onClick:V},{default:n(()=>[p("点我随机一条弹幕")]),_:1}),Q((C(),z(i,{data:t.tableData,style:{"font-family":"微软雅黑","font-size":"20px"},"header-cell-style":{fontSize:"14px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:T},{default:n(()=>[e(m,{prop:"barrage",label:"弹幕"}),e(m,{label:"",align:"center",width:"85"},{default:n(()=>[e(s,{type:"primary"},{default:n(()=>[p("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[B,_.value]])])]),l("div",ke,[l("div",null,[Ee,e(c,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=h=>y.value=h),placeholder:M(R),clearable:"",style:{"background-color":"yellow","font-size":"16px","margin-top":"30px"},onInput:j},{append:n(()=>[e(s,{type:"primary",onClick:O},{default:n(()=>[e(b,null,{default:n(()=>[e(M(re))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),I.value?Q((C(),z(i,{key:0,data:t.filteredItems,stripe:"",onRowClick:T,style:{"font-size":"19px"},"cell-style":{cursor:"Pointer"}},{default:n(()=>[e(m,{prop:"barrage",label:"弹幕"}),e(m,{label:"",align:"center",width:"85"},{default:n(()=>[e(s,{type:"primary"},{default:n(()=>[p("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[B,_.value]]):pe("",!0)])]),l("div",Ve,[l("div",null,[e($,{model:t,"label-width":"100px",rules:F,"label-position":"right"},{default:n(()=>[e(P,{label:"分栏","label-width":o.auto,prop:"table"},{default:n(()=>[e(J,{modelValue:t.table,"onUpdate:modelValue":a[1]||(a[1]=h=>t.table=h),placeholder:"选择上传的分栏"},{default:n(()=>[e(r,{label:"喷玩机器篇",value:"machine_penWJQ"}),e(r,{label:"木柜子篇",value:"machine_mygo"}),e(r,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),e(r,{label:"喷选手篇",value:"machine_penPlayer"}),e(r,{label:"+1",value:"machine_p1"}),e(r,{label:"群魔乱舞篇",value:"machine_QMLW"}),e(r,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),e(P,{label:"烂梗内容",prop:"barrage"},{default:n(()=>[e(c,{maxlength:"255",modelValue:t.barrage,"onUpdate:modelValue":a[2]||(a[2]=h=>t.barrage=h),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(s,{type:"primary",onClick:H,style:{"font-size":"20px"}},{default:n(()=>[p(" 投稿 ")]),_:1})]),_:1},8,["model"])]),e(G,{right:50,bottom:50})]),Te]),l("div",Se,[p(" 基于腾讯云服务器搭建"),l("text",Pe,"(离服务器到期还有"+me(E.value)+"天)",1),Be])],64)}}},Ye=U(De,[["__scopeId","data-v-79782d81"]]);export{Ye as default};
