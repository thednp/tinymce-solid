# TinyMCE Component for SolidJS

[<img width="100%" src="banner.svg" alt="TinyMCE Component for SolidJS">](https://thednp.github.io/tinymce-solid)

[![ci](https://github.com/thednp/tinymce-solid/actions/workflows/ci.yml/badge.svg)](https://github.com/thednp/tinymce-solid/actions/workflows/ci.yml)
[![Npm Version](https://img.shields.io/npm/v/tinymce-solid)](https://www.npmjs.com/package/tinymce-solid)
[![solid-js version](https://img.shields.io/badge/solid--js-1.8.17-brightgreen)](https://solidjs.com/)
[![tinymce version](https://img.shields.io/badge/tinymce-7.1.1-brightgreen)](https://www.tiny.cloud/)
[![typescript version](https://img.shields.io/badge/typescript-5.4.5-brightgreen)](https://www.typescriptlang.org/)
[![prettier version](https://img.shields.io/badge/prettier-3.3.0-brightgreen)](https://prettier.io/)
[![vite version](https://img.shields.io/badge/vite-5.2.12-brightgreen)](https://github.com/vitejs)

## About

This package is a wrapper around [TinyMCE](https://github.com/tinymce/tinymce) to make it easier to use in a Solid application.

- If you need detailed documentation on TinyMCE, see: [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/7/).
- This is a community developed package forked from the TinyMCE React, see: [Official TinyMCE React](https://github.com/tinymce/tinymce-react) for more information.
- For our quick demos, check out the [demo](https://thednp.github.io/tinymce-solid/).

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
import { TinyMCE, Editor } from "tinymce";
import { SolidEditor } from "tinymce-solid";

export default function App() {
  let editorRef!: Editor;
  const [content, setContent] = createSignal("");

  return (
    <main>
      <SolidEditor
        apiKey="your-api-key"
        value={content()}
        onInit={(_content: string, editor: Editor) => (editorRef = editor)}
        init={{
          menubar: false,
          placeholder: "Write an epic story here...",
          plugins:
            "advlist advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code | removeformat | help",
        }}
        onEditorChange={(content: string, editor: Editor) => {
          const newContent = editor.getContent();
          setContent(newContent);
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
import { TinyMCE, Editor } from "tinymce";
import { type IAllProps } from "tinymce-solid";

const SolidEditor = clientOnly<Component<IAllProps>>(() => import("tinymce-solid"));

export default function App() {
  const [content, setContent] = createSignal("");

  return (
    <main>
      <SolidEditor
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
        onEditorChange={(newContent: string, editor: Editor) => {
          setContent(newContent);
          // hook into the editor instance for additional functionality
        }}
      />
    </main>
  );
}
```

### Some notes

- This package will automatically load the tinymce library and its dependencies by the use of the `tinymceScriptSrc` property
- You can make use of the dark mode via TinyMCE skins:<br />`<SolidEditor skin="oxide-dark" contentCss="dark" {...props} />`, this very demo is configured to make use of them
- The component, like the original, allows you to hook into the TinyMCE instance via an `editorRef` reference.

## Issues

Have you found an issue with tinymce-solid or do you have a feature request? Open up an [issue](https://github.com/thednp/tinymce-solid/issues) and let us know or submit a [pull request](https://github.com/thednp/tinymce-solid/pulls).

_Note: For issues concerning TinyMCE please visit the [TinyMCE repository](https://github.com/tinymce/tinymce)._

## License

**tinymce-solid** is released under the [MIT License](https://github.com/thednp/tinymce-solid/blob/master/LICENSE).
