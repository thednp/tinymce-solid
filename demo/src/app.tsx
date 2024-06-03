import { MetaProvider, Title } from "@solidjs/meta";
import { Suspense, type JSX } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route, RouteProps } from "@solidjs/router";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TinyMCE from "./pages/TinyMCE";
import NotFound from "./pages/NotFound";
import "./app.css";

const App = (props: RouteProps<'root'>) => {
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
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/tinymce" component={TinyMCE} />
    <Route path="**" component={NotFound} />
  </Router>
), document.getElementById("app")!);
