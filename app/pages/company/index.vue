<template>
  <div>
    <PageHero
      title="Company"
      subtitle="企業情報"
      :breadcrumb="[{ label: 'Company' }]"
    />

    <!-- 会社概要 -->
    <PageSection id="holding" bg="white">
      <SectionHeading en="Corporate" ja="会社概要" />

      <dl class="border-t border-gray-200">
        <div
          v-for="row in corporateRows"
          :key="row.label"
          v-reveal
          class="flex flex-col md:flex-row border-b border-gray-200 py-5 md:py-6"
        >
          <dt class="font-ja text-[13px] md:text-[14px] font-bold text-gray-dark md:w-1/4 shrink-0 mb-2 md:mb-0">
            {{ row.label }}
          </dt>
          <dd class="font-ja text-[13px] md:text-[14px] leading-[1.9] text-gray-medium md:w-3/4">
            <template v-for="(line, i) in row.lines" :key="i">
              {{ line }}<br v-if="i < row.lines.length - 1" />
            </template>
          </dd>
        </div>
      </dl>

      <!-- オフィス -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        <div
          v-for="office in offices"
          :key="office.key"
          v-reveal
          class="border border-gray-200 p-6 md:p-8"
        >
          <h3 class="font-ja text-[15px] font-bold mb-3">{{ office.label }}</h3>
          <p class="font-ja text-[12px] md:text-[13px] leading-[1.9] text-gray-medium">{{ office.address }}</p>
          <p v-if="office.tel" class="font-en text-[12px] text-gray-medium mt-2">TEL：{{ office.tel }}</p>
        </div>
      </div>
    </PageSection>

    <!-- CEO -->
    <PageSection id="ceo" bg="gray">
      <SectionHeading en="CEO" ja="代表者メッセージ" />

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div v-reveal class="w-full md:w-[38%]">
          <div class="aspect-[3/4] bg-gray-200 overflow-hidden">
            <img
              src="https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg"
              alt="嵜本 晋輔"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p class="font-ja text-[18px] font-bold mt-5">{{ ceo.jaName }}</p>
          <p class="font-en text-[12px] text-gray-medium tracking-wider">{{ ceo.enName }}</p>
          <p class="font-ja text-[12px] text-gray-medium mt-1">{{ ceo.role }}</p>
        </div>

        <div v-reveal="150" class="w-full md:w-[62%]">
          <h3 class="font-ja text-[20px] md:text-[26px] font-bold leading-[1.6] mb-6 md:mb-8">
            {{ purpose.headline }}
          </h3>
          <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium mb-6">
            {{ purpose.body }}
          </p>
          <ul class="border-t border-gray-300 mt-8 pt-6 space-y-1.5">
            <li
              v-for="(line, i) in ceo.bio"
              :key="i"
              class="font-ja text-[12px] md:text-[13px] leading-[1.8] text-gray-medium"
            >
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </PageSection>

    <!-- 役員紹介 -->
    <PageSection id="directors" bg="white">
      <SectionHeading en="Directors" ja="役員紹介" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-12 md:gap-y-14">
        <article
          v-for="director in directors"
          :key="director.enName"
          v-reveal
          class="border-t border-black pt-6"
        >
          <div class="flex items-baseline justify-between gap-4 mb-4">
            <div>
              <h3 class="font-ja text-[18px] md:text-[20px] font-bold">{{ director.jaName }}</h3>
              <p class="font-en text-[11px] md:text-[12px] text-gray-medium tracking-wider mt-1">{{ director.enName }}</p>
            </div>
            <span class="font-ja text-[11px] md:text-[12px] text-gray-medium text-right shrink-0">{{ director.role }}</span>
          </div>
          <ul class="space-y-1">
            <li
              v-for="(line, i) in director.bio"
              :key="i"
              class="font-ja text-[11px] md:text-[12px] leading-[1.8] text-gray-400"
            >
              {{ line }}
            </li>
          </ul>
        </article>
      </div>
    </PageSection>

    <!-- 沿革 -->
    <PageSection id="history" bg="gray">
      <SectionHeading en="History" ja="沿革" />

      <div class="border-l border-gray-300 ml-2 md:ml-4">
        <div
          v-for="block in history"
          :key="block.year"
          v-reveal
          class="relative pl-8 md:pl-12 pb-12 last:pb-0"
        >
          <span class="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-black ring-4 ring-gray-light"></span>
          <h3 class="font-en text-[28px] md:text-[36px] font-bold leading-none mb-5 md:mb-6 tracking-tight">
            {{ block.year }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(ev, i) in block.events"
              :key="i"
              class="flex gap-4 md:gap-6"
            >
              <span class="font-en text-[12px] md:text-[13px] font-bold text-gray-medium w-12 shrink-0 pt-[2px]">{{ ev.month }}</span>
              <span class="font-ja text-[12px] md:text-[14px] leading-[1.9] text-gray-dark">{{ ev.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </PageSection>

    <!-- Global Action（共通コンポーネント再利用） -->
    <GlobalAction />

    <!-- Valuence in Numbers（共通コンポーネント再利用） -->
    <ValuenceInNumbers />

    <!-- Group -->
    <PageSection id="group" bg="gray">
      <SectionHeading en="Group" ja="グループ会社" />

      <div class="flex flex-col gap-8 md:gap-10">
        <article
          v-for="group in groups"
          :id="group.key"
          :key="group.key"
          v-reveal
          class="scroll-mt-24 bg-white border border-gray-200 p-7 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12"
        >
          <div class="md:w-1/3 shrink-0">
            <div class="h-10 mb-5 flex items-center bg-black px-4 rounded-sm">
              <img :src="group.logo" :alt="group.en" class="max-h-6 object-contain object-left" loading="lazy" />
            </div>
            <h3 class="font-en text-[17px] md:text-[19px] font-bold leading-tight">{{ group.en }}</h3>
            <p class="font-ja text-[12px] text-gray-medium mt-1">{{ group.ja }}</p>
          </div>

          <div class="md:w-2/3">
            <p class="font-ja text-[13px] md:text-[14px] leading-[2] text-gray-medium mb-6">{{ group.detail }}</p>

            <dl v-if="group.offices" class="space-y-3 border-t border-gray-200 pt-5">
              <div v-for="office in group.offices" :key="office.label" class="flex flex-col md:flex-row gap-1 md:gap-4">
                <dt class="font-en text-[11px] font-bold text-gray-dark md:w-40 shrink-0">{{ office.label }}</dt>
                <dd class="font-ja text-[12px] text-gray-medium leading-[1.8]">
                  {{ office.address }}<template v-if="office.tel"><br>TEL：{{ office.tel }}</template>
                </dd>
              </div>
            </dl>

            <div v-if="group.subsidiaries" class="mt-5 pt-5 border-t border-gray-200">
              <p class="font-en text-[11px] font-bold text-gray-dark mb-2">Subsidiaries</p>
              <ul class="flex flex-wrap gap-x-5 gap-y-1">
                <li v-for="sub in group.subsidiaries" :key="sub" class="font-en text-[12px] text-gray-medium">{{ sub }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const { corporate, offices } = useCompanyInfo()
const { directors } = useDirectors()
const { history } = useHistory()
const { groups } = useGroups()
const { purpose } = usePhilosophy()

const ceo = directors[0]

const corporateRows = [
  { label: '商号',         lines: corporate.name.split('／') },
  { label: '設立',         lines: [corporate.founded] },
  { label: '代表者',       lines: [corporate.ceo] },
  { label: '事業内容',     lines: [corporate.business] },
  { label: '資本金',       lines: [corporate.capital] },
  { label: '従業員数',     lines: [corporate.employees] },
  { label: '売上高',       lines: [corporate.revenue] },
  { label: 'グループ会社', lines: corporate.groupCompanies.split('\n') },
  { label: '関連会社',     lines: [corporate.affiliates] },
  { label: '主要取引銀行', lines: corporate.mainBanks.split('\n') }
]

useHead({ title: 'Company | Valuence Holdings' })
</script>
