import { Button } from "@/src/components/ui/button";
import ModeToggle from "@/src/components/ModeToggle";
import { useDisabled, useState, useView } from "@/src/store";
import { Show } from "solid-js";
import { Separator } from "./ui/separator";

const Header = () => {
  const [view, setView] = useView();
  const [disabled, setDisabled] = useDisabled();
  const [, , clear] = useState();

  return (
    <header>
      <nav class="container mx-auto flex flex-row items-center py-4">
        <h1 class="text-xl font-extrabold mb-0 mr-auto">
          TinyMCE SolidJS Component
        </h1>

        <Show when={view() !== "edit"}>
          <Button variant="ghost" onclick={() => setView("edit")}>
            Edit
          </Button>
        </Show>
        <Show when={view() !== "home"}>
          <Button variant="ghost" onclick={() => setView("home")}>
            Preview
          </Button>
          <Button onclick={() => clear()} variant="ghost">
            Clear
          </Button>
          <Button onclick={() => setDisabled(prev => !prev)} variant="ghost">
            {disabled() ? "Enable" : "Disable"}
          </Button>
        </Show>
        <Separator orientation="vertical" class="!h-[1.5rem] mx-2" />
        <ModeToggle />
        <Button
          class="h-9 w-9 px-0"
          as="a"
          href="https://github.com/thednp/tinymce-solid"
          variant="ghost"
        >
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
