<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script>
import "@fortawesome/fontawesome-free/css/all.css";
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
//Test
</script>


