/* Hero proof stats with a count-up animation that fires when scrolled into
   view. Numeric stats animate 0 → target; text stats (CSP) render as-is. */

'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = { num?: number; suffix?: string; text?: string; label: string }

const stats: Stat[] = [
  { num: 5, label: 'Solutions Partner designations' },
  { num: 150, suffix: '+', label: 'Microsoft Certified Engineers' },
  { num: 2, label: 'Advanced Specialisations' },
  { text: 'CSP', label: 'Cloud Solution Provider' },
]

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return
        started.current = true
        const dur = 1100
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(target * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function HeroStats() {
  return (
    <ul className='v22-ms-hero-stats' aria-label='At a glance'>
      {stats.map((s) => (
        <li key={s.label}>
          <span className='v'>
            {s.text ? s.text : <CountUp target={s.num!} suffix={s.suffix} />}
          </span>
          <span className='l'>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
