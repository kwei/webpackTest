"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[138],{6138:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(3379),a=n.n(r),o=n(7795),l=n.n(o),i=n(569),c=n.n(i),p=n(3565),s=n.n(p),d=n(9216),u=n.n(d),g=n(4589),m=n.n(g),x=n(7689),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=u();a()(x.Z,f);x.Z&&x.Z.locals&&x.Z.locals;var b=n(7294),h=n(460),y=n(7652),v=n(9583),w=n(1649),k=n(743);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=(0,h.Y)({className:"OpeningPage"});const C=function(){var e=E((0,b.useState)(""),2),t=e[0],n=e[1],r=(0,b.useRef)(null),a=(0,b.useRef)(null),o=(0,b.useRef)(null),l=(0,k.I0)(),i=E((0,b.useState)(""),2),c=i[0],p=i[1],s=E((0,b.useState)(""),2),d=s[0],u=s[1],g=E((0,b.useState)(""),2),m=g[0],x=g[1],f=function(e){return l((0,y.o_)(e))};return b.createElement("div",{className:"container"},b.createElement("div",{className:"opening-page"},b.createElement("div",{className:"page-header"},"Bulls and Cows (1A2B)"),b.createElement("div",{className:"page-content"},b.createElement("div",{ref:r,className:"start-local-btn",onClick:function(){r.current.style.display="none",a.current.style.display="none",n("local")}},"離線模式 ",b.createElement(v.cd_,{style:{transform:"rotate(-30deg)"}})),b.createElement("div",{ref:a,className:"start-party-btn",onClick:function(){r.current.style.display="none",a.current.style.display="none",n("party")}},"派對模式 ",b.createElement(v.cd_,{style:{transform:"rotate(-30deg)"}})),""!==t&&b.createElement("div",{className:"form"},"local"===t?b.createElement(b.Fragment,null,"離線模式為個人遊玩模式，目標在於追求高分並嘗試超越自己。"):"party"===t?b.createElement(b.Fragment,null,b.createElement("div",{className:"userName"},b.createElement("div",{className:"userName-input-label"},"名稱"),b.createElement("input",{type:"text",className:"userName-input",value:c,onChange:function(e){return p(e.target.value)},placeholder:"請輸入欲顯示之名稱"})),b.createElement("div",{className:"roomID"},b.createElement("div",{className:"roomID-input-label"},"代碼"),b.createElement("input",{type:"text",className:"roomID-input",value:d,onKeyDown:function(e){var t;"Enter"!==e.key||(t=!0,d.split("").map((function(e){(e.charCodeAt(0)<48||e.charCodeAt(0)>57)&&(t=!1)})),t)||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;I.info("Notice: ".concat(e)),x(e),t&&setTimeout((function(){return x("")}),t)}("只能輸入數字",1500)},onChange:function(e){return u(e.target.value.slice(0,9))},placeholder:"請輸入派對房間代碼"}))):void 0,b.createElement("div",{className:"btn-block"},b.createElement("div",{className:"back-btn",onClick:function(){r.current.style.display="block",a.current.style.display="block",n("")}},b.createElement(w.hjJ,{style:{transform:"translateY(2px)"}})," 返回 ",b.createElement(w.u1R,{style:{transform:"translateY(2px)"}})),b.createElement("div",{ref:o,className:"confirm-btn",onClick:function(){I.success("Start with ".concat(t," mode!")),f("/"+t)}},b.createElement(w.hjJ,{style:{transform:"translateY(2px)"}})," 確認 ",b.createElement(w.u1R,{style:{transform:"translateY(2px)"}}))),b.createElement("div",{className:"wording"},m))),b.createElement("div",{className:"page-footer"})))}},7689:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,".container{width:50%;height:100%;display:flex;flex-direction:column;align-items:center;margin:30px;padding:30px}.opening-page{width:70%;height:calc((100vh - 60px - 60px - 16px - 2px)/2);display:flex;flex-direction:column;align-items:center;padding:8px;background:rgba(255,255,255,.77);border-radius:16px;box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3);backdrop-filter:blur(5.6px);-webkit-backdrop-filter:blur(5.6px);border:1px solid #fff}.opening-page .page-header{width:50%;height:30px;display:flex;flex-direction:column;align-items:center;margin:20px 0 10px 0;text-align:center;font-weight:bold;font-size:24px}.opening-page .page-content{width:50%;height:100%;display:flex;flex-direction:column;align-items:center;margin:2px 2px}.opening-page .page-content .start-local-btn{width:90%;height:auto;margin:10px 0 5px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #04364b;background-color:#36a4d3;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-local-btn:hover{background-color:#87ccea}.opening-page .page-content .start-party-btn{width:90%;height:auto;margin:10px 0 5px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #053616;background-color:#44d271;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-party-btn:hover{background-color:#7eeaa1}.opening-page .page-content .form{width:100%;height:100%;align-items:center;text-align:center;display:flex;flex-direction:column;margin:20px 0 0 0}.opening-page .page-content .form .btn-block{display:flex;flex-direction:row;width:100%;height:50px}.opening-page .page-content .form .btn-block .back-btn{flex:1;margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#949494;border-radius:2px}.opening-page .page-content .form .btn-block .back-btn:hover{padding:2px 2px 5px 2px}.opening-page .page-content .form .btn-block .confirm-btn{flex:1;margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#5ccb49;border-radius:2px}.opening-page .page-content .form .btn-block .confirm-btn:hover{padding:2px 2px 5px 2px}.opening-page .page-footer{width:50%;height:20px;display:flex;flex-direction:column;align-items:center;margin:2px 2px;text-align:center}.userName{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.userName .userName-input-label{margin:auto;padding:0 15px 0 0}.userName .userName-input{flex:1}.roomID{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.roomID .roomID-input-label{margin:auto;padding:0 15px 0 0}.roomID .roomID-input{flex:1}.wording{color:#d93838;font-size:10px}",""]);const i=l}}]);