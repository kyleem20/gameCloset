import{H as x,c as r,a as c,o,b as a,d as n,m as d,F as m,k as f,p as k,j as b,e as l,B as i,T as C,n as v,t as A}from"./vendor.b0e93d7b.js";import{_ as S,c as j,l as I,a as D,d as M,A as _}from"./index.1cb2c835.js";const P={name:"Home",setup(){return x(async()=>{try{await j.getMyGames("/account/myGames")}catch(s){I.error(s),D.toast(s.message,"error")}}),{user:r(()=>_.user),closetGames:r(()=>_.myGames.filter(s=>s.owned)),wishlistGames:r(()=>_.myGames.filter(s=>!s.owned)),async login(){M.loginWithPopup()}}}},h=s=>(k("data-v-06c37b55"),s=s(),b(),s),B={key:0,class:"home flex-grow-1 d-flex flex-column align-items-center justify-content-center"},F={key:1,class:"game-closet p-5"},N={class:"container-fluid"},R={class:"row"},V={key:0,class:"col mt-2 text-light"},T=h(()=>n("h1",null,"Go to Search to add Games!",-1)),H=[T],O={key:1,class:"col mt-2 text-light"},W=h(()=>n("h1",null,"My Game Closet",-1)),E=[W],L={class:"row"},q=v("Add Rules"),z={key:0,class:"row"},J=h(()=>n("div",{class:"col text-light mt-5"},[n("h1",null,"Wishlist")],-1)),K={class:"row"};function Q(s,u,U,t,X,Y){const g=c("Game"),p=c("AddRulesForm"),y=c("Modal"),G=c("GameDetails"),w=c("OffCanvas");return o(),a(m,null,[t.user.isAuthenticated?d("",!0):(o(),a("div",B,[n("h1",{onClick:u[0]||(u[0]=(...e)=>t.login&&t.login(...e)),class:"selectable"},"Please sign in to view your games")])),t.user.isAuthenticated?(o(),a("div",F,[n("div",N,[n("div",R,[t.closetGames.length==0&&t.wishlistGames.length==0?(o(),a("div",V,H)):t.closetGames.length>0?(o(),a("div",O,E)):d("",!0),n("div",L,[(o(!0),a(m,null,f(t.closetGames,e=>(o(),a("div",{class:"col-md-4 d-flex justify-content-center",key:e.atlasGameId},[l(C,{name:"add"},{default:i(()=>[l(g,{game:e},null,8,["game"])]),_:2},1024),l(y,{id:"addRules-"+e.id},{"modal-title":i(()=>[q]),"modal-body":i(()=>[l(p,{game:e},null,8,["game"])]),_:2},1032,["id"]),l(w,{id:"gameDetails-"+e.id},{"offcanvas-title":i(()=>[v(A(e.name)+" Details",1)]),"offcanvas-body":i(()=>[l(G,{game:e},null,8,["game"])]),_:2},1032,["id"])]))),128))])]),t.wishlistGames.length>0?(o(),a("div",z,[J,n("div",K,[(o(!0),a(m,null,f(t.wishlistGames,e=>(o(),a("div",{class:"col-md-4 d-flex justify-content-center",key:e.atlasGameId},[l(g,{game:e},null,8,["game"])]))),128))])])):d("",!0)])])):d("",!0)],64)}var ee=S(P,[["render",Q],["__scopeId","data-v-06c37b55"]]);export{ee as default};
