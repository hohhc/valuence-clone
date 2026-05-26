<template>
  <PageStub
    en-title="Basic Info"
    ja-title="銘柄基本情報"
    description="銘柄基本情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Stock', path: '/ir/stock' },
      { label: 'Basic Info' }
    ]"
    official-path="/ir/stock/basic_info/"
  />
</template>

<script setup>
useHead({ title: '銘柄基本情報 | IR | Valuence Holdings' })
</script>
