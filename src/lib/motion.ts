import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function riseIn(reduce: boolean | null, delay = 0, distance = 18) {
  return {
    initial: { opacity: 0, y: reduce ? 0 : distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.3 : 0.9,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  }
}

export function sceneContentVariants(reduce: boolean | null): Variants {
  return {
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.25 : 0.7, ease: EASE },
    },
    exit: {
      opacity: 0,
      y: reduce ? 0 : -10,
      transition: { duration: reduce ? 0.18 : 0.32, ease: 'easeIn' },
    },
  }
}
