# TinyMCE Component for SolidJS

[<img width="100%" src="https://raw.githubusercontent.com/thednp/tinymce-solid/main/banner.svg" alt="TinyMCE Component for SolidJS">](https://thednp.github.io/tinymce-solid)

[![Coverage Status](https://coveralls.io/repos/github/thednp/tinymce-solid/badge.svg)](https://coveralls.io/github/thednp/tinymce-solid)
[![ci](https://github.com/thednp/tinymce-solid/actions/workflows/ci.yml/badge.svg)](https://github.com/thednp/tinymce-solid/actions/workflows/ci.yml)
[![Npm Version](https://img.shields.io/npm/v/tinymce-solid)](https://www.npmjs.com/package/tinymce-solid)
[![solid-js version](https://img.shields.io/badge/solid--js-1.9.7-brightgreen)](https://solidjs.com/)
[![tinymce version](https://img.shields.io/badge/tinymce-7.9.0-brightgreen)](https://www.tiny.cloud/)
[![typescript version](https://img.shields.io/badge/typescript-5.8.3-brightgreen)](https://www.typescriptlang.org/)
[![vitest version](https://img.shields.io/badge/vitest-3.1.4-brightgreen)](https://vitest.dev/)
[![vite version](https://img.shields.io/badge/vite-6.3.5-brightgreen)](https://github.com/vitejs)

## About

This package is a wrapper around [TinyMCE](https://github.com/tinymce/tinymce) to make it easier to use in a SolidJS / SolidStart application.

- If you need detailed documentation on TinyMCE, see: [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/7/).
- This is a community developed package forked from the TinyMCE React, see: [Official TinyMCE React](https://github.com/tinymce/tinymce-react).
- For a quick test, check out the [demo](https://thednp.github.io/tinymce-solid).

## Quick Start Guide

### Installation

**npm**

```
npm install tinymce-solid
```

**pnpm**

```
pnpm install tinymce-solid
```

**yarn**

```
yarn add tinymce-solid
```

### Basic Usage

#### SPA Mode

In your usual SolidJS SPA you can use **tinymce-solid** component like this.

```tsx
import { createSignal } from "solid-js";
import { type Editor as TinyEditor } from "tinymce";
import { Editor } from "tinymce-solid";

export default function App() {
  let editorRef!: TinyEditor;
  const [content, setContent] = createSignal("");

  return (
    <main>
      <Editor
        apiKey="your-api-key"
        value={content()}
        onInit={(_content: string, editor: TinyEditor) => (editorRef = editor)}
        init={{
          menubar: false,
          placeholder: "Write an epic story here...",
          plugins:
            "advlist advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code | removeformat | help",
        }}
        onEditorChange={(content: string, editor: TinyEditor) => {
          // you can also access the editor's content via its own accessor
          // const newContent = editor.getContent();
          setContent(content);
        }}
      />
    </main>
  );
}
```

#### SSR Mode

When using SolidStart in SSR mode, you may want to bring the `clientOnly` loader, since the TinyMCE editor uses mainly the DOM API.

```tsx
import { clientOnly } from "@solidjs/start";
import { Component, createSignal } from "solid-js";
import { type IAllProps } from "tinymce-solid";

const Editor = clientOnly<Component<IAllProps>>(() => import("tinymce-solid"));

export default function App() {
  const [content, setContent] = createSignal("");

  return (
    <main>
      <Editor
        apiKey="your-api-key"
        value={content()}
        init={{
          menubar: false,
          placeholder: "Write an epic story here...",
          plugins:
            "advlist advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code | removeformat | help",
        }}
        onEditorChange={(newContent: string) => {
          setContent(newContent);
        }}
      />
    </main>
  );
}
```

### Properties

* *skin*: **reactive** - change the skin of the editor
* *contentCss*: **reactive** - change the styling of the content 
* *disabled*: **reactive** - toggles the `disabled` property of the editor
* *value*: **reactive** - the actual content;
* *initialValue*: **reactive** - the initial content value;
* *onEditorChange*: `(content: string, editor: Editor) => void` - the callback you can use to update the parent state;
* *editorRef*: - allows you to hook into the TinyMCE instance for additional functionality;
* all other TinyMCE properties are non-reactive and should work as designed for the original TinyMCE React component.


### Some notes

- This package will automatically load the TinyMCE library and its dependencies by the use of the `tinymceScriptSrc` property;
- You can make use of the dark mode via TinyMCE skins: `skin="oxide-dark"` and `contentCss="dark"` properties, [the demo](https://thednp.github.io/tinymce-solid) is configured to make use of them via `createEffect`;
- Like the original React adaptation, this component allows you to hook into the TinyMCE instance via an `editorRef` reference.
- We've added tests powered by Vitest, with a real coverage of ~70%, that is becasue many branches cannot be covered in Vitest browser mode and playwright won't work in some Linux distributions for some reason.

## Issues

Have you found an issue with **tinymce-solid** or do you have a feature request? Open up an [issue](https://github.com/thednp/tinymce-solid/issues) and let us know or submit a [pull request](https://github.com/thednp/tinymce-solid/pulls).

_Note: For issues concerning TinyMCE please visit the [TinyMCE repository](https://github.com/tinymce/tinymce)._

## License

**tinymce-solid** is released under the [MIT License](https://github.com/thednp/tinymce-solid/blob/master/LICENSE).
