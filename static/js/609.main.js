"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[609],{849:(e,t,n)=>{n.d(t,{m:()=>r});var r=function(e){var t=!0;return e.split("").map((function(e){(e.charCodeAt(0)<48||e.charCodeAt(0)>57)&&(t=!1)})),t}},457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(379),a=n.n(r),o=n(795),i=n.n(o),l=n(569),c=n.n(l),p=n(565),s=n.n(p),d=n(216),u=n.n(d),m=n(589),g=n.n(m),f=n(689),x={};x.styleTagTransform=g(),x.setAttributes=s(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u();a()(f.Z,x);f.Z&&f.Z.locals&&f.Z.locals;var h=n(294),b=n(460),y=n(652),v=n(893),w=n(327),E=n(653),k=n(578),N=n(743),S=n(849),I=n(207),C=n(604);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=(0,b.Y)({className:"OpeningPage"});const Z=function(){var e=A((0,h.useState)(""),2),t=e[0],n=e[1],r=(0,h.useRef)(null),a=(0,h.useRef)(null),o=(0,h.useRef)(null),i=(0,N.I0)(),l=A((0,h.useState)(""),2),c=l[0],p=l[1],s=A((0,h.useState)(""),2),d=s[0],u=s[1],m=A((0,h.useState)(""),2),g=m[0],f=m[1],x=function(){r.current.style.display="block",a.current.style.display="block",n("")},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;z.info("Notice: ".concat(e)),f(e),t&&setTimeout((function(){return f("")}),t)},D=function(e){return i((0,y.o_)(e))};return h.createElement("div",{className:"container-opening"},h.createElement("div",{className:"opening-page"},""!==t&&h.createElement("div",{className:"goBack",onClick:x},h.createElement(E.hPZ,{style:{transform:"translateX(0)",fontSize:"15px",color:"gray"}})," 回到選單"),h.createElement("div",{className:"page-header"},"幾 A 幾 B"),h.createElement("div",{className:"page-content"},h.createElement("div",{ref:r,className:"start-local-btn",onClick:function(){r.current.style.display="none",a.current.style.display="none",n("local")}},"離線模式 ",h.createElement(k.ZUl,{style:{transform:"rotate(0deg) translateY(2px)",fontSize:"17px"}})),h.createElement("div",{ref:a,className:"start-party-btn",onClick:function(){r.current.style.display="none",a.current.style.display="none",n("party")}},"派對模式 ",h.createElement(v.XKb,{style:{transform:"rotate(0deg) translateY(2px)",fontSize:"14px"}})),""!==t&&h.createElement("div",{className:"form"},"local"===t?h.createElement(h.Fragment,null,"離線模式為個人遊玩模式，目標在於追求高分並嘗試超越自己。"):"party"===t?h.createElement(h.Fragment,null,h.createElement("div",{className:"userName"},h.createElement("div",{className:"userName-input-label"},"名稱 ",h.createElement(w.cKp,{style:{transform:"translateX(2px)",fontSize:"20px"}})),h.createElement("input",{type:"text",className:"userName-input",value:c,onChange:function(e){return p(e.target.value)},placeholder:"請輸入欲顯示之名稱"})),h.createElement("div",{className:"roomID"},h.createElement("div",{className:"roomID-input-label"},"代碼 ",h.createElement(w.Sdm,{style:{transform:"translateX(2px)",fontSize:"20px"}})),h.createElement("input",{type:"text",className:"roomID-input",value:d,onKeyDown:function(e){"Enter"!==e.key||(0,S.m)(d)||b("只能輸入數字",1500)},onChange:function(e){return u(e.target.value.slice(0,9))},placeholder:"請輸入派對房間代碼"}))):void 0,h.createElement("div",{className:"btn-block"},h.createElement("div",{className:"back-btn",onClick:x},h.createElement("div",{className:"temp-container"},h.createElement(E.hPZ,{style:{transform:"translateX(-2px)",fontSize:"25px"}})," 取消")),h.createElement("div",{ref:o,className:"confirm-btn",onClick:function(){if(z.success("Start with ".concat(t," mode!")),(0,S.m)(d)){var e="匿名玩家";""!==c&&(e=c),""!==d?(i((0,C.tu)(d)),z.info("slave"),i((0,C.gD)("slave"))):(z.info("host"),i((0,C.gD)("host"))),i((0,I.av)(e)),D("/"+t)}else b("只能輸入數字",1500)}},h.createElement("div",{className:"temp-container"},"確認 ",h.createElement(E.e$1,{style:{transform:"translateX(2px)",fontSize:"25px"}})))),h.createElement("div",{className:"wording"},g)))))}},689:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,".container-opening{width:80vw;height:100%;display:flex;flex-direction:column;align-items:center;margin:30px 0;padding:30px}.goBack{display:flex;flex-direction:row;width:100%;height:auto;color:#b2b2b2;cursor:pointer;font-size:12px;padding:0 0 0 5px}.goBack:hover{color:#2c2c2c;padding:0}.opening-page{width:80%;height:100%;display:flex;flex-direction:column;align-items:center;max-width:370px;padding:8px;background:rgba(255,255,255,.77);border-radius:16px;box-shadow:0 4px 30px rgba(86,86,86,.1),0 2px 15px rgba(112,112,112,.3);backdrop-filter:blur(5.6px);-webkit-backdrop-filter:blur(5.6px);border:1px solid #fff}.opening-page .page-header{width:80%;height:30px;display:flex;flex-direction:column;align-items:center;margin:20px 0 10px 0;text-align:center;font-weight:bold;font-size:24px}.opening-page .page-content{width:90%;height:100%;display:flex;flex-direction:column;align-items:center;margin:2px 2px}.opening-page .page-content .start-local-btn{width:90%;height:auto;margin:20px 0 5px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #04364b;background-color:#36a4d3;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-local-btn:hover{background-color:#87ccea}.opening-page .page-content .start-party-btn{width:90%;height:auto;margin:10px 0 15px 0;padding:5px;cursor:pointer;border-radius:5px;border:1px solid #053616;background-color:#44d271;text-align:center;font-weight:bold;box-shadow:rgba(0,0,0,.16) 0 1px 4px}.opening-page .page-content .start-party-btn:hover{background-color:#7eeaa1}.opening-page .page-content .form{width:100%;height:100%;align-items:center;text-align:center;display:flex;flex-direction:column;margin:20px 0 0 0}.opening-page .page-content .form .btn-block{display:flex;flex-direction:row;width:100%;height:40px;margin:20px 0 2px 0;align-items:center}.opening-page .page-content .form .btn-block .back-btn{margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#949494;border-radius:2px}.opening-page .page-content .form .btn-block .confirm-btn{margin:auto;height:auto;text-align:center;cursor:pointer;font-weight:bold;color:#5ccb49;border-radius:2px}.userName{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.userName .userName-input-label{margin:auto;padding:0 8px 0 0;display:flex;flex-direction:row}.userName .userName-input{flex:1}.roomID{width:100%;height:30px;margin:8px 10px;display:flex;flex-direction:row}.roomID .roomID-input-label{margin:auto;padding:0 8px 0 0;display:flex;flex-direction:row}.roomID .roomID-input{flex:1}.wording{color:#d93838;font-size:10px}.temp-container{flex:1;width:fit-content;height:auto;display:flex;flex-direction:row;align-items:center;padding:8px 10px;border-radius:8px}.temp-container:hover{padding:6px 10px 10px 10px}",""]);const l=i}}]);