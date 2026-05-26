<template>
  <PageStub
    en-title="Stock Procedure"
    ja-title="株式手続き"
    description="株式に関する各種手続きについてご案内します。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Stock', path: '/ir/stock' },
      { label: 'Procedure' }
    ]"
    official-path="/ir/stock/procedure/"
  />
</template>

<script setup>
useHead({ title: '株式手続き | IR | Valuence Holdings' })
</script>
