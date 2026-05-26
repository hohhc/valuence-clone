<template>
  <NuxtLink
    :to="to"
    class="group inline-flex items-center gap-4 border-b border-black pb-1 hover:border-gray-400 transition-colors duration-300 ease-out-quart"
  >
    <span class="font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase group-hover:text-gray-medium transition-colors duration-300">
      <slot>View More</slot>
    </span>
    <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart">
      <span class="absolute inset-0 bg-black group-hover:bg-gray-400 transition-colors duration-300"></span>
      <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black group-hover:bg-gray-400 origin-right rotate-45 transition-colors duration-300"></span>
      <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black group-hover:bg-gray-400 origin-right -rotate-45 transition-colors duration-300"></span>
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true }
})
</script>
