<template>
  <section id="news" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div class="flex justify-between items-end mb-12 md:mb-16">
        <h2 v-reveal-mask class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          News
        </h2>
        <div v-reveal="150" class="hidden md:block mb-2">
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
// 公式トップの最新ラインナップ（2026.05.29 時点）
const newsItems = [
  {
    title: '【5月】「HATTRICK」プレスリリース配信情報',
    category: 'プレスリリース',
    date: '2026.05.29',
    img: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_11.jpg',
    url: '/news/news-pickup/'
  },
  {
    title: 'インドネシアでブランド買取「ALLU Surabaya Telkom Merr Landmark」をオープン！',
    category: 'お知らせ',
    date: '2026.05.29',
    img: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_05.jpg',
    url: '/news/news-pickup/'
  },
  {
    title: 'バリュエンス、フランスにてブランド買取「ALLU Boulogne-Billancourt」をオープン！',
    category: 'プレスリリース',
    date: '2026.05.26',
    img: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_40.jpg',
    url: '/news/news-pickup/'
  }
]
</script>
