import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k, u } from '../runtime.mjs';
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

var s = ["<main", ' class="container mx-auto"><!--$-->', "<!--/--><!--$-->", '<!--/--><h1 class="text-5xl">Page Not Found</h1><p>Please <a href="/">click here</a> to return to the homepage.</p></main>'];
function l() {
  return ssr(s, ssrHydrationKey(), escape(createComponent(k, { children: "Not Found" })), escape(createComponent(u, { code: 404 })));
}

export { l as default };
//# sourceMappingURL=_...404_2.mjs.map
