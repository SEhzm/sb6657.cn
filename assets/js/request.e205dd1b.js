import{a as s}from"./axios.28bc18a3.js";const r=s.create({baseURL:"http://localhost:9090",timeout:6e4});r.interceptors.request.use(e=>(e.headers["Content-Type"]="application/json;charset=utf-8",e),e=>Promise.reject(e));r.interceptors.response.use(e=>{let t=e.data;return e.config.responseType==="blob"||typeof t=="string"&&(t=t&&JSON.parse(t)),t},e=>(console.log("err"+e),Promise.reject(e)));export{r};
