<script lang="ts">
  import type { IPost } from "$lib/utils/types";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import Button from "./Button.svelte";
  import Post from "./Post.svelte";

  let posts: IPost[] = [
    { title: "Title", content: "Dummy data for post" },
    { title: "Title", content: "Dummy data for post" },
  ];
</script>

<div class="post">
  <div class="header">
    <Accordion>
      {#each posts as post}
        <Post {post} />
      {/each}
    </Accordion>
  </div>
</div>
