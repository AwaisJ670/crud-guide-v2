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

useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-FJ8C451G3P",
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FJ8C451G3P');
      `,
      type: "text/javascript"
    }
  ]
});
</script>
