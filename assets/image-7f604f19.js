/* empty css               *//* empty css                *//* empty css                */import{r as b}from"./notification-930b51d9.js";/* empty css                     */import{_ as S,q as N,o as m,c as i,a,F as f,e as I,b as n,w as l,z as _,O as q,f as c,t as u,y as L,D as U,G as $,j as A,E as M,B as T,L as j,C as G,M as H}from"./index-bcc6c0de.js";const J=p=>(U("data-v-8039f89f"),p=p(),$(),p),K=J(()=>a("div",{class:"outer"},[a("span",null,"时光相册"),a("span",{style:{"font-size":"16px"}},"(点击放大图片)"),a("em",{style:{"font-size":"14px"}},"如侵权，请右上角联系删除")],-1)),P={class:"image-list"},Q={style:{"text-align":"center",padding:"5%"}},R={key:0,class:"comment-list"},W={class:"comment-content"},X={class:"comment-content"},Y={class:"comment-date"},Z={class:"dialog-footer"},O={__name:"image",setup(p){(()=>{_({type:"success",dangerouslyUseHTMLString:!0,title:"照片可以评论喔",offset:50,duration:1e4})})();const o=N({outerImg:[],id:"",imageId:"",Commentname:"",douyuId:"",dialogFormVisible:!1}),g=()=>{b.get("/machine/showImage",{}).then(e=>{o.outerImg=e.data||[]}).catch(e=>{console.error("加载数据失败:",e)})};g();const C=e=>{e.showComments=!e.showComments},h=e=>new Date(e).toLocaleString(),v={douyuId:[{required:!0,message:"请输入你的斗鱼ID",trigger:"blur"}],Commentname:[{required:!0,message:"请输入评论",trigger:"blur"}]},V=e=>{console.log(e),o.imageId=e.id,_({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),o.douyuID="",o.Commentname="",o.dialogFormVisible=!0},k=e=>{console.log(e),e.douyuID===""||e.Commentname===""?_.error("请输入斗鱼id或输入评论"):b.post("/machine/addCommentname",{id:"",imageId:o.imageId,douyuID:e.douyuID,createdAt:"",commentname:e.Commentname}).then(s=>{g(),_.success("评论成功"),o.dialogFormVisible=!1}).catch(s=>{console.error("加载数据失败:",s)})};return(e,s)=>{const w=A,r=M,y=T,x=j,D=G,z=q,E=H;return m(),i(f,null,[K,a("div",P,[(m(!0),i(f,null,I(o.outerImg,(t,F)=>(m(),i("div",{key:F,class:"image-block"},[n(w,{"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"hide-on-click-modal":!0,src:t.url,"preview-src-list":[t.url],fit:"cover",lazy:"",style:{width:"250px",height:"300px","box-sizing":"border-box"}},null,8,["src","preview-src-list"]),a("div",Q,[n(r,{style:{width:"100%","font-size":"20px","box-sizing":"border-box"}},{default:l(()=>[c(u(t.date),1)]),_:2},1024)]),n(r,{onClick:d=>C(t),style:{"font-size":"18px","margin-left":"15px","box-sizing":"border-box"}},{default:l(()=>[c(u(t.showComments?"隐藏评论":"显示评论"),1)]),_:2},1032,["onClick"]),t.showComments?(m(),i("div",R,[(m(!0),i(f,null,I(t.comments,(d,B)=>(m(),i("div",{key:B,class:"comment-item"},[a("span",W,u(d.douyuID)+" :",1),a("span",X,u(d.commentname),1),a("span",Y,u(h(d.createdAt)),1)]))),128))])):L("",!0),n(r,{type:"success",plain:"",onClick:d=>V(t),style:{"font-size":"18px","box-sizing":"border-box"}},{default:l(()=>[c(" 新增评论 ")]),_:2},1032,["onClick"])]))),128))]),n(z,{modelValue:o.dialogFormVisible,"onUpdate:modelValue":s[4]||(s[4]=t=>o.dialogFormVisible=t),draggable:"",title:"评论"},{footer:l(()=>[a("div",Z,[n(r,{onClick:s[2]||(s[2]=t=>o.dialogFormVisible=!1)},{default:l(()=>[c("关闭")]),_:1}),n(r,{type:"primary",onClick:s[3]||(s[3]=t=>k(o))},{default:l(()=>[c(" 评论并关闭 ")]),_:1})])]),default:l(()=>[n(D,{model:o,"label-width":"100px",rules:v,"label-position":"right"},{default:l(()=>[n(x,{label:"你的斗鱼id",prop:"douyuID"},{default:l(()=>[n(y,{modelValue:o.douyuID,"onUpdate:modelValue":s[0]||(s[0]=t=>o.douyuID=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(x,{label:"评论内容",prop:"Commentname"},{default:l(()=>[n(y,{modelValue:o.Commentname,"onUpdate:modelValue":s[1]||(s[1]=t=>o.Commentname=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),n(E,{right:50,bottom:50})],64)}}},me=S(O,[["__scopeId","data-v-8039f89f"]]);export{me as default};
