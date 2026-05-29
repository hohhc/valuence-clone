<template>
  <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
    <!-- サイドバー：カテゴリ + タグ -->
    <aside class="w-full lg:w-1/4 shrink-0 order-1 lg:order-none">
      <div class="lg:sticky lg:top-28">
        <h2 class="font-en text-[20px] font-bold tracking-wider mb-5">Category</h2>
        <ul class="flex flex-row flex-wrap lg:flex-col gap-x-4 gap-y-2 border-b lg:border-b-0 border-gray-200 pb-5 lg:pb-0">
          <li v-for="cat in categories" :key="cat.value">
            <NuxtLink
              :to="cat.path"
              class="font-ja text-[13px] transition-colors lg:py-1.5 lg:block"
              :class="cat.value === category ? 'text-black font-bold' : 'text-gray-medium hover:text-black'"
            >
              {{ cat.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-10 hidden lg:block">
          <h2 class="font-en text-[20px] font-bold tracking-wider mb-5">Tag List</h2>
          <ul class="flex flex-wrap gap-2">
            <li v-for="tag in tagList" :key="tag">
              <span class="inline-block font-ja text-[11px] text-gray-medium border border-gray-200 rounded-full px-3 py-1 hover:border-black hover:text-black transition-colors cursor-default">
                {{ tag }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- 記事リスト -->
    <div class="w-full lg:w-3/4">
      <h2 class="font-en text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight border-l-4 border-black pl-4 mb-8 md:mb-10">
        {{ heading }}
      </h2>

      <div class="flex flex-col">
        <article
          v-for="item in filteredNews"
          :key="item.url + item.title"
          v-reveal
          class="group border-b border-gray-200 first:border-t py-7 md:py-8"
        >
          <a :href="item.url" target="_blank" rel="noopener" class="flex flex-col md:flex-row gap-5 md:gap-8">
            <div class="w-full md:w-[300px] shrink-0 aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                :src="item.img"
                :alt="item.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.05]"
              />
            </div>

            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-ja text-[10px] font-bold border border-black px-3 py-[3px]">{{ item.category }}</span>
                <time class="font-en text-[11px] md:text-[12px] text-gray-medium tracking-widest">{{ item.date }}</time>
              </div>
              <h3 class="font-ja text-[15px] md:text-[17px] font-bold leading-[1.7] text-gray-dark group-hover:text-gray-medium transition-colors mb-3">
                {{ item.title }}
              </h3>
              <ul class="flex flex-wrap gap-2">
                <li v-for="tag in item.tags" :key="tag" class="font-ja text-[10px] text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </a>
        </article>
      </div>

      <p v-if="filteredNews.length === 0" class="font-ja text-[13px] text-gray-medium py-16 text-center">
        該当するニュースはありません。
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 'all' | 'プレスリリース' | 'お知らせ' | 'メディア掲載' | 'pickup'
  category: { type: String, default: 'all' },
  heading:  { type: String, default: 'All' }
})

const { newsItems, categories, tagList } = useNews()

const filteredNews = computed(() =>
  props.category === 'all' || props.category === 'pickup'
    ? newsItems
    : newsItems.filter((n) => n.category === props.category)
)
</script>
