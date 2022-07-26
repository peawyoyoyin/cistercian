const Tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Tt();const L={},Rt=(e,t)=>e===t,q=Symbol("solid-proxy"),st=Symbol("solid-track"),he={equals:Rt};let jt=at;const K={},B=1,ge=2,it={owned:null,cleanups:null,context:null,owner:null},[It,yr]=R(!1);var m=null;let ne=null,$=null,J=null,S=null,T=null,Le=0;function ye(e,t){const n=$,r=m,s=e.length===0,i=s?it:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>Xe(i));m=i,$=null;try{return pe(l,!0)}finally{$=n,m=r}}function R(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,pending:K,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==K?n.pending:n.value)),je(n,s));return[ct.bind(n),r]}function Xt(e,t,n){const r=Ie(e,t,!0,B);se(r)}function x(e,t,n){const r=Ie(e,t,!1,B);se(r)}function b(e,t,n){n=n?Object.assign({},he,n):he;const r=Ie(e,t,!0,0);return r.pending=K,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,se(r),ct.bind(r)}function Te(e){if(J)return e();let t;const n=J=[];try{t=e()}finally{J=null}return pe(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==K){const i=s.pending;s.pending=K,je(s,i)}}},!1),t}function j(e){let t,n=$;return $=null,t=e(),$=n,t}function ot(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const c=j(()=>t(o,s,l));return s=o,c}}function we(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function lt(){return $}function Wt(){return m}function Dt(e,t){const n=m;m=e;try{return pe(t,!0)}finally{m=n}}function qt(e){const t=$,n=m;return Promise.resolve().then(()=>{$=t,m=n;let r;return Te(e),$=m=null,r?r.done:void 0})}function Bt(){return[It,qt]}function Re(e){const t=Symbol("context");return{id:t,Provider:Yt(t),defaultValue:e}}function re(e){let t;return(t=ht(m,e.id))!==void 0?t:e.defaultValue}function xe(e){const t=b(e);return b(()=>Pe(t()))}function ct(){const e=ne;if(this.sources&&(this.state||e)){const t=S;S=null,this.state===B||e?se(this):ve(this),S=t}if($){const t=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(t)):($.sources=[this],$.sourceSlots=[t]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function je(e,t,n){if(J)return e.pending===K&&J.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&pe(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];r&&ne.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?S.push(i):T.push(i),i.observers&&ft(i)),r||(i.state=B)}if(S.length>1e6)throw S=[],new Error},!1),t}function se(e){if(!e.fn)return;Xe(e);const t=m,n=$,r=Le;$=m=e,Mt(e,e.value,r),$=n,m=t}function Mt(e,t,n){let r;try{r=e.fn(t)}catch(s){dt(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?je(e,r):e.value=r,e.updatedAt=n)}function Ie(e,t,n,r=B,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==it&&(m.owned?m.owned.push(i):m.owned=[i]),i}function ut(e){const t=ne;if(e.state===0||t)return;if(e.state===ge||t)return ve(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Le);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===B||t)se(e);else if(e.state===ge||t){const s=S;S=null,ve(e,n[0]),S=s}}function pe(e,t){if(S)return e();let n=!1;t||(S=[]),T?n=!0:T=[],Le++;try{const r=e();return Ut(n),r}catch(r){S||(T=null),dt(r)}}function Ut(e){S&&(at(S),S=null),!e&&(T.length?Te(()=>{jt(T),T=null}):T=null)}function at(e){for(let t=0;t<e.length;t++)ut(e[t])}function ve(e,t){const n=ne;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===B||n?s!==t&&ut(s):(s.state===ge||n)&&ve(s,t))}}function ft(e){const t=ne;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ge,r.pure?S.push(r):T.push(r),r.observers&&ft(r))}}function Xe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Xe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function dt(e){throw e}function ht(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ht(e.owner,t):void 0}function Pe(e){if(typeof e=="function"&&!e.length)return Pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Pe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Yt(e){return function(n){let r;return Xt(()=>r=j(()=>(m.context={[e]:n.value},xe(()=>n.children)))),r}}const Fe=Symbol("fallback");function ze(e){for(let t=0;t<e.length;t++)e[t]()}function Kt(e,t,n={}){let r=[],s=[],i=[],l=[],o=0,c;return we(()=>ze(i)),()=>{const u=e()||[];return u[st],j(()=>{if(u.length===0)return o!==0&&(ze(i),i=[],r=[],s=[],o=0,l=[]),n.fallback&&(r=[Fe],s[0]=ye(f=>(i[0]=f,n.fallback())),o=1),s;for(r[0]===Fe&&(i[0](),i=[],r=[],s=[],o=0),c=0;c<u.length;c++)c<r.length&&r[c]!==u[c]?l[c](()=>u[c]):c>=r.length&&(s[c]=ye(a));for(;c<r.length;c++)i[c]();return o=l.length=i.length=u.length,r=u.slice(0),s=s.slice(0,o)});function a(f){i[c]=f;const[h,y]=R(u[c]);return l[c]=y,t(h,c)}}}function d(e,t){return j(()=>e(t||{}))}function ce(){return!0}const gt={get(e,t,n){return t===q?n:e.get(t)},has(e,t){return e.has(t)},set:ce,deleteProperty:ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ce,deleteProperty:ce}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)==null?{}:e}function yt(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=Ae(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Ae(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Ae(e[n])));return[...new Set(t)]}},gt)}function Ft(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),s=t.map(i=>{const l={};for(let o=0;o<i.length;o++){const c=i[o];Object.defineProperty(l,c,r[c]?r[c]:{get(){return e[c]},set(){return!0}})}return l});return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},gt)),s}let zt=0;function Gt(){const e=L.context;return e?`${e.id}${e.count++}`:`cl-${zt++}`}function Ht(e){const t="fallback"in e&&{fallback:()=>e.fallback};return b(Kt(()=>e.each,e.children,t||void 0))}function We(e){let t=!1;const n=b(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return b(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?j(()=>s(r)):s}return e.fallback})}function Vt(e){let t=!1;const n=xe(()=>e.children),r=b(()=>{let s=n();Array.isArray(s)||(s=[s]);for(let i=0;i<s.length;i++){const l=s[i].when;if(l)return[i,l,s[i]]}return[-1]},void 0,{equals:(s,i)=>s[0]===i[0]&&(t?s[1]===i[1]:!s[1]==!i[1])&&s[2]===i[2]});return b(()=>{const[s,i,l]=r();if(s<0)return e.fallback;const o=l.children;return(t=typeof o=="function"&&o.length>0)?j(()=>o(i)):o})}function ke(e){return e}const Qt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Jt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Qt]),Zt=new Set(["innerHTML","textContent","innerText","children"]),en={className:"class",htmlFor:"for"},Ge={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},tn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),nn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function vt(e,t){return b(e,void 0,t?void 0:{equals:t})}function rn(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,c=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const a=i<r?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!u){u=new Map;let f=o;for(;f<i;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let f=l,h=1,y;for(;++f<s&&f<i&&!((y=u.get(t[f]))==null||y!==a+h);)h++;if(h>a-o){const v=t[l];for(;o<a;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const He="_$DX_DELEGATE";function sn(e,t,n){let r;return ye(s=>{r=s,t===document?e():A(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function X(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ie(e,t=window.document){const n=t[He]||(t[He]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,dn))}}function g(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function on(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function mt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ln(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function cn(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Ve(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Ve(e,o,!0),n[o]=c)}return n}function un(e,t,n={}){const r=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return r.cssText=t;s&&(r.cssText=void 0,n={}),t||(t={});let i,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(r.setProperty(l,i),n[l]=i);return n}function Ne(e,t,n,r){typeof t=="function"?x(s=>Je(e,t(),s,n,r)):Je(e,t,void 0,n,r)}function A(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return F(e,t,r,n);x(s=>F(e,t(),s,n),r)}function an(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;Qe(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||F(e,t.children);continue}const o=t[l];s[l]=Qe(e,l,o,s[l],n,i)}}function fn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ve(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Qe(e,t,n,r,s,i){let l,o,c;if(t==="style")return un(e,n,r);if(t==="classList")return cn(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),a=tn.has(u);if(!a&&r){const f=Array.isArray(r)?r[0]:r;e.removeEventListener(u,f)}(a||n)&&(ln(e,u,n,a),a&&ie([u]))}else if((c=Zt.has(t))||!s&&(Ge[t]||(o=Jt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?mt(e,n):l&&!o&&!c?e[fn(t)]=n:e[Ge[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&nn[t.split(":")[0]];u?on(e,u,t,n):g(e,en[t]||t,n)}return n}function dn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),L.registry&&!L.done&&(L.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Je(e,t,n={},r,s){return t||(t={}),!s&&"children"in t&&x(()=>n.children=F(e,t.children,n.children)),t.ref&&t.ref(e),x(()=>an(e,t,r,!0,n,!0)),n}function F(e,t,n,r,s){for(L.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(L.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(L.context)return n;n=M(e,n,r)}else{if(i==="function")return x(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(Oe(o,t,n,s))return x(()=>n=F(e,o,n,r,!0)),()=>n;if(L.context){for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=M(e,n,r),l)return n}else c?n.length===0?Ze(e,o,r):rn(e,n,o):(n&&M(e),Ze(e,o));n=o}else if(t instanceof Node){if(L.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=M(e,n,r,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Oe(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=Oe(e,o,c)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=Oe(e,Array.isArray(o)?o:[o],c)||s}else e.push(o),s=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Ze(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function M(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(s,o):e.insertBefore(s,n):c&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function hn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function gn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function yn(e){try{return document.querySelector(e)}catch{return null}}function vn(e,t){const n=yn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function mn(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=gn(R(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!s&&t(o),o));return n&&we(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function $n(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function bn(){return mn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),vn(window.location.hash.slice(1),n)},e=>hn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const wn=/^(?:[a-z0-9]+:)?\/\//i,xn=/^\/+|\/+$/g;function Z(e,t=!1){const n=e.replace(xn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(wn.test(t))return;const r=Z(e),s=n&&Z(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+Z(t,!i)}function pn(e,t){if(e==null)throw new Error(t);return e}function $t(e,t){return Z(e).replace(/\/*(\*.*)?$/g,"")+Z(t)}function _n(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Y(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Sn(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),i=s.length;return l=>{const o=l.split("/").filter(Boolean),c=o.length-i;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:i?"":"/",params:{}};for(let a=0;a<i;a++){const f=s[a],h=o[a];if(f[0]===":")u.params[f.slice(1)]=h;else if(f.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${h}`}return r&&(u.params[r]=c?o.slice(-c).join("/"):""),u}}function An(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function bt(e){const t=new Map,n=Wt();return new Proxy({},{get(r,s){return t.has(s)||Dt(n,()=>t.set(s,b(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function wt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return wt(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const kn=100,xt=Re(),_e=Re(),oe=()=>pn(re(xt),"Make sure your app is wrapped in a <Router />");let ee;const Se=()=>ee||re(_e)||oe().base,Cn=e=>{const t=Se();return b(()=>t.resolvePath(e()))},Pn=e=>{const t=oe();return b(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},De=()=>oe().navigatorFactory(),Nn=()=>oe().location,On=()=>Se().params;function En(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>d(r,{}):()=>{const{element:c}=e;return c===void 0&&n?d(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return pt(e.path).reduce((c,u)=>{for(const a of wt(u)){const f=$t(t,a),h=l?f:f.split("/*",1)[0];c.push({...o,originalPath:a,pattern:h,matcher:Sn(h,!l)})}return c},[])}function Ln(e,t=0){return{routes:e,score:An(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function pt(e){return Array.isArray(e)?e:[e]}function _t(e,t="",n,r=[],s=[]){const i=pt(e);for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=En(c,t,n);for(const a of u){if(r.push(a),c.children)_t(c.children,a.pattern,n,r,s);else{const f=Ln([...r],s.length);s.push(f)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function Tn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Rn(e,t){const n=new URL("http://sar"),r=b(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=b(()=>Y(r().pathname)),i=b(()=>Y(r().search,!0)),l=b(()=>Y(r().hash)),o=b(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:bt(ot(i,()=>_n(r())))}}function jn(e,t="",n,r){const{signal:[s,i],utils:l={}}=$n(e),o=l.parsePath||(w=>w),c=l.renderPath||(w=>w),u=de("",t),a=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&i({value:u,replace:!0,scroll:!1});const[f,h]=Bt(),[y,v]=R(s().value),[O,_]=R(s().state),P=Rn(y,O),N=[],E={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(w){return de(u,w)}};if(n)try{ee=E,E.data=n({data:void 0,params:{},location:P,navigate:Ue(E)})}finally{ee=void 0}function I(w,p,k){j(()=>{if(typeof p=="number"){p&&(l.go?l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:z,scroll:G,state:le}={replace:!1,resolve:!0,scroll:!0,...k},W=z?w.resolvePath(p):de("",p);if(W===void 0)throw new Error(`Path '${p}' is not a routable path`);if(N.length>=kn)throw new Error("Too many redirects");const D=y();if(W!==D||le!==O()){const H=N.push({value:D,replace:C,scroll:G,state:O()});h(()=>{v(W),_(le)}).then(()=>{N.length===H&&Et({value:W,state:le})})}})}function Ue(w){return w=w||re(_e)||E,(p,k)=>I(w,p,k)}function Et(w){const p=N[0];p&&((w.value!==p.value||w.state!==p.state)&&i({...w,replace:p.replace,scroll:p.scroll}),N.length=0)}x(()=>{const{value:w,state:p}=s();j(()=>{w!==y()&&h(()=>{v(w),_(p)})})});{let w=function(k){return k.namespaceURI==="http://www.w3.org/2000/svg"},p=function(k){if(k.defaultPrevented||k.button!==0||k.metaKey||k.altKey||k.ctrlKey||k.shiftKey)return;const C=k.composedPath().find(Ke=>Ke instanceof Node&&Ke.nodeName.toUpperCase()==="A");if(!C)return;const z=w(C),G=z?C.href.baseVal:C.href;if((z?C.target.baseVal:C.target)||!G&&!C.hasAttribute("state"))return;const W=(C.getAttribute("rel")||"").split(/\s+/);if(C.hasAttribute("download")||W&&W.includes("external"))return;const D=z?new URL(G,document.baseURI):new URL(G),H=Y(D.pathname);if(D.origin!==window.location.origin||u&&H&&!H.toLowerCase().startsWith(u.toLowerCase()))return;const Lt=o(H+Y(D.search,!0)+Y(D.hash)),Ye=C.getAttribute("state");k.preventDefault(),I(E,Lt,{resolve:!1,replace:C.hasAttribute("replace"),scroll:!C.hasAttribute("noscroll"),state:Ye&&JSON.parse(Ye)})};var vr=w,mr=p;document.addEventListener("click",p),we(()=>document.removeEventListener("click",p))}return{base:E,out:a,location:P,isRouting:f,renderPath:c,parsePath:o,navigatorFactory:Ue}}function In(e,t,n,r){const{base:s,location:i,navigatorFactory:l}=e,{pattern:o,element:c,preload:u,data:a}=r().route,f=b(()=>r().path),h=bt(()=>r().params);u&&u();const y={parent:t,pattern:o,get child(){return n()},path:f,params:h,data:t.data,outlet:c,resolvePath(v){return de(s.path(),v,f())}};if(a)try{ee=y,y.data=a({data:t.data,params:h,location:i,navigate:l(y)})}finally{ee=void 0}return y}const Xn=X("<a></a>"),Wn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||bn(),o=jn(l,r,s);return d(xt.Provider,{value:o,get children(){return e.children}})},Dn=e=>{const t=oe(),n=Se(),r=xe(()=>e.children),s=b(()=>_t(r(),$t(n.pattern,e.base||""),qn)),i=b(()=>Tn(s(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:u,path:a,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:a,params:f})));const l=[];let o;const c=b(ot(i,(u,a,f)=>{let h=a&&u.length===a.length;const y=[];for(let v=0,O=u.length;v<O;v++){const _=a&&a[v],P=u[v];f&&_&&P.route.key===_.route.key?y[v]=f[v]:(h=!1,l[v]&&l[v](),ye(N=>{l[v]=N,y[v]=In(t,y[v-1]||n,()=>c()[v+1],()=>i()[v])}))}return l.splice(u.length).forEach(v=>v()),f&&h?f:(o=y[0],y)}));return d(We,{get when(){return c()&&o},children:u=>d(_e.Provider,{value:u,get children(){return u.outlet()}})})},et=e=>{const t=xe(()=>e.children);return yt(e,{get children(){return t()}})},qn=()=>{const e=Se();return d(We,{get when(){return e.child},children:t=>d(_e.Provider,{value:t,get children(){return t.outlet()}})})};function Bn(e){const[,t]=Ft(e,["children","to","href","state"]),n=Pn(()=>e.to);return(()=>{const r=Xn.cloneNode(!0);return Ne(r,t,!1,!0),A(r,()=>e.children),x(s=>{const i=n()||e.href,l=JSON.stringify(e.state);return i!==s._v$&&g(r,"href",s._v$=i),l!==s._v$2&&g(r,"state",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r})()}function Mn(e){const t=Cn(()=>e.href);return d(Bn,yt(e,{get to(){return t()}}))}function tt(e){const t=De(),n=Nn(),{href:r,state:s}=e,i=typeof r=="function"?r({navigate:t,location:n}):r;return t(i,{replace:!0,state:s}),null}const qe=Re(),Un=["title","meta"],nt=e=>e.tag+(e.name?`.${e.name}"`:""),Yn=e=>{const t=new Map;function n(s){if(s.ref)return s.ref;let i=document.querySelector(`[data-sm="${s.id}"]`);return i?(i.tagName.toLowerCase()!==s.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(s.tag)),i.removeAttribute("data-sm")):i=document.createElement(s.tag),i}const r={addClientTag:s=>{let i=nt(s);if(Un.indexOf(s.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),c=o.length;o=[...o,s],t.set(i,o);{let u=n(s);s.ref=u,Ne(u,()=>s.props);let a=null;for(var l=c-1;l>=0;l--)if(o[l]!=null){a=o[l];break}u.parentNode!=document.head&&document.head.appendChild(u),a&&a.ref&&document.head.removeChild(a.ref)}return c}{let o=n(s);s.ref=o,Ne(o,()=>s.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(s,i)=>{const l=nt(s);if(s.ref){const o=t.get(l);if(o){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let c=i-1;c>=0;c--)o[c]!=null&&document.head.appendChild(o[c].ref)}o[i]=null,t.set(l,o)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return d(qe.Provider,{value:r,get children(){return e.children}})},Kn=(e,t)=>{const n=Gt();if(!re(qe))throw new Error("<MetaProvider /> should be in the tree");return Fn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function Fn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=re(qe);x(()=>{{let s=t(e);we(()=>n(e,s))}})}const St=e=>Kn("title",e),At=Symbol("store-raw"),me=Symbol("store-node"),zn=Symbol("store-name");function kt(e,t){let n=e[q];if(!n){Object.defineProperty(e,q,{value:n=new Proxy(e,Vn)});const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,l=r.length;i<l;i++){const o=r[i];if(s[o].get){const c=s[o].get.bind(n);Object.defineProperty(e,o,{get:c})}}}return n}function $e(e){let t;return e!=null&&typeof e=="object"&&(e[q]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function te(e,t=new Set){let n,r,s,i;if(n=e!=null&&e[At])return n;if(!$e(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)s=e[l],(r=te(s,t))!==s&&(e[l]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)i=l[c],!o[i].get&&(s=e[i],(r=te(s,t))!==s&&(e[i]=r))}return e}function Be(e){let t=e[me];return t||Object.defineProperty(e,me,{value:t={}}),t}function Ee(e,t,n){return e[t]||(e[t]=Pt(n,!0))}function Gn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===q||t===me||t===zn||(delete n.value,delete n.writable,n.get=()=>e[q][t]),n}function Ct(e){if(lt()){const t=Be(e);(t._||(t._=Pt()))()}}function Hn(e){return Ct(e),Reflect.ownKeys(e)}function Pt(e,t){const[n,r]=R(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const Vn={get(e,t,n){if(t===At)return e;if(t===q)return n;if(t===st)return Ct(e);const r=Be(e),s=r[t];let i=s?r[t]():e[t];if(t===me||t==="__proto__")return i;if(!s){const l=Object.getOwnPropertyDescriptor(e,t);lt()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=Ee(r,t,i)())}return $e(i)?kt(i):i},set(){return!0},deleteProperty(){return!0},ownKeys:Hn,getOwnPropertyDescriptor:Gn};function be(e,t,n){if(e[t]===n)return;const r=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let i=Be(e),l;(l=Ee(i,t,r))&&l.$(()=>n),Array.isArray(e)&&e.length!==s&&(l=Ee(i,"length",s))&&l.$(e.length),(l=i._)&&l.$()}function Nt(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];be(e,s,t[s])}}function Qn(e,t){if(typeof t=="function"&&(t=t(e)),t=te(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&be(e,n,s)}be(e,"length",r)}else Nt(e,t)}function Q(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const l=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)Q(e,[r[c]].concat(t),n);return}else if(o&&l==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&Q(e,[c].concat(t),n);return}else if(o&&l==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=r;for(let f=c;f<=u;f+=a)Q(e,[f].concat(t),n);return}else if(t.length>1){Q(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(s,n),i===s)||r===void 0&&i==null||(i=te(i),r===void 0||$e(s)&&$e(i)&&!Array.isArray(i)?Nt(s,i):be(e,r,i))}function Jn(...[e,t]){const n=te(e||{}),r=Array.isArray(n),s=kt(n);function i(...l){Te(()=>{r&&l.length===1?Qn(n,l[0]):Q(n,l)})}return[s,i]}const Me=Jn({settings:{glyphSize:"50",glyphSpacing:"50",strokeWidth:"0"}}),V=X('<svg><line style="transition: all 300ms; stroke: #94a3b8;" stroke-linecap="round"></line></svg>',4,!0),Zn=X('<svg viewBox="-2 -2 104 104"><line x1="50" y1="0" x2="50" y2="100" stroke-linecap="round" style="transition: all 300ms; stroke: #94a3b8;"></line></svg>'),U=100,Ce=100,er=40,tr=e=>{switch(e){case 1:return[!0,!1,!1,!1,!1];case 2:return[!1,!0,!1,!1,!1];case 3:return[!1,!1,!1,!0,!1];case 4:return[!1,!1,!1,!1,!0];case 5:return[!0,!1,!1,!1,!0];case 6:return[!1,!1,!0,!1,!1];case 7:return[!0,!1,!0,!1,!1];case 8:return[!1,!0,!0,!1,!1];case 9:return[!0,!0,!0,!1,!1];case 0:default:return[!1,!1,!1,!1,!1]}},nr=e=>e<1||e>9999?[0,0,0,0]:e.toString().padStart(4,"0").split("").map(t=>parseInt(t,10)),rr=e=>{let t=parseInt(e,10);return Number.isNaN(t)&&(t=0),`${1+t*.02}px`},rt=e=>{let t=parseInt(e,10);return Number.isNaN(t)&&(t=0),er-(t-40)*.2},ue="100% 0%",ae="0% 100%",fe=e=>{const t=b(()=>tr(e.digit));return[(()=>{const n=V.cloneNode(!0);return x(r=>{const s=e.startX,i=e.endY,l=e.endX,o=e.endY,c=t()[0]?ue:ae,u=e.strokeWidth;return s!==r._v$&&g(n,"x1",r._v$=s),i!==r._v$2&&g(n,"y1",r._v$2=i),l!==r._v$3&&g(n,"x2",r._v$3=l),o!==r._v$4&&g(n,"y2",r._v$4=o),c!==r._v$5&&g(n,"stroke-dasharray",r._v$5=c),u!==r._v$6&&g(n,"stroke-width",r._v$6=u),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return x(r=>{const s=e.startX,i=e.startY,l=e.endX,o=e.startY,c=t()[1]?ue:ae,u=e.strokeWidth;return s!==r._v$7&&g(n,"x1",r._v$7=s),i!==r._v$8&&g(n,"y1",r._v$8=i),l!==r._v$9&&g(n,"x2",r._v$9=l),o!==r._v$10&&g(n,"y2",r._v$10=o),c!==r._v$11&&g(n,"stroke-dasharray",r._v$11=c),u!==r._v$12&&g(n,"stroke-width",r._v$12=u),r},{_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return x(r=>{const s=e.endX,i=e.endY,l=e.endX,o=e.startY,c=e.strokeWidth,u=t()[2]?"translate(0)":`translate(${-1*(e.endX-e.startX)})`;return s!==r._v$13&&g(n,"x1",r._v$13=s),i!==r._v$14&&g(n,"y1",r._v$14=i),l!==r._v$15&&g(n,"x2",r._v$15=l),o!==r._v$16&&g(n,"y2",r._v$16=o),c!==r._v$17&&g(n,"stroke-width",r._v$17=c),u!==r._v$18&&g(n,"transform",r._v$18=u),r},{_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return x(r=>{const s=e.startX,i=e.endY,l=e.endX,o=e.startY,c=t()[3]?ue:ae,u=e.strokeWidth;return s!==r._v$19&&g(n,"x1",r._v$19=s),i!==r._v$20&&g(n,"y1",r._v$20=i),l!==r._v$21&&g(n,"x2",r._v$21=l),o!==r._v$22&&g(n,"y2",r._v$22=o),c!==r._v$23&&g(n,"stroke-dasharray",r._v$23=c),u!==r._v$24&&g(n,"stroke-width",r._v$24=u),r},{_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return x(r=>{const s=e.startX,i=e.startY,l=e.endX,o=e.endY,c=t()[4]?ue:ae,u=e.strokeWidth;return s!==r._v$25&&g(n,"x1",r._v$25=s),i!==r._v$26&&g(n,"y1",r._v$26=i),l!==r._v$27&&g(n,"x2",r._v$27=l),o!==r._v$28&&g(n,"y2",r._v$28=o),c!==r._v$29&&g(n,"stroke-dasharray",r._v$29=c),u!==r._v$30&&g(n,"stroke-width",r._v$30=u),r},{_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0}),n})()]},Ot=e=>{const t=b(()=>nr(e.num)),[n]=Me,r=()=>rr(n.settings.strokeWidth),s=()=>rt(n.settings.glyphSpacing),i=()=>Ce-rt(n.settings.glyphSpacing);return(()=>{const l=Zn.cloneNode(!0),o=l.firstChild,c=e.ref;return typeof c=="function"?c(l):e.ref=l,A(l,d(fe,{get digit(){return t()[3]},startX:U/2,endX:U,get startY(){return s()},endY:0,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[2]},startX:U/2,endX:0,get startY(){return s()},endY:0,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[1]},startX:U/2,endX:U,get startY(){return i()},endY:Ce,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[0]},startX:U/2,endX:0,get startY(){return i()},endY:Ce,get strokeWidth(){return r()}}),null),x(()=>g(o,"stroke-width",r())),l})()},sr=X('<div class="border-gray-200 ring-gray-200 border-2 border-opacity-0 hover:border-opacity-100 rounded-md cursor-pointer hover:ring-2 hover:-translate-y-1.5 transition-all relative"><div class="p-4"></div><span></span></div>'),ir=e=>{const{num:t}=e,[n,r]=R(!1),s=De(),[i]=Me,l=()=>`${parseInt(i.settings.glyphSize)*.5+50}px`;return(()=>{const o=sr.cloneNode(!0),c=o.firstChild,u=c.nextSibling;return o.$$click=()=>s(`/${t}`),o.addEventListener("mouseleave",()=>r(!1)),o.addEventListener("mouseenter",()=>r(!0)),o.style.setProperty("margin-left","12px"),o.style.setProperty("margin-bottom","12px"),A(c,d(Ot,{num:t})),A(u,t),x(a=>{const f=l(),h=l(),y=`text-xs absolute bottom-[5px] right-1/2 translate-x-1/2 transition-opacity ${n()?"opacity-100":"opacity-0"}`;return f!==a._v$&&o.style.setProperty("width",a._v$=f),h!==a._v$2&&o.style.setProperty("height",a._v$2=h),y!==a._v$3&&mt(u,a._v$3=y),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})()};ie(["click"]);const or=X('<div class="flex flex-wrap container mx-auto pt-10"></div>'),lr=()=>(()=>{const e=or.cloneNode(!0);return A(e,d(St,{children:"Cistercian Glyphs"}),null),A(e,d(Ht,{get each(){return Array(500).fill(0).map((t,n)=>n)},children:t=>d(ir,{get num(){return t()+1}})}),null),e})(),cr=X('<div class="px-6 py-4 mt-2 right-0 sticky top-10 w-full xl:w-2/12 lg:self-end bg-white"><h6 class="text-sm uppercase font-mono mb-2">Settings</h6><div><h6 class="text-xs uppercase font-mono mb-2">Gallery</h6><div class="flex flex-col mb-2"><label for="glyph-size">Glyph size</label><input id="glyph-size" type="range"></div><hr class="my-4"><h6 class="text-xs uppercase font-mono mb-2">Glyphs</h6><div class="flex flex-col mb-2"><label for="glyph-spacing">Glyph spacing</label><input id="glyph-spacing" type="range"></div><div class="flex flex-col"><label for="stroke-width">Stroke width</label><input id="stroke-width" type="range"></div></div></div>'),ur=()=>{const[e,t]=Me,n=()=>e.settings.glyphSize,r=()=>e.settings.glyphSpacing,s=()=>e.settings.strokeWidth;return(()=>{const i=cr.cloneNode(!0),l=i.firstChild,o=l.nextSibling,c=o.firstChild,u=c.nextSibling,a=u.firstChild,f=a.nextSibling,h=u.nextSibling,y=h.nextSibling,v=y.nextSibling,O=v.firstChild,_=O.nextSibling,P=v.nextSibling,N=P.firstChild,E=N.nextSibling;return f.$$input=I=>t("settings","glyphSize",I.currentTarget.value),_.$$input=I=>t("settings","glyphSpacing",I.currentTarget.value),E.$$input=I=>t("settings","strokeWidth",I.currentTarget.value),x(()=>f.value=n()),x(()=>_.value=r()),x(()=>E.value=s()),i})()};ie(["input"]);const ar=X('<div class="container max-w-screen-lg mx-auto pt-10"><div class="py-4 flex justify-center lg:w-1/2 mx-auto"></div><div class="max-w-2xl mx-auto my-4"></div><div class="flex justify-between lg:w-1/2 mx-auto"><button class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors">-1</button><input type="number" class="text-center text-4xl font-sans" min="1" max="10000"><button class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors">+1</button></div><div class="mt-4 flex justify-center"><button class="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 p-3 rounded-md">Export as SVG</button></div></div>'),fr=e=>{let t;const n=De(),r=()=>{n(`/${e.num-1}`,{replace:!0})},s=()=>{n(`/${e.num+1}`,{replace:!0})},i=o=>{n(`/${o.target.valueAsNumber}`,{replace:!0})},l=()=>{const o=document.createElement("canvas"),c=t.cloneNode(!0),u=new XMLSerializer().serializeToString(c),a=new Blob([u],{type:"image/svg+xml"}),f=URL.createObjectURL(a);o.width=t.getBoundingClientRect().width,o.height=t.getBoundingClientRect().height;const h=document.createElement("a");h.href=f,h.download=`cisterian-${e.num}.svg`,h.click(),URL.revokeObjectURL(f)};return(()=>{const o=ar.cloneNode(!0),c=o.firstChild,u=c.nextSibling,a=u.nextSibling,f=a.firstChild,h=f.nextSibling,y=h.nextSibling,v=a.nextSibling,O=v.firstChild;return A(o,d(St,{get children(){return["Cistercian Glyph ",vt(()=>e.num)]}}),c),A(c,d(Mn,{href:"/",children:"back to gallery"})),A(u,d(Ot,{ref(_){const P=t;typeof P=="function"?P(_):t=_},get num(){return e.num}})),f.$$click=r,h.addEventListener("change",i),y.$$click=s,O.$$click=l,x(_=>{const P=e.num<=1,N=e.num>=9999;return P!==_._v$&&(f.disabled=_._v$=P),N!==_._v$2&&(y.disabled=_._v$2=N),_},{_v$:void 0,_v$2:void 0}),x(()=>h.value=e.num),o})()},dr=()=>{const e=On(),t=()=>+e.num;return d(Vt,{get children(){return[d(ke,{get when(){return t()<1},get children(){return d(tt,{href:"/1"})}}),d(ke,{get when(){return t()>9999},get children(){return d(tt,{href:"/9999"})}}),d(ke,{get when(){return vt(()=>t()<=9999,!0)()&&t()>=1},get children(){return d(fr,{get num(){return t()}})}})]}})};ie(["click"]);const hr=X('<div><div class="py-2 px-3 bg-neutral-200 flex justify-between"><span>Cysterian Glyphs</span><button>Toggle Settings</button></div><div class="flex flex-wrap-reverse"></div></div>'),gr=()=>{const[e,t]=R(!0);return(()=>{const n=hr.cloneNode(!0),r=n.firstChild,s=r.firstChild,i=s.nextSibling,l=r.nextSibling;return i.$$click=()=>t(!e()),A(l,d(Dn,{get children(){return[d(et,{path:"/:num",component:dr}),d(et,{path:"/",component:lr})]}}),null),A(l,d(We,{get when(){return e()},get children(){return d(ur,{})}}),null),n})()};ie(["click"]);sn(()=>d(Yn,{get children(){return d(Wn,{get children(){return d(gr,{})}})}}),document.getElementById("root"));
