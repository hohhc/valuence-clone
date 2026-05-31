<template>
  <div>
    <!-- Hero（philosophyVis：浮遊する球体） -->
    <section class="relative w-full overflow-hidden bg-[#0a0f0d] text-white h-[64vh] min-h-[460px] flex items-center">
      <span class="float-ball ball-a"></span>
      <span class="float-ball ball-b"></span>
      <span class="float-ball ball-c"></span>
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      <div class="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full text-center">
        <Breadcrumb :items="[{ label: 'Philosophy' }]" class="mb-6 md:mb-8 justify-center" />
        <h1 v-reveal class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.75rem,8vw,6rem)]">
          Philosophy
        </h1>
        <p v-reveal="200" class="font-ja text-[15px] md:text-[19px] mt-5 md:mt-7 tracking-[0.12em]">
          私たちが、大切にしていること。
        </p>
      </div>
    </section>

    <AnchorNav :items="nav" />

    <!-- #philosophy : Circular Design -->
    <PageSection id="philosophy" bg="white">
      <div v-reveal class="relative max-w-3xl mx-auto text-center py-6 md:py-12">
        <span class="float-ball-light absolute -top-6 -left-6 md:-left-16"></span>
        <span class="float-ball-light absolute bottom-0 -right-4 md:-right-12 scale-75"></span>
        <h2 class="font-en font-bold leading-[1.1] text-[clamp(2rem,5vw,3.5rem)] tracking-tight">
          <span class="block">Circular Design</span>
          <span class="block">for the Earth and Us</span>
        </h2>
        <h3 class="font-ja text-[16px] md:text-[20px] font-bold mt-6 md:mt-8">{{ concept.ja }}</h3>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium mt-6 md:mt-8">
          {{ concept.summary }}
        </p>
      </div>
    </PageSection>

    <!-- #valueProgress : 理念は3つから構成される -->
    <PageSection id="valueProgress" bg="gray">
      <h3 v-reveal class="font-ja text-[16px] md:text-[22px] font-bold leading-[1.7] text-center mb-12 md:mb-20">
        {{ pillars.lead }}
      </h3>

      <div class="relative max-w-4xl mx-auto">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>
        <div class="flex flex-col gap-12 md:gap-16">
          <div
            v-for="(item, i) in pillars.items"
            :key="item.en"
            v-reveal="i * 120"
            class="relative flex flex-col md:flex-row items-center gap-6 md:gap-10"
            :class="i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''"
          >
            <div class="sphere-pillar shrink-0">
              <span v-if="item.sphere" class="font-ja text-[13px] md:text-[15px] font-bold">{{ item.sphere }}</span>
            </div>
            <div class="md:w-[60%]">
              <p class="font-en text-[20px] md:text-[26px] font-bold leading-none">{{ item.en }}</p>
              <p class="font-ja text-[12px] md:text-[13px] text-gray-medium mt-1 mb-3">{{ item.ja }}</p>
              <p class="font-ja text-[13px] md:text-[14.5px] leading-[1.95] text-gray-dark">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>

    <!-- #purpose -->
    <PageSection id="purpose" bg="white">
      <PhilosophyArticle
        :en="purpose.en"
        :lead="purpose.lead"
        :headline="purpose.headline"
        :body="purpose.body"
        :image="purpose.image"
        :button="purpose.button"
      />
    </PageSection>

    <!-- #mission -->
    <PageSection id="mission" bg="gray">
      <PhilosophyArticle
        :en="mission.en"
        :lead="mission.lead"
        :headline="mission.headline"
        :body="mission.body"
        :image="mission.image"
        reverse
      />
    </PageSection>

    <!-- #coreValue -->
    <PageSection id="coreValue" bg="white">
      <PhilosophyArticle
        :en="coreValue.en"
        :lead="coreValue.lead"
        :headline="coreValue.headline"
        :body="coreValue.body"
        :image="coreValue.image"
      />
    </PageSection>

    <!-- Value Design for Us -->
    <PageSection id="valueDesignForUs" bg="black">
      <div v-reveal class="relative text-center py-8 md:py-16">
        <span class="float-ball absolute top-0 left-1/4 scale-50 opacity-70"></span>
        <h2 class="font-en font-bold leading-[1.05] text-[clamp(2.25rem,7vw,5rem)] tracking-tight">
          Value Design <span class="block md:inline">for Us</span>
        </h2>
      </div>
    </PageSection>

    <!-- #valueDesignMap -->
    <PageSection id="valueDesignMap" bg="gray">
      <div class="text-center mb-12 md:mb-16">
        <h2 v-reveal-mask class="font-en font-bold text-[clamp(1.75rem,4.5vw,3rem)] tracking-tight">Value Design Map</h2>
        <h3 class="font-ja text-[14px] md:text-[17px] font-bold leading-[1.7] mt-5 whitespace-pre-line text-gray-dark">
          {{ valueDesignMap.subtitle }}
        </h3>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <!-- サイドラベル -->
        <div v-reveal class="w-full lg:w-2/5 space-y-7 md:space-y-9">
          <div v-for="label in valueDesignMap.sideLabels" :key="label.sub" class="border-l-2 border-[#1fa46a] pl-5">
            <p class="font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase text-[#1fa46a] mb-1">{{ label.sub }}</p>
            <p class="font-ja text-[16px] md:text-[19px] font-bold leading-[1.5]">
              {{ label.main }}<span v-if="label.main2" class="font-en"> {{ label.main2 }}</span>
            </p>
          </div>
        </div>

        <!-- 同心円（Earth → Human） -->
        <div v-reveal="150" class="w-full lg:w-3/5 flex justify-center">
          <div class="vdm-rings">
            <div
              v-for="(circle, i) in valueDesignMap.circles"
              :key="circle"
              class="vdm-ring"
              :style="{ '--depth': i }"
            >
              <span class="font-en text-[11px] md:text-[13px] font-bold tracking-wide">{{ circle }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 5つの価値 -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200 mt-14 md:mt-20">
        <div
          v-for="(cv, i) in coreValues"
          :key="cv.id"
          v-reveal="i * 90"
          class="bg-white p-6 md:p-7 flex flex-col min-h-[150px] md:min-h-[190px]"
        >
          <span class="font-en text-[11px] font-bold tracking-widest text-[#1fa46a]">{{ cv.en }}</span>
          <p class="font-ja text-[15px] md:text-[17px] font-bold leading-[1.6] mt-auto">{{ cv.ja }}</p>
        </div>
      </div>
    </PageSection>

    <!-- #valueMind -->
    <PageSection id="valueMind" bg="white">
      <div v-reveal class="relative max-w-2xl mx-auto text-center py-4 md:py-10">
        <span class="float-ball-light absolute -top-8 right-0 md:right-8"></span>
        <h2 class="font-en font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-tight">Value Mind</h2>
        <h3 class="font-ja text-[16px] md:text-[20px] font-bold mt-5">{{ valueMind.lead }}</h3>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium mt-6">{{ valueMind.summary }}</p>
      </div>

      <!-- photoSet：5マインド（ホバーで和文） -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-12 md:mt-16">
        <div
          v-for="(vm, i) in valueMinds"
          :key="vm.id"
          v-reveal="i * 80"
          class="group relative overflow-hidden aspect-[4/5] bg-gray-900"
        >
          <img :src="vm.image" :alt="vm.heading" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 ease-out-quart group-hover:scale-105 group-hover:opacity-40" />
          <div class="absolute inset-0 p-6 md:p-7 flex flex-col justify-between text-white">
            <p class="font-en text-[12px] md:text-[13px] leading-[1.5] tracking-wide drop-shadow">{{ vm.en }}</p>
            <div>
              <p class="font-en text-[11px] font-bold tracking-widest uppercase text-white/70 mb-1">{{ vm.label }}</p>
              <p class="font-ja text-[18px] md:text-[20px] font-bold">{{ vm.heading }}</p>
            </div>
          </div>
          <div class="absolute inset-0 bg-[#0c6b45]/90 p-6 md:p-7 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p class="font-ja text-[13px] md:text-[15px] leading-[1.9]">{{ vm.ja }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-14 md:mt-20">
        <NuxtLink to="/company" class="group inline-flex items-center gap-4 border border-black rounded-full pl-8 pr-6 py-4 hover:bg-black hover:text-white transition-colors duration-300">
          <span class="font-en text-[12px] font-bold tracking-widest uppercase">Company</span>
          <span class="relative inline-block h-[1px] w-8 group-hover:w-10 transition-all duration-300">
            <span class="absolute inset-0 bg-current"></span>
            <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-current origin-right rotate-45"></span>
            <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-current origin-right -rotate-45"></span>
          </span>
        </NuxtLink>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const {
  nav, concept, pillars, purpose, mission, coreValue, valueDesignMap, valueMind, coreValues, valueMinds
} = usePhilosophy()

useHead({ title: 'Philosophy | Valuence Holdings' })
</script>

<style scoped>
/* 浮遊する球体（本家 ball-cp / ball-flt 相当） */
.float-ball,
.float-ball-light {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.float-ball {
  background: radial-gradient(circle at 32% 28%, #7defb8 0%, #1fa46a 45%, #0a5c3b 100%);
  filter: blur(2px);
  opacity: 0.85;
}
.float-ball-light {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle at 32% 28%, rgba(126, 239, 184, 0.55) 0%, rgba(31, 164, 106, 0.25) 60%, transparent 100%);
}
.ball-a { width: 240px; height: 240px; top: -40px; left: -60px; animation: floaty 11s ease-in-out infinite; }
.ball-b { width: 150px; height: 150px; bottom: 8%; right: 12%; animation: floaty 9s ease-in-out infinite 1.2s; }
.ball-c { width: 90px;  height: 90px;  top: 22%; right: 28%; animation: floaty 13s ease-in-out infinite 0.5s; }

@keyframes floaty {
  0%, 100% { transform: translateY(0) translateX(0); }
  50%      { transform: translateY(-26px) translateX(14px); }
}

/* 理念構成スフィア */
.sphere-pillar {
  width: 120px;
  height: 120px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: radial-gradient(circle at 32% 28%, #6fe3b0 0%, #1fa46a 45%, #0c6b45 100%);
  box-shadow: 0 14px 34px -12px rgba(16, 122, 77, 0.5);
}

/* Value Design Map 同心円 */
.vdm-rings {
  position: relative;
  width: min(380px, 80vw);
  aspect-ratio: 1;
}
.vdm-ring {
  position: absolute;
  border-radius: 9999px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.6rem;
  color: #0c4a30;
  inset: calc(var(--depth) * 9%);
  background: rgba(31, 164, 106, calc(0.12 + var(--depth) * 0.16));
  border: 1px solid rgba(31, 164, 106, 0.35);
}
.vdm-ring:last-child {
  color: #fff;
  background: radial-gradient(circle at 32% 28%, #6fe3b0 0%, #1fa46a 55%, #0c6b45 100%);
  align-items: center;
  padding-top: 0;
}
</style>
