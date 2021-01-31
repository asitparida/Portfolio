/*! 
	:: mo · js :: motion graphics toolbelt for the web
	Oleg Solomka @LegoMushroom 2015 MIT
	0.288.2 
*/

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("mojs",[],e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var s=r[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="build/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){var i,s;(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(r(3)),a=n(r(71)),p=n(r(72)),u=n(r(94)),l=n(r(117)),h=n(r(118)),c=n(r(119)),f=n(r(127)),d=n(r(128)),_=n(r(129)),y=n(r(101)),v=n(r(110)),m=n(r(102)),g=n(r(100)),w=n(r(99)),b=n(r(116)),S=n(r(126)),x=n(r(125)),P=n(r(84)),T=n(r(105)),M={revision:"0.288.2",isDebug:!0,helpers:a.default,Shape:u.default,ShapeSwirl:l.default,Burst:h.default,Html:c.default,stagger:f.default,Spriter:d.default,MotionPath:_.default,Tween:y.default,Timeline:v.default,Tweenable:g.default,Thenable:w.default,Tunable:b.default,Module:P.default,tweener:m.default,easing:T.default,shapesMap:p.default,_pool:{Delta:S.default,Deltas:x.default}};M.h=M.helpers,M.delta=M.h.delta,M.addShape=M.shapesMap.addShape,M.CustomShape=M.shapesMap.custom,M.Transit=M.Shape,M.Swirl=M.ShapeSwirl,i=[],void 0!==(s=function(){return M}.apply(e,i))&&(t.exports=s),"object"===(0,o.default)(t)&&"object"===(0,o.default)(t.exports)&&(t.exports=M),e.default=M,"undefined"!=typeof window&&(window.mojs=M)}).call(e,r(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(4)),n=i(r(55)),o="function"==typeof n.default&&"symbol"==typeof s.default?function(t){return typeof t}:function(t){return t&&"function"==typeof n.default&&t.constructor===n.default&&t!==n.default.prototype?"symbol":typeof t};e.default="function"==typeof n.default&&"symbol"===o(s.default)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof n.default&&t.constructor===n.default&&t!==n.default.prototype?"symbol":void 0===t?"undefined":o(t)}},function(t,e,r){t.exports={default:r(5),__esModule:!0}},function(t,e,r){r(6),r(50),t.exports=r(54).f("iterator")},function(t,e,r){"use strict";var i=r(7)(!0);r(10)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=i(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var i=r(8),s=r(9);t.exports=function(t){return function(e,r){var n,o,a=String(s(e)),p=i(r),u=a.length;return p<0||p>=u?t?"":void 0:(n=a.charCodeAt(p))<55296||n>56319||p+1===u||(o=a.charCodeAt(p+1))<56320||o>57343?t?a.charAt(p):n:t?a.slice(p,p+2):o-56320+(n-55296<<10)+65536}}},function(t,e){var r=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:r)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";var i=r(11),s=r(12),n=r(27),o=r(17),a=r(28),p=r(29),u=r(30),l=r(46),h=r(48),c=r(47)("iterator"),f=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,r,_,y,v,m){u(r,e,_);var g,w,b,S=function(t){if(!f&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},x=e+" Iterator",P="values"==y,T=!1,M=t.prototype,C=M[c]||M["@@iterator"]||y&&M[y],k=C||S(y),O=y?P?S("entries"):k:void 0,D="Array"==e?M.entries||C:C;if(D&&(b=h(D.call(new t)))!==Object.prototype&&(l(b,x,!0),i||a(b,c)||o(b,c,d)),P&&C&&"values"!==C.name&&(T=!0,k=function(){return C.call(this)}),i&&!m||!f&&!T&&M[c]||o(M,c,k),p[e]=k,p[x]=d,y)if(g={values:P?k:S("values"),keys:v?k:S("keys"),entries:O},m)for(w in g)w in M||n(M,w,g[w]);else s(s.P+s.F*(f||T),e,g);return g}},function(t,e){t.exports=!0},function(t,e,r){var i=r(13),s=r(14),n=r(15),o=r(17),a=function(t,e,r){var p,u,l,h=t&a.F,c=t&a.G,f=t&a.S,d=t&a.P,_=t&a.B,y=t&a.W,v=c?s:s[e]||(s[e]={}),m=v.prototype,g=c?i:f?i[e]:(i[e]||{}).prototype;c&&(r=e);for(p in r)(u=!h&&g&&void 0!==g[p])&&p in v||(l=u?g[p]:r[p],v[p]=c&&"function"!=typeof g[p]?r[p]:_&&u?n(l,i):y&&g[p]==l?function(t){var e=function(e,r,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?n(Function.call,l):l,d&&((v.virtual||(v.virtual={}))[p]=l,t&a.R&&m&&!m[p]&&o(m,p,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e,r){var i=r(16);t.exports=function(t,e,r){if(i(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,i){return t.call(e,r,i)};case 3:return function(r,i,s){return t.call(e,r,i,s)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var i=r(18),s=r(26);t.exports=r(22)?function(t,e,r){return i.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var i=r(19),s=r(21),n=r(25),o=Object.defineProperty;e.f=r(22)?Object.defineProperty:function(t,e,r){if(i(t),e=n(e,!0),i(r),s)try{return o(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var i=r(20);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(22)&&!r(23)(function(){return 7!=Object.defineProperty(r(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){t.exports=!r(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var i=r(20),s=r(13).document,n=i(s)&&i(s.createElement);t.exports=function(t){return n?s.createElement(t):{}}},function(t,e,r){var i=r(20);t.exports=function(t,e){if(!i(t))return t;var r,s;if(e&&"function"==typeof(r=t.toString)&&!i(s=r.call(t)))return s;if("function"==typeof(r=t.valueOf)&&!i(s=r.call(t)))return s;if(!e&&"function"==typeof(r=t.toString)&&!i(s=r.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){t.exports=r(17)},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports={}},function(t,e,r){"use strict";var i=r(31),s=r(26),n=r(46),o={};r(17)(o,r(47)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=i(o,{next:s(1,r)}),n(t,e+" Iterator")}},function(t,e,r){var i=r(19),s=r(32),n=r(44),o=r(41)("IE_PROTO"),a=function(){},p=function(){var t,e=r(24)("iframe"),i=n.length;for(e.style.display="none",r(45).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),p=t.F;i--;)delete p.prototype[n[i]];return p()};t.exports=Object.create||function(t,e){var r;return null!==t?(a.prototype=i(t),r=new a,a.prototype=null,r[o]=t):r=p(),void 0===e?r:s(r,e)}},function(t,e,r){var i=r(18),s=r(19),n=r(33);t.exports=r(22)?Object.defineProperties:function(t,e){s(t);for(var r,o=n(e),a=o.length,p=0;a>p;)i.f(t,r=o[p++],e[r]);return t}},function(t,e,r){var i=r(34),s=r(44);t.exports=Object.keys||function(t){return i(t,s)}},function(t,e,r){var i=r(28),s=r(35),n=r(38)(!1),o=r(41)("IE_PROTO");t.exports=function(t,e){var r,a=s(t),p=0,u=[];for(r in a)r!=o&&i(a,r)&&u.push(r);for(;e.length>p;)i(a,r=e[p++])&&(~n(u,r)||u.push(r));return u}},function(t,e,r){var i=r(36),s=r(9);t.exports=function(t){return i(s(t))}},function(t,e,r){var i=r(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var i=r(35),s=r(39),n=r(40);t.exports=function(t){return function(e,r,o){var a,p=i(e),u=s(p.length),l=n(o,u);if(t&&r!=r){for(;u>l;)if((a=p[l++])!=a)return!0}else for(;u>l;l++)if((t||l in p)&&p[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var i=r(8),s=Math.min;t.exports=function(t){return t>0?s(i(t),9007199254740991):0}},function(t,e,r){var i=r(8),s=Math.max,n=Math.min;t.exports=function(t,e){return(t=i(t))<0?s(t+e,0):n(t,e)}},function(t,e,r){var i=r(42)("keys"),s=r(43);t.exports=function(t){return i[t]||(i[t]=s(t))}},function(t,e,r){var i=r(13),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return s[t]||(s[t]={})}},function(t,e){var r=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){t.exports=r(13).document&&document.documentElement},function(t,e,r){var i=r(18).f,s=r(28),n=r(47)("toStringTag");t.exports=function(t,e,r){t&&!s(t=r?t:t.prototype,n)&&i(t,n,{configurable:!0,value:e})}},function(t,e,r){var i=r(42)("wks"),s=r(43),n=r(13).Symbol,o="function"==typeof n;(t.exports=function(t){return i[t]||(i[t]=o&&n[t]||(o?n:s)("Symbol."+t))}).store=i},function(t,e,r){var i=r(28),s=r(49),n=r(41)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),i(t,n)?t[n]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e,r){var i=r(9);t.exports=function(t){return Object(i(t))}},function(t,e,r){r(51);for(var i=r(13),s=r(17),n=r(29),o=r(47)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],p=0;p<5;p++){var u=a[p],l=i[u],h=l&&l.prototype;h&&!h[o]&&s(h,o,u),n[u]=n.Array}},function(t,e,r){"use strict";var i=r(52),s=r(53),n=r(29),o=r(35);t.exports=r(10)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,s(1)):"keys"==e?s(0,r):"values"==e?s(0,t[r]):s(0,[r,t[r]])},"values"),n.Arguments=n.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){e.f=r(47)},function(t,e,r){t.exports={default:r(56),__esModule:!0}},function(t,e,r){r(57),r(68),r(69),r(70),t.exports=r(14).Symbol},function(t,e,r){"use strict";var i=r(13),s=r(28),n=r(22),o=r(12),a=r(27),p=r(58).KEY,u=r(23),l=r(42),h=r(46),c=r(43),f=r(47),d=r(54),_=r(59),y=r(60),v=r(61),m=r(64),g=r(19),w=r(35),b=r(25),S=r(26),x=r(31),P=r(65),T=r(67),M=r(18),C=r(33),k=T.f,O=M.f,D=P.f,E=i.Symbol,A=i.JSON,L=A&&A.stringify,R=f("_hidden"),I=f("toPrimitive"),j={}.propertyIsEnumerable,F=l("symbol-registry"),Y=l("symbols"),X=l("op-symbols"),U=Object.prototype,B="function"==typeof E,H=i.QObject,N=!H||!H.prototype||!H.prototype.findChild,z=n&&u(function(){return 7!=x(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,r){var i=k(U,e);i&&delete U[e],O(t,e,r),i&&t!==U&&O(U,e,i)}:O,q=function(t){var e=Y[t]=x(E.prototype);return e._k=t,e},V=B&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},W=function(t,e,r){return t===U&&W(X,e,r),g(t),e=b(e,!0),g(r),s(Y,e)?(r.enumerable?(s(t,R)&&t[R][e]&&(t[R][e]=!1),r=x(r,{enumerable:S(0,!1)})):(s(t,R)||O(t,R,S(1,{})),t[R][e]=!0),z(t,e,r)):O(t,e,r)},G=function(t,e){g(t);for(var r,i=v(e=w(e)),s=0,n=i.length;n>s;)W(t,r=i[s++],e[r]);return t},K=function(t){var e=j.call(this,t=b(t,!0));return!(this===U&&s(Y,t)&&!s(X,t))&&(!(e||!s(this,t)||!s(Y,t)||s(this,R)&&this[R][t])||e)},Q=function(t,e){if(t=w(t),e=b(e,!0),t!==U||!s(Y,e)||s(X,e)){var r=k(t,e);return!r||!s(Y,e)||s(t,R)&&t[R][e]||(r.enumerable=!0),r}},Z=function(t){for(var e,r=D(w(t)),i=[],n=0;r.length>n;)s(Y,e=r[n++])||e==R||e==p||i.push(e);return i},J=function(t){for(var e,r=t===U,i=D(r?X:w(t)),n=[],o=0;i.length>o;)!s(Y,e=i[o++])||r&&!s(U,e)||n.push(Y[e]);return n};B||(a((E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=c(arguments.length>0?arguments[0]:void 0),e=function(r){this===U&&e.call(X,r),s(this,R)&&s(this[R],t)&&(this[R][t]=!1),z(this,t,S(1,r))};return n&&N&&z(U,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",function(){return this._k}),T.f=Q,M.f=W,r(66).f=P.f=Z,r(63).f=K,r(62).f=J,n&&!r(11)&&a(U,"propertyIsEnumerable",K,!0),d.f=function(t){return q(f(t))}),o(o.G+o.W+o.F*!B,{Symbol:E});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)f($[tt++]);for(var $=C(f.store),tt=0;$.length>tt;)_($[tt++]);o(o.S+o.F*!B,"Symbol",{for:function(t){return s(F,t+="")?F[t]:F[t]=E(t)},keyFor:function(t){if(V(t))return y(F,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){N=!0},useSimple:function(){N=!1}}),o(o.S+o.F*!B,"Object",{create:function(t,e){return void 0===e?x(t):G(x(t),e)},defineProperty:W,defineProperties:G,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:J}),A&&o(o.S+o.F*(!B||u(function(){var t=E();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var e,r,i=[t],s=1;arguments.length>s;)i.push(arguments[s++]);return"function"==typeof(e=i[1])&&(r=e),!r&&m(e)||(e=function(t,e){if(r&&(e=r.call(this,t,e)),!V(e))return e}),i[1]=e,L.apply(A,i)}}}),E.prototype[I]||r(17)(E.prototype,I,E.prototype.valueOf),h(E,"Symbol"),h(Math,"Math",!0),h(i.JSON,"JSON",!0)},function(t,e,r){var i=r(43)("meta"),s=r(20),n=r(28),o=r(18).f,a=0,p=Object.isExtensible||function(){return!0},u=!r(23)(function(){return p(Object.preventExtensions({}))}),l=function(t){o(t,i,{value:{i:"O"+ ++a,w:{}}})},h=t.exports={KEY:i,NEED:!1,fastKey:function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,i)){if(!p(t))return"F";if(!e)return"E";l(t)}return t[i].i},getWeak:function(t,e){if(!n(t,i)){if(!p(t))return!0;if(!e)return!1;l(t)}return t[i].w},onFreeze:function(t){return u&&h.NEED&&p(t)&&!n(t,i)&&l(t),t}}},function(t,e,r){var i=r(13),s=r(14),n=r(11),o=r(54),a=r(18).f;t.exports=function(t){var e=s.Symbol||(s.Symbol=n?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:o.f(t)})}},function(t,e,r){var i=r(33),s=r(35);t.exports=function(t,e){for(var r,n=s(t),o=i(n),a=o.length,p=0;a>p;)if(n[r=o[p++]]===e)return r}},function(t,e,r){var i=r(33),s=r(62),n=r(63);t.exports=function(t){var e=i(t),r=s.f;if(r)for(var o,a=r(t),p=n.f,u=0;a.length>u;)p.call(t,o=a[u++])&&e.push(o);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){var i=r(37);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,r){var i=r(35),s=r(66).f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return s(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?a(t):s(i(t))}},function(t,e,r){var i=r(34),s=r(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},function(t,e,r){var i=r(63),s=r(26),n=r(35),o=r(25),a=r(28),p=r(21),u=Object.getOwnPropertyDescriptor;e.f=r(22)?u:function(t,e){if(t=n(t),e=o(e,!0),p)try{return u(t,e)}catch(t){}if(a(t,e))return s(!i.f.call(t,e),t[e])}},function(t,e){},function(t,e,r){r(59)("asyncIterator")},function(t,e,r){r(59)("observable")},function(t,e){var r,i;r=function(){function t(){this.vars()}return t.prototype.NS="http://www.w3.org/2000/svg",t.prototype.logBadgeCss="background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;",t.prototype.shortColors={transparent:"rgba(0,0,0,0)",none:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},t.prototype.chainOptionMap={},t.prototype.callbacksMap={onRefresh:1,onStart:1,onComplete:1,onFirstUpdate:1,onUpdate:1,onProgress:1,onRepeatStart:1,onRepeatComplete:1,onPlaybackStart:1,onPlaybackPause:1,onPlaybackStop:1,onPlaybackComplete:1},t.prototype.tweenOptionMap={duration:1,delay:1,speed:1,repeat:1,easing:1,backwardEasing:1,isYoyo:1,shiftTime:1,isReversed:1,callbacksContext:1},t.prototype.unitOptionMap={left:1,top:1,x:1,y:1,rx:1,ry:1},t.prototype.RAD_TO_DEG=180/Math.PI,t.prototype.vars=function(){var t;return this.prefix=this.getPrefix(),this.getRemBase(),this.isFF="moz"===this.prefix.lowercase,this.isIE="ms"===this.prefix.lowercase,t=navigator.userAgent,this.isOldOpera=t.match(/presto/gim),this.isSafari=t.indexOf("Safari")>-1,this.isChrome=t.indexOf("Chrome")>-1,this.isOpera=t.toLowerCase().indexOf("op")>-1,this.isChrome&&this.isSafari&&(this.isSafari=!1),t.match(/PhantomJS/gim)&&(this.isSafari=!1),this.isChrome&&this.isOpera&&(this.isChrome=!1),this.is3d=this.checkIf3d(),this.uniqIDs=-1,this.div=document.createElement("div"),document.body.appendChild(this.div),this.defaultStyles=this.computedStyle(this.div)},t.prototype.cloneObj=function(t,e){var r,i,s,n;for(n={},r=(s=Object.keys(t)).length;r--;)i=s[r],null!=e?e[i]||(n[i]=t[i]):n[i]=t[i];return n},t.prototype.extend=function(t,e){var r;for(r in e)e[r],null==t[r]&&(t[r]=e[r]);return t},t.prototype.getRemBase=function(){var t,e;return t=document.querySelector("html"),e=getComputedStyle(t),this.remBase=parseFloat(e.fontSize)},t.prototype.clamp=function(t,e,r){return t<e?e:t>r?r:t},t.prototype.setPrefixedStyle=function(t,e,r){return"transform"===e&&(t.style[""+this.prefix.css+e]=r),t.style[e]=r},t.prototype.style=function(t,e,r){var i,s,n,o;if("object"==typeof e){for(n=(s=Object.keys(e)).length,o=[];n--;)r=e[i=s[n]],o.push(this.setPrefixedStyle(t,i,r));return o}return this.setPrefixedStyle(t,e,r)},t.prototype.prepareForLog=function(t){return(t=Array.prototype.slice.apply(t)).unshift("::"),t.unshift(this.logBadgeCss),t.unshift("%cmo·js%c"),t},t.prototype.log=function(){if(!1!==mojs.isDebug)return console.log.apply(console,this.prepareForLog(arguments))},t.prototype.warn=function(){if(!1!==mojs.isDebug)return console.warn.apply(console,this.prepareForLog(arguments))},t.prototype.error=function(){if(!1!==mojs.isDebug)return console.error.apply(console,this.prepareForLog(arguments))},t.prototype.parseUnit=function(t){var e,r,i,s,n;return"number"==typeof t?{unit:"px",isStrict:!1,value:t,string:0===t?""+t:t+"px"}:"string"==typeof t?(s=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim,n=null!=(i=t.match(s))?i[0]:void 0,r=!0,n||(n="px",r=!1),e=parseFloat(t),{unit:n,isStrict:r,value:e,string:0===e?""+e:""+e+n}):t},t.prototype.bind=function(t,e){var r,i;return i=function(){var i,s;return i=Array.prototype.slice.call(arguments),s=r.concat(i),t.apply(e,s)},r=Array.prototype.slice.call(arguments,2),i},t.prototype.getRadialPoint=function(t){var e,r,i;return null==t&&(t={}),e=.017453292519943295*(t.angle-90),r=null!=t.radiusX?t.radiusX:t.radius,i=null!=t.radiusY?t.radiusY:t.radius,{x:t.center.x+Math.cos(e)*r,y:t.center.y+Math.sin(e)*i}},t.prototype.getPrefix=function(){var t,e,r,i;return r=window.getComputedStyle(document.documentElement,""),i=Array.prototype.slice.call(r).join("").match(/-(moz|webkit|ms)-/),e=(i||""===r.OLink&&["","o"])[1],t="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],{dom:t,lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}},t.prototype.strToArr=function(t){var e;return e=[],"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){return function(r){return e.push(t.parseUnit(t.parseIfRand(r)))}}(this)),e):(e.push(this.parseUnit(t)),e)},t.prototype.calcArrDelta=function(t,e){var r,i,s,n;for(r=[],i=s=0,n=t.length;s<n;i=++s)t[i],r[i]=this.parseUnit(""+(e[i].value-t[i].value)+e[i].unit);return r},t.prototype.isArray=function(t){return t instanceof Array},t.prototype.normDashArrays=function(t,e){var r,i,s,n,o,a,p,u,l,h;if(r=t.length,i=e.length,r>i)for(p=r-i,h=e.length,n=o=0,u=p;0<=u?o<u:o>u;n=0<=u?++o:--o)s=n+h,e.push(this.parseUnit("0"+t[s].unit));else if(i>r)for(p=i-r,h=t.length,n=a=0,l=p;0<=l?a<l:a>l;n=0<=l?++a:--a)s=n+h,t.push(this.parseUnit("0"+e[s].unit));return[t,e]},t.prototype.makeColorObj=function(t){var e,r,i,s,n,o,a,p,u,l;return"#"===t[0]&&(i={},(u=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t))&&(o=2===u[1].length?u[1]:u[1]+u[1],s=2===u[2].length?u[2]:u[2]+u[2],r=2===u[3].length?u[3]:u[3]+u[3],i={r:parseInt(o,16),g:parseInt(s,16),b:parseInt(r,16),a:1})),"#"!==t[0]&&((n="r"===t[0]&&"g"===t[1]&&"b"===t[2])&&(l=t),n||(l=this.shortColors[t]?this.shortColors[t]:(this.div.style.color=t,this.computedStyle(this.div).color)),a="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",p="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",u=new RegExp(a+p,"gi").exec(l),i={},e=parseFloat(u[4]||1),u&&(i={r:parseInt(u[1],10),g:parseInt(u[2],10),b:parseInt(u[3],10),a:null==e||isNaN(e)?1:e})),i},t.prototype.computedStyle=function(t){return getComputedStyle(t)},t.prototype.capitalize=function(t){if("string"!=typeof t)throw Error("String expected - nothing to capitalize");return t.charAt(0).toUpperCase()+t.substring(1)},t.prototype.parseRand=function(t){var e,r,i;return r=t.split(/rand\(|\,|\)/),i=this.parseUnit(r[2]),e=this.rand(parseFloat(r[1]),parseFloat(r[2])),i.unit&&r[2].match(i.unit)?e+i.unit:e},t.prototype.parseStagger=function(t,e){var r,i,s,n,o,a;return a=t.split(/stagger\(|\)$/)[1].toLowerCase(),s=a.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim),a=s.length>3?(r=this.parseUnit(this.parseIfRand(s[1])),s[3]):(r=this.parseUnit(0),s[1]),a=this.parseIfRand(a),o=this.parseUnit(a),i=e*o.value+r.value,(n=r.isStrict?r.unit:o.isStrict?o.unit:"")?""+i+n:i},t.prototype.parseIfStagger=function(t,e){return"string"==typeof t&&t.match(/stagger/g)?this.parseStagger(t,e):t},t.prototype.parseIfRand=function(t){return"string"==typeof t&&t.match(/rand\(/)?this.parseRand(t):t},t.prototype.parseDelta=function(t,e,r){var i,s,n,o,a,p,u,l,h,c,f,d;if(e=this.cloneObj(e),null!=(n=e.easing)&&(n=mojs.easing.parseEasing(n)),delete e.easing,null!=(i=e.curve)&&(i=mojs.easing.parseEasing(i)),delete e.curve,c=Object.keys(e)[0],o=e[c],s={start:c},!isNaN(parseFloat(c))||c.match(/rand\(/)||c.match(/stagger\(/))if("strokeDasharray"===t||"strokeDashoffset"===t||"origin"===t){for(f=this.strToArr(c),a=this.strToArr(o),this.normDashArrays(f,a),u=l=0,h=f.length;l<h;u=++l)c=f[u],o=a[u],this.mergeUnits(c,o,t);s={type:"array",name:t,start:f,end:a,delta:this.calcArrDelta(f,a),easing:n,curve:i}}else this.callbacksMap[t]||this.tweenOptionMap[t]||(this.unitOptionMap[t]?(o=this.parseUnit(this.parseStringOption(o,r)),c=this.parseUnit(this.parseStringOption(c,r)),this.mergeUnits(c,o,t),s={type:"unit",name:t,start:c,end:o,delta:o.value-c.value,easing:n,curve:i}):(o=parseFloat(this.parseStringOption(o,r)),s={type:"number",name:t,start:c=parseFloat(this.parseStringOption(c,r)),end:o,delta:o-c,easing:n,curve:i}));else{if("strokeLinecap"===t)return this.warn("Sorry, stroke-linecap property is not animatable yet, using the start("+c+") value instead",e),s;s={type:"color",name:t,start:d=this.makeColorObj(c),end:p=this.makeColorObj(o),easing:n,curve:i,delta:{r:p.r-d.r,g:p.g-d.g,b:p.b-d.b,a:p.a-d.a}}}return s},t.prototype.mergeUnits=function(t,e,r){return!e.isStrict&&t.isStrict?(e.unit=t.unit,e.string=""+e.value+e.unit):e.isStrict&&!t.isStrict?(t.unit=e.unit,t.string=""+t.value+t.unit):e.isStrict&&t.isStrict&&e.unit!==t.unit?(t.unit=e.unit,t.string=""+t.value+t.unit,this.warn('Two different units were specified on "'+r+'" delta property, mo · js will fallback to end "'+e.unit+'" unit ')):void 0},t.prototype.rand=function(t,e){return Math.random()*(e-t)+t},t.prototype.isDOM=function(t){var e;return null!=t&&(e="number"==typeof t.nodeType&&"string"==typeof t.nodeName,"object"==typeof t&&e)},t.prototype.getChildElements=function(t){var e,r,i;for(r=[],i=(e=t.childNodes).length;i--;)1===e[i].nodeType&&r.unshift(e[i]);return r},t.prototype.delta=function(t,e){var r,i,s,n,o;if(o=typeof e,r="string"===(n=typeof t)||"number"===n&&!isNaN(t),i="string"===o||"number"===o&&!isNaN(e),r&&i)return s={},s[t]=e,s;this.error("delta method expects Strings or Numbers at input but got - "+t+", "+e)},t.prototype.getUniqID=function(){return++this.uniqIDs},t.prototype.parsePath=function(t){var e;return"string"==typeof t?"m"===t.charAt(0).toLowerCase()?((e=document.createElementNS(this.NS,"path")).setAttributeNS(null,"d",t),e):document.querySelector(t):t.style?t:void 0},t.prototype.closeEnough=function(t,e,r){return Math.abs(t-e)<r},t.prototype.checkIf3d=function(){var t,e,r;return t=document.createElement("div"),this.style(t,"transform","translateZ(0)"),r=t.style,e=this.prefix.css+"transform",""!==(null!=r[e]?r[e]:r.transform)},t.prototype.isObject=function(t){return null!==t&&"object"==typeof t},t.prototype.getDeltaEnd=function(t){var e;return e=Object.keys(t)[0],t[e]},t.prototype.getDeltaStart=function(t){return Object.keys(t)[0]},t.prototype.isTweenProp=function(t){return this.tweenOptionMap[t]||this.callbacksMap[t]},t.prototype.parseStringOption=function(t,e){return null==e&&(e=0),"string"==typeof t&&(t=this.parseIfStagger(t,e),t=this.parseIfRand(t)),t},t.prototype.getLastItem=function(t){return t[t.length-1]},t.prototype.parseEl=function(t){return i.isDOM(t)?t:("string"==typeof t&&(t=document.querySelector(t)),null===t&&i.error("Can't parse HTML element: ",t),t)},t.prototype.force3d=function(t){return this.setPrefixedStyle(t,"backface-visibility","hidden"),t},t.prototype.isDelta=function(t){var e;return e=this.isObject(t),!(!(e=e&&!t.unit)||this.isArray(t)||this.isDOM(t))},t}(),i=new r,t.exports=i},function(t,e,r){var i,s,n,o,a,p,u,l,h,c,f,d;i=r(73).default||r(73),p=r(85).default||r(85),n=r(86),l=r(87),f=r(88),c=r(89),h=r(90),o=r(91),a=r(92).default||r(92),u=r(93),d=r(71),s=function(){function t(){this.addShape=d.bind(this.addShape,this)}return t.prototype.bit=i,t.prototype.custom=p,t.prototype.circle=n,t.prototype.line=l,t.prototype.zigzag=f,t.prototype.rect=c,t.prototype.polygon=h,t.prototype.cross=o,t.prototype.equal=u,t.prototype.curve=a,t.prototype.getShape=function(t){return this[t]||d.error('no "'+t+'" shape available yet, please choose from this list:',["circle","line","zigzag","rect","polygon","cross","equal","curve"])},t.prototype.addShape=function(t,e){return this[t]=e},t}(),t.exports=new s},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(3)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(84)),u=i(r(71)),l=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){this._defaults={ns:"http://www.w3.org/2000/svg",tag:"ellipse",parent:document.body,ratio:1,radius:50,radiusX:null,radiusY:null,stroke:"hotpink","stroke-dasharray":"","stroke-dashoffset":"","stroke-linecap":"","stroke-width":2,"stroke-opacity":1,fill:"transparent","fill-opacity":1,width:0,height:0},this._drawMap=["stroke","stroke-width","stroke-opacity","stroke-dasharray","fill","stroke-dashoffset","stroke-linecap","fill-opacity","transform"]},e.prototype._vars=function(){this._state={},this._drawMapLength=this._drawMap.length},e.prototype._render=function(){this._isRendered||(this._isRendered=!0,this._createSVGCanvas(),this._setCanvasSize(),this._props.parent.appendChild(this._canvas))},e.prototype._createSVGCanvas=function(){var t=this._props;this._canvas=document.createElementNS(t.ns,"svg"),this.el=document.createElementNS(t.ns,t.tag),this._canvas.appendChild(this.el)},e.prototype._setCanvasSize=function(){this._props;var t=this._canvas.style;t.display="block",t.width="100%",t.height="100%",t.left="0px",t.top="0px"},e.prototype._draw=function(){this._props.length=this._getLength();this._state,this._props;for(var t=this._drawMapLength;t--;){var e=this._drawMap[t];switch(e){case"stroke-dasharray":case"stroke-dashoffset":this.castStrokeDash(e)}this._setAttrIfChanged(e,this._props[e])}this._state.radius=this._props.radius},e.prototype.castStrokeDash=function(t){var e=this._props;if(u.default.isArray(e[t])){for(var r="",i=0;i<e[t].length;i++){var n=e[t][i];r+=("%"===n.unit?this.castPercent(n.value):n.value)+" "}return e[t]="0 "===r?r="":r,e[t]=r}"object"===(0,s.default)(e[t])&&(r="%"===e[t].unit?this.castPercent(e[t].value):e[t].value,e[t]=0===r?r="":r)},e.prototype.castPercent=function(t){return t*(this._props.length/100)},e.prototype._setAttrIfChanged=function(t,e){this._state[t]!==e&&(this.el.setAttribute(t,e),this._state[t]=e)},e.prototype._getLength=function(){var t=this._props;return!(!this.el||!this.el.getTotalLength)&&this.el.getAttribute("d")?this.el.getTotalLength():2*(null!=t.radiusX?t.radiusX:t.radius)},e.prototype._getPointsPerimiter=function(t){for(var e=0,r=1;r<t.length;r++)e+=this._pointsDelta(t[r-1],t[r]);return e+=this._pointsDelta(t[0],u.default.getLastItem(t))},e.prototype._pointsDelta=function(t,e){var r=Math.abs(t.x-e.x),i=Math.abs(t.y-e.y);return Math.sqrt(r*r+i*i)},e.prototype._setSize=function(t,e){var r=this._props;r.width=t,r.height=e,this._draw()},e}(p.default);e.default=l},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(r(3));e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(77)),n=i(r(81)),o=i(r(3));e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,o.default)(e)));t.prototype=(0,n.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(s.default?(0,s.default)(t,e):t.__proto__=e)}},function(t,e,r){t.exports={default:r(78),__esModule:!0}},function(t,e,r){r(79),t.exports=r(14).Object.setPrototypeOf},function(t,e,r){var i=r(12);i(i.S,"Object",{setPrototypeOf:r(80).set})},function(t,e,r){var i=r(20),s=r(19),n=function(t,e){if(s(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=r(15)(Function.call,r(67).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return n(t,r),e?t.__proto__=r:i(t,r),t}}({},!1):void 0),check:n}},function(t,e,r){t.exports={default:r(82),__esModule:!0}},function(t,e,r){r(83);var i=r(14).Object;t.exports=function(t,e){return i.create(t,e)}},function(t,e,r){var i=r(12);i(i.S,"Object",{create:r(31)})},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(3)),n=i(r(74)),o=i(r(71)),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,n.default)(this,t),this._o=e,this._index=this._o.index||0,this._arrayPropertyMap={strokeDashoffset:1,strokeDasharray:1,origin:1},this._skipPropsDelta={timeline:1,prevChainModule:1,callbacksContext:1},this._declareDefaults(),this._extendDefaults(),this._vars(),this._render()}return t.prototype._declareDefaults=function(){this._defaults={}},t.prototype._vars=function(){this._progress=0,this._strokeDasharrayBuffer=[]},t.prototype._render=function(){},t.prototype._setProp=function(t,e){if("object"===(void 0===t?"undefined":(0,s.default)(t)))for(var r in t)this._assignProp(r,t[r]);else this._assignProp(t,e)},t.prototype._assignProp=function(t,e){this._props[t]=e},t.prototype._show=function(){var t=this._props;this.el&&(t.isSoftHide?this._showByTransform():this.el.style.display="block",this._isShown=!0)},t.prototype._hide=function(){this.el&&(this._props.isSoftHide?o.default.setPrefixedStyle(this.el,"transform","scale(0)"):this.el.style.display="none",this._isShown=!1)},t.prototype._showByTransform=function(){},t.prototype._parseOptionString=function(t){return"string"==typeof t&&t.match(/stagger/)&&(t=o.default.parseStagger(t,this._index)),"string"==typeof t&&t.match(/rand/)&&(t=o.default.parseRand(t)),t},t.prototype._parsePositionOption=function(t,e){return o.default.unitOptionMap[t]&&(e=o.default.parseUnit(e).string),e},t.prototype._parseStrokeDashOption=function(t,e){r=e;if(this._arrayPropertyMap[t]){var r=[];switch(void 0===e?"undefined":(0,s.default)(e)){case"number":r.push(o.default.parseUnit(e));break;case"string":for(var i=e.split(" "),n=0;n<i.length;n++)r.push(o.default.parseUnit(i[n]))}}return r},t.prototype._isDelta=function(t){var e=o.default.isObject(t);return!(!(e=e&&!t.unit)||o.default.isArray(t)||o.default.isDOM(t))},t.prototype._getDelta=function(t,e){var r;if("left"!==t&&"top"!==t||this._o.ctx||o.default.warn("Consider to animate x/y properties instead of left/top,\n        as it would be much more performant",e),!this._skipPropsDelta||!this._skipPropsDelta[t]){null!=(r=o.default.parseDelta(t,e,this._index)).type&&(this._deltas[t]=r);var i="object"===(0,s.default)(r.end)?0===r.end.value?0:r.end.string:r.end;this._props[t]=i}},t.prototype._extendDefaults=function(){this._props={},this._deltas={};for(var t in this._defaults){var e=null!=this._o[t]?this._o[t]:this._defaults[t];this._parseOption(t,e)}},t.prototype._tuneNewOptions=function(t){this._hide();for(var e in t)t&&delete this._deltas[e],this._o[e]=t[e],this._parseOption(e,t[e])},t.prototype._parseOption=function(t,e){if(this._isDelta(e)&&!this._skipPropsDelta[t]){this._getDelta(t,e);var r=o.default.getDeltaEnd(e);return this._assignProp(t,this._parseProperty(t,r))}this._assignProp(t,this._parseProperty(t,e))},t.prototype._parsePreArrayProperty=function(t,e){return e=this._parseOptionString(e),this._parsePositionOption(t,e)},t.prototype._parseProperty=function(t,e){return"parent"===t?o.default.parseEl(e):(e=this._parsePreArrayProperty(t,e),this._parseStrokeDashOption(t,e))},t.prototype._parseDeltaValues=function(t,e){var r={};for(var i in e){var s=e[i],n=this._parsePreArrayProperty(t,s);r[this._parsePreArrayProperty(t,i)]=n}return r},t.prototype._preparsePropValue=function(t,e){return this._isDelta(e)?this._parseDeltaValues(t,e):this._parsePreArrayProperty(t,e)},t.prototype._calcCurrentProps=function(t,e){for(var r in this._deltas){var i=this._deltas[r],s=!!i.curve,n=null==i.easing||s?t:i.easing(e);if("array"===i.type){var a;o.default.isArray(this._props[r])?(a=this._props[r]).length=0:a=[];for(var p=s?i.curve(e):null,u=0;u<i.delta.length;u++){var l=i.delta[u],h=s?p*(i.start[u].value+e*l.value):i.start[u].value+n*l.value;a.push({string:""+h+l.unit,value:h,unit:l.unit})}this._props[r]=a}else if("number"===i.type)this._props[r]=s?i.curve(e)*(i.start+e*i.delta):i.start+n*i.delta;else if("unit"===i.type){var c=s?i.curve(e)*(i.start.value+e*i.delta):i.start.value+n*i.delta;this._props[r]=""+c+i.end.unit}else if("color"===i.type){var f,d,_,y;if(s){var v=i.curve(e);f=parseInt(v*(i.start.r+e*i.delta.r),10),d=parseInt(v*(i.start.g+e*i.delta.g),10),_=parseInt(v*(i.start.b+e*i.delta.b),10),y=parseFloat(v*(i.start.a+e*i.delta.a))}else f=parseInt(i.start.r+n*i.delta.r,10),d=parseInt(i.start.g+n*i.delta.g,10),_=parseInt(i.start.b+n*i.delta.b,10),y=parseFloat(i.start.a+n*i.delta.a);this._props[r]="rgba("+f+","+d+","+_+","+y+")"}}},t.prototype._setProgress=function(t,e){this._progress=t,this._calcCurrentProps(t,e)},t}();e.default=a},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(75)),o=i(r(76)),a=function(t){function e(){return(0,s.default)(this,e),(0,n.default)(this,t.apply(this,arguments))}return(0,o.default)(e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.tag="path",this._defaults.parent=null;for(var e=0;e<this._drawMap.length;e++)"stroke-width"===this._drawMap[e]&&this._drawMap.splice(e,1)},e.prototype.getShape=function(){return""},e.prototype.getLength=function(){return 100},e.prototype._draw=function(){var e=this._props,r=this._state,i=r.radiusX!==e.radiusX,s=r.radiusY!==e.radiusY,n=r.radius!==e.radius;(i||s||n)&&(this.el.setAttribute("transform",this._getScale()),r.radiusX=e.radiusX,r.radiusY=e.radiusY,r.radius=e.radius),this._setAttrIfChanged("stroke-width",e["stroke-width"]/e.maxScale),t.prototype._draw.call(this)},e.prototype._render=function(){if(!this._isRendered){this._isRendered=!0,this._length=this.getLength();var t=this._props;t.parent.innerHTML='<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">'+this.getShape()+"</g></svg>",this._canvas=t.parent.querySelector("#js-mojs-shape-canvas"),this.el=t.parent.querySelector("#js-mojs-shape-el"),this._setCanvasSize()}},e.prototype._getScale=function(){var t=this._props,e=t.radiusX?t.radiusX:t.radius,r=t.radiusY?t.radiusY:t.radius;return t.scaleX=2*e/100,t.scaleY=2*r/100,t.maxScale=Math.max(t.scaleX,t.scaleY),t.shiftX=t.width/2-50*t.scaleX,t.shiftY=t.height/2-50*t.scaleY,"translate("+t.shiftX+", "+t.shiftY+")"+" scale("+t.scaleX+", "+t.scaleY+")"},e.prototype._getLength=function(){return this._length},e}(i(r(73)).default);e.default=a},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.shape="ellipse"},e.prototype._draw=function(){var t,r;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,r=null!=this._props.radiusY?this._props.radiusY:this._props.radius,this._setAttrIfChanged("rx",t),this._setAttrIfChanged("ry",r),this._setAttrIfChanged("cx",this._props.width/2),this._setAttrIfChanged("cy",this._props.height/2),e.__super__._draw.apply(this,arguments)},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*Math.PI*Math.sqrt((t*t+e*e)/2)},e}(),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="line"},e.prototype._draw=function(){var t,r,i;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,r=this._props.width/2,i=this._props.height/2,this._setAttrIfChanged("x1",r-t),this._setAttrIfChanged("x2",r+t),this._setAttrIfChanged("y1",i),this._setAttrIfChanged("y2",i),e.__super__._draw.apply(this,arguments)},e}(),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=3},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f,d,_,y;if(e.__super__._draw.apply(this,arguments),u=this._props,this._props.points&&(h=null!=this._props.radiusX?this._props.radiusX:this._props.radius,c=null!=this._props.radiusY?this._props.radiusY:this._props.radius,n=h===this._prevRadiusX,o=c===this._prevRadiusY,s=u.points===this._prevPoints,!(n&&o&&s))){for(t=u.width/2-h,r=_=u.height/2,d=2*h/(u.points-1),y=-1,p=-(i=Math.sqrt(d*d+c*c)),l="M"+t+", "+_+" ",a=0,f=u.points;0<=f?a<f:a>f;0<=f?++a:--a)l+="L"+t+", "+r+" ",t+=d,p+=i,r=-1===y?_-c:_,y=-y;return this._length=p,this.el.setAttribute("d",l),this._prevPoints=u.points,this._prevRadiusX=h,this._prevRadiusY=c}},e.prototype._getLength=function(){return this._length},e}(),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="rect",this._defaults.rx=0,this._defaults.ry=0},e.prototype._draw=function(){var t,r,i;return e.__super__._draw.apply(this,arguments),t=this._props,r=null!=t.radiusX?t.radiusX:t.radius,i=null!=t.radiusY?t.radiusY:t.radius,this._setAttrIfChanged("width",2*r),this._setAttrIfChanged("height",2*i),this._setAttrIfChanged("x",t.width/2-r),this._setAttrIfChanged("y",t.height/2-i),this._setAttrIfChanged("rx",t.rx),this._setAttrIfChanged("ry",t.ry)},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*(2*t+2*e)},e}(),t.exports=s},function(t,e,r){var i,s,n,o=function(t,e){function r(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},a={}.hasOwnProperty;i=r(73).default||r(73),n=r(71),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return o(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=3},e.prototype._draw=function(){var t,r,i,s,o,a,p,u,l,h,c,f,d,_,y;if(l=this._props,c=null!=this._props.radiusX?this._props.radiusX:this._props.radius,f=null!=this._props.radiusY?this._props.radiusY:this._props.radius,s=c===this._prevRadiusX,o=f===this._prevRadiusY,i=l.points===this._prevPoints,!(s&&o&&i)){for(y=360/this._props.points,null==this._radialPoints?this._radialPoints=[]:this._radialPoints.length=0,r=a=0,d=this._props.points;0<=d?a<d:a>d;r=0<=d?++a:--a)this._radialPoints.push(n.getRadialPoint({radius:this._props.radius,radiusX:this._props.radiusX,radiusY:this._props.radiusY,angle:r*y,center:{x:l.width/2,y:l.height/2}}));for(t="",r=p=0,u=(_=this._radialPoints).length;p<u;r=++p)h=_[r],t+=""+(0===r?"M":"L")+h.x.toFixed(4)+","+h.y.toFixed(4)+" ";this._prevPoints=l.points,this._prevRadiusX=c,this._prevRadiusY=f,this.el.setAttribute("d",t+="z")}return e.__super__._draw.apply(this,arguments)},e.prototype._getLength=function(){return this._getPointsPerimiter(this._radialPoints)},e}(),t.exports=s},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path"},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f;if(e.__super__._draw.apply(this,arguments),this._props,o=null!=this._props.radiusX?this._props.radiusX:this._props.radius,a=null!=this._props.radiusY?this._props.radiusY:this._props.radius,r=o===this._prevRadiusX,i=a===this._prevRadiusY,!r||!i)return p=this._props.width/2,h=this._props.height/2,u=p-o,l=p+o,s="M"+u+","+h+" L"+l+","+h,c=h-a,f=h+a,n="M"+p+","+c+" L"+p+","+f,t=s+" "+n,this.el.setAttribute("d",t),this._prevRadiusX=o,this._prevRadiusY=a},e.prototype._getLength=function(){var t,e;return t=null!=this._props.radiusX?this._props.radiusX:this._props.radius,e=null!=this._props.radiusY?this._props.radiusY:this._props.radius,2*(t+e)},e}(),t.exports=s},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(75)),o=i(r(76)),a=function(t){function e(){return(0,s.default)(this,e),(0,n.default)(this,t.apply(this,arguments))}return(0,o.default)(e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.tag="path"},e.prototype._draw=function(){t.prototype._draw.call(this);var e=this._props,r=null!=e.radiusX?e.radiusX:e.radius,i=null!=e.radiusY?e.radiusY:e.radius,s=r===this._prevRadiusX,n=i===this._prevRadiusY,o=e.points===this._prevPoints;if(!(s&&n&&o)){var a=e.width/2,p=e.height/2,u="M"+(a-r)+" "+p+" Q "+a+" "+(p-2*i)+" "+(a+r)+" "+p;this.el.setAttribute("d",u),this._prevPoints=e.points,this._prevRadiusX=r,this._prevRadiusY=i}},e.prototype._getLength=function(){var t=this._props,e=null!=t.radiusX?t.radiusX:t.radius,r=null!=t.radiusY?t.radiusY:t.radius,i=e+r,s=Math.sqrt((3*e+r)*(e+3*r));return.5*Math.PI*(3*i-s)},e}(i(r(73)).default);e.default=a},function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=r(73).default||r(73),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,i),e.prototype._declareDefaults=function(){return e.__super__._declareDefaults.apply(this,arguments),this._defaults.tag="path",this._defaults.points=2},e.prototype._draw=function(){var t,r,i,s,n,o,a,p,u,l,h,c,f,d,_,y;if(e.__super__._draw.apply(this,arguments),a=this._props,this._props.points&&(p=null!=this._props.radiusX?this._props.radiusX:this._props.radius,u=null!=this._props.radiusY?this._props.radiusY:this._props.radius,s=p===this._prevRadiusX,n=u===this._prevRadiusY,i=a.points===this._prevPoints,!(s&&n&&i))){for(h=this._props.width/2,d=this._props.height/2,c=h-p,f=h+p,t="",y=2*u/(this._props.points-1),_=d-u,r=o=0,l=this._props.points;0<=l?o<l:o>l;r=0<=l?++o:--o)t+="M"+c+", "+(d=""+(r*y+_))+" L"+f+", "+d+" ";return this.el.setAttribute("d",t),this._prevPoints=a.points,this._prevRadiusX=p,this._prevRadiusY=u}},e.prototype._getLength=function(){return 2*(null!=this._props.radiusX?this._props.radiusX:this._props.radius)},e}(),t.exports=s},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(95)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(84)),u=(i(r(99)),i(r(116))),l=(i(r(100)),i(r(101)),i(r(110)),r(71)),h=(r(73),r(72)),c=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){this._defaults={parent:document.body,className:"",shape:"circle",stroke:"transparent",strokeOpacity:1,strokeLinecap:"",strokeWidth:2,strokeDasharray:0,strokeDashoffset:0,fill:"deeppink",fillOpacity:1,isSoftHide:!0,isForce3d:!1,left:"50%",top:"50%",x:0,y:0,angle:0,scale:1,scaleX:null,scaleY:null,origin:"50% 50%",opacity:1,rx:0,ry:0,points:3,radius:50,radiusX:null,radiusY:null,isShowStart:!1,isShowEnd:!0,isRefreshState:!0,duration:400,width:null,height:null,isWithShape:!0,callbacksContext:this}},e.prototype.tune=function(e){return t.prototype.tune.call(this,e),this._getMaxSizeInChain(),this},e.prototype.then=function(e){return t.prototype.then.call(this,e),this._getMaxSizeInChain(),this},e.prototype._vars=function(){return t.prototype._vars.call(this),this._lastSet={},this._prevChainModule=this._o.prevChainModule,this.isForeign=!!this._o.ctx,this.isForeignBit=!!this._o.shape},e.prototype._render=function(){return this._isRendered||this._isChained?this._isChained&&(this.el=this._masterModule.el,this.shapeModule=this._masterModule.shapeModule):(this.el=document.createElement("div"),this.el.setAttribute("data-name","mojs-shape"),this.el.setAttribute("class",this._props.className),this._createShape(),this._props.parent.appendChild(this.el),this._setElStyles(),this._setProgress(0,0),this._props.isShowStart?this._show():this._hide(),this._isRendered=!0),this},e.prototype._setElStyles=function(){if(this.el){var t=this._props,e=this.el.style,r=t.shapeWidth,i=t.shapeHeight;if(e.position="absolute",this._setElSizeStyles(r,i),t.isForce3d){var s="backface-visibility";e[""+s]="hidden",e[""+l.prefix.css+s]="hidden"}}},e.prototype._setElSizeStyles=function(t,e){var r=this.el.style;r.width=t+"px",r.height=e+"px",r["margin-left"]=-t/2+"px",r["margin-top"]=-e/2+"px"},e.prototype._draw=function(){if(this.shapeModule){var t=this._props,e=this.shapeModule._props;e.rx=t.rx,e.ry=t.ry,e.stroke=t.stroke,e["stroke-width"]=t.strokeWidth,e["stroke-opacity"]=t.strokeOpacity,e["stroke-dasharray"]=t.strokeDasharray,e["stroke-dashoffset"]=t.strokeDashoffset,e["stroke-linecap"]=t.strokeLinecap,e.fill=t.fill,e["fill-opacity"]=t.fillOpacity,e.radius=t.radius,e.radiusX=t.radiusX,e.radiusY=t.radiusY,e.points=t.points,this.shapeModule._draw(),this._drawEl()}},e.prototype._drawEl=function(){if(null==this.el)return!0;var t=this._props,e=this.el.style;if(this._isPropChanged("opacity")&&(e.opacity=t.opacity),!this.isForeign){this._isPropChanged("left")&&(e.left=t.left),this._isPropChanged("top")&&(e.top=t.top);var r=this._isPropChanged("x"),i=this._isPropChanged("y"),s=r||i,n=this._isPropChanged("scaleX"),o=this._isPropChanged("scaleY"),a=(a=this._isPropChanged("scale"))||n||o,p=this._isPropChanged("angle");if(s||a||p){var u=this._fillTransform();e[l.prefix.css+"transform"]=u,e.transform=u}if(this._isPropChanged("origin")||this._deltas.origin){var h=this._fillOrigin();e[l.prefix.css+"transform-origin"]=h,e["transform-origin"]=h}}},e.prototype._isPropChanged=function(t){return null==this._lastSet[t]&&(this._lastSet[t]={}),this._lastSet[t].value!==this._props[t]&&(this._lastSet[t].value=this._props[t],!0)},e.prototype._tuneNewOptions=function(e){if(t.prototype._tuneNewOptions.call(this,e),null==e||!(0,s.default)(e).length)return 1;this._setElStyles()},e.prototype._getMaxRadius=function(t){var e;return e=this._getRadiusSize("radius"),this._getRadiusSize(t,e)},e.prototype._increaseSizeWithEasing=function(){var t=this._props,e=this._o.easing;switch(e&&"string"==typeof e&&e.toLowerCase()){case"elastic.out":case"elastic.inout":t.size*=1.25;break;case"back.out":case"back.inout":t.size*=1.1}},e.prototype._getRadiusSize=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this._deltas[t];return null!=r?Math.max(Math.abs(r.end),Math.abs(r.start)):null!=this._props[t]?parseFloat(this._props[t]):e},e.prototype._getShapeSize=function(){var t=this._props,e=this._getMaxStroke();t.shapeWidth=null!=t.width?t.width:2*this._getMaxRadius("radiusX")+e,t.shapeHeight=null!=t.height?t.height:2*this._getMaxRadius("radiusY")+e},e.prototype._createShape=function(){if(this._getShapeSize(),this._props.isWithShape){var t=this._props,e=h.getShape(this._props.shape);this.shapeModule=new e({width:t.shapeWidth,height:t.shapeHeight,parent:this.el})}},e.prototype._getMaxSizeInChain=function(){this._props;for(var t=0,e=0,r=0;r<this._modules.length;r++)this._modules[r]._getShapeSize(),t=Math.max(t,this._modules[r]._props.shapeWidth),e=Math.max(e,this._modules[r]._props.shapeHeight);this.shapeModule&&this.shapeModule._setSize(t,e),this._setElSizeStyles(t,e)},e.prototype._getMaxStroke=function(){var t=this._props,e=this._deltas.strokeWidth;return null!=e?Math.max(e.start,e.end):t.strokeWidth},e.prototype._setProgress=function(t,e){p.default.prototype._setProgress.call(this,t,e),this._draw(t)},e.prototype._applyCallbackOverrides=function(t){var e=this,r=this._props;t.callbackOverrides={onUpdate:function(t,r){return e._setProgress(t,r)},onStart:function(t){e._isChained||(t?e._show():r.isShowStart||e._hide())},onComplete:function(t){e._isLastInChain()&&(t?r.isShowEnd||e._hide():e._show())},onRefresh:function(t){r.isRefreshState&&t&&e._refreshBefore()}}},e.prototype._transformTweenOptions=function(){this._applyCallbackOverrides(this._o)},e.prototype._fillTransform=function(){var t=this._props,e=(null!=t.scaleX?t.scaleX:t.scale)+", "+(null!=t.scaleY?t.scaleY:t.scale);return"translate("+t.x+", "+t.y+") rotate("+t.angle+"deg) scale("+e+")"},e.prototype._fillOrigin=function(){for(var t=this._props,e="",r=0;r<t.origin.length;r++)e+=t.origin[r].string+" ";return e},e.prototype._refreshBefore=function(){this._setProgress(this.tween._props.easing(0),0),this._props.isShowStart?this._show():this._hide()},e.prototype._showByTransform=function(){this._lastSet.scale=null,this._drawEl()},e}(u.default);e.default=c},function(t,e,r){t.exports={default:r(96),__esModule:!0}},function(t,e,r){r(97),t.exports=r(14).Object.keys},function(t,e,r){var i=r(49),s=r(33);r(98)("keys",function(){return function(t){return s(i(t))}})},function(t,e,r){var i=r(12),s=r(14),n=r(23);t.exports=function(t,e){var r=(s.Object||{})[t]||Object[t],o={};o[t]=e(r),i(i.S+i.F*n(function(){r(1)}),"Object",o)}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(95)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(100)),u=i(r(71)),l=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype.then=function(t){if(null==t||!(0,s.default)(t).length)return 1;var e=this._history[this._history.length-1],r=(this._modules[this._modules.length-1],this._mergeThenOptions(e,t));this._resetMergedFlags(r);var i=new this.constructor(r);return i._masterModule=this,this._modules.push(i),this.timeline.append(i),this},e.prototype._resetMergedFlags=function(t){return t.isTimelineLess=!0,t.isShowStart=!1,t.isRefreshState=!1,t.callbacksContext=this._props.callbacksContext||this,t.prevChainModule=u.default.getLastItem(this._modules),t.masterModule=this,t},e.prototype._vars=function(){t.prototype._vars.call(this),this._masterModule=this._o.masterModule,this._isChained=!!this._masterModule;var e=u.default.cloneObj(this._props);for(var r in this._arrayPropertyMap)if(this._o[r]){var i=this._parsePreArrayProperty(r,this._o[r]);e[r]=i}this._history=[e],this._modules=[this],this._nonMergeProps={shape:1}},e.prototype._mergeThenOptions=function(t,e){var r={};return this._mergeStartLoop(r,t),this._mergeEndLoop(r,t,e),this._history.push(r),r},e.prototype._checkStartValue=function(t,e){return e},e.prototype._mergeStartLoop=function(t,e){for(var r in e){var i=e[r];null!=e[r]&&(u.default.isTweenProp(r)&&"duration"!==r||(this._isDelta(i)?t[r]=u.default.getDeltaEnd(i):t[r]=i))}},e.prototype._mergeEndLoop=function(t,e,r){(0,s.default)(r);for(var i in r)if("parent"!=i){var n=r[i],o=null!=e[i]?e[i]:this._defaults[i];if(o=this._checkStartValue(i,o),null!=n){var a="radiusX"===i||"radiusY"===i;a&&null==o&&(o=e.radius),(a="scaleX"===i||"scaleY"===i)&&null==o&&(o=e.scale),t[i]=this._mergeThenProperty(i,o,n)}}else t[i]=r[i]},e.prototype._mergeThenProperty=function(t,e,r){var i,s,n="boolean"==typeof r;if(u.default.isTweenProp(t)||this._nonMergeProps[t]||n)return r;if(u.default.isObject(r)&&null!=r.to&&(i=r.curve,s=r.easing,r=r.to),this._isDelta(r))return this._parseDeltaValues(t,r);var o=this._parsePreArrayProperty(t,r);if(this._isDelta(e)){var a;return a={},a[u.default.getDeltaEnd(e)]=o,a.easing=s,a.curve=i,a}var p;return p={},p[e]=o,p.easing=s,p.curve=i,p},e.prototype._getArrayLength=function(t){return u.default.isArray(t)?t.length:-1},e.prototype._isDelta=function(t){var e=u.default.isObject(t);return!(!(e=e&&!t.unit)||u.default.isArray(t)||u.default.isDOM(t))},e.prototype._isFirstInChain=function(){return!this._masterModule},e.prototype._isLastInChain=function(){var t=this._masterModule;return t?this===u.default.getLastItem(t._modules):1===this._modules.length},e}(p.default);e.default=l},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(75)),o=i(r(76)),a=i(r(101)),p=i(r(110)),u=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(this,e);var i=(0,n.default)(this,t.call(this,r));return i._transformTweenOptions(),!i._o.isTweenLess&&i._makeTween(),!i._o.isTimelineLess&&i._makeTimeline(),i}return(0,o.default)(e,t),e.prototype.play=function(){return this.timeline.play.apply(this.timeline,arguments),this},e.prototype.playBackward=function(){return this.timeline.playBackward.apply(this.timeline,arguments),this},e.prototype.pause=function(){return this.timeline.pause.apply(this.timeline,arguments),this},e.prototype.stop=function(){return this.timeline.stop.apply(this.timeline,arguments),this},e.prototype.reset=function(){return this.timeline.reset.apply(this.timeline,arguments),this},e.prototype.replay=function(){return this.timeline.replay.apply(this.timeline,arguments),this},e.prototype.replayBackward=function(){return this.timeline.replayBackward.apply(this.timeline,arguments),this},e.prototype.resume=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.timeline.resume.apply(this.timeline,arguments),this},e.prototype.setProgress=function(){return this.timeline.setProgress.apply(this.timeline,arguments),this},e.prototype.setSpeed=function(t){return this.timeline.setSpeed.apply(this.timeline,arguments),this},e.prototype._transformTweenOptions=function(){},e.prototype._makeTween=function(){this._o.callbacksContext=this._o.callbacksContext||this,this.tween=new a.default(this._o),this._o.isTimelineLess&&(this.timeline=this.tween)},e.prototype._makeTimeline=function(){this._o.timeline=this._o.timeline||{},this._o.timeline.callbacksContext=this._o.callbacksContext||this,this.timeline=new p.default(this._o.timeline),this._isTimeline=!0,this.tween&&this.timeline.add(this.tween)},e}(i(r(84)).default);e.default=u},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(75)),o=i(r(76)),a=(i(r(71)),i(r(102))),p=i(r(105)),u=function(t){function e(){var r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(this,e);var o=(0,n.default)(this,t.call(this,i));return null==o._props.name&&o._setSelfName(),r=o,(0,n.default)(o,r)}return(0,o.default)(e,t),e.prototype._declareDefaults=function(){this._defaults={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,name:null,nameBase:"Tween",onProgress:null,onStart:null,onRefresh:null,onComplete:null,onRepeatStart:null,onRepeatComplete:null,onFirstUpdate:null,onUpdate:null,isChained:!1,onPlaybackStart:null,onPlaybackPause:null,onPlaybackStop:null,onPlaybackComplete:null,callbacksContext:null}},e.prototype.play=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"play"===this._state&&this._isRunning?this:(this._props.isReversed=!1,this._subPlay(t,"play"),this._setPlaybackState("play"),this)},e.prototype.playBackward=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"reverse"===this._state&&this._isRunning?this:(this._props.isReversed=!0,this._subPlay(t,"reverse"),this._setPlaybackState("reverse"),this)},e.prototype.pause=function(){return"pause"===this._state||"stop"===this._state?this:(this._removeFromTweener(),this._setPlaybackState("pause"),this)},e.prototype.stop=function(t){if("stop"===this._state)return this;this._wasUknownUpdate=void 0;var e=null!=t?t:"reverse"===this._state?1:0;return this.setProgress(e),this.reset(),this},e.prototype.replay=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.reset(),this.play(t),this},e.prototype.replayBackward=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.reset(),this.playBackward(t),this},e.prototype.resume=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if("pause"!==this._state)return this;switch(this._prevState){case"play":this.play(t);break;case"reverse":this.playBackward(t)}return this},e.prototype.setProgress=function(t){var e=this._props;return!e.startTime&&this._setStartTime(),this._playTime=null,t<0&&(t=0),t>1&&(t=1),this._update(e.startTime-e.delay+t*e.repeatTime),this},e.prototype.setSpeed=function(t){return this._props.speed=t,"play"!==this._state&&"reverse"!==this._state||this._setResumeTime(this._state),this},e.prototype.reset=function(){return this._removeFromTweener(),this._setPlaybackState("stop"),this._progressTime=0,this._isCompleted=!1,this._isStarted=!1,this._isFirstUpdate=!1,this._wasUknownUpdate=void 0,this._prevTime=void 0,this._prevYoyo=void 0,this._props.isReversed=!1,this},e.prototype._subPlay=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],r=this._props,i=this._state,s=this._prevState,n="pause"===i,o="play"===i||n&&"play"===s,p="reverse"===i||n&&"reverse"===s,u=o&&"reverse"===e||p&&"play"===e;return this._progressTime=this._progressTime>=r.repeatTime?0:this._progressTime,u&&(this._progressTime=r.repeatTime-this._progressTime),this._setResumeTime(e,t),a.default.add(this),this},e.prototype._setResumeTime=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this._resumeTime=performance.now();var r=this._resumeTime-Math.abs(e)-this._progressTime;this._setStartTime(r,!1),null!=this._prevTime&&(this._prevTime="play"===t?this._normPrevTimeForward():this._props.endTime-this._progressTime)},e.prototype._normPrevTimeForward=function(){var t=this._props;return t.startTime+this._progressTime-t.delay},e.prototype._setSelfName=function(){var t="_"+this._props.nameBase+"s";a.default[t]=null==a.default[t]?1:++a.default[t],this._props.name=this._props.nameBase+" "+a.default[t]},e.prototype._setPlaybackState=function(t){this._prevState=this._state,this._state=t;var e="pause"===this._prevState,r="stop"===this._prevState,i="play"===this._prevState,s="reverse"===this._prevState,n=i||s,o=r||e;"play"!==t&&"reverse"!==t||!o||this._playbackStart(),"pause"===t&&n&&this._playbackPause(),"stop"===t&&(n||e)&&this._playbackStop()},e.prototype._vars=function(){return this.progress=0,this._prevTime=void 0,this._progressTime=0,this._negativeShift=0,this._state="stop",this._props.delay<0&&(this._negativeShift=this._props.delay,this._props.delay=0),this._calcDimentions()},e.prototype._calcDimentions=function(){this._props.time=this._props.duration+this._props.delay,this._props.repeatTime=this._props.time*(this._props.repeat+1)},e.prototype._extendDefaults=function(){this._callbackOverrides=this._o.callbackOverrides||{},delete this._o.callbackOverrides,t.prototype._extendDefaults.call(this);var e=this._props;e.easing=p.default.parseEasing(e.easing),e.easing._parent=this,null!=e.backwardEasing&&(e.backwardEasing=p.default.parseEasing(e.backwardEasing),e.backwardEasing._parent=this)},e.prototype._setStartTime=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this._props,i=r.shiftTime||0;e&&(this._isCompleted=!1,this._isRepeatCompleted=!1,this._isStarted=!1);var s=null==t?performance.now():t;return r.startTime=s+r.delay+this._negativeShift+i,r.endTime=r.startTime+r.repeatTime-r.delay,this._playTime=null!=this._resumeTime?this._resumeTime:s+i,this._resumeTime=null,this},e.prototype._update=function(t,e,r,i){var s=this._props;null==this._prevTime&&null!=e&&(this._props.speed&&this._playTime&&(this._prevTime=this._playTime+this._props.speed*(e-this._playTime)),this._wasUknownUpdate=!0);var n=s.startTime-s.delay;if(s.speed&&this._playTime&&(t=this._playTime+s.speed*(t-this._playTime)),Math.abs(s.endTime-t)<1e-8&&(t=s.endTime),i&&null!=r){var o=this._getPeriod(t),a=!(!s.isYoyo||!this._props.repeat||o%2!=1);if(this._timelines)for(var p=0;p<this._timelines.length;p++)this._timelines[p]._update(t,e,r,i);1===i?r?(this._prevTime=t+1,this._repeatStart(t,a),this._start(t,a)):(this._prevTime=t-1,this._repeatComplete(t,a),this._complete(t,a)):-1===i&&(r?(this._prevTime=t-1,this._repeatComplete(t,a),this._complete(t,a)):this._prevTime>=s.startTime&&this._prevTime<=s.endTime&&(this._prevTime=t+1,this._repeatStart(t,a),this._start(t,a),this._isCompleted=!0)),this._prevTime=void 0}return t>n&&t<s.endTime?this._progressTime=t-n:t<=n?this._progressTime=0:t>=s.endTime&&(this._progressTime=s.repeatTime+1e-11),s.isReversed&&(t=s.endTime-this._progressTime),null==this._prevTime?(this._prevTime=t,this._wasUknownUpdate=!0,!1):(t>=n&&t<=s.endTime&&this._progress((t-n)/s.repeatTime,t),t>=s.startTime&&t<=s.endTime?this._updateInActiveArea(t):this._isInActiveArea?this._updateInInactiveArea(t):this._isRefreshed||t<s.startTime&&0!==this.progress&&(this._refresh(!0),this._isRefreshed=!0),this._prevTime=t,t>=s.endTime||t<=n)},e.prototype._updateInInactiveArea=function(t){if(this._isInActiveArea){var e=this._props;if(t>e.endTime&&!this._isCompleted){this._progress(1,t);var r=this._getPeriod(e.endTime),i=e.isYoyo&&r%2==0;this._setProgress(i?0:1,t,i),this._repeatComplete(t,i),this._complete(t,i)}t<this._prevTime&&t<e.startTime&&!this._isStarted&&!this._isCompleted&&(this._progress(0,t,!1),this._setProgress(0,t,!1),this._isRepeatStart=!1,this._repeatStart(t,!1),this._start(t,!1)),this._isInActiveArea=!1}},e.prototype._updateInActiveArea=function(t){var e=this._props,r=e.delay+e.duration,i=e.startTime-e.delay,s=(t-e.startTime+e.delay)%r,n=Math.round((e.endTime-e.startTime+e.delay)/r),o=this._getPeriod(t),a=this._delayT,p=this._getPeriod(this._prevTime),u=this._delayT,l=e.isYoyo&&o%2==1,h=e.isYoyo&&p%2==1,c=l?1:0;if(t===e.endTime){this._wasUknownUpdate=!1;l=e.isYoyo&&(o-1)%2==1;return this._setProgress(l?0:1,t,l),t>this._prevTime&&(this._isRepeatCompleted=!1),this._repeatComplete(t,l),this._complete(t,l)}if(this._isCompleted=!1,this._isRefreshed=!1,i+s>=e.startTime){this._isInActiveArea=!0,this._isRepeatCompleted=!1,this._isRepeatStart=!1,this._isStarted=!1;var f=(t-e.startTime)%r/e.duration,d=o>0&&p<o,_=p>o;if(this._onEdge=0,d&&(this._onEdge=1),_&&(this._onEdge=-1),this._wasUknownUpdate&&(t>this._prevTime&&(this._start(t,l),this._repeatStart(t,l),this._firstUpdate(t,l)),t<this._prevTime&&(this._complete(t,l),this._repeatComplete(t,l),this._firstUpdate(t,l),this._isCompleted=!1)),d){if(1!==this.progress){var y=e.isYoyo&&(o-1)%2==1;this._repeatComplete(t,y)}p>=0&&this._repeatStart(t,l)}t>this._prevTime&&(!this._isStarted&&this._prevTime<=e.startTime&&(this._start(t,l),this._repeatStart(t,l),this._isStarted=!1,this._isRepeatStart=!1),this._firstUpdate(t,l)),_&&(0!==this.progress&&1!==this.progress&&p!=n&&this._repeatStart(t,h),p!==n||this._wasUknownUpdate||(this._complete(t,l),this._repeatComplete(t,l),this._firstUpdate(t,l),this._isCompleted=!1),this._repeatComplete(t,l)),"delay"===p&&(o<u&&this._repeatComplete(t,l),o===u&&o>0&&this._repeatStart(t,l)),t>this._prevTime?(0===f&&this._repeatStart(t,l),t!==e.endTime&&this._setProgress(l?1-f:f,t,l)):(t!==e.endTime&&this._setProgress(l?1-f:f,t,l),0===f&&this._repeatStart(t,l)),t===e.startTime&&this._start(t,l)}else if(this._isInActiveArea){var v="delay"===o?a:o,m=t>this._prevTime;m&&v--,c=e.isYoyo&&v%2==1?1:0,t<this._prevTime&&(this._setProgress(c,t,1===c),this._repeatStart(t,1===c)),this._setProgress(m?1-c:c,t,1===c),t>this._prevTime&&(0===this.progress&&1!==c||this._repeatComplete(t,1===c)),this._isInActiveArea=!1}this._wasUknownUpdate=!1},e.prototype._removeFromTweener=function(){return a.default.remove(this),this},e.prototype._getPeriod=function(t){var e=this._props,r=e.delay+e.duration,i=e.delay+t-e.startTime,s=i/r,n=t<e.endTime?i%r:0;return s=t>=e.endTime?Math.round(s):Math.floor(s),t>e.endTime?s=Math.round((e.endTime-e.startTime+e.delay)/r):n>0&&n<e.delay&&(this._delayT=s,s="delay"),s},e.prototype._setProgress=function(t,e,r){var i=this._props,s=i.wasYoyo!==r,n=e>this._prevTime;if(this.progress=t,n&&!r||!n&&r)this.easedProgress=i.easing(t);else if(!n&&!r||n&&r){var o=null!=i.backwardEasing?i.backwardEasing:i.easing;this.easedProgress=o(t)}return(i.prevEasedProgress!==this.easedProgress||s)&&null!=i.onUpdate&&"function"==typeof i.onUpdate&&i.onUpdate.call(i.callbacksContext||this,this.easedProgress,this.progress,n,r),i.prevEasedProgress=this.easedProgress,i.wasYoyo=r,this},e.prototype._start=function(t,e){if(!this._isStarted){var r=this._props;null!=r.onStart&&"function"==typeof r.onStart&&r.onStart.call(r.callbacksContext||this,t>this._prevTime,e),this._isCompleted=!1,this._isStarted=!0,this._isFirstUpdate=!1}},e.prototype._playbackStart=function(){var t=this._props;null!=t.onPlaybackStart&&"function"==typeof t.onPlaybackStart&&t.onPlaybackStart.call(t.callbacksContext||this)},e.prototype._playbackPause=function(){var t=this._props;null!=t.onPlaybackPause&&"function"==typeof t.onPlaybackPause&&t.onPlaybackPause.call(t.callbacksContext||this)},e.prototype._playbackStop=function(){var t=this._props;null!=t.onPlaybackStop&&"function"==typeof t.onPlaybackStop&&t.onPlaybackStop.call(t.callbacksContext||this)},e.prototype._playbackComplete=function(){var t=this._props;null!=t.onPlaybackComplete&&"function"==typeof t.onPlaybackComplete&&t.onPlaybackComplete.call(t.callbacksContext||this)},e.prototype._complete=function(t,e){if(!this._isCompleted){var r=this._props;null!=r.onComplete&&"function"==typeof r.onComplete&&r.onComplete.call(r.callbacksContext||this,t>this._prevTime,e),this._isCompleted=!0,this._isStarted=!1,this._isFirstUpdate=!1,this._prevYoyo=void 0}},e.prototype._firstUpdate=function(t,e){if(!this._isFirstUpdate){var r=this._props;null!=r.onFirstUpdate&&"function"==typeof r.onFirstUpdate&&(r.onFirstUpdate.tween=this,r.onFirstUpdate.call(r.callbacksContext||this,t>this._prevTime,e)),this._isFirstUpdate=!0}},e.prototype._repeatComplete=function(t,e){if(!this._isRepeatCompleted){var r=this._props;null!=r.onRepeatComplete&&"function"==typeof r.onRepeatComplete&&r.onRepeatComplete.call(r.callbacksContext||this,t>this._prevTime,e),this._isRepeatCompleted=!0}},e.prototype._repeatStart=function(t,e){if(!this._isRepeatStart){var r=this._props;null!=r.onRepeatStart&&"function"==typeof r.onRepeatStart&&r.onRepeatStart.call(r.callbacksContext||this,t>this._prevTime,e),this._isRepeatStart=!0}},e.prototype._progress=function(t,e){var r=this._props;null!=r.onProgress&&"function"==typeof r.onProgress&&r.onProgress.call(r.callbacksContext||this,t,e>this._prevTime)},e.prototype._refresh=function(t){var e=this._props;if(null!=e.onRefresh){var r=e.callbacksContext||this,i=t?0:1;e.onRefresh.call(r,t,e.easing(i),i)}},e.prototype._onTweenerRemove=function(){},e.prototype._onTweenerFinish=function(){this._setPlaybackState("stop"),this._playbackComplete()},e.prototype._setProp=function(e,r){t.prototype._setProp.call(this,e,r),this._calcDimentions()},e.prototype._assignProp=function(e,r){null==r&&(r=this._defaults[e]),"easing"===e&&((r=p.default.parseEasing(r))._parent=this);var i=this._callbackOverrides[e],s=!r||!r.isMojsCallbackOverride;i&&s&&(r=this._overrideCallback(r,i)),t.prototype._assignProp.call(this,e,r)},e.prototype._overrideCallback=function(t,e){var r=t&&"function"==typeof t,i=function(){r&&t.apply(this,arguments),e.apply(this,arguments)};return i.isMojsCallbackOverride=!0,i},e}(i(r(84)).default);e.default=u},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74));r(103),r(104);i(r(71));var n=new(function(){function t(){return(0,s.default)(this,t),this._vars(),this._listenVisibilityChange(),this}return t.prototype._vars=function(){this.tweens=[],this._savedTweens=[],this._loop=this._loop.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this)},t.prototype._loop=function(){return!!this._isRunning&&(this._update(window.performance.now()),this.tweens.length?(requestAnimationFrame(this._loop),this):this._isRunning=!1)},t.prototype._startLoop=function(){this._isRunning||(this._isRunning=!0,requestAnimationFrame(this._loop))},t.prototype._stopLoop=function(){this._isRunning=!1},t.prototype._update=function(t){for(var e=this.tweens.length;e--;){var r=this.tweens[e];r&&!0===r._update(t)&&(this.remove(r),r._onTweenerFinish(),r._prevTime=void 0)}},t.prototype.add=function(t){t._isRunning||(t._isRunning=!0,this.tweens.push(t),this._startLoop())},t.prototype.removeAll=function(){this.tweens.length=0},t.prototype.remove=function(t){var e="number"==typeof t?t:this.tweens.indexOf(t);-1!==e&&(t=this.tweens[e])&&(t._isRunning=!1,this.tweens.splice(e,1),t._onTweenerRemove())},t.prototype._listenVisibilityChange=function(){void 0!==document.hidden?(this._visibilityHidden="hidden",this._visibilityChange="visibilitychange"):void 0!==document.mozHidden?(this._visibilityHidden="mozHidden",this._visibilityChange="mozvisibilitychange"):void 0!==document.msHidden?(this._visibilityHidden="msHidden",this._visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this._visibilityHidden="webkitHidden",this._visibilityChange="webkitvisibilitychange"),document.addEventListener(this._visibilityChange,this._onVisibilityChange,!1)},t.prototype._onVisibilityChange=function(){document[this._visibilityHidden]?this._savePlayingTweens():this._restorePlayingTweens()},t.prototype._savePlayingTweens=function(){this._savedTweens=this.tweens.slice(0);for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].pause()},t.prototype._restorePlayingTweens=function(){for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].resume()},t}());e.default=n},function(t,e){!function(){"use strict";var t,e,r,i,s,n,o;for(s=["webkit","moz"],e=0,o=window;e<s.length&&!o.requestAnimationFrame;)n=s[e],o.requestAnimationFrame=o[n+"RequestAnimationFrame"],t=o[n+"CancelAnimationFrame"],o.cancelAnimationFrame=t||o[n+"CancelRequestAnimationFrame"],++e;r=!o.requestAnimationFrame||!o.cancelAnimationFrame,(/iP(ad|hone|od).*OS 6/.test(o.navigator.userAgent)||r)&&(i=0,o.requestAnimationFrame=function(t){var e,r;return r=Date.now(),e=Math.max(i+16,r),setTimeout(function(){t(i=e)},e-r)},o.cancelAnimationFrame=clearTimeout)}()},function(t,e){!function(t){var e,r,i;if(null==t.performance&&(t.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},null==t.performance.now)e=(null!=(r=t.performance)&&null!=(i=r.timing)?i.navigationStart:void 0)?performance.timing.navigationStart:Date.now(),t.performance.now=function(){return Date.now()-e}}(window)},function(t,e,r){var i,s,n,o,a,p,u,l,h;a=r(106),n=r(107),l=r(108),u=r(71),o=r(109).default||r(109),h=Math.sin,s=Math.PI,i=function(){function t(){}return t.prototype.bezier=a,t.prototype.PathEasing=n,t.prototype.path=new n("creator").create,t.prototype.approximate=o,t.prototype.inverse=function(t){return 1-t},t.prototype.linear={none:function(t){return t}},t.prototype.ease={in:a.apply(t,[.42,0,1,1]),out:a.apply(t,[0,0,.58,1]),inout:a.apply(t,[.42,0,.58,1])},t.prototype.sin={in:function(t){return 1-Math.cos(t*s/2)},out:function(t){return h(t*s/2)},inout:function(t){return.5*(1-Math.cos(s*t))}},t.prototype.quad={in:function(t){return t*t},out:function(t){return t*(2-t)},inout:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},t.prototype.cubic={in:function(t){return t*t*t},out:function(t){return--t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},t.prototype.quart={in:function(t){return t*t*t*t},out:function(t){return 1- --t*t*t*t},inout:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},t.prototype.quint={in:function(t){return t*t*t*t*t},out:function(t){return--t*t*t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},t.prototype.expo={in:function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},t.prototype.circ={in:function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.prototype.back={in:function(t){var e;return e=1.70158,t*t*((e+1)*t-e)},out:function(t){var e;return e=1.70158,--t*t*((e+1)*t+e)+1},inout:function(t){var e;return e=2.5949095,(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},t.prototype.elastic={in:function(t){var e;return e=void 0,.4,0===t?0:1===t?1:(1,e=.1,-1*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},out:function(t){var e;return e=void 0,.4,0===t?0:1===t?1:(1,e=.1,1*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},inout:function(t){var e;return e=void 0,.4,0===t?0:1===t?1:(1,e=.1,(t*=2)<1?1*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:1*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)}},t.prototype.bounce={in:function(t){return 1-p.bounce.out(1-t)},out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return t<.5?.5*p.bounce.in(2*t):.5*p.bounce.out(2*t-1)+.5}},t.prototype.parseEasing=function(t){var e;return null==t&&(t="linear.none"),"string"===typeof t?"m"===t.charAt(0).toLowerCase()?this.path(t):(t=this._splitEasing(t),(e=this[t[0]])?e[t[1]]:(u.error('Easing with name "'+t[0]+'" was not found, fallback to "linear.none" instead'),this.linear.none)):u.isArray(t)?this.bezier.apply(this,t):t},t.prototype._splitEasing=function(t){var e,r,i;return"function"==typeof t?t:"string"==typeof t&&t.length?(i=t.split("."),e=i[0].toLowerCase()||"linear",r=i[1].toLowerCase()||"none",[e,r]):["linear","none"]},t}(),(p=new i).mix=l(p),t.exports=p},function(t,e,r){(function(e){var i,s,n=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e;return-1};s=r(71),i=new(function(){function t(t){return this.vars(),this.generate}return t.prototype.vars=function(){return this.generate=s.bind(this.generate,this)},t.prototype.generate=function(t,r,i,s){var o,a,p,u,l,h,c,f,d,_,y,v,m,g,w,b,S;if(arguments.length<4)return this.error("Bezier function expects 4 arguments");for(v=m=0;m<4;v=++m)if("number"!=typeof(u=arguments[v])||isNaN(u)||!isFinite(u))return this.error("Bezier function expects 4 arguments");return t<0||t>1||i<0||i>1?this.error("Bezier x values should be > 0 and < 1"):(4,.001,1e-7,10,11,.1,d=n.call(e,"Float32Array")>=0,o=function(t,e){return 1-3*e+3*t},a=function(t,e){return 3*e-6*t},p=function(t){return 3*t},h=function(t,e,r){return((o(e,r)*t+a(e,r))*t+p(e))*t},_=function(t,e,r){return 3*o(e,r)*t*t+2*a(e,r)*t+p(e)},w=function(e,r){var s;for(v=0;v<4;){if(0===(s=_(r,t,i)))return r;r-=(h(r,t,i)-e)/s,++v}return r},c=function(){for(v=0;v<11;)g[v]=h(.1*v,t,i),++v},l=function(e,r,s){var n,o;for(o=void 0,n=void 0,v=0;;)if(n=r+(s-r)/2,(o=h(n,t,i)-e)>0?s=n:r=n,!(Math.abs(o)>1e-7&&++v<10))break;return n},y=function(e){var r,s,n,o,a,p;for(p=0,r=1,10;10!==r&&g[r]<=e;)p+=.1,++r;return--r,s=g[r+1]-g[r],n=(e-g[r])/s,o=p+.1*n,(a=_(o,t,i))>=.001?w(e,o):0===a?o:l(e,p,p+.1)},b=function(){if(!0,t!==r||i!==s)return c()},g=d?new Float32Array(11):new Array(11),!1,f=function(e){return b(),t===r&&i===s?e:0===e?0:1===e?1:h(y(e),r,s)},S="bezier("+[t,r,i,s]+")",f.toStr=function(){return S},f)},t.prototype.error=function(t){return s.error(t)},t}()),t.exports=i}).call(e,function(){return this}())},function(t,e,r){var i,s;s=r(71),i=function(){function t(t,e){if(this.o=null!=e?e:{},"creator"!==t){if(this.path=s.parsePath(t),null==this.path)return s.error("Error while parsing the path");this._vars(),this.path.setAttribute("d",this._normalizePath(this.path.getAttribute("d"))),this.pathLength=this.path.getTotalLength(),this.sample=s.bind(this.sample,this),this._hardSample=s.bind(this._hardSample,this),this._preSample()}}return t.prototype._vars=function(){return this._precompute=s.clamp(this.o.precompute||1450,100,1e4),this._step=1/this._precompute,this._rect=this.o.rect||100,this._approximateMax=this.o.approximateMax||5,this._eps=this.o.eps||.001,this._boundsPrevProgress=-1},t.prototype._preSample=function(){var t,e,r,i,s,n,o;for(this._samples=[],o=[],t=e=0,n=this._precompute;0<=n?e<=n:e>=n;t=0<=n?++e:--e)s=t*this._step,r=this.pathLength*s,i=this.path.getPointAtLength(r),o.push(this._samples[t]={point:i,length:r,progress:s});return o},t.prototype._findBounds=function(t,e){var r,i,s,n,o,a,p,u,l,h,c,f,d;if(e===this._boundsPrevProgress)return this._prevBounds;for(null==this._boundsStartIndex&&(this._boundsStartIndex=0),a=t.length,this._boundsPrevProgress>e?(p=0,i="reverse"):(p=a,i="forward"),"forward"===i?(f=t[0],s=t[t.length-1]):(f=t[t.length-1],s=t[0]),n=o=h=this._boundsStartIndex,c=p;h<=c?o<c:o>c;n=h<=c?++o:--o){if(d=t[n],l=d.point.x/this._rect,u=e,"reverse"===i&&(r=l,l=u,u=r),!(l<u)){s=d;break}f=d,this._boundsStartIndex=n}return this._boundsPrevProgress=e,this._prevBounds={start:f,end:s}},t.prototype.sample=function(t){var e,r;return t=s.clamp(t,0,1),e=this._findBounds(this._samples,t),null!=(r=this._checkIfBoundsCloseEnough(t,e))?r:this._findApproximate(t,e.start,e.end)},t.prototype._checkIfBoundsCloseEnough=function(t,e){var r;return void 0,null!=(r=this._checkIfPointCloseEnough(t,e.start.point))?r:this._checkIfPointCloseEnough(t,e.end.point)},t.prototype._checkIfPointCloseEnough=function(t,e){if(s.closeEnough(t,e.x/this._rect,this._eps))return this._resolveY(e)},t.prototype._approximate=function(t,e,r){var i,s;return i=e.point.x-t.point.x,s=(r-t.point.x/this._rect)/(i/this._rect),t.length+s*(e.length-t.length)},t.prototype._findApproximate=function(t,e,r,i){var n,o,a,p,u;return null==i&&(i=this._approximateMax),n=this._approximate(e,r,t),p=this.path.getPointAtLength(n),u=p.x/this._rect,s.closeEnough(t,u,this._eps)?this._resolveY(p):--i<1?this._resolveY(p):(a={point:p,length:n},o=t<u?[t,e,a,i]:[t,a,r,i],this._findApproximate.apply(this,o))},t.prototype._resolveY=function(t){return 1-t.y/this._rect},t.prototype._normalizePath=function(t){var e,r,i,s;return s=/[M|L|H|V|C|S|Q|T|A]/gim,(i=t.split(s)).shift(),e=t.match(s),0,i[0]=this._normalizeSegment(i[0]),r=i.length-1,i[r]=this._normalizeSegment(i[r],this._rect||100),this._joinNormalizedPath(e,i)},t.prototype._joinNormalizedPath=function(t,e){var r,i,s,n,o;for(o="",i=s=0,n=t.length;s<n;i=++s)r=t[i],o+=""+(0===i?"":" ")+r+e[i].trim();return o},t.prototype._normalizeSegment=function(t,e){var r,i,s,n,o,a,p,u;if(null==e&&(e=0),t=t.trim(),o=/(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim,a=this._getSegmentPairs(t.match(o)),s=a[a.length-1],u=s[0],Number(u)!==e)for(t="",s[0]=e,r=i=0,n=a.length;i<n;r=++i)p=a[r],t+=""+(0===r?"":" ")+p[0]+","+p[1];return t},t.prototype._getSegmentPairs=function(t){var e,r,i,n,o;for(t.length%2!=0&&s.error("Failed to parse the path - segment pairs are not even.",t),n=[],e=r=0,i=t.length;r<i;e=r+=2)t[e],o=[t[e],t[e+1]],n.push(o);return n},t.prototype.create=function(e,r){var i;return i=new t(e,r),i.sample.path=i.path,i.sample},t}(),t.exports=i},function(t,e){var r,i,s,n,o,a,p=[].slice;i=null,o=function(t){return"number"==typeof t.value?t.value:i.parseEasing(t.value)},a=function(t,e){var r;return t.value=o(t),e.value=o(e),r=0,t.to<e.to&&(r=-1),t.to>e.to&&(r=1),r},s=function(t,e){var r,i,s,n,o;for(i=0,r=s=0,n=t.length;s<n&&(o=t[r],i=r,!(o.to>e));r=++s);return i},n=function(){var t;return(t=1<=arguments.length?p.call(arguments,0):[]).length>1?t=t.sort(a):t[0].value=o(t[0]),function(e){var r,i;if(-1!==(r=s(t,e)))return i=t[r].value,r===t.length-1&&e>t[r].to?1:"function"==typeof i?i(e):i}},r=function(t){return i=t,n},t.exports=r},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(3)),n=(i(r(71)),{_sample:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=void 0===e?"undefined":(0,s.default)(e),i={};if("number"===r){var o=0,a=Math.pow(10,e),p=1/a;i[0]=t(0);for(var u=0;u<a-1;u++)o+=p,i[parseFloat(o.toFixed(e))]=t(o);i[1]=t(1),i.base=e}else"object"===r?i=e:"string"===r&&(i=JSON.parse(e));return n._sample._proximate(i)},_proximate:function(t){function e(t,e){e=+e||0;var r=Math.pow(10,e);return Math.round(t*r)/r}var r=t.base,i=1/Math.pow(10,r),s=function(s){var n=e(s,r),o=t[n.toString()];if(Math.abs(s-n)<i)return o;if(s>n)p=t[a=n+i];else var a=n-i,p=t[a];var u=a-n,l=p-o;if(l<i)return o;var h=(s-n)/u;return o+(p>o?-1:1)*h*l};return s.getSamples=function(){return t},s}});n._sample._proximate=n._proximate,e.default=n._sample},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(111)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(71)),u=(i(r(102)),i(r(101))),l=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)(this,e),(0,o.default)(this,t.call(this,r))}return(0,a.default)(e,t),e.prototype.add=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return this._pushTimelineArray(e),this._calcDimentions(),this},e.prototype.append=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var i=e,n=Array.isArray(i),o=0,i=n?i:(0,s.default)(i);;){var a;if(n){if(o>=i.length)break;a=i[o++]}else{if((o=i.next()).done)break;a=o.value}var u=a;p.default.isArray(u)?this._appendTimelineArray(u):this._appendTimeline(u,this._timelines.length),this._calcDimentions()}return this},e.prototype.stop=function(e){return t.prototype.stop.call(this,e),this._stopChildren(e),this},e.prototype.reset=function(){return t.prototype.reset.call(this),this._resetChildren(),this},e.prototype._resetChildren=function(){for(var t=0;t<this._timelines.length;t++)this._timelines[t].reset()},e.prototype._stopChildren=function(t){for(var e=this._timelines.length-1;e>=0;e--)this._timelines[e].stop(t)},e.prototype._appendTimelineArray=function(t){for(var e=t.length,r=this._props.repeatTime-this._props.delay,i=this._timelines.length;e--;)this._appendTimeline(t[e],i,r)},e.prototype._appendTimeline=function(t,r,i){t.timeline instanceof e&&(t=t.timeline),t.tween instanceof u.default&&(t=t.tween);var s=null!=i?i:this._props.duration;s+=t._props.shiftTime||0,t.index=r,this._pushTimeline(t,s)},e.prototype._pushTimelineArray=function(t){for(var e=0;e<t.length;e++){var r=t[e];p.default.isArray(r)?this._pushTimelineArray(r):this._pushTimeline(r)}},e.prototype._pushTimeline=function(t,r){t.timeline instanceof e&&(t=t.timeline),t.tween instanceof u.default&&(t=t.tween),null!=r&&t._setProp({shiftTime:r}),this._timelines.push(t),this._recalcDuration(t)},e.prototype._setProgress=function(t,e,r){this._updateChildren(t,e,r),u.default.prototype._setProgress.call(this,t,e)},e.prototype._updateChildren=function(t,e,r){var i=e>this._prevTime?-1:1;this._props.isYoyo&&r&&(i*=-1);for(var s=this._props.startTime+t*this._props.duration,n=s+i,o=this._timelines.length,a=0;a<o;a++){var p=s>n?a:o-1-a;this._timelines[p]._update(s,n,this._prevYoyo,this._onEdge)}this._prevYoyo=r},e.prototype._recalcDuration=function(t){var e=t._props,r=e.repeatTime/e.speed+(e.shiftTime||0)+t._negativeShift;this._props.duration=Math.max(r,this._props.duration)},e.prototype._recalcTotalDuration=function(){var t=this._timelines.length;for(this._props.duration=0;t--;){var e=this._timelines[t];e._recalcTotalDuration&&e._recalcTotalDuration(),this._recalcDuration(e)}this._calcDimentions()},e.prototype._setStartTime=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prototype._setStartTime.call(this,e),this._startTimelines(this._props.startTime,r)},e.prototype._startTimelines=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=(this._props,"stop"===this._state);null==t&&(t=this._props.startTime);for(var i=0;i<this._timelines.length;i++){var s=this._timelines[i];s._setStartTime(t,e),e||null==s._prevTime||r||(s._prevTime=s._normPrevTimeForward())}},e.prototype._refresh=function(e){for(var r=this._timelines.length,i=0;i<r;i++)this._timelines[i]._refresh(e);t.prototype._refresh.call(this,e)},e.prototype._declareDefaults=function(){null!=this._o.duration&&(p.default.error('Duration can not be declared on Timeline, but "'+this._o.duration+'" is. You probably want to use Tween instead.'),this._o.duration=0),t.prototype._declareDefaults.call(this),this._defaults.duration=0,this._defaults.easing="Linear.None",this._defaults.backwardEasing="Linear.None",this._defaults.nameBase="Timeline"},e.prototype._vars=function(){this._timelines=[],t.prototype._vars.call(this)},e}(u.default);e.default=l},function(t,e,r){t.exports={default:r(112),__esModule:!0}},function(t,e,r){r(50),r(6),t.exports=r(113)},function(t,e,r){var i=r(19),s=r(114);t.exports=r(14).getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},function(t,e,r){var i=r(115),s=r(47)("iterator"),n=r(29);t.exports=r(14).getIteratorMethod=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||n[i(t)]}},function(t,e,r){var i=r(37),s=r(47)("toStringTag"),n="Arguments"==i(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=o(e=Object(t),s))?r:n?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(95)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(71)),u=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype.tune=function(t){if(t&&(0,s.default)(t).length){this._transformHistory(t),this._tuneNewOptions(t),this._history[0]=p.default.cloneObj(this._props);for(var e in this._arrayPropertyMap)null!=t[e]&&(this._history[0][e]=this._preparsePropValue(e,t[e]));this._tuneSubModules(),this._resetTweens()}return this},e.prototype.generate=function(){return this.tune(this._o)},e.prototype._transformHistory=function(t){for(var e in t){var r=t[e];this._transformHistoryFor(e,this._preparsePropValue(e,r))}},e.prototype._transformHistoryFor=function(t,e){for(var r=0;r<this._history.length&&(!(e=this._transformHistoryRecord(r,t,e))||null!=e);r++);},e.prototype._transformHistoryRecord=function(t,e,r,i,s){if(null==r)return null;i=null==i?this._history[t]:i,s=null==s?this._history[t+1]:s;var n=i[e],o=null==s?null:s[e];if(0===t){if(i[e]=r,p.default.isTweenProp(e)&&"duration"!==e)return null;var a=this._isRewriteNext(n,o),u=this._isDelta(r)?p.default.getDeltaEnd(r):r;return a?u:null}if(this._isDelta(n)){var l;return i[e]=(l={},l[r]=p.default.getDeltaEnd(n),l),null}return i[e]=r,this._isRewriteNext(n,o)?r:null},e.prototype._isRewriteNext=function(t,e){if(null==e&&null!=t)return!1;var r=t===e,i=this._isDelta(e),s=!1,n=!1;return this._isDelta(t)&&i?p.default.getDeltaEnd(t)==p.default.getDeltaStart(e)&&(n=!0):i&&(s=p.default.getDeltaStart(e)===""+t),r||s||n},e.prototype._tuneSubModules=function(){for(var t=1;t<this._modules.length;t++)this._modules[t]._tuneNewOptions(this._history[t])},e.prototype._resetTweens=function(){var t=0,e=0,r=this.timeline._timelines;if(null!=r){for(t=0;t<r.length;t++){var i=r[t],s=r[t-1];e+=s?s._props.repeatTime:0,this._resetTween(i,this._history[t],e)}this.timeline._setProp(this._props.timeline),this.timeline._recalcTotalDuration()}},e.prototype._resetTween=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.shiftTime=r,t._setProp(e)},e}(i(r(99)).default);e.default=u},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(75)),o=i(r(76)),a=i(r(94)),p=i(r(71)),u=function(t){function e(){return(0,s.default)(this,e),(0,n.default)(this,t.apply(this,arguments))}return(0,o.default)(e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.isSwirl=!0,this._defaults.swirlSize=10,this._defaults.swirlFrequency=3,this._defaults.pathScale=1,this._defaults.degreeShift=0,this._defaults.radius=5,this._defaults.x=0,this._defaults.y=0,this._defaults.scale={1:0},this._defaults.direction=1},e.prototype._extendDefaults=function(){t.prototype._extendDefaults.call(this),this._calcPosData()},e.prototype._tuneNewOptions=function(e){null!=e&&(t.prototype._tuneNewOptions.call(this,e),null==e.x&&null==e.y||this._calcPosData())},e.prototype._calcPosData=function(){var t=this._getPosValue("x"),e=this._getPosValue("y"),r=90+Math.atan(e.delta/t.delta||0)*p.default.RAD_TO_DEG;this._posData={radius:Math.sqrt(t.delta*t.delta+e.delta*e.delta),angle:t.delta<0?r+180:r,x:t,y:e}},e.prototype._getPosValue=function(t){var e=this._deltas[t];if(e)return delete this._deltas[t],{start:e.start.value,end:e.end.value,delta:e.delta,units:e.end.unit};var r=p.default.parseUnit(this._props[t]);return{start:r.value,end:r.value,delta:0,units:r.unit}},e.prototype._setProgress=function(t,e){this._progress=t,this._calcCurrentProps(t,e),this._calcSwirlXY(t),this._draw(t)},e.prototype._calcSwirlXY=function(t){var e=this._props,r=this._posData.angle+e.degreeShift,i=p.default.getRadialPoint({angle:e.isSwirl?r+this._getSwirl(t):r,radius:t*this._posData.radius*e.pathScale,center:{x:this._posData.x.start,y:this._posData.y.start}}),s=i.x,n=i.y;s>0&&s<1e-6&&(s=1e-6),n>0&&n<1e-6&&(n=1e-6),s<0&&s>-1e-6&&(s=-1e-6),n<0&&n>-1e-6&&(n=-1e-6),e.x=this._o.ctx?s:""+s+this._posData.x.units,e.y=this._o.ctx?n:""+n+this._posData.y.units},e.prototype._getSwirl=function(t){var e=this._props;return e.direction*e.swirlSize*Math.sin(e.swirlFrequency*t)},e.prototype._draw=function(){var t=this._props.isWithShape?"_draw":"_drawEl";a.default.prototype[t].call(this)},e}(a.default);e.default=u},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(95)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(110)),u=i(r(117)),l=i(r(116)),h=i(r(71)),c=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){this._defaults={count:5,degree:360,radius:{0:50},radiusX:null,radiusY:null,width:0,height:0}},e.prototype.then=function(t){this._removeTweenProperties(t);var e=this._masterThen(t),r=this._childThen(t);return this._setSwirlDuration(e,this._calcPackTime(r)),this.timeline._recalcTotalDuration(),this},e.prototype.tune=function(t){return null==t?this:(this._saveTimelineOptions(t),this.timeline._setProp(this._timelineOptions),this._removeTweenProperties(t),this._tuneNewOptions(t),this.masterSwirl.tune(t),this._tuneSwirls(t),this._recalcModulesTime(),this)},e.prototype._extendDefaults=function(){this._removeTweenProperties(this._o),t.prototype._extendDefaults.call(this)},e.prototype._removeTweenProperties=function(t){for(var e in h.default.tweenOptionMap)null==this._defaults[e]&&delete t[e]},e.prototype._recalcModulesTime=function(){for(var t=this.masterSwirl._modules,e=this._swirls,r=0,i=0;i<t.length;i++){var s=t[i].tween,n=this._calcPackTime(e[i]);s._setProp({duration:n,shiftTime:r}),r+=n}this.timeline._recalcTotalDuration()},e.prototype._tuneSwirls=function(t){for(var e=this._swirls[0],r=0;r<e.length;r++){var i=e[r],s=this._getChildOption(t||{},r),n=null!=s.degreeShift;n||(s.degreeShift=this._swirls[0][r]._props.degreeShift),this._addBurstProperties(s,r),n||delete s.degreeShift,i.tune(s),this._refreshBurstOptions(i._modules,r)}},e.prototype._refreshBurstOptions=function(t,e){for(var r=1;r<t.length;r++){var i=t[r],s={};this._addBurstProperties(s,e,r),i._tuneNewOptions(s)}},e.prototype._masterThen=function(t){this.masterSwirl.then(t);var e=h.default.getLastItem(this.masterSwirl._modules);return this._masterSwirls.push(e),e},e.prototype._childThen=function(t){for(var e=this._swirls[0],r=[],i=0;i<e.length;i++){var s=this._getChildOption(t,i),n=e[i];h.default.getLastItem(n._modules);s.parent=this.el,this._addBurstProperties(s,i,this._masterSwirls.length-1),n.then(s),r.push(h.default.getLastItem(n._modules))}return this._swirls[this._masterSwirls.length-1]=r,r},e.prototype._vars=function(){t.prototype._vars.call(this),this._bufferTimeline=new p.default},e.prototype._render=function(){this._o.isWithShape=!1,this._o.isSwirl=this._props.isSwirl,this._o.callbacksContext=this,this._saveTimelineOptions(this._o),this.masterSwirl=new d(this._o),this._masterSwirls=[this.masterSwirl],this.el=this.masterSwirl.el,this._renderSwirls()},e.prototype._renderSwirls=function(){for(var t=this._props,e=[],r=0;r<t.count;r++){var i=this._getChildOption(this._o,r);e.push(new f(this._addOptionalProps(i,r)))}this._swirls={0:e},this._setSwirlDuration(this.masterSwirl,this._calcPackTime(e))},e.prototype._saveTimelineOptions=function(t){this._timelineOptions=t.timeline,delete t.timeline},e.prototype._calcPackTime=function(t){for(var e=0,r=0;r<t.length;r++){var i=t[r].tween._props;e=Math.max(i.repeatTime/i.speed,e)}return e},e.prototype._setSwirlDuration=function(t,e){t.tween._setProp("duration",e),t.timeline&&t.timeline._recalcTotalDuration&&t.timeline._recalcTotalDuration()},e.prototype._getChildOption=function(t,e){var r={};for(var i in t.children)r[i]=this._getPropByMod(i,e,t.children);return r},e.prototype._getPropByMod=function(t,e){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})[t];return h.default.isArray(r)?r[e%r.length]:r},e.prototype._addOptionalProps=function(t,e){return t.index=e,t.parent=this.masterSwirl.el,this._addBurstProperties(t,e),t},e.prototype._addBurstProperties=function(t,e,r){var i=this._index;this._index=e;var s=this._parseProperty("degreeShift",t.degreeShift||0);this._index=i;var n=this._props,o=n.degree%360==0?n.count:n.count-1||1,a=n.degree/o,p=this._getSidePoint("start",e*a+s,r),u=this._getSidePoint("end",e*a+s,r);t.x=this._getDeltaFromPoints("x",p,u),t.y=this._getDeltaFromPoints("y",p,u),t.angle=this._getBitAngle(t.angle||0,s,e)},e.prototype._getBitAngle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=this._props,n=i.degree%360==0?i.count:i.count-1||1,o=r*(i.degree/n)+90;if(o+=e,this._isDelta(t)){var a={},p=(0,s.default)(t)[0],u=t[p];p=h.default.parseStringOption(p,r),u=h.default.parseStringOption(u,r),a[parseFloat(p)+o]=parseFloat(u)+o,t=a}else t+=o;return t},e.prototype._getSidePoint=function(t,e,r){this._props;var i=this._getSideRadius(t,r);return h.default.getRadialPoint({radius:i.radius,radiusX:i.radiusX,radiusY:i.radiusY,angle:e,center:{x:0,y:0}})},e.prototype._getSideRadius=function(t,e){return{radius:this._getRadiusByKey("radius",t,e),radiusX:this._getRadiusByKey("radiusX",t,e),radiusY:this._getRadiusByKey("radiusY",t,e)}},e.prototype._getRadiusByKey=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._masterSwirls[r],s=i._deltas,n=i._props;return null!=s[t]?s[t][e]:null!=n[t]?n[t]:void 0},e.prototype._getDeltaFromPoints=function(t,e,r){var i={};return e[t]===r[t]?i=e[t]:i[e[t]]=r[t],i},e.prototype._makeTimeline=function(){this._o.timeline=this._timelineOptions,t.prototype._makeTimeline.call(this),this.timeline.add(this.masterSwirl,this._swirls[0])},e.prototype._makeTween=function(){},e.prototype._hide=function(){},e.prototype._show=function(){},e}(l.default),f=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.isSwirl=!1,this._o.duration=null!=this._o.duration?this._o.duration:700},e.prototype._calcSwirlXY=function(e){var r=this._props.degreeShift;this._props.degreeShift=0,t.prototype._calcSwirlXY.call(this,e),this._props.degreeShift=r},e}(u.default),d=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){t.prototype._declareDefaults.call(this),this._defaults.scale=1,this._defaults.width=0,this._defaults.height=0,this._defaults.radius={25:75}},e}(f);c.ChildSwirl=f,c.MainSwirl=d,e.default=c},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(120)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(95)),u=i(r(99)),l=i(r(101)),h=i(r(125)),c=r(71),f={};l.default.prototype._declareDefaults.call(f);for(var d=(0,p.default)(f._defaults),_=0;_<d.length;_++)f._defaults[d[_]]=1;f._defaults.timeline=1;var y=f._defaults,v=function(t){function e(){return(0,n.default)(this,e),(0,o.default)(this,t.apply(this,arguments))}return(0,a.default)(e,t),e.prototype._declareDefaults=function(){this._defaults={x:0,y:0,z:0,skewX:0,skewY:0,angleX:0,angleY:0,angleZ:0,scale:1,scaleX:1,scaleY:1,isSoftHide:!0,isShowStart:!0,isShowEnd:!0,isForce3d:!1,isRefreshState:!0},this._drawExclude={el:1},this._3dProperties=["angleX","angleY","z"],this._arrayPropertyMap={transformOrigin:1,backgroundPosition:1},this._numberPropertyMap={opacity:1,scale:1,scaleX:1,scaleY:1,angleX:1,angleY:1,angleZ:1,skewX:1,skewY:1},this._prefixPropertyMap={transform:1,transformOrigin:1},this._prefix=c.prefix.css},e.prototype.then=function(e){if(null==e||!(0,p.default)(e).length)return 1;var r=c.getLastItem(this._modules);return r.deltas.refresh(!1),this._history[this._history.length-1]=r._o,t.prototype.then.call(this,e),r.deltas.restore(),this},e.prototype._checkStartValue=function(t,e){return null==e?null!=this._defaults[t]?this._defaults[t]:null!=this._customProps[t]?this._customProps[t]:null!=c.defaultStyles[t]?c.defaultStyles[t]:0:e},e.prototype._draw=function(){for(var t=this._props,e=0;e<this._drawProps.length;e++){var r=this._drawProps[e];this._setStyle(r,t[r])}this._drawTransform(),this._customDraw&&this._customDraw(this._props.el,this._props)},e.prototype._drawTransform=function(){var t=this._props,e=this._is3d?"translate3d("+t.x+", "+t.y+", "+t.z+")\n          rotateX("+t.angleX+"deg)\n          rotateY("+t.angleY+"deg)\n          rotateZ("+t.angleZ+"deg)\n          skew("+t.skewX+"deg, "+t.skewY+"deg)\n          scale("+t.scaleX+", "+t.scaleY+")":"translate("+t.x+", "+t.y+")\n          rotate("+t.angleZ+"deg)\n          skew("+t.skewX+"deg, "+t.skewY+"deg)\n          scale("+t.scaleX+", "+t.scaleY+")";this._setStyle("transform",e)},e.prototype._render=function(){if(!this._o.prevChainModule){for(var t=this._props,e=0;e<this._renderProps.length;e++){var r=this._renderProps[e],i=t[r];i="number"==typeof i?i+"px":i,this._setStyle(r,i)}this._draw(),t.isShowStart||this._hide()}},e.prototype._setStyle=function(t,e){if(this._state[t]!==e){var r=this._props.el.style;r[t]=e,this._prefixPropertyMap[t]&&(r[""+this._prefix+t]=e),this._state[t]=e}},e.prototype._extendDefaults=function(){this._props=this._o.props||{},this._renderProps=[],this._drawProps=[],this._saveCustomProperties(this._o);var t=(0,s.default)({},this._o);t=this._addDefaults(t);for(var e=(0,p.default)(t),r=0;r<e.length;r++){var i=e[r],n=!this._drawExclude[i]&&null==this._defaults[i]&&!y[i],o=this._customProps[i];c.isDelta(t[i])||y[i]?n&&!o&&this._drawProps.push(i):(this._parseOption(i,t[i]),"el"===i&&(this._props.el=c.parseEl(t.el),this.el=this._props.el),n&&!o&&this._renderProps.push(i))}this._createDeltas(t)},e.prototype._saveCustomProperties=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._customProps=t.customProperties||{},this._customProps=(0,s.default)({},this._customProps),this._customDraw=this._customProps.draw,delete this._customProps.draw,delete t.customProperties,this._copyDefaultCustomProps()},e.prototype._copyDefaultCustomProps=function(){for(var t in this._customProps)null==this._o[t]&&(this._o[t]=this._customProps[t])},e.prototype._resetMergedFlags=function(e){return t.prototype._resetMergedFlags.call(this,e),e.props=this._props,e.customProperties=this._customProps,e},e.prototype._parseOption=function(e,r){t.prototype._parseOption.call(this,e,r);var i=this._props[e];c.isArray(i)&&(this._props[e]=this._arrToString(i))},e.prototype._arrToString=function(t){for(var e="",r=0;r<t.length;r++)e+=t[r].string+" ";return e},e.prototype._addDefaults=function(t){this._is3d=!1;for(var e in this._defaults)null==t[e]?t[e]="scaleX"===e||"scaleY"===e?null!=t.scale?t.scale:this._defaults.scale:this._defaults[e]:-1!==this._3dProperties.indexOf(e)&&(this._is3d=!0);return this._o.isForce3d&&(this._is3d=!0),t},e.prototype._vars=function(){this.deltas.refresh(!1),t.prototype._vars.call(this),this._state={},this.deltas.restore(!1)},e.prototype._createDeltas=function(t){this.deltas=new h.default({options:t,props:this._props,arrayPropertyMap:this._arrayPropertyMap,numberPropertyMap:this._numberPropertyMap,customProps:this._customProps,callbacksContext:t.callbacksContext||this,isChained:!!this._o.prevChainModule}),this._o.prevChainModule&&(this.timeline=this.deltas.timeline)},e.prototype._makeTween=function(){},e.prototype._makeTimeline=function(){this._o.prevChainModule||(this._o.timeline=this._o.timeline||{},this._addCallbackOverrides(this._o.timeline),t.prototype._makeTimeline.call(this),this.timeline.add(this.deltas))},e.prototype._addCallbackOverrides=function(t){var e=this,r=this._props;t.callbackOverrides={onUpdate:this._draw,onRefresh:this._props.isRefreshState?this._draw:void 0,onStart:function(t){e._isChained||(t&&!r.isShowStart?e._show():r.isShowStart||e._hide())},onComplete:function(t){e._isChained||(t?r.isShowEnd||e._hide():r.isShowEnd||e._show())}}},e.prototype._showByTransform=function(){this._drawTransform()},e.prototype._mergeThenProperty=function(t,e,r){var i="boolean"==typeof r;if(c.isTweenProp(t)||this._nonMergeProps[t]||i)return r;var n={};if(c.isObject(r)&&null!=r.to){for(var o in r)(y[o]||"curve"===o)&&(n[o]=r[o],delete r[o]);r=r.to}if(this._isDelta(r)){var a={};for(var p in r)(y[p]||"curve"===p)&&(a[p]=r[p],delete r[p]);var u=this._parseDeltaValues(t,r);return(0,s.default)({},u,a)}var l=this._parsePreArrayProperty(t,r);if(this._isDelta(e)){var h;return(0,s.default)((h={},h[c.getDeltaEnd(e)]=l,h),n)}var f;return(0,s.default)((f={},f[e]=l,f),n)},e}(u.default);e.default=v},function(t,e,r){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(r(121));e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}},function(t,e,r){t.exports={default:r(122),__esModule:!0}},function(t,e,r){r(123),t.exports=r(14).Object.assign},function(t,e,r){var i=r(12);i(i.S+i.F,"Object",{assign:r(124)})},function(t,e,r){"use strict";var i=r(33),s=r(62),n=r(63),o=r(49),a=r(36),p=Object.assign;t.exports=!p||r(23)(function(){var t={},e={},r=Symbol(),i="abcdefghijklmnopqrst";return t[r]=7,i.split("").forEach(function(t){e[t]=t}),7!=p({},t)[r]||Object.keys(p({},e)).join("")!=i})?function(t,e){for(var r=o(t),p=arguments.length,u=1,l=s.f,h=n.f;p>u;)for(var c,f=a(arguments[u++]),d=l?i(f).concat(l(f)):i(f),_=d.length,y=0;_>y;)h.call(f,c=d[y++])&&(r[c]=f[c]);return r}:p},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(120)),n=i(r(74)),o=i(r(95)),a=i(r(110)),p=i(r(101)),u=i(r(126)),l=r(105),h=r(71),c={};p.default.prototype._declareDefaults.call(c);for(var f=(0,o.default)(c._defaults),d=0;d<f.length;d++)c._defaults[f[d]]=1;c._defaults.timeline=1;var _=c._defaults,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,n.default)(this,t),this._o=e,this._shortColors={transparent:"rgba(0,0,0,0)",none:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},this._ignoreDeltasMap={prevChainModule:1,masterModule:1},this._parseDeltas(e.options),this._createDeltas(),this._createTimeline(this._mainTweenOptions)}return t.prototype.refresh=function(t){for(var e=0;e<this._deltas.length;e++)this._deltas[e].refresh(t);return this},t.prototype.restore=function(){for(var t=0;t<this._deltas.length;t++)this._deltas[t].restore();return this},t.prototype._createTimeline=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.timeline=new a.default,this.timeline.add(this._deltas)},t.prototype._createDeltas=function(){this._deltas=[],this._deltas.push(this._createDelta(this._mainDeltas,this._mainTweenOptions));for(var t=0;t<this._childDeltas.length;t++){var e=this._childDeltas[t];this._deltas.push(this._createDelta([e.delta],e.tweenOptions))}},t.prototype._createDelta=function(t,e){var r=this._o;return new u.default({deltas:t,tweenOptions:e,props:r.props,isChained:r.isChained,callbacksContext:r.callbacksContext})},t.prototype._parseDeltas=function(t){var e=this._splitTweenOptions(t),r=e.delta;this._mainTweenOptions=e.tweenOptions,this._mainDeltas=[],this._childDeltas=[];for(var i=(0,o.default)(r),s=0;s<i.length;s++){var n=i[s];if(this._isDelta(r[n])&&!this._ignoreDeltasMap[n]){var a=this._splitAndParseDelta(n,r[n]);a.tweenOptions?this._childDeltas.push(a):this._mainDeltas.push(a.delta)}}},t.prototype._splitAndParseDelta=function(t,e){var r=this._splitTweenOptions(e);return r.delta=this._parseDelta(t,r.delta),r},t.prototype._parseDelta=function(t,e,r){return this._o.customProps&&null!=this._o.customProps[t]?this._parseDeltaByCustom(t,e,r):this._parseDeltaByGuess(t,e,r)},t.prototype._parseDeltaByCustom=function(t,e,r){return this._parseNumberDelta(t,e,r)},t.prototype._parseDeltaByGuess=function(t,e,r){var i=this._preparseDelta(e).start,s=this._o;return!isNaN(parseFloat(i))||i.match(/rand\(/)||i.match(/stagger\(/)?s.arrayPropertyMap&&s.arrayPropertyMap[t]?this._parseArrayDelta(t,e):s.numberPropertyMap&&s.numberPropertyMap[t]?this._parseNumberDelta(t,e,r):this._parseUnitDelta(t,e,r):this._parseColorDelta(t,e)},t.prototype._splitTweenOptions=function(t){t=(0,s.default)({},t);for(var e=(0,o.default)(t),r={},i=null,n=0;n<e.length;n++){var a=e[n];_[a]&&(null!=t[a]&&(r[a]=t[a],i=!0),delete t[a])}return{delta:t,tweenOptions:i?r:void 0}},t.prototype._isDelta=function(t){var e=h.isObject(t);return!(!(e=e&&!t.unit)||h.isArray(t)||h.isDOM(t))},t.prototype._parseColorDelta=function(t,e){if("strokeLinecap"===t)return h.warn("Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead",e),{};var r=this._preparseDelta(e),i=this._makeColorObj(r.start),s=this._makeColorObj(r.end);return{type:"color",name:t,start:i,end:s,curve:r.curve,delta:{r:s.r-i.r,g:s.g-i.g,b:s.b-i.b,a:s.a-i.a}}},t.prototype._parseArrayDelta=function(t,e){var r=this._preparseDelta(e),i=this._strToArr(r.start),s=this._strToArr(r.end);h.normDashArrays(i,s);for(var n=0;n<i.length;n++){var o=s[n];h.mergeUnits(i[n],o,t)}return{type:"array",name:t,start:i,end:s,delta:h.calcArrDelta(i,s),curve:r.curve}},t.prototype._parseUnitDelta=function(t,e,r){var i=this._preparseDelta(e),s=h.parseUnit(h.parseStringOption(i.end,r)),n=h.parseUnit(h.parseStringOption(i.start,r));return h.mergeUnits(n,s,t),{type:"unit",name:t,start:n,end:s,delta:s.value-n.value,curve:i.curve}},t.prototype._parseNumberDelta=function(t,e,r){var i=this._preparseDelta(e),s=parseFloat(h.parseStringOption(i.end,r)),n=parseFloat(h.parseStringOption(i.start,r));return{type:"number",name:t,start:n,end:s,delta:s-n,curve:i.curve}},t.prototype._preparseDelta=function(t){var e=(t=(0,s.default)({},t)).curve;null!=e&&((e=l.parseEasing(e))._parent=this),delete t.curve;var r=(0,o.default)(t)[0];return{start:r,end:t[r],curve:e}},t.prototype._makeColorObj=function(t){var e={};if("#"===t[0]){var r=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t);if(r){var i=2===r[1].length?r[1]:r[1]+r[1],s=2===r[2].length?r[2]:r[2]+r[2],n=2===r[3].length?r[3]:r[3]+r[3];e={r:parseInt(i,16),g:parseInt(s,16),b:parseInt(n,16),a:1}}}if("#"!==t[0]){var o="r"===t[0]&&"g"===t[1]&&"b"===t[2],a=void 0;o&&(a=t),o||(this._shortColors[t]?a=this._shortColors[t]:(h.div.style.color=t,a=h.computedStyle(h.div).color));var p=new RegExp("^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$","gi").exec(a),u=parseFloat(p[4]||1);p&&(e={r:parseInt(p[1],10),g:parseInt(p[2],10),b:parseInt(p[3],10),a:null==u||isNaN(u)?1:u})}return e},t.prototype._strToArr=function(t){var e=[];return"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){e.push(h.parseUnit(h.parseIfRand(t)))}),e):(e.push(h.parseUnit(t)),e)},t}();e.default=y},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(101)),o=(r(71),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(this,t),this._o=e,this._createTween(e.tweenOptions),!this._o.isChained&&this.refresh(!0)}return t.prototype.refresh=function(t){this._previousValues=[];for(var e=this._o.deltas,r=0;r<e.length;r++){var i=e[r].name;this._previousValues.push({name:i,value:this._o.props[i]})}return this.tween._refresh(t),this},t.prototype.restore=function(){for(var t=this._previousValues,e=0;e<t.length;e++){var r=t[e];this._o.props[r.name]=r.value}return this},t.prototype._createTween=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;t.callbackOverrides={onUpdate:function(t,r){e._calcCurrentProps(t,r)}},this._o.isChained||(t.callbackOverrides.onRefresh=function(t,r,i){e._calcCurrentProps(r,i)}),t.callbacksContext=this._o.callbacksContext,this.tween=new n.default(t)},t.prototype._calcCurrentProps=function(t,e){for(var r=this._o.deltas,i=0;i<r.length;i++)this["_calcCurrent_"+r[i].type](r[i],t,e)},t.prototype._calcCurrent_color=function(t,e,r){var i,s,n,o,a=t.start,p=t.delta;if(t.curve){var u=t.curve(r);i=parseInt(u*(a.r+r*p.r),10),s=parseInt(u*(a.g+r*p.g),10),n=parseInt(u*(a.b+r*p.b),10),o=parseFloat(u*(a.a+r*p.a))}else i=parseInt(a.r+e*p.r,10),s=parseInt(a.g+e*p.g,10),n=parseInt(a.b+e*p.b,10),o=parseFloat(a.a+e*p.a);this._o.props[t.name]="rgba("+i+","+s+","+n+","+o+")"},t.prototype._calcCurrent_number=function(t,e,r){this._o.props[t.name]=t.curve?t.curve(r)*(t.start+r*t.delta):t.start+e*t.delta},t.prototype._calcCurrent_unit=function(t,e,r){var i=t.curve?t.curve(r)*(t.start.value+r*t.delta):t.start.value+e*t.delta;this._o.props[t.name]=""+i+t.end.unit},t.prototype._calcCurrent_array=function(t,e,r){for(var i=t.name,s=this._o.props,n="",o=t.curve?t.curve(r):null,a=0;a<t.delta.length;a++){var p=t.delta[a];n+=""+(t.curve?o*(t.start[a].value+r*p.value):t.start[a].value+e*p.value)+p.unit+" "}s[i]=n},t}());e.default=o},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=i(r(95)),n=i(r(74)),o=i(r(75)),a=i(r(76)),p=i(r(71)),u=i(r(110)),l=function(t){function e(r,i){var s;(0,n.default)(this,e);var a=(0,o.default)(this,t.call(this));return s=a._init(r,i),(0,o.default)(a,s)}return(0,a.default)(e,t),e.prototype.then=function(t){if(null==t)return this;for(var e=0;e<this._modules.length;e++)this._modules[e].then(this._getOptionByIndex(e,t));return this.timeline._recalcTotalDuration(),this},e.prototype.tune=function(t){if(null==t)return this;for(var e=0;e<this._modules.length;e++)this._modules[e].tune(this._getOptionByIndex(e,t));return this.timeline._recalcTotalDuration(),this},e.prototype.generate=function(){for(var t=0;t<this._modules.length;t++)this._modules[t].generate();return this.timeline._recalcTotalDuration(),this},e.prototype._getOptionByMod=function(t,e,r){var i=r[t];i+""!="[object NodeList]"&&i+""!="[object HTMLCollection]"||(i=Array.prototype.slice.call(i,0));var s=p.default.isArray(i)?i[e%i.length]:i;return p.default.parseIfStagger(s,e)},e.prototype._getOptionByIndex=function(t,e){var r=this,i={};return(0,s.default)(e).forEach(function(s){return i[s]=r._getOptionByMod(s,t,e)}),i},e.prototype._getChildQuantity=function(t,e){if("number"==typeof t)return t;var r=e[t];return p.default.isArray(r)?r.length:r+""=="[object NodeList]"?r.length:r+""=="[object HTMLCollection]"?Array.prototype.slice.call(r,0).length:r instanceof HTMLElement?1:"string"==typeof r?1:void 0},e.prototype._init=function(t,e){var r=this._getChildQuantity(t.quantifier||"el",t);this._createTimeline(t),this._modules=[];for(var i=0;i<r;i++){var s=this._getOptionByIndex(i,t);s.isRunLess=!0,s.index=i;var n=new e(s);this._modules.push(n),this.timeline.add(n)}return this},e.prototype._createTimeline=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.timeline=new u.default(t.timeline)},e.prototype._makeTween=function(){},e.prototype._makeTimeline=function(){},e}(i(r(116)).default);t.exports=function(t){return function(e){return new l(e,t)}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=i(r(74)),n=i(r(71)),o=i(r(101)),a=i(r(110)),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.default)(this,t),this.o=e,this.o.el?(this._vars(),this._declareDefaults(),this._extendDefaults(),this._parseFrames(),this._frames.length<=2&&n.default.warn("Spriter: only "+this._frames.length+" frames found"),this._frames.length<1&&n.default.error("Spriter: there is no frames to animate, aborting"),this._createTween(),this):n.default.error('No "el" option specified, aborting')}return t.prototype._declareDefaults=function(){this._defaults={duration:500,delay:0,easing:"linear.none",repeat:0,yoyo:!1,isRunLess:!1,isShowEnd:!1,onStart:null,onUpdate:null,onComplete:null}},t.prototype._vars=function(){this._props=n.default.cloneObj(this.o),this.el=this.o.el,this._frames=[]},t.prototype.run=function(t){return this.timeline.play()},t.prototype._extendDefaults=function(){return n.default.extend(this._props,this._defaults)},t.prototype._parseFrames=function(){this._frames=Array.prototype.slice.call(this.el.children,0),this._frames.forEach(function(t,e){return t.style.opacity=0}),this._frameStep=1/this._frames.length},t.prototype._createTween=function(){var t=this;this._tween=new o.default({duration:this._props.duration,delay:this._props.delay,yoyo:this._props.yoyo,repeat:this._props.repeat,easing:this._props.easing,onStart:function(){return t._props.onStart&&t._props.onStart()},onComplete:function(){return t._props.onComplete&&t._props.onComplete()},onUpdate:function(e){return t._setProgress(e)}}),this.timeline=new a.default,this.timeline.add(this._tween),this._props.isRunLess||this._startTween()},t.prototype._startTween=function(){var t=this;setTimeout(function(){return t.timeline.play()},1)},t.prototype._setProgress=function(t){var e=Math.floor(t/this._frameStep);if(this._prevFrame!=this._frames[e]){this._prevFrame&&(this._prevFrame.style.opacity=0);var r=1===t&&this._props.isShowEnd?e-1:e;this._frames[r]&&(this._frames[r].style.opacity=1),this._prevFrame=this._frames[e]}this._props.onUpdate&&this._props.onUpdate(t)},t}();e.default=p},function(t,e,r){var i,s,n,o,a,p=function(t,e){return function(){return t.apply(e,arguments)}};o=r(71),a=r(130),n=r(101).default,s=r(110).default,i=function(){function t(t){this.o=null!=t?t:{},this.calcHeight=p(this.calcHeight,this),this.vars()||this.createTween()}return t.prototype.defaults={path:null,curvature:{x:"75%",y:"50%"},isCompositeLayer:!0,delay:0,duration:1e3,easing:null,repeat:0,yoyo:!1,onStart:null,onComplete:null,onUpdate:null,offsetX:0,offsetY:0,angleOffset:null,pathStart:0,pathEnd:1,motionBlur:0,transformOrigin:null,isAngle:!1,isReverse:!1,isRunLess:!1,isPresetPosition:!0},t.prototype.vars=function(){return this.getScaler=o.bind(this.getScaler,this),this.resize=a,this.props=o.cloneObj(this.defaults),this.extendOptions(this.o),this.isMotionBlurReset=o.isSafari||o.isIE,this.isMotionBlurReset&&(this.props.motionBlur=0),this.history=[o.cloneObj(this.props)],this.postVars()},t.prototype.curveToPath=function(t){var e,r,i,s,n,a,p,u,l,h,c,f,d;return h=document.createElementNS(o.NS,"path"),d=t.start,l={x:d.x+t.shift.x,y:d.x+t.shift.y},r=t.curvature,p=t.shift.x,u=t.shift.y,f=Math.sqrt(p*p+u*u),c=f/100,e=Math.atan(u/p)*(180/Math.PI)+90,t.shift.x<0&&(e+=180),i=o.parseUnit(r.x),i="%"===i.unit?i.value*c:i.value,a=o.getRadialPoint({center:{x:d.x,y:d.y},radius:i,angle:e}),s=o.parseUnit(r.y),s="%"===s.unit?s.value*c:s.value,n=o.getRadialPoint({center:{x:a.x,y:a.y},radius:s,angle:e+90}),h.setAttribute("d","M"+d.x+","+d.y+" Q"+n.x+","+n.y+" "+l.x+","+l.y),h},t.prototype.postVars=function(){return this.props.pathStart=o.clamp(this.props.pathStart,0,1),this.props.pathEnd=o.clamp(this.props.pathEnd,this.props.pathStart,1),this.angle=0,this.speedX=0,this.speedY=0,this.blurX=0,this.blurY=0,this.prevCoords={},this.blurAmount=20,this.props.motionBlur=o.clamp(this.props.motionBlur,0,1),this.onUpdate=this.props.onUpdate,this.o.el?(this.el=this.parseEl(this.props.el),this.props.motionBlur>0&&this.createFilter(),this.path=this.getPath(),this.path.getAttribute("d")?(this.len=this.path.getTotalLength(),this.slicedLen=this.len*(this.props.pathEnd-this.props.pathStart),this.startLen=this.props.pathStart*this.len,this.fill=this.props.fill,null!=this.fill&&(this.container=this.parseEl(this.props.fill.container),this.fillRule=this.props.fill.fillRule||"all",this.getScaler(),null!=this.container)?(this.removeEvent(this.container,"onresize",this.getScaler),this.addEvent(this.container,"onresize",this.getScaler)):void 0):(o.error("Path has no coordinates to work with, aborting"),!0)):(o.error('Missed "el" option. It could be a selector, DOMNode or another module.'),!0)},t.prototype.addEvent=function(t,e,r){return t.addEventListener(e,r,!1)},t.prototype.removeEvent=function(t,e,r){return t.removeEventListener(e,r,!1)},t.prototype.createFilter=function(){var t,e;return t=document.createElement("div"),this.filterID="filter-"+o.getUniqID(),t.innerHTML='<svg id="svg-'+this.filterID+'"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="'+this.filterID+'" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>',e=t.querySelector("#svg-"+this.filterID),this.filter=e.querySelector("#blur"),this.filterOffset=e.querySelector("#blur-offset"),document.body.insertBefore(e,document.body.firstChild),this.el.style.filter="url(#"+this.filterID+")",this.el.style[o.prefix.css+"filter"]="url(#"+this.filterID+")"},t.prototype.parseEl=function(t){return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:null!=t._setProp?(this.isModule=!0,t):void 0},t.prototype.getPath=function(){return o.parsePath(this.props.path)||(this.props.path.x||this.props.path.y?this.curveToPath({start:{x:0,y:0},shift:{x:this.props.path.x||0,y:this.props.path.y||0},curvature:{x:this.props.curvature.x||this.defaults.curvature.x,y:this.props.curvature.y||this.defaults.curvature.y}}):void 0)},t.prototype.getScaler=function(){var t,e,r;switch(this.cSize={width:this.container.offsetWidth||0,height:this.container.offsetHeight||0},r=this.path.getPointAtLength(0),t=this.path.getPointAtLength(this.len),e={},this.scaler={},e.width=t.x>=r.x?t.x-r.x:r.x-t.x,e.height=t.y>=r.y?t.y-r.y:r.y-t.y,this.fillRule){case"all":return this.calcWidth(e),this.calcHeight(e);case"width":return this.calcWidth(e),this.scaler.y=this.scaler.x;case"height":return this.calcHeight(e),this.scaler.x=this.scaler.y}},t.prototype.calcWidth=function(t){return this.scaler.x=this.cSize.width/t.width,!isFinite(this.scaler.x)&&(this.scaler.x=1)},t.prototype.calcHeight=function(t){return this.scaler.y=this.cSize.height/t.height,!isFinite(this.scaler.y)&&(this.scaler.y=1)},t.prototype.run=function(t){var e,r;if(t){this.history[0];for(e in t)r=t[e],o.callbacksMap[e]||o.tweenOptionMap[e]?(o.warn('the property "'+e+'" property can not be overridden on run yet'),delete t[e]):this.history[0][e]=r;this.tuneOptions(t)}return this.startTween()},t.prototype.createTween=function(){return this.tween=new n({duration:this.props.duration,delay:this.props.delay,yoyo:this.props.yoyo,repeat:this.props.repeat,easing:this.props.easing,onStart:function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onComplete:function(t){return function(){var e;return t.props.motionBlur&&t.setBlur({blur:{x:0,y:0},offset:{x:0,y:0}}),null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onFirstUpdate:function(t){return function(e,r){if(!e)return t.history.length>1&&t.tuneOptions(t.history[0])}}(this)}),this.timeline=new s,this.timeline.add(this.tween),!this.props.isRunLess&&this.startTween(),this.props.isPresetPosition&&this.setProgress(0,!0)},t.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.timeline)?e.play():void 0}}(this),1)},t.prototype.setProgress=function(t,e){var r,i,s,n;return r=this.startLen+(this.props.isReverse?(1-t)*this.slicedLen:t*this.slicedLen),i=this.path.getPointAtLength(r),s=i.x+this.props.offsetX,n=i.y+this.props.offsetY,this._getCurrentAngle(i,r,t),this._setTransformOrigin(t),this._setTransform(s,n,t,e),this.props.motionBlur&&this.makeMotionBlur(s,n)},t.prototype.setElPosition=function(t,e,r){var i,s,n,a;return n=0!==this.angle?"rotate("+this.angle+"deg)":"",s=this.props.isCompositeLayer&&o.is3d,i=s?"translateZ(0)":"",a="translate("+t+"px,"+e+"px) "+n+" "+i,o.setPrefixedStyle(this.el,"transform",a)},t.prototype.setModulePosition=function(t,e){return this.el._setProp({shiftX:t+"px",shiftY:e+"px",angle:this.angle}),this.el._draw()},t.prototype._getCurrentAngle=function(t,e,r){var i,s,n,a,p;return s="function"==typeof this.props.transformOrigin,this.props.isAngle||null!=this.props.angleOffset||s?(n=this.path.getPointAtLength(e-1),a=t.y-n.y,p=t.x-n.x,i=Math.atan(a/p),!isFinite(i)&&(i=0),this.angle=i*o.RAD_TO_DEG,"function"!=typeof this.props.angleOffset?this.angle+=this.props.angleOffset||0:this.angle=this.props.angleOffset.call(this,this.angle,r)):this.angle=0},t.prototype._setTransform=function(t,e,r,i){var s;return this.scaler&&(t*=this.scaler.x,e*=this.scaler.y),s=null,i||(s="function"==typeof this.onUpdate?this.onUpdate(r,{x:t,y:e,angle:this.angle}):void 0),this.isModule?this.setModulePosition(t,e):"string"!=typeof s?this.setElPosition(t,e,r):o.setPrefixedStyle(this.el,"transform",s)},t.prototype._setTransformOrigin=function(t){var e,r;if(this.props.transformOrigin)return e="function"==typeof this.props.transformOrigin,r=e?this.props.transformOrigin(this.angle,t):this.props.transformOrigin,o.setPrefixedStyle(this.el,"transform-origin",r)},t.prototype.makeMotionBlur=function(t,e){var r,i,s,n,a,p,u;return u=0,a=1,p=1,null==this.prevCoords.x||null==this.prevCoords.y?(this.speedX=0,this.speedY=0):(s=t-this.prevCoords.x,n=e-this.prevCoords.y,s>0&&(a=-1),a<0&&(p=-1),this.speedX=Math.abs(s),this.speedY=Math.abs(n),u=Math.atan(n/s)*(180/Math.PI)+90),r=u-this.angle,i=this.angToCoords(r),this.blurX=o.clamp(this.speedX/16*this.props.motionBlur,0,1),this.blurY=o.clamp(this.speedY/16*this.props.motionBlur,0,1),this.setBlur({blur:{x:3*this.blurX*this.blurAmount*Math.abs(i.x),y:3*this.blurY*this.blurAmount*Math.abs(i.y)},offset:{x:3*a*this.blurX*i.x*this.blurAmount,y:3*p*this.blurY*i.y*this.blurAmount}}),this.prevCoords.x=t,this.prevCoords.y=e},t.prototype.setBlur=function(t){if(!this.isMotionBlurReset)return this.filter.setAttribute("stdDeviation",t.blur.x+","+t.blur.y),this.filterOffset.setAttribute("dx",t.offset.x),this.filterOffset.setAttribute("dy",t.offset.y)},t.prototype.extendDefaults=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this[e]=i);return r},t.prototype.extendOptions=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this.props[e]=i);return r},t.prototype.then=function(t){var e,r,i,s,a;s=this.history[this.history.length-1],i={};for(r in s)a=s[r],!o.callbacksMap[r]&&!o.tweenOptionMap[r]||"duration"===r?null==t[r]&&(t[r]=a):null==t[r]&&(t[r]=void 0),o.tweenOptionMap[r]&&(i[r]="duration"!==r?t[r]:null!=t[r]?t[r]:s[r]);return this.history.push(t),e=this,i.onUpdate=function(t){return function(e){return t.setProgress(e)}}(this),i.onStart=function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),i.onComplete=function(t){return function(){var e;return null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),i.onFirstUpdate=function(){return e.tuneOptions(e.history[this.index])},i.isChained=!t.delay,this.timeline.append(new n(i)),this},t.prototype.tuneOptions=function(t){return this.extendOptions(t),this.postVars()},t.prototype.angToCoords=function(t){var e,r,i;return t%=360,e=(t-90)*Math.PI/180,r=Math.cos(e),i=Math.sin(e),r=r<0?Math.max(r,-.7):Math.min(r,.7),i=i<0?Math.max(i,-.7):Math.min(i,.7),{x:1.428571429*r,y:1.428571429*i}},t}(),t.exports=i},function(t,e,r){var i,s;!function(){var r;r=function(){function t(t){this.o=null!=t?t:{},window.isAnyResizeEventInited||(this.vars(),this.redefineProto())}return t.prototype.vars=function(){return window.isAnyResizeEventInited=!0,this.allowedProtos=[HTMLDivElement,HTMLFormElement,HTMLLinkElement,HTMLBodyElement,HTMLParagraphElement,HTMLFieldSetElement,HTMLLegendElement,HTMLLabelElement,HTMLButtonElement,HTMLUListElement,HTMLOListElement,HTMLLIElement,HTMLHeadingElement,HTMLQuoteElement,HTMLPreElement,HTMLBRElement,HTMLFontElement,HTMLHRElement,HTMLModElement,HTMLParamElement,HTMLMapElement,HTMLTableElement,HTMLTableCaptionElement,HTMLImageElement,HTMLTableCellElement,HTMLSelectElement,HTMLInputElement,HTMLTextAreaElement,HTMLAnchorElement,HTMLObjectElement,HTMLTableColElement,HTMLTableSectionElement,HTMLTableRowElement],this.timerElements={img:1,textarea:1,input:1,embed:1,object:1,svg:1,canvas:1,tr:1,tbody:1,thead:1,tfoot:1,a:1,select:1,option:1,optgroup:1,dl:1,dt:1,br:1,basefont:1,font:1,col:1,iframe:1}},t.prototype.redefineProto=function(){var t,e,r;return e=this,function(){var i,s,n,o;for(n=this.allowedProtos,o=[],t=i=0,s=n.length;i<s;t=++i)null!=(r=n[t]).prototype&&o.push(function(t){var r,i;return r=t.prototype.addEventListener||t.prototype.attachEvent,function(r){var i;i=function(){return this===window&&this===document||"onresize"===arguments[0]&&!this.isAnyResizeEventInited&&e.handleResize({args:arguments,that:this}),r.apply(this,arguments)},t.prototype.addEventListener?t.prototype.addEventListener=i:t.prototype.attachEvent&&(t.prototype.attachEvent=i)}(r),i=t.prototype.removeEventListener||t.prototype.detachEvent,function(e){var r;return r=function(){return this.isAnyResizeEventInited=!1,this.iframe&&this.removeChild(this.iframe),e.apply(this,arguments)},t.prototype.removeEventListener?t.prototype.removeEventListener=r:t.prototype.detachEvent?t.prototype.detachEvent=wrappedListener:void 0}(i)}(r));return o}.call(this)},t.prototype.handleResize=function(t){var e,r,i,s,n,o,a;return r=t.that,this.timerElements[r.tagName.toLowerCase()]?this.initTimer(r):(i=document.createElement("iframe"),r.appendChild(i),i.style.width="100%",i.style.height="100%",i.style.position="absolute",i.style.zIndex=-999,i.style.opacity=0,i.style.top=0,i.style.left=0,e=window.getComputedStyle?getComputedStyle(r):r.currentStyle,n=""===r.style.position,o="static"===e.position&&n,s=""===e.position&&""===r.style.position,(o||s)&&(r.style.position="relative"),null!=(a=i.contentWindow)&&(a.onresize=function(t){return function(e){return t.dispatchEvent(r)}}(this)),r.iframe=i),r.isAnyResizeEventInited=!0},t.prototype.initTimer=function(t){var e,r;return r=0,e=0,this.interval=setInterval(function(i){return function(){var s,n;if(n=t.offsetWidth,s=t.offsetHeight,n!==r||s!==e)return i.dispatchEvent(t),r=n,e=s}}(this),this.o.interval||62.5)},t.prototype.dispatchEvent=function(t){var e;return document.createEvent?((e=document.createEvent("HTMLEvents")).initEvent("onresize",!1,!1),t.dispatchEvent(e)):!!document.createEventObject&&(e=document.createEventObject(),t.fireEvent("onresize",e))},t.prototype.destroy=function(){var t,e,r,i,s,n;for(clearInterval(this.interval),this.interval=null,window.isAnyResizeEventInited=!1,this,n=[],t=e=0,r=(s=this.allowedProtos).length;e<r;t=++e)null!=(i=s[t]).prototype&&n.push(function(t){return t.prototype.addEventListener||t.prototype.attachEvent,t.prototype.addEventListener?t.prototype.addEventListener=Element.prototype.addEventListener:t.prototype.attachEvent&&(t.prototype.attachEvent=Element.prototype.attachEvent),t.prototype.removeEventListener?t.prototype.removeEventListener=Element.prototype.removeEventListener:t.prototype.detachEvent?t.prototype.detachEvent=Element.prototype.detachEvent:void 0}(i));return n},t}(),i=[],void 0!==(s=function(){return new r}.apply(e,i))&&(t.exports=s)}()}])});
;/* Modernizr 2.8.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

;/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());
;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/color-finder/index.html
//
// Detection of the most prominent color in an image
// version 1.1.1

function ColorFinder(colorFactorCallback) {
  this.callback = colorFactorCallback;
  this.getMostProminentColor = function(imgEl) {
    var rgb = null;
    if (!this.callback) this.callback = function() { return 1; };
    var data = this.getImageData(imgEl);
    rgb = this.getMostProminentRGBImpl(data, 6, rgb, this.callback);
    rgb = this.getMostProminentRGBImpl(data, 4, rgb, this.callback);
    rgb = this.getMostProminentRGBImpl(data, 2, rgb, this.callback);
    rgb = this.getMostProminentRGBImpl(data, 0, rgb, this.callback);
    return rgb;
  };

  this.getImageData = function(imgEl, degrade, rgbMatch, colorFactorCallback) {
    
    var rgb,
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height, key,
        i = -4,
        db={},
        length,r,g,b,
        count = 0;
    
    if (!context) {
      return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
      data = context.getImageData(0, 0, width, height);
    } catch(e) {
      /* security error, img on diff domain */
      return null;
    }

    length = data.data.length;
    
    var factor = Math.max(1,Math.round(length/5000));
    var result = {};
    
    while ( (i += 4*factor) < length ) {
      if (data.data[i+3]>32) {
        key = (data.data[i]>>degrade) + "," + (data.data[i+1]>>degrade) + "," + (data.data[i+2]>>degrade);
        if (!result.hasOwnProperty(key)) {
          rgb = {r:data.data[i], g:data.data[i+1], b:data.data[i+2],count:1};
          rgb.weight = this.callback(rgb.r, rgb.g, rgb.b);
          if (rgb.weight<=0) rgb.weight = 1e-10;
          result[key]=rgb;
        } else {
          rgb=result[key];
          rgb.count++;
        }
      }
    }

    return result;

  };
  
  this.getMostProminentRGBImpl = function(pixels, degrade, rgbMatch, colorFactorCallback) {
    
    var rgb = {r:0,g:0,b:0,count:0,d:degrade},
        db={},
        pixel,pixelKey,pixelGroupKey,
        length,r,g,b,
        count = 0;
    
    
    for (pixelKey in pixels) {
      pixel = pixels[pixelKey];
      totalWeight = pixel.weight * pixel.count;
      ++count;
      if (this.doesRgbMatch(rgbMatch, pixel.r, pixel.g, pixel.b)) {
        pixelGroupKey = (pixel.r>>degrade) + "," + (pixel.g>>degrade) + "," + (pixel.b>>degrade);
        if (db.hasOwnProperty(pixelGroupKey))
          db[pixelGroupKey]+=totalWeight;
        else
          db[pixelGroupKey]=totalWeight;
      }
    }
    
    for (i in db) {
      data = i.split(",");
      r = data[0];
      g = data[1];
      b = data[2];
      count = db[i];
      
      if (count>rgb.count) {
        rgb.count = count;
        data = i.split(",");
        rgb.r = r;
        rgb.g = g;
        rgb.b = b;
      }
    }
    
    return rgb;
    
  };

  this.doesRgbMatch = function(rgb,r,g,b) {
    if (rgb==null) return true;
    r = r >> rgb.d;
    g = g >> rgb.d;
    b = b >> rgb.d;
    return rgb.r == r && rgb.g == g && rgb.b == b;
  }

}

;/**
 * gridScrollFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

(function () {

	if (typeof window.CustomEvent === "function") return false;

	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
})();

; (function (window) {

	'use strict';

	var docElem = window.document.documentElement,
		support = { animations: Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation': 'webkitAnimationEnd',
			'OAnimation': 'oAnimationEnd',
			'msAnimation': 'MSAnimationEnd',
			'animation': 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

	function getViewportH() {
		var client = docElem['clientHeight'],
			inner = window['innerHeight'];

		if (client < inner)
			return inner;
		else
			return client;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	// http://stackoverflow.com/a/5598797/989439
	function getOffset(el) {
		var offsetTop = 0, offsetLeft = 0;
		do {
			if (!isNaN(el.offsetTop)) {
				offsetTop += el.offsetTop;
			}
			if (!isNaN(el.offsetLeft)) {
				offsetLeft += el.offsetLeft;
			}
		} while (el = el.offsetParent)

		return {
			top: offsetTop,
			left: offsetLeft
		}
	}

	function inViewport(el, h) {
		var elH = el.offsetHeight,
			scrolled = scrollY(),
			viewed = scrolled + getViewportH(),
			elTop = getOffset(el).top,
			elBottom = elTop + elH,
			// if 0, the element is considered in the viewport as soon as it enters.
			// if 1, the element is considered in the viewport only when it's fully inside
			// value in percentage (1 >= h >= 0)
			h = h || 0;

		return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
	}

	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function GridItem(el) {
		this.el = el;
		this.anchor = el.querySelector('a')
		this.image = el.querySelector('img');
		this.desc = el.querySelector('h3');
	}

	GridItem.prototype.addCurtain = function () {
		if (!this.image) return;
		this.curtain = document.createElement('div');
		this.curtain.className = 'curtain';
		var rgb = {r: 255, g: 255, b: 255};
		if (rgb.r && rgb.g && rgb.b) {
			this.curtain.style.background = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
		}
		this.anchor.appendChild(this.curtain);
	}

	GridItem.prototype.changeAnimationDelay = function (time) {
		if (this.curtain) {
			this.curtain.style.WebkitAnimationDelay = time + 'ms';
			this.curtain.style.animationDelay = time + 'ms';
		}
		if (this.image) {
			this.image.style.WebkitAnimationDelay = time + 'ms';
			this.image.style.animationDelay = time + 'ms';
		}
		if (this.desc) {
			this.desc.style.WebkitAnimationDelay = time + 'ms';
			this.desc.style.animationDelay = time + 'ms';
		}
	}

	function GridScrollFx(el, options, callback) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
		this.layoutCompleteCallback = callback;
	}

	GridScrollFx.prototype.options = {
		// Minimum and maximum delay of the animation (random value is chosen)
		minDelay: 0,
		maxDelay: 500,
		// The viewportFactor defines how much of the appearing item has to be visible in order for the animation to start
		// if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
		// If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
		viewportFactor: 0
	}

	GridScrollFx.prototype._init = function () {
		var self = this, items = [];

		[].slice.call(this.el.children).forEach(function (el, i) {
			var item = new GridItem(el);
			items.push(item);
		});

		this.items = items;
		this.itemsCount = this.items.length;
		this.itemsRenderedCount = 0;
		this.didScroll = false;

		imagesLoaded(this.el, function () {
			// show grid
			classie.add(self.el, 'loaded');

			// initialize masonry
			self.masonry = new Masonry(self.el, {
				itemSelector: 'li',
				isFitWidth: true,
				transitionDuration: 0
			});

			self.masonry.on('layoutComplete', function () {
				if (typeof self.layoutCompleteCallback !== 'undefined' && typeof self.layoutCompleteCallback === 'function') {
					self.layoutCompleteCallback();
				}
			});

			// the items already shown...
			self.items.forEach(function (item) {
				if (inViewport(item.el)) {
					++self.itemsRenderedCount;
					var event = new CustomEvent("animate-remove-byscrollfx", {
						detail: item
					});
					document.dispatchEvent(event);
					classie.add(item.el, 'shown');
				}
				else {
					item.addCurtain();
					// add random delay
					item.changeAnimationDelay(Math.random() * (self.options.maxDelay - self.options.minDelay) + self.options.minDelay);
				}
			});

			var onScrollFn = function () {
				if (!self.didScroll) {
					self.didScroll = true;
					setTimeout(function () { self._scrollPage(); }, 33);
				}

				if (self.itemsRenderedCount === self.itemsCount) {
					window.removeEventListener('scroll', onScrollFn, false);
				}
			}

			// animate the items inside the viewport (on scroll)
			window.addEventListener('scroll', onScrollFn, false);
			// check if new items are in the viewport after a resize
			window.addEventListener('resize', function () { self._resizeHandler(); }, false);
		});
	}

	GridScrollFx.prototype._scrollPage = function () {
		var self = this;
		this.items.forEach(function (item) {
			if (!classie.has(item.el, 'shown') && !classie.has(item.el, 'animate') && inViewport(item.el, self.options.viewportFactor)) {
				++self.itemsRenderedCount;

				if (!item.curtain) {
					classie.add(item.el, 'shown');
					return;
				};

				classie.add(item.el, 'animate');
				var event = new CustomEvent("animate-remove-byscrollfx", {
					detail: item
				});
				// after animation ends add class shown
				var onEndAnimationFn = function (ev) {
					if (support.animations) {
						this.removeEventListener(animEndEventName, onEndAnimationFn);
					}
					document.dispatchEvent(event);
					classie.remove(item.el, 'animate');
					classie.add(item.el, 'shown');
				};

				if (support.animations) {
					item.curtain.addEventListener(animEndEventName, onEndAnimationFn);
				}
				else {
					onEndAnimationFn();
				}
			}
		});
		this.didScroll = false;
	}

	GridScrollFx.prototype._resizeHandler = function () {
		var self = this;
		function delayed() {
			self._scrollPage();
			self.resizeTimeout = null;
		}
		if (this.resizeTimeout) {
			clearTimeout(this.resizeTimeout);
		}
		this.resizeTimeout = setTimeout(delayed, 1000);
	}

	// add to global namespace
	window.GridScrollFx = GridScrollFx;

})(window);
;/*!
 * imagesLoaded PACKAGED v3.1.6
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
;/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c(a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(this),function(a){function b(a){"function"==typeof a&&(b.isReady?a():f.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==e.readyState;if(!b.isReady&&!c){b.isReady=!0;for(var d=0,g=f.length;g>d;d++){var h=f[d];h()}}}function d(d){return d.bind(e,"DOMContentLoaded",c),d.bind(e,"readystatechange",c),d.bind(a,"load",c),b}var e=a.document,f=[];b.isReady=!1,"function"==typeof define&&define.amd?(b.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],d)):a.docReady=d(a.eventie)}(this),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var e={};e.width=a.offsetWidth,e.height=a.offsetHeight;for(var k=e.isBorderBox=!(!j||!d[j]||"border-box"!==d[j]),l=0,m=g.length;m>l;l++){var n=g[l],o=d[n];o=h(a,o);var p=parseFloat(o);e[n]=isNaN(p)?0:p}var q=e.paddingLeft+e.paddingRight,r=e.paddingTop+e.paddingBottom,s=e.marginLeft+e.marginRight,t=e.marginTop+e.marginBottom,u=e.borderLeftWidth+e.borderRightWidth,v=e.borderTopWidth+e.borderBottomWidth,w=k&&i,x=b(d.width);x!==!1&&(e.width=x+(w?0:q+u));var y=b(d.height);return y!==!1&&(e.height=y+(w?0:r+v)),e.innerWidth=e.width-(q+u),e.innerHeight=e.height-(r+v),e.outerWidth=e.width+s,e.outerHeight=e.height+t,e}}function h(a,b){if(e||-1===b.indexOf("%"))return b;var c=a.style,d=c.left,f=a.runtimeStyle,g=f&&f.left;return g&&(f.left=a.currentStyle.left),c.left=b,b=c.pixelLeft,c.left=d,g&&(f.left=g),b}var i,j=a("boxSizing");return function(){if(j){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[j]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);i=200===b(d.width),c.removeChild(a)}}(),d}var e=a.getComputedStyle,f=e?function(a){return e(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):"object"==typeof exports?module.exports=d(require("get-style-property")):a.getSize=d(a.getStyleProperty)}(window),function(a,b){function c(a,b){return a[h](b)}function d(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function e(a,b){d(a);for(var c=a.parentNode.querySelectorAll(b),e=0,f=c.length;f>e;e++)if(c[e]===a)return!0;return!1}function f(a,b){return d(a),c(a,b)}var g,h=function(){if(b.matchesSelector)return"matchesSelector";for(var a=["webkit","moz","ms","o"],c=0,d=a.length;d>c;c++){var e=a[c],f=e+"MatchesSelector";if(b[f])return f}}();if(h){var i=document.createElement("div"),j=c(i,"div");g=j?c:f}else g=e;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return g}):window.matchesSelector=g}(this,Element.prototype),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){for(var b in a)return!1;return b=null,!0}function d(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function e(a,e,f){function h(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var i=f("transition"),j=f("transform"),k=i&&j,l=!!f("perspective"),m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i],n=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var a={},b=0,c=n.length;c>b;b++){var d=n[b],e=f(d);e&&e!==d&&(a[d]=e)}return a}();b(h.prototype,a.prototype),h.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},h.prototype.getSize=function(){this.size=e(this.element)},h.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=o[c]||c;b[d]=a[c]}},h.prototype.getPosition=function(){var a=g(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var h=this.layout.size;e-=c?h.paddingLeft:h.paddingRight,f-=d?h.paddingTop:h.paddingBottom,this.position.x=e,this.position.y=f},h.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={};b.isOriginLeft?(c.left=this.position.x+a.paddingLeft+"px",c.right=""):(c.right=this.position.x+a.paddingRight+"px",c.left=""),b.isOriginTop?(c.top=this.position.y+a.paddingTop+"px",c.bottom=""):(c.bottom=this.position.y+a.paddingBottom+"px",c.top=""),this.css(c),this.emitEvent("layout",[this])};var p=l?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};h.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=p(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},h.prototype.moveTo=k?h.prototype._transitionTo:h.prototype.goTo,h.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},h.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},h.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var q=j&&d(j)+",opacity";h.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:q,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(m,this,!1))},h.prototype.transition=h.prototype[i?"_transition":"_nonTransition"],h.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},h.prototype.onotransitionend=function(a){this.ontransitionend(a)};var r={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};h.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,d=r[a.propertyName]||a.propertyName;if(delete b.ingProperties[d],c(b.ingProperties)&&this.disableTransition(),d in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[d]),d in b.onEnd){var e=b.onEnd[d];e.call(this),delete b.onEnd[d]}this.emitEvent("transitionEnd",[this])}},h.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(m,this,!1),this.isTransitioning=!1},h.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var s={transitionProperty:"",transitionDuration:""};return h.prototype.removeTransitionStyles=function(){this.css(s)},h.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},h.prototype.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.on("transitionEnd",function(){return a.removeElem(),!0}),this.hide()},h.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options;this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0})},h.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options;this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},h.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}var f=a.getComputedStyle,g=f?function(a){return f(a,null)}:function(a){return a.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],e):(a.Outlayer={},a.Outlayer.Item=e(a.EventEmitter,a.getSize,a.getStyleProperty))}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===l.call(a)}function d(a){var b=[];if(c(a))b=a;else if(a&&"number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,b){var c=n(b,a);-1!==c&&b.splice(c,1)}function f(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()}function g(c,g,l,n,o,p){function q(a,c){if("string"==typeof a&&(a=h.querySelector(a)),!a||!m(a))return void(i&&i.error("Bad "+this.constructor.namespace+" element: "+a));this.element=a,this.options=b({},this.constructor.defaults),this.option(c);var d=++r;this.element.outlayerGUID=d,s[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var r=0,s={};return q.namespace="outlayer",q.Item=p,q.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},b(q.prototype,l.prototype),q.prototype.option=function(a){b(this.options,a)},q.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},q.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},q.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},q.prototype._filterFindItemElements=function(a){a=d(a);for(var b=this.options.itemSelector,c=[],e=0,f=a.length;f>e;e++){var g=a[e];if(m(g))if(b){o(g,b)&&c.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)c.push(h[i])}else c.push(g)}return c},q.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},q.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},q.prototype._init=q.prototype.layout,q.prototype._resetLayout=function(){this.getSize()},q.prototype.getSize=function(){this.size=n(this.element)},q.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):m(d)&&(c=d),this[a]=c?n(c)[b]:d):this[a]=0},q.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},q.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},q.prototype._layoutItems=function(a,b){function c(){d.emitEvent("layoutComplete",[d,a])}var d=this;if(!a||!a.length)return void c();this._itemsOn(a,"layout",c);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f],i=this._getItemLayoutPosition(h);i.item=h,i.isInstant=b||h.isLayoutInstant,e.push(i)}this._processLayoutQueue(e)},q.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},q.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},q.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},q.prototype._postLayout=function(){this.resizeContainer()},q.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},q.prototype._getContainerSize=k,q.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},q.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},q.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},q.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},q.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},q.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e(d,this.stamps),this.unignore(d)}},q.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=d(a)):void 0},q.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},q.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},q.prototype._manageStamp=k,q.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,d=n(a),e={left:b.left-c.left-d.marginLeft,top:b.top-c.top-d.marginTop,right:c.right-b.right-d.marginRight,bottom:c.bottom-b.bottom-d.marginBottom};return e},q.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},q.prototype.bindResize=function(){this.isResizeBound||(c.bind(a,"resize",this),this.isResizeBound=!0)},q.prototype.unbindResize=function(){this.isResizeBound&&c.unbind(a,"resize",this),this.isResizeBound=!1},q.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},q.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},q.prototype.needsResizeLayout=function(){var a=n(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},q.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},q.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},q.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},q.prototype.reveal=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.reveal()}},q.prototype.hide=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.hide()}},q.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},q.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},q.prototype.remove=function(a){a=d(a);var b=this.getItems(a);if(b&&b.length){this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var c=0,f=b.length;f>c;c++){var g=b[c];g.remove(),e(g,this.items)}}},q.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize(),delete this.element.outlayerGUID,j&&j.removeData(this.element,this.constructor.namespace)},q.data=function(a){var b=a&&a.outlayerGUID;return b&&s[b]},q.create=function(a,c){function d(){q.apply(this,arguments)}return Object.create?d.prototype=Object.create(q.prototype):b(d.prototype,q.prototype),d.prototype.constructor=d,d.defaults=b({},q.defaults),b(d.defaults,c),d.prototype.settings={},d.namespace=a,d.data=q.data,d.Item=function(){p.apply(this,arguments)},d.Item.prototype=new p,g(function(){for(var b=f(a),c=h.querySelectorAll(".js-"+b),e="data-"+b+"-options",g=0,k=c.length;k>g;g++){var l,m=c[g],n=m.getAttribute(e);try{l=n&&JSON.parse(n)}catch(o){i&&i.error("Error parsing "+e+" on "+m.nodeName.toLowerCase()+(m.id?"#"+m.id:"")+": "+o);continue}var p=new d(m,l);j&&j.data(m,a,p)}}),j&&j.bridget&&j.bridget(a,d),d},q.Item=p,q}var h=a.document,i=a.console,j=a.jQuery,k=function(){},l=Object.prototype.toString,m="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},n=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],g):a.Outlayer=g(a.eventie,a.docReady,a.EventEmitter,a.getSize,a.matchesSelector,a.Outlayer.Item)}(window),function(a){function b(a,b){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}var c=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(e===b)return c}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):a.Masonry=b(a.Outlayer,a.getSize)}(window);
;typeof navigator === "object" && (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Plyr', factory) :
  (global.Plyr = factory());
}(this, (function () { 'use strict';

  // Polyfill for creating CustomEvents on IE9/10/11

  // code pulled from:
  // https://github.com/d4tocchini/customevent-polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

  (function() {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      var ce = new window.CustomEvent('test', { cancelable: true });
      ce.preventDefault();
      if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
      }
    } catch (e) {
      var CustomEvent = function(event, params) {
        var evt, origPrevent;
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };

        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(
          event,
          params.bubbles,
          params.cancelable,
          params.detail
        );
        origPrevent = evt.preventDefault;
        evt.preventDefault = function() {
          origPrevent.call(this);
          try {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function() {
                return true;
              }
            });
          } catch (e) {
            this.defaultPrevented = true;
          }
        };
        return evt;
      };

      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent; // expose definition to window
    }
  })();

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  (function(global) {
    /**
     * Polyfill URLSearchParams
     *
     * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
     */

    var checkIfIteratorIsSupported = function() {
      try {
        return !!Symbol.iterator;
      } catch (error) {
        return false;
      }
    };


    var iteratorSupported = checkIfIteratorIsSupported();

    var createIterator = function(items) {
      var iterator = {
        next: function() {
          var value = items.shift();
          return { done: value === void 0, value: value };
        }
      };

      if (iteratorSupported) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };

    /**
     * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
     * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
     */
    var serializeParam = function(value) {
      return encodeURIComponent(value).replace(/%20/g, '+');
    };

    var deserializeParam = function(value) {
      return decodeURIComponent(value).replace(/\+/g, ' ');
    };

    var polyfillURLSearchParams = function() {

      var URLSearchParams = function(searchString) {
        Object.defineProperty(this, '_entries', { writable: true, value: {} });

        if (typeof searchString === 'string') {
          if (searchString !== '') {
            this._fromString(searchString);
          }
        } else if (searchString instanceof URLSearchParams) {
          var _this = this;
          searchString.forEach(function(value, name) {
            _this.append(name, value);
          });
        }
      };

      var proto = URLSearchParams.prototype;

      proto.append = function(name, value) {
        if (name in this._entries) {
          this._entries[name].push(value.toString());
        } else {
          this._entries[name] = [value.toString()];
        }
      };

      proto.delete = function(name) {
        delete this._entries[name];
      };

      proto.get = function(name) {
        return (name in this._entries) ? this._entries[name][0] : null;
      };

      proto.getAll = function(name) {
        return (name in this._entries) ? this._entries[name].slice(0) : [];
      };

      proto.has = function(name) {
        return (name in this._entries);
      };

      proto.set = function(name, value) {
        this._entries[name] = [value.toString()];
      };

      proto.forEach = function(callback, thisArg) {
        var entries;
        for (var name in this._entries) {
          if (this._entries.hasOwnProperty(name)) {
            entries = this._entries[name];
            for (var i = 0; i < entries.length; i++) {
              callback.call(thisArg, entries[i], name, this);
            }
          }
        }
      };

      proto.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return createIterator(items);
      };

      proto.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return createIterator(items);
      };

      proto.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return createIterator(items);
      };

      if (iteratorSupported) {
        proto[Symbol.iterator] = proto.entries;
      }

      proto.toString = function() {
        var searchArray = [];
        this.forEach(function(value, name) {
          searchArray.push(serializeParam(name) + '=' + serializeParam(value));
        });
        return searchArray.join('&');
      };

      Object.defineProperty(proto, '_fromString', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(searchString) {
          this._entries = {};
          searchString = searchString.replace(/^\?/, '');
          var attributes = searchString.split('&');
          var attribute;
          for (var i = 0; i < attributes.length; i++) {
            attribute = attributes[i].split('=');
            this.append(
              deserializeParam(attribute[0]),
              (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
            );
          }
        }
      });

      global.URLSearchParams = URLSearchParams;
    };

    if (!('URLSearchParams' in global) || (new URLSearchParams('?a=1').toString() !== 'a=1')) {
      polyfillURLSearchParams();
    }

    if (typeof URLSearchParams.prototype.sort !== 'function') {
      URLSearchParams.prototype.sort = function() {
        var _this = this;
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
          if (!_this._entries) {
            _this.delete(name);
          }
        });
        items.sort(function(a, b) {
          if (a[0] < b[0]) {
            return -1;
          } else if (a[0] > b[0]) {
            return +1;
          } else {
            return 0;
          }
        });
        if (_this._entries) { // force reset because IE keeps keys index
          _this._entries = {};
        }
        for (var i = 0; i < items.length; i++) {
          this.append(items[i][0], items[i][1]);
        }
      };
    }

    // HTMLAnchorElement

  })(
    (typeof commonjsGlobal !== 'undefined') ? commonjsGlobal
      : ((typeof window !== 'undefined') ? window
      : ((typeof self !== 'undefined') ? self : commonjsGlobal))
  );

  (function(global) {
    /**
     * Polyfill URL
     *
     * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
     */

    var checkIfURLIsSupported = function() {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return (u.href === 'http://a/c%20d') && u.searchParams;
      } catch (e) {
        return false;
      }
    };


    var polyfillURL = function() {
      var _URL = global.URL;

      var URL = function(url, base) {
        if (typeof url !== 'string') url = String(url);

        // Only create another document if the base is different from current location.
        var doc = document, baseElement;
        if (base && (global.location === void 0 || base !== global.location.href)) {
          doc = document.implementation.createHTMLDocument('');
          baseElement = doc.createElement('base');
          baseElement.href = base;
          doc.head.appendChild(baseElement);
          try {
            if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
          } catch (err) {
            throw new Error('URL unable to set base ' + base + ' due to ' + err);
          }
        }

        var anchorElement = doc.createElement('a');
        anchorElement.href = url;
        if (baseElement) {
          doc.body.appendChild(anchorElement);
          anchorElement.href = anchorElement.href; // force href to refresh
        }

        if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
          throw new TypeError('Invalid URL');
        }

        Object.defineProperty(this, '_anchorElement', {
          value: anchorElement
        });


        // create a linked searchParams which reflect its changes on URL
        var searchParams = new URLSearchParams(this.search);
        var enableSearchUpdate = true;
        var enableSearchParamsUpdate = true;
        var _this = this;
        ['append', 'delete', 'set'].forEach(function(methodName) {
          var method = searchParams[methodName];
          searchParams[methodName] = function() {
            method.apply(searchParams, arguments);
            if (enableSearchUpdate) {
              enableSearchParamsUpdate = false;
              _this.search = searchParams.toString();
              enableSearchParamsUpdate = true;
            }
          };
        });

        Object.defineProperty(this, 'searchParams', {
          value: searchParams,
          enumerable: true
        });

        var search = void 0;
        Object.defineProperty(this, '_updateSearchParams', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: function() {
            if (this.search !== search) {
              search = this.search;
              if (enableSearchParamsUpdate) {
                enableSearchUpdate = false;
                this.searchParams._fromString(this.search);
                enableSearchUpdate = true;
              }
            }
          }
        });
      };

      var proto = URL.prototype;

      var linkURLWithAnchorAttribute = function(attributeName) {
        Object.defineProperty(proto, attributeName, {
          get: function() {
            return this._anchorElement[attributeName];
          },
          set: function(value) {
            this._anchorElement[attributeName] = value;
          },
          enumerable: true
        });
      };

      ['hash', 'host', 'hostname', 'port', 'protocol']
        .forEach(function(attributeName) {
          linkURLWithAnchorAttribute(attributeName);
        });

      Object.defineProperty(proto, 'search', {
        get: function() {
          return this._anchorElement['search'];
        },
        set: function(value) {
          this._anchorElement['search'] = value;
          this._updateSearchParams();
        },
        enumerable: true
      });

      Object.defineProperties(proto, {

        'toString': {
          get: function() {
            var _this = this;
            return function() {
              return _this.href;
            };
          }
        },

        'href': {
          get: function() {
            return this._anchorElement.href.replace(/\?$/, '');
          },
          set: function(value) {
            this._anchorElement.href = value;
            this._updateSearchParams();
          },
          enumerable: true
        },

        'pathname': {
          get: function() {
            return this._anchorElement.pathname.replace(/(^\/?)/, '/');
          },
          set: function(value) {
            this._anchorElement.pathname = value;
          },
          enumerable: true
        },

        'origin': {
          get: function() {
            // get expected port from protocol
            var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
            // add port to origin if, expected port is different than actual port
            // and it is not empty f.e http://foo:8080
            // 8080 != 80 && 8080 != ''
            var addPortToOrigin = this._anchorElement.port != expectedPort &&
              this._anchorElement.port !== '';

            return this._anchorElement.protocol +
              '//' +
              this._anchorElement.hostname +
              (addPortToOrigin ? (':' + this._anchorElement.port) : '');
          },
          enumerable: true
        },

        'password': { // TODO
          get: function() {
            return '';
          },
          set: function(value) {
          },
          enumerable: true
        },

        'username': { // TODO
          get: function() {
            return '';
          },
          set: function(value) {
          },
          enumerable: true
        },
      });

      URL.createObjectURL = function(blob) {
        return _URL.createObjectURL.apply(_URL, arguments);
      };

      URL.revokeObjectURL = function(url) {
        return _URL.revokeObjectURL.apply(_URL, arguments);
      };

      global.URL = URL;

    };

    if (!checkIfURLIsSupported()) {
      polyfillURL();
    }

    if ((global.location !== void 0) && !('origin' in global.location)) {
      var getOrigin = function() {
        return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
      };

      try {
        Object.defineProperty(global.location, 'origin', {
          get: getOrigin,
          enumerable: true
        });
      } catch (e) {
        setInterval(function() {
          global.location.origin = getOrigin();
        }, 100);
      }
    }

  })(
    (typeof commonjsGlobal !== 'undefined') ? commonjsGlobal
      : ((typeof window !== 'undefined') ? window
      : ((typeof self !== 'undefined') ? self : commonjsGlobal))
  );

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.7' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  });

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterators = {};

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // check on default Array iterator

  var ITERATOR = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR] === it);
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$1 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$2 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$2]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$2]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$2] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  var f$1 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$1
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$2
  };

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

  var setPrototypeOf = _setProto.set;
  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    } return that;
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$3
  };

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var gOPN = _objectGopn.f;
  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var $trim = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype;
  // Opera ~12 has broken Object#toString
  var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
  var TRIM = 'trim' in String.prototype;

  // 7.1.3 ToNumber(argument)
  var toNumber = function (argument) {
    var it = _toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
          case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
          default: return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
          ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for (var keys = _descriptors ? gOPN(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), j = 0, key; keys.length > j; j++) {
      if (_has(Base, key = keys[j]) && !_has($Number, key)) {
        dP$1($Number, key, gOPD$1(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
  }

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  // helper for String#{startsWith, endsWith, includes}



  var _stringContext = function (that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');
  var _failsIsRegexp = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) { /* empty */ }
    } return true;
  };

  var INCLUDES = 'includes';

  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~_stringContext(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://github.com/tc39/Array.prototype.includes

  var $includes = _arrayIncludes(true);

  _export(_export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _addToUnscopables('includes');

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var fns = exec(_defined, SYMBOL, ''[KEY]);
    var strfn = fns[0];
    var rxfn = fns[1];
    if (_fails(function () {
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    })) {
      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };

  // @@search logic
  _fixReWks('search', 1, function (defined, SEARCH, $search) {
    // 21.1.3.15 String.prototype.search(regexp)
    return [function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR$3 = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$3] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && typeof IteratorPrototype[ITERATOR$3] != 'function') _hide(IteratorPrototype, ITERATOR$3, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$3])) {
      _hide(proto, ITERATOR$3, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = _global[NAME];
    var proto$1 = Collection && Collection.prototype;
    var key$1;
    if (proto$1) {
      if (!proto$1[ITERATOR$4]) _hide(proto$1, ITERATOR$4, ArrayValues);
      if (!proto$1[TO_STRING_TAG]) _hide(proto$1, TO_STRING_TAG, NAME);
      _iterators[NAME] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) if (!proto$1[key$1]) _redefine(proto$1, key$1, es6_array_iterator[key$1], true);
    }
  }

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');


  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var f$4 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$4
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  var _redefineAll = function (target, src, safe) {
    for (var key in src) _redefine(target, key, src[key], safe);
    return target;
  };

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

  var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
      result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = _iterCall(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  });

  var _validateCollection = function (it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var getWeak = _meta.getWeak;







  var arrayFind = _arrayMethods(5);
  var arrayFindIndex = _arrayMethods(6);
  var id$1 = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.a = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;
      else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };

  var _collectionWeak = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME;      // collection type
        that._i = id$1++;      // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
          return data && _has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
          return data && _has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(_anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);
      else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      _redefine(proto, KEY,
        KEY == 'delete' ? function (a) {
          return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a) {
          return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a) {
          return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
          : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
      );
    };
    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = _fails(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      var ACCEPT_ITERABLES = _iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      // weak collections should not contains .clear method
      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);

    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };

  var es6_weakMap = createCommonjsModule(function (module) {
  var each = _arrayMethods(0);







  var WEAK_MAP = 'WeakMap';
  var getWeak = _meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = _collectionWeak.ufstore;
  var tmp = {};
  var InternalMap;

  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (_isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

  // IE11 WeakMap frozen keys fix
  if (_fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
    InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
    _objectAssign(InternalMap.prototype, methods);
    _meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      _redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (_isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split) {
    var isRegExp = _isRegexp;
    var _split = $split;
    var $push = [].push;
    var $SPLIT = 'split';
    var LENGTH = 'length';
    var LAST_INDEX = 'lastIndex';
    if (
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ) {
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it
      $split = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i;
        // Doesn't need flags gy, but they don't hurt
        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        while (match = separatorCopy.exec(string)) {
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            // eslint-disable-next-line no-loop-func
            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
              for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
            });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
    // 21.1.3.17 String.prototype.split(separator, limit)
    return [function split(separator, limit) {
      var O = defined(this);
      var fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });

  var isEnum = _objectPie.f;
  var _objectToArray = function (isEntries) {
    return function (it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      } return result;
    };
  };

  // https://github.com/tc39/proposal-object-values-entries

  var $entries = _objectToArray(true);

  _export(_export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  // https://github.com/tc39/proposal-object-values-entries

  var $values = _objectToArray(false);

  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace) {
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES$1 = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function (fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return fn.apply(that, args);
  };

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;
  var run = function () {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (_cof(process) == 'process') {
      defer = function (id) {
        process.nextTick(_ctx(run, id, 1));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(_ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function (id) {
        _global.postMessage(id + '', '*');
      };
      _global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function (id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode) {
      notify = function () {
        process$1.nextTick(flush);
      };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);
      notify = function () {
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      } last = task;
    };
  };

  // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$5 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
  	f: f$5
  };

  var _perform = function (exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };

  var navigator$1 = _global.navigator;

  var _userAgent = navigator$1 && navigator$1.userAgent || '';

  var _promiseResolve = function (C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var SPECIES$2 = _wks('species');

  var _setSpecies = function (KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  };

  var task = _task.set;
  var microtask = _microtask();




  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';
  var empty = function () { /* empty */ };
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode$1 || typeof PromiseRejectionEvent == 'function')
        && promise.then(empty) instanceof FakePromise
        // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0
        && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) { /* empty */ }
  }();

  // helpers
  var isThenable = function (it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // may throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };
  var onHandleUnhandled = function (promise) {
    task.call(_global, function () {
      var handler;
      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);
      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };
    _newPromiseCapability.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];

  // statics
  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];

  _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = _stringContext(this, searchString, STARTS_WITH);
      var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

  // 20.1.2.4 Number.isNaN(number)


  _export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });

  // ==========================================================================
  // Type checking utils
  // ==========================================================================
  var getConstructor = function getConstructor(input) {
    return input !== null && typeof input !== 'undefined' ? input.constructor : null;
  };

  var instanceOf = function instanceOf(input, constructor) {
    return Boolean(input && constructor && input instanceof constructor);
  };

  var isNullOrUndefined = function isNullOrUndefined(input) {
    return input === null || typeof input === 'undefined';
  };

  var isObject = function isObject(input) {
    return getConstructor(input) === Object;
  };

  var isNumber = function isNumber(input) {
    return getConstructor(input) === Number && !Number.isNaN(input);
  };

  var isString = function isString(input) {
    return getConstructor(input) === String;
  };

  var isBoolean = function isBoolean(input) {
    return getConstructor(input) === Boolean;
  };

  var isFunction = function isFunction(input) {
    return getConstructor(input) === Function;
  };

  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  var isWeakMap = function isWeakMap(input) {
    return instanceOf(input, WeakMap);
  };

  var isNodeList = function isNodeList(input) {
    return instanceOf(input, NodeList);
  };

  var isElement = function isElement(input) {
    return instanceOf(input, Element);
  };

  var isTextNode = function isTextNode(input) {
    return getConstructor(input) === Text;
  };

  var isEvent = function isEvent(input) {
    return instanceOf(input, Event);
  };

  var isKeyboardEvent = function isKeyboardEvent(input) {
    return instanceOf(input, KeyboardEvent);
  };

  var isCue = function isCue(input) {
    return instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
  };

  var isTrack = function isTrack(input) {
    return instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
  };

  var isEmpty = function isEmpty(input) {
    return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
  };

  var isUrl = function isUrl(input) {
    // Accept a URL object
    if (instanceOf(input, window.URL)) {
      return true;
    } // Must be string from here


    if (!isString(input)) {
      return false;
    } // Add the protocol if required


    var string = input;

    if (!input.startsWith('http://') || !input.startsWith('https://')) {
      string = "http://".concat(input);
    }

    try {
      return !isEmpty(new URL(string).hostname);
    } catch (e) {
      return false;
    }
  };

  var is$1 = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    url: isUrl,
    empty: isEmpty
  };

  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // https://www.youtube.com/watch?v=NPM6172J22g

  var supportsPassiveListeners = function () {
    // Test via a getter in the options object to see if the passive property is accessed
    var supported = false;

    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (e) {// Do nothing
    }

    return supported;
  }(); // Toggle event listener


  function toggleListener(element, event, callback) {
    var _this = this;

    var toggle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var capture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    // Bail if no element, event, or callback
    if (!element || !('addEventListener' in element) || is$1.empty(event) || !is$1.function(callback)) {
      return;
    } // Allow multiple events


    var events = event.split(' '); // Build options
    // Default to just the capture boolean for browsers with no passive listener support

    var options = capture; // If passive events listeners are supported

    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive: passive,
        // Whether the listener is a capturing listener or not
        capture: capture
      };
    } // If a single node is passed, bind the event listener


    events.forEach(function (type) {
      if (_this && _this.eventListeners && toggle) {
        // Cache event listener
        _this.eventListeners.push({
          element: element,
          type: type,
          callback: callback,
          options: options
        });
      }

      element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
    });
  } // Bind event handler

  function on(element) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    toggleListener.call(this, element, events, callback, true, passive, capture);
  } // Unbind event handler

  function off(element) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    toggleListener.call(this, element, events, callback, false, passive, capture);
  } // Bind once-only event handler

  function once(element) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    function onceCallback() {
      off(element, events, onceCallback, passive, capture);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callback.apply(this, args);
    }

    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  } // Trigger event

  function triggerEvent(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    // Bail if no element
    if (!is$1.element(element) || is$1.empty(type)) {
      return;
    } // Create and dispatch the event


    var event = new CustomEvent(type, {
      bubbles: bubbles,
      detail: Object.assign({}, detail, {
        plyr: this
      })
    }); // Dispatch the event

    element.dispatchEvent(event);
  } // Unbind all cached event listeners

  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach(function (item) {
        var element = item.element,
            type = item.type,
            callback = item.callback,
            options = item.options;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  } // Run method when / if player is ready

  function ready() {
    var _this2 = this;

    return new Promise(function (resolve) {
      return _this2.ready ? setTimeout(resolve, 0) : on.call(_this2, _this2.elements.container, 'ready', resolve);
    }).then(function () {});
  }

  function wrap(elements, wrapper) {
    // Convert `elements` to an array, if necessary.
    var targets = elements.length ? elements : [elements]; // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).

    Array.from(targets).reverse().forEach(function (element, index) {
      var child = index > 0 ? wrapper.cloneNode(true) : wrapper; // Cache the current parent and sibling.

      var parent = element.parentNode;
      var sibling = element.nextSibling; // Wrap the element (is automatically removed from its current
      // parent).

      child.appendChild(element); // If the element had a sibling, insert the wrapper before
      // the sibling to maintain the HTML structure; otherwise, just
      // append it to the parent.

      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  } // Set attributes

  function setAttributes(element, attributes) {
    if (!is$1.element(element) || is$1.empty(attributes)) {
      return;
    } // Assume null and undefined attributes should be left out,
    // Setting them would otherwise convert them to "null" and "undefined"


    Object.entries(attributes).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          value = _ref2[1];

      return !is$1.nullOrUndefined(value);
    }).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      return element.setAttribute(key, value);
    });
  } // Create a DocumentFragment

  function createElement(type, attributes, text) {
    // Create a new <element>
    var element = document.createElement(type); // Set all passed attributes

    if (is$1.object(attributes)) {
      setAttributes(element, attributes);
    } // Add text node


    if (is$1.string(text)) {
      element.innerText = text;
    } // Return built element


    return element;
  } // Inaert an element after another

  function insertAfter(element, target) {
    if (!is$1.element(element) || !is$1.element(target)) {
      return;
    }

    target.parentNode.insertBefore(element, target.nextSibling);
  } // Insert a DocumentFragment

  function insertElement(type, parent, attributes, text) {
    if (!is$1.element(parent)) {
      return;
    }

    parent.appendChild(createElement(type, attributes, text));
  } // Remove element(s)

  function removeElement(element) {
    if (is$1.nodeList(element) || is$1.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }

    if (!is$1.element(element) || !is$1.element(element.parentNode)) {
      return;
    }

    element.parentNode.removeChild(element);
  } // Remove all child elements

  function emptyElement(element) {
    if (!is$1.element(element)) {
      return;
    }

    var length = element.childNodes.length;

    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  } // Replace element

  function replaceElement(newChild, oldChild) {
    if (!is$1.element(oldChild) || !is$1.element(oldChild.parentNode) || !is$1.element(newChild)) {
      return null;
    }

    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  } // Get an attribute object from a string selector

  function getAttributesFromSelector(sel, existingAttributes) {
    // For example:
    // '.test' to { class: 'test' }
    // '#test' to { id: 'test' }
    // '[data-test="test"]' to { 'data-test': 'test' }
    if (!is$1.string(sel) || is$1.empty(sel)) {
      return {};
    }

    var attributes = {};
    var existing = existingAttributes;
    sel.split(',').forEach(function (s) {
      // Remove whitespace
      var selector = s.trim();
      var className = selector.replace('.', '');
      var stripped = selector.replace(/[[\]]/g, ''); // Get the parts and value

      var parts = stripped.split('=');
      var key = parts[0];
      var value = parts.length > 1 ? parts[1].replace(/["']/g, '') : ''; // Get the first character

      var start = selector.charAt(0);

      switch (start) {
        case '.':
          // Add to existing classname
          if (is$1.object(existing) && is$1.string(existing.class)) {
            existing.class += " ".concat(className);
          }

          attributes.class = className;
          break;

        case '#':
          // ID selector
          attributes.id = selector.replace('#', '');
          break;

        case '[':
          // Attribute selector
          attributes[key] = value;
          break;

        default:
          break;
      }
    });
    return attributes;
  } // Toggle hidden

  function toggleHidden(element, hidden) {
    if (!is$1.element(element)) {
      return;
    }

    var hide = hidden;

    if (!is$1.boolean(hide)) {
      hide = !element.hidden;
    }

    if (hide) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden');
    }
  } // Mirror Element.classList.toggle, with IE compatibility for "force" argument

  function toggleClass(element, className, force) {
    if (is$1.nodeList(element)) {
      return Array.from(element).map(function (e) {
        return toggleClass(e, className, force);
      });
    }

    if (is$1.element(element)) {
      var method = 'toggle';

      if (typeof force !== 'undefined') {
        method = force ? 'add' : 'remove';
      }

      element.classList[method](className);
      return element.classList.contains(className);
    }

    return false;
  } // Has class name

  function hasClass(element, className) {
    return is$1.element(element) && element.classList.contains(className);
  } // Element matches selector

  function matches(element, selector) {

    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }

    var matches = match;
    return matches.call(element, selector);
  } // Find all elements

  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  } // Find a single element

  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  } // Trap focus inside container

  function trapFocus() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!is$1.element(element)) {
      return;
    }

    var focusable = getElements.call(this, 'button:not(:disabled), input:not(:disabled), [tabindex]');
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    var trap = function trap(event) {
      // Bail if not tab key or not fullscreen
      if (event.key !== 'Tab' || event.keyCode !== 9) {
        return;
      } // Get the current focused element


      var focused = document.activeElement;

      if (focused === last && !event.shiftKey) {
        // Move focus to first element that can be tabbed if Shift isn't used
        first.focus();
        event.preventDefault();
      } else if (focused === first && event.shiftKey) {
        // Move focus to last element that can be tabbed if Shift is used
        last.focus();
        event.preventDefault();
      }
    };

    toggleListener.call(this, this.elements.container, 'keydown', trap, toggle, false);
  } // Set focus and tab focus class

  function setFocus() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!is$1.element(element)) {
      return;
    } // Set regular focus


    element.focus({
      preventScroll: true
    }); // If we want to mimic keyboard focus via tab

    if (tabFocus) {
      toggleClass(element, this.config.classNames.tabFocus);
    }
  }

  var transitionEndEvent = function () {
    var element = document.createElement('span');
    var events = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    var type = Object.keys(events).find(function (event) {
      return element.style[event] !== undefined;
    });
    return is$1.string(type) ? events[type] : false;
  }(); // Force repaint of element

  function repaint(element) {
    setTimeout(function () {
      try {
        toggleHidden(element, true);
        element.offsetHeight; // eslint-disable-line

        toggleHidden(element, false);
      } catch (e) {// Do nothing
      }
    }, 0);
  }

  // ==========================================================================
  // Browser sniffing
  // Unfortunately, due to mixed support, UA sniffing is required
  // ==========================================================================
  var browser = {
    isIE:
    /* @cc_on!@ */
    !!document.documentMode,
    isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  var defaultCodecs = {
    'audio/ogg': 'vorbis',
    'audio/wav': '1',
    'video/webm': 'vp8, vorbis',
    'video/mp4': 'avc1.42E01E, mp4a.40.2',
    'video/ogg': 'theora'
  }; // Check for feature support

  var support = {
    // Basic support
    audio: 'canPlayType' in document.createElement('audio'),
    video: 'canPlayType' in document.createElement('video'),
    // Check for support
    // Basic functionality vs full UI
    check: function check(type, provider, playsinline) {
      var canPlayInline = browser.isIPhone && playsinline && support.playsinline;
      var api = support[type] || provider !== 'html5';
      var ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);
      return {
        api: api,
        ui: ui
      };
    },
    // Picture-in-picture support
    // Safari & Chrome only currently
    pip: function () {
      if (browser.isIPhone) {
        return false;
      } // Safari
      // https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls


      if (is$1.function(createElement('video').webkitSetPresentationMode)) {
        return true;
      } // Chrome
      // https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture


      if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
        return true;
      }

      return false;
    }(),
    // Airplay support
    // Safari only currently
    airplay: is$1.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: 'playsInline' in document.createElement('video'),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime: function mime(inputType) {
      var _inputType$split = inputType.split('/'),
          _inputType$split2 = _slicedToArray(_inputType$split, 1),
          mediaType = _inputType$split2[0];

      var type = inputType; // Verify we're using HTML5 and there's no media type mismatch

      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      } // Add codec if required


      if (Object.keys(defaultCodecs).includes(type)) {
        type += "; codecs=\"".concat(defaultCodecs[inputType], "\"");
      }

      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
      } catch (e) {
        return false;
      }
    },
    // Check for textTracks support
    textTracks: 'textTracks' in document.createElement('video'),
    // <input type="range"> Sliders
    rangeInput: function () {
      var range = document.createElement('input');
      range.type = 'range';
      return range.type === 'range';
    }(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: 'ontouchstart' in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
  };

  var html5 = {
    getSources: function getSources() {
      var _this = this;

      if (!this.isHTML5) {
        return [];
      }

      var sources = Array.from(this.media.querySelectorAll('source')); // Filter out unsupported sources

      return sources.filter(function (source) {
        return support.mime.call(_this, source.getAttribute('type'));
      });
    },
    // Get quality levels
    getQualityOptions: function getQualityOptions() {
      // Get sizes from <source> elements
      return html5.getSources.call(this).map(function (source) {
        return Number(source.getAttribute('size'));
      }).filter(Boolean);
    },
    extend: function extend() {
      if (!this.isHTML5) {
        return;
      }

      var player = this; // Quality

      Object.defineProperty(player.media, 'quality', {
        get: function get() {
          // Get sources
          var sources = html5.getSources.call(player);
          var source = sources.find(function (source) {
            return source.getAttribute('src') === player.source;
          }); // Return size, if match is found

          return source && Number(source.getAttribute('size'));
        },
        set: function set(input) {
          // Get sources
          var sources = html5.getSources.call(player); // Get first match for requested size

          var source = sources.find(function (source) {
            return Number(source.getAttribute('size')) === input;
          }); // No matching source found

          if (!source) {
            return;
          } // Get current state


          var _player$media = player.media,
              currentTime = _player$media.currentTime,
              paused = _player$media.paused,
              preload = _player$media.preload,
              readyState = _player$media.readyState; // Set new source

          player.media.src = source.getAttribute('src'); // Prevent loading if preload="none" and the current source isn't loaded (#1044)

          if (preload !== 'none' || readyState) {
            // Restore time
            player.once('loadedmetadata', function () {
              player.currentTime = currentTime; // Resume playing

              if (!paused) {
                player.play();
              }
            }); // Load new source

            player.media.load();
          } // Trigger change event


          triggerEvent.call(player, player.media, 'qualitychange', false, {
            quality: input
          });
        }
      });
    },
    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests: function cancelRequests() {
      if (!this.isHTML5) {
        return;
      } // Remove child sources


      removeElement(html5.getSources.call(this)); // Set blank video src attribute
      // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
      // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection

      this.media.setAttribute('src', this.config.blankVideo); // Load the new empty source
      // This will cancel existing requests
      // See https://github.com/sampotts/plyr/issues/174

      this.media.load(); // Debugging

      this.debug.log('Cancelled network requests');
    }
  };

  // ==========================================================================

  function dedupe(array) {
    if (!is$1.array(array)) {
      return array;
    }

    return array.filter(function (item, index) {
      return array.indexOf(item) === index;
    });
  } // Get the closest value in an array

  function closest(array, value) {
    if (!is$1.array(array) || !array.length) {
      return null;
    }

    return array.reduce(function (prev, curr) {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
  }

  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  } // Get a nested value in an object

  function getDeep(object, path) {
    return path.split('.').reduce(function (obj, key) {
      return obj && obj[key];
    }, object);
  } // Deep extend destination object with N more objects

  function extend() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) {
      return target;
    }

    var source = sources.shift();

    if (!is$1.object(source)) {
      return target;
    }

    Object.keys(source).forEach(function (key) {
      if (is$1.object(source[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, _defineProperty({}, key, {}));
        }

        extend(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    });
    return extend.apply(void 0, [target].concat(sources));
  }

  var dP$2 = _objectDp.f;
  var gOPN$1 = _objectGopn.f;


  var $RegExp = _global.RegExp;
  var Base$1 = $RegExp;
  var proto$2 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g;
  // "new" creates a new object, old webkit buggy here
  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (_descriptors && (!CORRECT_NEW || _fails(function () {
    re2[_wks('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = _isRegexp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
        : _inheritIfRequired(CORRECT_NEW
          ? new Base$1(piRE && !fiU ? p.source : p, f)
          : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
        , tiRE ? this : proto$2, $RegExp);
    };
    var proxy = function (key) {
      key in $RegExp || dP$2($RegExp, key, {
        configurable: true,
        get: function () { return Base$1[key]; },
        set: function (it) { Base$1[key] = it; }
      });
    };
    for (var keys$1 = gOPN$1(Base$1), i$1 = 0; keys$1.length > i$1;) proxy(keys$1[i$1++]);
    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;
    _redefine(_global, 'RegExp', $RegExp);
  }

  _setSpecies('RegExp');

  function generateId(prefix) {
    return "".concat(prefix, "-").concat(Math.floor(Math.random() * 10000));
  } // Format string

  function format(input) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (is$1.empty(input)) {
      return input;
    }

    return input.toString().replace(/{(\d+)}/g, function (match, i) {
      return args[i].toString();
    });
  } // Get percentage

  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }

    return (current / max * 100).toFixed(2);
  } // Replace all occurances of a string in a string

  function replaceAll() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString());
  } // Convert to title case

  function toTitleCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return input.toString().replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  } // Convert string to pascalCase

  function toPascalCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var string = input.toString(); // Convert kebab case

    string = replaceAll(string, '-', ' '); // Convert snake case

    string = replaceAll(string, '_', ' '); // Convert to title case

    string = toTitleCase(string); // Convert to pascal case

    return replaceAll(string, ' ', '');
  } // Convert string to pascalCase

  function toCamelCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var string = input.toString(); // Convert to pascal case

    string = toPascalCase(string); // Convert first character to lowercase

    return string.charAt(0).toLowerCase() + string.slice(1);
  } // Remove HTML from a string

  function stripHTML(source) {
    var fragment = document.createDocumentFragment();
    var element = document.createElement('div');
    fragment.appendChild(element);
    element.innerHTML = source;
    return fragment.firstChild.innerText;
  } // Like outerHTML, but also works for DocumentFragment

  function getHTML(element) {
    var wrapper = document.createElement('div');
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  var resources = {
    pip: 'PIP',
    airplay: 'AirPlay',
    html5: 'HTML5',
    vimeo: 'Vimeo',
    youtube: 'YouTube'
  };
  var i18n = {
    get: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (is$1.empty(key) || is$1.empty(config)) {
        return '';
      }

      var string = getDeep(config.i18n, key);

      if (is$1.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }

        return '';
      }

      var replace = {
        '{seektime}': config.seekTime,
        '{title}': config.title
      };
      Object.entries(replace).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        string = replaceAll(string, key, value);
      });
      return string;
    }
  };

  var Storage =
  /*#__PURE__*/
  function () {
    function Storage(player) {
      _classCallCheck(this, Storage);

      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    } // Check for actual support (see if we can use it)


    _createClass(Storage, [{
      key: "get",
      value: function get(key) {
        if (!Storage.supported || !this.enabled) {
          return null;
        }

        var store = window.localStorage.getItem(this.key);

        if (is$1.empty(store)) {
          return null;
        }

        var json = JSON.parse(store);
        return is$1.string(key) && key.length ? json[key] : json;
      }
    }, {
      key: "set",
      value: function set(object) {
        // Bail if we don't have localStorage support or it's disabled
        if (!Storage.supported || !this.enabled) {
          return;
        } // Can only store objectst


        if (!is$1.object(object)) {
          return;
        } // Get current storage


        var storage = this.get(); // Default to empty object

        if (is$1.empty(storage)) {
          storage = {};
        } // Update the working copy of the values


        extend(storage, object); // Update storage

        window.localStorage.setItem(this.key, JSON.stringify(storage));
      }
    }], [{
      key: "supported",
      get: function get() {
        try {
          if (!('localStorage' in window)) {
            return false;
          }

          var test = '___test'; // Try to use it (it might be disabled, e.g. user is in private mode)
          // see: https://github.com/sampotts/plyr/issues/131

          window.localStorage.setItem(test, test);
          window.localStorage.removeItem(test);
          return true;
        } catch (e) {
          return false;
        }
      }
    }]);

    return Storage;
  }();

  // ==========================================================================
  // Fetch wrapper
  // Using XHR to avoid issues with older browsers
  // ==========================================================================
  function fetch(url) {
    var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
    return new Promise(function (resolve, reject) {
      try {
        var request = new XMLHttpRequest(); // Check for CORS support

        if (!('withCredentials' in request)) {
          return;
        }

        request.addEventListener('load', function () {
          if (responseType === 'text') {
            try {
              resolve(JSON.parse(request.responseText));
            } catch (e) {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener('error', function () {
          throw new Error(request.status);
        });
        request.open('GET', url, true); // Set the required response type

        request.responseType = responseType;
        request.send();
      } catch (e) {
        reject(e);
      }
    });
  }

  // ==========================================================================

  function loadSprite(url, id) {
    if (!is$1.string(url)) {
      return;
    }

    var prefix = 'cache';
    var hasId = is$1.string(id);
    var isCached = false;

    var exists = function exists() {
      return document.getElementById(id) !== null;
    };

    var update = function update(container, data) {
      container.innerHTML = data; // Check again incase of race condition

      if (hasId && exists()) {
        return;
      } // Inject the SVG to the body


      document.body.insertAdjacentElement('afterbegin', container);
    }; // Only load once if ID set


    if (!hasId || !exists()) {
      var useStorage = Storage.supported; // Create container

      var container = document.createElement('div');
      container.setAttribute('hidden', '');

      if (hasId) {
        container.setAttribute('id', id);
      } // Check in cache


      if (useStorage) {
        var cached = window.localStorage.getItem("".concat(prefix, "-").concat(id));
        isCached = cached !== null;

        if (isCached) {
          var data = JSON.parse(cached);
          update(container, data.content);
        }
      } // Get the sprite


      fetch(url).then(function (result) {
        if (is$1.empty(result)) {
          return;
        }

        if (useStorage) {
          window.localStorage.setItem("".concat(prefix, "-").concat(id), JSON.stringify({
            content: result
          }));
        }

        update(container, result);
      }).catch(function () {});
    }
  }

  // ==========================================================================

  var getHours = function getHours(value) {
    return parseInt(value / 60 / 60 % 60, 10);
  };
  var getMinutes = function getMinutes(value) {
    return parseInt(value / 60 % 60, 10);
  };
  var getSeconds = function getSeconds(value) {
    return parseInt(value % 60, 10);
  }; // Format time to UI friendly string

  function formatTime() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var displayHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    // Bail if the value isn't a number
    if (!is$1.number(time)) {
      return formatTime(null, displayHours, inverted);
    } // Format time component to add leading zero


    var format = function format(value) {
      return "0".concat(value).slice(-2);
    }; // Breakdown to hours, mins, secs


    var hours = getHours(time);
    var mins = getMinutes(time);
    var secs = getSeconds(time); // Do we need to display hours?

    if (displayHours || hours > 0) {
      hours = "".concat(hours, ":");
    } else {
      hours = '';
    } // Render


    return "".concat(inverted && time > 0 ? '-' : '').concat(hours).concat(format(mins), ":").concat(format(secs));
  }

  var controls = {
    // Get icon URL
    getIconUrl: function getIconUrl() {
      var url = new URL(this.config.iconUrl, window.location);
      var cors = url.host !== window.location.host || browser.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: cors
      };
    },
    // Find the UI controls
    findElements: function findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper); // Buttons

        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        }; // Progress

        this.elements.progress = getElement.call(this, this.config.selectors.progress); // Inputs

        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        }; // Display

        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        }; // Seek tooltip

        if (is$1.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip));
        }

        return true;
      } catch (error) {
        // Log it
        this.debug.warn('It looks like there is a problem with your custom controls HTML', error); // Restore native video controls

        this.toggleNativeControls(true);
        return false;
      }
    },
    // Create <svg> icon
    createIcon: function createIcon(type, attributes) {
      var namespace = 'http://www.w3.org/2000/svg';
      var iconUrl = controls.getIconUrl.call(this);
      var iconPath = "".concat(!iconUrl.cors ? iconUrl.url : '', "#").concat(this.config.iconPrefix); // Create <svg>

      var icon = document.createElementNS(namespace, 'svg');
      setAttributes(icon, extend(attributes, {
        role: 'presentation',
        focusable: 'false'
      })); // Create the <use> to reference sprite

      var use = document.createElementNS(namespace, 'use');
      var path = "".concat(iconPath, "-").concat(type); // Set `href` attributes
      // https://github.com/sampotts/plyr/issues/460
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href

      if ('href' in use) {
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
      } // Always set the older attribute even though it's "deprecated" (it'll be around for ages)


      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path); // Add <use> to <svg>

      icon.appendChild(use);
      return icon;
    },
    // Create hidden text label
    createLabel: function createLabel(key) {
      var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var text = i18n.get(key, this.config);
      var attributes = Object.assign({}, attr, {
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
      });
      return createElement('span', attributes, text);
    },
    // Create a badge
    createBadge: function createBadge(text) {
      if (is$1.empty(text)) {
        return null;
      }

      var badge = createElement('span', {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement('span', {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },
    // Create a <button>
    createButton: function createButton(buttonType, attr) {
      var attributes = Object.assign({}, attr);
      var type = toCamelCase(buttonType);
      var props = {
        element: 'button',
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ['element', 'icon', 'label'].forEach(function (key) {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      }); // Default to 'button' type to prevent form submission

      if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
        attributes.type = 'button';
      } // Set class name


      if (Object.keys(attributes).includes('class')) {
        if (!attributes.class.includes(this.config.classNames.control)) {
          attributes.class += " ".concat(this.config.classNames.control);
        }
      } else {
        attributes.class = this.config.classNames.control;
      } // Large play button


      switch (buttonType) {
        case 'play':
          props.toggle = true;
          props.label = 'play';
          props.labelPressed = 'pause';
          props.icon = 'play';
          props.iconPressed = 'pause';
          break;

        case 'mute':
          props.toggle = true;
          props.label = 'mute';
          props.labelPressed = 'unmute';
          props.icon = 'volume';
          props.iconPressed = 'muted';
          break;

        case 'captions':
          props.toggle = true;
          props.label = 'enableCaptions';
          props.labelPressed = 'disableCaptions';
          props.icon = 'captions-off';
          props.iconPressed = 'captions-on';
          break;

        case 'fullscreen':
          props.toggle = true;
          props.label = 'enterFullscreen';
          props.labelPressed = 'exitFullscreen';
          props.icon = 'enter-fullscreen';
          props.iconPressed = 'exit-fullscreen';
          break;

        case 'play-large':
          attributes.class += " ".concat(this.config.classNames.control, "--overlaid");
          type = 'play';
          props.label = 'play';
          props.icon = 'play';
          break;

        default:
          if (is$1.empty(props.label)) {
            props.label = type;
          }

          if (is$1.empty(props.icon)) {
            props.icon = buttonType;
          }

      }

      var button = createElement(props.element); // Setup toggle icon and labels

      if (props.toggle) {
        // Icon
        button.appendChild(controls.createIcon.call(this, props.iconPressed, {
          class: 'icon--pressed'
        }));
        button.appendChild(controls.createIcon.call(this, props.icon, {
          class: 'icon--not-pressed'
        })); // Label/Tooltip

        button.appendChild(controls.createLabel.call(this, props.labelPressed, {
          class: 'label--pressed'
        }));
        button.appendChild(controls.createLabel.call(this, props.label, {
          class: 'label--not-pressed'
        }));
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      } // Merge and set attributes


      extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes); // We have multiple play buttons

      if (type === 'play') {
        if (!is$1.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }

        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }

      return button;
    },
    // Create an <input type='range'>
    createRange: function createRange(type, attributes) {
      // Seek input
      var input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
        type: 'range',
        min: 0,
        max: 100,
        step: 0.01,
        value: 0,
        autocomplete: 'off',
        // A11y fixes for https://github.com/sampotts/plyr/issues/905
        role: 'slider',
        'aria-label': i18n.get(type, this.config),
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': 0
      }, attributes));
      this.elements.inputs[type] = input; // Set the fill for webkit now

      controls.updateRangeFill.call(this, input);
      return input;
    },
    // Create a <progress>
    createProgress: function createProgress(type, attributes) {
      var progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
        min: 0,
        max: 100,
        value: 0,
        role: 'presentation',
        'aria-hidden': true
      }, attributes)); // Create the label inside

      if (type !== 'volume') {
        progress.appendChild(createElement('span', null, '0'));
        var suffixKey = {
          played: 'played',
          buffer: 'buffered'
        }[type];
        var suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
        progress.innerText = "% ".concat(suffix.toLowerCase());
      }

      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime: function createTime(type) {
      var attributes = getAttributesFromSelector(this.config.selectors.display[type]);
      var container = createElement('div', extend(attributes, {
        class: "".concat(this.config.classNames.display.time, " ").concat(attributes.class ? attributes.class : '').trim(),
        'aria-label': i18n.get(type, this.config)
      }), '00:00'); // Reference for updates

      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts: function bindMenuItemShortcuts(menuItem, type) {
      var _this = this;

      // Navigate through menus via arrow keys and space
      on(menuItem, 'keydown keyup', function (event) {
        // We only care about space and ⬆️ ⬇️️ ➡️
        if (![32, 38, 39, 40].includes(event.which)) {
          return;
        } // Prevent play / seek


        event.preventDefault();
        event.stopPropagation(); // We're just here to prevent the keydown bubbling

        if (event.type === 'keydown') {
          return;
        }

        var isRadioButton = matches(menuItem, '[role="menuitemradio"]'); // Show the respective menu

        if (!isRadioButton && [32, 39].includes(event.which)) {
          controls.showMenuPanel.call(_this, type, true);
        } else {
          var target;

          if (event.which !== 32) {
            if (event.which === 40 || isRadioButton && event.which === 39) {
              target = menuItem.nextElementSibling;

              if (!is$1.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;

              if (!is$1.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }

            setFocus.call(_this, target, true);
          }
        }
      }, false); // Enter will fire a `click` event but we still need to manage focus
      // So we bind to keyup which fires after and set focus here

      on(menuItem, 'keyup', function (event) {
        if (event.which !== 13) {
          return;
        }

        controls.focusFirstMenuItem.call(_this, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem: function createMenuItem(_ref) {
      var _this2 = this;

      var value = _ref.value,
          list = _ref.list,
          type = _ref.type,
          title = _ref.title,
          _ref$badge = _ref.badge,
          badge = _ref$badge === void 0 ? null : _ref$badge,
          _ref$checked = _ref.checked,
          checked = _ref$checked === void 0 ? false : _ref$checked;
      var attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      var menuItem = createElement('button', extend(attributes, {
        type: 'button',
        role: 'menuitemradio',
        class: "".concat(this.config.classNames.control, " ").concat(attributes.class ? attributes.class : '').trim(),
        'aria-checked': checked,
        value: value
      }));
      var flex = createElement('span'); // We have to set as HTML incase of special characters

      flex.innerHTML = title;

      if (is$1.element(badge)) {
        flex.appendChild(badge);
      }

      menuItem.appendChild(flex); // Replicate radio button behaviour

      Object.defineProperty(menuItem, 'checked', {
        enumerable: true,
        get: function get() {
          return menuItem.getAttribute('aria-checked') === 'true';
        },
        set: function set(checked) {
          // Ensure exclusivity
          if (checked) {
            Array.from(menuItem.parentNode.children).filter(function (node) {
              return matches(node, '[role="menuitemradio"]');
            }).forEach(function (node) {
              return node.setAttribute('aria-checked', 'false');
            });
          }

          menuItem.setAttribute('aria-checked', checked ? 'true' : 'false');
        }
      });
      this.listeners.bind(menuItem, 'click keyup', function (event) {
        if (is$1.keyboardEvent(event) && event.which !== 32) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        menuItem.checked = true;

        switch (type) {
          case 'language':
            _this2.currentTrack = Number(value);
            break;

          case 'quality':
            _this2.quality = value;
            break;

          case 'speed':
            _this2.speed = parseFloat(value);
            break;

          default:
            break;
        }

        controls.showMenuPanel.call(_this2, 'home', is$1.keyboardEvent(event));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime: function formatTime$$1() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Bail if the value isn't a number
      if (!is$1.number(time)) {
        return time;
      } // Always display hours if duration is over an hour


      var forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay: function updateTimeDisplay() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // Bail if there's no element to display or the value isn't a number
      if (!is$1.element(target) || !is$1.number(time)) {
        return;
      } // eslint-disable-next-line no-param-reassign


      target.innerText = controls.formatTime(time, inverted);
    },
    // Update volume UI and storage
    updateVolume: function updateVolume() {
      if (!this.supported.ui) {
        return;
      } // Update range


      if (is$1.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      } // Update mute state


      if (is$1.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange: function setRange(target) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!is$1.element(target)) {
        return;
      } // eslint-disable-next-line


      target.value = value; // Webkit range fill

      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress: function updateProgress(event) {
      var _this3 = this;

      if (!this.supported.ui || !is$1.event(event)) {
        return;
      }

      var value = 0;

      var setProgress = function setProgress(target, input) {
        var value = is$1.number(input) ? input : 0;
        var progress = is$1.element(target) ? target : _this3.elements.display.buffer; // Update value and label

        if (is$1.element(progress)) {
          progress.value = value; // Update text label inside

          var label = progress.getElementsByTagName('span')[0];

          if (is$1.element(label)) {
            label.childNodes[0].nodeValue = value;
          }
        }
      };

      if (event) {
        switch (event.type) {
          // Video playing
          case 'timeupdate':
          case 'seeking':
          case 'seeked':
            value = getPercentage(this.currentTime, this.duration); // Set seek range value only if it's a 'natural' time event

            if (event.type === 'timeupdate') {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }

            break;
          // Check buffer status

          case 'playing':
          case 'progress':
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;

          default:
            break;
        }
      }
    },
    // Webkit polyfill for lower fill range
    updateRangeFill: function updateRangeFill(target) {
      // Get range from event if event passed
      var range = is$1.event(target) ? target.target : target; // Needs to be a valid <input type='range'>

      if (!is$1.element(range) || range.getAttribute('type') !== 'range') {
        return;
      } // Set aria values for https://github.com/sampotts/plyr/issues/905


      if (matches(range, this.config.selectors.inputs.seek)) {
        range.setAttribute('aria-valuenow', this.currentTime);
        var currentTime = controls.formatTime(this.currentTime);
        var duration = controls.formatTime(this.duration);
        var format$$1 = i18n.get('seekLabel', this.config);
        range.setAttribute('aria-valuetext', format$$1.replace('{currentTime}', currentTime).replace('{duration}', duration));
      } else if (matches(range, this.config.selectors.inputs.volume)) {
        var percent = range.value * 100;
        range.setAttribute('aria-valuenow', percent);
        range.setAttribute('aria-valuetext', "".concat(percent.toFixed(1), "%"));
      } else {
        range.setAttribute('aria-valuenow', range.value);
      } // WebKit only


      if (!browser.isWebkit) {
        return;
      } // Set CSS custom property


      range.style.setProperty('--value', "".concat(range.value / range.max * 100, "%"));
    },
    // Update hover tooltip for seeking
    updateSeekTooltip: function updateSeekTooltip(event) {
      var _this4 = this;

      // Bail if setting not true
      if (!this.config.tooltips.seek || !is$1.element(this.elements.inputs.seek) || !is$1.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      } // Calculate percentage


      var percent = 0;
      var clientRect = this.elements.progress.getBoundingClientRect();
      var visible = "".concat(this.config.classNames.tooltip, "--visible");

      var toggle = function toggle(_toggle) {
        toggleClass(_this4.elements.display.seekTooltip, visible, _toggle);
      }; // Hide on touch


      if (this.touch) {
        toggle(false);
        return;
      } // Determine percentage, if already visible


      if (is$1.event(event)) {
        percent = 100 / clientRect.width * (event.pageX - clientRect.left);
      } else if (hasClass(this.elements.display.seekTooltip, visible)) {
        percent = parseFloat(this.elements.display.seekTooltip.style.left, 10);
      } else {
        return;
      } // Set bounds


      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      } // Display the time a click would seek to


      controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * percent); // Set position

      this.elements.display.seekTooltip.style.left = "".concat(percent, "%"); // Show/hide the tooltip
      // If the event is a moues in/out and percentage is inside bounds

      if (is$1.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
        toggle(event.type === 'mouseenter');
      }
    },
    // Handle time change event
    timeUpdate: function timeUpdate(event) {
      // Only invert if only one time element is displayed and used for both duration and currentTime
      var invert = !is$1.element(this.elements.display.duration) && this.config.invertTime; // Duration

      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert); // Ignore updates while seeking

      if (event && event.type === 'timeupdate' && this.media.seeking) {
        return;
      } // Playing progress


      controls.updateProgress.call(this, event);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate: function durationUpdate() {
      // Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      } // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
      // https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
      // https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
      // https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338


      if (this.duration >= Math.pow(2, 32)) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      } // Update ARIA values


      if (is$1.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
      } // If there's a spot to display duration


      var hasDuration = is$1.element(this.elements.display.duration); // If there's only one time display, display duration there

      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      } // If there's a duration element, update content


      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      } // Update the tooltip (if visible)


      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton: function toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting: function updateSetting(setting, container, input) {
      var pane = this.elements.settings.panels[setting];
      var value = null;
      var list = container;

      if (setting === 'captions') {
        value = this.currentTrack;
      } else {
        value = !is$1.empty(input) ? input : this[setting]; // Get default

        if (is$1.empty(value)) {
          value = this.config[setting].default;
        } // Unsupported value


        if (!is$1.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn("Unsupported value of '".concat(value, "' for ").concat(setting));
          return;
        } // Disabled value


        if (!this.config[setting].options.includes(value)) {
          this.debug.warn("Disabled value of '".concat(value, "' for ").concat(setting));
          return;
        }
      } // Get the list if we need to


      if (!is$1.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      } // If there's no list it means it's not been rendered...


      if (!is$1.element(list)) {
        return;
      } // Update the label


      var label = this.elements.settings.buttons[setting].querySelector(".".concat(this.config.classNames.menu.value));
      label.innerHTML = controls.getLabel.call(this, setting, value); // Find the radio option and check it

      var target = list && list.querySelector("[value=\"".concat(value, "\"]"));

      if (is$1.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel: function getLabel(setting, value) {
      switch (setting) {
        case 'speed':
          return value === 1 ? i18n.get('normal', this.config) : "".concat(value, "&times;");

        case 'quality':
          if (is$1.number(value)) {
            var label = i18n.get("qualityLabel.".concat(value), this.config);

            if (!label.length) {
              return "".concat(value, "p");
            }

            return label;
          }

          return toTitleCase(value);

        case 'captions':
          return captions.getLabel.call(this);

        default:
          return null;
      }
    },
    // Set the quality menu
    setQualityMenu: function setQualityMenu(options) {
      var _this5 = this;

      // Menu required
      if (!is$1.element(this.elements.settings.panels.quality)) {
        return;
      }

      var type = 'quality';
      var list = this.elements.settings.panels.quality.querySelector('[role="menu"]'); // Set options if passed and filter based on uniqueness and config

      if (is$1.array(options)) {
        this.options.quality = dedupe(options).filter(function (quality) {
          return _this5.config.quality.options.includes(quality);
        });
      } // Toggle the pane and tab


      var toggle = !is$1.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Get the badge HTML for HD, 4K etc


      var getBadge = function getBadge(quality) {
        var label = i18n.get("qualityBadge.".concat(quality), _this5.config);

        if (!label.length) {
          return null;
        }

        return controls.createBadge.call(_this5, label);
      }; // Sort options by the config and then render options


      this.options.quality.sort(function (a, b) {
        var sorting = _this5.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach(function (quality) {
        controls.createMenuItem.call(_this5, {
          value: quality,
          list: list,
          type: type,
          title: controls.getLabel.call(_this5, 'quality', quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options

    /* setLoopMenu() {
        // Menu required
        if (!is.element(this.elements.settings.panels.loop)) {
            return;
        }
         const options = ['start', 'end', 'all', 'reset'];
        const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
         // Show the pane and tab
        toggleHidden(this.elements.settings.buttons.loop, false);
        toggleHidden(this.elements.settings.panels.loop, false);
         // Toggle the pane and tab
        const toggle = !is.empty(this.loop.options);
        controls.toggleMenuButton.call(this, 'loop', toggle);
         // Empty the menu
        emptyElement(list);
         options.forEach(option => {
            const item = createElement('li');
             const button = createElement(
                'button',
                extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                    type: 'button',
                    class: this.config.classNames.control,
                    'data-plyr-loop-action': option,
                }),
                i18n.get(option, this.config)
            );
             if (['start', 'end'].includes(option)) {
                const badge = controls.createBadge.call(this, '00:00');
                button.appendChild(badge);
            }
             item.appendChild(button);
            list.appendChild(item);
        });
    }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu: function setCaptionsMenu() {
      var _this6 = this;

      // Menu required
      if (!is$1.element(this.elements.settings.panels.captions)) {
        return;
      } // TODO: Captions or language? Currently it's mixed


      var type = 'captions';
      var list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      var tracks = captions.getTracks.call(this);
      var toggle = Boolean(tracks.length); // Toggle the pane and tab

      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If there's no captions, bail

      if (!toggle) {
        return;
      } // Generate options data


      var options = tracks.map(function (track, value) {
        return {
          value: value,
          checked: _this6.captions.toggled && _this6.currentTrack === value,
          title: captions.getLabel.call(_this6, track),
          badge: track.language && controls.createBadge.call(_this6, track.language.toUpperCase()),
          list: list,
          type: 'language'
        };
      }); // Add the "Disabled" option to turn off captions

      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get('disabled', this.config),
        list: list,
        type: 'language'
      }); // Generate options

      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu: function setSpeedMenu(options) {
      var _this7 = this;

      // Menu required
      if (!is$1.element(this.elements.settings.panels.speed)) {
        return;
      }

      var type = 'speed';
      var list = this.elements.settings.panels.speed.querySelector('[role="menu"]'); // Set the speed options

      if (is$1.array(options)) {
        this.options.speed = options;
      } else if (this.isHTML5 || this.isVimeo) {
        this.options.speed = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
      } // Set options if passed and filter based on config


      this.options.speed = this.options.speed.filter(function (speed) {
        return _this7.config.speed.options.includes(speed);
      }); // Toggle the pane and tab

      var toggle = !is$1.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Create items


      this.options.speed.forEach(function (speed) {
        controls.createMenuItem.call(_this7, {
          value: speed,
          list: list,
          type: type,
          title: controls.getLabel.call(_this7, 'speed', speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu: function checkMenu() {
      var buttons = this.elements.settings.buttons;
      var visible = !is$1.empty(buttons) && Object.values(buttons).some(function (button) {
        return !button.hidden;
      });
      toggleHidden(this.elements.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem: function focusFirstMenuItem(pane) {
      var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.elements.settings.popup.hidden) {
        return;
      }

      var target = pane;

      if (!is$1.element(target)) {
        target = Object.values(this.elements.settings.panels).find(function (pane) {
          return !pane.hidden;
        });
      }

      var firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, tabFocus);
    },
    // Show/hide menu
    toggleMenu: function toggleMenu(input) {
      var popup = this.elements.settings.popup;
      var button = this.elements.buttons.settings; // Menu and button are required

      if (!is$1.element(popup) || !is$1.element(button)) {
        return;
      } // True toggle by default


      var hidden = popup.hidden;
      var show = hidden;

      if (is$1.boolean(input)) {
        show = input;
      } else if (is$1.keyboardEvent(input) && input.which === 27) {
        show = false;
      } else if (is$1.event(input)) {
        var isMenuItem = popup.contains(input.target); // If the click was inside the menu or if the click
        // wasn't the button or menu item and we're trying to
        // show the menu (a doc click shouldn't show the menu)

        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      } // Set button attributes


      button.setAttribute('aria-expanded', show); // Show the actual popup

      toggleHidden(popup, !show); // Add class hook

      toggleClass(this.elements.container, this.config.classNames.menu.open, show); // Focus the first item if key interaction

      if (show && is$1.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        // If closing, re-focus the button
        setFocus.call(this, button, is$1.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize: function getMenuSize(tab) {
      var clone = tab.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.opacity = 0;
      clone.removeAttribute('hidden'); // Append to parent so we get the "real" size

      tab.parentNode.appendChild(clone); // Get the sizes before we remove

      var width = clone.scrollWidth;
      var height = clone.scrollHeight; // Remove from the DOM

      removeElement(clone);
      return {
        width: width,
        height: height
      };
    },
    // Show a panel in the menu
    showMenuPanel: function showMenuPanel() {
      var _this8 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var target = document.getElementById("plyr-settings-".concat(this.id, "-").concat(type)); // Nothing to show, bail

      if (!is$1.element(target)) {
        return;
      } // Hide all other panels


      var container = target.parentNode;
      var current = Array.from(container.children).find(function (node) {
        return !node.hidden;
      }); // If we can do fancy animations, we'll animate the height/width

      if (support.transitions && !support.reducedMotion) {
        // Set the current width as a base
        container.style.width = "".concat(current.scrollWidth, "px");
        container.style.height = "".concat(current.scrollHeight, "px"); // Get potential sizes

        var size = controls.getMenuSize.call(this, target); // Restore auto height/width

        var restore = function restore(event) {
          // We're only bothered about height and width on the container
          if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
            return;
          } // Revert back to auto


          container.style.width = '';
          container.style.height = ''; // Only listen once

          off.call(_this8, container, transitionEndEvent, restore);
        }; // Listen for the transition finishing and restore auto height/width


        on.call(this, container, transitionEndEvent, restore); // Set dimensions to target

        container.style.width = "".concat(size.width, "px");
        container.style.height = "".concat(size.height, "px");
      } // Set attributes on current tab


      toggleHidden(current, true); // Set attributes on target

      toggleHidden(target, false); // Focus the first item

      controls.focusFirstMenuItem.call(this, target, tabFocus);
    },
    // Set the download link
    setDownloadLink: function setDownloadLink() {
      var button = this.elements.buttons.download; // Bail if no button

      if (!is$1.element(button)) {
        return;
      } // Set download link


      button.setAttribute('href', this.download);
    },
    // Build the default HTML
    // TODO: Set order based on order in the config.controls array?
    create: function create(data) {
      var _this9 = this;

      // Create the container
      var container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper)); // Restart button

      if (this.config.controls.includes('restart')) {
        container.appendChild(controls.createButton.call(this, 'restart'));
      } // Rewind button


      if (this.config.controls.includes('rewind')) {
        container.appendChild(controls.createButton.call(this, 'rewind'));
      } // Play/Pause button


      if (this.config.controls.includes('play')) {
        container.appendChild(controls.createButton.call(this, 'play'));
      } // Fast forward button


      if (this.config.controls.includes('fast-forward')) {
        container.appendChild(controls.createButton.call(this, 'fast-forward'));
      } // Progress


      if (this.config.controls.includes('progress')) {
        var progress = createElement('div', getAttributesFromSelector(this.config.selectors.progress)); // Seek range slider

        progress.appendChild(controls.createRange.call(this, 'seek', {
          id: "plyr-seek-".concat(data.id)
        })); // Buffer progress

        progress.appendChild(controls.createProgress.call(this, 'buffer')); // TODO: Add loop display indicator
        // Seek tooltip

        if (this.config.tooltips.seek) {
          var tooltip = createElement('span', {
            class: this.config.classNames.tooltip
          }, '00:00');
          progress.appendChild(tooltip);
          this.elements.display.seekTooltip = tooltip;
        }

        this.elements.progress = progress;
        container.appendChild(this.elements.progress);
      } // Media current time display


      if (this.config.controls.includes('current-time')) {
        container.appendChild(controls.createTime.call(this, 'currentTime'));
      } // Media duration display


      if (this.config.controls.includes('duration')) {
        container.appendChild(controls.createTime.call(this, 'duration'));
      } // Volume controls


      if (this.config.controls.includes('mute') || this.config.controls.includes('volume')) {
        var volume = createElement('div', {
          class: 'plyr__volume'
        }); // Toggle mute button

        if (this.config.controls.includes('mute')) {
          volume.appendChild(controls.createButton.call(this, 'mute'));
        } // Volume range control


        if (this.config.controls.includes('volume')) {
          // Set the attributes
          var attributes = {
            max: 1,
            step: 0.05,
            value: this.config.volume
          }; // Create the volume range slider

          volume.appendChild(controls.createRange.call(this, 'volume', extend(attributes, {
            id: "plyr-volume-".concat(data.id)
          })));
          this.elements.volume = volume;
        }

        container.appendChild(volume);
      } // Toggle captions button


      if (this.config.controls.includes('captions')) {
        container.appendChild(controls.createButton.call(this, 'captions'));
      } // Settings button / menu


      if (this.config.controls.includes('settings') && !is$1.empty(this.config.settings)) {
        var control = createElement('div', {
          class: 'plyr__menu',
          hidden: ''
        });
        control.appendChild(controls.createButton.call(this, 'settings', {
          'aria-haspopup': true,
          'aria-controls': "plyr-settings-".concat(data.id),
          'aria-expanded': false
        }));
        var popup = createElement('div', {
          class: 'plyr__menu__container',
          id: "plyr-settings-".concat(data.id),
          hidden: ''
        });
        var inner = createElement('div');
        var home = createElement('div', {
          id: "plyr-settings-".concat(data.id, "-home")
        }); // Create the menu

        var menu = createElement('div', {
          role: 'menu'
        });
        home.appendChild(menu);
        inner.appendChild(home);
        this.elements.settings.panels.home = home; // Build the menu items

        this.config.settings.forEach(function (type) {
          // TODO: bundle this with the createMenuItem helper and bindings
          var menuItem = createElement('button', extend(getAttributesFromSelector(_this9.config.selectors.buttons.settings), {
            type: 'button',
            class: "".concat(_this9.config.classNames.control, " ").concat(_this9.config.classNames.control, "--forward"),
            role: 'menuitem',
            'aria-haspopup': true,
            hidden: ''
          })); // Bind menu shortcuts for keyboard users

          controls.bindMenuItemShortcuts.call(_this9, menuItem, type); // Show menu on click

          on(menuItem, 'click', function () {
            controls.showMenuPanel.call(_this9, type, false);
          });
          var flex = createElement('span', null, i18n.get(type, _this9.config));
          var value = createElement('span', {
            class: _this9.config.classNames.menu.value
          }); // Speed contains HTML entities

          value.innerHTML = data[type];
          flex.appendChild(value);
          menuItem.appendChild(flex);
          menu.appendChild(menuItem); // Build the panes

          var pane = createElement('div', {
            id: "plyr-settings-".concat(data.id, "-").concat(type),
            hidden: ''
          }); // Back button

          var backButton = createElement('button', {
            type: 'button',
            class: "".concat(_this9.config.classNames.control, " ").concat(_this9.config.classNames.control, "--back")
          }); // Visible label

          backButton.appendChild(createElement('span', {
            'aria-hidden': true
          }, i18n.get(type, _this9.config))); // Screen reader label

          backButton.appendChild(createElement('span', {
            class: _this9.config.classNames.hidden
          }, i18n.get('menuBack', _this9.config))); // Go back via keyboard

          on(pane, 'keydown', function (event) {
            // We only care about <-
            if (event.which !== 37) {
              return;
            } // Prevent seek


            event.preventDefault();
            event.stopPropagation(); // Show the respective menu

            controls.showMenuPanel.call(_this9, 'home', true);
          }, false); // Go back via button click

          on(backButton, 'click', function () {
            controls.showMenuPanel.call(_this9, 'home', false);
          }); // Add to pane

          pane.appendChild(backButton); // Menu

          pane.appendChild(createElement('div', {
            role: 'menu'
          }));
          inner.appendChild(pane);
          _this9.elements.settings.buttons[type] = menuItem;
          _this9.elements.settings.panels[type] = pane;
        });
        popup.appendChild(inner);
        control.appendChild(popup);
        container.appendChild(control);
        this.elements.settings.popup = popup;
        this.elements.settings.menu = control;
      } // Picture in picture button


      if (this.config.controls.includes('pip') && support.pip) {
        container.appendChild(controls.createButton.call(this, 'pip'));
      } // Airplay button


      if (this.config.controls.includes('airplay') && support.airplay) {
        container.appendChild(controls.createButton.call(this, 'airplay'));
      } // Download button


      if (this.config.controls.includes('download')) {
        var _attributes = {
          element: 'a',
          href: this.download,
          target: '_blank'
        };
        var download = this.config.urls.download;

        if (!is$1.url(download) && this.isEmbed) {
          extend(_attributes, {
            icon: "logo-".concat(this.provider),
            label: this.provider
          });
        }

        container.appendChild(controls.createButton.call(this, 'download', _attributes));
      } // Toggle fullscreen button


      if (this.config.controls.includes('fullscreen')) {
        container.appendChild(controls.createButton.call(this, 'fullscreen'));
      } // Larger overlaid play button


      if (this.config.controls.includes('play-large')) {
        this.elements.container.appendChild(controls.createButton.call(this, 'play-large'));
      }

      this.elements.controls = container; // Set available quality levels

      if (this.isHTML5) {
        controls.setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }

      controls.setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject: function inject() {
      var _this10 = this;

      // Sprite
      if (this.config.loadSprite) {
        var icon = controls.getIconUrl.call(this); // Only load external sprite using AJAX

        if (icon.cors) {
          loadSprite(icon.url, 'sprite-plyr');
        }
      } // Create a unique ID


      this.id = Math.floor(Math.random() * 10000); // Null by default

      var container = null;
      this.elements.controls = null; // Set template properties

      var props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      var update = true; // If function, run it and use output

      if (is$1.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this.props);
      } // Convert falsy controls to empty array (primarily for empty strings)


      if (!this.config.controls) {
        this.config.controls = [];
      }

      if (is$1.element(this.config.controls) || is$1.string(this.config.controls)) {
        // HTMLElement or Non-empty string passed as the option
        container = this.config.controls;
      } else {
        // Create controls
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions.getLabel.call(this) // TODO: Looping
          // loop: 'None',

        });
        update = false;
      } // Replace props with their value


      var replace = function replace(input) {
        var result = input;
        Object.entries(props).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          result = replaceAll(result, "{".concat(key, "}"), value);
        });
        return result;
      }; // Update markup


      if (update) {
        if (is$1.string(this.config.controls)) {
          container = replace(container);
        } else if (is$1.element(container)) {
          container.innerHTML = replace(container.innerHTML);
        }
      } // Controls container


      var target; // Inject to custom location

      if (is$1.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      } // Inject into the container by default


      if (!is$1.element(target)) {
        target = this.elements.container;
      } // Inject controls HTML (needs to be before captions, hence "afterbegin")


      var insertMethod = is$1.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
      target[insertMethod]('afterbegin', container); // Find the elements if need be

      if (!is$1.element(this.elements.controls)) {
        controls.findElements.call(this);
      } // Add pressed property to buttons


      if (!is$1.empty(this.elements.buttons)) {
        var addProperty = function addProperty(button) {
          var className = _this10.config.classNames.controlPressed;
          Object.defineProperty(button, 'pressed', {
            enumerable: true,
            get: function get() {
              return hasClass(button, className);
            },
            set: function set() {
              var pressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              toggleClass(button, className, pressed);
            }
          });
        }; // Toggle classname when pressed property is set


        Object.values(this.elements.buttons).filter(Boolean).forEach(function (button) {
          if (is$1.array(button) || is$1.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      } // Edge sometimes doesn't finish the paint so force a redraw


      if (window.navigator.userAgent.includes('Edge')) {
        repaint(target);
      } // Setup tooltips


      if (this.config.tooltips.controls) {
        var _this$config = this.config,
            classNames = _this$config.classNames,
            selectors = _this$config.selectors;
        var selector = "".concat(selectors.controls.wrapper, " ").concat(selectors.labels, " .").concat(classNames.hidden);
        var labels = getElements.call(this, selector);
        Array.from(labels).forEach(function (label) {
          toggleClass(label, _this10.config.classNames.hidden, false);
          toggleClass(label, _this10.config.classNames.tooltip, true);
        });
      }
    }
  };

  /**
   * Parse a string to a URL object
   * @param {string} input - the URL to be parsed
   * @param {boolean} safe - failsafe parsing
   */

  function parseUrl(input) {
    var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var url = input;

    if (safe) {
      var parser = document.createElement('a');
      parser.href = url;
      url = parser.href;
    }

    try {
      return new URL(url);
    } catch (e) {
      return null;
    }
  } // Convert object to URLSearchParams

  function buildUrlParams(input) {
    var params = new URLSearchParams();

    if (is$1.object(input)) {
      Object.entries(input).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        params.set(key, value);
      });
    }

    return params;
  }

  var captions = {
    // Setup captions
    setup: function setup() {
      // Requires UI support
      if (!this.supported.ui) {
        return;
      } // Only Vimeo and HTML5 video supported at this point


      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
        // Clear menu and hide
        if (is$1.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
          controls.setCaptionsMenu.call(this);
        }

        return;
      } // Inject the container


      if (!is$1.element(this.elements.captions)) {
        this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
        insertAfter(this.elements.captions, this.elements.wrapper);
      } // Fix IE captions if CORS is used
      // Fetch captions and inject as blobs instead (data URIs not supported!)


      if (browser.isIE && window.URL) {
        var elements = this.media.querySelectorAll('track');
        Array.from(elements).forEach(function (track) {
          var src = track.getAttribute('src');
          var url = parseUrl(src);

          if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
            fetch(src, 'blob').then(function (blob) {
              track.setAttribute('src', window.URL.createObjectURL(blob));
            }).catch(function () {
              removeElement(track);
            });
          }
        });
      } // Get and set initial data
      // The "preferred" options are not realized unless / until the wanted language has a match
      // * languages: Array of user's browser languages.
      // * language:  The language preferred by user settings or config
      // * active:    The state preferred by user settings or config
      // * toggled:   The real captions state


      var browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
      var languages = dedupe(browserLanguages.map(function (language) {
        return language.split('-')[0];
      }));
      var language = (this.storage.get('language') || this.config.captions.language || 'auto').toLowerCase(); // Use first browser language when language is 'auto'

      if (language === 'auto') {
        var _languages = _slicedToArray(languages, 1);

        language = _languages[0];
      }

      var active = this.storage.get('captions');

      if (!is$1.boolean(active)) {
        active = this.config.captions.active;
      }

      Object.assign(this.captions, {
        toggled: false,
        active: active,
        language: language,
        languages: languages
      }); // Watch changes to textTracks and update captions menu

      if (this.isHTML5) {
        var trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      } // Update available languages in list next tick (the event must not be triggered before the listeners)


      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update: function update() {
      var _this = this;

      var tracks = captions.getTracks.call(this, true); // Get the wanted language

      var _this$captions = this.captions,
          active = _this$captions.active,
          language = _this$captions.language,
          meta = _this$captions.meta,
          currentTrackNode = _this$captions.currentTrackNode;
      var languageExists = Boolean(tracks.find(function (track) {
        return track.language === language;
      })); // Handle tracks (add event listener and "pseudo"-default)

      if (this.isHTML5 && this.isVideo) {
        tracks.filter(function (track) {
          return !meta.get(track);
        }).forEach(function (track) {
          _this.debug.log('Track added', track); // Attempt to store if the original dom element was "default"


          meta.set(track, {
            default: track.mode === 'showing'
          }); // Turn off native caption rendering to avoid double captions

          track.mode = 'hidden'; // Add event listener for cue changes

          on.call(_this, track, 'cuechange', function () {
            return captions.updateCues.call(_this);
          });
        });
      } // Update language first time it matches, or if the previous matching track was removed


      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      } // Enable or disable captions based on track length


      toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is$1.empty(tracks)); // Update available languages in list

      if ((this.config.controls || []).includes('settings') && this.config.settings.includes('captions')) {
        controls.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle: function toggle(input) {
      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // If there's no full support
      if (!this.supported.ui) {
        return;
      }

      var toggled = this.captions.toggled; // Current state

      var activeClass = this.config.classNames.captions.active; // Get the next state
      // If the method is called without parameter, toggle based on current value

      var active = is$1.nullOrUndefined(input) ? !toggled : input; // Update state and trigger event

      if (active !== toggled) {
        // When passive, don't override user preferences
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        } // Force language if the call isn't passive and there is no matching language to toggle to


        if (!this.language && active && !passive) {
          var tracks = captions.getTracks.call(this);
          var track = captions.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), true); // Override user preferences to avoid switching languages if a matching track is added

          this.captions.language = track.language; // Set caption, but don't store in localStorage as user preference

          captions.set.call(this, tracks.indexOf(track));
          return;
        } // Toggle button if it's enabled


        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        } // Add class hook


        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // Trigger event (not used internally)

        triggerEvent.call(this, this.media, active ? 'captionsenabled' : 'captionsdisabled');
      }
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set: function set(index) {
      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var tracks = captions.getTracks.call(this); // Disable captions if setting to -1

      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }

      if (!is$1.number(index)) {
        this.debug.warn('Invalid caption argument', index);
        return;
      }

      if (!(index in tracks)) {
        this.debug.warn('Track not found', index);
        return;
      }

      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        var track = tracks[index];

        var _ref = track || {},
            language = _ref.language; // Store reference to node for invalidation on remove


        this.captions.currentTrackNode = track; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // When passive, don't override user preferences

        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language: language
          });
        } // Handle Vimeo captions


        if (this.isVimeo) {
          this.embed.enableTextTrack(language);
        } // Trigger event


        triggerEvent.call(this, this.media, 'languagechange');
      } // Show captions


      captions.toggle.call(this, true, passive);

      if (this.isHTML5 && this.isVideo) {
        // If we change the active track while a cue is already displayed we need to update it
        captions.updateCues.call(this);
      }
    },
    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage: function setLanguage(input) {
      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!is$1.string(input)) {
        this.debug.warn('Invalid language argument', input);
        return;
      } // Normalize


      var language = input.toLowerCase();
      this.captions.language = language; // Set currentTrack

      var tracks = captions.getTracks.call(this);
      var track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks: function getTracks() {
      var _this2 = this;

      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Handle media or textTracks missing or null
      var tracks = Array.from((this.media || {}).textTracks || []); // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
      // Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)

      return tracks.filter(function (track) {
        return !_this2.isHTML5 || update || _this2.captions.meta.has(track);
      }).filter(function (track) {
        return ['captions', 'subtitles'].includes(track.kind);
      });
    },
    // Match tracks based on languages and get the first
    findTrack: function findTrack(languages) {
      var _this3 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tracks = captions.getTracks.call(this);

      var sortIsDefault = function sortIsDefault(track) {
        return Number((_this3.captions.meta.get(track) || {}).default);
      };

      var sorted = Array.from(tracks).sort(function (a, b) {
        return sortIsDefault(b) - sortIsDefault(a);
      });
      var track;
      languages.every(function (language) {
        track = sorted.find(function (track) {
          return track.language === language;
        });
        return !track; // Break iteration if there is a match
      }); // If no match is found but is required, get first

      return track || (force ? sorted[0] : undefined);
    },
    // Get the current track
    getCurrentTrack: function getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel: function getLabel(track) {
      var currentTrack = track;

      if (!is$1.track(currentTrack) && support.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }

      if (is$1.track(currentTrack)) {
        if (!is$1.empty(currentTrack.label)) {
          return currentTrack.label;
        }

        if (!is$1.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }

        return i18n.get('enabled', this.config);
      }

      return i18n.get('disabled', this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues: function updateCues(input) {
      // Requires UI
      if (!this.supported.ui) {
        return;
      }

      if (!is$1.element(this.elements.captions)) {
        this.debug.warn('No captions element to render to');
        return;
      } // Only accept array or empty input


      if (!is$1.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn('updateCues: Invalid input', input);
        return;
      }

      var cues = input; // Get cues from track

      if (!cues) {
        var track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map(function (cue) {
          return cue.getCueAsHTML();
        }).map(getHTML);
      } // Set new caption text


      var content = cues.map(function (cueText) {
        return cueText.trim();
      }).join('\n');
      var changed = content !== this.elements.captions.innerHTML;

      if (changed) {
        // Empty the container and create a new child element
        emptyElement(this.elements.captions);
        var caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption); // Trigger event

        triggerEvent.call(this, this.media, 'cuechange');
      }
    }
  };

  // ==========================================================================
  // Plyr default config
  // ==========================================================================
  var defaults = {
    // Disable
    enabled: true,
    // Custom media title
    title: '',
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS (this effects YouTube/Vimeo - HTML5 requires the attribute present)
    // TODO: Remove iosNative fullscreen option in favour of this (logic needs work)
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Aspect ratio (for embeds)
    ratio: '16:9',
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: 'plyr',
    iconUrl: 'https://cdn.plyr.io/3.4.7/plyr.svg',
    // Blank video (used to prevent errors on source change)
    blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
    // Quality default
    quality: {
      default: 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
    },
    // Set loops
    loop: {
      active: false // start: null,
      // end: null,

    },
    // Speed default and options to display
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: 'auto',
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback for vintage browsers
      iosNative: false // Use the native fullscreen in iOS (disables custom controls)

    },
    // Local storage
    storage: {
      enabled: true,
      key: 'plyr'
    },
    // Default controls
    controls: ['play-large', // 'restart',
    // 'rewind',
    'play', // 'fast-forward',
    'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', // 'download',
    'fullscreen'],
    settings: ['captions', 'quality', 'speed'],
    // Localisation
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
      start: 'Start',
      end: 'End',
      all: 'All',
      reset: 'Reset',
      disabled: 'Disabled',
      enabled: 'Enabled',
      advertisement: 'Ad',
      qualityBadge: {
        2160: '4K',
        1440: 'HD',
        1080: 'HD',
        720: 'HD',
        576: 'SD',
        480: 'SD'
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: 'https://player.vimeo.com/api/player.js',
        iframe: 'https://player.vimeo.com/video/{0}?{1}',
        api: 'https://vimeo.com/api/v2/video/{0}.json'
      },
      youtube: {
        sdk: 'https://www.youtube.com/iframe_api',
        api: 'https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet'
      },
      googleIMA: {
        sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [// Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange', // Custom events
    'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready', // YouTube
    'statechange', // Quality
    'qualitychange', // Ads
    'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick'],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: 'input, textarea, select, [contenteditable]',
      container: '.plyr',
      controls: {
        container: null,
        wrapper: '.plyr__controls'
      },
      labels: '[data-plyr]',
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: '.plyr__time--current',
        duration: '.plyr__time--duration',
        buffer: '.plyr__progress__buffer',
        loop: '.plyr__progress__loop',
        // Used later
        volume: '.plyr__volume--display'
      },
      progress: '.plyr__progress',
      captions: '.plyr__captions',
      caption: '.plyr__caption',
      menu: {
        quality: '.js-plyr__menu__list--quality'
      }
    },
    // Class hooks added to the player in different states
    classNames: {
      type: 'plyr--{0}',
      provider: 'plyr--{0}',
      video: 'plyr__video-wrapper',
      embed: 'plyr__video-embed',
      embedContainer: 'plyr__video-embed__container',
      poster: 'plyr__poster',
      posterEnabled: 'plyr__poster-enabled',
      ads: 'plyr__ads',
      control: 'plyr__control',
      controlPressed: 'plyr__control--pressed',
      playing: 'plyr--playing',
      paused: 'plyr--paused',
      stopped: 'plyr--stopped',
      loading: 'plyr--loading',
      hover: 'plyr--hover',
      tooltip: 'plyr__tooltip',
      cues: 'plyr__cues',
      hidden: 'plyr__sr-only',
      hideControls: 'plyr--hide-controls',
      isIos: 'plyr--is-ios',
      isTouch: 'plyr--is-touch',
      uiSupported: 'plyr--full-ui',
      noTransition: 'plyr--no-transition',
      display: {
        time: 'plyr__time'
      },
      menu: {
        value: 'plyr__menu__value',
        badge: 'plyr__badge',
        open: 'plyr--menu-open'
      },
      captions: {
        enabled: 'plyr--captions-enabled',
        active: 'plyr--captions-active'
      },
      fullscreen: {
        enabled: 'plyr--fullscreen-enabled',
        fallback: 'plyr--fullscreen-fallback'
      },
      pip: {
        supported: 'plyr--pip-supported',
        active: 'plyr--pip-active'
      },
      airplay: {
        supported: 'plyr--airplay-supported',
        active: 'plyr--airplay-active'
      },
      tabFocus: 'plyr__tab-focus'
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: 'data-plyr-provider',
        id: 'data-plyr-embed-id'
      }
    },
    // API keys
    keys: {
      google: null
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: ''
    }
  };

  // ==========================================================================
  // Plyr states
  // ==========================================================================
  var pip = {
    active: 'picture-in-picture',
    inactive: 'inline'
  };

  // ==========================================================================
  // Plyr supported types and providers
  // ==========================================================================
  var providers = {
    html5: 'html5',
    youtube: 'youtube',
    vimeo: 'vimeo'
  };
  var types = {
    audio: 'audio',
    video: 'video'
  };
  /**
   * Get provider by URL
   * @param {String} url
   */

  function getProviderByUrl(url) {
    // YouTube
    if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    } // Vimeo


    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }

    return null;
  }

  // ==========================================================================
  // Console wrapper
  // ==========================================================================
  var noop = function noop() {};

  var Console =
  /*#__PURE__*/
  function () {
    function Console() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      _classCallCheck(this, Console);

      this.enabled = window.console && enabled;

      if (this.enabled) {
        this.log('Debugging enabled');
      }
    }

    _createClass(Console, [{
      key: "log",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
      }
    }, {
      key: "warn",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
      }
    }, {
      key: "error",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
      }
    }]);

    return Console;
  }();

  function onChange() {
    if (!this.enabled) {
      return;
    } // Update toggle button


    var button = this.player.elements.buttons.fullscreen;

    if (is$1.element(button)) {
      button.pressed = this.active;
    } // Trigger an event


    triggerEvent.call(this.player, this.target, this.active ? 'enterfullscreen' : 'exitfullscreen', true); // Trap focus in container

    if (!browser.isIos) {
      trapFocus.call(this.player, this.target, this.active);
    }
  }

  function toggleFallback() {
    var _this = this;

    var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    // Store or restore scroll position
    if (toggle) {
      this.scrollPosition = {
        x: window.scrollX || 0,
        y: window.scrollY || 0
      };
    } else {
      window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
    } // Toggle scroll


    document.body.style.overflow = toggle ? 'hidden' : ''; // Toggle class hook

    toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle); // Force full viewport on iPhone X+

    if (browser.isIos) {
      var viewport = document.head.querySelector('meta[name="viewport"]');
      var property = 'viewport-fit=cover'; // Inject the viewport meta if required

      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
      } // Check if the property already exists


      var hasProperty = is$1.string(viewport.content) && viewport.content.includes(property);

      if (toggle) {
        this.cleanupViewport = !hasProperty;

        if (!hasProperty) {
          viewport.content += ",".concat(property);
        }
      } else if (this.cleanupViewport) {
        viewport.content = viewport.content.split(',').filter(function (part) {
          return part.trim() !== property;
        }).join(',');
      } // Force a repaint as sometimes Safari doesn't want to fill the screen


      setTimeout(function () {
        return repaint(_this.target);
      }, 100);
    } // Toggle button and fire events


    onChange.call(this);
  }

  var Fullscreen =
  /*#__PURE__*/
  function () {
    function Fullscreen(player) {
      var _this2 = this;

      _classCallCheck(this, Fullscreen);

      // Keep reference to parent
      this.player = player; // Get prefix

      this.prefix = Fullscreen.prefix;
      this.property = Fullscreen.property; // Scroll position

      this.scrollPosition = {
        x: 0,
        y: 0
      }; // Register event listeners
      // Handle event (incase user presses escape etc)

      on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : "".concat(this.prefix, "fullscreenchange"), function () {
        // TODO: Filter for target??
        onChange.call(_this2);
      }); // Fullscreen toggle on double click

      on.call(this.player, this.player.elements.container, 'dblclick', function (event) {
        // Ignore double click in controls
        if (is$1.element(_this2.player.elements.controls) && _this2.player.elements.controls.contains(event.target)) {
          return;
        }

        _this2.toggle();
      }); // Update the UI

      this.update();
    } // Determine if native supported


    _createClass(Fullscreen, [{
      key: "update",
      // Update UI
      value: function update() {
        if (this.enabled) {
          this.player.debug.log("".concat(Fullscreen.native ? 'Native' : 'Fallback', " fullscreen enabled"));
        } else {
          this.player.debug.log('Fullscreen not supported and fallback disabled');
        } // Add styling hook to show button


        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } // Make an element fullscreen

    }, {
      key: "enter",
      value: function enter() {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen doesn't need the request step


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          this.target.webkitEnterFullscreen();
        } else if (!Fullscreen.native) {
          toggleFallback.call(this, true);
        } else if (!this.prefix) {
          this.target.requestFullscreen();
        } else if (!is$1.empty(this.prefix)) {
          this.target["".concat(this.prefix, "Request").concat(this.property)]();
        }
      } // Bail from fullscreen

    }, {
      key: "exit",
      value: function exit() {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          this.target.webkitExitFullscreen();
          this.player.play();
        } else if (!Fullscreen.native) {
          toggleFallback.call(this, false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is$1.empty(this.prefix)) {
          var action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
          document["".concat(this.prefix).concat(action).concat(this.property)]();
        }
      } // Toggle state

    }, {
      key: "toggle",
      value: function toggle() {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      }
    }, {
      key: "enabled",
      // Determine if fullscreen is enabled
      get: function get() {
        return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } // Get active state

    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) {
          return false;
        } // Fallback using classname


        if (!Fullscreen.native) {
          return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
        }

        var element = !this.prefix ? document.fullscreenElement : document["".concat(this.prefix).concat(this.property, "Element")];
        return element === this.target;
      } // Get target element

    }, {
      key: "target",
      get: function get() {
        return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      } // Get the prefix for handlers

    }, {
      key: "prefix",
      get: function get() {
        // No prefix
        if (is$1.function(document.exitFullscreen)) {
          return '';
        } // Check for fullscreen support by vendor prefix


        var value = '';
        var prefixes = ['webkit', 'moz', 'ms'];
        prefixes.some(function (pre) {
          if (is$1.function(document["".concat(pre, "ExitFullscreen")]) || is$1.function(document["".concat(pre, "CancelFullScreen")])) {
            value = pre;
            return true;
          }

          return false;
        });
        return value;
      }
    }, {
      key: "property",
      get: function get() {
        return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
      }
    }]);

    return Fullscreen;
  }();

  // 20.2.2.28 Math.sign(x)
  var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  // 20.2.2.28 Math.sign(x)


  _export(_export.S, 'Math', { sign: _mathSign });

  // ==========================================================================
  // Load image avoiding xhr/fetch CORS issues
  // Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
  // By default it checks if it is at least 1px, but you can add a second argument to change this
  // ==========================================================================
  function loadImage(src) {
    var minWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new Promise(function (resolve, reject) {
      var image = new Image();

      var handler = function handler() {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };

      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src: src
      });
    });
  }

  var ui = {
    addStyleHook: function addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace('.', ''), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls: function toggleNativeControls() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (toggle && this.isHTML5) {
        this.media.setAttribute('controls', '');
      } else {
        this.media.removeAttribute('controls');
      }
    },
    // Setup the UI
    build: function build() {
      var _this = this;

      // Re-attach media element listeners
      // TODO: Use event bubbling?
      this.listeners.media(); // Don't setup interface if no support

      if (!this.supported.ui) {
        this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)); // Restore native controls

        ui.toggleNativeControls.call(this, true); // Bail

        return;
      } // Inject custom controls if not present


      if (!is$1.element(this.elements.controls)) {
        // Inject custom controls
        controls.inject.call(this); // Re-attach control listeners

        this.listeners.controls();
      } // Remove native controls


      ui.toggleNativeControls.call(this); // Setup captions for HTML5

      if (this.isHTML5) {
        captions.setup.call(this);
      } // Reset volume


      this.volume = null; // Reset mute state

      this.muted = null; // Reset speed

      this.speed = null; // Reset loop state

      this.loop = null; // Reset quality setting

      this.quality = null; // Reset volume display

      controls.updateVolume.call(this); // Reset time display

      controls.timeUpdate.call(this); // Update the UI

      ui.checkPlaying.call(this); // Check for picture-in-picture support

      toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo); // Check for airplay support

      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5); // Add iOS class

      toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos); // Add touch class

      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch); // Ready for API calls

      this.ready = true; // Ready event at end of execution stack

      setTimeout(function () {
        triggerEvent.call(_this, _this.media, 'ready');
      }, 0); // Set the title

      ui.setTitle.call(this); // Assure the poster image is set, if the property was added before the element was created

      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(function () {});
      } // Manually set the duration if user has overridden it.
      // The event listeners for it doesn't get called if preload is disabled (#701)


      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle: function setTitle() {
      // Find the current text
      var label = i18n.get('play', this.config); // If there's a media title set, use that for the label

      if (is$1.string(this.config.title) && !is$1.empty(this.config.title)) {
        label += ", ".concat(this.config.title);
      } // If there's a play button, set label


      Array.from(this.elements.buttons.play || []).forEach(function (button) {
        button.setAttribute('aria-label', label);
      }); // Set iframe title
      // https://github.com/sampotts/plyr/issues/124

      if (this.isEmbed) {
        var iframe = getElement.call(this, 'iframe');

        if (!is$1.element(iframe)) {
          return;
        } // Default to media type


        var title = !is$1.empty(this.config.title) ? this.config.title : 'video';
        var format = i18n.get('frameTitle', this.config);
        iframe.setAttribute('title', format.replace('{title}', title));
      }
    },
    // Toggle poster
    togglePoster: function togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster: function setPoster(poster) {
      var _this2 = this;

      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // Don't override if call is passive
      if (passive && this.poster) {
        return Promise.reject(new Error('Poster already set'));
      } // Set property synchronously to respect the call order


      this.media.setAttribute('poster', poster); // Wait until ui is ready

      return ready.call(this) // Load image
      .then(function () {
        return loadImage(poster);
      }).catch(function (err) {
        // Hide poster on error unless it's been set by another call
        if (poster === _this2.poster) {
          ui.togglePoster.call(_this2, false);
        } // Rethrow


        throw err;
      }).then(function () {
        // Prevent race conditions
        if (poster !== _this2.poster) {
          throw new Error('setPoster cancelled by later call to setPoster');
        }
      }).then(function () {
        Object.assign(_this2.elements.poster.style, {
          backgroundImage: "url('".concat(poster, "')"),
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ''
        });
        ui.togglePoster.call(_this2, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying: function checkPlaying(event) {
      var _this3 = this;

      // Class hooks
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped); // Set state

      Array.from(this.elements.buttons.play || []).forEach(function (target) {
        target.pressed = _this3.playing;
      }); // Only update controls on non timeupdate events

      if (is$1.event(event) && event.type === 'timeupdate') {
        return;
      } // Toggle controls


      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading: function checkLoading(event) {
      var _this4 = this;

      this.loading = ['stalled', 'waiting'].includes(event.type); // Clear timer

      clearTimeout(this.timers.loading); // Timer to prevent flicker when seeking

      this.timers.loading = setTimeout(function () {
        // Update progress bar loading class state
        toggleClass(_this4.elements.container, _this4.config.classNames.loading, _this4.loading); // Update controls visibility

        ui.toggleControls.call(_this4);
      }, this.loading ? 250 : 0);
    },
    // Toggle controls based on state and `force` argument
    toggleControls: function toggleControls(force) {
      var controls$$1 = this.elements.controls;

      if (controls$$1 && this.config.hideControls) {
        // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
        var recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now(); // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide

        this.toggleControls(Boolean(force || this.loading || this.paused || controls$$1.pressed || controls$$1.hover || recentTouchSeek));
      }
    }
  };

  var Listeners =
  /*#__PURE__*/
  function () {
    function Listeners(player) {
      _classCallCheck(this, Listeners);

      this.player = player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.setTabFocus = this.setTabFocus.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    } // Handle key presses


    _createClass(Listeners, [{
      key: "handleKey",
      value: function handleKey(event) {
        var player = this.player;
        var elements = player.elements;
        var code = event.keyCode ? event.keyCode : event.which;
        var pressed = event.type === 'keydown';
        var repeat = pressed && code === this.lastKey; // Bail if a modifier key is set

        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        } // If the event is bubbled from the media element
        // Firefox doesn't get the keycode for whatever reason


        if (!is$1.number(code)) {
          return;
        } // Seek by the number keys


        var seekByKey = function seekByKey() {
          // Divide the max duration into 10th's and times by the number value
          player.currentTime = player.duration / 10 * (code - 48);
        }; // Handle the key on keydown
        // Reset on keyup


        if (pressed) {
          // Check focused element
          // and if the focused element is not editable (e.g. text input)
          // and any that accept key input http://webaim.org/techniques/keyboard/
          var focused = document.activeElement;

          if (is$1.element(focused)) {
            var editable = player.config.selectors.editable;
            var seek = elements.inputs.seek;

            if (focused !== seek && matches(focused, editable)) {
              return;
            }

            if (event.which === 32 && matches(focused, 'button, [role^="menuitem"]')) {
              return;
            }
          } // Which keycodes should we prevent default


          var preventDefault = [32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79]; // If the code is found prevent default (e.g. prevent scrolling for arrows)

          if (preventDefault.includes(code)) {
            event.preventDefault();
            event.stopPropagation();
          }

          switch (code) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              // 0-9
              if (!repeat) {
                seekByKey();
              }

              break;

            case 32:
            case 75:
              // Space and K key
              if (!repeat) {
                player.togglePlay();
              }

              break;

            case 38:
              // Arrow up
              player.increaseVolume(0.1);
              break;

            case 40:
              // Arrow down
              player.decreaseVolume(0.1);
              break;

            case 77:
              // M key
              if (!repeat) {
                player.muted = !player.muted;
              }

              break;

            case 39:
              // Arrow forward
              player.forward();
              break;

            case 37:
              // Arrow back
              player.rewind();
              break;

            case 70:
              // F key
              player.fullscreen.toggle();
              break;

            case 67:
              // C key
              if (!repeat) {
                player.toggleCaptions();
              }

              break;

            case 76:
              // L key
              player.loop = !player.loop;
              break;

            /* case 73:
            this.setLoop('start');
            break;
            case 76:
            this.setLoop();
            break;
            case 79:
            this.setLoop('end');
            break; */

            default:
              break;
          } // Escape is handle natively when in full screen
          // So we only need to worry about non native


          if (!player.fullscreen.enabled && player.fullscreen.active && code === 27) {
            player.fullscreen.toggle();
          } // Store last code for next cycle


          this.lastKey = code;
        } else {
          this.lastKey = null;
        }
      } // Toggle menu

    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        controls.toggleMenu.call(this.player, event);
      } // Device is touch enabled

    }, {
      key: "firstTouch",
      value: function firstTouch() {
        var player = this.player;
        var elements = player.elements;
        player.touch = true; // Add touch class

        toggleClass(elements.container, player.config.classNames.isTouch, true);
      }
    }, {
      key: "setTabFocus",
      value: function setTabFocus(event) {
        var player = this.player;
        var elements = player.elements;
        clearTimeout(this.focusTimer); // Ignore any key other than tab

        if (event.type === 'keydown' && event.which !== 9) {
          return;
        } // Store reference to event timeStamp


        if (event.type === 'keydown') {
          this.lastKeyDown = event.timeStamp;
        } // Remove current classes


        var removeCurrent = function removeCurrent() {
          var className = player.config.classNames.tabFocus;
          var current = getElements.call(player, ".".concat(className));
          toggleClass(current, className, false);
        }; // Determine if a key was pressed to trigger this event


        var wasKeyDown = event.timeStamp - this.lastKeyDown <= 20; // Ignore focus events if a key was pressed prior

        if (event.type === 'focus' && !wasKeyDown) {
          return;
        } // Remove all current


        removeCurrent(); // Delay the adding of classname until the focus has changed
        // This event fires before the focusin event

        this.focusTimer = setTimeout(function () {
          var focused = document.activeElement; // Ignore if current focus element isn't inside the player

          if (!elements.container.contains(focused)) {
            return;
          }

          toggleClass(document.activeElement, player.config.classNames.tabFocus, true);
        }, 10);
      } // Global window & document listeners

    }, {
      key: "global",
      value: function global() {
        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var player = this.player; // Keyboard shortcuts

        if (player.config.keyboard.global) {
          toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
        } // Click anywhere closes menu


        toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle); // Detect touch by events

        once.call(player, document.body, 'touchstart', this.firstTouch); // Tab focus detection

        toggleListener.call(player, document.body, 'keydown focus blur', this.setTabFocus, toggle, false, true);
      } // Container listeners

    }, {
      key: "container",
      value: function container() {
        var player = this.player;
        var elements = player.elements; // Keyboard shortcuts

        if (!player.config.keyboard.global && player.config.keyboard.focused) {
          on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
        } // Toggle controls on mouse events and entering fullscreen


        on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', function (event) {
          var controls$$1 = elements.controls; // Remove button states for fullscreen

          if (controls$$1 && event.type === 'enterfullscreen') {
            controls$$1.pressed = false;
            controls$$1.hover = false;
          } // Show, then hide after a timeout unless another control event occurs


          var show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
          var delay = 0;

          if (show) {
            ui.toggleControls.call(player, true); // Use longer timeout for touch devices

            delay = player.touch ? 3000 : 2000;
          } // Clear timer


          clearTimeout(player.timers.controls); // Set new timer to prevent flicker when seeking

          player.timers.controls = setTimeout(function () {
            return ui.toggleControls.call(player, false);
          }, delay);
        });
      } // Listen for media events

    }, {
      key: "media",
      value: function media() {
        var player = this.player;
        var elements = player.elements; // Time change on media

        on.call(player, player.media, 'timeupdate seeking seeked', function (event) {
          return controls.timeUpdate.call(player, event);
        }); // Display duration

        on.call(player, player.media, 'durationchange loadeddata loadedmetadata', function (event) {
          return controls.durationUpdate.call(player, event);
        }); // Check for audio tracks on load
        // We can't use `loadedmetadata` as it doesn't seem to have audio tracks at that point

        on.call(player, player.media, 'canplay loadeddata', function () {
          toggleHidden(elements.volume, !player.hasAudio);
          toggleHidden(elements.buttons.mute, !player.hasAudio);
        }); // Handle the media finishing

        on.call(player, player.media, 'ended', function () {
          // Show poster on end
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            // Restart
            player.restart();
          }
        }); // Check for buffer progress

        on.call(player, player.media, 'progress playing seeking seeked', function (event) {
          return controls.updateProgress.call(player, event);
        }); // Handle volume changes

        on.call(player, player.media, 'volumechange', function (event) {
          return controls.updateVolume.call(player, event);
        }); // Handle play/pause

        on.call(player, player.media, 'playing play pause ended emptied timeupdate', function (event) {
          return ui.checkPlaying.call(player, event);
        }); // Loading state

        on.call(player, player.media, 'waiting canplay seeked playing', function (event) {
          return ui.checkLoading.call(player, event);
        }); // If autoplay, then load advertisement if required
        // TODO: Show some sort of loading state while the ad manager loads else there's a delay before ad shows

        on.call(player, player.media, 'playing', function () {
          if (!player.ads) {
            return;
          } // If ads are enabled, wait for them first


          if (player.ads.enabled && !player.ads.initialized) {
            // Wait for manager response
            player.ads.managerPromise.then(function () {
              return player.ads.play();
            }).catch(function () {
              return player.play();
            });
          }
        }); // Click video

        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          // Re-fetch the wrapper
          var wrapper = getElement.call(player, ".".concat(player.config.classNames.video)); // Bail if there's no wrapper (this should never happen)

          if (!is$1.element(wrapper)) {
            return;
          } // On click play, pause or restart


          on.call(player, elements.container, 'click', function (event) {
            var targets = [elements.container, wrapper]; // Ignore if click if not container or in video wrapper

            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            } // Touch devices will just show controls (if hidden)


            if (player.touch && player.config.hideControls) {
              return;
            }

            if (player.ended) {
              player.restart();
              player.play();
            } else {
              player.togglePlay();
            }
          });
        } // Disable right click


        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, 'contextmenu', function (event) {
            event.preventDefault();
          }, false);
        } // Volume change


        on.call(player, player.media, 'volumechange', function () {
          // Save to storage
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        }); // Speed change

        on.call(player, player.media, 'ratechange', function () {
          // Update UI
          controls.updateSetting.call(player, 'speed'); // Save to storage


          player.storage.set({
            speed: player.speed
          });
        }); // Quality change

        on.call(player, player.media, 'qualitychange', function (event) {
          // Update UI
          controls.updateSetting.call(player, 'quality', null, event.detail.quality);
        }); // Update download link when ready and if quality changes

        on.call(player, player.media, 'ready qualitychange', function () {
          controls.setDownloadLink.call(player);
        }); // Proxy events to container
        // Bubble up key events for Edge

        var proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
        on.call(player, player.media, proxyEvents, function (event) {
          var _event$detail = event.detail,
              detail = _event$detail === void 0 ? {} : _event$detail; // Get error details from media

          if (event.type === 'error') {
            detail = player.media.error;
          }

          triggerEvent.call(player, elements.container, event.type, true, detail);
        });
      } // Run default and custom handlers

    }, {
      key: "proxy",
      value: function proxy(event, defaultHandler, customHandlerKey) {
        var player = this.player;
        var customHandler = player.config.listeners[customHandlerKey];
        var hasCustomHandler = is$1.function(customHandler);
        var returned = true; // Execute custom handler

        if (hasCustomHandler) {
          returned = customHandler.call(player, event);
        } // Only call default handler if not prevented in custom handler


        if (returned && is$1.function(defaultHandler)) {
          defaultHandler.call(player, event);
        }
      } // Trigger custom and default handlers

    }, {
      key: "bind",
      value: function bind(element, type, defaultHandler, customHandlerKey) {
        var _this = this;

        var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var player = this.player;
        var customHandler = player.config.listeners[customHandlerKey];
        var hasCustomHandler = is$1.function(customHandler);
        on.call(player, element, type, function (event) {
          return _this.proxy(event, defaultHandler, customHandlerKey);
        }, passive && !hasCustomHandler);
      } // Listen for control events

    }, {
      key: "controls",
      value: function controls$$1() {
        var _this2 = this;

        var player = this.player;
        var elements = player.elements; // IE doesn't support input event, so we fallback to change

        var inputEvent = browser.isIE ? 'change' : 'input'; // Play/pause toggle

        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach(function (button) {
            _this2.bind(button, 'click', player.togglePlay, 'play');
          });
        } // Pause


        this.bind(elements.buttons.restart, 'click', player.restart, 'restart'); // Rewind

        this.bind(elements.buttons.rewind, 'click', player.rewind, 'rewind'); // Rewind

        this.bind(elements.buttons.fastForward, 'click', player.forward, 'fastForward'); // Mute toggle

        this.bind(elements.buttons.mute, 'click', function () {
          player.muted = !player.muted;
        }, 'mute'); // Captions toggle

        this.bind(elements.buttons.captions, 'click', function () {
          return player.toggleCaptions();
        }); // Download

        this.bind(elements.buttons.download, 'click', function () {
          triggerEvent.call(player, player.media, 'download');
        }, 'download'); // Fullscreen toggle

        this.bind(elements.buttons.fullscreen, 'click', function () {
          player.fullscreen.toggle();
        }, 'fullscreen'); // Picture-in-Picture

        this.bind(elements.buttons.pip, 'click', function () {
          player.pip = 'toggle';
        }, 'pip'); // Airplay

        this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay'); // Settings menu - click toggle

        this.bind(elements.buttons.settings, 'click', function (event) {
          // Prevent the document click listener closing the menu
          event.stopPropagation();

          controls.toggleMenu.call(player, event);
        }); // Settings menu - keyboard toggle
        // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143

        this.bind(elements.buttons.settings, 'keyup', function (event) {
          var code = event.which; // We only care about space and return

          if (![13, 32].includes(code)) {
            return;
          } // Because return triggers a click anyway, all we need to do is set focus


          if (code === 13) {
            controls.focusFirstMenuItem.call(player, null, true);

            return;
          } // Prevent scroll


          event.preventDefault(); // Prevent playing video (Firefox)

          event.stopPropagation(); // Toggle menu

          controls.toggleMenu.call(player, event);
        }, null, false // Can't be passive as we're preventing default
        ); // Escape closes menu

        this.bind(elements.settings.menu, 'keydown', function (event) {
          if (event.which === 27) {
            controls.toggleMenu.call(player, event);
          }
        }); // Set range input alternative "value", which matches the tooltip time (#954)

        this.bind(elements.inputs.seek, 'mousedown mousemove', function (event) {
          var rect = elements.progress.getBoundingClientRect();
          var percent = 100 / rect.width * (event.pageX - rect.left);
          event.currentTarget.setAttribute('seek-value', percent);
        }); // Pause while seeking

        this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', function (event) {
          var seek = event.currentTarget;
          var code = event.keyCode ? event.keyCode : event.which;
          var attribute = 'play-on-seeked';

          if (is$1.keyboardEvent(event) && code !== 39 && code !== 37) {
            return;
          } // Record seek time so we can prevent hiding controls for a few seconds after seek


          player.lastSeekTime = Date.now(); // Was playing before?

          var play = seek.hasAttribute(attribute); // Done seeking

          var done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

          if (play && done) {
            seek.removeAttribute(attribute);
            player.play();
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, '');
            player.pause();
          }
        }); // Fix range inputs on iOS
        // Super weird iOS bug where after you interact with an <input type="range">,
        // it takes over further interactions on the page. This is a hack

        if (browser.isIos) {
          var inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach(function (input) {
            return _this2.bind(input, inputEvent, function (event) {
              return repaint(event.target);
            });
          });
        } // Seek


        this.bind(elements.inputs.seek, inputEvent, function (event) {
          var seek = event.currentTarget; // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)

          var seekTo = seek.getAttribute('seek-value');

          if (is$1.empty(seekTo)) {
            seekTo = seek.value;
          }

          seek.removeAttribute('seek-value');
          player.currentTime = seekTo / seek.max * player.duration;
        }, 'seek'); // Seek tooltip

        this.bind(elements.progress, 'mouseenter mouseleave mousemove', function (event) {
          return controls.updateSeekTooltip.call(player, event);
        }); // Polyfill for lower fill in <input type="range"> for webkit

        if (browser.isWebkit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach(function (element) {
            _this2.bind(element, 'input', function (event) {
              return controls.updateRangeFill.call(player, event.target);
            });
          });
        } // Current time invert
        // Only if one time element is used for both currentTime and duration


        if (player.config.toggleInvert && !is$1.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, 'click', function () {
            // Do nothing if we're at the start
            if (player.currentTime === 0) {
              return;
            }

            player.config.invertTime = !player.config.invertTime;

            controls.timeUpdate.call(player);
          });
        } // Volume


        this.bind(elements.inputs.volume, inputEvent, function (event) {
          player.volume = event.target.value;
        }, 'volume'); // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)

        this.bind(elements.controls, 'mouseenter mouseleave', function (event) {
          elements.controls.hover = !player.touch && event.type === 'mouseenter';
        }); // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)

        this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', function (event) {
          elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
        }); // Show controls when they receive focus (e.g., when using keyboard tab key)

        this.bind(elements.controls, 'focusin', function () {
          var config = player.config,
              elements = player.elements,
              timers = player.timers; // Skip transition to prevent focus from scrolling the parent element

          toggleClass(elements.controls, config.classNames.noTransition, true); // Toggle

          ui.toggleControls.call(player, true); // Restore transition

          setTimeout(function () {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0); // Delay a little more for mouse users

          var delay = _this2.touch ? 3000 : 4000; // Clear timer

          clearTimeout(timers.controls); // Hide again after delay

          timers.controls = setTimeout(function () {
            return ui.toggleControls.call(player, false);
          }, delay);
        }); // Mouse wheel for volume

        this.bind(elements.inputs.volume, 'wheel', function (event) {
          // Detect "natural" scroll - suppored on OS X Safari only
          // Other browsers on OS X will be inverted until support improves
          var inverted = event.webkitDirectionInvertedFromDevice; // Get delta from event. Invert if `inverted` is true

          var _map = [event.deltaX, -event.deltaY].map(function (value) {
            return inverted ? -value : value;
          }),
              _map2 = _slicedToArray(_map, 2),
              x = _map2[0],
              y = _map2[1]; // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)


          var direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y); // Change the volume by 2%

          player.increaseVolume(direction / 50); // Don't break page scrolling at max and min

          var volume = player.media.volume;

          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        }, 'volume', false);
      }
    }]);

    return Listeners;
  }();

  var dP$3 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME$1 = 'name';

  // 19.2.4.2 name
  NAME$1 in FProto || _descriptors && dP$3(FProto, NAME$1, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match) {
    // 21.1.3.11 String.prototype.match(regexp)
    return [function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });

  var loadjs_umd = createCommonjsModule(function (module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  }(commonjsGlobal, function() {
  /**
   * Global dependencies.
   * @global {Object} document - DOM
   */

  var devnull = function() {},
      bundleIdCache = {},
      bundleResultCache = {},
      bundleCallbackQueue = {};


  /**
   * Subscribe to bundle load event.
   * @param {string[]} bundleIds - Bundle ids
   * @param {Function} callbackFn - The callback function
   */
  function subscribe(bundleIds, callbackFn) {
    // listify
    bundleIds = bundleIds.push ? bundleIds : [bundleIds];

    var depsNotFound = [],
        i = bundleIds.length,
        numWaiting = i,
        fn,
        bundleId,
        r,
        q;

    // define callback function
    fn = function (bundleId, pathsNotFound) {
      if (pathsNotFound.length) depsNotFound.push(bundleId);

      numWaiting--;
      if (!numWaiting) callbackFn(depsNotFound);
    };

    // register callback
    while (i--) {
      bundleId = bundleIds[i];

      // execute callback if in result cache
      r = bundleResultCache[bundleId];
      if (r) {
        fn(bundleId, r);
        continue;
      }

      // add to callback queue
      q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
      q.push(fn);
    }
  }


  /**
   * Publish bundle load event.
   * @param {string} bundleId - Bundle id
   * @param {string[]} pathsNotFound - List of files not found
   */
  function publish(bundleId, pathsNotFound) {
    // exit if id isn't defined
    if (!bundleId) return;

    var q = bundleCallbackQueue[bundleId];

    // cache result
    bundleResultCache[bundleId] = pathsNotFound;

    // exit if queue is empty
    if (!q) return;

    // empty callback queue
    while (q.length) {
      q[0](bundleId, pathsNotFound);
      q.splice(0, 1);
    }
  }


  /**
   * Execute callbacks.
   * @param {Object or Function} args - The callback args
   * @param {string[]} depsNotFound - List of dependencies not found
   */
  function executeCallbacks(args, depsNotFound) {
    // accept function as argument
    if (args.call) args = {success: args};

    // success and error callbacks
    if (depsNotFound.length) (args.error || devnull)(depsNotFound);
    else (args.success || devnull)(args);
  }


  /**
   * Load individual file.
   * @param {string} path - The file path
   * @param {Function} callbackFn - The callback function
   */
  function loadFile(path, callbackFn, args, numTries) {
    var doc = document,
        async = args.async,
        maxTries = (args.numRetries || 0) + 1,
        beforeCallbackFn = args.before || devnull,
        pathStripped = path.replace(/^(css|img)!/, ''),
        isCss,
        e;

    numTries = numTries || 0;

    if (/(^css!|\.css$)/.test(path)) {
      isCss = true;

      // css
      e = doc.createElement('link');
      e.rel = 'stylesheet';
      e.href = pathStripped; //.replace(/^css!/, '');  // remove "css!" prefix
    } else if (/(^img!|\.(png|gif|jpg|svg)$)/.test(path)) {
      // image
      e = doc.createElement('img');
      e.src = pathStripped;    
    } else {
      // javascript
      e = doc.createElement('script');
      e.src = path;
      e.async = async === undefined ? true : async;
    }

    e.onload = e.onerror = e.onbeforeload = function (ev) {
      var result = ev.type[0];

      // Note: The following code isolates IE using `hideFocus` and treats empty
      // stylesheets as failures to get around lack of onerror support
      if (isCss && 'hideFocus' in e) {
        try {
          if (!e.sheet.cssText.length) result = 'e';
        } catch (x) {
          // sheets objects created from load errors don't allow access to
          // `cssText`
          result = 'e';
        }
      }

      // handle retries in case of load failure
      if (result == 'e') {
        // increment counter
        numTries += 1;

        // exit function and try again
        if (numTries < maxTries) {
          return loadFile(path, callbackFn, args, numTries);
        }
      }

      // execute callback
      callbackFn(path, result, ev.defaultPrevented);
    };

    // add to document (unless callback returns `false`)
    if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
  }


  /**
   * Load multiple files.
   * @param {string[]} paths - The file paths
   * @param {Function} callbackFn - The callback function
   */
  function loadFiles(paths, callbackFn, args) {
    // listify paths
    paths = paths.push ? paths : [paths];

    var numWaiting = paths.length,
        x = numWaiting,
        pathsNotFound = [],
        fn,
        i;

    // define callback function
    fn = function(path, result, defaultPrevented) {
      // handle error
      if (result == 'e') pathsNotFound.push(path);

      // handle beforeload event. If defaultPrevented then that means the load
      // will be blocked (ex. Ghostery/ABP on Safari)
      if (result == 'b') {
        if (defaultPrevented) pathsNotFound.push(path);
        else return;
      }

      numWaiting--;
      if (!numWaiting) callbackFn(pathsNotFound);
    };

    // load scripts
    for (i=0; i < x; i++) loadFile(paths[i], fn, args);
  }


  /**
   * Initiate script load and register bundle.
   * @param {(string|string[])} paths - The file paths
   * @param {(string|Function)} [arg1] - The bundleId or success callback
   * @param {Function} [arg2] - The success or error callback
   * @param {Function} [arg3] - The error callback
   */
  function loadjs(paths, arg1, arg2) {
    var bundleId,
        args;

    // bundleId (if string)
    if (arg1 && arg1.trim) bundleId = arg1;

    // args (default is {})
    args = (bundleId ? arg2 : arg1) || {};

    // throw error if bundle is already defined
    if (bundleId) {
      if (bundleId in bundleIdCache) {
        throw "LoadJS";
      } else {
        bundleIdCache[bundleId] = true;
      }
    }

    // load scripts
    loadFiles(paths, function (pathsNotFound) {
      // execute callbacks
      executeCallbacks(args, pathsNotFound);

      // publish bundle load event
      publish(bundleId, pathsNotFound);
    }, args);
  }


  /**
   * Execute callbacks when dependencies have been satisfied.
   * @param {(string|string[])} deps - List of bundle ids
   * @param {Object} args - success/error arguments
   */
  loadjs.ready = function ready(deps, args) {
    // subscribe to bundle load event
    subscribe(deps, function (depsNotFound) {
      // execute callbacks
      executeCallbacks(args, depsNotFound);
    });

    return loadjs;
  };


  /**
   * Manually satisfy bundle dependencies.
   * @param {string} bundleId - The bundle id
   */
  loadjs.done = function done(bundleId) {
    publish(bundleId, []);
  };


  /**
   * Reset loadjs dependencies statuses
   */
  loadjs.reset = function reset() {
    bundleIdCache = {};
    bundleResultCache = {};
    bundleCallbackQueue = {};
  };


  /**
   * Determine if bundle has already been defined
   * @param String} bundleId - The bundle id
   */
  loadjs.isDefined = function isDefined(bundleId) {
    return bundleId in bundleIdCache;
  };


  // export
  return loadjs;

  }));
  });

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      loadjs_umd(url, {
        success: resolve,
        error: reject
      });
    });
  }

  function parseId(url) {
    if (is$1.empty(url)) {
      return null;
    }

    if (is$1.number(Number(url))) {
      return url;
    }

    var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Get aspect ratio for dimensions


  function getAspectRatio(width, height) {
    var getRatio = function getRatio(w, h) {
      return h === 0 ? w : getRatio(h, w % h);
    };

    var ratio = getRatio(width, height);
    return "".concat(width / ratio, ":").concat(height / ratio);
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  var vimeo = {
    setup: function setup() {
      var _this = this;

      // Add embed class for responsive
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Set intial ratio

      vimeo.setAspectRatio.call(this); // Load the API if not already

      if (!is$1.object(window.Vimeo)) {
        loadScript(this.config.urls.vimeo.sdk).then(function () {
          vimeo.ready.call(_this);
        }).catch(function (error) {
          _this.debug.warn('Vimeo API failed to load', error);
        });
      } else {
        vimeo.ready.call(this);
      }
    },
    // Set aspect ratio
    // For Vimeo we have an extra 300% height <div> to hide the standard controls and UI
    setAspectRatio: function setAspectRatio(input) {
      var _split$map = (is$1.string(input) ? input : this.config.ratio).split(':').map(Number),
          _split$map2 = _slicedToArray(_split$map, 2),
          x = _split$map2[0],
          y = _split$map2[1];

      var padding = 100 / x * y;
      vimeo.padding = padding;
      this.elements.wrapper.style.paddingBottom = "".concat(padding, "%");

      if (this.supported.ui) {
        var height = 240;
        var offset = (height - padding) / (height / 50);
        this.media.style.transform = "translateY(-".concat(offset, "%)");
      }
    },
    // API Ready
    ready: function ready$$1() {
      var _this2 = this;

      var player = this; // Get Vimeo params for the iframe

      var options = {
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        // muted: player.muted,
        byline: false,
        portrait: false,
        title: false,
        speed: true,
        transparent: 0,
        gesture: 'media',
        playsinline: !this.config.fullscreen.iosNative
      };
      var params = buildUrlParams(options); // Get the source URL or ID

      var source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is$1.empty(source)) {
        source = player.media.getAttribute(player.config.attributes.embed.id);
      }

      var id = parseId(source); // Build an iframe

      var iframe = createElement('iframe');
      var src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute('src', src);
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allowtransparency', '');
      iframe.setAttribute('allow', 'autoplay'); // Get poster, if already set

      var poster = player.poster; // Inject the package

      var wrapper = createElement('div', {
        poster: poster,
        class: player.config.classNames.embedContainer
      });
      wrapper.appendChild(iframe);
      player.media = replaceElement(wrapper, player.media); // Get poster image

      fetch(format(player.config.urls.vimeo.api, id), 'json').then(function (response) {
        if (is$1.empty(response)) {
          return;
        } // Get the URL for thumbnail


        var url = new URL(response[0].thumbnail_large); // Get original image

        url.pathname = "".concat(url.pathname.split('_')[0], ".jpg"); // Set and show poster

        ui.setPoster.call(player, url.href).catch(function () {});
      }); // Setup instance
      // https://github.com/vimeo/player.js

      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0; // Disable native text track rendering

      if (player.supported.ui) {
        player.embed.disableTextTrack();
      } // Create a faux HTML5 API using the Vimeo API


      player.media.play = function () {
        assurePlaybackState.call(player, true);
        return player.embed.play();
      };

      player.media.pause = function () {
        assurePlaybackState.call(player, false);
        return player.embed.pause();
      };

      player.media.stop = function () {
        player.pause();
        player.currentTime = 0;
      }; // Seeking


      var currentTime = player.media.currentTime;
      Object.defineProperty(player.media, 'currentTime', {
        get: function get() {
          return currentTime;
        },
        set: function set(time) {
          // Vimeo will automatically play on seek if the video hasn't been played before
          // Get current paused state and volume etc
          var embed = player.embed,
              media = player.media,
              paused = player.paused,
              volume = player.volume;
          var restorePause = paused && !embed.hasPlayed; // Set seeking state and trigger event

          media.seeking = true;
          triggerEvent.call(player, media, 'seeking'); // If paused, mute until seek is complete

          Promise.resolve(restorePause && embed.setVolume(0)) // Seek
          .then(function () {
            return embed.setCurrentTime(time);
          }) // Restore paused
          .then(function () {
            return restorePause && embed.pause();
          }) // Restore volume
          .then(function () {
            return restorePause && embed.setVolume(volume);
          }).catch(function () {// Do nothing
          });
        }
      }); // Playback speed

      var speed = player.config.speed.selected;
      Object.defineProperty(player.media, 'playbackRate', {
        get: function get() {
          return speed;
        },
        set: function set(input) {
          player.embed.setPlaybackRate(input).then(function () {
            speed = input;
            triggerEvent.call(player, player.media, 'ratechange');
          }).catch(function (error) {
            // Hide menu item (and menu if empty)
            if (error.name === 'Error') {
              controls.setSpeedMenu.call(player, []);
            }
          });
        }
      }); // Volume

      var volume = player.config.volume;
      Object.defineProperty(player.media, 'volume', {
        get: function get() {
          return volume;
        },
        set: function set(input) {
          player.embed.setVolume(input).then(function () {
            volume = input;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }
      }); // Muted

      var muted = player.config.muted;
      Object.defineProperty(player.media, 'muted', {
        get: function get() {
          return muted;
        },
        set: function set(input) {
          var toggle = is$1.boolean(input) ? input : false;
          player.embed.setVolume(toggle ? 0 : player.config.volume).then(function () {
            muted = toggle;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }
      }); // Loop

      var loop = player.config.loop;
      Object.defineProperty(player.media, 'loop', {
        get: function get() {
          return loop;
        },
        set: function set(input) {
          var toggle = is$1.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(function () {
            loop = toggle;
          });
        }
      }); // Source

      var currentSrc;
      player.embed.getVideoUrl().then(function (value) {
        currentSrc = value;
        controls.setDownloadLink.call(player);
      }).catch(function (error) {
        _this2.debug.warn(error);
      });
      Object.defineProperty(player.media, 'currentSrc', {
        get: function get() {
          return currentSrc;
        }
      }); // Ended

      Object.defineProperty(player.media, 'ended', {
        get: function get() {
          return player.currentTime === player.duration;
        }
      }); // Set aspect ratio based on video size

      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(function (dimensions) {
        vimeo.ratio = getAspectRatio(dimensions[0], dimensions[1]);
        vimeo.setAspectRatio.call(_this2, vimeo.ratio);
      }); // Set autopause

      player.embed.setAutopause(player.config.autopause).then(function (state) {
        player.config.autopause = state;
      }); // Get title

      player.embed.getVideoTitle().then(function (title) {
        player.config.title = title;
        ui.setTitle.call(_this2);
      }); // Get current time

      player.embed.getCurrentTime().then(function (value) {
        currentTime = value;
        triggerEvent.call(player, player.media, 'timeupdate');
      }); // Get duration

      player.embed.getDuration().then(function (value) {
        player.media.duration = value;
        triggerEvent.call(player, player.media, 'durationchange');
      }); // Get captions

      player.embed.getTextTracks().then(function (tracks) {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on('cuechange', function (_ref) {
        var _ref$cues = _ref.cues,
            cues = _ref$cues === void 0 ? [] : _ref$cues;
        var strippedCues = cues.map(function (cue) {
          return stripHTML(cue.text);
        });
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on('loaded', function () {
        // Assure state and events are updated on autoplay
        player.embed.getPaused().then(function (paused) {
          assurePlaybackState.call(player, !paused);

          if (!paused) {
            triggerEvent.call(player, player.media, 'playing');
          }
        });

        if (is$1.element(player.embed.element) && player.supported.ui) {
          var frame = player.embed.element; // Fix keyboard focus issues
          // https://github.com/sampotts/plyr/issues/317

          frame.setAttribute('tabindex', -1);
        }
      });
      player.embed.on('play', function () {
        assurePlaybackState.call(player, true);
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('pause', function () {
        assurePlaybackState.call(player, false);
      });
      player.embed.on('timeupdate', function (data) {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, 'timeupdate');
      });
      player.embed.on('progress', function (data) {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, 'progress'); // Check all loaded

        if (parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, 'canplaythrough');
        } // Get duration as if we do it before load, it gives an incorrect value
        // https://github.com/sampotts/plyr/issues/891


        player.embed.getDuration().then(function (value) {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, 'durationchange');
          }
        });
      });
      player.embed.on('seeked', function () {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, 'seeked');
      });
      player.embed.on('ended', function () {
        player.media.paused = true;
        triggerEvent.call(player, player.media, 'ended');
      });
      player.embed.on('error', function (detail) {
        player.media.error = detail;
        triggerEvent.call(player, player.media, 'error');
      }); // Set height/width on fullscreen

      player.on('enterfullscreen exitfullscreen', function (event) {
        var target = player.fullscreen.target; // Ignore for iOS native

        if (target !== player.elements.container) {
          return;
        }

        var toggle = event.type === 'enterfullscreen';

        var _vimeo$ratio$split$ma = vimeo.ratio.split(':').map(Number),
            _vimeo$ratio$split$ma2 = _slicedToArray(_vimeo$ratio$split$ma, 2),
            x = _vimeo$ratio$split$ma2[0],
            y = _vimeo$ratio$split$ma2[1];

        var dimension = x > y ? 'width' : 'height';
        target.style[dimension] = toggle ? "".concat(vimeo.padding, "%") : null;
      }); // Rebuild UI

      setTimeout(function () {
        return ui.build.call(player);
      }, 0);
    }
  };

  function parseId$1(url) {
    if (is$1.empty(url)) {
      return null;
    }

    var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState$1(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  var youtube = {
    setup: function setup() {
      var _this = this;

      // Add embed class for responsive
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Set aspect ratio

      youtube.setAspectRatio.call(this); // Setup API

      if (is$1.object(window.YT) && is$1.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        // Load the API
        loadScript(this.config.urls.youtube.sdk).catch(function (error) {
          _this.debug.warn('YouTube API failed to load', error);
        }); // Setup callback for the API
        // YouTube has it's own system of course...

        window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || []; // Add to queue

        window.onYouTubeReadyCallbacks.push(function () {
          youtube.ready.call(_this);
        }); // Set callback to process queue

        window.onYouTubeIframeAPIReady = function () {
          window.onYouTubeReadyCallbacks.forEach(function (callback) {
            callback();
          });
        };
      }
    },
    // Get the media title
    getTitle: function getTitle(videoId) {
      var _this2 = this;

      // Try via undocumented API method first
      // This method disappears now and then though...
      // https://github.com/sampotts/plyr/issues/709
      if (is$1.function(this.embed.getVideoData)) {
        var _this$embed$getVideoD = this.embed.getVideoData(),
            title = _this$embed$getVideoD.title;

        if (is$1.empty(title)) {
          this.config.title = title;
          ui.setTitle.call(this);
          return;
        }
      } // Or via Google API


      var key = this.config.keys.google;

      if (is$1.string(key) && !is$1.empty(key)) {
        var url = format(this.config.urls.youtube.api, videoId, key);
        fetch(url).then(function (result) {
          if (is$1.object(result)) {
            _this2.config.title = result.items[0].snippet.title;
            ui.setTitle.call(_this2);
          }
        }).catch(function () {});
      }
    },
    // Set aspect ratio
    setAspectRatio: function setAspectRatio() {
      var ratio = this.config.ratio.split(':');
      this.elements.wrapper.style.paddingBottom = "".concat(100 / ratio[0] * ratio[1], "%");
    },
    // API ready
    ready: function ready$$1() {
      var player = this; // Ignore already setup (race condition)

      var currentId = player.media.getAttribute('id');

      if (!is$1.empty(currentId) && currentId.startsWith('youtube-')) {
        return;
      } // Get the source URL or ID


      var source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is$1.empty(source)) {
        source = player.media.getAttribute(this.config.attributes.embed.id);
      } // Replace the <iframe> with a <div> due to YouTube API issues


      var videoId = parseId$1(source);
      var id = generateId(player.provider); // Get poster, if already set

      var poster = player.poster; // Replace media element

      var container = createElement('div', {
        id: id,
        poster: poster
      });
      player.media = replaceElement(container, player.media); // Id to poster wrapper

      var posterSrc = function posterSrc(format$$1) {
        return "https://img.youtube.com/vi/".concat(videoId, "/").concat(format$$1, "default.jpg");
      }; // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)


      loadImage(posterSrc('maxres'), 121) // Higest quality and unpadded
      .catch(function () {
        return loadImage(posterSrc('sd'), 121);
      }) // 480p padded 4:3
      .catch(function () {
        return loadImage(posterSrc('hq'));
      }) // 360p padded 4:3. Always exists
      .then(function (image) {
        return ui.setPoster.call(player, image.src);
      }).then(function (posterSrc) {
        // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
        if (!posterSrc.includes('maxres')) {
          player.elements.poster.style.backgroundSize = 'cover';
        }
      }).catch(function () {}); // Setup instance
      // https://developers.google.com/youtube/iframe_api_reference

      player.embed = new window.YT.Player(id, {
        videoId: videoId,
        playerVars: {
          autoplay: player.config.autoplay ? 1 : 0,
          // Autoplay
          hl: player.config.hl,
          // iframe interface language
          controls: player.supported.ui ? 0 : 1,
          // Only show controls if not fully supported
          rel: 0,
          // No related vids
          showinfo: 0,
          // Hide info
          iv_load_policy: 3,
          // Hide annotations
          modestbranding: 1,
          // Hide logos as much as possible (they still show one in the corner when paused)
          disablekb: 1,
          // Disable keyboard as we handle it
          playsinline: 1,
          // Allow iOS inline playback
          // Tracking for stats
          // origin: window ? `${window.location.protocol}//${window.location.host}` : null,
          widget_referrer: window ? window.location.href : null,
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language
        },
        events: {
          onError: function onError(event) {
            // YouTube may fire onError twice, so only handle it once
            if (!player.media.error) {
              var code = event.data; // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError

              var message = {
                2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                101: 'The owner of the requested video does not allow it to be played in embedded players.',
                150: 'The owner of the requested video does not allow it to be played in embedded players.'
              }[code] || 'An unknown error occured';
              player.media.error = {
                code: code,
                message: message
              };
              triggerEvent.call(player, player.media, 'error');
            }
          },
          onPlaybackRateChange: function onPlaybackRateChange(event) {
            // Get the instance
            var instance = event.target; // Get current speed

            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, 'ratechange');
          },
          onReady: function onReady(event) {
            // Bail if onReady has already been called. See issue #1108
            if (is$1.function(player.media.play)) {
              return;
            } // Get the instance


            var instance = event.target; // Get the title

            youtube.getTitle.call(player, videoId); // Create a faux HTML5 API using the YouTube API

            player.media.play = function () {
              assurePlaybackState$1.call(player, true);
              instance.playVideo();
            };

            player.media.pause = function () {
              assurePlaybackState$1.call(player, false);
              instance.pauseVideo();
            };

            player.media.stop = function () {
              instance.stopVideo();
            };

            player.media.duration = instance.getDuration();
            player.media.paused = true; // Seeking

            player.media.currentTime = 0;
            Object.defineProperty(player.media, 'currentTime', {
              get: function get() {
                return Number(instance.getCurrentTime());
              },
              set: function set(time) {
                // If paused and never played, mute audio preventively (YouTube starts playing on seek if the video hasn't been played yet).
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                } // Set seeking state and trigger event


                player.media.seeking = true;
                triggerEvent.call(player, player.media, 'seeking'); // Seek after events sent

                instance.seekTo(time);
              }
            }); // Playback speed

            Object.defineProperty(player.media, 'playbackRate', {
              get: function get() {
                return instance.getPlaybackRate();
              },
              set: function set(input) {
                instance.setPlaybackRate(input);
              }
            }); // Volume

            var volume = player.config.volume;
            Object.defineProperty(player.media, 'volume', {
              get: function get() {
                return volume;
              },
              set: function set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }
            }); // Muted

            var muted = player.config.muted;
            Object.defineProperty(player.media, 'muted', {
              get: function get() {
                return muted;
              },
              set: function set(input) {
                var toggle = is$1.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? 'mute' : 'unMute']();
                triggerEvent.call(player, player.media, 'volumechange');
              }
            }); // Source

            Object.defineProperty(player.media, 'currentSrc', {
              get: function get() {
                return instance.getVideoUrl();
              }
            }); // Ended

            Object.defineProperty(player.media, 'ended', {
              get: function get() {
                return player.currentTime === player.duration;
              }
            }); // Get available speeds

            player.options.speed = instance.getAvailablePlaybackRates(); // Set the tabindex to avoid focus entering iframe

            if (player.supported.ui) {
              player.media.setAttribute('tabindex', -1);
            }

            triggerEvent.call(player, player.media, 'timeupdate');
            triggerEvent.call(player, player.media, 'durationchange'); // Reset timer

            clearInterval(player.timers.buffering); // Setup buffering

            player.timers.buffering = setInterval(function () {
              // Get loaded % from YouTube
              player.media.buffered = instance.getVideoLoadedFraction(); // Trigger progress only when we actually buffer something

              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent.call(player, player.media, 'progress');
              } // Set last buffer point


              player.media.lastBuffered = player.media.buffered; // Bail if we're at 100%

              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering); // Trigger event

                triggerEvent.call(player, player.media, 'canplaythrough');
              }
            }, 200); // Rebuild UI

            setTimeout(function () {
              return ui.build.call(player);
            }, 50);
          },
          onStateChange: function onStateChange(event) {
            // Get the instance
            var instance = event.target; // Reset timer

            clearInterval(player.timers.playing);
            var seeked = player.media.seeking && [1, 2].includes(event.data);

            if (seeked) {
              // Unset seeking and fire seeked event
              player.media.seeking = false;
              triggerEvent.call(player, player.media, 'seeked');
            } // Handle events
            // -1   Unstarted
            // 0    Ended
            // 1    Playing
            // 2    Paused
            // 3    Buffering
            // 5    Video cued


            switch (event.data) {
              case -1:
                // Update scrubber
                triggerEvent.call(player, player.media, 'timeupdate'); // Get loaded % from YouTube

                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent.call(player, player.media, 'progress');
                break;

              case 0:
                assurePlaybackState$1.call(player, false); // YouTube doesn't support loop for a single video, so mimick it.

                if (player.media.loop) {
                  // YouTube needs a call to `stopVideo` before playing again
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent.call(player, player.media, 'ended');
                }

                break;

              case 1:
                // Restore paused state (YouTube starts playing on seek if the video hasn't been played yet)
                if (player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState$1.call(player, true);
                  triggerEvent.call(player, player.media, 'playing'); // Poll to get playback progress

                  player.timers.playing = setInterval(function () {
                    triggerEvent.call(player, player.media, 'timeupdate');
                  }, 50); // Check duration again due to YouTube bug
                  // https://github.com/sampotts/plyr/issues/374
                  // https://code.google.com/p/gdata-issues/issues/detail?id=8690

                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent.call(player, player.media, 'durationchange');
                  }
                }

                break;

              case 2:
                // Restore audio (YouTube starts playing on seek if the video hasn't been played yet)
                if (!player.muted) {
                  player.embed.unMute();
                }

                assurePlaybackState$1.call(player, false);
                break;

              default:
                break;
            }

            triggerEvent.call(player, player.elements.container, 'statechange', false, {
              code: event.data
            });
          }
        }
      });
    }
  };

  var media = {
    // Setup media
    setup: function setup() {
      // If there's no media, bail
      if (!this.media) {
        this.debug.warn('No media element found!');
        return;
      } // Add type class


      toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true); // Add provider class

      toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true); // Add video class for embeds
      // This will require changes if audio embeds are added

      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
      } // Inject the player wrapper


      if (this.isVideo) {
        // Create the wrapper div
        this.elements.wrapper = createElement('div', {
          class: this.config.classNames.video
        }); // Wrap the video in a container

        wrap(this.media, this.elements.wrapper); // Faux poster container

        this.elements.poster = createElement('div', {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }

      if (this.isHTML5) {
        html5.extend.call(this);
      } else if (this.isYouTube) {
        youtube.setup.call(this);
      } else if (this.isVimeo) {
        vimeo.setup.call(this);
      }
    }
  };

  var Ads =
  /*#__PURE__*/
  function () {
    /**
     * Ads constructor.
     * @param {object} player
     * @return {Ads}
     */
    function Ads(player) {
      var _this = this;

      _classCallCheck(this, Ads);

      this.player = player;
      this.publisherId = player.config.ads.publisherId;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null; // Setup a promise to resolve when the IMA manager is ready

      this.managerPromise = new Promise(function (resolve, reject) {
        // The ad is loaded and ready
        _this.on('loaded', resolve); // Ads failed


        _this.on('error', reject);
      });
      this.load();
    }

    _createClass(Ads, [{
      key: "load",

      /**
       * Load the IMA SDK
       */
      value: function load() {
        var _this2 = this;

        if (this.enabled) {
          // Check if the Google IMA3 SDK is loaded or load it ourselves
          if (!is$1.object(window.google) || !is$1.object(window.google.ima)) {
            loadScript(this.player.config.urls.googleIMA.sdk).then(function () {
              _this2.ready();
            }).catch(function () {
              // Script failed to load or is blocked
              _this2.trigger('error', new Error('Google IMA SDK failed to load'));
            });
          } else {
            this.ready();
          }
        }
      }
      /**
       * Get the ads instance ready
       */

    }, {
      key: "ready",
      value: function ready$$1() {
        var _this3 = this;

        // Start ticking our safety timer. If the whole advertisement
        // thing doesn't resolve within our set time; we bail
        this.startSafetyTimer(12000, 'ready()'); // Clear the safety timer

        this.managerPromise.then(function () {
          _this3.clearSafetyTimer('onAdsManagerLoaded()');
        }); // Set listeners on the Plyr instance

        this.listeners(); // Setup the IMA SDK

        this.setupIMA();
      } // Build the default tag URL

    }, {
      key: "setupIMA",

      /**
       * In order for the SDK to display ads for our video, we need to tell it where to put them,
       * so here we define our ad container. This div is set up to render on top of the video player.
       * Using the code below, we tell the SDK to render ads within that div. We also provide a
       * handle to the content video player - the SDK will poll the current time of our player to
       * properly place mid-rolls. After we create the ad display container, we initialize it. On
       * mobile devices, this initialization is done as the result of a user action.
       */
      value: function setupIMA() {
        // Create the container for our advertisements
        this.elements.container = createElement('div', {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container); // So we can run VPAID2

        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED); // Set language

        google.ima.settings.setLocale(this.player.config.ads.language); // We assume the adContainer is the video container of the plyr element
        // that will house the ads

        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container); // Request video ads to be pre-loaded

        this.requestAds();
      }
      /**
       * Request advertisements
       */

    }, {
      key: "requestAds",
      value: function requestAds() {
        var _this4 = this;

        var container = this.player.elements.container;

        try {
          // Create ads loader
          this.loader = new google.ima.AdsLoader(this.elements.displayContainer); // Listen and respond to ads loaded and error events

          this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (event) {
            return _this4.onAdsManagerLoaded(event);
          }, false);
          this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
            return _this4.onAdError(error);
          }, false); // Request video ads

          var request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl; // Specify the linear and nonlinear slot sizes. This helps the SDK
          // to select the correct creative if multiple are returned

          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight; // We only overlay ads as we only support video.

          request.forceNonLinearFullSlot = false; // Mute based on current state

          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (e) {
          this.onAdError(e);
        }
      }
      /**
       * Update the ad countdown
       * @param {boolean} start
       */

    }, {
      key: "pollCountdown",
      value: function pollCountdown() {
        var _this5 = this;

        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute('data-badge-text');
          return;
        }

        var update = function update() {
          var time = formatTime(Math.max(_this5.manager.getRemainingTime(), 0));
          var label = "".concat(i18n.get('advertisement', _this5.player.config), " - ").concat(time);

          _this5.elements.container.setAttribute('data-badge-text', label);
        };

        this.countdownTimer = setInterval(update, 100);
      }
      /**
       * This method is called whenever the ads are ready inside the AdDisplayContainer
       * @param {Event} adsManagerLoadedEvent
       */

    }, {
      key: "onAdsManagerLoaded",
      value: function onAdsManagerLoaded(event) {
        var _this6 = this;

        // Load could occur after a source change (race condition)
        if (!this.enabled) {
          return;
        } // Get the ads manager


        var settings = new google.ima.AdsRenderingSettings(); // Tell the SDK to save and restore content video state on our behalf

        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true; // The SDK is polling currentTime on the contentPlayback. And needs a duration
        // so it can determine when to start the mid- and post-roll

        this.manager = event.getAdsManager(this.player, settings); // Get the cue points for any mid-rolls by filtering out the pre- and post-roll

        this.cuePoints = this.manager.getCuePoints(); // Add advertisement cue's within the time line if available

        if (!is$1.empty(this.cuePoints)) {
          this.cuePoints.forEach(function (cuePoint) {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < _this6.player.duration) {
              var seekElement = _this6.player.elements.progress;

              if (is$1.element(seekElement)) {
                var cuePercentage = 100 / _this6.player.duration * cuePoint;
                var cue = createElement('span', {
                  class: _this6.player.config.classNames.cues
                });
                cue.style.left = "".concat(cuePercentage.toString(), "%");
                seekElement.appendChild(cue);
              }
            }
          });
        } // Set volume to match player


        this.manager.setVolume(this.player.volume); // Add listeners to the required events
        // Advertisement error events

        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
          return _this6.onAdError(error);
        }); // Advertisement regular events

        Object.keys(google.ima.AdEvent.Type).forEach(function (type) {
          _this6.manager.addEventListener(google.ima.AdEvent.Type[type], function (event) {
            return _this6.onAdEvent(event);
          });
        }); // Resolve our adsManager

        this.trigger('loaded');
      }
      /**
       * This is where all the event handling takes place. Retrieve the ad from the event. Some
       * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
       * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
       * @param {Event} event
       */

    }, {
      key: "onAdEvent",
      value: function onAdEvent(event) {
        var _this7 = this;

        var container = this.player.elements.container; // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
        // don't have ad object associated

        var ad = event.getAd(); // Proxy event

        var dispatchEvent = function dispatchEvent(type) {
          var event = "ads".concat(type.replace(/_/g, '').toLowerCase());
          triggerEvent.call(_this7.player, _this7.player.media, event);
        };

        switch (event.type) {
          case google.ima.AdEvent.Type.LOADED:
            // This is the first event sent for an ad - it is possible to determine whether the
            // ad is a video ad or an overlay
            this.trigger('loaded'); // Bubble event

            dispatchEvent(event.type); // Start countdown

            this.pollCountdown(true);

            if (!ad.isLinear()) {
              // Position AdDisplayContainer correctly for overlay
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            } // console.info('Ad type: ' + event.getAd().getAdPodInfo().getPodIndex());
            // console.info('Ad time: ' + event.getAd().getAdPodInfo().getTimeOffset());


            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            // All ads for the current videos are done. We can now request new advertisements
            // in case the video is re-played
            // Fire event
            dispatchEvent(event.type); // TODO: Example for what happens when a next video in a playlist would be loaded.
            // So here we load a new video when all ads are done.
            // Then we load new ads within a new adsManager. When the video
            // Is started - after - the ads are loaded, then we get ads.
            // You can also easily test cancelling and reloading by running
            // player.ads.cancel() and player.ads.play from the console I guess.
            // this.player.source = {
            //     type: 'video',
            //     title: 'View From A Blue Moon',
            //     sources: [{
            //         src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type:
            // 'video/mp4', }], poster:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg', tracks:
            // [ { kind: 'captions', label: 'English', srclang: 'en', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            // default: true, }, { kind: 'captions', label: 'French', srclang: 'fr', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt', }, ],
            // };
            // TODO: So there is still this thing where a video should only be allowed to start
            // playing when the IMA SDK is ready or has failed

            this.loadAds();
            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            // This event indicates the ad has started - the video player can adjust the UI,
            // for example display a pause button and remaining time. Fired when content should
            // be paused. This usually happens right before an ad is about to cover the content
            dispatchEvent(event.type);
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            // This event indicates the ad has finished - the video player can perform
            // appropriate UI actions, such as removing the timer for remaining time detection.
            // Fired when content should be resumed. This usually happens when an ad finishes
            // or collapses
            dispatchEvent(event.type);
            this.pollCountdown();
            this.resumeContent();
            break;

          case google.ima.AdEvent.Type.STARTED:
          case google.ima.AdEvent.Type.MIDPOINT:
          case google.ima.AdEvent.Type.COMPLETE:
          case google.ima.AdEvent.Type.IMPRESSION:
          case google.ima.AdEvent.Type.CLICK:
            dispatchEvent(event.type);
            break;

          default:
            break;
        }
      }
      /**
       * Any ad error handling comes through here
       * @param {Event} event
       */

    }, {
      key: "onAdError",
      value: function onAdError(event) {
        this.cancel();
        this.player.debug.warn('Ads error', event);
      }
      /**
       * Setup hooks for Plyr and window events. This ensures
       * the mid- and post-roll launch at the correct time. And
       * resize the advertisement when the player resizes
       */

    }, {
      key: "listeners",
      value: function listeners() {
        var _this8 = this;

        var container = this.player.elements.container;
        var time; // Add listeners to the required events

        this.player.on('ended', function () {
          _this8.loader.contentComplete();
        });
        this.player.on('seeking', function () {
          time = _this8.player.currentTime;
          return time;
        });
        this.player.on('seeked', function () {
          var seekedTime = _this8.player.currentTime;

          if (is$1.empty(_this8.cuePoints)) {
            return;
          }

          _this8.cuePoints.forEach(function (cuePoint, index) {
            if (time < cuePoint && cuePoint < seekedTime) {
              _this8.manager.discardAdBreak();

              _this8.cuePoints.splice(index, 1);
            }
          });
        }); // Listen to the resizing of the window. And resize ad accordingly
        // TODO: eventually implement ResizeObserver

        window.addEventListener('resize', function () {
          if (_this8.manager) {
            _this8.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      }
      /**
       * Initialize the adsManager and start playing advertisements
       */

    }, {
      key: "play",
      value: function play() {
        var _this9 = this;

        var container = this.player.elements.container;

        if (!this.managerPromise) {
          this.resumeContent();
        } // Play the requested advertisement whenever the adsManager is ready


        this.managerPromise.then(function () {
          // Initialize the container. Must be done via a user action on mobile devices
          _this9.elements.displayContainer.initialize();

          try {
            if (!_this9.initialized) {
              // Initialize the ads manager. Ad rules playlist will start at this time
              _this9.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL); // Call play to start showing the ad. Single video and overlay ads will
              // start at this time; the call will be ignored for ad rules


              _this9.manager.start();
            }

            _this9.initialized = true;
          } catch (adError) {
            // An error may be thrown if there was a problem with the
            // VAST response
            _this9.onAdError(adError);
          }
        }).catch(function () {});
      }
      /**
       * Resume our video
       */

    }, {
      key: "resumeContent",
      value: function resumeContent() {
        // Hide the advertisement container
        this.elements.container.style.zIndex = ''; // Ad is stopped

        this.playing = false; // Play our video

        if (this.player.currentTime < this.player.duration) {
          this.player.play();
        }
      }
      /**
       * Pause our video
       */

    }, {
      key: "pauseContent",
      value: function pauseContent() {
        // Show the advertisement container
        this.elements.container.style.zIndex = 3; // Ad is playing.

        this.playing = true; // Pause our video.

        this.player.pause();
      }
      /**
       * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
       * allowed to call new ads based on google policies, as they interpret this as an accidental
       * video requests. https://developers.google.com/interactive-
       * media-ads/docs/sdks/android/faq#8
       */

    }, {
      key: "cancel",
      value: function cancel() {
        // Pause our video
        if (this.initialized) {
          this.resumeContent();
        } // Tell our instance that we're done for now


        this.trigger('error'); // Re-create our adsManager

        this.loadAds();
      }
      /**
       * Re-create our adsManager
       */

    }, {
      key: "loadAds",
      value: function loadAds() {
        var _this10 = this;

        // Tell our adsManager to go bye bye
        this.managerPromise.then(function () {
          // Destroy our adsManager
          if (_this10.manager) {
            _this10.manager.destroy();
          } // Re-set our adsManager promises


          _this10.managerPromise = new Promise(function (resolve) {
            _this10.on('loaded', resolve);

            _this10.player.debug.log(_this10.manager);
          }); // Now request some new advertisements

          _this10.requestAds();
        }).catch(function () {});
      }
      /**
       * Handles callbacks after an ad event was invoked
       * @param {string} event - Event type
       */

    }, {
      key: "trigger",
      value: function trigger(event) {
        var _this11 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var handlers = this.events[event];

        if (is$1.array(handlers)) {
          handlers.forEach(function (handler) {
            if (is$1.function(handler)) {
              handler.apply(_this11, args);
            }
          });
        }
      }
      /**
       * Add event listeners
       * @param {string} event - Event type
       * @param {function} callback - Callback for when event occurs
       * @return {Ads}
       */

    }, {
      key: "on",
      value: function on$$1(event, callback) {
        if (!is$1.array(this.events[event])) {
          this.events[event] = [];
        }

        this.events[event].push(callback);
        return this;
      }
      /**
       * Setup a safety timer for when the ad network doesn't respond for whatever reason.
       * The advertisement has 12 seconds to get its things together. We stop this timer when the
       * advertisement is playing, or when a user action is required to start, then we clear the
       * timer on ad ready
       * @param {number} time
       * @param {string} from
       */

    }, {
      key: "startSafetyTimer",
      value: function startSafetyTimer(time, from) {
        var _this12 = this;

        this.player.debug.log("Safety timer invoked from: ".concat(from));
        this.safetyTimer = setTimeout(function () {
          _this12.cancel();

          _this12.clearSafetyTimer('startSafetyTimer()');
        }, time);
      }
      /**
       * Clear our safety timer(s)
       * @param {string} from
       */

    }, {
      key: "clearSafetyTimer",
      value: function clearSafetyTimer(from) {
        if (!is$1.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log("Safety timer cleared from: ".concat(from));
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !is$1.empty(this.publisherId);
      }
    }, {
      key: "tagUrl",
      get: function get() {
        var params = {
          AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
          AV_CHANNELID: '5a0458dc28a06145e4519d21',
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: this.publisherId
        };
        var base = 'https://go.aniview.com/api/adserver6/vast/';
        return "".concat(base, "?").concat(buildUrlParams(params));
      }
    }]);

    return Ads;
  }();

  var source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements: function insertElements(type, attributes) {
      var _this = this;

      if (is$1.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is$1.array(attributes)) {
        attributes.forEach(function (attribute) {
          insertElement(type, _this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change: function change(input) {
      var _this2 = this;

      if (!getDeep(input, 'sources.length')) {
        this.debug.warn('Invalid source format');
        return;
      } // Cancel current network requests


      html5.cancelRequests.call(this); // Destroy instance and re-setup

      this.destroy.call(this, function () {
        // Reset quality options
        _this2.options.quality = []; // Remove elements

        removeElement(_this2.media);
        _this2.media = null; // Reset class name

        if (is$1.element(_this2.elements.container)) {
          _this2.elements.container.removeAttribute('class');
        } // Set the type and provider


        var sources = input.sources,
            type = input.type;

        var _sources = _slicedToArray(sources, 1),
            _sources$ = _sources[0],
            _sources$$provider = _sources$.provider,
            provider = _sources$$provider === void 0 ? providers.html5 : _sources$$provider,
            src = _sources$.src;

        var tagName = provider === 'html5' ? type : 'div';
        var attributes = provider === 'html5' ? {} : {
          src: src
        };
        Object.assign(_this2, {
          provider: provider,
          type: type,
          // Check for support
          supported: support.check(type, provider, _this2.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        }); // Inject the new element

        _this2.elements.container.appendChild(_this2.media); // Autoplay the new source?


        if (is$1.boolean(input.autoplay)) {
          _this2.config.autoplay = input.autoplay;
        } // Set attributes for audio and video


        if (_this2.isHTML5) {
          if (_this2.config.crossorigin) {
            _this2.media.setAttribute('crossorigin', '');
          }

          if (_this2.config.autoplay) {
            _this2.media.setAttribute('autoplay', '');
          }

          if (!is$1.empty(input.poster)) {
            _this2.poster = input.poster;
          }

          if (_this2.config.loop.active) {
            _this2.media.setAttribute('loop', '');
          }

          if (_this2.config.muted) {
            _this2.media.setAttribute('muted', '');
          }

          if (_this2.config.playsinline) {
            _this2.media.setAttribute('playsinline', '');
          }
        } // Restore class hook


        ui.addStyleHook.call(_this2); // Set new sources for html5

        if (_this2.isHTML5) {
          source.insertElements.call(_this2, 'source', sources);
        } // Set video title


        _this2.config.title = input.title; // Set up from scratch

        media.setup.call(_this2); // HTML5 stuff

        if (_this2.isHTML5) {
          // Setup captions
          if (Object.keys(input).includes('tracks')) {
            source.insertElements.call(_this2, 'track', input.tracks);
          }
        } // If HTML5 or embed but not fully supported, setupInterface and call ready now


        if (_this2.isHTML5 || _this2.isEmbed && !_this2.supported.ui) {
          // Setup interface
          ui.build.call(_this2);
        }

        if (_this2.isHTML5) {
          // Load HTML5 sources
          _this2.media.load();
        } // Update the fullscreen support


        _this2.fullscreen.update();
      }, true);
    }
  };

  // TODO: Use a WeakMap for private globals
  // const globals = new WeakMap();
  // Plyr instance

  var Plyr =
  /*#__PURE__*/
  function () {
    function Plyr(target, options) {
      var _this = this;

      _classCallCheck(this, Plyr);

      this.timers = {}; // State

      this.ready = false;
      this.loading = false;
      this.failed = false; // Touch device

      this.touch = support.touch; // Set the media element

      this.media = target; // String selector passed

      if (is$1.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      } // jQuery, NodeList or Array passed, use first element


      if (window.jQuery && this.media instanceof jQuery || is$1.nodeList(this.media) || is$1.array(this.media)) {
        // eslint-disable-next-line
        this.media = this.media[0];
      } // Set config


      this.config = extend({}, defaults, Plyr.defaults, options || {}, function () {
        try {
          return JSON.parse(_this.media.getAttribute('data-plyr-config'));
        } catch (e) {
          return {};
        }
      }()); // Elements cache

      this.elements = {
        container: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }; // Captions

      this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }; // Fullscreen

      this.fullscreen = {
        active: false
      }; // Options

      this.options = {
        speed: [],
        quality: []
      }; // Debugging
      // TODO: move to globals

      this.debug = new Console(this.config.debug); // Log config options and support

      this.debug.log('Config', this.config);
      this.debug.log('Support', support); // We need an element to setup

      if (is$1.nullOrUndefined(this.media) || !is$1.element(this.media)) {
        this.debug.error('Setup failed: no suitable element passed');
        return;
      } // Bail if the element is initialized


      if (this.media.plyr) {
        this.debug.warn('Target already setup');
        return;
      } // Bail if not enabled


      if (!this.config.enabled) {
        this.debug.error('Setup failed: disabled by config');
        return;
      } // Bail if disabled or no basic support
      // You may want to disable certain UAs etc


      if (!support.check().api) {
        this.debug.error('Setup failed: no support');
        return;
      } // Cache original element state for .destroy()


      var clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone; // Set media type based on tag or data attribute
      // Supported: video, audio, vimeo, youtube

      var type = this.media.tagName.toLowerCase(); // Embed properties

      var iframe = null;
      var url = null; // Different setup based on type

      switch (type) {
        case 'div':
          // Find the frame
          iframe = this.media.querySelector('iframe'); // <iframe> type

          if (is$1.element(iframe)) {
            // Detect provider
            url = parseUrl(iframe.getAttribute('src'));
            this.provider = getProviderByUrl(url.toString()); // Rework elements

            this.elements.container = this.media;
            this.media = iframe; // Reset classname

            this.elements.container.className = ''; // Get attributes from URL and set config

            if (url.search.length) {
              var truthy = ['1', 'true'];

              if (truthy.includes(url.searchParams.get('autoplay'))) {
                this.config.autoplay = true;
              }

              if (truthy.includes(url.searchParams.get('loop'))) {
                this.config.loop.active = true;
              } // TODO: replace fullscreen.iosNative with this playsinline config option
              // YouTube requires the playsinline in the URL


              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get('playsinline'));
                this.config.hl = url.searchParams.get('hl'); // TODO: Should this be setting language?
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            // <div> with attributes
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider); // Remove attribute

            this.media.removeAttribute(this.config.attributes.embed.provider);
          } // Unsupported or missing provider


          if (is$1.empty(this.provider) || !Object.keys(providers).includes(this.provider)) {
            this.debug.error('Setup failed: Invalid provider');
            return;
          } // Audio will come later for external providers


          this.type = types.video;
          break;

        case 'video':
        case 'audio':
          this.type = type;
          this.provider = providers.html5; // Get config from attributes

          if (this.media.hasAttribute('crossorigin')) {
            this.config.crossorigin = true;
          }

          if (this.media.hasAttribute('autoplay')) {
            this.config.autoplay = true;
          }

          if (this.media.hasAttribute('playsinline') || this.media.hasAttribute('webkit-playsinline')) {
            this.config.playsinline = true;
          }

          if (this.media.hasAttribute('muted')) {
            this.config.muted = true;
          }

          if (this.media.hasAttribute('loop')) {
            this.config.loop.active = true;
          }

          break;

        default:
          this.debug.error('Setup failed: unsupported type');
          return;
      } // Check for support again but with type


      this.supported = support.check(this.type, this.provider, this.config.playsinline); // If no support for even API, bail

      if (!this.supported.api) {
        this.debug.error('Setup failed: no support');
        return;
      }

      this.eventListeners = []; // Create listeners

      this.listeners = new Listeners(this); // Setup local storage for user settings

      this.storage = new Storage(this); // Store reference

      this.media.plyr = this; // Wrap media

      if (!is$1.element(this.elements.container)) {
        this.elements.container = createElement('div');
        wrap(this.media, this.elements.container);
      } // Add style hook


      ui.addStyleHook.call(this); // Setup media

      media.setup.call(this); // Listen for events if debugging

      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(' '), function (event) {
          _this.debug.log("event: ".concat(event.type));
        });
      } // Setup interface
      // If embed but not fully supported, build interface now to avoid flash of controls


      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui.build.call(this);
      } // Container listeners


      this.listeners.container(); // Global listeners

      this.listeners.global(); // Setup fullscreen

      this.fullscreen = new Fullscreen(this); // Setup ads if provided

      if (this.config.ads.enabled) {
        this.ads = new Ads(this);
      } // Autoplay if required


      if (this.config.autoplay) {
        this.play();
      } // Seek time will be recorded (in listeners.js) so we can prevent hiding controls for a few seconds after seek


      this.lastSeekTime = 0;
    } // ---------------------------------------
    // API
    // ---------------------------------------

    /**
     * Types and provider helpers
     */


    _createClass(Plyr, [{
      key: "play",

      /**
       * Play the media, or play the advertisement (if they are not blocked)
       */
      value: function play() {
        if (!is$1.function(this.media.play)) {
          return null;
        } // Return the promise (for HTML5)


        return this.media.play();
      }
      /**
       * Pause the media
       */

    }, {
      key: "pause",
      value: function pause() {
        if (!this.playing || !is$1.function(this.media.pause)) {
          return;
        }

        this.media.pause();
      }
      /**
       * Get playing state
       */

    }, {
      key: "togglePlay",

      /**
       * Toggle playback based on current status
       * @param {boolean} input
       */
      value: function togglePlay(input) {
        // Toggle based on current state if nothing passed
        var toggle = is$1.boolean(input) ? input : !this.playing;

        if (toggle) {
          this.play();
        } else {
          this.pause();
        }
      }
      /**
       * Stop playback
       */

    }, {
      key: "stop",
      value: function stop() {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is$1.function(this.media.stop)) {
          this.media.stop();
        }
      }
      /**
       * Restart playback
       */

    }, {
      key: "restart",
      value: function restart() {
        this.currentTime = 0;
      }
      /**
       * Rewind
       * @param {number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
       */

    }, {
      key: "rewind",
      value: function rewind(seekTime) {
        this.currentTime = this.currentTime - (is$1.number(seekTime) ? seekTime : this.config.seekTime);
      }
      /**
       * Fast forward
       * @param {number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
       */

    }, {
      key: "forward",
      value: function forward(seekTime) {
        this.currentTime = this.currentTime + (is$1.number(seekTime) ? seekTime : this.config.seekTime);
      }
      /**
       * Seek to a time
       * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
       */

    }, {
      key: "increaseVolume",

      /**
       * Increase volume
       * @param {boolean} step - How much to decrease by (between 0 and 1)
       */
      value: function increaseVolume(step) {
        var volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is$1.number(step) ? step : 0);
      }
      /**
       * Decrease volume
       * @param {boolean} step - How much to decrease by (between 0 and 1)
       */

    }, {
      key: "decreaseVolume",
      value: function decreaseVolume(step) {
        this.increaseVolume(-step);
      }
      /**
       * Set muted state
       * @param {boolean} mute
       */

    }, {
      key: "toggleCaptions",

      /**
       * Toggle captions
       * @param {boolean} input - Whether to enable captions
       */
      value: function toggleCaptions(input) {
        captions.toggle.call(this, input, false);
      }
      /**
       * Set the caption track by index
       * @param {number} - Caption index
       */

    }, {
      key: "airplay",

      /**
       * Trigger the airplay dialog
       * TODO: update player with state, support, enabled
       */
      value: function airplay() {
        // Show dialog if supported
        if (support.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      }
      /**
       * Toggle the player controls
       * @param {boolean} [toggle] - Whether to show the controls
       */

    }, {
      key: "toggleControls",
      value: function toggleControls(toggle) {
        // Don't toggle if missing UI support or if it's audio
        if (this.supported.ui && !this.isAudio) {
          // Get state before change
          var isHidden = hasClass(this.elements.container, this.config.classNames.hideControls); // Negate the argument if not undefined since adding the class to hides the controls

          var force = typeof toggle === 'undefined' ? undefined : !toggle; // Apply and get updated state

          var hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force); // Close menu

          if (hiding && this.config.controls.includes('settings') && !is$1.empty(this.config.settings)) {
            controls.toggleMenu.call(this, false);
          } // Trigger event on change


          if (hiding !== isHidden) {
            var eventName = hiding ? 'controlshidden' : 'controlsshown';
            triggerEvent.call(this, this.media, eventName);
          }

          return !hiding;
        }

        return false;
      }
      /**
       * Add event listeners
       * @param {string} event - Event type
       * @param {function} callback - Callback for when event occurs
       */

    }, {
      key: "on",
      value: function on$$1(event, callback) {
        on.call(this, this.elements.container, event, callback);
      }
      /**
       * Add event listeners once
       * @param {string} event - Event type
       * @param {function} callback - Callback for when event occurs
       */

    }, {
      key: "once",
      value: function once$$1(event, callback) {
        once.call(this, this.elements.container, event, callback);
      }
      /**
       * Remove event listeners
       * @param {string} event - Event type
       * @param {function} callback - Callback for when event occurs
       */

    }, {
      key: "off",
      value: function off$$1(event, callback) {
        off(this.elements.container, event, callback);
      }
      /**
       * Destroy an instance
       * Event listeners are removed when elements are removed
       * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
       * @param {function} callback - Callback for when destroy is complete
       * @param {boolean} soft - Whether it's a soft destroy (for source changes etc)
       */

    }, {
      key: "destroy",
      value: function destroy(callback) {
        var _this2 = this;

        var soft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!this.ready) {
          return;
        }

        var done = function done() {
          // Reset overflow (incase destroyed while in fullscreen)
          document.body.style.overflow = ''; // GC for embed

          _this2.embed = null; // If it's a soft destroy, make minimal changes

          if (soft) {
            if (Object.keys(_this2.elements).length) {
              // Remove elements
              removeElement(_this2.elements.buttons.play);
              removeElement(_this2.elements.captions);
              removeElement(_this2.elements.controls);
              removeElement(_this2.elements.wrapper); // Clear for GC

              _this2.elements.buttons.play = null;
              _this2.elements.captions = null;
              _this2.elements.controls = null;
              _this2.elements.wrapper = null;
            } // Callback


            if (is$1.function(callback)) {
              callback();
            }
          } else {
            // Unbind listeners
            unbindListeners.call(_this2); // Replace the container with the original element provided

            replaceElement(_this2.elements.original, _this2.elements.container); // Event

            triggerEvent.call(_this2, _this2.elements.original, 'destroyed', true); // Callback

            if (is$1.function(callback)) {
              callback.call(_this2.elements.original);
            } // Reset state


            _this2.ready = false; // Clear for garbage collection

            setTimeout(function () {
              _this2.elements = null;
              _this2.media = null;
            }, 200);
          }
        }; // Stop playback


        this.stop(); // Provider specific stuff

        if (this.isHTML5) {
          // Clear timeout
          clearTimeout(this.timers.loading); // Restore native video controls

          ui.toggleNativeControls.call(this, true); // Clean up

          done();
        } else if (this.isYouTube) {
          // Clear timers
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing); // Destroy YouTube API

          if (this.embed !== null && is$1.function(this.embed.destroy)) {
            this.embed.destroy();
          } // Clean up


          done();
        } else if (this.isVimeo) {
          // Destroy Vimeo API
          // then clean up (wait, to prevent postmessage errors)
          if (this.embed !== null) {
            this.embed.unload().then(done);
          } // Vimeo does not always return


          setTimeout(done, 200);
        }
      }
      /**
       * Check for support for a mime type (HTML5 only)
       * @param {string} type - Mime type
       */

    }, {
      key: "supports",
      value: function supports(type) {
        return support.mime.call(this, type);
      }
      /**
       * Check for support
       * @param {string} type - Player type (audio/video)
       * @param {string} provider - Provider (html5/youtube/vimeo)
       * @param {bool} inline - Where player has `playsinline` sttribute
       */

    }, {
      key: "isHTML5",
      get: function get() {
        return Boolean(this.provider === providers.html5);
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return Boolean(this.provider === providers.youtube);
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return Boolean(this.provider === providers.vimeo);
      }
    }, {
      key: "isVideo",
      get: function get() {
        return Boolean(this.type === types.video);
      }
    }, {
      key: "isAudio",
      get: function get() {
        return Boolean(this.type === types.audio);
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      /**
       * Get paused state
       */

    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
      /**
       * Get stopped state
       */

    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && this.currentTime === 0);
      }
      /**
       * Get ended state
       */

    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      set: function set(input) {
        // Bail if media duration isn't available yet
        if (!this.duration) {
          return;
        } // Validate input


        var inputIsValid = is$1.number(input) && input > 0; // Set

        this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0; // Logging

        this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
      }
      /**
       * Get current time
       */
      ,
      get: function get() {
        return Number(this.media.currentTime);
      }
      /**
       * Get buffered
       */

    }, {
      key: "buffered",
      get: function get() {
        var buffered = this.media.buffered; // YouTube / Vimeo return a float between 0-1

        if (is$1.number(buffered)) {
          return buffered;
        } // HTML5
        // TODO: Handle buffered chunks of the media
        // (i.e. seek to another section buffers only that section)


        if (buffered && buffered.length && this.duration > 0) {
          return buffered.end(0) / this.duration;
        }

        return 0;
      }
      /**
       * Get seeking status
       */

    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
      /**
       * Get the duration of the current media
       */

    }, {
      key: "duration",
      get: function get() {
        // Faux duration set via config
        var fauxDuration = parseFloat(this.config.duration); // Media duration can be NaN or Infinity before the media has loaded

        var realDuration = (this.media || {}).duration;
        var duration = !is$1.number(realDuration) || realDuration === Infinity ? 0 : realDuration; // If config duration is funky, use regular duration

        return fauxDuration || duration;
      }
      /**
       * Set the player volume
       * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
       */

    }, {
      key: "volume",
      set: function set(value) {
        var volume = value;
        var max = 1;
        var min = 0;

        if (is$1.string(volume)) {
          volume = Number(volume);
        } // Load volume from storage if no value specified


        if (!is$1.number(volume)) {
          volume = this.storage.get('volume');
        } // Use config if all else fails


        if (!is$1.number(volume)) {
          volume = this.config.volume;
        } // Maximum is volumeMax


        if (volume > max) {
          volume = max;
        } // Minimum is volumeMin


        if (volume < min) {
          volume = min;
        } // Update config


        this.config.volume = volume; // Set the player volume

        this.media.volume = volume; // If muted, and we're increasing volume manually, reset muted state

        if (!is$1.empty(value) && this.muted && volume > 0) {
          this.muted = false;
        }
      }
      /**
       * Get the current player volume
       */
      ,
      get: function get() {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function set(mute) {
        var toggle = mute; // Load muted state from storage

        if (!is$1.boolean(toggle)) {
          toggle = this.storage.get('muted');
        } // Use config if all else fails


        if (!is$1.boolean(toggle)) {
          toggle = this.config.muted;
        } // Update config


        this.config.muted = toggle; // Set mute on the player

        this.media.muted = toggle;
      }
      /**
       * Get current muted state
       */
      ,
      get: function get() {
        return Boolean(this.media.muted);
      }
      /**
       * Check if the media has audio
       */

    }, {
      key: "hasAudio",
      get: function get() {
        // Assume yes for all non HTML5 (as we can't tell...)
        if (!this.isHTML5) {
          return true;
        }

        if (this.isAudio) {
          return true;
        } // Get audio tracks


        return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
      /**
       * Set playback speed
       * @param {number} speed - the speed of playback (0.5-2.0)
       */

    }, {
      key: "speed",
      set: function set(input) {
        var speed = null;

        if (is$1.number(input)) {
          speed = input;
        }

        if (!is$1.number(speed)) {
          speed = this.storage.get('speed');
        }

        if (!is$1.number(speed)) {
          speed = this.config.speed.selected;
        } // Set min/max


        if (speed < 0.1) {
          speed = 0.1;
        }

        if (speed > 2.0) {
          speed = 2.0;
        }

        if (!this.config.speed.options.includes(speed)) {
          this.debug.warn("Unsupported speed (".concat(speed, ")"));
          return;
        } // Update config


        this.config.speed.selected = speed; // Set media speed

        this.media.playbackRate = speed;
      }
      /**
       * Get current playback speed
       */
      ,
      get: function get() {
        return Number(this.media.playbackRate);
      }
      /**
       * Set playback quality
       * Currently HTML5 & YouTube only
       * @param {number} input - Quality level
       */

    }, {
      key: "quality",
      set: function set(input) {
        var config = this.config.quality;
        var options = this.options.quality;

        if (!options.length) {
          return;
        }

        var quality = [!is$1.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is$1.number);
        var updateStorage = true;

        if (!options.includes(quality)) {
          var value = closest(options, quality);
          this.debug.warn("Unsupported quality option: ".concat(quality, ", using ").concat(value, " instead"));
          quality = value; // Don't update storage if quality is not supported

          updateStorage = false;
        } // Update config


        config.selected = quality; // Set quality

        this.media.quality = quality; // Save to storage

        if (updateStorage) {
          this.storage.set({
            quality: quality
          });
        }
      }
      /**
       * Get current quality level
       */
      ,
      get: function get() {
        return this.media.quality;
      }
      /**
       * Toggle loop
       * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
       * @param {boolean} input - Whether to loop or not
       */

    }, {
      key: "loop",
      set: function set(input) {
        var toggle = is$1.boolean(input) ? input : this.config.loop.active;
        this.config.loop.active = toggle;
        this.media.loop = toggle; // Set default to be a true toggle

        /* const type = ['start', 'end', 'all', 'none', 'toggle'].includes(input) ? input : 'toggle';
         switch (type) {
            case 'start':
                if (this.config.loop.end && this.config.loop.end <= this.currentTime) {
                    this.config.loop.end = null;
                }
                this.config.loop.start = this.currentTime;
                // this.config.loop.indicator.start = this.elements.display.played.value;
                break;
             case 'end':
                if (this.config.loop.start >= this.currentTime) {
                    return this;
                }
                this.config.loop.end = this.currentTime;
                // this.config.loop.indicator.end = this.elements.display.played.value;
                break;
             case 'all':
                this.config.loop.start = 0;
                this.config.loop.end = this.duration - 2;
                this.config.loop.indicator.start = 0;
                this.config.loop.indicator.end = 100;
                break;
             case 'toggle':
                if (this.config.loop.active) {
                    this.config.loop.start = 0;
                    this.config.loop.end = null;
                } else {
                    this.config.loop.start = 0;
                    this.config.loop.end = this.duration - 2;
                }
                break;
             default:
                this.config.loop.start = 0;
                this.config.loop.end = null;
                break;
        } */
      }
      /**
       * Get current loop state
       */
      ,
      get: function get() {
        return Boolean(this.media.loop);
      }
      /**
       * Set new media source
       * @param {object} input - The new source object (see docs)
       */

    }, {
      key: "source",
      set: function set(input) {
        source.change.call(this, input);
      }
      /**
       * Get current source
       */
      ,
      get: function get() {
        return this.media.currentSrc;
      }
      /**
       * Get a download URL (either source or custom)
       */

    }, {
      key: "download",
      get: function get() {
        var download = this.config.urls.download;
        return is$1.url(download) ? download : this.source;
      }
      /**
       * Set the poster image for a video
       * @param {input} - the URL for the new poster image
       */

    }, {
      key: "poster",
      set: function set(input) {
        if (!this.isVideo) {
          this.debug.warn('Poster can only be set for video');
          return;
        }

        ui.setPoster.call(this, input, false).catch(function () {});
      }
      /**
       * Get the current poster image
       */
      ,
      get: function get() {
        if (!this.isVideo) {
          return null;
        }

        return this.media.getAttribute('poster');
      }
      /**
       * Set the autoplay state
       * @param {boolean} input - Whether to autoplay or not
       */

    }, {
      key: "autoplay",
      set: function set(input) {
        var toggle = is$1.boolean(input) ? input : this.config.autoplay;
        this.config.autoplay = toggle;
      }
      /**
       * Get the current autoplay state
       */
      ,
      get: function get() {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function set(input) {
        captions.set.call(this, input, false);
      }
      /**
       * Get the current caption track index (-1 if disabled)
       */
      ,
      get: function get() {
        var _this$captions = this.captions,
            toggled = _this$captions.toggled,
            currentTrack = _this$captions.currentTrack;
        return toggled ? currentTrack : -1;
      }
      /**
       * Set the wanted language for captions
       * Since tracks can be added later it won't update the actual caption track until there is a matching track
       * @param {string} - Two character ISO language code (e.g. EN, FR, PT, etc)
       */

    }, {
      key: "language",
      set: function set(input) {
        captions.setLanguage.call(this, input, false);
      }
      /**
       * Get the current track's language
       */
      ,
      get: function get() {
        return (captions.getCurrentTrack.call(this) || {}).language;
      }
      /**
       * Toggle picture-in-picture playback on WebKit/MacOS
       * TODO: update player with state, support, enabled
       * TODO: detect outside changes
       */

    }, {
      key: "pip",
      set: function set(input) {
        // Bail if no support
        if (!support.pip) {
          return;
        } // Toggle based on current state if not passed


        var toggle = is$1.boolean(input) ? input : !this.pip; // Toggle based on current state
        // Safari

        if (is$1.function(this.media.webkitSetPresentationMode)) {
          this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
        } // Chrome


        if (is$1.function(this.media.requestPictureInPicture)) {
          if (!this.pip && toggle) {
            this.media.requestPictureInPicture();
          } else if (this.pip && !toggle) {
            document.exitPictureInPicture();
          }
        }
      }
      /**
       * Get the current picture-in-picture state
       */
      ,
      get: function get() {
        if (!support.pip) {
          return null;
        } // Safari


        if (!is$1.empty(this.media.webkitPresentationMode)) {
          return this.media.webkitPresentationMode === pip.active;
        } // Chrome


        return this.media === document.pictureInPictureElement;
      }
    }], [{
      key: "supported",
      value: function supported(type, provider, inline) {
        return support.check(type, provider, inline);
      }
      /**
       * Load an SVG sprite into the page
       * @param {string} url - URL for the SVG sprite
       * @param {string} [id] - Unique ID
       */

    }, {
      key: "loadSprite",
      value: function loadSprite$$1(url, id) {
        return loadSprite(url, id);
      }
      /**
       * Setup multiple instances
       * @param {*} selector
       * @param {object} options
       */

    }, {
      key: "setup",
      value: function setup(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var targets = null;

        if (is$1.string(selector)) {
          targets = Array.from(document.querySelectorAll(selector));
        } else if (is$1.nodeList(selector)) {
          targets = Array.from(selector);
        } else if (is$1.array(selector)) {
          targets = selector.filter(is$1.element);
        }

        if (is$1.empty(targets)) {
          return null;
        }

        return targets.map(function (t) {
          return new Plyr(t, options);
        });
      }
    }]);

    return Plyr;
  }();

  Plyr.defaults = cloneDeep(defaults);

  // ==========================================================================

  return Plyr;

})));

//# sourceMappingURL=plyr.polyfilled.js.map

;
//# sourceMappingURL=scripts.js.map