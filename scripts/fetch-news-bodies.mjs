// 本家ニュース記事の本文(postContent)を取得し、slug -> 本文HTML のJSONを生成する。
// 使い方: node scripts/fetch-news-bodies.mjs
import { writeFileSync } from 'node:fs'

const BASE = 'https://www.valuence.inc/news'

// 本家で実在が確認できている記事 (slug, パス)
const articles = [
  ['ht_may_2026',                                   '2026/05/29'],
  ['allu-surabaya-telkom-merr-landmark',            '2026/05/29'],
  ['allu-surabaya-tunjungan-plaza',                 '2026/05/29'],
  ['allu-boulogne-billancourt',                     '2026/05/26'],
  ['captain-tsubasa_la-galaxy',                     '2026/05/22'],
  ['nanboya-chuorinkan-tokyu',                      '2026/05/20'],
  ['valuence-infinities_26-27-season-new-member-auditions', '2026/05/18'],
  ['allu-cebucity',                                 '2026/05/18'],
  ['jleagueallstar_dazncup',                        '2026/05/18'],
  ['auction-pay-penguintrade',                      '2026/05/12'],
  ['nanboya-cm_sanmasan',                           '2026/05/01'],
  ['allu-milano',                                   '2026/04/16'],
  ['nagoya-sakaechika',                             '2026/04/15'],
  ['vivid-garden',                                  '2026/04/14']
]

const extractBody = (html) => {
  const start = html.indexOf('<div class="postContent">')
  if (start === -1) return null
  const end = html.indexOf('<!-- /.postContent -->', start)
  if (end === -1) return null
  let body = html.slice(start + '<div class="postContent">'.length, end)
  // 末尾の </div> を除去
  body = body.replace(/<\/div>\s*$/, '').trim()
  // 内部リンクを正規化（valuence.inc 絶対 → そのまま外部、PDF等もそのまま）
  return body
}

const result = {}
for (const [slug, datePath] of articles) {
  const url = `${BASE}/${datePath}/${slug}/`
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const html = await res.text()
    const body = extractBody(html)
    if (body) {
      result[slug] = body
      console.log(`OK   ${slug} (${body.length} bytes)`)
    } else {
      console.log(`SKIP ${slug} (postContent not found)`)
    }
  } catch (e) {
    console.log(`ERR  ${slug}: ${e.message}`)
  }
}

writeFileSync(new URL('../app/data/news-bodies.json', import.meta.url), JSON.stringify(result, null, 2))
console.log(`\nwrote ${Object.keys(result).length} bodies -> app/data/news-bodies.json`)
