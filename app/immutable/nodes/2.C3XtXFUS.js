import{d as Xn,e as fe,a as R,t as F,n as he}from"../chunks/DfhHYjZk.js";import{A as ve,d as $n,h as nt,B as hn,c as Ln,g as n,H as me,C as Hn,D as In,f as At,I as vn,F as te,e as Nn,p as xe,G as ne,J as Bn,K as Wn,M as ye,N as ue,O as be,P as ee,Q as ae,R as we,S as Pe,T as Ae,m as _e,U as qn,V as Rn,W as Se,X as ie,Y as Ce,Z as On,_ as Ie,a0 as se,a1 as ze,a2 as Te,a3 as Me,a4 as ke,a5 as De,a6 as Le,k as yn,r as un,q as y,v as h,w as g,x as J,y as Q,o as Ne,z as Vn,a as N,l as Gn,b as d,a7 as zn}from"../chunks/DxEB13ml.js";import{o as le,a as Re}from"../chunks/B5mMWkHv.js";import{l as Oe,d as Fn,p as u,i as ot,s as ft,e as tt,a as b,b as Fe,r as Ee}from"../chunks/mn83PHve.js";import{s as W,r as Tn,a as Xe,h as Un}from"../chunks/Dpqzx1rf.js";import{m as He,d as Be}from"../chunks/TublVk_f.js";function oe(e,t){return t}function We(e,t,i,o){for(var p=[],c=t.length,m=0;m<c;m++)ye(t[m].e,p,!0);var A=c>0&&p.length===0&&i!==null;if(A){var f=i.parentNode;ue(f),f.append(i),o.clear(),xt(e,t[0].prev,t[c-1].next)}be(p,()=>{for(var z=0;z<c;z++){var S=t[z];A||(o.delete(S.k),xt(e,S.prev,S.next)),ee(S.e,!A)}})}function xn(e,t,i,o,p,c=null){var m=e,A={flags:t,items:new Map,first:null},f=(t&ie)!==0;if(f){var z=e;m=nt?hn(ae(z)):z.appendChild(ve())}nt&&Ln();var S=null,k=!1,O=we(()=>{var x=i();return Se(x)?x:x==null?[]:ne(x)});$n(()=>{var x=n(O),T=x.length;if(k&&T===0)return;k=T===0;let _=!1;if(nt){var B=m.data===me;B!==(T===0)&&(m=Hn(),hn(m),In(!1),_=!0)}if(nt){for(var D=null,w,I=0;I<T;I++){if(At.nodeType===8&&At.data===Pe){m=At,_=!0,In(!1);break}var L=x[I],P=o(L,I);w=re(At,A,D,null,L,P,I,p,t),A.items.set(P,w),D=w}T>0&&hn(Hn())}if(!nt){var C=Ae;qe(x,A,m,p,t,(C.f&vn)!==0,o)}c!==null&&(T===0?S?te(S):S=Nn(()=>c(m)):S!==null&&xe(S,()=>{S=null})),_&&In(!0),n(O)}),nt&&(m=At)}function qe(e,t,i,o,p,c,m,A){var _t,et,rt,pt;var f=(p&ze)!==0,z=(p&(On|Rn))!==0,S=e.length,k=t.items,O=t.first,x=O,T,_=null,B,D=[],w=[],I,L,P,C;if(f)for(C=0;C<S;C+=1)I=e[C],L=m(I,C),P=k.get(L),P!==void 0&&((_t=P.a)==null||_t.measure(),(B??(B=new Set)).add(P));for(C=0;C<S;C+=1){if(I=e[C],L=m(I,C),P=k.get(L),P===void 0){var it=x?x.e.nodes_start:i;_=re(it,t,_,_===null?t.first:_.next,I,L,C,o,p),k.set(L,_),D=[],w=[],x=_.next;continue}if(z&&Ve(P,I,C,p),P.e.f&vn&&(te(P.e),f&&((et=P.a)==null||et.unfix(),(B??(B=new Set)).delete(P))),P!==x){if(T!==void 0&&T.has(P)){if(D.length<w.length){var X=w[0],q;_=X.prev;var ht=D[0],$=D[D.length-1];for(q=0;q<D.length;q+=1)Yn(D[q],X,i);for(q=0;q<w.length;q+=1)T.delete(w[q]);xt(t,ht.prev,$.next),xt(t,_,ht),xt(t,$,X),x=X,_=$,C-=1,D=[],w=[]}else T.delete(P),Yn(P,x,i),xt(t,P.prev,P.next),xt(t,P,_===null?t.first:_.next),xt(t,_,P),_=P;continue}for(D=[],w=[];x!==null&&x.k!==L;)(c||!(x.e.f&vn))&&(T??(T=new Set)).add(x),w.push(x),x=x.next;if(x===null)continue;P=x}D.push(P),_=P,x=P.next}if(x!==null||T!==void 0){for(var U=T===void 0?[]:ne(T);x!==null;)(c||!(x.e.f&vn))&&U.push(x),x=x.next;var V=U.length;if(V>0){var st=p&ie&&S===0?i:null;if(f){for(C=0;C<V;C+=1)(rt=U[C].a)==null||rt.measure();for(C=0;C<V;C+=1)(pt=U[C].a)==null||pt.fix()}We(t,U,st,k)}}f&&Ce(()=>{var vt;if(B!==void 0)for(P of B)(vt=P.a)==null||vt.apply()}),Bn.first=t.first&&t.first.e,Bn.last=_&&_.e}function Ve(e,t,i,o){o&On&&Wn(e.v,t),o&Rn?Wn(e.i,i):e.i=i}function re(e,t,i,o,p,c,m,A,f,z){var S=(f&On)!==0,k=(f&Ie)===0,O=S?k?_e(p):qn(p):p,x=f&Rn?qn(m):m,T={i:x,v:O,k:c,a:null,e:null,prev:i,next:o};try{return T.e=Nn(()=>A(e,O,x),nt),T.e.prev=i&&i.e,T.e.next=o&&o.e,i===null?t.first=T:(i.next=T,i.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function Yn(e,t,i){for(var o=e.next?e.next.e.nodes_start:i,p=t?t.e.nodes_start:i,c=e.e.nodes_start;c!==o;){var m=se(c);p.before(c),c=m}}function xt(e,t,i){t===null?e.first=i:(t.next=i,t.e.next=i&&i.e),i!==null&&(i.prev=t,i.e.prev=t&&t.e)}function jn(e,t,i,o,p){var c=e,m="",A;$n(()=>{if(m===(m=t()??"")){nt&&Ln();return}A!==void 0&&(ee(A),A=void 0),m!==""&&(A=Nn(()=>{if(nt){At.data;for(var f=Ln(),z=f;f!==null&&(f.nodeType!==8||f.data!=="");)z=f,f=se(f);if(f===null)throw Te(),Me;Xn(At,z),c=hn(f);return}var S=m+"",k=fe(S);Xn(ae(k),k.lastChild),c.before(k)}))})}function pe(e){var t,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(t=0;t<p;t++)e[t]&&(i=pe(e[t]))&&(o&&(o+=" "),o+=i)}else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function Ge(){for(var e,t,i=0,o="",p=arguments.length;i<p;i++)(e=arguments[i])&&(t=pe(e))&&(o&&(o+=" "),o+=t);return o}function Ue(e){return typeof e=="object"?Ge(e):e}function yt(e,t,i){var o=e.__className,p=Ye(t,i);nt&&e.className===p?e.__className=p:(o!==p||nt&&e.className!==p)&&(t==null&&!i?e.removeAttribute("class"):e.className=p,e.__className=p)}function Ye(e,t){return(e??"")+(t?" "+t:"")}function Jn(e,t,i=t){var o=ke();Oe(e,"input",p=>{var c=p?e.defaultValue:e.value;if(c=Mn(e)?kn(c):c,i(c),o&&c!==(c=t())){var m=e.selectionStart,A=e.selectionEnd;e.value=c??"",A!==null&&(e.selectionStart=m,e.selectionEnd=Math.min(A,e.value.length))}}),(nt&&e.defaultValue!==e.value||De(t)==null&&e.value)&&i(Mn(e)?kn(e.value):e.value),Le(()=>{var p=t();Mn(e)&&p===kn(e.value)||e.type==="date"&&!p&&!e.value||p!==e.value&&(e.value=p??"")})}function Mn(e){var t=e.type;return t==="number"||t==="range"}function kn(e){return e===""?null:+e}const je=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],mn=[...new Map(je.map(e=>[e.shadow,e])).values()],En=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,Je=/^[a-z][a-z0-9]*$/;function Ke(e,t=1200){var o;if(!e)return t;if(Number.isFinite(e.maxWidth)&&e.maxWidth>0)return e.maxWidth;if(Number.isFinite(e.minWidth)&&e.minWidth>0)return e.minWidth;const i=Number.parseFloat(((o=e.styleMap)==null?void 0:o.width)||"");return Number.isFinite(i)&&i>0?i:t}function Ze(e="#000000"){let t=e.replace("#","");t.length===3&&(t=t.split("").map(o=>`${o}${o}`).join(""));const i=Number.parseInt(t,16);return Number.isFinite(i)?[i>>16&255,i>>8&255,i&255]:[0,0,0]}function Pt(e,t){if(!e)return"";const i=e.match(En);if(!(i!=null&&i.length))return e;const[o,p,c]=Ze(t),m=i.map(f=>{if(f.startsWith("#"))return t;const z=f.match(/\d+(?:\.\d+)?%?/g)||[];if(!z.length)return`rgb(${o} ${p} ${c})`;const S=z[3];return S?`rgb(${o} ${p} ${c} / ${S})`:`rgb(${o} ${p} ${c})`});let A=e;return i.forEach((f,z)=>{A=A.replace(f,m[z])}),A}function Qe(e=""){if(!e)return"";let t=e.trim().replace("#","");return(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(i=>`${i}${i}`).join("")),`#${t.slice(0,6).toLowerCase()}`}function ce(e=""){if(!e)return"";if(e.startsWith("#"))return Qe(e);const t=e.match(/[\d.]+%?/g);if(!t||t.length<3)return"";const[i,o,p]=t,c=A=>A.endsWith("%")?Math.round(Number.parseFloat(A)/100*255):Math.round(Number.parseFloat(A)),m=A=>Math.max(0,Math.min(255,A)).toString(16).padStart(2,"0");return`#${m(c(i))}${m(c(o))}${m(c(p))}`}function $e(e=""){var i;const t=(i=e.match(En))==null?void 0:i[0];return t?ce(t):""}function Kn(e=""){return e.toLowerCase().replace(En,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function ta(e=""){return e.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function Zn(e="",t=""){return!e||!t?"":`.${e} { text-shadow: ${t}; }`}var na=(e,t,i)=>t()(n(i).shadow),ea=F('<span class="source-wrap svelte-1p0dar6"><a class="shadow-source svelte-1p0dar6" target="_blank" rel="noreferrer">View reference</a></span>'),aa=F('<button type="button"><span class="shadow-name svelte-1p0dar6"> </span> <span class="shadow-preview svelte-1p0dar6">Preview</span> <!></button>'),ia=F('<aside class="library-column svelte-1p0dar6"><div class="library-header-panel svelte-1p0dar6"><h3 class="svelte-1p0dar6">Shadow Library</h3> <p class="svelte-1p0dar6">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1p0dar6"></div></aside>');function sa(e,t){yn(t,!0);let i=u(t,"selectedShadowRaw",3,""),o=u(t,"shadowColor",3,"#000000"),p=u(t,"textColor",3,"#ffffff");u(t,"selectedShadowMeta",3,null);let c=u(t,"onChooseShadow",3,()=>{});var m=ia(),A=y(h(m),2);xn(A,21,()=>mn,oe,(f,z)=>{var S=aa();S.__click=[na,c,z];var k=h(S),O=h(k,!0);g(k);var x=y(k,2);const T=Q(()=>`text-shadow:${Pt(n(z).shadow,o())};color:${p()};`);var _=y(x,2);{var B=D=>{var w=ea(),I=h(w);g(w),J(()=>W(I,"href",n(z).source)),R(D,w)};ot(_,D=>{i()===n(z).shadow&&n(z).source&&D(B)})}g(S),J(()=>{yt(S,`${`shadow-choice ${i()===n(z).shadow?"is-selected":""}`??""} svelte-1p0dar6`),ft(O,n(z).id),W(x,"style",n(T))}),R(f,S)}),g(A),g(m),R(e,m),un()}Fn(["click"]);var la=he('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function Qn(e){var t=la();R(e,t)}var oa=F('<p class="active-file svelte-1io9loa"> </p>'),ra=(e,t,i,o)=>{t(n(i).id),o()({currentTarget:{value:n(i).id}})},pa=F('<button type="button"> </button>'),ca=F('<div class="artboard-switcher svelte-1io9loa"><span class="artboard-label svelte-1io9loa">Artboard</span> <div class="artboard-buttons svelte-1io9loa"></div></div>'),da=(e,t)=>t(!t()),ga=F('<p class="selection-note svelte-1io9loa">Selected: <strong> </strong></p>'),fa=F('<pre class="css-preview svelte-1io9loa"> </pre>'),ha=F('<pre class="css-rules-output svelte-1io9loa"> </pre>'),va=F('<p class="empty-rules svelte-1io9loa">No rules added yet.</p>'),ma=F(`<section class="panel toolbar svelte-1io9loa"><div class="toolbar-row import-row svelte-1io9loa" role="region" aria-label="ai2html import zone"><div class="dropzone-inline svelte-1io9loa"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="svelte-1io9loa"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 20h14v-2H5zm7-16-5.5 5.5 1.42 1.42L11 8.84V16h2V8.84l3.08 3.08 1.42-1.42z"></path></svg> <div><strong class="svelte-1io9loa">Drop Zone ai2html</strong> <small class="svelte-1io9loa">Drop .html here or use the button below.</small></div></div> <div class="import-actions svelte-1io9loa"><label class="tool-button svelte-1io9loa" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-1io9loa"> <label class="tool-button svelte-1io9loa" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-1io9loa"> <button type="button" class="tool-button sample-button svelte-1io9loa">Load sample</button></div> <!></div> <div class="toolbar-row main-controls-row svelte-1io9loa"><!> <p class="metric svelte-1io9loa"> </p> <div class="quick-actions svelte-1io9loa"><button type="button" class="svelte-1io9loa">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-1io9loa"><div class="toolbar-row appearance-row svelte-1io9loa"><div class="appearance-block svelte-1io9loa"><h4 class="svelte-1io9loa">Text Color</h4> <div class="control-row svelte-1io9loa"><label for="text-color" class="svelte-1io9loa">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-1io9loa"></div> <div class="action-row svelte-1io9loa"><button type="button" class="svelte-1io9loa">Apply to Selected</button> <button type="button" class="svelte-1io9loa">Apply to All</button> <button type="button" class="reset-button svelte-1io9loa"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-1io9loa"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-1io9loa"><h4 class="svelte-1io9loa">Shadow Color</h4> <div class="control-row svelte-1io9loa"><label for="shadow-color" class="svelte-1io9loa">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-1io9loa"></div> <div class="action-row svelte-1io9loa"><button type="button" class="svelte-1io9loa">Recolor Selected</button> <button type="button" class="reset-button svelte-1io9loa"><!> Reset Shadow</button> <button type="button" class="svelte-1io9loa">Copy CSS</button> <button type="button" class="eyedropper svelte-1io9loa"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-1io9loa"><details class="workflow-details svelte-1io9loa"><summary class="svelte-1io9loa">Illustrator Workflow</summary> <div class="workflow-content svelte-1io9loa"><div class="workflow-intro svelte-1io9loa"><p class="svelte-1io9loa">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-1io9loa">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-1io9loa"><h4 class="svelte-1io9loa">Stylesheet</h4> <div class="control-row class-name-row svelte-1io9loa"><label for="css-class-name" class="svelte-1io9loa">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-1io9loa"></div> <p class="class-name-help svelte-1io9loa">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-1io9loa"><button type="button" class="svelte-1io9loa">Add to Stylesheet</button> <button type="button" class="svelte-1io9loa">Copy CSS</button> <button type="button" class="reset-button svelte-1io9loa">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-1io9loa" aria-live="polite"><!></div></div></div></details></section>`,1);function xa(e,t){yn(t,!0);let i=u(t,"artboards",19,()=>[]),o=u(t,"selectedArtboardId",15,""),p=u(t,"stageWidth",3,0),c=u(t,"labelsCount",3,0),m=u(t,"selectedLabel",3,null),A=u(t,"activeShadow",3,""),f=u(t,"workspaceImage",3,""),z=u(t,"htmlFileName",3,""),S=u(t,"imageFileName",3,""),k=u(t,"onLoadSample",3,()=>{}),O=u(t,"previewOriginal",15,!1),x=u(t,"textColor",15,"#000000"),T=u(t,"shadowColor",15,"#000000"),_=u(t,"cssClassName",3,""),B=u(t,"cssClassNameValid",3,!1),D=u(t,"currentRulePreview",3,""),w=u(t,"cssSheetPreview",3,""),I=u(t,"cssRules",19,()=>[]),L=u(t,"canUseEyeDropper",3,!1),P=u(t,"onAi2htmlDrop",3,()=>{}),C=u(t,"onAi2htmlInput",3,()=>{}),it=u(t,"onImageInput",3,()=>{}),X=u(t,"onArtboardChange",3,()=>{}),q=u(t,"onApplyShadowToAll",3,()=>{}),ht=u(t,"onApplyTextToSelected",3,()=>{}),$=u(t,"onApplyTextToAll",3,()=>{}),U=u(t,"onClearTextColors",3,()=>{}),V=u(t,"onTextColorLive",3,()=>{}),st=u(t,"onPickTextColor",3,()=>{}),_t=u(t,"onRecolorSelectedShadow",3,()=>{}),et=u(t,"onClearSelectedShadow",3,()=>{}),rt=u(t,"onCopyCurrentShadow",3,()=>{}),pt=u(t,"onShadowColorLive",3,()=>{}),vt=u(t,"onPickShadowColor",3,()=>{}),nn=u(t,"onCssClassNameInput",3,()=>{}),bn=u(t,"onAddRuleToSheet",3,()=>{}),Lt=u(t,"onCopyCssSheet",3,()=>{}),en=u(t,"onClearCssSheet",3,()=>{});function an(r){r.preventDefault()}var sn=ma(),ct=Ne(sn),mt=h(ct),St=y(h(mt),2),ln=y(h(St),2);ln.__change=function(...r){var s;(s=C())==null||s.apply(this,r)};var Nt=y(ln,4);Nt.__change=function(...r){var s;(s=it())==null||s.apply(this,r)};var Rt=y(Nt,2);Rt.__click=function(...r){var s;(s=k())==null||s.apply(this,r)},g(St);var wn=y(St,2);{var Pn=r=>{var s=oa(),H=h(s,!0);g(s),J(()=>ft(H,z()||S())),R(r,s)};ot(wn,r=>{(z()||S())&&r(Pn)})}g(mt);var on=y(mt,2),rn=h(on);{var An=r=>{var s=ca(),H=y(h(s),2);xn(H,21,i,oe,(wt,G)=>{var Y=pa();Y.__click=[ra,o,G,X];var E=h(Y,!0);g(Y),J(()=>{yt(Y,`${`artboard-btn ${o()===n(G).id?"is-active":""}`??""} svelte-1io9loa`),ft(E,n(G).name)}),R(wt,Y)}),g(H),g(s),R(r,s)};ot(rn,r=>{i().length>1&&r(An)})}var ut=y(rn,2),_n=h(ut);g(ut);var pn=y(ut,2),Ot=h(pn);Ot.__click=function(...r){var s;(s=q())==null||s.apply(this,r)};var dt=y(Ot,2);dt.__click=[da,O];var Ft=h(dt,!0);g(dt),g(pn),g(on),g(ct);var Ct=y(ct,2),Et=h(Ct),Xt=h(Et),Ht=y(h(Xt),2),Bt=y(h(Ht),2);Tn(Bt),Bt.__input=function(...r){var s;(s=V())==null||s.apply(this,r)},g(Ht);var cn=y(Ht,2),Wt=h(cn);Wt.__click=function(...r){var s;(s=ht())==null||s.apply(this,r)};var qt=y(Wt,2);qt.__click=function(...r){var s;(s=$())==null||s.apply(this,r)};var bt=y(qt,2);bt.__click=function(...r){var s;(s=U())==null||s.apply(this,r)};var Sn=h(bt);Qn(Sn),Vn(),g(bt);var dn=y(bt,2);dn.__click=function(...r){var s;(s=st())==null||s.apply(this,r)},g(cn),g(Xt);var Vt=y(Xt,2),It=y(h(Vt),2),Gt=y(h(It),2);Tn(Gt),Gt.__input=function(...r){var s;(s=pt())==null||s.apply(this,r)},g(It);var Ut=y(It,2),zt=h(Ut);zt.__click=function(...r){var s;(s=_t())==null||s.apply(this,r)};var gt=y(zt,2);gt.__click=function(...r){var s;(s=et())==null||s.apply(this,r)};var Yt=h(gt);Qn(Yt),Vn(),g(gt);var Tt=y(gt,2);Tt.__click=function(...r){var s;(s=rt())==null||s.apply(this,r)};var jt=y(Tt,2);jt.__click=function(...r){var s;(s=vt())==null||s.apply(this,r)},g(Ut),g(Vt),g(Et);var Cn=y(Et,2);{var Jt=r=>{var s=ga(),H=y(h(s)),wt=h(H,!0);g(H),g(s),J(()=>ft(wt,m().previewText)),R(r,s)};ot(Cn,r=>{m()&&r(Jt)})}g(Ct);var Kt=y(Ct,2),gn=h(Kt),Zt=y(h(gn),2),fn=y(h(Zt),2),Qt=y(h(fn),2),$t=y(h(Qt),2);Tn($t),$t.__input=function(...r){var s;(s=nn())==null||s.apply(this,r)},g(Qt);var Mt=y(Qt,4),tn=h(Mt);tn.__click=function(...r){var s;(s=bn())==null||s.apply(this,r)};var kt=y(tn,2);kt.__click=function(...r){var s;(s=Lt())==null||s.apply(this,r)};var a=y(kt,2);a.__click=function(...r){var s;(s=en())==null||s.apply(this,r)},g(Mt);var l=y(Mt,2);{var v=r=>{var s=fa(),H=h(s,!0);g(s),J(()=>ft(H,D())),R(r,s)};ot(l,r=>{D()&&r(v)})}var M=y(l,2),Z=h(M);{var K=r=>{var s=ha(),H=h(s,!0);g(s),J(()=>ft(H,w())),R(r,s)},lt=r=>{var s=va();R(r,s)};ot(Z,r=>{w()?r(K):r(lt,!1)})}g(M),g(fn),g(Zt),g(gn),g(Kt),J(()=>{ft(_n,`Native Width: ${p()??""}px`),Ot.disabled=!c(),yt(dt,`${`preview-toggle ${O()?"is-active":""}`??""} svelte-1io9loa`),dt.disabled=!c(),ft(Ft,O()?"Show Edited":"Show Original"),Wt.disabled=!m(),qt.disabled=!c(),bt.disabled=!c(),dn.disabled=!L()||!f(),zt.disabled=!m(),gt.disabled=!m(),Tt.disabled=!A(),jt.disabled=!L()||!f(),Xe($t,_()),tn.disabled=!B(),kt.disabled=!w(),a.disabled=!I().length}),tt("dragover",mt,an),tt("drop",mt,function(...r){var s;(s=P())==null||s.apply(this,r)}),Jn(Bt,x),Jn(Gt,T),R(e,sn),un()}Fn(["change","click","input"]);const Dt=(e,t=0)=>{const i=Number.parseFloat(e);return Number.isFinite(i)?i:t},Dn=(e="")=>e.split(";").map(t=>t.trim()).filter(Boolean).reduce((t,i)=>{const[o,...p]=i.split(":");return!o||p.length===0||(t[o.trim().toLowerCase()]=p.join(":").trim()),t},{}),ya=(e="",t="Artboard")=>e?e.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():t,ua=(e={})=>{const i=(e.padding||"").split(/\s+/).filter(Boolean),o=i[2]||i[0]||"",p=Dt(o,0);return p?100/p:null},ba=(e={})=>Object.entries(e).map(([t,i])=>`${t}: ${i}`).join(";");function wa(e,t){return!Array.isArray(e)||e.length===0?null:e.find(i=>t>=i.minWidth&&t<=i.maxWidth)||e[0]}function Pa(e=""){if(!e.trim())throw new Error("The file is empty.");let t=e.trim();!t.includes("<html")&&!t.includes("<!DOCTYPE")&&(t=`<!DOCTYPE html><html><head></head><body>${t}</body></html>`);const o=new DOMParser().parseFromString(t,"text/html"),p=[...o.querySelectorAll(".g-artboard")],c=o.querySelector(".ai2html");if(!p.length)throw new Error("No ai2html artboards found.");const m=[...o.querySelectorAll("style")].map(f=>f.textContent||"").join(`
`).trim(),A=p.map((f,z)=>{const S=Dn(f.getAttribute("style")||""),k=f.querySelector(":scope > div:not([id])"),O=Dn((k==null?void 0:k.getAttribute("style"))||""),x=f.querySelector('[id$="-graphic"]'),T=x?[...x.querySelectorAll(".g-aiAbs")]:[...f.querySelectorAll(":scope > div.g-aiAbs")],_=x?x.querySelector("img.g-aiImg, img"):f.querySelector("img.g-aiImg, img"),B=k&&Object.keys(O).length>0,D=T.map((L,P)=>{const C=Dn(L.getAttribute("style")||""),it=L.textContent.split(`
`).map(X=>X.trim()).filter(Boolean).join(" ").trim();return{id:L.id||`label-${z+1}-${P+1}`,className:L.className||"",html:L.innerHTML,previewText:it||`Label ${P+1}`,styleMap:C,shadow:"",textColor:""}}),w=ua(O),I=Dt(f.dataset.aspectRatio,0)||w||16/9;return{id:f.id||`artboard-${z+1}`,name:ya(f.id,`Artboard ${z+1}`),className:f.className||"g-artboard",style:f.getAttribute("style")||"",styleMap:S,aspectRatio:I,minWidth:Dt(f.dataset.minWidth,Dt(S["min-width"],0)),maxWidth:Dt(f.dataset.maxWidth,Dt(S["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:B?ba(O):"",imageSrc:(_==null?void 0:_.getAttribute("src"))||"",imageAlt:(_==null?void 0:_.getAttribute("alt"))||"",imageClassName:(_==null?void 0:_.className)||"g-aiImg",imageId:(_==null?void 0:_.id)||"",labels:D}});return{cssText:m,rootId:(c==null?void 0:c.id)||"",rootClassName:(c==null?void 0:c.className)||"ai2html",artboards:A}}async function Aa(e){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}const _a={copyToClipboard:Aa};function Sa(e,t){e.target.closest(".draggable-label")||d(t,"")}var Ca=F('<p class="error svelte-d9013w"> </p>'),Ia=F("<div></div>"),za=(e,t,i)=>t(e,n(i)),Ta=F('<button type="button"><!></button>'),Ma=F('<div><!> <img loading="eager" fetchpriority="high"> <!></div>'),ka=(e,t,i)=>t(e,n(i)),Da=F('<button type="button"><!></button>'),La=F('<div class="workspace-empty svelte-d9013w" role="region" aria-label="Drop zone for ai2html files"><img alt="Editor background" loading="eager" fetchpriority="high"> <!></div>'),Na=F('<div class="workspace-scroll svelte-d9013w"><div class="stage-host svelte-d9013w"><div><!></div></div></div>'),Ra=F('<div class="workspace-empty svelte-d9013w" role="region" aria-label="Drop zone for ai2html files"><svg class="empty-icon svelte-d9013w" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 20h14v-2H5zm7-16-5.5 5.5 1.42 1.42L11 8.84V16h2V8.84l3.08 3.08 1.42-1.42z"></path></svg> <p class="svelte-d9013w">Drag & drop your ai2html file here</p> <p class="empty-hint svelte-d9013w">or use the buttons in the toolbar</p></div>'),Oa=F('<section class="studio svelte-d9013w"><aside class="left-sidebar svelte-d9013w"><details class="mobile-tools svelte-d9013w" open><summary class="svelte-d9013w">Tools</summary> <div class="mobile-tools-body svelte-d9013w"><!></div></details></aside> <div class="workspace-column svelte-d9013w"><!> <div class="workspace-shell svelte-d9013w"><!></div></div> <aside class="right-sidebar svelte-d9013w"><!></aside></section>');function Fa(e,t){var kt;yn(t,!0);const{copyToClipboard:i}=_a,o=((kt=mn[0])==null?void 0:kt.shadow)||"";let p=u(t,"sampleMode",3,!1),c=u(t,"sampleHtml",3,""),m=u(t,"onLoadSample",3,()=>{}),A=N(void 0),f=N(""),z=N(""),S=N(""),k=N(""),O=N(""),x=N(1200),T=N(""),_=N("ai2html"),B=N(b([])),D=N(""),w=N(b([])),I=N(""),L=N(b(o)),P=N(b(He)),C=N(b(Be)),it=N(!1),X=N(null),q=N(void 0),ht=N(!1),$=N(""),U=N(b([]));const V=Q(()=>n(B).find(a=>a.id===n(D))||null),st=Q(()=>n(w).find(a=>a.id===n(I))||null),_t=Q(()=>mn.find(a=>a.shadow===n(L))||null),et=Q(()=>Pt(n(L),n(C))),rt=Q(()=>{var a;return((a=n(V))==null?void 0:a.imageSrc)||n(O)}),pt=Q(()=>Ke(n(V),n(x))),vt=Q(()=>Je.test(n($))),nn=Q(()=>{var a;return((a=n(st))==null?void 0:a.shadow)||n(et)||""}),bn=Q(()=>n(vt)&&n(nn)?Zn(n($),n(nn)):""),Lt=Q(()=>n(U).map(a=>Zn(a.className,a.shadow)).join(`
`));Gn(()=>{typeof document>"u"||(n(q)||(d(q,b(document.createElement("style"))),n(q).setAttribute("data-ai2html-import","true"),document.head.append(n(q))),n(q).textContent=n(f))}),le(()=>{d(ht,b(typeof window<"u"&&"EyeDropper"in window))});let en=N(!1);Gn(()=>{typeof window>"u"||!p()||n(en)||!c()||(d(en,!0),an(c(),"sample-ai2html.html"))});async function an(a,l=""){d(z,"");try{const v=Pa(a);d(B,b(v.artboards)),d(T,b(v.rootId)),d(_,b(v.rootClassName)),d(f,b(v.cssText)),d(S,b(l)),d(O,""),d(k,"");const M=typeof window<"u"?window.innerWidth:1200;mt(wa(v.artboards,M)||v.artboards[0])}catch(v){d(z,b(v instanceof Error?v.message:"Could not read ai2html file."))}}Re(()=>{var a;typeof document<"u"&&((a=n(q))==null||a.remove(),document.body.classList.remove("dragging-labels"))});function sn(a=[]){return a.map(l=>({...l,styleMap:{...l.styleMap||{}}}))}function ct(a,l){d(w,b(n(w).map(v=>v.id===a?l(v):v)))}function mt(a){var l;a&&(d(D,b(a.id)),d(w,b(sn(a.labels||[]))),d(I,b(((l=n(w)[0])==null?void 0:l.id)||"")))}async function St(a){if(!a)return;const l=await a.text();await an(l,a.name)}function ln(a){const[l]=a.currentTarget.files||[];St(l)}function Nt(a){a.preventDefault()}function Rt(a){a.preventDefault();const[l]=a.dataTransfer.files||[];l&&(l.name.endsWith(".html")||l.type.includes("html")||l.type.includes("text"))&&St(l)}function wn(a){const[l]=a.currentTarget.files||[];if(!l||!l.type.startsWith("image/"))return;const v=new FileReader;v.onload=()=>{d(O,b(v.result)),d(k,b(l.name)),d(S,""),d(B,b([])),d(D,""),d(T,""),d(_,"ai2html"),d(f,""),d(w,b([])),d(I,"");const M=new Image;M.onload=()=>{M.naturalWidth&&M.naturalHeight&&d(x,b(M.naturalWidth))},M.src=v.result},v.readAsDataURL(l)}function Pn(a){const l=a.target;l.naturalWidth&&d(x,b(l.naturalWidth))}function on(a){const l=n(B).find(({id:v})=>v===a.currentTarget.value);mt(l)}function rn(a=""){if(!a||a==="none")return;const l=Kn(a),v=mn.find(M=>Kn(Pt(M.shadow,n(C)))===l);v&&d(L,b(v.shadow))}function An(a){if(!a||typeof document>"u")return;const l=document.getElementById(a);if(!l)return;const v=l.querySelector("p, span, div")||l,M=getComputedStyle(v),Z=ce(M.color);Z&&d(P,b(Z));const K=M.textShadow;if(K&&K!=="none"){const lt=$e(K);lt&&d(C,b(lt)),rn(K)}}function ut(a){d(I,b(a)),An(a)}function _n(a){if(d(L,b(a)),!n(I)){d(w,b(n(w).map(l=>({...l,shadow:Pt(a,n(C))}))));return}ct(n(I),l=>({...l,shadow:Pt(a,n(C))}))}function pn(){d(w,b(n(w).map(a=>({...a,shadow:n(et)}))))}function Ot(){n(I)&&ct(n(I),a=>({...a,shadow:""}))}function dt(){n(I)&&ct(n(I),a=>({...a,shadow:Pt(a.shadow||n(L),n(C))}))}function Ft(){n(I)&&ct(n(I),a=>({...a,textColor:n(P)}))}function Ct(){d(w,b(n(w).map(a=>({...a,textColor:n(P)}))))}function Et(){d(w,b(n(w).map(a=>({...a,textColor:""}))))}function Xt(){if(n(I)){Ft();return}n(w).length&&Ct()}function Ht(){if(n(I)){dt();return}d(w,b(n(w).map(a=>a.shadow?{...a,shadow:Pt(a.shadow,n(C))}:a)))}async function Bt(){n(et)&&await i(`text-shadow: ${n(et)}`)}function cn(a){d($,b(ta(a.currentTarget.value||"")))}function Wt(){if(!n(I)||typeof document>"u")return"";const a=document.getElementById(n(I));if(!a)return"";const l=a.querySelector("p, span, div")||a,v=getComputedStyle(l).textShadow;return v&&v!=="none"?v:""}function qt(){var l;if((l=n(st))!=null&&l.shadow)return n(st).shadow;const a=Wt();return a||n(et)}function bt(){if(!n(vt))return;const a=qt();if(!a)return;const l={className:n($),shadow:a},v=n(U).findIndex(M=>M.className===n($));if(v===-1){d(U,b([...n(U),l]));return}d(U,b(n(U).map((M,Z)=>Z===v?l:M)))}function Sn(){d(U,b([]))}async function dn(){n(Lt)&&await i(n(Lt))}async function Vt(a){if(n(ht))try{const v=await new window.EyeDropper().open();if(a==="shadow"){d(C,b(v.sRGBHex)),n(st)&&dt();return}d(P,b(v.sRGBHex)),n(st)&&Ft()}catch{}}function It(a,l){var Z,K;if(!n(A))return;a.stopPropagation(),ut(l.id);const v=l.styleMap||{},M=n(A).getBoundingClientRect();d(X,b({id:l.id,startX:a.clientX,startY:a.clientY,startTop:parseFloat(v.top)||0,startLeft:parseFloat(v.left)||0,width:M.width,height:M.height})),document.body.classList.add("dragging-labels"),(K=(Z=a.currentTarget).setPointerCapture)==null||K.call(Z,a.pointerId)}function Gt(a){if(!n(X))return;const l=(a.clientX-n(X).startX)/n(X).width*100,v=(a.clientY-n(X).startY)/n(X).height*100,M=Math.min(100,Math.max(0,n(X).startTop+v)),Z=Math.min(100,Math.max(0,n(X).startLeft+l));ct(n(X).id,K=>{const lt={...K.styleMap||{}};return lt.top=`${M}%`,lt.left=`${Z}%`,{...K,styleMap:lt}})}function Ut(){d(X,null),document.body.classList.remove("dragging-labels")}function zt(a){const l=[];if(a.styleMap)for(const[v,M]of Object.entries(a.styleMap))l.push(`${v}: ${M}`);return!n(it)&&a.shadow&&l.push(`--editor-shadow: ${a.shadow}`),!n(it)&&a.textColor&&l.push(`--editor-text-color: ${a.textColor}`),l.join("; ")}var gt=Oa();tt("pointermove",zn,Gt),tt("pointerup",zn,Ut),tt("pointercancel",zn,Ut);var Yt=h(gt),Tt=h(Yt),jt=y(h(Tt),2),Cn=h(jt);xa(Cn,{get artboards(){return n(B)},get stageWidth(){return n(pt)},get labelsCount(){return n(w).length},get selectedLabel(){return n(st)},get activeShadow(){return n(et)},get workspaceImage(){return n(rt)},get htmlFileName(){return n(S)},get imageFileName(){return n(k)},get onLoadSample(){return m()},get cssClassName(){return n($)},get cssClassNameValid(){return n(vt)},get currentRulePreview(){return n(bn)},get cssSheetPreview(){return n(Lt)},get cssRules(){return n(U)},get canUseEyeDropper(){return n(ht)},onAi2htmlDrop:Rt,onAi2htmlInput:ln,onImageInput:wn,onArtboardChange:on,onApplyShadowToAll:pn,onApplyTextToSelected:Ft,onApplyTextToAll:Ct,onClearTextColors:Et,onTextColorLive:Xt,onPickTextColor:()=>Vt("text"),onRecolorSelectedShadow:dt,onClearSelectedShadow:Ot,onCopyCurrentShadow:Bt,onShadowColorLive:Ht,onPickShadowColor:()=>Vt("shadow"),onCssClassNameInput:cn,onAddRuleToSheet:bt,onCopyCssSheet:dn,onClearCssSheet:Sn,get selectedArtboardId(){return n(D)},set selectedArtboardId(a){d(D,b(a))},get previewOriginal(){return n(it)},set previewOriginal(a){d(it,b(a))},get textColor(){return n(P)},set textColor(a){d(P,b(a))},get shadowColor(){return n(C)},set shadowColor(a){d(C,b(a))}}),g(jt),g(Tt),g(Yt);var Jt=y(Yt,2),Kt=h(Jt);{var gn=a=>{var l=Ca(),v=h(l,!0);g(l),J(()=>ft(v,n(z))),R(a,l)};ot(Kt,a=>{n(z)&&a(gn)})}var Zt=y(Kt,2),fn=h(Zt);{var Qt=a=>{var l=Na(),v=h(l),M=h(v),Z=h(M);{var K=r=>{var s=Ma();s.__pointerdown=[Sa,I];var H=h(s);{var wt=E=>{var j=Ia();J(()=>W(j,"style",n(V).paddingStyle)),R(E,j)};ot(H,E=>{n(V).paddingStyle&&E(wt)})}var G=y(H,2),Y=y(G,2);xn(Y,17,()=>n(w),E=>E.id,(E,j)=>{var at=Ta();const de=Q(()=>zt(n(j)));at.__pointerdown=[za,It,j];var ge=h(at);jn(ge,()=>n(j).html),g(at),J(()=>{W(at,"id",n(j).id),yt(at,`${`draggable-label ${n(j).className} ${n(I)===n(j).id?"is-active":""} ${n(j).textColor?"has-custom-text":""} ${n(j).shadow?"has-custom-shadow":""}`??""} svelte-d9013w`),W(at,"style",n(de)),W(at,"aria-label",`Text ${n(j).previewText}`)}),tt("focus",at,()=>ut(n(j).id)),R(E,at)}),g(s),Fe(s,E=>d(A,E),()=>n(A)),J(()=>{W(s,"id",n(V).id),yt(s,`${`${n(V).className||"g-artboard"} editor-artboard`??""} svelte-d9013w`),W(s,"style",n(V).style||""),W(G,"id",n(V).imageId),yt(G,Ue(n(V).imageClassName||"g-aiImg"),"svelte-d9013w"),W(G,"src",n(rt)),W(G,"alt",n(V).imageAlt||"Mapa de fondo"),W(G,"width",n(pt))}),tt("load",G,Pn),Un(G),Ee(G),R(r,s)},lt=r=>{var s=La(),H=h(s),wt=y(H,2);xn(wt,17,()=>n(w),G=>G.id,(G,Y)=>{var E=Da();const j=Q(()=>zt(n(Y)));E.__pointerdown=[ka,It,Y];var at=h(E);jn(at,()=>n(Y).html),g(E),J(()=>{yt(E,`${`draggable-label ${n(I)===n(Y).id?"is-active":""} ${n(Y).textColor?"has-custom-text":""} ${n(Y).shadow?"has-custom-shadow":""}`??""} svelte-d9013w`),W(E,"style",n(j)),W(E,"aria-label",`Text ${n(Y).previewText}`)}),tt("focus",E,()=>ut(n(Y).id)),R(G,E)}),g(s),J(()=>{W(H,"src",n(rt)),W(H,"width",n(pt))}),tt("dragover",s,Nt),tt("drop",s,Rt),Un(H),R(r,s)};ot(Z,r=>{n(V)?r(K):r(lt,!1)})}g(M),g(v),g(l),J(()=>{W(v,"style",`width:${n(pt)}px;`),W(M,"id",n(T)||"ai2html-root"),yt(M,`${`${n(_)||"ai2html"} editor-root`??""} svelte-d9013w`)}),R(a,l)},$t=a=>{var l=Ra();tt("dragover",l,Nt),tt("drop",l,Rt),R(a,l)};ot(fn,a=>{n(rt)?a(Qt):a($t,!1)})}g(Zt),g(Jt);var Mt=y(Jt,2),tn=h(Mt);sa(tn,{get selectedShadowRaw(){return n(L)},get shadowColor(){return n(C)},get textColor(){return n(P)},get selectedShadowMeta(){return n(_t)},onChooseShadow:_n}),g(Mt),g(gt),R(e,gt),un()}Fn(["pointerdown"]);const Ea=`<div id="g-libano-box" class="ai2html media-wide">
	<style type="text/css" media="screen,print">
		#g-libano-box {
			max-width: 930px;
			font-family: 'Libre Franklin', sans-serif;
		}

		.g-artboard {
			margin: 0 auto;
		}

		.g-water-label,
		.g-seas {
			color: #006280;
			font-family: 'PT Serif', serif;
			font-style: italic;
			/* text-shadow:-1px -1px 1px #ffffff, -1px 0px 1px #ffffff, -1px 1px 1px #ffffff, 0px -1px 1px #ffffff, 0px 1px 1px #ffffff, 1px -1px 1px #ffffff, 1px 0px 1px #ffffff, 1px 1px 1px #ffffff; */
		}

		.g-sdw {
			text-shadow:
				-0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
				0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
				-0.5px 0.5px 0 rgba(255, 255, 255, 0.5),
				0.5px 0.5px 0 rgba(255, 255, 255, 0.5);
		}

		.g-water-label {
			color: #006280;
			font-style: italic;
			font-family: 'PT Serif', serif;
			text-shadow:
				-1px -1px 1px #ffffff,
				-1px 0px 1px #ffffff,
				-1px 1px 1px #ffffff,
				0px -1px 1px #ffffff,
				0px 1px 1px #ffffff,
				1px -1px 1px #ffffff,
				1px 0px 1px #ffffff,
				1px 1px 1px #ffffff;
		}

		#g-libano-box .g-countries,
		#g-libano-box .g-citie {
			text-shadow:
				-0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
				0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
				-0.5px 0.5px 0 rgba(255, 255, 255, 0.5),
				0.5px 0.5px 0 rgba(255, 255, 255, 0.5);
		}

		#g-libano-box .g-countries p {
			text-transform: uppercase;
			font-family: 'Libre Franklin', sans-serif;
			font-weight: 300;
			color: gray;
		}

		#g-libano-art-1-graphic,
		#g-libano-art-2-graphic,
		#g-libano-art-3-graphic,
		#g-libano-art-4-graphic,
		#g-libano-art-5-graphic {
			display: none;
		}

		@media only screen and (max-width: 459px) {
			#g-libano-art-5-graphic {
				display: block;
			}
		}

		@media only screen and (min-width: 460px) and (max-width: 599px) {
			#g-libano-art-4-graphic {
				display: block;
			}
		}

		@media only screen and (min-width: 600px) and (max-width: 719px) {
			#g-libano-art-3-graphic {
				display: block;
			}
		}

		@media only screen and (min-width: 720px) and (max-width: 929px) {
			#g-libano-art-2-graphic {
				display: block;
			}
		}

		@media only screen and (min-width: 930px) {
			#g-libano-art-1-graphic {
				display: block;
			}
		}
	</style>
	<div id="g-libano-art-1" class="g-artboard g-artboard-v3" data-min-width="930">
		<style type="text/css" media="screen,print">
			#g-libano-art-1 {
				position: relative;
				overflow: hidden;
				width: 930px;
			}

			.g-aiAbs {
				position: absolute;
			}

			.g-aiImg {
				display: block;
				width: 100% !important;
			}

			#g-libano-art-1 p {
				font-size: 13px;
				line-height: 18px;
				margin: 0;
			}

			#g-libano-art-1 .g-aiPstyle0 {
				font-size: 12px;
				line-height: 14px;
				font-weight: bold;
				text-align: center;
				color: #4f4f4f;
			}

			#g-libano-art-1 .g-aiPstyle1 {
				font-size: 12px;
				line-height: 13px;
				font-weight: bold;
				color: #4f4f4f;
			}

			#g-libano-art-1 .g-aiPstyle2 {
				font-size: 12px;
				line-height: 14px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				filter: alpha(opacity=50);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
				opacity: 0.5;
				color: #000000;
			}

			#g-libano-art-1 .g-aiPstyle3 {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				filter: alpha(opacity=70);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				opacity: 0.7;
				color: #6d6d6c;
			}

			#g-libano-art-1 .g-aiPstyle4 {
				font-size: 12px;
				line-height: 12px;
				text-align: center;
				filter: alpha(opacity=40);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
				opacity: 0.4;
				color: #152601;
			}

			#g-libano-art-1 .g-aiPstyle5 {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				filter: alpha(opacity=60);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
				opacity: 0.6;
				color: #006280;
			}

			#g-libano-art-1 .g-aiPstyle6 {
				font-size: 12px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-1 .g-aiPstyle7 {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-1 .g-aiPstyle8 {
				line-height: 15px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-1 .g-aiPstyle9 {
				font-size: 12px;
				line-height: 13px;
				filter: alpha(opacity=80);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
				opacity: 0.8;
				color: #000000;
			}

			#g-libano-art-1 .g-aiPstyle10 {
				font-size: 12px;
				line-height: 14px;
				font-weight: bold;
				text-align: center;
				filter: alpha(opacity=90);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)';
				opacity: 0.9;
				color: #ffffff;
			}

			#g-libano-art-1 .g-aiPstyle11 {
				font-size: 12px;
				line-height: 12px;
				font-weight: bold;
				font-style: italic;
				text-align: center;
				color: #49599b;
			}

			#g-libano-art-1 .g-aiPstyle12 {
				font-size: 12px;
				line-height: 14px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #000000;
			}

			#g-libano-art-1 .g-aiPstyle13 {
				font-size: 12px;
				line-height: 14px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
			}

			#g-libano-art-1 .g-aiPstyle14 {
				font-size: 12px;
				line-height: 14px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			.g-aiPtransformed p {
				white-space: nowrap;
			}
		</style>
		<div id="g-libano-art-1-graphic">
			<img
				loading="lazy"
				decoding="auto"
				id="g-ai0-0"
				class="g-aiImg"
				src="/assets/images/lebanon/libano-art-1.png"
			/>
			<p></p>
			<div
				id="g-ai0-1"
				class="g-cities g-aiAbs"
				style="top: 1.528%; left: 71.2827%; width: 7.1816%; margin-left: -3.5908%"
			>
				<p class="g-aiPstyle0">Homs</p>
				<p></p>
			</div>
			<div id="g-ai0-2" class="g-sdw g-aiAbs" style="top: 2.101%; left: 24.529%">
				<p class="g-aiPstyle1">Base Miguel</p>
				<p class="g-aiPstyle1">de Cervantes</p>
				<p></p>
			</div>
			<div
				id="g-ai0-3"
				class="g-countries g-aiAbs"
				style="top: 7.2581%; left: 16.2398%; width: 11.8078%; margin-left: -5.9039%"
			>
				<p class="g-aiPstyle2">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai0-4"
				class="g-forces g-aiAbs"
				style="top: 11.0781%; left: 81.5497%; width: 18.3606%; margin-left: -9.1803%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai0-5"
				class="g-other-labels g-aiAbs"
				style="top: 12.6061%; left: 28.6212%; width: 6.8695%; margin-left: -3.4348%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">este</p>
				<p></p>
			</div>
			<div
				id="g-ai0-6"
				class="g-water-label g-aiAbs"
				style="top: 13.1791%; left: 15.4055%; width: 9.9378%; margin-left: -4.9689%"
			>
				<p class="g-aiPstyle5">Río Litani</p>
				<p></p>
			</div>
			<div
				id="g-ai0-7"
				class="g-sdw g-aiAbs"
				style="top: 16.6171%; left: 24.1517%; width: 9.7518%; margin-left: -4.8759%"
			>
				<p class="g-aiPstyle6">Mando</p>
				<p class="g-aiPstyle6">español</p>
				<p></p>
			</div>
			<div
				id="g-ai0-8"
				class="g-sdw g-aiAbs"
				style="top: 17.7632%; left: 33.9672%; width: 5.1651%; margin-left: -2.5825%"
			>
				<p class="g-aiPstyle7">4-34</p>
				<p></p>
			</div>
			<div
				id="g-ai0-9"
				class="g-sdw g-aiAbs"
				style="top: 20.4372%; left: 33.5412%; width: 10.7974%; margin-left: -5.3987%"
			>
				<p class="g-aiPstyle7">Al Ghajar</p>
				<p></p>
			</div>
			<div
				id="g-ai0-10"
				class="g-other-labels g-aiAbs"
				style="top: 25.7852%; left: 19.8503%; width: 10.6075%; margin-left: -5.3037%"
			>
				<p class="g-aiPstyle8">UNIFIL</p>
				<p></p>
			</div>
			<div id="g-ai0-11" class="g-other-labels g-aiAbs" style="top: 26.5492%; left: 26.1578%">
				<p class="g-aiPstyle9">Territorio ocupado</p>
				<p class="g-aiPstyle9">por Israel en 2006</p>
				<p></p>
			</div>
			<div
				id="g-ai0-12"
				class="g-other-labels g-aiAbs"
				style="top: 29.0323%; left: 13.9095%; width: 6.8695%; margin-left: -3.4348%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">oeste</p>
				<p></p>
			</div>
			<div
				id="g-ai0-13"
				class="g-forces g-aiAbs"
				style="top: 30.3693%; left: 95.1721%; width: 4.8765%; margin-left: -2.4383%"
			>
				<p class="g-aiPstyle10">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai0-14"
				class="g-sdw g-aiAbs"
				style="top: 31.8973%; left: 25.8993%; width: 5.1651%; margin-left: -2.5825%"
			>
				<p class="g-aiPstyle7">8-33</p>
				<p></p>
			</div>
			<div
				id="g-ai0-15"
				class="g-countries g-aiAbs"
				style="top: 39.5374%; left: 31.8638%; width: 11.4254%; margin-left: -5.7127%"
			>
				<p class="g-aiPstyle2">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai0-16"
				class="g-forces g-aiAbs"
				style="top: 40.3014%; left: 84.4565%; width: 15.2016%; margin-left: -7.6008%"
			>
				<p class="g-aiPstyle3">Control Mixto</p>
				<p></p>
			</div>
			<div
				id="g-ai0-17"
				class="g-sdw g-aiAbs"
				style="top: 44.5034%; left: 9.3487%; width: 10.4675%; margin-left: -5.2337%"
			>
				<p class="g-aiPstyle11">blue line</p>
				<p></p>
			</div>
			<div
				id="g-ai0-18"
				class="g-countries g-aiAbs"
				style="top: 44.3124%; left: 51.0086%; width: 11.8078%; margin-left: -5.9039%"
			>
				<p class="g-aiPstyle12">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai0-19"
				class="g-cities g-aiAbs"
				style="top: 49.4694%; left: 43.4713%; width: 7.4682%; margin-left: -3.7341%"
			>
				<p class="g-aiPstyle0">Beirut</p>
				<p></p>
			</div>
			<div
				id="g-ai0-20"
				class="g-cities g-aiAbs"
				style="top: 65.8956%; left: 61.7698%; width: 11.4946%; margin-left: -5.7473%"
			>
				<p class="g-aiPstyle0">Damasco</p>
				<p></p>
			</div>
			<div
				id="g-ai0-21"
				class="g-seas g-aiAbs"
				style="top: 67.2326%; left: 16.4487%; width: 33.4904%; margin-left: -16.7452%"
			>
				<p class="g-aiPstyle13">mar mediterráneo</p>
				<p></p>
			</div>
			<div
				id="g-ai0-22"
				class="g-countries g-aiAbs"
				style="top: 72.0076%; left: 86.8387%; width: 8.5473%; margin-left: -4.2737%"
			>
				<p class="g-aiPstyle12">siria</p>
				<p></p>
			</div>
			<div
				id="g-ai0-23"
				class="g-forces g-aiAbs"
				style="top: 76.5917%; left: 73.1972%; width: 4.8765%; margin-left: -2.4383%"
			>
				<p class="g-aiPstyle10">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai0-24"
				class="g-forces g-aiAbs"
				style="top: 81.5577%; left: 60.2958%; width: 18.3605%; margin-left: -9.1803%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai0-25"
				class="g-countries g-aiAbs"
				style="top: 87.4788%; left: 37.166%; width: 10.6075%; margin-left: -5.3037%"
			>
				<p class="g-aiPstyle14">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai0-26"
				class="g-countries g-aiAbs"
				style="top: 91.4898%; left: 45.677%; width: 11.4254%; margin-left: -5.7127%"
			>
				<p class="g-aiPstyle12">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai0-27"
				class="g-forces g-aiAbs"
				style="top: 92.6358%; left: 55.1504%; width: 13.629%; margin-left: -6.8145%"
			>
				<p class="g-aiPstyle3">Fuerzas de</p>
				<p class="g-aiPstyle3">la oposición</p>
				<p></p>
			</div>
			<p></p>
		</div>
		<p></p>
	</div>
	<div
		id="g-libano-art-2"
		class="g-artboard g-artboard-v3"
		data-min-width="720"
		data-max-width="929"
	>
		<style type="text/css" media="screen,print">
			#g-libano-art-2 {
				position: relative;
				overflow: hidden;
				width: 720px;
			}

			.g-aiAbs {
				position: absolute;
			}

			.g-aiImg {
				display: block;
				width: 100% !important;
			}

			#g-libano-art-2 p {
				font-size: 13px;
				line-height: 18px;
				margin: 0;
			}

			#g-libano-art-2 .g-aiPstyle0 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #4f4f4f;
			}

			#g-libano-art-2 .g-aiPstyle1 {
				font-size: 11px;
				line-height: 12px;
				font-weight: bold;
				color: #4f4f4f;
			}

			#g-libano-art-2 .g-aiPstyle2 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				filter: alpha(opacity=50);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
				opacity: 0.5;
				color: #000000;
			}

			#g-libano-art-2 .g-aiPstyle3 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=70);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				opacity: 0.7;
				color: #6d6d6c;
			}

			#g-libano-art-2 .g-aiPstyle4 {
				font-size: 11px;
				line-height: 9px;
				text-align: center;
				filter: alpha(opacity=40);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
				opacity: 0.4;
				color: #152601;
			}

			#g-libano-art-2 .g-aiPstyle5 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=60);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
				opacity: 0.6;
				color: #006280;
			}

			#g-libano-art-2 .g-aiPstyle6 {
				font-size: 11px;
				line-height: 12px;
				font-weight: bold;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-2 .g-aiPstyle7 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-2 .g-aiPstyle8 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-2 .g-aiPstyle9 {
				font-size: 11px;
				line-height: 12px;
				filter: alpha(opacity=80);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
				opacity: 0.8;
				color: #000000;
			}

			#g-libano-art-2 .g-aiPstyle10 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				filter: alpha(opacity=90);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)';
				opacity: 0.9;
				color: #ffffff;
			}

			#g-libano-art-2 .g-aiPstyle11 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #000000;
			}

			#g-libano-art-2 .g-aiPstyle12 {
				font-size: 11px;
				line-height: 9px;
				font-weight: bold;
				font-style: italic;
				text-align: center;
				color: #49599b;
			}

			#g-libano-art-2 .g-aiPstyle13 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.08333333333333em;
			}

			.g-aiPtransformed p {
				white-space: nowrap;
			}
		</style>
		<div id="g-libano-art-2-graphic">
			<img
				loading="lazy"
				decoding="auto"
				id="g-ai1-0"
				class="g-aiImg"
				src="/assets/images/lebanon/libano-art-2.png"
			/>
			<p></p>
			<div
				id="g-ai1-1"
				class="g-cities g-aiAbs"
				style="top: 1.2351%; left: 71.7795%; width: 8.4893%; margin-left: -4.2447%"
			>
				<p class="g-aiPstyle0">Homs</p>
				<p></p>
			</div>
			<div id="g-ai1-2" class="g-sdw g-aiAbs" style="top: 1.7291%; left: 24.7544%">
				<p class="g-aiPstyle1">Base Miguel</p>
				<p class="g-aiPstyle1">de Cervantes</p>
				<p></p>
			</div>
			<div
				id="g-ai1-3"
				class="g-countries g-aiAbs"
				style="top: 6.9165%; left: 16.4342%; width: 13.9577%; margin-left: -6.9788%"
			>
				<p class="g-aiPstyle2">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai1-4"
				class="g-forces g-aiAbs"
				style="top: 10.6218%; left: 82.1061%; width: 21.7394%; margin-left: -10.8697%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai1-5"
				class="g-other-labels g-aiAbs"
				style="top: 12.5979%; left: 28.8703%; width: 8.1338%; margin-left: -4.0669%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">este</p>
				<p></p>
			</div>
			<div
				id="g-ai1-6"
				class="g-water-label g-aiAbs"
				style="top: 13.092%; left: 15.5779%; width: 11.7668%; margin-left: -5.8834%"
			>
				<p class="g-aiPstyle5">Río Litani</p>
				<p></p>
			</div>
			<div
				id="g-ai1-7"
				class="g-sdw g-aiAbs"
				style="top: 16.5502%; left: 24.3749%; width: 11.5464%; margin-left: -5.7732%"
			>
				<p class="g-aiPstyle6">Mando</p>
				<p class="g-aiPstyle6">español</p>
				<p></p>
			</div>
			<div
				id="g-ai1-8"
				class="g-sdw g-aiAbs"
				style="top: 17.2913%; left: 34.6641%; width: 6.1156%; margin-left: -3.0578%"
			>
				<p class="g-aiPstyle7">4-34</p>
				<p></p>
			</div>
			<div
				id="g-ai1-9"
				class="g-sdw g-aiAbs"
				style="top: 20.5025%; left: 34.0982%; width: 12.7843%; margin-left: -6.3921%"
			>
				<p class="g-aiPstyle7">Al Ghajar</p>
				<p></p>
			</div>
			<div
				id="g-ai1-10"
				class="g-other-labels g-aiAbs"
				style="top: 25.6899%; left: 20.0611%; width: 12.0551%; margin-left: -6.0276%"
			>
				<p class="g-aiPstyle8">UNIFIL</p>
				<p></p>
			</div>
			<div id="g-ai1-11" class="g-other-labels g-aiAbs" style="top: 26.4309%; left: 26.1148%">
				<p class="g-aiPstyle9">Territorio ocupado</p>
				<p class="g-aiPstyle9">por Israel en 2006</p>
				<p></p>
			</div>
			<div
				id="g-ai1-12"
				class="g-other-labels g-aiAbs"
				style="top: 29.1481%; left: 14.0731%; width: 8.1338%; margin-left: -4.0669%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">oeste</p>
				<p></p>
			</div>
			<div
				id="g-ai1-13"
				class="g-forces g-aiAbs"
				style="top: 30.1362%; left: 95.8076%; width: 5.7739%; margin-left: -2.887%"
			>
				<p class="g-aiPstyle10">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai1-14"
				class="g-sdw g-aiAbs"
				style="top: 32.3594%; left: 26.1326%; width: 6.1156%; margin-left: -3.0578%"
			>
				<p class="g-aiPstyle7">8-33</p>
				<p></p>
			</div>
			<div
				id="g-ai1-15"
				class="g-countries g-aiAbs"
				style="top: 39.5229%; left: 32.1488%; width: 13.5056%; margin-left: -6.7528%"
			>
				<p class="g-aiPstyle2">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai1-16"
				class="g-forces g-aiAbs"
				style="top: 40.2639%; left: 85.0298%; width: 17.9991%; margin-left: -8.9996%"
			>
				<p class="g-aiPstyle3">Control Mixto</p>
				<p></p>
			</div>
			<div
				id="g-ai1-17"
				class="g-countries g-aiAbs"
				style="top: 44.2162%; left: 51.4049%; width: 13.9577%; margin-left: -6.9788%"
			>
				<p class="g-aiPstyle11">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai1-18"
				class="g-sdw g-aiAbs"
				style="top: 45.2043%; left: 9.486%; width: 12.3938%; margin-left: -6.1969%"
			>
				<p class="g-aiPstyle12">blue line</p>
				<p></p>
			</div>
			<div
				id="g-ai1-19"
				class="g-cities g-aiAbs"
				style="top: 49.4036%; left: 43.8067%; width: 8.828%; margin-left: -4.414%"
			>
				<p class="g-aiPstyle0">Beirut</p>
				<p></p>
			</div>
			<div
				id="g-ai1-20"
				class="g-cities g-aiAbs"
				style="top: 65.9538%; left: 62.2113%; width: 13.5874%; margin-left: -6.7937%"
			>
				<p class="g-aiPstyle0">Damasco</p>
				<p></p>
			</div>
			<div
				id="g-ai1-21"
				class="g-seas g-aiAbs"
				style="top: 67.1889%; left: 16.6061%; width: 37.1438%; margin-left: -18.5719%"
			>
				<p class="g-aiPstyle13">mar mediterráneo</p>
				<p></p>
			</div>
			<div
				id="g-ai1-22"
				class="g-countries g-aiAbs"
				style="top: 72.1292%; left: 87.443%; width: 10.1036%; margin-left: -5.0518%"
			>
				<p class="g-aiPstyle11">siria</p>
				<p></p>
			</div>
			<div
				id="g-ai1-23"
				class="g-forces g-aiAbs"
				style="top: 76.5756%; left: 73.7051%; width: 5.7739%; margin-left: -2.887%"
			>
				<p class="g-aiPstyle10">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai1-24"
				class="g-forces g-aiAbs"
				style="top: 81.7629%; left: 60.7288%; width: 21.7395%; margin-left: -10.8698%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai1-25"
				class="g-countries g-aiAbs"
				style="top: 87.9384%; left: 37.4818%; width: 12.5388%; margin-left: -6.2694%"
			>
				<p class="g-aiPstyle8">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai1-26"
				class="g-countries g-aiAbs"
				style="top: 91.6437%; left: 46.0423%; width: 13.5056%; margin-left: -6.7528%"
			>
				<p class="g-aiPstyle11">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai1-27"
				class="g-forces g-aiAbs"
				style="top: 92.8787%; left: 55.5535%; width: 16.1372%; margin-left: -8.0686%"
			>
				<p class="g-aiPstyle3">Fuerzas de</p>
				<p class="g-aiPstyle3">la oposición</p>
				<p></p>
			</div>
			<p></p>
		</div>
		<p></p>
	</div>
	<div
		id="g-libano-art-3"
		class="g-artboard g-artboard-v3"
		data-min-width="600"
		data-max-width="719"
	>
		<style type="text/css" media="screen,print">
			#g-libano-art-3 {
				position: relative;
				overflow: hidden;
				width: 600px;
			}

			.g-aiAbs {
				position: absolute;
			}

			.g-aiImg {
				display: block;
				width: 100% !important;
			}

			#g-libano-art-3 p {
				font-size: 13px;
				line-height: 18px;
				margin: 0;
			}

			#g-libano-art-3 .g-aiPstyle0 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #4f4f4f;
			}

			#g-libano-art-3 .g-aiPstyle1 {
				font-size: 11px;
				line-height: 12px;
				font-weight: bold;
				color: #4f4f4f;
			}

			#g-libano-art-3 .g-aiPstyle2 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				filter: alpha(opacity=50);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
				opacity: 0.5;
				color: #000000;
			}

			#g-libano-art-3 .g-aiPstyle3 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=70);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				opacity: 0.7;
				color: #6d6d6c;
			}

			#g-libano-art-3 .g-aiPstyle4 {
				font-size: 11px;
				line-height: 9px;
				text-align: center;
				filter: alpha(opacity=40);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
				opacity: 0.4;
				color: #152601;
			}

			#g-libano-art-3 .g-aiPstyle5 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=60);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
				opacity: 0.6;
				color: #006280;
			}

			#g-libano-art-3 .g-aiPstyle6 {
				font-size: 11px;
				line-height: 12px;
				font-weight: bold;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-3 .g-aiPstyle7 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-3 .g-aiPstyle8 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-3 .g-aiPstyle9 {
				font-size: 11px;
				line-height: 12px;
				filter: alpha(opacity=80);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
				opacity: 0.8;
				color: #000000;
			}

			#g-libano-art-3 .g-aiPstyle10 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #000000;
			}

			#g-libano-art-3 .g-aiPstyle11 {
				font-size: 11px;
				line-height: 9px;
				font-weight: bold;
				font-style: italic;
				text-align: center;
				color: #49599b;
			}

			#g-libano-art-3 .g-aiPstyle12 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.08333333333333em;
			}

			#g-libano-art-3 .g-aiPstyle13 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				filter: alpha(opacity=90);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)';
				opacity: 0.9;
				color: #ffffff;
			}

			.g-aiPtransformed p {
				white-space: nowrap;
			}
		</style>
		<div id="g-libano-art-3-graphic">
			<img
				loading="lazy"
				decoding="auto"
				id="g-ai2-0"
				class="g-aiImg"
				src="/assets/images/lebanon/libano-art-3.png"
			/>
			<p></p>
			<div
				id="g-ai2-1"
				class="g-cities g-aiAbs"
				style="top: 1.4821%; left: 82.837%; width: 10.1872%; margin-left: -5.0936%"
			>
				<p class="g-aiPstyle0">Homs</p>
				<p></p>
			</div>
			<div id="g-ai2-2" class="g-sdw g-aiAbs" style="top: 2.075%; left: 29.7052%">
				<p class="g-aiPstyle1">Base Miguel</p>
				<p class="g-aiPstyle1">de Cervantes</p>
				<p></p>
			</div>
			<div
				id="g-ai2-3"
				class="g-countries g-aiAbs"
				style="top: 8.2998%; left: 19.721%; width: 16.7492%; margin-left: -8.3746%"
			>
				<p class="g-aiPstyle2">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai2-4"
				class="g-forces g-aiAbs"
				style="top: 11.5604%; left: 90.9355%; width: 26.0874%; margin-left: -13.0437%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai2-5"
				class="g-other-labels g-aiAbs"
				style="top: 15.1175%; left: 34.6444%; width: 9.7606%; margin-left: -4.8803%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">este</p>
				<p></p>
			</div>
			<div
				id="g-ai2-6"
				class="g-water-label g-aiAbs"
				style="top: 15.7103%; left: 18.6935%; width: 14.1201%; margin-left: -7.0601%"
			>
				<p class="g-aiPstyle5">Río Litani</p>
				<p></p>
			</div>
			<div
				id="g-ai2-7"
				class="g-sdw g-aiAbs"
				style="top: 19.2674%; left: 29.0832%; width: 13.8556%; margin-left: -6.9278%"
			>
				<p class="g-aiPstyle6">Mando</p>
				<p class="g-aiPstyle6">español</p>
				<p></p>
			</div>
			<div
				id="g-ai2-8"
				class="g-sdw g-aiAbs"
				style="top: 20.7495%; left: 41.5969%; width: 7.3387%; margin-left: -3.6694%"
			>
				<p class="g-aiPstyle7">4-34</p>
				<p></p>
			</div>
			<div
				id="g-ai2-9"
				class="g-sdw g-aiAbs"
				style="top: 24.603%; left: 41.4179%; width: 15.3411%; margin-left: -7.6706%"
			>
				<p class="g-aiPstyle7">Al Ghajar</p>
				<p></p>
			</div>
			<div
				id="g-ai2-10"
				class="g-other-labels g-aiAbs"
				style="top: 30.8278%; left: 24.0733%; width: 14.4661%; margin-left: -7.2331%"
			>
				<p class="g-aiPstyle8">UNIFIL</p>
				<p></p>
			</div>
			<div id="g-ai2-11" class="g-other-labels g-aiAbs" style="top: 31.7171%; left: 31.3378%">
				<p class="g-aiPstyle9">Territorio ocupado</p>
				<p class="g-aiPstyle9">por Israel en 2006</p>
				<p></p>
			</div>
			<div
				id="g-ai2-12"
				class="g-countries g-aiAbs"
				style="top: 33.7921%; left: 66.0853%; width: 16.7492%; margin-left: -8.3746%"
			>
				<p class="g-aiPstyle10">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai2-13"
				class="g-other-labels g-aiAbs"
				style="top: 34.9777%; left: 16.8877%; width: 9.7606%; margin-left: -4.8803%"
			>
				<p class="g-aiPstyle4">Sector</p>
				<p class="g-aiPstyle4">oeste</p>
				<p></p>
			</div>
			<div
				id="g-ai2-14"
				class="g-sdw g-aiAbs"
				style="top: 38.8312%; left: 31.3591%; width: 7.3387%; margin-left: -3.6694%"
			>
				<p class="g-aiPstyle7">8-33</p>
				<p></p>
			</div>
			<div
				id="g-ai2-15"
				class="g-forces g-aiAbs"
				style="top: 39.4241%; left: 93.5083%; width: 21.5988%; margin-left: -10.7994%"
			>
				<p class="g-aiPstyle3">Control Mixto</p>
				<p></p>
			</div>
			<div
				id="g-ai2-16"
				class="g-countries g-aiAbs"
				style="top: 47.4274%; left: 38.5786%; width: 16.2067%; margin-left: -8.1034%"
			>
				<p class="g-aiPstyle2">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai2-17"
				class="g-cities g-aiAbs"
				style="top: 48.6131%; left: 56.1037%; width: 10.5936%; margin-left: -5.2968%"
			>
				<p class="g-aiPstyle0">Beirut</p>
				<p></p>
			</div>
			<div
				id="g-ai2-18"
				class="g-sdw g-aiAbs"
				style="top: 54.2451%; left: 11.3832%; width: 14.8726%; margin-left: -7.4363%"
			>
				<p class="g-aiPstyle11">blue line</p>
				<p></p>
			</div>
			<div
				id="g-ai2-19"
				class="g-cities g-aiAbs"
				style="top: 65.2127%; left: 73.3258%; width: 16.3049%; margin-left: -8.1524%"
			>
				<p class="g-aiPstyle0">Damasco</p>
				<p></p>
			</div>
			<div
				id="g-ai2-20"
				class="g-seas g-aiAbs"
				style="top: 66.102%; left: 28.0073%; width: 44.5726%; margin-left: -22.2863%"
			>
				<p class="g-aiPstyle12">mar mediterráneo</p>
				<p></p>
			</div>
			<div
				id="g-ai2-21"
				class="g-forces g-aiAbs"
				style="top: 75.5875%; left: 84.7512%; width: 6.9287%; margin-left: -3.4644%"
			>
				<p class="g-aiPstyle13">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai2-22"
				class="g-countries g-aiAbs"
				style="top: 76.7732%; left: 94.2013%; width: 12.1243%; margin-left: -6.0622%"
			>
				<p class="g-aiPstyle10">siria</p>
				<p></p>
			</div>
			<div
				id="g-ai2-23"
				class="g-forces g-aiAbs"
				style="top: 80.6267%; left: 71.8522%; width: 26.0874%; margin-left: -13.0437%"
			>
				<p class="g-aiPstyle3">Gobierno</p>
				<p class="g-aiPstyle3">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai2-24"
				class="g-countries g-aiAbs"
				style="top: 86.8515%; left: 48.7668%; width: 15.0465%; margin-left: -7.5233%"
			>
				<p class="g-aiPstyle8">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai2-25"
				class="g-forces g-aiAbs"
				style="top: 91.8907%; left: 68.7075%; width: 19.3646%; margin-left: -9.6823%"
			>
				<p class="g-aiPstyle3">Fuerzas de</p>
				<p class="g-aiPstyle3">la oposición</p>
				<p></p>
			</div>
			<div
				id="g-ai2-26"
				class="g-countries g-aiAbs"
				style="top: 93.6692%; left: 56.2764%; width: 16.2067%; margin-left: -8.1034%"
			>
				<p class="g-aiPstyle10">israel</p>
				<p></p>
			</div>
			<p></p>
		</div>
		<p></p>
	</div>
	<div
		id="g-libano-art-4"
		class="g-artboard g-artboard-v3"
		data-min-width="460"
		data-max-width="599"
	>
		<style type="text/css" media="screen,print">
			#g-libano-art-4 {
				position: relative;
				overflow: hidden;
				width: 460px;
			}

			.g-aiAbs {
				position: absolute;
			}

			.g-aiImg {
				display: block;
				width: 100% !important;
			}

			#g-libano-art-4 p {
				font-size: 13px;
				line-height: 18px;
				margin: 0;
			}

			#g-libano-art-4 .g-aiPstyle0 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #4f4f4f;
			}

			#g-libano-art-4 .g-aiPstyle1 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=70);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				opacity: 0.7;
				color: #6d6d6c;
			}

			#g-libano-art-4 .g-aiPstyle2 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.08333333333333em;
			}

			#g-libano-art-4 .g-aiPstyle3 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #000000;
			}

			#g-libano-art-4 .g-aiPstyle4 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				filter: alpha(opacity=90);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)';
				opacity: 0.9;
				color: #ffffff;
			}

			#g-libano-art-4 .g-aiPstyle5 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-4 .g-aiPstyle6 {
				font-size: 12px;
				line-height: 13px;
				font-weight: bold;
				color: #4f4f4f;
			}

			#g-libano-art-4 .g-aiPstyle7 {
				font-size: 12px;
				line-height: 14px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				filter: alpha(opacity=50);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
				opacity: 0.5;
				color: #000000;
			}

			#g-libano-art-4 .g-aiPstyle8 {
				font-size: 12px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=40);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
				opacity: 0.4;
				color: #152601;
			}

			#g-libano-art-4 .g-aiPstyle9 {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				filter: alpha(opacity=60);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
				opacity: 0.6;
				color: #006280;
			}

			#g-libano-art-4 .g-aiPstyle10 {
				font-size: 12px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-4 .g-aiPstyle11 {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-4 .g-aiPstyle12 {
				font-size: 12px;
				line-height: 14px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-4 .g-aiPstyle13 {
				font-size: 12px;
				line-height: 13px;
				filter: alpha(opacity=80);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
				opacity: 0.8;
				color: #000000;
			}

			#g-libano-art-4 .g-aiPstyle14 {
				font-size: 12px;
				line-height: 16px;
				font-weight: bold;
				font-style: italic;
				text-align: center;
				color: #49599b;
			}

			.g-aiPtransformed p {
				white-space: nowrap;
			}
		</style>
		<div id="g-libano-art-4-graphic">
			<img
				loading="lazy"
				decoding="auto"
				id="g-ai3-0"
				class="g-aiImg"
				src="/assets/images/lebanon/libano-art-4.png"
			/>
			<p></p>
			<div
				id="g-ai3-1"
				class="g-cities g-aiAbs"
				style="top: 1.2326%; left: 66.6436%; width: 13.2876%; margin-left: -6.6438%"
			>
				<p class="g-aiPstyle0">Homs</p>
				<p></p>
			</div>
			<div
				id="g-ai3-2"
				class="g-forces g-aiAbs"
				style="top: 6.437%; left: 78.8371%; width: 34.027%; margin-left: -17.0135%"
			>
				<p class="g-aiPstyle1">Gobierno</p>
				<p class="g-aiPstyle1">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai3-3"
				class="g-seas g-aiAbs g-aiPtransformed"
				style="
					left: 9.8996%;
					top: 17.3985%;
					transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1) scaleY(1);
					transform-origin: center top;
					-webkit-transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1)
						scaleY(1);
					-webkit-transform-origin: center top;
					-ms-transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1) scaleY(1);
					-ms-transform-origin: center top;
				"
			>
				<p class="g-aiPstyle2">mar mediterráneo</p>
				<p></p>
			</div>
			<div
				id="g-ai3-4"
				class="g-countries g-aiAbs"
				style="top: 18.0783%; left: 41.3943%; width: 21.8468%; margin-left: -10.9234%"
			>
				<p class="g-aiPstyle3">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai3-5"
				class="g-forces g-aiAbs"
				style="top: 21.0913%; left: 87.2104%; width: 28.1726%; margin-left: -14.0863%"
			>
				<p class="g-aiPstyle1">Control Mixto</p>
				<p></p>
			</div>
			<div
				id="g-ai3-6"
				class="g-cities g-aiAbs"
				style="top: 26.2957%; left: 26.3932%; width: 13.8177%; margin-left: -6.9089%"
			>
				<p class="g-aiPstyle0">Beirut</p>
				<p></p>
			</div>
			<div
				id="g-ai3-7"
				class="g-countries g-aiAbs"
				style="top: 27.6652%; left: 66.823%; width: 15.8144%; margin-left: -7.9072%"
			>
				<p class="g-aiPstyle3">siria</p>
				<p></p>
			</div>
			<div
				id="g-ai3-8"
				class="g-cities g-aiAbs"
				style="top: 34.3761%; left: 52.3234%; width: 21.2672%; margin-left: -10.6336%"
			>
				<p class="g-aiPstyle0">Damasco</p>
				<p></p>
			</div>
			<div
				id="g-ai3-9"
				class="g-forces g-aiAbs"
				style="top: 40.4022%; left: 69.5259%; width: 9.0374%; margin-left: -4.5187%"
			>
				<p class="g-aiPstyle4">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai3-10"
				class="g-forces g-aiAbs"
				style="top: 43.1413%; left: 50.1047%; width: 34.027%; margin-left: -17.0135%"
			>
				<p class="g-aiPstyle1">Gobierno</p>
				<p class="g-aiPstyle1">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai3-11"
				class="g-countries g-aiAbs"
				style="top: 46.2913%; left: 15.3191%; width: 19.6259%; margin-left: -9.813%"
			>
				<p class="g-aiPstyle5">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai3-12"
				class="g-forces g-aiAbs"
				style="top: 49.0305%; left: 44.5004%; width: 25.2582%; margin-left: -12.6291%"
			>
				<p class="g-aiPstyle1">Fuerzas de</p>
				<p class="g-aiPstyle1">la oposición</p>
				<p></p>
			</div>
			<div
				id="g-ai3-13"
				class="g-countries g-aiAbs"
				style="top: 49.9892%; left: 26.6256%; width: 21.1392%; margin-left: -10.5696%"
			>
				<p class="g-aiPstyle3">israel</p>
				<p></p>
			</div>
			<div id="g-ai3-14" class="g-sdw g-aiAbs" style="top: 57.3848%; left: 63.8468%">
				<p class="g-aiPstyle6">Base Miguel</p>
				<p class="g-aiPstyle6">de Cervantes</p>
				<p></p>
			</div>
			<div
				id="g-ai3-15"
				class="g-countries_2 g-aiAbs"
				style="top: 61.3566%; left: 41.1343%; width: 23.8328%; margin-left: -11.9164%"
			>
				<p class="g-aiPstyle7">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai3-16"
				class="g-other-labels g-aiAbs"
				style="top: 66.15%; left: 73.9023%; width: 13.8884%; margin-left: -6.9442%"
			>
				<p class="g-aiPstyle8">Sector</p>
				<p class="g-aiPstyle8">este</p>
				<p></p>
			</div>
			<div
				id="g-ai3-17"
				class="g-water-label g-aiAbs"
				style="top: 67.9305%; left: 42.0345%; width: 20.0917%; margin-left: -10.0459%"
			>
				<p class="g-aiPstyle9">Río Litani</p>
				<p></p>
			</div>
			<div
				id="g-ai3-18"
				class="g-sdw g-aiAbs"
				style="top: 70.5326%; left: 64.1217%; width: 19.7155%; margin-left: -9.8578%"
			>
				<p class="g-aiPstyle10">Mando</p>
				<p class="g-aiPstyle10">español</p>
				<p></p>
			</div>
			<div
				id="g-ai3-19"
				class="g-sdw g-aiAbs"
				style="top: 70.8066%; left: 87.8148%; width: 10.4424%; margin-left: -5.2212%"
			>
				<p class="g-aiPstyle11">4-34</p>
				<p></p>
			</div>
			<div
				id="g-ai3-20"
				class="g-sdw g-aiAbs"
				style="top: 73.1348%; left: 86.1099%; width: 21.8291%; margin-left: -10.9146%"
			>
				<p class="g-aiPstyle11">Al Ghajar</p>
				<p></p>
			</div>
			<div
				id="g-ai3-21"
				class="g-other-labels g-aiAbs"
				style="top: 78.6131%; left: 50.6644%; width: 20.5842%; margin-left: -10.2921%"
			>
				<p class="g-aiPstyle12">UNIFIL</p>
				<p></p>
			</div>
			<div id="g-ai3-22" class="g-other-labels g-aiAbs" style="top: 79.9826%; left: 68.187%">
				<p class="g-aiPstyle13">Territorio ocupado</p>
				<p class="g-aiPstyle13">por Israel en 2006</p>
				<p></p>
			</div>
			<div
				id="g-ai3-23"
				class="g-other-labels g-aiAbs"
				style="top: 81.4892%; left: 35.0383%; width: 13.8884%; margin-left: -6.9442%"
			>
				<p class="g-aiPstyle8">Sector</p>
				<p class="g-aiPstyle8">oeste</p>
				<p></p>
			</div>
			<div
				id="g-ai3-24"
				class="g-sdw g-aiAbs"
				style="top: 84.2283%; left: 66.0599%; width: 10.4424%; margin-left: -5.2212%"
			>
				<p class="g-aiPstyle11">8-33</p>
				<p></p>
			</div>
			<div
				id="g-ai3-25"
				class="g-countries_2 g-aiAbs"
				style="top: 91.624%; left: 82.4077%; width: 23.0609%; margin-left: -11.5304%"
			>
				<p class="g-aiPstyle7">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai3-26"
				class="g-sdw g-aiAbs"
				style="top: 95.1848%; left: 22.9905%; width: 21.1625%; margin-left: -10.5813%"
			>
				<p class="g-aiPstyle14">blue line</p>
				<p></p>
			</div>
			<p></p>
		</div>
		<p></p>
	</div>
	<div
		id="g-libano-art-5"
		class="g-artboard g-artboard-v3"
		data-min-width="300"
		data-max-width="459"
	>
		<style type="text/css" media="screen,print">
			#g-libano-art-5 {
				position: relative;
				overflow: hidden;
				width: 300px;
			}

			.g-aiAbs {
				position: absolute;
			}

			.g-aiImg {
				display: block;
				width: 100% !important;
			}

			#g-libano-art-5 p {
				font-size: 13px;
				line-height: 18px;
				margin: 0;
			}

			#g-libano-art-5 .g-aiPstyle0 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #4f4f4f;
			}

			#g-libano-art-5 .g-aiPstyle1 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=70);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				opacity: 0.7;
				color: #6d6d6c;
			}

			#g-libano-art-5 .g-aiPstyle2 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.08333333333333em;
			}

			#g-libano-art-5 .g-aiPstyle3 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #000000;
			}

			#g-libano-art-5 .g-aiPstyle4 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				filter: alpha(opacity=90);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)';
				opacity: 0.9;
				color: #ffffff;
			}

			#g-libano-art-5 .g-aiPstyle5 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				color: #0b1333;
			}

			#g-libano-art-5 .g-aiPstyle6 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				color: #4f4f4f;
			}

			#g-libano-art-5 .g-aiPstyle7 {
				font-size: 11px;
				line-height: 13px;
				text-transform: uppercase;
				text-align: center;
				letter-spacing: 0.125em;
				filter: alpha(opacity=50);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
				opacity: 0.5;
				color: #000000;
			}

			#g-libano-art-5 .g-aiPstyle8 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=40);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
				opacity: 0.4;
				color: #152601;
			}

			#g-libano-art-5 .g-aiPstyle9 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				filter: alpha(opacity=60);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
				opacity: 0.6;
				color: #006280;
			}

			#g-libano-art-5 .g-aiPstyle10 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-5 .g-aiPstyle11 {
				font-size: 11px;
				line-height: 13px;
				text-align: center;
				color: #000000;
			}

			#g-libano-art-5 .g-aiPstyle12 {
				font-size: 11px;
				line-height: 13px;
				filter: alpha(opacity=80);
				-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
				opacity: 0.8;
				color: #000000;
			}

			#g-libano-art-5 .g-aiPstyle13 {
				font-size: 11px;
				line-height: 13px;
				font-weight: bold;
				font-style: italic;
				text-align: center;
				color: #49599b;
			}

			.g-aiPtransformed p {
				white-space: nowrap;
			}
		</style>
		<div id="g-libano-art-5-graphic">
			<img
				loading="lazy"
				decoding="auto"
				id="g-ai4-0"
				class="g-aiImg"
				src="/assets/images/lebanon/libano-art-5.png"
			/>
			<p></p>
			<div
				id="g-ai4-1"
				class="g-cities g-aiAbs"
				style="top: 1.3509%; left: 76.5793%; width: 20.3743%; margin-left: -10.1872%"
			>
				<p class="g-aiPstyle0">Homs</p>
				<p></p>
			</div>
			<div
				id="g-ai4-2"
				class="g-forces g-aiAbs"
				style="top: 4.8247%; left: 85.5736%; width: 52.1748%; margin-left: -26.0874%"
			>
				<p class="g-aiPstyle1">Gobierno</p>
				<p class="g-aiPstyle1">Bashar al-Asad</p>
				<p></p>
			</div>
			<div
				id="g-ai4-3"
				class="g-seas g-aiAbs g-aiPtransformed"
				style="
					left: 14.3132%;
					top: 17.1251%;
					transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1) scaleY(1);
					transform-origin: center top;
					-webkit-transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1)
						scaleY(1);
					-webkit-transform-origin: center top;
					-ms-transform: matrix(0.3813, -0.9245, 0.9245, 0.3813, -66.8589, 0) scaleX(1) scaleY(1);
					-ms-transform-origin: center top;
				"
			>
				<p class="g-aiPstyle2">mar mediterráneo</p>
				<p></p>
			</div>
			<div
				id="g-ai4-4"
				class="g-countries g-aiAbs"
				style="top: 19.1059%; left: 46.8793%; width: 33.4984%; margin-left: -16.7492%"
			>
				<p class="g-aiPstyle3">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai4-5"
				class="g-forces g-aiAbs"
				style="top: 22.1937%; left: 93.0947%; width: 23.64%; margin-left: -11.82%"
			>
				<p class="g-aiPstyle1">Control</p>
				<p class="g-aiPstyle1">Mixto</p>
				<p></p>
			</div>
			<div
				id="g-ai4-6"
				class="g-countries g-aiAbs"
				style="top: 27.2114%; left: 75.5848%; width: 24.2487%; margin-left: -12.1243%"
			>
				<p class="g-aiPstyle3">siria</p>
				<p></p>
			</div>
			<div
				id="g-ai4-7"
				class="g-cities g-aiAbs"
				style="top: 28.3693%; left: 29.7675%; width: 21.1872%; margin-left: -10.5936%"
			>
				<p class="g-aiPstyle0">Beirut</p>
				<p></p>
			</div>
			<div
				id="g-ai4-8"
				class="g-cities g-aiAbs"
				style="top: 36.8608%; left: 59.699%; width: 32.6097%; margin-left: -16.3049%"
			>
				<p class="g-aiPstyle0">Damasco</p>
				<p></p>
			</div>
			<div
				id="g-ai4-9"
				class="g-forces g-aiAbs"
				style="top: 43.2294%; left: 79.9759%; width: 13.8574%; margin-left: -6.9287%"
			>
				<p class="g-aiPstyle4">ISIS</p>
				<p></p>
			</div>
			<div
				id="g-ai4-10"
				class="g-countries g-aiAbs"
				style="top: 50.177%; left: 15.4129%; width: 30.0931%; margin-left: -15.0465%"
			>
				<p class="g-aiPstyle5">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai4-11"
				class="g-forces g-aiAbs"
				style="top: 52.1069%; left: 52.2214%; width: 38.7292%; margin-left: -19.3646%"
			>
				<p class="g-aiPstyle1">Fuerzas de</p>
				<p class="g-aiPstyle1">la oposición</p>
				<p></p>
			</div>
			<div
				id="g-ai4-12"
				class="g-countries g-aiAbs"
				style="top: 53.8438%; left: 28.6823%; width: 32.4134%; margin-left: -16.2067%"
			>
				<p class="g-aiPstyle3">israel</p>
				<p></p>
			</div>
			<div id="g-ai4-13" class="g-sdw g-aiAbs" style="top: 59.4405%; left: 60.5259%">
				<p class="g-aiPstyle6">Base Miguel</p>
				<p class="g-aiPstyle6">de Cervantes</p>
				<p></p>
			</div>
			<div
				id="g-ai4-14"
				class="g-countries g-aiAbs"
				style="top: 64.0722%; left: 41.2164%; width: 33.4984%; margin-left: -16.7492%"
			>
				<p class="g-aiPstyle7">líbano</p>
				<p></p>
			</div>
			<div
				id="g-ai4-15"
				class="g-other-labels g-aiAbs"
				style="top: 67.739%; left: 76.8822%; width: 19.5212%; margin-left: -9.7606%"
			>
				<p class="g-aiPstyle8">Sector</p>
				<p class="g-aiPstyle8">este</p>
				<p></p>
			</div>
			<div
				id="g-ai4-16"
				class="g-water-label g-aiAbs"
				style="top: 70.0549%; left: 44.1252%; width: 28.2402%; margin-left: -14.1201%"
			>
				<p class="g-aiPstyle9">Río Litani</p>
				<p></p>
			</div>
			<div
				id="g-ai4-17"
				class="g-sdw g-aiAbs"
				style="top: 71.4058%; left: 64.1235%; width: 27.7113%; margin-left: -13.8556%"
			>
				<p class="g-aiPstyle10">Mando</p>
				<p class="g-aiPstyle10">español</p>
				<p></p>
			</div>
			<div
				id="g-ai4-18"
				class="g-sdw g-aiAbs"
				style="top: 73.1427%; left: 89.482%; width: 14.6774%; margin-left: -7.3387%"
			>
				<p class="g-aiPstyle11">4-34</p>
				<p></p>
			</div>
			<div
				id="g-ai4-19"
				class="g-sdw g-aiAbs"
				style="top: 75.2656%; left: 87.7837%; width: 30.6823%; margin-left: -15.3411%"
			>
				<p class="g-aiPstyle11">Al Ghajar</p>
				<p></p>
			</div>
			<div
				id="g-ai4-20"
				class="g-other-labels g-aiAbs"
				style="top: 80.0903%; left: 47.7428%; width: 28.9323%; margin-left: -14.4661%"
			>
				<p class="g-aiPstyle5">UNIFIL</p>
				<p></p>
			</div>
			<div
				id="g-ai4-21"
				class="g-other-labels g-aiAbs"
				style="top: 81.6342%; left: 33.0004%; width: 19.5212%; margin-left: -9.7606%"
			>
				<p class="g-aiPstyle8">Sector</p>
				<p class="g-aiPstyle8">oeste</p>
				<p></p>
			</div>
			<div id="g-ai4-22" class="g-other-labels g-aiAbs" style="top: 82.2131%; left: 68.1883%">
				<p class="g-aiPstyle12">Territorio ocupado</p>
				<p class="g-aiPstyle12">por Israel en 2006</p>
				<p></p>
			</div>
			<div
				id="g-ai4-23"
				class="g-sdw g-aiAbs"
				style="top: 85.108%; left: 55.5942%; width: 14.6774%; margin-left: -7.3387%"
			>
				<p class="g-aiPstyle11">8-33</p>
				<p></p>
			</div>
			<div
				id="g-ai4-24"
				class="g-countries g-aiAbs"
				style="top: 91.8626%; left: 82.4878%; width: 32.4134%; margin-left: -16.2067%"
			>
				<p class="g-aiPstyle7">israel</p>
				<p></p>
			</div>
			<div
				id="g-ai4-25"
				class="g-sdw g-aiAbs"
				style="top: 96.3013%; left: 22.9945%; width: 29.7451%; margin-left: -14.8726%"
			>
				<p class="g-aiPstyle13">blue line</p>
				<p></p>
			</div>
			<p></p>
		</div>
		<p></p>
	</div>
</div>
`;var Xa=F('<main id="main-content" class="page is-studio svelte-7fq3ze"><header class="topbar svelte-7fq3ze"><div class="brand svelte-7fq3ze"><div class="brand-mark svelte-7fq3ze">S</div> <div class="brand-copy svelte-7fq3ze"><p class="kicker svelte-7fq3ze">Cheesy Shadow Picker</p> <p class="version svelte-7fq3ze">2.0</p></div></div> <div class="top-divider svelte-7fq3ze" aria-hidden="true"></div></header> <section class="studio-shell svelte-7fq3ze"><!></section></main>');function Ua(e,t){yn(t,!0);let i=N(!1);le(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&d(i,!0)});function o(){d(i,!0)}var p=Xa(),c=y(h(p),2),m=h(c);Fa(m,{get sampleMode(){return n(i)},sampleHtml:Ea,onLoadSample:o}),g(c),g(p),R(e,p),un()}export{Ua as component};
