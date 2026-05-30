<template>
  <div>
    <PageHero
      title="News"
      :subtitle="query ? `「${query}」の検索結果` : '検索'"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: 'Search' }]"
    />
    <PageSection bg="white">
      <NewsArchive :list="results" :heading="`Search${query ? `：${query}` : ''}`" />
    </PageSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { search } = useNews()

const query = computed(() => (route.query.q || '').toString())
const results = computed(() => search(query.value))

useHead({ title: () => `検索${query.value ? `：${query.value}` : ''} | News | Valuence Holdings` })
</script>
