<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
      <div class="container mx-auto">
        <h1 class="text-white text-2xl font-bold">Command Typing Simulation</h1>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto py-8">
      <div class="flex flex-col gap-6">
        <!-- Step 1: Model Name Entry -->
        <div v-if="step >= 1" class="bg-gray-900 text-white p-6 rounded-lg shadow-lg font-mono">
          <div v-for="(line, index) in commandsStep1" :key="index" class="mb-1">
            <span>{{ line }}</span>
          </div>
        </div>

        <!-- Step 2: Fields & Migration Preview -->
        <div v-if="step >= 2" class="flex flex-col md:flex-row gap-6">
          <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg font-mono w-full md:w-1/2">
            <div v-for="(line, index) in commandsStep2" :key="index" class="mb-1">
              <span>{{ line }}</span>
            </div>
          </div>
          <div class="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg font-mono w-full md:w-1/2">
            <pre v-for="(line, index) in migrationPreview" :key="index" class="text-sm">{{ line }}</pre>
          </div>
        </div>

        <!-- Next Step Button -->
        <button
          v-if="step === 1"
          @click="runCommands(commandsStep2, 2)"
          class="self-start mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const output = ref([]);
const typingSpeed = 80;
const delayBetweenSteps = 1200;
const step = ref(1);

const commandsStep1 = [
  '$ php artisan generate:crud',
  'Enter the model name:',
  '✔ Category',
];

const commandsStep2 = [
  'Enter field name (or press enter to stop adding fields):',
  '✔ name',
  'Select field type by default (string):',
  '[0 ] string',
  '[1 ] text',
  '[2 ] longText',
  '[3 ] integer',
  '[4 ] unsignedIn',
  '[5 ] bigInteger',
  '[6 ] unsignedBi',
  '[7 ] json',
  '[8 ] jsonb',
  '[9 ] enum',
  '[10] decimal',
  '[11] float',
  '[12] ipAddress',
  '[13] boolean',
  '[14] date',
  '[15] datetime',
  '[16] timestamp',
  '✔ 0 (string)',
  'Nullable [Yes]:',
  '✔ Yes',
  'Enter field name (or press enter to stop adding fields):',
  '✔ price',
  'Select field type:',
  '✔ 10 (decimal)',
  'Nullable [Yes]:',
  '✔ No',
  'Creating Migration File...',
  'Updating Migration File...',
  'Fields: name, price',
  'Opening migration file...',
];

const migrationPreview = ref([
  "Schema::create('categories', function (Blueprint $table) {",
  '    $table->id();',
  "    $table->string('name');",
  "    $table->decimal('price');",
  '    $table->timestamps();',
  '});',
]);

const runCommands = async (commands, nextStep) => {
  output.value = [];
  for (const command of commands) {
    output.value.push(command);
    await new Promise((resolve) => setTimeout(resolve, typingSpeed));
  }
  await new Promise((resolve) => setTimeout(resolve, delayBetweenSteps));
  if (nextStep) step.value = nextStep;
};

onMounted(() => {
  runCommands(commandsStep1, null);
});
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: gray;
}
</style>
