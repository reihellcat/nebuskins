(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(157)},157:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(29),r=n.n(i),l=n(21),o=n.n(l),s=n(25),u=n(18),m=n.n(u),p=n(43),d=n.n(p),h=n(42),g=n.n(h),b=(n(132),n(22)),f=n.n(b),E=n(23),w=n.n(E),y=n(24),_=n.n(y),k=n(17),S=n.n(k),j=function(e){return c.a.createElement(f.a,{id:e.id},console.log(e),c.a.createElement(w.a,null,"Nebulous Skins"),c.a.createElement("img",{style:{height:"50%",width:"50%",marginLeft:"25%",marginTop:"5%"},alt:"",src:"https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"}),c.a.createElement(S.a,null,c.a.createElement("h1",{style:{height:"25%",width:"50%",marginLeft:"10%",fontSize:"20px"}},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442! \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435..."),c.a.createElement(_.a,{onClick:function(){return e.UpdateTheme()},size:"xl",mode:"secondary"},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043d\u0430 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0443\u044e")))},O=n(41),v=n.n(O),V=function(e){return c.a.createElement(f.a,{id:e.id},c.a.createElement(w.a,{left:c.a.createElement(v.a,{onClick:function(){return window.history.back()}})},"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"),c.a.createElement(S.a,null,c.a.createElement("img",{style:{height:"50%",width:"50%",marginLeft:"25%"},alt:"",src:"https://vk.com/sticker/1-16263-256"})),c.a.createElement(S.a,null,c.a.createElement(_.a,{onClick:function(){return e.UpdateTheme()},size:"xl",mode:"secondary"},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043d\u0430 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0443\u044e")))},T=function(){var e=Object(a.useState)("home"),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)("space_gray"),l=Object(s.a)(r,2),o=l[0],u=l[1],p=Object(a.useState)(["home"]),h=Object(s.a)(p,2),b=h[0];h[1];function f(){1===b.length?m.a.send("VKWebAppClose"):b.length>1&&(b.pop(),i(b[b.length-1]))}function E(){"bright_light"===o||"client_light"===o?(u("space_gray"),m.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==o&&"client_dark"!==o||(u("bright_light"),m.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}return Object(a.useEffect)(function(){window.addEventListener("popstate",function(){return f()}),m.a.subscribe(function(e){var t=e.detail,n=t.type,a=t.data;"VKWebAppUpdateConfig"===n&&u(a.scheme)})},[]),c.a.createElement(g.a,{isWebView:!0,scheme:o},c.a.createElement(d.a,{activePanel:n,onSwipeBack:f,history:b},c.a.createElement(j,{id:"home",goToPage:function(e){window.history.pushState({panel:e},e),i(e),b.push(e)},UpdateTheme:E}),c.a.createElement(V,{id:"second",UpdateTheme:E})))},W=n(44),x=n.n(W),A=n(30);o.a.send("VKWebAppInit",{});var C=document.getElementById("root");Object(A.b)()===A.a&&x()(C),r.a.render(c.a.createElement(T,null),C)}},[[127,1,2]]]);
//# sourceMappingURL=main.3adbc5c6.chunk.js.map