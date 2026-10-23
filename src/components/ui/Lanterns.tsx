export function Lanterns({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 h-full ${className}`}>
      <div
        className="ambient-anim absolute -top-4 left-[14%] hidden md:block motion-safe:animate-[lantern-bob_8s_ease-in-out_infinite]"
        style={{ animationDelay: '0.4s' }}
      >
        <svg width="34" height="78" viewBox="0 0 34 78" fill="none">
          <path d="M17 0v6" stroke="#96763a" strokeOpacity="0.7" />
          <path d="M17 6c-4 0-7 3-7 7v4h14v-4c0-4-3-7-7-7z" fill="#f3d9a6" opacity="0.9" />
          <path d="M9 17h16v16a8 8 0 0 1-16 0z" fill="#f5d9a6" opacity="0.95" />
          <path d="M12 33h10v2a5 5 0 0 1-10 0z" fill="#c2a05a" opacity="0.8" />
          <ellipse cx="17" cy="25" rx="5" ry="6" fill="url(#lantern-glow)" />
          <defs>
            <radialGradient id="lantern-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17 24) rotate(90) scale(6 5)">
              <stop stopColor="#fff3d0" />
              <stop offset="1" stopColor="#f0c77a" stopOpacity="0.25" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div
        className="ambient-anim absolute -top-3 right-[16%] hidden md:block motion-safe:animate-[lantern-bob_9s_ease-in-out_infinite]"
        style={{ animationDelay: '2.4s' }}
      >
        <svg width="30" height="72" viewBox="0 0 30 72" fill="none">
          <path d="M15 0v5" stroke="#96763a" strokeOpacity="0.7" />
          <path d="M15 5c-3.6 0-6.4 2.8-6.4 6.4v3.6h12.8v-3.6c0-3.6-2.8-6.4-6.4-6.4z" fill="#f3d9a6" opacity="0.9" />
          <path d="M7.6 15h14.8v14.8a7.4 7.4 0 0 1-14.8 0z" fill="#f5d9a6" opacity="0.95" />
          <path d="M10.4 29.8h9.2v1.8a4.6 4.6 0 0 1-9.2 0z" fill="#c2a05a" opacity="0.8" />
          <ellipse cx="15" cy="22.4" rx="4.6" ry="5.4" fill="url(#lantern-glow-sm)" />
          <defs>
            <radialGradient id="lantern-glow-sm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 21.6) rotate(90) scale(5.4 4.6)">
              <stop stopColor="#fff3d0" />
              <stop offset="1" stopColor="#f0c77a" stopOpacity="0.22" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
