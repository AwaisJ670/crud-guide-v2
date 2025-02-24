// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/sitemap','@nuxtjs/robots'],
  plugins: ["~/plugins/botpress.client"],
  sitemap: {
    hostname: 'https://laravel-crud-guide.vercel.app',
    gzip: true,
    routes: ['/installation', '/usage','/'],
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://laravel-crud-guide.vercel.app/sitemap.xml',
  },
})
