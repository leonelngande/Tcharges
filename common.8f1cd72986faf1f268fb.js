(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7Xav":function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("mrSG"),i=(e("KHt8"),function(){function t(){}return Object.defineProperty(t.prototype,"tariff",{get:function(){return this._tariff},set:function(t){this._tariff=r.a({},t)},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){},t}())},"7eG3":function(t,n,e){"use strict";var r=e("CcnG"),i=e("oBZk"),o=e("ZZ/e"),a=e("6fnK"),u=e("ZYjt"),c=e("t/Na"),s=e("dWZg"),l=e("Ip0R"),d=e("biI1");e.d(n,"a",function(){return m});var f=r.nb({encapsulation:0,styles:[[""]],data:{}});function h(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,8,"ion-item",[],[[4,"pointerEvents",null]],[[null,"opened"],[null,"count"],[null,"click"]],function(t,n,e){var i=!0,o=t.component;return"click"===n&&(i=!1!==r.yb(t,2).share()&&i),"opened"===n&&(i=!1!==o.dismissSharePopover()&&i),"count"===n&&(i=!1!==o.setCount(e,t.context.$implicit)&&i),i},i.Q,i.o)),r.ob(1,49152,null,0,o.F,[r.h,r.k],null,null),r.ob(2,671744,null,0,a.b,[u.h,r.k,c.c,s.a,r.D,r.h,a.d,l.c],{shareButtonName:[0,"shareButtonName"],getCount:[1,"getCount"]},{count:"count",opened:"opened"}),(t()(),r.pb(3,0,null,0,1,"ion-icon",[],null,null,null,i.N,i.l)),r.ob(4,49152,null,0,o.A,[r.h,r.k],{color:[0,"color"],name:[1,"name"]},null),(t()(),r.Fb(-1,0,["\xa0 "])),(t()(),r.pb(6,0,null,0,2,"ion-label",[],null,null,null,i.R,i.p)),r.ob(7,49152,null,0,o.L,[r.h,r.k],null,null),(t()(),r.Fb(8,0,["",""]))],function(t,n){t(n,2,0,n.context.$implicit.name,n.context.$implicit.hasShareCount),t(n,4,0,n.context.$implicit.color,n.context.$implicit.iconName)},function(t,n){t(n,0,0,r.yb(n,2).pointerEvents),t(n,8,0,n.context.$implicit.shareText)})}function p(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,8,"ion-list",[["no-margin",""],["no-padding",""]],null,null,null,i.T,i.q)),r.ob(1,49152,null,0,o.M,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,4,"ion-list-header",[],null,null,null,i.S,i.r)),r.ob(3,49152,null,0,o.N,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,2,"ion-label",[],null,null,null,i.R,i.p)),r.ob(5,49152,null,0,o.L,[r.h,r.k],null,null),(t()(),r.Fb(-1,0,["Share MoMoCharges!"])),(t()(),r.gb(16777216,null,0,1,null,h)),r.ob(8,278528,null,0,l.i,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,8,0,n.component.shareProviders)},null)}function v(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-share-popover-components",[],null,null,null,p,f)),r.ob(1,114688,null,0,d.a,[o.Hb],null,null)],function(t,n){t(n,1,0)},null)}var m=r.lb("app-share-popover-components",d.a,v,{},{},[])},B5Ai:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return a});var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function i(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,r){return new(e||(e=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(n){o(n)}}function u(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(a,u)}c((r=r.apply(t,n||[])).next())})}function a(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(u){o=[6,u],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}},Bs4g:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t,n){return function(t){return i(t)}(t).includes(n)},i=function(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;return null==n&&(n=t.Ionic.platforms=o(t)).forEach(function(n){return t.document.documentElement.classList.add("plt-"+n)}),n},o=function(t){return Object.keys(p).filter(function(n){return p[n](t)})},a=function(t){return f(t,/iPad/i)},u=function(t){return f(t,/android|sink/i)},c=function(t){return h(t,"(any-pointer:coarse)")},s=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var n=t.Capacitor;return!(!n||!n.isNative)},f=function(t,n){return!(!t.navigator||!t.navigator.userAgent)&&n.test(t.navigator.userAgent)},h=function(t,n){return!!t.matchMedia&&t.matchMedia(n).matches},p={ipad:a,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:u,phablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return a(t)||function(t){return u(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:l,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:c,mobileweb:function(t){return c(t)&&!s(t)},desktop:function(t){return!c(t)},hybrid:s}},JvIM:function(t,n,e){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function a(t,n,e,r,o){if(t||i(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=o,a.name=e,a.value=r||""}}function u(t,n,e){return Math.max(t,Math.min(n,e))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,n){var e=t._original||t;return{_original:t,emit:f(e.emit.bind(e),n)}}function f(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"h",function(){return u}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return s})},KHt8:function(t,n,e){"use strict";var r;e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),function(t){t.MTN="mtn",t.ORANGE="orange",t.EU="eu"}(r||(r={}));var i=[{name:"MTN",value:r.MTN},{name:"Orange",value:r.ORANGE},{name:"Express Union",value:r.EU}]},"Wfx+":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,u.forEach(function(t){for(var e=n.querySelectorAll(t),r=e.length-1;r>=0;r--){var a=e[r];a.parentNode?a.parentNode.removeChild(a):n.removeChild(a);for(var u=o(a),c=0;c<u.length;c++)i(u[c])}});for(var r=o(n),a=0;a<r.length;a++)i(r[a]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var e=t.attributes[n],r=e.name;if(a.includes(r.toLowerCase())){var u=e.value;null!=u&&u.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=o(t);for(n=0;n<c.length;n++)i(c[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src"],u=["script","style","iframe","meta","link","object","embed"]},YFsJ:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("CcnG"),i=function(){function t(){}return t.prototype.eventEmitter=function(t,n,e,r){void 0===e&&(e=null),void 0===r&&(r=null),ga("send","event",{eventCategory:t,eventLabel:e,eventAction:n,eventValue:r})},t.ngInjectableDef=r.S({factory:function(){return new t},token:t,providedIn:"root"}),t}()},awvO:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return u});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",u="ionViewWillUnload"},"bJz+":function(t,n,e){"use strict";e.d(n,"a",function(){return g}),e.d(n,"b",function(){return w}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return y});var r=e("B5Ai"),i=e("awvO"),o=function(){return e.e(47).then(e.bind(null,"rSHd"))},a=function(){return e.e(48).then(e.bind(null,"NJz6"))};function u(t){return new Promise(function(n,e){t.queue.write(function(){(function(t){var n=t.enteringEl,e=t.leavingEl;(function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),y(n,!1),e&&y(e,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,(n=e.sent())?l(n,t):d(t)]}})})}(t).then(function(e){e.animation&&e.animation.destroy(),c(t),n(e)},function(n){c(t),e(n)})})})}function c(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}function l(t,n){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(n,!0)];case 1:return r.sent(),[4,e.e(1).then(e.bind(null,"OFjk")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return i=r.sent(),v(n.enteringEl,n.leavingEl),[4,p(i,n)];case 3:return r.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var n,e;return r.c(this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(n,e),m(n,e),[2,{hasCompleted:!0}]}})})}function f(t,n){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[g(t.enteringEl),g(t.leavingEl)]:[b(t.enteringEl),b(t.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,n){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function p(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r}function v(t,n){w(n,i.a),w(t,i.b)}function m(t,n){w(t,i.c),w(n,i.d)}function w(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}}function b(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(g))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function y(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},biI1:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("mrSG"),i=(e("ZZ/e"),function(){function t(t){this.popoverController=t,this.text="I just used MoMoCharges to quickly calculate and compare mobile money charges, check it out!",this.url="https://www.momocharges.com",this.shareProviders=[{name:"facebook",shareText:"Share on Facebook",iconName:"logo-facebook",hasShareCount:!1,color:"facebook"},{name:"twitter",shareText:"Share on Twitter",iconName:"logo-twitter",hasShareCount:!1,color:"#00acee"},{name:"whatsapp",shareText:"Share with Whatsapp",iconName:"logo-whatsapp",hasShareCount:!1,color:"#25D366"},{name:"email",shareText:"Share by Email",iconName:"mail",hasShareCount:!1,color:"#FF961C"}]}return t.prototype.ngOnInit=function(){},t.prototype.setCount=function(t,n){n.count=t},t.prototype.dismissSharePopover=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return[4,this.popoverController.dismiss()];case 1:return t.sent(),[2]}})})},t}())},d6Vy:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return i});var r=e("B5Ai");function i(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var u=/^[a-z][a-z0-9+\-.]*:/;function c(t,n,e,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||u.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(n,i)];case 2:return[2,!1]}})})}},dnAA:function(t,n,e){"use strict";e.d(n,"a",function(){return p}),e.d(n,"b",function(){return h}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return f}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return a}),e.d(n,"h",function(){return u});var r=e("B5Ai"),i=0;function o(t,n){var e=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(n){var e=u(t);if(e&&e.backdropDismiss&&!function(t,n){for(;n;){if(n===t)return!0;n=n.parentElement}return!1}(e,n.target)){var r=e.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(n){var e=u(t);e&&e.backdropDismiss&&n.detail.register(100,function(){return e.dismiss(void 0,p)})}),t.addEventListener("keyup",function(n){if("Escape"===n.key){var e=u(t);e&&e.backdropDismiss&&e.dismiss(void 0,p)}}))})(e),Object.assign(t,n),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(e).appendChild(t),t.componentOnReady()}function a(t,n,e,r,i){var o=u(t,r,i);return o?o.dismiss(n,e):Promise.reject("overlay does not exist")}function u(t,n,e){var r=function(t,n){var e=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===n?e:(n=n.toUpperCase(),e.filter(function(t){return t.tagName===n}))}(t,n);return void 0===e?r[r.length-1]:r.find(function(t){return t.id===e})}function c(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(n,"ios"===t.mode?e:i),[4,d(t,a,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function s(t,n,e,i,o,a,u){return r.a(this,void 0,void 0,function(){var c,s;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:n,role:e}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:a),[4,d(t,c,t.el,u)];case 2:return r.sent(),t.didDismiss.emit({data:n,role:e}),[3,4];case 3:return s=r.sent(),console.error(s),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,n,i,o){return r.a(this,void 0,void 0,function(){var a,u,c,s;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,c=t,[4,e.e(1).then(e.bind(null,"OFjk")).then(function(t){return t.create(n,a,o)})]);case 1:return u=c.animation=r.sent(),t.animation=u,t.animated&&t.config.getBoolean("animated",!0)||u.duration(0),t.keyboardClose&&u.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,u.playAsync()];case 2:return r.sent(),s=u.hasCompleted,u.destroy(),t.animation=void 0,[2,s]}})})}function f(t,n){var e,r=new Promise(function(t){return e=t});return function(t,n,e){var r=function(i){t.removeEventListener(n,r),e(i)};t.addEventListener(n,r)}(t,n,function(t){e(t.detail)}),r}function h(t){return"cancel"===t||t===p}var p="backdrop"},j1ZV:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e("Ip0R");var r=e("sBss"),i=e("7Xav"),o=(e("gIcY"),e("ZZ/e"),e("biI1")),a=(e("6fnK"),[r.a,i.a].concat([o.a]),function(){return function(){}}())},jT1R:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("B5Ai");function i(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},k6lV:function(t,n,e){"use strict";e.r(n),e.d(n,"createGesture",function(){return f}),e.d(n,"GESTURE_CONTROLLER",function(){return c});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===e){this.capturedId=n,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,n,e,r,i){this.id=n,this.name=e,this.disableScroll=i,this.priority=1e6*r+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,n,e,r){this.id=n,this.disable=e,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",c=new i(document);function s(t,n,e,i){var o,a,u=function(t){if(void 0===r)try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},n)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](n,e,u),function(){t[a](n,e,u)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),e=n.canStart,r=n.onWillStart,i=n.onStart,o=n.onEnd,a=n.notCaptured,u=n.onMove,f=n.threshold,m=n.queue,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},b=function(t,n,e,r,i){var o,a,u,c,f,h,p,v=0;function m(r){v=Date.now()+l,n(r)&&(!a&&e&&(a=s(t,"touchmove",e,i)),u||(u=s(t,"touchend",b,i)),c||(c=s(t,"touchcancel",b,i)))}function w(r){v>Date.now()||n(r)&&(!h&&e&&(h=s(d(t),"mousemove",e,i)),p||(p=s(d(t),"mouseup",g,i)))}function b(t){y(),r&&r(t)}function g(t){S(),r&&r(t)}function y(){a&&a(),u&&u(),c&&c(),a=u=c=void 0}function S(){h&&h(),p&&p(),h=p=void 0}function E(){y(),S()}function k(n){n?(o&&o(),f&&f(),o=f=void 0,E()):(o||(o=s(t,"touchstart",m,i)),f||(f=s(t,"mousedown",w,i)))}return{setDisabled:k,stop:E,destroy:function(){k(!0),r=e=n=void 0}}}(n.el,function(t){var n=v(t);return!(E||!k)&&(p(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=n,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!e||!1!==e(w))&&(y.release(),!!y.start()&&(E=!0,0===f?x():(g.start(w.startX,w.startY),!0))))},function(t){S?!T&&k&&(T=!0,h(w,t),m.write(C)):(h(w,t),g.detect(w.currentX,w.currentY)&&(g.isGesture()&&x()||(O(),b.stop(),a&&a(w))))},L,{capture:!1}),g=function(t,n,e){var r=e*(Math.PI/180),i="x"===t,o=Math.cos(r),a=n*n,u=0,c=0,s=!1,l=0;return{start:function(t,n){u=t,c=n,l=0,s=!0},detect:function(t,n){if(!s)return!1;var e=t-u,r=n-c,d=e*e+r*r;if(d<a)return!1;var f=Math.sqrt(d),h=(i?e:r)/f;return l=h>o?1:h<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(n.direction,n.threshold,n.maxAngle),y=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,E=!1,k=!0,T=!1;function C(){S&&(T=!1,u&&u(w))}function x(){return!(y&&!y.capture()||(S=!0,k=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,r?r(w).then(A):A(),0))}function A(){i&&i(w),k=!0}function O(){S=!1,E=!1,T=!1,k=!0,y.release()}function L(t){var n=S,e=k;O(),e&&(h(w,t),n?o&&o(w):a&&a(w))}return{setDisabled:function(t){t&&S&&L(void 0),b.setDisabled(t)},destroy:function(){y.destroy(),b.destroy()}}}function h(t,n){if(n){var e=t.currentX,r=t.currentY,i=t.timeStamp;p(n,t);var o=t.currentX,a=t.currentY,u=(t.timeStamp=v(n))-i;if(u>0&&u<100){var c=(a-r)/u;t.velocityX=(o-e)/u*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=n}}function p(t,n){var e=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];e=o.clientX,r=o.clientY}else void 0!==t.pageX&&(e=t.pageX,r=t.pageY)}n.currentX=e,n.currentY=r}function v(t){return t.timeStamp||Date.now()}},sBss:function(t,n,e){"use strict";var r=e("gIcY"),i=e("KHt8"),o=function(t){return{type:"percentage",value:t/100,chargeFromAmount:function(t){return this.value*t}}},a=function(t){return{type:"amount",value:t}},u=[{low:100,high:5550,intra:o(1),inter:o(3),withdrawal:o(3)},{low:5551,high:10050,intra:a(50),inter:o(3),withdrawal:a(170)},{low:10051,high:13550,intra:a(100),inter:o(3),withdrawal:a(300)},{low:13551,high:25050,intra:a(100),inter:o(3),withdrawal:a(350)},{low:25051,high:50050,intra:a(100),inter:o(3),withdrawal:a(700)},{low:50051,high:75100,intra:a(250),inter:o(3),withdrawal:a(1350)},{low:75101,high:100100,intra:a(250),inter:o(3),withdrawal:a(1700)},{low:100101,high:200500,intra:a(250),inter:a(3100),withdrawal:a(2150)},{low:200501,high:300500,intra:a(250),inter:a(3500),withdrawal:a(2500)},{low:300501,high:400500,intra:a(250),inter:a(3500),withdrawal:a(2600)},{low:400501,high:5e5,intra:a(500),inter:a(4e3),withdrawal:a(2750)},{low:400501,high:5e5,intra:a(500),inter:a(4e3),withdrawal:a(2750)},{low:500001,high:1e6,intra:a(500),inter:{type:"unknown",value:null},withdrawal:{type:"unknown",value:null}}],c=[{low:50,high:6500,intra:o(1),inter:o(4),withdrawal:o(3)},{low:6501,high:1e4,intra:a(50),inter:a(250),withdrawal:a(180)},{low:10001,high:13500,intra:a(100),inter:a(400),withdrawal:a(300)},{low:13501,high:25e3,intra:a(150),inter:a(525),withdrawal:a(350)},{low:25001,high:5e4,intra:a(150),inter:a(900),withdrawal:a(700)},{low:50001,high:8e4,intra:a(200),inter:a(1700),withdrawal:a(1350)},{low:80001,high:1e5,intra:a(200),inter:a(2300),withdrawal:a(1800)},{low:100001,high:2e5,intra:a(300),inter:a(2700),withdrawal:a(2150)},{low:200001,high:3e5,intra:a(300),inter:a(3100),withdrawal:a(2600)},{low:300001,high:4e5,intra:a(300),inter:a(3600),withdrawal:a(3100)},{low:400001,high:5e5,intra:a(500),inter:a(4e3),withdrawal:a(3600)},{low:500001,high:1e6,intra:a(500),inter:{type:"unknown",value:null},withdrawal:{type:"unknown",value:null}}],s=[{low:1,high:3e3,intra:a(0),inter:a(150),withdrawal:a(100)},{low:3001,high:1e4,intra:a(0),inter:a(150),withdrawal:a(150)},{low:10001,high:15e3,intra:a(0),inter:a(400),withdrawal:a(350)},{low:15001,high:2e4,intra:a(0),inter:a(500),withdrawal:a(350)},{low:20001,high:25e3,intra:a(0),inter:a(500),withdrawal:a(350)},{low:25001,high:5e4,intra:a(0),inter:a(900),withdrawal:a(650)},{low:50001,high:8e4,intra:a(0),inter:a(1400),withdrawal:a(1350)},{low:80001,high:1e5,intra:a(0),inter:a(1900),withdrawal:a(1650)},{low:100001,high:2e5,intra:a(0),inter:a(2200),withdrawal:a(2100)},{low:200001,high:3e5,intra:a(0),inter:a(2300),withdrawal:a(2300)},{low:300001,high:4e5,intra:a(0),inter:a(2400),withdrawal:a(2400)},{low:400001,high:5e5,intra:a(0),inter:a(2500),withdrawal:a(2500)},{low:500001,high:6e5,intra:a(0),inter:a(4e3),withdrawal:a(4e3)},{low:600001,high:7e5,intra:a(0),inter:a(4200),withdrawal:a(4200)},{low:700001,high:8e5,intra:a(0),inter:a(4400),withdrawal:a(4400)},{low:800001,high:9e5,intra:a(0),inter:a(4700),withdrawal:a(4700)},{low:900001,high:1e6,intra:a(0),inter:a(5e3),withdrawal:a(5e3)}],l=e("mrSG"),d=e("FFOo"),f=function(){function t(t,n){this.predicate=t,this.inclusive=n}return t.prototype.call=function(t,n){return n.subscribe(new h(t,this.predicate,this.inclusive))},t}(),h=function(t){function n(n,e,r){var i=t.call(this,n)||this;return i.predicate=e,i.inclusive=r,i.index=0,i}return l.d(n,t),n.prototype._next=function(t){var n,e=this.destination;try{n=this.predicate(t,this.index++)}catch(r){return void e.error(r)}this.nextOrComplete(t,n)},n.prototype.nextOrComplete=function(t,n){var e=this.destination;Boolean(n)?e.next(t):(this.inclusive&&e.next(t),e.complete())},n}(d.a);e("YFsJ"),e.d(n,"a",function(){return p});var p=function(){function t(t,n){this.fb=t,this.analyticsService=n,this.submitted=!1,this.showMessages={},this.errors=[],this.messages=[],this.alive=!0,this.providers=i.b.map(function(t){return"mtn"===t.value&&(t.selected=!0),t}),this.mtnTariffs=u,this.orangeTariffs=c,this.expressUnionTariffs=s,this.validationMessages={provider:[{type:"required",message:"Provider is required."}],amount:[{type:"required",message:"Amount is required."},{type:"min",message:"Mobile Money transfers have a current lower limit of 100."},{type:"max",message:"Mobile Money transfers have a current upper limit of 1,000,000."}]}}return Object.defineProperty(t.prototype,"activeTariff",{get:function(){return this._activeTariff},set:function(t){this._activeTariff=t},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t,n,e=this;this.initForm(),this.form.valueChanges.pipe((t=function(t){return e.alive},void 0===n&&(n=!1),function(e){return e.lift(new f(t,n))})).subscribe(function(t){return e.setTariff(t)})},t.prototype.initForm=function(){this.form=this.fb.group({provider:[this.providers.find(function(t){return t.selected}).value,[r.k.required]],amount:["",[r.k.required,r.k.min(100),r.k.max(1e6)]],compareCharges:[!1]})},Object.defineProperty(t.prototype,"provider",{get:function(){return this.form.get("provider")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"amount",{get:function(){return this.form.get("amount")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"compareCharges",{get:function(){return this.form.get("compareCharges")},enumerable:!0,configurable:!0}),t.prototype.setTariff=function(t){if(this.form.valid)switch(this.resetActiveTariff(),t.provider){case i.a.MTN:this.activeTariff=this.getTariffForAmount(t.amount,u);break;case i.a.ORANGE:this.activeTariff=this.getTariffForAmount(t.amount,c);break;case i.a.EU:this.activeTariff=this.getTariffForAmount(t.amount,s)}},t.prototype.sendChargeCalculatedEvent=function(t){this.analyticsService.eventEmitter("chargesPage","chargeCalculated","Provider: "+t.provider+", Amount: "+t.amount+", Tariff Range: "+t.activeTariff.low+" - "+t.activeTariff.high,1)},t.prototype.tariffsForOperator=function(t){switch(t){case i.a.EU:return this.expressUnionTariffs;case i.a.MTN:return this.mtnTariffs;case i.a.ORANGE:return this.orangeTariffs}},t.prototype.getTariffForAmount=function(t,n){return n.find(function(n){return t>=n.low&&t<=n.high})},t.prototype.resetActiveTariff=function(){this.activeTariff=null},t}()},ySCp:function(t,n,e){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return r})}}]);