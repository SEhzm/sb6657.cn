/* empty css               *//* empty css                *//* empty css                */import{r as m}from"./notification-930b51d9.js";/* empty css                     *//* empty css               *//* empty css                   */import{_ as z,q as B,o as N,c as S,a as u,b as a,w as l,F as Q,E as T,A as q,N as D,O as I,M as A,f as d,z as n,I as j,J,K as L,L as M,B as O,C as R}from"./index-2c4b56af.js";const W={class:"card"},H={class:"pagination-wrapper"},K={class:"dialog-footer"},Z={__name:"p1",setup($){const _={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=B({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),c=(o=1)=>{m.get("/machine/p1/Page",{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,s;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((s=t.data)==null?void 0:s.total)||0}).catch(t=>{console.error("加载数据失败:",t)})};c(e.currentPage);const g=o=>{e.currentPage=o,c(o)},f=()=>{n({message:"复制成功",type:"success"})},h=()=>{n.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},v=o=>{navigator.clipboard.writeText(o.barrage).then(()=>{f(),console.log("内容已复制到剪贴板"),m.post("/machine/addCnt",{PageNum:e.currentPage,table:"p1",id:o.id})}).then(()=>{setTimeout(c(e.currentPage),80)}).catch(t=>{console.error("复制失败:",t),h()})},V=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},y=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{c(),e.dialogFormVisible=!1,o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?n.error("请选择分栏或输入弹幕"):m.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{c(),e.barrage="",o.code==="200"?n.success("投稿成功，待审核(一天内)"):n.error("请求失败")})};return(o,t)=>{const r=T,s=j,w=q,x=D,i=J,C=L,b=M,P=O,k=R,F=I,U=A;return N(),S(Q,null,[u("div",null,[u("div",W,[a(r,{type:"primary",class:"handleAdd",onClick:V},{default:l(()=>[d(" 投稿弹幕 ")]),_:1}),a(w,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:v},{default:l(()=>[a(s,{width:"58",prop:"id",label:"序号"}),a(s,{prop:"barrage","min-width":"90",label:"弹幕"}),a(s,{label:"",align:"center",width:"85"},{default:l(()=>[a(r,{type:"primary",label:"操作"},{default:l(()=>[d("复制")]),_:1})]),_:1}),a(s,{prop:"cnt",label:"复制次数",width:"60"})]),_:1},8,["data","onRowClick"])]),u("div",H,[u("div",null,[a(x,{background:"red",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:g},null,8,["total","page-size"])])]),a(F,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[u("div",K,[a(r,{onClick:t[2]||(t[2]=p=>e.dialogFormVisible=!1)},{default:l(()=>[d("关闭")]),_:1}),a(r,{type:"primary",onClick:y},{default:l(()=>[d(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:E},{default:l(()=>[d(" 连续投稿 ")]),_:1})])]),default:l(()=>[a(k,{model:e,"label-width":"100px",rules:_,"label-position":"right"},{default:l(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(C,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:l(()=>[a(i,{label:"喷玩机器篇",value:"penWJQ"}),a(i,{label:"直播间互喷篇",value:"ZbjHuPen"}),a(i,{label:"喷选手篇",value:"penPlayer"}),a(i,{label:"+1",value:"p1"}),a(i,{label:"群魔乱舞篇",value:"QMLW"}),a(i,{label:"QUQU",value:"QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(P,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=p=>e.barrage=p),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(U,{right:50,bottom:50},{default:l(()=>[d("UP")]),_:1})],64)}}},re=z(Z,[["__scopeId","data-v-62951b29"]]);export{re as default};
