import{c as G,a as H,d as j,e as q,v as P,f as Z,b as $,g as AA,h as eA,j as tA}from"./element-plus.C3kSHAgf.js";import{d as k,ay as O,az as aA,o as h,c as v,U as t,O as a,H as oA,P as sA,M as z,a as A,T as B,S as f,a2 as nA,r as l,f as lA,W as iA,u as V,a9 as rA,ax as dA,F as y,a8 as U,I as uA,ai as mA}from"./@vue.kwc71ESp.js";import{_ as cA}from"./favicon.CJfgpdIL.js";import{c as EA,a as pA,p as gA,t as hA,l as fA,b as vA,g as BA,d as wA,s as CA}from"./setMeme.74SdDev-.js";import{M as bA}from"./@element-plus.CQ2moJ0T.js";import{_ as I,M as T}from"./index.B6qRdoSw.js";import{u as RA,b as xA}from"./vue-router.DkBAQHKx.js";import"./lodash-es.CiJSjksT.js";import"./@vueuse.Bmvu7DnR.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.CdCgAjqw.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";const DA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1xJREFUWEfFl0uMDFEUhv9zp+eWR8LCQiKqeojWVSQSkQhigYVHwkZibCSIMAssiYUEsfBYSohMhAmxQMTCI0YiZkMsSJDQ1Qymq82IRyzGI/qWqUNNjHT31DtE77ruf87/3XPvOdVN+M8fyuJfzmurPPZ0y3E7s8TXx2QCKBmtxwi0E8BDAEdMR13KCpIJwDbkAwDz6kzbs0JkBfgOQKvfNTOtsKq1W2krkRqglM8tIhZ3RxkRnkihlk9/jXdpIFID2Lo8CMLeIBNmPm5V3R3/FiAvH4MxJ8SkH2OVZZbxOSlEqgqUdG05EXdHJidsMCvq/D8BsHXtFIi3xCQ/bzpqw18HKOnaCiK+mSDxJ9NRk3zdC0POKjjqWVRMoiPwEw0B1wG0JQAAe97SnBDvPeAiiHYXK7UbYXGxAKWpuSUkxJ0kxiMaH4CE8E3HgvkDt7TMt/q+9wXliATIYh7cnrhiVdXaVAC+OYS4TsC4NLuP0K43HXWxeT2wAqW2MW3EXjcYM/+SOQC6azq1xYkAyoY8w8CmWHPmHhAtidX9FhB4Y9Fxz9brR1WgpLduIqIzMUk/C0aHB96WCoBxpdh0F0YBlHV5mQmBF2YYirmHPdFh9dee23rrnTQAfrjpqAbPhi8DUzBuMCe/Ruy+TD/U4uIAPvqaLF3CQkyrb8kGgFI+t5BY3AsFIN5iVtzT9euxFWtK5s8I682PnpHHDQB2fsw0sPcqBKDbdNTKoDXbkP64tZJcxkiAx5MxXtPkl5CBsb/oqANhJrYhOQnAkOC5s/vcR4EV8B+WDdnFwMbmZAK0ZqZTuxZlYhvSHzTrwjQM9FqOKkS2oZ3PLQOL281JmksXZPLc0FZ74KthAES8tVhxT0UC+Iu2IS8AaK8XJgF4Oguy5YushRxhV9FRm5vXQl9GtqGdBLjjz1kxby9W3RNRRzA8wj3vdYBm0HTUxBCw8JTPDHlUALuGFcw9ZtVdGgXwIp9bODS6jUO7x88V/3sg37qDmHYD0Jl5s1V1u8IgyoY8xMCe3+sDBHRGdU4igBGzsiH3/arDPsFUKFRrL0Pmgf9XbSIB5zTKdbZVvr2Na83YCjQn8EGEVIcLvWi4bP5zZjx6UlXX2oGhOOPQOZA0sF53fwYmLOjFYJbYn3WiRDAd4qVAAAAAAElFTkSuQmCC",MA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAtFJREFUWEfNl89rE1EQx7+zSTZYqEWsF2k2ttp2403owYvaXgQvioIVPHgVhf4FCvagf0FB0asg1oKgguCpVQ968MdJs7Vam031YkVasTWbZMfuJptutm9/NE2Ie3xvfnx23sy8eYSI35s+dHWWEidN0CkAfQR0A9hdVf/JwBKAeQn86He8+HhoHstRTFOY0Ke0nDHBY8R0noGuMHlrn4BlJr4ngSYGckY2SCcQQEvL18EYA7AzimOBzAoIE2rOuOqn7wugKfIDAGcbdOxVm1J1Y1RkSwigKfJXAPua5Nwxs6DqRq/X5iYATUn8AMhKsBZ8vKTqxT1uw3UAmpJ8AfCRFnh2maSXql446izUAKoJdyXA+V0AT2Ll2Kv+b2uLUSGzPfFhkqTpOnnCDScxbQC71BivA7J9VNWNqahOvXKaIrNnbUUiHLZK1AbQ0ombYLokcsDgoYxefNuoc9v+ZgCA+JaaK14mrRud3CHnCNi1OUPpzqBeuOhen0sl95e4nIoMJNEAgW575Rn4RatGmj72yKclCQ/FNcoXBvWidfb2p6US0yAajuw8RNA0cYY0Rb4P4Jww/JLUm1n4u2Dtfd67I1WKl/VmOa/amaSsIr8j4JDIsKobtSoRZvM2aRh4b0XA+ivhmQYBrJONm6b5PJTBJweqenkL4A+Ajq1GgE1zJLNYmgkF8KuCiuLqfwHQ9CPwRkbYByoRyLckCb3H4wfgJKFvGTZaBfFSTDnwfS1f6x+iTljZnAxsRA0BMM+o+eKI43w2nTzBzE9FyVppRAGt2AsQlvFxiuX784UvbrlZRb62fhONe3VrrdhusT6XkRsgzLlof06RD5aBD0Jd5zKyNv2u4+0AZFPJ40T8zAe8/jquRMGegOsGkq00G8eR1bIlSTomCnsNxjuQbGRrG0eyDYg2DqWuum3fWO6CaN/DpAbRzqeZA9HWx6m7hlv1PP8HdfhmLN5uDPYAAAAASUVORK5CYII=",YA="data:image/png;base64,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",VA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEUAAAACAAAEAAAGAAADAAAFAAAKAAAHAAAQAAABAAACAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAAAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAABAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAADAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAD///+W3QZCAAAAqHRSTlMAAAAAAAAAAAAAAQoWHBsBEjt6vtTd1bx8QBUPWMTy9MhcAS6w+Pm1MwJI2d5RAknk5wEy2+jO6f7r0OU1ELP8cJnh0crL0+PmnWsRVfc8BigiFCMqB2LC9kVKEj77aFJGzx6/lwG7eVvtMS/sIRvcJtJEEwu5BAOLCnaW8wXaw6DH/Yg0OZBee7fwHvH6c2XJkjbGFhlPUzjgOp8tK+rWuDUOxR0pzW3NoAbKAAAAAWJLR0SpJw8GBAAAAAd0SU1FB+gCEwk0EkntIW4AAAIlSURBVDjLY2AgATBycfPw8vFw8zNhk2XiFxAUEhYRFRUTl5CUwlDDxCQtIyu3AgrkFRQFmFlQ5JWUVVRXIAE1dQ0uJBVMmlraK9CAjq4e3BomVn2DFRjAUNcIagYLk7HJihWmZuYWMDkLSyvrFStEbZgYIQbY2q1YYe8greFo7eTs4urm7uFpY+sFVC3uzQIxwMcX6HA/Jhb/gMAgW1up4JBQJiYtoJt9w1hBKpgEwoGmRkSi+JwpSg0oqBANVhAD8n9sHKqCeJACuQSgIAuzEMhdiUmoCqSSQaIpqSwMTNxpIHens6KEHAtTRixQOJmbCajWDcjKzEILfKbsHKCwiBRQAa8OkGUQjK4g1x0oLMrHxMCSlw9keRSgKwgwBArn84GsKATFXwK6gqIIoLBVMVBBSSnIvZ5lqI4srwCJJleyMLCwVoGYHjHI3mBhS7AEiVYrAQ1mkqwBsZ0lyxDRW6tfB044+kzgoK5fkdPQ2GTe3CJVzgIynae1LRMcq67FTOAwaVeT7yjoXGHRJQ4KTpbu0h5IxPf2sYOtZRLoXOHbHzJBzX5iOchKTQlowhAWYIIG6yTRFZOnTJ02fQpEw4wesPzMWdAEw8DCMc3QfvacYmlNiIK55iD5eTIMcH8x6U0TtZg3f8FUJoQCJx89pLBjZFjYqbrCKQmuQE18lhJq/LMs6l/svASiYGn+suW2LOh5i4XTdm4oWJClsiWIi4WBagAAZejSV585JrMAAAAASUVORK5CYII=",kA={class:"index"},IA=k({__name:"meme-dialog",props:O({memeArr:{},loading:{type:Boolean},emptyText:{}},{modelValue:{},modelModifiers:{}}),emits:O(["refresh"],["update:modelValue"]),setup(b,{emit:E}){const u=aA(b,"modelValue"),p=E,g=hA(vA,fA,2e3);async function s(n){const m=n.content,c=g(m);if(!(!c||c==="limitedSuccess")){if(EA(),await pA(n.category,n.id)){p("refresh");return}gA()}}return(n,m)=>{const c=G,o=H,w=j,R=q,C=P;return h(),v("div",null,[t(R,{modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=i=>u.value=i),class:"dialog-main"},{header:a(()=>[oA(n.$slots,"default",{},void 0,!0)]),default:a(()=>[sA((h(),z(w,{data:n.memeArr,stripe:"","empty-text":n.emptyText,"cell-class-name":"hover-pointer",onRowClick:s},{default:a(()=>[t(c,{align:"center",width:"60"},{default:a(i=>[A("span",kA,B(i.$index+1),1)]),_:1}),t(c,{prop:"content"},{default:a(i=>[f(B(i.row.content),1)]),_:1}),t(c,{align:"center",width:"100"},{default:a(i=>[t(o,{type:"primary",class:"copy-btn",onClick:nA(x=>s(i.row),["stop"])},{default:a(()=>[f("复制 ("+B(i.row.copyCount)+")",1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","empty-text"])),[[C,n.loading]])]),_:3},8,["modelValue"])])}}}),S=I(IA,[["__scopeId","data-v-b86443b6"]]),QA={class:"header"},KA={class:"header-content"},_A={class:"header-actions"},SA={class:"elinput"},yA={class:"dialog-header"},JA={class:"dialog-header"},Y="我还没有加载完喔~~",FA="https://pic.imgdb.cn/item/66992905d9c307b7e9f0136e.png",OA="https://pic.imgdb.cn/item/66dd952dd9c307b7e9321a73.png",UA=k({__name:"header-bar",setup(b){const E=l(!1),u=l(!1),p=l([]),g=l(!0);async function s(){const r=await BA();r&&(p.value=r,g.value=!1)}function n(){u.value=!0,m.value=!1,g.value=!0,s()}const m=l(!1),c=l([]),o=l(!0);async function w(){const r=await wA();r&&(c.value=r,o.value=!1)}function R(){u.value=!1,m.value=!0,o.value=!0,w()}s();const C=l(0);setInterval(()=>{const r=p.value.length;C.value=(C.value+1)%r},5e3);const i=l(""),x=l(!1),D=l([]),Q=l(!0),K=l(Y);async function _(){Q.value=!0,x.value=!0,K.value=Y;const r=await CA(i.value);if(Q.value=!1,!r){D.value=[];return}if(r==="notfound"){D.value=[],K.value="没有找到搜索结果。想要补充更多烂梗？请去首页投稿！";return}D.value=r}lA(()=>{setTimeout(()=>{E.value=!0},60*60*1e3)});const L=()=>{window.open("https://www.wjx.cn/vm/rQUgnS0.aspx#")};return(r,e)=>{const N=Z,M=H,X=$,J=AA,W=q;return h(),v(y,null,[A("div",QA,[A("div",KA,[e[7]||(e[7]=A("a",{href:"https://www.douyu.com/6657",target:"_blank",class:"logo-link"},[A("img",{src:cA,alt:"大狗头",class:"logo-img"}),A("p",{class:"header-title"},"斗鱼玩机器烂梗收集")],-1)),A("div",_A,[A("img",{src:DA,alt:"热门",class:"hotBarrageImg",onClick:n}),A("div",{onClick:n,class:"hotBarrage"},[t(iA,{name:"fade"},{default:a(()=>{var d,F;return[(h(),v("span",{key:C.value,class:"hotBarrageSpan"},"热门："+B(((F=(d=p.value)==null?void 0:d[C.value])==null?void 0:F.content)||""),1))]}),_:1})]),A("div",SA,[t(X,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d),placeholder:"搜索烂梗",clearable:"",onKeydown:rA(_,["enter"])},{append:a(()=>[t(M,{type:"primary",onClick:_},{default:a(()=>[t(N,null,{default:a(()=>[t(V(bA))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t(M,{type:"primary",onClick:L,class:"complaint-button"},{default:a(()=>e[5]||(e[5]=[A("span",null,[f(" 上传照片 "),A("br"),f(" 建议/提交BUG ")],-1)])),_:1}),e[6]||(e[6]=dA('<a href="https://sb6657.cn/#/Tampermonkey" data-v-3a6ac7a9><img src="https://pic.imgdb.cn/item/6704f830d29ded1a8c738f70.png" alt="gitee" class="icon-img" data-v-3a6ac7a9></a><a href="https://gitee.com/hzming1/sb6657" target="_blank" data-v-3a6ac7a9><img src="'+MA+'" alt="gitee" class="icon-img" data-v-3a6ac7a9></a><a href="https://yuba.douyu.com/feed/2639094748291342931" target="_blank" data-v-3a6ac7a9><img src="'+YA+'" alt="douyu" class="icon-img" data-v-3a6ac7a9></a><a href="https://github.com/SEhzm/sb6657/" target="_blank" data-v-3a6ac7a9><img src="'+VA+'" alt="github" class="icon-img" data-v-3a6ac7a9></a>',4)),t(J,{class:"icon-img-rounded",src:FA,"hide-on-click-modal":!0,"zoom-rate":1.2,"max-scale":7,lazy:"","min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/zfb.jpg"],"initial-index":4,fit:"cover"}),t(J,{class:"icon-img-rounded",src:OA,"hide-on-click-modal":!0,"zoom-rate":1.2,lazy:"","max-scale":7,"min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/wx.jpg"],"initial-index":4,fit:"cover"})])]),t(S,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=d=>u.value=d),memeArr:p.value,loading:g.value,emptyText:Y,onRefresh:s},{default:a(()=>[A("div",yA,[e[9]||(e[9]=A("div",null,"24h热门烂梗",-1)),A("div",null,[t(M,{onClick:R},{default:a(()=>e[8]||(e[8]=[f("查看近七天热门")])),_:1})])])]),_:1},8,["modelValue","memeArr","loading"]),t(S,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=d=>m.value=d),memeArr:c.value,loading:o.value,emptyText:Y,onRefresh:w},{default:a(()=>[A("div",JA,[e[11]||(e[11]=A("div",null,"七天热门烂梗",-1)),A("div",null,[t(M,{onClick:n},{default:a(()=>e[10]||(e[10]=[f("查看近24h热门")])),_:1})])])]),_:1},8,["modelValue","memeArr","loading"]),t(S,{modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=d=>x.value=d),memeArr:D.value,loading:Q.value,emptyText:K.value,onRefresh:_},{default:a(()=>e[12]||(e[12]=[A("div",{class:"search-tips"},"烂梗搜索结果:",-1)])),_:1},8,["modelValue","memeArr","loading","emptyText"])]),t(W,{modelValue:E.value,"onUpdate:modelValue":e[4]||(e[4]=d=>E.value=d),title:"谢谢你",width:"1100"},{default:a(()=>e[13]||(e[13]=[A("img",{src:"http://cdn.dgq63136.icu/zfb.jpg",alt:"",width:"1000"},null,-1)])),_:1},8,["modelValue"])],64)}}}),TA=I(UA,[["__scopeId","data-v-3a6ac7a9"]]),HA={class:"footer"},qA={class:"content"},zA={class:"date-font"},LA=k({__name:"footer-bar",setup(b){const E=l(0),u=new Date("2025-02-20"),p=new Date;return E.value=Math.ceil((u.getTime()-p.getTime())/(1e3*3600*24)),(g,s)=>(h(),v("div",HA,[A("div",qA,[A("div",zA,[s[0]||(s[0]=f("距服务器到期还有")),A("span",null,B(E.value),1),s[1]||(s[1]=f("天"))]),s[2]||(s[2]=A("div",null,[f("基于腾讯云服务器搭建 域名所有: "),A("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何")],-1))])]))}}),NA=I(LA,[["__scopeId","data-v-0866cd39"]]),XA={class:"tab"},WA={class:"tab-container"},GA=["onClick"],jA={class:"main-content"},PA={class:"sidebar"},ZA={class:"sidebar-icon"},$A=["src"],Ae={class:"content"},ee=k({__name:"MainLayout",setup(b){const E=RA(),u=xA();function p(g){u.push(g)}return(g,s)=>{const n=eA,m=tA,c=mA("router-view");return h(),v("div",null,[t(TA),A("div",XA,[A("div",WA,[(h(!0),v(y,null,U(V(T),(o,w)=>(h(),v("div",{class:uA(`tab1 ${o.path===V(E).path?"selected":"none"}`),key:o.path,onClick:R=>p(o.path)},B(o.text),11,GA))),128))])]),A("div",jA,[A("div",PA,[t(m,{router:"",class:"sidebar-el-menu","default-active":g.$route.path},{default:a(()=>[(h(!0),v(y,null,U(V(T),(o,w)=>(h(),z(n,{key:o.path,index:o.path},{default:a(()=>[A("div",ZA,[A("img",{src:o.icon,alt:""},null,8,$A)]),A("span",null,B(o.text),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])]),A("div",Ae,[t(c)])]),t(NA)])}}}),ve=I(ee,[["__scopeId","data-v-f6feb3b5"]]);export{ve as default};
