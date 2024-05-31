import { ssr, ssrHydrationKey, escape, createComponent, isServer } from 'solid-js/web';
import { k } from '../runtime.mjs';
import { createSignal, splitProps, sharedConfig, onMount, createMemo, untrack } from 'solid-js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';

function C(i) {
  if (isServer)
    return (e) => e.fallback;
  const [o, n] = createSignal();
  return i().then((e) => n(() => e.default)), (e) => {
    let t, r;
    const [, a] = splitProps(e, ["fallback"]);
    if ((t = o()) && !sharedConfig.context)
      return t(a);
    const [d, u] = createSignal(!sharedConfig.context);
    return onMount(() => u(true)), createMemo(() => (t = o(), r = d(), untrack(() => t && r ? t(a) : e.fallback)));
  };
}
var S = ["<main", "><!--$-->", "<!--/--><h1>TinyMCE Solid component</h1><!--$-->", '<!--/--><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];
const E = C(() => import('./index-DZcDRtdq.mjs'));
function j() {
  const [i, o] = createSignal("");
  return ssr(S, ssrHydrationKey(), escape(createComponent(k, { children: "TinyMCE Solid component" })), escape(createComponent(E, { licenseKey: "gpl", inline: false, get value() {
    return i();
  }, init: { menubar: false, placeholder: "Type an email content here...", file_picker_types: "image", automatic_uploads: true, plugins: "advlist advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount", toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code | removeformat | help" }, onEditorChange: (n, e) => {
    o(n), console.log("onEditorChange", n);
  } })));
}

export { j as default };
//# sourceMappingURL=index2.mjs.map
