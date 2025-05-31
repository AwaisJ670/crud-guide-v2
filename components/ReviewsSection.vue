<script setup>
import { ref } from "vue";
// Sample Reviews Data (Replace with API Data)
const reviews = ref([
  {
    name: "Awais Javaid",
    role:'Full Stack Developer',
    text: "This package is an absolute game-changer! As a Laravel developer, I used to spend hours setting up CRUD operations, but now it's all automated in minutes. The generated code follows Laravel best practices, making it super easy to integrate. The documentation is clear, and I had no issues setting it up. Highly recommended for anyone working with Laravel!",
  },
  {
    name: "Usama Manzoor",
    role:'Frontend Developer',
    text: "A very handy package that has significantly improved my workflow. The CRUD generation is smooth, and the code structure is clean. However, I'd love to see more customization options for generated controllers and models. That being said, it's a fantastic tool that has saved me a ton of development time!",
  },
  {
    name: "Bilawal Tahir",
    role:'Devops Engineer',
    text: "This is hands down one of the best CRUD generators for Laravel! The package is well-built, and the generated code is structured beautifully. It follows Laravel's conventions perfectly, which means there's little to no refactoring needed. It has helped me speed up development and maintain consistency across projects!",
  },
  {
    name: "Emma Johnson",
    role:'Full Stack Developer',
    text: "An outstanding package that delivers exactly what it promises! Setting up CRUD manually was always tedious, but this tool makes it effortless. The installation process is seamless, and the output is professional-grade. I’d love to see more support for relationships in future updates, but even as it is, it’s a must-have for Laravel developers!",
  },
  {
    name: "Michael Roberts",
    role:'Full Stack Developer',
    text: "I’ve used several CRUD generators, but this one stands out. The generated views are clean and easy to customize, and the controllers follow Laravel's best practices. The package also provides robust validation, making my workflow much more efficient. Great work on this tool—it’s saved me countless hours!",
  },
  {
    name: "Sophia Patel",
    role:'Full Stack Developer',
    text: "An incredibly useful package! I was able to generate full CRUD functionality in minutes, which saved me so much time. The best part is that the generated code is clean and readable. I highly appreciate the effort put into making this tool so developer-friendly. A must-have for Laravel developers!",
  },
]);
</script>
<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
  >
    <div class="text-center flex flex-col items-center">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
      >
        <span
          >Trusted by the<br />
          <span class="text-amber-800">World Wide Web.</span>
        </span>
      </h2>
    </div>
    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      <div
        class="break-inside-avoid"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div
          class="rounded-xl divide-y divide-gray-200 ring-1 ring-gray-200 shadow bg-white relative"
        >
          <!---->
          <div class="flex flex-col px-4 py-5 sm:p-6">
            <div>
              <q class="text-gray-600">
                {{ review.text }}
              </q>
              <div class="flex items-center gap-3 mt-6 relative">
                <div>
                  <p
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    {{ review.name }}
                  </p>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">
                    {{ review.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
