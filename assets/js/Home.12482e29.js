import{j as b,b as W,e as O,a as G,k as K,h as C,d as Z,l as A,m as X,n as Y,o as ee}from"./element-plus.528b82f3.js";import{r as h}from"./request.39193e0d.js";import{_ as te}from"./favicon.9ef6f040.js";import{_ as M}from"./index.b72254c2.js";import{o as _,c as v,r as i,_ as ae,k as oe,j as le,a,V as t,P as s,O as T,u as se,S as ne,T as c,U as re,F as ie,aw as ce,ax as pe,ay as de}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const me={},ue={src:te,alt:"",style:{width:"40px"}};function _e(m,U){return _(),v("img",ue)}const ge=M(me,[["render",_e]]);const p=m=>(pe("data-v-0e24a4fa"),m=m(),de(),m),be=p(()=>a("div",{style:{height:"200px"}},[a("img",{src:"https://pic.imgdb.cn/item/66f7a491f21886ccc022f12a.png",alt:"6657boom",class:"boom6657"})],-1)),he={class:"home"},fe=ce('<div class="card" style="line-height:30px;margin-top:10px;" data-v-0e24a4fa><div data-v-0e24a4fa><b data-v-0e24a4fa><em style="font-size:17px;color:red;" data-v-0e24a4fa>新增时光相册2015年-2024年(可评论)，新增在线投稿弹幕</em></b></div></div><div class="card" style="line-height:30px;margin-top:8px;" data-v-0e24a4fa><p data-v-0e24a4fa>你好 <br data-v-0e24a4fa> 这是一个收集6657烂梗的网站: <span class="dgq63136" data-v-0e24a4fa><a href="https://sb6657.cn" style="color:red;" data-v-0e24a4fa>sb6657.cn </a></span>尽情欣赏你们的烂梗吧。 <br data-v-0e24a4fa></p></div>',2),ve={class:"card",style:{"line-height":"0px","margin-top":"8px"}},ye={key:1},xe=p(()=>a("p",null,"《未选择随机项》----出错啦，请手动刷新",-1)),we=[xe],ke={class:"card",style:{"line-height":"45px","margin-top":"10px","margin-bottom":"10px","min-height":"80px"}},Se=p(()=>a("span",{style:{position:"absolute","font-size":"22px","margin-top":"-20px",color:"blue"}}," --------搜索在这，🦐吗--------- ",-1)),De={class:"card",style:{"margin-top":"8px","text-align":"center"}},Ve=p(()=>a("p",null,"这里是投稿烂梗，上面才是搜索",-1)),Ie=p(()=>a("div",{class:"card",style:{"line-height":"30px","margin-top":"10px"}},[c(" 友情链接 "),a("a",{href:"https://dgq63136.icu",target:"_blank"},"dgq63136.icu")],-1)),Ee=p(()=>a("div",{class:"footer"},null,-1)),Ce={class:"el-footer"},Te={style:{"font-size":"11px"}},Me=p(()=>a("text",null,[c(" 域名所有："),a("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何")],-1)),Ue={__name:"Home",setup(m){(()=>{h.get("https://api.vvhan.com/api/visitor.info").then(e=>{const o=e;localStorage.setItem("ip",e.ip),b({icon:ge,dangerouslyUseHTMLString:!0,title:"你好",message:"<p>欢迎来自<b>"+o.location+"</b>的朋友<br/>"+o.system+" "+o.browser+" <br>IP: "+o.ip+"</p>",offset:50,duration:5e3})})})();const g=i(""),f=i(null),B=new Date("2041-06-07"),q=i(0),z=new Date("2024-10-23"),Q=i(0),N=new Date("2025-02-20"),y=i(0),P={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入烂梗",trigger:"blur"}]},F=()=>{l.table===""||l.barrage===""?b.error("请选择分栏或输入烂梗"):h.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:l.table,barrage:l.barrage}).then(e=>{w(),l.dialogFormVisible=!1,l.barrage="",e.code==="200"?b.success("投稿成功，待审核(一天内)"):b.error("请求失败")})},l=ae({tableData:[],table:"",barrage:""});var x=i("请稍等！或者请手动刷新页面,搜索不可能是空的");const w=()=>{h.get("/machine/allBarrage/Page",{}).then(e=>{l.tableData=e.data||[],k(),x=i("搜索烂梗...")}).catch(e=>{console.error("加载数据失败:",e)})};w();const k=()=>{if(l.tableData.length>0){const e=Math.floor(Math.random()*l.tableData.length);f.value=l.tableData[e]}},H=oe(()=>{var o;const e=(o=g.value)==null?void 0:o.toLowerCase();return e?l.tableData.filter(n=>`${n.name}${n.barrage}${n.description}`.toLowerCase().includes(e)):[]}),L=()=>{C({message:"复制成功",type:"success"})},$=()=>{C({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})},S=e=>{navigator.clipboard.writeText(e.barrage).then(()=>{L(),console.log("内容已复制到剪贴板"),h.post("/machine/addCnt",{ip:localStorage.getItem("ip"),table:"allbarrage",id:e.id})}).catch(o=>{console.error("复制失败:",o),$()})},D=()=>{const e=new Date,o=B-e,n=z-e,r=N-e;q.value=Math.ceil(o/(1e3*60*60*24)),Q.value=Math.ceil(n/(1e3*60*60*24)),y.value=Math.ceil(r/(1e3*60*60*24))};return le(()=>{D(),setInterval(D,1e3*60*60*24)}),(e,o)=>{const n=W,r=Z,V=O,I=G,d=A,J=X,E=Y,R=K,j=ee;return _(),v(ie,null,[be,a("div",he,[fe,a("div",ve,[a("div",null,[t(n,{type:"primary",onClick:k},{default:s(()=>[c("点我随机一条弹幕")]),_:1}),f.value?(_(),T(V,{key:0,data:[f.value],style:{"font-family":"微软雅黑","font-size":"20px"},"header-cell-style":{fontSize:"14px",whitespace:"normal !important"},onRowClick:S},{default:s(()=>[t(r,{prop:"barrage",label:"弹幕"}),t(r,{label:"",align:"center",width:"85"},{default:s(()=>[a("template",null,[t(n,{type:"primary"},{default:s(()=>[c("复制")]),_:1})])]),_:1})]),_:1},8,["data"])):(_(),v("div",ye,we))])]),a("div",ke,[a("div",null,[Se,t(I,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=u=>g.value=u),placeholder:se(x),style:{"background-color":"yellow","font-size":"30px","margin-top":"30px"}},null,8,["modelValue","placeholder"]),g.value?(_(),T(V,{key:0,data:H.value,stripe:"",onRowClick:S,style:{"font-size":"19px"},"empty-text":"可能没有这条烂梗或请手动刷新页面"},{default:s(()=>[t(r,{prop:"barrage",label:"弹幕"}),t(r,{label:"",align:"center",width:"85"},{default:s(()=>[a("template",null,[t(n,{type:"primary"},{default:s(()=>[c("复制")]),_:1})])]),_:1})]),_:1},8,["data","onRowClick"])):ne("",!0)])]),a("div",De,[a("div",null,[Ve,t(R,{model:l,"label-width":"100px",rules:P,"label-position":"right"},{default:s(()=>[t(E,{label:"分栏","label-width":e.auto,prop:"table"},{default:s(()=>[t(J,{modelValue:l.table,"onUpdate:modelValue":o[1]||(o[1]=u=>l.table=u),placeholder:"选择上传的分栏"},{default:s(()=>[t(d,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(d,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(d,{label:"喷选手篇",value:"machine_penPlayer"}),t(d,{label:"+1",value:"machine_p1"}),t(d,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(d,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(E,{label:"烂梗内容",prop:"barrage"},{default:s(()=>[t(I,{maxlength:"255",modelValue:l.barrage,"onUpdate:modelValue":o[2]||(o[2]=u=>l.barrage=u),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(n,{type:"primary",onClick:F,style:{"font-size":"20px"}},{default:s(()=>[c(" 投稿 ")]),_:1})]),_:1},8,["model"])]),t(j,{right:50,bottom:50})]),Ie,Ee]),a("div",Ce,[c(" 基于腾讯云服务器搭建"),a("text",Te,"(离服务器到期还有"+re(y.value)+"天)",1),Me])],64)}}},Ze=M(Ue,[["__scopeId","data-v-0e24a4fa"]]);export{Ze as default};
