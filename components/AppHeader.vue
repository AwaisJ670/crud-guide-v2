<template>
  <nav class="bg-gray-800 p-4 sticky top-0 z-50">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-8 lg:py-4 flex justify-between items-center">
      <!-- Company Name -->
      <div class="text-white text-lg font-bold">
        <NuxtLink to="/" class="text-gray-300 hover:text-white">
          <!-- <img src="/logo.jpeg" alt="Logo" class="h-8 inline-block mr-2"> -->
           CodeBider
        </NuxtLink>
      </div>

      <!-- Center Links -->
      <div class="hidden md:flex space-x-7">
        <NuxtLink to="/" class="text-gray-300 hover:text-white">Introduction</NuxtLink>
        <NuxtLink to="/installation" class="text-gray-300 hover:text-white">Installation</NuxtLink>
        <NuxtLink to="/usage" class="text-gray-300 hover:text-white">Usage</NuxtLink>
        <!-- <NuxtLink to="/customization" class="text-gray-300 hover:text-white">Customization</NuxtLink> -->
      </div>

      <!-- GitHub Link -->
      <div>
        <a class="" href="https://github.com/AwaisJ670/laravel-crud-bot" target="_blank" rel="noopener noreferrer">
          <img src="/git.svg" width="30" height="30">
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-300 hover:text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="flex flex-col space-y-2 mt-2">
        <NuxtLink to="/" class="block text-gray-300 hover:text-white">Introduction</NuxtLink>
        <NuxtLink to="/installation" class="block text-gray-300 hover:text-white">Installation</NuxtLink>
        <NuxtLink to="/usage" class="block text-gray-300 hover:text-white">Usage</NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, computed } from "vue";
const isMenuOpen = ref(false)

const toggleMenu = () =>{
  isMenuOpen.value = !isMenuOpen.value
};
</script>
