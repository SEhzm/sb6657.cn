/* empty css              *//* empty css            */import{_ as k,o as i,b as r,f as V,w as p,Q as _,C as u,R as b,S as C,p as x,e as s,T as R,g as m,F as y,i as v,t as h,n as q,U as I,H as E,I as B,V as H}from"./index-d60d3345.js";const U={data(){return{visible:!1,isMouseOver:!1,search:"",tipsWord:"",historySearch:[{name:"标签一66666",type:"info"},{name:"标签二无敌无敌",type:"info"},{name:"标签三66",type:"info"},{name:"标签四1",type:"info"},{name:"标签四2",type:"info"},{name:"标签四3",type:"info"},{name:"标签四4",type:"info"},{name:"标签五",type:"danger"}],items:["重生之我是都市霸主","热搜","热搜重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主重生之我是都市霸主","热搜","热搜","热搜","热搜","热搜","热搜","热搜"]}},methods:{handleSearch(a){this.search=a,this.searchRequest()},clearHistory(){this.historySearch=[]},searchRequest(){const a={word:this.search||this.tipsWord},t=new URLSearchParams(a).toString(),d=`${window.location.origin}/video/search?${t}`;window.open(d,"_blank")}},mounted(){this.tipsWord=this.items[0]}},c=a=>(E("data-v-5de34a30"),a=a(),B(),a),W={class:"search-item"},z={class:"search-content"},D={class:"search-his"},K=c(()=>s("span",{class:"title"},"搜索历史",-1)),N=c(()=>s("i",{class:"el-icon-circle-close"},null,-1)),P=c(()=>s("span",{class:"title"},"热门搜索",-1)),T={class:"hot-list"},F={key:0,class:"top"},L=c(()=>s("i",{class:"iconvs vs-hot"},null,-1)),M=[L],O={key:1},Q=["onClick"];function j(a,t,d,A,o,n){const f=I,S=C,g=x,w=H;return i(),r("div",W,[V(S,{placement:"bottom",width:"475",ref:"popover",trigger:"focus","visible-arrow":!1,style:{"padding-top":"0"},modelValue:o.visible,"onUpdate:modelValue":t[1]||(t[1]=e=>o.visible=e)},{default:p(()=>[s("div",z,[_(s("div",D,[s("div",null,[K,s("span",{class:"clear",onClick:t[0]||(t[0]=(...e)=>n.clearHistory&&n.clearHistory(...e))},[N,m("清空")])]),(i(!0),r(y,null,v(o.historySearch,e=>(i(),u(f,{key:e.name,size:"small",closable:"",style:{"margin-right":"10px","margin-top":"10px",cursor:"pointer"},onClick:l=>n.handleSearch(e.name),type:e.type},{default:p(()=>[m(h(e.name),1)]),_:2},1032,["onClick","type"]))),128))],512),[[R,o.historySearch.length>0]]),s("div",{class:q("search-hot "+(o.historySearch.length>0?"mt":""))},[P,s("ul",T,[(i(!0),r(y,null,v(o.items,(e,l)=>(i(),r("li",{key:l,class:"hot-item"},[l<3?(i(),r("span",F,M)):(i(),r("span",O,h(l+1),1)),s("span",{onClick:G=>n.handleSearch(e)},h(e),9,Q)]))),128))])],2)])]),_:1},8,["modelValue"]),_((i(),u(g,{size:"medium",placeholder:o.tipsWord,style:{width:"500px"},clearable:"",onKeyup:b(n.searchRequest,["enter","native"]),modelValue:o.search,"onUpdate:modelValue":t[3]||(t[3]=e=>o.search=e)},{default:p(()=>[s("i",{slot:"suffix",class:"el-input__icon el-icon-search",style:{cursor:"pointer"},onClick:t[2]||(t[2]=(...e)=>n.searchRequest&&n.searchRequest(...e))})]),_:1},8,["placeholder","onKeyup","modelValue"])),[[w,void 0,"popover"]])])}const Z=k(U,[["render",j],["__scopeId","data-v-5de34a30"]]);export{Z as default};
