<template>
  <section class="mb-8 last:mb-0">
    <button
      type="button"
      class="w-full flex items-center justify-between border-b-2 border-black pb-2 mb-1"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="font-en text-[16px] font-bold tracking-wider">{{ title }}</span>
      <span class="relative w-3 h-3 shrink-0">
        <span class="absolute top-1/2 left-0 w-3 h-[1.5px] bg-black -translate-y-1/2"></span>
        <span
          class="absolute top-1/2 left-0 w-3 h-[1.5px] bg-black -translate-y-1/2 transition-transform duration-300"
          :class="isOpen ? 'rotate-0' : 'rotate-90'"
        ></span>
      </span>
    </button>

    <div class="grid transition-[grid-template-rows] duration-300 ease-out-quart" :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
      <div class="overflow-hidden">
        <div class="pt-2">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  open:  { type: Boolean, default: true }
})

const isOpen = ref(props.open)
</script>
