!function(e){var t,a;!function(){function e(e,t){if(!t)return e;if(0===e.indexOf(".")){var a=t.split("/"),i=e.split("/"),r=a.length-1,n=i.length,o=0,s=0;e:for(var c=0;n>c;c++)switch(i[c]){case"..":if(!(r>o))break e;o++,s++;break;case".":s++;break;default:break e}return a.length=r-o,i=i.slice(s),a.concat(i).join("/")}return e}function i(t){function a(a,o){if("string"==typeof a){var s=i[a];return s||(s=n(e(a,t)),i[a]=s),s}a instanceof Array&&(o=o||function(){},o.apply(this,r(a,o,t)))}var i={};return a}function r(a,i,r){for(var s=[],c=o[r],u=0,h=Math.min(a.length,i.length);h>u;u++){var l,d=e(a[u],r);switch(d){case"require":l=c&&c.require||t;break;case"exports":l=c.exports;break;case"module":l=c;break;default:l=n(d)}s.push(l)}return s}function n(e){var t=o[e];if(!t)throw new Error("No "+e);if(!t.defined){var a=t.factory,i=a.apply(this,r(t.deps||[],a,e));"undefined"!=typeof i&&(t.exports=i),t.defined=1}return t.exports}var o={};a=function(e,t,a){o[e]={id:e,deps:t,factory:a,defined:0,exports:{},require:i(e)}},t=i("")}(),a("ig",["ig/ig"],function(e){return e}),a("ig/ig",["require"],function(){"use strict";window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){var t,a,i=this;setTimeout(function(){t=+new Date,e(t),a=+new Date,i.timeout=1e3/60-(a-t)},i.timeout)}}(),window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout}();var e={};return e}),a("ig/util",["require"],function(){"use strict";var e=Math.PI/180,t=180/Math.PI,a=Object.prototype,i={};return i.noop=function(){},i.inherits=function(e,t){var a=function(){};a.prototype=t.prototype;var i=e.prototype,r=e.prototype=new a;for(var n in i)r[n]=i[n];return e.prototype.constructor=e,e.superClass=t.prototype,e},i.deg2Rad=function(t){return t*e},i.rad2Deg=function(e){return e*t},i.window2Canvas=function(e,t,a){var i=e.getBoundingClientRect();return{x:Math.round(t-i.left*(e.width/i.width)),y:Math.round(a-i.top*(e.height/i.height))}},i.fastApply=function(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2]);case 4:return e.call(t,a[0],a[1],a[2],a[3]);case 5:return e.call(t,a[0],a[1],a[2],a[3],a[4]);case 6:return e.call(t,a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return e.call(t,a[0],a[1],a[2],a[3],a[4],a[5],a[6]);case 8:return e.call(t,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);case 9:return e.call(t,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);default:return e.apply(t,a)}},i.removeArrByCondition=function(e,t){for(var a,i=-1,r=0,n=e.length;n>r;r++)if(a=e[r],t(a)){i=r;break}-1!==i&&e.splice(e,1)},i.parseColor=function(e,t){return t===!0?"number"==typeof e?0|e:("string"==typeof e&&"#"===e[0]&&(e=e.slice(1)),parseInt(e,16)):("number"==typeof e&&(e="#"+("00000"+(0|e).toString(16)).substr(-6)),e)},i.colorToRGB=function(e,t){"string"==typeof e&&"#"===e[0]&&(e=window.parseInt(e.slice(1),16)),t=void 0===t?1:t;var a=e>>16&255,i=e>>8&255,r=255&e,n=0>t?0:t>1?1:t;return 1===n?"rgb("+a+","+i+","+r+")":"rgba("+a+","+i+","+r+","+n+")"},i.randomInt=function(e,t){return Math.floor(Math.random()*t+e)},i.randomFloat=function(e,t){return Math.random()*(t-e)+e},i.domWrap=function(e,t){var a=e.cloneNode(!0);if("string"==typeof t){var i=document.createElement("div");i.innerHTML=t,i=i.children[0],i.appendChild(a),e.parentNode.replaceChild(i,e)}else t.appendChild(a),e.parentNode.replaceChild(t,e);return a},i.windowToCanvas=function(e,t,a){var i=e.getBoundingClientRect(),r=e.width,n=e.height;return{x:Math.round(t-i.left*(r/i.width)),y:Math.round(a-i.top*(n/i.height))}},i.getMouseCoords=function(e,t){var a=e.getBoundingClientRect(),i=a.top,r=a.bottom,n=a.left,o=a.right,s=getComputedStyle(e,null);if(s){var c=parseInt(s.getPropertyValue("border-top-width"),10),u=parseInt(s.getPropertyValue("border-right-width"),10),h=parseInt(s.getPropertyValue("border-bottom-width"),10),l=parseInt(s.getPropertyValue("border-left-width"),10);n+=l,o-=u,i+=c,r-=h}var d={};d.x=t.clientX-n,d.y=t.clientY-i;var m=o-n;if(e.width!==m){var f=r-i;d.x=d.x*(e.width/m),d.y=d.y*(e.height/f)}return d},i.getType=function(e){var t=a.toString.call(e),i=/\[object (\w+)\]/.exec(t);return i[1].toLowerCase()},i}),a("ig/Event",["require"],function(){"use strict";function e(){this._events={}}var t="_observerGUID";return e.prototype={constructor:e,on:function(e,a){this._events||(this._events={});var i=this._events[e];i||(i=this._events[e]=[]),a.hasOwnProperty(t)||(a[t]=+new Date),i.push(a)},un:function(e,t){if(this._events){if(!t)return void(this._events[e]=[]);var a=this._events[e];if(a)for(var i=0;i<a.length;i++)a[i]===t&&(a.splice(i,1),i--)}},fire:function(e,a){1===arguments.length&&"object"==typeof e&&(a=e,e=a.type);var i=this["on"+e];if("function"==typeof i&&i.call(this,a),this._events){null==a&&(a={}),"[object Object]"!==Object.prototype.toString.call(a)&&(a={data:a}),a.type=e,a.target=this;var r={},n=this._events[e];if(n){n=n.slice();for(var o=0;o<n.length;o++){var s=n[o];r.hasOwnProperty(s[t])||s.call(this,a)}}if("*"!==e){var c=this._events["*"];if(!c)return;c=c.slice();for(var o=0;o<c.length;o++){var s=c[o];r.hasOwnProperty(s[t])||s.call(this,a)}}}},enable:function(t){t._events={},t.on=e.prototype.on,t.un=e.prototype.un,t.fire=e.prototype.fire}},e}),a("ig/env",["require"],function(){"use strict";function e(e){var t={},a={},i=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=e.match(/(Android);?[\s\/]+([\d.]+)?/),n=!!e.match(/\(Macintosh\; Intel /),o=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),c=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),h=e.match(/Windows Phone ([\d.]+)/),l=u&&e.match(/TouchPad/),d=e.match(/Kindle\/([\d.]+)/),m=e.match(/Silk\/([\d._]+)/),f=e.match(/(BlackBerry).*Version\/([\d.]+)/),g=e.match(/(BB10).*Version\/([\d.]+)/),p=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),v=e.match(/PlayBook/),y=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),w=e.match(/Firefox\/([\d.]+)/),b=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),x=!y&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=x||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),C=e.match(/MicroMessenger\/([\d.]+)/),O=e.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/)||e.match(/baiduboxapp\/([\d.]+)/)||e.match(/BaiduHD\/([\d.]+)/)||e.match(/FlyFlow\/([\d.]+)/)||e.match(/baidubrowser\/([\d.]+)/),I=e.match(/MQQBrowser\/([\d.]+)/)||e.match(/QQ\/([\d.]+)/),P=e.match(/UCBrowser\/([\d.]+)/),j=e.match(/SogouMobileBrowser\/([\d.]+)/),k=r&&e.match(/MiuiBrowser\/([\d.]+)/),F=e.match(/LBKIT/),M=e.match(/Mercury\/([\d.]+)/);return(a.webkit=!!i)&&(a.version=i[1]),r&&(t.android=!0,t.version=r[2]),c&&!s&&(t.ios=t.iphone=!0,t.version=c[2].replace(/_/g,".")),o&&(t.ios=t.ipad=!0,t.version=o[2].replace(/_/g,".")),s&&(t.ios=t.ipod=!0,t.version=s[3]?s[3].replace(/_/g,"."):null),h&&(t.wp=!0,t.version=h[1]),u&&(t.webos=!0,t.version=u[2]),l&&(t.touchpad=!0),f&&(t.blackberry=!0,t.version=f[2]),g&&(t.bb10=!0,t.version=g[2]),p&&(t.rimtabletos=!0,t.version=p[2]),v&&(a.playbook=!0),d&&(t.kindle=!0,t.version=d[1]),m&&(a.silk=!0,a.version=m[1]),!m&&t.android&&e.match(/Kindle Fire/)&&(a.silk=!0),y&&(a.chrome=!0,a.version=y[1]),w&&(a.firefox=!0,a.version=w[1]),b&&(a.ie=!0,a.version=b[1]),S&&(n||t.ios)&&(a.safari=!0,n&&(a.version=S[1])),x&&(a.webview=!0),C&&(a.wechat=!0,a.version=C[1]),O&&(delete a.webview,a.baidu=!0,a.version=O[1]),I&&(a.qq=!0,a.version=I[1]),P&&(delete a.webview,a.uc=!0,a.version=P[1]),j&&(delete a.webview,a.sogou=!0,a.version=j[1]),k&&(a.xiaomi=!0,a.version=k[1]),F&&(a.liebao=!0,a.version="0"),M&&(a.mercury=!0,a.version=M[1]),navigator.standalone&&(a.standalone=!0),t.tablet=!!(o||v||r&&!e.match(/Mobile/)||w&&e.match(/Tablet/)||b&&!e.match(/Phone/)&&e.match(/Touch/)),t.phone=!(t.tablet||t.ipod||!(r||c||u||f||g||y&&e.match(/Android/)||y&&e.match(/CriOS\/([\d.]+)/)||w&&e.match(/Mobile/)||b&&e.match(/Touch/))),{browser:a,os:t}}function t(e){e.audioData=!!window.Audio,e.webAudio=!(!window.AudioContext&&!window.webkitAudioContext);var t=document.createElement("audio"),a=!1;try{(a=!!t.canPlayType)&&(t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(e.ogg=!0),(t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||t.canPlayType("audio/opus;").replace(/^no$/,""))&&(e.opus=!0),t.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(e.mp3=!0),t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(e.wav=!0),(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;").replace(/^no$/,""))&&(e.m4a=!0),t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(e.webm=!0))}catch(i){}}var a=e(navigator.userAgent),i={browser:a.browser,os:a.os,supportOrientation:"number"==typeof window.orientation&&"object"==typeof window.onorientationchange,supportTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportGeolocation:null!=navigator.geolocation,isAndroid:a.os.android,isIOS:a.os.ios,isPhone:a.os.phone,isTablet:a.os.tablet,isMobile:a.os.phone||a.os.tablet};return t(i),i}),a("ig/ImageLoader",["require","./Event","./util"],function(e){"use strict";function t(e){a.apply(this,arguments),e=e||{};var t=e.source||[];this.source=Array.isArray(t)?t:[t],this.allCallback=e.allCallback||i.noop,this.imagesLoadedCount=0,this.imagesErrorLoadedCount=0,this.images={},this.imageList=[]}var a=e("./Event"),i=e("./util"),r=Array.prototype;return t.prototype={constructor:t,addImages:function(e){var t=this;r.push[Array.isArray(e)?"apply":"call"](t.source,e)},load:function(){for(var e=this,t=e.source.length,a=0;t>a;a++){var r,n,o=e.source[a];"object"===i.getType(o)?(r=o.id,n=o.src):r=n=o,e.images[r]=new Image,e.imageList.push(e.images[r]),e.images[r].addEventListener("load",function(){e.imagesLoadedCount++,e.fire("ImageLoader:imageLoaded",{data:{progress:(e.imagesLoadedCount+e.imagesErrorLoadedCount)/t*100,curImg:e.images[r]}}),e.imagesLoadedCount>=t&&(e.fire("ImageLoader:allImageLoaded",{data:{allCount:t,imageList:e.imageList,images:e.images}}),e.allCallback.call(e))}),e.images[r].addEventListener("error",function(){e.imagesErrorLoadedCount++,e.fire("ImageLoader:imageLoadedError",{data:{progress:(e.imagesLoadedCount+e.imagesErrorLoadedCount)/t*100,curImg:e.images[r]}})}),e.images[r].src=n}}},i.inherits(t,a),t}),a("ig/Game",["require","./Event","./util","./Stage","./FrameMonitor"],function(e){"use strict";function t(){a.apply(this,arguments),this.paused=!1,this.curGameFrameMonitor=new n,this.stageStack=[],this.stages={}}var a=e("./Event"),i=e("./util"),r=e("./Stage"),n=e("./FrameMonitor");return t.prototype={constructor:t,render:function(){var e=this;e.curGameFrameMonitor.update(),e.paused||(e.requestID=window.requestAnimationFrame(function(){e.render.call(e)})),e.fire("Game:beforeRender",{data:{curFrame:e.curGameFrameMonitor.cur,maxFrame:e.curGameFrameMonitor.max,minFrame:e.curGameFrameMonitor.min}});var t=e.getCurrentStage();t&&(t.update(),t.render()),e.fire("Game:afterRender",{data:{curFrame:e.curGameFrameMonitor.cur,maxFrame:e.curGameFrameMonitor.max,minFrame:e.curGameFrameMonitor.min}})},start:function(){var e=this;e.paused=!1,e.curGameFrameMonitor.reset(),e.requestID=window.requestAnimationFrame(function(){e.curGameFrameMonitor.start(),e.render.call(e)})},pause:function(){this.paused=!0},resume:function(){var e=this;e.paused=!1,e.requestID=window.requestAnimationFrame(function(){e.render.call(e)})},stop:function(){window.cancelAnimationFrame(this.requestID)},getStageStack:function(){return this.stageStack},getStageByName:function(e){return this.stages[e]},createStage:function(e){var t=new r(e);return this.pushStage(t),t},pushStage:function(e){var t=this;t.getStageByName(e.name)||(e.gameOwner=t,t.stageStack.push(e),t.stages[e.name]=e,t.sortStageIndex())},popStage:function(){var e=this,t=e.stageStack.pop();t&&(t.clean(),delete e.stages[t.name],e.sortStageIndex())},sortStageIndex:function(){for(var e=this.stageStack,t=0,a=e.length;a>t;t++)e[t].container.style.zIndex=t},removeStageByName:function(e){var t=this,a=t.getStageByName(e);if(a){a.clean(),delete t.stages[a.name];var r=t.stageStack;i.removeArrByCondition(r,function(t){return t.name===e}),t.sortStageIndex()}},swapStage:function(e,t){var a=this,i=a.stageStack,r=i.length;if(e>=0&&r-1>=e&&t>=0&&r-1>=t){var n=i[e];i[e]=i[t],i[t]=n,a.sortStageIndex()}},getStageIndex:function(e){return e.container.style.zIndex},getCurrentStage:function(){var e=this;return e.stageStack[e.stageStack.length-1]},clearAllStage:function(){for(var e=this,t=0,a=e.stageStack.length;a>t;t++)e.stageStack[t].clean();e.stages={},e.stageStack=[]}},i.inherits(t,a),t}),a("ig/FrameMonitor",["require"],function(){"use strict";function e(){this.max=0,this.min=9999,this.cur=0,this.curTime=0,this.expendPerFrame=0,this.startTimePerSecond=0,this.totalPerSecond=0}return e.prototype={constructor:e,reset:function(){var e=this;e.max=0,e.min=9999,e.cur=0,e.curTime=0,e.expendPerFrame=0,e.startTimePerSecond=0,e.totalPerSecond=0},start:function(){this.curTime=this.startTimePerSecond=+new Date},update:function(){var e=+new Date;e-this.startTimePerSecond>=1e3?(this.cur=this.totalPerSecond,this.max=this.cur>this.max?this.cur:this.max,this.min=this.cur<this.min?this.cur:this.min,this.totalPerSecond=0,this.startTimePerSecond=e):++this.totalPerSecond,this.expendPerFrame=e-this.curTime,this.curTime=e}},e}),a("ig/Stage",["require","./Event","./util","./DisplayObject"],function(e){"use strict";function t(e){if(a.apply(this,arguments),e=e||{},!e.canvas)throw new Error("Stage must be require a canvas param");this.canvas=e.canvas,this.ctx=this.canvas.getContext("2d"),this.offCanvas=document.createElement("canvas"),this.offCtx=this.offCanvas.getContext("2d"),this.container=this.canvas.parentNode,this.name=null===e.name||void 0===e.name?"ig_stage_"+n++:e.name,this.x=e.x||0,this.y=e.y||0,this.width=e.width||this.canvas.width,this.canvas.width=this.width,this.offCanvas.width=this.width,this.height=e.height||this.canvas.height,this.canvas.height=this.height,this.offCanvas.height=this.height,this.containerBgColor=e.containerBgColor||"#000",this.setSize(),this.setContainerBgColor(),this.displayObjectList=[],this.displayObjects={}}var a=e("./Event"),i=e("./util"),r=e("./DisplayObject"),n=0;return t.prototype={constructor:t,clear:function(){var e=this;e.ctx.clearRect(0,0,e.width,e.height)},setSize:function(e,t){var a=this;a.width=e||a.width,a.height=t||a.height,a.container.style.width=a.width+"px",a.container.style.height=a.height+"px",a.canvas.width=a.width,a.canvas.height=a.height,a.offCanvas.width=a.width,a.offCanvas.height=a.height},setContainerBgColor:function(e){var t=this;t.containerBgColor=e||t.containerBgColor,t.container.style.backgroundColor=t.containerBgColor},setContainerBgImg:function(e,t){var a=this;switch(a.container.style.backgroundImage="url("+e+")",t){case"center":a.container.style.backgroundRepeat="no-repeat",a.container.style.backgroundPosition="center";break;case"full":a.container.style.backgroundSize=a.width+"px "+a.height+"px"}},clean:function(){var e=this;e.container.removeChild(e.canvas),e.container.parentNode.removeChild(e.container),e.container=null,e.canvas=e.ctx=null,e.offCanvas=e.offCtx=null},update:function(){for(var e,t=this,a=t.displayObjectList,i=a.length,r=0;i>r;r++)e=t.displayObjectList[r].status,(1===e||2===e)&&this.displayObjectList[r].update()},render:function(){var e=this;e.clear(),e.fire("Stage:beforeRender",{data:{}}),this.sortDisplayObject(),this.renderDisplayObject(),e.fire("Stage:afterRender",{data:{}})},renderDisplayObject:function(){var e,t=this,a=t.displayObjectList,i=a.length;t.offCtx.save(),t.offCtx.clearRect(0,0,t.offCanvas.width,t.offCanvas.height);for(var r=0;i>r;r++)e=t.displayObjectList[r].status,(1===e||3===e)&&t.displayObjectList[r].render(t.offCtx);t.offCtx.restore(),t.ctx.drawImage(t.offCanvas,0,0)},sortDisplayObject:function(){this.displayObjectList.sort(function(e,t){return e.zIndex-t.zIndex})},getDisplayObjectList:function(){return this.displayObjectList},getDisplayObjectByName:function(e){return this.displayObjects[e]},createDisplayObject:function(e){var t=new r(e);return this.addDisplayObject(t),t},addDisplayObject:function(e){var t=this;t.getDisplayObjectByName(e.name)||(e.stageOwner=t,t.displayObjectList.push(e),t.displayObjects[e.name]=e)},removeDisplayObject:function(e){this.removeDisplayObjectByName(e.name)},removeDisplayObjectByName:function(e){var t=this,a=t.displayObjects[e];if(a){delete t.displayObjects[a.name];var r=t.displayObjectList;i.removeArrByCondition(r,function(t){return t.name===e})}},clearAllDisplayObject:function(){this.displayObjectList=[],this.displayObjects={}}},i.inherits(t,a),t}),a("ig/DisplayObject",["require","./Event","./util"],function(e){"use strict";function t(e){var t=this;e=e||{},a.apply(t,arguments),t.name=null===e.name||void 0===e.name?"ig_displayobject_"+r++:e.name,t.stageOwner=null,t.x=e.x||0,t.y=e.y||0,t.width=e.width||0,t.height=e.height||0,t.radius=e.radius||0,t.scaleX=e.scaleX||1,t.scaleY=e.scaleY||1,t.angle=e.angle||0,t.alpha=e.alpha||1,t.zIndex=e.zIndex||0,t.fillStyle=e.fillStyle||null,t.strokeStyle=e.strokeStyle||null,t.image=e.image||null,t.vX=e.vX||0,t.vY=e.vY||0,t.aX=e.aX||0,t.aY=e.aY||0,t.reverseVX=!1,t.reverseVY=!1,t.status=1,t.customProp=e.customProp||{},t.debug=!1,t.setPos(t.x,t.y)}var a=e("./Event"),i=e("./util"),r=0;return t.prototype={constructor:t,setPos:function(e,t){var a=this;a.x=e||a.x,a.y=t||a.y},setAcceleration:function(e,t){var a=this;a.aX=e||a.aX,a.aY=t||a.aY},resetAcceleration:function(){var e=this;e.aX=0,e.aY=0},move:function(e,t){var a=this;a.x+=e,a.y+=t},moveStep:function(){var e=this;e.vX+=e.aX,e.vY+=e.aY,e.x+=e.vX,e.y+=e.vY},rotate:function(){var e=this,t=e.stageOwner.offCtx;t.save(),t.rotate(i.deg2Rad(e.angle)),t.restore()},update:function(){return!0},render:function(){return!0},isHit:function(e){var t=this,a=t.x>e.x?t.x:e.x,i=t.x+t.width<e.x+e.width?t.x+t.width:e.x+e.width,r=t.y>e.y?t.y:e.y,n=t.y+t.width<e.y+e.width?t.y+t.width:e.y+e.width;return i>=a&&n>=r},isMouseIn:function(){var e=this,t=window.aaa.x,a=window.aaa.y,i=e.stageOwner,r=i.x,n=i.y;t-r>=e.x-e.radius&&t-r<=e.x+e.radius&&a-n>=e.y-e.radius&&a-n<=e.y+e.radius&&console.warn("你碰到我了")}},i.inherits(t,a),t}),a("ig/SpriteSheet",["require","./util","./DisplayObject"],function(e){"use strict";function t(e){if(e=e||{},!e.image)throw new Error("SpriteSheet must be require a image param");i.apply(this,arguments),this.name=null===e.name||void 0===e.name?"ig_spritesheet_"+r++:e.name,this.relativeX=e.relativeX||0,this.relativeY=e.relativeY||0,this.frameWidth=e.frameWidth||32,this.frameHeight=e.frameHeight||32,this.total=e.total||1,this.totalBackup=this.total,this.frameIndex=0,this.frameStartX=e.frameStartX||0,this.frameStartXBackup=this.frameStartX,this.frameStartY=e.frameStartY||0,this.frameStartYBackup=this.frameStartY,this.offsets=e.offsets}var a=e("./util"),i=e("./DisplayObject"),r=0,n=0,o=0,s=0,c=0,u=0;return t.prototype={constructor:t,update:function(){var e=this;n%7===0&&(o=0,s=0,c=0,u=0,e.offsets&&e.offsets[e.frameIndex]&&(o=e.offsets[e.frameIndex].x||0,s=e.offsets[e.frameIndex].y||0,c=e.offsets[e.frameIndex].width||0,u=e.offsets[e.frameIndex].height||0),e.relativeX=e.frameStartX*e.frameWidth+e.frameIndex*e.frameWidth+o,e.relativeY=e.frameStartY*e.frameHeight+s,e.frameIndex++,e.frameIndex>=e.total&&(e.frameIndex=0,e.frameStartY=e.frameStartYBackup,e.total=e.totalBackup),e.frameIndex*e.frameWidth>=e.image.width&&(e.frameStartY++,e.total=e.total-e.frameIndex,e.frameIndex=0)),n++},render:function(e){var t=this;e.save(),e.globalAlpha=t.alpha,e.translate(t.x,t.y),e.rotate(a.deg2Rad(t.angle)),e.scale(t.scaleX,t.scaleY),e.drawImage(t.image,t.relativeX,t.relativeY,t.frameWidth+c,t.frameHeight+u,-t.frameWidth/2,-t.frameHeight/2,t.frameWidth+c,t.frameHeight+u),e.restore()}},a.inherits(t,i),t}),a("ig/ParallaxScroll",["require","./util","./DisplayObject"],function(e){"use strict";function t(e){if(e=e||{},!e.image)throw new Error("ParallaxScroll must be require a image param");n.apply(this,arguments),this.name=null===e.name||void 0===e.name?"ig_parallaxscroll_"+o++:e.name,this.image=e.image,this.repeat=e.repeat&&-1!==["repeat","repeat-x","repeat-y"].indexOf(e.repeat)?e.repeat:"no-repeat"}function a(e,t,a,i,r,n){var o=this,s=Math.abs(i.x)%r,c=Math.abs(i.y)%n,u=i.x<0?r-s:s,h=i.y<0?n-c:c,l=a.width<r-u?a.width:r-u,d=a.height<n-h?a.height:n-h;return e.drawImage(o.image,u,h,l,d,t.x,t.y,l,d),{width:l,height:d}}function i(e){var t=this;e.save(),e.fillStyle=e.createPattern(t.image,t.repeat),e.fillRect(t.x,t.y,e.canvas.width,e.canvas.height),e.restore(),s.src||(s.src=e.canvas.toDataURL(),t.image=s)}var r=e("./util"),n=e("./DisplayObject"),o=0,s=new Image;return t.prototype={constructor:t,update:function(){var e=this;e.vX=(e.vX+e.aX)%e.image.width,e.vY=(e.vY+e.aY)%e.image.height},render:function(e){var t=this;"no-repeat"!==t.repeat&&i.call(t,e);for(var r=t.image.width,n=t.image.height,o={width:0,height:0},s=0;n>s;s+=o.height)for(var c=0;r>c;c+=o.width){var u={x:t.x+c,y:t.y+s},h={width:r-c,height:n-s},l={x:0,y:0};0===c&&(l.x=t.vX),0===s&&(l.y=t.vY),o=a.call(t,e,u,h,l,r,n)}}},r.inherits(t,n),t}),a("ig/Shape/Ball",["require","../util","../DisplayObject"],function(e){"use strict";function t(){var e=this;i.apply(e,arguments)}var a=e("../util"),i=e("../DisplayObject");return t.prototype={constructor:t,update:function(){var e=this,t=e.stageOwner.width,a=e.stageOwner.height;(e.x<e.radius||e.x>t-e.radius)&&(e.vX=-e.vX),(e.y<e.radius||e.y>a-e.radius)&&(e.vY=-e.vY),e.moveStep()},render:function(e){e.beginPath(),e.fillStyle=this.color,e.arc(this.x,this.y,this.radius-3,0,2*Math.PI),e.fill(),e.lineWidth=2,e.beginPath(),e.strokeStyle="white",e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.stroke(),t.superClass.render.apply(this,arguments)}},a.inherits(t,i),t});var i=t("ig"),r="ig/util",n="util",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/Event",n="Event",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/env",n="env",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/ImageLoader",n="ImageLoader",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/Game",n="Game",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/FrameMonitor",n="FrameMonitor",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/Stage",n="Stage",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/DisplayObject",n="DisplayObject",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/SpriteSheet",n="SpriteSheet",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/ParallaxScroll",n="ParallaxScroll",o="";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);var r="ig/Shape/Ball",n="Ball",o="Shape";if(o){var s={};s[n]=t(r),i[o]=s}else i[n]=t(r);e.ig=i}(window);