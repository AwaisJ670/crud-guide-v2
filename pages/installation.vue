<template>
  <div class="py-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24">
      <div class="text-center items-center">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl pb-6"
        >
          <span
            >Installation for<br />
            <span class="text-amber-800">making you life easy.</span>
          </span>
        </h2>
      </div>
      <div v-for="(install, index) in installationsData" :key="index">
        <h1 class="text-gray-900 text-lg text-base font-semibold mb-0">
          {{ install.title }}
        </h1>
        <CodeBlock :commands="install.command" />
      </div>
      <div class="grid gap-8 sm:grid-cols-2">
        <NuxtLink
          to="/"
          class="block px-6 py-8 border not-prose rounded-lg border-gray-200 hover:bg-gray-100/50"
        >
          <div
            class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
          >
            <span
              class="fa-solid fa-arrow-left w-5 h-5 text-gray-900"
              aria-hidden="true"
            ></span>
          </div>
          <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
            Introduction
          </p>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
          >
            Codebider goal is to automate the process of generation of crud.
          </p>
        </NuxtLink>
        <NuxtLink
          to="/usage"
          class="block px-6 py-8 border not-prose rounded-lg border-gray-200 hover:bg-gray-100/50 text-right"
        >
          <div
            class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
          >
            <span
              class="fa-solid fa-arrow-right w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"
              aria-hidden="true"
            ></span>
          </div>
          <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
            Usage
          </p>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
          >
            Code Smarter Not Harder!
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Installation",
});
const installationsData = ref([
  { title: "New Project", command: ["composer require laravel/laravel"] },
  {
    title: "Package Installation",
    command: ["composer require codebider/generate-crud"],
  },
  {
    title: "Configuration File",
    command: ["php artisan vendor:publish --tag=crud-generator-config"],
  },
  {
    title: "Stub File",
    command: ["php artisan vendor:publish --tag=crud-generate-stubs"],
  },
]);

const previewDatabase = [
  "DB_CONNECTION=mysql",
  "DB_HOST=127.0.0.1",
  "DB_PORT=3306",
  "DB_DATABASE=your_database",
  "DB_USERNAME=your_username",
  "DB_PASSWORD=your_password",
];
</script>
