(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(27)},19:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),u=t(11),c=t.n(u),a=(t(19),t(1)),i=t(4),l=t(13),d=(t(25),"ADD"),b="SUB",p="ADD_NUMBER",E="INPUT",f="ADD2",m=function(e){return{type:p,payload:e}},s=Object(i.b)(function(e){return{counter:e.counter2.counter2}},function(e){return{onChange:function(n){return e(function(e){return{type:f,payload:e}}(n))}}})(function(e){var n=e.counter,t=e.onChange;return o.a.createElement("div",{style:{padding:20,border:"2px solid #cccccc"}},o.a.createElement("h2",null,"Counter\xa0",n),o.a.createElement("hr",null),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return t(1)},type:"button"},"Add 1"),o.a.createElement("button",{onClick:function(){return t(-1)},type:"button"},"Sub 1")))}),v=Object(i.b)(function(e){return{counter:e.counter1.counter,inputValue:e.counter1.inputValue}},function(e){return{onAdd:function(){return e({type:d})},onSub:function(){return e({type:b})},onAddNumber:function(n){return e(m(n))},onInput:function(n){var t,r=n.target;return e((t=+r.value,{type:E,payload:t}))},onAsyncAdd:function(n){return e(function(e){return function(n){return setTimeout(function(){return n(m(e))},2e3)}}(n))}}})(function(e){var n=e.counter,t=e.onAdd,r=e.onSub,u=e.onAddNumber,c=e.onInput,a=e.inputValue,i=e.onAsyncAdd;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h2",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a\xa0",n),o.a.createElement("hr",null),o.a.createElement("div",null,o.a.createElement("button",{onClick:t,type:"button"},"Add 1"),o.a.createElement("button",{onClick:r,type:"button"},"Sub 1")),o.a.createElement("div",null,o.a.createElement("input",{type:"number",onChange:c,value:a||""}),o.a.createElement("button",{onClick:u.bind(void 0,a),type:"button"},"Add\xa0",a),o.a.createElement("button",{onClick:u.bind(void 0,-a),type:"button"},"Sub\xa0",a)),o.a.createElement("div",null,o.a.createElement("button",{onClick:i.bind(void 0,100),type:"button"},"Async add 100")),o.a.createElement(s,null))}),y=t(2),w={counter:0,inputValue:5};var h={counter2:200};var O=Object(a.c)({counter1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return Object(y.a)({},e,{counter:e.counter+1});case b:return Object(y.a)({},e,{counter:e.counter-1});case p:return Object(y.a)({},e,{counter:e.counter+n.payload});case E:return Object(y.a)({},e,{inputValue:n.payload});default:return e}},counter2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return Object(y.a)({},e,{counter2:e.counter2+n.payload});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):a.d,A=Object(a.e)(O,g(Object(a.a)(function(e){return function(n){return function(t){var r=n(t);return console.log("Middleware",e.getState()),r}}},l.a))),_=o.a.createElement(i.a,{store:A},o.a.createElement(v,null));c.a.render(_,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.7ab6dd1f.chunk.js.map