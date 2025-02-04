// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "bootstrap" as *;`,
        },
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: [
    '@/assets/styles/main.scss',
    'aos/dist/aos.css'
  ],
  modules: ['@nuxt/image'],
  image: {
    formats: ['webp', 'jpeg', 'png'], // Enable WebP conversion
  },
})
