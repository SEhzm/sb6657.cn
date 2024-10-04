import{b as z,e as L,q as S,f as W,p as M,v as N,k as s,d as D,m as q,n as I,o as j,a as A,l as O}from"./element-plus.ef563b8d.js";import{r as u}from"./request.39193e0d.js";import{_ as H}from"./index.c5110e02.js";import{r as J,_ as R,o as g,c as Z,a as m,V as a,P as t,Q as $,O as G,F as K,n as X,T as d}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const Y={class:"card"},ee={class:"pagination-wrapper"},ae={class:"dialog-footer"},te={__name:"QMLW",setup(le){const _=J(!0),f={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=R({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=async(r=1)=>{var l,o;try{const n=await u.get("/machine/QMLW/Page",{params:{pageNum:r,pageSize:e.pageSize}});e.tableData=((l=n.data)==null?void 0:l.list)||[],e.total=((o=n.data)==null?void 0:o.total)||0,await X(),_.value=!1}catch(n){console.log("加载数据失败",n)}};p(e.currentPage);const h=r=>{e.currentPage=r,p(r)},v=()=>{s({message:"复制成功",type:"success"})},y=()=>{s({message:"复制失败",type:"error"})},V=r=>{const l=r.barrage;let o=document.createElement("input");o.value=l,document.body.appendChild(o),o.select();try{document.execCommand("Copy"),v(),console.log("内容已复制到剪贴板"),u.post("/machine/addCnt",{PageNum:e.currentPage,table:"QMLW",id:r.id}).then(()=>{setTimeout(()=>p(e.currentPage),50)})}catch(n){console.error("复制失败:",n),y()}document.body.removeChild(o)},C=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},x=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.dialogFormVisible=!1,r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.barrage="",r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(r,l)=>{const o=z,n=D,P=L,k=S,i=q,w=I,b=j,Q=A,F=O,U=W,B=M,T=N;return g(),Z(K,null,[m("div",null,[m("div",Y,[a(o,{type:"primary",class:"handleAdd",onClick:C},{default:t(()=>[d(" 投稿弹幕 ")]),_:1}),$((g(),G(P,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:V},{default:t(()=>[a(n,{width:"60",prop:"id",label:"序号"}),a(n,{prop:"barrage","min-width":"90",label:"弹幕"}),a(n,{label:"",align:"center",width:"85"},{default:t(()=>[a(o,{type:"primary",label:"操作"},{default:t(()=>[d("复制")]),_:1})]),_:1}),a(n,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[T,_.value]])]),m("div",ee,[m("div",null,[a(k,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:h},null,8,["total","page-size"])])]),a(U,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[3]||(l[3]=c=>e.dialogFormVisible=c),draggable:"",title:"投稿弹幕",width:"82%"},{footer:t(()=>[m("div",ae,[a(o,{onClick:l[2]||(l[2]=c=>e.dialogFormVisible=!1)},{default:t(()=>[d("关闭")]),_:1}),a(o,{type:"primary",onClick:x},{default:t(()=>[d(" 投稿并关闭 ")]),_:1}),a(o,{type:"primary",onClick:E},{default:t(()=>[d(" 连续投稿 ")]),_:1})])]),default:t(()=>[a(F,{model:e,"label-width":"100px",rules:f,"label-position":"right"},{default:t(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:t(()=>[a(w,{modelValue:e.table,"onUpdate:modelValue":l[0]||(l[0]=c=>e.table=c),placeholder:"选择上传的分栏"},{default:t(()=>[a(i,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(i,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(i,{label:"喷选手篇",value:"machine_penPlayer"}),a(i,{label:"+1",value:"machine_p1"}),a(i,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(i,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:t(()=>[a(Q,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":l[1]||(l[1]=c=>e.barrage=c),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(B,{right:50,bottom:50},{default:t(()=>[d("UP")]),_:1})],64)}}},ye=H(te,[["__scopeId","data-v-b4e9166d"]]);export{ye as default};