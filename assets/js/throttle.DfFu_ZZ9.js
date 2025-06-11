function o(e,r,n){let t=null;return(...l)=>{if(t)return r();{const u=e(...l);return t=setTimeout(()=>{t=null},n),u}}}export{o as t};
