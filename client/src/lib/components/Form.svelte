<script lang="ts">
  import { ref, set } from "firebase/database";
  import Button from "./Button.svelte";
  import { database } from "$lib/config/firebase";

  let title: string = "",
    content: string = "";

  $: submitDisabled = title.trim() === "" || content.trim() === "";

  function onSubmit() {
    set(ref(database, "posts/" + Date.now()), {
      title: title.trim(),
      content: content.trim(),
    });
    console.log("Sent");
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
