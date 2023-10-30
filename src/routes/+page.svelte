<!-- <a href="/logout">Logout</a> -->

<div class="w-screen h-screen bg-neutral-900 flex items-center justify-center">
    <div class="w-2/6 h-fit px-28 m-auto">
        <h1 class="text-3xl font-bold pb-4">Bucketlist Svelte</h1>
        <p>A todo list made with SvelteKit and Tailwind with daisyUI components.</p>
        <p>I made this project to teach myself how HTTP requests and SvelteKit play together as my main University project is using the same stack.</p>    
        <p>It also really helped learning Tailwind as I'm finding it's the best option for a quick, but presentable, UI.</p>    
        <p>You can go ahead and register and add your own todo list that's exclusive to your account, all handled through Pocketbase AuthStores.</p>
        <p>This site is hosted with Vercel and the PocketBase is hosted on a VPS running through Cloudflare.</p>
    </div>

</div>

<style>
    p {
        @apply py-2;
    }
</style>