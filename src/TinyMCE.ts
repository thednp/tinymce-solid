import { type TinyMCE as TinyMCEGlobal } from "tinymce";

const getTinymce = (view: Window): TinyMCEGlobal | null => {
  const global = view as unknown as { tinymce: TinyMCEGlobal | null };

  return global && global.tinymce
    ? /* istanbul ignore next -- @preserve */ global.tinymce
    : null;
};

export { getTinymce };
