import { NextResponse } from 'next/server'

/**
 * Validate API key from request headers
 */
export function validateApiKey(request: Request): boolean {
  const apiKey = request.headers.get('X-API-Key')
  const validKey = process.env.ADMIN_API_KEY

  if (!validKey) {
    console.error('ADMIN_API_KEY environment variable is not set')
    return false
  }

  return apiKey === validKey
}

/**
 * Return 401 Unauthorized response
 */
export function unauthorizedResponse(): NextResponse {
  return NextResponse.json(
    { success: false, error: 'Unauthorized' },
    { status: 401 }
  )
}

/**
 * Return success response with data
 */
export function successResponse<T>(data: T, status: number = 200): NextResponse {
  return NextResponse.json(
    { success: true, data },
    { status }
  )
}

/**
 * Return error response
 */
export function errorResponse(
  error: string,
  status: number = 400,
  details?: Record<string, unknown>
): NextResponse {
  const body: { success: false; error: string; details?: Record<string, unknown> } = {
    success: false,
    error,
  }
  if (details) {
    body.details = details
  }
  return NextResponse.json(body, { status })
}

/**
 * Return not found response
 */
export function notFoundResponse(resource: string = 'Resource'): NextResponse {
  return NextResponse.json(
    { success: false, error: `${resource} not found` },
    { status: 404 }
  )
}
