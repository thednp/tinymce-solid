import * as solid_js from 'solid-js';
import * as PropTypes from 'prop-types';
import { Events, EditorEvent, Editor as Editor$1, TinyMCE } from 'tinymce';

type EventHandler<A> = (a: EditorEvent<A>, editor: Editor$1) => unknown;
type EEventHandler<K extends keyof Events.EditorEventMap> = EventHandler<Events.EditorEventMap[K]>;
interface INativeEvents {
    onBeforePaste: EEventHandler<"beforepaste">;
    onBlur: EEventHandler<"blur">;
    onClick: EEventHandler<"click">;
    onCompositionEnd: EEventHandler<"compositionend">;
    onCompositionStart: EEventHandler<"compositionstart">;
    onCompositionUpdate: EEventHandler<"compositionupdate">;
    onContextMenu: EEventHandler<"contextmenu">;
    onCopy: EEventHandler<"copy">;
    onCut: EEventHandler<"cut">;
    onDblclick: EEventHandler<"dblclick">;
    onDrag: EEventHandler<"drag">;
    onDragDrop: EEventHandler<"dragdrop">;
    onDragEnd: EEventHandler<"dragend">;
    onDragGesture: EEventHandler<"draggesture">;
    onDragOver: EEventHandler<"dragover">;
    onDrop: EEventHandler<"drop">;
    onFocus: EEventHandler<"focus">;
    onFocusIn: EEventHandler<"focusin">;
    onFocusOut: EEventHandler<"focusout">;
    onInput: EEventHandler<"input">;
    onKeyDown: EEventHandler<"keydown">;
    onKeyPress: EEventHandler<"keypress">;
    onKeyUp: EEventHandler<"keyup">;
    onMouseDown: EEventHandler<"mousedown">;
    onMouseEnter: EEventHandler<"mouseenter">;
    onMouseLeave: EEventHandler<"mouseleave">;
    onMouseMove: EEventHandler<"mousemove">;
    onMouseOut: EEventHandler<"mouseout">;
    onMouseOver: EEventHandler<"mouseover">;
    onMouseUp: EEventHandler<"mouseup">;
    onPaste: EEventHandler<"paste">;
    onSelectionChange: EEventHandler<"selectionchange">;
}
interface ITinyEvents {
    onActivate: EEventHandler<"activate">;
    onAddUndo: EEventHandler<"AddUndo">;
    onBeforeAddUndo: EEventHandler<"BeforeAddUndo">;
    onBeforeExecCommand: EEventHandler<"BeforeExecCommand">;
    onBeforeGetContent: EEventHandler<"BeforeGetContent">;
    onBeforeRenderUI: EventHandler<unknown>;
    onBeforeSetContent: EEventHandler<"BeforeSetContent">;
    onChange: EventHandler<unknown>;
    onClearUndos: EEventHandler<"ClearUndos">;
    onCommentChange: EventHandler<unknown>;
    onDeactivate: EEventHandler<"deactivate">;
    onDirty: EventHandler<unknown>;
    onExecCommand: EEventHandler<"ExecCommand">;
    onGetContent: EEventHandler<"GetContent">;
    onHide: EventHandler<unknown>;
    onInit: EEventHandler<"init">;
    onLoadContent: EEventHandler<"LoadContent">;
    onNodeChange: EEventHandler<"NodeChange">;
    onPostProcess: EventHandler<unknown>;
    onPostRender: EEventHandler<"PostRender">;
    onPreProcess: EventHandler<unknown>;
    onProgressState: EEventHandler<"ProgressState">;
    onRedo: EEventHandler<"Redo">;
    onRemove: EEventHandler<"remove">;
    onReset: EventHandler<unknown>;
    onSaveContent: EventHandler<unknown>;
    onSetAttrib: EventHandler<unknown>;
    onObjectResizeStart: EEventHandler<"ObjectResizeStart">;
    onObjectResized: EEventHandler<"ObjectResized">;
    onObjectSelected: EEventHandler<"ObjectSelected">;
    onSetContent: EEventHandler<"SetContent">;
    onShow: EventHandler<unknown>;
    onSubmit: EventHandler<unknown>;
    onUndo: EEventHandler<"Undo">;
    onVisualAid: EventHandler<unknown>;
    onSkinLoadError: EEventHandler<"SkinLoadError">;
    onThemeLoadError: EEventHandler<"ThemeLoadError">;
    onModelLoadError: EEventHandler<"ModelLoadError">;
    onPluginLoadError: EEventHandler<"PluginLoadError">;
    onIconsLoadError: EEventHandler<"IconsLoadError">;
    onLanguageLoadError: EEventHandler<"LanguageLoadError">;
    onScriptsLoad: () => void;
    onScriptsLoadError: (err: unknown) => void;
}
interface IEvents extends INativeEvents, ITinyEvents {
}

interface ScriptItem {
    src: string;
    async?: boolean;
    defer?: boolean;
}

type OmitStringIndexSignature<T> = {
    [K in keyof T as string extends K ? never : K]: T[K];
};
interface DoNotUse<T extends string> {
    __brand: T;
}
type OmittedInitProps = "selector" | "target" | "readonly" | "license_key";
type EditorOptions = Parameters<TinyMCE["init"]>[0];
type InitOptions = Omit<OmitStringIndexSignature<EditorOptions>, OmittedInitProps> & {
    selector?: DoNotUse<"selector prop is handled internally by the component">;
    target?: DoNotUse<"target prop is handled internally by the component">;
    readonly?: DoNotUse<"readonly prop is overridden by the component, use the `disabled` prop instead">;
    license_key?: DoNotUse<"license_key prop is overridden by the integration, use the `licenseKey` prop instead">;
} & {
    [key: string]: unknown;
};
type Version = `${"4" | "5" | "6" | "7"}${"" | "-dev" | "-testing" | `.${number}` | `.${number}.${number}`}`;
interface IProps {
    propTypes: IEditorPropTypes;
    elementRef: HTMLDivElement | HTMLTextAreaElement;
    apiKey: string;
    id: string;
    testid: string;
    inline: boolean;
    initialValue: string;
    onEditorChange: (content: string, editor: Editor$1) => void;
    value: string;
    init: InitOptions;
    tagName: string;
    tabIndex: number;
    cloudChannel: Version;
    plugins: NonNullable<EditorOptions["plugins"]>;
    toolbar: NonNullable<EditorOptions["toolbar"]>;
    disabled: boolean;
    textareaName: string;
    tinymceScriptSrc: string | string[] | ScriptItem[];
    rollback: number | false;
    skin: "oxide" | "oxide-dark" | "tinymce-5" | "tinymce-5-dark";
    contentCss: "default" | "dark" | "document" | "tinymce-5" | "tinymce-5-dark" | "writer";
    scriptLoading: {
        async?: boolean;
        defer?: boolean;
        delay?: number;
    };
    licenseKey: string;
}
interface IAllProps extends Partial<IProps>, Partial<IEvents> {
}
type CopyProps<T> = {
    [P in keyof T]: PropTypes.Requireable<unknown>;
};
type IEventPropTypes = CopyProps<IEvents>;
interface IEditorPropTypes extends IEventPropTypes, CopyProps<IProps> {
}
declare const EditorPropTypes: {
    onBeforePaste: PropTypes.Requireable<unknown>;
    onBlur: PropTypes.Requireable<unknown>;
    onClick: PropTypes.Requireable<unknown>;
    onCompositionEnd: PropTypes.Requireable<unknown>;
    onCompositionStart: PropTypes.Requireable<unknown>;
    onCompositionUpdate: PropTypes.Requireable<unknown>;
    onContextMenu: PropTypes.Requireable<unknown>;
    onCopy: PropTypes.Requireable<unknown>;
    onCut: PropTypes.Requireable<unknown>;
    onDblclick: PropTypes.Requireable<unknown>;
    onDrag: PropTypes.Requireable<unknown>;
    onDragDrop: PropTypes.Requireable<unknown>;
    onDragEnd: PropTypes.Requireable<unknown>;
    onDragGesture: PropTypes.Requireable<unknown>;
    onDragOver: PropTypes.Requireable<unknown>;
    onDrop: PropTypes.Requireable<unknown>;
    onFocus: PropTypes.Requireable<unknown>;
    onFocusIn: PropTypes.Requireable<unknown>;
    onFocusOut: PropTypes.Requireable<unknown>;
    onInput: PropTypes.Requireable<unknown>;
    onKeyDown: PropTypes.Requireable<unknown>;
    onKeyPress: PropTypes.Requireable<unknown>;
    onKeyUp: PropTypes.Requireable<unknown>;
    onMouseDown: PropTypes.Requireable<unknown>;
    onMouseEnter: PropTypes.Requireable<unknown>;
    onMouseLeave: PropTypes.Requireable<unknown>;
    onMouseMove: PropTypes.Requireable<unknown>;
    onMouseOut: PropTypes.Requireable<unknown>;
    onMouseOver: PropTypes.Requireable<unknown>;
    onMouseUp: PropTypes.Requireable<unknown>;
    onPaste: PropTypes.Requireable<unknown>;
    onSelectionChange: PropTypes.Requireable<unknown>;
    onActivate: PropTypes.Requireable<unknown>;
    onAddUndo: PropTypes.Requireable<unknown>;
    onBeforeAddUndo: PropTypes.Requireable<unknown>;
    onBeforeExecCommand: PropTypes.Requireable<unknown>;
    onBeforeGetContent: PropTypes.Requireable<unknown>;
    onBeforeRenderUI: PropTypes.Requireable<unknown>;
    onBeforeSetContent: PropTypes.Requireable<unknown>;
    onChange: PropTypes.Requireable<unknown>;
    onClearUndos: PropTypes.Requireable<unknown>;
    onCommentChange: PropTypes.Requireable<unknown>;
    onDeactivate: PropTypes.Requireable<unknown>;
    onDirty: PropTypes.Requireable<unknown>;
    onExecCommand: PropTypes.Requireable<unknown>;
    onGetContent: PropTypes.Requireable<unknown>;
    onHide: PropTypes.Requireable<unknown>;
    onInit: PropTypes.Requireable<unknown>;
    onLoadContent: PropTypes.Requireable<unknown>;
    onNodeChange: PropTypes.Requireable<unknown>;
    onPostProcess: PropTypes.Requireable<unknown>;
    onPostRender: PropTypes.Requireable<unknown>;
    onPreProcess: PropTypes.Requireable<unknown>;
    onProgressState: PropTypes.Requireable<unknown>;
    onRedo: PropTypes.Requireable<unknown>;
    onRemove: PropTypes.Requireable<unknown>;
    onReset: PropTypes.Requireable<unknown>;
    onSaveContent: PropTypes.Requireable<unknown>;
    onSetAttrib: PropTypes.Requireable<unknown>;
    onObjectResizeStart: PropTypes.Requireable<unknown>;
    onObjectResized: PropTypes.Requireable<unknown>;
    onObjectSelected: PropTypes.Requireable<unknown>;
    onSetContent: PropTypes.Requireable<unknown>;
    onShow: PropTypes.Requireable<unknown>;
    onSubmit: PropTypes.Requireable<unknown>;
    onUndo: PropTypes.Requireable<unknown>;
    onVisualAid: PropTypes.Requireable<unknown>;
    onSkinLoadError: PropTypes.Requireable<unknown>;
    onThemeLoadError: PropTypes.Requireable<unknown>;
    onModelLoadError: PropTypes.Requireable<unknown>;
    onPluginLoadError: PropTypes.Requireable<unknown>;
    onIconsLoadError: PropTypes.Requireable<unknown>;
    onLanguageLoadError: PropTypes.Requireable<unknown>;
    onScriptsLoad: PropTypes.Requireable<unknown>;
    onScriptsLoadError: PropTypes.Requireable<unknown>;
    apiKey: PropTypes.Requireable<string>;
    licenseKey: PropTypes.Requireable<string>;
    id: PropTypes.Requireable<string>;
    inline: PropTypes.Requireable<boolean>;
    init: PropTypes.Requireable<object>;
    initialValue: PropTypes.Requireable<string>;
    onEditorChange: PropTypes.Requireable<(...args: any[]) => any>;
    value: PropTypes.Requireable<string>;
    tagName: PropTypes.Requireable<string>;
    tabIndex: PropTypes.Requireable<number>;
    cloudChannel: PropTypes.Requireable<string>;
    plugins: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
    toolbar: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
    disabled: PropTypes.Requireable<boolean>;
    textareaName: PropTypes.Requireable<string>;
    tinymceScriptSrc: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | (PropTypes.InferProps<{
        src: PropTypes.Requireable<string>;
        async: PropTypes.Requireable<boolean>;
        defer: PropTypes.Requireable<boolean>;
    }> | null | undefined)[] | null | undefined>>;
    rollback: PropTypes.Requireable<NonNullable<number | boolean | null | undefined>>;
    scriptLoading: PropTypes.Requireable<PropTypes.InferProps<{
        async: PropTypes.Requireable<boolean>;
        defer: PropTypes.Requireable<boolean>;
        delay: PropTypes.Requireable<number>;
    }>>;
};

declare const Editor: (props: Partial<IAllProps>) => solid_js.JSX.Element;

export { EditorPropTypes, type IAllProps, Editor as default };
