import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";
import { type ScriptItem, ScriptLoader } from "../ScriptLoader2";
import { getTinymce } from "../TinyMCE";
import {
  isFunction,
  isTextareaOrInput,
  mergePlugins,
  uuid,
  configHandlers,
  isBeforeInputEventAvailable,
  isInDoc,
  setMode,
} from "../Utils";
import {
  IAllProps,
  Version,
  EditorOptions,
  InitOptions,
  OmittedInitProps,
  // IProps,
} from "./EditorPropTypes";
import { Bookmark, Editor as TinyMCEEditor, EditorEvent } from "tinymce";

export const SolidEditor = (props: Partial<IAllProps>) => {
  const [id] = createSignal(props.id || uuid("solid-tinymce-editor"));
  const initialValue = () => props.initialValue;
  const value = () => props.value || "";
  const skin = () => props.skin || "oxide";
  const contentCss = () => props.contentCss || "default";
  const disabled = () => props.disabled || false;
  const [editor, setEditor] = createSignal<TinyMCEEditor>();
  const [currentContent, setCurrentContent] = createSignal<string>(value());
  const [rollbackTimer, setRollbackTimer] = createSignal<number>();
  const [valueCursor, setValueCursor] = createSignal<Bookmark>();
  const [boundHandlers, setBoundHandlers] = createSignal<
    Record<string, (event: EditorEvent<unknown>) => unknown>
  >({});
  const view = () => props?.elementRef?.ownerDocument.defaultView ?? window;

  const getInitialValue = () => {
    if (typeof initialValue() === "string") {
      return initialValue() as string;
    } else if (typeof value() === "string") {
      return value();
    } else {
      return "";
    }
  };
  const getScriptSources = (): ScriptItem[] => {
    const async = props.scriptLoading?.async;
    const defer = props.scriptLoading?.defer;
    if (props.tinymceScriptSrc !== undefined) {
      if (typeof props.tinymceScriptSrc === "string") {
        return [{ src: props.tinymceScriptSrc, async, defer }];
      }
      // multiple scripts can be specified which allows for hybrid mode
      return (props.tinymceScriptSrc as string[] | ScriptItem[]).map((item) => {
        if (typeof item === "string") {
          // async does not make sense for multiple items unless
          // they are not dependent (which will be unlikely)
          return { src: item, async, defer };
        } else {
          return item;
        }
      });
    }

    // fallback to the cloud when the tinymceScriptSrc is not specified
    const channel = (props.cloudChannel || "7") as Version; // `cloudChannel` is in `defaultProps`, so it's always defined.
    const apiKey = props.apiKey ? props.apiKey : "no-api-key";
    const cloudTinyJs = `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js`;
    return [{ src: cloudTinyJs, async, defer }];
  };

  const bindHandlers = (prevProps: Partial<IAllProps>) => {
    if (editor() !== undefined) {
      const tinyEditor = editor()!;

      // typescript chokes trying to understand the type of the lookup function
      configHandlers(
        tinyEditor,
        prevProps,
        props,
        boundHandlers(),
        (key) => props[key],
      );
      // check if we should monitor editor changes
      const isValueControlled = (p: Partial<IAllProps>) =>
        p.onEditorChange !== undefined || p.value !== undefined;
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
  const errorHandler = (err: unknown) => {
    // console.warn(err);
    props.onScriptsLoadError?.(err);
  };

  const initialise = (attempts = 0) => {
    const target = props.elementRef;
    if (!target) {
      return; // Editor has been unmounted
    }
    if (!isInDoc(target)) {
      // this is probably someone trying to help by rendering us offscreen
      // but we can't do that because the editor iframe must be in the document
      // in order to have state
      if (attempts === 0) {
        // we probably just need to wait for the current events to be processed
        setTimeout(() => initialise(1), 1);
      } else if (attempts < 100) {
        // wait for ten seconds, polling every tenth of a second
        setTimeout(() => initialise(attempts + 1), 100);
      } else {
        // give up, at this point it seems that more polling is unlikely to help
        throw new Error("tinymce can only be initialised when in a document");
      }
      return;
    }

    const tinymce = getTinymce(view());
    if (!tinymce) {
      throw new Error("tinymce should have been loaded into global scope");
    }

    const finalInit: EditorOptions = {
      ...(props.init as Omit<InitOptions, OmittedInitProps>),
      selector: undefined,
      target,
      skin: skin(),
      content_css: contentCss(),
      readonly: props.disabled,
      inline: props.inline,
      plugins: mergePlugins(props.init?.plugins, props.plugins),
      toolbar: props.toolbar ?? props.init?.toolbar,
      ...(props.licenseKey ? { license_key: props.licenseKey } : {}),
      setup: (editor) => {
        setEditor(editor);
        bindHandlers({});

        // When running in inline mode the editor gets the initial value
        // from the innerHTML of the element it is initialized on.
        // However we don't want to take on the responsibility of sanitizing
        // to remove XSS in the react integration so we have a chicken and egg
        // problem... We avoid it by sneaking in a set content before the first
        // "official" setContent and using TinyMCE to do the sanitization.
        if (props.inline && !isTextareaOrInput(target)) {
          editor.once("PostRender", (_evt) => {
            editor.setContent(getInitialValue(), {
              no_events: true,
              event_name: _evt.type,
            });
          });
        }

        if (props.init && isFunction(props.init.setup)) {
          props.init.setup(editor);
        }
      },
      init_instance_callback: (editor) => {
        // check for changes that happened since tinymce.init() was called
        const initialValue = getInitialValue();
        let newCurrentValue = currentContent() ?? editor.getContent();
        if (newCurrentValue !== initialValue) {
          newCurrentValue = initialValue;
          // same as resetContent in TinyMCE 5
          editor.setContent(initialValue);
          editor.undoManager.clear();
          editor.undoManager.add();
          editor.setDirty(false);
        }
        setCurrentContent(newCurrentValue);
        const isDisabled = disabled() ?? false;
        setMode(editor, isDisabled ? "readonly" : "design");
        // ensure existing init_instance_callback is called
        if (props.init && isFunction(props.init.init_instance_callback)) {
          props.init.init_instance_callback(editor);
        }
      },
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
    } else if (
      Array.isArray(props.tinymceScriptSrc) &&
      props.tinymceScriptSrc.length === 0
    ) {
      props.onScriptsLoadError?.(
        new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."),
      );
    } else if (props?.elementRef?.ownerDocument) {
      console.log("loadList", getScriptSources());

      ScriptLoader.loadList(
        props.elementRef.ownerDocument,
        getScriptSources(),
        props.scriptLoading?.delay ?? 0,
        successHandler,
        errorHandler,
      );
    }
  };
  const cleanUpCallback = () => {
    const tinyEditor = editor()!;
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

  createEffect(
    on(value, () => {
      if (value() !== currentContent()) {
        setCurrentContent(value());
        editor()?.setContent(value(), { no_events: true, event_name: "input" });
      }
    }),
  );

  createEffect(
    on(skin, () => {
      cleanUpCallback();
      setTimeout(mountCallback, 1)
    }),
  );

  createEffect(
    on(disabled, () => {
      const tinyEditor = editor();
      if (tinyEditor?.initialized) {
        const isDisabled = disabled() ?? false;
        setMode(tinyEditor, isDisabled ? "readonly" : "design");        
      }
    }),
  );

  onMount(mountCallback);
  onCleanup(cleanUpCallback);

  const changeEvents = () => {
    const isIE = getTinymce(view())?.Env?.browser?.isIE();
    return isIE
      ? "change keyup compositionend setcontent CommentChange"
      : "change input compositionend setcontent CommentChange";
  };

  const beforeInputEvent = () => {
    return isBeforeInputEventAvailable()
      ? "beforeinput SelectionChange"
      : "SelectionChange";
  };

  const handleEditorChange = (event: EditorEvent<unknown>) => {
    const tinyEditor = editor();
    if (tinyEditor && tinyEditor.initialized && !event.isDefaultPrevented()) {
      const newContent = tinyEditor.getContent();
      if (
        props.value !== undefined &&
        props.value !== newContent &&
        props.rollback !== false
      ) {
        // start a timer and revert to the value if not applied in time
        if (!rollbackTimer()) {
          setRollbackTimer(
            window.setTimeout(
              rollbackChange,
              typeof props.rollback === "number" ? props.rollback : 200,
            ),
          );
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
    const value = props.value;
    if (tinyEditor && value && value !== currentContent()) {
      tinyEditor.undoManager.ignore(() => {
        tinyEditor.setContent(value);
        // only restore cursor on inline editors when they are focused
        // as otherwise it will cause a focus grab
        if (valueCursor() && (!props.inline || tinyEditor.hasFocus())) {
          try {
            tinyEditor.selection.moveToBookmark(valueCursor()!);
          } catch (e) {
            /* ignore */
          }
        }
      });
    }
    setRollbackTimer(undefined);
  };

  const handleBeforeInput = (event: EditorEvent<unknown>) => {
    const tinyEditor = editor()!;
    if (
      props.value !== undefined &&
      props.value === currentContent() &&
      tinyEditor &&
      !event.isDefaultPrevented()
    ) {
      if (!props.inline || tinyEditor.hasFocus()) {
        try {
          // getBookmark throws exceptions when the editor has not been focused
          // possibly only in inline mode but I'm not taking chances
          // this.valueCursor = tinyEditor.selection.getBookmark(3);
          setValueCursor(tinyEditor.selection.getBookmark(3));
        } catch (e) {
          /* ignore */
        }
      }
    }
  };

  const handleEditorChangeSpecial = (evt: EditorEvent<KeyboardEvent>) => {
    if (
      evt.key === "Enter" ||
      evt.key === "Backspace" ||
      evt.key === "Delete"
    ) {
      handleBeforeInput(evt);
    }
  };

  const handleBeforeInputSpecial = (evt: EditorEvent<KeyboardEvent>) => {
    if (
      evt.key === "Enter" ||
      evt.key === "Backspace" ||
      evt.key === "Delete"
    ) {
      handleBeforeInput(evt);
    }
  };

  return props.inline ? (
    <div
      style={{ visibility: "hidden" }}
      ref={props.elementRef as HTMLDivElement}
      id={id()}
      data-testid={props.testid}
      tabIndex={props.tabIndex}
    />
  ) : (
    <textarea
      style={{ visibility: "hidden" }}
      ref={props.elementRef as HTMLTextAreaElement}
      id={id()}
      data-testid={props.testid}
      tabIndex={props.tabIndex}
    />
  );
};
