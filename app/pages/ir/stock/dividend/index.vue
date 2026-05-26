<template>
  <PageStub
    en-title="Dividend"
    ja-title="配当情報"
    description="配当に関する情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Stock', path: '/ir/stock' },
      { label: 'Dividend' }
    ]"
    official-path="/ir/stock/dividend/"
  />
</template>

<script setup>
useHead({ title: '配当情報 | IR | Valuence Holdings' })
</script>
