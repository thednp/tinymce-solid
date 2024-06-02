import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises as promises$1 } from 'node:fs';
import * as node_path$1 from 'node:path';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'vinxi/lib/invariant';
import { join as join$1, virtualId, handlerModule } from 'vinxi/lib/path';
import { sharedConfig, lazy, createComponent, createContext as createContext$1, createUniqueId, useContext, createRenderEffect, onCleanup, createSignal, createEffect, mergeProps as mergeProps$1, createMemo, startTransition, Suspense, ErrorBoundary, catchError, Show, splitProps, children, getOwner, untrack, on as on$2, createRoot, runWithOwner, resetErrorBoundaries, createComputed, onMount, DEV } from 'solid-js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, spread, useAssets, ssrHydrationKey, ssrAttribute, renderToStream, NoHydration, HydrationScript, Hydration, delegateEvents, Dynamic, Portal } from 'solid-js/web';
import { provideRequestEvent } from 'solid-js/web/storage';
import Jr$1 from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$4=Object.defineProperty;var o=(e,t)=>l$4(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var ms$1=Object.defineProperty;var u$2=(c,l)=>ms$1(c,"name",{value:l,configurable:!0});var Po$1=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D$2=(c,l,d)=>(Po$1(c,l,"read from private field"),d?d.call(c):l.get(c)),ye$1=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne$1=(c,l,d,y)=>(Po$1(c,l,"write to private field"),l.set(c,d),d);var Pe$1,bt,ot$1,Zt$2,Ue$2,mt$1,yt$1,gt$1,oe$2,_t$2,Me$1,xe$2,St$2;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6$1,require$$6=require$$7,require$$0=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u$2(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=!1;const R=d[0]||"text/plain";let w=R;for(let F=1;F<d.length;F++)d[F]==="base64"?b=!0:d[F]&&(w+=`;${d[F]}`,d[F].indexOf("charset=")===0&&(y=d[F].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const v=b?"base64":"ascii",I=unescape(c.substring(l+1)),B=Buffer.from(I,v);return B.type=R,B.typeFull=w,B.charset=y,B}u$2(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(_commonjsHelpers.commonjsGlobal,function(d){function y(){}u$2(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$2(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u$2(w,"setFunctionName");const v=Promise,I=Promise.prototype.then,B=Promise.reject.bind(v);function F(n){return new v(n)}u$2(F,"newPromise");function k(n){return F(o=>o(n))}u$2(k,"promiseResolvedWith");function T(n){return B(n)}u$2(T,"promiseRejectedWith");function $(n,o,a){return I.call(n,o,a)}u$2($,"PerformPromiseThen");function E(n,o,a){$($(n,o,a),void 0,R);}u$2(E,"uponPromise");function K(n,o){E(n,o);}u$2(K,"uponFulfillment");function U(n,o){E(n,void 0,o);}u$2(U,"uponRejection");function N(n,o,a){return $(n,o,a)}u$2(N,"transformPromiseWith");function J(n){$(n,void 0,R);}u$2(J,"setPromiseIsHandledToTrue");let ge=u$2(n=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const o=k(void 0);ge=u$2(a=>$(o,a),"_queueMicrotask");}return ge(n)},"_queueMicrotask");function M(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u$2(M,"reflectCall");function H(n,o,a){try{return k(M(n,o,a))}catch(p){return T(p)}}u$2(H,"promiseCall");const G=16384,Dr=class Dr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===G-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===G&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u$2(Dr,"SimpleQueue");let Q=Dr;const wt=Symbol("[[AbortSteps]]"),un=Symbol("[[ErrorSteps]]"),er=Symbol("[[CancelSteps]]"),tr=Symbol("[[PullSteps]]"),rr=Symbol("[[ReleaseSteps]]");function ln(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?vo(n):fn(n,o._storedError);}u$2(ln,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u$2(nr,"ReadableStreamReaderGenericCancel");function _e(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Eo(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u$2(_e,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u$2(Rt,"readerLockException");function or(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u$2(or,"defaultReaderClosedPromiseInitialize");function fn(n,o){or(n),ir(n,o);}u$2(fn,"defaultReaderClosedPromiseInitializeAsRejected");function vo(n){or(n),cn(n);}u$2(vo,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$2(ir,"defaultReaderClosedPromiseReject");function Eo(n,o){fn(n,o);}u$2(Eo,"defaultReaderClosedPromiseResetToRejected");function cn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$2(cn,"defaultReaderClosedPromiseResolve");const dn=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Ao=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Bo(n){return typeof n=="object"||typeof n=="function"}u$2(Bo,"isDictionary");function ce(n,o){if(n!==void 0&&!Bo(n))throw new TypeError(`${o} is not an object.`)}u$2(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u$2(ee,"assertFunction");function qo(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$2(qo,"isObject");function hn(n,o){if(!qo(n))throw new TypeError(`${o} is not an object.`)}u$2(hn,"assertObject");function Se(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u$2(Se,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u$2(sr,"assertRequiredField");function ar(n){return Number(n)}u$2(ar,"convertUnrestrictedDouble");function pn(n){return n===0?0:n}u$2(pn,"censorNegativeZero");function ko(n){return pn(Ao(n))}u$2(ko,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=pn(g),!dn(g))throw new TypeError(`${o} is not a finite number`);if(g=ko(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !dn(g)||g===0?0:g}u$2(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u$2(lr,"assertReadableStream");function Ne(n){return new de(n)}u$2(Ne,"AcquireReadableStreamDefaultReader");function bn(n,o){n._reader._readRequests.push(o);}u$2(bn,"ReadableStreamAddReadRequest");function fr(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u$2(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u$2(Tt,"ReadableStreamGetNumReadRequests");function mn(n){const o=n._reader;return !(o===void 0||!ve(o))}u$2(mn,"ReadableStreamHasDefaultReader");const Mr=class Mr{constructor(o){if(Se(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ln(this,o),this._readRequests=new Q;}get closed(){return ve(this)?this._closedPromise:T(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Ct("cancel"))}read(){if(!ve(this))return T(Ct("read"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let o,a;const p=F((_,S)=>{o=_,a=S;});return it(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&Wo(this);}};u$2(Mr,"ReadableStreamDefaultReader");let de=Mr;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(de.prototype.cancel,"cancel"),w(de.prototype.read,"read"),w(de.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u$2(ve,"IsReadableStreamDefaultReader");function it(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u$2(it,"ReadableStreamDefaultReaderRead");function Wo(n){_e(n);const o=new TypeError("Reader was released");yn(n,o);}u$2(Wo,"ReadableStreamDefaultReaderRelease");function yn(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$2(yn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u$2(Ct,"defaultReaderBrandCheckException");const Oo=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),xr=class xr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u$2(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?N(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u$2(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?N(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const g=F((S,C)=>{a=S,p=C;});return it(o,{_chunkSteps:S=>{this._ongoingPromise=void 0,ge(()=>a({value:S,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),a({value:void 0,done:!0});},_errorSteps:S=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),p(S);}}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return _e(a),N(p,()=>({value:o,done:!0}))}return _e(a),k({value:o,done:!0})}};u$2(xr,"ReadableStreamAsyncIteratorImpl");let Pt=xr;const gn={next(){return _n(this)?this._asyncIteratorImpl.next():T(Sn("next"))},return(n){return _n(this)?this._asyncIteratorImpl.return(n):T(Sn("return"))}};Object.setPrototypeOf(gn,Oo);function zo(n,o){const a=Ne(n),p=new Pt(a,o),g=Object.create(gn);return g._asyncIteratorImpl=p,g}u$2(zo,"AcquireReadableStreamAsyncIterator");function _n(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u$2(_n,"IsReadableStreamAsyncIterator");function Sn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u$2(Sn,"streamAsyncIteratorBrandCheckException");const wn=Number.isNaN||function(n){return n!==n};var cr,dr,hr;function st(n){return n.slice()}u$2(st,"CreateArrayFromList");function Rn(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u$2(Rn,"CopyDataBlockBytes");let we=u$2(n=>(typeof n.transfer=="function"?we=u$2(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=u$2(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):we=u$2(o=>o,"TransferArrayBuffer"),we(n)),"TransferArrayBuffer"),Ee=u$2(n=>(typeof n.detached=="boolean"?Ee=u$2(o=>o.detached,"IsDetachedBuffer"):Ee=u$2(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function Tn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return Rn(g,0,n,o,p),g}u$2(Tn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u$2(vt,"GetMethod");function Fo(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u$2(Fo,"CreateAsyncFromSyncIterator");const pr=(hr=(cr=Symbol.asyncIterator)!==null&&cr!==void 0?cr:(dr=Symbol.for)===null||dr===void 0?void 0:dr.call(Symbol,"Symbol.asyncIterator"))!==null&&hr!==void 0?hr:"@@asyncIterator";function Cn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,pr),a===void 0){const _=vt(n,Symbol.iterator),S=Cn(n,"sync",_);return Fo(S)}}else a=vt(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=M(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:!1}}u$2(Cn,"GetIterator");function Io(n){const o=M(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u$2(Io,"IteratorNext");function jo(n){return !!n.done}u$2(jo,"IteratorComplete");function Lo(n){return n.value}u$2(Lo,"IteratorValue");function $o(n){return !(typeof n!="number"||wn(n)||n<0)}u$2($o,"IsNonNegativeNumber");function Pn(n){const o=Tn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u$2(Pn,"CloneAsUint8Array");function br(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u$2(br,"DequeueValue");function mr(n,o,a){if(!$o(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u$2(mr,"EnqueueValueWithSize");function Do(n){return n._queue.peek().value}u$2(Do,"PeekQueueValue");function Ae(n){n._queue=new Q,n._queueTotalSize=0;}u$2(Ae,"ResetQueue");function vn(n){return n===DataView}u$2(vn,"isDataViewConstructor");function Mo(n){return vn(n.constructor)}u$2(Mo,"isDataView");function xo(n){return vn(n)?1:n.BYTES_PER_ELEMENT}u$2(xo,"arrayBufferViewElementSize");const Ur=class Ur{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!yr(this))throw Rr("view");return this._view}respond(o){if(!yr(this))throw Rr("respond");if(Se(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!yr(this))throw Rr("respondWithNewView");if(Se(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u$2(Ur,"ReadableStreamBYOBRequest");let Re=Ur;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),w(Re.prototype.respond,"respond"),w(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw ut("byobRequest");return wr(this)}get desiredSize(){if(!Oe(this))throw ut("desiredSize");return In(this)}close(){if(!Oe(this))throw ut("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);at(this);}enqueue(o){if(!Oe(this))throw ut("enqueue");if(Se(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw ut("error");te(this,o);}[er](o){En(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Fn(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}bn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}};u$2(Nr,"ReadableByteStreamController");let ie=Nr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ie.prototype.close,"close"),w(ie.prototype.enqueue,"enqueue"),w(ie.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u$2(Oe,"IsReadableByteStreamController");function yr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof Re}u$2(yr,"IsReadableStreamBYOBRequest");function ze(n){if(!Qo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u$2(ze,"ReadableByteStreamControllerCallPullIfNeeded");function En(n){_r(n),n._pendingPullIntos=new Q;}u$2(En,"ReadableByteStreamControllerClearPendingPullIntos");function gr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=An(o);o.readerType==="default"?fr(n,p,a):Xo(n,p,a);}u$2(gr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function An(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u$2(An,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u$2(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function Bn(n,o,a,p){let g;try{g=Tn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,g,0,p);}u$2(Bn,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function qn(n,o){o.bytesFilled>0&&Bn(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u$2(qn,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function kn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=!1;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=!0);const q=n._queue;for(;g>0;){const P=q.peek(),W=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;Rn(o.buffer,O,P.buffer,P.byteOffset,W),P.byteLength===W?q.shift():(P.byteOffset+=W,P.byteLength-=W),n._queueTotalSize-=W,Wn(n,W,o),g-=W;}return _}u$2(kn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Wn(n,o,a){a.bytesFilled+=o;}u$2(Wn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function On(n){n._queueTotalSize===0&&n._closeRequested?(At(n),pt(n._controlledReadableByteStream)):ze(n);}u$2(On,"ReadableByteStreamControllerHandleQueueDrain");function _r(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u$2(_r,"ReadableByteStreamControllerInvalidateBYOBRequest");function Sr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();kn(n,o)&&(He(n),gr(n._controlledReadableByteStream,o));}}u$2(Sr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Uo(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Fn(n,a);}}u$2(Uo,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function No(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=xo(_),{byteOffset:C,byteLength:q}=o,P=a*S;let W;try{W=we(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),$n(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(kn(n,O)){const j=An(O);On(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),$n(g,p),ze(n);}u$2(No,"ReadableByteStreamControllerPullInto");function Ho(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(Tr(a))for(;Dn(a)>0;){const p=He(n);gr(a,p);}}u$2(Ho,"ReadableByteStreamControllerRespondInClosedState");function Vo(n,o,a){if(Wn(n,o,a),a.readerType==="none"){qn(n,a),Sr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Bn(n,a.buffer,g-p,p);}a.bytesFilled-=p,gr(n._controlledReadableByteStream,a),Sr(n);}u$2(Vo,"ReadableByteStreamControllerRespondInReadableState");function zn(n,o){const a=n._pendingPullIntos.peek();_r(n),n._controlledReadableByteStream._state==="closed"?Ho(n,a):Vo(n,o,a),ze(n);}u$2(zn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u$2(He,"ReadableByteStreamControllerShiftPendingPullInto");function Qo(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(mn(o)&&Tt(o)>0||Tr(o)&&Dn(o)>0||In(n)>0)}u$2(Qo,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$2(At,"ReadableByteStreamControllerClearAlgorithms");function at(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),pt(o);}}u$2(at,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=we(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(Ee(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");_r(n),C.buffer=we(C.buffer),C.readerType==="none"&&qn(n,C);}if(mn(a))if(Uo(n),Tt(a)===0)Et(n,S,g,_);else {n._pendingPullIntos.length>0&&He(n);const C=new Uint8Array(S,g,_);fr(a,C,!1);}else Tr(a)?(Et(n,S,g,_),Sr(n)):Et(n,S,g,_);ze(n);}u$2(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(En(n),Ae(n),At(n),fo(a,o));}u$2(te,"ReadableByteStreamControllerError");function Fn(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,On(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u$2(Fn,"ReadableByteStreamControllerFillReadRequestFromQueue");function wr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Re.prototype);Yo(p,n,a),n._byobRequest=p;}return n._byobRequest}u$2(wr,"ReadableByteStreamControllerGetBYOBRequest");function In(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$2(In,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=we(a.buffer),zn(n,o);}u$2(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=we(o.buffer),zn(n,g);}u$2(kt,"ReadableByteStreamControllerRespondWithNewView");function jn(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,ze(o),null),q=>(te(o,q),null));}u$2(jn,"SetUpReadableByteStreamController");function Go(n,o,a){const p=Object.create(ie.prototype);let g,_,S;o.start!==void 0?g=u$2(()=>o.start(p),"startAlgorithm"):g=u$2(()=>{},"startAlgorithm"),o.pull!==void 0?_=u$2(()=>o.pull(p),"pullAlgorithm"):_=u$2(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u$2(q=>o.cancel(q),"cancelAlgorithm"):S=u$2(()=>k(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");jn(n,p,g,_,S,a,C);}u$2(Go,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Yo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u$2(Yo,"SetUpReadableStreamBYOBRequest");function Rr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u$2(Rr,"byobRequestBrandCheckException");function ut(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u$2(ut,"byteStreamControllerBrandCheckException");function Zo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Ko(a,`${o} has member 'mode' that`)}}u$2(Zo,"convertReaderOptions");function Ko(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u$2(Ko,"convertReadableStreamReaderMode");function Jo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u$2(Jo,"convertByobReadOptions");function Ln(n){return new he(n)}u$2(Ln,"AcquireReadableStreamBYOBReader");function $n(n,o){n._reader._readIntoRequests.push(o);}u$2($n,"ReadableStreamAddReadIntoRequest");function Xo(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u$2(Xo,"ReadableStreamFulfillReadIntoRequest");function Dn(n){return n._reader._readIntoRequests.length}u$2(Dn,"ReadableStreamGetNumReadIntoRequests");function Tr(n){const o=n._reader;return !(o===void 0||!Fe(o))}u$2(Tr,"ReadableStreamHasBYOBReader");const Hr=class Hr{constructor(o){if(Se(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");ln(this,o),this._readIntoRequests=new Q;}get closed(){return Fe(this)?this._closedPromise:T(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Wt("cancel"))}read(o,a={}){if(!Fe(this))return T(Wt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=Jo(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(Mo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let _,S;const C=F((P,W)=>{_=P,S=W;});return Mn(this,o,g,{_chunkSteps:P=>_({value:P,done:!1}),_closeSteps:P=>_({value:P,done:!0}),_errorSteps:P=>S(P)}),C}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&ei(this);}};u$2(Hr,"ReadableStreamBYOBReader");let he=Hr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(he.prototype.cancel,"cancel"),w(he.prototype.read,"read"),w(he.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u$2(Fe,"IsReadableStreamBYOBReader");function Mn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=!0,g._state==="errored"?p._errorSteps(g._storedError):No(g._readableStreamController,o,a,p);}u$2(Mn,"ReadableStreamBYOBReaderRead");function ei(n){_e(n);const o=new TypeError("Reader was released");xn(n,o);}u$2(ei,"ReadableStreamBYOBReaderRelease");function xn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$2(xn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u$2(Wt,"byobReaderBrandCheckException");function lt(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(wn(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u$2(lt,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u$2(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:ti(p,`${o} has member 'size' that`)}}u$2(zt,"convertQueuingStrategy");function ti(n,o){return ee(n,o),a=>ar(n(a))}u$2(ti,"convertQueuingStrategySize");function ri(n,o){ce(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:ni(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:oi(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:ii(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:si(S,n,`${o} has member 'write' that`),type:_}}u$2(ri,"convertUnderlyingSink");function ni(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$2(ni,"convertUnderlyingSinkAbortCallback");function oi(n,o,a){return ee(n,a),()=>H(n,o,[])}u$2(oi,"convertUnderlyingSinkCloseCallback");function ii(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$2(ii,"convertUnderlyingSinkStartCallback");function si(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$2(si,"convertUnderlyingSinkWriteCallback");function Un(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u$2(Un,"assertWritableStream");function ai(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u$2(ai,"isAbortSignal");const ui=typeof AbortController=="function";function li(){if(ui)return new AbortController}u$2(li,"createAbortController");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=ri(o,"First parameter");if(Hn(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=Ot(p),C=lt(p,1);Ti(this,g,C,S);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?T(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):T($t("abort"))}close(){return Ve(this)?Qe(this)?T(new TypeError("Cannot close a stream that already has a writer")):be(this)?T(new TypeError("Cannot close an already-closing stream")):Vn(this):T($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return Nn(this)}};u$2(Vr,"WritableStream");let pe=Vr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),w(pe.prototype.abort,"abort"),w(pe.prototype.close,"close"),w(pe.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function Nn(n){return new se(n)}u$2(Nn,"AcquireWritableStreamDefaultWriter");function fi(n,o,a,p,g=1,_=()=>1){const S=Object.create(pe.prototype);Hn(S);const C=Object.create(Be.prototype);return Jn(S,C,n,o,a,p,g,_),S}u$2(fi,"CreateWritableStream");function Hn(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u$2(Hn,"InitializeWritableStream");function Ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u$2(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u$2(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return k(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return k(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=!1;p==="erroring"&&(g=!0,o=void 0);const _=F((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||Pr(n,o),_}u$2(Ft,"WritableStreamAbort");function Vn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=F((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Or(p),Ci(n._writableStreamController),a}u$2(Vn,"WritableStreamClose");function ci(n){return F((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u$2(ci,"WritableStreamAddWriteRequest");function Cr(n,o){if(n._state==="writable"){Pr(n,o);return}vr(n);}u$2(Cr,"WritableStreamDealWithRejection");function Pr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Gn(p,o),!mi(n)&&a._started&&vr(n);}u$2(Pr,"WritableStreamStartErroring");function vr(n){n._state="errored",n._writableStreamController[un]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){It(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),It(n);return}const p=n._writableStreamController[wt](a._reason);E(p,()=>(a._resolve(),It(n),null),g=>(a._reject(g),It(n),null));}u$2(vr,"WritableStreamFinishErroring");function di(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u$2(di,"WritableStreamFinishInFlightWrite");function hi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Cr(n,o);}u$2(hi,"WritableStreamFinishInFlightWriteWithError");function pi(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&ro(a);}u$2(pi,"WritableStreamFinishInFlightClose");function bi(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Cr(n,o);}u$2(bi,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u$2(be,"WritableStreamCloseQueuedOrInFlight");function mi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u$2(mi,"WritableStreamHasOperationMarkedInFlight");function yi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u$2(yi,"WritableStreamMarkCloseRequestInFlight");function gi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u$2(gi,"WritableStreamMarkFirstWriteRequestInFlight");function It(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&kr(o,n._storedError);}u$2(It,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Er(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?ki(a):Or(a)),n._backpressure=o;}u$2(Er,"WritableStreamUpdateBackpressure");const Qr=class Qr{constructor(o){if(Se(o,1,"WritableStreamDefaultWriter"),Un(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):no(this),Dt(this);else if(a==="erroring")Wr(this,o._storedError),Dt(this);else if(a==="closed")no(this),Bi(this);else {const p=o._storedError;Wr(this,p),to(this,p);}}get closed(){return Ie(this)?this._closedPromise:T(je("closed"))}get desiredSize(){if(!Ie(this))throw je("desiredSize");if(this._ownerWritableStream===void 0)throw ct("desiredSize");return Ri(this)}get ready(){return Ie(this)?this._readyPromise:T(je("ready"))}abort(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("abort")):_i(this,o):T(je("abort"))}close(){if(!Ie(this))return T(je("close"));const o=this._ownerWritableStream;return o===void 0?T(ct("close")):be(o)?T(new TypeError("Cannot close an already-closing stream")):Qn(this)}releaseLock(){if(!Ie(this))throw je("releaseLock");this._ownerWritableStream!==void 0&&Yn(this);}write(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("write to")):Zn(this,o):T(je("write"))}};u$2(Qr,"WritableStreamDefaultWriter");let se=Qr;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),w(se.prototype.abort,"abort"),w(se.prototype.close,"close"),w(se.prototype.releaseLock,"releaseLock"),w(se.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(se.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function Ie(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u$2(Ie,"IsWritableStreamDefaultWriter");function _i(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u$2(_i,"WritableStreamDefaultWriterAbort");function Qn(n){const o=n._ownerWritableStream;return Vn(o)}u$2(Qn,"WritableStreamDefaultWriterClose");function Si(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?k(void 0):a==="errored"?T(o._storedError):Qn(n)}u$2(Si,"WritableStreamDefaultWriterCloseWithErrorPropagation");function wi(n,o){n._closedPromiseState==="pending"?kr(n,o):qi(n,o);}u$2(wi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Gn(n,o){n._readyPromiseState==="pending"?oo(n,o):Wi(n,o);}u$2(Gn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function Ri(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Xn(o._writableStreamController)}u$2(Ri,"WritableStreamDefaultWriterGetDesiredSize");function Yn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Gn(n,a),wi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u$2(Yn,"WritableStreamDefaultWriterRelease");function Zn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Pi(p,o);if(a!==n._ownerWritableStream)return T(ct("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(be(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=ci(a);return vi(p,o,g),S}u$2(Zn,"WritableStreamDefaultWriterWrite");const Kn={},Gr=class Gr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Ar(this))throw qr("abortReason");return this._abortReason}get signal(){if(!Ar(this))throw qr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Ar(this))throw qr("error");this._controlledWritableStream._state==="writable"&&eo(this,o);}[wt](o){const a=this._abortAlgorithm(o);return jt(this),a}[un](){Ae(this);}};u$2(Gr,"WritableStreamDefaultController");let Be=Gr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Ar(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u$2(Ar,"IsWritableStreamDefaultController");function Jn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=li(),o._started=!1,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=Br(o);Er(n,q);const P=a(),W=k(P);E(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Cr(n,O),null));}u$2(Jn,"SetUpWritableStreamDefaultController");function Ti(n,o,a,p){const g=Object.create(Be.prototype);let _,S,C,q;o.start!==void 0?_=u$2(()=>o.start(g),"startAlgorithm"):_=u$2(()=>{},"startAlgorithm"),o.write!==void 0?S=u$2(P=>o.write(P,g),"writeAlgorithm"):S=u$2(()=>k(void 0),"writeAlgorithm"),o.close!==void 0?C=u$2(()=>o.close(),"closeAlgorithm"):C=u$2(()=>k(void 0),"closeAlgorithm"),o.abort!==void 0?q=u$2(P=>o.abort(P),"abortAlgorithm"):q=u$2(()=>k(void 0),"abortAlgorithm"),Jn(n,g,_,S,C,q,a,p);}u$2(Ti,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function jt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$2(jt,"WritableStreamDefaultControllerClearAlgorithms");function Ci(n){mr(n,Kn,0),Lt(n);}u$2(Ci,"WritableStreamDefaultControllerClose");function Pi(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ft(n,a),1}}u$2(Pi,"WritableStreamDefaultControllerGetChunkSize");function Xn(n){return n._strategyHWM-n._queueTotalSize}u$2(Xn,"WritableStreamDefaultControllerGetDesiredSize");function vi(n,o,a){try{mr(n,o,a);}catch(g){ft(n,g);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const g=Br(n);Er(p,g);}Lt(n);}u$2(vi,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){vr(o);return}if(n._queue.length===0)return;const p=Do(n);p===Kn?Ei(n):Ai(n,p);}u$2(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ft(n,o){n._controlledWritableStream._state==="writable"&&eo(n,o);}u$2(ft,"WritableStreamDefaultControllerErrorIfNeeded");function Ei(n){const o=n._controlledWritableStream;yi(o),br(n);const a=n._closeAlgorithm();jt(n),E(a,()=>(pi(o),null),p=>(bi(o,p),null));}u$2(Ei,"WritableStreamDefaultControllerProcessClose");function Ai(n,o){const a=n._controlledWritableStream;gi(a);const p=n._writeAlgorithm(o);E(p,()=>{di(a);const g=a._state;if(br(n),!be(a)&&g==="writable"){const _=Br(n);Er(a,_);}return Lt(n),null},g=>(a._state==="writable"&&jt(n),hi(a,g),null));}u$2(Ai,"WritableStreamDefaultControllerProcessWrite");function Br(n){return Xn(n)<=0}u$2(Br,"WritableStreamDefaultControllerGetBackpressure");function eo(n,o){const a=n._controlledWritableStream;jt(n),Pr(a,o);}u$2(eo,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u$2($t,"streamBrandCheckException$2");function qr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u$2(qr,"defaultControllerBrandCheckException$2");function je(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u$2(je,"defaultWriterBrandCheckException");function ct(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u$2(ct,"defaultWriterLockException");function Dt(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u$2(Dt,"defaultWriterClosedPromiseInitialize");function to(n,o){Dt(n),kr(n,o);}u$2(to,"defaultWriterClosedPromiseInitializeAsRejected");function Bi(n){Dt(n),ro(n);}u$2(Bi,"defaultWriterClosedPromiseInitializeAsResolved");function kr(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u$2(kr,"defaultWriterClosedPromiseReject");function qi(n,o){to(n,o);}u$2(qi,"defaultWriterClosedPromiseResetToRejected");function ro(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u$2(ro,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=F((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u$2(Mt,"defaultWriterReadyPromiseInitialize");function Wr(n,o){Mt(n),oo(n,o);}u$2(Wr,"defaultWriterReadyPromiseInitializeAsRejected");function no(n){Mt(n),Or(n);}u$2(no,"defaultWriterReadyPromiseInitializeAsResolved");function oo(n,o){n._readyPromise_reject!==void 0&&(J(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u$2(oo,"defaultWriterReadyPromiseReject");function ki(n){Mt(n);}u$2(ki,"defaultWriterReadyPromiseReset");function Wi(n,o){Wr(n,o);}u$2(Wi,"defaultWriterReadyPromiseResetToRejected");function Or(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u$2(Or,"defaultWriterReadyPromiseResolve");function Oi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u$2(Oi,"getGlobals");const zr=Oi();function zi(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u$2(zi,"isDOMExceptionConstructor");function Fi(){const n=zr?.DOMException;return zi(n)?n:void 0}u$2(Fi,"getFromGlobal");function Ii(){const n=u$2(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u$2(Ii,"createPolyfill");const ji=Fi()||Ii();function io(n,o,a,p,g,_){const S=Ne(n),C=Nn(o);n._disturbed=!0;let q=!1,P=k(void 0);return F((W,O)=>{let j;if(_!==void 0){if(j=u$2(()=>{const A=_.reason!==void 0?_.reason:new ji("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,A):k(void 0)),g||z.push(()=>n._state==="readable"?le(n,A):k(void 0)),Z(()=>Promise.all(z.map(L=>L())),!0,A);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function fe(){return F((A,z)=>{function L(X){X?A():$(et(),L,z);}u$2(L,"next"),L(!1);})}u$2(fe,"pipeLoop");function et(){return q?k(!0):$(C._readyPromise,()=>F((A,z)=>{it(S,{_chunkSteps:L=>{P=$(Zn(C,L),void 0,y),A(!1);},_closeSteps:()=>A(!0),_errorSteps:z});}))}if(u$2(et,"pipeStep"),Te(n,S._closedPromise,A=>(p?re(!0,A):Z(()=>Ft(o,A),!0,A),null)),Te(o,C._closedPromise,A=>(g?re(!0,A):Z(()=>le(n,A),!0,A),null)),Y(n,S._closedPromise,()=>(a?re():Z(()=>Si(C)),null)),be(o)||o._state==="closed"){const A=new TypeError("the destination writable stream closed before all data could be piped to it");g?re(!0,A):Z(()=>le(n,A),!0,A);}J(fe());function We(){const A=P;return $(P,()=>A!==P?We():void 0)}u$2(We,"waitForWritesToFinish");function Te(A,z,L){A._state==="errored"?L(A._storedError):U(z,L);}u$2(Te,"isOrBecomesErrored");function Y(A,z,L){A._state==="closed"?L():K(z,L);}u$2(Y,"isOrBecomesClosed");function Z(A,z,L){if(q)return;q=!0,o._state==="writable"&&!be(o)?K(We(),X):X();function X(){return E(A(),()=>Ce(z,L),tt=>Ce(!0,tt)),null}u$2(X,"doTheRest");}u$2(Z,"shutdownWithAction");function re(A,z){q||(q=!0,o._state==="writable"&&!be(o)?K(We(),()=>Ce(A,z)):Ce(A,z));}u$2(re,"shutdown");function Ce(A,z){return Yn(C),_e(S),_!==void 0&&_.removeEventListener("abort",j),A?O(z):W(void 0),null}u$2(Ce,"finalize");})}u$2(io,"ReadableStreamPipeTo");const Yr=class Yr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return Fr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=br(this);this._closeRequested&&this._queue.length===0?(Ut(this),pt(a)):dt(this),o._chunkSteps(p);}else bn(a,o),dt(this);}[rr](){}};u$2(Yr,"ReadableStreamDefaultController");let ae=Yr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ae.prototype.close,"close"),w(ae.prototype.enqueue,"enqueue"),w(ae.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u$2(xt,"IsReadableStreamDefaultController");function dt(n){if(!so(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,dt(n)),null),p=>(ue(n,p),null));}u$2(dt,"ReadableStreamDefaultControllerCallPullIfNeeded");function so(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||Fr(n)>0)}u$2(so,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$2(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),pt(o));}u$2(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw ue(n,g),g}try{mr(n,o,p);}catch(g){throw ue(n,g),g}}dt(n);}u$2(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),fo(a,o));}u$2(ue,"ReadableStreamDefaultControllerError");function Fr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$2(Fr,"ReadableStreamDefaultControllerGetDesiredSize");function Li(n){return !so(n)}u$2(Li,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u$2(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function ao(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,dt(o),null),q=>(ue(o,q),null));}u$2(ao,"SetUpReadableStreamDefaultController");function $i(n,o,a,p){const g=Object.create(ae.prototype);let _,S,C;o.start!==void 0?_=u$2(()=>o.start(g),"startAlgorithm"):_=u$2(()=>{},"startAlgorithm"),o.pull!==void 0?S=u$2(()=>o.pull(g),"pullAlgorithm"):S=u$2(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u$2(q=>o.cancel(q),"cancelAlgorithm"):C=u$2(()=>k(void 0),"cancelAlgorithm"),ao(n,g,_,S,C,a,p);}u$2($i,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u$2(Nt,"defaultControllerBrandCheckException$1");function Di(n,o){return Oe(n._readableStreamController)?xi(n):Mi(n)}u$2(Di,"ReadableStreamTee");function Mi(n,o){const a=Ne(n);let p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(Y=>{O=Y;});function fe(){return p?(g=!0,k(void 0)):(p=!0,it(a,{_chunkSteps:Z=>{ge(()=>{g=!1;const re=Z,Ce=Z;_||Ge(P._readableStreamController,re),S||Ge(W._readableStreamController,Ce),p=!1,g&&fe();});},_closeSteps:()=>{p=!1,_||Le(P._readableStreamController),S||Le(W._readableStreamController),(!_||!S)&&O(void 0);},_errorSteps:()=>{p=!1;}}),k(void 0))}u$2(fe,"pullAlgorithm");function et(Y){if(_=!0,C=Y,S){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$2(et,"cancel1Algorithm");function We(Y){if(S=!0,q=Y,_){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$2(We,"cancel2Algorithm");function Te(){}return u$2(Te,"startAlgorithm"),P=ht(Te,fe,et),W=ht(Te,fe,We),U(a._closedPromise,Y=>(ue(P._readableStreamController,Y),ue(W._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,W]}u$2(Mi,"ReadableStreamDefaultTee");function xi(n){let o=Ne(n),a=!1,p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(A=>{O=A;});function fe(A){U(A._closedPromise,z=>(A!==o||(te(P._readableStreamController,z),te(W._readableStreamController,z),(!_||!S)&&O(void 0)),null));}u$2(fe,"forwardReaderError");function et(){Fe(o)&&(_e(o),o=Ne(n),fe(o)),it(o,{_chunkSteps:z=>{ge(()=>{p=!1,g=!1;const L=z;let X=z;if(!_&&!S)try{X=Pn(z);}catch(tt){te(P._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(P._readableStreamController,L),S||Bt(W._readableStreamController,X),a=!1,p?Te():g&&Y();});},_closeSteps:()=>{a=!1,_||at(P._readableStreamController),S||at(W._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&qt(P._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!S)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$2(et,"pullWithDefaultReader");function We(A,z){ve(o)&&(_e(o),o=Ln(n),fe(o));const L=z?W:P,X=z?P:W;Mn(o,A,1,{_chunkSteps:rt=>{ge(()=>{p=!1,g=!1;const nt=z?S:_;if(z?_:S)nt||kt(L._readableStreamController,rt);else {let Co;try{Co=Pn(rt);}catch(tn){te(L._readableStreamController,tn),te(X._readableStreamController,tn),O(le(n,tn));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Co);}a=!1,p?Te():g&&Y();});},_closeSteps:rt=>{a=!1;const nt=z?S:_,Yt=z?_:S;nt||at(L._readableStreamController),Yt||at(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$2(We,"pullWithBYOBReader");function Te(){if(a)return p=!0,k(void 0);a=!0;const A=wr(P._readableStreamController);return A===null?et():We(A._view,!1),k(void 0)}u$2(Te,"pull1Algorithm");function Y(){if(a)return g=!0,k(void 0);a=!0;const A=wr(W._readableStreamController);return A===null?et():We(A._view,!0),k(void 0)}u$2(Y,"pull2Algorithm");function Z(A){if(_=!0,C=A,S){const z=st([C,q]),L=le(n,z);O(L);}return j}u$2(Z,"cancel1Algorithm");function re(A){if(S=!0,q=A,_){const z=st([C,q]),L=le(n,z);O(L);}return j}u$2(re,"cancel2Algorithm");function Ce(){}return u$2(Ce,"startAlgorithm"),P=lo(Ce,Te,Z),W=lo(Ce,Y,re),fe(o),[P,W]}u$2(xi,"ReadableByteStreamTee");function Ui(n){return b(n)&&typeof n.getReader<"u"}u$2(Ui,"isReadableStreamLike");function Ni(n){return Ui(n)?Vi(n.getReader()):Hi(n)}u$2(Ni,"ReadableStreamFrom");function Hi(n){let o;const a=Cn(n,"async"),p=y;function g(){let S;try{S=Io(a);}catch(q){return T(q)}const C=k(S);return N(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(jo(q))Le(o._readableStreamController);else {const W=Lo(q);Ge(o._readableStreamController,W);}})}u$2(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=vt(C,"return");}catch(O){return T(O)}if(q===void 0)return k(void 0);let P;try{P=M(q,C,[S]);}catch(O){return T(O)}const W=k(P);return N(W,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u$2(_,"cancelAlgorithm"),o=ht(p,g,_,0),o}u$2(Hi,"ReadableStreamFromIterable");function Vi(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return N(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)Le(o._readableStreamController);else {const C=S.value;Ge(o._readableStreamController,C);}})}u$2(p,"pullAlgorithm");function g(_){try{return k(n.cancel(_))}catch(S){return T(S)}}return u$2(g,"cancelAlgorithm"),o=ht(a,p,g,0),o}u$2(Vi,"ReadableStreamFromDefaultReader");function Qi(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:Gi(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Yi(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:Zi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:Ki(C,`${o} has member 'type' that`)}}u$2(Qi,"convertUnderlyingDefaultOrByteSource");function Gi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$2(Gi,"convertUnderlyingSourceCancelCallback");function Yi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$2(Yi,"convertUnderlyingSourcePullCallback");function Zi(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$2(Zi,"convertUnderlyingSourceStartCallback");function Ki(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u$2(Ki,"convertReadableStreamType");function Ji(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u$2(Ji,"convertIteratorOptions");function uo(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&Xi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u$2(uo,"convertPipeOptions");function Xi(n,o){if(!ai(n))throw new TypeError(`${o} is not an AbortSignal.`)}u$2(Xi,"assertAbortSignal");function es(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Un(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u$2(es,"convertReadableWritablePair");const Zr=class Zr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=Qi(o,"First parameter");if(Ir(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=lt(p,0);Go(this,g,_);}else {const _=Ot(p),S=lt(p,1);$i(this,g,S,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):T($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Zo(o,"First parameter").mode===void 0?Ne(this):Ln(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");Se(o,1,"pipeThrough");const p=es(o,"First parameter"),g=uo(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=io(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return J(_),p.readable}pipeTo(o,a={}){if(!qe(this))return T($e("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=uo(a,"Second parameter");}catch(g){return T(g)}return ke(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):io(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Di(this);return st(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Ji(o,"First parameter");return zo(this,a.preventCancel)}[pr](o){return this.values(o)}static from(o){return Ni(o)}};u$2(Zr,"ReadableStream");let V=Zr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),w(V.from,"from"),w(V.prototype.cancel,"cancel"),w(V.prototype.getReader,"getReader"),w(V.prototype.pipeThrough,"pipeThrough"),w(V.prototype.pipeTo,"pipeTo"),w(V.prototype.tee,"tee"),w(V.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(V.prototype,pr,{value:V.prototype.values,writable:!0,configurable:!0});function ht(n,o,a,p=1,g=()=>1){const _=Object.create(V.prototype);Ir(_);const S=Object.create(ae.prototype);return ao(_,S,n,o,a,p,g),_}u$2(ht,"CreateReadableStream");function lo(n,o,a){const p=Object.create(V.prototype);Ir(p);const g=Object.create(ie.prototype);return jn(p,g,n,o,a,0,void 0),p}u$2(lo,"CreateReadableByteStream");function Ir(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u$2(Ir,"InitializeReadableStream");function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u$2(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u$2(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return k(void 0);if(n._state==="errored")return T(n._storedError);pt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return N(p,y)}u$2(le,"ReadableStreamCancel");function pt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(cn(o),ve(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u$2(pt,"ReadableStreamClose");function fo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?yn(a,o):xn(a,o));}u$2(fo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u$2($e,"streamBrandCheckException$1");function co(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u$2(co,"convertQueuingStrategyInit");const ho=u$2(n=>n.byteLength,"byteLengthSizeFunction");w(ho,"size");const Kr=class Kr{constructor(o){Se(o,1,"ByteLengthQueuingStrategy"),o=co(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!bo(this))throw po("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!bo(this))throw po("size");return ho}};u$2(Kr,"ByteLengthQueuingStrategy");let Ze=Kr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function po(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u$2(po,"byteLengthBrandCheckException");function bo(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u$2(bo,"IsByteLengthQueuingStrategy");const mo=u$2(()=>1,"countSizeFunction");w(mo,"size");const Jr=class Jr{constructor(o){Se(o,1,"CountQueuingStrategy"),o=co(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!go(this))throw yo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!go(this))throw yo("size");return mo}};u$2(Jr,"CountQueuingStrategy");let Ke=Jr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function yo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u$2(yo,"countBrandCheckException");function go(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u$2(go,"IsCountQueuingStrategy");function ts(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:is(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:rs(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:ns(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:os(S,n,`${o} has member 'transform' that`),writableType:C}}u$2(ts,"convertTransformer");function rs(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$2(rs,"convertTransformerFlushCallback");function ns(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$2(ns,"convertTransformerStartCallback");function os(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$2(os,"convertTransformerTransformCallback");function is(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$2(is,"convertTransformerCancelCallback");const Xr=class Xr{constructor(o={},a={},p={}){o===void 0&&(o=null);const g=zt(a,"Second parameter"),_=zt(p,"Third parameter"),S=ts(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=lt(_,0),q=Ot(_),P=lt(g,1),W=Ot(g);let O;const j=F(fe=>{O=fe;});ss(this,j,P,W,C,q),us(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!_o(this))throw To("readable");return this._readable}get writable(){if(!_o(this))throw To("writable");return this._writable}};u$2(Xr,"TransformStream");let Je=Xr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function ss(n,o,a,p,g,_){function S(){return o}u$2(S,"startAlgorithm");function C(j){return cs(n,j)}u$2(C,"writeAlgorithm");function q(j){return ds(n,j)}u$2(q,"abortAlgorithm");function P(){return hs(n)}u$2(P,"closeAlgorithm"),n._writable=fi(S,C,P,q,a,p);function W(){return ps(n)}u$2(W,"pullAlgorithm");function O(j){return bs(n,j)}u$2(O,"cancelAlgorithm"),n._readable=ht(S,W,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u$2(ss,"InitializeTransformStream");function _o(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u$2(_o,"IsTransformStream");function So(n,o){ue(n._readable._readableStreamController,o),jr(n,o);}u$2(So,"TransformStreamError");function jr(n,o){Qt(n._transformStreamController),ft(n._writable._writableStreamController,o),Lr(n);}u$2(jr,"TransformStreamErrorWritableAndUnblockWrite");function Lr(n){n._backpressure&&Ht(n,!1);}u$2(Lr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=F(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u$2(Ht,"TransformStreamSetBackpressure");const en=class en{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return Fr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");wo(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ls(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");fs(this);}};u$2(en,"TransformStreamDefaultController");let me=en;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),w(me.prototype.enqueue,"enqueue"),w(me.prototype.error,"error"),w(me.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u$2(Vt,"IsTransformStreamDefaultController");function as(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u$2(as,"SetUpTransformStreamDefaultController");function us(n,o){const a=Object.create(me.prototype);let p,g,_;o.transform!==void 0?p=u$2(S=>o.transform(S,a),"transformAlgorithm"):p=u$2(S=>{try{return wo(a,S),k(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u$2(()=>o.flush(a),"flushAlgorithm"):g=u$2(()=>k(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u$2(S=>o.cancel(S),"cancelAlgorithm"):_=u$2(()=>k(void 0),"cancelAlgorithm"),as(n,a,p,g,_);}u$2(us,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$2(Qt,"TransformStreamDefaultControllerClearAlgorithms");function wo(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw jr(a,_),a._readable._storedError}Li(p)!==a._backpressure&&Ht(a,!0);}u$2(wo,"TransformStreamDefaultControllerEnqueue");function ls(n,o){So(n._controlledTransformStream,o);}u$2(ls,"TransformStreamDefaultControllerError");function Ro(n,o){const a=n._transformAlgorithm(o);return N(a,void 0,p=>{throw So(n._controlledTransformStream,p),p})}u$2(Ro,"TransformStreamDefaultControllerPerformTransform");function fs(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");jr(o,p);}u$2(fs,"TransformStreamDefaultControllerTerminate");function cs(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return N(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return Ro(a,o)})}return Ro(a,o)}u$2(cs,"TransformStreamDefaultSinkWriteAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),$r(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u$2(ds,"TransformStreamDefaultSinkAbortAlgorithm");function hs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=F((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),E(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),$r(o)),null),g=>(ue(a._readableStreamController,g),Xe(o,g),null)),o._finishPromise}u$2(hs,"TransformStreamDefaultSinkCloseAlgorithm");function ps(n){return Ht(n,!1),n._backpressureChangePromise}u$2(ps,"TransformStreamDefaultSourcePullAlgorithm");function bs(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ft(p._writableStreamController,o),Lr(n),$r(a)),null),_=>(ft(p._writableStreamController,_),Lr(n),Xe(a,_),null)),a._finishPromise}u$2(bs,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u$2(Gt,"defaultControllerBrandCheckException");function $r(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$2($r,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(J(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$2(Xe,"defaultControllerFinishPromiseReject");function To(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u$2(To,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=Re,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u$2(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u$2(function(d){let y=0;const b=this;return new ReadableStream({type:"bytes",async pull(R){const v=await b.slice(y,Math.min(b.size,y+POOL_SIZE$1)).arrayBuffer();y+=v.byteLength,R.enqueue(new Uint8Array(v)),y===b.size&&R.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u$2(toIterator,"toIterator");const _Blob=(Ue$2=class{constructor(l=[],d={}){ye$1(this,Pe$1,[]);ye$1(this,bt,"");ye$1(this,ot$1,0);ye$1(this,Zt$2,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Ue$2?w=R:w=y.encode(`${R}`),ne$1(this,ot$1,D$2(this,ot$1)+(ArrayBuffer.isView(w)?w.byteLength:w.size)),D$2(this,Pe$1).push(w);}ne$1(this,Zt$2,`${d.endings===void 0?"transparent":d.endings}`);const b=d.type===void 0?"":String(d.type);ne$1(this,bt,/^[\x20-\x7E]*$/.test(b)?b:"");}get size(){return D$2(this,ot$1)}get type(){return D$2(this,bt)}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(D$2(this,Pe$1),!1))d+=l.decode(y,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(D$2(this,Pe$1),!1))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(D$2(this,Pe$1),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const v=Math.max(w-R,0),I=D$2(this,Pe$1),B=[];let F=0;for(const T of I){if(F>=v)break;const $=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&$<=R)R-=$,w-=$;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min($,w)),F+=E.byteLength):(E=T.slice(R,Math.min($,w)),F+=E.size),w-=$,B.push(E),R=0;}}const k=new Ue$2([],{type:String(y).toLowerCase()});return ne$1(k,ot$1,v),ne$1(k,Pe$1,B),k}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Pe$1=new WeakMap,bt=new WeakMap,ot$1=new WeakMap,Zt$2=new WeakMap,u$2(Ue$2,"Blob"),Ue$2);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(gt$1=class extends r$1{constructor(d,y,b={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,b);ye$1(this,mt$1,0);ye$1(this,yt$1,"");b===null&&(b={});const R=b.lastModified===void 0?Date.now():Number(b.lastModified);Number.isNaN(R)||ne$1(this,mt$1,R),ne$1(this,yt$1,String(y));}get name(){return D$2(this,yt$1)}get lastModified(){return D$2(this,mt$1)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},mt$1=new WeakMap,yt$1=new WeakMap,u$2(gt$1,"File"),gt$1),File$1=_File,File$1$1=File$1;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$3,hasInstance:h$2}=Symbol,r$2=Math.random,m$1="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$2=u$2((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1$1([l],d,l):l]:[c,l+""]),"f"),e$1$1=u$2((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$2=u$2((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(_t$2=class{constructor(...l){ye$1(this,oe$2,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$3](){return this.entries()}static[h$2](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m$1.some(d=>typeof l[d]!="function")}append(...l){x$2("append",arguments,2),D$2(this,oe$2).push(f$2(...l));}delete(l){x$2("delete",arguments,1),l+="",ne$1(this,oe$2,D$2(this,oe$2).filter(([d])=>d!==l));}get(l){x$2("get",arguments,1),l+="";for(var d=D$2(this,oe$2),y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$2("getAll",arguments,1),d=[],l+="",D$2(this,oe$2).forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$2("has",arguments,1),l+="",D$2(this,oe$2).some(d=>d[0]===l)}forEach(l,d){x$2("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$2("set",arguments,2);var d=[],y=!0;l=f$2(...l),D$2(this,oe$2).forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),ne$1(this,oe$2,d);}*entries(){yield*D$2(this,oe$2);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe$2=new WeakMap,u$2(_t$2,"FormData"),_t$2);function formDataToBlob(c,l=r$1){var d=`${r$2()}${r$2()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1$1(w)+`"; filename="${e$1$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u$2(formDataToBlob,"formDataToBlob");const rn$1=class rn extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u$2(rn$1,"FetchBaseError");let FetchBaseError=rn$1;const nn$1=class nn extends FetchBaseError{constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};u$2(nn$1,"FetchError");let FetchError$1=nn$1;const NAME=Symbol.toStringTag,isURLSearchParameters=u$2(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u$2(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u$2(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u$2((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u$2((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),on$1=class on{constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$6.Buffer.from(l.toString()):isBlob(l)||require$$6.Buffer.isBuffer(l)||(require$$0.types.isAnyArrayBuffer(l)?l=require$$6.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$6.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$6.Buffer.from(String(l))));let b=l;require$$6.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('./_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u$2(on$1,"Body");let Body=on$1;Body.prototype.buffer=require$$0.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$0.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$6.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(b=>typeof b=="string")?require$$6.Buffer.from(d.join("")):require$$6.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u$2(consumeBody,"consumeBody");const clone=u$2((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u$2((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$6.Buffer.isBuffer(c)||require$$0.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u$2(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$6.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u$2(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt$2=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case"append":case"set":return (w,v)=>(validateHeaderName(w),validateHeaderValue(w,String(v)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(v)));case"delete":case"has":case"getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case"keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};u$2(Kt$2,"Headers");let Headers$2=Kt$2;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u$2(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u$2(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De$2=class De extends Body{constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new De(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};u$2(De$2,"Response");let Response$1=De$2;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u$2(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u$2(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u$2(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u$2(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u$2(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,!0);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const v=new URL(c.url);switch(y){case"no-referrer":return "no-referrer";case"origin":return w;case"unsafe-url":return R;case"strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w.toString();case"strict-origin-when-cross-origin":return R.origin===v.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w;case"same-origin":return R.origin===v.origin?R:"no-referrer";case"origin-when-cross-origin":return R.origin===v.origin?R:w;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u$2(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u$2(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u$2(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt$2=class Jt extends Body{constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let v=isRequest(l)?l.signal:null;if("signal"in d&&(v=d.signal),v!=null&&!isAbortSignal(v))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let I=d.referrer==null?l.referrer:d.referrer;if(I==="")I="no-referrer";else if(I){const B=new URL(I);I=/^about:(\/\/)?client$/.test(B)?"client":B;}else I=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:v,referrer:I},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u$2(Jt$2,"Request");let Request$1=Jt$2;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u$2(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const v=getTotalBytes(c);typeof v=="number"&&!Number.isNaN(v)&&(y=String(v));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions"),sn$1=class sn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u$2(sn$1,"AbortError");let AbortError=sn$1;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException$1=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u$2((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u$2((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u$2((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u$2((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u$2((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u$2((c,l,d="")=>new File$1$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt$1=class Xt{constructor(l){ye$1(this,Me$1,void 0);ye$1(this,xe$2,void 0);ne$1(this,Me$1,l.path),ne$1(this,xe$2,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D$2(this,Me$1),lastModified:this.lastModified,size:d-l,start:D$2(this,xe$2)+l})}async*stream(){const{mtimeMs:l}=await stat(D$2(this,Me$1));if(l>this.lastModified)throw new DOMException$1("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D$2(this,Me$1),{start:D$2(this,xe$2),end:D$2(this,xe$2)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me$1=new WeakMap,xe$2=new WeakMap,u$2(Xt$1,"BlobDataItem");let BlobDataItem=Xt$1;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),K=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(K);return}const v=(R.protocol==="https:"?https__default:http__default).request,{signal:I}=b;let B=null;const F=u$2(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(I&&I.aborted){F();return}const k=u$2(()=>{F(),$();},"abortAndFinalize"),T=v(R.toString(),w);I&&I.addEventListener("abort",k);const $=u$2(()=>{T.abort(),I&&I.removeEventListener("abort",k);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),$();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let K;E.prependListener("end",()=>{K=E._eventsCount;}),E.prependListener("close",U=>{if(B&&K<E._eventsCount&&!U){const N=new Error("Premature close");N.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",N);}});}),T.on("response",E=>{T.setTimeout(0);const K=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const M=K.get("Location");let H=null;try{H=M===null?null:new URL(M,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),$();return}}switch(b.redirect){case"error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),$();return;case"manual":break;case"follow":{if(H===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),$();return}const G={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,H)||!isSameProtocol(b.url,H))for(const wt of ["authorization","www-authenticate","cookie","cookie2"])G.headers.delete(wt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),$();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(G.method="GET",G.body=void 0,G.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(K);Q&&(G.referrerPolicy=Q),d(fetch$1(new Request$1(H,G))),$();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}I&&E.once("end",()=>{I.removeEventListener("abort",k);});let U=Stream.pipeline(E,new Stream.PassThrough,M=>{M&&y(M);});process.version<"v12.10"&&E.on("aborted",k);const N={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:K,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},J=K.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||J===null||E.statusCode===204||E.statusCode===304){B=new Response$1(U,N),d(B);return}const ge={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(J==="gzip"||J==="x-gzip"){U=Stream.pipeline(U,zlib__default.createGunzip(ge),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}if(J==="deflate"||J==="x-deflate"){const M=Stream.pipeline(E,new Stream.PassThrough,H=>{H&&y(H);});M.once("data",H=>{(H[0]&15)===8?U=Stream.pipeline(U,zlib__default.createInflate(),G=>{G&&y(G);}):U=Stream.pipeline(U,zlib__default.createInflateRaw(),G=>{G&&y(G);}),B=new Response$1(U,N),d(B);}),M.once("end",()=>{B||(B=new Response$1(U,N),d(B));});return}if(J==="br"){U=Stream.pipeline(U,zlib__default.createBrotliDecompress(),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}B=new Response$1(U,N),d(B);}),writeToStream(T,b).catch(y);})}u$2(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$6.Buffer.from(`0\r
\r
`);let y=!1,b=!1,R;c.on("response",w=>{const{headers:v}=w;y=v["transfer-encoding"]==="chunked"&&!v["content-length"];}),c.on("socket",w=>{const v=u$2(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),I=u$2(B=>{b=require$$6.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$6.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$6.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",v),w.on("data",I),c.on("close",()=>{w.removeListener("close",v),w.removeListener("data",I);});});}u$2(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u$2(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u$2(setCancelFlag,"setCancelFlag");function Event$1(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u$2(Event$1,"Event"),Event$1.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event$1.prototype,"constructor",{value:Event$1,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u$2(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u$2(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u$2(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:!0,writable:!0}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const v=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,v?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u$2(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event$1;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u$2(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u$2(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u$2(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u$2(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u$2(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u$2(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u$2(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u$2(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};y===null?d.set(c,R):y.next=R;}},configurable:!0,enumerable:!0}}u$2(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u$2(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u$2(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u$2(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u$2(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,v={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let I=y.get(c);if(I===void 0){y.set(c,v);return}let B=null;for(;I!=null;){if(I.listener===l&&I.listenerType===w)return;B=I,I=I.next;}B.next=v;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,v=y.get(c);for(;v!=null;){if(v.listener===l&&v.listenerType===R){w!==null?w.next=v.next:v.next!==null?y.set(c,v.next):y.delete(c);return}w=v,v=v.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return !0;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const an$1=class an extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u$2(an$1,"AbortSignal");let AbortSignal=an$1;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u$2(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u$2(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(St$2=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u$2(St$2,"AbortController"),St$2);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u$2(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$2=Object.defineProperty,e$2=u$2((c,l)=>t$2(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1;s$2();function s$2(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u$2(s$2,"s"),e$2(s$2,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$2=(r,o)=>n(r,"name",{value:o,configurable:!0});const node=node$1;var t=Object.defineProperty,a$1=i$2((r,o)=>t(r,"name",{value:o,configurable:!0}),"a");function e$1(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$2(e$1,"e"),a$1(e$1,"polyfill"),e$1("fetch",node.fetch),e$1("Blob",node.Blob),e$1("File",node.File),e$1("FormData",node.FormData),e$1("Headers",node.Headers),e$1("Request",node.Request),e$1("Response",node.Response),e$1("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H$1 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$2 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$1 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H$1]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H$1]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$1[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$1[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$1[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$1[i] = gamma0 + W$1[i - 7] + gamma1 + W$1[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$2[i] + W$1[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s$1=globalThis.Headers,i$1=globalThis.AbortController,l$3=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(
        () => controller.abort(),
        context.options.timeout
      );
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$3;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$3(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController$1 = globalThis.AbortController || i$1;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/artae/Work/Github/tinymce-solid/demo/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/home/artae/Work/Github/tinymce-solid/demo","order":0,"outDir":"/home/artae/Work/Github/tinymce-solid/demo/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/artae/Work/Github/tinymce-solid/demo","base":"/","outDir":"/home/artae/Work/Github/tinymce-solid/demo/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/home/artae/Work/Github/tinymce-solid/demo","outDir":"/home/artae/Work/Github/tinymce-solid/demo/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"../node_modules/.pnpm/@solidjs+start@1.0.1_rollup@4.18.0_solid-js@1.8.17_vinxi@0.3.11_@opentelemetry+api@1.8.0_@typ_jlavny3gbzmgi5vinn3oveqwry/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/home/artae/Work/Github/tinymce-solid/demo","outDir":"/home/artae/Work/Github/tinymce-solid/demo/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"output":{"dir":"../docs"}},"root":"/home/artae/Work/Github/tinymce-solid/demo"};
				const buildManifest = {"ssr":{"_HttpStatusCode-DH8IeaZe.js":{"file":"assets/HttpStatusCode-DH8IeaZe.js","name":"HttpStatusCode"},"_OPHDMVQK-HFaQenyN.js":{"file":"assets/OPHDMVQK-HFaQenyN.js","name":"OPHDMVQK"},"_index-BhCdQPVl.js":{"file":"assets/index-BhCdQPVl.js","name":"index"},"_store-DAsb59Se.js":{"file":"assets/store-DAsb59Se.js","name":"store"},"src/components/TinyEditor.tsx":{"file":"assets/TinyEditor-DIeZec8X.js","name":"TinyEditor","src":"src/components/TinyEditor.tsx","isDynamicEntry":true,"imports":["_store-DAsb59Se.js","_OPHDMVQK-HFaQenyN.js"]},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-BhCdQPVl.js","_HttpStatusCode-DH8IeaZe.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-BhCdQPVl.js","_store-DAsb59Se.js"]},"src/routes/tinymce.tsx?pick=default&pick=$css":{"file":"tinymce.js","name":"tinymce","src":"src/routes/tinymce.tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-BhCdQPVl.js"],"dynamicImports":["src/components/TinyEditor.tsx"]},"virtual:#vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:#vinxi/handler/ssr","isEntry":true,"imports":["_index-BhCdQPVl.js","_OPHDMVQK-HFaQenyN.js","_store-DAsb59Se.js","_HttpStatusCode-DH8IeaZe.js"],"css":["assets/ssr-BfJRJP5K.css"]}},"client":{"_HttpStatusCode-DjTx85av.js":{"file":"assets/HttpStatusCode-DjTx85av.js","name":"HttpStatusCode"},"_OPHDMVQK-C11cMPVl.js":{"file":"assets/OPHDMVQK-C11cMPVl.js","name":"OPHDMVQK","imports":["_index-HFKVSYc5.js"]},"_index-HFKVSYc5.js":{"file":"assets/index-HFKVSYc5.js","name":"index"},"_store-OrF9LL7R.js":{"file":"assets/store-OrF9LL7R.js","name":"store","imports":["_index-HFKVSYc5.js"]},"src/components/TinyEditor.tsx":{"file":"assets/TinyEditor-Dv3S_1ph.js","name":"TinyEditor","src":"src/components/TinyEditor.tsx","isDynamicEntry":true,"imports":["_index-HFKVSYc5.js","_store-OrF9LL7R.js","_OPHDMVQK-C11cMPVl.js"]},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-2IajlwS6.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-HFKVSYc5.js","_HttpStatusCode-DjTx85av.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-BqTxL4-O.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-HFKVSYc5.js","_store-OrF9LL7R.js"]},"src/routes/tinymce.tsx?pick=default&pick=$css":{"file":"assets/tinymce-PHPzFC75.js","name":"tinymce","src":"src/routes/tinymce.tsx?pick=default&pick=$css","isEntry":true,"imports":["_index-HFKVSYc5.js"],"dynamicImports":["src/components/TinyEditor.tsx"]},"virtual:#vinxi/handler/client":{"file":"assets/client-lrjEilnh.js","name":"client","src":"virtual:#vinxi/handler/client","isEntry":true,"imports":["_index-HFKVSYc5.js","_OPHDMVQK-C11cMPVl.js","_store-OrF9LL7R.js","_HttpStatusCode-DjTx85av.js"],"css":["assets/client-BfJRJP5K.css"]}},"server-fns":{"_server-fns.mjs":{"file":"server-fns.mjs","name":"server-fns","dynamicImports":["src/app.tsx"]},"src/app.tsx":{"file":"app.mjs","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns.mjs"],"css":["assets/app-BfJRJP5K.css"]},"virtual:#vinxi/handler/server-fns":{"file":"entry.mjs","name":"entry","src":"virtual:#vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns.mjs"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @returns Array of asset URLs
 */
const findAssetsInViteManifest = (manifest, id, assetMap = new Map()) => {
	const stack = [];

	/**
	 * @param {string} id
	 */
	function traverse(id) {
		if (stack.includes(id)) {
			return [];
		}

		const cached = assetMap.get(id);
		if (cached) {
			return cached;
		}
		const chunk = manifest[id];
		if (!chunk) {
			return [];
		}

		stack.push(id);

		const assets = [
			...(chunk.assets || []),
			...(chunk.css || []),
			...(chunk.imports?.flatMap(traverse) || []),
		];
		const imports = chunk.imports?.flatMap(traverse) || [];
		const all = [...assets, ...imports].filter(Boolean);
		all.push(chunk.file);
		assetMap.set(id, all);

		stack.pop();

		return Array.from(new Set(all));
	}
	return traverse(id);
};

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join$1(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", precendence: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join$1(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join$1(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 664,
    "path": "../public/favicon.ico"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 25,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/assets/HttpStatusCode-DH8IeaZe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11b-SodFqKgUUggJcauV3sJsNV90u/o\"",
    "mtime": "2024-06-02T20:47:35.479Z",
    "size": 283,
    "path": "../public/assets/HttpStatusCode-DH8IeaZe.js"
  },
  "/assets/HttpStatusCode-DH8IeaZe.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d4-FFdnmQm9TWjqdWqLcZrBHFOVot8\"",
    "mtime": "2024-06-02T20:47:35.479Z",
    "size": 212,
    "path": "../public/assets/HttpStatusCode-DH8IeaZe.js.gz"
  },
  "/assets/OPHDMVQK-HFaQenyN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c31-nYkYeGWF1nhu3Q75gPTGuI1jOaI\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 3121,
    "path": "../public/assets/OPHDMVQK-HFaQenyN.js"
  },
  "/assets/OPHDMVQK-HFaQenyN.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"55a-hwluIq30mqQzulus3eMTBm57Zb4\"",
    "mtime": "2024-06-02T20:47:35.479Z",
    "size": 1370,
    "path": "../public/assets/OPHDMVQK-HFaQenyN.js.gz"
  },
  "/assets/TinyEditor-DIeZec8X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2603-94vUXVKD3YwOo7oreamzTuuk62M\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 9731,
    "path": "../public/assets/TinyEditor-DIeZec8X.js"
  },
  "/assets/TinyEditor-DIeZec8X.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"fc5-sAm0tlGXq9bAn2g21dbRWABCerM\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 4037,
    "path": "../public/assets/TinyEditor-DIeZec8X.js.gz"
  },
  "/assets/index-BhCdQPVl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ab6-sIgbzBQltcdaAdKP8Y6Y9ZFn9TQ\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 2742,
    "path": "../public/assets/index-BhCdQPVl.js"
  },
  "/assets/index-BhCdQPVl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"519-A+VAI37y8avjpaPHZqYSAzxylNA\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1305,
    "path": "../public/assets/index-BhCdQPVl.js.gz"
  },
  "/assets/ssr-BfJRJP5K.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d6f-5BftYvaHb3ZAdFNVcIHaZ5f4zy4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 15727,
    "path": "../public/assets/ssr-BfJRJP5K.css"
  },
  "/assets/ssr-BfJRJP5K.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e7a-rWhfBWzK9zqY7gqUXZ5FuR/c4tM\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 3706,
    "path": "../public/assets/ssr-BfJRJP5K.css.gz"
  },
  "/assets/store-DAsb59Se.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5fe-1TZfB1MBeDdasj1hZKdOM2qegWM\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1534,
    "path": "../public/assets/store-DAsb59Se.js"
  },
  "/assets/store-DAsb59Se.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"38b-e/upukc/w0dCNuGAm663H+ATgCY\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 907,
    "path": "../public/assets/store-DAsb59Se.js.gz"
  },
  "/tinymce/CHANGELOG.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"42885-dOwMqqY2F/eRlPJWAY1V2mO3M9w\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 272517,
    "path": "../public/tinymce/CHANGELOG.md"
  },
  "/tinymce/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"12cb-/DnsYP0nWk3HxdDbv75NUVGhcWU\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 4811,
    "path": "../public/tinymce/README.md"
  },
  "/tinymce/bower.json": {
    "type": "application/json",
    "etag": "\"1c8-AG/5zhlo2cjgdMf2Ipn0P66I8sA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 456,
    "path": "../public/tinymce/bower.json"
  },
  "/tinymce/composer.json": {
    "type": "application/json",
    "etag": "\"374-di5eJuZHEm7jad+ctfrTmND6e+Y\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 884,
    "path": "../public/tinymce/composer.json"
  },
  "/tinymce/license.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"12f-SOhgz46yoIXGhu9nud4spHAw1jg\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 303,
    "path": "../public/tinymce/license.md"
  },
  "/tinymce/package.json": {
    "type": "application/json",
    "etag": "\"2a1-V4v3DmKBnFEJZ4ShlF1PUSroPNY\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 673,
    "path": "../public/tinymce/package.json"
  },
  "/tinymce/tinymce.d.ts": {
    "type": "video/mp2t",
    "etag": "\"1eb2c-rP20n/uLIllGru+duf5/evt6MP8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 125740,
    "path": "../public/tinymce/tinymce.d.ts"
  },
  "/tinymce/tinymce.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1250db-6+B8I2VOvAY1LunItf9Q4u5i0JM\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1200347,
    "path": "../public/tinymce/tinymce.js"
  },
  "/tinymce/tinymce.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2fe53-Kzf7ZpIzbTlAHbOKaKkFVjHfhjU\"",
    "mtime": "2024-06-02T20:47:37.971Z",
    "size": 196179,
    "path": "../public/tinymce/tinymce.js.br"
  },
  "/tinymce/tinymce.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3ca68-UUEaC79OYF+H1787sx6s/wzqicY\"",
    "mtime": "2024-06-02T20:47:37.747Z",
    "size": 248424,
    "path": "../public/tinymce/tinymce.js.gz"
  },
  "/tinymce/tinymce.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6a7c0-xr9asKE0vxeFO02AzXvD1xjFEq4\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 436160,
    "path": "../public/tinymce/tinymce.min.js"
  },
  "/tinymce/tinymce.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f596-hj/1JmviV1RZgsuaqJyKGMXyqwk\"",
    "mtime": "2024-06-02T20:47:37.943Z",
    "size": 128406,
    "path": "../public/tinymce/tinymce.min.js.br"
  },
  "/tinymce/tinymce.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"254b6-yQSn8efC2Ti9YFmJjrHgqedZndY\"",
    "mtime": "2024-06-02T20:47:37.699Z",
    "size": 152758,
    "path": "../public/tinymce/tinymce.min.js.gz"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"80d-9UOBBAHanz6ZKqexerlYeYdEA7w\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 2061,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"1b0-tla5sFrPECJZ3akM+5gdlf8sxHU\"",
    "mtime": "2024-06-02T20:47:37.271Z",
    "size": 432,
    "path": "../public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"1ef-WFh3hSQ7XLEuuF9pFTHO2c5PdA4\"",
    "mtime": "2024-06-02T20:47:37.267Z",
    "size": 495,
    "path": "../public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/HttpStatusCode-DjTx85av.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20-6m70mxigcQrfQOHf/Wz+MEC183U\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 32,
    "path": "../public/_build/assets/HttpStatusCode-DjTx85av.js"
  },
  "/_build/assets/OPHDMVQK-C11cMPVl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"beb-FoADTy/d34HBnKIvdx4UqS68wAY\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 3051,
    "path": "../public/_build/assets/OPHDMVQK-C11cMPVl.js"
  },
  "/_build/assets/OPHDMVQK-C11cMPVl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"53b-FcNd//O+nxnAWpqcIf4CIRirgQQ\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1339,
    "path": "../public/_build/assets/OPHDMVQK-C11cMPVl.js.gz"
  },
  "/_build/assets/TinyEditor-Dv3S_1ph.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a2a-DLcw1Gefsl/0GFUHCEjqm5fgLsw\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 10794,
    "path": "../public/_build/assets/TinyEditor-Dv3S_1ph.js"
  },
  "/_build/assets/TinyEditor-Dv3S_1ph.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1172-cdpghwzrt9e8Q0nhOKrKhRrhcQ4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 4466,
    "path": "../public/_build/assets/TinyEditor-Dv3S_1ph.js.gz"
  },
  "/_build/assets/_...404_-2IajlwS6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f6-v0MSQ8LYakncQEQNbrKTL6SidFg\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 502,
    "path": "../public/_build/assets/_...404_-2IajlwS6.js"
  },
  "/_build/assets/_...404_-2IajlwS6.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"166-/jRO/2G/pUczTcVBO6HMD0zVbLI\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 358,
    "path": "../public/_build/assets/_...404_-2IajlwS6.js.gz"
  },
  "/_build/assets/client-BfJRJP5K.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d6f-5BftYvaHb3ZAdFNVcIHaZ5f4zy4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 15727,
    "path": "../public/_build/assets/client-BfJRJP5K.css"
  },
  "/_build/assets/client-BfJRJP5K.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e7a-rWhfBWzK9zqY7gqUXZ5FuR/c4tM\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 3706,
    "path": "../public/_build/assets/client-BfJRJP5K.css.gz"
  },
  "/_build/assets/client-lrjEilnh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fd48-xwdaUH32VeO3+8U/v11O3Oudgx4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 130376,
    "path": "../public/_build/assets/client-lrjEilnh.js"
  },
  "/_build/assets/client-lrjEilnh.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"ab6f-/MWPZg7PGnZN+2EVw0h7wBlgbZw\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 43887,
    "path": "../public/_build/assets/client-lrjEilnh.js.gz"
  },
  "/_build/assets/index-BqTxL4-O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"193-s0mUOQbT2A+jRSKOK8f+H17yNXg\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 403,
    "path": "../public/_build/assets/index-BqTxL4-O.js"
  },
  "/_build/assets/index-BqTxL4-O.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"13a-Oj15VpoHHcbYFHKybnUFwZfKV30\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 314,
    "path": "../public/_build/assets/index-BqTxL4-O.js.gz"
  },
  "/_build/assets/index-HFKVSYc5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"69bb-RYIWXEHmXVvrfseamtU3fUHqm80\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 27067,
    "path": "../public/_build/assets/index-HFKVSYc5.js"
  },
  "/_build/assets/index-HFKVSYc5.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"28e0-kXHNA1AxEEUH0OlVxK5iV/1eJPE\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 10464,
    "path": "../public/_build/assets/index-HFKVSYc5.js.gz"
  },
  "/_build/assets/store-OrF9LL7R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f0-sY2NB2k8pjrV3+0ln0rtR+Sfvr4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1520,
    "path": "../public/_build/assets/store-OrF9LL7R.js"
  },
  "/_build/assets/store-OrF9LL7R.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"38d-AvUEVUiwW+wso95hpwBvcV3cgRY\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 909,
    "path": "../public/_build/assets/store-OrF9LL7R.js.gz"
  },
  "/_build/assets/tinymce-PHPzFC75.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"710-Rz1ckjpBf9tO3u6IWUAF8OT1m2U\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1808,
    "path": "../public/_build/assets/tinymce-PHPzFC75.js"
  },
  "/_build/assets/tinymce-PHPzFC75.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"413-1b/2QSQDJ++KkG015miEZJIEUmk\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 1043,
    "path": "../public/_build/assets/tinymce-PHPzFC75.js.gz"
  },
  "/_server/assets/app-BfJRJP5K.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d6f-5BftYvaHb3ZAdFNVcIHaZ5f4zy4\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 15727,
    "path": "../public/_server/assets/app-BfJRJP5K.css"
  },
  "/_server/assets/app-BfJRJP5K.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e7a-rWhfBWzK9zqY7gqUXZ5FuR/c4tM\"",
    "mtime": "2024-06-02T20:47:35.487Z",
    "size": 3706,
    "path": "../public/_server/assets/app-BfJRJP5K.css.gz"
  },
  "/tinymce/icons/default/icons.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11e55-r5MR7p/0ugHAqj4+5gyEz+GLZQQ\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 73301,
    "path": "../public/tinymce/icons/default/icons.js"
  },
  "/tinymce/icons/default/icons.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"39b6-um8wgpnRM0DvFghDUyHMOucCvxI\"",
    "mtime": "2024-06-02T20:47:37.355Z",
    "size": 14774,
    "path": "../public/tinymce/icons/default/icons.js.br"
  },
  "/tinymce/icons/default/icons.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"44b1-mzFoCsKcMUG6hG5nT2Ak9Iib4kI\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 17585,
    "path": "../public/tinymce/icons/default/icons.js.gz"
  },
  "/tinymce/icons/default/icons.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1191b-f08qAaqDPeyKMgdgHZHevtf1XRg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 71963,
    "path": "../public/tinymce/icons/default/icons.min.js"
  },
  "/tinymce/icons/default/icons.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"39c4-BRdAncxY0lkjlNN/zSBjfRF9SBM\"",
    "mtime": "2024-06-02T20:47:37.267Z",
    "size": 14788,
    "path": "../public/tinymce/icons/default/icons.min.js.br"
  },
  "/tinymce/icons/default/icons.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"44cb-AJOlIxlnfo5xuujXnq/YtTMzMvM\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 17611,
    "path": "../public/tinymce/icons/default/icons.min.js.gz"
  },
  "/tinymce/icons/default/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-z05j+wWTRtUjZKbnWS392bAOsKg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 199,
    "path": "../public/tinymce/icons/default/index.js"
  },
  "/tinymce/models/dom/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd-ENfPCWPn6tgk6SpjW8qfqPnz2QY\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 189,
    "path": "../public/tinymce/models/dom/index.js"
  },
  "/tinymce/models/dom/model.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4814c-GnyasI1uZCdts1FLWQ/uTOdCBWM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 295244,
    "path": "../public/tinymce/models/dom/model.js"
  },
  "/tinymce/models/dom/model.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c5a6-Iun7Vn4HWUN0QgCUZn+L7q0izzM\"",
    "mtime": "2024-06-02T20:47:37.639Z",
    "size": 50598,
    "path": "../public/tinymce/models/dom/model.js.br"
  },
  "/tinymce/models/dom/model.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"ea20-Jy7pn3X4bp2KzKqtYzT76eK0jEg\"",
    "mtime": "2024-06-02T20:47:37.639Z",
    "size": 59936,
    "path": "../public/tinymce/models/dom/model.js.gz"
  },
  "/tinymce/models/dom/model.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17a76-xLmvOB6043YPNaox1VxUell6FiU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 96886,
    "path": "../public/tinymce/models/dom/model.min.js"
  },
  "/tinymce/models/dom/model.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"7226-s/O+piqWYirFT8018O9Amvrv+xI\"",
    "mtime": "2024-06-02T20:47:37.615Z",
    "size": 29222,
    "path": "../public/tinymce/models/dom/model.min.js.br"
  },
  "/tinymce/models/dom/model.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"8080-YMX6K1Dumt39FMmX6/s0+d7Gi4Y\"",
    "mtime": "2024-06-02T20:47:37.619Z",
    "size": 32896,
    "path": "../public/tinymce/models/dom/model.min.js.gz"
  },
  "/tinymce/plugins/accordion/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-hBoqmtIzi7HA72hKelBJvz5X73s\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 211,
    "path": "../public/tinymce/plugins/accordion/index.js"
  },
  "/tinymce/plugins/accordion/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"899f-voedFmsFHZkKwcwfwPk2/4b462I\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 35231,
    "path": "../public/tinymce/plugins/accordion/plugin.js"
  },
  "/tinymce/plugins/accordion/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1bba-Axh9acF6WZXQXzUo2QxhYQyAiPA\"",
    "mtime": "2024-06-02T20:47:37.411Z",
    "size": 7098,
    "path": "../public/tinymce/plugins/accordion/plugin.js.br"
  },
  "/tinymce/plugins/accordion/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1f18-7lvb/wORctS4sF9jcwaPo0GShuI\"",
    "mtime": "2024-06-02T20:47:37.375Z",
    "size": 7960,
    "path": "../public/tinymce/plugins/accordion/plugin.js.gz"
  },
  "/tinymce/plugins/accordion/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34de-qooTwFXfnc4VAbBQOn4cRn+PpMM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 13534,
    "path": "../public/tinymce/plugins/accordion/plugin.min.js"
  },
  "/tinymce/plugins/accordion/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1205-fuA7TKSrvypKuj6wgiGutCLwEJs\"",
    "mtime": "2024-06-02T20:47:37.367Z",
    "size": 4613,
    "path": "../public/tinymce/plugins/accordion/plugin.min.js.br"
  },
  "/tinymce/plugins/accordion/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1418-xLxMtTZOP0IoNcy3IjeZkT79/WE\"",
    "mtime": "2024-06-02T20:47:37.355Z",
    "size": 5144,
    "path": "../public/tinymce/plugins/accordion/plugin.min.js.gz"
  },
  "/tinymce/plugins/anchor/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ca-d14RLbzbkp48OslE9luRrZtB3DU\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 202,
    "path": "../public/tinymce/plugins/anchor/index.js"
  },
  "/tinymce/plugins/anchor/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"192f-U86xJLv6kQBBx+PR20IxHyPJ/54\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 6447,
    "path": "../public/tinymce/plugins/anchor/plugin.js"
  },
  "/tinymce/plugins/anchor/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"66c-SfUixhh44+ch+16P47YXnGY0CWU\"",
    "mtime": "2024-06-02T20:47:37.391Z",
    "size": 1644,
    "path": "../public/tinymce/plugins/anchor/plugin.js.br"
  },
  "/tinymce/plugins/anchor/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"74b-5Tf2vCq5wr33EGjRY7GSTT5sCiE\"",
    "mtime": "2024-06-02T20:47:37.383Z",
    "size": 1867,
    "path": "../public/tinymce/plugins/anchor/plugin.js.gz"
  },
  "/tinymce/plugins/anchor/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a84-7jL3XFCGChBFwMgoThI9oFasRzM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 2692,
    "path": "../public/tinymce/plugins/anchor/plugin.min.js"
  },
  "/tinymce/plugins/anchor/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"46e-jLgSDblYKIuVLgS2QwSaPsFAbMo\"",
    "mtime": "2024-06-02T20:47:37.363Z",
    "size": 1134,
    "path": "../public/tinymce/plugins/anchor/plugin.min.js.br"
  },
  "/tinymce/plugins/anchor/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"523-aU1swTlUR5Au+hs4Gj7FxxCbkSI\"",
    "mtime": "2024-06-02T20:47:37.359Z",
    "size": 1315,
    "path": "../public/tinymce/plugins/anchor/plugin.min.js.gz"
  },
  "/tinymce/plugins/advlist/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cd-LOauvnGAmAI0FJkgLtZzeI/AQUk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 205,
    "path": "../public/tinymce/plugins/advlist/index.js"
  },
  "/tinymce/plugins/advlist/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2338-XjrxzsAzgc6FyXT1gmV62R4Va6A\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 9016,
    "path": "../public/tinymce/plugins/advlist/plugin.js"
  },
  "/tinymce/plugins/advlist/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"857-3frImpgpKQDlK0d5KJ5V+8G0dEA\"",
    "mtime": "2024-06-02T20:47:37.387Z",
    "size": 2135,
    "path": "../public/tinymce/plugins/advlist/plugin.js.br"
  },
  "/tinymce/plugins/advlist/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"965-P9s5QuNMafYo9kaCUp1tbtVLoZ0\"",
    "mtime": "2024-06-02T20:47:37.379Z",
    "size": 2405,
    "path": "../public/tinymce/plugins/advlist/plugin.js.gz"
  },
  "/tinymce/plugins/advlist/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eb1-KaI5Pu0nhrVMUPoRT/ubmp7vFpI\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3761,
    "path": "../public/tinymce/plugins/advlist/plugin.min.js"
  },
  "/tinymce/plugins/advlist/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"597-DaH7frqBejnIUThA+UnnmhrAZPI\"",
    "mtime": "2024-06-02T20:47:37.359Z",
    "size": 1431,
    "path": "../public/tinymce/plugins/advlist/plugin.min.js.br"
  },
  "/tinymce/plugins/advlist/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"63f-x5yAacvYjnAPO6fKLE28QqX8KSg\"",
    "mtime": "2024-06-02T20:47:37.355Z",
    "size": 1599,
    "path": "../public/tinymce/plugins/advlist/plugin.min.js.gz"
  },
  "/tinymce/plugins/autolink/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0-LyFpGI6qbuhdoMAV+Hjebum9NLQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 208,
    "path": "../public/tinymce/plugins/autolink/index.js"
  },
  "/tinymce/plugins/autolink/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dcf-bH0ajlxJssXtJRmc/3jj2XRiWKY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7631,
    "path": "../public/tinymce/plugins/autolink/plugin.js"
  },
  "/tinymce/plugins/autolink/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"8ac-6Xcfz0wbeknzMiaDGmYfdb371Eg\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 2220,
    "path": "../public/tinymce/plugins/autolink/plugin.js.br"
  },
  "/tinymce/plugins/autolink/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9ba-tCXUFoZ/IIYTYzauUlRlo8t9T6c\"",
    "mtime": "2024-06-02T20:47:37.363Z",
    "size": 2490,
    "path": "../public/tinymce/plugins/autolink/plugin.js.gz"
  },
  "/tinymce/plugins/autolink/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cab-3dEKPJT2F1RiSIeaY2UQNmGCc4A\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3243,
    "path": "../public/tinymce/plugins/autolink/plugin.min.js"
  },
  "/tinymce/plugins/autolink/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5da-vzSDiprGfsp5xgcUsogDluwvIH4\"",
    "mtime": "2024-06-02T20:47:37.375Z",
    "size": 1498,
    "path": "../public/tinymce/plugins/autolink/plugin.min.js.br"
  },
  "/tinymce/plugins/autolink/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"688-8KMBCNinT0oi0LrvmGpFHNZXb04\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 1672,
    "path": "../public/tinymce/plugins/autolink/plugin.min.js.gz"
  },
  "/tinymce/plugins/autoresize/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d6-nTPDLEzEhPXHwBGxYVe2PzIATn4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 214,
    "path": "../public/tinymce/plugins/autoresize/index.js"
  },
  "/tinymce/plugins/autoresize/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a2e-Rp4tm8WLqwV//X+0+T+6zXwG3+8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 6702,
    "path": "../public/tinymce/plugins/autoresize/plugin.js"
  },
  "/tinymce/plugins/autoresize/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"617-hBq3Wo2G3PVYO2WutYSwVWYaM7U\"",
    "mtime": "2024-06-02T20:47:37.379Z",
    "size": 1559,
    "path": "../public/tinymce/plugins/autoresize/plugin.js.br"
  },
  "/tinymce/plugins/autoresize/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6df-nfjvyXLdd+q0TtxldmsSKgf5o+M\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 1759,
    "path": "../public/tinymce/plugins/autoresize/plugin.js.gz"
  },
  "/tinymce/plugins/autoresize/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9d8-pMB3hNOaIqFvwnUh514wRk9YfN0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 2520,
    "path": "../public/tinymce/plugins/autoresize/plugin.min.js"
  },
  "/tinymce/plugins/autoresize/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"426-Z7IpGzRB82YRuzcUX80JLiWZrTM\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 1062,
    "path": "../public/tinymce/plugins/autoresize/plugin.min.js.br"
  },
  "/tinymce/plugins/autoresize/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4a1-cX5yoGa66BJd53kXgENmv33Acug\"",
    "mtime": "2024-06-02T20:47:37.367Z",
    "size": 1185,
    "path": "../public/tinymce/plugins/autoresize/plugin.min.js.gz"
  },
  "/tinymce/plugins/autosave/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0-42ldK2I0lak1lPI+QTL2ImswkBI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 208,
    "path": "../public/tinymce/plugins/autosave/index.js"
  },
  "/tinymce/plugins/autosave/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d63-taGdcGNWdKBxXOOqu0jRQTznjdc\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7523,
    "path": "../public/tinymce/plugins/autosave/plugin.js"
  },
  "/tinymce/plugins/autosave/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"704-wzDK6QrHYyzw6u1k5LQoevEfK6s\"",
    "mtime": "2024-06-02T20:47:37.383Z",
    "size": 1796,
    "path": "../public/tinymce/plugins/autosave/plugin.js.br"
  },
  "/tinymce/plugins/autosave/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"809-LscesFmlHn1nYkyk+rACfIlMZCY\"",
    "mtime": "2024-06-02T20:47:37.375Z",
    "size": 2057,
    "path": "../public/tinymce/plugins/autosave/plugin.js.gz"
  },
  "/tinymce/plugins/autosave/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d00-8aLO7utjkqJo9l7/Z2GuTxRSaks\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 3328,
    "path": "../public/tinymce/plugins/autosave/plugin.min.js"
  },
  "/tinymce/plugins/autosave/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4db-w1Zvwz9TJ5FvC4DvSUPrejYmCJ0\"",
    "mtime": "2024-06-02T20:47:37.375Z",
    "size": 1243,
    "path": "../public/tinymce/plugins/autosave/plugin.min.js.br"
  },
  "/tinymce/plugins/autosave/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"58d-JXyHUZQlq/rLHiM6NOMl7SGcB5g\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 1421,
    "path": "../public/tinymce/plugins/autosave/plugin.min.js.gz"
  },
  "/tinymce/plugins/charmap/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cd-+ZHpvYzUkSsM0o2Aa+t8Gk7GyMA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 205,
    "path": "../public/tinymce/plugins/charmap/index.js"
  },
  "/tinymce/plugins/charmap/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c3f-UTGfSD5w4ZA/tuLMv1iKFDRf8Yg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 35903,
    "path": "../public/tinymce/plugins/charmap/plugin.js"
  },
  "/tinymce/plugins/charmap/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1413-n9lVCOKFgj24nnYcRhc7F5MZhEM\"",
    "mtime": "2024-06-02T20:47:37.447Z",
    "size": 5139,
    "path": "../public/tinymce/plugins/charmap/plugin.js.br"
  },
  "/tinymce/plugins/charmap/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"17dd-JTp/OuQzIsk25xnBeHzJInEAAyA\"",
    "mtime": "2024-06-02T20:47:37.411Z",
    "size": 6109,
    "path": "../public/tinymce/plugins/charmap/plugin.js.gz"
  },
  "/tinymce/plugins/charmap/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b98-ZaJ2j+me1S95GB1ZkoJglh4eLzY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 11160,
    "path": "../public/tinymce/plugins/charmap/plugin.min.js"
  },
  "/tinymce/plugins/charmap/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"eaa-qIKpThAJlrPj2EKb/cnfcC9ssAg\"",
    "mtime": "2024-06-02T20:47:37.399Z",
    "size": 3754,
    "path": "../public/tinymce/plugins/charmap/plugin.min.js.br"
  },
  "/tinymce/plugins/charmap/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1182-MCc9OXe+zNh9rBGufQ8ORPCF2bo\"",
    "mtime": "2024-06-02T20:47:37.387Z",
    "size": 4482,
    "path": "../public/tinymce/plugins/charmap/plugin.min.js.gz"
  },
  "/tinymce/plugins/code/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4-Vb/OBZYBB89C59NofjMKP0IWTCM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 196,
    "path": "../public/tinymce/plugins/code/index.js"
  },
  "/tinymce/plugins/code/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"76b-JpKMJ9etssbkJPXQLW1Hmzdrf30\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1899,
    "path": "../public/tinymce/plugins/code/plugin.js"
  },
  "/tinymce/plugins/code/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"23c-BJVtNqGSDCekOD2t9d9GAMR45wY\"",
    "mtime": "2024-06-02T20:47:37.191Z",
    "size": 572,
    "path": "../public/tinymce/plugins/code/plugin.js.br"
  },
  "/tinymce/plugins/code/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"298-pATA9E6xJq5+iXoz2fJZ5GUY7Lk\"",
    "mtime": "2024-06-02T20:47:37.187Z",
    "size": 664,
    "path": "../public/tinymce/plugins/code/plugin.js.gz"
  },
  "/tinymce/plugins/code/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36d-vf3+eJq5tzD7WdboBFaC63OYh4w\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 877,
    "path": "../public/tinymce/plugins/code/plugin.min.js"
  },
  "/tinymce/plugins/directionality/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e2-8W5G1hA6CBk3ZRyYJL2pHDeQboY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 226,
    "path": "../public/tinymce/plugins/directionality/index.js"
  },
  "/tinymce/plugins/directionality/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3175-2ZgWFFMhLf1a381iFAsl6Pf14Mg\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 12661,
    "path": "../public/tinymce/plugins/directionality/plugin.js"
  },
  "/tinymce/plugins/directionality/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b33-OuPBeviespmKHhej8f/N/soO9dA\"",
    "mtime": "2024-06-02T20:47:37.371Z",
    "size": 2867,
    "path": "../public/tinymce/plugins/directionality/plugin.js.br"
  },
  "/tinymce/plugins/directionality/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c96-j/kZypPNYMGnUeG5IK9IB/eHnug\"",
    "mtime": "2024-06-02T20:47:37.359Z",
    "size": 3222,
    "path": "../public/tinymce/plugins/directionality/plugin.js.gz"
  },
  "/tinymce/plugins/directionality/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11e6-GzixTRGk894EXteR3EYRWhpADR4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4582,
    "path": "../public/tinymce/plugins/directionality/plugin.min.js"
  },
  "/tinymce/plugins/directionality/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6c6-kRtdGNpOp4UjxZgnfQ8XX/M+VSE\"",
    "mtime": "2024-06-02T20:47:37.355Z",
    "size": 1734,
    "path": "../public/tinymce/plugins/directionality/plugin.min.js.br"
  },
  "/tinymce/plugins/directionality/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"790-J6Z7RzVVVehTFtMOt8oxpq5sjCU\"",
    "mtime": "2024-06-02T20:47:37.351Z",
    "size": 1936,
    "path": "../public/tinymce/plugins/directionality/plugin.min.js.gz"
  },
  "/tinymce/plugins/codesample/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d6-w/P8fiHHYnJH/NIGnrs6Nrx1XAw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 214,
    "path": "../public/tinymce/plugins/codesample/index.js"
  },
  "/tinymce/plugins/codesample/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17078-FS7Hvu0zDEBEFNi8YG3kuJDT2tA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 94328,
    "path": "../public/tinymce/plugins/codesample/plugin.js"
  },
  "/tinymce/plugins/codesample/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4528-CYUpu1qK+cczL+Is1Qy6TTEylB0\"",
    "mtime": "2024-06-02T20:47:37.615Z",
    "size": 17704,
    "path": "../public/tinymce/plugins/codesample/plugin.js.br"
  },
  "/tinymce/plugins/codesample/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4def-Fb2tSFtfhLDdehoXWUXa0kqOp+w\"",
    "mtime": "2024-06-02T20:47:37.615Z",
    "size": 19951,
    "path": "../public/tinymce/plugins/codesample/plugin.js.gz"
  },
  "/tinymce/plugins/codesample/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bc97-07k05r17H6r3FNCwd3IqX8UMylc\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 48279,
    "path": "../public/tinymce/plugins/codesample/plugin.min.js"
  },
  "/tinymce/plugins/codesample/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"376f-wyT384S9xc/ST2NZ3I+n0j1sVhE\"",
    "mtime": "2024-06-02T20:47:37.359Z",
    "size": 14191,
    "path": "../public/tinymce/plugins/codesample/plugin.min.js.br"
  },
  "/tinymce/plugins/codesample/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3d3e-+i/W7MQmxfb4fRP8/5PyyHKbLqg\"",
    "mtime": "2024-06-02T20:47:37.311Z",
    "size": 15678,
    "path": "../public/tinymce/plugins/codesample/plugin.min.js.gz"
  },
  "/tinymce/plugins/emoticons/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-tmX09PlLmiqrkSNZZdWUuJMudb4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 211,
    "path": "../public/tinymce/plugins/emoticons/index.js"
  },
  "/tinymce/plugins/emoticons/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4302-l/rvvaZm6z94AwEkGgXY60lKiV0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 17154,
    "path": "../public/tinymce/plugins/emoticons/plugin.js"
  },
  "/tinymce/plugins/emoticons/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"f6d-pG8UKYiHWEYt8iF234npt4LGZmE\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 3949,
    "path": "../public/tinymce/plugins/emoticons/plugin.js.br"
  },
  "/tinymce/plugins/emoticons/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1148-GY1clNBndXWCZ59jjqsRRtSSvpU\"",
    "mtime": "2024-06-02T20:47:37.499Z",
    "size": 4424,
    "path": "../public/tinymce/plugins/emoticons/plugin.js.gz"
  },
  "/tinymce/plugins/emoticons/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19c9-8UnLu5zUOq1HmYFe49NCIaNpp+Y\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 6601,
    "path": "../public/tinymce/plugins/emoticons/plugin.min.js"
  },
  "/tinymce/plugins/emoticons/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a07-iiPxuzX9ItJEAhyLGEcC4EwSjEk\"",
    "mtime": "2024-06-02T20:47:37.451Z",
    "size": 2567,
    "path": "../public/tinymce/plugins/emoticons/plugin.min.js.br"
  },
  "/tinymce/plugins/emoticons/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"b28-shel8gdROJ41LmfkmmLPMQAV6u4\"",
    "mtime": "2024-06-02T20:47:37.447Z",
    "size": 2856,
    "path": "../public/tinymce/plugins/emoticons/plugin.min.js.gz"
  },
  "/tinymce/plugins/fullscreen/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d6-iY3Q7IAtYO5xb5q1VAFyDcBYQNA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 214,
    "path": "../public/tinymce/plugins/fullscreen/index.js"
  },
  "/tinymce/plugins/fullscreen/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a178-0OT0ZW1+coxkW0ccuLNno5ZOx6M\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 41336,
    "path": "../public/tinymce/plugins/fullscreen/plugin.js"
  },
  "/tinymce/plugins/fullscreen/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"216f-gfhOr9ZpJX+MGm3OY/lVt1mvsWg\"",
    "mtime": "2024-06-02T20:47:37.511Z",
    "size": 8559,
    "path": "../public/tinymce/plugins/fullscreen/plugin.js.br"
  },
  "/tinymce/plugins/fullscreen/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"252b-s7qdijQ9PyIPc69DunZA5HFCp0k\"",
    "mtime": "2024-06-02T20:47:37.471Z",
    "size": 9515,
    "path": "../public/tinymce/plugins/fullscreen/plugin.js.gz"
  },
  "/tinymce/plugins/fullscreen/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dc3-O4khrxsqME4qlgU0LV8azaNsuLE\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 15811,
    "path": "../public/tinymce/plugins/fullscreen/plugin.min.js"
  },
  "/tinymce/plugins/fullscreen/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"14cb-+P94pY+Nn4uM2KqQC0b4G/JpAEM\"",
    "mtime": "2024-06-02T20:47:37.467Z",
    "size": 5323,
    "path": "../public/tinymce/plugins/fullscreen/plugin.min.js.br"
  },
  "/tinymce/plugins/fullscreen/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"174d-ZDqz+IeChAajMaOYkVXCk72FAVg\"",
    "mtime": "2024-06-02T20:47:37.451Z",
    "size": 5965,
    "path": "../public/tinymce/plugins/fullscreen/plugin.min.js.gz"
  },
  "/tinymce/plugins/help/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4-kvh+QFe4nE+vR2/DSJjWiP6gtSo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 196,
    "path": "../public/tinymce/plugins/help/index.js"
  },
  "/tinymce/plugins/help/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b6b-xq+w7LsNQpoOYtAFAgXulQM3J6c\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23403,
    "path": "../public/tinymce/plugins/help/plugin.js"
  },
  "/tinymce/plugins/help/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1320-Kpw0Fa6SRXHZTLU47nmb5CjxCEk\"",
    "mtime": "2024-06-02T20:47:35.619Z",
    "size": 4896,
    "path": "../public/tinymce/plugins/help/plugin.js.br"
  },
  "/tinymce/plugins/help/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15be-LCX+P1W57YhwySHCQuytSnkQcEc\"",
    "mtime": "2024-06-02T20:47:35.735Z",
    "size": 5566,
    "path": "../public/tinymce/plugins/help/plugin.js.gz"
  },
  "/tinymce/plugins/help/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a27-XfIeys8vhfBEBu5rQVmFwdFexTQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 10791,
    "path": "../public/tinymce/plugins/help/plugin.min.js"
  },
  "/tinymce/plugins/help/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"db7-OXAAFqcZ/1P5e71RlTQDOo0MIAY\"",
    "mtime": "2024-06-02T20:47:35.595Z",
    "size": 3511,
    "path": "../public/tinymce/plugins/help/plugin.min.js.br"
  },
  "/tinymce/plugins/help/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"fb1-wDQUaFro9uzsBjIs7RA+k4+WuLA\"",
    "mtime": "2024-06-02T20:47:35.579Z",
    "size": 4017,
    "path": "../public/tinymce/plugins/help/plugin.min.js.gz"
  },
  "/tinymce/plugins/image/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-Wggd50ydK/l97LgnU8varWNm23Y\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 199,
    "path": "../public/tinymce/plugins/image/index.js"
  },
  "/tinymce/plugins/image/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bfb8-NcTThrT93LxHsEn+OUs6Sj3Zaag\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 49080,
    "path": "../public/tinymce/plugins/image/plugin.js"
  },
  "/tinymce/plugins/image/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"250e-Qvvsip05UoGY3967LaDnfS6e/OY\"",
    "mtime": "2024-06-02T20:47:35.691Z",
    "size": 9486,
    "path": "../public/tinymce/plugins/image/plugin.js.br"
  },
  "/tinymce/plugins/image/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2996-Xz8OUrZg95fnBEA0mpbDG9LeJUA\"",
    "mtime": "2024-06-02T20:47:35.783Z",
    "size": 10646,
    "path": "../public/tinymce/plugins/image/plugin.js.gz"
  },
  "/tinymce/plugins/image/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c85-kPeoH1IwmpFe4+mxIhAYrgRw/mA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 19589,
    "path": "../public/tinymce/plugins/image/plugin.min.js"
  },
  "/tinymce/plugins/image/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1852-Ots5eA2u3OvFvBKOFzTFXQFNyGU\"",
    "mtime": "2024-06-02T20:47:35.639Z",
    "size": 6226,
    "path": "../public/tinymce/plugins/image/plugin.min.js.br"
  },
  "/tinymce/plugins/image/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1b02-O+72JKxfeUni2tH46vnfHdHOLmY\"",
    "mtime": "2024-06-02T20:47:35.695Z",
    "size": 6914,
    "path": "../public/tinymce/plugins/image/plugin.min.js.gz"
  },
  "/tinymce/plugins/importcss/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-OdV8iwISmZe/IzApFt1xZsNyakM\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 211,
    "path": "../public/tinymce/plugins/importcss/index.js"
  },
  "/tinymce/plugins/importcss/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e72-VRQG8Xcp7IYZd7na5iZOxE+lk9U\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 11890,
    "path": "../public/tinymce/plugins/importcss/plugin.js"
  },
  "/tinymce/plugins/importcss/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a93-aYCr8yqJi1CnByp8BunNRubItbw\"",
    "mtime": "2024-06-02T20:47:35.707Z",
    "size": 2707,
    "path": "../public/tinymce/plugins/importcss/plugin.js.br"
  },
  "/tinymce/plugins/importcss/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"bd7-J7m1sJ0CZULm5Z5pcP9s609yaio\"",
    "mtime": "2024-06-02T20:47:35.719Z",
    "size": 3031,
    "path": "../public/tinymce/plugins/importcss/plugin.js.gz"
  },
  "/tinymce/plugins/importcss/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ffc-sXKwkQ1hcsgz1fsI37osKtHkp8U\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4092,
    "path": "../public/tinymce/plugins/importcss/plugin.min.js"
  },
  "/tinymce/plugins/importcss/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6bb-2lEwFlIa1u37tJe9CF9fiIOboUQ\"",
    "mtime": "2024-06-02T20:47:35.695Z",
    "size": 1723,
    "path": "../public/tinymce/plugins/importcss/plugin.min.js.br"
  },
  "/tinymce/plugins/importcss/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"774-lQnrs7cHdwqJTjDTc+cPUmPZHhI\"",
    "mtime": "2024-06-02T20:47:35.691Z",
    "size": 1908,
    "path": "../public/tinymce/plugins/importcss/plugin.min.js.gz"
  },
  "/tinymce/plugins/insertdatetime/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e2-ZzRzG2IGNMv6mgalfTzjXzwkKWw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 226,
    "path": "../public/tinymce/plugins/insertdatetime/index.js"
  },
  "/tinymce/plugins/insertdatetime/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19e9-LhpezXHWFN2nXdU1uCYRicEHEWA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 6633,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.js"
  },
  "/tinymce/plugins/insertdatetime/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"620-ofFl2dAMK+DuZl2FUG6c6PJlHes\"",
    "mtime": "2024-06-02T20:47:35.719Z",
    "size": 1568,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.js.br"
  },
  "/tinymce/plugins/insertdatetime/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6ef-NTp5U6uLpTsYm0I0TOBx4avnMpM\"",
    "mtime": "2024-06-02T20:47:35.711Z",
    "size": 1775,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.js.gz"
  },
  "/tinymce/plugins/insertdatetime/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bde-vrBlQhk1exW5AvQcQDZiK9s7cVE\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 3038,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.min.js"
  },
  "/tinymce/plugins/insertdatetime/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"486-dP+VSBQseoRkWutf4Z6x4l8oODg\"",
    "mtime": "2024-06-02T20:47:35.711Z",
    "size": 1158,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.min.js.br"
  },
  "/tinymce/plugins/insertdatetime/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"506-EFYhETZ1V1hfUnFsO9t/OZcokVI\"",
    "mtime": "2024-06-02T20:47:35.707Z",
    "size": 1286,
    "path": "../public/tinymce/plugins/insertdatetime/plugin.min.js.gz"
  },
  "/tinymce/plugins/link/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4-09a212RVbVR9/nBpS44mu+q9S4o\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 196,
    "path": "../public/tinymce/plugins/link/index.js"
  },
  "/tinymce/plugins/link/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a263-agRvds9wpv8nLCAnr2DH36g7DhA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 41571,
    "path": "../public/tinymce/plugins/link/plugin.js"
  },
  "/tinymce/plugins/link/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"211c-MAuUX4dffaG0ZIByx+Brl7MdPIs\"",
    "mtime": "2024-06-02T20:47:35.779Z",
    "size": 8476,
    "path": "../public/tinymce/plugins/link/plugin.js.br"
  },
  "/tinymce/plugins/link/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24e6-HbWQTnJKtITyuKBEW+YbdmEn3Xc\"",
    "mtime": "2024-06-02T20:47:35.807Z",
    "size": 9446,
    "path": "../public/tinymce/plugins/link/plugin.js.gz"
  },
  "/tinymce/plugins/link/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e6e-jFdMw+cbnds3cPcrrgvgrBO+wJ8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 15982,
    "path": "../public/tinymce/plugins/link/plugin.min.js"
  },
  "/tinymce/plugins/link/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c4-qyFdVqbV7te5EBX9hDsOylU/GJE\"",
    "mtime": "2024-06-02T20:47:35.735Z",
    "size": 5316,
    "path": "../public/tinymce/plugins/link/plugin.min.js.br"
  },
  "/tinymce/plugins/link/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1729-tEqYQeIlRL6nxm7nq4xew7PoXRY\"",
    "mtime": "2024-06-02T20:47:35.735Z",
    "size": 5929,
    "path": "../public/tinymce/plugins/link/plugin.min.js.gz"
  },
  "/tinymce/plugins/lists/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-rcgP4gMM/hIdEgRA3PSUmPUmx68\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 199,
    "path": "../public/tinymce/plugins/lists/index.js"
  },
  "/tinymce/plugins/lists/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1322c-yoV9wPQiQhjEQZUK4HFAwrjHLaU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 78380,
    "path": "../public/tinymce/plugins/lists/plugin.js"
  },
  "/tinymce/plugins/lists/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"38ec-g5uow8BWs/+tVtIILet6si55JeU\"",
    "mtime": "2024-06-02T20:47:35.887Z",
    "size": 14572,
    "path": "../public/tinymce/plugins/lists/plugin.js.br"
  },
  "/tinymce/plugins/lists/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3ff9-unYo/52CaBjgJlgwKNR7z82f8yk\"",
    "mtime": "2024-06-02T20:47:35.903Z",
    "size": 16377,
    "path": "../public/tinymce/plugins/lists/plugin.js.gz"
  },
  "/tinymce/plugins/lists/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e6c-9LYhNWHwVWlvkDDddNC6V8x6uQU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 28268,
    "path": "../public/tinymce/plugins/lists/plugin.min.js"
  },
  "/tinymce/plugins/lists/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2349-udvCNraEGdV8ePzdMyC7PL3YhwA\"",
    "mtime": "2024-06-02T20:47:35.779Z",
    "size": 9033,
    "path": "../public/tinymce/plugins/lists/plugin.min.js.br"
  },
  "/tinymce/plugins/lists/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26f6-ospcCstGcL+hEZASl2ma6hhnczg\"",
    "mtime": "2024-06-02T20:47:35.779Z",
    "size": 9974,
    "path": "../public/tinymce/plugins/lists/plugin.min.js.gz"
  },
  "/tinymce/plugins/media/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-2PAIw/ir688u/c4GAyNQ4qG4D8c\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 199,
    "path": "../public/tinymce/plugins/media/index.js"
  },
  "/tinymce/plugins/media/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a209-kASaNsQHMb4dB07AVaMeb1L1JsU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 41481,
    "path": "../public/tinymce/plugins/media/plugin.js"
  },
  "/tinymce/plugins/media/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2063-O3L8fkTb8ECcRx1pGvAsxgNIOJ8\"",
    "mtime": "2024-06-02T20:47:35.819Z",
    "size": 8291,
    "path": "../public/tinymce/plugins/media/plugin.js.br"
  },
  "/tinymce/plugins/media/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2423-Nej94Yb1V1p9IK0HmeI2L+B1LI0\"",
    "mtime": "2024-06-02T20:47:35.823Z",
    "size": 9251,
    "path": "../public/tinymce/plugins/media/plugin.js.gz"
  },
  "/tinymce/plugins/media/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4444-zXNBDN8lGF/ogZ/Gb1Ec9w3J/tw\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 17476,
    "path": "../public/tinymce/plugins/media/plugin.min.js"
  },
  "/tinymce/plugins/media/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"165d-7wQOlJrf1y+68bQc0kYd6hpYo30\"",
    "mtime": "2024-06-02T20:47:35.835Z",
    "size": 5725,
    "path": "../public/tinymce/plugins/media/plugin.min.js.br"
  },
  "/tinymce/plugins/media/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"18b6-Vu/2MhjtuGOdP11fCH9O4Ir4I/A\"",
    "mtime": "2024-06-02T20:47:35.831Z",
    "size": 6326,
    "path": "../public/tinymce/plugins/media/plugin.min.js.gz"
  },
  "/tinymce/plugins/nonbreaking/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9-oazOOfR7dMsz0uDABw2K8yPKABg\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 217,
    "path": "../public/tinymce/plugins/nonbreaking/index.js"
  },
  "/tinymce/plugins/nonbreaking/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e33-PplWfFaSN9Hrt4gnITvghVTp1Uk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3635,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.js"
  },
  "/tinymce/plugins/nonbreaking/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3eb-v1bpt5WIeMrSlDLUqZUQeC6qKVk\"",
    "mtime": "2024-06-02T20:47:35.807Z",
    "size": 1003,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.js.br"
  },
  "/tinymce/plugins/nonbreaking/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"478-Xt1Zk+KY5HwtB9NadUmj6JGSkh0\"",
    "mtime": "2024-06-02T20:47:35.799Z",
    "size": 1144,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.js.gz"
  },
  "/tinymce/plugins/nonbreaking/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"623-xKv4s5tI8/1Yuv+021yVcw2/ZU4\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1571,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.min.js"
  },
  "/tinymce/plugins/nonbreaking/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ab-KeO4hd971hXzczAx3hmqqmlqO54\"",
    "mtime": "2024-06-02T20:47:35.783Z",
    "size": 683,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.min.js.br"
  },
  "/tinymce/plugins/nonbreaking/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"319-1O8WO7sQ2vcn0+oPxXkIhe1Ckpc\"",
    "mtime": "2024-06-02T20:47:35.779Z",
    "size": 793,
    "path": "../public/tinymce/plugins/nonbreaking/plugin.min.js.gz"
  },
  "/tinymce/plugins/pagebreak/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-7u+QZrwWQuNJu68jTyC9Nj+J7xk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 211,
    "path": "../public/tinymce/plugins/pagebreak/index.js"
  },
  "/tinymce/plugins/pagebreak/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e7d-X2jRC3e0AhndHCfEqD2IZMP07+M\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3709,
    "path": "../public/tinymce/plugins/pagebreak/plugin.js"
  },
  "/tinymce/plugins/pagebreak/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3f6-acSCuoXA4BSk+4cSGyZCf47LEpw\"",
    "mtime": "2024-06-02T20:47:35.823Z",
    "size": 1014,
    "path": "../public/tinymce/plugins/pagebreak/plugin.js.br"
  },
  "/tinymce/plugins/pagebreak/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"499-UGnjVQ/1O5tUvJ6LO0+Bec7xk+8\"",
    "mtime": "2024-06-02T20:47:35.819Z",
    "size": 1177,
    "path": "../public/tinymce/plugins/pagebreak/plugin.js.gz"
  },
  "/tinymce/plugins/pagebreak/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66e-bzxp4q5TpZRtuhY0DcQbDs8LrFA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1646,
    "path": "../public/tinymce/plugins/pagebreak/plugin.min.js"
  },
  "/tinymce/plugins/pagebreak/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ed-NMiGxZaHYvDHdP0f5irXKZTVDT8\"",
    "mtime": "2024-06-02T20:47:35.799Z",
    "size": 749,
    "path": "../public/tinymce/plugins/pagebreak/plugin.min.js.br"
  },
  "/tinymce/plugins/pagebreak/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"373-+uE9tZPUv5Bax6f/skGdE9JV8rY\"",
    "mtime": "2024-06-02T20:47:35.799Z",
    "size": 883,
    "path": "../public/tinymce/plugins/pagebreak/plugin.min.js.gz"
  },
  "/tinymce/plugins/preview/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cd-ufsTTicuqtGIydom2MaqImIebN8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 205,
    "path": "../public/tinymce/plugins/preview/index.js"
  },
  "/tinymce/plugins/preview/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d86-Nd8IMr9hkVdpxdJihA1F/VJDjTk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3462,
    "path": "../public/tinymce/plugins/preview/plugin.js"
  },
  "/tinymce/plugins/preview/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"41f-1gTLYm4ENJzN8mRd9UnHmPlkOro\"",
    "mtime": "2024-06-02T20:47:35.835Z",
    "size": 1055,
    "path": "../public/tinymce/plugins/preview/plugin.js.br"
  },
  "/tinymce/plugins/preview/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4d3-5ESipj/9buI1CedSMSEEZpbEOOo\"",
    "mtime": "2024-06-02T20:47:35.835Z",
    "size": 1235,
    "path": "../public/tinymce/plugins/preview/plugin.js.gz"
  },
  "/tinymce/plugins/preview/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b6-H3cfDnNsHyGbRmlUZA7FHAXvM+k\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1718,
    "path": "../public/tinymce/plugins/preview/plugin.min.js"
  },
  "/tinymce/plugins/preview/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"314-TrqPrdppbhbZldfM+3X7bJVF17k\"",
    "mtime": "2024-06-02T20:47:35.811Z",
    "size": 788,
    "path": "../public/tinymce/plugins/preview/plugin.min.js.br"
  },
  "/tinymce/plugins/preview/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3b0-bw803k4WMxJDfgv/EG5iwP2lpn4\"",
    "mtime": "2024-06-02T20:47:35.811Z",
    "size": 944,
    "path": "../public/tinymce/plugins/preview/plugin.min.js.gz"
  },
  "/tinymce/plugins/quickbars/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-SnLqrrDb3bhNu0Jo5hi0RRpIJnA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 211,
    "path": "../public/tinymce/plugins/quickbars/index.js"
  },
  "/tinymce/plugins/quickbars/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36cd-Hp1Ns+TeY4hBwj0tCmh49Y6sRd8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 14029,
    "path": "../public/tinymce/plugins/quickbars/plugin.js"
  },
  "/tinymce/plugins/quickbars/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c60-1LMBYbyt8AvNFBknJdkcypAJSlg\"",
    "mtime": "2024-06-02T20:47:35.851Z",
    "size": 3168,
    "path": "../public/tinymce/plugins/quickbars/plugin.js.br"
  },
  "/tinymce/plugins/quickbars/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e2a-+sECjqZc3Xes18Bj7qQrIXHpF58\"",
    "mtime": "2024-06-02T20:47:35.855Z",
    "size": 3626,
    "path": "../public/tinymce/plugins/quickbars/plugin.js.gz"
  },
  "/tinymce/plugins/quickbars/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"144d-DLfs2DqHCNA5j+l8Rl/72cGq2nE\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 5197,
    "path": "../public/tinymce/plugins/quickbars/plugin.min.js"
  },
  "/tinymce/plugins/quickbars/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"789-IHkhvJuvfTJhgdxb46iPBrhEEOw\"",
    "mtime": "2024-06-02T20:47:35.831Z",
    "size": 1929,
    "path": "../public/tinymce/plugins/quickbars/plugin.min.js.br"
  },
  "/tinymce/plugins/quickbars/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"8b2-IQZK4VN1sseLCjtXX+lgSMQW3VE\"",
    "mtime": "2024-06-02T20:47:35.827Z",
    "size": 2226,
    "path": "../public/tinymce/plugins/quickbars/plugin.min.js.gz"
  },
  "/tinymce/plugins/save/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4-3RUWgIzije2QCIkOLawLJNWn2uA\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 196,
    "path": "../public/tinymce/plugins/save/index.js"
  },
  "/tinymce/plugins/save/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dc2-UcUh5Y5WUJlAqjJAEHSkDOsqnIk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 3522,
    "path": "../public/tinymce/plugins/save/plugin.js"
  },
  "/tinymce/plugins/save/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"380-V/fPXTGvcbMXtjyaFGWe5JXhysQ\"",
    "mtime": "2024-06-02T20:47:35.839Z",
    "size": 896,
    "path": "../public/tinymce/plugins/save/plugin.js.br"
  },
  "/tinymce/plugins/save/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"401-0MkfDEvOu+X5e5sv17kd7a/4KG8\"",
    "mtime": "2024-06-02T20:47:35.835Z",
    "size": 1025,
    "path": "../public/tinymce/plugins/save/plugin.js.gz"
  },
  "/tinymce/plugins/save/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64a-kVnfSRUZt7+pCc//EjQHT6WCDb4\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1610,
    "path": "../public/tinymce/plugins/save/plugin.min.js"
  },
  "/tinymce/plugins/save/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2a6-cHT2xTiKO2FTo6XcjwcNVsMMe0o\"",
    "mtime": "2024-06-02T20:47:35.831Z",
    "size": 678,
    "path": "../public/tinymce/plugins/save/plugin.min.js.br"
  },
  "/tinymce/plugins/save/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2e7-R13jByGyuq5BA23V+Z55qH/4Dfc\"",
    "mtime": "2024-06-02T20:47:35.831Z",
    "size": 743,
    "path": "../public/tinymce/plugins/save/plugin.min.js.gz"
  },
  "/tinymce/plugins/searchreplace/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"df-Yb3DuP+wWBj6m5Gjmavq+ypP2Ng\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 223,
    "path": "../public/tinymce/plugins/searchreplace/index.js"
  },
  "/tinymce/plugins/searchreplace/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cb2-Y5LsTJUvEwThZtgfIp8qp1BWjAY\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 36018,
    "path": "../public/tinymce/plugins/searchreplace/plugin.js"
  },
  "/tinymce/plugins/searchreplace/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d4f-CHGynRWBO/4grVt5097EY+Rr8Y8\"",
    "mtime": "2024-06-02T20:47:35.879Z",
    "size": 7503,
    "path": "../public/tinymce/plugins/searchreplace/plugin.js.br"
  },
  "/tinymce/plugins/searchreplace/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2191-BH7DaSWBRsK9Su+i4DDZ7MeQnVw\"",
    "mtime": "2024-06-02T20:47:35.891Z",
    "size": 8593,
    "path": "../public/tinymce/plugins/searchreplace/plugin.js.gz"
  },
  "/tinymce/plugins/searchreplace/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3451-wkMsl2Yuo3FSGZV8QToJbrzGclo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 13393,
    "path": "../public/tinymce/plugins/searchreplace/plugin.min.js"
  },
  "/tinymce/plugins/searchreplace/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"133e-vfNYgG/eFYdDOTlWMPVPbwk3Wso\"",
    "mtime": "2024-06-02T20:47:35.855Z",
    "size": 4926,
    "path": "../public/tinymce/plugins/searchreplace/plugin.min.js.br"
  },
  "/tinymce/plugins/searchreplace/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15a4-HkmJk2wpPFABWw4TMXH4h4Ejh4s\"",
    "mtime": "2024-06-02T20:47:35.839Z",
    "size": 5540,
    "path": "../public/tinymce/plugins/searchreplace/plugin.min.js.gz"
  },
  "/tinymce/plugins/table/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c7-Y7EEqhDuaw4J9r7rQgAoFkIUA3o\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 199,
    "path": "../public/tinymce/plugins/table/index.js"
  },
  "/tinymce/plugins/table/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d506-/AIjs9ximw7uIxGfMOufwk9haQk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 120070,
    "path": "../public/tinymce/plugins/table/plugin.js"
  },
  "/tinymce/plugins/table/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4f32-qWsGhrh6zqNVu0CJ4XR3dRjW0hk\"",
    "mtime": "2024-06-02T20:47:37.175Z",
    "size": 20274,
    "path": "../public/tinymce/plugins/table/plugin.js.br"
  },
  "/tinymce/plugins/table/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5aad-t7v0818zYzvWGZCo06q9mBKrTB4\"",
    "mtime": "2024-06-02T20:47:37.167Z",
    "size": 23213,
    "path": "../public/tinymce/plugins/table/plugin.js.gz"
  },
  "/tinymce/plugins/table/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bb92-ogaovwrj/qlub/uXUcwtaTN3Azg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 48018,
    "path": "../public/tinymce/plugins/table/plugin.min.js"
  },
  "/tinymce/plugins/table/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"31d1-OA+R0cj+yUOHDlIyqHKypWS0KXs\"",
    "mtime": "2024-06-02T20:47:35.903Z",
    "size": 12753,
    "path": "../public/tinymce/plugins/table/plugin.min.js.br"
  },
  "/tinymce/plugins/table/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"377f-jtfEgOcIzaRpKJyoW3OIx+2LeeI\"",
    "mtime": "2024-06-02T20:47:35.855Z",
    "size": 14207,
    "path": "../public/tinymce/plugins/table/plugin.min.js.gz"
  },
  "/tinymce/plugins/visualblocks/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dc-1V68ErfSKyGm8Gp7HopNhp3boK8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 220,
    "path": "../public/tinymce/plugins/visualblocks/index.js"
  },
  "/tinymce/plugins/visualblocks/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b51-1uvjjGr+FryLIGXctKpgEeRXZOo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 2897,
    "path": "../public/tinymce/plugins/visualblocks/plugin.js"
  },
  "/tinymce/plugins/visualblocks/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2df-TTZYUXr9wj6ZLW81DGYR11GtyYU\"",
    "mtime": "2024-06-02T20:47:35.883Z",
    "size": 735,
    "path": "../public/tinymce/plugins/visualblocks/plugin.js.br"
  },
  "/tinymce/plugins/visualblocks/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"33c-mZlww1EL4ffKVIWltKYjTqs+Dpc\"",
    "mtime": "2024-06-02T20:47:35.879Z",
    "size": 828,
    "path": "../public/tinymce/plugins/visualblocks/plugin.js.gz"
  },
  "/tinymce/plugins/visualblocks/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ce-Bn2EFIKPQ22k+PEX3thw50ekjo4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1230,
    "path": "../public/tinymce/plugins/visualblocks/plugin.min.js"
  },
  "/tinymce/plugins/visualblocks/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1fc-hHkK7E2NEf7FKU2Z5WrPQzdoxHA\"",
    "mtime": "2024-06-02T20:47:35.855Z",
    "size": 508,
    "path": "../public/tinymce/plugins/visualblocks/plugin.min.js.br"
  },
  "/tinymce/plugins/visualblocks/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"248-cKnfcX3twdEYPhj+8lTC9DcJhO8\"",
    "mtime": "2024-06-02T20:47:35.851Z",
    "size": 584,
    "path": "../public/tinymce/plugins/visualblocks/plugin.min.js.gz"
  },
  "/tinymce/plugins/visualchars/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9-+jyZGriksG0wIqGpBQ0S+X7KCEo\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 217,
    "path": "../public/tinymce/plugins/visualchars/index.js"
  },
  "/tinymce/plugins/visualchars/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"411f-c0AmlaL39nCS8Un0LMDs6Arn43Q\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 16671,
    "path": "../public/tinymce/plugins/visualchars/plugin.js"
  },
  "/tinymce/plugins/visualchars/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"ea3-CjobqGtN1xpLaTDKnwWpectNUUg\"",
    "mtime": "2024-06-02T20:47:35.907Z",
    "size": 3747,
    "path": "../public/tinymce/plugins/visualchars/plugin.js.br"
  },
  "/tinymce/plugins/visualchars/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1071-iYDNHhMYo92o0aMxYlBrkBIkeh4\"",
    "mtime": "2024-06-02T20:47:35.891Z",
    "size": 4209,
    "path": "../public/tinymce/plugins/visualchars/plugin.js.gz"
  },
  "/tinymce/plugins/visualchars/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16ed-a2FTKOS3DZhaO1KJ8cFUbsNE7JM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5869,
    "path": "../public/tinymce/plugins/visualchars/plugin.min.js"
  },
  "/tinymce/plugins/visualchars/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"8cc-CoooTN9GiU6x8dtyHg+ZjG/kw6c\"",
    "mtime": "2024-06-02T20:47:35.891Z",
    "size": 2252,
    "path": "../public/tinymce/plugins/visualchars/plugin.min.js.br"
  },
  "/tinymce/plugins/visualchars/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9bc-OPbTiclYfwVE3nLyPl8IAvsL2P4\"",
    "mtime": "2024-06-02T20:47:35.883Z",
    "size": 2492,
    "path": "../public/tinymce/plugins/visualchars/plugin.min.js.gz"
  },
  "/tinymce/plugins/wordcount/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3-EBUFQqVVHaHXVAjYa6B7RdeKJM8\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 211,
    "path": "../public/tinymce/plugins/wordcount/index.js"
  },
  "/tinymce/plugins/wordcount/plugin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"539f-7LrAP4J7L49z2UlsheRhaHJn2kA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 21407,
    "path": "../public/tinymce/plugins/wordcount/plugin.js"
  },
  "/tinymce/plugins/wordcount/plugin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13df-ZtiF8uV0yXtd/6jLwHfBnz2Eab8\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 5087,
    "path": "../public/tinymce/plugins/wordcount/plugin.js.br"
  },
  "/tinymce/plugins/wordcount/plugin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"19e6-FdttT8atXwu4QQbC1grvi6UmvNk\"",
    "mtime": "2024-06-02T20:47:35.903Z",
    "size": 6630,
    "path": "../public/tinymce/plugins/wordcount/plugin.js.gz"
  },
  "/tinymce/plugins/wordcount/plugin.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f02-QqFFFTulr5GwjJbbJnnkS6hbAOw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 12034,
    "path": "../public/tinymce/plugins/wordcount/plugin.min.js"
  },
  "/tinymce/plugins/wordcount/plugin.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"edd-QmKiYTeliZDZFNylvJw7ydvu6WI\"",
    "mtime": "2024-06-02T20:47:35.903Z",
    "size": 3805,
    "path": "../public/tinymce/plugins/wordcount/plugin.min.js.br"
  },
  "/tinymce/plugins/wordcount/plugin.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"149a-tWtvt4RgyHVegnHXvkHSsj0tW2c\"",
    "mtime": "2024-06-02T20:47:35.903Z",
    "size": 5274,
    "path": "../public/tinymce/plugins/wordcount/plugin.min.js.gz"
  },
  "/tinymce/themes/silver/index.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c6-DjpAVpiOegbF9N7T8wAG8b5V1EU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 198,
    "path": "../public/tinymce/themes/silver/index.js"
  },
  "/tinymce/themes/silver/theme.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"111610-a4NPG8hNEO3F2GN7bxcM1ojlqJE\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1119760,
    "path": "../public/tinymce/themes/silver/theme.js"
  },
  "/tinymce/themes/silver/theme.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b6be-3kbfGzOLBM5HC8cWMi6VAImIJyk\"",
    "mtime": "2024-06-02T20:47:38.187Z",
    "size": 177854,
    "path": "../public/tinymce/themes/silver/theme.js.br"
  },
  "/tinymce/themes/silver/theme.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37e4a-Lh6FFw9cBbawAVVdEK3p9R3LkMg\"",
    "mtime": "2024-06-02T20:47:37.747Z",
    "size": 228938,
    "path": "../public/tinymce/themes/silver/theme.js.gz"
  },
  "/tinymce/themes/silver/theme.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"65e38-wZ3gjbBJMUx/qXn3KdrB3fBO0nQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 417336,
    "path": "../public/tinymce/themes/silver/theme.min.js"
  },
  "/tinymce/themes/silver/theme.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1bc20-yn19jF0+zA4qIFiBugOOMstwptA\"",
    "mtime": "2024-06-02T20:47:37.679Z",
    "size": 113696,
    "path": "../public/tinymce/themes/silver/theme.min.js.br"
  },
  "/tinymce/themes/silver/theme.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"213c1-SjdrImjk72B2CN4/6ue99Dc0P8E\"",
    "mtime": "2024-06-02T20:47:37.679Z",
    "size": 136129,
    "path": "../public/tinymce/themes/silver/theme.min.js.gz"
  },
  "/tinymce/skins/ui/oxide/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6798-ZDn6uOKh1DBhjnPx4Om2DIBCop4\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 26520,
    "path": "../public/tinymce/skins/ui/oxide/content.css"
  },
  "/tinymce/skins/ui/oxide/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14de-4SfPTxrgBqLPRECGf0QzIUQsMwY\"",
    "mtime": "2024-06-02T20:47:35.955Z",
    "size": 5342,
    "path": "../public/tinymce/skins/ui/oxide/content.css.br"
  },
  "/tinymce/skins/ui/oxide/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1829-2+evHTgyWxQgessFhk2P82ojYP0\"",
    "mtime": "2024-06-02T20:47:35.927Z",
    "size": 6185,
    "path": "../public/tinymce/skins/ui/oxide/content.css.gz"
  },
  "/tinymce/skins/ui/oxide/content.inline.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"674d-AYcqF97ylutyfF3pz8DJqB5656Y\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26445,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.css"
  },
  "/tinymce/skins/ui/oxide/content.inline.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c5-hDuQxpAXDcID2MUuA/TRpSQ28FA\"",
    "mtime": "2024-06-02T20:47:36.003Z",
    "size": 5317,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.css.br"
  },
  "/tinymce/skins/ui/oxide/content.inline.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1812-+kHOHYnRqiZaNGf5S7CaaWg5Rq0\"",
    "mtime": "2024-06-02T20:47:35.979Z",
    "size": 6162,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.css.gz"
  },
  "/tinymce/skins/ui/oxide/content.inline.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d15-z/Jio5yWMrNqe11MXOwkvVDK6mY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23829,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.js"
  },
  "/tinymce/skins/ui/oxide/content.inline.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13e9-SnFSPYgV5KWjCpyTPzXYv0cFFdU\"",
    "mtime": "2024-06-02T20:47:35.979Z",
    "size": 5097,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.js.br"
  },
  "/tinymce/skins/ui/oxide/content.inline.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16d5-zUNLAUnKPoQo0dGBxk7N8najGj8\"",
    "mtime": "2024-06-02T20:47:35.955Z",
    "size": 5845,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.js.gz"
  },
  "/tinymce/skins/ui/oxide/content.inline.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c8d-7Ho/jzM0KJo/Ng3O2PzmC/AGiq0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23693,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.min.css"
  },
  "/tinymce/skins/ui/oxide/content.inline.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13a8-26eYYdDRwKaJ4RYHyzs+0fDd2MA\"",
    "mtime": "2024-06-02T20:47:36.027Z",
    "size": 5032,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.min.css.br"
  },
  "/tinymce/skins/ui/oxide/content.inline.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"168d-v5/oWvR3ELdA9nCJJtC6YrbPUv4\"",
    "mtime": "2024-06-02T20:47:35.999Z",
    "size": 5773,
    "path": "../public/tinymce/skins/ui/oxide/content.inline.min.css.gz"
  },
  "/tinymce/skins/ui/oxide/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d42-9YRoAqf2tsD4gWBD6jifQ1BhLq8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23874,
    "path": "../public/tinymce/skins/ui/oxide/content.js"
  },
  "/tinymce/skins/ui/oxide/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13ea-Zldn6iuer7S55bHzhCULSWPKESo\"",
    "mtime": "2024-06-02T20:47:36.027Z",
    "size": 5098,
    "path": "../public/tinymce/skins/ui/oxide/content.js.br"
  },
  "/tinymce/skins/ui/oxide/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16e4-GfMg0uIHqYqmC5pniJYLrNUZYvc\"",
    "mtime": "2024-06-02T20:47:36.003Z",
    "size": 5860,
    "path": "../public/tinymce/skins/ui/oxide/content.js.gz"
  },
  "/tinymce/skins/ui/oxide/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5cc8-vHbDFusjb+VlJFLm4+G9BWUCtP8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23752,
    "path": "../public/tinymce/skins/ui/oxide/content.min.css"
  },
  "/tinymce/skins/ui/oxide/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13b5-OL/CGNBuooyY0et/P+QbkQfnoBo\"",
    "mtime": "2024-06-02T20:47:36.051Z",
    "size": 5045,
    "path": "../public/tinymce/skins/ui/oxide/content.min.css.br"
  },
  "/tinymce/skins/ui/oxide/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16a0-HmEA5nhGLWdxUXz1SVy7vwLJKQk\"",
    "mtime": "2024-06-02T20:47:36.027Z",
    "size": 5792,
    "path": "../public/tinymce/skins/ui/oxide/content.min.css.gz"
  },
  "/tinymce/skins/ui/oxide/skin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a5d3-SVgK0s2laRtFWLu+r/RskGBbIkw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 107987,
    "path": "../public/tinymce/skins/ui/oxide/skin.css"
  },
  "/tinymce/skins/ui/oxide/skin.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"302f-TzXVkPFa+RwHUrSw+1CgxOII7fg\"",
    "mtime": "2024-06-02T20:47:36.135Z",
    "size": 12335,
    "path": "../public/tinymce/skins/ui/oxide/skin.css.br"
  },
  "/tinymce/skins/ui/oxide/skin.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3835-p8FIKZBS/T6W6v4aZqQ2XLRXWHE\"",
    "mtime": "2024-06-02T20:47:36.027Z",
    "size": 14389,
    "path": "../public/tinymce/skins/ui/oxide/skin.css.gz"
  },
  "/tinymce/skins/ui/oxide/skin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16482-tsfnJNW2ZRzNeS1f2aucLOsXhNg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 91266,
    "path": "../public/tinymce/skins/ui/oxide/skin.js"
  },
  "/tinymce/skins/ui/oxide/skin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2dee-MshuZP8+EFo1GiMzf6kMlUOLtWA\"",
    "mtime": "2024-06-02T20:47:36.139Z",
    "size": 11758,
    "path": "../public/tinymce/skins/ui/oxide/skin.js.br"
  },
  "/tinymce/skins/ui/oxide/skin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3404-rS5cWTHj/8ZT1O3+maDjw7lEj18\"",
    "mtime": "2024-06-02T20:47:36.051Z",
    "size": 13316,
    "path": "../public/tinymce/skins/ui/oxide/skin.js.gz"
  },
  "/tinymce/skins/ui/oxide/skin.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16404-r9zZtMrzaWRXSOdj+OfVWnxEk84\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 91140,
    "path": "../public/tinymce/skins/ui/oxide/skin.min.css"
  },
  "/tinymce/skins/ui/oxide/skin.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d9f-IjKTDiLNLBGyRrTRSgfJkOEqkG4\"",
    "mtime": "2024-06-02T20:47:36.227Z",
    "size": 11679,
    "path": "../public/tinymce/skins/ui/oxide/skin.min.css.br"
  },
  "/tinymce/skins/ui/oxide/skin.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"33b5-sfUZByFu0EXlKV8hAP6IHOy1jvo\"",
    "mtime": "2024-06-02T20:47:36.135Z",
    "size": 13237,
    "path": "../public/tinymce/skins/ui/oxide/skin.min.css.gz"
  },
  "/tinymce/skins/ui/oxide/skin.shadowdom.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"257-10B16BJjHtfgqlwO1lD7LQvUiJI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 599,
    "path": "../public/tinymce/skins/ui/oxide/skin.shadowdom.css"
  },
  "/tinymce/skins/ui/oxide/skin.shadowdom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"260-eR0b59PRA/GmmbfC6axME8Rjb0c\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 608,
    "path": "../public/tinymce/skins/ui/oxide/skin.shadowdom.js"
  },
  "/tinymce/skins/ui/oxide/skin.shadowdom.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-k5GgXGabzlhQB8LPHjhrT0+mXrk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 508,
    "path": "../public/tinymce/skins/ui/oxide/skin.shadowdom.min.css"
  },
  "/tinymce/skins/ui/oxide-dark/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6598-Km/crqrqO6pnOS0FKiyvE4RrWxQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26008,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.css"
  },
  "/tinymce/skins/ui/oxide-dark/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14a5-1TOGvHo9kHhwasI4uKpi6bTY700\"",
    "mtime": "2024-06-02T20:47:36.435Z",
    "size": 5285,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"17dc-y3W6JHbz/+LtLPiaPex71wOxNBU\"",
    "mtime": "2024-06-02T20:47:36.411Z",
    "size": 6108,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"674d-AYcqF97ylutyfF3pz8DJqB5656Y\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26445,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.css"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c5-hDuQxpAXDcID2MUuA/TRpSQ28FA\"",
    "mtime": "2024-06-02T20:47:36.463Z",
    "size": 5317,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1812-+kHOHYnRqiZaNGf5S7CaaWg5Rq0\"",
    "mtime": "2024-06-02T20:47:36.435Z",
    "size": 6162,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d12-0hQ7w8dqhMgBpysw17jZNanadXk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23826,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.js"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13e6-OEPxUogV/DxaBgpQ21/KhRg3CJQ\"",
    "mtime": "2024-06-02T20:47:36.483Z",
    "size": 5094,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.js.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16d6-NWItbKvlQBkP/dveL6xjtc1aCoo\"",
    "mtime": "2024-06-02T20:47:36.451Z",
    "size": 5846,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.js.gz"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c8d-7Ho/jzM0KJo/Ng3O2PzmC/AGiq0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23693,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.min.css"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13a8-26eYYdDRwKaJ4RYHyzs+0fDd2MA\"",
    "mtime": "2024-06-02T20:47:36.507Z",
    "size": 5032,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.min.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.inline.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"168d-v5/oWvR3ELdA9nCJJtC6YrbPUv4\"",
    "mtime": "2024-06-02T20:47:36.483Z",
    "size": 5773,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.inline.min.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5bba-Xeq1/DxYRJTbYA0dMYDyRX6qe88\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23482,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.js"
  },
  "/tinymce/skins/ui/oxide-dark/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13ce-dVA8mhCuz9iznG6a6j85dMp9LrI\"",
    "mtime": "2024-06-02T20:47:36.487Z",
    "size": 5070,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.js.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16b1-M/ym89c/Bwl6lPEqvmCFiuvxsKM\"",
    "mtime": "2024-06-02T20:47:36.463Z",
    "size": 5809,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.js.gz"
  },
  "/tinymce/skins/ui/oxide-dark/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b43-08S59DhSdN+Rq784QWQe0HO92/8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23363,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.min.css"
  },
  "/tinymce/skins/ui/oxide-dark/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1384-3dPRKf7QPsRIAcjexNpXNLlAjyQ\"",
    "mtime": "2024-06-02T20:47:36.507Z",
    "size": 4996,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.min.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"166d-6fWFcCqGam6SHAA+ylovT68Uzwo\"",
    "mtime": "2024-06-02T20:47:36.483Z",
    "size": 5741,
    "path": "../public/tinymce/skins/ui/oxide-dark/content.min.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/skin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a58f-IeXbdmpSIANeZBYMpgXN2rhdlYM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 107919,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.css"
  },
  "/tinymce/skins/ui/oxide-dark/skin.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3035-XBDjbmG3cBNiavi//LbYjVX3oU8\"",
    "mtime": "2024-06-02T20:47:36.595Z",
    "size": 12341,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/skin.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3849-vhxURzoIsNMc8RTZ06FXycEjz8U\"",
    "mtime": "2024-06-02T20:47:36.487Z",
    "size": 14409,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/skin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1646a-IQCMEQ4QyROdVPWDVaWsmE8V2Xw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 91242,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.js"
  },
  "/tinymce/skins/ui/oxide-dark/skin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2dc9-9YO3h5WJEjhBe0w+6JqYWWl267Y\"",
    "mtime": "2024-06-02T20:47:36.595Z",
    "size": 11721,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.js.br"
  },
  "/tinymce/skins/ui/oxide-dark/skin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3410-H7pUyGrLsHBInCmpV0S/ev4Gwvo\"",
    "mtime": "2024-06-02T20:47:36.507Z",
    "size": 13328,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.js.gz"
  },
  "/tinymce/skins/ui/oxide-dark/skin.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"163ef-F8o2XxRla+fD55H8m8O5oJdH8NQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 91119,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.min.css"
  },
  "/tinymce/skins/ui/oxide-dark/skin.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d86-ez0AtonBAhVeS50NmMLma6tVbqE\"",
    "mtime": "2024-06-02T20:47:36.651Z",
    "size": 11654,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.min.css.br"
  },
  "/tinymce/skins/ui/oxide-dark/skin.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"33be-7Lookdr/GX+bBrXYzwRYyDKsJvY\"",
    "mtime": "2024-06-02T20:47:36.559Z",
    "size": 13246,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.min.css.gz"
  },
  "/tinymce/skins/ui/oxide-dark/skin.shadowdom.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"257-10B16BJjHtfgqlwO1lD7LQvUiJI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 599,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.shadowdom.css"
  },
  "/tinymce/skins/ui/oxide-dark/skin.shadowdom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25d-qGxbEhOrfwrwYHMZ3EakuZJE2LE\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 605,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.shadowdom.js"
  },
  "/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-k5GgXGabzlhQB8LPHjhrT0+mXrk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 508,
    "path": "../public/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css"
  },
  "/tinymce/skins/ui/tinymce-5/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6798-ZDn6uOKh1DBhjnPx4Om2DIBCop4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26520,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.css"
  },
  "/tinymce/skins/ui/tinymce-5/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14de-4SfPTxrgBqLPRECGf0QzIUQsMwY\"",
    "mtime": "2024-06-02T20:47:36.147Z",
    "size": 5342,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1829-2+evHTgyWxQgessFhk2P82ojYP0\"",
    "mtime": "2024-06-02T20:47:36.123Z",
    "size": 6185,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"674d-AYcqF97ylutyfF3pz8DJqB5656Y\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26445,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.css"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c5-hDuQxpAXDcID2MUuA/TRpSQ28FA\"",
    "mtime": "2024-06-02T20:47:36.163Z",
    "size": 5317,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1812-+kHOHYnRqiZaNGf5S7CaaWg5Rq0\"",
    "mtime": "2024-06-02T20:47:36.135Z",
    "size": 6162,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d17-NGX8rpbwQ3ixY8k+L5YSLqupSyE\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23831,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.js"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13ef-6V7ZC+P6k/VXPKxS6ILZbmWmbaU\"",
    "mtime": "2024-06-02T20:47:36.171Z",
    "size": 5103,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.js.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16d4-3Pr32m3I/YIJb6fAyTScHHn8PyU\"",
    "mtime": "2024-06-02T20:47:36.147Z",
    "size": 5844,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c8d-7Ho/jzM0KJo/Ng3O2PzmC/AGiq0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23693,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.min.css"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13a8-26eYYdDRwKaJ4RYHyzs+0fDd2MA\"",
    "mtime": "2024-06-02T20:47:36.163Z",
    "size": 5032,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.inline.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"168d-v5/oWvR3ELdA9nCJJtC6YrbPUv4\"",
    "mtime": "2024-06-02T20:47:36.139Z",
    "size": 5773,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.inline.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d44-PKLUe1vjIayinAngZuLoSSoWkkI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23876,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.js"
  },
  "/tinymce/skins/ui/tinymce-5/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13f3-tOVnLoQnbcRBqXzHq5JJWB1TrZk\"",
    "mtime": "2024-06-02T20:47:36.183Z",
    "size": 5107,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.js.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16e4-mA1fbHEkJF92TWiVYNCPAXOWyGg\"",
    "mtime": "2024-06-02T20:47:36.163Z",
    "size": 5860,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5cc8-vHbDFusjb+VlJFLm4+G9BWUCtP8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23752,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.min.css"
  },
  "/tinymce/skins/ui/tinymce-5/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13b5-OL/CGNBuooyY0et/P+QbkQfnoBo\"",
    "mtime": "2024-06-02T20:47:36.183Z",
    "size": 5045,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16a0-HmEA5nhGLWdxUXz1SVy7vwLJKQk\"",
    "mtime": "2024-06-02T20:47:36.163Z",
    "size": 5792,
    "path": "../public/tinymce/skins/ui/tinymce-5/content.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/skin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b185-3LWd66QeKbnTtCWkPxEWmb2u7FQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 110981,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.css"
  },
  "/tinymce/skins/ui/tinymce-5/skin.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3149-/Q7XXIm8Mu4hrenO4Eu4pu9NirI\"",
    "mtime": "2024-06-02T20:47:36.387Z",
    "size": 12617,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/skin.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3a79-uGnahstN3WW40g+iBTpdyzFnMbg\"",
    "mtime": "2024-06-02T20:47:36.271Z",
    "size": 14969,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/skin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16f21-UBWlZgdh4AmUHuj7MXN2ZKh1Zos\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 93985,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.js"
  },
  "/tinymce/skins/ui/tinymce-5/skin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ee9-FnGqUUTf3G5JbjuFiBJ9WpSR+4c\"",
    "mtime": "2024-06-02T20:47:36.271Z",
    "size": 12009,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.js.br"
  },
  "/tinymce/skins/ui/tinymce-5/skin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3622-n4HYEMLndWX67f55bGb6Qi0x8lU\"",
    "mtime": "2024-06-02T20:47:36.179Z",
    "size": 13858,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5/skin.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16e9b-zypvjw8DhtPBl1NtijMhd+WF8mc\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 93851,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.min.css"
  },
  "/tinymce/skins/ui/tinymce-5/skin.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ea0-j0C6gS3o3s99UIxR8gkcxLx1PO8\"",
    "mtime": "2024-06-02T20:47:36.483Z",
    "size": 11936,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5/skin.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"35cb-npyiRX6sQd4Va4kw1k3S0XmnsMQ\"",
    "mtime": "2024-06-02T20:47:36.387Z",
    "size": 13771,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5/skin.shadowdom.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"257-10B16BJjHtfgqlwO1lD7LQvUiJI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 599,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.shadowdom.css"
  },
  "/tinymce/skins/ui/tinymce-5/skin.shadowdom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"262-06+522XSmakvdMmWogPKJQaQLEQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 610,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.shadowdom.js"
  },
  "/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-k5GgXGabzlhQB8LPHjhrT0+mXrk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 508,
    "path": "../public/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6598-Km/crqrqO6pnOS0FKiyvE4RrWxQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26008,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14a5-1TOGvHo9kHhwasI4uKpi6bTY700\"",
    "mtime": "2024-06-02T20:47:36.535Z",
    "size": 5285,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"17dc-y3W6JHbz/+LtLPiaPex71wOxNBU\"",
    "mtime": "2024-06-02T20:47:36.507Z",
    "size": 6108,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"674d-AYcqF97ylutyfF3pz8DJqB5656Y\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 26445,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"14c5-hDuQxpAXDcID2MUuA/TRpSQ28FA\"",
    "mtime": "2024-06-02T20:47:36.559Z",
    "size": 5317,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1812-+kHOHYnRqiZaNGf5S7CaaWg5Rq0\"",
    "mtime": "2024-06-02T20:47:36.535Z",
    "size": 6162,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d1c-+68KzF6eOMz6I3J/JBlKEkUuh80\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23836,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.js"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13e8-NxXHNYrd7/BlxAqleO8WN2jQTkc\"",
    "mtime": "2024-06-02T20:47:36.619Z",
    "size": 5096,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.js.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16d8-PcewxDwk33PdukFnMUrfEqRD6io\"",
    "mtime": "2024-06-02T20:47:36.595Z",
    "size": 5848,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c8d-7Ho/jzM0KJo/Ng3O2PzmC/AGiq0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23693,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"13a8-26eYYdDRwKaJ4RYHyzs+0fDd2MA\"",
    "mtime": "2024-06-02T20:47:36.619Z",
    "size": 5032,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"168d-v5/oWvR3ELdA9nCJJtC6YrbPUv4\"",
    "mtime": "2024-06-02T20:47:36.595Z",
    "size": 5773,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5bc4-3j1nk01iEIWdojemcclTwXVdIn8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23492,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.js"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"13cf-+QrqtDaPCtJaiKhQzqdzWqItrFg\"",
    "mtime": "2024-06-02T20:47:36.639Z",
    "size": 5071,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.js.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"16b4-LDfnT6nyTifB6zQdx9dm8tPLhcc\"",
    "mtime": "2024-06-02T20:47:36.619Z",
    "size": 5812,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b43-08S59DhSdN+Rq784QWQe0HO92/8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 23363,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.min.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1384-3dPRKf7QPsRIAcjexNpXNLlAjyQ\"",
    "mtime": "2024-06-02T20:47:36.663Z",
    "size": 4996,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"166d-6fWFcCqGam6SHAA+ylovT68Uzwo\"",
    "mtime": "2024-06-02T20:47:36.639Z",
    "size": 5741,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/content.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0f3-jt3l4g+mGKpAfQOPT3q61lqIEhA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 110835,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"312e-gCOiEw4Ey50oJdXYvUQHsGdvHzQ\"",
    "mtime": "2024-06-02T20:47:36.731Z",
    "size": 12590,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3a87-SpfNoGeKbLqh8mMfsBDE0opMzss\"",
    "mtime": "2024-06-02T20:47:36.619Z",
    "size": 14983,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16e9f-6BRmgPgSh88+xroI1jvLhWedGYw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 93855,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.js"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ee6-WmlAPOWo38I9E3cHmhdVTAs6B2Y\"",
    "mtime": "2024-06-02T20:47:36.743Z",
    "size": 12006,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.js.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3637-tFTXvdaKPbFGMT6ykxO9Dtfzp4c\"",
    "mtime": "2024-06-02T20:47:36.651Z",
    "size": 13879,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.js.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16e14-bnB/s1L7jzKWdzW/MWj+hv3HBx4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 93716,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.min.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ea3-JtsxVChfQ66GqzxmZfnMXBgWFaE\"",
    "mtime": "2024-06-02T20:47:36.767Z",
    "size": 11939,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.min.css.br"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"35dd-8KsBpReKWBBzzVvszTfr3ZD6txU\"",
    "mtime": "2024-06-02T20:47:36.679Z",
    "size": 13789,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.min.css.gz"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"257-10B16BJjHtfgqlwO1lD7LQvUiJI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 599,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.css"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"267-UmdGQtK1ejbQfypi5XBSq6y20Hs\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 615,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.js"
  },
  "/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-k5GgXGabzlhQB8LPHjhrT0+mXrk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 508,
    "path": "../public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css"
  },
  "/tinymce/skins/content/dark/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6ea-MuHbRrZ7FHXgrwanptSE5VEIvSw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1770,
    "path": "../public/tinymce/skins/content/dark/content.css"
  },
  "/tinymce/skins/content/dark/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f6-0945yMm1S96cX9J5VoQfTo20AA4\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 502,
    "path": "../public/tinymce/skins/content/dark/content.css.br"
  },
  "/tinymce/skins/content/dark/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26a-fDJOqdsqarkdEZx8inQTWY7pdzE\"",
    "mtime": "2024-06-02T20:47:35.907Z",
    "size": 618,
    "path": "../public/tinymce/skins/content/dark/content.css.gz"
  },
  "/tinymce/skins/content/dark/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"524-NgZ8RmUKH2jjmBt/cjS3VapYPRc\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1316,
    "path": "../public/tinymce/skins/content/dark/content.js"
  },
  "/tinymce/skins/content/dark/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1e7-7j+jG4g/2n99DO/FK/yVBqrT2iE\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 487,
    "path": "../public/tinymce/skins/content/dark/content.js.br"
  },
  "/tinymce/skins/content/dark/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"22d-bMqeet59gpvNtvtst3BcyFbEIgQ\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 557,
    "path": "../public/tinymce/skins/content/dark/content.js.gz"
  },
  "/tinymce/skins/content/dark/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4c0-u1iY/Hf4Z+Py+qxa6PG8u3CEfHA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1216,
    "path": "../public/tinymce/skins/content/dark/content.min.css"
  },
  "/tinymce/skins/content/dark/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"185-ecd05AVqoWJRIv7bNOZthmOnwFs\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 389,
    "path": "../public/tinymce/skins/content/dark/content.min.css.br"
  },
  "/tinymce/skins/content/dark/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1f2-uX0Q5JjTpdlJ3xFLnc/Q71XGTYc\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 498,
    "path": "../public/tinymce/skins/content/dark/content.min.css.gz"
  },
  "/tinymce/skins/content/default/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"697-vKLN2cwV0my9AEbQI8Da/RvbJXk\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 1687,
    "path": "../public/tinymce/skins/content/default/content.css"
  },
  "/tinymce/skins/content/default/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d2-wIa8LztEZZ51XjS5kIwukbBcESA\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 466,
    "path": "../public/tinymce/skins/content/default/content.css.br"
  },
  "/tinymce/skins/content/default/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24d-jYjy/H5g/hUrUj7UHVBgPvoq8xg\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 589,
    "path": "../public/tinymce/skins/content/default/content.css.gz"
  },
  "/tinymce/skins/content/default/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e4-dfuGaExxPM3xtRQX5gvtlAL4OTI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1252,
    "path": "../public/tinymce/skins/content/default/content.js"
  },
  "/tinymce/skins/content/default/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1b7-+2GbdUk0RqdDD3x6KhmDmvs2YzI\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 439,
    "path": "../public/tinymce/skins/content/default/content.js.br"
  },
  "/tinymce/skins/content/default/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"211-ZHWA17amBpzHETts7vGFNYBe26M\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 529,
    "path": "../public/tinymce/skins/content/default/content.js.gz"
  },
  "/tinymce/skins/content/default/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47d-wi+8xCBuopzfmiSWafLxtBbdHjo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1149,
    "path": "../public/tinymce/skins/content/default/content.min.css"
  },
  "/tinymce/skins/content/default/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"16b-De9ougrOTd4M8aW0G19G1n3CJn8\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 363,
    "path": "../public/tinymce/skins/content/default/content.min.css.br"
  },
  "/tinymce/skins/content/default/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d4-T9QEdMstCPwmDRF1acm4e7dATBw\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 468,
    "path": "../public/tinymce/skins/content/default/content.min.css.gz"
  },
  "/tinymce/skins/content/document/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"720-uMcTmkIT9FN83qBsnsQFwj3UrPM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1824,
    "path": "../public/tinymce/skins/content/document/content.css"
  },
  "/tinymce/skins/content/document/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"223-zkTQs3FfXvwTdGO5y3L9meDIqng\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 547,
    "path": "../public/tinymce/skins/content/document/content.css.br"
  },
  "/tinymce/skins/content/document/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"294-rag2V3kUjuF72Qa7JMeR9tHtRF4\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 660,
    "path": "../public/tinymce/skins/content/document/content.css.gz"
  },
  "/tinymce/skins/content/document/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"548-11VlcidOMY1H92BXXRIgKq6r4kg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1352,
    "path": "../public/tinymce/skins/content/document/content.js"
  },
  "/tinymce/skins/content/document/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"202-xIyHbBue3nwYL/bedLfn687/rGE\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 514,
    "path": "../public/tinymce/skins/content/document/content.js.br"
  },
  "/tinymce/skins/content/document/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"252-bU36Ngd3BZoICPohThAZ4k0k+sE\"",
    "mtime": "2024-06-02T20:47:35.911Z",
    "size": 594,
    "path": "../public/tinymce/skins/content/document/content.js.gz"
  },
  "/tinymce/skins/content/document/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e0-lQ6c/+J/MzO/ivoNt9S2PQcwMgk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1248,
    "path": "../public/tinymce/skins/content/document/content.min.css"
  },
  "/tinymce/skins/content/document/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1bd-MJhjCwxx6lEqhdW46ri4KwUUA/s\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 445,
    "path": "../public/tinymce/skins/content/document/content.min.css.br"
  },
  "/tinymce/skins/content/document/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"217-QK6/GHYHoi8eAeYkrWKsK6abVaE\"",
    "mtime": "2024-06-02T20:47:35.915Z",
    "size": 535,
    "path": "../public/tinymce/skins/content/document/content.min.css.gz"
  },
  "/tinymce/skins/content/tinymce-5/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"697-vKLN2cwV0my9AEbQI8Da/RvbJXk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1687,
    "path": "../public/tinymce/skins/content/tinymce-5/content.css"
  },
  "/tinymce/skins/content/tinymce-5/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d2-wIa8LztEZZ51XjS5kIwukbBcESA\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 466,
    "path": "../public/tinymce/skins/content/tinymce-5/content.css.br"
  },
  "/tinymce/skins/content/tinymce-5/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"24d-jYjy/H5g/hUrUj7UHVBgPvoq8xg\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 589,
    "path": "../public/tinymce/skins/content/tinymce-5/content.css.gz"
  },
  "/tinymce/skins/content/tinymce-5/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e6-ODiWibJjCrJqGuMC4WHxe6OsB4M\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1254,
    "path": "../public/tinymce/skins/content/tinymce-5/content.js"
  },
  "/tinymce/skins/content/tinymce-5/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1b7-4NxmcGwH8R4H08mPO7yYKBq3Wak\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 439,
    "path": "../public/tinymce/skins/content/tinymce-5/content.js.br"
  },
  "/tinymce/skins/content/tinymce-5/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"210-B5qzDeo6E2gEvwFhvZkzh7qv1lA\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 528,
    "path": "../public/tinymce/skins/content/tinymce-5/content.js.gz"
  },
  "/tinymce/skins/content/tinymce-5/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47d-wi+8xCBuopzfmiSWafLxtBbdHjo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1149,
    "path": "../public/tinymce/skins/content/tinymce-5/content.min.css"
  },
  "/tinymce/skins/content/tinymce-5/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"16b-De9ougrOTd4M8aW0G19G1n3CJn8\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 363,
    "path": "../public/tinymce/skins/content/tinymce-5/content.min.css.br"
  },
  "/tinymce/skins/content/tinymce-5/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d4-T9QEdMstCPwmDRF1acm4e7dATBw\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 468,
    "path": "../public/tinymce/skins/content/tinymce-5/content.min.css.gz"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6ed-c/+AT/6TIepkv+FKLJVZiRl/5lo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1773,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.css"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f3-3kGxSL8TCMqwsWl72emk60w9Zas\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 499,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.css.br"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"26c-B2o+hKZEmE94/lORE5ZDGTNRcz4\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 620,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.css.gz"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"531-eaGBZez0bUevvBZlLQgHAqBM/6Q\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1329,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.js"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1e4-990j9LYUXrvsmIIihnBU8Wr5c8U\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 484,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.js.br"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"234-ZLeU7rOhH7mKIAjwVu2Dl/5TbyE\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 564,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.js.gz"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4c3-F3qweSdPtZnBiTJp1teSZR5qfnU\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1219,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.min.css"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"190-uc/uwMiQJ9GhMqKz3q9/Fx9+pJA\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 400,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.min.css.br"
  },
  "/tinymce/skins/content/tinymce-5-dark/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1f5-SbFX48a7EthlkapYNtKEHOBF3nU\"",
    "mtime": "2024-06-02T20:47:35.919Z",
    "size": 501,
    "path": "../public/tinymce/skins/content/tinymce-5-dark/content.min.css.gz"
  },
  "/tinymce/skins/content/writer/content.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b0-D2bV43sysxvvw98TykF+Iro4xOs\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1712,
    "path": "../public/tinymce/skins/content/writer/content.css"
  },
  "/tinymce/skins/content/writer/content.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1df-rFojTOKe0xFM+dlUqGCrNMhJfso\"",
    "mtime": "2024-06-02T20:47:35.927Z",
    "size": 479,
    "path": "../public/tinymce/skins/content/writer/content.css.br"
  },
  "/tinymce/skins/content/writer/content.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"257-n/CTkrw9ji6B5kjUcrKGUEuxHn0\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 599,
    "path": "../public/tinymce/skins/content/writer/content.css.gz"
  },
  "/tinymce/skins/content/writer/content.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4f8-tkaN38yKZqg/4lozhySVpqLqSa0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1272,
    "path": "../public/tinymce/skins/content/writer/content.js"
  },
  "/tinymce/skins/content/writer/content.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1b1-2g8cQrEKwEL0womfSwoqpnS26Bk\"",
    "mtime": "2024-06-02T20:47:35.927Z",
    "size": 433,
    "path": "../public/tinymce/skins/content/writer/content.js.br"
  },
  "/tinymce/skins/content/writer/content.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"21e-nWRK3yQoGw9TmdG2Akovxbk6f3g\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 542,
    "path": "../public/tinymce/skins/content/writer/content.js.gz"
  },
  "/tinymce/skins/content/writer/content.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"492-87TLP/77nfv5+MG4owutiMOGINg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 1170,
    "path": "../public/tinymce/skins/content/writer/content.min.css"
  },
  "/tinymce/skins/content/writer/content.min.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"178-RZ/+IxspRQu20xGzqSwwcToNAHg\"",
    "mtime": "2024-06-02T20:47:35.927Z",
    "size": 376,
    "path": "../public/tinymce/skins/content/writer/content.min.css.br"
  },
  "/tinymce/skins/content/writer/content.min.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1e2-JnK7DY6wej4WAohEhw2b/L1K108\"",
    "mtime": "2024-06-02T20:47:35.923Z",
    "size": 482,
    "path": "../public/tinymce/skins/content/writer/content.min.css.gz"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64200-khFsXqt1Zyw4cZX0G2Dk2rQwbkg\"",
    "mtime": "2024-06-02T20:47:35.471Z",
    "size": 410112,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.js"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"7259-4BNh3jbF7JV192u5359EGZn+DVk\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 29273,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.js.br"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"8fcb-1PwlUV2RN+ObPisq8cv0wJRw5gY\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 36811,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.js.gz"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6595f-YdGX/DWsviAE0a2C86RVu5b9ERo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 416095,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.min.js"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"71c7-J674UdYE0b1ftAjPQM9p6nvxlQQ\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 29127,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.min.js.br"
  },
  "/tinymce/plugins/emoticons/js/emojiimages.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"8e73-IK1K6/rXai2LBMYMKN5jT13Qvng\"",
    "mtime": "2024-06-02T20:47:37.539Z",
    "size": 36467,
    "path": "../public/tinymce/plugins/emoticons/js/emojiimages.min.js.gz"
  },
  "/tinymce/plugins/emoticons/js/emojis.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2da29-2UbPyUGIDfcbzNQnBwc8FgE2Uhg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 186921,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.js"
  },
  "/tinymce/plugins/emoticons/js/emojis.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5f26-VmMM0mxkaqfIt4qGglECBv9PEnU\"",
    "mtime": "2024-06-02T20:47:37.175Z",
    "size": 24358,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.js.br"
  },
  "/tinymce/plugins/emoticons/js/emojis.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"71fd-EJalGlskoUw2Kw6PxrUPc5eXPdk\"",
    "mtime": "2024-06-02T20:47:37.167Z",
    "size": 29181,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.js.gz"
  },
  "/tinymce/plugins/emoticons/js/emojis.min.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f158-bUe3N6jaBN+9eYk2iYtmmJzBl9g\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 192856,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.min.js"
  },
  "/tinymce/plugins/emoticons/js/emojis.min.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5faf-JqZ16n1FoEA2T4NW+91Ers/NWf4\"",
    "mtime": "2024-06-02T20:47:37.175Z",
    "size": 24495,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.min.js.br"
  },
  "/tinymce/plugins/emoticons/js/emojis.min.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"70f8-GN/zYZaaG1eb8dgsuqimiAZH7Rk\"",
    "mtime": "2024-06-02T20:47:37.167Z",
    "size": 28920,
    "path": "../public/tinymce/plugins/emoticons/js/emojis.min.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ar.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d7-0JRrtx+3G4xVxINjI64uhtTkMlQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 6359,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ar.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ar.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4c0-bWa2rVOMwoxFQuQnUG83OrUdEMc\"",
    "mtime": "2024-06-02T20:47:36.671Z",
    "size": 1216,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ar.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ar.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5b0-NNjUrzOkYnKp8E+stGoFlELpE5E\"",
    "mtime": "2024-06-02T20:47:36.663Z",
    "size": 1456,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ar.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/bg_BG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c07-7fMJFUeZm2cPBh2SptDn+AcAx24\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7175,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/bg_BG.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/bg_BG.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"54a-QI5CF9B5rC9SmTM+DofURhnQc1A\"",
    "mtime": "2024-06-02T20:47:36.679Z",
    "size": 1354,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/bg_BG.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/bg_BG.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"62e-3qFPsreo1mrR4uXOP5hwIQmFhXk\"",
    "mtime": "2024-06-02T20:47:36.671Z",
    "size": 1582,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/bg_BG.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ca.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13d2-Ju45yXNTFv0JnK9wxmTOVUt6g6c\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5074,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ca.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ca.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4cd-or5RM54s+e3r2tE8ogl/YyWmytQ\"",
    "mtime": "2024-06-02T20:47:36.735Z",
    "size": 1229,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ca.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ca.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"535-+X69JshTY8U8FWA9HlI7XThRux4\"",
    "mtime": "2024-06-02T20:47:36.731Z",
    "size": 1333,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ca.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/cs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1395-Fzkiys3BM6qgce/UgGtKPa8HDc0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5013,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/cs.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/cs.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"505-DDCQAiwLA+QLzQnHTzLWi1NP4RU\"",
    "mtime": "2024-06-02T20:47:36.739Z",
    "size": 1285,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/cs.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/cs.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"57c-KtwFvUuvNET0cfOiNQcy+b4gejA\"",
    "mtime": "2024-06-02T20:47:36.735Z",
    "size": 1404,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/cs.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/da.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"113a-A1/1T5Gt92+GQ7hZOaWypbqxmlo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4410,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/da.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/da.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"469-FPPctkqzk33az0v2kBLfgJQTlBo\"",
    "mtime": "2024-06-02T20:47:36.743Z",
    "size": 1129,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/da.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/da.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4b9-GOmsOmv3gLkXonoRXcrJuEs6WcE\"",
    "mtime": "2024-06-02T20:47:36.739Z",
    "size": 1209,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/da.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/de.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13f8-AF9NJIWKQl+XY9Nuzhy5XOxk2Ls\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5112,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/de.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/de.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"50b-SgC4WY4GaZi7u3pOiMK9SZXTwNw\"",
    "mtime": "2024-06-02T20:47:36.747Z",
    "size": 1291,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/de.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/de.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"557-w+/twA9ZDk0m3Ki9kAMynmVxKfw\"",
    "mtime": "2024-06-02T20:47:36.743Z",
    "size": 1367,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/de.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/el.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e37-XlZsce7DZ8DsIFnUmpqnuLyVluo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7735,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/el.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/el.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5a5-V7AYYI8DoMy6UtYr+DnH6F7DZa0\"",
    "mtime": "2024-06-02T20:47:36.759Z",
    "size": 1445,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/el.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/el.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6a8-a+JglwCeK1ZRCBbed08NOIJkXJs\"",
    "mtime": "2024-06-02T20:47:36.751Z",
    "size": 1704,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/el.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/en.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fe4-R+cp4WOIkYUeAkRoUxExL/kfKQI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4068,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/en.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/en.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"381-iRawG1UHEz3SOeESI/8tI5bFy4w\"",
    "mtime": "2024-06-02T20:47:36.751Z",
    "size": 897,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/en.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/en.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"455-rCTOTZh/WkusstfzHywoCU0EMg4\"",
    "mtime": "2024-06-02T20:47:36.743Z",
    "size": 1109,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/en.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/es.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"139b-pa8am104tvt+pDkGWsNxkx7zBfM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5019,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/es.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/es.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"47f-kifd9/ELhKC8fXNOWf5RbjAUILM\"",
    "mtime": "2024-06-02T20:47:36.751Z",
    "size": 1151,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/es.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/es.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"50d-veVy6XTh76z+TbbUGHA8QMVQGSA\"",
    "mtime": "2024-06-02T20:47:36.747Z",
    "size": 1293,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/es.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/eu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"113d-FIE9LZJK2wSyITQ/mV8+vVaPoKw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4413,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/eu.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/eu.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"436-hmTvs9isXPZ1VuaWRZX3kjJQw7Y\"",
    "mtime": "2024-06-02T20:47:36.755Z",
    "size": 1078,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/eu.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/eu.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"467-mPZMrvwCPBtsTM2qhrkjckUcwQQ\"",
    "mtime": "2024-06-02T20:47:36.751Z",
    "size": 1127,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/eu.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16bb-QucznGB6UD2KaEwrmhvTdeSnJsI\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5819,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fa.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fa.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4bd-/8+auDhv8P2HzIrbamgRClTFB/c\"",
    "mtime": "2024-06-02T20:47:36.763Z",
    "size": 1213,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fa.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fa.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"57f-alQjLg5dp19GhN78PfRbY0yI4rA\"",
    "mtime": "2024-06-02T20:47:36.755Z",
    "size": 1407,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fa.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1358-ZAjuHNNMmGvF34/ms1QJFEhEVY4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4952,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fi.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fi.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4c4-/tXWVtoe8IiY3ML5kKbeEJzudt0\"",
    "mtime": "2024-06-02T20:47:36.767Z",
    "size": 1220,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fi.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fi.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"512-ThAjryXPqCDPo6VvcDW40g8Zx/Q\"",
    "mtime": "2024-06-02T20:47:36.763Z",
    "size": 1298,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fi.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fr_FR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13c7-xjYqKpBR2+eljhLcBTOwlO/xQp8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5063,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fr_FR.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fr_FR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4ea-WxoBB1B10te2+IXLP/eViOpaIAA\"",
    "mtime": "2024-06-02T20:47:36.763Z",
    "size": 1258,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fr_FR.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/fr_FR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"54e-UV3EcaH12LqeBNzfnhY/2REZPXY\"",
    "mtime": "2024-06-02T20:47:36.759Z",
    "size": 1358,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/fr_FR.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/he_IL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14f5-mhvQqU92UBZEEMllP2dbDdl6LHM\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5365,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/he_IL.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/he_IL.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"454-KaeQ6GmpHx6eErdD86lYTQoR9Sw\"",
    "mtime": "2024-06-02T20:47:36.771Z",
    "size": 1108,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/he_IL.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/he_IL.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"50a-9nSHKIl4NAlBFK4RIC0NsHRgC4I\"",
    "mtime": "2024-06-02T20:47:36.763Z",
    "size": 1290,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/he_IL.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c9b-Upg2kEf6NatRFpxRZddIBYkvpGc\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7323,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hi.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hi.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4da-3Y/4MfBkbYQl9hdgexsaL6e4WIE\"",
    "mtime": "2024-06-02T20:47:36.775Z",
    "size": 1242,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hi.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hi.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5bf-0dbd1GjOqmaSfbJsM5R/PW4U2jE\"",
    "mtime": "2024-06-02T20:47:36.767Z",
    "size": 1471,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hi.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"135e-SgItoRjtd3KgyzCQXZDsIp49nlE\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4958,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hr.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hr.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4f2-o5nhOSiTBb+XALbDSHbO+98xuLQ\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1266,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hr.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hr.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"549-JRPK7nX6oTZNOUIxWB0L7vxgL14\"",
    "mtime": "2024-06-02T20:47:36.771Z",
    "size": 1353,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hr.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hu_HU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1341-f/VLRUITGDKIzqV6t+6lh9vfZc8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4929,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hu_HU.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hu_HU.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4f3-+SIIawNWzjJfl1iRvxsXUxx82ts\"",
    "mtime": "2024-06-02T20:47:36.775Z",
    "size": 1267,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hu_HU.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/hu_HU.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"550-toOQ7VX508LRaFV+mmCHpWdCiT8\"",
    "mtime": "2024-06-02T20:47:36.771Z",
    "size": 1360,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/hu_HU.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/id.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10f4-IGG/A3zHxoQmblPpaU9YYDIzJ0U\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4340,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/id.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/id.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"444-ZxhISDSwbXQxwYC9mjnSEjxB5O4\"",
    "mtime": "2024-06-02T20:47:36.771Z",
    "size": 1092,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/id.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/id.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"484-eAKOyy+qgye7zQJFcrjfLyC9/0Q\"",
    "mtime": "2024-06-02T20:47:36.767Z",
    "size": 1156,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/id.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/it.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"146a-l2vr8SojerdEzPLdcds5Xdl87kQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5226,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/it.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/it.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4c0-fwtzWVbOqEJVYk6FphVrlOaKDik\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1216,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/it.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/it.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"529-ywr89NJ4+I3618D26cpmbWucBsQ\"",
    "mtime": "2024-06-02T20:47:36.775Z",
    "size": 1321,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/it.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ja.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1416-L/h3+P46cMcGWV5PkljwR/tXqgw\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5142,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ja.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ja.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"474-CDlUJOrOEwHaoXSTKp4NZ5tgfU8\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1140,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ja.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ja.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"515-iH41BVkNJo6sTio2fvmFzusnggE\"",
    "mtime": "2024-06-02T20:47:36.775Z",
    "size": 1301,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ja.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/kk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b38-wg+Itezhss1UyCEBVX+Rsx1haEg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 6968,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/kk.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/kk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"54c-ONp4QSAKj6mlo+dE6nZGwOgXoCA\"",
    "mtime": "2024-06-02T20:47:36.787Z",
    "size": 1356,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/kk.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/kk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"622-oNLi6B8L6bl8XgeAcnX78glvmwo\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1570,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/kk.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ko_KR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12de-cZ59kDgqTMSrob0TrKLD4mN6xQ4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4830,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ko_KR.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ko_KR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4b0-aq1WG6dU1t6zBMn4GI7ChnGu0ic\"",
    "mtime": "2024-06-02T20:47:36.783Z",
    "size": 1200,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ko_KR.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ko_KR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"55c-6dobQxS1bmbzjbPRzNCvE159K/Y\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1372,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ko_KR.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ms.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1083-Etnof2Mv5+u2X8E+AloQq+5f95E\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4227,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ms.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ms.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"42d-uMlbJbg5j6qYC2eV4H7YRqFAVrI\"",
    "mtime": "2024-06-02T20:47:36.787Z",
    "size": 1069,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ms.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ms.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"46f-5VnigNhnu3jp5Wb5GH4OwyaF8g4\"",
    "mtime": "2024-06-02T20:47:36.779Z",
    "size": 1135,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ms.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nb_NO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"124f-ZLf+DxKJ6uxmDDUmkHZ6zUp18A0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4687,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nb_NO.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nb_NO.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"47e-u2I1MYxDe6r5c/rci+PJFKPnpbY\"",
    "mtime": "2024-06-02T20:47:36.791Z",
    "size": 1150,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nb_NO.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nb_NO.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4c5-mYJUdXqvJBiffBhMhyhOZAWkwq0\"",
    "mtime": "2024-06-02T20:47:36.783Z",
    "size": 1221,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nb_NO.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1201-Xy/PcW0uzzQsq8B5r8JQ1MKa8zk\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4609,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nl.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nl.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"48f-4VibSpF3O8+lFCvIlbn0+vH4Zrs\"",
    "mtime": "2024-06-02T20:47:36.795Z",
    "size": 1167,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nl.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/nl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4cf-xNOahLDCmIRdS4KptUFWq4fUe+w\"",
    "mtime": "2024-06-02T20:47:36.791Z",
    "size": 1231,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/nl.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13d3-u3hNla8GGkhC3IXr6K1lG9oI2YQ\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5075,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pl.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pl.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"51f-Ew6P6U4qH1wnnQ1PxmqQiN95aog\"",
    "mtime": "2024-06-02T20:47:36.791Z",
    "size": 1311,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pl.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"577-7S0XtugLrOZ7ILpqb7G0EPEauTI\"",
    "mtime": "2024-06-02T20:47:36.787Z",
    "size": 1399,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pl.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_BR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"116c-cc+jm7sKZF/NkCREBFPZYnEp1P8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4460,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_BR.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_BR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"447-Le5f+ZONU7tD1v6SnRHv12A+rWs\"",
    "mtime": "2024-06-02T20:47:36.791Z",
    "size": 1095,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_BR.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_BR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"49f-cOdieTOVn6LXxeysRrbgaoCHcNw\"",
    "mtime": "2024-06-02T20:47:36.787Z",
    "size": 1183,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_BR.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_PT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11c9-CtzyTTr+lHBBO42g+adUq+7uMI0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4553,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_PT.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_PT.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"463-z2Q3HRm22ULqEqpGg00OcEI+ksw\"",
    "mtime": "2024-06-02T20:47:36.795Z",
    "size": 1123,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_PT.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/pt_PT.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4c1-NR7uZSjHKI+pv1aAS3RdYUYh5dg\"",
    "mtime": "2024-06-02T20:47:36.791Z",
    "size": 1217,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/pt_PT.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ro.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13ca-K9Rm4h6VKEkPuzDshPIu/TxvkVA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5066,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ro.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ro.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"519-UObut+Me7TVibeZ6AGNx2o5zMJk\"",
    "mtime": "2024-06-02T20:47:37.175Z",
    "size": 1305,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ro.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ro.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"578-Lw2UBSXHlDk9IqzvK/tosRVzLlg\"",
    "mtime": "2024-06-02T20:47:37.167Z",
    "size": 1400,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ro.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ru.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1be3-wWQvsAKqprGF3XoADw4O47O69vo\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7139,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ru.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ru.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"56b-k/jVkOk/+7Xy+URJRj9Zk2kJW+o\"",
    "mtime": "2024-06-02T20:47:37.183Z",
    "size": 1387,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ru.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/ru.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"694-uHhR9DQjbK/2zo/yEeHmQrxq17E\"",
    "mtime": "2024-06-02T20:47:37.175Z",
    "size": 1684,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/ru.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13fe-qBaD3M4jZ7T1GxdCFW4Kkzziegg\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5118,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sk.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"543-Cf8yP1tWQGuGnEfXaeyzzHhRQNk\"",
    "mtime": "2024-06-02T20:47:37.187Z",
    "size": 1347,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sk.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5a9-pHlGzzIqvMD3qsliQDuBdqKxvdI\"",
    "mtime": "2024-06-02T20:47:37.183Z",
    "size": 1449,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sk.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sl_SI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12a3-bIE23nLwgxA9X3X8I5qwUz/FsLY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4771,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sl_SI.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sl_SI.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4d2-MtOCkSfpHCYNMENNs4ZXvo/ovco\"",
    "mtime": "2024-06-02T20:47:37.471Z",
    "size": 1234,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sl_SI.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sl_SI.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"532-wGCAUDqSlSL1quBuvIAfrfEcacE\"",
    "mtime": "2024-06-02T20:47:37.467Z",
    "size": 1330,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sl_SI.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sv_SE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1130-d9+XWVw3OLis8HLQutVbS4sF5IY\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4400,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sv_SE.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sv_SE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"45f-t81KDdzbwI4FYKWJ8zCFhZd8Rg4\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 1119,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sv_SE.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/sv_SE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4a5-WKfvA94se7ytJgP9dVEoS9+VuA0\"",
    "mtime": "2024-06-02T20:47:37.511Z",
    "size": 1189,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/sv_SE.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/th_TH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e57-EuWpY+JSRTHE6Zvo1dj2j3BPNI4\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7767,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/th_TH.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/th_TH.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"53a-wnRkTM2QSo4KphFafmc+1FUI5fM\"",
    "mtime": "2024-06-02T20:47:37.527Z",
    "size": 1338,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/th_TH.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/th_TH.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5cd-VSAIuCpquPgqokRPyXgO+LlCg7E\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 1485,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/th_TH.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/tr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1273-g4HTkPFpNDNStvfzeTDUvQJFpcA\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4723,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/tr.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/tr.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"460-R/oq4wVmx5K9MC/SfFnQ/iy4M3g\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 1120,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/tr.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/tr.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4be-ZCnl2bYu+2lRE5L5/VmxsSS/s+I\"",
    "mtime": "2024-06-02T20:47:37.511Z",
    "size": 1214,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/tr.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/uk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db2-bQlu0x4RX8k4VnWMpMobMA/eRg0\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 7602,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/uk.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/uk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"585-iI7XiISlFmnHToJKrTkgYUfKHwQ\"",
    "mtime": "2024-06-02T20:47:37.523Z",
    "size": 1413,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/uk.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/uk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"694-9ZWk2UK9wTgkLm62uYWeRLWhess\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 1684,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/uk.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/vi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"146d-1plBxGoon1mBfFFcebrUwy4N394\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 5229,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/vi.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/vi.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"515-2S+ZZFAaUugEWiO5xRa71Omn0Tg\"",
    "mtime": "2024-06-02T20:47:37.523Z",
    "size": 1301,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/vi.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/vi.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"58c-Xd+C8/Cbf4xzEB0DIIe9BceXj2w\"",
    "mtime": "2024-06-02T20:47:37.515Z",
    "size": 1420,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/vi.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_CN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fb6-w+6meDi+F5sNw2B+x1fk8mdji7o\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4022,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_CN.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_CN.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3fe-XcR4W9arJwwFlnfDhsGQi0Cne5M\"",
    "mtime": "2024-06-02T20:47:37.527Z",
    "size": 1022,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_CN.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_CN.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4dc-VIyIIghnsCaXThOgkUJ+MlJvdVg\"",
    "mtime": "2024-06-02T20:47:37.523Z",
    "size": 1244,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_CN.js.gz"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_TW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1023-oWRM2zKeIH/SpOJuUhCEntDz/w8\"",
    "mtime": "2024-06-02T20:47:35.475Z",
    "size": 4131,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_TW.js"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_TW.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"441-0wDiv79cKtgp3PEW3wu/23eC/Zk\"",
    "mtime": "2024-06-02T20:47:37.527Z",
    "size": 1089,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_TW.js.br"
  },
  "/tinymce/plugins/help/js/i18n/keynav/zh_TW.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4f6-UeMdXCgI9ZrKDBs7Vw2fgPTQQNg\"",
    "mtime": "2024-06-02T20:47:37.523Z",
    "size": 1270,
    "path": "../public/tinymce/plugins/help/js/i18n/keynav/zh_TW.js.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var Ye$1=Object.defineProperty;var Ze$1=(e,t,r)=>t in e?Ye$1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var k$1=(e,t,r)=>(Ze$1(e,typeof t!="symbol"?t+"":t,r),r);var St$1=(e=>(e[e.AggregateError=1]="AggregateError",e[e.ArrowFunction=2]="ArrowFunction",e[e.ErrorPrototypeStack=4]="ErrorPrototypeStack",e[e.ObjectAssign=8]="ObjectAssign",e[e.BigIntTypedArray=16]="BigIntTypedArray",e))(St$1||{});function Rt(e){switch(e){case'"':return '\\"';case"\\":return "\\\\";case`
`:return "\\n";case"\r":return "\\r";case"\b":return "\\b";case"	":return "\\t";case"\f":return "\\f";case"<":return "\\x3C";case"\u2028":return "\\u2028";case"\u2029":return "\\u2029";default:return}}function p$1(e){let t="",r=0,s;for(let i=0,a=e.length;i<a;i++)s=Rt(e[i]),s&&(t+=e.slice(r,i)+s,r=i+1);return r===0?t=e:t+=e.slice(r),t}function At$1(e){switch(e){case"\\\\":return "\\";case'\\"':return '"';case"\\n":return `
`;case"\\r":return "\r";case"\\b":return "\b";case"\\t":return "	";case"\\f":return "\f";case"\\x3C":return "<";case"\\u2028":return "\u2028";case"\\u2029":return "\u2029";default:return e}}function m(e){return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g,At$1)}var S$1="__SEROVAL_REFS__",T="$R",F$1=`self.${T}`;function Et(e){return e==null?`${F$1}=${F$1}||[]`:`(${F$1}=${F$1}||{})["${p$1(e)}"]=[]`}function v$1(e,t){if(!e)throw t}var Ce$1=new Map,b=new Map;function B$1(e){return Ce$1.has(e)}function It$1(e){return b.has(e)}function xt(e){return v$1(B$1(e),new ur(e)),Ce$1.get(e)}function Pt$1(e){return v$1(It$1(e),new cr$1(e)),b.get(e)}typeof globalThis<"u"?Object.defineProperty(globalThis,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1}):typeof self<"u"?Object.defineProperty(self,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1}):typeof global<"u"&&Object.defineProperty(global,S$1,{value:b,configurable:!0,writable:!1,enumerable:!1});function Te(e,t){for(let r=0,s=t.length;r<s;r++){let i=t[r];e.has(i)||(e.add(i),i.extends&&Te(e,i.extends));}}function Oe$1(e){if(e){let t=new Set;return Te(t,e),[...t]}}var kt$1={0:"Symbol.asyncIterator",1:"Symbol.hasInstance",2:"Symbol.isConcatSpreadable",3:"Symbol.iterator",4:"Symbol.match",5:"Symbol.matchAll",6:"Symbol.replace",7:"Symbol.search",8:"Symbol.species",9:"Symbol.split",10:"Symbol.toPrimitive",11:"Symbol.toStringTag",12:"Symbol.unscopables"},$e$1={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12},Ft$1={0:Symbol.asyncIterator,1:Symbol.hasInstance,2:Symbol.isConcatSpreadable,3:Symbol.iterator,4:Symbol.match,5:Symbol.matchAll,6:Symbol.replace,7:Symbol.search,8:Symbol.species,9:Symbol.split,10:Symbol.toPrimitive,11:Symbol.toStringTag,12:Symbol.unscopables},Ct={2:"!0",3:"!1",1:"void 0",0:"null",4:"-0",5:"1/0",6:"-1/0",7:"0/0"},Tt$1={2:!0,3:!1,1:void 0,0:null,4:-0,5:Number.POSITIVE_INFINITY,6:Number.NEGATIVE_INFINITY,7:Number.NaN},je$1={0:"Error",1:"EvalError",2:"RangeError",3:"ReferenceError",4:"SyntaxError",5:"TypeError",6:"URIError"},Ot$1={0:Error,1:EvalError,2:RangeError,3:ReferenceError,4:SyntaxError,5:TypeError,6:URIError};function g$1(e){return {t:2,i:void 0,s:e,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}var K$1=g$1(2),G$1=g$1(3),$t$1=g$1(1),jt=g$1(0),Vt$1=g$1(4),Nt$1=g$1(5),Dt$1=g$1(6),_t$1=g$1(7);function ae$1(e){return e instanceof EvalError?1:e instanceof RangeError?2:e instanceof ReferenceError?3:e instanceof SyntaxError?4:e instanceof TypeError?5:e instanceof URIError?6:0}function Mt$1(e){let t=je$1[ae$1(e)];return e.name!==t?{name:e.name}:e.constructor.name!==t?{name:e.constructor.name}:{}}function ce(e,t){let r=Mt$1(e),s=Object.getOwnPropertyNames(e);for(let i=0,a=s.length,n;i<a;i++)n=s[i],n!=="name"&&n!=="message"&&(n==="stack"?t&4&&(r=r||{},r[n]=e[n]):(r=r||{},r[n]=e[n]));return r}function Ve$1(e){return Object.isFrozen(e)?3:Object.isSealed(e)?2:Object.isExtensible(e)?0:1}function Lt$1(e){switch(e){case Number.POSITIVE_INFINITY:return Nt$1;case Number.NEGATIVE_INFINITY:return Dt$1}return e!==e?_t$1:Object.is(e,-0)?Vt$1:{t:0,i:void 0,s:e,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function X$1(e){return {t:1,i:void 0,s:p$1(e),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ut$1(e){return {t:3,i:void 0,s:""+e,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function qt(e){return {t:4,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ht$1(e,t){return {t:5,i:e,s:t.toISOString(),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,f:void 0,a:void 0,b:void 0,o:void 0}}function Wt(e,t){return {t:6,i:e,s:void 0,l:void 0,c:p$1(t.source),m:t.flags,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Bt$1(e,t){let r=new Uint8Array(t),s=r.length,i=new Array(s);for(let a=0;a<s;a++)i[a]=r[a];return {t:19,i:e,s:i,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Kt$1(e,t){return {t:17,i:e,s:$e$1[t],l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function de$1(e,t){return {t:18,i:e,s:p$1(xt(t)),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ne$1(e,t,r){return {t:25,i:e,s:r,l:void 0,c:p$1(t),m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Gt$1(e,t,r){return {t:9,i:e,s:void 0,l:t.length,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:Ve$1(t)}}function Xt(e,t){return {t:21,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:t,b:void 0,o:void 0}}function Yt$1(e,t,r){return {t:15,i:e,s:void 0,l:t.length,c:t.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:t.byteOffset,o:void 0}}function Zt$1(e,t,r){return {t:16,i:e,s:void 0,l:t.length,c:t.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:t.byteOffset,o:void 0}}function Jt$1(e,t,r){return {t:20,i:e,s:void 0,l:t.byteLength,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:t.byteOffset,o:void 0}}function Qt(e,t,r){return {t:13,i:e,s:ae$1(t),l:void 0,c:void 0,m:p$1(t.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function er$1(e,t,r){return {t:14,i:e,s:ae$1(t),l:void 0,c:void 0,m:p$1(t.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function tr$1(e,t,r){return {t:7,i:e,s:void 0,l:t,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:void 0}}function De$1(e,t){return {t:28,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[e,t],f:void 0,b:void 0,o:void 0}}function _e$1(e,t){return {t:30,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[e,t],f:void 0,b:void 0,o:void 0}}function Me(e,t,r){return {t:31,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:t,b:void 0,o:void 0}}function rr$1(e,t){return {t:32,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:t,b:void 0,o:void 0}}function sr$1(e,t){return {t:33,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:t,b:void 0,o:void 0}}function ir$1(e,t){return {t:34,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:t,b:void 0,o:void 0}}var{toString:ne}=Object.prototype;function ar(e,t){return t instanceof Error?`Seroval caught an error during the ${e} process.
  
${t.name}
${t.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`:`Seroval caught an error during the ${e} process.

"${ne.call(t)}"

For more information, please check the "cause" property of this error.`}var oe$1=class oe extends Error{constructor(t,r){super(ar(t,r)),this.cause=r;}},nr$1=class nr extends oe$1{constructor(t){super("parsing",t);}},or$1=class or extends oe$1{constructor(e){super("serialization",e);}},lr$1=class lr extends oe$1{constructor(e){super("deserialization",e);}},O$1=class O extends Error{constructor(t){super(`The value ${ne.call(t)} of type "${typeof t}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`),this.value=t;}},Le=class extends Error{constructor(t){super('Unsupported node type "'+t.t+'".');}},Ue$1=class Ue extends Error{constructor(e){super('Missing plugin for tag "'+e+'".');}},w$1=class w extends Error{constructor(t){super('Missing "'+t+'" instance.');}},ur=class extends Error{constructor(t){super('Missing reference for the value "'+ne.call(t)+'" of type "'+typeof t+'"'),this.value=t;}},cr$1=class cr extends Error{constructor(e){super('Missing reference for id "'+p$1(e)+'"');}},dr=class extends Error{constructor(e){super('Unknown TypedArray "'+e+'"');}},hr={},fr={},pr={0:{},1:{},2:{},3:{},4:{}};function Y(){let e,t;return {promise:new Promise((r,s)=>{e=r,t=s;}),resolve(r){e(r);},reject(r){t(r);}}}function vr(e){return "__SEROVAL_STREAM__"in e}function P$1(){let e=new Set,t=[],r=!0,s=!0;function i(o){for(let l of e.keys())l.next(o);}function a(o){for(let l of e.keys())l.throw(o);}function n(o){for(let l of e.keys())l.return(o);}return {__SEROVAL_STREAM__:!0,on(o){r&&e.add(o);for(let l=0,u=t.length;l<u;l++){let d=t[l];l===u-1&&!r?s?o.return(d):o.throw(d):o.next(d);}return ()=>{r&&e.delete(o);}},next(o){r&&(t.push(o),i(o));},throw(o){r&&(t.push(o),a(o),r=!1,s=!1,e.clear());},return(o){r&&(t.push(o),n(o),r=!1,s=!0,e.clear());}}}function gr(e){let t=P$1(),r=e[Symbol.asyncIterator]();async function s(){try{let i=await r.next();i.done?t.return(i.value):(t.next(i.value),await s());}catch(i){t.throw(i);}}return s().catch(()=>{}),t}function mr(e){return ()=>{let t=[],r=[],s=0,i=-1,a=!1;function n(){for(let l=0,u=r.length;l<u;l++)r[l].resolve({done:!0,value:void 0});}e.on({next(l){let u=r.shift();u&&u.resolve({done:!1,value:l}),t.push(l);},throw(l){let u=r.shift();u&&u.reject(l),n(),i=t.length,t.push(l),a=!0;},return(l){let u=r.shift();u&&u.resolve({done:!0,value:l}),n(),i=t.length,t.push(l);}});function o(){let l=s++,u=t[l];if(l!==i)return {done:!1,value:u};if(a)throw u;return {done:!0,value:u}}return {[Symbol.asyncIterator](){return this},async next(){if(i===-1){let l=s++;if(l>=t.length){let u=Y();return r.push(u),await u.promise}return {done:!1,value:t[l]}}return s>i?{done:!0,value:void 0}:o()}}}}function qe$1(e){let t=[],r=-1,s=-1,i=e[Symbol.iterator]();for(;;)try{let a=i.next();if(t.push(a.value),a.done){s=t.length-1;break}}catch(a){r=t.length,t.push(a);}return {v:t,t:r,d:s}}function yr(e){return ()=>{let t=0;return {[Symbol.iterator](){return this},next(){if(t>e.d)return {done:!0,value:void 0};let r=t++,s=e.v[r];if(r===e.t)throw s;return {done:r===e.d,value:s}}}}}var br=class{constructor(e){this.marked=new Set,this.plugins=e.plugins,this.features=31^(e.disabledFeatures||0),this.refs=e.refs||new Map;}markRef(e){this.marked.add(e);}isMarked(e){return this.marked.has(e)}getIndexedValue(e){let t=this.refs.get(e);if(t!=null)return this.markRef(t),{type:1,value:qt(t)};let r=this.refs.size;return this.refs.set(e,r),{type:0,value:r}}getReference(e){let t=this.getIndexedValue(e);return t.type===1?t:B$1(e)?{type:2,value:de$1(t.value,e)}:t}getStrictReference(e){v$1(B$1(e),new O$1(e));let t=this.getIndexedValue(e);return t.type===1?t.value:de$1(t.value,e)}parseFunction(e){return this.getStrictReference(e)}parseWellKnownSymbol(e){let t=this.getReference(e);return t.type!==0?t.value:(v$1(e in $e$1,new O$1(e)),Kt$1(t.value,e))}parseSpecialReference(e){let t=this.getIndexedValue(pr[e]);return t.type===1?t.value:{t:26,i:t.value,s:e,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}parseIteratorFactory(){let e=this.getIndexedValue(hr);return e.type===1?e.value:{t:27,i:e.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseWellKnownSymbol(Symbol.iterator),b:void 0,o:void 0}}parseAsyncIteratorFactory(){let e=this.getIndexedValue(fr);return e.type===1?e.value:{t:29,i:e.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(1),this.parseWellKnownSymbol(Symbol.asyncIterator)],f:void 0,b:void 0,o:void 0}}createObjectNode(e,t,r,s){return {t:r?11:10,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:s,e:void 0,a:void 0,f:void 0,b:void 0,o:Ve$1(t)}}createMapNode(e,t,r,s){return {t:8,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:{k:t,v:r,s},a:void 0,f:this.parseSpecialReference(0),b:void 0,o:void 0}}createPromiseConstructorNode(e){return {t:22,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseSpecialReference(1),b:void 0,o:void 0}}};function zr(e){switch(e){case"Int8Array":return Int8Array;case"Int16Array":return Int16Array;case"Int32Array":return Int32Array;case"Uint8Array":return Uint8Array;case"Uint16Array":return Uint16Array;case"Uint32Array":return Uint32Array;case"Uint8ClampedArray":return Uint8ClampedArray;case"Float32Array":return Float32Array;case"Float64Array":return Float64Array;case"BigInt64Array":return BigInt64Array;case"BigUint64Array":return BigUint64Array;default:throw new dr(e)}}function he$1(e,t){switch(t){case 3:return Object.freeze(e);case 1:return Object.preventExtensions(e);case 2:return Object.seal(e);default:return e}}var wr$1=class wr{constructor(e){this.plugins=e.plugins,this.refs=e.refs||new Map;}deserializeReference(e){return this.assignIndexedValue(e.i,Pt$1(m(e.s)))}deserializeArray(e){let t=e.l,r=this.assignIndexedValue(e.i,new Array(t)),s;for(let i=0;i<t;i++)s=e.a[i],s&&(r[i]=this.deserialize(s));return he$1(r,e.o),r}deserializeProperties(e,t){let r=e.s;if(r){let s=e.k,i=e.v;for(let a=0,n;a<r;a++)n=s[a],typeof n=="string"?t[m(n)]=this.deserialize(i[a]):t[this.deserialize(n)]=this.deserialize(i[a]);}return t}deserializeObject(e){let t=this.assignIndexedValue(e.i,e.t===10?{}:Object.create(null));return this.deserializeProperties(e.p,t),he$1(t,e.o),t}deserializeDate(e){return this.assignIndexedValue(e.i,new Date(e.s))}deserializeRegExp(e){return this.assignIndexedValue(e.i,new RegExp(m(e.c),e.m))}deserializeSet(e){let t=this.assignIndexedValue(e.i,new Set),r=e.a;for(let s=0,i=e.l;s<i;s++)t.add(this.deserialize(r[s]));return t}deserializeMap(e){let t=this.assignIndexedValue(e.i,new Map),r=e.e.k,s=e.e.v;for(let i=0,a=e.e.s;i<a;i++)t.set(this.deserialize(r[i]),this.deserialize(s[i]));return t}deserializeArrayBuffer(e){let t=new Uint8Array(e.s);return this.assignIndexedValue(e.i,t.buffer)}deserializeTypedArray(e){let t=zr(e.c),r=this.deserialize(e.f);return this.assignIndexedValue(e.i,new t(r,e.b,e.l))}deserializeDataView(e){let t=this.deserialize(e.f);return this.assignIndexedValue(e.i,new DataView(t,e.b,e.l))}deserializeDictionary(e,t){if(e.p){let r=this.deserializeProperties(e.p,{});Object.assign(t,r);}return t}deserializeAggregateError(e){let t=this.assignIndexedValue(e.i,new AggregateError([],m(e.m)));return this.deserializeDictionary(e,t)}deserializeError(e){let t=Ot$1[e.s],r=this.assignIndexedValue(e.i,new t(m(e.m)));return this.deserializeDictionary(e,r)}deserializePromise(e){let t=Y(),r=this.assignIndexedValue(e.i,t),s=this.deserialize(e.f);return e.s?t.resolve(s):t.reject(s),r.promise}deserializeBoxed(e){return this.assignIndexedValue(e.i,Object(this.deserialize(e.f)))}deserializePlugin(e){let t=this.plugins;if(t){let r=m(e.c);for(let s=0,i=t.length;s<i;s++){let a=t[s];if(a.tag===r)return this.assignIndexedValue(e.i,a.deserialize(e.s,this,{id:e.i}))}}throw new Ue$1(e.c)}deserializePromiseConstructor(e){return this.assignIndexedValue(e.i,Y()).promise}deserializePromiseResolve(e){let t=this.refs.get(e.i);v$1(t,new w$1("Promise")),t.resolve(this.deserialize(e.a[1]));}deserializePromiseReject(e){let t=this.refs.get(e.i);v$1(t,new w$1("Promise")),t.reject(this.deserialize(e.a[1]));}deserializeIteratorFactoryInstance(e){this.deserialize(e.a[0]);let t=this.deserialize(e.a[1]);return yr(t)}deserializeAsyncIteratorFactoryInstance(e){this.deserialize(e.a[0]);let t=this.deserialize(e.a[1]);return mr(t)}deserializeStreamConstructor(e){let t=this.assignIndexedValue(e.i,P$1()),r=e.a.length;if(r)for(let s=0;s<r;s++)this.deserialize(e.a[s]);return t}deserializeStreamNext(e){let t=this.refs.get(e.i);v$1(t,new w$1("Stream")),t.next(this.deserialize(e.f));}deserializeStreamThrow(e){let t=this.refs.get(e.i);v$1(t,new w$1("Stream")),t.throw(this.deserialize(e.f));}deserializeStreamReturn(e){let t=this.refs.get(e.i);v$1(t,new w$1("Stream")),t.return(this.deserialize(e.f));}deserializeIteratorFactory(e){this.deserialize(e.f);}deserializeAsyncIteratorFactory(e){this.deserialize(e.a[1]);}deserialize(e){try{switch(e.t){case 2:return Tt$1[e.s];case 0:return e.s;case 1:return m(e.s);case 3:return BigInt(e.s);case 4:return this.refs.get(e.i);case 18:return this.deserializeReference(e);case 9:return this.deserializeArray(e);case 10:case 11:return this.deserializeObject(e);case 5:return this.deserializeDate(e);case 6:return this.deserializeRegExp(e);case 7:return this.deserializeSet(e);case 8:return this.deserializeMap(e);case 19:return this.deserializeArrayBuffer(e);case 16:case 15:return this.deserializeTypedArray(e);case 20:return this.deserializeDataView(e);case 14:return this.deserializeAggregateError(e);case 13:return this.deserializeError(e);case 12:return this.deserializePromise(e);case 17:return Ft$1[e.s];case 21:return this.deserializeBoxed(e);case 25:return this.deserializePlugin(e);case 22:return this.deserializePromiseConstructor(e);case 23:return this.deserializePromiseResolve(e);case 24:return this.deserializePromiseReject(e);case 28:return this.deserializeIteratorFactoryInstance(e);case 30:return this.deserializeAsyncIteratorFactoryInstance(e);case 31:return this.deserializeStreamConstructor(e);case 32:return this.deserializeStreamNext(e);case 33:return this.deserializeStreamThrow(e);case 34:return this.deserializeStreamReturn(e);case 27:return this.deserializeIteratorFactory(e);case 29:return this.deserializeAsyncIteratorFactory(e);default:throw new Le(e)}}catch(t){throw new lr$1(t)}}},Sr=class extends wr$1{constructor(t){super(t),this.mode="vanilla",this.marked=new Set(t.markedRefs);}assignIndexedValue(t,r){return this.marked.has(t)&&this.refs.set(t,r),r}},Rr=/^[$A-Z_][0-9A-Z_$]*$/i;function fe$1(e){let t=e[0];return (t==="$"||t==="_"||t>="A"&&t<="Z"||t>="a"&&t<="z")&&Rr.test(e)}function R(e){switch(e.t){case 0:return e.s+"="+e.v;case 2:return e.s+".set("+e.k+","+e.v+")";case 1:return e.s+".add("+e.v+")";case 3:return e.s+".delete("+e.k+")"}}function Ar$1(e){let t=[],r=e[0];for(let s=1,i=e.length,a,n=r;s<i;s++)a=e[s],a.t===0&&a.v===n.v?r={t:0,s:a.s,k:void 0,v:R(r)}:a.t===2&&a.s===n.s?r={t:2,s:R(r),k:a.k,v:a.v}:a.t===1&&a.s===n.s?r={t:1,s:R(r),k:void 0,v:a.v}:a.t===3&&a.s===n.s?r={t:3,s:R(r),k:a.k,v:void 0}:(t.push(r),r=a),n=a;return t.push(r),t}function pe$1(e){if(e.length){let t="",r=Ar$1(e);for(let s=0,i=r.length;s<i;s++)t+=R(r[s])+",";return t}}var Er$1="Object.create(null)",Ir="new Set",xr="new Map",Pr$1="Promise.resolve",kr="Promise.reject",Fr={3:"Object.freeze",2:"Object.seal",1:"Object.preventExtensions",0:void 0},Cr$1=class Cr{constructor(e){this.stack=[],this.flags=[],this.assignments=[],this.plugins=e.plugins,this.features=e.features,this.marked=new Set(e.markedRefs);}createFunction(e,t){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>"+t:"function("+e.join(",")+"){return "+t+"}"}createEffectfulFunction(e,t){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>{"+t+"}":"function("+e.join(",")+"){"+t+"}"}markRef(e){this.marked.add(e);}isMarked(e){return this.marked.has(e)}pushObjectFlag(e,t){e!==0&&(this.markRef(t),this.flags.push({type:e,value:this.getRefParam(t)}));}resolveFlags(){let e="";for(let t=0,r=this.flags,s=r.length;t<s;t++){let i=r[t];e+=Fr[i.type]+"("+i.value+"),";}return e}resolvePatches(){let e=pe$1(this.assignments),t=this.resolveFlags();return e?t?e+t:e:t}createAssignment(e,t){this.assignments.push({t:0,s:e,k:void 0,v:t});}createAddAssignment(e,t){this.assignments.push({t:1,s:this.getRefParam(e),k:void 0,v:t});}createSetAssignment(e,t,r){this.assignments.push({t:2,s:this.getRefParam(e),k:t,v:r});}createDeleteAssignment(e,t){this.assignments.push({t:3,s:this.getRefParam(e),k:t,v:void 0});}createArrayAssign(e,t,r){this.createAssignment(this.getRefParam(e)+"["+t+"]",r);}createObjectAssign(e,t,r){this.createAssignment(this.getRefParam(e)+"."+t,r);}isIndexedValueInStack(e){return e.t===4&&this.stack.includes(e.i)}serializeReference(e){return this.assignIndexedValue(e.i,S$1+'.get("'+e.s+'")')}serializeArrayItem(e,t,r){return t?this.isIndexedValueInStack(t)?(this.markRef(e),this.createArrayAssign(e,r,this.getRefParam(t.i)),""):this.serialize(t):""}serializeArray(e){let t=e.i;if(e.l){this.stack.push(t);let r=e.a,s=this.serializeArrayItem(t,r[0],0),i=s==="";for(let a=1,n=e.l,o;a<n;a++)o=this.serializeArrayItem(t,r[a],a),s+=","+o,i=o==="";return this.stack.pop(),this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(t,"["+s+(i?",]":"]"))}return this.assignIndexedValue(t,"[]")}serializeProperty(e,t,r){if(typeof t=="string"){let s=Number(t),i=s>=0&&s.toString()===t||fe$1(t);if(this.isIndexedValueInStack(r)){let a=this.getRefParam(r.i);return this.markRef(e.i),i&&s!==s?this.createObjectAssign(e.i,t,a):this.createArrayAssign(e.i,i?t:'"'+t+'"',a),""}return (i?t:'"'+t+'"')+":"+this.serialize(r)}return "["+this.serialize(t)+"]:"+this.serialize(r)}serializeProperties(e,t){let r=t.s;if(r){let s=t.k,i=t.v;this.stack.push(e.i);let a=this.serializeProperty(e,s[0],i[0]);for(let n=1,o=a;n<r;n++)o=this.serializeProperty(e,s[n],i[n]),a+=(o&&a&&",")+o;return this.stack.pop(),"{"+a+"}"}return "{}"}serializeObject(e){return this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(e.i,this.serializeProperties(e,e.p))}serializeWithObjectAssign(e,t,r){let s=this.serializeProperties(e,t);return s!=="{}"?"Object.assign("+r+","+s+")":r}serializeStringKeyAssignment(e,t,r,s){let i=this.serialize(s),a=Number(r),n=a>=0&&a.toString()===r||fe$1(r);if(this.isIndexedValueInStack(s))n&&a!==a?this.createObjectAssign(e.i,r,i):this.createArrayAssign(e.i,n?r:'"'+r+'"',i);else {let o=this.assignments;this.assignments=t,n&&a!==a?this.createObjectAssign(e.i,r,i):this.createArrayAssign(e.i,n?r:'"'+r+'"',i),this.assignments=o;}}serializeAssignment(e,t,r,s){if(typeof r=="string")this.serializeStringKeyAssignment(e,t,r,s);else {let i=this.stack;this.stack=[];let a=this.serialize(s);this.stack=i;let n=this.assignments;this.assignments=t,this.createArrayAssign(e.i,this.serialize(r),a),this.assignments=n;}}serializeAssignments(e,t){let r=t.s;if(r){let s=[],i=t.k,a=t.v;this.stack.push(e.i);for(let n=0;n<r;n++)this.serializeAssignment(e,s,i[n],a[n]);return this.stack.pop(),pe$1(s)}}serializeDictionary(e,t){if(e.p)if(this.features&8)t=this.serializeWithObjectAssign(e,e.p,t);else {this.markRef(e.i);let r=this.serializeAssignments(e,e.p);if(r)return "("+this.assignIndexedValue(e.i,t)+","+r+this.getRefParam(e.i)+")"}return this.assignIndexedValue(e.i,t)}serializeNullConstructor(e){return this.pushObjectFlag(e.o,e.i),this.serializeDictionary(e,Er$1)}serializeDate(e){return this.assignIndexedValue(e.i,'new Date("'+e.s+'")')}serializeRegExp(e){return this.assignIndexedValue(e.i,"/"+e.c+"/"+e.m)}serializeSetItem(e,t){return this.isIndexedValueInStack(t)?(this.markRef(e),this.createAddAssignment(e,this.getRefParam(t.i)),""):this.serialize(t)}serializeSet(e){let t=Ir,r=e.l,s=e.i;if(r){let i=e.a;this.stack.push(s);let a=this.serializeSetItem(s,i[0]);for(let n=1,o=a;n<r;n++)o=this.serializeSetItem(s,i[n]),a+=(o&&a&&",")+o;this.stack.pop(),a&&(t+="(["+a+"])");}return this.assignIndexedValue(s,t)}serializeMapEntry(e,t,r,s){if(this.isIndexedValueInStack(t)){let i=this.getRefParam(t.i);if(this.markRef(e),this.isIndexedValueInStack(r)){let n=this.getRefParam(r.i);return this.createSetAssignment(e,i,n),""}if(r.t!==4&&r.i!=null&&this.isMarked(r.i)){let n="("+this.serialize(r)+",["+s+","+s+"])";return this.createSetAssignment(e,i,this.getRefParam(r.i)),this.createDeleteAssignment(e,s),n}let a=this.stack;return this.stack=[],this.createSetAssignment(e,i,this.serialize(r)),this.stack=a,""}if(this.isIndexedValueInStack(r)){let i=this.getRefParam(r.i);if(this.markRef(e),t.t!==4&&t.i!=null&&this.isMarked(t.i)){let n="("+this.serialize(t)+",["+s+","+s+"])";return this.createSetAssignment(e,this.getRefParam(t.i),i),this.createDeleteAssignment(e,s),n}let a=this.stack;return this.stack=[],this.createSetAssignment(e,this.serialize(t),i),this.stack=a,""}return "["+this.serialize(t)+","+this.serialize(r)+"]"}serializeMap(e){let t=xr,r=e.e.s,s=e.i,i=e.f,a=this.getRefParam(i.i);if(r){let n=e.e.k,o=e.e.v;this.stack.push(s);let l=this.serializeMapEntry(s,n[0],o[0],a);for(let u=1,d=l;u<r;u++)d=this.serializeMapEntry(s,n[u],o[u],a),l+=(d&&l&&",")+d;this.stack.pop(),l&&(t+="(["+l+"])");}return i.t===26&&(this.markRef(i.i),t="("+this.serialize(i)+","+t+")"),this.assignIndexedValue(s,t)}serializeArrayBuffer(e){let t="new Uint8Array(",r=e.s,s=r.length;if(s){t+="["+r[0];for(let i=1;i<s;i++)t+=","+r[i];t+="]";}return this.assignIndexedValue(e.i,t+").buffer")}serializeTypedArray(e){return this.assignIndexedValue(e.i,"new "+e.c+"("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeDataView(e){return this.assignIndexedValue(e.i,"new DataView("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeAggregateError(e){let t=e.i;this.stack.push(t);let r=this.serializeDictionary(e,'new AggregateError([],"'+e.m+'")');return this.stack.pop(),r}serializeError(e){return this.serializeDictionary(e,"new "+je$1[e.s]+'("'+e.m+'")')}serializePromise(e){let t,r=e.f,s=e.i,i=e.s?Pr$1:kr;if(this.isIndexedValueInStack(r)){let a=this.getRefParam(r.i);t=i+(e.s?"().then("+this.createFunction([],a)+")":"().catch("+this.createEffectfulFunction([],"throw "+a)+")");}else {this.stack.push(s);let a=this.serialize(r);this.stack.pop(),t=i+"("+a+")";}return this.assignIndexedValue(s,t)}serializeWellKnownSymbol(e){return this.assignIndexedValue(e.i,kt$1[e.s])}serializeBoxed(e){return this.assignIndexedValue(e.i,"Object("+this.serialize(e.f)+")")}serializePlugin(e){let t=this.plugins;if(t)for(let r=0,s=t.length;r<s;r++){let i=t[r];if(i.tag===e.c)return this.assignIndexedValue(e.i,i.serialize(e.s,this,{id:e.i}))}throw new Ue$1(e.c)}getConstructor(e){let t=this.serialize(e);return t===this.getRefParam(e.i)?t:"("+t+")"}serializePromiseConstructor(e){return this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()")}serializePromiseResolve(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializePromiseReject(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializeSpecialReferenceValue(e){switch(e){case 0:return "[]";case 1:return this.createFunction(["s","f","p"],"((p=new Promise("+this.createEffectfulFunction(["a","b"],"s=a,f=b")+")).s=s,p.f=f,p)");case 2:return this.createEffectfulFunction(["p","d"],'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');case 3:return this.createEffectfulFunction(["p","d"],'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');case 4:return this.createFunction(["b","a","s","l","p","f","e","n"],"(b=[],a=!0,s=!1,l=[],p=0,f="+this.createEffectfulFunction(["v","m","x"],"for(x=0;x<p;x++)l[x]&&l[x][m](v)")+",n="+this.createEffectfulFunction(["o","x","z","c"],'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))')+",e="+this.createFunction(["o","t"],"(a&&(l[t=p++]=o),n(o),"+this.createEffectfulFunction([],"a&&(l[t]=void 0)")+")")+",{__SEROVAL_STREAM__:!0,on:"+this.createFunction(["o"],"e(o)")+",next:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"next"))')+",throw:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)')+",return:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)')+"})");default:return ""}}serializeSpecialReference(e){return this.assignIndexedValue(e.i,this.serializeSpecialReferenceValue(e.s))}serializeIteratorFactory(e){let t="",r=!1;return e.f.t!==4&&(this.markRef(e.f.i),t="("+this.serialize(e.f)+",",r=!0),t+=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["i","c","d","t"],"(i=0,t={["+this.getRefParam(e.f.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction([],"if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}")+"})"))),r&&(t+=")"),t}serializeIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeAsyncIteratorFactory(e){let t=e.a[0],r=e.a[1],s="";t.t!==4&&(this.markRef(t.i),s+="("+this.serialize(t)),r.t!==4&&(this.markRef(r.i),s+=(s?",":"(")+this.serialize(r)),s&&(s+=",");let i=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["b","c","p","d","e","t","f"],"(b=[],c=0,p=[],d=-1,e=!1,f="+this.createEffectfulFunction(["i","l"],"for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})")+",s.on({next:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!1,value:v});b.push(v)")+",throw:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)")+",return:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)")+"}),t={["+this.getRefParam(r.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction(["i","t","v"],"if(d===-1){return((i=c++)>=b.length)?(p.push(t="+this.getRefParam(t.i)+"()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}")+"})")));return s?s+i+")":i}serializeAsyncIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeStreamConstructor(e){let t=this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()"),r=e.a.length;if(r){let s=this.serialize(e.a[0]);for(let i=1;i<r;i++)s+=","+this.serialize(e.a[i]);return "("+t+","+s+","+this.getRefParam(e.i)+")"}return t}serializeStreamNext(e){return this.getRefParam(e.i)+".next("+this.serialize(e.f)+")"}serializeStreamThrow(e){return this.getRefParam(e.i)+".throw("+this.serialize(e.f)+")"}serializeStreamReturn(e){return this.getRefParam(e.i)+".return("+this.serialize(e.f)+")"}serialize(e){try{switch(e.t){case 2:return Ct[e.s];case 0:return ""+e.s;case 1:return '"'+e.s+'"';case 3:return e.s+"n";case 4:return this.getRefParam(e.i);case 18:return this.serializeReference(e);case 9:return this.serializeArray(e);case 10:return this.serializeObject(e);case 11:return this.serializeNullConstructor(e);case 5:return this.serializeDate(e);case 6:return this.serializeRegExp(e);case 7:return this.serializeSet(e);case 8:return this.serializeMap(e);case 19:return this.serializeArrayBuffer(e);case 16:case 15:return this.serializeTypedArray(e);case 20:return this.serializeDataView(e);case 14:return this.serializeAggregateError(e);case 13:return this.serializeError(e);case 12:return this.serializePromise(e);case 17:return this.serializeWellKnownSymbol(e);case 21:return this.serializeBoxed(e);case 22:return this.serializePromiseConstructor(e);case 23:return this.serializePromiseResolve(e);case 24:return this.serializePromiseReject(e);case 25:return this.serializePlugin(e);case 26:return this.serializeSpecialReference(e);case 27:return this.serializeIteratorFactory(e);case 28:return this.serializeIteratorFactoryInstance(e);case 29:return this.serializeAsyncIteratorFactory(e);case 30:return this.serializeAsyncIteratorFactoryInstance(e);case 31:return this.serializeStreamConstructor(e);case 32:return this.serializeStreamNext(e);case 33:return this.serializeStreamThrow(e);case 34:return this.serializeStreamReturn(e);default:throw new Le(e)}}catch(t){throw new or$1(t)}}},Tr=class extends br{parseItems(t){let r=[];for(let s=0,i=t.length;s<i;s++)s in t&&(r[s]=this.parse(t[s]));return r}parseArray(t,r){return Gt$1(t,r,this.parseItems(r))}parseProperties(t){let r=Object.entries(t),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p$1(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(De$1(this.parseIteratorFactory(),this.parse(qe$1(t))))),a=Symbol.asyncIterator,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(_e$1(this.parseAsyncIteratorFactory(),this.parse(P$1())))),a=Symbol.toStringTag,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(X$1(t[a]))),a=Symbol.isConcatSpreadable,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(t[a]?K$1:G$1)),{k:s,v:i,s:s.length}}parsePlainObject(t,r,s){return this.createObjectNode(t,r,s,this.parseProperties(r))}parseBoxed(t,r){return Xt(t,this.parse(r.valueOf()))}parseTypedArray(t,r){return Yt$1(t,r,this.parse(r.buffer))}parseBigIntTypedArray(t,r){return Zt$1(t,r,this.parse(r.buffer))}parseDataView(t,r){return Jt$1(t,r,this.parse(r.buffer))}parseError(t,r){let s=ce(r,this.features);return Qt(t,r,s?this.parseProperties(s):void 0)}parseAggregateError(t,r){let s=ce(r,this.features);return er$1(t,r,s?this.parseProperties(s):void 0)}parseMap(t,r){let s=[],i=[];for(let[a,n]of r.entries())s.push(this.parse(a)),i.push(this.parse(n));return this.createMapNode(t,s,i,r.size)}parseSet(t,r){let s=[];for(let i of r.keys())s.push(this.parse(i));return tr$1(t,r.size,s)}parsePlugin(t,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.sync&&n.test(r))return Ne$1(t,n.tag,n.parse.sync(r,this,{id:t}))}}parseStream(t,r){return Me(t,this.parseSpecialReference(4),[])}parsePromise(t,r){return this.createPromiseConstructorNode(t)}parseObject(t,r){if(Array.isArray(r))return this.parseArray(t,r);if(vr(r))return this.parseStream(t,r);let s=this.parsePlugin(t,r);if(s)return s;let i=r.constructor;switch(i){case Object:return this.parsePlainObject(t,r,!1);case void 0:return this.parsePlainObject(t,r,!0);case Date:return Ht$1(t,r);case RegExp:return Wt(t,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return this.parseError(t,r);case Number:case Boolean:case String:case BigInt:return this.parseBoxed(t,r);case ArrayBuffer:return Bt$1(t,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return this.parseTypedArray(t,r);case DataView:return this.parseDataView(t,r);case Map:return this.parseMap(t,r);case Set:return this.parseSet(t,r)}if(i===Promise||r instanceof Promise)return this.parsePromise(t,r);let a=this.features;if(a&16)switch(i){case BigInt64Array:case BigUint64Array:return this.parseBigIntTypedArray(t,r)}if(a&1&&typeof AggregateError<"u"&&(i===AggregateError||r instanceof AggregateError))return this.parseAggregateError(t,r);if(r instanceof Error)return this.parseError(t,r);if(Symbol.iterator in r||Symbol.asyncIterator in r)return this.parsePlainObject(t,r,!!i);throw new O$1(r)}parse(t){try{switch(typeof t){case"boolean":return t?K$1:G$1;case"undefined":return $t$1;case"string":return X$1(t);case"number":return Lt$1(t);case"bigint":return Ut$1(t);case"object":{if(t){let r=this.getReference(t);return r.type===0?this.parseObject(r.value,t):r.value}return jt}case"symbol":return this.parseWellKnownSymbol(t);case"function":return this.parseFunction(t);default:throw new O$1(t)}}catch(r){throw new nr$1(r)}}};function ve$1(e,t={}){let r=Oe$1(t.plugins);return new Sr({plugins:r,markedRefs:e.m}).deserialize(e.t)}var Or=class extends Cr$1{constructor(t){super(t),this.mode="cross",this.scopeId=t.scopeId;}getRefParam(t){return T+"["+t+"]"}assignIndexedValue(t,r){return this.getRefParam(t)+"="+r}serializeTop(t){let r=this.serialize(t),s=t.i;if(s==null)return r;let i=this.resolvePatches(),a=this.getRefParam(s),n=this.scopeId==null?"":T,o=i?r+","+i+a:r;if(n==="")return i?"("+o+")":o;let l=this.scopeId==null?"()":"("+T+'["'+p$1(this.scopeId)+'"])';return "("+this.createFunction([n],o)+")"+l}},$r=class extends Tr{constructor(t){super(t),this.alive=!0,this.pending=0,this.initial=!0,this.buffer=[],this.onParseCallback=t.onParse,this.onErrorCallback=t.onError,this.onDoneCallback=t.onDone;}onParseInternal(t,r){try{this.onParseCallback(t,r);}catch(s){this.onError(s);}}flush(){for(let t=0,r=this.buffer.length;t<r;t++)this.onParseInternal(this.buffer[t],!1);}onParse(t){this.initial?this.buffer.push(t):this.onParseInternal(t,!1);}onError(t){if(this.onErrorCallback)this.onErrorCallback(t);else throw t}onDone(){this.onDoneCallback&&this.onDoneCallback();}pushPendingState(){this.pending++;}popPendingState(){--this.pending<=0&&this.onDone();}parseProperties(t){let r=Object.entries(t),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p$1(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(De$1(this.parseIteratorFactory(),this.parse(qe$1(t))))),a=Symbol.asyncIterator,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(_e$1(this.parseAsyncIteratorFactory(),this.parse(gr(t))))),a=Symbol.toStringTag,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(X$1(t[a]))),a=Symbol.isConcatSpreadable,a in t&&(s.push(this.parseWellKnownSymbol(a)),i.push(t[a]?K$1:G$1)),{k:s,v:i,s:s.length}}parsePromise(t,r){return r.then(s=>{let i=this.parseWithError(s);i&&this.onParse({t:23,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(2),i],f:void 0,b:void 0,o:void 0}),this.popPendingState();},s=>{if(this.alive){let i=this.parseWithError(s);i&&this.onParse({t:24,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(3),i],f:void 0,b:void 0,o:void 0});}this.popPendingState();}),this.pushPendingState(),this.createPromiseConstructorNode(t)}parsePlugin(t,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.stream&&n.test(r))return Ne$1(t,n.tag,n.parse.stream(r,this,{id:t}))}}parseStream(t,r){let s=Me(t,this.parseSpecialReference(4),[]);return this.pushPendingState(),r.on({next:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(rr$1(t,a));}},throw:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(sr$1(t,a));}this.popPendingState();},return:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(ir$1(t,a));}this.popPendingState();}}),s}parseWithError(t){try{return this.parse(t)}catch(r){this.onError(r);return}}start(t){let r=this.parseWithError(t);r&&(this.onParseInternal(r,!0),this.initial=!1,this.flush(),this.pending<=0&&this.destroy());}destroy(){this.alive&&(this.onDone(),this.alive=!1);}isAlive(){return this.alive}},jr=class extends $r{constructor(){super(...arguments),this.mode="cross";}};function Vr(e,t){let r=Oe$1(t.plugins),s=new jr({plugins:r,refs:t.refs,disabledFeatures:t.disabledFeatures,onParse(i,a){let n=new Or({plugins:r,features:s.features,scopeId:t.scopeId,markedRefs:s.marked}),o;try{o=n.serializeTop(i);}catch(l){t.onError&&t.onError(l);return}t.onSerialize(o,a);},onError:t.onError,onDone:t.onDone});return s.start(e),()=>{s.destroy();}}function N(e){return {detail:e.detail,bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}}var Nr={tag:"seroval-plugins/web/CustomEvent",test(e){return typeof CustomEvent>"u"?!1:e instanceof CustomEvent},parse:{sync(e,t){return {type:t.parse(e.type),options:t.parse(N(e))}},async async(e,t){return {type:await t.parse(e.type),options:await t.parse(N(e))}},stream(e,t){return {type:t.parse(e.type),options:t.parse(N(e))}}},serialize(e,t){return "new CustomEvent("+t.serialize(e.type)+","+t.serialize(e.options)+")"},deserialize(e,t){return new CustomEvent(t.deserialize(e.type),t.deserialize(e.options))}},Z$1=Nr,Dr={tag:"seroval-plugins/web/DOMException",test(e){return typeof DOMException>"u"?!1:e instanceof DOMException},parse:{sync(e,t){return {name:t.parse(e.name),message:t.parse(e.message)}},async async(e,t){return {name:await t.parse(e.name),message:await t.parse(e.message)}},stream(e,t){return {name:t.parse(e.name),message:t.parse(e.message)}}},serialize(e,t){return "new DOMException("+t.serialize(e.message)+","+t.serialize(e.name)+")"},deserialize(e,t){return new DOMException(t.deserialize(e.message),t.deserialize(e.name))}},J$1=Dr;function D$1(e){return {bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}}var _r={tag:"seroval-plugins/web/Event",test(e){return typeof Event>"u"?!1:e instanceof Event},parse:{sync(e,t){return {type:t.parse(e.type),options:t.parse(D$1(e))}},async async(e,t){return {type:await t.parse(e.type),options:await t.parse(D$1(e))}},stream(e,t){return {type:t.parse(e.type),options:t.parse(D$1(e))}}},serialize(e,t){return "new Event("+t.serialize(e.type)+","+t.serialize(e.options)+")"},deserialize(e,t){return new Event(t.deserialize(e.type),t.deserialize(e.options))}},Q$1=_r,Mr$1={tag:"seroval-plugins/web/File",test(e){return typeof File>"u"?!1:e instanceof File},parse:{async async(e,t){return {name:await t.parse(e.name),options:await t.parse({type:e.type,lastModified:e.lastModified}),buffer:await t.parse(await e.arrayBuffer())}}},serialize(e,t){return "new File(["+t.serialize(e.buffer)+"],"+t.serialize(e.name)+","+t.serialize(e.options)+")"},deserialize(e,t){return new File([t.deserialize(e.buffer)],t.deserialize(e.name),t.deserialize(e.options))}},Lr=Mr$1;function _$2(e){let t=[];return e.forEach((r,s)=>{t.push([s,r]);}),t}var A$1={},Ur={tag:"seroval-plugins/web/FormDataFactory",test(e){return e===A$1},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(e,t){return t.createEffectfulFunction(["e","f","i","s","t"],"f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f")},deserialize(){return A$1}},qr={tag:"seroval-plugins/web/FormData",extends:[Lr,Ur],test(e){return typeof FormData>"u"?!1:e instanceof FormData},parse:{sync(e,t){return {factory:t.parse(A$1),entries:t.parse(_$2(e))}},async async(e,t){return {factory:await t.parse(A$1),entries:await t.parse(_$2(e))}},stream(e,t){return {factory:t.parse(A$1),entries:t.parse(_$2(e))}}},serialize(e,t){return "("+t.serialize(e.factory)+")("+t.serialize(e.entries)+")"},deserialize(e,t){let r=new FormData,s=t.deserialize(e.entries);for(let i=0,a=s.length;i<a;i++){let n=s[i];r.append(n[0],n[1]);}return r}},ee$1=qr;function M$1(e){let t=[];return e.forEach((r,s)=>{t.push([s,r]);}),t}var Hr={tag:"seroval-plugins/web/Headers",test(e){return typeof Headers>"u"?!1:e instanceof Headers},parse:{sync(e,t){return t.parse(M$1(e))},async async(e,t){return await t.parse(M$1(e))},stream(e,t){return t.parse(M$1(e))}},serialize(e,t){return "new Headers("+t.serialize(e)+")"},deserialize(e,t){return new Headers(t.deserialize(e))}},I$2=Hr,E$1={},Wr={tag:"seroval-plugins/web/ReadableStreamFactory",test(e){return e===E$1},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(e,t){return t.createFunction(["d"],"new ReadableStream({start:"+t.createEffectfulFunction(["c"],"d.on({next:"+t.createEffectfulFunction(["v"],"c.enqueue(v)")+",throw:"+t.createEffectfulFunction(["v"],"c.error(v)")+",return:"+t.createEffectfulFunction([],"c.close()")+"})")+"})")},deserialize(){return E$1}};function ge$1(e){let t=P$1(),r=e.getReader();async function s(){try{let i=await r.read();i.done?t.return(i.value):(t.next(i.value),await s());}catch(i){t.throw(i);}}return s().catch(()=>{}),t}var Br={tag:"seroval/plugins/web/ReadableStream",extends:[Wr],test(e){return typeof ReadableStream>"u"?!1:e instanceof ReadableStream},parse:{sync(e,t){return {factory:t.parse(E$1),stream:t.parse(P$1())}},async async(e,t){return {factory:await t.parse(E$1),stream:await t.parse(ge$1(e))}},stream(e,t){return {factory:t.parse(E$1),stream:t.parse(ge$1(e))}}},serialize(e,t){return "("+t.serialize(e.factory)+")("+t.serialize(e.stream)+")"},deserialize(e,t){let r=t.deserialize(e.stream);return new ReadableStream({start(s){r.on({next(i){s.enqueue(i);},throw(i){s.error(i);},return(){s.close();}});}})}},x$1=Br;function me$1(e,t){return {body:t,cache:e.cache,credentials:e.credentials,headers:e.headers,integrity:e.integrity,keepalive:e.keepalive,method:e.method,mode:e.mode,redirect:e.redirect,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var Kr={tag:"seroval-plugins/web/Request",extends:[x$1,I$2],test(e){return typeof Request>"u"?!1:e instanceof Request},parse:{async async(e,t){return {url:await t.parse(e.url),options:await t.parse(me$1(e,e.body?await e.clone().arrayBuffer():null))}},stream(e,t){return {url:t.parse(e.url),options:t.parse(me$1(e,e.clone().body))}}},serialize(e,t){return "new Request("+t.serialize(e.url)+","+t.serialize(e.options)+")"},deserialize(e,t){return new Request(t.deserialize(e.url),t.deserialize(e.options))}},te=Kr;function ye(e){return {headers:e.headers,status:e.status,statusText:e.statusText}}var Gr={tag:"seroval-plugins/web/Response",extends:[x$1,I$2],test(e){return typeof Response>"u"?!1:e instanceof Response},parse:{async async(e,t){return {body:await t.parse(e.body?await e.clone().arrayBuffer():null),options:await t.parse(ye(e))}},stream(e,t){return {body:t.parse(e.clone().body),options:t.parse(ye(e))}}},serialize(e,t){return "new Response("+t.serialize(e.body)+","+t.serialize(e.options)+")"},deserialize(e,t){return new Response(t.deserialize(e.body),t.deserialize(e.options))}},re=Gr,Xr={tag:"seroval-plugins/web/URLSearchParams",test(e){return typeof URLSearchParams>"u"?!1:e instanceof URLSearchParams},parse:{sync(e,t){return t.parse(e.toString())},async async(e,t){return await t.parse(e.toString())},stream(e,t){return t.parse(e.toString())}},serialize(e,t){return "new URLSearchParams("+t.serialize(e)+")"},deserialize(e,t){return new URLSearchParams(t.deserialize(e))}},se=Xr,Yr={tag:"seroval-plugins/web/URL",test(e){return typeof URL>"u"?!1:e instanceof URL},parse:{sync(e,t){return t.parse(e.href)},async async(e,t){return await t.parse(e.href)},stream(e,t){return t.parse(e.href)}},serialize(e,t){return "new URL("+t.serialize(e)+")"},deserialize(e,t){return new URL(t.deserialize(e))}},ie$1=Yr;function Zr(e={}){let t,r=!1;const s=n=>{if(t&&t!==n)throw new Error("Context conflict")};let i;if(e.asyncContext){const n=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?i=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.");}const a=()=>{if(i&&t===void 0){const n=i.getStore();if(n!==void 0)return n}return t};return {use:()=>{const n=a();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>a(),set:(n,o)=>{o||s(n),t=n,r=!0;},unset:()=>{t=void 0,r=!1;},call:(n,o)=>{s(n),t=n;try{return i?i.run(n,o):o()}finally{r||(t=void 0);}},async callAsync(n,o){t=n;const l=()=>{t=n;},u=()=>t===n?l:void 0;we$1.add(u);try{const d=i?i.run(n,o):o();return r||(t=void 0),await d}finally{we$1.delete(u);}}}}function Jr(e={}){const t={};return {get(r,s={}){return t[r]||(t[r]=Zr({...e,...s})),t[r],t[r]}}}const $$1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},be$1="__unctx__",Qr=$$1[be$1]||($$1[be$1]=Jr()),es=(e,t={})=>Qr.get(e,t),ze$1="__unctx_async_handlers__",we$1=$$1[ze$1]||($$1[ze$1]=new Set);function ts(e){let t;const r=We$1(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(r,{...s,body:e.node.req.body}):new Request(r,{...s,get body(){return t||(t=cs(e),t)}})}function rs(e){return e.web??(e.web={request:ts(e),url:We$1(e)}),e.web.request}function ss(){return ps()}const He$1=Symbol("$HTTPEvent");function is(e){return typeof e=="object"&&(e instanceof H3Event||e?.[He$1]instanceof H3Event||e?.__is_event__===!0)}function h$1(e){return function(...t){let r=t[0];if(is(r))t[0]=r instanceof H3Event||r.__is_event__?r:r[He$1];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=ss(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(r);}return e(...t)}}const We$1=h$1(getRequestURL),as=h$1(getRequestIP),j=h$1(setResponseStatus),Se$1=h$1(getResponseStatus),ns=h$1(getResponseStatusText),C=h$1(getResponseHeaders),Re$1=h$1(getResponseHeader),os=h$1(setResponseHeader),Be=h$1(appendResponseHeader),ls=h$1(getCookie),us=h$1(setCookie),L=h$1(setHeader),cs=h$1(getRequestWebStream),ds=h$1(removeResponseHeader),hs=h$1(rs);function fs(){return es("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function ps(){return fs().use().event}const U$2="Invariant Violation",{setPrototypeOf:vs=function(e,t){return e.__proto__=t,e}}=Object;class le extends Error{constructor(r=U$2){super(typeof r=="number"?`${U$2}: ${r} (see https://github.com/apollographql/invariant-packages)`:r);k$1(this,"framesToPop",1);k$1(this,"name",U$2);vs(this,le.prototype);}}function gs(e,t){if(!e)throw new le(t)}const q$1=Symbol("fetchEvent");function ms(e){return {request:hs(e),response:ws$1(e),clientAddress:as(e),locals:{},nativeEvent:e}}function ys(e){return {...e}}function bs$1(e){if(!e[q$1]){const t=ms(e);e[q$1]=t;}return e[q$1]}function Ae$1(e,t){for(const[r,s]of t.entries())Be(e,r,s);}let zs$1 = class zs{constructor(t){k$1(this,"event");this.event=t;}get(t){const r=Re$1(this.event,t);return Array.isArray(r)?r.join(", "):r||null}has(t){return this.get(t)!==void 0}set(t,r){return os(this.event,t,r)}delete(t){return ds(this.event,t)}append(t,r){Be(this.event,t,r);}getSetCookie(){const t=Re$1(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return Object.entries(C(this.event)).forEach(([r,s])=>t(Array.isArray(s)?s.join(", "):s,r,this))}entries(){return Object.entries(C(this.event)).map(([t,r])=>[t,Array.isArray(r)?r.join(", "):r])[Symbol.iterator]()}keys(){return Object.keys(C(this.event))[Symbol.iterator]()}values(){return Object.values(C(this.event)).map(t=>Array.isArray(t)?t.join(", "):t)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}};function ws$1(e){return {get status(){return Se$1(e)},set status(t){j(e,t);},get statusText(){return ns(e)},set statusText(t){j(e,Se$1(),t);},headers:new zs$1(e)}}var Rs$1=" ";const As$1={style:e=>ssrElement("style",e.attrs,()=>escape(e.children),!0),link:e=>ssrElement("link",e.attrs,void 0,!0),script:e=>e.attrs.src?ssrElement("script",mergeProps(()=>e.attrs,{get id(){return e.key}}),()=>ssr(Rs$1),!0):null};function Es$1(e,t){let{tag:r,attrs:{key:s,...i}={key:void 0},children:a}=e;return As$1[r]({attrs:{...i,nonce:t},key:s,children:a})}function Is$1(e,t,r,s="default"){return lazy(async()=>{{const a=(await e.import())[s],o=(await t.inputs?.[e.src].assets()).filter(u=>u.tag==="style"||u.attrs.rel==="stylesheet");return {default:u=>[...o.map(d=>Es$1(d)),createComponent(a,u)]}}})}throw new Error("Should be provided by compiler");const Ge=[],Cs$1=Ts$1(Ge.filter(e=>e.page));function Ts$1(e){function t(r,s,i,a){const n=Object.values(r).find(o=>i.startsWith(o.id+"/"));return n?(t(n.children||(n.children=[]),s,i.slice(n.id.length)),r):(r.push({...s,id:i,path:i.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),r)}return e.sort((r,s)=>r.path.length-s.path.length).reduce((r,s)=>t(r,s,s.path,s.path),[])}function Xe$1(){function e(r){return {...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:r.$component&&Is$1(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(e):void 0}}return Cs$1.map(e)}let Ie$1;const ri$1=isServer?()=>getRequestEvent().routes:()=>Ie$1||(Ie$1=Xe$1());function $s$1(e){const t=ls(e.nativeEvent,"flash");if(!t)return;let r=JSON.parse(t);if(!r||!r.result)return;const s=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])];return us(e.nativeEvent,"flash","",{maxAge:0}),{input:s,url:r.url,pending:!1,result:r.error?new Error(r.result):r.result}}async function js$1(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:$s$1(e)},routes:Xe$1(),complete:!1,$islands:new Set})}const Vs$1=new Set([301,302,303,307,308]);function Ns$1(e){return e.status&&Vs$1.has(e.status)?e.status:302}function Ds$1(e){const t=new TextEncoder().encode(e),r=t.length,s=r.toString(16),i="00000000".substring(0,8-s.length)+s,a=new TextEncoder().encode(`;0x${i};`),n=new Uint8Array(12+r);return n.set(a),n.set(t,12),n}function xe$1(e,t){return new ReadableStream({start(r){Vr(t,{scopeId:e,plugins:[Z$1,J$1,Q$1,ee$1,I$2,x$1,te,re,se,ie$1],onSerialize(s,i){r.enqueue(Ds$1(i?`(${Et(e)},${s})`:s));},onDone(){r.close();},onError(s){r.error(s);}});}})}async function _s$1(e){const t=bs$1(e),r=t.request,s=r.headers.get("X-Server-Id"),i=r.headers.get("X-Server-Instance"),a=r.headers.has("X-Single-Flight"),n=new URL(r.url);let o,l;if(s)gs(typeof s=="string","Invalid server function"),[o,l]=s.split("#");else if(o=n.searchParams.get("id"),l=n.searchParams.get("name"),!o||!l)throw new Error("Invalid request");const u=(await globalThis.MANIFEST["server-fns"].chunks[o].import())[l];let d=[];if(!i||e.method==="GET"){const c=n.searchParams.get("args");if(c){const f=JSON.parse(c);(f.t?ve$1(f,{plugins:[Z$1,J$1,Q$1,ee$1,I$2,x$1,te,re,se,ie$1]}):f).forEach(y=>d.push(y));}}if(e.method==="POST"){const c=r.headers.get("content-type");if(c?.startsWith("multipart/form-data")||c?.startsWith("application/x-www-form-urlencoded"))d.push(await new Request(r,{...r,body:e.node.req.body}).formData());else if(c?.startsWith("application/json")){const f=new Request(r,{...r,body:e.node.req.body});d=ve$1(await f.json(),{plugins:[Z$1,J$1,Q$1,ee$1,I$2,x$1,te,re,se,ie$1]});}}try{let c=await provideRequestEvent(t,async()=>(sharedConfig.context={event:t},t.locals.serverFunctionMeta={id:o+"#"+l},u(...d)));if(a&&i&&(c=await Pe(t,c)),c instanceof Response&&i&&(c.headers&&Ae$1(e,c.headers),c.status&&(c.status<300||c.status>=400)&&j(e,c.status),c.customBody?c=await c.customBody():c.body==null&&(c=null)),!i){const f=c instanceof Error;let y=new URL(r.headers.get("referer")).toString(),ue=302;return c instanceof Response&&c.headers.has("Location")&&(y=new URL(c.headers.get("Location"),new URL(r.url).origin+"").toString(),ue=Ns$1(c)),new Response(null,{status:ue,headers:{Location:y,...c?{"Set-Cookie":`flash=${JSON.stringify({url:n.pathname+encodeURIComponent(n.search),result:f?c.message:c,error:f,input:[...d.slice(0,-1),[...d[d.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return L(e,"content-type","text/javascript"),xe$1(i,c)}catch(c){if(c instanceof Response)a&&i&&(c=await Pe(t,c)),c.headers&&Ae$1(e,c.headers),c.status&&(!i||c.status<300||c.status>=400)&&j(e,c.status),c.customBody?c=c.customBody():c.body==null&&(c=null);else {const f=c instanceof Error?c.message:typeof c=="string"?c:"true";L(e,"X-Error",f);}return i?(L(e,"content-type","text/javascript"),xe$1(i,c)):c}}let H;async function Pe(e,t){let r,s=new URL(e.request.headers.get("referer")).toString();t instanceof Response&&(t.headers.has("X-Revalidate")&&(r=t.headers.get("X-Revalidate").split(",")),t.headers.has("Location")&&(s=new URL(t.headers.get("Location"),new URL(e.request.url).origin+"").toString()));const i=ys(e);return i.request=new Request(s),await provideRequestEvent(i,async()=>{await js$1(i),H||(H=(await import('./build/app.mjs')).default),i.router.dataOnly=r||!0,i.router.previousUrl=e.request.headers.get("referer");try{renderToString(()=>{sharedConfig.context.event=i,H();});}catch(o){console.log(o);}const a=i.router.data;if(!a)return t;let n=!1;for(const o in a)a[o]===void 0?delete a[o]:n=!0;return n&&(t instanceof Response?t.customBody&&(a._$value=t.customBody()):(a._$value=t,t=new Response(null,{status:200})),t.customBody=()=>a,t.headers.set("X-Single-Flight","true")),t})}const si$1=eventHandler(_s$1);

const y = createContext$1(), v = ["title", "meta"], p = [], f$1 = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), l$2 = (n, t) => {
  const e = Object.fromEntries(Object.entries(n.props).filter(([r]) => t.includes(r)).sort());
  return (Object.hasOwn(e, "name") || Object.hasOwn(e, "property")) && (e.name = e.name || e.property, delete e.property), n.tag + JSON.stringify(e);
};
function E() {
  if (!sharedConfig.context) {
    const e = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(e, (r) => r.parentNode.removeChild(r));
  }
  const n = /* @__PURE__ */ new Map();
  function t(e) {
    if (e.ref)
      return e.ref;
    let r = document.querySelector(`[data-sm="${e.id}"]`);
    return r ? (r.tagName.toLowerCase() !== e.tag && (r.parentNode && r.parentNode.removeChild(r), r = document.createElement(e.tag)), r.removeAttribute("data-sm")) : r = document.createElement(e.tag), r;
  }
  return { addTag(e) {
    if (v.indexOf(e.tag) !== -1) {
      const i = e.tag === "title" ? p : f$1, a = l$2(e, i);
      n.has(a) || n.set(a, []);
      let s = n.get(a), u = s.length;
      s = [...s, e], n.set(a, s);
      let c = t(e);
      e.ref = c, spread(c, e.props);
      let d = null;
      for (var r = u - 1; r >= 0; r--)
        if (s[r] != null) {
          d = s[r];
          break;
        }
      return c.parentNode != document.head && document.head.appendChild(c), d && d.ref && d.ref.parentNode && document.head.removeChild(d.ref), u;
    }
    let o = t(e);
    return e.ref = o, spread(o, e.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(e, r) {
    const o = e.tag === "title" ? p : f$1, i = l$2(e, o);
    if (e.ref) {
      const a = n.get(i);
      if (a) {
        if (e.ref.parentNode) {
          e.ref.parentNode.removeChild(e.ref);
          for (let s = r - 1; s >= 0; s--)
            a[s] != null && document.head.appendChild(a[s].ref);
        }
        a[r] = null, n.set(i, a);
      } else
        e.ref.parentNode && e.ref.parentNode.removeChild(e.ref);
    }
  } };
}
function w() {
  const n = [];
  return useAssets(() => ssr(S(n))), { addTag(t) {
    if (v.indexOf(t.tag) !== -1) {
      const e = t.tag === "title" ? p : f$1, r = l$2(t, e), o = n.findIndex((i) => i.tag === t.tag && l$2(i, e) === r);
      o !== -1 && n.splice(o, 1);
    }
    return n.push(t), n.length;
  }, removeTag(t, e) {
  } };
}
const I$1 = (n) => {
  const t = isServer ? w() : E();
  return createComponent$1(y.Provider, { value: t, get children() {
    return n.children;
  } });
}, A = (n, t, e) => (M({ tag: n, props: t, setting: e, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function M(n) {
  const t = useContext(y);
  if (!t)
    throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const e = t.addTag(n);
    onCleanup(() => t.removeTag(n, e));
  });
}
function S(n) {
  return n.map((t) => {
    var _a, _b;
    const r = Object.keys(t.props).map((i) => i === "children" ? "" : ` ${i}="${escape(t.props[i], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${r}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${r}/>`;
  }).join("");
}
const k = (n) => A("title", n, { escape: true, close: true });

var _$1 = ["<script", ' id="kb-color-mode-script"', ">", "<\/script>"], u$1 = createContext$1();
function z() {
  const e = useContext(u$1);
  if (e === void 0)
    throw new Error("[kobalte]: `useColorMode` must be used within a `ColorModeProvider`");
  return e;
}
var h = "kb-color-mode";
function O(e) {
  return { ssr: false, type: "localStorage", get: (t) => {
    if (isServer)
      return t;
    let o;
    try {
      o = localStorage.getItem(e);
    } catch {
    }
    return o != null ? o : t;
  }, set: (t) => {
    try {
      localStorage.setItem(e, t);
    } catch {
    }
  } };
}
var D = O(h), l$1 = "system";
function g() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function I() {
  const e = document.createElement("style");
  return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
    window.getComputedStyle(document.body), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(e);
      });
    });
  };
}
function K(e, t = true) {
  const o = t ? I() : void 0;
  document.documentElement.dataset.kbTheme = e, document.documentElement.style.colorScheme = e, o == null ? void 0 : o();
}
function f(e) {
  var _a;
  return ((_a = g().matches) != null ? _a : e === "dark") ? "dark" : "light";
}
function $(e) {
  var _a;
  const t = "light", o = (_a = e.get(t)) != null ? _a : t;
  return o === "system" ? isServer ? t : f() : o;
}
function P(e) {
  const t = g(), o = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", o), () => {
    t.removeEventListener("change", o);
  };
}
function U$1(e) {
  const t = () => {
    var _a;
    return (_a = e.initialColorMode) != null ? _a : l$1;
  }, o = () => {
    var _a;
    return (_a = e.storageManager) != null ? _a : D;
  };
  let r;
  const [a, c] = createSignal($(o())), i = (n) => {
    c(n), K(n, e.disableTransitionOnChange);
  }, s = (n) => {
    r && (r(), r = void 0);
    const d = n === "system";
    d && (r = P(i)), i(d ? f() : n), o().set(n);
  }, p = () => {
    s(a() === "dark" ? "light" : "dark");
  };
  createEffect(() => {
    var _a;
    s((_a = o().get()) != null ? _a : t());
  }), onCleanup(() => {
    r == null ? void 0 : r();
  });
  const C = { colorMode: a, setColorMode: s, toggleColorMode: p };
  return createComponent$1(u$1.Provider, { value: C, get children() {
    return e.children;
  } });
}
var q = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function F(e) {
  return q.has(e) ? e : l$1;
}
function B(e) {
  const t = mergeProps$1({ initialColorMode: l$1, storageType: "localStorage", storageKey: h }, e), o = createMemo(() => {
    const r = F(t.initialColorMode), a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,s=e==="dark";return d.style.colorScheme=e,d.dataset.kbTheme=e,o},u=a,h="${r}",r="${t.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, c = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,i=r==="dark";return o.style.colorScheme=r,o.dataset.kbTheme=r,c},n=a,m="${r}",e="${t.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${t.storageType === "cookie" ? a : c}`.trim();
  });
  return ssr(_$1, ssrHydrationKey(), ssrAttribute("nonce", escape(t.nonce, true), false), o());
}

const s = `<h2>Familiar. Fully-featured. Mobile optimized.</h2>
<p>With an open source Core, uncomplicated low-code plug-in structure and additional Premium add-ons, TinyMCE scales with your app as you grow. That&rsquo;s why it&rsquo;s the WYSIWYG editor-of-choice for 1.5M+ developers when they need to build and ship products faster.</p>
<p><img style="float: right;" role="presentation" src="https://www.tiny.cloud/images/illustrations/spot/tiny/illustration-spot-tiny-images.svg" alt="TinyMCE demo image" width="316">Use TinyMCE as:</p>
<ul>
<li>A <strong>basic</strong> editor</li>
<li>An advanced \u{1F4DD} editor</li>
<li>An AI-powered \u{1FA84}\u2728 editor</li>
<li>A {{template-based}} editor</li>
<li>A totally <span class="highlight"><code>&lt;customized&gt;</code></span> editor</li>
<li>An equation \u2795 formula editor</li>
</ul>
<h2>Play with this demo to see how it works</h2>
<p><a class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" href="/tinymce/">Click here to edit</a></p>`, e = { content: s }, [r, a] = createSignal(e.content), i = (t) => {
  a(t), startTransition(() => {
    window.localStorage.setItem("content", t);
  });
}, l = () => {
  i(e.content);
}, c = () => [r, i, l];

const u = isServer ? (t) => {
  const e = getRequestEvent();
  return e.response.status = t.code, e.response.statusText = t.text, onCleanup(() => !e.nativeEvent.handled && !e.complete && (e.response.status = 200)), null;
} : (t) => null;

var Mr = Object.defineProperty;
var Ar = (e, t, n) => t in e ? Mr(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var J = (e, t, n) => (Ar(e, typeof t != "symbol" ? t + "" : t, n), n);
function go() {
  let e = /* @__PURE__ */ new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = false;
  function o(r, s) {
    if (n)
      return !(n = false);
    const i = { to: r, options: s, defaultPrevented: false, preventDefault: () => i.defaultPrevented = true };
    for (const a of e)
      a.listener({ ...i, from: a.location, retry: (c) => {
        c && (n = true), a.navigate(r, { ...s, resolve: false });
      } });
    return !i.defaultPrevented;
  }
  return { subscribe: t, confirm: o };
}
let Dt;
function Gt() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), Dt = window.history.state._depth;
}
isServer || Gt();
function ws(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function bs(e, t) {
  let n = false;
  return () => {
    const o = Dt;
    Gt();
    const r = o == null ? null : Dt - o;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const Ss = /^(?:[a-z0-9]+:)?\/\//i, xs = /^\/+|(\/)\/+$/g, mo = "http://sr";
function je(e, t = false) {
  const n = e.replace(xs, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function lt(e, t, n) {
  if (Ss.test(t))
    return;
  const o = je(e), r = n && je(n);
  let s = "";
  return !r || t.startsWith("/") ? s = o : r.toLowerCase().indexOf(o.toLowerCase()) !== 0 ? s = o + r : s = r, (s || "/") + je(t, !s);
}
function Es(e, t) {
  return je(e).replace(/\/*(\*.*)?$/g, "") + je(t);
}
function po(e) {
  const t = {};
  return e.searchParams.forEach((n, o) => {
    t[o] = n;
  }), t;
}
function Cs(e, t, n) {
  const [o, r] = e.split("/*", 2), s = o.split("/").filter(Boolean), i = s.length;
  return (a) => {
    const c = a.split("/").filter(Boolean), l = c.length - i;
    if (l < 0 || l > 0 && r === void 0 && !t)
      return null;
    const u = { path: i ? "" : "/", params: {} }, h = (g) => n === void 0 ? void 0 : n[g];
    for (let g = 0; g < i; g++) {
      const p = s[g], m = c[g], d = p[0] === ":", f = d ? p.slice(1) : p;
      if (d && Pt(m, h(f)))
        u.params[f] = m;
      else if (d || !Pt(m, p))
        return null;
      u.path += `/${m}`;
    }
    if (r) {
      const g = l ? c.slice(-l).join("/") : "";
      if (Pt(g, h(r)))
        u.params[r] = g;
      else
        return null;
    }
    return u;
  };
}
function Pt(e, t) {
  const n = (o) => o.localeCompare(e, void 0, { sensitivity: "base" }) === 0;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Ps(e) {
  const [t, n] = e.pattern.split("/*", 2), o = t.split("/").filter(Boolean);
  return o.reduce((r, s) => r + (s.startsWith(":") ? 2 : 3), o.length - (n === void 0 ? 0 : 1));
}
function yo(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(o, r) {
    return t.has(r) || runWithOwner(n, () => t.set(r, createMemo(() => e()[r]))), t.get(r)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function vo(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t)
    return [e];
  let n = e.slice(0, t.index), o = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(o); )
    r.push(n += t[1]), o = o.slice(t[0].length);
  return vo(o).reduce((s, i) => [...s, ...r.map((a) => a + i)], []);
}
const Ts = 100, Ms = createContext$1(), wo = createContext$1();
function As(e, t = "") {
  const { component: n, load: o, children: r, info: s } = e, i = !r || Array.isArray(r) && !r.length, a = { key: e, component: n, load: o, info: s };
  return bo(e.path).reduce((c, l) => {
    for (const u of vo(l)) {
      const h = Es(t, u);
      let g = i ? h : h.split("/*", 1)[0];
      g = g.split("/").map((p) => p.startsWith(":") || p.startsWith("*") ? p : encodeURIComponent(p)).join("/"), c.push({ ...a, originalPath: l, pattern: g, matcher: Cs(g, !i, e.matchFilters) });
    }
    return c;
  }, []);
}
function Os(e, t = 0) {
  return { routes: e, score: Ps(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const o = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const s = e[r], i = s.matcher(n);
      if (!i)
        return null;
      o.unshift({ ...i, route: s });
    }
    return o;
  } };
}
function bo(e) {
  return Array.isArray(e) ? e : [e];
}
function So(e, t = "", n = [], o = []) {
  const r = bo(e);
  for (let s = 0, i = r.length; s < i; s++) {
    const a = r[s];
    if (a && typeof a == "object") {
      a.hasOwnProperty("path") || (a.path = "");
      const c = As(a, t);
      for (const l of c) {
        n.push(l);
        const u = Array.isArray(a.children) && a.children.length === 0;
        if (a.children && !u)
          So(a.children, l.pattern, n, o);
        else {
          const h = Os([...n], o.length);
          o.push(h);
        }
        n.pop();
      }
    }
  }
  return n.length ? o : o.sort((s, i) => i.score - s.score);
}
function qe(e, t) {
  for (let n = 0, o = e.length; n < o; n++) {
    const r = e[n].matcher(t);
    if (r)
      return r;
  }
  return [];
}
function Ls(e, t) {
  const n = new URL(mo), o = createMemo((c) => {
    const l = e();
    try {
      return new URL(l, n);
    } catch {
      return console.error(`Invalid path ${l}`), c;
    }
  }, n, { equals: (c, l) => c.href === l.href }), r = createMemo(() => o().pathname), s = createMemo(() => o().search, true), i = createMemo(() => o().hash), a = () => "";
  return { get pathname() {
    return r();
  }, get search() {
    return s();
  }, get hash() {
    return i();
  }, get state() {
    return t();
  }, get key() {
    return a();
  }, query: yo(on$2(s, () => po(o()))) };
}
let me;
function Is() {
  return me;
}
function Rs(e, t, n, o = {}) {
  const { signal: [r, s], utils: i = {} } = e, a = i.parsePath || ((T) => T), c = i.renderPath || ((T) => T), l = i.beforeLeave || go(), u = lt("", o.base || "");
  if (u === void 0)
    throw new Error(`${u} is not a valid base path`);
  u && !r().value && s({ value: u, replace: true, scroll: false });
  const [h, g] = createSignal(false), p = async (T) => {
    g(true);
    try {
      await startTransition(T);
    } finally {
      g(false);
    }
  }, [m, d] = createSignal(r().value), [f, v] = createSignal(r().state), y = Ls(m, f), w = [], b = createSignal(isServer ? j() : []), P = createMemo(() => typeof o.transformUrl == "function" ? qe(t(), o.transformUrl(y.pathname)) : qe(t(), y.pathname)), C = yo(() => {
    const T = P(), O = {};
    for (let N = 0; N < T.length; N++)
      Object.assign(O, T[N].params);
    return O;
  }), E = { pattern: u, path: () => u, outlet: () => null, resolvePath(T) {
    return lt(u, T);
  } };
  return createRenderEffect(() => {
    const { value: T, state: O } = r();
    untrack(() => {
      p(() => {
        me = "native", T !== m() && d(T), v(O), resetErrorBoundaries(), b[1]([]);
      }).then(() => {
        me = void 0;
      });
    });
  }), { base: E, location: y, params: C, isRouting: h, renderPath: c, parsePath: a, navigatorFactory: M, matches: P, beforeLeave: l, preloadRoute: H, singleFlight: o.singleFlight === void 0 ? true : o.singleFlight, submissions: b };
  function L(T, O, N) {
    untrack(() => {
      if (typeof O == "number") {
        O && (i.go ? i.go(O) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const { replace: z, resolve: q, scroll: se, state: le } = { replace: false, resolve: true, scroll: true, ...N }, ne = q ? T.resolvePath(O) : lt("", O);
      if (ne === void 0)
        throw new Error(`Path '${O}' is not a routable path`);
      if (w.length >= Ts)
        throw new Error("Too many redirects");
      const tt = m();
      if (ne !== tt || le !== f()) {
        if (isServer) {
          const Le = getRequestEvent();
          Le && (Le.response = { status: 302, headers: new Headers({ Location: ne }) }), s({ value: ne, replace: z, scroll: se, state: le });
        } else if (l.confirm(ne, N)) {
          const Le = w.push({ value: tt, replace: z, scroll: se, state: f() });
          p(() => {
            me = "navigate", d(ne), v(le), resetErrorBoundaries(), b[1]([]);
          }).then(() => {
            w.length === Le && (me = void 0, te({ value: ne, state: le }));
          });
        }
      }
    });
  }
  function M(T) {
    return T = T || useContext(wo) || E, (O, N) => L(T, O, N);
  }
  function te(T) {
    const O = w[0];
    O && ((T.value !== O.value || T.state !== O.state) && s({ ...T, replace: O.replace, scroll: O.scroll }), w.length = 0);
  }
  function H(T, O) {
    const N = qe(t(), T.pathname), z = me;
    me = "preload";
    for (let q in N) {
      const { route: se, params: le } = N[q];
      se.component && se.component.preload && se.component.preload();
      const { load: ne } = se;
      O && ne && runWithOwner(n(), () => ne({ params: le, location: { pathname: T.pathname, search: T.search, hash: T.hash, query: po(T), state: null, key: "" }, intent: "preload" }));
    }
    me = z;
  }
  function j() {
    const T = getRequestEvent();
    return T && T.router && T.router.submission ? [T.router.submission] : [];
  }
}
function Ds(e, t, n, o) {
  const { base: r, location: s, params: i } = e, { pattern: a, component: c, load: l } = o().route, u = createMemo(() => o().path);
  c && c.preload && c.preload();
  const h = l ? l({ params: i, location: s, intent: me || "initial" }) : void 0;
  return { parent: t, pattern: a, path: u, outlet: () => c ? createComponent(c, { params: i, location: s, data: h, get children() {
    return n();
  } }) : n(), resolvePath(p) {
    return lt(r.path(), p, u());
  } };
}
const xo = (e) => (t) => {
  const { base: n } = t, o = children(() => t.children), r = createMemo(() => So(o(), t.base || ""));
  let s;
  const i = Rs(e, r, () => s, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(i), createComponent$1(Ms.Provider, { value: i, get children() {
    return createComponent$1(ks, { routerState: i, get root() {
      return t.root;
    }, get load() {
      return t.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Ks, { routerState: i, get branches() {
        return r();
      } })];
    } });
  } });
};
function ks(e) {
  const t = e.routerState.location, n = e.routerState.params, o = createMemo(() => e.load && untrack(() => {
    e.load({ params: n, location: t, intent: Is() || "initial" });
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (r) => createComponent$1(r, { params: n, location: t, get data() {
    return o();
  }, get children() {
    return e.children;
  } }) });
}
function Ks(e) {
  if (isServer) {
    const r = getRequestEvent();
    if (r && r.router && r.router.dataOnly) {
      Fs(r, e.routerState, e.branches);
      return;
    }
    r && ((r.router || (r.router = {})).matches || (r.router.matches = e.routerState.matches().map(({ route: s, path: i, params: a }) => ({ path: s.originalPath, pattern: s.pattern, match: i, params: a, info: s.info }))));
  }
  const t = [];
  let n;
  const o = createMemo(on$2(e.routerState.matches, (r, s, i) => {
    let a = s && r.length === s.length;
    const c = [];
    for (let l = 0, u = r.length; l < u; l++) {
      const h = s && s[l], g = r[l];
      i && h && g.route.key === h.route.key ? c[l] = i[l] : (a = false, t[l] && t[l](), createRoot((p) => {
        t[l] = p, c[l] = Ds(e.routerState, c[l - 1] || e.routerState.base, xn(() => o()[l + 1]), () => e.routerState.matches()[l]);
      }));
    }
    return t.splice(r.length).forEach((l) => l()), i && a ? i : (n = c[0], c);
  }));
  return xn(() => o() && n)();
}
const xn = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(wo.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function Fs(e, t, n) {
  const o = new URL(e.request.url), r = qe(n, new URL(e.router.previousUrl || e.request.url).pathname), s = qe(n, o.pathname);
  for (let i = 0; i < s.length; i++) {
    (!r[i] || s[i].route !== r[i].route) && (e.router.dataOnly = true);
    const { route: a, params: c } = s[i];
    a.load && a.load({ params: c, location: t.location, intent: "preload" });
  }
}
function Ns([e, t], n, o) {
  return [e, o ? (r) => t(o(r)) : t];
}
function $s(e) {
  if (e === "#")
    return null;
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function _s(e) {
  let t = false;
  const n = (r) => typeof r == "string" ? { value: r } : r, o = Ns(createSignal(n(e.get()), { equals: (r, s) => r.value === s.value && r.state === s.state }), void 0, (r) => (!t && e.set(r), r));
  return e.init && onCleanup(e.init((r = e.get()) => {
    t = true, o[1](n(r)), t = false;
  })), xo({ signal: o, create: e.create, utils: e.utils });
}
function Bs(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function Vs(e, t) {
  const n = $s(`#${e}`);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function Hs(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function Us(e) {
  let t;
  const n = e.url || (t = getRequestEvent()) && Hs(t.request.url) || "", o = { value: e.transformUrl ? e.transformUrl(n) : n };
  return xo({ signal: [() => o, (r) => Object.assign(o, r)] })(e);
}
const Ws = /* @__PURE__ */ new Map();
function zs(e = true, t = false, n = "/_server", o) {
  return (r) => {
    const s = r.base.path(), i = r.navigatorFactory(r.base);
    let a = {};
    function c(d) {
      return d.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(d) {
      if (d.defaultPrevented || d.button !== 0 || d.metaKey || d.altKey || d.ctrlKey || d.shiftKey)
        return;
      const f = d.composedPath().find((C) => C instanceof Node && C.nodeName.toUpperCase() === "A");
      if (!f || t && !f.hasAttribute("link"))
        return;
      const v = c(f), y = v ? f.href.baseVal : f.href;
      if ((v ? f.target.baseVal : f.target) || !y && !f.hasAttribute("state"))
        return;
      const b = (f.getAttribute("rel") || "").split(/\s+/);
      if (f.hasAttribute("download") || b && b.includes("external"))
        return;
      const P = v ? new URL(y, document.baseURI) : new URL(y);
      if (!(P.origin !== window.location.origin || s && P.pathname && !P.pathname.toLowerCase().startsWith(s.toLowerCase())))
        return [f, P];
    }
    function u(d) {
      const f = l(d);
      if (!f)
        return;
      const [v, y] = f, w = r.parsePath(y.pathname + y.search + y.hash), b = v.getAttribute("state");
      d.preventDefault(), i(w, { resolve: false, replace: v.hasAttribute("replace"), scroll: !v.hasAttribute("noscroll"), state: b && JSON.parse(b) });
    }
    function h(d) {
      const f = l(d);
      if (!f)
        return;
      const [v, y] = f;
      typeof o == "function" && (y.pathname = o(y.pathname)), a[y.pathname] || r.preloadRoute(y, v.getAttribute("preload") !== "false");
    }
    function g(d) {
      const f = l(d);
      if (!f)
        return;
      const [v, y] = f;
      typeof o == "function" && (y.pathname = o(y.pathname)), !a[y.pathname] && (a[y.pathname] = setTimeout(() => {
        r.preloadRoute(y, v.getAttribute("preload") !== "false"), delete a[y.pathname];
      }, 200));
    }
    function p(d) {
      const f = l(d);
      if (!f)
        return;
      const [, v] = f;
      typeof o == "function" && (v.pathname = o(v.pathname)), a[v.pathname] && (clearTimeout(a[v.pathname]), delete a[v.pathname]);
    }
    function m(d) {
      if (d.defaultPrevented)
        return;
      let f = d.submitter && d.submitter.hasAttribute("formaction") ? d.submitter.getAttribute("formaction") : d.target.getAttribute("action");
      if (!f)
        return;
      if (!f.startsWith("https://action/")) {
        const y = new URL(f, mo);
        if (f = r.parsePath(y.pathname + y.search), !f.startsWith(n))
          return;
      }
      if (d.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const v = Ws.get(f);
      if (v) {
        d.preventDefault();
        const y = new FormData(d.target);
        d.submitter && d.submitter.name && y.append(d.submitter.name, d.submitter.value), v.call({ r, f: d.target }, y);
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", u), e && (document.addEventListener("mouseover", g), document.addEventListener("mouseout", p), document.addEventListener("focusin", h), document.addEventListener("touchstart", h)), document.addEventListener("submit", m), onCleanup(() => {
      document.removeEventListener("click", u), e && (document.removeEventListener("mouseover", g), document.removeEventListener("mouseout", p), document.removeEventListener("focusin", h), document.removeEventListener("touchstart", h)), document.removeEventListener("submit", m);
    });
  };
}
function js(e) {
  if (isServer)
    return Us(e);
  const t = () => {
    const o = window.location.pathname + window.location.search;
    return { value: e.transformUrl ? e.transformUrl(o) + window.location.hash : o + window.location.hash, state: window.history.state };
  }, n = go();
  return _s({ get: t, set({ value: o, replace: r, scroll: s, state: i }) {
    r ? window.history.replaceState(ws(i), "", o) : window.history.pushState(i, "", o), Vs(window.location.hash.slice(1), s), Gt();
  }, init: (o) => Bs(window, "popstate", bs(o, (r) => {
    if (r && r < 0)
      return !n.confirm(r);
    {
      const s = t();
      return !n.confirm(s.value, { state: s.state });
    }
  })), create: zs(e.preload, e.explicitLinks, e.actionBase, e.transformUrl), utils: { go: (o) => window.history.go(o), beforeLeave: n } })(e);
}
var Gs = " ";
const Ys = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(Gs), true) : null };
function kt(e, t) {
  let { tag: n, attrs: { key: o, ...r } = { key: void 0 }, children: s } = e;
  return Ys[n]({ attrs: { ...r, nonce: t }, key: o, children: s });
}
function Xs(e, t, n, o = "default") {
  return lazy(async () => {
    var _a2;
    {
      const s = (await e.import())[o], a = (await ((_a2 = t.inputs) == null ? void 0 : _a2[e.src].assets())).filter((l) => l.tag === "style" || l.attrs.rel === "stylesheet");
      return { default: (l) => [...a.map((u) => kt(u)), createComponent(s, l)] };
    }
  });
}
const De = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function Js(e = {}) {
  const t = { options: e, rootNode: Eo(), staticRoutesMap: {} }, n = (o) => e.strictTrailingSlash ? o : o.replace(/\/$/, "") || "/";
  if (e.routes)
    for (const o in e.routes)
      En(t, n(o), e.routes[o]);
  return { ctx: t, lookup: (o) => Zs(t, n(o)), insert: (o, r) => En(t, n(o), r), remove: (o) => Qs(t, n(o)) };
}
function Zs(e, t) {
  const n = e.staticRoutesMap[t];
  if (n)
    return n.data;
  const o = t.split("/"), r = {};
  let s = false, i = null, a = e.rootNode, c = null;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a.wildcardChildNode !== null && (i = a.wildcardChildNode, c = o.slice(l).join("/"));
    const h = a.children.get(u);
    if (h === void 0) {
      if (a && a.placeholderChildren.length > 1) {
        const g = o.length - l;
        a = a.placeholderChildren.find((p) => p.maxDepth === g) || null;
      } else
        a = a.placeholderChildren[0] || null;
      if (!a)
        break;
      a.paramName && (r[a.paramName] = u), s = true;
    } else
      a = h;
  }
  return (a === null || a.data === null) && i !== null && (a = i, r[a.paramName || "_"] = c, s = true), a ? s ? { ...a.data, params: s ? r : void 0 } : a.data : null;
}
function En(e, t, n) {
  let o = true;
  const r = t.split("/");
  let s = e.rootNode, i = 0;
  const a = [s];
  for (const c of r) {
    let l;
    if (l = s.children.get(c))
      s = l;
    else {
      const u = ei(c);
      l = Eo({ type: u, parent: s }), s.children.set(c, l), u === De.PLACEHOLDER ? (l.paramName = c === "*" ? `_${i++}` : c.slice(1), s.placeholderChildren.push(l), o = false) : u === De.WILDCARD && (s.wildcardChildNode = l, l.paramName = c.slice(3) || "_", o = false), a.push(l), s = l;
    }
  }
  for (const [c, l] of a.entries())
    l.maxDepth = Math.max(a.length - c, l.maxDepth || 0);
  return s.data = n, o === true && (e.staticRoutesMap[t] = s), s;
}
function Qs(e, t) {
  let n = false;
  const o = t.split("/");
  let r = e.rootNode;
  for (const s of o)
    if (r = r.children.get(s), !r)
      return n;
  if (r.data) {
    const s = o.at(-1) || "";
    r.data = null, Object.keys(r.children).length === 0 && r.parent && (r.parent.children.delete(s), r.parent.wildcardChildNode = null, r.parent.placeholderChildren = []), n = true;
  }
  return n;
}
function Eo(e = {}) {
  return { type: e.type || De.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function ei(e) {
  return e.startsWith("**") ? De.WILDCARD : e[0] === ":" || e === "*" ? De.PLACEHOLDER : De.NORMAL;
}
throw new Error("Should be provided by compiler");
const Co = [], ti = ni(Co.filter((e) => e.page));
function ni(e) {
  function t(n, o, r, s) {
    const i = Object.values(n).find((a) => r.startsWith(a.id + "/"));
    return i ? (t(i.children || (i.children = []), o, r.slice(i.id.length)), n) : (n.push({ ...o, id: r, path: r.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), n);
  }
  return e.sort((n, o) => n.path.length - o.path.length).reduce((n, o) => t(n, o, o.path, o.path), []);
}
function oi(e, t) {
  const n = si.lookup(e);
  if (n && n.route) {
    const o = n.route[`$${t}`];
    return o === void 0 ? void 0 : { handler: o, params: n.params };
  }
}
function ri(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const si = Js({ routes: Co.reduce((e, t) => {
  if (!ri(t))
    return e;
  let n = t.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (o, r) => `**:${r}`);
  if (/:[^/]*\?/g.test(n))
    throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n])
    throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) });
function Po() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && Xs(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return ti.map(e);
}
let Cn;
const ii = isServer ? () => getRequestEvent().routes : () => Cn || (Cn = Po());
var ai = !isServer, ci = ai && !!DEV, x = (e) => typeof e == "function" && !e.length ? e() : e, Pn = (e) => Array.isArray(e) ? e : e ? [e] : [];
function li(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var ui = ci ? (e) => getOwner() ? onCleanup(e) : e : onCleanup;
function di(e, t, n, o) {
  return e.addEventListener(t, n, o), ui(e.removeEventListener.bind(e, t, n, o));
}
function fi(e, t, n, o) {
  if (isServer)
    return;
  const r = () => {
    Pn(x(e)).forEach((s) => {
      s && Pn(x(t)).forEach((i) => di(s, i, n, o));
    });
  };
  typeof e == "function" ? createEffect(r) : createRenderEffect(r);
}
function hi(e, t, n = -1) {
  return n in e ? [...e.slice(0, n), t, ...e.slice(n)] : [...e, t];
}
function Kt(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function gi(e) {
  return typeof e == "number";
}
function Ie(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function mi(e) {
  return typeof e == "function";
}
function Yt(e) {
  return (t) => `${e()}-${t}`;
}
function ue(e, t) {
  return e ? e === t || e.contains(t) : false;
}
function He(e, t = false) {
  const { activeElement: n } = fe(e);
  if (!(n == null ? void 0 : n.nodeName))
    return null;
  if (To(n) && n.contentDocument)
    return He(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = fe(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
function pi(e) {
  return fe(e).defaultView || window;
}
function fe(e) {
  return e ? e.ownerDocument || e : document;
}
function To(e) {
  return e.tagName === "IFRAME";
}
var Mo = ((e) => (e.Escape = "Escape", e.Enter = "Enter", e.Tab = "Tab", e.Space = " ", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.End = "End", e.Home = "Home", e.PageDown = "PageDown", e.PageUp = "PageUp", e))(Mo || {});
function W(e, t) {
  return t && (mi(t) ? t(e) : t[0](t[1], e)), e == null ? void 0 : e.defaultPrevented;
}
function U(e) {
  return (t) => {
    for (const n of e)
      W(t, n);
  };
}
function Si(e) {
  return e.ctrlKey && !e.metaKey;
}
function G(e) {
  if (e)
    if (xi())
      e.focus({ preventScroll: true });
    else {
      const t = Ei(e);
      e.focus(), Ci(t);
    }
}
var ot = null;
function xi() {
  if (ot == null) {
    ot = false;
    try {
      document.createElement("div").focus({ get preventScroll() {
        return ot = true, true;
      } });
    } catch {
    }
  }
  return ot;
}
function Ei(e) {
  let t = e.parentNode;
  const n = [], o = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== o; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }), t = t.parentNode;
  return o instanceof HTMLElement && n.push({ element: o, scrollTop: o.scrollTop, scrollLeft: o.scrollLeft }), n;
}
function Ci(e) {
  for (const { element: t, scrollTop: n, scrollLeft: o } of e)
    t.scrollTop = n, t.scrollLeft = o;
}
var Ao = ["input:not([type='hidden']):not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "[tabindex]", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]:not([contenteditable='false'])"], Pi = [...Ao, '[tabindex]:not([tabindex="-1"]):not([disabled])'], Jt = Ao.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])", Ti = Pi.join(':not([hidden]):not([tabindex="-1"]),');
function Oo(e, t) {
  const o = Array.from(e.querySelectorAll(Jt)).filter(Tn);
  return t && Tn(e) && o.unshift(e), o.forEach((r, s) => {
    if (To(r) && r.contentDocument) {
      const i = r.contentDocument.body, a = Oo(i, false);
      o.splice(s, 1, ...a);
    }
  }), o;
}
function Tn(e) {
  return Lo(e) && !Mi(e);
}
function Lo(e) {
  return e.matches(Jt) && Zt(e);
}
function Mi(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function Zt(e, t) {
  return e.nodeName !== "#comment" && Ai(e) && Oi(e, t) && (!e.parentElement || Zt(e.parentElement, e));
}
function Ai(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return false;
  const { display: t, visibility: n } = e.style;
  let o = t !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    if (!e.ownerDocument.defaultView)
      return o;
    const { getComputedStyle: r } = e.ownerDocument.defaultView, { display: s, visibility: i } = r(e);
    o = s !== "none" && i !== "hidden" && i !== "collapse";
  }
  return o;
}
function Oi(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : true);
}
function Li(e, t, n) {
  const o = (t == null ? void 0 : t.tabbable) ? Ti : Jt, r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode(s) {
    var _a2;
    return ((_a2 = t == null ? void 0 : t.from) == null ? void 0 : _a2.contains(s)) ? NodeFilter.FILTER_REJECT : s.matches(o) && Zt(s) && !n && (!(t == null ? void 0 : t.accept) || t.accept(s)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  return (t == null ? void 0 : t.from) && (r.currentNode = t.from), r;
}
function Mn(e) {
  for (; e && !Ii(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function Ii(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Ri() {
}
function Di(e, t) {
  const [n, o] = e;
  let r = false;
  const s = t.length;
  for (let i = s, a = 0, c = i - 1; a < i; c = a++) {
    const [l, u] = t[a], [h, g] = t[c], [, p] = t[c === 0 ? i - 1 : c - 1] || [0, 0], m = (u - g) * (n - l) - (l - h) * (o - u);
    if (g < u) {
      if (o >= g && o < u) {
        if (m === 0)
          return true;
        m > 0 && (o === g ? o > p && (r = !r) : r = !r);
      }
    } else if (u < g) {
      if (o > u && o <= g) {
        if (m === 0)
          return true;
        m < 0 && (o === g ? o < p && (r = !r) : r = !r);
      }
    } else if (o == u && (n >= h && n <= l || n >= l && n <= h))
      return true;
  }
  return r;
}
function _(e, t) {
  return mergeProps$1(e, t);
}
function Ft(e, t) {
  const n = Ln(e, t, "left"), o = Ln(e, t, "top"), r = t.offsetWidth, s = t.offsetHeight;
  let i = e.scrollLeft, a = e.scrollTop;
  const c = i + e.offsetWidth, l = a + e.offsetHeight;
  n <= i ? i = n : n + r > c && (i += n + r - c), o <= a ? a = o : o + s > l && (a += o + s - l), e.scrollLeft = i, e.scrollTop = a;
}
function Ln(e, t, n) {
  const o = n === "left" ? "offsetLeft" : "offsetTop";
  let r = 0;
  for (; t.offsetParent && (r += t[o], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      r -= e[o];
      break;
    }
    t = t.offsetParent;
  }
  return r;
}
function ki(e, t) {
  var _a2, _b;
  if (document.contains(e)) {
    const n = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(n).overflow === "hidden") {
      let r = Mn(e);
      for (; e && r && e !== n && r !== n; )
        Ft(r, e), e = r, r = Mn(e);
    } else {
      const { left: r, top: s } = e.getBoundingClientRect();
      (_a2 = e == null ? void 0 : e.scrollIntoView) == null ? void 0 : _a2.call(e, { block: "nearest" });
      const { left: i, top: a } = e.getBoundingClientRect();
      (Math.abs(r - i) > 1 || Math.abs(s - a) > 1) && ((_b = e.scrollIntoView) == null ? void 0 : _b.call(e, { block: "nearest" }));
    }
  }
}
var Ki = { border: "0", clip: "rect(0 0 0 0)", "clip-path": "inset(50%)", height: "1px", margin: "0 -1px -1px 0", overflow: "hidden", padding: "0", position: "absolute", width: "1px", "white-space": "nowrap" };
function yt(e) {
  var _a2;
  const [t, n] = createSignal((_a2 = e.defaultValue) == null ? void 0 : _a2.call(e)), o = createMemo(() => {
    var _a3;
    return ((_a3 = e.value) == null ? void 0 : _a3.call(e)) !== void 0;
  }), r = createMemo(() => {
    var _a3;
    return o() ? (_a3 = e.value) == null ? void 0 : _a3.call(e) : t();
  });
  return [r, (i) => {
    untrack(() => {
      var _a3;
      const a = li(i, r());
      return Object.is(a, r()) || (o() || n(a), (_a3 = e.onChange) == null ? void 0 : _a3.call(e, a)), a;
    });
  }];
}
function Io(e) {
  const [t, n] = yt(e);
  return [() => {
    var _a2;
    return (_a2 = t()) != null ? _a2 : false;
  }, n];
}
function Fi(e) {
  const [t, n] = yt(e);
  return [() => {
    var _a2;
    return (_a2 = t()) != null ? _a2 : [];
  }, n];
}
var Ro = createContext$1();
function Do() {
  return useContext(Ro);
}
function Ni() {
  const e = Do();
  if (e === void 0)
    throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
  return e;
}
function ko(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function $i(e, t) {
  var _a2;
  const n = t.ref();
  if (!n)
    return -1;
  let o = e.length;
  if (!o)
    return -1;
  for (; o--; ) {
    const r = (_a2 = e[o]) == null ? void 0 : _a2.ref();
    if (r && ko(r, n))
      return o + 1;
  }
  return 0;
}
function _i(e) {
  const t = e.map((o, r) => [r, o]);
  let n = false;
  return t.sort(([o, r], [s, i]) => {
    const a = r.ref(), c = i.ref();
    return a === c || !a || !c ? 0 : ko(a, c) ? (o > s && (n = true), -1) : (o < s && (n = true), 1);
  }), n ? t.map(([o, r]) => r) : e;
}
function Ko(e, t) {
  const n = _i(e);
  e !== n && t(n);
}
function Bi(e) {
  var _a2, _b;
  const t = e[0], n = (_a2 = e[e.length - 1]) == null ? void 0 : _a2.ref();
  let o = (_b = t == null ? void 0 : t.ref()) == null ? void 0 : _b.parentElement;
  for (; o; ) {
    if (n && o.contains(n))
      return o;
    o = o.parentElement;
  }
  return fe(o).body;
}
function Vi(e, t) {
  createEffect(() => {
    const n = setTimeout(() => {
      Ko(e(), t);
    });
    onCleanup(() => clearTimeout(n));
  });
}
function Hi(e, t) {
  if (typeof IntersectionObserver != "function") {
    Vi(e, t);
    return;
  }
  let n = [];
  createEffect(() => {
    const o = () => {
      const i = !!n.length;
      n = e(), i && Ko(e(), t);
    }, r = Bi(e()), s = new IntersectionObserver(o, { root: r });
    for (const i of e()) {
      const a = i.ref();
      a && s.observe(a);
    }
    onCleanup(() => s.disconnect());
  });
}
function Ui(e = {}) {
  const [t, n] = Fi({ value: () => x(e.items), onChange: (s) => {
    var _a2;
    return (_a2 = e.onItemsChange) == null ? void 0 : _a2.call(e, s);
  } });
  Hi(t, n);
  const o = (s) => (n((i) => {
    const a = $i(i, s);
    return hi(i, s, a);
  }), () => {
    n((i) => {
      const a = i.filter((c) => c.ref() !== s.ref());
      return i.length === a.length ? i : a;
    });
  });
  return { DomCollectionProvider: (s) => createComponent(Ro.Provider, { value: { registerItem: o }, get children() {
    return s.children;
  } }) };
}
function Wi(e) {
  const t = Ni(), n = _({ shouldRegisterItem: true }, e);
  createEffect(() => {
    if (!n.shouldRegisterItem)
      return;
    const o = t.registerItem(n.getItem());
    onCleanup(o);
  });
}
function Fo(e) {
  var _a2, _b, _c2;
  let t = (_a2 = e.startIndex) != null ? _a2 : 0;
  const n = (_b = e.startLevel) != null ? _b : 0, o = [], r = (c) => {
    var _a3;
    if (c == null)
      return "";
    const l = (_a3 = e.getKey) != null ? _a3 : "key", u = Ie(l) ? c[l] : l(c);
    return u != null ? String(u) : "";
  }, s = (c) => {
    var _a3;
    if (c == null)
      return "";
    const l = (_a3 = e.getTextValue) != null ? _a3 : "textValue", u = Ie(l) ? c[l] : l(c);
    return u != null ? String(u) : "";
  }, i = (c) => {
    var _a3, _b2;
    if (c == null)
      return false;
    const l = (_a3 = e.getDisabled) != null ? _a3 : "disabled";
    return (_b2 = Ie(l) ? c[l] : l(c)) != null ? _b2 : false;
  }, a = (c) => {
    var _a3;
    if (c != null)
      return Ie(e.getSectionChildren) ? c[e.getSectionChildren] : (_a3 = e.getSectionChildren) == null ? void 0 : _a3.call(e, c);
  };
  for (const c of e.dataSource) {
    if (Ie(c) || gi(c)) {
      o.push({ type: "item", rawValue: c, key: String(c), textValue: String(c), disabled: i(c), level: n, index: t }), t++;
      continue;
    }
    if (a(c) != null) {
      o.push({ type: "section", rawValue: c, key: "", textValue: "", disabled: false, level: n, index: t }), t++;
      const l = (_c2 = a(c)) != null ? _c2 : [];
      if (l.length > 0) {
        const u = Fo({ dataSource: l, getKey: e.getKey, getTextValue: e.getTextValue, getDisabled: e.getDisabled, getSectionChildren: e.getSectionChildren, startIndex: t, startLevel: n + 1 });
        o.push(...u), t += u.length;
      }
    } else
      o.push({ type: "item", rawValue: c, key: r(c), textValue: s(c), disabled: i(c), level: n, index: t }), t++;
  }
  return o;
}
function zi(e, t = []) {
  return createMemo(() => {
    const n = Fo({ dataSource: x(e.dataSource), getKey: x(e.getKey), getTextValue: x(e.getTextValue), getDisabled: x(e.getDisabled), getSectionChildren: x(e.getSectionChildren) });
    for (let o = 0; o < t.length; o++)
      t[o]();
    return e.factory(n);
  });
}
var ji = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), qi = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function Gi(e) {
  var _a2;
  if (Intl.Locale) {
    const n = (_a2 = new Intl.Locale(e).maximize().script) != null ? _a2 : "";
    return ji.has(n);
  }
  const t = e.split("-")[0];
  return qi.has(t);
}
function Yi(e) {
  return Gi(e) ? "rtl" : "ltr";
}
function No() {
  let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return { locale: e, direction: Yi(e) };
}
var Nt = No(), Ue = /* @__PURE__ */ new Set();
function In() {
  Nt = No();
  for (const e of Ue)
    e(Nt);
}
function Xi() {
  const e = { locale: "en-US", direction: "ltr" }, [t, n] = createSignal(Nt), o = createMemo(() => isServer ? e : t());
  return onMount(() => {
    Ue.size === 0 && window.addEventListener("languagechange", In), Ue.add(n), onCleanup(() => {
      Ue.delete(n), Ue.size === 0 && window.removeEventListener("languagechange", In);
    });
  }), { locale: () => o().locale, direction: () => o().direction };
}
var Ji = createContext$1();
function Ne() {
  const e = Xi();
  return useContext(Ji) || e;
}
var Tt = /* @__PURE__ */ new Map();
function Zi(e) {
  const { locale: t } = Ne(), n = createMemo(() => t() + (e ? Object.entries(e).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : ""));
  return createMemo(() => {
    const o = n();
    let r;
    return Tt.has(o) && (r = Tt.get(o)), r || (r = new Intl.Collator(t(), e), Tt.set(o, r)), r;
  });
}
var pe = class $o extends Set {
  constructor(n, o, r) {
    super(n);
    J(this, "anchorKey");
    J(this, "currentKey");
    n instanceof $o ? (this.anchorKey = o || n.anchorKey, this.currentKey = r || n.currentKey) : (this.anchorKey = o, this.currentKey = r);
  }
};
function Qi(e) {
  const [t, n] = yt(e);
  return [() => {
    var _a2;
    return (_a2 = t()) != null ? _a2 : new pe();
  }, n];
}
function _o(e) {
  return e.ctrlKey;
}
function Re(e) {
  return e.ctrlKey;
}
function Rn(e) {
  return new pe(e);
}
function ea(e, t) {
  if (e.size !== t.size)
    return false;
  for (const n of e)
    if (!t.has(n))
      return false;
  return true;
}
function ta(e) {
  const t = _({ selectionMode: "none", selectionBehavior: "toggle" }, e), [n, o] = createSignal(false), [r, s] = createSignal(), i = createMemo(() => {
    const d = x(t.selectedKeys);
    return d != null ? Rn(d) : d;
  }), a = createMemo(() => {
    const d = x(t.defaultSelectedKeys);
    return d != null ? Rn(d) : new pe();
  }), [c, l] = Qi({ value: i, defaultValue: a, onChange: (d) => {
    var _a2;
    return (_a2 = t.onSelectionChange) == null ? void 0 : _a2.call(t, d);
  } }), [u, h] = createSignal(x(t.selectionBehavior)), g = () => x(t.selectionMode), p = () => {
    var _a2;
    return (_a2 = x(t.disallowEmptySelection)) != null ? _a2 : false;
  }, m = (d) => {
    (x(t.allowDuplicateSelectionEvents) || !ea(d, c())) && l(d);
  };
  return createEffect(() => {
    const d = c();
    x(t.selectionBehavior) === "replace" && u() === "toggle" && typeof d == "object" && d.size === 0 && h("replace");
  }), createEffect(() => {
    var _a2;
    h((_a2 = x(t.selectionBehavior)) != null ? _a2 : "toggle");
  }), { selectionMode: g, disallowEmptySelection: p, selectionBehavior: u, setSelectionBehavior: h, isFocused: n, setFocused: o, focusedKey: r, setFocusedKey: s, selectedKeys: c, setSelectedKeys: m };
}
function na(e) {
  const [t, n] = createSignal(""), [o, r] = createSignal(-1);
  return { typeSelectHandlers: { onKeyDown: (i) => {
    var _a2, _b, _c2;
    if (x(e.isDisabled))
      return;
    const a = x(e.keyboardDelegate), c = x(e.selectionManager);
    if (!a.getKeyForSearch)
      return;
    const l = oa(i.key);
    if (!l || i.ctrlKey || i.metaKey)
      return;
    l === " " && t().trim().length > 0 && (i.preventDefault(), i.stopPropagation());
    let u = n((g) => g + l), h = (_a2 = a.getKeyForSearch(u, c.focusedKey())) != null ? _a2 : a.getKeyForSearch(u);
    h == null && ra(u) && (u = u[0], h = (_b = a.getKeyForSearch(u, c.focusedKey())) != null ? _b : a.getKeyForSearch(u)), h != null && (c.setFocusedKey(h), (_c2 = e.onTypeSelect) == null ? void 0 : _c2.call(e, h)), clearTimeout(o()), r(window.setTimeout(() => n(""), 500));
  } } };
}
function oa(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function ra(e) {
  return e.split("").every((t) => t === e[0]);
}
function sa(e, t, n) {
  const r = mergeProps$1({ selectOnFocus: () => x(e.selectionManager).selectionBehavior() === "replace" }, e), s = () => t(), { direction: i } = Ne();
  let a = { top: 0, left: 0 };
  fi(() => x(r.isVirtualized) ? void 0 : s(), "scroll", () => {
    const d = s();
    d && (a = { top: d.scrollTop, left: d.scrollLeft });
  });
  const { typeSelectHandlers: c } = na({ isDisabled: () => x(r.disallowTypeAhead), keyboardDelegate: () => x(r.keyboardDelegate), selectionManager: () => x(r.selectionManager) }), l = (d) => {
    var _a2, _b, _c2, _d, _e2, _f, _g, _h;
    W(d, c.onKeyDown), d.altKey && d.key === "Tab" && d.preventDefault();
    const f = t();
    if (!(f == null ? void 0 : f.contains(d.target)))
      return;
    const v = x(r.selectionManager), y = x(r.selectOnFocus), w = (E) => {
      E != null && (v.setFocusedKey(E), d.shiftKey && v.selectionMode() === "multiple" ? v.extendSelection(E) : y && !_o(d) && v.replaceSelection(E));
    }, b = x(r.keyboardDelegate), P = x(r.shouldFocusWrap), C = v.focusedKey();
    switch (d.key) {
      case "ArrowDown": {
        if (b.getKeyBelow) {
          d.preventDefault();
          let E;
          C != null ? E = b.getKeyBelow(C) : E = (_a2 = b.getFirstKey) == null ? void 0 : _a2.call(b), E == null && P && (E = (_b = b.getFirstKey) == null ? void 0 : _b.call(b, C)), w(E);
        }
        break;
      }
      case "ArrowUp": {
        if (b.getKeyAbove) {
          d.preventDefault();
          let E;
          C != null ? E = b.getKeyAbove(C) : E = (_c2 = b.getLastKey) == null ? void 0 : _c2.call(b), E == null && P && (E = (_d = b.getLastKey) == null ? void 0 : _d.call(b, C)), w(E);
        }
        break;
      }
      case "ArrowLeft": {
        if (b.getKeyLeftOf) {
          d.preventDefault();
          const E = i() === "rtl";
          let L;
          C != null ? L = b.getKeyLeftOf(C) : L = E ? (_e2 = b.getFirstKey) == null ? void 0 : _e2.call(b) : (_f = b.getLastKey) == null ? void 0 : _f.call(b), w(L);
        }
        break;
      }
      case "ArrowRight": {
        if (b.getKeyRightOf) {
          d.preventDefault();
          const E = i() === "rtl";
          let L;
          C != null ? L = b.getKeyRightOf(C) : L = E ? (_g = b.getLastKey) == null ? void 0 : _g.call(b) : (_h = b.getFirstKey) == null ? void 0 : _h.call(b), w(L);
        }
        break;
      }
      case "Home":
        if (b.getFirstKey) {
          d.preventDefault();
          const E = b.getFirstKey(C, Re(d));
          E != null && (v.setFocusedKey(E), Re(d) && d.shiftKey && v.selectionMode() === "multiple" ? v.extendSelection(E) : y && v.replaceSelection(E));
        }
        break;
      case "End":
        if (b.getLastKey) {
          d.preventDefault();
          const E = b.getLastKey(C, Re(d));
          E != null && (v.setFocusedKey(E), Re(d) && d.shiftKey && v.selectionMode() === "multiple" ? v.extendSelection(E) : y && v.replaceSelection(E));
        }
        break;
      case "PageDown":
        if (b.getKeyPageBelow && C != null) {
          d.preventDefault();
          const E = b.getKeyPageBelow(C);
          w(E);
        }
        break;
      case "PageUp":
        if (b.getKeyPageAbove && C != null) {
          d.preventDefault();
          const E = b.getKeyPageAbove(C);
          w(E);
        }
        break;
      case "a":
        Re(d) && v.selectionMode() === "multiple" && x(r.disallowSelectAll) !== true && (d.preventDefault(), v.selectAll());
        break;
      case "Escape":
        d.defaultPrevented || (d.preventDefault(), x(r.disallowEmptySelection) || v.clearSelection());
        break;
      case "Tab":
        if (!x(r.allowsTabNavigation)) {
          if (d.shiftKey)
            f.focus();
          else {
            const E = Li(f, { tabbable: true });
            let L, M;
            do
              M = E.lastChild(), M && (L = M);
            while (M);
            L && !L.contains(document.activeElement) && G(L);
          }
          break;
        }
    }
  }, u = (d) => {
    var _a2, _b, _c2, _d;
    const f = x(r.selectionManager), v = x(r.keyboardDelegate), y = x(r.selectOnFocus);
    if (f.isFocused()) {
      d.currentTarget.contains(d.target) || f.setFocused(false);
      return;
    }
    if (d.currentTarget.contains(d.target)) {
      if (f.setFocused(true), f.focusedKey() == null) {
        const w = (P) => {
          P != null && (f.setFocusedKey(P), y && f.replaceSelection(P));
        }, b = d.relatedTarget;
        b && d.currentTarget.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? w((_b = f.lastSelectedKey()) != null ? _b : (_a2 = v.getLastKey) == null ? void 0 : _a2.call(v)) : w((_d = f.firstSelectedKey()) != null ? _d : (_c2 = v.getFirstKey) == null ? void 0 : _c2.call(v));
      } else if (!x(r.isVirtualized)) {
        const w = s();
        if (w) {
          w.scrollTop = a.top, w.scrollLeft = a.left;
          const b = w.querySelector(`[data-key="${f.focusedKey()}"]`);
          b && (G(b), Ft(w, b));
        }
      }
    }
  }, h = (d) => {
    const f = x(r.selectionManager);
    d.currentTarget.contains(d.relatedTarget) || f.setFocused(false);
  }, g = (d) => {
    s() === d.target && d.preventDefault();
  }, p = () => {
    var _a2, _b;
    const d = x(r.autoFocus);
    if (!d)
      return;
    const f = x(r.selectionManager), v = x(r.keyboardDelegate);
    let y;
    d === "first" && (y = (_a2 = v.getFirstKey) == null ? void 0 : _a2.call(v)), d === "last" && (y = (_b = v.getLastKey) == null ? void 0 : _b.call(v));
    const w = f.selectedKeys();
    w.size && (y = w.values().next().value), f.setFocused(true), f.setFocusedKey(y);
    const b = t();
    b && y == null && !x(r.shouldUseVirtualFocus) && G(b);
  };
  return onMount(() => {
    r.deferAutoFocus ? setTimeout(p, 0) : p();
  }), createEffect(on$2([s, () => x(r.isVirtualized), () => x(r.selectionManager).focusedKey()], (d) => {
    var _a2;
    const [f, v, y] = d;
    if (v)
      y && ((_a2 = r.scrollToKey) == null ? void 0 : _a2.call(r, y));
    else if (y && f) {
      const w = f.querySelector(`[data-key="${y}"]`);
      w && Ft(f, w);
    }
  })), { tabIndex: createMemo(() => {
    if (!x(r.shouldUseVirtualFocus))
      return x(r.selectionManager).focusedKey() == null ? 0 : -1;
  }), onKeyDown: l, onMouseDown: g, onFocusIn: u, onFocusOut: h };
}
function Bo(e, t) {
  const n = () => x(e.selectionManager), o = () => x(e.key), r = () => x(e.shouldUseVirtualFocus), s = (y) => {
    n().selectionMode() !== "none" && (n().selectionMode() === "single" ? n().isSelected(o()) && !n().disallowEmptySelection() ? n().toggleSelection(o()) : n().replaceSelection(o()) : (y == null ? void 0 : y.shiftKey) ? n().extendSelection(o()) : n().selectionBehavior() === "toggle" || Re(y) || "pointerType" in y && y.pointerType === "touch" ? n().toggleSelection(o()) : n().replaceSelection(o()));
  }, i = () => n().isSelected(o()), a = () => x(e.disabled) || n().isDisabled(o()), c = () => !a() && n().canSelectItem(o());
  let l = null;
  const u = (y) => {
    c() && (l = y.pointerType, y.pointerType === "mouse" && y.button === 0 && !x(e.shouldSelectOnPressUp) && s(y));
  }, h = (y) => {
    c() && y.pointerType === "mouse" && y.button === 0 && x(e.shouldSelectOnPressUp) && x(e.allowsDifferentPressOrigin) && s(y);
  }, g = (y) => {
    c() && (x(e.shouldSelectOnPressUp) && !x(e.allowsDifferentPressOrigin) || l !== "mouse") && s(y);
  }, p = (y) => {
    !c() || !["Enter", " "].includes(y.key) || (_o(y) ? n().toggleSelection(o()) : s(y));
  }, m = (y) => {
    a() && y.preventDefault();
  }, d = (y) => {
    const w = t();
    r() || a() || !w || y.target === w && n().setFocusedKey(o());
  }, f = createMemo(() => {
    if (!(r() || a()))
      return o() === n().focusedKey() ? 0 : -1;
  }), v = createMemo(() => x(e.virtualized) ? void 0 : o());
  return createEffect(on$2([t, o, r, () => n().focusedKey(), () => n().isFocused()], ([y, w, b, P, C]) => {
    y && w === P && C && !b && document.activeElement !== y && (e.focus ? e.focus() : G(y));
  })), { isSelected: i, isDisabled: a, allowsSelection: c, tabIndex: f, dataKey: v, onPointerDown: u, onPointerUp: h, onClick: g, onKeyDown: p, onMouseDown: m, onFocus: d };
}
var ia = class {
  constructor(e, t) {
    J(this, "collection");
    J(this, "state");
    this.collection = e, this.state = t;
  }
  selectionMode() {
    return this.state.selectionMode();
  }
  disallowEmptySelection() {
    return this.state.disallowEmptySelection();
  }
  selectionBehavior() {
    return this.state.selectionBehavior();
  }
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  isFocused() {
    return this.state.isFocused();
  }
  setFocused(e) {
    this.state.setFocused(e);
  }
  focusedKey() {
    return this.state.focusedKey();
  }
  setFocusedKey(e) {
    (e == null || this.collection().getItem(e)) && this.state.setFocusedKey(e);
  }
  selectedKeys() {
    return this.state.selectedKeys();
  }
  isSelected(e) {
    if (this.state.selectionMode() === "none")
      return false;
    const t = this.getKey(e);
    return t == null ? false : this.state.selectedKeys().has(t);
  }
  isEmpty() {
    return this.state.selectedKeys().size === 0;
  }
  isSelectAll() {
    if (this.isEmpty())
      return false;
    const e = this.state.selectedKeys();
    return this.getAllSelectableKeys().every((t) => e.has(t));
  }
  firstSelectedKey() {
    let e;
    for (const t of this.state.selectedKeys()) {
      const n = this.collection().getItem(t), o = (n == null ? void 0 : n.index) != null && (e == null ? void 0 : e.index) != null && n.index < e.index;
      (!e || o) && (e = n);
    }
    return e == null ? void 0 : e.key;
  }
  lastSelectedKey() {
    let e;
    for (const t of this.state.selectedKeys()) {
      const n = this.collection().getItem(t), o = (n == null ? void 0 : n.index) != null && (e == null ? void 0 : e.index) != null && n.index > e.index;
      (!e || o) && (e = n);
    }
    return e == null ? void 0 : e.key;
  }
  extendSelection(e) {
    if (this.selectionMode() === "none")
      return;
    if (this.selectionMode() === "single") {
      this.replaceSelection(e);
      return;
    }
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = this.state.selectedKeys(), o = n.anchorKey || t, r = new pe(n, o, t);
    for (const s of this.getKeyRange(o, n.currentKey || t))
      r.delete(s);
    for (const s of this.getKeyRange(t, o))
      this.canSelectItem(s) && r.add(s);
    this.state.setSelectedKeys(r);
  }
  getKeyRange(e, t) {
    const n = this.collection().getItem(e), o = this.collection().getItem(t);
    return n && o ? n.index != null && o.index != null && n.index <= o.index ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
  }
  getKeyRangeInternal(e, t) {
    const n = [];
    let o = e;
    for (; o != null; ) {
      const r = this.collection().getItem(o);
      if (r && r.type === "item" && n.push(o), o === t)
        return n;
      o = this.collection().getKeyAfter(o);
    }
    return [];
  }
  getKey(e) {
    const t = this.collection().getItem(e);
    return t ? !t || t.type !== "item" ? null : t.key : e;
  }
  toggleSelection(e) {
    if (this.selectionMode() === "none")
      return;
    if (this.selectionMode() === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = new pe(this.state.selectedKeys());
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection() && n.size === 0) && this.state.setSelectedKeys(n);
  }
  replaceSelection(e) {
    if (this.selectionMode() === "none")
      return;
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = this.canSelectItem(t) ? new pe([t], t, t) : new pe();
    this.state.setSelectedKeys(n);
  }
  setSelectedKeys(e) {
    if (this.selectionMode() === "none")
      return;
    const t = new pe();
    for (const n of e) {
      const o = this.getKey(n);
      if (o != null && (t.add(o), this.selectionMode() === "single"))
        break;
    }
    this.state.setSelectedKeys(t);
  }
  selectAll() {
    this.selectionMode() === "multiple" && this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
  }
  clearSelection() {
    const e = this.state.selectedKeys();
    !this.disallowEmptySelection() && e.size > 0 && this.state.setSelectedKeys(new pe());
  }
  toggleSelectAll() {
    this.isSelectAll() ? this.clearSelection() : this.selectAll();
  }
  select(e, t) {
    this.selectionMode() !== "none" && (this.selectionMode() === "single" ? this.isSelected(e) && !this.disallowEmptySelection() ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior() === "toggle" || t && t.pointerType === "touch" ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys())
      return true;
    const t = this.selectedKeys();
    if (e.size !== t.size)
      return false;
    for (const n of e)
      if (!t.has(n))
        return false;
    for (const n of t)
      if (!e.has(n))
        return false;
    return true;
  }
  canSelectItem(e) {
    if (this.state.selectionMode() === "none")
      return false;
    const t = this.collection().getItem(e);
    return t != null && !t.disabled;
  }
  isDisabled(e) {
    const t = this.collection().getItem(e);
    return !t || t.disabled;
  }
  getAllSelectableKeys() {
    const e = [];
    return ((n) => {
      for (; n != null; ) {
        if (this.canSelectItem(n)) {
          const o = this.collection().getItem(n);
          if (!o)
            continue;
          o.type === "item" && e.push(n);
        }
        n = this.collection().getKeyAfter(n);
      }
    })(this.collection().getFirstKey()), e;
  }
}, Dn = class {
  constructor(e) {
    J(this, "keyMap", /* @__PURE__ */ new Map());
    J(this, "iterable");
    J(this, "firstKey");
    J(this, "lastKey");
    this.iterable = e;
    for (const o of e)
      this.keyMap.set(o.key, o);
    if (this.keyMap.size === 0)
      return;
    let t, n = 0;
    for (const [o, r] of this.keyMap)
      t ? (t.nextKey = o, r.prevKey = t.key) : (this.firstKey = o, r.prevKey = void 0), r.type === "item" && (r.index = n++), t = r, t.nextKey = void 0;
    this.lastKey = t.key;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  getSize() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    var _a2;
    return (_a2 = this.keyMap.get(e)) == null ? void 0 : _a2.prevKey;
  }
  getKeyAfter(e) {
    var _a2;
    return (_a2 = this.keyMap.get(e)) == null ? void 0 : _a2.nextKey;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [...this.getKeys()];
    return this.getItem(t[e]);
  }
};
function aa(e) {
  const t = ta(e), o = zi({ dataSource: () => x(e.dataSource), getKey: () => x(e.getKey), getTextValue: () => x(e.getTextValue), getDisabled: () => x(e.getDisabled), getSectionChildren: () => x(e.getSectionChildren), factory: (s) => e.filter ? new Dn(e.filter(s)) : new Dn(s) }, [() => e.filter]), r = new ia(o, t);
  return createComputed(() => {
    const s = t.focusedKey();
    s != null && !o().getItem(s) && t.setFocusedKey(void 0);
  }), { collection: o, selectionManager: () => r };
}
function ca(e) {
  const [t, n] = createSignal();
  let o = {}, r = e(), s = "none";
  const [i, a] = la(e() ? "mounted" : "unmounted", { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return createEffect(on$2(i, (c) => {
    const l = rt(o);
    s = c === "mounted" ? l : "none";
  })), createEffect(on$2(e, (c) => {
    if (r === c)
      return;
    const l = rt(o);
    c ? a("MOUNT") : (o == null ? void 0 : o.display) === "none" ? a("UNMOUNT") : a(r && s !== l ? "ANIMATION_OUT" : "UNMOUNT"), r = c;
  })), createEffect(on$2(t, (c) => {
    if (c) {
      const l = (h) => {
        const p = rt(o).includes(h.animationName);
        h.target === c && p && a("ANIMATION_END");
      }, u = (h) => {
        h.target === c && (s = rt(o));
      };
      c.addEventListener("animationstart", u), c.addEventListener("animationcancel", l), c.addEventListener("animationend", l), onCleanup(() => {
        c.removeEventListener("animationstart", u), c.removeEventListener("animationcancel", l), c.removeEventListener("animationend", l);
      });
    } else
      a("ANIMATION_END");
  })), { isPresent: () => ["mounted", "unmountSuspended"].includes(i()), setRef: (c) => {
    c && (o = getComputedStyle(c)), n(c);
  } };
}
function rt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function la(e, t) {
  const n = (i, a) => {
    var _a2;
    return (_a2 = t[i][a]) != null ? _a2 : i;
  }, [o, r] = createSignal(e);
  return [o, (i) => {
    r((a) => n(a, i));
  }];
}
function ee(e) {
  const [t, n] = splitProps(e, ["as"]);
  if (!t.as)
    throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
  return createComponent$1(Dynamic, mergeProps({ get component() {
    return t.as;
  } }, n));
}
function Ye(e) {
  return (t) => (e(t), () => e(void 0));
}
function en(e, t) {
  const [n, o] = createSignal(kn(t == null ? void 0 : t()));
  return createEffect(() => {
    var _a2;
    o(((_a2 = e()) == null ? void 0 : _a2.tagName.toLowerCase()) || kn(t == null ? void 0 : t()));
  }), n;
}
function kn(e) {
  return Ie(e) ? e : void 0;
}
var dt = "data-kb-top-layer", Vo, $t = false, ve = [];
function Xe(e) {
  return ve.findIndex((t) => t.node === e);
}
function da(e) {
  return ve[Xe(e)];
}
function fa(e) {
  return ve[ve.length - 1].node === e;
}
function Ho() {
  return ve.filter((e) => e.isPointerBlocking);
}
function ha() {
  return [...Ho()].slice(-1)[0];
}
function tn() {
  return Ho().length > 0;
}
function Uo(e) {
  var _a2;
  const t = Xe((_a2 = ha()) == null ? void 0 : _a2.node);
  return Xe(e) < t;
}
function ga(e) {
  ve.push(e);
}
function ma(e) {
  const t = Xe(e);
  t < 0 || ve.splice(t, 1);
}
function pa() {
  for (const { node: e } of ve)
    e.style.pointerEvents = Uo(e) ? "none" : "auto";
}
function ya(e) {
  if (tn() && !$t) {
    const t = fe(e);
    Vo = document.body.style.pointerEvents, t.body.style.pointerEvents = "none", $t = true;
  }
}
function va(e) {
  if (tn())
    return;
  const t = fe(e);
  t.body.style.pointerEvents = Vo, t.body.style.length === 0 && t.body.removeAttribute("style"), $t = false;
}
var st = { layers: ve, isTopMostLayer: fa, hasPointerBlockingLayer: tn, isBelowPointerBlockingLayer: Uo, addLayer: ga, removeLayer: ma, indexOf: Xe, find: da, assignPointerEventToLayers: pa, disableBodyPointerEvents: ya, restoreBodyPointerEvents: va };
var ba = ["button", "color", "file", "image", "reset", "submit"];
function Sa(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? true : t === "input" && e.type ? ba.indexOf(e.type) !== -1 : false;
}
function vt(e) {
  let t;
  const n = _({ type: "button" }, e), [o, r] = splitProps(n, ["ref", "type", "disabled"]), s = en(() => t, () => "button"), i = createMemo(() => {
    const l = s();
    return l == null ? false : Sa({ tagName: l, type: o.type });
  }), a = createMemo(() => s() === "input"), c = createMemo(() => s() === "a" && (void 0 ) != null);
  return createComponent$1(ee, mergeProps({ as: "button", get type() {
    return i() || a() ? o.type : void 0;
  }, get role() {
    return !i() && !c() ? "button" : void 0;
  }, get tabIndex() {
    return !i() && !c() && !o.disabled ? 0 : void 0;
  }, get disabled() {
    return i() || a() ? o.disabled : void 0;
  }, get "aria-disabled"() {
    return !i() && !a() && o.disabled ? true : void 0;
  }, get "data-disabled"() {
    return o.disabled ? "" : void 0;
  } }, r));
}
const Ca = ["top", "right", "bottom", "left"], de = Math.min, Z = Math.max, ft = Math.round, it = Math.floor, xe = (e) => ({ x: e, y: e }), Pa = { left: "right", right: "left", bottom: "top", top: "bottom" }, Ta = { start: "end", end: "start" };
function _t(e, t, n) {
  return Z(e, de(t, n));
}
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ee(e) {
  return e.split("-")[0];
}
function $e(e) {
  return e.split("-")[1];
}
function Wo(e) {
  return e === "x" ? "y" : "x";
}
function nn(e) {
  return e === "y" ? "height" : "width";
}
function Qe(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "y" : "x";
}
function on(e) {
  return Wo(Qe(e));
}
function Ma(e, t, n) {
  n === void 0 && (n = false);
  const o = $e(e), r = on(e), s = nn(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ht(i)), [i, ht(i)];
}
function Aa(e) {
  const t = ht(e);
  return [Bt(e), t, Bt(t)];
}
function Bt(e) {
  return e.replace(/start|end/g, (t) => Ta[t]);
}
function Oa(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function La(e, t, n, o) {
  const r = $e(e);
  let s = Oa(Ee(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Bt)))), s;
}
function ht(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Pa[t]);
}
function Ia(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function zo(e) {
  return typeof e != "number" ? Ia(e) : { top: e, right: e, bottom: e, left: e };
}
function gt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function Kn(e, t, n) {
  let { reference: o, floating: r } = e;
  const s = Qe(t), i = on(t), a = nn(i), c = Ee(t), l = s === "y", u = o.x + o.width / 2 - r.width / 2, h = o.y + o.height / 2 - r.height / 2, g = o[a] / 2 - r[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: u, y: o.y - r.height };
      break;
    case "bottom":
      p = { x: u, y: o.y + o.height };
      break;
    case "right":
      p = { x: o.x + o.width, y: h };
      break;
    case "left":
      p = { x: o.x - r.width, y: h };
      break;
    default:
      p = { x: o.x, y: o.y };
  }
  switch ($e(t)) {
    case "start":
      p[i] -= g * (n && l ? -1 : 1);
      break;
    case "end":
      p[i] += g * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Ra = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: s = [], platform: i } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: r }), { x: u, y: h } = Kn(l, o, c), g = o, p = {}, m = 0;
  for (let d = 0; d < a.length; d++) {
    const { name: f, fn: v } = a[d], { x: y, y: w, data: b, reset: P } = await v({ x: u, y: h, initialPlacement: o, placement: g, strategy: r, middlewareData: p, rects: l, platform: i, elements: { reference: e, floating: t } });
    u = y != null ? y : u, h = w != null ? w : h, p = { ...p, [f]: { ...p[f], ...b } }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (g = P.placement), P.rects && (l = P.rects === true ? await i.getElementRects({ reference: e, floating: t, strategy: r }) : P.rects), { x: u, y: h } = Kn(l, g, c)), d = -1);
  }
  return { x: u, y: h, placement: g, strategy: r, middlewareData: p };
};
async function Je(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: s, rects: i, elements: a, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: h = "floating", altBoundary: g = false, padding: p = 0 } = Oe(t, e), m = zo(p), f = a[g ? h === "floating" ? "reference" : "floating" : h], v = gt(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(f))) == null || n ? f : f.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)), boundary: l, rootBoundary: u, strategy: c })), y = h === "floating" ? { x: o, y: r, width: i.floating.width, height: i.floating.height } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || { x: 1, y: 1 } : { x: 1, y: 1 }, P = gt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: y, offsetParent: w, strategy: c }) : y);
  return { top: (v.top - P.top + m.top) / b.y, bottom: (P.bottom - v.bottom + m.bottom) / b.y, left: (v.left - P.left + m.left) / b.x, right: (P.right - v.right + m.right) / b.x };
}
const Da = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: o, placement: r, rects: s, platform: i, elements: a, middlewareData: c } = t, { element: l, padding: u = 0 } = Oe(e, t) || {};
  if (l == null)
    return {};
  const h = zo(u), g = { x: n, y: o }, p = on(r), m = nn(p), d = await i.getDimensions(l), f = p === "y", v = f ? "top" : "left", y = f ? "bottom" : "right", w = f ? "clientHeight" : "clientWidth", b = s.reference[m] + s.reference[p] - g[p] - s.floating[m], P = g[p] - s.reference[p], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
  let E = C ? C[w] : 0;
  (!E || !await (i.isElement == null ? void 0 : i.isElement(C))) && (E = a.floating[w] || s.floating[m]);
  const L = b / 2 - P / 2, M = E / 2 - d[m] / 2 - 1, te = de(h[v], M), H = de(h[y], M), j = te, T = E - d[m] - H, O = E / 2 - d[m] / 2 + L, N = _t(j, O, T), z = !c.arrow && $e(r) != null && O !== N && s.reference[m] / 2 - (O < j ? te : H) - d[m] / 2 < 0, q = z ? O < j ? O - j : O - T : 0;
  return { [p]: g[p] + q, data: { [p]: N, centerOffset: O - N - q, ...z && { alignmentOffset: q } }, reset: z };
} }), ka = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, o;
    const { placement: r, middlewareData: s, rects: i, initialPlacement: a, platform: c, elements: l } = t, { mainAxis: u = true, crossAxis: h = true, fallbackPlacements: g, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: d = true, ...f } = Oe(e, t);
    if ((n = s.arrow) != null && n.alignmentOffset)
      return {};
    const v = Ee(r), y = Ee(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), b = g || (y || !d ? [ht(a)] : Aa(a));
    !g && m !== "none" && b.push(...La(a, d, m, w));
    const P = [a, ...b], C = await Je(t, f), E = [];
    let L = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (u && E.push(C[v]), h) {
      const j = Ma(r, i, w);
      E.push(C[j[0]], C[j[1]]);
    }
    if (L = [...L, { placement: r, overflows: E }], !E.every((j) => j <= 0)) {
      var M, te;
      const j = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, T = P[j];
      if (T)
        return { data: { index: j, overflows: L }, reset: { placement: T } };
      let O = (te = L.filter((N) => N.overflows[0] <= 0).sort((N, z) => N.overflows[1] - z.overflows[1])[0]) == null ? void 0 : te.placement;
      if (!O)
        switch (p) {
          case "bestFit": {
            var H;
            const N = (H = L.map((z) => [z.placement, z.overflows.filter((q) => q > 0).reduce((q, se) => q + se, 0)]).sort((z, q) => z[1] - q[1])[0]) == null ? void 0 : H[0];
            N && (O = N);
            break;
          }
          case "initialPlacement":
            O = a;
            break;
        }
      if (r !== O)
        return { reset: { placement: O } };
    }
    return {};
  } };
};
function Fn(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Nn(e) {
  return Ca.some((t) => e[t] >= 0);
}
const Ka = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: o = "referenceHidden", ...r } = Oe(e, t);
    switch (o) {
      case "referenceHidden": {
        const s = await Je(t, { ...r, elementContext: "reference" }), i = Fn(s, n.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: Nn(i) } };
      }
      case "escaped": {
        const s = await Je(t, { ...r, altBoundary: true }), i = Fn(s, n.floating);
        return { data: { escapedOffsets: i, escaped: Nn(i) } };
      }
      default:
        return {};
    }
  } };
};
async function Fa(e, t) {
  const { placement: n, platform: o, elements: r } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Ee(n), a = $e(n), c = Qe(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = s && c ? -1 : 1, h = Oe(t, e);
  let { mainAxis: g, crossAxis: p, alignmentAxis: m } = typeof h == "number" ? { mainAxis: h, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), c ? { x: p * u, y: g * l } : { x: g * l, y: p * u };
}
const Na = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, o;
    const { x: r, y: s, placement: i, middlewareData: a } = t, c = await Fa(t, e);
    return i === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : { x: r + c.x, y: s + c.y, data: { ...c, placement: i } };
  } };
}, $a = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: s = true, crossAxis: i = false, limiter: a = { fn: (f) => {
      let { x: v, y } = f;
      return { x: v, y };
    } }, ...c } = Oe(e, t), l = { x: n, y: o }, u = await Je(t, c), h = Qe(Ee(r)), g = Wo(h);
    let p = l[g], m = l[h];
    if (s) {
      const f = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", y = p + u[f], w = p - u[v];
      p = _t(y, p, w);
    }
    if (i) {
      const f = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", y = m + u[f], w = m - u[v];
      m = _t(y, m, w);
    }
    const d = a.fn({ ...t, [g]: p, [h]: m });
    return { ...d, data: { x: d.x - n, y: d.y - o } };
  } };
}, _a = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: o, platform: r, elements: s } = t, { apply: i = () => {
    }, ...a } = Oe(e, t), c = await Je(t, a), l = Ee(n), u = $e(n), h = Qe(n) === "y", { width: g, height: p } = o.floating;
    let m, d;
    l === "top" || l === "bottom" ? (m = l, d = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (d = l, m = u === "end" ? "top" : "bottom");
    const f = p - c.top - c.bottom, v = g - c.left - c.right, y = de(p - c[m], f), w = de(g - c[d], v), b = !t.middlewareData.shift;
    let P = y, C = w;
    if (h ? C = u || b ? de(w, v) : v : P = u || b ? de(y, f) : f, b && !u) {
      const L = Z(c.left, 0), M = Z(c.right, 0), te = Z(c.top, 0), H = Z(c.bottom, 0);
      h ? C = g - 2 * (L !== 0 || M !== 0 ? L + M : Z(c.left, c.right)) : P = p - 2 * (te !== 0 || H !== 0 ? te + H : Z(c.top, c.bottom));
    }
    await i({ ...t, availableWidth: C, availableHeight: P });
    const E = await r.getDimensions(s.floating);
    return g !== E.width || p !== E.height ? { reset: { rects: true } } : {};
  } };
};
function _e(e) {
  return jo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Q(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (jo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jo(e) {
  return e instanceof Node || e instanceof Q(e).Node;
}
function he(e) {
  return e instanceof Element || e instanceof Q(e).Element;
}
function ge(e) {
  return e instanceof HTMLElement || e instanceof Q(e).HTMLElement;
}
function $n(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Q(e).ShadowRoot;
}
function et(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Ba(e) {
  return ["table", "td", "th"].includes(_e(e));
}
function rn(e) {
  const t = sn(), n = ae(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Va(e) {
  let t = Ce(e);
  for (; ge(t) && !Fe(t); ) {
    if (rn(t))
      return t;
    t = Ce(t);
  }
  return null;
}
function sn() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function Fe(e) {
  return ["html", "body", "#document"].includes(_e(e));
}
function ae(e) {
  return Q(e).getComputedStyle(e);
}
function wt(e) {
  return he(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ce(e) {
  if (_e(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || $n(e) && e.host || we(e);
  return $n(t) ? t.host : t;
}
function qo(e) {
  const t = Ce(e);
  return Fe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ge(t) && et(t) ? t : qo(t);
}
function Ze(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const r = qo(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = Q(r);
  return s ? t.concat(i, i.visualViewport || [], et(r) ? r : [], i.frameElement && n ? Ze(i.frameElement) : []) : t.concat(r, Ze(r, [], n));
}
function Go(e) {
  const t = ae(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ge(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = ft(n) !== s || ft(o) !== i;
  return a && (n = s, o = i), { width: n, height: o, $: a };
}
function an(e) {
  return he(e) ? e : e.contextElement;
}
function ke(e) {
  const t = an(e);
  if (!ge(t))
    return xe(1);
  const n = t.getBoundingClientRect(), { width: o, height: r, $: s } = Go(t);
  let i = (s ? ft(n.width) : n.width) / o, a = (s ? ft(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: i, y: a };
}
const Ha = xe(0);
function Yo(e) {
  const t = Q(e);
  return !sn() || !t.visualViewport ? Ha : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ua(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Q(e) ? false : t;
}
function Ae(e, t, n, o) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), s = an(e);
  let i = xe(1);
  t && (o ? he(o) && (i = ke(o)) : i = ke(e));
  const a = Ua(s, n, o) ? Yo(s) : xe(0);
  let c = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, h = r.height / i.y;
  if (s) {
    const g = Q(s), p = o && he(o) ? Q(o) : o;
    let m = g, d = m.frameElement;
    for (; d && o && p !== m; ) {
      const f = ke(d), v = d.getBoundingClientRect(), y = ae(d), w = v.left + (d.clientLeft + parseFloat(y.paddingLeft)) * f.x, b = v.top + (d.clientTop + parseFloat(y.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, h *= f.y, c += w, l += b, m = Q(d), d = m.frameElement;
    }
  }
  return gt({ width: u, height: h, x: c, y: l });
}
const Wa = [":popover-open", ":modal"];
function cn(e) {
  return Wa.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
function za(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const s = r === "fixed", i = we(o), a = t ? cn(t.floating) : false;
  if (o === i || a && s)
    return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, l = xe(1);
  const u = xe(0), h = ge(o);
  if ((h || !h && !s) && ((_e(o) !== "body" || et(i)) && (c = wt(o)), ge(o))) {
    const g = Ae(o);
    l = ke(o), u.x = g.x + o.clientLeft, u.y = g.y + o.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - c.scrollLeft * l.x + u.x, y: n.y * l.y - c.scrollTop * l.y + u.y };
}
function ja(e) {
  return Array.from(e.getClientRects());
}
function Xo(e) {
  return Ae(we(e)).left + wt(e).scrollLeft;
}
function qa(e) {
  const t = we(e), n = wt(e), o = e.ownerDocument.body, r = Z(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = Z(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Xo(e);
  const a = -n.scrollTop;
  return ae(o).direction === "rtl" && (i += Z(t.clientWidth, o.clientWidth) - r), { width: r, height: s, x: i, y: a };
}
function Ga(e, t) {
  const n = Q(e), o = we(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, a = 0, c = 0;
  if (r) {
    s = r.width, i = r.height;
    const l = sn();
    (!l || l && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return { width: s, height: i, x: a, y: c };
}
function Ya(e, t) {
  const n = Ae(e, true, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = ge(e) ? ke(e) : xe(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = r * s.x, l = o * s.y;
  return { width: i, height: a, x: c, y: l };
}
function _n(e, t, n) {
  let o;
  if (t === "viewport")
    o = Ga(e, n);
  else if (t === "document")
    o = qa(we(e));
  else if (he(t))
    o = Ya(t, n);
  else {
    const r = Yo(e);
    o = { ...t, x: t.x - r.x, y: t.y - r.y };
  }
  return gt(o);
}
function Jo(e, t) {
  const n = Ce(e);
  return n === t || !he(n) || Fe(n) ? false : ae(n).position === "fixed" || Jo(n, t);
}
function Xa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ze(e, [], false).filter((a) => he(a) && _e(a) !== "body"), r = null;
  const s = ae(e).position === "fixed";
  let i = s ? Ce(e) : e;
  for (; he(i) && !Fe(i); ) {
    const a = ae(i), c = rn(i);
    !c && a.position === "fixed" && (r = null), (s ? !c && !r : !c && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || et(i) && !c && Jo(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = Ce(i);
  }
  return t.set(e, o), o;
}
function Ja(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const i = [...n === "clippingAncestors" ? cn(t) ? [] : Xa(t, this._c) : [].concat(n), o], a = i[0], c = i.reduce((l, u) => {
    const h = _n(t, u, r);
    return l.top = Z(h.top, l.top), l.right = de(h.right, l.right), l.bottom = de(h.bottom, l.bottom), l.left = Z(h.left, l.left), l;
  }, _n(t, a, r));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Za(e) {
  const { width: t, height: n } = Go(e);
  return { width: t, height: n };
}
function Qa(e, t, n) {
  const o = ge(t), r = we(t), s = n === "fixed", i = Ae(e, true, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = xe(0);
  if (o || !o && !s)
    if ((_e(t) !== "body" || et(r)) && (a = wt(t)), o) {
      const h = Ae(t, true, s, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else
      r && (c.x = Xo(r));
  const l = i.left + a.scrollLeft - c.x, u = i.top + a.scrollTop - c.y;
  return { x: l, y: u, width: i.width, height: i.height };
}
function Mt(e) {
  return ae(e).position === "static";
}
function Bn(e, t) {
  return !ge(e) || ae(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Zo(e, t) {
  const n = Q(e);
  if (cn(e))
    return n;
  if (!ge(e)) {
    let r = Ce(e);
    for (; r && !Fe(r); ) {
      if (he(r) && !Mt(r))
        return r;
      r = Ce(r);
    }
    return n;
  }
  let o = Bn(e, t);
  for (; o && Ba(o) && Mt(o); )
    o = Bn(o, t);
  return o && Fe(o) && Mt(o) && !rn(o) ? n : o || Va(e) || n;
}
const ec = async function(e) {
  const t = this.getOffsetParent || Zo, n = this.getDimensions, o = await n(e.floating);
  return { reference: Qa(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function tc(e) {
  return ae(e).direction === "rtl";
}
const Qo = { convertOffsetParentRelativeRectToViewportRelativeRect: za, getDocumentElement: we, getClippingRect: Ja, getOffsetParent: Zo, getElementRects: ec, getClientRects: ja, getDimensions: Za, getScale: ke, isElement: he, isRTL: tc };
function nc(e, t) {
  let n = null, o;
  const r = we(e);
  function s() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = false), c === void 0 && (c = 1), s();
    const { left: l, top: u, width: h, height: g } = e.getBoundingClientRect();
    if (a || t(), !h || !g)
      return;
    const p = it(u), m = it(r.clientWidth - (l + h)), d = it(r.clientHeight - (u + g)), f = it(l), y = { rootMargin: -p + "px " + -m + "px " + -d + "px " + -f + "px", threshold: Z(0, de(1, c)) || 1 };
    let w = true;
    function b(P) {
      const C = P[0].intersectionRatio;
      if (C !== c) {
        if (!w)
          return i();
        C ? i(false, C) : o = setTimeout(() => {
          i(false, 1e-7);
        }, 1e3);
      }
      w = false;
    }
    try {
      n = new IntersectionObserver(b, { ...y, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, y);
    }
    n.observe(e);
  }
  return i(true), s;
}
function oc(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = true, ancestorResize: s = true, elementResize: i = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: c = false } = o, l = an(e), u = r || s ? [...l ? Ze(l) : [], ...Ze(t)] : [];
  u.forEach((v) => {
    r && v.addEventListener("scroll", n, { passive: true }), s && v.addEventListener("resize", n);
  });
  const h = l && a ? nc(l, n) : null;
  let g = -1, p = null;
  i && (p = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === l && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, d = c ? Ae(e) : null;
  c && f();
  function f() {
    const v = Ae(e);
    d && (v.x !== d.x || v.y !== d.y || v.width !== d.width || v.height !== d.height) && n(), d = v, m = requestAnimationFrame(f);
  }
  return n(), () => {
    var v;
    u.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), h == null ? void 0 : h(), (v = p) == null || v.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const rc = Na, sc = $a, ic = ka, ac = _a, cc = Ka, lc = Da, uc = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = { platform: Qo, ...n }, s = { ...r.platform, _c: o };
  return Ra(e, t, { ...r, platform: s });
};
var dc = ["<svg", ' display="block" viewBox="', '"><g', '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"], ln = createContext$1();
function un() {
  const e = useContext(ln);
  if (e === void 0)
    throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  return e;
}
var We = 30, Vn = We / 2, fc = { top: 180, right: -90, bottom: 0, left: 90 }, Hn = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
function dn(e) {
  const t = un(), n = _({ size: We }, e), [o, r] = splitProps(n, ["ref", "style", "size"]), s = () => t.currentPlacement().split("-")[0], i = hc(t.contentRef), a = () => {
    var _a2;
    return ((_a2 = i()) == null ? void 0 : _a2.getPropertyValue("background-color")) || "none";
  }, c = () => {
    var _a2;
    return ((_a2 = i()) == null ? void 0 : _a2.getPropertyValue(`border-${s()}-color`)) || "none";
  }, l = () => {
    var _a2;
    return ((_a2 = i()) == null ? void 0 : _a2.getPropertyValue(`border-${s()}-width`)) || "0px";
  }, u = () => parseInt(l()) * 2 * (We / o.size), h = () => `rotate(${fc[s()]} ${Vn} ${Vn})`;
  return createComponent$1(ee, mergeProps({ as: "div", "aria-hidden": "true", get style() {
    return { position: "absolute", "font-size": `${o.size}px`, width: "1em", height: "1em", "pointer-events": "none", fill: a(), stroke: c(), "stroke-width": u(), ...o.style };
  } }, r, { get children() {
    return ssr(dc, ssrHydrationKey(), `0 0 ${escape(We, true)} ${escape(We, true)}`, ssrAttribute("transform", escape(h(), true), false), ssrAttribute("d", escape(Hn, true), false), ssrAttribute("d", escape(Hn, true), false));
  } }));
}
function hc(e) {
  const [t, n] = createSignal();
  return createEffect(() => {
    const o = e();
    o && n(pi(o).getComputedStyle(o));
  }), t;
}
function gc(e) {
  un();
  const [t, n] = splitProps(e, ["ref", "style"]);
  return createComponent$1(ee, mergeProps({ as: "div", "data-popper-positioner": "", get style() {
    return { position: "absolute", top: 0, left: 0, "min-width": "max-content", ...t.style };
  } }, n));
}
function Un(e) {
  const { x: t = 0, y: n = 0, width: o = 0, height: r = 0 } = e != null ? e : {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, o, r);
  const s = { x: t, y: n, width: o, height: r, top: n, right: t + o, bottom: n + r, left: t };
  return { ...s, toJSON: () => s };
}
function mc(e, t) {
  return { contextElement: e, getBoundingClientRect: () => {
    const o = t(e);
    return o ? Un(o) : e ? e.getBoundingClientRect() : Un();
  } };
}
function pc(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
var yc = { top: "bottom", right: "left", bottom: "top", left: "right" };
function vc(e, t) {
  const [n, o] = e.split("-"), r = yc[n];
  return o ? n === "left" || n === "right" ? `${r} ${o === "start" ? "top" : "bottom"}` : o === "start" ? `${r} ${t === "rtl" ? "right" : "left"}` : `${r} ${t === "rtl" ? "left" : "right"}` : `${r} center`;
}
function wc(e) {
  const t = _({ getAnchorRect: (g) => g == null ? void 0 : g.getBoundingClientRect(), placement: "bottom", gutter: 0, shift: 0, flip: true, slide: true, overlap: false, sameWidth: false, fitViewport: false, hideWhenDetached: false, detachedPadding: 0, arrowPadding: 4, overflowPadding: 8 }, e), [n, o] = createSignal(), [r, s] = createSignal(), [i, a] = createSignal(t.placement), c = () => {
    var _a2;
    return mc((_a2 = t.anchorRef) == null ? void 0 : _a2.call(t), t.getAnchorRect);
  }, { direction: l } = Ne();
  async function u() {
    var _a2, _b, _c2;
    const g = c(), p = n(), m = r();
    if (!g || !p)
      return;
    const d = ((m == null ? void 0 : m.clientHeight) || 0) / 2, f = typeof t.gutter == "number" ? t.gutter + d : (_a2 = t.gutter) != null ? _a2 : d;
    p.style.setProperty("--kb-popper-content-overflow-padding", `${t.overflowPadding}px`), g.getBoundingClientRect();
    const v = [rc(({ placement: C }) => {
      const E = !!C.split("-")[1];
      return { mainAxis: f, crossAxis: E ? void 0 : t.shift, alignmentAxis: t.shift };
    })];
    if (t.flip !== false) {
      const C = typeof t.flip == "string" ? t.flip.split(" ") : void 0;
      if (C !== void 0 && !C.every(pc))
        throw new Error("`flip` expects a spaced-delimited list of placements");
      v.push(ic({ padding: t.overflowPadding, fallbackPlacements: C }));
    }
    (t.slide || t.overlap) && v.push(sc({ mainAxis: t.slide, crossAxis: t.overlap, padding: t.overflowPadding })), v.push(ac({ padding: t.overflowPadding, apply({ availableWidth: C, availableHeight: E, rects: L }) {
      const M = Math.round(L.reference.width);
      C = Math.floor(C), E = Math.floor(E), p.style.setProperty("--kb-popper-anchor-width", `${M}px`), p.style.setProperty("--kb-popper-content-available-width", `${C}px`), p.style.setProperty("--kb-popper-content-available-height", `${E}px`), t.sameWidth && (p.style.width = `${M}px`), t.fitViewport && (p.style.maxWidth = `${C}px`, p.style.maxHeight = `${E}px`);
    } })), t.hideWhenDetached && v.push(cc({ padding: t.detachedPadding })), m && v.push(lc({ element: m, padding: t.arrowPadding }));
    const y = await uc(g, p, { placement: t.placement, strategy: "absolute", middleware: v, platform: { ...Qo, isRTL: () => l() === "rtl" } });
    if (a(y.placement), (_b = t.onCurrentPlacementChange) == null ? void 0 : _b.call(t, y.placement), !p)
      return;
    p.style.setProperty("--kb-popper-content-transform-origin", vc(y.placement, l()));
    const w = Math.round(y.x), b = Math.round(y.y);
    let P;
    if (t.hideWhenDetached && (P = ((_c2 = y.middlewareData.hide) == null ? void 0 : _c2.referenceHidden) ? "hidden" : "visible"), Object.assign(p.style, { top: "0", left: "0", transform: `translate3d(${w}px, ${b}px, 0)`, visibility: P }), m && y.middlewareData.arrow) {
      const { x: C, y: E } = y.middlewareData.arrow, L = y.placement.split("-")[0];
      Object.assign(m.style, { left: C != null ? `${C}px` : "", top: E != null ? `${E}px` : "", [L]: "100%" });
    }
  }
  createEffect(() => {
    const g = c(), p = n();
    if (!g || !p)
      return;
    const m = oc(g, p, u, { elementResize: typeof ResizeObserver == "function" });
    onCleanup(m);
  }), createEffect(() => {
    var _a2;
    const g = n(), p = (_a2 = t.contentRef) == null ? void 0 : _a2.call(t);
    !g || !p || queueMicrotask(() => {
      g.style.zIndex = getComputedStyle(p).zIndex;
    });
  });
  const h = { currentPlacement: i, contentRef: () => {
    var _a2;
    return (_a2 = t.contentRef) == null ? void 0 : _a2.call(t);
  }, setPositionerRef: o, setArrowRef: s };
  return createComponent$1(ln.Provider, { value: h, get children() {
    return t.children;
  } });
}
var er = Object.assign(wc, { Arrow: dn, Context: ln, usePopperContext: un, Positioner: gc });
function bc(e) {
  const t = (n) => {
    n.key, Mo.Escape;
  };
  createEffect(() => {
    var _a2, _b;
    if (isServer || x(e.isDisabled))
      return;
    const n = (_b = (_a2 = e.ownerDocument) == null ? void 0 : _a2.call(e)) != null ? _b : fe();
    n.addEventListener("keydown", t), onCleanup(() => {
      n.removeEventListener("keydown", t);
    });
  });
}
var Wn = "interactOutside.pointerDownOutside", zn = "interactOutside.focusOutside";
function Sc(e, t) {
  let n, o = Ri;
  const r = () => fe(t()), s = (h) => {
    var _a2;
    return (_a2 = e.onPointerDownOutside) == null ? void 0 : _a2.call(e, h);
  }, i = (h) => {
    var _a2;
    return (_a2 = e.onFocusOutside) == null ? void 0 : _a2.call(e, h);
  }, a = (h) => {
    var _a2;
    return (_a2 = e.onInteractOutside) == null ? void 0 : _a2.call(e, h);
  }, c = (h) => {
    var _a2;
    const g = h.target;
    return !(g instanceof HTMLElement) || g.closest(`[${dt}]`) || !ue(r(), g) || ue(t(), g) ? false : !((_a2 = e.shouldExcludeElement) == null ? void 0 : _a2.call(e, g));
  }, l = (h) => {
    function g() {
      const p = t(), m = h.target;
      if (!p || !m || !c(h))
        return;
      const d = U([s, a]);
      m.addEventListener(Wn, d, { once: true });
      const f = new CustomEvent(Wn, { bubbles: false, cancelable: true, detail: { originalEvent: h, isContextMenu: h.button === 2 || Si(h) && h.button === 0 } });
      m.dispatchEvent(f);
    }
    h.pointerType === "touch" ? (r().removeEventListener("click", g), o = g, r().addEventListener("click", g, { once: true })) : g();
  }, u = (h) => {
    const g = t(), p = h.target;
    if (!g || !p || !c(h))
      return;
    const m = U([i, a]);
    p.addEventListener(zn, m, { once: true });
    const d = new CustomEvent(zn, { bubbles: false, cancelable: true, detail: { originalEvent: h, isContextMenu: false } });
    p.dispatchEvent(d);
  };
  createEffect(() => {
    isServer || x(e.isDisabled) || (n = window.setTimeout(() => {
      r().addEventListener("pointerdown", l, true);
    }, 0), r().addEventListener("focusin", u, true), onCleanup(() => {
      window.clearTimeout(n), r().removeEventListener("click", o), r().removeEventListener("pointerdown", l, true), r().removeEventListener("focusin", u, true);
    }));
  });
}
var tr = createContext$1();
function xc() {
  return useContext(tr);
}
function Ec(e) {
  let t;
  const n = xc(), [o, r] = splitProps(e, ["ref", "disableOutsidePointerEvents", "excludedElements", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "bypassTopMostLayerCheck"]), s = /* @__PURE__ */ new Set([]), i = (h) => {
    s.add(h);
    const g = n == null ? void 0 : n.registerNestedLayer(h);
    return () => {
      s.delete(h), g == null ? void 0 : g();
    };
  };
  Sc({ shouldExcludeElement: (h) => false, onPointerDownOutside: (h) => {
  }, onFocusOutside: (h) => {
    var _a2, _b, _c2;
    (_a2 = o.onFocusOutside) == null ? void 0 : _a2.call(o, h), (_b = o.onInteractOutside) == null ? void 0 : _b.call(o, h), h.defaultPrevented || ((_c2 = o.onDismiss) == null ? void 0 : _c2.call(o));
  } }, () => t), bc({ ownerDocument: () => fe(t), onEscapeKeyDown: (h) => {
  } }), onMount(() => {
  }), createEffect(on$2([() => t, () => o.disableOutsidePointerEvents], ([h, g]) => {
    if (!h)
      return;
    const p = st.find(h);
    p && p.isPointerBlocking !== g && (p.isPointerBlocking = g, st.assignPointerEventToLayers()), g && st.disableBodyPointerEvents(h), onCleanup(() => {
      st.restoreBodyPointerEvents(h);
    });
  }, { defer: true }));
  const u = { registerNestedLayer: i };
  return createComponent$1(tr.Provider, { value: u, get children() {
    return createComponent$1(ee, mergeProps({ as: "div" }, r));
  } });
}
function nr(e = {}) {
  const [t, n] = Io({ value: () => x(e.open), defaultValue: () => !!x(e.defaultOpen), onChange: (i) => {
    var _a2;
    return (_a2 = e.onOpenChange) == null ? void 0 : _a2.call(e, i);
  } }), o = () => {
    n(true);
  }, r = () => {
    n(false);
  };
  return { isOpen: t, setIsOpen: n, open: o, close: r, toggle: () => {
    t() ? r() : o();
  } };
}
var Cc = class {
  constructor(e, t, n) {
    J(this, "collection");
    J(this, "ref");
    J(this, "collator");
    this.collection = e, this.ref = t, this.collator = n;
  }
  getKeyBelow(e) {
    let t = this.collection().getKeyAfter(e);
    for (; t != null; ) {
      const n = this.collection().getItem(t);
      if (n && n.type === "item" && !n.disabled)
        return t;
      t = this.collection().getKeyAfter(t);
    }
  }
  getKeyAbove(e) {
    let t = this.collection().getKeyBefore(e);
    for (; t != null; ) {
      const n = this.collection().getItem(t);
      if (n && n.type === "item" && !n.disabled)
        return t;
      t = this.collection().getKeyBefore(t);
    }
  }
  getFirstKey() {
    let e = this.collection().getFirstKey();
    for (; e != null; ) {
      const t = this.collection().getItem(e);
      if (t && t.type === "item" && !t.disabled)
        return e;
      e = this.collection().getKeyAfter(e);
    }
  }
  getLastKey() {
    let e = this.collection().getLastKey();
    for (; e != null; ) {
      const t = this.collection().getItem(e);
      if (t && t.type === "item" && !t.disabled)
        return e;
      e = this.collection().getKeyBefore(e);
    }
  }
  getItem(e) {
    var _a2, _b, _c2;
    return (_c2 = (_b = (_a2 = this.ref) == null ? void 0 : _a2.call(this)) == null ? void 0 : _b.querySelector(`[data-key="${e}"]`)) != null ? _c2 : null;
  }
  getKeyPageAbove(e) {
    var _a2;
    const t = (_a2 = this.ref) == null ? void 0 : _a2.call(this);
    let n = this.getItem(e);
    if (!t || !n)
      return;
    const o = Math.max(0, n.offsetTop + n.offsetHeight - t.offsetHeight);
    let r = e;
    for (; r && n && n.offsetTop > o; )
      r = this.getKeyAbove(r), n = r != null ? this.getItem(r) : null;
    return r;
  }
  getKeyPageBelow(e) {
    var _a2;
    const t = (_a2 = this.ref) == null ? void 0 : _a2.call(this);
    let n = this.getItem(e);
    if (!t || !n)
      return;
    const o = Math.min(t.scrollHeight, n.offsetTop - n.offsetHeight + t.offsetHeight);
    let r = e;
    for (; r && n && n.offsetTop < o; )
      r = this.getKeyBelow(r), n = r != null ? this.getItem(r) : null;
    return r;
  }
  getKeyForSearch(e, t) {
    var _a2;
    const n = (_a2 = this.collator) == null ? void 0 : _a2.call(this);
    if (!n)
      return;
    let o = t != null ? this.getKeyBelow(t) : this.getFirstKey();
    for (; o != null; ) {
      const r = this.collection().getItem(o);
      if (r) {
        const s = r.textValue.slice(0, e.length);
        if (r.textValue && n.compare(s, e) === 0)
          return o;
      }
      o = this.getKeyBelow(o);
    }
  }
};
function Pc(e, t, n) {
  const o = Zi({ usage: "search", sensitivity: "base" }), r = createMemo(() => {
    const s = x(e.keyboardDelegate);
    return s || new Cc(e.collection, t, o);
  });
  return sa({ selectionManager: () => x(e.selectionManager), keyboardDelegate: r, autoFocus: () => x(e.autoFocus), deferAutoFocus: () => x(e.deferAutoFocus), shouldFocusWrap: () => x(e.shouldFocusWrap), disallowEmptySelection: () => x(e.disallowEmptySelection), selectOnFocus: () => x(e.selectOnFocus), disallowTypeAhead: () => x(e.disallowTypeAhead), shouldUseVirtualFocus: () => x(e.shouldUseVirtualFocus), allowsTabNavigation: () => x(e.allowsTabNavigation), isVirtualized: () => x(e.isVirtualized), scrollToKey: (s) => {
    var _a2;
    return (_a2 = x(e.scrollToKey)) == null ? void 0 : _a2(s);
  } }, t);
}
var At = "focusScope.autoFocusOnMount", Ot = "focusScope.autoFocusOnUnmount", jn = { bubbles: false, cancelable: true }, qn = { stack: [], active() {
  return this.stack[0];
}, add(e) {
  var _a2;
  e !== this.active() && ((_a2 = this.active()) == null ? void 0 : _a2.pause()), this.stack = Kt(this.stack, e), this.stack.unshift(e);
}, remove(e) {
  var _a2;
  this.stack = Kt(this.stack, e), (_a2 = this.active()) == null ? void 0 : _a2.resume();
} };
function Tc(e, t) {
  const [n, o] = createSignal(false), r = { pause() {
    o(true);
  }, resume() {
    o(false);
  } };
  let s = null;
  const i = (m) => {
    var _a2;
    return (_a2 = e.onMountAutoFocus) == null ? void 0 : _a2.call(e, m);
  }, a = (m) => {
    var _a2;
    return (_a2 = e.onUnmountAutoFocus) == null ? void 0 : _a2.call(e, m);
  }, c = () => fe(t()), l = () => {
    const m = c().createElement("span");
    return m.setAttribute("data-focus-trap", ""), m.tabIndex = 0, Object.assign(m.style, Ki), m;
  }, u = () => {
    const m = t();
    return m ? Oo(m, true).filter((d) => !d.hasAttribute("data-focus-trap")) : [];
  }, h = () => {
    const m = u();
    return m.length > 0 ? m[0] : null;
  }, g = () => {
    const m = u();
    return m.length > 0 ? m[m.length - 1] : null;
  }, p = () => {
    const m = t();
    if (!m)
      return false;
    const d = He(m);
    return !d || ue(m, d) ? false : Lo(d);
  };
  createEffect(() => {
    if (isServer)
      return;
    const m = t();
    if (!m)
      return;
    qn.add(r);
    const d = He(m);
    if (!ue(m, d)) {
      const v = new CustomEvent(At, jn);
      m.addEventListener(At, i), m.dispatchEvent(v), v.defaultPrevented || setTimeout(() => {
        G(h()), He(m) === d && G(m);
      }, 0);
    }
    onCleanup(() => {
      m.removeEventListener(At, i), setTimeout(() => {
        const v = new CustomEvent(Ot, jn);
        p() && v.preventDefault(), m.addEventListener(Ot, a), m.dispatchEvent(v), v.defaultPrevented || G(d != null ? d : c().body), m.removeEventListener(Ot, a), qn.remove(r);
      }, 0);
    });
  }), createEffect(() => {
    if (isServer)
      return;
    const m = t();
    if (!m || !x(e.trapFocus) || n())
      return;
    const d = (v) => {
      const y = v.target;
      (y == null ? void 0 : y.closest(`[${dt}]`)) || (ue(m, y) ? s = y : G(s));
    }, f = (v) => {
      var _a2;
      const w = (_a2 = v.relatedTarget) != null ? _a2 : He(m);
      (w == null ? void 0 : w.closest(`[${dt}]`)) || ue(m, w) || G(s);
    };
    c().addEventListener("focusin", d), c().addEventListener("focusout", f), onCleanup(() => {
      c().removeEventListener("focusin", d), c().removeEventListener("focusout", f);
    });
  }), createEffect(() => {
    if (isServer)
      return;
    const m = t();
    if (!m || !x(e.trapFocus) || n())
      return;
    const d = l();
    m.insertAdjacentElement("afterbegin", d);
    const f = l();
    m.insertAdjacentElement("beforeend", f);
    function v(w) {
      const b = h(), P = g();
      w.relatedTarget === b ? G(P) : G(b);
    }
    d.addEventListener("focusin", v), f.addEventListener("focusin", v);
    const y = new MutationObserver((w) => {
      for (const b of w)
        b.previousSibling === f && (f.remove(), m.insertAdjacentElement("beforeend", f)), b.nextSibling === d && (d.remove(), m.insertAdjacentElement("afterbegin", d));
    });
    y.observe(m, { childList: true, subtree: false }), onCleanup(() => {
      d.removeEventListener("focusin", v), f.removeEventListener("focusin", v), d.remove(), f.remove(), y.disconnect();
    });
  });
}
var Mc = "data-live-announcer";
function Ac(e) {
  createEffect(() => {
    x(e.isDisabled) || onCleanup(Oc(x(e.targets), x(e.root)));
  });
}
var Ve = /* @__PURE__ */ new WeakMap(), oe = [];
function Oc(e, t = document.body) {
  const n = new Set(e), o = /* @__PURE__ */ new Set(), r = (c) => {
    for (const g of c.querySelectorAll(`[${Mc}], [${dt}]`))
      n.add(g);
    const l = (g) => {
      if (n.has(g) || g.parentElement && o.has(g.parentElement) && g.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (const p of n)
        if (g.contains(p))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, u = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: l }), h = l(c);
    if (h === NodeFilter.FILTER_ACCEPT && s(c), h !== NodeFilter.FILTER_REJECT) {
      let g = u.nextNode();
      for (; g != null; )
        s(g), g = u.nextNode();
    }
  }, s = (c) => {
    var _a2;
    const l = (_a2 = Ve.get(c)) != null ? _a2 : 0;
    c.getAttribute("aria-hidden") === "true" && l === 0 || (l === 0 && c.setAttribute("aria-hidden", "true"), o.add(c), Ve.set(c, l + 1));
  };
  oe.length && oe[oe.length - 1].disconnect(), r(t);
  const i = new MutationObserver((c) => {
    for (const l of c)
      if (!(l.type !== "childList" || l.addedNodes.length === 0) && ![...n, ...o].some((u) => u.contains(l.target))) {
        for (const u of l.removedNodes)
          u instanceof Element && (n.delete(u), o.delete(u));
        for (const u of l.addedNodes)
          (u instanceof HTMLElement || u instanceof SVGElement) && (u.dataset.liveAnnouncer === "true" || u.dataset.reactAriaTopLayer === "true") ? n.add(u) : u instanceof Element && r(u);
      }
  });
  i.observe(t, { childList: true, subtree: true });
  const a = { observe() {
    i.observe(t, { childList: true, subtree: true });
  }, disconnect() {
    i.disconnect();
  } };
  return oe.push(a), () => {
    i.disconnect();
    for (const c of o) {
      const l = Ve.get(c);
      if (l == null)
        return;
      l === 1 ? (c.removeAttribute("aria-hidden"), Ve.delete(c)) : Ve.set(c, l - 1);
    }
    a === oe[oe.length - 1] ? (oe.pop(), oe.length && oe[oe.length - 1].observe()) : oe.splice(oe.indexOf(a), 1);
  };
}
var ie = (e) => typeof e == "function" ? e() : e, at = /* @__PURE__ */ new Map(), Lc = (e) => {
  createEffect(() => {
    var _a2, _b;
    const t = (_a2 = ie(e.style)) != null ? _a2 : {}, n = (_b = ie(e.properties)) != null ? _b : [], o = {};
    for (const s in t)
      o[s] = e.element.style[s];
    const r = at.get(e.key);
    r ? r.activeCount++ : at.set(e.key, { activeCount: 1, originalStyles: o, properties: n.map((s) => s.key) }), Object.assign(e.element.style, e.style);
    for (const s of n)
      e.element.style.setProperty(s.key, s.value);
    onCleanup(() => {
      var _a3;
      const s = at.get(e.key);
      if (s) {
        if (s.activeCount !== 1) {
          s.activeCount--;
          return;
        }
        at.delete(e.key);
        for (const [i, a] of Object.entries(s.originalStyles))
          e.element.style[i] = a;
        for (const i of s.properties)
          e.element.style.removeProperty(i);
        e.element.style.length === 0 && e.element.removeAttribute("style"), (_a3 = e.cleanup) == null ? void 0 : _a3.call(e);
      }
    });
  });
}, Gn = Lc, Ic = (e, t) => {
  switch (t) {
    case "x":
      return [e.clientWidth, e.scrollLeft, e.scrollWidth];
    case "y":
      return [e.clientHeight, e.scrollTop, e.scrollHeight];
  }
}, Rc = (e, t) => {
  const n = getComputedStyle(e), o = t === "x" ? n.overflowX : n.overflowY;
  return o === "auto" || o === "scroll" || e.tagName === "HTML" && o === "visible";
}, Dc = (e, t, n) => {
  var _a2;
  const o = t === "x" && window.getComputedStyle(e).direction === "rtl" ? -1 : 1;
  let r = e, s = 0, i = 0, a = false;
  do {
    const [c, l, u] = Ic(r, t), h = u - c - o * l;
    (l !== 0 || h !== 0) && Rc(r, t) && (s += h, i += l), r === (n != null ? n : document.documentElement) ? a = true : r = (_a2 = r._$host) != null ? _a2 : r.parentElement;
  } while (r && !a);
  return [s, i];
}, [Yn, Xn] = createSignal([]), kc = (e) => Yn().indexOf(e) === Yn().length - 1, Kc = (e) => {
  const t = mergeProps$1({ element: null, enabled: true, hideScrollbar: true, preventScrollbarShift: true, preventScrollbarShiftMode: "padding", allowPinchZoom: false }, e), n = createUniqueId();
  let o = [0, 0], r = null, s = null;
  createEffect(() => {
    ie(t.enabled) && (Xn((l) => [...l, n]), onCleanup(() => {
      Xn((l) => l.filter((u) => u !== n));
    }));
  }), createEffect(() => {
    if (!ie(t.enabled) || !ie(t.hideScrollbar))
      return;
    const { body: l } = document, u = window.innerWidth - l.offsetWidth;
    if (Gn({ key: "prevent-scroll-overflow", element: l, style: { overflow: "hidden" } }), ie(t.preventScrollbarShift)) {
      const h = {}, g = [];
      u > 0 && (ie(t.preventScrollbarShiftMode) === "padding" ? h.paddingRight = `calc(${window.getComputedStyle(l).paddingRight} + ${u}px)` : h.marginRight = `calc(${window.getComputedStyle(l).marginRight} + ${u}px)`, g.push({ key: "--scrollbar-width", value: `${u}px` }));
      const p = window.scrollY, m = window.scrollX;
      Gn({ key: "prevent-scroll-scrollbar", element: l, style: h, properties: g, cleanup: () => {
        u > 0 && window.scrollTo(m, p);
      } });
    }
  }), createEffect(() => {
    !kc(n) || !ie(t.enabled) || (document.addEventListener("wheel", a, { passive: false }), document.addEventListener("touchstart", i, { passive: false }), document.addEventListener("touchmove", c, { passive: false }), onCleanup(() => {
      document.removeEventListener("wheel", a), document.removeEventListener("touchstart", i), document.removeEventListener("touchmove", c);
    }));
  });
  const i = (l) => {
    o = Jn(l), r = null, s = null;
  }, a = (l) => {
    const u = l.target, h = ie(t.element), g = Fc(l), p = Math.abs(g[0]) > Math.abs(g[1]) ? "x" : "y", m = p === "x" ? g[0] : g[1], d = Zn(u, p, m, h);
    let f;
    h && Vt(h, u) ? f = !d : f = true, f && l.cancelable && l.preventDefault();
  }, c = (l) => {
    const u = ie(t.element), h = l.target;
    let g;
    if (l.touches.length === 2)
      g = !ie(t.allowPinchZoom);
    else {
      if (r == null || s === null) {
        const p = Jn(l).map((d, f) => o[f] - d), m = Math.abs(p[0]) > Math.abs(p[1]) ? "x" : "y";
        r = m, s = m === "x" ? p[0] : p[1];
      }
      if (h.type === "range")
        g = false;
      else {
        const p = Zn(h, r, s, u);
        u && Vt(u, h) ? g = !p : g = true;
      }
    }
    g && l.cancelable && l.preventDefault();
  };
}, Fc = (e) => [e.deltaX, e.deltaY], Jn = (e) => e.changedTouches[0] ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0], Zn = (e, t, n, o) => {
  const r = o !== null && Vt(o, e), [s, i] = Dc(e, t, r ? o : void 0);
  return !(n > 0 && Math.abs(s) <= 1 || n < 0 && Math.abs(i) < 1);
}, Vt = (e, t) => {
  var _a2;
  if (e.contains(t))
    return true;
  let n = t;
  for (; n; ) {
    if (n === e)
      return true;
    n = (_a2 = n._$host) != null ? _a2 : n.parentElement;
  }
  return false;
}, Nc = Kc, $c = Nc, or = createContext$1();
function rr() {
  return useContext(or);
}
function be() {
  const e = rr();
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
  return e;
}
var sr = createContext$1();
var ir = createContext$1();
function Se() {
  const e = useContext(ir);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
  return e;
}
function hn(e) {
  let t;
  const n = Se(), o = be(), r = _({ id: n.generateId(`item-${createUniqueId()}`) }, e), [s, i] = splitProps(r, ["ref", "textValue", "disabled", "closeOnSelect", "checked", "indeterminate", "onSelect", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]), [a, c] = createSignal(), [l, u] = createSignal(), [h, g] = createSignal(), p = () => o.listState().selectionManager(), m = () => i.id, d = () => p().focusedKey() === m(), f = () => {
    var _a2;
    (_a2 = s.onSelect) == null ? void 0 : _a2.call(s), s.closeOnSelect && setTimeout(() => {
      o.close(true);
    });
  };
  Wi({ getItem: () => {
    var _a2, _b, _c2, _d, _e2;
    return { ref: () => t, type: "item", key: m(), textValue: (_d = (_c2 = (_b = s.textValue) != null ? _b : (_a2 = h()) == null ? void 0 : _a2.textContent) != null ? _c2 : void 0 ) != null ? _d : "", disabled: (_e2 = s.disabled) != null ? _e2 : false };
  } });
  const v = Bo({ key: m, selectionManager: p, shouldSelectOnPressUp: true, allowsDifferentPressOrigin: true, disabled: () => s.disabled }, () => t), y = (M) => {
    W(M, s.onPointerMove), M.pointerType === "mouse" && (s.disabled ? o.onItemLeave(M) : (o.onItemEnter(M), M.defaultPrevented || (G(M.currentTarget), o.listState().selectionManager().setFocused(true), o.listState().selectionManager().setFocusedKey(m()))));
  }, w = (M) => {
    W(M, s.onPointerLeave), M.pointerType === "mouse" && o.onItemLeave(M);
  }, b = (M) => {
    W(M, s.onPointerUp), !s.disabled && M.button === 0 && f();
  }, P = (M) => {
    if (W(M, s.onKeyDown), !M.repeat && !s.disabled)
      switch (M.key) {
        case "Enter":
        case " ":
          f();
          break;
      }
  }, C = createMemo(() => {
    if (s.indeterminate)
      return "mixed";
    if (s.checked != null)
      return s.checked;
  }), E = createMemo(() => ({ "data-indeterminate": s.indeterminate ? "" : void 0, "data-checked": s.checked && !s.indeterminate ? "" : void 0, "data-disabled": s.disabled ? "" : void 0, "data-highlighted": d() ? "" : void 0 })), L = { isChecked: () => s.checked, dataset: E, setLabelRef: g, generateId: Yt(() => i.id), registerLabel: Ye(c), registerDescription: Ye(u) };
  return createComponent$1(sr.Provider, { value: L, get children() {
    return createComponent$1(ee, mergeProps({ as: "div", get tabIndex() {
      return v.tabIndex();
    }, get "aria-checked"() {
      return C();
    }, get "aria-disabled"() {
      return s.disabled;
    }, get "aria-labelledby"() {
      return a();
    }, get "aria-describedby"() {
      return l();
    }, get "data-key"() {
      return v.dataKey();
    }, get onPointerDown() {
      return U([s.onPointerDown, v.onPointerDown]);
    }, get onPointerUp() {
      return U([b, v.onPointerUp]);
    }, get onClick() {
      return U([s.onClick, v.onClick]);
    }, get onKeyDown() {
      return U([P, v.onKeyDown]);
    }, get onMouseDown() {
      return U([s.onMouseDown, v.onMouseDown]);
    }, get onFocus() {
      return U([s.onFocus, v.onFocus]);
    }, onPointerMove: y, onPointerLeave: w }, E, i));
  } });
}
var _c = createContext$1();
function cr() {
  return useContext(_c);
}
function lr(e) {
  let t;
  const n = Se(), o = be(), r = cr(), s = _({ id: n.generateId(`content-${createUniqueId()}`) }, e), [i, a] = splitProps(s, ["ref", "id", "style", "onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "onFocusOutside", "onPointerEnter", "onPointerMove", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
  let c = 0;
  const l = () => o.parentMenuContext() == null && r === void 0 && n.isModal(), u = Pc({ selectionManager: o.listState().selectionManager, collection: o.listState().collection, autoFocus: o.autoFocus, deferAutoFocus: true, shouldFocusWrap: true, disallowTypeAhead: () => !o.listState().selectionManager().isFocused() }, () => t);
  Tc({ trapFocus: () => l() && o.isOpen(), onMountAutoFocus: (f) => {
    var _a2;
    r === void 0 && ((_a2 = i.onOpenAutoFocus) == null ? void 0 : _a2.call(i, f));
  }, onUnmountAutoFocus: i.onCloseAutoFocus }, () => t);
  const h = (f) => {
    if (ue(f.currentTarget, f.target) && (f.key === "Tab" && o.isOpen() && f.preventDefault(), r !== void 0 && f.currentTarget.getAttribute("aria-haspopup") !== "true"))
      switch (f.key) {
        case "ArrowRight":
          f.stopPropagation(), f.preventDefault(), o.close(true), r.setAutoFocusMenu(true), r.nextMenu();
          break;
        case "ArrowLeft":
          if (f.currentTarget.hasAttribute("data-closed"))
            break;
          f.stopPropagation(), f.preventDefault(), o.close(true), r.setAutoFocusMenu(true), r.previousMenu();
          break;
      }
  }, g = (f) => {
    var _a2;
    (_a2 = i.onEscapeKeyDown) == null ? void 0 : _a2.call(i, f), r == null ? void 0 : r.setAutoFocusMenu(false), o.close(true);
  }, p = (f) => {
    var _a2;
    (_a2 = i.onFocusOutside) == null ? void 0 : _a2.call(i, f), n.isModal() && f.preventDefault();
  }, m = (f) => {
    var _a2, _b;
    W(f, i.onPointerEnter), o.isOpen() && ((_a2 = o.parentMenuContext()) == null ? void 0 : _a2.listState().selectionManager().setFocused(false), (_b = o.parentMenuContext()) == null ? void 0 : _b.listState().selectionManager().setFocusedKey(void 0));
  }, d = (f) => {
    if (W(f, i.onPointerMove), f.pointerType !== "mouse")
      return;
    const v = f.target, y = c !== f.clientX;
    ue(f.currentTarget, v) && y && (o.setPointerDir(f.clientX > c ? "right" : "left"), c = f.clientX);
  };
  return createEffect(() => onCleanup(o.registerContentId(i.id))), createComponent$1(Show, { get when() {
    return o.contentPresence.isPresent();
  }, get children() {
    return createComponent$1(er.Positioner, { get children() {
      return createComponent$1(Ec, mergeProps({ role: "menu", get id() {
        return i.id;
      }, get tabIndex() {
        return u.tabIndex();
      }, get disableOutsidePointerEvents() {
        return l() && o.isOpen();
      }, get excludedElements() {
        return [o.triggerRef];
      }, bypassTopMostLayerCheck: true, get style() {
        return { "--kb-menu-content-transform-origin": "var(--kb-popper-content-transform-origin)", position: "relative", ...i.style };
      }, get "aria-labelledby"() {
        return o.triggerId();
      }, onEscapeKeyDown: g, onFocusOutside: p, get onDismiss() {
        return o.close;
      }, get onKeyDown() {
        return U([i.onKeyDown, u.onKeyDown, h]);
      }, get onMouseDown() {
        return U([i.onMouseDown, u.onMouseDown]);
      }, get onFocusIn() {
        return U([i.onFocusIn, u.onFocusIn]);
      }, get onFocusOut() {
        return U([i.onFocusOut, u.onFocusOut]);
      }, onPointerEnter: m, onPointerMove: d }, () => o.dataset(), a));
    } });
  } });
}
function Bc(e) {
  const t = Se(), n = be(), [o, r] = splitProps(e, ["ref"]);
  return $c({ element: () => null, enabled: () => n.isOpen() && t.preventScroll() }), createComponent$1(lr, r);
}
function mn(e) {
  return createComponent$1(hn, mergeProps({ role: "menuitem", closeOnSelect: true }, e));
}
function pn(e) {
  const t = be();
  return createComponent$1(Show, { get when() {
    return t.contentPresence.isPresent();
  }, get children() {
    return createComponent$1(Portal, e);
  } });
}
function Wc(e, t) {
  return t ? Di([e.clientX, e.clientY], t) : false;
}
function wr(e) {
  const t = Se(), n = Do(), o = rr(), r = _({ placement: "bottom-start" }, e), [s, i] = splitProps(r, ["open", "defaultOpen", "onOpenChange"]);
  let a = 0, c = null, l = "right";
  const [u, h] = createSignal(), [g, p] = createSignal(), [m, d] = createSignal(), [f, v] = createSignal(), [y, w] = createSignal(true), [b, P] = createSignal(i.placement), [C, E] = createSignal([]), [L, M] = createSignal([]), { DomCollectionProvider: te } = Ui({ items: L, onItemsChange: M }), H = nr({ open: () => s.open, defaultOpen: () => s.defaultOpen, onOpenChange: (I) => {
    var _a2;
    return (_a2 = s.onOpenChange) == null ? void 0 : _a2.call(s, I);
  } }), j = ca(() => t.forceMount() || H.isOpen()), T = aa({ selectionMode: "none", dataSource: L }), O = (I) => {
    w(I), H.open();
  }, N = (I = false) => {
    H.close(), I && o && o.close(true);
  }, z = (I) => {
    w(I), H.toggle();
  }, q = () => {
    const I = f();
    I && (G(I), T.selectionManager().setFocused(true), T.selectionManager().setFocusedKey(void 0));
  }, se = (I) => {
    E((xt) => [...xt, I]);
    const nt = o == null ? void 0 : o.registerNestedMenu(I);
    return () => {
      E((xt) => Kt(xt, I)), nt == null ? void 0 : nt();
    };
  }, le = (I) => l === (c == null ? void 0 : c.side) && Wc(I, c == null ? void 0 : c.area), ne = (I) => {
    le(I) && I.preventDefault();
  }, tt = (I) => {
    le(I) || q();
  }, Le = (I) => {
    le(I) && I.preventDefault();
  };
  Ac({ isDisabled: () => !(o == null && H.isOpen() && t.isModal()), targets: () => [f(), ...C()].filter(Boolean) }), createEffect(() => {
    const I = f();
    if (!I || !o)
      return;
    const nt = o.registerNestedMenu(I);
    onCleanup(() => {
      nt();
    });
  });
  const Tr = { dataset: createMemo(() => ({ "data-expanded": H.isOpen() ? "" : void 0, "data-closed": H.isOpen() ? void 0 : "" })), isOpen: H.isOpen, contentPresence: j, nestedMenus: C, currentPlacement: b, pointerGraceTimeoutId: () => a, autoFocus: y, listState: () => T, parentMenuContext: () => o, triggerRef: m, contentRef: f, triggerId: u, contentId: g, setTriggerRef: d, setContentRef: v, open: O, close: N, toggle: z, focusContent: q, onItemEnter: ne, onItemLeave: tt, onTriggerLeave: Le, setPointerDir: (I) => l = I, setPointerGraceTimeoutId: (I) => a = I, setPointerGraceIntent: (I) => c = I, registerNestedMenu: se, registerItemToParentDomCollection: n == null ? void 0 : n.registerItem, registerTriggerId: Ye(h), registerContentId: Ye(p) };
  return createComponent$1(te, { get children() {
    return createComponent$1(or.Provider, { value: Tr, get children() {
      return createComponent$1(er, mergeProps({ anchorRef: m, contentRef: f, onCurrentPlacementChange: P }, i));
    } });
  } });
}
function qc(e) {
  const t = `menu-${createUniqueId()}`, n = _({ id: t, modal: true }, e), [o, r] = splitProps(n, ["id", "modal", "preventScroll", "forceMount", "open", "defaultOpen", "onOpenChange", "value"]), s = nr({ open: () => o.open, defaultOpen: () => o.defaultOpen, onOpenChange: (a) => {
    var _a2;
    return (_a2 = o.onOpenChange) == null ? void 0 : _a2.call(o, a);
  } }), i = { isModal: () => {
    var _a2;
    return (_a2 = o.modal) != null ? _a2 : true;
  }, preventScroll: () => {
    var _a2;
    return (_a2 = o.preventScroll) != null ? _a2 : i.isModal();
  }, forceMount: () => {
    var _a2;
    return (_a2 = o.forceMount) != null ? _a2 : false;
  }, generateId: Yt(() => o.id), value: () => o.value };
  return createComponent$1(ir.Provider, { value: i, get children() {
    return createComponent$1(wr, mergeProps({ get open() {
      return s.isOpen();
    }, get onOpenChange() {
      return s.setIsOpen;
    } }, r));
  } });
}
function yn(e) {
  var _a2;
  const t = Se(), n = be(), o = cr(), r = _({ id: t.generateId("trigger") }, e), [s, i] = splitProps(r, ["ref", "id", "disabled", "onPointerDown", "onClick", "onKeyDown", "onMouseOver", "onFocus"]);
  let a;
  o !== void 0 && (a = (_a2 = t.value()) != null ? _a2 : s.id, createEffect(() => {
    o.registerMenu(a, [n.contentRef(), ...n.nestedMenus()]);
  }), createEffect(() => {
    var _a3;
    o.value() === a ? ((_a3 = n.triggerRef()) == null ? void 0 : _a3.focus(), o.autoFocusMenu() && n.open(true)) : n.close(true);
  }), createEffect(() => {
    n.isOpen() && o.setValue(a);
  }), onCleanup(() => {
    o.unregisterMenu(a);
  }), o.lastValue() === void 0 && o.setLastValue(a));
  const c = en(() => n.triggerRef(), () => "button"), l = createMemo(() => {
    var _a3;
    return c() === "a" && ((_a3 = n.triggerRef()) == null ? void 0 : _a3.getAttribute("href")) != null;
  }), u = () => {
    o == null ? void 0 : o.setAutoFocusMenu(true), o !== void 0 ? n.toggle(false) : n.toggle(true), o !== void 0 && !n.isOpen() && o.value() === a && o.closeMenu();
  }, h = (f) => {
    W(f, s.onPointerDown), f.currentTarget.dataset.pointerType = f.pointerType, !s.disabled && f.pointerType !== "touch" && f.button === 0 && u();
  }, g = (f) => {
    W(f, s.onClick), s.disabled || f.currentTarget.dataset.pointerType === "touch" && u();
  }, p = (f) => {
    if (W(f, s.onKeyDown), !s.disabled) {
      if (l())
        switch (f.key) {
          case "Enter":
          case " ":
            return;
        }
      switch (f.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          f.stopPropagation(), f.preventDefault(), ki(f.currentTarget), n.toggle("first");
          break;
        case "ArrowUp":
          f.stopPropagation(), f.preventDefault(), n.toggle("last");
          break;
        case "ArrowRight":
          if (o === void 0)
            break;
          f.stopPropagation(), f.preventDefault(), o.nextMenu();
          break;
        case "ArrowLeft":
          if (o === void 0)
            break;
          f.stopPropagation(), f.preventDefault(), o.previousMenu();
          break;
      }
    }
  }, m = (f) => {
    W(f, s.onMouseOver), !s.disabled && o !== void 0 && o.value() !== void 0 && o.setValue(a);
  }, d = (f) => {
    W(f, s.onFocus), o !== void 0 && o.setValue(a);
  };
  return createEffect(() => onCleanup(n.registerTriggerId(s.id))), createComponent$1(vt, mergeProps({ get id() {
    return s.id;
  }, get disabled() {
    return s.disabled;
  }, "aria-haspopup": "true", get "aria-expanded"() {
    return n.isOpen();
  }, get "aria-controls"() {
    return n.isOpen() ? n.contentId() : void 0;
  }, get "data-highlighted"() {
    return a !== void 0 && (o == null ? void 0 : o.value()) === a ? true : void 0;
  }, get tabIndex() {
    return o !== void 0 ? o.value() === a || o.lastValue() === a ? 0 : -1 : void 0;
  }, onPointerDown: h, onMouseOver: m, onClick: g, onKeyDown: p, onFocus: d, role: o !== void 0 ? "menuitem" : void 0 }, () => n.dataset(), i));
}
function vn(e) {
  const t = Se(), n = be(), [o, r] = splitProps(e, ["onCloseAutoFocus", "onInteractOutside"]);
  let s = false;
  return createComponent$1(Bc, mergeProps({ onCloseAutoFocus: (c) => {
    var _a2;
    (_a2 = o.onCloseAutoFocus) == null ? void 0 : _a2.call(o, c), s || G(n.triggerRef()), s = false, c.preventDefault();
  }, onInteractOutside: (c) => {
    var _a2;
    (_a2 = o.onInteractOutside) == null ? void 0 : _a2.call(o, c), (!t.isModal() || c.detail.isContextMenu) && (s = true);
  } }, r));
}
function wn(e) {
  const t = `dropdownmenu-${createUniqueId()}`, n = _({ id: t }, e);
  return createComponent$1(qc, n);
}
const St = (...e) => twMerge(Jr$1(e)), Zc = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-[color,background-color,box-shadow] focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), ze = (e) => {
  const [t, n] = splitProps(e, ["class", "variant", "size"]);
  return createComponent$1(vt, mergeProps({ get class() {
    return St(Zc({ size: t.size, variant: t.variant }), t.class);
  } }, n));
}, Qc = yn, el = (e) => {
  const t = _({ gutter: 4 }, e);
  return createComponent$1(wn, t);
}, tl = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(pn, { get children() {
    return createComponent$1(vn, mergeProps({ get class() {
      return St("min-w-8rem z-50 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95", t.class);
    } }, n));
  } });
}, Lt = (e) => {
  const [t, n] = splitProps(e, ["class", "inset"]);
  return createComponent$1(mn, mergeProps({ get class() {
    return St("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t.inset && "pl-8", t.class);
  } }, n));
};
var nl = ["<svg", ' xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"></path></svg>'], ol = ["<span", ">Light</span>"], rl = ["<svg", ' xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path></svg>'], sl = ["<span", ">Dark</span>"], il = ["<svg", ' xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h18M5 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path></svg>'], al = ["<span", ">System</span>"], cl = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"></path></svg>'], ll = ["<svg", ' xmlns="http://www.w3.org/2000/svg" class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path></svg>'], ul = ["<span", ' class="sr-only">Toggle theme</span>'];
const dl = ({ ...e }) => {
  const { setColorMode: t } = z();
  return createComponent$1(el, { placement: "bottom-end", get children() {
    return [createComponent$1(Qc, { as: (n) => createComponent$1(ze, mergeProps({ variant: "ghost", size: "icon", get class() {
      return St("w-9 px-0", e.class);
    } }, n, { get children() {
      return [ssr(cl, ssrHydrationKey()), ssr(ll, ssrHydrationKey()), ssr(ul, ssrHydrationKey())];
    } })) }), createComponent$1(tl, { class: "min-w-[8rem]", get children() {
      return [createComponent$1(Lt, { onSelect: () => t("light"), get children() {
        return [ssr(nl, ssrHydrationKey()), ssr(ol, ssrHydrationKey())];
      } }), createComponent$1(Lt, { onSelect: () => t("dark"), get children() {
        return [ssr(rl, ssrHydrationKey()), ssr(sl, ssrHydrationKey())];
      } }), createComponent$1(Lt, { onSelect: () => t("system"), get children() {
        return [ssr(il, ssrHydrationKey()), ssr(al, ssrHydrationKey())];
      } })];
    } })];
  } });
};
var fl = ["<svg", ' class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'], hl = ["<header", ' class="container mx-auto mb-5 border-b"><nav class="flex flex-row items-center py-4"><h1 class="text-xl font-extrabold mb-0 mr-5">TinyMCE Solid Component</h1><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></nav></header>"];
const gl = (e) => {
  const [, , t] = c();
  return ssr(hl, ssrHydrationKey(), escape(createComponent$1(Show, { get when() {
    return !e.location.pathname.startsWith("/tinymce");
  }, get children() {
    return createComponent$1(ze, { as: "a", variant: "ghost", href: "/tinymce", children: "Edit" });
  } })), escape(createComponent$1(Show, { get when() {
    return e.location.pathname != "/";
  }, get children() {
    return createComponent$1(ze, { as: "a", variant: "ghost", href: "/", children: "Preview" });
  } })), escape(createComponent$1(ze, { onclick: () => t(), variant: "ghost", children: "Clear" })), escape(createComponent$1(ze, { class: "h-9 w-9 px-0 ml-auto", as: "a", href: "https://github.com/thednp/tinymce-solid", variant: "ghost", get children() {
    return ssr(fl, ssrHydrationKey());
  } })), escape(createComponent$1(dl, {})));
};
var ml = ["<footer", ' class="container mx-auto flex flex-col lg:flex-row justify-between py-5 border-t text-sm"><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p><p><a class="font-bold" href="https://github.com/thednp" target="_blank">thednp</a> \xA9 <!--$-->', "<!--/--></p></footer>"];
const pl = () => ssr(ml, ssrHydrationKey(), escape((/* @__PURE__ */ new Date()).getFullYear()));
function yl() {
  return createComponent$1(js, { root: (e) => createComponent$1(I$1, { get children() {
    return [createComponent$1(k, { children: "SolidStart - Basic" }), createComponent$1(B, {}), createComponent$1(U$1, { get children() {
      return [createComponent$1(gl, e), createComponent$1(Suspense, { get children() {
        return e.children;
      } }), createComponent$1(pl, {})];
    } })];
  } }), get children() {
    return createComponent$1(ii, {});
  } });
}
var vl = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], wl = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const bl = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(vl, ssrHydrationKey(), escape(t)), createComponent$1(u, { code: 500 })]), get children() {
    return e.children;
  } });
}, Sl = (e) => {
  let t = false;
  const n = catchError(() => e.children, (o) => {
    console.error(o), t = !!o;
  });
  return t ? [ssr(wl, ssrHydrationKey()), createComponent$1(u, { code: 500 })] : n;
};
var eo = ["<script", ">", "<\/script>"], xl = ["<script", ' type="module"', " async", "><\/script>"], El = ["<script", ' type="module" async', "><\/script>"];
const Cl = ssr("<!DOCTYPE html>");
function Er(e, t, n = []) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (r.path !== e[0].path)
      continue;
    let s = [...n, r];
    if (r.children) {
      const i = e.slice(1);
      if (i.length === 0 || (s = Er(i, r.children, s), !s))
        continue;
    }
    return s;
  }
}
function Pl(e) {
  const t = getRequestEvent(), n = t.nonce;
  let o = [];
  return Promise.resolve().then(async () => {
    let r = [];
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); )
        s.shift();
      const i = s.length && Er(s, t.routes);
      if (i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a], l = globalThis.MANIFEST.client.inputs[c.$component.src];
          r.push(l.assets());
        }
    }
    o = await Promise.all(r).then((s) => [...new Map(s.flat().map((i) => [i.attrs.key, i])).values()].filter((i) => i.attrs.rel === "modulepreload" && !t.assets.find((a) => a.attrs.key === i.attrs.key)));
  }), useAssets(() => o.length ? o.map((r) => kt(r)) : void 0), createComponent$1(NoHydration, { get children() {
    return [Cl, createComponent$1(Sl, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((r) => kt(r, n))];
      }, get scripts() {
        return n ? [ssr(eo, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(xl, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(eo, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(El, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(bl, { get children() {
            return createComponent$1(yl, {});
          } });
        } });
      } });
    } })];
  } });
}
function Tl(e = {}) {
  let t, n = false;
  const o = (i) => {
    if (t && t !== i)
      throw new Error("Context conflict");
  };
  let r;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? r = new i() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const s = () => {
    if (r && t === void 0) {
      const i = r.getStore();
      if (i !== void 0)
        return i;
    }
    return t;
  };
  return { use: () => {
    const i = s();
    if (i === void 0)
      throw new Error("Context is not available");
    return i;
  }, tryUse: () => s(), set: (i, a) => {
    a || o(i), t = i, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (i, a) => {
    o(i), t = i;
    try {
      return r ? r.run(i, a) : a();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(i, a) {
    t = i;
    const c = () => {
      t = i;
    }, l = () => t === i ? c : void 0;
    oo.add(l);
    try {
      const u = r ? r.run(i, a) : a();
      return n || (t = void 0), await u;
    } finally {
      oo.delete(l);
    }
  } };
}
function Ml(e = {}) {
  const t = {};
  return { get(n, o = {}) {
    return t[n] || (t[n] = Tl({ ...e, ...o })), t[n], t[n];
  } };
}
const mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, to = "__unctx__", Al = mt[to] || (mt[to] = Ml()), Ol = (e, t = {}) => Al.get(e, t), no = "__unctx_async_handlers__", oo = mt[no] || (mt[no] = /* @__PURE__ */ new Set());
function Ll(e) {
  let t;
  const n = Pr(e), o = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: e.node.req.body }) : new Request(n, { ...o, get body() {
    return t || (t = Vl(e), t);
  } });
}
function Il(e) {
  var _a2;
  return (_a2 = e.web) != null ? _a2 : e.web = { request: Ll(e), url: Pr(e) }, e.web.request;
}
function Rl() {
  return zl();
}
const Cr = Symbol("$HTTPEvent");
function Dl(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Cr]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function X(e) {
  return function(...t) {
    var _a2;
    let n = t[0];
    if (Dl(n))
      t[0] = n instanceof H3Event || n.__is_event__ ? n : n[Cr];
    else {
      if (!((_a2 = globalThis.app.config.server.experimental) == null ? void 0 : _a2.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Rl(), !n)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Pr = X(getRequestURL), kl = X(getRequestIP), Ht = X(setResponseStatus), ro = X(getResponseStatus), Kl = X(getResponseStatusText), ct = X(getResponseHeaders), so = X(getResponseHeader), Fl = X(setResponseHeader), Nl = X(appendResponseHeader), io = X(sendRedirect), $l = X(getCookie), _l = X(setCookie), Bl = X(setHeader), Vl = X(getRequestWebStream), Hl = X(removeResponseHeader), Ul = X(Il);
function Wl() {
  var _a2;
  return Ol("nitro-app", { asyncContext: !!((_a2 = globalThis.app.config.server.experimental) == null ? void 0 : _a2.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function zl() {
  return Wl().use().event;
}
const It = Symbol("fetchEvent");
function jl(e) {
  return { request: Ul(e), response: Yl(e), clientAddress: kl(e), locals: {}, nativeEvent: e };
}
function ql(e) {
  if (!e[It]) {
    const t = jl(e);
    e[It] = t;
  }
  return e[It];
}
class Gl {
  constructor(t) {
    J(this, "event");
    this.event = t;
  }
  get(t) {
    const n = so(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return Fl(this.event, t, n);
  }
  delete(t) {
    return Hl(this.event, t);
  }
  append(t, n) {
    Nl(this.event, t, n);
  }
  getSetCookie() {
    const t = so(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(ct(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(", ") : o, n, this));
  }
  entries() {
    return Object.entries(ct(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(ct(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(ct(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function Yl(e) {
  return { get status() {
    return ro(e);
  }, set status(t) {
    Ht(e, t);
  }, get statusText() {
    return Kl(e);
  }, set statusText(t) {
    Ht(e, ro(), t);
  }, headers: new Gl(e) };
}
function Xl(e) {
  const t = $l(e.nativeEvent, "flash");
  if (!t)
    return;
  let n = JSON.parse(t);
  if (!n || !n.result)
    return;
  const o = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])];
  return _l(e.nativeEvent, "flash", "", { maxAge: 0 }), { input: o, url: n.url, pending: false, result: n.error ? new Error(n.result) : n.result };
}
async function Jl(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: Xl(e) }, routes: Po(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const Zl = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function Ut(e) {
  return e.status && Zl.has(e.status) ? e.status : 302;
}
function Ql(e, t, n = {}) {
  return eventHandler({ handler: (o) => {
    const r = ql(o);
    return provideRequestEvent(r, async () => {
      const s = oi(new URL(r.request.url).pathname, r.request.method);
      if (s) {
        const p = (await s.handler.import())[r.request.method];
        r.params = s.params || {}, sharedConfig.context = { event: r };
        const m = await p(r);
        if (m !== void 0)
          return m;
        if (r.request.method !== "GET")
          throw new Error(`API handler for ${r.request.method} "${r.request.url}" did not return a response.`);
      }
      const i = await t(r), a = typeof n == "function" ? await n(i) : { ...n }, c = a.mode || "stream";
      if (a.nonce && (i.nonce = a.nonce), c === "sync") {
        const g = renderToString(() => (sharedConfig.context.event = i, e(i)), a);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const p = Ut(i.response);
          return io(o, i.response.headers.get("Location"), p);
        }
        return g;
      }
      if (a.onCompleteAll) {
        const g = a.onCompleteAll;
        a.onCompleteAll = (p) => {
          co(i)(p), g(p);
        };
      } else
        a.onCompleteAll = co(i);
      if (a.onCompleteShell) {
        const g = a.onCompleteShell;
        a.onCompleteShell = (p) => {
          ao(i, o)(), g(p);
        };
      } else
        a.onCompleteShell = ao(i, o);
      const l = renderToStream(() => (sharedConfig.context.event = i, e(i)), a);
      if (i.response && i.response.headers.get("Location")) {
        const g = Ut(i.response);
        return io(o, i.response.headers.get("Location"), g);
      }
      if (c === "async")
        return l;
      const { writable: u, readable: h } = new TransformStream();
      return l.pipeTo(u), h;
    });
  } });
}
function ao(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = Ut(e.response);
      Ht(t, n), Bl(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function co(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function eu(e, t) {
  return Ql(e, Jl, t);
}
var tu = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], nu = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const yu = eu(() => createComponent$1(Pl, { document: ({ assets: e, children: t, scripts: n }) => ssr(nu, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(tu, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: si$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: yu, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { nodeServer as a, node$1 as n, ri$1 as r };
//# sourceMappingURL=runtime.mjs.map
