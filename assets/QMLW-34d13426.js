/* empty css               *//* empty css                */import{r as m}from"./notification-930b51d9.js";/* empty css                     *//* empty css               *//* empty css                   */import{_ as U,q as z,o as F,c as B,a as u,b as a,w as l,P as L,E as N,A as S,N as T,O as W,f as p,z as s,I as M,J as q,K as D,L as I,B as A,C as j}from"./index-1d1a21f5.js";const J={class:"card"},O={class:"pagination-wrapper"},R={class:"dialog-footer"},H={__name:"QMLW",setup(K){const b={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=z({tableData:[],total:0,pageSize:15,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),i=async(o=1)=>{var t,n;try{const r=await m.get("/machine/QMLW/Page",{params:{pageNum:o,pageSize:e.pageSize}});e.tableData=((t=r.data)==null?void 0:t.list)||[],e.total=((n=r.data)==null?void 0:n.total)||0,await L()}catch(r){console.log("加载数据失败",r)}};i(e.currentPage);const g=o=>{e.currentPage=o,i(o)},f=()=>{s({message:"复制成功",type:"success"})},h=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},v=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{f(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"QMLW",id:o.id}),i()}).then(()=>{setTimeout(i(e.currentPage),50)}).catch(t=>{console.error("复制失败:",t),h()})},y=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},V=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},w=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const n=N,r=M,x=S,C=T,c=q,E=D,_=I,P=A,Q=j,k=W;return F(),B("div",null,[u("div",J,[a(n,{type:"primary",class:"handleAdd",onClick:y},{default:l(()=>[p(" 投稿弹幕 ")]),_:1}),a(x,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:v},{default:l(()=>[a(r,{width:"60",prop:"id",label:"序号"}),a(r,{prop:"barrage","min-width":"90",label:"弹幕"}),a(r,{label:"",align:"center",width:"85"},{default:l(()=>[a(n,{type:"primary",label:"操作"},{default:l(()=>[p("复制")]),_:1})]),_:1}),a(r,{prop:"cnt",label:"复制次数",width:"65"})]),_:1},8,["data","onRowClick"])]),u("div",O,[u("div",null,[a(C,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:g},null,8,["total","page-size"])])]),a(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=d=>e.dialogFormVisible=d),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[u("div",R,[a(n,{onClick:t[2]||(t[2]=d=>e.dialogFormVisible=!1)},{default:l(()=>[p("关闭")]),_:1}),a(n,{type:"primary",onClick:V},{default:l(()=>[p(" 投稿并关闭 ")]),_:1}),a(n,{type:"primary",onClick:w},{default:l(()=>[p(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(Q,{model:e,"label-width":"100px",rules:b,"label-position":"right"},{default:l(()=>[a(_,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(E,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=d=>e.table=d),placeholder:"选择上传的分栏"},{default:l(()=>[a(c,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(c,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(c,{label:"喷选手篇",value:"machine_penPlayer"}),a(c,{label:"+1",value:"machine_p1"}),a(c,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(c,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(P,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=d=>e.barrage=d),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},te=U(H,[["__scopeId","data-v-836f1908"]]);export{te as default};
