import{j as h,b as W,e as O,a as G,k as K,h as E,d as Z,l as A,m as X,n as Y,o as ee}from"./element-plus.528b82f3.js";import{r as b}from"./request.39193e0d.js";import{_ as te}from"./favicon.9ef6f040.js";import{_ as P}from"./index.be2fbe43.js";import{o as _,c as y,r as i,_ as ae,k as oe,j as le,a,V as t,P as n,O as T,u as se,S as ne,T as c,U as re,F as ie,aw as ce,ax as de,ay as pe}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const me={},ue={src:te,alt:"",style:{width:"40px"}};function _e(m,M){return _(),y("img",ue)}const ge=P(me,[["render",_e]]);const d=m=>(de("data-v-0f143d8d"),m=m(),pe(),m),he=d(()=>a("div",{style:{height:"200px"}},[a("img",{src:"https://pic.imgdb.cn/item/66f7a491f21886ccc022f12a.png",alt:"6657boom",class:"boom6657"})],-1)),be={class:"home"},fe=ce('<div class="card" style="line-height:30px;margin-top:10px;" data-v-0f143d8d><div data-v-0f143d8d><b data-v-0f143d8d><em style="font-size:17px;color:red;" data-v-0f143d8d>新增时光相册2015年-2024年(可评论)，新增在线投稿弹幕</em></b></div></div><div class="card" style="line-height:30px;margin-top:8px;" data-v-0f143d8d><p data-v-0f143d8d>你好 <br data-v-0f143d8d> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-0f143d8d><a href="https://sb6657.cn" style="color:red;" data-v-0f143d8d>sb6657.cn </a></span>尽情欣赏你们的烂梗吧。 <br data-v-0f143d8d></p></div>',2),ve={class:"card",style:{"line-height":"0px","margin-top":"8px"}},ye={key:1},xe=d(()=>a("p",null,"《未选择随机项》----出错啦，请手动刷新",-1)),we=[xe],ke={class:"card",style:{"line-height":"45px","margin-top":"10px","margin-bottom":"10px","min-height":"80px"}},De=d(()=>a("span",{style:{position:"absolute","font-size":"22px","margin-top":"-20px",color:"blue"}}," --------搜索在这，🦐吗--------- ",-1)),Se={class:"card",style:{"margin-top":"8px","text-align":"center"}},Ve=d(()=>a("p",null,"这里是投稿烂梗，上面才是搜索",-1)),Ce=d(()=>a("div",{class:"card",style:{"line-height":"30px","margin-top":"10px"}},[c(" 友情链接 "),a("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1)),Ie=d(()=>a("div",{class:"footer"},null,-1)),Ee={class:"el-footer"},Te={style:{"font-size":"11px"}},Pe=d(()=>a("text",null,[c(" 域名所有："),a("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何")],-1)),Me={__name:"Home",setup(m){(()=>{b.get("https://api.vvhan.com/api/visitor.info").then(e=>{const l=e;localStorage.setItem("ip",e.ip),h({icon:ge,dangerouslyUseHTMLString:!0,title:"你好",message:"<p>欢迎来自<b>"+l.location+"</b>的朋友<br/>"+l.system+" "+l.browser+" <br>IP: "+l.ip+"</p>",offset:50,duration:5e3})})})();const g=i(""),f=i(null),U=new Date("2041-06-07"),B=i(0),q=new Date("2024-10-23"),z=i(0),N=new Date("2025-02-20"),x=i(0),Q={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},F=()=>{o.table===""||o.barrage===""?h.error("请选择分栏或输入烂梗"):b.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:o.table,barrage:o.barrage}).then(e=>{v(),o.dialogFormVisible=!1,o.barrage="",e.code==="200"?h.success("投稿成功，待审核(一天内)"):h.error("请求失败")})},o=ae({tableData:[],table:"",barrage:""});var w=i("请稍等！或者请手动刷新页面,搜索不可能是空的");const v=()=>{b.get("/machine/allBarrage/Page",{}).then(e=>{o.tableData=e.data||[],k(),w=i("搜索烂梗...")}).catch(e=>{console.error("加载数据失败:",e)})};v();const k=()=>{if(o.tableData.length>0){const e=Math.floor(Math.random()*o.tableData.length);f.value=o.tableData[e]}},H=oe(()=>{var l;const e=(l=g.value)==null?void 0:l.toLowerCase();return e?o.tableData.filter(s=>`${s.name}${s.barrage}${s.description}`.toLowerCase().includes(e)):[]}),L=()=>{E({message:"复制成功",type:"success"})},$=()=>{E({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})},D=e=>{const l=e.barrage;let s=document.createElement("input");s.value=l,document.body.appendChild(s),s.select();try{document.execCommand("Copy"),L(),console.log("内容已复制到剪贴板"),b.post("/machine/addCnt",{PageNum:o.currentPage,table:"allbarrage",id:e.id}).then(()=>{setTimeout(()=>v(o.currentPage),50)})}catch(r){console.error("复制失败:",r),$()}document.body.removeChild(s)},S=()=>{const e=new Date,l=U-e,s=q-e,r=N-e;B.value=Math.ceil(l/(1e3*60*60*24)),z.value=Math.ceil(s/(1e3*60*60*24)),x.value=Math.ceil(r/(1e3*60*60*24))};return le(()=>{S(),setInterval(S,1e3*60*60*24)}),(e,l)=>{const s=W,r=Z,V=O,C=G,p=A,J=X,I=Y,j=K,R=ee;return _(),y(ie,null,[he,a("div",be,[fe,a("div",ve,[a("div",null,[t(s,{type:"primary",onClick:k},{default:n(()=>[c("点我随机一条弹幕")]),_:1}),f.value?(_(),T(V,{key:0,data:[f.value],style:{"font-family":"微软雅黑","font-size":"20px"},"header-cell-style":{fontSize:"14px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:D},{default:n(()=>[t(r,{prop:"barrage",label:"弹幕"}),t(r,{label:"",align:"center",width:"85"},{default:n(()=>[t(s,{type:"primary"},{default:n(()=>[c("复制")]),_:1})]),_:1})]),_:1},8,["data"])):(_(),y("div",ye,we))])]),a("div",ke,[a("div",null,[De,t(C,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=u=>g.value=u),placeholder:se(w),style:{"background-color":"yellow","font-size":"30px","margin-top":"30px"}},null,8,["modelValue","placeholder"]),g.value?(_(),T(V,{key:0,data:H.value,stripe:"",onRowClick:D,style:{"font-size":"19px"},"cell-style":{cursor:"Pointer"},"empty-text":"可能没有这条烂梗或请手动刷新页面"},{default:n(()=>[t(r,{prop:"barrage",label:"弹幕"}),t(r,{label:"",align:"center",width:"85"},{default:n(()=>[t(s,{type:"primary"},{default:n(()=>[c("复制")]),_:1})]),_:1})]),_:1},8,["data"])):ne("",!0)])]),a("div",Se,[a("div",null,[Ve,t(j,{model:o,"label-width":"100px",rules:Q,"label-position":"right"},{default:n(()=>[t(I,{label:"分栏","label-width":e.auto,prop:"table"},{default:n(()=>[t(J,{modelValue:o.table,"onUpdate:modelValue":l[1]||(l[1]=u=>o.table=u),placeholder:"选择上传的分栏"},{default:n(()=>[t(p,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(p,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(p,{label:"喷选手篇",value:"machine_penPlayer"}),t(p,{label:"+1",value:"machine_p1"}),t(p,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(p,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(I,{label:"烂梗内容",prop:"barrage"},{default:n(()=>[t(C,{maxlength:"255",modelValue:o.barrage,"onUpdate:modelValue":l[2]||(l[2]=u=>o.barrage=u),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(s,{type:"primary",onClick:F,style:{"font-size":"20px"}},{default:n(()=>[c(" 投稿 ")]),_:1})]),_:1},8,["model"])]),t(R,{right:50,bottom:50})]),Ce,Ie]),a("div",Ee,[c(" 基于腾讯云服务器搭建"),a("text",Te,"(离服务器到期还有"+re(x.value)+"天)",1),Pe])],64)}}},Ze=P(Me,[["__scopeId","data-v-0f143d8d"]]);export{Ze as default};