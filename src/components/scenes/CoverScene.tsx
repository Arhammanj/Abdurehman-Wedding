import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { SceneFrame } from './SceneFrame'
import { Heart } from 'lucide-react'

type CoverProps = {
  onOpen: () => void
}

export function CoverScene({ onOpen }: CoverProps) {
  const reduce = useReducedMotion()

  return (
    <SceneFrame>
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(227,173,98,0.16)_0%,transparent_70%)] blur-3xl" />
          <p
            className="relative font-arabic text-glow-gold text-[clamp(2.4rem,10vw,5.6rem)] leading-[1.9] tracking-[0.08em] text-gold-deep"
            lang="ar"
            dir="rtl"
          >
            {invitation.bismillah}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(0.9rem,2.6vw,1.02rem)] uppercase tracking-[0.48em] text-ink-soft"
        >
          Nikah Invitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="font-script text-glow-soft text-[clamp(2.6rem,10vw,5.6rem)] text-gold-deep">
            {invitation.groom}
          </p>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#b9a077]/80" />
            <Heart className="h-4 w-4 text-rose" aria-hidden="true" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#b9a077]/80" />
          </div>
          <p className="font-script text-glow-soft text-[clamp(2.6rem,10vw,5.6rem)] text-gold-deep">
            {invitation.bride}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 0.9, delay: reduce ? 0 : 2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={onOpen}
            className="group relative overflow-hidden rounded-full border border-[#b9a077]/80 bg-gradient-to-r from-[#fbf6ea]/90 via-white/80 to-[#fbf6ea]/90 px-10 py-3 text-[0.8rem] uppercase tracking-[0.52em] text-ink shadow-[0_30px_70px_-50px_rgba(150,118,58,0.9)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9843f]/70"
          >
            <span className="relative z-10">Open Invitation</span>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-[-120%] w-[60%] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-[1400ms] group-hover:translate-x-[320%]"
            />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.25 : 0.7, delay: reduce ? 0 : 2.8, ease: 'easeOut' }}
          className="mt-4 text-xs uppercase tracking-[0.36em] text-ink-soft"
        >
          {invitation.date} • {invitation.venueAddress.split(',')[0]}
        </motion.p>
      </div>
    </SceneFrame>
  )
}
