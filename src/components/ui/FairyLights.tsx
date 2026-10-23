const BULBS = Array.from({ length: 15 }, (_, index) => {
  const x = 3.5 + (index * 93) / 14
  const y = 4 + 1.92 * x * (1 - x / 100)
  return { x, y, index }
})

export function FairyLights({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 h-[170px] overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path d="M0 4 Q50 100 100 4" stroke="#c2a05a" strokeOpacity="0.28" strokeWidth="0.32" />
        <path
          d="M0 15 Q50 118 100 15"
          stroke="#c2a05a"
          strokeOpacity="0.14"
          strokeWidth="0.26"
          strokeDasharray="0.8 1.4"
        />
      </svg>

      {BULBS.map(({ x, y, index }) => (
        <span
          key={index}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <span className="absolute left-1/2 top-[-3px] h-[3px] w-[1px] -translate-x-1/2 bg-gold/50" />
          <span
            className="ambient-anim block h-[5px] w-[5px] rounded-full bg-[#ffe6b6] shadow-[0_0_10px_3px_rgba(227,173,98,0.5)] motion-safe:animate-[twinkle_4s_ease-in-out_infinite]"
            style={{
              animationDelay: `${(index % 5) * 0.55}s`,
              animationDuration: `${3.6 + (index % 4) * 0.6}s`,
            }}
          />
        </span>
      ))}
    </div>
  )
}
