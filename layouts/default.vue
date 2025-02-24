<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="container mx-auto flex-1 my-4">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
    <SpeedInsights/>
    <Analytics/>
  </div>
</template>
<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'
</script>
