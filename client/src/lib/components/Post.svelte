<script lang="ts">
  import { AccordionItem } from "@skeletonlabs/skeleton";
  import Button from "./Button.svelte";
  import type { IPost } from "$lib/utils/types";

  export let post: IPost;
</script>

<AccordionItem>
  <svelte:fragment slot="summary">
    <div class="flex w-full justify-between items-center">
      <div
        class="md:max-w-[calc(100vw-25rem)] max-md:max-w-[calc(100vw-13.5rem)] overflow-hidden text-ellipsis"
      >
        {post.title}
      </div>
      <Button
        styles="relative z-30"
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
