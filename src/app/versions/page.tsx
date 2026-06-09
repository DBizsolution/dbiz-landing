import Link from 'next/link'
import { versions } from '@/lib/versions'

export default function VersionsIndex() {
  return (
    <main className='mx-auto max-w-2xl px-6 py-24 font-mono text-sm'>
      <header className='mb-12'>
        <h1 className='mb-2 text-2xl font-semibold tracking-tight'>
          DBiz.ai — homepage explorations
        </h1>
        <p className='text-neutral-500'>
          Index of homepage variants. Each version has its own theme, fonts, and motion language.
        </p>
      </header>

      <ul className='flex flex-col divide-y divide-neutral-200 border-y border-neutral-200'>
        {versions.map((version) => (
          <li key={version.slug}>
            <Link
              href={`/${version.slug}`}
              target='_blank'
              rel='noopener'
              className='flex items-center justify-between gap-6 py-4 transition-colors hover:bg-neutral-50'
            >
              <div>
                <div className='font-semibold text-neutral-900'>{version.name}</div>
                <div className='text-neutral-500'>{version.tagline}</div>
              </div>
              <span className='text-xs uppercase tracking-wider text-neutral-400'>
                {version.status}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href='/styleguide'
            target='_blank'
            rel='noopener'
            className='flex items-center justify-between gap-6 py-4 transition-colors hover:bg-neutral-50'
          >
            <div>
              <div className='font-semibold text-neutral-900'>Brand Styleguide</div>
              <div className='text-neutral-500'>Colors, typography, and core patterns</div>
            </div>
            <span className='text-xs uppercase tracking-wider text-neutral-400'>ref</span>
          </Link>
        </li>
      </ul>

      <footer className='mt-16 text-xs text-neutral-400'>
        Reference HTML at <code>reference/dbiz-landing-original.html</code>
      </footer>
    </main>
  )
}
