import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-13",
  future: { compatibilityVersion: 4 },
  ssr: true, 
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  nitro: {
    preset: 'netlify'
  },

  content: {
    database: {
      type: 'sqlite',
      filename: './contents.sqlite'
    }
  }
})

