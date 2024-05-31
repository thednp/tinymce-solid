import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { createSignal, onMount, onCleanup } from 'solid-js';
import * as n from 'prop-types';

const Q = "./assets/tinymce/tinymce.min.js", F = { onActivate: n.func, onAddUndo: n.func, onBeforeAddUndo: n.func, onBeforeExecCommand: n.func, onBeforeGetContent: n.func, onBeforeRenderUI: n.func, onBeforeSetContent: n.func, onBeforePaste: n.func, onBlur: n.func, onChange: n.func, onClearUndos: n.func, onClick: n.func, onContextMenu: n.func, onCommentChange: n.func, onCompositionEnd: n.func, onCompositionStart: n.func, onCompositionUpdate: n.func, onCopy: n.func, onCut: n.func, onDblclick: n.func, onDeactivate: n.func, onDirty: n.func, onDrag: n.func, onDragDrop: n.func, onDragEnd: n.func, onDragGesture: n.func, onDragOver: n.func, onDrop: n.func, onExecCommand: n.func, onFocus: n.func, onFocusIn: n.func, onFocusOut: n.func, onGetContent: n.func, onHide: n.func, onInit: n.func, onInput: n.func, onKeyDown: n.func, onKeyPress: n.func, onKeyUp: n.func, onLoadContent: n.func, onMouseDown: n.func, onMouseEnter: n.func, onMouseLeave: n.func, onMouseMove: n.func, onMouseOut: n.func, onMouseOver: n.func, onMouseUp: n.func, onNodeChange: n.func, onObjectResizeStart: n.func, onObjectResized: n.func, onObjectSelected: n.func, onPaste: n.func, onPostProcess: n.func, onPostRender: n.func, onPreProcess: n.func, onProgressState: n.func, onRedo: n.func, onRemove: n.func, onReset: n.func, onSaveContent: n.func, onSelectionChange: n.func, onSetAttrib: n.func, onSetContent: n.func, onShow: n.func, onSubmit: n.func, onUndo: n.func, onVisualAid: n.func, onSkinLoadError: n.func, onThemeLoadError: n.func, onModelLoadError: n.func, onPluginLoadError: n.func, onIconsLoadError: n.func, onLanguageLoadError: n.func, onScriptsLoad: n.func, onScriptsLoadError: n.func }, W = { apiKey: n.string, licenseKey: n.string, id: n.string, inline: n.bool, init: n.object, initialValue: n.string, onEditorChange: n.func, value: n.string, tagName: n.string, tabIndex: n.number, cloudChannel: n.string, plugins: n.oneOfType([n.string, n.array]), toolbar: n.oneOfType([n.string, n.array]), disabled: n.bool, textareaName: n.string, tinymceScriptSrc: n.oneOfType([n.string, n.arrayOf(n.string), n.arrayOf(n.shape({ src: n.string, async: n.bool, defer: n.bool }))]), rollback: n.oneOfType([n.number, n.oneOf([false])]), scriptLoading: n.shape({ async: n.bool, defer: n.bool, delay: n.number }), ...F }, K = (o) => typeof o == "function", j = (o) => o in F, H = (o) => o.substr(2), X = (o, e, i, a, c, l, s) => {
  const u = Object.keys(c).filter(j), y = Object.keys(l).filter(j), h = u.filter((g) => l[g] === void 0), C = y.filter((g) => c[g] === void 0);
  h.forEach((g) => {
    const m = H(g), f = s[m];
    i(m, f), delete s[m];
  }), C.forEach((g) => {
    const m = a(o, g), f = H(g);
    s[f] = m, e(f, m);
  });
}, Y = (o, e, i, a, c) => X(c, o.on.bind(o), o.off.bind(o), (l, s) => (u) => {
  var _a;
  return (_a = l(s)) == null ? void 0 : _a(u, o);
}, e, i, a);
let V = 0;
const R = (o) => {
  const e = Date.now(), i = Math.floor(Math.random() * 1e9);
  return V++, o + "_" + i + V + String(e);
}, U = (o) => o !== null && (o.tagName.toLowerCase() === "textarea" || o.tagName.toLowerCase() === "input"), z = (o) => typeof o > "u" || o === "" ? [] : Array.isArray(o) ? o : o.split(" "), Z = (o, e) => z(o).concat(z(e)), nn = () => window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function", en = (o) => {
  if (!("isConnected" in Node.prototype)) {
    let e = o, i = o.parentNode;
    for (; i != null; )
      e = i, i = e.parentNode;
    return e === o.ownerDocument;
  }
  return o.isConnected;
}, on = (o, e) => {
  o !== void 0 && (o.mode != null && typeof o.mode == "object" && typeof o.mode.set == "function" ? o.mode.set(e) : o.setMode(e));
}, tn = (o, e, i) => {
  var _a, _b;
  const a = o.createElement("script");
  a.referrerPolicy = "origin", a.type = "application/javascript", a.id = e.id, a.src = e.src, a.async = (_a = e.async) != null ? _a : false, a.defer = (_b = e.defer) != null ? _b : false;
  const c = () => {
    a.removeEventListener("load", c), a.removeEventListener("error", l), i(e.src);
  }, l = (s) => {
    a.removeEventListener("load", c), a.removeEventListener("error", l), i(e.src, s);
  };
  a.addEventListener("load", c), a.addEventListener("error", l), o.head && o.head.appendChild(a);
}, rn = (o) => {
  let e = {};
  const i = (s, u) => {
    const y = e[s];
    y.done = true, y.error = u;
    for (const h of y.handlers)
      h(s, u);
    y.handlers = [];
  };
  return { loadScripts: (s, u, y) => {
    const h = (f) => y !== void 0 ? y(f) : console.error(f);
    if (s.length === 0) {
      h(new Error("At least one script must be provided"));
      return;
    }
    let C = 0, g = false;
    const m = (f, b) => {
      g || (b ? (g = true, h(b)) : ++C === s.length && u());
    };
    for (const f of s) {
      const b = e[f.src];
      if (b)
        b.done ? m(f.src, b.error) : b.handlers.push(m);
      else {
        const D = R("tiny-");
        e[f.src] = { id: D, src: f.src, done: false, error: null, handlers: [m] }, tn(o, { id: D, ...f }, i);
      }
    }
  }, deleteScripts: () => {
    var _a;
    for (const s of Object.values(e)) {
      const u = o.getElementById(s.id);
      u != null && u.tagName === "SCRIPT" && ((_a = u.parentNode) == null ? void 0 : _a.removeChild(u));
    }
    e = {};
  }, getDocument: () => o };
}, cn = () => {
  const o = [], e = (c) => {
    let l = o.find((s) => s.getDocument() === c);
    return l === void 0 && (l = rn(c), o.push(l)), l;
  };
  return { loadList: (c, l, s, u, y) => {
    const h = () => e(c).loadScripts(l, u, y);
    s > 0 ? setTimeout(h, s) : h();
  }, reinitialize: () => {
    for (let c = o.pop(); c != null; c = o.pop())
      c.deleteScripts();
  } };
}, sn = cn(), N = (o) => {
  const e = o;
  return e && e.tinymce ? e.tinymce : null;
};
var an = ["<div", ' style="', '"', "></div>"], ln = ["<textarea", ' style="', '"', "></textarea>"];
const un = (o) => {
  const e = { ...o, tinymceScriptSrc: Q }, [i, a] = createSignal(), [c, l] = createSignal(), [s, u] = createSignal(), [y, h] = createSignal(), [C, g] = createSignal({}), m = () => {
    var _a, _b;
    return (_b = (_a = e == null ? void 0 : e.elementRef) == null ? void 0 : _a.ownerDocument.defaultView) != null ? _b : window;
  }, f = () => typeof e.initialValue == "string" ? e.initialValue : typeof e.value == "string" ? e.value : "", b = () => {
    var _a, _b;
    const r = (_a = e.scriptLoading) == null ? void 0 : _a.async, t = (_b = e.scriptLoading) == null ? void 0 : _b.defer;
    if (e.tinymceScriptSrc !== void 0)
      return typeof e.tinymceScriptSrc == "string" ? [{ src: e.tinymceScriptSrc, async: r, defer: t }] : e.tinymceScriptSrc.map((v) => typeof v == "string" ? { src: v, async: r, defer: t } : v);
    const d = e.cloudChannel || "7";
    return [{ src: `https://cdn.tiny.cloud/1/${e.apiKey ? e.apiKey : "no-api-key"}/tinymce/${d}/tinymce.min.js`, async: r, defer: t }];
  }, D = (r) => {
    if (i() !== void 0) {
      const t = i();
      Y(t, r, e, C(), (v) => e[v]);
      const d = (v) => v.onEditorChange !== void 0 || v.value !== void 0, k = d(r), p = d(e);
      !k && p ? (t.on(O(), E), t.on(B(), w), t.on("keydown", P), t.on("keyup", M), t.on("NewBlock", E)) : k && !p && (t.off(O(), E), t.off(B(), w), t.off("keydown", P), t.off("keyup", M), t.off("NewBlock", E));
    }
  }, T = (r = 0) => {
    var _a, _b, _c;
    const t = e.elementRef;
    if (!t)
      return;
    if (!en(t)) {
      if (r === 0)
        setTimeout(() => T(1), 1);
      else if (r < 100)
        setTimeout(() => T(r + 1), 100);
      else
        throw new Error("tinymce can only be initialised when in a document");
      return;
    }
    const d = N(m());
    if (!d)
      throw new Error("tinymce should have been loaded into global scope");
    const k = { ...e.init, selector: void 0, target: t, skin: e.skin || "oxide", content_css: e.contentCss || "default", readonly: e.disabled, inline: e.inline, plugins: Z((_a = e.init) == null ? void 0 : _a.plugins, e.plugins), toolbar: (_c = e.toolbar) != null ? _c : (_b = e.init) == null ? void 0 : _b.toolbar, ...e.licenseKey ? { license_key: e.licenseKey } : {}, setup: (p) => {
      a(p), D({}), e.inline && !U(t) && p.once("PostRender", (v) => {
        p.setContent(f(), { no_events: true });
      }), e.init && K(e.init.setup) && e.init.setup(p);
    }, init_instance_callback: (p) => {
      var _a2, _b2;
      const v = f();
      let x = (_a2 = c()) != null ? _a2 : p.getContent();
      x !== v && (x = v, p.setContent(v), p.undoManager.clear(), p.undoManager.add(), p.setDirty(false)), l(x);
      const G = (_b2 = e.disabled) != null ? _b2 : false;
      on(p, G ? "readonly" : "design"), e.init && K(e.init.init_instance_callback) && e.init.init_instance_callback(p);
    } };
    e.inline || (t.style.visibility = ""), U(t) && (t.value = f()), d.init(k);
  };
  onMount(() => {
    var _a, _b, _c;
    if (N(m()) !== null)
      T();
    else {
      if (Array.isArray(e.tinymceScriptSrc) && e.tinymceScriptSrc.length === 0)
        throw new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array.");
      if ((_a = e == null ? void 0 : e.elementRef) == null ? void 0 : _a.ownerDocument) {
        const r = () => {
          T();
        }, t = (d) => {
          throw new Error(d);
        };
        sn.loadList(e.elementRef.ownerDocument, b(), (_c = (_b = e.scriptLoading) == null ? void 0 : _b.delay) != null ? _c : 0, r, t);
      }
    }
  }), onCleanup(() => {
    const r = i();
    typeof r < "u" && (r.off(O(), E), r.off(B(), w), r.off("keypress", M), r.off("keydown", P), r.off("NewBlock", E), Object.keys(C()).forEach((t) => {
      r.off(t, C()[t]);
    }), g({}), r.remove(), a(void 0));
  });
  const O = () => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = N(m())) == null ? void 0 : _a.Env) == null ? void 0 : _b.browser) == null ? void 0 : _c.isIE()) ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
  }, B = () => nn() ? "beforeinput SelectionChange" : "SelectionChange", E = (r) => {
    const t = i();
    if (t && t.initialized) {
      const d = t.getContent();
      e.value !== void 0 && e.value !== d && e.rollback !== false && (s() || u(window.setTimeout($, typeof e.rollback == "number" ? e.rollback : 200))), d !== c() && (l(d), K(e.onEditorChange) && e.onEditorChange(d, t));
    }
  }, $ = () => {
    const r = i(), t = e.value;
    r && t && t !== c() && r.undoManager.ignore(() => {
      if (r.setContent(t), y() && (!e.inline || r.hasFocus()))
        try {
          r.selection.moveToBookmark(y());
        } catch {
        }
    }), u(void 0);
  }, w = (r) => {
    const t = i();
    if (e.value !== void 0 && e.value === c() && t && (!e.inline || t.hasFocus()))
      try {
        h(t.selection.getBookmark(3));
      } catch {
      }
  }, M = (r) => {
    (r.key === "Enter" || r.key === "Backspace" || r.key === "Delete") && w();
  }, P = (r) => {
    (r.key === "Enter" || r.key === "Backspace" || r.key === "Delete") && w();
  };
  return e.inline ? ssr(an, ssrHydrationKey(), "display:" + (i() ? "" : "none"), ssrAttribute("id", escape(e.id, true) || escape(R("solid-tinymce-editor"), true), false) + ssrAttribute("tabindex", escape(e.tabIndex, true), false)) : ssr(ln, ssrHydrationKey(), "display:" + (i() ? "" : "none"), ssrAttribute("id", escape(e.id, true) || escape(R("solid-tinymce-editor"), true), false) + ssrAttribute("tabindex", escape(e.tabIndex, true), false));
};
un.EditorPropTypes = W;

export { un as default };
//# sourceMappingURL=index-DZcDRtdq.mjs.map
