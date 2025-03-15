import{n as f,a as ye,b as he,f as be,g as _e,h as xe,v as Ce,o as ee,E as we,d as ke,e as Te,p as Se}from"./element-plus.D9mqIkVA.js";import{o as i,c as m,r as p,f as Ee,X as Ie,a as o,L as d,P as l,H as n,I as te,G as P,u as oe,a5 as De,K as z,O as B,a4 as F,M as E,V as Me,ag as W}from"./@vue.BkZGu_Ap.js";import{_ as A,h as g,A as le,C as Ue}from"./index.CQK2Br2e.js";import{M as Ve}from"./@element-plus.imH8POSc.js";import{_ as Be}from"./favicon.CJfgpdIL.js";import{f as Re,c as $e,t as Pe,l as ze,a as Fe}from"./like-num.vue_vue_type_style_index_0_scoped_e71cc133_lang.xLOzSUnA.js";import{i as Oe}from"./echarts.CQAimccO.js";import"./echarts-wordcloud.DVMGN1VD.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.CJ_8Ucol.js";import"./zrender.C4y2rr7x.js";import"./tslib.BDyQ-Jie.js";const Le={},Ne={src:Be,alt:"",style:{width:"30px"}};function We(H,R){return i(),m("img",Ne)}const Ae=A(Le,[["render",We]]),He={__name:"wordCloud",setup(H,{expose:R}){const v=p(null),w=[];Ee(()=>{I()});function I(){g.get("/machine/WordCloud").then(k=>{w.value=k,y()}).catch(k=>{console.error(k)})}function y(){v.value&&Oe(v.value,"macarons").setOption({tooltip:{show:!0,borderColor:"#fe9a8bb3",borderWidth:1,padding:[5,5,5,5],confine:!0,backgroundColor:"rgba(255, 255, 255, .9)",textStyle:{color:"hotpink",lineHeight:16},extraCssText:"box-shadow: 0 4px 20px -4px rgba(199, 206, 215, 1);border-radius: 4px;"},series:[{type:"wordCloud",shape:"pentagon",left:"center",top:"center",width:"100%",height:"100%",right:null,bottom:null,sizeRange:[16,30],rotationRange:[-20,20],rotationStep:25,gridSize:15,drawOutOfBound:!1,layoutAnimation:!0,textStyle:{fontFamily:"PingFangSC-Semibold",fontWeight:600,color:function(D){return["#0d3555","#58D5FF","#0093c4","#0d3555","#0093c4","#0d3555","#73DDFF","#58D5FF","#ff0000","#00ff00","#ff0000","#00ff00","#1a721a","#1a721a","#1a721a"][parseInt(Math.random()*15)]}},emphasis:{focus:"none"},data:w.value}]})}return R({getData:I}),(k,D)=>(i(),m("div",{ref_key:"wordCloud",ref:v,style:{height:"270px",width:"300px"}},null,512))}},je=A(He,[["__scopeId","data-v-c5985664"]]),Qe={class:"home"},qe={class:"card third-card"},Ke=["onTouchstart","onTouchend"],Xe={class:"barrage-text"},Ye={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},Ge=["src"],Je={style:{"vertical-align":"middle"}},Ze={class:"card fourth-card"},et={style:{cursor:"pointer"}},tt={class:"barrage-text"},ot={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},lt=["src"],nt={style:{"vertical-align":"middle"}},rt={class:"card fifth-card"},at={class:"preset-tags-container"},st={class:"preset-tags"},it=["src"],dt={style:{"vertical-align":"middle"}},ut={class:"added-tags"},ct={class:"wordCloudDiv"},pt={style:{"background-color":"white","border-radius":"25px",padding:"5px"}},mt="custom-popover",ft={__name:"Home",setup(H){const R=()=>{const t=document.getElementById("diaocha");t?t.click():console.error('Element with id "diaocha" not found')},v=p(!0),w=p(!1),I=p("数据为空"),y=Ie({getRandOne:[],filteredItems:[],tableData:[],table:"",barrage:""});(()=>{sessionStorage.getItem("firstOpening")||g.get("https://api.vvhan.com/api/visitor.info").then(t=>{const e=t;localStorage.setItem("ip",t.ip),f({icon:Ae,dangerouslyUseHTMLString:!0,title:"你好",message:`
            <p>
                欢迎来自<b>${e.location||"地球"}</b>的朋友<br/>  
                ${e.system||"外星操作系统"} ${e.browser||"牛逼浏览器"}<br/>
                IP: ${e.ip||"地球"}
            </p>
            `,offset:50,customClass:"myClass",duration:1e3}),sessionStorage.setItem("firstOpening",1)})})();const D=p([]),j=()=>{g.get("/machine/dictList").then(t=>{t.code==="200"&&(D.value=t.data,M.value=t.data.map(e=>({iconUrl:e.iconUrl,label:e.dictLabel,value:e.dictValue})))}).catch(t=>{console.error("获取字典数据失败",t)})},Q=t=>{if(!t||t.trim()==="")return[];const e=Array.from(new Set(t.split(",").map(a=>a.trim())));if(!D.value)return e.map(()=>({label:"",iconUrl:""}));const s=new Map(D.value.map(a=>[String(a.dictValue).trim(),a]));return e.map(a=>{const c=s.get(a);return c?{label:c.dictLabel,iconUrl:c.iconUrl}:{label:"",iconUrl:""}})};j();const T=p(""),S=p(""),M=p([]),U=p([]),h=p([]),q=t=>{U.value=U.value.filter(e=>e.value!==t.value),h.value=h.value.filter(e=>e!==t.value),M.value.push(t)},K=t=>{if(h.value.length>=5){f.info("最多5个标签");return}U.value.some(e=>e.value===t.value)||(U.value.push(t),h.value.push(t.value),M.value=M.value.filter(e=>e.value!==t.value))},ne=()=>{if(h.value.length===0||S.value===""||S.value===null)f.error("请选择标签或输入弹幕");else{if(h.value.length>5){f.error("最少一个标签，最多五个标签。");return}g.post(le.SUBMIT_MEME,{tags:h.value.join(","),barrage:S.value}).then(t=>{S.value="",t.code==="200"?f.success("投稿成功，待审核(一天内)"):t.code==="500"?f.error("烂梗已经有了，勿重复提交"):f.error("请求失败")}).catch(t=>{console.error("投稿失败",t),f.error("请求失败")})}},O=()=>{console.log(T.value),(T==null||T.value=="")&&(I.value="请输入搜索词..."),g.post("/machine/Query",{barrage:T.value}).then(t=>{w.value=!0,v.value=!1,y.filteredItems=t.data||[]})};var re=p("搜索烂梗...");const X=()=>{g.get("/machine/getRandOne").then(t=>{y.tableData=[t.data],v.value=!1}).catch(t=>{console.error("随机失败")})};X();const ae=()=>{ee({message:"复制成功",type:"success"})},se=()=>{ee({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let L=0,V=null,$=0;const Y=t=>{const e=new Date().getTime(),s={x:event.clientX,y:event.clientY};if(V&&V.x===s.x&&V.y===s.y?($++,console.log($),$>4&&we.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):$=0,e-L<1500){f({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const c=t.barrage;let _=document.createElement("input");_.value=c,document.body.appendChild(_),_.select();try{document.execCommand("Copy")}catch(x){f({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",x)}document.body.removeChild(_),L=e,V=s;return}V=s,L=e;const b=t.barrage;let a=document.createElement("input");a.value=b,document.body.appendChild(a),a.select();try{document.execCommand("Copy"),ae(),console.log("内容已复制到剪贴板"),g.get(`/machine/addCnt/${t.id}`).then(()=>{})}catch(c){f({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",c),se()}document.body.removeChild(a)},ie=()=>{y.filteredItems=[],w.value=!1},de=t=>{t.touchStartTime=Date.now()},ue=t=>{Date.now()-t.touchStartTime>200&&(t.popoverVisible=!0,setTimeout(()=>{t.popoverVisible=!1},1500))},ce=Pe(Fe,ze,2e3);async function pe(t){const e=t.barrage,s=ce(e);!s||s==="limitedSuccess"||(g.get(le.INCREASE_COPY_COUNT+"/"+t.id),$e(),O())}const N=p(null);function me(){N.value&&N.value.getData()}return(t,e)=>{const s=ye,b=ke,a=he,c=Te,_=be,x=_e,G=xe,J=W("Warning"),fe=W("QuestionFilled"),ve=Se,ge=W("Refresh"),Z=Ce;return i(),m(B,null,[e[24]||(e[24]=o("div",{class:"boomouder"},[o("img",{src:"https://gcore.jsdelivr.net/gh/9WiSHao/AnythingStorage/img/6657boom.webp",alt:"6657boom",class:"boom6657"})],-1)),o("div",Qe,[e[22]||(e[22]=o("div",{class:"card first-card"},[o("div",null,[o("b",null,[o("p",{class:"announcement"}," 新增时光相册(可评论)，新增在线投稿弹幕。玩神照片可以在上方上传照片上传至相册 ")])])],-1)),o("div",{class:"card second-card"},[o("p",null,[e[4]||(e[4]=d(" 这是一个收集6657烂梗的网站: ")),e[5]||(e[5]=o("span",{class:"dgq63136"},[o("a",{href:"https://sb6657.cn"},"sb6657.cn")],-1)),e[6]||(e[6]=d(" 尽情欣赏你们的烂梗吧。 另寻几位玩神老观众(21级牌子或3000h观看时长)，获得后台审核和记录的资格！！ ")),o("b",null,[e[3]||(e[3]=d("锐意创新：")),o("span",{style:{color:"blue",cursor:"pointer"},onClick:R},"用户调研")])])]),o("div",qe,[o("div",null,[l(s,{type:"primary",onClick:X},{default:n(()=>e[7]||(e[7]=[d("点我随机一条弹幕")])),_:1}),te((i(),P(_,{data:y.tableData,class:"barrage-table",onRowClick:Y},{default:n(()=>[l(c,{prop:"barrage"},{default:n(r=>[l(a,{placement:"top",width:"auto",trigger:"hover",visible:r.row.popoverVisible},{reference:n(()=>[o("div",{style:{cursor:"pointer"},onTouchstart:u=>de(r.row),onTouchend:u=>ue(r.row)},[o("span",Xe,E(r.row.barrage),1)],40,Ke)]),default:n(()=>[o("div",Ye,[(i(!0),m(B,null,F(Q(r.row.tags),(u,C)=>(i(),m("div",{key:C,style:{"margin-right":"8px"}},[l(b,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:n(()=>[u.iconUrl?(i(),m("img",{key:0,src:u.iconUrl,style:{width:"22px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,Ge)):z("",!0),o("span",Je,E(u.label),1)]),_:2},1024)]))),128))])]),_:2},1032,["visible"])]),_:1}),l(c,{label:"",align:"center",width:"85"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>e[8]||(e[8]=[d("复制")])),_:1})]),_:1})]),_:1},8,["data"])),[[Z,v.value]])])]),o("div",Ze,[o("div",null,[l(G,{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=r=>T.value=r),placeholder:oe(re),onKeydown:De(O,["enter"]),clearable:"",class:"search-input",onInput:ie},{append:n(()=>[l(s,{type:"primary",onClick:O},{default:n(()=>[l(x,null,{default:n(()=>[l(oe(Ve))]),_:1})]),_:1})]),_:1},8,["modelValue","placeholder"]),w.value?te((i(),P(_,{key:0,data:y.filteredItems,stripe:"",onRowClick:Y,"empty-text":I.value,"cell-style":{cursor:"Pointer",fontSize:"large"}},{default:n(()=>[l(c,{prop:"barrage"},{default:n(r=>[l(a,{placement:"top",width:"auto",trigger:"hover","popper-class":mt},{reference:n(()=>[o("div",et,[o("span",tt,E(r.row.barrage),1)])]),default:n(()=>[o("div",ot,[(i(!0),m(B,null,F(Q(r.row.tags),(u,C)=>(i(),m("div",{key:C,style:{"margin-right":"8px"}},[l(b,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:n(()=>[u.iconUrl?(i(),m("img",{key:0,src:u.iconUrl,style:{width:"22px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,lt)):z("",!0),o("span",nt,E(u.label),1)]),_:2},1024)]))),128))])]),_:2},1024)]),_:1}),l(c,{align:"center",width:"100"},{default:n(r=>[l(s,{type:"primary",class:"copy-btn",onClick:Me(u=>pe(r.row),["stop"])},{default:n(()=>[e[9]||(e[9]=d("复制 🎈")),l(Re,{num:r.row.cnt},null,8,["num"])]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","empty-text"])),[[Z,v.value]]):z("",!0)])]),o("div",rt,[o("div",null,[o("span",null,[e[17]||(e[17]=d("可选标签")),l(a,{width:300},{reference:n(()=>[l(x,{size:"16"},{default:n(()=>[l(J)]),_:1})]),default:n(()=>[e[10]||(e[10]=d(" 为解决烂梗分栏不足和分类不清晰问题。")),e[11]||(e[11]=o("br",null,null,-1)),e[12]||(e[12]=o("b",null,"点击标签即可添加",-1))]),_:1}),l(s,{link:"",type:"success",style:{"margin-left":"50%"}},{default:n(()=>[e[16]||(e[16]=d("投稿标签 ")),l(a,{width:300},{reference:n(()=>[l(x,{size:"16"},{default:n(()=>[l(fe)]),_:1})]),default:n(()=>[e[13]||(e[13]=o("b",null,"功能待完善(后续更新将添加)，请在上方(建议/提交)问卷投稿，sry。",-1)),e[14]||(e[14]=o("br",null,null,-1)),e[15]||(e[15]=o("b",null,"审核巨严格，(重复，相似等)将不通过",-1))]),_:1})]),_:1})]),o("div",at,[o("div",st,[(i(!0),m(B,null,F(M.value,(r,u)=>(i(),P(b,{round:"",key:u,closable:"",onClose:C=>K(r),onClick:C=>K(r),style:{padding:"15px",cursor:"pointer","font-size":"16px"},type:"primary"},{default:n(()=>[r.iconUrl?(i(),m("img",{key:0,src:r.iconUrl,style:{width:"22px",height:"22px","object-fit":"cover","vertical-align":"middle"}},null,8,it)):z("",!0),o("span",dt,E(r.label),1)]),_:2},1032,["onClose","onClick"]))),128))])]),o("span",null,[e[19]||(e[19]=d("已选标签 ")),l(a,{width:250},{reference:n(()=>[l(x,{size:"16"},{default:n(()=>[l(J)]),_:1})]),default:n(()=>[e[18]||(e[18]=o("b",null,"最少一个标签，最多五个标签。",-1))]),_:1})]),o("div",ut,[(i(!0),m(B,null,F(U.value,(r,u)=>(i(),P(b,{round:"",key:u,closable:"",onClick:C=>q(r),onClose:C=>q(r),style:{padding:"15px",cursor:"pointer","font-size":"16px"},effect:"dark"},{default:n(()=>[d(E(r.label),1)]),_:2},1032,["onClick","onClose"]))),128))]),l(G,{modelValue:S.value,"onUpdate:modelValue":e[1]||(e[1]=r=>S.value=r),maxlength:"255",autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea",placeholder:" 烂梗...."},null,8,["modelValue"]),l(s,{class:"saveBnt",type:"primary",onClick:ne},{default:n(()=>e[20]||(e[20]=[d("投稿")])),_:1})]),l(ve,{right:50,bottom:50})]),l(Ue,{class:"ChatRoom card"}),e[23]||(e[23]=o("div",{class:"card sixth-card"},[d(" 友情链接 "),o("a",{href:"https://dgq63136.cn",target:"_blank"},"dgq63136.cn"),d("    "),o("a",{href:"https://sb6657.cn/#/Starrysky",target:"_blank"},"星空背景")],-1)),o("div",ct,[o("span",pt,[e[21]||(e[21]=d("搜索词云")),l(x,{size:"20",style:{cursor:"pointer",animation:"rotating 4s linear infinite reverse"},onClick:e[2]||(e[2]=r=>me())},{default:n(()=>[l(ge)]),_:1})]),l(je,{ref_key:"wordCloudRef",ref:N},null,512)])])],64)}}},Pt=A(ft,[["__scopeId","data-v-b9821da2"]]);export{Pt as default};
