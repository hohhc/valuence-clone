<template>
  <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
    <NewsSidebar :category="category" :active-tag="activeTag" />

    <!-- 記事リスト -->
    <div class="w-full lg:w-3/4">
      <h2 class="font-en text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight border-l-4 border-black pl-4 mb-8 md:mb-10">
        {{ heading }}
      </h2>

      <div class="flex flex-col">
        <article
          v-for="item in displayed"
          :key="item.slug"
          v-reveal
          class="group border-b border-gray-200 first:border-t py-7 md:py-8"
        >
          <NuxtLink :to="item.path" class="flex flex-col md:flex-row gap-5 md:gap-8">
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
          </NuxtLink>
        </article>
      </div>

      <p v-if="displayed.length === 0" class="font-ja text-[13px] text-gray-medium py-16 text-center">
        該当するニュースはありません。
      </p>

      <!-- ページネーション -->
      <nav v-if="pageBase && totalPages > 1" class="flex items-center justify-center gap-2 mt-12 md:mt-16" aria-label="ページ送り">
        <NuxtLink
          v-if="currentPage > 1"
          :to="pageLink(currentPage - 1)"
          class="font-en text-[12px] px-4 py-2 border border-gray-200 hover:border-black transition-colors"
        >Prev</NuxtLink>
        <NuxtLink
          v-for="n in totalPages"
          :key="n"
          :to="pageLink(n)"
          class="font-en text-[12px] w-10 h-10 flex items-center justify-center border transition-colors"
          :class="n === currentPage ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'"
        >{{ n }}</NuxtLink>
        <NuxtLink
          v-if="currentPage < totalPages"
          :to="pageLink(currentPage + 1)"
          class="font-en text-[12px] px-4 py-2 border border-gray-200 hover:border-black transition-colors"
        >Next</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 明示リストを渡す場合（タグ別など）
  list:      { type: Array,  default: null },
  // list 未指定時のカテゴリ絞り込み 'all' | 'プレスリリース' | ...
  category:  { type: String, default: 'all' },
  heading:   { type: String, default: 'All' },
  page:      { type: Number, default: 1 },
  perPage:   { type: Number, default: 8 },
  // 指定するとページネーション有効（例 '/news'）
  pageBase:  { type: String, default: '' },
  // サイドバーでハイライトするタグ
  activeTag: { type: String, default: '' }
})

const { newsItems, paginate } = useNews()

const sourceList = computed(() => {
  if (props.list) return props.list
  if (props.category === 'all' || props.category === 'pickup') return newsItems
  return newsItems.filter((n) => n.category === props.category)
})

const paged = computed(() =>
  props.pageBase
    ? paginate(sourceList.value, props.page, props.perPage)
    : { items: sourceList.value, totalPages: 1, page: 1 }
)

const displayed = computed(() => paged.value.items)
const totalPages = computed(() => paged.value.totalPages)
const currentPage = computed(() => paged.value.page)

const pageLink = (n) => (n === 1 ? props.pageBase : `${props.pageBase}/page/${n}`)
</script>
