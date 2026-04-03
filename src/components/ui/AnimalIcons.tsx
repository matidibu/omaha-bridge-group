// Elegant SVG animal icons — no emojis

export function BullIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 150"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bull"
    >
      {/* Tail */}
      <path d="M 22 80 C 8 66 5 48 16 38 L 20 47 C 13 53 15 66 22 74 Z" />
      {/* Rump */}
      <ellipse cx="44" cy="86" rx="24" ry="20" />
      {/* Main body */}
      <ellipse cx="98" cy="92" rx="60" ry="30" />
      {/* Shoulder hump */}
      <ellipse cx="60" cy="76" rx="28" ry="24" />
      {/* Neck */}
      <path d="M 138 74 C 148 60 154 48 157 40 L 167 42 C 168 52 164 66 155 76 Z" />
      {/* Head */}
      <ellipse cx="178" cy="46" rx="26" ry="19" />
      {/* Snout */}
      <ellipse cx="200" cy="55" rx="13" ry="10" />
      {/* Left horn */}
      <path d="M 164 32 L 150 10 L 159 13 L 170 32 Z" />
      {/* Right horn */}
      <path d="M 182 30 L 188 8 L 197 12 L 187 30 Z" />
      {/* Eye */}
      <circle cx="188" cy="42" r="3.5" fill="white" />
      <circle cx="189" cy="43" r="2" />
      {/* Nostril */}
      <ellipse cx="205" cy="58" rx="3" ry="2.5" opacity="0.45" />
      {/* Front legs */}
      <rect x="68" y="116" width="13" height="30" rx="5" />
      <rect x="88" y="118" width="13" height="28" rx="5" />
      {/* Back legs */}
      <rect x="112" y="118" width="13" height="28" rx="5" />
      <rect x="132" y="116" width="13" height="30" rx="5" />
      {/* Hooves */}
      <rect x="66" y="142" width="17" height="5" rx="2" opacity="0.7" />
      <rect x="86" y="142" width="17" height="5" rx="2" opacity="0.7" />
      <rect x="110" y="142" width="17" height="5" rx="2" opacity="0.7" />
      <rect x="130" y="142" width="17" height="5" rx="2" opacity="0.7" />
    </svg>
  )
}

export function BearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 155"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bear"
    >
      {/* Hindquarters */}
      <circle cx="52" cy="98" r="32" />
      {/* Body */}
      <ellipse cx="108" cy="102" rx="66" ry="40" />
      {/* Shoulder mass */}
      <circle cx="158" cy="90" r="28" />
      {/* Head */}
      <circle cx="194" cy="72" r="36" />
      {/* Left ear */}
      <circle cx="174" cy="42" r="15" />
      <circle cx="174" cy="42" r="9" opacity="0.5" />
      {/* Right ear */}
      <circle cx="210" cy="40" r="15" />
      <circle cx="210" cy="40" r="9" opacity="0.5" />
      {/* Muzzle */}
      <ellipse cx="216" cy="82" rx="17" ry="13" opacity="0.65" />
      {/* Nose */}
      <ellipse cx="218" cy="74" r="7" opacity="0.5" />
      {/* Eye */}
      <circle cx="181" cy="63" r="6" fill="white" />
      <circle cx="182" cy="64" r="3.5" />
      {/* Front paws */}
      <rect x="48" y="128" width="18" height="26" rx="7" />
      <rect x="78" y="132" width="18" height="22" rx="7" />
      {/* Back paws */}
      <rect x="116" y="132" width="18" height="22" rx="7" />
      <rect x="150" y="128" width="18" height="26" rx="7" />
      {/* Claws front-left */}
      <path d="M 49 154 L 52 158 M 55 154 L 58 158 M 61 154 L 64 158" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Claws front-right */}
      <path d="M 79 154 L 82 158 M 85 154 L 88 158 M 91 154 L 94 158" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  )
}
