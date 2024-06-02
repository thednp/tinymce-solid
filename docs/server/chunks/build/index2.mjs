import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k, c } from '../runtime.mjs';
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
import 'solid-js';
import 'solid-js/web/storage';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';

var a = ["<main", ' class="container mx-auto mb-5"><!--$-->', "<!--/--><div>", "</div></main>"];
function l() {
  const [t] = c();
  return ssr(a, ssrHydrationKey(), escape(createComponent(k, { children: "TinyMCE Solid component" })), t());
}

export { l as default };
//# sourceMappingURL=index2.mjs.map
