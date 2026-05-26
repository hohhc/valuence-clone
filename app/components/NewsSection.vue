<template>
  <section id="news" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div v-reveal class="flex justify-between items-end mb-12 md:mb-16">
        <h2 class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          News
        </h2>
        <div class="hidden md:block mb-2">
           <BaseButtonArrow to="/news/news-pickup/">View More</BaseButtonArrow>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <article
          v-for="(item, index) in newsItems"
          :key="index"
          v-reveal="index * 150"
          class="group cursor-pointer"
        >
          <a :href="item.url" class="h-full flex flex-col">
            <div class="aspect-[16/10] bg-gray-100 overflow-hidden mb-5 md:mb-6">
              <img
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            <div class="flex items-center gap-3 mb-3 md:mb-4">
              <span class="font-ja text-[10px] font-bold border border-black px-3 py-[3px]">
                {{ item.category }}
              </span>
              <span class="font-en text-[10px] md:text-[11px] text-gray-medium tracking-widest">
                {{ item.date }}
              </span>
            </div>

            <h3 class="font-ja text-[14px] md:text-[15px] font-bold leading-[1.7] text-gray-dark group-hover:text-gray-medium transition-colors line-clamp-3">
              {{ item.title }}
            </h3>
          </a>
        </article>
      </div>

      <div v-reveal class="mt-12 md:hidden text-center">
        <BaseButtonPill to="/news/news-pickup/" class="w-full">
          View More
        </BaseButtonPill>
      </div>

    </div>
  </section>
</template>

<script setup>
// 公式トップの 2026.05 最新ラインナップ
const newsItems = [
  {
    title: 'バリュエンス、『キャプテン翼』IPを活用した、MLSカップ6度の優勝を誇る「LA Galaxy」とコラボレーションが決定！',
    category: 'プレスリリース',
    date: '2026.05.22',
    img: 'https://www.valuence.inc/wp-content/uploads/2026/05/captain-tsubasa-la-galaxy.jpg',
    url: '/news/2026/05/22/la-galaxy/'
  },
  {
    title: 'なんぼや 中央林間東急スクエア店が5月27日（水）にオープン！',
    category: 'お知らせ',
    date: '2026.05.20',
    img: 'https://www.valuence.inc/wp-content/uploads/2026/05/nanboya-chuorinkan.jpg',
    url: '/news/2026/05/20/nanboya-chuorinkan/'
  },
  {
    title: 'Valuence INFINITIES、26-27 SEASON 新メンバーオーディションを開催！',
    category: 'プレスリリース',
    date: '2026.05.18',
    img: 'https://www.valuence.inc/wp-content/uploads/2026/05/infinities-audition.jpg',
    url: '/news/2026/05/18/infinities-audition/'
  }
]
</script>
