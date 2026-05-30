/**
 * 会社情報 / オフィス情報（公式 /company/ より）
 */
export const useCompanyInfo = () => {
  const corporate = {
    name:     'バリュエンスホールディングス株式会社／Valuence Holdings Inc.',
    founded:  '2011年12月28日',
    ceo:      '嵜本 晋輔',
    business: 'グループ全体の経営・マネジメント強化、戦略立案・策定、企業価値の最大化',
    capital:  '1,373百万円（2025年8月末）',
    employees: '連結：1,124名（2025年8月末）※連結、正社員のみ',
    revenue:  '連結：84,841百万円（2025年8月期）',
    groupCompanies:    'バリュエンスジャパン株式会社 / Valuence Japan Inc.\nALLU Hong Kong Limited\nバリュエンステクノロジーズ株式会社 / Valuence Technologies Inc.\nバリュエンスベンチャーズ株式会社 / Valuence Ventures Inc.',
    affiliates:        '株式会社南葛SC',
    mainBanks:         '株式会社三菱UFJ銀行\n株式会社三井住友銀行\n株式会社みずほ銀行\n株式会社りそな銀行',
    artGallery:        { label: 'VALON BY VALUENCE', url: 'https://www.valon-by-valuence.com/' },
    url:               'https://www.valuence.inc/'
  }

  const offices = [
    {
      key: 'tokyo',
      label: '東京オフィス',
      address: '〒107-0062 東京都港区南青山5-6-19 MA5',
      tel: '03-4580-9983'
    },
    {
      key: 'samezu',
      label: '鮫洲オフィス',
      address: '〒140-0012 東京都品川区勝島1-1-1 東京SRC A棟8階'
    },
    {
      key: 'osaka',
      label: '大阪オフィス',
      address: '〒530-0011 大阪府大阪市北区大深町4-20 グランフロント大阪 タワーA 16階',
      tel: '06-6636-1200'
    }
  ]

  return { corporate, offices }
}
