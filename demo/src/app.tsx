import { Show } from "solid-js";
import { render } from "solid-js/web";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { Separator } from "./components/ui/separator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TinyEditor from "./components/TinyEditor";
import { useState, useView } from "./store";
import "./app.css";

const App = () => {
  const [view] = useView();
  const [content] = useState();
  return (
    <>
      <ColorModeScript />
      <ColorModeProvider>
        <Header />
        <Separator class="mb-5" />
        <div class="container mx-auto py-5 my-5">
          <Show when={view() === "home"}>
            <div innerHTML={content()} />
          </Show>
          <Show when={view() === "edit"}>
            <h2>Editor demo</h2>
            <TinyEditor />
          </Show>
        </div>
        <Separator class="my-5" />
        <Footer />
      </ColorModeProvider>
    </>
  );
};

render(() => <App />, document.getElementById("app")!);
