<template>
    <div class="mx-auto space-y-8">
      <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
        <h1 class="text-lg md:text-4xl text-center font-bold capitalize">Usage Guide</h1>
        <p class="text-sm md:text-lg text-center text-muted-foreground text-center">
          Learn how to use Laravel CRUD Bot effectively
        </p>
        <p class="text-md text-muted-foreground">
          This package helps you generate CRUD operations for your Laravel application with ease. The following modules of your CRUD should be generated iteratively:
        </p>
        <ul class="list-disc list-inside text-sm text-muted-foreground ml-4">
          <li>Model</li>
          <li>Migration</li>
          <li>Controller</li>
          <li>Routes</li>
          <li>Views</li>
        </ul>
      </div>

      <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>

        <div v-for="(step, index) in steps.slice(0, currentStep + 1)" :key="index">
          <p>{{ step.description }}</p>
          <CodeBlock :commands="step.commands" :preview="step.preview ?? null"  />
        </div>

        <button 
          @click="nextStep" 
          class="btn btn-primary mt-4"
          :disabled="currentStep >= steps.length - 1"
        >
          Next
        </button>
      </div>
  </div>
</template>
  
<script setup>
useHead({
  title: "Usage",
});
import { ref } from "vue";

const steps = ref([
  { description: "1. Generate CRUD operations using the artisan command:", commands: ["php artisan generate:crud"] },
  { description: "2. Enter the Model Name:", commands: ["Enter model name (e.g., Product):Product"] },
  { description: "3. Field Names and Types:", commands: [
    "Enter field name (or press enter to stop adding fields):",
  "✔ name",
  "Select field type by default (string):",
  "[0 ] string",
  "[1 ] text",
  "[2 ] longText",
  "[3 ] integer",
  "[4 ] unsignedIn",
  "[5 ] bigInteger",
  "[6 ] unsignedBi",
  "[7 ] json",
  "[8 ] jsonb",
  "[9 ] enum",
  "[10] decimal",
  "[11] float",
  "[12] ipAddress",
  "[13] boolean",
  "[14] date",
  "[15] datetime",
  "[16] timestamp",
  "✔ 0 (string)",
  "Nullable [Yes]:",
  "✔ Yes",
  "Enter field name (or press enter to stop adding fields):",
  "✔ price",
  "Select field type:",
  "✔ 10 (decimal)",
  "Nullable [Yes]:",
  ],preview:  "/images/migration.png"  },
  { description: "4. Preview Migration File:", commands: ["Do you want to review the migration file? (yes/no) [yes]:"],preview:  "/images/PreviewMigration.png" },
  { description: "5. Migration Confirmation:", commands: ["Is the migration file correct? (yes/no) [yes]:"] },
  { description: "6. Add Relationships:", commands: ["Do you want to add relationships? [No]:"],preview:  "/images/ViewModel.png" },
  { description: "7. Generate Controller:", commands: ["Do you want to generate Controller? [Yes]:"] },
  { description: "8. Choose Controller Type:", commands: ["Create resource or basic controller? [resource]:"],preview:"/images/ViewController.png" },
  { description: "9. Generate Routes:", commands: ["Where do you want to add routes? [web.php]:"],preview:  "/images/AskingRoutes.png" },
  { description: "10. Generate Views:", commands: ["Do you want to generate views? [Yes]:"],preview:  "/images/AskingViews.png" },
  { description: "11. Completion Message:", commands: ["CRUD files for Product generated successfully!"] }
]);

const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++;
  }
};

const commandsStep2 = [
  "Enter field name (or press enter to stop adding fields):",
  "✔ name",
  "Select field type by default (string):",
  "[0 ] string",
  "[1 ] text",
  "[2 ] longText",
  "[3 ] integer",
  "[4 ] unsignedIn",
  "[5 ] bigInteger",
  "[6 ] unsignedBi",
  "[7 ] json",
  "[8 ] jsonb",
  "[9 ] enum",
  "[10] decimal",
  "[11] float",
  "[12] ipAddress",
  "[13] boolean",
  "[14] date",
  "[15] datetime",
  "[16] timestamp",
  "✔ 0 (string)",
  "Nullable [Yes]:",
  "✔ Yes",
  "Enter field name (or press enter to stop adding fields):",
  "✔ price",
  "Select field type:",
  "✔ 10 (decimal)",
  "Nullable [Yes]:",
  "✔ No",
  "Creating Migration File...",
  "Updating Migration File...",
  "Fields: name, price",
  "Opening migration file...",
];

const migrationPreview = ref([
  "Schema::create('categories', function (Blueprint $table) {",
  "    $table->id();",
  "    $table->string('name');",
  "    $table->decimal('price');",
  "    $table->timestamps();",
  "});",
]);
</script>
  
 