import 'nuxt'

declare module 'nuxt' {
  interface NuxtConfig {
    sitemap?: {
      hostname?: string
      routes?: string[] | (() => Promise<string[]>)
      exclude?: string[]
      gzip?: boolean
      [key: string]: unknown
    }
  }
}
