import{k as _,f as B,c as N,b as U,a as $,o as q,l as L,p as T}from"./element-plus.ef563b8d.js";import{r as x}from"./request.39193e0d.js";import{_ as A}from"./index.4f1bdea9.js";import{_ as H,o as m,c as r,a,F as g,a8 as I,V as n,P as l,T as c,U as u,S as M,ax as P,ay as j}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const G=p=>(P("data-v-1751c3bd"),p=p(),j(),p),J=G(()=>a("div",{class:"outer"},[a("span",null,"时光相册"),a("span",{style:{"font-size":"16px"}},"(点击放大图片)"),a("em",{style:{"font-size":"14px"}},"如侵权，请右上角联系删除")],-1)),K={class:"image-list"},Q={style:{"text-align":"center",padding:"5%"}},R={key:0,class:"comment-list"},W={class:"comment-content"},X={class:"comment-content"},Y={class:"comment-date"},Z={class:"dialog-footer"},O={__name:"image",setup(p){(()=>{_({type:"success",dangerouslyUseHTMLString:!0,title:"照片可以评论喔",offset:50,duration:5e3})})();const o=H({outerImg:[],id:"",imageId:"",Commentname:"",douyuId:"",dialogFormVisible:!1}),f=()=>{x.get("/machine/showImage",{}).then(e=>{o.outerImg=e.data||[]}).catch(e=>{console.error("加载数据失败:",e)})};f();const C=e=>{e.showComments=!e.showComments},h=e=>new Date(e).toLocaleString(),v={douyuId:[{required:!0,message:"请输入你的斗鱼ID",trigger:"blur"}],Commentname:[{required:!0,message:"请输入评论",trigger:"blur"}]},V=e=>{console.log(e),o.imageId=e.id,_({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),o.douyuID="",o.Commentname="",o.dialogFormVisible=!0},k=e=>{console.log(e),e.douyuID===""||e.Commentname===""?_.error("请输入斗鱼id或输入评论"):x.post("/machine/addCommentname",{id:"",imageId:o.imageId,douyuID:e.douyuID,createdAt:"",commentname:e.Commentname}).then(s=>{f(),_.success("评论成功"),o.dialogFormVisible=!1}).catch(s=>{console.error("加载数据失败:",s)})};return(e,s)=>{const w=N,i=U,y=$,b=q,D=L,z=B,F=T;return m(),r(g,null,[J,a("div",K,[(m(!0),r(g,null,I(o.outerImg,(t,E)=>(m(),r("div",{key:E,class:"image-block"},[n(w,{"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"hide-on-click-modal":!0,src:t.url,"preview-src-list":[t.url],fit:"cover",lazy:"",style:{width:"250px",height:"300px"}},null,8,["src","preview-src-list"]),a("div",Q,[n(i,{style:{width:"100%","font-size":"19px","box-sizing":"border-box"}},{default:l(()=>[c(u(t.date),1)]),_:2},1024)]),n(i,{onClick:d=>C(t),style:{"font-size":"18px","margin-left":"15px","box-sizing":"border-box"}},{default:l(()=>[c(u(t.showComments?"隐藏评论":"显示评论"),1)]),_:2},1032,["onClick"]),t.showComments?(m(),r("div",R,[(m(!0),r(g,null,I(t.comments,(d,S)=>(m(),r("div",{key:S,class:"comment-item"},[a("span",W,u(d.douyuID)+" :",1),a("span",X,u(d.commentname),1),a("span",Y,u(h(d.createdAt)),1)]))),128))])):M("",!0),n(i,{type:"success",plain:"",onClick:d=>V(t),style:{"font-size":"18px","box-sizing":"border-box"}},{default:l(()=>[c(" 新增评论 ")]),_:2},1032,["onClick"])]))),128))]),n(z,{modelValue:o.dialogFormVisible,"onUpdate:modelValue":s[4]||(s[4]=t=>o.dialogFormVisible=t),draggable:"",title:"评论"},{footer:l(()=>[a("div",Z,[n(i,{onClick:s[2]||(s[2]=t=>o.dialogFormVisible=!1)},{default:l(()=>[c("关闭")]),_:1}),n(i,{type:"primary",onClick:s[3]||(s[3]=t=>k(o))},{default:l(()=>[c(" 评论并关闭 ")]),_:1})])]),default:l(()=>[n(D,{model:o,"label-width":"100px",rules:v,"label-position":"right"},{default:l(()=>[n(b,{label:"你的斗鱼id",prop:"douyuID"},{default:l(()=>[n(y,{modelValue:o.douyuID,"onUpdate:modelValue":s[0]||(s[0]=t=>o.douyuID=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(b,{label:"评论内容",prop:"Commentname"},{default:l(()=>[n(y,{modelValue:o.Commentname,"onUpdate:modelValue":s[1]||(s[1]=t=>o.Commentname=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),n(F,{right:50,bottom:50})],64)}}},ye=A(O,[["__scopeId","data-v-1751c3bd"]]);export{ye as default};
