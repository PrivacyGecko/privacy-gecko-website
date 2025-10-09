import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Privacy Gecko - Privacy Tools That Actually Work'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation - Reuse the OpenGraph image for Twitter
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: '60px',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo/Emoji */}
          <div
            style={{
              fontSize: 180,
              marginBottom: 40,
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
            }}
          >
            🦎
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: 'white',
              margin: 0,
              marginBottom: 20,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            Privacy Gecko
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 36,
              color: 'rgba(255,255,255,0.95)',
              margin: 0,
              marginBottom: 40,
              fontWeight: 600,
              textShadow: '0 2px 10px rgba(0,0,0,0.15)',
            }}
          >
            Privacy Tools That Actually Work
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 30,
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,0.15)',
                padding: '12px 24px',
                borderRadius: 12,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ fontSize: 28 }}>🔒</span>
              <span style={{ color: 'white', fontSize: 24, fontWeight: 600 }}>No Tracking</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,0.15)',
                padding: '12px 24px',
                borderRadius: 12,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ fontSize: 28 }}>🌐</span>
              <span style={{ color: 'white', fontSize: 24, fontWeight: 600 }}>Open Source</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,0.15)',
                padding: '12px 24px',
                borderRadius: 12,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ fontSize: 28 }}>⚡</span>
              <span style={{ color: 'white', fontSize: 24, fontWeight: 600 }}>8 Tools</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          <span>privacygecko.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
