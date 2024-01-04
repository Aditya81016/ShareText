<script lang="ts">
  import "../app.css";

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div id="root">
  <slot />
</div>

<style>
  #root {
    @apply w-screen h-[100dvh] md:px-32 md:pt-32 max-md:px-8 max-md:pt-64 overflow-y-auto;
  }
</style>
