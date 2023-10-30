

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bucket/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4d2917d1.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.2aa6c4f6.js"];
export const stylesheets = [];
export const fonts = [];
