import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'

export function SceneDate() {
  const reduce = useReducedMotion()

  return (
    <SceneFrame withSweep>
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: reduce ? '0.56em' : '0.46em' }}
          animate={{ opacity: 1, letterSpacing: '0.56em' }}
          transition={{ duration: reduce ? 0.25 : 0.9, delay: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(0.85rem,2.4vw,1rem)] uppercase tracking-[0.56em] text-ink-soft"
        >
          Save the Date
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 1, delay: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8"
        >
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-full bg-[radial-gradient(circle,rgba(227,173,98,0.18)_0%,transparent_70%)] blur-3xl" />
          <p className="relative font-display text-glow-gold text-[clamp(3.4rem,14vw,9rem)] tracking-[0.28em] text-gold-deep sm:tracking-[0.36em]">
            {invitation.dateUpper}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.25 : 0.8, delay: reduce ? 0 : 2.2, ease: 'easeOut' }}
          className="mt-8 w-full max-w-sm"
        >
          <Ornament className="mx-auto w-full text-gold" strokeWidth={0.8} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : 2.9, ease: 'easeOut' }}
          className="mt-5 text-[clamp(0.9rem,2.6vw,1.02rem)] tracking-[0.4em] text-ink-soft uppercase"
        >
          {invitation.day} • {invitation.date}
        </motion.p>
      </div>
    </SceneFrame>
  )
}
