<<<<<<<< HEAD:assets/js/ZbjHuPen.48673ddb.js
import{E as s,a as H,c as N,r as Z,d as I,q,v as M,g as R,k as A,n as L,o as O,p as W,b as J,m as X}from"./element-plus.ec180c6b.js";import{r as f}from"./request.39193e0d.js";import{_ as Y}from"./index.b75128c7.js";import{r as $,_ as G,o as C,c as K,a as g,V as t,P as o,Q as ee,O as te,F as ae,T as d}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.f6176e51.js";const oe={class:"cardTable"},le={class:"pagination-wrapper"},re={class:"dialog-footer"},ne={__name:"ZbjHuPen",setup(se){const v=$(!0),P={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=G({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=(l=1)=>{f.get("/machine/ZbjHuPen/Page",{params:{pageNum:l,pageSize:e.pageSize}}).then(a=>{var r,i;e.tableData=((r=a.data)==null?void 0:r.list)||[],e.total=((i=a.data)==null?void 0:i.total)||0,v.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};p(e.currentPage);const V=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=l=>{e.currentPage=l,V(),p(l)},E=()=>{s({message:"复制成功",type:"success"})},T=()=>{s({message:"复制失败",type:"error"})};let h=0,u=null,_=0;const k=l=>{const a=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(u&&u.x===r.x&&u.y===r.y?(_++,console.log(_),_>4&&R.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,a-h<1500){s({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const b=l.barrage;let n=document.createElement("input");n.value=b,document.body.appendChild(n),n.select();try{document.execCommand("Copy")}catch(y){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",y)}document.body.removeChild(n),h=a,u=r;return}u=r,h=a;const i=l.barrage;let c=document.createElement("input");c.value=i,document.body.appendChild(c),c.select();try{document.execCommand("Copy"),E(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:e.currentPage,table:"ZbjHuPen",id:l.id}).then(()=>{setTimeout(()=>p(e.currentPage),50)})}catch(b){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",b),T()}document.body.removeChild(c)},B=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},F=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.dialogFormVisible=!1,l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},U=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.barrage="",l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(l,a)=>{const r=H,i=A,c=N,b=Z,n=L,y=O,x=W,z=J,j=X,Q=I,S=q,D=M;return C(),K(ae,null,[g("div",null,[g("div",oe,[t(r,{type:"primary",class:"handleAdd",onClick:B},{default:o(()=>[d(" 投稿弹幕 ")]),_:1}),ee((C(),te(c,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:k},{default:o(()=>[t(i,{width:"60",prop:"id",label:"序号"}),t(i,{prop:"barrage","min-width":"90",label:"弹幕"}),t(i,{label:"",align:"center",width:"85"},{default:o(()=>[t(r,{type:"primary",label:"操作"},{default:o(()=>[d("复制")]),_:1})]),_:1}),t(i,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[D,v.value]])]),g("div",le,[g("div",null,[t(b,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:w},null,8,["total","page-size"])])]),t(Q,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=m=>e.dialogFormVisible=m),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[g("div",re,[t(r,{onClick:a[2]||(a[2]=m=>e.dialogFormVisible=!1)},{default:o(()=>[d("关闭")]),_:1}),t(r,{type:"primary",onClick:F},{default:o(()=>[d(" 投稿并关闭 ")]),_:1}),t(r,{type:"primary",onClick:U},{default:o(()=>[d(" 连续投稿 ")]),_:1})])]),default:o(()=>[t(j,{model:e,"label-width":"100px",rules:P,"label-position":"right"},{default:o(()=>[t(x,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[t(y,{modelValue:e.table,"onUpdate:modelValue":a[0]||(a[0]=m=>e.table=m),placeholder:"选择上传的分栏"},{default:o(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),t(x,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[t(z,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":a[1]||(a[1]=m=>e.barrage=m),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(S,{right:50,bottom:50},{default:o(()=>[d("UP")]),_:1})],64)}}},Ve=Y(ne,[["__scopeId","data-v-4272f076"]]);export{Ve as default};
========
import{E as s,a as H,c as N,r as Z,d as I,q,v as M,g as R,k as A,n as L,o as O,p as W,b as J,m as X}from"./element-plus.fdfabbca.js";import{r as f}from"./request.39193e0d.js";import{_ as Y}from"./index.45f3de38.js";import{r as $,_ as G,o as C,c as K,a as g,V as t,P as o,Q as ee,O as te,F as ae,T as d}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.f6176e51.js";const oe={class:"cardTable"},le={class:"pagination-wrapper"},re={class:"dialog-footer"},ne={__name:"ZbjHuPen",setup(se){const v=$(!0),P={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=G({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=(l=1)=>{f.get("/machine/ZbjHuPen/Page",{params:{pageNum:l,pageSize:e.pageSize}}).then(a=>{var r,i;e.tableData=((r=a.data)==null?void 0:r.list)||[],e.total=((i=a.data)==null?void 0:i.total)||0,v.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};p(e.currentPage);const V=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=l=>{e.currentPage=l,V(),p(l)},E=()=>{s({message:"复制成功",type:"success"})},T=()=>{s({message:"复制失败",type:"error"})};let h=0,u=null,_=0;const k=l=>{const a=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(u&&u.x===r.x&&u.y===r.y?(_++,console.log(_),_>4&&R.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,a-h<1500){s({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const b=l.barrage;let n=document.createElement("input");n.value=b,document.body.appendChild(n),n.select();try{document.execCommand("Copy")}catch(y){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",y)}document.body.removeChild(n),h=a,u=r;return}u=r,h=a;const i=l.barrage;let c=document.createElement("input");c.value=i,document.body.appendChild(c),c.select();try{document.execCommand("Copy"),E(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:e.currentPage,table:"ZbjHuPen",id:l.id}).then(()=>{setTimeout(()=>p(e.currentPage),50)})}catch(b){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",b),T()}document.body.removeChild(c)},B=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},F=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.dialogFormVisible=!1,l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},U=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.barrage="",l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(l,a)=>{const r=H,i=A,c=N,b=Z,n=L,y=O,x=W,z=J,j=X,Q=I,S=q,D=M;return C(),K(ae,null,[g("div",null,[g("div",oe,[t(r,{type:"primary",class:"handleAdd",onClick:B},{default:o(()=>[d(" 投稿弹幕 ")]),_:1}),ee((C(),te(c,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:k},{default:o(()=>[t(i,{width:"60",prop:"id",label:"序号"}),t(i,{prop:"barrage","min-width":"90",label:"弹幕"}),t(i,{label:"",align:"center",width:"85"},{default:o(()=>[t(r,{type:"primary",label:"操作"},{default:o(()=>[d("复制")]),_:1})]),_:1}),t(i,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[D,v.value]])]),g("div",le,[g("div",null,[t(b,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:w},null,8,["total","page-size"])])]),t(Q,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=m=>e.dialogFormVisible=m),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[g("div",re,[t(r,{onClick:a[2]||(a[2]=m=>e.dialogFormVisible=!1)},{default:o(()=>[d("关闭")]),_:1}),t(r,{type:"primary",onClick:F},{default:o(()=>[d(" 投稿并关闭 ")]),_:1}),t(r,{type:"primary",onClick:U},{default:o(()=>[d(" 连续投稿 ")]),_:1})])]),default:o(()=>[t(j,{model:e,"label-width":"100px",rules:P,"label-position":"right"},{default:o(()=>[t(x,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[t(y,{modelValue:e.table,"onUpdate:modelValue":a[0]||(a[0]=m=>e.table=m),placeholder:"选择上传的分栏"},{default:o(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),t(x,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[t(z,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":a[1]||(a[1]=m=>e.barrage=m),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(S,{right:50,bottom:50},{default:o(()=>[d("UP")]),_:1})],64)}}},Ve=Y(ne,[["__scopeId","data-v-4272f076"]]);export{Ve as default};
>>>>>>>> parent of fab99dd (feat ：全部弹幕页新增按复制次数升降序排序):assets/js/ZbjHuPen.fe834a05.js
