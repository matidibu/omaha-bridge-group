// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinance = require('yahoo-finance2').default
const yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

import { CEDEARData } from '@/types/data'
import { fetchWithRetry } from '@/lib/retry'

/**
 * CEDEAR ratio table: how many CEDEAR units = 1 underlying NYSE/NASDAQ share.
 * Ratios set by CVSA/BYMA. Verify at https://www.byma.com.ar if updating.
 */
const CEDEAR_MAP: Record<string, { cedearTicker: string; ratio: number }> = {
  AAPL:  { cedearTicker: 'AAPL.BA',  ratio: 10 },
  MSFT:  { cedearTicker: 'MSFT.BA',  ratio: 10 },
  GOOGL: { cedearTicker: 'GOOGL.BA', ratio: 10 },
  AMZN:  { cedearTicker: 'AMZN.BA',  ratio: 10 },
  META:  { cedearTicker: 'META.BA',  ratio: 20 },
  TSLA:  { cedearTicker: 'TSLA.BA',  ratio: 10 },
  NVDA:  { cedearTicker: 'NVDA.BA',  ratio: 10 },
  JPM:   { cedearTicker: 'JPM.BA',   ratio: 10 },
  V:     { cedearTicker: 'V.BA',     ratio: 15 },
  KO:    { cedearTicker: 'KO.BA',    ratio: 3  },
  MA:    { cedearTicker: 'MA.BA',    ratio: 20 },
  ADBE:  { cedearTicker: 'ADBE.BA',  ratio: 10 },
  SPGI:  { cedearTicker: 'SPGI.BA',  ratio: 10 },
  UNH:   { cedearTicker: 'UNH.BA',   ratio: 10 },
}

// CCL rate cache — 1 hour TTL
let _cclCache: { rate: number; expiresAt: number } | null = null

async function fetchCCLRate(): Promise<number> {
  if (_cclCache && Date.now() < _cclCache.expiresAt) return _cclCache.rate

  try {
    const res = await fetch('https://dolarapi.com/v1/dolares/contadoconliqui', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`dolarapi ${res.status}`)
    const data = await res.json()
    const rate = (data.compra + data.venta) / 2
    _cclCache = { rate, expiresAt: Date.now() + 60 * 60 * 1000 }
    return rate
  } catch {
    // Fallback: calculate CCL from AAPL.BA if API is down
    return 0
  }
}

/**
 * Fetches CEDEAR data for a given US ticker.
 * Returns null if no CEDEAR exists for that ticker.
 *
 * Formula:
 *   impliedUSDPrice = (cedearPrice × ratio) / cclRate
 *   premiumDiscount = (impliedUSD - actualUSD) / actualUSD
 */
export async function fetchCEDEARData(
  usdTicker: string,
  usdPrice: number,
): Promise<CEDEARData | null> {
  const cedearInfo = CEDEAR_MAP[usdTicker.toUpperCase()]
  if (!cedearInfo) return null

  try {
    const [cclRate, cedearQuote] = await Promise.all([
      fetchCCLRate(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fetchWithRetry<any>(() => yf.quote(cedearInfo.cedearTicker)),
    ])

    const cedearPrice: number = cedearQuote.regularMarketPrice ?? 0
    if (!cedearPrice || !cclRate) return null

    const impliedUSDPrice = (cedearPrice * cedearInfo.ratio) / cclRate
    const premiumDiscount = usdPrice > 0 ? (impliedUSDPrice - usdPrice) / usdPrice : 0

    return {
      cclRate,
      cedearTicker: cedearInfo.cedearTicker,
      cedearPrice,
      impliedUSDPrice,
      ratio: cedearInfo.ratio,
      premiumDiscount,
    }
  } catch {
    return null
  }
}
