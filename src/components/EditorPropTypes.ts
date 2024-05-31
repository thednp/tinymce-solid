import * as PropTypes from "prop-types";
import { IEvents } from "../Events";
import { Editor as TinyMCEEditor, TinyMCE } from "tinymce";
import { ScriptItem } from "../ScriptLoader2";

export type OmitStringIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};

interface DoNotUse<T extends string> {
  __brand: T;
}

export type OmittedInitProps =
  | "selector"
  | "target"
  | "readonly"
  | "license_key";

export type EditorOptions = Parameters<TinyMCE["init"]>[0];

export type InitOptions = Omit<
  OmitStringIndexSignature<EditorOptions>,
  OmittedInitProps
> & {
  selector?: DoNotUse<"selector prop is handled internally by the component">;
  target?: DoNotUse<"target prop is handled internally by the component">;
  readonly?: DoNotUse<"readonly prop is overridden by the component, use the `disabled` prop instead">;
  license_key?: DoNotUse<"license_key prop is overridden by the integration, use the `licenseKey` prop instead">;
} & { [key: string]: unknown };

export type Version =
  `${"4" | "5" | "6" | "7"}${"" | "-dev" | "-testing" | `.${number}` | `.${number}.${number}`}`;

export interface IProps {
  propTypes: IEditorPropTypes;
  elementRef: HTMLDivElement | HTMLTextAreaElement;
  apiKey: string;
  id: string;
  inline: boolean;
  initialValue: string;
  onEditorChange: (a: string, editor: TinyMCEEditor) => void;
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
  contentCss:
    | "default"
    | "dark"
    | "document"
    | "tinymce-5"
    | "tinymce-5-dark"
    | "writer";
  scriptLoading: {
    async?: boolean;
    defer?: boolean;
    delay?: number;
  };
  licenseKey: string;
}

export interface IAllProps extends Partial<IProps>, Partial<IEvents> {}

export type CopyProps<T> = { [P in keyof T]: PropTypes.Requireable<unknown> };

export type IEventPropTypes = CopyProps<IEvents>;

export interface IEditorPropTypes extends IEventPropTypes, CopyProps<IProps> {}

export const eventPropTypes: IEventPropTypes = {
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
  onScriptsLoadError: PropTypes.func,
};

export const EditorPropTypes = {
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
        defer: PropTypes.bool,
      }),
    ),
  ]),
  rollback: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([false])]),
  scriptLoading: PropTypes.shape({
    async: PropTypes.bool,
    defer: PropTypes.bool,
    delay: PropTypes.number,
  }),
  ...eventPropTypes,
};
