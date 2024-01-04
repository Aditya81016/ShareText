<script lang="ts">
  export let callback: () => void = () => {},
    disabled: boolean = false,
    variant: string = "variant-ghost-primary",
    type: "button" | "submit" | "reset" | null | undefined = "button",
    styles: string = "",
    feedbackTitle: string = "",
    feedbackVariant: string = "",
    feedbackInterval: number = 5;

  let clicked = false;
  let clickFeedbackTimeout: NodeJS.Timeout | undefined;
</script>

<button
  {disabled}
  class="btn {styles} {feedbackVariant !== '' && clicked
    ? feedbackVariant
    : variant}"
  {type}
  on:click={() => {
    callback();

    if (clickFeedbackTimeout) clearTimeout(clickFeedbackTimeout);

    clicked = true;

    clickFeedbackTimeout = setTimeout(() => {
      clicked = false;
      clickFeedbackTimeout = undefined;
    }, feedbackInterval * 1000);
  }}
>
  {#if feedbackTitle !== "" && clicked}
    {feedbackTitle}
  {:else}
    <slot />
  {/if}
</button>
