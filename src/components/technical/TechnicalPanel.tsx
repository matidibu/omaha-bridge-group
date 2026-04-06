'use client'

import { TechnicalSignals, IndicatorSignal } from '@/types/indicators'
import { cn } from '@/lib/utils'

interface TechnicalPanelProps {
  technical: TechnicalSignals
}

const SIGNAL_COLORS: Record<IndicatorSignal, { dot: string; text: string; bg: string; border: string }> = {
  bullish: { dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-600/25' },
  neutral: { dot: 'bg-[#C9A84C]',   text: 'text-[#C9A84C]',   bg: 'bg-[#B8922A]/10',  border: 'border-[#B8922A]/25' },
  bearish: { dot: 'bg-red-400',     text: 'text-red-400',     bg: 'bg-red-500/10',    border: 'border-red-600/25' },
}

function SignalBadge({ signal, label }: { signal: IndicatorSignal; label: string }) {
  const c = SIGNAL_COLORS[signal]
  return (
    <div className={cn('flex items-center gap-2 rounded-lg px-3 py-2 border', c.bg, c.border)}>
      <div className={cn('w-2 h-2 rounded-full shrink-0', c.dot)} />
      <div>
        <div className="text-[10px] text-[#4A5A72] uppercase tracking-wider" translate="no">{label}</div>
        <div className={cn('text-xs font-semibold uppercase', c.text)} translate="no">{signal}</div>
      </div>
    </div>
  )
}

function MetricRow({ label, value, signal }: { label: string; value: string; signal?: IndicatorSignal }) {
  const dotColor = signal ? SIGNAL_COLORS[signal].dot : 'bg-[#2A3A54]'
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-[#B8922A]/8 last:border-0">
      <div className="flex items-center gap-2">
        <div className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColor)} />
        <span className="text-xs text-[#6A7A95]" translate="no">{label}</span>
      </div>
      <span className="text-xs font-mono text-[#B4C0D4]" translate="no">{value}</span>
    </div>
  )
}

export function TechnicalPanel({ technical }: TechnicalPanelProps) {
  const { indicators: i, trend, momentum, volume, volatility, overall } = technical

  const rsiSignal: IndicatorSignal = i.rsi14 >= 70 ? 'bearish' : i.rsi14 <= 35 ? 'bullish' : 'neutral'
  const adxSignal: IndicatorSignal = i.adxTrend === 'strong' ? 'bullish' : 'neutral'
  const koncordeSignal: IndicatorSignal =
    i.koncorde.latestSignal === 'accumulation' ? 'bullish' :
    i.koncorde.latestSignal === 'distribution' ? 'bearish' : 'neutral'

  const overallColors = SIGNAL_COLORS[overall]

  return (
    <div className="rounded-xl border border-[#B8922A]/15 bg-[#080E1C] p-5 space-y-5">
      {/* Overall signal badge */}
      <div className="flex justify-end">
        <div className={cn(
          'flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-1 rounded-full border',
          overallColors.bg,
          overallColors.border,
          overallColors.text,
        )}>
          <div className={cn('w-1.5 h-1.5 rounded-full', overallColors.dot)} />
          {overall}
        </div>
      </div>

      {/* Signal grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <SignalBadge signal={trend}      label="Trend" />
        <SignalBadge signal={momentum}   label="Momentum" />
        <SignalBadge signal={volume}     label="Volume" />
        <SignalBadge signal={volatility} label="Volatility" />
      </div>

      {/* Cross signals */}
      {(i.goldenCross || i.deathCross) && (
        <div translate="no" className={cn(
          'rounded-lg px-3 py-2 text-xs font-semibold border',
          i.goldenCross
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-600/25'
            : 'bg-red-500/10 text-red-400 border-red-600/25',
        )}>
          {i.goldenCross
            ? '🟡 Golden Cross — SMA50 crossed above SMA200'
            : '💀 Death Cross — SMA50 crossed below SMA200'}
        </div>
      )}

      {/* Metrics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        <div>
          <div className="text-[9px] text-[#2A3A54] mb-2 uppercase tracking-[0.3em]" translate="no">Momentum</div>
          <MetricRow label="RSI (14)"  value={i.rsi14.toFixed(1)}                                     signal={rsiSignal} />
          <MetricRow label="ADX (14)"  value={`${i.adx14.toFixed(1)} (${i.adxTrend})`}                signal={adxSignal} />
          <MetricRow label="ATR (14)"  value={`$${i.atr14.toFixed(2)} · ${i.atrPercent.toFixed(1)}%`} />
        </div>
        <div>
          <div className="text-[9px] text-[#2A3A54] mb-2 uppercase tracking-[0.3em]" translate="no">Trend</div>
          <MetricRow label="EMA 21"  value={`$${i.ema21.toFixed(2)}`}                                                               signal={i.currentPrice > i.ema21 ? 'bullish' : 'bearish'} />
          <MetricRow label="SMA 50"  value={`$${i.sma50.toFixed(2)} (${i.priceVsSma50 > 0 ? '+' : ''}${i.priceVsSma50.toFixed(1)}%)`}    signal={i.priceVsSma50 > 0 ? 'bullish' : 'bearish'} />
          <MetricRow label="SMA 200" value={`$${i.sma200.toFixed(2)} (${i.priceVsSma200 > 0 ? '+' : ''}${i.priceVsSma200.toFixed(1)}%)`}  signal={i.priceVsSma200 > 0 ? 'bullish' : 'bearish'} />
        </div>
        <div className="mt-4">
          <div className="text-[9px] text-[#2A3A54] mb-2 uppercase tracking-[0.3em]" translate="no">Volatility</div>
          <MetricRow label="BB Upper" value={`$${i.bollingerUpper.toFixed(2)}`} />
          <MetricRow label="BB Lower" value={`$${i.bollingerLower.toFixed(2)}`} />
          <MetricRow label="BB %B"    value={`${(i.bollingerPercentB * 100).toFixed(0)}%`} signal={i.bollingerPercentB > 0.8 ? 'bearish' : i.bollingerPercentB < 0.2 ? 'bullish' : 'neutral'} />
        </div>
        <div className="mt-4">
          <div className="text-[9px] text-[#2A3A54] mb-2 uppercase tracking-[0.3em]" translate="no">Volume / Flow</div>
          <MetricRow label="OBV trend"    value={i.obvTrend}                  signal={i.obvTrend === 'rising' ? 'bullish' : i.obvTrend === 'falling' ? 'bearish' : 'neutral'} />
          <MetricRow label="Koncorde"     value={i.koncorde.latestSignal}     signal={koncordeSignal} />
          <MetricRow label="Strong Hands" value={i.koncorde.strongHandsTrend} signal={i.koncorde.strongHandsTrend === 'rising' ? 'bullish' : i.koncorde.strongHandsTrend === 'falling' ? 'bearish' : 'neutral'} />
        </div>
      </div>
    </div>
  )
}
