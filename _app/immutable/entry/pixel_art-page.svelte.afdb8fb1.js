import{S as mt,i as vt,s as gt,k as _,a as N,l as m,m as S,h as k,c as P,n as u,b as nt,C as h,J as E,D as rt,N as ct,K as bt,y as yt,z as kt,A as wt,g as ot,d as st,B as It}from"../chunks/index.fc85c77a.js";import{C as Et}from"../chunks/console.21c46750.js";function ft(l,t,n){const o=l.slice();return o[25]=t[n],o[27]=n,o}function ht(l,t,n){const o=l.slice();return o[28]=t[n],o[27]=n,o}function dt(l){let t,n,o,c;function i(){return l[17](l[27])}function r(...d){return l[18](l[27],...d)}return{c(){t=_("div"),this.h()},l(d){t=m(d,"DIV",{class:!0}),S(t).forEach(k),this.h()},h(){u(t,"class",n=l[28]+" "+l[0][l[27]]+" svelte-1atfmqu")},m(d,g){nt(d,t,g),o||(c=[E(t,"click",i),E(t,"mousemove",r)],o=!0)},p(d,g){l=d,g&1&&n!==(n=l[28]+" "+l[0][l[27]]+" svelte-1atfmqu")&&u(t,"class",n)},d(d){d&&k(t),o=!1,bt(c)}}}function pt(l){let t,n,o;function c(){return l[19](l[27])}return{c(){t=_("input"),this.h()},l(i){t=m(i,"INPUT",{type:!0,class:!0}),this.h()},h(){u(t,"type","button"),u(t,"class","button "+l[25]+" svelte-1atfmqu"),t.value="   "},m(i,r){nt(i,t,r),n||(o=E(t,"click",c),n=!0)},p(i,r){l=i},d(i){i&&k(t),n=!1,o()}}}function qt(l){let t,n,o,c,i,r,d,g,w,G,q,C,Y,V,H,R,Q,v,M,z,A,B,L,x,O,tt,e,s,I,W,at,J=l[8],b=[];for(let f=0;f<J.length;f+=1)b[f]=dt(ht(l,J,f));let K=l[1],y=[];for(let f=0;f<K.length;f+=1)y[f]=pt(ft(l,K,f));return{c(){t=_("div"),n=_("div");for(let f=0;f<b.length;f+=1)b[f].c();o=N(),c=_("div"),i=_("div"),r=_("div");for(let f=0;f<y.length;f+=1)y[f].c();d=N(),g=_("div"),w=_("input"),G=N(),q=_("div"),C=_("input"),Y=N(),V=_("input"),H=N(),R=_("input"),Q=N(),v=_("div"),M=_("input"),z=N(),A=_("input"),B=N(),L=_("input"),x=N(),O=_("input"),tt=N(),e=_("input"),s=N(),I=_("input"),this.h()},l(f){t=m(f,"DIV",{class:!0});var U=S(t);n=m(U,"DIV",{class:!0});var a=S(n);for(let $=0;$<b.length;$+=1)b[$].l(a);a.forEach(k),o=P(U),c=m(U,"DIV",{class:!0});var D=S(c);i=m(D,"DIV",{class:!0});var et=S(i);r=m(et,"DIV",{class:!0});var ut=S(r);for(let $=0;$<y.length;$+=1)y[$].l(ut);ut.forEach(k),d=P(et),g=m(et,"DIV",{class:!0});var it=S(g);w=m(it,"INPUT",{type:!0,class:!0,name:!0,id:!0}),it.forEach(k),et.forEach(k),G=P(D),q=m(D,"DIV",{class:!0});var F=S(q);C=m(F,"INPUT",{type:!0,class:!0}),Y=P(F),V=m(F,"INPUT",{type:!0,class:!0}),H=P(F),R=m(F,"INPUT",{type:!0,class:!0}),F.forEach(k),Q=P(D),v=m(D,"DIV",{class:!0});var T=S(v);M=m(T,"INPUT",{type:!0,class:!0}),z=P(T),A=m(T,"INPUT",{type:!0,class:!0}),B=P(T),L=m(T,"INPUT",{type:!0,class:!0}),x=P(T),O=m(T,"INPUT",{type:!0,class:!0}),tt=P(T),e=m(T,"INPUT",{type:!0,class:!0}),s=P(T),I=m(T,"INPUT",{type:!0,class:!0}),T.forEach(k),D.forEach(k),U.forEach(k),this.h()},h(){u(n,"class","face svelte-1atfmqu"),u(r,"class","colors svelte-1atfmqu"),u(w,"type","color"),u(w,"class","button2 svelte-1atfmqu"),u(w,"name","rgb"),u(w,"id","rgb"),u(g,"class","rgb svelte-1atfmqu"),u(i,"class","painting svelte-1atfmqu"),u(C,"type","button"),u(C,"class","button svelte-1atfmqu"),C.value="CREATE SET",u(V,"type","button"),u(V,"class","button svelte-1atfmqu"),V.value="RANDOM SET",u(R,"type","button"),u(R,"class","button svelte-1atfmqu"),R.value="RESET",u(q,"class","set svelte-1atfmqu"),u(M,"type","button"),u(M,"class","button svelte-1atfmqu"),M.value="@",u(A,"type","button"),u(A,"class","button svelte-1atfmqu"),A.value="▲",u(L,"type","button"),u(L,"class","button svelte-1atfmqu"),L.value="↻",u(O,"type","button"),u(O,"class","button svelte-1atfmqu"),O.value="◄",u(e,"type","button"),u(e,"class","button svelte-1atfmqu"),e.value="▼",u(I,"type","button"),u(I,"class","button svelte-1atfmqu"),I.value="►",u(v,"class","oriantation svelte-1atfmqu"),u(c,"class","input svelte-1atfmqu"),u(t,"class","container svelte-1atfmqu")},m(f,U){nt(f,t,U),h(t,n);for(let a=0;a<b.length;a+=1)b[a].m(n,null);h(t,o),h(t,c),h(c,i),h(i,r);for(let a=0;a<y.length;a+=1)y[a].m(r,null);h(i,d),h(i,g),h(g,w),h(c,G),h(c,q),h(q,C),h(q,Y),h(q,V),h(q,H),h(q,R),h(c,Q),h(c,v),h(v,M),h(v,z),h(v,A),h(v,B),h(v,L),h(v,x),h(v,O),h(v,tt),h(v,e),h(v,s),h(v,I),W||(at=[E(window,"keydown",l[16]),E(C,"click",l[2]),E(V,"click",l[3]),E(R,"click",l[4]),E(M,"click",l[9]),E(A,"click",l[11]),E(L,"click",l[10]),E(O,"click",l[14]),E(e,"click",l[12]),E(I,"click",l[13])],W=!0)},p(f,[U]){if(U&417){J=f[8];let a;for(a=0;a<J.length;a+=1){const D=ht(f,J,a);b[a]?b[a].p(D,U):(b[a]=dt(D),b[a].c(),b[a].m(n,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=J.length}if(U&66){K=f[1];let a;for(a=0;a<K.length;a+=1){const D=ft(f,K,a);y[a]?y[a].p(D,U):(y[a]=pt(D),y[a].c(),y[a].m(r,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=K.length}},i:rt,o:rt,d(f){f&&k(t),ct(b,f),ct(y,f),W=!1,bt(at)}}}const p=100,Dt=0,Tt=0;function Nt(l,t){return Math.trunc(l+Math.random()*(t-l))}function Pt(l){return l[Math.trunc(Math.random()*l.length)]}function lt(l){return Pt(l)}function X(l){return l[0]*p+l[1]}function _t(l){return[Math.trunc(l/p),l%p]}function Z(l){let t=[];return l.forEach(n=>{n.forEach(o=>{t.push(o)})}),t}function j(l,t){let n=[],o=Math.abs(t[0]-l[0]),c=Math.abs(t[1]-l[1]);for(let i=0;i<o+1;++i)for(let r=0;r<c+1;++r)n.push(X([l[0]+i,l[1]])+r);return n}function Ct(){const l=j([3,2],[4,3]),t=j([3,5],[4,6]);let n={pos:Z([[X([0,1])],[X([1,2])],[X([0,5])],[X([1,6])]]),colors:[lt(["green","orange"])]},o={pos:Z([j([2,1],[6,7])]),colors:[lt(["green","orange"])]},c={pos:Z([l,t]),colors:["blue","red"]};Z([j([7,1],[7,7])]);let i={pos:Z([j([7,2],[8,2]),j([7,4],[8,4]),j([7,6],[8,6])]),colors:[lt(["green","yellow"])]};return[o,n,c,i]}function Ut(){return Ct()}function St(){let l="";for(let t=0;t<p;++t){for(let n=0;n<p;++n)t==0&&n!=0&&n!=p-1?l+="t":t==p-1&&n!=0&&n!=p-1?l+="b":t!=0&&t!=p-1&&n==0?l+="l":t!=0&&t!=p-1&&n==p-1?l+="r":l+="p";l+=" "}return l}function Vt(l,t,n){const o=p*p;let c=1;const i=["white","blue","red","green","orange","yellow"];let r=Array(o).fill("white");function d(){let e=Nt(0,6);return i[e]}function g(e){e.pos.forEach(s=>{let I=lt(e.colors);n(0,r[s+Dt+Tt*p]=I,r)})}function w(){Ut().forEach(s=>{g(s)})}function G(){for(let e=0;e<o;++e){let s=d();n(0,r[e]=s,r)}}function q(){for(let e=0;e<o;++e)d(),n(0,r[e]="white",r)}function C(e){n(0,r[e]=i[c],r)}function Y(e){c=e}function V(e,s){e.buttons==1&&C(s)}const H=Array.from(St()).map(e=>{if(e=="p")return"pixel";if(e=="t")return"pixel border_top";if(e=="b")return"pixel border_bottom";if(e=="l")return"pixel border_left";if(e=="r")return"pixel border_rigth";if(e=="c")return"center"}).filter(e=>e);function R(){for(let e=0;e<o;++e){let s=_t(e),I=X([s[1],p-1-s[0]]);n(0,r[I]=r[e],r)}}function Q(){let e=[];for(let s=0;s<o;++s){let I=_t(s),W=X([I[1],p-1-I[0]]);e[W]=r[s]}n(0,r=e)}function v(){for(let e=0;e<p;++e)r.push(r.shift());n(0,r)}function M(){for(let e=0;e<p;++e)r.unshift(r.pop());n(0,r)}function z(){let e=[];for(let s=o-1;s>=0;--s)e[s]=r[s-1];for(let s=0;s<o;s+=p)e[s]=r[s+p-1];n(0,r=e)}function A(){let e=[];for(let s=0;s<o;++s)e[s]=r[s+1];for(let s=p-1;s<o;s+=p)e[s]=r[s-p+1];n(0,r=e)}function B(e){console.log(e),e.key=="ArrowUp"&&v(),e.key=="ArrowDown"&&M(),e.key=="ArrowLeft"&&A(),e.key=="ArrowRight"&&z()}return[r,i,w,G,q,C,Y,V,H,R,Q,v,M,z,A,B,e=>B(e),e=>C(e),(e,s)=>V(s,e),e=>Y(e)]}class Mt extends mt{constructor(t){super(),vt(this,t,Vt,qt,gt,{})}}function At(l){let t,n;return t=new Mt({}),{c(){yt(t.$$.fragment)},l(o){kt(t.$$.fragment,o)},m(o,c){wt(t,o,c),n=!0},i(o){n||(ot(t.$$.fragment,o),n=!0)},o(o){st(t.$$.fragment,o),n=!1},d(o){It(t,o)}}}function Rt(l){let t,n,o,c,i,r=At();return c=new Et({}),{c(){t=_("div"),n=_("div"),r&&r.c(),o=N(),yt(c.$$.fragment),this.h()},l(d){t=m(d,"DIV",{class:!0});var g=S(t);n=m(g,"DIV",{class:!0});var w=S(n);r&&r.l(w),o=P(w),kt(c.$$.fragment,w),w.forEach(k),g.forEach(k),this.h()},h(){u(n,"class","content svelte-aidymc"),u(t,"class","page svelte-aidymc")},m(d,g){nt(d,t,g),h(t,n),r&&r.m(n,null),h(n,o),wt(c,n,null),i=!0},p:rt,i(d){i||(ot(r),ot(c.$$.fragment,d),i=!0)},o(d){st(r),st(c.$$.fragment,d),i=!1},d(d){d&&k(t),r&&r.d(),It(c)}}}class $t extends mt{constructor(t){super(),vt(this,t,null,Rt,gt,{})}}export{$t as default};
