<template>
  <section
    :id="id"
    :class="[
      'w-full overflow-hidden scroll-mt-24',
      bgClass,
      paddingClass
    ]"
  >
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id:      { type: String, default: undefined },
  bg:      { type: String, default: 'white' },    // 'white' | 'gray' | 'black'
  spacing: { type: String, default: 'lg' }        // 'lg' | 'md' | 'sm' | 'none'
})

const bgClass = computed(() => ({
  white: 'bg-white text-gray-dark',
  gray:  'bg-gray-light text-gray-dark',
  black: 'bg-black text-white'
}[props.bg]))

const paddingClass = computed(() => ({
  lg:   'py-24 md:py-32',
  md:   'py-16 md:py-24',
  sm:   'py-12 md:py-16',
  none: ''
}[props.spacing]))
</script>
