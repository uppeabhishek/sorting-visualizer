(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{246:function(e,t,n){e.exports=n(451)},450:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);n(247),n(256);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),i=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(e){return{sort:e,type:"SORT_ALGORITHM"}},u=function(){var e=Object(a.useRef)([{minifiedName:"QUI",name:"Quick Sort"},{minifiedName:"MER",name:"Merge Sort"},{minifiedName:"BUB",name:"Bubble Sort"},{minifiedName:"SEL",name:"Selection Sort"},{minifiedName:"INS",name:"Insertion Sort"}]),t=Object(i.c)((function(e){return e.globals.algorithm})),n=Object(i.c)((function(e){return e.globals.sort})),l=Object(i.b)();return r.a.createElement("div",{key:t,className:n?"disabled algo-toggle d-flex":"algo-toggle d-flex"},e.current.map((function(e){return t===e.name?r.a.createElement("div",{key:e.name,className:"selected",title:e.name},e.name):r.a.createElement("div",{key:e.name,title:e.name,onClick:function(){return l({algorithm:e.name,type:"CHANGE_DEFAULT_ALGORITHM"})}},e.minifiedName)})))},s=n(452),m=n(497),f=n(501),d=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.globals.arrayType})),n=Object(i.c)((function(e){return e.globals.sort}));return r.a.createElement("div",null,r.a.createElement(s.a,{id:"select",color:"inherit"},"Array Type"),r.a.createElement(m.a,{color:"primary",disabled:n,id:"select",labelId:"select",value:t,onChange:function(t){e(function(e){return{arrayType:e,type:"CHANGE_ARRAY_TYPE"}}(t.target.value))}},["Randomize","Almost Sorted","Increasing","Decreasing"].map((function(e){return r.a.createElement(f.a,{value:e,key:e},e)}))))},h=n(505),E=function(){var e=Object(i.c)((function(e){return e.globals.arraySize})),t=Object(i.c)((function(e){return e.globals.sort})),n=Object(i.b)();return r.a.createElement("div",null,r.a.createElement(s.a,{color:"inherit",gutterBottom:!0,id:"arraySizeSlider"},"Array Size"),r.a.createElement(h.a,{"aria-labelledby":"arraySizeSlider",disabled:t,getAriaValueText:function(e){return e.toString()},marks:!0,max:90,min:10,step:10,value:e,valueLabelDisplay:"off",onChange:function(e,t){"number"===typeof t&&n(function(e){return{arraySize:e,type:"CHANGE_ARRAY_SIZE"}}(t))}}))},p=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.globals.animationSpeed}));var n=Object(i.c)((function(e){return e.globals.sort}));return r.a.createElement("div",null,r.a.createElement(s.a,{color:"inherit",gutterBottom:!0,id:"animationSpeedSlider"},"Animation Speed"),r.a.createElement(h.a,{color:"primary","aria-labelledby":"animationSpeedSliderr",disabled:n,getAriaValueText:function(e){return e.toString()},marks:!0,max:90,min:10,step:10,value:t,valueLabelDisplay:"off",onChange:function(t,n){"number"===typeof n&&e(function(e){return{animationSpeed:e,type:"CHANGE_ANIMATION_SPEED"}}(n))}}))},b=n(491),g=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.globals.sort}));return r.a.createElement(b.a,{color:"primary",disabled:t,variant:"contained",onClick:function(){return e(o(!0))}},"Sort")},v=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"title",onClick:function(){return window.location.reload()}},"Sorting Visualizer"),r.a.createElement(u,null),r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(p,null),r.a.createElement(g,null))},y=n(65),O=n(44);var x=n(25),S=n.n(x),k=n(35);function N(e){return new Promise((function(t){return setTimeout(t,e)}))}function w(e,t){var n=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-n+1))+n}function j(e,t,n){e[t].children[0].style.fill=n}function A(e,t){var n=e.parentNode,a=e,r=t,l=t.nextSibling;n&&(n.insertBefore(r,a),n.insertBefore(a,l));var c=e.transform.baseVal.getItem(0),i=0,o=0;c.type===SVGTransform.SVG_TRANSFORM_TRANSLATE&&(i=c.matrix.e,o=c.matrix.f);var u=t.transform.baseVal.getItem(0),s=0,m=0;u.type===SVGTransform.SVG_TRANSFORM_TRANSLATE&&(s=u.matrix.e,m=u.matrix.f),t.transform.baseVal.getItem(0).setTranslate(i,m),e.transform.baseVal.getItem(0).setTranslate(s,o)}function C(){return(C=Object(k.a)(S.a.mark((function e(t,n,a){var r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return l().then((function(){return!0})).catch((function(e){return e}))},c=function(){return(c=Object(k.a)(S.a.mark((function e(){var l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=0;case 1:if(!(l<r)){e.next=34;break}c=0;case 3:if(!(c<r-l-1)){e.next=30;break}return j(n,c,"blue"),j(n,c+1,"blue"),e.next=8,N(a);case 8:if(!(t[c]>t[c+1])){e.next=19;break}return j(n,c,"red"),j(n,c+1,"red"),e.next=13,N(a);case 13:i=[t[c+1],t[c]],t[c]=i[0],t[c+1]=i[1],A(n[c],n[c+1]),e.next=23;break;case 19:return j(n,c,"green"),j(n,c+1,"green"),e.next=23,N(a);case 23:return j(n,c,"#251b12"),j(n,c+1,"#251b12"),e.next=27,N(a);case 27:c++,e.next=3;break;case 30:j(n,r-l-1,"hotpink");case 31:l++,e.next=1;break;case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(){return c.apply(this,arguments)},r=t.length,e.abrupt("return",i());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(k.a)(S.a.mark((function e(t,n,a){var r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return l().then((function(){return!0})).catch((function(e){return e}))},c=function(){return(c=Object(k.a)(S.a.mark((function e(){var l,c,i,o,u,s,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=0;case 1:if(!(l<r-1)){e.next=29;break}c=t[l],(o=n[i=l].children)[0].style.fill="green",u=l+1;case 7:if(!(u<r)){e.next=18;break}return(s=n[u].children)[0].style.fill="blue",e.next=12,N(a);case 12:return t[u]<c?(o[0].style.fill="#251b12",s[0].style.fill="green",o=s,c=t[u],i=u):s[0].style.fill="#251b12",e.next=15,N(a);case 15:u++,e.next=7;break;case 18:return m=[t[i],t[l]],t[l]=m[0],t[i]=m[1],A(n[l],n[i]),n[l].children[0].style.fill="hotpink",e.next=26,N(a);case 26:l++,e.next=1;break;case 29:j(n,l,"hotpink");case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(){return c.apply(this,arguments)},r=t.length,e.abrupt("return",i());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(k.a)(S.a.mark((function e(t,n,a){var r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return l().then((function(){return!0})).catch((function(e){return e}))},c=function(){return(c=Object(k.a)(S.a.mark((function e(){var l,c,i,o,u,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n[0].children[0].style.fill="green",e.next=4,N(a);case 4:l=1;case 5:if(!(l<r)){e.next=46;break}c=t[l],o=n[i=l].children,u=0;case 10:if(!(u<=l)){e.next=43;break}return o[0].style.fill="blue",j(n,u,"blue"),e.next=15,N(a);case 15:if(!(c<t[u])){e.next=33;break}return o[0].style.fill="red",j(n,u,"red"),e.next=20,N(a);case 20:return s=[t[i],t[u]],t[u]=s[0],t[i]=s[1],c=t[l],A(n[u],n[i]),o[0].style.fill="#251b12",j(n,u,"#251b12"),e.next=29,N(a);case 29:o=n[l].children,i=l,e.next=40;break;case 33:return j(n,u,"green"),e.next=36,N(a);case 36:return o[0].style.fill="#251b12",j(n,u,"#251b12"),e.next=40,N(a);case 40:u++,e.next=10;break;case 43:l++,e.next=5;break;case 46:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(){return c.apply(this,arguments)},r=t.length,e.abrupt("return",i());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(54),z=n.n(R),M=n(100);function B(){return(B=Object(M.a)(z.a.mark((function e(t,n,a,r){var l,c,i,o,u,s,m,f,d;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(){return m().then((function(){return!0})).catch((function(e){return e}))},f=function(){return(f=Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,0,l-1);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(){return f.apply(this,arguments)},s=function(){return(s=Object(M.a)(z.a.mark((function e(t,n,a){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=a)){e.next=2;break}return e.abrupt("return");case 2:return r=Math.floor(n+(a-n)/2),e.next=5,u(t,n,r);case 5:return e.next=7,u(t,r+1,a);case 7:return e.next=9,i(t,n,r,a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)},u=function(e,t,n){return s.apply(this,arguments)},o=function(){return(o=Object(M.a)(z.a.mark((function e(t,r,l,i){var o,u,s,m,f,d,h,E,p,b,g,v,y,O,x,S,k,w,j,A,C,T,I,R,M;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=l-r+1,u=i-l,s=new Array(o),m=new Array(u),f=new Array(o),d=new Array(u),h=new Array(o),E=new Array(u),p=0;p<o;p++)s[p]=t[r+p],f[p]=r+p,h[p]=n[r+p].cloneNode(!0);for(b=0;b<u;b++)m[b]=t[l+b+1],d[b]=l+b+1,E[b]=n[l+b+1].cloneNode(!0);g=0,v=0,y=r;case 13:if(!(g<o&&v<u)){e.next=43;break}return O=n[f[g]].children,x=n[d[v]].children,S=O[0],k=x[0],S.style.fill="blue",k.style.fill="blue",e.next=22,N(a);case 22:if(!(s[g]<=m[v])){e.next=33;break}return w=c(y,g,h),S.style.fill=w?"hotpink":"green",e.next=27,N(a);case 27:t[y++]=s[g],g+=1,S.style.fill="#251b12",k.style.fill="#251b12",e.next=41;break;case 33:return j=c(y,v,E),k.style.fill=j?"hotpink":"green",e.next=37,N(a);case 37:t[y++]=m[v],v+=1,S.style.fill="#251b12",k.style.fill="#251b12";case 41:e.next=13;break;case 43:if(!(g<o)){e.next=56;break}return A=n[f[g]].children,C=A[0],T=c(y,g,h),C.style.fill=T?"hotpink":"green",C.style.fill="hotpink",e.next=51,N(a);case 51:t[y++]=s[g],g+=1,C.style.fill="#251b12",e.next=43;break;case 56:if(!(v<u)){e.next=68;break}return I=n[d[v]].children,R=I[0],M=c(y,v,E),R.style.fill=M?"hotpink":"green",e.next=63,N(a);case 63:t[y++]=m[v],v+=1,R.style.fill="#251b12",e.next=56;break;case 68:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(e,t,n,a){return o.apply(this,arguments)},c=function(e,t,a){var l=n[e],c=a[t],i=c.children[0].getAttribute("height"),o=l.getAttribute("transform"),u="",s=0;if(o){u=o.split("(")[1].split(" ")[0];var m=o.split("(")[1].split(" ")[1];s=parseInt(m.substring(0,m.length-2))}return!(!i||r-parseInt(i)===s)&&(l.setAttribute("transform","translate(".concat(u," ").concat(r-parseInt(i),")")),l.children[0].setAttribute("height",i),l.children[1].innerHTML=c.children[1].innerHTML,l.children[1].setAttribute("y",(parseInt(i)/2).toString()),!0)},l=t.length,e.abrupt("return",d());case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(k.a)(S.a.mark((function e(t,n,a){var r,l,c,i,o,u,s,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=function(){return u().then((function(){return!0})).catch((function(e){return e}))},s=function(){return(s=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,0,r-1);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},u=function(){return s.apply(this,arguments)},o=function(){return(o=Object(k.a)(S.a.mark((function e(t,n,a){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=a)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,l(t,n,a);case 4:return r=e.sent,e.next=7,i(t,n,r-1);case 7:return e.next=9,i(t,r+1,a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(e,t,n){return o.apply(this,arguments)},c=function(){return(c=Object(k.a)(S.a.mark((function e(t,r,l){var c,i,o,u,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r,j(n,c=l,"blue"),o=r;case 4:if(!(o<l)){e.next=38;break}return j(n,o,"blue"),j(n,i,"blue"),e.next=9,N(a);case 9:if(!(t[o]<t[c])){e.next=25;break}return j(n,o,"red"),j(n,i,"red"),e.next=14,N(a);case 14:return A(n[i],n[o]),u=[t[i],t[o]],t[o]=u[0],t[i]=u[1],j(n,o,"#251b12"),j(n,i,"#251b12"),e.next=22,N(a);case 22:i++,e.next=33;break;case 25:return j(n,o,"green"),j(n,i,"green"),e.next=29,N(a);case 29:return j(n,o,"#251b12"),j(n,i,"#251b12"),e.next=33,N(a);case 33:return e.next=35,N(a);case 35:o++,e.next=4;break;case 38:return j(n,c,"#251b12"),e.next=41,N(a);case 41:return A(n[i],n[c]),s=[t[i],t[c]],t[c]=s[0],t[i]=s[1],e.abrupt("return",i);case 46:case"end":return e.stop()}}),e)})))).apply(this,arguments)},l=function(e,t,n){return c.apply(this,arguments)},r=t.length,e.abrupt("return",m());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=n(502),G=n(498),L=function(){var e=Object(i.c)((function(e){return e.globals.arraySize})),t=Object(i.c)((function(e){return e.globals.arrayType})),n=Object(a.useState)([]),l=Object(y.a)(n,2),c=l[0],u=l[1],s=Object(a.useRef)(2),m=Object(a.useRef)(2),f=Object(a.useRef)(1),d=Object(a.useRef)(100),h=Object(a.useState)([0,0]),E=Object(y.a)(h,2),p=E[0],b=E[1];function g(){var t=[],n=m.current;e<n&&(e=n);for(var a=Math.ceil(e/s.current),r=0;r<a;r++)t.push(w(f.current,d.current));return t}function v(e,t,n){for(var a=[],r=e;r<t;r++)a.push(n[r]);a=function(e){for(var t=e.length-1;t>0;t--){var n=w(0,t-1),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(a);for(var l=0,c=e;c<t;c++)n[c]=a[l++]}function x(e){return{"Almost Sorted":function(){var e;return e=0===w(0,1)?g().sort((function(e,t){return e-t})):g().sort((function(e,t){return t-e})),v(0,Math.floor(e.length/6),e),v(Math.ceil(e.length/1.25),e.length,e),e},Decreasing:function(){return g().sort((function(e,t){return t-e}))},Increasing:function(){return g().sort((function(e,t){return e-t}))},Randomize:function(){return g()}}[e]()}Object(a.useEffect)((function(){u(x(t))}),[e]),Object(a.useEffect)((function(){u(x(t))}),[t]);var S=Object(a.useRef)(20),k=Object(a.useRef)(20),N=c.length,A=p[0]-2*k.current,R=(p[1]-2*S.current)/N,z=function(){var e=Object(a.useState)([window.innerWidth,window.innerHeight]),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}(),M=Object(y.a)(z,2),L=M[0],V=M[1];Object(a.useEffect)((function(){var e=document.querySelector(".svg-block");e&&b([e.clientHeight,e.clientWidth])}),[L,V]),Object(a.useEffect)((function(){var e=document.querySelector(".svg-block");e&&b([e.clientHeight,e.clientWidth])}),[]);var W=Object(a.useRef)(null),q=Object(i.c)((function(e){return e.globals.sort})),D=Object(i.b)(),P=Object(i.c)((function(e){return e.globals.animationSpeed}));P=7*(100-P);var F=Object(i.c)((function(e){return e.globals.algorithm})),Q=Object(a.useState)(!1),Y=Object(y.a)(Q,2),U=Y[0],J=Y[1];function Z(e){return r.a.createElement(G.a,Object.assign({elevation:6,variant:"filled"},e))}function X(){var e=null;W.current&&(e=W.current.children);for(var t=0;t<e.length;t++)j(e,t,"hotpink");setTimeout((function(){J(!0),D(o(!1))}),1e3)}return Object(a.useEffect)((function(){if(q&&W){var e=null;switch(W.current&&(e=W.current.children),F){case"Bubble Sort":(function(e,t,n){return C.apply(this,arguments)})(c,e,P).then((function(e){e&&X()}));break;case"Selection Sort":(function(e,t,n){return T.apply(this,arguments)})(c,e,P).then((function(e){e&&X()}));break;case"Insertion Sort":(function(e,t,n){return I.apply(this,arguments)})(c,e,P).then((function(e){e&&X()}));break;case"Merge Sort":(function(e,t,n,a){return B.apply(this,arguments)})(c,e,P,A).then((function(e){e&&X()}));break;case"Quick Sort":(function(e,t,n){return _.apply(this,arguments)})(c,e,P).then((function(e){e&&X()}))}}}),[q]),r.a.createElement("div",{className:"svg-block",style:{marginTop:k.current,marginBottom:k.current,marginLeft:S.current,marginRight:S.current}},r.a.createElement(H.a,{open:U,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:function(){return J(!1)}},r.a.createElement(Z,{onClose:function(){return J(!1)},severity:"success"},"Sorting Completed")),r.a.createElement("svg",{key:F.toString()+q,ref:W,height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg"},c.map((function(e,t){var n=e*A/d.current;return r.a.createElement("g",{key:(t*R).toString()+(A-n).toString(),transform:"translate(".concat(t*R," ").concat(A-n,")")},r.a.createElement("rect",{height:n,style:{fill:"#251b12",stroke:"pink",strokeOpacity:.9,strokeWidth:2},width:R}),r.a.createElement("text",{alignmentBaseline:"central",style:{fill:"white"},textAnchor:"middle",x:R/2,y:n/2},R>23?e:""))}))))},V=function(){var e=function(e){var t=e.color;return r.a.createElement("div",{style:{backgroundColor:t,width:"100px",height:"20px"}})},t=Object(i.c)((function(e){return e.globals.algorithm})),n={"Quick Sort":r.a.createElement("div",{className:"sorting-algorithm-info"},r.a.createElement("div",{className:"sorting-fact"},r.a.createElement("q",null,r.a.createElement("i",null,"Quicksort is an efficient sorting algorithm. It is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitor merge sort."))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Time Complexity"),r.a.createElement("th",null,"Space Complexity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(NlogN)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Case"),r.a.createElement("td",null,"O(NlogN)"),r.a.createElement("td",null,"O(NlogN)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Best Case"),r.a.createElement("td",null,"O(NlogN)"),r.a.createElement("td",null,"O(NlogN)"))))),"Bubble Sort":r.a.createElement("div",{className:"sorting-algorithm-info"},r.a.createElement("div",{className:"sorting-fact"},r.a.createElement("q",null,r.a.createElement("i",null,"Simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted."))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Time Complexity"),r.a.createElement("th",null,"Space Complexity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Best Case"),r.a.createElement("td",null,"O(N)"),r.a.createElement("td",null,"O(1)"))))),"Selection Sort":r.a.createElement("div",{className:"sorting-algorithm-info"},r.a.createElement("div",{className:"sorting-fact"},r.a.createElement("q",null,r.a.createElement("i",null,"It is an in-place comparison sorting algorithm. It has an O(n\xb2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort."))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Time Complexity"),r.a.createElement("th",null,"Space Complexity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Best Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)"))))),"Insertion Sort":r.a.createElement("div",{className:"sorting-algorithm-info"},r.a.createElement("div",{className:"sorting-fact"},r.a.createElement("q",null,r.a.createElement("i",null,"Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Time Complexity"),r.a.createElement("th",null,"Space Complexity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst Case"),r.a.createElement("td",null,"O(N)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Best Case"),r.a.createElement("td",null,"O(N^2)"),r.a.createElement("td",null,"O(1)"))))),"Merge Sort":r.a.createElement("div",{className:"sorting-algorithm-info"},r.a.createElement("div",{className:"sorting-fact"},r.a.createElement("q",null,r.a.createElement("i",null,"Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Time Complexity"),r.a.createElement("th",null,"Space Complexity"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst Case"),r.a.createElement("td",null,"O(NlogN)"),r.a.createElement("td",null,"O(N)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Average Case"),r.a.createElement("td",null,"O(NlogN)"),r.a.createElement("td",null,"O(N)")),r.a.createElement("tr",null,r.a.createElement("td",null,"Best Case"),r.a.createElement("td",null,"O(NlogN)"),r.a.createElement("td",null,"O(N)")))))};return r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"colors"},r.a.createElement("div",{className:"item"},r.a.createElement("div",null,"Current Comparision"),r.a.createElement(e,{color:"blue"})),r.a.createElement("div",{className:"item"},r.a.createElement("div",null,"Incorrect Position"),r.a.createElement(e,{color:"red"})),r.a.createElement("div",{className:"item"},r.a.createElement("div",null,"Correct Position"),r.a.createElement(e,{color:"green"})),r.a.createElement("div",{className:"item"},r.a.createElement("div",null,"Sorted"),r.a.createElement(e,{color:"hotpink"}))),r.a.createElement("div",null,n[t]))},W=n(235),q=n(503),D=n(5),P=n(496),F=n(42),Q=n(500),Y=n(493),U=n(494),J=n(495),Z=n(492),X=n(234),$=n.n(X),K=n(504),ee=n(162),te=n.n(ee),ne=n(161),ae=n.n(ne),re=function(e){var t=e.activeStep;return{0:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"This tutorial will walk through the features of Sorting Visualizer."),r.a.createElement("br",null),r.a.createElement(s.a,null,"If you want to dive into the application directly. Feel free to Skip this tutorial by closing it.")),1:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"Sorting Algorithm"),r.a.createElement("br",null),r.a.createElement("div",null,"I have implemented the below sorting algorithms."),r.a.createElement("ul",null,r.a.createElement("li",null,"Merge Sort"),r.a.createElement("li",null,"Quick Sort"),r.a.createElement("li",null,"Bubble Sort"),r.a.createElement("li",null,"Insertion Sort"),r.a.createElement("li",null,"Selection Sort")),r.a.createElement("div",null,'To choose an algorithm, pick an algorithm from "Algorithms" drop down menu.'),r.a.createElement("div",{className:"center-items",style:{marginTop:10}})),2:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"Array Type"),r.a.createElement("br",null),r.a.createElement("div",null,"You can select your initial state of array from the following options"),r.a.createElement("ul",null,r.a.createElement("li",null,"Random"),r.a.createElement("li",null,"Increasing"),r.a.createElement("li",null,"Decreasing"),r.a.createElement("li",null,"Almost Sorted")),r.a.createElement("div",null,"To choose an intial state of array, pick an array type from ",r.a.createElement("b",null,"Array Type")," ","drop down menu."),r.a.createElement("div",{className:"center-items",style:{marginTop:10}})),3:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"Array Size"),r.a.createElement("br",null),r.a.createElement("div",null,"To change array size use the ",r.a.createElement("b",null,"Array Size")," Slider."),r.a.createElement("div",{className:"center-items",style:{marginTop:10}})),4:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"Animation Speed"),r.a.createElement("br",null),r.a.createElement("div",null,"To change animation speed use the ",r.a.createElement("b",null,"Animation Speed")," Slider."),r.a.createElement("div",{className:"center-items",style:{marginTop:10}})),5:r.a.createElement("div",null,r.a.createElement(s.a,{variant:"h6"},"Visualize"),r.a.createElement("br",null),r.a.createElement("div",null,"To Visualize the algorithm. Click ",r.a.createElement("b",null,"Sort")),r.a.createElement("div",{className:"center-items",style:{marginTop:10}}),r.a.createElement(s.a,{variant:"h6"},"Enjoy the visualization tool :)"))}[t]},le=Object(D.a)((function(e){return Object(q.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,n=e.classes,a=e.onClose,l=Object(W.a)(e,["children","classes","onClose"]);return r.a.createElement(Y.a,Object.assign({className:n.root,disableTypography:!0},l),r.a.createElement(s.a,{variant:"h6"},t),a?r.a.createElement(Z.a,{"aria-label":"close",className:n.closeButton,onClick:a},r.a.createElement($.a,null)):null)})),ce=Object(D.a)((function(e){return{root:{padding:e.spacing(2)}}}))(U.a),ie=Object(D.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(J.a),oe=Object(P.a)({root:{maxWidth:"100%",flexGrow:1}});function ue(){var e=r.a.useState(!0),t=Object(y.a)(e,2),n=t[0],a=t[1],l=function(){a(!1)},c=oe(),i=Object(F.a)(),o=r.a.useState(0),u=Object(y.a)(o,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement(Q.a,{disableBackdropClick:!0,"aria-labelledby":"customized-dialog-title",fullWidth:!0,open:n,onClose:l},r.a.createElement(le,{id:"customized-dialog-title",onClose:l},"Sorting Visualizer"),r.a.createElement(ce,{dividers:!0},r.a.createElement(re,{activeStep:s})),r.a.createElement(ie,null,r.a.createElement(K.a,{activeStep:s,backButton:r.a.createElement(b.a,{disabled:0===s,size:"small",onClick:function(){m((function(e){return e-1}))}},"rtl"===i.direction?r.a.createElement(ae.a,null):r.a.createElement(te.a,null),"Back"),className:c.root,nextButton:r.a.createElement(b.a,{size:"small",onClick:function(){m((function(e){return e+1}))},disabled:5===s},"Next","rtl"===i.direction?r.a.createElement(te.a,null):r.a.createElement(ae.a,null)),position:"static",steps:6,variant:"dots"}),5===s&&r.a.createElement(b.a,{onClick:l},"Finish"))))}var se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"main-blocks"},r.a.createElement(ue,null),r.a.createElement(V,null),r.a.createElement(L,{key:"1"})))},me=(n(448),n(449),n(450),n(77)),fe=n(66),de={algorithm:"Quick Sort",animationSpeed:50,arraySize:50,arrayType:"Randomize",sort:!1,pause:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DEFAULT_ALGORITHM":return Object(fe.a)({},e,{algorithm:t.algorithm});case"CHANGE_ARRAY_SIZE":return Object(fe.a)({},e,{arraySize:t.arraySize});case"CHANGE_ANIMATION_SPEED":return Object(fe.a)({},e,{animationSpeed:t.animationSpeed});case"CHANGE_ARRAY_TYPE":return Object(fe.a)({},e,{arrayType:t.arrayType});case"SORT_ALGORITHM":return Object(fe.a)({},e,{sort:t.sort});case"PAUSE_EXECUTION":return Object(fe.a)({},e,{pause:t.pause});default:return Object(fe.a)({},e)}},Ee=Object(me.b)({globals:he}),pe=Object(me.c)(Ee,{});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:pe},r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[246,1,2]]]);
//# sourceMappingURL=main.84dc6626.chunk.js.map