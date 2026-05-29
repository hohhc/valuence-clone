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
      crawlLinks: true,
      // 英語版 /en/ は本クローンの実装範囲外（公式へのリンクとして残す）
      ignore: [
        '/en',
        '/en/',
      ],
      // /news 一覧から辿れない可能性に備え、記事・タグ・ページ送りの起点を明示登録
      routes: [
        '/news/page/2',
        '/news/2026/05/29/ht_may_2026/',
        '/news/2026/05/29/allu-surabaya-telkom-merr-landmark/',
        '/news/2026/05/29/allu-surabaya-tunjungan-plaza/',
        '/news/2026/05/26/allu-boulogne-billancourt/',
        '/news/2026/05/22/captain-tsubasa_la-galaxy/',
        '/news/2026/05/20/nanboya-chuorinkan-tokyu/',
        '/news/2026/05/18/valuence-infinities_26-27-season-new-member-auditions/',
        '/news/2026/05/18/allu-cebucity/',
        '/news/2026/05/18/jleagueallstar_dazncup/',
        '/news/2026/05/12/auction-pay-penguintrade/',
        '/news/2026/05/01/nanboya-cm_sanmasan/',
        '/news/2026/04/16/allu-milano/',
        '/news/2026/04/15/nagoya-sakaechika/',
        '/news/2026/04/14/vivid-garden/',
        '/news/2026/04/10/resale-impact-2025/',
        '/news/2026/03/18/ceo-interview-2026/',
      ],
      // クロール継続のため警告レベルへ
      failOnError: false
    }
  }
})
