import{b as Dn,a as H,f as X,d as he}from"../chunks/DgM4MugZ.js";import{o as ae,a as me}from"../chunks/pgCtfXo6.js";import{C as Ln,e as ue,h as Z,i as sn,J as Dt,d as Hn,g as e,r as ve,M as ye,f as Gn,j as Mn,k as Rt,G as ie,N as xe,O as Vn,P as Lt,Q as rt,R as Xn,S as be,T as we,U as Ae,V as Pe,W as qn,X as Se,Y as Ce,o as ze,Z as Yn,_ as _e,a0 as Ie,a1 as se,a2 as le,a3 as Rn,a4 as Te,a5 as ke,a6 as De,a7 as Le,I as re,a8 as oe,a9 as Me,aa as Re,A as j,ab as Ne,ac as Ee,ad as Oe,ae as Fe,af as We,ag as He,ah as Xe,ai as Be,t as qe,aj as Ue,ak as Ge,p as ut,x as vt,w as P,y as b,z as y,v as Ve,al as jn,B as $,a as W,am as kt,q as Jn,b as u,an as Nn}from"../chunks/DXxeDSZY.js";import{d as xn,p as o,i as st,s as lt,a as B,e as Q,b as pe,r as Kn}from"../chunks/D9JfOmeJ.js";import{s as it,r as En,e as Ye,m as je,f as Je}from"../chunks/CHLWFSJT.js";import"../chunks/BPaBBqKw.js";function de(n,t){return t}function Ke(n,t,a){for(var s=[],r=t.length,l,c=t.length,m=0;m<r;m++){let _=t[m];le(_,()=>{if(l){if(l.pending.delete(_),l.done.add(_),l.pending.size===0){var w=n.outrogroups;Bn(n,qn(l.done)),w.delete(l),w.size===0&&(n.outrogroups=null)}}else c-=1},!1)}if(c===0){var g=s.length===0&&a!==null;if(g){var v=a,d=v.parentNode;ke(d),d.append(v),n.items.clear()}Bn(n,t,!g)}else l={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(l)}function Bn(n,t,a=!0){var s;if(n.pending.size>0){s=new Set;for(const c of n.pending.values())for(const m of c)s.add(n.items.get(m).e)}for(var r=0;r<t.length;r++){var l=t[r];if(s!=null&&s.has(l)){l.f|=rt;const c=document.createDocumentFragment();De(l,c)}else Le(t[r],a)}}var Qn;function yn(n,t,a,s,r,l=null){var c=n,m=new Map,g=(t&oe)!==0;if(g){var v=n;c=Z?sn(Dt(v)):v.appendChild(Ln())}Z&&Hn();var d=null,_=Ae(()=>{var I=a();return Pe(I)?I:I==null?[]:qn(I)}),w,A=new Map,R=!0;function N(I){(L.effect.f&Ie)===0&&(L.pending.delete(I),L.fallback=d,Qe(L,w,c,t,s),d!==null&&(w.length===0?(d.f&rt)===0?se(d):(d.f^=rt,an(d,null,c)):le(d,()=>{d=null})))}function f(I){L.pending.delete(I)}var S=ue(()=>{w=e(_);var I=w.length;let x=!1;if(Z){var D=ve(c)===ye;D!==(I===0)&&(c=Gn(),sn(c),Mn(!1),x=!0)}for(var z=new Set,O=Lt,T=we(),M=0;M<I;M+=1){Z&&Rt.nodeType===ie&&Rt.data===xe&&(c=Rt,x=!0,Mn(!1));var J=w[M],U=s(J,M),q=R?null:m.get(U);q?(q.v&&Vn(q.v,J),q.i&&Vn(q.i,M),T&&O.unskip_effect(q.e)):(q=Ze(m,R?c:Qn??(Qn=Ln()),J,U,M,r,t,a),R||(q.e.f|=rt),m.set(U,q)),z.add(U)}if(I===0&&l&&!d&&(R?d=Xn(()=>l(c)):(d=Xn(()=>l(Qn??(Qn=Ln()))),d.f|=rt)),I>z.size&&be(),Z&&I>0&&sn(Gn()),!R)if(A.set(O,z),T){for(const[E,k]of m)z.has(E)||O.skip_effect(k.e);O.oncommit(N),O.ondiscard(f)}else N(O);x&&Mn(!0),e(_)}),L={effect:S,items:m,pending:A,outrogroups:null,fallback:d};R=!1,Z&&(c=Rt)}function en(n){for(;n!==null&&(n.f&Te)===0;)n=n.next;return n}function Qe(n,t,a,s,r){var J,U,q,E,k,G,V,dt,K;var l=(s&Re)!==0,c=t.length,m=n.items,g=en(n.effect.first),v,d=null,_,w=[],A=[],R,N,f,S;if(l)for(S=0;S<c;S+=1)R=t[S],N=r(R,S),f=m.get(N).e,(f.f&rt)===0&&((U=(J=f.nodes)==null?void 0:J.a)==null||U.measure(),(_??(_=new Set)).add(f));for(S=0;S<c;S+=1){if(R=t[S],N=r(R,S),f=m.get(N).e,n.outrogroups!==null)for(const Y of n.outrogroups)Y.pending.delete(f),Y.done.delete(f);if((f.f&Rn)!==0&&(se(f),l&&((E=(q=f.nodes)==null?void 0:q.a)==null||E.unfix(),(_??(_=new Set)).delete(f))),(f.f&rt)!==0)if(f.f^=rt,f===g)an(f,null,a);else{var L=d?d.next:g;f===n.effect.last&&(n.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),ct(n,d,f),ct(n,f,L),an(f,L,a),d=f,w=[],A=[],g=en(d.next);continue}if(f!==g){if(v!==void 0&&v.has(f)){if(w.length<A.length){var I=A[0],x;d=I.prev;var D=w[0],z=w[w.length-1];for(x=0;x<w.length;x+=1)an(w[x],I,a);for(x=0;x<A.length;x+=1)v.delete(A[x]);ct(n,D.prev,z.next),ct(n,d,D),ct(n,z,I),g=I,d=z,S-=1,w=[],A=[]}else v.delete(f),an(f,g,a),ct(n,f.prev,f.next),ct(n,f,d===null?n.effect.first:d.next),ct(n,d,f),d=f;continue}for(w=[],A=[];g!==null&&g!==f;)(v??(v=new Set)).add(g),A.push(g),g=en(g.next);if(g===null)continue}(f.f&rt)===0&&w.push(f),d=f,g=en(f.next)}if(n.outrogroups!==null){for(const Y of n.outrogroups)Y.pending.size===0&&(Bn(n,qn(Y.done)),(k=n.outrogroups)==null||k.delete(Y));n.outrogroups.size===0&&(n.outrogroups=null)}if(g!==null||v!==void 0){var O=[];if(v!==void 0)for(f of v)(f.f&Rn)===0&&O.push(f);for(;g!==null;)(g.f&Rn)===0&&g!==n.fallback&&O.push(g),g=en(g.next);var T=O.length;if(T>0){var M=(s&oe)!==0&&c===0?a:null;if(l){for(S=0;S<T;S+=1)(V=(G=O[S].nodes)==null?void 0:G.a)==null||V.measure();for(S=0;S<T;S+=1)(K=(dt=O[S].nodes)==null?void 0:dt.a)==null||K.fix()}Ke(n,O,M)}}l&&Me(()=>{var Y,ot;if(_!==void 0)for(f of _)(ot=(Y=f.nodes)==null?void 0:Y.a)==null||ot.apply()})}function Ze(n,t,a,s,r,l,c,m){var g=(c&Se)!==0?(c&Ce)===0?ze(a,!1,!1):Yn(a):null,v=(c&_e)!==0?Yn(r):null;return{v:g,i:v,e:Xn(()=>(l(t,g??a,v??r,m),()=>{n.delete(s)}))}}function an(n,t,a){if(n.nodes)for(var s=n.nodes.start,r=n.nodes.end,l=t&&(t.f&rt)===0?t.nodes.start:a;s!==null;){var c=re(s);if(l.before(s),s===r)return;s=c}}function ct(n,t,a){t===null?n.effect.first=a:t.next=a,a===null?n.effect.last=t:a.prev=t}function $e(n,t,a=!1,s=!1,r=!1,l=!1){var c=n,m="";if(a){var g=n;Z&&(c=sn(Dt(g)))}j(()=>{var v=Ne;if(m===(m=t()??"")){Z&&Hn();return}if(a&&!Z){v.nodes=null,g.innerHTML=m,m!==""&&Dn(Dt(g),g.lastChild);return}if(v.nodes!==null&&(Ee(v.nodes.start,v.nodes.end),v.nodes=null),m!==""){if(Z){Rt.data;for(var d=Hn(),_=d;d!==null&&(d.nodeType!==ie||d.data!=="");)_=d,d=re(d);if(d===null)throw Oe(),Fe;Dn(Rt,_),c=sn(d);return}var w=s?He:r?Xe:void 0,A=We(s?"svg":r?"math":"template",w);A.innerHTML=m;var R=s||r?A:A.content;if(Dn(Dt(R),R.lastChild),s||r)for(;Dt(R);)c.before(Dt(R));else c.before(R)}})}function ce(n){var t,a,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(t=0;t<r;t++)n[t]&&(a=ce(n[t]))&&(s&&(s+=" "),s+=a)}else for(a in n)n[a]&&(s&&(s+=" "),s+=a);return s}function ta(){for(var n,t,a=0,s="",r=arguments.length;a<r;a++)(n=arguments[a])&&(t=ce(n))&&(s&&(s+=" "),s+=t);return s}function na(n){return typeof n=="object"?ta(n):n??""}function ea(n,t,a){var s=n==null?"":""+n;return t&&(s=s?s+" "+t:t),s===""?null:s}function aa(n,t){return n==null?null:String(n)}function pt(n,t,a,s,r,l){var c=n.__className;if(Z||c!==a||c===void 0){var m=ea(a,s);(!Z||m!==n.getAttribute("class"))&&(m==null?n.removeAttribute("class"):n.className=m),n.__className=a}return l}function Nt(n,t,a,s){var r=n.__style;if(Z||r!==t){var l=aa(t);(!Z||l!==n.getAttribute("style"))&&(l==null?n.removeAttribute("style"):n.style.cssText=l),n.__style=t}return s}function Zn(n,t,a=t){var s=new WeakSet;Be(n,"input",async r=>{var l=r?n.defaultValue:n.value;if(l=On(n)?Fn(l):l,a(l),Lt!==null&&s.add(Lt),await qe(),l!==(l=t())){var c=n.selectionStart,m=n.selectionEnd,g=n.value.length;if(n.value=l??"",m!==null){var v=n.value.length;c===m&&m===g&&v>g?(n.selectionStart=v,n.selectionEnd=v):(n.selectionStart=c,n.selectionEnd=Math.min(m,v))}}}),(Z&&n.defaultValue!==n.value||Ue(t)==null&&n.value)&&(a(On(n)?Fn(n.value):n.value),Lt!==null&&s.add(Lt)),Ge(()=>{var r=t();if(n===document.activeElement){var l=Lt;if(s.has(l))return}On(n)&&r===Fn(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function On(n){var t=n.type;return t==="number"||t==="range"}function Fn(n){return n===""?null:+n}const ia=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],vn=[...new Map(ia.map(n=>[n.shadow,n])).values()],Un=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,sa=/^[a-z][a-z0-9]*$/;function la(n,t=1200){var s;if(!n)return t;if(Number.isFinite(n.maxWidth)&&n.maxWidth>0)return n.maxWidth;if(Number.isFinite(n.minWidth)&&n.minWidth>0)return n.minWidth;const a=Number.parseFloat(((s=n.styleMap)==null?void 0:s.width)||"");return Number.isFinite(a)&&a>0?a:t}function ra(n="#000000"){let t=n.replace("#","");t.length===3&&(t=t.split("").map(s=>`${s}${s}`).join(""));const a=Number.parseInt(t,16);return Number.isFinite(a)?[a>>16&255,a>>8&255,a&255]:[0,0,0]}function mt(n,t){if(!n)return"";const a=n.match(Un);if(!(a!=null&&a.length))return n;const[s,r,l]=ra(t),c=a.map(g=>{if(g.startsWith("#"))return t;const v=g.match(/\d+(?:\.\d+)?%?/g)||[];if(!v.length)return`rgb(${s} ${r} ${l})`;const d=v[3];return d?`rgb(${s} ${r} ${l} / ${d})`:`rgb(${s} ${r} ${l})`});let m=n;return a.forEach((g,v)=>{m=m.replace(g,c[v])}),m}function oa(n=""){if(!n)return"";let t=n.trim().replace("#","");return(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(a=>`${a}${a}`).join("")),`#${t.slice(0,6).toLowerCase()}`}function ge(n=""){if(!n)return"";if(n.startsWith("#"))return oa(n);const t=n.match(/[\d.]+%?/g);if(!t||t.length<3)return"";const[a,s,r]=t,l=m=>m.endsWith("%")?Math.round(Number.parseFloat(m)/100*255):Math.round(Number.parseFloat(m)),c=m=>Math.max(0,Math.min(255,m)).toString(16).padStart(2,"0");return`#${c(l(a))}${c(l(s))}${c(l(r))}`}function pa(n=""){var a;const t=(a=n.match(Un))==null?void 0:a[0];return t?ge(t):""}function $n(n=""){return n.toLowerCase().replace(Un,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function da(n=""){return n.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function te(n="",t=""){return!n||!t?"":`.${n} { text-shadow: ${t}; }`}var ca=X('<span class="source-wrap svelte-1o3sgti"><a class="shadow-source svelte-1o3sgti" target="_blank" rel="noreferrer">View reference</a></span>'),ga=X('<button type="button"><span class="shadow-name svelte-1o3sgti"> </span> <span class="shadow-preview svelte-1o3sgti">Preview</span> <!></button>'),fa=X('<aside class="library-column svelte-1o3sgti"><div class="library-header-panel svelte-1o3sgti"><h3 class="svelte-1o3sgti">Shadow Library</h3> <p class="svelte-1o3sgti">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1o3sgti"></div></aside>');function ha(n,t){ut(t,!0);let a=o(t,"selectedShadowRaw",3,""),s=o(t,"shadowColor",3,"#000000"),r=o(t,"textColor",3,"#ffffff");o(t,"selectedShadowMeta",3,null);let l=o(t,"onChooseShadow",3,()=>{});var c=fa(),m=P(b(c),2);yn(m,21,()=>vn,de,(g,v)=>{var d=ga(),_=b(d),w=b(_,!0);y(_);var A=P(_,2),R=P(A,2);{var N=f=>{var S=ca(),L=b(S);y(S),j(()=>it(L,"href",e(v).source)),H(f,S)};st(R,f=>{a()===e(v).shadow&&e(v).source&&f(N)})}y(d),j(f=>{pt(d,1,`shadow-choice ${a()===e(v).shadow?"is-selected":""}`,"svelte-1o3sgti"),lt(w,e(v).id),Nt(A,f)},[()=>`text-shadow:${mt(e(v).shadow,s())};color:${r()};`]),B("click",d,()=>l()(e(v).shadow)),H(g,d)}),y(m),y(c),H(n,c),vt()}xn(["click"]);var ma=he('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function ne(n){var t=ma();H(n,t)}var ua=X('<p class="active-file svelte-y6dmz4"> </p>'),va=X('<button type="button"> </button>'),ya=X('<div class="artboard-switcher svelte-y6dmz4"><span class="artboard-label svelte-y6dmz4">Artboard</span> <div class="artboard-buttons svelte-y6dmz4"></div></div>'),xa=X('<p class="selection-note svelte-y6dmz4">Selected: <strong> </strong></p>'),ba=X('<pre class="css-preview svelte-y6dmz4"> </pre>'),wa=X('<pre class="css-rules-output svelte-y6dmz4"> </pre>'),Aa=X('<p class="empty-rules svelte-y6dmz4">No rules added yet.</p>'),Pa=X(`<section class="panel toolbar svelte-y6dmz4"><div class="toolbar-row import-row svelte-y6dmz4" role="region" aria-label="ai2html and image import zone"><p class="import-hint svelte-y6dmz4">Drag .html or image to the main workspace</p> <div class="import-actions svelte-y6dmz4"><label class="tool-button svelte-y6dmz4" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-y6dmz4"/> <label class="tool-button svelte-y6dmz4" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-y6dmz4"/> <button type="button" class="tool-button sample-button svelte-y6dmz4">Load sample</button></div> <!></div> <div class="toolbar-row main-controls-row svelte-y6dmz4"><!> <p class="metric svelte-y6dmz4"> </p> <div class="quick-actions svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-y6dmz4"><div class="toolbar-row appearance-row svelte-y6dmz4"><div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Text Color</h4> <div class="control-row svelte-y6dmz4"><label for="text-color" class="svelte-y6dmz4">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply to Selected</button> <button type="button" class="svelte-y6dmz4">Apply to All</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Shadow Color</h4> <div class="control-row svelte-y6dmz4"><label for="shadow-color" class="svelte-y6dmz4">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Recolor Selected</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset Shadow</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-y6dmz4"><details class="workflow-details svelte-y6dmz4"><summary class="svelte-y6dmz4">Illustrator Workflow</summary> <div class="workflow-content svelte-y6dmz4"><div class="workflow-intro svelte-y6dmz4"><p class="svelte-y6dmz4">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-y6dmz4">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Stylesheet</h4> <div class="control-row class-name-row svelte-y6dmz4"><label for="css-class-name" class="svelte-y6dmz4">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-y6dmz4"/></div> <p class="class-name-help svelte-y6dmz4">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Add to Stylesheet</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="reset-button svelte-y6dmz4">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-y6dmz4" aria-live="polite"><!></div></div></div></details></section>`,1);function Sa(n,t){ut(t,!0);let a=o(t,"artboards",19,()=>[]),s=o(t,"selectedArtboardId",15,""),r=o(t,"stageWidth",3,0),l=o(t,"labelsCount",3,0),c=o(t,"selectedLabel",3,null),m=o(t,"activeShadow",3,""),g=o(t,"workspaceImage",3,""),v=o(t,"htmlFileName",3,""),d=o(t,"imageFileName",3,""),_=o(t,"onLoadSample",3,()=>{}),w=o(t,"previewOriginal",15,!1),A=o(t,"textColor",15,"#000000"),R=o(t,"shadowColor",15,"#000000"),N=o(t,"cssClassName",3,""),f=o(t,"cssClassNameValid",3,!1),S=o(t,"currentRulePreview",3,""),L=o(t,"cssSheetPreview",3,""),I=o(t,"cssRules",19,()=>[]),x=o(t,"canUseEyeDropper",3,!1),D=o(t,"onAi2htmlDrop",3,()=>{}),z=o(t,"onAi2htmlInput",3,()=>{}),O=o(t,"onImageInput",3,()=>{}),T=o(t,"onArtboardChange",3,()=>{}),M=o(t,"onApplyShadowToAll",3,()=>{}),J=o(t,"onApplyTextToSelected",3,()=>{}),U=o(t,"onApplyTextToAll",3,()=>{}),q=o(t,"onClearTextColors",3,()=>{}),E=o(t,"onTextColorLive",3,()=>{}),k=o(t,"onPickTextColor",3,()=>{}),G=o(t,"onRecolorSelectedShadow",3,()=>{}),V=o(t,"onClearSelectedShadow",3,()=>{}),dt=o(t,"onCopyCurrentShadow",3,()=>{}),K=o(t,"onShadowColorLive",3,()=>{}),Y=o(t,"onPickShadowColor",3,()=>{}),ot=o(t,"onCssClassNameInput",3,()=>{}),Et=o(t,"onAddRuleToSheet",3,()=>{}),ln=o(t,"onCopyCssSheet",3,()=>{}),bn=o(t,"onClearCssSheet",3,()=>{});function Ot(h){h.preventDefault()}var Ft=Pa(),yt=Ve(Ft),tt=b(yt),xt=P(b(tt),2),Wt=P(b(xt),2),rn=P(Wt,4),wn=P(rn,2);y(xt);var An=P(xt,2);{var Pn=h=>{var p=ua(),at=b(p,!0);y(p),j(()=>lt(at,v()||d())),H(h,p)};st(An,h=>{(v()||d())&&h(Pn)})}y(tt);var Ht=P(tt,2),on=b(Ht);{var pn=h=>{var p=ya(),at=P(b(p),2);yn(at,21,a,de,(kn,un)=>{var nn=va(),fe=b(nn,!0);y(nn),j(()=>{pt(nn,1,`artboard-btn ${s()===e(un).id?"is-active":""}`,"svelte-y6dmz4"),lt(fe,e(un).name)}),B("click",nn,()=>{s(e(un).id),T()({currentTarget:{value:e(un).id}})}),H(kn,nn)}),y(at),y(p),H(h,p)};st(on,h=>{a().length>1&&h(pn)})}var Xt=P(on,2),Sn=b(Xt);y(Xt);var dn=P(Xt,2),Bt=b(dn),gt=P(Bt,2),Cn=b(gt,!0);y(gt),y(dn),y(Ht),y(yt);var bt=P(yt,2),qt=b(bt),Ut=b(qt),Gt=P(b(Ut),2),ft=P(b(Gt),2);En(ft),y(Gt);var wt=P(Gt,2),At=b(wt),Vt=P(At,2),ht=P(Vt,2),zn=b(ht);ne(zn),jn(),y(ht);var cn=P(ht,2);y(wt),y(Ut);var gn=P(Ut,2),Yt=P(b(gn),2),jt=P(b(Yt),2);En(jt),y(Yt);var fn=P(Yt,2),Pt=b(fn),nt=P(Pt,2),_n=b(nt);ne(_n),jn(),y(nt);var Jt=P(nt,2),Kt=P(Jt,2);y(fn),y(gn),y(qt);var In=P(qt,2);{var Tn=h=>{var p=xa(),at=P(b(p)),kn=b(at,!0);y(at),y(p),j(()=>lt(kn,c().previewText)),H(h,p)};st(In,h=>{c()&&h(Tn)})}y(bt);var St=P(bt,2),Ct=b(St),Qt=P(b(Ct),2),Zt=P(b(Qt),2),$t=P(b(Zt),2),zt=P(b($t),2);En(zt),y($t);var _t=P($t,4),tn=b(_t),It=P(tn,2),i=P(It,2);y(_t);var C=P(_t,2);{var F=h=>{var p=ba(),at=b(p,!0);y(p),j(()=>lt(at,S())),H(h,p)};st(C,h=>{S()&&h(F)})}var et=P(C,2),hn=b(et);{var Tt=h=>{var p=wa(),at=b(p,!0);y(p),j(()=>lt(at,L())),H(h,p)},mn=h=>{var p=Aa();H(h,p)};st(hn,h=>{L()?h(Tt):h(mn,-1)})}y(et),y(Zt),y(Qt),y(Ct),y(St),j(()=>{lt(Sn,`Native Width: ${r()??""}px`),Bt.disabled=!l(),pt(gt,1,`preview-toggle ${w()?"is-active":""}`,"svelte-y6dmz4"),gt.disabled=!l(),lt(Cn,w()?"Show Edited":"Show Original"),At.disabled=!c(),Vt.disabled=!l(),ht.disabled=!l(),cn.disabled=!x()||!g(),Pt.disabled=!c(),nt.disabled=!c(),Jt.disabled=!m(),Kt.disabled=!x()||!g(),Ye(zt,N()),tn.disabled=!f(),It.disabled=!L(),i.disabled=!I().length}),Q("dragover",tt,Ot),Q("drop",tt,function(...h){var p;(p=D())==null||p.apply(this,h)}),B("change",Wt,function(...h){var p;(p=z())==null||p.apply(this,h)}),B("change",rn,function(...h){var p;(p=O())==null||p.apply(this,h)}),B("click",wn,function(...h){var p;(p=_())==null||p.apply(this,h)}),B("click",Bt,function(...h){var p;(p=M())==null||p.apply(this,h)}),B("click",gt,()=>w(!w())),B("input",ft,function(...h){var p;(p=E())==null||p.apply(this,h)}),Zn(ft,A),B("click",At,function(...h){var p;(p=J())==null||p.apply(this,h)}),B("click",Vt,function(...h){var p;(p=U())==null||p.apply(this,h)}),B("click",ht,function(...h){var p;(p=q())==null||p.apply(this,h)}),B("click",cn,function(...h){var p;(p=k())==null||p.apply(this,h)}),B("input",jt,function(...h){var p;(p=K())==null||p.apply(this,h)}),Zn(jt,R),B("click",Pt,function(...h){var p;(p=G())==null||p.apply(this,h)}),B("click",nt,function(...h){var p;(p=V())==null||p.apply(this,h)}),B("click",Jt,function(...h){var p;(p=dt())==null||p.apply(this,h)}),B("click",Kt,function(...h){var p;(p=Y())==null||p.apply(this,h)}),B("input",zt,function(...h){var p;(p=ot())==null||p.apply(this,h)}),B("click",tn,function(...h){var p;(p=Et())==null||p.apply(this,h)}),B("click",It,function(...h){var p;(p=ln())==null||p.apply(this,h)}),B("click",i,function(...h){var p;(p=bn())==null||p.apply(this,h)}),H(n,Ft),vt()}xn(["change","click","input"]);var Ca=X('<button type="button"></button>');function ee(n,t){ut(t,!0);let a=o(t,"isActive",3,!1),s=o(t,"onSelect",3,()=>{}),r=o(t,"onStartDrag",3,()=>{});var l=Ca();$e(l,()=>t.label.html,!0),y(l),j(c=>{it(l,"id",t.label.id),pt(l,1,`draggable-label ${t.label.className||""} ${a()?"is-active":""} ${t.label.textColor?"has-custom-text":""} ${t.label.shadow?"has-custom-shadow":""}`,"svelte-13v9flg"),Nt(l,c),it(l,"aria-label",`Text ${t.label.previewText}`)},[()=>t.buildLabelStyle(t.label)]),Q("focus",l,()=>s()(t.label.id)),B("pointerdown",l,c=>r()(c,t.label)),H(n,l),vt()}xn(["pointerdown"]);var za=X("<div></div>"),_a=X("<div></div>"),Ia=X('<div role="presentation"><!> <img loading="eager" fetchpriority="high"/> <!></div>'),Ta=X('<div class="workspace-empty svelte-lohhan" role="region" aria-label="Drop zone for ai2html or image files"><img alt="Editor background" loading="eager" fetchpriority="high"/> <!></div>'),ka=X('<div class="stage-host svelte-lohhan"><div><!></div></div>');function Da(n,t){ut(t,!0);let a=o(t,"rootId",3,""),s=o(t,"rootClassName",3,"ai2html"),r=o(t,"labels",19,()=>[]),l=o(t,"activeLabelId",3,""),c=o(t,"onSelectLabel",3,()=>{}),m=o(t,"onStartDrag",3,()=>{}),g=o(t,"onStagePointerDown",3,()=>{}),v=o(t,"onImageLoad",3,()=>{}),d=o(t,"onImageError",3,()=>{}),_=o(t,"stageRef",15);var w=ka(),A=b(w),R=b(A);{var N=S=>{var L=Ia(),I=b(L);{var x=T=>{var M=za();j(()=>Nt(M,t.selectedArtboard.paddingStyle)),H(T,M)},D=T=>{var M=_a();j(()=>Nt(M,`padding: 0 0 ${100/(t.selectedArtboard.aspectRatio||1.6)}% 0;`)),H(T,M)};st(I,T=>{t.selectedArtboard.paddingStyle?T(x):t.imageLoadError&&T(D,1)})}var z=P(I,2),O=P(z,2);yn(O,17,r,T=>T.id,(T,M)=>{{let J=$(()=>l()===e(M).id);ee(T,{get label(){return e(M)},get isActive(){return e(J)},get buildLabelStyle(){return t.buildLabelStyle},get onSelect(){return c()},get onStartDrag(){return m()}})}}),y(L),pe(L,T=>_(T),()=>_()),j(()=>{it(L,"id",t.selectedArtboard.id),pt(L,1,`${t.selectedArtboard.className||"g-artboard"} editor-artboard`,"svelte-lohhan"),Nt(L,t.selectedArtboard.style||""),it(z,"id",t.selectedArtboard.imageId),pt(z,1,na(t.selectedArtboard.imageClassName||"g-aiImg"),"svelte-lohhan"),it(z,"src",t.workspaceImage),it(z,"alt",t.selectedArtboard.imageAlt||"Mapa de fondo"),it(z,"width",t.stageWidth)}),B("pointerdown",L,function(...T){var M;(M=g())==null||M.apply(this,T)}),Q("load",z,function(...T){var M;(M=v())==null||M.apply(this,T)}),Q("error",z,function(...T){var M;(M=d())==null||M.apply(this,T)}),Kn(z),H(S,L)},f=S=>{var L=Ta(),I=b(L),x=P(I,2);yn(x,17,r,D=>D.id,(D,z)=>{{let O=$(()=>l()===e(z).id);ee(D,{get label(){return e(z)},get isActive(){return e(O)},get buildLabelStyle(){return t.buildLabelStyle},get onSelect(){return c()},get onStartDrag(){return m()}})}}),y(L),j(()=>{it(I,"src",t.workspaceImage),it(I,"width",t.stageWidth)}),Q("error",I,function(...D){var z;(z=d())==null||z.apply(this,D)}),Kn(I),H(S,L)};st(R,S=>{t.selectedArtboard?S(N):S(f,-1)})}y(A),y(w),j(()=>{Nt(w,`max-width:${t.stageWidth}px;`),it(A,"id",a()||"ai2html-root"),pt(A,1,`${s()||"ai2html"} editor-root`,"svelte-lohhan")}),H(n,w),vt()}xn(["pointerdown"]);var La=X('<p class="error svelte-1k8ke2i"> </p>'),Ma=X('<p class="image-warning svelte-1k8ke2i" role="alert"> </p>'),Ra=X('<div class="workspace-scroll svelte-1k8ke2i"><!> <!></div>'),Na=X('<div class="workspace-empty svelte-1k8ke2i" role="region" aria-label="Drop zone for ai2html or image files"><svg class="empty-icon svelte-1k8ke2i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> <p class="svelte-1k8ke2i">Drag & drop your ai2html or image file here</p> <p class="empty-hint svelte-1k8ke2i">or use the buttons in the toolbar</p></div>'),Ea=X('<div role="region" aria-label="Main workspace drop zone"><!> <div role="region" aria-label="Workspace drop zone"><!></div></div>');function Oa(n,t){ut(t,!0);let a=o(t,"parseError",3,""),s=o(t,"workspaceImage",3,""),r=o(t,"isDragOver",3,!1),l=o(t,"imageLoadError",3,""),c=o(t,"rootId",3,""),m=o(t,"rootClassName",3,"ai2html"),g=o(t,"labels",19,()=>[]),v=o(t,"activeLabelId",3,""),d=o(t,"stageWidth",3,1200),_=o(t,"onDragOver",3,()=>{}),w=o(t,"onWorkspaceDragOver",3,()=>{}),A=o(t,"onWorkspaceDragLeave",3,()=>{}),R=o(t,"onDrop",3,()=>{}),N=o(t,"onStagePointerDown",3,()=>{}),f=o(t,"onSelectLabel",3,()=>{}),S=o(t,"onStartDrag",3,()=>{}),L=o(t,"onImageLoad",3,()=>{}),I=o(t,"onImageError",3,()=>{}),x=o(t,"workspaceColumnRef",15),D=o(t,"stageRef",15);var z=Ea(),O=b(z);{var T=E=>{var k=La(),G=b(k,!0);y(k),j(()=>lt(G,a())),H(E,k)};st(O,E=>{a()&&E(T)})}var M=P(O,2),J=b(M);{var U=E=>{var k=Ra(),G=b(k);{var V=K=>{var Y=Ma(),ot=b(Y,!0);y(Y),j(()=>lt(ot,l())),H(K,Y)};st(G,K=>{l()&&K(V)})}var dt=P(G,2);Da(dt,{get rootId(){return c()},get rootClassName(){return m()},get selectedArtboard(){return t.selectedArtboard},get workspaceImage(){return s()},get stageWidth(){return d()},get imageLoadError(){return l()},get labels(){return g()},get activeLabelId(){return v()},get buildLabelStyle(){return t.buildLabelStyle},get onSelectLabel(){return f()},get onStartDrag(){return S()},get onStagePointerDown(){return N()},get onImageLoad(){return L()},get onImageError(){return I()},get stageRef(){return D()},set stageRef(K){D(K)}}),y(k),H(E,k)},q=E=>{var k=Na();Q("dragover",k,function(...G){var V;(V=_())==null||V.apply(this,G)}),Q("drop",k,function(...G){var V;(V=R())==null||V.apply(this,G)}),H(E,k)};st(J,E=>{s()?E(U):E(q,-1)})}y(M),y(z),pe(z,E=>x(E),()=>x()),j(()=>{pt(z,1,`workspace-column ${r()?"is-dragover":""}`,"svelte-1k8ke2i"),pt(M,1,`workspace-shell ${r()?"is-dragover":""}`,"svelte-1k8ke2i")}),Q("dragover",z,function(...E){var k;(k=w())==null||k.apply(this,E)}),Q("dragleave",z,function(...E){var k;(k=A())==null||k.apply(this,E)}),Q("drop",z,function(...E){var k;(k=R())==null||k.apply(this,E)}),Q("dragover",M,function(...E){var k;(k=w())==null||k.apply(this,E)}),Q("dragleave",M,function(...E){var k;(k=A())==null||k.apply(this,E)}),Q("drop",M,function(...E){var k;(k=R())==null||k.apply(this,E)}),H(n,z),vt()}function Fa({getStageRef:n,selectLabel:t,updateLabel:a,clearActiveLabel:s}){let r=null;function l(d,_){var x,D;const w=n();if(!w)return;d.stopPropagation(),t(_.id);const A=w.getBoundingClientRect(),R=d.currentTarget.getBoundingClientRect(),N=A.height?(R.top-A.top)/A.height*100:0,f=A.width?(R.left-A.left)/A.width*100:0,S=_.styleMap||{},L=parseFloat(S.top),I=parseFloat(S.left);r={id:_.id,startX:d.clientX,startY:d.clientY,startTop:Number.isFinite(L)?L:N,startLeft:Number.isFinite(I)?I:f,width:A.width,height:A.height},document.body.classList.add("dragging-labels"),(D=(x=d.currentTarget).setPointerCapture)==null||D.call(x,d.pointerId)}function c(d){if(!r)return;const _=(d.clientX-r.startX)/r.width*100,w=(d.clientY-r.startY)/r.height*100,A=Math.min(100,Math.max(0,r.startTop+w)),R=Math.min(100,Math.max(0,r.startLeft+_));a(r.id,N=>{const f={...N.styleMap||{}};return f.top=`${A}%`,f.left=`${R}%`,{...N,styleMap:f}})}function m(){r=null,document.body.classList.remove("dragging-labels")}function g(d){d.target.closest(".draggable-label")||s()}function v(){r=null,typeof document<"u"&&document.body.classList.remove("dragging-labels")}return{startDrag:l,handlePointerMove:c,handlePointerUp:m,handleStagePointerDown:g,cleanupDragState:v}}function Wa(n=[]){return n.map(t=>({...t,styleMap:{...t.styleMap||{}}}))}function Ha(n){return n!=null&&n.clientWidth?n.clientWidth:typeof window<"u"?Math.max(300,window.innerWidth-24):1200}function Xa(n){return n?n.name.endsWith(".html")||n.type.includes("html")||n.type.includes("text"):!1}function Ba(n){return new Promise((t,a)=>{if(!n||!n.type.startsWith("image/")){a(new Error("Invalid image file."));return}const s=new FileReader;s.onload=()=>t(s.result||""),s.onerror=()=>a(new Error("Could not read image file.")),s.readAsDataURL(n)})}function qa(n){return new Promise(t=>{const a=new Image;a.onload=()=>{if(a.naturalWidth&&a.naturalHeight){t(a.naturalWidth);return}t(null)},a.onerror=()=>t(null),a.src=n})}function Ua(n){if(!n||typeof document>"u")return"";const t=document.getElementById(n);if(!t)return"";const a=t.querySelector("p, span, div")||t,s=getComputedStyle(a).textShadow;return s&&s!=="none"?s:""}function Ga({selectedLabel:n,activeLabelId:t,activeShadow:a}){if(n!=null&&n.shadow)return n.shadow;const s=Ua(t);return s||a}function Va(n,t,a){const s={className:t,shadow:a},r=n.findIndex(l=>l.className===t);return r===-1?[...n,s]:n.map((l,c)=>c===r?s:l)}const Mt=(n,t=0)=>{const a=Number.parseFloat(n);return Number.isFinite(a)?a:t},Wn=(n="")=>n.split(";").map(t=>t.trim()).filter(Boolean).reduce((t,a)=>{const[s,...r]=a.split(":");return!s||r.length===0||(t[s.trim().toLowerCase()]=r.join(":").trim()),t},{}),Ya=(n="",t="Artboard")=>n?n.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():t,ja=(n={})=>{const a=(n.padding||"").split(/\s+/).filter(Boolean),s=a[2]||a[0]||"",r=Mt(s,0);return r?100/r:null},Ja=(n={})=>Object.entries(n).map(([t,a])=>`${t}: ${a}`).join(";");function Ka(n,t){return!Array.isArray(n)||n.length===0?null:n.find(a=>t>=a.minWidth&&t<=a.maxWidth)||n[0]}function Qa(n=""){if(!n.trim())throw new Error("The file is empty.");let t=n.trim();!t.includes("<html")&&!t.includes("<!DOCTYPE")&&(t=`<!DOCTYPE html><html><head></head><body>${t}</body></html>`);const s=new DOMParser().parseFromString(t,"text/html"),r=[...s.querySelectorAll(".g-artboard")],l=s.querySelector(".ai2html");if(!r.length)throw new Error("No ai2html artboards found.");const c=[...s.querySelectorAll("style")].map(g=>g.textContent||"").join(`
`).trim(),m=r.map((g,v)=>{const d=Wn(g.getAttribute("style")||""),_=g.querySelector(":scope > div:not([id])"),w=Wn((_==null?void 0:_.getAttribute("style"))||""),A=g.querySelector('[id$="-graphic"]'),R=A?[...A.querySelectorAll(".g-aiAbs")]:[...g.querySelectorAll(":scope > div.g-aiAbs")],N=A?A.querySelector("img.g-aiImg, img"):g.querySelector("img.g-aiImg, img"),f=_&&Object.keys(w).length>0,S=R.map((x,D)=>{const z=Wn(x.getAttribute("style")||""),O=x.textContent.split(`
`).map(T=>T.trim()).filter(Boolean).join(" ").trim();return{id:x.id||`label-${v+1}-${D+1}`,className:x.className||"",html:x.innerHTML,previewText:O||`Label ${D+1}`,styleMap:z,shadow:"",textColor:""}}),L=ja(w),I=Mt(g.dataset.aspectRatio,0)||L||16/9;return{id:g.id||`artboard-${v+1}`,name:Ya(g.id,`Artboard ${v+1}`),className:g.className||"g-artboard",style:g.getAttribute("style")||"",styleMap:d,aspectRatio:I,minWidth:Mt(g.dataset.minWidth,Mt(d["min-width"],0)),maxWidth:Mt(g.dataset.maxWidth,Mt(d["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:f?Ja(w):"",imageSrc:(N==null?void 0:N.getAttribute("src"))||"",imageAlt:(N==null?void 0:N.getAttribute("alt"))||"",imageClassName:(N==null?void 0:N.className)||"g-aiImg",imageId:(N==null?void 0:N.id)||"",labels:S}});return{cssText:c,rootId:(l==null?void 0:l.id)||"",rootClassName:(l==null?void 0:l.className)||"ai2html",artboards:m}}async function Za(n){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(n);else{const t=document.createElement("textarea");t.value=n,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{t.remove()}}}const $a={copyToClipboard:Za};var ti=X('<section class="studio svelte-1tsqvkl"><aside class="left-sidebar svelte-1tsqvkl"><details class="mobile-tools svelte-1tsqvkl" open=""><summary class="svelte-1tsqvkl">Tools</summary> <div class="mobile-tools-body svelte-1tsqvkl"><!></div></details></aside> <!> <aside class="right-sidebar svelte-1tsqvkl"><!></aside></section>');function ni(n,t){var It;ut(t,!0);const{copyToClipboard:a}=$a,s=((It=vn[0])==null?void 0:It.shadow)||"";let r=o(t,"sampleMode",3,!1),l=o(t,"sampleHtml",3,""),c=o(t,"onLoadSample",3,()=>{}),m=W(void 0),g=W(void 0),v=W(""),d=W(""),_=W(""),w=W(""),A=W(""),R=W(""),N=W(1200),f=W(""),S=W("ai2html"),L=W(kt([])),I=W(""),x=W(kt([])),D=W(""),z=W(kt(s)),O=W(kt(je)),T=W(kt(Je)),M=W(!1),J=W(!1),U=W(void 0),q=W(!1),E=W(""),k=W(kt([]));const G=$(()=>e(L).find(i=>i.id===e(I))||null),V=$(()=>e(x).find(i=>i.id===e(D))||null),dt=$(()=>vn.find(i=>i.shadow===e(z))||null),K=$(()=>mt(e(z),e(T))),Y=$(()=>{var i;return((i=e(G))==null?void 0:i.imageSrc)||e(R)}),ot=$(()=>la(e(G),e(N))),Et=$(()=>sa.test(e(E))),ln=$(()=>{var i;return((i=e(V))==null?void 0:i.shadow)||e(K)||""}),bn=$(()=>e(Et)&&e(ln)?te(e(E),e(ln)):""),Ot=$(()=>e(k).map(i=>te(i.className,i.shadow)).join(`
`));Jn(()=>{typeof document>"u"||(e(U)||(u(U,document.createElement("style"),!0),e(U).setAttribute("data-ai2html-import","true"),document.head.append(e(U))),e(U).textContent=e(v))}),ae(()=>{u(q,typeof window<"u"&&"EyeDropper"in window,!0)});let Ft=W(!1);Jn(()=>{typeof window>"u"||!r()||e(Ft)||!l()||(u(Ft,!0),yt(l(),"sample-ai2html.html"))});async function yt(i,C=""){u(d,""),u(_,"");try{const F=Qa(i);u(L,F.artboards,!0),u(f,F.rootId,!0),u(S,F.rootClassName,!0),u(v,F.cssText,!0),u(w,C,!0),u(R,""),u(A,"");const et=Ha(e(g));xt(Ka(F.artboards,et)||F.artboards[0])}catch(F){u(d,F instanceof Error?F.message:"Could not read ai2html file.",!0)}}me(()=>{var i;typeof document<"u"&&((i=e(U))==null||i.remove()),nt.cleanupDragState()});function tt(i,C){u(x,e(x).map(F=>F.id===i?C(F):F),!0)}function xt(i){var C;i&&(u(_,""),u(I,i.id,!0),u(x,Wa(i.labels||[]),!0),u(D,((C=e(x)[0])==null?void 0:C.id)||"",!0))}async function Wt(i){if(!i)return;const C=await i.text();await yt(C,i.name)}function rn(i){const[C]=i.currentTarget.files||[];Wt(C)}function wn(i){i.preventDefault()}function An(i){i.preventDefault(),u(J,!0)}function Pn(i){i.currentTarget.contains(i.relatedTarget)||u(J,!1)}function Ht(i){!i||!i.type.startsWith("image/")||Ba(i).then(async C=>{u(R,C,!0),u(A,i.name,!0),u(w,""),u(L,[],!0),u(I,""),u(f,""),u(S,"ai2html"),u(v,""),u(x,[],!0),u(D,"");const F=await qa(C);F&&u(N,F,!0)}).catch(()=>{u(_,"Could not read image file.")})}function on(i){if(i){if(i.type.startsWith("image/")){Ht(i);return}Xa(i)&&Wt(i)}}function pn(i){i.preventDefault(),u(J,!1);const[C]=i.dataTransfer.files||[];on(C)}function Xt(i){const[C]=i.currentTarget.files||[];Ht(C)}function Sn(i){const C=i.target;C.naturalWidth&&u(N,C.naturalWidth,!0),u(_,"")}function dn(){var C;const i=((C=e(G))==null?void 0:C.imageSrc)||"Unknown file";u(_,`Could not load artboard image (${i}). Export/upload image assets and try again.`)}function Bt(i){const C=e(L).find(({id:F})=>F===i.currentTarget.value);xt(C)}function gt(i=""){if(!i||i==="none")return;const C=$n(i),F=vn.find(et=>$n(mt(et.shadow,e(T)))===C);F&&u(z,F.shadow,!0)}function Cn(i){if(!i||typeof document>"u")return;const C=document.getElementById(i);if(!C)return;const F=C.querySelector("p, span, div")||C,et=getComputedStyle(F),hn=ge(et.color);hn&&u(O,hn,!0);const Tt=et.textShadow;if(Tt&&Tt!=="none"){const mn=pa(Tt);mn&&u(T,mn,!0),gt(Tt)}}function bt(i){u(D,i,!0),Cn(i)}function qt(i){if(u(z,i,!0),!e(D)){u(x,e(x).map(C=>({...C,shadow:mt(i,e(T))})),!0);return}tt(e(D),C=>({...C,shadow:mt(i,e(T))}))}function Ut(){u(x,e(x).map(i=>({...i,shadow:e(K)})),!0)}function Gt(){e(D)&&tt(e(D),i=>({...i,shadow:""}))}function ft(){e(D)&&tt(e(D),i=>({...i,shadow:mt(i.shadow||e(z),e(T))}))}function wt(){e(D)&&tt(e(D),i=>({...i,textColor:e(O)}))}function At(){u(x,e(x).map(i=>({...i,textColor:e(O)})),!0)}function Vt(){u(x,e(x).map(i=>({...i,textColor:""})),!0)}function ht(){if(e(D)){wt();return}e(x).length&&At()}function zn(){if(e(D)){ft();return}u(x,e(x).map(i=>i.shadow?{...i,shadow:mt(i.shadow,e(T))}:i),!0)}async function cn(){e(K)&&await a(`text-shadow: ${e(K)}`)}function gn(i){u(E,da(i.currentTarget.value||""),!0)}function Yt(){if(!e(Et))return;const i=Ga({selectedLabel:e(V),activeLabelId:e(D),activeShadow:e(K)});i&&u(k,Va(e(k),e(E),i),!0)}function jt(){u(k,[],!0)}async function fn(){e(Ot)&&await a(e(Ot))}async function Pt(i){if(e(q))try{const F=await new window.EyeDropper().open();if(i==="shadow"){u(T,F.sRGBHex,!0),e(V)&&ft();return}u(O,F.sRGBHex,!0),e(V)&&wt()}catch{}}const nt=Fa({getStageRef:()=>e(m),selectLabel:bt,updateLabel:tt,clearActiveLabel:()=>{u(D,"")}}),_n=nt.startDrag,Jt=nt.handlePointerMove,Kt=nt.handlePointerUp,In=nt.handleStagePointerDown;function Tn(i){const C=[];if(i.styleMap)for(const[F,et]of Object.entries(i.styleMap))C.push(`${F}: ${et}`);return!e(M)&&i.shadow&&C.push(`--editor-shadow: ${i.shadow}`),!e(M)&&i.textColor&&C.push(`--editor-text-color: ${i.textColor}`),C.join("; ")}var St=ti();Q("pointermove",Nn,Jt),Q("pointerup",Nn,Kt),Q("pointercancel",Nn,Kt);var Ct=b(St),Qt=b(Ct),Zt=P(b(Qt),2),$t=b(Zt);Sa($t,{get artboards(){return e(L)},get stageWidth(){return e(ot)},get labelsCount(){return e(x).length},get selectedLabel(){return e(V)},get activeShadow(){return e(K)},get workspaceImage(){return e(Y)},get htmlFileName(){return e(w)},get imageFileName(){return e(A)},get onLoadSample(){return c()},get cssClassName(){return e(E)},get cssClassNameValid(){return e(Et)},get currentRulePreview(){return e(bn)},get cssSheetPreview(){return e(Ot)},get cssRules(){return e(k)},get canUseEyeDropper(){return e(q)},onAi2htmlDrop:pn,onAi2htmlInput:rn,onImageInput:Xt,onArtboardChange:Bt,onApplyShadowToAll:Ut,onApplyTextToSelected:wt,onApplyTextToAll:At,onClearTextColors:Vt,onTextColorLive:ht,onPickTextColor:()=>Pt("text"),onRecolorSelectedShadow:ft,onClearSelectedShadow:Gt,onCopyCurrentShadow:cn,onShadowColorLive:zn,onPickShadowColor:()=>Pt("shadow"),onCssClassNameInput:gn,onAddRuleToSheet:Yt,onCopyCssSheet:fn,onClearCssSheet:jt,get selectedArtboardId(){return e(I)},set selectedArtboardId(i){u(I,i,!0)},get previewOriginal(){return e(M)},set previewOriginal(i){u(M,i,!0)},get textColor(){return e(O)},set textColor(i){u(O,i,!0)},get shadowColor(){return e(T)},set shadowColor(i){u(T,i,!0)}}),y(Zt),y(Qt),y(Ct);var zt=P(Ct,2);Oa(zt,{get parseError(){return e(d)},get workspaceImage(){return e(Y)},get isDragOver(){return e(J)},get imageLoadError(){return e(_)},get selectedArtboard(){return e(G)},get rootId(){return e(f)},get rootClassName(){return e(S)},get labels(){return e(x)},get activeLabelId(){return e(D)},get stageWidth(){return e(ot)},buildLabelStyle:Tn,onDragOver:wn,onWorkspaceDragOver:An,onWorkspaceDragLeave:Pn,onDrop:pn,get onStagePointerDown(){return In},onSelectLabel:bt,get onStartDrag(){return _n},onImageLoad:Sn,onImageError:dn,get workspaceColumnRef(){return e(g)},set workspaceColumnRef(i){u(g,i,!0)},get stageRef(){return e(m)},set stageRef(i){u(m,i,!0)}});var _t=P(zt,2),tn=b(_t);ha(tn,{get selectedShadowRaw(){return e(z)},get shadowColor(){return e(T)},get textColor(){return e(O)},get selectedShadowMeta(){return e(dt)},onChooseShadow:qt}),y(_t),y(St),H(n,St),vt()}const ei=`<div id="g-libano-box" class="ai2html media-wide">
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
`;var ai=X('<main id="main-content" class="page is-studio svelte-1uha8ag"><header class="topbar svelte-1uha8ag"><div class="brand svelte-1uha8ag"><div class="brand-mark svelte-1uha8ag">S</div> <div class="brand-copy svelte-1uha8ag"><p class="kicker svelte-1uha8ag">Cheesy Shadow Picker</p> <p class="version svelte-1uha8ag">2.0</p></div></div> <div class="top-divider svelte-1uha8ag" aria-hidden="true"></div></header> <section class="studio-shell svelte-1uha8ag"><!></section></main>');function di(n,t){ut(t,!0);let a=W(!1);ae(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&u(a,!0)});function s(){u(a,!0)}var r=ai(),l=P(b(r),2),c=b(l);ni(c,{get sampleMode(){return e(a)},get sampleHtml(){return ei},onLoadSample:s}),y(l),y(r),H(n,r),vt()}export{di as component};
