(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=(n(14),n(1)),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.length>0&&t((function(e){return[u].concat(Object(l.a)(e))})),o("")}},r.a.createElement("input",{value:u,onChange:function(e){return o(e.target.value)},type:"text",name:"value",id:"value"}))},s=n(4),m=n.n(s),p=n(7),f=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=".concat("prSUIN2A5rKqnYkLjWQpOFZufhM0DF7w","&q=").concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,console.log(c),u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"grid-item"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.category,n=function(e){var t=e.category,n=Object(a.useState)({data:[],loading:!0}),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(a.useEffect)((function(){f(t).then((function(e){return u({data:e,loading:!1})}))}),[t]),c}({category:t}),c=n.data,u=n.loading;return r.a.createElement("div",null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",null,"loading..."),c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})))},v=["Rick and morty"],E=function(){var e=Object(a.useState)(v),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif expert app"),r.a.createElement(o,{setCategories:c}),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4601a6bc.chunk.js.map