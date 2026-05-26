<template>
  <PageStub
    en-title="Profit & Loss"
    ja-title="経営成績"
    description="経営成績（PL）の情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Finance', path: '/ir/finance' },
      { label: 'P/L' }
    ]"
    official-path="/ir/finance/pl/"
  />
</template>

<script setup>
useHead({ title: '経営成績 | IR | Valuence Holdings' })
</script>
