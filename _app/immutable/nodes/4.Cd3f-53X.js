import{s as We,a as we,e as Se,n as Ne}from"../chunks/scheduler.FGUOCI5T.js";import{S as Ze,i as Ge,k as ue,l as Ce,m as me,n as fe,o as ve,p as de,e as p,s as a,H as _e,c as F,q as i,f as n,a as Ee,d as s,r as ge,u as he,g as l}from"../chunks/index.TPYxZWDS.js";import{P as Ye,g as et,a as Ke}from"../chunks/post_layout.CsWm-FFG.js";import{I as De}from"../chunks/footer.CL4bNWen.js";function tt(P){let o,u="Our team, ‘Bits & Pieces’, had a blast participating in the VSCTF event, and we placed 44th rank this time, It was a great run and we tackled some really interesting challenges! Here’s my writeup on the challs i solved in the CTF.",y,C,r,c,O='<a href="#reverse">Reverse:</a>',Q,m,be='<a href="#intro-reversing">intro-reversing</a>',U,v,xe="<p>Flag will be printed out straight away when you run the binary.</p>",V,d,Te='<p>File: <a href="https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/chall" rel="nofollow noopener noreferrer external" target="_blank">chall</a></p>',z,_,ke="We are given an elf 64-bit file, and as you know it’s a rev chall. Boot up that disassembler! On opening the file in binary ninja.",W,q,E,N,g,$e="First thing we can see in the main function, its printing something and then sleeps for god knows how long XD",Z,h,He="it’s pretty straightforward, we just patch and rmeove that sleep command, then save it and run the file.",G,B,D,Y,w,je="Flag: <code>vsctf{1nTr0_r3v3rR51ng!}</code>",ee,te,se,f,Le='<a href="#awa-jelly">awa-jelly</a>',le,b,Me='<p><a href="https://jellyc.tf/" rel="nofollow noopener noreferrer external" target="_blank">JellyCTF</a> has some amazing challenges on <a href="https://x.com/jellyhoshiumi" rel="nofollow noopener noreferrer external" target="_blank">Jelly Hoshiumi</a> (星海ジェリー), one of the few VTubers who loves CTF. Inspired by a challenge, I made one based on <a href="https://github.com/TempTempai/AWA5.0" rel="nofollow noopener noreferrer external" target="_blank">AWA5.0</a>. Can you find the redacted input that matches the screenshot?</p>',ae,A,x,ne,T,Pe='<p><a href="https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/awawa.txt" rel="nofollow noopener noreferrer external" target="_blank">awawa.txt</a></p>',oe,k,qe="Looking at the image, I immediately started experimenting with the output and given txt file.",pe,$,Be="First I wasn’t able to understand much on how the awa code works, so i tried to work around this by by running a test string as input to see what output we get. Running a few iterations,",Fe,I,Ue=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" py="true"><div class="language-id">py</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">1st</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> abcdefghijlmnoprstuwy0123456789_ -&gt; rlstuwyc01f2i3m4eb56g789_oadhjnp</span></div><div class='line'><span style="color: #EEFFFF">2nd</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> rlstuwyc01f2i3m4eb56g789_oadhjnp -&gt; 4feb56gs78w90_2ouladyhjnp3rtc1im</span></div><div class='line'><span style="color: #EEFFFF">3rd</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> 4feb56gs78w90_2ouladyhjnp3rtc1im -&gt; owuladyehj6n7p935frtgc1im_4bs802</span></div><div class='line'><span style="color: #EEFFFF">4th</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> owuladyehj6n7p935frtgc1im_4bs802 -&gt; 365frtguc1dihmn_aw4bys802polej79</span></div></code></div></pre>`,R,H,Ae="I noticed it just transposes text and is easy to just map out.",re,X,Ve=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" py="true"><div class="language-id">py</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">position_mapping </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span><span style="color: #F78C6C">17</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">11</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">15</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">16</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">18</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">20</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">21</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">22</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">23</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">5</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">24</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">25</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">12</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">26</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">27</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">28</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">6</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">29</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">30</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">31</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">32</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">13</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">7</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">9</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">14</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">19</span><span style="color: #89DDFF">]</span></div></code></div></pre>`,J,j,Oe="Now reversing this mapping and applying it on output string",ie,S,ze=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" py="true"><div class="language-id">py</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">1o1i_awlaw_aowsay3wa0awa!iJlooHi -&gt; J3lly_0oooosHii11i_awawawawaawa!</span></div></code></div></pre>`,K,L,Ie="And there you have it!",ce,M,Re="Flag: <code>vsctf{J3lly_0oooosHii11i_awawawawaawa!}</code>",ye;return E=new De({props:{src:"https://github.com/AkaniX3/Blog-page/blob/main/urara/assets/vsctf2024/vs1.webp",alt:"image"}}),D=new De({props:{src:"https://github.com/AkaniX3/Blog-page/blob/main/urara/assets/vsctf2024/vs2.webp",alt:"image"}}),x=new De({props:{src:"https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/vs3.png",alt:"image"}}),{c(){o=p("p"),o.textContent=u,y=a(),C=p("hr"),r=a(),c=p("h2"),c.innerHTML=O,Q=a(),m=p("h3"),m.innerHTML=be,U=a(),v=p("blockquote"),v.innerHTML=xe,V=a(),d=p("blockquote"),d.innerHTML=Te,z=a(),_=p("p"),_.textContent=ke,W=a(),q=p("p"),ue(E.$$.fragment),N=a(),g=p("p"),g.textContent=$e,Z=a(),h=p("p"),h.textContent=He,G=a(),B=p("p"),ue(D.$$.fragment),Y=a(),w=p("p"),w.innerHTML=je,ee=a(),te=p("hr"),se=a(),f=p("h3"),f.innerHTML=Le,le=a(),b=p("blockquote"),b.innerHTML=Me,ae=a(),A=p("p"),ue(x.$$.fragment),ne=a(),T=p("blockquote"),T.innerHTML=Pe,oe=a(),k=p("p"),k.textContent=qe,pe=a(),$=p("p"),$.textContent=Be,Fe=a(),I=new _e(!1),R=a(),H=p("p"),H.textContent=Ae,re=a(),X=new _e(!1),J=a(),j=p("p"),j.textContent=Oe,ie=a(),S=new _e(!1),K=a(),L=p("p"),L.textContent=Ie,ce=a(),M=p("p"),M.innerHTML=Re,this.h()},l(e){o=F(e,"P",{"data-svelte-h":!0}),i(o)!=="svelte-hji0r9"&&(o.textContent=u),y=n(e),C=F(e,"HR",{}),r=n(e),c=F(e,"H2",{id:!0,"data-svelte-h":!0}),i(c)!=="svelte-1am8sdo"&&(c.innerHTML=O),Q=n(e),m=F(e,"H3",{id:!0,"data-svelte-h":!0}),i(m)!=="svelte-12tb10q"&&(m.innerHTML=be),U=n(e),v=F(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(v)!=="svelte-1bdskq6"&&(v.innerHTML=xe),V=n(e),d=F(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(d)!=="svelte-19klq2m"&&(d.innerHTML=Te),z=n(e),_=F(e,"P",{"data-svelte-h":!0}),i(_)!=="svelte-c07x4q"&&(_.textContent=ke),W=n(e),q=F(e,"P",{});var t=Ee(q);Ce(E.$$.fragment,t),t.forEach(s),N=n(e),g=F(e,"P",{"data-svelte-h":!0}),i(g)!=="svelte-7lj3h0"&&(g.textContent=$e),Z=n(e),h=F(e,"P",{"data-svelte-h":!0}),i(h)!=="svelte-et507s"&&(h.textContent=He),G=n(e),B=F(e,"P",{});var Xe=Ee(B);Ce(D.$$.fragment,Xe),Xe.forEach(s),Y=n(e),w=F(e,"P",{"data-svelte-h":!0}),i(w)!=="svelte-1duuuj1"&&(w.innerHTML=je),ee=n(e),te=F(e,"HR",{}),se=n(e),f=F(e,"H3",{id:!0,"data-svelte-h":!0}),i(f)!=="svelte-12z6bl6"&&(f.innerHTML=Le),le=n(e),b=F(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(b)!=="svelte-q7544d"&&(b.innerHTML=Me),ae=n(e),A=F(e,"P",{});var Je=Ee(A);Ce(x.$$.fragment,Je),Je.forEach(s),ne=n(e),T=F(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(T)!=="svelte-j6a6yu"&&(T.innerHTML=Pe),oe=n(e),k=F(e,"P",{"data-svelte-h":!0}),i(k)!=="svelte-ak5po9"&&(k.textContent=qe),pe=n(e),$=F(e,"P",{"data-svelte-h":!0}),i($)!=="svelte-1l9a7kr"&&($.textContent=Be),Fe=n(e),I=ge(e,!1),R=n(e),H=F(e,"P",{"data-svelte-h":!0}),i(H)!=="svelte-1v2j96r"&&(H.textContent=Ae),re=n(e),X=ge(e,!1),J=n(e),j=F(e,"P",{"data-svelte-h":!0}),i(j)!=="svelte-1wac3ao"&&(j.textContent=Oe),ie=n(e),S=ge(e,!1),K=n(e),L=F(e,"P",{"data-svelte-h":!0}),i(L)!=="svelte-1sfszs6"&&(L.textContent=Ie),ce=n(e),M=F(e,"P",{"data-svelte-h":!0}),i(M)!=="svelte-1d7gq9e"&&(M.innerHTML=Re),this.h()},h(){he(c,"id","reverse"),he(m,"id","intro-reversing"),he(f,"id","awa-jelly"),I.a=R,X.a=J,S.a=K},m(e,t){l(e,o,t),l(e,y,t),l(e,C,t),l(e,r,t),l(e,c,t),l(e,Q,t),l(e,m,t),l(e,U,t),l(e,v,t),l(e,V,t),l(e,d,t),l(e,z,t),l(e,_,t),l(e,W,t),l(e,q,t),me(E,q,null),l(e,N,t),l(e,g,t),l(e,Z,t),l(e,h,t),l(e,G,t),l(e,B,t),me(D,B,null),l(e,Y,t),l(e,w,t),l(e,ee,t),l(e,te,t),l(e,se,t),l(e,f,t),l(e,le,t),l(e,b,t),l(e,ae,t),l(e,A,t),me(x,A,null),l(e,ne,t),l(e,T,t),l(e,oe,t),l(e,k,t),l(e,pe,t),l(e,$,t),l(e,Fe,t),I.m(Ue,e,t),l(e,R,t),l(e,H,t),l(e,re,t),X.m(Ve,e,t),l(e,J,t),l(e,j,t),l(e,ie,t),S.m(ze,e,t),l(e,K,t),l(e,L,t),l(e,ce,t),l(e,M,t),ye=!0},p:Ne,i(e){ye||(fe(E.$$.fragment,e),fe(D.$$.fragment,e),fe(x.$$.fragment,e),ye=!0)},o(e){ve(E.$$.fragment,e),ve(D.$$.fragment,e),ve(x.$$.fragment,e),ye=!1},d(e){e&&(s(o),s(y),s(C),s(r),s(c),s(Q),s(m),s(U),s(v),s(V),s(d),s(z),s(_),s(W),s(q),s(N),s(g),s(Z),s(h),s(G),s(B),s(Y),s(w),s(ee),s(te),s(se),s(f),s(le),s(b),s(ae),s(A),s(ne),s(T),s(oe),s(k),s(pe),s($),s(Fe),I.d(),s(R),s(H),s(re),X.d(),s(J),s(j),s(ie),S.d(),s(K),s(L),s(ce),s(M)),de(E),de(D),de(x)}}}function st(P){let o,u;const y=[P[0],Qe];let C={$$slots:{default:[tt]},$$scope:{ctx:P}};for(let r=0;r<y.length;r+=1)C=we(C,y[r]);return o=new Ye({props:C}),{c(){ue(o.$$.fragment)},l(r){Ce(o.$$.fragment,r)},m(r,c){me(o,r,c),u=!0},p(r,[c]){const O=c&1?et(y,[c&1&&Ke(r[0]),c&0&&Ke(Qe)]):{};c&2&&(O.$$scope={dirty:c,ctx:r}),o.$set(O)},i(r){u||(fe(o.$$.fragment,r),u=!0)},o(r){ve(o.$$.fragment,r),u=!1},d(r){de(o,r)}}}const Qe={title:"VSCTF 2024 writeup",image:"/blogs/akasec_CTF_2024/akasec1.png",alt:"VSCTF",created:"2024-6-15",tags:["CTF","Reverse Engineer","Miscellaneous"],updated:"2024-06-17T17:20:27.675Z",images:[],slug:"/blogs/vs_CTF_2024/+page.svelte.md",path:"/blogs/vs_CTF_2024",toc:[{depth:2,title:"Reverse:",slug:"reverse"},{depth:3,title:"intro-reversing",slug:"intro-reversing"},{depth:3,title:"awa-jelly",slug:"awa-jelly"}]};function lt(P,o,u){return P.$$set=y=>{u(0,o=we(we({},o),Se(y)))},o=Se(o),[o]}class Ft extends Ze{constructor(o){super(),Ge(this,o,lt,st,We,{})}}export{Ft as component};
