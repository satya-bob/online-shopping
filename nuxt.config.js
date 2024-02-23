// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  typescript: {
    strict: true,
    shim: false
  },
  devtools: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxt/image'
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      script: [{ src: 'https://js.stripe.com/v3/', defer: true }]
    }
  }
})
