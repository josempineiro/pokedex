import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js' },
    ],
  },
  build: {
    transpile: ['@apollo/client', 'ts-invariant/process'],
  },
  css: ['~/assets/styles/app.scss'],
})
