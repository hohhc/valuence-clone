<template>
  <header
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="[
      'fixed w-full top-0 left-0 z-[100] transition-all duration-500 ease-out-quart',
      isHeaderActive ? 'bg-white h-[72px] md:h-[80px] shadow-[0_1px_0_rgba(0,0,0,0.05)] text-black' : 'bg-transparent h-[88px] md:h-[100px] text-white'
    ]"
  >
    <div class="h-full px-6 md:px-12 lg:px-16 flex items-center justify-between">

      <div class="col-logo">
        <NuxtLink
          to="/"
          class="flex items-center font-en font-bold text-[20px] md:text-[24px] tracking-[0.15em] uppercase transition-colors duration-500"
          aria-label="Valuence Circular Design Company"
        >
          Valuence
        </NuxtLink>
      </div>

      <div class="col-nav flex items-center gap-5 md:gap-7 h-full">

        <div class="globalNav hidden lg:flex items-center h-full">
          <nav class="h-full" aria-label="グローバルナビゲーション">
            <ul class="parent flex items-center font-en text-[11px] font-bold tracking-widest uppercase h-full">

              <li
                v-for="menu in megaMenus"
                :key="menu.en"
                class="hasChild group h-full flex items-center mr-7"
              >
                <NuxtLink
                  :to="menu.path"
                  class="flex items-center hover:text-gray-medium transition-colors duration-200 h-full px-1"
                >
                  <span>{{ menu.en }}</span>
                </NuxtLink>

                <div class="menuSection absolute top-full left-0 w-full bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out-quart shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-t border-gray-100 text-black cursor-default">
                  <div class="inner max-w-[1400px] mx-auto px-12 lg:px-16 py-14 flex gap-16">
                    <div class="col-ttl w-1/4">
                      <NuxtLink :to="menu.path" class="ttlLink inline-block group/ttl">
                        <p class="en font-en text-[32px] md:text-[36px] font-bold tracking-tighter capitalize group-hover/ttl:text-gray-medium transition-colors leading-none">{{ menu.en }}</p>
                        <h2 class="ja font-ja text-[12px] font-medium text-gray-medium mt-3">{{ menu.ja }}</h2>
                      </NuxtLink>
                    </div>
                    <div class="col-nav w-3/4 grid grid-cols-3 gap-x-12 gap-y-10">
                      <div v-for="item in menu.items" :key="item.name" class="item flex flex-col">
                        <div class="largeLink">
                          <NuxtLink
                            :to="item.path"
                            class="font-ja text-[13px] font-bold pb-2 border-b border-gray-200 hover:text-gray-medium transition-colors flex items-center justify-between"
                          >
                            <span>{{ item.name }}</span>
                          </NuxtLink>
                        </div>
                        <div v-if="item.subLinks" class="childLink">
                          <ul class="mt-4 flex flex-col gap-3">
                            <li v-for="sub in item.subLinks" :key="sub.name">
                              <NuxtLink
                                :to="sub.path"
                                class="font-ja text-[11px] text-gray-500 hover:text-gray-800 transition-colors"
                              >
                                {{ sub.name }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="style_01 h-full flex items-center">
                <NuxtLink
                  to="/contact"
                  class="header-contactBtn flex items-center justify-center w-[140px] py-[6px] mx-2 border border-current rounded-full font-en text-[11px] font-normal tracking-widest uppercase transition-all duration-300 ease-out-quart"
                  :class="isHeaderActive ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'"
                >
                  <span>Contact</span>
                </NuxtLink>
              </li>

            </ul>
          </nav>
        </div>

        <div class="langSelector flex items-center font-en text-[10px] font-bold tracking-wider">
          <ul class="flex items-center gap-2">
            <li><a href="/en/" class="opacity-60 hover:opacity-100 transition-opacity" title="EN">EN</a></li>
            <li class="opacity-30">|</li>
            <li><a href="/" class="border-b border-current pb-0.5" title="JP" aria-current="page">JP</a></li>
          </ul>
        </div>

        <div class="searchSec flex items-center">
          <button
            type="button"
            class="hover:opacity-60 transition-opacity"
            aria-label="サイト内検索"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-[18px] h-[18px]">
              <circle cx="11" cy="11" r="7"/>
              <path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
        </div>

        <div class="burgerNav lg:hidden flex items-center">
          <button
            type="button"
            class="burger cursor-pointer flex flex-col gap-[6px] w-7 h-7 items-center justify-center"
            :aria-expanded="isMenuOpen"
            aria-label="メニュー"
            @click="toggleMenu"
          >
            <span
              class="w-6 h-[2px] bg-current block transition-all duration-300 ease-out-quart origin-center"
              :class="{ 'rotate-45 translate-y-[4px]': isMenuOpen }"
            ></span>
            <span
              class="w-6 h-[2px] bg-current block transition-all duration-300 ease-out-quart origin-center"
              :class="{ '-rotate-45 -translate-y-[4px]': isMenuOpen }"
            ></span>
          </button>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const isScrolled = ref(false)
const isHovered = ref(false)
const isMenuOpen = useState('appMenuOpen', () => false)

const isHeaderActive = computed(() => isScrolled.value || isHovered.value || isMenuOpen.value)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

const { megaMenus } = useNavigation()
</script>
