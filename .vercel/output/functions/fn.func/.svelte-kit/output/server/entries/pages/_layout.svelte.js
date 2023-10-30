import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"> <div class="bg-neutral text-neutral-content" data-svelte-h="svelte-30evjg"><div class="mx-auto navbar"><a href="/" class="btn btn-ghost text-xl">BucketList 🪸</a> <a href="https://github.com/Reef-Jackson/pocketbaselearn" target="_blank" class="btn btn-ghost text-xl"><i class="devicon-github-original text-4xl"></i></a> <div class="navbar-end"><ul class="menu menu-horizontal"><li><a href="/login">Login</a></li> <li><a href="/register">Register</a></li> <li><a href="/logout">Logout</a></li></ul></div></div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
