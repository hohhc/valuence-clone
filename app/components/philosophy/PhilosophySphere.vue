<template>
  <div
    class="philosophy-sphere"
    :class="[
      size === 'lg' ? 'philosophy-sphere--lg' : size === 'sm' ? 'philosophy-sphere--sm' : 'philosophy-sphere--md',
      { 'philosophy-sphere--float': float }
    ]"
  >
    <span v-if="label" class="font-ja font-bold text-white text-[13px] md:text-[15px]">{{ label }}</span>
    <span v-else-if="en" class="font-en font-bold text-white text-[11px] md:text-[12px] leading-tight text-center px-2">{{ en }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  en: { type: String, default: '' },
  size: { type: String, default: 'md' },
  float: { type: Boolean, default: false }
})
</script>

<style scoped>
.philosophy-sphere {
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: radial-gradient(circle at 32% 28%, #87f5ad 0%, #1e8246 42%, #0a5c3b 100%);
  box-shadow: 0 20px 50px -16px rgba(16, 122, 77, 0.55);
  flex-shrink: 0;
}
.philosophy-sphere--sm { width: 80px; height: 80px; }
.philosophy-sphere--md { width: 120px; height: 120px; }
.philosophy-sphere--lg { width: min(42vw, 280px); height: min(42vw, 280px); }
/* 浮遊は usePhilosophyGsap で制御（float 時は CSS アニメなし） */
</style>
