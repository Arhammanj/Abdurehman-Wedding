export function Bokeh({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <span
        className="ambient-anim absolute -top-28 left-[8%] h-72 w-72 rounded-full bg-gradient-radial from-[#f3e4c7]/55 to-transparent blur-3xl motion-safe:animate-[bokeh-drift_12s_ease-in-out_infinite]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(243,228,199,0.5) 0%, transparent 70%)' }}
      />
      <span
        className="ambient-anim absolute top-[14%] right-[6%] h-80 w-80 rounded-full blur-3xl motion-safe:animate-[bokeh-drift_14s_ease-in-out_infinite]"
        style={{
          animationDelay: '1.8s',
          backgroundImage: 'radial-gradient(circle, rgba(227,173,98,0.34) 0%, transparent 72%)',
        }}
      />
      <span
        className="ambient-anim absolute bottom-[-24%] left-1/2 h-96 w-[34rem] -translate-x-1/2 rounded-full blur-3xl motion-safe:animate-[bokeh-drift_16s_ease-in-out_infinite]"
        style={{
          animationDelay: '3s',
          backgroundImage: 'radial-gradient(circle, rgba(249,243,228,0.7) 0%, transparent 76%)',
        }}
      />
    </div>
  )
}
