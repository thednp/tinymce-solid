import { type Editor } from "tinymce";
import SolidEditor, { type IAllProps } from "~/index";
import { useColorMode } from "@kobalte/core";
import { createEffect, createSignal } from "solid-js";
import { useState } from "../store";
import { useDisabled } from "../store";

const tinymceURL = import.meta.env.BASE_URL +
  (import.meta.env.MODE === "production"
    ? "tinymce/tinymce.min.js" // the tinymce is copied to assets at build time
    : "tinymce/tinymce.js");

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
        height:500,
        menubar: false,
        placeholder: "Type an email content here...",
        file_picker_types: "image",
        plugins:
          "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion help",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | accordion accordionremove | pagebreak anchor codesample | ltr rtl | help",
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
