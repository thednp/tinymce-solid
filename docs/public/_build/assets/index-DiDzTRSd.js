import{b as w,F as Q,l as X,n as M,G as j,d as A,H as P,x as z}from"./index-B6plH8Gl.js";const Z="./assets/tinymce/tinymce.min.js";var W={exports:{}},ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=ee,te=ne;function G(){}function $(){}$.resetWarningCache=G;var oe=function(){function t(l,s,f,a,d,m){if(m!==te){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}t.isRequired=t;function n(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:$,resetWarningCache:G};return c.PropTypes=c,c};W.exports=oe();var e=W.exports;const q={onActivate:e.func,onAddUndo:e.func,onBeforeAddUndo:e.func,onBeforeExecCommand:e.func,onBeforeGetContent:e.func,onBeforeRenderUI:e.func,onBeforeSetContent:e.func,onBeforePaste:e.func,onBlur:e.func,onChange:e.func,onClearUndos:e.func,onClick:e.func,onContextMenu:e.func,onCommentChange:e.func,onCompositionEnd:e.func,onCompositionStart:e.func,onCompositionUpdate:e.func,onCopy:e.func,onCut:e.func,onDblclick:e.func,onDeactivate:e.func,onDirty:e.func,onDrag:e.func,onDragDrop:e.func,onDragEnd:e.func,onDragGesture:e.func,onDragOver:e.func,onDrop:e.func,onExecCommand:e.func,onFocus:e.func,onFocusIn:e.func,onFocusOut:e.func,onGetContent:e.func,onHide:e.func,onInit:e.func,onInput:e.func,onKeyDown:e.func,onKeyPress:e.func,onKeyUp:e.func,onLoadContent:e.func,onMouseDown:e.func,onMouseEnter:e.func,onMouseLeave:e.func,onMouseMove:e.func,onMouseOut:e.func,onMouseOver:e.func,onMouseUp:e.func,onNodeChange:e.func,onObjectResizeStart:e.func,onObjectResized:e.func,onObjectSelected:e.func,onPaste:e.func,onPostProcess:e.func,onPostRender:e.func,onPreProcess:e.func,onProgressState:e.func,onRedo:e.func,onRemove:e.func,onReset:e.func,onSaveContent:e.func,onSelectionChange:e.func,onSetAttrib:e.func,onSetContent:e.func,onShow:e.func,onSubmit:e.func,onUndo:e.func,onVisualAid:e.func,onSkinLoadError:e.func,onThemeLoadError:e.func,onModelLoadError:e.func,onPluginLoadError:e.func,onIconsLoadError:e.func,onLanguageLoadError:e.func,onScriptsLoad:e.func,onScriptsLoadError:e.func},re={apiKey:e.string,licenseKey:e.string,id:e.string,inline:e.bool,init:e.object,initialValue:e.string,onEditorChange:e.func,value:e.string,tagName:e.string,tabIndex:e.number,cloudChannel:e.string,plugins:e.oneOfType([e.string,e.array]),toolbar:e.oneOfType([e.string,e.array]),disabled:e.bool,textareaName:e.string,tinymceScriptSrc:e.oneOfType([e.string,e.arrayOf(e.string),e.arrayOf(e.shape({src:e.string,async:e.bool,defer:e.bool}))]),rollback:e.oneOfType([e.number,e.oneOf([!1])]),scriptLoading:e.shape({async:e.bool,defer:e.bool,delay:e.number}),...q},x=t=>typeof t=="function",K=t=>t in q,H=t=>t.substr(2),ie=(t,n,c,l,s,f,a)=>{const d=Object.keys(s).filter(K),m=Object.keys(f).filter(K),g=d.filter(h=>f[h]===void 0),C=m.filter(h=>s[h]===void 0);g.forEach(h=>{const v=H(h),y=a[v];c(v,y),delete a[v]}),C.forEach(h=>{const v=l(t,h),y=H(h);a[y]=v,n(y,v)})},ce=(t,n,c,l,s)=>ie(s,t.on.bind(t),t.off.bind(t),(f,a)=>d=>f(a)?.(d,t),n,c,l);let F=0;const B=t=>{const n=Date.now(),c=Math.floor(Math.random()*1e9);return F++,t+"_"+c+F+String(n)},U=t=>t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input"),V=t=>typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" "),se=(t,n)=>V(t).concat(V(n)),ae=()=>window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function",le=t=>{if(!("isConnected"in Node.prototype)){let n=t,c=t.parentNode;for(;c!=null;)n=c,c=n.parentNode;return n===t.ownerDocument}return t.isConnected},ue=(t,n)=>{t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(n):t.setMode(n))},fe=(t,n,c)=>{const l=t.createElement("script");l.referrerPolicy="origin",l.type="application/javascript",l.id=n.id,l.src=n.src,l.async=n.async??!1,l.defer=n.defer??!1;const s=()=>{l.removeEventListener("load",s),l.removeEventListener("error",f),c(n.src)},f=a=>{l.removeEventListener("load",s),l.removeEventListener("error",f),c(n.src,a)};l.addEventListener("load",s),l.addEventListener("error",f),t.head&&t.head.appendChild(l)},de=t=>{let n={};const c=(a,d)=>{const m=n[a];m.done=!0,m.error=d;for(const g of m.handlers)g(a,d);m.handlers=[]};return{loadScripts:(a,d,m)=>{const g=y=>m!==void 0?m(y):console.error(y);if(a.length===0){g(new Error("At least one script must be provided"));return}let C=0,h=!1;const v=(y,E)=>{h||(E?(h=!0,g(E)):++C===a.length&&d())};for(const y of a){const E=n[y.src];if(E)E.done?v(y.src,E.error):E.handlers.push(v);else{const T=B("tiny-");n[y.src]={id:T,src:y.src,done:!1,error:null,handlers:[v]},fe(t,{id:T,...y},c)}}},deleteScripts:()=>{for(const a of Object.values(n)){const d=t.getElementById(a.id);d!=null&&d.tagName==="SCRIPT"&&d.parentNode?.removeChild(d)}n={}},getDocument:()=>t}},pe=()=>{const t=[],n=s=>{let f=t.find(a=>a.getDocument()===s);return f===void 0&&(f=de(s),t.push(f)),f};return{loadList:(s,f,a,d,m)=>{const g=()=>n(s).loadScripts(f,d,m);a>0?setTimeout(g,a):g()},reinitialize:()=>{for(let s=t.pop();s!=null;s=t.pop())s.deleteScripts()}}},ye=pe(),N=t=>{const n=t;return n&&n.tinymce?n.tinymce:null};var me=z("<div>"),ge=z("<textarea>");const ve=t=>{const n={...t,tinymceScriptSrc:Z},[c,l]=w(),[s,f]=w(),[a,d]=w(),[m,g]=w(),[C,h]=w({}),v=()=>n?.elementRef?.ownerDocument.defaultView??window,y=()=>typeof n.initialValue=="string"?n.initialValue:typeof n.value=="string"?n.value:"",E=()=>{const o=n.scriptLoading?.async,r=n.scriptLoading?.defer;if(n.tinymceScriptSrc!==void 0)return typeof n.tinymceScriptSrc=="string"?[{src:n.tinymceScriptSrc,async:o,defer:r}]:n.tinymceScriptSrc.map(p=>typeof p=="string"?{src:p,async:o,defer:r}:p);const i=n.cloudChannel||"7";return[{src:`https://cdn.tiny.cloud/1/${n.apiKey?n.apiKey:"no-api-key"}/tinymce/${i}/tinymce.min.js`,async:o,defer:r}]},T=o=>{if(c()!==void 0){const r=c();ce(r,o,n,C(),p=>n[p]);const i=p=>p.onEditorChange!==void 0||p.value!==void 0,b=i(o),u=i(n);!b&&u?(r.on(R(),S),r.on(O(),k),r.on("keydown",I),r.on("keyup",D),r.on("NewBlock",S)):b&&!u&&(r.off(R(),S),r.off(O(),k),r.off("keydown",I),r.off("keyup",D),r.off("NewBlock",S))}},L=(o=0)=>{const r=n.elementRef;if(!r)return;if(!le(r)){if(o===0)setTimeout(()=>L(1),1);else if(o<100)setTimeout(()=>L(o+1),100);else throw new Error("tinymce can only be initialised when in a document");return}const i=N(v());if(!i)throw new Error("tinymce should have been loaded into global scope");const b={...n.init,selector:void 0,target:r,skin:n.skin||"oxide",content_css:n.contentCss||"default",readonly:n.disabled,inline:n.inline,plugins:se(n.init?.plugins,n.plugins),toolbar:n.toolbar??n.init?.toolbar,...n.licenseKey?{license_key:n.licenseKey}:{},setup:u=>{l(u),T({}),n.inline&&!U(r)&&u.once("PostRender",p=>{u.setContent(y(),{no_events:!0})}),n.init&&x(n.init.setup)&&n.init.setup(u)},init_instance_callback:u=>{const p=y();let _=s()??u.getContent();_!==p&&(_=p,u.setContent(p),u.undoManager.clear(),u.undoManager.add(),u.setDirty(!1)),f(_);const Y=n.disabled??!1;ue(u,Y?"readonly":"design"),n.init&&x(n.init.init_instance_callback)&&n.init.init_instance_callback(u)}};n.inline||(r.style.visibility=""),U(r)&&(r.value=y()),i.init(b)};Q(()=>{if(N(v())!==null)L();else{if(Array.isArray(n.tinymceScriptSrc)&&n.tinymceScriptSrc.length===0)throw new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array.");if(n?.elementRef?.ownerDocument){const o=()=>{L()},r=i=>{throw new Error(i)};ye.loadList(n.elementRef.ownerDocument,E(),n.scriptLoading?.delay??0,o,r)}}}),X(()=>{const o=c();typeof o<"u"&&(o.off(R(),S),o.off(O(),k),o.off("keypress",D),o.off("keydown",I),o.off("NewBlock",S),Object.keys(C()).forEach(r=>{o.off(r,C()[r])}),h({}),o.remove(),l(void 0))});const R=()=>N(v())?.Env?.browser?.isIE()?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange",O=()=>ae()?"beforeinput SelectionChange":"SelectionChange",S=o=>{const r=c();if(r&&r.initialized){const i=r.getContent();n.value!==void 0&&n.value!==i&&n.rollback!==!1&&(a()||d(window.setTimeout(J,typeof n.rollback=="number"?n.rollback:200))),i!==s()&&(f(i),x(n.onEditorChange)&&n.onEditorChange(i,r))}},J=()=>{const o=c(),r=n.value;o&&r&&r!==s()&&o.undoManager.ignore(()=>{if(o.setContent(r),m()&&(!n.inline||o.hasFocus()))try{o.selection.moveToBookmark(m())}catch{}}),d(void 0)},k=o=>{const r=c();if(n.value!==void 0&&n.value===s()&&r&&(!n.inline||r.hasFocus()))try{g(r.selection.getBookmark(3))}catch{}},D=o=>{(o.key==="Enter"||o.key==="Backspace"||o.key==="Delete")&&k()},I=o=>{(o.key==="Enter"||o.key==="Backspace"||o.key==="Delete")&&k()};return n.inline?(()=>{var o=M(me),r=n.elementRef;return typeof r=="function"?j(r,o):n.elementRef=o,A(i=>{var b=c()?"":"none",u=n.id||B("solid-tinymce-editor"),p=n.tabIndex;return b!==i.e&&((i.e=b)!=null?o.style.setProperty("display",b):o.style.removeProperty("display")),u!==i.t&&P(o,"id",i.t=u),p!==i.a&&P(o,"tabindex",i.a=p),i},{e:void 0,t:void 0,a:void 0}),o})():(()=>{var o=M(ge),r=n.elementRef;return typeof r=="function"?j(r,o):n.elementRef=o,A(i=>{var b=c()?"":"none",u=n.id||B("solid-tinymce-editor"),p=n.tabIndex;return b!==i.e&&((i.e=b)!=null?o.style.setProperty("display",b):o.style.removeProperty("display")),u!==i.t&&P(o,"id",i.t=u),p!==i.a&&P(o,"tabindex",i.a=p),i},{e:void 0,t:void 0,a:void 0}),o})()};ve.EditorPropTypes=re;export{ve as default};
