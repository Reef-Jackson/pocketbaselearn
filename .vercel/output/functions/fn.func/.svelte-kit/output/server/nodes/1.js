

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.936b0aff.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.2aa6c4f6.js","_app/immutable/chunks/singletons.a5807b4a.js"];
export const stylesheets = [];
export const fonts = [];
