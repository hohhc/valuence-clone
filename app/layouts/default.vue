<template>
  <div class="font-ja text-gray-dark bg-white min-h-screen flex flex-col relative antialiased">

    <AppHeader />
    <AppMenuPanel />

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
    <GdprPopup />

    <!-- SP用追従Contactボタン（ヒーロー外で出現） -->
    <div
      :class="[
        'md:hidden fixed bottom-[24px] left-1/2 -translate-x-1/2 w-[84%] max-w-[420px] z-[1000] pointer-events-auto transition-all duration-500 ease-out-quart',
        showSpFollow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      ]"
    >
      <NuxtLink
        to="/contact"
        class="flex items-center justify-center w-full h-[52px] border border-white rounded-full font-en text-[12px] font-bold tracking-widest uppercase mix-blend-difference text-white bg-transparent"
      >
        Contact
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showSpFollow = ref(false)
let onScroll = null

onMounted(() => {
  onScroll = () => {
    // ヒーロー（おおよそ画面1画面分）を超えたら表示
    showSpFollow.value = window.scrollY > window.innerHeight * 0.6
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll)
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&display=swap' }
  ]
})
</script>
