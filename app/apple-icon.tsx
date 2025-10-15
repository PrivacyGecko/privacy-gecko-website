import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation - serve the actual favicon scaled for Apple devices
export default async function AppleIcon() {
  const faviconPath = path.join(process.cwd(), 'public/images/favicon_500x500.png')
  const imageBuffer = fs.readFileSync(faviconPath)

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
