import { useCallback, useEffect, useState } from 'react'
import { SCENE_DURATION, type Scene } from '../data/invitation'

export function useInvitationSequence() {
  const [scene, setScene] = useState<Scene>('cover')
  const [restartKey, setRestartKey] = useState(0)

  useEffect(() => {
    if (typeof scene !== 'number' || scene >= 6) return

    const duration = SCENE_DURATION[scene as 1 | 2 | 3 | 4 | 5]
    const timer = window.setTimeout(() => {
      setScene((current) => {
        if (typeof current !== 'number' || current !== scene) return current
        if (current >= 6) return current
        return (current + 1) as Scene
      })
    }, duration)

    return () => window.clearTimeout(timer)
  }, [scene, restartKey])

  const open = useCallback(() => {
    setScene(1)
    setRestartKey((key) => key + 1)
  }, [])

  const replay = useCallback(() => {
    setScene(1)
    setRestartKey((key) => key + 1)
  }, [])

  const goTo = useCallback((next: Exclude<Scene, 'cover'>) => {
    setScene(next)
  }, [])

  const next = useCallback(() => {
    setScene((current) => {
      if (current === 'cover') return 1
      if (current === 6) return current
      return (current + 1) as Scene
    })
  }, [])

  const previous = useCallback(() => {
    setScene((current) => {
      if (current === 'cover' || current === 1) return current
      return (current - 1) as Scene
    })
  }, [])

  return { scene, open, replay, goTo, next, previous }
}
