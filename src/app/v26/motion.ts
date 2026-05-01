'use client'
import { useEffect, useRef, useState } from 'react'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export function useRevealOnScroll<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options])
  return { ref, visible }
}

export function useScrollParallax(speed = 0.25) {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      el.style.setProperty('--v26-parallax', `${progress * speed * 100}px`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])
  return ref
}

export function useMouseParallax<T extends HTMLElement>(strength = 14) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let tx = 0, ty = 0
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      tx = ((e.clientX - cx) / rect.width) * strength
      ty = ((e.clientY - cy) / rect.height) * strength
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          el.style.setProperty('--v26-mx', `${tx}px`)
          el.style.setProperty('--v26-my', `${ty}px`)
        })
      }
    }
    const onLeave = () => {
      el.style.setProperty('--v26-mx', '0px')
      el.style.setProperty('--v26-my', '0px')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])
  return ref
}
