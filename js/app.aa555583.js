(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{2:"4e9aa560",3:"bd048528",4:"df44790a",5:"76b12da6",6:"b0ec93e5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"6ce91f73",3:"afe1b18e",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("0047");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b05d"),c=n("18d6"),u=n("a639");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],plugins:{LocalStorage:c["a"],SessionStorage:u["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],f={name:"App"},p=f,d=n("2877"),h=Object(d["a"])(p,l,s,!1,null,null,null),m=h.exports,g=n("2f62");r["a"].use(g["a"]);var v=function(){const e=new g["a"].Store({modules:{},strict:!1});return e},b=n("8c4f");const y=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))},{path:"editor",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"be56"))},{path:"settings",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"b41f"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var w=y;r["a"].use(b["a"]);var _=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:w,mode:"hash",base:""});return e},k=async function(){const e="function"===typeof v?await v({Vue:r["a"]}):v,t="function"===typeof _?await _({Vue:r["a"],store:e}):_;e.$router=t;const n={router:t,store:e,render:e=>e(m),el:"#q-app"};return{app:n,store:e,router:t}},P=n("bc3a"),j=n.n(P),O=n("b375"),S=n.n(O);const x={stepik_id:c["a"].getItem("stepik_id"),stepik_secret:c["a"].getItem("stepik_secret")};j.a.getAuthorizationCode=S.a.client(j.a.create(),{url:"https://stepik.org/oauth2/token/",grant_type:"client_credentials",client_id:x.stepik_id,client_secret:x.stepik_secret}),j.a.setAuthorizationToken=function(e){j.a.defaults.headers.common["Authorization"]="Bearer "+e.access_token,j.a.token=e.access_token,console.log("Токен степика записан")},j.a.handleError=function(e){return console.log("Ошибка при загрузке ресурса"),Promise.reject(e)},r["a"].prototype.$axios=j.a;var E=n("98c3"),A=n.n(E);const C="";async function T(){const{app:e,store:t,router:n}=await k();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),c=[void 0,A.a];for(let l=0;!1===o&&l<c.length;l++)if("function"===typeof c[l])try{await c[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:C})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new r["a"](e)}T()},"98c3":function(e,t){}});