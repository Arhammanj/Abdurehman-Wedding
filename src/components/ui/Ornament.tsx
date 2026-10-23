type OrnamentProps = {
  className?: string
  strokeWidth?: number
}

export function Ornament({ className = 'text-gold', strokeWidth = 1 }: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 -10 240 48"
      className={className}
      fill="none"
      role="presentation"
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M4 16h74" opacity="0.7" />
        <path d="M162 16h74" opacity="0.7" />
        <path d="M80 16c6 0 8-5 13-5s8 5 13 5" opacity="0.9" />
        <path d="M160 16c-6 0-8-5-13-5s-8 5-13 5" opacity="0.9" />
        <rect
          x="112"
          y="8"
          width="16"
          height="16"
          rx="2.5"
          transform="rotate(45 120 16)"
          opacity="0.85"
        />
        <path d="M120 3c-3.4-2.2-4.6-5.6-4.6-8.6 4 0 7.2 1.6 9.2 4.4" opacity="0.65" />
        <path d="M120 3c3.4-2.2 4.6-5.6 4.6-8.6-4 0-7.2 1.6-9.2 4.4" opacity="0.65" />
      </g>
      <circle cx="120" cy="16" r="2.1" fill="currentColor" />
      <circle cx="4" cy="16" r="1.7" fill="currentColor" opacity="0.7" />
      <circle cx="236" cy="16" r="1.7" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
