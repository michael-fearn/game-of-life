(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=(n(9),n(10),n(1)),u=function(e){return String(e)},l=function(e){var t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],n={},r=function(e){t.forEach((function(t){var r=u(function(e,t){return[e[0]+t[0],e[1]+t[1]]}(e.split(",").map(Number),t));n[r]=n[r]?n[r]+=1:1}))};for(var o in e)r(o);return n},s=function(){var e,t=Object(r.useState)((e=[[2,2],[2,3],[2,4],[3,1],[3,2],[3,3]],Object.fromEntries(e.map((function(e){return[u(e),!0]}))))),n=Object(i.a)(t,2),o=n[0],a=n[1],c=Object(r.useCallback)((function(){return a(function(e){var t=l(e),n={};for(var r in t){var o=t[r];(e[r]&&2===o||3===o)&&(n[r]=!0)}return n}(o))}),[o]);return{gridState:o,getNextGridState:c}},f=function(e){var t=e.color;return o.a.createElement("td",{style:{height:"25px",margin:5,width:"25px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.26)",backgroundColor:t?"black":"white"}})},m=function(e){return o.a.createElement("table",null,o.a.createElement("tbody",null,new Array(e.dimensions[0]).fill(void 0).map((function(t,n){return o.a.createElement("tr",{key:"board-row-".concat(n)},new Array(e.dimensions[1]).fill(void 0).map((function(t,r){return o.a.createElement(f,{key:"board-row-".concat(n,"-pos-").concat(r),color:e.points[String([n,r])]})})))}))))};var d=function(){var e=s(),t=e.gridState;return function(e){var t=Object(r.useState)(0),n=Object(i.a)(t,2),o=n[0],a=n[1],c=Object(r.useState)(20),u=Object(i.a)(c,2),l=u[0],s=u[1];Object(r.useEffect)((function(){setTimeout((function(){return a(o+1)}),10)}),[o]),Object(r.useEffect)((function(){o%l||e()}),[o,l])}(e.getNextGridState),o.a.createElement("div",{className:"App"},o.a.createElement(m,{dimensions:[6,6],points:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.588946ed.chunk.js.map