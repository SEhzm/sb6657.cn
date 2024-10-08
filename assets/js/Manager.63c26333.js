import{E as rA,a as cA,b as dA,c as uA,d as pA,e as mA,f as EA,g as gA,h as hA,v as fA,j as q}from"./element-plus.b01987db.js";import{d as BA,r as h,_ as _A,j as vA,Z as bA,o as p,c as f,a as t,u as Q,S as O,V as A,P as e,U as B,X as wA,T as i,Q as S,O as J,F as xA,a8 as CA,J as yA,aw as QA,ai as m,ax as RA,ay as IA}from"./@vue.7a8f7aed.js";import{_ as DA}from"./favicon.9ef6f040.js";import{u as H,b as kA}from"./vue-router.e9f6b670.js";import{r as b}from"./request.39193e0d.js";import{_ as YA}from"./index.88dfa6f4.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";const OA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1xJREFUWEfFl0uMDFEUhv9zp+eWR8LCQiKqeojWVSQSkQhigYVHwkZibCSIMAssiYUEsfBYSohMhAmxQMTCI0YiZkMsSJDQ1Qymq82IRyzGI/qWqUNNjHT31DtE77ruf87/3XPvOdVN+M8fyuJfzmurPPZ0y3E7s8TXx2QCKBmtxwi0E8BDAEdMR13KCpIJwDbkAwDz6kzbs0JkBfgOQKvfNTOtsKq1W2krkRqglM8tIhZ3RxkRnkihlk9/jXdpIFID2Lo8CMLeIBNmPm5V3R3/FiAvH4MxJ8SkH2OVZZbxOSlEqgqUdG05EXdHJidsMCvq/D8BsHXtFIi3xCQ/bzpqw18HKOnaCiK+mSDxJ9NRk3zdC0POKjjqWVRMoiPwEw0B1wG0JQAAe97SnBDvPeAiiHYXK7UbYXGxAKWpuSUkxJ0kxiMaH4CE8E3HgvkDt7TMt/q+9wXliATIYh7cnrhiVdXaVAC+OYS4TsC4NLuP0K43HXWxeT2wAqW2MW3EXjcYM/+SOQC6azq1xYkAyoY8w8CmWHPmHhAtidX9FhB4Y9Fxz9brR1WgpLduIqIzMUk/C0aHB96WCoBxpdh0F0YBlHV5mQmBF2YYirmHPdFh9dee23rrnTQAfrjpqAbPhi8DUzBuMCe/Ruy+TD/U4uIAPvqaLF3CQkyrb8kGgFI+t5BY3AsFIN5iVtzT9euxFWtK5s8I682PnpHHDQB2fsw0sPcqBKDbdNTKoDXbkP64tZJcxkiAx5MxXtPkl5CBsb/oqANhJrYhOQnAkOC5s/vcR4EV8B+WDdnFwMbmZAK0ZqZTuxZlYhvSHzTrwjQM9FqOKkS2oZ3PLQOL281JmksXZPLc0FZ74KthAES8tVhxT0UC+Iu2IS8AaK8XJgF4Oguy5YushRxhV9FRm5vXQl9GtqGdBLjjz1kxby9W3RNRRzA8wj3vdYBm0HTUxBCw8JTPDHlUALuGFcw9ZtVdGgXwIp9bODS6jUO7x88V/3sg37qDmHYD0Jl5s1V1u8IgyoY8xMCe3+sDBHRGdU4igBGzsiH3/arDPsFUKFRrL0Pmgf9XbSIB5zTKdbZVvr2Na83YCjQn8EGEVIcLvWi4bP5zZjx6UlXX2oGhOOPQOZA0sF53fwYmLOjFYJbYn3WiRDAd4qVAAAAAAElFTkSuQmCC",SA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAtFJREFUWEfNl89rE1EQx7+zSTZYqEWsF2k2ttp2403owYvaXgQvioIVPHgVhf4FCvagf0FB0asg1oKgguCpVQ968MdJs7Vam031YkVasTWbZMfuJptutm9/NE2Ie3xvfnx23sy8eYSI35s+dHWWEidN0CkAfQR0A9hdVf/JwBKAeQn86He8+HhoHstRTFOY0Ke0nDHBY8R0noGuMHlrn4BlJr4ngSYGckY2SCcQQEvL18EYA7AzimOBzAoIE2rOuOqn7wugKfIDAGcbdOxVm1J1Y1RkSwigKfJXAPua5Nwxs6DqRq/X5iYATUn8AMhKsBZ8vKTqxT1uw3UAmpJ8AfCRFnh2maSXql446izUAKoJdyXA+V0AT2Ll2Kv+b2uLUSGzPfFhkqTpOnnCDScxbQC71BivA7J9VNWNqahOvXKaIrNnbUUiHLZK1AbQ0ombYLokcsDgoYxefNuoc9v+ZgCA+JaaK14mrRud3CHnCNi1OUPpzqBeuOhen0sl95e4nIoMJNEAgW575Rn4RatGmj72yKclCQ/FNcoXBvWidfb2p6US0yAajuw8RNA0cYY0Rb4P4Jww/JLUm1n4u2Dtfd67I1WKl/VmOa/amaSsIr8j4JDIsKobtSoRZvM2aRh4b0XA+ivhmQYBrJONm6b5PJTBJweqenkL4A+Ajq1GgE1zJLNYmgkF8KuCiuLqfwHQ9CPwRkbYByoRyLckCb3H4wfgJKFvGTZaBfFSTDnwfS1f6x+iTljZnAxsRA0BMM+o+eKI43w2nTzBzE9FyVppRAGt2AsQlvFxiuX784UvbrlZRb62fhONe3VrrdhusT6XkRsgzLlof06RD5aBD0Jd5zKyNv2u4+0AZFPJ40T8zAe8/jquRMGegOsGkq00G8eR1bIlSTomCnsNxjuQbGRrG0eyDYg2DqWuum3fWO6CaN/DpAbRzqeZA9HWx6m7hlv1PP8HdfhmLN5uDPYAAAAASUVORK5CYII=",JA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABpBJREFUWEfFVntM01cUPi0FHIUibVE6YEFAHrNDuoJUaVgJG6AVVByPoQkrSJSNmbmREHAoYSlBNwUT4yYBSUgMhOfEF60BXOVhKBKUoICAlIrUpRZaHl1XS7f7Y2UgbUH+cCe5f93H953Hd+7Bwf9suHXiOwGAGwBIAGBinW9g196GwPYtW7bwZTJZmFqt3mAAdXBwUFOp1BdUKrXT0dHxRENDw8u3IbQmAgEBAb8+ffo0JSYmhrBjxw7YunUrUCgUDEehUGCrt7cXOjo6dAqF4t6DBw9CGQzGJbVafdjZ2dl2eHgYp9frZ4lE4gSJRLp3//79ZAPJVQn4+/sLkpOTw7lcLoyMjAAej4f29naIjY016mh9fT1cvHgRcnJygMPhgFAoBA8PD2w9evQIRCIRNDQ0jI+NjYUDwGOzBGg02hMul+tz9OhRCAwMBL1ej4EWFRVhEUDRMGYoGuPj4+Dl5QXu7u4rjjQ2NkJeXp5KoVBsNknAxcXlSUZGhs/U1BRYW1tDQUEBpKSkgLe3N+zduxeamppMEjBXA52dnXDjxg3o6+sDR0fH3UYJbNu2rTU1NTU4MjISzp07B+np6TA6Ogr79u2D06dPA41GAwaDAfb29hgWetRUNFB9kMlk7BxKjVAolNFotOLExMQKAoEwvoIAi8UqY7FYXx47dgy7pFQqQSKRgI+PD7i6ukJbWxtWdAbA2dlZSEtLg/LycqOOo5zjcDjo7u7Wi8XiC11dXSeWHlxGICwsLNLKyupWYWHhCmKoAJE5OztjKTHYqVOnoKqqCiorK8Hf398oiYiICFSE15ubm6PfPLAMKCAgYOjkyZMevr6+a5IyCunk5CRcvXoVzpw5g6XImHV3d0NmZqZKKpUu5GyJLRLgcDg/7Ny588ekpKQ1gefm5mIFiaQWGhqKqhri4uKM3kVpDAkJ0Ws0GrxJAtHR0XNnz559bzV0qVQKx48fh+joaEwZqBbEYjGmCpQeUxYWFgZ0On23QCBoXBEBDofz9fz8fL6fnx8JebFp0yaj76Cm0tXVBampqdDf34+B1tXVYYSOHDlilnt8fDxQqdTYpqamGqMpiI2NJQ8ODt6RyWQMOp2OQ56h7iWTybClUqmAx+Nhd5E89+zZg3mMeoKbG/qXzBubzQYmk0kRCAQKkypAGxwOxxYAMpRKZYRarXYi6OeoH77/2qaq5QX+0KFDmKeoD5gzJE0ikbh4RC6XA5fL1SmVSoJZFRg26XR638zMzOasBFrf/u1jIRRbLfz1Gg+dgxZQ066FO/0Oi00oISEBi4bB0D+xa9euZTilpaVIqlMSicRhNQJYs2exWHfJdtYdP8UMZw1P4EE+rYHWPgJ4O/8J30RZwvNXFlBQqwUbzzisSxqstrYWXFxcICgoaBkOqhm9Xv9La2vrV+YI6IODg3va2toY6FDRd+yJ9NBBNHhAcIYKarI3whOpBXSN2sKAloX9hp6enth76JcrKyuDsbExQCSW2pUrV6CkpEQbFBTke/v27WFTBJDny5pSStLhmhMs0cHC3xRwOd0Gnr+yhLJOL9jgGr4oN9RgmpubMQIxMTGQn5+/7P2enh5AKWKz2RdaW1u/NVY3OAsLi2d4PH5Gq9V+tPSAl5eX1NP+D5fy74mwkahd3Hr4zBLO18/8F/YODRQXFxv9jOh0Ovq0msVicZipojV4jSJQ/c+AsKyVsVisyo+p0vjcRDyQ7TQr3igV4OBCMwXrBW8a8pxEIt0SiURcc4pZGvaFaeNfIxKJsyQSSU4kEq2DPtA5ZR4kgLvTDGyw0oFy1hLaHltAdN4YZGVlwdL2rdVq4cCBA2gQqRcKhTHmwNHeqiNZZGRkoEajYY/0P/zZlUzAf/EJCaruTcPvvS8xBSxVwdDQEBQWFs6TyeTL1dXVKyreaA2YYshkMlump6dDAgMD8Q4OC/JFgwda6BNCMwDqiMh0Oh02DwwMDLxkMpkJOTk5d1fz3LBvNAIIXC6Xb5+cnHRAkw+aB1Fr9vPzW/HuzZs30ZCqs7KyKqmoqFiYYt7CzKYgKiqKOj09fXhubu5TlUrFoFAoThEREfil3y6KREtLy6qpXE0Fa+LM5XLpcrn8Rx6Ptx/NAciQ9svLy98NAQQYHh7+mZ2dnYDP52Og2dnZ6rq6Ops1eWDk0LqY+/j4POPz+W7Xrl1D03KtSCT6/J0SYLPZlyQSSZpOp5vj8/nOPB5v6p0SQGBIKRQK5bxQKLy+XnB072+HtI8zN1mH+gAAAABJRU5ErkJggg==",KA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEUAAAACAAAEAAAGAAADAAAFAAAKAAAHAAAQAAABAAACAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAAAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAABAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAADAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAD///+W3QZCAAAAqHRSTlMAAAAAAAAAAAAAAQoWHBsBEjt6vtTd1bx8QBUPWMTy9MhcAS6w+Pm1MwJI2d5RAknk5wEy2+jO6f7r0OU1ELP8cJnh0crL0+PmnWsRVfc8BigiFCMqB2LC9kVKEj77aFJGzx6/lwG7eVvtMS/sIRvcJtJEEwu5BAOLCnaW8wXaw6DH/Yg0OZBee7fwHvH6c2XJkjbGFhlPUzjgOp8tK+rWuDUOxR0pzW3NoAbKAAAAAWJLR0SpJw8GBAAAAAd0SU1FB+gCEwk0EkntIW4AAAIlSURBVDjLY2AgATBycfPw8vFw8zNhk2XiFxAUEhYRFRUTl5CUwlDDxCQtIyu3AgrkFRQFmFlQ5JWUVVRXIAE1dQ0uJBVMmlraK9CAjq4e3BomVn2DFRjAUNcIagYLk7HJihWmZuYWMDkLSyvrFStEbZgYIQbY2q1YYe8greFo7eTs4urm7uFpY+sFVC3uzQIxwMcX6HA/Jhb/gMAgW1up4JBQJiYtoJt9w1hBKpgEwoGmRkSi+JwpSg0oqBANVhAD8n9sHKqCeJACuQSgIAuzEMhdiUmoCqSSQaIpqSwMTNxpIHens6KEHAtTRixQOJmbCajWDcjKzEILfKbsHKCwiBRQAa8OkGUQjK4g1x0oLMrHxMCSlw9keRSgKwgwBArn84GsKATFXwK6gqIIoLBVMVBBSSnIvZ5lqI4srwCJJleyMLCwVoGYHjHI3mBhS7AEiVYrAQ1mkqwBsZ0lyxDRW6tfB044+kzgoK5fkdPQ2GTe3CJVzgIynae1LRMcq67FTOAwaVeT7yjoXGHRJQ4KTpbu0h5IxPf2sYOtZRLoXOHbHzJBzX5iOchKTQlowhAWYIIG6yTRFZOnTJ02fQpEw4wesPzMWdAEw8DCMc3QfvacYmlNiIK55iD5eTIMcH8x6U0TtZg3f8FUJoQCJx89pLBjZFjYqbrCKQmuQE18lhJq/LMs6l/svASiYGn+suW2LOh5i4XTdm4oWJClsiWIi4WBagAAZejSV585JrMAAAAASUVORK5CYII=",UA="/assets/png/Z.9bb9e7bd.png",n=w=>(RA("data-v-2140f518"),w=w(),IA(),w),FA={class:"header"},VA={style:{flex:"1"}},TA={class:"header-content"},MA=n(()=>t("a",{href:"https://www.douyu.com/6657",target:"_blank",class:"logo-link"},[t("img",{src:DA,alt:"大狗头",class:"logo-img"}),t("p",{class:"header-title"},"斗鱼玩机器烂梗收集")],-1)),qA={class:"header-actions"},HA={style:{"margin-right":"20px"},class:"elinput"},zA=n(()=>t("span",null,[i(" 上传照片 "),t("br"),i("建议/提交BUG ")],-1)),NA=QA('<a href="https://sb6657.cn/#/Tampermonkey" data-v-2140f518><img src="https://pic.imgdb.cn/item/6704f830d29ded1a8c738f70.png" alt="gitee" class="icon-img" data-v-2140f518></a><a href="https://gitee.com/hzming1/sb6657" target="_blank" data-v-2140f518><img src="'+SA+'" alt="gitee" class="icon-img" data-v-2140f518></a><a href="https://yuba.douyu.com/feed/2639094748291342931" target="_blank" data-v-2140f518><img src="'+JA+'" alt="douyu" class="icon-img" data-v-2140f518></a><a href="https://github.com/SEhzm/sb6657/" target="_blank" data-v-2140f518><img src="'+KA+'" alt="github" class="icon-img" data-v-2140f518></a>',4),XA=n(()=>t("span",null,"24h热门烂梗",-1)),LA={key:0,class:"QueryTable"},WA=n(()=>t("svg",{t:"1725098483582",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4538",width:"16",height:"16"},[t("path",{d:"M0 0h1024v1024H0z",fill:"#FF0033","fill-opacity":"0","p-id":"4539"}),t("path",{d:"M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z",fill:"#111111","p-id":"4540"})],-1)),GA={class:"tab"},PA=["onClick"],jA={class:"main-content",style:{position:"relative"}},ZA={class:"sidebar"},$A=n(()=>t("span",null,"首页",-1)),Ae=n(()=>t("span",null,"全部烂梗",-1)),ee=n(()=>t("span",null,"时光相册",-1)),te=n(()=>t("span",null,"喷玩机器篇",-1)),ae=n(()=>t("span",null,"直播间互喷篇",-1)),oe=n(()=>t("span",null,"喷选手篇",-1)),le=n(()=>t("span",null,"+1篇",-1)),ne=n(()=>t("span",null,"群魔乱舞篇",-1)),se=n(()=>t("img",{src:UA,alt:"Z!!",class:"menu-icon"},null,-1)),ie=n(()=>t("span",null,"QUQU篇",-1)),re={class:"content"},ce="https://pic.imgdb.cn/item/66992905d9c307b7e9f0136e.png",de="https://pic.imgdb.cn/item/66dd952dd9c307b7e9321a73.png",ue=BA({__name:"Manager",setup(w){const _=h(!1),R=h(!1),g=h(!0),z=[{text:"首页",path:"/home"},{text:"+1",path:"/p1"},{text:"喷玩机器篇",path:"/penWJQ"},{text:"喷选手篇",path:"/penPlayer"},{text:"群魔乱舞篇",path:"/QMLW"},{text:"全部烂梗",path:"/AllBarrage"},{text:"QUQU篇",path:"/QUQU"},{text:"时光相册",path:"/image"}],N=H(),X=kA(),v=h(""),x=h(!1),d=_A({filteredItems:[],tableData:[],table:"",barrage:"",hotBarrageOf10:[],hotBarrageOf7day:[]}),L=()=>{console.log(v.value),b.post("/machine/Query",{QueryBarrage:v.value}).then(a=>{x.value=!0,g.value=!1,d.filteredItems=a.data||[]})},I=()=>{b.get("/machine/hotBarrageOfAll").then(a=>{d.hotBarrageOf10=a.data.slice(0,10)||[],g.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};I();const D=()=>{b.get("/machine/hotBarrageOf7Day").then(a=>{g.value=!1,d.hotBarrageOf7day=a.data||[]}).catch(a=>{console.error("加载数据失败:",a)})};D();const C=h(0);let K;function W(){K=setInterval(()=>{C.value=(C.value+1)%d.hotBarrageOf10.length},5e3)}vA(()=>{W()}),bA(()=>{clearInterval(K)});const U=()=>{q({message:"复制成功",type:"success"})},F=()=>{q({message:"复制失败，请检查浏览器是否禁用navigator.clipboard对象或手动复制,请勿使用夸克浏览器",type:"error"})},G=a=>{console.log(a);const l=a.barrage;let r=document.createElement("input");r.value=l,document.body.appendChild(r),r.select();try{document.execCommand("Copy"),U(),console.log("内容已复制到剪贴板"),b.post("/machine/addCnt",{table:"allbarrage",id:a.id}),setTimeout(()=>I(),200),setTimeout(()=>D(),200)}catch(s){console.error("复制失败:",s),F()}document.body.removeChild(r)},V=a=>{const l=a.barrage;let r=document.createElement("input");r.value=l,document.body.appendChild(r),r.select();try{document.execCommand("Copy"),U(),console.log("内容已复制到剪贴板"),b.post("/machine/addCnt",{table:a.tableName,id:a.barrageId}),setTimeout(()=>I(),200),setTimeout(()=>D(),200)}catch(s){console.error("复制失败:",s),F()}document.body.removeChild(r)};function P(a){X.push(a)}setTimeout(function(){if(document.all){const a=document.getElementById("myDiv");a&&a.click()}else{const a=document.getElementById("myDiv");if(a){const l=document.createEvent("MouseEvents");l.initEvent("click",!0,!0),a.dispatchEvent(l)}}},60*60*1e3);const j=()=>{window.open("https://www.wjx.cn/vm/rQUgnS0.aspx#")},Z=()=>{d.filteredItems=[],x.value=!1},$=()=>{v.value="",x.value=!1},y=H();return console.log(y.path),(a,l)=>{const r=m("Search"),s=rA,E=cA,AA=dA,T=uA,c=pA,k=mA,M=EA,eA=m("HomeFilled"),u=gA,tA=m("List"),aA=m("Camera"),oA=m("ChatDotRound"),lA=m("plus"),nA=m("User"),sA=hA,iA=m("router-view"),Y=fA;return p(),f("div",null,[t("div",FA,[t("div",VA,[t("div",TA,[MA,t("div",qA,[Q(y).name!=="image"?(p(),f("img",{key:0,src:OA,alt:"热门",style:{width:"24px",height:"24px",cursor:"pointer","margin-right":"10px"},class:"hotBarrageImg",onClick:l[0]||(l[0]=o=>_.value=!0)})):O("",!0),Q(y).name!=="image"?(p(),f("div",{key:1,onClick:l[1]||(l[1]=o=>_.value=!0),class:"hotBarrage",style:{cursor:"pointer",width:"300px",overflow:"hidden","text-overflow":"ellipsis",color:"#e4d6b8","white-space":"nowrap"}},[A(wA,{name:"fade"},{default:e(()=>{var o;return[(p(),f("span",{key:C.value,class:"hotBarrageSpan"}," 热门："+B((o=d.hotBarrageOf10[C.value])==null?void 0:o.barrage),1))]}),_:1})])):O("",!0),t("div",HA,[A(AA,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o),placeholder:"搜索烂梗",clearable:"",style:{},onInput:Z},{append:e(()=>[A(E,{type:"primary",onClick:L},{default:e(()=>[A(s,null,{default:e(()=>[A(r)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),A(E,{type:"primary",onClick:j,class:"complaint-button"},{default:e(()=>[zA]),_:1}),NA,A(T,{id:"myDiv",class:"icon-img-rounded",src:ce,"hide-on-click-modal":!0,"zoom-rate":1.2,"max-scale":7,lazy:"","min-scale":.2,"preview-src-list":["zfb.jpg"],"initial-index":4,fit:"cover"}),A(T,{class:"icon-img-rounded",src:de,"hide-on-click-modal":!0,"zoom-rate":1.2,lazy:"","max-scale":7,"min-scale":.2,"preview-src-list":["wx.jpg"],"initial-index":4,fit:"cover"})])]),A(M,{modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=o=>_.value=o),title:"24h热门烂梗",style:{width:"100%"}},{title:e(()=>[XA,A(E,{style:{float:"right"},onClick:l[3]||(l[3]=o=>(R.value=!0,_.value=!1))},{default:e(()=>[i("查看近七天热门")]),_:1})]),default:e(()=>[S((p(),J(k,{stripe:"",data:d.hotBarrageOf10,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:V},{default:e(()=>[A(c,{width:"45",fixed:"",prop:"",label:"top10"},{default:e(o=>[i(B(o.$index+1),1)]),_:1}),A(c,{prop:"barrage","min-width":"90",label:"烂梗"}),A(c,{label:"",align:"center",width:"85"},{default:e(()=>[A(E,{type:"primary",label:"操作"},{default:e(()=>[i("复制")]),_:1})]),_:1}),A(c,{prop:"cnt",label:"复制次数",width:"55"},{default:e(o=>[i(B(o.row.cnt)+"k",1)]),_:1})]),_:1},8,["data"])),[[Y,g.value]])]),_:1},8,["modelValue"]),A(M,{modelValue:R.value,"onUpdate:modelValue":l[5]||(l[5]=o=>R.value=o),title:"七天热门烂梗",style:{width:"100%"}},{default:e(()=>[S((p(),J(k,{stripe:"",data:d.hotBarrageOf7day,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:V},{default:e(()=>[A(c,{width:"35",fixed:"",prop:"",label:"排名"},{default:e(o=>[i(B(o.$index+1),1)]),_:1}),A(c,{prop:"barrage","min-width":"90",label:"烂梗"}),A(c,{label:"",align:"center",width:"85"},{default:e(()=>[A(E,{type:"primary",label:"操作"},{default:e(()=>[i("复制")]),_:1})]),_:1}),A(c,{prop:"cnt",label:"复制次数",width:"55"},{default:e(o=>[i(B(o.row.cnt)+"k",1)]),_:1})]),_:1},8,["data"])),[[Y,g.value]])]),_:1},8,["modelValue"]),x.value?(p(),f("div",LA,[A(E,{class:"close-button",onClick:$},{default:e(()=>[WA]),_:1}),S((p(),J(k,{data:d.filteredItems,stripe:"",onRowClick:G,style:{cursor:"pointer"},"empty-text":"可能没有这条烂梗或请手动刷新页面"},{default:e(()=>[A(c,{prop:"barrage",label:"弹幕"}),A(c,{label:"",align:"center",width:"85"},{default:e(()=>[A(E,{type:"primary"},{default:e(()=>[i("复制")]),_:1})]),_:1})]),_:1},8,["data"])),[[Y,g.value]])])):O("",!0)])]),t("div",GA,[(p(),f(xA,null,CA(z,o=>t("div",{class:yA(`tab1 ${o.path===Q(N).path?"selected":"none"}`),key:o.path,onClick:pe=>P(o.path)},B(o.text),11,PA)),64))]),t("div",jA,[t("div",ZA,[A(sA,{router:"",style:{border:"none","margin-right":"auto"},"default-active":Q(y).path},{default:e(()=>[A(u,{index:"/home"},{default:e(()=>[A(s,null,{default:e(()=>[A(eA)]),_:1}),$A]),_:1}),A(u,{index:"/AllBarrage"},{default:e(()=>[A(s,null,{default:e(()=>[A(tA)]),_:1}),Ae]),_:1}),A(u,{index:"/image"},{default:e(()=>[A(s,null,{default:e(()=>[A(aA)]),_:1}),ee]),_:1}),A(u,{index:"/penWJQ"},{default:e(()=>[A(s,null,{default:e(()=>[i("玩")]),_:1}),te]),_:1}),A(u,{index:"/ZbjHuPen"},{default:e(()=>[A(s,null,{default:e(()=>[A(oA)]),_:1}),ae]),_:1}),A(u,{index:"/penPlayer"},{default:e(()=>[A(s,null,{default:e(()=>[i("🦐")]),_:1}),oe]),_:1}),A(u,{index:"/p1"},{default:e(()=>[A(s,null,{default:e(()=>[A(lA)]),_:1}),le]),_:1}),A(u,{index:"/QMLW"},{default:e(()=>[A(s,null,{default:e(()=>[A(nA)]),_:1}),ne]),_:1}),A(u,{index:"/QUQU"},{default:e(()=>[se,ie]),_:1})]),_:1},8,["default-active"])]),t("div",re,[A(iA)])])])}}});const ke=YA(ue,[["__scopeId","data-v-2140f518"]]);export{ke as default};
