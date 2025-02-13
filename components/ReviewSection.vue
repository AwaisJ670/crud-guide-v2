<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Sample Reviews Data (Replace with API Data)
const reviews = ref([
  {
    name: "Awais Javaid",
    rating: 5,
    text: "Amazing package! It saved me a lot of time.",
  },
  {
    name: "Usama Manzoor",
    rating: 4,
    text: "Very useful, but could use some improvements.",
  },
  {
    name: "Bilawal Tahir",
    rating: 5,
    text: "Highly recommended for Laravel developers!",
  },
  {
    name: "Emma Johnson",
    rating: 5,
    text: "Super easy to use and works perfectly!",
  },
]);

// Function to Generate Star Rating
const getStarClass = (index, rating) => {
  return index <= rating ? "text-yellow-400" : "text-gray-300";
};
</script>

<template>
  <div>
    <!-- Swiper Carousel -->
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 2000 }"
      class="mt-6"
    >
      <SwiperSlide v-for="(review, index) in reviews" :key="index">
        <div class="flex flex-col items-center text-center p-6 border rounded-lg bg-gray-50 shadow-lg">
          <!-- Review Image -->
          <img
            src="/person.svg"
            alt="User Image"
            class="w-16 h-16 rounded-full border-2 border-red-300"
          />
          
          <!-- Review Name -->
          <h3 class="mt-4 font-semibold text-lg">{{ review.name }}</h3>

          <!-- Star Rating -->
          <div class="flex mt-2">
            <span v-for="star in 5" :key="star" class="text-2xl">
              <i class="fas fa-star" :class="getStarClass(star, review.rating)"></i>
            </span>
          </div>

          <!-- Review Text -->
          <p class="text-gray-600 my-3 max-w-md text-sm md:text-lg">{{ review.text }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* Swiper Pagination Customization */
.swiper-pagination-bullet {
  background: #007aff;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: #0056b3;
  opacity: 1;
}
</style>
