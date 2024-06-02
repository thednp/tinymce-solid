import { use, effect, setAttribute, template } from 'solid-js/web';
import { createSignal, createEffect, on, onMount, onCleanup } from 'solid-js';
import * as PropTypes from 'prop-types';

// src/components/SolidEditor.tsx
var eventPropTypes = {
  onActivate: PropTypes.func,
  onAddUndo: PropTypes.func,
  onBeforeAddUndo: PropTypes.func,
  onBeforeExecCommand: PropTypes.func,
  onBeforeGetContent: PropTypes.func,
  onBeforeRenderUI: PropTypes.func,
  onBeforeSetContent: PropTypes.func,
  onBeforePaste: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClearUndos: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onCommentChange: PropTypes.func,
  onCompositionEnd: PropTypes.func,
  onCompositionStart: PropTypes.func,
  onCompositionUpdate: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onDblclick: PropTypes.func,
  onDeactivate: PropTypes.func,
  onDirty: PropTypes.func,
  onDrag: PropTypes.func,
  onDragDrop: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragGesture: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onExecCommand: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func,
  onGetContent: PropTypes.func,
  onHide: PropTypes.func,
  onInit: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onLoadContent: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onNodeChange: PropTypes.func,
  onObjectResizeStart: PropTypes.func,
  onObjectResized: PropTypes.func,
  onObjectSelected: PropTypes.func,
  onPaste: PropTypes.func,
  onPostProcess: PropTypes.func,
  onPostRender: PropTypes.func,
  onPreProcess: PropTypes.func,
  onProgressState: PropTypes.func,
  onRedo: PropTypes.func,
  onRemove: PropTypes.func,
  onReset: PropTypes.func,
  onSaveContent: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSetAttrib: PropTypes.func,
  onSetContent: PropTypes.func,
  onShow: PropTypes.func,
  onSubmit: PropTypes.func,
  onUndo: PropTypes.func,
  onVisualAid: PropTypes.func,
  onSkinLoadError: PropTypes.func,
  onThemeLoadError: PropTypes.func,
  onModelLoadError: PropTypes.func,
  onPluginLoadError: PropTypes.func,
  onIconsLoadError: PropTypes.func,
  onLanguageLoadError: PropTypes.func,
  onScriptsLoad: PropTypes.func,
  onScriptsLoadError: PropTypes.func
};
var EditorPropTypes = {
  apiKey: PropTypes.string,
  licenseKey: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  init: PropTypes.object,
  initialValue: PropTypes.string,
  onEditorChange: PropTypes.func,
  value: PropTypes.string,
  tagName: PropTypes.string,
  tabIndex: PropTypes.number,
  cloudChannel: PropTypes.string,
  plugins: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  toolbar: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  textareaName: PropTypes.string,
  tinymceScriptSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        async: PropTypes.bool,
        defer: PropTypes.bool
      })
    )
  ]),
  rollback: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([false])]),
  scriptLoading: PropTypes.shape({
    async: PropTypes.bool,
    defer: PropTypes.bool,
    delay: PropTypes.number
  }),
  ...eventPropTypes
};

// src/Utils.ts
var isFunction = (x) => typeof x === "function";
var isEventProp = (name) => name in eventPropTypes;
var eventAttrToEventName = (attrName) => attrName.substr(2);
var configHandlers2 = (handlerLookup, on2, off, adapter, prevProps, props, boundHandlers) => {
  const prevEventKeys = Object.keys(prevProps).filter(isEventProp);
  const currEventKeys = Object.keys(props).filter(isEventProp);
  const removedKeys = prevEventKeys.filter((key) => props[key] === void 0);
  const addedKeys = currEventKeys.filter((key) => prevProps[key] === void 0);
  removedKeys.forEach((key) => {
    const eventName = eventAttrToEventName(key);
    const wrappedHandler = boundHandlers[eventName];
    off(eventName, wrappedHandler);
    delete boundHandlers[eventName];
  });
  addedKeys.forEach((key) => {
    const wrappedHandler = adapter(handlerLookup, key);
    const eventName = eventAttrToEventName(key);
    boundHandlers[eventName] = wrappedHandler;
    on2(eventName, wrappedHandler);
  });
};
var configHandlers = (editor, prevProps, props, boundHandlers, lookup) => configHandlers2(
  lookup,
  editor.on.bind(editor),
  editor.off.bind(editor),
  // @ts-expect-error: typescript cannot infer the type of the lookup function
  (handlerLookup, key) => (e) => handlerLookup(key)?.(e, editor),
  prevProps,
  props,
  boundHandlers
);
var unique = 0;
var uuid = (prefix) => {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1e9);
  unique++;
  return prefix + "_" + random + unique + String(time);
};
var isTextareaOrInput = (element) => element !== null && (element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input");
var normalizePluginArray = (plugins) => {
  if (typeof plugins === "undefined" || plugins === "") {
    return [];
  }
  return Array.isArray(plugins) ? plugins : plugins.split(" ");
};
var mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
var isBeforeInputEventAvailable = () => window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
var isInDoc = (elem) => {
  if (!("isConnected" in Node.prototype)) {
    let current = elem;
    let parent = elem.parentNode;
    while (parent != null) {
      current = parent;
      parent = current.parentNode;
    }
    return current === elem.ownerDocument;
  }
  return elem.isConnected;
};
var setMode = (editor, mode) => {
  if (editor !== void 0) {
    if (editor.mode != null && typeof editor.mode === "object" && typeof editor.mode.set === "function") {
      editor.mode.set(mode);
    } else {
      editor.setMode(mode);
    }
  }
};

// src/ScriptLoader2.ts
var injectScriptTag = (doc, item, handler) => {
  const scriptTag = doc.createElement("script");
  scriptTag.referrerPolicy = "origin";
  scriptTag.type = "application/javascript";
  scriptTag.id = item.id;
  scriptTag.src = item.src;
  scriptTag.async = item.async ?? false;
  scriptTag.defer = item.defer ?? false;
  const loadHandler = () => {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src);
  };
  const errorHandler = (err) => {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src, err);
  };
  scriptTag.addEventListener("load", loadHandler);
  scriptTag.addEventListener("error", errorHandler);
  if (doc.head) {
    doc.head.appendChild(scriptTag);
  }
};
var createDocumentScriptLoader = (doc) => {
  let lookup = {};
  const scriptLoadOrErrorHandler = (src, err) => {
    const item = lookup[src];
    item.done = true;
    item.error = err;
    for (const h of item.handlers) {
      h(src, err);
    }
    item.handlers = [];
  };
  const loadScripts = (items, success, failure) => {
    const failureOrLog = (err) => failure !== void 0 ? failure(err) : console.error(err);
    if (items.length === 0) {
      failureOrLog(new Error("At least one script must be provided"));
      return;
    }
    let successCount = 0;
    let failed = false;
    const loaded = (_src, err) => {
      if (failed) {
        return;
      }
      if (err) {
        failed = true;
        failureOrLog(err);
      } else if (++successCount === items.length) {
        success();
      }
    };
    for (const item of items) {
      const existing = lookup[item.src];
      if (existing) {
        if (existing.done) {
          loaded(item.src, existing.error);
        } else {
          existing.handlers.push(loaded);
        }
      } else {
        const id = uuid("tiny-");
        lookup[item.src] = {
          id,
          src: item.src,
          done: false,
          error: null,
          handlers: [loaded]
        };
        injectScriptTag(doc, { id, ...item }, scriptLoadOrErrorHandler);
      }
    }
  };
  const deleteScripts = () => {
    for (const item of Object.values(lookup)) {
      const scriptTag = doc.getElementById(item.id);
      if (scriptTag != null && scriptTag.tagName === "SCRIPT") {
        scriptTag.parentNode?.removeChild(scriptTag);
      }
    }
    lookup = {};
  };
  const getDocument = () => doc;
  return {
    loadScripts,
    deleteScripts,
    getDocument
  };
};
var createScriptLoader = () => {
  const cache = [];
  const getDocumentScriptLoader = (doc) => {
    let loader = cache.find((l) => l.getDocument() === doc);
    if (loader === void 0) {
      loader = createDocumentScriptLoader(doc);
      cache.push(loader);
    }
    return loader;
  };
  const loadList = (doc, items, delay, success, failure) => {
    const doLoad = () => getDocumentScriptLoader(doc).loadScripts(items, success, failure);
    if (delay > 0) {
      setTimeout(doLoad, delay);
    } else {
      doLoad();
    }
  };
  const reinitialize = () => {
    for (let loader = cache.pop(); loader != null; loader = cache.pop()) {
      loader.deleteScripts();
    }
  };
  return {
    loadList,
    reinitialize
  };
};
var ScriptLoader = createScriptLoader();

// src/TinyMCE.ts
var getTinymce = (view) => {
  const global = view;
  return global && global.tinymce ? global.tinymce : null;
};

// src/components/SolidEditor.tsx
var _tmpl$ = /* @__PURE__ */ template(`<div>`);
var _tmpl$2 = /* @__PURE__ */ template(`<textarea>`);
var SolidEditor = (props) => {
  const [id] = createSignal(props.id || uuid("solid-tinymce-editor"));
  const initialValue = () => props.initialValue;
  const value = () => props.value || "";
  const skin = () => props.skin || "oxide";
  const contentCss = () => props.contentCss || "default";
  const [editor, setEditor] = createSignal();
  const [currentContent, setCurrentContent] = createSignal(value());
  const [rollbackTimer, setRollbackTimer] = createSignal();
  const [valueCursor, setValueCursor] = createSignal();
  const [boundHandlers, setBoundHandlers] = createSignal({});
  const view = () => props?.elementRef?.ownerDocument.defaultView ?? window;
  const getInitialValue = () => {
    if (typeof initialValue() === "string") {
      return initialValue();
    } else if (typeof value() === "string") {
      return value();
    } else {
      return "";
    }
  };
  const getScriptSources = () => {
    const async = props.scriptLoading?.async;
    const defer = props.scriptLoading?.defer;
    if (props.tinymceScriptSrc !== void 0) {
      if (typeof props.tinymceScriptSrc === "string") {
        return [{
          src: props.tinymceScriptSrc,
          async,
          defer
        }];
      }
      return props.tinymceScriptSrc.map((item) => {
        if (typeof item === "string") {
          return {
            src: item,
            async,
            defer
          };
        } else {
          return item;
        }
      });
    }
    const channel = props.cloudChannel || "7";
    const apiKey = props.apiKey ? props.apiKey : "no-api-key";
    const cloudTinyJs = `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js`;
    return [{
      src: cloudTinyJs,
      async,
      defer
    }];
  };
  const bindHandlers = (prevProps) => {
    if (editor() !== void 0) {
      const tinyEditor = editor();
      configHandlers(tinyEditor, prevProps, props, boundHandlers(), (key) => props[key]);
      const isValueControlled = (p) => p.onEditorChange !== void 0 || p.value !== void 0;
      const wasControlled = isValueControlled(prevProps);
      const nowControlled = isValueControlled(props);
      if (!wasControlled && nowControlled) {
        tinyEditor.on(changeEvents(), handleEditorChange);
        tinyEditor.on(beforeInputEvent(), handleBeforeInput);
        tinyEditor.on("keydown", handleBeforeInputSpecial);
        tinyEditor.on("keyup", handleEditorChangeSpecial);
        tinyEditor.on("NewBlock", handleEditorChange);
      } else if (wasControlled && !nowControlled) {
        tinyEditor.off(changeEvents(), handleEditorChange);
        tinyEditor.off(beforeInputEvent(), handleBeforeInput);
        tinyEditor.off("keydown", handleBeforeInputSpecial);
        tinyEditor.off("keyup", handleEditorChangeSpecial);
        tinyEditor.off("NewBlock", handleEditorChange);
      }
    }
  };
  const initialise = (attempts = 0) => {
    const target = props.elementRef;
    if (!target) {
      return;
    }
    if (!isInDoc(target)) {
      if (attempts === 0) {
        setTimeout(() => initialise(1), 1);
      } else if (attempts < 100) {
        setTimeout(() => initialise(attempts + 1), 100);
      } else {
        throw new Error("tinymce can only be initialised when in a document");
      }
      return;
    }
    const tinymce = getTinymce(view());
    if (!tinymce) {
      throw new Error("tinymce should have been loaded into global scope");
    }
    const finalInit = {
      ...props.init,
      selector: void 0,
      target,
      skin: skin(),
      content_css: contentCss(),
      readonly: props.disabled,
      inline: props.inline,
      plugins: mergePlugins(props.init?.plugins, props.plugins),
      toolbar: props.toolbar ?? props.init?.toolbar,
      ...props.licenseKey ? {
        license_key: props.licenseKey
      } : {},
      setup: (editor2) => {
        setEditor(editor2);
        bindHandlers({});
        if (props.inline && !isTextareaOrInput(target)) {
          editor2.once("PostRender", (_evt) => {
            editor2.setContent(getInitialValue(), {
              no_events: true,
              event_name: _evt.type
            });
          });
        }
        if (props.init && isFunction(props.init.setup)) {
          props.init.setup(editor2);
        }
      },
      init_instance_callback: (editor2) => {
        const initialValue2 = getInitialValue();
        let newCurrentValue = currentContent() ?? editor2.getContent();
        if (newCurrentValue !== initialValue2) {
          newCurrentValue = initialValue2;
          editor2.setContent(initialValue2);
          editor2.undoManager.clear();
          editor2.undoManager.add();
          editor2.setDirty(false);
        }
        setCurrentContent(newCurrentValue);
        const disabled = props.disabled ?? false;
        setMode(editor2, disabled ? "readonly" : "design");
        if (props.init && isFunction(props.init.init_instance_callback)) {
          props.init.init_instance_callback(editor2);
        }
      }
    };
    if (!props.inline) {
      target.style.visibility = "";
    }
    if (isTextareaOrInput(target)) {
      target.value = getInitialValue();
    }
    tinymce.init(finalInit);
  };
  const mountCallback = () => {
    if (getTinymce(view()) !== null) {
      initialise();
    } else if (Array.isArray(props.tinymceScriptSrc) && props.tinymceScriptSrc.length === 0) {
      throw new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array.");
    } else if (props?.elementRef?.ownerDocument) {
      const successHandler = () => {
        initialise();
      };
      const errorHandler = (err) => {
        throw new Error(err);
      };
      ScriptLoader.loadList(props.elementRef.ownerDocument, getScriptSources(), props.scriptLoading?.delay ?? 0, successHandler, errorHandler);
    }
  };
  const cleanUpCallback = () => {
    const tinyEditor = editor();
    if (typeof tinyEditor !== "undefined") {
      tinyEditor.off(changeEvents(), handleEditorChange);
      tinyEditor.off(beforeInputEvent(), handleBeforeInput);
      tinyEditor.off("keypress", handleEditorChangeSpecial);
      tinyEditor.off("keydown", handleBeforeInputSpecial);
      tinyEditor.off("NewBlock", handleEditorChange);
      Object.keys(boundHandlers()).forEach((eventName) => {
        tinyEditor.off(eventName, boundHandlers()[eventName]);
      });
      setBoundHandlers({});
      tinyEditor.destroy();
      tinyEditor.remove();
      setEditor();
    }
  };
  createEffect(() => {
    if (value() !== currentContent()) {
      setCurrentContent(value());
      editor()?.setContent(value(), {
        no_events: true,
        event_name: "input"
      });
    }
  });
  createEffect(on(skin, () => {
    cleanUpCallback();
    setTimeout(() => {
      mountCallback();
    }, 34);
  }));
  onMount(mountCallback);
  onCleanup(cleanUpCallback);
  const changeEvents = () => {
    const isIE = getTinymce(view())?.Env?.browser?.isIE();
    return isIE ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
  };
  const beforeInputEvent = () => {
    return isBeforeInputEventAvailable() ? "beforeinput SelectionChange" : "SelectionChange";
  };
  const handleEditorChange = (event) => {
    const tinyEditor = editor();
    if (tinyEditor && tinyEditor.initialized && !event.isDefaultPrevented()) {
      const newContent = tinyEditor.getContent();
      if (props.value !== void 0 && props.value !== newContent && props.rollback !== false) {
        if (!rollbackTimer()) {
          setRollbackTimer(window.setTimeout(rollbackChange, typeof props.rollback === "number" ? props.rollback : 200));
        }
      }
      if (newContent !== currentContent()) {
        setCurrentContent(newContent);
        if (isFunction(props.onEditorChange)) {
          props.onEditorChange(newContent, tinyEditor);
        }
      }
    }
  };
  const rollbackChange = () => {
    const tinyEditor = editor();
    const value2 = props.value;
    if (tinyEditor && value2 && value2 !== currentContent()) {
      tinyEditor.undoManager.ignore(() => {
        tinyEditor.setContent(value2);
        if (valueCursor() && (!props.inline || tinyEditor.hasFocus())) {
          try {
            tinyEditor.selection.moveToBookmark(valueCursor());
          } catch (e) {
          }
        }
      });
    }
    setRollbackTimer(void 0);
  };
  const handleBeforeInput = (event) => {
    const tinyEditor = editor();
    if (props.value !== void 0 && props.value === currentContent() && tinyEditor && !event.isDefaultPrevented()) {
      if (!props.inline || tinyEditor.hasFocus()) {
        try {
          setValueCursor(tinyEditor.selection.getBookmark(3));
        } catch (e) {
        }
      }
    }
  };
  const handleEditorChangeSpecial = (evt) => {
    if (evt.key === "Enter" || evt.key === "Backspace" || evt.key === "Delete") {
      handleBeforeInput(evt);
    }
  };
  const handleBeforeInputSpecial = (evt) => {
    if (evt.key === "Enter" || evt.key === "Backspace" || evt.key === "Delete") {
      handleBeforeInput(evt);
    }
  };
  return props.inline ? (() => {
    var _el$ = _tmpl$();
    var _ref$ = props.elementRef;
    typeof _ref$ === "function" ? use(_ref$, _el$) : props.elementRef = _el$;
    effect((_p$) => {
      var _v$ = editor() ? "" : "none", _v$2 = id(), _v$3 = props.testid, _v$4 = props.tabIndex;
      _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$.style.setProperty("display", _v$) : _el$.style.removeProperty("display"));
      _v$2 !== _p$.t && setAttribute(_el$, "id", _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$, "data-testid", _p$.a = _v$3);
      _v$4 !== _p$.o && setAttribute(_el$, "tabindex", _p$.o = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$;
  })() : (() => {
    var _el$2 = _tmpl$2();
    var _ref$2 = props.elementRef;
    typeof _ref$2 === "function" ? use(_ref$2, _el$2) : props.elementRef = _el$2;
    effect((_p$) => {
      var _v$5 = editor() ? "" : "none", _v$6 = id(), _v$7 = props.testid, _v$8 = props.tabIndex;
      _v$5 !== _p$.e && ((_p$.e = _v$5) != null ? _el$2.style.setProperty("display", _v$5) : _el$2.style.removeProperty("display"));
      _v$6 !== _p$.t && setAttribute(_el$2, "id", _p$.t = _v$6);
      _v$7 !== _p$.a && setAttribute(_el$2, "data-testid", _p$.a = _v$7);
      _v$8 !== _p$.o && setAttribute(_el$2, "tabindex", _p$.o = _v$8);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$2;
  })();
};

// src/index.tsx
var src_default = SolidEditor;

export { EditorPropTypes, src_default as default };
