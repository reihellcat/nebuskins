(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(24),i=a.n(c),s=a(18),o=a.n(s),r=a(19),m=a(20),h=a(22),u=a(21),d=a(23),p=a(17),b=a(3),E=(a(25),a(41)),f=a.n(E),g=a(42),v=a.n(g),y=a(28),k=a.n(y),_=a(16),C=a.n(_),O=a(43),j=a.n(O),S=a(44),w=a.n(S),x=a(45),A=a.n(x),V=a(30),T=a.n(V),M=a(46),B=a.n(M),K=a(47),W=a.n(K),z=a(48),D=a.n(z),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"settings",scheme:"bright_light",popout:null},a.openTheme=a.openTheme.bind(Object(p.a)(Object(p.a)(a))),a.openNotifications=a.openNotifications.bind(Object(p.a)(Object(p.a)(a))),a.UpdateTheme=a.UpdateTheme.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){var a=t.detail,n=a.type,l=a.data;"VKWebAppUpdateConfig"===n&&e.setState({scheme:l.scheme})})}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"openNotifications",value:function(){var e=this;this.setState({popout:l.a.createElement(b.a,{onClose:function(){return e.setState({popout:null})}},l.a.createElement(b.b,{before:l.a.createElement(W.a,{width:28,height:28}),onClick:function(){return C.a.send("VKWebAppAllowNotifications",{})},autoclose:!0},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),l.a.createElement(b.b,{before:l.a.createElement(B.a,null),onClick:function(){return C.a.send("VKWebAppDenyNotifications",{})},autoclose:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),Object(b.D)()===b.m&&l.a.createElement(b.b,{autoclose:!0,mode:"cancel"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))})}},{key:"openTheme",value:function(){var e=this;this.setState({popout:l.a.createElement(b.a,{onClose:function(){return e.setState({popout:null})}},l.a.createElement(b.b,{before:l.a.createElement(D.a,{width:28,height:28}),onClick:this.UpdateTheme,autoclose:!0},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443"),Object(b.D)()===b.m&&l.a.createElement(b.b,{autoclose:!0,mode:"cancel"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))})}},{key:"render",value:function(){return l.a.createElement(b.h,{scheme:this.state.scheme},l.a.createElement(b.C,{popout:this.state.popout,id:"settings",activePanel:"settings"},l.a.createElement(b.u,{id:"settings"},l.a.createElement(b.v,null,"\u041e \u043d\u0430\u0441"),l.a.createElement(b.i,null,l.a.createElement(b.f,{size:"x1",before:l.a.createElement(j.a,{width:28,height:28}),href:"https://vk.com/nebulous"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),l.a.createElement(b.z,null),l.a.createElement(b.i,null,l.a.createElement(b.e,{before:l.a.createElement(k.a,null),description:"\u0412\u0435\u0440\u0441\u0438\u044f 2504200204"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),l.a.createElement(b.z,null),l.a.createElement(b.i,null,l.a.createElement(b.e,{asideContent:l.a.createElement(T.a,null),before:l.a.createElement(w.a,{width:28,height:28}),onClick:this.openTheme,description:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u0435\u043c\u044b: \u0422\u0451\u043c\u043d\u0430\u044f, \u0421\u0432\u0435\u0442\u043b\u0430\u044f"},"\u0422\u0435\u043c\u044b"),l.a.createElement(b.e,{asideContent:l.a.createElement(T.a,null),before:l.a.createElement(A.a,null),description:"\u0420\u0430\u0431\u043e\u0442\u0430\u044e\u0442, \u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")))))}}]),t}(l.a.Component),U=a(55),H=a(49),I=a.n(H),P=a(50),J=a.n(P),L=a(27),q=a.n(L),F=a(51),G=a.n(F),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(U.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this,t=l.a.createElement(b.t,{activeModal:this.state.activeModal,onClose:this.modalBack},l.a.createElement(b.r,{id:"add_skin_submit",onClose:this.modalBack,header:l.a.createElement(b.s,{left:b.n&&l.a.createElement(b.w,{onClick:this.modalBack},l.a.createElement(q.a,null)),right:l.a.createElement(b.w,{onClick:this.modalBack},b.o?"\u0413\u043e\u0442\u043e\u0432\u043e":l.a.createElement(J.a,null))},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043a\u0438\u043d")},l.a.createElement(b.l,null,l.a.createElement(b.p,{maxLength:"16",top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a\u043d\u0435\u0439\u043c"}),l.a.createElement(b.p,{maxLength:"7",top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 ID",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID"}),l.a.createElement(b.y,{top:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0441\u043a\u0438\u043d\u0430"},l.a.createElement("option",{value:"d"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u043a\u0438\u043d\u044b"),l.a.createElement("option",{value:"a"},"\u041f\u0438\u0442\u043e\u043c\u0446\u044b"),l.a.createElement("option",{value:"p"},"\u0427\u0430\u0441\u0442\u0438\u0446\u044b")),l.a.createElement(b.k,{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e \u0441\u043a\u0438\u043d\u0430",before:l.a.createElement(G.a,null),size:"l"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e"),l.a.createElement(b.g,null,"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c, \u0447\u0442\u043e \u0432\u044b ",l.a.createElement(b.q,null,"\u0442\u0430\u043c")," \u043f\u043e\u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438"),l.a.createElement(b.d,{size:"xl"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))));return l.a.createElement(b.C,{id:"add_skin",activePanel:"add_skin",modal:t},l.a.createElement(b.u,{id:"add_skin"},l.a.createElement(b.v,null,"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"),l.a.createElement(b.i,null,l.a.createElement(b.x,{icon:l.a.createElement(I.a,{width:128,height:128}),header:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043a\u0438\u043d",action:l.a.createElement(b.d,{onClick:function(){return e.setActiveModal("add_skin_submit")},mode:"commerce",size:"l"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043a\u0438\u043d")},l.a.createElement("h4",null,"\u041f\u0440\u0438\u0432\u0435\u0442! \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043a\u0438\u043d \u0434\u043b\u044f \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f! \u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043a\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u044f\u0442 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u043e\u0442 2,500 \u0434\u043e 5,000 \u043f\u043b\u0430\u0437\u043c\u044b \u043e\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 Nebulous.")))))}}]),t}(l.a.Component),Z=a(52),Q=a.n(Z),X=a(53),Y=a.n(X),$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={slideIndex:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b.C,{id:"feed",activePanel:"feed"},l.a.createElement(b.u,{id:"feed"},l.a.createElement(b.v,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(b.e,{size:"l",description:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",before:l.a.createElement(b.c,{src:"https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"}),bottomContent:l.a.createElement(b.d,{before:l.a.createElement(Q.a,null),onClick:function(){return C.a.send("VKWebAppJoinGroup",{group_id:95380950})},disabled:!0},"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u044c")},"Nebulous"),l.a.createElement(b.i,null,l.a.createElement(b.x,{action:l.a.createElement(b.d,{before:l.a.createElement(Y.a,null),href:"https://vk.com/nebulous",size:"l"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432")},l.a.createElement("img",{src:"https://vk.com/sticker/1-20227-256"})))))}}]),t}(l.a.Component),ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"feed",scheme:"bright_light",text:"",activePanel:"settings",history:["settings"]},a.onStoryChange=a.onStoryChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){var a=t.detail,n=a.type,l=a.data;"VKWebAppUpdateConfig"===n&&e.setState({scheme:l.scheme})})}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"render",value:function(){return l.a.createElement(b.h,{scheme:this.onThemeChange},l.a.createElement(b.j,{activeStory:this.state.activeStory,tabbar:l.a.createElement(b.A,null,l.a.createElement(b.B,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(f.a,null)),l.a.createElement(b.B,{onClick:this.onStoryChange,selected:"add_skin"===this.state.activeStory,"data-story":"add_skin",text:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"},l.a.createElement(v.a,null)),l.a.createElement(b.B,{onClick:this.onStoryChange,selected:"settings"===this.state.activeStory,"data-story":"settings",text:"\u041e \u043d\u0430\u0441"},l.a.createElement(k.a,null)))},l.a.createElement($,{id:"feed"}),l.a.createElement(R,{id:"add_skin"}),l.a.createElement(N,{id:"settings",this:this,scheme:this.onThemeChange})))}}]),t}(l.a.Component),te=a(54),ae=a.n(te);C.a.send("VKWebAppInit",{});var ne=document.getElementById("root");Object(b.D)()===b.m&&ae()(ne),i.a.render(l.a.createElement(ee,null),document.getElementById("root"))},99:function(e,t,a){e.exports=a(115)}},[[99,1,2]]]);
//# sourceMappingURL=main.3617ee21.chunk.js.map