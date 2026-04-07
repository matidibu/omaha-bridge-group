// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinance = require('yahoo-finance2').default
const yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

import { CEDEARData } from '@/types/data'
import { fetchWithRetry } from '@/lib/retry'

/**
 * CEDEAR ratio table: how many CEDEAR units = 1 underlying NYSE/NASDAQ share.
 * Ratios verified from Rankia/BYMA official table — April 2026.
 * Update when splits, reverse splits, or BYMA adjustments occur.
 * Source: https://www.rankia.com.ar/blog/cedear/6752496-listado-ratio-conversion-cedear-argentina
 */
export const CEDEAR_MAP: Record<string, { cedearTicker: string; ratio: number }> = {
  AAPL:  { cedearTicker: 'AAPL.BA',  ratio: 20  },
  MSFT:  { cedearTicker: 'MSFT.BA',  ratio: 30  },
  GOOGL: { cedearTicker: 'GOOGL.BA', ratio: 58  },
  AMZN:  { cedearTicker: 'AMZN.BA',  ratio: 144 },
  META:  { cedearTicker: 'META.BA',  ratio: 24  },
  TSLA:  { cedearTicker: 'TSLA.BA',  ratio: 15  },
  NVDA:  { cedearTicker: 'NVDA.BA',  ratio: 24  },
  JPM:   { cedearTicker: 'JPM.BA',   ratio: 15  },
  V:     { cedearTicker: 'V.BA',     ratio: 18  },
  KO:    { cedearTicker: 'KO.BA',    ratio: 5   },
  MA:    { cedearTicker: 'MA.BA',    ratio: 33  },
  ADBE:  { cedearTicker: 'ADBE.BA',  ratio: 44  },
  SPGI:  { cedearTicker: 'SPGI.BA',  ratio: 45  },
  UNH:   { cedearTicker: 'UNH.BA',   ratio: 33  },
  BABA:  { cedearTicker: 'BABA.BA',  ratio: 9   },
  MELI:  { cedearTicker: 'MELI.BA',  ratio: 120 },
  NKE:   { cedearTicker: 'NKE.BA',   ratio: 12  },
  SBUX:  { cedearTicker: 'SBUX.BA',  ratio: 12  },
  DIS:   { cedearTicker: 'DIS.BA',   ratio: 12  },
  NFLX:  { cedearTicker: 'NFLX.BA',  ratio: 48  },
  AMD:   { cedearTicker: 'AMD.BA',   ratio: 10  },
  WMT:   { cedearTicker: 'WMT.BA',   ratio: 18  },
  // Screener candidates
  ORCL:  { cedearTicker: 'ORCL.BA',  ratio: 3   },
  INTU:  { cedearTicker: 'INTU.BA',  ratio: 22  },
  AXP:   { cedearTicker: 'AXP.BA',   ratio: 15  },
  MCO:   { cedearTicker: 'MCO.BA',   ratio: 22  },
  PEP:   { cedearTicker: 'PEP.BA',   ratio: 12  },
  PG:    { cedearTicker: 'PG.BA',    ratio: 12  },
  CL:    { cedearTicker: 'CL.BA',    ratio: 3   },
  COST:  { cedearTicker: 'COST.BA',  ratio: 48  },
  MCD:   { cedearTicker: 'MCD.BA',   ratio: 22  },
  TMO:   { cedearTicker: 'TMO.BA',   ratio: 22  },
  ISRG:  { cedearTicker: 'ISRG.BA',  ratio: 30  },
  ABT:   { cedearTicker: 'ABT.BA',   ratio: 10  },
  HON:   { cedearTicker: 'HON.BA',   ratio: 12  },
  ITW:   { cedearTicker: 'ITW.BA',   ratio: 18  },
  // Other popular
  BAC:   { cedearTicker: 'BAC.BA',   ratio: 4   },
  GS:    { cedearTicker: 'GS.BA',    ratio: 13  },
  JNJ:   { cedearTicker: 'JNJ.BA',   ratio: 15  },
  PFE:   { cedearTicker: 'PFE.BA',   ratio: 4   },
  LLY:   { cedearTicker: 'LLY.BA',   ratio: 56  },
  XOM:   { cedearTicker: 'XOM.BA',   ratio: 10  },
  INTC:  { cedearTicker: 'INTC.BA',  ratio: 5   },
  CSCO:  { cedearTicker: 'CSCO.BA',  ratio: 5   },
  IBM:   { cedearTicker: 'IBM.BA',   ratio: 15  },
  HD:    { cedearTicker: 'HD.BA',    ratio: 32  },
  CAT:   { cedearTicker: 'CAT.BA',   ratio: 20  },
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
      fetchWithRetry<any>(() => yf.quote(cedearInfo.cedearTicker), 1), // 1 attempt — CEDEAR is optional data
    ])

    const cedearPrice: number = cedearQuote.regularMarketPrice ?? 0
    if (!cedearPrice) return null

    // If dolarapi failed (cclRate = 0), derive CCL from this CEDEAR itself
    const effectiveCCL = cclRate > 0
      ? cclRate
      : usdPrice > 0 ? (cedearPrice * cedearInfo.ratio) / usdPrice : 0

    if (!effectiveCCL) return null

    const impliedUSDPrice = (cedearPrice * cedearInfo.ratio) / effectiveCCL
    const premiumDiscount = cclRate > 0 && usdPrice > 0
      ? (impliedUSDPrice - usdPrice) / usdPrice
      : 0

    return {
      cclRate: effectiveCCL,
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
