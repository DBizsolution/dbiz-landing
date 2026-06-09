'use client'

import { useEffect } from 'react'

export function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector('.v14-nav')
    if (!nav) return

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
