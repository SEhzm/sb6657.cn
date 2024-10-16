import{E as i,a as I,c as L,r as N,d as W,q,v as R,g as j,k as A,n as O,o as Z,p as H,b as J,m as X}from"./element-plus.CDdlTSKG.js";import{h as f}from"./httpInstance.CUwzF8MN.js";import{_ as Y}from"./index.CIr87_gx.js";import{r as $,Z as G,c as K,a as b,U as a,O as o,P as ee,M as te,F as ae,n as oe,o as C,S as d}from"./@vue.BZUOcU6f.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.bxs0Yw5i.js";import"./@element-plus.BAPt3wIv.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.B8Nt-PEr.js";const le={class:"cardTable"},re={class:"pagination-wrapper"},ne={class:"dialog-footer"},se={__name:"QMLW",setup(ie){const h=$(!0),w={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=G({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),c=async(l=1)=>{var t,r;try{const s=await f.get("/machine/QMLW/Page",{params:{pageNum:l,pageSize:e.pageSize}});e.tableData=((t=s.data)==null?void 0:t.list)||[],e.total=((r=s.data)==null?void 0:r.total)||0,await oe(),h.value=!1}catch(s){console.log("加载数据失败",s)}};c(e.currentPage);const V=()=>{window.scrollTo({top:0,behavior:"smooth"})},E=l=>{e.currentPage=l,V(),c(l)},P=()=>{i({message:"复制成功",type:"success"})},T=()=>{i({message:"复制失败",type:"error"})};let y=0,u=null,_=0;const k=l=>{const t=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(u&&u.x===r.x&&u.y===r.y?(_++,console.log(_),_>4&&j.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,t-y<1500){i({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const g=l.barrage;let n=document.createElement("input");n.value=g,document.body.appendChild(n),n.select();try{document.execCommand("Copy")}catch(v){i({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",v)}document.body.removeChild(n),y=t,u=r;return}u=r,y=t;const s=l.barrage;let m=document.createElement("input");m.value=s,document.body.appendChild(m),m.select();try{document.execCommand("Copy"),P(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:e.currentPage,table:"QMLW",id:l.id}).then(()=>{setTimeout(()=>c(e.currentPage),50)})}catch(g){i({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",g),T()}document.body.removeChild(m)},U=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},B=()=>{e.table===""||e.barrage===""?i.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.dialogFormVisible=!1,l.code==="200"?i.success("投稿成功，待审核(一天内)"):i.error("请求失败")})},F=()=>{e.table===""||e.barrage===""?i.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{c(),e.barrage="",l.code==="200"?i.success("投稿成功，待审核(一天内)"):i.error("请求失败")})};return(l,t)=>{const r=I,s=A,m=L,g=N,n=O,v=Z,x=H,Q=J,M=X,z=W,S=q,D=R;return C(),K(ae,null,[b("div",null,[b("div",le,[a(r,{type:"primary",class:"handleAdd",onClick:U},{default:o(()=>t[4]||(t[4]=[d(" 投稿弹幕 ")])),_:1}),ee((C(),te(m,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:k},{default:o(()=>[a(s,{width:"60",prop:"id",label:"序号"}),a(s,{prop:"barrage","min-width":"90",label:"弹幕"}),a(s,{label:"",align:"center",width:"85"},{default:o(()=>[a(r,{type:"primary",label:"操作"},{default:o(()=>t[5]||(t[5]=[d("复制")])),_:1})]),_:1}),a(s,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[D,h.value]])]),b("div",re,[b("div",null,[a(g,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:E},null,8,["total","page-size"])])]),a(z,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[b("div",ne,[a(r,{onClick:t[2]||(t[2]=p=>e.dialogFormVisible=!1)},{default:o(()=>t[6]||(t[6]=[d("关闭")])),_:1}),a(r,{type:"primary",onClick:B},{default:o(()=>t[7]||(t[7]=[d(" 投稿并关闭 ")])),_:1}),a(r,{type:"primary",onClick:F},{default:o(()=>t[8]||(t[8]=[d(" 连续投稿 ")])),_:1})])]),default:o(()=>[a(M,{model:e,"label-width":"100px",rules:w,"label-position":"right"},{default:o(()=>[a(x,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[a(v,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:o(()=>[a(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),a(n,{label:"木柜子篇",value:"machine_mygo"}),a(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),a(n,{label:"喷选手篇",value:"machine_penPlayer"}),a(n,{label:"+1",value:"machine_p1"}),a(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),a(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(x,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[a(Q,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=p=>e.barrage=p),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(S,{right:50,bottom:50},{default:o(()=>t[9]||(t[9]=[d("UP")])),_:1})],64)}}},Ee=Y(se,[["__scopeId","data-v-5233f182"]]);export{Ee as default};
