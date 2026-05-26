<template>
  <PageStub
    en-title="Stock Price"
    ja-title="株価情報"
    description="バリュエンスホールディングスの株価情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Stock', path: '/ir/stock' },
      { label: 'Price' }
    ]"
    official-path="/ir/stock/price/"
  />
</template>

<script setup>
useHead({ title: '株価情報 | IR | Valuence Holdings' })
</script>
