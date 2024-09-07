import { eventPropTypes, IEventPropTypes } from "./components/EditorPropTypes";
import { IAllProps } from "./components/EditorPropTypes";
import { Editor as TinyMCEEditor, EditorEvent } from "tinymce";

export const isFunction = (x: unknown): x is typeof Function =>
  typeof x === "function";

const isEventProp = (name: string): name is keyof IEventPropTypes =>
  name in eventPropTypes;

const eventAttrToEventName = <T extends string>(attrName: `on${T}`): T =>
  String(attrName.slice(2)) as T;

type PropLookup = <K extends keyof IAllProps>(key: K) => IAllProps[K];

export const configHandlers2 = <H>(
  handlerLookup: PropLookup,
  on: (name: string, handler: H) => void,
  off: (name: string, handler: H) => void,
  adapter: <K extends keyof IEventPropTypes>(lookup: PropLookup, key: K) => H,
  prevProps: Partial<IAllProps>,
  props: Partial<IAllProps>,
  boundHandlers: Record<string, H>,
): void => {
  const prevEventKeys = Object.keys(prevProps).filter(isEventProp);
  const currEventKeys = Object.keys(props).filter(isEventProp);

  const removedKeys = prevEventKeys.filter((key) => props[key] === undefined);
  const addedKeys = currEventKeys.filter((key) => prevProps[key] === undefined);

  /* istanbul ignore next @preserve - this should be covered but the browser mode won't register this part */
  removedKeys.forEach((key) => {
    // remove event handler
    const eventName = eventAttrToEventName(key);
    const wrappedHandler = boundHandlers[eventName];
    off(eventName, wrappedHandler);
    delete boundHandlers[eventName];
  });

  addedKeys.forEach((key) => {
    const wrappedHandler = adapter(handlerLookup, key);
    const eventName = eventAttrToEventName(key);
    boundHandlers[eventName] = wrappedHandler;
    on(eventName, wrappedHandler);
  });
};

export const configHandlers = (
  editor: TinyMCEEditor,
  prevProps: Partial<IAllProps>,
  props: Partial<IAllProps>,
  boundHandlers: Record<string, (event: EditorEvent<unknown>) => unknown>,
  lookup: PropLookup,
): void =>
  configHandlers2(
    lookup,
    editor.on.bind(editor),
    editor.off.bind(editor),
    // @ts-expect-error: typescript cannot infer the type of the lookup function
    (handlerLookup, key) => (e) => handlerLookup(key)?.(e, editor),
    prevProps,
    props,
    boundHandlers,
  );

let unique = 0;

export const uuid = (prefix: string): string => {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1000000000);

  unique++;

  return prefix + "_" + random + unique + String(time);
};

export const isTextareaOrInput = (
  element: Element | null,
): element is HTMLTextAreaElement | HTMLInputElement =>
  element !== null &&
  (element.tagName.toLowerCase() === "textarea" ||
    element.tagName.toLowerCase() === "input");

const normalizePluginArray = (plugins?: string | string[]): string[] => {
  if (typeof plugins === "undefined" || plugins === "") {
    return [];
  }

  return Array.isArray(plugins) ? plugins : plugins.split(" ");
};

export const mergePlugins = (
  initPlugins: string | string[] | undefined,
  inputPlugins: string | string[] | undefined,
): string[] =>
  normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));

export const isBeforeInputEventAvailable = () =>
  window.InputEvent &&
  typeof InputEvent.prototype.getTargetRanges === "function";

export const isInDoc = (elem: Node) => {
  /* istanbul ignore next @preserve - this here seems to be for legacy browsers, we ignore it */
  if (!("isConnected" in Node.prototype)) {
    // Fallback for IE and old Edge
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

export const setMode = (
  editor: TinyMCEEditor | undefined,
  mode: "readonly" | "design",
) => {
  /* istanbul ignore else @preserve */
  if (editor !== undefined) {
    /* istanbul ignore else @preserve */
    if (
      editor.mode != null &&
      typeof editor.mode === "object" &&
      typeof editor.mode.set === "function"
    ) {
      editor.mode.set(mode);
    } else {
      // support TinyMCE 4
      // @ts-expect-error: no point in explaining this to IE
      editor.setMode(mode);
    }
  }
};
