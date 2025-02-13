<template>
    <a :href="'https://wa.me/' + phoneNumber" target="_blank" class="whatsapp-float">
      <img src="/whatsapp.svg" alt="WhatsApp" />
    </a>
  </template>
  
  <script setup>
  const phoneNumber = '923096174319'; // Replace with actual number
  </script>
  
  <style scoped>
  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #25D366;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index:100;
  }
  .whatsapp-float img {
    width: 40px;
    height: 40px;
  }
  </style>
  