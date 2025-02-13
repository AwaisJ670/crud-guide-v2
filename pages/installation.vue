<template>
  <div class="mx-auto space-y-8">
    <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
      <h1 class="text-lg md:text-4xl text-center font-bold capitalize">Installation</h1>
      <p class="text-sm md:text-lg text-center text-muted-foreground">
        Get started with Laravel CRUD Bot in a few simple steps
      </p>
    </div>

    <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
      <h2 class="text-2xl font-semibold">1. Install via Composer</h2>
      <p>Add the package to your Laravel project using Composer:</p>
      <CodeBlock :commands="installCommand" />
    </div>

    <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
      <h2 class="text-2xl font-semibold">2. Publish Configuration</h2>
      <p>Publish the configuration file:</p>
      <CodeBlock :commands="publishCommand" />
    </div>
    <!-- <div class="space-y-4 mt-4 mx-4 md:mt-6 md:mx-6">
      <h2 class="text-2xl font-semibold">3. Configure Database</h2>
      <p>
        Ensure your database credentials are properly set up in your .env file::
      </p>
      <CodeBlock :commands="previewDatabase" />
    </div> -->
  </div>
</template>
  <script setup>
useHead({
  title: "Installation",
});
const installCommand = ["composer require codebider/generate-crud"];
const publishCommand = [
  "php artisan vendor:publish --tag=crud-generator-config",
];

const previewDatabase = [
  "DB_CONNECTION=mysql",
  "DB_HOST=127.0.0.1",
  "DB_PORT=3306",
  "DB_DATABASE=your_database",
  "DB_USERNAME=your_username",
  "DB_PASSWORD=your_password",
];
</script>

  