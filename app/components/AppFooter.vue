<template>
  <footer class="bg-white text-black pt-20 md:pt-24 pb-10 px-6 md:px-12 lg:px-20 border-t border-gray-200">
    <div class="max-w-[1400px] mx-auto">

      <div class="flex flex-col lg:flex-row justify-between mb-12 md:mb-20 gap-10 lg:gap-16">

        <div class="lg:w-1/5 shrink-0">
          <NuxtLink to="/" class="font-en font-bold text-[28px] md:text-[32px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">
            Valuence
          </NuxtLink>
        </div>

        <!-- サイトマップ：PC = 多段グリッド / SP = アコーディオン -->
        <nav class="w-full lg:w-4/5">
          <ul class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-12">
            <li
              v-for="(menu, i) in megaMenus"
              :key="menu.en"
              class="border-b border-gray-200 md:border-b-0"
            >
              <!-- 見出し行：タイトルはリンク / アイコンは SP のみアコーディオン開閉 -->
              <div class="flex items-center justify-between py-4 md:py-0 md:mb-4">
                <NuxtLink
                  :to="menu.path"
                  class="font-en text-[13px] font-bold tracking-widest uppercase hover:text-gray-medium transition-colors"
                >
                  {{ menu.en }}
                </NuxtLink>
                <button
                  type="button"
                  class="relative w-5 h-5 md:hidden shrink-0"
                  :aria-expanded="isOpen(i)"
                  :aria-label="`${menu.en} を開閉`"
                  @click="toggle(i)"
                >
                  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1.5px] bg-black"></span>
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1.5px] bg-black transition-transform duration-300 ease-out-quart"
                    :class="isOpen(i) ? 'rotate-0' : 'rotate-90'"
                  ></span>
                </button>
              </div>

              <!-- 中身：SP は grid-rows トリックでアニメ開閉 / PC は常時表示 -->
              <div
                class="grid transition-all duration-300 ease-out-quart md:!grid-rows-[1fr] md:!opacity-100"
                :class="isOpen(i) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <ul class="flex flex-col gap-3 pb-5 md:pb-0">
                    <li v-for="item in menu.items" :key="item.name">
                      <NuxtLink
                        :to="item.path"
                        class="font-ja text-[12px] text-gray-medium hover:text-black transition-colors"
                      >
                        {{ item.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 下段ライン -->
      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div class="flex items-center gap-6">
          <img
            src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/foot-mark_01.svg"
            class="w-7 h-7"
            alt="Valuence"
            loading="lazy"
          />
          <a href="https://www.nankatsu-sc.com/" target="_blank" rel="noopener" aria-label="Nankatsu SC">
            <img
              src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/foot-mark_03.svg"
              class="w-7 h-7 hover:opacity-70 transition-opacity"
              alt="Nankatsu SC"
              loading="lazy"
            />
          </a>
          <a
            href="https://x.com/Valuence_group"
            target="_blank"
            rel="noopener"
            class="hover:opacity-60 transition-opacity"
            aria-label="X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.343l8.06-9.21L1 2h7.018l4.844 6.43L18.244 2Zm-2.4 18h1.86L7.27 4h-1.99l10.564 16Z"/>
            </svg>
          </a>
        </div>

        <div class="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
          <ul class="flex flex-wrap gap-x-6 gap-y-3 text-[10px] md:text-[11px] font-ja text-gray-medium">
            <li v-for="legal in legalLinks" :key="legal.path">
              <NuxtLink :to="legal.path" class="hover:text-black transition-colors">{{ legal.name }}</NuxtLink>
            </li>
          </ul>
          <div class="text-[10px] font-en tracking-widest text-gray-medium uppercase">
            © Valuence Holdings Inc.
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const { megaMenus, legalLinks } = useNavigation()

const openSet = ref(new Set())
const isOpen = (i) => openSet.value.has(i)
const toggle = (i) => {
  const next = new Set(openSet.value)
  next.has(i) ? next.delete(i) : next.add(i)
  openSet.value = next
}
</script>
