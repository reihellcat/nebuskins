(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(157)},157:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(28),r=n.n(c),l=n(21),o=n.n(l),s=n(24),u=n(18),h=n.n(u),p=n(43),m=n.n(p),d=n(42),g=n.n(d),b=(n(132),n(22)),f=n.n(b),w=n(23),E=n.n(w),_=n(17),y=n.n(_),k=function(e){return i.a.createElement(f.a,{id:e.id},console.log(e),i.a.createElement(E.a,null,"Nebulous Skins"),i.a.createElement("img",{style:{height:"50%",width:"50%",marginLeft:"25%",marginTop:"25%"},alt:"",src:"https://sun9-24.userapi.com/c856520/v856520080/13a615/MOxzZ-wuRFM.jpg"}),i.a.createElement(y.a,null,i.a.createElement("h1",{style:{height:"25%",width:"50%",marginLeft:"10%",fontSize:"20px"}},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442! \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435...")))},S=n(41),j=n.n(S),O=n(29),v=n.n(O),V=function(e){return i.a.createElement(f.a,{id:e.id},i.a.createElement(E.a,{left:i.a.createElement(j.a,{onClick:function(){return window.history.back()}})},"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"),i.a.createElement(y.a,null,i.a.createElement("img",{style:{height:"50%",width:"50%",marginLeft:"25%"},alt:"",src:"https://vk.com/sticker/1-16263-256"})),i.a.createElement(y.a,null,i.a.createElement(v.a,{onClick:function(){return e.UpdateTheme()},size:"xl",mode:"secondary"},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043d\u0430 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0443\u044e")))},W=function(){var e=Object(a.useState)("home"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("bright_light"),l=Object(s.a)(r,2),o=l[0],u=l[1],p=Object(a.useState)(["home"]),d=Object(s.a)(p,2),b=d[0];d[1];function f(){1===b.length?h.a.send("VKWebAppClose"):b.length>1&&(b.pop(),c(b[b.length-1]))}return Object(a.useEffect)(function(){window.addEventListener("popstate",function(){return f()}),h.a.subscribe(function(e){var t=e.detail,n=t.type,a=t.data;"VKWebAppUpdateConfig"===n&&u(a.scheme)})},[]),i.a.createElement(g.a,{isWebView:!0,scheme:o},i.a.createElement(m.a,{activePanel:n,onSwipeBack:f,history:b},i.a.createElement(k,{id:"home",goToPage:function(e){window.history.pushState({panel:e},e),c(e),b.push(e)}}),i.a.createElement(V,{id:"second",UpdateTheme:function(){"bright_light"===o||"client_light"===o?(u("space_gray"),h.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==o&&"client_dark"!==o||(u("bright_light"),h.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}})))},A=n(44),K=n.n(A),x=n(30);o.a.send("VKWebAppInit",{});var C=document.getElementById("root");Object(x.b)()===x.a&&K()(C),r.a.render(i.a.createElement(W,null),C)}},[[127,1,2]]]);
//# sourceMappingURL=main.88952e28.chunk.js.map