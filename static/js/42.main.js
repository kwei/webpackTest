"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[42],{1042:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var n=r(3379),o=r.n(n),i=r(7795),a=r.n(i),c=r(569),l=r.n(c),d=r(3565),p=r.n(d),u=r(9216),s=r.n(u),f=r(4589),m=r.n(f),x=r(4958),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=s();o()(x.Z,g);x.Z&&x.Z.locals&&x.Z.locals;var b=r(7294),h=r(743),y=r(5155),v=r(2106),w=r(9753),k=r(3207),S=r(9126),E=r(460),A=function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}return e},N=r(4578);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I=b.lazy((function(){return r.e(574).then(r.bind(r,9574))})),j=b.lazy((function(){return r.e(459).then(r.bind(r,2459))})),M=b.lazy((function(){return r.e(216).then(r.bind(r,8216))})),U=b.lazy((function(){return Promise.all([r.e(385),r.e(383)]).then(r.bind(r,7383))})),P=(0,S.K)(),T=(0,E.Y)({className:"MainPage"}),Z=["這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。","程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；","若輸入的數字與題目不同位置的數字相符，則會得到 B。","目標為獲得 4A。"],B=z(Array(10).keys()),G=A(B).slice(0,4).join("");T.verbose("Init target number: ".concat(G));var Q=function(){var e=(0,h.I0)(),t=C((0,b.useState)(""),2),r=t[0],n=t[1],o=C((0,b.useState)(""),2),i=o[0],a=o[1],c=C((0,b.useState)(!1),2),l=c[0],d=c[1],p=C((0,b.useState)(!0),2),u=p[0],s=p[1],f=C((0,b.useState)(G),2),m=f[0],x=f[1],g=(0,h.v9)((function(e){return e.recordReducer.highestScore}),h.wU),S=(0,h.v9)((function(e){return e.alertReducer.isAlertVisible}),h.wU),E=(0,b.useRef)(0),R=(0,b.useRef)(!1),H=(0,b.useRef)(null);(0,b.useEffect)((function(){T.info("Initialize player's name"),e((0,k.PJ)(void 0))}),[]),(0,b.useEffect)((function(){R.current&&(K(),Q("新的一局!",1500),T.verbose("New target number: ".concat(m))),R.current=!0}),[m]),(0,b.useEffect)((function(){H.current.style.display=S?"block":"none"}),[S]);var Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;T.info("Notice: ".concat(e)),n(e),t&&setTimeout((function(){return n("")}),t)},K=function(){T.info("Reset states"),n(""),a(""),s(!0),d(!1),e((0,v.Ul)(void 0)),e((0,w.HQ)(!1)),E.current=0},O=function(){P.removeStorage("currentRecord")},V=function(){T.info("Compare answer");var t=0,r=0;new Promise((function(n){if(f=!0,z(new Set(i)).length<4?f=!1:i.split("").map((function(e){(e.charCodeAt(0)<48||e.charCodeAt(0)>57)&&(f=!1)})),f){E.current++,i.split("").map((function(e,n){e===m[n]?t++:m.includes(e)&&r++}));var o="".concat(i.split("").join(" "),":").concat(t," A ").concat(r," B");if(e((0,v.Ue)(o)),T.verbose("Current result ".concat(o)),p=o,(u=P.getStorage("currentRecord"))?P.setStorage("currentRecord",u+","+p):P.setStorage("currentRecord",p),4===t){T.info("Winning"),Q("遊戲獲勝! 一共花了 ".concat(E.current," 步。")),d(!0),s(!1),e((0,w.HQ)(!0));var a=P.getStorage("playingHistory");a?P.setStorage("playingHistory",a+","+E.current):P.setStorage("playingHistory",E.current);var c=Array(0);if(P.getStorage("playingHistory").split(",").map((function(e){c.push(Number(e))})),0!==c.length){var l=Math.min.apply(Math,c).toString();T.info("HighestScore: ".concat(l)),e((0,v.n1)(l))}O()}}else T.info("Invalid input"),Q("請輸入 4 個'不重複'的數字",1500);var p,u,f;n()})).then((function(){a("")}))},W=function(){T.info("New round"),O(),x(A(B).slice(0,4).join(""))};return b.createElement("div",{className:"container"},b.createElement(U,null),b.createElement("div",{ref:H,id:"overlay"},b.createElement(j,{isWin:l,msg:{header:"遊戲獲勝",content:"一共花了 ".concat(E.current," 步。")},bgColor:"#f3ebb6",actionName:"重新一局",action:function(){return W()}})),b.createElement("div",{className:"rule-block"},b.createElement("span",{className:"rules"},Z.map((function(e,t){return b.createElement("span",{key:t},e)})))),b.createElement("div",{className:"input-block"},b.createElement("input",{type:"number",value:i,disabled:!u,onChange:function(e){a(e.target.value.slice(0,4))},onKeyUp:function(e){"Enter"===e.key&&V()},placeholder:"請輸入 4 個不重複的數字"}),b.createElement("i",{className:"enter",onClick:function(){return V()}},b.createElement(y.i3Q,null))),b.createElement("div",{className:"currentHighestScore"},b.createElement(M,null)," ","，您目前最快步數："+g,b.createElement("a",{className:"clearStorage",onClick:function(){window.confirm("確定要清除遊玩紀錄?")&&(T.info("Remove playing record"),P.removeStorage("playingHistory"),e((0,v.DV)(void 0)))}},"清除紀錄")),b.createElement("div",{className:"button-area"},b.createElement("button",{onClick:function(){return W()},id:"Generate"},"重新開始 ",b.createElement(N.p9r,{style:{transform:"translateY(2px)"}}))),b.createElement("div",{className:"notice-block"},r),b.createElement("div",{className:"record-block"},b.createElement(I,null)))};const K=b.memo(Q)},4958:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(8081),o=r.n(n),i=r(3645),a=r.n(i)()(o());a.push([e.id,".container{display:flex;flex-direction:column;height:100%;width:75%;align-items:center}.container.darken{background-color:#000;opacity:.5}input{margin:0;border-radius:10px;padding:10px 15px;border-color:#000;width:100%}input[type=number]{-moz-appearance:textfield;margin:0;width:100%;border-radius:10px;padding:10px 15px;border-color:#000}.rule-block{width:470px;max-width:90%;border:2px solid #000;margin:30px 0 10px 0;padding:8px;border-radius:4px;box-shadow:rgba(0,0,0,.16) 0 3px 6px,rgba(0,0,0,.23) 0 3px 6px}.rule-block:hover{box-shadow:rgba(0,0,0,.19) 0 10px 20px,rgba(0,0,0,.23) 0 6px 6px}.rules{width:inherit;word-wrap:break-word}.input-block{max-width:90%;min-width:190px;height:30px;margin:8px 18px 8px 8px;text-align:center;display:flex;flex-direction:row}.enter{width:24px;height:16px;margin:3px 0 3px -33px;cursor:pointer;text-align:center;padding:4px 0}.enter:hover{margin:2px 0 3px -33px}.currentHighestScore{font-size:10px;padding:2px;text-align:center}.playerName{cursor:pointer}.playerName:hover{color:#002bc7}.clearStorage{cursor:pointer;text-decoration:underline;margin:0 0 0 5px}.clearStorage:hover{color:#002bc7}.button-area{max-width:25vw;height:30px;margin:8px;text-align:center}#Generate{border-radius:3px;padding:8px;background-color:#dcdcdc;border:2px solid #000;cursor:pointer}#Generate:hover{background-color:#e5e5e5}.notice-block{height:30px;padding:5px}.result-block{height:20px;padding:5px}.record-block{max-width:100%;display:flex;flex-direction:column;padding:5px;max-height:340px;overflow:auto}.record-block::-webkit-scrollbar{display:none}.ul-no-bullet{list-style-type:none;margin:0;padding:0}.record-item{height:20px;width:180px;padding:10px 15px;margin-top:-1px;align-items:center;text-align:center;background-color:#f5f5f5;border:1px solid #000;display:grid}.record-item:hover{background-color:#e3e3e3}.item{display:flex;flex-direction:row}.record-item-input{flex:1;cursor:default;margin:auto}.record-item-arrow{width:1px;height:1px;border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px;margin:auto;transform:rotate(-45deg)}.record-item-result{cursor:default;width:90px;margin:auto}.notification{visibility:hidden;height:34px;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:25px;padding:8px;position:fixed;z-index:1;left:calc(50% - 133px);bottom:30px;font-size:17px;display:flex;flex-direction:row}.notification.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}.notification-icon{text-align:center;margin:2px}.notification-title{padding:5px}.notification-body{padding:5px;overflow:hidden;text-overflow:ellipsis}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes popup{0%{transform:scale(0)}20%{transform:scale(1.1)}50%{transform:scale(0.95)}80%{transform:scale(1.05)}100%{transform:scale(1)}}.modal-alert{width:300px;max-width:100%;max-height:200px;overflow:hidden;position:absolute;cursor:default;top:40%;left:calc(50% - 150px)}.alert-block{z-index:999;background-color:#f3ebb6;display:flex;flex-direction:column;height:inherit;margin:auto;padding:8px;border-radius:4px;border:2px solid #000;animation:popup .5s}.alert-block.close{display:none}.alert-header{width:auto;height:15px;padding:2px 5px 12px 5px;color:#363636;border-bottom:1px solid #5e5e5e;text-align:center}.alert-content{width:auto;margin:10px 0 10px 0;padding:5px 18px 5px 18px;word-wrap:break-word;text-align:center}.alert-footer{width:auto;height:auto;padding:2px 5px;text-align:center;margin:10px 0 0 0}.next-round-btn{border-radius:4px;background-color:#fff;cursor:pointer}.next-round-btn:hover{background-color:#dcdcdc}#overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2}",""]);const c=a}}]);