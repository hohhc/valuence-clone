<template>
  <div class="flex flex-col gap-8 md:gap-14 items-center" :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'">
    <!-- 画像 -->
    <div v-reveal class="w-full md:w-1/2">
      <div class="overflow-hidden">
        <img :src="image" :alt="en" loading="lazy" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- テキスト -->
    <div v-reveal="120" class="w-full md:w-1/2">
      <div class="relative flex items-center gap-5 mb-7 md:mb-9">
        <span class="sphere-badge shrink-0">
          <span class="font-en text-[11px] md:text-[12px] font-bold leading-tight">{{ en }}</span>
        </span>
        <h2 class="font-ja text-[clamp(1.4rem,3vw,2.1rem)] font-bold leading-[1.4]">{{ lead }}</h2>
      </div>

      <h3 class="font-ja text-[18px] md:text-[22px] font-bold leading-[1.6] mb-5 md:mb-6 whitespace-pre-line">{{ headline }}</h3>

      <div class="space-y-5">
        <p
          v-for="(para, i) in paragraphs"
          :key="i"
          class="font-ja text-[13px] md:text-[14.5px] leading-[2.05] text-gray-medium"
        >
          {{ para }}
        </p>
      </div>

      <a
        v-if="button"
        :href="button.href"
        target="_blank"
        rel="noopener"
        class="group inline-flex items-center gap-4 mt-9 border border-black rounded-full pl-7 pr-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
      >
        <span class="font-en text-[12px] font-bold tracking-widest uppercase">{{ button.label }}</span>
        <span class="relative inline-block h-[1px] w-7 group-hover:w-9 transition-all duration-300">
          <span class="absolute inset-0 bg-current"></span>
          <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-current origin-right rotate-45"></span>
          <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-current origin-right -rotate-45"></span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  en:       { type: String, required: true },
  lead:     { type: String, required: true },
  headline: { type: String, required: true },
  body:     { type: [String, Array], required: true },
  image:    { type: String, required: true },
  reverse:  { type: Boolean, default: false },
  button:   { type: Object, default: null }
})

const paragraphs = computed(() => (Array.isArray(props.body) ? props.body : [props.body]))
</script>

<style scoped>
.sphere-badge {
  width: 92px;
  height: 92px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: radial-gradient(circle at 32% 28%, #6fe3b0 0%, #1fa46a 45%, #0c6b45 100%);
  box-shadow: 0 12px 30px -10px rgba(16, 122, 77, 0.55);
}
@media (min-width: 768px) {
  .sphere-badge { width: 110px; height: 110px; }
}
</style>
