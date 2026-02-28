(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ti(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},Te=[],Dt=()=>{},Ba=()=>!1,Wn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ei=t=>t.startsWith("onUpdate:"),at=Object.assign,ni=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zo=Object.prototype.hasOwnProperty,Y=(t,e)=>zo.call(t,e),F=Array.isArray,Ie=t=>mn(t)==="[object Map]",Ua=t=>mn(t)==="[object Set]",ji=t=>mn(t)==="[object Date]",$=t=>typeof t=="function",it=t=>typeof t=="string",zt=t=>typeof t=="symbol",K=t=>t!==null&&typeof t=="object",Wa=t=>(K(t)||$(t))&&$(t.then)&&$(t.catch),Ya=Object.prototype.toString,mn=t=>Ya.call(t),Ho=t=>mn(t).slice(8,-1),Ka=t=>mn(t)==="[object Object]",Yn=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ve=ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Bo=/-\w/g,St=Kn(t=>t.replace(Bo,e=>e.slice(1).toUpperCase())),Uo=/\B([A-Z])/g,Se=Kn(t=>t.replace(Uo,"-$1").toLowerCase()),Vn=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=Kn(t=>t?`on${Vn(t)}`:""),le=(t,e)=>!Object.is(t,e),dr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Va=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fi;const qn=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gn(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=it(r)?qo(r):Gn(r);if(i)for(const a in i)e[a]=i[a]}return e}else if(it(t)||K(t))return t}const Yo=/;(?![^(]*\))/g,Ko=/:([^]+)/,Vo=/\/\*[^]*?\*\//g;function qo(t){const e={};return t.replace(Vo,"").split(Yo).forEach(n=>{if(n){const r=n.split(Ko);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function be(t){let e="";if(it(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=be(t[n]);r&&(e+=r+" ")}else if(K(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xo=ti(Go);function qa(t){return!!t||t===""}function Jo(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ri(t[r],e[r]);return n}function ri(t,e){if(t===e)return!0;let n=ji(t),r=ji(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=zt(t),r=zt(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Jo(t,e):!1;if(n=K(t),r=K(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const s in t){const o=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(o&&!l||!o&&l||!ri(t[s],e[s]))return!1}}return String(t)===String(e)}const Ga=t=>!!(t&&t.__v_isRef===!0),qe=t=>it(t)?t:t==null?"":F(t)||K(t)&&(t.toString===Ya||!$(t.toString))?Ga(t)?qe(t.value):JSON.stringify(t,Xa,2):String(t),Xa=(t,e)=>Ga(e)?Xa(t,e.value):Ie(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],a)=>(n[mr(r,a)+" =>"]=i,n),{})}:Ua(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mr(n))}:zt(e)?mr(e):K(e)&&!F(e)&&!Ka(e)?String(e):e,mr=(t,e="")=>{var n;return zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class Ja{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){this._on>0&&--this._on===0&&(ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Qa(t){return new Ja(t)}function Za(){return ot}function Qo(t,e=!1){ot&&ot.cleanups.push(t)}let J;const hr=new WeakSet;class ts{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&ot.active&&ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hr.has(this)&&(hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ns(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Di(this),rs(this);const e=J,n=Ot;J=this,Ot=!0;try{return this.fn()}finally{is(this),J=e,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)si(e);this.deps=this.depsTail=void 0,Di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Er(this)&&this.run()}get dirty(){return Er(this)}}let es=0,Ge,Xe;function ns(t,e=!1){if(t.flags|=8,e){t.next=Xe,Xe=t;return}t.next=Ge,Ge=t}function ii(){es++}function ai(){if(--es>0)return;if(Xe){let e=Xe;for(Xe=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ge;){let e=Ge;for(Ge=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rs(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function is(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),si(r),Zo(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function Er(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(as(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function as(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===on)||(t.globalVersion=on,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Er(t))))return;t.flags|=2;const e=t.dep,n=J,r=Ot;J=t,Ot=!0;try{rs(t);const i=t.fn(t._value);(e.version===0||le(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{J=n,Ot=r,is(t),t.flags&=-3}}function si(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let a=n.computed.deps;a;a=a.nextDep)si(a,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zo(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ot=!0;const ss=[];function Gt(){ss.push(Ot),Ot=!1}function Xt(){const t=ss.pop();Ot=t===void 0?!0:t}function Di(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=J;J=void 0;try{e()}finally{J=n}}}let on=0;class tl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!J||!Ot||J===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==J)n=this.activeLink=new tl(J,this),J.deps?(n.prevDep=J.depsTail,J.depsTail.nextDep=n,J.depsTail=n):J.deps=J.depsTail=n,os(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=J.depsTail,n.nextDep=void 0,J.depsTail.nextDep=n,J.depsTail=n,J.deps===n&&(J.deps=r)}return n}trigger(e){this.version++,on++,this.notify(e)}notify(e){ii();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ai()}}}function os(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)os(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const En=new WeakMap,ye=Symbol(""),Tr=Symbol(""),ln=Symbol("");function lt(t,e,n){if(Ot&&J){let r=En.get(t);r||En.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new oi),i.map=r,i.key=n),i.track()}}function Kt(t,e,n,r,i,a){const s=En.get(t);if(!s){on++;return}const o=l=>{l&&l.trigger()};if(ii(),e==="clear")s.forEach(o);else{const l=F(t),d=l&&Yn(n);if(l&&n==="length"){const f=Number(r);s.forEach((u,p)=>{(p==="length"||p===ln||!zt(p)&&p>=f)&&o(u)})}else switch((n!==void 0||s.has(void 0))&&o(s.get(n)),d&&o(s.get(ln)),e){case"add":l?d&&o(s.get("length")):(o(s.get(ye)),Ie(t)&&o(s.get(Tr)));break;case"delete":l||(o(s.get(ye)),Ie(t)&&o(s.get(Tr)));break;case"set":Ie(t)&&o(s.get(ye));break}}ai()}function el(t,e){const n=En.get(t);return n&&n.get(e)}function ke(t){const e=W(t);return e===t?e:(lt(e,"iterate",ln),yt(t)?e:e.map(Ct))}function Xn(t){return lt(t=W(t),"iterate",ln),t}function ae(t,e){return Jt(t)?Re($t(t)?Ct(e):e):Ct(e)}const nl={__proto__:null,[Symbol.iterator](){return pr(this,Symbol.iterator,t=>ae(this,t))},concat(...t){return ke(this).concat(...t.map(e=>F(e)?ke(e):e))},entries(){return pr(this,"entries",t=>(t[1]=ae(this,t[1]),t))},every(t,e){return Bt(this,"every",t,e,void 0,arguments)},filter(t,e){return Bt(this,"filter",t,e,n=>n.map(r=>ae(this,r)),arguments)},find(t,e){return Bt(this,"find",t,e,n=>ae(this,n),arguments)},findIndex(t,e){return Bt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bt(this,"findLast",t,e,n=>ae(this,n),arguments)},findLastIndex(t,e){return Bt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bt(this,"forEach",t,e,void 0,arguments)},includes(...t){return gr(this,"includes",t)},indexOf(...t){return gr(this,"indexOf",t)},join(t){return ke(this).join(t)},lastIndexOf(...t){return gr(this,"lastIndexOf",t)},map(t,e){return Bt(this,"map",t,e,void 0,arguments)},pop(){return Be(this,"pop")},push(...t){return Be(this,"push",t)},reduce(t,...e){return $i(this,"reduce",t,e)},reduceRight(t,...e){return $i(this,"reduceRight",t,e)},shift(){return Be(this,"shift")},some(t,e){return Bt(this,"some",t,e,void 0,arguments)},splice(...t){return Be(this,"splice",t)},toReversed(){return ke(this).toReversed()},toSorted(t){return ke(this).toSorted(t)},toSpliced(...t){return ke(this).toSpliced(...t)},unshift(...t){return Be(this,"unshift",t)},values(){return pr(this,"values",t=>ae(this,t))}};function pr(t,e,n){const r=Xn(t),i=r[e]();return r!==t&&!yt(t)&&(i._next=i.next,i.next=()=>{const a=i._next();return a.done||(a.value=n(a.value)),a}),i}const rl=Array.prototype;function Bt(t,e,n,r,i,a){const s=Xn(t),o=s!==t&&!yt(t),l=s[e];if(l!==rl[e]){const u=l.apply(t,a);return o?Ct(u):u}let d=n;s!==t&&(o?d=function(u,p){return n.call(this,ae(t,u),p,t)}:n.length>2&&(d=function(u,p){return n.call(this,u,p,t)}));const f=l.call(s,d,r);return o&&i?i(f):f}function $i(t,e,n,r){const i=Xn(t);let a=n;return i!==t&&(yt(t)?n.length>3&&(a=function(s,o,l){return n.call(this,s,o,l,t)}):a=function(s,o,l){return n.call(this,s,ae(t,o),l,t)}),i[e](a,...r)}function gr(t,e,n){const r=W(t);lt(r,"iterate",ln);const i=r[e](...n);return(i===-1||i===!1)&&Qn(n[0])?(n[0]=W(n[0]),r[e](...n)):i}function Be(t,e,n=[]){Gt(),ii();const r=W(t)[e].apply(t,n);return ai(),Xt(),r}const il=ti("__proto__,__v_isRef,__isVue"),ls=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zt));function al(t){zt(t)||(t=String(t));const e=W(this);return lt(e,"has",t),e.hasOwnProperty(t)}class fs{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?pl:ms:a?ds:us).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=F(e);if(!i){let l;if(s&&(l=nl[n]))return l;if(n==="hasOwnProperty")return al}const o=Reflect.get(e,n,tt(e)?e:r);if((zt(n)?ls.has(n):il(n))||(i||lt(e,"get",n),a))return o;if(tt(o)){const l=s&&Yn(n)?o:o.value;return i&&K(l)?Nr(l):l}return K(o)?i?Nr(o):Jn(o):o}}class cs extends fs{constructor(e=!1){super(!1,e)}set(e,n,r,i){let a=e[n];const s=F(e)&&Yn(n);if(!this._isShallow){const d=Jt(a);if(!yt(r)&&!Jt(r)&&(a=W(a),r=W(r)),!s&&tt(a)&&!tt(r))return d||(a.value=r),!0}const o=s?Number(n)<e.length:Y(e,n),l=Reflect.set(e,n,r,tt(e)?e:i);return e===W(i)&&(o?le(r,a)&&Kt(e,"set",n,r):Kt(e,"add",n,r)),l}deleteProperty(e,n){const r=Y(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Kt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!zt(n)||!ls.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",F(e)?"length":ye),Reflect.ownKeys(e)}}class sl extends fs{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ol=new cs,ll=new sl,fl=new cs(!0);const Ir=t=>t,_n=t=>Reflect.getPrototypeOf(t);function cl(t,e,n){return function(...r){const i=this.__v_raw,a=W(i),s=Ie(a),o=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,d=i[t](...r),f=n?Ir:e?Re:Ct;return!e&&lt(a,"iterate",l?Tr:ye),at(Object.create(d),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:o?[f(u[0]),f(u[1])]:f(u),done:p}}})}}function wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ul(t,e){const n={get(i){const a=this.__v_raw,s=W(a),o=W(i);t||(le(i,o)&&lt(s,"get",i),lt(s,"get",o));const{has:l}=_n(s),d=e?Ir:t?Re:Ct;if(l.call(s,i))return d(a.get(i));if(l.call(s,o))return d(a.get(o));a!==s&&a.get(i)},get size(){const i=this.__v_raw;return!t&&lt(W(i),"iterate",ye),i.size},has(i){const a=this.__v_raw,s=W(a),o=W(i);return t||(le(i,o)&&lt(s,"has",i),lt(s,"has",o)),i===o?a.has(i):a.has(i)||a.has(o)},forEach(i,a){const s=this,o=s.__v_raw,l=W(o),d=e?Ir:t?Re:Ct;return!t&&lt(l,"iterate",ye),o.forEach((f,u)=>i.call(a,d(f),d(u),s))}};return at(n,t?{add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear")}:{add(i){!e&&!yt(i)&&!Jt(i)&&(i=W(i));const a=W(this);return _n(a).has.call(a,i)||(a.add(i),Kt(a,"add",i,i)),this},set(i,a){!e&&!yt(a)&&!Jt(a)&&(a=W(a));const s=W(this),{has:o,get:l}=_n(s);let d=o.call(s,i);d||(i=W(i),d=o.call(s,i));const f=l.call(s,i);return s.set(i,a),d?le(a,f)&&Kt(s,"set",i,a):Kt(s,"add",i,a),this},delete(i){const a=W(this),{has:s,get:o}=_n(a);let l=s.call(a,i);l||(i=W(i),l=s.call(a,i)),o&&o.call(a,i);const d=a.delete(i);return l&&Kt(a,"delete",i,void 0),d},clear(){const i=W(this),a=i.size!==0,s=i.clear();return a&&Kt(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=cl(i,t,e)}),n}function li(t,e){const n=ul(t,e);return(r,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Y(n,i)&&i in r?n:r,i,a)}const dl={get:li(!1,!1)},ml={get:li(!1,!0)},hl={get:li(!0,!1)};const us=new WeakMap,ds=new WeakMap,ms=new WeakMap,pl=new WeakMap;function gl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vl(t){return t.__v_skip||!Object.isExtensible(t)?0:gl(Ho(t))}function Jn(t){return Jt(t)?t:fi(t,!1,ol,dl,us)}function bl(t){return fi(t,!1,fl,ml,ds)}function Nr(t){return fi(t,!0,ll,hl,ms)}function fi(t,e,n,r,i){if(!K(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=vl(t);if(a===0)return t;const s=i.get(t);if(s)return s;const o=new Proxy(t,a===2?r:n);return i.set(t,o),o}function $t(t){return Jt(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function Qn(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function ci(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&Va(t,"__v_skip",!0),t}const Ct=t=>K(t)?Jn(t):t,Re=t=>K(t)?Nr(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function Le(t){return yl(t,!1)}function yl(t,e){return tt(t)?t:new _l(t,e)}class _l{constructor(e,n){this.dep=new oi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:W(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||yt(e)||Jt(e);e=r?e:W(e),le(e,n)&&(this._rawValue=e,this._value=r?e:Ct(e),this.dep.trigger())}}function xt(t){return tt(t)?t.value:t}const wl={get:(t,e,n)=>e==="__v_raw"?t:xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function hs(t){return $t(t)?t:new Proxy(t,wl)}function xl(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=ps(t,n);return e}class Sl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=W(e);let i=!0,a=e;if(!F(e)||!Yn(String(n)))do i=!Qn(a)||yt(a);while(i&&(a=a.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=xt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&tt(this._raw[this._key])){const n=this._object[this._key];if(tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return el(this._raw,this._key)}}class kl{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Al(t,e,n){return tt(t)?t:$(t)?new kl(t):K(t)&&arguments.length>1?ps(t,e,n):Le(t)}function ps(t,e,n){return new Sl(t,e,n)}class Ol{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=on-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return ns(this,!0),!0}get value(){const e=this.dep.track();return as(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cl(t,e,n=!1){let r,i;return $(t)?r=t:(r=t.get,i=t.set),new Ol(r,i,n)}const xn={},Tn=new WeakMap;let ge;function Pl(t,e=!1,n=ge){if(n){let r=Tn.get(n);r||Tn.set(n,r=[]),r.push(t)}}function El(t,e,n=Q){const{immediate:r,deep:i,once:a,scheduler:s,augmentJob:o,call:l}=n,d=E=>i?E:yt(E)||i===!1||i===0?oe(E,1):oe(E);let f,u,p,g,T=!1,k=!1;if(tt(t)?(u=()=>t.value,T=yt(t)):$t(t)?(u=()=>d(t),T=!0):F(t)?(k=!0,T=t.some(E=>$t(E)||yt(E)),u=()=>t.map(E=>{if(tt(E))return E.value;if($t(E))return d(E);if($(E))return l?l(E,2):E()})):$(t)?e?u=l?()=>l(t,2):t:u=()=>{if(p){Gt();try{p()}finally{Xt()}}const E=ge;ge=f;try{return l?l(t,3,[g]):t(g)}finally{ge=E}}:u=Dt,e&&i){const E=u,L=i===!0?1/0:i;u=()=>oe(E(),L)}const N=Za(),w=()=>{f.stop(),N&&N.active&&ni(N.effects,f)};if(a&&e){const E=e;e=(...L)=>{E(...L),w()}}let _=k?new Array(t.length).fill(xn):xn;const I=E=>{if(!(!(f.flags&1)||!f.dirty&&!E))if(e){const L=f.run();if(i||T||(k?L.some((et,q)=>le(et,_[q])):le(L,_))){p&&p();const et=ge;ge=f;try{const q=[L,_===xn?void 0:k&&_[0]===xn?[]:_,g];_=L,l?l(e,3,q):e(...q)}finally{ge=et}}}else f.run()};return o&&o(I),f=new ts(u),f.scheduler=s?()=>s(I,!1):I,g=E=>Pl(E,!1,f),p=f.onStop=()=>{const E=Tn.get(f);if(E){if(l)l(E,4);else for(const L of E)L();Tn.delete(f)}},e?r?I(!0):_=f.run():s?s(I.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function oe(t,e=1/0,n){if(e<=0||!K(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,tt(t))oe(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)oe(t[r],e,n);else if(Ua(t)||Ie(t))t.forEach(r=>{oe(r,e,n)});else if(Ka(t)){for(const r in t)oe(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&oe(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hn(t,e,n,r){try{return r?t(...r):t()}catch(i){Zn(i,e,n)}}function Ht(t,e,n,r){if($(t)){const i=hn(t,e,n,r);return i&&Wa(i)&&i.catch(a=>{Zn(a,e,n)}),i}if(F(t)){const i=[];for(let a=0;a<t.length;a++)i.push(Ht(t[a],e,n,r));return i}}function Zn(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Q;if(e){let o=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,l,d)===!1)return}o=o.parent}if(a){Gt(),hn(a,null,10,[t,l,d]),Xt();return}}Tl(t,n,i,r,s)}function Tl(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const ut=[];let Rt=-1;const Ne=[];let se=null,Ce=0;const gs=Promise.resolve();let In=null;function vs(t){const e=In||gs;return t?e.then(this?t.bind(this):t):e}function Il(t){let e=Rt+1,n=ut.length;for(;e<n;){const r=e+n>>>1,i=ut[r],a=fn(i);a<t||a===t&&i.flags&2?e=r+1:n=r}return e}function ui(t){if(!(t.flags&1)){const e=fn(t),n=ut[ut.length-1];!n||!(t.flags&2)&&e>=fn(n)?ut.push(t):ut.splice(Il(e),0,t),t.flags|=1,bs()}}function bs(){In||(In=gs.then(_s))}function Nl(t){F(t)?Ne.push(...t):se&&t.id===-1?se.splice(Ce+1,0,t):t.flags&1||(Ne.push(t),t.flags|=1),bs()}function zi(t,e,n=Rt+1){for(;n<ut.length;n++){const r=ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ys(t){if(Ne.length){const e=[...new Set(Ne)].sort((n,r)=>fn(n)-fn(r));if(Ne.length=0,se){se.push(...e);return}for(se=e,Ce=0;Ce<se.length;Ce++){const n=se[Ce];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}se=null,Ce=0}}const fn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _s(t){try{for(Rt=0;Rt<ut.length;Rt++){const e=ut[Rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rt<ut.length;Rt++){const e=ut[Rt];e&&(e.flags&=-2)}Rt=-1,ut.length=0,ys(),In=null,(ut.length||Ne.length)&&_s()}}let kt=null,ws=null;function Nn(t){const e=kt;return kt=t,ws=t&&t.type.__scopeId||null,e}function Ml(t,e=kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ln(-1);const a=Nn(e);let s;try{s=t(...i)}finally{Nn(a),r._d&&Ln(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function he(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let l=o.dir[r];l&&(Gt(),Ht(l,n,8,[t.el,o,t,e]),Xt())}}function Rl(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=qs();if(r||_e){let i=_e?_e._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function Ll(){return!!(qs()||_e)}const jl=Symbol.for("v-scx"),Fl=()=>Je(jl);function Qe(t,e,n){return xs(t,e,n)}function xs(t,e,n=Q){const{immediate:r,deep:i,flush:a,once:s}=n,o=at({},n),l=e&&r||!e&&a!=="post";let d;if(un){if(a==="sync"){const g=Fl();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Dt,g.resume=Dt,g.pause=Dt,g}}const f=ft;o.call=(g,T,k)=>Ht(g,f,T,k);let u=!1;a==="post"?o.scheduler=g=>{pt(g,f&&f.suspense)}:a!=="sync"&&(u=!0,o.scheduler=(g,T)=>{T?g():ui(g)}),o.augmentJob=g=>{e&&(g.flags|=4),u&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=El(t,e,o);return un&&(d?d.push(p):l&&p()),p}function Dl(t,e,n){const r=this.proxy,i=it(t)?t.includes(".")?Ss(r,t):()=>r[t]:t.bind(r,r);let a;$(e)?a=e:(a=e.handler,n=e);const s=pn(this),o=xs(i,a.bind(r),n);return s(),o}function Ss(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const $l=Symbol("_vte"),zl=t=>t.__isTeleport,Hl=Symbol("_leaveCb");function di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tr(t,e){return $(t)?at({name:t.name},e,{setup:t}):t}function ks(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hi(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Mn=new WeakMap;function Ze(t,e,n,r,i=!1){if(F(t)){t.forEach((k,N)=>Ze(k,e&&(F(e)?e[N]:e),n,r,i));return}if(tn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ze(t,e,n,r.component.subTree);return}const a=r.shapeFlag&4?gi(r.component):r.el,s=i?null:a,{i:o,r:l}=t,d=e&&e.r,f=o.refs===Q?o.refs={}:o.refs,u=o.setupState,p=W(u),g=u===Q?Ba:k=>Hi(f,k)?!1:Y(p,k),T=(k,N)=>!(N&&Hi(f,N));if(d!=null&&d!==l){if(Bi(e),it(d))f[d]=null,g(d)&&(u[d]=null);else if(tt(d)){const k=e;T(d,k.k)&&(d.value=null),k.k&&(f[k.k]=null)}}if($(l))hn(l,o,12,[s,f]);else{const k=it(l),N=tt(l);if(k||N){const w=()=>{if(t.f){const _=k?g(l)?u[l]:f[l]:T()||!t.k?l.value:f[t.k];if(i)F(_)&&ni(_,a);else if(F(_))_.includes(a)||_.push(a);else if(k)f[l]=[a],g(l)&&(u[l]=f[l]);else{const I=[a];T(l,t.k)&&(l.value=I),t.k&&(f[t.k]=I)}}else k?(f[l]=s,g(l)&&(u[l]=s)):N&&(T(l,t.k)&&(l.value=s),t.k&&(f[t.k]=s))};if(s){const _=()=>{w(),Mn.delete(t)};_.id=-1,Mn.set(t,_),pt(_,n)}else Bi(t),w()}}}function Bi(t){const e=Mn.get(t);e&&(e.flags|=8,Mn.delete(t))}qn().requestIdleCallback;qn().cancelIdleCallback;const tn=t=>!!t.type.__asyncLoader,As=t=>t.type.__isKeepAlive;function Bl(t,e){Os(t,"a",e)}function Ul(t,e){Os(t,"da",e)}function Os(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(er(e,r,n),n){let i=n.parent;for(;i&&i.parent;)As(i.parent.vnode)&&Wl(r,e,n,i),i=i.parent}}function Wl(t,e,n,r){const i=er(e,t,r,!0);Cs(()=>{ni(r[e],i)},n)}function er(t,e,n=ft,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{Gt();const o=pn(n),l=Ht(e,n,t,s);return o(),Xt(),l});return r?i.unshift(a):i.push(a),a}}const ee=t=>(e,n=ft)=>{(!un||t==="sp")&&er(t,(...r)=>e(...r),n)},Yl=ee("bm"),Kl=ee("m"),Vl=ee("bu"),ql=ee("u"),Gl=ee("bum"),Cs=ee("um"),Xl=ee("sp"),Jl=ee("rtg"),Ql=ee("rtc");function Zl(t,e=ft){er("ec",t,e)}const tf="components";function ef(t,e){return rf(tf,t,!0,e)||t}const nf=Symbol.for("v-ndc");function rf(t,e,n=!0,r=!1){const i=kt||ft;if(i){const a=i.type;{const o=Uf(a,!1);if(o&&(o===e||o===St(e)||o===Vn(St(e))))return a}const s=Ui(i[t]||a[t],e)||Ui(i.appContext[t],e);return!s&&r?a:s}}function Ui(t,e){return t&&(t[e]||t[St(e)]||t[Vn(St(e))])}function af(t,e,n,r){let i;const a=n,s=F(t);if(s||it(t)){const o=s&&$t(t);let l=!1,d=!1;o&&(l=!yt(t),d=Jt(t),t=Xn(t)),i=new Array(t.length);for(let f=0,u=t.length;f<u;f++)i[f]=e(l?d?Re(Ct(t[f])):Ct(t[f]):t[f],f,void 0,a)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,a)}else if(K(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,a));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const f=o[l];i[l]=e(t[f],f,l,a)}}else i=[];return i}const Mr=t=>t?Gs(t)?gi(t):Mr(t.parent):null,en=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Es(t),$forceUpdate:t=>t.f||(t.f=()=>{ui(t.update)}),$nextTick:t=>t.n||(t.n=vs.bind(t.proxy)),$watch:t=>Dl.bind(t)}),vr=(t,e)=>t!==Q&&!t.__isScriptSetup&&Y(t,e),sf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:l}=t;if(e[0]!=="$"){const p=s[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(vr(r,e))return s[e]=1,r[e];if(i!==Q&&Y(i,e))return s[e]=2,i[e];if(Y(a,e))return s[e]=3,a[e];if(n!==Q&&Y(n,e))return s[e]=4,n[e];Rr&&(s[e]=0)}}const d=en[e];let f,u;if(d)return e==="$attrs"&&lt(t.attrs,"get",""),d(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==Q&&Y(n,e))return s[e]=4,n[e];if(u=l.config.globalProperties,Y(u,e))return u[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:a}=t;return vr(i,e)?(i[e]=n,!0):r!==Q&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:a,type:s}},o){let l;return!!(n[o]||t!==Q&&o[0]!=="$"&&Y(t,o)||vr(e,o)||Y(a,o)||Y(r,o)||Y(en,o)||Y(i.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rr=!0;function of(t){const e=Es(t),n=t.proxy,r=t.ctx;Rr=!1,e.beforeCreate&&Yi(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:s,watch:o,provide:l,inject:d,created:f,beforeMount:u,mounted:p,beforeUpdate:g,updated:T,activated:k,deactivated:N,beforeDestroy:w,beforeUnmount:_,destroyed:I,unmounted:E,render:L,renderTracked:et,renderTriggered:q,errorCaptured:z,serverPrefetch:H,expose:rt,inheritAttrs:wt,components:Pt,directives:re,filters:De}=e;if(d&&lf(d,r,null),s)for(const B in s){const G=s[B];$(G)&&(r[B]=G.bind(n))}if(i){const B=i.call(n,n);K(B)&&(t.data=Jn(B))}if(Rr=!0,a)for(const B in a){const G=a[B],de=$(G)?G.bind(n,n):$(G.get)?G.get.bind(n,n):Dt,bn=!$(G)&&$(G.set)?G.set.bind(n):Dt,me=Yt({get:de,set:bn});Object.defineProperty(r,B,{enumerable:!0,configurable:!0,get:()=>me.value,set:Et=>me.value=Et})}if(o)for(const B in o)Ps(o[B],r,n,B);if(l){const B=$(l)?l.call(n):l;Reflect.ownKeys(B).forEach(G=>{Rl(G,B[G])})}f&&Yi(f,t,"c");function nt(B,G){F(G)?G.forEach(de=>B(de.bind(n))):G&&B(G.bind(n))}if(nt(Yl,u),nt(Kl,p),nt(Vl,g),nt(ql,T),nt(Bl,k),nt(Ul,N),nt(Zl,z),nt(Ql,et),nt(Jl,q),nt(Gl,_),nt(Cs,E),nt(Xl,H),F(rt))if(rt.length){const B=t.exposed||(t.exposed={});rt.forEach(G=>{Object.defineProperty(B,G,{get:()=>n[G],set:de=>n[G]=de,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===Dt&&(t.render=L),wt!=null&&(t.inheritAttrs=wt),Pt&&(t.components=Pt),re&&(t.directives=re),H&&ks(t)}function lf(t,e,n=Dt){F(t)&&(t=Lr(t));for(const r in t){const i=t[r];let a;K(i)?"default"in i?a=Je(i.from||r,i.default,!0):a=Je(i.from||r):a=Je(i),tt(a)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):e[r]=a}}function Yi(t,e,n){Ht(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ps(t,e,n,r){let i=r.includes(".")?Ss(n,r):()=>n[r];if(it(t)){const a=e[t];$(a)&&Qe(i,a)}else if($(t))Qe(i,t.bind(n));else if(K(t))if(F(t))t.forEach(a=>Ps(a,e,n,r));else{const a=$(t.handler)?t.handler.bind(n):e[t.handler];$(a)&&Qe(i,a,t)}}function Es(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=t.appContext,o=a.get(e);let l;return o?l=o:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(d=>Rn(l,d,s,!0)),Rn(l,e,s)),K(e)&&a.set(e,l),l}function Rn(t,e,n,r=!1){const{mixins:i,extends:a}=e;a&&Rn(t,a,n,!0),i&&i.forEach(s=>Rn(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const o=ff[s]||n&&n[s];t[s]=o?o(t[s],e[s]):e[s]}return t}const ff={data:Ki,props:Vi,emits:Vi,methods:We,computed:We,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:We,directives:We,watch:uf,provide:Ki,inject:cf};function Ki(t,e){return e?t?function(){return at($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function cf(t,e){return We(Lr(t),Lr(e))}function Lr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function We(t,e){return t?at(Object.create(null),t,e):e}function Vi(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:at(Object.create(null),Wi(t),Wi(e??{})):e}function uf(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function Ts(){return{app:null,config:{isNativeTag:Ba,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let df=0;function mf(t,e){return function(r,i=null){$(r)||(r=at({},r)),i!=null&&!K(i)&&(i=null);const a=Ts(),s=new WeakSet,o=[];let l=!1;const d=a.app={_uid:df++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Kf,get config(){return a.config},set config(f){},use(f,...u){return s.has(f)||(f&&$(f.install)?(s.add(f),f.install(d,...u)):$(f)&&(s.add(f),f(d,...u))),d},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),d},component(f,u){return u?(a.components[f]=u,d):a.components[f]},directive(f,u){return u?(a.directives[f]=u,d):a.directives[f]},mount(f,u,p){if(!l){const g=d._ceVNode||dt(r,i);return g.appContext=a,p===!0?p="svg":p===!1&&(p=void 0),t(g,f,p),l=!0,d._container=f,f.__vue_app__=d,gi(g.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Ht(o,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(f,u){return a.provides[f]=u,d},runWithContext(f){const u=_e;_e=d;try{return f()}finally{_e=u}}};return d}}let _e=null;const hf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${Se(e)}Modifiers`];function pf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let i=n;const a=e.startsWith("update:"),s=a&&hf(r,e.slice(7));s&&(s.trim&&(i=n.map(f=>it(f)?f.trim():f)),s.number&&(i=n.map(Wo)));let o,l=r[o=ur(e)]||r[o=ur(St(e))];!l&&a&&(l=r[o=ur(Se(e))]),l&&Ht(l,t,6,i);const d=r[o+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Ht(d,t,6,i)}}const gf=new WeakMap;function Is(t,e,n=!1){const r=n?gf:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const a=t.emits;let s={},o=!1;if(!$(t)){const l=d=>{const f=Is(d,e,!0);f&&(o=!0,at(s,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!o?(K(t)&&r.set(t,null),null):(F(a)?a.forEach(l=>s[l]=null):at(s,a),K(t)&&r.set(t,s),s)}function nr(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Se(e))||Y(t,e))}function qi(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:o,emit:l,render:d,renderCache:f,props:u,data:p,setupState:g,ctx:T,inheritAttrs:k}=t,N=Nn(t);let w,_;try{if(n.shapeFlag&4){const E=i||r,L=E;w=jt(d.call(L,E,f,u,g,p,T)),_=o}else{const E=e;w=jt(E.length>1?E(u,{attrs:o,slots:s,emit:l}):E(u,null)),_=e.props?o:vf(o)}}catch(E){nn.length=0,Zn(E,t,1),w=dt(fe)}let I=w;if(_&&k!==!1){const E=Object.keys(_),{shapeFlag:L}=I;E.length&&L&7&&(a&&E.some(ei)&&(_=bf(_,a)),I=je(I,_,!1,!0))}return n.dirs&&(I=je(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&di(I,n.transition),w=I,Nn(N),w}const vf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},bf=(t,e)=>{const n={};for(const r in t)(!ei(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yf(t,e,n){const{props:r,children:i,component:a}=t,{props:s,children:o,patchFlag:l}=e,d=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Gi(r,s,d):!!s;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(Ns(s,r,p)&&!nr(d,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Gi(r,s,d):!0:!!s;return!1}function Gi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(Ns(e,t,a)&&!nr(n,a))return!0}return!1}function Ns(t,e,n){const r=t[n],i=e[n];return n==="style"&&K(r)&&K(i)?!ri(r,i):r!==i}function _f({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ms={},Rs=()=>Object.create(Ms),Ls=t=>Object.getPrototypeOf(t)===Ms;function wf(t,e,n,r=!1){const i={},a=Rs();t.propsDefaults=Object.create(null),js(t,e,i,a);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:bl(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function xf(t,e,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=t,o=W(i),[l]=t.propsOptions;let d=!1;if((r||s>0)&&!(s&16)){if(s&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(nr(t.emitsOptions,p))continue;const g=e[p];if(l)if(Y(a,p))g!==a[p]&&(a[p]=g,d=!0);else{const T=St(p);i[T]=jr(l,o,T,g,t,!1)}else g!==a[p]&&(a[p]=g,d=!0)}}}else{js(t,e,i,a)&&(d=!0);let f;for(const u in o)(!e||!Y(e,u)&&((f=Se(u))===u||!Y(e,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(i[u]=jr(l,o,u,void 0,t,!0)):delete i[u]);if(a!==o)for(const u in a)(!e||!Y(e,u))&&(delete a[u],d=!0)}d&&Kt(t.attrs,"set","")}function js(t,e,n,r){const[i,a]=t.propsOptions;let s=!1,o;if(e)for(let l in e){if(Ve(l))continue;const d=e[l];let f;i&&Y(i,f=St(l))?!a||!a.includes(f)?n[f]=d:(o||(o={}))[f]=d:nr(t.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,s=!0)}if(a){const l=W(n),d=o||Q;for(let f=0;f<a.length;f++){const u=a[f];n[u]=jr(i,l,u,d[u],t,!Y(d,u))}}return s}function jr(t,e,n,r,i,a){const s=t[n];if(s!=null){const o=Y(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&$(l)){const{propsDefaults:d}=i;if(n in d)r=d[n];else{const f=pn(i);r=d[n]=l.call(null,e),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===Se(n))&&(r=!0))}return r}const Sf=new WeakMap;function Fs(t,e,n=!1){const r=n?Sf:e.propsCache,i=r.get(t);if(i)return i;const a=t.props,s={},o=[];let l=!1;if(!$(t)){const f=u=>{l=!0;const[p,g]=Fs(u,e,!0);at(s,p),g&&o.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!a&&!l)return K(t)&&r.set(t,Te),Te;if(F(a))for(let f=0;f<a.length;f++){const u=St(a[f]);Xi(u)&&(s[u]=Q)}else if(a)for(const f in a){const u=St(f);if(Xi(u)){const p=a[f],g=s[u]=F(p)||$(p)?{type:p}:at({},p),T=g.type;let k=!1,N=!0;if(F(T))for(let w=0;w<T.length;++w){const _=T[w],I=$(_)&&_.name;if(I==="Boolean"){k=!0;break}else I==="String"&&(N=!1)}else k=$(T)&&T.name==="Boolean";g[0]=k,g[1]=N,(k||Y(g,"default"))&&o.push(u)}}const d=[s,o];return K(t)&&r.set(t,d),d}function Xi(t){return t[0]!=="$"&&!Ve(t)}const mi=t=>t==="_"||t==="_ctx"||t==="$stable",hi=t=>F(t)?t.map(jt):[jt(t)],kf=(t,e,n)=>{if(e._n)return e;const r=Ml((...i)=>hi(e(...i)),n);return r._c=!1,r},Ds=(t,e,n)=>{const r=t._ctx;for(const i in t){if(mi(i))continue;const a=t[i];if($(a))e[i]=kf(i,a,r);else if(a!=null){const s=hi(a);e[i]=()=>s}}},$s=(t,e)=>{const n=hi(e);t.slots.default=()=>n},zs=(t,e,n)=>{for(const r in e)(n||!mi(r))&&(t[r]=e[r])},Af=(t,e,n)=>{const r=t.slots=Rs();if(t.vnode.shapeFlag&32){const i=e._;i?(zs(r,e,n),n&&Va(r,"_",i,!0)):Ds(e,r)}else e&&$s(t,e)},Of=(t,e,n)=>{const{vnode:r,slots:i}=t;let a=!0,s=Q;if(r.shapeFlag&32){const o=e._;o?n&&o===1?a=!1:zs(i,e,n):(a=!e.$stable,Ds(e,i)),s=e}else e&&($s(t,e),s={default:1});if(a)for(const o in i)!mi(o)&&s[o]==null&&delete i[o]},pt=If;function Cf(t){return Pf(t)}function Pf(t,e){const n=qn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:l,setText:d,setElementText:f,parentNode:u,nextSibling:p,setScopeId:g=Dt,insertStaticContent:T}=t,k=(c,m,h,x=null,v=null,b=null,O=void 0,A=null,S=!!m.dynamicChildren)=>{if(c===m)return;c&&!Ue(c,m)&&(x=yn(c),Et(c,v,b,!0),c=null),m.patchFlag===-2&&(S=!1,m.dynamicChildren=null);const{type:y,ref:j,shapeFlag:C}=m;switch(y){case rr:N(c,m,h,x);break;case fe:w(c,m,h,x);break;case yr:c==null&&_(m,h,x,O);break;case Lt:Pt(c,m,h,x,v,b,O,A,S);break;default:C&1?L(c,m,h,x,v,b,O,A,S):C&6?re(c,m,h,x,v,b,O,A,S):(C&64||C&128)&&y.process(c,m,h,x,v,b,O,A,S,ze)}j!=null&&v?Ze(j,c&&c.ref,b,m||c,!m):j==null&&c&&c.ref!=null&&Ze(c.ref,null,b,c,!0)},N=(c,m,h,x)=>{if(c==null)r(m.el=o(m.children),h,x);else{const v=m.el=c.el;m.children!==c.children&&d(v,m.children)}},w=(c,m,h,x)=>{c==null?r(m.el=l(m.children||""),h,x):m.el=c.el},_=(c,m,h,x)=>{[c.el,c.anchor]=T(c.children,m,h,x,c.el,c.anchor)},I=({el:c,anchor:m},h,x)=>{let v;for(;c&&c!==m;)v=p(c),r(c,h,x),c=v;r(m,h,x)},E=({el:c,anchor:m})=>{let h;for(;c&&c!==m;)h=p(c),i(c),c=h;i(m)},L=(c,m,h,x,v,b,O,A,S)=>{if(m.type==="svg"?O="svg":m.type==="math"&&(O="mathml"),c==null)et(m,h,x,v,b,O,A,S);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),H(c,m,v,b,O,A,S)}finally{y&&y._endPatch()}}},et=(c,m,h,x,v,b,O,A)=>{let S,y;const{props:j,shapeFlag:C,transition:M,dirs:D}=c;if(S=c.el=s(c.type,b,j&&j.is,j),C&8?f(S,c.children):C&16&&z(c.children,S,null,x,v,br(c,b),O,A),D&&he(c,null,x,"created"),q(S,c,c.scopeId,O,x),j){for(const X in j)X!=="value"&&!Ve(X)&&a(S,X,null,j[X],b,x);"value"in j&&a(S,"value",null,j.value,b),(y=j.onVnodeBeforeMount)&&Mt(y,x,c)}D&&he(c,null,x,"beforeMount");const U=Ef(v,M);U&&M.beforeEnter(S),r(S,m,h),((y=j&&j.onVnodeMounted)||U||D)&&pt(()=>{y&&Mt(y,x,c),U&&M.enter(S),D&&he(c,null,x,"mounted")},v)},q=(c,m,h,x,v)=>{if(h&&g(c,h),x)for(let b=0;b<x.length;b++)g(c,x[b]);if(v){let b=v.subTree;if(m===b||Ws(b.type)&&(b.ssContent===m||b.ssFallback===m)){const O=v.vnode;q(c,O,O.scopeId,O.slotScopeIds,v.parent)}}},z=(c,m,h,x,v,b,O,A,S=0)=>{for(let y=S;y<c.length;y++){const j=c[y]=A?Wt(c[y]):jt(c[y]);k(null,j,m,h,x,v,b,O,A)}},H=(c,m,h,x,v,b,O)=>{const A=m.el=c.el;let{patchFlag:S,dynamicChildren:y,dirs:j}=m;S|=c.patchFlag&16;const C=c.props||Q,M=m.props||Q;let D;if(h&&pe(h,!1),(D=M.onVnodeBeforeUpdate)&&Mt(D,h,m,c),j&&he(m,c,h,"beforeUpdate"),h&&pe(h,!0),(C.innerHTML&&M.innerHTML==null||C.textContent&&M.textContent==null)&&f(A,""),y?rt(c.dynamicChildren,y,A,h,x,br(m,v),b):O||G(c,m,A,null,h,x,br(m,v),b,!1),S>0){if(S&16)wt(A,C,M,h,v);else if(S&2&&C.class!==M.class&&a(A,"class",null,M.class,v),S&4&&a(A,"style",C.style,M.style,v),S&8){const U=m.dynamicProps;for(let X=0;X<U.length;X++){const V=U[X],mt=C[V],ht=M[V];(ht!==mt||V==="value")&&a(A,V,mt,ht,v,h)}}S&1&&c.children!==m.children&&f(A,m.children)}else!O&&y==null&&wt(A,C,M,h,v);((D=M.onVnodeUpdated)||j)&&pt(()=>{D&&Mt(D,h,m,c),j&&he(m,c,h,"updated")},x)},rt=(c,m,h,x,v,b,O)=>{for(let A=0;A<m.length;A++){const S=c[A],y=m[A],j=S.el&&(S.type===Lt||!Ue(S,y)||S.shapeFlag&198)?u(S.el):h;k(S,y,j,null,x,v,b,O,!0)}},wt=(c,m,h,x,v)=>{if(m!==h){if(m!==Q)for(const b in m)!Ve(b)&&!(b in h)&&a(c,b,m[b],null,v,x);for(const b in h){if(Ve(b))continue;const O=h[b],A=m[b];O!==A&&b!=="value"&&a(c,b,A,O,v,x)}"value"in h&&a(c,"value",m.value,h.value,v)}},Pt=(c,m,h,x,v,b,O,A,S)=>{const y=m.el=c?c.el:o(""),j=m.anchor=c?c.anchor:o("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:D}=m;D&&(A=A?A.concat(D):D),c==null?(r(y,h,x),r(j,h,x),z(m.children||[],h,j,v,b,O,A,S)):C>0&&C&64&&M&&c.dynamicChildren&&c.dynamicChildren.length===M.length?(rt(c.dynamicChildren,M,h,v,b,O,A),(m.key!=null||v&&m===v.subTree)&&Hs(c,m,!0)):G(c,m,h,j,v,b,O,A,S)},re=(c,m,h,x,v,b,O,A,S)=>{m.slotScopeIds=A,c==null?m.shapeFlag&512?v.ctx.activate(m,h,x,O,S):De(m,h,x,v,b,O,S):vn(c,m,S)},De=(c,m,h,x,v,b,O)=>{const A=c.component=Df(c,x,v);if(As(c)&&(A.ctx.renderer=ze),$f(A,!1,O),A.asyncDep){if(v&&v.registerDep(A,nt,O),!c.el){const S=A.subTree=dt(fe);w(null,S,m,h),c.placeholder=S.el}}else nt(A,c,m,h,v,b,O)},vn=(c,m,h)=>{const x=m.component=c.component;if(yf(c,m,h))if(x.asyncDep&&!x.asyncResolved){B(x,m,h);return}else x.next=m,x.update();else m.el=c.el,x.vnode=m},nt=(c,m,h,x,v,b,O)=>{const A=()=>{if(c.isMounted){let{next:C,bu:M,u:D,parent:U,vnode:X}=c;{const It=Bs(c);if(It){C&&(C.el=X.el,B(c,C,O)),It.asyncDep.then(()=>{pt(()=>{c.isUnmounted||y()},v)});return}}let V=C,mt;pe(c,!1),C?(C.el=X.el,B(c,C,O)):C=X,M&&dr(M),(mt=C.props&&C.props.onVnodeBeforeUpdate)&&Mt(mt,U,C,X),pe(c,!0);const ht=qi(c),Tt=c.subTree;c.subTree=ht,k(Tt,ht,u(Tt.el),yn(Tt),c,v,b),C.el=ht.el,V===null&&_f(c,ht.el),D&&pt(D,v),(mt=C.props&&C.props.onVnodeUpdated)&&pt(()=>Mt(mt,U,C,X),v)}else{let C;const{el:M,props:D}=m,{bm:U,m:X,parent:V,root:mt,type:ht}=c,Tt=tn(m);pe(c,!1),U&&dr(U),!Tt&&(C=D&&D.onVnodeBeforeMount)&&Mt(C,V,m),pe(c,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(ht);const It=c.subTree=qi(c);k(null,It,h,x,c,v,b),m.el=It.el}if(X&&pt(X,v),!Tt&&(C=D&&D.onVnodeMounted)){const It=m;pt(()=>Mt(C,V,It),v)}(m.shapeFlag&256||V&&tn(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&pt(c.a,v),c.isMounted=!0,m=h=x=null}};c.scope.on();const S=c.effect=new ts(A);c.scope.off();const y=c.update=S.run.bind(S),j=c.job=S.runIfDirty.bind(S);j.i=c,j.id=c.uid,S.scheduler=()=>ui(j),pe(c,!0),y()},B=(c,m,h)=>{m.component=c;const x=c.vnode.props;c.vnode=m,c.next=null,xf(c,m.props,x,h),Of(c,m.children,h),Gt(),zi(c),Xt()},G=(c,m,h,x,v,b,O,A,S=!1)=>{const y=c&&c.children,j=c?c.shapeFlag:0,C=m.children,{patchFlag:M,shapeFlag:D}=m;if(M>0){if(M&128){bn(y,C,h,x,v,b,O,A,S);return}else if(M&256){de(y,C,h,x,v,b,O,A,S);return}}D&8?(j&16&&$e(y,v,b),C!==y&&f(h,C)):j&16?D&16?bn(y,C,h,x,v,b,O,A,S):$e(y,v,b,!0):(j&8&&f(h,""),D&16&&z(C,h,x,v,b,O,A,S))},de=(c,m,h,x,v,b,O,A,S)=>{c=c||Te,m=m||Te;const y=c.length,j=m.length,C=Math.min(y,j);let M;for(M=0;M<C;M++){const D=m[M]=S?Wt(m[M]):jt(m[M]);k(c[M],D,h,null,v,b,O,A,S)}y>j?$e(c,v,b,!0,!1,C):z(m,h,x,v,b,O,A,S,C)},bn=(c,m,h,x,v,b,O,A,S)=>{let y=0;const j=m.length;let C=c.length-1,M=j-1;for(;y<=C&&y<=M;){const D=c[y],U=m[y]=S?Wt(m[y]):jt(m[y]);if(Ue(D,U))k(D,U,h,null,v,b,O,A,S);else break;y++}for(;y<=C&&y<=M;){const D=c[C],U=m[M]=S?Wt(m[M]):jt(m[M]);if(Ue(D,U))k(D,U,h,null,v,b,O,A,S);else break;C--,M--}if(y>C){if(y<=M){const D=M+1,U=D<j?m[D].el:x;for(;y<=M;)k(null,m[y]=S?Wt(m[y]):jt(m[y]),h,U,v,b,O,A,S),y++}}else if(y>M)for(;y<=C;)Et(c[y],v,b,!0),y++;else{const D=y,U=y,X=new Map;for(y=U;y<=M;y++){const gt=m[y]=S?Wt(m[y]):jt(m[y]);gt.key!=null&&X.set(gt.key,y)}let V,mt=0;const ht=M-U+1;let Tt=!1,It=0;const He=new Array(ht);for(y=0;y<ht;y++)He[y]=0;for(y=D;y<=C;y++){const gt=c[y];if(mt>=ht){Et(gt,v,b,!0);continue}let Nt;if(gt.key!=null)Nt=X.get(gt.key);else for(V=U;V<=M;V++)if(He[V-U]===0&&Ue(gt,m[V])){Nt=V;break}Nt===void 0?Et(gt,v,b,!0):(He[Nt-U]=y+1,Nt>=It?It=Nt:Tt=!0,k(gt,m[Nt],h,null,v,b,O,A,S),mt++)}const Mi=Tt?Tf(He):Te;for(V=Mi.length-1,y=ht-1;y>=0;y--){const gt=U+y,Nt=m[gt],Ri=m[gt+1],Li=gt+1<j?Ri.el||Us(Ri):x;He[y]===0?k(null,Nt,h,Li,v,b,O,A,S):Tt&&(V<0||y!==Mi[V]?me(Nt,h,Li,2):V--)}}},me=(c,m,h,x,v=null)=>{const{el:b,type:O,transition:A,children:S,shapeFlag:y}=c;if(y&6){me(c.component.subTree,m,h,x);return}if(y&128){c.suspense.move(m,h,x);return}if(y&64){O.move(c,m,h,ze);return}if(O===Lt){r(b,m,h);for(let C=0;C<S.length;C++)me(S[C],m,h,x);r(c.anchor,m,h);return}if(O===yr){I(c,m,h);return}if(x!==2&&y&1&&A)if(x===0)A.beforeEnter(b),r(b,m,h),pt(()=>A.enter(b),v);else{const{leave:C,delayLeave:M,afterLeave:D}=A,U=()=>{c.ctx.isUnmounted?i(b):r(b,m,h)},X=()=>{b._isLeaving&&b[Hl](!0),C(b,()=>{U(),D&&D()})};M?M(b,U,X):X()}else r(b,m,h)},Et=(c,m,h,x=!1,v=!1)=>{const{type:b,props:O,ref:A,children:S,dynamicChildren:y,shapeFlag:j,patchFlag:C,dirs:M,cacheIndex:D}=c;if(C===-2&&(v=!1),A!=null&&(Gt(),Ze(A,null,h,c,!0),Xt()),D!=null&&(m.renderCache[D]=void 0),j&256){m.ctx.deactivate(c);return}const U=j&1&&M,X=!tn(c);let V;if(X&&(V=O&&O.onVnodeBeforeUnmount)&&Mt(V,m,c),j&6)$o(c.component,h,x);else{if(j&128){c.suspense.unmount(h,x);return}U&&he(c,null,m,"beforeUnmount"),j&64?c.type.remove(c,m,h,ze,x):y&&!y.hasOnce&&(b!==Lt||C>0&&C&64)?$e(y,m,h,!1,!0):(b===Lt&&C&384||!v&&j&16)&&$e(S,m,h),x&&Ii(c)}(X&&(V=O&&O.onVnodeUnmounted)||U)&&pt(()=>{V&&Mt(V,m,c),U&&he(c,null,m,"unmounted")},h)},Ii=c=>{const{type:m,el:h,anchor:x,transition:v}=c;if(m===Lt){Do(h,x);return}if(m===yr){E(c);return}const b=()=>{i(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:A}=v,S=()=>O(h,b);A?A(c.el,b,S):S()}else b()},Do=(c,m)=>{let h;for(;c!==m;)h=p(c),i(c),c=h;i(m)},$o=(c,m,h)=>{const{bum:x,scope:v,job:b,subTree:O,um:A,m:S,a:y}=c;Ji(S),Ji(y),x&&dr(x),v.stop(),b&&(b.flags|=8,Et(O,c,m,h)),A&&pt(A,m),pt(()=>{c.isUnmounted=!0},m)},$e=(c,m,h,x=!1,v=!1,b=0)=>{for(let O=b;O<c.length;O++)Et(c[O],m,h,x,v)},yn=c=>{if(c.shapeFlag&6)return yn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const m=p(c.anchor||c.el),h=m&&m[$l];return h?p(h):m};let cr=!1;const Ni=(c,m,h)=>{let x;c==null?m._vnode&&(Et(m._vnode,null,null,!0),x=m._vnode.component):k(m._vnode||null,c,m,null,null,null,h),m._vnode=c,cr||(cr=!0,zi(x),ys(),cr=!1)},ze={p:k,um:Et,m:me,r:Ii,mt:De,mc:z,pc:G,pbc:rt,n:yn,o:t};return{render:Ni,hydrate:void 0,createApp:mf(Ni)}}function br({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pe({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ef(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hs(t,e,n=!1){const r=t.children,i=e.children;if(F(r)&&F(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=Wt(i[a]),o.el=s.el),!n&&o.patchFlag!==-2&&Hs(s,o)),o.type===rr&&(o.patchFlag===-1&&(o=i[a]=Wt(o)),o.el=s.el),o.type===fe&&!o.el&&(o.el=s.el)}}function Tf(t){const e=t.slice(),n=[0];let r,i,a,s,o;const l=t.length;for(r=0;r<l;r++){const d=t[r];if(d!==0){if(i=n[n.length-1],t[i]<d){e[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,t[n[o]]<d?a=o+1:s=o;d<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=e[s];return n}function Bs(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bs(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Us(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Us(e.subTree):null}const Ws=t=>t.__isSuspense;function If(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Nl(t)}const Lt=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),fe=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),nn=[];let bt=null;function qt(t=!1){nn.push(bt=t?null:[])}function Nf(){nn.pop(),bt=nn[nn.length-1]||null}let cn=1;function Ln(t,e=!1){cn+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function Ys(t){return t.dynamicChildren=cn>0?bt||Te:null,Nf(),cn>0&&bt&&bt.push(t),t}function Ye(t,e,n,r,i,a){return Ys(vt(t,e,n,r,i,a,!0))}function jn(t,e,n,r,i){return Ys(dt(t,e,n,r,i,!0))}function Fn(t){return t?t.__v_isVNode===!0:!1}function Ue(t,e){return t.type===e.type&&t.key===e.key}const Ks=({key:t})=>t??null,kn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||tt(t)||$(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function vt(t,e=null,n=null,r=0,i=null,a=t===Lt?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ks(e),ref:e&&kn(e),scopeId:ws,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return o?(pi(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),cn>0&&!s&&bt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&bt.push(l),l}const dt=Mf;function Mf(t,e=null,n=null,r=0,i=null,a=!1){if((!t||t===nf)&&(t=fe),Fn(t)){const o=je(t,e,!0);return n&&pi(o,n),cn>0&&!a&&bt&&(o.shapeFlag&6?bt[bt.indexOf(t)]=o:bt.push(o)),o.patchFlag=-2,o}if(Wf(t)&&(t=t.__vccOpts),e){e=Rf(e);let{class:o,style:l}=e;o&&!it(o)&&(e.class=be(o)),K(l)&&(Qn(l)&&!F(l)&&(l=at({},l)),e.style=Gn(l))}const s=it(t)?1:Ws(t)?128:zl(t)?64:K(t)?4:$(t)?2:0;return vt(t,e,n,r,i,s,a,!0)}function Rf(t){return t?Qn(t)||Ls(t)?at({},t):t:null}function je(t,e,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:o,transition:l}=t,d=e?Lf(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Ks(d),ref:e&&e.ref?n&&a?F(a)?a.concat(kn(e)):[a,kn(e)]:kn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&je(t.ssContent),ssFallback:t.ssFallback&&je(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&di(f,l.clone(f)),f}function Vs(t=" ",e=0){return dt(rr,null,t,e)}function Fr(t="",e=!1){return e?(qt(),jn(fe,null,t)):dt(fe,null,t)}function jt(t){return t==null||typeof t=="boolean"?dt(fe):F(t)?dt(Lt,null,t.slice()):Fn(t)?Wt(t):dt(rr,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:je(t)}function pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),pi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ls(e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Vs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=be([e.class,r.class]));else if(i==="style")e.style=Gn([e.style,r.style]);else if(Wn(i)){const a=e[i],s=r[i];s&&a!==s&&!(F(a)&&a.includes(s))&&(e[i]=a?[].concat(a,s):s)}else i!==""&&(e[i]=r[i])}return e}function Mt(t,e,n,r=null){Ht(t,e,7,[n,r])}const jf=Ts();let Ff=0;function Df(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||jf,a={uid:Ff++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ja(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fs(r,i),emitsOptions:Is(r,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=pf.bind(null,a),t.ce&&t.ce(a),a}let ft=null;const qs=()=>ft||kt;let Dn,Dr;{const t=qn(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),a=>{i.length>1?i.forEach(s=>s(a)):i[0](a)}};Dn=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Dr=e("__VUE_SSR_SETTERS__",n=>un=n)}const pn=t=>{const e=ft;return Dn(t),t.scope.on(),()=>{t.scope.off(),Dn(e)}},Qi=()=>{ft&&ft.scope.off(),Dn(null)};function Gs(t){return t.vnode.shapeFlag&4}let un=!1;function $f(t,e=!1,n=!1){e&&Dr(e);const{props:r,children:i}=t.vnode,a=Gs(t);wf(t,r,a,e),Af(t,i,n||e);const s=a?zf(t,e):void 0;return e&&Dr(!1),s}function zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sf);const{setup:r}=n;if(r){Gt();const i=t.setupContext=r.length>1?Bf(t):null,a=pn(t),s=hn(r,t,0,[t.props,i]),o=Wa(s);if(Xt(),a(),(o||t.sp)&&!tn(t)&&ks(t),o){if(s.then(Qi,Qi),e)return s.then(l=>{Zi(t,l)}).catch(l=>{Zn(l,t,0)});t.asyncDep=s}else Zi(t,s)}else Xs(t)}function Zi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:K(e)&&(t.setupState=hs(e)),Xs(t)}function Xs(t,e,n){const r=t.type;t.render||(t.render=r.render||Dt);{const i=pn(t);Gt();try{of(t)}finally{Xt(),i()}}}const Hf={get(t,e){return lt(t,"get",""),t[e]}};function Bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hf),slots:t.slots,emit:t.emit,expose:e}}function gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hs(ci(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in en)return en[n](t)},has(e,n){return n in e||n in en}})):t.proxy}function Uf(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Wf(t){return $(t)&&"__vccOpts"in t}const Yt=(t,e)=>Cl(t,e,un);function Yf(t,e,n){try{Ln(-1);const r=arguments.length;return r===2?K(e)&&!F(e)?Fn(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fn(n)&&(n=[n]),dt(t,e,n))}finally{Ln(1)}}const Kf="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $r;const ta=typeof window<"u"&&window.trustedTypes;if(ta)try{$r=ta.createPolicy("vue",{createHTML:t=>t})}catch{}const Js=$r?t=>$r.createHTML(t):t=>t,Vf="http://www.w3.org/2000/svg",qf="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,ea=Ut&&Ut.createElement("template"),Gf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Ut.createElementNS(Vf,t):e==="mathml"?Ut.createElementNS(qf,t):n?Ut.createElement(t,{is:n}):Ut.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,a){const s=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ea.innerHTML=Js(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const o=ea.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xf=Symbol("_vtc");function Jf(t,e,n){const r=t[Xf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const na=Symbol("_vod"),Qf=Symbol("_vsh"),Zf=Symbol(""),tc=/(?:^|;)\s*display\s*:/;function ec(t,e,n){const r=t.style,i=it(n);let a=!1;if(n&&!i){if(e)if(it(e))for(const s of e.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&An(r,o,"")}else for(const s in e)n[s]==null&&An(r,s,"");for(const s in n)s==="display"&&(a=!0),An(r,s,n[s])}else if(i){if(e!==n){const s=r[Zf];s&&(n+=";"+s),r.cssText=n,a=tc.test(n)}}else e&&t.removeAttribute("style");na in t&&(t[na]=a?r.display:"",t[Qf]&&(r.display="none"))}const ra=/\s*!important$/;function An(t,e,n){if(F(n))n.forEach(r=>An(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nc(t,e);ra.test(n)?t.setProperty(Se(r),n.replace(ra,""),"important"):t[r]=n}}const ia=["Webkit","Moz","ms"],_r={};function nc(t,e){const n=_r[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return _r[e]=r;r=Vn(r);for(let i=0;i<ia.length;i++){const a=ia[i]+r;if(a in t)return _r[e]=a}return e}const aa="http://www.w3.org/1999/xlink";function sa(t,e,n,r,i,a=Xo(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(aa,e.slice(6,e.length)):t.setAttributeNS(aa,e,n):n==null||a&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,a?"":zt(n)?String(n):n)}function oa(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Js(n):n);return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const o=a==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=qa(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(i||e)}function rc(t,e,n,r){t.addEventListener(e,n,r)}function ic(t,e,n,r){t.removeEventListener(e,n,r)}const la=Symbol("_vei");function ac(t,e,n,r,i=null){const a=t[la]||(t[la]={}),s=a[e];if(r&&s)s.value=r;else{const[o,l]=sc(e);if(r){const d=a[e]=fc(r,i);rc(t,o,d,l)}else s&&(ic(t,o,s,l),a[e]=void 0)}}const fa=/(?:Once|Passive|Capture)$/;function sc(t){let e;if(fa.test(t)){e={};let r;for(;r=t.match(fa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Se(t.slice(2)),e]}let wr=0;const oc=Promise.resolve(),lc=()=>wr||(oc.then(()=>wr=0),wr=Date.now());function fc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(cc(r,n.value),e,5,[r])};return n.value=t,n.attached=lc(),n}function cc(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uc=(t,e,n,r,i,a)=>{const s=i==="svg";e==="class"?Jf(t,r,s):e==="style"?ec(t,n,r):Wn(e)?ei(e)||ac(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dc(t,e,r,s))?(oa(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sa(t,e,r,s,a,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!it(r))?oa(t,St(e),r,a,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sa(t,e,r,s))};function dc(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ca(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ca(e)&&it(n)?!1:e in t}const mc=at({patchProp:uc},Gf);let ua;function hc(){return ua||(ua=Cf(mc))}const pc=((...t)=>{const e=hc().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=vc(r);if(!i)return;const a=e._component;!$(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,gc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e});function gc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vc(t){return it(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Qs;const ir=t=>Qs=t,Zs=Symbol();function zr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var rn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rn||(rn={}));function bc(){const t=Qa(!0),e=t.run(()=>Le({}));let n=[],r=[];const i=ci({install(a){ir(i),i._a=a,a.provide(Zs,i),a.config.globalProperties.$pinia=i,r.forEach(s=>n.push(s)),r=[]},use(a){return this._a?n.push(a):r.push(a),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const to=()=>{};function da(t,e,n,r=to){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&Za()&&Qo(i),i}function Ae(t,...e){t.forEach(n=>{n(...e)})}const yc=t=>t(),ma=Symbol(),xr=Symbol();function Hr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];zr(i)&&zr(r)&&t.hasOwnProperty(n)&&!tt(r)&&!$t(r)?t[n]=Hr(i,r):t[n]=r}return t}const _c=Symbol();function wc(t){return!zr(t)||!Object.prototype.hasOwnProperty.call(t,_c)}const{assign:ie}=Object;function xc(t){return!!(tt(t)&&t.effect)}function Sc(t,e,n,r){const{state:i,actions:a,getters:s}=e,o=n.state.value[t];let l;function d(){o||(n.state.value[t]=i?i():{});const f=xl(n.state.value[t]);return ie(f,a,Object.keys(s||{}).reduce((u,p)=>(u[p]=ci(Yt(()=>{ir(n);const g=n._s.get(t);return s[p].call(g,g)})),u),{}))}return l=eo(t,d,e,n,r,!0),l}function eo(t,e,n={},r,i,a){let s;const o=ie({actions:{}},n),l={deep:!0};let d,f,u=new Set,p=new Set,g;const T=r.state.value[t];!a&&!T&&(r.state.value[t]={});let k;function N(z){let H;d=f=!1,typeof z=="function"?(z(r.state.value[t]),H={type:rn.patchFunction,storeId:t,events:g}):(Hr(r.state.value[t],z),H={type:rn.patchObject,payload:z,storeId:t,events:g});const rt=k=Symbol();vs().then(()=>{k===rt&&(d=!0)}),f=!0,Ae(u,H,r.state.value[t])}const w=a?function(){const{state:H}=n,rt=H?H():{};this.$patch(wt=>{ie(wt,rt)})}:to;function _(){s.stop(),u.clear(),p.clear(),r._s.delete(t)}const I=(z,H="")=>{if(ma in z)return z[xr]=H,z;const rt=function(){ir(r);const wt=Array.from(arguments),Pt=new Set,re=new Set;function De(B){Pt.add(B)}function vn(B){re.add(B)}Ae(p,{args:wt,name:rt[xr],store:L,after:De,onError:vn});let nt;try{nt=z.apply(this&&this.$id===t?this:L,wt)}catch(B){throw Ae(re,B),B}return nt instanceof Promise?nt.then(B=>(Ae(Pt,B),B)).catch(B=>(Ae(re,B),Promise.reject(B))):(Ae(Pt,nt),nt)};return rt[ma]=!0,rt[xr]=H,rt},E={_p:r,$id:t,$onAction:da.bind(null,p),$patch:N,$reset:w,$subscribe(z,H={}){const rt=da(u,z,H.detached,()=>wt()),wt=s.run(()=>Qe(()=>r.state.value[t],Pt=>{(H.flush==="sync"?f:d)&&z({storeId:t,type:rn.direct,events:g},Pt)},ie({},l,H)));return rt},$dispose:_},L=Jn(E);r._s.set(t,L);const q=(r._a&&r._a.runWithContext||yc)(()=>r._e.run(()=>(s=Qa()).run(()=>e({action:I}))));for(const z in q){const H=q[z];if(tt(H)&&!xc(H)||$t(H))a||(T&&wc(H)&&(tt(H)?H.value=T[z]:Hr(H,T[z])),r.state.value[t][z]=H);else if(typeof H=="function"){const rt=I(H,z);q[z]=rt,o.actions[z]=H}}return ie(L,q),ie(W(L),q),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:z=>{N(H=>{ie(H,z)})}}),r._p.forEach(z=>{ie(L,s.run(()=>z({store:L,app:r._a,pinia:r,options:o})))}),T&&a&&n.hydrate&&n.hydrate(L.$state,T),d=!0,f=!0,L}/*! #__NO_SIDE_EFFECTS__ */function vi(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function a(s,o){const l=Ll();return s=s||(l?Je(Zs,null):null),s&&ir(s),s=Qs,s._s.has(t)||(i?eo(t,e,r,s):Sc(t,r,s)),s._s.get(t)}return a.$id=t,a}function ha(t){const e=W(t),n={};for(const r in e){const i=e[r];i.effect?n[r]=Yt({get:()=>t[r],set(a){t[r]=a}}):(tt(i)||$t(i))&&(n[r]=Al(t,r))}return n}const no=/\B(?=(\d{3})+(?!\d))/g,Sr=t=>t==null||t===""?"":t.toString().replace(no,","),kc=t=>{if(t==null||t==="")return"";const e=Number(t).toFixed(1).split(".");return e[0]=e[0].replace(no,","),e.join(".")},Ac={key:0},Oc={class:"quotetable__price"},Cc=tr({__name:"QuoteTable",props:{showHead:{type:Boolean},quoteType:{},quoteData:{}},setup(t){return(e,n)=>(qt(),Ye("section",{class:be(["quotetable",t.quoteType])},[vt("table",null,[t.showHead?(qt(),Ye("thead",Ac,[...n[0]||(n[0]=[vt("tr",null,[vt("th",{class:"quotetable__price",scope:"col"},"Price (USD)"),vt("th",{class:"quotetable__size",scope:"col"},"Size"),vt("th",{class:"quotetable__total",scope:"col"},"Total")],-1)])])):Fr("",!0),vt("tbody",null,[(qt(!0),Ye(Lt,null,af(t.quoteData,r=>(qt(),Ye("tr",{key:r.price,class:be(r.orderStyle)},[vt("td",Oc,qe(xt(Sr)(r.price)),1),vt("td",{class:be(["quotetable__size",r.orderStyle])},qe(xt(Sr)(r.size)),3),vt("td",{class:"quotetable__total",style:Gn({"--bar-width":`${r.percentage}%`})},qe(xt(Sr)(r.total)),5)],2))),128))])])],2))}}),ro=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},pa=ro(Cc,[["__scopeId","data-v-b3379ba1"]]),ga=(t,e,n)=>{let r=new WebSocket(t);return r.onopen=()=>{console.log("open"),r.send(JSON.stringify(e))},r.onmessage=a=>{const s=JSON.parse(a.data);n(s)},{sendMessage:a=>{r.send(JSON.stringify(a))}}},io=vi("price",()=>{const t=Le(void 0),e=Le("");let n=0;return{currentPrice:t,colorStyle:e,handlePrice:i=>{var s;if(!((s=i.data)!=null&&s[0]))return;const a=i.data[0].price;e.value=a===n?"":a>n?"higher":"lower",t.value=a,n=a}}}),ao=vi("orderBook",()=>{const t=Le([]),e=Le([]);let n=[],r=[],i=0;const a=(u,p=!1)=>{if(!u||u.length===0)return[];const g=(N,w)=>{const _=N.length===0?0:N[N.length-1].total;return N.push({price:w[0],size:w[1],total:Number(_)+Number(w[1]),percentage:0,orderStyle:w[2]===void 0?"new":w[2]==="new"?"":w[2]}),N},T=p?u.reduceRight(g,[]).reverse():u.reduce(g,[]),k=Math.max(...T.map(N=>N.total));return T.map(N=>({...N,percentage:k?N.total/k*100:0}))},s=()=>{t.value=a(n.slice(-8),!0),e.value=a(r.slice(0,8))},o=(u,p)=>u.filter(g=>{const T=p.find(k=>k[0]===g[0]);return!T||T[1]!=="0"}),l=(u,p)=>{const g=[];return{oldOrders:u.map(k=>{const N=p.find(w=>w[0]===k[0]);return N&&(g.push(N[0]),k[2]=Number(k[1])>Number(N[1])?"sizeDown":Number(k[1])<Number(N[1])?"sizeUp":"",k[1]=N[1]),k}),newOrders:p.filter(k=>!g.includes(k[0]))}},d=u=>{let p=u.data.asks,g=u.data.bids;n=o(n,p),r=o(r,g),p=p.filter(_=>_[1]!=="0"),g=g.filter(_=>_[1]!=="0");const{oldOrders:T,newOrders:k}=l(n,p);n=[...T,...k].sort((_,I)=>Number(I[0])-Number(_[0]));const{oldOrders:N,newOrders:w}=l(r,g);r=[...N,...w].sort((_,I)=>Number(I[0])-Number(_[0]))};return{asks:t,bids:e,handleOrderBook:(u,p)=>{if(u.data){if(u.data.type==="snapshot")r=u.data.bids,n=u.data.asks,i=u.data.seqNum;else if(u.data.type==="delta"){if(u.data.prevSeqNum!==i){p();return}d(u),i=u.data.seqNum}s()}}}}),Pc=vi("socket",()=>{const t=io(),e=ao(),{sendMessage:n}=ga("wss://ws.btse.com/ws/oss/futures",{op:"subscribe",args:["update:BTCPFC"]},r=>e.handleOrderBook(r,()=>{n({op:"unsubscribe",args:["update:BTCPFC"]}),n({op:"subscribe",args:["update:BTCPFC"]})}));ga("wss://ws.btse.com/ws/futures",{op:"subscribe",args:["tradeHistoryApi:BTCPFC"]},r=>t.handlePrice(r))}),Ec={class:"orderbook"},Tc=tr({__name:"OrderBook",setup(t){Pc();const{currentPrice:e,colorStyle:n}=ha(io()),{asks:r,bids:i}=ha(ao());return(a,s)=>{const o=ef("font-awesome-icon");return qt(),Ye("section",Ec,[s[0]||(s[0]=vt("h2",{class:"orderbook__title"},"Order Book",-1)),dt(pa,{showHead:"",quoteType:"sell",quoteData:xt(r)},null,8,["quoteData"]),vt("p",{class:be(["orderbook__price",xt(n)])},[Vs(qe(xt(kc)(xt(e)))+" ",1),xt(n)==="higher"?(qt(),jn(o,{key:0,icon:"fa-solid fa-arrow-up"})):Fr("",!0),xt(n)==="lower"?(qt(),jn(o,{key:1,icon:"fa-solid fa-arrow-down"})):Fr("",!0)],2),dt(pa,{showHead:!1,quoteType:"buy",quoteData:xt(i)},null,8,["quoteData"])])}}}),Ic=ro(Tc,[["__scopeId","data-v-f4f60975"]]),Nc=tr({__name:"App",setup(t){return(e,n)=>(qt(),jn(Ic))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function va(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?va(Object(n),!0).forEach(function(r){jc(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function Mc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Lc(t,e,n){return e&&Rc(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function jc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bi(t,e){return Dc(t)||zc(t,e)||so(t,e)||Bc()}function ar(t){return Fc(t)||$c(t)||so(t)||Hc()}function Fc(t){if(Array.isArray(t))return Br(t)}function Dc(t){if(Array.isArray(t))return t}function $c(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function so(t,e){if(t){if(typeof t=="string")return Br(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(t,e)}}function Br(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ba=function(){},yi={},oo={},lo=null,fo={mark:ba,measure:ba};try{typeof window<"u"&&(yi=window),typeof document<"u"&&(oo=document),typeof MutationObserver<"u"&&(lo=MutationObserver),typeof performance<"u"&&(fo=performance)}catch{}var Uc=yi.navigator||{},ya=Uc.userAgent,_a=ya===void 0?"":ya,ce=yi,Z=oo,wa=lo,Sn=fo;ce.document;var ne=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",co=~_a.indexOf("MSIE")||~_a.indexOf("Trident/"),Qt="___FONT_AWESOME___",Ur=16,uo="fa",mo="svg-inline--fa",we="data-fa-i2svg",Wr="data-fa-pseudo-element",Wc="data-fa-pseudo-element-pending",_i="data-prefix",wi="data-icon",xa="fontawesome-i2svg",Yc="async",Kc=["HTML","HEAD","STYLE","SCRIPT"],ho=(function(){try{return!0}catch{return!1}})(),xi={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},zn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},po={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Vc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},qc=/fa[srltdbk\-\ ]/,go="fa-layers-text",Gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Xc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},vo=[1,2,3,4,5,6,7,8,9,10],Jc=vo.concat([11,12,13,14,15,16,17,18,19,20]),Qc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zc=[].concat(ar(Object.keys(zn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY]).concat(vo.map(function(t){return"".concat(t,"x")})).concat(Jc.map(function(t){return"w-".concat(t)})),bo=ce.FontAwesomeConfig||{};function tu(t){var e=Z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eu(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Z&&typeof Z.querySelector=="function"){var nu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nu.forEach(function(t){var e=bi(t,2),n=e[0],r=e[1],i=eu(tu(n));i!=null&&(bo[r]=i)})}var ru={familyPrefix:uo,styleDefault:"solid",replacementClass:mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},an=P(P({},ru),bo);an.autoReplaceSvg||(an.observeMutations=!1);var R={};Object.keys(an).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){an[t]=n,On.forEach(function(r){return r(R)})},get:function(){return an[t]}})});ce.FontAwesomeConfig=R;var On=[];function iu(t){return On.push(t),function(){On.splice(On.indexOf(t),1)}}var Oe=Ur,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function au(t){if(!(!t||!ne)){var e=Z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return Z.head.insertBefore(e,r),t}}var su="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var t=12,e="";t-- >0;)e+=su[Math.random()*62|0];return e}function Fe(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Si(t){return t.classList?Fe(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ou(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yo(t[n]),'" ')},"").trim()}function sr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ki(t){return t.size!==Ft.size||t.x!==Ft.x||t.y!==Ft.y||t.rotate!==Ft.rotate||t.flipX||t.flipY}function lu(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:d}}function fu(t){var e=t.transform,n=t.width,r=n===void 0?Ur:n,i=t.height,a=i===void 0?Ur:i,s="";return co?s+="translate(".concat(e.x/Oe-r/2,"em, ").concat(e.y/Oe-a/2,"em) "):s+="translate(calc(-50% + ".concat(e.x/Oe,"em), calc(-50% + ").concat(e.y/Oe,"em)) "),s+="scale(".concat(e.size/Oe*(e.flipX?-1:1),", ").concat(e.size/Oe*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var cu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _o(){var t=uo,e=mo,n=R.familyPrefix,r=R.replacementClass,i=cu;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Sa=!1;function kr(){R.autoAddCss&&!Sa&&(au(_o()),Sa=!0)}var uu={mixout:function(){return{dom:{css:_o,insertCss:kr}}},hooks:function(){return{beforeDOMElementCreation:function(){kr()},beforeI2svg:function(){kr()}}}},Zt=ce||{};Zt[Qt]||(Zt[Qt]={});Zt[Qt].styles||(Zt[Qt].styles={});Zt[Qt].hooks||(Zt[Qt].hooks={});Zt[Qt].shims||(Zt[Qt].shims=[]);var At=Zt[Qt],wo=[],du=function t(){Z.removeEventListener("DOMContentLoaded",t),Hn=1,wo.map(function(e){return e()})},Hn=!1;ne&&(Hn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Hn||Z.addEventListener("DOMContentLoaded",du));function mu(t){ne&&(Hn?setTimeout(t,0):wo.push(t))}function gn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?yo(t):"<".concat(e," ").concat(ou(r),">").concat(a.map(gn).join(""),"</").concat(e,">")}function ka(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ar=function(e,n,r,i){var a=Object.keys(e),s=a.length,o=n,l,d,f;for(r===void 0?(l=1,f=e[a[0]]):(l=0,f=r);l<s;l++)d=a[l],f=o(f,e[d],d,e);return f};function hu(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Yr(t){var e=hu(t);return e.length===1?e[0].toString(16):null}function pu(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Aa(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Kr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Aa(e);typeof At.hooks.addPack=="function"&&!i?At.hooks.addPack(t,Aa(e)):At.styles[t]=P(P({},At.styles[t]||{}),a),t==="fas"&&Kr("fa",e)}var sn=At.styles,gu=At.shims,vu=Object.values(po),Ai=null,xo={},So={},ko={},Ao={},Oo={},bu=Object.keys(xi);function yu(t){return~Zc.indexOf(t)}function _u(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!yu(i)?i:null}var Co=function(){var e=function(a){return Ar(sn,function(s,o,l){return s[l]=Ar(o,a,{}),s},{})};xo=e(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=s})}return i}),So=e(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=s})}return i}),Oo=e(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(l){i[l]=s}),i});var n="far"in sn||R.autoFetchSvg,r=Ar(gu,function(i,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});ko=r.names,Ao=r.unicodes,Ai=or(R.styleDefault)};iu(function(t){Ai=or(t.styleDefault)});Co();function Oi(t,e){return(xo[t]||{})[e]}function wu(t,e){return(So[t]||{})[e]}function Pe(t,e){return(Oo[t]||{})[e]}function Po(t){return ko[t]||{prefix:null,iconName:null}}function xu(t){var e=Ao[t],n=Oi("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ue(){return Ai}var Ci=function(){return{prefix:null,iconName:null,rest:[]}};function or(t){var e=xi[t],n=zn[t]||zn[e],r=t in At.styles?t:null;return n||r||null}function lr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,a=t.reduce(function(s,o){var l=_u(R.familyPrefix,o);if(sn[o]?(o=vu.includes(o)?Vc[o]:o,i=o,s.prefix=o):bu.indexOf(o)>-1?(i=o,s.prefix=or(o)):l?s.iconName=l:o!==R.replacementClass&&s.rest.push(o),!r&&s.prefix&&s.iconName){var d=i==="fa"?Po(s.iconName):{},f=Pe(s.prefix,s.iconName);d.prefix&&(i=null),s.iconName=d.iconName||f||s.iconName,s.prefix=d.prefix||s.prefix,s.prefix==="far"&&!sn.far&&sn.fas&&!R.autoFetchSvg&&(s.prefix="fas")}return s},Ci());return(a.prefix==="fa"||i==="fa")&&(a.prefix=ue()||"fas"),a}var Su=(function(){function t(){Mc(this,t),this.definitions={}}return Lc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=P(P({},n.definitions[o]||{}),s[o]),Kr(o,s[o]);var l=po[o];l&&Kr(l,s[o]),Co()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,l=s.iconName,d=s.icon,f=d[2];n[o]||(n[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[o][u]=d)}),n[o][l]=d}),n}}]),t})(),Oa=[],Ee={},Me={},ku=Object.keys(Me);function Au(t,e){var n=e.mixoutsTo;return Oa=t,Ee={},Object.keys(Me).forEach(function(r){ku.indexOf(r)===-1&&delete Me[r]}),Oa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),$n(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Ee[s]||(Ee[s]=[]),Ee[s].push(a[s])})}r.provides&&r.provides(Me)}),n}function Vr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ee[t]||[];return a.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function xe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ee[t]||[];i.forEach(function(a){a.apply(null,n)})}function te(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Me[t]?Me[t].apply(null,e):void 0}function qr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ue();if(e)return e=Pe(n,e)||e,ka(Eo.definitions,n,e)||ka(At.styles,n,e)}var Eo=new Su,Ou=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,xe("noAuto")},Cu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ne?(xe("beforeI2svg",e),te("pseudoElements2svg",e),te("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,mu(function(){Eu({autoReplaceSvgRoot:n}),xe("watch",e)})}},Pu={icon:function(e){if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Pe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=or(e[0]);return{prefix:r,iconName:Pe(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.familyPrefix,"-"))>-1||e.match(qc))){var i=lr(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ue(),iconName:Pe(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=ue();return{prefix:a,iconName:Pe(a,e)||e}}}},_t={noAuto:Ou,config:R,dom:Cu,parse:Pu,library:Eo,findIconDefinition:qr,toHtml:gn},Eu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(At.styles).length>0||R.autoFetchSvg)&&ne&&R.autoReplaceSvg&&_t.dom.i2svg({node:r})};function fr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ne){var r=Z.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Tu(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,s=t.transform;if(ki(s)&&n.found&&!r.found){var o=n.width,l=n.height,d={x:o/l/2,y:.5};i.style=sr(P(P({},a),{},{"transform-origin":"".concat(d.x+s.x/16,"em ").concat(d.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Iu(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,s=a===!0?"".concat(e,"-").concat(R.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:s}),children:r}]}]}function Pi(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,s=t.transform,o=t.symbol,l=t.title,d=t.maskId,f=t.titleId,u=t.extra,p=t.watchable,g=p===void 0?!1:p,T=r.found?r:n,k=T.width,N=T.height,w=i==="fak",_=[R.replacementClass,a?"".concat(R.familyPrefix,"-").concat(a):""].filter(function(H){return u.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(u.classes).join(" "),I={children:[],attributes:P(P({},u.attributes),{},{"data-prefix":i,"data-icon":a,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(N)})},E=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(k/N*16*.0625,"em")}:{};g&&(I.attributes[we]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(f||dn())},children:[l]}),delete I.attributes.title);var L=P(P({},I),{},{prefix:i,iconName:a,main:n,mask:r,maskId:d,transform:s,symbol:o,styles:P(P({},E),u.styles)}),et=r.found&&n.found?te("generateAbstractMask",L)||{children:[],attributes:{}}:te("generateAbstractIcon",L)||{children:[],attributes:{}},q=et.children,z=et.attributes;return L.children=q,L.attributes=z,o?Iu(L):Tu(L)}function Ca(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,d=P(P(P({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(d[we]="");var f=P({},s.styles);ki(i)&&(f.transform=fu({transform:i,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=sr(f);u.length>0&&(d.style=u);var p=[];return p.push({tag:"span",attributes:d,children:[e]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Nu(t){var e=t.content,n=t.title,r=t.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=sr(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Or=At.styles;function Gr(t){var e=t[0],n=t[1],r=t.slice(4),i=bi(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(R.familyPrefix,"-").concat(ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(ve.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(ve.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:s}}var Mu={found:!1,width:512,height:512};function Ru(t,e){!ho&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xr(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=ue()),new Promise(function(r,i){if(te("missingIconAbstract"),n==="fa"){var a=Po(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Or[e]&&Or[e][t]){var s=Or[e][t];return r(Gr(s))}Ru(t,e),r(P(P({},Mu),{},{icon:R.showMissingIcons&&t?te("missingIconAbstract")||{}:{}}))})}var Pa=function(){},Jr=R.measurePerformance&&Sn&&Sn.mark&&Sn.measure?Sn:{mark:Pa,measure:Pa},Ke='FA "6.1.1"',Lu=function(e){return Jr.mark("".concat(Ke," ").concat(e," begins")),function(){return To(e)}},To=function(e){Jr.mark("".concat(Ke," ").concat(e," ends")),Jr.measure("".concat(Ke," ").concat(e),"".concat(Ke," ").concat(e," begins"),"".concat(Ke," ").concat(e," ends"))},Ei={begin:Lu,end:To},Cn=function(){};function Ea(t){var e=t.getAttribute?t.getAttribute(we):null;return typeof e=="string"}function ju(t){var e=t.getAttribute?t.getAttribute(_i):null,n=t.getAttribute?t.getAttribute(wi):null;return e&&n}function Fu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function Du(){if(R.autoReplaceSvg===!0)return Pn.replace;var t=Pn[R.autoReplaceSvg];return t||Pn.replace}function $u(t){return Z.createElementNS("http://www.w3.org/2000/svg",t)}function zu(t){return Z.createElement(t)}function Io(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?$u:zu:n;if(typeof t=="string")return Z.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var a=t.children||[];return a.forEach(function(s){i.appendChild(Io(s,{ceFn:r}))}),i}function Hu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Io(i),n)}),n.getAttribute(we)===null&&R.keepOriginalSource){var r=Z.createComment(Hu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Si(n).indexOf(R.replacementClass))return Pn.replace(e);var i=new RegExp("".concat(R.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,l){return l===R.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return gn(o)}).join(`
`);n.setAttribute(we,""),n.innerHTML=s}};function Ta(t){t()}function No(t,e){var n=typeof e=="function"?e:Cn;if(t.length===0)n();else{var r=Ta;R.mutateApproach===Yc&&(r=ce.requestAnimationFrame||Ta),r(function(){var i=Du(),a=Ei.begin("mutate");t.map(i),a(),n()})}}var Ti=!1;function Mo(){Ti=!0}function Qr(){Ti=!1}var Bn=null;function Ia(t){if(wa&&R.observeMutations){var e=t.treeCallback,n=e===void 0?Cn:e,r=t.nodeCallback,i=r===void 0?Cn:r,a=t.pseudoElementsCallback,s=a===void 0?Cn:a,o=t.observeMutationsRoot,l=o===void 0?Z:o;Bn=new wa(function(d){if(!Ti){var f=ue();Fe(d).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Ea(u.addedNodes[0])&&(R.searchPseudoElements&&s(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&R.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&Ea(u.target)&&~Qc.indexOf(u.attributeName))if(u.attributeName==="class"&&ju(u.target)){var p=lr(Si(u.target)),g=p.prefix,T=p.iconName;u.target.setAttribute(_i,g||f),T&&u.target.setAttribute(wi,T)}else Fu(u.target)&&i(u.target)})}}),ne&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bu(){Bn&&Bn.disconnect()}function Uu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Wu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=lr(Si(t));return i.prefix||(i.prefix=ue()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=wu(i.prefix,t.innerText)||Oi(i.prefix,Yr(t.innerText))),i}function Yu(t){var e=Fe(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||dn()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Na(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(t),r=n.iconName,i=n.prefix,a=n.rest,s=Yu(t),o=Vr("parseNodeAttributes",{},t),l=e.styleParser?Uu(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var Vu=At.styles;function Ro(t){var e=R.autoReplaceSvg==="nest"?Na(t,{styleParser:!1}):Na(t);return~e.extra.classes.indexOf(go)?te("generateLayersText",t,e):te("generateSvgReplacementMutation",t,e)}function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ne)return Promise.resolve();var n=Z.documentElement.classList,r=function(u){return n.add("".concat(xa,"-").concat(u))},i=function(u){return n.remove("".concat(xa,"-").concat(u))},a=R.autoFetchSvg?Object.keys(xi):Object.keys(Vu),s=[".".concat(go,":not([").concat(we,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(we,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Fe(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ei.begin("onTree"),d=o.reduce(function(f,u){try{var p=Ro(u);p&&f.push(p)}catch(g){ho||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,u){Promise.all(d).then(function(p){No(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),u(p)})})}function qu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ro(t).then(function(n){n&&No([n],e)})}function Gu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qr(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qr(i||{})),t(r,P(P({},n),{},{mask:i}))}}var Xu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ft:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,l=o===void 0?null:o,d=n.maskId,f=d===void 0?null:d,u=n.title,p=u===void 0?null:u,g=n.titleId,T=g===void 0?null:g,k=n.classes,N=k===void 0?[]:k,w=n.attributes,_=w===void 0?{}:w,I=n.styles,E=I===void 0?{}:I;if(e){var L=e.prefix,et=e.iconName,q=e.icon;return fr(P({type:"icon"},e),function(){return xe("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(p?_["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(T||dn()):(_["aria-hidden"]="true",_.focusable="false")),Pi({icons:{main:Gr(q),mask:l?Gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:et,transform:P(P({},Ft),i),symbol:s,title:p,maskId:f,titleId:T,extra:{attributes:_,styles:E,classes:N}})})}},Ju={mixout:function(){return{icon:Gu(Xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ma,n.nodeCallback=qu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,a=n.callback,s=a===void 0?function(){}:a;return Ma(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,l=r.transform,d=r.symbol,f=r.mask,u=r.maskId,p=r.extra;return new Promise(function(g,T){Promise.all([Xr(i,o),f.iconName?Xr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var N=bi(k,2),w=N[0],_=N[1];g([n,Pi({icons:{main:w,mask:_},prefix:o,iconName:i,transform:l,symbol:d,maskId:u,title:a,titleId:s,extra:p,watchable:!0})])}).catch(T)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,l=sr(o);l.length>0&&(i.style=l);var d;return ki(s)&&(d=te("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(d||a.icon),{children:r,attributes:i}}}},Qu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return fr({type:"layer"},function(){xe("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(R.familyPrefix,"-layers")].concat(ar(a)).join(" ")},children:s}]})}}}},Zu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,l=r.attributes,d=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return fr({type:"counter",content:n},function(){return xe("beforeDOMElementCreation",{content:n,params:r}),Nu({content:n.toString(),title:a,extra:{attributes:d,styles:u,classes:["".concat(R.familyPrefix,"-layers-counter")].concat(ar(o))}})})}}}},td={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ft:i,s=r.title,o=s===void 0?null:s,l=r.classes,d=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return fr({type:"text",content:n},function(){return xe("beforeDOMElementCreation",{content:n,params:r}),Ca({content:n,transform:P(P({},Ft),a),title:o,extra:{attributes:u,styles:g,classes:["".concat(R.familyPrefix,"-layers-text")].concat(ar(d))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,l=null;if(co){var d=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/d,l=f.height/d}return R.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ca({content:n.innerHTML,width:o,height:l,transform:a,title:i,extra:s,watchable:!0})])}}},ed=new RegExp('"',"ug"),Ra=[1105920,1112319];function nd(t){var e=t.replace(ed,""),n=pu(e,0),r=n>=Ra[0]&&n<=Ra[1],i=e.length===2?e[0]===e[1]:!1;return{value:Yr(i?e[0]:e),isSecondary:r||i}}function La(t,e){var n="".concat(Wc).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Fe(t.children),s=a.filter(function(et){return et.getAttribute(Wr)===e})[0],o=ce.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(Gc),d=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&f!=="none"&&f!==""){var u=o.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?zn[l[2].toLowerCase()]:Xc[d],g=nd(u),T=g.value,k=g.isSecondary,N=l[0].startsWith("FontAwesome"),w=Oi(p,T),_=w;if(N){var I=xu(T);I.iconName&&I.prefix&&(w=I.iconName,p=I.prefix)}if(w&&!k&&(!s||s.getAttribute(_i)!==p||s.getAttribute(wi)!==_)){t.setAttribute(n,_),s&&t.removeChild(s);var E=Ku(),L=E.extra;L.attributes[Wr]=e,Xr(w,p).then(function(et){var q=Pi(P(P({},E),{},{icons:{main:et,mask:Ci()},prefix:p,iconName:_,extra:L,watchable:!0})),z=Z.createElement("svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=q.map(function(H){return gn(H)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function rd(t){return Promise.all([La(t,"::before"),La(t,"::after")])}function id(t){return t.parentNode!==document.head&&!~Kc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ja(t){if(ne)return new Promise(function(e,n){var r=Fe(t.querySelectorAll("*")).filter(id).map(rd),i=Ei.begin("searchPseudoElements");Mo(),Promise.all(r).then(function(){i(),Qr(),e()}).catch(function(){i(),Qr(),n()})})}var ad={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ja,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;R.searchPseudoElements&&ja(i)}}},Fa=!1,sd={mixout:function(){return{dom:{unwatch:function(){Mo(),Fa=!0}}}},hooks:function(){return{bootstrap:function(){Ia(Vr("mutationObserverCallbacks",{}))},noAuto:function(){Bu()},watch:function(n){var r=n.observeMutationsRoot;Fa?Qr():Ia(Vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Da=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},od={mixout:function(){return{parse:{transform:function(n){return Da(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Da(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(d," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:u,path:p};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function $a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ld(t){return t.tag==="g"?t.children:[t]}var fd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?lr(i.split(" ").map(function(s){return s.trim()})):Ci();return a.prefix||(a.prefix=ue()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,l=n.transform,d=a.width,f=a.icon,u=s.width,p=s.icon,g=lu({transform:l,containerWidth:u,iconWidth:d}),T={tag:"rect",attributes:P(P({},Cr),{},{fill:"white"})},k=f.children?{children:f.children.map($a)}:{},N={tag:"g",attributes:P({},g.inner),children:[$a(P({tag:f.tag,attributes:P(P({},f.attributes),g.path)},k))]},w={tag:"g",attributes:P({},g.outer),children:[N]},_="mask-".concat(o||dn()),I="clip-".concat(o||dn()),E={tag:"mask",attributes:P(P({},Cr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,w]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:ld(p)},E]};return r.push(L,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(_,")")},Cr)}),{children:r,attributes:i}}}},cd={provides:function(e){var n=!1;ce.matchMedia&&(n=ce.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=P(P({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:P(P({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ud={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},dd=[uu,Ju,Qu,Zu,td,ad,sd,od,fd,cd,ud];Au(dd,{mixoutsTo:_t});_t.noAuto;_t.config;var md=_t.library;_t.dom;var Zr=_t.parse;_t.findIconDefinition;_t.toHtml;var hd=_t.icon;_t.layer;_t.text;_t.counter;function st(t,e,n){return(e=bd(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function za(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Vt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?za(Object(n),!0).forEach(function(r){st(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pd(t,e){if(t==null)return{};var n,r,i=gd(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function gd(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function vd(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function bd(t){var e=vd(t,"string");return typeof e=="symbol"?e:e+""}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function Pr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?st({},t,e):{}}function yd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},st(st(st(st(st(st(st(st(st(st(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),st(st(st(st(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo={exports:{}};(function(t){(function(e){var n=function(w,_,I){if(!d(_)||u(_)||p(_)||g(_)||l(_))return _;var E,L=0,et=0;if(f(_))for(E=[],et=_.length;L<et;L++)E.push(n(w,_[L],I));else{E={};for(var q in _)Object.prototype.hasOwnProperty.call(_,q)&&(E[w(q,I)]=n(w,_[q],I))}return E},r=function(w,_){_=_||{};var I=_.separator||"_",E=_.split||/(?=[A-Z])/;return w.split(E).join(I)},i=function(w){return T(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(_,I){return I?I.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var _=i(w);return _.substr(0,1).toUpperCase()+_.substr(1)},s=function(w,_){return r(w,_).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},d=function(w){return w===Object(w)},f=function(w){return o.call(w)=="[object Array]"},u=function(w){return o.call(w)=="[object Date]"},p=function(w){return o.call(w)=="[object RegExp]"},g=function(w){return o.call(w)=="[object Boolean]"},T=function(w){return w=w-0,w===w},k=function(w,_){var I=_&&"process"in _?_.process:_;return typeof I!="function"?w:function(E,L){return I(E,w,L)}},N={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(w,_){return n(k(i,_),w)},decamelizeKeys:function(w,_){return n(k(s,_),w,_)},pascalizeKeys:function(w,_){return n(k(a,_),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(_d)})(Lo);var wd=Lo.exports,xd=["class","style"];function Sd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=wd.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return e[i]=a,e},{})}function kd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function jo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return jo(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,d){var f=t.attributes[d];switch(d){case"class":l.class=kd(f);break;case"style":l.style=Sd(f);break;default:l.attrs[d]=f}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=pd(n,xd);return Yf(t.tag,Vt(Vt(Vt({},e),{},{class:i.class,style:Vt(Vt({},i.style),s)},i.attrs),o),r)}var Fo=!1;try{Fo=!0}catch{}function Ad(){if(!Fo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ha(t){if(t&&Un(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zr.icon)return Zr.icon(t);if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Od=tr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Yt(function(){return Ha(e.icon)}),a=Yt(function(){return Pr("classes",yd(e))}),s=Yt(function(){return Pr("transform",typeof e.transform=="string"?Zr.transform(e.transform):e.transform)}),o=Yt(function(){return Pr("mask",Ha(e.mask))}),l=Yt(function(){var f=Vt(Vt(Vt(Vt({},a.value),s.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,hd(i.value,f)});Qe(l,function(f){if(!f)return Ad("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var d=Yt(function(){return l.value?jo(l.value.abstract[0],{},r):null});return function(){return d.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Cd={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Pd={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};md.add(Pd,Cd);pc(Nc).use(bc()).component("font-awesome-icon",Od).mount("#app");
