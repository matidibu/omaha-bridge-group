import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tagline?: boolean
  onDark?: boolean
}

export function Logo({ className, size = 'md', tagline = true }: LogoProps) {
  if (size === 'lg') {
    return (
      <div className={cn('flex flex-col items-center select-none', className)}>
        <div className="relative w-44 h-44 rounded-full overflow-hidden ring-2 ring-[#C9A84C]/35 shadow-[0_0_50px_rgba(201,168,76,0.18)] mb-4">
          <Image
            src="/obg-logo-new.png"
            alt="Omaha Bridge Group"
            fill
            className="object-cover object-center scale-[1.18]"
            priority
          />
        </div>
        <div className="text-[#C9A84C] font-bold uppercase tracking-[0.35em] text-base"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Omaha Bridge Group
        </div>
        {tagline && (
          <div className="text-[#C9A84C]/50 text-[10px] tracking-[0.42em] uppercase mt-0.5">
            Playing the market&apos;s hand
          </div>
        )}
      </div>
    )
  }

  const imgSize = size === 'sm' ? 80 : 100

  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      <div
        className="relative rounded-full overflow-hidden ring-1 ring-[#C9A84C]/40 shadow-[0_0_12px_rgba(201,168,76,0.15)] shrink-0"
        style={{ width: imgSize, height: imgSize }}
      >
        <Image
          src="/obg-logo-new.png"
          alt="OBG"
          fill
          className="object-cover object-center scale-[1.2]"
        />
      </div>
      <div>
        <div
          className="font-bold uppercase text-[#C9A84C] leading-none"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: size === 'sm' ? '0.9rem' : '1.05rem',
            letterSpacing: '0.28em',
          }}
        >
          Omaha Bridge Group
        </div>
        {tagline && (
          <div className="text-[#C9A84C]/50 uppercase mt-0.5"
            style={{ fontSize: '0.6rem', letterSpacing: '0.35em' }}>
            Playing the market&apos;s hand
          </div>
        )}
      </div>
    </div>
  )
}
