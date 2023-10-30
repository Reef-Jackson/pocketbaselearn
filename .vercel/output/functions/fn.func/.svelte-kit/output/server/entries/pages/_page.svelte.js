import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-120u2qu{@apply py-2;}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="w-screen h-screen bg-neutral-900 flex items-center justify-center" data-svelte-h="svelte-1bb2eku"><div class="w-2/6 h-fit px-28 m-auto"><h1 class="text-3xl font-bold pb-4">Bucketlist Svelte</h1> <p class="svelte-120u2qu">A todo list made with SvelteKit and Tailwind with daisyUI components.</p> <p class="svelte-120u2qu">I made this project to teach myself how HTTP requests and SvelteKit play together as my main University project is using the same stack.</p> <p class="svelte-120u2qu">It also really helped learning Tailwind as I&#39;m finding it&#39;s the best option for a quick, but presentable, UI.</p> <p class="svelte-120u2qu">You can go ahead and register and add your own todo list that&#39;s exclusive to your account, all handled through Pocketbase AuthStores.</p> <p class="svelte-120u2qu">This site is hosted with Vercel and the PocketBase is hosted on a VPS running through Cloudflare.</p></div> </div>`;
});
export {
  Page as default
};
