import { Show } from "solid-js";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TinyEditor from "./components/TinyEditor";
import {useState, useView} from "./store";
import "./app.css";
import { render } from "solid-js/web";

const App = () => {
  const [view] = useView();
  const [content] = useState();
  return (
    <>
    <ColorModeScript />
    <ColorModeProvider>
    <Header />
      <div class="container mx-auto mb-5">
        <Show when={view() === 'home'}>
          <div innerHTML={content()} />
        </Show>
        <Show when={view() === 'edit'}>
          <TinyEditor />
        </Show>
      </div>
    <Footer />
    </ColorModeProvider>
    </>
  );
}

render(() => <App />, document.getElementById("app")!);
