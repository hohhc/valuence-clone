<template>
  <PageStub
    en-title="Media"
    ja-title="メディア掲載"
    description="バリュエンスホールディングスが掲載されたメディア情報一覧です。"
    :breadcrumb="[
      { label: 'News', path: '/news' },
      { label: 'Media' }
    ]"
    official-path="/news/category/media/"
  />
</template>

<script setup>
useHead({ title: 'メディア掲載 | Valuence Holdings' })
</script>
