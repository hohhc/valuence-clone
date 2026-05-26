<template>
  <nav aria-label="パンくずリスト" class="font-en text-[10px] md:text-[11px] tracking-widest uppercase">
    <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 text-current/80">
      <li>
        <NuxtLink to="/" class="hover:opacity-60 transition-opacity">Home</NuxtLink>
      </li>
      <template v-for="(item, i) in items" :key="i">
        <li aria-hidden="true" class="opacity-40">/</li>
        <li>
          <template v-if="item.path && i < items.length - 1">
            <NuxtLink :to="item.path" class="hover:opacity-60 transition-opacity">{{ item.label }}</NuxtLink>
          </template>
          <template v-else>
            <span class="opacity-100">{{ item.label }}</span>
          </template>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
