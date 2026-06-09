import { promises as fs } from 'node:fs'
import path from 'node:path'
import { Suspense } from 'react'
import { parseScript } from './script-parser'
import { SpeakerRuntime } from './speaker-runtime'

export const metadata = {
  title: 'Speaker view — DBiz Canvas Talk',
}

export default async function SpeakerPage() {
  const scriptPath = path.join(process.cwd(), 'src/app/deck/SCRIPT.md')
  const raw = await fs.readFile(scriptPath, 'utf8')
  const parsed = parseScript(raw)

  return (
    <Suspense fallback={null}>
      <SpeakerRuntime sections={parsed.sections} frame={parsed.frame} />
    </Suspense>
  )
}
