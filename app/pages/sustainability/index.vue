<template>
  <div>
    <PageHero
      title="Sustainability"
      subtitle="物質的な豊かさから、生き方の豊かさへ。"
      image="https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg"
      :breadcrumb="[{ label: 'Sustainability' }]"
    />

    <!-- イントロ -->
    <PageSection id="message" bg="white">
      <div v-reveal class="max-w-4xl">
        <p class="font-en text-[13px] md:text-[15px] tracking-wider text-gray-medium mb-6">
          We are creating a shift away from material wealth to true abundance.
        </p>
        <h2 class="font-ja text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.6] mb-8 md:mb-10">
          バリュエンスのサステナビリティ
        </h2>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-gray-medium">
          「リユース」は循環型社会における主要な取り組みの一つであり、当社の中核をなすリユース事業をグローバルに展開していくことが、持続可能な社会の実現につながると考えています。さらにESG課題に積極的に取り組み、すべてのステークホルダーが本当に必要なものを絞り込むことで、当社のミッションである「大切なことにフォーカスして生きる人を増やす」ことができる世界の実現を目指していきます。
        </p>
      </div>
    </PageSection>

    <!-- Message -->
    <PageSection bg="black">
      <SectionHeading en="Message" ja="メッセージ" />
      <div v-reveal class="max-w-4xl">
        <p class="font-ja text-[15px] md:text-[18px] leading-[2] mb-6">
          私たちは、誰かの不要なモノを、誰かの必要なモノへとつないでいく、リユースをコア事業に、さまざまな社会課題の解決に挑んでいます。
        </p>
        <p class="font-ja text-[13px] md:text-[15px] leading-[2.1] text-white/70 mb-10">
          物質的な豊かさだけではなく、人間一人ひとりの生き方の豊かさを追求する、「大切なことにフォーカスして生きる」こと。そして、人と地球がともに豊かに、幸せになりつづける、循環型の事業活動をデザインすることが、これからの世界の幸せに繋がると考えています。
        </p>
        <p class="font-ja text-[12px] text-white/60">バリュエンスホールディングス株式会社 代表取締役</p>
        <p class="font-ja text-[18px] font-bold mt-1">嵜本 晋輔</p>
      </div>
    </PageSection>

    <!-- 重点テーマ -->
    <PageSection id="keyThemes" bg="white">
      <SectionHeading en="Key Themes" ja="重点テーマとめざす姿" />
      <p v-reveal class="font-ja text-[13px] md:text-[15px] leading-[2] text-gray-medium max-w-4xl mb-12 md:mb-16">
        2030年の目指す姿「Circular Design Company」の実現に向け、新中期経営計画の策定にあたりマテリアリティを見直し、バリュエンスグループが取り組むべき4つの重点テーマと指標・目標を設定しました。
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
        <div
          v-for="theme in keyThemes"
          :key="theme.no"
          v-reveal
          class="bg-white p-8 md:p-10 flex flex-col"
        >
          <span class="font-en text-[36px] md:text-[48px] font-bold leading-none text-gray-200">{{ theme.no }}</span>
          <h3 class="font-ja text-[17px] md:text-[19px] font-bold leading-[1.6] mt-4 mb-4">{{ theme.title }}</h3>
          <p class="font-ja text-[12px] md:text-[13px] leading-[1.9] text-gray-medium">{{ theme.desc }}</p>
        </div>
      </div>
    </PageSection>

    <!-- Sustainability News -->
    <PageSection id="sustainabilityNews" bg="gray" spacing="md">
      <SectionHeading en="Sustainability News" ja="サステナビリティニュース" size="md" />
      <div class="flex flex-col bg-white border border-gray-200">
        <div
          v-for="news in sustainabilityNews"
          :key="news.title"
          class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 md:px-8 py-5 border-b border-gray-200 last:border-b-0"
        >
          <time class="font-en text-[12px] text-gray-medium tracking-widest shrink-0 md:w-28">{{ news.date }}</time>
          <span class="font-ja text-[10px] font-bold border border-black px-3 py-[2px] shrink-0 w-fit">{{ news.category }}</span>
          <span class="font-ja text-[13px] md:text-[14px] leading-[1.7] text-gray-dark">{{ news.title }}</span>
        </div>
      </div>
    </PageSection>

    <!-- E / S / G + 関連コンテンツ -->
    <PageSection bg="white">
      <SectionHeading en="ESG" ja="取り組み" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink
          v-for="esg in esgLinks"
          :key="esg.en"
          v-reveal
          :to="esg.path"
          class="group relative overflow-hidden border border-gray-200 p-8 md:p-10 min-h-[200px] flex flex-col justify-between hover:border-black/40 transition-colors duration-500"
        >
          <div>
            <h3 class="font-en text-[22px] md:text-[26px] font-bold tracking-tight">{{ esg.en }}</h3>
            <p class="font-ja text-[13px] text-gray-medium mt-2">{{ esg.ja }}</p>
          </div>
          <p class="font-ja text-[12px] md:text-[13px] leading-[1.8] text-gray-medium mt-6">{{ esg.desc }}</p>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
        <NuxtLink
          v-for="rel in relatedLinks"
          :key="rel.path"
          v-reveal
          :to="rel.path"
          class="group bg-gray-light p-7 md:p-8 flex items-center justify-between hover:bg-gray-100 transition-colors duration-500"
        >
          <span class="font-ja text-[14px] md:text-[15px] font-bold">{{ rel.name }}</span>
          <span class="relative inline-block h-[1px] w-8 group-hover:w-12 transition-all duration-300 ease-out-quart shrink-0">
            <span class="absolute inset-0 bg-black"></span>
            <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black origin-right rotate-45"></span>
            <span class="absolute right-0 top-0 w-[8px] h-[1px] bg-black origin-right -rotate-45"></span>
          </span>
        </NuxtLink>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
const keyThemes = [
  { no: '01', title: '人生の選択肢が広がる価値提供', desc: '一人ひとりが自分にとっての豊かな生き方を追求できるよう、お客さまの人生で起こるさまざまな選択や場面に寄り添い、豊かさを育み、人生における選択肢が広がる商品・サービスを提供することを目指します。' },
  { no: '02', title: 'モノと思いが循環するグローバル経済圏', desc: 'すべての人が安心して利用できるマーケットプレイスのもと、コミュニティとの共存共栄を通じて、実物資産の循環と心の豊かさが波及するグローバル経済圏を構築し、拡大させることを目指します。' },
  { no: '03', title: 'Value Designの源泉となる文化と人材力', desc: '従業員一人ひとりが心身ともに健康で、個性や才能を発揮できるような応援やサポートと、全員が居場所を感じられる文化の醸成を目指します。' },
  { no: '04', title: '地球・社会にとって誠実な事業運営', desc: '地球環境、社会を含むステークホルダーと誠実に向き合いながら、強靭なガバナンス体制を構築し、倫理的かつ公正な判断のもとで事業を運営することを目指します。' }
]

const sustainabilityNews = [
  { date: '2026.04.10', category: 'プレスリリース', title: 'バリュエンス、ブランドリセールの環境価値を可視化「Resale Impact」の算定方法を更新、2025年度実績も開示' },
  { date: '2026.03.31', category: 'お知らせ',       title: '2025年度の環境関連指標の進捗状況を公開' },
  { date: '2025.12.20', category: 'お知らせ',       title: '2024年度の温室効果ガス排出量を算定' },
  { date: '2025.06.30', category: 'プレスリリース', title: 'バリュエンス、2024年度の環境負荷の削減貢献量を算出！リユースによるCO₂排出削減貢献量は531万トン' }
]

const esgLinks = [
  { en: 'Environment', ja: '環境', desc: '循環型経済への移行、気候変動の抑制、自然との共生。「Resale Impact」の開発やカーボンニュートラル実現に向けた活動に取り組んでいます。', path: '/sustainability/sustainability-detail' },
  { en: 'Social',      ja: '社会', desc: '人権尊重、人材育成、健康経営、ダイバーシティ＆インクルージョンなど、人を中心とした取り組みを推進しています。', path: '/sustainability/sustainability-detail/#social' },
  { en: 'Governance',  ja: 'ガバナンス', desc: 'コーポレートガバナンス、コンプライアンス、データプライバシー＆セキュリティの強化に取り組んでいます。', path: '/sustainability/sustainability-detail/#governance' }
]

const relatedLinks = [
  { name: '価値創造ストーリー', path: '/sustainability/value-creation-story' },
  { name: 'ESGデータ',         path: '/sustainability/data' },
  { name: 'TCFD提言に沿った情報開示', path: '/sustainability/tcfd' },
  { name: 'FY25 進捗状況と取り組み',   path: '/sustainability/fy25' }
]

useHead({ title: 'Sustainability | Valuence Holdings' })
</script>
