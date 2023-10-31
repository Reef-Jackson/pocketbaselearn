<script>
	import "../app.postcss";
	
	export let data;
	const loggedIn = data.loggedIn;
	console.log(loggedIn);


</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"> 

<div class="bg-neutral text-neutral-content">
  <div class="mx-auto navbar">
    <a href="/" class="btn btn-ghost text-xl">BucketList 🪸</a>
    <a href="https://github.com/Reef-Jackson/pocketbaselearn" target="_blank" class="btn btn-ghost text-xl"> <i class="devicon-github-original text-4xl"></i></a>
    <div class="navbar-end">
      <ul class="menu menu-horizontal">
        {#if loggedIn}
          <li><a href="/logout">Logout</a></li>
        {:else}
          <li><a href="/login">Login</a></li>
        {/if}
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  </div>
</div>



<slot />
