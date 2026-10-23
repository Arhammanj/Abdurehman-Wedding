type ArchCrestProps = {
  className?: string
}

export function ArchCrest({ className = '' }: ArchCrestProps) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 320 130"
      fill="none"
      className={className}
    >
      <g stroke="currentColor" strokeLinecap="round">
        <path d="M18 126C22 72 72 32 160 32s138 40 142 94" strokeWidth="1" opacity="0.4" />
        <path d="M54 126c4-36 46-64 106-64s102 28 106 64" strokeWidth="0.9" opacity="0.7" />
        <path d="M90 126c4-22 32-40 70-40s66 18 70 40" strokeWidth="0.7" opacity="0.38" />
        <path d="M160 32V17" strokeWidth="0.9" opacity="0.65" />
        <path d="M160 46l5.5 5.5-5.5 5.5-5.5-5.5z" strokeWidth="0.8" opacity="0.55" />
        <path d="M126 34c-8-4-12-10-12-18 7 0 12 3 16 8" strokeWidth="0.8" opacity="0.45" />
        <path d="M194 34c8-4 12-10 12-18-7 0-12 3-16 8" strokeWidth="0.8" opacity="0.45" />
        <path d="M46 126c6-4 10-9 12-15" strokeWidth="0.7" opacity="0.35" />
        <path d="M274 126c-6-4-10-9-12-15" strokeWidth="0.7" opacity="0.35" />
      </g>
      <circle cx="160" cy="14" r="2.6" fill="currentColor" opacity="0.75" />
      <circle cx="50" cy="126" r="1.6" fill="currentColor" opacity="0.5" />
      <circle cx="270" cy="126" r="1.6" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
