<template>
  <div>
    <PageHero
      title="News"
      :subtitle="`${year}年のニュース`"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: year }]"
    />
    <PageSection bg="white">
      <NewsArchive :list="articles" :heading="`${year}`" :active-year="year" />
    </PageSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { getByYear } = useNews()

const year = computed(() => String(route.params.year))
const articles = computed(() => getByYear(year.value))

useHead({ title: () => `${year.value} | News | Valuence Holdings` })
</script>
