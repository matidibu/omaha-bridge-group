export interface OHLCVCandle {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface IncomeStatement {
  year: number
  revenue: number
  grossProfit: number
  operatingIncome: number
  netIncome: number
  eps: number
  ebitda: number
}

export interface BalanceSheet {
  year: number
  totalAssets: number
  totalDebt: number
  cash: number
  shareholdersEquity: number
  workingCapital: number
}

export interface CashFlowStatement {
  year: number
  operatingCashFlow: number
  capitalExpenditures: number
  freeCashFlow: number
}

export interface FMPFundamentals {
  ticker: string
  name: string
  sector: string
  industry: string
  marketCap: number
  currentPrice: number
  pe: number
  forwardPE: number
  peg: number
  pbv: number
  evEbitda: number
  roe: number
  roa: number
  roic: number
  returnOnCapital: number       // Greenblatt ROC = EBIT / (NWC + Net Fixed Assets)
  earningsYield: number         // Greenblatt: EBIT / Enterprise Value
  grossMargin: number
  operatingMargin: number
  netMargin: number
  revenueGrowth5y: number
  epsGrowth5y: number
  freeCashFlowYield: number
  debtToEquity: number
  debtToEbitda: number
  currentRatio: number
  interestCoverageRatio: number
  dividendYield: number
  payoutRatio: number
  enterpriseValue: number
  incomeStatements: IncomeStatement[]
  balanceSheets: BalanceSheet[]
  cashFlowStatements: CashFlowStatement[]
}

export interface FREDMacro {
  cpi: number
  cpiYoY: number
  fedFundsRate: number
  unemploymentRate: number
  tenYearYield: number
  realGDPGrowth: number
  fetchedAt: string
}

export interface CEDEARData {
  cclRate: number
  cedearTicker: string
  cedearPrice: number
  impliedUSDPrice: number
  ratio: number
  premiumDiscount: number
}
