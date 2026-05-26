/**
 * 沿革（公式 /company/#history より）
 * 2004 〜 2025 年
 */
export const useHistory = () => {
  const history = [
    {
      year: '2025',
      events: [
        { month: '11月', text: 'プレオウンド・ブランドショップ「ALLU」において、越境ECサービス「ALLU Global Online Store」の提供を開始' },
        { month: '10月', text: '「STAR BUYERS AUCTION」において、落札商品代金を請求書カード払いできる「Auction Pay」の提供を開始' },
        { month: '9月',  text: '神奈川県横浜市に認証整備工場およびTWISTEDショールーム併設の複合施設「Valuence AUTOMOTIVE YOKOHAMA」をグランドオープン' },
        { month: '7月',  text: 'フランス・パリで開催されたサザビーズのオークションにて、唯一無二の「オリジナル・バーキン」を落札' },
        { month: '3月',  text: '購入した商品を使用しながら販売できるプラットフォーム「ALLU Fashion Market」をオンラインストアに統合' }
      ]
    },
    {
      year: '2024',
      events: [
        { month: '10月', text: 'プレオウンド・ブランドショップ「ALLU SHINJUKU」をオープン' },
        { month: '3月',  text: '「TWISTED JAPAN」をローンチ' }
      ]
    },
    {
      year: '2023',
      events: [
        { month: '12月', text: 'プレオウンド・ブランドショップ「ALLU 心斎橋 ANNEX」をオープン' },
        { month: '7月',  text: '「ALLU」で購入した商品を、使用しながら販売できるプラットフォーム「ALLU Fashion Market」の提供を開始' },
        { month: '5月',  text: '「STAR BUYERS AUCTION」会員企業向けにフルフィルメントサービスの提供を開始' },
        { month: '3月',  text: '「STAR BUYERS AUCTION」会員企業向け SaaS型新機能（コラボオークション機能）の提供を開始' },
        { month: '2月',  text: '本社を東京都港区南青山に移転' },
        { month: '1月',  text: '公開型toCオークション「ALLU AUCTION」第1回を開催' }
      ]
    },
    {
      year: '2022',
      events: [
        { month: '11月', text: 'Valuence International MEA Trading L.L.C（現 ALLU MEA TRADING L.L.C）を設立' },
        { month: '10月', text: '海外拠点のブランド買取専門店「Nanboya」を「ALLU」へ変更／修理サービス「ALLU REPAIR（現 修理工房なんぼや）」を立ち上げる' },
        { month: '6月',  text: '日本発のプロダンスリーグ「第一生命 D.LEAGUE 22-23 SEASON」へ参入、「Valuence INFINITIES」を結成' }
      ]
    },
    {
      year: '2021',
      events: [
        { month: '10月', text: 'バリュエンスジャパン、三越伊勢丹「I\'m green」の買取業務サポートを本格化' },
        { month: '7月',  text: '株式会社南葛SCの株式を取得し、持分法適用関連会社化' },
        { month: '5月',  text: '国内業界で初めて、リユース事業の環境フットプリント削減貢献量を算出・公開' },
        { month: '3月',  text: '「STAR BUYERS AUCTION」の香港大会を完全オンライン化' }
      ]
    },
    {
      year: '2020',
      events: [
        { month: '11月', text: 'Valuence International Shanghai Co.,Ltd.（現 ALLU Shanghai Co.,Ltd.）を設立' },
        { month: '9月',  text: 'Valuence International UK Limitedを設立／株式会社NEO-STANDARDを完全子会社化' },
        { month: '7月',  text: '「THE EIGHT AUCTION」をオンライン化' },
        { month: '6月',  text: '「なんぼや不動産」サービス開始' },
        { month: '3月',  text: 'グループ体制を持株会社体制へと変更し、バリュエンスホールディングス株式会社へ商号変更／Valuence International Europe S.A.S.（現 ALLU Europe S.A.S.）を設立' }
      ]
    },
    {
      year: '2019',
      events: [
        { month: '12月', text: 'Valuence International Singapore Pte.Ltd.（現 ALLU SGP PTE. LTD.）を設立' },
        { month: '11月', text: '連結子会社株式会社SOU Technologies（現 バリュエンステクノロジーズ株式会社）を設立し、システム開発事業を移管／国内「STAR BUYERS AUCTION」にて、世界中からの参加が可能なオンライン入札を開始' },
        { month: '10月', text: 'Valuence International USA Limited（現 ALLU USA Inc.）を設立' },
        { month: '7月',  text: '｢Nanboya（現 ALLU）｣の香港での買取りスタート' }
      ]
    },
    {
      year: '2018',
      events: [
        { month: '—',    text: '骨董品・美術品分野のオークション「THE EIGHT AUCTION」スタート' },
        { month: '3月',  text: '東京証券取引所 マザーズ市場へ株式上場' }
      ]
    },
    {
      year: '2017',
      events: [
        { month: '3月',  text: '「STAR BUYERS AUCTION」香港大会スタート' },
        { month: '2月',  text: '株式会社古美術八光堂を完全子会社化' }
      ]
    },
    {
      year: '2016',
      events: [{ month: '10月', text: '小売ブランド「ALLU」を銀座にオープン' }]
    },
    {
      year: '2015',
      events: [
        { month: '9月', text: '香港法人 STAR BUYERS LIMITED（現 ALLU Hong Kong Limited）を完全子会社化' },
        { month: '3月', text: 'ブランドリユース業界初、LINEビジネスコネクトを使用した新サービス「LINEで査定」を提供開始' }
      ]
    },
    {
      year: '2014',
      events: [{ month: '12月', text: '予約もできる買取専門店 1号店「BRAND CONCIER 銀座店」スタート' }]
    },
    {
      year: '2013',
      events: [{ month: '4月', text: 'BtoBオークション「東京スターオークション（現 STAR BUYERS AUCTION）」開始' }]
    },
    {
      year: '2012',
      events: [{ month: '4月', text: '東京オフィス開設（東京都港区南青山）' }]
    },
    {
      year: '2011',
      events: [{ month: '12月', text: '株式会社SOU（現 バリュエンスホールディングス株式会社）を設立（資本金：500万円、本社：大阪府大阪市浪速区）' }]
    },
    {
      year: '2004',
      events: [{ month: '6月', text: 'ブランドリユース1号店「ナンバdeなんぼ屋」オープン' }]
    }
  ]

  return { history }
}
