/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./app";
import Home from "./pages/Home";
import { lazy } from "solid-js";

const root = document.getElementById("root")!;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/tinymce" component={lazy(() => import("./pages/TinyMCE"))} />
      <Route path="*" component={lazy(() => import("./pages/NotFound"))} />
    </Router>
  ),
  root,
);
