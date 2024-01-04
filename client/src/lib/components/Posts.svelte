<script lang="ts">
  import type { IPost } from "$lib/utils/types";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import Button from "./Button.svelte";
  import Post from "./Post.svelte";
  import { onValue, ref } from "firebase/database";
  import { database } from "$lib/config/firebase";

  let posts: IPost[] = [];

  onValue(ref(database, "posts"), (snapshot) => {
    const value = snapshot.val() ?? {};
    console.log(value);

    posts = Object.values(value);
  });
</script>

<div class="post">
  <div class="header">
    <Accordion class="flex flex-col-reverse">
      {#each posts as post}
        <Post {post} />
      {/each}
    </Accordion>
  </div>
</div>
