/* empty css               *//* empty css                *//* empty css                     *//* empty css                     *//* empty css               *//* empty css                   */import{r as _}from"./request-5572bcba.js";import{_ as k,q as z,o as F,c as B,a as m,b as a,w as l,E as I,A as N,L as T,M as D,f as p,N as q,O as A,z as s,D as j,G as H,H as L,I as M,B as O,C as W}from"./index-9179cc06.js";const $=u=>(q("data-v-e184ce5f"),u=u(),A(),u),G={class:"card"},J=$(()=>m("b",{class:"copyCount"},"复制次数",-1)),Z={class:"pagination-wrapper"},K={class:"dialog-footer"},R={__name:"QUQU",setup(u){const g={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=z({tableData:[],total:0,pageSize:15,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),d=(o=1)=>{_.get("/machine/QUQU/Page",{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,i;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};d(e.currentPage);const f=o=>{e.currentPage=o,d(o)},h=()=>{s({message:"复制成功",type:"success"})},v=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},U=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{h(),console.log("内容已复制到剪贴板"),_.post("/machine/addCnt",{PageNum:e.currentPage,table:"QUQU",id:o.id})}).then(()=>{setTimeout(d,50)}).catch(t=>{console.error("复制失败:",t),v()})},y=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},V=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):_.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},Q=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):_.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const r=I,i=j,C=N,w=T,c=H,x=L,b=M,E=O,P=W,S=D;return F(),B("div",null,[m("div",G,[a(r,{type:"primary",class:"handleAdd",onClick:y},{default:l(()=>[p(" 投稿弹幕 ")]),_:1}),J,a(C,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{}},{default:l(()=>[a(i,{width:"60",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:l(n=>[a(r,{type:"primary",label:"操作",onClick:X=>U(n.row)},{default:l(()=>[p("复制")]),_:2},1032,["onClick"])]),_:1}),a(i,{prop:"cnt",label:"",width:"65"})]),_:1},8,["data"])]),m("div",Z,[m("div",null,[a(w,{background:"",layout:"prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,onCurrentChange:f},null,8,["total","page-size"])])]),a(S,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=n=>e.dialogFormVisible=n),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[m("div",K,[a(r,{onClick:t[2]||(t[2]=n=>e.dialogFormVisible=!1)},{default:l(()=>[p("关闭")]),_:1}),a(r,{type:"primary",onClick:V},{default:l(()=>[p(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:Q},{default:l(()=>[p(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(P,{model:e,"label-width":"100px",rules:g,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(x,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=n=>e.table=n),placeholder:"选择上传的分栏"},{default:l(()=>[a(c,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(c,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(c,{label:"喷选手篇",value:"machine_penPlayer"}),a(c,{label:"+1",value:"machine_p1"}),a(c,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(c,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{maxlength:"255",label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(E,{modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=n=>e.barrage=n),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},se=k(R,[["__scopeId","data-v-e184ce5f"]]);export{se as default};
