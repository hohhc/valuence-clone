<template>
  <div>
    <PageHero
      title="News"
      subtitle="ニュース"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: `Page ${pageNum}` }]"
    />
    <PageSection bg="white">
      <NewsArchive category="all" :heading="`All（Page ${pageNum}）`" :page="pageNum" :per-page="8" page-base="/news" />
    </PageSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const pageNum = computed(() => {
  const n = parseInt(route.params.page, 10)
  return Number.isFinite(n) && n > 0 ? n : 1
})

useHead({ title: () => `News Page ${pageNum.value} | Valuence Holdings` })
</script>
