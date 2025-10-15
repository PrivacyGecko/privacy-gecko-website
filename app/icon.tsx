import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation - serve the actual favicon
export default async function Icon() {
  const faviconPath = path.join(process.cwd(), 'public/images/favicon.png')
  const imageBuffer = fs.readFileSync(faviconPath)

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
