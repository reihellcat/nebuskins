(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(24),i=a.n(s),l=a(18),r=a.n(l),o=a(28),h=a(19),m=a(20),u=a(22),d=a(21),p=a(23),b=a(17),E=a(3),g=(a(25),a(41)),f=a.n(g),y=a(42),v=a.n(y),k=a(27),j=a.n(k),_=a(16),S=a.n(_),C=a(43),O=a.n(C),w=a(44),x=a.n(w),V=a(45),W=a.n(V),A=a(31),T=a.n(A),I=a(46),M=a.n(I),P=a(47),B=a.n(P),K=a(48),U=a.n(K),H=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={activeStory:"settings",scheme:"bright_light",popout:null},a.openTheme=a.openTheme.bind(Object(b.a)(Object(b.a)(a))),a.openNotifications=a.openNotifications.bind(Object(b.a)(Object(b.a)(a))),a.UpdateTheme=a.UpdateTheme.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){var a=t.detail,n=a.type,c=a.data;"VKWebAppUpdateConfig"===n&&e.setState({scheme:c.scheme})})}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),r.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),r.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"openNotifications",value:function(){var e=this;this.setState({popout:c.a.createElement(E.a,{onClose:function(){return e.setState({popout:null})}},c.a.createElement(E.b,{before:c.a.createElement(B.a,{width:28,height:28}),onClick:function(){return S.a.send("VKWebAppAllowNotifications",{})},autoclose:!0},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),c.a.createElement(E.b,{before:c.a.createElement(M.a,null),onClick:function(){return S.a.send("VKWebAppDenyNotifications",{})},autoclose:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),Object(E.C)()===E.n&&c.a.createElement(E.b,{autoclose:!0,mode:"cancel"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))})}},{key:"openTheme",value:function(){var e=this;this.setState({popout:c.a.createElement(E.a,{onClose:function(){return e.setState({popout:null})}},c.a.createElement(E.b,{before:c.a.createElement(U.a,{width:28,height:28}),onClick:this.UpdateTheme,autoclose:!0},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443"),Object(E.C)()===E.n&&c.a.createElement(E.b,{autoclose:!0,mode:"cancel"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))})}},{key:"render",value:function(){return c.a.createElement(E.g,{scheme:this.state.scheme},c.a.createElement(E.B,{popout:this.state.popout,id:"settings",activePanel:"settings"},c.a.createElement(E.u,{id:"settings"},c.a.createElement(E.v,null,"\u041e \u043d\u0430\u0441"),c.a.createElement(E.h,null,c.a.createElement(E.f,{size:"x1",before:c.a.createElement(O.a,{width:28,height:28}),href:"https://vk.com/nebulous"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),c.a.createElement(E.y,null),c.a.createElement(E.h,null,c.a.createElement(E.e,{before:c.a.createElement(j.a,null),description:"\u0412\u0435\u0440\u0441\u0438\u044f 2504200204"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),c.a.createElement(E.y,null),c.a.createElement(E.h,null,c.a.createElement(E.e,{asideContent:c.a.createElement(T.a,null),before:c.a.createElement(x.a,{width:28,height:28}),onClick:this.openTheme,description:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u0435\u043c\u044b: \u0422\u0451\u043c\u043d\u0430\u044f, \u0421\u0432\u0435\u0442\u043b\u0430\u044f"},"\u0422\u0435\u043c\u044b"),c.a.createElement(E.e,{asideContent:c.a.createElement(T.a,null),before:c.a.createElement(W.a,null),description:"\u0420\u0430\u0431\u043e\u0442\u0430\u044e\u0442, \u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")))))}}]),t}(c.a.Component),N=a(49),z=a.n(N),F=a(50),J=a.n(F),G=a(26),D=a.n(G),Q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(o.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this,t=c.a.createElement(E.t,{activeModal:this.state.activeModal,onClose:this.modalBack},c.a.createElement(E.r,{id:"add_skin_submit",onClose:this.modalBack,header:c.a.createElement(E.s,{left:E.o&&c.a.createElement(E.w,{onClick:this.modalBack},c.a.createElement(D.a,null)),right:c.a.createElement(E.w,{onClick:this.modalBack},E.p?"\u0413\u043e\u0442\u043e\u0432\u043e":c.a.createElement(J.a,null))},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043a\u0438\u043d")},c.a.createElement(E.j,null,c.a.createElement(E.q,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u0438\u043a\u043d\u0435\u0439\u043c"}),c.a.createElement(E.q,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 ID"}))));return c.a.createElement(E.B,{id:"add_skin",activePanel:"add_skin",modal:t},c.a.createElement(E.u,{id:"add_skin"},c.a.createElement(E.v,null,"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"),c.a.createElement(E.h,null,c.a.createElement(E.x,{icon:c.a.createElement(z.a,{width:128,height:128}),header:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043a\u0438\u043d",action:c.a.createElement(E.d,{onClick:function(){return e.setActiveModal("add_skin_submit")},mode:"commerce",size:"l"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u043a\u0438\u043d")},c.a.createElement("h4",null,"\u041f\u0440\u0438\u0432\u0435\u0442! \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043a\u0438\u043d \u0434\u043b\u044f \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f! \u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043a\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u044f\u0442 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u043e\u0442 2,500 \u0434\u043e 5,000 \u043f\u043b\u0430\u0437\u043c\u044b \u043e\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 Nebulous.")))))}}]),t}(c.a.Component),Z=a(51),L=a.n(Z),Y=a(52),X=a.n(Y),q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={slideIndex:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(E.B,{id:"feed",activePanel:"feed"},c.a.createElement(E.u,{id:"feed"},c.a.createElement(E.v,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement(E.e,{size:"l",description:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",before:c.a.createElement(E.c,{src:"https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"}),bottomContent:c.a.createElement(E.d,{before:c.a.createElement(L.a,null),onClick:function(){return S.a.send("VKWebAppJoinGroup",{group_id:95380950})},disabled:!0},"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u044c")},"Nebulous"),c.a.createElement(E.h,null,c.a.createElement(E.x,{action:c.a.createElement(E.d,{before:c.a.createElement(X.a,null),href:"https://vk.com/nebulous",size:"l"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432")},c.a.createElement("img",{src:"https://vk.com/sticker/1-20227-256"}))),c.a.createElement(E.l,{header:c.a.createElement(E.m,{mode:"secondary"},"\u042f \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0433\u0440\u0430\u044e\u0441\u044c...")},c.a.createElement(E.k,{slideWidth:"90%",align:"center",style:{height:150},slideIndex:this.state.slideIndex,onChange:function(t){return e.setState({slideIndex:t})}},c.a.createElement("img",{src:"https://sun9-23.userapi.com/c857032/v857032907/175818/gNvtHZJ3a7s.jpg"}),c.a.createElement("img",{src:"https://sun9-47.userapi.com/QVxZ0z52lu6aM5r12cuDY3LJVcLIJ84BZdWo-Q/aY1_stMf0c0.jpg"}),c.a.createElement("img",{src:"https://sun9-46.userapi.com/x2oF0Fnf4EKF09F3XnTTiWldMdiZelCFoDTp9A/_-ysJP7s5hY.jpg"}),c.a.createElement("img",{src:"https://sun9-5.userapi.com/VnGQw8Fl50kNs4ujoXuvGnLGveHkdPyxIf5uLw/u5s94NZG-cQ.jpg"}),c.a.createElement("img",{src:"https://sun9-44.userapi.com/hYX63VXUWxdWtHW4Gkl8fj0UnI5WJV1lF-HUVQ/Wg8Le4aGpY4.jpg"}),c.a.createElement("img",{src:"https://sun9-37.userapi.com/c854016/v854016907/22d540/yT4tyIUP6cg.jpg"}),c.a.createElement("img",{src:"https://sun9-58.userapi.com/c856524/v856524907/176bd5/wzfPkrwkySQ.jpg"})),c.a.createElement(E.h,null,c.a.createElement(E.d,{onClick:function(){return e.setState({slideIndex:6===e.state.slideIndex?0:e.state.slideIndex+1})}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430")))))}}]),t}(c.a.Component),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={activeStory:"feed",scheme:"bright_light",text:"",activePanel:"settings",history:["settings"]},a.onStoryChange=a.onStoryChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),this.setState({activePanel:e,history:[].concat(Object(o.a)(this.state.history),[e])})}},{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){var a=t.detail,n=a.type,c=a.data;"VKWebAppUpdateConfig"===n&&e.setState({scheme:c.scheme})})}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),r.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),r.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"render",value:function(){return c.a.createElement(E.g,{scheme:this.onThemeChange,isWebView:!0},c.a.createElement(E.i,{activeStory:this.state.activeStory,activePanel:this.state.activePanel,history:this.state.history,tabbar:c.a.createElement(E.z,null,c.a.createElement(E.A,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},c.a.createElement(f.a,null)),c.a.createElement(E.A,{onClick:this.onStoryChange,selected:"add_skin"===this.state.activeStory,"data-story":"add_skin",text:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"},c.a.createElement(v.a,null)),c.a.createElement(E.A,{onClick:this.onStoryChange,selected:"settings"===this.state.activeStory,"data-story":"settings",text:"\u041e \u043d\u0430\u0441"},c.a.createElement(j.a,null)))},c.a.createElement(q,{id:"feed"}),c.a.createElement(Q,{id:"add_skin"}),c.a.createElement(H,{id:"settings",this:this,scheme:this.onThemeChange})))}}]),t}(c.a.Component),$=a(53),ee=a.n($);S.a.send("VKWebAppInit",{});var te=document.getElementById("root");Object(E.C)()===E.n&&ee()(te),i.a.render(c.a.createElement(R,null),document.getElementById("root"))},98:function(e,t,a){e.exports=a(114)}},[[98,1,2]]]);
//# sourceMappingURL=main.c1555616.chunk.js.map