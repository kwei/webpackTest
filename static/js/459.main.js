(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[459],{2459:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(7294),a=n(4184),o=n.n(a),c=n(9753),i=n(743),l=function(e){var t=(0,i.I0)(),n=e.data,a=(0,r.useRef)(null),l=(0,i.v9)((function(e){return e.alertReducer.isAlertVisible}),i.wU);return(0,r.useEffect)((function(){document.addEventListener("mousedown",(function(e){a.current&&!a.current.contains(e.target)&&t((0,c.HQ)(!1))}))}),[a]),r.createElement("div",{className:o()("alert-block",{close:!l}),ref:function(e){return a.current=e},style:{backgroundColor:e.bgColor}},r.createElement("div",{className:"alert-header"},n.header),r.createElement("div",{className:"alert-content"},n.content),r.createElement("div",{className:"alert-footer"},r.createElement("button",{className:"next-round-btn",value:"Next Round",onClick:function(){return e.action()}},e.actionName)))};const s=r.memo(l);var u=function(e){return r.createElement("div",{className:"modal-alert"},e.isWin&&r.createElement(s,{data:e.msg,bgColor:e.bgColor,actionName:e.actionName,action:e.action}))};const f=r.memo(u)},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);