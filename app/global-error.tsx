'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console
    console.error('Global error boundary caught:', error)

    // In production, log to error tracking service
    // Example: Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">⚠️</div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Critical Error
            </h1>

            <p className="text-gray-600 mb-6">
              We encountered a critical error. Please refresh the page or try again later.
            </p>

            {process.env.NODE_ENV === 'development' && error.message && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <p className="text-sm font-mono text-red-800 break-words">
                  <strong>Error:</strong> {error.message}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={reset}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
