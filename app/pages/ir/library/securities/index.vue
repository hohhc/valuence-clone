<template>
  <PageStub
    en-title="Securities Report"
    ja-title="有価証券報告書・四半期報告書"
    description="有価証券報告書および四半期報告書をご覧いただけます。"
    :breadcrumb="[
      { label: 'IR', path: '/ir' },
      { label: 'Library', path: '/ir/library' },
      { label: 'Securities' }
    ]"
    official-path="/ir/library/securities/"
  />
</template>

<script setup>
useHead({ title: '有価証券報告書 | IR | Valuence Holdings' })
</script>
