(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function G2(e,t){const n=new Set(e.split(","));return i=>n.has(i)}const dn={},al=[],Ni=()=>{},Xx=()=>!1,Ud=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),q2=e=>e.startsWith("onUpdate:"),kn=Object.assign,K2=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yx=Object.prototype.hasOwnProperty,Ut=(e,t)=>Yx.call(e,t),Mt=Array.isArray,ul=e=>Hd(e)==="[object Map]",v$=e=>Hd(e)==="[object Set]",Tt=e=>typeof e=="function",vn=e=>typeof e=="string",Ms=e=>typeof e=="symbol",ln=e=>e!==null&&typeof e=="object",g$=e=>(ln(e)||Tt(e))&&Tt(e.then)&&Tt(e.catch),y$=Object.prototype.toString,Hd=e=>y$.call(e),Jx=e=>Hd(e).slice(8,-1),b$=e=>Hd(e)==="[object Object]",Z2=e=>vn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ua=G2(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wd=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qx=/-(\w)/g,Sr=Wd(e=>e.replace(Qx,(t,n)=>n?n.toUpperCase():"")),eP=/\B([A-Z])/g,xs=Wd(e=>e.replace(eP,"-$1").toLowerCase()),Gd=Wd(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qf=Wd(e=>e?`on${Gd(e)}`:""),Mo=(e,t)=>!Object.is(e,t),ep=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},k$=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},tP=e=>{const t=parseFloat(e);return isNaN(t)?e:t},nP=e=>{const t=vn(e)?Number(e):NaN;return isNaN(t)?e:t};let Tk;const _$=()=>Tk||(Tk=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function te(e){if(Mt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=vn(i)?sP(i):te(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(vn(e)||ln(e))return e}const iP=/;(?![^(]*\))/g,rP=/:([^]+)/,oP=/\/\*[^]*?\*\//g;function sP(e){const t={};return e.replace(oP,"").split(iP).forEach(n=>{if(n){const i=n.split(rP);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function M(e){let t="";if(vn(e))t=e;else if(Mt(e))for(let n=0;n<e.length;n++){const i=M(e[n]);i&&(t+=i+" ")}else if(ln(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function qt(e){if(!e)return null;let{class:t,style:n}=e;return t&&!vn(t)&&(e.class=M(t)),n&&(e.style=te(n)),e}const lP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aP=G2(lP);function C$(e){return!!e||e===""}const nt=e=>vn(e)?e:e==null?"":Mt(e)||ln(e)&&(e.toString===y$||!Tt(e.toString))?JSON.stringify(e,S$,2):String(e),S$=(e,t)=>t&&t.__v_isRef?S$(e,t.value):ul(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[tp(i,s)+" =>"]=o,n),{})}:v$(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>tp(n))}:Ms(t)?tp(t):ln(t)&&!Mt(t)&&!b$(t)?String(t):t,tp=(e,t="")=>{var n;return Ms(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mi;class uP{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mi,!t&&Mi&&(this.index=(Mi.scopes||(Mi.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Mi;try{return Mi=this,t()}finally{Mi=n}}}on(){Mi=this}off(){Mi=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function cP(e,t=Mi){t&&t.active&&t.effects.push(e)}function w$(){return Mi}function dP(e){Mi&&Mi.cleanups.push(e)}let ds;class X2{constructor(t,n,i,o){this.fn=t,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cP(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,zo();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(fP(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),No()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Co,n=ds;try{return Co=!0,ds=this,this._runnings++,Ik(this),this.fn()}finally{Ak(this),this._runnings--,ds=n,Co=t}}stop(){this.active&&(Ik(this),Ak(this),this.onStop&&this.onStop(),this.active=!1)}}function fP(e){return e.value}function Ik(e){e._trackId++,e._depsLength=0}function Ak(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)$$(e.deps[t],e);e.deps.length=e._depsLength}}function $$(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Co=!0,Wy=0;const M$=[];function zo(){M$.push(Co),Co=!1}function No(){const e=M$.pop();Co=e===void 0?!0:e}function Y2(){Wy++}function J2(){for(Wy--;!Wy&&Gy.length;)Gy.shift()()}function x$(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&$$(i,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Gy=[];function P$(e,t,n){Y2();for(const i of e.keys()){let o;i._dirtyLevel<t&&(o??(o=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(o??(o=e.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Gy.push(i.scheduler)))}J2()}const E$=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},sd=new WeakMap,fs=Symbol(""),qy=Symbol("");function Ci(e,t,n){if(Co&&ds){let i=sd.get(e);i||sd.set(e,i=new Map);let o=i.get(n);o||i.set(n,o=E$(()=>i.delete(n))),x$(ds,o)}}function Ur(e,t,n,i,o,s){const r=sd.get(e);if(!r)return;let l=[];if(t==="clear")l=[...r.values()];else if(n==="length"&&Mt(e)){const a=Number(i);r.forEach((u,c)=>{(c==="length"||!Ms(c)&&c>=a)&&l.push(u)})}else switch(n!==void 0&&l.push(r.get(n)),t){case"add":Mt(e)?Z2(n)&&l.push(r.get("length")):(l.push(r.get(fs)),ul(e)&&l.push(r.get(qy)));break;case"delete":Mt(e)||(l.push(r.get(fs)),ul(e)&&l.push(r.get(qy)));break;case"set":ul(e)&&l.push(r.get(fs));break}Y2();for(const a of l)a&&P$(a,4);J2()}function pP(e,t){const n=sd.get(e);return n&&n.get(t)}const hP=G2("__proto__,__v_isRef,__isVue"),L$=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ms)),Ok=mP();function mP(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=Wt(this);for(let s=0,r=this.length;s<r;s++)Ci(i,"get",s+"");const o=i[t](...n);return o===-1||o===!1?i[t](...n.map(Wt)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zo(),Y2();const i=Wt(this)[t].apply(this,n);return J2(),No(),i}}),e}function vP(e){Ms(e)||(e=String(e));const t=Wt(this);return Ci(t,"has",e),t.hasOwnProperty(e)}class T${constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?EP:z$:s?O$:A$).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=Mt(t);if(!o){if(r&&Ut(Ok,n))return Reflect.get(Ok,n,i);if(n==="hasOwnProperty")return vP}const l=Reflect.get(t,n,i);return(Ms(n)?L$.has(n):hP(n))||(o||Ci(t,"get",n),s)?l:Nn(l)?r&&Z2(n)?l:l.value:ln(l)?o?tb(l):je(l):l}}class I$ extends T${constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];if(!this._isShallow){const a=La(s);if(!ld(i)&&!La(i)&&(s=Wt(s),i=Wt(i)),!Mt(t)&&Nn(s)&&!Nn(i))return a?!1:(s.value=i,!0)}const r=Mt(t)&&Z2(n)?Number(n)<t.length:Ut(t,n),l=Reflect.set(t,n,i,o);return t===Wt(o)&&(r?Mo(i,s)&&Ur(t,"set",n,i):Ur(t,"add",n,i)),l}deleteProperty(t,n){const i=Ut(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&Ur(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!Ms(n)||!L$.has(n))&&Ci(t,"has",n),i}ownKeys(t){return Ci(t,"iterate",Mt(t)?"length":fs),Reflect.ownKeys(t)}}class gP extends T${constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yP=new I$,bP=new gP,kP=new I$(!0);const Q2=e=>e,qd=e=>Reflect.getPrototypeOf(e);function cu(e,t,n=!1,i=!1){e=e.__v_raw;const o=Wt(e),s=Wt(t);n||(Mo(t,s)&&Ci(o,"get",t),Ci(o,"get",s));const{has:r}=qd(o),l=i?Q2:n?ib:Ta;if(r.call(o,t))return l(e.get(t));if(r.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function du(e,t=!1){const n=this.__v_raw,i=Wt(n),o=Wt(e);return t||(Mo(e,o)&&Ci(i,"has",e),Ci(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function fu(e,t=!1){return e=e.__v_raw,!t&&Ci(Wt(e),"iterate",fs),Reflect.get(e,"size",e)}function zk(e){e=Wt(e);const t=Wt(this);return qd(t).has.call(t,e)||(t.add(e),Ur(t,"add",e,e)),this}function Nk(e,t){t=Wt(t);const n=Wt(this),{has:i,get:o}=qd(n);let s=i.call(n,e);s||(e=Wt(e),s=i.call(n,e));const r=o.call(n,e);return n.set(e,t),s?Mo(t,r)&&Ur(n,"set",e,t):Ur(n,"add",e,t),this}function Rk(e){const t=Wt(this),{has:n,get:i}=qd(t);let o=n.call(t,e);o||(e=Wt(e),o=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return o&&Ur(t,"delete",e,void 0),s}function Bk(){const e=Wt(this),t=e.size!==0,n=e.clear();return t&&Ur(e,"clear",void 0,void 0),n}function pu(e,t){return function(i,o){const s=this,r=s.__v_raw,l=Wt(r),a=t?Q2:e?ib:Ta;return!e&&Ci(l,"iterate",fs),r.forEach((u,c)=>i.call(o,a(u),a(c),s))}}function hu(e,t,n){return function(...i){const o=this.__v_raw,s=Wt(o),r=ul(s),l=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,u=o[e](...i),c=n?Q2:t?ib:Ta;return!t&&Ci(s,"iterate",a?qy:fs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:l?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function Qr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function _P(){const e={get(s){return cu(this,s)},get size(){return fu(this)},has:du,add:zk,set:Nk,delete:Rk,clear:Bk,forEach:pu(!1,!1)},t={get(s){return cu(this,s,!1,!0)},get size(){return fu(this)},has:du,add:zk,set:Nk,delete:Rk,clear:Bk,forEach:pu(!1,!0)},n={get(s){return cu(this,s,!0)},get size(){return fu(this,!0)},has(s){return du.call(this,s,!0)},add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear"),forEach:pu(!0,!1)},i={get(s){return cu(this,s,!0,!0)},get size(){return fu(this,!0)},has(s){return du.call(this,s,!0)},add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear"),forEach:pu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=hu(s,!1,!1),n[s]=hu(s,!0,!1),t[s]=hu(s,!1,!0),i[s]=hu(s,!0,!0)}),[e,n,t,i]}const[CP,SP,wP,$P]=_P();function eb(e,t){const n=t?e?$P:wP:e?SP:CP;return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(Ut(n,o)&&o in i?n:i,o,s)}const MP={get:eb(!1,!1)},xP={get:eb(!1,!0)},PP={get:eb(!0,!1)};const A$=new WeakMap,O$=new WeakMap,z$=new WeakMap,EP=new WeakMap;function LP(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TP(e){return e.__v_skip||!Object.isExtensible(e)?0:LP(Jx(e))}function je(e){return La(e)?e:nb(e,!1,yP,MP,A$)}function IP(e){return nb(e,!1,kP,xP,O$)}function tb(e){return nb(e,!0,bP,PP,z$)}function nb(e,t,n,i,o){if(!ln(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const r=TP(e);if(r===0)return e;const l=new Proxy(e,r===2?i:n);return o.set(e,l),l}function ca(e){return La(e)?ca(e.__v_raw):!!(e&&e.__v_isReactive)}function La(e){return!!(e&&e.__v_isReadonly)}function ld(e){return!!(e&&e.__v_isShallow)}function N$(e){return e?!!e.__v_raw:!1}function Wt(e){const t=e&&e.__v_raw;return t?Wt(t):e}function AP(e){return Object.isExtensible(e)&&k$(e,"__v_skip",!0),e}const Ta=e=>ln(e)?je(e):e,ib=e=>ln(e)?tb(e):e;class R${constructor(t,n,i,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new X2(()=>t(this._value),()=>nc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const t=Wt(this);return(!t._cacheable||t.effect.dirty)&&Mo(t._value,t._value=t.effect.run())&&nc(t,4),B$(t),t.effect._dirtyLevel>=2&&nc(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function OP(e,t,n=!1){let i,o;const s=Tt(e);return s?(i=e,o=Ni):(i=e.get,o=e.set),new R$(i,o,s||!o,n)}function B$(e){var t;Co&&ds&&(e=Wt(e),x$(ds,(t=e.dep)!=null?t:e.dep=E$(()=>e.dep=void 0,e instanceof R$?e:void 0)))}function nc(e,t=4,n){e=Wt(e);const i=e.dep;i&&P$(i,t)}function Nn(e){return!!(e&&e.__v_isRef===!0)}function J(e){return D$(e,!1)}function zP(e){return D$(e,!0)}function D$(e,t){return Nn(e)?e:new NP(e,t)}class NP{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Wt(t),this._value=n?t:Ta(t)}get value(){return B$(this),this._value}set value(t){const n=this.__v_isShallow||ld(t)||La(t);t=n?t:Wt(t),Mo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ta(t),nc(this,4))}}function F$(e){return Nn(e)?e.value:e}const RP={get:(e,t,n)=>F$(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Nn(o)&&!Nn(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function j$(e){return ca(e)?e:new Proxy(e,RP)}function He(e){const t=Mt(e)?new Array(e.length):{};for(const n in e)t[n]=V$(e,n);return t}class BP{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return pP(Wt(this._object),this._key)}}class DP{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ei(e,t,n){return Nn(e)?e:Tt(e)?new DP(e):ln(e)&&arguments.length>1?V$(e,t,n):J(e)}function V$(e,t,n){const i=e[t];return Nn(i)?i:new BP(e,t,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(e,t,n,i){try{return i?e(...i):e()}catch(o){Kd(o,t,n)}}function Bi(e,t,n,i){if(Tt(e)){const o=So(e,t,n,i);return o&&g$(o)&&o.catch(s=>{Kd(s,t,n)}),o}if(Mt(e)){const o=[];for(let s=0;s<e.length;s++)o.push(Bi(e[s],t,n,i));return o}}function Kd(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const r=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,r,l)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){zo(),So(a,null,10,[e,r,l]),No();return}}FP(e,n,o,i)}function FP(e,t,n,i=!0){console.error(e)}let Ia=!1,Ky=!1;const ii=[];let vr=0;const cl=[];let fo=null,ns=0;const U$=Promise.resolve();let rb=null;function Dt(e){const t=rb||U$;return e?t.then(this?e.bind(this):e):t}function jP(e){let t=vr+1,n=ii.length;for(;t<n;){const i=t+n>>>1,o=ii[i],s=Aa(o);s<e||s===e&&o.pre?t=i+1:n=i}return t}function ob(e){(!ii.length||!ii.includes(e,Ia&&e.allowRecurse?vr+1:vr))&&(e.id==null?ii.push(e):ii.splice(jP(e.id),0,e),H$())}function H$(){!Ia&&!Ky&&(Ky=!0,rb=U$.then(G$))}function VP(e){const t=ii.indexOf(e);t>vr&&ii.splice(t,1)}function UP(e){Mt(e)?cl.push(...e):(!fo||!fo.includes(e,e.allowRecurse?ns+1:ns))&&cl.push(e),H$()}function Dk(e,t,n=Ia?vr+1:0){for(;n<ii.length;n++){const i=ii[n];if(i&&i.pre){if(e&&i.id!==e.uid)continue;ii.splice(n,1),n--,i()}}}function W$(e){if(cl.length){const t=[...new Set(cl)].sort((n,i)=>Aa(n)-Aa(i));if(cl.length=0,fo){fo.push(...t);return}for(fo=t,ns=0;ns<fo.length;ns++)fo[ns]();fo=null,ns=0}}const Aa=e=>e.id==null?1/0:e.id,HP=(e,t)=>{const n=Aa(e)-Aa(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function G$(e){Ky=!1,Ia=!0,ii.sort(HP);try{for(vr=0;vr<ii.length;vr++){const t=ii[vr];t&&t.active!==!1&&So(t,null,14)}}finally{vr=0,ii.length=0,W$(),Ia=!1,rb=null,(ii.length||cl.length)&&G$()}}function WP(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||dn;let o=n;const s=t.startsWith("update:"),r=s&&t.slice(7);if(r&&r in i){const c=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:p}=i[c]||dn;p&&(o=n.map(g=>vn(g)?g.trim():g)),d&&(o=n.map(tP))}let l,a=i[l=Qf(t)]||i[l=Qf(Sr(t))];!a&&s&&(a=i[l=Qf(xs(t))]),a&&Bi(a,e,6,o);const u=i[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Bi(u,e,6,o)}}function q$(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},l=!1;if(!Tt(e)){const a=u=>{const c=q$(u,t,!0);c&&(l=!0,kn(r,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(ln(e)&&i.set(e,null),null):(Mt(s)?s.forEach(a=>r[a]=null):kn(r,s),ln(e)&&i.set(e,r),r)}function Zd(e,t){return!e||!Ud(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ut(e,t[0].toLowerCase()+t.slice(1))||Ut(e,xs(t))||Ut(e,t))}let Mn=null,K$=null;function ad(e){const t=Mn;return Mn=e,K$=e&&e.type.__scopeId||null,t}function we(e,t=Mn,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Qk(-1);const s=ad(t);let r;try{r=e(...o)}finally{ad(s),i._d&&Qk(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function np(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:l,emit:a,render:u,renderCache:c,props:d,data:p,setupState:g,ctx:y,inheritAttrs:b}=e,m=ad(e);let v,S;try{if(n.shapeFlag&4){const C=o||i,P=C;v=hr(u.call(P,C,c,d,g,p,y)),S=l}else{const C=t;v=hr(C.length>1?C(d,{attrs:l,slots:r,emit:a}):C(d,null)),S=t.props?l:GP(l)}}catch(C){ma.length=0,Kd(C,e,1),v=h(vi)}let k=v;if(S&&b!==!1){const C=Object.keys(S),{shapeFlag:P}=k;C.length&&P&7&&(s&&C.some(q2)&&(S=qP(S,s)),k=Si(k,S,!1,!0))}return n.dirs&&(k=Si(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,ad(m),v}const GP=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ud(n))&&((t||(t={}))[n]=e[n]);return t},qP=(e,t)=>{const n={};for(const i in e)(!q2(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function KP(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:l,patchFlag:a}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Fk(i,r,u):!!r;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(r[p]!==i[p]&&!Zd(u,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:i===r?!1:i?r?Fk(i,r,u):!0:!!r;return!1}function Fk(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(t[s]!==e[s]&&!Zd(n,s))return!0}return!1}function ZP({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const sb="components";function ue(e,t){return X$(sb,e,!0,t)||e}const Z$=Symbol.for("v-ndc");function yi(e){return vn(e)?X$(sb,e,!1)||e:e||Z$}function X$(e,t,n=!0,i=!1){const o=Mn||Gn;if(o){const s=o.type;if(e===sb){const l=FE(s,!1);if(l&&(l===t||l===Sr(t)||l===Gd(Sr(t))))return s}const r=jk(o[e]||s[e],t)||jk(o.appContext[e],t);return!r&&i?s:r}}function jk(e,t){return e&&(e[t]||e[Sr(t)]||e[Gd(Sr(t))])}const XP=e=>e.__isSuspense;function YP(e,t){t&&t.pendingBranch?Mt(e)?t.effects.push(...e):t.effects.push(e):UP(e)}const JP=Symbol.for("v-scx"),QP=()=>kt(JP);function Rn(e,t){return lb(e,null,t)}const mu={};function Je(e,t,n){return lb(e,t,n)}function lb(e,t,{immediate:n,deep:i,flush:o,once:s,onTrack:r,onTrigger:l}=dn){if(t&&s){const w=t;t=(...x)=>{w(...x),P()}}const a=Gn,u=w=>i===!0?w:ss(w,i===!1?1:void 0);let c,d=!1,p=!1;if(Nn(e)?(c=()=>e.value,d=ld(e)):ca(e)?(c=()=>u(e),d=!0):Mt(e)?(p=!0,d=e.some(w=>ca(w)||ld(w)),c=()=>e.map(w=>{if(Nn(w))return w.value;if(ca(w))return u(w);if(Tt(w))return So(w,a,2)})):Tt(e)?t?c=()=>So(e,a,2):c=()=>(g&&g(),Bi(e,a,3,[y])):c=Ni,t&&i){const w=c;c=()=>ss(w())}let g,y=w=>{g=k.onStop=()=>{So(w,a,4),g=k.onStop=void 0}},b;if(tf)if(y=Ni,t?n&&Bi(t,a,3,[c(),p?[]:void 0,y]):c(),o==="sync"){const w=QP();b=w.__watcherHandles||(w.__watcherHandles=[])}else return Ni;let m=p?new Array(e.length).fill(mu):mu;const v=()=>{if(!(!k.active||!k.dirty))if(t){const w=k.run();(i||d||(p?w.some((x,N)=>Mo(x,m[N])):Mo(w,m)))&&(g&&g(),Bi(t,a,3,[w,m===mu?void 0:p&&m[0]===mu?[]:m,y]),m=w)}else k.run()};v.allowRecurse=!!t;let S;o==="sync"?S=v:o==="post"?S=()=>mi(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),S=()=>ob(v));const k=new X2(c,Ni,S),C=w$(),P=()=>{k.stop(),C&&K2(C.effects,k)};return t?n?v():m=k.run():o==="post"?mi(k.run.bind(k),a&&a.suspense):k.run(),b&&b.push(P),P}function eE(e,t,n){const i=this.proxy,o=vn(e)?e.includes(".")?Y$(i,e):()=>i[e]:e.bind(i,i);let s;Tt(t)?s=t:(s=t.handler,n=t);const r=Ha(this),l=lb(o,s.bind(i),n);return r(),l}function Y$(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}function ss(e,t=1/0,n){if(t<=0||!ln(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Nn(e))ss(e.value,t,n);else if(Mt(e))for(let i=0;i<e.length;i++)ss(e[i],t,n);else if(v$(e)||ul(e))e.forEach(i=>{ss(i,t,n)});else if(b$(e))for(const i in e)ss(e[i],t,n);return e}function Di(e,t){if(Mn===null)return e;const n=nf(Mn)||Mn.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,l,a=dn]=t[o];s&&(Tt(s)&&(s={mounted:s,updated:s}),s.deep&&ss(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:l,modifiers:a}))}return e}function Uo(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const l=o[r];s&&(l.oldValue=s[r].value);let a=l.dir[i];a&&(zo(),Bi(a,n,8,[e.el,l,e,t]),No())}}const po=Symbol("_leaveCb"),vu=Symbol("_enterCb");function J$(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $t(()=>{e.isMounted=!0}),Tn(()=>{e.isUnmounting=!0}),e}const Ai=[Function,Array],Q$={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ai,onEnter:Ai,onAfterEnter:Ai,onEnterCancelled:Ai,onBeforeLeave:Ai,onLeave:Ai,onAfterLeave:Ai,onLeaveCancelled:Ai,onBeforeAppear:Ai,onAppear:Ai,onAfterAppear:Ai,onAppearCancelled:Ai},tE={name:"BaseTransition",props:Q$,setup(e,{slots:t}){const n=li(),i=J$();return()=>{const o=t.default&&ab(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const p of o)if(p.type!==vi){s=p;break}}const r=Wt(e),{mode:l}=r;if(i.isLeaving)return ip(s);const a=Vk(s);if(!a)return ip(s);const u=Oa(a,r,i,n);za(a,u);const c=n.subTree,d=c&&Vk(c);if(d&&d.type!==vi&&!is(a,d)){const p=Oa(d,r,i,n);if(za(d,p),l==="out-in"&&a.type!==vi)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ip(s);l==="in-out"&&a.type!==vi&&(p.delayLeave=(g,y,b)=>{const m=e5(i,d);m[String(d.key)]=d,g[po]=()=>{y(),g[po]=void 0,delete u.delayedLeave},u.delayedLeave=b})}return s}}},nE=tE;function e5(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Oa(e,t,n,i){const{appear:o,mode:s,persisted:r=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:b,onAppear:m,onAfterAppear:v,onAppearCancelled:S}=t,k=String(e.key),C=e5(n,e),P=(N,E)=>{N&&Bi(N,i,9,E)},w=(N,E)=>{const $=E[1];P(N,E),Mt(N)?N.every(T=>T.length<=1)&&$():N.length<=1&&$()},x={mode:s,persisted:r,beforeEnter(N){let E=l;if(!n.isMounted)if(o)E=b||l;else return;N[po]&&N[po](!0);const $=C[k];$&&is(e,$)&&$.el[po]&&$.el[po](),P(E,[N])},enter(N){let E=a,$=u,T=c;if(!n.isMounted)if(o)E=m||a,$=v||u,T=S||c;else return;let U=!1;const R=N[vu]=V=>{U||(U=!0,V?P(T,[N]):P($,[N]),x.delayedLeave&&x.delayedLeave(),N[vu]=void 0)};E?w(E,[N,R]):R()},leave(N,E){const $=String(e.key);if(N[vu]&&N[vu](!0),n.isUnmounting)return E();P(d,[N]);let T=!1;const U=N[po]=R=>{T||(T=!0,E(),R?P(y,[N]):P(g,[N]),N[po]=void 0,C[$]===e&&delete C[$])};C[$]=e,p?w(p,[N,U]):U()},clone(N){return Oa(N,t,n,i)}};return x}function ip(e){if(Xd(e))return e=Si(e),e.children=null,e}function Vk(e){if(!Xd(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Tt(n.default))return n.default()}}function za(e,t){e.shapeFlag&6&&e.component?za(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ab(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===tt?(r.patchFlag&128&&o++,i=i.concat(ab(r.children,t,l))):(t||r.type!==vi)&&i.push(l!=null?Si(r,{key:l}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function z(e,t){return Tt(e)?kn({name:e.name},t,{setup:e}):e}const da=e=>!!e.type.__asyncLoader,Xd=e=>e.type.__isKeepAlive;function iE(e,t){n5(e,"a",t)}function t5(e,t){n5(e,"da",t)}function n5(e,t,n=Gn){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Yd(t,i,n),n){let o=n.parent;for(;o&&o.parent;)Xd(o.parent.vnode)&&rE(i,t,n,o),o=o.parent}}function rE(e,t,n,i){const o=Yd(t,e,i,!0);Bn(()=>{K2(i[t],o)},n)}function Yd(e,t,n=Gn,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;zo();const l=Ha(n),a=Bi(t,n,e,r);return l(),No(),a});return i?o.unshift(s):o.push(s),s}}const Gr=e=>(t,n=Gn)=>(!tf||e==="sp")&&Yd(e,(...i)=>t(...i),n),oE=Gr("bm"),$t=Gr("m"),sE=Gr("bu"),si=Gr("u"),Tn=Gr("bum"),Bn=Gr("um"),lE=Gr("sp"),aE=Gr("rtg"),uE=Gr("rtc");function cE(e,t=Gn){Yd("ec",e,t)}function pn(e,t,n,i){let o;const s=n;if(Mt(e)||vn(e)){o=new Array(e.length);for(let r=0,l=e.length;r<l;r++)o[r]=t(e[r],r,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let r=0;r<e;r++)o[r]=t(r+1,r,void 0,s)}else if(ln(e))if(e[Symbol.iterator])o=Array.from(e,(r,l)=>t(r,l,void 0,s));else{const r=Object.keys(e);o=new Array(r.length);for(let l=0,a=r.length;l<a;l++){const u=r[l];o[l]=t(e[u],u,l,s)}}else o=[];return o}function sn(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(Mt(i))for(let o=0;o<i.length;o++)e[i[o].name]=i[o].fn;else i&&(e[i.name]=i.key?(...o)=>{const s=i.fn(...o);return s&&(s.key=i.key),s}:i.fn)}return e}function de(e,t,n={},i,o){if(Mn.isCE||Mn.parent&&da(Mn.parent)&&Mn.parent.isCE)return t!=="default"&&(n.name=t),h("slot",n,i&&i());let s=e[t];s&&s._c&&(s._d=!1),_();const r=s&&i5(s(n)),l=_e(tt,{key:n.key||r&&r.key||`_${t}`},r||(i?i():[]),r&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function i5(e){return e.some(t=>Qt(t)?!(t.type===vi||t.type===tt&&!i5(t.children)):!0)?e:null}const Zy=e=>e?y5(e)?nf(e)||e.proxy:Zy(e.parent):null,fa=kn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zy(e.parent),$root:e=>Zy(e.root),$emit:e=>e.emit,$options:e=>ub(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ob(e.update)}),$nextTick:e=>e.n||(e.n=Dt.bind(e.proxy)),$watch:e=>eE.bind(e)}),rp=(e,t)=>e!==dn&&!e.__isScriptSetup&&Ut(e,t),dE={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const g=r[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(rp(i,t))return r[t]=1,i[t];if(o!==dn&&Ut(o,t))return r[t]=2,o[t];if((u=e.propsOptions[0])&&Ut(u,t))return r[t]=3,s[t];if(n!==dn&&Ut(n,t))return r[t]=4,n[t];Xy&&(r[t]=0)}}const c=fa[t];let d,p;if(c)return t==="$attrs"&&Ci(e.attrs,"get",""),c(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==dn&&Ut(n,t))return r[t]=4,n[t];if(p=a.config.globalProperties,Ut(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return rp(o,t)?(o[t]=n,!0):i!==dn&&Ut(i,t)?(i[t]=n,!0):Ut(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},r){let l;return!!n[r]||e!==dn&&Ut(e,r)||rp(t,r)||(l=s[0])&&Ut(l,r)||Ut(i,r)||Ut(fa,r)||Ut(o.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ut(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Uk(e){return Mt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xy=!0;function fE(e){const t=ub(e),n=e.proxy,i=e.ctx;Xy=!1,t.beforeCreate&&Hk(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:y,activated:b,deactivated:m,beforeDestroy:v,beforeUnmount:S,destroyed:k,unmounted:C,render:P,renderTracked:w,renderTriggered:x,errorCaptured:N,serverPrefetch:E,expose:$,inheritAttrs:T,components:U,directives:R,filters:V}=t;if(u&&pE(u,i,null),r)for(const j in r){const B=r[j];Tt(B)&&(i[j]=B.bind(n))}if(o){const j=o.call(n,n);ln(j)&&(e.data=je(j))}if(Xy=!0,s)for(const j in s){const B=s[j],K=Tt(B)?B.bind(n,n):Tt(B.get)?B.get.bind(n,n):Ni,I=!Tt(B)&&Tt(B.set)?B.set.bind(n):Ni,Y=f({get:K,set:I});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Y.value,set:re=>Y.value=re})}if(l)for(const j in l)r5(l[j],i,n,j);if(a){const j=Tt(a)?a.call(n):a;Reflect.ownKeys(j).forEach(B=>{Rt(B,j[B])})}c&&Hk(c,e,"c");function W(j,B){Mt(B)?B.forEach(K=>j(K.bind(n))):B&&j(B.bind(n))}if(W(oE,d),W($t,p),W(sE,g),W(si,y),W(iE,b),W(t5,m),W(cE,N),W(uE,w),W(aE,x),W(Tn,S),W(Bn,C),W(lE,E),Mt($))if($.length){const j=e.exposed||(e.exposed={});$.forEach(B=>{Object.defineProperty(j,B,{get:()=>n[B],set:K=>n[B]=K})})}else e.exposed||(e.exposed={});P&&e.render===Ni&&(e.render=P),T!=null&&(e.inheritAttrs=T),U&&(e.components=U),R&&(e.directives=R)}function pE(e,t,n=Ni){Mt(e)&&(e=Yy(e));for(const i in e){const o=e[i];let s;ln(o)?"default"in o?s=kt(o.from||i,o.default,!0):s=kt(o.from||i):s=kt(o),Nn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function Hk(e,t,n){Bi(Mt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function r5(e,t,n,i){const o=i.includes(".")?Y$(n,i):()=>n[i];if(vn(e)){const s=t[e];Tt(s)&&Je(o,s)}else if(Tt(e))Je(o,e.bind(n));else if(ln(e))if(Mt(e))e.forEach(s=>r5(s,t,n,i));else{const s=Tt(e.handler)?e.handler.bind(n):t[e.handler];Tt(s)&&Je(o,s,e)}}function ub(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,l=s.get(t);let a;return l?a=l:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(u=>ud(a,u,r,!0)),ud(a,t,r)),ln(t)&&s.set(t,a),a}function ud(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&ud(e,s,n,!0),o&&o.forEach(r=>ud(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const l=hE[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const hE={data:Wk,props:Gk,emits:Gk,methods:ia,computed:ia,beforeCreate:ui,created:ui,beforeMount:ui,mounted:ui,beforeUpdate:ui,updated:ui,beforeDestroy:ui,beforeUnmount:ui,destroyed:ui,unmounted:ui,activated:ui,deactivated:ui,errorCaptured:ui,serverPrefetch:ui,components:ia,directives:ia,watch:vE,provide:Wk,inject:mE};function Wk(e,t){return t?e?function(){return kn(Tt(e)?e.call(this,this):e,Tt(t)?t.call(this,this):t)}:t:e}function mE(e,t){return ia(Yy(e),Yy(t))}function Yy(e){if(Mt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ui(e,t){return e?[...new Set([].concat(e,t))]:t}function ia(e,t){return e?kn(Object.create(null),e,t):t}function Gk(e,t){return e?Mt(e)&&Mt(t)?[...new Set([...e,...t])]:kn(Object.create(null),Uk(e),Uk(t??{})):t}function vE(e,t){if(!e)return t;if(!t)return e;const n=kn(Object.create(null),e);for(const i in t)n[i]=ui(e[i],t[i]);return n}function o5(){return{app:null,config:{isNativeTag:Xx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gE=0;function yE(e,t){return function(i,o=null){Tt(i)||(i=kn({},i)),o!=null&&!ln(o)&&(o=null);const s=o5(),r=new WeakSet;let l=!1;const a=s.app={_uid:gE++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:VE,get config(){return s.config},set config(u){},use(u,...c){return r.has(u)||(u&&Tt(u.install)?(r.add(u),u.install(a,...c)):Tt(u)&&(r.add(u),u(a,...c))),a},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),a},component(u,c){return c?(s.components[u]=c,a):s.components[u]},directive(u,c){return c?(s.directives[u]=c,a):s.directives[u]},mount(u,c,d){if(!l){const p=h(i,o);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),c&&t?t(p,u):e(p,u,d),l=!0,a._container=u,u.__vue_app__=a,nf(p.component)||p.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,c){return s.provides[u]=c,a},runWithContext(u){const c=pa;pa=a;try{return u()}finally{pa=c}}};return a}}let pa=null;function Rt(e,t){if(Gn){let n=Gn.provides;const i=Gn.parent&&Gn.parent.provides;i===n&&(n=Gn.provides=Object.create(i)),n[e]=t}}function kt(e,t,n=!1){const i=Gn||Mn;if(i||pa){const o=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:pa._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Tt(t)?t.call(i&&i.proxy):t}}const s5={},l5=()=>Object.create(s5),a5=e=>Object.getPrototypeOf(e)===s5;function bE(e,t,n,i=!1){const o={},s=l5();e.propsDefaults=Object.create(null),u5(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:IP(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function kE(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,l=Wt(o),[a]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Zd(e.emitsOptions,p))continue;const g=t[p];if(a)if(Ut(s,p))g!==s[p]&&(s[p]=g,u=!0);else{const y=Sr(p);o[y]=Jy(a,l,y,g,e,!1)}else g!==s[p]&&(s[p]=g,u=!0)}}}else{u5(e,t,o,s)&&(u=!0);let c;for(const d in l)(!t||!Ut(t,d)&&((c=xs(d))===d||!Ut(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Jy(a,l,d,void 0,e,!0)):delete o[d]);if(s!==l)for(const d in s)(!t||!Ut(t,d))&&(delete s[d],u=!0)}u&&Ur(e.attrs,"set","")}function u5(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,l;if(t)for(let a in t){if(ua(a))continue;const u=t[a];let c;o&&Ut(o,c=Sr(a))?!s||!s.includes(c)?n[c]=u:(l||(l={}))[c]=u:Zd(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,r=!0)}if(s){const a=Wt(n),u=l||dn;for(let c=0;c<s.length;c++){const d=s[c];n[d]=Jy(o,a,d,u[d],e,!Ut(u,d))}}return r}function Jy(e,t,n,i,o,s){const r=e[n];if(r!=null){const l=Ut(r,"default");if(l&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&Tt(a)){const{propsDefaults:u}=o;if(n in u)i=u[n];else{const c=Ha(o);i=u[n]=a.call(null,t),c()}}else i=a}r[0]&&(s&&!l?i=!1:r[1]&&(i===""||i===xs(n))&&(i=!0))}return i}function c5(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},l=[];let a=!1;if(!Tt(e)){const c=d=>{a=!0;const[p,g]=c5(d,t,!0);kn(r,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!a)return ln(e)&&i.set(e,al),al;if(Mt(s))for(let c=0;c<s.length;c++){const d=Sr(s[c]);qk(d)&&(r[d]=dn)}else if(s)for(const c in s){const d=Sr(c);if(qk(d)){const p=s[c],g=r[d]=Mt(p)||Tt(p)?{type:p}:kn({},p);if(g){const y=Xk(Boolean,g.type),b=Xk(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||Ut(g,"default"))&&l.push(d)}}}const u=[r,l];return ln(e)&&i.set(e,u),u}function qk(e){return e[0]!=="$"&&!ua(e)}function Kk(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Zk(e,t){return Kk(e)===Kk(t)}function Xk(e,t){return Mt(t)?t.findIndex(n=>Zk(n,e)):Tt(t)&&Zk(t,e)?0:-1}const d5=e=>e[0]==="_"||e==="$stable",cb=e=>Mt(e)?e.map(hr):[hr(e)],_E=(e,t,n)=>{if(t._n)return t;const i=we((...o)=>cb(t(...o)),n);return i._c=!1,i},f5=(e,t,n)=>{const i=e._ctx;for(const o in e){if(d5(o))continue;const s=e[o];if(Tt(s))t[o]=_E(o,s,i);else if(s!=null){const r=cb(s);t[o]=()=>r}}},p5=(e,t)=>{const n=cb(t);e.slots.default=()=>n},CE=(e,t)=>{const n=e.slots=l5();if(e.vnode.shapeFlag&32){const i=t._;i?(kn(n,t),k$(n,"_",i,!0)):f5(t,n)}else t&&p5(e,t)},SE=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=dn;if(i.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(kn(o,t),!n&&l===1&&delete o._):(s=!t.$stable,f5(t,o)),r=t}else t&&(p5(e,t),r={default:1});if(s)for(const l in o)!d5(l)&&r[l]==null&&delete o[l]};function Qy(e,t,n,i,o=!1){if(Mt(e)){e.forEach((p,g)=>Qy(p,t&&(Mt(t)?t[g]:t),n,i,o));return}if(da(i)&&!o)return;const s=i.shapeFlag&4?nf(i.component)||i.component.proxy:i.el,r=o?null:s,{i:l,r:a}=e,u=t&&t.r,c=l.refs===dn?l.refs={}:l.refs,d=l.setupState;if(u!=null&&u!==a&&(vn(u)?(c[u]=null,Ut(d,u)&&(d[u]=null)):Nn(u)&&(u.value=null)),Tt(a))So(a,l,12,[r,c]);else{const p=vn(a),g=Nn(a);if(p||g){const y=()=>{if(e.f){const b=p?Ut(d,a)?d[a]:c[a]:a.value;o?Mt(b)&&K2(b,s):Mt(b)?b.includes(s)||b.push(s):p?(c[a]=[s],Ut(d,a)&&(d[a]=c[a])):(a.value=[s],e.k&&(c[e.k]=a.value))}else p?(c[a]=r,Ut(d,a)&&(d[a]=r)):g&&(a.value=r,e.k&&(c[e.k]=r))};r?(y.id=-1,mi(y,n)):y()}}}const mi=YP;function wE(e){return $E(e)}function $E(e,t){const n=_$();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Ni,insertStaticContent:y}=e,b=(G,F,ie,ae=null,Ce=null,Me=null,X=void 0,O=null,se=!!F.dynamicChildren)=>{if(G===F)return;G&&!is(G,F)&&(ae=be(G),re(G,Ce,Me,!0),G=null),F.patchFlag===-2&&(se=!1,F.dynamicChildren=null);const{type:ce,ref:ke,shapeFlag:$e}=F;switch(ce){case Qd:m(G,F,ie,ae);break;case vi:v(G,F,ie,ae);break;case ic:G==null&&S(F,ie,ae,X);break;case tt:U(G,F,ie,ae,Ce,Me,X,O,se);break;default:$e&1?P(G,F,ie,ae,Ce,Me,X,O,se):$e&6?R(G,F,ie,ae,Ce,Me,X,O,se):($e&64||$e&128)&&ce.process(G,F,ie,ae,Ce,Me,X,O,se,le)}ke!=null&&Ce&&Qy(ke,G&&G.ref,Me,F||G,!F)},m=(G,F,ie,ae)=>{if(G==null)i(F.el=l(F.children),ie,ae);else{const Ce=F.el=G.el;F.children!==G.children&&u(Ce,F.children)}},v=(G,F,ie,ae)=>{G==null?i(F.el=a(F.children||""),ie,ae):F.el=G.el},S=(G,F,ie,ae)=>{[G.el,G.anchor]=y(G.children,F,ie,ae,G.el,G.anchor)},k=({el:G,anchor:F},ie,ae)=>{let Ce;for(;G&&G!==F;)Ce=p(G),i(G,ie,ae),G=Ce;i(F,ie,ae)},C=({el:G,anchor:F})=>{let ie;for(;G&&G!==F;)ie=p(G),o(G),G=ie;o(F)},P=(G,F,ie,ae,Ce,Me,X,O,se)=>{F.type==="svg"?X="svg":F.type==="math"&&(X="mathml"),G==null?w(F,ie,ae,Ce,Me,X,O,se):E(G,F,Ce,Me,X,O,se)},w=(G,F,ie,ae,Ce,Me,X,O)=>{let se,ce;const{props:ke,shapeFlag:$e,transition:Ve,dirs:We}=G;if(se=G.el=r(G.type,Me,ke&&ke.is,ke),$e&8?c(se,G.children):$e&16&&N(G.children,se,null,ae,Ce,op(G,Me),X,O),We&&Uo(G,null,ae,"created"),x(se,G,G.scopeId,X,ae),ke){for(const ve in ke)ve!=="value"&&!ua(ve)&&s(se,ve,null,ke[ve],Me,G.children,ae,Ce,pe);"value"in ke&&s(se,"value",null,ke.value,Me),(ce=ke.onVnodeBeforeMount)&&dr(ce,ae,G)}We&&Uo(G,null,ae,"beforeMount");const me=ME(Ce,Ve);me&&Ve.beforeEnter(se),i(se,F,ie),((ce=ke&&ke.onVnodeMounted)||me||We)&&mi(()=>{ce&&dr(ce,ae,G),me&&Ve.enter(se),We&&Uo(G,null,ae,"mounted")},Ce)},x=(G,F,ie,ae,Ce)=>{if(ie&&g(G,ie),ae)for(let Me=0;Me<ae.length;Me++)g(G,ae[Me]);if(Ce){let Me=Ce.subTree;if(F===Me){const X=Ce.vnode;x(G,X,X.scopeId,X.slotScopeIds,Ce.parent)}}},N=(G,F,ie,ae,Ce,Me,X,O,se=0)=>{for(let ce=se;ce<G.length;ce++){const ke=G[ce]=O?ho(G[ce]):hr(G[ce]);b(null,ke,F,ie,ae,Ce,Me,X,O)}},E=(G,F,ie,ae,Ce,Me,X)=>{const O=F.el=G.el;let{patchFlag:se,dynamicChildren:ce,dirs:ke}=F;se|=G.patchFlag&16;const $e=G.props||dn,Ve=F.props||dn;let We;if(ie&&Ho(ie,!1),(We=Ve.onVnodeBeforeUpdate)&&dr(We,ie,F,G),ke&&Uo(F,G,ie,"beforeUpdate"),ie&&Ho(ie,!0),ce?$(G.dynamicChildren,ce,O,ie,ae,op(F,Ce),Me):X||B(G,F,O,null,ie,ae,op(F,Ce),Me,!1),se>0){if(se&16)T(O,F,$e,Ve,ie,ae,Ce);else if(se&2&&$e.class!==Ve.class&&s(O,"class",null,Ve.class,Ce),se&4&&s(O,"style",$e.style,Ve.style,Ce),se&8){const me=F.dynamicProps;for(let ve=0;ve<me.length;ve++){const ge=me[ve],Ue=$e[ge],mt=Ve[ge];(mt!==Ue||ge==="value")&&s(O,ge,Ue,mt,Ce,G.children,ie,ae,pe)}}se&1&&G.children!==F.children&&c(O,F.children)}else!X&&ce==null&&T(O,F,$e,Ve,ie,ae,Ce);((We=Ve.onVnodeUpdated)||ke)&&mi(()=>{We&&dr(We,ie,F,G),ke&&Uo(F,G,ie,"updated")},ae)},$=(G,F,ie,ae,Ce,Me,X)=>{for(let O=0;O<F.length;O++){const se=G[O],ce=F[O],ke=se.el&&(se.type===tt||!is(se,ce)||se.shapeFlag&70)?d(se.el):ie;b(se,ce,ke,null,ae,Ce,Me,X,!0)}},T=(G,F,ie,ae,Ce,Me,X)=>{if(ie!==ae){if(ie!==dn)for(const O in ie)!ua(O)&&!(O in ae)&&s(G,O,ie[O],null,X,F.children,Ce,Me,pe);for(const O in ae){if(ua(O))continue;const se=ae[O],ce=ie[O];se!==ce&&O!=="value"&&s(G,O,ce,se,X,F.children,Ce,Me,pe)}"value"in ae&&s(G,"value",ie.value,ae.value,X)}},U=(G,F,ie,ae,Ce,Me,X,O,se)=>{const ce=F.el=G?G.el:l(""),ke=F.anchor=G?G.anchor:l("");let{patchFlag:$e,dynamicChildren:Ve,slotScopeIds:We}=F;We&&(O=O?O.concat(We):We),G==null?(i(ce,ie,ae),i(ke,ie,ae),N(F.children||[],ie,ke,Ce,Me,X,O,se)):$e>0&&$e&64&&Ve&&G.dynamicChildren?($(G.dynamicChildren,Ve,ie,Ce,Me,X,O),(F.key!=null||Ce&&F===Ce.subTree)&&db(G,F,!0)):B(G,F,ie,ke,Ce,Me,X,O,se)},R=(G,F,ie,ae,Ce,Me,X,O,se)=>{F.slotScopeIds=O,G==null?F.shapeFlag&512?Ce.ctx.activate(F,ie,ae,X,se):V(F,ie,ae,Ce,Me,X,se):Z(G,F,se)},V=(G,F,ie,ae,Ce,Me,X)=>{const O=G.component=zE(G,ae,Ce);if(Xd(G)&&(O.ctx.renderer=le),NE(O),O.asyncDep){if(Ce&&Ce.registerDep(O,W),!G.el){const se=O.subTree=h(vi);v(null,se,F,ie)}}else W(O,G,F,ie,Ce,Me,X)},Z=(G,F,ie)=>{const ae=F.component=G.component;if(KP(G,F,ie))if(ae.asyncDep&&!ae.asyncResolved){j(ae,F,ie);return}else ae.next=F,VP(ae.update),ae.effect.dirty=!0,ae.update();else F.el=G.el,ae.vnode=F},W=(G,F,ie,ae,Ce,Me,X)=>{const O=()=>{if(G.isMounted){let{next:ke,bu:$e,u:Ve,parent:We,vnode:me}=G;{const at=h5(G);if(at){ke&&(ke.el=me.el,j(G,ke,X)),at.asyncDep.then(()=>{G.isUnmounted||O()});return}}let ve=ke,ge;Ho(G,!1),ke?(ke.el=me.el,j(G,ke,X)):ke=me,$e&&ep($e),(ge=ke.props&&ke.props.onVnodeBeforeUpdate)&&dr(ge,We,ke,me),Ho(G,!0);const Ue=np(G),mt=G.subTree;G.subTree=Ue,b(mt,Ue,d(mt.el),be(mt),G,Ce,Me),ke.el=Ue.el,ve===null&&ZP(G,Ue.el),Ve&&mi(Ve,Ce),(ge=ke.props&&ke.props.onVnodeUpdated)&&mi(()=>dr(ge,We,ke,me),Ce)}else{let ke;const{el:$e,props:Ve}=F,{bm:We,m:me,parent:ve}=G,ge=da(F);if(Ho(G,!1),We&&ep(We),!ge&&(ke=Ve&&Ve.onVnodeBeforeMount)&&dr(ke,ve,F),Ho(G,!0),$e&&Fe){const Ue=()=>{G.subTree=np(G),Fe($e,G.subTree,G,Ce,null)};ge?F.type.__asyncLoader().then(()=>!G.isUnmounted&&Ue()):Ue()}else{const Ue=G.subTree=np(G);b(null,Ue,ie,ae,G,Ce,Me),F.el=Ue.el}if(me&&mi(me,Ce),!ge&&(ke=Ve&&Ve.onVnodeMounted)){const Ue=F;mi(()=>dr(ke,ve,Ue),Ce)}(F.shapeFlag&256||ve&&da(ve.vnode)&&ve.vnode.shapeFlag&256)&&G.a&&mi(G.a,Ce),G.isMounted=!0,F=ie=ae=null}},se=G.effect=new X2(O,Ni,()=>ob(ce),G.scope),ce=G.update=()=>{se.dirty&&se.run()};ce.id=G.uid,Ho(G,!0),ce()},j=(G,F,ie)=>{F.component=G;const ae=G.vnode.props;G.vnode=F,G.next=null,kE(G,F.props,ae,ie),SE(G,F.children,ie),zo(),Dk(G),No()},B=(G,F,ie,ae,Ce,Me,X,O,se=!1)=>{const ce=G&&G.children,ke=G?G.shapeFlag:0,$e=F.children,{patchFlag:Ve,shapeFlag:We}=F;if(Ve>0){if(Ve&128){I(ce,$e,ie,ae,Ce,Me,X,O,se);return}else if(Ve&256){K(ce,$e,ie,ae,Ce,Me,X,O,se);return}}We&8?(ke&16&&pe(ce,Ce,Me),$e!==ce&&c(ie,$e)):ke&16?We&16?I(ce,$e,ie,ae,Ce,Me,X,O,se):pe(ce,Ce,Me,!0):(ke&8&&c(ie,""),We&16&&N($e,ie,ae,Ce,Me,X,O,se))},K=(G,F,ie,ae,Ce,Me,X,O,se)=>{G=G||al,F=F||al;const ce=G.length,ke=F.length,$e=Math.min(ce,ke);let Ve;for(Ve=0;Ve<$e;Ve++){const We=F[Ve]=se?ho(F[Ve]):hr(F[Ve]);b(G[Ve],We,ie,null,Ce,Me,X,O,se)}ce>ke?pe(G,Ce,Me,!0,!1,$e):N(F,ie,ae,Ce,Me,X,O,se,$e)},I=(G,F,ie,ae,Ce,Me,X,O,se)=>{let ce=0;const ke=F.length;let $e=G.length-1,Ve=ke-1;for(;ce<=$e&&ce<=Ve;){const We=G[ce],me=F[ce]=se?ho(F[ce]):hr(F[ce]);if(is(We,me))b(We,me,ie,null,Ce,Me,X,O,se);else break;ce++}for(;ce<=$e&&ce<=Ve;){const We=G[$e],me=F[Ve]=se?ho(F[Ve]):hr(F[Ve]);if(is(We,me))b(We,me,ie,null,Ce,Me,X,O,se);else break;$e--,Ve--}if(ce>$e){if(ce<=Ve){const We=Ve+1,me=We<ke?F[We].el:ae;for(;ce<=Ve;)b(null,F[ce]=se?ho(F[ce]):hr(F[ce]),ie,me,Ce,Me,X,O,se),ce++}}else if(ce>Ve)for(;ce<=$e;)re(G[ce],Ce,Me,!0),ce++;else{const We=ce,me=ce,ve=new Map;for(ce=me;ce<=Ve;ce++){const Qe=F[ce]=se?ho(F[ce]):hr(F[ce]);Qe.key!=null&&ve.set(Qe.key,ce)}let ge,Ue=0;const mt=Ve-me+1;let at=!1,ot=0;const Be=new Array(mt);for(ce=0;ce<mt;ce++)Be[ce]=0;for(ce=We;ce<=$e;ce++){const Qe=G[ce];if(Ue>=mt){re(Qe,Ce,Me,!0);continue}let Ze;if(Qe.key!=null)Ze=ve.get(Qe.key);else for(ge=me;ge<=Ve;ge++)if(Be[ge-me]===0&&is(Qe,F[ge])){Ze=ge;break}Ze===void 0?re(Qe,Ce,Me,!0):(Be[Ze-me]=ce+1,Ze>=ot?ot=Ze:at=!0,b(Qe,F[Ze],ie,null,Ce,Me,X,O,se),Ue++)}const qe=at?xE(Be):al;for(ge=qe.length-1,ce=mt-1;ce>=0;ce--){const Qe=me+ce,Ze=F[Qe],H=Qe+1<ke?F[Qe+1].el:ae;Be[ce]===0?b(null,Ze,ie,H,Ce,Me,X,O,se):at&&(ge<0||ce!==qe[ge]?Y(Ze,ie,H,2):ge--)}}},Y=(G,F,ie,ae,Ce=null)=>{const{el:Me,type:X,transition:O,children:se,shapeFlag:ce}=G;if(ce&6){Y(G.component.subTree,F,ie,ae);return}if(ce&128){G.suspense.move(F,ie,ae);return}if(ce&64){X.move(G,F,ie,le);return}if(X===tt){i(Me,F,ie);for(let $e=0;$e<se.length;$e++)Y(se[$e],F,ie,ae);i(G.anchor,F,ie);return}if(X===ic){k(G,F,ie);return}if(ae!==2&&ce&1&&O)if(ae===0)O.beforeEnter(Me),i(Me,F,ie),mi(()=>O.enter(Me),Ce);else{const{leave:$e,delayLeave:Ve,afterLeave:We}=O,me=()=>i(Me,F,ie),ve=()=>{$e(Me,()=>{me(),We&&We()})};Ve?Ve(Me,me,ve):ve()}else i(Me,F,ie)},re=(G,F,ie,ae=!1,Ce=!1)=>{const{type:Me,props:X,ref:O,children:se,dynamicChildren:ce,shapeFlag:ke,patchFlag:$e,dirs:Ve}=G;if(O!=null&&Qy(O,null,ie,G,!0),ke&256){F.ctx.deactivate(G);return}const We=ke&1&&Ve,me=!da(G);let ve;if(me&&(ve=X&&X.onVnodeBeforeUnmount)&&dr(ve,F,G),ke&6)ne(G.component,ie,ae);else{if(ke&128){G.suspense.unmount(ie,ae);return}We&&Uo(G,null,F,"beforeUnmount"),ke&64?G.type.remove(G,F,ie,Ce,le,ae):ce&&(Me!==tt||$e>0&&$e&64)?pe(ce,F,ie,!1,!0):(Me===tt&&$e&384||!Ce&&ke&16)&&pe(se,F,ie),ae&&fe(G)}(me&&(ve=X&&X.onVnodeUnmounted)||We)&&mi(()=>{ve&&dr(ve,F,G),We&&Uo(G,null,F,"unmounted")},ie)},fe=G=>{const{type:F,el:ie,anchor:ae,transition:Ce}=G;if(F===tt){Q(ie,ae);return}if(F===ic){C(G);return}const Me=()=>{o(ie),Ce&&!Ce.persisted&&Ce.afterLeave&&Ce.afterLeave()};if(G.shapeFlag&1&&Ce&&!Ce.persisted){const{leave:X,delayLeave:O}=Ce,se=()=>X(ie,Me);O?O(G.el,Me,se):se()}else Me()},Q=(G,F)=>{let ie;for(;G!==F;)ie=p(G),o(G),G=ie;o(F)},ne=(G,F,ie)=>{const{bum:ae,scope:Ce,update:Me,subTree:X,um:O}=G;ae&&ep(ae),Ce.stop(),Me&&(Me.active=!1,re(X,G,F,ie)),O&&mi(O,F),mi(()=>{G.isUnmounted=!0},F),F&&F.pendingBranch&&!F.isUnmounted&&G.asyncDep&&!G.asyncResolved&&G.suspenseId===F.pendingId&&(F.deps--,F.deps===0&&F.resolve())},pe=(G,F,ie,ae=!1,Ce=!1,Me=0)=>{for(let X=Me;X<G.length;X++)re(G[X],F,ie,ae,Ce)},be=G=>G.shapeFlag&6?be(G.component.subTree):G.shapeFlag&128?G.suspense.next():p(G.anchor||G.el);let Ae=!1;const Oe=(G,F,ie)=>{G==null?F._vnode&&re(F._vnode,null,null,!0):b(F._vnode||null,G,F,null,null,null,ie),Ae||(Ae=!0,Dk(),W$(),Ae=!1),F._vnode=G},le={p:b,um:re,m:Y,r:fe,mt:V,mc:N,pc:B,pbc:$,n:be,o:e};let Ie,Fe;return{render:Oe,hydrate:Ie,createApp:yE(Oe,Ie)}}function op({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ho({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ME(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function db(e,t,n=!1){const i=e.children,o=t.children;if(Mt(i)&&Mt(o))for(let s=0;s<i.length;s++){const r=i[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=ho(o[s]),l.el=r.el),n||db(r,l)),l.type===Qd&&(l.el=r.el)}}function xE(e){const t=e.slice(),n=[0];let i,o,s,r,l;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(o=n[n.length-1],e[o]<u){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)l=s+r>>1,e[n[l]]<u?s=l+1:r=l;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function h5(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:h5(t)}const PE=e=>e.__isTeleport,ha=e=>e&&(e.disabled||e.disabled===""),Yk=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Jk=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,e2=(e,t)=>{const n=e&&e.to;return vn(n)?t?t(n):null:n},EE={name:"Teleport",__isTeleport:!0,process(e,t,n,i,o,s,r,l,a,u){const{mc:c,pc:d,pbc:p,o:{insert:g,querySelector:y,createText:b,createComment:m}}=u,v=ha(t.props);let{shapeFlag:S,children:k,dynamicChildren:C}=t;if(e==null){const P=t.el=b(""),w=t.anchor=b("");g(P,n,i),g(w,n,i);const x=t.target=e2(t.props,y),N=t.targetAnchor=b("");x&&(g(N,x),r==="svg"||Yk(x)?r="svg":(r==="mathml"||Jk(x))&&(r="mathml"));const E=($,T)=>{S&16&&c(k,$,T,o,s,r,l,a)};v?E(n,w):x&&E(x,N)}else{t.el=e.el;const P=t.anchor=e.anchor,w=t.target=e.target,x=t.targetAnchor=e.targetAnchor,N=ha(e.props),E=N?n:w,$=N?P:x;if(r==="svg"||Yk(w)?r="svg":(r==="mathml"||Jk(w))&&(r="mathml"),C?(p(e.dynamicChildren,C,E,o,s,r,l),db(e,t,!0)):a||d(e,t,E,$,o,s,r,l,!1),v)N?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):gu(t,n,P,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const T=t.target=e2(t.props,y);T&&gu(t,T,null,u,0)}else N&&gu(t,w,x,u,1)}m5(t)},remove(e,t,n,i,{um:o,o:{remove:s}},r){const{shapeFlag:l,children:a,anchor:u,targetAnchor:c,target:d,props:p}=e;if(d&&s(c),r&&s(u),l&16){const g=r||!ha(p);for(let y=0;y<a.length;y++){const b=a[y];o(b,t,n,g,!!b.dynamicChildren)}}},move:gu,hydrate:LE};function gu(e,t,n,{o:{insert:i},m:o},s=2){s===0&&i(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:a,children:u,props:c}=e,d=s===2;if(d&&i(r,t,n),(!d||ha(c))&&a&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);d&&i(l,t,n)}function LE(e,t,n,i,o,s,{o:{nextSibling:r,parentNode:l,querySelector:a}},u){const c=t.target=e2(t.props,a);if(c){const d=c._lpa||c.firstChild;if(t.shapeFlag&16)if(ha(t.props))t.anchor=u(r(e),t,l(e),n,i,o,s),t.targetAnchor=d;else{t.anchor=r(e);let p=d;for(;p;)if(p=r(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,c._lpa=t.targetAnchor&&r(t.targetAnchor);break}u(d,t,c,n,i,o,s)}m5(t)}return t.anchor&&r(t.anchor)}const Jd=EE;function m5(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const tt=Symbol.for("v-fgt"),Qd=Symbol.for("v-txt"),vi=Symbol.for("v-cmt"),ic=Symbol.for("v-stc"),ma=[];let Yi=null;function _(e=!1){ma.push(Yi=e?null:[])}function TE(){ma.pop(),Yi=ma[ma.length-1]||null}let Na=1;function Qk(e){Na+=e}function v5(e){return e.dynamicChildren=Na>0?Yi||al:null,TE(),Na>0&&Yi&&Yi.push(e),e}function L(e,t,n,i,o,s){return v5(A(e,t,n,i,o,s,!0))}function _e(e,t,n,i,o){return v5(h(e,t,n,i,o,!0))}function Qt(e){return e?e.__v_isVNode===!0:!1}function is(e,t){return e.type===t.type&&e.key===t.key}const g5=({key:e})=>e??null,rc=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?vn(e)||Nn(e)||Tt(e)?{i:Mn,r:e,k:t,f:!!n}:e:null);function A(e,t=null,n=null,i=0,o=null,s=e===tt?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&g5(t),ref:t&&rc(t),scopeId:K$,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Mn};return l?(fb(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=vn(n)?8:16),Na>0&&!r&&Yi&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Yi.push(a),a}const h=IE;function IE(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===Z$)&&(e=vi),Qt(e)){const l=Si(e,t,!0);return n&&fb(l,n),Na>0&&!s&&Yi&&(l.shapeFlag&6?Yi[Yi.indexOf(e)]=l:Yi.push(l)),l.patchFlag|=-2,l}if(jE(e)&&(e=e.__vccOpts),t){t=Wn(t);let{class:l,style:a}=t;l&&!vn(l)&&(t.class=M(l)),ln(a)&&(N$(a)&&!Mt(a)&&(a=kn({},a)),t.style=te(a))}const r=vn(e)?1:XP(e)?128:PE(e)?64:ln(e)?4:Tt(e)?2:0;return A(e,t,n,i,o,r,s,!0)}function Wn(e){return e?N$(e)||a5(e)?kn({},e):e:null}function Si(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:l,transition:a}=e,u=t?Pe(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&g5(u),ref:t&&t.ref?n&&s?Mt(s)?s.concat(rc(t)):[s,rc(t)]:rc(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tt?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Si(e.ssContent),ssFallback:e.ssFallback&&Si(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&(c.transition=a.clone(c)),c}function ut(e=" ",t=0){return h(Qd,null,e,t)}function ef(e,t){const n=h(ic,null,e);return n.staticCount=t,n}function he(e="",t=!1){return t?(_(),_e(vi,null,e)):h(vi,null,e)}function hr(e){return e==null||typeof e=="boolean"?h(vi):Mt(e)?h(tt,null,e.slice()):typeof e=="object"?ho(e):h(Qd,null,String(e))}function ho(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Si(e)}function fb(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Mt(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),fb(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!a5(t)?t._ctx=Mn:o===3&&Mn&&(Mn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Tt(t)?(t={default:t,_ctx:Mn},n=32):(t=String(t),i&64?(n=16,t=[ut(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pe(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=M([t.class,i.class]));else if(o==="style")t.style=te([t.style,i.style]);else if(Ud(o)){const s=t[o],r=i[o];r&&s!==r&&!(Mt(s)&&s.includes(r))&&(t[o]=s?[].concat(s,r):r)}else o!==""&&(t[o]=i[o])}return t}function dr(e,t,n,i=null){Bi(e,t,7,[n,i])}const AE=o5();let OE=0;function zE(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||AE,s={uid:OE++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new uP(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:c5(i,o),emitsOptions:q$(i,o),emit:null,emitted:null,propsDefaults:dn,inheritAttrs:i.inheritAttrs,ctx:dn,data:dn,props:dn,attrs:dn,slots:dn,refs:dn,setupState:dn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=WP.bind(null,s),e.ce&&e.ce(s),s}let Gn=null;const li=()=>Gn||Mn;let cd,t2;{const e=_$(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};cd=t("__VUE_INSTANCE_SETTERS__",n=>Gn=n),t2=t("__VUE_SSR_SETTERS__",n=>tf=n)}const Ha=e=>{const t=Gn;return cd(e),e.scope.on(),()=>{e.scope.off(),cd(t)}},e4=()=>{Gn&&Gn.scope.off(),cd(null)};function y5(e){return e.vnode.shapeFlag&4}let tf=!1;function NE(e,t=!1){t&&t2(t);const{props:n,children:i}=e.vnode,o=y5(e);bE(e,n,o,t),CE(e,i);const s=o?RE(e,t):void 0;return t&&t2(!1),s}function RE(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,dE);const{setup:i}=n;if(i){const o=e.setupContext=i.length>1?DE(e):null,s=Ha(e);zo();const r=So(i,e,0,[e.props,o]);if(No(),s(),g$(r)){if(r.then(e4,e4),t)return r.then(l=>{t4(e,l,t)}).catch(l=>{Kd(l,e,0)});e.asyncDep=r}else t4(e,r,t)}else b5(e,t)}function t4(e,t,n){Tt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ln(t)&&(e.setupState=j$(t)),b5(e,n)}let n4;function b5(e,t,n){const i=e.type;if(!e.render){if(!t&&n4&&!i.render){const o=i.template||ub(e).template;if(o){const{isCustomElement:s,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:a}=i,u=kn(kn({isCustomElement:s,delimiters:l},r),a);i.render=n4(o,u)}}e.render=i.render||Ni}{const o=Ha(e);zo();try{fE(e)}finally{No(),o()}}}const BE={get(e,t){return Ci(e,"get",""),e[t]}};function DE(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,BE),slots:e.slots,emit:e.emit,expose:t}}function nf(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(j$(AP(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fa)return fa[n](e)},has(t,n){return n in t||n in fa}}))}function FE(e,t=!0){return Tt(e)?e.displayName||e.name:e.name||t&&e.__name}function jE(e){return Tt(e)&&"__vccOpts"in e}const f=(e,t)=>OP(e,t,tf);function xi(e,t,n){const i=arguments.length;return i===2?ln(t)&&!Mt(t)?Qt(t)?h(e,null,[t]):h(e,t):h(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qt(n)&&(n=[n]),h(e,t,n))}const VE="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const UE="http://www.w3.org/2000/svg",HE="http://www.w3.org/1998/Math/MathML",mo=typeof document<"u"?document:null,i4=mo&&mo.createElement("template"),WE={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?mo.createElementNS(UE,e):t==="mathml"?mo.createElementNS(HE,e):mo.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>mo.createTextNode(e),createComment:e=>mo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{i4.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const l=i4.content;if(i==="svg"||i==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},eo="transition",Gl="animation",_l=Symbol("_vtc"),Zn=(e,{slots:t})=>xi(nE,_5(e),t);Zn.displayName="Transition";const k5={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},GE=Zn.props=kn({},Q$,k5),Wo=(e,t=[])=>{Mt(e)?e.forEach(n=>n(...t)):e&&e(...t)},r4=e=>e?Mt(e)?e.some(t=>t.length>1):e.length>1:!1;function _5(e){const t={};for(const U in e)U in k5||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:u=r,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,y=qE(o),b=y&&y[0],m=y&&y[1],{onBeforeEnter:v,onEnter:S,onEnterCancelled:k,onLeave:C,onLeaveCancelled:P,onBeforeAppear:w=v,onAppear:x=S,onAppearCancelled:N=k}=t,E=(U,R,V)=>{uo(U,R?c:l),uo(U,R?u:r),V&&V()},$=(U,R)=>{U._isLeaving=!1,uo(U,d),uo(U,g),uo(U,p),R&&R()},T=U=>(R,V)=>{const Z=U?x:S,W=()=>E(R,U,V);Wo(Z,[R,W]),o4(()=>{uo(R,U?a:s),Br(R,U?c:l),r4(Z)||s4(R,i,b,W)})};return kn(t,{onBeforeEnter(U){Wo(v,[U]),Br(U,s),Br(U,r)},onBeforeAppear(U){Wo(w,[U]),Br(U,a),Br(U,u)},onEnter:T(!1),onAppear:T(!0),onLeave(U,R){U._isLeaving=!0;const V=()=>$(U,R);Br(U,d),Br(U,p),S5(),o4(()=>{U._isLeaving&&(uo(U,d),Br(U,g),r4(C)||s4(U,i,m,V))}),Wo(C,[U,V])},onEnterCancelled(U){E(U,!1),Wo(k,[U])},onAppearCancelled(U){E(U,!0),Wo(N,[U])},onLeaveCancelled(U){$(U),Wo(P,[U])}})}function qE(e){if(e==null)return null;if(ln(e))return[sp(e.enter),sp(e.leave)];{const t=sp(e);return[t,t]}}function sp(e){return nP(e)}function Br(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[_l]||(e[_l]=new Set)).add(t)}function uo(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[_l];n&&(n.delete(t),n.size||(e[_l]=void 0))}function o4(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let KE=0;function s4(e,t,n,i){const o=e._endId=++KE,s=()=>{o===e._endId&&i()};if(n)return setTimeout(s,n);const{type:r,timeout:l,propCount:a}=C5(e,t);if(!r)return i();const u=r+"end";let c=0;const d=()=>{e.removeEventListener(u,p),s()},p=g=>{g.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,p)}function C5(e,t){const n=window.getComputedStyle(e),i=y=>(n[y]||"").split(", "),o=i(`${eo}Delay`),s=i(`${eo}Duration`),r=l4(o,s),l=i(`${Gl}Delay`),a=i(`${Gl}Duration`),u=l4(l,a);let c=null,d=0,p=0;t===eo?r>0&&(c=eo,d=r,p=s.length):t===Gl?u>0&&(c=Gl,d=u,p=a.length):(d=Math.max(r,u),c=d>0?r>u?eo:Gl:null,p=c?c===eo?s.length:a.length:0);const g=c===eo&&/\b(transform|all)(,|$)/.test(i(`${eo}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:g}}function l4(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>a4(n)+a4(e[i])))}function a4(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function S5(){return document.body.offsetHeight}function ZE(e,t,n){const i=e[_l];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const dd=Symbol("_vod"),w5=Symbol("_vsh"),Fi={beforeMount(e,{value:t},{transition:n}){e[dd]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ql(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),ql(e,!0),i.enter(e)):i.leave(e,()=>{ql(e,!1)}):ql(e,t))},beforeUnmount(e,{value:t}){ql(e,t)}};function ql(e,t){e.style.display=t?e[dd]:"none",e[w5]=!t}const XE=Symbol(""),YE=/(^|;)\s*display\s*:/;function JE(e,t,n){const i=e.style,o=vn(n);let s=!1;if(n&&!o){if(t)if(vn(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&oc(i,l,"")}else for(const r in t)n[r]==null&&oc(i,r,"");for(const r in n)r==="display"&&(s=!0),oc(i,r,n[r])}else if(o){if(t!==n){const r=i[XE];r&&(n+=";"+r),i.cssText=n,s=YE.test(n)}}else t&&e.removeAttribute("style");dd in e&&(e[dd]=s?i.display:"",e[w5]&&(i.display="none"))}const u4=/\s*!important$/;function oc(e,t,n){if(Mt(n))n.forEach(i=>oc(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=QE(e,t);u4.test(n)?e.setProperty(xs(i),n.replace(u4,""),"important"):e[i]=n}}const c4=["Webkit","Moz","ms"],lp={};function QE(e,t){const n=lp[t];if(n)return n;let i=Sr(t);if(i!=="filter"&&i in e)return lp[t]=i;i=Gd(i);for(let o=0;o<c4.length;o++){const s=c4[o]+i;if(s in e)return lp[t]=s}return t}const d4="http://www.w3.org/1999/xlink";function e7(e,t,n,i,o){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(d4,t.slice(6,t.length)):e.setAttributeNS(d4,t,n);else{const s=aP(t);n==null||s&&!C$(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function t7(e,t,n,i,o,s,r){if(t==="innerHTML"||t==="textContent"){i&&r(i,o,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=C$(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function n7(e,t,n,i){e.addEventListener(t,n,i)}function i7(e,t,n,i){e.removeEventListener(t,n,i)}const f4=Symbol("_vei");function r7(e,t,n,i,o=null){const s=e[f4]||(e[f4]={}),r=s[t];if(i&&r)r.value=i;else{const[l,a]=o7(t);if(i){const u=s[t]=a7(i,o);n7(e,l,u,a)}else r&&(i7(e,l,r,a),s[t]=void 0)}}const p4=/(?:Once|Passive|Capture)$/;function o7(e){let t;if(p4.test(e)){t={};let i;for(;i=e.match(p4);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xs(e.slice(2)),t]}let ap=0;const s7=Promise.resolve(),l7=()=>ap||(s7.then(()=>ap=0),ap=Date.now());function a7(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Bi(u7(i,n.value),t,5,[i])};return n.value=e,n.attached=l7(),n}function u7(e,t){if(Mt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const h4=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,c7=(e,t,n,i,o,s,r,l,a)=>{const u=o==="svg";t==="class"?ZE(e,i,u):t==="style"?JE(e,n,i):Ud(t)?q2(t)||r7(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):d7(e,t,i,u))?t7(e,t,i,s,r,l,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),e7(e,t,i,u))};function d7(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&h4(t)&&Tt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return h4(t)&&vn(n)?!1:t in e}const $5=new WeakMap,M5=new WeakMap,fd=Symbol("_moveCb"),m4=Symbol("_enterCb"),x5={name:"TransitionGroup",props:kn({},GE,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=li(),i=J$();let o,s;return si(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!v7(o[0].el,n.vnode.el,r))return;o.forEach(p7),o.forEach(h7);const l=o.filter(m7);S5(),l.forEach(a=>{const u=a.el,c=u.style;Br(u,r),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[fd]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",d),u[fd]=null,uo(u,r))};u.addEventListener("transitionend",d)})}),()=>{const r=Wt(e),l=_5(r);let a=r.tag||tt;if(o=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(o.push(c),za(c,Oa(c,l,i,n)),$5.set(c,c.el.getBoundingClientRect()))}s=t.default?ab(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&za(c,Oa(c,l,i,n))}return h(a,null,s)}}},f7=e=>delete e.mode;x5.props;const Wa=x5;function p7(e){const t=e.el;t[fd]&&t[fd](),t[m4]&&t[m4]()}function h7(e){M5.set(e,e.el.getBoundingClientRect())}function m7(e){const t=$5.get(e),n=M5.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${o}px)`,s.transitionDuration="0s",e}}function v7(e,t,n){const i=e.cloneNode(),o=e[_l];o&&o.forEach(l=>{l.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&i.classList.add(l)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=C5(i);return s.removeChild(i),r}const g7=["ctrl","shift","alt","meta"],y7={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>g7.some(n=>e[`${n}Key`]&&!t.includes(n))},Pi=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(o,...s)=>{for(let r=0;r<t.length;r++){const l=y7[t[r]];if(l&&l(o,t))return}return e(o,...s)})},b7={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ol=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=o=>{if(!("key"in o))return;const s=xs(o.key);if(t.some(r=>r===s||b7[r]===s))return e(o)})},k7=kn({patchProp:c7},WE);let v4;function P5(){return v4||(v4=wE(k7))}const xo=(...e)=>{P5().render(...e)},pb=(...e)=>{const t=P5().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=C7(i);if(!o)return;const s=t._component;!Tt(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const r=n(o,!1,_7(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function _7(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function C7(e){return vn(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hb="164",Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S7=0,g4=1,w7=2,E5=1,$7=2,Dr=3,Po=0,bi=1,Fr=2,wo=0,dl=1,y4=2,b4=3,k4=4,M7=5,rs=100,x7=101,P7=102,E7=103,L7=104,T7=200,I7=201,A7=202,O7=203,n2=204,i2=205,z7=206,N7=207,R7=208,B7=209,D7=210,F7=211,j7=212,V7=213,U7=214,H7=0,W7=1,G7=2,pd=3,q7=4,K7=5,Z7=6,X7=7,mb=0,Y7=1,J7=2,$o=0,Q7=1,eL=2,tL=3,nL=4,iL=5,rL=6,oL=7,L5=300,Cl=301,Sl=302,r2=303,o2=304,rf=306,s2=1e3,ls=1001,l2=1002,Ri=1003,sL=1004,yu=1005,Xi=1006,up=1007,as=1008,Eo=1009,lL=1010,aL=1011,T5=1012,I5=1013,wl=1014,ko=1015,of=1016,A5=1017,O5=1018,Ga=1020,uL=35902,cL=1021,dL=1022,br=1023,fL=1024,pL=1025,fl=1026,Ra=1027,hL=1028,z5=1029,mL=1030,N5=1031,R5=1033,cp=33776,dp=33777,fp=33778,pp=33779,_4=35840,C4=35841,S4=35842,w4=35843,$4=36196,M4=37492,x4=37496,P4=37808,E4=37809,L4=37810,T4=37811,I4=37812,A4=37813,O4=37814,z4=37815,N4=37816,R4=37817,B4=37818,D4=37819,F4=37820,j4=37821,hp=36492,V4=36494,U4=36495,vL=36283,H4=36284,W4=36285,G4=36286,gL=3200,yL=3201,B5=0,bL=1,yo="",pr="srgb",Ro="srgb-linear",vb="display-p3",sf="display-p3-linear",hd="linear",cn="srgb",md="rec709",vd="p3",Ds=7680,q4=519,kL=512,_L=513,CL=514,D5=515,SL=516,wL=517,$L=518,ML=519,K4=35044,Z4="300 es",Vr=2e3,gd=2001;class Ps{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X4=1234567;const va=Math.PI/180,Ba=180/Math.PI;function El(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qn[e&255]+Qn[e>>8&255]+Qn[e>>16&255]+Qn[e>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[n&63|128]+Qn[n>>8&255]+"-"+Qn[n>>16&255]+Qn[n>>24&255]+Qn[i&255]+Qn[i>>8&255]+Qn[i>>16&255]+Qn[i>>24&255]).toLowerCase()}function ni(e,t,n){return Math.max(t,Math.min(n,e))}function gb(e,t){return(e%t+t)%t}function xL(e,t,n,i,o){return i+(e-t)*(o-i)/(n-t)}function PL(e,t,n){return e!==t?(n-e)/(t-e):0}function ga(e,t,n){return(1-n)*e+n*t}function EL(e,t,n,i){return ga(e,t,1-Math.exp(-n*i))}function LL(e,t=1){return t-Math.abs(gb(e,t*2)-t)}function TL(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function IL(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function AL(e,t){return e+Math.floor(Math.random()*(t-e+1))}function OL(e,t){return e+Math.random()*(t-e)}function zL(e){return e*(.5-Math.random())}function NL(e){e!==void 0&&(X4=e);let t=X4+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function RL(e){return e*va}function BL(e){return e*Ba}function DL(e){return(e&e-1)===0&&e!==0}function FL(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function jL(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function VL(e,t,n,i,o){const s=Math.cos,r=Math.sin,l=s(n/2),a=r(n/2),u=s((t+i)/2),c=r((t+i)/2),d=s((t-i)/2),p=r((t-i)/2),g=s((i-t)/2),y=r((i-t)/2);switch(o){case"XYX":e.set(l*c,a*d,a*p,l*u);break;case"YZY":e.set(a*p,l*c,a*d,l*u);break;case"ZXZ":e.set(a*d,a*p,l*c,l*u);break;case"XZX":e.set(l*c,a*y,a*g,l*u);break;case"YXY":e.set(a*g,l*c,a*y,l*u);break;case"ZYZ":e.set(a*y,a*g,l*c,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function il(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ci(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const UL={DEG2RAD:va,RAD2DEG:Ba,generateUUID:El,clamp:ni,euclideanModulo:gb,mapLinear:xL,inverseLerp:PL,lerp:ga,damp:EL,pingpong:LL,smoothstep:TL,smootherstep:IL,randInt:AL,randFloat:OL,randFloatSpread:zL,seededRandom:NL,degToRad:RL,radToDeg:BL,isPowerOfTwo:DL,ceilPowerOfTwo:FL,floorPowerOfTwo:jL,setQuaternionFromProperEuler:VL,normalize:ci,denormalize:il};class Lt{constructor(t=0,n=0){Lt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,o=t.elements;return this.x=o[0]*n+o[3]*i+o[6],this.y=o[1]*n+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ni(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),o=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*o+t.x,this.y=s*o+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,n,i,o,s,r,l,a,u){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,o,s,r,l,a,u)}set(t,n,i,o,s,r,l,a,u){const c=this.elements;return c[0]=t,c[1]=o,c[2]=l,c[3]=n,c[4]=s,c[5]=a,c[6]=i,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,o=n.elements,s=this.elements,r=i[0],l=i[3],a=i[6],u=i[1],c=i[4],d=i[7],p=i[2],g=i[5],y=i[8],b=o[0],m=o[3],v=o[6],S=o[1],k=o[4],C=o[7],P=o[2],w=o[5],x=o[8];return s[0]=r*b+l*S+a*P,s[3]=r*m+l*k+a*w,s[6]=r*v+l*C+a*x,s[1]=u*b+c*S+d*P,s[4]=u*m+c*k+d*w,s[7]=u*v+c*C+d*x,s[2]=p*b+g*S+y*P,s[5]=p*m+g*k+y*w,s[8]=p*v+g*C+y*x,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],o=t[2],s=t[3],r=t[4],l=t[5],a=t[6],u=t[7],c=t[8];return n*r*c-n*l*u-i*s*c+i*l*a+o*s*u-o*r*a}invert(){const t=this.elements,n=t[0],i=t[1],o=t[2],s=t[3],r=t[4],l=t[5],a=t[6],u=t[7],c=t[8],d=c*r-l*u,p=l*a-c*s,g=u*s-r*a,y=n*d+i*p+o*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=d*b,t[1]=(o*u-c*i)*b,t[2]=(l*i-o*r)*b,t[3]=p*b,t[4]=(c*n-o*a)*b,t[5]=(o*s-l*n)*b,t[6]=g*b,t[7]=(i*a-u*n)*b,t[8]=(r*n-i*s)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,o,s,r,l){const a=Math.cos(s),u=Math.sin(s);return this.set(i*a,i*u,-i*(a*r+u*l)+r+t,-o*u,o*a,-o*(-u*r+a*l)+l+n,0,0,1),this}scale(t,n){return this.premultiply(mp.makeScale(t,n)),this}rotate(t){return this.premultiply(mp.makeRotation(-t)),this}translate(t,n){return this.premultiply(mp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let o=0;o<9;o++)if(n[o]!==i[o])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mp=new Nt;function F5(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yd(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function HL(){const e=yd("canvas");return e.style.display="block",e}const Y4={};function WL(e){e in Y4||(Y4[e]=!0,console.warn(e))}const J4=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Q4=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bu={[Ro]:{transfer:hd,primaries:md,toReference:e=>e,fromReference:e=>e},[pr]:{transfer:cn,primaries:md,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[sf]:{transfer:hd,primaries:vd,toReference:e=>e.applyMatrix3(Q4),fromReference:e=>e.applyMatrix3(J4)},[vb]:{transfer:cn,primaries:vd,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Q4),fromReference:e=>e.applyMatrix3(J4).convertLinearToSRGB()}},GL=new Set([Ro,sf]),Jt={enabled:!0,_workingColorSpace:Ro,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!GL.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=bu[t].toReference,o=bu[n].fromReference;return o(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return bu[e].primaries},getTransfer:function(e){return e===yo?hd:bu[e].transfer}};function pl(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vp(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Fs;class qL{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=yd("canvas")),Fs.width=t.width,Fs.height=t.height;const i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=yd("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=pl(s[r]/255)*255;return i.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pl(n[i]/255)*255):n[i]=pl(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KL=0;class j5{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KL++}),this.uuid=El(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,l=o.length;r<l;r++)o[r].isDataTexture?s.push(gp(o[r].image)):s.push(gp(o[r]))}else s=gp(o);i.url=s}return n||(t.images[this.uuid]=i),i}}function gp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?qL.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZL=0;class ki extends Ps{constructor(t=ki.DEFAULT_IMAGE,n=ki.DEFAULT_MAPPING,i=ls,o=ls,s=Xi,r=as,l=br,a=Eo,u=ki.DEFAULT_ANISOTROPY,c=yo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZL++}),this.uuid=El(),this.name="",this.source=new j5(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L5)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case s2:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case l2:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case s2:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case l2:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=L5;ki.DEFAULT_ANISOTROPY=1;class On{constructor(t=0,n=0,i=0,o=1){On.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,o){return this.x=t,this.y=n,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*o+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,o,s;const a=t.elements,u=a[0],c=a[4],d=a[8],p=a[1],g=a[5],y=a[9],b=a[2],m=a[6],v=a[10];if(Math.abs(c-p)<.01&&Math.abs(d-b)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(d+b)<.1&&Math.abs(y+m)<.1&&Math.abs(u+g+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(u+1)/2,C=(g+1)/2,P=(v+1)/2,w=(c+p)/4,x=(d+b)/4,N=(y+m)/4;return k>C&&k>P?k<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(k),o=w/i,s=x/i):C>P?C<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(C),i=w/o,s=N/o):P<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(P),i=x/s,o=N/s),this.set(i,o,s,n),this}let S=Math.sqrt((m-y)*(m-y)+(d-b)*(d-b)+(p-c)*(p-c));return Math.abs(S)<.001&&(S=1),this.x=(m-y)/S,this.y=(d-b)/S,this.z=(p-c)/S,this.w=Math.acos((u+g+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XL extends Ps{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new On(0,0,t,n),this.scissorTest=!1,this.viewport=new On(0,0,t,n);const o={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ki(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let l=0;l<r;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new j5(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends XL{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class V5 extends ki{constructor(t=null,n=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YL extends ki{constructor(t=null,n=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(t=0,n=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=o}static slerpFlat(t,n,i,o,s,r,l){let a=i[o+0],u=i[o+1],c=i[o+2],d=i[o+3];const p=s[r+0],g=s[r+1],y=s[r+2],b=s[r+3];if(l===0){t[n+0]=a,t[n+1]=u,t[n+2]=c,t[n+3]=d;return}if(l===1){t[n+0]=p,t[n+1]=g,t[n+2]=y,t[n+3]=b;return}if(d!==b||a!==p||u!==g||c!==y){let m=1-l;const v=a*p+u*g+c*y+d*b,S=v>=0?1:-1,k=1-v*v;if(k>Number.EPSILON){const P=Math.sqrt(k),w=Math.atan2(P,v*S);m=Math.sin(m*w)/P,l=Math.sin(l*w)/P}const C=l*S;if(a=a*m+p*C,u=u*m+g*C,c=c*m+y*C,d=d*m+b*C,m===1-l){const P=1/Math.sqrt(a*a+u*u+c*c+d*d);a*=P,u*=P,c*=P,d*=P}}t[n]=a,t[n+1]=u,t[n+2]=c,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,o,s,r){const l=i[o],a=i[o+1],u=i[o+2],c=i[o+3],d=s[r],p=s[r+1],g=s[r+2],y=s[r+3];return t[n]=l*y+c*d+a*g-u*p,t[n+1]=a*y+c*p+u*d-l*g,t[n+2]=u*y+c*g+l*p-a*d,t[n+3]=c*y-l*d-a*p-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,o){return this._x=t,this._y=n,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,o=t._y,s=t._z,r=t._order,l=Math.cos,a=Math.sin,u=l(i/2),c=l(o/2),d=l(s/2),p=a(i/2),g=a(o/2),y=a(s/2);switch(r){case"XYZ":this._x=p*c*d+u*g*y,this._y=u*g*d-p*c*y,this._z=u*c*y+p*g*d,this._w=u*c*d-p*g*y;break;case"YXZ":this._x=p*c*d+u*g*y,this._y=u*g*d-p*c*y,this._z=u*c*y-p*g*d,this._w=u*c*d+p*g*y;break;case"ZXY":this._x=p*c*d-u*g*y,this._y=u*g*d+p*c*y,this._z=u*c*y+p*g*d,this._w=u*c*d-p*g*y;break;case"ZYX":this._x=p*c*d-u*g*y,this._y=u*g*d+p*c*y,this._z=u*c*y-p*g*d,this._w=u*c*d+p*g*y;break;case"YZX":this._x=p*c*d+u*g*y,this._y=u*g*d+p*c*y,this._z=u*c*y-p*g*d,this._w=u*c*d-p*g*y;break;case"XZY":this._x=p*c*d-u*g*y,this._y=u*g*d-p*c*y,this._z=u*c*y+p*g*d,this._w=u*c*d+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],o=n[4],s=n[8],r=n[1],l=n[5],a=n[9],u=n[2],c=n[6],d=n[10],p=i+l+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(c-a)*g,this._y=(s-u)*g,this._z=(r-o)*g}else if(i>l&&i>d){const g=2*Math.sqrt(1+i-l-d);this._w=(c-a)/g,this._x=.25*g,this._y=(o+r)/g,this._z=(s+u)/g}else if(l>d){const g=2*Math.sqrt(1+l-i-d);this._w=(s-u)/g,this._x=(o+r)/g,this._y=.25*g,this._z=(a+c)/g}else{const g=2*Math.sqrt(1+d-i-l);this._w=(r-o)/g,this._x=(s+u)/g,this._y=(a+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ni(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,n/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,o=t._y,s=t._z,r=t._w,l=n._x,a=n._y,u=n._z,c=n._w;return this._x=i*c+r*l+o*u-s*a,this._y=o*c+r*a+s*l-i*u,this._z=s*c+r*u+i*a-o*l,this._w=r*c-i*l-o*a-s*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,r=this._w;let l=r*t._w+i*t._x+o*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const a=1-l*l;if(a<=Number.EPSILON){const g=1-n;return this._w=g*r+n*this._w,this._x=g*i+n*this._x,this._y=g*o+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(a),c=Math.atan2(u,l),d=Math.sin((1-n)*c)/u,p=Math.sin(n*c)/u;return this._w=r*d+this._w*p,this._x=i*d+this._x*p,this._y=o*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Te{constructor(t=0,n=0,i=0){Te.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(e3.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(e3.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*o,this.y=s[1]*n+s[4]*i+s[7]*o,this.z=s[2]*n+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,o=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,o=this.z,s=t.x,r=t.y,l=t.z,a=t.w,u=2*(r*o-l*i),c=2*(l*n-s*o),d=2*(s*i-r*n);return this.x=n+a*u+r*d-l*c,this.y=i+a*c+l*u-s*d,this.z=o+a*d+s*c-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*o,this.y=s[1]*n+s[5]*i+s[9]*o,this.z=s[2]*n+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,o=t.y,s=t.z,r=n.x,l=n.y,a=n.z;return this.x=o*a-s*l,this.y=s*r-i*a,this.z=i*l-o*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yp.copy(this).projectOnVector(t),this.sub(yp)}reflect(t){return this.sub(yp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ni(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return n*n+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const o=Math.sin(n)*t;return this.x=o*Math.sin(i),this.y=Math.cos(n)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yp=new Te,e3=new Lo;class qa{constructor(t=new Te(1/0,1/0,1/0),n=new Te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,l=s.count;r<l;r++)t.isMesh===!0?t.getVertexPosition(r,Wi):Wi.fromBufferAttribute(s,r),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ku.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ku.copy(i.boundingBox)),ku.applyMatrix4(t.matrixWorld),this.union(ku)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kl),_u.subVectors(this.max,Kl),js.subVectors(t.a,Kl),Vs.subVectors(t.b,Kl),Us.subVectors(t.c,Kl),to.subVectors(Vs,js),no.subVectors(Us,Vs),Go.subVectors(js,Us);let n=[0,-to.z,to.y,0,-no.z,no.y,0,-Go.z,Go.y,to.z,0,-to.x,no.z,0,-no.x,Go.z,0,-Go.x,-to.y,to.x,0,-no.y,no.x,0,-Go.y,Go.x,0];return!bp(n,js,Vs,Us,_u)||(n=[1,0,0,0,1,0,0,0,1],!bp(n,js,Vs,Us,_u))?!1:(Cu.crossVectors(to,no),n=[Cu.x,Cu.y,Cu.z],bp(n,js,Vs,Us,_u))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ar=[new Te,new Te,new Te,new Te,new Te,new Te,new Te,new Te],Wi=new Te,ku=new qa,js=new Te,Vs=new Te,Us=new Te,to=new Te,no=new Te,Go=new Te,Kl=new Te,_u=new Te,Cu=new Te,qo=new Te;function bp(e,t,n,i,o){for(let s=0,r=e.length-3;s<=r;s+=3){qo.fromArray(e,s);const l=o.x*Math.abs(qo.x)+o.y*Math.abs(qo.y)+o.z*Math.abs(qo.z),a=t.dot(qo),u=n.dot(qo),c=i.dot(qo);if(Math.max(-Math.max(a,u,c),Math.min(a,u,c))>l)return!1}return!0}const JL=new qa,Zl=new Te,kp=new Te;class lf{constructor(t=new Te,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):JL.setFromPoints(t).getCenter(i);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zl.subVectors(t,this.center);const n=Zl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),o=(i-this.radius)*.5;this.center.addScaledVector(Zl,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zl.copy(t.center).add(kp)),this.expandByPoint(Zl.copy(t.center).sub(kp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Or=new Te,_p=new Te,Su=new Te,io=new Te,Cp=new Te,wu=new Te,Sp=new Te;class yb{constructor(t=new Te,n=new Te(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Or)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Or.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Or.copy(this.origin).addScaledVector(this.direction,n),Or.distanceToSquared(t))}distanceSqToSegment(t,n,i,o){_p.copy(t).add(n).multiplyScalar(.5),Su.copy(n).sub(t).normalize(),io.copy(this.origin).sub(_p);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Su),l=io.dot(this.direction),a=-io.dot(Su),u=io.lengthSq(),c=Math.abs(1-r*r);let d,p,g,y;if(c>0)if(d=r*a-l,p=r*l-a,y=s*c,d>=0)if(p>=-y)if(p<=y){const b=1/c;d*=b,p*=b,g=d*(d+r*p+2*l)+p*(r*d+p+2*a)+u}else p=s,d=Math.max(0,-(r*p+l)),g=-d*d+p*(p+2*a)+u;else p=-s,d=Math.max(0,-(r*p+l)),g=-d*d+p*(p+2*a)+u;else p<=-y?(d=Math.max(0,-(-r*s+l)),p=d>0?-s:Math.min(Math.max(-s,-a),s),g=-d*d+p*(p+2*a)+u):p<=y?(d=0,p=Math.min(Math.max(-s,-a),s),g=p*(p+2*a)+u):(d=Math.max(0,-(r*s+l)),p=d>0?s:Math.min(Math.max(-s,-a),s),g=-d*d+p*(p+2*a)+u);else p=r>0?-s:s,d=Math.max(0,-(r*p+l)),g=-d*d+p*(p+2*a)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(_p).addScaledVector(Su,p),g}intersectSphere(t,n){Or.subVectors(t.center,this.origin);const i=Or.dot(this.direction),o=Or.dot(Or)-i*i,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),l=i-r,a=i+r;return a<0?null:l<0?this.at(a,n):this.at(l,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,o,s,r,l,a;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(i=(t.min.x-p.x)*u,o=(t.max.x-p.x)*u):(i=(t.max.x-p.x)*u,o=(t.min.x-p.x)*u),c>=0?(s=(t.min.y-p.y)*c,r=(t.max.y-p.y)*c):(s=(t.max.y-p.y)*c,r=(t.min.y-p.y)*c),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),d>=0?(l=(t.min.z-p.z)*d,a=(t.max.z-p.z)*d):(l=(t.max.z-p.z)*d,a=(t.min.z-p.z)*d),i>a||l>o)||((l>i||i!==i)&&(i=l),(a<o||o!==o)&&(o=a),o<0)?null:this.at(i>=0?i:o,n)}intersectsBox(t){return this.intersectBox(t,Or)!==null}intersectTriangle(t,n,i,o,s){Cp.subVectors(n,t),wu.subVectors(i,t),Sp.crossVectors(Cp,wu);let r=this.direction.dot(Sp),l;if(r>0){if(o)return null;l=1}else if(r<0)l=-1,r=-r;else return null;io.subVectors(this.origin,t);const a=l*this.direction.dot(wu.crossVectors(io,wu));if(a<0)return null;const u=l*this.direction.dot(Cp.cross(io));if(u<0||a+u>r)return null;const c=-l*io.dot(Sp);return c<0?null:this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(t,n,i,o,s,r,l,a,u,c,d,p,g,y,b,m){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,o,s,r,l,a,u,c,d,p,g,y,b,m)}set(t,n,i,o,s,r,l,a,u,c,d,p,g,y,b,m){const v=this.elements;return v[0]=t,v[4]=n,v[8]=i,v[12]=o,v[1]=s,v[5]=r,v[9]=l,v[13]=a,v[2]=u,v[6]=c,v[10]=d,v[14]=p,v[3]=g,v[7]=y,v[11]=b,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,o=1/Hs.setFromMatrixColumn(t,0).length(),s=1/Hs.setFromMatrixColumn(t,1).length(),r=1/Hs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*o,n[1]=i[1]*o,n[2]=i[2]*o,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,o=t.y,s=t.z,r=Math.cos(i),l=Math.sin(i),a=Math.cos(o),u=Math.sin(o),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=r*c,g=r*d,y=l*c,b=l*d;n[0]=a*c,n[4]=-a*d,n[8]=u,n[1]=g+y*u,n[5]=p-b*u,n[9]=-l*a,n[2]=b-p*u,n[6]=y+g*u,n[10]=r*a}else if(t.order==="YXZ"){const p=a*c,g=a*d,y=u*c,b=u*d;n[0]=p+b*l,n[4]=y*l-g,n[8]=r*u,n[1]=r*d,n[5]=r*c,n[9]=-l,n[2]=g*l-y,n[6]=b+p*l,n[10]=r*a}else if(t.order==="ZXY"){const p=a*c,g=a*d,y=u*c,b=u*d;n[0]=p-b*l,n[4]=-r*d,n[8]=y+g*l,n[1]=g+y*l,n[5]=r*c,n[9]=b-p*l,n[2]=-r*u,n[6]=l,n[10]=r*a}else if(t.order==="ZYX"){const p=r*c,g=r*d,y=l*c,b=l*d;n[0]=a*c,n[4]=y*u-g,n[8]=p*u+b,n[1]=a*d,n[5]=b*u+p,n[9]=g*u-y,n[2]=-u,n[6]=l*a,n[10]=r*a}else if(t.order==="YZX"){const p=r*a,g=r*u,y=l*a,b=l*u;n[0]=a*c,n[4]=b-p*d,n[8]=y*d+g,n[1]=d,n[5]=r*c,n[9]=-l*c,n[2]=-u*c,n[6]=g*d+y,n[10]=p-b*d}else if(t.order==="XZY"){const p=r*a,g=r*u,y=l*a,b=l*u;n[0]=a*c,n[4]=-d,n[8]=u*c,n[1]=p*d+b,n[5]=r*c,n[9]=g*d-y,n[2]=y*d-g,n[6]=l*c,n[10]=b*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(QL,t,e9)}lookAt(t,n,i){const o=this.elements;return wi.subVectors(t,n),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),ro.crossVectors(i,wi),ro.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),ro.crossVectors(i,wi)),ro.normalize(),$u.crossVectors(wi,ro),o[0]=ro.x,o[4]=$u.x,o[8]=wi.x,o[1]=ro.y,o[5]=$u.y,o[9]=wi.y,o[2]=ro.z,o[6]=$u.z,o[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,o=n.elements,s=this.elements,r=i[0],l=i[4],a=i[8],u=i[12],c=i[1],d=i[5],p=i[9],g=i[13],y=i[2],b=i[6],m=i[10],v=i[14],S=i[3],k=i[7],C=i[11],P=i[15],w=o[0],x=o[4],N=o[8],E=o[12],$=o[1],T=o[5],U=o[9],R=o[13],V=o[2],Z=o[6],W=o[10],j=o[14],B=o[3],K=o[7],I=o[11],Y=o[15];return s[0]=r*w+l*$+a*V+u*B,s[4]=r*x+l*T+a*Z+u*K,s[8]=r*N+l*U+a*W+u*I,s[12]=r*E+l*R+a*j+u*Y,s[1]=c*w+d*$+p*V+g*B,s[5]=c*x+d*T+p*Z+g*K,s[9]=c*N+d*U+p*W+g*I,s[13]=c*E+d*R+p*j+g*Y,s[2]=y*w+b*$+m*V+v*B,s[6]=y*x+b*T+m*Z+v*K,s[10]=y*N+b*U+m*W+v*I,s[14]=y*E+b*R+m*j+v*Y,s[3]=S*w+k*$+C*V+P*B,s[7]=S*x+k*T+C*Z+P*K,s[11]=S*N+k*U+C*W+P*I,s[15]=S*E+k*R+C*j+P*Y,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],o=t[8],s=t[12],r=t[1],l=t[5],a=t[9],u=t[13],c=t[2],d=t[6],p=t[10],g=t[14],y=t[3],b=t[7],m=t[11],v=t[15];return y*(+s*a*d-o*u*d-s*l*p+i*u*p+o*l*g-i*a*g)+b*(+n*a*g-n*u*p+s*r*p-o*r*g+o*u*c-s*a*c)+m*(+n*u*d-n*l*g-s*r*d+i*r*g+s*l*c-i*u*c)+v*(-o*l*c-n*a*d+n*l*p+o*r*d-i*r*p+i*a*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],o=t[2],s=t[3],r=t[4],l=t[5],a=t[6],u=t[7],c=t[8],d=t[9],p=t[10],g=t[11],y=t[12],b=t[13],m=t[14],v=t[15],S=d*m*u-b*p*u+b*a*g-l*m*g-d*a*v+l*p*v,k=y*p*u-c*m*u-y*a*g+r*m*g+c*a*v-r*p*v,C=c*b*u-y*d*u+y*l*g-r*b*g-c*l*v+r*d*v,P=y*d*a-c*b*a-y*l*p+r*b*p+c*l*m-r*d*m,w=n*S+i*k+o*C+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/w;return t[0]=S*x,t[1]=(b*p*s-d*m*s-b*o*g+i*m*g+d*o*v-i*p*v)*x,t[2]=(l*m*s-b*a*s+b*o*u-i*m*u-l*o*v+i*a*v)*x,t[3]=(d*a*s-l*p*s-d*o*u+i*p*u+l*o*g-i*a*g)*x,t[4]=k*x,t[5]=(c*m*s-y*p*s+y*o*g-n*m*g-c*o*v+n*p*v)*x,t[6]=(y*a*s-r*m*s-y*o*u+n*m*u+r*o*v-n*a*v)*x,t[7]=(r*p*s-c*a*s+c*o*u-n*p*u-r*o*g+n*a*g)*x,t[8]=C*x,t[9]=(y*d*s-c*b*s-y*i*g+n*b*g+c*i*v-n*d*v)*x,t[10]=(r*b*s-y*l*s+y*i*u-n*b*u-r*i*v+n*l*v)*x,t[11]=(c*l*s-r*d*s-c*i*u+n*d*u+r*i*g-n*l*g)*x,t[12]=P*x,t[13]=(c*b*o-y*d*o+y*i*p-n*b*p-c*i*m+n*d*m)*x,t[14]=(y*l*o-r*b*o-y*i*a+n*b*a+r*i*m-n*l*m)*x,t[15]=(r*d*o-c*l*o+c*i*a-n*d*a-r*i*p+n*l*p)*x,this}scale(t){const n=this.elements,i=t.x,o=t.y,s=t.z;return n[0]*=i,n[4]*=o,n[8]*=s,n[1]*=i,n[5]*=o,n[9]*=s,n[2]*=i,n[6]*=o,n[10]*=s,n[3]*=i,n[7]*=o,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,o))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),o=Math.sin(n),s=1-i,r=t.x,l=t.y,a=t.z,u=s*r,c=s*l;return this.set(u*r+i,u*l-o*a,u*a+o*l,0,u*l+o*a,c*l+i,c*a-o*r,0,u*a-o*l,c*a+o*r,s*a*a+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,o,s,r){return this.set(1,i,s,0,t,1,r,0,n,o,1,0,0,0,0,1),this}compose(t,n,i){const o=this.elements,s=n._x,r=n._y,l=n._z,a=n._w,u=s+s,c=r+r,d=l+l,p=s*u,g=s*c,y=s*d,b=r*c,m=r*d,v=l*d,S=a*u,k=a*c,C=a*d,P=i.x,w=i.y,x=i.z;return o[0]=(1-(b+v))*P,o[1]=(g+C)*P,o[2]=(y-k)*P,o[3]=0,o[4]=(g-C)*w,o[5]=(1-(p+v))*w,o[6]=(m+S)*w,o[7]=0,o[8]=(y+k)*x,o[9]=(m-S)*x,o[10]=(1-(p+b))*x,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,i){const o=this.elements;let s=Hs.set(o[0],o[1],o[2]).length();const r=Hs.set(o[4],o[5],o[6]).length(),l=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],Gi.copy(this);const u=1/s,c=1/r,d=1/l;return Gi.elements[0]*=u,Gi.elements[1]*=u,Gi.elements[2]*=u,Gi.elements[4]*=c,Gi.elements[5]*=c,Gi.elements[6]*=c,Gi.elements[8]*=d,Gi.elements[9]*=d,Gi.elements[10]*=d,n.setFromRotationMatrix(Gi),i.x=s,i.y=r,i.z=l,this}makePerspective(t,n,i,o,s,r,l=Vr){const a=this.elements,u=2*s/(n-t),c=2*s/(i-o),d=(n+t)/(n-t),p=(i+o)/(i-o);let g,y;if(l===Vr)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(l===gd)g=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,n,i,o,s,r,l=Vr){const a=this.elements,u=1/(n-t),c=1/(i-o),d=1/(r-s),p=(n+t)*u,g=(i+o)*c;let y,b;if(l===Vr)y=(r+s)*d,b=-2*d;else if(l===gd)y=s*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-g,a[2]=0,a[6]=0,a[10]=b,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let o=0;o<16;o++)if(n[o]!==i[o])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Hs=new Te,Gi=new hn,QL=new Te(0,0,0),e9=new Te(1,1,1),ro=new Te,$u=new Te,wi=new Te,t3=new hn,n3=new Lo;class wr{constructor(t=0,n=0,i=0,o=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,o=this._order){return this._x=t,this._y=n,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const o=t.elements,s=o[0],r=o[4],l=o[8],a=o[1],u=o[5],c=o[9],d=o[2],p=o[6],g=o[10];switch(n){case"XYZ":this._y=Math.asin(ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ni(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-ni(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ni(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return t3.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t3,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return n3.setFromEuler(this),this.setFromQuaternion(n3,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class U5{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t9=0;const i3=new Te,Ws=new Lo,zr=new hn,Mu=new Te,Xl=new Te,n9=new Te,i9=new Lo,r3=new Te(1,0,0),o3=new Te(0,1,0),s3=new Te(0,0,1),l3={type:"added"},r9={type:"removed"},Gs={type:"childadded",child:null},wp={type:"childremoved",child:null};class zn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t9++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new Te,n=new wr,i=new Lo,o=new Te(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new Nt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(r3,t)}rotateY(t){return this.rotateOnAxis(o3,t)}rotateZ(t){return this.rotateOnAxis(s3,t)}translateOnAxis(t,n){return i3.copy(t).applyQuaternion(this.quaternion),this.position.add(i3.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(r3,t)}translateY(t){return this.translateOnAxis(o3,t)}translateZ(t){return this.translateOnAxis(s3,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Mu.copy(t):Mu.set(t,n,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zr.lookAt(Xl,Mu,this.up):zr.lookAt(Mu,Xl,this.up),this.quaternion.setFromRotationMatrix(zr),o&&(zr.extractRotation(o.matrixWorld),Ws.setFromRotationMatrix(zr),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(l3),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(r9),wp.child=t,this.dispatchEvent(wp),wp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zr.multiply(t.parent.matrixWorld)),t.applyMatrix4(zr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(l3),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,t,n9),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,i9,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,o=n.length;i<o;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++){const l=o[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let u=0,c=a.length;u<c;u++){const d=a[u];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(s(t.materials,this.material[a]));o.material=l}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let l=0;l<this.children.length;l++)o.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];o.animations.push(s(t.animations,a))}}if(n){const l=r(t.geometries),a=r(t.materials),u=r(t.textures),c=r(t.images),d=r(t.shapes),p=r(t.skeletons),g=r(t.animations),y=r(t.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=o,i;function r(l){const a=[];for(const u in l){const c=l[u];delete c.metadata,a.push(c)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}zn.DEFAULT_UP=new Te(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new Te,Nr=new Te,$p=new Te,Rr=new Te,qs=new Te,Ks=new Te,a3=new Te,Mp=new Te,xp=new Te,Pp=new Te;class gr{constructor(t=new Te,n=new Te,i=new Te){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,o){o.subVectors(i,n),qi.subVectors(t,n),o.cross(qi);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,n,i,o,s){qi.subVectors(o,n),Nr.subVectors(i,n),$p.subVectors(t,n);const r=qi.dot(qi),l=qi.dot(Nr),a=qi.dot($p),u=Nr.dot(Nr),c=Nr.dot($p),d=r*u-l*l;if(d===0)return s.set(0,0,0),null;const p=1/d,g=(u*a-l*c)*p,y=(r*c-l*a)*p;return s.set(1-g-y,y,g)}static containsPoint(t,n,i,o){return this.getBarycoord(t,n,i,o,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(t,n,i,o,s,r,l,a){return this.getBarycoord(t,n,i,o,Rr)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Rr.x),a.addScaledVector(r,Rr.y),a.addScaledVector(l,Rr.z),a)}static isFrontFacing(t,n,i,o){return qi.subVectors(i,n),Nr.subVectors(t,n),qi.cross(Nr).dot(o)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,o){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,i,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),qi.cross(Nr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return gr.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,o,s){return gr.getInterpolation(t,this.a,this.b,this.c,n,i,o,s)}containsPoint(t){return gr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,o=this.b,s=this.c;let r,l;qs.subVectors(o,i),Ks.subVectors(s,i),Mp.subVectors(t,i);const a=qs.dot(Mp),u=Ks.dot(Mp);if(a<=0&&u<=0)return n.copy(i);xp.subVectors(t,o);const c=qs.dot(xp),d=Ks.dot(xp);if(c>=0&&d<=c)return n.copy(o);const p=a*d-c*u;if(p<=0&&a>=0&&c<=0)return r=a/(a-c),n.copy(i).addScaledVector(qs,r);Pp.subVectors(t,s);const g=qs.dot(Pp),y=Ks.dot(Pp);if(y>=0&&g<=y)return n.copy(s);const b=g*u-a*y;if(b<=0&&u>=0&&y<=0)return l=u/(u-y),n.copy(i).addScaledVector(Ks,l);const m=c*y-g*d;if(m<=0&&d-c>=0&&g-y>=0)return a3.subVectors(s,o),l=(d-c)/(d-c+(g-y)),n.copy(o).addScaledVector(a3,l);const v=1/(m+b+p);return r=b*v,l=p*v,n.copy(i).addScaledVector(qs,r).addScaledVector(Ks,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oo={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Ep(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,o=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.toWorkingColorSpace(this,o),this}setHSL(t,n,i,o=Jt.workingColorSpace){if(t=gb(t,1),n=ni(n,0,1),i=ni(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Ep(r,s,t+1/3),this.g=Ep(r,s,t),this.b=Ep(r,s,t-1/3)}return Jt.toWorkingColorSpace(this,o),this}setStyle(t,n=pr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],l=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pr){const i=H5[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pl(t.r),this.g=pl(t.g),this.b=pl(t.b),this}copyLinearToSRGB(t){return this.r=vp(t.r),this.g=vp(t.g),this.b=vp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pr){return Jt.fromWorkingColorSpace(ei.copy(this),t),Math.round(ni(ei.r*255,0,255))*65536+Math.round(ni(ei.g*255,0,255))*256+Math.round(ni(ei.b*255,0,255))}getHexString(t=pr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ei.copy(this),n);const i=ei.r,o=ei.g,s=ei.b,r=Math.max(i,o,s),l=Math.min(i,o,s);let a,u;const c=(l+r)/2;if(l===r)a=0,u=0;else{const d=r-l;switch(u=c<=.5?d/(r+l):d/(2-r-l),r){case i:a=(o-s)/d+(o<s?6:0);break;case o:a=(s-i)/d+2;break;case s:a=(i-o)/d+4;break}a/=6}return t.h=a,t.s=u,t.l=c,t}getRGB(t,n=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ei.copy(this),n),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=pr){Jt.fromWorkingColorSpace(ei.copy(this),t);const n=ei.r,i=ei.g,o=ei.b;return t!==pr?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,n,i){return this.getHSL(oo),this.setHSL(oo.h+t,oo.s+n,oo.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(oo),t.getHSL(xu);const i=ga(oo.h,xu.h,n),o=ga(oo.s,xu.s,n),s=ga(oo.l,xu.l,n);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*o,this.g=s[1]*n+s[4]*i+s[7]*o,this.b=s[2]*n+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new jt;jt.NAMES=H5;let o9=0;class Ll extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o9++}),this.uuid=El(),this.name="",this.type="Material",this.blending=dl,this.side=Po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=n2,this.blendDst=i2,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q4,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dl&&(i.blending=this.blending),this.side!==Po&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==n2&&(i.blendSrc=this.blendSrc),this.blendDst!==i2&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q4&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const l in s){const a=s[l];delete a.metadata,r.push(a)}return r}if(n){const s=o(t.textures),r=o(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const o=n.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class W5 extends Ll{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=mb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _n=new Te,Pu=new Lt;class _r{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=K4,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ko,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return WL("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=n.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pu.fromBufferAttribute(this,n),Pu.applyMatrix3(t),this.setXY(n,Pu.x,Pu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=il(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=il(n,this.array)),n}setX(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=il(n,this.array)),n}setY(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=il(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=il(n,this.array)),n}setW(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,o){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),o=ci(o,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,n,i,o,s){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),i=ci(i,this.array),o=ci(o,this.array),s=ci(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==K4&&(t.usage=this.usage),t}}class G5 extends _r{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class q5 extends _r{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Qi extends _r{constructor(t,n,i){super(new Float32Array(t),n,i)}}let s9=0;const Oi=new hn,Lp=new zn,Zs=new Te,$i=new qa,Yl=new qa,An=new Te;class qr extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s9++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F5(t)?q5:G5)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,n,i){return Oi.makeTranslation(t,n,i),this.applyMatrix4(Oi),this}scale(t,n,i){return Oi.makeScale(t,n,i),this.applyMatrix4(Oi),this}lookAt(t){return Lp.lookAt(t),Lp.updateMatrix(),this.applyMatrix4(Lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const n=[];for(let i=0,o=t.length;i<o;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Te(-1/0,-1/0,-1/0),new Te(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,o=n.length;i<o;i++){const s=n[i];$i.setFromBufferAttribute(s),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Te,1/0);return}if(t){const i=this.boundingSphere.center;if($i.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const l=n[s];Yl.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors($i.min,Yl.min),$i.expandByPoint(An),An.addVectors($i.max,Yl.max),$i.expandByPoint(An)):($i.expandByPoint(Yl.min),$i.expandByPoint(Yl.max))}$i.getCenter(i);let o=0;for(let s=0,r=t.count;s<r;s++)An.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(An));if(n)for(let s=0,r=n.length;s<r;s++){const l=n[s],a=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)An.fromBufferAttribute(l,u),a&&(Zs.fromBufferAttribute(t,u),An.add(Zs)),o=Math.max(o,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,o=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),l=[],a=[];for(let N=0;N<i.count;N++)l[N]=new Te,a[N]=new Te;const u=new Te,c=new Te,d=new Te,p=new Lt,g=new Lt,y=new Lt,b=new Te,m=new Te;function v(N,E,$){u.fromBufferAttribute(i,N),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,$),p.fromBufferAttribute(s,N),g.fromBufferAttribute(s,E),y.fromBufferAttribute(s,$),c.sub(u),d.sub(u),g.sub(p),y.sub(p);const T=1/(g.x*y.y-y.x*g.y);isFinite(T)&&(b.copy(c).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(T),m.copy(d).multiplyScalar(g.x).addScaledVector(c,-y.x).multiplyScalar(T),l[N].add(b),l[E].add(b),l[$].add(b),a[N].add(m),a[E].add(m),a[$].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let N=0,E=S.length;N<E;++N){const $=S[N],T=$.start,U=$.count;for(let R=T,V=T+U;R<V;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const k=new Te,C=new Te,P=new Te,w=new Te;function x(N){P.fromBufferAttribute(o,N),w.copy(P);const E=l[N];k.copy(E),k.sub(P.multiplyScalar(P.dot(E))).normalize(),C.crossVectors(w,E);const T=C.dot(a[N])<0?-1:1;r.setXYZW(N,k.x,k.y,k.z,T)}for(let N=0,E=S.length;N<E;++N){const $=S[N],T=$.start,U=$.count;for(let R=T,V=T+U;R<V;R+=3)x(t.getX(R+0)),x(t.getX(R+1)),x(t.getX(R+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const o=new Te,s=new Te,r=new Te,l=new Te,a=new Te,u=new Te,c=new Te,d=new Te;if(t)for(let p=0,g=t.count;p<g;p+=3){const y=t.getX(p+0),b=t.getX(p+1),m=t.getX(p+2);o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),c.subVectors(r,s),d.subVectors(o,s),c.cross(d),l.fromBufferAttribute(i,y),a.fromBufferAttribute(i,b),u.fromBufferAttribute(i,m),l.add(c),a.add(c),u.add(c),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(b,a.x,a.y,a.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)o.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),r.fromBufferAttribute(n,p+2),c.subVectors(r,s),d.subVectors(o,s),c.cross(d),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(l,a){const u=l.array,c=l.itemSize,d=l.normalized,p=new u.constructor(a.length*c);let g=0,y=0;for(let b=0,m=a.length;b<m;b++){l.isInterleavedBufferAttribute?g=a[b]*l.data.stride+l.offset:g=a[b]*c;for(let v=0;v<c;v++)p[y++]=u[g++]}return new _r(p,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qr,i=this.index.array,o=this.attributes;for(const l in o){const a=o[l],u=t(a,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const a=[],u=s[l];for(let c=0,d=u.length;c<d;c++){const p=u[c],g=t(p,i);a.push(g)}n.morphAttributes[l]=a}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,a=r.length;l<a;l++){const u=r[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const u in a)a[u]!==void 0&&(t[u]=a[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const a in i){const u=i[a];t.data.attributes[a]=u.toJSON(t.data)}const o={};let s=!1;for(const a in this.morphAttributes){const u=this.morphAttributes[a],c=[];for(let d=0,p=u.length;d<p;d++){const g=u[d];c.push(g.toJSON(t.data))}c.length>0&&(o[a]=c,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const o=t.attributes;for(const u in o){const c=o[u];this.setAttribute(u,c.clone(n))}const s=t.morphAttributes;for(const u in s){const c=[],d=s[u];for(let p=0,g=d.length;p<g;p++)c.push(d[p].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,c=r.length;u<c;u++){const d=r[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u3=new hn,Ko=new yb,Eu=new lf,c3=new Te,Xs=new Te,Ys=new Te,Js=new Te,Tp=new Te,Lu=new Te,Tu=new Lt,Iu=new Lt,Au=new Lt,d3=new Te,f3=new Te,p3=new Te,Ou=new Te,zu=new Te;class pi extends zn{constructor(t=new qr,n=new W5){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const o=n[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const l=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,n){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(o,t);const l=this.morphTargetInfluences;if(s&&l){Lu.set(0,0,0);for(let a=0,u=s.length;a<u;a++){const c=l[a],d=s[a];c!==0&&(Tp.fromBufferAttribute(d,t),r?Lu.addScaledVector(Tp,c):Lu.addScaledVector(Tp.sub(n),c))}n.add(Lu)}return n}raycast(t,n){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eu.copy(i.boundingSphere),Eu.applyMatrix4(s),Ko.copy(t.ray).recast(t.near),!(Eu.containsPoint(Ko.origin)===!1&&(Ko.intersectSphere(Eu,c3)===null||Ko.origin.distanceToSquared(c3)>(t.far-t.near)**2))&&(u3.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(u3),!(i.boundingBox!==null&&Ko.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ko)))}_computeIntersections(t,n,i){let o;const s=this.geometry,r=this.material,l=s.index,a=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(r))for(let y=0,b=p.length;y<b;y++){const m=p[y],v=r[m.materialIndex],S=Math.max(m.start,g.start),k=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let C=S,P=k;C<P;C+=3){const w=l.getX(C),x=l.getX(C+1),N=l.getX(C+2);o=Nu(this,v,t,i,u,c,d,w,x,N),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let m=y,v=b;m<v;m+=3){const S=l.getX(m),k=l.getX(m+1),C=l.getX(m+2);o=Nu(this,r,t,i,u,c,d,S,k,C),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(a!==void 0)if(Array.isArray(r))for(let y=0,b=p.length;y<b;y++){const m=p[y],v=r[m.materialIndex],S=Math.max(m.start,g.start),k=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let C=S,P=k;C<P;C+=3){const w=C,x=C+1,N=C+2;o=Nu(this,v,t,i,u,c,d,w,x,N),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let m=y,v=b;m<v;m+=3){const S=m,k=m+1,C=m+2;o=Nu(this,r,t,i,u,c,d,S,k,C),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function l9(e,t,n,i,o,s,r,l){let a;if(t.side===bi?a=i.intersectTriangle(r,s,o,!0,l):a=i.intersectTriangle(o,s,r,t.side===Po,l),a===null)return null;zu.copy(l),zu.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(zu);return u<n.near||u>n.far?null:{distance:u,point:zu.clone(),object:e}}function Nu(e,t,n,i,o,s,r,l,a,u){e.getVertexPosition(l,Xs),e.getVertexPosition(a,Ys),e.getVertexPosition(u,Js);const c=l9(e,t,n,i,Xs,Ys,Js,Ou);if(c){o&&(Tu.fromBufferAttribute(o,l),Iu.fromBufferAttribute(o,a),Au.fromBufferAttribute(o,u),c.uv=gr.getInterpolation(Ou,Xs,Ys,Js,Tu,Iu,Au,new Lt)),s&&(Tu.fromBufferAttribute(s,l),Iu.fromBufferAttribute(s,a),Au.fromBufferAttribute(s,u),c.uv1=gr.getInterpolation(Ou,Xs,Ys,Js,Tu,Iu,Au,new Lt)),r&&(d3.fromBufferAttribute(r,l),f3.fromBufferAttribute(r,a),p3.fromBufferAttribute(r,u),c.normal=gr.getInterpolation(Ou,Xs,Ys,Js,d3,f3,p3,new Te),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:l,b:a,c:u,normal:new Te,materialIndex:0};gr.getNormal(Xs,Ys,Js,d.normal),c.face=d}return c}class Es extends qr{constructor(t=1,n=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const l=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const a=[],u=[],c=[],d=[];let p=0,g=0;y("z","y","x",-1,-1,i,n,t,r,s,0),y("z","y","x",1,-1,i,n,-t,r,s,1),y("x","z","y",1,1,t,i,n,o,r,2),y("x","z","y",1,-1,t,i,-n,o,r,3),y("x","y","z",1,-1,t,n,i,o,s,4),y("x","y","z",-1,-1,t,n,-i,o,s,5),this.setIndex(a),this.setAttribute("position",new Qi(u,3)),this.setAttribute("normal",new Qi(c,3)),this.setAttribute("uv",new Qi(d,2));function y(b,m,v,S,k,C,P,w,x,N,E){const $=C/x,T=P/N,U=C/2,R=P/2,V=w/2,Z=x+1,W=N+1;let j=0,B=0;const K=new Te;for(let I=0;I<W;I++){const Y=I*T-R;for(let re=0;re<Z;re++){const fe=re*$-U;K[b]=fe*S,K[m]=Y*k,K[v]=V,u.push(K.x,K.y,K.z),K[b]=0,K[m]=0,K[v]=w>0?1:-1,c.push(K.x,K.y,K.z),d.push(re/x),d.push(1-I/N),j+=1}}for(let I=0;I<N;I++)for(let Y=0;Y<x;Y++){const re=p+Y+Z*I,fe=p+Y+Z*(I+1),Q=p+(Y+1)+Z*(I+1),ne=p+(Y+1)+Z*I;a.push(re,fe,ne),a.push(fe,Q,ne),B+=6}l.addGroup(g,B,E),g+=B,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $l(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const o=e[n][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=o.clone():Array.isArray(o)?t[n][i]=o.slice():t[n][i]=o}}return t}function di(e){const t={};for(let n=0;n<e.length;n++){const i=$l(e[n]);for(const o in i)t[o]=i[o]}return t}function a9(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function K5(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const u9={clone:$l,merge:di};var c9=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class To extends Ll{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c9,this.fragmentShader=d9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$l(t.uniforms),this.uniformsGroups=a9(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?n.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[o]={type:"m4",value:r.toArray()}:n.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Z5 extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Vr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const so=new Te,h3=new Lt,m3=new Lt;class zi extends Z5{constructor(t=50,n=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){so.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(so.x,so.y).multiplyScalar(-t/so.z),so.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(so.x,so.y).multiplyScalar(-t/so.z)}getViewSize(t,n){return this.getViewBounds(t,h3,m3),n.subVectors(m3,h3)}setViewOffset(t,n,i,o,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(va*.5*this.fov)/this.zoom,i=2*n,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,u=r.fullHeight;s+=r.offsetX*o/a,n-=r.offsetY*i/u,o*=r.width/a,i*=r.height/u}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qs=-90,el=1;class f9 extends zn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zi(Qs,el,t,n);o.layers=this.layers,this.add(o);const s=new zi(Qs,el,t,n);s.layers=this.layers,this.add(s);const r=new zi(Qs,el,t,n);r.layers=this.layers,this.add(r);const l=new zi(Qs,el,t,n);l.layers=this.layers,this.add(l);const a=new zi(Qs,el,t,n);a.layers=this.layers,this.add(a);const u=new zi(Qs,el,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,o,s,r,l,a]=n;for(const u of n)this.remove(u);if(t===Vr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===gd)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,l,a,u,c]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(n,s),t.setRenderTarget(i,1,o),t.render(n,r),t.setRenderTarget(i,2,o),t.render(n,l),t.setRenderTarget(i,3,o),t.render(n,a),t.setRenderTarget(i,4,o),t.render(n,u),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,o),t.render(n,c),t.setRenderTarget(d,p,g),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class X5 extends ki{constructor(t,n,i,o,s,r,l,a,u,c){t=t!==void 0?t:[],n=n!==void 0?n:Cl,super(t,n,i,o,s,r,l,a,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p9 extends ks{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new X5(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Es(5,5,5),s=new To({name:"CubemapFromEquirect",uniforms:$l(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:wo});s.uniforms.tEquirect.value=n;const r=new pi(o,s),l=n.minFilter;return n.minFilter===as&&(n.minFilter=Xi),new f9(1,10,this).update(t,r),n.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,o);t.setRenderTarget(s)}}const Ip=new Te,h9=new Te,m9=new Nt;class vo{constructor(t=new Te(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,o){return this.normal.set(t,n,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const o=Ip.subVectors(i,n).cross(h9.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Ip),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||m9.getNormalMatrix(t),o=this.coplanarPoint(Ip).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zo=new lf,Ru=new Te;class bb{constructor(t=new vo,n=new vo,i=new vo,o=new vo,s=new vo,r=new vo){this.planes=[t,n,i,o,s,r]}set(t,n,i,o,s,r){const l=this.planes;return l[0].copy(t),l[1].copy(n),l[2].copy(i),l[3].copy(o),l[4].copy(s),l[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Vr){const i=this.planes,o=t.elements,s=o[0],r=o[1],l=o[2],a=o[3],u=o[4],c=o[5],d=o[6],p=o[7],g=o[8],y=o[9],b=o[10],m=o[11],v=o[12],S=o[13],k=o[14],C=o[15];if(i[0].setComponents(a-s,p-u,m-g,C-v).normalize(),i[1].setComponents(a+s,p+u,m+g,C+v).normalize(),i[2].setComponents(a+r,p+c,m+y,C+S).normalize(),i[3].setComponents(a-r,p-c,m-y,C-S).normalize(),i[4].setComponents(a-l,p-d,m-b,C-k).normalize(),n===Vr)i[5].setComponents(a+l,p+d,m+b,C+k).normalize();else if(n===gd)i[5].setComponents(l,d,b,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zo)}intersectsSprite(t){return Zo.center.set(0,0,0),Zo.radius=.7071067811865476,Zo.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zo)}intersectsSphere(t){const n=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const o=n[i];if(Ru.x=o.normal.x>0?t.max.x:t.min.x,Ru.y=o.normal.y>0?t.max.y:t.min.y,Ru.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y5(){let e=null,t=!1,n=null,i=null;function o(s,r){n(s,r),i=e.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function v9(e){const t=new WeakMap;function n(l,a){const u=l.array,c=l.usage,d=u.byteLength,p=e.createBuffer();e.bindBuffer(a,p),e.bufferData(a,u,c),l.onUploadCallback();let g;if(u instanceof Float32Array)g=e.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=e.SHORT;else if(u instanceof Uint32Array)g=e.UNSIGNED_INT;else if(u instanceof Int32Array)g=e.INT;else if(u instanceof Int8Array)g=e.BYTE;else if(u instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,a,u){const c=a.array,d=a._updateRange,p=a.updateRanges;if(e.bindBuffer(u,l),d.count===-1&&p.length===0&&e.bufferSubData(u,0,c),p.length!==0){for(let g=0,y=p.length;g<y;g++){const b=p[g];e.bufferSubData(u,b.start*c.BYTES_PER_ELEMENT,c,b.start,b.count)}a.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),a.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=t.get(l);a&&(e.deleteBuffer(a.buffer),t.delete(l))}function r(l,a){if(l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);if(u===void 0)t.set(l,n(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,a),u.version=l.version}}return{get:o,remove:s,update:r}}class af extends qr{constructor(t=1,n=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:o};const s=t/2,r=n/2,l=Math.floor(i),a=Math.floor(o),u=l+1,c=a+1,d=t/l,p=n/a,g=[],y=[],b=[],m=[];for(let v=0;v<c;v++){const S=v*p-r;for(let k=0;k<u;k++){const C=k*d-s;y.push(C,-S,0),b.push(0,0,1),m.push(k/l),m.push(1-v/a)}}for(let v=0;v<a;v++)for(let S=0;S<l;S++){const k=S+u*v,C=S+u*(v+1),P=S+1+u*(v+1),w=S+1+u*v;g.push(k,C,w),g.push(C,P,w)}this.setIndex(g),this.setAttribute("position",new Qi(y,3)),this.setAttribute("normal",new Qi(b,3)),this.setAttribute("uv",new Qi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new af(t.width,t.height,t.widthSegments,t.heightSegments)}}var g9=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y9=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_9=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$9=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M9=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x9=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E9=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L9=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T9=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I9=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z9=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N9=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D9=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F9=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j9=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V9=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U9=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H9=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W9=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G9=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q9="gl_FragColor = linearToOutputTexel( gl_FragColor );",K9=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Z9=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X9=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y9=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J9=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q9=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,OT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_I=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$I=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,II=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:g9,alphahash_pars_fragment:y9,alphamap_fragment:b9,alphamap_pars_fragment:k9,alphatest_fragment:_9,alphatest_pars_fragment:C9,aomap_fragment:S9,aomap_pars_fragment:w9,batching_pars_vertex:$9,batching_vertex:M9,begin_vertex:x9,beginnormal_vertex:P9,bsdfs:E9,iridescence_fragment:L9,bumpmap_pars_fragment:T9,clipping_planes_fragment:I9,clipping_planes_pars_fragment:A9,clipping_planes_pars_vertex:O9,clipping_planes_vertex:z9,color_fragment:N9,color_pars_fragment:R9,color_pars_vertex:B9,color_vertex:D9,common:F9,cube_uv_reflection_fragment:j9,defaultnormal_vertex:V9,displacementmap_pars_vertex:U9,displacementmap_vertex:H9,emissivemap_fragment:W9,emissivemap_pars_fragment:G9,colorspace_fragment:q9,colorspace_pars_fragment:K9,envmap_fragment:Z9,envmap_common_pars_fragment:X9,envmap_pars_fragment:Y9,envmap_pars_vertex:J9,envmap_physical_pars_fragment:uT,envmap_vertex:Q9,fog_vertex:eT,fog_pars_vertex:tT,fog_fragment:nT,fog_pars_fragment:iT,gradientmap_pars_fragment:rT,lightmap_pars_fragment:oT,lights_lambert_fragment:sT,lights_lambert_pars_fragment:lT,lights_pars_begin:aT,lights_toon_fragment:cT,lights_toon_pars_fragment:dT,lights_phong_fragment:fT,lights_phong_pars_fragment:pT,lights_physical_fragment:hT,lights_physical_pars_fragment:mT,lights_fragment_begin:vT,lights_fragment_maps:gT,lights_fragment_end:yT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:kT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:CT,map_fragment:ST,map_pars_fragment:wT,map_particle_fragment:$T,map_particle_pars_fragment:MT,metalnessmap_fragment:xT,metalnessmap_pars_fragment:PT,morphinstance_vertex:ET,morphcolor_vertex:LT,morphnormal_vertex:TT,morphtarget_pars_vertex:IT,morphtarget_vertex:AT,normal_fragment_begin:OT,normal_fragment_maps:zT,normal_pars_fragment:NT,normal_pars_vertex:RT,normal_vertex:BT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:FT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:UT,opaque_fragment:HT,packing:WT,premultiplied_alpha_fragment:GT,project_vertex:qT,dithering_fragment:KT,dithering_pars_fragment:ZT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:QT,shadowmap_vertex:eI,shadowmask_pars_fragment:tI,skinbase_vertex:nI,skinning_pars_vertex:iI,skinning_vertex:rI,skinnormal_vertex:oI,specularmap_fragment:sI,specularmap_pars_fragment:lI,tonemapping_fragment:aI,tonemapping_pars_fragment:uI,transmission_fragment:cI,transmission_pars_fragment:dI,uv_pars_fragment:fI,uv_pars_vertex:pI,uv_vertex:hI,worldpos_vertex:mI,background_vert:vI,background_frag:gI,backgroundCube_vert:yI,backgroundCube_frag:bI,cube_vert:kI,cube_frag:_I,depth_vert:CI,depth_frag:SI,distanceRGBA_vert:wI,distanceRGBA_frag:$I,equirect_vert:MI,equirect_frag:xI,linedashed_vert:PI,linedashed_frag:EI,meshbasic_vert:LI,meshbasic_frag:TI,meshlambert_vert:II,meshlambert_frag:AI,meshmatcap_vert:OI,meshmatcap_frag:zI,meshnormal_vert:NI,meshnormal_frag:RI,meshphong_vert:BI,meshphong_frag:DI,meshphysical_vert:FI,meshphysical_frag:jI,meshtoon_vert:VI,meshtoon_frag:UI,points_vert:HI,points_frag:WI,shadow_vert:GI,shadow_frag:qI,sprite_vert:KI,sprite_frag:ZI},ft={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},mr={basic:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:di([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:di([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:di([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:di([ft.points,ft.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:di([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:di([ft.common,ft.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:di([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:di([ft.sprite,ft.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:di([ft.common,ft.displacementmap,{referencePosition:{value:new Te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:di([ft.lights,ft.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};mr.physical={uniforms:di([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Bu={r:0,b:0,g:0},Xo=new wr,XI=new hn;function YI(e,t,n,i,o,s,r){const l=new jt(0);let a=s===!0?0:1,u,c,d=null,p=0,g=null;function y(S){let k=S.isScene===!0?S.background:null;return k&&k.isTexture&&(k=(S.backgroundBlurriness>0?n:t).get(k)),k}function b(S){let k=!1;const C=y(S);C===null?v(l,a):C&&C.isColor&&(v(C,1),k=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||k)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function m(S,k){const C=y(k);C&&(C.isCubeTexture||C.mapping===rf)?(c===void 0&&(c=new pi(new Es(1,1,1),new To({name:"BackgroundCubeMaterial",uniforms:$l(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),Xo.copy(k.backgroundRotation),Xo.x*=-1,Xo.y*=-1,Xo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xo.y*=-1,Xo.z*=-1),c.material.uniforms.envMap.value=C,c.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XI.makeRotationFromEuler(Xo)),c.material.toneMapped=Jt.getTransfer(C.colorSpace)!==cn,(d!==C||p!==C.version||g!==e.toneMapping)&&(c.material.needsUpdate=!0,d=C,p=C.version,g=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new pi(new af(2,2),new To({name:"BackgroundMaterial",uniforms:$l(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Po,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(C.colorSpace)!==cn,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||g!==e.toneMapping)&&(u.material.needsUpdate=!0,d=C,p=C.version,g=e.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function v(S,k){S.getRGB(Bu,K5(e)),i.buffers.color.setClear(Bu.r,Bu.g,Bu.b,k,r)}return{getClearColor:function(){return l},setClearColor:function(S,k=1){l.set(S),a=k,v(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,v(l,a)},render:b,addToRenderList:m}}function JI(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},o=p(null);let s=o,r=!1;function l($,T,U,R,V){let Z=!1;const W=d(R,U,T);s!==W&&(s=W,u(s.object)),Z=g($,R,U,V),Z&&y($,R,U,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,C($,T,U,R),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function a(){return e.createVertexArray()}function u($){return e.bindVertexArray($)}function c($){return e.deleteVertexArray($)}function d($,T,U){const R=U.wireframe===!0;let V=i[$.id];V===void 0&&(V={},i[$.id]=V);let Z=V[T.id];Z===void 0&&(Z={},V[T.id]=Z);let W=Z[R];return W===void 0&&(W=p(a()),Z[R]=W),W}function p($){const T=[],U=[],R=[];for(let V=0;V<n;V++)T[V]=0,U[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:R,object:$,attributes:{},index:null}}function g($,T,U,R){const V=s.attributes,Z=T.attributes;let W=0;const j=U.getAttributes();for(const B in j)if(j[B].location>=0){const I=V[B];let Y=Z[B];if(Y===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(Y=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(Y=$.instanceColor)),I===void 0||I.attribute!==Y||Y&&I.data!==Y.data)return!0;W++}return s.attributesNum!==W||s.index!==R}function y($,T,U,R){const V={},Z=T.attributes;let W=0;const j=U.getAttributes();for(const B in j)if(j[B].location>=0){let I=Z[B];I===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(I=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(I=$.instanceColor));const Y={};Y.attribute=I,I&&I.data&&(Y.data=I.data),V[B]=Y,W++}s.attributes=V,s.attributesNum=W,s.index=R}function b(){const $=s.newAttributes;for(let T=0,U=$.length;T<U;T++)$[T]=0}function m($){v($,0)}function v($,T){const U=s.newAttributes,R=s.enabledAttributes,V=s.attributeDivisors;U[$]=1,R[$]===0&&(e.enableVertexAttribArray($),R[$]=1),V[$]!==T&&(e.vertexAttribDivisor($,T),V[$]=T)}function S(){const $=s.newAttributes,T=s.enabledAttributes;for(let U=0,R=T.length;U<R;U++)T[U]!==$[U]&&(e.disableVertexAttribArray(U),T[U]=0)}function k($,T,U,R,V,Z,W){W===!0?e.vertexAttribIPointer($,T,U,V,Z):e.vertexAttribPointer($,T,U,R,V,Z)}function C($,T,U,R){b();const V=R.attributes,Z=U.getAttributes(),W=T.defaultAttributeValues;for(const j in Z){const B=Z[j];if(B.location>=0){let K=V[j];if(K===void 0&&(j==="instanceMatrix"&&$.instanceMatrix&&(K=$.instanceMatrix),j==="instanceColor"&&$.instanceColor&&(K=$.instanceColor)),K!==void 0){const I=K.normalized,Y=K.itemSize,re=t.get(K);if(re===void 0)continue;const fe=re.buffer,Q=re.type,ne=re.bytesPerElement,pe=Q===e.INT||Q===e.UNSIGNED_INT||K.gpuType===I5;if(K.isInterleavedBufferAttribute){const be=K.data,Ae=be.stride,Oe=K.offset;if(be.isInstancedInterleavedBuffer){for(let le=0;le<B.locationSize;le++)v(B.location+le,be.meshPerAttribute);$.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let le=0;le<B.locationSize;le++)m(B.location+le);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let le=0;le<B.locationSize;le++)k(B.location+le,Y/B.locationSize,Q,I,Ae*ne,(Oe+Y/B.locationSize*le)*ne,pe)}else{if(K.isInstancedBufferAttribute){for(let be=0;be<B.locationSize;be++)v(B.location+be,K.meshPerAttribute);$.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<B.locationSize;be++)m(B.location+be);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let be=0;be<B.locationSize;be++)k(B.location+be,Y/B.locationSize,Q,I,Y*ne,Y/B.locationSize*be*ne,pe)}}else if(W!==void 0){const I=W[j];if(I!==void 0)switch(I.length){case 2:e.vertexAttrib2fv(B.location,I);break;case 3:e.vertexAttrib3fv(B.location,I);break;case 4:e.vertexAttrib4fv(B.location,I);break;default:e.vertexAttrib1fv(B.location,I)}}}}S()}function P(){N();for(const $ in i){const T=i[$];for(const U in T){const R=T[U];for(const V in R)c(R[V].object),delete R[V];delete T[U]}delete i[$]}}function w($){if(i[$.id]===void 0)return;const T=i[$.id];for(const U in T){const R=T[U];for(const V in R)c(R[V].object),delete R[V];delete T[U]}delete i[$.id]}function x($){for(const T in i){const U=i[T];if(U[$.id]===void 0)continue;const R=U[$.id];for(const V in R)c(R[V].object),delete R[V];delete U[$.id]}}function N(){E(),r=!0,s!==o&&(s=o,u(s.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:l,reset:N,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:m,disableUnusedAttributes:S}}function QI(e,t,n){let i;function o(u){i=u}function s(u,c){e.drawArrays(i,u,c),n.update(c,i,1)}function r(u,c,d){d!==0&&(e.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function l(u,c,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],c[g]);else{p.multiDrawArraysWEBGL(i,u,0,c,0,d);let g=0;for(let y=0;y<d;y++)g+=c[y];n.update(g,i,1)}}function a(u,c,d,p){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)r(u[y],c[y],p[y]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,c,0,p,0,d);let y=0;for(let b=0;b<d;b++)y+=c[b];for(let b=0;b<p.length;b++)n.update(y,i,p[b])}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function eA(e,t,n,i){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(w){return!(w!==br&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const x=w===of&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Eo&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ko&&!x)}function a(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=a(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),b=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),k=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:r,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:k,vertexTextures:C,maxSamples:P}}function tA(e){const t=this;let n=null,i=0,o=!1,s=!1;const r=new vo,l=new Nt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||o;return o=p,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){n=c(d,p,0)},this.setState=function(d,p,g){const y=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,v=e.get(d);if(!o||y===null||y.length===0||s&&!m)s?c(null):u();else{const S=s?0:i,k=S*4;let C=v.clippingState||null;a.value=C,C=c(y,p,k,g);for(let P=0;P!==k;++P)C[P]=n[P];v.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function u(){a.value!==n&&(a.value=n,a.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,p,g,y){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=a.value,y!==!0||m===null){const v=g+b*4,S=p.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<v)&&(m=new Float32Array(v));for(let k=0,C=g;k!==b;++k,C+=4)r.copy(d[k]).applyMatrix4(S,l),r.normal.toArray(m,C),m[C+3]=r.constant}a.value=m,a.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function nA(e){let t=new WeakMap;function n(r,l){return l===r2?r.mapping=Cl:l===o2&&(r.mapping=Sl),r}function i(r){if(r&&r.isTexture){const l=r.mapping;if(l===r2||l===o2)if(t.has(r)){const a=t.get(r).texture;return n(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const u=new p9(a.height);return u.fromEquirectangularTexture(e,r),t.set(r,u),r.addEventListener("dispose",o),n(u.texture,r.mapping)}else return null}}return r}function o(r){const l=r.target;l.removeEventListener("dispose",o);const a=t.get(l);a!==void 0&&(t.delete(l),a.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class J5 extends Z5{constructor(t=-1,n=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,r=i+t,l=o+n,a=o-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,l-=c*this.view.offsetY,a=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const sl=4,v3=[.125,.215,.35,.446,.526,.582],os=20,Ap=new J5,g3=new jt;let Op=null,zp=0,Np=0,Rp=!1;const es=(1+Math.sqrt(5))/2,tl=1/es,y3=[new Te(-es,tl,0),new Te(es,tl,0),new Te(-tl,0,es),new Te(tl,0,es),new Te(0,es,-tl),new Te(0,es,tl),new Te(-1,1,-1),new Te(1,1,-1),new Te(-1,1,1),new Te(1,1,1)];class b3{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,o=100){Op=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,o,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C3(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_3(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Op,zp,Np),this._renderer.xr.enabled=Rp,t.scissorTest=!1,Du(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Cl||t.mapping===Sl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Op=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xi,minFilter:Xi,generateMipmaps:!1,type:of,format:br,colorSpace:Ro,depthBuffer:!1},o=k3(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k3(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(s)),this._blurMaterial=rA(s,t,n)}return o}_compileMaterial(t){const n=new pi(this._lodPlanes[0],t);this._renderer.compile(n,Ap)}_sceneToCubeUV(t,n,i,o){const l=new zi(90,1,n,i),a=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,p=c.toneMapping;c.getClearColor(g3),c.toneMapping=$o,c.autoClear=!1;const g=new W5({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),y=new pi(new Es,g);let b=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,b=!0):(g.color.copy(g3),b=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,a[v],0),l.lookAt(u[v],0,0)):S===1?(l.up.set(0,0,a[v]),l.lookAt(0,u[v],0)):(l.up.set(0,a[v],0),l.lookAt(0,0,u[v]));const k=this._cubeSize;Du(o,S*k,v>2?k:0,k,k),c.setRenderTarget(o),b&&c.render(y,l),c.render(t,l)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=p,c.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,o=t.mapping===Cl||t.mapping===Sl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=C3()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_3());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new pi(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const a=this._cubeSize;Du(n,0,0,3*a,2*a),i.setRenderTarget(n),i.render(r,Ap)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=y3[(o-s-1)%y3.length];this._blur(t,s-1,s,r,l)}n.autoClear=i}_blur(t,n,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,o,"latitudinal",s),this._halfBlur(r,t,i,i,o,"longitudinal",s)}_halfBlur(t,n,i,o,s,r,l){const a=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new pi(this._lodPlanes[o],u),p=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*os-1),b=s/y,m=isFinite(s)?1+Math.floor(c*b):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const v=[];let S=0;for(let x=0;x<os;++x){const N=x/b,E=Math.exp(-N*N/2);v.push(E),x===0?S+=E:x<m&&(S+=2*E)}for(let x=0;x<v.length;x++)v[x]=v[x]/S;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=v,p.latitudinal.value=r==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:k}=this;p.dTheta.value=y,p.mipInt.value=k-i;const C=this._sizeLods[o],P=3*C*(o>k-sl?o-k+sl:0),w=4*(this._cubeSize-C);Du(n,P,w,3*C,2*C),a.setRenderTarget(n),a.render(d,Ap)}}function iA(e){const t=[],n=[],i=[];let o=e;const s=e-sl+1+v3.length;for(let r=0;r<s;r++){const l=Math.pow(2,o);n.push(l);let a=1/l;r>e-sl?a=v3[r-e+sl-1]:r===0&&(a=0),i.push(a);const u=1/(l-2),c=-u,d=1+u,p=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,y=6,b=3,m=2,v=1,S=new Float32Array(b*y*g),k=new Float32Array(m*y*g),C=new Float32Array(v*y*g);for(let w=0;w<g;w++){const x=w%3*2/3-1,N=w>2?0:-1,E=[x,N,0,x+2/3,N,0,x+2/3,N+1,0,x,N,0,x+2/3,N+1,0,x,N+1,0];S.set(E,b*y*w),k.set(p,m*y*w);const $=[w,w,w,w,w,w];C.set($,v*y*w)}const P=new qr;P.setAttribute("position",new _r(S,b)),P.setAttribute("uv",new _r(k,m)),P.setAttribute("faceIndex",new _r(C,v)),t.push(P),o>sl&&o--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function k3(e,t,n){const i=new ks(e,t,n);return i.texture.mapping=rf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Du(e,t,n,i,o){e.viewport.set(t,n,i,o),e.scissor.set(t,n,i,o)}function rA(e,t,n){const i=new Float32Array(os),o=new Te(0,1,0);return new To({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function _3(){return new To({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function C3(){return new To({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function kb(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oA(e){let t=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const a=l.mapping,u=a===r2||a===o2,c=a===Cl||a===Sl;if(u||c){let d=t.get(l);const p=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new b3(e)),d=u?n.fromEquirectangular(l,d):n.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const g=l.image;return u&&g&&g.height>0||c&&g&&o(g)?(n===null&&(n=new b3(e)),d=u?n.fromEquirectangular(l):n.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function o(l){let a=0;const u=6;for(let c=0;c<u;c++)l[c]!==void 0&&a++;return a===u}function s(l){const a=l.target;a.removeEventListener("dispose",s);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function sA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=e.getExtension(i)}return t[i]=o,o}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const o=n(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function lA(e,t,n,i){const o={},s=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const y in p.attributes)t.remove(p.attributes[y]);for(const y in p.morphAttributes){const b=p.morphAttributes[y];for(let m=0,v=b.length;m<v;m++)t.remove(b[m])}p.removeEventListener("dispose",r),delete o[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(d,p){return o[p.id]===!0||(p.addEventListener("dispose",r),o[p.id]=!0,n.memory.geometries++),p}function a(d){const p=d.attributes;for(const y in p)t.update(p[y],e.ARRAY_BUFFER);const g=d.morphAttributes;for(const y in g){const b=g[y];for(let m=0,v=b.length;m<v;m++)t.update(b[m],e.ARRAY_BUFFER)}}function u(d){const p=[],g=d.index,y=d.attributes.position;let b=0;if(g!==null){const S=g.array;b=g.version;for(let k=0,C=S.length;k<C;k+=3){const P=S[k+0],w=S[k+1],x=S[k+2];p.push(P,w,w,x,x,P)}}else if(y!==void 0){const S=y.array;b=y.version;for(let k=0,C=S.length/3-1;k<C;k+=3){const P=k+0,w=k+1,x=k+2;p.push(P,w,w,x,x,P)}}else return;const m=new(F5(p)?q5:G5)(p,1);m.version=b;const v=s.get(d);v&&t.remove(v),s.set(d,m)}function c(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:a,getWireframeAttribute:c}}function aA(e,t,n){let i;function o(p){i=p}let s,r;function l(p){s=p.type,r=p.bytesPerElement}function a(p,g){e.drawElements(i,g,s,p*r),n.update(g,i,1)}function u(p,g,y){y!==0&&(e.drawElementsInstanced(i,g,s,p*r,y),n.update(g,i,y))}function c(p,g,y){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<y;m++)this.render(p[m]/r,g[m]);else{b.multiDrawElementsWEBGL(i,g,0,s,p,0,y);let m=0;for(let v=0;v<y;v++)m+=g[v];n.update(m,i,1)}}function d(p,g,y,b){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p.length;v++)u(p[v]/r,g[v],b[v]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,b,0,y);let v=0;for(let S=0;S<y;S++)v+=g[S];for(let S=0;S<b.length;S++)n.update(v,i,b[S])}}this.setMode=o,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function uA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,l){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=l*(s/3);break;case e.LINES:n.lines+=l*(s/2);break;case e.LINE_STRIP:n.lines+=l*(s-1);break;case e.LINE_LOOP:n.lines+=l*s;break;case e.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:i}}function cA(e,t,n){const i=new WeakMap,o=new On;function s(r,l,a){const u=r.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=c!==void 0?c.length:0;let p=i.get(l);if(p===void 0||p.count!==d){let $=function(){N.dispose(),i.delete(l),l.removeEventListener("dispose",$)};var g=$;p!==void 0&&p.texture.dispose();const y=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,v=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],k=l.morphAttributes.color||[];let C=0;y===!0&&(C=1),b===!0&&(C=2),m===!0&&(C=3);let P=l.attributes.position.count*C,w=1;P>t.maxTextureSize&&(w=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const x=new Float32Array(P*w*4*d),N=new V5(x,P,w,d);N.type=ko,N.needsUpdate=!0;const E=C*4;for(let T=0;T<d;T++){const U=v[T],R=S[T],V=k[T],Z=P*w*4*T;for(let W=0;W<U.count;W++){const j=W*E;y===!0&&(o.fromBufferAttribute(U,W),x[Z+j+0]=o.x,x[Z+j+1]=o.y,x[Z+j+2]=o.z,x[Z+j+3]=0),b===!0&&(o.fromBufferAttribute(R,W),x[Z+j+4]=o.x,x[Z+j+5]=o.y,x[Z+j+6]=o.z,x[Z+j+7]=0),m===!0&&(o.fromBufferAttribute(V,W),x[Z+j+8]=o.x,x[Z+j+9]=o.y,x[Z+j+10]=o.z,x[Z+j+11]=V.itemSize===4?o.w:1)}}p={count:d,texture:N,size:new Lt(P,w)},i.set(l,p),l.addEventListener("dispose",$)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)a.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let y=0;for(let m=0;m<u.length;m++)y+=u[m];const b=l.morphTargetsRelative?1:1-y;a.getUniforms().setValue(e,"morphTargetBaseInfluence",b),a.getUniforms().setValue(e,"morphTargetInfluences",u)}a.getUniforms().setValue(e,"morphTargetsTexture",p.texture,n),a.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:s}}function dA(e,t,n,i){let o=new WeakMap;function s(a){const u=i.render.frame,c=a.geometry,d=t.get(a,c);if(o.get(d)!==u&&(t.update(d),o.set(d,u)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),o.get(a)!==u&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),o.set(a,u))),a.isSkinnedMesh){const p=a.skeleton;o.get(p)!==u&&(p.update(),o.set(p,u))}return d}function r(){o=new WeakMap}function l(a){const u=a.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:r}}class Q5 extends ki{constructor(t,n,i,o,s,r,l,a,u,c){if(c=c!==void 0?c:fl,c!==fl&&c!==Ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===fl&&(i=wl),i===void 0&&c===Ra&&(i=Ga),super(null,o,s,r,l,a,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=l!==void 0?l:Ri,this.minFilter=a!==void 0?a:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const e6=new ki,t6=new Q5(1,1);t6.compareFunction=D5;const n6=new V5,i6=new YL,r6=new X5,S3=[],w3=[],$3=new Float32Array(16),M3=new Float32Array(9),x3=new Float32Array(4);function Tl(e,t,n){const i=e[0];if(i<=0||i>0)return e;const o=t*n;let s=S3[o];if(s===void 0&&(s=new Float32Array(o),S3[o]=s),t!==0){i.toArray(s,0);for(let r=1,l=0;r!==t;++r)l+=n,e[r].toArray(s,l)}return s}function xn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Pn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function uf(e,t){let n=w3[t];n===void 0&&(n=new Int32Array(t),w3[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function fA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2fv(this.addr,t),Pn(n,t)}}function hA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;e.uniform3fv(this.addr,t),Pn(n,t)}}function mA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4fv(this.addr,t),Pn(n,t)}}function vA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pn(n,t)}else{if(xn(n,i))return;x3.set(i),e.uniformMatrix2fv(this.addr,!1,x3),Pn(n,i)}}function gA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pn(n,t)}else{if(xn(n,i))return;M3.set(i),e.uniformMatrix3fv(this.addr,!1,M3),Pn(n,i)}}function yA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pn(n,t)}else{if(xn(n,i))return;$3.set(i),e.uniformMatrix4fv(this.addr,!1,$3),Pn(n,i)}}function bA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2iv(this.addr,t),Pn(n,t)}}function _A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3iv(this.addr,t),Pn(n,t)}}function CA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4iv(this.addr,t),Pn(n,t)}}function SA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2uiv(this.addr,t),Pn(n,t)}}function $A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3uiv(this.addr,t),Pn(n,t)}}function MA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4uiv(this.addr,t),Pn(n,t)}}function xA(e,t,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o);const s=this.type===e.SAMPLER_2D_SHADOW?t6:e6;n.setTexture2D(t||s,o)}function PA(e,t,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),n.setTexture3D(t||i6,o)}function EA(e,t,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),n.setTextureCube(t||r6,o)}function LA(e,t,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),n.setTexture2DArray(t||n6,o)}function TA(e){switch(e){case 5126:return fA;case 35664:return pA;case 35665:return hA;case 35666:return mA;case 35674:return vA;case 35675:return gA;case 35676:return yA;case 5124:case 35670:return bA;case 35667:case 35671:return kA;case 35668:case 35672:return _A;case 35669:case 35673:return CA;case 5125:return SA;case 36294:return wA;case 36295:return $A;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return LA}}function IA(e,t){e.uniform1fv(this.addr,t)}function AA(e,t){const n=Tl(t,this.size,2);e.uniform2fv(this.addr,n)}function OA(e,t){const n=Tl(t,this.size,3);e.uniform3fv(this.addr,n)}function zA(e,t){const n=Tl(t,this.size,4);e.uniform4fv(this.addr,n)}function NA(e,t){const n=Tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function RA(e,t){const n=Tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function BA(e,t){const n=Tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function DA(e,t){e.uniform1iv(this.addr,t)}function FA(e,t){e.uniform2iv(this.addr,t)}function jA(e,t){e.uniform3iv(this.addr,t)}function VA(e,t){e.uniform4iv(this.addr,t)}function UA(e,t){e.uniform1uiv(this.addr,t)}function HA(e,t){e.uniform2uiv(this.addr,t)}function WA(e,t){e.uniform3uiv(this.addr,t)}function GA(e,t){e.uniform4uiv(this.addr,t)}function qA(e,t,n){const i=this.cache,o=t.length,s=uf(n,o);xn(i,s)||(e.uniform1iv(this.addr,s),Pn(i,s));for(let r=0;r!==o;++r)n.setTexture2D(t[r]||e6,s[r])}function KA(e,t,n){const i=this.cache,o=t.length,s=uf(n,o);xn(i,s)||(e.uniform1iv(this.addr,s),Pn(i,s));for(let r=0;r!==o;++r)n.setTexture3D(t[r]||i6,s[r])}function ZA(e,t,n){const i=this.cache,o=t.length,s=uf(n,o);xn(i,s)||(e.uniform1iv(this.addr,s),Pn(i,s));for(let r=0;r!==o;++r)n.setTextureCube(t[r]||r6,s[r])}function XA(e,t,n){const i=this.cache,o=t.length,s=uf(n,o);xn(i,s)||(e.uniform1iv(this.addr,s),Pn(i,s));for(let r=0;r!==o;++r)n.setTexture2DArray(t[r]||n6,s[r])}function YA(e){switch(e){case 5126:return IA;case 35664:return AA;case 35665:return OA;case 35666:return zA;case 35674:return NA;case 35675:return RA;case 35676:return BA;case 5124:case 35670:return DA;case 35667:case 35671:return FA;case 35668:case 35672:return jA;case 35669:case 35673:return VA;case 5125:return UA;case 36294:return HA;case 36295:return WA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return XA}}class JA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class QA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YA(n.type)}}class eO{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const l=o[s];l.setValue(t,n[l.id],i)}}}const Bp=/(\w+)(\])?(\[|\.)?/g;function P3(e,t){e.seq.push(t),e.map[t.id]=t}function tO(e,t,n){const i=e.name,o=i.length;for(Bp.lastIndex=0;;){const s=Bp.exec(i),r=Bp.lastIndex;let l=s[1];const a=s[2]==="]",u=s[3];if(a&&(l=l|0),u===void 0||u==="["&&r+2===o){P3(n,u===void 0?new JA(l,e,t):new QA(l,e,t));break}else{let d=n.map[l];d===void 0&&(d=new eO(l),P3(n,d)),n=d}}}class sc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(n,o),r=t.getUniformLocation(n,s.name);tO(s,r,this)}}setValue(t,n,i,o){const s=this.map[n];s!==void 0&&s.setValue(t,i,o)}setOptional(t,n,i){const o=n[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,n,i,o){for(let s=0,r=n.length;s!==r;++s){const l=n[s],a=i[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,o)}}static seqWithValue(t,n){const i=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in n&&i.push(r)}return i}}function E3(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const nO=37297;let iO=0;function rO(e,t){const n=e.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=o;r<s;r++){const l=r+1;i.push(`${l===t?">":" "} ${l}: ${n[r]}`)}return i.join(`
`)}function oO(e){const t=Jt.getPrimaries(Jt.workingColorSpace),n=Jt.getPrimaries(e);let i;switch(t===n?i="":t===vd&&n===md?i="LinearDisplayP3ToLinearSRGB":t===md&&n===vd&&(i="LinearSRGBToLinearDisplayP3"),e){case Ro:case sf:return[i,"LinearTransferOETF"];case pr:case vb:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function L3(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),o=e.getShaderInfoLog(t).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+rO(e.getShaderSource(t),r)}else return o}function sO(e,t){const n=oO(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lO(e,t){let n;switch(t){case Q7:n="Linear";break;case eL:n="Reinhard";break;case tL:n="OptimizedCineon";break;case nL:n="ACESFilmic";break;case rL:n="AgX";break;case oL:n="Neutral";break;case iL:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aO(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function uO(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function cO(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=e.getActiveAttrib(t,o),r=s.name;let l=1;s.type===e.FLOAT_MAT2&&(l=2),s.type===e.FLOAT_MAT3&&(l=3),s.type===e.FLOAT_MAT4&&(l=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:l}}return n}function ra(e){return e!==""}function T3(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I3(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dO=/^[ \t]*#include +<([\w\d./]+)>/gm;function a2(e){return e.replace(dO,pO)}const fO=new Map;function pO(e,t){let n=zt[t];if(n===void 0){const i=fO.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return a2(n)}const hO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A3(e){return e.replace(hO,mO)}function mO(e,t,n,i){let o="";for(let s=parseInt(t);s<parseInt(n);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function O3(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vO(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===E5?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===$7?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Dr&&(t="SHADOWMAP_TYPE_VSM"),t}function gO(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Cl:case Sl:t="ENVMAP_TYPE_CUBE";break;case rf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yO(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Sl:t="ENVMAP_MODE_REFRACTION";break}return t}function bO(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case mb:t="ENVMAP_BLENDING_MULTIPLY";break;case Y7:t="ENVMAP_BLENDING_MIX";break;case J7:t="ENVMAP_BLENDING_ADD";break}return t}function kO(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _O(e,t,n,i){const o=e.getContext(),s=n.defines;let r=n.vertexShader,l=n.fragmentShader;const a=vO(n),u=gO(n),c=yO(n),d=bO(n),p=kO(n),g=aO(n),y=uO(s),b=o.createProgram();let m,v,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ra).join(`
`),m.length>0&&(m+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ra).join(`
`),v.length>0&&(v+=`
`)):(m=[O3(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),v=[O3(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$o?"#define TONE_MAPPING":"",n.toneMapping!==$o?zt.tonemapping_pars_fragment:"",n.toneMapping!==$o?lO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,sO("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),r=a2(r),r=T3(r,n),r=I3(r,n),l=a2(l),l=T3(l,n),l=I3(l,n),r=A3(r),l=A3(l),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",n.glslVersion===Z4?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Z4?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const k=S+m+r,C=S+v+l,P=E3(o,o.VERTEX_SHADER,k),w=E3(o,o.FRAGMENT_SHADER,C);o.attachShader(b,P),o.attachShader(b,w),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function x(T){if(e.debug.checkShaderErrors){const U=o.getProgramInfoLog(b).trim(),R=o.getShaderInfoLog(P).trim(),V=o.getShaderInfoLog(w).trim();let Z=!0,W=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,b,P,w);else{const j=L3(o,P,"vertex"),B=L3(o,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+j+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(R===""||V==="")&&(W=!1);W&&(T.diagnostics={runnable:Z,programLog:U,vertexShader:{log:R,prefix:m},fragmentShader:{log:V,prefix:v}})}o.deleteShader(P),o.deleteShader(w),N=new sc(o,b),E=cO(o,b)}let N;this.getUniforms=function(){return N===void 0&&x(this),N};let E;this.getAttributes=function(){return E===void 0&&x(this),E};let $=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=o.getProgramParameter(b,nO)),$},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iO++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=w,this}let CO=0;class SO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new wO(t),n.set(t,i)),i}}class wO{constructor(t){this.id=CO++,this.code=t,this.usedTimes=0}}function $O(e,t,n,i,o,s,r){const l=new U5,a=new SO,u=new Set,c=[],d=o.logarithmicDepthBuffer,p=o.vertexTextures;let g=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,$,T,U,R){const V=U.fog,Z=R.geometry,W=E.isMeshStandardMaterial?U.environment:null,j=(E.isMeshStandardMaterial?n:t).get(E.envMap||W),B=j&&j.mapping===rf?j.image.height:null,K=y[E.type];E.precision!==null&&(g=o.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Y=I!==void 0?I.length:0;let re=0;Z.morphAttributes.position!==void 0&&(re=1),Z.morphAttributes.normal!==void 0&&(re=2),Z.morphAttributes.color!==void 0&&(re=3);let fe,Q,ne,pe;if(K){const Ot=mr[K];fe=Ot.vertexShader,Q=Ot.fragmentShader}else fe=E.vertexShader,Q=E.fragmentShader,a.update(E),ne=a.getVertexShaderID(E),pe=a.getFragmentShaderID(E);const be=e.getRenderTarget(),Ae=R.isInstancedMesh===!0,Oe=R.isBatchedMesh===!0,le=!!E.map,Ie=!!E.matcap,Fe=!!j,G=!!E.aoMap,F=!!E.lightMap,ie=!!E.bumpMap,ae=!!E.normalMap,Ce=!!E.displacementMap,Me=!!E.emissiveMap,X=!!E.metalnessMap,O=!!E.roughnessMap,se=E.anisotropy>0,ce=E.clearcoat>0,ke=E.dispersion>0,$e=E.iridescence>0,Ve=E.sheen>0,We=E.transmission>0,me=se&&!!E.anisotropyMap,ve=ce&&!!E.clearcoatMap,ge=ce&&!!E.clearcoatNormalMap,Ue=ce&&!!E.clearcoatRoughnessMap,mt=$e&&!!E.iridescenceMap,at=$e&&!!E.iridescenceThicknessMap,ot=Ve&&!!E.sheenColorMap,Be=Ve&&!!E.sheenRoughnessMap,qe=!!E.specularMap,Qe=!!E.specularColorMap,Ze=!!E.specularIntensityMap,H=We&&!!E.transmissionMap,ye=We&&!!E.thicknessMap,Ee=!!E.gradientMap,Ke=!!E.alphaMap,it=E.alphaTest>0,xt=!!E.alphaHash,Pt=!!E.extensions;let Ft=$o;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ft=e.toneMapping);const un={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:fe,fragmentShader:Q,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Oe,instancing:Ae,instancingColor:Ae&&R.instanceColor!==null,instancingMorph:Ae&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:be===null?e.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ro,alphaToCoverage:!!E.alphaToCoverage,map:le,matcap:Ie,envMap:Fe,envMapMode:Fe&&j.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:F,bumpMap:ie,normalMap:ae,displacementMap:p&&Ce,emissiveMap:Me,normalMapObjectSpace:ae&&E.normalMapType===bL,normalMapTangentSpace:ae&&E.normalMapType===B5,metalnessMap:X,roughnessMap:O,anisotropy:se,anisotropyMap:me,clearcoat:ce,clearcoatMap:ve,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ue,dispersion:ke,iridescence:$e,iridescenceMap:mt,iridescenceThicknessMap:at,sheen:Ve,sheenColorMap:ot,sheenRoughnessMap:Be,specularMap:qe,specularColorMap:Qe,specularIntensityMap:Ze,transmission:We,transmissionMap:H,thicknessMap:ye,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===dl&&E.alphaToCoverage===!1,alphaMap:Ke,alphaTest:it,alphaHash:xt,combine:E.combine,mapUv:le&&b(E.map.channel),aoMapUv:G&&b(E.aoMap.channel),lightMapUv:F&&b(E.lightMap.channel),bumpMapUv:ie&&b(E.bumpMap.channel),normalMapUv:ae&&b(E.normalMap.channel),displacementMapUv:Ce&&b(E.displacementMap.channel),emissiveMapUv:Me&&b(E.emissiveMap.channel),metalnessMapUv:X&&b(E.metalnessMap.channel),roughnessMapUv:O&&b(E.roughnessMap.channel),anisotropyMapUv:me&&b(E.anisotropyMap.channel),clearcoatMapUv:ve&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(E.sheenRoughnessMap.channel),specularMapUv:qe&&b(E.specularMap.channel),specularColorMapUv:Qe&&b(E.specularColorMap.channel),specularIntensityMapUv:Ze&&b(E.specularIntensityMap.channel),transmissionMapUv:H&&b(E.transmissionMap.channel),thicknessMapUv:ye&&b(E.thicknessMap.channel),alphaMapUv:Ke&&b(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ae||se),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!Z.attributes.uv&&(le||Ke),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:$.directional.length,numPointLights:$.point.length,numSpotLights:$.spot.length,numSpotLightMaps:$.spotLightMap.length,numRectAreaLights:$.rectArea.length,numHemiLights:$.hemi.length,numDirLightShadows:$.directionalShadowMap.length,numPointLightShadows:$.pointShadowMap.length,numSpotLightShadows:$.spotShadowMap.length,numSpotLightShadowsWithMaps:$.numSpotLightShadowsWithMaps,numLightProbes:$.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&T.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ft,useLegacyLights:e._useLegacyLights,decodeVideoTexture:le&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===cn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fr,flipSided:E.side===bi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Pt&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return un.vertexUv1s=u.has(1),un.vertexUv2s=u.has(2),un.vertexUv3s=u.has(3),u.clear(),un}function v(E){const $=[];if(E.shaderID?$.push(E.shaderID):($.push(E.customVertexShaderID),$.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)$.push(T),$.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(S($,E),k($,E),$.push(e.outputColorSpace)),$.push(E.customProgramCacheKey),$.join()}function S(E,$){E.push($.precision),E.push($.outputColorSpace),E.push($.envMapMode),E.push($.envMapCubeUVHeight),E.push($.mapUv),E.push($.alphaMapUv),E.push($.lightMapUv),E.push($.aoMapUv),E.push($.bumpMapUv),E.push($.normalMapUv),E.push($.displacementMapUv),E.push($.emissiveMapUv),E.push($.metalnessMapUv),E.push($.roughnessMapUv),E.push($.anisotropyMapUv),E.push($.clearcoatMapUv),E.push($.clearcoatNormalMapUv),E.push($.clearcoatRoughnessMapUv),E.push($.iridescenceMapUv),E.push($.iridescenceThicknessMapUv),E.push($.sheenColorMapUv),E.push($.sheenRoughnessMapUv),E.push($.specularMapUv),E.push($.specularColorMapUv),E.push($.specularIntensityMapUv),E.push($.transmissionMapUv),E.push($.thicknessMapUv),E.push($.combine),E.push($.fogExp2),E.push($.sizeAttenuation),E.push($.morphTargetsCount),E.push($.morphAttributeCount),E.push($.numDirLights),E.push($.numPointLights),E.push($.numSpotLights),E.push($.numSpotLightMaps),E.push($.numHemiLights),E.push($.numRectAreaLights),E.push($.numDirLightShadows),E.push($.numPointLightShadows),E.push($.numSpotLightShadows),E.push($.numSpotLightShadowsWithMaps),E.push($.numLightProbes),E.push($.shadowMapType),E.push($.toneMapping),E.push($.numClippingPlanes),E.push($.numClipIntersection),E.push($.depthPacking)}function k(E,$){l.disableAll(),$.supportsVertexTextures&&l.enable(0),$.instancing&&l.enable(1),$.instancingColor&&l.enable(2),$.instancingMorph&&l.enable(3),$.matcap&&l.enable(4),$.envMap&&l.enable(5),$.normalMapObjectSpace&&l.enable(6),$.normalMapTangentSpace&&l.enable(7),$.clearcoat&&l.enable(8),$.iridescence&&l.enable(9),$.alphaTest&&l.enable(10),$.vertexColors&&l.enable(11),$.vertexAlphas&&l.enable(12),$.vertexUv1s&&l.enable(13),$.vertexUv2s&&l.enable(14),$.vertexUv3s&&l.enable(15),$.vertexTangents&&l.enable(16),$.anisotropy&&l.enable(17),$.alphaHash&&l.enable(18),$.batching&&l.enable(19),$.dispersion&&l.enable(20),E.push(l.mask),l.disableAll(),$.fog&&l.enable(0),$.useFog&&l.enable(1),$.flatShading&&l.enable(2),$.logarithmicDepthBuffer&&l.enable(3),$.skinning&&l.enable(4),$.morphTargets&&l.enable(5),$.morphNormals&&l.enable(6),$.morphColors&&l.enable(7),$.premultipliedAlpha&&l.enable(8),$.shadowMapEnabled&&l.enable(9),$.useLegacyLights&&l.enable(10),$.doubleSided&&l.enable(11),$.flipSided&&l.enable(12),$.useDepthPacking&&l.enable(13),$.dithering&&l.enable(14),$.transmission&&l.enable(15),$.sheen&&l.enable(16),$.opaque&&l.enable(17),$.pointsUvs&&l.enable(18),$.decodeVideoTexture&&l.enable(19),$.alphaToCoverage&&l.enable(20),E.push(l.mask)}function C(E){const $=y[E.type];let T;if($){const U=mr[$];T=u9.clone(U.uniforms)}else T=E.uniforms;return T}function P(E,$){let T;for(let U=0,R=c.length;U<R;U++){const V=c[U];if(V.cacheKey===$){T=V,++T.usedTimes;break}}return T===void 0&&(T=new _O(e,$,E,s),c.push(T)),T}function w(E){if(--E.usedTimes===0){const $=c.indexOf(E);c[$]=c[c.length-1],c.pop(),E.destroy()}}function x(E){a.remove(E)}function N(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:C,acquireProgram:P,releaseProgram:w,releaseShaderCache:x,programs:c,dispose:N}}function MO(){let e=new WeakMap;function t(s){let r=e.get(s);return r===void 0&&(r={},e.set(s,r)),r}function n(s){e.delete(s)}function i(s,r,l){e.get(s)[r]=l}function o(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:o}}function xO(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function z3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function N3(){const e=[];let t=0;const n=[],i=[],o=[];function s(){t=0,n.length=0,i.length=0,o.length=0}function r(d,p,g,y,b,m){let v=e[t];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,groupOrder:y,renderOrder:d.renderOrder,z:b,group:m},e[t]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=b,v.group=m),t++,v}function l(d,p,g,y,b,m){const v=r(d,p,g,y,b,m);g.transmission>0?i.push(v):g.transparent===!0?o.push(v):n.push(v)}function a(d,p,g,y,b,m){const v=r(d,p,g,y,b,m);g.transmission>0?i.unshift(v):g.transparent===!0?o.unshift(v):n.unshift(v)}function u(d,p){n.length>1&&n.sort(d||xO),i.length>1&&i.sort(p||z3),o.length>1&&o.sort(p||z3)}function c(){for(let d=t,p=e.length;d<p;d++){const g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:o,init:s,push:l,unshift:a,finish:c,sort:u}}function PO(){let e=new WeakMap;function t(i,o){const s=e.get(i);let r;return s===void 0?(r=new N3,e.set(i,[r])):o>=s.length?(r=new N3,s.push(r)):r=s[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function EO(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Te,color:new jt};break;case"SpotLight":n={position:new Te,direction:new Te,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Te,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Te,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new Te,halfWidth:new Te,halfHeight:new Te};break}return e[t.id]=n,n}}}function LO(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let TO=0;function IO(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function AO(e){const t=new EO,n=LO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Te);const o=new Te,s=new hn,r=new hn;function l(u,c){let d=0,p=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let y=0,b=0,m=0,v=0,S=0,k=0,C=0,P=0,w=0,x=0,N=0;u.sort(IO);const E=c===!0?Math.PI:1;for(let T=0,U=u.length;T<U;T++){const R=u[T],V=R.color,Z=R.intensity,W=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=V.r*Z*E,p+=V.g*Z*E,g+=V.b*Z*E;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],Z);N++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){const K=R.shadow,I=n.get(R);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[y]=I,i.directionalShadowMap[y]=j,i.directionalShadowMatrix[y]=R.shadow.matrix,k++}i.directional[y]=B,y++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(V).multiplyScalar(Z*E),B.distance=W,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[m]=B;const K=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[m]=K.matrix,R.castShadow){const I=n.get(R);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[m]=I,i.spotShadowMap[m]=j,P++}m++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(V).multiplyScalar(Z),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=B,v++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*E),B.distance=R.distance,B.decay=R.decay,R.castShadow){const K=R.shadow,I=n.get(R);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[b]=I,i.pointShadowMap[b]=j,i.pointShadowMatrix[b]=R.shadow.matrix,C++}i.point[b]=B,b++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(Z*E),B.groundColor.copy(R.groundColor).multiplyScalar(Z*E),i.hemi[S]=B,S++}}v>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const $=i.hash;($.directionalLength!==y||$.pointLength!==b||$.spotLength!==m||$.rectAreaLength!==v||$.hemiLength!==S||$.numDirectionalShadows!==k||$.numPointShadows!==C||$.numSpotShadows!==P||$.numSpotMaps!==w||$.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=m,i.rectArea.length=v,i.point.length=b,i.hemi.length=S,i.directionalShadow.length=k,i.directionalShadowMap.length=k,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=k,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=P+w-x,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=N,$.directionalLength=y,$.pointLength=b,$.spotLength=m,$.rectAreaLength=v,$.hemiLength=S,$.numDirectionalShadows=k,$.numPointShadows=C,$.numSpotShadows=P,$.numSpotMaps=w,$.numLightProbes=N,i.version=TO++)}function a(u,c){let d=0,p=0,g=0,y=0,b=0;const m=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const k=u[v];if(k.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(m),d++}else if(k.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(k.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(m),g++}else if(k.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(k.matrixWorld),C.position.applyMatrix4(m),r.identity(),s.copy(k.matrixWorld),s.premultiply(m),r.extractRotation(s),C.halfWidth.set(k.width*.5,0,0),C.halfHeight.set(0,k.height*.5,0),C.halfWidth.applyMatrix4(r),C.halfHeight.applyMatrix4(r),y++}else if(k.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(k.matrixWorld),C.position.applyMatrix4(m),p++}else if(k.isHemisphereLight){const C=i.hemi[b];C.direction.setFromMatrixPosition(k.matrixWorld),C.direction.transformDirection(m),b++}}}return{setup:l,setupView:a,state:i}}function R3(e){const t=new AO(e),n=[],i=[];function o(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function r(c){i.push(c)}function l(c){t.setup(n,c)}function a(c){t.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:l,setupLightsView:a,pushLight:s,pushShadow:r}}function OO(e){let t=new WeakMap;function n(o,s=0){const r=t.get(o);let l;return r===void 0?(l=new R3(e),t.set(o,[l])):s>=r.length?(l=new R3(e),r.push(l)):l=r[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class zO extends Ll{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NO extends Ll{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const RO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DO(e,t,n){let i=new bb;const o=new Lt,s=new Lt,r=new On,l=new zO({depthPacking:yL}),a=new NO,u={},c=n.maxTextureSize,d={[Po]:bi,[bi]:Po,[Fr]:Fr},p=new To({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:RO,fragmentShader:BO}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new qr;y.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new pi(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E5;let v=this.type;this.render=function(w,x,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=e.getRenderTarget(),$=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),U=e.state;U.setBlending(wo),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const R=v!==Dr&&this.type===Dr,V=v===Dr&&this.type!==Dr;for(let Z=0,W=w.length;Z<W;Z++){const j=w[Z],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const K=B.getFrameExtents();if(o.multiply(K),s.copy(B.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(s.x=Math.floor(c/K.x),o.x=s.x*K.x,B.mapSize.x=s.x),o.y>c&&(s.y=Math.floor(c/K.y),o.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null||R===!0||V===!0){const Y=this.type!==Dr?{minFilter:Ri,magFilter:Ri}:{};B.map!==null&&B.map.dispose(),B.map=new ks(o.x,o.y,Y),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const I=B.getViewportCount();for(let Y=0;Y<I;Y++){const re=B.getViewport(Y);r.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),U.viewport(r),B.updateMatrices(j,Y),i=B.getFrustum(),C(x,N,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Dr&&S(B,N),B.needsUpdate=!1}v=this.type,m.needsUpdate=!1,e.setRenderTarget(E,$,T)};function S(w,x){const N=t.update(b);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ks(o.x,o.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(x,null,N,p,b,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(x,null,N,g,b,null)}function k(w,x,N,E){let $=null;const T=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)$=T;else if($=N.isPointLight===!0?a:l,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const U=$.uuid,R=x.uuid;let V=u[U];V===void 0&&(V={},u[U]=V);let Z=V[R];Z===void 0&&(Z=$.clone(),V[R]=Z,x.addEventListener("dispose",P)),$=Z}if($.visible=x.visible,$.wireframe=x.wireframe,E===Dr?$.side=x.shadowSide!==null?x.shadowSide:x.side:$.side=x.shadowSide!==null?x.shadowSide:d[x.side],$.alphaMap=x.alphaMap,$.alphaTest=x.alphaTest,$.map=x.map,$.clipShadows=x.clipShadows,$.clippingPlanes=x.clippingPlanes,$.clipIntersection=x.clipIntersection,$.displacementMap=x.displacementMap,$.displacementScale=x.displacementScale,$.displacementBias=x.displacementBias,$.wireframeLinewidth=x.wireframeLinewidth,$.linewidth=x.linewidth,N.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const U=e.properties.get($);U.light=N}return $}function C(w,x,N,E,$){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&$===Dr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const R=t.update(w),V=w.material;if(Array.isArray(V)){const Z=R.groups;for(let W=0,j=Z.length;W<j;W++){const B=Z[W],K=V[B.materialIndex];if(K&&K.visible){const I=k(w,K,E,$);w.onBeforeShadow(e,w,x,N,R,I,B),e.renderBufferDirect(N,null,R,I,w,B),w.onAfterShadow(e,w,x,N,R,I,B)}}}else if(V.visible){const Z=k(w,V,E,$);w.onBeforeShadow(e,w,x,N,R,Z,null),e.renderBufferDirect(N,null,R,Z,w,null),w.onAfterShadow(e,w,x,N,R,Z,null)}}const U=w.children;for(let R=0,V=U.length;R<V;R++)C(U[R],x,N,E,$)}function P(w){w.target.removeEventListener("dispose",P);for(const N in u){const E=u[N],$=w.target.uuid;$ in E&&(E[$].dispose(),delete E[$])}}}function FO(e){function t(){let H=!1;const ye=new On;let Ee=null;const Ke=new On(0,0,0,0);return{setMask:function(it){Ee!==it&&!H&&(e.colorMask(it,it,it,it),Ee=it)},setLocked:function(it){H=it},setClear:function(it,xt,Pt,Ft,un){un===!0&&(it*=Ft,xt*=Ft,Pt*=Ft),ye.set(it,xt,Pt,Ft),Ke.equals(ye)===!1&&(e.clearColor(it,xt,Pt,Ft),Ke.copy(ye))},reset:function(){H=!1,Ee=null,Ke.set(-1,0,0,0)}}}function n(){let H=!1,ye=null,Ee=null,Ke=null;return{setTest:function(it){it?pe(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(it){ye!==it&&!H&&(e.depthMask(it),ye=it)},setFunc:function(it){if(Ee!==it){switch(it){case H7:e.depthFunc(e.NEVER);break;case W7:e.depthFunc(e.ALWAYS);break;case G7:e.depthFunc(e.LESS);break;case pd:e.depthFunc(e.LEQUAL);break;case q7:e.depthFunc(e.EQUAL);break;case K7:e.depthFunc(e.GEQUAL);break;case Z7:e.depthFunc(e.GREATER);break;case X7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ee=it}},setLocked:function(it){H=it},setClear:function(it){Ke!==it&&(e.clearDepth(it),Ke=it)},reset:function(){H=!1,ye=null,Ee=null,Ke=null}}}function i(){let H=!1,ye=null,Ee=null,Ke=null,it=null,xt=null,Pt=null,Ft=null,un=null;return{setTest:function(Ot){H||(Ot?pe(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(Ot){ye!==Ot&&!H&&(e.stencilMask(Ot),ye=Ot)},setFunc:function(Ot,et,vt){(Ee!==Ot||Ke!==et||it!==vt)&&(e.stencilFunc(Ot,et,vt),Ee=Ot,Ke=et,it=vt)},setOp:function(Ot,et,vt){(xt!==Ot||Pt!==et||Ft!==vt)&&(e.stencilOp(Ot,et,vt),xt=Ot,Pt=et,Ft=vt)},setLocked:function(Ot){H=Ot},setClear:function(Ot){un!==Ot&&(e.clearStencil(Ot),un=Ot)},reset:function(){H=!1,ye=null,Ee=null,Ke=null,it=null,xt=null,Pt=null,Ft=null,un=null}}}const o=new t,s=new n,r=new i,l=new WeakMap,a=new WeakMap;let u={},c={},d=new WeakMap,p=[],g=null,y=!1,b=null,m=null,v=null,S=null,k=null,C=null,P=null,w=new jt(0,0,0),x=0,N=!1,E=null,$=null,T=null,U=null,R=null;const V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=W>=2);let B=null,K={};const I=e.getParameter(e.SCISSOR_BOX),Y=e.getParameter(e.VIEWPORT),re=new On().fromArray(I),fe=new On().fromArray(Y);function Q(H,ye,Ee,Ke){const it=new Uint8Array(4),xt=e.createTexture();e.bindTexture(H,xt),e.texParameteri(H,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(H,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pt=0;Pt<Ee;Pt++)H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?e.texImage3D(ye,0,e.RGBA,1,1,Ke,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(ye+Pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return xt}const ne={};ne[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),r.setClear(0),pe(e.DEPTH_TEST),s.setFunc(pd),ie(!1),ae(g4),pe(e.CULL_FACE),G(wo);function pe(H){u[H]!==!0&&(e.enable(H),u[H]=!0)}function be(H){u[H]!==!1&&(e.disable(H),u[H]=!1)}function Ae(H,ye){return c[H]!==ye?(e.bindFramebuffer(H,ye),c[H]=ye,H===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=ye),H===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=ye),!0):!1}function Oe(H,ye){let Ee=p,Ke=!1;if(H){Ee=d.get(ye),Ee===void 0&&(Ee=[],d.set(ye,Ee));const it=H.textures;if(Ee.length!==it.length||Ee[0]!==e.COLOR_ATTACHMENT0){for(let xt=0,Pt=it.length;xt<Pt;xt++)Ee[xt]=e.COLOR_ATTACHMENT0+xt;Ee.length=it.length,Ke=!0}}else Ee[0]!==e.BACK&&(Ee[0]=e.BACK,Ke=!0);Ke&&e.drawBuffers(Ee)}function le(H){return g!==H?(e.useProgram(H),g=H,!0):!1}const Ie={[rs]:e.FUNC_ADD,[x7]:e.FUNC_SUBTRACT,[P7]:e.FUNC_REVERSE_SUBTRACT};Ie[E7]=e.MIN,Ie[L7]=e.MAX;const Fe={[T7]:e.ZERO,[I7]:e.ONE,[A7]:e.SRC_COLOR,[n2]:e.SRC_ALPHA,[D7]:e.SRC_ALPHA_SATURATE,[R7]:e.DST_COLOR,[z7]:e.DST_ALPHA,[O7]:e.ONE_MINUS_SRC_COLOR,[i2]:e.ONE_MINUS_SRC_ALPHA,[B7]:e.ONE_MINUS_DST_COLOR,[N7]:e.ONE_MINUS_DST_ALPHA,[F7]:e.CONSTANT_COLOR,[j7]:e.ONE_MINUS_CONSTANT_COLOR,[V7]:e.CONSTANT_ALPHA,[U7]:e.ONE_MINUS_CONSTANT_ALPHA};function G(H,ye,Ee,Ke,it,xt,Pt,Ft,un,Ot){if(H===wo){y===!0&&(be(e.BLEND),y=!1);return}if(y===!1&&(pe(e.BLEND),y=!0),H!==M7){if(H!==b||Ot!==N){if((m!==rs||k!==rs)&&(e.blendEquation(e.FUNC_ADD),m=rs,k=rs),Ot)switch(H){case dl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y4:e.blendFunc(e.ONE,e.ONE);break;case b4:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case k4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case dl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case y4:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case b4:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case k4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,S=null,C=null,P=null,w.set(0,0,0),x=0,b=H,N=Ot}return}it=it||ye,xt=xt||Ee,Pt=Pt||Ke,(ye!==m||it!==k)&&(e.blendEquationSeparate(Ie[ye],Ie[it]),m=ye,k=it),(Ee!==v||Ke!==S||xt!==C||Pt!==P)&&(e.blendFuncSeparate(Fe[Ee],Fe[Ke],Fe[xt],Fe[Pt]),v=Ee,S=Ke,C=xt,P=Pt),(Ft.equals(w)===!1||un!==x)&&(e.blendColor(Ft.r,Ft.g,Ft.b,un),w.copy(Ft),x=un),b=H,N=!1}function F(H,ye){H.side===Fr?be(e.CULL_FACE):pe(e.CULL_FACE);let Ee=H.side===bi;ye&&(Ee=!Ee),ie(Ee),H.blending===dl&&H.transparent===!1?G(wo):G(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ke=H.stencilWrite;r.setTest(Ke),Ke&&(r.setMask(H.stencilWriteMask),r.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),r.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function ie(H){E!==H&&(H?e.frontFace(e.CW):e.frontFace(e.CCW),E=H)}function ae(H){H!==S7?(pe(e.CULL_FACE),H!==$&&(H===g4?e.cullFace(e.BACK):H===w7?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),$=H}function Ce(H){H!==T&&(Z&&e.lineWidth(H),T=H)}function Me(H,ye,Ee){H?(pe(e.POLYGON_OFFSET_FILL),(U!==ye||R!==Ee)&&(e.polygonOffset(ye,Ee),U=ye,R=Ee)):be(e.POLYGON_OFFSET_FILL)}function X(H){H?pe(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function O(H){H===void 0&&(H=e.TEXTURE0+V-1),B!==H&&(e.activeTexture(H),B=H)}function se(H,ye,Ee){Ee===void 0&&(B===null?Ee=e.TEXTURE0+V-1:Ee=B);let Ke=K[Ee];Ke===void 0&&(Ke={type:void 0,texture:void 0},K[Ee]=Ke),(Ke.type!==H||Ke.texture!==ye)&&(B!==Ee&&(e.activeTexture(Ee),B=Ee),e.bindTexture(H,ye||ne[H]),Ke.type=H,Ke.texture=ye)}function ce(){const H=K[B];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ke(){try{e.compressedTexImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{e.compressedTexImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{e.texSubImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{e.texSubImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{e.texStorage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{e.texStorage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{e.texImage2D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{e.texImage3D.apply(e,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(H){re.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function Be(H){fe.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),fe.copy(H))}function qe(H,ye){let Ee=a.get(ye);Ee===void 0&&(Ee=new WeakMap,a.set(ye,Ee));let Ke=Ee.get(H);Ke===void 0&&(Ke=e.getUniformBlockIndex(ye,H.name),Ee.set(H,Ke))}function Qe(H,ye){const Ke=a.get(ye).get(H);l.get(ye)!==Ke&&(e.uniformBlockBinding(ye,Ke,H.__bindingPointIndex),l.set(ye,Ke))}function Ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},B=null,K={},c={},d=new WeakMap,p=[],g=null,y=!1,b=null,m=null,v=null,S=null,k=null,C=null,P=null,w=new jt(0,0,0),x=0,N=!1,E=null,$=null,T=null,U=null,R=null,re.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),r.reset()}return{buffers:{color:o,depth:s,stencil:r},enable:pe,disable:be,bindFramebuffer:Ae,drawBuffers:Oe,useProgram:le,setBlending:G,setMaterial:F,setFlipSided:ie,setCullFace:ae,setLineWidth:Ce,setPolygonOffset:Me,setScissorTest:X,activeTexture:O,bindTexture:se,unbindTexture:ce,compressedTexImage2D:ke,compressedTexImage3D:$e,texImage2D:mt,texImage3D:at,updateUBOMapping:qe,uniformBlockBinding:Qe,texStorage2D:ge,texStorage3D:Ue,texSubImage2D:Ve,texSubImage3D:We,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:ot,viewport:Be,reset:Ze}}function jO(e,t,n,i,o,s,r){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Lt,c=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(X,O){return g?new OffscreenCanvas(X,O):yd("canvas")}function b(X,O,se){let ce=1;const ke=Me(X);if((ke.width>se||ke.height>se)&&(ce=se/Math.max(ke.width,ke.height)),ce<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const $e=Math.floor(ce*ke.width),Ve=Math.floor(ce*ke.height);d===void 0&&(d=y($e,Ve));const We=O?y($e,Ve):d;return We.width=$e,We.height=Ve,We.getContext("2d").drawImage(X,0,0,$e,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ke.width+"x"+ke.height+") to ("+$e+"x"+Ve+")."),We}else return"data"in X&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ke.width+"x"+ke.height+")."),X;return X}function m(X){return X.generateMipmaps&&X.minFilter!==Ri&&X.minFilter!==Xi}function v(X){e.generateMipmap(X)}function S(X,O,se,ce,ke=!1){if(X!==null){if(e[X]!==void 0)return e[X];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let $e=O;if(O===e.RED&&(se===e.FLOAT&&($e=e.R32F),se===e.HALF_FLOAT&&($e=e.R16F),se===e.UNSIGNED_BYTE&&($e=e.R8)),O===e.RED_INTEGER&&(se===e.UNSIGNED_BYTE&&($e=e.R8UI),se===e.UNSIGNED_SHORT&&($e=e.R16UI),se===e.UNSIGNED_INT&&($e=e.R32UI),se===e.BYTE&&($e=e.R8I),se===e.SHORT&&($e=e.R16I),se===e.INT&&($e=e.R32I)),O===e.RG&&(se===e.FLOAT&&($e=e.RG32F),se===e.HALF_FLOAT&&($e=e.RG16F),se===e.UNSIGNED_BYTE&&($e=e.RG8)),O===e.RG_INTEGER&&(se===e.UNSIGNED_BYTE&&($e=e.RG8UI),se===e.UNSIGNED_SHORT&&($e=e.RG16UI),se===e.UNSIGNED_INT&&($e=e.RG32UI),se===e.BYTE&&($e=e.RG8I),se===e.SHORT&&($e=e.RG16I),se===e.INT&&($e=e.RG32I)),O===e.RGB&&se===e.UNSIGNED_INT_5_9_9_9_REV&&($e=e.RGB9_E5),O===e.RGBA){const Ve=ke?hd:Jt.getTransfer(ce);se===e.FLOAT&&($e=e.RGBA32F),se===e.HALF_FLOAT&&($e=e.RGBA16F),se===e.UNSIGNED_BYTE&&($e=Ve===cn?e.SRGB8_ALPHA8:e.RGBA8),se===e.UNSIGNED_SHORT_4_4_4_4&&($e=e.RGBA4),se===e.UNSIGNED_SHORT_5_5_5_1&&($e=e.RGB5_A1)}return($e===e.R16F||$e===e.R32F||$e===e.RG16F||$e===e.RG32F||$e===e.RGBA16F||$e===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$e}function k(X,O){return m(X)===!0||X.isFramebufferTexture&&X.minFilter!==Ri&&X.minFilter!==Xi?Math.log2(Math.max(O.width,O.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?O.mipmaps.length:1}function C(X){const O=X.target;O.removeEventListener("dispose",C),w(O),O.isVideoTexture&&c.delete(O)}function P(X){const O=X.target;O.removeEventListener("dispose",P),N(O)}function w(X){const O=i.get(X);if(O.__webglInit===void 0)return;const se=X.source,ce=p.get(se);if(ce){const ke=ce[O.__cacheKey];ke.usedTimes--,ke.usedTimes===0&&x(X),Object.keys(ce).length===0&&p.delete(se)}i.remove(X)}function x(X){const O=i.get(X);e.deleteTexture(O.__webglTexture);const se=X.source,ce=p.get(se);delete ce[O.__cacheKey],r.memory.textures--}function N(X){const O=i.get(X);if(X.depthTexture&&X.depthTexture.dispose(),X.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(O.__webglFramebuffer[ce]))for(let ke=0;ke<O.__webglFramebuffer[ce].length;ke++)e.deleteFramebuffer(O.__webglFramebuffer[ce][ke]);else e.deleteFramebuffer(O.__webglFramebuffer[ce]);O.__webglDepthbuffer&&e.deleteRenderbuffer(O.__webglDepthbuffer[ce])}else{if(Array.isArray(O.__webglFramebuffer))for(let ce=0;ce<O.__webglFramebuffer.length;ce++)e.deleteFramebuffer(O.__webglFramebuffer[ce]);else e.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&e.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&e.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ce=0;ce<O.__webglColorRenderbuffer.length;ce++)O.__webglColorRenderbuffer[ce]&&e.deleteRenderbuffer(O.__webglColorRenderbuffer[ce]);O.__webglDepthRenderbuffer&&e.deleteRenderbuffer(O.__webglDepthRenderbuffer)}const se=X.textures;for(let ce=0,ke=se.length;ce<ke;ce++){const $e=i.get(se[ce]);$e.__webglTexture&&(e.deleteTexture($e.__webglTexture),r.memory.textures--),i.remove(se[ce])}i.remove(X)}let E=0;function $(){E=0}function T(){const X=E;return X>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+X+" texture units while this GPU supports only "+o.maxTextures),E+=1,X}function U(X){const O=[];return O.push(X.wrapS),O.push(X.wrapT),O.push(X.wrapR||0),O.push(X.magFilter),O.push(X.minFilter),O.push(X.anisotropy),O.push(X.internalFormat),O.push(X.format),O.push(X.type),O.push(X.generateMipmaps),O.push(X.premultiplyAlpha),O.push(X.flipY),O.push(X.unpackAlignment),O.push(X.colorSpace),O.join()}function R(X,O){const se=i.get(X);if(X.isVideoTexture&&ae(X),X.isRenderTargetTexture===!1&&X.version>0&&se.__version!==X.version){const ce=X.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(se,X,O);return}}n.bindTexture(e.TEXTURE_2D,se.__webglTexture,e.TEXTURE0+O)}function V(X,O){const se=i.get(X);if(X.version>0&&se.__version!==X.version){re(se,X,O);return}n.bindTexture(e.TEXTURE_2D_ARRAY,se.__webglTexture,e.TEXTURE0+O)}function Z(X,O){const se=i.get(X);if(X.version>0&&se.__version!==X.version){re(se,X,O);return}n.bindTexture(e.TEXTURE_3D,se.__webglTexture,e.TEXTURE0+O)}function W(X,O){const se=i.get(X);if(X.version>0&&se.__version!==X.version){fe(se,X,O);return}n.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture,e.TEXTURE0+O)}const j={[s2]:e.REPEAT,[ls]:e.CLAMP_TO_EDGE,[l2]:e.MIRRORED_REPEAT},B={[Ri]:e.NEAREST,[sL]:e.NEAREST_MIPMAP_NEAREST,[yu]:e.NEAREST_MIPMAP_LINEAR,[Xi]:e.LINEAR,[up]:e.LINEAR_MIPMAP_NEAREST,[as]:e.LINEAR_MIPMAP_LINEAR},K={[kL]:e.NEVER,[ML]:e.ALWAYS,[_L]:e.LESS,[D5]:e.LEQUAL,[CL]:e.EQUAL,[$L]:e.GEQUAL,[SL]:e.GREATER,[wL]:e.NOTEQUAL};function I(X,O){if(O.type===ko&&t.has("OES_texture_float_linear")===!1&&(O.magFilter===Xi||O.magFilter===up||O.magFilter===yu||O.magFilter===as||O.minFilter===Xi||O.minFilter===up||O.minFilter===yu||O.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(X,e.TEXTURE_WRAP_S,j[O.wrapS]),e.texParameteri(X,e.TEXTURE_WRAP_T,j[O.wrapT]),(X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY)&&e.texParameteri(X,e.TEXTURE_WRAP_R,j[O.wrapR]),e.texParameteri(X,e.TEXTURE_MAG_FILTER,B[O.magFilter]),e.texParameteri(X,e.TEXTURE_MIN_FILTER,B[O.minFilter]),O.compareFunction&&(e.texParameteri(X,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(X,e.TEXTURE_COMPARE_FUNC,K[O.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===Ri||O.minFilter!==yu&&O.minFilter!==as||O.type===ko&&t.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||i.get(O).__currentAnisotropy){const se=t.get("EXT_texture_filter_anisotropic");e.texParameterf(X,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,o.getMaxAnisotropy())),i.get(O).__currentAnisotropy=O.anisotropy}}}function Y(X,O){let se=!1;X.__webglInit===void 0&&(X.__webglInit=!0,O.addEventListener("dispose",C));const ce=O.source;let ke=p.get(ce);ke===void 0&&(ke={},p.set(ce,ke));const $e=U(O);if($e!==X.__cacheKey){ke[$e]===void 0&&(ke[$e]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,se=!0),ke[$e].usedTimes++;const Ve=ke[X.__cacheKey];Ve!==void 0&&(ke[X.__cacheKey].usedTimes--,Ve.usedTimes===0&&x(O)),X.__cacheKey=$e,X.__webglTexture=ke[$e].texture}return se}function re(X,O,se){let ce=e.TEXTURE_2D;(O.isDataArrayTexture||O.isCompressedArrayTexture)&&(ce=e.TEXTURE_2D_ARRAY),O.isData3DTexture&&(ce=e.TEXTURE_3D);const ke=Y(X,O),$e=O.source;n.bindTexture(ce,X.__webglTexture,e.TEXTURE0+se);const Ve=i.get($e);if($e.version!==Ve.__version||ke===!0){n.activeTexture(e.TEXTURE0+se);const We=Jt.getPrimaries(Jt.workingColorSpace),me=O.colorSpace===yo?null:Jt.getPrimaries(O.colorSpace),ve=O.colorSpace===yo||We===me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,O.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,O.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ge=b(O.image,!1,o.maxTextureSize);ge=Ce(O,ge);const Ue=s.convert(O.format,O.colorSpace),mt=s.convert(O.type);let at=S(O.internalFormat,Ue,mt,O.colorSpace,O.isVideoTexture);I(ce,O);let ot;const Be=O.mipmaps,qe=O.isVideoTexture!==!0,Qe=Ve.__version===void 0||ke===!0,Ze=$e.dataReady,H=k(O,ge);if(O.isDepthTexture)at=e.DEPTH_COMPONENT16,O.type===ko?at=e.DEPTH_COMPONENT32F:O.type===wl?at=e.DEPTH_COMPONENT24:O.type===Ga&&(at=e.DEPTH24_STENCIL8),Qe&&(qe?n.texStorage2D(e.TEXTURE_2D,1,at,ge.width,ge.height):n.texImage2D(e.TEXTURE_2D,0,at,ge.width,ge.height,0,Ue,mt,null));else if(O.isDataTexture)if(Be.length>0){qe&&Qe&&n.texStorage2D(e.TEXTURE_2D,H,at,Be[0].width,Be[0].height);for(let ye=0,Ee=Be.length;ye<Ee;ye++)ot=Be[ye],qe?Ze&&n.texSubImage2D(e.TEXTURE_2D,ye,0,0,ot.width,ot.height,Ue,mt,ot.data):n.texImage2D(e.TEXTURE_2D,ye,at,ot.width,ot.height,0,Ue,mt,ot.data);O.generateMipmaps=!1}else qe?(Qe&&n.texStorage2D(e.TEXTURE_2D,H,at,ge.width,ge.height),Ze&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ge.width,ge.height,Ue,mt,ge.data)):n.texImage2D(e.TEXTURE_2D,0,at,ge.width,ge.height,0,Ue,mt,ge.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){qe&&Qe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,H,at,Be[0].width,Be[0].height,ge.depth);for(let ye=0,Ee=Be.length;ye<Ee;ye++)ot=Be[ye],O.format!==br?Ue!==null?qe?Ze&&n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ye,0,0,0,ot.width,ot.height,ge.depth,Ue,ot.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ye,at,ot.width,ot.height,ge.depth,0,ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Ze&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ye,0,0,0,ot.width,ot.height,ge.depth,Ue,mt,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ye,at,ot.width,ot.height,ge.depth,0,Ue,mt,ot.data)}else{qe&&Qe&&n.texStorage2D(e.TEXTURE_2D,H,at,Be[0].width,Be[0].height);for(let ye=0,Ee=Be.length;ye<Ee;ye++)ot=Be[ye],O.format!==br?Ue!==null?qe?Ze&&n.compressedTexSubImage2D(e.TEXTURE_2D,ye,0,0,ot.width,ot.height,Ue,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,ye,at,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Ze&&n.texSubImage2D(e.TEXTURE_2D,ye,0,0,ot.width,ot.height,Ue,mt,ot.data):n.texImage2D(e.TEXTURE_2D,ye,at,ot.width,ot.height,0,Ue,mt,ot.data)}else if(O.isDataArrayTexture)qe?(Qe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,H,at,ge.width,ge.height,ge.depth),Ze&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ue,mt,ge.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,at,ge.width,ge.height,ge.depth,0,Ue,mt,ge.data);else if(O.isData3DTexture)qe?(Qe&&n.texStorage3D(e.TEXTURE_3D,H,at,ge.width,ge.height,ge.depth),Ze&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ue,mt,ge.data)):n.texImage3D(e.TEXTURE_3D,0,at,ge.width,ge.height,ge.depth,0,Ue,mt,ge.data);else if(O.isFramebufferTexture){if(Qe)if(qe)n.texStorage2D(e.TEXTURE_2D,H,at,ge.width,ge.height);else{let ye=ge.width,Ee=ge.height;for(let Ke=0;Ke<H;Ke++)n.texImage2D(e.TEXTURE_2D,Ke,at,ye,Ee,0,Ue,mt,null),ye>>=1,Ee>>=1}}else if(Be.length>0){if(qe&&Qe){const ye=Me(Be[0]);n.texStorage2D(e.TEXTURE_2D,H,at,ye.width,ye.height)}for(let ye=0,Ee=Be.length;ye<Ee;ye++)ot=Be[ye],qe?Ze&&n.texSubImage2D(e.TEXTURE_2D,ye,0,0,Ue,mt,ot):n.texImage2D(e.TEXTURE_2D,ye,at,Ue,mt,ot);O.generateMipmaps=!1}else if(qe){if(Qe){const ye=Me(ge);n.texStorage2D(e.TEXTURE_2D,H,at,ye.width,ye.height)}Ze&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ue,mt,ge)}else n.texImage2D(e.TEXTURE_2D,0,at,Ue,mt,ge);m(O)&&v(ce),Ve.__version=$e.version,O.onUpdate&&O.onUpdate(O)}X.__version=O.version}function fe(X,O,se){if(O.image.length!==6)return;const ce=Y(X,O),ke=O.source;n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture,e.TEXTURE0+se);const $e=i.get(ke);if(ke.version!==$e.__version||ce===!0){n.activeTexture(e.TEXTURE0+se);const Ve=Jt.getPrimaries(Jt.workingColorSpace),We=O.colorSpace===yo?null:Jt.getPrimaries(O.colorSpace),me=O.colorSpace===yo||Ve===We?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,O.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,O.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ve=O.isCompressedTexture||O.image[0].isCompressedTexture,ge=O.image[0]&&O.image[0].isDataTexture,Ue=[];for(let Ee=0;Ee<6;Ee++)!ve&&!ge?Ue[Ee]=b(O.image[Ee],!0,o.maxCubemapSize):Ue[Ee]=ge?O.image[Ee].image:O.image[Ee],Ue[Ee]=Ce(O,Ue[Ee]);const mt=Ue[0],at=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),Be=S(O.internalFormat,at,ot,O.colorSpace),qe=O.isVideoTexture!==!0,Qe=$e.__version===void 0||ce===!0,Ze=ke.dataReady;let H=k(O,mt);I(e.TEXTURE_CUBE_MAP,O);let ye;if(ve){qe&&Qe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,H,Be,mt.width,mt.height);for(let Ee=0;Ee<6;Ee++){ye=Ue[Ee].mipmaps;for(let Ke=0;Ke<ye.length;Ke++){const it=ye[Ke];O.format!==br?at!==null?qe?Ze&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,it.width,it.height,at,it.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,Be,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Ze&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,it.width,it.height,at,ot,it.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,Be,it.width,it.height,0,at,ot,it.data)}}}else{if(ye=O.mipmaps,qe&&Qe){ye.length>0&&H++;const Ee=Me(Ue[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,H,Be,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ge){qe?Ze&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue[Ee].width,Ue[Ee].height,at,ot,Ue[Ee].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Be,Ue[Ee].width,Ue[Ee].height,0,at,ot,Ue[Ee].data);for(let Ke=0;Ke<ye.length;Ke++){const xt=ye[Ke].image[Ee].image;qe?Ze&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,xt.width,xt.height,at,ot,xt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,Be,xt.width,xt.height,0,at,ot,xt.data)}}else{qe?Ze&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,at,ot,Ue[Ee]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Be,at,ot,Ue[Ee]);for(let Ke=0;Ke<ye.length;Ke++){const it=ye[Ke];qe?Ze&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,at,ot,it.image[Ee]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,Be,at,ot,it.image[Ee])}}}m(O)&&v(e.TEXTURE_CUBE_MAP),$e.__version=ke.version,O.onUpdate&&O.onUpdate(O)}X.__version=O.version}function Q(X,O,se,ce,ke,$e){const Ve=s.convert(se.format,se.colorSpace),We=s.convert(se.type),me=S(se.internalFormat,Ve,We,se.colorSpace);if(!i.get(O).__hasExternalTextures){const ge=Math.max(1,O.width>>$e),Ue=Math.max(1,O.height>>$e);ke===e.TEXTURE_3D||ke===e.TEXTURE_2D_ARRAY?n.texImage3D(ke,$e,me,ge,Ue,O.depth,0,Ve,We,null):n.texImage2D(ke,$e,me,ge,Ue,0,Ve,We,null)}n.bindFramebuffer(e.FRAMEBUFFER,X),ie(O)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,ke,i.get(se).__webglTexture,0,F(O)):(ke===e.TEXTURE_2D||ke>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ke<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ce,ke,i.get(se).__webglTexture,$e),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(X,O,se){if(e.bindRenderbuffer(e.RENDERBUFFER,X),O.depthBuffer&&!O.stencilBuffer){let ce=e.DEPTH_COMPONENT24;if(se||ie(O)){const ke=O.depthTexture;ke&&ke.isDepthTexture&&(ke.type===ko?ce=e.DEPTH_COMPONENT32F:ke.type===wl&&(ce=e.DEPTH_COMPONENT24));const $e=F(O);ie(O)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,$e,ce,O.width,O.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,$e,ce,O.width,O.height)}else e.renderbufferStorage(e.RENDERBUFFER,ce,O.width,O.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,X)}else if(O.depthBuffer&&O.stencilBuffer){const ce=F(O);se&&ie(O)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,e.DEPTH24_STENCIL8,O.width,O.height):ie(O)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce,e.DEPTH24_STENCIL8,O.width,O.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,O.width,O.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,X)}else{const ce=O.textures;for(let ke=0;ke<ce.length;ke++){const $e=ce[ke],Ve=s.convert($e.format,$e.colorSpace),We=s.convert($e.type),me=S($e.internalFormat,Ve,We,$e.colorSpace),ve=F(O);se&&ie(O)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,me,O.width,O.height):ie(O)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,me,O.width,O.height):e.renderbufferStorage(e.RENDERBUFFER,me,O.width,O.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(X,O){if(O&&O.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,X),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(O.depthTexture).__webglTexture||O.depthTexture.image.width!==O.width||O.depthTexture.image.height!==O.height)&&(O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0),R(O.depthTexture,0);const ce=i.get(O.depthTexture).__webglTexture,ke=F(O);if(O.depthTexture.format===fl)ie(O)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ce,0,ke):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ce,0);else if(O.depthTexture.format===Ra)ie(O)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ce,0,ke):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function be(X){const O=i.get(X),se=X.isWebGLCubeRenderTarget===!0;if(X.depthTexture&&!O.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");pe(O.__webglFramebuffer,X)}else if(se){O.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(e.FRAMEBUFFER,O.__webglFramebuffer[ce]),O.__webglDepthbuffer[ce]=e.createRenderbuffer(),ne(O.__webglDepthbuffer[ce],X,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,O.__webglFramebuffer),O.__webglDepthbuffer=e.createRenderbuffer(),ne(O.__webglDepthbuffer,X,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(X,O,se){const ce=i.get(X);O!==void 0&&Q(ce.__webglFramebuffer,X,X.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),se!==void 0&&be(X)}function Oe(X){const O=X.texture,se=i.get(X),ce=i.get(O);X.addEventListener("dispose",P);const ke=X.textures,$e=X.isWebGLCubeRenderTarget===!0,Ve=ke.length>1;if(Ve||(ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture()),ce.__version=O.version,r.memory.textures++),$e){se.__webglFramebuffer=[];for(let We=0;We<6;We++)if(O.mipmaps&&O.mipmaps.length>0){se.__webglFramebuffer[We]=[];for(let me=0;me<O.mipmaps.length;me++)se.__webglFramebuffer[We][me]=e.createFramebuffer()}else se.__webglFramebuffer[We]=e.createFramebuffer()}else{if(O.mipmaps&&O.mipmaps.length>0){se.__webglFramebuffer=[];for(let We=0;We<O.mipmaps.length;We++)se.__webglFramebuffer[We]=e.createFramebuffer()}else se.__webglFramebuffer=e.createFramebuffer();if(Ve)for(let We=0,me=ke.length;We<me;We++){const ve=i.get(ke[We]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),r.memory.textures++)}if(X.samples>0&&ie(X)===!1){se.__webglMultisampledFramebuffer=e.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let We=0;We<ke.length;We++){const me=ke[We];se.__webglColorRenderbuffer[We]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,se.__webglColorRenderbuffer[We]);const ve=s.convert(me.format,me.colorSpace),ge=s.convert(me.type),Ue=S(me.internalFormat,ve,ge,me.colorSpace,X.isXRRenderTarget===!0),mt=F(X);e.renderbufferStorageMultisample(e.RENDERBUFFER,mt,Ue,X.width,X.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+We,e.RENDERBUFFER,se.__webglColorRenderbuffer[We])}e.bindRenderbuffer(e.RENDERBUFFER,null),X.depthBuffer&&(se.__webglDepthRenderbuffer=e.createRenderbuffer(),ne(se.__webglDepthRenderbuffer,X,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if($e){n.bindTexture(e.TEXTURE_CUBE_MAP,ce.__webglTexture),I(e.TEXTURE_CUBE_MAP,O);for(let We=0;We<6;We++)if(O.mipmaps&&O.mipmaps.length>0)for(let me=0;me<O.mipmaps.length;me++)Q(se.__webglFramebuffer[We][me],X,O,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+We,me);else Q(se.__webglFramebuffer[We],X,O,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+We,0);m(O)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let We=0,me=ke.length;We<me;We++){const ve=ke[We],ge=i.get(ve);n.bindTexture(e.TEXTURE_2D,ge.__webglTexture),I(e.TEXTURE_2D,ve),Q(se.__webglFramebuffer,X,ve,e.COLOR_ATTACHMENT0+We,e.TEXTURE_2D,0),m(ve)&&v(e.TEXTURE_2D)}n.unbindTexture()}else{let We=e.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(We=X.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(We,ce.__webglTexture),I(We,O),O.mipmaps&&O.mipmaps.length>0)for(let me=0;me<O.mipmaps.length;me++)Q(se.__webglFramebuffer[me],X,O,e.COLOR_ATTACHMENT0,We,me);else Q(se.__webglFramebuffer,X,O,e.COLOR_ATTACHMENT0,We,0);m(O)&&v(We),n.unbindTexture()}X.depthBuffer&&be(X)}function le(X){const O=X.textures;for(let se=0,ce=O.length;se<ce;se++){const ke=O[se];if(m(ke)){const $e=X.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Ve=i.get(ke).__webglTexture;n.bindTexture($e,Ve),v($e),n.unbindTexture()}}}const Ie=[],Fe=[];function G(X){if(X.samples>0){if(ie(X)===!1){const O=X.textures,se=X.width,ce=X.height;let ke=e.COLOR_BUFFER_BIT;const $e=X.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ve=i.get(X),We=O.length>1;if(We)for(let me=0;me<O.length;me++)n.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let me=0;me<O.length;me++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(ke|=e.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(ke|=e.STENCIL_BUFFER_BIT)),We){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ve.__webglColorRenderbuffer[me]);const ve=i.get(O[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,se,ce,0,0,se,ce,ke,e.NEAREST),a===!0&&(Ie.length=0,Fe.length=0,Ie.push(e.COLOR_ATTACHMENT0+me),X.depthBuffer&&X.resolveDepthBuffer===!1&&(Ie.push($e),Fe.push($e),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Fe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),We)for(let me=0;me<O.length;me++){n.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,Ve.__webglColorRenderbuffer[me]);const ve=i.get(O[me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,ve,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.resolveDepthBuffer===!1&&a){const O=X.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[O])}}}function F(X){return Math.min(o.maxSamples,X.samples)}function ie(X){const O=i.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function ae(X){const O=r.render.frame;c.get(X)!==O&&(c.set(X,O),X.update())}function Ce(X,O){const se=X.colorSpace,ce=X.format,ke=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||se!==Ro&&se!==yo&&(Jt.getTransfer(se)===cn?(ce!==br||ke!==Eo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),O}function Me(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(u.width=X.naturalWidth||X.width,u.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(u.width=X.displayWidth,u.height=X.displayHeight):(u.width=X.width,u.height=X.height),u}this.allocateTextureUnit=T,this.resetTextureUnits=$,this.setTexture2D=R,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Ae,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ie}function VO(e,t){function n(i,o=yo){let s;const r=Jt.getTransfer(o);if(i===Eo)return e.UNSIGNED_BYTE;if(i===A5)return e.UNSIGNED_SHORT_4_4_4_4;if(i===O5)return e.UNSIGNED_SHORT_5_5_5_1;if(i===uL)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===lL)return e.BYTE;if(i===aL)return e.SHORT;if(i===T5)return e.UNSIGNED_SHORT;if(i===I5)return e.INT;if(i===wl)return e.UNSIGNED_INT;if(i===ko)return e.FLOAT;if(i===of)return e.HALF_FLOAT;if(i===cL)return e.ALPHA;if(i===dL)return e.RGB;if(i===br)return e.RGBA;if(i===fL)return e.LUMINANCE;if(i===pL)return e.LUMINANCE_ALPHA;if(i===fl)return e.DEPTH_COMPONENT;if(i===Ra)return e.DEPTH_STENCIL;if(i===hL)return e.RED;if(i===z5)return e.RED_INTEGER;if(i===mL)return e.RG;if(i===N5)return e.RG_INTEGER;if(i===R5)return e.RGBA_INTEGER;if(i===cp||i===dp||i===fp||i===pp)if(r===cn)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cp)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dp)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fp)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pp)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cp)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dp)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fp)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pp)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_4||i===C4||i===S4||i===w4)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_4)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===C4)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===S4)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===w4)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$4||i===M4||i===x4)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$4||i===M4)return r===cn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===x4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===P4||i===E4||i===L4||i===T4||i===I4||i===A4||i===O4||i===z4||i===N4||i===R4||i===B4||i===D4||i===F4||i===j4)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===P4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===E4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===L4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===T4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===I4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===A4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===O4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===z4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===N4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===R4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===B4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===D4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===F4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===j4)return r===cn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hp||i===V4||i===U4)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===hp)return r===cn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===V4)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===U4)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vL||i===H4||i===W4||i===G4)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===hp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===H4)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===W4)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===G4)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class UO extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HO={type:"move"};class Dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Te),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let o=null,s=null,r=null;const l=this._targetRay,a=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const b of t.hand.values()){const m=n.getJointPose(b,i),v=this._getHandJoint(u,b);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=c.position.distanceTo(d.position),g=.02,y=.005;u.inputState.pinching&&p>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(o=n.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(HO)))}return l!==null&&(l.visible=o!==null),a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Fu;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const WO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const o=new ki,s=t.properties.get(o);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}render(t,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,o=new To({vertexShader:WO,fragmentShader:GO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new af(20,20),o)}t.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class KO extends Ps{constructor(t,n){super();const i=this;let o=null,s=1,r=null,l="local-floor",a=1,u=null,c=null,d=null,p=null,g=null,y=null;const b=new qO,m=n.getContextAttributes();let v=null,S=null;const k=[],C=[],P=new Lt;let w=null;const x=new zi;x.layers.enable(1),x.viewport=new On;const N=new zi;N.layers.enable(2),N.viewport=new On;const E=[x,N],$=new UO;$.layers.enable(1),$.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=k[Q];return ne===void 0&&(ne=new Dp,k[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=k[Q];return ne===void 0&&(ne=new Dp,k[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=k[Q];return ne===void 0&&(ne=new Dp,k[Q]=ne),ne.getHandSpace()};function R(Q){const ne=C.indexOf(Q.inputSource);if(ne===-1)return;const pe=k[ne];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,u||r),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){o.removeEventListener("select",R),o.removeEventListener("selectstart",R),o.removeEventListener("selectend",R),o.removeEventListener("squeeze",R),o.removeEventListener("squeezestart",R),o.removeEventListener("squeezeend",R),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<k.length;Q++){const ne=C[Q];ne!==null&&(C[Q]=null,k[Q].disconnect(ne))}T=null,U=null,b.reset(),t.setRenderTarget(v),g=null,p=null,d=null,o=null,S=null,fe.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=t.getRenderTarget(),o.addEventListener("select",R),o.addEventListener("selectstart",R),o.addEventListener("selectend",R),o.addEventListener("squeeze",R),o.addEventListener("squeezestart",R),o.addEventListener("squeezeend",R),o.addEventListener("end",V),o.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),o.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(o,n,ne),o.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new ks(g.framebufferWidth,g.framebufferHeight,{format:br,type:Eo,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,be=null;m.depth&&(be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ra:fl,pe=m.stencil?Ga:wl);const Ae={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(o,n),p=d.createProjectionLayer(Ae),o.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ks(p.textureWidth,p.textureHeight,{format:br,type:Eo,depthTexture:new Q5(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(a),u=null,r=await o.requestReferenceSpace(l),fe.setContext(o),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function Z(Q){for(let ne=0;ne<Q.removed.length;ne++){const pe=Q.removed[ne],be=C.indexOf(pe);be>=0&&(C[be]=null,k[be].disconnect(pe))}for(let ne=0;ne<Q.added.length;ne++){const pe=Q.added[ne];let be=C.indexOf(pe);if(be===-1){for(let Oe=0;Oe<k.length;Oe++)if(Oe>=C.length){C.push(pe),be=Oe;break}else if(C[Oe]===null){C[Oe]=pe,be=Oe;break}if(be===-1)break}const Ae=k[be];Ae&&Ae.connect(pe)}}const W=new Te,j=new Te;function B(Q,ne,pe){W.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const be=W.distanceTo(j),Ae=ne.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,le=Ae[14]/(Ae[10]-1),Ie=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],G=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],ie=(Oe[8]+1)/Oe[0],ae=le*F,Ce=le*ie,Me=be/(-F+ie),X=Me*-F;ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(X),Q.translateZ(Me),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const O=le+Me,se=Ie+Me,ce=ae-X,ke=Ce+(be-X),$e=Fe*Ie/se*O,Ve=G*Ie/se*O;Q.projectionMatrix.makePerspective(ce,ke,$e,Ve,O,se),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function K(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;b.texture!==null&&(Q.near=b.depthNear,Q.far=b.depthFar),$.near=N.near=x.near=Q.near,$.far=N.far=x.far=Q.far,(T!==$.near||U!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),T=$.near,U=$.far,x.near=T,x.far=U,N.near=T,N.far=U,x.updateProjectionMatrix(),N.updateProjectionMatrix(),Q.updateProjectionMatrix());const ne=Q.parent,pe=$.cameras;K($,ne);for(let be=0;be<pe.length;be++)K(pe[be],ne);pe.length===2?B($,x,N):$.projectionMatrix.copy(x.projectionMatrix),I(Q,$,ne)};function I(Q,ne,pe){pe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ba*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(p===null&&g===null))return a},this.setFoveation=function(Q){a=Q,p!==null&&(p.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null};let Y=null;function re(Q,ne){if(c=ne.getViewerPose(u||r),y=ne,c!==null){const pe=c.views;g!==null&&(t.setRenderTargetFramebuffer(S,g.framebuffer),t.setRenderTarget(S));let be=!1;pe.length!==$.cameras.length&&($.cameras.length=0,be=!0);for(let Oe=0;Oe<pe.length;Oe++){const le=pe[Oe];let Ie=null;if(g!==null)Ie=g.getViewport(le);else{const G=d.getViewSubImage(p,le);Ie=G.viewport,Oe===0&&(t.setRenderTargetTextures(S,G.colorTexture,p.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(S))}let Fe=E[Oe];Fe===void 0&&(Fe=new zi,Fe.layers.enable(Oe),Fe.viewport=new On,E[Oe]=Fe),Fe.matrix.fromArray(le.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(le.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Oe===0&&($.matrix.copy(Fe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),be===!0&&$.cameras.push(Fe)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Oe=d.getDepthInformation(pe[0]);Oe&&Oe.isValid&&Oe.texture&&b.init(t,Oe,o.renderState)}}for(let pe=0;pe<k.length;pe++){const be=C[pe],Ae=k[pe];be!==null&&Ae!==void 0&&Ae.update(be,ne,u||r)}b.render(t,$),Y&&Y(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),y=null}const fe=new Y5;fe.setAnimationLoop(re),this.setAnimationLoop=function(Q){Y=Q},this.dispose=function(){}}}const Yo=new wr,ZO=new hn;function XO(e,t){function n(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function i(m,v){v.color.getRGB(m.fogColor.value,K5(e)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function o(m,v,S,k,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(m,v):v.isMeshToonMaterial?(s(m,v),d(m,v)):v.isMeshPhongMaterial?(s(m,v),c(m,v)):v.isMeshStandardMaterial?(s(m,v),p(m,v),v.isMeshPhysicalMaterial&&g(m,v,C)):v.isMeshMatcapMaterial?(s(m,v),y(m,v)):v.isMeshDepthMaterial?s(m,v):v.isMeshDistanceMaterial?(s(m,v),b(m,v)):v.isMeshNormalMaterial?s(m,v):v.isLineBasicMaterial?(r(m,v),v.isLineDashedMaterial&&l(m,v)):v.isPointsMaterial?a(m,v,S,k):v.isSpriteMaterial?u(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,n(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,n(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===bi&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,n(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===bi&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,n(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,n(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);const S=t.get(v),k=S.envMap,C=S.envMapRotation;if(k&&(m.envMap.value=k,Yo.copy(C),Yo.x*=-1,Yo.y*=-1,Yo.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Yo.y*=-1,Yo.z*=-1),m.envMapRotation.value.setFromMatrix4(ZO.makeRotationFromEuler(Yo)),m.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap){m.lightMap.value=v.lightMap;const P=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=v.lightMapIntensity*P,n(v.lightMap,m.lightMapTransform)}v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,m.aoMapTransform))}function r(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,n(v.map,m.mapTransform))}function l(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function a(m,v,S,k){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*S,m.scale.value=k*.5,v.map&&(m.map.value=v.map,n(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function u(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,n(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,n(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function c(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function d(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function p(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function g(m,v,S){m.ior.value=v.ior,v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===bi&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,v){v.matcap&&(m.matcap.value=v.matcap)}function b(m,v){const S=t.get(v).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function YO(e,t,n,i){let o={},s={},r=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function a(S,k){const C=k.program;i.uniformBlockBinding(S,C)}function u(S,k){let C=o[S.id];C===void 0&&(y(S),C=c(S),o[S.id]=C,S.addEventListener("dispose",m));const P=k.program;i.updateUBOMapping(S,P);const w=t.render.frame;s[S.id]!==w&&(p(S),s[S.id]=w)}function c(S){const k=d();S.__bindingPointIndex=k;const C=e.createBuffer(),P=S.__size,w=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,C),e.bufferData(e.UNIFORM_BUFFER,P,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,k,C),C}function d(){for(let S=0;S<l;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const k=o[S.id],C=S.uniforms,P=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,k);for(let w=0,x=C.length;w<x;w++){const N=Array.isArray(C[w])?C[w]:[C[w]];for(let E=0,$=N.length;E<$;E++){const T=N[E];if(g(T,w,E,P)===!0){const U=T.__offset,R=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let Z=0;Z<R.length;Z++){const W=R[Z],j=b(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,U+V,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,T.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(S,k,C,P){const w=S.value,x=k+"_"+C;if(P[x]===void 0)return typeof w=="number"||typeof w=="boolean"?P[x]=w:P[x]=w.clone(),!0;{const N=P[x];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return P[x]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function y(S){const k=S.uniforms;let C=0;const P=16;for(let x=0,N=k.length;x<N;x++){const E=Array.isArray(k[x])?k[x]:[k[x]];for(let $=0,T=E.length;$<T;$++){const U=E[$],R=Array.isArray(U.value)?U.value:[U.value];for(let V=0,Z=R.length;V<Z;V++){const W=R[V],j=b(W),B=C%P;B!==0&&P-B<j.boundary&&(C+=P-B),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=C,C+=j.storage}}}const w=C%P;return w>0&&(C+=P-w),S.__size=C,S.__cache={},this}function b(S){const k={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(k.boundary=4,k.storage=4):S.isVector2?(k.boundary=8,k.storage=8):S.isVector3||S.isColor?(k.boundary=16,k.storage=12):S.isVector4?(k.boundary=16,k.storage=16):S.isMatrix3?(k.boundary=48,k.storage=48):S.isMatrix4?(k.boundary=64,k.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),k}function m(S){const k=S.target;k.removeEventListener("dispose",m);const C=r.indexOf(k.__bindingPointIndex);r.splice(C,1),e.deleteBuffer(o[k.id]),delete o[k.id],delete s[k.id]}function v(){for(const S in o)e.deleteBuffer(o[S]);r=[],o={},s={}}return{bind:a,update:u,dispose:v}}class JO{constructor(t={}){const{canvas:n=HL(),context:i=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),y=new Int32Array(4);let b=null,m=null;const v=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pr,this._useLegacyLights=!1,this.toneMapping=$o,this.toneMappingExposure=1;const k=this;let C=!1,P=0,w=0,x=null,N=-1,E=null;const $=new On,T=new On;let U=null;const R=new jt(0);let V=0,Z=n.width,W=n.height,j=1,B=null,K=null;const I=new On(0,0,Z,W),Y=new On(0,0,Z,W);let re=!1;const fe=new bb;let Q=!1,ne=!1;const pe=new hn,be=new Te,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return x===null?j:1}let le=i;function Ie(oe,xe){return n.getContext(oe,xe)}try{const oe={alpha:!0,depth:o,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hb}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),le===null){const xe="webgl2";if(le=Ie(xe,oe),le===null)throw Ie(xe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(oe){throw console.error("THREE.WebGLRenderer: "+oe.message),oe}let Fe,G,F,ie,ae,Ce,Me,X,O,se,ce,ke,$e,Ve,We,me,ve,ge,Ue,mt,at,ot,Be,qe;function Qe(){Fe=new sA(le),Fe.init(),ot=new VO(le,Fe),G=new eA(le,Fe,t,ot),F=new FO(le),ie=new uA(le),ae=new MO,Ce=new jO(le,Fe,F,ae,G,ot,ie),Me=new nA(k),X=new oA(k),O=new v9(le),Be=new JI(le,O),se=new lA(le,O,ie,Be),ce=new dA(le,se,O,ie),Ue=new cA(le,G,Ce),me=new tA(ae),ke=new $O(k,Me,X,Fe,G,Be,me),$e=new XO(k,ae),Ve=new PO,We=new OO(Fe),ge=new YI(k,Me,X,F,ce,p,a),ve=new DO(k,ce,G),qe=new YO(le,ie,G,F),mt=new QI(le,Fe,ie),at=new aA(le,Fe,ie),ie.programs=ke.programs,k.capabilities=G,k.extensions=Fe,k.properties=ae,k.renderLists=Ve,k.shadowMap=ve,k.state=F,k.info=ie}Qe();const Ze=new KO(k,le);this.xr=Ze,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){const oe=Fe.get("WEBGL_lose_context");oe&&oe.loseContext()},this.forceContextRestore=function(){const oe=Fe.get("WEBGL_lose_context");oe&&oe.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(oe){oe!==void 0&&(j=oe,this.setSize(Z,W,!1))},this.getSize=function(oe){return oe.set(Z,W)},this.setSize=function(oe,xe,De=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=oe,W=xe,n.width=Math.floor(oe*j),n.height=Math.floor(xe*j),De===!0&&(n.style.width=oe+"px",n.style.height=xe+"px"),this.setViewport(0,0,oe,xe)},this.getDrawingBufferSize=function(oe){return oe.set(Z*j,W*j).floor()},this.setDrawingBufferSize=function(oe,xe,De){Z=oe,W=xe,j=De,n.width=Math.floor(oe*De),n.height=Math.floor(xe*De),this.setViewport(0,0,oe,xe)},this.getCurrentViewport=function(oe){return oe.copy($)},this.getViewport=function(oe){return oe.copy(I)},this.setViewport=function(oe,xe,De,Le){oe.isVector4?I.set(oe.x,oe.y,oe.z,oe.w):I.set(oe,xe,De,Le),F.viewport($.copy(I).multiplyScalar(j).round())},this.getScissor=function(oe){return oe.copy(Y)},this.setScissor=function(oe,xe,De,Le){oe.isVector4?Y.set(oe.x,oe.y,oe.z,oe.w):Y.set(oe,xe,De,Le),F.scissor(T.copy(Y).multiplyScalar(j).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(oe){F.setScissorTest(re=oe)},this.setOpaqueSort=function(oe){B=oe},this.setTransparentSort=function(oe){K=oe},this.getClearColor=function(oe){return oe.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(oe=!0,xe=!0,De=!0){let Le=0;if(oe){let ze=!1;if(x!==null){const ct=x.texture.format;ze=ct===R5||ct===N5||ct===z5}if(ze){const ct=x.texture.type,_t=ct===Eo||ct===wl||ct===T5||ct===Ga||ct===A5||ct===O5,yt=ge.getClearColor(),Ne=ge.getClearAlpha(),Xe=yt.r,gt=yt.g,Ct=yt.b;_t?(g[0]=Xe,g[1]=gt,g[2]=Ct,g[3]=Ne,le.clearBufferuiv(le.COLOR,0,g)):(y[0]=Xe,y[1]=gt,y[2]=Ct,y[3]=Ne,le.clearBufferiv(le.COLOR,0,y))}else Le|=le.COLOR_BUFFER_BIT}xe&&(Le|=le.DEPTH_BUFFER_BIT),De&&(Le|=le.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le.clear(Le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Ve.dispose(),We.dispose(),ae.dispose(),Me.dispose(),X.dispose(),ce.dispose(),Be.dispose(),qe.dispose(),ke.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Ot),Ze.removeEventListener("sessionend",et),vt.stop()};function H(oe){oe.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const oe=ie.autoReset,xe=ve.enabled,De=ve.autoUpdate,Le=ve.needsUpdate,ze=ve.type;Qe(),ie.autoReset=oe,ve.enabled=xe,ve.autoUpdate=De,ve.needsUpdate=Le,ve.type=ze}function Ee(oe){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",oe.statusMessage)}function Ke(oe){const xe=oe.target;xe.removeEventListener("dispose",Ke),it(xe)}function it(oe){xt(oe),ae.remove(oe)}function xt(oe){const xe=ae.get(oe).programs;xe!==void 0&&(xe.forEach(function(De){ke.releaseProgram(De)}),oe.isShaderMaterial&&ke.releaseShaderCache(oe))}this.renderBufferDirect=function(oe,xe,De,Le,ze,ct){xe===null&&(xe=Ae);const _t=ze.isMesh&&ze.matrixWorld.determinant()<0,yt=ar(oe,xe,De,Le,ze);F.setMaterial(Le,_t);let Ne=De.index,Xe=1;if(Le.wireframe===!0){if(Ne=se.getWireframeAttribute(De),Ne===void 0)return;Xe=2}const gt=De.drawRange,Ct=De.attributes.position;let Bt=gt.start*Xe,Zt=(gt.start+gt.count)*Xe;ct!==null&&(Bt=Math.max(Bt,ct.start*Xe),Zt=Math.min(Zt,(ct.start+ct.count)*Xe)),Ne!==null?(Bt=Math.max(Bt,0),Zt=Math.min(Zt,Ne.count)):Ct!=null&&(Bt=Math.max(Bt,0),Zt=Math.min(Zt,Ct.count));const wn=Zt-Bt;if(wn<0||wn===1/0)return;Be.setup(ze,Le,yt,De,Ne);let Ii,Vt=mt;if(Ne!==null&&(Ii=O.get(Ne),Vt=at,Vt.setIndex(Ii)),ze.isMesh)Le.wireframe===!0?(F.setLineWidth(Le.wireframeLinewidth*Oe()),Vt.setMode(le.LINES)):Vt.setMode(le.TRIANGLES);else if(ze.isLine){let Et=Le.linewidth;Et===void 0&&(Et=1),F.setLineWidth(Et*Oe()),ze.isLineSegments?Vt.setMode(le.LINES):ze.isLineLoop?Vt.setMode(le.LINE_LOOP):Vt.setMode(le.LINE_STRIP)}else ze.isPoints?Vt.setMode(le.POINTS):ze.isSprite&&Vt.setMode(le.TRIANGLES);if(ze.isBatchedMesh)ze._multiDrawInstances!==null?Vt.renderMultiDrawInstances(ze._multiDrawStarts,ze._multiDrawCounts,ze._multiDrawCount,ze._multiDrawInstances):Vt.renderMultiDraw(ze._multiDrawStarts,ze._multiDrawCounts,ze._multiDrawCount);else if(ze.isInstancedMesh)Vt.renderInstances(Bt,wn,ze.count);else if(De.isInstancedBufferGeometry){const Et=De._maxInstanceCount!==void 0?De._maxInstanceCount:1/0,Vo=Math.min(De.instanceCount,Et);Vt.renderInstances(Bt,wn,Vo)}else Vt.render(Bt,wn)};function Pt(oe,xe,De){oe.transparent===!0&&oe.side===Fr&&oe.forceSinglePass===!1?(oe.side=bi,oe.needsUpdate=!0,Xr(oe,xe,De),oe.side=Po,oe.needsUpdate=!0,Xr(oe,xe,De),oe.side=Fr):Xr(oe,xe,De)}this.compile=function(oe,xe,De=null){De===null&&(De=oe),m=We.get(De),m.init(xe),S.push(m),De.traverseVisible(function(ze){ze.isLight&&ze.layers.test(xe.layers)&&(m.pushLight(ze),ze.castShadow&&m.pushShadow(ze))}),oe!==De&&oe.traverseVisible(function(ze){ze.isLight&&ze.layers.test(xe.layers)&&(m.pushLight(ze),ze.castShadow&&m.pushShadow(ze))}),m.setupLights(k._useLegacyLights);const Le=new Set;return oe.traverse(function(ze){const ct=ze.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){const yt=ct[_t];Pt(yt,De,ze),Le.add(yt)}else Pt(ct,De,ze),Le.add(ct)}),S.pop(),m=null,Le},this.compileAsync=function(oe,xe,De=null){const Le=this.compile(oe,xe,De);return new Promise(ze=>{function ct(){if(Le.forEach(function(_t){ae.get(_t).currentProgram.isReady()&&Le.delete(_t)}),Le.size===0){ze(oe);return}setTimeout(ct,10)}Fe.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ft=null;function un(oe){Ft&&Ft(oe)}function Ot(){vt.stop()}function et(){vt.start()}const vt=new Y5;vt.setAnimationLoop(un),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(oe){Ft=oe,Ze.setAnimationLoop(oe),oe===null?vt.stop():vt.start()},Ze.addEventListener("sessionstart",Ot),Ze.addEventListener("sessionend",et),this.render=function(oe,xe){if(xe!==void 0&&xe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),xe.parent===null&&xe.matrixWorldAutoUpdate===!0&&xe.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(xe),xe=Ze.getCamera()),oe.isScene===!0&&oe.onBeforeRender(k,oe,xe,x),m=We.get(oe,S.length),m.init(xe),S.push(m),pe.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),fe.setFromProjectionMatrix(pe),ne=this.localClippingEnabled,Q=me.init(this.clippingPlanes,ne),b=Ve.get(oe,v.length),b.init(),v.push(b),Gt(oe,xe,0,k.sortObjects),b.finish(),k.sortObjects===!0&&b.sort(B,K);const De=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1;De&&ge.addToRenderList(b,oe),this.info.render.frame++,Q===!0&&me.beginShadows();const Le=m.state.shadowsArray;ve.render(Le,oe,xe),Q===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ze=b.opaque,ct=b.transmissive;if(m.setupLights(k._useLegacyLights),xe.isArrayCamera){const _t=xe.cameras;if(ct.length>0)for(let yt=0,Ne=_t.length;yt<Ne;yt++){const Xe=_t[yt];jn(ze,ct,oe,Xe)}De&&ge.render(oe);for(let yt=0,Ne=_t.length;yt<Ne;yt++){const Xe=_t[yt];mn(b,oe,Xe,Xe.viewport)}}else ct.length>0&&jn(ze,ct,oe,xe),De&&ge.render(oe),mn(b,oe,xe);x!==null&&(Ce.updateMultisampleRenderTarget(x),Ce.updateRenderTargetMipmap(x)),oe.isScene===!0&&oe.onAfterRender(k,oe,xe),Be.resetDefaultState(),N=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],Q===!0&&me.setGlobalState(k.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function Gt(oe,xe,De,Le){if(oe.visible===!1)return;if(oe.layers.test(xe.layers)){if(oe.isGroup)De=oe.renderOrder;else if(oe.isLOD)oe.autoUpdate===!0&&oe.update(xe);else if(oe.isLight)m.pushLight(oe),oe.castShadow&&m.pushShadow(oe);else if(oe.isSprite){if(!oe.frustumCulled||fe.intersectsSprite(oe)){Le&&be.setFromMatrixPosition(oe.matrixWorld).applyMatrix4(pe);const _t=ce.update(oe),yt=oe.material;yt.visible&&b.push(oe,_t,yt,De,be.z,null)}}else if((oe.isMesh||oe.isLine||oe.isPoints)&&(!oe.frustumCulled||fe.intersectsObject(oe))){const _t=ce.update(oe),yt=oe.material;if(Le&&(oe.boundingSphere!==void 0?(oe.boundingSphere===null&&oe.computeBoundingSphere(),be.copy(oe.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),be.copy(_t.boundingSphere.center)),be.applyMatrix4(oe.matrixWorld).applyMatrix4(pe)),Array.isArray(yt)){const Ne=_t.groups;for(let Xe=0,gt=Ne.length;Xe<gt;Xe++){const Ct=Ne[Xe],Bt=yt[Ct.materialIndex];Bt&&Bt.visible&&b.push(oe,_t,Bt,De,be.z,Ct)}}else yt.visible&&b.push(oe,_t,yt,De,be.z,null)}}const ct=oe.children;for(let _t=0,yt=ct.length;_t<yt;_t++)Gt(ct[_t],xe,De,Le)}function mn(oe,xe,De,Le){const ze=oe.opaque,ct=oe.transmissive,_t=oe.transparent;m.setupLightsView(De),Q===!0&&me.setGlobalState(k.clippingPlanes,De),Le&&F.viewport($.copy(Le)),ze.length>0&&Vn(ze,xe,De),ct.length>0&&Vn(ct,xe,De),_t.length>0&&Vn(_t,xe,De),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function jn(oe,xe,De,Le){if((De.isScene===!0?De.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Le.id]===void 0&&(m.state.transmissionRenderTarget[Le.id]=new ks(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?of:Eo,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ct=m.state.transmissionRenderTarget[Le.id],_t=Le.viewport||$;ct.setSize(_t.z,_t.w);const yt=k.getRenderTarget();k.setRenderTarget(ct),k.getClearColor(R),V=k.getClearAlpha(),V<1&&k.setClearColor(16777215,.5),k.clear();const Ne=k.toneMapping;k.toneMapping=$o;const Xe=Le.viewport;if(Le.viewport!==void 0&&(Le.viewport=void 0),m.setupLightsView(Le),Q===!0&&me.setGlobalState(k.clippingPlanes,Le),Vn(oe,De,Le),Ce.updateMultisampleRenderTarget(ct),Ce.updateRenderTargetMipmap(ct),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Ct=0,Bt=xe.length;Ct<Bt;Ct++){const Zt=xe[Ct],wn=Zt.object,Ii=Zt.geometry,Vt=Zt.material,Et=Zt.group;if(Vt.side===Fr&&wn.layers.test(Le.layers)){const Vo=Vt.side;Vt.side=bi,Vt.needsUpdate=!0,Ti(wn,De,Le,Ii,Vt,Et),Vt.side=Vo,Vt.needsUpdate=!0,gt=!0}}gt===!0&&(Ce.updateMultisampleRenderTarget(ct),Ce.updateRenderTargetMipmap(ct))}k.setRenderTarget(yt),k.setClearColor(R,V),Xe!==void 0&&(Le.viewport=Xe),k.toneMapping=Ne}function Vn(oe,xe,De){const Le=xe.isScene===!0?xe.overrideMaterial:null;for(let ze=0,ct=oe.length;ze<ct;ze++){const _t=oe[ze],yt=_t.object,Ne=_t.geometry,Xe=Le===null?_t.material:Le,gt=_t.group;yt.layers.test(De.layers)&&Ti(yt,xe,De,Ne,Xe,gt)}}function Ti(oe,xe,De,Le,ze,ct){oe.onBeforeRender(k,xe,De,Le,ze,ct),oe.modelViewMatrix.multiplyMatrices(De.matrixWorldInverse,oe.matrixWorld),oe.normalMatrix.getNormalMatrix(oe.modelViewMatrix),ze.onBeforeRender(k,xe,De,Le,oe,ct),ze.transparent===!0&&ze.side===Fr&&ze.forceSinglePass===!1?(ze.side=bi,ze.needsUpdate=!0,k.renderBufferDirect(De,xe,Le,ze,oe,ct),ze.side=Po,ze.needsUpdate=!0,k.renderBufferDirect(De,xe,Le,ze,oe,ct),ze.side=Fr):k.renderBufferDirect(De,xe,Le,ze,oe,ct),oe.onAfterRender(k,xe,De,Le,ze,ct)}function Xr(oe,xe,De){xe.isScene!==!0&&(xe=Ae);const Le=ae.get(oe),ze=m.state.lights,ct=m.state.shadowsArray,_t=ze.state.version,yt=ke.getParameters(oe,ze.state,ct,xe,De),Ne=ke.getProgramCacheKey(yt);let Xe=Le.programs;Le.environment=oe.isMeshStandardMaterial?xe.environment:null,Le.fog=xe.fog,Le.envMap=(oe.isMeshStandardMaterial?X:Me).get(oe.envMap||Le.environment),Le.envMapRotation=Le.environment!==null&&oe.envMap===null?xe.environmentRotation:oe.envMapRotation,Xe===void 0&&(oe.addEventListener("dispose",Ke),Xe=new Map,Le.programs=Xe);let gt=Xe.get(Ne);if(gt!==void 0){if(Le.currentProgram===gt&&Le.lightsStateVersion===_t)return jo(oe,yt),gt}else yt.uniforms=ke.getUniforms(oe),oe.onBuild(De,yt,k),oe.onBeforeCompile(yt,k),gt=ke.acquireProgram(yt,Ne),Xe.set(Ne,gt),Le.uniforms=yt.uniforms;const Ct=Le.uniforms;return(!oe.isShaderMaterial&&!oe.isRawShaderMaterial||oe.clipping===!0)&&(Ct.clippingPlanes=me.uniform),jo(oe,yt),Le.needsLights=Lr(oe),Le.lightsStateVersion=_t,Le.needsLights&&(Ct.ambientLightColor.value=ze.state.ambient,Ct.lightProbe.value=ze.state.probe,Ct.directionalLights.value=ze.state.directional,Ct.directionalLightShadows.value=ze.state.directionalShadow,Ct.spotLights.value=ze.state.spot,Ct.spotLightShadows.value=ze.state.spotShadow,Ct.rectAreaLights.value=ze.state.rectArea,Ct.ltc_1.value=ze.state.rectAreaLTC1,Ct.ltc_2.value=ze.state.rectAreaLTC2,Ct.pointLights.value=ze.state.point,Ct.pointLightShadows.value=ze.state.pointShadow,Ct.hemisphereLights.value=ze.state.hemi,Ct.directionalShadowMap.value=ze.state.directionalShadowMap,Ct.directionalShadowMatrix.value=ze.state.directionalShadowMatrix,Ct.spotShadowMap.value=ze.state.spotShadowMap,Ct.spotLightMatrix.value=ze.state.spotLightMatrix,Ct.spotLightMap.value=ze.state.spotLightMap,Ct.pointShadowMap.value=ze.state.pointShadowMap,Ct.pointShadowMatrix.value=ze.state.pointShadowMatrix),Le.currentProgram=gt,Le.uniformsList=null,gt}function lr(oe){if(oe.uniformsList===null){const xe=oe.currentProgram.getUniforms();oe.uniformsList=sc.seqWithValue(xe.seq,oe.uniforms)}return oe.uniformsList}function jo(oe,xe){const De=ae.get(oe);De.outputColorSpace=xe.outputColorSpace,De.batching=xe.batching,De.instancing=xe.instancing,De.instancingColor=xe.instancingColor,De.instancingMorph=xe.instancingMorph,De.skinning=xe.skinning,De.morphTargets=xe.morphTargets,De.morphNormals=xe.morphNormals,De.morphColors=xe.morphColors,De.morphTargetsCount=xe.morphTargetsCount,De.numClippingPlanes=xe.numClippingPlanes,De.numIntersection=xe.numClipIntersection,De.vertexAlphas=xe.vertexAlphas,De.vertexTangents=xe.vertexTangents,De.toneMapping=xe.toneMapping}function ar(oe,xe,De,Le,ze){xe.isScene!==!0&&(xe=Ae),Ce.resetTextureUnits();const ct=xe.fog,_t=Le.isMeshStandardMaterial?xe.environment:null,yt=x===null?k.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Ro,Ne=(Le.isMeshStandardMaterial?X:Me).get(Le.envMap||_t),Xe=Le.vertexColors===!0&&!!De.attributes.color&&De.attributes.color.itemSize===4,gt=!!De.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),Ct=!!De.morphAttributes.position,Bt=!!De.morphAttributes.normal,Zt=!!De.morphAttributes.color;let wn=$o;Le.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(wn=k.toneMapping);const Ii=De.morphAttributes.position||De.morphAttributes.normal||De.morphAttributes.color,Vt=Ii!==void 0?Ii.length:0,Et=ae.get(Le),Vo=m.state.lights;if(Q===!0&&(ne===!0||oe!==E)){const Un=oe===E&&Le.id===N;me.setState(Le,oe,Un)}let en=!1;Le.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Vo.state.version||Et.outputColorSpace!==yt||ze.isBatchedMesh&&Et.batching===!1||!ze.isBatchedMesh&&Et.batching===!0||ze.isInstancedMesh&&Et.instancing===!1||!ze.isInstancedMesh&&Et.instancing===!0||ze.isSkinnedMesh&&Et.skinning===!1||!ze.isSkinnedMesh&&Et.skinning===!0||ze.isInstancedMesh&&Et.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&Et.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&Et.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&Et.instancingMorph===!1&&ze.morphTexture!==null||Et.envMap!==Ne||Le.fog===!0&&Et.fog!==ct||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==me.numPlanes||Et.numIntersection!==me.numIntersection)||Et.vertexAlphas!==Xe||Et.vertexTangents!==gt||Et.morphTargets!==Ct||Et.morphNormals!==Bt||Et.morphColors!==Zt||Et.toneMapping!==wn||Et.morphTargetsCount!==Vt)&&(en=!0):(en=!0,Et.__version=Le.version);let ur=Et.currentProgram;en===!0&&(ur=Xr(Le,xe,ze));let Fl=!1,Yr=!1,Ns=!1;const In=ur.getUniforms(),tn=Et.uniforms;if(F.useProgram(ur.program)&&(Fl=!0,Yr=!0,Ns=!0),Le.id!==N&&(N=Le.id,Yr=!0),Fl||E!==oe){In.setValue(le,"projectionMatrix",oe.projectionMatrix),In.setValue(le,"viewMatrix",oe.matrixWorldInverse);const Un=In.map.cameraPosition;Un!==void 0&&Un.setValue(le,be.setFromMatrixPosition(oe.matrixWorld)),G.logarithmicDepthBuffer&&In.setValue(le,"logDepthBufFC",2/(Math.log(oe.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&In.setValue(le,"isOrthographic",oe.isOrthographicCamera===!0),E!==oe&&(E=oe,Yr=!0,Ns=!0)}if(ze.isSkinnedMesh){In.setOptional(le,ze,"bindMatrix"),In.setOptional(le,ze,"bindMatrixInverse");const Un=ze.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),In.setValue(le,"boneTexture",Un.boneTexture,Ce))}ze.isBatchedMesh&&(In.setOptional(le,ze,"batchingTexture"),In.setValue(le,"batchingTexture",ze._matricesTexture,Ce));const jl=De.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&Ue.update(ze,De,ur),(Yr||Et.receiveShadow!==ze.receiveShadow)&&(Et.receiveShadow=ze.receiveShadow,In.setValue(le,"receiveShadow",ze.receiveShadow)),Le.isMeshGouraudMaterial&&Le.envMap!==null&&(tn.envMap.value=Ne,tn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Le.isMeshStandardMaterial&&Le.envMap===null&&xe.environment!==null&&(tn.envMapIntensity.value=xe.environmentIntensity),Yr&&(In.setValue(le,"toneMappingExposure",k.toneMappingExposure),Et.needsLights&&Er(tn,Ns),ct&&Le.fog===!0&&$e.refreshFogUniforms(tn,ct),$e.refreshMaterialUniforms(tn,Le,j,W,m.state.transmissionRenderTarget[oe.id]),sc.upload(le,lr(Et),tn,Ce)),Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(sc.upload(le,lr(Et),tn,Ce),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&In.setValue(le,"center",ze.center),In.setValue(le,"modelViewMatrix",ze.modelViewMatrix),In.setValue(le,"normalMatrix",ze.normalMatrix),In.setValue(le,"modelMatrix",ze.matrixWorld),Le.isShaderMaterial||Le.isRawShaderMaterial){const Un=Le.uniformsGroups;for(let lu=0,vk=Un.length;lu<vk;lu++){const Vl=Un[lu];qe.update(Vl,ur),qe.bind(Vl,ur)}}return ur}function Er(oe,xe){oe.ambientLightColor.needsUpdate=xe,oe.lightProbe.needsUpdate=xe,oe.directionalLights.needsUpdate=xe,oe.directionalLightShadows.needsUpdate=xe,oe.pointLights.needsUpdate=xe,oe.pointLightShadows.needsUpdate=xe,oe.spotLights.needsUpdate=xe,oe.spotLightShadows.needsUpdate=xe,oe.rectAreaLights.needsUpdate=xe,oe.hemisphereLights.needsUpdate=xe}function Lr(oe){return oe.isMeshLambertMaterial||oe.isMeshToonMaterial||oe.isMeshPhongMaterial||oe.isMeshStandardMaterial||oe.isShadowMaterial||oe.isShaderMaterial&&oe.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(oe,xe,De){ae.get(oe.texture).__webglTexture=xe,ae.get(oe.depthTexture).__webglTexture=De;const Le=ae.get(oe);Le.__hasExternalTextures=!0,Le.__autoAllocateDepthBuffer=De===void 0,Le.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(oe,xe){const De=ae.get(oe);De.__webglFramebuffer=xe,De.__useDefaultFramebuffer=xe===void 0},this.setRenderTarget=function(oe,xe=0,De=0){x=oe,P=xe,w=De;let Le=!0,ze=null,ct=!1,_t=!1;if(oe){const Ne=ae.get(oe);Ne.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(le.FRAMEBUFFER,null),Le=!1):Ne.__webglFramebuffer===void 0?Ce.setupRenderTarget(oe):Ne.__hasExternalTextures&&Ce.rebindTextures(oe,ae.get(oe.texture).__webglTexture,ae.get(oe.depthTexture).__webglTexture);const Xe=oe.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(_t=!0);const gt=ae.get(oe).__webglFramebuffer;oe.isWebGLCubeRenderTarget?(Array.isArray(gt[xe])?ze=gt[xe][De]:ze=gt[xe],ct=!0):oe.samples>0&&Ce.useMultisampledRTT(oe)===!1?ze=ae.get(oe).__webglMultisampledFramebuffer:Array.isArray(gt)?ze=gt[De]:ze=gt,$.copy(oe.viewport),T.copy(oe.scissor),U=oe.scissorTest}else $.copy(I).multiplyScalar(j).floor(),T.copy(Y).multiplyScalar(j).floor(),U=re;if(F.bindFramebuffer(le.FRAMEBUFFER,ze)&&Le&&F.drawBuffers(oe,ze),F.viewport($),F.scissor(T),F.setScissorTest(U),ct){const Ne=ae.get(oe.texture);le.framebufferTexture2D(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,le.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne.__webglTexture,De)}else if(_t){const Ne=ae.get(oe.texture),Xe=xe||0;le.framebufferTextureLayer(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,Ne.__webglTexture,De||0,Xe)}N=-1},this.readRenderTargetPixels=function(oe,xe,De,Le,ze,ct,_t){if(!(oe&&oe.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=ae.get(oe).__webglFramebuffer;if(oe.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){F.bindFramebuffer(le.FRAMEBUFFER,yt);try{const Ne=oe.texture,Xe=Ne.format,gt=Ne.type;if(!G.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}xe>=0&&xe<=oe.width-Le&&De>=0&&De<=oe.height-ze&&le.readPixels(xe,De,Le,ze,ot.convert(Xe),ot.convert(gt),ct)}finally{const Ne=x!==null?ae.get(x).__webglFramebuffer:null;F.bindFramebuffer(le.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(oe,xe,De=0){const Le=Math.pow(2,-De),ze=Math.floor(xe.image.width*Le),ct=Math.floor(xe.image.height*Le);Ce.setTexture2D(xe,0),le.copyTexSubImage2D(le.TEXTURE_2D,De,0,0,oe.x,oe.y,ze,ct),F.unbindTexture()},this.copyTextureToTexture=function(oe,xe,De,Le=0){const ze=xe.image.width,ct=xe.image.height,_t=ot.convert(De.format),yt=ot.convert(De.type);Ce.setTexture2D(De,0),le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,De.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,De.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,De.unpackAlignment),xe.isDataTexture?le.texSubImage2D(le.TEXTURE_2D,Le,oe.x,oe.y,ze,ct,_t,yt,xe.image.data):xe.isCompressedTexture?le.compressedTexSubImage2D(le.TEXTURE_2D,Le,oe.x,oe.y,xe.mipmaps[0].width,xe.mipmaps[0].height,_t,xe.mipmaps[0].data):le.texSubImage2D(le.TEXTURE_2D,Le,oe.x,oe.y,_t,yt,xe.image),Le===0&&De.generateMipmaps&&le.generateMipmap(le.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(oe,xe,De,Le,ze=0){const ct=oe.max.x-oe.min.x,_t=oe.max.y-oe.min.y,yt=oe.max.z-oe.min.z,Ne=ot.convert(Le.format),Xe=ot.convert(Le.type);let gt;if(Le.isData3DTexture)Ce.setTexture3D(Le,0),gt=le.TEXTURE_3D;else if(Le.isDataArrayTexture||Le.isCompressedArrayTexture)Ce.setTexture2DArray(Le,0),gt=le.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,Le.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Le.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,Le.unpackAlignment);const Ct=le.getParameter(le.UNPACK_ROW_LENGTH),Bt=le.getParameter(le.UNPACK_IMAGE_HEIGHT),Zt=le.getParameter(le.UNPACK_SKIP_PIXELS),wn=le.getParameter(le.UNPACK_SKIP_ROWS),Ii=le.getParameter(le.UNPACK_SKIP_IMAGES),Vt=De.isCompressedTexture?De.mipmaps[ze]:De.image;le.pixelStorei(le.UNPACK_ROW_LENGTH,Vt.width),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,Vt.height),le.pixelStorei(le.UNPACK_SKIP_PIXELS,oe.min.x),le.pixelStorei(le.UNPACK_SKIP_ROWS,oe.min.y),le.pixelStorei(le.UNPACK_SKIP_IMAGES,oe.min.z),De.isDataTexture||De.isData3DTexture?le.texSubImage3D(gt,ze,xe.x,xe.y,xe.z,ct,_t,yt,Ne,Xe,Vt.data):Le.isCompressedArrayTexture?le.compressedTexSubImage3D(gt,ze,xe.x,xe.y,xe.z,ct,_t,yt,Ne,Vt.data):le.texSubImage3D(gt,ze,xe.x,xe.y,xe.z,ct,_t,yt,Ne,Xe,Vt),le.pixelStorei(le.UNPACK_ROW_LENGTH,Ct),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,Bt),le.pixelStorei(le.UNPACK_SKIP_PIXELS,Zt),le.pixelStorei(le.UNPACK_SKIP_ROWS,wn),le.pixelStorei(le.UNPACK_SKIP_IMAGES,Ii),ze===0&&Le.generateMipmaps&&le.generateMipmap(gt),F.unbindTexture()},this.initTexture=function(oe){oe.isCubeTexture?Ce.setTextureCube(oe,0):oe.isData3DTexture?Ce.setTexture3D(oe,0):oe.isDataArrayTexture||oe.isCompressedArrayTexture?Ce.setTexture2DArray(oe,0):Ce.setTexture2D(oe,0),F.unbindTexture()},this.resetState=function(){P=0,w=0,x=null,F.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===vb?"display-p3":"srgb",n.unpackColorSpace=Jt.workingColorSpace===sf?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class QO extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class o6 extends Ll{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bd=new Te,kd=new Te,B3=new hn,Jl=new yb,ju=new lf,Fp=new Te,D3=new Te;class ez extends zn{constructor(t=new qr,n=new o6){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let o=1,s=n.count;o<s;o++)bd.fromBufferAttribute(n,o-1),kd.fromBufferAttribute(n,o),i[o]=i[o-1],i[o]+=bd.distanceTo(kd);t.setAttribute("lineDistance",new Qi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ju.copy(i.boundingSphere),ju.applyMatrix4(o),ju.radius+=s,t.ray.intersectsSphere(ju)===!1)return;B3.copy(o).invert(),Jl.copy(t.ray).applyMatrix4(B3);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,c=i.index,p=i.attributes.position;if(c!==null){const g=Math.max(0,r.start),y=Math.min(c.count,r.start+r.count);for(let b=g,m=y-1;b<m;b+=u){const v=c.getX(b),S=c.getX(b+1),k=Vu(this,t,Jl,a,v,S);k&&n.push(k)}if(this.isLineLoop){const b=c.getX(y-1),m=c.getX(g),v=Vu(this,t,Jl,a,b,m);v&&n.push(v)}}else{const g=Math.max(0,r.start),y=Math.min(p.count,r.start+r.count);for(let b=g,m=y-1;b<m;b+=u){const v=Vu(this,t,Jl,a,b,b+1);v&&n.push(v)}if(this.isLineLoop){const b=Vu(this,t,Jl,a,y-1,g);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const o=n[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const l=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Vu(e,t,n,i,o,s){const r=e.geometry.attributes.position;if(bd.fromBufferAttribute(r,o),kd.fromBufferAttribute(r,s),n.distanceSqToSegment(bd,kd,Fp,D3)>i)return;Fp.applyMatrix4(e.matrixWorld);const a=t.ray.origin.distanceTo(Fp);if(!(a<t.near||a>t.far))return{distance:a,point:D3.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,object:e}}const F3=new Te,j3=new Te;class tz extends ez{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let o=0,s=n.count;o<s;o+=2)F3.fromBufferAttribute(n,o),j3.fromBufferAttribute(n,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+F3.distanceTo(j3);t.setAttribute("lineDistance",new Qi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rl extends Ll{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B5,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=mb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nz extends zn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const jp=new hn,V3=new Te,U3=new Te;class iz{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bb,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new On(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;V3.setFromMatrixPosition(t.matrixWorld),n.position.copy(V3),U3.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(U3),n.updateMatrixWorld(),jp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rz extends iz{constructor(){super(new J5(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oz extends nz{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new rz}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class H3{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ni(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sz extends tz{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new qr;o.setAttribute("position",new Qi(n,3)),o.setAttribute("color",new Qi(i,3));const s=new o6({vertexColors:!0,toneMapped:!1});super(o,s),this.type="AxesHelper"}setColors(t,n,i){const o=new jt,s=this.geometry.attributes.color.array;return o.set(t),o.toArray(s,0),o.toArray(s,3),o.set(n),o.toArray(s,6),o.toArray(s,9),o.set(i),o.toArray(s,12),o.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hb}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hb);const W3={type:"change"},Vp={type:"start"},G3={type:"end"},Uu=new yb,q3=new vo,lz=Math.cos(70*UL.DEG2RAD);class az extends Ps{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Te,this.cursor=new Te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",ve),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(W3),i.update(),s=o.NONE},this.update=function(){const H=new Te,ye=new Lo().setFromUnitVectors(t.up,new Te(0,1,0)),Ee=ye.clone().invert(),Ke=new Te,it=new Lo,xt=new Te,Pt=2*Math.PI;return function(un=null){const Ot=i.object.position;H.copy(Ot).sub(i.target),H.applyQuaternion(ye),l.setFromVector3(H),i.autoRotate&&s===o.NONE&&U($(un)),i.enableDamping?(l.theta+=a.theta*i.dampingFactor,l.phi+=a.phi*i.dampingFactor):(l.theta+=a.theta,l.phi+=a.phi);let et=i.minAzimuthAngle,vt=i.maxAzimuthAngle;isFinite(et)&&isFinite(vt)&&(et<-Math.PI?et+=Pt:et>Math.PI&&(et-=Pt),vt<-Math.PI?vt+=Pt:vt>Math.PI&&(vt-=Pt),et<=vt?l.theta=Math.max(et,Math.min(vt,l.theta)):l.theta=l.theta>(et+vt)/2?Math.max(et,l.theta):Math.min(vt,l.theta)),l.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,l.phi)),l.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Gt=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)l.radius=I(l.radius);else{const mn=l.radius;l.radius=I(l.radius*u),Gt=mn!=l.radius}if(H.setFromSpherical(l),H.applyQuaternion(Ee),Ot.copy(i.target).add(H),i.object.lookAt(i.target),i.enableDamping===!0?(a.theta*=1-i.dampingFactor,a.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(a.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&w){let mn=null;if(i.object.isPerspectiveCamera){const jn=H.length();mn=I(jn*u);const Vn=jn-mn;i.object.position.addScaledVector(C,Vn),i.object.updateMatrixWorld(),Gt=!!Vn}else if(i.object.isOrthographicCamera){const jn=new Te(P.x,P.y,0);jn.unproject(i.object);const Vn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Gt=Vn!==i.object.zoom;const Ti=new Te(P.x,P.y,0);Ti.unproject(i.object),i.object.position.sub(Ti).add(jn),i.object.updateMatrixWorld(),mn=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;mn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(mn).add(i.object.position):(Uu.origin.copy(i.object.position),Uu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Uu.direction))<lz?t.lookAt(i.target):(q3.setFromNormalAndCoplanarPoint(i.object.up,i.target),Uu.intersectPlane(q3,i.target))))}else if(i.object.isOrthographicCamera){const mn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),mn!==i.object.zoom&&(i.object.updateProjectionMatrix(),Gt=!0)}return u=1,w=!1,Gt||Ke.distanceToSquared(i.object.position)>r||8*(1-it.dot(i.object.quaternion))>r||xt.distanceToSquared(i.target)>r?(i.dispatchEvent(W3),Ke.copy(i.object.position),it.copy(i.object.quaternion),xt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",mt),i.domElement.removeEventListener("pointerdown",X),i.domElement.removeEventListener("pointercancel",se),i.domElement.removeEventListener("wheel",$e),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",se),i.domElement.getRootNode().removeEventListener("keydown",We,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ve),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const r=1e-6,l=new H3,a=new H3;let u=1;const c=new Te,d=new Lt,p=new Lt,g=new Lt,y=new Lt,b=new Lt,m=new Lt,v=new Lt,S=new Lt,k=new Lt,C=new Te,P=new Lt;let w=!1;const x=[],N={};let E=!1;function $(H){return H!==null?2*Math.PI/60*i.autoRotateSpeed*H:2*Math.PI/60/60*i.autoRotateSpeed}function T(H){const ye=Math.abs(H*.01);return Math.pow(.95,i.zoomSpeed*ye)}function U(H){a.theta-=H}function R(H){a.phi-=H}const V=function(){const H=new Te;return function(Ee,Ke){H.setFromMatrixColumn(Ke,0),H.multiplyScalar(-Ee),c.add(H)}}(),Z=function(){const H=new Te;return function(Ee,Ke){i.screenSpacePanning===!0?H.setFromMatrixColumn(Ke,1):(H.setFromMatrixColumn(Ke,0),H.crossVectors(i.object.up,H)),H.multiplyScalar(Ee),c.add(H)}}(),W=function(){const H=new Te;return function(Ee,Ke){const it=i.domElement;if(i.object.isPerspectiveCamera){const xt=i.object.position;H.copy(xt).sub(i.target);let Pt=H.length();Pt*=Math.tan(i.object.fov/2*Math.PI/180),V(2*Ee*Pt/it.clientHeight,i.object.matrix),Z(2*Ke*Pt/it.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(Ee*(i.object.right-i.object.left)/i.object.zoom/it.clientWidth,i.object.matrix),Z(Ke*(i.object.top-i.object.bottom)/i.object.zoom/it.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(H){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(H){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(H,ye){if(!i.zoomToCursor)return;w=!0;const Ee=i.domElement.getBoundingClientRect(),Ke=H-Ee.left,it=ye-Ee.top,xt=Ee.width,Pt=Ee.height;P.x=Ke/xt*2-1,P.y=-(it/Pt)*2+1,C.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function I(H){return Math.max(i.minDistance,Math.min(i.maxDistance,H))}function Y(H){d.set(H.clientX,H.clientY)}function re(H){K(H.clientX,H.clientX),v.set(H.clientX,H.clientY)}function fe(H){y.set(H.clientX,H.clientY)}function Q(H){p.set(H.clientX,H.clientY),g.subVectors(p,d).multiplyScalar(i.rotateSpeed);const ye=i.domElement;U(2*Math.PI*g.x/ye.clientHeight),R(2*Math.PI*g.y/ye.clientHeight),d.copy(p),i.update()}function ne(H){S.set(H.clientX,H.clientY),k.subVectors(S,v),k.y>0?j(T(k.y)):k.y<0&&B(T(k.y)),v.copy(S),i.update()}function pe(H){b.set(H.clientX,H.clientY),m.subVectors(b,y).multiplyScalar(i.panSpeed),W(m.x,m.y),y.copy(b),i.update()}function be(H){K(H.clientX,H.clientY),H.deltaY<0?B(T(H.deltaY)):H.deltaY>0&&j(T(H.deltaY)),i.update()}function Ae(H){let ye=!1;switch(H.code){case i.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),ye=!0;break;case i.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),ye=!0;break;case i.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),ye=!0;break;case i.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),ye=!0;break}ye&&(H.preventDefault(),i.update())}function Oe(H){if(x.length===1)d.set(H.pageX,H.pageY);else{const ye=Qe(H),Ee=.5*(H.pageX+ye.x),Ke=.5*(H.pageY+ye.y);d.set(Ee,Ke)}}function le(H){if(x.length===1)y.set(H.pageX,H.pageY);else{const ye=Qe(H),Ee=.5*(H.pageX+ye.x),Ke=.5*(H.pageY+ye.y);y.set(Ee,Ke)}}function Ie(H){const ye=Qe(H),Ee=H.pageX-ye.x,Ke=H.pageY-ye.y,it=Math.sqrt(Ee*Ee+Ke*Ke);v.set(0,it)}function Fe(H){i.enableZoom&&Ie(H),i.enablePan&&le(H)}function G(H){i.enableZoom&&Ie(H),i.enableRotate&&Oe(H)}function F(H){if(x.length==1)p.set(H.pageX,H.pageY);else{const Ee=Qe(H),Ke=.5*(H.pageX+Ee.x),it=.5*(H.pageY+Ee.y);p.set(Ke,it)}g.subVectors(p,d).multiplyScalar(i.rotateSpeed);const ye=i.domElement;U(2*Math.PI*g.x/ye.clientHeight),R(2*Math.PI*g.y/ye.clientHeight),d.copy(p)}function ie(H){if(x.length===1)b.set(H.pageX,H.pageY);else{const ye=Qe(H),Ee=.5*(H.pageX+ye.x),Ke=.5*(H.pageY+ye.y);b.set(Ee,Ke)}m.subVectors(b,y).multiplyScalar(i.panSpeed),W(m.x,m.y),y.copy(b)}function ae(H){const ye=Qe(H),Ee=H.pageX-ye.x,Ke=H.pageY-ye.y,it=Math.sqrt(Ee*Ee+Ke*Ke);S.set(0,it),k.set(0,Math.pow(S.y/v.y,i.zoomSpeed)),j(k.y),v.copy(S);const xt=(H.pageX+ye.x)*.5,Pt=(H.pageY+ye.y)*.5;K(xt,Pt)}function Ce(H){i.enableZoom&&ae(H),i.enablePan&&ie(H)}function Me(H){i.enableZoom&&ae(H),i.enableRotate&&F(H)}function X(H){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(H.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",se)),!Be(H)&&(at(H),H.pointerType==="touch"?ge(H):ce(H)))}function O(H){i.enabled!==!1&&(H.pointerType==="touch"?Ue(H):ke(H))}function se(H){switch(ot(H),x.length){case 0:i.domElement.releasePointerCapture(H.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",se),i.dispatchEvent(G3),s=o.NONE;break;case 1:const ye=x[0],Ee=N[ye];ge({pointerId:ye,pageX:Ee.x,pageY:Ee.y});break}}function ce(H){let ye;switch(H.button){case 0:ye=i.mouseButtons.LEFT;break;case 1:ye=i.mouseButtons.MIDDLE;break;case 2:ye=i.mouseButtons.RIGHT;break;default:ye=-1}switch(ye){case Rs.DOLLY:if(i.enableZoom===!1)return;re(H),s=o.DOLLY;break;case Rs.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(i.enablePan===!1)return;fe(H),s=o.PAN}else{if(i.enableRotate===!1)return;Y(H),s=o.ROTATE}break;case Rs.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(i.enableRotate===!1)return;Y(H),s=o.ROTATE}else{if(i.enablePan===!1)return;fe(H),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&i.dispatchEvent(Vp)}function ke(H){switch(s){case o.ROTATE:if(i.enableRotate===!1)return;Q(H);break;case o.DOLLY:if(i.enableZoom===!1)return;ne(H);break;case o.PAN:if(i.enablePan===!1)return;pe(H);break}}function $e(H){i.enabled===!1||i.enableZoom===!1||s!==o.NONE||(H.preventDefault(),i.dispatchEvent(Vp),be(Ve(H)),i.dispatchEvent(G3))}function Ve(H){const ye=H.deltaMode,Ee={clientX:H.clientX,clientY:H.clientY,deltaY:H.deltaY};switch(ye){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return H.ctrlKey&&!E&&(Ee.deltaY*=10),Ee}function We(H){H.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(H){H.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function ve(H){i.enabled===!1||i.enablePan===!1||Ae(H)}function ge(H){switch(qe(H),x.length){case 1:switch(i.touches.ONE){case Bs.ROTATE:if(i.enableRotate===!1)return;Oe(H),s=o.TOUCH_ROTATE;break;case Bs.PAN:if(i.enablePan===!1)return;le(H),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(i.touches.TWO){case Bs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(H),s=o.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(H),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&i.dispatchEvent(Vp)}function Ue(H){switch(qe(H),s){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;F(H),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;ie(H),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(H),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(H),i.update();break;default:s=o.NONE}}function mt(H){i.enabled!==!1&&H.preventDefault()}function at(H){x.push(H.pointerId)}function ot(H){delete N[H.pointerId];for(let ye=0;ye<x.length;ye++)if(x[ye]==H.pointerId){x.splice(ye,1);return}}function Be(H){for(let ye=0;ye<x.length;ye++)if(x[ye]==H.pointerId)return!0;return!1}function qe(H){let ye=N[H.pointerId];ye===void 0&&(ye=new Lt,N[H.pointerId]=ye),ye.set(H.pageX,H.pageY)}function Qe(H){const ye=H.pointerId===x[0]?x[1]:x[0];return N[ye]}i.domElement.addEventListener("contextmenu",mt),i.domElement.addEventListener("pointerdown",X),i.domElement.addEventListener("pointercancel",se),i.domElement.addEventListener("wheel",$e,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",We,{passive:!0,capture:!0}),this.update()}}const K3=new Te,uz=new Lo,Z3=new Te;class cz extends zn{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(t,n){return super.copy(t,n),this.element=t.element.cloneNode(!0),this}}const fr=new hn,dz=new hn;class fz{constructor(t={}){const n=this;let i,o,s,r;const l={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const u=document.createElement("div");u.style.transformOrigin="0 0",u.style.pointerEvents="none",a.appendChild(u);const c=document.createElement("div");c.style.transformStyle="preserve-3d",u.appendChild(c),this.getSize=function(){return{width:i,height:o}},this.render=function(b,m){const v=m.projectionMatrix.elements[5]*r;m.view&&m.view.enabled?(u.style.transform=`translate( ${-m.view.offsetX*(i/m.view.width)}px, ${-m.view.offsetY*(o/m.view.height)}px )`,u.style.transform+=`scale( ${m.view.fullWidth/m.view.width}, ${m.view.fullHeight/m.view.height} )`):u.style.transform="",b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld();let S,k;m.isOrthographicCamera&&(S=-(m.right+m.left)/2,k=(m.top+m.bottom)/2);const C=m.view&&m.view.enabled?m.view.height/m.view.fullHeight:1,P=m.isOrthographicCamera?`scale( ${C} )scale(`+v+")translate("+d(S)+"px,"+d(k)+"px)"+p(m.matrixWorldInverse):`scale( ${C} )translateZ(`+v+"px)"+p(m.matrixWorldInverse),x=(m.isPerspectiveCamera?"perspective("+v+"px) ":"")+P+"translate("+s+"px,"+r+"px)";l.camera.style!==x&&(c.style.transform=x,l.camera.style=x),y(b,b,m)},this.setSize=function(b,m){i=b,o=m,s=i/2,r=o/2,a.style.width=b+"px",a.style.height=m+"px",u.style.width=b+"px",u.style.height=m+"px",c.style.width=b+"px",c.style.height=m+"px"};function d(b){return Math.abs(b)<1e-10?0:b}function p(b){const m=b.elements;return"matrix3d("+d(m[0])+","+d(-m[1])+","+d(m[2])+","+d(m[3])+","+d(m[4])+","+d(-m[5])+","+d(m[6])+","+d(m[7])+","+d(m[8])+","+d(-m[9])+","+d(m[10])+","+d(m[11])+","+d(m[12])+","+d(-m[13])+","+d(m[14])+","+d(m[15])+")"}function g(b){const m=b.elements;return"translate(-50%,-50%)"+("matrix3d("+d(m[0])+","+d(m[1])+","+d(m[2])+","+d(m[3])+","+d(-m[4])+","+d(-m[5])+","+d(-m[6])+","+d(-m[7])+","+d(m[8])+","+d(m[9])+","+d(m[10])+","+d(m[11])+","+d(m[12])+","+d(m[13])+","+d(m[14])+","+d(m[15])+")")}function y(b,m,v,S){if(b.isCSS3DObject){const k=b.visible===!0&&b.layers.test(v.layers)===!0;if(b.element.style.display=k===!0?"":"none",k===!0){b.onBeforeRender(n,m,v);let C;b.isCSS3DSprite?(fr.copy(v.matrixWorldInverse),fr.transpose(),b.rotation2D!==0&&fr.multiply(dz.makeRotationZ(b.rotation2D)),b.matrixWorld.decompose(K3,uz,Z3),fr.setPosition(K3),fr.scale(Z3),fr.elements[3]=0,fr.elements[7]=0,fr.elements[11]=0,fr.elements[15]=1,C=g(fr)):C=g(b.matrixWorld);const P=b.element,w=l.objects.get(b);if(w===void 0||w.style!==C){P.style.transform=C;const x={style:C};l.objects.set(b,x)}P.parentNode!==c&&c.appendChild(P),b.onAfterRender(n,m,v)}}for(let k=0,C=b.children.length;k<C;k++)y(b.children[k],m,v)}}}function s6(e,t){return function(){return e.apply(t,arguments)}}const{toString:pz}=Object.prototype,{getPrototypeOf:_b}=Object,cf=(e=>t=>{const n=pz.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),or=e=>(e=e.toLowerCase(),t=>cf(t)===e),df=e=>t=>typeof t===e,{isArray:Il}=Array,Da=df("undefined");function hz(e){return e!==null&&!Da(e)&&e.constructor!==null&&!Da(e.constructor)&&ji(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const l6=or("ArrayBuffer");function mz(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&l6(e.buffer),t}const vz=df("string"),ji=df("function"),a6=df("number"),ff=e=>e!==null&&typeof e=="object",gz=e=>e===!0||e===!1,lc=e=>{if(cf(e)!=="object")return!1;const t=_b(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yz=or("Date"),bz=or("File"),kz=or("Blob"),_z=or("FileList"),Cz=e=>ff(e)&&ji(e.pipe),Sz=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ji(e.append)&&((t=cf(e))==="formdata"||t==="object"&&ji(e.toString)&&e.toString()==="[object FormData]"))},wz=or("URLSearchParams"),[$z,Mz,xz,Pz]=["ReadableStream","Request","Response","Headers"].map(or),Ez=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ka(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,o;if(typeof e!="object"&&(e=[e]),Il(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),r=s.length;let l;for(i=0;i<r;i++)l=s[i],t.call(null,e[l],l,e)}}function u6(e,t){t=t.toLowerCase();const n=Object.keys(e);let i=n.length,o;for(;i-- >0;)if(o=n[i],t===o.toLowerCase())return o;return null}const c6=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,d6=e=>!Da(e)&&e!==c6;function u2(){const{caseless:e}=d6(this)&&this||{},t={},n=(i,o)=>{const s=e&&u6(t,o)||o;lc(t[s])&&lc(i)?t[s]=u2(t[s],i):lc(i)?t[s]=u2({},i):Il(i)?t[s]=i.slice():t[s]=i};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&Ka(arguments[i],n);return t}const Lz=(e,t,n,{allOwnKeys:i}={})=>(Ka(t,(o,s)=>{n&&ji(o)?e[s]=s6(o,n):e[s]=o},{allOwnKeys:i}),e),Tz=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Iz=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Az=(e,t,n,i)=>{let o,s,r;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)r=o[s],(!i||i(r,e,t))&&!l[r]&&(t[r]=e[r],l[r]=!0);e=n!==!1&&_b(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Oz=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},zz=e=>{if(!e)return null;if(Il(e))return e;let t=e.length;if(!a6(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Nz=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_b(Uint8Array)),Rz=(e,t)=>{const i=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=i.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Bz=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},Dz=or("HTMLFormElement"),Fz=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),X3=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),jz=or("RegExp"),f6=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Ka(n,(o,s)=>{let r;(r=t(o,s,e))!==!1&&(i[s]=r||o)}),Object.defineProperties(e,i)},Vz=e=>{f6(e,(t,n)=>{if(ji(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(ji(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Uz=(e,t)=>{const n={},i=o=>{o.forEach(s=>{n[s]=!0})};return Il(e)?i(e):i(String(e).split(t)),n},Hz=()=>{},Wz=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Up="abcdefghijklmnopqrstuvwxyz",Y3="0123456789",p6={DIGIT:Y3,ALPHA:Up,ALPHA_DIGIT:Up+Up.toUpperCase()+Y3},Gz=(e=16,t=p6.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n};function qz(e){return!!(e&&ji(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kz=e=>{const t=new Array(10),n=(i,o)=>{if(ff(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[o]=i;const s=Il(i)?[]:{};return Ka(i,(r,l)=>{const a=n(r,o+1);!Da(a)&&(s[l]=a)}),t[o]=void 0,s}}return i};return n(e,0)},Zz=or("AsyncFunction"),Xz=e=>e&&(ff(e)||ji(e))&&ji(e.then)&&ji(e.catch),Ge={isArray:Il,isArrayBuffer:l6,isBuffer:hz,isFormData:Sz,isArrayBufferView:mz,isString:vz,isNumber:a6,isBoolean:gz,isObject:ff,isPlainObject:lc,isReadableStream:$z,isRequest:Mz,isResponse:xz,isHeaders:Pz,isUndefined:Da,isDate:yz,isFile:bz,isBlob:kz,isRegExp:jz,isFunction:ji,isStream:Cz,isURLSearchParams:wz,isTypedArray:Nz,isFileList:_z,forEach:Ka,merge:u2,extend:Lz,trim:Ez,stripBOM:Tz,inherits:Iz,toFlatObject:Az,kindOf:cf,kindOfTest:or,endsWith:Oz,toArray:zz,forEachEntry:Rz,matchAll:Bz,isHTMLForm:Dz,hasOwnProperty:X3,hasOwnProp:X3,reduceDescriptors:f6,freezeMethods:Vz,toObjectSet:Uz,toCamelCase:Fz,noop:Hz,toFiniteNumber:Wz,findKey:u6,global:c6,isContextDefined:d6,ALPHABET:p6,generateString:Gz,isSpecCompliantForm:qz,toJSONObject:Kz,isAsyncFn:Zz,isThenable:Xz};function At(e,t,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}Ge.inherits(At,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ge.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const h6=At.prototype,m6={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{m6[e]={value:e}});Object.defineProperties(At,m6);Object.defineProperty(h6,"isAxiosError",{value:!0});At.from=(e,t,n,i,o,s)=>{const r=Object.create(h6);return Ge.toFlatObject(e,r,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),At.call(r,e.message,t,n,i,o),r.cause=e,r.name=e.name,s&&Object.assign(r,s),r};const Yz=null;function c2(e){return Ge.isPlainObject(e)||Ge.isArray(e)}function v6(e){return Ge.endsWith(e,"[]")?e.slice(0,-2):e}function J3(e,t,n){return e?e.concat(t).map(function(o,s){return o=v6(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Jz(e){return Ge.isArray(e)&&!e.some(c2)}const Qz=Ge.toFlatObject(Ge,{},null,function(t){return/^is[A-Z]/.test(t)});function pf(e,t,n){if(!Ge.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=Ge.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,m){return!Ge.isUndefined(m[b])});const i=n.metaTokens,o=n.visitor||c,s=n.dots,r=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&Ge.isSpecCompliantForm(t);if(!Ge.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(Ge.isDate(y))return y.toISOString();if(!a&&Ge.isBlob(y))throw new At("Blob is not supported. Use a Buffer instead.");return Ge.isArrayBuffer(y)||Ge.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,b,m){let v=y;if(y&&!m&&typeof y=="object"){if(Ge.endsWith(b,"{}"))b=i?b:b.slice(0,-2),y=JSON.stringify(y);else if(Ge.isArray(y)&&Jz(y)||(Ge.isFileList(y)||Ge.endsWith(b,"[]"))&&(v=Ge.toArray(y)))return b=v6(b),v.forEach(function(k,C){!(Ge.isUndefined(k)||k===null)&&t.append(r===!0?J3([b],C,s):r===null?b:b+"[]",u(k))}),!1}return c2(y)?!0:(t.append(J3(m,b,s),u(y)),!1)}const d=[],p=Object.assign(Qz,{defaultVisitor:c,convertValue:u,isVisitable:c2});function g(y,b){if(!Ge.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));d.push(y),Ge.forEach(y,function(v,S){(!(Ge.isUndefined(v)||v===null)&&o.call(t,v,Ge.isString(S)?S.trim():S,b,p))===!0&&g(v,b?b.concat(S):[S])}),d.pop()}}if(!Ge.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Q3(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Cb(e,t){this._pairs=[],e&&pf(e,this,t)}const g6=Cb.prototype;g6.append=function(t,n){this._pairs.push([t,n])};g6.toString=function(t){const n=t?function(i){return t.call(this,i,Q3)}:Q3;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function eN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function y6(e,t,n){if(!t)return e;const i=n&&n.encode||eN,o=n&&n.serialize;let s;if(o?s=o(t,n):s=Ge.isURLSearchParams(t)?t.toString():new Cb(t,n).toString(i),s){const r=e.indexOf("#");r!==-1&&(e=e.slice(0,r)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class e_{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Ge.forEach(this.handlers,function(i){i!==null&&t(i)})}}const b6={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tN=typeof URLSearchParams<"u"?URLSearchParams:Cb,nN=typeof FormData<"u"?FormData:null,iN=typeof Blob<"u"?Blob:null,rN={isBrowser:!0,classes:{URLSearchParams:tN,FormData:nN,Blob:iN},protocols:["http","https","file","blob","url","data"]},Sb=typeof window<"u"&&typeof document<"u",oN=(e=>Sb&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),sN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lN=Sb&&window.location.href||"http://localhost",aN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sb,hasStandardBrowserEnv:oN,hasStandardBrowserWebWorkerEnv:sN,origin:lN},Symbol.toStringTag,{value:"Module"})),er={...aN,...rN};function uN(e,t){return pf(e,new er.classes.URLSearchParams,Object.assign({visitor:function(n,i,o,s){return er.isNode&&Ge.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function cN(e){return Ge.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dN(e){const t={},n=Object.keys(e);let i;const o=n.length;let s;for(i=0;i<o;i++)s=n[i],t[s]=e[s];return t}function k6(e){function t(n,i,o,s){let r=n[s++];if(r==="__proto__")return!0;const l=Number.isFinite(+r),a=s>=n.length;return r=!r&&Ge.isArray(o)?o.length:r,a?(Ge.hasOwnProp(o,r)?o[r]=[o[r],i]:o[r]=i,!l):((!o[r]||!Ge.isObject(o[r]))&&(o[r]=[]),t(n,i,o[r],s)&&Ge.isArray(o[r])&&(o[r]=dN(o[r])),!l)}if(Ge.isFormData(e)&&Ge.isFunction(e.entries)){const n={};return Ge.forEachEntry(e,(i,o)=>{t(cN(i),o,n,0)}),n}return null}function fN(e,t,n){if(Ge.isString(e))try{return(t||JSON.parse)(e),Ge.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const Za={transitional:b6,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,s=Ge.isObject(t);if(s&&Ge.isHTMLForm(t)&&(t=new FormData(t)),Ge.isFormData(t))return o?JSON.stringify(k6(t)):t;if(Ge.isArrayBuffer(t)||Ge.isBuffer(t)||Ge.isStream(t)||Ge.isFile(t)||Ge.isBlob(t)||Ge.isReadableStream(t))return t;if(Ge.isArrayBufferView(t))return t.buffer;if(Ge.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return uN(t,this.formSerializer).toString();if((l=Ge.isFileList(t))||i.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return pf(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),fN(t)):t}],transformResponse:[function(t){const n=this.transitional||Za.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(Ge.isResponse(t)||Ge.isReadableStream(t))return t;if(t&&Ge.isString(t)&&(i&&!this.responseType||o)){const r=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(r)throw l.name==="SyntaxError"?At.from(l,At.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:er.classes.FormData,Blob:er.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ge.forEach(["delete","get","head","post","put","patch"],e=>{Za.headers[e]={}});const pN=Ge.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hN=e=>{const t={};let n,i,o;return e&&e.split(`
`).forEach(function(r){o=r.indexOf(":"),n=r.substring(0,o).trim().toLowerCase(),i=r.substring(o+1).trim(),!(!n||t[n]&&pN[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},t_=Symbol("internals");function Ql(e){return e&&String(e).trim().toLowerCase()}function ac(e){return e===!1||e==null?e:Ge.isArray(e)?e.map(ac):String(e)}function mN(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const vN=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Hp(e,t,n,i,o){if(Ge.isFunction(i))return i.call(this,t,n);if(o&&(t=n),!!Ge.isString(t)){if(Ge.isString(i))return t.indexOf(i)!==-1;if(Ge.isRegExp(i))return i.test(t)}}function gN(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function yN(e,t){const n=Ge.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(o,s,r){return this[i].call(this,t,o,s,r)},configurable:!0})})}class _i{constructor(t){t&&this.set(t)}set(t,n,i){const o=this;function s(l,a,u){const c=Ql(a);if(!c)throw new Error("header name must be a non-empty string");const d=Ge.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||a]=ac(l))}const r=(l,a)=>Ge.forEach(l,(u,c)=>s(u,c,a));if(Ge.isPlainObject(t)||t instanceof this.constructor)r(t,n);else if(Ge.isString(t)&&(t=t.trim())&&!vN(t))r(hN(t),n);else if(Ge.isHeaders(t))for(const[l,a]of t.entries())s(a,l,i);else t!=null&&s(n,t,i);return this}get(t,n){if(t=Ql(t),t){const i=Ge.findKey(this,t);if(i){const o=this[i];if(!n)return o;if(n===!0)return mN(o);if(Ge.isFunction(n))return n.call(this,o,i);if(Ge.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ql(t),t){const i=Ge.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Hp(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let o=!1;function s(r){if(r=Ql(r),r){const l=Ge.findKey(i,r);l&&(!n||Hp(i,i[l],l,n))&&(delete i[l],o=!0)}}return Ge.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const s=n[i];(!t||Hp(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,i={};return Ge.forEach(this,(o,s)=>{const r=Ge.findKey(i,s);if(r){n[r]=ac(o),delete n[s];return}const l=t?gN(s):String(s).trim();l!==s&&delete n[s],n[l]=ac(o),i[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return Ge.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=t&&Ge.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(o=>i.set(o)),i}static accessor(t){const i=(this[t_]=this[t_]={accessors:{}}).accessors,o=this.prototype;function s(r){const l=Ql(r);i[l]||(yN(o,r),i[l]=!0)}return Ge.isArray(t)?t.forEach(s):s(t),this}}_i.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Ge.reduceDescriptors(_i.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});Ge.freezeMethods(_i);function Wp(e,t){const n=this||Za,i=t||n,o=_i.from(i.headers);let s=i.data;return Ge.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function _6(e){return!!(e&&e.__CANCEL__)}function Al(e,t,n){At.call(this,e??"canceled",At.ERR_CANCELED,t,n),this.name="CanceledError"}Ge.inherits(Al,At,{__CANCEL__:!0});function C6(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new At("Request failed with status code "+n.status,[At.ERR_BAD_REQUEST,At.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function bN(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function kN(e,t){e=e||10;const n=new Array(e),i=new Array(e);let o=0,s=0,r;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=i[s];r||(r=u),n[o]=a,i[o]=u;let d=s,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-r<t)return;const g=c&&u-c;return g?Math.round(p*1e3/g):void 0}}function _N(e,t){let n=0;const i=1e3/t;let o=null;return function(){const r=this===!0,l=Date.now();if(r||l-n>i)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),i-(l-n)))}}const _d=(e,t,n=3)=>{let i=0;const o=kN(50,250);return _N(s=>{const r=s.loaded,l=s.lengthComputable?s.total:void 0,a=r-i,u=o(a),c=r<=l;i=r;const d={loaded:r,total:l,progress:l?r/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-r)/u:void 0,event:s,lengthComputable:l!=null};d[t?"download":"upload"]=!0,e(d)},n)},CN=er.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function o(s){let r=s;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=o(window.location.href),function(r){const l=Ge.isString(r)?o(r):r;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),SN=er.hasStandardBrowserEnv?{write(e,t,n,i,o,s){const r=[e+"="+encodeURIComponent(t)];Ge.isNumber(n)&&r.push("expires="+new Date(n).toGMTString()),Ge.isString(i)&&r.push("path="+i),Ge.isString(o)&&r.push("domain="+o),s===!0&&r.push("secure"),document.cookie=r.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wN(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $N(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function S6(e,t){return e&&!wN(t)?$N(e,t):t}const n_=e=>e instanceof _i?{...e}:e;function _s(e,t){t=t||{};const n={};function i(u,c,d){return Ge.isPlainObject(u)&&Ge.isPlainObject(c)?Ge.merge.call({caseless:d},u,c):Ge.isPlainObject(c)?Ge.merge({},c):Ge.isArray(c)?c.slice():c}function o(u,c,d){if(Ge.isUndefined(c)){if(!Ge.isUndefined(u))return i(void 0,u,d)}else return i(u,c,d)}function s(u,c){if(!Ge.isUndefined(c))return i(void 0,c)}function r(u,c){if(Ge.isUndefined(c)){if(!Ge.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function l(u,c,d){if(d in t)return i(u,c);if(d in e)return i(void 0,u)}const a={url:s,method:s,data:s,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:l,headers:(u,c)=>o(n_(u),n_(c),!0)};return Ge.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=a[c]||o,p=d(e[c],t[c],c);Ge.isUndefined(p)&&d!==l||(n[c]=p)}),n}const w6=e=>{const t=_s({},e);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:s,headers:r,auth:l}=t;t.headers=r=_i.from(r),t.url=y6(S6(t.baseURL,t.url),e.params,e.paramsSerializer),l&&r.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(Ge.isFormData(n)){if(er.hasStandardBrowserEnv||er.hasStandardBrowserWebWorkerEnv)r.setContentType(void 0);else if((a=r.getContentType())!==!1){const[u,...c]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];r.setContentType([u||"multipart/form-data",...c].join("; "))}}if(er.hasStandardBrowserEnv&&(i&&Ge.isFunction(i)&&(i=i(t)),i||i!==!1&&CN(t.url))){const u=o&&s&&SN.read(s);u&&r.set(o,u)}return t},MN=typeof XMLHttpRequest<"u",xN=MN&&function(e){return new Promise(function(n,i){const o=w6(e);let s=o.data;const r=_i.from(o.headers).normalize();let{responseType:l}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function d(){if(!c)return;const g=_i.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),b={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};C6(function(v){n(v),u()},function(v){i(v),u()},b),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(i(new At("Request aborted",At.ECONNABORTED,o,c)),c=null)},c.onerror=function(){i(new At("Network Error",At.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const b=o.transitional||b6;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),i(new At(y,b.clarifyTimeoutError?At.ETIMEDOUT:At.ECONNABORTED,o,c)),c=null},s===void 0&&r.setContentType(null),"setRequestHeader"in c&&Ge.forEach(r.toJSON(),function(y,b){c.setRequestHeader(b,y)}),Ge.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),l&&l!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",_d(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",_d(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=g=>{c&&(i(!g||g.type?new Al(null,e,c):g),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const p=bN(o.url);if(p&&er.protocols.indexOf(p)===-1){i(new At("Unsupported protocol "+p+":",At.ERR_BAD_REQUEST,e));return}c.send(s||null)})},PN=(e,t)=>{let n=new AbortController,i;const o=function(a){if(!i){i=!0,r();const u=a instanceof Error?a:this.reason;n.abort(u instanceof At?u:new Al(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{o(new At(`timeout ${t} of ms exceeded`,At.ETIMEDOUT))},t);const r=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=r,[l,()=>{s&&clearTimeout(s),s=null}]},EN=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let i=0,o;for(;i<n;)o=i+t,yield e.slice(i,o),i=o},LN=async function*(e,t,n){for await(const i of e)yield*EN(ArrayBuffer.isView(i)?i:await n(String(i)),t)},i_=(e,t,n,i,o)=>{const s=LN(e,t,o);let r=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await s.next();if(a){l.close(),i();return}let c=u.byteLength;n&&n(r+=c),l.enqueue(new Uint8Array(u))},cancel(l){return i(l),s.return()}},{highWaterMark:2})},r_=(e,t)=>{const n=e!=null;return i=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:i}))},hf=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",$6=hf&&typeof ReadableStream=="function",d2=hf&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),TN=$6&&(()=>{let e=!1;const t=new Request(er.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),o_=64*1024,f2=$6&&!!(()=>{try{return Ge.isReadableStream(new Response("").body)}catch{}})(),Cd={stream:f2&&(e=>e.body)};hf&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Cd[t]&&(Cd[t]=Ge.isFunction(e[t])?n=>n[t]():(n,i)=>{throw new At(`Response type '${t}' is not supported`,At.ERR_NOT_SUPPORT,i)})})})(new Response);const IN=async e=>{if(e==null)return 0;if(Ge.isBlob(e))return e.size;if(Ge.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(Ge.isArrayBufferView(e))return e.byteLength;if(Ge.isURLSearchParams(e)&&(e=e+""),Ge.isString(e))return(await d2(e)).byteLength},AN=async(e,t)=>{const n=Ge.toFiniteNumber(e.getContentLength());return n??IN(t)},ON=hf&&(async e=>{let{url:t,method:n,data:i,signal:o,cancelToken:s,timeout:r,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:p}=w6(e);u=u?(u+"").toLowerCase():"text";let[g,y]=o||s||r?PN([o,s],r):[],b,m;const v=()=>{!b&&setTimeout(()=>{g&&g.unsubscribe()}),b=!0};let S;try{if(a&&TN&&n!=="get"&&n!=="head"&&(S=await AN(c,i))!==0){let w=new Request(t,{method:"POST",body:i,duplex:"half"}),x;Ge.isFormData(i)&&(x=w.headers.get("content-type"))&&c.setContentType(x),w.body&&(i=i_(w.body,o_,r_(S,_d(a)),null,d2))}Ge.isString(d)||(d=d?"cors":"omit"),m=new Request(t,{...p,signal:g,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:i,duplex:"half",withCredentials:d});let k=await fetch(m);const C=f2&&(u==="stream"||u==="response");if(f2&&(l||C)){const w={};["status","statusText","headers"].forEach(N=>{w[N]=k[N]});const x=Ge.toFiniteNumber(k.headers.get("content-length"));k=new Response(i_(k.body,o_,l&&r_(x,_d(l,!0)),C&&v,d2),w)}u=u||"text";let P=await Cd[Ge.findKey(Cd,u)||"text"](k,e);return!C&&v(),y&&y(),await new Promise((w,x)=>{C6(w,x,{data:P,headers:_i.from(k.headers),status:k.status,statusText:k.statusText,config:e,request:m})})}catch(k){throw v(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new At("Network Error",At.ERR_NETWORK,e,m),{cause:k.cause||k}):At.from(k,k&&k.code,e,m)}}),p2={http:Yz,xhr:xN,fetch:ON};Ge.forEach(p2,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const s_=e=>`- ${e}`,zN=e=>Ge.isFunction(e)||e===null||e===!1,M6={getAdapter:e=>{e=Ge.isArray(e)?e:[e];const{length:t}=e;let n,i;const o={};for(let s=0;s<t;s++){n=e[s];let r;if(i=n,!zN(n)&&(i=p2[(r=String(n)).toLowerCase()],i===void 0))throw new At(`Unknown adapter '${r}'`);if(i)break;o[r||"#"+s]=i}if(!i){const s=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let r=t?s.length>1?`since :
`+s.map(s_).join(`
`):" "+s_(s[0]):"as no adapter specified";throw new At("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return i},adapters:p2};function Gp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Al(null,e)}function l_(e){return Gp(e),e.headers=_i.from(e.headers),e.data=Wp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),M6.getAdapter(e.adapter||Za.adapter)(e).then(function(i){return Gp(e),i.data=Wp.call(e,e.transformResponse,i),i.headers=_i.from(i.headers),i},function(i){return _6(i)||(Gp(e),i&&i.response&&(i.response.data=Wp.call(e,e.transformResponse,i.response),i.response.headers=_i.from(i.response.headers))),Promise.reject(i)})}const x6="1.7.2",wb={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{wb[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const a_={};wb.transitional=function(t,n,i){function o(s,r){return"[Axios v"+x6+"] Transitional option '"+s+"'"+r+(i?". "+i:"")}return(s,r,l)=>{if(t===!1)throw new At(o(r," has been removed"+(n?" in "+n:"")),At.ERR_DEPRECATED);return n&&!a_[r]&&(a_[r]=!0,console.warn(o(r," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,r,l):!0}};function NN(e,t,n){if(typeof e!="object")throw new At("options must be an object",At.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const s=i[o],r=t[s];if(r){const l=e[s],a=l===void 0||r(l,s,e);if(a!==!0)throw new At("option "+s+" must be "+a,At.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new At("Unknown option "+s,At.ERR_BAD_OPTION)}}const h2={assertOptions:NN,validators:wb},lo=h2.validators;class ps{constructor(t){this.defaults=t,this.interceptors={request:new e_,response:new e_}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`),7)):he("v-if",!0),h(r,{onResize:e.handleResize},{default:we(()=>[A("textarea",Pe({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...u)=>e.handleInput&&e.handleInput(...u)),onFocus:t[1]||(t[1]=(...u)=>e.handleFocus&&e.handleFocus(...u)),onBlur:t[2]||(t[2]=(...u)=>e.handleBlur&&e.handleBlur(...u)),onCompositionstart:t[3]||(t[3]=(...u)=>e.handleComposition&&e.handleComposition(...u)),onCompositionupdate:t[4]||(t[4]=(...u)=>e.handleComposition&&e.handleComposition(...u)),onCompositionend:t[5]||(t[5]=(...u)=>e.handleComposition&&e.handleComposition(...u))}),null,16,dJ)]),_:1},8,["onResize"]),de(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(_(),L("div",{key:1,class:M(`${e.prefixCls}-word-limit`)},nt(e.valueLength)+"/"+nt(e.computedMaxLength),3)):he("v-if",!0),e.showClearBtn?(_(),L("div",{key:2,class:M(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...u)=>e.handleClear&&e.handleClear(...u))},[h(a,null,{default:we(()=>[h(l)]),_:1})],2)):he("v-if",!0)],16)}var xm=q(cJ,[["render",fJ]]);const WM=Object.assign(xm,{install:(e,t)=>{ht(e,t);const n=pt(t);e.component(n+xm.name,xm)}}),pJ=e=>{const{value:t,selectionStart:n}=e;return t.slice(0,n)},hJ=(e,t)=>[].concat(t).reduce((i,o)=>{const s=e.lastIndexOf(o);return s>i.location?{location:s,prefix:o}:i},{location:-1,prefix:""}),mJ=(e,t)=>!t||!e.includes(t);var vJ=Object.defineProperty,FS=Object.getOwnPropertySymbols,gJ=Object.prototype.hasOwnProperty,yJ=Object.prototype.propertyIsEnumerable,jS=(e,t,n)=>t in e?vJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bJ=(e,t)=>{for(var n in t||(t={}))gJ.call(t,n)&&jS(e,n,t[n]);if(FS)for(var n of FS(t))yJ.call(t,n)&&jS(e,n,t[n]);return e};function kJ(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Qt(e)}var Pm=z({name:"Mention",inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},data:{type:Array,default:()=>[]},prefix:{type:[String,Array],default:"@"},split:{type:String,default:" "},type:{type:String,default:"input"},disabled:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:e=>!0,search:(e,t)=>!0,select:e=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:n,slots:i}){const o=D("mention");let s;const{mergedDisabled:r,eventHandlers:l}=rn({disabled:Ei(e,"disabled")}),{data:a,modelValue:u}=He(e),c=J(),d=J({}),p=J(e.defaultValue),g=f(()=>{var fe;return(fe=e.modelValue)!=null?fe:p.value});Je(u,fe=>{(st(fe)||ai(fe))&&(p.value="")});const y=f(()=>g.value?[ws(g.value)]:[]),b=J({measuring:!1,location:-1,prefix:"",text:""}),m=()=>{b.value={measuring:!1,location:-1,prefix:"",text:""}},v=J(),S=f(()=>b.value.text),k=J(!0),C=(fe,Q)=>{var ne,pe;const be=pJ(Q.target),Ae=hJ(be,e.prefix);if(Ae.location>-1){const Oe=be.slice(Ae.location+Ae.prefix.length);mJ(Oe,e.split)?(w.value=!0,b.value=bJ({measuring:!0,text:Oe},Ae),t("search",Oe,Ae.prefix)):b.value.location>-1&&m()}else b.value.location>-1&&m();p.value=fe,t("update:modelValue",fe),t("change",fe),(pe=(ne=l.value)==null?void 0:ne.onChange)==null||pe.call(ne)},P=fe=>{var Q,ne;p.value="",t("update:modelValue",""),t("change",""),(ne=(Q=l.value)==null?void 0:Q.onChange)==null||ne.call(Q),t("clear",fe)},w=J(!1),x=f(()=>w.value&&b.value.measuring&&R.value.length>0),N=()=>{Z.value=T2(s)},E=fe=>{w.value=fe},$=(fe,Q)=>{var ne,pe,be;const{value:Ae}=(ne=U.get(fe))!=null?ne:{},Oe=b.value.location,le=b.value.location+b.value.text.length;let Ie=p.value.slice(0,Oe),Fe=p.value.slice(le+1);Ie+=!Ie||Ie.endsWith(e.split)||Ie.endsWith(`
`)?"":e.split,Fe=(!Fe||Fe.startsWith(e.split)||Fe.startsWith(`