<template>
  <PageStub
    en-title="Financial Summary"
    ja-title="財務サマリ"
    description="主要な財務指標のサマリ情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Finance', path: '/ir/finance' },
      { label: 'Summary' }
    ]"
    official-path="/ir/finance/summary/"
  />
</template>

<script setup>
useHead({ title: '財務サマリ | IR | Valuence Holdings' })
</script>
