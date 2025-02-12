<template>
  <div class="container mx-auto py-8">
    <div
      class="grid gap-6"
      :class="{ 'md:grid-cols-2': props.preview }"
    >
      <!-- Command Section -->
      <div
        class="mockup-code bg-gray-900 rounded-lg shadow-lg"
      >
        <pre><code>
            <span class="whitespace-pre font-mono text-sm" v-for="(char, index) in typedOutput" :key="index">{{ char }}</span>
          </code></pre>
      </div>

      <!-- Preview Section (Only if there is a preview) -->
      <div v-if="props.preview" class="border p-4 rounded-lg bg-gray-100 shadow">
          <p class="font-semibold">Preview</p>
          <img :src="props.preview" alt="Preview Image" class="rounded-md shadow-lg"/>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  commands: Array, // Command array
  preview: String, // Preview array (optional)
});

const typedOutput = ref([]); // Stores typed command text
const typingSpeed = 100;
const delayBetweenSteps = 1200;

const runCommands = async () => {
  typedOutput.value = []; // Reset output
  for (const command of props.commands) {
    for (const char of command) {
      // Loop through characters
      typedOutput.value += char;
      await new Promise((resolve) => setTimeout(resolve, typingSpeed));
    }
    typedOutput.value += "\n"; // Add newline after command
    await new Promise((resolve) => setTimeout(resolve, delayBetweenSteps));
  }
};

onMounted(() => {
  runCommands();
});
</script>
  