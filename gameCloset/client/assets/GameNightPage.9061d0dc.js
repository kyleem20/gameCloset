import{_ as E,b as g,c as S,l as v,a as d,A as h}from"./index.1cb2c835.js";import{g as j,u as A,r as I,H as M,c as u,a as p,o as a,b as i,d as t,h as F,i as T,v as P,F as b,k as x,p as V,j as B,G as D,e as y,B as N,m,t as c,n as H}from"./vendor.b0e93d7b.js";const z={setup(){const n=j(""),r=A(),f=I({editable:{}});return M(async()=>{try{await g.getMyGameNights("/account/gamenight"),await S.getMyGames("/account/myGames")}catch(s){v.error(s),d.toast(s.message,"error")}}),{search:n,state:f,closetGames:u(()=>h.myGames.filter(s=>s.owned)),myGameNights:u(()=>h.myGameNights),myAttendance:u(()=>h.myAttendance),account:u(()=>h.account),async deleteGameNight(s){try{if(!await d.confirm("Delete your game night?"))return;const _=await g.delete(s);d.toast("Deleted","success")}catch(o){v.error(o),d.toast("Something went wrong deleting this GameNight!","error")}},async cancelGameNight(s){try{if(!await d.confirm("Cancel your game night?"))return;await g.cancel(s),d.toast("You've canceled your event.","success")}catch(o){v.error(o),d.toast(o.message,"error")}},async findGameNight(){try{await g.findGameNight(n.value)?(n.value="",r.push({name:"GameNightDetails",params:{id:h.activeGameNight.id}})):d.toast("No game night found","error")}catch(s){v.error(s)}},setActive(s){h.activeGameNight=s},formatDate(s){return new Date(s).toLocaleString()},compareDate(s){let o=Date.parse(s),_=Date.now();if(_>o)return"This game night has passed.";if(_<o)return""}}}},l=n=>(V("data-v-4377f9be"),n=n(),B(),n),L={class:"gameNight container-fluid p-5"},q=l(()=>t("div",{class:"row"},[t("div",{class:"col text-center"},[t("h1",{class:"text-light"},"GAME NIGHTS")])],-1)),J={class:"row"},O={class:"col-md-3 my-3 text-center"},R={class:"input-group mb-3"},U=l(()=>t("button",{class:"btn btn-outline-light",title:"Find Game"}," Find Game ",-1)),Y=l(()=>t("h3",{class:"text-light"},"Hosted Game Nights:",-1)),K={class:"col"},Q={class:"row justify-content-center"},W={class:"col-md-8 mt-3 card elevation-2 selectable grow",title:"Game Night Details"},X={class:"row"},Z={class:"col"},$={class:"col text-end dropdown"},tt=l(()=>t("i",{class:"rounded p-2 mdi mdi-dots-horizontal mdi-24px text-dark selectable dropdown-toggle","data-bs-toggle":"dropdown",title:"Options"},null,-1)),et={class:"dropdown-menu"},st=["data-bs-target"],ot=l(()=>t("button",{class:"dropdown-item selectable text-primary"}," Edit Event ",-1)),at=[ot],it=["onClick"],ct=["onClick"],nt={class:"row"},dt={class:"col-6 mt-2"},lt={class:"col-6 mt-2 text-end"},rt={key:0,class:"row justify-content-center"},ht={class:"col-md-6 my-3"},mt={class:"row"},_t={class:"col"},gt={class:"text-danger"},vt={class:"row"},ut={class:"col"},yt={key:1,class:"row justify-content-center text-danger"},Nt=l(()=>t("div",{class:"col-md-6 my-3"},[t("div",{class:"row"},[t("div",{class:"col"},[t("h5",null,"This game night has been canceled.")])])],-1)),wt=[Nt],pt=H("Edit your game night!"),ft={class:"row"},Gt={class:"col"},bt=l(()=>t("h3",{class:"text-light my-4"},"Joined Game Nights:",-1)),xt={key:0,class:"col"},Dt={class:"row justify-content-center"},kt={class:"col-md-8 m-3 card elevation-2 selectable grow",title:"Game Night Details"},Ct={class:"row"},Et={class:"col"},St={class:"row"},jt={class:"col-6 mt-2"},At={class:"col-6 mt-2 text-end"},It={key:0,class:"row justify-content-center"},Mt={class:"col-md-6 my-3"},Ft={class:"row"},Tt={class:"col"},Pt={class:"text-danger"},Vt={class:"row"},Bt={class:"col"},Ht={key:1,class:"row justify-content-center text-danger"},zt=l(()=>t("div",{class:"col-md-6 my-3"},[t("div",{class:"row"},[t("div",{class:"col"},[t("h5",null,"This game night has been canceled.")])])],-1)),Lt=[zt];function qt(n,r,f,s,o,_){const G=p("router-link"),k=p("EditForm"),C=p("Modal");return a(),i("div",L,[q,t("div",J,[t("div",O,[t("form",{onSubmit:r[1]||(r[1]=F((...e)=>s.findGameNight&&s.findGameNight(...e),["prevent"]))},[t("div",R,[T(t("input",{required:"","onUpdate:modelValue":r[0]||(r[0]=e=>s.search=e),type:"text",class:"form-control",placeholder:"Enter code...","aria-label":"Enter code...","aria-describedby":"button-addon2",maxlength:"6"},null,512),[[P,s.search]]),U])],32)])]),Y,(a(!0),i(b,null,x(s.myGameNights,e=>(a(),i("div",{class:"row",key:e.id},[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("div",Z,[t("div",$,[tt,t("ul",et,[t("li",{"data-bs-toggle":"modal","data-bs-target":"#editGameNight-"+e.id},at,8,st),t("li",null,[t("button",{class:"dropdown-item selectable text-primary",onClick:w=>s.cancelGameNight(e.id)}," Cancel Event ",8,it)]),t("li",null,[t("button",{class:"dropdown-item selectable text-danger",onClick:w=>s.deleteGameNight(e.id)}," Delete Event ",8,ct)])])])])]),t("div",null,[t("div",{class:D(e.isCanceled?"disabled":"")},[y(G,{to:{name:"GameNightDetails",params:{id:e.id}},onClick:w=>s.setActive(e)},{default:N(()=>[t("div",nt,[t("div",dt,[t("h4",null,c(e.name),1)]),t("div",lt,[t("h5",null,"Game Pin: "+c(e.pin),1)])]),e.isCanceled?m("",!0):(a(),i("div",rt,[t("div",ht,[t("div",mt,[t("div",_t,[t("h3",gt,c(s.compareDate(e.gameNightDate)),1),t("h5",null,c(s.formatDate(e.gameNightDate)),1)])]),t("div",vt,[t("div",ut,[t("h5",null,c(e.location),1)])])])])),e.isCanceled?(a(),i("div",yt,wt)):m("",!0)]),_:2},1032,["to","onClick"])],2)])])])]),y(C,{id:"editGameNight-"+e.id},{"modal-title":N(()=>[pt]),"modal-body":N(()=>[y(k,{gameNight:e},null,8,["gameNight"])]),_:2},1032,["id"])]))),128)),t("div",ft,[t("div",Gt,[bt,(a(!0),i(b,null,x(s.myAttendance,e=>(a(),i("div",{class:"row",key:e.gameNightId},[e.gameNight.accountId!==s.account.id?(a(),i("div",xt,[t("div",Dt,[t("div",kt,[t("div",Ct,[t("div",Et,[t("div",null,[t("div",{class:D(e.gameNight.isCanceled?"disabled":"")},[y(G,{to:{name:"GameNightDetails",params:{id:e.gameNightId}},onClick:w=>s.setActive(e.gameNight)},{default:N(()=>[t("div",St,[t("div",jt,[t("h4",null,c(e.gameNight.name),1)]),t("div",At,[t("h5",null,"Game Pin: "+c(e.gameNight.pin),1)])]),e.gameNight.isCanceled?m("",!0):(a(),i("div",It,[t("div",Mt,[t("div",Ft,[t("div",Tt,[t("h3",Pt,c(s.compareDate(e.gameNight.gameNightDate)),1),t("h5",null,c(s.formatDate(e.gameNight.gameNightDate)),1)])]),t("div",Vt,[t("div",Bt,[t("h5",null,c(e.gameNight.location),1)])])])])),e.gameNight.isCanceled?(a(),i("div",Ht,Lt)):m("",!0)]),_:2},1032,["to","onClick"])],2)])])])])])])):m("",!0)]))),128))])])])}var Rt=E(z,[["render",qt],["__scopeId","data-v-4377f9be"]]);export{Rt as default};
