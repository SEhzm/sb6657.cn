/* empty css               *//* empty css                */import{r as m}from"./notification-930b51d9.js";/* empty css                     *//* empty css               *//* empty css                */import{_ as U,q as F,s as I,o as z,c as A,a as _,b as a,w as l,u as N,z as n,E as Q,A as T,O as q,f as d,D as J,G as L,I as M,M as O,J as R,K as W,L as j,B as G,C as H}from"./index-bcc6c0de.js";const K=p=>(J("data-v-ed47c187"),p=p(),L(),p),Z={class:"card"},$=K(()=>_("b",{class:"copyCount"},"复制次数",-1)),X={class:"dialog-footer"},Y={__name:"AllBarrage",setup(p){const g={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=F({tableData:[],total:0,pageSize:3500,currentPage:1,dialogFormVisible:!1,table:"",barrage:"",ip:""}),i=(o=1)=>{m.get("/machine/allBarrage/Page",{params:{status:0}}).then(t=>{var r;e.tableData=t.data||[],e.total=((r=t.data)==null?void 0:r.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};i(e.currentPage);const f=()=>{const o=(e.currentPage-1)*e.pageSize,t=o+e.pageSize;return e.tableData.slice(o,t)},h=I(()=>f()),y=()=>{i(),n({message:"复制成功",type:"success"})},v=()=>{n.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},V=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{y(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"allbarrage",id:o.id})}).then(()=>{setTimeout(i(e.currentPage),80)}).catch(t=>{console.error("复制失败:",t),v()})},w=()=>{n({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),e.table="",e.barrage="",e.dialogFormVisible=!0},E=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.dialogFormVisible=!1,o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})},P=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{i(),e.barrage="",o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})};return(o,t)=>{const r=Q,u=M,x=T,B=O,s=R,C=W,b=j,k=G,D=H,S=q;return z(),A("div",null,[_("div",Z,[a(r,{type:"primary",class:"handleAdd",onClick:w},{default:l(()=>[d(" 投稿弹幕 ")]),_:1}),$,a(x,{stripe:"",data:N(h),lazy:"true","empty-text":"我还没有加载完喔~~因本页烂梗较多，可能会出现卡顿",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:V},{default:l(()=>[a(u,{width:"70",prop:"id",label:"序号"}),a(u,{prop:"barrage","min-width":"90",label:"弹幕"}),a(u,{label:"",align:"center",width:"85"},{default:l(()=>[a(r,{type:"primary",label:"操作"},{default:l(()=>[d("复制")]),_:1})]),_:1}),a(u,{prop:"cnt",label:"",width:"65"})]),_:1},8,["data","onRowClick"])]),a(B,{right:50,bottom:50}),a(S,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=c=>e.dialogFormVisible=c),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[_("div",X,[a(r,{onClick:t[2]||(t[2]=c=>e.dialogFormVisible=!1)},{default:l(()=>[d("关闭")]),_:1}),a(r,{type:"primary",onClick:E},{default:l(()=>[d(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:P},{default:l(()=>[d(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(D,{model:e,"label-width":"100px",rules:g,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(C,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=c=>e.table=c),placeholder:"选择上传的分栏"},{default:l(()=>[a(s,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(s,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(s,{label:"喷选手篇",value:"machine_penPlayer"}),a(s,{label:"+1",value:"machine_p1"}),a(s,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(s,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(k,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=c=>e.barrage=c),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},se=U(Y,[["__scopeId","data-v-ed47c187"]]);export{se as default};
