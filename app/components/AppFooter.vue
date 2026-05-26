<template>
  <footer class="bg-white text-black pt-20 md:pt-24 pb-10 px-6 md:px-12 lg:px-20 border-t border-gray-border">
    <div class="max-w-[1400px] mx-auto">

      <div class="flex flex-col lg:flex-row justify-between mb-16 md:mb-20 gap-12 md:gap-16">

        <div class="lg:w-1/4">
          <NuxtLink to="/" class="font-en font-bold text-[28px] md:text-[32px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">
            Valuence
          </NuxtLink>
        </div>

        <div class="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-8">
          <div v-for="menu in megaMenus" :key="menu.en" class="flex flex-col">
            <NuxtLink :to="menu.path" class="font-en text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-4 hover:text-gray-medium transition-colors">
              {{ menu.en }}
            </NuxtLink>
            <ul class="flex flex-col gap-3">
              <li v-for="item in menu.items.slice(0, 7)" :key="item.name">
                <NuxtLink :to="item.path" class="font-ja text-[11px] text-gray-medium hover:text-black transition-colors">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

        <div class="flex items-center gap-6">
          <img
            src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/foot-mark_01.svg"
            class="w-7 h-7"
            alt="Sponsor"
          />
          <a href="https://www.nankatsu-sc.com/" target="_blank" rel="noopener" aria-label="Nankatsu SC">
            <img
              src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/foot-mark_03.svg"
              class="w-7 h-7 hover:opacity-70 transition-opacity"
              alt="Nankatsu SC"
            />
          </a>
          <a
            href="https://x.com/Valuence_group"
            target="_blank"
            rel="noopener"
            class="hover:opacity-60 transition-opacity"
            aria-label="X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.343l8.06-9.21L1 2h7.018l4.844 6.43L18.244 2Zm-2.4 18h1.86L7.27 4h-1.99l10.564 16Z"/>
            </svg>
          </a>
        </div>

        <div class="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
          <ul class="flex flex-wrap gap-x-6 gap-y-3 text-[10px] md:text-[11px] font-ja text-gray-medium">
            <li v-for="legal in legalLinks" :key="legal.path">
              <NuxtLink :to="legal.path" class="hover:text-black transition-colors">{{ legal.name }}</NuxtLink>
            </li>
          </ul>
          <div class="text-[10px] font-en tracking-widest text-gray-medium uppercase">
            © Valuence Holdings Inc.
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
const { megaMenus, legalLinks } = useNavigation()
</script>
