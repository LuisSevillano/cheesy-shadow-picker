import{b as Ee,a as U,f as G,d as Pn}from"../chunks/DgM4MugZ.js";import{o as dn,a as Sn}from"../chunks/pgCtfXo6.js";import{C as Oe,e as Cn,h as Z,i as se,J as Et,d as Ve,g as n,r as zn,M as _n,f as Ze,j as Fe,k as Wt,G as gn,N as In,O as $e,P as Ot,Q as gt,R as Ye,S as Tn,T as kn,U as Dn,V as Ln,W as Ke,X as Mn,Y as Nn,o as Rn,Z as tn,_ as En,a0 as On,a1 as cn,a2 as fn,a3 as We,a4 as Fn,a5 as Wn,a6 as Hn,a7 as Xn,I as hn,a8 as un,a9 as Bn,aa as qn,A as K,ab as Un,ac as Gn,ad as Vn,ae as Yn,af as jn,ag as Jn,ah as Kn,ai as Qn,t as Zn,aj as $n,ak as ta,p as zt,x as _t,w as P,y as A,z as x,v as ea,a as H,al as en,b as f,B as it,am as Rt,q as nn,an as He}from"../chunks/DXxeDSZY.js";import{d as _e,p as o,i as pt,s as dt,a as X,e as J,b as je,r as an}from"../chunks/D9JfOmeJ.js";import{s as ot,r as Se,e as na,m as aa,f as ia}from"../chunks/CHLWFSJT.js";import"../chunks/BPaBBqKw.js";function mn(e,t){return t}function sa(e,t,a){for(var s=[],r=t.length,l,g=t.length,m=0;m<r;m++){let S=t[m];fn(S,()=>{if(l){if(l.pending.delete(S),l.done.add(S),l.pending.size===0){var _=e.outrogroups;Je(e,Ke(l.done)),_.delete(l),_.size===0&&(e.outrogroups=null)}}else g-=1},!1)}if(g===0){var c=s.length===0&&a!==null;if(c){var v=a,u=v.parentNode;Wn(u),u.append(v),e.items.clear()}Je(e,t,!c)}else l={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function Je(e,t,a=!0){var s;if(e.pending.size>0){s=new Set;for(const g of e.pending.values())for(const m of g)s.add(e.items.get(m).e)}for(var r=0;r<t.length;r++){var l=t[r];if(s!=null&&s.has(l)){l.f|=gt;const g=document.createDocumentFragment();Hn(l,g)}else Xn(t[r],a)}}var sn;function ze(e,t,a,s,r,l=null){var g=e,m=new Map,c=(t&un)!==0;if(c){var v=e;g=Z?se(Et(v)):v.appendChild(Oe())}Z&&Ve();var u=null,S=Dn(()=>{var E=a();return Ln(E)?E:E==null?[]:Ke(E)}),_,k=new Map,M=!0;function I(E){(B.effect.f&On)===0&&(B.pending.delete(E),B.fallback=u,la(B,_,g,t,s),u!==null&&(_.length===0?(u.f&gt)===0?cn(u):(u.f^=gt,ie(u,null,g)):fn(u,()=>{u=null})))}function d(E){B.pending.delete(E)}var T=Cn(()=>{_=n(S);var E=_.length;let N=!1;if(Z){var b=zn(g)===_n;b!==(E===0)&&(g=Ze(),se(g),Fe(!1),N=!0)}for(var C=new Set,O=Ot,z=kn(),y=0;y<E;y+=1){Z&&Wt.nodeType===gn&&Wt.data===In&&(g=Wt,N=!0,Fe(!1));var Y=_[y],L=s(Y,y),D=M?null:m.get(L);D?(D.v&&$e(D.v,Y),D.i&&$e(D.i,y),z&&O.unskip_effect(D.e)):(D=ra(m,M?g:sn??(sn=Oe()),Y,L,y,r,t,a),M||(D.e.f|=gt),m.set(L,D)),C.add(L)}if(E===0&&l&&!u&&(M?u=Ye(()=>l(g)):(u=Ye(()=>l(sn??(sn=Oe()))),u.f|=gt)),E>C.size&&Tn(),Z&&E>0&&se(Ze()),!M)if(k.set(O,C),z){for(const[$,tt]of m)C.has($)||O.skip_effect(tt.e);O.oncommit(I),O.ondiscard(d)}else I(O);N&&Fe(!0),n(S)}),B={effect:T,items:m,pending:k,outrogroups:null,fallback:u};M=!1,Z&&(g=Wt)}function ae(e){for(;e!==null&&(e.f&Fn)===0;)e=e.next;return e}function la(e,t,a,s,r){var Y,L,D,$,tt,F,R,j,et;var l=(s&qn)!==0,g=t.length,m=e.items,c=ae(e.effect.first),v,u=null,S,_=[],k=[],M,I,d,T;if(l)for(T=0;T<g;T+=1)M=t[T],I=r(M,T),d=m.get(I).e,(d.f&gt)===0&&((L=(Y=d.nodes)==null?void 0:Y.a)==null||L.measure(),(S??(S=new Set)).add(d));for(T=0;T<g;T+=1){if(M=t[T],I=r(M,T),d=m.get(I).e,e.outrogroups!==null)for(const V of e.outrogroups)V.pending.delete(d),V.done.delete(d);if((d.f&We)!==0&&(cn(d),l&&(($=(D=d.nodes)==null?void 0:D.a)==null||$.unfix(),(S??(S=new Set)).delete(d))),(d.f&gt)!==0)if(d.f^=gt,d===c)ie(d,null,a);else{var B=u?u.next:c;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),yt(e,u,d),yt(e,d,B),ie(d,B,a),u=d,_=[],k=[],c=ae(u.next);continue}if(d!==c){if(v!==void 0&&v.has(d)){if(_.length<k.length){var E=k[0],N;u=E.prev;var b=_[0],C=_[_.length-1];for(N=0;N<_.length;N+=1)ie(_[N],E,a);for(N=0;N<k.length;N+=1)v.delete(k[N]);yt(e,b.prev,C.next),yt(e,u,b),yt(e,C,E),c=E,u=C,T-=1,_=[],k=[]}else v.delete(d),ie(d,c,a),yt(e,d.prev,d.next),yt(e,d,u===null?e.effect.first:u.next),yt(e,u,d),u=d;continue}for(_=[],k=[];c!==null&&c!==d;)(v??(v=new Set)).add(c),k.push(c),c=ae(c.next);if(c===null)continue}(d.f&gt)===0&&_.push(d),u=d,c=ae(d.next)}if(e.outrogroups!==null){for(const V of e.outrogroups)V.pending.size===0&&(Je(e,Ke(V.done)),(tt=e.outrogroups)==null||tt.delete(V));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||v!==void 0){var O=[];if(v!==void 0)for(d of v)(d.f&We)===0&&O.push(d);for(;c!==null;)(c.f&We)===0&&c!==e.fallback&&O.push(c),c=ae(c.next);var z=O.length;if(z>0){var y=(s&un)!==0&&g===0?a:null;if(l){for(T=0;T<z;T+=1)(R=(F=O[T].nodes)==null?void 0:F.a)==null||R.measure();for(T=0;T<z;T+=1)(et=(j=O[T].nodes)==null?void 0:j.a)==null||et.fix()}sa(e,O,y)}}l&&Bn(()=>{var V,nt;if(S!==void 0)for(d of S)(nt=(V=d.nodes)==null?void 0:V.a)==null||nt.apply()})}function ra(e,t,a,s,r,l,g,m){var c=(g&Mn)!==0?(g&Nn)===0?Rn(a,!1,!1):tn(a):null,v=(g&En)!==0?tn(r):null;return{v:c,i:v,e:Ye(()=>(l(t,c??a,v??r,m),()=>{e.delete(s)}))}}function ie(e,t,a){if(e.nodes)for(var s=e.nodes.start,r=e.nodes.end,l=t&&(t.f&gt)===0?t.nodes.start:a;s!==null;){var g=hn(s);if(l.before(s),s===r)return;s=g}}function yt(e,t,a){t===null?e.effect.first=a:t.next=a,a===null?e.effect.last=t:a.prev=t}function oa(e,t,a=!1,s=!1,r=!1,l=!1){var g=e,m="";if(a){var c=e;Z&&(g=se(Et(c)))}K(()=>{var v=Un;if(m===(m=t()??"")){Z&&Ve();return}if(a&&!Z){v.nodes=null,c.innerHTML=m,m!==""&&Ee(Et(c),c.lastChild);return}if(v.nodes!==null&&(Gn(v.nodes.start,v.nodes.end),v.nodes=null),m!==""){if(Z){Wt.data;for(var u=Ve(),S=u;u!==null&&(u.nodeType!==gn||u.data!=="");)S=u,u=hn(u);if(u===null)throw Vn(),Yn;Ee(Wt,S),g=se(u);return}var _=s?Jn:r?Kn:void 0,k=jn(s?"svg":r?"math":"template",_);k.innerHTML=m;var M=s||r?k:k.content;if(Ee(Et(M),M.lastChild),s||r)for(;Et(M);)g.before(Et(M));else g.before(M)}})}function vn(e){var t,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=vn(e[t]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function pa(){for(var e,t,a=0,s="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=vn(e))&&(s&&(s+=" "),s+=t);return s}function da(e){return typeof e=="object"?pa(e):e??""}function ga(e,t,a){var s=e==null?"":""+e;return t&&(s=s?s+" "+t:t),s===""?null:s}function ca(e,t){return e==null?null:String(e)}function ut(e,t,a,s,r,l){var g=e.__className;if(Z||g!==a||g===void 0){var m=ga(a,s);(!Z||m!==e.getAttribute("class"))&&(m==null?e.removeAttribute("class"):e.className=m),e.__className=a}return l}function Ct(e,t,a,s){var r=e.__style;if(Z||r!==t){var l=ca(t);(!Z||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=t}return s}function Xe(e,t,a=t){var s=new WeakSet;Qn(e,"input",async r=>{var l=r?e.defaultValue:e.value;if(l=Be(e)?qe(l):l,a(l),Ot!==null&&s.add(Ot),await Zn(),l!==(l=t())){var g=e.selectionStart,m=e.selectionEnd,c=e.value.length;if(e.value=l??"",m!==null){var v=e.value.length;g===m&&m===c&&v>c?(e.selectionStart=v,e.selectionEnd=v):(e.selectionStart=g,e.selectionEnd=Math.min(m,v))}}}),(Z&&e.defaultValue!==e.value||$n(t)==null&&e.value)&&(a(Be(e)?qe(e.value):e.value),Ot!==null&&s.add(Ot)),ta(()=>{var r=t();if(e===document.activeElement){var l=Ot;if(s.has(l))return}Be(e)&&r===qe(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function Be(e){var t=e.type;return t==="number"||t==="range"}function qe(e){return e===""?null:+e}const fa=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],Ce=[...new Map(fa.map(e=>[e.shadow,e])).values()],Qe=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,ha=/^[a-z][a-z0-9]*$/;function ua(e,t=1200){var s;if(!e)return t;if(Number.isFinite(e.maxWidth)&&e.maxWidth>0)return e.maxWidth;if(Number.isFinite(e.minWidth)&&e.minWidth>0)return e.minWidth;const a=Number.parseFloat(((s=e.styleMap)==null?void 0:s.width)||"");return Number.isFinite(a)&&a>0?a:t}function ma(e="#000000"){let t=e.replace("#","");t.length===3&&(t=t.split("").map(s=>`${s}${s}`).join(""));const a=Number.parseInt(t,16);return Number.isFinite(a)?[a>>16&255,a>>8&255,a&255]:[0,0,0]}function ht(e,t){if(!e)return"";const a=e.match(Qe);if(!(a!=null&&a.length))return e;const[s,r,l]=ma(t),g=a.map(c=>{if(c.startsWith("#"))return t;const v=c.match(/\d+(?:\.\d+)?%?/g)||[];if(!v.length)return`rgb(${s} ${r} ${l})`;const u=v[3];return u?`rgb(${s} ${r} ${l} / ${u})`:`rgb(${s} ${r} ${l})`});let m=e;return a.forEach((c,v)=>{m=m.replace(c,g[v])}),m}function va(e=""){if(!e)return"";let t=e.trim().replace("#","");return(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(a=>`${a}${a}`).join("")),`#${t.slice(0,6).toLowerCase()}`}function yn(e=""){if(!e)return"";if(e.startsWith("#"))return va(e);const t=e.match(/[\d.]+%?/g);if(!t||t.length<3)return"";const[a,s,r]=t,l=m=>m.endsWith("%")?Math.round(Number.parseFloat(m)/100*255):Math.round(Number.parseFloat(m)),g=m=>Math.max(0,Math.min(255,m)).toString(16).padStart(2,"0");return`#${g(l(a))}${g(l(s))}${g(l(r))}`}function Ue(e=""){var a;const t=(a=e.match(Qe))==null?void 0:a[0];return t?yn(t):""}function ln(e=""){return e.toLowerCase().replace(Qe,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function ya(e=""){return e.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function rn(e="",t=""){return!e||!t?"":`.${e} { text-shadow: ${t}; }`}var xa=G('<span class="source-wrap svelte-1o3sgti"><a class="shadow-source svelte-1o3sgti" target="_blank" rel="noreferrer">View reference</a></span>'),ba=G('<button type="button"><span class="shadow-name svelte-1o3sgti"> </span> <span class="shadow-preview svelte-1o3sgti">Preview</span> <!></button>'),wa=G('<aside class="library-column svelte-1o3sgti"><div class="library-header-panel svelte-1o3sgti"><h3 class="svelte-1o3sgti">Shadow Library</h3> <p class="svelte-1o3sgti">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1o3sgti"></div></aside>');function Aa(e,t){zt(t,!0);let a=o(t,"selectedShadowRaw",3,""),s=o(t,"shadowColor",3,"#000000"),r=o(t,"textColor",3,"#ffffff");o(t,"selectedShadowMeta",3,null);let l=o(t,"onChooseShadow",3,()=>{});var g=wa(),m=P(A(g),2);ze(m,21,()=>Ce,mn,(c,v)=>{var u=ba(),S=A(u),_=A(S,!0);x(S);var k=P(S,2),M=P(k,2);{var I=d=>{var T=xa(),B=A(T);x(T),K(()=>ot(B,"href",n(v).source)),U(d,T)};pt(M,d=>{a()===n(v).shadow&&n(v).source&&d(I)})}x(u),K(d=>{ut(u,1,`shadow-choice ${a()===n(v).shadow?"is-selected":""}`,"svelte-1o3sgti"),dt(_,n(v).id),Ct(k,d)},[()=>`text-shadow:${ht(n(v).shadow,s())};color:${r()};`]),X("click",u,()=>l()(n(v).shadow)),U(c,u)}),x(m),x(g),U(e,g),_t()}_e(["click"]);var Pa=Pn('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function on(e){var t=Pa();U(e,t)}var Sa=G('<p class="active-file svelte-y6dmz4"> </p>'),Ca=G('<button type="button"> </button>'),za=G('<div class="artboard-switcher svelte-y6dmz4"><span class="artboard-label svelte-y6dmz4">Artboard</span> <div class="artboard-buttons svelte-y6dmz4"></div></div>'),_a=G('<p class="selection-note svelte-y6dmz4">Selected: <strong> </strong></p>'),Ia=G('<pre class="css-preview svelte-y6dmz4"> </pre>'),Ta=G('<pre class="css-rules-output svelte-y6dmz4"> </pre>'),ka=G('<p class="empty-rules svelte-y6dmz4">No rules added yet.</p>'),Da=G(`<section class="panel toolbar svelte-y6dmz4"><div class="toolbar-row import-row svelte-y6dmz4" role="region" aria-label="ai2html and image import zone"><p class="import-hint svelte-y6dmz4">Drag .html or image to the main workspace</p> <div class="import-actions svelte-y6dmz4"><label class="tool-button svelte-y6dmz4" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-y6dmz4"/> <label class="tool-button svelte-y6dmz4" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-y6dmz4"/> <button type="button" class="tool-button sample-button svelte-y6dmz4">Load sample</button></div> <!></div> <div class="toolbar-row custom-text-row svelte-y6dmz4"><div class="custom-text-input-group svelte-y6dmz4"><label for="custom-text-input" class="custom-text-label svelte-y6dmz4">Add Text</label> <input id="custom-text-input" type="text" placeholder="Your text here" class="custom-text-field svelte-y6dmz4"/> <button type="button" class="tool-button add-text-btn svelte-y6dmz4">Add</button></div></div> <div class="toolbar-row main-controls-row svelte-y6dmz4"><!> <p class="metric svelte-y6dmz4"> </p> <div class="quick-actions svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-y6dmz4"><div class="toolbar-row appearance-row svelte-y6dmz4"><div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Text Color</h4> <div class="control-row svelte-y6dmz4"><label for="text-color" class="svelte-y6dmz4">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply to Selected</button> <button type="button" class="svelte-y6dmz4">Apply to All</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Shadow Color</h4> <div class="control-row svelte-y6dmz4"><label for="shadow-color" class="svelte-y6dmz4">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Recolor Selected</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset Shadow</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="svelte-y6dmz4">Invert Shadow</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-y6dmz4"><details class="workflow-details svelte-y6dmz4"><summary class="svelte-y6dmz4">Illustrator Workflow</summary> <div class="workflow-content svelte-y6dmz4"><div class="workflow-intro svelte-y6dmz4"><p class="svelte-y6dmz4">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-y6dmz4">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Stylesheet</h4> <div class="control-row class-name-row svelte-y6dmz4"><label for="css-class-name" class="svelte-y6dmz4">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-y6dmz4"/></div> <p class="class-name-help svelte-y6dmz4">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Add to Stylesheet</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="reset-button svelte-y6dmz4">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-y6dmz4" aria-live="polite"><!></div></div></div></details></section>`,1);function La(e,t){zt(t,!0);let a=o(t,"artboards",19,()=>[]),s=o(t,"selectedArtboardId",15,""),r=o(t,"stageWidth",3,0),l=o(t,"labelsCount",3,0),g=o(t,"selectedLabel",3,null),m=o(t,"activeShadow",3,""),c=o(t,"workspaceImage",3,""),v=o(t,"htmlFileName",3,""),u=o(t,"imageFileName",3,""),S=o(t,"onLoadSample",3,()=>{}),_=o(t,"previewOriginal",15,!1),k=o(t,"textColor",15,"#000000"),M=o(t,"shadowColor",15,"#000000"),I=o(t,"cssClassName",3,""),d=o(t,"cssClassNameValid",3,!1),T=o(t,"currentRulePreview",3,""),B=o(t,"cssSheetPreview",3,""),E=o(t,"cssRules",19,()=>[]),N=o(t,"canUseEyeDropper",3,!1),b=o(t,"onAi2htmlDrop",3,()=>{}),C=o(t,"onAi2htmlInput",3,()=>{}),O=o(t,"onImageInput",3,()=>{}),z=o(t,"onArtboardChange",3,()=>{}),y=o(t,"onApplyShadowToAll",3,()=>{}),Y=o(t,"onApplyTextToSelected",3,()=>{}),L=o(t,"onApplyTextToAll",3,()=>{}),D=o(t,"onClearTextColors",3,()=>{}),$=o(t,"onTextColorLive",3,()=>{}),tt=o(t,"onPickTextColor",3,()=>{}),F=o(t,"onRecolorSelectedShadow",3,()=>{}),R=o(t,"onClearSelectedShadow",3,()=>{}),j=o(t,"onCopyCurrentShadow",3,()=>{}),et=o(t,"onInvertShadow",3,()=>{}),V=o(t,"onShadowColorLive",3,()=>{}),nt=o(t,"onPickShadowColor",3,()=>{}),mt=o(t,"onCssClassNameInput",3,()=>{}),xt=o(t,"onAddRuleToSheet",3,()=>{}),le=o(t,"onCopyCssSheet",3,()=>{}),Ie=o(t,"onClearCssSheet",3,()=>{}),It=o(t,"onAddCustomText",3,()=>{}),st=H("");function re(h){h.preventDefault()}var ct=Da(),Tt=ea(ct),vt=A(Tt),Ht=P(A(vt),2),oe=P(A(Ht),2),pe=P(oe,4),Te=P(pe,2);x(Ht);var de=P(Ht,2);{var ke=h=>{var p=Sa(),rt=A(p,!0);x(p),K(()=>dt(rt,v()||u())),U(h,p)};pt(de,h=>{(v()||u())&&h(ke)})}x(vt);var kt=P(vt,2),ge=A(kt),Dt=P(A(ge),2);Se(Dt);var ce=P(Dt,2);x(ge),x(kt);var fe=P(kt,2),he=A(fe);{var Xt=h=>{var p=za(),rt=P(A(p),2);ze(rt,21,a,mn,(Re,Pe)=>{var ne=Ca(),An=A(ne,!0);x(ne),K(()=>{ut(ne,1,`artboard-btn ${s()===n(Pe).id?"is-active":""}`,"svelte-y6dmz4"),dt(An,n(Pe).name)}),X("click",ne,()=>{s(n(Pe).id),z()({currentTarget:{value:n(Pe).id}})}),U(Re,ne)}),x(rt),x(p),U(h,p)};pt(he,h=>{a().length>1&&h(Xt)})}var Bt=P(he,2),ue=A(Bt);x(Bt);var me=P(Bt,2),qt=A(me),bt=P(qt,2),Ut=A(bt,!0);x(bt),x(me),x(fe),x(Tt);var wt=P(Tt,2),Lt=A(wt),Gt=A(Lt),Vt=P(A(Gt),2),Yt=P(A(Vt),2);Se(Yt),x(Vt);var ve=P(Vt,2),jt=A(ve),Jt=P(jt,2),At=P(Jt,2),De=A(At);on(De),en(),x(At);var ye=P(At,2);x(ve),x(Gt);var Kt=P(Gt,2),lt=P(A(Kt),2),Qt=P(A(lt),2);Se(Qt),x(lt);var xe=P(lt,2),Mt=A(xe),Pt=P(Mt,2),Le=A(Pt);on(Le),en(),x(Pt);var St=P(Pt,2),Nt=P(St,2),Zt=P(Nt,2);x(xe),x(Kt),x(Lt);var be=P(Lt,2);{var Me=h=>{var p=_a(),rt=P(A(p)),Re=A(rt,!0);x(rt),x(p),K(()=>dt(Re,g().previewText)),U(h,p)};pt(be,h=>{g()&&h(Me)})}x(wt);var $t=P(wt,2),te=A($t),we=P(A(te),2),ee=P(A(we),2),i=P(A(ee),2),w=P(A(i),2);Se(w),x(i);var W=P(i,4),q=A(W),Q=P(q,2),at=P(Q,2);x(W);var ft=P(W,2);{var Ne=h=>{var p=Ia(),rt=A(p,!0);x(p),K(()=>dt(rt,T())),U(h,p)};pt(ft,h=>{T()&&h(Ne)})}var Ae=P(ft,2),xn=A(Ae);{var bn=h=>{var p=Ta(),rt=A(p,!0);x(p),K(()=>dt(rt,B())),U(h,p)},wn=h=>{var p=ka();U(h,p)};pt(xn,h=>{B()?h(bn):h(wn,-1)})}x(Ae),x(ee),x(we),x(te),x($t),K(h=>{ce.disabled=h,dt(ue,`Native Width: ${r()??""}px`),qt.disabled=!l(),ut(bt,1,`preview-toggle ${_()?"is-active":""}`,"svelte-y6dmz4"),bt.disabled=!l(),dt(Ut,_()?"Show Edited":"Show Original"),jt.disabled=!g(),Jt.disabled=!l(),At.disabled=!l(),ye.disabled=!N()||!c(),Mt.disabled=!g(),Pt.disabled=!g(),St.disabled=!m(),Zt.disabled=!N()||!c(),na(w,I()),q.disabled=!d(),Q.disabled=!B(),at.disabled=!E().length},[()=>!n(st).trim()]),J("dragover",vt,re),J("drop",vt,function(...h){var p;(p=b())==null||p.apply(this,h)}),X("change",oe,function(...h){var p;(p=C())==null||p.apply(this,h)}),X("change",pe,function(...h){var p;(p=O())==null||p.apply(this,h)}),X("click",Te,function(...h){var p;(p=S())==null||p.apply(this,h)}),X("keydown",Dt,h=>{h.key==="Enter"&&n(st).trim()&&(It()(n(st).trim()),f(st,""))}),Xe(Dt,()=>n(st),h=>f(st,h)),X("click",ce,()=>{n(st).trim()&&(It()(n(st).trim()),f(st,""))}),X("click",qt,function(...h){var p;(p=y())==null||p.apply(this,h)}),X("click",bt,()=>_(!_())),X("input",Yt,function(...h){var p;(p=$())==null||p.apply(this,h)}),Xe(Yt,k),X("click",jt,function(...h){var p;(p=Y())==null||p.apply(this,h)}),X("click",Jt,function(...h){var p;(p=L())==null||p.apply(this,h)}),X("click",At,function(...h){var p;(p=D())==null||p.apply(this,h)}),X("click",ye,function(...h){var p;(p=tt())==null||p.apply(this,h)}),X("input",Qt,function(...h){var p;(p=V())==null||p.apply(this,h)}),Xe(Qt,M),X("click",Mt,function(...h){var p;(p=F())==null||p.apply(this,h)}),X("click",Pt,function(...h){var p;(p=R())==null||p.apply(this,h)}),X("click",St,function(...h){var p;(p=j())==null||p.apply(this,h)}),X("click",Nt,function(...h){var p;(p=et())==null||p.apply(this,h)}),X("click",Zt,function(...h){var p;(p=nt())==null||p.apply(this,h)}),X("input",w,function(...h){var p;(p=mt())==null||p.apply(this,h)}),X("click",q,function(...h){var p;(p=xt())==null||p.apply(this,h)}),X("click",Q,function(...h){var p;(p=le())==null||p.apply(this,h)}),X("click",at,function(...h){var p;(p=Ie())==null||p.apply(this,h)}),U(e,ct),_t()}_e(["change","click","keydown","input"]);var Ma=G('<button type="button" draggable="false"></button>');function pn(e,t){zt(t,!0);let a=o(t,"isActive",3,!1),s=o(t,"onSelect",3,()=>{}),r=o(t,"onStartDrag",3,()=>{});var l=Ma();oa(l,()=>t.label.html,!0),x(l),K(g=>{ot(l,"id",t.label.id),ut(l,1,`draggable-label ${t.label.className||""} ${a()?"is-active":""} ${t.label.textColor?"has-custom-text":""} ${t.label.shadow?"has-custom-shadow":""}`,"svelte-13v9flg"),Ct(l,g),ot(l,"aria-label",`Text ${t.label.previewText}`)},[()=>t.buildLabelStyle(t.label)]),J("focus",l,()=>s()(t.label.id)),X("pointerdown",l,g=>{g.preventDefault(),r()(g,t.label)}),J("dragstart",l,g=>g.preventDefault()),U(e,l),_t()}_e(["pointerdown"]);var Na=G("<div></div>"),Ra=G("<div></div>"),Ea=G('<div role="presentation"><!> <img loading="eager" fetchpriority="high"/> <!></div>'),Oa=G('<div class="image-stage svelte-lohhan" role="presentation"><img alt="Editor background" loading="eager" fetchpriority="high" class="svelte-lohhan"/> <!></div>'),Fa=G('<div class="stage-host svelte-lohhan"><div><!></div></div>');function Wa(e,t){zt(t,!0);let a=o(t,"rootId",3,""),s=o(t,"rootClassName",3,"ai2html"),r=o(t,"imageNaturalWidth",3,1200),l=o(t,"imageNaturalHeight",3,800),g=o(t,"labels",19,()=>[]),m=o(t,"activeLabelId",3,""),c=o(t,"onSelectLabel",3,()=>{}),v=o(t,"onStartDrag",3,()=>{}),u=o(t,"onStagePointerDown",3,()=>{}),S=o(t,"onImageLoad",3,()=>{}),_=o(t,"onImageError",3,()=>{}),k=o(t,"stageRef",15);const M=it(()=>r()&&l()?r()/l():1.6);var I=Fa(),d=A(I),T=A(d);{var B=N=>{var b=Ea(),C=A(b);{var O=L=>{var D=Na();K(()=>Ct(D,t.selectedArtboard.paddingStyle)),U(L,D)},z=L=>{var D=Ra();K(()=>Ct(D,`padding: 0 0 ${100/(t.selectedArtboard.aspectRatio||1.6)}% 0;`)),U(L,D)};pt(C,L=>{t.selectedArtboard.paddingStyle?L(O):t.imageLoadError&&L(z,1)})}var y=P(C,2),Y=P(y,2);ze(Y,17,g,L=>L.id,(L,D)=>{{let $=it(()=>m()===n(D).id);pn(L,{get label(){return n(D)},get isActive(){return n($)},get buildLabelStyle(){return t.buildLabelStyle},get onSelect(){return c()},get onStartDrag(){return v()}})}}),x(b),je(b,L=>k(L),()=>k()),K(()=>{ot(b,"id",t.selectedArtboard.id),ut(b,1,`${t.selectedArtboard.className||"g-artboard"} editor-artboard`,"svelte-lohhan"),Ct(b,t.selectedArtboard.style||""),ot(y,"id",t.selectedArtboard.imageId),ut(y,1,da(t.selectedArtboard.imageClassName||"g-aiImg"),"svelte-lohhan"),ot(y,"src",t.workspaceImage),ot(y,"alt",t.selectedArtboard.imageAlt||"Mapa de fondo"),ot(y,"width",t.stageWidth)}),X("pointerdown",b,function(...L){var D;(D=u())==null||D.apply(this,L)}),J("load",y,function(...L){var D;(D=S())==null||D.apply(this,L)}),J("error",y,function(...L){var D;(D=_())==null||D.apply(this,L)}),an(y),U(N,b)},E=N=>{var b=Oa(),C=A(b),O=P(C,2);ze(O,17,g,z=>z.id,(z,y)=>{{let Y=it(()=>m()===n(y).id);pn(z,{get label(){return n(y)},get isActive(){return n(Y)},get buildLabelStyle(){return t.buildLabelStyle},get onSelect(){return c()},get onStartDrag(){return v()}})}}),x(b),je(b,z=>k(z),()=>k()),K(()=>{Ct(b,`padding: 0 0 ${100/n(M)}% 0;`),ot(C,"src",t.workspaceImage),ot(C,"width",t.stageWidth)}),X("pointerdown",b,function(...z){var y;(y=u())==null||y.apply(this,z)}),J("load",C,function(...z){var y;(y=S())==null||y.apply(this,z)}),J("error",C,function(...z){var y;(y=_())==null||y.apply(this,z)}),an(C),U(N,b)};pt(T,N=>{t.selectedArtboard?N(B):N(E,-1)})}x(d),x(I),K(()=>{Ct(I,`max-width:${t.stageWidth}px;`),ot(d,"id",a()||"ai2html-root"),ut(d,1,`${s()||"ai2html"} editor-root`,"svelte-lohhan")}),U(e,I),_t()}_e(["pointerdown"]);var Ha=G('<p class="error svelte-1k8ke2i"> </p>'),Xa=G('<p class="image-warning svelte-1k8ke2i" role="alert"> </p>'),Ba=G('<div class="workspace-scroll svelte-1k8ke2i"><!> <!></div>'),qa=G('<div class="workspace-empty svelte-1k8ke2i" role="region" aria-label="Drop zone for ai2html or image files"><svg class="empty-icon svelte-1k8ke2i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> <p class="svelte-1k8ke2i">Drag & drop your ai2html or image file here</p> <p class="empty-hint svelte-1k8ke2i">or use the buttons in the toolbar</p></div>'),Ua=G('<div role="region" aria-label="Main workspace drop zone"><!> <div role="region" aria-label="Workspace drop zone"><!></div></div>');function Ga(e,t){zt(t,!0);let a=o(t,"parseError",3,""),s=o(t,"workspaceImage",3,""),r=o(t,"isDragOver",3,!1),l=o(t,"imageLoadError",3,""),g=o(t,"rootId",3,""),m=o(t,"rootClassName",3,"ai2html"),c=o(t,"labels",19,()=>[]),v=o(t,"activeLabelId",3,""),u=o(t,"stageWidth",3,1200),S=o(t,"imageNaturalWidth",3,1200),_=o(t,"imageNaturalHeight",3,800),k=o(t,"onDragOver",3,()=>{}),M=o(t,"onWorkspaceDragOver",3,()=>{}),I=o(t,"onWorkspaceDragLeave",3,()=>{}),d=o(t,"onDrop",3,()=>{}),T=o(t,"onStagePointerDown",3,()=>{}),B=o(t,"onSelectLabel",3,()=>{}),E=o(t,"onStartDrag",3,()=>{}),N=o(t,"onImageLoad",3,()=>{}),b=o(t,"onImageError",3,()=>{}),C=o(t,"workspaceColumnRef",15),O=o(t,"stageRef",15);var z=Ua(),y=A(z);{var Y=F=>{var R=Ha(),j=A(R,!0);x(R),K(()=>dt(j,a())),U(F,R)};pt(y,F=>{a()&&F(Y)})}var L=P(y,2),D=A(L);{var $=F=>{var R=Ba(),j=A(R);{var et=nt=>{var mt=Xa(),xt=A(mt,!0);x(mt),K(()=>dt(xt,l())),U(nt,mt)};pt(j,nt=>{l()&&nt(et)})}var V=P(j,2);Wa(V,{get rootId(){return g()},get rootClassName(){return m()},get selectedArtboard(){return t.selectedArtboard},get workspaceImage(){return s()},get stageWidth(){return u()},get imageNaturalWidth(){return S()},get imageNaturalHeight(){return _()},get imageLoadError(){return l()},get labels(){return c()},get activeLabelId(){return v()},get buildLabelStyle(){return t.buildLabelStyle},get onSelectLabel(){return B()},get onStartDrag(){return E()},get onStagePointerDown(){return T()},get onImageLoad(){return N()},get onImageError(){return b()},get stageRef(){return O()},set stageRef(nt){O(nt)}}),x(R),U(F,R)},tt=F=>{var R=qa();J("dragover",R,function(...j){var et;(et=k())==null||et.apply(this,j)}),J("drop",R,function(...j){var et;(et=d())==null||et.apply(this,j)}),U(F,R)};pt(D,F=>{s()?F($):F(tt,-1)})}x(L),x(z),je(z,F=>C(F),()=>C()),K(()=>{ut(z,1,`workspace-column ${r()?"is-dragover":""}`,"svelte-1k8ke2i"),ut(L,1,`workspace-shell ${r()?"is-dragover":""}`,"svelte-1k8ke2i")}),J("dragover",z,function(...F){var R;(R=M())==null||R.apply(this,F)}),J("dragleave",z,function(...F){var R;(R=I())==null||R.apply(this,F)}),J("drop",z,function(...F){var R;(R=d())==null||R.apply(this,F)}),J("dragover",L,function(...F){var R;(R=M())==null||R.apply(this,F)}),J("dragleave",L,function(...F){var R;(R=I())==null||R.apply(this,F)}),J("drop",L,function(...F){var R;(R=d())==null||R.apply(this,F)}),U(e,z),_t()}function Va({getStageRef:e,selectLabel:t,updateLabel:a,clearActiveLabel:s}){let r=null;function l(S,_){var O,z;const k=e();if(!k)return;S.preventDefault(),S.stopPropagation(),t(_.id);const M=k.getBoundingClientRect();let I=M.width,d=M.height;if(!d&&k.firstElementChild){const y=k.firstElementChild.getBoundingClientRect();d=y.height,I=y.width||I}if(!I||!d)return;const T=S.currentTarget.getBoundingClientRect(),B=(T.top-M.top)/d*100,E=(T.left-M.left)/I*100,N=_.styleMap||{},b=parseFloat(N.top),C=parseFloat(N.left);r={id:_.id,startX:S.clientX,startY:S.clientY,startTop:Number.isFinite(b)?b:B,startLeft:Number.isFinite(C)?C:E,width:I,height:d},document.body.classList.add("dragging-labels"),(z=(O=S.currentTarget).setPointerCapture)==null||z.call(O,S.pointerId)}function g(S){if(!r||typeof r=="string")return;const _=(S.clientX-r.startX)/r.width*100,k=(S.clientY-r.startY)/r.height*100,M=Math.min(100,Math.max(0,r.startTop+k)),I=Math.min(100,Math.max(0,r.startLeft+_));a(r.id,d=>{const T={...d.styleMap||{}};return T.top=`${M}%`,T.left=`${I}%`,{...d,styleMap:T}})}function m(){r="dropping",document.body.classList.remove("dragging-labels"),setTimeout(()=>{r==="dropping"&&(r=null)},150)}function c(S){S.target.closest(".draggable-label")||s()}function v(){return!!r}function u(){r=null,typeof document<"u"&&document.body.classList.remove("dragging-labels")}return{startDrag:l,handlePointerMove:g,handlePointerUp:m,handleStagePointerDown:c,cleanupDragState:u,isDraggingLabel:v}}function Ya(e=[]){return e.map(t=>({...t,styleMap:{...t.styleMap||{}}}))}function ja(e){return e!=null&&e.clientWidth?e.clientWidth:typeof window<"u"?Math.max(300,window.innerWidth-24):1200}function Ja(e){return e?e.name.endsWith(".html")||e.type.includes("html")||e.type.includes("text"):!1}function Ka(e){return new Promise((t,a)=>{if(!e||!e.type.startsWith("image/")){a(new Error("Invalid image file."));return}const s=new FileReader;s.onload=()=>t(s.result||""),s.onerror=()=>a(new Error("Could not read image file.")),s.readAsDataURL(e)})}function Qa(e){return new Promise(t=>{const a=new Image;a.onload=()=>{if(a.naturalWidth&&a.naturalHeight){t(a.naturalWidth);return}t(null)},a.onerror=()=>t(null),a.src=e})}function Za(e){return new Promise(t=>{const a=new Image;a.onload=()=>{if(a.naturalWidth&&a.naturalHeight){t(a.naturalHeight);return}t(null)},a.onerror=()=>t(null),a.src=e})}function $a(e){if(!e||typeof document>"u")return"";const t=document.getElementById(e);if(!t)return"";const a=t.querySelector("p, span, div")||t,s=getComputedStyle(a).textShadow;return s&&s!=="none"?s:""}function ti({selectedLabel:e,activeLabelId:t,activeShadow:a}){if(e!=null&&e.shadow)return e.shadow;const s=$a(t);return s||a}function ei(e,t,a){const s={className:t,shadow:a},r=e.findIndex(l=>l.className===t);return r===-1?[...e,s]:e.map((l,g)=>g===r?s:l)}const Ft=(e,t=0)=>{const a=Number.parseFloat(e);return Number.isFinite(a)?a:t},Ge=(e="")=>e.split(";").map(t=>t.trim()).filter(Boolean).reduce((t,a)=>{const[s,...r]=a.split(":");return!s||r.length===0||(t[s.trim().toLowerCase()]=r.join(":").trim()),t},{}),ni=(e="",t="Artboard")=>e?e.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():t,ai=(e={})=>{const a=(e.padding||"").split(/\s+/).filter(Boolean),s=a[2]||a[0]||"",r=Ft(s,0);return r?100/r:null},ii=(e={})=>Object.entries(e).map(([t,a])=>`${t}: ${a}`).join(";");function si(e,t){return!Array.isArray(e)||e.length===0?null:e.find(a=>t>=a.minWidth&&t<=a.maxWidth)||e[0]}function li(e=""){if(!e.trim())throw new Error("The file is empty.");let t=e.trim();!t.includes("<html")&&!t.includes("<!DOCTYPE")&&(t=`<!DOCTYPE html><html><head></head><body>${t}</body></html>`);const s=new DOMParser().parseFromString(t,"text/html"),r=[...s.querySelectorAll(".g-artboard")],l=s.querySelector(".ai2html");if(!r.length)throw new Error("No ai2html artboards found.");const g=[...s.querySelectorAll("style")].map(c=>c.textContent||"").join(`
`).trim(),m=r.map((c,v)=>{const u=Ge(c.getAttribute("style")||""),S=c.querySelector(":scope > div:not([id])"),_=Ge((S==null?void 0:S.getAttribute("style"))||""),k=c.querySelector('[id$="-graphic"]'),M=k?[...k.querySelectorAll(".g-aiAbs")]:[...c.querySelectorAll(":scope > div.g-aiAbs")],I=k?k.querySelector("img.g-aiImg, img"):c.querySelector("img.g-aiImg, img"),d=S&&Object.keys(_).length>0,T=M.map((N,b)=>{const C=Ge(N.getAttribute("style")||""),O=N.textContent.split(`
`).map(z=>z.trim()).filter(Boolean).join(" ").trim();return{id:N.id||`label-${v+1}-${b+1}`,className:N.className||"",html:N.innerHTML,previewText:O||`Label ${b+1}`,styleMap:C,shadow:"",textColor:""}}),B=ai(_),E=Ft(c.dataset.aspectRatio,0)||B||16/9;return{id:c.id||`artboard-${v+1}`,name:ni(c.id,`Artboard ${v+1}`),className:c.className||"g-artboard",style:c.getAttribute("style")||"",styleMap:u,aspectRatio:E,minWidth:Ft(c.dataset.minWidth,Ft(u["min-width"],0)),maxWidth:Ft(c.dataset.maxWidth,Ft(u["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:d?ii(_):"",imageSrc:(I==null?void 0:I.getAttribute("src"))||"",imageAlt:(I==null?void 0:I.getAttribute("alt"))||"",imageClassName:(I==null?void 0:I.className)||"g-aiImg",imageId:(I==null?void 0:I.id)||"",labels:T}});return{cssText:g,rootId:(l==null?void 0:l.id)||"",rootClassName:(l==null?void 0:l.className)||"ai2html",artboards:m}}async function ri(e){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{t.remove()}}}const oi={copyToClipboard:ri};var pi=G('<section class="studio svelte-1tsqvkl"><aside class="left-sidebar svelte-1tsqvkl"><details class="mobile-tools svelte-1tsqvkl" open=""><summary class="svelte-1tsqvkl">Tools</summary> <div class="mobile-tools-body svelte-1tsqvkl"><!></div></details></aside> <!> <aside class="right-sidebar svelte-1tsqvkl"><!></aside></section>');function di(e,t){var ee;zt(t,!0);const{copyToClipboard:a}=oi,s=((ee=Ce[0])==null?void 0:ee.shadow)||"";let r=o(t,"sampleMode",3,!1),l=o(t,"sampleHtml",3,""),g=o(t,"onLoadSample",3,()=>{}),m=H(void 0),c=H(void 0),v=H(""),u=H(""),S=H(""),_=H(""),k=H(""),M=H(""),I=H(1200),d=H(800),T=H(""),B=H("ai2html"),E=H(Rt([])),N=H(""),b=H(Rt([])),C=H(""),O=H(Rt(s)),z=H(Rt(aa)),y=H(Rt(ia)),Y=H(!1),L=H(!1),D=H(void 0),$=H(!1),tt=H(""),F=H(Rt([]));const R=it(()=>n(E).find(i=>i.id===n(N))||null),j=it(()=>n(b).find(i=>i.id===n(C))||null),et=it(()=>Ce.find(i=>i.shadow===n(O))||null),V=it(()=>ht(n(O),n(y))),nt=it(()=>{var i;return((i=n(R))==null?void 0:i.imageSrc)||n(M)}),mt=it(()=>ua(n(R),n(I))),xt=it(()=>ha.test(n(tt))),le=it(()=>{var i;return((i=n(j))==null?void 0:i.shadow)||n(V)||""}),Ie=it(()=>n(xt)&&n(le)?rn(n(tt),n(le)):""),It=it(()=>n(F).map(i=>rn(i.className,i.shadow)).join(`
`));nn(()=>{typeof document>"u"||(n(D)||(f(D,document.createElement("style"),!0),n(D).setAttribute("data-ai2html-import","true"),document.head.append(n(D))),n(D).textContent=n(v))}),dn(()=>{f($,typeof window<"u"&&"EyeDropper"in window,!0)});let st=H(!1);nn(()=>{typeof window>"u"||!r()||n(st)||!l()||(f(st,!0),re(l(),"sample-ai2html.html"))});async function re(i,w=""){f(u,""),f(S,"");try{const W=li(i);f(E,W.artboards,!0),f(T,W.rootId,!0),f(B,W.rootClassName,!0),f(v,W.cssText,!0),f(_,w,!0),f(M,""),f(k,"");const q=ja(n(c));Tt(si(W.artboards,q)||W.artboards[0])}catch(W){f(u,W instanceof Error?W.message:"Could not read ai2html file.",!0)}}Sn(()=>{var i;typeof document<"u"&&((i=n(D))==null||i.remove()),lt.cleanupDragState()});function ct(i,w){f(b,n(b).map(W=>W.id===i?w(W):W),!0)}function Tt(i){var w;i&&(f(S,""),f(N,i.id,!0),f(b,Ya(i.labels||[]),!0),f(C,((w=n(b)[0])==null?void 0:w.id)||"",!0))}async function vt(i){if(!i)return;const w=await i.text();await re(w,i.name)}function Ht(i){const[w]=i.currentTarget.files||[];vt(w)}function oe(i){i.preventDefault()}function pe(i){var w;lt.isDraggingLabel()||(w=i.dataTransfer)!=null&&w.types.includes("Files")&&(i.preventDefault(),f(L,!0))}function Te(i){lt.isDraggingLabel()||i.currentTarget.contains(i.relatedTarget)||f(L,!1)}function de(i){!i||!i.type.startsWith("image/")||Ka(i).then(async w=>{f(M,w,!0),f(k,i.name,!0),f(_,""),f(E,[],!0),f(N,""),f(T,""),f(B,"ai2html"),f(v,""),f(b,[],!0),f(C,"");const W=await Qa(w),q=await Za(w);W&&f(I,W,!0),q&&f(d,q,!0)}).catch(()=>{f(S,"Could not read image file.")})}function ke(i){if(i){if(i.type.startsWith("image/")){de(i);return}Ja(i)&&vt(i)}}function kt(i){if(lt.isDraggingLabel()){i.preventDefault();return}i.preventDefault(),f(L,!1);const[w]=i.dataTransfer.files||[];ke(w)}function ge(i){const[w]=i.currentTarget.files||[];de(w)}function Dt(i){const w={id:"custom-"+Date.now(),className:"custom-text",html:`<p>${i}</p>`,previewText:i,styleMap:{position:"absolute",left:"15%",top:"15%"},shadow:"",textColor:""};f(b,[...n(b),w],!0),f(C,w.id,!0)}function ce(i){const w=i.target;w.naturalWidth&&f(I,w.naturalWidth,!0),f(S,"")}function fe(){var w;const i=((w=n(R))==null?void 0:w.imageSrc)||"Unknown file";f(S,`Could not load artboard image (${i}). Export/upload image assets and try again.`)}function he(i){const w=n(E).find(({id:W})=>W===i.currentTarget.value);Tt(w)}function Xt(i="",w=n(y)){if(!i||i==="none")return;const W=ln(i),q=Ce.find(Q=>ln(ht(Q.shadow,w))===W);q&&f(O,q.shadow,!0)}function Bt(i){if(!i||typeof document>"u")return;const w=document.getElementById(i);if(!w)return;const W=w.querySelector("p, span, div")||w,q=getComputedStyle(W),Q=yn(q.color);Q&&f(z,Q,!0);const at=q.textShadow;if(at&&at!=="none"){const ft=Ue(at);if(ft){f(y,ft,!0),Xt(at,ft);return}Xt(at)}}function ue(i){f(C,i,!0),Bt(i)}function me(i){if(f(O,i,!0),!n(C)){f(b,n(b).map(w=>({...w,shadow:ht(i,n(y))})),!0);return}ct(n(C),w=>({...w,shadow:ht(i,n(y))}))}function qt(){f(b,n(b).map(i=>({...i,shadow:n(V)})),!0)}function bt(){n(C)&&ct(n(C),i=>({...i,shadow:""}))}function Ut(){n(C)&&ct(n(C),i=>({...i,shadow:ht(i.shadow||n(O),n(y))}))}function wt(){n(C)&&ct(n(C),i=>({...i,textColor:n(z)}))}function Lt(){f(b,n(b).map(i=>({...i,textColor:n(z)})),!0)}function Gt(){f(b,n(b).map(i=>({...i,textColor:""})),!0)}function Vt(){if(n(C)){wt();return}n(b).length&&Lt()}function Yt(){if(n(C)){Ut();return}f(b,n(b).map(i=>i.shadow?{...i,shadow:ht(i.shadow,n(y))}:i),!0)}function ve(){const i=(q,Q,at)=>{const ft=q.shadow||ht(n(O),at),Ne=q.textColor||Q,Ae=Ue(ft)||at;return{...q,textColor:Ae,shadow:ht(ft,Ne)}};if(n(C)){const q=n(b).find(at=>at.id===n(C));if(!q)return;const Q=i(q,n(z),n(y));ct(n(C),()=>Q),f(z,Q.textColor||n(z),!0),f(y,Ue(Q.shadow)||n(y),!0),Xt(Q.shadow,n(y));return}f(b,n(b).map(q=>i(q,n(z),n(y))),!0);const w=n(y),W=n(z);f(z,w,!0),f(y,W,!0)}async function jt(){n(V)&&await a(`text-shadow: ${n(V)}`)}function Jt(i){f(tt,ya(i.currentTarget.value||""),!0)}function At(){if(!n(xt))return;const i=ti({selectedLabel:n(j),activeLabelId:n(C),activeShadow:n(V)});i&&f(F,ei(n(F),n(tt),i),!0)}function De(){f(F,[],!0)}async function ye(){n(It)&&await a(n(It))}async function Kt(i){if(n($))try{const W=await new window.EyeDropper().open();if(i==="shadow"){f(y,W.sRGBHex,!0),n(j)&&Ut();return}f(z,W.sRGBHex,!0),n(j)&&wt()}catch{}}const lt=Va({getStageRef:()=>n(m),selectLabel:ue,updateLabel:ct,clearActiveLabel:()=>{f(C,"")}}),Qt=lt.startDrag,xe=lt.handlePointerMove,Mt=lt.handlePointerUp,Pt=lt.handleStagePointerDown;function Le(i){const w=[];if(i.styleMap)for(const[W,q]of Object.entries(i.styleMap))w.push(`${W}: ${q}`);return!n(Y)&&i.shadow&&w.push(`--editor-shadow: ${i.shadow}`),!n(Y)&&i.textColor&&w.push(`--editor-text-color: ${i.textColor}`),w.join("; ")}var St=pi();J("pointermove",He,xe),J("pointerup",He,Mt),J("pointercancel",He,Mt);var Nt=A(St),Zt=A(Nt),be=P(A(Zt),2),Me=A(be);La(Me,{get artboards(){return n(E)},get stageWidth(){return n(mt)},get labelsCount(){return n(b).length},get selectedLabel(){return n(j)},get activeShadow(){return n(V)},get workspaceImage(){return n(nt)},get htmlFileName(){return n(_)},get imageFileName(){return n(k)},get onLoadSample(){return g()},get cssClassName(){return n(tt)},get cssClassNameValid(){return n(xt)},get currentRulePreview(){return n(Ie)},get cssSheetPreview(){return n(It)},get cssRules(){return n(F)},get canUseEyeDropper(){return n($)},onAi2htmlDrop:kt,onAi2htmlInput:Ht,onImageInput:ge,onArtboardChange:he,onApplyShadowToAll:qt,onApplyTextToSelected:wt,onApplyTextToAll:Lt,onClearTextColors:Gt,onTextColorLive:Vt,onPickTextColor:()=>Kt("text"),onRecolorSelectedShadow:Ut,onClearSelectedShadow:bt,onCopyCurrentShadow:jt,onInvertShadow:ve,onShadowColorLive:Yt,onPickShadowColor:()=>Kt("shadow"),onCssClassNameInput:Jt,onAddRuleToSheet:At,onCopyCssSheet:ye,onClearCssSheet:De,onAddCustomText:Dt,get selectedArtboardId(){return n(N)},set selectedArtboardId(i){f(N,i,!0)},get previewOriginal(){return n(Y)},set previewOriginal(i){f(Y,i,!0)},get textColor(){return n(z)},set textColor(i){f(z,i,!0)},get shadowColor(){return n(y)},set shadowColor(i){f(y,i,!0)}}),x(be),x(Zt),x(Nt);var $t=P(Nt,2);Ga($t,{get parseError(){return n(u)},get workspaceImage(){return n(nt)},get isDragOver(){return n(L)},get imageLoadError(){return n(S)},get selectedArtboard(){return n(R)},get rootId(){return n(T)},get rootClassName(){return n(B)},get labels(){return n(b)},get activeLabelId(){return n(C)},get stageWidth(){return n(mt)},get imageNaturalWidth(){return n(I)},get imageNaturalHeight(){return n(d)},buildLabelStyle:Le,onDragOver:oe,onWorkspaceDragOver:pe,onWorkspaceDragLeave:Te,onDrop:kt,get onStagePointerDown(){return Pt},onSelectLabel:ue,get onStartDrag(){return Qt},onImageLoad:ce,onImageError:fe,get workspaceColumnRef(){return n(c)},set workspaceColumnRef(i){f(c,i,!0)},get stageRef(){return n(m)},set stageRef(i){f(m,i,!0)}});var te=P($t,2),we=A(te);Aa(we,{get selectedShadowRaw(){return n(O)},get shadowColor(){return n(y)},get textColor(){return n(z)},get selectedShadowMeta(){return n(et)},onChooseShadow:me}),x(te),x(St),U(e,St),_t()}const gi=`<div id="g-libano-box" class="ai2html media-wide">
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
`;var ci=G('<main id="main-content" class="page is-studio svelte-1uha8ag"><header class="topbar svelte-1uha8ag"><div class="brand svelte-1uha8ag"><div class="brand-mark svelte-1uha8ag">S</div> <div class="brand-copy svelte-1uha8ag"><p class="kicker svelte-1uha8ag">Cheesy Shadow Picker</p> <p class="version svelte-1uha8ag">2.0 <a href="/cheesy-shadow-picker/v1/" class="v1-link svelte-1uha8ag" rel="external">v1 available</a></p></div></div> <div class="top-divider svelte-1uha8ag" aria-hidden="true"></div></header> <section class="studio-shell svelte-1uha8ag"><!></section></main>');function xi(e,t){zt(t,!0);let a=H(!1);dn(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&f(a,!0)});function s(){f(a,!0)}var r=ci(),l=P(A(r),2),g=A(l);di(g,{get sampleMode(){return n(a)},get sampleHtml(){return gi},onLoadSample:s}),x(l),x(r),U(e,r),_t()}export{xi as component};
