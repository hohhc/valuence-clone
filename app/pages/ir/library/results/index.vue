<template>
  <PageStub
    en-title="Financial Results"
    ja-title="決算短信・決算説明資料"
    description="決算短信および決算説明資料をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Library', path: '/ir/library' },
      { label: 'Results' }
    ]"
    official-path="/ir/library/results/"
  />
</template>

<script setup>
useHead({ title: '決算短信・決算説明資料 | IR | Valuence Holdings' })
</script>
