/* empty css               *//* empty css                */import{r as g}from"./notification-930b51d9.js";/* empty css                     *//* empty css               *//* empty css                *//* empty css                   */import{_ as F,q as I,s as N,o as A,c as Q,a as d,b as a,w as o,u as T,z as n,E as q,A as j,N as J,O as L,f as p,D as M,G as O,I as W,M as $,J as G,K as H,L as K,B as R,C as Z}from"./index-10af70b9.js";const X=u=>(M("data-v-37ec7684"),u=u(),O(),u),Y={class:"card"},ee=X(()=>d("b",{class:"copyCount"},"复制次数",-1)),ae={class:"pagination-wrapper"},te={class:"dialog-footer"},le={__name:"AllBarrage",setup(u){const h={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=I({tableData:[],total:0,pageSize:500,currentPage:1,dialogFormVisible:!1,table:"",barrage:"",ip:""}),c=(l=1)=>{g.get("/machine/allBarrage/Page",{params:{status:0}}).then(t=>{var r;e.tableData=t.data||[],e.total=((r=t.data)==null?void 0:r.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};c(e.currentPage);const v=l=>{e.currentPage=l,_()},_=()=>{const l=(e.currentPage-1)*e.pageSize,t=l+e.pageSize;return e.tableData.slice(l,t)},y=N(()=>_()),V=()=>{c(),n({message:"复制成功",type:"success"})},C=()=>{n.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},b=l=>{navigator.clipboard.writeText(l.barrage).then(()=>{V(),console.log("内容已复制到剪贴板"),g.post("/machine/addCnt",{PageNum:e.currentPage,table:"allbarrage",id:l.id})}).then(()=>{setTimeout(c(e.currentPage),80)}).catch(t=>{console.error("复制失败:",t),C()})},P=()=>{n({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),e.table="",e.barrage="",e.dialogFormVisible=!0},w=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):g.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.dialogFormVisible=!1,l.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):g.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.barrage="",l.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})};return(l,t)=>{const r=q,m=W,x=j,k=J,B=$,i=G,S=H,f=K,D=R,U=Z,z=L;return A(),Q("div",null,[d("div",Y,[a(r,{type:"primary",class:"handleAdd",onClick:P},{default:o(()=>[p(" 投稿弹幕 ")]),_:1}),ee,a(x,{stripe:"",data:T(y),"empty-text":"我还没有加载完喔~~因本页烂梗较多，可能会出现卡顿",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:b},{default:o(()=>[a(m,{width:"70",prop:"id",label:"序号"}),a(m,{prop:"barrage","min-width":"90",label:"弹幕"}),a(m,{label:"",align:"center",width:"85"},{default:o(s=>[a(r,{type:"primary",label:"操作",onClick:oe=>b(s.row)},{default:o(()=>[p("复制")]),_:2},1032,["onClick"])]),_:1}),a(m,{prop:"cnt",label:"",width:"65"})]),_:1},8,["data"])]),d("div",ae,[d("div",null,[a(k,{background:"",layout:"prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,onCurrentChange:v},null,8,["total","page-size"])])]),a(B,{right:50,bottom:50}),a(z,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=s=>e.dialogFormVisible=s),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[d("div",te,[a(r,{onClick:t[2]||(t[2]=s=>e.dialogFormVisible=!1)},{default:o(()=>[p("关闭")]),_:1}),a(r,{type:"primary",onClick:w},{default:o(()=>[p(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:E},{default:o(()=>[p(" 连续投稿 ")]),_:1})])]),default:o(()=>[a(U,{model:e,"label-width":"100px",rules:h,"label-position":"right"},{default:o(()=>[a(f,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[a(S,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=s=>e.table=s),placeholder:"选择上传的分栏"},{default:o(()=>[a(i,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(i,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(i,{label:"喷选手篇",value:"machine_penPlayer"}),a(i,{label:"+1",value:"machine_p1"}),a(i,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(i,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[a(D,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=s=>e.barrage=s),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},me=F(le,[["__scopeId","data-v-37ec7684"]]);export{me as default};
