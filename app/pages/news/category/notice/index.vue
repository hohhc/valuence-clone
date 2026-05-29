<template>
  <div>
    <PageHero
      title="News"
      subtitle="お知らせ"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: 'お知らせ' }]"
    />
    <PageSection bg="white">
      <NewsArchive category="お知らせ" heading="Notice" />
    </PageSection>
  </div>
</template>

<script setup>
useHead({ title: 'お知らせ | News | Valuence Holdings' })
</script>
