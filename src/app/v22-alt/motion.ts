'use client'

/* ═══════════════════════════════════════════════════════════════
   v22-alt motion runtime
   ───────────────────────────────────────────────────────────────
   One source of truth for all scroll-driven motion in this variant:

     • A single requestAnimationFrame loop that publishes the page's
       scrollY to the document as a CSS custom property `--scroll`.
       Every parallax layer reads from this variable in pure CSS
       (transform: translate3d). No per-element scroll handlers.

     • A single IntersectionObserver-based useReveal() hook that
       sets `is-visible` on a target so the unified `.v22alt-reveal`
       cascade in theme.css can fire (kicker → head → lead → body).

   Both honour `prefers-reduced-motion: reduce` — the parallax loop
   never starts; useReveal returns visible:true immediately.
   ═══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ─── Global scroll publisher ──────────────────────────────────
   Updates --scroll (raw scrollY in px) and --scrollvh (scrollY / vh)
   on <html> at most once per frame. Many subscribers, zero listeners. */

let scrollLoopStarted = false
function startScrollLoop() {
  if (scrollLoopStarted) return
  if (typeof window === 'undefined') return
  if (REDUCED_MOTION) return
  scrollLoopStarted = true

  let raf = 0
  let lastY = -1
  const root = document.documentElement
  const tick = () => {
    const y = window.scrollY
    if (y !== lastY) {
      lastY = y
      root.style.setProperty('--scroll', `${y}px`)
      root.style.setProperty('--scrollvh', `${y / window.innerHeight}`)
    }
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  // No teardown — the loop lives for the lifetime of the page.
  // (Variant pages mount once; SPA-style remounting is uncommon here.)
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => cancelAnimationFrame(raf))
  }
}

export function useScrollVar() {
  useEffect(() => { startScrollLoop() }, [])
}

/* ─── Reveal-on-enter ──────────────────────────────────────────
   Add ref to a wrapper, the wrapper gains .is-visible on first
   intersection. Children with .v22alt-reveal cascade in via CSS,
   staggered by --reveal-i (set inline per child). */

export function useReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {},
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(REDUCED_MOTION)

  useEffect(() => {
    if (REDUCED_MOTION) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, visible }
}

/* ─── Per-section progress publisher ───────────────────────────
   Tracks how far the user has scrolled THROUGH a section
   (0 at section top reaching viewport, 1 at section bottom leaving
   viewport) and writes it as a custom property on the section. Used
   for the hero→capabilities assembly cascade. */

export function useSectionProgress<T extends HTMLElement>(
  cssVar = '--section-p',
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (REDUCED_MOTION) return
    const el = ref.current
    if (!el) return
    let raf = 0

    const compute = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Travel = section height + viewport height. p = 0 when section
      // top hits viewport bottom; p = 1 when section bottom hits viewport top.
      const total = r.height + vh
      const traveled = vh - r.top
      const p = Math.max(0, Math.min(1, traveled / total))
      el.style.setProperty(cssVar, p.toFixed(4))
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = 0; compute() })
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [cssVar])

  return ref
}
