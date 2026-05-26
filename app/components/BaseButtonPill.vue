<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center justify-center border border-black rounded-full px-10 md:px-14 py-3 md:py-[14px] font-en text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ease-out-quart"
  >
    <slot>View More</slot>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true }
})
</script>
