import{_ as M,P as V,A as r,g as w,l as v,a as h,p as x,b as G,c as B,s as Q}from"./index.1cb2c835.js";import{g as j,l as O,u as R,w as T,c as _,a as C,o as i,b as n,d as e,t as d,m as l,h as D,F as b,k as f,i as L,v as E,p as F,j as z,G as J,e as I,B as A,n as P}from"./vendor.b0e93d7b.js";const U={components:{PlayerItems:V},setup(){const u=j(""),c=O(),S=R(),t=j("Choose a game!");return T(async()=>{try{if(c.params.id&&(await G.findGameNightId(c.params.id),await w.getAllGameQueue(c.params.id),await B.getMyGames("/account/myGames"),await G.getAllPlayers(c.params.id),Q.joinRoom(c.params.id)),r.activeGameNight.accountId===r.account.id){await G.getMyGameNights("/account/gamenight");const o=r.myGameNights.find(g=>g.id===c.params.id);r.activeGameNight=o,Q.joinRoom(c.params.id)}}catch(s){v.error(s),h.toast("error","error")}}),{editable:u,route:c,newGame:t,player:_(()=>r.players.find(s=>s.accountId===r.account.id)),players:_(()=>r.players),activeGameNight:_(()=>r.activeGameNight),closetGames:_(()=>r.myGames.filter(s=>s.owned)),account:_(()=>r.account),gameQueue:_(()=>r.gameQueue),sortedGameQueue:_(()=>[...r.gameQueue].sort((s,o)=>o.votes.length-s.votes.length)),arrOfNames:_(()=>r.gameQueue.map(s=>s.game.name)),formatDate(s){return new Date(s).toLocaleString()},async addGame(s){try{const o=t.value,g=r.myGames.find(N=>N.name===o);if(t.value==="Choose a game!")return;let k={gameId:g.id,gameNightId:r.activeGameNight.id};await w.addToGameQueue(k),t.value="Choose a game!"}catch(o){v.error(o),h.toast("Someone is bringing that game.","warning")}},async removeGameQueue(s){try{if(!await h.confirm("Delete your game?"))return;await w.removeGameQueue(s)}catch(o){v.error(o),h.toast(o.message,"error")}},async joinGameNight(s){try{await x.attendGameNight(s)}catch(o){v.error(o),h.toast("Something went wrong joining the game!","error")}},async vote(s){try{await w.vote(s)}catch(o){v.error(o)}},async editMyItems(){try{const s=r.players.find(o=>o.account.id===r.account.id);s.items=u.value,await x.editMyItems(s),u.value=""}catch(s){v.error(s),h.toast(s)}},async unattendGameNight(s){try{await h.confirm("Are you sure you want to leave this game night??")&&(await x.unattendGameNight(s),await G.getAllPlayers(c.params.id),S.push({name:"GameNight"}))}catch(o){v.error(o),h.toast(o)}}}}},m=u=>(F("data-v-04009247"),u=u(),z(),u),W={class:"container-fluid"},H={class:"row justify-content-center p-2"},K={class:"col-md-10 card my-2 elevation-3 px-5 py-3"},X={class:"row justify-content-center"},Y={class:"col-3"},Z={class:"m-3"},q={class:"col-md-6 text-dark text-center p-3"},$={class:"col-md-3 text-end p-1"},ee={class:"row"},te={class:"col text-dark text-center"},ae={key:0,class:"text-dark bg-warning"},se={class:"row"},oe={class:"col"},ie={key:0,class:"row mb-2"},ne={class:"col-md-4"},ce={class:"dropdown input-group"},re={class:"btn btn-secondary dropdown-toggle form-control",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",style:{"background-color":"#814cb6"}},de={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},le=["onClick"],me=m(()=>e("button",{class:"btn bg-white border border-secondary text-secondary px-2",type:"submit"},[e("i",{class:"mdi mdi-plus-thick"})],-1)),ue={class:"row"},he={class:"col-md-6"},_e=m(()=>e("h3",null,"Vote on the Game(s) to play!",-1)),ve={class:"col"},ye={class:"vote d-flex"},ge={key:0},pe=["onClick"],be=["onClick"],fe=["data-bs-target"],we=["onClick"],Ge={class:"col-md-6"},ke={class:"row justify-content-end"},Ne={class:"col-md-10 bg-primary mb-3 pb-2 mx-2"},xe=m(()=>e("div",{class:"row"},[e("div",{class:"col text-center mt-3"},[e("h3",null,[e("b",null,"Total Votes")]),e("hr")])],-1)),Ce={key:0,class:"col-9 my-2 mdi"},Ie=m(()=>e("i",{class:"mdi mdi-chess-king ms-1"},null,-1)),Se=m(()=>e("hr",null,null,-1)),Qe={key:1,class:"col-9 my-2 mdi"},je={class:"col-3 my-2"},De=m(()=>e("hr",null,null,-1)),Ae={class:"row"},Pe={class:"col-6"},Me=m(()=>e("h3",{class:"mb-5"},"What everyone's bringing...",-1)),Ve={key:0,class:"input-group"},Be=m(()=>e("button",{class:"btn btn-secondary",type:"submit"},[e("i",{class:"mdi mdi-plus-thick"})],-1)),Oe={class:"col my-2"},Re={class:"col-6 text-center"},Te=m(()=>e("h3",{class:"mb-5"},"Attending",-1)),Le={class:"col d-flex"},Ee=["src"],Fe={class:"mt-3"},ze={class:"fnt ms-3 py-1 mt-2 text-grey"};function Je(u,c,S,t,s,o){const g=C("GameDetails"),k=C("OffCanvas"),N=C("PlayerItems");return i(),n("div",W,[e("div",H,[e("div",K,[e("div",X,[e("div",Y,[e("h5",Z,"PIN: "+d(t.activeGameNight.pin),1)]),e("div",q,[e("h3",null,d(t.activeGameNight.name),1)]),e("div",$,[t.player?l("",!0):(i(),n("button",{key:0,class:"btn btn-secondary px-4",onClick:c[0]||(c[0]=a=>t.joinGameNight(t.activeGameNight.pin))}," Join ")),t.player?(i(),n("button",{key:1,class:"btn btn-danger px-4",onClick:c[1]||(c[1]=a=>t.unattendGameNight(t.player.id))}," Leave ")):l("",!0)])]),e("div",ee,[e("div",te,[e("h3",null,d(t.formatDate(t.activeGameNight.gameNightDate)),1),e("h3",null,d(t.activeGameNight.location),1),t.activeGameNight.isCancelled?(i(),n("h3",ae," Cancelled ")):l("",!0)])]),e("div",se,[e("div",oe,[t.player?(i(),n("div",ie,[e("div",ne,[e("form",{onSubmit:c[2]||(c[2]=D((...a)=>t.addGame&&t.addGame(...a),["prevent"]))},[e("div",ce,[e("button",re,d(t.newGame),1),e("ul",de,[(i(!0),n(b,null,f(t.closetGames,a=>(i(),n("li",{key:a.atlasGameId},[e("div",{class:J(["dropdown-item selectable",t.arrOfNames.includes(a.name)?"disabled":""]),onClick:y=>t.newGame=a.name},d(a.name),11,le)]))),128))]),me])],32)])])):l("",!0)])]),e("div",ue,[e("div",he,[_e,(i(!0),n(b,null,f(t.gameQueue,a=>{var y;return i(),n("div",{class:"row",key:a.id},[e("div",ve,[e("div",ye,[t.player?(i(),n("div",ge,[a.votes.includes(t.account.id)?l("",!0):(i(),n("i",{key:0,class:"mdi mdi-thumb-up-outline text-secondary f-16 pt-0 selectable h-25 me-2",onClick:p=>t.vote(a.id)},null,8,pe)),a.votes.includes(t.account.id)?(i(),n("i",{key:1,class:"mdi mdi-thumb-up text-secondary f-16 pt-0 selectable h-25 me-2",onClick:p=>t.vote(a.id)},null,8,be)):l("",!0)])):l("",!0),e("p",{class:"mb-0 selectable","data-bs-toggle":"offcanvas","data-bs-target":"#gameDetails-"+a.game.id},d((y=a.game)==null?void 0:y.name),9,fe),t.account.id===a.accountId?(i(),n("i",{key:1,class:"mdi mdi-trash-can f-20 text-danger ms-auto selectable",onClick:p=>t.removeGameQueue(a.id)},null,8,we)):l("",!0)])]),I(k,{id:"gameDetails-"+a.game.id},{"offcanvas-title":A(()=>[P(d(a.game.name)+" Details",1)]),"offcanvas-body":A(()=>[I(g,{game:a.game},null,8,["game"])]),_:2},1032,["id"])])}),128))]),e("div",Ge,[e("div",ke,[e("div",Ne,[xe,(i(!0),n(b,null,f(t.sortedGameQueue,a=>{var y,p;return i(),n("div",{class:"row",key:a.id},[a==t.sortedGameQueue[0]?(i(),n("div",Ce,[P(d((y=a.game)==null?void 0:y.name)+" ",1),Ie,Se])):(i(),n("div",Qe,d((p=a.game)==null?void 0:p.name),1)),e("div",je,d(a.votes.length),1)])}),128))])])]),De]),e("div",Ae,[e("div",Pe,[Me,e("form",{onSubmit:c[4]||(c[4]=D(a=>t.editMyItems(),["prevent"]))},[t.player?(i(),n("div",Ve,[L(e("input",{required:"",type:"text",class:"form-control",id:"items",placeholder:"Add items here...","onUpdate:modelValue":c[3]||(c[3]=a=>t.editable=a),maxlength:"1000"},null,512),[[E,t.editable]]),Be])):l("",!0)],32),(i(!0),n(b,null,f(t.players,a=>(i(),n("div",{class:"row",key:a.id},[e("div",Oe,[I(N,{player:a},null,8,["player"])])]))),128))]),e("div",Re,[Te,(i(!0),n(b,null,f(t.players,a=>(i(),n("div",{class:"row",key:a.id},[e("div",Le,[e("img",{class:"pic me-3 my-1",src:a.account.picture,alt:""},null,8,Ee),e("h5",Fe,d(a.account.name),1),e("p",ze,d(t.account.rank),1)])]))),128))])])])])])}var He=M(U,[["render",Je],["__scopeId","data-v-04009247"]]);export{He as default};
