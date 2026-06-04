<template>
  <div class="photo-set">
    <article
      v-for="(item, index) in items"
      :key="item.id"
      :ref="(el) => onItemRef?.(el, index)"
      class="photo-set-item group"
      :class="`photo-set-item--${item.style}`"
    >
      <div class="photo-set-eyecatch">
        <img :src="item.image" :alt="item.heading" loading="lazy" class="photo-set-img" />
        <div class="photo-set-caption">
          <p class="font-en text-[11px] md:text-[12px] leading-[1.5]" v-html="item.enHtml || item.en" />
        </div>
        <div class="photo-set-hover">
          <p class="font-ja text-[12px] md:text-[13px] leading-[1.8]" v-html="item.jaHtml || item.ja" />
        </div>
      </div>
      <div class="photo-set-summary">
        <p class="font-en text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-gray-medium">{{ item.label }}</p>
        <p class="font-ja text-[15px] md:text-[17px] font-bold mt-1">{{ item.heading }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  onItemRef: { type: Function, default: null }
})
</script>

<style scoped>
/* 本家 philosophyPhotoSet：散在配置 */
.photo-set {
  position: relative;
  min-height: 900px;
  max-width: 1100px;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .photo-set {
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .photo-set-item { position: relative !important; width: 100% !important; top: auto !important; left: auto !important; right: auto !important; }
}

.photo-set-item { position: absolute; }
.photo-set-item--05 { width: 38%; top: 0; left: 0; }
.photo-set-item--04 { width: 42%; top: 8%; right: 0; }
.photo-set-item--03 { width: 34%; top: 42%; left: 4%; }
.photo-set-item--02 { width: 38%; top: 52%; right: 8%; }
.photo-set-item--01 { width: 48%; bottom: 0; left: 22%; }

.photo-set-eyecatch {
  position: relative;
  overflow: hidden;
  background: #111;
}
.photo-set-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s;
}
.group:hover .photo-set-img { transform: scale(1.04); opacity: 0.55; }

.photo-set-caption {
  position: absolute;
  inset: 0;
  padding: 1rem 1.25rem;
  color: #fff;
  display: flex;
  align-items: flex-start;
  pointer-events: none;
  transition: opacity 0.4s;
}
.group:hover .photo-set-caption { opacity: 0; }

.photo-set-hover {
  position: absolute;
  inset: 0;
  padding: 1.25rem;
  background: rgba(12, 107, 69, 0.92);
  color: #fff;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.45s;
}
.group:hover .photo-set-hover { opacity: 1; }

.photo-set-summary { margin-top: 0.75rem; }
</style>
