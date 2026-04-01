import{d as te,e as ze,a as R,t as O,n as ke,c as Me}from"../chunks/DfhHYjZk.js";import{A as De,d as me,h as it,B as In,c as Yn,g as n,H as Le,C as ne,D as Hn,f as zt,I as Tn,F as ye,e as jn,p as Re,G as be,J as ee,K as ae,M as Ne,N as Oe,O as Fe,P as ue,Q as xe,R as Ee,S as Xe,T as Be,m as He,U as ie,V as Jn,W as We,X as we,Y as qe,Z as Kn,_ as Ue,a0 as Pe,a1 as Ge,a2 as Ve,a3 as Ye,a4 as je,a5 as Je,a6 as Ke,k as Mn,r as Dn,q as u,v as m,w as f,x as G,y as et,o as Ae,z as se,a as M,l as le,b as c,a7 as Wn}from"../chunks/DxEB13ml.js";import{o as _e,a as Qe}from"../chunks/B5mMWkHv.js";import{l as Ze,d as Qn,p as x,i as st,s as ht,e as B,a as w,b as oe,r as re}from"../chunks/mn83PHve.js";import{s as W,r as qn,a as $e,h as pe}from"../chunks/Dpqzx1rf.js";import{m as ta,d as na}from"../chunks/TublVk_f.js";function Se(a,t){return t}function ea(a,t,i,o){for(var p=[],g=t.length,y=0;y<g;y++)Ne(t[y].e,p,!0);var P=g>0&&p.length===0&&i!==null;if(P){var v=i.parentNode;Oe(v),v.append(i),o.clear(),Pt(a,t[0].prev,t[g-1].next)}Fe(p,()=>{for(var C=0;C<g;C++){var _=t[C];P||(o.delete(_.k),Pt(a,_.prev,_.next)),ue(_.e,!P)}})}function kn(a,t,i,o,p,g=null){var y=a,P={flags:t,items:new Map,first:null},v=(t&we)!==0;if(v){var C=a;y=it?In(xe(C)):C.appendChild(De())}it&&Yn();var _=null,z=!1,F=Ee(()=>{var b=i();return We(b)?b:b==null?[]:be(b)});me(()=>{var b=n(F),I=b.length;if(z&&I===0)return;z=I===0;let A=!1;if(it){var V=y.data===Le;V!==(I===0)&&(y=ne(),In(y),Hn(!1),A=!0)}if(it){for(var D=null,k,N=0;N<I;N++){if(zt.nodeType===8&&zt.data===Xe){y=zt,A=!0,Hn(!1);break}var S=b[N],h=o(S,N);k=Ce(zt,P,D,null,S,h,N,p,t),P.items.set(h,k),D=k}I>0&&In(ne())}if(!it){var T=Be;aa(b,P,y,p,t,(T.f&Tn)!==0,o)}g!==null&&(I===0?_?ye(_):_=jn(()=>g(y)):_!==null&&Re(_,()=>{_=null})),A&&Hn(!0),n(F)}),it&&(y=zt)}function aa(a,t,i,o,p,g,y,P){var tt,q,ot,kt;var v=(p&Ge)!==0,C=(p&(Kn|Jn))!==0,_=a.length,z=t.items,F=t.first,b=F,I,A=null,V,D=[],k=[],N,S,h,T;if(v)for(T=0;T<_;T+=1)N=a[T],S=y(N,T),h=z.get(S),h!==void 0&&((tt=h.a)==null||tt.measure(),(V??(V=new Set)).add(h));for(T=0;T<_;T+=1){if(N=a[T],S=y(N,T),h=z.get(S),h===void 0){var $=b?b.e.nodes_start:i;A=Ce($,t,A,A===null?t.first:A.next,N,S,T,o,p),z.set(S,A),D=[],k=[],b=A.next;continue}if(C&&ia(h,N,T,p),h.e.f&Tn&&(ye(h.e),v&&((q=h.a)==null||q.unfix(),(V??(V=new Set)).delete(h))),h!==b){if(I!==void 0&&I.has(h)){if(D.length<k.length){var X=k[0],Y;A=X.prev;var j=D[0],lt=D[D.length-1];for(Y=0;Y<D.length;Y+=1)ce(D[Y],X,i);for(Y=0;Y<k.length;Y+=1)I.delete(k[Y]);Pt(t,j.prev,lt.next),Pt(t,A,j),Pt(t,lt,X),b=X,A=lt,T-=1,D=[],k=[]}else I.delete(h),ce(h,b,i),Pt(t,h.prev,h.next),Pt(t,h,A===null?t.first:A.next),Pt(t,A,h),A=h;continue}for(D=[],k=[];b!==null&&b.k!==S;)(g||!(b.e.f&Tn))&&(I??(I=new Set)).add(b),k.push(b),b=b.next;if(b===null)continue;h=b}D.push(h),A=h,b=h.next}if(b!==null||I!==void 0){for(var J=I===void 0?[]:be(I);b!==null;)(g||!(b.e.f&Tn))&&J.push(b),b=b.next;var mt=J.length;if(mt>0){var gt=p&we&&_===0?i:null;if(v){for(T=0;T<mt;T+=1)(ot=J[T].a)==null||ot.measure();for(T=0;T<mt;T+=1)(kt=J[T].a)==null||kt.fix()}ea(t,J,gt,z)}}v&&qe(()=>{var rt;if(V!==void 0)for(h of V)(rt=h.a)==null||rt.apply()}),ee.first=t.first&&t.first.e,ee.last=A&&A.e}function ia(a,t,i,o){o&Kn&&ae(a.v,t),o&Jn?ae(a.i,i):a.i=i}function Ce(a,t,i,o,p,g,y,P,v,C){var _=(v&Kn)!==0,z=(v&Ue)===0,F=_?z?He(p):ie(p):p,b=v&Jn?ie(y):y,I={i:b,v:F,k:g,a:null,e:null,prev:i,next:o};try{return I.e=jn(()=>P(a,F,b),it),I.e.prev=i&&i.e,I.e.next=o&&o.e,i===null?t.first=I:(i.next=I,i.e.next=I.e),o!==null&&(o.prev=I,o.e.prev=I.e),I}finally{}}function ce(a,t,i){for(var o=a.next?a.next.e.nodes_start:i,p=t?t.e.nodes_start:i,g=a.e.nodes_start;g!==o;){var y=Pe(g);p.before(g),g=y}}function Pt(a,t,i){t===null?a.first=i:(t.next=i,t.e.next=i&&i.e),i!==null&&(i.prev=t,i.e.prev=t&&t.e)}function de(a,t,i,o,p){var g=a,y="",P;me(()=>{if(y===(y=t()??"")){it&&Yn();return}P!==void 0&&(ue(P),P=void 0),y!==""&&(P=jn(()=>{if(it){zt.data;for(var v=Yn(),C=v;v!==null&&(v.nodeType!==8||v.data!=="");)C=v,v=Pe(v);if(v===null)throw Ve(),Ye;te(zt,C),g=In(v);return}var _=y+"",z=ze(_);te(xe(z),z.lastChild),g.before(z)}))})}function Ie(a){var t,i,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var p=a.length;for(t=0;t<p;t++)a[t]&&(i=Ie(a[t]))&&(o&&(o+=" "),o+=i)}else for(i in a)a[i]&&(o&&(o+=" "),o+=i);return o}function sa(){for(var a,t,i=0,o="",p=arguments.length;i<p;i++)(a=arguments[i])&&(t=Ie(a))&&(o&&(o+=" "),o+=t);return o}function la(a){return typeof a=="object"?sa(a):a}function vt(a,t,i){var o=a.__className,p=oa(t,i);it&&a.className===p?a.__className=p:(o!==p||it&&a.className!==p)&&(t==null&&!i?a.removeAttribute("class"):a.className=p,a.__className=p)}function oa(a,t){return(a??"")+(t?" "+t:"")}function ge(a,t,i=t){var o=je();Ze(a,"input",p=>{var g=p?a.defaultValue:a.value;if(g=Un(a)?Gn(g):g,i(g),o&&g!==(g=t())){var y=a.selectionStart,P=a.selectionEnd;a.value=g??"",P!==null&&(a.selectionStart=y,a.selectionEnd=Math.min(P,a.value.length))}}),(it&&a.defaultValue!==a.value||Je(t)==null&&a.value)&&i(Un(a)?Gn(a.value):a.value),Ke(()=>{var p=t();Un(a)&&p===Gn(a.value)||a.type==="date"&&!p&&!a.value||p!==a.value&&(a.value=p??"")})}function Un(a){var t=a.type;return t==="number"||t==="range"}function Gn(a){return a===""?null:+a}const ra=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],zn=[...new Map(ra.map(a=>[a.shadow,a])).values()],Zn=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,pa=/^[a-z][a-z0-9]*$/;function ca(a,t=1200){var o;if(!a)return t;if(Number.isFinite(a.maxWidth)&&a.maxWidth>0)return a.maxWidth;if(Number.isFinite(a.minWidth)&&a.minWidth>0)return a.minWidth;const i=Number.parseFloat(((o=a.styleMap)==null?void 0:o.width)||"");return Number.isFinite(i)&&i>0?i:t}function da(a="#000000"){let t=a.replace("#","");t.length===3&&(t=t.split("").map(o=>`${o}${o}`).join(""));const i=Number.parseInt(t,16);return Number.isFinite(i)?[i>>16&255,i>>8&255,i&255]:[0,0,0]}function Tt(a,t){if(!a)return"";const i=a.match(Zn);if(!(i!=null&&i.length))return a;const[o,p,g]=da(t),y=i.map(v=>{if(v.startsWith("#"))return t;const C=v.match(/\d+(?:\.\d+)?%?/g)||[];if(!C.length)return`rgb(${o} ${p} ${g})`;const _=C[3];return _?`rgb(${o} ${p} ${g} / ${_})`:`rgb(${o} ${p} ${g})`});let P=a;return i.forEach((v,C)=>{P=P.replace(v,y[C])}),P}function ga(a=""){if(!a)return"";let t=a.trim().replace("#","");return(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(i=>`${i}${i}`).join("")),`#${t.slice(0,6).toLowerCase()}`}function Te(a=""){if(!a)return"";if(a.startsWith("#"))return ga(a);const t=a.match(/[\d.]+%?/g);if(!t||t.length<3)return"";const[i,o,p]=t,g=P=>P.endsWith("%")?Math.round(Number.parseFloat(P)/100*255):Math.round(Number.parseFloat(P)),y=P=>Math.max(0,Math.min(255,P)).toString(16).padStart(2,"0");return`#${y(g(i))}${y(g(o))}${y(g(p))}`}function fa(a=""){var i;const t=(i=a.match(Zn))==null?void 0:i[0];return t?Te(t):""}function fe(a=""){return a.toLowerCase().replace(Zn,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function ha(a=""){return a.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function he(a="",t=""){return!a||!t?"":`.${a} { text-shadow: ${t}; }`}var va=(a,t,i)=>t()(n(i).shadow),ma=O('<span class="source-wrap svelte-1p0dar6"><a class="shadow-source svelte-1p0dar6" target="_blank" rel="noreferrer">View reference</a></span>'),ya=O('<button type="button"><span class="shadow-name svelte-1p0dar6"> </span> <span class="shadow-preview svelte-1p0dar6">Preview</span> <!></button>'),ba=O('<aside class="library-column svelte-1p0dar6"><div class="library-header-panel svelte-1p0dar6"><h3 class="svelte-1p0dar6">Shadow Library</h3> <p class="svelte-1p0dar6">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1p0dar6"></div></aside>');function ua(a,t){Mn(t,!0);let i=x(t,"selectedShadowRaw",3,""),o=x(t,"shadowColor",3,"#000000"),p=x(t,"textColor",3,"#ffffff");x(t,"selectedShadowMeta",3,null);let g=x(t,"onChooseShadow",3,()=>{});var y=ba(),P=u(m(y),2);kn(P,21,()=>zn,Se,(v,C)=>{var _=ya();_.__click=[va,g,C];var z=m(_),F=m(z,!0);f(z);var b=u(z,2);const I=et(()=>`text-shadow:${Tt(n(C).shadow,o())};color:${p()};`);var A=u(b,2);{var V=D=>{var k=ma(),N=m(k);f(k),G(()=>W(N,"href",n(C).source)),R(D,k)};st(A,D=>{i()===n(C).shadow&&n(C).source&&D(V)})}f(_),G(()=>{vt(_,`${`shadow-choice ${i()===n(C).shadow?"is-selected":""}`??""} svelte-1p0dar6`),ht(F,n(C).id),W(b,"style",n(I))}),R(v,_)}),f(P),f(y),R(a,y),Dn()}Qn(["click"]);var xa=ke('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function ve(a){var t=xa();R(a,t)}var wa=O('<p class="active-file svelte-1bflbyl"> </p>'),Pa=(a,t,i,o)=>{t(n(i).id),o()({currentTarget:{value:n(i).id}})},Aa=O('<button type="button"> </button>'),_a=O('<div class="artboard-switcher svelte-1bflbyl"><span class="artboard-label svelte-1bflbyl">Artboard</span> <div class="artboard-buttons svelte-1bflbyl"></div></div>'),Sa=(a,t)=>t(!t()),Ca=O('<p class="selection-note svelte-1bflbyl">Selected: <strong> </strong></p>'),Ia=O('<pre class="css-preview svelte-1bflbyl"> </pre>'),Ta=O('<pre class="css-rules-output svelte-1bflbyl"> </pre>'),za=O('<p class="empty-rules svelte-1bflbyl">No rules added yet.</p>'),ka=O(`<section class="panel toolbar svelte-1bflbyl"><div class="toolbar-row import-row svelte-1bflbyl" role="region" aria-label="ai2html and image import zone"><p class="import-hint svelte-1bflbyl">Drag .html or image to the main workspace</p> <div class="import-actions svelte-1bflbyl"><label class="tool-button svelte-1bflbyl" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-1bflbyl"> <label class="tool-button svelte-1bflbyl" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-1bflbyl"> <button type="button" class="tool-button sample-button svelte-1bflbyl">Load sample</button></div> <!></div> <div class="toolbar-row main-controls-row svelte-1bflbyl"><!> <p class="metric svelte-1bflbyl"> </p> <div class="quick-actions svelte-1bflbyl"><button type="button" class="svelte-1bflbyl">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-1bflbyl"><div class="toolbar-row appearance-row svelte-1bflbyl"><div class="appearance-block svelte-1bflbyl"><h4 class="svelte-1bflbyl">Text Color</h4> <div class="control-row svelte-1bflbyl"><label for="text-color" class="svelte-1bflbyl">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-1bflbyl"></div> <div class="action-row svelte-1bflbyl"><button type="button" class="svelte-1bflbyl">Apply to Selected</button> <button type="button" class="svelte-1bflbyl">Apply to All</button> <button type="button" class="reset-button svelte-1bflbyl"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-1bflbyl"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-1bflbyl"><h4 class="svelte-1bflbyl">Shadow Color</h4> <div class="control-row svelte-1bflbyl"><label for="shadow-color" class="svelte-1bflbyl">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-1bflbyl"></div> <div class="action-row svelte-1bflbyl"><button type="button" class="svelte-1bflbyl">Recolor Selected</button> <button type="button" class="reset-button svelte-1bflbyl"><!> Reset Shadow</button> <button type="button" class="svelte-1bflbyl">Copy CSS</button> <button type="button" class="eyedropper svelte-1bflbyl"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-1bflbyl"><details class="workflow-details svelte-1bflbyl"><summary class="svelte-1bflbyl">Illustrator Workflow</summary> <div class="workflow-content svelte-1bflbyl"><div class="workflow-intro svelte-1bflbyl"><p class="svelte-1bflbyl">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-1bflbyl">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-1bflbyl"><h4 class="svelte-1bflbyl">Stylesheet</h4> <div class="control-row class-name-row svelte-1bflbyl"><label for="css-class-name" class="svelte-1bflbyl">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-1bflbyl"></div> <p class="class-name-help svelte-1bflbyl">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-1bflbyl"><button type="button" class="svelte-1bflbyl">Add to Stylesheet</button> <button type="button" class="svelte-1bflbyl">Copy CSS</button> <button type="button" class="reset-button svelte-1bflbyl">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-1bflbyl" aria-live="polite"><!></div></div></div></details></section>`,1);function Ma(a,t){Mn(t,!0);let i=x(t,"artboards",19,()=>[]),o=x(t,"selectedArtboardId",15,""),p=x(t,"stageWidth",3,0),g=x(t,"labelsCount",3,0),y=x(t,"selectedLabel",3,null),P=x(t,"activeShadow",3,""),v=x(t,"workspaceImage",3,""),C=x(t,"htmlFileName",3,""),_=x(t,"imageFileName",3,""),z=x(t,"onLoadSample",3,()=>{}),F=x(t,"previewOriginal",15,!1),b=x(t,"textColor",15,"#000000"),I=x(t,"shadowColor",15,"#000000"),A=x(t,"cssClassName",3,""),V=x(t,"cssClassNameValid",3,!1),D=x(t,"currentRulePreview",3,""),k=x(t,"cssSheetPreview",3,""),N=x(t,"cssRules",19,()=>[]),S=x(t,"canUseEyeDropper",3,!1),h=x(t,"onAi2htmlDrop",3,()=>{}),T=x(t,"onAi2htmlInput",3,()=>{}),$=x(t,"onImageInput",3,()=>{}),X=x(t,"onArtboardChange",3,()=>{}),Y=x(t,"onApplyShadowToAll",3,()=>{}),j=x(t,"onApplyTextToSelected",3,()=>{}),lt=x(t,"onApplyTextToAll",3,()=>{}),J=x(t,"onClearTextColors",3,()=>{}),mt=x(t,"onTextColorLive",3,()=>{}),gt=x(t,"onPickTextColor",3,()=>{}),tt=x(t,"onRecolorSelectedShadow",3,()=>{}),q=x(t,"onClearSelectedShadow",3,()=>{}),ot=x(t,"onCopyCurrentShadow",3,()=>{}),kt=x(t,"onShadowColorLive",3,()=>{}),rt=x(t,"onPickShadowColor",3,()=>{}),Mt=x(t,"onCssClassNameInput",3,()=>{}),Dt=x(t,"onAddRuleToSheet",3,()=>{}),Bt=x(t,"onCopyCssSheet",3,()=>{}),on=x(t,"onClearCssSheet",3,()=>{});function Ln(r){r.preventDefault()}var Lt=ka(),Rt=Ae(Lt),bt=m(Rt),Ht=u(m(bt),2),rn=u(m(Ht),2);rn.__change=function(...r){var s;(s=T())==null||s.apply(this,r)};var ut=u(rn,4);ut.__change=function(...r){var s;(s=$())==null||s.apply(this,r)};var pn=u(ut,2);pn.__click=function(...r){var s;(s=z())==null||s.apply(this,r)},f(Ht);var cn=u(Ht,2);{var Rn=r=>{var s=wa(),e=m(s,!0);f(s),G(()=>ht(e,C()||_())),R(r,s)};st(cn,r=>{(C()||_())&&r(Rn)})}f(bt);var Wt=u(bt,2),qt=m(Wt);{var dn=r=>{var s=_a(),e=u(m(s),2);kn(e,21,i,Se,(l,d)=>{var L=Aa();L.__click=[Pa,o,d,X];var K=m(L,!0);f(L),G(()=>{vt(L,`${`artboard-btn ${o()===n(d).id?"is-active":""}`??""} svelte-1bflbyl`),ht(K,n(d).name)}),R(l,L)}),f(e),f(s),R(r,s)};st(qt,r=>{i().length>1&&r(dn)})}var Nt=u(qt,2),Nn=m(Nt);f(Nt);var xt=u(Nt,2),Ut=m(xt);Ut.__click=function(...r){var s;(s=Y())==null||s.apply(this,r)};var At=u(Ut,2);At.__click=[Sa,F];var gn=m(At,!0);f(At),f(xt),f(Wt),f(Rt);var Gt=u(Rt,2),Vt=m(Gt),Yt=m(Vt),_t=u(m(Yt),2),jt=u(m(_t),2);qn(jt),jt.__input=function(...r){var s;(s=mt())==null||s.apply(this,r)},f(_t);var fn=u(_t,2),Jt=m(fn);Jt.__click=function(...r){var s;(s=j())==null||s.apply(this,r)};var St=u(Jt,2);St.__click=function(...r){var s;(s=lt())==null||s.apply(this,r)};var yt=u(St,2);yt.__click=function(...r){var s;(s=J())==null||s.apply(this,r)};var hn=m(yt);ve(hn),se(),f(yt);var vn=u(yt,2);vn.__click=function(...r){var s;(s=gt())==null||s.apply(this,r)},f(fn),f(Yt);var mn=u(Yt,2),Kt=u(m(mn),2),Qt=u(m(Kt),2);qn(Qt),Qt.__input=function(...r){var s;(s=kt())==null||s.apply(this,r)},f(Kt);var yn=u(Kt,2),Zt=m(yn);Zt.__click=function(...r){var s;(s=tt())==null||s.apply(this,r)};var Ct=u(Zt,2);Ct.__click=function(...r){var s;(s=q())==null||s.apply(this,r)};var On=m(Ct);ve(On),se(),f(Ct);var $t=u(Ct,2);$t.__click=function(...r){var s;(s=ot())==null||s.apply(this,r)};var bn=u($t,2);bn.__click=function(...r){var s;(s=rt())==null||s.apply(this,r)},f(yn),f(mn),f(Vt);var un=u(Vt,2);{var xn=r=>{var s=Ca(),e=u(m(s)),l=m(e,!0);f(e),f(s),G(()=>ht(l,y().previewText)),R(r,s)};st(un,r=>{y()&&r(xn)})}f(Gt);var wn=u(Gt,2),tn=m(wn),nn=u(m(tn),2),Ot=u(m(nn),2),It=u(m(Ot),2),Ft=u(m(It),2);qn(Ft),Ft.__input=function(...r){var s;(s=Mt())==null||s.apply(this,r)},f(It);var Et=u(It,4),en=m(Et);en.__click=function(...r){var s;(s=Dt())==null||s.apply(this,r)};var at=u(en,2);at.__click=function(...r){var s;(s=Bt())==null||s.apply(this,r)};var an=u(at,2);an.__click=function(...r){var s;(s=on())==null||s.apply(this,r)},f(Et);var Pn=u(Et,2);{var wt=r=>{var s=Ia(),e=m(s,!0);f(s),G(()=>ht(e,D())),R(r,s)};st(Pn,r=>{D()&&r(wt)})}var An=u(Pn,2),Fn=m(An);{var En=r=>{var s=Ta(),e=m(s,!0);f(s),G(()=>ht(e,k())),R(r,s)},_n=r=>{var s=za();R(r,s)};st(Fn,r=>{k()?r(En):r(_n,!1)})}f(An),f(Ot),f(nn),f(tn),f(wn),G(()=>{ht(Nn,`Native Width: ${p()??""}px`),Ut.disabled=!g(),vt(At,`${`preview-toggle ${F()?"is-active":""}`??""} svelte-1bflbyl`),At.disabled=!g(),ht(gn,F()?"Show Edited":"Show Original"),Jt.disabled=!y(),St.disabled=!g(),yt.disabled=!g(),vn.disabled=!S()||!v(),Zt.disabled=!y(),Ct.disabled=!y(),$t.disabled=!P(),bn.disabled=!S()||!v(),$e(Ft,A()),en.disabled=!V(),at.disabled=!k(),an.disabled=!N().length}),B("dragover",bt,Ln),B("drop",bt,function(...r){var s;(s=h())==null||s.apply(this,r)}),ge(jt,b),ge(Qt,I),R(a,Lt),Dn()}Qn(["change","click","input"]);const Xt=(a,t=0)=>{const i=Number.parseFloat(a);return Number.isFinite(i)?i:t},Vn=(a="")=>a.split(";").map(t=>t.trim()).filter(Boolean).reduce((t,i)=>{const[o,...p]=i.split(":");return!o||p.length===0||(t[o.trim().toLowerCase()]=p.join(":").trim()),t},{}),Da=(a="",t="Artboard")=>a?a.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():t,La=(a={})=>{const i=(a.padding||"").split(/\s+/).filter(Boolean),o=i[2]||i[0]||"",p=Xt(o,0);return p?100/p:null},Ra=(a={})=>Object.entries(a).map(([t,i])=>`${t}: ${i}`).join(";");function Na(a,t){return!Array.isArray(a)||a.length===0?null:a.find(i=>t>=i.minWidth&&t<=i.maxWidth)||a[0]}function Oa(a=""){if(!a.trim())throw new Error("The file is empty.");let t=a.trim();!t.includes("<html")&&!t.includes("<!DOCTYPE")&&(t=`<!DOCTYPE html><html><head></head><body>${t}</body></html>`);const o=new DOMParser().parseFromString(t,"text/html"),p=[...o.querySelectorAll(".g-artboard")],g=o.querySelector(".ai2html");if(!p.length)throw new Error("No ai2html artboards found.");const y=[...o.querySelectorAll("style")].map(v=>v.textContent||"").join(`
`).trim(),P=p.map((v,C)=>{const _=Vn(v.getAttribute("style")||""),z=v.querySelector(":scope > div:not([id])"),F=Vn((z==null?void 0:z.getAttribute("style"))||""),b=v.querySelector('[id$="-graphic"]'),I=b?[...b.querySelectorAll(".g-aiAbs")]:[...v.querySelectorAll(":scope > div.g-aiAbs")],A=b?b.querySelector("img.g-aiImg, img"):v.querySelector("img.g-aiImg, img"),V=z&&Object.keys(F).length>0,D=I.map((S,h)=>{const T=Vn(S.getAttribute("style")||""),$=S.textContent.split(`
`).map(X=>X.trim()).filter(Boolean).join(" ").trim();return{id:S.id||`label-${C+1}-${h+1}`,className:S.className||"",html:S.innerHTML,previewText:$||`Label ${h+1}`,styleMap:T,shadow:"",textColor:""}}),k=La(F),N=Xt(v.dataset.aspectRatio,0)||k||16/9;return{id:v.id||`artboard-${C+1}`,name:Da(v.id,`Artboard ${C+1}`),className:v.className||"g-artboard",style:v.getAttribute("style")||"",styleMap:_,aspectRatio:N,minWidth:Xt(v.dataset.minWidth,Xt(_["min-width"],0)),maxWidth:Xt(v.dataset.maxWidth,Xt(_["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:V?Ra(F):"",imageSrc:(A==null?void 0:A.getAttribute("src"))||"",imageAlt:(A==null?void 0:A.getAttribute("alt"))||"",imageClassName:(A==null?void 0:A.className)||"g-aiImg",imageId:(A==null?void 0:A.id)||"",labels:D}});return{cssText:y,rootId:(g==null?void 0:g.id)||"",rootClassName:(g==null?void 0:g.className)||"ai2html",artboards:P}}async function Fa(a){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(a);else{const t=document.createElement("textarea");t.value=a,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}const Ea={copyToClipboard:Fa};function Xa(a,t){a.target.closest(".draggable-label")||c(t,"")}var Ba=O('<p class="error svelte-1n1ask5"> </p>'),Ha=O('<p class="image-warning svelte-1n1ask5" role="alert"> </p>'),Wa=O("<div></div>"),qa=O("<div></div>"),Ua=(a,t,i)=>t(a,n(i)),Ga=O('<button type="button"><!></button>'),Va=O('<div><!> <img loading="eager" fetchpriority="high"> <!></div>'),Ya=(a,t,i)=>t(a,n(i)),ja=O('<button type="button"><!></button>'),Ja=O('<div class="workspace-empty svelte-1n1ask5" role="region" aria-label="Drop zone for ai2html or image files"><img alt="Editor background" loading="eager" fetchpriority="high"> <!></div>'),Ka=O('<div class="workspace-scroll svelte-1n1ask5"><!> <div class="stage-host svelte-1n1ask5"><div><!></div></div></div>'),Qa=O('<div class="workspace-empty svelte-1n1ask5" role="region" aria-label="Drop zone for ai2html or image files"><svg class="empty-icon svelte-1n1ask5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> <p class="svelte-1n1ask5">Drag & drop your ai2html or image file here</p> <p class="empty-hint svelte-1n1ask5">or use the buttons in the toolbar</p></div>'),Za=O('<section class="studio svelte-1n1ask5"><aside class="left-sidebar svelte-1n1ask5"><details class="mobile-tools svelte-1n1ask5" open><summary class="svelte-1n1ask5">Tools</summary> <div class="mobile-tools-body svelte-1n1ask5"><!></div></details></aside> <div role="region" aria-label="Main workspace drop zone"><!> <div role="region" aria-label="Workspace drop zone"><!></div></div> <aside class="right-sidebar svelte-1n1ask5"><!></aside></section>');function $a(a,t){var s;Mn(t,!0);const{copyToClipboard:i}=Ea,o=((s=zn[0])==null?void 0:s.shadow)||"";let p=x(t,"sampleMode",3,!1),g=x(t,"sampleHtml",3,""),y=x(t,"onLoadSample",3,()=>{}),P=M(void 0),v=M(void 0),C=M(""),_=M(""),z=M(""),F=M(""),b=M(""),I=M(""),A=M(1200),V=M(""),D=M("ai2html"),k=M(w([])),N=M(""),S=M(w([])),h=M(""),T=M(w(o)),$=M(w(ta)),X=M(w(na)),Y=M(!1),j=M(null),lt=M(!1),J=M(void 0),mt=M(!1),gt=M(""),tt=M(w([]));const q=et(()=>n(k).find(e=>e.id===n(N))||null),ot=et(()=>n(S).find(e=>e.id===n(h))||null),kt=et(()=>zn.find(e=>e.shadow===n(T))||null),rt=et(()=>Tt(n(T),n(X))),Mt=et(()=>{var e;return((e=n(q))==null?void 0:e.imageSrc)||n(I)}),Dt=et(()=>ca(n(q),n(A))),Bt=et(()=>pa.test(n(gt))),on=et(()=>{var e;return((e=n(ot))==null?void 0:e.shadow)||n(rt)||""}),Ln=et(()=>n(Bt)&&n(on)?he(n(gt),n(on)):""),Lt=et(()=>n(tt).map(e=>he(e.className,e.shadow)).join(`
`));le(()=>{typeof document>"u"||(n(J)||(c(J,w(document.createElement("style"))),n(J).setAttribute("data-ai2html-import","true"),document.head.append(n(J))),n(J).textContent=n(C))}),_e(()=>{c(mt,w(typeof window<"u"&&"EyeDropper"in window))});let Rt=M(!1);le(()=>{typeof window>"u"||!p()||n(Rt)||!g()||(c(Rt,!0),bt(g(),"sample-ai2html.html"))});async function bt(e,l=""){c(_,""),c(z,"");try{const d=Oa(e);c(k,w(d.artboards)),c(V,w(d.rootId)),c(D,w(d.rootClassName)),c(C,w(d.cssText)),c(F,w(l)),c(I,""),c(b,"");const L=Ht();pn(Na(d.artboards,L)||d.artboards[0])}catch(d){c(_,w(d instanceof Error?d.message:"Could not read ai2html file."))}}function Ht(){var e;return(e=n(v))!=null&&e.clientWidth?n(v).clientWidth:typeof window<"u"?Math.max(300,window.innerWidth-24):1200}Qe(()=>{var e;typeof document<"u"&&((e=n(J))==null||e.remove(),document.body.classList.remove("dragging-labels"))});function rn(e=[]){return e.map(l=>({...l,styleMap:{...l.styleMap||{}}}))}function ut(e,l){c(S,w(n(S).map(d=>d.id===e?l(d):d)))}function pn(e){var l;e&&(c(z,""),c(N,w(e.id)),c(S,w(rn(e.labels||[]))),c(h,w(((l=n(S)[0])==null?void 0:l.id)||"")))}async function cn(e){if(!e)return;const l=await e.text();await bt(l,e.name)}function Rn(e){const[l]=e.currentTarget.files||[];cn(l)}function Wt(e){e.preventDefault()}function qt(e){e.preventDefault(),c(lt,!0)}function dn(e){e.currentTarget.contains(e.relatedTarget)||c(lt,!1)}function Nt(e){if(!e||!e.type.startsWith("image/"))return;const l=new FileReader;l.onload=()=>{c(I,w(l.result)),c(b,w(e.name)),c(F,""),c(k,w([])),c(N,""),c(V,""),c(D,"ai2html"),c(C,""),c(S,w([])),c(h,"");const d=new Image;d.onload=()=>{d.naturalWidth&&d.naturalHeight&&c(A,w(d.naturalWidth))},d.src=l.result},l.readAsDataURL(e)}function Nn(e){if(e){if(e.type.startsWith("image/")){Nt(e);return}(e.name.endsWith(".html")||e.type.includes("html")||e.type.includes("text"))&&cn(e)}}function xt(e){e.preventDefault(),c(lt,!1);const[l]=e.dataTransfer.files||[];Nn(l)}function Ut(e){const[l]=e.currentTarget.files||[];Nt(l)}function At(e){const l=e.target;l.naturalWidth&&c(A,w(l.naturalWidth)),c(z,"")}function gn(){var l;const e=((l=n(q))==null?void 0:l.imageSrc)||"Unknown file";c(z,`Could not load artboard image (${e}). Export/upload image assets and try again.`)}function Gt(e){const l=n(k).find(({id:d})=>d===e.currentTarget.value);pn(l)}function Vt(e=""){if(!e||e==="none")return;const l=fe(e),d=zn.find(L=>fe(Tt(L.shadow,n(X)))===l);d&&c(T,w(d.shadow))}function Yt(e){if(!e||typeof document>"u")return;const l=document.getElementById(e);if(!l)return;const d=l.querySelector("p, span, div")||l,L=getComputedStyle(d),K=Te(L.color);K&&c($,w(K));const Q=L.textShadow;if(Q&&Q!=="none"){const pt=fa(Q);pt&&c(X,w(pt)),Vt(Q)}}function _t(e){c(h,w(e)),Yt(e)}function jt(e){if(c(T,w(e)),!n(h)){c(S,w(n(S).map(l=>({...l,shadow:Tt(e,n(X))}))));return}ut(n(h),l=>({...l,shadow:Tt(e,n(X))}))}function fn(){c(S,w(n(S).map(e=>({...e,shadow:n(rt)}))))}function Jt(){n(h)&&ut(n(h),e=>({...e,shadow:""}))}function St(){n(h)&&ut(n(h),e=>({...e,shadow:Tt(e.shadow||n(T),n(X))}))}function yt(){n(h)&&ut(n(h),e=>({...e,textColor:n($)}))}function hn(){c(S,w(n(S).map(e=>({...e,textColor:n($)}))))}function vn(){c(S,w(n(S).map(e=>({...e,textColor:""}))))}function mn(){if(n(h)){yt();return}n(S).length&&hn()}function Kt(){if(n(h)){St();return}c(S,w(n(S).map(e=>e.shadow?{...e,shadow:Tt(e.shadow,n(X))}:e)))}async function Qt(){n(rt)&&await i(`text-shadow: ${n(rt)}`)}function yn(e){c(gt,w(ha(e.currentTarget.value||"")))}function Zt(){if(!n(h)||typeof document>"u")return"";const e=document.getElementById(n(h));if(!e)return"";const l=e.querySelector("p, span, div")||e,d=getComputedStyle(l).textShadow;return d&&d!=="none"?d:""}function Ct(){var l;if((l=n(ot))!=null&&l.shadow)return n(ot).shadow;const e=Zt();return e||n(rt)}function On(){if(!n(Bt))return;const e=Ct();if(!e)return;const l={className:n(gt),shadow:e},d=n(tt).findIndex(L=>L.className===n(gt));if(d===-1){c(tt,w([...n(tt),l]));return}c(tt,w(n(tt).map((L,K)=>K===d?l:L)))}function $t(){c(tt,w([]))}async function bn(){n(Lt)&&await i(n(Lt))}async function un(e){if(n(mt))try{const d=await new window.EyeDropper().open();if(e==="shadow"){c(X,w(d.sRGBHex)),n(ot)&&St();return}c($,w(d.sRGBHex)),n(ot)&&yt()}catch{}}function xn(e,l){var nt,E;if(!n(P))return;e.stopPropagation(),_t(l.id);const d=n(P).getBoundingClientRect(),L=e.currentTarget.getBoundingClientRect(),K=d.height?(L.top-d.top)/d.height*100:0,Q=d.width?(L.left-d.left)/d.width*100:0,pt=l.styleMap||{},Sn=parseFloat(pt.top),Cn=parseFloat(pt.left);c(j,w({id:l.id,startX:e.clientX,startY:e.clientY,startTop:Number.isFinite(Sn)?Sn:K,startLeft:Number.isFinite(Cn)?Cn:Q,width:d.width,height:d.height})),document.body.classList.add("dragging-labels"),(E=(nt=e.currentTarget).setPointerCapture)==null||E.call(nt,e.pointerId)}function wn(e){if(!n(j))return;const l=(e.clientX-n(j).startX)/n(j).width*100,d=(e.clientY-n(j).startY)/n(j).height*100,L=Math.min(100,Math.max(0,n(j).startTop+d)),K=Math.min(100,Math.max(0,n(j).startLeft+l));ut(n(j).id,Q=>{const pt={...Q.styleMap||{}};return pt.top=`${L}%`,pt.left=`${K}%`,{...Q,styleMap:pt}})}function tn(){c(j,null),document.body.classList.remove("dragging-labels")}function nn(e){const l=[];if(e.styleMap)for(const[d,L]of Object.entries(e.styleMap))l.push(`${d}: ${L}`);return!n(Y)&&e.shadow&&l.push(`--editor-shadow: ${e.shadow}`),!n(Y)&&e.textColor&&l.push(`--editor-text-color: ${e.textColor}`),l.join("; ")}var Ot=Za();B("pointermove",Wn,wn),B("pointerup",Wn,tn),B("pointercancel",Wn,tn);var It=m(Ot),Ft=m(It),Et=u(m(Ft),2),en=m(Et);Ma(en,{get artboards(){return n(k)},get stageWidth(){return n(Dt)},get labelsCount(){return n(S).length},get selectedLabel(){return n(ot)},get activeShadow(){return n(rt)},get workspaceImage(){return n(Mt)},get htmlFileName(){return n(F)},get imageFileName(){return n(b)},get onLoadSample(){return y()},get cssClassName(){return n(gt)},get cssClassNameValid(){return n(Bt)},get currentRulePreview(){return n(Ln)},get cssSheetPreview(){return n(Lt)},get cssRules(){return n(tt)},get canUseEyeDropper(){return n(mt)},onAi2htmlDrop:xt,onAi2htmlInput:Rn,onImageInput:Ut,onArtboardChange:Gt,onApplyShadowToAll:fn,onApplyTextToSelected:yt,onApplyTextToAll:hn,onClearTextColors:vn,onTextColorLive:mn,onPickTextColor:()=>un("text"),onRecolorSelectedShadow:St,onClearSelectedShadow:Jt,onCopyCurrentShadow:Qt,onShadowColorLive:Kt,onPickShadowColor:()=>un("shadow"),onCssClassNameInput:yn,onAddRuleToSheet:On,onCopyCssSheet:bn,onClearCssSheet:$t,get selectedArtboardId(){return n(N)},set selectedArtboardId(e){c(N,w(e))},get previewOriginal(){return n(Y)},set previewOriginal(e){c(Y,w(e))},get textColor(){return n($)},set textColor(e){c($,w(e))},get shadowColor(){return n(X)},set shadowColor(e){c(X,w(e))}}),f(Et),f(Ft),f(It);var at=u(It,2),an=m(at);{var Pn=e=>{var l=Ba(),d=m(l,!0);f(l),G(()=>ht(d,n(_))),R(e,l)};st(an,e=>{n(_)&&e(Pn)})}var wt=u(an,2),An=m(wt);{var Fn=e=>{var l=Ka(),d=m(l);{var L=nt=>{var E=Ha(),ct=m(E,!0);f(E),G(()=>ht(ct,n(z))),R(nt,E)};st(d,nt=>{n(z)&&nt(L)})}var K=u(d,2),Q=m(K),pt=m(Q);{var Sn=nt=>{var E=Va();E.__pointerdown=[Xa,h];var ct=m(E);{var Xn=Z=>{var U=Wa();G(()=>W(U,"style",n(q).paddingStyle)),R(Z,U)},sn=Z=>{var U=Me(),dt=Ae(U);{var Bn=ln=>{var $n=qa();G(()=>W($n,"style",`padding: 0 0 ${100/(n(q).aspectRatio||1.6)}% 0;`)),R(ln,$n)};st(dt,ln=>{n(z)&&ln(Bn)},!0)}R(Z,U)};st(ct,Z=>{n(q).paddingStyle?Z(Xn):Z(sn,!1)})}var H=u(ct,2),ft=u(H,2);kn(ft,17,()=>n(S),Z=>Z.id,(Z,U)=>{var dt=Ga();const Bn=et(()=>nn(n(U)));dt.__pointerdown=[Ua,xn,U];var ln=m(dt);de(ln,()=>n(U).html),f(dt),G(()=>{W(dt,"id",n(U).id),vt(dt,`${`draggable-label ${n(U).className} ${n(h)===n(U).id?"is-active":""} ${n(U).textColor?"has-custom-text":""} ${n(U).shadow?"has-custom-shadow":""}`??""} svelte-1n1ask5`),W(dt,"style",n(Bn)),W(dt,"aria-label",`Text ${n(U).previewText}`)}),B("focus",dt,()=>_t(n(U).id)),R(Z,dt)}),f(E),oe(E,Z=>c(P,Z),()=>n(P)),G(()=>{W(E,"id",n(q).id),vt(E,`${`${n(q).className||"g-artboard"} editor-artboard`??""} svelte-1n1ask5`),W(E,"style",n(q).style||""),W(H,"id",n(q).imageId),vt(H,la(n(q).imageClassName||"g-aiImg"),"svelte-1n1ask5"),W(H,"src",n(Mt)),W(H,"alt",n(q).imageAlt||"Mapa de fondo"),W(H,"width",n(Dt))}),B("load",H,At),B("error",H,gn),pe(H),re(H),R(nt,E)},Cn=nt=>{var E=Ja(),ct=m(E),Xn=u(ct,2);kn(Xn,17,()=>n(S),sn=>sn.id,(sn,H)=>{var ft=ja();const Z=et(()=>nn(n(H)));ft.__pointerdown=[Ya,xn,H];var U=m(ft);de(U,()=>n(H).html),f(ft),G(()=>{vt(ft,`${`draggable-label ${n(h)===n(H).id?"is-active":""} ${n(H).textColor?"has-custom-text":""} ${n(H).shadow?"has-custom-shadow":""}`??""} svelte-1n1ask5`),W(ft,"style",n(Z)),W(ft,"aria-label",`Text ${n(H).previewText}`)}),B("focus",ft,()=>_t(n(H).id)),R(sn,ft)}),f(E),G(()=>{W(ct,"src",n(Mt)),W(ct,"width",n(Dt))}),B("dragover",E,Wt),B("drop",E,xt),B("error",ct,gn),pe(ct),re(ct),R(nt,E)};st(pt,nt=>{n(q)?nt(Sn):nt(Cn,!1)})}f(Q),f(K),f(l),G(()=>{W(K,"style",`max-width:${n(Dt)}px;`),W(Q,"id",n(V)||"ai2html-root"),vt(Q,`${`${n(D)||"ai2html"} editor-root`??""} svelte-1n1ask5`)}),R(e,l)},En=e=>{var l=Qa();B("dragover",l,Wt),B("drop",l,xt),R(e,l)};st(An,e=>{n(Mt)?e(Fn):e(En,!1)})}f(wt),f(at),oe(at,e=>c(v,e),()=>n(v));var _n=u(at,2),r=m(_n);ua(r,{get selectedShadowRaw(){return n(T)},get shadowColor(){return n(X)},get textColor(){return n($)},get selectedShadowMeta(){return n(kt)},onChooseShadow:jt}),f(_n),f(Ot),G(()=>{vt(at,`${`workspace-column ${n(lt)?"is-dragover":""}`??""} svelte-1n1ask5`),vt(wt,`${`workspace-shell ${n(lt)?"is-dragover":""}`??""} svelte-1n1ask5`)}),B("dragover",at,qt),B("dragleave",at,dn),B("drop",at,xt),B("dragover",wt,qt),B("dragleave",wt,dn),B("drop",wt,xt),R(a,Ot),Dn()}Qn(["pointerdown"]);const ti=`<div id="g-libano-box" class="ai2html media-wide">
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
`;var ni=O('<main id="main-content" class="page is-studio svelte-7fq3ze"><header class="topbar svelte-7fq3ze"><div class="brand svelte-7fq3ze"><div class="brand-mark svelte-7fq3ze">S</div> <div class="brand-copy svelte-7fq3ze"><p class="kicker svelte-7fq3ze">Cheesy Shadow Picker</p> <p class="version svelte-7fq3ze">2.0</p></div></div> <div class="top-divider svelte-7fq3ze" aria-hidden="true"></div></header> <section class="studio-shell svelte-7fq3ze"><!></section></main>');function ri(a,t){Mn(t,!0);let i=M(!1);_e(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&c(i,!0)});function o(){c(i,!0)}var p=ni(),g=u(m(p),2),y=m(g);$a(y,{get sampleMode(){return n(i)},sampleHtml:ti,onLoadSample:o}),f(g),f(p),R(a,p),Dn()}export{ri as component};
