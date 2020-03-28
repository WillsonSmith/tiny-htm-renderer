exports.h=function(e,n){var r;for(var t in e=document.createElement(e),n)t in e?e[t]=n[t]:e.setAttribute(t,n[t]);for(var a=arguments.length,i=new Array(a>2?a-2:0),l=2;l<a;l++)i[l-2]=arguments[l];return(r=e).append.apply(r,i.flat(Infinity)),e},exports.renderer=function(){var e=null;return function(n,r){e?r.replaceChild(n,e):r.appendChild(n),e=n}};
//# sourceMappingURL=index.js.map
