const It=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};It();const L={},Wt=(e,t)=>e===t,q=Symbol("solid-proxy"),st=Symbol("solid-track"),he={equals:Wt};let Xt=at;const K={},B=1,ge=2,it={owned:null,cleanups:null,context:null,owner:null},[Dt,vr]=R(!1);var m=null;let ne=null,$=null,J=null,S=null,T=null,Le=0;function ye(e,t){const n=$,r=m,s=e.length===0,i=s?it:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>We(i));m=i,$=null;try{return xe(l,!0)}finally{$=n,m=r}}function R(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,pending:K,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==K?n.pending:n.value)),je(n,s));return[ct.bind(n),r]}function qt(e,t,n){const r=Ie(e,t,!0,B);se(r)}function p(e,t,n){const r=Ie(e,t,!1,B);se(r)}function w(e,t,n){n=n?Object.assign({},he,n):he;const r=Ie(e,t,!0,0);return r.pending=K,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,se(r),ct.bind(r)}function Te(e){if(J)return e();let t;const n=J=[];try{t=e()}finally{J=null}return xe(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==K){const i=s.pending;s.pending=K,je(s,i)}}},!1),t}function j(e){let t,n=$;return $=null,t=e(),$=n,t}function ot(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const c=j(()=>t(o,s,l));return s=o,c}}function be(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function lt(){return $}function Bt(){return m}function Mt(e,t){const n=m;m=e;try{return xe(t,!0)}finally{m=n}}function Ut(e){const t=$,n=m;return Promise.resolve().then(()=>{$=t,m=n;let r;return Te(e),$=m=null,r?r.done:void 0})}function Yt(){return[Dt,Ut]}function Re(e){const t=Symbol("context");return{id:t,Provider:zt(t),defaultValue:e}}function re(e){let t;return(t=ht(m,e.id))!==void 0?t:e.defaultValue}function pe(e){const t=w(e);return w(()=>Ce(t()))}function ct(){const e=ne;if(this.sources&&(this.state||e)){const t=S;S=null,this.state===B||e?se(this):ve(this),S=t}if($){const t=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(t)):($.sources=[this],$.sourceSlots=[t]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function je(e,t,n){if(J)return e.pending===K&&J.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&xe(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];r&&ne.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?S.push(i):T.push(i),i.observers&&ft(i)),r||(i.state=B)}if(S.length>1e6)throw S=[],new Error},!1),t}function se(e){if(!e.fn)return;We(e);const t=m,n=$,r=Le;$=m=e,Kt(e,e.value,r),$=n,m=t}function Kt(e,t,n){let r;try{r=e.fn(t)}catch(s){dt(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?je(e,r):e.value=r,e.updatedAt=n)}function Ie(e,t,n,r=B,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==it&&(m.owned?m.owned.push(i):m.owned=[i]),i}function ut(e){const t=ne;if(e.state===0||t)return;if(e.state===ge||t)return ve(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Le);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===B||t)se(e);else if(e.state===ge||t){const s=S;S=null,ve(e,n[0]),S=s}}function xe(e,t){if(S)return e();let n=!1;t||(S=[]),T?n=!0:T=[],Le++;try{const r=e();return Ft(n),r}catch(r){S||(T=null),dt(r)}}function Ft(e){S&&(at(S),S=null),!e&&(T.length?Te(()=>{Xt(T),T=null}):T=null)}function at(e){for(let t=0;t<e.length;t++)ut(e[t])}function ve(e,t){const n=ne;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===B||n?s!==t&&ut(s):(s.state===ge||n)&&ve(s,t))}}function ft(e){const t=ne;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ge,r.pure?S.push(r):T.push(r),r.observers&&ft(r))}}function We(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)We(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function dt(e){throw e}function ht(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ht(e.owner,t):void 0}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function zt(e){return function(n){let r;return qt(()=>r=j(()=>(m.context={[e]:n.value},pe(()=>n.children)))),r}}const Fe=Symbol("fallback");function ze(e){for(let t=0;t<e.length;t++)e[t]()}function Gt(e,t,n={}){let r=[],s=[],i=[],l=[],o=0,c;return be(()=>ze(i)),()=>{const u=e()||[];return u[st],j(()=>{if(u.length===0)return o!==0&&(ze(i),i=[],r=[],s=[],o=0,l=[]),n.fallback&&(r=[Fe],s[0]=ye(f=>(i[0]=f,n.fallback())),o=1),s;for(r[0]===Fe&&(i[0](),i=[],r=[],s=[],o=0),c=0;c<u.length;c++)c<r.length&&r[c]!==u[c]?l[c](()=>u[c]):c>=r.length&&(s[c]=ye(a));for(;c<r.length;c++)i[c]();return o=l.length=i.length=u.length,r=u.slice(0),s=s.slice(0,o)});function a(f){i[c]=f;const[h,y]=R(u[c]);return l[c]=y,t(h,c)}}}function d(e,t){return j(()=>e(t||{}))}function ce(){return!0}const gt={get(e,t,n){return t===q?n:e.get(t)},has(e,t){return e.has(t)},set:ce,deleteProperty:ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ce,deleteProperty:ce}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)==null?{}:e}function yt(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=Ae(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Ae(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Ae(e[n])));return[...new Set(t)]}},gt)}function Ht(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),s=t.map(i=>{const l={};for(let o=0;o<i.length;o++){const c=i[o];Object.defineProperty(l,c,r[c]?r[c]:{get(){return e[c]},set(){return!0}})}return l});return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},gt)),s}let Vt=0;function Qt(){const e=L.context;return e?`${e.id}${e.count++}`:`cl-${Vt++}`}function Jt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return w(Gt(()=>e.each,e.children,t||void 0))}function Xe(e){let t=!1;const n=w(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return w(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?j(()=>s(r)):s}return e.fallback})}function Zt(e){let t=!1;const n=pe(()=>e.children),r=w(()=>{let s=n();Array.isArray(s)||(s=[s]);for(let i=0;i<s.length;i++){const l=s[i].when;if(l)return[i,l,s[i]]}return[-1]},void 0,{equals:(s,i)=>s[0]===i[0]&&(t?s[1]===i[1]:!s[1]==!i[1])&&s[2]===i[2]});return w(()=>{const[s,i,l]=r();if(s<0)return e.fallback;const o=l.children;return(t=typeof o=="function"&&o.length>0)?j(()=>o(i)):o})}function Pe(e){return e}const en=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],tn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...en]),nn=new Set(["innerHTML","textContent","innerText","children"]),rn={className:"class",htmlFor:"for"},Ge={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},sn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),on={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function vt(e,t){return w(e,void 0,t?void 0:{equals:t})}function ln(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,c=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const a=i<r?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!u){u=new Map;let f=o;for(;f<i;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let f=l,h=1,y;for(;++f<s&&f<i&&!((y=u.get(t[f]))==null||y!==a+h);)h++;if(h>a-o){const v=t[l];for(;o<a;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const He="_$DX_DELEGATE";function cn(e,t,n){let r;return ye(s=>{r=s,t===document?e():A(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function W(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ie(e,t=window.document){const n=t[He]||(t[He]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,yn))}}function g(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function un(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function mt(e,t){t==null?e.removeAttribute("class"):e.className=t}function an(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function fn(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Ve(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Ve(e,o,!0),n[o]=c)}return n}function dn(e,t,n={}){const r=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return r.cssText=t;s&&(r.cssText=void 0,n={}),t||(t={});let i,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(r.setProperty(l,i),n[l]=i);return n}function Ne(e,t,n,r){typeof t=="function"?p(s=>Je(e,t(),s,n,r)):Je(e,t,void 0,n,r)}function A(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return F(e,t,r,n);p(s=>F(e,t(),s,n),r)}function hn(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;Qe(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||F(e,t.children);continue}const o=t[l];s[l]=Qe(e,l,o,s[l],n,i)}}function gn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ve(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Qe(e,t,n,r,s,i){let l,o,c;if(t==="style")return dn(e,n,r);if(t==="classList")return fn(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),a=sn.has(u);if(!a&&r){const f=Array.isArray(r)?r[0]:r;e.removeEventListener(u,f)}(a||n)&&(an(e,u,n,a),a&&ie([u]))}else if((c=nn.has(t))||!s&&(Ge[t]||(o=tn.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?mt(e,n):l&&!o&&!c?e[gn(t)]=n:e[Ge[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&on[t.split(":")[0]];u?un(e,u,t,n):g(e,rn[t]||t,n)}return n}function yn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),L.registry&&!L.done&&(L.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Je(e,t,n={},r,s){return t||(t={}),!s&&"children"in t&&p(()=>n.children=F(e,t.children,n.children)),t.ref&&t.ref(e),p(()=>hn(e,t,r,!0,n,!0)),n}function F(e,t,n,r,s){for(L.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(L.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(L.context)return n;n=M(e,n,r)}else{if(i==="function")return p(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(Oe(o,t,n,s))return p(()=>n=F(e,o,n,r,!0)),()=>n;if(L.context){for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=M(e,n,r),l)return n}else c?n.length===0?Ze(e,o,r):ln(e,n,o):(n&&M(e),Ze(e,o));n=o}else if(t instanceof Node){if(L.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=M(e,n,r,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Oe(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=Oe(e,o,c)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=Oe(e,Array.isArray(o)?o:[o],c)||s}else e.push(o),s=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Ze(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function M(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(s,o):e.insertBefore(s,n):c&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function $t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function vn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function mn(e){try{return document.querySelector(e)}catch{return null}}function wt(e,t){const n=mn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bt(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=vn(R(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!s&&t(o),o));return n&&be(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function $n(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function wn(){return bt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),wt(window.location.hash.slice(1),n)},e=>$t(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function bn(){return bt(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const s=e.indexOf("#"),i=s>=0?e.slice(s+1):"";wt(i,n)},e=>$t(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}const pn=/^(?:[a-z0-9]+:)?\/\//i,xn=/^\/+|\/+$/g;function Z(e,t=!1){const n=e.replace(xn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(pn.test(t))return;const r=Z(e),s=n&&Z(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+Z(t,!i)}function _n(e,t){if(e==null)throw new Error(t);return e}function pt(e,t){return Z(e).replace(/\/*(\*.*)?$/g,"")+Z(t)}function Sn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Y(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function An(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),i=s.length;return l=>{const o=l.split("/").filter(Boolean),c=o.length-i;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:i?"":"/",params:{}};for(let a=0;a<i;a++){const f=s[a],h=o[a];if(f[0]===":")u.params[f.slice(1)]=h;else if(f.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${h}`}return r&&(u.params[r]=c?o.slice(-c).join("/"):""),u}}function Pn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function xt(e){const t=new Map,n=Bt();return new Proxy({},{get(r,s){return t.has(s)||Mt(n,()=>t.set(s,w(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function _t(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return _t(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const kn=100,St=Re(),_e=Re(),oe=()=>_n(re(St),"Make sure your app is wrapped in a <Router />");let ee;const Se=()=>ee||re(_e)||oe().base,Cn=e=>{const t=Se();return w(()=>t.resolvePath(e()))},Nn=e=>{const t=oe();return w(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},De=()=>oe().navigatorFactory(),On=()=>oe().location,En=()=>Se().params;function Ln(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>d(r,{}):()=>{const{element:c}=e;return c===void 0&&n?d(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return At(e.path).reduce((c,u)=>{for(const a of _t(u)){const f=pt(t,a),h=l?f:f.split("/*",1)[0];c.push({...o,originalPath:a,pattern:h,matcher:An(h,!l)})}return c},[])}function Tn(e,t=0){return{routes:e,score:Pn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function At(e){return Array.isArray(e)?e:[e]}function Pt(e,t="",n,r=[],s=[]){const i=At(e);for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=Ln(c,t,n);for(const a of u){if(r.push(a),c.children)Pt(c.children,a.pattern,n,r,s);else{const f=Tn([...r],s.length);s.push(f)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function Rn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function jn(e,t){const n=new URL("http://sar"),r=w(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=w(()=>Y(r().pathname)),i=w(()=>Y(r().search,!0)),l=w(()=>Y(r().hash)),o=w(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:xt(ot(i,()=>Sn(r())))}}function In(e,t="",n,r){const{signal:[s,i],utils:l={}}=$n(e),o=l.parsePath||(b=>b),c=l.renderPath||(b=>b),u=de("",t),a=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&i({value:u,replace:!0,scroll:!1});const[f,h]=Yt(),[y,v]=R(s().value),[O,_]=R(s().state),C=jn(y,O),N=[],E={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(b){return de(u,b)}};if(n)try{ee=E,E.data=n({data:void 0,params:{},location:C,navigate:Ue(E)})}finally{ee=void 0}function I(b,x,P){j(()=>{if(typeof x=="number"){x&&(l.go?l.go(x):console.warn("Router integration does not support relative routing"));return}const{replace:k,resolve:z,scroll:G,state:le}={replace:!1,resolve:!0,scroll:!0,...P},X=z?b.resolvePath(x):de("",x);if(X===void 0)throw new Error(`Path '${x}' is not a routable path`);if(N.length>=kn)throw new Error("Too many redirects");const D=y();if(X!==D||le!==O()){const H=N.push({value:D,replace:k,scroll:G,state:O()});h(()=>{v(X),_(le)}).then(()=>{N.length===H&&Rt({value:X,state:le})})}})}function Ue(b){return b=b||re(_e)||E,(x,P)=>I(b,x,P)}function Rt(b){const x=N[0];x&&((b.value!==x.value||b.state!==x.state)&&i({...b,replace:x.replace,scroll:x.scroll}),N.length=0)}p(()=>{const{value:b,state:x}=s();j(()=>{b!==y()&&h(()=>{v(b),_(x)})})});{let b=function(P){return P.namespaceURI==="http://www.w3.org/2000/svg"},x=function(P){if(P.defaultPrevented||P.button!==0||P.metaKey||P.altKey||P.ctrlKey||P.shiftKey)return;const k=P.composedPath().find(Ke=>Ke instanceof Node&&Ke.nodeName.toUpperCase()==="A");if(!k)return;const z=b(k),G=z?k.href.baseVal:k.href;if((z?k.target.baseVal:k.target)||!G&&!k.hasAttribute("state"))return;const X=(k.getAttribute("rel")||"").split(/\s+/);if(k.hasAttribute("download")||X&&X.includes("external"))return;const D=z?new URL(G,document.baseURI):new URL(G),H=Y(D.pathname);if(D.origin!==window.location.origin||u&&H&&!H.toLowerCase().startsWith(u.toLowerCase()))return;const jt=o(H+Y(D.search,!0)+Y(D.hash)),Ye=k.getAttribute("state");P.preventDefault(),I(E,jt,{resolve:!1,replace:k.hasAttribute("replace"),scroll:!k.hasAttribute("noscroll"),state:Ye&&JSON.parse(Ye)})};var mr=b,$r=x;document.addEventListener("click",x),be(()=>document.removeEventListener("click",x))}return{base:E,out:a,location:C,isRouting:f,renderPath:c,parsePath:o,navigatorFactory:Ue}}function Wn(e,t,n,r){const{base:s,location:i,navigatorFactory:l}=e,{pattern:o,element:c,preload:u,data:a}=r().route,f=w(()=>r().path),h=xt(()=>r().params);u&&u();const y={parent:t,pattern:o,get child(){return n()},path:f,params:h,data:t.data,outlet:c,resolvePath(v){return de(s.path(),v,f())}};if(a)try{ee=y,y.data=a({data:t.data,params:h,location:i,navigate:l(y)})}finally{ee=void 0}return y}const Xn=W("<a></a>"),Dn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||wn(),o=In(l,r,s);return d(St.Provider,{value:o,get children(){return e.children}})},qn=e=>{const t=oe(),n=Se(),r=pe(()=>e.children),s=w(()=>Pt(r(),pt(n.pattern,e.base||""),Bn)),i=w(()=>Rn(s(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:u,path:a,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:a,params:f})));const l=[];let o;const c=w(ot(i,(u,a,f)=>{let h=a&&u.length===a.length;const y=[];for(let v=0,O=u.length;v<O;v++){const _=a&&a[v],C=u[v];f&&_&&C.route.key===_.route.key?y[v]=f[v]:(h=!1,l[v]&&l[v](),ye(N=>{l[v]=N,y[v]=Wn(t,y[v-1]||n,()=>c()[v+1],()=>i()[v])}))}return l.splice(u.length).forEach(v=>v()),f&&h?f:(o=y[0],y)}));return d(Xe,{get when(){return c()&&o},children:u=>d(_e.Provider,{value:u,get children(){return u.outlet()}})})},et=e=>{const t=pe(()=>e.children);return yt(e,{get children(){return t()}})},Bn=()=>{const e=Se();return d(Xe,{get when(){return e.child},children:t=>d(_e.Provider,{value:t,get children(){return t.outlet()}})})};function Mn(e){const[,t]=Ht(e,["children","to","href","state"]),n=Nn(()=>e.to);return(()=>{const r=Xn.cloneNode(!0);return Ne(r,t,!1,!0),A(r,()=>e.children),p(s=>{const i=n()||e.href,l=JSON.stringify(e.state);return i!==s._v$&&g(r,"href",s._v$=i),l!==s._v$2&&g(r,"state",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r})()}function Un(e){const t=Cn(()=>e.href);return d(Mn,yt(e,{get to(){return t()}}))}function tt(e){const t=De(),n=On(),{href:r,state:s}=e,i=typeof r=="function"?r({navigate:t,location:n}):r;return t(i,{replace:!0,state:s}),null}const qe=Re(),Yn=["title","meta"],nt=e=>e.tag+(e.name?`.${e.name}"`:""),Kn=e=>{const t=new Map;function n(s){if(s.ref)return s.ref;let i=document.querySelector(`[data-sm="${s.id}"]`);return i?(i.tagName.toLowerCase()!==s.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(s.tag)),i.removeAttribute("data-sm")):i=document.createElement(s.tag),i}const r={addClientTag:s=>{let i=nt(s);if(Yn.indexOf(s.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),c=o.length;o=[...o,s],t.set(i,o);{let u=n(s);s.ref=u,Ne(u,()=>s.props);let a=null;for(var l=c-1;l>=0;l--)if(o[l]!=null){a=o[l];break}u.parentNode!=document.head&&document.head.appendChild(u),a&&a.ref&&document.head.removeChild(a.ref)}return c}{let o=n(s);s.ref=o,Ne(o,()=>s.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(s,i)=>{const l=nt(s);if(s.ref){const o=t.get(l);if(o){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let c=i-1;c>=0;c--)o[c]!=null&&document.head.appendChild(o[c].ref)}o[i]=null,t.set(l,o)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return d(qe.Provider,{value:r,get children(){return e.children}})},Fn=(e,t)=>{const n=Qt();if(!re(qe))throw new Error("<MetaProvider /> should be in the tree");return zn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function zn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=re(qe);p(()=>{{let s=t(e);be(()=>n(e,s))}})}const kt=e=>Fn("title",e),Ct=Symbol("store-raw"),me=Symbol("store-node"),Gn=Symbol("store-name");function Nt(e,t){let n=e[q];if(!n){Object.defineProperty(e,q,{value:n=new Proxy(e,Qn)});const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,l=r.length;i<l;i++){const o=r[i];if(s[o].get){const c=s[o].get.bind(n);Object.defineProperty(e,o,{get:c})}}}return n}function $e(e){let t;return e!=null&&typeof e=="object"&&(e[q]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function te(e,t=new Set){let n,r,s,i;if(n=e!=null&&e[Ct])return n;if(!$e(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)s=e[l],(r=te(s,t))!==s&&(e[l]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)i=l[c],!o[i].get&&(s=e[i],(r=te(s,t))!==s&&(e[i]=r))}return e}function Be(e){let t=e[me];return t||Object.defineProperty(e,me,{value:t={}}),t}function Ee(e,t,n){return e[t]||(e[t]=Et(n,!0))}function Hn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===q||t===me||t===Gn||(delete n.value,delete n.writable,n.get=()=>e[q][t]),n}function Ot(e){if(lt()){const t=Be(e);(t._||(t._=Et()))()}}function Vn(e){return Ot(e),Reflect.ownKeys(e)}function Et(e,t){const[n,r]=R(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const Qn={get(e,t,n){if(t===Ct)return e;if(t===q)return n;if(t===st)return Ot(e);const r=Be(e),s=r[t];let i=s?r[t]():e[t];if(t===me||t==="__proto__")return i;if(!s){const l=Object.getOwnPropertyDescriptor(e,t);lt()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=Ee(r,t,i)())}return $e(i)?Nt(i):i},set(){return!0},deleteProperty(){return!0},ownKeys:Vn,getOwnPropertyDescriptor:Hn};function we(e,t,n){if(e[t]===n)return;const r=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let i=Be(e),l;(l=Ee(i,t,r))&&l.$(()=>n),Array.isArray(e)&&e.length!==s&&(l=Ee(i,"length",s))&&l.$(e.length),(l=i._)&&l.$()}function Lt(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];we(e,s,t[s])}}function Jn(e,t){if(typeof t=="function"&&(t=t(e)),t=te(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&we(e,n,s)}we(e,"length",r)}else Lt(e,t)}function Q(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const l=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)Q(e,[r[c]].concat(t),n);return}else if(o&&l==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&Q(e,[c].concat(t),n);return}else if(o&&l==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=r;for(let f=c;f<=u;f+=a)Q(e,[f].concat(t),n);return}else if(t.length>1){Q(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(s,n),i===s)||r===void 0&&i==null||(i=te(i),r===void 0||$e(s)&&$e(i)&&!Array.isArray(i)?Lt(s,i):we(e,r,i))}function Zn(...[e,t]){const n=te(e||{}),r=Array.isArray(n),s=Nt(n);function i(...l){Te(()=>{r&&l.length===1?Jn(n,l[0]):Q(n,l)})}return[s,i]}const Me=Zn({settings:{glyphSize:"50",glyphSpacing:"50",strokeWidth:"0"}}),V=W('<svg><line style="transition: all 300ms; stroke: #94a3b8;" stroke-linecap="round"></line></svg>',4,!0),er=W('<svg viewBox="-2 -2 104 104"><line x1="50" y1="0" x2="50" y2="100" stroke-linecap="round" style="transition: all 300ms; stroke: #94a3b8;"></line></svg>'),U=100,ke=100,tr=40,nr=e=>{switch(e){case 1:return[!0,!1,!1,!1,!1];case 2:return[!1,!0,!1,!1,!1];case 3:return[!1,!1,!1,!0,!1];case 4:return[!1,!1,!1,!1,!0];case 5:return[!0,!1,!1,!1,!0];case 6:return[!1,!1,!0,!1,!1];case 7:return[!0,!1,!0,!1,!1];case 8:return[!1,!0,!0,!1,!1];case 9:return[!0,!0,!0,!1,!1];case 0:default:return[!1,!1,!1,!1,!1]}},rr=e=>e<1||e>9999?[0,0,0,0]:e.toString().padStart(4,"0").split("").map(t=>parseInt(t,10)),sr=e=>{let t=parseInt(e,10);return Number.isNaN(t)&&(t=0),`${1+t*.02}px`},rt=e=>{let t=parseInt(e,10);return Number.isNaN(t)&&(t=0),tr-(t-40)*.2},ue="100% 0%",ae="0% 100%",fe=e=>{const t=w(()=>nr(e.digit));return[(()=>{const n=V.cloneNode(!0);return p(r=>{const s=e.startX,i=e.endY,l=e.endX,o=e.endY,c=t()[0]?ue:ae,u=e.strokeWidth;return s!==r._v$&&g(n,"x1",r._v$=s),i!==r._v$2&&g(n,"y1",r._v$2=i),l!==r._v$3&&g(n,"x2",r._v$3=l),o!==r._v$4&&g(n,"y2",r._v$4=o),c!==r._v$5&&g(n,"stroke-dasharray",r._v$5=c),u!==r._v$6&&g(n,"stroke-width",r._v$6=u),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return p(r=>{const s=e.startX,i=e.startY,l=e.endX,o=e.startY,c=t()[1]?ue:ae,u=e.strokeWidth;return s!==r._v$7&&g(n,"x1",r._v$7=s),i!==r._v$8&&g(n,"y1",r._v$8=i),l!==r._v$9&&g(n,"x2",r._v$9=l),o!==r._v$10&&g(n,"y2",r._v$10=o),c!==r._v$11&&g(n,"stroke-dasharray",r._v$11=c),u!==r._v$12&&g(n,"stroke-width",r._v$12=u),r},{_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return p(r=>{const s=e.endX,i=e.endY,l=e.endX,o=e.startY,c=e.strokeWidth,u=t()[2]?"translate(0)":`translate(${-1*(e.endX-e.startX)})`;return s!==r._v$13&&g(n,"x1",r._v$13=s),i!==r._v$14&&g(n,"y1",r._v$14=i),l!==r._v$15&&g(n,"x2",r._v$15=l),o!==r._v$16&&g(n,"y2",r._v$16=o),c!==r._v$17&&g(n,"stroke-width",r._v$17=c),u!==r._v$18&&g(n,"transform",r._v$18=u),r},{_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return p(r=>{const s=e.startX,i=e.endY,l=e.endX,o=e.startY,c=t()[3]?ue:ae,u=e.strokeWidth;return s!==r._v$19&&g(n,"x1",r._v$19=s),i!==r._v$20&&g(n,"y1",r._v$20=i),l!==r._v$21&&g(n,"x2",r._v$21=l),o!==r._v$22&&g(n,"y2",r._v$22=o),c!==r._v$23&&g(n,"stroke-dasharray",r._v$23=c),u!==r._v$24&&g(n,"stroke-width",r._v$24=u),r},{_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0}),n})(),(()=>{const n=V.cloneNode(!0);return p(r=>{const s=e.startX,i=e.startY,l=e.endX,o=e.endY,c=t()[4]?ue:ae,u=e.strokeWidth;return s!==r._v$25&&g(n,"x1",r._v$25=s),i!==r._v$26&&g(n,"y1",r._v$26=i),l!==r._v$27&&g(n,"x2",r._v$27=l),o!==r._v$28&&g(n,"y2",r._v$28=o),c!==r._v$29&&g(n,"stroke-dasharray",r._v$29=c),u!==r._v$30&&g(n,"stroke-width",r._v$30=u),r},{_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0}),n})()]},Tt=e=>{const t=w(()=>rr(e.num)),[n]=Me,r=()=>sr(n.settings.strokeWidth),s=()=>rt(n.settings.glyphSpacing),i=()=>ke-rt(n.settings.glyphSpacing);return(()=>{const l=er.cloneNode(!0),o=l.firstChild,c=e.ref;return typeof c=="function"?c(l):e.ref=l,A(l,d(fe,{get digit(){return t()[3]},startX:U/2,endX:U,get startY(){return s()},endY:0,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[2]},startX:U/2,endX:0,get startY(){return s()},endY:0,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[1]},startX:U/2,endX:U,get startY(){return i()},endY:ke,get strokeWidth(){return r()}}),null),A(l,d(fe,{get digit(){return t()[0]},startX:U/2,endX:0,get startY(){return i()},endY:ke,get strokeWidth(){return r()}}),null),p(()=>g(o,"stroke-width",r())),l})()},ir=W('<div class="border-gray-200 ring-gray-200 border-2 border-opacity-0 hover:border-opacity-100 rounded-md cursor-pointer hover:ring-2 hover:-translate-y-1.5 transition-all relative"><div class="p-4"></div><span></span></div>'),or=e=>{const{num:t}=e,[n,r]=R(!1),s=De(),[i]=Me,l=()=>`${parseInt(i.settings.glyphSize)*.5+50}px`;return(()=>{const o=ir.cloneNode(!0),c=o.firstChild,u=c.nextSibling;return o.$$click=()=>s(`/${t}`),o.addEventListener("mouseleave",()=>r(!1)),o.addEventListener("mouseenter",()=>r(!0)),o.style.setProperty("margin-left","12px"),o.style.setProperty("margin-bottom","12px"),A(c,d(Tt,{num:t})),A(u,t),p(a=>{const f=l(),h=l(),y=`text-xs absolute bottom-[5px] right-1/2 translate-x-1/2 transition-opacity ${n()?"opacity-100":"opacity-0"}`;return f!==a._v$&&o.style.setProperty("width",a._v$=f),h!==a._v$2&&o.style.setProperty("height",a._v$2=h),y!==a._v$3&&mt(u,a._v$3=y),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})()};ie(["click"]);const lr=W('<div class="flex flex-wrap container mx-auto pt-10"></div>'),cr=()=>(()=>{const e=lr.cloneNode(!0);return A(e,d(kt,{children:"Cistercian Glyphs"}),null),A(e,d(Jt,{get each(){return Array(500).fill(0).map((t,n)=>n)},children:t=>d(or,{get num(){return t()+1}})}),null),e})(),ur=W('<div class="px-6 py-4 mt-2 right-0 sticky top-10 w-full xl:w-2/12 lg:self-end bg-white"><h6 class="text-sm uppercase font-mono mb-2">Settings</h6><div><h6 class="text-xs uppercase font-mono mb-2">Gallery</h6><div class="flex flex-col mb-2"><label for="glyph-size">Glyph size</label><input id="glyph-size" type="range"></div><hr class="my-4"><h6 class="text-xs uppercase font-mono mb-2">Glyphs</h6><div class="flex flex-col mb-2"><label for="glyph-spacing">Glyph spacing</label><input id="glyph-spacing" type="range"></div><div class="flex flex-col"><label for="stroke-width">Stroke width</label><input id="stroke-width" type="range"></div></div></div>'),ar=()=>{const[e,t]=Me,n=()=>e.settings.glyphSize,r=()=>e.settings.glyphSpacing,s=()=>e.settings.strokeWidth;return(()=>{const i=ur.cloneNode(!0),l=i.firstChild,o=l.nextSibling,c=o.firstChild,u=c.nextSibling,a=u.firstChild,f=a.nextSibling,h=u.nextSibling,y=h.nextSibling,v=y.nextSibling,O=v.firstChild,_=O.nextSibling,C=v.nextSibling,N=C.firstChild,E=N.nextSibling;return f.$$input=I=>t("settings","glyphSize",I.currentTarget.value),_.$$input=I=>t("settings","glyphSpacing",I.currentTarget.value),E.$$input=I=>t("settings","strokeWidth",I.currentTarget.value),p(()=>f.value=n()),p(()=>_.value=r()),p(()=>E.value=s()),i})()};ie(["input"]);const fr=W('<div class="container max-w-screen-lg mx-auto pt-10"><div class="py-4 flex justify-center lg:w-1/2 mx-auto"></div><div class="max-w-2xl mx-auto my-4"></div><div class="flex justify-between lg:w-1/2 mx-auto"><button class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors">-1</button><input type="number" class="text-center text-4xl font-sans" min="1" max="10000"><button class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors">+1</button></div><div class="mt-4 flex justify-center"><button class="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 p-3 rounded-md">Export as SVG</button></div></div>'),dr=e=>{let t;const n=De(),r=()=>{n(`/${e.num-1}`,{replace:!0})},s=()=>{n(`/${e.num+1}`,{replace:!0})},i=o=>{n(`/${o.target.valueAsNumber}`,{replace:!0})},l=()=>{const o=document.createElement("canvas"),c=t.cloneNode(!0),u=new XMLSerializer().serializeToString(c),a=new Blob([u],{type:"image/svg+xml"}),f=URL.createObjectURL(a);o.width=t.getBoundingClientRect().width,o.height=t.getBoundingClientRect().height;const h=document.createElement("a");h.href=f,h.download=`cisterian-${e.num}.svg`,h.click(),URL.revokeObjectURL(f)};return(()=>{const o=fr.cloneNode(!0),c=o.firstChild,u=c.nextSibling,a=u.nextSibling,f=a.firstChild,h=f.nextSibling,y=h.nextSibling,v=a.nextSibling,O=v.firstChild;return A(o,d(kt,{get children(){return["Cistercian Glyph ",vt(()=>e.num)]}}),c),A(c,d(Un,{href:"/",children:"back to gallery"})),A(u,d(Tt,{ref(_){const C=t;typeof C=="function"?C(_):t=_},get num(){return e.num}})),f.$$click=r,h.addEventListener("change",i),y.$$click=s,O.$$click=l,p(_=>{const C=e.num<=1,N=e.num>=9999;return C!==_._v$&&(f.disabled=_._v$=C),N!==_._v$2&&(y.disabled=_._v$2=N),_},{_v$:void 0,_v$2:void 0}),p(()=>h.value=e.num),o})()},hr=()=>{const e=En(),t=()=>+e.num;return d(Zt,{get children(){return[d(Pe,{get when(){return t()<1},get children(){return d(tt,{href:"/1"})}}),d(Pe,{get when(){return t()>9999},get children(){return d(tt,{href:"/9999"})}}),d(Pe,{get when(){return vt(()=>t()<=9999,!0)()&&t()>=1},get children(){return d(dr,{get num(){return t()}})}})]}})};ie(["click"]);const gr=W('<div><div class="py-2 px-3 bg-neutral-200 flex justify-between"><span>Cysterian Glyphs</span><button>Toggle Settings</button></div><div class="flex flex-wrap-reverse"></div></div>'),yr=()=>{const[e,t]=R(!0);return(()=>{const n=gr.cloneNode(!0),r=n.firstChild,s=r.firstChild,i=s.nextSibling,l=r.nextSibling;return i.$$click=()=>t(!e()),A(l,d(qn,{get children(){return[d(et,{path:"/:num",component:hr}),d(et,{path:"/",component:cr})]}}),null),A(l,d(Xe,{get when(){return e()},get children(){return d(ar,{})}}),null),n})()};ie(["click"]);cn(()=>d(Kn,{get children(){return d(Dn,{get source(){return bn()},get children(){return d(yr,{})}})}}),document.getElementById("root"));