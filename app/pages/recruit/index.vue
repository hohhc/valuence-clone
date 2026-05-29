<template>
  <div>
    <PageHero
      title="Recruit"
      subtitle="採用情報"
      image="https://www.valuence.inc/wp-content/themes/valuence/assets/images/kv_03.jpg"
      :breadcrumb="[{ label: 'Recruit' }]"
    />

    <!-- イントロ -->
    <PageSection bg="white" spacing="md">
      <div v-reveal class="max-w-3xl">
        <h2 class="font-ja text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-[1.6] mb-6">
          これからの時代に必要な"豊かさ"を<br class="hidden md:block">共に創る仲間を探しています。
        </h2>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium">
          リユースのメガベンチャーとしてグローバル展開するバリュエンスでは、活躍のフィールドは無限大です。
          職種や経歴にとらわれず、「大切なことにフォーカスして生きる人を増やす」というミッションに共感する仲間を募集しています。
        </p>
      </div>
    </PageSection>

    <!-- 採用区分 -->
    <PageSection bg="gray" spacing="md">
      <SectionHeading en="Categories" ja="採用区分" />

      <div class="flex flex-col gap-6 md:gap-8">
        <article
          v-for="(type, index) in recruitTypes"
          :id="type.id"
          :key="type.id"
          v-reveal
          class="group scroll-mt-24 bg-white border border-gray-200 p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 hover:border-black/40 transition-colors duration-500"
        >
          <div class="md:w-1/3 shrink-0 flex items-baseline gap-4">
            <span class="font-en text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-gray-200">0{{ index + 1 }}</span>
            <div>
              <p class="font-en text-[12px] md:text-[13px] font-bold tracking-wider text-gray-medium">{{ type.en }}</p>
              <h3 class="font-ja text-[20px] md:text-[24px] font-bold mt-1">{{ type.ja }}</h3>
            </div>
          </div>

          <div class="md:w-2/3">
            <h4 class="font-ja text-[15px] md:text-[17px] font-bold mb-3">{{ type.headline }}</h4>
            <p class="font-ja text-[13px] md:text-[14px] leading-[2] text-gray-medium">{{ type.desc }}</p>
          </div>
        </article>
      </div>
    </PageSection>

    <!-- CTA -->
    <PageSection bg="black" spacing="md">
      <div v-reveal class="text-center flex flex-col items-center">
        <h2 class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2rem,6vw,4rem)] mb-8">
          Join Us
        </h2>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2] text-white/70 mb-10">
          あなたの挑戦したいことを、ぜひ教えてください。
        </p>
        <NuxtLink
          to="/contact"
          class="group relative inline-flex items-center justify-center overflow-hidden border border-white rounded-full px-12 md:px-16 py-3 md:py-[14px] font-en text-[11px] font-bold uppercase tracking-widest transition-colors duration-500 ease-out-quart hover:text-black"
        >
          <span class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-quart rounded-full"></span>
          <span class="relative z-10">Contact</span>
        </NuxtLink>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const { recruitTypes } = useRecruitTypes()

useHead({ title: 'Recruit | Valuence Holdings' })
</script>
