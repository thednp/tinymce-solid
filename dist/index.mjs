var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    {
      module.exports = require_factoryWithThrowingShims()();
    }
  }
});

// node_modules/solid-js/dist/solid.js
var sharedConfig = {
  context: void 0,
  registry: void 0
};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
var equalFn = (a, b) => a === b;
var signalOptions = {
  equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceConfig = null;
var Listener = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value2 = value2(s.tValue);
      else value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  if (Scheduler && Transition && Transition.running) Updates.push(c);
  else updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
  if (s) c.suspense = s;
  c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function untrack(fn) {
  if (!ExternalSourceConfig && Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
    return fn();
  } finally {
    Listener = listener;
  }
}
function on(deps, fn, options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  return (prevValue) => {
    let input;
    if (isArray) {
      input = Array(deps.length);
      for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
    } else input = deps();
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;
  else if (Owner.cleanups === null) Owner.cleanups = [fn];
  else Owner.cleanups.push(fn);
  return fn;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: /* @__PURE__ */ new Set(),
        effects: [],
        promises: /* @__PURE__ */ new Set(),
        disposed: /* @__PURE__ */ new Set(),
        queue: /* @__PURE__ */ new Set(),
        running: true
      });
      t.done || (t.done = new Promise((res) => t.resolve = res));
      t.running = true;
    }
    runUpdates(fn);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
function useContext(context) {
  return Owner && Owner.context && Owner.context[context.id] !== void 0 ? Owner.context[context.id] : context.defaultValue;
}
var SuspenseContext;
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (runningTransition ? this.tState : this.state)) {
    if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this));
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    if (Transition) {
      const TransitionRunning = Transition.running;
      if (TransitionRunning || !isComp && Transition.sources.has(node)) {
        Transition.sources.add(node);
        node.tValue = value;
      }
      if (!TransitionRunning) node.value = value;
    } else node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) continue;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
          else o.tState = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (false) ;
          throw new Error();
        }
      });
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(
    node,
    Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value,
    time
  );
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        Listener = Owner = node;
        runComputation(node, node.tValue, time);
        Listener = Owner = null;
      });
    });
  }
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      if (Transition && Transition.running) {
        node.tState = STALE;
        node.tOwned && node.tOwned.forEach(cleanNode);
        node.tOwned = void 0;
      } else {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];
      else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];
      else Owner.owned.push(c);
    }
  }
  if (ExternalSourceConfig && c.fn) {
    const [track, trigger] = createSignal(void 0, {
      equals: false
    });
    const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
    c.fn = (x) => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if ((runningTransition ? node.tState : node.state) === 0) return;
  if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (runningTransition ? node.tState : node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node, prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if ((runningTransition ? node.tState : node.state) === STALE) {
      updateComputation(node);
    } else if ((runningTransition ? node.tState : node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]));
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  Updates = [];
  if (Effects) wait = true;
  else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
    else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition) {
    if (!Transition.promises.size && !Transition.queue.size) {
      const sources = Transition.sources;
      const disposed = Transition.disposed;
      Effects.push.apply(Effects, Transition.effects);
      res = Transition.resolve;
      for (const e2 of Effects) {
        "tState" in e2 && (e2.state = e2.tState);
        delete e2.tState;
      }
      Transition = null;
      runUpdates(() => {
        for (const d of disposed) cleanNode(d);
        for (const v of sources) {
          v.value = v.tValue;
          if (v.owned) {
            for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
          }
          if (v.tOwned) v.owned = v.tOwned;
          delete v.tValue;
          delete v.tOwned;
          v.tState = 0;
        }
        setTransPending(false);
      });
    } else if (Transition.running) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
  }
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e));
  if (res) res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
        });
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);
    else queue[userLength++] = e;
  }
  if (sharedConfig.context) {
    if (sharedConfig.count) {
      sharedConfig.effects || (sharedConfig.effects = []);
      sharedConfig.effects.push(...queue.slice(0, userLength));
      return;
    } else if (sharedConfig.effects) {
      queue = [...sharedConfig.effects, ...queue];
      userLength += sharedConfig.effects.length;
      delete sharedConfig.effects;
    }
    setHydrateContext();
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition) node.tState = 0;
  else node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = runningTransition ? source.tState : source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
          runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (runningTransition ? !o.tState : !o.state) {
      if (runningTransition) o.tState = PENDING;
      else o.state = PENDING;
      if (o.pure) Updates.push(o);
      else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;
  else node.state = 0;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function runErrors(err, fns, owner) {
  try {
    for (const f of fns) f(err);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
function handleError(err, owner = Owner) {
  const fns = ERROR && owner && owner.context && owner.context[ERROR];
  const error = castError(err);
  if (!fns) throw error;
  if (Effects)
    Effects.push({
      fn() {
        runErrors(error, fns, owner);
      },
      state: STALE
    });
  else runErrors(error, fns, owner);
}

// node_modules/solid-js/web/dist/web.js
var booleans = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
];
/* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...booleans
]);
function template(html, isCE, isSVG) {
  let node;
  const create = () => {
    const t = document.createElement("template");
    t.innerHTML = html;
    return t.content.firstChild;
  };
  const fn = () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function setAttribute(node, name, value) {
  if (!!sharedConfig.context && node.isConnected) return;
  if (value == null) node.removeAttribute(name);
  else node.setAttribute(name, value);
}
function use(fn, element, arg) {
  return untrack(() => fn(element, arg));
}

// src/components/EditorPropTypes.ts
var PropTypes = __toESM(require_prop_types(), 1);
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
    const failureOrLog = (err) => failure !== void 0 ? failure(err) : void 0;
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
  const disabled = () => props.disabled || false;
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
  const successHandler = () => {
    props.onScriptsLoad?.();
    initialise();
  };
  const errorHandler = (err) => {
    props.onScriptsLoadError?.(err);
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
        const isDisabled = disabled() ?? false;
        setMode(editor2, isDisabled ? "readonly" : "design");
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
      props.onScriptsLoadError?.(new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
    } else if (props?.elementRef?.ownerDocument) {
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
  createEffect(on(value, () => {
    if (value() !== currentContent()) {
      setCurrentContent(value());
      editor()?.setContent(value(), {
        no_events: true,
        event_name: "input"
      });
    }
  }));
  createEffect(on(skin, () => {
    cleanUpCallback();
    setTimeout(mountCallback, 1);
  }));
  createEffect(on(disabled, () => {
    const tinyEditor = editor();
    if (tinyEditor?.initialized) {
      const isDisabled = disabled() ?? false;
      setMode(tinyEditor, isDisabled ? "readonly" : "design");
    }
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
    _el$.style.setProperty("visibility", "hidden");
    createRenderEffect((_p$) => {
      var _v$ = id(), _v$2 = props.testid, _v$3 = props.tabIndex;
      _v$ !== _p$.e && setAttribute(_el$, "id", _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$, "data-testid", _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$, "tabindex", _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$;
  })() : (() => {
    var _el$2 = _tmpl$2();
    var _ref$2 = props.elementRef;
    typeof _ref$2 === "function" ? use(_ref$2, _el$2) : props.elementRef = _el$2;
    _el$2.style.setProperty("visibility", "hidden");
    createRenderEffect((_p$) => {
      var _v$4 = id(), _v$5 = props.testid, _v$6 = props.tabIndex;
      _v$4 !== _p$.e && setAttribute(_el$2, "id", _p$.e = _v$4);
      _v$5 !== _p$.t && setAttribute(_el$2, "data-testid", _p$.t = _v$5);
      _v$6 !== _p$.a && setAttribute(_el$2, "tabindex", _p$.a = _v$6);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$2;
  })();
};

// src/index.tsx
var src_default = SolidEditor;

export { EditorPropTypes, src_default as default };
