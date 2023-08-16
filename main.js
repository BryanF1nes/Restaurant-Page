(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]),i.push([n.id,"* {\n    margin: 0 auto;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    cursor: default;\n}\n\nbody {\n    background-color: white;\n}\n\n#content {\n    height: 100vh;\n    width: 100%;\n    color: white;\n}\n\n.container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.815);\n}\n\nnav {\n    margin: 0 auto;\n}\n\nul {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    list-style: none;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\nh2 {\n    font-size: 18px;\n}\n\nbutton {\n    padding: 20px 20px;\n    border: none;\n    background: none;\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n    cursor: pointer;\n    margin: 0;\n    transition: 0.3s ease-in;\n}\n\nbutton:hover {\n    background-color: white;\n    color: black;\n}\n\n/* .menu {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 80%;\n    gap: 20px;\n} */\n\n.menu-flex {\n    display: grid;\n    background-color: #000000d0;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    padding: 20px 40px;\n}\n\n.img {\n    height: 250px;\n    width: auto;\n    padding: 10px 0px;\n    /* object-fit: cover; */\n}\n\ntextarea {\n    resize: none;\n    cursor: auto;\n    padding: 10px;\n}\n\n.tabcontent {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 85%;\n}\n\n.link.active {\n    color: black;\n    background: white;\n}\n\nform {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background: rgba(0, 0, 0, 0.815);\n    height: 300px;\n    width: 450px;\n    gap: 15px;\n    padding: 20px 10px;\n}\n\n.submit {\n    background: white;\n    color: black;\n    padding: 10px 30px;\n    border-radius: 20px;\n    border: none;\n}\n\ninput {\n    padding: 5px 5px;\n    width: 240px;\n    cursor: auto;\n}\n\n.form-div {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    padding: 5px;\n    gap: 10px;\n}\n\n/* Media Queries */\n@media screen and (max-width: 768px) { \n    .menu-flex {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .menu {\n        margin-top: 150px;\n    }\n\n    .container h1 {\n        font-size: 16px;\n    }\n\n    .container ul button {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .menu-flex {\n        padding: 20px 20px;\n    }\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"a697895e200748dce593.png",e=t.p+"8a9cbcab43e9481d6389.png",r=t.p+"47942b6fad3a98005b7a.png";var o=t(379),a=t.n(o),i=t(795),c=t.n(i),s=t(569),l=t.n(s),d=t(565),u=t.n(d),p=t(216),m=t.n(p),f=t(589),g=t.n(f),h=t(426),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const b=t.p+"13c37d2157ed6b5034cc.jpg";function y(n,e){const t=document.getElementsByClassName("tabcontent");for(let n=0;n<t.length;n++)t[n].style.display="none";const r=document.getElementsByClassName("link");for(let n=0;n<r.length;n++)r[n].className=r[n].className.replace(" active","");e.style="flex",n.currentTarget.className+=" active"}const x=document.getElementById("content");x.style.background=`url(${b}) no-repeat`,x.style.backgroundSize="cover",document.getElementById("content").append(function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("button"),a=document.createElement("button"),i=document.createElement("button");return o.classList.add("link"),a.classList.add("link"),i.classList.add("link"),o.innerHTML="Home",o.id="default",a.innerHTML="Menu",i.innerHTML="Contact",r.append(o,a,i),t.append(r),e.innerHTML="Butter Beer Bakery",n.classList.add("container"),n.append(e,t),o.addEventListener("click",(()=>y(event,home))),a.addEventListener("click",(()=>y(event,menu))),i.addEventListener("click",(()=>y(event,contact))),n}(),function(){const n=document.createElement("div");return n.id="home",n.classList.add("tabcontent"),n.innerHTML="<h1>Welcome to Butter Beer Bakery!</h1>\n    <p>Your one stop shop for beer and baked goods!</p>",n}(),function(){const t=document.createElement("div");return t.classList.add("menu","tabcontent"),t.id="menu",t.innerHTML=`<h1>Menu</h1>\n    <ul class="menu-flex">\n        <li>\n            <h2>Becks Cold Brew - $4.99</h2>\n            <img class="img" src='${n}'>\n            <p>A classic homestyle lauger!</p>\n        </li>\n        <li>\n            <h2>Yuengling Traditional Lager - $5.99</h2>\n            <img class="img" src='${e}'>\n            <p>An American Traditional Lager!</p>\n        </li>\n        <li>\n            <h2>Sam Adams Octoberfest - $4.99</h2>\n            <img class="img" src='${r}'>\n            <p>Hearty & Smooth!</p>\n        </li>\n    </ul>`,t}(),function(){const n=document.createElement("div");return n.classList.add("contact","tabcontent"),n.id="contact",n.innerHTML='\n    <form>\n        <h1>Contact Us!</h1>\n        <div class="form-div">\n            <label for="name">Name</label>\n            <input type="text" name="name">\n        </div>\n        <div class="form-div">\n            <label for="email">Email</label>\n            <input type="email" name="email">\n        </div>\n        <textarea rows="5" cols="40" placeholder="Enter your message here..."></textarea>\n        <button class="submit">Send</button>\n    </form>\n    ',n}()),document.getElementById("default").click()})()})();