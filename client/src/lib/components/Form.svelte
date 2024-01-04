<script lang="ts">
  import Button from "./Button.svelte";

  let title: string = "",
    content: string = "";

  $: submitDisabled = title.trim() === "" || content.trim() === "";

  function onSubmit() {
    alert("Submitted!");
  }
</script>

<form on:submit={onSubmit}>
  <label class="label">
    <input
      bind:value={title}
      required
      class="input"
      type="text"
      placeholder="Enter your title here"
    />
  </label>
  <label class="label">
    <textarea
      bind:value={content}
      required
      class="textarea"
      rows="4"
      placeholder="Enter your text here..."
    />
  </label>
  <Button
    disabled={submitDisabled}
    type="submit"
    styles="w-fit self-end"
    feedbackVariant="variant-filled-primary"
    feedbackTitle="Submitted!">Submit</Button
  >
</form>

<style>
  form {
    @apply flex flex-col gap-3;
  }
</style>
