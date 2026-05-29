<template>
  <div>
    <PageHero
      title="Pick Up"
      subtitle="ニュースピックアップ"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: 'Pick Up' }]"
    />
    <PageSection bg="white">
      <NewsArchive category="pickup" heading="Pick Up" />
    </PageSection>
  </div>
</template>

<script setup>
useHead({ title: 'Pick Up | News | Valuence Holdings' })
</script>
