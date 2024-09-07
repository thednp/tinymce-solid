import { createSignal, Show } from 'solid-js';
import { render } from "solid-js/web";
import { describe, it, expect } from 'vitest';
import { type IAllProps } from "~/index";

import { Editor } from './fixtures/Editor';
import SolidEditor from '~/index';
import { ScriptLoader } from '~/ScriptLoader2';
import { Editor as TinyMCE } from 'tinymce';

describe("Test <SolidEditor />", () => {
  const container = document.createElement('div');
  document.body.append(container);

  beforeEach(() => {
    container.innerHTML = '';
  })

  it("initializes with cloud scripts", async () => {
    render(() => <SolidEditor />, container);
    const editorArea = await vi.waitUntil(() =>
      container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce'),
      { timeout: 1500, interval: 50 }
    );
    expect(editorArea).to.exist;
  });

  it("renders the editor target with DIV tag", () => {
    render(() => <Editor inline />, container);
    const target = container.querySelector('div');

    expect(target).to.exist;
  });

  it("removes TinyMCE instance on unmount", async () => {
    const [mounted, setMounted] = createSignal(true);
    render(() => <Show fallback={'Not mounted'} when={mounted()}><Editor /></Show>, container);

    const editorArea = await vi.waitUntil(() =>
      container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce'),
      { timeout: 1000, interval: 50 }
    );
    expect(editorArea).to.exist;

    setTimeout(() => {
      setMounted(false);
    }, 1100)

    setTimeout(() => {
      expect(editorArea).to.not.exist;
    }, 1200)
  });

  it("reinitialize on demand", async () => {
    render(() => <SolidEditor licenseKey='gpl' tinymceScriptSrc={['tinymce/tinymce.js']} />, container);

    const editorArea = await vi.waitUntil(() =>
      container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce'),
      { timeout: 1000, interval: 50 }
    );
    expect(editorArea).to.exist;

    setTimeout(() => {
      ScriptLoader.reinitialize();
      expect(editorArea).to.not.exist;
    }, 1100)

    setTimeout(() => {
      expect(editorArea).to.exist;
    }, 1200)

  });

  it("reacts to CONTENT changes", async () => {
    const [content, setContent] = createSignal('<p>Hello TinyMCE!</p>');

    const SolidEditor = () => {
      return (
        <Editor
          id="tiny-mce-test"
          initialValue='Some initial Value'
          value={content()}
          init={{
            height: 500,
            menubar: false,
            placeholder: "Type an email content here...",
            file_picker_types: "image",
            plugins:
              "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion help",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | accordion accordionremove | pagebreak anchor codesample | ltr rtl | help",
          }}
          onEditorChange={(newContent: string) => {
            setContent(newContent);
          }}
        />
      );
    };

    render(() => <SolidEditor />, container);

    const editorArea = await vi.waitUntil(() => {
      return container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce');
    }, { timeout: 1000, interval: 50 });
    expect(editorArea).to.exist;

    setTimeout(() => {
      expect(editorArea?.innerText).to.contain('Hello TinyMCE!');
      setContent('New Content');
    }, 1100)

    setTimeout(() => {
      expect(editorArea?.innerText).to.contain('New Content');
    }, 1200);

    setTimeout(() => {
      // console.log(editorArea.innerText);
      expect(editorArea?.innerText).to.contain('testtext');
      expect(editorArea?.innerHTML).to.equal(content());
    }, 1300);

  });

  it("reacts to keyboard inputs", async () => {
    const [content, setContent] = createSignal('');

    const SolidEditor = () => {
      return (
        <Editor
          value={content()}
          onEditorChange={(newContent: string) => {
            setContent(newContent);
          }}
        />
      );
    };

    render(() => <SolidEditor />, container);

    const editorArea = await vi.waitUntil(() => {
      return container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce');
    }, { timeout: 1000, interval: 50 });
    expect(editorArea).to.exist;

    setTimeout(() => {
      editorArea.focus();
      'testtext'.split('').forEach(c => {
        editorArea.dispatchEvent(new KeyboardEvent('keypress', { key: c }));
      })
    }, 1100);

    setTimeout(() => {
      expect(editorArea?.innerText).to.contain('testtext');
      expect(editorArea?.innerHTML).to.equal(content());
    }, 1200);

  });

  it("reacts to theme changes", async () => {
    const [skin, setSkin] = createSignal<IAllProps["skin"]>("oxide");
    const [css, setCss] = createSignal<IAllProps["contentCss"]>("default");
    const ToggleDark = () => <button id="dark" onClick={() => {
      setCss(prev => prev === 'default' ? 'dark' : 'default')
      setSkin(prev => prev === 'oxide' ? 'oxide-dark' : 'oxide')
    }}>{css() === 'default' ? "LIGHT" : "DARK"}</button>;
    render(() => <><ToggleDark /><Editor skin={skin()} contentCss={css()} /></>, container);
    const textarea = document.querySelector('textarea');

    const editorArea = await vi.waitUntil(() =>
      container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce'), { timeout: 1000, interval: 50 }
    );
    expect(editorArea).to.exist;

    setTimeout(() => {
      document.getElementById('dark')?.click()
    }, 1200);

    setTimeout(() => {
      expect(textarea?.dataset.skin).to.equal('oxide-dark');
      expect(textarea?.dataset.css).to.equal('dark');
    }, 1300)
  
    setTimeout(() => {
      document.getElementById('dark')?.click()
    }, 1400);

    setTimeout(() => {
      expect(textarea?.dataset.skin).to.equal('oxide');
      expect(textarea?.dataset.css).to.equal('default');
    }, 1500)
  });

  it("reacts to DISABLED changes", async () => {
    let editorRef: TinyMCE;
    const [disabled, setDisabled] = createSignal(false);
    const ToggleDisabled = () => <button id="disable" onClick={() => setDisabled(prev => !prev)}>{disabled() ? 'ENABLE' : 'DISABLE'}</button>

    render(() => <><ToggleDisabled /><Editor onInit={(_, ed) => editorRef = ed} disabled={disabled()} /></>, container);
    const textarea = document.querySelector('textarea');

    const editorArea = await vi.waitUntil(() => {
      return container.querySelector('iframe')?.contentWindow?.document.getElementById('tinymce');
    }, { timeout: 1000, interval: 50 });
    expect(editorArea).to.exist;

    document.getElementById('disable')?.click();

    setTimeout(() => {
      expect(editorRef).to.not.be.undefined;

      expect(textarea?.dataset.disabled).to.equal('true');
      document.getElementById('disable')?.click()
    }, 100)

    setTimeout(() => {
      expect(textarea?.dataset.disabled).to.equal('false');
    }, 150)
  
    setTimeout(() => {
      document.getElementById('disable')?.click()
    }, 200)

    setTimeout(() => {
      expect(textarea?.dataset.disabled).to.equal('true');
    }, 250)
  });
});