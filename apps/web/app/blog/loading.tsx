export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-gecko-green to-privacy-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="h-6 w-24 bg-white/20 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-12 w-3/4 bg-white/20 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-2/3 bg-white/20 rounded mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Blog post cards skeleton */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
              <div className="h-5 w-32 bg-gray-200 rounded mb-3"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-4">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
