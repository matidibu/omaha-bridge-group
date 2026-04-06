'use client'

import { SageId } from '@/types/sage'
import { cn } from '@/lib/utils'

const SAGE_CONFIG: Record<SageId, {
  name: string
  title: string
  subtitle: string
  suit: string
  textColor: string
  borderColor: string
  bgColor: string
  bgSpeaking: string
  barColor: string
  ringColor: string
  cardBg: string
}> = {
  buffett: {
    name: 'Warren Buffett',
    title: 'El Anfitrión',
    subtitle: 'Quality & Moat',
    suit: '♥',
    textColor: 'text-[#C9A84C]',
    borderColor: 'border-[#C9A84C]/30',
    bgColor: 'bg-[#1C1408]',
    bgSpeaking: 'bg-[#261C08]',
    barColor: 'bg-[#C9A84C]',
    ringColor: 'ring-[#C9A84C]/25',
    cardBg: 'from-[#2A1E08] to-[#1C1408]',
  },
  lynch: {
    name: 'Peter Lynch',
    title: 'El Rastreador',
    subtitle: 'Growth at Reasonable Price',
    suit: '♣',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-700/30',
    bgColor: 'bg-[#091C12]',
    bgSpeaking: 'bg-[#0C2418]',
    barColor: 'bg-emerald-400',
    ringColor: 'ring-emerald-500/25',
    cardBg: 'from-[#0E2A1A] to-[#091C12]',
  },
  greenblatt: {
    name: 'Joel Greenblatt',
    title: 'El Matemático',
    subtitle: 'Magic Formula',
    suit: '♦',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-600/30',
    bgColor: 'bg-[#10141E]',
    bgSpeaking: 'bg-[#161C2A]',
    barColor: 'bg-slate-300',
    ringColor: 'ring-slate-400/25',
    cardBg: 'from-[#181E2C] to-[#10141E]',
  },
  taleb: {
    name: 'Nassim Taleb',
    title: 'El Centinela',
    subtitle: 'Black Swan / Antifragility',
    suit: '★',
    textColor: 'text-slate-200',
    borderColor: 'border-slate-700/40',
    bgColor: 'bg-[#0A0A0C]',
    bgSpeaking: 'bg-[#141418]',
    barColor: 'bg-slate-200',
    ringColor: 'ring-slate-300/20',
    cardBg: 'from-[#181820] to-[#0A0A0C]',
  },
  marks: {
    name: 'Howard Marks',
    title: 'El Estratega',
    subtitle: 'Market Cycles',
    suit: '♠',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-700/30',
    bgColor: 'bg-[#080E1E]',
    bgSpeaking: 'bg-[#0C1228]',
    barColor: 'bg-blue-400',
    ringColor: 'ring-blue-500/25',
    cardBg: 'from-[#0E162C] to-[#080E1E]',
  },
  fink: {
    name: 'Larry Fink',
    title: 'El Arquitecto',
    subtitle: 'Institutional Capital',
    suit: '✦',
    textColor: 'text-violet-400',
    borderColor: 'border-violet-700/30',
    bgColor: 'bg-[#0E081E]',
    bgSpeaking: 'bg-[#140C28]',
    barColor: 'bg-violet-400',
    ringColor: 'ring-violet-500/25',
    cardBg: 'from-[#160E2C] to-[#0E081E]',
  },
}

interface SageCardProps {
  sage: SageId
  quote: string
  score?: number
  badge?: string
  badgeVariant?: 'positive' | 'negative' | 'neutral' | 'warning'
  subtext?: string
  isLoading?: boolean
  isSpeaking?: boolean
}

export function SageCard({
  sage, quote, score, badge, badgeVariant = 'neutral', subtext, isLoading, isSpeaking,
}: SageCardProps) {
  const cfg = SAGE_CONFIG[sage]

  const badgeColors = {
    positive: 'bg-emerald-500/15 text-emerald-400 border border-emerald-600/30',
    negative: 'bg-red-900/30 text-red-400 border border-red-800/40',
    neutral:  'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/25',
    warning:  'bg-amber-500/15 text-amber-400 border border-amber-600/30',
  }

  return (
    <div className={cn(
      'relative rounded-xl border overflow-hidden transition-all duration-500',
      cfg.borderColor,
      isSpeaking ? cfg.bgSpeaking : cfg.bgColor,
      isSpeaking && cn('shadow-lg', cfg.ringColor, 'ring-1'),
    )}>
      {/* Card suit corner — playing card aesthetic */}
      <div className={cn('absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60', cfg.barColor)} />
      <span className={cn(
        'absolute -bottom-5 -right-2 text-9xl opacity-[0.06] card-suit pointer-events-none select-none',
        cfg.textColor,
      )}>
        {cfg.suit}
      </span>

      <div className="p-5">
        {/* Speaking bars */}
        {isSpeaking && (
          <div className="absolute top-4 right-4 flex gap-0.5 items-end h-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className={cn('w-0.5 rounded-full animate-pulse', cfg.barColor)}
                style={{ height: `${[60, 100, 70][i]}%`, animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          {/* Mini playing card */}
          <div
            className="shrink-0 w-8 h-11 rounded flex flex-col items-center justify-between py-1 shadow-lg"
            style={{ background: 'linear-gradient(145deg, #F8F4EA, #EDE7D0)' }}
          >
            <span className="text-[10px] font-bold leading-none" style={{ color: cfg.suit === '♥' ? '#C9A84C' : cfg.suit === '♣' ? '#166534' : cfg.suit === '♦' ? '#64748B' : cfg.suit === '★' ? '#1E293B' : cfg.suit === '✦' ? '#4C1D95' : '#1E3A5F', fontFamily: 'Georgia, serif' }}>
              {cfg.suit}
            </span>
            <span className="text-lg leading-none" style={{ color: cfg.suit === '♥' ? '#C9A84C' : cfg.suit === '♣' ? '#166534' : cfg.suit === '♦' ? '#64748B' : cfg.suit === '★' ? '#1E293B' : cfg.suit === '✦' ? '#4C1D95' : '#1E3A5F', fontFamily: 'Georgia, serif' }}>
              {cfg.suit}
            </span>
            <span className="text-[10px] font-bold leading-none rotate-180" style={{ color: cfg.suit === '♥' ? '#C9A84C' : cfg.suit === '♣' ? '#166534' : cfg.suit === '♦' ? '#64748B' : cfg.suit === '★' ? '#1E293B' : cfg.suit === '✦' ? '#4C1D95' : '#1E3A5F', fontFamily: 'Georgia, serif' }}>
              {cfg.suit}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className={cn('font-bold text-sm leading-none mb-0.5', cfg.textColor)}
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              translate="no">
              {cfg.name}
            </div>
            <div className={cn('text-[10px] font-semibold uppercase tracking-wider', cfg.textColor)} style={{ opacity: 0.7 }}>
              {cfg.title}
            </div>
            <div className="text-[9px] text-[#4A6A54] uppercase tracking-wider mt-0.5" translate="no">{cfg.subtitle}</div>
          </div>

          {score !== undefined && (
            <div className={cn('text-2xl font-bold tabular-nums shrink-0', cfg.textColor)}
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              {score}<span className="text-xs text-[#4A5A72] font-normal">/100</span>
            </div>
          )}
        </div>

        {/* Quote */}
        <div className="min-h-[56px]">
          {isLoading ? (
            <div className="space-y-2">
              <div className="h-2 bg-white/5 rounded animate-pulse w-full" />
              <div className="h-2 bg-white/5 rounded animate-pulse w-4/5" />
              <div className="h-2 bg-white/5 rounded animate-pulse w-3/5" />
            </div>
          ) : (
            <p className="text-[#B4C0D4] text-sm leading-relaxed italic">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>

        {/* Badge & subtext */}
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {badge && (
            <span className={cn('text-xs font-medium px-2.5 py-0.5 rounded-full capitalize', badgeColors[badgeVariant])}>
              {badge}
            </span>
          )}
          {subtext && <span className="text-xs text-[#4A5A72] font-mono">{subtext}</span>}
        </div>
      </div>
    </div>
  )
}
