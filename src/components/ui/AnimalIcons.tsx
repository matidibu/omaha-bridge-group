export function BullIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bull"
    >
      {/* Left horn — diagonal up-left */}
      <line x1="40" y1="55" x2="20" y2="10" />
      {/* Right horn — diagonal up-right */}
      <line x1="60" y1="55" x2="80" y2="10" />
    </svg>
  )
}

export function BearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bear"
    >
      {/* Claw marks — 4 lines radiating down */}
      <line x1="35" y1="25" x2="25" y2="75" />
      <line x1="50" y1="20" x2="50" y2="80" />
      <line x1="65" y1="25" x2="75" y2="75" />
      <line x1="50" y1="70" x2="50" y2="90" />
    </svg>
  )
}
