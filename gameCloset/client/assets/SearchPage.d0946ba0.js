import{g as p,G as u,c as n,a as g,o as i,b as l,d as e,h as f,i as b,v as y,F as x,x as w,p as G,q as S,e as A}from"./vendor.4a4b261e.js";import{_ as k,d,l as m,A as _}from"./index.04120d31.js";var j="/assets/hand-left.0ce68dec.png",I="/assets/hand.21719cd1.png";const P={setup(){let a=0,t=a;const c=p("");return u(async()=>{try{await d.getAll("/search?q="+c.value),await d.getMyGames("account/myGames")}catch(s){m.error(s)}}),{search:c,next:a,prev:t,user:n(()=>_.user),games:n(()=>_.atlasGames),myGames:n(()=>_.myGames),async searchGames(){try{await d.getAll("/search?q="+c.value),c.value=""}catch(s){m.error(s)}},async page(s){try{a+=s,await d.getAll("/search?skip="+a)}catch(h){m.error(h)}}}}},r=a=>(G("data-v-2ca97d43"),a=a(),S(),a),B={class:"container-fluid body"},M={class:"main"},q={class:"row justify-content-center"},C={class:"col-md-6"},N={class:"search"},V={class:"mb-3 m-3"},F={class:"input-group mb-3 mt-5"},D=r(()=>e("button",{class:"btn btn-outline-light",type:"submit",id:"button-addon2"}," Search ",-1)),E={class:"row"},L={class:"row footerBottom"},R={class:"col justify-content-between d-flex mt-3"},T=r(()=>e("div",{class:"col-md-3"},[e("img",{class:"handArrow",src:j,alt:""})],-1)),U=r(()=>e("div",{class:"col-md-9 mt-2 text-end"},[e("i",{class:"f-16"},"Previous Page")],-1)),z=[T,U],H=r(()=>e("div",{class:"col-md-8 mt-2 text-center"},[e("i",{class:"f-16"},"Next Page")],-1)),J=r(()=>e("div",{class:"col-md-4"},[e("img",{class:"handArrow",src:I,alt:""})],-1)),K=[H,J];function O(a,t,c,s,h,Q){const v=g("Game");return i(),l("div",B,[e("div",M,[e("div",q,[e("div",C,[e("div",N,[e("div",V,[e("form",{onSubmit:t[1]||(t[1]=f((...o)=>s.searchGames&&s.searchGames(...o),["prevent"]))},[e("div",F,[b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.search=o),type:"text",class:"form-control",placeholder:"Search Games","aria-label":"Search Games","aria-describedby":"button-addon2"},null,512),[[y,s.search]]),D])],32)])])])]),e("div",E,[(i(!0),l(x,null,w(s.games,o=>(i(),l("div",{class:"col-md-4 d-flex justify-content-center",key:o.atlasGameId},[A(v,{game:o,isSearchResult:!0},null,8,["game"])]))),128))])]),e("div",L,[e("div",R,[e("div",{class:"selectable text-light mx-4 mb-3 row",onClick:t[2]||(t[2]=o=>s.page(-24))},z),e("div",{onClick:t[3]||(t[3]=o=>s.page(24)),class:"selectable text-light mx-4 mb-3 row"},K)])])])}var Y=k(P,[["render",O],["__scopeId","data-v-2ca97d43"]]);export{Y as default};