<template>
  <header :class="marginClass">
    <p
      v-reveal
      class="font-en font-bold tracking-[0.08em] text-gray-medium uppercase leading-[1.3]"
      :class="enSizeClass"
    >
      <span v-for="(w, i) in enWords" :key="i" class="inline-block mr-[0.4em] last:mr-0">{{ w }}</span>
    </p>
    <h2
      v-reveal-mask="120"
      class="font-ja font-bold leading-[1.4] mt-2 md:mt-3"
      :class="jaSizeClass"
    >
      {{ ja }}
    </h2>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  en:   { type: String, required: true },
  ja:   { type: String, required: true },
  size: { type: String, default: 'lg' },     // 'lg' | 'md'
  spacing: { type: String, default: 'lg' }    // 'lg' | 'md'
})

const enWords = computed(() => props.en.split(' '))

const enSizeClass = computed(() => ({
  lg: 'text-[13px] md:text-[15px]',
  md: 'text-[12px] md:text-[13px]'
}[props.size]))

const jaSizeClass = computed(() => ({
  lg: 'text-[clamp(1.75rem,4vw,2.75rem)]',
  md: 'text-[clamp(1.5rem,3vw,2rem)]'
}[props.size]))

const marginClass = computed(() => ({
  lg: 'mb-10 md:mb-14',
  md: 'mb-8 md:mb-10'
}[props.spacing]))
</script>
