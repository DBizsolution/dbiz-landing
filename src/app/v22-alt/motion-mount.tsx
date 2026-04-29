'use client'

/* Tiny client component that boots the motion runtime once per page.
   Renders nothing — its only job is to start the global scrollY publisher
   so the v22alt-parallax / cascade CSS can read --scroll on <html>. */

import { useScrollVar } from './motion'

export function MotionMount() {
  useScrollVar()
  return null
}
