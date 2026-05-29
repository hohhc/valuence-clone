<template>
  <div class="relative w-full h-screen min-h-[640px] overflow-hidden text-white bg-black">

    <div class="absolute inset-0 z-0">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :speed="1400"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ el: '.swiper-pagination-custom', clickable: true }"
        class="w-full h-full"
      >
        <SwiperSlide v-for="(img, index) in sliderImages" :key="index">
          <div class="relative w-full h-full">
            <picture class="block w-full h-full">
              <source :srcset="`${img}.webp`" media="(min-width: 769px)" type="image/webp" />
              <source :srcset="`${img}.jpg`" media="(min-width: 769px)" />
              <source :srcset="`${img}_sp.webp`" type="image/webp" />
              <source :srcset="`${img}_sp.jpg`" />
              <img
                :src="`${img}.jpg`"
                class="w-full h-full object-cover scale-[1.04] hero-slide-img"
                alt="Valuence Hero Image"
                width="1280"
                height="750"
              />
            </picture>
            <div class="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <template #container-end>
          <div class="absolute bottom-0 left-0 w-full z-10 pb-8 md:pb-12 pointer-events-none">
            <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-end font-en tracking-widest uppercase text-[10px] md:text-[11px]">

              <div class="text-left leading-relaxed">
                <p>{{ currentDay }}<br>{{ currentDate }}</p>
              </div>

              <div class="flex gap-3 pb-1">
                <div class="swiper-pagination-custom swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal flex gap-3 pointer-events-auto"></div>
              </div>

              <div class="text-right font-bold flex items-baseline">
                <span class="text-[44px] md:text-[64px] leading-none mr-1 tracking-tight">{{ currentHour }}</span>
                <span class="text-[18px] md:text-[22px]">:{{ currentMinute }} {{ currentAmPm }}</span>
              </div>

            </div>
          </div>
        </template>
      </Swiper>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
      <h2
        v-reveal-mask
        class="font-en font-bold leading-[0.95] mb-8 md:mb-10 drop-shadow-lg text-[clamp(2.75rem,9vw,6.5rem)] tracking-[-0.04em]"
      >
        <span class="block">We are</span>
        <span class="block">Circular Design Company</span>
      </h2>

      <h1
        v-reveal="200"
        class="font-ja text-[14px] md:text-[20px] tracking-[0.2em] mb-12 md:mb-16 drop-shadow-md font-medium"
      >
        幸せがめぐる、デザインを。人生に、地球に。
      </h1>

      <div v-reveal="400" class="pointer-events-auto">
        <NuxtLink
          to="/contact"
          class="group relative inline-flex items-center justify-center overflow-hidden border border-white rounded-full w-[185px] py-[14px] font-en text-[11px] font-bold tracking-widest uppercase transition-colors duration-500 ease-out-quart hover:border-[#3CA96C]"
        >
          <span class="absolute inset-0 bg-[#3CA96C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-quart rounded-full"></span>
          <span class="relative z-10">Contact</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll インジケーター（中央下） -->
    <div class="absolute bottom-[88px] md:bottom-[120px] left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:flex flex-col items-center gap-3">
      <span class="font-en text-[10px] tracking-[0.3em] uppercase text-white/80">Scroll</span>
      <div class="relative w-[1px] h-12 bg-white/30 overflow-hidden">
        <span class="absolute top-0 left-0 w-full h-6 bg-white animate-scroll-hint"></span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, EffectFade as SwiperEffectFade, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// 拡張子なしのベースパス（.webp / .jpg / _sp.webp / _sp.jpg を出し分け）
const sliderImages = [
  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/slider-home_01',
  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/slider-home_02',
  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/slider-home_03'
]

const time = ref(new Date())
let timer = null

onMounted(() => {
  timer = setInterval(() => { time.value = new Date() }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const currentDay = computed(() => days[time.value.getDay()])
const currentDate = computed(() => {
  const date = String(time.value.getDate()).padStart(2, '0')
  const month = months[time.value.getMonth()]
  const year = time.value.getFullYear()
  return `${date} ${month} ${year}`
})
const currentHour = computed(() => {
  let hours = time.value.getHours()
  hours = hours % 12
  hours = hours ? hours : 12
  return String(hours).padStart(2, '0')
})
const currentMinute = computed(() => String(time.value.getMinutes()).padStart(2, '0'))
const currentAmPm = computed(() => time.value.getHours() >= 12 ? 'PM' : 'AM')
</script>

<style>
.swiper-pagination-custom .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #fff;
  opacity: 0.3;
  margin: 0 !important;
  border-radius: 50%;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.swiper-pagination-custom .swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(1.1);
}
/* 緩やかな Ken Burns 風ズームアウト */
.hero-slide-img {
  transition: transform 8s ease-out;
}
.swiper-slide-active .hero-slide-img {
  transform: scale(1);
}
</style>
