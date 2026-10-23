export function FloatingPetals({ count = 14 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, index) => index)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((index) => {
        const left = (index * 13 + 7) % 100
        const delay = (index * 0.32) % 5.6
        const duration = 9 + (index % 5) * 1.6
        const scale = 0.6 + (index % 4) * 0.16
        return (
          <span
            key={index}
            className="ambient-anim absolute top-[-12%] h-[10px] w-[14px] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-[#f4d9d4]/80 to-[#d9a9a2]/70 blur-[0.2px] opacity-0 motion-safe:animate-[petal-fall_linear_infinite]"
            style={{
              left: `${left}%`,
              transform: `rotate(${index * 18}deg) scale(${scale})`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              filter: 'drop-shadow(0 2px 6px rgba(185, 127, 119, 0.18))',
            }}
          />
        )
      })}
    </div>
  )
}
