<template>
  <div>
    <div class="bg-gray-light border-b border-gray-200">
      <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-5">
        <Breadcrumb :items="[{ label: 'News', path: '/news' }, { label: article.category, path: categoryPath }, { label: 'Article' }]" />
      </div>
    </div>

    <PageSection bg="white">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <NewsSidebar :category="article.category" />

        <!-- 本文 -->
        <article class="w-full lg:w-3/4">
          <!-- 見出し -->
          <header class="mb-7 md:mb-8 pb-7 md:pb-8 border-b border-gray-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="font-ja text-[10px] font-bold border border-black px-3 py-[3px]">{{ article.category }}</span>
              <time class="font-en text-[12px] text-gray-medium tracking-widest">{{ article.date }}</time>
            </div>
            <h1 class="font-ja text-[22px] md:text-[30px] font-bold leading-[1.55]">{{ article.title }}</h1>
          </header>

          <!-- メイン画像 -->
          <div class="w-full aspect-[16/9] overflow-hidden bg-gray-100 mb-8 md:mb-10">
            <img :src="article.img" :alt="article.title" class="w-full h-full object-cover" />
          </div>

          <!-- 本文（公式 postContent） -->
          <div class="news-body font-ja text-gray-dark" v-html="article.body"></div>

          <!-- タグ -->
          <div class="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in article.tags"
              :key="tag"
              :to="`/news/tag/${encodeURIComponent(tag)}`"
              class="font-ja text-[11px] text-gray-medium border border-gray-200 rounded-full px-3 py-1 hover:border-black hover:text-black transition-colors"
            >
              {{ tag }}
            </NuxtLink>
          </div>

          <!-- Prev / Index / Next -->
          <nav class="mt-12 md:mt-16 grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8" aria-label="記事ナビゲーション">
            <div class="text-left">
              <NuxtLink v-if="adjacent.prev" :to="adjacent.prev.path" class="group inline-flex items-center gap-2 font-en text-[12px] tracking-widest uppercase hover:text-gray-medium transition-colors">
                <span class="transition-transform group-hover:-translate-x-1">←</span> Prev
              </NuxtLink>
            </div>
            <div class="text-center">
              <NuxtLink to="/news" class="font-en text-[12px] tracking-widest uppercase hover:text-gray-medium transition-colors">Index</NuxtLink>
            </div>
            <div class="text-right">
              <NuxtLink v-if="adjacent.next" :to="adjacent.next.path" class="group inline-flex items-center gap-2 font-en text-[12px] tracking-widest uppercase hover:text-gray-medium transition-colors">
                Next <span class="transition-transform group-hover:translate-x-1">→</span>
              </NuxtLink>
            </div>
          </nav>
        </article>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { getArticle, getAdjacent, categories } = useNews()

const { year, month, day, slug } = route.params
const article = getArticle(year, month, day, slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: '記事が見つかりませんでした', fatal: true })
}

const adjacent = getAdjacent(slug)
const categoryPath = computed(() => categories.find((c) => c.value === article.category)?.path || '/news')

useHead({ title: () => `${article.title} | News | Valuence Holdings` })
</script>

<style scoped>
.news-body :deep(p) {
  font-size: 15px;
  line-height: 2.1;
  color: #4b4b4b;
  margin-bottom: 1.6rem;
}
.news-body :deep(h2) {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin: 2.5rem 0 1.2rem;
}
.news-body :deep(h3) {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.6;
  margin: 2.2rem 0 1rem;
  padding-left: 0.8rem;
  border-left: 3px solid #000;
}
.news-body :deep(h4) {
  font-size: 15px;
  font-weight: 700;
  margin: 1.6rem 0 0.8rem;
}
.news-body :deep(a) {
  color: #1f7a4d;
  text-decoration: underline;
  word-break: break-all;
}
.news-body :deep(a:hover) {
  opacity: 0.7;
}
.news-body :deep(hr) {
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 2rem 0;
}
.news-body :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}
.news-body :deep(u) {
  text-underline-offset: 3px;
}
</style>
