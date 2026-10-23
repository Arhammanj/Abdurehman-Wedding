type JaliPatternProps = {
  className?: string
}

export function JaliPattern({ className = '' }: JaliPatternProps) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="jali-star" width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.75">
            <path d="M32 5l6.4 20.6L59 32l-20.6 6.4L32 59l-6.4-20.6L5 32l20.6-6.4z" />
            <circle cx="32" cy="32" r="6.5" />
            <path d="M0 0l10 10M64 0L54 10M0 64l10-10M64 64L54 54" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jali-star)" />
    </svg>
  )
}
