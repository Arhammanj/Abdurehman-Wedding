import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { FloralCorner } from '../ui/FloralCorner'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'

export function SceneCouple() {
  const reduce = useReducedMotion()

  return (
    <SceneFrame withCard>
      <div className="relative mx-auto w-full max-w-[640px] px-2">
        <div className="absolute -left-1 -top-1 h-[140px] w-[140px] opacity-85 sm:-left-2 sm:-top-2 sm:h-[180px] sm:w-[180px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -right-1 -top-1 h-[140px] w-[140px] scale-x-[-1] opacity-85 sm:-right-2 sm:-top-2 sm:h-[180px] sm:w-[180px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -bottom-2 -left-2 h-[120px] w-[120px] scale-y-[-1] opacity-85 sm:-bottom-2 sm:-left-2 sm:h-[160px] sm:w-[160px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -bottom-2 -right-2 h-[120px] w-[120px] scale-x-[-1] scale-y-[-1] opacity-85 sm:-bottom-2 sm:-right-2 sm:h-[160px] sm:w-[160px]">
          <FloralCorner className="h-full w-full" />
        </div>

        <div className="card-surface arch-card relative mx-auto overflow-hidden px-6 py-10 shadow-[0_60px_120px_-80px_rgba(58,47,35,0.9)] ring-1 ring-[#b9a077]/40 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,253,246,0.9)_0%,transparent_74%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/40" />
          <div className="pointer-events-none absolute inset-x-6 inset-y-5 rounded-[inherit] ring-1 ring-[#c9b08b]/24" />
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[36%] w-[70%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(227,173,98,0.16)_0%,transparent_72%)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[clamp(0.9rem,2.6vw,1.05rem)] uppercase tracking-[0.52em] text-ink-soft"
            >
              The Nikah Ceremony of
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 1, delay: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-glow-soft text-[clamp(3rem,12vw,7rem)] leading-[0.95] text-gold-deep"
            >
              {invitation.groom}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 2, ease: [0.22, 1, 0.36, 1] }}
              className="my-6 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b9a077]/80 sm:w-16" />
              <span className="font-script text-[clamp(1.8rem,6vw,3.2rem)] text-emerald-deep">with</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#b9a077]/80 sm:w-16" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: reduce ?  0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 1, delay: reduce ? 0 : 2.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-glow-soft text-[clamp(3rem,12vw,7rem)] leading-[0.95] text-gold-deep"
            >
              {invitation.bride}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 3.6, ease: 'easeOut' }}
              className="mt-8 w-full max-w-xs"
            >
              <Ornament className="mx-auto w-full text-gold" strokeWidth={0.8} />
            </motion.div>
          </div>
        </div>
      </div>
    </SceneFrame>
  )
}
