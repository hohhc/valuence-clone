<template>
  <div>
    <PageHero
      title="News"
      subtitle="メディア掲載"
      :breadcrumb="[{ label: 'News', path: '/news' }, { label: 'メディア掲載' }]"
    />
    <PageSection bg="white">
      <NewsArchive category="メディア掲載" heading="Media" />
    </PageSection>
  </div>
</template>

<script setup>
useHead({ title: 'メディア掲載 | News | Valuence Holdings' })
</script>
