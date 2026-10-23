import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { sceneContentVariants } from '../../lib/motion'
import { Bokeh } from '../ui/Bokeh'
import { FairyLights } from '../ui/FairyLights'
import { FloatingPetals } from '../ui/FloatingPetals'
import { GoldenParticles } from '../ui/GoldenParticles'
import { JaliPattern } from '../ui/JaliPattern'
import { Lanterns } from '../ui/Lanterns'

type SceneFrameProps = {
  children: ReactNode
  withCard?: boolean
  withPetals?: boolean
  withSweep?: boolean
}

export function SceneFrame({
  children,
  withCard = false,
  withPetals = false,
  withSweep = false,
}: SceneFrameProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sceneContentVariants(reduce)}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 py-6 sm:px-6"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(251,246,234,1) 0%, rgba(239,227,207,1) 55%, rgba(227,214,189,1) 100%)',
          }}
        />
        <Bokeh />
        <FairyLights />
        <Lanterns />
        <GoldenParticles />
        {withPetals ? <FloatingPetals /> : null}
        <JaliPattern className="absolute inset-0 h-full w-full text-gold/12" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(60% 40% at 50% 0%, rgba(255,253,246,0.7) 0%, transparent 70%)',
          }}
        />
      </div>

      {withSweep ? (
        <motion.div
          aria-hidden="true"
          initial={{ x: '-140%' }}
          animate={{ x: ['-140%', '140%'] }}
          transition={{ duration: reduce ? 0.01 : 2.4, ease: [0.25, 0.8, 0.25, 1], delay: reduce ? 0 : 0.4 }}
          className="pointer-events-none absolute inset-y-0 w-[28%] bg-gradient-to-r from-transparent via-[#f7e7c3]/35 to-transparent"
        />
      ) : null}

      <div className="relative z-10 w-full max-w-4xl">
        <div className={withCard ? 'mx-auto w-full max-w-[680px]' : 'mx-auto w-full max-w-3xl'}>
          {children}
        </div>
      </div>
    </motion.section>
  )
}
