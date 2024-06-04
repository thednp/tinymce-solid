import { MetaProvider, Title } from "@solidjs/meta";
import { Suspense, type JSX } from "solid-js";
// import { render } from "solid-js/web";
// import { Router, Route } from "@solidjs/router";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
import { RouteProps } from "@solidjs/router";
// import { routes } from "./routes";

const App = (props: RouteProps<'/'>) => {
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

export default App;
