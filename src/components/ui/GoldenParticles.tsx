export function GoldenParticles({ count = 16 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, index) => index)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((index) => {
        const left = 6 + (index * 88) / count + ((index % 3) * 4)
        const delay = (index * 0.46) % 4.2
        const duration = 6.2 + (index % 4) * 1.2
        return (
          <span
            key={index}
            className="ambient-anim absolute bottom-[-12%] h-[3px] w-[3px] rounded-full bg-[#f0c77a] opacity-0 shadow-[0_0_10px_2px_rgba(227,173,98,0.45)] motion-safe:animate-[dust-rise_linear_infinite]"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        )
      })}
    </div>
  )
}
