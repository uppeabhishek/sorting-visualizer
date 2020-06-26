(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),i=n.n(c),l=n(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(){var e=Object(r.useRef)([{minifiedName:"BUB",name:"Bubble Sort"},{minifiedName:"SEL",name:"Selection Sort"},{minifiedName:"INS",name:"Insertion Sort"},{minifiedName:"QUI",name:"Quick Sort"},{minifiedName:"MER",name:"Merge Sort"}]),t=Object(l.c)((function(e){return e.globals.algorithm})),n=Object(l.c)((function(e){return e.globals.sort})),c=Object(l.b)();return a.a.createElement("div",{key:t,className:n?"disabled algo-toggle d-flex":"algo-toggle d-flex"},e.current.map((function(e){return t===e.name?a.a.createElement("div",{key:e.name,className:"selected",title:e.name},e.name):a.a.createElement("div",{key:e.name,title:e.name,onClick:function(){return c({algorithm:e.name,type:"CHANGE_DEFAULT_ALGORITHM"})}},e.minifiedName)})))},u=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.globals.arrayType})),n=Object(l.c)((function(e){return e.globals.sort}));return a.a.createElement("select",{key:t,className:n?"disabled":"",value:t,onChange:function(t){e(function(e){return{arrayType:e,type:"CHANGE_ARRAY_TYPE"}}(t.currentTarget.value))}},["Randomize","Almost Sorted","Increasing","Decreasing"].map((function(e){return a.a.createElement("option",{key:e},e)})))},s=function(){var e=Object(l.c)((function(e){return e.globals.arraySize})),t=Object(l.c)((function(e){return e.globals.sort})),n=Object(l.b)();return a.a.createElement("div",null,a.a.createElement("input",{className:t?"disabled":"",max:"100",min:"1",type:"range",value:e,onChange:function(e){n(function(e){return{arraySize:e,type:"CHANGE_ARRAY_SIZE"}}(parseInt(e.currentTarget.value,10)))}}),a.a.createElement("div",null,"Change Array Size"))},f=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.globals.animationSpeed}));return a.a.createElement("div",{className:"d-flex flex-column justify-center align-center"},a.a.createElement("div",{className:"d-flex justify-center align-center"},a.a.createElement("div",null,"Slow"),a.a.createElement("input",{max:"100",min:"1",type:"range",value:t,onChange:function(t){e(function(e){return{animationSpeed:e,type:"CHANGE_ANIMATION_SPEED"}}(parseInt(t.currentTarget.value,10)))}}),a.a.createElement("div",null,"Fast")),a.a.createElement("div",null,"Animation Speed"))},m=function(){var e=Object(l.b)();return a.a.createElement("button",{type:"button",onClick:function(){return e({sort:!0,type:"SORT_ALGORITHM"})}},"Sort")},d=function(){return a.a.createElement("header",null,a.a.createElement(o,null),a.a.createElement(u,null),a.a.createElement(s,null),a.a.createElement(f,null),a.a.createElement(m,null))},b=n(4);function g(e,t){var n=Math.ceil(e),r=Math.floor(t);return Math.floor(Math.random()*(r-n))+n}var E=function(){var e=Object(l.c)((function(e){return e.globals.arraySize})),t=Object(l.c)((function(e){return e.globals.arrayType})),n=Object(r.useState)([]),c=Object(b.a)(n,2),i=c[0],o=c[1],u=Object(r.useRef)(2),s=Object(r.useRef)(2),f=Object(r.useRef)(1),m=Object(r.useRef)(100),d=Object(r.useState)([0,0]),E=Object(b.a)(d,2),v=E[0],y=E[1];function O(){var t=[],n=s.current;e<n&&(e=n);for(var r=Math.ceil(e/u.current),a=0;a<r;a++)t.push(g(f.current,m.current));return t}function h(e){return{"Almost Sorted":function(){return O()},Decreasing:function(){return O().sort((function(e,t){return t-e}))},Increasing:function(){return O().sort((function(e,t){return e-t}))},Randomize:function(){return O()}}[e]()}Object(r.useEffect)((function(){o(h(t))}),[e]),Object(r.useEffect)((function(){o(h(t))}),[t]);var p=Object(r.useRef)(80),S=Object(r.useRef)(40),j=i.length,A=v[0]-2*S.current,T=v[1]-2*p.current,R=T/j,N=function(){var e=Object(r.useState)([window.innerWidth,window.innerHeight]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}(),w=Object(b.a)(N,2),I=w[0],_=w[1];Object(r.useEffect)((function(){var e=document.querySelector("header");e&&y([_-e.offsetHeight,I])}),[I,_]),Object(r.useEffect)((function(){var e=document.querySelector("header"),t=document.querySelector("body");e&&t&&y([_-e.offsetHeight,I])}),[]);var k=Object(r.useRef)(null),G=Object(l.c)((function(e){return e.globals.sort}));return Object(r.useEffect)((function(){G&&k&&function(e,t){var n=e.length,r=null;if(t.current&&(r=t.current.children),r)for(var a=function(t){setTimeout((function(){for(var a=function(t){setTimeout((function(){var n=r[t].children,a=r[t+1].children,c=n[0],i=a[0],l=c.style.fill,o=i.style.fill;if(c.style.fill="blue",i.style.fill="blue",e[t]>e[t+1]){c.style.fill="red",i.style.fill="red";var u=[e[t+1],e[t]];e[t]=u[0],e[t+1]=u[1];var s=r[t+1].parentNode;s&&s.insertBefore(r[t+1],r[t]);var f=r[t].transform.baseVal.getItem(0),m=0,d=0;f.type===SVGTransform.SVG_TRANSFORM_TRANSLATE&&(m=f.matrix.e,d=f.matrix.f);var b=r[t+1].transform.baseVal.getItem(0),g=0,E=0;b.type===SVGTransform.SVG_TRANSFORM_TRANSLATE&&(g=b.matrix.e,E=b.matrix.f),r[t+1].transform.baseVal.getItem(0).setTranslate(m,E),r[t].transform.baseVal.getItem(0).setTranslate(g,d)}else c.style.fill="green",i.style.fill="green";c.style.fill=l,i.style.fill=o}),300*(t+1))},c=0;c<n-t-1;c++)a(c)}),300*t*n-t-1)},c=0;c<n;c++)a(c)}(i,k)}),[G]),0!==v[0]?a.a.createElement("svg",{ref:k,height:A,style:{paddingBottom:S.current,paddingLeft:p.current,paddingRight:p.current,paddingTop:S.current},width:T,xmlns:"http://www.w3.org/2000/svg"},i.map((function(e,t){var n=e*A/m.current;return a.a.createElement("g",{key:t,transform:"translate(".concat(t*R," ").concat(A-n,")")},a.a.createElement("rect",{height:n,style:{fill:"#251b12",stroke:"pink",strokeOpacity:.9,strokeWidth:2},width:R}))}))):a.a.createElement("div",null)};var v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement(E,{key:"1"}))},y=(n(22),n(23),n(24),n(3)),O=n(2),h={algorithm:"Bubble Sort",animationSpeed:50,arraySize:50,arrayType:"Randomize",sort:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DEFAULT_ALGORITHM":return Object(O.a)({},e,{algorithm:t.algorithm});case"CHANGE_ARRAY_SIZE":return Object(O.a)({},e,{arraySize:t.arraySize});case"CHANGE_ANIMATION_SPEED":return Object(O.a)({},e,{animationSpeed:t.animationSpeed});case"CHANGE_ARRAY_TYPE":return Object(O.a)({},e,{arrayType:t.arrayType});case"SORT_ALGORITHM":return Object(O.a)({},e,{sort:t.sort});default:return Object(O.a)({},e)}},S=Object(y.b)({globals:p}),j=Object(y.c)(S,{});i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:j},a.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.697d3698.chunk.js.map