<template>
  <div>
    <PageHero
      title="Philosophy"
      subtitle="企業理念"
      :breadcrumb="[{ label: 'Philosophy' }]"
    />

    <!-- Our Philosophy / Purpose -->
    <PageSection id="purpose" bg="white">
      <SectionHeading en="Purpose" ja="存在意義" />

      <div v-reveal class="max-w-4xl">
        <p class="font-en text-[13px] md:text-[15px] tracking-wider text-gray-medium mb-4">{{ purpose.en }}</p>
        <h3 class="font-ja text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-[1.5] mb-8 md:mb-10">
          {{ purpose.headline }}
        </h3>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium">
          {{ purpose.body }}
        </p>
      </div>
    </PageSection>

    <!-- Mission -->
    <PageSection id="mission" bg="black">
      <SectionHeading en="Mission" ja="使命" />

      <div v-reveal class="max-w-4xl">
        <p class="font-en text-[13px] md:text-[15px] tracking-wider text-white/60 mb-4">{{ mission.en }}</p>
        <h3 class="font-ja text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-[1.5] mb-8 md:mb-10">
          {{ mission.headline }}
        </h3>
        <p
          v-for="(para, i) in mission.body"
          :key="i"
          class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-white/70 mb-5 last:mb-0"
        >
          {{ para }}
        </p>
      </div>
    </PageSection>

    <!-- Core Value -->
    <PageSection id="coreValue" bg="white">
      <SectionHeading en="Core Value" ja="行動指針" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
        <div
          v-for="(cv, index) in coreValues"
          :key="cv.id"
          v-reveal="index * 100"
          class="bg-white p-7 md:p-8 flex flex-col min-h-[200px] md:min-h-[260px]"
        >
          <span class="font-en text-[12px] font-bold tracking-widest text-gray-400">0{{ index + 1 }}</span>
          <p class="font-en text-[14px] md:text-[15px] font-bold mt-auto">{{ cv.en }}</p>
          <p class="font-ja text-[15px] md:text-[16px] font-bold leading-[1.6] mt-2">{{ cv.ja }}</p>
        </div>
      </div>
    </PageSection>

    <!-- Value Mind -->
    <PageSection id="valueMind" bg="gray">
      <SectionHeading en="Value Mind" ja="バリューマインド" />

      <div class="flex flex-col gap-px bg-gray-200 border border-gray-200">
        <div
          v-for="(vm, index) in valueMinds"
          :key="vm.id"
          v-reveal
          class="bg-white p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10"
        >
          <div class="md:w-1/4 shrink-0">
            <span class="font-en text-[11px] font-bold tracking-widest text-gray-400 block mb-1">{{ vm.label }}</span>
            <h3 class="font-ja text-[18px] md:text-[20px] font-bold">{{ vm.heading }}</h3>
          </div>
          <div class="md:w-3/4">
            <p class="font-en text-[12px] md:text-[13px] text-gray-medium tracking-wider mb-2">{{ vm.en }}</p>
            <p class="font-ja text-[13px] md:text-[15px] leading-[1.9] text-gray-dark">{{ vm.ja }}</p>
          </div>
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const { purpose, mission, coreValues, valueMinds } = usePhilosophy()

useHead({ title: 'Philosophy | Valuence Holdings' })
</script>
