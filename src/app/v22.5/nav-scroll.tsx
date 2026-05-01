'use client'

import { useEffect } from 'react'

export function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector('.v22-nav')
    if (!nav) return

    const hero = document.querySelector('.v22-hero') as HTMLElement | null

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      ;(nav as HTMLElement).style.setProperty('--v22-scroll-progress', String(progress))

      const navHeight = (nav as HTMLElement).offsetHeight || 80
      const threshold = hero
        ? hero.offsetTop + hero.offsetHeight - navHeight
        : 50
      if (window.scrollY > threshold) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return null
}
