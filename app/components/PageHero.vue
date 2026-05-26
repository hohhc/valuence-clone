<template>
  <section
    class="relative w-full overflow-hidden bg-black text-white"
    :class="compact ? 'h-[280px] md:h-[360px]' : 'h-[360px] md:h-[480px]'"
  >
    <div class="absolute inset-0 z-0">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover opacity-80"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-end pb-12 md:pb-16">
      <Breadcrumb v-if="breadcrumb" :items="breadcrumb" class="mb-6 md:mb-8" />

      <h1
        v-reveal
        class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        v-reveal="200"
        class="font-ja text-[14px] md:text-[16px] mt-4 md:mt-6 tracking-[0.1em] opacity-90"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title:      { type: String, required: true },
  subtitle:   { type: String, default: '' },
  image:      { type: String, default: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg' },
  breadcrumb: { type: Array,  default: null },
  compact:    { type: Boolean, default: false }
})
</script>
