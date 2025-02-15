<!-- components/Footer.vue -->
<template>
  <footer class="relative">
    <div class="border-t bg-gray-800  border-gray-200 dark:border-gray-800">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3 !py-6"
      >
        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
        >
          <a
            class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center"
            aria-label="Github"
            href="https://github.com/AwaisJ670/AwaisJ670"
            rel="noopener noreferrer"
            target="_blank"
            >
              <img src="/git.svg" alt="git" width="24" height="24" />
            </a>
          <a
            class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center"
            aria-label="Youtube"
            href="https://youtube.com/@codebider?si=Okeq2_hgoJlWyGyc"
            rel="noopener noreferrer"
            target="_blank"
            >
              <img src="/youtube.svg" alt="git" width="24" height="24" />
            </a>
          <a
            class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center"
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/malikawaisjavaid"
            rel="noopener noreferrer"
            target="_blank"
            >
              <img src="/link.svg" alt="git" width="24" height="24" />
            </a>
        </div>
        <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center">
        </div>
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
        >
          <p class="text-white text-sm">
            Copyright © 2016-2025 Codebider
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>