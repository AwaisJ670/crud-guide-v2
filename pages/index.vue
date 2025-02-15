<template>
  <div>
    <div
      class="py-24 sm:py-32 md:py-40 relative md:pb-24"
    >
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
      >
        <div class="text-center relative z-[1]">
          <div class="mb-10">
            <span
              class="inline-flex items-center text-sm px-2.5 py-1.5 gap-1.5 bg-amber-50  text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold dark:hover:bg-primary-400/15 dark:hover:ring-primary-700"
            >
              CRUD {{ latestVersion }} is out
              <i
                class="fa-solid fa-arrow-right ml-1 w-4 h-4 pointer-events-none"
              ></i>
            </span>
          </div>
          <h1
            class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
          >
            The Intuitive<br /><span
              class="text-amber-800 block lg:inline-block"
              >Laravel CRUD Generator</span
            >
          </h1>
          <div
            class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300"
          >
            Generate CRUD is an
            <a
              href="https://github.com/AwaisJ670/laravel-crud-bot"
              rel="noopener noreferrer"
              target="_blank"
              class="font-medium hover:underline underline-offset-2"
            >
              open source package
            </a>
            that makes laravel projects intuitive and powerful.<br />Create
            modules for project using single artisan command.
          </div>
          <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-center gap-2">
                <NuxtLink
                  to="/installation"
                  class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-black hover:bg-primary-600 disabled:bg-black aria-disabled:bg-black dark:bg-primary-400 dark:hover:bg-black dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center"
                >
                  Get Started
                  <i class="fa-solid fa-arrow-right flex-shrink-0 h-5 w-5"></i>
                </NuxtLink>
                  <button
                  @click="openModal"
                    type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 text-gray-700  hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  >
                    CRUD in 100 Seconds
                    <i
                      class="fa-regular fa-circle-play flex-shrink-0 h-5 w-5"
                    ></i>
                  </button>
              </div>
              <dialog id="videoModal" class="modal">
                <div class="modal-box w-11/12 max-w-5xl bg-black p-0">
                  <div class="aspect-w-16 aspect-h-9">
                    <iframe 
                      class="w-full h-64 md:h-80 lg:h-96"
                      :src="videoUrl"
                      frameborder="0"
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <label class="w-full">
                <CodeBlock :commands="command" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-24 sm:py-32">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
      >
        <div class="text-center flex flex-col items-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
          <span>
            Discover the Power of Package!<br />
            <span class="text-amber-800">Explore the Statistics.</span>
          </span>

          </h2>
        </div>
        <PackageStats />
      </div>
    </div>
    <div class="py-24 sm:py-32">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
      >
        <div class="text-center flex flex-col items-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            <span
              >Compose with<br />
              <span class="text-amber-800">everything you need.</span>
            </span>
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-4">
          <div v-for="(feature,index) in features" :key="index"
            class="overflow-hidden rounded-xl divide-y divide-gray-200 ring-2 ring-gray-200 shadow bg-white  relative group hover:ring-2 hover:ring-amber-500  hover:bg-gray-100/50"
          >
            <div class="flex-1 px-4 py-5 sm:p-6">
              <div class="mb-6 flex">
                <i class="fa-regular fa-xl fa-eye w-10 h-10 flex-shrink-0 text-amber-800"></i>
              </div>
              <p
                class="text-gray-900 text-base font-semibold truncate flex items-center gap-1.5"
              >
                {{ feature.title }}
              </p>
              <div class="text-[15px] text-gray-500 mt-1">
                {{feature.description}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReviewsSection />
  </div>
</template>
<script setup>
import { computed } from "vue";
const { data: packagistData } = useFetch(
  "https://packagist.org/packages/codebider/generate-crud.json"
);
const latestVersion = computed(() => {
  if (!packagistData.value?.package?.versions) return "N/A";
  const versions = Object.keys(packagistData.value.package.versions);
  return versions[versions.length - 1]; // First key is the latest version
});
useHead({
  title: "Effortlessly Generate Laravel CRUD with a Single Command!",
  meta: [
    {
      description: "Effortlessly Generate Laravel CRUD with a Single Command!",
    },
  ],
});
const command = ["composer require codebider/generate-crud"];
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
    title: "Propagates Update",
    description:
      "If you edit fields in the migration file, these changes will also be applied to dependent components like the $fillable property in models.",
  },
];

const videoUrl = ref("https://www.youtube.com/embed/rU22-1g4Uwk"); // Replace with your video URL

const openModal = () => {
  document.getElementById("videoModal").showModal();
};

const closeModal = () => {
  document.getElementById("videoModal").close();
};
</script>
