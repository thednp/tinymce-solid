import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";
import { Component } from "solid-js";

const TinyEditor = clientOnly<Component>(
  () => import("~/components/TinyEditor"),
);

export default function TinyMCE() {
  return (
    <main class="container mx-auto mb-5">
      <Title>TinyMCE Solid Component demo page</Title>
      <TinyEditor />
    </main>
  );
}
