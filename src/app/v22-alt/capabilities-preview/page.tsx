/* Preview page comparing three capabilities section layouts.
   Route: /v22/capabilities-preview */

import Link from 'next/link'
import { OptionA } from './option-a'
import { OptionAMobile } from './option-a-mobile'
import { OptionB } from './option-b'
import { OptionC } from './option-c'
import './preview.css'

export default function CapabilitiesPreview() {
  return (
    <>
      <div className='capX-preview-nav'>
        <Link href='/v22'>← Back to v22</Link>
        <div className='capX-preview-nav-links'>
          <a href='#cap-a'>A · Exploded</a>
          <a href='#cap-a-mobile'>A · Mobile</a>
          <a href='#cap-b'>B · Cascade</a>
          <a href='#cap-c'>C · Orbital</a>
        </div>
      </div>
      <OptionA />
      <div className='capX-divider'>
        <span>End of Option A</span>
      </div>
      <OptionAMobile />
      <div className='capX-divider'>
        <span>End of Option A · Mobile</span>
      </div>
      <OptionB />
      <div className='capX-divider'>
        <span>End of Option B</span>
      </div>
      <OptionC />
      <div className='capX-divider'>
        <span>End of Option C</span>
      </div>
    </>
  )
}
