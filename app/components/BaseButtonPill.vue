<template>
  <NuxtLink
    :to="to"
    class="group relative inline-flex items-center justify-center overflow-hidden border border-black rounded-full px-10 md:px-14 py-3 md:py-[14px] font-en text-[11px] font-bold uppercase tracking-widest transition-colors duration-500 ease-out-quart hover:text-white"
  >
    <span class="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-quart rounded-full"></span>
    <span class="relative z-10"><slot>View More</slot></span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true }
})
</script>
