export default function ProductsLoading() {
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

      {/* Product cards skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
              <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 w-2/3 bg-gray-200 rounded mb-3"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
