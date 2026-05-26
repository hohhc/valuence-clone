/**
 * 企業理念（公式 /philosophy/ より）
 * Purpose / Mission / Core Value 5本柱 / Value Mind 5マインド
 */
export const usePhilosophy = () => {
  const coreValues = [
    { id: 'forSociety',  en: 'For Society',  ja: '豊かさを、繋げよう。' },
    { id: 'forBusiness', en: 'For Business', ja: 'プロの、誇りを。' },
    { id: 'forTeam',     en: 'For Team',     ja: '思いやる、共に創る。' },
    { id: 'forMe',       en: 'For Me',       ja: '好きを、究めよ。' },
    { id: 'forProgress', en: 'For Progress', ja: '変化を、進化に。' }
  ]

  const valueMinds = [
    {
      id: 'forSociety',
      en: 'Weave the strands of prosperity throughout the world.',
      ja: '私たちの日々の行動で、循環のデザインを実践していこう。',
      label: 'For Society',
      heading: '豊かさを、繋げよう。'
    },
    {
      id: 'forBusiness',
      en: 'Be professional.',
      ja: '徹底的にお客さま目線で寄り添い、失敗を恐れず、目の前の仕事にこだわっていこう。',
      label: 'For Business',
      heading: 'プロの、誇りを。'
    },
    {
      id: 'forProgress',
      en: 'Advance forward with adaptability.',
      ja: 'いかなる変化も成長の機会と捉え、自らポジティブに向かっていこう。',
      label: 'For Progress',
      heading: '変化を、進化に。'
    },
    {
      id: 'forTeam',
      en: 'Think of others, design coherently.',
      ja: '多様な個性同士、謙虚に学び合い、常識にとらわれない価値を創造しよう。',
      label: 'For Team',
      heading: '思いやる、共に創る。'
    },
    {
      id: 'forMe',
      en: 'Pursue your true purpose.',
      ja: '仕事もプライベートも垣根なく。好きを追求し、自らが主体的に心豊かに生きる人であろう。',
      label: 'For Me',
      heading: '好きを、究めよ。'
    }
  ]

  const purpose = {
    en: 'Circular Design for the Earth and Us',
    headline: '地球、そして私たちのために循環をデザインする。',
    body: '「Circular Design」人と地球がともに豊かに、幸せでありつづける、循環型の事業活動をデザインすることです。それは、誰かの不要なモノを、次に必要とする人につないでいくこと。そして、お客さまにモノの廃棄を抑制することで気づきを与え、共感を得て、社会課題をお客さまと共に解決するための事業をデザインしていくことです。'
  }

  const mission = {
    en: 'Increase the number of people who focus on what really matters',
    headline: '大切なことにフォーカスして生きる人を増やす',
    body: [
      'グローバリゼーションには、光と影があります。経済が発展すると同時に、貧困、環境破壊、格差の拡大、超高齢社会など、日本だけではなく世界で起こるさまざまな問題が、私たちに問いかけます。',
      '「人生において、本当に大切なものは何か？」私たちは、物質的な豊かさだけではなく、一人ひとりの生き方の豊かさを追求する、「大切なことにフォーカスして生きる」ことが、これからの世界の幸せに繋がると考えています。'
    ]
  }

  return { purpose, mission, coreValues, valueMinds }
}
