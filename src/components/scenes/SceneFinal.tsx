import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { ArchCrest } from '../ui/ArchCrest'
import { FloralCorner } from '../ui/FloralCorner'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'

export function SceneFinal() {
  const reduce = useReducedMotion()

  return (
    <SceneFrame withCard withPetals>
      <div className="relative mx-auto w-full max-w-[700px] px-2">
        <div className="absolute -left-1 -top-1 h-[150px] w-[150px] opacity-90 sm:-left-3 sm:-top-3 sm:h-[190px] sm:w-[190px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -right-1 -top-1 h-[150px] w-[150px] scale-x-[-1] opacity-90 sm:-right-3 sm:-top-3 sm:h-[190px] sm:w-[190px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -bottom-2 -left-2 h-[130px] w-[130px] scale-y-[-1] opacity-85 sm:-bottom-3 sm:-left-3 sm:h-[170px] sm:w-[170px]">
          <FloralCorner className="h-full w-full" />
        </div>
        <div className="absolute -bottom-2 -right-2 h-[130px] w-[130px] scale-x-[-1] scale-y-[-1] opacity-85 sm:-bottom-3 sm:-right-3 sm:h-[170px] sm:w-[170px]">
          <FloralCorner className="h-full w-full" />
        </div>

        <div className="card-surface arch-card relative mx-auto overflow-hidden px-6 py-10 shadow-[0_70px_140px_-90px_rgba(58,47,35,0.9)] ring-1 ring-[#b9a077]/40 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(255,253,246,0.95)_0%,transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/40" />
          <div className="pointer-events-none absolute inset-x-5 inset-y-4 rounded-[inherit] ring-1 ring-[#c9b08b]/26" />
          <div className="pointer-events-none absolute left-1/2 top-[-32%] h-[38%] w-[76%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(227,173,98,0.18)_0%,transparent_74%)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div className="-mt-6 mb-4 w-[min(82vw,440px)] text-gold/80">
              <ArchCrest className="w-full" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-[clamp(0.88rem,2.4vw,1rem)] uppercase tracking-[0.5em] text-ink-soft"
            >
              {invitation.hosts}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 0.9, delay: reduce ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-glow-soft text-[clamp(2.8rem,10vw,6.2rem)] leading-[0.96] text-gold-deep"
            >
              {invitation.groom} <span className="font-serif text-[clamp(1.6rem,5vw,3rem)] text-emerald-deep">&amp;</span> {invitation.bride}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 1.9, ease: 'easeOut' }}
              className="mt-6 flex flex-col items-center gap-3"
            >
              <p className="font-display text-[clamp(1.2rem,4vw,2rem)] tracking-[0.42em] text-ink uppercase">
                {invitation.date}
              </p>
              <p className="max-w-lg px-4 text-[clamp(0.9rem,2.8vw,1.05rem)] leading-relaxed tracking-[0.18em] text-ink-soft uppercase">
                {invitation.venueName} • {invitation.venueAddress}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 2.7, ease: 'easeOut' }}
              className="mt-8 w-full max-w-sm"
            >
              <Ornament className="mx-auto w-full text-gold" strokeWidth={0.8} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 3.4, ease: 'easeOut' }}
              className="mt-5 max-w-sm px-4 text-[clamp(0.95rem,2.6vw,1.08rem)] leading-relaxed text-ink-soft"
            >
              {invitation.closing}
            </motion.p>
          </div>
        </div>
      </div>
    </SceneFrame>
  )
}
