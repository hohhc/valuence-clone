<template>
  <div>
    <PageHero
      title="News"
      subtitle="ニュース"
      :breadcrumb="[{ label: 'News' }]"
    />
    <PageSection bg="white">
      <NewsArchive category="all" heading="All" :page="1" :per-page="8" page-base="/news" />
    </PageSection>
  </div>
</template>

<script setup>
useHead({ title: 'News | Valuence Holdings' })
</script>
