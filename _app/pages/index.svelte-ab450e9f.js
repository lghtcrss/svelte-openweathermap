var ze=Object.defineProperty;var Ne=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var Ve=(e,a,t)=>a in e?ze(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,xe=(e,a)=>{for(var t in a||(a={}))Fe.call(a,t)&&Ve(e,t,a[t]);if(Ne)for(var t of Ne(a))Je.call(a,t)&&Ve(e,t,a[t]);return e};import{C as oe,S as qe,i as He,s as Ke,e as u,c as p,a as f,d as n,b as o,f as A,I as Ee,J as De,A as Qe,K as Ue,L as Ze,z as Xe,k as C,t as h,j as Ye,M as et,n as k,g as m,m as tt,N as Te,E as s,O as We,o as rt,P as Be,h as z,x as st,u as at,v as lt,Q as nt,R as it}from"../chunks/vendor-76ca8483.js";const Ge=oe({}),ot=async e=>{if(Object.keys(e).length===0)return;const a={temperatures:e.daily.map(t=>{var l;return(l=t==null?void 0:t.temp)==null?void 0:l.day}),labels:e.daily.map(t=>new Date((t==null?void 0:t.dt)*1e3).toLocaleDateString()),humidities:e.daily.map(t=>t==null?void 0:t.humidity),pressures:e.daily.map(t=>t==null?void 0:t.pressure)};Ge.set(a)},Ie=oe({}),ct=async e=>{var _,i;if(Object.keys(e).length===0)return;const a="420cf3bc48a83bc3beed2e87e4735ec6",t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${a}`,l=await fetch(t),b=await l.json();if(l.ok){const y={name:e.name,country:e.country,iconUrl:`https://openweathermap.org/img/wn/${(i=(_=b.current)==null?void 0:_.weather[0])==null?void 0:i.icon}@4x.png`},v=xe(xe({},b),y);Ie.set(v)}};Ie.subscribe(e=>{!e||ot(e)});const Re=oe({}),ut=async e=>{if(!e)return;const t=`https://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=420cf3bc48a83bc3beed2e87e4735ec6`,l=await fetch(t),b=await l.json();if(l.ok){const _=b.map(i=>({name:i.name,country:i.country,lat:i.lat,lon:i.lon}));Re.set(_[0])}};Re.subscribe(e=>{!e||Object.keys(e).length===0||ct(e)});const Pe=oe(sessionStorage.getItem("city")||"Berlin");Pe.subscribe(e=>{sessionStorage.setItem("city",e),ut(e)});function pt(e){let a;return{c(){a=u("canvas"),this.h()},l(t){a=p(t,"CANVAS",{id:!0,width:!0,height:!0}),f(a).forEach(n),this.h()},h(){o(a,"id","weatherChart"),o(a,"width","4"),o(a,"height","3")},m(t,l){A(t,a,l)},p:Ee,i:Ee,o:Ee,d(t){t&&n(a)}}}function dt(e,a,t){let l;De(e,Ge,i=>t(1,l=i));let b;Qe(()=>{Ue.register(...Ze),_()}),Xe(()=>{b==null||b.destroy(),_()});const _=()=>{let i=document.getElementById("weatherChart").getContext("2d");b=new Ue(i,{type:"line",data:{labels:l.labels,datasets:[{label:"Temperature [\xB0C]",data:l.temperatures,backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:2,yAxisID:"y"},{type:"bar",label:"Humidity [%]",data:l.humidities,backgroundColor:["rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:1,yAxisID:"y1"},{label:"Pressure [hPa]",data:l.pressures,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1,yAxisID:"y2"}]},options:{interaction:{mode:"index",intersect:!1},stacked:!1,scales:{y:{beginAtZero:!0,position:"left",ticks:{callback(y,v,D){return`${y}\xB0C`}}},y1:{position:"right",grid:{drawOnChartArea:!1},ticks:{callback(y,v,D){return`${y}%`}}},y2:{position:"right",grid:{drawOnChartArea:!1},ticks:{callback(y,v,D){return`${y}hPa`}}}}}})};return[]}class ft extends qe{constructor(a){super();He(this,a,dt,pt,Ke,{})}}function ht(e){let a,t,l,b,_,i,y,v,D,g,c,x,F,J,j,w,U,I,M,T,W,P,O,ce,Z,ue,N,X,pe,de,V,fe,Y,he,me,q,be,ee,ye,_e,B,S,te,re,H,$,G,ge,ve,K,E,we,Se;return K=new ft({}),{c(){a=C(),t=u("section"),l=u("label"),b=h("Location"),_=C(),i=u("input"),y=C(),v=u("hr"),D=C(),g=u("div"),c=u("div"),x=u("p"),F=h(e[8]),J=C(),j=u("p"),w=h(e[7]),U=C(),I=u("p"),M=h(e[6]),T=h("\xB0C"),W=C(),P=u("div"),O=u("p"),ce=h("Feels like "),Z=h(e[3]),ue=h("\xB0C. "),N=u("span"),X=h(e[2]),pe=h("."),de=C(),V=u("p"),fe=h("Humidity: "),Y=h(e[5]),he=h("%"),me=C(),q=u("p"),be=h("Pressure: "),ee=h(e[4]),ye=h("hPa"),_e=C(),B=u("div"),S=u("img"),re=C(),H=u("section"),$=u("div"),G=u("h2"),ge=h("Weather forecast for 7 days"),ve=C(),Ye(K.$$.fragment),this.h()},l(r){et('[data-svelte="svelte-1eqwkks"]',document.head).forEach(n),a=k(r),t=p(r,"SECTION",{class:!0});var se=f(t);l=p(se,"LABEL",{class:!0,for:!0});var Ae=f(l);b=m(Ae,"Location"),Ae.forEach(n),_=k(se),i=p(se,"INPUT",{class:!0,type:!0}),se.forEach(n),y=k(r),v=p(r,"HR",{class:!0}),D=k(r),g=p(r,"DIV",{class:!0});var ae=f(g);c=p(ae,"DIV",{class:!0});var L=f(c);x=p(L,"P",{class:!0});var je=f(x);F=m(je,e[8]),je.forEach(n),J=k(L),j=p(L,"P",{class:!0});var Oe=f(j);w=m(Oe,e[7]),Oe.forEach(n),U=k(L),I=p(L,"P",{class:!0});var Ce=f(I);M=m(Ce,e[6]),T=m(Ce,"\xB0C"),Ce.forEach(n),W=k(L),P=p(L,"DIV",{class:!0});var R=f(P);O=p(R,"P",{});var Q=f(O);ce=m(Q,"Feels like "),Z=m(Q,e[3]),ue=m(Q,"\xB0C. "),N=p(Q,"SPAN",{class:!0});var ke=f(N);X=m(ke,e[2]),pe=m(ke,"."),ke.forEach(n),Q.forEach(n),de=k(R),V=p(R,"P",{});var le=f(V);fe=m(le,"Humidity: "),Y=m(le,e[5]),he=m(le,"%"),le.forEach(n),me=k(R),q=p(R,"P",{});var ne=f(q);be=m(ne,"Pressure: "),ee=m(ne,e[4]),ye=m(ne,"hPa"),ne.forEach(n),R.forEach(n),L.forEach(n),_e=k(ae),B=p(ae,"DIV",{class:!0});var $e=f(B);S=p($e,"IMG",{src:!0,alt:!0,class:!0}),$e.forEach(n),ae.forEach(n),re=k(r),H=p(r,"SECTION",{class:!0});var Le=f(H);$=p(Le,"DIV",{class:!0});var ie=f($);G=p(ie,"H2",{class:!0});var Me=f(G);ge=m(Me,"Weather forecast for 7 days"),Me.forEach(n),ve=k(ie),tt(K.$$.fragment,ie),ie.forEach(n),Le.forEach(n),this.h()},h(){document.title="Start - Open Weather Map with Svelte",o(l,"class","mb-2 text-xl"),o(l,"for","targetNumber"),o(i,"class","rounded flex-1"),o(i,"type","text"),o(t,"class","flex items-baseline gap-4 mx-auto max-w-xl px-8"),o(v,"class","mt-6 mb-3 border-gray-300"),o(x,"class","text-sm text-blue-600"),o(j,"class","text-2xl text-gray-700 font-semibold tracking-wider"),o(I,"class","text-2xl"),o(N,"class","capitalize"),o(P,"class","mt-2 pl-4 border-l-2 border-blue-600"),o(c,"class","min-w-60"),Te(S.src,te=e[1])||o(S,"src",te),o(S,"alt","weather icon"),o(S,"class","w-52 h-52"),o(B,"class","flex justify-center items-center"),o(g,"class","flex justify-between mx-auto max-w-xl px-8"),o(G,"class","text-center text-2xl mb-4"),o($,"class","min-w-full border-l-2 border-blue-600"),o(H,"class","flex items-baseline gap-4 mx-auto max-w-xl px-8")},m(r,d){A(r,a,d),A(r,t,d),s(t,l),s(l,b),s(t,_),s(t,i),We(i,e[0]),A(r,y,d),A(r,v,d),A(r,D,d),A(r,g,d),s(g,c),s(c,x),s(x,F),s(c,J),s(c,j),s(j,w),s(c,U),s(c,I),s(I,M),s(I,T),s(c,W),s(c,P),s(P,O),s(O,ce),s(O,Z),s(O,ue),s(O,N),s(N,X),s(N,pe),s(P,de),s(P,V),s(V,fe),s(V,Y),s(V,he),s(P,me),s(P,q),s(q,be),s(q,ee),s(q,ye),s(g,_e),s(g,B),s(B,S),A(r,re,d),A(r,H,d),s(H,$),s($,G),s(G,ge),s($,ve),rt(K,$,null),E=!0,we||(Se=[Be(i,"input",e[11]),Be(i,"keydown",e[9])],we=!0)},p(r,[d]){d&1&&i.value!==r[0]&&We(i,r[0]),(!E||d&128)&&z(w,r[7]),(!E||d&64)&&z(M,r[6]),(!E||d&8)&&z(Z,r[3]),(!E||d&4)&&z(X,r[2]),(!E||d&32)&&z(Y,r[5]),(!E||d&16)&&z(ee,r[4]),(!E||d&2&&!Te(S.src,te=r[1]))&&o(S,"src",te)},i(r){E||(st(K.$$.fragment,r),E=!0)},o(r){at(K.$$.fragment,r),E=!1},d(r){r&&n(a),r&&n(t),r&&n(y),r&&n(v),r&&n(D),r&&n(g),r&&n(re),r&&n(H),lt(K),we=!1,nt(Se)}}}function mt(e,a,t){let l,b,_,i,y,v,D,g,c;De(e,Pe,w=>t(12,g=w)),De(e,Ie,w=>t(10,c=w));let x=g,F=new Date().toLocaleString();const J=w=>{w.keyCode===13&&it(Pe,g=x,g)};function j(){x=this.value,t(0,x)}return e.$$.update=()=>{var w,U,I,M,T,W;e.$$.dirty&1024&&t(7,l=`${c.name}, ${c.country}`),e.$$.dirty&1024&&t(6,b=Math.round((w=c.current)==null?void 0:w.temp)),e.$$.dirty&1024&&t(5,_=(U=c.current)==null?void 0:U.humidity),e.$$.dirty&1024&&t(4,i=(I=c.current)==null?void 0:I.pressure),e.$$.dirty&1024&&t(3,y=Math.round((M=c.current)==null?void 0:M.feels_like)),e.$$.dirty&1024&&t(2,v=(W=(T=c.current)==null?void 0:T.weather[0])==null?void 0:W.description),e.$$.dirty&1024&&t(1,D=c.iconUrl)},[x,D,v,y,i,_,b,l,F,J,c,j]}class _t extends qe{constructor(a){super();He(this,a,mt,ht,Ke,{})}}export{_t as default};