import { MetaProvider, Title } from "@solidjs/meta";
import { Suspense, type JSX } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TinyMCE from "./pages/TinyMCE";
import NotFound from "./pages/NotFound";
import "./app.css";

const App = (props: { children: JSX.Element }) => {
  return (
    <MetaProvider>
      <Title>SolidStart - Basic</Title>
      <ColorModeScript />
      <ColorModeProvider>
        <Header />
        <Suspense>{props.children}</Suspense>
        <Footer />
      </ColorModeProvider>
    </MetaProvider>
  );
}

render(() => (
  <Router
    root={App as any}
    base={import.meta.env.SERVER_BASE_URL}>
    <Route path="/" component={Home} />
    <Route path="/tinymce" component={TinyMCE} />
    <Route path="**" component={NotFound} />
  </Router>
), document.getElementById("app")!);
