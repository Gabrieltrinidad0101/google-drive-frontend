(()=>{"use strict";var n={985:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap);"]),i.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\ninput {\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.forms-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.signin-signup {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform.sign-up-form {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form {\r\n  z-index: 2;\r\n}\r\n\r\n.title {\r\n  font-size: 2.2rem;\r\n  color: #444;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input-field {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n}\r\n\r\n.input-field i {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #acacac;\r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field input {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n}\r\n\r\n.input-field input::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.social-media {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn {\r\n  width: 150px;\r\n  background-color: #5995fd;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #4d84e2;\r\n}\r\n.panels-container {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.container:before {\r\n  content: "";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel .content {\r\n  color: #fff;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel h3 {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel p {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent {\r\n  margin: 0;\r\n  background: none;\r\n  border: 2px solid #fff;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel .image,\r\n.right-panel .content {\r\n  transform: translateX(800px);\r\n}\r\n\r\n/* ANIMATION */\r\n\r\n.container.sign-up-mode:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.container.sign-up-mode .left-panel .image,\r\n.container.sign-up-mode .left-panel .content {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.container.sign-up-mode .signin-signup {\r\n  left: 25%;\r\n}\r\n\r\n.container.sign-up-mode form.sign-up-form {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.container.sign-up-mode form.sign-in-form {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.container.sign-up-mode .right-panel .image,\r\n.container.sign-up-mode .right-panel .content {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.container.sign-up-mode .left-panel {\r\n  pointer-events: none;\r\n}\r\n\r\n.container.sign-up-mode .right-panel {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .container {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup,\r\n  .container.sign-up-mode .signin-signup {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel .content {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel h3 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel p {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .container:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .container.sign-up-mode:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .container.sign-up-mode .left-panel .image,\r\n  .container.sign-up-mode .left-panel .content {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .container.sign-up-mode .right-panel .image,\r\n  .container.sign-up-mode .right-panel .content {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel .image,\r\n  .right-panel .content {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .container.sign-up-mode .signin-signup {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image {\r\n    display: none;\r\n  }\r\n  .panel .content {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .container {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .container:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .container.sign-up-mode:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n',""]);const o=i},167:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,".errorModal-container{\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0,0,0,0.5);\n}\n\n.errorModal{\n    width: 40%;\n    height: 50%;\n    overflow: hidden;\n    background: #fff;\n    text-align: center;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    transition: transform 1s; \n    transform: translateY(0%);\n}\n\n.errorModal > img{\n    margin-top: 30px;\n    height: 50%;\n}\n\n\n.closetErrorModal{\n    position: absolute;\n    top:5px;\n    right: 0px;\n    margin-right: 3px;\n    background: red;\n    border-radius: 50%;\n    padding: 1%;\n    cursor: pointer;\n}\n\n\n@media screen and (max-width: 760px){\n    .errorModal{\n        width: 90%;\n    }\n}\n\n\n\n\n\n",""]);const o=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},379:(n,r,e)=>{var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function a(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],d=e[l]||0,c="".concat(l," ").concat(d);e[l]=d+1;var p=a(c),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:c,updater:m(u,r),references:1}),t.push(c)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,c=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function u(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var g=null,f=0;function m(n,r){var e,t,i;if(r.singleton){var o=f++;e=g||(g=l(r)),t=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=l(r),t=u.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var l=s(n,r),d=0;d<e.length;d++){var c=a(e[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=l}}}}},r={};function e(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(985);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,e.p;class i{constructor(){this.url="https://my-own-drive.xyz/"}async send(n,r){var e=new Headers;e.append("Content-Type","application/json");var t={method:"post",headers:e,body:JSON.stringify(n),credentials:"include"};const i=await fetch(`${this.url}${r}`,t);return await i.json()}}var o=e(167);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;new class{constructor(){this.registerForm=document.getElementById("registerForm"),this.registerName=document.getElementById("registerName"),this.registerEmail=document.getElementById("registerEmail"),this.registerPassword=document.getElementById("registerPassword"),this.registerPasswordVerify=document.getElementById("registerPasswordVerify"),this.signInBtn=document.querySelector("#sign-in-btn"),this.erros=document.querySelector(".erros"),this.registerForm.addEventListener("submit",(n=>this.registerUser(n))),this.signInBtn.addEventListener("click",(n=>window.location.href="https://gabrieltrinidad0101.github.io/google-drive-frontend/login.html")),this.register=new i,this.modalError=new class{constructor(){this.windowErrorModal=document.querySelector(".errorModal-container"),this.errorModal=document.querySelector(".errorModal"),this.buttonErrorModal=document.querySelector(".closetErrorModal"),this.textError=document.querySelector(".showTextError"),this.buttonErrorModal.addEventListener("click",(n=>this.closetErrorModal()))}error(n){this.windowErrorModal.style.visibility="visible",this.windowErrorModal.style.opacity="1",this.textError.innerText=n}closetErrorModal(){this.errorModal.classList.remove("modal-closet"),this.windowErrorModal.style.visibility="hidden",this.windowErrorModal.style.opacity="0"}}}async registerUser(n){n.preventDefault();const r={name:this.registerName.value,email:this.registerEmail.value,password:this.registerPassword.value,passwordVerify:this.registerPasswordVerify.value},e=await this.register.send(r,"user/register");console.log("hola mundo"),"Verify your email"===e?alert(e):(console.log("hola mundo"),this.modalError.error(e))}}})()})();