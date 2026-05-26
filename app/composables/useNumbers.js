/**
 * Valuence in Numbers（公式 /company/#vin より）
 * Business 3 + People 3
 */
export const useNumbers = () => {
  const businessStats = [
    { value: 848,  unit: '億円', title: '売上高',         note: '2025年8月期実績' },
    { value: 188,  unit: '店舗', title: '店舗数',         note: '2025年8月末時点' },
    { value: 14,   unit: 'カ国', title: '海外展開国数',   note: '2025年8月末時点' }
  ]

  const peopleStats = [
    { value: 1124, unit: '名', title: '従業員数',         note: '2025年8月末時点' },
    { value: 31.5, unit: '歳', title: '平均年齢',         note: '2025年8月末時点' },
    { value: 47.8, unit: '%',  title: '従業員女性比率',   note: '2025年8月末時点' }
  ]

  return { businessStats, peopleStats }
}
