<template>
  <header v-reveal :class="['flex items-baseline gap-5 md:gap-7', alignClass, marginBottomClass]">
    <h2
      :class="[
        'font-en font-bold tracking-tightest leading-[0.95]',
        sizeClass
      ]"
    >
      {{ en }}
    </h2>
    <p v-if="ja" class="font-ja text-[12px] md:text-[13px] text-gray-medium tracking-wider">{{ ja }}</p>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  en:    { type: String, required: true },
  ja:    { type: String, default: '' },
  size:  { type: String, default: 'lg' },      // 'lg' | 'md' | 'sm'
  align: { type: String, default: 'left' },    // 'left' | 'center'
  spacing: { type: String, default: 'lg' }     // 'lg' | 'md' | 'sm'
})

const sizeClass = computed(() => ({
  lg: 'text-[clamp(2.5rem,7vw,5.5rem)]',
  md: 'text-[clamp(2rem,5vw,3.5rem)]',
  sm: 'text-[clamp(1.5rem,3.5vw,2.25rem)]'
}[props.size]))

const alignClass = computed(() => ({
  left:   '',
  center: 'justify-center text-center'
}[props.align]))

const marginBottomClass = computed(() => ({
  lg: 'mb-12 md:mb-16',
  md: 'mb-8 md:mb-10',
  sm: 'mb-6'
}[props.spacing]))
</script>
