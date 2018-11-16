// ClipboardJS
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});
// SmallTalk
let smalltalk=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(d,e,f){b.o(d,e)||Object.defineProperty(d,e,{enumerable:!0,get:f})},b.r=function(d){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},b.t=function(d,e){if(1&e&&(d=b(d)),8&e)return d;if(4&e&&"object"==typeof d&&d&&d.__esModule)return d;var f=Object.create(null);if(b.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:d}),2&e&&"string"!=typeof d)for(var g in d)b.d(f,g,function(h){return d[h]}.bind(null,g));return f},b.n=function(d){var e=d&&d.__esModule?function(){return d.default}:function(){return d};return b.d(e,"a",e),e},b.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)},b.p="",b(b.s=8)}([function(a,b,c){var d=c(1);"string"==typeof d&&(d=[[a.i,d,""]]),c(6)(d,{hmr:!0,transform:void 0,insertInto:void 0}),d.locals&&(a.exports=d.locals)},function(a,b,c){var d=c(2);(a.exports=c(3)(!1)).push([a.i,".smalltalk{display:flex;align-items:center;flex-direction:column;justify-content:center;transition:.2s opacity;bottom:0;left:0;overflow:auto;padding:20px;position:fixed;right:0;top:0;z-index:100}.smalltalk+.smalltalk{transition:ease 1s;display:none}.smalltalk .page{border-radius:3px;background:#fff;box-shadow:0 4px 23px 5px rgba(0,0,0,.2),0 2px 6px rgba(0,0,0,.15);color:#333;min-width:400px;padding:0;position:relative;z-index:0}@media only screen and (max-width:500px){.smalltalk .page{min-width:0}}.smalltalk .page>.close-button{background-image:url("+d(c(4))+");background-position:center;background-repeat:no-repeat;height:14px;position:absolute;right:7px;top:7px;width:14px;z-index:1}.smalltalk .page>.close-button:hover{background-image:url("+d(c(5))+")}.smalltalk .page header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:500px;user-select:none;color:#333;font-size:120%;font-weight:700;margin:0;padding:14px 17px;text-shadow:#fff 0 1px 2px}.smalltalk .page .content-area{overflow:hidden;text-overflow:ellipsis;padding:6px 17px;position:relative}.smalltalk .page .action-area{padding:14px 17px}button{font-family:Ubuntu,Arial,sans-serif}.smalltalk .smalltalk,.smalltalk button{min-height:2em;min-width:4em}.smalltalk button{appearance:none;user-select:none;background-image:linear-gradient(#ededed,#ededed 38%,#dedede);border:1px solid rgba(0,0,0,.25);border-radius:2px;box-shadow:0 1px 0 rgba(0,0,0,.08),inset 0 1px 2px rgba(255,255,255,.75);color:#444;font:inherit;margin:0 1px 0 0;text-shadow:0 1px 0 #f0f0f0}.smalltalk button::-moz-focus-inner{border:0}.smalltalk button:enabled:active{background-image:linear-gradient(#e7e7e7,#e7e7e7 38%,#d7d7d7);box-shadow:none;text-shadow:none}.smalltalk .page .button-strip{display:flex;flex-direction:row;justify-content:flex-end}.smalltalk .page .button-strip>button{margin-left:10px}.smalltalk input{width:100%;border:1px solid #bfbfbf;border-radius:2px;box-sizing:border-box;color:#444;font:inherit;margin:0;min-height:2em;padding:3px;outline:0}.smalltalk button:enabled:focus,.smalltalk input:enabled:focus{transition:border-color .2s;border-color:#4d90fe;outline:0}",""])},function(a){a.exports=function(b){return"string"==typeof b?(/^['"].*['"]$/.test(b)&&(b=b.slice(1,-1)),/["'() \t\n]/.test(b)?"\""+b.replace(/"/g,"\\\"").replace(/\n/g,"\\n")+"\"":b):b}},function(a){a.exports=function(b){var c=[];return c.toString=function(){return this.map(function(d){var e=function(f,g){var h=f[1]||"",i=f[3];if(!i)return h;if(g&&"function"==typeof btoa){var l=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(i),m=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[h].concat(m).concat([l]).join("\n")}return[h].join("\n")}(d,b);return d[2]?"@media "+d[2]+"{"+e+"}":e}).join("")},c.i=function(d,e){"string"==typeof d&&(d=[[null,d,""]]);for(var f,g={},h=0;h<this.length;h++)f=this[h][0],"number"==typeof f&&(g[f]=!0);for(h=0;h<d.length;h++){var i=d[h];"number"==typeof i[0]&&g[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),c.push(i))}},c}},function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAUklEQVR4XqXPYQrAIAhAYW/gXd8NJxTopVqsGEhtf+L9/ERU2k/HSMFQpKcYJeNFI9Be0LCMij8cYyjj5EHIivGBkwLfrbX3IF8PqumVmnDpEG+eDsKibPG2JwAAAABJRU5ErkJggg=="},function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAnUlEQVR4XoWQQQ6CQAxFewjkJkMCyXgJPMk7AiYczyBeZEAX6AKctGIaN+bt+trk9wtGQc/IkhnoKGxqqiWxOSZalapWFZ6VrIUDExsN0a5JRBq9LoVOR0eEQMoEhKizXhhsn0p1sCWVo7CwOf1RytPL8CPvwuBUoHL6ugeK30CVD1TqK7V/hdpe+VNChhOzV8xWny/+xosHF8578W/Hmc1OOC3wmwAAAABJRU5ErkJggg=="},function(a,b,c){function d(_,aa){for(var ba=0;ba<_.length;ba++){var ca=_[ba],da=n[ca.id];if(da){da.refs++;for(var ea=0;ea<da.parts.length;ea++)da.parts[ea](ca.parts[ea]);for(;ea<ca.parts.length;ea++)da.parts.push(l(ca.parts[ea],aa))}else{var fa=[];for(ea=0;ea<ca.parts.length;ea++)fa.push(l(ca.parts[ea],aa));n[ca.id]={id:ca.id,refs:1,parts:fa}}}}function e(_,aa){for(var ba=[],ca={},da=0;da<_.length;da++){var ea=_[da],fa=aa.base?ea[0]+aa.base:ea[0],ga={css:ea[1],media:ea[2],sourceMap:ea[3]};ca[fa]?ca[fa].parts.push(ga):ba.push(ca[fa]={id:fa,parts:[ga]})}return ba}function f(_,aa){var ba=p(_.insertInto);if(!ba)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var ca=t[t.length-1];if("top"===_.insertAt)ca?ca.nextSibling?ba.insertBefore(aa,ca.nextSibling):ba.appendChild(aa):ba.insertBefore(aa,ba.firstChild),t.push(aa);else if("bottom"===_.insertAt)ba.appendChild(aa);else{if("object"!=typeof _.insertAt||!_.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var da=p(_.insertAt.before,ba);ba.insertBefore(aa,da)}}function g(_){if(null===_.parentNode)return!1;_.parentNode.removeChild(_);var aa=t.indexOf(_);0<=aa&&t.splice(aa,1)}function h(_){var aa=document.createElement("style");if(void 0===_.attrs.type&&(_.attrs.type="text/css"),void 0===_.attrs.nonce){var ba=function(){return 0,c.nc}();ba&&(_.attrs.nonce=ba)}return i(aa,_.attrs),f(_,aa),aa}function i(_,aa){Object.keys(aa).forEach(function(ba){_.setAttribute(ba,aa[ba])})}function l(_,aa){var ba,ca,da,ea;if(aa.transform&&_.css){if(!(ea="function"==typeof aa.transform?aa.transform(_.css):aa.transform.default(_.css)))return function(){};_.css=ea}if(aa.singleton){var fa=s++;ba=r||(r=h(aa)),ca=m.bind(null,ba,fa,!1),da=m.bind(null,ba,fa,!0)}else _.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(ba=function(ga){var ha=document.createElement("link");return void 0===ga.attrs.type&&(ga.attrs.type="text/css"),ga.attrs.rel="stylesheet",i(ha,ga.attrs),f(ga,ha),ha}(aa),ca=function(ga,ha,ia){var ja=ia.css,ka=ia.sourceMap,la=void 0===ha.convertToAbsoluteUrls&&ka;(ha.convertToAbsoluteUrls||la)&&(ja=u(ja)),ka&&(ja+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(ka))))+" */");var ma=new Blob([ja],{type:"text/css"}),na=ga.href;ga.href=URL.createObjectURL(ma),na&&URL.revokeObjectURL(na)}.bind(null,ba,aa),da=function(){g(ba),ba.href&&URL.revokeObjectURL(ba.href)}):(ba=h(aa),ca=function(ga,ha){var ia=ha.css,ja=ha.media;if(ja&&ga.setAttribute("media",ja),ga.styleSheet)ga.styleSheet.cssText=ia;else{for(;ga.firstChild;)ga.removeChild(ga.firstChild);ga.appendChild(document.createTextNode(ia))}}.bind(null,ba),da=function(){g(ba)});return ca(_),function(ga){if(ga){if(ga.css===_.css&&ga.media===_.media&&ga.sourceMap===_.sourceMap)return;ca(_=ga)}else da()}}function m(_,aa,ba,ca){var da=ba?"":ca.css;if(_.styleSheet)_.styleSheet.cssText=v(aa,da);else{var ea=document.createTextNode(da),fa=_.childNodes;fa[aa]&&_.removeChild(fa[aa]),fa.length?_.insertBefore(ea,fa[aa]):_.appendChild(ea)}}var n={},o=function(_){var aa;return function(){return void 0==aa&&(aa=_.apply(this,arguments)),aa}}(function(){return window&&document&&document.all&&!window.atob}),p=function(){var _={};return function(aa,ba){if("function"==typeof aa)return aa();if(void 0===_[aa]){var ca=function(da,ea){return ea?ea.querySelector(da):document.querySelector(da)}.call(this,aa,ba);if(window.HTMLIFrameElement&&ca instanceof window.HTMLIFrameElement)try{ca=ca.contentDocument.head}catch(da){ca=null}_[aa]=ca}return _[aa]}}(),r=null,s=0,t=[],u=c(7);a.exports=function(_,aa){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(aa=aa||{}).attrs="object"==typeof aa.attrs?aa.attrs:{},aa.singleton||"boolean"==typeof aa.singleton||(aa.singleton=o()),aa.insertInto||(aa.insertInto="head"),aa.insertAt||(aa.insertAt="bottom");var ba=e(_,aa);return d(ba,aa),function(ca){for(var da,ea=[],fa=0;fa<ba.length;fa++)da=ba[fa],(ga=n[da.id]).refs--,ea.push(ga);for(ca&&d(e(ca,aa),aa),fa=0;fa<ea.length;fa++){var ga;if(0===(ga=ea[fa]).refs){for(var ha=0;ha<ga.parts.length;ha++)ga.parts[ha]();delete n[ga.id]}}}};var v=function(){var _=[];return function(aa,ba){return _[aa]=ba,_.filter(Boolean).join("\n")}}()},function(a){a.exports=function(b){var c="undefined"!=typeof window&&window.location;if(!c)throw new Error("fixUrls requires window.location");if(!b||"string"!=typeof b)return b;var d=c.protocol+"//"+c.host,e=d+c.pathname.replace(/\/[^\/]*$/,"/");return b.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(f,g){var h,i=g.trim().replace(/^"(.*)"$/,function(l,m){return m}).replace(/^'(.*)'$/,function(l,m){return m});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?f:(h=0===i.indexOf("//")?i:0===i.indexOf("/")?d+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(h)+")")})}},function(a,b,c){"use strict";function d(){var v=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).buttons;return v||null}function e(v,_,aa,ba){var ca=_.replace(/\n/g,"<br>");return"<div class=\"page\">\n        <div data-name=\"js-close\" class=\"close-button\"></div>\n        <header>".concat(v,"</header>\n        <div class=\"content-area\">").concat(ca).concat(aa,"</div>\n        <div class=\"action-area\">\n            <div class=\"button-strip\">\n                ").concat(function(da){var ea=Object.keys(da),fa=m(function(ga,ha,ia){return"<button\n            tabindex=".concat(ia,"\n            data-name=\"js-").concat(ha.toLowerCase(),"\">\n            ").concat(ga[ha],"\n        </button>")});return ea.map(fa(da)).join("")}(ba),"\n            </div>\n        </div>\n    </div>")}function f(v,_,aa,ba,ca){var da=n(),ea=n(),fa=new Promise(function(ia,ja){var ka=ca&&!1===ca.cancel;da(ia),ea(ka?function(){}:ja)}),ga=e(v,_,aa,ba),ha=o("div",{innerHTML:ga,className:"smalltalk"});return l(ha,["ok","input"]).forEach(function(ia){return ia.focus()}),l(ha,["input"]).forEach(function(ia){ia.setSelectionRange(0,aa.length)}),function(ia,ja,ka,la){l(ja,ka).forEach(function(ma){return ma.addEventListener(ia,la)})}("click",ha,["cancel","close","ok"],function(ia){i(ia.target,ha,da(),ea())}),["click","contextmenu"].forEach(function(ia){return ha.addEventListener(ia,function(){return l(ha,["ok","input"]).forEach(function(ja){return ja.focus()})})}),ha.addEventListener("keydown",p(ha,da(),ea())),fa}function g(v){return v.getAttribute("data-name").replace("js-","")}function h(v,_){var aa=g(document.activeElement),ba=_.length-1,ca=_.indexOf(aa);l(v,[_[u(ba,ca)]]).forEach(function(da){return da.focus()})}function i(v,_,aa,ba){var ca=v.getAttribute("data-name").replace("js-","");return /close|cancel/.test(ca)?(ba(),void r()):void(aa(l(_,["input"]).reduce(function(da,ea){return ea.value},null)),r())}function l(v,_){return _.map(function(aa){return v.querySelector("[data-name=\"js-".concat(aa,"\"]"))}).filter(function(aa){return aa})}c(0);var m=c(9),n=c(11),o=c(13),p=m(function(v,_,aa,ba){var ca={ENTER:13,ESC:27,TAB:9,LEFT:37,UP:38,RIGHT:39,DOWN:40},da=ba.keyCode,ea=ba.target,fa=l(v,["ok","cancel","input"]).map(g);da===ca.ENTER?(i(ea,v,_,aa),ba.preventDefault()):da===ca.ESC?(r(),aa()):da===ca.TAB?(ba.shiftKey&&h(v,fa),h(v,fa),ba.preventDefault()):["left","right","up","down"].filter(function(ga){return da===ca[ga.toUpperCase()]}).forEach(function(){!function(ga,ha){var ia=g(document.activeElement),ja=/ok|cancel/.test(ia),ka=ha.length-1;if("input"!==ia&&ka&&ja){var la=function(ma){return"cancel"===ma?"ok":"cancel"}(ia);l(ga,[la]).forEach(function(ma){ma.focus()})}}(v,fa)}),ba.stopPropagation()}),r=function(v){for(var _=arguments.length,aa=Array(1<_?_-1:0),ba=1;ba<_;ba++)aa[ba-1]=arguments[ba];return function(){return v.apply(void 0,aa)}}(function(v){var _=document.querySelector(v);_.parentElement.removeChild(_)},".smalltalk"),s={ok:"OK"},t={ok:"OK",cancel:"Cancelar"};b.alert=function(v,_,aa){return f(v,_,"",d(aa)||s,aa)},b.prompt=function(v,_){var aa=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",ba=3<arguments.length?arguments[3]:void 0,ca=function(){return"password"===(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type?"password":"text"}(ba),da=(aa+"").replace(/"/g,"&quot;");return f(v,_,"<input type=\"".concat(ca,"\" value=\"").concat(da,"\" data-name=\"js-input\">"),d(ba)||t,ba)},b.confirm=function(v,_,aa){return f(v,_,"",d(aa)||t,aa)};var u=function(v,_){return _===v?0:_+1}},function(a,b,c){a.exports=c(10)},function(a){"use strict";a.exports=function b(c){for(var d=arguments.length,e=Array(1<d?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];if(function(i){if("function"!=typeof i)throw Error("fn should be function!")}(c),e.length>=c.length)return c.apply(void 0,e);var g=function(){for(var i=arguments.length,l=Array(i),m=0;m<i;m++)l[m]=arguments[m];return b.apply(void 0,[c].concat(e.concat(l)))},h=c.length-e.length-1;return function(i){return[function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)}]}(g)[h]||g}},function(a,b,c){a.exports=c(12)},function(a){"use strict";a.exports=function(b){var c={value:b};return function(d){return arguments.length?(c.value=d,d):c.value}}},function(a,b,c){"use strict";function d(n,o){if(null==n)return{};var p,r,s=function(u,v){if(null==u)return{};var _,aa,ba={},ca=Object.keys(u);for(aa=0;aa<ca.length;aa++)_=ca[aa],0<=v.indexOf(_)||(ba[_]=u[_]);return ba}(n,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(r=0;r<t.length;r++)p=t[r],0<=o.indexOf(p)||Object.prototype.propertyIsEnumerable.call(n,p)&&(s[p]=n[p])}return s}function e(n){if(n)return g(n)}var f=c(14),g=function(n){return document.querySelector("[data-name=\"".concat(n,"\"]"))},h=f(function(n,o,p){return n.setAttribute(p,o[p])}),i=f(function(n,o,p){return n[p]=o[p]}),l=f(function(n,o){return!n(o)}),m=function(n){return n!=n.toLowerCase()};a.exports=function(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},p=o.dataName,r=o.notAppend,s=o.parent,t=void 0===s?document.body:s,u=o.uniq,v=d(o,["dataName","notAppend","parent","uniq"]),_=e(p);if((void 0===u||u)&&_)return _;var aa=document.createElement(n);return p&&(aa.dataset.name=p),Object.keys(v).filter(m).map(i(aa,o)),Object.keys(v).filter(l(m)).map(h(aa,o)),r||t.appendChild(aa),aa},a.exports.isElementPresent=e},function(a,b,c){a.exports=c(15)},function(a){"use strict";a.exports=function b(c){for(var d=arguments.length,e=Array(1<d?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];if(function(i){if("function"!=typeof i)throw Error("fn should be function!")}(c),e.length>=c.length)return c.apply(void 0,e);var g=function(){return b.apply(void 0,[c].concat(e,Array.prototype.slice.call(arguments)))},h=c.length-e.length-1;return function(i){return[function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)},function(){return i.apply(void 0,arguments)}]}(g)[h]||g}}]);


let currentDeck = [0, 0, 0, 0, 0, 0, 0, 0],
	contentToCopy,
	selectedContainer = 0,
	btn, img;

const cardsName = [
		'none-card',
		'witch', 'skeleton-army', 'baby-dragon', 'prince', 'giant', 'musketeer', 'mini-pekka', 'fireball', 'knight', 'archers', 'minions', 'arrows',
		'hunter', 'goblin-barrel', 'hog-rider', 'goblin-hut', 'goblins', 'spear-goblins',
		'balloon', 'giant-skeleton', 'valkyrie', 'tombstone', 'skeletons', 'bomber',
		'golem', 'barbarian-barrel', 'battle-ram', 'barbarian-hut', 'barbarians', 'cannon',
		'lava-hound', 'miner', 'pekka', 'lightning', 'mega-minion', 'inferno-tower', 'minion-horde', 'zap',
		'night-witch', 'graveyard', 'freeze', 'poison', 'wizard', 'furnace', 'fire-spirits', 'bats',
		'inferno-dragon', 'the-log', 'cannon-cart', 'x-bow', 'flying-machine', 'rocket', 'skeleton-barrel', 'mortar',
		'princess', 'royal-ghost', 'guards', 'dark-prince', 'three-musketeers', 'heal', 'royal-giant', 'royal-recruits',
		'ice-wizard', 'lumberjack', 'bowler', 'tornado', 'ice-golem', 'elixir-collector', 'ice-spirit', 'giant-snowball',
		'bandit', 'executioner', 'goblin-giant', 'dart-goblin', 'goblin-gang', 'rascals',
		'mega-knight', 'magic-archer', 'rage', 'royal-hogs', 'bomb-tower', 'elite-barbarians',
		'sparky', 'electro-wizard', 'electro-dragon', 'mirror', 'clone', 'zappies', 'tesla'
	],
	cardsInformation = [
		'None card selected',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Spell',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Spell',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Construction',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Spell',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Spell',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Spell',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Construction',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Spell',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Construction',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Spell',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Spell',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Rare<br />Type: Construction',
		'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Epic<br />Type: Spell',
		'Rarity: Rare<br />Type: Troop',
		'Rarity: Common<br />Type: Construction'
	],
	cardsElixir = [
		0,
		5, 3, 4, 5, 5, 4, 4, 4, 3, 3, 3, 3,
		4, 3, 4, 5, 2, 2,
		5, 6, 4, 3, 1, 3,
		8, 2, 4, 7, 5, 3,
		7, 3, 7, 6, 3, 5, 5, 2,
		4, 5, 4, 4, 5, 4, 2, 2,
		4, 2, 5, 6, 4, 6, 3, 4,
		3, 3, 3, 4, 9, 3, 6, 8,
		3, 4, 5, 3, 2, 6, 1, 2,
		3, 5, 6, 3, 3, 5,
		7, 4, 2, 5, 4, 6,
		6, 4, 5, 1.6, 3, 4, 4
	],
	cardsCode = [
		0,
		26000007, 26000012, 26000015, 26000016, 26000003, 26000014, 26000018, 28000000, 26000000, 26000001, 26000005, 28000001,
		26000044, 28000004, 26000021, 27000001, 26000002, 26000019,
		26000006, 26000020, 26000011, 27000009, 26000010, 26000013,
		26000009, 28000015, 26000036, 27000005, 26000008, 27000000,
		26000029, 26000032, 26000004, 28000007, 26000039, 27000003, 26000022, 28000008,
		26000048, 28000010, 28000005, 28000009, 26000017, 27000010, 26000031, 26000049,
		26000037, 28000011, 26000054, 27000008, 26000057, 28000003, 26000056, 27000002,
		26000026, 26000050, 26000025, 26000027, 26000028, 28000016, 26000024, 26000047,
		26000023, 26000035, 26000034, 28000012, 26000038, 27000007, 26000030, 28000017,
		26000046, 26000045, 26000060, 26000040, 26000041, 26000053,
		26000055, 26000062, 28000002, 26000059, 27000004, 26000043,
		26000033, 26000042, 26000063, 28000006, 28000013, 26000052, 27000006
	],
	cardPtName = ["", "Bruxa", "Exército de Esqueletos", "Bebê Dragão", "Príncipe", "Gigante", "Mosqueteira", "Mini P.E.K.K.A", "Bola de Fogo", "Cavaleiro", "Arqueiras", "Servos", "Flechas", "Caçador", "Barril de Goblins", "Corredor", "Cabana de Goblins", "Goblins", "Goblins Lanceiros", "Balão", "Esqueleto Gigante", "Valquíria", "Lápide", "Esqueletos", "Bombardeiro", "Golem", "Barril de Bárbaro", "Ariete de Batalha", "Cabana de Bárbaros", "Bárbaros", "Canhão", "Lava Hound", "Mineiro", "P.E.K.K.A", "Relâmpago", "Megasservo", "Torre Inferno", "Horda de Servos", "Zap", "Bruxa Sombria", "Cemitério", "Gelo", "Veneno", "Mago", "Fornalha", "Espíritos de Fogo", "Morcegos", "Dragão Infernal", "Tronco", "Carrinho de Canhão", "X-Besta", "Máquina Voadora", "Foguete", "Barril de Esqueletos", "Morteiro", "Princesa", "Fantasma Real", "Guardas", "Príncipe das Trevas", "Três Mosqueteiras", "Cura", "Gigante Real", "Recrutas Reais", "Mago de Gelo", "Lenhador", "Lançador", "Tornado", "Golem de Gelo", "Coletor de Elixir", "Espírito de Gelo", "Bola de Neve", "Bandida", "Executor", "Goblin Gigante", "Goblin com Dardo", "Gangue de Goblins", "Patifes", "Megacavaleiro", "Arqueiro Mágico", "Fúria", "Porcos Reais", "Torre de Bombas", "Bárbaros de Elite", "Sparky", "Mago Elétrico", "Dragão Elétrico", "Espelho", "Clone", "Eletrocutadores", "Tesla"],
	defesa = ['Gigante', 'Golem', 'Gigante Real', 'Goblin Gigante'],
	towerAttack = ['Corredor', 'Ariete de Batalha', 'Gigante Real', 'Porcos Reais'],
	mainAttack = ['Bárbaros de Elite', 'Gigante Real', 'P.E.K.K.A'],
	C = ['Lápide', 'Canhão'],
	CV3 = ['Cabana de Bárbaros', 'Cabana de Goblins', 'Fornalha'],
	CA = ['Sparky', 'Esqueleto Gigante', 'Megacavaleiro'],
	Si = ['Morteiro', 'X-Besta'],
	F = ['Flechas', 'Bola de Fogo', 'Veneno', 'Bola de Neve'],
	FV2 = ['Relâmpago', 'Foguete'],
	FV3 = ['Zap', 'Tronco'],
	FV4 = ['Fúria', 'Tornado'],
	Surp = ['Mineiro', 'Barril de Goblins'],
	Ciclar = ['Esqueletos', 'Goblins', 'Goblins Lanceiros', 'Espírito de Gelo', 'Espíritos de Fogo', 'Morcegos', 'Golem de Gelo'],
	Sup = ['Bruxa', 'Príncipe', 'Megacavaleiro', 'Mosqueteira', 'Três Mosqueteiras', 'Bruxa Sombria', 'Lançador', 'Caçador', 'Executor', 'Carrinho de Canhão', 'Patifes'],
	SV2 = ['Bebê Dragão', 'Mini P.E.K.K.A', 'Valquíria', 'Dragão Infernal', 'Mago Elétrico', 'Príncipe das Trevas', 'Lenhador', 'Eletrocutadores', 'Máquina Voadora'],
	SV3 = ['Fantasma Real', 'Arqueiro Mágico', 'Bandida', 'Princesa', 'Mago de Gelo', 'Barril de Esqueletos', 'Exército de Esqueletos', 'Cavaleiro', 'Gangue de Goblins', 'Guardas', 'Arqueiras'],
	M = ['Servos', 'Horda de Servos', 'Megasservo'],
	tipos = [
		'Três Mosqueteiras|Patifes|Mineiro|SV3|SV3|Ciclar|FV3|Coletor de Elixir',
		'Patifes|P.E.K.K.A|Mineiro|Veneno|Ciclar|FV3|SV3|SV3',
		'Patifes|Cabana de Goblins|Cemitério|Veneno|Ciclar|M|FV3|SV3',
		'Patifes|Príncipe|Barril de Goblins|SV3|SV3|F|FV3|Ciclar',
		'Patifes|Lava Hound|Balão|M|F|FV3|M|C',
		'Patifes|Mineiro|Barril de Goblins|M|SV3|FV3|SV2|SV3',
		'Três Mosqueteiras|Corredor|Fantasma Real|Ciclar|SV2|M|FV3|C',
		'Golem|Príncipe|Arqueiro Mágico|M|SV3|Ciclar|F|FV3',
		'Gigante|Arqueiro Mágico|Príncipe|M|SV3|F|SV3|FV3',
		'Arqueiro Mágico|Mineiro|Balão|Ciclar|Ciclar|FV4|FV3|SV3',
		'Megacavaleiro|Barril de Esqueletos|Ciclar|SV3|SV2|Surp|F|FV3',
		'Megacavaleiro|Balão|Mineiro|Ciclar|Ciclar|M|M|FV3',
		'Megacavaleiro|Máquina Voadora|Cemitério|Veneno|Ciclar|Ciclar|FV3|SV2',
		'Megacavaleiro|Gigante|F|M|SV3|SV2|FV3|Coletor de Elixir',
		'Mineiro|Caçador|Príncipe|Príncipe das Trevas|Ciclar|Ciclar|F|FV3',
		'Mineiro|Caçador|Ciclar|Ciclar|Ciclar|FV3|SV3|F',
		'Si|Caçador|Ciclar|SV3|FV3|Ciclar|M|F',
		'Golem|Caçador|Bruxa Sombria|Ciclar|FV4|F|FV3|SV3',
		'Golem|Eletrocutadores|Bruxa Sombria|FV3|F|FV3|M|Ciclar',
		'Mineiro|F|Caçador|Eletrocutadores|SV3|FV3|Surp|SV2',
		'Gangue de Goblins|Eletrocutadores|SV3|SV3|FV3|FV2|FV4|SV3',
		'Três Mosqueteiras|Eletrocutadores|Mago de Gelo|Ciclar|FV4|SV2|FV3|Coletor de Elixir',
		'D|S|SV2|SV3|Ciclar|Ciclar|FV3|F',
		'Si|Ciclar|Ciclar|SV3|SV2|FV2|FV3|M',
		'Ciclar|AP|FV3|F|S|SV3|FV3|Surp',
		'Ariete de Batalha|Golem de Gelo|SV2|SV3|F|FV3|Ciclar|Surp',
		'Corredor|Megacavaleiro|Golem de Gelo|SV2|Ciclar|Ciclar|FV3|F',
		'Torre Inferno|SV3|SV3|Ciclar|SV3|FV2|Surp|FV3',
		'Megacavaleiro|Ciclar|Surp|SV3|SV2|Ciclar|SV3|FV3',
		'D|Servos|S|SV2|Ciclar|FV3|F|FV3',
		'P.E.K.K.A|Príncipe|Príncipe das Trevas|Tornado|Ciclar|FV3|F|SV3',
		'Sparky|D|SV2|SV3|Ciclar|F|FV3|Surp',
		'Lava Hound|Balão|M|M|SV3|Lápide|F|FV3',
		'SV3|SV3|Ciclar|Corredor|Ciclar|C|F|FV3',
		'SV3|SV3|Ciclar|Ciclar|Si|Flechas|FV2|FV3',
		'SV3|SV2|Ciclar|SV3|Megacavaleiro|SV3|Cabana de Goblins|FV3',
		'AT|S|SV3|Ciclar|F|FV3|Ciclar|M',
		'D|Coletor de Elixir|SV2|SV2|SV3|S|FV3|Tornado',
		'Corredor|Gelo|S|SV2|SV3|Ciclar|F|FV3',
		'Balão|FV4|Surp|SV2|SV2|FV3|Ciclar|Ciclar',
		'FV3|D|M|F|SV2|S|Ciclar|SV3',
		'C|SV2|SV3|Surp|Ciclar|F|FV3|AP',
		'D|Sparky|Tornado|SV2|SV3|FV3|Ciclar|FV3',
		'Golem de Gelo|Cemitério|F|FV3|M|Lápide|SV3|FV3',
		'Megacavaleiro|Mineiro|SV2|Ciclar|SV3|Ciclar|SV3|FV3',
		'Fantasma Real|Megacavaleiro|SV3|SV2|SV3|Surp|SV3|FV3',
		'Três Mosqueteiras|Coletor de Elixir|SV3|Ciclar|S|FV3|Surp|SV2',
		'Três Mosqueteiras|Coletor de Elixir|SV3|Ciclar|S|FV3|Surp|P.E.K.K.A',
		'CA|Surp|FV3|FV3|FV2|Ciclar|S|SV3',
		'Corredor|Dragão Infernal|FV2|FV3|FV4|Ciclar|SV2|Ciclar',
		'Gigante|F|SV2|Ciclar|S|FV3|C|Ciclar',
		'Ariete de Batalha|F|FV3|Ciclar|SV2|SV3|SV3|SV2',
		'Balão|Mineiro|FV3|SV2|F|Ciclar|M|Lápide',
		'Si|Ciclar|Ciclar|FV3|FV3|M|SV3|Corredor',
		'Mineiro|Horda de Servos|FV3|F|SV3|SV3|Surp|Torre Inferno',
		'Cabana de Goblins|Surp|SV3|F|SV2|M|FV3|Cemitério',
		'Si|FV3|M|Surp|Ciclar|Ciclar|SV3|SV3'
	],
	allowedCards = [],
	prevDeck = [],
	cards = document.querySelectorAll('.cardsContainer img'),
	info = document.querySelector('.infoContainer h2'),
	dbSection = document.querySelector('.builderSection'),
	aboutSection = document.querySelector('.aboutSection'),
	savedSection = document.querySelector('.savedSection'),
	savedDecks = document.querySelector('.savedSection section'),
	selectSection = document.querySelector('.selectSection'),
	configSection = document.querySelector('.configSection'),
	bestSection = document.querySelector('.bestSection'),
	playerSection = document.querySelector('.playerSection'),
	chestSection = document.querySelector('.chestSection'),
	bestDecks = document.querySelector('.bestSection section'),
	mediaComponent = document.querySelector('#elixirMedio'),
	ddArena = document.querySelector('#ddArena'),
	ddRarity = document.querySelector('#ddRarity'),
	ddType = document.querySelector('#ddType'),
	btnCopy = document.querySelector('#copy'),
	changeContainers = document.querySelectorAll('.navSection button'),
	chestContainer = document.querySelector('.chestContainer'),
	navSection = document.querySelector('.navSection'),
	cbConfigs = document.querySelectorAll('.configSection input'),
	cbDeckInteligente = document.querySelector('#smartDeck'),
	btnVoltar = document.querySelector('.btnVoltar'),
	chkConfig = document.querySelectorAll('.config input'),
	chkConfigText = document.querySelectorAll('.config label'),
	playerRing = document.querySelector('.player-ring'),
	chestRing = document.querySelector('.chest-ring'),
	idUser = document.querySelector('#idUser'),
	idPlayer = document.querySelector('#idPlayer'),
	cntConfig = document.querySelector('.containerConfig'),
	arenas = [90, 90, 83, 77, 71, 63, 55, 47, 39, 31, 25, 19],
	root = document.querySelector(':root');

if (localStorage.getItem('ddArena') !== null)
	ddArena.selectedIndex = localStorage.getItem('ddArena');
if (localStorage.getItem('ddRarity') !== null)
	ddRarity.selectedIndex = localStorage.getItem('ddRarity');
if (localStorage.getItem('ddType') !== null)
	ddType.selectedIndex = localStorage.getItem('ddType');

chkConfig[0].onchange = function () {
	if (chkConfig[0].checked)
		for (let i = 1; i < cardsName.length; i++) {
			img[i - 1].removeAttribute('class');
			localStorage.setItem(cardsName[i], 'e')
		}
	else
		for (let i = 1; i < cardsName.length; i++) {
			img[i - 1].setAttribute('class', 'notAllowed');
			localStorage.setItem(cardsName[i], 'd')
		}
	changeDeck()
}

function changeAble(index, number, first, second) {
	if (chkConfig[index].checked)
		for (let i = 1; i < cardsName.length; i++) {
			if (cardsInformation[i].split('<br />')[number] === `${first}: ${second}`) {
				img[i - 1].removeAttribute('class');
				localStorage.setItem(cardsName[i], 'e')
			}
		}
	else
		for (let i = 1; i < cardsName.length; i++)
			if (cardsInformation[i].split('<br />')[number] === `${first}: ${second}`) {
				img[i - 1].setAttribute('class', 'notAllowed');
				localStorage.setItem(cardsName[i], 'd')
			}
	changeDeck()
}

const rarity = ['Common', 'Rare', 'Epic', 'Legendary', 'Troop', 'Spell', 'Construction'];
for (let i = 1; i < chkConfig.length; i++)
	chkConfig[i].onchange = () => {
		changeAble(i, i - 1 < 4 ? 0 : 1, i - 1 < 4 ? 'Rarity' : 'Type', rarity[i - 1]);
	}

function changeDeck() {
	const selectedArena = arenas[ddArena.selectedIndex];
	let all = 0,
		common = 0,
		rare = 0,
		epic = 0,
		legendary = 0,
		troop = 0,
		spell = 0,
		construction = 0,
		qtdAll = 0,
		qtdCommon = 0,
		qtdRare = 0,
		qtdEpic = 0,
		qtdLegendary = 0,
		qtdTroop = 0,
		qtdSpell = 0,
		qtdConstruction = 0;

	allowedCards.splice(0, allowedCards.length);
	for (let i = 1; i < selectedArena; i++) {
		if (ddRarity.selectedIndex === 0)
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 1 && cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 2 && cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 3 && cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 4 && cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
			allowedCards.push(i)
	}

	for (let i = 0; i < allowedCards.length; i++) {
		if (ddType.selectedIndex === 1 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Troop')
			allowedCards[i] = 0
		else if (ddType.selectedIndex === 2 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Construction')
			allowedCards[i] = 0
		else if (ddType.selectedIndex === 3 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Spell')
			allowedCards[i] = 0
	}

	for (let i = 0; i < allowedCards.length; i++)
		if (allowedCards[i] !== 0 && localStorage.getItem(cardsName[allowedCards[i]]) !== 'e')
			allowedCards[i] = 0

	for (let i = 1; i < cardsName.length; i++) {
		qtdAll++;
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
			qtdCommon++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
			qtdRare++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
			qtdEpic++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
			qtdLegendary++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Troop')
			qtdTroop++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Spell')
			qtdSpell++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Construction')
			qtdConstruction++
		if (localStorage.getItem(cardsName[i]) === 'e') {
			all++;
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
				common++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
				rare++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
				epic++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
				legendary++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Troop')
				troop++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Spell')
				spell++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Construction')
				construction++
		}
	}

	chkConfigText[0].textContent = `All cards (${all})`;
	chkConfigText[1].textContent = `All common cards (${common})`;
	chkConfigText[2].textContent = `All rare cards (${rare})`;
	chkConfigText[3].textContent = `All epic cards (${epic})`;
	chkConfigText[4].textContent = `All legendary cards (${legendary})`;
	chkConfigText[5].textContent = `All troop cards (${troop})`;
	chkConfigText[6].textContent = `All spell cards (${spell})`;
	chkConfigText[7].textContent = `All construction cards (${construction})`;

	if (all === qtdAll)
		chkConfig[0].checked = true;
	else chkConfig[0].checked = false;
	if (common === qtdCommon)
		chkConfig[1].checked = true;
	else chkConfig[1].checked = false;
	if (rare === qtdRare)
		chkConfig[2].checked = true;
	else chkConfig[2].checked = false;
	if (epic === qtdEpic)
		chkConfig[3].checked = true;
	else chkConfig[3].checked = false;
	if (legendary === qtdLegendary)
		chkConfig[4].checked = true;
	else chkConfig[4].checked = false;
	if (troop === qtdTroop)
		chkConfig[5].checked = true;
	else chkConfig[5].checked = false;
	if (spell === qtdSpell)
		chkConfig[6].checked = true;
	else chkConfig[6].checked = false;
	if (construction === qtdConstruction)
		chkConfig[7].checked = true;
	else chkConfig[7].checked = false;

	document.querySelector('.selectSection h2').textContent = `Amount of allowed decks: ${all}`;

	while (allowedCards.indexOf(0) !== -1)
		for (let i = 0; i < allowedCards.length; i++)
			if (allowedCards[i] === 0)
				allowedCards.splice(i, 1)
}

ddArena.onchange = () => {
	changeDeck();
	localStorage.setItem('ddArena', ddArena.selectedIndex)
}
ddRarity.onchange = () => {
	changeDeck();
	localStorage.setItem('ddRarity', ddRarity.selectedIndex)
}
ddType.onchange = () => {
	changeDeck();
	localStorage.setItem('ddType', ddType.selectedIndex)
}

cbDeckInteligente.onchange = () => {
	if (cbDeckInteligente.checked === true) {
		ddArena.disabled = true;
		ddRarity.disabled = true;
		ddType.disabled = true;
		if (prevDeck.length > 1) btnVoltar.hidden = false
	} else {
		ddArena.disabled = false;
		ddRarity.disabled = false;
		ddType.disabled = false;
		if (prevDeck.length > 1) btnVoltar.hidden = true
	}
}

function allowDrag(event) {
	event.preventDefault()
}

let id = -1;

function getId(event) {
	event.stopPropagation();
	id = parseInt(event.target.id)
}

function pasteCard(event) {
	event.preventDefault();
	if (id !== -1) {
		let temp = currentDeck[id];
		currentDeck[id] = currentDeck[parseInt(event.target.id)];
		currentDeck[parseInt(event.target.id)] = temp;
		setDeck(currentDeck);
		id = -1
	}
}

function capitalize(string) {
	return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function setDeck(deck = Array) {
	let media = 0.0;
	contentToCopy = 'deck=';
	for (let i = 0; i < deck.length; i++) {
		contentToCopy += cardsCode[deck[i]] + (i === deck.length - 1 ? '' : ';');
		cards[i].src = `./images/${cardsName[deck[i]]}_opt-min.png`;
		cards[i].alt = cardsName[deck[i]];
		cards[i].title = capitalize(cardsName[deck[i]]);
		media += cardsElixir[deck[i]] / 8
	}

	mediaComponent.textContent = `Elixir average: ${media.toFixed(1)}`;

	for (let i = deck.length; i < 8; i++) {
		currentDeck.push(0);
		cards[i].src = './images/none-card_opt-min.png';
		cards[i].alt = 'None Card';
		cards[i].title = 'None Card'
	}
}

function buildDeck() {
	currentDeck.splice(0, currentDeck.length);

	if (cbDeckInteligente.checked) {
		const typeSelected = tipos[parseInt(Math.random() * tipos.length, 10)],
			group = [defesa, Sup, mainAttack, FV3, Si, F, FV2, C, SV2, SV3, M, towerAttack, Surp, Ciclar, CV3, FV4, CA],
			troop = ['D', 'S', 'AP', 'FV3', 'Si', 'F', 'FV2', 'C', 'SV2', 'SV3', 'M', 'AT', 'Surp', 'Ciclar', 'CV3', 'FV4', 'CA'];

		for (let i = 0; i < typeSelected.split('|').length; i++) {
			for (let j = 0; j < troop.length; j++)
				if (typeSelected.split('|')[i] === troop[j]) {
					let newTroop = group[j][parseInt(Math.random() * group[j].length, 10)];
					while (currentDeck.indexOf(newTroop) !== -1)
						newTroop = group[j][parseInt(Math.random() * group[j].length, 10)]

					currentDeck.push(newTroop);
					break
				} else if (j === troop.length - 1)
				currentDeck.push(typeSelected.split('|')[i])
		}

		for (let i = 0; i < currentDeck.length; i++)
			for (let j = 1; j < cardsInformation.length; j++)
				if (currentDeck[i] === cardPtName[j])
					currentDeck[i] = j

		randomizeDeck();

		prevDeck.push(new Array());
		for (let i = 0; i < currentDeck.length; i++)
			prevDeck[prevDeck.length - 1].push(currentDeck[i])

		if (prevDeck.length > 100)
			prevDeck.shift()
		else if (prevDeck.length > 1)
			btnVoltar.hidden = false

	} else {
		if (prevDeck.length === 1) prevDeck.pop()
		let random = allowedCards[parseInt(Math.random() * allowedCards.length, 10)];

		for (let i = 0; i < (allowedCards.length < 8 ? allowedCards.length : cards.length); i++) {
			while (currentDeck.indexOf(random) !== -1)
				random = allowedCards[parseInt(Math.random() * allowedCards.length, 10)];

			currentDeck.push(random)
		}
	}

	setDeck(currentDeck)
}

const cont = [dbSection, playerSection, selectSection, savedSection, bestSection, chestSection, configSection, aboutSection];

function switchContainer(container = dbSection) {
	for (let i = 0; i < cont.length; i++)
		if (cont[i] === container) {
			changeContainers[i].setAttribute('id', 'selectedButton');
			changeContainers[i].style.color = 'var(--corDeLetra)';
			cont[i].style.display = 'block';
			selectedContainer = i
		} else {
			changeContainers[i].removeAttribute('id');
			changeContainers[i].style.color = 'var(--corDeLetraBotao)';
			cont[i].style.display = 'none'
		}
}

function combination() {
	const i = allowedCards.length,
		b = allowedCards.length < 8 ? allowedCards : 8;
	let result = 0,
		iFactorial = 1,
		bFactorial = 1;

	for (let f = i; f > (i - b); f--)
		iFactorial *= f

	for (let k = b; k > 0; k--)
		bFactorial *= k

	result = iFactorial / bFactorial;

	const formatter = Intl.NumberFormat('en-US');
	return allowedCards.length === 0 ? 0 : formatter.format(result)
}

function infoCards() {
	smalltalk.alert('Information',
		(window.screen.width < 1024 ? 'To change any card, simply press and hold a card.\nTo remove the current deck, simply press and hold the Paste deck button.\nTo shuffle the current deck, simply press and hold the Build deck button.\nThe function Previous deck is only valid for smart decks.\nTo make the site link a direct link to deck, simply press and hold the Copy deck button.' : 'To change any card, simply press right click on card.\nTo remove current deck, simply press right click on Paste deck button.\nTo shuffle current deck, simply press right click on Build deck button.\nTo make the site link to direct deck link, simply press right click on Build deck button.') +
		(cbDeckInteligente.checked ? '\nCard selector, dropdowns of arenas, rarities and types only works when smart deck are deactived.' : `\nAmount of cards to generate: ${allowedCards.length}\nPossible deck combinations: ${combination()}`)
	);
}

function copyDeck() {
	if (prevDeck.length > 0)
		prevDeck.pop()
	if (screen.width < 1024)
		smalltalk.confirm('Open deck', 'Do you wanna open this deck on Clash Royale game?').then(() => window.open(`clashroyale://copyDeck?${contentToCopy}`, '_self')).catch(() => {})
	else
		btnCopy.setAttribute('data-clipboard-text', `https://link.clashroyale.com/deck/pt?${contentToCopy}`)
}

function copyDeckSec() {
	smalltalk.confirm('Shareable link', 'Do you wanna create a shareable link?').then(() => location.search = `deck=${contentToCopy.split('deck=')[1]}`).catch(() => {})
}

function copyDeckPhone(deck) {
	smalltalk.confirm('Shareable link', 'Do you wanna create a shareable link?').then(() => location.search = `deck=${deck}`).catch(() => {})
}

function copyDeckSaved(deck) {
	if (screen.width < 1024)
		smalltalk.confirm('Open deck', 'Do you wanna open this deck on Clash Royale game?').then(() => window.open(`clashroyale://copyDeck?deck=${deck}`, '_self')).catch(() => {})
	else smalltalk.confirm('Shareable link', 'Do you wanna create a shareable link?').then(() => location.search = `deck=${deck}`).catch(() => {})
}

function paste(linkDeck = String) {
	const backup = currentDeck.map(card => card);

	if (linkDeck !== null && linkDeck.trim().indexOf(' ') === -1 && linkDeck.indexOf(';') !== -1) {
		try {
			if (linkDeck.match(/&id=/))
				linkDeck = linkDeck.substring(0, linkDeck.lastIndexOf('&'))
			if (linkDeck.match(/\?deck=/)) {
				linkDeck = linkDeck.split('?deck=');
				linkDeck.shift();
				linkDeck = linkDeck.join().split(';')
			} else linkDeck = linkDeck.split(';')

			for (let i = 0; i < linkDeck.length; i++)
				for (let j = 0; j < cardsCode.length; j++)
					if (parseInt(linkDeck[i]) === cardsCode[j])
						linkDeck[i] = j

			for (let i = linkDeck; i < 8; i++)
				linkDeck.push(0);

			currentDeck = linkDeck.map(card => parseInt(card));
			setDeck(currentDeck)
		} catch {
			currentDeck = backup.map(card => card);
			setDeck(currentDeck);
			smalltalk.alert('Error', 'Invalid deck link!')
		}
	}
}

function pasteDeck(content = null) {
	if (content === null) {
		if (screen.width >= 1024)
			smalltalk.prompt('Paste deck', 'Paste a deck link below\nE.g: https://link.clashroyale.com/deck/en?deck=26000018;28000009;26000003;28000008...')
			.then(linkDeck => {
				paste(linkDeck)
			}).catch(() => {})
		else {
			let linkDeck = prompt('Paste a deck link below\nE.g: https://link.clashroyale.com/deck/en?deck=26000018;28000009;26000003;28000008...');
			paste(linkDeck)
		}
	} else paste(content)
}

function formatText(text) {
	const alpha = 'aaaaeeeeiiiioooouuuu',
		accentuation = 'áâàãéêèẽíìîĩóôòõúûùũ';

	text = text.replace(/[!@#$%&*()-=_+'"[\]{},.<>;:/?^~]/g, '');

	for (let i = 0; i < text.length; i++)
		while (text.indexOf(accentuation[i]) !== -1)
			text = text.replace(accentuation[i], alpha[i])

	return text.trim().toLowerCase()
}

function previousDeck() {
	for (let i = 0; i < currentDeck.length; i++)
		currentDeck[i] = prevDeck[prevDeck.length - 2][i]

	prevDeck.pop();

	setDeck(currentDeck);
	if (prevDeck.length <= 1)
		btnVoltar.hidden = true
}

function randomizeDeck() {
	if (currentDeck.indexOf(0) === -1) {
		const newDeck = [];
		let num = currentDeck[parseInt(Math.random() * currentDeck.length, 10)]
		for (let i = 0; i < currentDeck.length; i++) {
			while (newDeck.indexOf(num) !== -1)
				num = currentDeck[parseInt(Math.random() * currentDeck.length, 10)]

			newDeck.push(num)
		}

		for (let i = 0; i < newDeck.length; i++)
			currentDeck[i] = newDeck[i]

		setDeck(currentDeck)
	} else smalltalk.alert('Shuffle deck', 'Shuffling deck with missing cards is not allowed.')
}

const x = matchMedia('(min-width: 768px)');

function matche(xvar) {
	if (xvar.matches) {
		if (navSection.style.width === '100%') {
			if (selectedContainer === 0)
				dbSection.style.display = 'block'
			else if (selectedContainer === 1)
				playerSection.style.display = 'block'
			else if (selectedContainer === 2)
				selectSection.style.display = 'block'
			else if (selectedContainer === 3)
				savedSection.style.display = 'block'
			else if (selectedContainer === 4)
				bestSection.style.display = 'block'
			else if (selectedContainer === 5)
				chestSection.style.display = 'block'
			else if (selectedContainer === 6)
				configSection.style.display = 'block'
			else
				aboutSection.style.display = 'block'
		}
		navSection.style.width = '175px';
		navSection.style.transition = 'all 0s';
		navSection.style.height = '100%';
		navSection.style.overflow = 'initial';
		navSection.style.borderRight = '1px solid var(--corDeBorda)'
	}
}

const y = matchMedia('(max-width: 767px)');

function matche2(yvar) {
	if (yvar.matches) {
		navSection.style.width = '40px';
		navSection.style.height = '35px';
		navSection.style.overflow = 'hidden';
		navSection.style.transition = 'all .2s';
		navSection.style.borderRight = 'none';
	}
}

function showSections() {
	if (navSection.style.width !== '100%') {
		navSection.style.width = '100%';
		navSection.style.height = '100%'
		if (selectedContainer === 0)
			dbSection.style.display = 'none'
		else if (selectedContainer === 1)
			playerSection.style.display = 'none'
		else if (selectedContainer === 2)
			selectSection.style.display = 'none'
		else if (selectedContainer === 3)
			savedSection.style.display = 'none'
		else if (selectedContainer === 4)
			bestSection.style.display = 'none'
		else if (selectedContainer === 5)
			chestSection.style.display = 'none'
		else if (selectedContainer === 6)
			configSection.style.display = 'none'
		else
			aboutSection.style.display = 'none'
	} else {
		navSection.style.width = '40px';
		navSection.style.height = '35px'
		if (selectedContainer === 0)
			dbSection.style.display = 'block'
		else if (selectedContainer === 1)
			playerSection.style.display = 'block'
		else if (selectedContainer === 2)
			selectSection.style.display = 'block'
		else if (selectedContainer === 3)
			savedSection.style.display = 'block'
		else if (selectedContainer === 4)
			bestSection.style.display = 'block'
		else if (selectedContainer === 5)
			chestSection.style.display = 'block';
		else if (selectedContainer === 6)
			configSection.style.display = 'block'
		else
			aboutSection.style.display = 'block'
	}
}

function closeNav() {
	if (navSection.style.width === '100%') {
		navSection.style.width = '40px';
		navSection.style.height = '35px'
	}
}

function darkTheme() {
	root.style.setProperty('--corDeFundo', 'rgb(42, 44, 51)');
	root.style.setProperty('--corPrimaria', 'rgb(35, 35, 35)');
	root.style.setProperty('--corSecundaria', 'rgb(25, 25, 25)');
	root.style.setProperty('--corTercearia', 'rgb(20, 20, 20)');
	root.style.setProperty('--corDeLetraBotao', 'rgb(237, 237, 237)');
	root.style.setProperty('--corDeBorda', 'var(--corDeLetraBotao)');
	root.style.setProperty('--corDeLetra', 'rgb(237, 237, 237)');
	localStorage.removeItem('theme')
}

function blueTheme() {
	root.style.setProperty('--corDeFundo', '#343e51');
	root.style.setProperty('--corPrimaria', '#242b38');
	root.style.setProperty('--corSecundaria', '#1a1f29');
	root.style.setProperty('--corTercearia', '#13161d');
	root.style.setProperty('--corDeLetraBotao', 'white');
	root.style.setProperty('--corDeBorda', 'white');
	root.style.setProperty('--corDeLetra', 'white');
	localStorage.setItem('theme', 'blue')
}

let maxDown = 0,
	response = null,
	html = '<button title="Remove all" class="btnRemoveAll" onclick="deleteAllBest()">Remove all decks</button><h2 class="elixir"></h2>';

async function downDecks() {
	if (response === null) {

		response = await fetch('https://docs.royaleapi.com/json/popular_decks.json').then(data => data.json()).catch(() => smalltalk.alert('Error', 'An error occurred, please come back later.'))
	}

	if (response !== null)
		if (response.length === maxDown) smalltalk.alert('Limit reached', 'Don\'t has more decks to show.')
	else {
		for (let i = maxDown; i < maxDown + (maxDown + 10 > response.length ? response.length - maxDown : 10); i++)
			html += `
						<section class="cardsContainerS">
							<div><img src="./images/${response[i].cards[0].key}_opt-min.png" alt="${response[i].cards[0].key}" title="${capitalize(response[i].cards[0].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[0].id)})"/></div>
							<div><img src="./images/${response[i].cards[1].key}_opt-min.png" alt="${response[i].cards[1].key}" title="${capitalize(response[i].cards[1].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[1].id)})"/></div>
							<div><img src="./images/${response[i].cards[2].key}_opt-min.png" alt="${response[i].cards[2].key}" title="${capitalize(response[i].cards[2].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[2].id)})"/></div>
							<div><img src="./images/${response[i].cards[3].key}_opt-min.png" alt="${response[i].cards[3].key}" title="${capitalize(response[i].cards[3].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[3].id)})"/></div>
							<div><img src="./images/${response[i].cards[4].key}_opt-min.png" alt="${response[i].cards[4].key}" title="${capitalize(response[i].cards[4].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[4].id)})"/></div>
							<div><img src="./images/${response[i].cards[5].key}_opt-min.png" alt="${response[i].cards[5].key}" title="${capitalize(response[i].cards[5].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[5].id)})"/></div>
							<div><img src="./images/${response[i].cards[6].key}_opt-min.png" alt="${response[i].cards[6].key}" title="${capitalize(response[i].cards[6].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[6].id)})"/></div>
							<div><img src="./images/${response[i].cards[7].key}_opt-min.png" alt="${response[i].cards[7].key}" title="${capitalize(response[i].cards[7].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[7].id)})"/></div>
						</section>

						<h1 class="elixir">Elixir average: ${((response[i].cards[0].elixir + response[i].cards[1].elixir + response[i].cards[2].elixir + response[i].cards[3].elixir + response[i].cards[4].elixir + response[i].cards[5].elixir + response[i].cards[6].elixir + response[i].cards[7].elixir) / 8).toFixed(1)}</h1>

						<section class="configContainerS">
							<button class="btnCopiarS" title="Copy deck" oncontextmenu="copyDeckSaved('${response[i].cards.map(card => card.id).join(';')}')" ${screen.width < 1024 ? `onclick="copyDeckSaved('${response[i].decklink.split('?deck=')[1]}')"` : `data-clipboard-text=${response[i].decklink}`}>Copy deck</button>
							<button class="btnApagar" title="Save deck" onclick="saveDeck([${cardsCode.indexOf(response[i].cards[0].id)},${cardsCode.indexOf(response[i].cards[1].id)},${cardsCode.indexOf(response[i].cards[2].id)},${cardsCode.indexOf(response[i].cards[3].id)},${cardsCode.indexOf(response[i].cards[4].id)},${cardsCode.indexOf(response[i].cards[5].id)},${cardsCode.indexOf(response[i].cards[6].id)},${cardsCode.indexOf(response[i].cards[7].id)}])">Save deck</button>
							<button class="btnColarS" title="Paste deck" onclick="pasteDeck('${response[i].decklink}')">Paste deck</button>
						</section>
					`;

		bestDecks.innerHTML = html;
		maxDown += (maxDown + 10 > response.length ? response.length - maxDown : 10);
		document.querySelector('.bestSection h2').innerText = `Amount of best decks: ${maxDown}`
	}


}

(function updateCards() {
	let content = '';

	for (let i = 1; i < cardsInformation.length; i++)
		if (localStorage.getItem(cardsName[i]) === null)
			localStorage.setItem(cardsName[i], 'e')

	for (let i = 1; i < cardsInformation.length; i++) {
		content += `
			<section>
				<img class="${localStorage.getItem(cardsName[i]) === 'e' ? '' : 'notAllowed'}" src="./images/${cardsName[i]}_opt-min.png" alt="${cardsName[i]}" title="${capitalize(cardsName[i])}" />				
			</section>
		`;
	}
	selectSection.innerHTML += content;

	btn = document.querySelectorAll('.selectSection div button');
	img = document.querySelectorAll('.selectSection img:not(#configCards)');

	btn[0].addEventListener('click', () => {
		for (let i = 1; i < cardsName.length; i++)
			if (localStorage.getItem(cardsName[i]) === 'd') {
				localStorage.setItem(cardsName[i], 'e');
				img[i - 1].removeAttribute('class')
			}
		changeDeck()
	});

	btn[1].addEventListener('click', () => {
		for (let i = 1; i < cardsName.length; i++)
			if (localStorage.getItem(cardsName[i]) === 'e') {
				localStorage.setItem(cardsName[i], 'd');
				img[i - 1].setAttribute('class', 'notAllowed');
			}
		changeDeck()
	});

	for (let i = 0; i < img.length; i++)
		img[i].addEventListener('click', function () {
			if (img[i].className === 'notAllowed') {
				img[i].removeAttribute('class');
				localStorage.setItem(cardsName[i + 1], 'e')
			} else {
				img[i].setAttribute('class', 'notAllowed');
				localStorage.setItem(cardsName[i + 1], 'd')
			}
			changeDeck()
		})
})();

const createDecks = new Worker('./src/js/render.js'),
	saveDecks = new Worker('./src/js/save.js'),
	deleteDecks = new Worker('./src/js/delete.js');

createDecks.onmessage = e => {
	savedDecks.innerHTML = e.data;
	document.querySelector('.savedSection h2').innerText = `Amount of saved decks: ${JSON.parse(localStorage.getItem('decks')).deckList.length}`
}

saveDecks.onmessage = e => {
	if (!e.data.exists) {
		localStorage.setItem('decks', e.data.deck);
		render();
	} else smalltalk.alert('Repeated deck', 'Deck is already saved.')
}

deleteDecks.onmessage = e => {
	if (e.data === 'empty') localStorage.removeItem('decks');
	else localStorage.setItem('decks', `{"deckList": ${e.data}}`);
	render()
}

function render() {
	if (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 0) {
		createDecks.postMessage({
			'decks': JSON.parse(localStorage.getItem('decks')).deckList,
			'cardsName': cardsName,
			'cardsElixir': cardsElixir,
			'cardsCode': cardsCode,
			'screenSize': screen.width
		});
	} else savedDecks.innerHTML = '<h2 class="noneDeck">None deck saved.</h2>'
}

function saveDeck(deck = currentDeck) {
	let empty = deck.indexOf(0) === -1 ? false : true,
		max = (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 99) ? true : false

	if (!empty && !max)
		saveDecks.postMessage({
			"decks": JSON.parse(localStorage.getItem('decks')),
			"currentDeck": deck
		})
	else if (empty) smalltalk.alert('Incomplete deck', 'Saving deck with missing cards is not allowed.')
	else smalltalk.alert('Limit exceeded', 'Saving more than 100 decks is not allowed.')
}

function deleteDeck(deck = Array) {
	smalltalk.confirm('Remove deck', 'Do you wanna remove this deck?').then(() => {
		deleteDecks.postMessage({
			"deckList": JSON.parse(localStorage.getItem('decks')).deckList,
			"deck": deck
		});
	}).catch(() => {})
}

function deleteAll() {
	smalltalk
		.confirm('Remove decks', 'Do you wanna remove all saved decks?')
		.then(() => {
			localStorage.removeItem('decks');
			render()
		})
		.catch(() => {})
}

function deleteAllBest() {
	smalltalk
		.confirm('Remove decks', 'Do you wanna remove all best decks?')
		.then(() => {
			html = '<button title="Remove all" class="btnRemoveAll" onclick="deleteAllBest()">Remove all decks</button><h2 class="elixir"></h2>';
			bestDecks.innerHTML = '<h1 class="noneDeck">None deck in this area.</h1>';
			maxDown = 0
		})
		.catch(() => {})
}

function showInfo(index = Number) {
	const arenaName = ['Training Camp', 'Goblin Stadium', 'Bone Pit', 'Barbarian Bowl', 'P.E.K.K.A\'s Playhouse', 'Spell Valley', 'Builder\'s Workshop', 'Royal Arena', 'Frozen Peak', 'Jungle Arena', 'Hog Mountain', 'Electro Valley'];
	const arena = (() => {
		for (let j = 0; j < arenas.length; j++)
			if (index < (j === 0 ? 13 : arenas[arenas.length - j])) return j
	})();
	info.innerHTML = `<ins>${capitalize(cardsName[index])}</ins><br />${cardsInformation[index]}<br />Elixir cost: ${cardsElixir[index]}<br />Arena: ${arena === 0 ? arenaName[arena] : `${arenaName[arena]} (${arena})`}`
}

function showChests() {
	const button = document.querySelector('#showChests');
	chestRing.style.display = 'block';
	button.disabled = true;
	chestContainer.innerHTML = '';
	let settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://api.royaleapi.com/player/${idUser.value.trim()}/chests`,
		"method": "GET",
		"headers": {
			"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk3MiwiaWRlbiI6IjMxOTkwNTQwNjg4NzY1NzQ4MiIsIm1kIjp7fSwidHMiOjE1NDE3NTY5Nzk5MDN9.T8S-5L59E8SB4ZDOcany1goGjGd3V6pHUnSdgFXHVQg"
		}
	}

	$.ajax(settings).done(response => {
		localStorage.setItem('id', idUser.value.trim());
		let html = '';
		const chests = [];
		for (let i = 0; i < response.upcoming.length; i++)
			html += `
				<div class="chestInfo">
					<img title="${capitalize(response.upcoming[i])} chest" alt="${response.upcoming[i]}" src="../images/${response.upcoming[i]}.png" />
					<p>${i === 0 ? 'Next' : '+' + (i)}</p>
				</div>
			`

		for (let chest in response)
			if (chest !== 'upcoming')
				chests.push([chest, response[chest]])

		chests.sort((a, b) => {
			return a[1] - b[1]
		});

		for (let i = 0; i < chests.length; i++)
			if (!(chests[i][1] < 9))
				html += `
				<div class="chestInfo">
					<img title="${capitalize(chests[i][0])} chest" alt="${chests[i][0]}" src="../images/${chests[i][0]}.png" />
					<p>+${chests[i][1]}</p>
				</div>
			`

		chestContainer.innerHTML = html;
		chestRing.style.display = 'none';
		button.disabled = false
	}).catch(() => {
		button.disabled = false;
		chestRing.style.display = 'none';
		smalltalk.alert('Error', 'An error occurred, please come back later.')
	});
}

let playerInfo;

function login(id = idPlayer.value.trim()) {
	document.querySelector('#showPlayer').disabled = true;
	playerRing.style.display = 'block';
	let settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://api.royaleapi.com/player/${id}`,
		"method": "GET",
		"headers": {
			"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk3MiwiaWRlbiI6IjMxOTkwNTQwNjg4NzY1NzQ4MiIsIm1kIjp7fSwidHMiOjE1NDE3NTY5Nzk5MDN9.T8S-5L59E8SB4ZDOcany1goGjGd3V6pHUnSdgFXHVQg"
		}
	}

	$.ajax(settings).done(response => {
		playerInfo = response.cards;
		const html = `
			<h2 class="elixir">Current deck</h2>
			<section class="cardsContainerS">
				<div><img src="./images/${response.currentDeck[0].key}_opt-min.png" alt="${response.currentDeck[0].key}" title="${capitalize(response.currentDeck[0].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[0].id)})"/></div>
				<div><img src="./images/${response.currentDeck[1].key}_opt-min.png" alt="${response.currentDeck[1].key}" title="${capitalize(response.currentDeck[1].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[1].id)})"/></div>
				<div><img src="./images/${response.currentDeck[2].key}_opt-min.png" alt="${response.currentDeck[2].key}" title="${capitalize(response.currentDeck[2].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[2].id)})"/></div>
				<div><img src="./images/${response.currentDeck[3].key}_opt-min.png" alt="${response.currentDeck[3].key}" title="${capitalize(response.currentDeck[3].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[3].id)})"/></div>
				<div><img src="./images/${response.currentDeck[4].key}_opt-min.png" alt="${response.currentDeck[4].key}" title="${capitalize(response.currentDeck[4].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[4].id)})"/></div>
				<div><img src="./images/${response.currentDeck[5].key}_opt-min.png" alt="${response.currentDeck[5].key}" title="${capitalize(response.currentDeck[5].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[5].id)})"/></div>
				<div><img src="./images/${response.currentDeck[6].key}_opt-min.png" alt="${response.currentDeck[6].key}" title="${capitalize(response.currentDeck[6].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[6].id)})"/></div>
				<div><img src="./images/${response.currentDeck[7].key}_opt-min.png" alt="${response.currentDeck[7].key}" title="${capitalize(response.currentDeck[7].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[7].id)})"/></div>
			</section>

			<h1 class="elixir">Elixir average: ${((response.currentDeck[0].elixir + response.currentDeck[1].elixir + response.currentDeck[2].elixir + response.currentDeck[3].elixir + response.currentDeck[4].elixir + response.currentDeck[5].elixir + response.currentDeck[6].elixir + response.currentDeck[7].elixir) / 8).toFixed(1)}</h1>

			<section class="configContainerS">
				<button class="btnApagar" title="Save deck" onclick="saveDeck([${response.deckLink.split('deck=')[1].split(';').map(id => cardsCode.indexOf(parseInt(id))).join(',')}])">Save deck</button>
			</section>
		`;

		document.querySelector('.playerContainer').innerHTML = html;
		document.querySelector('#showPlayer').disabled = false;
		idUser.value = id;
		playerRing.style.display = 'none';
		localStorage.setItem('id', id);
		showChests()
	}).catch(() => {
		document.querySelector('#showPlayer').disabled = false;
		playerRing.style.display = 'none'
	})
}

function basedCards() {
	if (localStorage.getItem('id') !== null) {
		if (playerInfo !== null) {
			try {
				if (playerInfo.length === cardsName.length - 1) {
					for (let i = 0; i < img.length; i++) {
						img[i].removeAttribute('class');
						localStorage.setItem(cardsName[i + 1], 'e');
					}
				} else {
					const cards = [];
					for (let card in playerInfo)
						cards.push(playerInfo[card].key);
					for (let i = 1; i < cardsName.length; i++)
						if (cards.indexOf(cardsName[i]) === -1) {
							img[i - 1].setAttribute('class', 'notAllowed');
							localStorage.setItem(cardsName[i], 'd')
						} else {
							img[i - 1].removeAttribute('class');
							localStorage.setItem(cardsName[i], 'e')
						}
				}
			} catch {
				basedCards();
			}
			changeDeck();
		}
	} else {
		showConfig();
		closeNav();
		switchContainer(playerSection);
		idPlayer.select();
		history.pushState(1, 'changed')
	}
}

if (localStorage.getItem('theme') === 'blue') {
	blueTheme();
	cbConfigs[1].checked = true
} else {
	cbConfigs[0].checked = true;
	darkTheme()
}

function change(name, ind) {
	if (name !== null && name.trim() !== '') {
		name = formatText(name)
		for (let j = 1; j < cardsInformation.length; j++)
			if (currentDeck.indexOf(j) === -1 && (name === cardsName[j].replace('-', ' ').toLowerCase() || name === formatText(cardPtName[j]))) {
				currentDeck[ind] = j;
				setDeck(currentDeck);
				break
			}
	}
}

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('contextmenu', () => {
		if (screen.width >= 1024)
			smalltalk.prompt('Change card', 'Type card name below\nE.g: Mini P.E.K.K.A, mini p.e.k.k.a or mini pekka').then(name => {
				change(name, i)
			}).catch(() => {})
		else {
			let name = prompt('Type card name below\nE.g: Mini P.E.K.K.A, mini p.e.k.k.a or mini pekka');
			change(name, i)
		}
	});
	cards[i].addEventListener('click', () => {
		if (currentDeck[i] !== 0) showInfo(currentDeck[i])
		else info.innerText = 'None card selected'
	});
}

window.addEventListener('contextmenu', event => event.preventDefault());

cbConfigs[0].addEventListener('change', darkTheme);
cbConfigs[1].addEventListener('change', blueTheme);

idUser.onkeydown = e => {
	if (e.which === 13) showChests()
}
idUser.onkeyup = e => {
	idUser.value = idUser.value.toUpperCase()
}
idPlayer.onkeydown = e => {
	if (e.which === 13) login()
}
idPlayer.onkeyup = e => {
	idPlayer.value = idPlayer.value.toUpperCase()
}

if (localStorage.getItem('id') !== null) {
	login(localStorage.getItem('id'));
	idPlayer.value = localStorage.getItem('id')
}

document.onkeydown = e => {
	if (dbSection.style.display === 'block') {
		if (e.which === 67)
			btnCopy.click()
		else if (e.which === 66)
			buildDeck()
		else if (e.which === 83)
			saveDeck()
		else if (e.ctrlKey && e.which === 86)
			pasteDeck()
	} else if (cntConfig.style.display === 'block' && e.which === 27)
		showConfig()
}

window.onload = function () {
	matche(x);
	x.addListener(matche);
	matche2(y);
	y.addListener(matche2);
	document.querySelector('.lds-ring').style.display = 'none';
	navSection.style.display = 'block';
	dbSection.style.display = 'block';
	if (location.search.startsWith('?deck='))
		paste(location.search.substring(6, location.search.length))
}

function showConfig() {
	if (cntConfig.style.display === 'block') {
		document.querySelector('body').style.overflowY = 'auto';
		cntConfig.style.display = 'none'
	} else {
		document.querySelector('body').style.overflowY = 'hidden';
		cntConfig.style.display = 'block';
		scrollTo(0, 0)
	}
}

function stop(event) {
	event.stopPropagation()
}

window.onpopstate = function () {
	if (cntConfig.style.display === 'block')
		showConfig()
	switchContainer(cont[history.state])
}

render();
changeDeck();
setDeck(currentDeck);
new ClipboardJS(btnCopy);
new ClipboardJS('.btnCopiarS')