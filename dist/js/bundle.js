!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=67)}([function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(2),o=r(40),i=r(5),c=r(41),u=r(48),a=r(77),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(68))},function(t,n,r){var e=r(2),o=r(35).f,i=r(8),c=r(16),u=r(25),a=r(71),f=r(44);t.exports=function(t,n){var r,s,l,p,v,d=t.target,h=t.global,g=t.stat;if(r=h?e:g?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:d+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(6),o=r(9),i=r(17);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(6),o=r(36),i=r(4),c=r(24),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(11),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(13);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(23),o=r(13);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(2),o=r(8),i=r(5),c=r(25),u=r(38),a=r(26),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(73),o=r(2),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){"use strict";var e=r(0);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){"use strict";var e,o,i=r(33),c=r(55),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(e=/a/,o=/b*/g,u.call(e,"a"),u.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,r,e,o,c=this,f=l&&c.sticky,v=i.call(c),d=c.source,h=0,g=t;return f&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),r=new RegExp("^(?:"+d+")",v)),p&&(r=new RegExp("^"+d+"$(?!\\s)",v)),s&&(n=c.lastIndex),e=u.call(f?r:c,g),f?e?(e.input=e.input.slice(h),e[0]=e[0].slice(h),e.index=c.lastIndex,c.lastIndex+=e[0].length):c.lastIndex=0:s&&e&&(c.lastIndex=c.global?e.index+e[0].length:n),p&&e&&e.length>1&&a.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=f},function(t,n){t.exports={}},function(t,n,r){"use strict";var e=r(3),o=r(0),i=r(45),c=r(7),u=r(14),a=r(10),f=r(46),s=r(47),l=r(49),p=r(1),v=r(50),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),x=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!h||!g},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?c:arguments[n],x(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,r){var e=r(0),o=r(12),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(2),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e,o,i,c=r(70),u=r(2),a=r(7),f=r(8),s=r(5),l=r(27),p=r(29),v=u.WeakMap;if(c){var d=new v,h=d.get,g=d.has,x=d.set;e=function(t,n){return x.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var y=l("state");p[y]=!0,e=function(t,n){return f(t,y,n),n},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(40),o=r(41),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(6),o=r(0),i=r(5),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e=r(4);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(3),o=r(20);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){var e=r(6),o=r(69),i=r(17),c=r(15),u=r(24),a=r(5),f=r(36),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(6),o=r(0),i=r(37);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2),o=r(7),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(39),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(2),o=r(25),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(28),o=r(39);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(43),o=r(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(5),o=r(15),i=r(74).indexOf,c=r(29);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(12);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(24),o=r(9),i=r(17);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(7),o=r(45),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(0);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(0),o=r(1),i=r(50),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,i=r(2),c=r(78),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(52),o=r(23),i=r(14),c=r(10),u=r(47),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,g){for(var x,y,m=i(v),S=o(m),b=e(d,h,3),E=c(S.length),w=0,_=g||u,O=n?_(v,E):r?_(v,0):void 0;E>w;w++)if((p||w in S)&&(y=b(x=S[w],w,m),t))if(n)O[w]=y;else if(y)switch(t){case 3:return!0;case 5:return x;case 6:return w;case 2:a.call(O,x)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(32);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(4),o=r(89);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(7),o=r(12),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";var e=r(0);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=e((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=e((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,r){"use strict";r(34);var e=r(16),o=r(0),i=r(1),c=r(20),u=r(8),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var d=i(t),h=!o((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),g=h&&!o((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return n=!0,null},r[d](""),!n}));if(!h||!g||"replace"===t&&(!f||!s||p)||"split"===t&&!v){var x=/./[d],y=r(d,""[t],(function(t,n,r,e,o){return n.exec===c?h&&!o?{done:!0,value:x.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=y[0],S=y[1];e(String.prototype,t,m),e(RegExp.prototype,d,2==n?function(t,n){return S.call(t,this,n)}:function(t){return S.call(t,this)})}l&&u(RegExp.prototype[d],"sham",!0)}},function(t,n,r){"use strict";var e=r(58).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(11),o=r(13),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(12),o=r(20);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";var e=r(56),o=r(54),i=r(4),c=r(13),u=r(93),a=r(57),f=r(10),s=r(59),l=r(20),p=r(0),v=[].push,d=Math.min,h=!p((function(){return!RegExp(4294967295,"y")}));e("split",2,(function(t,n,r){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var e=String(c(this)),i=void 0===r?4294967295:r>>>0;if(0===i)return[];if(void 0===t)return[e];if(!o(t))return n.call(e,t,i);for(var u,a,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=new RegExp(t.source,p+"g");(u=l.call(h,e))&&!((a=h.lastIndex)>d&&(s.push(e.slice(d,u.index)),u.length>1&&u.index<e.length&&v.apply(s,u.slice(1)),f=u[0].length,d=a,s.length>=i));)h.lastIndex===u.index&&h.lastIndex++;return d===e.length?!f&&h.test("")||s.push(""):s.push(e.slice(d)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:n.call(this,t,r)}:n,[function(n,r){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,o){var c=r(e,t,this,o,e!==n);if(c.done)return c.value;var l=i(t),p=String(this),v=u(l,RegExp),g=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),y=new v(h?l:"^(?:"+l.source+")",x),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===s(y,p)?[p]:[];for(var S=0,b=0,E=[];b<p.length;){y.lastIndex=h?b:0;var w,_=s(y,h?p:p.slice(b));if(null===_||(w=d(f(y.lastIndex+(h?0:b)),p.length))===S)b=a(p,b,g);else{if(E.push(p.slice(S,b)),E.length===m)return E;for(var O=1;O<=_.length-1;O++)if(E.push(_[O]),E.length===m)return E;b=S=w}}return E.push(p.slice(S)),E}]}),!h)},function(t,n,r){"use strict";var e=r(3),o=r(62);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){"use strict";var e=r(51).forEach,o=r(19),i=r(31),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){"use strict";var e,o,i,c=r(64),u=r(8),a=r(5),f=r(1),s=r(28),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||u(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(5),o=r(14),i=r(27),c=r(105),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(9).f,o=r(5),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(2),o=r(110),i=r(62),c=r(8);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,r){t.exports=r(112)},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(38),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(5),o=r(72),i=r(35),c=r(9);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(18),o=r(42),i=r(76),c=r(4);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(2);t.exports=e},function(t,n,r){var e=r(15),o=r(10),i=r(75),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(11),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(48);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(18);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(3),o=r(80);e({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},function(t,n,r){"use strict";var e=r(15),o=r(11),i=r(10),c=r(19),u=r(31),a=Math.min,f=[].lastIndexOf,s=!!f&&1/[1].lastIndexOf(1,-0)<0,l=c("lastIndexOf"),p=u("indexOf",{ACCESSORS:!0,1:0}),v=s||!l||!p;t.exports=v?function(t){if(s)return f.apply(this,arguments)||0;var n=e(this),r=i(n.length),c=r-1;for(arguments.length>1&&(c=a(c,o(arguments[1]))),c<0&&(c=r+c);c>=0;c--)if(c in n&&n[c]===t)return c||0;return-1}:f},function(t,n,r){"use strict";var e=r(3),o=r(51).map,i=r(49),c=r(31),u=i("map"),a=c("map");e({target:"Array",proto:!0,forced:!u||!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(3),o=r(32),i=r(14),c=r(0),u=r(19),a=[],f=a.sort,s=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),p=u("sort");e({target:"Array",proto:!0,forced:s||!l||!p},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},function(t,n,r){"use strict";var e=r(3),o=r(11),i=r(84),c=r(85),u=r(0),a=1..toFixed,f=Math.floor,s=function(t,n,r){return 0===n?r:n%2==1?s(t,n-1,r*t):s(t*t,n/2,r)};e({target:"Number",proto:!0,forced:a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){a.call({})}))},{toFixed:function(t){var n,r,e,u,a=i(this),l=o(t),p=[0,0,0,0,0,0],v="",d="0",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*p[r],p[r]=e%1e7,e=f(e/1e7)},g=function(t){for(var n=6,r=0;--n>=0;)r+=p[n],p[n]=f(r/t),r=r%t*1e7},x=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==p[t]){var r=String(p[t]);n=""===n?r:n+c.call("0",7-r.length)+r}return n};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(v="-",a=-a),a>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(a*s(2,69,1))-69)<0?a*s(2,-n,1):a/s(2,n,1),r*=4503599627370496,(n=52-n)>0){for(h(0,r),e=l;e>=7;)h(1e7,0),e-=7;for(h(s(10,e,1),0),e=n-1;e>=23;)g(1<<23),e-=23;g(1<<e),h(1,1),g(2),d=x()}else h(0,r),h(1<<-n,0),d=x()+c.call("0",l);return d=l>0?v+((u=d.length)<=l?"0."+c.call("0",l-u)+d:d.slice(0,u-l)+"."+d.slice(u-l)):v+d}})},function(t,n,r){var e=r(12);t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},function(t,n,r){"use strict";var e=r(11),o=r(13);t.exports="".repeat||function(t){var n=String(o(this)),r="",i=e(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(r+=n);return r}},function(t,n,r){var e=r(3),o=r(6);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(9).f})},function(t,n,r){var e=r(6),o=r(2),i=r(44),c=r(88),u=r(9).f,a=r(42).f,f=r(54),s=r(33),l=r(55),p=r(16),v=r(0),d=r(26).set,h=r(90),g=r(1)("match"),x=o.RegExp,y=x.prototype,m=/a/g,S=/a/g,b=new x(m)!==m,E=l.UNSUPPORTED_Y;if(e&&i("RegExp",!b||E||v((function(){return S[g]=!1,x(m)!=m||x(S)==S||"/a/i"!=x(m,"i")})))){for(var w=function(t,n){var r,e=this instanceof w,o=f(t),i=void 0===n;if(!e&&o&&t.constructor===w&&i)return t;b?o&&!i&&(t=t.source):t instanceof w&&(i&&(n=s.call(t)),t=t.source),E&&(r=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var u=c(b?new x(t,n):x(t,n),e?this:y,w);return E&&r&&d(u,{sticky:r}),u},_=function(t){t in w||u(w,t,{configurable:!0,get:function(){return x[t]},set:function(n){x[t]=n}})},O=a(x),A=0;O.length>A;)_(O[A++]);y.constructor=w,w.prototype=y,p(o,"RegExp",w)}h("RegExp")},function(t,n,r){var e=r(7),o=r(53);t.exports=function(t,n,r){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(18),o=r(9),i=r(1),c=r(6),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){"use strict";var e=r(16),o=r(4),i=r(0),c=r(33),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(56),o=r(4),i=r(14),c=r(10),u=r(11),a=r(13),f=r(57),s=r(59),l=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(t,n,r,e){var g=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=e.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(r,e){var o=a(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,e){if(!g&&x||"string"==typeof e&&-1===e.indexOf(y)){var i=r(n,t,this,e);if(i.done)return i.value}var a=o(t),v=String(this),d="function"==typeof e;d||(e=String(e));var h=a.global;if(h){var S=a.unicode;a.lastIndex=0}for(var b=[];;){var E=s(a,v);if(null===E)break;if(b.push(E),!h)break;""===String(E[0])&&(a.lastIndex=f(v,c(a.lastIndex),S))}for(var w,_="",O=0,A=0;A<b.length;A++){E=b[A];for(var T=String(E[0]),j=l(p(u(E.index),v.length),0),R=[],I=1;I<E.length;I++)R.push(void 0===(w=E[I])?w:String(w));var P=E.groups;if(d){var L=[T].concat(R,j,v);void 0!==P&&L.push(P);var C=String(e.apply(void 0,L))}else C=m(T,v,j,R,P,e);j>=O&&(_+=v.slice(O,j)+C,O=j+T.length)}return _+v.slice(O)}];function m(t,r,e,o,c,u){var a=e+t.length,f=o.length,s=h;return void 0!==c&&(c=i(c),s=d),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?"":u}))}}))},function(t,n,r){var e=r(4),o=r(32),i=r(1)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){var e=r(3),o=r(95);e({target:"Array",stat:!0,forced:!r(101)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(52),o=r(14),i=r(96),c=r(97),u=r(10),a=r(46),f=r(98);t.exports=function(t){var n,r,s,l,p,v,d=o(t),h="function"==typeof this?this:Array,g=arguments.length,x=g>1?arguments[1]:void 0,y=void 0!==x,m=f(d),S=0;if(y&&(x=e(x,g>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(r=new h(n=u(d.length));n>S;S++)v=y?x(d[S],S):d[S],a(r,S,v);else for(p=(l=m.call(d)).next,r=new h;!(s=p.call(l)).done;S++)v=y?i(l,x,[s.value,S],!0):s.value,a(r,S,v);return r.length=S,r}},function(t,n,r){var e=r(4);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(1),o=r(21),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(99),o=r(21),i=r(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(100),o=r(12),i=r(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(1)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(58).charAt,o=r(26),i=r(103),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=u(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(3),o=r(104),i=r(64),c=r(53),u=r(65),a=r(8),f=r(16),s=r(1),l=r(28),p=r(21),v=r(63),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,g=s("iterator"),x=function(){return this};t.exports=function(t,n,r,s,v,y,m){o(r,n,s);var S,b,E,w=function(t){if(t===v&&j)return j;if(!h&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},_=n+" Iterator",O=!1,A=t.prototype,T=A[g]||A["@@iterator"]||v&&A[v],j=!h&&T||w(v),R="Array"==n&&A.entries||T;if(R&&(S=i(R.call(new t)),d!==Object.prototype&&S.next&&(l||i(S)===d||(c?c(S,d):"function"!=typeof S[g]&&a(S,g,x)),u(S,_,!0,!0),l&&(p[_]=x))),"values"==v&&T&&"values"!==T.name&&(O=!0,j=function(){return T.call(this)}),l&&!m||A[g]===j||a(A,g,j),p[n]=j,v)if(b={values:w("values"),keys:y?j:w("keys"),entries:w("entries")},m)for(E in b)(h||O||!(E in A))&&f(A,E,b[E]);else e({target:n,proto:!0,forced:h||O},b);return b}},function(t,n,r){"use strict";var e=r(63).IteratorPrototype,o=r(106),i=r(17),c=r(65),u=r(21),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,r){var e=r(0);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e,o=r(4),i=r(107),c=r(30),u=r(29),a=r(109),f=r(37),s=r(27),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete d.prototype[c[r]];return d()};u[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(6),o=r(9),i=r(4),c=r(108);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(43),o=r(30);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(18);t.exports=e("document","documentElement")},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(3),o=r(23),i=r(15),c=r(19),u=[].join,a=o!=Object,f=c("join",",");e({target:"Array",proto:!0,forced:a||!f},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";r.r(n);r(22),r(79),r(81),r(82),r(83),r(86),r(87),r(34),r(91),r(92),r(60);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.text=n,this.findRepeatingWords()}var n,r,o;return n=t,(r=[{key:"findRepeatingWords",value:function(){var t,n,r=this,e=this.text.split(" ");this.repeatedWords=[];for(var o=0;o<e.length;o++){var i=e[o].replace(new RegExp("[".concat(',.)(?!~"\n\t\r -',"]"),"g"),"");if(i){var c=this.repeatedWords.map((function(t){return t.word.toLowerCase()})).lastIndexOf(i.toLowerCase()),u=void 0;c>-1&&(u=this.repeatedWords[c].indexes),(-1===c||o-u[u.length-1]>40)&&(t=void 0,n=void 0,t={word:i,occuranceCount:1,importance:0,indexes:[o]},n=new RegExp("([".concat(',.)(?!~"\n\t\r -',"]").concat(i,"[").concat(',.)(?!~"\n\t\r -',"])|(^").concat(i,"$)|([").concat(',.)(?!~"\n\t\r -',"]").concat(i,"$)|(^").concat(i,"[").concat(',.)(?!~"\n\t\r -',"])"),"i"),function r(o){for(var i=o+1;i<=o+40&&i<e.length;i++)if(n.test(e[i]))return t.occuranceCount++,t.indexes.push(i),r(i)}(o),t.occuranceCount>1&&(r.calcImportance(t),r.repeatedWords.push(t)))}}}},{key:"calcImportance",value:function(t){t.importance=(.8*t.occuranceCount+.4*t.word.length).toFixed(1)}},{key:"sortRepeatedWordsArr",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"importance",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";function r(t,n){var r=1;return"desc"===n&&(r=-1),function(n,e){return n[t]<e[t]?-1*r:n[t]>e[t]?1*r:0*r}}this.repeatedWords.sort(r(t,n))}}])&&e(n.prototype,r),o&&e(n,o),t}(),i={button:document.querySelector(".input__button"),textInput:document.querySelector(".input__text"),repeatedWordsCount:document.querySelector(".data__words-count"),wordList:document.querySelector(".data__list"),wordListItems:document.querySelectorAll(".data__item"),visualizationText:document.querySelector(".visualization__text")},c=(r(61),r(94),r(102),r(66),function(t){t.forEach((function(t,n){var r,e;r=t,e='\n        <li class="data__item" data-id="'.concat(n,'">\n            <div class="data__item-word">').concat(r.word,'</div>\n            <div class="data__item-occurance-count">').concat(r.occuranceCount,'</div>\n            <div class="data__item-importance">').concat(r.importance,"</div>\n        </li>\n        "),i.wordList.insertAdjacentHTML("beforeend",e)}))}),u=(r(111),{});i.button.addEventListener("click",(function(){var t,n=i.textInput.value;n&&(u.text=new o(n),i.wordList.innerHTML="",i.repeatedWordsCount.textContent=0,u.text.sortRepeatedWordsArr(),t=u.text.repeatedWords.length,i.repeatedWordsCount.textContent=t,c(u.text.repeatedWords))}));var a=function(t){var n,r,e,o=t.dataset.id;i.visualizationText.innerHTML="",function(t){Array.from(document.querySelectorAll(".data__item")).forEach((function(t){return t.classList.remove("data__item--active")})),t.classList.add("data__item--active")}(t),n=u.text.text,r=u.text.repeatedWords[o],e=n.split(" "),r.indexes.forEach((function(t,n){var r;r=0===n?"visualization__highlight--first":"visualization__highlight--next",e[t]='<span style="opacity: '.concat(100-3*n,'%;" class="visualization__highlight ').concat(r,'" data-id="').concat(n,'">').concat(e[t],"</span>")})),e=e.join(" "),i.visualizationText.insertAdjacentHTML("afterbegin",e)};i.wordList.addEventListener("click",(function(t){var n=t.target.closest(".data__item");n&&a(n)}))}]);