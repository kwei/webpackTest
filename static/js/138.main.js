"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[138],{6138:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(3379),r=a.n(n),o=a(7795),i=a.n(o),p=a(569),l=a.n(p),x=a(3565),c=a.n(x),s=a(9216),g=a.n(s),d=a(4589),b=a.n(d),u=a(7689),m={};m.styleTagTransform=b(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=g();r()(u.Z,m);u.Z&&u.Z.locals&&u.Z.locals;var h=a(7294),f=a(460),w=a(7652),y=a(9583),v=a(1649),k=a(743);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,o=[],i=!0,p=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){p=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(p)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var I=(0,f.Y)({className:"OpeningPage"});const A=function(){var e=E((0,h.useState)(""),2),t=e[0],a=e[1],n=(0,h.useRef)(null),r=(0,h.useRef)(null),o=(0,h.useRef)(null),i=(0,k.I0)(),p=E((0,h.useState)(""),2),l=p[0],x=p[1],c=E((0,h.useState)(""),2),s=c[0],g=c[1],d=E((0,h.useState)(""),2),b=d[0],u=d[1],m=function(e){return i((0,w.o_)(e))};return h.createElement("div",{className:"container"},h.createElement("div",{className:"opening-page"},h.createElement("div",{className:"page-header"},"幾 A 幾 B"),h.createElement("div",{className:"page-content"},h.createElement("div",{ref:n,className:"start-local-btn",onClick:function(){n.current.style.display="none",r.current.style.display="none",a("local")}},"離線模式 ",h.createElement(y.cd_,{style:{transform:"rotate(-30deg)"}})),h.createElement("div",{ref:r,className:"start-party-btn",onClick:function(){n.current.style.display="none",r.current.style.display="none",a("party")}},"派對模式 ",h.createElement(y.cd_,{style:{transform:"rotate(-30deg)"}})),""!==t&&h.createElement("div",{className:"form"},"local"===t?h.createElement(h.Fragment,null,"離線模式為個人遊玩模式，目標在於追求高分並嘗試超越自己。"):"party"===t?h.createElement(h.Fragment,null,h.createElement("div",{className:"userName"},h.createElement("div",{className:"userName-input-label"},"名稱"),h.createElement("input",{type:"text",className:"userName-input",value:l,onChange:function(e){return x(e.target.value)},placeholder:"請輸入欲顯示之名稱"})),h.createElement("div",{className:"roomID"},h.createElement("div",{className:"roomID-input-label"},"代碼"),h.createElement("input",{type:"text",className:"roomID-input",value:s,onKeyDown:function(e){var t;"Enter"!==e.key||(t=!0,s.split("").map((function(e){(e.charCodeAt(0)<48||e.charCodeAt(0)>57)&&(t=!1)})),t)||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;I.info("Notice: ".concat(e)),u(e),t&&setTimeout((function(){return u("")}),t)}("只能輸入數字",1500)},onChange:function(e){return g(e.target.value.slice(0,9))},placeholder:"請輸入派對房間代碼"}))):void 0,h.createElement("div",{className:"btn-block"},h.createElement("div",{className:"back-btn",onClick:function(){n.current.style.display="block",r.current.style.display="block",a("")}},h.createElement("div",{className:"temp-container"},h.createElement(v.hjJ,{style:{transform:"translateY(2px)"}})," 返回 ",h.createElement(v.u1R,{style:{transform:"translateY(2px)"}}))),h.createElement("div",{ref:o,className:"confirm-btn",onClick:function(){I.success("Start with ".concat(t," mode!")),m("/"+t)}},h.createElement("div",{className:"temp-container"},h.createElement(v.hjJ,{style:{transform:"translateY(2px)"}})," 確認 ",h.createElement(v.u1R,{style:{transform:"translateY(2px)"}})))),h.createElement("div",{className:"wording"},b)))))}},7689:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(8081),r=a.n(n),o=a(3645),i=a.n(o)()(r());i.push([e.id,".container{width:80vw;height:100%;display:flex;flex-direction:column;align-items:center;margin:30px 0;padding:30px}.opening-page{width:80%;height:100%;display:flex;flex-direction:column;align-items:center;max-width:370px;padding:8px;background:rgba(255,255,255,.77);border-radius:16px;box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3);backdrop-filter:blur(5.6px);-webkit-backdrop-filter:blur(5.6px);border:1px solid #fff;animation-name:shrink;animation-duration:4s;animation-iteration-count:infinite;-webkit-animation-name:shrink;-webkit-animation-duration:4s;-webkit-animation-iteration-count:infinite}.opening-page .page-header{width:80%;height:30px;display:flex;flex-direction:column;align-items:center;margin:20px 0 10px 0;text-align:center;font-weight:bold;font-size:24px}.opening-page .page-content{width:80%;height:100%;display:flex;flex-direction:column;align-items:center;margin:2px 2px}.opening-page .page-content .start-local-btn{width:90%;height:auto;margin:20px 0 5px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #04364b;background-color:#36a4d3;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-local-btn:hover{background-color:#87ccea}.opening-page .page-content .start-party-btn{width:90%;height:auto;margin:10px 0 15px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #053616;background-color:#44d271;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-party-btn:hover{background-color:#7eeaa1}.opening-page .page-content .form{width:100%;height:100%;align-items:center;text-align:center;display:flex;flex-direction:column;margin:20px 0 0 0}.opening-page .page-content .form .btn-block{display:flex;flex-direction:row;width:100%;height:40px;margin:20px 0 2px 0;align-items:center}.opening-page .page-content .form .btn-block .back-btn{margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#949494;border-radius:2px}.opening-page .page-content .form .btn-block .confirm-btn{margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#5ccb49;border-radius:2px}.userName{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.userName .userName-input-label{margin:auto;padding:0 15px 0 0}.userName .userName-input{flex:1}.roomID{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.roomID .roomID-input-label{margin:auto;padding:0 15px 0 0}.roomID .roomID-input{flex:1}.wording{color:#d93838;font-size:10px}.temp-container{flex:1;width:fit-content;height:auto;display:flex;flex-direction:row;align-items:center;padding:8px 10px;border-radius:8px}.temp-container:hover{padding:6px 10px 10px 10px}@-webkit-keyframes shrink{0%{box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3)}10%{box-shadow:0 4px 30px rgba(0,234,255,.1),0 2px 15px rgba(0,51,255,.3)}20%{box-shadow:0 4px 30px rgba(0,128,255,.1),0 2px 15px rgba(85,0,255,.3)}30%{box-shadow:0 4px 30px rgba(0,4,255,.1),0 2px 15px rgba(170,0,255,.3)}40%{box-shadow:0 4px 30px rgba(102,0,255,.1),0 2px 15px rgba(255,0,221,.3)}50%{box-shadow:0 4px 30px rgba(161,0,255,.1),0 2px 15px rgba(255,0,128,.3)}60%{box-shadow:0 4px 30px rgba(102,0,255,.1),0 2px 15px rgba(255,0,221,.3)}70%{box-shadow:0 4px 30px rgba(0,4,255,.1),0 2px 15px rgba(170,0,255,.3)}80%{box-shadow:0 4px 30px rgba(0,128,255,.1),0 2px 15px rgba(85,0,255,.3)}90%{box-shadow:0 4px 30px rgba(0,234,255,.1),0 2px 15px rgba(0,51,255,.3)}100%{box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3)}}@keyframes shrink{0%{box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3)}10%{box-shadow:0 4px 30px rgba(0,234,255,.1),0 2px 15px rgba(0,51,255,.3)}20%{box-shadow:0 4px 30px rgba(0,128,255,.1),0 2px 15px rgba(85,0,255,.3)}30%{box-shadow:0 4px 30px rgba(0,4,255,.1),0 2px 15px rgba(170,0,255,.3)}40%{box-shadow:0 4px 30px rgba(102,0,255,.1),0 2px 15px rgba(255,0,221,.3)}50%{box-shadow:0 4px 30px rgba(161,0,255,.1),0 2px 15px rgba(255,0,128,.3)}60%{box-shadow:0 4px 30px rgba(102,0,255,.1),0 2px 15px rgba(255,0,221,.3)}70%{box-shadow:0 4px 30px rgba(0,4,255,.1),0 2px 15px rgba(170,0,255,.3)}80%{box-shadow:0 4px 30px rgba(0,128,255,.1),0 2px 15px rgba(85,0,255,.3)}90%{box-shadow:0 4px 30px rgba(0,234,255,.1),0 2px 15px rgba(0,51,255,.3)}100%{box-shadow:0 4px 30px rgba(0,255,187,.1),0 2px 15px rgba(0,234,255,.3)}}",""]);const p=i}}]);