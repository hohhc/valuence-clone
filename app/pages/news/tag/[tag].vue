<template>
  <div>
    <PageHero
      title="News"
      :subtitle="`タグ: ${tagName}`"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: tagName }]"
    />
    <PageSection bg="white">
      <NewsArchive :list="articles" :heading="tagName" :active-tag="tagName" />
    </PageSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { getByTag } = useNews()

const tagName = computed(() => {
  try { return decodeURIComponent(route.params.tag) } catch { return route.params.tag }
})
const articles = computed(() => getByTag(tagName.value))

useHead({ title: () => `${tagName.value} | News | Valuence Holdings` })
</script>
