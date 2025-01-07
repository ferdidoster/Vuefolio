// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'], // Your custom SCSS file
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "bootstrap" as *;`, // Automatically import Bootstrap globally
        },
      },
    },
  },
})
