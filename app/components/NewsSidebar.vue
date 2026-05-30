<template>
  <aside class="w-full lg:w-1/4 shrink-0 order-1 lg:order-none">
    <div class="lg:sticky lg:top-28">
      <!-- News 見出し（ピックアップ導線） -->
      <NuxtLink to="/news/news-pickup" class="block group">
        <p class="font-en text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight mb-6 group-hover:text-gray-medium transition-colors">
          News
        </p>
      </NuxtLink>

      <!-- 検索フォーム -->
      <form class="relative mb-8" role="search" @submit.prevent="onSearch">
        <input
          v-model="keyword"
          type="search"
          placeholder="Search"
          class="w-full font-ja text-[13px] border border-gray-200 rounded-none pl-4 pr-10 py-2.5 focus:outline-none focus:border-black transition-colors"
        />
        <button type="submit" aria-label="検索" class="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-gray-medium hover:text-black transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
        </button>
      </form>

      <!-- Category -->
      <AccordionSection title="Category" :open="true">
        <ul>
          <li v-for="cat in categories" :key="cat.value">
            <NuxtLink
              :to="cat.path"
              class="block font-ja text-[13px] py-2 border-b border-gray-100 transition-colors"
              :class="cat.value === category ? 'text-black font-bold' : 'text-gray-medium hover:text-black'"
            >
              {{ cat.label }}
            </NuxtLink>
          </li>
        </ul>
      </AccordionSection>

      <!-- Archive（年別） -->
      <AccordionSection title="Archive" :open="true">
        <ul>
          <li>
            <NuxtLink to="/news" class="block font-ja text-[13px] py-2 border-b border-gray-100 text-gray-medium hover:text-black transition-colors">All</NuxtLink>
          </li>
          <li v-for="y in archiveYears" :key="y">
            <NuxtLink
              :to="`/news/${y}`"
              class="block font-ja text-[13px] py-2 border-b border-gray-100 transition-colors"
              :class="y === activeYear ? 'text-black font-bold' : 'text-gray-medium hover:text-black'"
            >
              {{ y }}
            </NuxtLink>
          </li>
        </ul>
      </AccordionSection>

      <!-- Tag List -->
      <AccordionSection title="Tag List" :open="true">
        <ul class="flex flex-wrap gap-2 pt-1">
          <li v-for="tag in tagList" :key="tag">
            <NuxtLink
              :to="`/news/tag/${encodeURIComponent(tag)}`"
              class="inline-block font-ja text-[11px] border rounded-full px-3 py-1 transition-colors"
              :class="tag === activeTag ? 'border-black text-black bg-gray-100' : 'border-gray-200 text-gray-medium hover:border-black hover:text-black'"
            >
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </AccordionSection>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  category:   { type: String, default: '' },
  activeTag:  { type: String, default: '' },
  activeYear: { type: String, default: '' }
})

const { categories, tagList, archiveYears } = useNews()

const router = useRouter()
const keyword = ref('')
const onSearch = () => {
  const q = keyword.value.trim()
  if (q) router.push({ path: '/news/search', query: { q } })
}
</script>
