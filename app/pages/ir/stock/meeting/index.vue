<template>
  <PageStub
    en-title="General Meeting"
    ja-title="株主総会関連情報"
    description="株主総会に関する関連情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Stock', path: '/ir/stock' },
      { label: 'Meeting' }
    ]"
    official-path="/ir/stock/meeting/"
  />
</template>

<script setup>
useHead({ title: '株主総会関連情報 | IR | Valuence Holdings' })
</script>
