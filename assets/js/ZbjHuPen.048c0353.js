import{b as j,e as F,p as z,q as S,j as n,d as T,l as B,m as H,n as N,a as Q,k as Z}from"./element-plus.528b82f3.js";import{r as m}from"./request.39193e0d.js";import{_ as q}from"./index.b72254c2.js";import{_ as D,o as I,c as A,a as u,V as a,P as l,T as c}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const W={class:"card"},J={class:"pagination-wrapper"},L={class:"dialog-footer"},M={__name:"ZbjHuPen",setup(O){const _={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=D({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),d=(o=1)=>{m.get("/machine/ZbjHuPen/Page",{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,i;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};d(e.currentPage);const g=o=>{e.currentPage=o,d(o)},f=()=>{n({message:"复制成功",type:"success"})},h=()=>{n({message:"复制失败",type:"error"})},v=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{f(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"ZbjHuPen",id:o.id})}).then(()=>{setTimeout(d(e.currentPage),50)}).catch(t=>{console.error("复制失败:",t),h()})},V=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},y=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.dialogFormVisible=!1,o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})},P=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.barrage="",o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})};return(o,t)=>{const r=j,i=T,x=F,E=z,s=B,w=H,b=N,C=Q,k=Z,U=S;return I(),A("div",null,[u("div",W,[a(r,{type:"primary",class:"handleAdd",onClick:V},{default:l(()=>[c(" 投稿弹幕 ")]),_:1}),a(x,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:v},{default:l(()=>[a(i,{width:"60",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:l(()=>[a(r,{type:"primary",label:"操作"},{default:l(()=>[c("复制")]),_:1})]),_:1}),a(i,{prop:"cnt",label:"复制次数",width:"65"})]),_:1},8,["data"])]),u("div",J,[u("div",null,[a(E,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:g},null,8,["total","page-size"])])]),a(U,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[u("div",L,[a(r,{onClick:t[2]||(t[2]=p=>e.dialogFormVisible=!1)},{default:l(()=>[c("关闭")]),_:1}),a(r,{type:"primary",onClick:y},{default:l(()=>[c(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:P},{default:l(()=>[c(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(k,{model:e,"label-width":"100px",rules:_,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(w,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:l(()=>[a(s,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(s,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(s,{label:"喷选手篇",value:"machine_penPlayer"}),a(s,{label:"+1",value:"machine_p1"}),a(s,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(s,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(C,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=p=>e.barrage=p),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},de=q(M,[["__scopeId","data-v-d5425b02"]]);export{de as default};