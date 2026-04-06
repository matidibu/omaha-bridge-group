import { FMPFundamentals } from '@/types/data'
import { FinkAnalysis } from '@/types/sage'

export function computeFinkAnalysis(f: FMPFundamentals): FinkAnalysis {
  // 1. Shareholder yield = dividend + implied buyback from FCF surplus
  const impliedBuybackYield = Math.max(0, f.freeCashFlowYield - f.dividendYield)
  const totalShareholderYield = f.dividendYield + impliedBuybackYield

  // 2. Capital returns score (0-100)
  // Fink values sustainable dividends and disciplined FCF allocation
  let capitalReturnsScore = 0
  if (f.dividendYield > 0) capitalReturnsScore += 25
  if (f.payoutRatio > 0.1 && f.payoutRatio < 0.7) capitalReturnsScore += 25
  if (f.freeCashFlowYield > 0.03) capitalReturnsScore += 25
  if (totalShareholderYield > 0.02) capitalReturnsScore += 25

  // 3. Governance score (0-100)
  // Earnings consistency and operational discipline
  const positiveEarnings = f.incomeStatements.filter((s) => s.netIncome > 0).length
  const totalYears = Math.max(f.incomeStatements.length, 1)
  const earningsConsistency = positiveEarnings / totalYears
  let governanceScore = 0
  governanceScore += Math.round(earningsConsistency * 40)
  governanceScore += f.roe > 0.12 ? 30 : Math.round(Math.max(0, f.roe / 0.12) * 30)
  governanceScore += f.operatingMargin > 0.15 ? 30 : Math.round(Math.max(0, f.operatingMargin / 0.15) * 30)

  // 4. Long-term score (0-100)
  // Fink favors large, liquid, growing companies with durable returns
  let longTermScore = 0
  if (f.marketCap > 100e9) longTermScore += 30
  else if (f.marketCap > 10e9) longTermScore += 20
  else if (f.marketCap > 1e9) longTermScore += 10
  longTermScore += f.revenueGrowth5y > 0.1 ? 30 : Math.round(Math.max(0, f.revenueGrowth5y / 0.1) * 30)
  longTermScore += f.roic > 0.12 ? 40 : Math.round(Math.max(0, f.roic / 0.12) * 40)

  // ESG proxy: financial stability as proxy for long-term institutional quality
  const avgScore = (capitalReturnsScore + governanceScore + longTermScore) / 3
  let esgProxy: FinkAnalysis['esgProxy']
  if (avgScore >= 75) esgProxy = 'excellent'
  else if (avgScore >= 55) esgProxy = 'good'
  else if (avgScore >= 35) esgProxy = 'moderate'
  else esgProxy = 'poor'

  // Institutional grade
  let institutionalGrade: FinkAnalysis['institutionalGrade']
  if (avgScore >= 80) institutionalGrade = 'A+'
  else if (avgScore >= 65) institutionalGrade = 'A'
  else if (avgScore >= 50) institutionalGrade = 'B'
  else if (avgScore >= 35) institutionalGrade = 'C'
  else institutionalGrade = 'D'

  return {
    sage: 'fink',
    institutionalGrade,
    capitalReturnsScore,
    governanceScore,
    longTermScore,
    totalShareholderYield,
    esgProxy,
    quote: '', // filled by Claude call
  }
}
