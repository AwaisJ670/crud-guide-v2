<script setup>
const props=defineProps({
    title:String,
    description:String
});

</script>

<template>
  <div
    class="relative p-1 rounded-lg bg-gradient-to-r from-black via-red-500 to-yellow-500 animate-border"
  >
    <div class="relative bg-white p-6 rounded-lg shadow-xl">
      <h2 class="text-lg md:text-xl font-bold text-gray-800">{{ props.title }}</h2>
      <p class="text-gray-600 mt-2">
        {{props.description}}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes borderAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-border {
  background-size: 200% 200%;
  animation: borderAnimation 5s linear infinite;
}
</style>
