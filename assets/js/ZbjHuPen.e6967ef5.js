import{b as Q,e as S,q as T,f as H,p as N,v as Z,k as i,d as D,m as q,n as I,o as A,a as L,l as O}from"./element-plus.ef563b8d.js";import{r as u}from"./request.39193e0d.js";import{_ as W}from"./index.fe2f0be1.js";import{r as J,_ as M,o as g,c as R,a as m,V as a,P as l,Q as $,O as G,F as K,T as d}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const X={class:"card"},Y={class:"pagination-wrapper"},ee={class:"dialog-footer"},ae={__name:"ZbjHuPen",setup(te){const _=J(!0),f={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=M({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=(r=1)=>{u.get("/machine/ZbjHuPen/Page",{params:{pageNum:r,pageSize:e.pageSize}}).then(t=>{var o,n;e.tableData=((o=t.data)==null?void 0:o.list)||[],e.total=((n=t.data)==null?void 0:n.total)||0,_.value=!1}).catch(t=>{console.error("加载数据失败:",t)})};p(e.currentPage);const h=r=>{e.currentPage=r,p(r)},v=()=>{i({message:"复制成功",type:"success"})},y=()=>{i({message:"复制失败",type:"error"})},P=r=>{const t=r.barrage;let o=document.createElement("input");o.value=t,document.body.appendChild(o),o.select();try{document.execCommand("Copy"),v(),console.log("内容已复制到剪贴板"),u.post("/machine/addCnt",{PageNum:e.currentPage,table:"ZbjHuPen",id:r.id}).then(()=>{setTimeout(()=>p(e.currentPage),50)})}catch(n){console.error("复制失败:",n),y()}document.body.removeChild(o)},V=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},C=()=>{e.table===""||e.barrage===""?i.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.dialogFormVisible=!1,r.code==="200"?i.success("投稿成功，待审核(一天内)"):i.error("请求失败")})},x=()=>{e.table===""||e.barrage===""?i.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.barrage="",r.code==="200"?i.success("投稿成功，待审核(一天内)"):i.error("请求失败")})};return(r,t)=>{const o=Q,n=D,E=S,k=T,s=q,w=I,b=A,F=L,U=O,B=H,j=N,z=Z;return g(),R(K,null,[m("div",null,[m("div",X,[a(o,{type:"primary",class:"handleAdd",onClick:V},{default:l(()=>[d(" 投稿弹幕 ")]),_:1}),$((g(),G(E,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:P},{default:l(()=>[a(n,{width:"60",prop:"id",label:"序号"}),a(n,{prop:"barrage","min-width":"90",label:"弹幕"}),a(n,{label:"",align:"center",width:"85"},{default:l(()=>[a(o,{type:"primary",label:"操作"},{default:l(()=>[d("复制")]),_:1})]),_:1}),a(n,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[z,_.value]])]),m("div",Y,[m("div",null,[a(k,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:h},null,8,["total","page-size"])])]),a(B,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=c=>e.dialogFormVisible=c),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[m("div",ee,[a(o,{onClick:t[2]||(t[2]=c=>e.dialogFormVisible=!1)},{default:l(()=>[d("关闭")]),_:1}),a(o,{type:"primary",onClick:C},{default:l(()=>[d(" 投稿并关闭 ")]),_:1}),a(o,{type:"primary",onClick:x},{default:l(()=>[d(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(U,{model:e,"label-width":"100px",rules:f,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(w,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=c=>e.table=c),placeholder:"选择上传的分栏"},{default:l(()=>[a(s,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(s,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(s,{label:"喷选手篇",value:"machine_penPlayer"}),a(s,{label:"+1",value:"machine_p1"}),a(s,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(s,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(F,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=c=>e.barrage=c),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(j,{right:50,bottom:50},{default:l(()=>[d("UP")]),_:1})],64)}}},ve=W(ae,[["__scopeId","data-v-1da2ef4a"]]);export{ve as default};
