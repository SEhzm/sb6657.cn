import{ai as h,o as u,c as f,V as y,aw as L,r as _,j as O,A as I,a as v,F as R,a8 as A,at as S}from"./@vue.7a8f7aed.js";import{c as M,a as V}from"./vue-router.e9f6b670.js";import{i as k,z as w}from"./element-plus.528b82f3.js";import{Q as T}from"./@element-plus.b9e6ff10.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=(s,r)=>{const n=s.__vccOpts||s;for(const[c,e]of r)n[c]=e;return n},$={};function x(s,r){const n=h("footerd"),c=h("RouterView"),e=h("StarrySky");return u(),f("div",null,[y(n),y(c),y(e,{class:"starrySky"})])}const D=g($,[["render",x]]),B="modulepreload",N=function(s){return"/"+s},b={},a=function(r,n,c){if(!n||n.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=N(t),t in b)return;b[t]=!0;const o=t.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!c)for(let l=e.length-1;l>=0;l--){const p=e[l];if(p.href===t&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":B,o||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),o)return new Promise((l,p)=>{i.addEventListener("load",l),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},Q="/assets/svg/404.1fc18737.svg",C="/assets/svg/meteor.3cf50ecf.svg",H="/assets/svg/astronaut.320bb79d.svg",U="/assets/svg/spaceship.3705c409.svg";const W={},j={class:"body"},F=L('<div class="mars" data-v-edaa695b></div><img src="'+Q+'" class="logo-404" data-v-edaa695b><img src="'+C+'" class="meteor" data-v-edaa695b><p class="title" data-v-edaa695b>Oh no!!</p><p class="subtitle" data-v-edaa695b> 页面未找到<br data-v-edaa695b></p><div align="center" data-v-edaa695b><a class="btn-back" href="/" data-v-edaa695b>返回首页</a></div><img src="'+H+'" class="astronaut" data-v-edaa695b><img src="'+U+'" class="spaceship" data-v-edaa695b>',8),z=[F];function q(s,r){return u(),f("div",j,z)}const J=g(W,[["render",q],["__scopeId","data-v-edaa695b"]]),Z=M({history:V("/"),mode:"history",routes:[{path:"/",name:"Manager",component:()=>a(()=>import("./Manager.221168db.js"),["assets/js/Manager.221168db.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/favicon.9ef6f040.js","assets/js/vue-router.e9f6b670.js","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/css/Manager.aa2370c9.css"]),redirect:"/home",children:[{path:"home",name:"Home",component:()=>a(()=>import("./Home.803150cb.js"),["assets/js/Home.803150cb.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/favicon.9ef6f040.js","assets/js/vue-router.e9f6b670.js","assets/css/Home.c4d2af82.css"])},{path:"penPlayer",name:"penPlayer",component:()=>a(()=>import("./penPlayer.c956b92a.js"),["assets/js/penPlayer.c956b92a.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/penPlayer.c2b3712e.css"])},{path:"penWJQ",name:"penWJQ",component:()=>a(()=>import("./penWJQ.2d2698e0.js"),["assets/js/penWJQ.2d2698e0.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/penWJQ.4a614433.css"])},{path:"QMLW",name:"QMLW",component:()=>a(()=>import("./QMLW.9df81244.js"),["assets/js/QMLW.9df81244.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/QMLW.f026effb.css"])},{path:"ZbjHuPen",name:"ZbjHuPen",component:()=>a(()=>import("./ZbjHuPen.d0148f08.js"),["assets/js/ZbjHuPen.d0148f08.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/ZbjHuPen.08029a33.css"])},{path:"QUQU",name:"QUQU",component:()=>a(()=>import("./QUQU.7e6ec004.js"),["assets/js/QUQU.7e6ec004.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/QUQU.6b0a9749.css"])},{path:"p1",name:"p1",component:()=>a(()=>import("./p1.55122319.js"),["assets/js/p1.55122319.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/p1.ef1894c2.css"])},{path:"image",name:"image",component:()=>a(()=>import("./image.686caeb0.js"),["assets/js/image.686caeb0.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/image.9ebffcb3.css"])},{path:"AllBarrage",name:"AllBarrage",component:()=>a(()=>import("./AllBarrage.fd8534c5.js"),["assets/js/AllBarrage.fd8534c5.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/request.39193e0d.js","assets/js/axios.28bc18a3.js","assets/js/vue-router.e9f6b670.js","assets/css/AllBarrage.f6650648.css"])},{path:"test",name:"test",component:()=>a(()=>import("./test.0a064435.js"),["assets/js/test.0a064435.js","assets/js/element-plus.528b82f3.js","assets/js/@vue.7a8f7aed.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css","assets/js/vue-router.e9f6b670.js","assets/css/test.3fe1981d.css"])},{path:"test2",name:"test2",component:()=>a(()=>import("./test2.455b343a.js"),["assets/js/test2.455b343a.js","assets/js/@vue.7a8f7aed.js","assets/js/vue-router.e9f6b670.js","assets/js/element-plus.528b82f3.js","assets/js/lodash-es.2e98bc53.js","assets/js/@vueuse.65cb1fed.js","assets/js/@element-plus.b9e6ff10.js","assets/js/@popperjs.c75af06c.js","assets/js/@ctrl.f8748455.js","assets/js/dayjs.de1d8cda.js","assets/js/async-validator.dee29e8b.js","assets/js/memoize-one.297ddbcb.js","assets/js/normalize-wheel-es.ed76fb12.js","assets/js/@floating-ui.c9ffdb72.js","assets/css/element-plus.dc08a7ba.css"])},{path:"Starrysky",name:"Starrysky",component:()=>a(()=>Promise.resolve().then(()=>te),void 0)}]},{path:"/:catchAll(.*)",name:"NotFound",component:J}]});const K={id:"bg"},X={class:"body",id:"bodyId"},Y=200,G=700,ee={__name:"Starrysky",setup(s){_(74),_(200),_(!0),_(!1);let r=_(null);O(()=>{Array.from(r.value.children).forEach(t=>{let o=.2+Math.random()*1,d=G+Math.random()*300;t.style.transformOrigin=`0 0 ${d}px`,t.style.transform=`
        translate3d(0,0,-${d}px)
        rotateY(${Math.random()*360}deg)
        rotateX(${Math.random()*-50}deg)
        scale(${o},${o})`})});const n=()=>{let e=document.createElement("div");e.classList.add("meteor"),e.style.position="absolute",e.style.height="2px",e.style.background="linear-gradient(to right, #fff, rgba(0, 0, 0, 0))",e.style.width=Math.random()*10+100+"px",e.style.right=Math.random()*window.innerWidth+"px",e.style.top=Math.random()*(window.innerHeight/3)+"px",document.getElementById("bodyId").prepend(e);const t=e.getBoundingClientRect(),o=window.innerHeight/2-t.top+Math.random()*50,d=o/(160+Math.random()*50)*1e3;e.style.animation=`myMeteor ${d}ms linear forwards`;const E=`@keyframes myMeteor {
    0% {
      transform: translate(0, 0) rotate(-30deg); // 初始位置
    }
    90%{
      opacity: .8;
    }
    100% {
      opacity: 0;
      transform: translate(-${o}px, ${o}px) rotate(-30deg); // 终点位置
    }
  }`,i=document.createElement("style");i.innerHTML=E,document.head.appendChild(i),setTimeout(()=>{e.remove()},d)},c=setInterval(()=>{n()},5e3+Math.random()*2e3);return I(()=>{clearInterval(c)}),(e,t)=>(u(),f("div",K,[v("div",X,[v("div",{class:"stars",ref_key:"starsRef",ref:r},[(u(),f(R,null,A(Y,(o,d)=>v("div",{class:"star",key:d})),64))],512)])]))}},P=g(ee,[["__scopeId","data-v-a1904df6"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const m=S(D);m.use(Z);m.use(k,{locale:w});setInterval(()=>{location.reload()},864e5);m.component("StarrySky",P);m.mount("#app");for(const[s,r]of Object.entries(T))m.component(s,r);export{g as _};
