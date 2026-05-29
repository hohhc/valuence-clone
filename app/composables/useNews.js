import bodies from '~/data/news-bodies.json'

/**
 * ニュース記事（公式 /news/ より・最新ラインナップ）
 * category: 'プレスリリース' | 'お知らせ' | 'メディア掲載'
 * 各記事は slug を持ち、内部パス /news/YYYY/MM/DD/slug/ で詳細表示する。
 */
export const useNews = () => {
  const U = 'https://www.valuence.inc/wp-content/uploads'

  // メディア掲載など本家本文を取得していない記事の簡易本文
  const fallbackBody = (lead) => `<p>${lead}</p>`

  const raw = [
    {
      slug: 'ht_may_2026', date: '2026.05.29', category: 'プレスリリース',
      title: '【5月】「HATTRICK」プレスリリース配信情報',
      img: `${U}/2025/03/20250227_release_thumbnail_HATTRICK-1080x720.jpg`,
      tags: ['HATTRICK', 'バリュエンスジャパン']
    },
    {
      slug: 'allu-surabaya-telkom-merr-landmark', date: '2026.05.29', category: 'お知らせ',
      title: 'インドネシアでブランド買取「ALLU Surabaya Telkom Merr Landmark」をオープン！',
      img: `${U}/2026/05/c42b0dbe56f98074624bebd53a46169e.png`,
      tags: ['ALLU Hong Kong Limited', 'ブランド買取「ALLU」']
    },
    {
      slug: 'allu-surabaya-tunjungan-plaza', date: '2026.05.29', category: 'お知らせ',
      title: 'インドネシアでブランド買取「ALLU Surabaya Tunjungan Plaza」を移転・リニューアルオープン！',
      img: `${U}/2026/05/3bb4ecde33cee9b922fafa294b418d2f.png`,
      tags: ['ALLU Hong Kong Limited', 'ブランド買取「ALLU」']
    },
    {
      slug: 'allu-boulogne-billancourt', date: '2026.05.26', category: 'プレスリリース',
      title: 'バリュエンス、フランスにてブランド買取「ALLU Boulogne-Billancourt」をオープン！',
      img: `${U}/2026/05/TOP.png`,
      tags: ['ALLU Europe S.A.S.', 'ALLU Hong Kong Limited']
    },
    {
      slug: 'captain-tsubasa_la-galaxy', date: '2026.05.22', category: 'プレスリリース',
      title: 'バリュエンス、『キャプテン翼』IPを活用した、MLSカップ6度の優勝を誇る「LA Galaxy」とコラボレーションが決定！',
      img: `${U}/2026/05/LA-Galaxy-TOP.jpg`,
      tags: ['バリュエンスジャパン']
    },
    {
      slug: 'nanboya-chuorinkan-tokyu', date: '2026.05.20', category: 'お知らせ',
      title: 'なんぼや 中央林間東急スクエア店が5月27日（水）にオープン！',
      img: `${U}/2026/05/nanboyachuorinan-tokyu.png`,
      tags: ['なんぼや']
    },
    {
      slug: 'valuence-infinities_26-27-season-new-member-auditions', date: '2026.05.18', category: 'プレスリリース',
      title: 'Valuence INFINITIES、26-27 SEASON 新メンバーオーディションを開催！',
      img: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_12.jpg',
      tags: ['Valuence INFINITIES']
    },
    {
      slug: 'allu-cebucity', date: '2026.05.18', category: 'お知らせ',
      title: 'フィリピンにブランド買取「ALLU Cebucity」をオープン！',
      img: `${U}/2026/05/a93c376ffcebf089e5ed7d4f7985d8ec.png`,
      tags: ['ALLU Hong Kong Limited', 'ブランド買取「ALLU」']
    },
    {
      slug: 'jleagueallstar_dazncup', date: '2026.05.18', category: 'プレスリリース',
      title: 'バリュエンス、「ＪリーグオールスターDAZNカップ」のシルバーパートナーに就任！',
      img: `${U}/2026/05/d62443522355bdd24225fd339926e888.jpg`,
      tags: ['バリュエンスジャパン']
    },
    {
      slug: 'auction-pay-penguintrade', date: '2026.05.12', category: 'プレスリリース',
      title: 'バリュエンス、BtoBオークション向け決済サービス「Auction Pay」をペンギントレードへ提供開始',
      img: `${U}/2026/05/e25b18710acf8d112c78138cfc0abc41.jpg`,
      tags: ['STAR BUYERS AUCTION']
    },
    {
      slug: 'nanboya-cm_sanmasan', date: '2026.05.01', category: 'プレスリリース',
      title: '明石家さんまさんが出演する新CMを5月4日より全国放映 「さんまさん初ご来店」篇・「笑顔の査定室」篇を公開',
      img: `${U}/2026/04/d1bdc4040d0f50f7900599e47799e0af.png`,
      tags: ['なんぼや']
    },
    {
      slug: 'allu-milano', date: '2026.04.16', category: 'プレスリリース',
      title: 'バリュエンス、イタリア初のブランド買取「ALLU Milano」をオープン！',
      img: `${U}/2026/04/TOP-2.png`,
      tags: ['ALLU Hong Kong Limited', 'ブランド買取「ALLU」']
    },
    {
      slug: 'nagoya-sakaechika', date: '2026.04.15', category: 'お知らせ',
      title: 'なんぼや 名古屋サカエチカ店が4月20日（月）にオープン！',
      img: `${U}/2026/04/TOP-1.png`,
      tags: ['なんぼや']
    },
    {
      slug: 'vivid-garden', date: '2026.04.14', category: 'プレスリリース',
      title: '食のこだわりから、モノの循環へ 産直通販サイト「食べチョク」と「なんぼや 宅配買取」が連携し、サステナブルな消費行動を広げる',
      img: `${U}/2026/04/638e2c75b6fad80da201aba2fcc399c5.png`,
      tags: ['なんぼや']
    },
    {
      slug: 'resale-impact-2025', date: '2026.04.10', category: 'メディア掲載',
      title: 'バリュエンス、ブランドリセールの環境価値を可視化「Resale Impact」の算定方法を更新、2025年度実績も開示',
      img: `${U}/2026/04/d1bdc4040d0f50f7900599e47799e0af.png`,
      tags: ['バリュエンスホールディングス'],
      body: fallbackBody('バリュエンスホールディングス株式会社は、ブランドリセールにおける環境負荷削減への貢献を示す指標「Resale Impact（リセールインパクト）」の算定方法を更新し、2025年度実績を開示しました。詳細は公式サイトのプレスリリースをご確認ください。')
    },
    {
      slug: 'ceo-interview-2026', date: '2026.03.18', category: 'メディア掲載',
      title: '代表 嵜本晋輔のインタビュー記事が各種メディアに掲載されました',
      img: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_58.jpg',
      tags: ['バリュエンスホールディングス'],
      body: fallbackBody('バリュエンスホールディングス代表取締役 嵜本晋輔のインタビュー記事が各種メディアに掲載されました。サーキュラーデザインによる循環型社会の実現に向けた取り組みについて語っています。')
    }
  ]

  // 派生プロパティ（日付パース・内部パス・本文）を付与
  const newsItems = raw.map((item) => {
    const [year, month, day] = item.date.split('.')
    return {
      ...item,
      year, month, day,
      path: `/news/${year}/${month}/${day}/${item.slug}/`,
      body: item.body || bodies[item.slug] || fallbackBody('本文は公式サイトでご覧ください。')
    }
  })

  const categories = [
    { label: 'All',          value: 'all',          path: '/news' },
    { label: 'プレスリリース', value: 'プレスリリース', path: '/news/category/news' },
    { label: 'お知らせ',       value: 'お知らせ',       path: '/news/category/notice' },
    { label: 'メディア掲載',   value: 'メディア掲載',   path: '/news/category/media' }
  ]

  const tagList = [
    'なんぼや', 'ブランド買取「ALLU」', 'プレオウンド・ブランドショップ「ALLU」',
    'STAR BUYERS AUCTION', 'ALLU AUCTION', 'HATTRICK', 'Valuence INFINITIES',
    'Valuence AUTOMOTIVE', 'helpmeee! KEIKO', '修理工房なんぼや',
    'バリュエンスジャパン', 'バリュエンスホールディングス', 'バリュエンステクノロジーズ',
    'ALLU Hong Kong Limited', 'ALLU Europe S.A.S.'
  ]

  // ---- ヘルパー ----
  const getArticle = (year, month, day, slug) =>
    newsItems.find((n) => n.year === year && n.month === month && n.day === day && n.slug === slug)

  const getByTag = (tag) => newsItems.filter((n) => n.tags.includes(tag))

  // 詳細ページの Prev(古い)/Next(新しい) を返す（配列は新しい順）
  const getAdjacent = (slug) => {
    const i = newsItems.findIndex((n) => n.slug === slug)
    return {
      prev: i >= 0 && i < newsItems.length - 1 ? newsItems[i + 1] : null,
      next: i > 0 ? newsItems[i - 1] : null
    }
  }

  const paginate = (list, page = 1, perPage = 8) => {
    const total = list.length
    const totalPages = Math.max(1, Math.ceil(total / perPage))
    const current = Math.min(Math.max(1, page), totalPages)
    const start = (current - 1) * perPage
    return { items: list.slice(start, start + perPage), totalPages, page: current, total }
  }

  return { newsItems, categories, tagList, getArticle, getByTag, getAdjacent, paginate }
}
