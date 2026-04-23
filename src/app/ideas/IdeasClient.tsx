'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { ScreenerStock } from '@/lib/pipeline/screener'

const MOAT_COLORS: Record<string, string> = {
  wide:   'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  narrow: 'text-[#C9A84C]  border-[#B8922A]/30   bg-[#B8922A]/10',
  none:   'text-[#6A7A95]  border-[#6A7A95]/30   bg-[#6A7A95]/10',
}

const FRAGILITY_COLORS: Record<string, string> = {
  antifragile: 'text-emerald-400',
  robust:      'text-[#C9A84C]',
  fragile:     'text-red-400',
}

const TECH_BADGE: Record<string, { label: string; color: string }> = {
  bullish: { label: '▲ Bullish',  color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  neutral: { label: '◆ Neutral',  color: 'text-[#C9A84C]   bg-[#B8922A]/10   border-[#B8922A]/30' },
  bearish: { label: '▼ Bearish',  color: 'text-red-400     bg-red-500/10     border-red-500/30' },
}

export default function IdeasPage() {
  const [stocks, setStocks] = useState<ScreenerStock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [generatedAt, setGeneratedAt] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/screener')
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        setStocks(data.results)
        setGeneratedAt(data.generatedAt)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen flex flex-col text-[#E8EDF5]">
      {/* Header */}
      <header className="border-b border-[#B8922A]/12 px-4 py-3 flex items-center justify-between bg-[#072B18]/90 backdrop-blur sticky top-0 z-10">
        <Link href="/" className="text-xs text-[#6A7A95] hover:text-[#C9A84C] transition-colors tracking-wider uppercase">
          ← Back
        </Link>
        <Logo size="sm" tagline={false} onDark />
        <div className="w-16" />
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 space-y-8">

        {/* Hero */}
        <div className="text-center mb-2">
          <p className="text-[10px] text-[#B8922A]/60 uppercase tracking-[0.4em] mb-3">The Bridge Boys</p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#E8EDF5] mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Today&apos;s Hand
          </h1>
          <p className="text-[#8895AB] text-sm max-w-xl mx-auto leading-relaxed">
            Five names the Bridge Boys would sit down with right now. Every name on this table
            passed Warren Buffett&apos;s quality gate, scored across four investment philosophies,
            and has technicals that confirm the fundamental thesis.
          </p>
          {generatedAt && (
            <p className="text-[#4A5A72] text-[10px] mt-3 font-mono">
              Screened {new Date(generatedAt).toLocaleString()} · Refreshes every 4 hours
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-24">
            <div className="text-4xl card-suit text-[#C9A84C]/40 animate-pulse mb-4">♠♥♦♣</div>
            <p className="text-[#8895AB] text-sm" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              The Bridge Boys are studying the market…
            </p>
            <p className="text-[#4A5A72] text-xs mt-2">Screening {30} candidates across fundamentals and technicals</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-center">
            <p className="text-red-400 text-sm">{error}</p>
            <Link href="/" className="mt-3 inline-block text-[#C9A84C] text-sm hover:underline">← Back to home</Link>
          </div>
        )}

        {/* No results */}
        {!loading && !error && stocks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#6A7A95]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              The Bridge Boys folded today. No names passed all criteria.
            </p>
            <p className="text-[#4A5A72] text-xs mt-2">Markets shift — try again later.</p>
          </div>
        )}

        {/* Results */}
        {!loading && stocks.length > 0 && (
          <div className="space-y-4">
            {stocks.map((stock, i) => (
              <StockCard key={stock.ticker} stock={stock} rank={i + 1} />
            ))}
          </div>
        )}

        {/* How it works */}
        {!loading && stocks.length > 0 && (
          <div className="rounded-xl border border-[#B8922A]/12 bg-[#0D1830] p-5 mt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="card-suit text-[#C9A84C]/50 text-sm">♠♥♦♣</span>
              <span className="text-[10px] text-[#6A7A95] uppercase tracking-[0.3em]">How the hand is dealt</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6A7A95]">
              <div><span translate="no" className="text-amber-400">♠ Buffett</span> — Quality gate: <span translate="no">ROE, ROIC, FCF</span>, margins, debt. Must pass to appear.</div>
              <div><span translate="no" className="text-[#C9A84C]">♦ Greenblatt</span> — <span translate="no">Magic Formula</span> ranked across all candidates simultaneously.</div>
              <div><span translate="no" className="text-emerald-400">♥ Lynch</span> — <span translate="no">GARP</span> score: growth at a price worth paying.</div>
              <div><span translate="no" className="text-red-400">♣ Taleb</span> — <span translate="no">Antifragility</span> check: no hidden <span translate="no">leverage</span> or <span translate="no">tail risk</span>.</div>
              <div className="sm:col-span-2"><span translate="no" className="text-[#C9A84C]">Technical</span> — Overall signal must be <span translate="no">bullish</span> or <span translate="no">neutral</span>. <span translate="no">Bearish</span> technicals are excluded regardless of fundamentals.</div>
            </div>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <footer className="border-t border-[#B8922A]/12 px-6 py-4">
        <p className="disclaimer-text text-center max-w-3xl mx-auto">
          <strong className="text-[#E8EDF5]/40">DISCLAIMER:</strong> Today&apos;s Hand is a quantitative screening tool for informational purposes only.
          It does not constitute financial advice, investment recommendations, or an offer to buy or sell any security.
          All output is generated algorithmically from public financial data. Past performance is not indicative of future results.
          Always consult a qualified financial advisor before making investment decisions.
        </p>
      </footer>
    </div>
  )
}

function StockCard({ stock, rank }: { stock: ScreenerStock; rank: number }) {
  const tech = TECH_BADGE[stock.technicalSignal]
  const moat = MOAT_COLORS[stock.moatRating] ?? MOAT_COLORS.none

  return (
    <div className="bg-[#0D1830] border border-[#B8922A]/18 rounded-xl p-5 hover:border-[#C9A84C]/30 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">

        {/* Rank + Score */}
        <div className="flex sm:flex-col items-center gap-3 sm:gap-1 shrink-0">
          <div className="text-[#C9A84C]/40 text-xs font-mono">#{rank}</div>
          <div
            className="w-14 h-14 rounded-full border-2 border-[#C9A84C]/30 flex flex-col items-center justify-center"
            style={{ boxShadow: '0 0 20px rgba(201,168,76,0.08)' }}
          >
            <div className="text-lg font-bold text-[#C9A84C] leading-none"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              {stock.compositeScore}
            </div>
            <div className="text-[8px] text-[#6A7A95] uppercase tracking-wider">score</div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#C9A84C] text-xl">{stock.ticker}</span>
                <span translate="no" className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${moat}`}>
                  {stock.moatRating} moat
                </span>
              </div>
              <div className="text-[#8895AB] text-sm mt-0.5">{stock.name}</div>
              <div className="text-[#4A5A72] text-[10px] uppercase tracking-wider mt-0.5">{stock.sector} · {stock.lynchCategory}</div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span translate="no" className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tech.color}`}>
                {tech.label}
              </span>
              <span translate="no" className={`text-[10px] font-semibold capitalize ${FRAGILITY_COLORS[stock.fragilityLevel]}`}>
                {stock.fragilityLevel}
              </span>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            <Metric label="ROE" value={`${(stock.roe * 100).toFixed(1)}%`} good={stock.roe >= 0.20} />
            <Metric label="ROIC" value={`${(stock.roic * 100).toFixed(1)}%`} good={stock.roic >= 0.15} />
            <Metric label="Gross Margin" value={stock.grossMargin !== 0 ? `${(stock.grossMargin * 100).toFixed(1)}%` : 'N/A'} good={stock.grossMargin >= 0.40} />
            <Metric label="D/E" value={stock.debtToEquity.toFixed(2)} good={stock.debtToEquity < 1.0} />
            <Metric label="PEG" value={stock.peg > 0 ? stock.peg.toFixed(2) : '—'} good={stock.peg > 0 && stock.peg < 1.5} />
            <Metric label="Magic #" value={`${stock.magicFormulaScore}`} good={stock.magicFormulaScore >= 60} />
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <span className="text-[#8895AB] font-mono text-sm">
              ${stock.currentPrice.toFixed(2)}
            </span>
            <Link
              href={`/analysis/${stock.ticker}`}
              className="text-xs font-semibold text-[#080E1C] bg-[#B8922A] hover:bg-[#C9A84C] px-4 py-1.5 rounded-lg transition-all"
            >
              Full Analysis →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value, good }: { label: string; value: string; good: boolean }) {
  return (
    <div>
      <div className="text-[9px] text-[#4A5A72] uppercase tracking-wider mb-0.5" translate="no">{label}</div>
      <div className={`text-sm font-semibold font-mono ${good ? 'text-[#E8EDF5]' : 'text-[#6A7A95]'}`} translate="no">
        {value}
      </div>
    </div>
  )
}
