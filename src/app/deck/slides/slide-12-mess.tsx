import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Thumb = {
  marker: string
  icon: string
  kind: string
  label: string
  hint?: string
}

const thumbs: Thumb[] = [
  { marker: 'BRD · 01', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V1' },
  { marker: 'BRD · 02', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V2' },
  { marker: 'BRD · 03', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V3', hint: 'scope expanded' },
  { marker: 'BRD · 04', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V4' },
  { marker: 'BRD · 05', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V5', hint: 'rules rewrite' },
  { marker: 'BRD · 06', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V6' },
  { marker: 'BRD · 07', icon: 'ph:file-text-bold', kind: 'BRD', label: 'V7 · final' },
  { marker: 'JM · 01', icon: 'ph:tree-structure-bold', kind: 'Journey map', label: 'Wharf actor' },
  { marker: 'JM · 02', icon: 'ph:tree-structure-bold', kind: 'Journey map', label: 'Booking flow' },
  { marker: 'JM · 03', icon: 'ph:tree-structure-bold', kind: 'Journey map', label: 'Driver pickup' },
  { marker: 'NT · 01', icon: 'ph:note-pencil-bold', kind: 'Note', label: 'Call · 14 Mar', hint: 'fees' },
  { marker: 'NT · 02', icon: 'ph:note-pencil-bold', kind: 'Note', label: 'Call · 19 Mar', hint: 'auth' },
]

export function Slide12Mess({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · What went in
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            All of <em>this.</em> Over a week and a half.
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            BRD revisions. Journey maps. Call notes. Different people, different
            shapes of input. None of it bad. All of it inconsistent.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {thumbs.map((t) => (
            <div
              key={t.marker}
              className='deck-box deck-box-mute'
              style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', minWidth: 0 }}
            >
              <div className='deck-box-head' style={{ marginBottom: 8, paddingBottom: 6, fontSize: '0.62rem' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.kind}</span>
                <span className='k' style={{ fontSize: '0.6rem' }}>{t.marker}</span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  border: '1px dashed var(--d-hair)',
                  padding: 12,
                  minHeight: 100,
                }}
              >
                <Icon icon={t.icon} width={24} color='var(--d-ink-3)' />
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--d-ink)', textAlign: 'center', lineHeight: 1.3 }}>
                  {t.label}
                </div>
                {t.hint ? (
                  <div className='deck-mono' style={{ fontSize: '0.6rem', textAlign: 'center' }}>{t.hint}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className='deck-mono'>
          The canvas gives all of this one shape — independent of how it arrived.
        </div>
      </div>
    </SlideShell>
  )
}
