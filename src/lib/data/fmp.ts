// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinance = require('yahoo-finance2').default

import { FMPFundamentals, IncomeStatement, BalanceSheet, CashFlowStatement } from '@/types/data'
import { fetchWithRetry } from '@/lib/retry'

// yahoo-finance2 v3 requires instantiation — static calls throw
const yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

// In-memory cache: fundamentals are stable intraday, 1-hour TTL
const _fundamentalsCache = new Map<string, { data: FMPFundamentals; expiresAt: number }>()
const FUNDAMENTALS_TTL = 60 * 60 * 1000

export async function fetchFundamentals(ticker: string): Promise<FMPFundamentals> {
  const cached = _fundamentalsCache.get(ticker)
  if (cached && Date.now() < cached.expiresAt) return cached.data

  const data = await _fetchFromYahoo(ticker)
  _fundamentalsCache.set(ticker, { data, expiresAt: Date.now() + FUNDAMENTALS_TTL })
  return data
}

async function _fetchFromYahoo(ticker: string): Promise<FMPFundamentals> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [quote, summary, finSeries, balSeries, cfSeries]: any[] = await Promise.all([
    fetchWithRetry(() => yf.quote(ticker)),
    fetchWithRetry(() => yf.quoteSummary(ticker, { modules: ['assetProfile', 'defaultKeyStatistics', 'summaryDetail'] })),
    fetchWithRetry(() => yf.fundamentalsTimeSeries(ticker, { period1: '2015-01-01', module: 'financials', type: 'annual' })),
    fetchWithRetry(() => yf.fundamentalsTimeSeries(ticker, { period1: '2015-01-01', module: 'balance-sheet', type: 'annual' })),
    fetchWithRetry(() => yf.fundamentalsTimeSeries(ticker, { period1: '2015-01-01', module: 'cash-flow', type: 'annual' })),
  ])

  // fundamentalsTimeSeries returns oldest→newest; reverse for newest-first convention
  const fin: YFFinancials[] = [...finSeries].reverse()
  const bal: YFBalanceSheet[] = [...balSeries].reverse()
  const cf: YFCashFlow[] = [...cfSeries].reverse()

  const f0 = fin[0] ?? {} as YFFinancials
  const b0 = bal[0] ?? {} as YFBalanceSheet
  const c0 = cf[0] ?? {} as YFCashFlow

  const marketCap: number = quote.marketCap ?? 0
  const ebit: number = f0.EBIT ?? f0.operatingIncome ?? 0
  const ebitda: number = f0.EBITDA ?? 0
  const taxRate: number = f0.taxRateForCalcs ?? 0.21
  const interestExp: number = Math.abs(f0.interestExpenseNonOperating ?? 0)

  const totalDebt: number = b0.totalDebt ?? 0
  const cash: number = b0.cashAndCashEquivalents ?? 0
  const equity: number = b0.stockholdersEquity ?? 1
  const totalAssets: number = b0.totalAssets ?? 1
  const wc: number = Math.max(0, b0.workingCapital ?? 0)
  const netPPE: number = b0.netPPE ?? 0
  const investedCapital: number = b0.investedCapital ?? totalDebt + equity
  const currentAssets: number = b0.currentAssets ?? 0
  const currentLiabilities: number = b0.currentLiabilities ?? 1

  const netIncome: number = f0.netIncome ?? 0
  const revenue: number = f0.totalRevenue ?? 1
  const grossProfit: number = f0.grossProfit ?? 0
  const operatingIncome: number = f0.operatingIncome ?? 0

  const enterpriseValue: number =
    summary.defaultKeyStatistics?.enterpriseValue ?? (marketCap + totalDebt - cash)

  // Ratios
  const roe = equity !== 0 ? netIncome / equity : 0
  const roa = totalAssets !== 0 ? netIncome / totalAssets : 0
  const nopat = ebit * (1 - taxRate)
  const roic = investedCapital > 0 ? nopat / investedCapital : 0
  const returnOnCapital = (wc + netPPE) > 0 ? ebit / (wc + netPPE) : 0
  const earningsYield = enterpriseValue > 0 ? ebit / enterpriseValue : 0
  const grossMargin = revenue > 0 ? grossProfit / revenue : 0
  const operatingMargin = revenue > 0 ? operatingIncome / revenue : 0
  const netMargin = revenue > 0 ? netIncome / revenue : 0
  const debtToEquity = equity !== 0 ? totalDebt / equity : 0
  const debtToEbitda = ebitda > 0 ? totalDebt / ebitda : 0
  const currentRatio = currentLiabilities > 0 ? currentAssets / currentLiabilities : 0
  const interestCoverageRatio = interestExp > 0 ? ebit / interestExp : 99
  const freeCashFlow: number = c0.freeCashFlow ?? 0
  const freeCashFlowYield = marketCap > 0 ? freeCashFlow / marketCap : 0

  // CAGR over available years
  const n = fin.length
  const years = Math.max(n - 1, 1)
  const epsLatest = f0.dilutedEPS ?? f0.basicEPS ?? 0
  const epsOldest = fin[n - 1]?.dilutedEPS ?? fin[n - 1]?.basicEPS ?? 0
  const revOldest = fin[n - 1]?.totalRevenue ?? 0

  const epsGrowth5y =
    epsLatest > 0 && epsOldest > 0 ? Math.pow(epsLatest / epsOldest, 1 / years) - 1 : 0
  const revenueGrowth5y =
    revenue > 0 && revOldest > 0 ? Math.pow(revenue / revOldest, 1 / years) - 1 : 0

  const pe: number = quote.trailingPE ?? summary.summaryDetail?.trailingPE ?? 0
  const peg = pe > 0 && epsGrowth5y > 0 ? pe / (epsGrowth5y * 100) : 0

  // Statement arrays (newest first)
  const incomeStatements: IncomeStatement[] = fin.map((s) => ({
    year: new Date(s.date).getFullYear(),
    revenue: s.totalRevenue ?? 0,
    grossProfit: s.grossProfit ?? 0,
    operatingIncome: s.operatingIncome ?? 0,
    netIncome: s.netIncome ?? 0,
    eps: s.dilutedEPS ?? s.basicEPS ?? 0,
    ebitda: s.EBITDA ?? 0,
  }))

  const balanceSheets: BalanceSheet[] = bal.map((s) => ({
    year: new Date(s.date).getFullYear(),
    totalAssets: s.totalAssets ?? 0,
    totalDebt: s.totalDebt ?? 0,
    cash: s.cashAndCashEquivalents ?? 0,
    shareholdersEquity: s.stockholdersEquity ?? 0,
    workingCapital: s.workingCapital ?? 0,
  }))

  const cashFlowStatements: CashFlowStatement[] = cf.map((s) => ({
    year: new Date(s.date).getFullYear(),
    operatingCashFlow: s.operatingCashFlow ?? 0,
    capitalExpenditures: s.capitalExpenditure ?? 0,
    freeCashFlow: s.freeCashFlow ?? 0,
  }))

  return {
    ticker,
    name: quote.longName ?? quote.shortName ?? ticker,
    sector: summary.assetProfile?.sector ?? '',
    industry: summary.assetProfile?.industry ?? '',
    marketCap,
    currentPrice: quote.regularMarketPrice ?? 0,
    pe,
    forwardPE: quote.forwardPE ?? 0,
    peg,
    pbv: quote.priceToBook ?? summary.defaultKeyStatistics?.priceToBook ?? 0,
    evEbitda: summary.defaultKeyStatistics?.enterpriseToEbitda ?? 0,
    roe,
    roa,
    roic,
    returnOnCapital,
    earningsYield,
    grossMargin,
    operatingMargin,
    netMargin,
    revenueGrowth5y,
    epsGrowth5y,
    freeCashFlowYield,
    debtToEquity,
    debtToEbitda,
    currentRatio,
    interestCoverageRatio,
    dividendYield: quote.dividendYield ?? summary.summaryDetail?.dividendYield ?? 0,
    payoutRatio: summary.summaryDetail?.payoutRatio ?? 0,
    enterpriseValue,
    incomeStatements,
    balanceSheets,
    cashFlowStatements,
  }
}

// --- Yahoo Finance response shapes (internal only) ---
interface YFFinancials {
  date: string | Date
  totalRevenue?: number
  grossProfit?: number
  operatingIncome?: number
  netIncome?: number
  basicEPS?: number
  dilutedEPS?: number
  EBITDA?: number
  EBIT?: number
  taxRateForCalcs?: number
  interestExpenseNonOperating?: number
}

interface YFBalanceSheet {
  date: string | Date
  totalAssets?: number
  totalDebt?: number
  cashAndCashEquivalents?: number
  stockholdersEquity?: number
  workingCapital?: number
  investedCapital?: number
  currentAssets?: number
  currentLiabilities?: number
  netPPE?: number
}

interface YFCashFlow {
  date: string | Date
  operatingCashFlow?: number
  capitalExpenditure?: number
  freeCashFlow?: number
}
