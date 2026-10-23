import { useCallback, useEffect, useRef, useState } from 'react'
import { invitation } from '../data/invitation'

type ToastState = { kind: 'copied' | 'error'; id: number } | null

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(field)
  if (!ok) throw new Error('Copy failed')
}

export function useShare() {
  const [toast, setToast] = useState<ToastState>(null)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  const showToast = useCallback((kind: 'copied' | 'error') => {
    setToast({ kind, id: Date.now() })
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToast(null), 2600)
  }, [])

  const share = useCallback(async () => {
    const url = window.location.href
    const title = `${invitation.groom} & ${invitation.bride} — Nikah Invitation`
    const text = `You are cordially invited to the Nikah of ${invitation.groom} and ${invitation.bride} on ${invitation.date}.`

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    try {
      await copyText(url)
      showToast('copied')
    } catch {
      showToast('error')
    }
  }, [showToast])

  return { share, toast }
}
