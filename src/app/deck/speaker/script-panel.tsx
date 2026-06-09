'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { SlideEntry } from '../slides'
import type { ScriptSection } from './script-parser'

type ScriptPanelProps = {
  section: ScriptSection | undefined
  frame: string
  nextEntry: SlideEntry | null
}

export function ScriptPanel({ section, frame, nextEntry }: ScriptPanelProps) {
  return (
    <div className='speaker-script-inner'>
      {section ? (
        <article className='speaker-script-body'>
          <header className='speaker-script-head'>
            <span className='speaker-script-marker'>{section.marker}</span>
            <h1>{section.title}</h1>
            {section.time ? <span className='speaker-script-time'>{section.time}</span> : null}
          </header>
          <div className='speaker-script-md'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body}</ReactMarkdown>
          </div>
        </article>
      ) : (
        <article className='speaker-script-body speaker-script-empty'>
          <header className='speaker-script-head'>
            <span className='speaker-script-marker'>—</span>
            <h1>No script entry for this slide</h1>
          </header>
          <p>This slide isn&rsquo;t covered in SCRIPT.md. Add a section keyed by the slide marker to populate notes.</p>
        </article>
      )}

      {nextEntry ? (
        <footer className='speaker-script-next'>
          <span className='speaker-script-next-label'>Next</span>
          <span className='speaker-script-next-marker'>{nextEntry.marker}</span>
          <span className='speaker-script-next-title'>{nextEntry.title}</span>
          {nextEntry.time ? (
            <span className='speaker-script-next-time'>{nextEntry.time}</span>
          ) : null}
        </footer>
      ) : null}

      <details className='speaker-script-frame'>
        <summary>Frame &amp; how-to-use</summary>
        <div className='speaker-script-md'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{frame}</ReactMarkdown>
        </div>
      </details>
    </div>
  )
}
