!function(){var n,r;!function(){function e(n,r){if(!r)return n;if(0===n.indexOf(".")){var e=r.split("/"),i=n.split("/"),t=e.length-1,a=i.length,o=0,u=0;n:for(var f=0;a>f;f++)switch(i[f]){case"..":if(!(t>o))break n;o++,u++;break;case".":u++;break;default:break n}return e.length=t-o,i=i.slice(u),e.concat(i).join("/")}return n}function i(n){function r(r,o){if("string"==typeof r){var u=i[r];return u||(u=a(e(r,n)),i[r]=u),u}r instanceof Array&&(o=o||function(){},o.apply(this,t(r,o,n)))}var i={};return r}function t(r,i,t){for(var u=[],f=o[t],c=0,s=Math.min(r.length,i.length);s>c;c++){var d,l=e(r[c],t);switch(l){case"require":d=f&&f.require||n;break;case"exports":d=f.exports;break;case"module":d=f;break;default:d=a(l)}u.push(d)}return u}function a(n){var r=o[n];if(!r)throw new Error("No "+n);if(!r.defined){var e=r.factory,i=e.apply(this,t(r.deps||[],e,n));"undefined"!=typeof i&&(r.exports=i),r.defined=1}return r.exports}var o={};r=function(n,r,e){o[n]={id:n,deps:r,factory:e,defined:0,exports:{},require:i(n)}},n=i("")}(),r("ig",["ig/ig"],function(n){return n}),r("ig/ig",["require","./a"],function(n){var r={};return r.init=function(){console.warn("ig init");n("./a")},r}),r("ig/b",["require"],function(){var n={};return n.init=function(){console.warn("bbbb init")},n}),r("ig/a",["require"],function(){var n={};return n.init=function(){console.warn("aaaa init")},n})}(window);