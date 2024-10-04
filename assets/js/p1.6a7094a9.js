import{b as S,e as T,q as N,f as D,p as q,v as I,k as s,d as j,m as A,n as L,o as O,a as W,l as H}from"./element-plus.ef563b8d.js";import{r as u}from"./request.39193e0d.js";import{_ as J}from"./index.f872f26e.js";import{r as M,_ as R,o as g,c as Z,a as m,V as a,P as l,Q as $,O as G,F as K,T as d}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const X={class:"card"},Y={class:"pagination-wrapper"},ee={class:"dialog-footer"},ae={__name:"p1",setup(te){const _=M(!0),f={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=R({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),c=(r=1)=>{u.get("/machine/p1/Page",{params:{pageNum:r,pageSize:e.pageSize}}).then(t=>{var o,n;e.tableData=((o=t.data)==null?void 0:o.list)||[],e.total=((n=t.data)==null?void 0:n.total)||0,_.value=!1}).catch(t=>{console.error("加载数据失败:",t)})};c(e.currentPage);const h=r=>{e.currentPage=r,c(r)},v=()=>{s({message:"复制成功",type:"success"})},y=()=>{s({message:"复制失败",type:"error"})},V=r=>{const t=r.barrage;let o=document.createElement("input");o.value=t,document.body.appendChild(o),o.select();try{document.execCommand("Copy"),v(),console.log("内容已复制到剪贴板"),u.post("/machine/addCnt",{PageNum:e.currentPage,table:"p1",id:r.id}).then(()=>{setTimeout(()=>c(e.currentPage),50)})}catch(n){console.error("复制失败:",n),y()}document.body.removeChild(o)},C=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},x=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{c(),e.dialogFormVisible=!1,r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{c(),e.barrage="",r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(r,t)=>{const o=S,n=j,P=T,k=N,i=A,w=L,b=O,F=W,U=H,B=D,z=q,Q=I;return g(),Z(K,null,[m("div",null,[m("div",X,[a(o,{type:"primary",class:"handleAdd",onClick:C},{default:l(()=>[d(" 投稿弹幕 ")]),_:1}),$((g(),G(P,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:V},{default:l(()=>[a(n,{width:"58",prop:"id",label:"序号"}),a(n,{prop:"barrage","min-width":"90",label:"弹幕"}),a(n,{label:"",align:"center",width:"85"},{default:l(()=>[a(o,{type:"primary",label:"操作"},{default:l(()=>[d("复制")]),_:1})]),_:1}),a(n,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[Q,_.value]])]),m("div",Y,[m("div",null,[a(k,{background:"red",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:h},null,8,["total","page-size"])])]),a(B,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[m("div",ee,[a(o,{onClick:t[2]||(t[2]=p=>e.dialogFormVisible=!1)},{default:l(()=>[d("关闭")]),_:1}),a(o,{type:"primary",onClick:x},{default:l(()=>[d(" 投稿并关闭 ")]),_:1}),a(o,{type:"primary",onClick:E},{default:l(()=>[d(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(U,{model:e,"label-width":"100px",rules:f,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(w,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:l(()=>[a(i,{label:"喷玩机器篇",value:"penWJQ"}),a(i,{label:"直播间互喷篇",value:"ZbjHuPen"}),a(i,{label:"喷选手篇",value:"penPlayer"}),a(i,{label:"+1",value:"p1"}),a(i,{label:"群魔乱舞篇",value:"QMLW"}),a(i,{label:"QUQU",value:"QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(F,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=p=>e.barrage=p),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(z,{right:50,bottom:50},{default:l(()=>[d("UP")]),_:1})],64)}}},ve=J(ae,[["__scopeId","data-v-f63ec093"]]);export{ve as default};
