// Premium heraldic animal icons — front-facing, reads clearly at any size

export function BullIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 86"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bull"
    >
      {/* Left horn — sweeps up and outward */}
      <path d="M 28 28 C 18 20 10 8 14 1 C 17 9 22 16 30 22 Z" />
      {/* Right horn */}
      <path d="M 72 28 C 82 20 90 8 86 1 C 83 9 78 16 70 22 Z" />
      {/* Head */}
      <ellipse cx="50" cy="42" rx="33" ry="27" />
      {/* Shoulder mass */}
      <path d="M 17 64 C 12 72 11 80 14 86 L 86 86 C 89 80 88 72 83 64 Q 67 72 50 72 Q 33 72 17 64 Z" />
      {/* Snout overlay */}
      <ellipse cx="50" cy="55" rx="19" ry="13" opacity="0.30" />
      {/* Left eye */}
      <circle cx="33" cy="36" r="6.5" fill="white" />
      <circle cx="34" cy="37" r="3.8" />
      <circle cx="33.5" cy="35.5" r="1.2" fill="white" />
      {/* Right eye */}
      <circle cx="67" cy="36" r="6.5" fill="white" />
      <circle cx="68" cy="37" r="3.8" />
      <circle cx="67.5" cy="35.5" r="1.2" fill="white" />
      {/* Nostrils */}
      <ellipse cx="41" cy="56" rx="4.5" ry="3.5" opacity="0.50" />
      <ellipse cx="59" cy="56" rx="4.5" ry="3.5" opacity="0.50" />
      {/* Nose ring */}
      <path d="M 42 64 Q 50 70 58 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.28" />
    </svg>
  )
}

export function BearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 92"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bear"
    >
      {/* Left ear */}
      <circle cx="21" cy="20" r="15" />
      <circle cx="21" cy="20" r="9" opacity="0.42" />
      {/* Right ear */}
      <circle cx="79" cy="20" r="15" />
      <circle cx="79" cy="20" r="9" opacity="0.42" />
      {/* Head */}
      <circle cx="50" cy="46" r="35" />
      {/* Body / neck mass */}
      <path d="M 16 74 C 10 82 9 88 12 92 L 88 92 C 91 88 90 82 84 74 Q 68 83 50 83 Q 32 83 16 74 Z" />
      {/* Muzzle */}
      <ellipse cx="50" cy="58" rx="19" ry="15" opacity="0.32" />
      {/* Nose */}
      <ellipse cx="50" cy="48" rx="10" ry="7.5" opacity="0.52" />
      {/* Left eye */}
      <circle cx="31" cy="37" r="6.5" fill="white" />
      <circle cx="32" cy="38" r="3.8" />
      <circle cx="31.5" cy="36.5" r="1.2" fill="white" />
      {/* Right eye */}
      <circle cx="69" cy="37" r="6.5" fill="white" />
      <circle cx="70" cy="38" r="3.8" />
      <circle cx="69.5" cy="36.5" r="1.2" fill="white" />
      {/* Mouth */}
      <path d="M 42 64 Q 50 71 58 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.32" />
      {/* Claws left */}
      <path d="M 13 90 L 9 100 M 20 92 L 17 102 M 28 92 L 26 102"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45" />
      {/* Claws right */}
      <path d="M 87 90 L 91 100 M 80 92 L 83 102 M 72 92 L 74 102"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45" />
    </svg>
  )
}
