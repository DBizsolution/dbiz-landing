import { ImageResponse } from 'next/og'

export const alt = 'DBiz.ai — Your Enterprise. Agent-Operated.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const dmSansBold = await fetch(
    'https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIpthTg.ttf'
  ).then((res) => res.arrayBuffer())

  const dmSansRegular = await fetch(
    'https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#070F22',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Orange glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,106,42,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            zIndex: 1,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontFamily: 'DM Sans Bold',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
              }}
            >
              DBiz
            </span>
            <span
              style={{
                fontSize: '72px',
                fontFamily: 'DM Sans Bold',
                fontWeight: 800,
                color: '#E86A2A',
                letterSpacing: '-0.03em',
              }}
            >
              .ai
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontFamily: 'DM Sans',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '-0.01em',
              display: 'flex',
            }}
          >
            Your Enterprise. Agent-Operated.
          </div>

          {/* Pill badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            {['Human-Led', 'Agent-Operated', 'Data-Powered'].map((label) => (
              <div
                key={label}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: '1px solid rgba(232,106,42,0.25)',
                  background: 'rgba(232,106,42,0.08)',
                  color: '#E86A2A',
                  fontSize: '18px',
                  fontFamily: 'DM Sans Bold',
                  fontWeight: 700,
                  display: 'flex',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #E86A2A 0%, #0D1B3E 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'DM Sans Bold',
          data: dmSansBold,
          style: 'normal',
          weight: 800,
        },
        {
          name: 'DM Sans',
          data: dmSansRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
