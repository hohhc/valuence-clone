export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  nitro: {
    prerender: {
      // 個別ニュース記事ページや /en/ は本クローンの実装範囲外（公式へのリンクとして残す）
      ignore: [
        '/en',
        '/en/',
        /^\/news\/\d{4}\//,
      ],
      // クロール継続のため警告レベルへ
      failOnError: false
    }
  }
})
