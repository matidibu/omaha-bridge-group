// Minimal animal icons — reads clearly at small sizes

export function BullIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 68"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bull"
    >
      {/* Left horn — sweeps up and outward */}
      <path d="M 38 60 C 30 42 14 22 4 4" strokeWidth="11" />
      {/* Right horn — mirror */}
      <path d="M 62 60 C 70 42 86 22 96 4" strokeWidth="11" />
      {/* Head arc — simple curve at the base */}
      <path d="M 16 53 Q 50 68 84 53" strokeWidth="9" />
    </svg>
  )
}

export function BearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 76"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bear"
    >
      {/* 3 claw scratch marks — spread outward from top, curving down */}
      <path d="M 22 6 C 14 26 14 50 20 70" strokeWidth="10" />
      <path d="M 50 4 C 46 24 46 50 50 70" strokeWidth="10" />
      <path d="M 78 6 C 86 26 86 50 80 70" strokeWidth="10" />
    </svg>
  )
}
