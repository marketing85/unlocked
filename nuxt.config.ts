import tailwindcss from "@tailwindcss/vite";
import fs from 'fs/promises';
import path from 'path';

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

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://unlockedhomeproject.com',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-simple-sitemap'
  ],

// @ts-expect-error: nuxt-simple-sitemap adds sitemap at runtime
  sitemap: {
    hostname: 'https://unlockedhomeproject.com',
    gzip: true
  },

  nitro: {
    preset: 'netlify',
  },

  content: {
    database: {
      type: 'sqlite',
      filename: './contents.sqlite'
    }
  }
});
