<template>
  <PageStub
    en-title="TOP Message"
    ja-title="トップメッセージ"
    description="代表取締役からのメッセージです。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Management', path: '/ir/management' },
      { label: 'TOP Message' }
    ]"
    official-path="/ir/management/message/"
  />
</template>

<script setup>
useHead({ title: 'トップメッセージ | IR | Valuence Holdings' })
</script>
