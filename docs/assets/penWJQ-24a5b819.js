/* empty css               *//* empty css                *//* empty css                     *//* empty css                     *//* empty css               *//* empty css                   */import{r as b}from"./request-5572bcba.js";import{_ as U,q as z,o as F,c as B,a as c,b as a,w as l,E as I,A as N,L as W,M as J,f as p,N as D,O as T,z as s,D as q,G as A,H as j,I as H,B as L,C as M}from"./index-582ac752.js";const O=u=>(D("data-v-e5d1102d"),u=u(),T(),u),$={class:"card"},G=O(()=>c("b",{class:"copyCount"},"复制次数",-1)),Z={class:"pagination-wrapper"},K={class:"dialog-footer"},R={__name:"penWJQ",setup(u){const g={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=z({tableData:[],total:0,pageSize:15,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),m=(o=1)=>{b.get("/machine/penWJQ/Page",{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,i;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};m(e.currentPage);const f=o=>{e.currentPage=o,m(o)},h=()=>{s({message:"复制成功",type:"success"})},v=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},y=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{h(),console.log("内容已复制到剪贴板"),b.post("/machine/addCnt",{PageNum:e.currentPage,table:"penWJQ",id:o.id})}).catch(t=>{console.error("复制失败:",t),v()})},V=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},C=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):b.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{m(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},w=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):b.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{m(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const r=I,i=q,x=N,E=W,d=A,Q=j,_=H,P=L,S=M,k=J;return F(),B("div",null,[c("div",$,[a(r,{type:"primary",class:"handleAdd",onClick:V},{default:l(()=>[p(" 投稿弹幕 ")]),_:1}),G,a(x,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{}},{default:l(()=>[a(i,{width:"60",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:l(n=>[a(r,{type:"primary",label:"操作",onClick:X=>y(n.row)},{default:l(()=>[p("复制")]),_:2},1032,["onClick"])]),_:1}),a(i,{prop:"cnt",label:"",width:"65"})]),_:1},8,["data"])]),c("div",Z,[c("div",null,[a(E,{background:"",layout:"prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,onCurrentChange:f},null,8,["total","page-size"])])]),a(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=n=>e.dialogFormVisible=n),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[c("div",K,[a(r,{onClick:t[2]||(t[2]=n=>e.dialogFormVisible=!1)},{default:l(()=>[p("关闭")]),_:1}),a(r,{type:"primary",onClick:C},{default:l(()=>[p(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:w},{default:l(()=>[p(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(S,{model:e,"label-width":"100px",rules:g,"label-position":"right"},{default:l(()=>[a(_,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(Q,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=n=>e.table=n),placeholder:"选择上传的分栏"},{default:l(()=>[a(d,{label:"喷玩机器篇",value:"penWJQ"}),a(d,{label:"直播间互喷篇",value:"ZbjHuPen"}),a(d,{label:"喷选手篇",value:"penPlayer"}),a(d,{label:"+1",value:"p1"}),a(d,{label:"群魔乱舞篇",value:"QMLW"}),a(d,{label:"QUQU",value:"QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(P,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=n=>e.barrage=n),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},se=U(R,[["__scopeId","data-v-e5d1102d"]]);export{se as default};
