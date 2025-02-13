<script setup>
import { computed } from "vue";

// API Calls
const { data: githubData } = useFetch("https://api.github.com/repos/AwaisJ670/laravel-crud-bot");
const { data: crudData } = useFetch("https://saverapp.sagebuddy.com/api/get/crud/log");
const { data: crudUser } = useFetch("https://saverapp.sagebuddy.com/api/get/distinct/crud/log");
const { data: packagistData } = useFetch("https://packagist.org/packages/codebider/generate-crud.json");

// Extracted Values
const totalCrudGenerators = computed(() => crudData.value?.data.length || 0);
const totalWatchers = computed(() => githubData.value?.watchers_count || 0);
const totalUsers = computed(() => crudUser.value?.data.length || 0);
const totalInstallations = computed(() => packagistData.value?.package?.downloads?.total || 0);

// Color Mapping
const colors = {
  blue: "#3B82F6",
  red: "#EF4444",
  green: "#10B981",
  yellow: "#FACC15",
};

// Card Data (Dynamic Colors)
const cardData = computed(() => [
  { title: "Total Installations", count: totalInstallations.value, color: colors.blue },
  { title: "Total Watchers", count: totalWatchers.value, color: colors.red },
  { title: "Total Users", count: totalUsers.value, color: colors.green },
  { title: "Total Modules", count: totalCrudGenerators.value, color: colors.yellow },
]);
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div v-for="(card, index) in cardData" :key="index"
      class="p-6 bg-white shadow-lg rounded-lg text-center border-2"
      :style="{ borderColor: card.color }">
      <h3 class="text-lg font-semibold text-gray-700">{{ card.title }}</h3>
      <p class="text-2xl font-bold" :style="{ color: card.color }">
        {{ card.count }}
      </p>
    </div>
  </div>
</template>
