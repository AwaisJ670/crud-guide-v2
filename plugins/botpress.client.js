export default defineNuxtPlugin(() => {
    if (process.client) {
      const script1 = document.createElement("script");
      script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script1.async = true;
      document.body.appendChild(script1);
  
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/02/11/18/20250211182959-UTJ4Z24R.js";
      script2.async = true;
      document.body.appendChild(script2);
    }
  });
      