import{h as s,u,d as h,b,e as f,p as k}from"./element-plus.873835ab.js";import{r as v}from"./request.39193e0d.js";import{_ as w}from"./index.f833eb54.js";import{_ as y,j as z,o as C,c as E,V as t,P as c,T as S,ax as x,ay as P,a as B}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";const I=n=>(x("data-v-09701376"),n=n(),P(),n),T={class:"hotlog-ranking"},V=I(()=>B("h2",null,"今日弹幕热榜",-1)),D={__name:"test2",setup(n){const r=y({rankingData:[],currentPage:1,pageSize:10,total:0}),p=(a=1)=>{v.get("/hotlog/ranking",{params:{page:a,pageSize:r.pageSize}}).then(e=>{if(e.data&&e.data.success){const{items:o,total:l}=e.data.data;r.rankingData=o,r.total=l}else s.error("获取弹幕热榜数据失败")}).catch(e=>{console.error("API 请求失败: ",e),s.error("加载数据失败，请稍后重试")})},i=a=>{navigator.clipboard.writeText(a).then(()=>{s.success("弹幕复制成功")}).catch(()=>{s.error("复制失败")})};return z(()=>{p(r.currentPage)}),(a,e)=>{const o=h,l=b,_=f,d=k,m=u;return C(),E("div",T,[t(m,null,{default:c(()=>[V,t(_,{data:r.rankingData,style:{width:"100%"}},{default:c(()=>[t(o,{prop:"rank",label:"排名",width:"80"}),t(o,{prop:"barrage",label:"弹幕",width:"350"}),t(o,{prop:"cnt",label:"复制次数",width:"120"}),t(o,{label:"操作",width:"150"},{default:c(g=>[t(l,{onClick:N=>i(g.row.barrage),type:"primary",size:"small"},{default:c(()=>[S("复制")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(d,{background:"",layout:"prev, pager, next","page-size":a.pageSize,total:a.total,onCurrentChange:p,"current-page":a.currentPage},null,8,["page-size","total","current-page"])]),_:1})])}}},X=w(D,[["__scopeId","data-v-09701376"]]);export{X as default};
