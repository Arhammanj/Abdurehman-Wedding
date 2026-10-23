import { motion, useReducedMotion } from 'framer-motion'
import { RotateCcw, Share2 } from 'lucide-react'

type ControlsProps = {
  onReplay: () => void
  onShare: () => void
}

export function Controls({ onReplay, onShare }: ControlsProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.25 : 0.6, delay: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="no-print fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-[#b9a077]/70 bg-[#fbf6ea]/90 px-3 py-1.5 shadow-[0_40px_90px_-60px_rgba(58,47,35,0.95)] backdrop-blur-[2px]">
        <button
          type="button"
          onClick={onReplay}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.75rem] uppercase tracking-[0.38em] text-ink transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9843f]/70"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          <span>Replay</span>
        </button>
        <span className="h-5 w-px bg-[#b9a077]/50" aria-hidden="true" />
        <button
          type="button"
          onClick={onShare}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.75rem] uppercase tracking-[0.38em] text-ink transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9843f]/70"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          <span>Share</span>
        </button>
      </div>
    </motion.div>
  )
}
