import { ImageResponse } from 'next/og'
import { join } from 'path'
import { readFileSync } from 'fs'

// export const runtime = 'edge'
export const alt = 'Muhtasim Fuad - Full Stack Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const logoPath = join(process.cwd(), 'src', 'assets', 'logo.jpg')
  const logoData = readFileSync(logoPath)
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <img
          src={logoBase64}
          alt="Logo"
          style={{
            width: '120px',
            height: '120px',
            marginBottom: '32px',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontFamily: 'Geist',
            fontWeight: 700,
            marginBottom: '24px',
            textAlign: 'center',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textRendering: 'geometricPrecision',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Muhtasim Fuad
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            fontFamily: 'Geist',
            fontWeight: 500,
            textAlign: 'center',
            maxWidth: '800px',
            color: '#a1a1aa',
            letterSpacing: '0.5px',
            textRendering: 'geometricPrecision',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Full Stack Software Engineer
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '18px',
            color: '#71717a',
            fontFamily: 'Geist Mono',
            textRendering: 'geometricPrecision',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          fuadnafiz98.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
