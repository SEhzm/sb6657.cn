import{d as p,r as a,o as f,c as g,b as y,Q as x,a as X,k as Y}from"./index-582ac752.js";const k=X("span",{style:{display:"block","text-align":"center","font-size":"20px"}},"实时直播流",-1),B=p({__name:"test2",setup(E){const e=a(74),t=a(200),n=a(!1),r=o=>{const l=o.clientX,s=o.clientY,d=e.value,v=t.value;n.value=!0;const c=u=>{if(n.value){const m=u.clientX-l,_=u.clientY-s;e.value=d+m/19.2,t.value=v+_}},i=()=>{n.value=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",i)};return(o,l)=>{const s=Y("videoPlay");return f(),g("div",{class:"video",style:x({left:`${e.value}vw`,top:`${t.value}px`}),onMousedown:r},[k,y(s)],36)}}});export{B as default};
