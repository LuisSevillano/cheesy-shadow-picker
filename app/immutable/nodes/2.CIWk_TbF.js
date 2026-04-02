import{b as Yn,a as N,f as E,d as Me}from"../chunks/DgM4MugZ.js";import{o as we,a as ke}from"../chunks/pgCtfXo6.js";import{C as jn,e as De,h as $,i as hn,J as Wt,d as ee,g as n,r as Le,M as Re,f as re,j as Jn,k as Vt,G as Pe,N as Ne,O as pe,P as Gt,Q as ut,R as ae,S as Ee,T as Fe,U as Oe,V as Xe,W as se,X as He,Y as Be,o as We,Z as de,_ as Ge,a0 as Ue,a1 as Ae,a2 as Se,a3 as Kn,a4 as Ve,a5 as qe,a6 as Ye,a7 as je,I as ze,a8 as Ce,a9 as Je,aa as Ke,A as V,ab as Qe,ac as Ze,ad as $e,ae as ta,af as na,ag as ea,ah as aa,ai as ia,t as sa,aj as la,ak as oa,p as Nn,x as En,w,y as b,z as y,v as ra,al as ce,a as D,am as Bt,q as ge,b as g,an as Qn,B as ht}from"../chunks/DXxeDSZY.js";import{d as le,p as P,i as dt,s as mt,a as R,e as W,b as fe,r as he}from"../chunks/D9JfOmeJ.js";import{s as lt,r as Zn,e as pa,m as da,f as ca}from"../chunks/CHLWFSJT.js";import"../chunks/BPaBBqKw.js";function _e(t,e){return e}function ga(t,e,i){for(var s=[],h=e.length,r,m=e.length,u=0;u<h;u++){let C=e[u];Se(C,()=>{if(r){if(r.pending.delete(C),r.done.add(C),r.pending.size===0){var S=t.outrogroups;ie(t,se(r.done)),S.delete(r),S.size===0&&(t.outrogroups=null)}}else m-=1},!1)}if(m===0){var p=s.length===0&&i!==null;if(p){var x=i,f=x.parentNode;qe(f),f.append(x),t.items.clear()}ie(t,e,!p)}else r={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(r)}function ie(t,e,i=!0){var s;if(t.pending.size>0){s=new Set;for(const m of t.pending.values())for(const u of m)s.add(t.items.get(u).e)}for(var h=0;h<e.length;h++){var r=e[h];if(s!=null&&s.has(r)){r.f|=ut;const m=document.createDocumentFragment();Ye(r,m)}else je(e[h],i)}}var me;function Rn(t,e,i,s,h,r=null){var m=t,u=new Map,p=(e&Ce)!==0;if(p){var x=t;m=$?hn(Wt(x)):x.appendChild(jn())}$&&ee();var f=null,C=Oe(()=>{var T=i();return Xe(T)?T:T==null?[]:se(T)}),S,_=new Map,k=!0;function M(T){(F.effect.f&Ue)===0&&(F.pending.delete(T),F.fallback=f,fa(F,S,m,e,s),f!==null&&(S.length===0?(f.f&ut)===0?Ae(f):(f.f^=ut,fn(f,null,m)):Se(f,()=>{f=null})))}function c(T){F.pending.delete(T)}var z=De(()=>{S=n(C);var T=S.length;let A=!1;if($){var I=Le(m)===Re;I!==(T===0)&&(m=re(),hn(m),Jn(!1),A=!0)}for(var G=new Set,L=Gt,O=Fe(),Q=0;Q<T;Q+=1){$&&Vt.nodeType===Pe&&Vt.data===Ne&&(m=Vt,A=!0,Jn(!1));var U=S[Q],Z=s(U,Q),X=k?null:u.get(Z);X?(X.v&&pe(X.v,U),X.i&&pe(X.i,Q),O&&L.unskip_effect(X.e)):(X=ha(u,k?m:me??(me=jn()),U,Z,Q,h,e,i),k||(X.e.f|=ut),u.set(Z,X)),G.add(Z)}if(T===0&&r&&!f&&(k?f=ae(()=>r(m)):(f=ae(()=>r(me??(me=jn()))),f.f|=ut)),T>G.size&&Ee(),$&&T>0&&hn(re()),!k)if(_.set(L,G),O){for(const[ct,et]of u)G.has(ct)||L.skip_effect(et.e);L.oncommit(M),L.ondiscard(c)}else M(L);A&&Jn(!0),n(C)}),F={effect:z,items:u,pending:_,outrogroups:null,fallback:f};k=!1,$&&(m=Vt)}function gn(t){for(;t!==null&&(t.f&Ve)===0;)t=t.next;return t}function fa(t,e,i,s,h){var U,Z,X,ct,et,at,q,ot,Rt;var r=(s&Ke)!==0,m=e.length,u=t.items,p=gn(t.effect.first),x,f=null,C,S=[],_=[],k,M,c,z;if(r)for(z=0;z<m;z+=1)k=e[z],M=h(k,z),c=u.get(M).e,(c.f&ut)===0&&((Z=(U=c.nodes)==null?void 0:U.a)==null||Z.measure(),(C??(C=new Set)).add(c));for(z=0;z<m;z+=1){if(k=e[z],M=h(k,z),c=u.get(M).e,t.outrogroups!==null)for(const Y of t.outrogroups)Y.pending.delete(c),Y.done.delete(c);if((c.f&Kn)!==0&&(Ae(c),r&&((ct=(X=c.nodes)==null?void 0:X.a)==null||ct.unfix(),(C??(C=new Set)).delete(c))),(c.f&ut)!==0)if(c.f^=ut,c===p)fn(c,null,i);else{var F=f?f.next:p;c===t.effect.last&&(t.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),zt(t,f,c),zt(t,c,F),fn(c,F,i),f=c,S=[],_=[],p=gn(f.next);continue}if(c!==p){if(x!==void 0&&x.has(c)){if(S.length<_.length){var T=_[0],A;f=T.prev;var I=S[0],G=S[S.length-1];for(A=0;A<S.length;A+=1)fn(S[A],T,i);for(A=0;A<_.length;A+=1)x.delete(_[A]);zt(t,I.prev,G.next),zt(t,f,I),zt(t,G,T),p=T,f=G,z-=1,S=[],_=[]}else x.delete(c),fn(c,p,i),zt(t,c.prev,c.next),zt(t,c,f===null?t.effect.first:f.next),zt(t,f,c),f=c;continue}for(S=[],_=[];p!==null&&p!==c;)(x??(x=new Set)).add(p),_.push(p),p=gn(p.next);if(p===null)continue}(c.f&ut)===0&&S.push(c),f=c,p=gn(c.next)}if(t.outrogroups!==null){for(const Y of t.outrogroups)Y.pending.size===0&&(ie(t,se(Y.done)),(et=t.outrogroups)==null||et.delete(Y));t.outrogroups.size===0&&(t.outrogroups=null)}if(p!==null||x!==void 0){var L=[];if(x!==void 0)for(c of x)(c.f&Kn)===0&&L.push(c);for(;p!==null;)(p.f&Kn)===0&&p!==t.fallback&&L.push(p),p=gn(p.next);var O=L.length;if(O>0){var Q=(s&Ce)!==0&&m===0?i:null;if(r){for(z=0;z<O;z+=1)(q=(at=L[z].nodes)==null?void 0:at.a)==null||q.measure();for(z=0;z<O;z+=1)(Rt=(ot=L[z].nodes)==null?void 0:ot.a)==null||Rt.fix()}ga(t,L,Q)}}r&&Je(()=>{var Y,yt;if(C!==void 0)for(c of C)(yt=(Y=c.nodes)==null?void 0:Y.a)==null||yt.apply()})}function ha(t,e,i,s,h,r,m,u){var p=(m&He)!==0?(m&Be)===0?We(i,!1,!1):de(i):null,x=(m&Ge)!==0?de(h):null;return{v:p,i:x,e:ae(()=>(r(e,p??i,x??h,u),()=>{t.delete(s)}))}}function fn(t,e,i){if(t.nodes)for(var s=t.nodes.start,h=t.nodes.end,r=e&&(e.f&ut)===0?e.nodes.start:i;s!==null;){var m=ze(s);if(r.before(s),s===h)return;s=m}}function zt(t,e,i){e===null?t.effect.first=i:e.next=i,i===null?t.effect.last=e:i.prev=e}function ve(t,e,i=!1,s=!1,h=!1,r=!1){var m=t,u="";if(i){var p=t;$&&(m=hn(Wt(p)))}V(()=>{var x=Qe;if(u===(u=e()??"")){$&&ee();return}if(i&&!$){x.nodes=null,p.innerHTML=u,u!==""&&Yn(Wt(p),p.lastChild);return}if(x.nodes!==null&&(Ze(x.nodes.start,x.nodes.end),x.nodes=null),u!==""){if($){Vt.data;for(var f=ee(),C=f;f!==null&&(f.nodeType!==Pe||f.data!=="");)C=f,f=ze(f);if(f===null)throw $e(),ta;Yn(Vt,C),m=hn(f);return}var S=s?ea:h?aa:void 0,_=na(s?"svg":h?"math":"template",S);_.innerHTML=u;var k=s||h?_:_.content;if(Yn(Wt(k),k.lastChild),s||h)for(;Wt(k);)m.before(Wt(k));else m.before(k)}})}function Te(t){var e,i,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var h=t.length;for(e=0;e<h;e++)t[e]&&(i=Te(t[e]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function ma(){for(var t,e,i=0,s="",h=arguments.length;i<h;i++)(t=arguments[i])&&(e=Te(t))&&(s&&(s+=" "),s+=e);return s}function va(t){return typeof t=="object"?ma(t):t??""}function ua(t,e,i){var s=t==null?"":""+t;return e&&(s=s?s+" "+e:e),s===""?null:s}function ya(t,e){return t==null?null:String(t)}function vt(t,e,i,s,h,r){var m=t.__className;if($||m!==i||m===void 0){var u=ua(i,s);(!$||u!==t.getAttribute("class"))&&(u==null?t.removeAttribute("class"):t.className=u),t.__className=i}return r}function Dt(t,e,i,s){var h=t.__style;if($||h!==e){var r=ya(e);(!$||r!==t.getAttribute("style"))&&(r==null?t.removeAttribute("style"):t.style.cssText=r),t.__style=e}return s}function ue(t,e,i=e){var s=new WeakSet;ia(t,"input",async h=>{var r=h?t.defaultValue:t.value;if(r=$n(t)?te(r):r,i(r),Gt!==null&&s.add(Gt),await sa(),r!==(r=e())){var m=t.selectionStart,u=t.selectionEnd,p=t.value.length;if(t.value=r??"",u!==null){var x=t.value.length;m===u&&u===p&&x>p?(t.selectionStart=x,t.selectionEnd=x):(t.selectionStart=m,t.selectionEnd=Math.min(u,x))}}}),($&&t.defaultValue!==t.value||la(e)==null&&t.value)&&(i($n(t)?te(t.value):t.value),Gt!==null&&s.add(Gt)),oa(()=>{var h=e();if(t===document.activeElement){var r=Gt;if(s.has(r))return}$n(t)&&h===te(t.value)||t.type==="date"&&!h&&!t.value||h!==t.value&&(t.value=h??"")})}function $n(t){var e=t.type;return e==="number"||e==="range"}function te(t){return t===""?null:+t}const xa=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"},{shadow:"#000000 1px 0px 0px,#000000 .5px .8px 0px,#000000 -.4px .9px 0px,#000000 -.98px .14px 0px,#000000 -.65px -.75px 0px,#000000 .28px -.95px 0px,#000000 .96px -.27px 0px;",source:"https://www.nytimes.com/interactive/2024/04/26/us/politics/us-china-military-bases-weapons.html",id:"Raclette"},{source:"https://www.washingtonpost.com/world/2023/10/18/gaza-war-damage-images-maps/",shadow:"-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Oloroso cheese"},{source:"https://www.nytimes.com/interactive/2025/06/12/world/middleeast/iran-israel-maps.html/",shadow:"1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000,-1px -1px 0px #000000;",id:"Pecorino II"}],Ln=[...new Map(xa.map(t=>[t.shadow,t])).values()],oe=/#[0-9a-fA-F]{3,8}|rgba?\([^\)]*\)/g,ba=/^[a-z][a-z0-9]*$/;function wa(t,e=1200){var s;if(!t)return e;if(Number.isFinite(t.maxWidth)&&t.maxWidth>0)return t.maxWidth;if(Number.isFinite(t.minWidth)&&t.minWidth>0)return t.minWidth;const i=Number.parseFloat(((s=t.styleMap)==null?void 0:s.width)||"");return Number.isFinite(i)&&i>0?i:e}function Pa(t="#000000"){let e=t.replace("#","");e.length===3&&(e=e.split("").map(s=>`${s}${s}`).join(""));const i=Number.parseInt(e,16);return Number.isFinite(i)?[i>>16&255,i>>8&255,i&255]:[0,0,0]}function Lt(t,e){if(!t)return"";const i=t.match(oe);if(!(i!=null&&i.length))return t;const[s,h,r]=Pa(e),m=i.map(p=>{if(p.startsWith("#"))return e;const x=p.match(/\d+(?:\.\d+)?%?/g)||[];if(!x.length)return`rgb(${s} ${h} ${r})`;const f=x[3];return f?`rgb(${s} ${h} ${r} / ${f})`:`rgb(${s} ${h} ${r})`});let u=t;return i.forEach((p,x)=>{u=u.replace(p,m[x])}),u}function Aa(t=""){if(!t)return"";let e=t.trim().replace("#","");return(e.length===3||e.length===4)&&(e=e.slice(0,3).split("").map(i=>`${i}${i}`).join("")),`#${e.slice(0,6).toLowerCase()}`}function Ie(t=""){if(!t)return"";if(t.startsWith("#"))return Aa(t);const e=t.match(/[\d.]+%?/g);if(!e||e.length<3)return"";const[i,s,h]=e,r=u=>u.endsWith("%")?Math.round(Number.parseFloat(u)/100*255):Math.round(Number.parseFloat(u)),m=u=>Math.max(0,Math.min(255,u)).toString(16).padStart(2,"0");return`#${m(r(i))}${m(r(s))}${m(r(h))}`}function Sa(t=""){var i;const e=(i=t.match(oe))==null?void 0:i[0];return e?Ie(e):""}function ye(t=""){return t.toLowerCase().replace(oe,"__c__").replace(/0px/g,"0").replace(/\s*,\s*/g,",").replace(/\s+/g," ").trim()}function za(t=""){return t.toLowerCase().replace(/[^a-z0-9]/g,"").replace(/^[^a-z]+/,"")}function xe(t="",e=""){return!t||!e?"":`.${t} { text-shadow: ${e}; }`}var Ca=E('<span class="source-wrap svelte-1o3sgti"><a class="shadow-source svelte-1o3sgti" target="_blank" rel="noreferrer">View reference</a></span>'),_a=E('<button type="button"><span class="shadow-name svelte-1o3sgti"> </span> <span class="shadow-preview svelte-1o3sgti">Preview</span> <!></button>'),Ta=E('<aside class="library-column svelte-1o3sgti"><div class="library-header-panel svelte-1o3sgti"><h3 class="svelte-1o3sgti">Shadow Library</h3> <p class="svelte-1o3sgti">The main collection: choose and apply.</p></div> <div class="library-list-panel svelte-1o3sgti"></div></aside>');function Ia(t,e){Nn(e,!0);let i=P(e,"selectedShadowRaw",3,""),s=P(e,"shadowColor",3,"#000000"),h=P(e,"textColor",3,"#ffffff");P(e,"selectedShadowMeta",3,null);let r=P(e,"onChooseShadow",3,()=>{});var m=Ta(),u=w(b(m),2);Rn(u,21,()=>Ln,_e,(p,x)=>{var f=_a(),C=b(f),S=b(C,!0);y(C);var _=w(C,2),k=w(_,2);{var M=c=>{var z=Ca(),F=b(z);y(z),V(()=>lt(F,"href",n(x).source)),N(c,z)};dt(k,c=>{i()===n(x).shadow&&n(x).source&&c(M)})}y(f),V(c=>{vt(f,1,`shadow-choice ${i()===n(x).shadow?"is-selected":""}`,"svelte-1o3sgti"),mt(S,n(x).id),Dt(_,c)},[()=>`text-shadow:${Lt(n(x).shadow,s())};color:${h()};`]),R("click",f,()=>r()(n(x).shadow)),N(p,f)}),y(u),y(m),N(t,m),En()}le(["click"]);var Ma=Me('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 7h12v2H6v11h12V9h2v13H4V9H2V7h4V4h12v3h4v2h-2v13H4V9h2V7zm2-1h8V6H8v0zm1 5h2v7H9v-7zm4 0h2v7h-2v-7z"></path></svg>');function be(t){var e=Ma();N(t,e)}var ka=E('<p class="active-file svelte-y6dmz4"> </p>'),Da=E('<button type="button"> </button>'),La=E('<div class="artboard-switcher svelte-y6dmz4"><span class="artboard-label svelte-y6dmz4">Artboard</span> <div class="artboard-buttons svelte-y6dmz4"></div></div>'),Ra=E('<p class="selection-note svelte-y6dmz4">Selected: <strong> </strong></p>'),Na=E('<pre class="css-preview svelte-y6dmz4"> </pre>'),Ea=E('<pre class="css-rules-output svelte-y6dmz4"> </pre>'),Fa=E('<p class="empty-rules svelte-y6dmz4">No rules added yet.</p>'),Oa=E(`<section class="panel toolbar svelte-y6dmz4"><div class="toolbar-row import-row svelte-y6dmz4" role="region" aria-label="ai2html and image import zone"><p class="import-hint svelte-y6dmz4">Drag .html or image to the main workspace</p> <div class="import-actions svelte-y6dmz4"><label class="tool-button svelte-y6dmz4" for="ai2html-input">Load ai2html</label> <input id="ai2html-input" name="ai2html" type="file" accept=".html,text/html" autocomplete="off" class="svelte-y6dmz4"/> <label class="tool-button svelte-y6dmz4" for="image-input">Load Image</label> <input id="image-input" name="background-image" type="file" accept="image/*" autocomplete="off" class="svelte-y6dmz4"/> <button type="button" class="tool-button sample-button svelte-y6dmz4">Load sample</button></div> <!></div> <div class="toolbar-row main-controls-row svelte-y6dmz4"><!> <p class="metric svelte-y6dmz4"> </p> <div class="quick-actions svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply Shadow to All</button> <button type="button"> </button></div></div></section> <section class="panel appearance-panel sticky-appearance svelte-y6dmz4"><div class="toolbar-row appearance-row svelte-y6dmz4"><div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Text Color</h4> <div class="control-row svelte-y6dmz4"><label for="text-color" class="svelte-y6dmz4">Picker</label> <input id="text-color" name="text-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Apply to Selected</button> <button type="button" class="svelte-y6dmz4">Apply to All</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset to Original</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Text</button></div></div> <div class="appearance-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Shadow Color</h4> <div class="control-row svelte-y6dmz4"><label for="shadow-color" class="svelte-y6dmz4">Picker</label> <input id="shadow-color" name="shadow-color" type="color" class="svelte-y6dmz4"/></div> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Recolor Selected</button> <button type="button" class="reset-button svelte-y6dmz4"><!> Reset Shadow</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="eyedropper svelte-y6dmz4"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83-2.12-2.12-1.41 1.41 1.06 1.06-8.49 8.49a3 3 0 0 0-.85 1.69L2 22l6.34-1.32a3 3 0 0 0 1.69-.85l8.49-8.49 1.06 1.06 1.41-1.41-2.12-2.12 1.83-1.83a1 1 0 0 0 0-1.41zM8.62 18.75l-3.37.7.7-3.37a1 1 0 0 1 .28-.51l7.72-7.72 2.9 2.9-7.72 7.72a1 1 0 0 1-.51.28z"></path></svg> Sample Shadow</button></div></div></div> <!></section> <section class="panel css-sheet-panel svelte-y6dmz4"><details class="workflow-details svelte-y6dmz4"><summary class="svelte-y6dmz4">Illustrator Workflow</summary> <div class="workflow-content svelte-y6dmz4"><div class="workflow-intro svelte-y6dmz4"><p class="svelte-y6dmz4">ai2html adds a CSS class to each exported text based on the immediate parent layer name in
					Illustrator. This lets you target groups of text with specific rules for your needs.</p> <p class="svelte-y6dmz4">In this editor, define the class name, add rules one by one, and copy the entire CSS block
					at the end.</p></div> <div class="css-sheet-block svelte-y6dmz4"><h4 class="svelte-y6dmz4">Stylesheet</h4> <div class="control-row class-name-row svelte-y6dmz4"><label for="css-class-name" class="svelte-y6dmz4">Class Name</label> <input id="css-class-name" name="css-class-name" type="text" placeholder="mylayer" autocomplete="off" class="svelte-y6dmz4"/></div> <p class="class-name-help svelte-y6dmz4">Letters and numbers only. No spaces or symbols.</p> <div class="action-row svelte-y6dmz4"><button type="button" class="svelte-y6dmz4">Add to Stylesheet</button> <button type="button" class="svelte-y6dmz4">Copy CSS</button> <button type="button" class="reset-button svelte-y6dmz4">Clear Sheet</button></div> <!> <div class="css-rules-list svelte-y6dmz4" aria-live="polite"><!></div></div></div></details></section>`,1);function Xa(t,e){Nn(e,!0);let i=P(e,"artboards",19,()=>[]),s=P(e,"selectedArtboardId",15,""),h=P(e,"stageWidth",3,0),r=P(e,"labelsCount",3,0),m=P(e,"selectedLabel",3,null),u=P(e,"activeShadow",3,""),p=P(e,"workspaceImage",3,""),x=P(e,"htmlFileName",3,""),f=P(e,"imageFileName",3,""),C=P(e,"onLoadSample",3,()=>{}),S=P(e,"previewOriginal",15,!1),_=P(e,"textColor",15,"#000000"),k=P(e,"shadowColor",15,"#000000"),M=P(e,"cssClassName",3,""),c=P(e,"cssClassNameValid",3,!1),z=P(e,"currentRulePreview",3,""),F=P(e,"cssSheetPreview",3,""),T=P(e,"cssRules",19,()=>[]),A=P(e,"canUseEyeDropper",3,!1),I=P(e,"onAi2htmlDrop",3,()=>{}),G=P(e,"onAi2htmlInput",3,()=>{}),L=P(e,"onImageInput",3,()=>{}),O=P(e,"onArtboardChange",3,()=>{}),Q=P(e,"onApplyShadowToAll",3,()=>{}),U=P(e,"onApplyTextToSelected",3,()=>{}),Z=P(e,"onApplyTextToAll",3,()=>{}),X=P(e,"onClearTextColors",3,()=>{}),ct=P(e,"onTextColorLive",3,()=>{}),et=P(e,"onPickTextColor",3,()=>{}),at=P(e,"onRecolorSelectedShadow",3,()=>{}),q=P(e,"onClearSelectedShadow",3,()=>{}),ot=P(e,"onCopyCurrentShadow",3,()=>{}),Rt=P(e,"onShadowColorLive",3,()=>{}),Y=P(e,"onPickShadowColor",3,()=>{}),yt=P(e,"onCssClassNameInput",3,()=>{}),Nt=P(e,"onAddRuleToSheet",3,()=>{}),qt=P(e,"onCopyCssSheet",3,()=>{}),mn=P(e,"onClearCssSheet",3,()=>{});function Fn(d){d.preventDefault()}var Et=Oa(),Ft=ra(Et),Pt=b(Ft),Yt=w(b(Pt),2),vn=w(b(Yt),2),At=w(vn,4),un=w(At,2);y(Yt);var yn=w(Yt,2);{var On=d=>{var l=ka(),tt=b(l,!0);y(l),V(()=>mt(tt,x()||f())),N(d,l)};dt(yn,d=>{(x()||f())&&d(On)})}y(Pt);var jt=w(Pt,2),Jt=b(jt);{var xn=d=>{var l=La(),tt=w(b(l),2);Rn(tt,21,i,_e,(a,o)=>{var v=Da(),H=b(v,!0);y(v),V(()=>{vt(v,1,`artboard-btn ${s()===n(o).id?"is-active":""}`,"svelte-y6dmz4"),mt(H,n(o).name)}),R("click",v,()=>{s(n(o).id),O()({currentTarget:{value:n(o).id}})}),N(a,v)}),y(tt),y(l),N(d,l)};dt(Jt,d=>{i().length>1&&d(xn)})}var Ot=w(Jt,2),Xn=b(Ot);y(Ot);var St=w(Ot,2),Kt=b(St),Ct=w(Kt,2),bn=b(Ct,!0);y(Ct),y(St),y(jt),y(Ft);var Qt=w(Ft,2),Zt=b(Qt),$t=b(Zt),_t=w(b($t),2),tn=w(b(_t),2);Zn(tn),y(_t);var wn=w(_t,2),nn=b(wn),Tt=w(nn,2),xt=w(Tt,2),Pn=b(xt);be(Pn),ce(),y(xt);var An=w(xt,2);y(wn),y($t);var Sn=w($t,2),en=w(b(Sn),2),an=w(b(en),2);Zn(an),y(en);var zn=w(en,2),sn=b(zn),It=w(sn,2),Hn=b(It);be(Hn),ce(),y(It);var ln=w(It,2),Cn=w(ln,2);y(zn),y(Sn),y(Zt);var _n=w(Zt,2);{var Tn=d=>{var l=Ra(),tt=w(b(l)),a=b(tt,!0);y(tt),y(l),V(()=>mt(a,m().previewText)),N(d,l)};dt(_n,d=>{m()&&d(Tn)})}y(Qt);var In=w(Qt,2),on=b(In),Mn=w(b(on),2),rn=w(b(Mn),2),Mt=w(b(rn),2),kt=w(b(Mt),2);Zn(kt),y(Mt);var Xt=w(Mt,4),Ht=b(Xt),pn=w(Ht,2),rt=w(pn,2);y(Xt);var dn=w(Xt,2);{var Bn=d=>{var l=Na(),tt=b(l,!0);y(l),V(()=>mt(tt,z())),N(d,l)};dt(dn,d=>{z()&&d(Bn)})}var bt=w(dn,2),Wn=b(bt);{var Gn=d=>{var l=Ea(),tt=b(l,!0);y(l),V(()=>mt(tt,F())),N(d,l)},Un=d=>{var l=Fa();N(d,l)};dt(Wn,d=>{F()?d(Gn):d(Un,-1)})}y(bt),y(rn),y(Mn),y(on),y(In),V(()=>{mt(Xn,`Native Width: ${h()??""}px`),Kt.disabled=!r(),vt(Ct,1,`preview-toggle ${S()?"is-active":""}`,"svelte-y6dmz4"),Ct.disabled=!r(),mt(bn,S()?"Show Edited":"Show Original"),nn.disabled=!m(),Tt.disabled=!r(),xt.disabled=!r(),An.disabled=!A()||!p(),sn.disabled=!m(),It.disabled=!m(),ln.disabled=!u(),Cn.disabled=!A()||!p(),pa(kt,M()),Ht.disabled=!c(),pn.disabled=!F(),rt.disabled=!T().length}),W("dragover",Pt,Fn),W("drop",Pt,function(...d){var l;(l=I())==null||l.apply(this,d)}),R("change",vn,function(...d){var l;(l=G())==null||l.apply(this,d)}),R("change",At,function(...d){var l;(l=L())==null||l.apply(this,d)}),R("click",un,function(...d){var l;(l=C())==null||l.apply(this,d)}),R("click",Kt,function(...d){var l;(l=Q())==null||l.apply(this,d)}),R("click",Ct,()=>S(!S())),R("input",tn,function(...d){var l;(l=ct())==null||l.apply(this,d)}),ue(tn,_),R("click",nn,function(...d){var l;(l=U())==null||l.apply(this,d)}),R("click",Tt,function(...d){var l;(l=Z())==null||l.apply(this,d)}),R("click",xt,function(...d){var l;(l=X())==null||l.apply(this,d)}),R("click",An,function(...d){var l;(l=et())==null||l.apply(this,d)}),R("input",an,function(...d){var l;(l=Rt())==null||l.apply(this,d)}),ue(an,k),R("click",sn,function(...d){var l;(l=at())==null||l.apply(this,d)}),R("click",It,function(...d){var l;(l=q())==null||l.apply(this,d)}),R("click",ln,function(...d){var l;(l=ot())==null||l.apply(this,d)}),R("click",Cn,function(...d){var l;(l=Y())==null||l.apply(this,d)}),R("input",kt,function(...d){var l;(l=yt())==null||l.apply(this,d)}),R("click",Ht,function(...d){var l;(l=Nt())==null||l.apply(this,d)}),R("click",pn,function(...d){var l;(l=qt())==null||l.apply(this,d)}),R("click",rt,function(...d){var l;(l=mn())==null||l.apply(this,d)}),N(t,Et),En()}le(["change","click","input"]);const Ut=(t,e=0)=>{const i=Number.parseFloat(t);return Number.isFinite(i)?i:e},ne=(t="")=>t.split(";").map(e=>e.trim()).filter(Boolean).reduce((e,i)=>{const[s,...h]=i.split(":");return!s||h.length===0||(e[s.trim().toLowerCase()]=h.join(":").trim()),e},{}),Ha=(t="",e="Artboard")=>t?t.replace(/^g-/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim():e,Ba=(t={})=>{const i=(t.padding||"").split(/\s+/).filter(Boolean),s=i[2]||i[0]||"",h=Ut(s,0);return h?100/h:null},Wa=(t={})=>Object.entries(t).map(([e,i])=>`${e}: ${i}`).join(";");function Ga(t,e){return!Array.isArray(t)||t.length===0?null:t.find(i=>e>=i.minWidth&&e<=i.maxWidth)||t[0]}function Ua(t=""){if(!t.trim())throw new Error("The file is empty.");let e=t.trim();!e.includes("<html")&&!e.includes("<!DOCTYPE")&&(e=`<!DOCTYPE html><html><head></head><body>${e}</body></html>`);const s=new DOMParser().parseFromString(e,"text/html"),h=[...s.querySelectorAll(".g-artboard")],r=s.querySelector(".ai2html");if(!h.length)throw new Error("No ai2html artboards found.");const m=[...s.querySelectorAll("style")].map(p=>p.textContent||"").join(`
`).trim(),u=h.map((p,x)=>{const f=ne(p.getAttribute("style")||""),C=p.querySelector(":scope > div:not([id])"),S=ne((C==null?void 0:C.getAttribute("style"))||""),_=p.querySelector('[id$="-graphic"]'),k=_?[..._.querySelectorAll(".g-aiAbs")]:[...p.querySelectorAll(":scope > div.g-aiAbs")],M=_?_.querySelector("img.g-aiImg, img"):p.querySelector("img.g-aiImg, img"),c=C&&Object.keys(S).length>0,z=k.map((A,I)=>{const G=ne(A.getAttribute("style")||""),L=A.textContent.split(`
`).map(O=>O.trim()).filter(Boolean).join(" ").trim();return{id:A.id||`label-${x+1}-${I+1}`,className:A.className||"",html:A.innerHTML,previewText:L||`Label ${I+1}`,styleMap:G,shadow:"",textColor:""}}),F=Ba(S),T=Ut(p.dataset.aspectRatio,0)||F||16/9;return{id:p.id||`artboard-${x+1}`,name:Ha(p.id,`Artboard ${x+1}`),className:p.className||"g-artboard",style:p.getAttribute("style")||"",styleMap:f,aspectRatio:T,minWidth:Ut(p.dataset.minWidth,Ut(f["min-width"],0)),maxWidth:Ut(p.dataset.maxWidth,Ut(f["max-width"],Number.POSITIVE_INFINITY)),paddingStyle:c?Wa(S):"",imageSrc:(M==null?void 0:M.getAttribute("src"))||"",imageAlt:(M==null?void 0:M.getAttribute("alt"))||"",imageClassName:(M==null?void 0:M.className)||"g-aiImg",imageId:(M==null?void 0:M.id)||"",labels:z}});return{cssText:m,rootId:(r==null?void 0:r.id)||"",rootClassName:(r==null?void 0:r.className)||"ai2html",artboards:u}}async function Va(t){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t);else{const e=document.createElement("textarea");e.value=t,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{e.remove()}}}const qa={copyToClipboard:Va};var Ya=E('<p class="error svelte-l3ugom"> </p>'),ja=E('<p class="image-warning svelte-l3ugom" role="alert"> </p>'),Ja=E("<div></div>"),Ka=E("<div></div>"),Qa=E('<button type="button"></button>'),Za=E('<div><!> <img loading="eager" fetchpriority="high"/> <!></div>'),$a=E('<button type="button"></button>'),ti=E('<div class="workspace-empty svelte-l3ugom" role="region" aria-label="Drop zone for ai2html or image files"><img alt="Editor background" loading="eager" fetchpriority="high"/> <!></div>'),ni=E('<div class="workspace-scroll svelte-l3ugom"><!> <div class="stage-host svelte-l3ugom"><div><!></div></div></div>'),ei=E('<div class="workspace-empty svelte-l3ugom" role="region" aria-label="Drop zone for ai2html or image files"><svg class="empty-icon svelte-l3ugom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> <p class="svelte-l3ugom">Drag & drop your ai2html or image file here</p> <p class="empty-hint svelte-l3ugom">or use the buttons in the toolbar</p></div>'),ai=E('<section class="studio svelte-l3ugom"><aside class="left-sidebar svelte-l3ugom"><details class="mobile-tools svelte-l3ugom" open=""><summary class="svelte-l3ugom">Tools</summary> <div class="mobile-tools-body svelte-l3ugom"><!></div></details></aside> <div role="region" aria-label="Main workspace drop zone"><!> <div role="region" aria-label="Workspace drop zone"><!></div></div> <aside class="right-sidebar svelte-l3ugom"><!></aside></section>');function ii(t,e){var tt;Nn(e,!0);const{copyToClipboard:i}=qa,s=((tt=Ln[0])==null?void 0:tt.shadow)||"";let h=P(e,"sampleMode",3,!1),r=P(e,"sampleHtml",3,""),m=P(e,"onLoadSample",3,()=>{}),u=D(void 0),p=D(void 0),x=D(""),f=D(""),C=D(""),S=D(""),_=D(""),k=D(""),M=D(1200),c=D(""),z=D("ai2html"),F=D(Bt([])),T=D(""),A=D(Bt([])),I=D(""),G=D(Bt(s)),L=D(Bt(da)),O=D(Bt(ca)),Q=D(!1),U=D(null),Z=D(!1),X=D(void 0),ct=D(!1),et=D(""),at=D(Bt([]));const q=ht(()=>n(F).find(a=>a.id===n(T))||null),ot=ht(()=>n(A).find(a=>a.id===n(I))||null),Rt=ht(()=>Ln.find(a=>a.shadow===n(G))||null),Y=ht(()=>Lt(n(G),n(O))),yt=ht(()=>{var a;return((a=n(q))==null?void 0:a.imageSrc)||n(k)}),Nt=ht(()=>wa(n(q),n(M))),qt=ht(()=>ba.test(n(et))),mn=ht(()=>{var a;return((a=n(ot))==null?void 0:a.shadow)||n(Y)||""}),Fn=ht(()=>n(qt)&&n(mn)?xe(n(et),n(mn)):""),Et=ht(()=>n(at).map(a=>xe(a.className,a.shadow)).join(`
`));ge(()=>{typeof document>"u"||(n(X)||(g(X,document.createElement("style"),!0),n(X).setAttribute("data-ai2html-import","true"),document.head.append(n(X))),n(X).textContent=n(x))}),we(()=>{g(ct,typeof window<"u"&&"EyeDropper"in window,!0)});let Ft=D(!1);ge(()=>{typeof window>"u"||!h()||n(Ft)||!r()||(g(Ft,!0),Pt(r(),"sample-ai2html.html"))});async function Pt(a,o=""){g(f,""),g(C,"");try{const v=Ua(a);g(F,v.artboards,!0),g(c,v.rootId,!0),g(z,v.rootClassName,!0),g(x,v.cssText,!0),g(S,o,!0),g(k,""),g(_,"");const H=Yt();un(Ga(v.artboards,H)||v.artboards[0])}catch(v){g(f,v instanceof Error?v.message:"Could not read ai2html file.",!0)}}function Yt(){var a;return(a=n(p))!=null&&a.clientWidth?n(p).clientWidth:typeof window<"u"?Math.max(300,window.innerWidth-24):1200}ke(()=>{var a;typeof document<"u"&&((a=n(X))==null||a.remove(),document.body.classList.remove("dragging-labels"))});function vn(a=[]){return a.map(o=>({...o,styleMap:{...o.styleMap||{}}}))}function At(a,o){g(A,n(A).map(v=>v.id===a?o(v):v),!0)}function un(a){var o;a&&(g(C,""),g(T,a.id,!0),g(A,vn(a.labels||[]),!0),g(I,((o=n(A)[0])==null?void 0:o.id)||"",!0))}async function yn(a){if(!a)return;const o=await a.text();await Pt(o,a.name)}function On(a){const[o]=a.currentTarget.files||[];yn(o)}function jt(a){a.preventDefault()}function Jt(a){a.preventDefault(),g(Z,!0)}function xn(a){a.currentTarget.contains(a.relatedTarget)||g(Z,!1)}function Ot(a){if(!a||!a.type.startsWith("image/"))return;const o=new FileReader;o.onload=()=>{g(k,o.result,!0),g(_,a.name,!0),g(S,""),g(F,[],!0),g(T,""),g(c,""),g(z,"ai2html"),g(x,""),g(A,[],!0),g(I,"");const v=new Image;v.onload=()=>{v.naturalWidth&&v.naturalHeight&&g(M,v.naturalWidth,!0)},v.src=o.result},o.readAsDataURL(a)}function Xn(a){if(a){if(a.type.startsWith("image/")){Ot(a);return}(a.name.endsWith(".html")||a.type.includes("html")||a.type.includes("text"))&&yn(a)}}function St(a){a.preventDefault(),g(Z,!1);const[o]=a.dataTransfer.files||[];Xn(o)}function Kt(a){const[o]=a.currentTarget.files||[];Ot(o)}function Ct(a){const o=a.target;o.naturalWidth&&g(M,o.naturalWidth,!0),g(C,"")}function bn(){var o;const a=((o=n(q))==null?void 0:o.imageSrc)||"Unknown file";g(C,`Could not load artboard image (${a}). Export/upload image assets and try again.`)}function Qt(a){const o=n(F).find(({id:v})=>v===a.currentTarget.value);un(o)}function Zt(a=""){if(!a||a==="none")return;const o=ye(a),v=Ln.find(H=>ye(Lt(H.shadow,n(O)))===o);v&&g(G,v.shadow,!0)}function $t(a){if(!a||typeof document>"u")return;const o=document.getElementById(a);if(!o)return;const v=o.querySelector("p, span, div")||o,H=getComputedStyle(v),st=Ie(H.color);st&&g(L,st,!0);const nt=H.textShadow;if(nt&&nt!=="none"){const pt=Sa(nt);pt&&g(O,pt,!0),Zt(nt)}}function _t(a){g(I,a,!0),$t(a)}function tn(a){if(g(G,a,!0),!n(I)){g(A,n(A).map(o=>({...o,shadow:Lt(a,n(O))})),!0);return}At(n(I),o=>({...o,shadow:Lt(a,n(O))}))}function wn(){g(A,n(A).map(a=>({...a,shadow:n(Y)})),!0)}function nn(){n(I)&&At(n(I),a=>({...a,shadow:""}))}function Tt(){n(I)&&At(n(I),a=>({...a,shadow:Lt(a.shadow||n(G),n(O))}))}function xt(){n(I)&&At(n(I),a=>({...a,textColor:n(L)}))}function Pn(){g(A,n(A).map(a=>({...a,textColor:n(L)})),!0)}function An(){g(A,n(A).map(a=>({...a,textColor:""})),!0)}function Sn(){if(n(I)){xt();return}n(A).length&&Pn()}function en(){if(n(I)){Tt();return}g(A,n(A).map(a=>a.shadow?{...a,shadow:Lt(a.shadow,n(O))}:a),!0)}async function an(){n(Y)&&await i(`text-shadow: ${n(Y)}`)}function zn(a){g(et,za(a.currentTarget.value||""),!0)}function sn(){if(!n(I)||typeof document>"u")return"";const a=document.getElementById(n(I));if(!a)return"";const o=a.querySelector("p, span, div")||a,v=getComputedStyle(o).textShadow;return v&&v!=="none"?v:""}function It(){var o;if((o=n(ot))!=null&&o.shadow)return n(ot).shadow;const a=sn();return a||n(Y)}function Hn(){if(!n(qt))return;const a=It();if(!a)return;const o={className:n(et),shadow:a},v=n(at).findIndex(H=>H.className===n(et));if(v===-1){g(at,[...n(at),o],!0);return}g(at,n(at).map((H,st)=>st===v?o:H),!0)}function ln(){g(at,[],!0)}async function Cn(){n(Et)&&await i(n(Et))}async function _n(a){if(n(ct))try{const v=await new window.EyeDropper().open();if(a==="shadow"){g(O,v.sRGBHex,!0),n(ot)&&Tt();return}g(L,v.sRGBHex,!0),n(ot)&&xt()}catch{}}function Tn(a,o){var it,B;if(!n(u))return;a.stopPropagation(),_t(o.id);const v=n(u).getBoundingClientRect(),H=a.currentTarget.getBoundingClientRect(),st=v.height?(H.top-v.top)/v.height*100:0,nt=v.width?(H.left-v.left)/v.width*100:0,pt=o.styleMap||{},kn=parseFloat(pt.top),Dn=parseFloat(pt.left);g(U,{id:o.id,startX:a.clientX,startY:a.clientY,startTop:Number.isFinite(kn)?kn:st,startLeft:Number.isFinite(Dn)?Dn:nt,width:v.width,height:v.height},!0),document.body.classList.add("dragging-labels"),(B=(it=a.currentTarget).setPointerCapture)==null||B.call(it,a.pointerId)}function In(a){if(!n(U))return;const o=(a.clientX-n(U).startX)/n(U).width*100,v=(a.clientY-n(U).startY)/n(U).height*100,H=Math.min(100,Math.max(0,n(U).startTop+v)),st=Math.min(100,Math.max(0,n(U).startLeft+o));At(n(U).id,nt=>{const pt={...nt.styleMap||{}};return pt.top=`${H}%`,pt.left=`${st}%`,{...nt,styleMap:pt}})}function on(){g(U,null),document.body.classList.remove("dragging-labels")}function Mn(a){a.target.closest(".draggable-label")||g(I,"")}function rn(a){const o=[];if(a.styleMap)for(const[v,H]of Object.entries(a.styleMap))o.push(`${v}: ${H}`);return!n(Q)&&a.shadow&&o.push(`--editor-shadow: ${a.shadow}`),!n(Q)&&a.textColor&&o.push(`--editor-text-color: ${a.textColor}`),o.join("; ")}var Mt=ai();W("pointermove",Qn,In),W("pointerup",Qn,on),W("pointercancel",Qn,on);var kt=b(Mt),Xt=b(kt),Ht=w(b(Xt),2),pn=b(Ht);Xa(pn,{get artboards(){return n(F)},get stageWidth(){return n(Nt)},get labelsCount(){return n(A).length},get selectedLabel(){return n(ot)},get activeShadow(){return n(Y)},get workspaceImage(){return n(yt)},get htmlFileName(){return n(S)},get imageFileName(){return n(_)},get onLoadSample(){return m()},get cssClassName(){return n(et)},get cssClassNameValid(){return n(qt)},get currentRulePreview(){return n(Fn)},get cssSheetPreview(){return n(Et)},get cssRules(){return n(at)},get canUseEyeDropper(){return n(ct)},onAi2htmlDrop:St,onAi2htmlInput:On,onImageInput:Kt,onArtboardChange:Qt,onApplyShadowToAll:wn,onApplyTextToSelected:xt,onApplyTextToAll:Pn,onClearTextColors:An,onTextColorLive:Sn,onPickTextColor:()=>_n("text"),onRecolorSelectedShadow:Tt,onClearSelectedShadow:nn,onCopyCurrentShadow:an,onShadowColorLive:en,onPickShadowColor:()=>_n("shadow"),onCssClassNameInput:zn,onAddRuleToSheet:Hn,onCopyCssSheet:Cn,onClearCssSheet:ln,get selectedArtboardId(){return n(T)},set selectedArtboardId(a){g(T,a,!0)},get previewOriginal(){return n(Q)},set previewOriginal(a){g(Q,a,!0)},get textColor(){return n(L)},set textColor(a){g(L,a,!0)},get shadowColor(){return n(O)},set shadowColor(a){g(O,a,!0)}}),y(Ht),y(Xt),y(kt);var rt=w(kt,2),dn=b(rt);{var Bn=a=>{var o=Ya(),v=b(o,!0);y(o),V(()=>mt(v,n(f))),N(a,o)};dt(dn,a=>{n(f)&&a(Bn)})}var bt=w(dn,2),Wn=b(bt);{var Gn=a=>{var o=ni(),v=b(o);{var H=it=>{var B=ja(),gt=b(B,!0);y(B),V(()=>mt(gt,n(C))),N(it,B)};dt(v,it=>{n(C)&&it(H)})}var st=w(v,2),nt=b(st),pt=b(nt);{var kn=it=>{var B=Za(),gt=b(B);{var Vn=J=>{var K=Ja();V(()=>Dt(K,n(q).paddingStyle)),N(J,K)},cn=J=>{var K=Ka();V(()=>Dt(K,`padding: 0 0 ${100/(n(q).aspectRatio||1.6)}% 0;`)),N(J,K)};dt(gt,J=>{n(q).paddingStyle?J(Vn):n(C)&&J(cn,1)})}var j=w(gt,2),ft=w(j,2);Rn(ft,17,()=>n(A),J=>J.id,(J,K)=>{var wt=Qa();ve(wt,()=>n(K).html,!0),y(wt),V(qn=>{lt(wt,"id",n(K).id),vt(wt,1,`draggable-label ${n(K).className} ${n(I)===n(K).id?"is-active":""} ${n(K).textColor?"has-custom-text":""} ${n(K).shadow?"has-custom-shadow":""}`,"svelte-l3ugom"),Dt(wt,qn),lt(wt,"aria-label",`Text ${n(K).previewText}`)},[()=>rn(n(K))]),W("focus",wt,()=>_t(n(K).id)),R("pointerdown",wt,qn=>Tn(qn,n(K))),N(J,wt)}),y(B),fe(B,J=>g(u,J),()=>n(u)),V(()=>{lt(B,"id",n(q).id),vt(B,1,`${n(q).className||"g-artboard"} editor-artboard`,"svelte-l3ugom"),Dt(B,n(q).style||""),lt(j,"id",n(q).imageId),vt(j,1,va(n(q).imageClassName||"g-aiImg"),"svelte-l3ugom"),lt(j,"src",n(yt)),lt(j,"alt",n(q).imageAlt||"Mapa de fondo"),lt(j,"width",n(Nt))}),R("pointerdown",B,Mn),W("load",j,Ct),W("error",j,bn),he(j),N(it,B)},Dn=it=>{var B=ti(),gt=b(B),Vn=w(gt,2);Rn(Vn,17,()=>n(A),cn=>cn.id,(cn,j)=>{var ft=$a();ve(ft,()=>n(j).html,!0),y(ft),V(J=>{vt(ft,1,`draggable-label ${n(I)===n(j).id?"is-active":""} ${n(j).textColor?"has-custom-text":""} ${n(j).shadow?"has-custom-shadow":""}`,"svelte-l3ugom"),Dt(ft,J),lt(ft,"aria-label",`Text ${n(j).previewText}`)},[()=>rn(n(j))]),W("focus",ft,()=>_t(n(j).id)),R("pointerdown",ft,J=>Tn(J,n(j))),N(cn,ft)}),y(B),V(()=>{lt(gt,"src",n(yt)),lt(gt,"width",n(Nt))}),W("dragover",B,jt),W("drop",B,St),W("error",gt,bn),he(gt),N(it,B)};dt(pt,it=>{n(q)?it(kn):it(Dn,-1)})}y(nt),y(st),y(o),V(()=>{Dt(st,`max-width:${n(Nt)}px;`),lt(nt,"id",n(c)||"ai2html-root"),vt(nt,1,`${n(z)||"ai2html"} editor-root`,"svelte-l3ugom")}),N(a,o)},Un=a=>{var o=ei();W("dragover",o,jt),W("drop",o,St),N(a,o)};dt(Wn,a=>{n(yt)?a(Gn):a(Un,-1)})}y(bt),y(rt),fe(rt,a=>g(p,a),()=>n(p));var d=w(rt,2),l=b(d);Ia(l,{get selectedShadowRaw(){return n(G)},get shadowColor(){return n(O)},get textColor(){return n(L)},get selectedShadowMeta(){return n(Rt)},onChooseShadow:tn}),y(d),y(Mt),V(()=>{vt(rt,1,`workspace-column ${n(Z)?"is-dragover":""}`,"svelte-l3ugom"),vt(bt,1,`workspace-shell ${n(Z)?"is-dragover":""}`,"svelte-l3ugom")}),W("dragover",rt,Jt),W("dragleave",rt,xn),W("drop",rt,St),W("dragover",bt,Jt),W("dragleave",bt,xn),W("drop",bt,St),N(t,Mt),En()}le(["pointerdown"]);const si=`<div id="g-libano-box" class="ai2html media-wide">
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
`;var li=E('<main id="main-content" class="page is-studio svelte-1uha8ag"><header class="topbar svelte-1uha8ag"><div class="brand svelte-1uha8ag"><div class="brand-mark svelte-1uha8ag">S</div> <div class="brand-copy svelte-1uha8ag"><p class="kicker svelte-1uha8ag">Cheesy Shadow Picker</p> <p class="version svelte-1uha8ag">2.0</p></div></div> <div class="top-divider svelte-1uha8ag" aria-hidden="true"></div></header> <section class="studio-shell svelte-1uha8ag"><!></section></main>');function fi(t,e){Nn(e,!0);let i=D(!1);we(()=>{new URL(window.location.href).searchParams.get("sample")==="1"&&g(i,!0)});function s(){g(i,!0)}var h=li(),r=w(b(h),2),m=b(r);ii(m,{get sampleMode(){return n(i)},get sampleHtml(){return si},onLoadSample:s}),y(r),y(h),N(t,h),En()}export{fi as component};
