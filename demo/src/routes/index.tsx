import { Title } from "@solidjs/meta";

import { clientOnly } from "@solidjs/start";
import { Component, createSignal } from "solid-js";
import { Editor } from "tinymce";
import { IAllProps } from "@/src/index";

const SolidEditor = clientOnly<Component<IAllProps>>(() => import("../../../src/index"));

export default function Home() {
  // let editorRef!: Editor;
  // let elementRef!: HTMLDivElement | HTMLTextAreaElement;
  const [content, setContent] = createSignal("");
  return (
    <main>
      <Title>TinyMCE Solid component</Title>
      <h1>TinyMCE Solid component</h1>
      <SolidEditor
        // apiKey={VITE_TINY_API_KEY}
        licenseKey="gpl"
        // skin="oxide-dark"
        // contentCss="dark"
        // elementRef={elementRef}
        inline={false}
        value={content()}
        init={{
          menubar: false,
          placeholder: "Type an email content here...",
          file_picker_types: "image",
          automatic_uploads: true,
          plugins:
            "advlist advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code | removeformat | help",
        }}
        onEditorChange={(newContent: string, editor: Editor) => {
          // const newContent = editor.getContent();
          setContent(newContent);
          console.log("onEditorChange", newContent);
        }}
      />

      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
