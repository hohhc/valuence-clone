<template>
  <section class="relative w-full h-[500px] md:h-[680px] flex items-center overflow-hidden">

    <div class="absolute inset-0 z-0 bg-black">
      <img
        src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg"
        class="w-full h-full object-cover opacity-95"
        alt="Circular Design Company"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
    </div>

    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="w-full md:w-1/2 lg:w-2/5 text-white">

        <h3
          v-reveal-mask
          class="font-en font-bold tracking-tightest leading-[0.95] mb-6 md:mb-8 drop-shadow-md text-[clamp(2.5rem,6vw,4.5rem)]"
        >
          <span class="block">Circular Design</span>
          <span class="block">Company</span>
        </h3>

        <h2
          v-reveal="200"
          class="font-ja text-[18px] md:text-[24px] font-bold mb-10 md:mb-12 leading-[1.8] drop-shadow-md"
        >
          循環をデザインする、<br>
          企業であること。
        </h2>

        <div v-reveal="400">
          <NuxtLink
            to="/company"
            class="group inline-flex items-center gap-4 text-white drop-shadow-md border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
          >
            <span class="font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Company</span>
            <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart">
              <span class="absolute inset-0 bg-white"></span>
              <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white origin-right rotate-45"></span>
              <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white origin-right -rotate-45"></span>
            </span>
          </NuxtLink>
        </div>

      </div>
    </div>

  </section>
</template>
