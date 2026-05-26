<template>
  <div>
    <PageHero
      :title="enTitle"
      :subtitle="jaTitle"
      :breadcrumb="breadcrumb"
    />

    <PageSection bg="white" spacing="lg">
      <SectionHeading :en="enTitle" :ja="jaTitle" size="md" spacing="md" />

      <p v-if="description" v-reveal class="font-ja text-[14px] md:text-[16px] leading-[2] text-gray-medium max-w-3xl">
        {{ description }}
      </p>

      <div v-else v-reveal class="font-ja text-[13px] md:text-[15px] text-gray-medium leading-[2] max-w-3xl">
        このページは現在準備中です。バリュエンスホールディングス公式サイト
        <a class="underline hover:text-black" :href="`https://www.valuence.inc${officialPath}`" target="_blank" rel="noopener">こちら</a>
        からご覧いただけます。
      </div>

      <div v-reveal="200" class="mt-12">
        <BaseButtonArrow to="/">Back to Home</BaseButtonArrow>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
defineProps({
  enTitle:      { type: String, required: true },
  jaTitle:      { type: String, default: '' },
  description:  { type: String, default: '' },
  breadcrumb:   { type: Array,  default: () => [] },
  officialPath: { type: String, default: '/' }
})
</script>
