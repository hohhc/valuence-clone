<template>
  <PageStub
    en-title="Balance Sheet"
    ja-title="財務状況"
    description="財務状況（BS）の情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Finance', path: '/ir/finance' },
      { label: 'B/S' }
    ]"
    official-path="/ir/finance/bs/"
  />
</template>

<script setup>
useHead({ title: '財務状況 | IR | Valuence Holdings' })
</script>
