import{b as eA,c as tA,d as aA,a as z,e as oA,f as j,v as sA,g as nA,h as lA,j as iA,k as rA,l as dA}from"./element-plus.DVYLd97e.js";import{d as K,ax as L,ay as uA,r as l,o as i,c as d,P as a,H as o,B as cA,I as mA,G as W,L as g,M as w,a as A,O as Q,a4 as H,K as J,V as pA,k as G,f as EA,T as gA,u as I,a5 as fA,aw as hA,C as vA,ag as wA}from"./@vue.BkZGu_Ap.js";import{_ as BA}from"./favicon.CJfgpdIL.js";import{f as bA,c as _A,a as CA,p as xA,t as DA,l as yA,b as MA,u as kA,g as VA,d as IA,s as QA}from"./flip-num.C-pNNPOc.js";import{M as RA}from"./@element-plus.imH8POSc.js";import{h as SA,_ as U,M as X,s as YA}from"./index.ClGM8KDQ.js";import{u as N,b as KA}from"./vue-router.CJ_8Ucol.js";import"./lodash-es.C-zDejYo.js";import"./@vueuse.B3BMR0ps.js";import"./@popperjs.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./dayjs.DXEKZA6n.js";import"./async-validator.DKvM95Vc.js";import"./memoize-one.BdPwpGay.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.8uccrNCM.js";import"./axios.CCb-kr4I.js";const UA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1xJREFUWEfFl0uMDFEUhv9zp+eWR8LCQiKqeojWVSQSkQhigYVHwkZibCSIMAssiYUEsfBYSohMhAmxQMTCI0YiZkMsSJDQ1Qymq82IRyzGI/qWqUNNjHT31DtE77ruf87/3XPvOdVN+M8fyuJfzmurPPZ0y3E7s8TXx2QCKBmtxwi0E8BDAEdMR13KCpIJwDbkAwDz6kzbs0JkBfgOQKvfNTOtsKq1W2krkRqglM8tIhZ3RxkRnkihlk9/jXdpIFID2Lo8CMLeIBNmPm5V3R3/FiAvH4MxJ8SkH2OVZZbxOSlEqgqUdG05EXdHJidsMCvq/D8BsHXtFIi3xCQ/bzpqw18HKOnaCiK+mSDxJ9NRk3zdC0POKjjqWVRMoiPwEw0B1wG0JQAAe97SnBDvPeAiiHYXK7UbYXGxAKWpuSUkxJ0kxiMaH4CE8E3HgvkDt7TMt/q+9wXliATIYh7cnrhiVdXaVAC+OYS4TsC4NLuP0K43HXWxeT2wAqW2MW3EXjcYM/+SOQC6azq1xYkAyoY8w8CmWHPmHhAtidX9FhB4Y9Fxz9brR1WgpLduIqIzMUk/C0aHB96WCoBxpdh0F0YBlHV5mQmBF2YYirmHPdFh9dee23rrnTQAfrjpqAbPhi8DUzBuMCe/Ruy+TD/U4uIAPvqaLF3CQkyrb8kGgFI+t5BY3AsFIN5iVtzT9euxFWtK5s8I682PnpHHDQB2fsw0sPcqBKDbdNTKoDXbkP64tZJcxkiAx5MxXtPkl5CBsb/oqANhJrYhOQnAkOC5s/vcR4EV8B+WDdnFwMbmZAK0ZqZTuxZlYhvSHzTrwjQM9FqOKkS2oZ3PLQOL281JmksXZPLc0FZ74KthAES8tVhxT0UC+Iu2IS8AaK8XJgF4Oguy5YushRxhV9FRm5vXQl9GtqGdBLjjz1kxby9W3RNRRzA8wj3vdYBm0HTUxBCw8JTPDHlUALuGFcw9ZtVdGgXwIp9bODS6jUO7x88V/3sg37qDmHYD0Jl5s1V1u8IgyoY8xMCe3+sDBHRGdU4igBGzsiH3/arDPsFUKFRrL0Pmgf9XbSIB5zTKdbZVvr2Na83YCjQn8EGEVIcLvWi4bP5zZjx6UlXX2oGhOOPQOZA0sF53fwYmLOjFYJbYn3WiRDAd4qVAAAAAAElFTkSuQmCC",FA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABpBJREFUWEfFVntM01cUPi0FHIUibVE6YEFAHrNDuoJUaVgJG6AVVByPoQkrSJSNmbmREHAoYSlBNwUT4yYBSUgMhOfEF60BXOVhKBKUoICAlIrUpRZaHl1XS7f7Y2UgbUH+cCe5f93H953Hd+7Bwf9suHXiOwGAGwBIAGBinW9g196GwPYtW7bwZTJZmFqt3mAAdXBwUFOp1BdUKrXT0dHxRENDw8u3IbQmAgEBAb8+ffo0JSYmhrBjxw7YunUrUCgUDEehUGCrt7cXOjo6dAqF4t6DBw9CGQzGJbVafdjZ2dl2eHgYp9frZ4lE4gSJRLp3//79ZAPJVQn4+/sLkpOTw7lcLoyMjAAej4f29naIjY016mh9fT1cvHgRcnJygMPhgFAoBA8PD2w9evQIRCIRNDQ0jI+NjYUDwGOzBGg02hMul+tz9OhRCAwMBL1ej4EWFRVhEUDRMGYoGuPj4+Dl5QXu7u4rjjQ2NkJeXp5KoVBsNknAxcXlSUZGhs/U1BRYW1tDQUEBpKSkgLe3N+zduxeamppMEjBXA52dnXDjxg3o6+sDR0fH3UYJbNu2rTU1NTU4MjISzp07B+np6TA6Ogr79u2D06dPA41GAwaDAfb29hgWetRUNFB9kMlk7BxKjVAolNFotOLExMQKAoEwvoIAi8UqY7FYXx47dgy7pFQqQSKRgI+PD7i6ukJbWxtWdAbA2dlZSEtLg/LycqOOo5zjcDjo7u7Wi8XiC11dXSeWHlxGICwsLNLKyupWYWHhCmKoAJE5OztjKTHYqVOnoKqqCiorK8Hf398oiYiICFSE15ubm6PfPLAMKCAgYOjkyZMevr6+a5IyCunk5CRcvXoVzpw5g6XImHV3d0NmZqZKKpUu5GyJLRLgcDg/7Ny588ekpKQ1gefm5mIFiaQWGhqKqhri4uKM3kVpDAkJ0Ws0GrxJAtHR0XNnz559bzV0qVQKx48fh+joaEwZqBbEYjGmCpQeUxYWFgZ0On23QCBoXBEBDofz9fz8fL6fnx8JebFp0yaj76Cm0tXVBampqdDf34+B1tXVYYSOHDlilnt8fDxQqdTYpqamGqMpiI2NJQ8ODt6RyWQMOp2OQ56h7iWTybClUqmAx+Nhd5E89+zZg3mMeoKbG/qXzBubzQYmk0kRCAQKkypAGxwOxxYAMpRKZYRarXYi6OeoH77/2qaq5QX+0KFDmKeoD5gzJE0ikbh4RC6XA5fL1SmVSoJZFRg26XR638zMzOasBFrf/u1jIRRbLfz1Gg+dgxZQ066FO/0Oi00oISEBi4bB0D+xa9euZTilpaVIqlMSicRhNQJYs2exWHfJdtYdP8UMZw1P4EE+rYHWPgJ4O/8J30RZwvNXFlBQqwUbzzisSxqstrYWXFxcICgoaBkOqhm9Xv9La2vrV+YI6IODg3va2toY6FDRd+yJ9NBBNHhAcIYKarI3whOpBXSN2sKAloX9hp6enth76JcrKyuDsbExQCSW2pUrV6CkpEQbFBTke/v27WFTBJDny5pSStLhmhMs0cHC3xRwOd0Gnr+yhLJOL9jgGr4oN9RgmpubMQIxMTGQn5+/7P2enh5AKWKz2RdaW1u/NVY3OAsLi2d4PH5Gq9V+tPSAl5eX1NP+D5fy74mwkahd3Hr4zBLO18/8F/YODRQXFxv9jOh0Ovq0msVicZipojV4jSJQ/c+AsKyVsVisyo+p0vjcRDyQ7TQr3igV4OBCMwXrBW8a8pxEIt0SiURcc4pZGvaFaeNfIxKJsyQSSU4kEq2DPtA5ZR4kgLvTDGyw0oFy1hLaHltAdN4YZGVlwdL2rdVq4cCBA2gQqRcKhTHmwNHeqiNZZGRkoEajYY/0P/zZlUzAf/EJCaruTcPvvS8xBSxVwdDQEBQWFs6TyeTL1dXVKyreaA2YYshkMlump6dDAgMD8Q4OC/JFgwda6BNCMwDqiMh0Oh02DwwMDLxkMpkJOTk5d1fz3LBvNAIIXC6Xb5+cnHRAkw+aB1Fr9vPzW/HuzZs30ZCqs7KyKqmoqFiYYt7CzKYgKiqKOj09fXhubu5TlUrFoFAoThEREfil3y6KREtLy6qpXE0Fa+LM5XLpcrn8Rx6Ptx/NAciQ9svLy98NAQQYHh7+mZ2dnYDP52Og2dnZ6rq6Ops1eWDk0LqY+/j4POPz+W7Xrl1D03KtSCT6/J0SYLPZlyQSSZpOp5vj8/nOPB5v6p0SQGBIKRQK5bxQKLy+XnB072+HtI8zN1mH+gAAAABJRU5ErkJggg==",TA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEUAAAACAAAEAAAGAAADAAAFAAAKAAAHAAAQAAABAAACAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAAAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAABAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAADAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAD///+W3QZCAAAAqHRSTlMAAAAAAAAAAAAAAQoWHBsBEjt6vtTd1bx8QBUPWMTy9MhcAS6w+Pm1MwJI2d5RAknk5wEy2+jO6f7r0OU1ELP8cJnh0crL0+PmnWsRVfc8BigiFCMqB2LC9kVKEj77aFJGzx6/lwG7eVvtMS/sIRvcJtJEEwu5BAOLCnaW8wXaw6DH/Yg0OZBee7fwHvH6c2XJkjbGFhlPUzjgOp8tK+rWuDUOxR0pzW3NoAbKAAAAAWJLR0SpJw8GBAAAAAd0SU1FB+gCEwk0EkntIW4AAAIlSURBVDjLY2AgATBycfPw8vFw8zNhk2XiFxAUEhYRFRUTl5CUwlDDxCQtIyu3AgrkFRQFmFlQ5JWUVVRXIAE1dQ0uJBVMmlraK9CAjq4e3BomVn2DFRjAUNcIagYLk7HJihWmZuYWMDkLSyvrFStEbZgYIQbY2q1YYe8greFo7eTs4urm7uFpY+sFVC3uzQIxwMcX6HA/Jhb/gMAgW1up4JBQJiYtoJt9w1hBKpgEwoGmRkSi+JwpSg0oqBANVhAD8n9sHKqCeJACuQSgIAuzEMhdiUmoCqSSQaIpqSwMTNxpIHens6KEHAtTRixQOJmbCajWDcjKzEILfKbsHKCwiBRQAa8OkGUQjK4g1x0oLMrHxMCSlw9keRSgKwgwBArn84GsKATFXwK6gqIIoLBVMVBBSSnIvZ5lqI4srwCJJleyMLCwVoGYHjHI3mBhS7AEiVYrAQ1mkqwBsZ0lyxDRW6tfB044+kzgoK5fkdPQ2GTe3CJVzgIynae1LRMcq67FTOAwaVeT7yjoXGHRJQ4KTpbu0h5IxPf2sYOtZRLoXOHbHzJBzX5iOchKTQlowhAWYIIG6yTRFZOnTJ02fQpEw4wesPzMWdAEw8DCMc3QfvacYmlNiIK55iD5eTIMcH8x6U0TtZg3f8FUJoQCJx89pLBjZFjYqbrCKQmuQE18lhJq/LMs6l/svASiYGn+suW2LOh5i4XTdm4oWJClsiWIi4WBagAAZejSV585JrMAAAAASUVORK5CYII=",HA={style:{cursor:"pointer"}},JA={class:"barrage-text"},OA={style:{display:"flex","align-items":"center","flex-wrap":"wrap"}},qA=["src"],LA=K({__name:"meme-dialog",props:L({memeArr:{},loading:{type:Boolean},emptyText:{}},{modelValue:{},modelModifiers:{}}),emits:L(["refresh"],["update:modelValue"]),setup(R,{emit:B}){const b=uA(R,"modelValue"),f=B,u=DA(MA,yA,2e3);async function h(e){const n=e.content,c=u(n);if(!(!c||c==="limitedSuccess")){if(_A(),await CA(e.category,e.id)){f("refresh");return}xA()}}const E=l([]),s=()=>{SA.get("/machine/dictList").then(e=>{e.code==="200"&&(E.value=e.data)}).catch(e=>{console.error("获取字典数据失败",e)})},_=e=>{if(!e||e.trim()==="")return[];const n=Array.from(new Set(e.split(",").map(v=>v.trim())));if(!E.value)return n.map(()=>({label:"",iconUrl:""}));const c=new Map(E.value.map(v=>[String(v.dictValue).trim(),v]));return n.map(v=>{const C=c.get(v);return C?{label:C.dictLabel,iconUrl:C.iconUrl}:{label:"",iconUrl:""}})};return s(),(e,n)=>{const c=eA,D=tA,v=aA,C=z,y=oA,M=j,k=sA;return i(),d("div",null,[a(M,{modelValue:b.value,"onUpdate:modelValue":n[0]||(n[0]=r=>b.value=r),class:"dialog-main"},{header:o(()=>[cA(e.$slots,"default",{},void 0,!0)]),default:o(()=>[mA((i(),W(y,{data:e.memeArr,stripe:"","empty-text":e.emptyText,"cell-class-name":"hover-pointer",onRowClick:h},{default:o(()=>[a(D,{align:"center",width:"60"},{default:o(r=>[a(c,{round:"",effect:"plain"},{default:o(()=>[g(w(r.$index+1),1)]),_:2},1024)]),_:1}),a(D,{prop:"content"},{default:o(r=>[a(v,{placement:"top",width:"auto",trigger:"hover"},{reference:o(()=>[A("div",HA,[A("span",JA,w(r.row.content),1)])]),default:o(()=>[A("div",OA,[(i(!0),d(Q,null,H(_(r.row.tags),(x,V)=>(i(),d("div",{key:V,style:{"margin-right":"8px"}},[a(c,{round:"",effect:"dark",style:{fontSize:"16px",cursor:"pointer"}},{default:o(()=>[x.iconUrl?(i(),d("img",{key:0,src:x.iconUrl,style:{width:"16px",height:"16px","object-fit":"cover","vertical-align":"middle"}},null,8,qA)):J("",!0),g(" "+w(x.label),1)]),_:2},1024)]))),128))])]),_:2},1024)]),_:1}),a(D,{align:"center",width:"100"},{default:o(r=>[a(C,{type:"primary",class:"copy-btn",onClick:pA(x=>h(r.row),["stop"])},{default:o(()=>[n[1]||(n[1]=g("复制 (")),a(bA,{num:r.row.copyCount},null,8,["num"]),n[2]||(n[2]=g(")"))]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","empty-text"])),[[k,e.loading]])]),_:3},8,["modelValue"])])}}}),T=U(LA,[["__scopeId","data-v-9d7397b4"]]),XA={class:"header"},zA={class:"header-content"},jA={class:"header-actions"},WA={class:"elinput"},GA={class:"dialog-header"},NA={class:"dialog-header"},Y="我还没有加载完喔~~",PA="https://pic.imgdb.cn/item/66992905d9c307b7e9f0136e.png",ZA="https://pic.imgdb.cn/item/66dd952dd9c307b7e9321a73.png",$A=K({__name:"header-bar",setup(R){const B=kA(),b=N(),f=l(!1),u=l(!1),h=l([]),E=l(!0);async function s(){const m=await VA();m&&(h.value=m,E.value=!1)}function _(){u.value=!0,e.value=!1,E.value=!0,s()}const e=l(!1),n=l([]),c=l(!0);async function D(){const m=await IA();m&&(n.value=m,c.value=!1)}function v(){u.value=!1,e.value=!0,c.value=!0,D()}const C=G(()=>!(B.value&&b.path!=="/home"));s();const y=l(0);setInterval(()=>{const m=h.value.length;y.value=(y.value+1)%m},5e3);const M=l(""),k=l(!1),r=l([]),x=l(!0),V=l(Y);async function F(){x.value=!0,k.value=!0,V.value=Y;const m=await QA(M.value);if(x.value=!1,!m){r.value=[];return}if(m==="notfound"){r.value=[],V.value="没有找到搜索结果。想要补充更多烂梗？请去首页投稿！";return}r.value=m}EA(()=>{setTimeout(()=>{f.value=!0,setInterval(()=>{f.value=!0},2*60*60*1e3)},60*60*1e3)});const P=()=>{window.open("https://www.wjx.cn/vm/rQUgnS0.aspx#")};return(m,t)=>{const Z=nA,S=z,$=lA,O=iA,AA=j;return i(),d(Q,null,[A("div",XA,[A("div",zA,[t[7]||(t[7]=A("a",{href:"https://www.douyu.com/6657",target:"_blank",class:"logo-link"},[A("img",{src:BA,alt:"大🐖头",class:"logo-img"}),A("p",{class:"header-title"},"斗鱼玩机器烂梗收集")],-1)),A("div",jA,[C.value?(i(),d("img",{key:0,src:UA,alt:"热门",class:"hot-barrage-img",onClick:_})):J("",!0),C.value?(i(),d("div",{key:1,onClick:_,class:"hot-barrage"},[a(gA,{name:"fade"},{default:o(()=>{var p,q;return[(i(),d("span",{key:y.value,class:"hot-barrage-span"},"热门："+w(((q=(p=h.value)==null?void 0:p[y.value])==null?void 0:q.content)||""),1))]}),_:1})])):J("",!0),A("div",WA,[a($,{modelValue:M.value,"onUpdate:modelValue":t[0]||(t[0]=p=>M.value=p),placeholder:"搜索烂梗",clearable:"",onKeydown:fA(F,["enter"])},{append:o(()=>[a(S,{type:"primary",onClick:F},{default:o(()=>[a(Z,null,{default:o(()=>[a(I(RA))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a(S,{type:"primary",onClick:P,class:"complaint-button"},{default:o(()=>t[5]||(t[5]=[A("span",null,[g(" 上传照片 "),A("br"),g(" 建议/提交BUG ")],-1)])),_:1}),t[6]||(t[6]=hA('<a href="https://sb6657.cn/#/Tampermonkey" data-v-0eaf8e37><img src="https://pic.imgdb.cn/item/6704f830d29ded1a8c738f70.png" alt="油猴" class="icon-img" data-v-0eaf8e37></a><a href="https://yuba.douyu.com/feed/2639094748291342931" target="_blank" data-v-0eaf8e37><img src="'+FA+'" alt="douyu" class="icon-img" data-v-0eaf8e37></a><a href="https://github.com/SEhzm/sb6657/" target="_blank" data-v-0eaf8e37><img src="'+TA+'" alt="github" class="icon-img" data-v-0eaf8e37></a>',3)),a(O,{class:"icon-img-rounded",src:PA,"hide-on-click-modal":!0,"zoom-rate":1.2,"max-scale":7,lazy:"","min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/zfb.jpg"],"initial-index":4,fit:"cover"}),a(O,{class:"icon-img-rounded",src:ZA,"hide-on-click-modal":!0,"zoom-rate":1.2,lazy:"","max-scale":7,"min-scale":.2,"preview-src-list":["http://cdn.dgq63136.icu/wx.jpg"],"initial-index":4,fit:"cover"})])]),a(T,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=p=>u.value=p),memeArr:h.value,loading:E.value,emptyText:Y,onRefresh:s},{default:o(()=>[A("div",GA,[t[9]||(t[9]=A("div",null,"24h热门烂梗",-1)),A("div",null,[a(S,{onClick:v},{default:o(()=>t[8]||(t[8]=[g("查看近七天热门")])),_:1})])])]),_:1},8,["modelValue","memeArr","loading"]),a(T,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=p=>e.value=p),memeArr:n.value,loading:c.value,emptyText:Y,onRefresh:D},{default:o(()=>[A("div",NA,[t[11]||(t[11]=A("div",null,"七天热门烂梗",-1)),A("div",null,[a(S,{onClick:_},{default:o(()=>t[10]||(t[10]=[g("查看近24h热门")])),_:1})])])]),_:1},8,["modelValue","memeArr","loading"]),a(T,{modelValue:k.value,"onUpdate:modelValue":t[3]||(t[3]=p=>k.value=p),memeArr:r.value,loading:x.value,emptyText:V.value,onRefresh:F},{default:o(()=>t[12]||(t[12]=[A("div",{class:"search-tips"},"烂梗搜索结果:",-1)])),_:1},8,["modelValue","memeArr","loading","emptyText"])]),a(AA,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=p=>f.value=p),title:"谢谢你",width:"1100"},{default:o(()=>t[13]||(t[13]=[A("img",{src:"http://cdn.dgq63136.icu/zfb.jpg",alt:"",width:"1000"},null,-1)])),_:1},8,["modelValue"])],64)}}}),Ae=U($A,[["__scopeId","data-v-0eaf8e37"]]),ee={class:"footer"},te={class:"content"},ae={class:"date-font"},oe=K({__name:"footer-bar",setup(R){const B=l(0),b=new Date("2025-02-20"),f=new Date;B.value=Math.ceil((b.getTime()-f.getTime())/(1e3*3600*24));const u=new Date("2024-02-07"),h=G(()=>{const s=new Date().getTime()-u.getTime();return Math.floor(s/(1e3*60*60*24))});return(E,s)=>(i(),d("div",ee,[A("div",te,[A("div",ae,[s[0]||(s[0]=g("距服务器到期还有")),A("span",null,w(B.value),1),s[1]||(s[1]=g("天"))]),A("div",null,[s[2]||(s[2]=A("a",{href:"https://ipw.cn/ipv6webcheck/?site=sb6657.cn",title:"",target:"_blank",style:{color:"black"}},[A("img",{style:{display:"inline-block","vertical-align":"middle",width:"150px"},alt:"",src:"https://static.ipw.cn/icon/ipv6-s5.svg"})],-1)),g(" 本站已运行"+w(h.value)+"天 域名所有: ",1),s[3]||(s[3]=A("a",{href:"https://yuba.douyu.com/member/LW7rKJ9qVVwG/main/news",target:"_blank"},"@陈苏何",-1))])])]))}}),se=U(oe,[["__scopeId","data-v-f8de6f2b"]]),ne={class:"tab"},le={class:"tab-container"},ie=["onClick"],re={class:"main-content"},de={class:"sidebar"},ue={class:"sidebar-icon"},ce=["src"],me={class:"content"},pe={href:"https://github.com/SEhzm/sb6657/blob/master/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.md"},Ee={class:"version"},ge=K({__name:"MainLayout",setup(R){const B=N(),b=KA();function f(u){b.push(u)}return(u,h)=>{const E=rA,s=dA,_=wA("router-view");return i(),d(Q,null,[A("div",null,[a(Ae),A("div",ne,[A("div",le,[(i(!0),d(Q,null,H(I(X),(e,n)=>(i(),d("div",{class:vA(`tab1 ${e.path===I(B).path?"selected":"none"}`),key:e.path,onClick:c=>f(e.path)},w(e.text),11,ie))),128))])]),A("div",re,[A("div",de,[a(s,{router:"",class:"sidebar-el-menu","default-active":u.$route.path},{default:o(()=>[(i(!0),d(Q,null,H(I(X),(e,n)=>(i(),W(E,{key:e.path,index:e.path},{default:o(()=>[A("div",ue,[A("img",{src:e.icon,alt:""},null,8,ce)]),A("span",null,w(e.text),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])]),A("div",me,[a(_)])]),a(se)]),A("a",pe,[A("span",Ee,"版本: "+w(I(YA)),1)])],64)}}}),Se=U(ge,[["__scopeId","data-v-de364f63"]]);export{Se as default};
