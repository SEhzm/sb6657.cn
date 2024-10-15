import{E as v,a as ge,b as he,c as fe,d as _e,e as Be,v as ye,f as L,g as W,h as ve,j as xe,k as be,l as Ce}from"./element-plus.ec180c6b.js";import{r as x,_ as we,j as Qe,Z as Ie,ai as E,o as g,c as b,a as t,u as O,S as U,V as e,P as A,X as Re,Q as V,O as M,F as De,a8 as Ye,aw as ke,U as C,T as d,J as Oe,ax as Se,ay as Fe}from"./@vue.7a8f7aed.js";import{_ as Je}from"./favicon.fceddeeb.js";import{u as P,b as Te}from"./vue-router.f6176e51.js";import{r as I}from"./request.39193e0d.js";import{_ as Ke}from"./index.b75128c7.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";const Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1xJREFUWEfFl0uMDFEUhv9zp+eWR8LCQiKqeojWVSQSkQhigYVHwkZibCSIMAssiYUEsfBYSohMhAmxQMTCI0YiZkMsSJDQ1Qymq82IRyzGI/qWqUNNjHT31DtE77ruf87/3XPvOdVN+M8fyuJfzmurPPZ0y3E7s8TXx2QCKBmtxwi0E8BDAEdMR13KCpIJwDbkAwDz6kzbs0JkBfgOQKvfNTOtsKq1W2krkRqglM8tIhZ3RxkRnkihlk9/jXdpIFID2Lo8CMLeIBNmPm5V3R3/FiAvH4MxJ8SkH2OVZZbxOSlEqgqUdG05EXdHJidsMCvq/D8BsHXtFIi3xCQ/bzpqw18HKOnaCiK+mSDxJ9NRk3zdC0POKjjqWVRMoiPwEw0B1wG0JQAAe97SnBDvPeAiiHYXK7UbYXGxAKWpuSUkxJ0kxiMaH4CE8E3HgvkDt7TMt/q+9wXliATIYh7cnrhiVdXaVAC+OYS4TsC4NLuP0K43HXWxeT2wAqW2MW3EXjcYM/+SOQC6azq1xYkAyoY8w8CmWHPmHhAtidX9FhB4Y9Fxz9brR1WgpLduIqIzMUk/C0aHB96WCoBxpdh0F0YBlHV5mQmBF2YYirmHPdFh9dee23rrnTQAfrjpqAbPhi8DUzBuMCe/Ruy+TD/U4uIAPvqaLF3CQkyrb8kGgFI+t5BY3AsFIN5iVtzT9euxFWtK5s8I682PnpHHDQB2fsw0sPcqBKDbdNTKoDXbkP64tZJcxkiAx5MxXtPkl5CBsb/oqANhJrYhOQnAkOC5s/vcR4EV8B+WDdnFwMbmZAK0ZqZTuxZlYhvSHzTrwjQM9FqOKkS2oZ3PLQOL281JmksXZPLc0FZ74KthAES8tVhxT0UC+Iu2IS8AaK8XJgF4Oguy5YushRxhV9FRm5vXQl9GtqGdBLjjz1kxby9W3RNRRzA8wj3vdYBm0HTUxBCw8JTPDHlUALuGFcw9ZtVdGgXwIp9bODS6jUO7x88V/3sg37qDmHYD0Jl5s1V1u8IgyoY8xMCe3+sDBHRGdU4igBGzsiH3/arDPsFUKFRrL0Pmgf9XbSIB5zTKdbZVvr2Na83YCjQn8EGEVIcLvWi4bP5zZjx6UlXX2oGhOOPQOZA0sF53fwYmLOjFYJbYn3WiRDAd4qVAAAAAAElFTkSuQmCC",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAtFJREFUWEfNl89rE1EQx7+zSTZYqEWsF2k2ttp2403owYvaXgQvioIVPHgVhf4FCvagf0FB0asg1oKgguCpVQ968MdJs7Vam031YkVasTWbZMfuJptutm9/NE2Ie3xvfnx23sy8eYSI35s+dHWWEidN0CkAfQR0A9hdVf/JwBKAeQn86He8+HhoHstRTFOY0Ke0nDHBY8R0noGuMHlrn4BlJr4ngSYGckY2SCcQQEvL18EYA7AzimOBzAoIE2rOuOqn7wugKfIDAGcbdOxVm1J1Y1RkSwigKfJXAPua5Nwxs6DqRq/X5iYATUn8AMhKsBZ8vKTqxT1uw3UAmpJ8AfCRFnh2maSXql446izUAKoJdyXA+V0AT2Ll2Kv+b2uLUSGzPfFhkqTpOnnCDScxbQC71BivA7J9VNWNqahOvXKaIrNnbUUiHLZK1AbQ0ombYLokcsDgoYxefNuoc9v+ZgCA+JaaK14mrRud3CHnCNi1OUPpzqBeuOhen0sl95e4nIoMJNEAgW575Rn4RatGmj72yKclCQ/FNcoXBvWidfb2p6US0yAajuw8RNA0cYY0Rb4P4Jww/JLUm1n4u2Dtfd67I1WKl/VmOa/amaSsIr8j4JDIsKobtSoRZvM2aRh4b0XA+ivhmQYBrJONm6b5PJTBJweqenkL4A+Ajq1GgE1zJLNYmgkF8KuCiuLqfwHQ9CPwRkbYByoRyLckCb3H4wfgJKFvGTZaBfFSTDnwfS1f6x+iTljZnAxsRA0BMM+o+eKI43w2nTzBzE9FyVppRAGt2AsQlvFxiuX784UvbrlZRb62fhONe3VrrdhusT6XkRsgzLlof06RD5aBD0Jd5zKyNv2u4+0AZFPJ40T8zAe8/jquRMGegOsGkq00G8eR1bIlSTomCnsNxjuQbGRrG0eyDYg2DqWuum3fWO6CaN/DpAbRzqeZA9HWx6m7hlv1PP8HdfhmLN5uDPYAAAAASUVORK5CYII=",Me="data:image/png;base64,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",qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEUAAAACAAAEAAAGAAADAAAFAAAKAAAHAAAQAAABAAACAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAAAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAABAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAADAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAD///+W3QZCAAAAqHRSTlMAAAAAAAAAAAAAAQoWHBsBEjt6vtTd1bx8QBUPWMTy9MhcAS6w+Pm1MwJI2d5RAknk5wEy2+jO6f7r0OU1ELP8cJnh0crL0+PmnWsRVfc8BigiFCMqB2LC9kVKEj77aFJGzx6/lwG7eVvtMS/sIRvcJtJEEwu5BAOLCnaW8wXaw6DH/Yg0OZBee7fwHvH6c2XJkjbGFhlPUzjgOp8tK+rWuDUOxR0pzW3NoAbKAAAAAWJLR0SpJw8GBAAAAAd0SU1FB+gCEwk0EkntIW4AAAIlSURBVDjLY2AgATBycfPw8vFw8zNhk2XiFxAUEhYRFRUTl5CUwlDDxCQtIyu3AgrkFRQFmFlQ5JWUVVRXIAE1dQ0uJBVMmlraK9CAjq4e3BomVn2DFRjAUNcIagYLk7HJihWmZuYWMDkLSyvrFStEbZgYIQbY2q1YYe8greFo7eTs4urm7uFpY+sFVC3uzQIxwMcX6HA/Jhb/gMAgW1up4JBQJiYtoJt9w1hBKpgEwoGmRkSi+JwpSg0oqBANVhAD8n9sHKqCeJACuQSgIAuzEMhdiUmoCqSSQaIpqSwMTNxpIHens6KEHAtTRixQOJmbCajWDcjKzEILfKbsHKCwiBRQAa8OkGUQjK4g1x0oLMrHxMCSlw9keRSgKwgwBArn84GsKATFXwK6gqIIoLBVMVBBSSnIvZ5lqI4srwCJJleyMLCwVoGYHjHI3mBhS7AEiVYrAQ1mkqwBsZ0lyxDRW6tfB044+kzgoK5fkdPQ2GTe3CJVzgIynae1LRMcq67FTOAwaVeT7yjoXGHRJQ4KTpbu0h5IxPf2sYOtZRLoXOHbHzJBzX5iOchKTQlowhAWYIIG6yTRFZOnTJ02fQpEw4wesPzMWdAEw8DCMc3QfvacYmlNiIK55iD5eTIMcH8x6U0TtZg3f8FUJoQCJx89pLBjZFjYqbrCKQmuQE18lhJq/LMs6l/svASiYGn+suW2LOh5i4XTdm4oWJClsiWIi4WBagAAZejSV585JrMAAAAASUVORK5CYII=",He="/assets/png/Z.9bb9e7bd.png";const s=R=>(Se("data-v-e64ffe9a"),R=R(),Fe(),R),ze={class:"header"},Ne={style:{flex:"1"}},Xe={class:"header-content"},Le=s(()=>t("a",{href:"https://www.douyu.com/6657",target:"_blank",class:"logo-link"},[t("img",{src:Je,alt:"大狗头",class:"logo-img"}),t("p",{class:"header-title"},"斗鱼玩机器烂梗收集")],-1)),We={class:"header-actions"},Pe={style:{"margin-right":"20px"},class:"elinput"},Ge=s(()=>t("span",null,[d(" 上传照片 "),t("br"),d("建议/提交BUG ")],-1)),je=ke('<a href="https://sb6657.cn/#/Tampermonkey" data-v-e64ffe9a><img src="https://pic.imgdb.cn/item/6704f830d29ded1a8c738f70.png" alt="gitee" class="icon-img" data-v-e64ffe9a></a><a href="https://gitee.com/hzming1/sb6657" target="_blank" data-v-e64ffe9a><img src="'+Ve+'" alt="gitee" class="icon-img" data-v-e64ffe9a></a><a href="https://yuba.douyu.com/feed/2639094748291342931" target="_blank" data-v-e64ffe9a><img src="'+Me+'" alt="douyu" class="icon-img" data-v-e64ffe9a></a><a href="https://github.com/SEhzm/sb6657/" target="_blank" data-v-e64ffe9a><img src="'+qe+'" alt="github" class="icon-img" data-v-e64ffe9a></a>',4),Ze=s(()=>t("span",null,"24h热门烂梗",-1)),$e={key:0,class:"QueryTable"},eA=s(()=>t("svg",{t:"1725098483582",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4538",width:"16",height:"16"},[t("path",{d:"M0 0h1024v1024H0z",fill:"#FF0033","fill-opacity":"0","p-id":"4539"}),t("path",{d:"M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z",fill:"#111111","p-id":"4540"})],-1)),AA={class:"tab"},tA={class:"tab-container"},aA=["onClick"],oA={class:"main-content",style:{position:"relative"}},nA={class:"sidebar"},lA=s(()=>t("span",null,"首页",-1)),sA=s(()=>t("span",null,"全部烂梗",-1)),iA=s(()=>t("span",null,"时光相册",-1)),rA=s(()=>t("span",null,"喷玩机器篇",-1)),cA=s(()=>t("span",null,"木柜子篇",-1)),dA=s(()=>t("span",null,"直播间互喷篇",-1)),uA=s(()=>t("span",null,"喷选手篇",-1)),pA=s(()=>t("span",null,"+1篇",-1)),mA=s(()=>t("span",null,"群魔乱舞篇",-1)),EA=s(()=>t("img",{src:He,alt:"Z!!",class:"menu-icon"},null,-1)),gA=s(()=>t("span",null,"QUQU篇",-1)),hA={class:"content"},fA="https://pic.imgdb.cn/item/66992905d9c307b7e9f0136e.png",_A="https://pic.imgdb.cn/item/66dd952dd9c307b7e9321a73.png",BA={__name:"Manager",setup(R){const w=x(!1),S=x(!1),B=x(!0),G=[{text:"首页",path:"/home"},{text:"+1",path:"/p1"},{text:"喷玩机器篇",path:"/penWJQ"},{text:"木柜子篇",path:"/mygo"},{text:"喷选手篇",path:"/penPlayer"},{text:"群魔乱舞篇",path:"/QMLW"},{text:"全部烂梗",path:"/AllBarrage"},{text:"QUQU篇",path:"/QUQU"},{text:"时光相册",path:"/image"}],j=P(),Z=Te(),Q=x(""),D=x(!1),p=we({filteredItems:[],tableData:[],table:"",barrage:"",hotBarrageOf10:[],hotBarrageOf7day:[]}),$=()=>{console.log(Q.value),I.post("/machine/Query",{QueryBarrage:Q.value}).then(a=>{D.value=!0,B.value=!1,p.filteredItems=a.data||[]})},F=()=>{I.get("/machine/hotBarrageOfAll").then(a=>{p.hotBarrageOf10=a.data.slice(0,10)||[],B.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};F();const J=()=>{I.get("/machine/hotBarrageOf7Day").then(a=>{B.value=!1,p.hotBarrageOf7day=a.data||[]}).catch(a=>{console.error("加载数据失败:",a)})},ee=()=>{w.value=!1,S.value=!0,J()},Y=x(0);let q;function Ae(){q=setInterval(()=>{Y.value=(Y.value+1)%p.hotBarrageOf10.length},5e3)}Qe(()=>{Ae()}),Ie(()=>{clearInterval(q)});const H=()=>{L({message:"复制成功",type:"success"})},z=()=>{L({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})};let y=0,f=null,_=0;const te=a=>{const n=new Date().getTime(),h={x:event.clientX,y:event.clientY};if(f&&f.x===h.x&&f.y===h.y?(_++,_>4&&W.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,n-y<1500){v({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const m=a.barrage;let c=document.createElement("input");c.value=m,document.body.appendChild(c),c.select();try{document.execCommand("Copy")}catch(r){v({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",r)}document.body.removeChild(c),y=n,f=h;return}y=n;const i=a.barrage;let l=document.createElement("input");l.value=i,document.body.appendChild(l),l.select();try{document.execCommand("Copy"),H(),console.log("内容已复制到剪贴板"),I.post("/machine/addCnt",{table:"allbarrage",id:a.id}),setTimeout(()=>F(),200),setTimeout(()=>J(),200)}catch(m){v({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",m),z()}document.body.removeChild(l)},N=a=>{const n=new Date().getTime(),h={x:event.clientX,y:event.clientY};if(f&&f.x===h.x&&f.y===h.y&&(_++,console.log(_),_>4&&W.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})),_=0,n-y<1500){v({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const m=a.barrage;let c=document.createElement("input");c.value=m,document.body.appendChild(c),c.select();try{document.execCommand("Copy")}catch(r){v({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",r)}document.body.removeChild(c),y=n;return}y=n;const i=a.barrage;let l=document.createElement("input");l.value=i,document.body.appendChild(l),l.select();try{document.execCommand("Copy"),H(),console.log("内容已复制到剪贴板"),I.post("/machine/addCnt",{table:a.tableName,id:a.barrageId}),setTimeout(()=>F(),200),setTimeout(()=>J(),200)}catch(m){v({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",m),z()}document.body.removeChild(l)};function ae(a){Z.push(a)}setTimeout(function(){if(document.all){const a=document.getElementById("myDiv");a&&a.click()}else{const a=document.getElementById("myDiv");if(a){const n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),a.dispatchEvent(n)}}},60*60*1e3);const oe=()=>{window.open("https://www.wjx.cn/vm/rQUgnS0.aspx#")},ne=()=>{p.filteredItems=[],D.value=!1},le=()=>{Q.value="",D.value=!1},k=P();return console.log(k.path),(a,n)=>{const h=E("Search"),i=ve,l=ge,m=he,c=xe,r=be,T=fe,X=_e,se=E("HomeFilled"),u=Ce,ie=E("List"),re=E("Camera"),ce=E("Female"),de=E("ChatDotRound"),ue=E("plus"),pe=E("User"),me=Be,Ee=E("router-view"),K=ye;return g(),b("div",null,[t("div",ze,[t("div",Ne,[t("div",Xe,[Le,t("div",We,[O(k).name!=="image"?(g(),b("img",{key:0,src:Ue,alt:"热门",style:{width:"24px",height:"24px",cursor:"pointer","margin-right":"10px"},class:"hotBarrageImg",onClick:n[0]||(n[0]=o=>w.value=!0)})):U("",!0),O(k).name!=="image"?(g(),b("div",{key:1,onClick:n[1]||(n[1]=o=>w.value=!0),class:"hotBarrage",style:{cursor:"pointer",width:"300px",overflow:"hidden","text-overflow":"ellipsis",color:"#e4d6b8","white-space":"nowrap"}},[e(Re,{name:"fade"},{default:A(()=>{var o;return[(g(),b("span",{key:Y.value,class:"hotBarrageSpan"}," 热门："+C((o=p.hotBarrageOf10[Y.value])==null?void 0:o.barrage),1))]}),_:1})])):U("",!0),t("div",Pe,[e(m,{modelValue:Q.value,"onUpdate:modelValue":n[2]||(n[2]=o=>Q.value=o),placeholder:"搜索烂梗",clearable:"",style:{},onInput:ne},{append:A(()=>[e(l,{type:"primary",onClick:$},{default:A(()=>[e(i,null,{default:A(()=>[e(h)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e(l,{type:"primary",onClick:oe,class:"complaint-button"},{default:A(()=>[Ge]),_:1}),je,e(c,{id:"myDiv",class:"icon-img-rounded",src:fA,"hide-on-click-modal":!0,"zoom-rate":1.2,"max-scale":7,lazy:"","min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/zfb.jpg"],"initial-index":4,fit:"cover"}),e(c,{class:"icon-img-rounded",src:_A,"hide-on-click-modal":!0,"zoom-rate":1.2,lazy:"","max-scale":7,"min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/wx.jpg"],"initial-index":4,fit:"cover"})])]),e(X,{modelValue:w.value,"onUpdate:modelValue":n[3]||(n[3]=o=>w.value=o),title:"24h热门烂梗",style:{width:"100%"}},{title:A(()=>[Ze,e(l,{style:{float:"right"},onClick:ee},{default:A(()=>[d("查看近七天热门")]),_:1})]),default:A(()=>[V((g(),M(T,{stripe:"",data:p.hotBarrageOf10,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:N},{default:A(()=>[e(r,{width:"45",fixed:"",prop:"",label:"top10"},{default:A(o=>[d(C(o.$index+1),1)]),_:1}),e(r,{prop:"barrage","min-width":"90",label:"烂梗"}),e(r,{label:"",align:"center",width:"85"},{default:A(()=>[e(l,{type:"primary",label:"操作"},{default:A(()=>[d("复制")]),_:1})]),_:1}),e(r,{prop:"cnt",label:"复制次数",width:"55"},{default:A(o=>[d(C(o.row.cnt),1)]),_:1})]),_:1},8,["data"])),[[K,B.value]])]),_:1},8,["modelValue"]),e(X,{modelValue:S.value,"onUpdate:modelValue":n[4]||(n[4]=o=>S.value=o),title:"七天热门烂梗",style:{width:"100%"}},{default:A(()=>[V((g(),M(T,{stripe:"",data:p.hotBarrageOf7day,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:N},{default:A(()=>[e(r,{width:"35",fixed:"",prop:"",label:"排名"},{default:A(o=>[d(C(o.$index+1),1)]),_:1}),e(r,{prop:"barrage","min-width":"90",label:"烂梗"}),e(r,{label:"",align:"center",width:"85"},{default:A(()=>[e(l,{type:"primary",label:"操作"},{default:A(()=>[d("复制")]),_:1})]),_:1}),e(r,{prop:"cnt",label:"复制次数",width:"55"},{default:A(o=>[d(C(o.row.cnt),1)]),_:1})]),_:1},8,["data"])),[[K,B.value]])]),_:1},8,["modelValue"]),D.value?(g(),b("div",$e,[e(l,{class:"close-button",onClick:le},{default:A(()=>[eA]),_:1}),V((g(),M(T,{data:p.filteredItems,stripe:"",onRowClick:te,style:{cursor:"pointer"},"empty-text":"可能没有这条烂梗或请手动刷新页面"},{default:A(()=>[e(r,{prop:"barrage",label:"弹幕"}),e(r,{label:"",align:"center",width:"85"},{default:A(()=>[e(l,{type:"primary"},{default:A(()=>[d("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[K,B.value]])])):U("",!0)])]),t("div",AA,[t("div",tA,[(g(),b(De,null,Ye(G,(o,yA)=>t("div",{class:Oe(`tab1 ${o.path===O(j).path?"selected":"none"}`),key:o.path,onClick:vA=>ae(o.path)},C(o.text),11,aA)),64))])]),t("div",oA,[t("div",nA,[e(me,{router:"",style:{border:"none","margin-right":"auto"},"default-active":O(k).path},{default:A(()=>[e(u,{index:"/home"},{default:A(()=>[e(i,null,{default:A(()=>[e(se)]),_:1}),lA]),_:1}),e(u,{index:"/AllBarrage"},{default:A(()=>[e(i,null,{default:A(()=>[e(ie)]),_:1}),sA]),_:1}),e(u,{index:"/image"},{default:A(()=>[e(i,null,{default:A(()=>[e(re)]),_:1}),iA]),_:1}),e(u,{index:"/penWJQ"},{default:A(()=>[e(i,null,{default:A(()=>[d("玩")]),_:1}),rA]),_:1}),e(u,{index:"/mygo"},{default:A(()=>[e(i,null,{default:A(()=>[e(ce)]),_:1}),cA]),_:1}),e(u,{index:"/ZbjHuPen"},{default:A(()=>[e(i,null,{default:A(()=>[e(de)]),_:1}),dA]),_:1}),e(u,{index:"/penPlayer"},{default:A(()=>[e(i,null,{default:A(()=>[d("🦐")]),_:1}),uA]),_:1}),e(u,{index:"/p1"},{default:A(()=>[e(i,null,{default:A(()=>[e(ue)]),_:1}),pA]),_:1}),e(u,{index:"/QMLW"},{default:A(()=>[e(i,null,{default:A(()=>[e(pe)]),_:1}),mA]),_:1}),e(u,{index:"/QUQU"},{default:A(()=>[EA,gA]),_:1})]),_:1},8,["default-active"])]),t("div",hA,[e(Ee)])])])}}},VA=Ke(BA,[["__scopeId","data-v-e64ffe9a"]]);export{VA as default};
