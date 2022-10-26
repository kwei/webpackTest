"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[475],{519:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var n=r(379),o=r.n(n),a=r(795),i=r.n(a),c=r(569),l=r.n(c),d=r(565),s=r.n(d),u=r(216),p=r.n(u),m=r(589),f=r.n(m),x=r(958),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();o()(x.Z,g);x.Z&&x.Z.locals&&x.Z.locals;var b=r(294),h=r(743),v=r(155),y=r(106),w=r(753),k=function(e){var t=e.record;return b.createElement("ul",{className:"ul-no-bullet"},t.length>0&&t.map((function(e,t){return b.createElement("li",{key:t,className:"record-item"},b.createElement("div",{className:"item"},b.createElement("div",{className:"record-item-input"},e.split(":")[0]),b.createElement("i",{className:"record-item-arrow"}),b.createElement("div",{className:"record-item-result"},e.split(":")[1])))})))};const E=b.memo(k);var S=function(e){return e.text};const N=b.memo(S);var A=function(e){var t=e.text;return b.createElement("div",{className:"info"},t.map((function(e,t){return b.createElement("span",{key:t},e)})))};const C=b.memo(A);var R=r(184),I=r.n(R),T=function(e){(0,h.I0)();var t=e.data,r=e.bgColor,n=e.action,o=e.actionName,a=e.isAlertVisible;return b.createElement("div",{className:I()("alert-block",{close:!a}),style:{backgroundColor:r}},b.createElement("div",{className:"alert-header"},t.header),b.createElement("div",{className:"alert-content"},t.content),b.createElement("div",{className:"alert-footer"},b.createElement("button",{className:"next-round-btn",value:"Next Round",onClick:n},o)))};const j=b.memo(T);var H=function(e){var t=(0,h.v9)((function(e){return e.alertReducer.winningStep}),h.wU),r=e.isAlertVisible;return b.createElement("div",{className:"modal-alert"},b.createElement(j,{data:{header:"遊戲獲勝",content:"一共花了 ".concat(t," 步。")},bgColor:"#f3ebb6",actionName:"重新一局",isAlertVisible:r,action:e.action}))};const M=b.memo(H);var z=r(578),V=function(e){var t=e.onClick,r=e.value;return b.createElement("button",{onClick:t,id:"Generate"},r," ",b.createElement(z.p9r,{style:{transform:"translateY(2px)"}}))};const Z=b.memo(V);var U=r(126),B=r(460),G=function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}return e},K=r(849);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=(0,U.K)(),W=(0,B.Y)({className:"MainPage"}),$=["這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。","程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；","若輸入的數字與題目不同位置的數字相符，則會得到 B。","目標為獲得 4A。"],q=O(Array(10).keys()),F=null,J=[],L=Q.getStorage("currentTarget");F=L||G(q).slice(0,4).join(""),W.verbose("Init target number: ".concat(F));var X=Q.getStorage("currentRecord");X&&(J=X.split(",")),W.verbose("Init record: ".concat(J));var _=function(){var e=(0,h.I0)(),t=Y((0,b.useState)(""),2),r=t[0],n=t[1],o=Y((0,b.useState)(""),2),a=o[0],i=o[1],c=Y((0,b.useState)(!1),2),l=c[0],d=c[1],s=Y((0,b.useState)(!1),2),u=s[0],p=s[1],m=Y((0,b.useState)(!0),2),f=m[0],x=m[1],g=Y((0,b.useState)(F),2),k=g[0],S=g[1],A=Y((0,b.useState)(J),2),R=A[0],I=A[1],T=(0,h.v9)((function(e){return e.recordReducer.highestScore}),h.wU),j=(0,b.useRef)(0),H=(0,b.useRef)(!1),z=(0,b.useRef)(null);(0,b.useEffect)((function(){H.current&&(U(),V("新的一局!",1500),W.verbose("New target number: ".concat(k)),Q.setStorage("currentTarget",k)),H.current=!0}),[k]),(0,b.useEffect)((function(){H.current&&(z.current.style.display=u?"block":"none"),H.current=!0}),[u]),(0,b.useEffect)((function(){if(l){x(!1),p(!0),e((0,w.YK)(j.current));var t=Q.getStorage("playingHistory");t?Q.setStorage("playingHistory",t+","+j.current):Q.setStorage("playingHistory",j.current);var r=Q.getStorage("playingHistory").split(",").map((function(e){return Number(e)}));0!==r.length&&e((0,y.n1)(Math.min.apply(Math,O(r)).toString()))}}),[l]);var V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;W.info("Notice: ".concat(e)),n(e),t&&setTimeout((function(){return n("")}),t)},U=function(){W.info("Reset states"),n(""),i(""),x(!0),d(!1),I([]),p(!1),j.current=0,Q.removeStorage("currentRecord"),Q.removeStorage("currentTarget")},B=function(){if(W.info("Compare answer"),!(0,K.m)(a)||O(new Set(a)).length<4)W.info("Invalid input"),V("請輸入 4 個'不重複'的數字",1500);else{j.current++;var e=function(e){var t=0,r=0;return e.split("").map((function(e,n){e===k[n]?t++:k.includes(e)&&r++})),{a:t,b:r}}(a),t=e.a,r=e.b,n="".concat(a.split("").join(" "),":").concat(t," A ").concat(r," B");I([].concat(O(R),[n])),W.verbose("Current result ".concat(n)),function(e){var t=Q.getStorage("currentRecord");t?Q.setStorage("currentRecord",t+","+e):Q.setStorage("currentRecord",e)}(n),4===t&&(W.info("Winning"),V("遊戲獲勝! 一共花了 ".concat(j.current," 步。")),d(!0))}i("")},P=(0,b.useCallback)((function(){W.info("New round"),S(G(q).slice(0,4).join(""))}),[]);return b.createElement("div",{className:"container-main"},b.createElement("div",{ref:z,id:"overlay",onClick:function(){p(!1)}},l&&b.createElement(M,{action:function(){return P()},isAlertVisible:u})),b.createElement("div",{className:"rule-block"},b.createElement(C,{text:$})),b.createElement("div",{className:"input-block"},b.createElement("input",{type:"number",value:a,disabled:!f,onChange:function(e){i(e.target.value.slice(0,4))},onKeyUp:function(e){"Enter"===e.key&&B()},placeholder:"請輸入 4 個不重複的數字"}),b.createElement("i",{className:"enter",onClick:function(){return B()}},b.createElement(v.i3Q,null))),b.createElement("div",{className:"currentHighestScore"},"您目前最快步數："+T,b.createElement("a",{className:"clearStorage",onClick:function(){window.confirm("確定要清除遊玩紀錄?")&&(W.info("Remove playing record"),Q.removeStorage("playingHistory"),e((0,y.DV)(void 0)))}},"清除紀錄")),b.createElement("div",{className:"button-area"},b.createElement(Z,{onClick:function(){return P()},value:"重新開始"})),b.createElement("div",{className:"notice-block"},b.createElement(N,{text:r})),b.createElement("div",{className:"record-block"},b.createElement(E,{record:R})))};const ee=b.memo(_)},958:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".container-main{display:flex;flex-direction:column;height:100%;max-width:30%;min-width:350px;align-items:center;background:rgba(255,255,255,.77);border-radius:.5em;box-shadow:0 4px 30px rgba(86,86,86,.1),0 2px 15px rgba(112,112,112,.3);backdrop-filter:blur(5.6px);-webkit-backdrop-filter:blur(5.6px);border:1px solid #fff}.container-main.darken{background-color:#000;opacity:.5}.rule-block{min-width:290px;max-width:80%;border:2px solid #000;margin:30px 0 10px 0;padding:8px;border-radius:.5em;box-shadow:rgba(0,0,0,.16) 0 3px 6px,rgba(0,0,0,.23) 0 3px 6px}.rule-block:hover{box-shadow:rgba(0,0,0,.19) 0 10px 20px,rgba(0,0,0,.23) 0 6px 6px}.info{width:100%;word-wrap:break-word}.input-block{max-width:90%;min-width:190px;height:30px;margin:8px 18px 8px 8px;text-align:center;display:flex;flex-direction:row}.enter{width:24px;height:16px;margin:3px 0 3px -33px;cursor:pointer;text-align:center;padding:4px 0}.enter:hover{margin:2px 0 3px -33px}.currentHighestScore{font-size:10px;padding:2px;text-align:center}.playerName{cursor:pointer}.playerName:hover{color:#002bc7}.clearStorage{cursor:pointer;text-decoration:underline;margin:0 0 0 5px}.clearStorage:hover{color:#002bc7}.button-area{max-width:25vw;height:auto;margin:8px;text-align:center}#Generate{border-radius:.5em;padding:8px;background-color:#dcdcdc;border:2px solid #000;cursor:pointer}#Generate:hover{background-color:#e5e5e5}.notice-block{height:30px;padding:5px;color:red}.result-block{height:20px;padding:5px}.record-block{max-width:100%;display:flex;flex-direction:column;padding:5px;max-height:340px;overflow:auto;margin:0 0 10px 0}.record-block::-webkit-scrollbar{display:none}.ul-no-bullet{list-style-type:none;margin:0;padding:0}.record-item{height:20px;width:180px;padding:10px 15px;margin-top:-1px;align-items:center;text-align:center;background-color:#f5f5f5;border:1px solid #000;display:grid}.record-item:hover{background-color:#e3e3e3}.item{display:flex;flex-direction:row}.record-item-input{flex:1;cursor:default;margin:auto}.record-item-arrow{width:1px;height:1px;border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px;margin:auto;transform:rotate(-45deg)}.record-item-result{cursor:default;width:90px;margin:auto}.notification{visibility:hidden;height:34px;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:.8em;padding:8px;position:fixed;z-index:1;left:calc(50% - 133px);bottom:30px;font-size:17px;display:flex;flex-direction:row}.notification.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}.notification-icon{text-align:center;margin:2px}.notification-title{padding:5px}.notification-body{padding:5px;overflow:hidden;text-overflow:ellipsis}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes popup{0%{transform:scale(0)}20%{transform:scale(1.1)}50%{transform:scale(0.95)}80%{transform:scale(1.05)}100%{transform:scale(1)}}.modal-alert{width:300px;max-width:100%;max-height:200px;overflow:hidden;position:absolute;cursor:default;top:40%;left:calc(50% - 150px)}.alert-block{z-index:999;background-color:#f3ebb6;display:flex;flex-direction:column;height:inherit;margin:auto;padding:8px;border-radius:.5em;border:2px solid #000;animation:popup .5s}.alert-block.close{display:none}.alert-header{width:auto;height:15px;padding:2px 5px 12px 5px;color:#363636;border-bottom:1px solid #5e5e5e;text-align:center}.alert-content{width:auto;margin:10px 0 10px 0;padding:5px 18px 5px 18px;word-wrap:break-word;text-align:center}.alert-footer{width:auto;height:auto;padding:2px 5px;text-align:center;margin:10px 0 0 0}.next-round-btn{border-radius:.5em;background-color:#fff;cursor:pointer}.next-round-btn:hover{background-color:#dcdcdc}#overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2}",""]);const c=i}}]);