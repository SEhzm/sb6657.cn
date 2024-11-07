import{c as s,a as R,d as q,e as j,r as A,n as L,o as O,p as W,b as Z,l as H,f as J,q as X,v as Y,E as $}from"./element-plus.C4TNmNpl.js";import{h as v,M as G,_ as K}from"./index.ZYGdeKqW.js";import{u as ee}from"./vue-router.DkBAQHKx.js";import{d as te,k as ae,r as oe,Z as le,w as re,o as V,c as ne,a as b,U as a,O as l,S as u,P as se,M as ie,F as me}from"./@vue.kwc71ESp.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.Bmvu7DnR.js";import"./@element-plus.CQ2moJ0T.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";const pe={class:"cardTable",style:{position:"relative"}},de={class:"pagination-wrapper"},ce={class:"dialog-footer"},ue=te({__name:"memes-view",setup(ge){const x=ee(),_=ae(()=>G.find(o=>o.path===x.path)),h=oe(!0),P={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=le({tableData:[],total:0,pageSize:40,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),m=(o=1)=>{v.get(_.value.api,{params:{pageNum:o,pageSize:e.pageSize}}).then(t=>{var r,i;console.log("load res",_.value.api,t),e.tableData=((r=t.data)==null?void 0:r.list)||[],e.total=((i=t.data)==null?void 0:i.total)||0,h.value=!1}).catch(t=>{console.error("加载数据失败:",t)})};m(e.currentPage),re(()=>x.path,()=>{e.currentPage=1,h.value=!0,m(1)});const E=()=>{window.scrollTo({top:0,behavior:"smooth"})},T=o=>{e.currentPage=o,E(),m(o)},k=()=>{s({message:"复制成功",type:"success"})},U=()=>{s({message:"复制失败",type:"error"})};let C=0,g=null,w=0;const B=o=>{var f;const t=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(g&&g.x===r.x&&g.y===r.y?(w++,w>4&&$.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):w=0,t-C<1500){s({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const n=o.barrage;let d=document.createElement("input");d.value=n,document.body.appendChild(d),d.select();try{document.execCommand("Copy")}catch(y){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",y)}document.body.removeChild(d),C=t,g=r;return}g=r,C=t;const i=o.barrage;let p=document.createElement("input");p.value=i,document.body.appendChild(p),p.select();try{document.execCommand("Copy"),k(),console.log("内容已复制到剪贴板",_),v.post("/machine/addCnt",{PageNum:e.currentPage,table:(f=_.value)==null?void 0:f.category,id:o.id}).then(n=>{setTimeout(()=>m(e.currentPage),200)})}catch(n){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",n),U()}document.body.removeChild(p)},F=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},z=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):v.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{m(),e.dialogFormVisible=!1,o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},S=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):v.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(o=>{m(),e.barrage="",o.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(o,t)=>{const r=R,i=q,p=j,f=A,n=L,d=O,y=W,M=Z,D=H,I=J,Q=X,N=Y;return V(),ne(me,null,[b("div",null,[b("div",pe,[a(r,{type:"primary",class:"handleAdd",onClick:F},{default:l(()=>t[4]||(t[4]=[u("投稿弹幕")])),_:1}),se((V(),ie(p,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:B},{default:l(()=>[a(i,{width:"58",prop:"id",label:"序号"}),a(i,{prop:"barrage","min-width":"90",label:"弹幕"}),a(i,{label:"",align:"center",width:"85"},{default:l(()=>[a(r,{type:"primary",label:"操作"},{default:l(()=>t[5]||(t[5]=[u("复制")])),_:1})]),_:1}),a(i,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[N,h.value]])]),b("div",de,[b("div",null,[a(f,{background:"red",layout:"prev, pager, next, jumper","current-page":e.currentPage,total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:T},null,8,["current-page","total","page-size"])])]),a(I,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=c=>e.dialogFormVisible=c),draggable:"",title:"投稿弹幕",width:"82%"},{footer:l(()=>[b("div",ce,[a(r,{onClick:t[2]||(t[2]=c=>e.dialogFormVisible=!1)},{default:l(()=>t[6]||(t[6]=[u("关闭")])),_:1}),a(r,{type:"primary",onClick:z},{default:l(()=>t[7]||(t[7]=[u("投稿并关闭")])),_:1}),a(r,{type:"primary",onClick:S},{default:l(()=>t[8]||(t[8]=[u("连续投稿")])),_:1})])]),default:l(()=>[a(D,{model:e,"label-width":"100px",rules:P,"label-position":"right"},{default:l(()=>[a(y,{label:"分栏","label-width":100,prop:"table"},{default:l(()=>[a(d,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=c=>e.table=c),placeholder:"选择上传的分栏"},{default:l(()=>[a(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(n,{label:"木柜子篇",value:"machine_mygo"}),a(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(n,{label:"喷选手篇",value:"machine_penPlayer"}),a(n,{label:"+1",value:"machine_p1"}),a(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(y,{label:"弹幕内容",prop:"barrage"},{default:l(()=>[a(M,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=c=>e.barrage=c),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(Q,{right:50,bottom:50},{default:l(()=>t[9]||(t[9]=[u("UP")])),_:1})],64)}}}),Be=K(ue,[["__scopeId","data-v-bc75cb1b"]]);export{Be as default};
