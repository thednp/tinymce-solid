import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { ColorModeProvider, ColorModeScript } from "@kobalte/core";

import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <ColorModeScript />
          <ColorModeProvider>
            <Header {...props} />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </ColorModeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
