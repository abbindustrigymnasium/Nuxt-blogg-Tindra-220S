// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true
  }
})


