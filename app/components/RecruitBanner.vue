<template>
  <section class="relative w-full h-[420px] md:h-[640px] flex items-center justify-center text-white overflow-hidden mt-12 md:mt-24 mb-0">

    <div class="absolute inset-0 bg-black z-0">
      <img
        src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/kv_03.jpg"
        class="w-full h-full object-cover"
        alt="Recruit Background"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 text-center flex flex-col items-center px-4 w-full">
      <h2
        v-reveal
        class="font-en font-bold tracking-tightest leading-[0.95] mb-8 md:mb-10 drop-shadow-md text-[clamp(3rem,8vw,6rem)]"
      >
        Recruit
      </h2>

      <p
        v-reveal="200"
        class="font-ja text-[13px] md:text-[16px] tracking-[0.15em] mb-12 md:mb-14 leading-[2] drop-shadow-md"
      >
        これからの時代に必要な"豊かさ"を<br>共に創る仲間を探しています。
      </p>

      <div v-reveal="400">
        <NuxtLink
          to="/recruit"
          class="group flex items-center gap-4 border border-white rounded-full pl-8 pr-6 py-[14px] font-en text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 ease-out-quart"
        >
          <span>View More</span>
          <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart">
            <span class="absolute inset-0 bg-white group-hover:bg-black transition-colors duration-300"></span>
            <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white group-hover:bg-black origin-right rotate-45 transition-colors duration-300"></span>
            <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white group-hover:bg-black origin-right -rotate-45 transition-colors duration-300"></span>
          </span>
        </NuxtLink>
      </div>
    </div>

  </section>
</template>
