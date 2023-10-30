

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e27cae16.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.2aa6c4f6.js","_app/immutable/chunks/singletons.ccbd34e9.js"];
export const stylesheets = [];
export const fonts = [];
