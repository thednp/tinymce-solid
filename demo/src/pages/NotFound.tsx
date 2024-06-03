import { Title } from "@solidjs/meta";

export default function NotFound() {
  return (
    <main class="container mx-auto">
      <Title>Not Found</Title>
      <h1 class="text-5xl">Page Not Found</h1>
      <p>
        Please <a href="/">click here</a> to return to the homepage.
      </p>
    </main>
  );
}
