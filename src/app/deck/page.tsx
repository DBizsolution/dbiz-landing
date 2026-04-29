import { Suspense } from 'react'
import DeckRuntime from './deck-runtime'

export default function DeckPage() {
  return (
    <Suspense fallback={null}>
      <DeckRuntime />
    </Suspense>
  )
}
