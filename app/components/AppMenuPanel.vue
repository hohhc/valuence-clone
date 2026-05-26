<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out-quart"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-out-quart"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white z-[90] pt-[88px] overflow-y-auto lg:hidden"
    >
      <div class="px-6 pb-24">
        <ul class="flex flex-col gap-0 font-en font-bold tracking-widest uppercase">
          <li
            v-for="(item, i) in items"
            :key="item.en"
            class="border-b border-gray-border"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <NuxtLink
              :to="item.path"
              @click="close"
              class="flex items-end justify-between group py-5"
            >
              <span class="text-[28px] md:text-[32px] group-hover:text-gray-medium transition-colors">{{ item.en }}</span>
              <span class="text-[11px] font-ja text-gray-medium font-normal mb-2">{{ item.ja }}</span>
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-12">
          <NuxtLink
            to="/contact"
            @click="close"
            class="flex items-center justify-center border border-black rounded-full py-4 font-en text-[11px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
          >
            Contact
          </NuxtLink>
        </div>

        <div class="mt-8 flex justify-center font-en text-[11px] font-bold">
          <a href="/en/" class="opacity-60 hover:opacity-100 transition-opacity">EN</a>
          <span class="mx-3 opacity-30">|</span>
          <a href="/" class="border-b border-current pb-0.5" aria-current="page">JP</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isMenuOpen = useState('appMenuOpen', () => false)

const items = [
  { en: 'Company',        ja: '企業情報',         path: '/company' },
  { en: 'Philosophy',     ja: '企業理念',         path: '/philosophy' },
  { en: 'Business',       ja: '事業紹介',         path: '/business' },
  { en: 'News',           ja: 'ニュース',         path: '/news' },
  { en: 'IR',             ja: '投資家情報',       path: '/ir' },
  { en: 'Sustainability', ja: 'サステナビリティ', path: '/sustainability' },
  { en: 'Recruit',        ja: '採用情報',         path: '/recruit' }
]

const close = () => {
  isMenuOpen.value = false
}
</script>
