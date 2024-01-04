<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  import Posts from "$lib/components/Posts.svelte";
  import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<div class="page" id="home">
  <div class="header">
    <h1 class="h1">ShareText</h1>
    <div class="flex gap-3">
      <a class="anchor" href="http://github.com/Aditya81016/ShareText/"
        >GitHub</a
      >
      <LightSwitch />
    </div>
  </div>
  <Form />
  <Posts />
</div>

<style>
  .header {
    @apply flex w-full justify-between items-end;
  }
</style>
