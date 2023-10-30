import * as server from '../entries/pages/login/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/4.dcc20efe.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.2aa6c4f6.js"];
export const stylesheets = [];
export const fonts = [];
