import{S as oe,i as ae,s as ce,k as v,a as N,l as b,m as U,h as k,c as S,n as p,b as G,C as f,J as M,D as H,N as ee,K as ie,y as ue,z as pe,A as fe,g as Q,d as Z,B as he}from"../chunks/index.fc85c77a.js";import{C as _e}from"../chunks/console.21c46750.js";function te(t,e,l){const s=t.slice();return s[19]=e[l],s[21]=l,s}function le(t,e,l){const s=t.slice();return s[22]=e[l],s[21]=l,s}function ne(t){let e,l,s,a;function r(){return t[13](t[21])}function u(...c){return t[14](t[21],...c)}return{c(){e=v("div"),this.h()},l(c){e=b(c,"DIV",{class:!0}),U(e).forEach(k),this.h()},h(){p(e,"class",l=t[22]+" "+t[0][t[21]]+" svelte-as3peb")},m(c,d){G(c,e,d),s||(a=[M(e,"click",r),M(e,"mousemove",u)],s=!0)},p(c,d){t=c,d&1&&l!==(l=t[22]+" "+t[0][t[21]]+" svelte-as3peb")&&p(e,"class",l)},d(c){c&&k(e),s=!1,ie(a)}}}function re(t){let e,l,s;function a(){return t[15](t[21])}return{c(){e=v("input"),this.h()},l(r){e=b(r,"INPUT",{type:!0,class:!0}),this.h()},h(){p(e,"type","button"),p(e,"class","button "+t[19]+" svelte-as3peb"),e.value="   "},m(r,u){G(r,e,u),l||(s=M(e,"click",a),l=!0)},p(r,u){t=r},d(r){r&&k(e),l=!1,s()}}}function de(t){let e,l,s,a,r,u,c,d,w,P,O,D,Y,g,T,B,C,J,$,W,q,n,h,y=t[8],_=[];for(let i=0;i<y.length;i+=1)_[i]=ne(le(t,y,i));let j=t[1],m=[];for(let i=0;i<j.length;i+=1)m[i]=re(te(t,j,i));return{c(){e=v("div"),l=v("div");for(let i=0;i<_.length;i+=1)_[i].c();s=N(),a=v("div"),r=v("div");for(let i=0;i<m.length;i+=1)m[i].c();u=N(),c=v("div"),d=v("input"),w=N(),P=v("input"),O=N(),D=v("input"),Y=N(),g=v("div"),T=v("input"),B=N(),C=v("input"),J=N(),$=v("input"),W=N(),q=v("input"),this.h()},l(i){e=b(i,"DIV",{class:!0});var I=U(e);l=b(I,"DIV",{class:!0});var o=U(l);for(let R=0;R<_.length;R+=1)_[R].l(o);o.forEach(k),s=S(I),a=b(I,"DIV",{class:!0});var E=U(a);r=b(E,"DIV",{class:!0});var x=U(r);for(let R=0;R<m.length;R+=1)m[R].l(x);x.forEach(k),u=S(E),c=b(E,"DIV",{class:!0});var z=U(c);d=b(z,"INPUT",{type:!0,class:!0}),w=S(z),P=b(z,"INPUT",{type:!0,class:!0}),O=S(z),D=b(z,"INPUT",{type:!0,class:!0}),z.forEach(k),Y=S(E),g=b(E,"DIV",{class:!0});var A=U(g);T=b(A,"INPUT",{type:!0,class:!0}),B=S(A),C=b(A,"INPUT",{type:!0,class:!0}),J=S(A),$=b(A,"INPUT",{type:!0,class:!0}),W=S(A),q=b(A,"INPUT",{type:!0,class:!0}),A.forEach(k),E.forEach(k),I.forEach(k),this.h()},h(){p(l,"class","face svelte-as3peb"),p(r,"class","colors svelte-as3peb"),p(d,"type","button"),p(d,"class","button svelte-as3peb"),d.value="CREATE SET",p(P,"type","button"),p(P,"class","button svelte-as3peb"),P.value="RANDOM SET",p(D,"type","button"),p(D,"class","button svelte-as3peb"),D.value="RESET",p(c,"class","set svelte-as3peb"),p(T,"type","button"),p(T,"class","button svelte-as3peb"),T.value="@",p(C,"type","button"),p(C,"class","button svelte-as3peb"),C.value="UP",p($,"type","button"),p($,"class","button svelte-as3peb"),$.value="↻",p(q,"type","button"),p(q,"class","button svelte-as3peb"),q.value="DOWN",p(g,"class","oriantation svelte-as3peb"),p(a,"class","input svelte-as3peb"),p(e,"class","container svelte-as3peb")},m(i,I){G(i,e,I),f(e,l);for(let o=0;o<_.length;o+=1)_[o].m(l,null);f(e,s),f(e,a),f(a,r);for(let o=0;o<m.length;o+=1)m[o].m(r,null);f(a,u),f(a,c),f(c,d),f(c,w),f(c,P),f(c,O),f(c,D),f(a,Y),f(a,g),f(g,T),f(g,B),f(g,C),f(g,J),f(g,$),f(g,W),f(g,q),n||(h=[M(d,"click",t[2]),M(P,"click",t[3]),M(D,"click",t[4]),M(T,"click",t[9]),M(C,"click",t[11]),M($,"click",t[10]),M(q,"click",t[12])],n=!0)},p(i,[I]){if(I&417){y=i[8];let o;for(o=0;o<y.length;o+=1){const E=le(i,y,o);_[o]?_[o].p(E,I):(_[o]=ne(E),_[o].c(),_[o].m(l,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=y.length}if(I&66){j=i[1];let o;for(o=0;o<j.length;o+=1){const E=te(i,j,o);m[o]?m[o].p(E,I):(m[o]=re(E),m[o].c(),m[o].m(r,null))}for(;o<m.length;o+=1)m[o].d(1);m.length=j.length}},i:H,o:H,d(i){i&&k(e),ee(_,i),ee(m,i),n=!1,ie(h)}}}const V=81,ve=0,be=0;function me(t,e){return Math.trunc(t+Math.random()*(e-t))}function ge(t){return t[Math.trunc(Math.random()*t.length)]}function F(t){return ge(t)}function X(t){return t[0]*Math.sqrt(V)+t[1]}function se(t){return[Math.trunc(t/Math.sqrt(V)),t%Math.sqrt(V)]}function K(t){let e=[];return t.forEach(l=>{l.forEach(s=>{e.push(s)})}),e}function L(t,e){let l=[],s=Math.abs(e[0]-t[0]),a=Math.abs(e[1]-t[1]);for(let r=0;r<s+1;++r)for(let u=0;u<a+1;++u)l.push(X([t[0]+r,t[1]])+u);return l}function ye(){const t=L([3,2],[4,3]),e=L([3,5],[4,6]);let l={pos:K([[X([0,1])],[X([1,2])],[X([0,5])],[X([1,6])]]),colors:[F(["green","orange"])]},s={pos:K([L([2,1],[6,7])]),colors:[F(["green","orange"])]},a={pos:K([t,e]),colors:["blue","red"]};K([L([7,1],[7,7])]);let r={pos:K([L([7,2],[8,2]),L([7,4],[8,4]),L([7,6],[8,6])]),colors:[F(["green","yellow"])]};return[s,l,a,r]}function ke(){return ye()}function Ee(t,e,l){let s=1;const a=["white","blue","red","green","orange","yellow"];let r=Array(V).fill("white");function u(){let n=me(0,6);return a[n]}function c(n){n.pos.forEach(h=>{let y=F(n.colors);l(0,r[h+ve+be*Math.sqrt(V)]=y,r)})}function d(){ke().forEach(h=>{c(h)})}function w(){for(let n=0;n<V;++n){let h=u();l(0,r[n]=h,r)}}function P(){for(let n=0;n<V;++n)u(),l(0,r[n]="white",r)}function O(n){l(0,r[n]=a[s],r)}function D(n){s=n}function Y(n,h){n.buttons==1&&O(h)}const g=Array.from("ptttttttp lpppppppr lpppppppr lpppppppr lpppcpppr lpppppppr lpppppppr lpppppppr pbbbbbbbp").map(n=>{if(n=="p")return"pixel";if(n=="t")return"pixel border_top";if(n=="b")return"pixel border_bottom";if(n=="l")return"pixel border_left";if(n=="r")return"pixel border_rigth";if(n=="c")return"center"}).filter(n=>n);function T(){for(let n=0;n<V;++n){let h=se(n),y=X([h[1],8-h[0]]);console.log(y),l(0,r[y]=r[n],r)}}function B(){let n=[];for(let h=0;h<V;++h){let y=se(h),_=X([y[1],8-y[0]]);console.log(_),n[_]=r[h]}l(0,r=n)}function C(){for(let n=0;n<9;++n)r.push(r.shift());l(0,r)}function J(){for(let n=0;n<9;++n)r.unshift(r.pop());l(0,r)}return[r,a,d,w,P,O,D,Y,g,T,B,C,J,n=>O(n),(n,h)=>Y(h,n),n=>D(n)]}class Ie extends oe{constructor(e){super(),ae(this,e,Ee,de,ce,{})}}function we(t){let e,l;return e=new Ie({}),{c(){ue(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,a){fe(e,s,a),l=!0},i(s){l||(Q(e.$$.fragment,s),l=!0)},o(s){Z(e.$$.fragment,s),l=!1},d(s){he(e,s)}}}function De(t){let e,l,s,a,r,u=we();return a=new _e({}),{c(){e=v("div"),l=v("div"),u&&u.c(),s=N(),ue(a.$$.fragment),this.h()},l(c){e=b(c,"DIV",{class:!0});var d=U(e);l=b(d,"DIV",{class:!0});var w=U(l);u&&u.l(w),s=S(w),pe(a.$$.fragment,w),w.forEach(k),d.forEach(k),this.h()},h(){p(l,"class","content svelte-aidymc"),p(e,"class","page svelte-aidymc")},m(c,d){G(c,e,d),f(e,l),u&&u.m(l,null),f(l,s),fe(a,l,null),r=!0},p:H,i(c){r||(Q(u),Q(a.$$.fragment,c),r=!0)},o(c){Z(u),Z(a.$$.fragment,c),r=!1},d(c){c&&k(e),u&&u.d(),he(a)}}}class Te extends oe{constructor(e){super(),ae(this,e,null,De,ce,{})}}export{Te as default};
