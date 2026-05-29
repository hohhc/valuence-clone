<template>
  <div>
    <PageHero
      title="News"
      subtitle="プレスリリース"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: 'プレスリリース' }]"
    />
    <PageSection bg="white">
      <NewsArchive category="プレスリリース" heading="Press Release" />
    </PageSection>
  </div>
</template>

<script setup>
useHead({ title: 'プレスリリース | News | Valuence Holdings' })
</script>
