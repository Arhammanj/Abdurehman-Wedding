type FloralCornerProps = {
  className?: string
  mirrored?: boolean
}

function Blossom({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) {
  const angles = [0, 72, 144, 216, 288]
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {angles.map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="-7.5"
          rx="4.4"
          ry="7.6"
          fill="#dcaaa2"
          fillOpacity="0.72"
          stroke="#b97f77"
          strokeOpacity="0.45"
          strokeWidth="0.7"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="3" fill="#c2a05a" fillOpacity="0.9" />
      <circle r="1.2" fill="#fffdf6" />
    </g>
  )
}

export function FloralCorner({ className = '', mirrored = false }: FloralCornerProps) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 190 190"
      fill="none"
      className={`${className} ${mirrored ? '-scale-x-100' : ''}`}
    >
      <g stroke="#3f6b58" strokeWidth="1.1" strokeLinecap="round" opacity="0.6">
        <path d="M6 188C36 156 48 124 64 80" />
        <path d="M6 188c36-4 66-24 94-58" />
        <path d="M24 164c-6-24 2-44 20-58" />
        <path d="M48 154c16-4 28-16 34-30" />
      </g>

      <g fill="#3f6b58" opacity="0.26">
        <ellipse cx="40" cy="148" rx="11" ry="3.8" transform="rotate(-42 40 148)" />
        <ellipse cx="58" cy="126" rx="10" ry="3.5" transform="rotate(-55 58 126)" />
        <ellipse cx="30" cy="132" rx="9" ry="3.2" transform="rotate(24 30 132)" />
        <ellipse cx="70" cy="104" rx="11" ry="3.8" transform="rotate(-62 70 104)" />
        <ellipse cx="46" cy="116" rx="8" ry="3" transform="rotate(8 46 116)" />
        <ellipse cx="84" cy="140" rx="10" ry="3.4" transform="rotate(-24 84 140)" />
        <ellipse cx="112" cy="122" rx="9" ry="3.2" transform="rotate(28 112 122)" />
        <ellipse cx="66" cy="164" rx="10" ry="3.4" transform="rotate(18 66 164)" />
      </g>

      <g stroke="#c2a05a" strokeWidth="0.8" strokeLinecap="round" opacity="0.55" fill="none">
        <path d="M10 176c18-2 30-10 40-22" />
        <path d="M94 128c8-10 18-16 30-18" />
        <path d="M100 132c6 2 12 2 18 0" />
      </g>

      <Blossom x={94} y={106} scale={1.15} />
      <Blossom x={42} y={140} scale={0.72} />
      <Blossom x={124} y={136} scale={0.56} />

      <g fill="#96763a" opacity="0.5">
        <circle cx="132" cy="116" r="1.3" />
        <circle cx="140" cy="124" r="0.9" />
        <circle cx="22" cy="118" r="1.1" />
        <circle cx="30" cy="110" r="0.8" />
      </g>
    </svg>
  )
}
