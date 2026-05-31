/**
 * 企業理念（公式 /philosophy/ より）
 * Hero / Circular Design / 理念構成(Purpose・Mission・Core Value) /
 * 各本文 / Value Design Map / Value Mind（5マインド photoSet）
 */
export const usePhilosophy = () => {
  const IMG = 'https://www.valuence.inc/wp-content/themes/valuence/assets/images'

  // ページ内ナビ
  const nav = [
    { label: 'Philosophy',       hash: '#philosophy' },
    { label: 'Purpose',          hash: '#purpose' },
    { label: 'Mission',          hash: '#mission' },
    { label: 'Core Value',       hash: '#coreValue' },
    { label: 'Value Design Map', hash: '#valueDesignMap' },
    { label: 'Value Mind',       hash: '#valueMind' }
  ]

  // #philosophy : Circular Design コンセプト
  const concept = {
    en: ['Circular Design', 'for the Earth', 'and Us'],
    ja: '地球、そして私たちのために循環をデザインする',
    summary:
      '私たちは、循環型社会における重要な取組みの一つであるリユースを事業の中核に据え、持続可能な世界の実現を目指しております。'
  }

  // #valueProgress : 理念は3つから構成される
  const pillars = {
    lead:
      'Valuenceグループの企業理念は、パーパス、ミッション、コアバリューの大切な３つから構成されています。',
    items: [
      { en: 'Core Value', ja: 'コアバリュー', sphere: '現状', desc: 'お客さまに提供する、私たちの核となる価値や信念。' },
      { en: 'Mission',    ja: 'ミッション',   sphere: '',     desc: '事業を通じて目指す、私たちの中長期的な使命。' },
      { en: 'Purpose',    ja: 'パーパス',     sphere: '理想', desc: '世界に対して掲げる、私たちの存在意義。' }
    ]
  }

  // #purpose
  const purpose = {
    en: 'Purpose',
    lead: '私たちの世界に対しての存在意義',
    headline: '地球、そして私たちのために\n循環をデザインする。',
    body:
      '「Circular Design」人と地球がともに豊かに、幸せでありつづける、循環型の事業活動をデザインすることです。それは、誰かの不要なモノを、次に必要とする人につないでいくこと。そして、お客さまにモノの廃棄を抑制することで気づきを与え、共感を得て、社会課題をお客さまと共に解決するための事業をデザインしていくことです。',
    image: `${IMG}/philosophy-img_04.jpg`,
    button: { label: 'Sustainability', href: 'https://www.valuence.inc/sustainability/' }
  }

  // #mission
  const mission = {
    en: 'Mission',
    lead: '私たちの使命',
    headline: '大切なことにフォーカスして\n生きる人を増やす',
    body: [
      'グローバリゼーションには、光と影があります。経済が発展すると同時に、貧困、環境破壊、格差の拡大、超高齢社会など、日本だけではなく世界で起こるさまざまな問題が、私たちに問いかけます。',
      '「人生において、本当に大切なものは何か？」私たちは、物質的な豊かさだけではなく、一人ひとりの生き方の豊かさを追求する、「大切なことにフォーカスして生きる」ことが、これからの世界の幸せに繋がると考えています。'
    ],
    image: `${IMG}/philosophy-img_05.jpg`
  }

  // #coreValue
  const coreValue = {
    en: 'Core Value',
    lead: '私たちが提供する価値',
    headline: '本当の豊かさを問い、\n可能性を広げるアクションを。',
    body:
      '「大切なことにフォーカスして生きる人」を増やすために、私たちができること。それは、お客さまの人生で起こるさまざまな選択や場面に寄り添い、Valueを高める力をお客さま自身が育めるご提案、アドバイスを行うこと。人生のValueを育む力を、自分に、お客さまに、世界に。Value Designは、私たちの豊かさ、そして地球の豊かさへとつながっていくのです。',
    image: `${IMG}/philosophy-img_06.jpg`
  }

  // #valueDesignMap
  const valueDesignMap = {
    subtitle: '人間中心のValue Design Companyから、\n地球規模のCircular Design Companyへ',
    sideLabels: [
      { sub: 'Purpose',    main: 'Circular Design', main2: 'for the Earth and Us' },
      { sub: 'Mission',    main: '大切なことにフォーカスして生きる人を増やす' },
      { sub: 'Core Value', main: 'Value Design', main2: 'for Us' }
    ],
    circles: ['Earth', 'Local', 'Community', 'Family', 'Human']
  }

  // #valueMind
  const valueMind = {
    lead: '私たちの、行動指針',
    summary:
      '想いは、行動となり、価値をつくる。お客さまの人生はもちろん、私たちの人生に新しい価値を生み出すために大切な、５つのマインド。'
  }

  // Core Value 5本柱（Value Design Map / 一覧用）
  const coreValues = [
    { id: 'forSociety',  en: 'For Society',  ja: '豊かさを、繋げよう。' },
    { id: 'forBusiness', en: 'For Business', ja: 'プロの、誇りを。' },
    { id: 'forTeam',     en: 'For Team',     ja: '思いやる、共に創る。' },
    { id: 'forMe',       en: 'For Me',       ja: '好きを、究めよ。' },
    { id: 'forProgress', en: 'For Progress', ja: '変化を、進化に。' }
  ]

  // #valueMind photoSet（5マインド・ホバーで和文）
  const valueMinds = [
    {
      id: 'forSociety', label: 'For Society', heading: '豊かさを、繋げよう。',
      en: 'Weave the strands of prosperity throughout the world.',
      ja: '私たちの日々の行動で、循環のデザインを実践していこう。',
      image: `${IMG}/img_54.jpg`
    },
    {
      id: 'forBusiness', label: 'For Business', heading: 'プロの、誇りを。',
      en: 'Be professional.',
      ja: '徹底的にお客さま目線で寄り添い、失敗を恐れず、目の前の仕事にこだわっていこう。',
      image: `${IMG}/img_53.jpg`
    },
    {
      id: 'forProgress', label: 'For Progress', heading: '変化を、進化に。',
      en: 'Advance forward with adaptability.',
      ja: 'いかなる変化も成長の機会と捉え、自らポジティブに向かっていこう。',
      image: `${IMG}/img_52.jpg`
    },
    {
      id: 'forTeam', label: 'For Team', heading: '思いやる、共に創る。',
      en: 'Think of others, design coherently.',
      ja: '多様な個性同士、謙虚に学び合い、常識にとらわれない価値を創造しよう。',
      image: `${IMG}/img_51.jpg`
    },
    {
      id: 'forMe', label: 'For Me', heading: '好きを、究めよ。',
      en: 'Pursue your true purpose.',
      ja: '仕事もプライベートも垣根なく。好きを追求し、自らが主体的に心豊かに生きる人であろう。',
      image: `${IMG}/img_50.jpg`
    }
  ]

  return { nav, concept, pillars, purpose, mission, coreValue, valueDesignMap, valueMind, coreValues, valueMinds }
}
