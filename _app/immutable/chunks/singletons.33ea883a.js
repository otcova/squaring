import{w as c}from"./index.6dc968e9.js";var _;const g=((_=globalThis.__sveltekit_v4ikhj)==null?void 0:_.base)??"";var p;const v=((p=globalThis.__sveltekit_v4ikhj)==null?void 0:p.assets)??g,k="1678442093983",A="sveltekit:snapshot",R="sveltekit:scroll",T="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function y(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=b(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!a||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:a}}function O(e){let t=null,n=null,a=null,s=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),t===null&&(t=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=b(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function h(e){const t=c(e);let n=!0;function a(){n=!0,t.update(r=>r)}function s(r){n=!1,t.set(r)}function o(r){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:s,subscribe:o}}function E(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==k;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:a}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:h({}),page:h({}),navigating:c(null),updated:E()};export{T as I,f as P,R as S,A as a,x as b,O as c,S as d,g as e,y as f,I as g,U as h,m as i,L as s};
