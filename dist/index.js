!function(r){"function"==typeof define&&define.amd?define(r):r()}(function(){"use strict";function r(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}function n(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,e)}return t}function t(r){return function(r){if(Array.isArray(r)){for(var n=0,t=new Array(r.length);n<r.length;n++)t[n]=r[n];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e=function r(n,e,u,i){if(u||(u=o),i||(i=[]),null==n)return i;var c=!0,f=!1,a=void 0;try{for(var l,p=n[Symbol.iterator]();!(c=(l=p.next()).done);c=!0){var s,y=l.value;if(e>0&&u(y))if(e>1)r(y,e-1,u,i);else(s=i).push.apply(s,t(y));else i[i.length]=y}}catch(r){f=!0,a=r}finally{try{c||null==p.return||p.return()}finally{if(f)throw a}}return i},o=function(r){return u(r)},u=function(r){return Array.isArray(r)};exports.F=function(){return!1},exports.T=function(){return!0},exports.isArray=u,exports.pipe=function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return function(r){return n.reduce(function(r,n){return n(r)},r)}},exports.trace=function(r){return function(n){return console.log(r,n),n}},exports.map=function(r){return function(n){return n.map(r)}},exports.filter=function(r){return function(n){return n.filter(r)}},exports.foreach=function(r){return function(n){return n.forEach(r)}},exports.concat=function(r){return function(n){return r.concat(n)}},exports.either=function(r){return function(n){return r||n}},exports.both=function(r){return function(n){return r&&n}},exports.add=function(r){return function(n){return r+n}},exports.arrPush=function(r){return function(n){return r.push(n)}},exports.flatten=function(r){return(null==r?0:r.length)?e(r,1):[]},exports.flattenDeep=function(r){return(null==r?0:r.length)?e(r,1/0):[]},exports.objValue=function(r){return function(n){return n[r]}},exports.objChangeValue=function(t){return function(e){return function(o){return function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(o,!0).forEach(function(n){r(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(o).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}({},o,r({},"".concat(e),t(o[e])))}}}});