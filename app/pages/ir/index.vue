<template>
  <div>
    <PageHero
      title="Investor Relations"
      subtitle="IR・投資家情報"
      :breadcrumb="[{ label: 'IR' }]"
    />

    <!-- 主要コンテンツ 4カード -->
    <PageSection bg="white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
        <NuxtLink
          v-for="(card, index) in features"
          :key="card.en"
          v-reveal="index * 80"
          :to="card.path"
          class="group bg-white p-8 md:p-12 flex flex-col min-h-[200px] md:min-h-[240px] hover:bg-gray-light transition-colors duration-500"
        >
          <p class="font-ja text-[16px] md:text-[20px] font-bold mb-2">{{ card.ja }}</p>
          <p class="font-en text-[11px] md:text-[12px] text-gray-medium tracking-wider">{{ card.en }}</p>
          <span class="mt-auto inline-flex items-center gap-3 font-en text-[11px] font-bold tracking-widest uppercase pt-8">
            View More
            <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart">
              <span class="absolute inset-0 bg-black"></span>
              <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black origin-right rotate-45"></span>
              <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black origin-right -rotate-45"></span>
            </span>
          </span>
        </NuxtLink>
      </div>
    </PageSection>

    <!-- IR Topics -->
    <PageSection id="topics" bg="gray" spacing="md">
      <div class="flex justify-between items-end mb-8 md:mb-10">
        <SectionHeading en="IR Topics" ja="IRニュース" size="md" spacing="sm" class="!mb-0" />
        <BaseButtonArrow to="/ir/news">View More</BaseButtonArrow>
      </div>

      <div class="flex flex-col bg-white border border-gray-200">
        <NuxtLink
          v-for="topic in topics"
          :key="topic.title"
          to="/ir/news"
          class="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 md:px-8 py-5 border-b border-gray-200 last:border-b-0 hover:bg-gray-light transition-colors"
        >
          <time class="font-en text-[12px] text-gray-medium tracking-widest shrink-0 md:w-28">{{ topic.date }}</time>
          <span class="font-ja text-[10px] font-bold border border-black px-3 py-[2px] shrink-0 w-fit">{{ topic.category }}</span>
          <span class="font-ja text-[13px] md:text-[14px] leading-[1.7] text-gray-dark group-hover:text-gray-medium transition-colors">{{ topic.title }}</span>
        </NuxtLink>
      </div>
    </PageSection>

    <!-- 全 IR メニュー -->
    <PageSection bg="white">
      <SectionHeading en="IR Menu" ja="投資家情報メニュー" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink
          v-for="item in irMenu"
          :key="item.path"
          v-reveal
          :to="item.path"
          class="group border border-gray-200 p-6 md:p-7 flex items-center justify-between hover:border-black/40 transition-colors duration-500"
        >
          <span class="font-ja text-[14px] md:text-[15px] font-bold">{{ item.name }}</span>
          <span class="relative inline-block h-[1px] w-7 group-hover:w-10 transition-all duration-300 ease-out-quart shrink-0">
            <span class="absolute inset-0 bg-black"></span>
            <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-black origin-right rotate-45"></span>
            <span class="absolute right-0 top-0 w-[7px] h-[1px] bg-black origin-right -rotate-45"></span>
          </span>
        </NuxtLink>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const { megaMenus } = useNavigation()

const features = [
  { ja: 'トップメッセージ',       en: 'TOP Message',                path: '/ir/management/message' },
  { ja: '中期経営計画',           en: 'Medium-Term Management Plan', path: '/ir/investor/plan' },
  { ja: 'データ一括ダウンロード', en: 'Download Latest IR Materials', path: '/ir/library' },
  { ja: 'IRカレンダー',           en: 'IR Calendar',                 path: '/ir/calendar' }
]

const topics = [
  { date: '2026.04.10', category: 'お知らせ',     title: '2025年8月期 第2四半期決算説明資料を掲載しました' },
  { date: '2026.04.10', category: '適時開示',     title: '2025年8月期 第2四半期決算短信〔IFRS〕（連結）' },
  { date: '2026.01.15', category: 'お知らせ',     title: '定時株主総会 招集通知を掲載しました' },
  { date: '2025.12.12', category: '適時開示',     title: '通期業績予想に関するお知らせ' }
]

// IR メガメニューの第1階層をメニューカードに
const irMenu = (megaMenus.find((m) => m.en === 'IR')?.items || []).filter((i) => i.name !== 'IR Topics')

useHead({ title: 'Investor Relations | Valuence Holdings' })
</script>
