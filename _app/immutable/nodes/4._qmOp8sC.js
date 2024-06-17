import{s as re,a as V,e as te,n as oe}from"../chunks/scheduler.FGUOCI5T.js";import{S as pe,i as ue,k as K,l as Q,m as U,n as X,o as A,p as D,e as r,s as p,c as o,q as _,f as u,a as ne,d as n,u as le,g as l}from"../chunks/index.TPYxZWDS.js";import{P as me,g as fe,a as se}from"../chunks/post_layout.CsWm-FFG.js";import{I as ae}from"../chunks/footer.CL4bNWen.js";function _e(w){let s,f="Our team, ‘Bits & Pieces’, had a blast participating in the VSCTF event, and we placed 44th rank this time, It was a great run and we tackled some really interesting challenges! Here’s my writeup on the challs i solved in the CTF.",m,v,a,i,F='<a href="#reverse">Reverse:</a>',L,c,W='<a href="#intro-reversing">intro-reversing</a>',y,h,Z="<p>Flag will be printed out straight away when you run the binary.</p>",M,g,z='<p>File: <a href="https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/chall" rel="nofollow noopener noreferrer external" target="_blank">chall</a></p>',P,d,G="We are given an elf 64-bit file, and as you know it’s a rev chall. Boot up that disassembler! On opening the file in binary ninja.",q,k,C,j,x,J="First thing we can see in the main function, its printing something and then sleeps for god knows how long XD",O,$,N="it’s pretty straightforward, we just patch and rmeove that sleep command, then save it and run the file.",R,H,b,B,T,Y="Flag: <code>vsctf{1nTr0_r3v3rR51ng!}</code>",E,S,I;return C=new ae({props:{src:"/assets/vsctf2024/vs1.webp",alt:"image"}}),b=new ae({props:{src:"/assets/vsctf2024/vs2.webp",alt:"image"}}),{c(){s=r("p"),s.textContent=f,m=p(),v=r("hr"),a=p(),i=r("h2"),i.innerHTML=F,L=p(),c=r("h3"),c.innerHTML=W,y=p(),h=r("blockquote"),h.innerHTML=Z,M=p(),g=r("blockquote"),g.innerHTML=z,P=p(),d=r("p"),d.textContent=G,q=p(),k=r("p"),K(C.$$.fragment),j=p(),x=r("p"),x.textContent=J,O=p(),$=r("p"),$.textContent=N,R=p(),H=r("p"),K(b.$$.fragment),B=p(),T=r("p"),T.innerHTML=Y,E=p(),S=r("hr"),this.h()},l(e){s=o(e,"P",{"data-svelte-h":!0}),_(s)!=="svelte-hji0r9"&&(s.textContent=f),m=u(e),v=o(e,"HR",{}),a=u(e),i=o(e,"H2",{id:!0,"data-svelte-h":!0}),_(i)!=="svelte-1am8sdo"&&(i.innerHTML=F),L=u(e),c=o(e,"H3",{id:!0,"data-svelte-h":!0}),_(c)!=="svelte-12tb10q"&&(c.innerHTML=W),y=u(e),h=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),_(h)!=="svelte-1bdskq6"&&(h.innerHTML=Z),M=u(e),g=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),_(g)!=="svelte-19klq2m"&&(g.innerHTML=z),P=u(e),d=o(e,"P",{"data-svelte-h":!0}),_(d)!=="svelte-c07x4q"&&(d.textContent=G),q=u(e),k=o(e,"P",{});var t=ne(k);Q(C.$$.fragment,t),t.forEach(n),j=u(e),x=o(e,"P",{"data-svelte-h":!0}),_(x)!=="svelte-7lj3h0"&&(x.textContent=J),O=u(e),$=o(e,"P",{"data-svelte-h":!0}),_($)!=="svelte-et507s"&&($.textContent=N),R=u(e),H=o(e,"P",{});var ee=ne(H);Q(b.$$.fragment,ee),ee.forEach(n),B=u(e),T=o(e,"P",{"data-svelte-h":!0}),_(T)!=="svelte-1duuuj1"&&(T.innerHTML=Y),E=u(e),S=o(e,"HR",{}),this.h()},h(){le(i,"id","reverse"),le(c,"id","intro-reversing")},m(e,t){l(e,s,t),l(e,m,t),l(e,v,t),l(e,a,t),l(e,i,t),l(e,L,t),l(e,c,t),l(e,y,t),l(e,h,t),l(e,M,t),l(e,g,t),l(e,P,t),l(e,d,t),l(e,q,t),l(e,k,t),U(C,k,null),l(e,j,t),l(e,x,t),l(e,O,t),l(e,$,t),l(e,R,t),l(e,H,t),U(b,H,null),l(e,B,t),l(e,T,t),l(e,E,t),l(e,S,t),I=!0},p:oe,i(e){I||(X(C.$$.fragment,e),X(b.$$.fragment,e),I=!0)},o(e){A(C.$$.fragment,e),A(b.$$.fragment,e),I=!1},d(e){e&&(n(s),n(m),n(v),n(a),n(i),n(L),n(c),n(y),n(h),n(M),n(g),n(P),n(d),n(q),n(k),n(j),n(x),n(O),n($),n(R),n(H),n(B),n(T),n(E),n(S)),D(C),D(b)}}}function ve(w){let s,f;const m=[w[0],ie];let v={$$slots:{default:[_e]},$$scope:{ctx:w}};for(let a=0;a<m.length;a+=1)v=V(v,m[a]);return s=new me({props:v}),{c(){K(s.$$.fragment)},l(a){Q(s.$$.fragment,a)},m(a,i){U(s,a,i),f=!0},p(a,[i]){const F=i&1?fe(m,[i&1&&se(a[0]),i&0&&se(ie)]):{};i&2&&(F.$$scope={dirty:i,ctx:a}),s.$set(F)},i(a){f||(X(s.$$.fragment,a),f=!0)},o(a){A(s.$$.fragment,a),f=!1},d(a){D(s,a)}}}const ie={title:"VSCTF 2024 writeup",image:"/blogs/akasec_CTF_2024/akasec1.png",alt:"VSCTF",created:"2024-6-15",tags:["CTF","Reverse Engineer","Miscellaneous"],updated:"2024-06-17T17:10:24.583Z",images:[],slug:"/blogs/vs_CTF_2024/+page.svelte.md",path:"/blogs/vs_CTF_2024",toc:[{depth:2,title:"Reverse:",slug:"reverse"},{depth:3,title:"intro-reversing",slug:"intro-reversing"}]};function ce(w,s,f){return w.$$set=m=>{f(0,s=V(V({},s),te(m)))},s=te(s),[s]}class xe extends pe{constructor(s){super(),ue(this,s,ce,ve,re,{})}}export{xe as component};