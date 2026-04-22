import { Icon } from '@/components/icon'

type Logo = {
  kind: 'wordmark' | 'mark-text' | 'stacked'
  name: string
  suffix?: string
  mark?: string
  weight?: number
  tracking?: string
  caption?: string
}

const allLogos: Logo[] = [
  { kind: 'wordmark', name: 'ASCEND', weight: 800, tracking: '-0.03em' },
  { kind: 'mark-text', name: 'vertex', weight: 300, mark: 'ph:triangle-fill', tracking: '-0.02em' },
  { kind: 'stacked', name: 'NORTH', suffix: 'LINE', weight: 900, tracking: '0.04em' },
  { kind: 'wordmark', name: 'MERIDIAN', weight: 400, tracking: '0.35em' },
  { kind: 'wordmark', name: 'Helix', weight: 500, tracking: '-0.02em' },
  { kind: 'wordmark', name: 'KRONOS', weight: 500, tracking: '0.22em' },
  { kind: 'mark-text', name: 'Orbit', suffix: '.ai', weight: 600, mark: 'ph:circle-dashed', tracking: '-0.025em' },
  { kind: 'wordmark', name: 'PRISM', weight: 700, caption: 'Systems', tracking: '0.04em' },
  { kind: 'mark-text', name: 'ATLAS', weight: 800, mark: 'ph:polygon', tracking: '0.02em' },
  { kind: 'stacked', name: 'Fjord', suffix: 'Labs', weight: 700, tracking: '-0.025em' },
  { kind: 'wordmark', name: 'CIPHER', weight: 600, tracking: '-0.01em' },
  { kind: 'mark-text', name: 'solaris', weight: 500, mark: 'ph:sun-dim', tracking: '-0.02em' },
  { kind: 'wordmark', name: 'Tessera', weight: 500, tracking: '-0.025em' },
  { kind: 'wordmark', name: 'ARCANUM', weight: 400, tracking: '0.28em' },
  { kind: 'mark-text', name: 'Nimbus', weight: 700, mark: 'ph:cloud-fill', tracking: '-0.02em' },
  { kind: 'wordmark', name: 'HEDRON', weight: 900, tracking: '0.02em' },
  { kind: 'stacked', name: 'SENTIR', suffix: 'Group', weight: 700, tracking: '0.04em' },
  { kind: 'mark-text', name: 'Lumen', suffix: 'Co.', weight: 500, mark: 'ph:diamond-fill', tracking: '-0.02em' },
]

function LogoTile({ logo }: { logo: Logo }) {
  const style = {
    fontWeight: logo.weight ?? 600,
    letterSpacing: logo.tracking ?? 'normal',
  }

  if (logo.kind === 'wordmark') {
    return (
      <div className='v21-logo-tile'>
        <span className='v21-tile-wm' style={style}>
          {logo.name}
        </span>
        {logo.caption ? <span className='v21-tile-cap'>{logo.caption}</span> : null}
      </div>
    )
  }

  if (logo.kind === 'mark-text') {
    return (
      <div className='v21-logo-tile'>
        <span className='v21-tile-wm v21-tile-with-mark' style={style}>
          {logo.mark ? <Icon icon={logo.mark} width={18} /> : null}
          <span>
            {logo.name}
            {logo.suffix ? <span className='v21-tile-suf'>{logo.suffix}</span> : null}
          </span>
        </span>
      </div>
    )
  }

  if (logo.kind === 'stacked') {
    return (
      <div className='v21-logo-tile'>
        <span className='v21-tile-wm v21-tile-stacked' style={style}>
          <span className='v21-tile-top'>{logo.name}</span>
          <span className='v21-tile-bot'>{logo.suffix}</span>
        </span>
      </div>
    )
  }

  return null
}

export function LogoWall() {
  const doubled = [...allLogos, ...allLogos]

  return (
    <section className='v21-logos-wrap'>
      <div className='v21-container'>
        <div className='v21-logos-head'>
          <span className='v21-logos-kicker'>N°01·B / Client register</span>
        </div>
      </div>
      <div className='v21-logos-marquee'>
        <div className='v21-logos-track'>
          {doubled.map((logo, i) => (
            <LogoTile key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
