<template>
  <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
    <NewsSidebar :category="category" :active-tag="activeTag" :active-year="activeYear" />

    <!-- 記事リスト -->
    <div class="w-full lg:w-3/4">
      <h2 class="font-en text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight border-l-4 border-black pl-4 mb-8 md:mb-10">
        {{ heading }}
      </h2>

      <div class="flex flex-col">
        <article
          v-for="item in displayed"
          :key="item.slug"
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

      <!-- ページネーション（本家準拠：番号 + 省略記号 + Prev/Next） -->
      <nav v-if="pageBase && totalPages > 1" class="flex items-center justify-center gap-5 md:gap-6 mt-14 md:mt-20" aria-label="ページ送り">
        <NuxtLink
          v-if="currentPage > 1"
          :to="pageLink(currentPage - 1)"
          class="group inline-flex items-center gap-1.5 font-en text-[12px] tracking-widest uppercase hover:text-gray-medium transition-colors"
        >
          <span class="transition-transform group-hover:-translate-x-1">←</span> Prev
        </NuxtLink>

        <ul class="flex items-center gap-3 md:gap-4">
          <li v-for="(p, i) in pageList" :key="i">
            <span v-if="p === 'dots'" class="font-en text-[13px] text-gray-400">…</span>
            <NuxtLink
              v-else
              :to="pageLink(p)"
              class="font-en text-[14px] tracking-wider transition-colors relative pb-1"
              :class="p === currentPage ? 'text-black font-bold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-black' : 'text-gray-medium hover:text-black'"
            >{{ p }}</NuxtLink>
          </li>
        </ul>

        <NuxtLink
          v-if="currentPage < totalPages"
          :to="pageLink(currentPage + 1)"
          class="group inline-flex items-center gap-1.5 font-en text-[12px] tracking-widest uppercase hover:text-gray-medium transition-colors"
        >
          Next <span class="transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
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
  // サイドバーでハイライトするタグ・年
  activeTag:  { type: String, default: '' },
  activeYear: { type: String, default: '' }
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

// 本家風：先頭・末尾・現在地周辺を表示し、間を … で省略
const pageList = computed(() => {
  const total = totalPages.value
  const cur = currentPage.value
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const out = [1]
  const start = Math.max(2, cur - 1)
  const end = Math.min(total - 1, cur + 1)
  if (start > 2) out.push('dots')
  for (let p = start; p <= end; p++) out.push(p)
  if (end < total - 1) out.push('dots')
  out.push(total)
  return out
})

const pageLink = (n) => (n === 1 ? props.pageBase : `${props.pageBase}/page/${n}`)
</script>
