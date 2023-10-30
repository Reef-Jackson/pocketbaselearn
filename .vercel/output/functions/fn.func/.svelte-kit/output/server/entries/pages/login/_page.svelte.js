import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-screen h-screen flex items-center justify-center" data-svelte-h="svelte-1p6hsxm"><form action="/login" method="post" class="card w-[25%] bg-neutral-900 p-10"><h1 class="text-2xl font-bold mb-8">Login</h1> <div class="form-control gap-2 mb-4"><input type="email" name="email" placeholder="Email" class="input input-bordered"> <input type="password" name="password" placeholder="Password" class="input input-bordered"> <button class="btn hover:bg-secondary text-white bg-slate-700">Login</button></div></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
