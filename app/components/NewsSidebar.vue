<template>
  <aside class="w-full lg:w-1/4 shrink-0 order-1 lg:order-none">
    <div class="lg:sticky lg:top-28">
      <h2 class="font-en text-[20px] font-bold tracking-wider mb-5">Category</h2>
      <ul class="flex flex-row flex-wrap lg:flex-col gap-x-4 gap-y-2 border-b lg:border-b-0 border-gray-200 pb-5 lg:pb-0">
        <li v-for="cat in categories" :key="cat.value">
          <NuxtLink
            :to="cat.path"
            class="font-ja text-[13px] transition-colors lg:py-1.5 lg:block"
            :class="cat.value === category ? 'text-black font-bold' : 'text-gray-medium hover:text-black'"
          >
            {{ cat.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-10 hidden lg:block">
        <h2 class="font-en text-[20px] font-bold tracking-wider mb-5">Tag List</h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="tag in tagList" :key="tag">
            <NuxtLink
              :to="`/news/tag/${encodeURIComponent(tag)}`"
              class="inline-block font-ja text-[11px] border rounded-full px-3 py-1 transition-colors"
              :class="tag === activeTag ? 'border-black text-black bg-gray-100' : 'border-gray-200 text-gray-medium hover:border-black hover:text-black'"
            >
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  category:  { type: String, default: '' },
  activeTag: { type: String, default: '' }
})

const { categories, tagList } = useNews()
</script>
