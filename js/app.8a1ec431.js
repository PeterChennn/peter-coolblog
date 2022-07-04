(function(){"use strict";var t={611:function(t,e,n){var o=n(9242),r=n(3396);function s(t,e,n,o,s,a){const l=(0,r.up)("Navbar"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(i)],64)}const a=(0,r._)("h1",null,"Peter Blog",-1),l=(0,r.Uk)("Home"),i=(0,r.Uk)("Create Post");function u(t,e,n,o,s,u){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[a,(0,r._)("nav",null,[(0,r.Wm)(c,{to:{name:"home"}},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(c,{to:{name:"create"}},{default:(0,r.w5)((()=>[i])),_:1})])])}var c={},p=n(89);const d=(0,p.Z)(c,[["render",u]]);var v=d,g={components:{Navbar:v}};const m=(0,p.Z)(g,[["render",s]]);var w=m,f=n(678),h=n(7139);const y={class:"home"},b=(0,r._)("h1",null,"Home",-1),k={key:0},D={key:1,class:"layout"},_={key:2};function H(t,e,n,o,s,a){const l=(0,r.up)("PostList"),i=(0,r.up)("TagCloud"),u=(0,r.up)("Spinner");return(0,r.wg)(),(0,r.iD)("div",y,[b,o.error?((0,r.wg)(),(0,r.iD)("div",k,(0,h.zw)(o.error),1)):(0,r.kq)("",!0),o.posts.length?((0,r.wg)(),(0,r.iD)("div",D,[(0,r.Wm)(l,{posts:o.posts},null,8,["posts"]),(0,r.Wm)(i,{posts:o.posts},null,8,["posts"])])):((0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(u)]))])}const S={class:"post-list"};function W(t,e,n,o,s,a){const l=(0,r.up)("SinglePost");return(0,r.wg)(),(0,r.iD)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.posts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r.Wm)(l,{post:t},null,8,["post"])])))),128))])}const O={class:"post"},Z=(0,r._)("br",null,null,-1),z=(0,r._)("p",null,"繼續閱讀",-1);function T(t,e,n,o,s,a){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("h3",null,(0,h.zw)(n.post.title),1),(0,r._)("p",null,(0,h.zw)(o.snippet),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.post.tags,(t=>((0,r.wg)(),(0,r.iD)("span",{key:t}," #"+(0,h.zw)(t),1)))),128)),Z,(0,r.Wm)(l,{to:{name:"details",params:{id:n.post.id}}},{default:(0,r.w5)((()=>[z])),_:1},8,["to"])])}var C={props:["post"],setup(t){const e=(0,r.Fl)((()=>t.post.body.substring(0,20)+"..."));return{snippet:e}}};const P=(0,p.Z)(C,[["render",T]]);var x=P,K={components:{SinglePost:x},props:["posts"],setup(){}};const j=(0,p.Z)(K,[["render",W]]);var A=j;const Y={class:"tag-cloud"},U=(0,r._)("h3",null,"Tags",-1);function q(t,e,n,o,s,a){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Y,[U,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.tags,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r.Wm)(l,{to:{name:"tag",params:{tag:t}}},{default:(0,r.w5)((()=>[(0,r.Uk)(" #"+(0,h.zw)(t),1)])),_:2},1032,["to"])])))),128))])}var E=n(4870);const V=t=>{const e=(0,E.iH)([]),n=new Set;return t.forEach((t=>{t.tags.forEach((t=>n.add(t)))})),e.value=[...n],{tags:e}};var B=V,F={props:["posts"],setup(t){const{tags:e}=B(t.posts);return{tags:e}}};const I=(0,p.Z)(F,[["render",q]]);var L=I,M=n(4275);n(7618);const N={apiKey:"AIzaSyA2O5xmhbwr8yoRtxwmOOJA5oXZ7AtlGyU",authDomain:"vue-firebase-sites-de191.firebaseapp.com",projectId:"vue-firebase-sites-de191",storageBucket:"vue-firebase-sites-de191.appspot.com",messagingSenderId:"266426501855",appId:"1:266426501855:web:6afc576629f6dbf30f376a"};M.Z.initializeApp(N);const R=M.Z.firestore(),G=M.Z.firestore.FieldValue.serverTimestamp,J=()=>{const t=(0,E.iH)([]),e=(0,E.iH)(null),n=async()=>{try{const e=await R.collection("posts").orderBy("createAt","desc").get();t.value=e.docs.map((t=>({...t.data(),id:t.id})))}catch(n){e.value=n.message,console.log(e.value)}};return{posts:t,error:e,load:n}};var X=J;const Q={class:"spin"};function $(t,e,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div",Q)}var tt={};const et=(0,p.Z)(tt,[["render",$]]);var nt=et,ot={name:"HomeView",components:{PostList:A,Spinner:nt,TagCloud:L},setup(){const{posts:t,error:e,load:n}=X();return n(),{posts:t,error:e}}};const rt=(0,p.Z)(ot,[["render",H]]);var st=rt;const at={key:0},lt={key:1,class:"post"},it={class:"pre"},ut={key:2};function ct(t,e,n,o,s,a){const l=(0,r.up)("Spinner");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o.error?((0,r.wg)(),(0,r.iD)("div",at,(0,h.zw)(o.error),1)):(0,r.kq)("",!0),o.post?((0,r.wg)(),(0,r.iD)("div",lt,[(0,r._)("h3",null,(0,h.zw)(o.post.title),1),(0,r._)("p",it,(0,h.zw)(o.post.body),1),(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>o.handleClick&&o.handleClick(...t)),class:"delete"},"delete post")])):((0,r.wg)(),(0,r.iD)("div",ut,[(0,r.Wm)(l)]))],64)}n(1703);const pt=t=>{const e=(0,E.iH)(null),n=(0,E.iH)(null),o=async()=>{try{let n=await R.collection("posts").doc(t).get();if(!n.exists)throw Error("That post does not exist");e.value={...n.data(),id:n.id}}catch(o){n.value=o.message,console.log(n.value)}};return{post:e,error:n,load:o}};var dt=pt,vt={props:["id"],components:{Spinner:nt},setup(t){const e=(0,f.yj)(),n=(0,f.tv)(),{post:o,error:r,load:s}=dt(e.params.id);s();const a=async()=>{await R.collection("posts").doc(t.id).delete(),n.push("/")};return{post:o,error:r,handleClick:a}}};const gt=(0,p.Z)(vt,[["render",ct]]);var mt=gt;const wt={class:"create"},ft=(0,r._)("label",null,"Title: ",-1),ht=(0,r._)("label",null,"Content:",-1),yt=(0,r._)("label",null,"Tags (hit enter to add a tag)",-1),bt=(0,r._)("button",null,"Add Post",-1);function kt(t,e,n,s,a,l){return(0,r.wg)(),(0,r.iD)("div",wt,[(0,r._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>s.handleSubmit&&s.handleSubmit(...t)),["prevent"]))},[ft,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t),type:"text",required:""},null,512),[[o.nr,s.title]]),ht,(0,r.wy)((0,r._)("textarea",{rows:"10","onUpdate:modelValue":e[1]||(e[1]=t=>s.body=t),required:""},null,512),[[o.nr,s.body]]),yt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.tag=t),type:"text",onKeydown:e[3]||(e[3]=(0,o.D2)((0,o.iM)(((...t)=>s.handleKeydown&&s.handleKeydown(...t)),["prevent"]),["enter"]))},null,544),[[o.nr,s.tag]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.tags,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"pill"},"# "+(0,h.zw)(t),1)))),128)),bt],32)])}n(6699);var Dt={setup(){const t=(0,E.iH)(""),e=(0,E.iH)(""),n=(0,E.iH)(""),o=(0,E.iH)([]),r=(0,f.tv)(),s=()=>{o.value.includes(n.value)||(n.value=n.value.replace(/\s/,""),o.value.push(n.value)),n.value=""},a=async()=>{const n={title:t.value,body:e.value,tags:o.value,createAt:G()};await R.collection("posts").add(n);r.push({name:"home"})};return{title:t,body:e,tag:n,tags:o,handleKeydown:s,handleSubmit:a}}};const _t=(0,p.Z)(Dt,[["render",kt]]);var Ht=_t;const St={class:"tag"},Wt={key:0},Ot={key:1,class:"layout"},Zt={key:2};function zt(t,e,n,o,s,a){const l=(0,r.up)("PostList"),i=(0,r.up)("TagCloud"),u=(0,r.up)("Spinner");return(0,r.wg)(),(0,r.iD)("div",St,[o.error?((0,r.wg)(),(0,r.iD)("div",Wt,(0,h.zw)(t.Error),1)):(0,r.kq)("",!0),o.posts.length?((0,r.wg)(),(0,r.iD)("div",Ot,[(0,r.Wm)(l,{posts:o.postWithTag},null,8,["posts"]),(0,r.Wm)(i,{posts:o.posts},null,8,["posts"])])):((0,r.wg)(),(0,r.iD)("div",Zt,[(0,r.Wm)(u)]))])}var Tt={components:{PostList:A,Spinner:nt,TagCloud:L},setup(){const t=(0,f.yj)(),{posts:e,error:n,load:o}=X();o();const s=(0,r.Fl)((()=>e.value.filter((e=>e.tags.includes(t.params.tag)))));return{error:n,posts:e,postWithTag:s}}};const Ct=(0,p.Z)(Tt,[["render",zt]]);var Pt=Ct;const xt=(0,r._)("h1",null,"Real-time data",-1);function Kt(t,e,n,o,s,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[xt,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.posts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("div",null,(0,h.zw)(t.title),1)])))),128))],64)}var jt={setup(){const t=(0,E.iH)([]);return R.collection("posts").orderBy("createAt","desc").onSnapshot((e=>{let n=e.docs.map((t=>({...t.data(),id:t.id})));console.log("documents: ",n),t.value=n})),{posts:t}}};const At=(0,p.Z)(jt,[["render",Kt]]);var Yt=At;const Ut=[{path:"/",name:"home",component:st},{path:"/posts/:id",name:"details",component:mt,props:!0},{path:"/create",name:"create",component:Ht},{path:"/tags/:tag",name:"tag",component:Pt},{path:"/realtime",name:"realtime",component:Yt}],qt=(0,f.p7)({history:(0,f.PO)("/peter-blog/"),routes:Ut});var Et=qt;(0,o.ri)(w).use(Et).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],s=t[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(l=!1,s<a&&(a=s));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,a=o[0],l=o[1],i=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var c=i(n)}for(e&&e(o);u<a.length;u++)s=a[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunkpeter_blog"]=self["webpackChunkpeter_blog"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(611)}));o=n.O(o)})();
//# sourceMappingURL=app.8a1ec431.js.map