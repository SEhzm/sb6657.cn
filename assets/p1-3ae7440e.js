/* empty css               *//* empty css                *//* empty css                *//* empty css                     *//* empty css                     *//* empty css               *//* empty css                   */import{r as _}from"./request-5572bcba.js";import{_ as z,q as B,o as I,c as N,a as c,b as a,w as l,F as Q,E as T,A as D,L as q,M as A,f as u,N as j,O as H,z as s,D as J,G as L,H as M,I as O,B as W,C as $,J as G}from"./index-9179cc06.js";const Z=m=>(j("data-v-c624152e"),m=m(),H(),m),K={class:"card"},R=Z(()=>c("b",{class:"copyCount"},"复制次数",-1)),X={class:"pagination-wrapper"},Y={class:"dialog-footer"},ee={__name:"p1",setup(m){const g={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=B({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),d=(o=1)=>{_.get("/machine/p1/Page",{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,i;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};d(e.currentPage);const f=o=>{e.currentPage=o,d(o)},h=()=>{s({message:"复制成功",type:"success"})},v=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},y=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{h(),console.log("内容已复制到剪贴板"),_.post("/machine/addCnt",{PageNum:e.currentPage,table:"p1",id:o.id})}).then(()=>{setTimeout(d,50)}).catch(t=>{console.error("复制失败:",t),v()})},V=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},C=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):_.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):_.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const r=T,i=J,w=D,x=q,p=L,k=M,b=O,F=W,P=$,S=A,U=G;return I(),N(Q,null,[c("div",null,[c("div",K,[a(r,{type:"primary",class:"handleAdd",onClick:V},{default:l(()=>[u(" 投稿弹幕 ")]),_:1}),R,a(w,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{}},{default:l(()=>[a(i,{width:"58",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:l(n=>[a(r,{type:"primary",label:"操作",onClick:ae=>y(n.row)},{default:l(()=>[u("复制")]),_:2},1032,["onClick"])]),_:1}),a(i,{prop:"cnt",label:"",width:"60"})]),_:1},8,["data"])]),c("div",X,[c("div",null,[a(x,{background:"red",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:f},null,8,["total","page-size"])])]),a(S,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=n=>e.dialogFormVisible=n),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[c("div",Y,[a(r,{onClick:t[2]||(t[2]=n=>e.dialogFormVisible=!1)},{default:l(()=>[u("关闭")]),_:1}),a(r,{type:"primary",onClick:C},{default:l(()=>[u(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:E},{default:l(()=>[u(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(P,{model:e,"label-width":"100px",rules:g,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(k,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=n=>e.table=n),placeholder:"选择上传的分栏"},{default:l(()=>[a(p,{label:"喷玩机器篇",value:"penWJQ"}),a(p,{label:"直播间互喷篇",value:"ZbjHuPen"}),a(p,{label:"喷选手篇",value:"penPlayer"}),a(p,{label:"+1",value:"p1"}),a(p,{label:"群魔乱舞篇",value:"QMLW"}),a(p,{label:"QUQU",value:"QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(F,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=n=>e.barrage=n),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(U,{right:50,bottom:50})],64)}}},de=z(ee,[["__scopeId","data-v-c624152e"]]);export{de as default};
