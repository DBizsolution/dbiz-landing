'use client'

import { useEffect, useState } from 'react'

type DeckTheme = 'dark' | 'light'

const STORAGE_KEY = 'dbiz-deck-theme'

export function DeckThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<DeckTheme>('dark')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(stored)
      }
    } catch {
      /* private mode / disabled storage — fall back to default */
    }
  }, [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key !== 't' && event.key !== 'T') return
      const target = event.target as HTMLElement | null
      if (target?.matches('input, textarea, [contenteditable=true]')) return
      event.preventDefault()
      setTheme((current) => {
        const next: DeckTheme = current === 'dark' ? 'light' : 'dark'
        try {
          window.localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* ignore */
        }
        return next
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className='deck-scope' data-theme={theme}>
      {children}
    </div>
  )
}
