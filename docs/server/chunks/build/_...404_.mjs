import { ssr, ssrHydrationKey, escape, createComponent, isServer, getRequestEvent } from 'solid-js/web';
import { k } from './index22.mjs';
import { onCleanup } from 'solid-js';

const c=isServer?t=>{const e=getRequestEvent();return e.response.status=t.code,e.response.statusText=t.text,onCleanup(()=>!e.nativeEvent.handled&&!e.complete&&(e.response.status=200)),null}:t=>null;var i=["<main",' class="container mx-auto"><!--$-->',"<!--/--><!--$-->",'<!--/--><h1 class="text-5xl">Page Not Found</h1><p>Please <a href="/">click here</a> to return to the homepage.</p></main>'];function f(){return ssr(i,ssrHydrationKey(),escape(createComponent(k,{children:"Not Found"})),escape(createComponent(c,{code:404})))}

export { f as default };
//# sourceMappingURL=_...404_.mjs.map
