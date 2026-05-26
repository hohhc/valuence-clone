<template>
  <section class="py-24 md:py-40 bg-white overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-24">

      <div v-reveal class="w-full md:w-[52%] relative overflow-hidden">
        <img
          src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_01.jpg"
          class="w-full h-auto object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
          alt="Circular Design for the Earth and Us"
        />
      </div>

      <div class="w-full md:w-[48%]">
        <h3
          v-reveal="200"
          class="font-en font-bold tracking-tighter mb-5 md:mb-6 leading-[1.05] text-gray-dark text-[clamp(1.75rem,3.4vw,2.75rem)]"
        >
          <span class="block">Circular Design</span>
          <span class="block">for the Earth and Us</span>
        </h3>

        <h2
          v-reveal="300"
          class="font-ja text-[18px] md:text-[22px] font-bold mb-8 md:mb-10 leading-[1.8] text-gray-dark"
        >
          地球、そして私たちのために<br>循環をデザインする
        </h2>

        <p
          v-reveal="400"
          class="font-ja text-[13px] md:text-[15px] text-gray-medium leading-[2] mb-10 md:mb-12"
        >
          私たちは、循環型社会における重要な取組みの一つである<br class="hidden md:block">
          リユースを事業の中核に据え、<br class="hidden md:block">
          持続可能な世界の実現を目指しております。
        </p>

        <div v-reveal="500">
          <BaseButtonArrow to="/philosophy">Our Philosophy</BaseButtonArrow>
        </div>
      </div>

    </div>
  </section>
</template>
