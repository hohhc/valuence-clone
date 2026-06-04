<template>
  <div ref="pageRoot" class="philosophy-page bg-white">
    <!-- #intro / philosophyVis -->
    <section id="intro" ref="heroSection" class="philosophy-hero" data-phil-bg="#ffffff">
      <div class="philosophy-hero__balls" aria-hidden="true">
        <span ref="heroBallWrap0" class="philosophy-hero__ball-wrap philosophy-hero__ball-wrap--main">
          <span ref="heroBall0" class="philosophy-hero__ball philosophy-hero__ball--main"></span>
        </span>
        <span ref="heroBallWrap1" class="philosophy-hero__ball-wrap philosophy-hero__ball-wrap--sub1">
          <span ref="heroBall1" class="philosophy-hero__ball philosophy-hero__ball--sub"></span>
        </span>
        <span ref="heroBallWrap2" class="philosophy-hero__ball-wrap philosophy-hero__ball-wrap--sub2">
          <span ref="heroBall2" class="philosophy-hero__ball philosophy-hero__ball--sub"></span>
        </span>
      </div>
      <div ref="heroContent" class="philosophy-hero__content">
        <h1 class="font-en font-bold text-[clamp(3rem,9vw,6.5rem)] tracking-tightest leading-none">Philosophy</h1>
        <p class="font-ja text-[15px] md:text-[18px] mt-5 md:mt-6 tracking-[0.1em]">私たちが、大切にしていること。</p>
      </div>
    </section>

    <AnchorNav :items="nav" />

    <!-- #philosophy：Circular Design -->
    <section id="philosophy" ref="conceptSection" class="phil-section phil-section--gray" data-phil-bg="#f5f5f5">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="phil-concept">
          <div class="phil-concept__sphere">
            <div ref="conceptSphereWrap" class="phil-concept__sphere-inner">
              <svg
                ref="conceptRing"
                class="phil-concept__ring"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  fill="none"
                  stroke="rgba(0,0,0,0.18)"
                  stroke-width="2"
                  stroke-dasharray="1000"
                  stroke-dashoffset="1000"
                />
              </svg>
              <PhilosophySphere ref="conceptBall" size="lg" float class="phil-concept__ball" />
            </div>
          </div>
          <div class="phil-concept__text">
            <h2 class="font-en font-bold leading-[1.08] text-[clamp(2rem,5vw,3.75rem)] tracking-tight">
              <span ref="conceptLine0" class="block">Circular Design</span>
              <span ref="conceptLine1" class="block">for the Earth</span>
              <span ref="conceptLine2" class="block">and Us</span>
            </h2>
            <h3 ref="conceptJa" class="font-ja text-[16px] md:text-[20px] font-bold mt-8 md:mt-10 leading-[1.7]">{{ concept.ja }}</h3>
            <p ref="conceptSummary" class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium mt-6 md:mt-8">{{ concept.summary }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- #valueProgress -->
    <section id="valueProgress" ref="pillarsSection" class="phil-section" data-phil-bg="#ffffff">
      <div class="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20">
        <h3 v-reveal class="font-ja text-[16px] md:text-[22px] font-bold leading-[1.75] text-center mb-14 md:mb-20">
          {{ pillars.lead }}
        </h3>
        <div class="phil-pillars">
          <picture ref="pillarLine" class="phil-pillars__line hidden md:block">
            <source :srcset="pillars.lineImage" media="(min-width: 769px)" />
            <img :src="pillars.lineImageSp" alt="" loading="lazy" width="535" height="103" />
          </picture>
          <div class="phil-pillars__items">
            <div
              v-for="(item, i) in pillars.items"
              :key="item.en"
              :ref="(el) => setPillarItem(el, i)"
              class="phil-pillars__item"
            >
              <div :ref="(el) => setPillarSphere(el, i)">
                <PhilosophySphere :label="item.sphere" size="md" />
              </div>
              <div class="phil-pillars__content">
                <p class="font-en text-[22px] md:text-[28px] font-bold leading-none">{{ item.en }}</p>
                <p class="font-ja text-[12px] md:text-[13px] text-gray-medium mt-1 mb-2">{{ item.ja }}</p>
                <p class="font-ja text-[13px] md:text-[14.5px] leading-[1.95] text-gray-dark">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- #purpose -->
    <section id="purpose" ref="purposeSection" class="phil-section" data-phil-bg="#ffffff">
      <div class="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="phil-article phil-article--purpose">
          <div class="phil-article__img phil-article__img--pc hidden md:block">
            <img :src="purpose.image" alt="" loading="lazy" class="w-full h-auto" />
          </div>
          <div class="phil-article__body">
            <div class="phil-article__head">
              <PhilosophySphere :en="purpose.en" size="md" />
              <h2 v-reveal-mask class="font-ja text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.5]">{{ purpose.lead }}</h2>
            </div>
            <div class="phil-article__img phil-article__img--sp md:hidden my-8">
              <img :src="purpose.image" alt="" loading="lazy" class="w-full h-auto" />
            </div>
            <h3 class="font-ja text-[18px] md:text-[22px] font-bold leading-[1.65] mb-6 whitespace-pre-line">{{ purpose.headline }}</h3>
            <p class="font-ja text-[13px] md:text-[14.5px] leading-[2.05] text-gray-medium">{{ purpose.body }}</p>
            <a
              :href="purpose.button.href"
              target="_blank"
              rel="noopener"
              class="phil-btn mt-10"
            >
              <span>{{ purpose.button.label }}</span>
              <span class="phil-btn__arrow" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- #mission -->
    <section id="mission" ref="missionSection" class="phil-section phil-section--gray" data-phil-bg="#f5f5f5">
      <div class="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="phil-article phil-article--mission">
          <div class="phil-article__body">
            <div class="phil-article__head">
              <PhilosophySphere :en="mission.en" size="md" />
              <h2 v-reveal-mask class="font-ja text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.5]">{{ mission.lead }}</h2>
            </div>
            <div class="phil-article__img my-8 md:hidden">
              <img :src="mission.image" alt="" loading="lazy" class="w-full h-auto" />
            </div>
            <h3 class="font-ja text-[18px] md:text-[22px] font-bold leading-[1.65] mb-6 whitespace-pre-line">{{ mission.headline }}</h3>
            <div class="space-y-5">
              <p v-for="(p, i) in mission.body" :key="i" class="font-ja text-[13px] md:text-[14.5px] leading-[2.05] text-gray-medium">{{ p }}</p>
            </div>
          </div>
          <div class="phil-article__img hidden md:block">
            <img :src="mission.image" alt="" loading="lazy" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- #coreValue -->
    <section id="coreValue" ref="coreValueSection" class="phil-section" data-phil-bg="#ffffff">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="phil-article phil-article--core">
          <div class="phil-article__body">
            <div class="phil-article__img mb-8">
              <img :src="coreValue.image" alt="" loading="lazy" class="w-full h-auto" />
            </div>
            <h3 class="font-ja text-[18px] md:text-[22px] font-bold leading-[1.65] mb-6 whitespace-pre-line">{{ coreValue.headline }}</h3>
            <p class="font-ja text-[13px] md:text-[14.5px] leading-[2.05] text-gray-medium">{{ coreValue.body }}</p>
          </div>
          <div class="phil-article__side">
            <PhilosophySphere :en="coreValue.en" size="md" />
            <h2 v-reveal-mask class="font-ja text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.5] mt-6">{{ coreValue.lead }}</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- #valueDesignForUs -->
    <section id="valueDesignForUs" ref="vduSection" class="phil-section phil-section--vdu" data-phil-bg="#f0f0f0">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 text-center py-12 md:py-20">
        <PhilosophySphere size="lg" float class="mx-auto mb-8 md:mb-10 opacity-90" />
        <picture>
          <source :srcset="valueDesignForUs.svgTitle" media="(min-width: 769px)" />
          <img :src="valueDesignForUs.svgTitleSp" alt="Value Design for Us" class="mx-auto max-w-full h-auto w-[min(90%,680px)]" loading="lazy" />
        </picture>
      </div>
    </section>

    <!-- #valueDesignMap -->
    <section id="valueDesignMap" ref="vdmSection" class="phil-section phil-section--vdm" data-phil-bg="#ffffff">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <PhilosophyValueDesignMap
          :subtitle="valueDesignMap.subtitle"
          :main-labels="valueDesignMap.mainLabels"
          :core-values="coreValues"
          :on-ring-ref="setVdmRing"
          :on-map-area-ref="setVdmMapArea"
          :on-decorate-ref="setVdmDecorate"
        />
      </div>
    </section>

    <!-- #valueMind -->
    <section id="valueMind" ref="valueMindSection" class="phil-section phil-section--vdu" data-phil-bg="#f0f0f0">
      <div class="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20 text-center py-12 md:py-20">
        <PhilosophySphere size="md" float class="mx-auto mb-8" />
        <img :src="valueMindIntro.svgTitle" alt="Value Mind" class="mx-auto max-w-full h-auto w-[min(85%,480px)] mb-8" loading="lazy" />
        <h3 class="font-ja text-[16px] md:text-[20px] font-bold">{{ valueMindIntro.lead }}</h3>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium mt-6">{{ valueMindIntro.summary }}</p>
      </div>
    </section>

    <!-- #photoSet -->
    <section id="photoSet" ref="photoSetSection" class="phil-section pb-24 md:pb-36" data-phil-bg="#ffffff">
      <div class="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <PhilosophyPhotoSet :items="valueMinds" :on-item-ref="setPhotoItem" />
        <div class="text-center mt-16 md:mt-24">
          <NuxtLink to="/company" class="phil-btn phil-btn--outline">
            <span>Company</span>
            <span class="phil-btn__arrow" aria-hidden="true"></span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const {
  nav, concept, pillars, purpose, mission, coreValue,
  valueDesignMap, valueDesignForUs, valueMindIntro, coreValues, valueMinds
} = usePhilosophy()

const { init, cleanup } = usePhilosophyGsap()

const pageRoot = ref(null)
const heroSection = ref(null)
const heroContent = ref(null)
const heroBallWrap0 = ref(null)
const heroBallWrap1 = ref(null)
const heroBallWrap2 = ref(null)
const heroBall0 = ref(null)
const heroBall1 = ref(null)
const heroBall2 = ref(null)

const conceptSection = ref(null)
const conceptRing = ref(null)
const conceptLine0 = ref(null)
const conceptLine1 = ref(null)
const conceptLine2 = ref(null)
const conceptJa = ref(null)
const conceptSummary = ref(null)
const conceptBall = ref(null)

const pillarsSection = ref(null)
const pillarLine = ref(null)
const pillarItems = ref([])
const pillarSpheres = ref([])

const purposeSection = ref(null)
const missionSection = ref(null)
const coreValueSection = ref(null)
const vduSection = ref(null)
const vdmSection = ref(null)
const valueMindSection = ref(null)
const photoSetSection = ref(null)
const photoItems = ref([])

const vdmMapArea = ref(null)
const vdmRings = ref([])
const vdmDecorate = ref(null)

const setPillarItem = (el, i) => { if (el) pillarItems.value[i] = el }
const setPillarSphere = (el, i) => { if (el) pillarSpheres.value[i] = el }
const setVdmRing = (el, i) => { if (el) vdmRings.value[i] = el }
const setVdmMapArea = (el) => { vdmMapArea.value = el }
const setVdmDecorate = (el) => { vdmDecorate.value = el }
const setPhotoItem = (el, i) => { if (el) photoItems.value[i] = el }

onMounted(async () => {
  await nextTick()
  const conceptSphereEl = conceptBall.value?.$el ?? document.querySelector('#philosophy .philosophy-sphere')

  init({
    pageRoot: pageRoot.value,
    heroSection: heroSection.value,
    heroContent: heroContent.value,
    heroBallWraps: [heroBallWrap0.value, heroBallWrap1.value, heroBallWrap2.value],
    heroBalls: [heroBall0.value, heroBall1.value, heroBall2.value],
    conceptSection: conceptSection.value,
    conceptRing: conceptRing.value,
    conceptTextLines: [conceptLine0.value, conceptLine1.value, conceptLine2.value, conceptJa.value, conceptSummary.value],
    conceptBalls: [conceptSphereEl],
    pillarsSection: pillarsSection.value,
    pillarLine: pillarLine.value,
    pillarItems: pillarItems.value,
    pillarSpheres: pillarSpheres.value,
    articleSections: [
      purposeSection.value,
      missionSection.value,
      coreValueSection.value
    ],
    vduSections: [vduSection.value, valueMindSection.value],
    vdmSection: vdmSection.value,
    vdmMapArea: vdmMapArea.value,
    vdmRings: vdmRings.value,
    vdmSide: vdmSection.value?.querySelector('.vdm-side'),
    vdmDecorate: vdmDecorate.value ?? vdmSection.value?.querySelector('.vdm-decorate'),
    photoSetRoot: photoSetSection.value,
    photoItems: photoItems.value
  })
})

onUnmounted(cleanup)

useHead({ title: 'Philosophy | Valuence Holdings' })
</script>

<style scoped>
.philosophy-page { overflow-x: hidden; }

.philosophy-hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: #fff;
  padding: 0 1.5rem 10rem;
  overflow: hidden;
}
.philosophy-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}
.philosophy-hero__balls {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.philosophy-hero__ball-wrap {
  position: absolute;
  will-change: transform;
}
.philosophy-hero__ball-wrap--main {
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
}
.philosophy-hero__ball-wrap--sub1 {
  bottom: 22%;
  right: 10%;
}
.philosophy-hero__ball-wrap--sub2 {
  top: 32%;
  left: 6%;
}
.philosophy-hero__ball {
  display: block;
  border-radius: 9999px;
  background: radial-gradient(circle at 32% 28%, #87f5ad 0%, #1e8246 42%, #0a5c3b 100%);
  box-shadow: 0 24px 60px -20px rgba(16, 122, 77, 0.5);
  will-change: transform, opacity;
}
.philosophy-hero__ball--main {
  width: min(56vw, 360px);
  height: min(56vw, 360px);
}
.philosophy-hero__ball--sub {
  width: clamp(72px, 18vw, 110px);
  height: clamp(72px, 18vw, 110px);
}

.phil-section { padding: 5.5rem 0; }
.phil-section--gray { background: #f5f5f5; }
.phil-section--vdu { background: #f0f0f0; }
.phil-section--vdm { padding-bottom: 2rem; }

.phil-concept {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 768px) {
  .phil-concept {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
  .phil-concept__sphere { width: 40%; display: flex; justify-content: center; }
  .phil-concept__text { width: 60%; }
}
.phil-concept__sphere-inner {
  position: relative;
  width: min(42vw, 300px);
  height: min(42vw, 300px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.phil-concept__ring {
  position: absolute;
  inset: -8%;
  width: 116%;
  height: 116%;
  pointer-events: none;
}
.phil-concept__ball {
  position: relative;
  z-index: 1;
}

.phil-pillars { position: relative; }
.phil-pillars__line {
  position: absolute;
  left: 56px;
  top: 24px;
  bottom: 24px;
  width: auto;
  max-width: 80px;
  height: calc(100% - 48px);
  object-fit: contain;
  opacity: 0.65;
  overflow: hidden;
}
.phil-pillars__line img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.phil-pillars__items { display: flex; flex-direction: column; gap: 4.5rem; }
.phil-pillars__item {
  display: flex;
  align-items: center;
  gap: 2rem;
}
@media (min-width: 768px) {
  .phil-pillars__item { padding-left: 128px; }
}

.phil-article { display: flex; flex-direction: column; gap: 2rem; }
@media (min-width: 768px) {
  .phil-article--purpose { flex-direction: row; align-items: flex-start; gap: 4rem; }
  .phil-article--purpose .phil-article__img { width: 42%; }
  .phil-article--purpose .phil-article__body { width: 58%; }
  .phil-article--mission { flex-direction: row-reverse; align-items: flex-start; gap: 4rem; }
  .phil-article--mission .phil-article__img { width: 48%; }
  .phil-article--mission .phil-article__body { width: 52%; }
  .phil-article--core { flex-direction: row; align-items: flex-start; gap: 4rem; }
  .phil-article--core .phil-article__body { width: 62%; }
  .phil-article--core .phil-article__side { width: 38%; padding-top: 2rem; }
}
.phil-article__head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.phil-article__img { overflow: hidden; }

.phil-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #000;
  border-radius: 9999px;
  padding: 0.85rem 1.75rem;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s;
}
.phil-btn:hover { background: #000; color: #fff; }
.phil-btn--outline { text-decoration: none; color: inherit; }
.phil-btn__arrow {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 1px;
  background: currentColor;
}
.phil-btn__arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 8px;
  height: 1px;
  background: currentColor;
  transform: rotate(45deg);
  transform-origin: right;
}
</style>
