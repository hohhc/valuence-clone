<template>
  <div>
    <PageHero
      title="Business"
      subtitle="リユースという言葉を、世の中のあたりまえに。"
      :breadcrumb="[{ label: 'Business' }]"
    />

    <PageSection bg="white" spacing="lg">
      <SectionHeading en="Our Business" ja="事業紹介" size="md" spacing="md" />
      <p v-reveal class="font-ja text-[14px] md:text-[16px] leading-[2] text-gray-medium max-w-3xl mb-16">
        私たちバリュエンスグループが考えるリユースは、お金に困ったからモノを売るのではなく、大切にしてきたモノの価値を、次に必要とする誰かへとつなぐこと。
        日本でも世界でも、お客さま一人ひとりが大切なことにフォーカスしていける環境づくりを目指し、新しいチャレンジを続けてまいります。
      </p>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        <li
          v-for="(cat, i) in categories"
          :key="cat.id"
          v-reveal="i * 100"
        >
          <NuxtLink
            :to="cat.path"
            class="group flex flex-col p-7 border border-gray-200 hover:border-black/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out-quart h-full"
          >
            <p class="font-en text-[12px] font-bold tracking-widest uppercase text-gray-medium mb-2">
              {{ cat.enTitle }}
            </p>
            <h3 class="font-ja text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-gray-medium transition-colors">
              {{ cat.jaTitle }}
            </h3>
            <p class="font-ja text-[13px] text-gray-medium leading-[1.9] line-clamp-3">
              {{ cat.headline }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </PageSection>
  </div>
</template>

<script setup>
const { categories } = useBusinesses()
useHead({ title: 'Our Business | Valuence Holdings' })
</script>
