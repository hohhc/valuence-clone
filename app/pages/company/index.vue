<template>
  <div>
    <PageHero
      title="Company"
      subtitle="循環をデザインする、企業であること。"
      image="https://www.valuence.inc/wp-content/themes/valuence/assets/images/kv_18.jpg"
      :breadcrumb="[{ label: 'Company' }]"
    />

    <CompanyNav />

    <!-- 会社情報 -->
    <PageSection id="holding" bg="white">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div class="lg:w-1/4 shrink-0">
          <StackedHeading en="Corporate Information" ja="会社情報" />
        </div>

        <div class="lg:w-3/4">
          <dl class="border-t border-gray-200">
            <div
              v-for="row in corporateRows"
              :key="row.label"
              class="flex flex-col md:flex-row border-b border-gray-200 py-5 md:py-6"
            >
              <dt class="font-ja text-[13px] md:text-[14px] font-bold text-gray-dark md:w-1/4 shrink-0 mb-2 md:mb-0">
                {{ row.label }}
              </dt>
              <dd class="font-ja text-[13px] md:text-[14px] leading-[1.95] text-gray-medium md:w-3/4">
                <a v-if="row.link" :href="row.link.href" target="_blank" rel="noopener" class="text-[#1f7a4d] underline underline-offset-2 hover:opacity-70 transition-opacity break-all">
                  {{ row.link.text }}
                </a>
                <template v-else>
                  <template v-for="(line, i) in row.lines" :key="i">
                    {{ line }}<br v-if="i < row.lines.length - 1" />
                  </template>
                </template>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </PageSection>

    <!-- CEO -->
    <PageSection id="ceo" bg="black" spacing="none">
      <div class="py-0">
        <div class="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 -mx-6 md:-mx-12 lg:-mx-20">
          <div v-reveal class="w-full md:w-1/2">
            <div class="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
              <img :src="ceoProfile.image" :alt="ceoProfile.jaName" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div class="w-full md:w-1/2 flex items-center">
            <div v-reveal="150" class="px-6 md:px-12 lg:px-20 py-16 md:py-24">
              <p class="font-en text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.2] tracking-tight mb-8 md:mb-10">
                <span class="block">Shinsuke</span>
                <span class="block">Sakimoto</span>
                <span class="block text-gray-400">Profile</span>
              </p>
              <a :href="ceoProfile.link" target="_blank" rel="noopener" class="group block">
                <p class="font-en text-[15px] md:text-[18px] leading-[1.6] mb-3">{{ ceoProfile.enTagline }}</p>
                <p class="font-ja text-[13px] md:text-[15px] text-white/70 mb-10">{{ ceoProfile.jaTagline }}</p>
                <span class="inline-flex items-center gap-4 border-b border-white pb-1 group-hover:border-white/50 transition-colors">
                  <span class="font-en text-[11px] md:text-[12px] font-bold tracking-widest uppercase">View More</span>
                  <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart">
                    <span class="absolute inset-0 bg-white"></span>
                    <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white origin-right rotate-45"></span>
                    <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-white origin-right -rotate-45"></span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>

    <!-- 役員紹介 -->
    <PageSection id="directors" bg="white">
      <StackedHeading en="Directors" ja="役員紹介" />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-8 gap-y-10 md:gap-y-14">
        <button
          v-for="director in directors"
          :key="director.enName"
          v-reveal
          type="button"
          class="group text-left"
          @click="openDirector(director)"
        >
          <div class="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
            <img
              :src="director.photo"
              :alt="director.jaName"
              loading="lazy"
              class="w-full h-full object-cover object-top grayscale-[15%] transition-all duration-700 ease-out-quart group-hover:scale-[1.04] group-hover:grayscale-0"
              @error="onPhotoError"
            />
          </div>
          <p class="font-ja text-[11px] md:text-[12px] text-gray-medium mb-1">{{ director.role }}</p>
          <h3 class="font-ja text-[15px] md:text-[17px] font-bold leading-tight">{{ director.jaName }}</h3>
          <p class="font-en text-[10px] md:text-[11px] text-gray-medium tracking-wider mt-0.5">{{ director.enName }}</p>
        </button>
      </div>
    </PageSection>

    <!-- 役員モーダル -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="activeDirector"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          @click.self="closeDirector"
        >
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div class="relative bg-white w-full max-w-3xl max-h-[88vh] overflow-y-auto">
            <button
              type="button"
              aria-label="閉じる"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gray-medium hover:text-black transition-colors"
              @click="closeDirector"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>
            </button>

            <div class="flex flex-col md:flex-row gap-0">
              <div class="md:w-2/5 shrink-0">
                <div class="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img :src="activeDirector.photo" :alt="activeDirector.jaName" class="w-full h-full object-cover object-top" @error="onPhotoError" />
                </div>
              </div>
              <div class="md:w-3/5 p-7 md:p-10">
                <p class="font-ja text-[12px] text-gray-medium mb-2">{{ activeDirector.role }}</p>
                <h3 class="font-ja text-[22px] md:text-[26px] font-bold leading-tight">{{ activeDirector.jaName }}</h3>
                <p class="font-en text-[12px] text-gray-medium tracking-wider mt-1 mb-6">{{ activeDirector.enName }}</p>
                <ul class="space-y-2 border-t border-gray-200 pt-5">
                  <li
                    v-for="(line, i) in activeDirector.bio"
                    :key="i"
                    class="font-ja text-[11px] md:text-[12.5px] leading-[1.8] text-gray-medium"
                  >
                    {{ line }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- 沿革 -->
    <PageSection id="history" bg="gray">
      <StackedHeading en="History" ja="沿革" />

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
      <StackedHeading en="Group" ja="グループ会社" />

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
import { ref, onMounted, onUnmounted } from 'vue'

const { corporate, offices } = useCompanyInfo()
const { directors, ceoProfile } = useDirectors()
const { history } = useHistory()
const { groups } = useGroups()

const officeRow = (key) => {
  const o = offices.find((x) => x.key === key)
  if (!o) return null
  return { label: o.label, lines: o.tel ? [o.address, `TEL：${o.tel}`] : [o.address] }
}

const corporateRows = [
  { label: '社名',         lines: [corporate.name] },
  { label: '設立',         lines: [corporate.founded] },
  { label: '代表取締役',   lines: [corporate.ceo] },
  { label: '事業内容',     lines: [corporate.business] },
  officeRow('tokyo'),
  officeRow('samezu'),
  officeRow('osaka'),
  { label: 'アートギャラリー', link: { text: corporate.artGallery.label, href: corporate.artGallery.url } },
  { label: 'URL',          link: { text: corporate.url, href: corporate.url } },
  { label: '資本金',       lines: [corporate.capital] },
  { label: '従業員数',     lines: [corporate.employees] },
  { label: '売上高',       lines: [corporate.revenue] },
  { label: 'グループ会社', lines: corporate.groupCompanies.split('\n') },
  { label: '関連会社',     lines: [corporate.affiliates] },
  { label: '主要取引銀行', lines: corporate.mainBanks.split('\n') }
].filter(Boolean)

// 役員モーダル
const activeDirector = ref(null)
const openDirector = (d) => { activeDirector.value = d }
const closeDirector = () => { activeDirector.value = null }

const PLACEHOLDER = 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg'
const onPhotoError = (e) => { e.target.src = PLACEHOLDER }

const onKey = (e) => { if (e.key === 'Escape') closeDirector() }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

useHead({ title: 'Company | Valuence Holdings' })
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to { opacity: 0; }
</style>
