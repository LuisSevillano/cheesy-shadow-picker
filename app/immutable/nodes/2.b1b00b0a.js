import{r as fe,i as st,s as se,n as Z,e as xe,b as N,f as O,h as ye,j as de}from"../chunks/scheduler.c9210aeb.js";import{t as L,d as F,S as re,i as oe,g as y,m as W,s as V,h as k,j as T,n as J,f as b,c as M,k as h,a as A,y as m,A as B,o as ge,p as ke,b as Ce,z as $,B as We,l as je,C as Ve,D as U,r as Y,u as K,v as Q,w as X,E as Me,F as Ae,G as rt,H as _e,I as we}from"../chunks/index.620973ff.js";import{w as Je}from"../chunks/index.f6dfa876.js";import{m as Ye,l as Ke,r as Qe,d as Xe,s as Pe,a as Fe}from"../chunks/config.88ed46b3.js";function He(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ot(s,e){L(s,1,1,()=>{e.delete(s.key)})}function at(s,e,t,r,o,l,a,i,n,p,g,S){let x=s.length,C=l.length,u=x;const f={};for(;u--;)f[s[u].key]=u;const c=[],_=new Map,z=new Map,G=[];for(u=C;u--;){const d=S(o,l,u),E=t(d);let j=a.get(E);j?r&&G.push(()=>j.p(d,e)):(j=p(E,d),j.c()),_.set(E,c[u]=j),E in f&&z.set(E,Math.abs(u-f[E]))}const I=new Set,v=new Set;function w(d){F(d,1),d.m(i,g),a.set(d.key,d),g=d.first,C--}for(;x&&C;){const d=c[C-1],E=s[x-1],j=d.key,P=E.key;d===E?(g=d.first,x--,C--):_.has(P)?!a.has(j)||I.has(j)?w(d):v.has(P)?x--:z.get(j)>z.get(P)?(v.add(j),w(d)):(I.add(P),x--):(n(E,a),x--)}for(;x--;){const d=s[x];_.has(d.key)||n(d,a)}for(;C;)w(c[C-1]);return fe(G),c}function Ze(s,{delay:e=0,duration:t=400,easing:r=st}={}){const o=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:r,css:l=>`opacity: ${l*o}`}}async function lt(s){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(s);else{const e=document.createElement("textarea");e.value=s,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy")}catch(t){console.error(t)}finally{e.remove()}}}const it={copyToClipboard:lt};function Le(s){let e,t,r,o;return{c(){e=y("div"),t=y("p"),r=W(s[4]),this.h()},l(l){e=k(l,"DIV",{class:!0,style:!0,title:!0});var a=T(e);t=k(a,"P",{style:!0,class:!0});var i=T(t);r=J(i,s[4]),i.forEach(b),a.forEach(b),this.h()},h(){h(t,"style",s[8]),h(t,"class","svelte-1aka4sj"),h(e,"class","shadow-block svelte-1aka4sj"),h(e,"style",o=`background-image: linear-gradient(to right, ${s[5]}, ${s[6]});`),h(e,"title",s[3])},m(l,a){A(l,e,a),m(e,t),m(t,r)},p(l,a){a&16&&ge(r,l[4]),a&256&&h(t,"style",l[8]),a&96&&o!==(o=`background-image: linear-gradient(to right, ${l[5]}, ${l[6]});`)&&h(e,"style",o),a&8&&h(e,"title",l[3])},d(l){l&&b(e)}}}function qe(s){let e,t="Copied!",r,o;return{c(){e=y("span"),e.textContent=t,this.h()},l(l){e=k(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-3bytop"&&(e.textContent=t),this.h()},h(){h(e,"class","svelte-1aka4sj")},m(l,a){A(l,e,a),o=!0},i(l){o||(r&&r.end(1),o=!0)},o(l){l&&(r=We(e,Ze,{duration:1e3})),o=!1},d(l){l&&b(e),l&&r&&r.end()}}}function nt(s){let e,t,r,o,l,a,i,n,p,g,S,x,C,u=!s[1]&&Le(s),f=s[7]&&qe();return{c(){e=y("div"),t=y("p"),r=W(s[0]),o=V(),u&&u.c(),l=V(),a=y("div"),i=y("a"),n=W("Source"),p=V(),f&&f.c(),this.h()},l(c){e=k(c,"DIV",{class:!0,style:!0});var _=T(e);t=k(_,"P",{class:!0});var z=T(t);r=J(z,s[0]),z.forEach(b),o=M(_),u&&u.l(_),l=M(_),a=k(_,"DIV",{class:!0});var G=T(a);i=k(G,"A",{href:!0,class:!0});var I=T(i);n=J(I,"Source"),I.forEach(b),p=M(G),f&&f.l(G),G.forEach(b),_.forEach(b),this.h()},h(){h(t,"class","svelte-1aka4sj"),h(i,"href",s[3]),h(i,"class","svelte-1aka4sj"),h(a,"class","form-block svelte-1aka4sj"),h(e,"class",g="shadow-line "+(s[1]&&"image-mode")+" svelte-1aka4sj"),h(e,"style",S=s[1]?`${s[8]}`:"")},m(c,_){A(c,e,_),m(e,t),m(t,r),m(e,o),u&&u.m(e,null),m(e,l),m(e,a),m(a,i),m(i,n),m(a,p),f&&f.m(a,null),x||(C=B(e,"click",s[11]),x=!0)},p(c,[_]){_&1&&ge(r,c[0]),c[1]?u&&(u.d(1),u=null):u?u.p(c,_):(u=Le(c),u.c(),u.m(e,l)),_&8&&h(i,"href",c[3]),c[7]?f?_&128&&F(f,1):(f=qe(),f.c(),F(f,1),f.m(a,null)):f&&(ke(),L(f,1,1,()=>{f=null}),Ce()),_&2&&g!==(g="shadow-line "+(c[1]&&"image-mode")+" svelte-1aka4sj")&&h(e,"class",g),_&258&&S!==(S=c[1]?`${c[8]}`:"")&&h(e,"style",S)},i(c){F(f)},o(c){L(f)},d(c){c&&b(e),u&&u.d(),f&&f.d(),x=!1,C()}}}function ct(s,e,t){let r;const{copyToClipboard:o}=it;let{id:l}=e,{imageMode:a=!1}=e,{shadow:i}=e,{source:n}=e,{text:p}=e,{mainTextColor:g}=e,{leftGradColor:S}=e,{rightGradColor:x}=e,C=!1;function u(c){o(`text-shadow: ${c}`),t(7,C=!0),setTimeout(()=>{t(7,C=!1)},1e3)}const f=()=>u(i);return s.$$set=c=>{"id"in c&&t(0,l=c.id),"imageMode"in c&&t(1,a=c.imageMode),"shadow"in c&&t(2,i=c.shadow),"source"in c&&t(3,n=c.source),"text"in c&&t(4,p=c.text),"mainTextColor"in c&&t(10,g=c.mainTextColor),"leftGradColor"in c&&t(5,S=c.leftGradColor),"rightGradColor"in c&&t(6,x=c.rightGradColor)},s.$$.update=()=>{s.$$.dirty&1028&&t(8,r=`text-shadow: ${i}color: ${g}`)},[l,a,i,n,p,S,x,C,r,u,g,f]}class ht extends re{constructor(e){super(),oe(this,e,ct,nt,se,{id:0,imageMode:1,shadow:2,source:3,text:4,mainTextColor:10,leftGradColor:5,rightGradColor:6})}}const dt=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"}],Re=[...new Map(dt.map(s=>[s.shadow,s])).values()],pe=["Queso cheeseburger boursin gouda cheesy grin bocconcini bavarian bergkase bavarian bergkase","Goat paneer cheese triangles cheese on toast rubber cheese halloumi caerphilly cheeseburger","Emmental taleggio blue castello port-salut cheese strings cheesy feet dolcelatte say cheese","Swiss lancashire cut the cheese stinking bishop melted cheese lancashire swiss cheeseburger","Bocconcini cheesecake red leicester bocconcini gouda croque monsieur dolcelatte pepper jack","Airedale swiss lancashire fondue macaroni cheese bavarian bergkase lancashire cheese slices","Agur blue cheese rubber cheese the big cheese edam mozzarella airedale cheese strings queso","Fondue taleggio the big cheese paneer cheese strings port-salut danish fontina cream cheese","Cheese triangles emmental gouda monterey jack the big cheese smelly cheese stilton emmental","Cottage cheese danish fontina cheesecake cow cow chalk and cheese cheesy feet red leicester","Camembert de normandie halloumi the big cheese boursin edam say cheese cheeseburger ricotta","Dolcelatte boursin cheesy feet manchego stinking bishop brie chalk and cheese red leicester","Feta pepper jack everyone loves cheeseburger ricotta cream cheese cheesy grin monterey jack","Gouda halloumi fromage stilton when the cheese comes out everybody's happy rubber cheese st","Airedale rubber cheese squirty cheese cheese and biscuits edam cottage cheese goat parmesan","Camembert de normandie croque monsieur taleggio mascarpone taleggio swiss cheddar roquefort","Gouda croque monsieur caerphilly cheese on toast goat manchego cheese triangles pepper jack","Taleggio cut the cheese cheese slices the big cheese rubber cheese mascarpone fromage frais","Chalk and cheese brie blue castello cream cheese cream cheese pecorino croque monsieur feta","Ricotta cauliflower cheese paneer feta babybel monterey jack danish fontina macaroni cheese","Pecorino manchego cheeseburger edam bavarian bergkase cheesecake stinking bishop mozzarella","Cut the cheese who moved my cheese cow jarlsberg dolcelatte ricotta cheesy grin cheesy grin","Port-salut cheeseburger ricotta say cheese blue castello pepper jack parmesan smelly cheese","Parmesan cheesecake swiss smelly cheese hard cheese smelly cheese squirty cheese mascarpone","Cheesy feet danish fontina chalk and cheese pecorino swiss fromage cheese slices say cheese","Agur blue cheese bavarian bergkase everyone loves croque monsieur cheese slices cheesy grin","Cheese and wine halloumi cheesy grin ricotta cheesecake cheesecake mozzarella fromage frais","Cheese on toast who moved my cheese airedale dolcelatte parmesan say cheese mozzarella goat","Cheddar taleggio chalk and cheese fromage feta chalk and cheese cheese and biscuits stilton"],Be=s=>JSON.parse(JSON.stringify(s));function pt(){const{subscribe:s,set:e,update:t}=Je(Be(Re));return{subscribe:s,set:e,update:t,reset:()=>e(Be(Re))}}const ne=pt(),$e=Je("");function ut(s){let e,t,r,o,l,a;return{c(){e=y("label"),t=W(s[1]),r=W(`:
	`),o=y("input"),this.h()},l(i){e=k(i,"LABEL",{disabled:!0});var n=T(e);t=J(n,s[1]),r=J(n,`:
	`),o=k(n,"INPUT",{style:!0,type:!0,class:!0}),n.forEach(b),this.h()},h(){je(o,"height","20px"),je(o,"width","30px"),h(o,"type","color"),o.disabled=s[2],h(o,"class","svelte-1wlq98v"),h(e,"disabled",s[2])},m(i,n){A(i,e,n),m(e,t),m(e,r),m(e,o),Ve(o,s[0]),l||(a=[B(o,"input",s[3]),B(o,"change",s[4]),B(o,"input",s[5])],l=!0)},p(i,[n]){n&2&&ge(t,i[1]),n&4&&(o.disabled=i[2]),n&1&&Ve(o,i[0]),n&4&&h(e,"disabled",i[2])},i:Z,o:Z,d(i){i&&b(e),l=!1,fe(a)}}}function ft(s,e,t){let{color:r="#000000"}=e,{label:o=""}=e,{disabled:l=!1}=e;function a(p){xe.call(this,s,p)}function i(p){xe.call(this,s,p)}function n(){r=this.value,t(0,r)}return s.$$set=p=>{"color"in p&&t(0,r=p.color),"label"in p&&t(1,o=p.label),"disabled"in p&&t(2,l=p.disabled)},[r,o,l,a,i,n]}class ue extends re{constructor(e){super(),oe(this,e,ft,ut,se,{color:0,label:1,disabled:2})}}function gt(s){let e,t,r,o,l,a,i,n,p,g,S,x,C,u,f,c,_,z,G,I,v,w,d,E,j,P,ee="Reset",R,te,ce;function me(D){s[9](D)}let he={label:"Text color"};s[0]!==void 0&&(he.color=s[0]),o=new ue({props:he}),N.push(()=>U(o,"color",me));function ve(D){s[10](D)}let Se={label:"Shadow color"};s[1]!==void 0&&(Se.color=s[1]),n=new ue({props:Se}),N.push(()=>U(n,"color",ve)),n.$on("input",s[7]),n.$on("change",s[7]);function et(D){s[11](D)}let Ee={label:"Left gradient"};s[2]!==void 0&&(Ee.color=s[2]),x=new ue({props:Ee}),N.push(()=>U(x,"color",et));function tt(D){s[12](D)}let Te={label:"Right gradient"};return s[3]!==void 0&&(Te.color=s[3]),c=new ue({props:Te}),N.push(()=>U(c,"color",tt)),{c(){e=y("div"),t=y("div"),r=y("div"),Y(o.$$.fragment),a=V(),i=y("div"),Y(n.$$.fragment),g=V(),S=y("div"),Y(x.$$.fragment),u=V(),f=y("div"),Y(c.$$.fragment),z=V(),G=y("div"),I=y("label"),v=W("Invert shadow"),w=y("input"),d=V(),E=y("div"),j=y("div"),P=y("button"),P.textContent=ee,this.h()},l(D){e=k(D,"DIV",{class:!0});var q=T(e);t=k(q,"DIV",{class:!0});var H=T(t);r=k(H,"DIV",{class:!0});var ae=T(r);K(o.$$.fragment,ae),ae.forEach(b),a=M(H),i=k(H,"DIV",{class:!0});var le=T(i);K(n.$$.fragment,le),le.forEach(b),g=M(H),S=k(H,"DIV",{class:!0});var ie=T(S);K(x.$$.fragment,ie),ie.forEach(b),u=M(H),f=k(H,"DIV",{class:!0});var Ge=T(f);K(c.$$.fragment,Ge),Ge.forEach(b),z=M(H),G=k(H,"DIV",{class:!0});var Ie=T(G);I=k(Ie,"LABEL",{class:!0});var be=T(I);v=J(be,"Invert shadow"),w=k(be,"INPUT",{type:!0,name:!0,class:!0}),be.forEach(b),Ie.forEach(b),H.forEach(b),d=M(q),E=k(q,"DIV",{class:!0});var De=T(E);j=k(De,"DIV",{class:!0});var ze=T(j);P=k(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),$(P)!=="svelte-rhidub"&&(P.textContent=ee),ze.forEach(b),De.forEach(b),q.forEach(b),this.h()},h(){h(r,"class","filter svelte-dfhvfy"),h(i,"class","filter svelte-dfhvfy"),h(S,"class","filter svelte-dfhvfy"),h(f,"class","filter svelte-dfhvfy"),h(w,"type","checkbox"),h(w,"name",""),w.checked=s[4],h(w,"class","svelte-dfhvfy"),h(I,"class","svelte-dfhvfy"),h(G,"class","filter svelte-dfhvfy"),h(t,"class","row svelte-dfhvfy"),h(P,"class","svelte-dfhvfy"),h(j,"class","filter button svelte-dfhvfy"),h(E,"class","row reset svelte-dfhvfy"),h(e,"class","form svelte-dfhvfy")},m(D,q){A(D,e,q),m(e,t),m(t,r),Q(o,r,null),m(t,a),m(t,i),Q(n,i,null),m(t,g),m(t,S),Q(x,S,null),m(t,u),m(t,f),Q(c,f,null),m(t,z),m(t,G),m(G,I),m(I,v),m(I,w),m(e,d),m(e,E),m(E,j),m(j,P),R=!0,te||(ce=[B(w,"click",s[13]),B(P,"click",s[14])],te=!0)},p(D,[q]){const H={};!l&&q&1&&(l=!0,H.color=D[0],O(()=>l=!1)),o.$set(H);const ae={};!p&&q&2&&(p=!0,ae.color=D[1],O(()=>p=!1)),n.$set(ae);const le={};!C&&q&4&&(C=!0,le.color=D[2],O(()=>C=!1)),x.$set(le);const ie={};!_&&q&8&&(_=!0,ie.color=D[3],O(()=>_=!1)),c.$set(ie),(!R||q&16)&&(w.checked=D[4])},i(D){R||(F(o.$$.fragment,D),F(n.$$.fragment,D),F(x.$$.fragment,D),F(c.$$.fragment,D),R=!0)},o(D){L(o.$$.fragment,D),L(n.$$.fragment,D),L(x.$$.fragment,D),L(c.$$.fragment,D),R=!1},d(D){D&&b(e),X(o),X(n),X(x),X(c),te=!1,fe(ce)}}}function mt(s){s=s.replace("#",""),s.length===3&&(s=s.split("").map(function(l){return l+l}).join(""));var e=parseInt(s,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]}function vt(s){const e=s.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);if(!e)return null;const t=e.map(o=>{if(o.startsWith("#"))return"#"+(16777215-parseInt(o.slice(1),16)).toString(16).padStart(6,"0");if(o.startsWith("rgb")){const l=o.match(/\d+(\.\d+)?%?/g),a=l.pop();return`rgb(${l.map(n=>255-parseFloat(n)).join(" ")} / ${a})`}});let r=s;return e.forEach((o,l)=>{r=r.replace(o,t[l])}),r}function Ne(s){if(s.indexOf("#")===0&&(s=s.slice(1)),s.length===3&&(s=s.split("").map(function(o){return o+o}).join("")),s.length!==6)throw new Error("Invalid HEX color.");var e=(255-parseInt(s.slice(0,2),16)).toString(16),t=(255-parseInt(s.slice(2,4),16)).toString(16),r=(255-parseInt(s.slice(4,6),16)).toString(16);return"#"+String(e).padStart(2,"0")+String(t).padStart(2,"0")+String(r).padStart(2,"0")}function bt(s,e,t){let r,o;ye(s,ne,d=>t(15,o=d));let{mainTextColor:l}=e,{mainShadowColor:a}=e,{leftGradColor:i}=e,{rightGradColor:n}=e,{invert:p=!1}=e;function g(){t(0,l=Ye),t(2,i=Ke),t(3,n=Qe),t(1,a=Xe),t(8,p=!1),ne.reset()}function S(){f(),C(),x()}function x(){t(1,a=Ne(a))}function C(){t(0,l=Ne(l))}function u(){const d=[...o].map((E,j)=>(E.shadow=c(E.shadow),E));ne.update(()=>d)}function f(){const d=[...o].map((E,j)=>(E.shadowSource===void 0&&(E.shadowSource=E.shadow),p===!1?E.shadow=vt(E.shadow):E.shadow=E.shadowSource,E));ne.update(()=>d),t(8,p=!p)}function c(d){const E=a,j=d.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);if(!j)return null;const P=j.map(R=>{if(R.startsWith("#"))return E;if(R.startsWith("rgb")){const ce=R.match(/\d+(\.\d+)?%?/g).pop(),[me,he,ve]=mt(E);return`rgb(${me} ${he} ${ve} / ${ce})`}});let ee=d;return j.forEach((R,te)=>{ee=ee.replace(R,P[te])}),ee}function _(d){l=d,t(0,l)}function z(d){a=d,t(1,a)}function G(d){i=d,t(2,i)}function I(d){n=d,t(3,n)}const v=d=>S(),w=()=>g();return s.$$set=d=>{"mainTextColor"in d&&t(0,l=d.mainTextColor),"mainShadowColor"in d&&t(1,a=d.mainShadowColor),"leftGradColor"in d&&t(2,i=d.leftGradColor),"rightGradColor"in d&&t(3,n=d.rightGradColor),"invert"in d&&t(8,p=d.invert)},s.$$.update=()=>{s.$$.dirty&256&&t(4,r=p)},[l,a,i,n,r,g,S,u,p,_,z,G,I,v,w]}class _t extends re{constructor(e){super(),oe(this,e,bt,gt,se,{mainTextColor:0,mainShadowColor:1,leftGradColor:2,rightGradColor:3,invert:8})}}function Oe(s,e,t){const r=s.slice();return r[14]=e[t].shadow,r[15]=e[t].source,r[16]=e[t].id,r[18]=t,r}function Ue(s,e){let t,r,o,l;return r=new ht({props:{imageMode:e[5],id:e[16],mainTextColor:e[0],leftGradColor:e[1],rightGradColor:e[2],shadow:e[14],source:e[15],text:pe[e[18]]||pe[0]}}),{key:s,first:null,c(){t=y("div"),Y(r.$$.fragment),o=V(),this.h()},l(a){t=k(a,"DIV",{class:!0});var i=T(t);K(r.$$.fragment,i),o=M(i),i.forEach(b),this.h()},h(){h(t,"class","shadow-item svelte-190mnan"),Me(t,"list",e[5]),this.first=t},m(a,i){A(a,t,i),Q(r,t,null),m(t,o),l=!0},p(a,i){e=a;const n={};i&32&&(n.imageMode=e[5]),i&128&&(n.id=e[16]),i&1&&(n.mainTextColor=e[0]),i&2&&(n.leftGradColor=e[1]),i&4&&(n.rightGradColor=e[2]),i&128&&(n.shadow=e[14]),i&128&&(n.source=e[15]),i&128&&(n.text=pe[e[18]]||pe[0]),r.$set(n),(!l||i&32)&&Me(t,"list",e[5])},i(a){l||(F(r.$$.fragment,a),l=!0)},o(a){L(r.$$.fragment,a),l=!1},d(a){a&&b(t),X(r)}}}function wt(s){let e,t,r,o,l,a,i,n,p,g=[],S=new Map,x;function C(v){s[9](v)}function u(v){s[10](v)}function f(v){s[11](v)}function c(v){s[12](v)}function _(v){s[13](v)}let z={};s[4]!==void 0&&(z.invert=s[4]),s[3]!==void 0&&(z.mainShadowColor=s[3]),s[0]!==void 0&&(z.mainTextColor=s[0]),s[1]!==void 0&&(z.leftGradColor=s[1]),s[2]!==void 0&&(z.rightGradColor=s[2]),t=new _t({props:z}),N.push(()=>U(t,"invert",C)),N.push(()=>U(t,"mainShadowColor",u)),N.push(()=>U(t,"mainTextColor",f)),N.push(()=>U(t,"leftGradColor",c)),N.push(()=>U(t,"rightGradColor",_));let G=He(s[7]);const I=v=>v[16];for(let v=0;v<G.length;v+=1){let w=Oe(s,G,v),d=I(w);S.set(d,g[v]=Ue(d,w))}return{c(){e=y("div"),Y(t.$$.fragment),n=V(),p=y("div");for(let v=0;v<g.length;v+=1)g[v].c();this.h()},l(v){e=k(v,"DIV",{class:!0});var w=T(e);K(t.$$.fragment,w),n=M(w),p=k(w,"DIV",{class:!0,style:!0});var d=T(p);for(let E=0;E<g.length;E+=1)g[E].l(d);d.forEach(b),w.forEach(b),this.h()},h(){h(p,"class","shadows-list svelte-190mnan"),h(p,"style",s[6]),h(e,"class","shadows")},m(v,w){A(v,e,w),Q(t,e,null),m(e,n),m(e,p);for(let d=0;d<g.length;d+=1)g[d]&&g[d].m(p,null);x=!0},p(v,[w]){const d={};!r&&w&16&&(r=!0,d.invert=v[4],O(()=>r=!1)),!o&&w&8&&(o=!0,d.mainShadowColor=v[3],O(()=>o=!1)),!l&&w&1&&(l=!0,d.mainTextColor=v[0],O(()=>l=!1)),!a&&w&2&&(a=!0,d.leftGradColor=v[1],O(()=>a=!1)),!i&&w&4&&(i=!0,d.rightGradColor=v[2],O(()=>i=!1)),t.$set(d),w&167&&(G=He(v[7]),ke(),g=at(g,w,I,1,v,G,S,p,ot,Ue,null,Oe),Ce()),(!x||w&64)&&h(p,"style",v[6])},i(v){if(!x){F(t.$$.fragment,v);for(let w=0;w<G.length;w+=1)F(g[w]);x=!0}},o(v){L(t.$$.fragment,v);for(let w=0;w<g.length;w+=1)L(g[w]);x=!1},d(v){v&&b(e),X(t);for(let w=0;w<g.length;w+=1)g[w].d()}}}function xt(s,e,t){let r,o,l,a;ye(s,$e,_=>t(8,l=_)),ye(s,ne,_=>t(7,a=_));let i=Ye,n=Ke,p=Qe,g=Xe,S=!1;function x(_){S=_,t(4,S)}function C(_){g=_,t(3,g)}function u(_){i=_,t(0,i)}function f(_){n=_,t(1,n)}function c(_){p=_,t(2,p)}return s.$$.update=()=>{s.$$.dirty&256&&t(6,r=`background-image: url("${l}");`),s.$$.dirty&256&&t(5,o=l!=="")},[i,n,p,g,S,o,r,a,l,x,C,u,f,c]}class yt extends re{constructor(e){super(),oe(this,e,xt,wt,se,{})}}function kt(s){let e,t="Error while reading the file",r,o,l="please upload a valid image";return{c(){e=y("div"),e.textContent=t,r=V(),o=y("div"),o.textContent=l,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-ppfiln"&&(e.textContent=t),r=M(a),o=k(a,"DIV",{class:!0,"data-svelte-h":!0}),$(o)!=="svelte-12lghyb"&&(o.textContent=l),this.h()},h(){h(e,"class","drag-error-title svelte-1t9cz4n"),h(o,"class","drag-error-hint svelte-1t9cz4n")},m(a,i){A(a,e,i),A(a,r,i),A(a,o,i)},p:Z,d(a){a&&(b(e),b(r),b(o))}}}function Ct(s){let e,t,r=s[2].name+"",o;return{c(){e=y("div"),t=y("div"),o=W(r),this.h()},l(l){e=k(l,"DIV",{});var a=T(e);t=k(a,"DIV",{class:!0});var i=T(t);o=J(i,r),i.forEach(b),a.forEach(b),this.h()},h(){h(t,"class","drag-filename svelte-1t9cz4n")},m(l,a){A(l,e,a),m(e,t),m(t,o)},p(l,a){a&4&&r!==(r=l[2].name+"")&&ge(o,r)},d(l){l&&b(e)}}}function St(s){let e,t,r,o;const l=[Tt,Et],a=[];function i(n,p){return n[3]?0:1}return r=i(s),o=a[r]=l[r](s),{c(){e=y("div"),t=y("div"),o.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var p=T(e);t=k(p,"DIV",{class:!0});var g=T(t);o.l(g),g.forEach(b),p.forEach(b),this.h()},h(){h(t,"class","drag-callout-title svelte-1t9cz4n"),h(e,"class","drag-callout svelte-1t9cz4n")},m(n,p){A(n,e,p),m(e,t),a[r].m(t,null)},p(n,p){let g=r;r=i(n),r!==g&&(ke(),L(a[g],1,1,()=>{a[g]=null}),Ce(),o=a[r],o||(o=a[r]=l[r](n),o.c()),F(o,1),o.m(t,null))},d(n){n&&b(e),a[r].d()}}}function Et(s){let e,t,r,o,l,a='Drop your image or <span class="underline svelte-1t9cz4n">select it</span>';return{c(){e=_e("svg"),t=_e("path"),r=_e("path"),o=V(),l=y("div"),l.innerHTML=a,this.h()},l(i){e=we(i,"svg",{class:!0,xmlns:!0,height:!0,viewBox:!0,width:!0});var n=T(e);t=we(n,"path",{d:!0,fill:!0}),T(t).forEach(b),r=we(n,"path",{d:!0}),T(r).forEach(b),n.forEach(b),o=M(i),l=k(i,"DIV",{"data-svelte-h":!0}),$(l)!=="svelte-1s166ab"&&(l.innerHTML=a),this.h()},h(){h(t,"d","M0 0h24v24H0z"),h(t,"fill","none"),h(r,"d","M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"),h(e,"class","drag-icon"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"height","24"),h(e,"viewBox","0 0 24 24"),h(e,"width","24")},m(i,n){A(i,e,n),m(e,t),m(e,r),A(i,o,n),A(i,l,n)},i:Z,o:Z,d(i){i&&(b(e),b(o),b(l))}}}function Tt(s){let e,t='Loading<span class="svelte-1t9cz4n">.</span><span class="svelte-1t9cz4n">.</span><span class="svelte-1t9cz4n">.</span>',r,o;return{c(){e=y("div"),e.innerHTML=t,this.h()},l(l){e=k(l,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-lbx8aj"&&(e.innerHTML=t),this.h()},h(){h(e,"class","loading-msg svelte-1t9cz4n")},m(l,a){A(l,e,a),o=!0},i(l){o||(r&&r.end(1),o=!0)},o(l){l&&(r=We(e,Ze,{duration:1e3})),o=!1},d(l){l&&b(e),l&&r&&r.end()}}}function Gt(s){let e,t,r,o,l,a,i,n,p,g;function S(u,f){return u[4]&&!u[5]?St:u[5]?Ct:kt}let x=S(s),C=x(s);return{c(){e=y("div"),t=y("form"),r=y("div"),o=y("input"),l=V(),a=y("label"),C.c(),this.h()},l(u){e=k(u,"DIV",{class:!0});var f=T(e);t=k(f,"FORM",{class:!0,method:!0,enctype:!0});var c=T(t);r=k(c,"DIV",{class:!0});var _=T(r);o=k(_,"INPUT",{id:!0,class:!0,accept:!0,type:!0}),l=M(_),a=k(_,"LABEL",{for:!0,class:!0});var z=T(a);C.l(z),z.forEach(b),_.forEach(b),c.forEach(b),f.forEach(b),this.h()},h(){h(o,"id","file"),h(o,"class","drag-file svelte-1t9cz4n"),h(o,"accept","text"),h(o,"type","file"),h(a,"for","file"),h(a,"class","svelte-1t9cz4n"),h(r,"class",i=de(["drag-input",s[5]?"is-uploaded":""].join(" "))+" svelte-1t9cz4n"),h(t,"class",n=de(["drag",s[1]?"is-dragging":""].join(" "))+" svelte-1t9cz4n"),h(t,"method","post"),h(t,"enctype","multipart/form-data"),h(e,"class","data-input svelte-1t9cz4n")},m(u,f){A(u,e,f),m(e,t),m(t,r),m(r,o),m(r,l),m(r,a),C.m(a,null),p||(g=[B(o,"change",s[8]),B(t,"dragover",Ae(s[7])),B(t,"dragenter",s[9]),B(t,"dragleave",s[10]),B(t,"drop",rt(Ae(s[6])))],p=!0)},p(u,[f]){x===(x=S(u))&&C?C.p(u,f):(C.d(1),C=x(u),C&&(C.c(),C.m(a,null))),f&32&&i!==(i=de(["drag-input",u[5]?"is-uploaded":""].join(" "))+" svelte-1t9cz4n")&&h(r,"class",i),f&2&&n!==(n=de(["drag",u[1]?"is-dragging":""].join(" "))+" svelte-1t9cz4n")&&h(t,"class",n)},i:Z,o:Z,d(u){u&&b(e),C.d(),p=!1,fe(g)}}}function It(s,e,t){let r,o,l=!1,a,i,n=!1;function p(f){const[c]=f.dataTransfer.files;g(c)}function g(f){const c=new FileReader;if(f.type.match("image")){t(3,n=!0),c.onload=()=>{t(5,o=!0),t(2,i=f),$e.set(c.result),t(3,n=!1)},c.readAsDataURL(f);return}else t(5,o=!1),t(4,r=!1)}function S(f){xe.call(this,s,f)}function x(){a=this.files,t(0,a)}const C=()=>t(1,l=!0),u=()=>t(1,l=!1);return s.$$.update=()=>{if(s.$$.dirty&1&&a){const[f]=a;g(f)}},t(4,r=!0),t(5,o=!1),[a,l,i,n,r,o,p,S,x,C,u]}class Dt extends re{constructor(e){super(),oe(this,e,It,Gt,se,{})}}function zt(s){let e,t,r,o,l,a,i,n,p,g,S,x=`Optionally, you can upload an image, for example a satellite image or a map, to find the shadow
		that best suits your needs.`,C,u,f,c,_=`<p>This shadows have been collected from media like The New York Times, Washington Post, Reuters
			Graphics, Propublica, Bloomberg or El País. Some of them have been slightly modified to fit
			the default black/white scheme. This feature is especially useful in combination with <a href="http://ai2html.org/">ai2html</a> or for highlighting text on any kind of graphic, map or photo.</p> <p>You can change text color or shadow color, the background or even invert that configuration.
			Click on a shadow block to copy that shadow to your clipboard.</p> <p>Feel free to suggest your own shadows to make this collection bigger or make a <a href="https://github.com/luissevillano/chessie-shadow-picker">fork</a> to improve it.</p>`,z;return p=new yt({}),u=new Dt({}),{c(){e=y("main"),t=y("header"),r=y("h1"),o=W(Pe),l=V(),a=y("h3"),i=W(Fe),n=V(),Y(p.$$.fragment),g=V(),S=y("p"),S.textContent=x,C=V(),Y(u.$$.fragment),f=V(),c=y("div"),c.innerHTML=_,this.h()},l(G){e=k(G,"MAIN",{class:!0});var I=T(e);t=k(I,"HEADER",{class:!0});var v=T(t);r=k(v,"H1",{class:!0});var w=T(r);o=J(w,Pe),w.forEach(b),l=M(v),a=k(v,"H3",{class:!0});var d=T(a);i=J(d,Fe),d.forEach(b),v.forEach(b),n=M(I),K(p.$$.fragment,I),g=M(I),S=k(I,"P",{"data-svelte-h":!0}),$(S)!=="svelte-afljdg"&&(S.textContent=x),C=M(I),K(u.$$.fragment,I),f=M(I),c=k(I,"DIV",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-1da22g"&&(c.innerHTML=_),I.forEach(b),this.h()},h(){h(r,"class","svelte-r9swyj"),h(a,"class","svelte-r9swyj"),h(t,"class","svelte-r9swyj"),h(c,"class","svelte-r9swyj"),h(e,"class","svelte-r9swyj")},m(G,I){A(G,e,I),m(e,t),m(t,r),m(r,o),m(t,l),m(t,a),m(a,i),m(e,n),Q(p,e,null),m(e,g),m(e,S),m(e,C),Q(u,e,null),m(e,f),m(e,c),z=!0},p:Z,i(G){z||(F(p.$$.fragment,G),F(u.$$.fragment,G),z=!0)},o(G){L(p.$$.fragment,G),L(u.$$.fragment,G),z=!1},d(G){G&&b(e),X(p),X(u)}}}class Pt extends re{constructor(e){super(),oe(this,e,null,zt,se,{})}}export{Pt as component};