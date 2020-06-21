(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),i=n.n(c),u=n(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(){var e=Object(r.useRef)([{minifiedName:"BUB",name:"Bubble Sort"},{minifiedName:"SEL",name:"Selection Sort"},{minifiedName:"INS",name:"Insertion Sort"},{minifiedName:"QUI",name:"Quick Sort"},{minifiedName:"MER",name:"Merge Sort"}]),t=Object(u.c)((function(e){return e.globals.algorithm})),n=Object(u.b)();return a.a.createElement("div",{key:t,className:"algo-toggle d-flex"},e.current.map((function(e){return t===e.name?a.a.createElement("div",{key:e.name,className:"selected",title:e.name},e.name):a.a.createElement("div",{key:e.name,title:e.name,onClick:function(){return n({algorithm:e.name,type:"CHANGE_DEFAULT_ALGORITHM"})}},e.minifiedName)})))},l=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.globals.arrayType}));return a.a.createElement("select",{key:t,value:t,onChange:function(t){e(function(e){return{arrayType:e,type:"CHANGE_ARRAY_TYPE"}}(t.currentTarget.value))}},["Randomize","Almost Sorted","Increasing","Decreasing"].map((function(e){return a.a.createElement("option",{key:e},e)})))},m=function(){var e=Object(u.c)((function(e){return e.globals.arraySize})),t=Object(u.b)();return a.a.createElement("div",null,a.a.createElement("input",{max:"100",min:"1",type:"range",value:e,onChange:function(e){t(function(e){return{arraySize:e,type:"CHANGE_ARRAY_SIZE"}}(parseInt(e.currentTarget.value,10)))}}),a.a.createElement("div",null,"Change Array Size"))},s=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.globals.animationSpeed}));return a.a.createElement("div",{className:"d-flex flex-column justify-center align-center"},a.a.createElement("div",{className:"d-flex justify-center align-center"},a.a.createElement("div",null,"Slow"),a.a.createElement("input",{max:"100",min:"1",type:"range",value:t,onChange:function(t){e(function(e){return{animationSpeed:e,type:"CHANGE_ANIMATION_SPEED"}}(parseInt(t.currentTarget.value,10)))}}),a.a.createElement("div",null,"Fast")),a.a.createElement("div",null,"Animation Speed"))},f=function(){return a.a.createElement("button",{type:"button"},"Sort")},d=function(){return a.a.createElement("header",null,a.a.createElement(o,null),a.a.createElement(l,null),a.a.createElement(m,null),a.a.createElement(s,null),a.a.createElement(f,null))},E=n(3);var b=function(){var e=Object(u.c)((function(e){return e.globals.arraySize})),t=Object(u.c)((function(e){return e.globals.arrayType})),n=Object(r.useState)([]),c=Object(E.a)(n,2),i=c[0],o=c[1],l=Object(r.useRef)(2),m=Object(r.useRef)(2),s=Object(r.useRef)(1),f=Object(r.useRef)(100),d=Object(r.useState)([0,0]),b=Object(E.a)(d,2),g=b[0],y=b[1];function h(){var t=[],n=m.current;e<n&&(e=n);for(var r,a,c=Math.ceil(e/l.current),i=0;i<c;i++)t.push((r=s.current,a=f.current,r=Math.ceil(r),a=Math.floor(a),Math.floor(Math.random()*(a-r))+r));return t}function v(e){return{"Almost Sorted":function(){return h()},Decreasing:function(){return h().sort((function(e,t){return t-e}))},Increasing:function(){return h().sort((function(e,t){return e-t}))},Randomize:function(){return h()}}[e]()}Object(r.useEffect)((function(){o(v(t))}),[e]),Object(r.useEffect)((function(){o(v(t))}),[t]);var p=Object(r.useRef)(80),O=Object(r.useRef)(40),j=i.length,S=g[0]-2*O.current,w=g[1]-2*p.current,A=w/j,N=function(){var e=Object(r.useState)([window.innerWidth,window.innerHeight]),t=Object(E.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}(),R=Object(E.a)(N,2),T=R[0],k=R[1];return Object(r.useEffect)((function(){var e=document.querySelector("header");e&&y([k-e.offsetHeight,T])}),[T,k]),Object(r.useEffect)((function(){var e=document.querySelector("header"),t=document.querySelector("body");e&&t&&y([k-e.offsetHeight,T])}),[]),0!==g[0]?a.a.createElement("svg",{height:S,style:{paddingBottom:O.current,paddingLeft:p.current,paddingRight:p.current,paddingTop:O.current},width:w,xmlns:"http://www.w3.org/2000/svg"},i.map((function(e,t){var n=e*S/f.current;return a.a.createElement("g",{key:t},a.a.createElement("rect",{height:n,style:{fill:"blue",fillOpacity:.1,stroke:"pink",strokeOpacity:.9,strokeWidth:5},width:A,x:t*A,y:S-n}),a.a.createElement("text",{style:{fill:"white"},x:t*A+A/2,y:S-n+50},e))}))):a.a.createElement("div",null)};var g=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement(b,{key:"1"}))},y=(n(22),n(23),n(24),n(2)),h=n(4),v={algorithm:"Bubble Sort",animationSpeed:10,arraySize:10,arrayType:"Randomize"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DEFAULT_ALGORITHM":return Object(h.a)({},e,{algorithm:t.algorithm});case"CHANGE_ARRAY_SIZE":return Object(h.a)({},e,{arraySize:t.arraySize});case"CHANGE_ANIMATION_SPEED":return Object(h.a)({},e,{animationSpeed:t.animationSpeed});case"CHANGE_ARRAY_TYPE":return Object(h.a)({},e,{arrayType:t.arrayType});default:return Object(h.a)({},e)}},O=Object(y.b)({globals:p}),j=Object(y.c)(O,{});i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:j},a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.bdb4e884.chunk.js.map