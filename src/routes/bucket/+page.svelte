<script>
  export let data;
</script>

<div class="w-screen flex justify-center h-fit my-20">
  <form action="?/addItem" method="POST" class="card w-[25%] bg-neutral-900 p-10">
    <h1 class="text-2xl font-bold mb-8">Todo List</h1>
    <div class="form-control gap-2 flex flex-row">
      <input
        type="text"
        name="bucket-text"
        id=""
        class="input input-bordered w-3/4"
        placeholder="Go Climbing..."
      />
      <button class="btn hover:bg-secondary w-1/4 text-white bg-slate-700"
        >Add</button
      >
    </div>
    <div class="pt-10">
      {#each data.record as record}
        <form method="POST" action="?/deleteItem" class="pb-2 flex justify-center">
          <input type="text" name="bucket_text" value="{record.bucket_text}" class="w-4/6 text-black rounded-lg input-bordered" readonly="true">
          <input type="text" name="record_id" value="{record.id}" hidden="true">
          <button type="submit" class="btn bg-red-500 text-white">Delete</button>
        </form>
      {/each}
    </div>
  </form>
</div>
