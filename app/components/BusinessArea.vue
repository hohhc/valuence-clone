<template>
  <section id="ourBusiness" class="w-full bg-white text-black pt-24 md:pt-32 pb-24 md:pb-40 overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

      <div class="flex flex-col md:flex-row md:justify-between items-start mb-20 md:mb-32 gap-10">
        <div v-reveal class="w-full md:w-2/5">
          <h2 class="font-en font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">Business</h2>
          <p class="font-ja text-[13px] md:text-[15px] leading-[2] text-gray-medium mt-6 md:mt-8 max-w-[420px]">
            リユースという言葉を、世の中のあたりまえに。<br class="hidden md:block">
            そして、一人ひとりが大切なことにフォーカスしていける環境づくりを目指して。
          </p>
        </div>

        <div v-reveal="200" class="w-full md:w-3/5 md:pl-12 md:pt-8">
          <ul class="flex flex-wrap gap-x-7 gap-y-4 font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase">
            <li v-for="cat in categories" :key="cat.id">
              <a :href="`#${cat.id}`" class="hover:text-gray-medium transition-colors pb-1 border-b border-transparent hover:border-gray-medium">
                {{ cat.enTitle }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-24 md:gap-32">
        <div v-for="cat in categories" :key="cat.id" :id="cat.id" class="w-full scroll-mt-24">

          <div v-reveal class="flex flex-col md:flex-row justify-between items-end border-b border-black pb-4 mb-10 md:mb-14">
            <div class="flex items-baseline gap-6 flex-wrap">
              <h2 class="font-ja text-[22px] md:text-[30px] font-bold tracking-tight">{{ cat.jaTitle }}</h2>
              <h3 class="font-en text-[14px] md:text-[18px] font-bold tracking-widest uppercase text-gray-medium">
                {{ cat.enTitle }}<sup class="text-[10px] ml-1">({{ cat.count }})</sup>
              </h3>
            </div>
            <div class="hidden md:block mb-1">
              <BaseButtonArrow :to="cat.path">View More</BaseButtonArrow>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14">
            <article
              v-for="(item, index) in cat.items"
              :key="item.name"
              v-reveal="index * 150"
              class="group cursor-pointer"
            >
              <a :href="item.url" target="_blank" rel="noopener" class="h-full flex flex-col">
                <div class="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                  <img
                    :src="item.img"
                    :alt="item.name"
                    loading="lazy"
                    class="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out-quart"
                  />
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
                    <img :src="item.logo" :alt="item.name" class="max-w-[55%] max-h-[36%] object-contain drop-shadow-lg" />
                  </div>
                </div>
                <h4 class="font-ja text-[16px] md:text-[20px] font-bold mb-3 group-hover:text-gray-medium transition-colors">{{ item.name }}</h4>
                <p class="font-ja text-[12px] md:text-[13px] leading-[1.9] text-gray-medium line-clamp-3">
                  {{ item.desc }}
                </p>
              </a>
            </article>
          </div>

          <div v-reveal class="mt-10 md:hidden text-center">
            <BaseButtonPill :to="cat.path" class="w-full">
              View More
            </BaseButtonPill>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const { categories } = useBusinesses()
</script>
