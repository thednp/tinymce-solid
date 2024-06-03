import { Title } from "@solidjs/meta";
import useState from "../store";

export default function Home() {
  const [content] = useState();
  return (
    <main class="container mx-auto mb-5">
      <Title>TinyMCE Solid component</Title>

      <div innerHTML={content()} />
    </main>
  );
}
