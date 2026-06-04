<template>
  <div ref="root" class="vdm">
    <div class="vdm-head text-center mb-10 md:mb-14">
      <h2 v-reveal-mask class="font-en font-bold text-[clamp(1.75rem,4.5vw,3rem)] tracking-tight leading-[1.05]">
        Value Design Map
      </h2>
      <h3 class="font-ja text-[14px] md:text-[17px] font-bold leading-[1.7] mt-5 md:mt-6 whitespace-pre-line text-gray-dark">
        {{ subtitle }}
      </h3>
    </div>

    <div class="vdm-body">
      <div ref="sideRef" class="vdm-side">
        <div class="vdm-side-block vdm-side-block--main">
          <div v-for="item in mainLabels" :key="item.sub" class="vdm-side-item">
            <p class="font-en text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#1e8246] mb-1">{{ item.sub }}</p>
            <p class="font-ja text-[15px] md:text-[17px] font-bold leading-[1.5]">
              <span v-if="item.en1" class="font-en block">{{ item.en1 }}</span>
              <span v-if="item.en2" class="font-en block text-[13px] md:text-[14px] font-normal mt-0.5">{{ item.en2 }}</span>
              <span v-if="item.ja" class="block">{{ item.ja }}</span>
            </p>
          </div>
        </div>

        <div class="vdm-side-block vdm-side-block--values relative">
          <div
            v-if="onDecorateRef"
            :ref="onDecorateRef"
            class="vdm-decorate"
            aria-hidden="true"
          >
            <span v-for="n in 6" :key="n" />
          </div>
          <div v-for="cv in coreValues" :key="cv.id" class="vdm-side-item">
            <p class="font-en text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#1e8246] mb-1">{{ cv.en }}</p>
            <p class="font-ja text-[14px] md:text-[16px] font-bold">{{ cv.ja }}</p>
          </div>
        </div>

        <div class="vdm-line hidden lg:block" aria-hidden="true">
          <img :src="`${IMG}/vdm-obj_01.svg`" alt="" loading="lazy" class="w-full max-w-[120px] opacity-70" />
        </div>
      </div>

      <div class="vdm-main">
        <div :ref="(el) => setMapArea(el, onMapAreaRef)" class="vdm-map-area">
          <div
            v-for="(circle, i) in circles"
            :key="circle.name"
            :ref="(el) => setRing(el, i, onRingRef)"
            class="vdm-circle"
            :class="`vdm-circle--${circle.name.toLowerCase()}`"
          >
            <div class="vdm-circle-inner">
              <img
                v-if="circle.name === 'Earth'"
                :src="`${IMG}/vdm-obj_02.svg`"
                alt=""
                class="vdm-earth-map"
                loading="lazy"
              />
              <div
                v-else-if="circle.icons > 0"
                class="vdm-icons"
                :style="{ '--count': circle.icons }"
              >
                <span
                  v-for="n in circle.icons"
                  :key="n"
                  class="vdm-person"
                  :style="{ backgroundImage: `url(${IMG}/graph_person.svg)` }"
                />
              </div>
              <p class="font-en font-bold text-[11px] md:text-[14px] tracking-wide vdm-circle-label">{{ circle.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const IMG = 'https://www.valuence.inc/wp-content/themes/valuence/assets/images'

defineProps({
  subtitle: { type: String, required: true },
  mainLabels: { type: Array, required: true },
  coreValues: { type: Array, required: true },
  onRingRef: { type: Function, default: null },
  onMapAreaRef: { type: Function, default: null },
  onDecorateRef: { type: Function, default: null }
})

const circles = [
  { name: 'Earth', icons: 0 },
  { name: 'Local', icons: 30 },
  { name: 'Community', icons: 10 },
  { name: 'Family', icons: 3 },
  { name: 'Human', icons: 1 }
]

const setRing = (el, i, onRingRef) => { if (el && onRingRef) onRingRef(el, i) }
const setMapArea = (el, fn) => { if (el && fn) fn(el) }
</script>

<style scoped>
.vdm-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
@media (min-width: 1024px) {
  .vdm-body {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
  .vdm-side { width: 36%; position: relative; padding-left: 1rem; }
  .vdm-main { width: 64%; }
}

.vdm-side-block {
  position: relative;
  padding-left: 1.25rem;
  border-left: 1px solid rgba(30, 130, 60, 0.35);
}
.vdm-side-block--values { margin-top: 2.25rem; padding-top: 0.5rem; }
.vdm-side-item + .vdm-side-item { margin-top: 1.5rem; }

.vdm-decorate {
  position: absolute;
  left: -0.5rem;
  top: 0;
  width: 3rem;
  height: 3rem;
  pointer-events: none;
}
.vdm-decorate span {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(30, 130, 60, 0.25);
  border-radius: 9999px;
}
.vdm-decorate span:nth-child(1) { transform: scale(1); }
.vdm-decorate span:nth-child(2) { transform: scale(0.85); opacity: 0.8; }
.vdm-decorate span:nth-child(3) { transform: scale(0.7); opacity: 0.6; }
.vdm-decorate span:nth-child(4) { transform: scale(0.55); opacity: 0.45; }
.vdm-decorate span:nth-child(5) { transform: scale(0.4); opacity: 0.3; }
.vdm-decorate span:nth-child(6) { transform: scale(0.25); opacity: 0.2; }

.vdm-line {
  margin-top: 2rem;
  padding-left: 1.25rem;
}

.vdm-map-area {
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  aspect-ratio: 1;
  min-height: 280px;
}

.vdm-circle {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(30, 130, 60, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  will-change: transform, opacity;
}
.vdm-circle--earth {
  inset: 0;
  background: rgba(30, 130, 60, 0.05);
  z-index: 1;
}
.vdm-circle--local {
  inset: 7%;
  background: rgba(30, 130, 60, 0.08);
  z-index: 2;
}
.vdm-circle--community {
  inset: 17%;
  background: rgba(30, 130, 60, 0.11);
  z-index: 3;
}
.vdm-circle--family {
  inset: 28%;
  background: rgba(30, 130, 60, 0.15);
  z-index: 4;
}
.vdm-circle--human {
  inset: 40%;
  background: radial-gradient(circle at 32% 28%, #87f5ad 0%, #1e8246 48%, #0a5c3b 100%);
  color: #fff;
  border-color: rgba(135, 245, 173, 0.4);
  z-index: 5;
}

.vdm-circle-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  text-align: center;
  position: relative;
}
.vdm-circle--human .vdm-circle-label { color: #fff; }
.vdm-circle--earth .vdm-circle-inner { justify-content: flex-end; padding-bottom: 0.75rem; }

.vdm-earth-map {
  position: absolute;
  inset: 4%;
  width: 92%;
  height: auto;
  object-fit: contain;
  opacity: 0.9;
  pointer-events: none;
}

.vdm-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  gap: 1px;
  max-width: 88%;
  max-height: 42%;
  margin-bottom: 0.15rem;
  overflow: hidden;
}
.vdm-person {
  display: block;
  width: 7px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  opacity: 0.75;
}
.vdm-circle--local .vdm-person { width: 5px; height: 11px; }
.vdm-circle--community .vdm-person { width: 8px; height: 16px; }
.vdm-circle--family .vdm-person { width: 12px; height: 22px; }
.vdm-circle--human .vdm-person { width: 18px; height: 28px; opacity: 1; }
</style>
