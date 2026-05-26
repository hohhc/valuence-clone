/**
 * グループ会社（公式 /company/#group より）
 */
export const useGroups = () => {
  const groups = [
    {
      key: 'group_01',
      en: 'Valuence Japan Inc.',
      ja: 'バリュエンスジャパン株式会社',
      desc: '日本国内でブランド品・宝飾品、車などの買取・販売をメインに事業展開。',
      detail: 'ブランド買取「なんぼや」「BRAND CONCIER」、BtoBネットオークション「STAR BUYERS AUCTION」、プレオウンド・ブランドショップ「ALLU」を運営し、日本国内でのブランド品、時計、宝石、貴金属などのリユース事業をコアに、不動産・自動車などの実物資産についても取り扱っております。',
      logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-valuance-japan_01.svg',
      url: '/company/#group_01',
      offices: [
        { label: 'Tokyo Head Office',  address: '〒107-0062 東京都港区南青山5-6-19 MA5', tel: '03-4580-9864', access: '地下鉄表参道駅B1出入口すぐ' },
        { label: 'Tokyo Samezu Office',address: '〒140-0012 東京都品川区勝島1-1-1 東京SRC A棟8階' },
        { label: 'Osaka Office',       address: '〒530-0011 大阪府大阪市北区大深町4-20 グランフロント大阪 タワーA 16階', tel: '06-4400-5125' }
      ]
    },
    {
      key: 'group_02',
      en: 'ALLU Hong Kong Limited',
      ja: 'アリューホンコンリミテッド',
      desc: '香港を中心に、アジア、欧米、中近東などへ拠点を展開。',
      detail: '香港でのブランド買取「ALLU」や「STAR BUYERS AUCTION 香港」の運営のほか、シンガポール、アメリカ、フランス、上海、UAEのグループ企業と連携を取り、各国での「ALLU」の展開やオークションパートナーの開拓を担っています。',
      logo: 'https://www.valuence.inc/wp-content/uploads/2026/01/logo_ALLU_white_HK.png',
      url: '/company/#group_02',
      offices: [
        { label: 'Head Office', address: 'Unit A110, 16/F, Tower 5, The Gateway Harbour City, Kowloon, Hong Kong' }
      ],
      subsidiaries: [
        'ALLU USA Inc.',
        'ALLU Europe S.A.S.',
        'ALLU Shanghai Co.,Ltd.',
        'ALLU SGP PTE. LTD.',
        'ALLU MEA TRADING L.L.C'
      ]
    },
    {
      key: 'group_03',
      en: 'Valuence Technologies Inc.',
      ja: 'バリュエンステクノロジーズ株式会社',
      desc: '最新技術を活用したアプリ開発やシステム開発、AI導入支援。',
      detail: 'バリュエンスグループ全体の膨大な取引データを集約する「Valuence Brain」の各システムを構築。ブランド品のAI査定なども開発し、外部企業のAI導入支援も行っています。',
      logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-valuance-technologies_01.svg',
      url: '/company/#group_03',
      offices: [
        { label: 'Tokyo Head Office', address: '〒107-0062 東京都港区南青山5-6-19 MA5' }
      ]
    },
    {
      key: 'group_04',
      en: 'Valuence Ventures Inc.',
      ja: 'バリュエンスベンチャーズ株式会社',
      desc: 'バリュエンスグループと同じ志をもつ企業の成長と育成を促進。',
      detail: 'バリュエンスグループと同じ志を持つ企業の成長と育成を促進していきます。',
      logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-valuance-ventures_01.svg',
      url: '/company/#group_04',
      offices: [
        { label: 'Tokyo Head Office', address: '〒107-0062 東京都港区南青山5-6-19 MA5' }
      ]
    }
  ]

  return { groups }
}
