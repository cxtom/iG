!function(t){var e,n;!function(){function t(t,e){if(!e)return t;if(0===t.indexOf(".")){var n=e.split("/"),a=t.split("/"),i=n.length-1,r=a.length,s=0,o=0;t:for(var u=0;r>u;u++)switch(a[u]){case"..":if(!(i>s))break t;s++,o++;break;case".":o++;break;default:break t}return n.length=i-s,a=a.slice(o),n.concat(a).join("/")}return t}function a(e){function n(n,s){if("string"==typeof n){var o=a[n];return o||(o=r(t(n,e)),a[n]=o),o}n instanceof Array&&(s=s||function(){},s.apply(this,i(n,s,e)))}var a={};return n}function i(n,a,i){for(var o=[],u=s[i],c=0,h=Math.min(n.length,a.length);h>c;c++){var p,l=t(n[c],i);switch(l){case"require":p=u&&u.require||e;break;case"exports":p=u.exports;break;case"module":p=u;break;default:p=r(l)}o.push(p)}return o}function r(t){var e=s[t];if(!e)throw new Error("No "+t);if(!e.defined){var n=e.factory,a=n.apply(this,i(e.deps||[],n,t));"undefined"!=typeof a&&(e.exports=a),e.defined=1}return e.exports}var s={};n=function(t,e,n){s[t]={id:t,deps:e,factory:n,defined:0,exports:{},require:a(t)}},e=a("")}(),n("ig",["ig/ig"],function(t){return t}),n("ig/ig",["require"],function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){var e,n,a=this;setTimeout(function(){e=+new Date,t(e),n=+new Date,a.timeout=1e3/60-(n-e)},a.timeout)}}(),window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout}();var t={};return t.STATUS={NORMAL:1,NOT_RENDER:2,NOT_UPDATE:3,NOT_RU:4,DESTROYED:5},t}),n("ig/util",["require"],function(){var t=Math.PI/180,e=180/Math.PI,n=Object.prototype,a={};return a.noop=function(){},a.getType=function(t){var e=n.toString.call(t).slice(8,-1);return e.toLowerCase()},a.isType=function(t,e){var n=a.getType(e);return t.toLowerCase()===n},a.isWindow=function(t){return null!=t&&t===t.window},a.isPlainObject=function(t){return"object"!==a.getType(t)||t.nodeType||a.isWindow(t)?!1:t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},a.extend=function(){var t,e,n,i,r,s,o=arguments[0]||{},u=1,c=arguments.length,h=!1;for("boolean"==typeof o&&(h=o,o=arguments[u]||{},u++),"object"==typeof o||a.isType("function",o)||(o={}),u===c&&(o=this,u--);c>u;u++)if(null!=(t=arguments[u]))for(e in t)if(t.hasOwnProperty(e)){if(n=o[e],i=t[e],o===i)continue;h&&i&&(a.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,s=n&&Array.isArray(n)?n:[]):s=n&&a.isPlainObject(n)?n:{},o[e]=a.extend(h,s,i)):void 0!==i&&(o[e]=i)}return o},a.inherits=function(t,e){var n=function(){};n.prototype=e.prototype;var a=t.prototype,i=t.prototype=new n;for(var r in a)a.hasOwnProperty(r)&&(i[r]=a[r]);return t.prototype.constructor=t,t.superClass=e.prototype,t},a.deg2Rad=function(e){return e*t},a.rad2Deg=function(t){return t*e},a.randomInt=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},a.randomFloat=function(t,e){return Math.random()*(e-t)+t},a.removeArrByCondition=function(t,e){for(var n,a=-1,i=0,r=t.length;r>i;i++)if(n=t[i],e(n)){a=i;break}-1!==a&&t.splice(a,1)},a.window2Canvas=function(t,e,n){var a=t.getBoundingClientRect();return{x:Math.round(e-a.left*(t.width/a.width)),y:Math.round(n-a.top*(t.height/a.height))}},a.domWrap=function(t,e,n){return t.parentNode.insertBefore(e,t),e.appendChild(t),e.id=n||"ig-create-dom-"+Date.now(),t},a.getElementOffset=function(t){for(var e=t.offsetLeft,n=t.offsetTop;(t=t.offsetParent)&&t!=document.body&&t!=document;)e+=t.offsetLeft,n+=t.offsetTop;return{x:e,y:n}},a}),n("ig/easing",["require"],function(){var t={};return t.linear=function(t,e,n,a){return n*t/a+e},t.easeInQuad=function(t,e,n,a){return n*(t/=a)*t+e},t.easeOutQuad=function(t,e,n,a){return-n*(t/=a)*(t-2)+e},t.easeInOutQuad=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},t.easeInCubic=function(t,e,n,a){return n*(t/=a)*t*t+e},t.easeOutCubic=function(t,e,n,a){return n*((t=t/a-1)*t*t+1)+e},t.easeInOutCubic=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},t.easeInQuart=function(t,e,n,a){return n*(t/=a)*t*t*t+e},t.easeOutQuart=function(t,e,n,a){return-n*((t=t/a-1)*t*t*t-1)+e},t.easeInOutQuart=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e},t.easeInQuint=function(t,e,n,a){return n*(t/=a)*t*t*t*t+e},t.easeOutQuint=function(t,e,n,a){return n*((t=t/a-1)*t*t*t*t+1)+e},t.easeInOutQuint=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e},t.easeInSine=function(t,e,n,a){return-n*Math.cos(t/a*(Math.PI/2))+n+e},t.easeOutSine=function(t,e,n,a){return n*Math.sin(t/a*(Math.PI/2))+e},t.easeInOutSine=function(t,e,n,a){return-n/2*(Math.cos(Math.PI*t/a)-1)+e},t.easeInExpo=function(t,e,n,a){return 0===t?e:n*Math.pow(2,10*(t/a-1))+e},t.easeOutExpo=function(t,e,n,a){return t===a?e+n:n*(-Math.pow(2,-10*t/a)+1)+e},t.easeInOutExpo=function(t,e,n,a){return 0===t?e:t===a?e+n:(t/=a/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(-Math.pow(2,-10*--t)+2)+e},t.easeInCirc=function(t,e,n,a){return-n*(Math.sqrt(1-(t/=a)*t)-1)+e},t.easeOutCirc=function(t,e,n,a){return n*Math.sqrt(1-(t=t/a-1)*t)+e},t.easeInOutCirc=function(t,e,n,a){return(t/=a/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e},t.easeInElastic=function(t,e,n,a,i,r){if(0===t)return e;if(1===(t/=a))return e+n;r||(r=.3*a);var s;return!i||i<Math.abs(n)?(i=n,s=r/4):s=r/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-s)*Math.PI/r))+e},t.easeOutElastic=function(t,e,n,a,i,r){if(0===t)return e;if(1===(t/=a))return e+n;r||(r=.3*a);var s;return!i||i<Math.abs(n)?(i=n,s=r/4):s=r/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*t)*Math.sin(2*(t*a-s)*Math.PI/r)+n+e},t.easeInOutElastic=function(t,e,n,a,i,r){if(0===t)return e;if(2===(t/=a/2))return e+n;r||(r=.3*a*1.5);var s;return!i||i<Math.abs(n)?(i=n,s=r/4):s=r/(2*Math.PI)*Math.asin(n/i),1>t?-.5*i*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-s)*Math.PI/r)+e:i*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*a-s)*Math.PI/r)*.5+n+e},t.easeInBack=function(t,e,n,a,i){return void 0===i&&(i=1.70158),n*(t/=a)*t*((i+1)*t-i)+e},t.easeOutBack=function(t,e,n,a,i){return void 0===i&&(i=1.70158),n*((t=t/a-1)*t*((i+1)*t+i)+1)+e},t.easeInOutBack=function(t,e,n,a,i){return void 0===i&&(i=1.70158),(t/=a/2)<1?n/2*t*t*(((i*=1.525)+1)*t-i)+e:n/2*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)+e},t.easeInBounce=function(e,n,a,i){return a-t.easeOutBounce(i-e,0,a,i)+n},t.easeOutBounce=function(t,e,n,a){return(t/=a)<1/2.75?7.5625*n*t*t+e:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},t.easeInOutBounce=function(e,n,a,i){return i/2>e?.5*t.easeInBounce(2*e,0,a,i)+n:.5*t.easeOutBounce(2*e-i,0,a,i)+.5*a+n},t}),n("ig/env",["require"],function(){function t(t){var e={},n={},a=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),i=t.match(/(Android);?[\s\/]+([\d.]+)?/),r=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),o=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),c=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),h=t.match(/Windows Phone ([\d.]+)/),p=c&&t.match(/TouchPad/),l=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),d=t.match(/(BB10).*Version\/([\d.]+)/),g=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),v=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),w=t.match(/Firefox\/([\d.]+)/),b=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),x=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=x||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),O=t.match(/MicroMessenger\/([\d.]+)/),F=t.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/)||t.match(/baiduboxapp\/([\d.]+)/)||t.match(/BaiduHD\/([\d.]+)/)||t.match(/FlyFlow\/([\d.]+)/)||t.match(/baidubrowser\/([\d.]+)/),C=t.match(/MQQBrowser\/([\d.]+)/)||t.match(/QQ\/([\d.]+)/),T=t.match(/UCBrowser\/([\d.]+)/),I=t.match(/SogouMobileBrowser\/([\d.]+)/),M=i&&t.match(/MiuiBrowser\/([\d.]+)/),A=t.match(/LBKIT/),E=t.match(/Mercury\/([\d.]+)/);return(n.webkit=!!a)&&(n.version=a[1]),i&&(e.android=!0,e.version=i[2]),u&&!o&&(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,".")),s&&(e.ios=e.ipad=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipod=!0,e.version=o[3]?o[3].replace(/_/g,"."):null),h&&(e.wp=!0,e.version=h[1]),c&&(e.webos=!0,e.version=c[2]),p&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),d&&(e.bb10=!0,e.version=d[2]),g&&(e.rimtabletos=!0,e.version=g[2]),v&&(n.playbook=!0),l&&(e.kindle=!0,e.version=l[1]),m&&(n.silk=!0,n.version=m[1]),!m&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),w&&(n.firefox=!0,n.version=w[1]),b&&(n.ie=!0,n.version=b[1]),S&&(r||e.ios)&&(n.safari=!0,r&&(n.version=S[1])),x&&(n.webview=!0),O&&(n.wechat=!0,n.version=O[1]),F&&(delete n.webview,n.baidu=!0,n.version=F[1]),C&&(n.qq=!0,n.version=C[1]),T&&(delete n.webview,n.uc=!0,n.version=T[1]),I&&(delete n.webview,n.sogou=!0,n.version=I[1]),M&&(n.xiaomi=!0,n.version=M[1]),A&&(n.liebao=!0,n.version="0"),E&&(n.mercury=!0,n.version=E[1]),navigator.standalone&&(n.standalone=!0),e.tablet=!!(s||v||i&&!t.match(/Mobile/)||w&&t.match(/Tablet/)||b&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(i||u||c||f||d||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||w&&t.match(/Mobile/)||b&&t.match(/Touch/))),{browser:n,os:e}}function e(t){t.audioData=!!window.Audio,t.webAudio=!(!window.AudioContext&&!window.webkitAudioContext);var e=document.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(t.ogg=!0),(e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||e.canPlayType("audio/opus;").replace(/^no$/,""))&&(t.opus=!0),e.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(t.mp3=!0),e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(t.wav=!0),(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;").replace(/^no$/,""))&&(t.m4a=!0),e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(t.webm=!0))}catch(a){}}var n=t(navigator.userAgent),a={browser:n.browser,os:n.os,supportOrientation:"number"==typeof window.orientation&&"object"==typeof window.onorientationchange,supportTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportGeolocation:null!=navigator.geolocation,isAndroid:n.os.android,isIOS:n.os.ios,isPhone:n.os.phone,isTablet:n.os.tablet,isMobile:n.os.phone||n.os.tablet};return e(a),a}),n("ig/Animation",["require","./util","./Event","./easing"],function(t){function e(t){return t=t||{},this.p={},n.extend(!0,this.p,{name:s++,source:{},target:null,range:null,tween:i.linear,repeat:!1,duration:1e3,fps:r},t),this.setup(),a.call(this,this.p),this}var n=t("./util"),a=t("./Event"),i=t("./easing"),r=60,s=0;return e.prototype={constructor:e,setup:function(){var t=this.p;t.paused=!1,t.repeatCount=0,t.then=Date.now(),t.interval=1e3/t.fps,t.curFrame=0,t.curState={},t.initState={},t.frames=Math.ceil(t.duration*t.fps/1e3);var e=t.source,a=t.target,i=t.range;if(i){for(var r in i)t.curState[r]={from:parseFloat(parseFloat(e[r])-parseFloat(i[r])),cur:parseFloat(e[r]),to:parseFloat(parseFloat(e[r])+parseFloat(i[r]))};return this}if("array"!==n.getType(a)){for(var r in a)t.initState[r]=t.curState[r]={from:parseFloat(e[r]),cur:parseFloat(e[r]),to:parseFloat(a[r])};return this}t.animIndex=0,t.animLength=a.length;for(var s=0;s<t.animLength;s++)for(var r in a[s])0===s&&(t.curState[r]={from:parseFloat(e[r]),cur:parseFloat(e[r]),to:parseFloat(a[s][r])}),t.initState[r]={from:parseFloat(e[r]),cur:parseFloat(e[r]),to:parseFloat(a[s][r])};return this},play:function(){var t=this.p;return t.requestID&&this.stop(),t.paused=!1,this.step(),this},stop:function(){return window.cancelAnimationFrame(this.p.requestID),this},destroy:function(){this.stop(),this.clearEvents()},togglePause:function(){return this.p.paused=!this.p.paused,this},pause:function(){return this.p.paused=!0,this},resume:function(){return this.p.paused=!1,this},next:function(){this.stop();var t=this.p;return t.curFrame++,t.curFrame=t.curFrame>t.frames?t.frames:t.curFrame,this.step.call(this),this},prev:function(){this.stop();var t=this.p;return t.curFrame--,t.curFrame=t.curFrame<0?0:t.curFrame,this.step.call(this),this},gotoAndPlay:function(t){return this.stop(),this.p.curFrame=t,this.play.call(this),this},gotoAndStop:function(t){return this.stop(),this.p.curFrame=t,this.step.call(this),this},swapFromTo:function(){var t=this.p;if(t.curFrame=0,t.curState={},"array"===n.getType(t.target)){t.target.reverse(),t.animIndex=0,t.animLength=t.target.length;for(var e in t.target[t.animIndex])t.curState[e]=t.repeatCount%2===0?{from:t.initState[e].from,cur:t.initState[e].cur,to:t.initState[e].to}:{from:t.initState[e].to,cur:t.initState[e].to,to:t.initState[e].from}}else for(var e in t.target)t.curState[e]=t.repeatCount%2===0?{from:t.initState[e].from,cur:t.initState[e].cur,to:t.initState[e].to}:{from:t.initState[e].to,cur:t.initState[e].to,to:t.initState[e].from};return this},step:function(){var t=this,e=t.p;if(e.requestID=window.requestAnimationFrame(function(){return function(){t.step.call(t)}}(t)),!(e.paused||(e.now=Date.now(),e.delta=e.now-e.then,e.delta<=e.interval))){t.fire("step",{data:{source:e.source,instance:t}}),e.then=e.now-e.delta%e.interval;var n;for(var a in e.curState)n=e.tween(e.curFrame,e.curState[a].cur,e.curState[a].to-e.curState[a].cur,e.frames).toFixed(2),e.source[a]=parseFloat(n);if(e.curFrame++,!(e.curFrame<e.frames))if(e.range&&!e.rangeExec){e.curFrame=0;for(var a in e.curState)e.curState[a]={from:e.curState[a].to,cur:e.curState[a].to,to:e.curState[a].from};e.repeat?(e.repeatCount++,e.repeatCount%2===0&&t.fire("repeat",{data:{source:e.source,instance:t,repeatCount:e.repeatCount/2}})):e.rangeExec=!0}else if(e.animLength)if(t.fire("groupComplete",{data:{source:e.source,instance:t}}),e.animIndex<e.animLength-1){e.animIndex++,e.curFrame=0,e.curState={};var i=e.repeatCount%2===0;for(var a in e.target[e.animIndex])e.curState[a]={from:i?e.initState[a].from:e.initState[a].to,cur:i?e.initState[a].cur:e.initState[a].to,to:i?e.initState[a].to:e.initState[a].from}}else e.repeat?(e.repeatCount++,t.swapFromTo(),t.fire("repeat",{data:{source:e.source,instance:t,repeatCount:e.repeatCount}})):(t.stop(),e.paused=!1,t.fire("complete",{data:{source:e.source,instance:t}}));else e.repeat?(e.repeatCount++,t.swapFromTo(),t.fire("repeat",{data:{source:e.source,instance:t,repeatCount:e.repeatCount}})):(t.stop(),e.paused=!1,t.fire("complete",{data:{source:e.source,instance:t}}))}}},n.inherits(e,a),e}),n("ig/Game",["require","./Event","./util","./env","./Stage","./resourceLoader"],function(t){function e(t){if(this.p={},s.extend(!0,this.p,{name:"ig_game_"+p++,fps:h,canvas:null,maximize:!1,scaleFit:!0,width:l,height:f,maxWidth:m,maxHeight:d,horizontalPageScroll:null},t),!this.p.canvas)throw new Error("Game initialize must be require a canvas param");return this.p.paused=!1,this.p.stageStack=[],this.p.stages={},n.call(this),this._={},this.resources=this.p.resources=c.resources,r.call(this,this.p),this}function n(){var t=this.p;t.canvas=s.domWrap(t.canvas,document.createElement("div"),"ig-game-container-"+t.name),t.canvas.width=t.width,t.canvas.height=t.height;var e=parseInt(t.canvas.width,10),n=parseInt(t.canvas.height,10),r=t.maxWidth||5e3,u=t.maxHeight||5e3;if(t.maximize){document.body.style.padding=0,document.body.style.margin=0;var c,h=s.getType(t.horizontalPageScroll);c="number"===h?t.horizontalPageScroll:"boolean"===h?17:0,e=Math.min(window.innerWidth,r)-c,n=Math.min(window.innerHeight-5,u)}o.supportTouch&&(t.canvas.style.height=2*n+"px",window.scrollTo(0,1),e=Math.min(window.innerWidth,r),n=Math.min(window.innerHeight,u)),t.ctx=t.canvas.getContext("2d"),t.canvas.style.height=n+"px",t.canvas.style.width=e+"px",t.canvas.width=e,t.canvas.height=n,t.canvas.style.position="relative",t.width=t.canvas.width,t.cssWidth=t.canvas.style.width,t.height=t.canvas.height,t.cssHeight=t.canvas.style.height,a.call(this);var p=t.canvas.parentNode;p.style.width=e+"px",p.style.margin="0 auto",p.style.position="relative",t.scaleFit&&i.call(this);var m=this;return window.addEventListener(o.supportOrientation?"orientationchange":"resize",function(){setTimeout(function(){window.scrollTo(0,1),t.scaleFit&&i.call(m)},0)},!1),t.ratioX=t.width/l,t.ratioY=t.height/f,this}function a(){var t=this.p;t.offCanvas||(t.offCanvas=document.createElement("canvas"),t.offCtx=t.offCanvas.getContext("2d")),t.offCanvas.width=t.canvas.width,t.offCanvas.style.width=t.canvas.style.width,t.offCanvas.height=t.canvas.height,t.offCanvas.style.height=t.canvas.style.height}function i(){var t=this.p,e=window.innerWidth,n=window.innerHeight,i=e/n,r=t.canvas.width/t.canvas.height,s=i>r?n/t.canvas.height:e/t.canvas.width,o=t.canvas.width*s,u=t.canvas.height*s;if(t.canvas.style.width=o+"px",t.canvas.style.height=u+"px",t.canvas.parentNode&&(t.canvas.parentNode.style.width=o+"px",t.canvas.parentNode.style.height=u+"px"),r>=i){var c=(n-u)/2;t.canvas.style.top=c+"px"}t.width=t.canvas.width,t.cssWidth=t.canvas.style.width,t.height=t.canvas.height,t.cssHeight=t.canvas.style.height,t.scaleRatio=s,a.call(this)}var r=t("./Event"),s=t("./util"),o=t("./env"),u=t("./Stage"),c=t("./resourceLoader"),h=60,p=0,l=320,m=5e3,f=480,d=5e3;return e.prototype={constructor:e,start:function(){var t=this._,e=this.p;e.paused=!1,t.startTime=Date.now(),t.now=0,t.interval=1e3/e.fps,t.delta=0,t.realFpsStart=Date.now(),t.realFps=0,t.realDelta=0,t.totalFrameCounter=0;var n="",a=s.noop,i=arguments.length;switch(i){case 1:"function"===s.getType(arguments[0])?a=arguments[0]:(n=arguments[0],a=s.noop);break;case 2:n=arguments[0],a=arguments[1]}if(n){for(var r=e.stageStack,o=-1,u=0,c=r.length;c>u;u++)if(r[u].p.name===n){o=u;break}this.swapStage(o,0)}this.stop();var h=this;return h.render.call(h,n),"function"===s.getType(a)&&a.call(h,{data:{startTime:t.startTime,interval:t.interval}}),this},render:function(){var t=this,e=t.p,n=t._;if(n.requestID=window.requestAnimationFrame(function(t){return function(){t.render.call(t)}}(t)),!e.paused){if(n.now=Date.now(),n.delta=n.now-n.startTime,n.delta>n.interval){n.totalFrameCounter++,n.startTime=n.now-n.delta%n.interval,t.fire("beforeGameRender",{data:{startTime:n.startTime,totalFrameCounter:n.totalFrameCounter}});var a=t.getCurrentStage();a&&(a.update(n.totalFrameCounter,n.delta/1e3),a.render()),t.fire("afterGameRender",{data:{startTime:n.startTime,totalFrameCounter:n.totalFrameCounter}})}n.realDelta>1e3?(n.realFpsStart=Date.now(),n.realDelta=0,t.fire("gameFPS",{data:{fps:n.realFps,totalFrameCounter:n.totalFrameCounter}}),n.realFps=0):(n.realDelta=Date.now()-n.realFpsStart,++n.realFps)}},pause:function(){return this.p.paused=!0,this},resume:function(){return this.p.paused=!1,this},stop:function(){return window.cancelAnimationFrame(this._.requestID),this},destroy:function(){this.stop(),this.clearAllStage(),this.clearEvents()},createStage:function(t){var e=this.p;t=s.extend(!0,{},{canvas:e.canvas,offCanvas:e.offCanvas,gameOwner:this},t);var n=new u(t);return this.pushStage(n),n},pushStage:function(t){var e=this.p;this.getStageByName(t.name)||(t.gameOwner=this,e.stageStack.push(t),e.stages[t.p.name]=t,this.sortStageIndex())},popStage:function(){var t=this.p,e=t.stageStack.pop();e&&(delete t.stages[e.name],this.sortStageIndex())},sortStageIndex:function(){for(var t=this.p.stageStack,e=t.length-1,n=0;e>=0;e--,n++)t[e].p.zIndex=n},removeStageByName:function(t){var e=this.getStageByName(t);if(e){var n=this.p;delete n.stages[e.name];var a=n.stageStack;s.removeArrByCondition(a,function(e){return e.name===t}),this.sortStageIndex()}},getCurrentStage:function(){var t=this.p;return t.stageStack[0]},getStageStack:function(){return this.p.stageStack},getStageByName:function(t){return this.p.stages[t]},changeStage:function(t){var e=this.p;if(t){for(var n=e.stageStack,a=-1,i=0,r=n.length;r>i;i++)if(n[i].name===t){a=i;break}this.swapStage(a,0)}},swapStageByName:function(t,e){for(var n=this.p,a=n.stageStack,i=a.length,r=-1,s=-1,o=0;i>o;o++)a[o].p.name===t&&(r=o),a[o].p.name===e&&(s=o);return-1!==r&&-1!==s?this.swapStage(r,s):this},swapStage:function(t,e){var n=this.p,a=n.stageStack,i=a.length;if(t>=0&&i-1>=t&&e>=0&&i-1>=e){var r=a[t];a[t]=a[e],a[e]=r,this.sortStageIndex()}return n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height),this},getStageIndex:function(t){return t.p.zIndex},clearAllStage:function(){for(var t=this.p,e=t.stageStack,n=0,a=e.length;a>n;n++)e[n].destroy();t.stages={},t.stageStack=[]},loadOther:function(t,e,n,a){return c.loadOther(t,e,n,a)},loadImage:function(t,e,n,a){return c.loadImage(t,e,n,a)},loadResource:function(t,e,n){return c.loadResource(t,e,n)}},s.inherits(e,r),e}),n("ig/Stage",["require","./Event","./util","./DisplayObject","./domEvt","./ig"],function(t){function e(t){return this.p={},c.extend(!0,this.p,{name:"ig_stage_"+d++,canvas:t.canvas,ctx:t.canvas.getContext("2d"),offCanvas:t.offCanvas,offCtx:t.offCanvas.getContext("2d"),width:t.gameOwner.p.width,height:t.gameOwner.p.height,cssWidth:t.gameOwner.p.cssWidth,cssHeight:t.gameOwner.p.cssHeight},t),this.p.displayObjectList=[],this.p.displayObjects={},n.call(this),u.call(this,this.p),this}function n(){p.initMouse(this),a.call(this)}function a(){var t=this;return p.events.forEach(function(e){var n=p.fireEvt[e];n&&t.on(e,n)}),t}function i(t){var e=this.p,n=e.parallax;n&&(n.anims&&"array"===c.getType(n.anims)?(n.animInterval=n.animInterval||1e4,n.curAnim||(n.curAnim=n.anims[0]),t%n.animInterval===0&&(void 0===n.time&&(n.time=0),n.time++,n.time===n.anims.length&&(n.time=0),n.curAnim=n.anims[n.time])):n.curAnim={aX:n.aX,aY:n.aY},n.vX=(n.vX+n.curAnim.aX)%n.image.width,n.vY=(n.vY+n.curAnim.aY)%n.image.height)}function r(){var t=this.p,e=t.parallax;if(e){var n=t.offCtx;"no-repeat"!==e.repeat&&s.call(e,n);for(var a=e.image.width,i=e.image.height,r={width:0,height:0},u=0;i>u;u+=r.height)for(var c=0;a>c;c+=r.width){var h={x:e.x+c,y:e.y+u},p={width:a-c,height:i-u},l={x:0,y:0};0===c&&(l.x=e.vX),0===u&&(l.y=e.vY),r=o.call(e,n,h,p,l,a,i)}}}function s(t){t.save(),t.fillStyle=t.createPattern(this.image,this.repeat),t.fillRect(this.x,this.y,t.canvas.width,t.canvas.height),t.restore(),f.src||(f.src=t.canvas.toDataURL(),this.image=f)}function o(t,e,n,a,i,r){var s=Math.abs(a.x)%i,o=Math.abs(a.y)%r,u=a.x<0?i-s:s,c=a.y<0?r-o:o,h=n.width<i-u?n.width:i-u,p=n.height<r-c?n.height:r-c;return t.drawImage(this.image,u,c,h,p,e.x,e.y,h,p),{width:h,height:p}}var u=t("./Event"),c=t("./util"),h=t("./DisplayObject"),p=t("./domEvt"),l=t("./ig"),m=l.STATUS,f=new Image,d=0;return e.prototype={constructor:e,clear:function(){var t=this.p;return t.offCtx.clearRect(0,0,t.width,t.height),this},getIndex:function(){return this.p.zIndex},setBgColor:function(t){var e=this.p;return e.bgColor=t,e.canvas.style.backgroundColor=e.bgColor||"transparent",this},setBgImg:function(t,e){var n;"htmlimageelement"===c.getType(t)?n=t.src:"string"===c.getType(t)&&(n=t);var a="",i="",r="",s=this.p;switch(e){case"center":a="no-repeat",i="center";break;case"full":r=s.cssWidth+"px "+s.cssHeight+"px"}return n?(s.canvas.style.backgroundImage="url("+n+")",s.canvas.style.backgroundRepeat=a,s.canvas.style.backgroundPosition=i,s.canvas.style.backgroundSize=r):(s.canvas.style.backgroundImage="",s.canvas.style.backgroundRepeat="",s.canvas.style.backgroundPosition="",s.canvas.style.backgroundSize=""),this},setParallax:function(t){if(t=t||{},!t.image)throw new Error("Parallax must be require a image param");t.repeat=t.repeat&&-1!==["repeat","repeat-x","repeat-y"].indexOf(t.repeat)?t.repeat:"no-repeat";var e=this.p;return e.parallax=c.extend({},{x:0,y:0,vX:0,vY:0,aX:0,aY:0},t),this},update:function(t,e){0>e&&(e=1/60),e>1/15&&(e=1/15),i.call(this,t);for(var n,a=this.p.displayObjectList,r=a.length,s=0;r>s;s++){var o=a[s];o&&(n=o.p.status,(n===m.NORMAL||n===m.NOT_RENDER)&&o.update(e))}},render:function(){this.clear(),this.fire("beforeStageRender");var t=this.p;t.offCtx.save(),t.offCtx.clearRect(0,0,t.offCanvas.width,t.offCanvas.height),r.call(this),this.sortDisplayObject();for(var e,n=t.displayObjectList,a=n.length,i=0;a>i;i++){var s=n[i];s&&(e=s.p.status,e===m.DESTROYED?this.removeDisplayObject(s):(e===m.NORMAL||e===m.NOT_UPDATE)&&s.render(t.offCtx))}t.offCtx.restore(),t.ctx.drawImage(t.offCanvas,0,0),this.fire("afterStageRender")},sortDisplayObject:function(){this.p.displayObjectList.sort(function(t,e){return t.p.zIndex-e.p.zIndex})},getDisplayObjectList:function(){return this.p.displayObjectList},getDisplayObjectByName:function(t){return this.p.displayObjects[t]},createDisplayObject:function(t){var e=new h(t);return this.addDisplayObject(e),e},addDisplayObject:function(t){if(t&&!this.getDisplayObjectByName(t.p.name)){var e=this.p;t.p.stageOwner=this,e.displayObjectList.push(t),e.displayObjects[t.p.name]=t}return this},removeDisplayObject:function(t){return t&&this.removeDisplayObjectByName(t.p.name),this},removeDisplayObjectByName:function(t){var e=this.p,n=e.displayObjects[t];if(n){delete e.displayObjects[n.p.name];var a=e.displayObjectList;c.removeArrByCondition(a,function(e){return e.p.name===t})}return this},clearAllDisplayObject:function(){var t=this.p;t.displayObjectList=[],t.displayObjects={}},destroy:function(){this.clearAllDisplayObject(),this.clearEvents()}},c.inherits(e,u),e}),n("ig/DisplayObject",["require","./Event","./util","./Animation","./ig","./Matrix"],function(t){function e(t){return this.p={},a.extend(!0,this.p,{name:"ig_displayobject_"+u++,x:0,y:0,width:0,height:0,cX:0,cY:0,radius:0,scaleX:1,scaleY:1,angle:0,alpha:1,zIndex:0,fillStyle:null,strokeStyle:null,image:null,vX:0,vY:0,aX:0,aY:0,frictionX:1,frictionY:1,status:o.NORMAL,mouseEnable:!0,captureFunc:a.noop,moveFunc:a.noop,releaseFunc:a.noop,debug:!1},t),this.children=[],this.matrix=new s,this.setPosX(this.p.x),this.setPosY(this.p.y),n.call(this,this.p),this}var n=t("./Event"),a=t("./util"),i=t("./Animation"),r=t("./ig"),s=t("./Matrix"),o=r.STATUS,u=0;return e.prototype={constructor:e,changeStatus:function(t){return this.p.status=t||this.p.status,this},setCaptureFunc:function(t){return this.p.captureFunc=t||a.noop,this},setMoveFunc:function(t){return this.p.moveFunc=t||a.noop,this},setReleaseFunc:function(t){return this.p.releaseFunc=t||a.noop,this},setPosX:function(t){return this.p.x=t||0,this},setPosY:function(t){return this.p.y=t||0,this},setAccelerationX:function(t){return this.p.aX=t||this.p.aX,this},setAccelerationY:function(t){return this.p.aY=t||this.p.aY,this},setFrictionX:function(t){return this.p.frictionX=t||this.p.frictionX,this},setFrictionY:function(t){return this.p.frictionY=t||this.p.frictionY,this},move:function(t,e){return this.p.x+=t,this.p.y+=e,this},moveStep:function(){var t=this.p;return t.vX+=t.aX,t.vX*=t.frictionX,t.x+=t.vX,t.vY+=t.aY,t.vY*=t.frictionY,t.y+=t.vY,this},rotate:function(t){var e=this.p.stageOwner.p.offCtx;return e.save(),e.rotate(a.deg2Rad(t||this.p.angle)),e.restore(),this},setAnimate:function(t){var e=this,n=a.extend(!0,{},{fps:60,duration:1e3,source:e.p,target:{}},t),r="function"===a.getType(n.stepFunc)?n.stepFunc:a.noop,s="function"===a.getType(n.repeatFunc)?n.repeatFunc:a.noop,o="function"===a.getType(n.groupCompleteFunc)?n.groupCompleteFunc:a.noop,u="function"===a.getType(n.completeFunc)?n.completeFunc:a.noop;this.animate=new i(n).play().on("step",function(t){e.p=t.data.source,r(t)}).on("repeat",function(t){s(t)}).on("groupComplete",function(t){o(t)}).on("complete",function(t){u(t)})},stopAnimate:function(){return this.animate&&this.animate.stop(),console.warn(this.animate),this},destroyAnimate:function(){return this.animate&&this.animate.destroy(),this},update:function(){return this},render:function(){return this}},a.inherits(e,n),e}),n("ig/Text",["require","./util","./DisplayObject"],function(t){function e(t){this.p={},a.extend(!0,this.p,{content:"",size:30,isBold:!1,fontFamily:"sans-serif"},t);var e=this.p,r=n(e.content,e.isBold,e.fontFamily,e.size);return this.bounds={x:e.x,y:e.y,width:r.width,height:r.height},this.font=""+(e.isBold?"bold ":"")+e.size+"pt "+e.fontFamily,i.call(this,this.p),this}function n(t,e,n,a){var i=document.createElement("div");i.innerHTML=t,i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.style.fontFamily=n,i.style.fontWeight=e?"bold":"normal",i.style.fontSize=a+"pt",document.body.appendChild(i);var r={width:i.offsetWidth,height:i.offsetHeight};return document.body.removeChild(i),r}var a=t("./util"),i=t("./DisplayObject");return e.prototype={constructor:e,changeContent:function(t){this.p.content=t;var e=n(this.p.content,this.p.isBold,this.p.fontFamily,this.p.size);return this.bounds={x:this.p.x,y:this.p.y,width:e.width,height:e.height},this},getContent:function(){return this.p.content},render:function(t){t.save(),t.fillStyle=this.p.fillStyle,t.globalAlpha=this.p.alpha,t.font=this.font,this.matrix.reset(),this.matrix.translate(this.p.x,this.p.y),this.matrix.rotate(this.p.angle),this.matrix.scale(this.p.scaleX,this.p.scaleY);var e=this.matrix.m;return t.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t.fillText(this.p.content,.5*-this.bounds.width,.5*-this.bounds.height),this.debugRender(t),t.restore(),this},debugRender:function(t){if(this.p.debug){t.save();var e=this.matrix.reset().m;this.matrix.translate(-this.bounds.x-.5*this.bounds.width,-this.bounds.y-this.bounds.height-10),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t.strokeStyle="black",t.strokeRect(this.bounds.x,this.bounds.y,this.bounds.width,this.bounds.height),t.restore()}}},a.inherits(e,i),e}),n("ig/Event",["require"],function(){function t(){this._events={}}var e="_observerGUID";return t.prototype={constructor:t,on:function(t,n){this._events||(this._events={});var a=this._events[t];return a||(a=this._events[t]=[]),n.hasOwnProperty(e)||(n[e]=+new Date),a.push(n),this},un:function(t,e){if(this._events){if(!e)return void(this._events[t]=[]);var n=this._events[t];if(n)for(var a=0;a<n.length;a++)n[a]===e&&(n.splice(a,1),a--);return this}},fire:function(t,n){1===arguments.length&&"object"==typeof t&&(n=t,t=n.type);var a=this["on"+t];if("function"==typeof a&&a.call(this,n),this._events){null==n&&(n={}),"[object Object]"!==Object.prototype.toString.call(n)&&(n={data:n}),n.type=t,n.target=this;var i={},r=this._events[t];if(r){r=r.slice();for(var s=0;s<r.length;s++){var o=r[s];i.hasOwnProperty(o[e])||o.call(this,n)}}if("*"!==t){var u=this._events["*"];if(!u)return;u=u.slice();for(var s=0;s<u.length;s++){var o=u[s];i.hasOwnProperty(o[e])||o.call(this,n)}}}},clearEvents:function(){this._events={}},enable:function(e){e._events={},e.on=t.prototype.on,e.un=t.prototype.un,e.fire=t.prototype.fire}},t}),n("ig/domEvt",["require","./util","./env"],function(t){function e(t){for(var e=0,n=s.length;n>e;e++)if(s[e].p.name===t)return!0;return!1}var n=t("./util"),a=t("./env"),i=["touchstart","touchmove","touchend"],r=["mousedown","mousemove","mouseup"],s=[],o={};return o.events=a.supportTouch?i:r,o.fireEvt={},o.fireEvt.touchstart=o.fireEvt.mousedown=function(t){for(var e=t.target,n=e.p.displayObjectList,a=0,i=n.length;i>a;a++){var r=n[a];r.p.mouseEnable&&r.hitTestPoint&&r.hitTestPoint(t.data.x,t.data.y)&&(t.data.curStage=e,r.p.isCapture=!0,r.captureFunc.call(r,t.data))}return e},o.fireEvt.touchmove=o.fireEvt.mousemove=function(t){for(var n=t.target,a=n.p.displayObjectList,i=0,r=a.length;r>i;i++){var o=a[i];o.hitTestPoint&&o.hitTestPoint(t.data.x,t.data.y)&&!e(o.p.name)&&s.push(o),t.data.holdSprites=s,o.p.mouseEnable&&o.p.isCapture&&(t.data.curStage=n,o.moveFunc.call(o,t.data))}return n},o.fireEvt.touchend=o.fireEvt.mouseup=function(t){for(var n=t.target,a=n.p.displayObjectList,i=0,r=a.length;r>i;i++){var o=a[i];(o.p.isCapture||e(o.p.name))&&(o.releaseFunc.call(o,t.data),o.p.isCapture=!1)
}return s=[],n},o.initMouse=function(t){this.stage=t,this.element=t.p.canvas,this.x=0,this.y=0,this.isDown=!1;var e=n.getElementOffset(this.element);return this.offsetX=e.x,this.offsetY=e.y,this.addEvent(),this},o.addEvent=function(){var t=this,e=t.element;t.events.forEach(function(n,a){e.addEventListener(n,function(e){e.preventDefault(),0===a?t.isDown=!0:2===a&&(t.isDown=!1);var i=e.changedTouches?e.changedTouches[0].pageX:e.pageX,r=e.changedTouches?e.changedTouches[0].pageY:e.pageY;t.x=i-t.offsetX,t.y=r-t.offsetY,t.stage.fire(n,{data:{x:t.x,y:t.y,isDown:t.isDown}})})})},o}),n("ig/Matrix",["require","./util"],function(t){function e(){return this.m=[1,0,0,1,0,0],this}var n=t("./util"),a=Math.cos,i=Math.sin;return e.prototype={constructor:e,reset:function(){return this.m=[1,0,0,1,0,0],this},mul:function(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],n=this.m[1]*t.m[0]+this.m[3]*t.m[1],a=this.m[0]*t.m[2]+this.m[2]*t.m[3],i=this.m[1]*t.m[2]+this.m[3]*t.m[3],r=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],s=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];return this.m[0]=e,this.m[1]=n,this.m[2]=a,this.m[3]=i,this.m[4]=r,this.m[5]=s,this},invert:function(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,n=-this.m[1]*t,a=-this.m[2]*t,i=this.m[0]*t,r=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),s=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=e,this.m[1]=n,this.m[2]=a,this.m[3]=i,this.m[4]=r,this.m[5]=s,this},rotate:function(t){var e=n.deg2Rad(t),r=a(e),s=i(e),o=this.m[0]*r+this.m[2]*s,u=this.m[1]*r+this.m[3]*s,c=this.m[0]*-s+this.m[2]*r,h=this.m[1]*-s+this.m[3]*r;return this.m[0]=o,this.m[1]=u,this.m[2]=c,this.m[3]=h,this},translate:function(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this},scale:function(t,e){this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e},transformPoint:function(t,e){var n=t,a=e;return t=n*this.m[0]+a*this.m[2]+this.m[4],e=n*this.m[1]+a*this.m[3]+this.m[5],[t,e]}},e}),n("ig/Vector",["require"],function(){function t(t,e){this.x=t||0,this.y=e||t||0}var e=Math.sqrt,n=Math.pow;return t.prototype={constructor:t,normalize:function(){var t=this.getMagnitude();return 0!==t&&(this.x/=t,this.y/=t),this},getMagnitude:function(){return e(n(this.x,2)+n(this.y,2))},add:function(e,n){var a=this.x+e.x,i=this.y+e.y;return n?new t(a,i):(this.x=a,this.y=i,this)},sub:function(e,n){var a=this.x-e.x,i=this.y-e.y;return n?new t(a,i):(this.x=a,this.y=i,this)},dot:function(t){return this.x*t.x+this.y*t.y},edge:function(t){return this.sub(t,!0)},perpendicular:function(e){var n=-this.x,a=this.y;return e?new t(n,a):(this.x=n,this.y=a,this)},normal:function(){return this.perpendicular(!0).normalize()}},t}),n("ig/resourceLoader",["require","./ig","./util"],function(t){function e(t){var e=t.split(".");return e[e.length-1].toLowerCase()}var n=t("./ig"),a=t("./util"),i={png:"Image",jpg:"Image",gif:"Image",jpeg:"Image",ogg:"Audio",wav:"Audio",m4a:"Audio",mp3:"Audio"},r={};return n.resources=r.resources={},n.loadOther=r.loadOther=function(){var t,n,i,r,s=arguments.length;switch(s){case 1:t=n=arguments[0],i=r=a.noop;break;case 2:t=n=arguments[0],i=r=arguments[1];break;case 3:t=n=arguments[0],i=arguments[1],r=arguments[2];break;default:t=arguments[0],n=arguments[1],i=arguments[2],r=arguments[3]}var o=e(n),u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&(200===u.status?"json"===o?i(t,JSON.parse(u.responseText)):i(t,u.responseText):r(n))},u.open("GET",n,!0),u.send(null)},n.loadImage=r.loadImage=function(){var t,e,n,i,r=arguments.length;switch(r){case 1:t=e=arguments[0],n=i=a.noop;break;case 2:t=e=arguments[0],n=i=arguments[1];break;case 3:t=e=arguments[0],n=arguments[1],i=arguments[2];break;default:t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3]}var s=new Image;s.addEventListener("load",function(){n(t,s)}),s.addEventListener("error",function(){i(e)}),s.src=e},n.loadResource=r.loadResource=function(t,r,s){var o=this;s=s||{},Array.isArray(t)||(t=[t]);for(var u=!1,c=function(t){u=!0,(s.errorCallback||function(t){throw"Loading Error: "+t}).call(o,t)},h=s.processCallback||a.noop,p=t.length,l=p,m=function(t,e){u||(n.resources[t]||(n.resources[t]=e),l--,h(p-l,p),0===l&&r&&r.call(o,n.resources))},f=s.customResourceTypes||{},d=a.extend({},i,f),g=0;p>g;g++){var v,y,w=t[g];if("object"===a.getType(w)?(v=w.id,y=w.src):v=y=w,n.resources.hasOwnProperty(v))m(v,n.resources[v]);else{var b=o["load"+d[e(y)]];b||(b=o.loadOther),b(v,y,m,c)}}},r});var a,i=e("ig"),r="ig/util",s="util",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/easing",s="easing",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/env",s="env",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Animation",s="Animation",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Game",s="Game",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Stage",s="Stage",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/DisplayObject",s="DisplayObject",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Text",s="Text",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Event",s="",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/domEvt",s="",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Matrix",s="Matrix",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/Vector",s="Vector",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a));var a,r="ig/resourceLoader",s="",o="";o?i[o]?i[o][s]=e(r):(a={},a[s]=e(r),i[o]=a):(a=e(r),s&&(i[s]=a)),t.ig=i}(window);