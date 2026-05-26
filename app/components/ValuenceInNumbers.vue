<template>
  <section id="vin" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div v-reveal class="mb-16 md:mb-24">
        <h2 class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          Valuence in Numbers
        </h2>
        <p class="font-ja text-[13px] md:text-[15px] text-gray-medium mt-6 md:mt-8 leading-[2] max-w-[640px]">
          バリュエンスグループにまつわる数字をご紹介いたします。<br class="hidden md:block">
          事業や働くひと、働く環境に関することが数字で理解いただけます。
        </p>
      </div>

      <!-- Business グループ -->
      <div v-reveal="100" class="mb-16 md:mb-20">
        <div class="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-black/80 pb-4">
          <h3 class="font-en text-[22px] md:text-[28px] font-bold tracking-tight">Business</h3>
          <span class="font-ja text-[11px] md:text-[12px] text-gray-medium">事業</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(stat, index) in businessStats"
            :key="stat.title"
            v-reveal="index * 120"
            class="border border-gray-200 p-6 md:p-8 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[220px] bg-white hover:border-black/40 transition-colors duration-500"
          >
            <p class="font-ja text-[11px] md:text-[12px] font-bold text-gray-medium">{{ stat.title }}</p>
            <div class="mt-auto">
              <p class="font-en font-bold leading-none text-black text-[clamp(2.5rem,5vw,3.5rem)]">
                <span v-count-up="stat.value">0</span><span class="font-ja text-[14px] md:text-[16px] ml-1 font-bold align-baseline">{{ stat.unit }}</span>
              </p>
              <p class="text-[10px] md:text-[11px] text-gray-400 mt-3 font-ja">{{ stat.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- People グループ -->
      <div v-reveal="200">
        <div class="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-black/80 pb-4">
          <h3 class="font-en text-[22px] md:text-[28px] font-bold tracking-tight">People</h3>
          <span class="font-ja text-[11px] md:text-[12px] text-gray-medium">人</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(stat, index) in peopleStats"
            :key="stat.title"
            v-reveal="index * 120"
            class="border border-gray-200 p-6 md:p-8 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[220px] bg-white hover:border-black/40 transition-colors duration-500"
          >
            <p class="font-ja text-[11px] md:text-[12px] font-bold text-gray-medium">{{ stat.title }}</p>
            <div class="mt-auto">
              <p class="font-en font-bold leading-none text-black text-[clamp(2.5rem,5vw,3.5rem)]">
                <span v-count-up="stat.value">0</span><span class="font-ja text-[14px] md:text-[16px] ml-1 font-bold align-baseline">{{ stat.unit }}</span>
              </p>
              <p class="text-[10px] md:text-[11px] text-gray-400 mt-3 font-ja">{{ stat.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal="300" class="mt-14 md:mt-16 flex justify-center">
        <BaseButtonPill to="/ir/investor/numbers/">View More</BaseButtonPill>
      </div>

    </div>
  </section>
</template>

<script setup>
const { businessStats, peopleStats } = useNumbers()
</script>
