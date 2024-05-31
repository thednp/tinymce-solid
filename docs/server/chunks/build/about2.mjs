import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k } from '../runtime.mjs';
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

var a = ["<main", "><!--$-->", "<!--/--><h1>About</h1></main>"];
function s() {
  return ssr(a, ssrHydrationKey(), escape(createComponent(k, { children: "About" })));
}

export { s as default };
//# sourceMappingURL=about2.mjs.map
