(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(157)},157:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(30),r=n.n(i),o=n(24),l=n.n(o),s=n(26),u=n(21),m=n.n(u),d=n(43),p=n.n(d),h=n(42),g=n.n(h),b=(n(132),n(15)),f=n.n(b),E=n(16),w=n.n(E),y=n(25),k=n.n(y),_=n(8),S=n.n(_),j=n(17),T=n.n(j),v=function(e){return c.a.createElement(f.a,{id:e.id},c.a.createElement(w.a,{left:c.a.createElement(k.a,{onClick:function(){return window.history.back()}})},"\ufffd\ufffd\ufffd\ufffd\ufffd \ufffd\ufffd\ufffd\ufffd"),c.a.createElement(S.a,null,c.a.createElement(T.a,{onClick:function(){return e.goToPage("second")},size:"xl",mode:"secondary"},"\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd \ufffd\ufffd\ufffd\ufffd\ufffd\ufffd")))},O=function(e){return c.a.createElement(f.a,{id:e.id},c.a.createElement(w.a,null,"Nebulous Skins"),c.a.createElement("img",{style:{height:"100%",width:"100%",marginTop:"5%"},alt:"",src:"https://sun9-63.userapi.com/c857020/v857020827/13946f/aMol-HoR2Fw.jpg"}),c.a.createElement(S.a,null,c.a.createElement("h1",{style:{height:"25%",width:"50%",fontSize:"20px"}},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442! \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435..."),c.a.createElement(T.a,{onClick:function(){return e.UpdateTheme()},size:"xl",mode:"secondary"},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043d\u0430 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0443\u044e"),c.a.createElement(T.a,{onClick:function(){return e.goToPage("second")},size:"xl",mode:"secondary",style:{marginTop:"1%"}},"\u0412\u0442\u043e\u0440\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c")))},V=function(e){return c.a.createElement(f.a,{id:e.id},c.a.createElement(w.a,{left:c.a.createElement(k.a,{onClick:function(){return window.history.back()}})},"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),c.a.createElement(S.a,null,c.a.createElement("img",{style:{height:"50%",width:"50%",marginLeft:"25%"},alt:"",src:"https://vk.com/sticker/1-16263-256"})),c.a.createElement(S.a,null,c.a.createElement("h1",null,"\u0422\u0435\u043a\u0441\u0442")))},C=function(){var e=Object(a.useState)("home"),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)("space_gray"),o=Object(s.a)(r,2),l=o[0],u=o[1],d=Object(a.useState)(["home"]),h=Object(s.a)(d,2),b=h[0];h[1];function f(e){window.history.pushState({panel:e},e),i(e),b.push(e)}function E(){1===b.length?m.a.send("VKWebAppClose"):b.length>1&&(b.pop(),i(b[b.length-1]))}function w(){"bright_light"===l||"client_light"===l?(u("space_gray"),m.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==l&&"client_dark"!==l||(u("bright_light"),m.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}return Object(a.useEffect)(function(){window.addEventListener("popstate",function(){return E()}),m.a.subscribe(function(e){var t=e.detail,n=t.type,a=t.data;"VKWebAppUpdateConfig"===n&&u(a.scheme)})},[]),c.a.createElement(g.a,{isWebView:!0,scheme:l},c.a.createElement(p.a,{activePanel:n,onSwipeBack:E,history:b},c.a.createElement(O,{id:"home",goToPage:f,UpdateTheme:w}),c.a.createElement(V,{id:"second",UpdateTheme:w}),c.a.createElement(v,{id:"epic",goToPage:f})))},W=n(44),x=n.n(W),A=n(31);l.a.send("VKWebAppInit",{});var K=document.getElementById("root");Object(A.b)()===A.a&&x()(K),r.a.render(c.a.createElement(C,null),K)}},[[127,1,2]]]);
//# sourceMappingURL=main.25b8cdb2.chunk.js.map