<template>
  <nav class="border-y border-gray-200 bg-white/90 backdrop-blur-sm" aria-label="ページ内ナビ">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
      <ul class="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center gap-x-7 md:gap-x-10 gap-y-2 py-4 md:py-5 no-scrollbar">
        <li v-for="item in items" :key="item.hash" class="shrink-0">
          <a
            :href="item.hash"
            class="font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase text-gray-medium hover:text-black transition-colors whitespace-nowrap"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const items = [
  { label: 'Corporate Information', hash: '#holding' },
  { label: 'CEO',                   hash: '#ceo' },
  { label: 'Directors',             hash: '#directors' },
  { label: 'History',               hash: '#history' },
  { label: 'Global Action',         hash: '#globalAction' },
  { label: 'Valuence in Numbers',   hash: '#vin' },
  { label: 'Group',                 hash: '#group' }
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
