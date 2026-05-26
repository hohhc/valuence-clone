/**
 * 採用区分（公式 /recruit/ より）
 * 5区分
 */
export const useRecruitTypes = () => {
  const recruitTypes = [
    {
      id: 'cont_01',
      en: 'New Graduates',
      ja: '新卒採用',
      headline: '求む！サステナブルな社会を創るメンバー',
      desc: 'リユースのメガベンチャーとしてグローバル展開するバリュエンスでは、活躍のフィールドは無限大。あなたの挑戦したいことを教えてください。'
    },
    {
      id: 'cont_02',
      en: 'Mid-Career Professionals',
      ja: '中途採用',
      headline: '異業種の知識、経験を活かしシナジーを生み出す',
      desc: 'バリュエンスへの中途採用社員は、そのほとんどが異業種からの転職です。リユースの概念にとらわれず、異業種からの新しい視点やアイデアを積極的に取り入れ、相乗効果を生み出しながら成長を続けています。'
    },
    {
      id: 'cont_03',
      en: 'Athletes',
      ja: 'アスリート採用',
      headline: 'アスリート活動とキャリアの両立を応援',
      desc: 'アスリートとしての活動と、ビジネスパーソンとしてのキャリア形成、その両方を全力で応援します。'
    },
    {
      id: 'cont_04',
      en: 'Value Designers',
      ja: 'バリューデザイナー採用',
      headline: '提供するのは「人生を変える価値」',
      desc: '価値の目利きとして、お客さまの人生に寄り添うバリューデザイナーを募集しています。'
    },
    {
      id: 'cont_05',
      en: 'Valuence Records',
      ja: 'Valuence Records',
      headline: '進化し続けるバリュエンスの想いと挑戦の記録',
      desc: 'バリュエンスのこれまでの歩みと、これからの挑戦を紹介します。'
    }
  ]

  return { recruitTypes }
}
