<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out-quart"
    enter-from-class="opacity-0 translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-out-quart"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-full"
  >
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 w-full bg-[#F7F7F7] border-t border-gray-border z-[100] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 font-en text-xs text-[#1a1a1a] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div class="flex-grow max-w-3xl">
        <p class="mb-2 leading-relaxed">
          We use cookies to give you the best online experience. By agreeing you accept the use of cookies in accordance with our cookie policy.
        </p>
        <div class="flex gap-4">
          <NuxtLink to="/privacy" class="text-[#00883F] hover:underline transition-all">Privacy Center</NuxtLink>
          <button class="text-[#00883F] hover:underline transition-all">Privacy Settings</button>
        </div>
      </div>

      <div class="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
        <button
          @click="accept"
          class="flex-1 md:flex-none bg-black text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity uppercase font-bold tracking-wider whitespace-nowrap"
        >
          I accept
        </button>
        <button
          @click="decline"
          class="flex-1 md:flex-none bg-white border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors uppercase font-bold tracking-wider whitespace-nowrap"
        >
          Decline
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'valuence-gdpr-consent'
const isVisible = ref(false)

onMounted(() => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // 1秒ほど遅らせて自然にスライドイン
      setTimeout(() => { isVisible.value = true }, 800)
    }
  } catch (_) {
    isVisible.value = true
  }
})

const persist = (value) => {
  try { localStorage.setItem(STORAGE_KEY, value) } catch (_) {}
  isVisible.value = false
}

const accept = () => persist('accepted')
const decline = () => persist('declined')
</script>
