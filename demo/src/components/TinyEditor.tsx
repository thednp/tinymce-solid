import { type Editor } from "tinymce";
import SolidEditor, { type IAllProps } from "~/index";
import { useColorMode } from "@kobalte/core";
import { createEffect, createSignal } from "solid-js";
import { useState } from "../store";
import { useDisabled } from "../store";

const tinymceURL =
  import.meta.env.MODE === "production"
    ? "/tinymce/tinymce.min.js" // the tinymce is copied to dist at build time
    : "/tinymce/tinymce.js";

const TinyEditor = () => {
  const { colorMode } = useColorMode();
  const [content, setContent] = useState();
  const [disabled] = useDisabled();
  const [skin, setSkin] = createSignal<IAllProps["skin"]>("oxide");
  const [css, setCss] = createSignal<IAllProps["contentCss"]>("default");

  createEffect(() => {
    setSkin(() => (colorMode() === "dark" ? "oxide-dark" : "oxide"));
    setCss(() => (colorMode() === "dark" ? "dark" : "default"));
  });

  return (
    <SolidEditor
      value={content()}
      disabled={disabled()}
      skin={skin()}
      contentCss={css()}
      licenseKey="gpl"
      tinymceScriptSrc={tinymceURL}
      init={{
        menubar: false,
        placeholder: "Type an email content here...",
        file_picker_types: "image",
        plugins:
          "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table emoticons wordcount help",
        toolbar:
          "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons | visualblocks | removeformat code | help",
      }}
      onEditorChange={(newContent: string, editor: Editor) => {
        // const newContent = editor.getContent();
        // console.log("onEditorChange", newContent);
        setContent(newContent);
      }}
    />
  );
};

export default TinyEditor;
