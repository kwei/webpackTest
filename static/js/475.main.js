"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[475],{599:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(379),a=r.n(n),o=r(795),i=r.n(o),c=r(569),l=r.n(c),u=r(565),d=r.n(u),s=r(216),p=r.n(s),m=r(589),f=r.n(m),x=r(958),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();a()(x.Z,g);x.Z&&x.Z.locals&&x.Z.locals;var b=r(294),h=r(743),v=r(155),y=r(559),w=function(e){var t=e.record;return b.createElement("ul",{className:"ul-no-bullet"},t.length>0&&t.map((function(e,t){return b.createElement("li",{key:t,className:"record-item"},b.createElement("div",{className:"item"},b.createElement("div",{className:"record-item-input"},e.split(":")[0]),b.createElement("i",{className:"record-item-arrow"}),b.createElement("div",{className:"record-item-result"},e.split(":")[1])))})))};const E=b.memo(w);var k=function(e){return e.text};const S=b.memo(k);var N=function(e){var t=e.text;return b.createElement("div",{className:"info"},t.map((function(e,t){return b.createElement("span",{key:t},e)})))};const R=b.memo(N);var A=function(e){var t=e.data,r=e.action.confirm,n=e.actionName;return b.createElement("div",{className:"alert-block"},b.createElement("div",{className:"alert-header"},t.header),b.createElement("div",{className:"alert-content"},t.content),b.createElement("div",{className:"alert-footer"},b.createElement("button",{className:"next-round-btn",value:"Next Round",onClick:r},n)))};const C=b.memo(A);var T=r(935),O=r(472);const G=function(e){var t=(0,h.v9)((function(e){return e.alertReducer.winningStep}),h.wU),r=e.isAlertVisible,n=e.portalTarget?e.portalTarget:document.body,a=e.action.cancel,o=(0,b.useRef)(null),i=e.alertType,c=(0,O.useSpring)({xy:r?1:0,config:{duration:300}}).xy;return r?(0,T.createPortal)(b.createElement("div",{ref:o,id:"overlay",onClick:a},b.createElement(O.animated.div,{className:"modal-alert",style:{transform:c.to({range:[0,.05,.3,.5,.8,1],output:[1,1.2,1,.9,1.1,1]}).to((function(e){return"scale(".concat(e,")")}))}},"winning"===i?b.createElement(C,{data:{header:"遊戲獲勝",content:"一共花了 ".concat(t," 步。")},actionName:"重新一局",action:e.action}):null)),n):null};var H=r(578),I=function(e){var t=e.onClick,r=e.value;return b.createElement("button",{onClick:t,id:"Generate"},r," ",b.createElement(H.p9r,{style:{transform:"translateY(2px)"}}))};const M=b.memo(I);var j=r(126),L=r(837),P=function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}return e},U=r(849),z=r(723),_=r(500);function Y(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var K=(0,j.K)(),V=(0,L.Y)({className:"MainPage"}),Q=(0,_.R)("general.local.inputNumber.placeHolder",{}),$=z.O.GAME.RULE,q=function(){var e=(0,h.I0)(),t=K.loadAll({initTarget:P(z.O.GAME.NUMBER_RANGE).slice(0,4).join(""),initRecord:[],initStep:0,initIsWinning:!1,initPlayingHistory:"",initHighestScore:(0,_.R)("general.default.score",{}),initAverageScore:0}),r=t.initTarget,n=t.initRecord,a=t.initStep,o=t.initIsWinning,i=t.initPlayingHistory,c=t.initHighestScore,l=t.initAverageScore,u=Z((0,b.useState)(""),2),d=u[0],s=u[1],p=Z((0,b.useState)(""),2),m=p[0],f=p[1],x=Z((0,b.useState)(!1),2),g=x[0],w=x[1],k=Z((0,b.useState)(!o),2),N=k[0],A=k[1],C=Z((0,b.useState)(o),2),T=C[0],O=C[1],H=Z((0,b.useState)(r),2),I=H[0],j=H[1],L=Z((0,b.useState)(n),2),W=L[0],B=L[1],q=Z((0,b.useState)(c),2),D=q[0],F=q[1],J=Z((0,b.useState)(i),2),X=J[0],ee=J[1],te=Z((0,b.useState)(l),2),re=te[0],ne=te[1],ae=(0,b.useRef)(a),oe=(0,b.useRef)(!1),ie=(0,b.useRef)(null);(0,b.useEffect)((function(){oe.current&&K.saveAll({currentTarget:I,currentRecord:W.join(","),currentStep:ae.current,currentIsWinning:T,currentPlayingHistory:X,currentHighestScore:D,currentAverageScore:re})}),[I,W,T,X,D,re]),(0,b.useEffect)((function(){oe.current&&(le(),ce((0,_.R)("general.newRound",{}),1500),V.verbose("New target number: ".concat(I)))}),[I]),(0,b.useEffect)((function(){if(oe.current&&T){A(!1),w(!0),e((0,y.YK)(ae.current));var t=""+ae.current;""!==X&&(t=X+","+ae.current),ee(t);var r=D;(D===(0,_.R)("general.default.score",{})||ae.current<Number(D))&&(r=ae.current),F(r);var n=ae.current,a=t.split(","),o=a.length;o>0&&(n=(a=(a=a.map((function(e){return Number(e)}))).reduce((function(e,t){return e+t}),ae.current))/(o+1),n=Math.floor(n)),ne(n)}}),[T]),(0,b.useEffect)((function(){oe.current=!0}),[]);var ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;V.info("Notice: ".concat(e)),s(e),t&&setTimeout((function(){return s("")}),t)},le=function(){V.info("Reset states"),s(""),f(""),A(!0),O(!1),B([]),w(!1),ae.current=0},ue=function(){if(!T){if(V.info("Compare answer"),!(0,U.m)(m)||Y(new Set(m)).length<4)V.info("Invalid input"),ce((0,_.R)("error.invalid.inputNumber",{}),1500);else{ae.current++;var e=function(e){var t=0,r=0;return e.split("").map((function(e,n){e===I[n]?t++:I.includes(e)&&r++})),{a:t,b:r}}(m),t=e.a,r=e.b,n="".concat(m.split("").join(" "),":").concat(t," A ").concat(r," B");B([].concat(Y(W),[n])),V.verbose("Current result ".concat(n)),4===t&&(V.info("Winning"),ce((0,_.R)("alert.local.win",{count:ae.current})),O(!0))}f(""),ie.current.focus()}},de=(0,b.useCallback)((function(){w(!1)}),[]),se=(0,b.useCallback)((function(){V.info("New round"),j(P(z.O.GAME.NUMBER_RANGE).slice(0,4).join(""))}),[]);return b.createElement("div",{className:"container-main"},b.createElement(G,{portalTarget:document.body,alertType:"winning",action:{confirm:function(){return se()},cancel:function(){return de()}},isAlertVisible:g}),b.createElement("div",{className:"rule-block"},b.createElement(R,{text:$})),b.createElement("div",{className:"input-block"},b.createElement("input",{type:"number",ref:ie,value:m,disabled:!N,onChange:function(e){f(e.target.value.slice(0,4))},onKeyUp:function(e){"Enter"===e.key&&ue()},placeholder:Q}),b.createElement("i",{className:"enter",onClick:ue},b.createElement(v.i3Q,null))),b.createElement("div",{className:"currentHighestScore"},(0,_.R)("general.local.step",{count:D,avg:re||(0,_.R)("general.default.score",{})}),b.createElement("a",{className:"clearStorage",onClick:function(){window.confirm((0,_.R)("alert.local.clean.playingHistory",{}))&&(V.info("Remove playing record"),K.setStorage(z.O.LOCAL.STORAGE.PLAYING_HISTORY,""),K.setStorage(z.O.LOCAL.STORAGE.CURRENT_HIGHEST_SCORE,(0,_.R)("general.default.score",{})),K.setStorage(z.O.LOCAL.STORAGE.AVERAGE_SCORE,0),F((0,_.R)("general.default.score",{})),ee(""),ne(0))}},(0,_.R)("general.clean.playingHistory",{}))),b.createElement("div",{className:"button-area"},b.createElement(M,{onClick:function(){return se()},value:(0,_.R)("general.restart",{})})),b.createElement("div",{className:"notice-block"},b.createElement(S,{text:d})),b.createElement("div",{className:"record-block"},b.createElement(E,{record:W})))};const D=b.memo(q)},958:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,".container-main{display:flex;flex-direction:column;height:auto;max-width:30%;min-width:350px;align-items:center;background:rgba(255,255,255,.77);border-radius:.5em;box-shadow:0 4px 30px rgba(86,86,86,.1),0 2px 15px rgba(112,112,112,.3);backdrop-filter:blur(5.6px);-webkit-backdrop-filter:blur(5.6px);border:1px solid #fff}.rule-block{min-width:290px;max-width:80%;border:2px solid #000;margin:30px 0 10px 0;padding:8px;border-radius:.5em;box-shadow:rgba(0,0,0,.16) 0 3px 6px,rgba(0,0,0,.23) 0 3px 6px}.rule-block:hover{box-shadow:rgba(0,0,0,.19) 0 10px 20px,rgba(0,0,0,.23) 0 6px 6px}.info{width:100%;word-wrap:break-word}.input-block{max-width:90%;min-width:190px;height:30px;margin:8px 18px 8px 8px;text-align:center;display:flex;flex-direction:row}.enter{width:24px;height:16px;margin:3px 0 3px -33px;cursor:pointer;text-align:center;padding:4px 0}.enter:hover{margin:2px 0 3px -33px}.currentHighestScore{font-size:10px;padding:2px;text-align:center}.playerName{cursor:pointer}.playerName:hover{color:#002bc7}.clearStorage{cursor:pointer;text-decoration:underline;margin:0 0 0 5px}.clearStorage:hover{color:#002bc7}.button-area{max-width:25vw;height:auto;margin:8px;text-align:center}#Generate{border-radius:.5em;padding:8px;background-color:#dcdcdc;border:2px solid #000;cursor:pointer}#Generate:hover{background-color:#e5e5e5}.notice-block{height:30px;padding:5px;color:red}.result-block{height:20px;padding:5px}.record-block{max-width:100%;display:flex;flex-direction:column;padding:5px;max-height:340px;overflow:auto;margin:0 0 10px 0}.record-block::-webkit-scrollbar{display:none}.ul-no-bullet{list-style-type:none;margin:0;padding:5px}.record-item{height:20px;width:180px;padding:10px 15px;margin-top:-1px;align-items:center;text-align:center;background-color:#f5f5f5;border:1px solid #000;display:grid}.record-item:hover{background-color:#e3e3e3}.item{display:flex;flex-direction:row}.record-item-input{flex:1;cursor:default;margin:auto}.record-item-arrow{width:1px;height:1px;border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px;margin:auto;transform:rotate(-45deg)}.record-item-result{cursor:default;width:90px;margin:auto}.notification{visibility:hidden;height:34px;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:.8em;padding:8px;position:fixed;z-index:1;left:calc(50% - 133px);bottom:30px;font-size:17px;display:flex;flex-direction:row}.notification.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}.notification-icon{text-align:center;margin:2px}.notification-title{padding:5px}.notification-body{padding:5px;overflow:hidden;text-overflow:ellipsis}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes popup{0%{transform:scale(0)}20%{transform:scale(1.1)}50%{transform:scale(0.95)}80%{transform:scale(1.05)}100%{transform:scale(1)}}.modal-alert{width:300px;z-index:999;max-width:100%;max-height:200px;overflow:hidden;position:absolute;cursor:default;top:40%;left:calc(50% - 150px);box-shadow:rgba(180,253,255,.56) 0 22px 70px 4px}.alert-block{z-index:999;background-color:#b4fdff;display:flex;flex-direction:column;height:inherit;margin:auto;padding:8px;border-radius:.5em;border:2px solid #000}.alert-header{width:auto;height:auto;padding:5px 0 8px 0;color:#363636;border-bottom:2px solid #000;text-align:center}.alert-content{width:auto;height:auto;margin:10px 0 10px 0;padding:5px;word-wrap:break-word;text-align:center}.alert-footer{width:auto;height:auto;padding:5px;text-align:center;margin:5px 0 0 0}.next-round-btn{border-radius:.5em;border:1px solid #000;padding:5px 10px;background-color:#b4fdff;cursor:pointer;color:#000;box-shadow:rgba(0,0,0,.12) 0 1px 3px,rgba(0,0,0,.24) 0 1px 2px}#overlay{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2}",""]);const c=i}}]);