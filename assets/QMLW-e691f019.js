/* empty css              *//* empty css                *//* empty css                     *//* empty css            *//* empty css               *//* empty css                     *//* empty css                   */import{r as m}from"./request-70322d0a.js";import{_ as U,a as F,o as z,b as L,e as u,f as a,w as l,P as N,q as S,x as T,N as W,O as B,g as p,D as s,v as M,J as D,K as q,L as I,p as j,G as A}from"./index-9f34688e.js";const J={class:"card"},O={class:"pagination-wrapper"},G={class:"dialog-footer"},H={__name:"QMLW",setup(K){const g={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=F({tableData:[],total:0,pageSize:15,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),i=async(o=1)=>{var t,n;try{const r=await m.get("/machine/QMLW/Page",{params:{pageNum:o,pageSize:e.pageSize}});e.tableData=((t=r.data)==null?void 0:t.list)||[],e.total=((n=r.data)==null?void 0:n.total)||0,await N()}catch(r){console.log("加载数据失败",r)}};i(e.currentPage);const b=o=>{e.currentPage=o,i(o)},f=()=>{s({message:"复制成功",type:"success"})},h=()=>{s({message:"复制失败",type:"error"})},v=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{f(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"QMLW",id:o.id}),i()}).then(()=>{setTimeout(i(e.currentPage),50)}).catch(t=>{console.error("复制失败:",t),h()})},y=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},V=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},x=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const n=S,r=M,w=T,E=W,c=D,P=q,_=I,C=j,Q=A,k=B;return z(),L("div",null,[u("div",J,[a(n,{type:"primary",class:"handleAdd",onClick:y},{default:l(()=>[p(" 投稿弹幕 ")]),_:1}),a(w,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:v},{default:l(()=>[a(r,{width:"60",prop:"id",label:"序号"}),a(r,{prop:"barrage","min-width":"90",label:"弹幕"}),a(r,{label:"",align:"center",width:"85"},{default:l(()=>[a(n,{type:"primary",label:"操作"},{default:l(()=>[p("复制")]),_:1})]),_:1}),a(r,{prop:"cnt",label:"复制次数",width:"65"})]),_:1},8,["data"])]),u("div",O,[u("div",null,[a(E,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:b},null,8,["total","page-size"])])]),a(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=d=>e.dialogFormVisible=d),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[u("div",G,[a(n,{onClick:t[2]||(t[2]=d=>e.dialogFormVisible=!1)},{default:l(()=>[p("关闭")]),_:1}),a(n,{type:"primary",onClick:V},{default:l(()=>[p(" 投稿并关闭 ")]),_:1}),a(n,{type:"primary",onClick:x},{default:l(()=>[p(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(Q,{model:e,"label-width":"100px",rules:g,"label-position":"right"},{default:l(()=>[a(_,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(P,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=d=>e.table=d),placeholder:"选择上传的分栏"},{default:l(()=>[a(c,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(c,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(c,{label:"喷选手篇",value:"machine_penPlayer"}),a(c,{label:"+1",value:"machine_p1"}),a(c,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(c,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(C,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=d=>e.barrage=d),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},oe=U(H,[["__scopeId","data-v-e766d71a"]]);export{oe as default};
