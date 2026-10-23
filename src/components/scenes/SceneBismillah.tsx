import { motion, useReducedMotion } from 'framer-motion'
import { invitation } from '../../data/invitation'
import { ArchCrest } from '../ui/ArchCrest'
import { Ornament } from '../ui/Ornament'
import { SceneFrame } from './SceneFrame'

export function SceneBismillah() {
  const reduce = useReducedMotion()

  return (
    <SceneFrame>
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0.25 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(227,173,98,0.18)_0%,transparent_68%)] blur-3xl" />
          <p
            className="relative font-arabic text-glow-gold text-[clamp(2rem,9vw,5rem)] leading-[1.8] tracking-[0.08em] text-gold-deep"
            lang="ar"
            dir="rtl"
          >
            {invitation.bismillah}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 0.9, delay: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 w-full max-w-sm"
        >
          <Ornament className="mx-auto w-full text-gold" strokeWidth={0.9} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 1.8, ease: 'easeOut' }}
          className="mt-4 text-xs uppercase tracking-[0.68em] text-ink-soft"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-[-38%] hidden md:block">
        <ArchCrest className="mx-auto w-[min(78vw,680px)] text-gold/60" />
      </div>
    </SceneFrame>
  )
}
