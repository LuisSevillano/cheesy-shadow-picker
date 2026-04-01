import{d as Bn,e as ve,a as R,t as F,n as me}from"../chunks/DfhHYjZk.js";import{A as xe,d as ne,h as tt,B as xn,c as Rn,g as n,H as ye,C as Wn,D as zn,f as St,I as yn,F as ee,e as On,p as ue,G as ae,J as qn,K as Vn,M as be,N as we,O as Pe,P as ie,Q as se,R as Ae,S as _e,T as Se,m as Ce,U as Gn,V as Fn,W as ke,X as le,Y as Ie,Z as En,_ as ze,a0 as oe,a1 as Te,a2 as Me,a3 as De,a4 as Le,a5 as Ne,a6 as Re,k as wn,r as Pn,q as y,v as h,w as g,x as J,y as Q,o as Oe,z as Un,a as N,l as Yn,b as d,a7 as Tn}from"../chunks/DxEB13ml.js";import{o as re,a as Fe}from"../chunks/B5mMWkHv.js";import{l as Ee,d as Xn,p as u,i as ot,s as gt,e as $,a as b,b as Xe,r as He}from"../chunks/mn83PHve.js";import{s as q,r as Mn,a as Be,h as jn}from"../chunks/Dpqzx1rf.js";import{m as We,d as qe}from"../chunks/TublVk_f.js";function pe(e,t){return t}function Ve(e,t,i,r){for(var p=[],c=t.length,m=0;m<c;m++)be(t[m].e,p,!0);var A=c>0&&p.length===0&&i!==null;if(A){var f=i.parentNode;we(f),f.append(i),r.clear(),xt(e,t[0].prev,t[c-1].next)}Pe(p,()=>{for(var I=0;I<c;I++){var S=t[I];A||(r.delete(S.k),xt(e,S.prev,S.next)),ie(S.e,!A)}})}function bn(e,t,i,r,p,c=null){var m=e,A={flags:t,items:new Map,first:null},f=(t&le)!==0;if(f){var I=e;m=tt?xn(se(I)):I.appendChild(xe())}tt&&Rn();var S=null,T=!1,O=Ae(()=>{var x=i();return ke(x)?x:x==null?[]:ae(x)});ne(()=>{var x=n(O),z=x.length;if(T&&z===0)return;T=z===0;let _=!1;if(tt){var X=m.data===ye;X!==(z===0)&&(m=Wn(),xn(m),zn(!1),_=!0)}if(tt){for(var M=null,w,k=0;k<z;k++){if(St.nodeType===8&&St.data===_e){m=St,_=!0,zn(!1);break}var D=x[k],P=r(D,k);w=ce(St,A,M,null,D,P,k,p,t),A.items.set(P,w),M=w}z>0&&xn(Wn())}if(!tt){var C=Se;Ge(x,A,m,p,t,(C.f&yn)!==0,r)}c!==null&&(z===0?S?ee(S):S=On(()=>c(m)):S!==null&&ue(S,()=>{S=null})),_&&zn(!0),n(O)}),tt&&(m=St)}function Ge(e,t,i,r,p,c,m,A){var Ct,nt,rt,pt;var f=(p&Te)!==0,I=(p&(En|Fn))!==0,S=e.length,T=t.items,O=t.first,x=O,z,_=null,X,M=[],w=[],k,D,P,C;if(f)for(C=0;C<S;C+=1)k=e[C],D=m(k,C),P=T.get(D),P!==void 0&&((Ct=P.a)==null||Ct.measure(),(X??(X=new Set)).add(P));for(C=0;C<S;C+=1){if(k=e[C],D=m(k,C),P=T.get(D),P===void 0){var it=x?x.e.nodes_start:i;_=ce(it,t,_,_===null?t.first:_.next,k,D,C,r,p),T.set(D,_),M=[],w=[],x=_.next;continue}if(I&&Ue(P,k,C,p),P.e.f&yn&&(ee(P.e),f&&((nt=P.a)==null||nt.unfix(),(X??(X=new Set)).delete(P))),P!==x){if(z!==void 0&&z.has(P)){if(M.length<w.length){var E=w[0],V;_=E.prev;var ft=M[0],Z=M[M.length-1];for(V=0;V<M.length;V+=1)Jn(M[V],E,i);for(V=0;V<w.length;V+=1)z.delete(w[V]);xt(t,ft.prev,Z.next),xt(t,_,ft),xt(t,Z,E),x=E,_=Z,C-=1,M=[],w=[]}else z.delete(P),Jn(P,x,i),xt(t,P.prev,P.next),xt(t,P,_===null?t.first:_.next),xt(t,_,P),_=P;continue}for(M=[],w=[];x!==null&&x.k!==D;)(c||!(x.e.f&yn))&&(z??(z=new Set)).add(x),w.push(x),x=x.next;if(x===null)continue;P=x}M.push(P),_=P,x=P.next}if(x!==null||z!==void 0){for(var U=z===void 0?[]:ae(z);x!==null;)(c||!(x.e.f&yn))&&U.push(x),x=x.next;var G=U.length;if(G>0){var st=p&le&&S===0?i:null;if(f){for(C=0;C<G;C+=1)(rt=U[C].a)==null||rt.measure();for(C=0;C<G;C+=1)(pt=U[C].a)==null||pt.fix()}Ve(t,U,st,T)}}f&&Ie(()=>{var ht;if(X!==void 0)for(P of X)(ht=P.a)==null||ht.apply()}),qn.first=t.first&&t.first.e,qn.last=_&&_.e}function Ue(e,t,i,r){r&En&&Vn(e.v,t),r&Fn?Vn(e.i,i):e.i=i}function ce(e,t,i,r,p,c,m,A,f,I){var S=(f&En)!==0,T=(f&ze)===0,O=S?T?Ce(p):Gn(p):p,x=f&Fn?Gn(m):m,z={i:x,v:O,k:c,a:null,e:null,prev:i,next:r};try{return z.e=On(()=>A(e,O,x),tt),z.e.prev=i&&i.e,z.e.next=r&&r.e,i===null?t.first=z:(i.next=z,i.e.next=z.e),r!==null&&(r.prev=z,r.e.prev=z.e),z}finally{}}function Jn(e,t,i){for(var r=e.next?e.next.e.nodes_start:i,p=t?t.e.nodes_start:i,c=e.e.nodes_start;c!==r;){var m=oe(c);p.before(c),c=m}}function xt(e,t,i){t===null?e.first=i:(t.next=i,t.e.next=i&&i.e),i!==null&&(i.prev=t,i.e.prev=t&&t.e)}function Kn(e,t,i,r,p){var c=e,m="",A;ne(()=>{if(m===(m=t()??"")){tt&&Rn();return}A!==void 0&&(ie(A),A=void 0),m!==""&&(A=On(()=>{if(tt){St.data;for(var f=Rn(),I=f;f!==null&&(f.nodeType!==8||f.data!=="");)I=f,f=oe(f);if(f===null)throw Me(),De;Bn(St,I),c=xn(f);return}var S=m+"",T=ve(S);Bn(se(T),T.lastChild),c.before(T)}))})}function de(e){var t,i,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(t=0;t<p;t++)e[t]&&(i=de(e[t]))&&(r&&(r+=" "),r+=i)}else for(i in e)e[i]&&(r&&(r+=" "),r+=i);return r}function Ye(){for(var e,t,i=0,r="",p=arguments.length;i<p;i++)(e=arguments[i])&&(t=de(e))&&(r&&(r+=" "),r+=t);return r}function je(e){return typeof e=="object"?Ye(e):e}function yt(e,t,i){var r=e.__className,p=Je(t,i);tt&&e.className===p?e.__className=p:(r!==p||tt&&e.className!==p)&&(t==null&&!i?e.removeAttribute("class"):e.className=p,e.__className=p)}function Je(e,t){return(e??"")+(t?" "+t:"")}function Qn(e,t,i=t){var r=Le();Ee(e,"input",p=>{var c=p?e.defaultValue:e.value;if(c=Dn(e)?Ln(c):c,i(c),r&&c!==(c=t())){var m=e.selectionStart,A=e.selectionEnd;e.value=c??"",A!==null&&(e.selectionStart=m,e.selectionEnd=Math.min(A,e.value.length))}}),(tt&&e.defaultValue!==e.value||Ne(t)==null&&e.value)&&i(Dn(e)?Ln(e.value):e.value),Re(()=>{var p=t();Dn(e)&&p===Ln(e.value)||e.type==="date"&&!p&&!e.value||p!==e.value&&(e.value=p??"")})}function Dn(e){var t=e.type;return t==="number"||t==="range"}function Ln(e){return e===""?null:+e}const Ke=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],un=[...new Map(Ke.map(e=>[e.shadow,e])).values()],Hn=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,Qe=/^[a-z][a-z0-9]*$/;function Ze(e,t=1200){var r;if(!e)return t;if(Number.isFinite(e.maxWidth)&&e.maxWidth>0)return e.maxWidth;if(Number.isFinite(e.minWidth)&&e.minWidth>0)return e.minWidth;const i=Number.parseFloat(((r=e.styleMap)==null?void 0:r.width)||"");return Number.isFinite(i)&&i>0?i:t}function $e(e="#000000"){let t=e.replace("#","");t.length===3&&(t=t.split("").map(r=>`${r}${r}`).join(""));const i=Number.parseInt(t,16);return Number.isFinite(i)?[i>>16&255,i>>8&255,i&255]:[0,0,0]}function _t(e,t){if(!e)return"";const i=e.match(Hn);if(!(i!=null&&i.length))return e;const[r,p,c]=$e(t),m=i.map(f=>{if(f.startsWith("#"))return t;const I=f.match(/\d+(?:\.\d+)?%?/g)||[];if(!I.length)return`rgb(${r} ${p} ${c})`;const S=I[3];return S?`rgb(${r} ${p} ${c} / ${S})`:`rgb(${r} ${p} ${c})`});let A=e;return i.forEach((f,I)=>{A=A.replace(f,m[I])}),A}function ta(e=""){if(!e)return"";let t=e.trim().replace("#","");return(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(i=>`${i}${i}`).join("")),`#${t.slice(0,6).toLowerCase()}`}function ge(e=""){if(!e)return"";if(e.startsWith("#"))return ta(e);const t=e.match(/[\d.]+%?/g);if(!t||t.length<3)return"";const[i,r,p]=t,c=A=>A.endsWith("%")?Math.round(Number.parseFloat(A)/100*255):Math.round(Number.parseFloat(A)),m=A=>Math.max(0,Math.min(255,A)).toString(16).padStart(2,"0");return`#${m(c(i))}${m(c(r))}${m(c(p))}`}function na(e=""){var i;const t=(i=e.match(Hn))==null?void 0:i[0];return t?ge(t):""}function Zn(e=""){return e.toLowerCase().replace(Hn,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function ea(e=""){return e.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function $n(e="",t=""){return!e||!t?"":`.${e} { text-shadow: ${t}; }`}var aa=(e,t,i)=>t()(n(i).shadow),ia=F('<span class="source-wrap svelte-1p0dar6"><a class="shadow-source svelte-1p0dar6" target="_blank" rel="noreferrer">View reference</a></span>'),sa=F('<button type="button"><span class="shadow-name svelte-1p0dar6"> </span> <span class="shadow-preview svelte-1p0dar6">Preview</span> <!></button>'),la=F('<aside class="library-column svelte-1p0dar6"><div class="library-header-panel svelte-1p0dar6"><h3 class="svelte-1p0dar6">Shadow Library</h3> <p class="svelte-1p0dar6">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1p0dar6"></div></aside>');function oa(e,t){wn(t,!0);let i=u(t,"selectedShadowRaw",3,""),r=u(t,"shadowColor",3,"#000000"),p=u(t,"textColor",3,"#ffffff");u(t,"selectedShadowMeta",3,null);let c=u(t,"onChooseShadow",3,()=>{});var m=la(),A=y(h(m),2);bn(A,21,()=>un,pe,(f,I)=>{var S=sa();S.__click=[aa,c,I];var T=h(S),O=h(T,!0);g(T);var x=y(T,2);const z=Q(()=>`text-shadow:${_t(n(I).shadow,r())};color:${p()};`);var _=y(x,2);{var X=M=>{var w=ia(),k=h(w);g(w),J(()=>q(k,"href",n(I).source)),R(M,w)};ot(_,M=>{i()===n(I).shadow&&n(I).source&&M(X)})}g(S),J(()=>{yt(S,`${`shadow-choice ${i()===n(I).shadow?"is-selected":""}`??""} svelte-1p0dar6`),gt(O,n(I).id),q(x,"style",n(z))}),R(f,S)}),g(A),g(m),R(e,m),Pn()}Xn(["click"]);var ra=me('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function te(e){var t=ra();R(e,t)}var pa=F('<p class="active-file svelte-k3fax3"> </p>'),ca=(e,t,i,r)=>{t(n(i).id),r()({currentTarget:{value:n(i).id}})},da=F('<button type="button"> </button>'),ga=F('<div class="artboard-switcher svelte-k3fax3"><span class="artboard-label svelte-k3fax3">Artboard</span> <div class="artboard-buttons svelte-k3fax3"></div></div>'),fa=(e,t)=>t(!t()),ha=F('<p class="selection-note svelte-k3fax3">Selected: <strong> </strong></p>'),va=F('<pre class="css-preview svelte-k3fax3"> </pre>'),ma=F('<pre class="css-rules-output svelte-k3fax3"> </pre>'),xa=F('<p class="empty-rules svelte-k3fax3">No rules added yet.</p>'),ya=F(`<section class="panel toolbar svelte-k3fax3"><div class="toolbar-row import-row svelte-k3fax3" role="region" aria-label="ai2html and image import zone"><p class="import-hint svelte-k3fax3">Drag .html or image to the main workspace</p> <div class="import-actions svelte-k3fax3"><label class="tool-button svelte-k3fax3" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-k3fax3"> <label class="tool-button svelte-k3fax3" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-k3fax3"> <button type="button" class="tool-button sample-button svelte-k3fax3">Load sample</button></div> <!></div> <div class="toolbar-row main-controls-row svelte-k3fax3"><!> <p class="metric svelte-k3fax3"> </p> <div class="quick-actions svelte-k3fax3"><button type="button" class="svelte-k3fax3">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-k3fax3"><div class="toolbar-row appearance-row svelte-k3fax3"><div class="appearance-block svelte-k3fax3"><h4 class="svelte-k3fax3">Text Color</h4> <div class="control-row svelte-k3fax3"><label for="text-color" class="svelte-k3fax3">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-k3fax3"></div> <div class="action-row svelte-k3fax3"><button type="button" class="svelte-k3fax3">Apply to Selected</button> <button type="button" class="svelte-k3fax3">Apply to All</button> <button type="button" class="reset-button svelte-k3fax3"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-k3fax3"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-k3fax3"><h4 class="svelte-k3fax3">Shadow Color</h4> <div class="control-row svelte-k3fax3"><label for="shadow-color" class="svelte-k3fax3">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-k3fax3"></div> <div class="action-row svelte-k3fax3"><button type="button" class="svelte-k3fax3">Recolor Selected</button> <button type="button" class="reset-button svelte-k3fax3"><!> Reset Shadow</button> <button type="button" class="svelte-k3fax3">Copy CSS</button> <button type="button" class="eyedropper svelte-k3fax3"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-k3fax3"><details class="workflow-details svelte-k3fax3"><summary class="svelte-k3fax3">Illustrator Workflow</summary> <div class="workflow-content svelte-k3fax3"><div class="workflow-intro svelte-k3fax3"><p class="svelte-k3fax3">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-k3fax3">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-k3fax3"><h4 class="svelte-k3fax3">Stylesheet</h4> <div class="control-row class-name-row svelte-k3fax3"><label for="css-class-name" class="svelte-k3fax3">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-k3fax3"></div> <p class="class-name-help svelte-k3fax3">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-k3fax3"><button type="button" class="svelte-k3fax3">Add to Stylesheet</button> <button type="button" class="svelte-k3fax3">Copy CSS</button> <button type="button" class="reset-button svelte-k3fax3">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-k3fax3" aria-live="polite"><!></div></div></div></details></section>`,1);function ua(e,t){wn(t,!0);let i=u(t,"artboards",19,()=>[]),r=u(t,"selectedArtboardId",15,""),p=u(t,"stageWidth",3,0),c=u(t,"labelsCount",3,0),m=u(t,"selectedLabel",3,null),A=u(t,"activeShadow",3,""),f=u(t,"workspaceImage",3,""),I=u(t,"htmlFileName",3,""),S=u(t,"imageFileName",3,""),T=u(t,"onLoadSample",3,()=>{}),O=u(t,"previewOriginal",15,!1),x=u(t,"textColor",15,"#000000"),z=u(t,"shadowColor",15,"#000000"),_=u(t,"cssClassName",3,""),X=u(t,"cssClassNameValid",3,!1),M=u(t,"currentRulePreview",3,""),w=u(t,"cssSheetPreview",3,""),k=u(t,"cssRules",19,()=>[]),D=u(t,"canUseEyeDropper",3,!1),P=u(t,"onAi2htmlDrop",3,()=>{}),C=u(t,"onAi2htmlInput",3,()=>{}),it=u(t,"onImageInput",3,()=>{}),E=u(t,"onArtboardChange",3,()=>{}),V=u(t,"onApplyShadowToAll",3,()=>{}),ft=u(t,"onApplyTextToSelected",3,()=>{}),Z=u(t,"onApplyTextToAll",3,()=>{}),U=u(t,"onClearTextColors",3,()=>{}),G=u(t,"onTextColorLive",3,()=>{}),st=u(t,"onPickTextColor",3,()=>{}),Ct=u(t,"onRecolorSelectedShadow",3,()=>{}),nt=u(t,"onClearSelectedShadow",3,()=>{}),rt=u(t,"onCopyCurrentShadow",3,()=>{}),pt=u(t,"onShadowColorLive",3,()=>{}),ht=u(t,"onPickShadowColor",3,()=>{}),$t=u(t,"onCssClassNameInput",3,()=>{}),An=u(t,"onAddRuleToSheet",3,()=>{}),Ot=u(t,"onCopyCssSheet",3,()=>{}),tn=u(t,"onClearCssSheet",3,()=>{});function nn(l){l.preventDefault()}var en=ya(),ct=Oe(en),vt=h(ct),kt=y(h(vt),2),an=y(h(kt),2);an.__change=function(...l){var s;(s=C())==null||s.apply(this,l)};var Ft=y(an,4);Ft.__change=function(...l){var s;(s=it())==null||s.apply(this,l)};var sn=y(Ft,2);sn.__click=function(...l){var s;(s=T())==null||s.apply(this,l)},g(kt);var _n=y(kt,2);{var Et=l=>{var s=pa(),H=h(s,!0);g(s),J(()=>gt(H,I()||S())),R(l,s)};ot(_n,l=>{(I()||S())&&l(Et)})}g(vt);var ln=y(vt,2),on=h(ln);{var Sn=l=>{var s=ga(),H=y(h(s),2);bn(H,21,i,pe,(B,et)=>{var dt=da();dt.__click=[ca,r,et,E];var Y=h(dt,!0);g(dt),J(()=>{yt(dt,`${`artboard-btn ${r()===n(et).id?"is-active":""}`??""} svelte-k3fax3`),gt(Y,n(et).name)}),R(B,dt)}),g(H),g(s),R(l,s)};ot(on,l=>{i().length>1&&l(Sn)})}var Xt=y(on,2),Cn=h(Xt);g(Xt);var It=y(Xt,2),Ht=h(It);Ht.__click=function(...l){var s;(s=V())==null||s.apply(this,l)};var ut=y(Ht,2);ut.__click=[fa,O];var kn=h(ut,!0);g(ut),g(It),g(ln),g(ct);var bt=y(ct,2),wt=h(bt),zt=h(wt),Bt=y(h(zt),2),Wt=y(h(Bt),2);Mn(Wt),Wt.__input=function(...l){var s;(s=G())==null||s.apply(this,l)},g(Bt);var rn=y(Bt,2),qt=h(rn);qt.__click=function(...l){var s;(s=ft())==null||s.apply(this,l)};var Vt=y(qt,2);Vt.__click=function(...l){var s;(s=Z())==null||s.apply(this,l)};var Pt=y(Vt,2);Pt.__click=function(...l){var s;(s=U())==null||s.apply(this,l)};var In=h(Pt);te(In),Un(),g(Pt);var pn=y(Pt,2);pn.__click=function(...l){var s;(s=st())==null||s.apply(this,l)},g(rn),g(zt);var cn=y(zt,2),Gt=y(h(cn),2),Tt=y(h(Gt),2);Mn(Tt),Tt.__input=function(...l){var s;(s=pt())==null||s.apply(this,l)},g(Gt);var Ut=y(Gt,2),Yt=h(Ut);Yt.__click=function(...l){var s;(s=Ct())==null||s.apply(this,l)};var mt=y(Yt,2);mt.__click=function(...l){var s;(s=nt())==null||s.apply(this,l)};var dn=h(mt);te(dn),Un(),g(mt);var At=y(mt,2);At.__click=function(...l){var s;(s=rt())==null||s.apply(this,l)};var Mt=y(At,2);Mt.__click=function(...l){var s;(s=ht())==null||s.apply(this,l)},g(Ut),g(cn),g(wt);var gn=y(wt,2);{var fn=l=>{var s=ha(),H=y(h(s)),B=h(H,!0);g(H),g(s),J(()=>gt(B,m().previewText)),R(l,s)};ot(gn,l=>{m()&&l(fn)})}g(bt);var hn=y(bt,2),Dt=h(hn),jt=y(h(Dt),2),vn=y(h(jt),2),Lt=y(h(vn),2),Jt=y(h(Lt),2);Mn(Jt),Jt.__input=function(...l){var s;(s=$t())==null||s.apply(this,l)},g(Lt);var Kt=y(Lt,4),Qt=h(Kt);Qt.__click=function(...l){var s;(s=An())==null||s.apply(this,l)};var Nt=y(Qt,2);Nt.__click=function(...l){var s;(s=Ot())==null||s.apply(this,l)};var mn=y(Nt,2);mn.__click=function(...l){var s;(s=tn())==null||s.apply(this,l)},g(Kt);var Zt=y(Kt,2);{var a=l=>{var s=va(),H=h(s,!0);g(s),J(()=>gt(H,M())),R(l,s)};ot(Zt,l=>{M()&&l(a)})}var o=y(Zt,2),v=h(o);{var L=l=>{var s=ma(),H=h(s,!0);g(s),J(()=>gt(H,w())),R(l,s)},K=l=>{var s=xa();R(l,s)};ot(v,l=>{w()?l(L):l(K,!1)})}g(o),g(vn),g(jt),g(Dt),g(hn),J(()=>{gt(Cn,`Native Width: ${p()??""}px`),Ht.disabled=!c(),yt(ut,`${`preview-toggle ${O()?"is-active":""}`??""} svelte-k3fax3`),ut.disabled=!c(),gt(kn,O()?"Show Edited":"Show Original"),qt.disabled=!m(),Vt.disabled=!c(),Pt.disabled=!c(),pn.disabled=!D()||!f(),Yt.disabled=!m(),mt.disabled=!m(),At.disabled=!A(),Mt.disabled=!D()||!f(),Be(Jt,_()),Qt.disabled=!X(),Nt.disabled=!w(),mn.disabled=!k().length}),$("dragover",vt,nn),$("drop",vt,function(...l){var s;(s=P())==null||s.apply(this,l)}),Qn(Wt,x),Qn(Tt,z),R(e,en),Pn()}Xn(["change","click","input"]);const Rt=(e,t=0)=>{const i=Number.parseFloat(e);return Number.isFinite(i)?i:t},Nn=(e="")=>e.split(";").map(t=>t.trim()).filter(Boolean).reduce((t,i)=>{const[r,...p]=i.split(":");return!r||p.length===0||(t[r.trim().toLowerCase()]=p.join(":").trim()),t},{}),ba=(e="",t="Artboard")=>e?e.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():t,wa=(e={})=>{const i=(e.padding||"").split(/\s+/).filter(Boolean),r=i[2]||i[0]||"",p=Rt(r,0);return p?100/p:null},Pa=(e={})=>Object.entries(e).map(([t,i])=>`${t}: ${i}`).join(";");function Aa(e,t){return!Array.isArray(e)||e.length===0?null:e.find(i=>t>=i.minWidth&&t<=i.maxWidth)||e[0]}function _a(e=""){if(!e.trim())throw new Error("The file is empty.");let t=e.trim();!t.includes("<html")&&!t.includes("<!DOCTYPE")&&(t=`<!DOCTYPE html><html><head></head><body>${t}</body></html>`);const r=new DOMParser().parseFromString(t,"text/html"),p=[...r.querySelectorAll(".g-artboard")],c=r.querySelector(".ai2html");if(!p.length)throw new Error("No ai2html artboards found.");const m=[...r.querySelectorAll("style")].map(f=>f.textContent||"").join(`
`).trim(),A=p.map((f,I)=>{const S=Nn(f.getAttribute("style")||""),T=f.querySelector(":scope > div:not([id])"),O=Nn((T==null?void 0:T.getAttribute("style"))||""),x=f.querySelector('[id$="-graphic"]'),z=x?[...x.querySelectorAll(".g-aiAbs")]:[...f.querySelectorAll(":scope > div.g-aiAbs")],_=x?x.querySelector("img.g-aiImg, img"):f.querySelector("img.g-aiImg, img"),X=T&&Object.keys(O).length>0,M=z.map((D,P)=>{const C=Nn(D.getAttribute("style")||""),it=D.textContent.split(`
`).map(E=>E.trim()).filter(Boolean).join(" ").trim();return{id:D.id||`label-${I+1}-${P+1}`,className:D.className||"",html:D.innerHTML,previewText:it||`Label ${P+1}`,styleMap:C,shadow:"",textColor:""}}),w=wa(O),k=Rt(f.dataset.aspectRatio,0)||w||16/9;return{id:f.id||`artboard-${I+1}`,name:ba(f.id,`Artboard ${I+1}`),className:f.className||"g-artboard",style:f.getAttribute("style")||"",styleMap:S,aspectRatio:k,minWidth:Rt(f.dataset.minWidth,Rt(S["min-width"],0)),maxWidth:Rt(f.dataset.maxWidth,Rt(S["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:X?Pa(O):"",imageSrc:(_==null?void 0:_.getAttribute("src"))||"",imageAlt:(_==null?void 0:_.getAttribute("alt"))||"",imageClassName:(_==null?void 0:_.className)||"g-aiImg",imageId:(_==null?void 0:_.id)||"",labels:M}});return{cssText:m,rootId:(c==null?void 0:c.id)||"",rootClassName:(c==null?void 0:c.className)||"ai2html",artboards:A}}async function Sa(e){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}const Ca={copyToClipboard:Sa};function ka(e,t){e.target.closest(".draggable-label")||d(t,"")}var Ia=F('<p class="error svelte-ininng"> </p>'),za=F("<div></div>"),Ta=(e,t,i)=>t(e,n(i)),Ma=F('<button type="button"><!></button>'),Da=F('<div><!> <img loading="eager" fetchpriority="high"> <!></div>'),La=(e,t,i)=>t(e,n(i)),Na=F('<button type="button"><!></button>'),Ra=F('<div class="workspace-empty svelte-ininng" role="region" aria-label="Drop zone for ai2html or image files"><img alt="Editor background" loading="eager" fetchpriority="high"> <!></div>'),Oa=F('<div class="workspace-scroll svelte-ininng"><div class="stage-host svelte-ininng"><div><!></div></div></div>'),Fa=F('<div class="workspace-empty svelte-ininng" role="region" aria-label="Drop zone for ai2html or image files"><svg class="empty-icon svelte-ininng" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 20h14v-2H5zm7-16-5.5 5.5 1.42 1.42L11 8.84V16h2V8.84l3.08 3.08 1.42-1.42z"></path></svg> <p class="svelte-ininng">Drag & drop your ai2html or image file here</p> <p class="empty-hint svelte-ininng">or use the buttons in the toolbar</p></div>'),Ea=F('<section class="studio svelte-ininng"><aside class="left-sidebar svelte-ininng"><details class="mobile-tools svelte-ininng" open><summary class="svelte-ininng">Tools</summary> <div class="mobile-tools-body svelte-ininng"><!></div></details></aside> <div class="workspace-column svelte-ininng"><!> <div class="workspace-shell svelte-ininng"><!></div></div> <aside class="right-sidebar svelte-ininng"><!></aside></section>');function Xa(e,t){var Zt;wn(t,!0);const{copyToClipboard:i}=Ca,r=((Zt=un[0])==null?void 0:Zt.shadow)||"";let p=u(t,"sampleMode",3,!1),c=u(t,"sampleHtml",3,""),m=u(t,"onLoadSample",3,()=>{}),A=N(void 0),f=N(""),I=N(""),S=N(""),T=N(""),O=N(""),x=N(1200),z=N(""),_=N("ai2html"),X=N(b([])),M=N(""),w=N(b([])),k=N(""),D=N(b(r)),P=N(b(We)),C=N(b(qe)),it=N(!1),E=N(null),V=N(void 0),ft=N(!1),Z=N(""),U=N(b([]));const G=Q(()=>n(X).find(a=>a.id===n(M))||null),st=Q(()=>n(w).find(a=>a.id===n(k))||null),Ct=Q(()=>un.find(a=>a.shadow===n(D))||null),nt=Q(()=>_t(n(D),n(C))),rt=Q(()=>{var a;return((a=n(G))==null?void 0:a.imageSrc)||n(O)}),pt=Q(()=>Ze(n(G),n(x))),ht=Q(()=>Qe.test(n(Z))),$t=Q(()=>{var a;return((a=n(st))==null?void 0:a.shadow)||n(nt)||""}),An=Q(()=>n(ht)&&n($t)?$n(n(Z),n($t)):""),Ot=Q(()=>n(U).map(a=>$n(a.className,a.shadow)).join(`
`));Yn(()=>{typeof document>"u"||(n(V)||(d(V,b(document.createElement("style"))),n(V).setAttribute("data-ai2html-import","true"),document.head.append(n(V))),n(V).textContent=n(f))}),re(()=>{d(ft,b(typeof window<"u"&&"EyeDropper"in window))});let tn=N(!1);Yn(()=>{typeof window>"u"||!p()||n(tn)||!c()||(d(tn,!0),nn(c(),"sample-ai2html.html"))});async function nn(a,o=""){d(I,"");try{const v=_a(a);d(X,b(v.artboards)),d(z,b(v.rootId)),d(_,b(v.rootClassName)),d(f,b(v.cssText)),d(S,b(o)),d(O,""),d(T,"");const L=typeof window<"u"?window.innerWidth:1200;vt(Aa(v.artboards,L)||v.artboards[0])}catch(v){d(I,b(v instanceof Error?v.message:"Could not read ai2html file."))}}Fe(()=>{var a;typeof document<"u"&&((a=n(V))==null||a.remove(),document.body.classList.remove("dragging-labels"))});function en(a=[]){return a.map(o=>({...o,styleMap:{...o.styleMap||{}}}))}function ct(a,o){d(w,b(n(w).map(v=>v.id===a?o(v):v)))}function vt(a){var o;a&&(d(M,b(a.id)),d(w,b(en(a.labels||[]))),d(k,b(((o=n(w)[0])==null?void 0:o.id)||"")))}async function kt(a){if(!a)return;const o=await a.text();await nn(o,a.name)}function an(a){const[o]=a.currentTarget.files||[];kt(o)}function Ft(a){a.preventDefault()}function sn(a){if(!a||!a.type.startsWith("image/"))return;const o=new FileReader;o.onload=()=>{d(O,b(o.result)),d(T,b(a.name)),d(S,""),d(X,b([])),d(M,""),d(z,""),d(_,"ai2html"),d(f,""),d(w,b([])),d(k,"");const v=new Image;v.onload=()=>{v.naturalWidth&&v.naturalHeight&&d(x,b(v.naturalWidth))},v.src=o.result},o.readAsDataURL(a)}function _n(a){if(a){if(a.type.startsWith("image/")){sn(a);return}(a.name.endsWith(".html")||a.type.includes("html")||a.type.includes("text"))&&kt(a)}}function Et(a){a.preventDefault();const[o]=a.dataTransfer.files||[];_n(o)}function ln(a){const[o]=a.currentTarget.files||[];sn(o)}function on(a){const o=a.target;o.naturalWidth&&d(x,b(o.naturalWidth))}function Sn(a){const o=n(X).find(({id:v})=>v===a.currentTarget.value);vt(o)}function Xt(a=""){if(!a||a==="none")return;const o=Zn(a),v=un.find(L=>Zn(_t(L.shadow,n(C)))===o);v&&d(D,b(v.shadow))}function Cn(a){if(!a||typeof document>"u")return;const o=document.getElementById(a);if(!o)return;const v=o.querySelector("p, span, div")||o,L=getComputedStyle(v),K=ge(L.color);K&&d(P,b(K));const l=L.textShadow;if(l&&l!=="none"){const s=na(l);s&&d(C,b(s)),Xt(l)}}function It(a){d(k,b(a)),Cn(a)}function Ht(a){if(d(D,b(a)),!n(k)){d(w,b(n(w).map(o=>({...o,shadow:_t(a,n(C))}))));return}ct(n(k),o=>({...o,shadow:_t(a,n(C))}))}function ut(){d(w,b(n(w).map(a=>({...a,shadow:n(nt)}))))}function kn(){n(k)&&ct(n(k),a=>({...a,shadow:""}))}function bt(){n(k)&&ct(n(k),a=>({...a,shadow:_t(a.shadow||n(D),n(C))}))}function wt(){n(k)&&ct(n(k),a=>({...a,textColor:n(P)}))}function zt(){d(w,b(n(w).map(a=>({...a,textColor:n(P)}))))}function Bt(){d(w,b(n(w).map(a=>({...a,textColor:""}))))}function Wt(){if(n(k)){wt();return}n(w).length&&zt()}function rn(){if(n(k)){bt();return}d(w,b(n(w).map(a=>a.shadow?{...a,shadow:_t(a.shadow,n(C))}:a)))}async function qt(){n(nt)&&await i(`text-shadow: ${n(nt)}`)}function Vt(a){d(Z,b(ea(a.currentTarget.value||"")))}function Pt(){if(!n(k)||typeof document>"u")return"";const a=document.getElementById(n(k));if(!a)return"";const o=a.querySelector("p, span, div")||a,v=getComputedStyle(o).textShadow;return v&&v!=="none"?v:""}function In(){var o;if((o=n(st))!=null&&o.shadow)return n(st).shadow;const a=Pt();return a||n(nt)}function pn(){if(!n(ht))return;const a=In();if(!a)return;const o={className:n(Z),shadow:a},v=n(U).findIndex(L=>L.className===n(Z));if(v===-1){d(U,b([...n(U),o]));return}d(U,b(n(U).map((L,K)=>K===v?o:L)))}function cn(){d(U,b([]))}async function Gt(){n(Ot)&&await i(n(Ot))}async function Tt(a){if(n(ft))try{const v=await new window.EyeDropper().open();if(a==="shadow"){d(C,b(v.sRGBHex)),n(st)&&bt();return}d(P,b(v.sRGBHex)),n(st)&&wt()}catch{}}function Ut(a,o){var K,l;if(!n(A))return;a.stopPropagation(),It(o.id);const v=o.styleMap||{},L=n(A).getBoundingClientRect();d(E,b({id:o.id,startX:a.clientX,startY:a.clientY,startTop:parseFloat(v.top)||0,startLeft:parseFloat(v.left)||0,width:L.width,height:L.height})),document.body.classList.add("dragging-labels"),(l=(K=a.currentTarget).setPointerCapture)==null||l.call(K,a.pointerId)}function Yt(a){if(!n(E))return;const o=(a.clientX-n(E).startX)/n(E).width*100,v=(a.clientY-n(E).startY)/n(E).height*100,L=Math.min(100,Math.max(0,n(E).startTop+v)),K=Math.min(100,Math.max(0,n(E).startLeft+o));ct(n(E).id,l=>{const s={...l.styleMap||{}};return s.top=`${L}%`,s.left=`${K}%`,{...l,styleMap:s}})}function mt(){d(E,null),document.body.classList.remove("dragging-labels")}function dn(a){const o=[];if(a.styleMap)for(const[v,L]of Object.entries(a.styleMap))o.push(`${v}: ${L}`);return!n(it)&&a.shadow&&o.push(`--editor-shadow: ${a.shadow}`),!n(it)&&a.textColor&&o.push(`--editor-text-color: ${a.textColor}`),o.join("; ")}var At=Ea();$("pointermove",Tn,Yt),$("pointerup",Tn,mt),$("pointercancel",Tn,mt);var Mt=h(At),gn=h(Mt),fn=y(h(gn),2),hn=h(fn);ua(hn,{get artboards(){return n(X)},get stageWidth(){return n(pt)},get labelsCount(){return n(w).length},get selectedLabel(){return n(st)},get activeShadow(){return n(nt)},get workspaceImage(){return n(rt)},get htmlFileName(){return n(S)},get imageFileName(){return n(T)},get onLoadSample(){return m()},get cssClassName(){return n(Z)},get cssClassNameValid(){return n(ht)},get currentRulePreview(){return n(An)},get cssSheetPreview(){return n(Ot)},get cssRules(){return n(U)},get canUseEyeDropper(){return n(ft)},onAi2htmlDrop:Et,onAi2htmlInput:an,onImageInput:ln,onArtboardChange:Sn,onApplyShadowToAll:ut,onApplyTextToSelected:wt,onApplyTextToAll:zt,onClearTextColors:Bt,onTextColorLive:Wt,onPickTextColor:()=>Tt("text"),onRecolorSelectedShadow:bt,onClearSelectedShadow:kn,onCopyCurrentShadow:qt,onShadowColorLive:rn,onPickShadowColor:()=>Tt("shadow"),onCssClassNameInput:Vt,onAddRuleToSheet:pn,onCopyCssSheet:Gt,onClearCssSheet:cn,get selectedArtboardId(){return n(M)},set selectedArtboardId(a){d(M,b(a))},get previewOriginal(){return n(it)},set previewOriginal(a){d(it,b(a))},get textColor(){return n(P)},set textColor(a){d(P,b(a))},get shadowColor(){return n(C)},set shadowColor(a){d(C,b(a))}}),g(fn),g(gn),g(Mt);var Dt=y(Mt,2),jt=h(Dt);{var vn=a=>{var o=Ia(),v=h(o,!0);g(o),J(()=>gt(v,n(I))),R(a,o)};ot(jt,a=>{n(I)&&a(vn)})}var Lt=y(jt,2),Jt=h(Lt);{var Kt=a=>{var o=Oa(),v=h(o),L=h(v),K=h(L);{var l=H=>{var B=Da();B.__pointerdown=[ka,k];var et=h(B);{var dt=W=>{var j=za();J(()=>q(j,"style",n(G).paddingStyle)),R(W,j)};ot(et,W=>{n(G).paddingStyle&&W(dt)})}var Y=y(et,2),lt=y(Y,2);bn(lt,17,()=>n(w),W=>W.id,(W,j)=>{var at=Ma();const fe=Q(()=>dn(n(j)));at.__pointerdown=[Ta,Ut,j];var he=h(at);Kn(he,()=>n(j).html),g(at),J(()=>{q(at,"id",n(j).id),yt(at,`${`draggable-label ${n(j).className} ${n(k)===n(j).id?"is-active":""} ${n(j).textColor?"has-custom-text":""} ${n(j).shadow?"has-custom-shadow":""}`??""} svelte-ininng`),q(at,"style",n(fe)),q(at,"aria-label",`Text ${n(j).previewText}`)}),$("focus",at,()=>It(n(j).id)),R(W,at)}),g(B),Xe(B,W=>d(A,W),()=>n(A)),J(()=>{q(B,"id",n(G).id),yt(B,`${`${n(G).className||"g-artboard"} editor-artboard`??""} svelte-ininng`),q(B,"style",n(G).style||""),q(Y,"id",n(G).imageId),yt(Y,je(n(G).imageClassName||"g-aiImg"),"svelte-ininng"),q(Y,"src",n(rt)),q(Y,"alt",n(G).imageAlt||"Mapa de fondo"),q(Y,"width",n(pt))}),$("load",Y,on),jn(Y),He(Y),R(H,B)},s=H=>{var B=Ra(),et=h(B),dt=y(et,2);bn(dt,17,()=>n(w),Y=>Y.id,(Y,lt)=>{var W=Na();const j=Q(()=>dn(n(lt)));W.__pointerdown=[La,Ut,lt];var at=h(W);Kn(at,()=>n(lt).html),g(W),J(()=>{yt(W,`${`draggable-label ${n(k)===n(lt).id?"is-active":""} ${n(lt).textColor?"has-custom-text":""} ${n(lt).shadow?"has-custom-shadow":""}`??""} svelte-ininng`),q(W,"style",n(j)),q(W,"aria-label",`Text ${n(lt).previewText}`)}),$("focus",W,()=>It(n(lt).id)),R(Y,W)}),g(B),J(()=>{q(et,"src",n(rt)),q(et,"width",n(pt))}),$("dragover",B,Ft),$("drop",B,Et),jn(et),R(H,B)};ot(K,H=>{n(G)?H(l):H(s,!1)})}g(L),g(v),g(o),J(()=>{q(v,"style",`width:${n(pt)}px;`),q(L,"id",n(z)||"ai2html-root"),yt(L,`${`${n(_)||"ai2html"} editor-root`??""} svelte-ininng`)}),R(a,o)},Qt=a=>{var o=Fa();$("dragover",o,Ft),$("drop",o,Et),R(a,o)};ot(Jt,a=>{n(rt)?a(Kt):a(Qt,!1)})}g(Lt),g(Dt);var Nt=y(Dt,2),mn=h(Nt);oa(mn,{get selectedShadowRaw(){return n(D)},get shadowColor(){return n(C)},get textColor(){return n(P)},get selectedShadowMeta(){return n(Ct)},onChooseShadow:Ht}),g(Nt),g(At),R(e,At),Pn()}Xn(["pointerdown"]);const Ha=`<div id="g-libano-box" class="ai2html media-wide">
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
`;var Ba=F('<main id="main-content" class="page is-studio svelte-7fq3ze"><header class="topbar svelte-7fq3ze"><div class="brand svelte-7fq3ze"><div class="brand-mark svelte-7fq3ze">S</div> <div class="brand-copy svelte-7fq3ze"><p class="kicker svelte-7fq3ze">Cheesy Shadow Picker</p> <p class="version svelte-7fq3ze">2.0</p></div></div> <div class="top-divider svelte-7fq3ze" aria-hidden="true"></div></header> <section class="studio-shell svelte-7fq3ze"><!></section></main>');function ja(e,t){wn(t,!0);let i=N(!1);re(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&d(i,!0)});function r(){d(i,!0)}var p=Ba(),c=y(h(p),2),m=h(c);Xa(m,{get sampleMode(){return n(i)},sampleHtml:Ha,onLoadSample:r}),g(c),g(p),R(e,p),Pn()}export{ja as component};
