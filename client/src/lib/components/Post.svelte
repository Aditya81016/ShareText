<script lang="ts">
  import { AccordionItem } from "@skeletonlabs/skeleton";
  import Button from "./Button.svelte";
  import type { IPost } from "$lib/utils/types";

  export let post: IPost;
</script>

<AccordionItem>
  <svelte:fragment slot="summary">
    <div class="flex w-full justify-between items-center">
      {post.title}
      <Button
        variant={"variant-ghost-success"}
        feedbackVariant="variant-filled-success"
        feedbackTitle="Copied!"
        callback={() => {
          navigator.clipboard.writeText(post.content);
        }}>Copy</Button
      >
    </div>
  </svelte:fragment>
  <svelte:fragment slot="content">{post.content}</svelte:fragment>
</AccordionItem>
