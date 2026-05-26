<template>
  <PageStub
    en-title="Public Notice"
    ja-title="電子公告"
    description="電子公告に関する情報をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Investors', path: '/ir/investor' },
      { label: 'Public Notice' }
    ]"
    official-path="/ir/investor/publicnotice/"
  />
</template>

<script setup>
useHead({ title: '電子公告 | IR | Valuence Holdings' })
</script>
