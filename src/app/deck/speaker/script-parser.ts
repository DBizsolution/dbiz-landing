export type ScriptSection = {
  marker: string
  title: string
  time: string
  body: string
}

export type ParsedScript = {
  frame: string
  sections: Record<string, ScriptSection>
}

const HEADING_RE = /^### (S·[\d·]+)\s+—\s+(.+)$/

export function parseScript(md: string): ParsedScript {
  const lines = md.split('\n')
  const sections: Record<string, ScriptSection> = {}
  const frameLines: string[] = []
  let current: { marker: string; title: string; time: string; bodyLines: string[] } | null = null
  let seenFirstSection = false

  const commit = () => {
    if (!current) return
    const body = trimBlankLines(stripTrailingHr(current.bodyLines)).join('\n')
    sections[current.marker] = {
      marker: current.marker,
      title: current.title,
      time: current.time,
      body,
    }
    current = null
  }

  for (const line of lines) {
    const headingMatch = line.match(HEADING_RE)
    if (headingMatch) {
      commit()
      seenFirstSection = true
      const marker = headingMatch[1]
      const rest = headingMatch[2]
      const lastSep = rest.lastIndexOf(' · ')
      const title = lastSep >= 0 ? rest.slice(0, lastSep).trim() : rest.trim()
      const time = lastSep >= 0 ? rest.slice(lastSep + 3).trim() : ''
      current = { marker, title, time, bodyLines: [] }
      continue
    }
    if (line.startsWith('## ') && current) {
      commit()
      continue
    }
    if (current) {
      current.bodyLines.push(line)
    } else if (!seenFirstSection) {
      frameLines.push(line)
    }
  }
  commit()

  return {
    frame: trimBlankLines(frameLines).join('\n'),
    sections,
  }
}

function trimBlankLines(lines: string[]): string[] {
  let start = 0
  let end = lines.length
  while (start < end && lines[start].trim() === '') start += 1
  while (end > start && lines[end - 1].trim() === '') end -= 1
  return lines.slice(start, end)
}

function stripTrailingHr(lines: string[]): string[] {
  const out = [...lines]
  while (out.length > 0) {
    const last = out[out.length - 1].trim()
    if (last === '' || last === '---') {
      out.pop()
      continue
    }
    break
  }
  return out
}
