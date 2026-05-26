<template>
  <div v-if="cat">
    <PageHero
      :title="cat.enTitle"
      :subtitle="cat.jaTitle"
      :breadcrumb="[
        { label: 'Business', path: '/business' },
        { label: cat.enTitle }
      ]"
    />

    <PageSection bg="white" spacing="lg">
      <SectionHeading :en="cat.enTitle" :ja="cat.jaTitle" size="md" spacing="md" />

      <p v-reveal class="font-ja text-[16px] md:text-[20px] font-bold leading-[1.8] text-gray-dark mb-6 max-w-3xl">
        {{ cat.headline }}
      </p>

      <p v-reveal="200" class="font-ja text-[13px] md:text-[15px] leading-[2] text-gray-medium max-w-3xl">
        {{ cat.description }}
      </p>
    </PageSection>

    <PageSection v-if="cat.items?.length" bg="gray" spacing="lg">
      <SectionHeading
        :en="`Brands (${cat.count})`"
        :ja="`${cat.jaTitle}を構成するブランド`"
        size="sm"
        spacing="md"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <article
          v-for="(item, i) in cat.items"
          :key="item.name"
          v-reveal="i * 120"
          class="group"
        >
          <a :href="item.url" target="_blank" rel="noopener" class="flex flex-col h-full">
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
            <h4 class="font-ja text-[18px] md:text-[20px] font-bold mb-3 group-hover:text-gray-medium transition-colors">
              {{ item.name }}
            </h4>
            <p class="font-ja text-[13px] leading-[1.9] text-gray-medium">{{ item.desc }}</p>
          </a>
        </article>
      </div>
    </PageSection>

    <PageSection bg="white" spacing="md">
      <BaseButtonArrow to="/business">Back to Business</BaseButtonArrow>
    </PageSection>
  </div>
  <div v-else>
    <PageHero title="Not Found" :breadcrumb="[{ label: '404' }]" />
  </div>
</template>

<script setup>
const props = defineProps({
  slug: { type: String, required: true }
})

const { findCategory } = useBusinesses()
const cat = findCategory(props.slug)

useHead({ title: cat ? `${cat.enTitle} | Valuence Holdings` : 'Not Found' })
</script>
