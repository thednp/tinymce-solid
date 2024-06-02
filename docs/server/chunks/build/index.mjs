import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k } from './index22.mjs';
import { u } from './store.mjs';
import 'solid-js';

var a=["<main",' class="container mx-auto mb-5"><!--$-->',"<!--/--><div>","</div></main>"];function l(){const[t]=u();return ssr(a,ssrHydrationKey(),escape(createComponent(k,{children:"TinyMCE Solid component"})),t())}

export { l as default };
//# sourceMappingURL=index.mjs.map
