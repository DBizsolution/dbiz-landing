const allLogos: string[] = [
  'ASCEND',
  'VERTEX',
  'NORTHLINE',
  'MERIDIAN',
  'HELIX',
  'KRONOS',
  'ORBIT.AI',
  'PRISM SYSTEMS',
  'ATLAS',
  'FJORD LABS',
  'CIPHER',
  'SOLARIS',
  'TESSERA',
  'ARCANUM',
  'NIMBUS',
  'HEDRON',
  'SENTIR GROUP',
  'LUMEN CO.',
]

export function LogoWall() {
  const doubled = [...allLogos, ...allLogos]

  return (
    <section className='v22alt-logos-wrap'>
      <div className='v22alt-container'>
        <div className='v22alt-logos-head'>
          <span className='v22alt-logos-kicker'>N°01·B / Client register</span>
        </div>
      </div>
      <div className='v22alt-logos-marquee'>
        <div className='v22alt-logos-track'>
          {doubled.map((name, i) => (
            <span className='v22alt-logo-item' key={`${name}-${i}`}>
              <span className='v22alt-logo-name'>{name}</span>
              <span className='v22alt-logo-sep' aria-hidden='true' />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
