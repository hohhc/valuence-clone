/**
 * Global Action 各国データ（公式 /company/#globalAction より）
 * 17 ヶ国（2025年8月末時点）
 */
export const useLocations = () => {
  const locations = [
    { country: 'Japan',        top: '36%', left: '85.5%', allu: 5, nanboya: 131, others: 8 },
    { country: 'Korea',        top: '34%', left: '83%',   allu: 2, nanboya: 0 },
    { country: 'Shanghai',     top: '40%', left: '81%',   nanboya: 0 },
    { country: 'Hong Kong',    top: '46%', left: '80%',   allu: 4, nanboya: 0 },
    { country: 'Thailand',     top: '52%', left: '76%',   allu: 2, nanboya: 0 },
    { country: 'Philippines',  top: '54%', left: '83%',   allu: 5, nanboya: 0 },
    { country: 'Singapore',    top: '62%', left: '76.5%', allu: 4, nanboya: 0 },
    { country: 'Indonesia',    top: '66%', left: '78%',   allu: 20, nanboya: 0 },
    { country: 'UAE',          top: '50%', left: '63%',   allu: 2, nanboya: 0 },
    { country: 'Qatar',        top: '49%', left: '61.5%', allu: 3, nanboya: 0 },
    { country: 'Saudi Arabia', top: '52%', left: '60.5%', allu: 1, nanboya: 0 },
    { country: 'Turkey',       top: '38%', left: '58%',   allu: 2, nanboya: 0 },
    { country: 'France',       top: '33%', left: '50%',   allu: 2, nanboya: 0 },
    { country: 'England',      top: '28%', left: '48%',   nanboya: 0 },
    { country: 'Nigeria',      top: '60%', left: '50%',   allu: 1, nanboya: 0 },
    { country: 'Mauritius',    top: '74%', left: '62%',   allu: 1, nanboya: 0 },
    { country: 'US',           top: '40%', left: '20%',   nanboya: 0 }
  ]

  return { locations }
}
