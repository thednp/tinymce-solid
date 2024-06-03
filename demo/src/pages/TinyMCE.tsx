import { Title } from "@solidjs/meta";
import TinyEditor from "../components/TinyEditor";

export default function TinyMCE() {
  return (
    <main class="container mx-auto mb-5">
      <Title>TinyMCE Solid Component demo page</Title>
      <TinyEditor />
    </main>
  );
}
