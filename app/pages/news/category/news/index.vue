<template>
  <PageStub
    en-title="Press Release"
    ja-title="プレスリリース"
    description="バリュエンスホールディングスのプレスリリース一覧です。"
    :breadcrumb="[
      { label: 'News', path: '/news' },
      { label: 'Press Release' }
    ]"
    official-path="/news/category/news/"
  />
</template>

<script setup>
useHead({ title: 'プレスリリース | Valuence Holdings' })
</script>
