import{c as s,a as N,e as M,r as q,f as R,q as j,v as A,E as L,d as O,n as W,o as Z,p as H,b as J,l as X}from"./element-plus.ptvX-yKI.js";import{_ as Y,h as f}from"./index.Bn0Rq4Qk.js";import{r as $,Z as G,c as K,a as b,U as a,O as o,P as ee,M as te,F as ae,o as C,S as p}from"./@vue.kwc71ESp.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.Bmvu7DnR.js";import"./@element-plus.BetvbiCU.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.DkBAQHKx.js";const oe={class:"cardTable"},le={class:"pagination-wrapper"},re={class:"dialog-footer"},ne={__name:"QUQU",setup(se){const v=$(!0),U={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=G({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),c=(l=1)=>{f.get("/machine/QUQU/Page",{params:{pageNum:l,pageSize:e.pageSize}}).then(t=>{var r,i;e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0,v.value=!1}).catch(t=>{console.error("加载数据失败:",t)})};c(e.currentPage);const w=()=>{window.scrollTo({top:0,behavior:"smooth"})},V=l=>{e.currentPage=l,w(),c(l)},E=()=>{s({message:"复制成功",type:"success"})},P=()=>{s({message:"复制失败",type:"error"})};let y=0,u=null,_=0;const T=l=>{const t=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(u&&u.x===r.x&&u.y===r.y?(_++,console.log(_),_>4&&L.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,t-y<1500){s({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const g=l.barrage;let n=document.createElement("input");n.value=g,document.body.appendChild(n),n.select();try{document.execCommand("Copy")}catch(h){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",h)}document.body.removeChild(n),y=t,u=r;return}u=r,y=t;const i=l.barrage;let m=document.createElement("input");m.value=i,document.body.appendChild(m),m.select();try{document.execCommand("Copy"),E(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:e.currentPage,table:"QUQU",id:l.id}).then(()=>{setTimeout(()=>c(e.currentPage),50)})}catch(g){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",g),P()}document.body.removeChild(m)},Q=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},k=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.dialogFormVisible=!1,l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},B=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.barrage="",l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(l,t)=>{const r=N,i=O,m=M,g=q,n=W,h=Z,x=H,F=J,z=X,S=R,D=j,I=A;return C(),K(ae,null,[b("div",null,[b("div",oe,[a(r,{type:"primary",class:"handleAdd",onClick:Q},{default:o(()=>t[4]||(t[4]=[p(" 投稿弹幕 ")])),_:1}),ee((C(),te(m,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:T},{default:o(()=>[a(i,{width:"60",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:o(()=>[a(r,{type:"primary",label:"操作"},{default:o(()=>t[5]||(t[5]=[p("复制")])),_:1})]),_:1}),a(i,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[I,v.value]])]),b("div",le,[b("div",null,[a(g,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:V},null,8,["total","page-size"])])]),a(S,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=d=>e.dialogFormVisible=d),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[b("div",re,[a(r,{onClick:t[2]||(t[2]=d=>e.dialogFormVisible=!1)},{default:o(()=>t[6]||(t[6]=[p("关闭")])),_:1}),a(r,{type:"primary",onClick:k},{default:o(()=>t[7]||(t[7]=[p(" 投稿并关闭 ")])),_:1}),a(r,{type:"primary",onClick:B},{default:o(()=>t[8]||(t[8]=[p(" 连续投稿 ")])),_:1})])]),default:o(()=>[a(z,{model:e,"label-width":"100px",rules:U,"label-position":"right"},{default:o(()=>[a(x,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[a(h,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=d=>e.table=d),placeholder:"选择上传的分栏"},{default:o(()=>[a(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(n,{label:"木柜子篇",value:"machine_mygo"}),a(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(n,{label:"喷选手篇",value:"machine_penPlayer"}),a(n,{label:"+1",value:"machine_p1"}),a(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(x,{maxlength:"255",label:"弹幕内容",prop:"barrage"},{default:o(()=>[a(F,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=d=>e.barrage=d),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(D,{right:50,bottom:50},{default:o(()=>t[9]||(t[9]=[p("UP")])),_:1})],64)}}},Ue=Y(ne,[["__scopeId","data-v-4bb9aaf1"]]);export{Ue as default};
