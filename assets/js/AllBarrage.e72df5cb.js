import{j as n,b as D,e as F,o as T,q as N,d as Q,l as S,m as z,n as A,a as q,k as I}from"./element-plus.528b82f3.js";import{r as m}from"./request.39193e0d.js";import{_ as j}from"./index.b72254c2.js";import{_ as W,k as H,o as J,c as L,a as _,V as a,P as l,u as M,T as c}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const O={class:"card"},R={class:"dialog-footer"},Z={__name:"AllBarrage",setup($){const b={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=W({tableData:[],total:0,pageSize:5500,currentPage:1,dialogFormVisible:!1,table:"",barrage:"",ip:""}),d=(o=1)=>{m.get("/machine/allBarrage/Page",{params:{status:0}}).then(t=>{var r;e.tableData=t.data||[],e.total=((r=t.data)==null?void 0:r.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};d(e.currentPage);const g=()=>{const o=(e.currentPage-1)*e.pageSize,t=o+e.pageSize;return e.tableData.slice(o,t)},f=H(()=>g()),h=()=>{d(),n({message:"复制成功",type:"success"})},y=()=>{n({message:"复制失败",type:"error"})},V=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{h(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"allbarrage",id:o.id})}).then(()=>{setTimeout(d(e.currentPage),50)}).catch(t=>{console.error("复制失败:",t),y()})},v=()=>{n({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),e.table="",e.barrage="",e.dialogFormVisible=!0},P=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.dialogFormVisible=!1,o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})},x=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{d(),e.barrage="",o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})};return(o,t)=>{const r=D,p=Q,E=F,k=T,s=S,w=z,u=A,B=q,U=I,C=N;return J(),L("div",null,[_("div",O,[a(r,{type:"primary",class:"handleAdd",onClick:v},{default:l(()=>[c(" 投稿弹幕 ")]),_:1}),a(E,{stripe:"",data:M(f),lazy:"true","empty-text":"我还没有加载完喔~~因本页烂梗较多，可能会出现卡顿",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:V},{default:l(()=>[a(p,{width:"70",prop:"id",label:"序号"}),a(p,{prop:"barrage","min-width":"90",label:"弹幕"}),a(p,{label:"",align:"center",width:"85"},{default:l(()=>[a(r,{type:"primary",label:"操作"},{default:l(()=>[c("复制")]),_:1})]),_:1}),a(p,{prop:"cnt",label:"复制次数",width:"65"})]),_:1},8,["data"])]),a(k,{right:50,bottom:50},{default:l(()=>[c("UP")]),_:1}),a(C,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=i=>e.dialogFormVisible=i),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[_("div",R,[a(r,{onClick:t[2]||(t[2]=i=>e.dialogFormVisible=!1)},{default:l(()=>[c("关闭")]),_:1}),a(r,{type:"primary",onClick:P},{default:l(()=>[c(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:x},{default:l(()=>[c(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(U,{model:e,"label-width":"100px",rules:b,"label-position":"right"},{default:l(()=>[a(u,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(w,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=i=>e.table=i),placeholder:"选择上传的分栏"},{default:l(()=>[a(s,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(s,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(s,{label:"喷选手篇",value:"machine_penPlayer"}),a(s,{label:"+1",value:"machine_p1"}),a(s,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(s,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(B,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=i=>e.barrage=i),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},me=j(Z,[["__scopeId","data-v-cf63ee9a"]]);export{me as default};
