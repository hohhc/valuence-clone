<template>
  <section id="globalAction" class="py-24 md:py-32 bg-white border-t border-gray-100 overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div v-reveal class="mb-16 md:mb-20">
        <h2 class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          Global Action
        </h2>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2] text-gray-medium mt-6 md:mt-8 max-w-3xl">
          日本から世界へ、私たちの考えるリユースを伝えていきたい。<br>
          お客さま一人ひとりがさまざまなライフステージで大切なことにフォーカスしていける環境づくりを目指し、<br class="hidden md:block">
          グローバルで新しいチャレンジを続けてまいります。
          <span class="block text-[11px] mt-3 text-gray-400">※2025年8月末データ</span>
        </p>
      </div>

      <div v-reveal="200" class="relative w-full aspect-[2/1] max-w-[1110px] mx-auto">
        <img
          src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/worldmap.svg"
          class="w-full h-full object-contain opacity-90"
          alt="World Map"
        />

        <div
          v-for="loc in locations"
          :key="loc.country"
          class="absolute group cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10 hover:z-30"
          :style="{ top: loc.top, left: loc.left }"
        >
          <!-- ツールチップ -->
          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max min-w-[150px] bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none">
            <p class="font-en font-bold text-[13px] mb-2 border-b border-black pb-2 tracking-wider">{{ loc.country }}</p>
            <dl v-if="loc.allu !== undefined" class="flex justify-between gap-6 text-[11px] mb-1 font-en tracking-wider">
              <dt>ALLU</dt>
              <dd class="font-bold">{{ loc.allu }}</dd>
            </dl>
            <dl v-if="loc.nanboya !== undefined" class="flex justify-between gap-6 text-[11px] font-en tracking-wider">
              <dt>NANBOYA</dt>
              <dd class="font-bold">{{ loc.nanboya }}</dd>
            </dl>
            <dl v-if="loc.others !== undefined" class="flex justify-between gap-6 text-[11px] mt-1 font-en tracking-wider">
              <dt>Others</dt>
              <dd class="font-bold">{{ loc.others }}</dd>
            </dl>
          </div>

          <!-- ピン本体（パルス + ドット） -->
          <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex w-4 h-4 md:w-5 md:h-5 rounded-full bg-black/40 animate-pulse-dot"></span>
            <span class="relative inline-flex w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-black group-hover:bg-[#3CA96C] transition-colors duration-300 ring-2 ring-white"></span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const { locations } = useLocations()
</script>
