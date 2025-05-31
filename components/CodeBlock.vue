<template>
  <div class="container mx-auto py-4">
    <div
      class="grid gap-6"
      :class="{ 'md:grid-cols-2': props.preview }"
    >
      <!-- Command Section -->
      <div  class="relative mockup-code rounded-lg shadow-lg transition-all duration-300"
        :class="{ 'border-4 border-green-500': copied }">
         <button
         v-if="props.showCopyButton"
          @click="copyToClipboard"
          class="absolute top-2 right-2 text-sm px-3 py-1 rounded  transition"
        >
          <img src="/copy.svg" alt="Copy Icon" class="inline-block mr-1" width="20" height="20">
        </button>
        <pre data-prefix="~"><code v-html="typedOutput"></code></pre>
      </div>

      <!-- Preview Section (Only if there is a preview) -->
      <div v-if="props.preview" class="border p-4 rounded-lg bg-gray-100 shadow">
          <p class="font-semibold">Preview</p>
          <img :src="props.preview" alt="Preview Image" class="rounded-md shadow-lg" @click="openImageInNewTab"/>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  commands: Array, // Command array
  preview: String, // Preview array (optional)
  showCopyButton: {
    type: Boolean,
    default: true, // Show copy button by default
  },
});

const typedOutput = ref([]); // Stores typed command text
const typingSpeed = 100;
const delayBetweenSteps = 1200;
const copied = ref(false);

const runCommands = async () => {
  typedOutput.value = ""; // Reset output
  for (const command of props.commands) {
    for (const char of command) {
      typedOutput.value += char === " " ? "&nbsp;" : char; // Prevent space removal
      await new Promise((resolve) => setTimeout(resolve, typingSpeed));
    }
    typedOutput.value += "<br>"; // Preserve line breaks
    await new Promise((resolve) => setTimeout(resolve, delayBetweenSteps));
  }
};

const copyToClipboard = () => {
  // Convert HTML output to plain text
  const plainText = typedOutput.value
    .replace(/<br>/g, "\n")
    .replace(/&nbsp;/g, " ");
  navigator.clipboard.writeText(plainText).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3500);
  });
};
const openImageInNewTab = () => {
  if (props.preview) {
    window.open(props.preview, '_blank');
  }
};
onMounted(() => {
  runCommands();
});
</script>
  