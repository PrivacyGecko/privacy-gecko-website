import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware for caching headers and performance optimization
 * Runs on all blog routes
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const pathname = request.nextUrl.pathname

  // Cache static assets aggressively (images, fonts, etc.)
  if (pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|avif|woff|woff2|ttf|eot)$/)) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
    return response
  }

  // Cache CSS and JS with immutable (versioned by Next.js)
  if (pathname.match(/\.(css|js)$/)) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
    return response
  }

  // Cache HTML pages with stale-while-revalidate for good UX
  // Blog pages are static/ISR so they can be cached
  if (
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/'
  ) {
    // Don't cache admin or API routes
    if (pathname.includes('/api/') || pathname.includes('/admin/')) {
      response.headers.set('Cache-Control', 'no-store, must-revalidate')
      return response
    }

    // Cache article and category pages
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
    )
  }

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

/**
 * Configure which routes the middleware applies to
 * Excludes _next static files and internal Next.js routes
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
