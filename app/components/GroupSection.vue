<template>
  <section id="group" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div class="flex justify-between items-end mb-12 md:mb-16">
        <h2 v-reveal-mask class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          Group
        </h2>
        <div v-reveal="150" class="hidden md:block mb-2">
          <BaseButtonArrow to="/company/#group">View More</BaseButtonArrow>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <article
          v-for="(item, index) in groups"
          :key="item.en"
          v-reveal="index * 120"
          class="border border-gray-200 p-7 md:p-8 flex flex-col min-h-[280px] hover:border-black/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out-quart bg-white"
        >
          <a :href="item.url" class="h-full flex flex-col">
            <div class="h-12 mb-8 flex items-center">
              <img :src="item.logo" class="max-h-full object-contain object-left" :alt="item.en" />
            </div>

            <h3 class="font-en font-bold text-[16px] md:text-[18px] leading-tight mb-2">{{ item.en }}</h3>
            <p class="font-ja text-[11px] text-gray-medium mb-5">{{ item.ja }}</p>
            <p class="font-ja text-[12px] md:text-[13px] text-gray-medium mt-auto leading-[1.9]">{{ item.desc }}</p>
          </a>
        </article>
      </div>

      <div v-reveal class="mt-12 md:hidden text-center">
        <BaseButtonPill to="/company/#group" class="w-full">
          View More
        </BaseButtonPill>
      </div>

    </div>
  </section>
</template>

<script setup>
const { groups } = useGroups()
</script>
