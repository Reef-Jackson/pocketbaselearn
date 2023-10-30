

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a8112a89.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.2aa6c4f6.js"];
export const stylesheets = ["_app/immutable/assets/0.1ed5611a.css"];
export const fonts = [];
