import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { ArchCrest } from '../ui/ArchCrest'
import { FloralCorner } from '../ui/FloralCorner'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'

const LINES = [
  invitation.hosts,
  invitation.invitationIntro,
  invitation.ceremony,
]

export function SceneInvitation() {
  const reduce = useReducedMotion()

  return (
    <SceneFrame withCard>
      <div className="relative mx-auto w-full max-w-[640px] px-2">
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

        <div className="card-surface arch-card relative mx-auto overflow-hidden px-6 py-10 shadow-[0_60px_120px_-80px_rgba(58,47,35,0.9)] ring-1 ring-[#b9a077]/40 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(255,253,246,0.9)_0%,transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/40" />
          <div className="pointer-events-none absolute inset-x-5 inset-y-4 rounded-[inherit] ring-1 ring-[#c9b08b]/25" />
          <div className="pointer-events-none absolute -inset-x-6 top-[-46%] h-[46%] bg-[radial-gradient(circle,rgba(227,173,98,0.16)_0%,transparent_70%)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div className="-mt-6 mb-2 w-[min(82vw,420px)] text-gold/80">
              <ArchCrest className="w-full" />
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-5">
              {LINES.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0.25 : 0.8,
                    delay: reduce ? 0 : 0.6 + index * 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index === 0
                      ? "font-display text-[clamp(1.08rem,4vw,1.9rem)] tracking-[0.22em] text-ink uppercase"
                      : index === 1
                        ? "text-[clamp(0.95rem,2.8vw,1.18rem)] tracking-[0.42em] text-ink-soft uppercase"
                        : "font-display text-[clamp(1rem,3.8vw,1.6rem)] tracking-[0.16em] text-ink-soft uppercase"
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 3.2, ease: 'easeOut' }}
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
