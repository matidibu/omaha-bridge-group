'use client'

import { AnalysisVerdict, OverallRating } from '@/types/analysis'
import { cn } from '@/lib/utils'
import { BullIcon, BearIcon } from '@/components/ui/AnimalIcons'

const RATING_CONFIG: Record<OverallRating, {
  label: string
  color: string
  bg: string
  border: string
  glow: string
  direction: 'bull' | 'bear' | 'neutral'
}> = {
  'strong-buy': { label: 'STRONG BUY', color: 'text-emerald-400', bg: 'bg-[#071C10]', border: 'border-emerald-600/40', glow: 'shadow-lg shadow-emerald-950/60',  direction: 'bull' },
  'buy':        { label: 'BUY',        color: 'text-emerald-400', bg: 'bg-[#071A0E]', border: 'border-emerald-700/30', glow: 'shadow-md shadow-emerald-950/40',  direction: 'bull' },
  'watch':      { label: 'WATCH',      color: 'text-amber-400',   bg: 'bg-[#18140A]', border: 'border-amber-600/40',   glow: 'shadow-md shadow-amber-950/40',   direction: 'neutral' },
  'hold':       { label: 'HOLD',       color: 'text-[#C9A84C]',   bg: 'bg-[#0D1830]', border: 'border-[#B8922A]/30',   glow: 'shadow-sm',                       direction: 'neutral' },
  'avoid':      { label: 'AVOID',      color: 'text-orange-400',  bg: 'bg-[#1A100A]', border: 'border-orange-700/40',  glow: 'shadow-md shadow-orange-950/40',  direction: 'bear' },
  'sell':       { label: 'SELL',       color: 'text-red-400',     bg: 'bg-[#1A0808]', border: 'border-red-700/40',     glow: 'shadow-lg shadow-red-950/60',     direction: 'bear' },
}

interface FinalVerdictProps {
  verdict: AnalysisVerdict
  currentPrice: number
}

export function FinalVerdict({ verdict, currentPrice }: FinalVerdictProps) {
  const rating = RATING_CONFIG[verdict.overallRating]

  return (
    <div className="space-y-5">
      {/* Chairman hero card */}
      <div className={cn('rounded-2xl border p-7 relative overflow-hidden', rating.border, rating.bg, rating.glow)}>
        <span className="absolute -bottom-8 -right-4 text-[12rem] opacity-[0.04] card-suit pointer-events-none select-none text-[#C9A84C]">
          {rating.direction === 'bull' ? '♠' : rating.direction === 'bear' ? '♦' : '♣'}
        </span>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div>
            <div className="text-[10px] text-[#4A5A72] uppercase tracking-[0.3em] mb-2">Chairman&apos;s Verdict</div>
            <div className="flex items-center gap-4 mb-1">
              <BullBearBadge direction={rating.direction} />
              <span
                translate="no"
                className={cn('text-4xl sm:text-5xl font-black tracking-tight', rating.color)}
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {rating.label}
              </span>
            </div>
          </div>
          <div className="sm:text-right shrink-0">
            <div className="text-[10px] text-[#4A5A72] uppercase tracking-wider mb-1">Confidence</div>
            <div
              className="text-3xl font-bold text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              {verdict.confidence}<span className="text-lg text-[#4A5A72]">%</span>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-[#B8922A]/35 pl-4 mb-4">
          <p className="text-[#B4C0D4] text-sm leading-relaxed italic">
            &ldquo;{verdict.narratives.chairman}&rdquo;
          </p>
        </div>

        <p className="text-[#6A7A95] text-xs">{verdict.sageConsensus}</p>
      </div>

      {/* Long & Short term panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VerdictPanel title="Long Term"        horizon={verdict.longTerm.horizon}  output={verdict.longTerm}  currentPrice={currentPrice} accent="emerald" />
        <VerdictPanel title="Short Term Entry" horizon={verdict.shortTerm.horizon} output={verdict.shortTerm} currentPrice={currentPrice} accent="blue" />
      </div>

      {/* Final words from the table */}
      <div className="rounded-xl border border-[#C9A84C]/10 bg-[#072B18]/40 p-5">
        <div className="flex items-center gap-3 mb-4">
          <span className="card-suit text-[#C9A84C]/40 text-sm">♠♥♦♣</span>
          <div className="text-[10px] text-[#4A5A72] uppercase tracking-[0.3em]">Final Words from the Table</div>
        </div>
        <div className="space-y-3">
          {([
            { key: 'buffett',    name: 'Buffett',    color: 'text-[#C9A84C]',  suit: '♥' },
            { key: 'lynch',      name: 'Lynch',      color: 'text-emerald-400', suit: '♣' },
            { key: 'greenblatt', name: 'Greenblatt', color: 'text-slate-300',   suit: '♦' },
            { key: 'marks',      name: 'Marks',      color: 'text-blue-400',    suit: '♠' },
            { key: 'taleb',      name: 'Taleb',      color: 'text-slate-200',   suit: '★' },
            { key: 'fink',       name: 'Fink',       color: 'text-violet-400',  suit: '✦' },
          ] as const).map(({ key, name, color, suit }) => (
            <div key={key} className="flex gap-3 text-sm items-start">
              <span className={cn('card-suit text-base shrink-0 mt-0.5', color)}>{suit}</span>
              <span className={cn('font-semibold shrink-0 w-20 text-sm', color)} translate="no">{name}</span>
              <span className="text-[#6A7A95] italic text-xs leading-relaxed">
                &ldquo;{verdict.narratives[key]}&rdquo;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BullBearBadge({ direction }: { direction: 'bull' | 'bear' | 'neutral' }) {
  if (direction === 'bull') return (
    <div className="flex flex-col items-center gap-0.5">
      <BullIcon className="w-12 h-8 text-emerald-500" />
      <span className="text-[10px] font-bold text-emerald-500 tracking-widest">BULL</span>
    </div>
  )
  if (direction === 'bear') return (
    <div className="flex flex-col items-center gap-0.5">
      <BearIcon className="w-12 h-8 text-red-500" />
      <span className="text-[10px] font-bold text-red-500 tracking-widest">BEAR</span>
    </div>
  )
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-12 h-8 flex items-center justify-center">
        <div className="flex gap-1 items-center">
          <BullIcon className="w-5 h-4 text-emerald-600/60" />
          <span className="text-[#C9A84C]/40 text-xs">/</span>
          <BearIcon className="w-5 h-4 text-red-600/60" />
        </div>
      </div>
      <span className="text-[10px] font-bold text-[#C9A84C] tracking-widest">NEUTRAL</span>
    </div>
  )
}

function VerdictPanel({ title, horizon, output, currentPrice, accent }: {
  title: string
  horizon: string
  output: { action: string; priceTarget: number; stopLoss: number; targetUpside: number; riskReward: number; rationale: string }
  currentPrice: number
  accent: 'emerald' | 'blue'
}) {
  const colors = {
    emerald: { border: 'border-emerald-700/30', label: 'text-emerald-400', bg: 'bg-[#071C10]' },
    blue:    { border: 'border-sky-700/30',     label: 'text-sky-400',     bg: 'bg-[#07101C]' },
  }[accent]

  const actionColor =
    ['buy', 'accumulate'].includes(output.action) ? 'text-emerald-400' :
    ['reduce', 'avoid'].includes(output.action) ? 'text-red-400' :
    'text-[#C9A84C]'

  return (
    <div className={cn('rounded-xl border p-5', colors.border, colors.bg)}>
      <div className="flex items-center justify-between mb-3">
        <div className={cn('text-[10px] font-bold uppercase tracking-[0.25em]', colors.label)}>{title}</div>
        <div className="text-[10px] text-[#4A5A72] font-mono">{horizon}</div>
      </div>
      <div
        translate="no"
        className={cn('text-2xl font-black uppercase mb-4 tracking-wide', actionColor)}
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        {output.action}
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <div className="text-[10px] text-[#4A5A72] mb-1 uppercase tracking-wider" translate="no">Target</div>
          <div className="font-semibold text-[#E8EDF5] text-sm">${output.priceTarget.toFixed(2)}</div>
          <div className="text-xs text-emerald-400 font-mono">+{output.targetUpside.toFixed(1)}%</div>
        </div>
        <div>
          <div className="text-[10px] text-[#4A5A72] mb-1 uppercase tracking-wider" translate="no">Stop-Loss</div>
          <div className="font-semibold text-[#E8EDF5] text-sm">${output.stopLoss.toFixed(2)}</div>
          <div className="text-xs text-red-400 font-mono">
            -{((currentPrice - output.stopLoss) / currentPrice * 100).toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-[10px] text-[#4A5A72] mb-1 uppercase tracking-wider" translate="no">R/R</div>
          <div className="font-semibold text-[#C9A84C] text-sm">{output.riskReward.toFixed(1)}x</div>
        </div>
      </div>
      <p className="text-xs text-[#6A7A95] leading-relaxed">{output.rationale}</p>
    </div>
  )
}
