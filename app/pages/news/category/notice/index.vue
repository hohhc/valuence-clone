<template>
  <PageStub
    en-title="Notice"
    ja-title="お知らせ"
    description="バリュエンスホールディングスからのお知らせ一覧です。"
    :breadcrumb="[
      { label: 'News', path: '/news' },
      { label: 'Notice' }
    ]"
    official-path="/news/category/notice/"
  />
</template>

<script setup>
useHead({ title: 'お知らせ | Valuence Holdings' })
</script>
