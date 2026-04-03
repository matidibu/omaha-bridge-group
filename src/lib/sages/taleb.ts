import { FMPFundamentals } from '@/types/data'
import { TalebWarnings, TalebWarning } from '@/types/sage'

export function computeTalebWarnings(f: FMPFundamentals): TalebWarnings {
  const warnings: TalebWarning[] = []

  // 1. Debt fragility
  if (f.debtToEbitda > 5) {
    warnings.push({ category: 'debt', severity: 'severe', description: `Debt/EBITDA ${f.debtToEbitda.toFixed(1)}x — highly leveraged, vulnerable to rate rises` })
  } else if (f.debtToEbitda > 3) {
    warnings.push({ category: 'debt', severity: 'moderate', description: `Debt/EBITDA ${f.debtToEbitda.toFixed(1)}x — elevated leverage` })
  }

  // 2. Interest coverage
  if (f.interestCoverageRatio < 3) {
    warnings.push({ category: 'leverage', severity: 'severe', description: `Interest coverage ${f.interestCoverageRatio.toFixed(1)}x — profits barely cover debt service` })
  } else if (f.interestCoverageRatio < 5) {
    warnings.push({ category: 'leverage', severity: 'minor', description: `Interest coverage ${f.interestCoverageRatio.toFixed(1)}x — adequate but watch rate risk` })
  }

  // 3. Dilution: check if shares grew significantly (proxy for dilution risk)
  // We use payout ratio as a proxy — very high payout + high debt = fragile
  if (f.payoutRatio > 0.9 && f.debtToEquity > 0.5) {
    warnings.push({ category: 'dilution', severity: 'moderate', description: `Payout ratio ${(f.payoutRatio * 100).toFixed(0)}% with leveraged balance sheet — dividend sustainability risk` })
  }

  // 4. Negative FCF years
  const negativeFCFYears = f.cashFlowStatements.filter((s) => s.freeCashFlow < 0).length
  if (negativeFCFYears >= 4) {
    warnings.push({ category: 'liquidity', severity: 'severe', description: `${negativeFCFYears} years of negative FCF — cash burn pattern` })
  }

  // 5. Current ratio (liquidity)
  if (f.currentRatio < 1.0) {
    warnings.push({ category: 'liquidity', severity: 'moderate', description: `Current ratio ${f.currentRatio.toFixed(2)} — current liabilities exceed current assets` })
  }

  // Fragility level
  const severities = warnings.map((w) => w.severity)
  let fragilityLevel: TalebWarnings['fragilityLevel']
  if (severities.filter((s) => s === 'severe').length >= 2) fragilityLevel = 'fragile'
  else if (warnings.length >= 3) fragilityLevel = 'fragile'
  else if (warnings.length === 0) fragilityLevel = 'antifragile'
  else fragilityLevel = 'robust'

  // Black swan risk
  let blackSwanRisk: TalebWarnings['blackSwanRisk']
  if (fragilityLevel === 'fragile') blackSwanRisk = 'high'
  else if (warnings.length >= 2) blackSwanRisk = 'medium'
  else if (warnings.length === 1) blackSwanRisk = 'low'
  else blackSwanRisk = 'low'

  return {
    sage: 'taleb',
    fragilityLevel,
    warnings,
    quote: '',
    blackSwanRisk,
  }
}
