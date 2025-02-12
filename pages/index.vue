<template>
  <div class="mx-auto space-y-8">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold capitalize">
        Automating CRUD generation tool
      </h1>
      <p class="text-lg text-muted-foreground">
        Effortlessly Generate Laravel CRUD with a Single Command!
      </p>
    </div>

    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Features</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="(feature, index) in features" :key="index">
          <FeatureCard
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  <script setup>
useHead({
  title: "Home",
});
const features = [
  {
    title: "Quick Generation",
    description:
      "Generate complete CRUD operations with a single artisan command",
  },
  {
    title: "Full Stack",
    description:
      "Creates models, migrations, controllers, and views interactively",
  },
  {
    title: "Customizable",
    description: "Easily customize the generated code to match your needs",
  },
  {
    title: "Time Saving",
    description:
      "Skip the boilerplate and focus on the core functionalities of your web application",
  },
  {
    title: "Relationship Handlings",
    description:
      "Ask for model name for adding relationship with it's type e.g(belongsTo) ",
  },
  {
    title: "Preview Migration File",
    description:
      "Ask for previewing the migration and easily update the migration file and then continue",
  },
  {
    title: "Interactive Prompts",
    description:
      "Ask for model names and collect fields names with their data types, and whether they are nullable or not",
  },
  {
    title: "Automatically Propagates Update",
    description:
      "If you edit fields in the migration file, these changes will also be applied to dependent components like the $fillable property in models.",
  },
];
</script>
  