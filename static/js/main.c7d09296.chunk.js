(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(150)},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),i=a.n(c),l=a(28),s=a(29),o=a(31),u=a(30),m=a(32),d=a(35),h=a(42),f=a.n(h),E=a(4),p=(a(25),a(58)),v=a.n(p),b=a(59),y=a.n(b),g=a(60),k=a.n(g),S=a(20),_=a.n(S),O=a(23),j=a(22),w=a(21),C=a.n(w),x=a(61),V=a.n(x),z=function(e){var t=e.id,a=e.fetchedUser;return r.a.createElement(E.t,{id:t},r.a.createElement(E.u,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),a&&r.a.createElement(E.k,{title:"User Data Fetched with VK Bridge"},r.a.createElement(E.d,{before:a.photo_200?r.a.createElement(E.a,{src:a.photo_200}):null},"".concat(a.first_name," ").concat(a.last_name))))},B=function(){var e=Object(n.useState)("settings"),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),l=Object(j.a)(i,2),s=l[0],o=l[1];Object(n.useEffect)(function(){function e(){return(e=Object(O.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}C.a.subscribe(function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}}),function(){e.apply(this,arguments)}()},[]);return r.a.createElement(V.a,{activePanel:a},r.a.createElement(z,{id:"settings",fetchedUser:s,go:function(e){c(e.currentTarget.dataset.to)}}))},A=a(66),D=a(62),M=a.n(D),W=a(63),I=a.n(W),K=a(41),P=a.n(K),U=a(37),H=a.n(U),F=a(64),T=a.n(F);var J=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),a=(t[0],t[1]),n=r.a.useState(),c=Object(j.a)(n,2),i=c[0],l=c[1],s=r.a.useState(),o=Object(j.a)(s,2),u=o[0],m=o[1],d=r.a.useState(),h=Object(j.a)(d,2),f=h[0],p=h[1];return r.a.useEffect(function(){!function(){var e=Object(O.a)(_.a.mark(function e(){var t,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.a.firestore(),e.next=3,t.collection("skins").get();case 3:n=e.sent,a(n.docs.map(function(e){return e.data()}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement(E.g,null,r.a.createElement(E.j,null,r.a.createElement(E.o,{maxLength:"16",top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(E.o,{maxLength:"8",top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 ID",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID",value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement(E.z,{top:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0441\u043a\u0438\u043d\u0430",value:f,onChange:function(e){return p(e.target.value)}},r.a.createElement("option",{value:"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u043a\u0438\u043d\u044b"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u043a\u0438\u043d\u044b"),r.a.createElement("option",{value:"\u041f\u0438\u0442\u043e\u043c\u0446\u044b"},"\u041f\u0438\u0442\u043e\u043c\u0446\u044b"),r.a.createElement("option",{value:"\u0427\u0430\u0441\u0442\u0438\u0446\u044b"},"\u0427\u0430\u0441\u0442\u0438\u0446\u044b")),r.a.createElement(E.i,{type:"image",top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e \u0441\u043a\u0438\u043d\u0430",before:r.a.createElement(T.a,null),size:"l"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e"),r.a.createElement(E.e,null,"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c, \u0447\u0442\u043e \u0432\u044b ",r.a.createElement(E.p,null,"\u0442\u0430\u043c")," \u043f\u043e\u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438"),r.a.createElement(E.c,{size:"xl",onClick:function(e){e.preventDefault(),H.a.firestore().collection("skins").add({nickname:i,player_id:u,category:f})}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))},L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(A.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this,t=r.a.createElement(E.s,{activeModal:this.state.activeModal,onClose:this.modalBack},r.a.createElement(E.q,{id:"add_skin_submit",onClose:this.modalBack,header:r.a.createElement(E.r,{left:E.n&&r.a.createElement(E.w,{onClick:this.modalBack},r.a.createElement(P.a,null)),right:r.a.createElement(E.w,{onClick:this.modalBack}," ",r.a.createElement(I.a,null))},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c")},r.a.createElement(J,null)));return r.a.createElement(E.E,{id:"add_skin",activePanel:"add_skin",modal:t},r.a.createElement(E.t,{id:"add_skin"},r.a.createElement(E.u,null,"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"),r.a.createElement(E.g,null,r.a.createElement(E.x,{icon:r.a.createElement(M.a,{width:128,height:128}),header:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043a\u0438\u043d",action:r.a.createElement(E.c,{onClick:function(){return e.setActiveModal("add_skin_submit")},mode:"commerce",size:"l"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043a\u0438\u043d")},r.a.createElement("h4",null,"\u041f\u0440\u0438\u0432\u0435\u0442! \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043a\u0438\u043d \u0434\u043b\u044f \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f! \u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043a\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u044f\u0442 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u043e\u0442 2,500 \u0434\u043e 5,000 \u043f\u043b\u0430\u0437\u043c\u044b \u043e\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 Nebulous.")))))}}]),t}(r.a.Component);var N=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return r.a.useEffect(function(){!function(){var e=Object(O.a)(_.a.mark(function e(){var t,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.a.firestore(),e.next=3,t.collection("skins").get();case 3:a=e.sent,n(a.docs.map(function(e){return e.data()}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement(r.a.Fragment,null,a.map(function(e){return r.a.createElement(E.g,{key:e.id},r.a.createElement(E.b,{style:{blockSize:80},size:"l",before:r.a.createElement(E.a,{size:96,mode:"image",src:e.nickname}),header:r.a.createElement(r.a.Fragment,null,"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043b: ",e.nickname),subheader:r.a.createElement(r.a.Fragment,null,"ID \u0438\u0433\u0440\u043e\u043a\u0430: ",e.player_id,r.a.createElement("br",null),"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",e.category)}))}))},q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).eruda=Object(O.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({eruda:!a.state.eruda});case 2:a.state.eruda?window.eruda.init():window.eruda.destroy();case 3:case"end":return e.stop()}},e)})),a.state={activeView:"main",eruda:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(E.y,{eruda:this.eruda,activeView:this.state.activeView},r.a.createElement(E.E,{eruda:this.eruda,activePanel:"main",id:"main"},r.a.createElement(E.t,{eruda:this.eruda,id:"main"},r.a.createElement(E.C,{onDoubleClick:this.eruda},r.a.createElement(E.u,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement(E.l,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0441\u043a\u0438\u043d\u0430"),r.a.createElement(E.g,{style:{display:"center"}},r.a.createElement(E.c,{size:"xl",onClick:function(){return e.setState({activeView:"def_skin"})},style:{marginBottom:"10px",blockSize:60},mode:"primary"},r.a.createElement(E.D,{style:{fontWeight:700,fontSize:20}},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u043a\u0438\u043d\u044b")),r.a.createElement(E.c,{size:"xl",onClick:function(){return e.setState({activeView:"pets"})},style:{marginBottom:"10px",blockSize:60},mode:"primary"},r.a.createElement(E.D,{style:{fontWeight:700,fontSize:20}},"\u041f\u0438\u0442\u043e\u043c\u0446\u044b")),r.a.createElement(E.c,{size:"xl",onClick:function(){return e.setState({activeView:"particles"})},style:{marginBottom:"10px",blockSize:60},mode:"primary"},r.a.createElement(E.D,{style:{fontWeight:700,fontSize:20}},"\u0427\u0430\u0441\u0442\u0438\u0446\u044b"))))),r.a.createElement(E.E,{header:!0,activePanel:"def_skin",id:"def_skin"},r.a.createElement(E.t,{id:"def_skin"},r.a.createElement(E.u,{left:r.a.createElement(E.v,{onClick:function(){return e.setState({activeView:"main"})}})},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u043a\u0438\u043d\u044b"),r.a.createElement(E.k,null,r.a.createElement(N,null)))),r.a.createElement(E.E,{header:!0,activePanel:"pets",id:"pets"},r.a.createElement(E.t,{id:"pets"},r.a.createElement(E.u,{left:r.a.createElement(E.v,{onClick:function(){return e.setState({activeView:"main"})}})},"\u041f\u0438\u0442\u043e\u043c\u0446\u044b"),r.a.createElement(E.k,null))),r.a.createElement(E.E,{header:!0,activePanel:"particles",id:"particles"},r.a.createElement(E.t,{id:"particles"},r.a.createElement(E.u,{left:r.a.createElement(E.v,{onClick:function(){return e.setState({activeView:"main"})}})},"\u0427\u0430\u0441\u0442\u0438\u0446\u044b"),r.a.createElement(E.k,null))))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"feed",scheme:"space_gray",text:"",activePanel:"settings",history:["settings"],eruda:!1},a.onStoryChange=a.onStoryChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;f.a.subscribe(function(t){var a=t.detail,n=a.type,r=a.data;"VKWebAppUpdateConfig"===n&&e.setState({scheme:r.scheme})})}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),f.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),f.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"render",value:function(){return r.a.createElement(E.f,{scheme:this.onThemeChange},r.a.createElement(E.h,{activeStory:this.state.activeStory,tabbar:r.a.createElement(E.A,null,r.a.createElement(E.B,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(v.a,null)),r.a.createElement(E.B,{onClick:this.onStoryChange,selected:"add_skin"===this.state.activeStory,"data-story":"add_skin",text:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"},r.a.createElement(y.a,null)),r.a.createElement(E.B,{onClick:this.onStoryChange,selected:"main_settings"===this.state.activeStory,"data-story":"main_settings",text:"\u041e \u043d\u0430\u0441"},r.a.createElement(k.a,null)))},r.a.createElement(q,{id:"feed"}),r.a.createElement(L,{id:"add_skin"}),r.a.createElement(B,{id:"main_settings"})))}}]),t}(r.a.Component),Q=a(65),R=a.n(Q);C.a.send("VKWebAppInit",{});var X=document.getElementById("root");Object(E.F)()===E.m&&R()(X),i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.c7d09296.chunk.js.map