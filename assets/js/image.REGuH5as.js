import{m as c,f as B,j as N,a as L,h as U,p as $,q,o as S}from"./element-plus.DVYLd97e.js";import{_ as A,h as x}from"./index.F9OtT_dP.js";import{X as H,c as m,a as l,O as _,a4 as C,P as n,H as a,o as r,L as u,M as p,K as M}from"./@vue.BkZGu_Ap.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@element-plus.imH8POSc.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";import"./vue-router.CJ_8Ucol.js";import"./fireworks-js.1hhxDOOS.js";const T={class:"image-list"},j={style:{"text-align":"center",padding:"0 0 5px 0"}},K={key:0,class:"comment-list"},P={class:"comment-content"},X={class:"comment-content"},G={class:"comment-date"},J={class:"dialog-footer"},Q={__name:"image",setup(R){(()=>{c({type:"success",dangerouslyUseHTMLString:!0,title:"照片可以评论喔",offset:100,duration:1500})})();const t=H({outerImg:[],id:"",imageId:"",Commentname:"",douyuId:"",dialogFormVisible:!1}),f=()=>{x.get("/machine/showImage",{}).then(o=>{t.outerImg=o.data||[]}).catch(o=>{console.error("加载数据失败:",o)})};f();const I=o=>{o.showComments=!o.showComments},b=o=>new Date(o).toLocaleString(),V={douyuId:[{required:!0,message:"请输入你的斗鱼ID",trigger:"blur"}],Commentname:[{required:!0,message:"请输入评论",trigger:"blur"}]},k=o=>{console.log(o),t.imageId=o.id,c({title:"温馨提醒",message:"请注意你的行为，不要上传违反法律的内容，后台能监控到你",type:"warning"}),t.douyuID="",t.Commentname="",t.dialogFormVisible=!0},v=o=>{console.log(o),o.douyuID===""||o.Commentname===""?c.error("请输入斗鱼id或输入评论"):x.post("/machine/addCommentname",{id:"",imageId:t.imageId,douyuID:o.douyuID,createdAt:"",commentname:o.Commentname}).then(e=>{f(),c.success("评论成功"),t.dialogFormVisible=!1}).catch(e=>{console.error("加载数据失败:",e)})};return(o,e)=>{const w=N,i=L,g=U,y=$,h=q,D=B,z=S;return r(),m(_,null,[e[8]||(e[8]=l("div",{class:"outer"},[l("span",null,"时光相册"),l("span",{style:{"font-size":"16px"}},"(点击放大图片)"),l("em",{style:{"font-size":"14px"}},"如侵权，请右上角联系删除")],-1)),l("div",T,[(r(!0),m(_,null,C(t.outerImg,(s,E)=>(r(),m("div",{key:E,class:"image-block"},[n(w,{"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"hide-on-click-modal":!0,src:s.url,"preview-src-list":[s.url],fit:"cover",lazy:"",style:{width:"250px",height:"300px"}},null,8,["src","preview-src-list"]),l("div",j,[n(i,{style:{width:"230px","font-size":"16px","white-space":"normal","word-break":"break-word"}},{default:a(()=>[u(p(s.date),1)]),_:2},1024)]),n(i,{onClick:d=>I(s),style:{"font-size":"18px","margin-left":"15px","box-sizing":"border-box"}},{default:a(()=>[u(p(s.showComments?"隐藏评论":"显示评论"),1)]),_:2},1032,["onClick"]),s.showComments?(r(),m("div",K,[(r(!0),m(_,null,C(s.comments,(d,F)=>(r(),m("div",{key:F,class:"comment-item"},[l("span",P,p(d.douyuID)+" :",1),l("span",X,p(d.commentname),1),l("span",G,p(b(d.createdAt)),1)]))),128))])):M("",!0),n(i,{type:"success",plain:"",onClick:d=>k(s),style:{"font-size":"18px","box-sizing":"border-box"}},{default:a(()=>e[5]||(e[5]=[u(" 我要评论 ")])),_:2},1032,["onClick"])]))),128))]),n(D,{modelValue:t.dialogFormVisible,"onUpdate:modelValue":e[4]||(e[4]=s=>t.dialogFormVisible=s),draggable:"",title:"评论"},{footer:a(()=>[l("div",J,[n(i,{onClick:e[2]||(e[2]=s=>t.dialogFormVisible=!1)},{default:a(()=>e[6]||(e[6]=[u("关闭")])),_:1}),n(i,{type:"primary",onClick:e[3]||(e[3]=s=>v(t))},{default:a(()=>e[7]||(e[7]=[u(" 评论并关闭 ")])),_:1})])]),default:a(()=>[n(h,{model:t,"label-width":"100px",rules:V,"label-position":"right"},{default:a(()=>[n(y,{label:"你的斗鱼id",prop:"douyuID"},{default:a(()=>[n(g,{modelValue:t.douyuID,"onUpdate:modelValue":e[0]||(e[0]=s=>t.douyuID=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),n(y,{label:"评论内容",prop:"Commentname"},{default:a(()=>[n(g,{modelValue:t.Commentname,"onUpdate:modelValue":e[1]||(e[1]=s=>t.Commentname=s),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),n(z,{right:20,bottom:50})],64)}}},ce=A(Q,[["__scopeId","data-v-eb34237e"]]);export{ce as default};
