/**
 * 事業データ（公式 /business/ より）
 * トップページ Business セクション / 各事業詳細ページから共通参照
 */
export const useBusinesses = () => {
  const categories = [
    {
      id: 'purchasing',
      jaTitle: '買取事業', enTitle: 'Purchasing', count: 3,
      slug: 'purchasing', path: '/business/purchasing',
      headline: 'モノをつなぎ、人生を変えるきっかけを生み出す',
      description: '私たちの買取事業は、単にお客さまが使わなくなったモノ、不要となったモノに金額をつけることではありません。モノに込められた思い出や、ストーリーまでお聞きした上で、価値の目利きをさせていただき、納得感のあるお取引を大切にしています。「買って使う」から「売ってつなぐ」、そしてご自身にまた新たな投資をすることで、よりその人らしい心の豊かさを育む。そんなきっかけとなる場所でありたいと考えています。',
      items: [
        {
          name: 'なんぼや', url: 'https://nanboya.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_03.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-nanboya_01.svg',
          desc: '不要になったモノを捨てるのではなく、次に必要な方へとつなげる。日本、そして世界各国で、リユースによるサステナブルなライフスタイルを提案します。'
        },
        {
          name: 'BRAND CONCIER', url: 'https://nanboya.com/brand-concier/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_02.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-brandconcier_01.svg',
          desc: '日本国内の百貨店を中心に展開する「なんぼや」の姉妹ブランド。「なんぼや」の大切にするスタンスはそのままに、お客さま一人ひとりの細やかなニーズに対応しています。'
        },
        {
          name: '古美術八光堂', url: 'https://www.hakkoudo.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_04.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-hakkoudou_01.png',
          desc: '伝統美術やアートの素晴らしさを現在、そして未来へと継承する。人から人へ、お客さまの想いとともに、大切なお品物を次の方へとつなぐ骨董・美術品の買取専門店です。'
        }
      ]
    },
    {
      id: 'retail',
      jaTitle: '小売事業', enTitle: 'Retail', count: 1,
      slug: 'retail', path: '/business/retail',
      headline: 'お客さまの新しい出会いをつくる場所',
      description: '人々がモノと出会いときめく瞬間をつくり出したい。この想いからBtoCの販売事業を2016年に新規事業としてスタートしました。新品と同等の商品をお得な価格で購入することができたり、普通では目にすることのない逸品に出会えたり、価値を見抜く確かな力を持つバリュエンスだからこそ提供できる「新しい出会い」を届ける場所を目指します。',
      items: [
        {
          name: 'ALLU', url: 'https://ec-jp.allu-official.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_05.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-allu_01.svg',
          desc: 'ハイブランドの希少アイテムや、タイムレスな価値を持つ一点物のプレオウンド（リユース）品を豊富に取り揃え、国内5店舗を展開しています。'
        }
      ]
    },
    {
      id: 'auction',
      jaTitle: 'オークション事業', enTitle: 'Auction', count: 3,
      slug: 'auction', path: '/business/auction',
      headline: '業界のハブとして、日本の「リユース」を世界へ',
      description: '国内ではブランド品、骨董・美術品のオークションを、香港ではダイヤモンド、ジュエリーのBtoBオークションを運営。スタートして以来、登録業者さまも増え続け、現在では世界各国のバイヤーさまからもご支持をいただくようになりました。自社仕入れの強みを活かした、圧倒的な品揃えと品質で、業界のハブとして「日本発のリユース」という価値観が世界でも当たり前になることを目指します。',
      items: [
        {
          name: 'STAR BUYERS AUCTION', url: 'https://biz.starbuyers-global-auction.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_06.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-sba_01.svg',
          desc: '国内外のバイヤーの方々へ、最高の品質と品数をお届けするラグジュアリーブランドオークション。完全オンライン開催で全商品において国内外からの入札を可能とする環境を整備しています。'
        },
        {
          name: 'THE EIGHT AUCTION', url: 'https://the-eight-auction.com/mem_top',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_07.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-tea_01.svg',
          desc: '骨董・美術品のオンラインオークション。なんぼやと古美術八光堂の買取を活かし、日本全国から集めた魅力あふれる商品を出品。お客さまへ「一期一宝」を提供します。'
        },
        {
          name: 'ALLU AUCTION', url: 'https://www.allu-auction.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_40.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-allu-auction_01.svg',
          desc: '世界的にも質が高いといわれる、日本のコレクターの高級時計を中心に集めたオークション。上質な空間でオークションを楽しむ、プレミアムな体験を提供しています。'
        }
      ]
    },
    {
      id: 'repair',
      jaTitle: 'リペアサービス', enTitle: 'Repair', count: 1,
      slug: 'repair', path: '/business/repair',
      headline: '大切なモノを修理し、もっと長く愛せる時間へ',
      description: '時計やバッグ、靴などの修理サービスを通じて、お客さまの大切なお品物を再び輝かせます。国内トップレベルの修理設備にて、熟練の技師が一点一点丁寧に対応いたします。',
      items: [
        {
          name: '修理工房なんぼや', url: 'https://nanboya.com/repair/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_41.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-nanboya-repair_01.svg',
          desc: '時計やバッグ、靴などの修理サービスをご提供。国内トップレベルの修理設備にて、熟練の時計技師や修理師が対応します。'
        }
      ]
    },
    {
      id: 'realestate',
      jaTitle: '不動産事業', enTitle: 'Real Estate', count: 1,
      slug: 'realestate', path: '/business/realestate',
      headline: 'お客さま一人ひとりと、生涯のお付き合いを',
      description: '人生で手にする大切な資産の運用・管理を一括して相談してもらえる存在になりたいという想いから、2020年6月にスタートした「なんぼや不動産」。一人ひとりのライフステージに合わせて、「賃貸と購入はどちらがいいのか」「物件の売り時・買い時」をアドバイスすることで、皆さまの人生に寄り添い、サポートしています。',
      items: [
        {
          name: 'なんぼや不動産', url: 'https://nanboya-fudosan.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_19.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-nanboya-hudousan_01.svg',
          desc: 'マンション、戸建、土地、アパートなど、お客さまの大切な不動産資産に関するお悩みをワンストップでサポート。'
        }
      ]
    },
    {
      id: 'cars',
      jaTitle: '自動車事業', enTitle: 'Cars', count: 1,
      slug: 'cars', path: '/business/cars',
      headline: 'お客さまのさまざまなこだわりを叶える、モビリティライフパートナー',
      description: '自動車購入前の相談から、整備工場でのメンテナンス、車検、保険、資産としての運用、ご売却時のお乗換までオールインワンでサービスを提供。お客さまのさまざまなこだわりを実現する高いメンテナンス技術を提供し、豊かなモビリティライフを支えていきます。',
      items: [
        {
          name: 'Valuence AUTOMOTIVE', url: 'https://www.yonemotors.jp/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_18.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-valuence-automotive_01.svg',
          desc: '輸入車をメインとした高級車のリユース事業として、購入前の相談から、メンテナンス、車検、保険、売却時のお乗り換えまでオールインワンで提供。'
        }
      ]
    },
    {
      id: 'technologies',
      jaTitle: 'テクノロジー事業', enTitle: 'Technologies', count: 2,
      slug: 'technologies', path: '/business/technologies',
      headline: '培ってきた提案力とテクノロジーで、企業の課題を解決する',
      description: '私たちはこれまで、オークションシステムやリユース品の買取・査定・販売を支える管理システム、実物資産管理アプリなどのシステム・アプリの企画・開発を、自社で手がけてきました。この経験で培われた AI 技術や情報システム技術を皆さまの役に立てたい。そんな想いから 2019年11月に誕生したのが「バリュエンステクノロジーズ」です。企画から開発、現場への実装までを一気通貫して担うことで、皆さまのAIやDXの活用・推進をサポートします。',
      items: [
        {
          name: 'helpmeee! 情シス!!', url: 'https://www.helpmeee.jp/josys',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_09.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-helpmeee_01.svg',
          desc: 'サーバー死活監視やルーターセキュリティー管理など、情報システムに関する業務をクラウド上でワンストップで行える環境を提供。'
        },
        {
          name: 'helpmeee! KEIKO', url: 'https://www.helpmeee.jp/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_10.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-keiko_01.svg',
          desc: 'AIチャットボット社員KEIKOは、バックオフィスのDXに貢献する、社内問い合わせやヘルプデスク対応の効率化ソリューションです。'
        }
      ]
    },
    {
      id: 'sports',
      jaTitle: 'スポーツ事業', enTitle: 'Sports', count: 2,
      slug: 'sports', path: '/business/sports',
      headline: '新しい価値を届け、可能性を広げる。',
      description: '私たちは、スポーツ事業を通じて、挑戦する意欲を持つさまざまな人が自らの可能性を発揮し、「大切なことにフォーカスして生きる」ことの重要性を実感できる環境を提供しています。人々の生き方を豊かにする取り組みを行い、より豊かな未来の創造に貢献していきます。',
      items: [
        {
          name: 'HATTRICK', url: 'https://auction.hattrick.world/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_11.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-hattrick_01.svg',
          desc: '日本トップクラスのスポーツチーム公認オークションの運営を中心に、アスリートやチームと伴走しながら、ファンづくり、収益の可能性を高める取り組みを展開。'
        },
        {
          name: 'Valuence INFINITIES', url: 'https://valuence-infinities.com/',
          img:  'https://www.valuence.inc/wp-content/themes/valuence/assets/images/img_12.jpg',
          logo: 'https://www.valuence.inc/wp-content/themes/valuence/assets/images/logo-infinities_01.svg',
          desc: '日本発のプロダンスリーグ「D.LEAGUE」に所属するプロダンスチーム。BREAKIN\'、HIPHOP、HOUSEの精鋭メンバーを招集し、新たな可能性に挑戦しています。'
        }
      ]
    }
  ]

  /** slug から1事業だけ取り出すユーティリティ */
  const findCategory = (slug) => categories.find((c) => c.slug === slug)

  return { categories, findCategory }
}
