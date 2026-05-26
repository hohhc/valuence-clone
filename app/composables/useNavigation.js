/**
 * グローバルナビゲーション構造（公式サイトと完全一致）
 * ヘッダーメガメニュー / SP メニュー / フッターサイトマップ から共通参照
 */
export const useNavigation = () => {
  const megaMenus = [
    {
      en: 'Company', ja: '企業情報', path: '/company',
      items: [
        { name: '会社概要', path: '/company/#holding' },
        { name: 'CEO', path: '/company/#ceo' },
        { name: '役員紹介', path: '/company/#directors' },
        { name: '沿革', path: '/company/#history' },
        { name: 'Global Action', path: '/company/#globalAction' },
        { name: 'Valuence in Numbers', path: '/company/#vin' },
        {
          name: 'Group', path: '/company/#group',
          subLinks: [
            { name: 'Valuence Japan', path: '/company/#group_01' },
            { name: 'ALLU Hong Kong', path: '/company/#group_02' },
            { name: 'Valuence Technologies', path: '/company/#group_03' },
            { name: 'Valuence Ventures', path: '/company/#group_04' }
          ]
        }
      ]
    },
    {
      en: 'Philosophy', ja: '企業理念', path: '/philosophy',
      items: [
        { name: 'Our Philosophy', path: '/philosophy/#philosophy' },
        { name: 'Purpose', path: '/philosophy/#purpose' },
        { name: 'Mission', path: '/philosophy/#mission' },
        { name: 'Core Value', path: '/philosophy/#coreValue' },
        { name: 'Value Design Map', path: '/philosophy/#valueDesignMap' },
        { name: 'Value Mind', path: '/philosophy/#valueMind' }
      ]
    },
    {
      en: 'Business', ja: '事業紹介', path: '/business',
      items: [
        { name: '買取事業', path: '/business/purchasing' },
        { name: '小売事業', path: '/business/retail' },
        { name: 'オークション事業', path: '/business/auction' },
        { name: 'リペアサービス', path: '/business/repair' },
        { name: '不動産事業', path: '/business/realestate' },
        { name: '自動車事業', path: '/business/cars' },
        { name: 'テクノロジー事業', path: '/business/technologies' },
        { name: 'スポーツ事業', path: '/business/sports' }
      ]
    },
    {
      en: 'News', ja: 'ニュース', path: '/news/news-pickup',
      items: [
        { name: 'All', path: '/news' },
        { name: 'プレスリリース', path: '/news/category/news' },
        { name: 'お知らせ', path: '/news/category/notice' },
        { name: 'メディア掲載', path: '/news/category/media' }
      ]
    },
    {
      en: 'IR', ja: 'IR・投資家情報', path: '/ir',
      items: [
        {
          name: '経営方針', path: '/ir/management',
          subLinks: [
            { name: 'トップメッセージ', path: '/ir/management/message' },
            { name: 'コーポレート・ガバナンス', path: '/ir/management/governance' },
            { name: 'ディスクロージャー・ポリシー', path: '/ir/management/policy' },
            { name: 'リスク情報', path: '/ir/management/risk-info' }
          ]
        },
        {
          name: '財務・業績情報', path: '/ir/finance',
          subLinks: [
            { name: '財務サマリ', path: '/ir/finance/summary' },
            { name: '経営成績', path: '/ir/finance/pl' },
            { name: '財務状況', path: '/ir/finance/bs' },
            { name: 'キャッシュ・フローの状況', path: '/ir/finance/cf' }
          ]
        },
        {
          name: '投資家の皆さまへ', path: '/ir/investor',
          subLinks: [
            { name: 'バリュエンスのあゆみ', path: '/company/#history' },
            { name: 'バリュエンスの事業', path: '/business' },
            { name: '中期経営計画', path: '/ir/investor/plan' },
            { name: '数字で見るバリュエンス', path: '/ir/investor/numbers' }
          ]
        },
        { name: 'IR Topics', path: '/ir/news' },
        {
          name: 'IRライブラリ', path: '/ir/library',
          subLinks: [
            { name: '決算短信・決算説明資料', path: '/ir/library/results' },
            { name: '有価証券報告書・四半期報告書', path: '/ir/library/securities' },
            { name: '適時開示情報', path: '/ir/library/other' }
          ]
        },
        {
          name: '株式・株主情報', path: '/ir/stock',
          subLinks: [
            { name: '銘柄基本情報', path: '/ir/stock/basic_info' },
            { name: '株価情報', path: '/ir/stock/price' },
            { name: '株主総会関連情報', path: '/ir/stock/meeting' },
            { name: '配当情報', path: '/ir/stock/dividend' },
            { name: '株式手続き', path: '/ir/stock/procedure' },
            { name: '定款・株式取扱規則', path: '/ir/stock/regulation' },
            { name: '電子公告', path: '/ir/investor/publicnotice' }
          ]
        },
        { name: 'IRカレンダー', path: '/ir/calendar' },
        { name: '株価情報', path: '/ir/stock/price' },
        { name: '免責事項', path: '/ir/legalnotice' },
        { name: 'FAQ', path: '/ir/faq' }
      ]
    },
    {
      en: 'Sustainability', ja: 'サステナビリティ', path: '/sustainability',
      items: [
        {
          name: 'サステナビリティ', path: '/sustainability',
          subLinks: [
            { name: 'Sustainability News', path: '/sustainability/#sustainabilityNews' },
            { name: 'Message', path: '/sustainability/#message' },
            { name: '重点テーマとめざす姿', path: '/sustainability/#keyThemes' },
            { name: 'マテリアリティ特定のプロセス', path: '/sustainability/#materialityProcess' },
            { name: '指標と目標と進捗状況', path: '/sustainability/#indicators' },
            { name: 'FY25 進捗状況と取り組み', path: '/sustainability/fy25' },
            { name: '価値創造ストーリー', path: '/sustainability/#vcs' },
            { name: 'ステークホルダーエンゲージメント', path: '/sustainability/#stakeholderEngagement' },
            { name: 'コラボレーションネットワークと外部評価', path: '/sustainability/#collaborationNetwork' },
            { name: '基本方針', path: '/sustainability/#basicPolicy' }
          ]
        },
        {
          name: 'Environment', path: '/sustainability/sustainability-detail',
          subLinks: [
            { name: 'Resale Impact', path: '/sustainability/sustainability-detail/#cont_01_01' },
            { name: '気候変動対策', path: '/sustainability/sustainability-detail/#cont_01_03' },
            { name: 'TCFD提言に沿った情報開示', path: '/sustainability/tcfd' },
            { name: 'アップサイクル', path: '/sustainability/sustainability-detail/#cont_01_04' },
            { name: '環境に配慮した店舗デザイン', path: '/sustainability/sustainability-detail/#cont_01_05' }
          ]
        },
        {
          name: 'Social', path: '/sustainability/sustainability-detail/#social',
          subLinks: [
            { name: '人権尊重', path: '/sustainability/sustainability-detail/#cont_02_05' },
            { name: '人材育成戦略・方針', path: '/sustainability/sustainability-detail/#cont_02_01' },
            { name: '健康経営', path: '/sustainability/sustainability-detail/#cont_02_02' },
            { name: '社内環境整備方針・取り組み', path: '/sustainability/sustainability-detail/#cont_02_03' },
            { name: 'ダイバーシティ＆インクルージョン', path: '/sustainability/sustainability-detail/#cont_02_04' }
          ]
        },
        {
          name: 'Governance', path: '/sustainability/sustainability-detail/#governance',
          subLinks: [
            { name: 'コーポレートガバナンス', path: '/sustainability/sustainability-detail/#cont_03_01' },
            { name: 'コンプライアンス', path: '/sustainability/sustainability-detail/#cont_03_02' },
            { name: 'データプライバシー＆セキュリティ', path: '/sustainability/sustainability-detail/#cont_03_03' }
          ]
        },
        { name: '価値創造ストーリー', path: '/sustainability/value-creation-story' },
        {
          name: 'ESGデータ', path: '/sustainability/data',
          subLinks: [
            { name: 'Environment', path: '/sustainability/data/#cont_01' },
            { name: 'Social', path: '/sustainability/data/#cont_02' },
            { name: 'Governance', path: '/sustainability/data/#cont_03' }
          ]
        },
        { name: 'コミュニティとの共存共栄', path: '/sustainability/#corporatePhilanthropy' }
      ]
    },
    {
      en: 'Recruit', ja: '採用情報', path: '/recruit',
      items: [
        { name: '新卒採用', path: '/recruit/#cont_01' },
        { name: '中途採用', path: '/recruit/#cont_02' },
        { name: 'アスリート採用', path: '/recruit/#cont_03' },
        { name: 'バリューデザイナー採用', path: '/recruit/#cont_04' },
        { name: 'Valuence Records', path: '/recruit/#cont_05' }
      ]
    }
  ]

  const legalLinks = [
    { name: 'お問い合わせ',              path: '/contact' },
    { name: 'プライバシーポリシー',      path: '/privacy' },
    { name: '個人情報の取扱いについて',  path: '/explanatory-matter' },
    { name: '反社会的勢力排除宣言',      path: '/declaration' },
    { name: '外部通報制度',              path: '/external-reporting-system' }
  ]

  return { megaMenus, legalLinks }
}
