/* empty css               *//* empty css                *//* empty css                     *//* empty css                     *//* empty css               */import{r as u}from"./request-5572bcba.js";import{_ as A,o as _,c as h,r as m,q as W,s as j,v as G,a as l,b as e,w as s,x as V,y as K,f as d,t as O,F as R,g as Z,z as g,E as X,A as Y,B as ee,C as te,D as ae,G as oe,H as le,I as se,J as ne,K as C}from"./index-582ac752.js";const re="/sb6657/assets/hello-91265204.png",ie={},ce={src:re,alt:"",style:{width:"40px"}};function de(E,I){return _(),h("img",ce)}const pe=A(ie,[["render",de]]);const me=l("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"},null,-1),_e={class:"home"},ue=Z('<div class="card" style="line-height:30px;margin-top:10px;"><div><b><em style="font-size:17px;color:red;">新增时光相册2015年-2024年(可评论)，新增在线投稿弹幕</em></b></div></div><div class="card" style="line-height:30px;margin-top:8px;"><p>你好 <br> 这是一个收集6657烂梗的网站: <span class="dgq63136"><a href="https://sb6657.cn" style="color:red;">sb6657.cn </a></span>尽情欣赏你们的烂梗吧。 <br></p></div>',2),ge={class:"card",style:{"line-height":"0px","margin-top":"8px"}},be={key:1},he=l("p",null,"未选择随机项",-1),fe=[he],ve={class:"card",style:{"line-height":"45px","margin-top":"10px","margin-bottom":"10px","min-height":"80px"}},xe=l("span",{style:{position:"absolute","font-size":"22px","margin-top":"-20px",color:"blue"}}," --------搜索在这，🦐吗--------- ",-1),ye={class:"card",style:{"margin-top":"8px","text-align":"center"}},we={class:"Addform"},De=l("div",{class:"card",style:{"line-height":"30px","margin-top":"10px"}},[d(" 友情链接 "),l("a",{href:"https://dgq63136.icu"},"dgq63136.icu")],-1),ke={class:"footer"},Se={href:"https://beian.miit.gov.cn/",target:"_blank"},Ve={style:{"font-size":"11px"}},ze={__name:"Home",setup(E){(()=>{u.get("https://api.vvhan.com/api/visitor.info").then(t=>{const o=t;localStorage.setItem("ip",t.ip),g({icon:pe,dangerouslyUseHTMLString:!0,title:"你好",message:"<p>欢迎来自<b>"+o.location+"</b>的厕友<br/>"+o.system+" "+o.browser+" <br>IP: "+o.ip+"</p>",offset:50,duration:1e4})})})();const p=m(""),b=m(null),T=new Date("2041-06-07"),B=m(0),M=new Date("2024-10-23"),U=m(0),z=new Date("2025-02-20"),f=m(0),q={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},Q=()=>{a.table===""||a.barrage===""?g.error("请选择分栏或输入弹幕"):u.post("/machine/addUnaudit",{ip:localStorage.getItem("ip"),table:a.table,barrage:a.barrage}).then(t=>{v(),a.dialogFormVisible=!1,a.barrage="",t.code==="200"?g.success("投稿成功，待审核(一天内)"):g.error("请求失败")})},a=W({tableData:[],table:"",barrage:""}),v=()=>{u.get("/machine/allBarrage/Page",{}).then(t=>{a.tableData=t.data||[],x()}).catch(t=>{console.error("加载数据失败:",t)})};v();const x=()=>{if(a.tableData.length>0){const t=Math.floor(Math.random()*a.tableData.length);b.value=a.tableData[t]}},H=j(()=>p.value?a.tableData.filter(t=>t.barrage.toLowerCase().includes(p.value.toLowerCase())):[]),N=()=>{C({message:"复制成功",type:"success"})},F=()=>{C.error("复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器")},y=t=>{navigator.clipboard.writeText(t.barrage).then(()=>{N(),console.log("内容已复制到剪贴板"),u.post("/machine/addCnt",{ip:localStorage.getItem("ip"),table:"allbarrage",id:t.id})}).catch(o=>{console.error("复制失败:",o),F()})},w=()=>{const t=new Date,o=T-t,r=M-t,i=z-t;B.value=Math.ceil(o/(1e3*60*60*24)),U.value=Math.ceil(r/(1e3*60*60*24)),f.value=Math.ceil(i/(1e3*60*60*24))};return G(()=>{w(),setInterval(w,1e3*60*60*24)}),(t,o)=>{const r=X,i=ae,D=Y,k=ee,c=oe,P=le,S=se,J=te,L=ne;return _(),h(R,null,[me,l("div",_e,[ue,l("div",ge,[l("div",null,[e(r,{type:"primary",onClick:x},{default:s(()=>[d("点我随机一条弹幕")]),_:1}),b.value?(_(),V(D,{key:0,data:[b.value],style:{"font-family":"微软雅黑","font-size":"20px"},"header-cell-style":{fontSize:"14px",whitespace:"normal !important"}},{default:s(()=>[e(i,{prop:"barrage",label:"弹幕"}),e(i,{label:"",align:"center",width:"85"},{default:s(n=>[e(r,{type:"primary",onClick:$=>y(n.row)},{default:s(()=>[d("复制")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])):(_(),h("div",be,fe))])]),l("div",ve,[l("div",null,[xe,e(k,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=n=>p.value=n),placeholder:"搜索弹幕...",style:{"font-size":"30px","margin-top":"30px"}},null,8,["modelValue"]),p.value?(_(),V(D,{key:0,data:H.value,stripe:""},{default:s(()=>[e(i,{prop:"barrage",label:"弹幕"}),e(i,{label:"",align:"center",width:"85"},{default:s(n=>[e(r,{type:"primary",onClick:$=>y(n.row)},{default:s(()=>[d("复制")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])):K("",!0)])]),l("div",ye,[l("div",we,[e(J,{model:a,"label-width":"100px",rules:q,"label-position":"right"},{default:s(()=>[e(S,{label:"分栏","label-width":100,prop:"table"},{default:s(()=>[e(P,{modelValue:a.table,"onUpdate:modelValue":o[1]||(o[1]=n=>a.table=n),placeholder:"选择上传的分栏"},{default:s(()=>[e(c,{label:"喷玩机器篇",value:"machine_penWJQ"}),e(c,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),e(c,{label:"喷选手篇",value:"machine_penPlayer"}),e(c,{label:"+1",value:"machine_p1"}),e(c,{label:"群魔乱舞篇",value:"machine_QMLW"}),e(c,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),e(S,{label:"弹幕内容",prop:"barrage"},{default:s(()=>[e(k,{maxlength:"255",modelValue:a.barrage,"onUpdate:modelValue":o[2]||(o[2]=n=>a.barrage=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(r,{type:"primary",onClick:Q,style:{"font-size":"20px"}},{default:s(()=>[d(" 投稿 ")]),_:1})]),_:1},8,["model"])]),e(L,{right:50,bottom:50})]),De,l("div",ke,[l("a",Se,[d("基于腾讯云服务器搭建"),l("a",Ve,"(离服务器到期还有"+O(f.value)+"天)",1)])])])],64)}}};export{ze as default};
