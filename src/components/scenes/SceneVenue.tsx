import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { FloralCorner } from '../ui/FloralCorner'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'
import { MapPin, ExternalLink } from 'lucide-react'

export function SceneVenue() {
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

        <div className="card-surface arch-card relative mx-auto overflow-hidden px-6 py-10 shadow-[0_60px_120px_-80px_rgba(58,47,35,0.9)] ring-1 ring-[#b9a077]/40 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,253,246,0.9)_0%,transparent_74%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/40" />
          <div className="pointer-events-none absolute inset-x-6 inset-y-5 rounded-[inherit] ring-1 ring-[#c9b08b]/24" />
          <div className="pointer-events-none absolute left-1/2 top-[-28%] h-[34%] w-[68%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(227,173,98,0.16)_0%,transparent_72%)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[clamp(0.9rem,2.6vw,1rem)] uppercase tracking-[0.56em] text-ink-soft"
            >
              Venue
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.25 : 0.9, delay: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <h3 className="font-display text-[clamp(1.6rem,6vw,2.9rem)] tracking-[0.12em] text-ink uppercase">
                {invitation.venueName}
              </h3>
              <p className="max-w-md text-[clamp(1rem,3.2vw,1.18rem)] leading-relaxed tracking-[0.18em] text-ink-soft uppercase">
                {invitation.venueAddress}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 2, ease: 'easeOut' }}
              className="mt-8 flex items-center gap-2 rounded-full border border-[#b9a077]/60 px-5 py-2 text-xs uppercase tracking-[0.42em] text-ink-soft"
            >
              <MapPin className="h-4 w-4 text-gold-deep" aria-hidden="true" />
              <span>Faisalabad</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 2.6, ease: 'easeOut' }}
              className="mt-6 w-full max-w-xs"
            >
              <a
                href={invitation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto flex items-center justify-center gap-2 rounded-full border border-[#b9a077]/70 bg-white/40 px-6 py-2 text-[0.8rem] uppercase tracking-[0.38em] text-ink transition hover:border-[#a9843f] hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9843f]/70"
              >
                <span>View Location</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 3.4, ease: 'easeOut' }}
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
